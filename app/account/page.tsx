import Header from '@/components/header';
import Footer from '@/components/footer';
import { AccountClient } from '@/components/account-client';

export const metadata = {
  title: 'My Account - Losóde',
  description: 'Manage your account and preferences',
};

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <AccountClient />
      </main>
      <Footer />
    </div>
  );
}
