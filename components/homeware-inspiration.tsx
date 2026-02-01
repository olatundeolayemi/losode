'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomewareInspiration() {
  const inspirations = [
    {
      id: 1,
      title: 'Create Your Sanctuary',
      description: 'Master bedroom styling tips and ideas',
      image: '/images/home-decor.jpg',
      tag: 'Bedroom',
    },
    {
      id: 2,
      title: 'Modern Living Room',
      description: 'Contemporary designs for modern homes',
      image: '/images/furniture-showcase.jpg',
      tag: 'Living',
    },
    {
      id: 3,
      title: 'Kitchen Elegance',
      description: 'Functional and beautiful kitchen spaces',
      image: '/images/kitchen-dining.jpg',
      tag: 'Kitchen',
    },
  ];

  return (
    <section className="px-4 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">
            Design Inspiration
          </h2>
          <p className="text-lg text-gray-600">
            Get inspired by real homes styled with Losóde homeware
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inspirations.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-80 rounded-lg overflow-hidden bg-gray-200 mb-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 rounded-full text-xs font-semibold" style={{ color: 'oklch(0.61 0.165 28.5)' }}>
                    {item.tag}
                  </span>
                </div>

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-100">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Link */}
              <Link href="/home" className="inline-flex items-center gap-2 text-sm font-semibold group-hover:underline" style={{ color: 'oklch(0.61 0.165 28.5)' }}>
                Explore this style <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
