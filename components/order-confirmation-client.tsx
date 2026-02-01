'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useOrderStore, type Order } from '@/lib/store/orders';
import { CheckCircle, Printer } from 'lucide-react';

interface OrderConfirmationClientProps {
  orderId: string;
}

export function OrderConfirmationClient({
  orderId,
}: OrderConfirmationClientProps) {
  const [mounted, setMounted] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);

  const getOrderById = useOrderStore((state) => state.getOrderById);

  useEffect(() => {
    setMounted(true);
    const foundOrder = getOrderById(orderId);
    setOrder(foundOrder || null);
  }, [orderId, getOrderById]);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600 mb-6">Order not found</p>
        <Link href="/women/new-in">
          <Button className="bg-gray-900 text-white">Back to Shop</Button>
        </Link>
      </div>
    );
  }

  const paymentMethodLabel = {
    card: 'Debit/Credit Card',
    'bank-transfer': 'Bank Transfer',
    ussd: 'USSD Transfer',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Success Message */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="text-green-600" size={48} />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">Order Confirmed</h1>
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. Your order has been received and is being
          processed.
        </p>
        <p className="text-2xl font-semibold text-gray-900">
          Order Number: {order.orderNumber}
        </p>
      </div>

      {/* Order Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Customer Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
          <div className="text-sm text-gray-700 space-y-2">
            <p className="font-semibold">
              {order.customerInfo.firstName} {order.customerInfo.lastName}
            </p>
            <p>{order.customerInfo.address}</p>
            <p>
              {order.customerInfo.city}, {order.customerInfo.state}{' '}
              {order.customerInfo.postalCode}
            </p>
            <p>{order.customerInfo.country}</p>
            <div className="pt-4 border-t mt-4">
              <p className="text-xs font-semibold text-gray-600 mb-1">CONTACT</p>
              <p>{order.customerInfo.email}</p>
              <p>{order.customerInfo.phone}</p>
            </div>
          </div>
        </div>

        {/* Order Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Order Information</h2>
          <div className="text-sm text-gray-700 space-y-3">
            <div className="flex justify-between">
              <span>Order Date</span>
              <span className="font-semibold">
                {new Date(order.createdAt).toLocaleDateString('en-NG')}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Status</span>
              <span className="font-semibold capitalize px-3 py-1 bg-blue-100 text-blue-700 rounded">
                {order.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Payment Method</span>
              <span className="font-semibold">
                {paymentMethodLabel[order.paymentMethod]}
              </span>
            </div>
            <div className="flex justify-between pt-3 border-t">
              <span className="font-bold">Total Amount</span>
              <span className="font-bold text-lg">
                ₦{order.total.toLocaleString('en-NG')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Order Items</h2>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 pb-4 border-b last:border-b-0"
            >
              <div className="flex-shrink-0 w-20 h-24 bg-gray-100 rounded overflow-hidden">
                {/* Placeholder for product image */}
                <div className="w-full h-full bg-gray-200" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{item.name}</h3>
                <div className="text-sm text-gray-600 space-y-1 mb-2">
                  {item.size && <p>Size: {item.size}</p>}
                  {item.color && <p>Color: {item.color}</p>}
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  ₦{item.price.toLocaleString('en-NG')}
                </p>
                <p className="text-sm text-gray-600">each</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="space-y-3 mb-6 pb-6 border-b">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>₦{order.subtotal.toLocaleString('en-NG')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span>
              {order.shipping === 0 ? (
                <span className="text-green-600 font-medium">FREE</span>
              ) : (
                `₦${order.shipping.toLocaleString('en-NG')}`
              )}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax (7.5%)</span>
            <span>₦{order.tax.toLocaleString('en-NG')}</span>
          </div>
        </div>
        <div className="flex justify-between text-xl font-bold">
          <span>Total Amount</span>
          <span>₦{order.total.toLocaleString('en-NG')}</span>
        </div>
      </div>

      {/* Payment Instructions */}
      {order.paymentMethod !== 'card' && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-2">Payment Instructions</h3>
          <p className="text-sm text-blue-800 mb-4">
            {order.paymentMethod === 'bank-transfer'
              ? 'Please transfer ₦' +
                order.total.toLocaleString('en-NG') +
                ' to our bank account. Reference: ' +
                order.orderNumber
              : 'Dial *737*50*' +
                order.total +
                '# to complete your payment'}
          </p>
          <p className="text-xs text-blue-700">
            Your order will be processed once payment is received.
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={() => window.print()}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Printer size={18} />
          Print Receipt
        </Button>
        <Link href="/women/new-in">
          <Button className="bg-gray-900 text-white hover:bg-gray-800">
            Continue Shopping
          </Button>
        </Link>
      </div>

      {/* Email Confirmation */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
        <p className="text-sm text-gray-600">
          A confirmation email has been sent to{' '}
          <span className="font-semibold">{order.customerInfo.email}</span>
        </p>
        <p className="text-xs text-gray-500 mt-2">
          You can track your order in your account or by using your order
          number
        </p>
      </div>
    </div>
  );
}
