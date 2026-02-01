import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ProductDetailClient } from '@/components/product-detail-client';
import { allProducts } from '@/lib/products';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <ProductDetailClient product={product} />
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}
