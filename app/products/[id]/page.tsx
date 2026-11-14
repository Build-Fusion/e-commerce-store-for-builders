import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ArrowLeft, Star } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link href="/products" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-square relative bg-slate-100 rounded-2xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <p className="text-sm font-medium text-brand-600 uppercase tracking-wide mb-2">
            {product.category.replace("-", " ")}
          </p>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-slate-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-slate-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-3xl font-bold text-slate-900 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>

          <div className="space-y-3 mb-8">
            {product.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                {f}
              </div>
            ))}
          </div>

          <AddToCartButton product={product} />

          <p className="mt-4 text-sm text-slate-500">
            In stock · Ships within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}