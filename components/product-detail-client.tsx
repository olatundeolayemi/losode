'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useCartStore } from '@/lib/store/cart';
import type { Product } from '@/lib/products';
import { Heart, Share2, Truck, Shield } from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
}

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const COLORS = ['Black', 'Navy', 'Burgundy', 'Gold', 'White', 'Cream'];

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleAddToCart = async () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select size and color');
      return;
    }

    setIsLoading(true);
    try {
      addItem({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        designer: product.designer,
        quantity,
        size: selectedSize,
        color: selectedColor,
      });

      toast.success(`${product.name} added to cart!`);
      setQuantity(1);
      setSelectedSize('');
      setSelectedColor('');
    } catch (error) {
      toast.error('Failed to add to cart');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBuyNow = async () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select size and color');
      return;
    }

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      designer: product.designer,
      quantity,
      size: selectedSize,
      color: selectedColor,
    });

    router.push('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
        {/* Product Image */}
        <div className="flex items-center justify-center bg-muted rounded-lg overflow-hidden">
          <div className="relative w-full aspect-square">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-start">
          {/* Header */}
          <div className="mb-4 md:mb-6">
            <p className="text-xs md:text-sm text-muted-foreground mb-2 uppercase tracking-wide">{product.designer}</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-2 md:mb-4 text-foreground text-balance leading-tight">{product.name}</h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Premium quality, timeless design</p>
            {product.isNew && (
              <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded mb-4">
                NEW
              </span>
            )}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-600">(124 reviews)</span>
            </div>
          </div>

          {/* Price and Rating */}
          <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-border">
            <div className="flex items-center gap-3 md:gap-4">
              <p className="text-3xl md:text-4xl font-bold text-primary">₦{product.price.toLocaleString('en-NG')}</p>
              <span className="text-xs md:text-sm bg-primary/10 text-primary px-2 md:px-3 py-1 rounded-lg font-semibold">In Stock</span>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6 md:mb-8">
            <label className="text-sm md:text-base font-semibold text-foreground mb-3 block">Size</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 font-medium text-sm transition-all ${
                    selectedSize === size
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border hover:border-muted-foreground text-foreground hover:bg-muted'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6 md:mb-8">
            <label className="text-sm md:text-base font-semibold text-foreground mb-3 block">Color</label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-3">
              {COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 md:px-4 py-2 md:py-3 rounded-lg border-2 font-medium text-sm transition-all ${
                    selectedColor === color
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border hover:border-muted-foreground text-foreground hover:bg-muted'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mb-6 md:mb-8">
            <label className="text-sm md:text-base font-semibold text-foreground mb-3 block">Quantity</label>
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-border rounded-lg hover:bg-muted transition-all"
              >
                -
              </button>
              <span className="text-base md:text-lg font-semibold w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-border rounded-lg hover:bg-muted transition-all"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <Button
              onClick={handleAddToCart}
              disabled={isLoading || !selectedSize || !selectedColor}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-all active:scale-95"
            >
              {isLoading ? 'Adding...' : 'Add to Bag'}
            </Button>
            <Button
              onClick={handleBuyNow}
              disabled={isLoading || !selectedSize || !selectedColor}
              variant="outline"
              className="w-full py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-all active:scale-95 bg-transparent"
            >
              Buy Now
            </Button>
          </div>

          {/* Wishlist and Share */}
          <div className="flex gap-3 md:gap-4 pb-6 md:pb-8 border-b border-border">
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className="flex-1 flex items-center justify-center gap-2 py-2 md:py-3 border border-border rounded-lg hover:bg-muted transition-all"
            >
              <Heart
                size={20}
                className={`transition ${isFavorited ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`}
              />
              <span className="text-sm md:text-base font-medium">{isFavorited ? 'Favorited' : 'Favorite'}</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 md:py-3 border border-border rounded-lg hover:bg-muted transition-all">
              <Share2 size={20} className="text-muted-foreground" />
              <span className="text-sm md:text-base font-medium">Share</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-3 md:gap-4">
              <Truck className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-sm md:text-base text-foreground">Free Shipping</p>
                <p className="text-xs md:text-sm text-muted-foreground">On orders over ₦50,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3 md:gap-4">
              <Shield className="text-primary flex-shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold text-sm md:text-base text-foreground">Secure Payment</p>
                <p className="text-xs md:text-sm text-muted-foreground">100% secure transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-16 pt-8 border-t">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-600">
              Carefully crafted by {product.designer}, this stunning piece
              combines traditional African aesthetics with contemporary design.
              Made from premium materials, it&apos;s perfect for any occasion.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Specifications</h3>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>Designer: {product.designer}</li>
              <li>Category: {product.category}</li>
              <li>Material: Premium African Fabric</li>
              <li>Care: Dry clean recommended</li>
              <li>Available Sizes: XS - XXL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
