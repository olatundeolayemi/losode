'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';
import { StarRating } from './star-rating';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  designer: string;
  rating?: number;
  reviewCount?: number;
}

export function RecentlyViewed() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load recently viewed from localStorage
    try {
      const stored = localStorage.getItem('recentlyViewed');
      if (stored) {
        const viewed = JSON.parse(stored);
        setProducts(viewed.slice(0, 8)); // Show last 8 viewed products
      }
    } catch (error) {
      console.error('Error loading recently viewed:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Track product views when component mounts on product pages
  useEffect(() => {
    const trackView = () => {
      const productId = window.location.pathname.split('/').pop();
      if (productId && productId !== 'product') {
        try {
          const stored = localStorage.getItem('recentlyViewed') || '[]';
          const viewed = JSON.parse(stored);
          
          // Remove if already exists and add to front
          const filtered = viewed.filter((p: any) => p.id !== productId);
          const updated = [{ id: productId }, ...filtered].slice(0, 20);
          
          localStorage.setItem('recentlyViewed', JSON.stringify(updated));
        } catch (error) {
          console.error('Error tracking view:', error);
        }
      }
    };

    trackView();
  }, []);

  if (isLoading || products.length === 0) {
    return null;
  }

  const handleClear = () => {
    localStorage.removeItem('recentlyViewed');
    setProducts([]);
  };

  return (
    <section className="py-8 md:py-12 bg-gray-50 rounded-lg p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-serif" style={{ color: '#1A1A1A' }}>
          Recently Viewed
        </h2>
        <button
          onClick={handleClear}
          className="text-xs text-gray-600 hover:text-gray-900 transition"
        >
          Clear history
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group relative"
          >
            <div className="relative aspect-square mb-2 overflow-hidden bg-white rounded-lg border border-gray-200">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </div>

            <h3 className="font-medium text-xs line-clamp-2 mb-1">
              {product.name}
            </h3>

            <p className="text-xs text-gray-600 mb-1 truncate">{product.designer}</p>

            {product.rating !== undefined && (
              <div className="mb-1">
                <StarRating rating={product.rating} size={12} showText={false} />
              </div>
            )}

            <p className="font-semibold text-xs" style={{ color: '#8B7F77' }}>
              ₦{product.price.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
