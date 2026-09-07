import React from "react";
import { Header } from "../components/layout/Header";
import { CartDrawer } from "../components/layout/CartDrawer";
import { Toast } from "../components/ui/Toast";

import { HeroSection } from "../components/sections/HeroSection";
import { TechnologyHighlight } from "../components/sections/TechnologyHighlight";
import { ProductCollectionBanner } from "../components/sections/ProductCollectionBanner";
import { HyaluronicMoistureCards } from "../components/sections/HyaluronicMoistureCards";
import { EditorialBentoGrid } from "../components/sections/EditorialBentoGrid";
import { CustomerReviewsSection } from "../components/sections/CustomerReviewsSection";
import { HairTypeGuideSection } from "../components/sections/HairTypeGuideSection";
import { ArabHairTypesSection } from "../components/sections/ArabHairTypesSection";
import { BlogArticlesSection } from "../components/sections/BlogArticlesSection";
import { ClinicalStatsSection } from "../components/sections/ClinicalStatsSection";
import { Footer } from "../components/layout/Footer";

export const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0b081c] text-white selection:bg-[#00D5FD] selection:text-[#0b081c]">
      <Header />
      <CartDrawer />
      <Toast />

      <main>
        {/* Section 1: Hero — Video BG + Cyan wave ribbon */}
        <HeroSection />

        {/* Section 2: Technology Highlight — New Launch, logo, water splash, bottle */}
        <TechnologyHighlight />

        {/* Section 3: Product Collection Banner + Dome Product Carousel */}
        <ProductCollectionBanner />

        {/* Section 4: Hyaluronic Acid & 5-Step Routine 2-Card Layout (Figma Rectangle 185 & Frame 71) */}
        <HyaluronicMoistureCards />

        {/* <EditorialBentoGrid />

        <CustomerReviewsSection />

        <HairTypeGuideSection />

        <ArabHairTypesSection />

        <BlogArticlesSection />

        <ClinicalStatsSection /> */}
      </main>

      <Footer />
    </div>
  );
};
