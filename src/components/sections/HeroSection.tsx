import React from "react";
import { Container } from "../layout/Container";
import heroWhiteLogo from "../../assets/images/hero-white-logo.svg";
import heroVideo from "../../assets/videos/hero.mp4";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[900px] max-h-[1100px] flex items-center justify-center pt-[100px]"
    >
      {/* Background Video playing on loop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Purple backdrop overlay */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Radial White Light Glowing Circle behind logo & title */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] rounded-full blur-[80px] pointer-events-none z-[5]"
      />

      {/* Hero Center Overlay Content */}
      <Container className="relative z-10 text-center flex flex-col items-center justify-center space-y-8 max-w-[1200px]">
        {/* Top White Logo Overlay from Figma */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={heroWhiteLogo}
            alt="Parachute Advanced Hydra Curls White Logo"
            className="h-[100px] sm:h-[110px] w-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Title matching exact Figma CSS gradient & Kaushan Script typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <h1
            style={{
              fontFamily: "'Kaushan Script', cursive",
              fontWeight: 400,
              fontSize: "80px",
              lineHeight: "116px",
              textAlign: "center",
              background:
                "linear-gradient(90deg, #1D3565 11.52%, #834E99 31.49%, #834E99 73.53%, #1D3565 99.65%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="max-w-[1098px] text-center drop-shadow-sm select-none"
          >
            Pure ingredients. Real results. <br />
            Every drop matters.
          </h1>
        </motion.div>

        {/* Decorative Wavy Line & Down Arrow Chevron Icon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center space-y-3 pt-4"
        >
          {/* Wavy line graphic */}
          <svg
            className="w-48 h-4 text-white/70"
            viewBox="0 0 200 20"
            fill="none"
          >
            <path
              d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Double Down Arrow Chevron */}
          <div className="flex flex-col items-center -space-y-2 text-white/80 animate-bounce">
            <ChevronDown className="w-5 h-5" />
            <ChevronDown className="w-5 h-5" />
          </div>
        </motion.div>
      </Container>

      {/*
        Rectangle 190 — Figma exact cyan ribbon path extracted from node 1:957.
        ViewBox 0 0 1920 169.
        Seamlessly joins Hero (dark purple video) with Section 2 (bg #F3FDFF).
      */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1920 169"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          style={{ marginBottom: "-1px" }}
          preserveAspectRatio="none"
        >
          {/* Section 2 light background fill below the cyan wave ribbon */}
          <path
            d="
              M 0,101.188
              C 0,101.188 304.206,166.378 502,168.688
              C 805.833,172.235 964.239,88.0005 1268,95.5
              C 1410.12,99.0088 1510.33,117.688 1663,117.688
              C 1776,117.688 1920,114.688 1920,114.688
              L 1920,169
              L 0,169
              Z
            "
            fill="#F3FDFF"
          />

          {/* Exact Figma Cyan Wave Ribbon (Rectangle 190) */}
          <path
            d="M0 0C0 0 303.465 69.6789 502 75.1339C805.808 83.4814 964.431 -12.1539 1268 2.5C1410.69 9.38802 1494.97 31.9794 1637.5 41.6876C1750.69 49.3971 1920 24.1876 1920 24.1876L1920 114.688C1920 114.688 1776 117.688 1663 117.688C1510.33 117.688 1410.12 99.0088 1268 95.5C964.239 88.0005 805.833 172.235 502 168.688C304.206 166.378 0 101.188 0 101.188L0 0Z"
            fill="#00D5FD"
          />
        </svg>
      </div>
    </section>
  );
};
