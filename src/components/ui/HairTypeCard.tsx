import React from "react";
import type { HairTypeCategory } from "../../types";
import { Check, Sparkles } from "lucide-react";
import { Button } from "./Button";

interface HairTypeCardProps {
  category: HairTypeCategory;
  isSelected: boolean;
  onSelect: () => void;
}

export const HairTypeCard: React.FC<HairTypeCardProps> = ({
  category,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border flex flex-col justify-between ${
        isSelected
          ? "bg-[#250d4d] border-[#00d2ff] shadow-glow-cyan transform -translate-y-2"
          : "bg-[#170933] border-purple-500/20 hover:border-purple-400/40 hover:-translate-y-1"
      }`}
    >
      <div>
        {/* Header Badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
              isSelected
                ? "bg-[#00d2ff] text-[#0b081c]"
                : "bg-purple-900/50 text-purple-200 border border-purple-400/20"
            }`}
          >
            {category.typeCode}
          </span>
          {isSelected && <Sparkles className="w-5 h-5 text-[#00d2ff]" />}
        </div>

        {/* Image */}
        <div className="w-full h-44 rounded-2xl overflow-hidden mb-5">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-extrabold text-white">{category.title}</h3>
        <p className="text-xs font-semibold text-[#00d2ff] mt-0.5">
          {category.subtitle}
        </p>

        <p className="text-xs text-slate-300 mt-3 leading-relaxed">
          {category.description}
        </p>

        {/* Tips list */}
        <div className="mt-4 pt-4 border-t border-purple-500/20 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
            Dicas Recomendadas:
          </span>
          {category.tips.map((tip, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <Check className="w-3.5 h-3.5 text-[#00d2ff] shrink-0" />
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-2">
        <Button
          variant={isSelected ? "cyan" : "outline"}
          fullWidth
          size="sm"
        >
          {isSelected ? "Rotina Selecionada" : "Selecionar Tipo de Cabelo"}
        </Button>
      </div>
    </div>
  );
};
