import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface OrderItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: 'card' | 'bank-transfer' | 'ussd';
  createdAt: string;
  updatedAt: string;
}

interface OrderStore {
  orders: Order[];
  currentOrder: Order | null;
  createOrder: (order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => Order;
  getOrders: () => Order[];
  getOrderById: (id: string) => Order | undefined;
  updateOrderStatus: (id: string, status: Order['status']) => void;
}

export const useOrderStore = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: [],
      currentOrder: null,

      createOrder: (orderData) => {
        const order: Order = {
          ...orderData,
          id: `order-${Date.now()}`,
          orderNumber: `ORD-${Date.now().toString().slice(-10)}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        set((state) => ({
          orders: [order, ...state.orders],
          currentOrder: order,
        }));

        return order;
      },

      getOrders: () => {
        return get().orders;
      },

      getOrderById: (id: string) => {
        return get().orders.find((order) => order.id === id);
      },

      updateOrderStatus: (id: string, status: Order['status']) => {
        set((state) => ({
          orders: state.orders.map((order) =>
            order.id === id
              ? {
                  ...order,
                  status,
                  updatedAt: new Date().toISOString(),
                }
              : order
          ),
        }));
      },
    }),
    {
      name: 'losode-orders',
    }
  )
);
