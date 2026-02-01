'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Filter, ChevronDown } from 'lucide-react';
import { clothingProducts, shoesProducts, bagsProducts, accessoriesProducts } from '@/lib/products';

export default function MenPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'All',
    designer: 'All',
    price: 'All',
  });
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Combine all men's products
  const allMenProducts = [
    ...clothingProducts,
    ...shoesProducts,
    ...bagsProducts.filter(p => p.gender === 'men' || !p.gender),
    ...accessoriesProducts.filter(p => p.gender === 'men' || !p.gender),
  ];

  const categories = [
    { name: 'New In', href: '/men/new-in', image: '/images/shopby-casual-wear.jpg' },
    { name: 'Clothing', href: '/men/clothing', image: '/images/shopby-formal-wear.jpg' },
    { name: 'Shoes', href: '/men/shoes', image: '/images/product-shoes-2.jpg' },
    { name: 'Bags', href: '/men/bags', image: '/images/product-bags-1.jpg' },
    { name: 'Accessories', href: '/men/accessories', image: '/images/product-accessories-showcase.jpg' },
  ];

  const designers = ['All', ...new Set(allMenProducts.map((p) => p.designer))];

  // Filter and sort products
  let filteredProducts = [...allMenProducts];
  
  if (selectedFilters.category !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedFilters.category);
  }
  if (selectedFilters.designer !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.designer === selectedFilters.designer);
  }

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="/images/category-men-hero.jpg"
          alt="Men's Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Men</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Discover our curated collection of premium African menswear
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-serif font-bold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition flex items-end p-4">
                  <h3 className="text-white font-semibold">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter Bar */}
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
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block w-64 flex-shrink-0`}>
            <div className="sticky top-32 space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-sm mb-3 flex items-center justify-between">
                  Category
                  <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-2">
                  {['All', 'Clothing', 'Shoes', 'Bags', 'Accessories'].map((cat) => (
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

              {/* Designer Filter */}
              <div>
                <h3 className="font-semibold text-sm mb-3 flex items-center justify-between">
                  Designers
                  <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {designers.slice(0, 10).map((designer) => (
                    <label key={designer} className="flex items-center text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="designer"
                        checked={selectedFilters.designer === designer}
                        onChange={() => setSelectedFilters({ ...selectedFilters, designer })}
                        className="mr-2"
                      />
                      <span className="truncate">{designer}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-semibold text-sm mb-3 flex items-center justify-between">
                  Price
                  <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-2">
                  {['All', 'Under ₦30,000', '₦30,000 - ₦60,000', '₦60,000 - ₦100,000', 'Above ₦100,000'].map((price) => (
                    <label key={price} className="flex items-center text-sm cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedFilters.price === price}
                        onChange={() => setSelectedFilters({ ...selectedFilters, price })}
                        className="mr-2"
                      />
                      <span>{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setSelectedFilters({ category: 'All', designer: 'All', price: 'All' })}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group"
                >
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
