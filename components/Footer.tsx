import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-xl text-white tracking-tight">
              Builder<span className="text-brand-400">Supply</span>
            </Link>
            <p className="mt-3 text-sm max-w-sm">
              Premium tools, hardware, and materials for professional builders and contractors.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-white">All products</Link></li>
              <li><Link href="/products?category=power-tools" className="hover:text-white">Power Tools</Link></li>
              <li><Link href="/products?category=hand-tools" className="hover:text-white">Hand Tools</Link></li>
              <li><Link href="/products?category=safety" className="hover:text-white">Safety Gear</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Trade accounts</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-sm text-center">
          © {new Date().getFullYear()} BuilderSupply. Built for professionals.
        </div>
      </div>
    </footer>
  );
}