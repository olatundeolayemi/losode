import Header from '@/components/header';
import Hero from '@/components/hero';
import TrustSection from '@/components/trust-section';
import CategoriesSection from '@/components/categories-section';
import PromoSection from '@/components/promo-section';
import Footer from '@/components/footer';

export const metadata = {
  title: 'Losóde - Premium Fashion & Homeware Marketplace',
  description: 'Shop curated collections of premium fashion, homeware, and designer pieces from top African brands. Experience elegance and quality at Losóde.',
};

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <TrustSection />
      <CategoriesSection />
      <PromoSection />
      <Footer />
    </main>
  );
}
