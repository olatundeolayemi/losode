'use client';

import { Star } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  helpful: number;
}

interface ProductReviewsProps {
  productId: string;
  reviews?: Review[];
  averageRating?: number;
  totalReviews?: number;
}

const defaultReviews: Review[] = [
  {
    id: '1',
    author: 'Chioma A.',
    rating: 5,
    date: '2 weeks ago',
    title: 'Absolutely Beautiful Quality',
    comment: 'The quality of this product exceeded my expectations. The craftsmanship is impeccable and it arrived perfectly packaged. Highly recommend Losóde!',
    verified: true,
    helpful: 45,
  },
  {
    id: '2',
    author: 'Tunde M.',
    rating: 5,
    date: '1 month ago',
    title: 'Excellent Service & Fast Delivery',
    comment: 'Ordered on Monday, received by Wednesday. Customer service was incredibly responsive. Will definitely shop here again!',
    verified: true,
    helpful: 32,
  },
  {
    id: '3',
    author: 'Adanna L.',
    rating: 4,
    date: '1 month ago',
    title: 'Great Product, Minor Issue with Packaging',
    comment: 'Product quality is fantastic, exactly as described. Only minor issue was slight damage to outer packaging, but content was perfect.',
    verified: true,
    helpful: 28,
  },
  {
    id: '4',
    author: 'Kemi J.',
    rating: 5,
    date: '6 weeks ago',
    title: 'Worth Every Naira',
    comment: 'This is premium quality. I am impressed with the attention to detail. The brand truly cares about customer satisfaction.',
    verified: true,
    helpful: 51,
  },
];

const StarRating = ({ rating, size = 16 }: { rating: number; size?: number }) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

export function ProductReviews({
  reviews = defaultReviews,
  averageRating = 4.7,
  totalReviews = 248,
}: ProductReviewsProps) {
  const ratingDistribution = [
    { stars: 5, count: 180, percentage: 72 },
    { stars: 4, count: 50, percentage: 20 },
    { stars: 3, count: 12, percentage: 5 },
    { stars: 2, count: 4, percentage: 2 },
    { stars: 1, count: 2, percentage: 1 },
  ];

  return (
    <div className="w-full py-8 md:py-12">
      {/* Rating Summary */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-serif mb-6" style={{ color: '#1A1A1A' }}>
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Overall Rating */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2" style={{ color: '#8B7F77' }}>
                {averageRating}
              </div>
              <StarRating rating={Math.round(averageRating)} size={20} />
              <p className="text-sm text-gray-600 mt-3">
                Based on {totalReviews.toLocaleString()} verified reviews
              </p>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="md:col-span-2">
            <div className="space-y-2">
              {ratingDistribution.map((dist) => (
                <div key={dist.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-medium">{dist.stars}</span>
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-yellow-400 h-full transition-all"
                      style={{ width: `${dist.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12 text-right">
                    {dist.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-6" style={{ color: '#1A1A1A' }}>
          Top Reviews
        </h3>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={review.rating} />
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <h4 className="font-semibold text-sm md:text-base">{review.title}</h4>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-3">{review.comment}</p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>
                <strong>{review.author}</strong> • {review.date}
              </span>
              <button className="text-gray-600 hover:text-gray-900 transition">
                Helpful ({review.helpful})
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Write Review CTA */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <button className="px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition rounded-lg">
          Write a Review
        </button>
      </div>
    </div>
  );
}
