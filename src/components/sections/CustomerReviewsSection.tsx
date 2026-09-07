import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import communityGirlImg from "../../assets/images/community-girl.png";

const REVIEWS = [
  {
    id: 1,
    text: "\"I've struggled with frizz my whole life. Hydra Curls is the first range that actually tamed my hair for more than a day! The 48-hour claim is real.\"",
    name: "Aisha K",
    location: "Dubai, UAE",
    stars: 5,
  },
  {
    id: 2,
    text: "\"I've struggled with frizz my whole life. Hydra Curls is the first range that actually tamed my hair for more than a day! The 48-hour claim is real.\"",
    name: "Aisha K",
    location: "Dubai, UAE",
    stars: 5,
  },
];

export const CustomerReviewsSection: React.FC = () => {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #DAF6FF 0%, #c4f0fc 100%)" }}
    >
      {/* Wavy decorative background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1920 1109" preserveAspectRatio="none">
          <path d="M0,300 C480,450 960,200 1440,380 C1680,460 1800,340 1920,300" stroke="#00D5FD" strokeWidth="2" fill="none"/>
          <path d="M0,600 C400,750 800,500 1200,680 C1500,800 1700,650 1920,600" stroke="#00D5FD" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[680px]">

          {/* LEFT — Large girl portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-end justify-center lg:justify-start"
          >
            <img
              src={communityGirlImg}
              alt="Hydra Curls Community Member"
              className="relative z-10 w-full max-w-[480px] lg:max-w-none lg:w-[520px] xl:w-[600px] h-auto object-contain object-bottom"
              style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.08))" }}
            />
          </motion.div>

          {/* RIGHT — Title + Reviews */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-8 lg:pl-8 xl:pl-12"
          >
            {/* Section title */}
            <div>
              <h2
                className="font-gotham text-[#1A1A1A]"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 350, lineHeight: 1.15 }}
              >
                Hear from Our{" "}
                <span style={{ color: "#00D5FD" }}>Community</span>
              </h2>
            </div>

            {/* Review cards */}
            <div className="flex flex-col gap-4">
              {REVIEWS.map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                  className={`rounded-2xl p-6 transition-all duration-300 ${activeReview === idx ? 'ring-2 ring-[#00D5FD]' : 'opacity-85'}`}
                  style={{ background: "rgba(4, 28, 71, 0.88)", backdropFilter: "blur(12px)" }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p
                    className="font-gotham text-white mb-4 leading-relaxed"
                    style={{ fontSize: "clamp(12px, 1.2vw, 14px)", fontWeight: 350 }}
                  >
                    {review.text}
                  </p>
                  {/* Reviewer */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex-shrink-0"
                      style={{ background: "#E8D5FF" }}
                    />
                    <div>
                      <p className="font-gotham text-white text-[13px] font-medium">{review.name}</p>
                      <p className="font-gotham text-white/50 text-[12px]">{review.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Nav arrows */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => setActiveReview(p => Math.max(0, p - 1))}
                className="w-10 h-10 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A]/60 hover:bg-white/50 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveReview(p => Math.min(REVIEWS.length - 1, p + 1))}
                className="w-10 h-10 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A]/60 hover:bg-white/50 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
