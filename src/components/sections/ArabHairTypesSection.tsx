import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

import hairType2b from "../../assets/images/hair-type-2b.png";
import hairType3a from "../../assets/images/hair-type-3a.png";
import hairType4a from "../../assets/images/hair-type-4a.png";

interface HairTypeCardProps {
  typeNumber: string;
  typeName: string;
  image: string;
  description: string;
  characteristics: string[];
  delay: number;
}

const HAIR_TYPES: HairTypeCardProps[] = [
  {
    typeNumber: "TYPE 2",
    typeName: "Wavy Hair",
    image: hairType2b,
    description: "Loose waves to defined S-patterns that require lightweight moisture without being weighed down.",
    characteristics: [
      "Loose waves with slight bend",
      "S-shaped pattern",
      "Light to medium volume",
      "Frizz-prone in humidity",
    ],
    delay: 0.1,
  },
  {
    typeNumber: "TYPE 3",
    typeName: "Curly Hair",
    image: hairType3a,
    description: "Springy ringlets and spirals that need deep hydration to maintain shape and elasticity.",
    characteristics: [
      "Springy ringlets and spirals",
      "Well-defined curl pattern",
      "Requires intense 48h moisture",
      "Prone to shrinkage & dryness",
    ],
    delay: 0.2,
  },
  {
    typeNumber: "TYPE 4",
    typeName: "Coily & Kinky Hair",
    image: hairType4a,
    description: "Tight zig-zag coils with maximum density, needing rich nourishing oils and sealants.",
    characteristics: [
      "Tight zig-zag coil pattern",
      "Fragile & prone to breakage",
      "Maximum moisture retention needed",
      "High density & beautiful volume",
    ],
    delay: 0.3,
  },
];

export const ArabHairTypesSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#09152b] text-white overflow-hidden">
      {/* Background radial gradient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #00D5FD 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif italic text-[#00D5FD] text-xl sm:text-2xl mb-3"
          >
            Designed for You
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-gotham text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-white mb-6"
          >
            Perfect for Arab <br className="hidden sm:block" />
            <span className="text-[#00D5FD] font-normal">Curly, Coily & Wavy Hair</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-gotham text-white/70 text-base sm:text-lg leading-relaxed font-light"
          >
            Our range is specifically formulated to meet the unique needs of Arab hair textures,
            providing targeted care for types 2, 3, and 4.
          </motion.p>
        </div>

        {/* 3 Hair Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {HAIR_TYPES.map((type) => (
            <motion.div
              key={type.typeNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: type.delay }}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d1f3d]/80 backdrop-blur-md hover:border-[#00D5FD]/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#061021]">
                <img
                  src={type.image}
                  alt={type.typeName}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3d] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-[#00D5FD] text-[#09152b] font-gotham text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {type.typeNumber}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-gotham text-2xl font-medium text-white mb-2 group-hover:text-[#00D5FD] transition-colors">
                    {type.typeName}
                  </h3>
                  <p className="font-gotham text-white/60 text-sm leading-relaxed mb-6 font-light">
                    {type.description}
                  </p>

                  {/* Characteristics */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <p className="font-gotham text-xs font-semibold text-[#00D5FD] uppercase tracking-wider mb-2">
                      CHARACTERISTICS
                    </p>
                    {type.characteristics.map((char, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#00D5FD] flex-shrink-0" />
                        <span className="font-gotham text-xs text-white/80 font-light">
                          {char}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-8 w-full py-3.5 rounded-xl border border-[#00D5FD]/40 text-[#00D5FD] font-gotham text-xs font-medium uppercase tracking-wider hover:bg-[#00D5FD] hover:text-[#09152b] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                  <Sparkles className="w-4 h-4" />
                  Explore Routine
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
