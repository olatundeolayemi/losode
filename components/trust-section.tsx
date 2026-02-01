import { Truck, Lock, Monitor, Headphones } from 'lucide-react';

export default function TrustSection() {
  const benefits = [
    {
      icon: Truck,
      title: 'Quick And Secure Deliveries',
      description:
        'At Losode, we have carefully optimised our logistics processes to ensure fast, reliable, and hassle-free delivery. Shop with confidence, knowing your orders are handled with efficiency and care every step of the way.',
    },
    {
      icon: Lock,
      title: 'Fair Returns Policy',
      description:
        'At Losode, our designers uphold fair, transparent policies that safeguard your purchases, providing you with peace of mind. From secure transactions to customer-first returns and exchanges, we ensure a safe and reliable shopping experience.',
    },
    {
      icon: Monitor,
      title: 'Easy To Use Platform',
      description:
        'We have built a user-friendly platform that\'s easy to navigate, making your shopping experience seamless and enjoyable. Discover a simple and efficient way to browse, shop, and connect with top designers on Losode.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description:
        'Visit our Contact Us page to find all the ways you can reach us. Whether you have questions, feedback, or need assistance, we are here to help. Get in touch with Losode today!',
    },
  ];

  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 border-b border-gray-300 pb-12">
          <h2 className="text-4xl font-serif font-bold text-center mb-8 text-gray-900">
            Shop With Confidence On Losode
          </h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto">
            What You See Is What You Get. At Losode, we know how important trust is when shopping online. That is why we ensure every purchase meets, and exceeds, your expectations. If anything falls short, our team is ready to make it right, quickly and hassle-free. Shop with confidence and discover quality fashion, guaranteed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <Icon className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
