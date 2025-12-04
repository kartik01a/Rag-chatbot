// scripts/embed.ts

import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { OpenAI } from "openai";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { config } from "dotenv";

config({ path: path.resolve(process.cwd(), ".env.local") });

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY! 
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
});

async function embed() {

  const filePath = path.join(process.cwd(), "data", "natural-baby.txt");
  const rawText = fs.readFileSync(filePath, "utf-8");

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 80,
  });

  const chunks = await splitter.splitText(rawText);

  console.log(`🔹 Total chunks created: ${chunks.length}`);

  for (const chunk of chunks) {
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-large",
      input: chunk,
    });

    const embedding = embeddingRes.data[0].embedding;

    const { error } = await supabase.from("documents").insert({
      content: chunk,
      metadata: { brand: "Natural Baby" },
      embedding
    });

    if (error) {
      console.error("❌ Error inserting chunk:", error);
    } else {
      console.log("✅ Inserted chunk:", chunk.substring(0, 50));
    }
  }

  console.log("🎉 Embedding completed successfully!");
}

embed();
