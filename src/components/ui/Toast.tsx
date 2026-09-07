import React from "react";
import { useCart } from "../../context/CartContext";
import { CheckCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Toast: React.FC = () => {
  const { toastMessage, showToast } = useCart();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 max-w-md bg-[#160733] border border-[#00d2ff]/40 text-white px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-md flex items-start gap-3"
        >
          <CheckCircle className="w-5 h-5 text-[#00d2ff] shrink-0 mt-0.5" />
          <div className="flex-1 text-sm font-medium pr-2">
            {toastMessage}
          </div>
          <button
            onClick={() => showToast("")}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
