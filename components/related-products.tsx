'use client';

import Link from 'next/link';
import Image from 'next/image';
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

interface RelatedProductsProps {
  products: Product[];
  title?: string;
}

export function RelatedProducts({
  products,
  title = 'Related Products',
}: RelatedProductsProps) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-serif mb-8" style={{ color: '#1A1A1A' }}>
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="group">
            <div className="relative aspect-square mb-3 overflow-hidden bg-gray-100 rounded-lg">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>

            <h3 className="font-medium text-xs sm:text-sm line-clamp-2 mb-1 group-hover:text-opacity-70">
              {product.name}
            </h3>

            <p className="text-xs text-gray-600 mb-2 truncate">{product.designer}</p>

            {product.rating !== undefined && (
              <div className="mb-2">
                <StarRating
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  size={12}
                />
              </div>
            )}

            <p className="font-semibold text-xs sm:text-sm" style={{ color: '#8B7F77' }}>
              ₦{product.price.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
