'use client';

import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: number;
  showText?: boolean;
  interactive?: boolean;
  onRate?: (rating: number) => void;
}

export function StarRating({
  rating,
  reviewCount,
  size = 16,
  showText = true,
  interactive = false,
  onRate,
}: StarRatingProps) {
  const displayRating = Math.round(rating * 2) / 2; // Round to nearest 0.5

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const isFilled = i < Math.floor(displayRating);
          const isHalf = i === Math.floor(displayRating) && displayRating % 1 !== 0;

          return (
            <button
              key={i}
              onClick={() => interactive && onRate?.(i + 1)}
              className={`transition-all ${interactive ? 'cursor-pointer hover:scale-110' : ''}`}
              disabled={!interactive}
            >
              <div className="relative">
                <Star size={size} className="text-gray-300" />
                <div
                  className="absolute top-0 left-0 overflow-hidden flex items-center"
                  style={{
                    width: isFilled ? '100%' : isHalf ? '50%' : '0%',
                  }}
                >
                  <Star size={size} className="fill-yellow-400 text-yellow-400" />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {showText && reviewCount !== undefined && (
        <span className="text-xs sm:text-sm text-gray-600">
          ({reviewCount.toLocaleString()})
        </span>
      )}
      {showText && reviewCount === undefined && (
        <span className="text-xs sm:text-sm font-medium" style={{ color: '#8B7F77' }}>
          {displayRating}
        </span>
      )}
    </div>
  );
}
