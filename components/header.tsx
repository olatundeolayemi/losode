'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Heart, ShoppingCart, Search, LogOut } from 'lucide-react';
import NavDropdown from './nav-dropdown';
import DesignersDropdown from './designers-dropdown';
import SmartSearch from './smart-search';
import AuthModal from './auth-modal';
import CurrencySelector from './currency-selector';
import { getCurrentUser, logoutUser } from '@/lib/auth';

function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const user = getCurrentUser();
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
  };

  const designersNames = [
    'MIEKO MICHI',
    'RAYHA SWISH EMPIRE',
    'LOHIJE',
    'EYEZNIKA FASHION STUDIO',
    'OMA APPAREL DESIGNS',
    'JAZZEFFECT DESIGN',
    'SEAMED BY TEMMY',
    'BESPOKE BY NURUDEEN',
    "PERLEMONI L'AFRIQUE",
    'BKCO',
  ];

  const clothingData = {
    title: 'Clothing',
    subitems: ['All Clothing', 'New In Clothing', 'Dresses', 'Coats and Jackets', 'Kimonos', 'Tops and Blouses'],
  };

  const shoesData = { title: 'Shoes', subitems: ['All Shoes', 'New In Shoes'] };
  const bagsData = { title: 'Bags', subitems: ['All Bags', 'New In Bags'] };
  const jeweleryData = { title: 'Jewellery', subitems: ['All Jewellery', 'New In Jewellery'] };
  const accessoriesData = { title: 'Accessories', subitems: ['All Accessories'] };
  const beautyData = { title: 'Beauty', subitems: ['All In Beauty'] };
  const newInData = {
    title: 'New In',
    subitems: ['Dresses', 'Coats And Jackets', 'Kimonos', 'Tops And Blouses', 'Jumpsuits And Playsuits', 'Boubous'],
  };
  const shopByData = {
    title: 'Shop By',
    subitems: ['Beach Wear', 'Casual Wear', 'Formal Wear', 'Loose Fit', 'Party Wear', 'Regular Fit', 'Sports Wear', 'Tall', 'Weddings', 'Work Wear', 'Working Out'],
  };
  const homewareData = {
    title: 'Homeware',
    subitems: ['All Homeware', 'Furniture', 'Textiles & Rugs', 'Lighting', 'Kitchen & Dining', 'Decor & Accessories'],
  };

  const designers = ['ADIRE BUTIK', 'IDOWU COUTURE AND WEARS', 'KNOTCRAFTSBYLA', 'JUST NOBLE COLLECTION', 'AD_LINECLOTHING', 'HOUSE OF TYS AND MORE'];

  return (
    <div style={{ backgroundColor: '#F9F8F6' }} className="text-foreground sticky top-0 z-40 border-b border-border">

      {/* Top Banner */}
      <div className="hidden sm:flex px-4 md:px-6 lg:px-8 py-2 text-xs md:text-sm gap-4 md:gap-8 justify-between items-center flex-wrap" style={{ borderColor: '#E8E5E0', borderBottomWidth: '1px' }}>
        <span>
          New to Losode?{' '}
          <a href="https://www.youtube.com/user/LosodeTV" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 transition font-medium">
            Subscribe
          </a>{' '}
          and get 10% off
        </span>
        <div className="flex gap-4 md:gap-6">
          <Link href="#" className="hover:opacity-80 transition">Help</Link>
          <Link href="#" className="hover:opacity-80 transition">Track Order</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4 min-h-fit overflow-visible" style={{ borderColor: '#E8E5E0', borderBottomWidth: '1px' }}>
        {/* Left: Hamburger & Currency */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 hover:bg-muted rounded-lg transition-all flex-shrink-0" aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
            <div className="flex flex-col gap-1.5">
              <span className="w-4 h-0.5 bg-foreground transition-all"></span>
              <span className="w-4 h-0.5 bg-foreground transition-all"></span>
              <span className="w-4 h-0.5 bg-foreground transition-all"></span>
            </div>
          </button>
          <div className="hidden sm:block flex-shrink-0 min-w-fit">
            <CurrencySelector />
          </div>
        </div>

        {/* Center: Logo */}
        <Link href="/" className="font-serif font-bold text-xl sm:text-2xl md:text-3xl hover:opacity-80 transition flex-shrink-0" style={{ color: '#8B7F77' }}>losóde</Link>

        {/* Right: Icons */}
        <div className="flex items-center gap-0.5 sm:gap-2 flex-shrink-0">
          <button className="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-muted rounded-lg transition-all" aria-label="Search">
            <Search size={18} className="text-foreground" />
          </button>
          <Link href="/wishlist" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-muted rounded-lg transition-all active:scale-95" aria-label="Wishlist">
            <Heart size={18} className="text-foreground" />
          </Link>
          <Link href="/cart" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-muted rounded-lg transition-all active:scale-95" aria-label="Shopping cart">
            <ShoppingCart size={18} className="text-foreground" />
          </Link>
          <button onClick={() => setIsAuthOpen(true)} className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-muted rounded-lg transition-all active:scale-95" aria-label={currentUser ? 'Account' : 'Sign in'}>
            <User size={18} className="text-foreground" />
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-3 px-4 md:px-6 lg:px-8 py-2 flex-wrap" style={{ borderColor: '#E8E5E0', borderBottomWidth: '1px', backgroundColor: '#FAFAF9' }}>
        {[
          { label: 'Women', href: '/women' },
          { label: 'Men', href: '/men' },
          { label: 'Kids', href: '/kids' },
          { label: 'Homeware', href: '/homeware' },
          { label: 'Designers', href: '/designers' },
        ].map(({ label, href }) => (
          <Link key={href} href={href} className="text-xs lg:text-sm font-medium px-2 lg:px-3 py-2 rounded-lg transition-all duration-200 hover:bg-muted/50 active:bg-muted text-foreground whitespace-nowrap">
            {label}
          </Link>
        ))}
      </nav>

      {/* Desktop Search */}
      <div className="hidden lg:flex justify-center px-4 md:px-6 lg:px-8 py-3 flex-1" style={{ borderColor: '#E8E5E0', borderBottomWidth: '1px' }}>
        <div className="w-full max-w-2xl">
          <SmartSearch />
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-3 sm:px-4 py-3 border-t border-border">
        <div className="bg-card border border-border rounded-lg px-3 py-2 flex items-center gap-2">
          <Search size={18} className="text-muted-foreground flex-shrink-0" />
          <input type="text" placeholder="Search products..." className="flex-1 bg-transparent text-sm placeholder-muted-foreground outline-none text-foreground" />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-3 py-4 space-y-1">
            {[
              { label: 'Women', href: '/women' },
              { label: 'Men', href: '/men' },
              { label: 'Kids', href: '/kids' },
              { label: 'Homeware', href: '/homeware' },
              { label: 'Designers', href: '/designers' },
              { label: 'Sell on Losode', href: '/sell' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="block w-full px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-all text-foreground">
                {label}
              </Link>
            ))}

            {/* Mobile Currency */}
            <div className="px-4 py-3 border-t border-border mt-2 pt-4">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Location & Currency</p>
              <CurrencySelector />
            </div>

            {/* Mobile Auth */}
            <div className="px-4 py-3 border-t border-border mt-2 pt-4">
              {currentUser ? (
                <>
                  <Link href="/account" onClick={() => setMobileMenuOpen(false)} className="block w-full px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-all text-foreground">My Account</Link>
                  <Link href="/orders" onClick={() => setMobileMenuOpen(false)} className="block w-full px-4 py-3 text-sm font-medium hover:bg-muted rounded-lg transition-all text-foreground">My Orders</Link>
                  <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="block w-full px-4 py-3 text-sm font-medium hover:bg-destructive/10 rounded-lg transition-all text-destructive text-left flex items-center gap-2">
                    <LogOut size={16} /> Logout
                  </button>
                </>
              ) : (
                <button onClick={() => { setIsAuthOpen(true); setMobileMenuOpen(false); }} className="block w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all">
                  Sign In / Register
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Category Menu */}
      <div className="border-t px-4 md:px-6 py-3 flex items-center gap-4 md:gap-6 lg:gap-8 text-xs md:text-sm overflow-x-auto scrollbar-hide" style={{ borderColor: '#E8E5E0' }}>
        <NavDropdown label="In" items={newInData} designers={designers} image={{ src: '/images/category-women-hero.jpg', alt: 'New In collection', title: 'Shop With Ease', subtitle: 'Styles for men and women' }} />
        <NavDropdown label="Shop By" items={shopByData} designers={designers} image={{ src: '/images/category-women-hero.jpg', alt: 'Shop by collection', title: 'Style That Suits', subtitle: 'For every occasion' }} />
        <NavDropdown label="Clothing" items={clothingData} designers={designers} image={{ src: '/images/category-dresses.jpg', alt: 'Clothing collection', title: 'Style That Suits', subtitle: 'For every occasion' }} />
        <NavDropdown label="Shoes" items={shoesData} designers={designers} image={{ src: '/images/women-shoes-heels-1.jpg', alt: 'Shoes collection', title: 'Step Out In Style', subtitle: 'Footwear that accentuates' }} />
        <NavDropdown label="Bags" items={bagsData} designers={designers} image={{ src: '/images/women-bags-leather-1.jpg', alt: 'Bags collection', title: 'Style That Suits', subtitle: 'For every occasion' }} />
        <NavDropdown label="Jewellery" items={jeweleryData} designers={designers} image={{ src: '/images/category-jewellery-hero.jpg', alt: 'Jewellery collection', title: 'Accentuate Your Look', subtitle: 'Bags, jewellery and hats' }} />
        <NavDropdown label="Accessories" items={accessoriesData} designers={designers} image={{ src: '/images/women-accessories-jewelry-1.jpg', alt: 'Accessories collection', title: 'Accentuate Your Look', subtitle: 'Bags, jewellery and hats' }} />
        <NavDropdown label="Beauty" items={beautyData} designers={designers} image={{ src: '/images/category-beauty-hero.jpg', alt: 'Beauty collection', title: 'Accentuate Your Look', subtitle: 'Luxury beauty products' }} />
        <NavDropdown label="Homeware" items={homewareData} designers={designers} image={{ src: '/images/category-homeware.jpg', alt: 'Homeware collection', title: 'Transform Your Space', subtitle: 'Premium furniture and home decor' }} />
        <DesignersDropdown />
      </div>
    </div>
  );
}

export { Header };
export default Header;
