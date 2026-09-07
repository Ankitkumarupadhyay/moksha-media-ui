import React, { useState } from "react";
import { Container } from "../layout/Container";
import { Send, CheckCircle2, Sparkles } from "lucide-react";
import { useCart } from "../../context/CartContext";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    showToast("🎉 Welcome to the Curly Hair Revolution!");
  };

  return (
    <section className="py-20 bg-[#070414] text-white relative">
      <Container>
        <div className="relative rounded-3xl bg-gradient-to-r from-[#170933] via-[#2c0e5a] to-[#170933] border border-purple-500/30 p-8 sm:p-14 overflow-hidden shadow-2xl">
          {/* Glowing background circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00D5FD]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#00D5FD]/15 text-[#00D5FD] border border-[#00D5FD]/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>EXCLUSIVES & OFFERS</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Join the <span className="text-gradient-cyan">Curly Hair Revolution</span>
              </h2>

              <p className="text-sm text-slate-300 max-w-xl mx-auto lg:mx-0">
                Subscribe for exclusive offers, curl care tips, and early access to new releases.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-6 rounded-2xl bg-[#00D5FD]/10 border border-[#00D5FD]/40 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-[#00D5FD] mx-auto" />
                  <h4 className="text-base font-bold text-white">You're In!</h4>
                  <p className="text-xs text-slate-300">
                    Use promo code <strong className="text-[#00D5FD]">HYDRA15</strong> at checkout for 15% OFF your first order.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-black/50 border border-white/20 rounded-xl px-5 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00D5FD]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-btn-cyan text-[#0b081c] font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-cyan-400/40 transition-all flex items-center justify-center gap-2"
                  >
                    <span>JOIN THE MOVEMENT</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
