'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { newInProducts } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';

export default function NewInPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    designer: 'All',
    price: null,
    size: 'All',
  });

  const [displayCount, setDisplayCount] = useState(12);

  const filteredProducts = newInProducts.slice(0, displayCount);

  const designers = ['All', ...new Set(newInProducts.map((p) => p.designer))];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-serif mb-3">New In</h1>
        <p className="text-gray-600 max-w-2xl">
          Stay ahead of the fashion curve with our chic new arrivals, meticulously designed to embody 
          effortless elegance and refined sophistication. Each piece is crafted to complement your unique 
          sense of style, offering a perfect balance of timeless appeal and contemporary flair.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-sm">Category</h3>
                <button className="text-xs text-gray-600 hover:text-gray-900">Clear All</button>
              </div>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm">All</span>
                </label>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-sm mb-4">Designers</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {designers.map((designer) => (
                  <label key={designer} className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      className="mr-2"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedFilters({ ...selectedFilters, designer });
                        }
                      }}
                    />
                    <span className="text-sm">{designer}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-sm mb-4">Price</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">All</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Below ₦50,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">₦50,000 - ₦100,000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Above ₦100,000</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-sm text-gray-600">{filteredProducts.length} Items</p>
            <select className="text-sm border rounded px-2 py-1">
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Sellers</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group"
              >
                <div className="relative aspect-square mb-3 overflow-hidden bg-gray-100 rounded">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
                    <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition">
                    <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600">{product.designer}</p>
                <p className="text-sm font-semibold text-gray-900">
                  ₦{product.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>

          {filteredProducts.length < newInProducts.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setDisplayCount(displayCount + 12)}
                className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-50 transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
