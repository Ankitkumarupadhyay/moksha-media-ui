import React from "react";
import { motion } from "framer-motion";

export const HairTypeGuideSection: React.FC = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#DAF6FF" }}
    >
      {/* "Influencer Approved" eyebrow */}
      <div className="flex flex-col items-center pt-16 pb-4 px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'Kaushan Script', cursive",
            fontSize: "clamp(18px, 2vw, 24px)",
            color: "#737373",
          }}
        >
          Influencer Approved
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-gotham text-center"
          style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.15, color: "#1A1A1A", maxWidth: "700px" }}
        >
          See What The{" "}
          <span style={{ color: "#00D5FD" }}>Experts Are Saying</span>
        </motion.h2>
      </div>

      {/* Influencer grid - 3 columns of image+overlay cards */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pb-16 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {[
            {
              img: "section6-influencer.png",
              name: "@sara_curls",
              handle: "Hair Influencer, Dubai",
              quote: "My curls have never been more defined and hydrated!",
            },
            {
              img: "curly-model-1.png",
              name: "@laila_natural",
              handle: "Curly Hair Educator, UAE",
              quote: "Finally a product made for our hair type!",
            },
            {
              img: "curly-model-2.png",
              name: "@nour_waves",
              handle: "Beauty Creator, KSA",
              quote: "The 48-hour hydration claim is absolutely real!",
            },
          ].map((inf, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden group"
              style={{ minHeight: "400px" }}
            >
              <img
                src={`/src/assets/images/${inf.img}`}
                alt={inf.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b081c]/80 via-transparent to-transparent" />
              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  className="font-gotham text-white/80 text-[13px] leading-relaxed mb-2"
                  style={{ fontWeight: 350 }}
                >
                  "{inf.quote}"
                </p>
                <p className="font-gotham text-white font-medium text-[14px]">{inf.name}</p>
                <p className="font-gotham text-white/60 text-[12px]">{inf.handle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
