import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Testimonials } from '@/components/testimonials';
import { TrustBadges } from '@/components/trust-badges';
import { womenClothingProducts, menClothingProducts, homewareProducts } from '@/lib/products';

export const metadata = {
  title: 'Losóde - African Fashion & Homeware Marketplace',
  description: 'Shop premium African fashion, homeware, and accessories from the best designers. Explore women\'s, men\'s, and kids collections with fast shipping and secure payment.',
};

export default function HomePage() {
  const featuredWomenProducts = womenClothingProducts.slice(0, 4);
  const featuredMenProducts = menClothingProducts.slice(0, 4);
  const featuredHomeware = homewareProducts.slice(0, 4);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner - Fully Responsive with Stronger Branding */}
      <section className="relative h-56 sm:h-72 md:h-96 lg:h-screen w-full overflow-hidden group">
        <Image
          src="/images/category-women-hero.jpg"
          alt="Losóde - Authentic African Fashion & Homeware"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50 flex flex-col items-center justify-center">
          <div className="text-center text-white px-3 sm:px-4 md:px-6 max-w-3xl">
            {/* Brand Tagline */}
            <p className="text-xs sm:text-sm md:text-base text-gray-100 mb-2 sm:mb-3 tracking-widest uppercase font-medium">
              Authentic African Fashion & Homeware
            </p>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif mb-3 sm:mb-4 md:mb-6 font-bold tracking-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              Discover Authentic Elegance
            </h1>
            
            {/* Subheading */}
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed text-gray-100">
              Curated collections of premium African fashion, sustainable homeware, and luxury accessories. Trusted by 10,000+ customers worldwide.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link 
                href="/women" 
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-white text-gray-900 font-bold hover:bg-gray-100 transition-all duration-300 rounded-lg text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                Shop New Arrivals
              </Link>
              <Link 
                href="/home" 
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 md:py-4 border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-300 rounded-lg text-sm sm:text-base"
              >
                Explore Designers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Highlights - Fully Responsive */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-6 sm:mb-8 md:mb-12 text-center" style={{ color: '#1A1A1A' }}>
          Shop By Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <Link href="/women" className="group">
            <div className="relative h-40 sm:h-56 md:h-72 overflow-hidden mb-2 sm:mb-3 md:mb-4 rounded-lg">
              <Image
                src="/images/category-women-hero.jpg"
                alt="Shop Women's Fashion Collection - Premium African Clothing & Accessories"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-2xl font-serif mb-1 sm:mb-2" style={{ color: '#8B7F77' }}>Women</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">Explore our curated collection of women's fashion</p>
          </Link>

          <Link href="/men" className="group">
            <div className="relative h-40 sm:h-56 md:h-72 overflow-hidden mb-2 sm:mb-3 md:mb-4 rounded-lg">
              <Image
                src="/images/category-men-hero.jpg"
                alt="Men's Collection"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-2xl font-serif mb-1 sm:mb-2" style={{ color: '#8B7F77' }}>Men</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">Discover premium men's style and elegance</p>
          </Link>

          <Link href="/homeware" className="group sm:col-span-2 md:col-span-1">
            <div className="relative h-40 sm:h-56 md:h-72 overflow-hidden mb-2 sm:mb-3 md:mb-4 rounded-lg">
              <Image
                src="/images/category-homeware.jpg"
                alt="Homeware Collection"
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-base sm:text-lg md:text-2xl font-serif mb-1 sm:mb-2" style={{ color: '#8B7F77' }}>Homeware</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">Transform your space with premium home decor</p>
          </Link>
        </div>
      </section>

      {/* Featured Products - Fully Responsive */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-6 sm:mb-8 md:mb-12 text-center" style={{ color: '#1A1A1A' }}>
            Featured This Week
          </h2>
          
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-4 sm:mb-6 md:mb-8" style={{ color: '#8B7F77' }}>Women's Collection</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
              {featuredWomenProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} className="group">
                  <div className="relative aspect-square mb-2 sm:mb-3 md:mb-4 overflow-hidden bg-white rounded-lg">
                    <Image
                      src={product.image || '/placeholder.svg'}
                      alt={`${product.name} - Premium Women's Fashion at Losóde`}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xs sm:text-sm font-medium line-clamp-2">{product.name}</h4>
                  <p className="text-xs text-gray-600 mb-1">{product.designer}</p>
                  <p className="font-semibold text-xs sm:text-sm">₦{product.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-4 sm:mb-6 md:mb-8" style={{ color: '#8B7F77' }}>Men's Collection</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
              {featuredMenProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} className="group">
                  <div className="relative aspect-square mb-2 sm:mb-3 md:mb-4 overflow-hidden bg-white rounded-lg">
                    <Image
                      src={product.image || '/placeholder.svg'}
                      alt={`${product.name} - Premium Men's Fashion at Losóde`}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xs sm:text-sm font-medium line-clamp-2">{product.name}</h4>
                  <p className="text-xs text-gray-600 mb-1">{product.designer}</p>
                  <p className="font-semibold text-xs sm:text-sm">₦{product.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif mb-4 sm:mb-6 md:mb-8" style={{ color: '#8B7F77' }}>Homeware Collection</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
              {featuredHomeware.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} className="group">
                  <div className="relative aspect-square mb-2 sm:mb-3 md:mb-4 overflow-hidden bg-white rounded-lg">
                    <Image
                      src={product.image || '/placeholder.svg'}
                      alt={`${product.name} - Premium Homeware & Decor at Losóde`}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="text-xs sm:text-sm font-medium line-clamp-2">{product.name}</h4>
                  <p className="text-xs text-gray-600 mb-1">{product.designer}</p>
                  <p className="font-semibold text-xs sm:text-sm">₦{product.price.toLocaleString()}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated Products with Reviews - New Section */}
      <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-2 sm:mb-3 md:mb-4 text-center" style={{ color: '#1A1A1A' }}>
            Customer Favorites
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center mb-6 sm:mb-8 md:mb-12">
            Our most loved products, rated by thousands of satisfied customers
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
            {[
              { id: 1, name: 'Premium Ankara Dress', price: 45000, rating: 4.8, reviews: 342, image: '/images/women-dress-1.jpg' },
              { id: 2, name: 'Handcrafted Cushion', price: 15000, rating: 4.9, reviews: 156, image: '/images/homeware-textiles-cushion-1.jpg' },
              { id: 3, name: 'Men\'s Agbada', price: 65000, rating: 4.7, reviews: 198, image: '/images/men-casual-shirt-1.jpg' },
              { id: 4, name: 'Designer Handbag', price: 85000, rating: 4.9, reviews: 287, image: '/images/women-bags-leather-1.jpg' },
              { id: 5, name: 'Wooden Coffee Table', price: 125000, rating: 4.8, reviews: 121, image: '/images/homeware-furniture-chair-1.jpg' },
              { id: 6, name: 'Beaded Necklace', price: 22000, rating: 4.9, reviews: 234, image: '/images/jewelry-necklace-1.jpg' },
              { id: 7, name: 'Summer Boubou', price: 52000, rating: 4.6, reviews: 89, image: '/images/women-boubou-1.jpg' },
              { id: 8, name: 'Luxury Throw Blanket', price: 35000, rating: 4.8, reviews: 167, image: '/images/homeware-textiles-cushion-1.jpg' },
            ].map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} - Highly Rated at Losóde`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-bold" style={{ color: '#8B7F77' }}>
                    ⭐ {product.rating}
                  </div>
                </div>
                <div className="p-2 sm:p-3">
                  <h3 className="text-xs sm:text-sm font-medium line-clamp-2 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xs ${i < Math.floor(product.rating) ? '⭐' : '☆'}`}>
                          {i < Math.floor(product.rating) ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  <p className="font-bold text-xs sm:text-sm mb-2">₦{product.price.toLocaleString()}</p>
                  <Link
                    href="/products"
                    className="w-full block text-center px-2 py-1.5 sm:py-2 bg-gray-900 text-white rounded text-xs font-semibold hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <TrustBadges />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section - Fully Responsive */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-3 sm:mb-4 md:mb-6" style={{ color: '#1A1A1A' }}>
            Curated Collections
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
            Browse our carefully selected collections of premium African fashion and homeware
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            <Link href="/clothing" className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-900 text-white hover:bg-gray-800 transition text-xs sm:text-sm md:text-base rounded">
              Clothing
            </Link>
            <Link href="/shoes" className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border border-gray-300 hover:bg-gray-50 transition text-xs sm:text-sm md:text-base rounded">
              Shoes
            </Link>
            <Link href="/accessories" className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-900 text-white hover:bg-gray-800 transition text-xs sm:text-sm md:text-base rounded">
              Accessories
            </Link>
            <Link href="/shop-by/beach-wear" className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border border-gray-300 hover:bg-gray-50 transition text-xs sm:text-sm md:text-base rounded">
              Shop By
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
