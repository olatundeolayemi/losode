'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Filter } from 'lucide-react';
import { clothingProducts, shoesProducts } from '@/lib/products';

export default function KidsNewInPage() {
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  const newProducts = [
    ...clothingProducts.filter(p => p.isNew).slice(0, 30),
    ...shoesProducts.filter(p => p.isNew).slice(0, 20),
  ];

  let filteredProducts = [...newProducts];

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="/images/category-kids-hero.jpg"
          alt="Kids' New In"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">New In</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Latest arrivals in kids' fashion
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
            <p className="text-sm text-gray-600">{filteredProducts.length} Items</p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="group">
                <div className="relative aspect-[3/4] mb-3 overflow-hidden bg-gray-100 rounded-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition flex flex-col gap-2">
                    <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-1">{product.designer}</p>
                <p className="text-sm font-semibold text-gray-900">
                  ₦{product.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
