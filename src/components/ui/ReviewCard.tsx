import React from "react";
import type { Review } from "../../types";
import { Star, CheckCircle, Quote } from "lucide-react";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-[#190938] border border-purple-500/20 hover:border-[#00d2ff]/40 rounded-3xl p-6 flex flex-col justify-between hover:shadow-glow-purple transition-all duration-300 relative group">
      <Quote className="w-8 h-8 text-purple-500/20 absolute top-4 right-4 group-hover:text-[#00d2ff]/20 transition-colors" />

      <div>
        {/* Rating & Date */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-600"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-slate-400">{review.date}</span>
        </div>

        {/* Testimonial Quote */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
          "{review.comment}"
        </p>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-purple-500/20">
        <img
          src={review.image}
          alt={review.name}
          className="w-11 h-11 object-cover rounded-full border border-[#00d2ff]/40"
        />
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="text-xs font-bold text-white">{review.name}</h4>
            {review.verified && (
              <CheckCircle className="w-3.5 h-3.5 text-[#00d2ff]" />
            )}
          </div>
          <span className="text-[11px] text-purple-300 font-medium">
            {review.hairType}
          </span>
        </div>
      </div>
    </div>
  );
};
