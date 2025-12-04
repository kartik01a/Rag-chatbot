// app/api/chat/route.ts

import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { OpenAI } from "openai";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid message" },
        { status: 400 }
      );
    }

    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-large",
      input: message,
    });

    const queryEmbedding = embeddingRes.data[0].embedding;

    const { data: matches, error } = await supabase.rpc("match_documents", {
      query_embedding: queryEmbedding,
      match_count: 5,
      filter: {},
    });

    if (error) {
      console.error("Supabase match_documents error", error);
    }

    console.log(matches,"matches")

    // If no good matches or irrelevant question → generic message
    const THRESHOLD = 0.50;
    const topMatch = matches?.[0];

    if (!matches || matches.length === 0 || topMatch.similarity < THRESHOLD) {
      const generic = `I can help you with questions about Natural Baby products, such as diapers, swaddles, carriers, lotions, and more. Please ask something related to our baby products.`;
      return NextResponse.json({
        answer: generic,
        sourceChunks: [],
      });
    }

    const contextText = matches
      .map((m: any) => m.content)
      .join("\n\n---\n\n");

    const systemPrompt = `
      You are a friendly, knowledgeable assistant for the baby products brand "Natural Baby".
      You ONLY answer questions related to Natural Baby products (diapers, swaddles, teether, lotion, etc.).
      Use the context provided. If something is not in the context, say you are not sure and suggest a related product question instead.
      Keep answers short, clear, and parent-friendly.
    `.trim();

    const userPrompt = `
      Context from our product knowledge base:
      ${contextText}

      User question: ${message}

      Answer in a helpful way, referencing Natural Baby products where possible.
    `.trim();

    // 3) Call OpenAI for final answer
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.4,
    });

    const answer =
      completion.choices[0]?.message?.content ??
      "Sorry, I couldn't generate a response.";

    return NextResponse.json({
      answer,
      sourceChunks: matches,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
