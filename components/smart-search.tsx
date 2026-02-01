'use client';

import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { allProducts } from '@/lib/products';
import Link from 'next/link';
import Image from 'next/image';

const fuse = new Fuse(allProducts, {
  keys: ['name', 'designer', 'category'],
  threshold: 0.3,
  minMatchCharLength: 2,
});

export default function SmartSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 8).map(result => result.item);
  }, [query]);

  return (
    <div className="relative max-w-sm">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="w-full px-3 py-1.5 rounded text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-blue-600 focus:ring-white"
      />

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 border-b last:border-b-0 cursor-pointer transition">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-900 truncate">{product.name}</p>
                  <p className="text-xs text-gray-500 truncate">{product.designer}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
