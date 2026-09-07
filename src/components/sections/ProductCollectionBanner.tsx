import React from "react";
import bannerImg from "../../assets/images/section3-full-banner.png";

export const ProductCollectionBanner: React.FC = () => {
  return (
    <section id="products" className="relative w-full overflow-hidden">
      {/* Section 3 — Full Figma banner as base image */}
      <div className="relative w-full">
        <img
          src={bannerImg}
          alt="Hydra Curls Product Collection"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
};

