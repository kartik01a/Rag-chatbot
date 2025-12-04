// components/ProductCard.tsx

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "../../data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="p-4 flex flex-col justify-between h-full">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-sm sm:text-base">{product.name}</h3>
          <Badge variant="outline" className="text-[10px] sm:text-xs">
            {product.category}
          </Badge>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          {product.shortDescription}
        </p>
        <p className="text-[11px] sm:text-xs text-muted-foreground">
          Age: {product.ageRange}
        </p>
        <ul className="text-[11px] sm:text-xs list-disc list-inside text-muted-foreground space-y-1 mt-1">
          {product.keyFeatures.slice(0, 3).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
      <p className="mt-3 text-[11px] sm:text-xs text-muted-foreground italic">
        Ask the chatbot for more details about “{product.name}”.
      </p>
    </Card>
  );
}
