'use client';

import { useState } from 'react';
import { Product } from '@/lib/products';
import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';

interface ShopByCategoryProps {
  title: string;
  description: string;
  products: Product[];
}

export default function ShopByCategory({
  title,
  description,
  products,
}: ShopByCategoryProps) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const newFavs = new Set(prev);
      if (newFavs.has(productId)) {
        newFavs.delete(productId);
      } else {
        newFavs.add(productId);
      }
      return newFavs;
    });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-12 md:py-16 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found in this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group"
                >
                  <div className="relative bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden h-80 mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavorite(product.id);
                      }}
                      className="absolute top-4 right-4 bg-white dark:bg-neutral-900 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorites.has(product.id)
                            ? 'fill-accent text-accent'
                            : 'text-foreground'
                        }`}
                      />
                    </button>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base group-hover:text-accent transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {product.designer}
                  </p>
                  <p className="text-lg font-bold text-foreground mt-2">
                    {product.price.toLocaleString('en-NG', {
                      style: 'currency',
                      currency: 'NGN',
                      minimumFractionDigits: 0,
                    })}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
