import React from "react";
import { Container } from "../layout/Container";
import { INGREDIENTS } from "../../data/products";
import { Badge } from "../ui/Badge";
import { Sparkles, Droplet, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

export const IngredientsGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Droplet":
        return <Droplet className="w-5 h-5 text-[#00bcd4]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-500" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-purple-600" />;
      default:
        return <Droplet className="w-5 h-5 text-[#00bcd4]" />;
    }
  };

  return (
    <section id="ingredientes" className="py-24 bg-[#dff5fa] text-[#0b081c] relative">
      <Container className="space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
            CLEAN FORMULA
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0b081c]">
            Powered by{" "}
            <span className="font-display italic text-[#00bcd4] font-normal">
              Nature's Best Ingredients
            </span>
          </h2>

          <p className="text-slate-700 text-base">
            Our formula is crafted with natural plant oils & active ingredients to deeply hydrate without weighing down.
          </p>
        </div>

        {/* Ingredients Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INGREDIENTS.map((ing, idx) => (
            <motion.div
              key={ing.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border border-cyan-200/80 rounded-3xl p-6 flex flex-col justify-between shadow-card-soft hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Image */}
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src={ing.image}
                    alt={ing.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0b081c] text-white px-3 py-1 rounded-full text-[11px] font-semibold border border-white/10">
                    {ing.type}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-xl bg-cyan-50 border border-cyan-100">
                    {getIcon(ing.iconName)}
                  </div>
                  <Badge variant="gold">{ing.badge}</Badge>
                </div>

                <h3 className="text-xl font-extrabold text-[#0b081c] mt-2 group-hover:text-[#00bcd4] transition-colors">
                  {ing.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {ing.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-[#00bcd4] flex items-center justify-between">
                <span>100% Active Ingredient</span>
                <span>Sustainably Sourced</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
