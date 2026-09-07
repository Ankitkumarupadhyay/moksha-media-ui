import React, { useState } from "react";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { Sparkles, CheckCircle2, Sliders } from "lucide-react";
import { motion } from "framer-motion";

export const BeforeAfterSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="resultados" className="py-24 bg-[#0a071a] text-white relative">
      <Container className="space-y-16">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="cyan" icon={<Sparkles className="w-3.5 h-3.5" />}>
            Transformação Visível
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Antes &{" "}
            <span className="font-display italic text-gradient-cyan font-normal">
              Depois da Rotina
            </span>
          </h2>

          <p className="text-slate-300 text-base">
            Arraste o divisor para comparar o resultado nos fios sem tratamento vs após 48 horas de uso da linha Hydra Curls.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Before/After Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-500/30 select-none">
              {/* After Image (Full background) */}
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Depois do Hydra Curls - Cachos hidratados"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#00d2ff] text-[#0b081c] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                Depois: Hydra Curls 48h
              </div>

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute top-0 left-0 bottom-0 overflow-hidden border-r-2 border-white"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80"
                  alt="Antes do tratamento - Sem definição"
                  className="absolute top-0 left-0 w-full h-full object-cover max-w-none filter grayscale contrast-125"
                  style={{ width: "100%", height: "100%" }}
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                  Antes: Fios Opacos & Frizz
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="w-10 h-10 rounded-full bg-white text-[#0b081c] shadow-2xl border-2 border-[#00d2ff] flex items-center justify-center -ml-5 hover:scale-110 transition-transform">
                  <Sliders className="w-5 h-5 text-[#00bcd4]" />
                </div>
              </div>

              {/* Range Input Control */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />
            </div>

            <p className="text-center text-xs text-slate-400 mt-3">
              💡 Dica: Arraste a barra para o lado para ver o efeito anti-frizz em detalhe.
            </p>
          </motion.div>

          {/* Right Column: Science Breakdown Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 bg-purple-card border border-purple-500/20 rounded-3xl space-y-4 shadow-xl">
              <h3 className="text-xl font-extrabold text-white">
                Como Funciona na Fibra Capilar
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Diferente dos óleos minerais que apenas encapam o fio, o Óleo de Abacate micro-emulsionado penetra através do córtex fortalecendo as ligações internas.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00d2ff] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Retenção Hídrica 48h</h4>
                    <p className="text-[11px] text-slate-400">Impede a perda de umidade para o ar seco</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00d2ff] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Memorizador de Cachos</h4>
                    <p className="text-[11px] text-slate-400">Mantém a curvatura definida mesmo após dormir</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-900/60 to-indigo-900/60 border border-purple-400/20 rounded-3xl text-center space-y-2">
              <span className="text-xs font-extrabold uppercase text-[#00d2ff]">
                Aprovação dos Consumidores
              </span>
              <p className="text-2xl font-black text-white">
                98% de satisfação garantida
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};
