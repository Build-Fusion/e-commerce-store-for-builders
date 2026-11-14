"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { useState } from "react";

export function Header() {
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-slate-900 tracking-tight">
            Builder<span className="text-brand-500">Supply</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Products
            </Link>
            <Link href="/products?category=power-tools" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Power Tools
            </Link>
            <Link href="/products?category=safety" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              Safety
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 text-slate-600 hover:text-slate-900">
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-brand-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col gap-2">
              <Link href="/" className="px-3 py-2 text-sm font-medium text-slate-700" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/products" className="px-3 py-2 text-sm font-medium text-slate-700" onClick={() => setMobileOpen(false)}>
                Products
              </Link>
              <Link href="/products?category=power-tools" className="px-3 py-2 text-sm font-medium text-slate-700" onClick={() => setMobileOpen(false)}>
                Power Tools
              </Link>
              <Link href="/products?category=safety" className="px-3 py-2 text-sm font-medium text-slate-700" onClick={() => setMobileOpen(false)}>
                Safety
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}