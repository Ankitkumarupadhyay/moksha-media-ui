import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import fourthSectionProductsImg from "../../assets/images/fourth-section-products.png";

export const HyaluronicMoistureCards: React.FC = () => {
  return (
    <section className="relative w-full py-12 lg:py-16 bg-[#F0FAFD] overflow-hidden text-slate-900">
      {/* Seamless top decorative wave line */}
      <div className="absolute top-0 left-0 right-0 h-6 pointer-events-none opacity-30">
        <svg viewBox="0 0 1920 24" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,12 C480,24 960,0 1440,20 C1680,24 1800,12 1920,16" stroke="#00D5FD" strokeWidth="2" />
        </svg>
      </div>

      <div className="relative max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Card Layout Grid: 948px each on 1920px canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* LEFT CARD (Rectangle 185: 948px x 684px, bg #DAF6FF) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-[#DAF6FF] p-8 sm:p-12 lg:p-16 min-h-[500px] lg:min-h-[640px] flex flex-col justify-center overflow-hidden shadow-sm"
          >
            {/* Organic wavy line pattern background overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 948 684" fill="none" preserveAspectRatio="none">
                <path d="M-50 100 C 250 250 550 50 850 200 C 1050 300 1150 150 1250 250" stroke="#00D5FD" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M-50 350 C 200 480 600 280 800 450 C 1000 550 1150 350 1250 480" stroke="#00D5FD" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Text Content */}
            <div className="relative z-10 max-w-2xl space-y-6">
              <h3 className="font-gotham text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#000000] leading-snug">
                Lorem Ipsum
              </h3>

              <p className="font-gotham text-[#737373] text-sm sm:text-base leading-[26px] font-light">
                Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.
              </p>
            </div>

            {/* CTA Button: Frame 4 (180px x 58px, linear-gradient(#00D5FD, #02D3FC)) */}
            <div className="relative z-10 pt-8">
              <button
                className="flex items-center justify-center gap-2 h-[58px] w-[180px] rounded-[10px] text-white font-gotham text-base font-medium shadow-md shadow-cyan-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                style={{
                  background: "linear-gradient(93.55deg, #00D5FD 0%, #02D3FC 100%)",
                }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT CARD (Frame 71: 948px x 684px, bg #DAF6FF) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl bg-[#DAF6FF] p-8 sm:p-12 lg:p-16 min-h-[500px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden shadow-sm"
          >
            {/* Organic wavy line pattern background overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 948 684" fill="none" preserveAspectRatio="none">
                <path d="M-50 150 C 300 50 600 250 900 100 C 1100 200 1200 100 1300 200" stroke="#00D5FD" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M-50 400 C 250 520 550 320 850 480 C 1050 580 1200 380 1300 500" stroke="#00D5FD" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Text Content */}
            <div className="relative z-10 max-w-2xl space-y-6">
              <h3 className="font-gotham text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#000000] leading-snug">
                Lorem Ipsum
              </h3>

              <p className="font-gotham text-[#737373] text-sm sm:text-base leading-[26px] font-light">
                Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand. Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.Hyaluronic Acid acts like a magnet for moisture, drawing hydration into each strand.
              </p>

              {/* CTA Button: Frame 62 (180px x 58px) */}
              <div className="pt-2">
                <button
                  className="flex items-center justify-center gap-2 h-[58px] w-[180px] rounded-[10px] text-white font-gotham text-base font-medium shadow-md shadow-cyan-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                  style={{
                    background: "linear-gradient(93.55deg, #00D5FD 0%, #02D3FC 100%)",
                  }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Product Group Image (shampoo, conditioner, cream, gel, mask at bottom center) */}
            <div className="relative z-10 mt-6 flex justify-center items-end">
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                src={fourthSectionProductsImg}
                alt="Hydra Curls 5-Product Range"
                className="w-full max-w-[560px] lg:max-w-[620px] h-auto object-contain drop-shadow-xl translate-y-4"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

