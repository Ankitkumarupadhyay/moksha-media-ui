import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "purple" | "outline" | "gold";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cyan",
  className,
  icon,
}) => {
  const variantStyles = {
    cyan: "bg-[#00d2ff]/15 text-[#00d2ff] border border-[#00d2ff]/30",
    purple: "bg-[#36166a]/60 text-purple-200 border border-purple-400/30",
    outline: "bg-transparent text-slate-300 border border-slate-600",
    gold: "bg-amber-400/15 text-amber-300 border border-amber-400/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
