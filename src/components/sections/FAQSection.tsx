import React, { useState } from "react";
import { Container } from "../layout/Container";
import { FAQS } from "../../data/products";
import { Badge } from "../ui/Badge";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#0d0721] text-white relative">
      <Container className="max-w-4xl space-y-12">
        {/* Title Header */}
        <div className="text-center space-y-4">
          <Badge variant="cyan" icon={<HelpCircle className="w-3.5 h-3.5" />}>
            Tire Suas Dúvidas
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Perguntas{" "}
            <span className="font-display italic text-gradient-cyan font-normal">
              Frequentes (FAQ)
            </span>
          </h2>

          <p className="text-slate-300 text-base">
            Tudo o que você precisa saber sobre a linha Garnier Fructis Hydra Curls.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#1f0b3e] border-[#00d2ff]/50 shadow-glow-purple"
                    : "bg-[#14082c] border-purple-500/20 hover:border-purple-400/40"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white focus:outline-none"
                >
                  <span className="flex-1">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#00d2ff] text-[#0b081c] rotate-180"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-purple-500/20 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
