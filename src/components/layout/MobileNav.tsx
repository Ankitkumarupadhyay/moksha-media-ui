import React from "react";
import { X, ChevronRight, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/Button";
import { useCart } from "../../context/CartContext";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[82%] max-w-sm bg-[#040C1E] border-r border-white/20 text-white z-50 flex flex-col justify-between p-6 md:hidden shadow-2xl"
          >
            {/* Header top */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-display italic text-[#00d2ff] font-extrabold">
                    Hydra Curls
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Links */}
              <nav className="space-y-2 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center justify-between p-3.5 rounded-xl hover:bg-white/10 text-slate-200 hover:text-[#00d2ff] font-medium text-base transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="space-y-4 pt-6 border-t border-white/20">
              <Button
                variant="cyan"
                fullWidth
                icon={<ShoppingBag className="w-4 h-4" />}
                onClick={() => {
                  onClose();
                  setIsCartOpen(true);
                }}
              >
                My Cart ({totalItems})
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
