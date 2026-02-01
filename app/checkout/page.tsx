import Header from '@/components/header';
import Footer from '@/components/footer';
import { CheckoutClient } from '@/components/checkout-client';

export const metadata = {
  title: 'Checkout - Losóde',
  description: 'Complete your purchase at Losóde',
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <CheckoutClient />
      </main>
      <Footer />
    </div>
  );
}
