"use client";

import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className={`inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-lg transition ${
        added
          ? "bg-green-600 text-white"
          : "bg-brand-500 hover:bg-brand-600 text-white"
      }`}
    >
      {added ? (
        <>
          <Check className="w-5 h-5" />
          Added to cart
        </>
      ) : (
        <>
          <ShoppingCart className="w-5 h-5" />
          Add to cart
        </>
      )}
    </button>
  );
}