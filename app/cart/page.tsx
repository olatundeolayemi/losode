import Header from '@/components/header';
import Footer from '@/components/footer';
import { CartClient } from '@/components/cart-client';

export const metadata = {
  title: 'Shopping Cart - Losóde',
  description: 'Review your shopping cart and proceed to checkout',
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <CartClient />
      </main>
      <Footer />
    </div>
  );
}
