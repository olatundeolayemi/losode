'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomewareHero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 px-4 py-16 bg-white">
      {/* Left column */}
      <div className="flex flex-col justify-center">
        <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'oklch(0.61 0.165 28.5)' }}>
          <span className="block h-1 w-8" style={{ backgroundColor: 'oklch(0.61 0.165 28.5)' }}></span>
          Welcome to Homeware
        </div>
        
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gray-900">
          Transform Your Space Into A Sanctuary
        </h1>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Discover carefully curated homeware pieces that blend functionality with timeless elegance. From statement furniture to subtle accents, elevate your living space with designs that reflect your personal style and transform your house into a true home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/home#featured">
            <button className="w-full sm:w-auto bg-black text-white px-8 py-4 font-semibold hover:bg-gray-900 transition">
              Shop Homeware
            </button>
          </Link>
          <Link href="/designers">
            <button className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 px-8 py-4 font-semibold hover:bg-gray-50 transition">
              Explore Designers
            </button>
          </Link>
        </div>
      </div>

      {/* Right column - Image */}
      <div className="relative aspect-square md:aspect-auto min-h-96 rounded-lg overflow-hidden">
        <Image
          src="/images/homeware-hero.jpg"
          alt="Premium homeware collection showcase"
          fill
          className="object-cover hover:scale-105 transition duration-300"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </section>
  );
}
