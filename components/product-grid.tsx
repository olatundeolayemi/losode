'use client';

import { Heart, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  designer: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface ProductGridProps {
  products: Product[];
  title: string;
  description?: string;
}

export default function ProductGrid({ products, title, description }: ProductGridProps) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-background border-b border-border py-8 px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-2 text-foreground text-balance leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        )}
        <p className="text-xs md:text-sm text-muted-foreground mt-4">
          Showing {products.length} results
        </p>
      </div>

      {/* Filters and Sorting */}
      <div className="bg-card border-b border-border px-4 md:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex gap-2 md:gap-4 items-center flex-wrap w-full md:w-auto">
          <select className="px-3 md:px-4 py-2 border border-border rounded text-xs md:text-sm bg-background text-foreground focus:ring-2 focus:ring-primary outline-none">
            <option>All Sizes</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
          <select className="px-3 md:px-4 py-2 border border-border rounded text-xs md:text-sm bg-background text-foreground focus:ring-2 focus:ring-primary outline-none">
            <option>All Colors</option>
            <option>Black</option>
            <option>White</option>
            <option>Blue</option>
            <option>Red</option>
            <option>Neutral</option>
          </select>
        </div>
        <select className="px-3 md:px-4 py-2 border border-border rounded text-xs md:text-sm bg-background text-foreground focus:ring-2 focus:ring-primary outline-none w-full md:w-auto">
          <option>Sort by: Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Best Sellers</option>
          <option>Most Popular</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="bg-background px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <Link href={`/product/${product.id}`}>
                <div className="relative mb-3 md:mb-4 overflow-hidden rounded-lg bg-muted aspect-square">
                  {/* Badge */}
                  {product.isNew && (
                    <div
                      className="absolute top-2 md:top-3 left-2 md:left-3 z-10 px-2 md:px-3 py-1 rounded text-primary-foreground text-xs font-semibold bg-primary"
                    >
                      NEW
                    </div>
                  )}

                  {/* Image */}
                  <div className="w-full h-full relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-end justify-center pb-3 md:pb-4 opacity-0 group-hover:opacity-100">
                    <button
                      className="bg-card text-foreground px-6 md:px-8 py-2 rounded text-xs md:text-sm font-semibold hover:bg-muted transition flex items-center gap-2 border border-border"
                    >
                      <Eye className="w-3 h-3 md:w-4 md:h-4" />
                      Quick View
                    </button>
                  </div>

                  {/* Heart Icon */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-2 md:top-3 right-2 md:right-3 z-20 bg-card rounded-full p-1.5 md:p-2 hover:bg-muted transition border border-border"
                    aria-label={favorites.has(product.id) ? 'Remove from favorites' : 'Add to favorites'}
                  >
                    <Heart
                      className={`w-4 h-4 md:w-5 md:h-5 transition ${
                        favorites.has(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    />
                  </button>
                </div>
              </Link>

              {/* Product Info */}
              <div className="flex-1 flex flex-col">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  {product.designer}
                </p>
                <h3 className="text-xs md:text-sm font-medium text-foreground mb-2 line-clamp-2 hover:underline cursor-pointer">
                  {product.name}
                </h3>
                <p
                  className="text-sm md:text-lg font-semibold text-primary mt-auto"
                >
                  ₦{product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="bg-background px-4 md:px-6 lg:px-8 py-8 md:py-12 text-center border-t border-border">
        <button
          className="px-6 md:px-8 py-2 md:py-3 border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition rounded text-sm md:text-base"
        >
          Load More Products
        </button>
      </div>
    </div>
  );
}
