import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { Star } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition"
    >
      <div className="aspect-square relative bg-slate-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
          {product.category.replace("-", " ")}
        </p>
        <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-2">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs text-slate-600">{product.rating}</span>
        </div>
        <p className="mt-2 font-bold text-slate-900">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}