import React, { useState } from "react";
import { Container } from "../layout/Container";
import { ROUTINE_STEPS } from "../../data/products";
import { Badge } from "../ui/Badge";
import { Sparkles, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const HowToUseRoutineSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = ROUTINE_STEPS[activeStepIndex];

  return (
    <section id="rotina" className="py-24 bg-[#14092f] text-white relative">
      <Container className="space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Passo a Passo
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Como Usar a{" "}
            <span className="font-display italic text-gradient-cyan font-normal">
              Linha Hydra Curls
            </span>
          </h2>

          <p className="text-slate-300 text-base">
            Siga os 4 passos da rotina capilar para garantir máxima retenção de umidade e definição duradoura.
          </p>
        </div>

        {/* 4 Interactive Step Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {ROUTINE_STEPS.map((step, idx) => (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                activeStepIndex === idx
                  ? "bg-[#00d2ff] text-[#0b081c] border-[#00d2ff] font-extrabold shadow-glow-cyan transform -translate-y-1"
                  : "bg-purple-950/40 text-slate-300 border-purple-500/20 hover:border-purple-400/40"
              }`}
            >
              <span className="text-[10px] uppercase tracking-widest font-black block opacity-80">
                Passo 0{step.stepNumber}
              </span>
              <span className="text-xs sm:text-sm font-bold block mt-1 line-clamp-1">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Step Display Panel */}
        <div className="bg-purple-card border border-purple-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.stepNumber}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Step Image */}
              <div className="lg:col-span-6 relative">
                <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-white/10">
                  <img
                    src={activeStep.image}
                    alt={activeStep.action}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#00d2ff] text-[#0b081c] text-xs font-black w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                    {activeStep.stepNumber}
                  </div>
                </div>
              </div>

              {/* Step Details */}
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#00d2ff]">
                  Passo 0{activeStep.stepNumber} • {activeStep.title}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeStep.action}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeStep.description}
                </p>

                {/* Pro Tip Box */}
                <div className="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-300 font-bold block mb-0.5">Dica de Profissional:</strong>
                    <span>{activeStep.proTip}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};
