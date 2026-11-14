import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight, Shield, Truck, Wrench } from "lucide-react";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-brand-400 font-medium mb-3 tracking-wide uppercase text-sm">
              Built for professionals
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Tools & materials that get the job done
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Premium power tools, fasteners, safety gear, and construction materials trusted by builders and contractors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-lg transition"
              >
                Shop all products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products?category=power-tools"
                className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Power Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-brand-50 rounded-lg">
                <Truck className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Fast delivery</h3>
                <p className="text-sm text-slate-600 mt-1">Same-day shipping on most stock items to job sites.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-brand-50 rounded-lg">
                <Shield className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Pro-grade quality</h3>
                <p className="text-sm text-slate-600 mt-1">Tools and materials rated for daily professional use.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-brand-50 rounded-lg">
                <Wrench className="w-6 h-6 text-brand-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Trade support</h3>
                <p className="text-sm text-slate-600 mt-1">Expert advice and bulk pricing for contractors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Featured products</h2>
            <p className="text-slate-600 mt-1">Top picks for the job site</p>
          </div>
          <Link href="/products" className="text-brand-600 hover:text-brand-700 font-medium text-sm flex items-center gap-1">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}