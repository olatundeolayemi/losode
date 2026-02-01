'use client';

import { Heart, Share2, Check } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    designer: string;
    category: string;
  };
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12">
      {/* Image Section */}
      <div className="relative">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative mb-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Details Section */}
      <div>
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
          {product.designer}
        </p>
        <h1 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: '#1a2d4d' }}>
          {product.name}
        </h1>

        <p className="text-2xl font-semibold mb-6" style={{ color: '#1a2d4d' }}>
          ₦{product.price.toLocaleString()}
        </p>

        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50 transition"
            style={{ borderColor: '#1a2d4d', color: '#1a2d4d' }}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
              }`}
            />
            Wishlist
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-50 transition"
            style={{ borderColor: '#1a2d4d', color: '#1a2d4d' }}
          >
            <Share2 className="w-5 h-5" />
            Share
          </button>
        </div>

        {/* Size Selection */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3" style={{ color: '#1a2d4d' }}>
            Size
          </label>
          <div className="flex gap-2">
            {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border rounded hover:border-gray-800 transition"
                style={{ borderColor: '#1a2d4d', color: '#1a2d4d' }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3" style={{ color: '#1a2d4d' }}>
            Color
          </label>
          <div className="flex gap-3">
            {[
              { name: 'Black', color: '#000000' },
              { name: 'White', color: '#FFFFFF' },
              { name: 'Gold', color: '#FFD700' },
              { name: 'Navy', color: '#001F3F' },
            ].map((col) => (
              <button
                key={col.name}
                className="w-8 h-8 rounded-full border-2 hover:scale-110 transition"
                style={{ backgroundColor: col.color, borderColor: '#1a2d4d' }}
                title={col.name}
              />
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3" style={{ color: '#1a2d4d' }}>
            Quantity
          </label>
          <div className="flex items-center border rounded w-fit" style={{ borderColor: '#1a2d4d' }}>
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 hover:bg-gray-100 transition"
            >
              −
            </button>
            <span className="px-6 py-2">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 hover:bg-gray-100 transition"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`w-full py-4 rounded font-semibold text-white transition mb-4 flex items-center justify-center gap-2 ${
            isAdded ? 'bg-green-600' : 'hover:opacity-90'
          }`}
          style={{ backgroundColor: isAdded ? undefined : '#1a2d4d' }}
        >
          {isAdded ? (
            <>
              <Check className="w-5 h-5" />
              Added to Cart
            </>
          ) : (
            'Add to Bag'
          )}
        </button>

        {/* Product Info */}
        <div className="space-y-4 text-sm">
          <div className="border-t pt-4" style={{ borderColor: '#e5e7eb' }}>
            <h3 className="font-semibold mb-2" style={{ color: '#1a2d4d' }}>
              Product Details
            </h3>
            <p className="text-gray-600">
              Authentic African designer piece crafted with premium materials and traditional techniques.
              Each item is unique and handcrafted with care.
            </p>
          </div>
          <div className="border-t pt-4" style={{ borderColor: '#e5e7eb' }}>
            <h3 className="font-semibold mb-2" style={{ color: '#1a2d4d' }}>
              Shipping & Returns
            </h3>
            <p className="text-gray-600">
              Free shipping on orders over ₦50,000. Returns accepted within 30 days of purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
