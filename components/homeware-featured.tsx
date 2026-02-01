'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface FeaturedProduct {
  id: string;
  name: string;
  designer: string;
  image: string;
  price: number;
  category: string;
}

interface HomewareFeaturedProps {
  products: FeaturedProduct[];
}

export default function HomewareFeatured({ products }: HomewareFeaturedProps) {
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

  const featuredProducts = products.slice(0, 8);

  return (
    <section id="featured" className="px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Featured Homeware
          </h2>
          <p className="text-lg text-gray-600">
            Explore our latest arrivals and bestselling pieces
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="group h-full">
                {/* Product Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-100 aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <button 
                      className="bg-white text-gray-900 px-6 py-2 rounded text-sm font-semibold hover:bg-gray-100 transition"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Quick View
                    </button>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(product.id);
                    }}
                    className="absolute top-3 right-3 z-20 bg-white rounded-full p-2 hover:bg-gray-100 transition"
                  >
                    <Heart
                      className={`w-5 h-5 transition ${
                        favorites.has(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {product.designer}
                  </p>
                  <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:underline">
                    {product.name}
                  </h3>
                  <p 
                    className="text-lg font-semibold"
                    style={{ color: 'oklch(0.61 0.165 28.5)' }}
                  >
                    ₦{product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/home#all-products">
            <button
              className="px-8 py-3 border-2 rounded font-semibold hover:bg-gray-50 transition"
              style={{ borderColor: 'oklch(0.61 0.165 28.5)', color: 'oklch(0.61 0.165 28.5)' }}
            >
              View All Homeware Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
