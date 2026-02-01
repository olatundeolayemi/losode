import Image from 'next/image';
import Link from 'next/link';

export default function CategoriesSection() {
  const categories = [
    {
      name: 'Boubous',
      image: '/images/category-boubous.jpg',
      href: '/shop-by/casual-wear',
    },
    {
      name: 'Dresses',
      image: '/images/category-dresses.jpg',
      href: '/women/clothing',
    },
    {
      name: 'Kimonos',
      image: '/images/category-kimonos.jpg',
      href: '/women/clothing',
    },
    {
      name: 'Homeware',
      image: '/images/category-homeware.jpg',
      href: '/home',
    },
  ];

  return (
    <section className="w-full px-4 py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-center mb-4 md:mb-6 text-foreground text-balance">
          Discover Our Popular Categories
        </h2>
        <p className="text-center text-muted-foreground mb-10 md:mb-12 max-w-3xl mx-auto text-sm sm:text-base">
          View our most popular fashion categories, featuring trend-setting styles from our designers. Shop from our vast array of chic womenswear to statement menswear, and discover the latest in fashion trends.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="relative aspect-square sm:aspect-video md:aspect-square overflow-hidden rounded-lg">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition flex items-end p-4 md:p-6">
                  <h3 className="text-white font-serif text-xl sm:text-2xl md:text-3xl font-bold text-balance">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
