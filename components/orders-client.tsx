'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useOrderStore, type Order } from '@/lib/store/orders';
import { Package, Eye } from 'lucide-react';

export function OrdersClient() {
  const [mounted, setMounted] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  const getOrders = useOrderStore((state) => state.getOrders);

  useEffect(() => {
    setMounted(true);
    const allOrders = getOrders();
    setOrders(allOrders);
  }, [getOrders]);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">My Orders</h1>
      <p className="text-gray-600 mb-8">
        View and track all your orders
      </p>

      {orders.length === 0 ? (
        <div className="text-center py-16">
          <Package size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 mb-6">You haven't placed any orders yet</p>
          <Link href="/women/new-in">
            <Button className="bg-gray-900 text-white hover:bg-gray-800">
              Start Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start mb-4">
                {/* Order Number and Date */}
                <div>
                  <p className="text-xs text-gray-600 uppercase">Order Number</p>
                  <p className="font-semibold text-lg">{order.orderNumber}</p>
                  <p className="text-xs text-gray-600 mt-2">
                    {new Date(order.createdAt).toLocaleDateString('en-NG')}
                  </p>
                </div>

                {/* Customer Info */}
                <div>
                  <p className="text-xs text-gray-600 uppercase">Delivery To</p>
                  <p className="font-semibold">
                    {order.customerInfo.firstName}{' '}
                    {order.customerInfo.lastName}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {order.customerInfo.city}, {order.customerInfo.state}
                  </p>
                </div>

                {/* Items Count */}
                <div>
                  <p className="text-xs text-gray-600 uppercase">Items</p>
                  <p className="font-semibold">
                    {order.items.reduce((sum, item) => sum + item.quantity, 0)}{' '}
                    {order.items.reduce((sum, item) => sum + item.quantity, 0) ===
                    1
                      ? 'item'
                      : 'items'}
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    ₦{order.total.toLocaleString('en-NG')}
                  </p>
                </div>

                {/* Status */}
                <div className="flex flex-col items-start md:items-end gap-3">
                  <span
                    className={`px-3 py-1 rounded text-xs font-semibold capitalize ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                  <Link href={`/order-confirmation/${order.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 bg-transparent"
                    >
                      <Eye size={16} />
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Items Preview */}
              <div className="mt-4 pt-4 border-t">
                <div className="flex flex-wrap gap-2">
                  {order.items.slice(0, 3).map((item) => (
                    <span
                      key={item.id}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {item.name}
                    </span>
                  ))}
                  {order.items.length > 3 && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      +{order.items.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
