'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, X } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  designer: string;
}

interface CartPreviewProps {
  items?: CartItem[];
  onClose?: () => void;
  isOpen?: boolean;
}

export function CartPreview({
  items = [
    {
      id: '1',
      name: 'Premium Ankara Dress',
      image: '/images/category-women-hero.jpg',
      price: 45000,
      quantity: 1,
      designer: 'Lagos Luxe',
    },
    {
      id: '2',
      name: 'Handcrafted Throw Pillow',
      image: '/images/category-homeware.jpg',
      price: 12500,
      quantity: 2,
      designer: 'Heritage Collective',
    },
  ],
  onClose,
  isOpen = true,
}: CartPreviewProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(items);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50000 ? 0 : 2000;
  const total = subtotal + shipping;

  const handleRemove = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemove(itemId);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} />
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={20} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="text-center">
              <ShoppingCart size={48} className="mx-auto mb-4 text-gray-300" />
              <p className="text-gray-600 mb-4">Your cart is empty</p>
              <Link
                href="/women"
                className="inline-block px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                onClick={onClose}
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border border-gray-200 rounded-lg p-3"
                >
                  <div className="relative w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-600 mb-2">{item.designer}</p>
                    <p className="font-semibold text-sm">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="p-1 hover:bg-gray-100 rounded transition"
                    >
                      <X size={16} />
                    </button>

                    <div className="flex items-center border border-gray-200 rounded">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        className="px-2 py-1 hover:bg-gray-100 text-sm"
                      >
                        -
                      </button>
                      <span className="px-2 text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 hover:bg-gray-100 text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">FREE</span>
                    ) : (
                      `₦${shipping.toLocaleString()}`
                    )}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
              </div>

              {subtotal < 50000 && (
                <p className="text-xs text-gray-600 text-center">
                  Add ₦{(50000 - subtotal).toLocaleString()} more for free shipping
                </p>
              )}

              <Link
                href="/cart"
                className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition text-center"
                onClick={onClose}
              >
                View Cart
              </Link>

              <button
                onClick={onClose}
                className="w-full py-3 border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
