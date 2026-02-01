'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomewareCategories() {
  const categories = [
    {
      id: 'furniture',
      name: 'Furniture',
      description: 'Statement pieces and everyday essentials',
      image: '/images/furniture-showcase.jpg',
      href: '/home/furniture',
      icon: '🛋️',
    },
    {
      id: 'textiles',
      name: 'Textiles & Rugs',
      description: 'Comfort and texture for every room',
      image: '/images/textiles-display.jpg',
      href: '/home/textiles',
      icon: '🧵',
    },
    {
      id: 'lighting',
      name: 'Lighting',
      description: 'Illuminate with style and ambiance',
      image: '/images/lighting-collection.jpg',
      href: '/home/lighting',
      icon: '💡',
    },
    {
      id: 'kitchen',
      name: 'Kitchen & Dining',
      description: 'Culinary excellence meets design',
      image: '/images/kitchen-dining.jpg',
      href: '/home/kitchen',
      icon: '🍽️',
    },
  ];

  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Shop By Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore our carefully curated homeware collections, from furniture that makes a statement to accessories that tie your space together perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <div className="group cursor-pointer h-full">
                {/* Image Container */}
                <div className="relative h-72 rounded-lg overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-5xl">{category.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:underline transition">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-gray-900 transition">
                    {category.description}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: 'oklch(0.61 0.165 28.5)' }}>
                    Shop Now
                    <span>→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
