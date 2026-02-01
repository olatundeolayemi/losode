import Header from '@/components/header';
import Footer from '@/components/footer';
import { OrdersClient } from '@/components/orders-client';

export const metadata = {
  title: 'My Orders - Losóde',
  description: 'View and track your orders',
};

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <OrdersClient />
      </main>
      <Footer />
    </div>
  );
}
