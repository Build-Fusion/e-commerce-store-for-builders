"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h1>
        <p className="text-slate-600 mb-6">Add some tools and materials to get started.</p>
        <Link
          href="/products"
          className="inline-flex items-center bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-white border border-slate-200 rounded-xl p-4"
            >
              <div className="w-24 h-24 bg-slate-100 rounded-lg flex-shrink-0 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <Link href={`/products/${item.id}`} className="font-semibold text-slate-900 hover:text-brand-600">
                  {item.name}
                </Link>
                <p className="text-slate-600 text-sm mt-0.5">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center border border-slate-200 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-slate-50"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 text-sm font-medium w-10 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-slate-50"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-slate-400 hover:text-red-500 transition"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-right font-semibold text-slate-900">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 h-fit sticky top-24">
          <h2 className="font-semibold text-lg mb-4">Order summary</h2>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Shipping</span>
              <span className="font-medium">Calculated at checkout</span>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-4 mb-6">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold py-3 rounded-lg transition mb-3">
            Proceed to checkout
          </button>
          <button
            onClick={clearCart}
            className="w-full text-sm text-slate-500 hover:text-slate-700"
          >
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
}