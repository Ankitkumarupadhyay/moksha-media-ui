import React, { useState } from "react";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { Menu, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import headerLogo from "../../assets/icons/logo.svg";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Products", href: "#products" },
    { label: "Hair Care Blog", href: "#blog" },
    { label: "Curly Girl Method", href: "#method" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-[100px] bg-[#040C1E] border-b border-white/35 transition-all font-gotham">
        <Container className="h-full flex items-center justify-between px-6 lg:px-28 max-w-[1920px]">
          
          {/* Logo matching exported Figma logo.svg */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src={headerLogo}
              alt="Garnier Fructis Hydra Curls Logo"
              className="h-[75px] w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Navigation Links matching exact Figma CSS & Gotham typography */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = activeTab === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveTab(link.label)}
                  style={{
                    fontFamily: "'Gotham', 'Montserrat', 'Inter', sans-serif",
                    fontWeight: 350,
                    fontSize: "20px",
                    lineHeight: "24px",
                  }}
                  className={`transition-colors ${
                    isActive
                      ? "text-white font-normal"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Cart Icon & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-6 h-6 text-[#00D5FD]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#00D5FD] text-[#040C1E] text-xs font-black flex items-center justify-center shadow-md">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 text-white md:hidden"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>

        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
