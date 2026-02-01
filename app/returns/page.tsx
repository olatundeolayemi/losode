import Header from '@/components/header';
import Footer from '@/components/footer';
import { CheckCircle, X } from 'lucide-react';

export const metadata = {
  title: 'Returns & Refunds | Losóde - 30-Day Policy',
  description: 'Learn about Losóde\'s 30-day returns policy, refund process, and how to initiate a return or exchange.',
};

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: '#1A1A1A' }}>
              Returns & Refund Policy
            </h1>
            <p className="text-gray-600">
              We want you to be completely satisfied with your purchase. If not, our returns process is simple and hassle-free.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
            {/* 30-Day Policy */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="text-2xl font-serif mb-6" style={{ color: '#8B7F77' }}>
                30-Day Returns Policy
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We offer a full 30-day return policy on most items. If you're not completely satisfied with your purchase for any reason, you can return it within 30 days of delivery for a full refund or exchange.
              </p>
              <p className="text-sm text-gray-600">
                The 30-day period starts from the date you receive your order, not the purchase date.
              </p>
            </div>

            {/* What Can Be Returned */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="text-2xl font-serif mb-6" style={{ color: '#8B7F77' }}>
                What Can Be Returned
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Unused & Unworn Items</p>
                    <p className="text-sm text-gray-600">Items in original condition with tags attached</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Original Packaging</p>
                    <p className="text-sm text-gray-600">Items must be in original packaging with all components</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Defective Items</p>
                    <p className="text-sm text-gray-600">Items with manufacturing defects can be returned anytime</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Wrong Item Received</p>
                    <p className="text-sm text-gray-600">If we sent the wrong item, return shipping is free</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Non-Returnable Items */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="text-2xl font-serif mb-6" style={{ color: '#8B7F77' }}>
                Non-Returnable Items
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <X className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Worn or Used Items</p>
                    <p className="text-sm text-gray-600">Items showing signs of use cannot be returned</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <X className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Items Without Tags</p>
                    <p className="text-sm text-gray-600">Merchandise without original tags</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <X className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Custom or Personalized Items</p>
                    <p className="text-sm text-gray-600">Made-to-order items cannot be returned</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <X className="text-red-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Sale Items</p>
                    <p className="text-sm text-gray-600">Items purchased at 70% or more discount (may vary)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Return */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="text-2xl font-serif mb-6" style={{ color: '#8B7F77' }}>
                How to Return an Item
              </h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 text-white font-semibold text-sm"
                    style={{ backgroundColor: '#8B7F77' }}
                  >
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Log Into Your Account</p>
                    <p className="text-sm text-gray-600">Sign in to your Losóde account and navigate to "My Orders"</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 text-white font-semibold text-sm"
                    style={{ backgroundColor: '#8B7F77' }}
                  >
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Select the Item</p>
                    <p className="text-sm text-gray-600">Find the order containing the item you want to return and click "Return Item"</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 text-white font-semibold text-sm"
                    style={{ backgroundColor: '#8B7F77' }}
                  >
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Reason for Return</p>
                    <p className="text-sm text-gray-600">Select the reason for your return and add any additional comments</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 text-white font-semibold text-sm"
                    style={{ backgroundColor: '#8B7F77' }}
                  >
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Get Your Label</p>
                    <p className="text-sm text-gray-600">Print your return shipping label from the confirmation email</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 text-white font-semibold text-sm"
                    style={{ backgroundColor: '#8B7F77' }}
                  >
                    5
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Ship It Back</p>
                    <p className="text-sm text-gray-600">Pack the item securely in original packaging and ship using the provided label</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div
                    className="flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 text-white font-semibold text-sm"
                    style={{ backgroundColor: '#8B7F77' }}
                  >
                    6
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Get Your Refund</p>
                    <p className="text-sm text-gray-600">Once we receive and inspect your return, your refund will be processed within 5-7 business days</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Refund Timeline */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="text-2xl font-serif mb-6" style={{ color: '#8B7F77' }}>
                Refund Timeline
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">24 Hours:</span>
                    <span className="text-gray-700">Return label generated and sent to your email</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">7-10 Days:</span>
                    <span className="text-gray-700">Item delivered back to our warehouse</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">5-7 Days:</span>
                    <span className="text-gray-700">Item inspected and refund processed</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold min-w-fit">1-3 Days:</span>
                    <span className="text-gray-700">Refund appears in your original payment method</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-600 mt-4">
                  Total process usually takes 14-20 business days from the time you initiate the return
                </p>
              </div>
            </div>

            {/* Shipping Costs */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="text-2xl font-serif mb-6" style={{ color: '#8B7F77' }}>
                Shipping & Costs
              </h2>
              <div className="space-y-4 text-sm text-gray-700">
                <p>
                  <strong>Defective Items:</strong> Free return shipping. Use the prepaid label we provide.
                </p>
                <p>
                  <strong>Change of Mind:</strong> Customers pay return shipping (₦1,500 in Lagos, ₦2,000 other states). You can also visit our office to return items in person.
                </p>
                <p>
                  <strong>Wrong Item Sent:</strong> Completely free returns with prepaid label.
                </p>
              </div>
            </div>

            {/* Exchanges */}
            <div className="mb-12 pb-12 border-b border-gray-200">
              <h2 className="text-2xl font-serif mb-6" style={{ color: '#8B7F77' }}>
                Exchanges
              </h2>
              <p className="text-gray-700 mb-4">
                Want to exchange an item for a different size or color? We make it easy!
              </p>
              <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                <li>Select "Exchange Item" instead of "Return Item" in your account</li>
                <li>Choose the new item you'd like</li>
                <li>If the new item costs more, pay the difference</li>
                <li>If it costs less, we'll refund the difference</li>
                <li>Enjoy free return shipping on the exchange</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-serif mb-6" style={{ color: '#8B7F77' }}>
                Have Questions?
              </h2>
              <p className="text-gray-700 mb-6">
                Our support team is here to help with any questions about returns or refunds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:returns@losode.com"
                  className="px-6 py-3 rounded-lg font-semibold transition-all text-center"
                  style={{
                    backgroundColor: '#8B7F77',
                    color: 'white',
                  }}
                >
                  Email Returns Team
                </a>
                <a
                  href="/faq"
                  className="px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 transition-all text-center"
                  style={{ borderColor: '#8B7F77', color: '#8B7F77' }}
                >
                  View FAQs
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
