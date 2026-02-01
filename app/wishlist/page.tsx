import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'My Wishlist | Losóde',
  description: 'View and manage your favorite items on Losóde',
};

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h1 className="text-3xl font-serif mb-8">My Wishlist</h1>
        <div className="text-center py-12">
          <p className="text-gray-600">Your wishlist is currently empty</p>
          <p className="text-gray-500 text-sm mt-2">Add items to your wishlist to save them for later</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
