import React from "react";
import { ArrowRight, CheckCircle2, Droplets, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// Assets — using real Figma exports
import logoSvg from "../../assets/icons/logo.svg";
import waterSplashImg from "../../assets/images/water-splash-isolated.png";
import bottleImg from "../../assets/images/section-two-bottle.png";
import leavesImg from "../../assets/images/section-two-leaves.png";

export const TechnologyHighlight: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F3FDFF] overflow-hidden text-slate-800 py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-20 xl:px-28">
      {/* Background Wavy Line */}
      <svg
        className="absolute pointer-events-none z-0 opacity-40 top-1/2 -translate-y-1/2 left-0 w-full h-[240px] min-w-[1000px] object-cover"
        viewBox="0 0 1920 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,120 C 400,220 800,40 1200,160 C 1600,280 1800,100 1920,120"
          stroke="#00D5FD"
          strokeWidth="2"
          strokeDasharray="6 4"
          fill="none"
        />
      </svg>

      <div className="relative z-10 max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start space-y-6 md:space-y-7">

            {/* New Launch Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span
                style={{
                  fontFamily: "'Kaushan Script', cursive",
                  fontSize: "24px",
                  lineHeight: "35px",
                  letterSpacing: "0.1em",
                  color: "#000000",
                }}
              >
                New Launch
              </span>
              <div
                style={{
                  width: "118px",
                  height: "1px",
                  backgroundColor: "#A2A2A2",
                  marginTop: "-2px",
                }}
              />
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <img
                src={logoSvg}
                alt="Hydra Curls Logo"
                className="w-36 sm:w-44 lg:w-[168px] h-auto object-contain"
              />
            </motion.div>

            {/* Headline / Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-xl sm:text-2xl lg:text-[24px] leading-relaxed md:leading-[35px]"
              style={{
                fontFamily: "'Kaushan Script', cursive",
                color: "#737373",
              }}
            >
              Revolutionary hair care range specially designed for Arab curly, coily &amp; wavy hair.
              Experience{" "}
              <span style={{ color: "#00D5FD" }}>48-hour hydration</span> with natural ingredients like
              Hyaluronic Acid, Coconut &amp; Avocado.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              {/* Pill 1 */}
              <div
                className="flex items-center gap-2 px-3.5 py-2.5 justify-center"
                style={{
                  background: "rgba(0, 213, 253, 0.06)",
                  borderRadius: "10px",
                  minHeight: "40px",
                }}
              >
                <div className="w-[19px] h-[19px] flex items-center justify-center rounded-full border-[1.5px] border-[#00D5FD] shrink-0">
                  <CheckCircle2 className="w-[12px] h-[12px] text-[#00D5FD]" />
                </div>
                <span
                  className="font-gotham text-sm sm:text-[16px] font-light whitespace-nowrap"
                  style={{ color: "#737373", lineHeight: "19px" }}
                >
                  No SLS, Silicones, Parabens
                </span>
              </div>

              {/* Pill 2 */}
              <div
                className="flex items-center gap-2 px-3.5 py-2.5 justify-center"
                style={{
                  background: "rgba(0, 213, 253, 0.06)",
                  borderRadius: "10px",
                  minHeight: "40px",
                }}
              >
                <Droplets className="w-[19px] h-[19px] text-[#00D5FD] fill-[#00D5FD] shrink-0" />
                <span
                  className="font-gotham text-sm sm:text-[16px] font-light whitespace-nowrap"
                  style={{ color: "#737373", lineHeight: "19px" }}
                >
                  48-Hour Hydration
                </span>
              </div>

              {/* Pill 3 */}
              <div
                className="flex items-center gap-2 px-3.5 py-2.5 justify-center"
                style={{
                  background: "rgba(0, 213, 253, 0.06)",
                  borderRadius: "10px",
                  minHeight: "40px",
                }}
              >
                <Sparkles className="w-[19px] h-[19px] text-[#00D5FD] fill-[#00D5FD] shrink-0" />
                <span
                  className="font-gotham text-sm sm:text-[16px] font-light whitespace-nowrap"
                  style={{ color: "#737373", lineHeight: "19px" }}
                >
                  Hair Types 2, 3, 4
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-2"
            >
              {/* Frame 4 */}
              <button
                onClick={() => {
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-cyan-400/20 w-full sm:w-[240px] shrink-0"
                style={{
                  height: "58px",
                  background: "linear-gradient(93.55deg, #00D5FD 0%, #02D3FC 98.65%)",
                  borderRadius: "10px",
                }}
              >
                <span
                  className="font-gotham text-white"
                  style={{ fontSize: "20px", lineHeight: "24px", fontWeight: 350 }}
                >
                  Explore Products
                </span>
                <ArrowRight className="w-6 h-6 text-white" />
              </button>

              {/* Frame 5 */}
              <button
                onClick={() => {
                  document.getElementById("curly-girl-method")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center cursor-pointer transition-all hover:bg-[#00D5FD]/5 active:scale-[0.98] w-full sm:w-[272px] shrink-0"
                style={{
                  height: "58px",
                  border: "1px solid #00D5FD",
                  borderRadius: "10px",
                  background: "transparent",
                }}
              >
                <span
                  className="font-gotham text-[#00D5FD]"
                  style={{ fontSize: "20px", lineHeight: "24px", fontWeight: 350 }}
                >
                  Learn Curly Girl Method
                </span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Visual Stage (Bottle, Water Splash & Tropical Leaves) */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex justify-center items-center min-h-[360px] sm:min-h-[480px] lg:min-h-[620px] mt-6 lg:mt-0">

            {/* Tropical Palm Leaves */}
            <motion.img
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              src={leavesImg}
              alt="Tropical Palm Leaves"
              className="absolute pointer-events-none object-contain -right-8 sm:-right-16 -top-10 sm:-top-16 w-[95%] sm:w-[85%] max-w-[750px] z-0 opacity-90 lg:opacity-100"
            />

            {/* Water Splash */}
            <motion.img
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              src={waterSplashImg}
              alt="Water Splash"
              className="absolute pointer-events-none object-contain w-[85%] sm:w-[75%] max-w-[540px] z-10"
            />

            {/* Shampoo Bottle */}
            <motion.img
              initial={{ opacity: 0, y: 30, rotate: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25 }}
              src={bottleImg}
              alt="Hydra Curls Shampoo Bottle"
              className="relative pointer-events-none object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 w-[55%] sm:w-[48%] lg:w-[400px] max-w-[440px] z-20"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

