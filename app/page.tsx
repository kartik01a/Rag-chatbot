import { products } from "../data/products";
import { ProductCard } from "./components/ProductCards";
import { Chatbot } from "./components/Chatbox";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Natural Baby – Gentle Care for Little Ones
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-2xl">
            Browse our range of baby-safe products. Use the chatbot in the
            bottom-right corner to ask questions about ingredients, age
            suitability, safety, and more.
          </p>
        </header>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      {/* Floating Chatbot */}
      <Chatbot />
    </main>
  );
}
