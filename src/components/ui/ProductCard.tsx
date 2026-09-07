import React from "react";
import type { Product } from "../../types";
import { formatPrice } from "../../lib/utils";
import { Star, ShoppingBag, Check } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Button } from "./Button";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, items } = useCart();
  const isInCart = items.some((item) => item.product.id === product.id);

  return (
    <div className="group relative bg-[#1c0a3a] border border-purple-500/20 hover:border-[#00d2ff]/50 rounded-3xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-glow-purple hover:-translate-y-1.5">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 bg-[#00d2ff] text-[#0b081c] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
          {product.badge}
        </div>
      )}

      {/* Image Container */}
      <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-purple-950/60 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Product Content */}
      <div className="mt-4 space-y-2 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-400 text-[11px]">({product.reviewsCount})</span>
          </div>

          {/* Title & Volume */}
          <h3 className="text-base font-bold text-white mt-1 group-hover:text-[#00d2ff] transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-purple-300 font-medium">{product.subtitle}</p>

          <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Benefits Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {product.benefits.slice(0, 2).map((b, i) => (
              <span key={i} className="text-[10px] bg-white/5 border border-white/10 text-slate-300 px-2 py-0.5 rounded-md">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="pt-4 mt-2 border-t border-purple-500/20 flex items-center justify-between gap-3">
          <div>
            {product.oldPrice && (
              <span className="text-xs line-through text-slate-400 block -mb-1">
                {formatPrice(product.oldPrice)}
              </span>
            )}
            <span className="text-lg font-extrabold text-[#00d2ff]">
              {formatPrice(product.price)}
            </span>
          </div>

          <Button
            variant={isInCart ? "outline" : "cyan"}
            size="sm"
            icon={isInCart ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
            onClick={() => addToCart(product)}
          >
            {isInCart ? "No Carrinho" : "Adicionar"}
          </Button>
        </div>
      </div>
    </div>
  );
};
