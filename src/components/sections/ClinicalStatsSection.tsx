import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Sparkles, Heart } from "lucide-react";

const STATS = [
  { value: "48h", label: "Hydration", icon: Droplets },
  { value: "05", label: "Products", icon: Sparkles },
  { value: "0", label: "Sulfates & Silicones", icon: ShieldCheck },
  { value: "3", label: "Hair Types (2, 3, 4)", icon: Heart },
];

export const ClinicalStatsSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-gradient-to-b from-[#041c47] to-[#082a66] text-white overflow-hidden border-t border-white/10">
      {/* Background glow & decorative grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00D5FD]/10 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif italic text-[#00D5FD] text-xl sm:text-2xl mb-3"
          >
            The Hydra Curls Promise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-gotham text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-white mb-6"
          >
            Join the Curly Hair <br />
            <span className="text-[#00D5FD] font-normal">Revolution</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-gotham text-white/70 text-base sm:text-lg leading-relaxed font-light"
          >
            Transform your curly hair journey with expert guidance, premium products, and a supportive community.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-md text-center group hover:border-[#00D5FD]/50 transition-all duration-300 flex flex-col items-center justify-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#00D5FD]/10 flex items-center justify-center text-[#00D5FD] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-gotham text-4xl sm:text-5xl font-bold text-white mb-2 group-hover:text-[#00D5FD] transition-colors">
                  {stat.value}
                </div>
                <div className="font-gotham text-xs sm:text-sm text-white/70 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
