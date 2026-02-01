import { ChevronDown } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: 'FAQs | Losóde - Frequently Asked Questions',
  description: 'Find answers to common questions about Losóde. Learn about shipping, returns, payments, and more.',
};

const faqs = [
  {
    category: 'Shipping & Delivery',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'We deliver within 2-4 business days across Nigeria. Orders are processed within 24 hours. You\'ll receive a tracking number via email once your order ships.',
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! Free shipping on all orders over ₦50,000. For orders below that, shipping costs ₦2,000 for Lagos and ₦3,000 for other states.',
      },
      {
        q: 'Can I change my delivery address?',
        a: 'Yes, you can change your address if your order hasn\'t been processed yet. Contact our customer service team immediately at support@losode.com.',
      },
      {
        q: 'What if my package is lost or damaged?',
        a: 'We take full responsibility for lost or damaged packages. Contact us within 48 hours of delivery with photos, and we\'ll arrange a replacement or refund.',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day return policy on all items. Products must be unused and in original packaging. Return shipping is free for defective items.',
      },
      {
        q: 'How do I initiate a return?',
        a: 'Log into your account, go to "My Orders", select the item, and click "Return Item". Follow the instructions and print your return label.',
      },
      {
        q: 'How long does a refund take?',
        a: 'Once we receive and inspect your return, refunds are processed within 5-7 business days to your original payment method.',
      },
      {
        q: 'Can I exchange an item?',
        a: 'Yes! Instead of returning and buying separately, you can exchange for the same or different item of equal or greater value.',
      },
    ],
  },
  {
    category: 'Payments & Security',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept Verve cards, Google Pay, PayPal, Visa, and American Express. All payments are processed securely with SSL encryption.',
      },
      {
        q: 'Is it safe to enter my card information?',
        a: 'Absolutely. Our checkout is PCI DSS compliant and uses 256-bit SSL encryption. We never store your full card details.',
      },
      {
        q: 'Do you offer payment plans?',
        a: 'Currently, we don\'t offer installment plans, but we\'re working on it. Follow us on social media for updates!',
      },
      {
        q: 'Can I save my payment methods?',
        a: 'Yes, you can save multiple payment methods to your account for faster checkout on future purchases.',
      },
    ],
  },
  {
    category: 'Products & Authenticity',
    questions: [
      {
        q: 'Are all products 100% authentic?',
        a: 'Yes. We only partner with authorized retailers and designers. Every product comes with authenticity certification.',
      },
      {
        q: 'Do you have size guides?',
        a: 'Yes, each product page has a detailed size guide with measurements. We recommend checking the guide before purchasing.',
      },
      {
        q: 'Can I see products in person before buying?',
        a: 'We don\'t have physical stores yet, but all products are high-resolution photographed from multiple angles. We also offer a 30-day return policy for peace of mind.',
      },
      {
        q: 'How often do you restock?',
        a: 'We restock weekly based on demand. Subscribe to notifications on product pages to be alerted when items are back in stock.',
      },
    ],
  },
  {
    category: 'Account & Wishlist',
    questions: [
      {
        q: 'How do I create an account?',
        a: 'Click "Sign Up" in the top right corner, enter your email, and create a password. You can also sign up with Google or Facebook.',
      },
      {
        q: 'Can I save items to my wishlist?',
        a: 'Yes! Click the heart icon on any product to add it to your wishlist. You can view and manage your wishlist from your account.',
      },
      {
        q: 'How do I get email notifications for wishlist items?',
        a: 'Go to "My Wishlist", click on an item, and check "Notify me when on sale" or "Notify me when back in stock".',
      },
      {
        q: 'Can I share my wishlist?',
        a: 'Yes. On your wishlist page, click "Share" to generate a link you can send to friends and family.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: '#1A1A1A' }}>
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Find answers to common questions about shopping at Losóde. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
            <div className="space-y-12">
              {faqs.map((section) => (
                <div key={section.category}>
                  <h2 className="text-xl md:text-2xl font-serif mb-6" style={{ color: '#8B7F77' }}>
                    {section.category}
                  </h2>

                  <div className="space-y-3">
                    {section.questions.map((faq, idx) => (
                      <details
                        key={idx}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-gray-50">
                          <h3 className="text-sm md:text-base font-semibold text-gray-900">
                            {faq.q}
                          </h3>
                          <ChevronDown size={20} className="text-gray-600 flex-shrink-0 ml-4" />
                        </summary>
                        <div className="px-4 md:px-6 pb-4 md:pb-6 bg-gray-50 text-sm md:text-base text-gray-700 leading-relaxed">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 pt-12 border-t border-gray-200 text-center">
              <h3 className="text-xl md:text-2xl font-serif mb-3" style={{ color: '#1A1A1A' }}>
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Our support team is here to help. Reach out to us anytime.
              </p>
              <a
                href="/contact"
                className="inline-block px-6 md:px-8 py-3 font-semibold rounded-lg transition-all text-sm md:text-base"
                style={{
                  backgroundColor: '#8B7F77',
                  color: 'white',
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
