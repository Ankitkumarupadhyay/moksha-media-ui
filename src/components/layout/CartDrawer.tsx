import React from "react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../lib/utils";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/Button";

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    totalItems,
    checkout,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#0e0926] border-l border-purple-500/20 text-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-purple-500/20 flex items-center justify-between bg-[#160733]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#00d2ff]" />
                <h2 className="text-lg font-bold">Meu Carrinho</h2>
                <span className="bg-[#00d2ff]/20 text-[#00d2ff] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {totalItems} {totalItems === 1 ? "item" : "itens"}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16 text-slate-400 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-purple-900/30 border border-purple-500/20 flex items-center justify-center mx-auto text-slate-500">
                    <ShoppingBag className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">Seu carrinho está vazio</p>
                    <p className="text-xs mt-1">Explore os produtos Hydra Curls e adicione seus favoritos!</p>
                  </div>
                </div>
              ) : (
                items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="p-3.5 bg-purple-950/40 border border-purple-500/20 rounded-2xl flex gap-3.5 items-center hover:border-purple-500/40 transition-colors"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-xl shrink-0 bg-purple-900/50"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">{product.volume}</p>
                      <p className="text-xs font-semibold text-[#00d2ff] mt-1">
                        {formatPrice(product.price)}
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/10">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="p-1 hover:text-[#00d2ff] transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="p-1 hover:text-[#00d2ff] transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {items.length > 0 && (
              <div className="p-5 border-t border-purple-500/20 bg-[#12082b] space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Frete</span>
                    <span className="text-[#00d2ff] font-medium">GRÁTIS (Linha Hydra)</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                    <span>Total</span>
                    <span className="text-[#00d2ff]">{formatPrice(subtotal)}</span>
                  </div>
                </div>

                <Button
                  variant="cyan"
                  fullWidth
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  onClick={checkout}
                >
                  Finalizar Pedido
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
