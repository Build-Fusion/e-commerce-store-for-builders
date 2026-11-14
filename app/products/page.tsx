import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";

export default function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  return (
    <ProductsContent searchParams={searchParams} />
  );
}

async function ProductsContent({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category;
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">All Products</h1>
        <p className="text-slate-600 mt-1">{filtered.length} items</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}
        <aside className="lg:w-56 flex-shrink-0">
          <h2 className="font-semibold text-slate-900 mb-3">Categories</h2>
          <ul className="space-y-1">
            <li>
              <Link
                href="/products"
                className={`block px-3 py-2 rounded-md text-sm ${
                  !category ? "bg-brand-50 text-brand-700 font-medium" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                All products
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/products?category=${cat.slug}`}
                  className={`block px-3 py-2 rounded-md text-sm ${
                    category === cat.slug ? "bg-brand-50 text-brand-700 font-medium" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <p className="text-slate-500">No products found in this category.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}