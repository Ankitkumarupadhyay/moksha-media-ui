import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "cyan",
  size = "md",
  children,
  icon,
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-brand-cyan/50";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5 shadow-lg",
  };

  const variantStyles = {
    cyan: "bg-[#00d2ff] hover:bg-[#00e0ff] text-[#0b081c] font-semibold shadow-glow-cyan hover:shadow-cyan-400/50 hover:-translate-y-0.5",
    primary: "bg-[#270e4e] hover:bg-[#36166a] text-white border border-purple-400/20 shadow-md hover:shadow-purple-500/20",
    secondary: "bg-white hover:bg-slate-100 text-[#0b081c] font-semibold shadow-md",
    outline: "border-2 border-[#00d2ff] text-[#00d2ff] hover:bg-[#00d2ff]/10 font-semibold",
    ghost: "bg-transparent hover:bg-white/10 text-white",
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
