import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 max-w-7xl mx-auto">
        {/* Left column */}
        <div className="flex flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6 text-foreground text-balance leading-tight">
            Transform Your Space Into A Sanctuary
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
            Discover carefully curated homeware pieces that blend functionality with timeless elegance. From statement furniture to subtle accents, elevate your living space with designs that reflect your personal style.
          </p>
          <button 
            className="w-full sm:w-auto bg-primary text-primary-foreground px-6 sm:px-8 py-3 md:py-4 font-semibold hover:bg-primary/90 active:bg-primary/80 transition rounded-lg"
            aria-label="Shop Home collection"
          >
            Shop Home
          </button>
        </div>

        {/* Right column - Image */}
        <div className="relative aspect-square md:aspect-auto min-h-64 sm:min-h-96 md:min-h-full">
          <Image
            src="/products/home-furniture-1.jpg"
            alt="Homeware collection - Transform your space"
            fill
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
