'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { clothingProducts, shoesProducts, bagsProducts } from '@/lib/products';

export default function DesignersPage() {
  const allProducts = [...clothingProducts, ...shoesProducts, ...bagsProducts];
  const designers = [...new Set(allProducts.map((p) => p.designer))];

  // Group products by designer
  const designerGroups = designers.map((designer) => ({
    name: designer,
    products: allProducts.filter((p) => p.designer === designer),
  }));

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <Image
          src="/images/designer-collection-1.jpg"
          alt="Designers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Designers</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Discover Africa's most talented fashion designers
            </p>
          </div>
        </div>
      </div>

      {/* Designers Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {designerGroups.map((group) => (
            <div key={group.name} className="border-t pt-12">
              <h2 className="text-2xl font-serif font-bold mb-8 capitalize">{group.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                {group.products.slice(0, 8).map((product) => (
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
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm font-semibold text-gray-900">
                      ₦{product.price.toLocaleString()}
                    </p>
                  </Link>
                ))}
              </div>
              <Link href={`/designers/${group.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <button className="px-8 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition">
                  View All by {group.name}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
