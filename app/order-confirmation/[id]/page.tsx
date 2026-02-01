import Header from '@/components/header';
import Footer from '@/components/footer';
import { OrderConfirmationClient } from '@/components/order-confirmation-client';

interface ConfirmationPageProps {
  params: Promise<{ id: string }>;
}

export default async function ConfirmationPage({
  params,
}: ConfirmationPageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <OrderConfirmationClient orderId={id} />
      </main>
      <Footer />
    </div>
  );
}
