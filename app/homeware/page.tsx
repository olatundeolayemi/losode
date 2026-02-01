'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Filter, ChevronDown } from 'lucide-react';

export default function HomewarePage() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'All',
  });
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Sample homeware products
  const homewareProducts = [
    {
      id: 'hw-1',
      name: 'Modern Throw Pillow',
      designer: 'Home Artisans',
      price: 45000,
      image: '/images/homeware-textiles-cushion-1.jpg',
      category: 'Textiles',
      isNew: true,
    },
    {
      id: 'hw-2',
      name: 'Wooden Dining Chair',
      designer: 'Craft Furniture',
      price: 125000,
      image: '/images/homeware-furniture-chair-1.jpg',
      category: 'Furniture',
      isNew: true,
    },
    {
      id: 'hw-3',
      name: 'Contemporary Table Lamp',
      designer: 'Light Designs',
      price: 65000,
      image: '/images/homeware-lighting-1.jpg',
      category: 'Lighting',
      isNew: false,
    },
    {
      id: 'hw-4',
      name: 'Premium Cookware Set',
      designer: 'Kitchen Masters',
      price: 95000,
      image: '/images/homeware-kitchen-1.jpg',
      category: 'Kitchen',
      isNew: false,
    },
    {
      id: 'hw-5',
      name: 'Decorative Wall Art',
      designer: 'Art Collective',
      price: 55000,
      image: '/images/homeware-decor-1.jpg',
      category: 'Decor',
      isNew: true,
    },
    {
      id: 'hw-6',
      name: 'Luxury Cushion Cover',
      designer: 'Home Artisans',
      price: 38000,
      image: '/images/homeware-textiles-cushion-1.jpg',
      category: 'Textiles',
      isNew: false,
    },
  ];

  const categories = ['All', 'Furniture', 'Textiles', 'Kitchen', 'Lighting', 'Decor'];
  
  let filteredProducts = [...homewareProducts];
  
  if (selectedFilters.category !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedFilters.category);
  }

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
          src="/images/category-homeware-hero.jpg"
          alt="Homeware Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Homeware</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Beautiful and functional pieces for your home
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

        <div className="flex gap-8">
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-64 flex-shrink-0`}>
            <div className="sticky top-32 space-y-6">
              <div>
                <h3 className="font-semibold text-sm mb-3 flex items-center justify-between">
                  Category
                  <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <label key={cat} className="flex items-center text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedFilters.category === cat}
                        onChange={() => setSelectedFilters({ ...selectedFilters, category: cat })}
                        className="mr-2"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedFilters({ category: 'All' })}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                Clear All Filters
              </button>
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
      </div>

      <Footer />
    </main>
  );
}
