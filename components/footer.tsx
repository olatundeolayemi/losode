import Image from 'next/image';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#FAF7F3' }} className="text-foreground py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        {/* Responsive grid layout - 1 col mobile, 2 col tablet, dynamic on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          {/* Left column - Useful Information */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-sm uppercase tracking-wide">
              Useful Information
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  Fashion and Climate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  Our Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  Our Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  Shipping and Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  Sell on Losode
                </a>
              </li>
            </ul>
          </div>

          {/* Right column - Customers and Designers */}
          <div>
            <h4 className="font-semibold mb-6 text-foreground text-sm uppercase tracking-wide">
              Customers and Designers
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  Track an Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  Create a Return
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  Book a Photoshoot
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  Returns and Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  Our Designers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition font-medium">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo and payment section */}
        <div
          className="border-t pt-12 md:pt-16 flex flex-col lg:flex-row justify-between items-start gap-12 md:gap-16"
          style={{ borderColor: '#E8E5E0' }}
        >
          <div className="flex-1 w-full lg:w-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              losóde
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mb-6 font-medium">
              We accept payment from these providers:
            </p>
            
            {/* Payment Icons */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a href="#" title="Verve" className="relative h-8 md:h-10 w-12 md:w-14 hover:opacity-80 transition">
                <Image src="/icons/payment-verve.jpg" alt="Verve payment" fill className="object-contain" />
              </a>
              <a href="#" title="Google Pay" className="relative h-8 md:h-10 w-12 md:w-14 hover:opacity-80 transition">
                <Image src="/icons/payment-gpay.jpg" alt="Google Pay" fill className="object-contain" />
              </a>
              <a href="#" title="PayPal" className="relative h-8 md:h-10 w-12 md:w-14 hover:opacity-80 transition">
                <Image src="/icons/payment-paypal.jpg" alt="PayPal" fill className="object-contain" />
              </a>
              <a href="#" title="Visa" className="relative h-8 md:h-10 w-12 md:w-14 hover:opacity-80 transition">
                <Image src="/icons/payment-visa.jpg" alt="Visa" fill className="object-contain" />
              </a>
              <a href="#" title="American Express" className="relative h-8 md:h-10 w-12 md:w-14 hover:opacity-80 transition">
                <Image src="/icons/payment-amex.jpg" alt="American Express" fill className="object-contain" />
              </a>
            </div>
          </div>

          {/* Social media icons */}
          <div className="flex gap-6 md:gap-8 w-full lg:w-auto justify-start lg:justify-end">
            <a
              href="https://www.instagram.com/thisislosode/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-6 md:h-8 w-6 md:w-8 hover:opacity-80 hover:scale-110 transition transform"
              title="Instagram"
              aria-label="Visit Losode on Instagram"
            >
              <Image src="/icons/social-instagram.jpg" alt="Instagram" fill className="object-contain" />
            </a>
            <a
              href="https://web.facebook.com/losode1/?_rdc=1&_rdr=#"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-6 md:h-8 w-6 md:w-8 hover:opacity-80 hover:scale-110 transition transform"
              title="Facebook"
              aria-label="Visit Losode on Facebook"
            >
              <Image src="/icons/social-facebook.jpg" alt="Facebook" fill className="object-contain" />
            </a>
            <a
              href="https://www.youtube.com/user/LosodeTV"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-6 md:h-8 w-6 md:w-8 hover:opacity-80 hover:scale-110 transition transform"
              title="YouTube"
              aria-label="Visit Losode on YouTube"
            >
              <Image src="/icons/social-youtube.jpg" alt="YouTube" fill className="object-contain" />
            </a>
            <a
              href="https://x.com/thisislosode"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-6 md:h-8 w-6 md:w-8 hover:opacity-80 hover:scale-110 transition transform"
              title="X (Twitter)"
              aria-label="Visit Losode on X"
            >
              <Image src="/icons/social-twitter.jpg" alt="X" fill className="object-contain" />
            </a>
            <a
              href="https://www.linkedin.com/company/losode"
              target="_blank"
              rel="noopener noreferrer"
              className="relative h-6 md:h-8 w-6 md:w-8 hover:opacity-80 hover:scale-110 transition transform"
              title="LinkedIn"
              aria-label="Visit Losode on LinkedIn"
            >
              <Image src="/icons/linkedin.png" alt="LinkedIn" fill className="object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="border-t pt-8 md:pt-10 text-center text-xs md:text-sm text-muted-foreground"
        style={{ borderColor: '#E8E5E0' }}
      >
        <p className="leading-relaxed">
          &copy; 2026, Losode Inc.{' '}
          <span className="text-muted-foreground/70 block md:inline">Always Beyond Borders</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
export { Footer };
