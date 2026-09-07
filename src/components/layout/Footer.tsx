import React from "react";
import { Container } from "./Container";
import { ArrowRight, Mail } from "lucide-react";
import logoImg from "../../assets/images/hydra-curls-logo-footer.png";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030914] text-white/70 text-xs border-t border-white/10 pt-16 pb-12">
      <Container className="space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Parachute Advanced Hydra Curls"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-white/60 text-xs leading-relaxed max-w-sm font-light">
              Advanced hair care specially designed for Arab curly, coily & wavy hair types 2, 3, and 4. Experience 48-hour hydration with natural ingredients like Hyaluronic Acid, Coconut & Avocado.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#00D5FD] hover:border-[#00D5FD]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#00D5FD] hover:border-[#00D5FD]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#00D5FD] hover:border-[#00D5FD]/50 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Hair Care Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hair Care
            </h4>
            <ul className="space-y-2.5 font-light">
              <li><a href="#cgm" className="hover:text-[#00D5FD] transition-colors">Curly Girl Method</a></li>
              <li><a href="#guide" className="hover:text-[#00D5FD] transition-colors">Hair Type Guide</a></li>
              <li><a href="#styling" className="hover:text-[#00D5FD] transition-colors">Styling Tips</a></li>
              <li><a href="#ingredients" className="hover:text-[#00D5FD] transition-colors">Ingredient Benefits</a></li>
            </ul>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Connect
            </h4>
            <ul className="space-y-2.5 font-light">
              <li><a href="#about" className="hover:text-[#00D5FD] transition-colors">About Hydra Curls</a></li>
              <li><a href="#community" className="hover:text-[#00D5FD] transition-colors">Community Reviews</a></li>
              <li><a href="#faq" className="hover:text-[#00D5FD] transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-[#00D5FD] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="text-white/60 font-light">
              Get expert tips and exclusive offers delivered directly to your inbox.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
              <div className="absolute left-3.5 text-white/40">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-3 pl-10 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-xs focus:outline-none focus:border-[#00D5FD] transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 w-8 h-8 rounded-lg bg-[#00D5FD] flex items-center justify-center text-[#030914] hover:bg-[#00c0e8] transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© 2026 Parachute Advanced Hydra Curls. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#terms" className="hover:text-white/70">Terms of Use</a>
            <a href="#privacy" className="hover:text-white/70">Privacy Policy</a>
            <a href="#cookies" className="hover:text-white/70">Cookie Preferences</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
