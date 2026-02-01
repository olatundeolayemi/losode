'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store/cart';
import { Trash2, Plus, Minus } from 'lucide-react';

export function CartClient() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p>Loading cart...</p>
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice > 50000 ? 0 : 2000;
  const subtotal = totalPrice;
  const tax = Math.round(subtotal * 0.075); // 7.5% VAT
  const finalTotal = subtotal + shippingCost + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-foreground">Shopping Bag</h1>
      <p className="text-muted-foreground text-sm md:text-base mb-8">
        {items.length} {items.length === 1 ? 'item' : 'items'} in your bag
      </p>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground mb-6 text-sm md:text-base">Your bag is empty</p>
          <Link href="/women/new-in">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4 md:space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 md:gap-6 pb-6 border-b border-border">
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-20 sm:w-24 md:w-32 h-24 sm:h-32 md:h-40 bg-muted rounded overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col min-w-0">
                    <div className="flex-1">
                      <h3 className="font-semibold text-base md:text-lg text-foreground mb-1 line-clamp-2">{item.name}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3">{item.designer}</p>

                      {/* Size and Color */}
                      <div className="text-xs md:text-sm text-muted-foreground space-y-1 mb-4">
                        {item.size && <p>Size: {item.size}</p>}
                        {item.color && <p>Color: {item.color}</p>}
                      </div>

                      {/* Price */}
                      <p className="text-base md:text-lg font-semibold text-primary mb-4">
                        ₦{item.price.toLocaleString('en-NG')}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="flex items-center gap-2 border border-border rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, Math.max(0, item.quantity - 1))
                          }
                          className="p-1 md:p-2 hover:bg-muted transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-6 md:w-8 text-center text-sm md:text-base">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1 md:p-2 hover:bg-muted transition"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 md:p-2 text-destructive hover:bg-destructive/10 rounded transition"
                        aria-label="Remove item from cart"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right flex flex-col justify-between">
                    <p className="font-semibold text-sm md:text-lg text-primary whitespace-nowrap">
                      ₦{(item.price * item.quantity).toLocaleString('en-NG')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <Link href="/women/new-in">
              <Button
                variant="outline"
                className="mt-6 md:mt-8 w-full md:w-auto bg-transparent"
              >
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 md:p-8 sticky top-20 border border-border">
              <h2 className="text-lg md:text-xl font-semibold mb-6 text-foreground">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-foreground">
                    ₦{subtotal.toLocaleString('en-NG')}
                  </span>
                </div>

                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-foreground">
                    {shippingCost === 0 ? (
                      <span className="text-green-600 dark:text-green-400">FREE</span>
                    ) : (
                      `₦${shippingCost.toLocaleString('en-NG')}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-muted-foreground">Tax (7.5% VAT)</span>
                  <span className="font-medium text-foreground">
                    ₦{tax.toLocaleString('en-NG')}
                  </span>
                </div>
              </div>

              <div className="flex justify-between text-lg md:text-xl font-bold mb-6 text-foreground">
                <span>Total</span>
                <span className="text-primary">₦{finalTotal.toLocaleString('en-NG')}</span>
              </div>

              <Button
                onClick={() => router.push('/checkout')}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 md:py-6 text-base md:text-lg font-semibold"
              >
                Proceed to Checkout
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Shipping and taxes calculated at checkout
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
