import React from "react";
import { Container } from "../layout/Container";
import { Sparkles, Heart, Sun } from "lucide-react";
import { motion } from "framer-motion";

export const EditorialBentoGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#F3FDFF] text-[#000000] relative">
      <Container className="space-y-12">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#00bcd4]">
            GET STARTED
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000000]">
            Your Curly Hair <br />
            <span className="font-display italic text-[#00bcd4] font-normal">
              Journey Starts Here
            </span>
          </h2>
          <p className="text-sm text-[#737373]">
            Discover products tailored for your specific curl patterns & routine.
          </p>
        </div>

        {/* 6-box Colorful Bento Grid matching Figma Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Box 1: Light Teal Background (#50d2db) with Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 h-80 rounded-3xl overflow-hidden relative group shadow-lg bg-[#50d2db]"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
              alt="Natural Curls"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00d2ff]">
                Type 3A - 3C
              </span>
              <h3 className="text-lg font-bold">Natural Definition & Bounce</h3>
            </div>
          </motion.div>

          {/* Box 2: Violet/Purple Block (#4741b8) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 bg-[#4741b8] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <blockquote className="text-2xl sm:text-3xl font-display italic leading-snug">
                "Hydration is the secret to defined, weightless curls."
              </blockquote>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-white/20 text-xs opacity-90">
              <span className="font-semibold">Hydra Curls Philosophy</span>
              <span className="font-bold">100% Pure Oils</span>
            </div>
          </motion.div>

          {/* Box 3: Deep Purple Block (#683584) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-6 bg-[#683584] text-white rounded-3xl p-8 flex flex-col justify-between shadow-xl"
          >
            <div className="flex items-center gap-2 text-purple-200 text-xs font-bold uppercase tracking-wider mb-4">
              <Heart className="w-4 h-4 text-pink-300" />
              <span>Clean & Vegan</span>
            </div>

            <p className="text-lg sm:text-xl font-bold leading-relaxed">
              "100% Vegan & Clean formulas designed to nourish every single strand."
            </p>

            <span className="text-xs text-purple-200 pt-4 block">
              0% Sulfates, Silicones or Parabens
            </span>
          </motion.div>

          {/* Box 4: Pink Background (#e56b8e) with Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-6 h-72 rounded-3xl overflow-hidden relative group shadow-lg bg-[#e56b8e]"
          >
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80"
              alt="Coily Curls Model"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-xs font-bold text-pink-200">Type 4A - 4C Coils</span>
              <h3 className="text-base font-bold">Deep Moisture Sealing</h3>
            </div>
          </motion.div>

          {/* Box 5: Amber Orange (#f59828) with Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-4 h-72 rounded-3xl overflow-hidden relative group shadow-lg bg-[#f59828]"
          >
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
              alt="Wavy Hair Model"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-5 flex flex-col justify-end text-white">
              <span className="text-xs font-bold text-amber-200">Type 2A - 2C Waves</span>
            </div>
          </motion.div>

          {/* Box 6: Deep Cyan (#0fa8bd) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-8 bg-[#0fa8bd] text-white rounded-3xl p-8 flex flex-col justify-between text-center shadow-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-white text-[#0fa8bd] flex items-center justify-center font-black text-xl mx-auto mb-2">
              <Sun className="w-6 h-6" />
            </div>

            <h4 className="text-2xl font-black">48-HOUR FRIZZ CONTROL</h4>
            <p className="text-sm text-cyan-100 max-w-lg mx-auto">
              Clinical tests prove continuous hydration and softness even under high humidity conditions.
            </p>

            <span className="text-xs font-bold uppercase tracking-wider text-cyan-200 pt-2">
              Proven Results
            </span>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
