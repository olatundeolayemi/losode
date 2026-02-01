'use client';

import React from "react"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartStore } from '@/lib/store/cart';
import { useOrderStore } from '@/lib/store/orders';
import { toast } from 'sonner';

export function CheckoutClient() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const items = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);
  const createOrder = useOrderStore((state) => state.createOrder);

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'Nigeria',
    paymentMethod: 'card' as 'card' | 'bank-transfer' | 'ussd',
  });

  useEffect(() => {
    setMounted(true);
    if (!mounted && items.length === 0) {
      router.push('/cart');
    }
  }, []);

  if (!mounted) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <p>Loading checkout...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  const subtotal = getTotalPrice();
  const shipping = subtotal > 50000 ? 0 : 2000;
  const tax = Math.round(subtotal * 0.075);
  const total = subtotal + shipping + tax;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.postalCode
    ) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      // Create the order
      const order = createOrder({
        items: items.map((item) => ({
          id: item.id,
          productId: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.size,
          color: item.color,
        })),
        subtotal,
        shipping,
        tax,
        total,
        status: 'pending',
        customerInfo: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          postalCode: formData.postalCode,
          country: formData.country,
        },
        paymentMethod: formData.paymentMethod,
      });

      // Clear the cart
      clearCart();

      // Redirect to confirmation page
      router.push(`/order-confirmation/${order.id}`);
    } catch (error) {
      toast.error('Failed to process order');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Checkout</h1>
      <p className="text-gray-600 mb-8">Complete your purchase</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Billing Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Billing Information</h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border-gray-300"
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border-gray-300"
                />
              </div>

              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="border-gray-300 mb-4"
              />

              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="border-gray-300 mb-4"
              />

              <Input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleInputChange}
                className="border-gray-300 mb-4"
              />

              <div className="grid grid-cols-2 gap-4 mb-4">
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="border-gray-300"
                />
                <Input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="border-gray-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <Input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="border-gray-300"
                />
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded px-4 py-2"
                >
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Kenya">Kenya</option>
                  <option value="South Africa">South Africa</option>
                </select>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Payment Method</h2>

              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-300 rounded cursor-pointer hover:border-gray-900">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <div>
                    <p className="font-semibold">Debit/Credit Card</p>
                    <p className="text-sm text-gray-600">
                      Visa, Mastercard, or American Express
                    </p>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-300 rounded cursor-pointer hover:border-gray-900">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank-transfer"
                    checked={formData.paymentMethod === 'bank-transfer'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <div>
                    <p className="font-semibold">Bank Transfer</p>
                    <p className="text-sm text-gray-600">
                      Direct bank transfer to our account
                    </p>
                  </div>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-300 rounded cursor-pointer hover:border-gray-900">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="ussd"
                    checked={formData.paymentMethod === 'ussd'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <div>
                    <p className="font-semibold">USSD Transfer</p>
                    <p className="text-sm text-gray-600">
                      Quick and easy USSD code transfer
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-900 text-white hover:bg-gray-800 py-6 text-lg font-semibold"
            >
              {isLoading ? 'Processing...' : 'Complete Order'}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            {/* Items */}
            <div className="mb-6 pb-6 border-b space-y-4 max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="flex-shrink-0 w-16 h-20 bg-white rounded overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={64}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm mb-1">{item.name}</p>
                    <p className="text-xs text-gray-600 mb-2">
                      Qty: {item.quantity}
                    </p>
                    <p className="font-semibold text-sm">
                      ₦{(item.price * item.quantity).toLocaleString('en-NG')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="space-y-3 mb-6 pb-6 border-b">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>₦{subtotal.toLocaleString('en-NG')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-medium">FREE</span>
                  ) : (
                    `₦${shipping.toLocaleString('en-NG')}`
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax (7.5%)</span>
                <span>₦{tax.toLocaleString('en-NG')}</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₦{total.toLocaleString('en-NG')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
