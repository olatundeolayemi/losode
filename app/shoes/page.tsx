'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { womenShoesProducts, menShoesProducts } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';

export default function ShoesPage() {
  const [sortBy, setSortBy] = useState('newest');
  const [displayCount, setDisplayCount] = useState(12);

  const allShoesProducts = [...womenShoesProducts, ...menShoesProducts];
  const filteredProducts = allShoesProducts.slice(0, displayCount);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden bg-gradient-to-b from-gray-100 to-white">
        <Image
          src="/images/women-shoes-heels-1.jpg"
          alt="Shoes Collection"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: '#1A1A1A' }}>Shoes</h1>
          <p className="text-gray-700 max-w-2xl text-lg">
            Step in style with our curated collection of premium footwear
          </p>
        </div>
      </div>

      {/* Sorting */}
      <div className="border-b" style={{ borderColor: '#E8E5E0' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4">
          <span className="text-sm text-gray-600">{sortedProducts.length} items</span>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="border px-3 py-2 text-sm" 
              style={{ borderColor: '#E8E5E0' }}
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-square mb-3 overflow-hidden bg-gray-100">
                <Image
                  src={product.image || '/placeholder.svg'}
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

        {sortedProducts.length < allShoesProducts.length && (
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

      <Footer />
    </main>
  );
}
