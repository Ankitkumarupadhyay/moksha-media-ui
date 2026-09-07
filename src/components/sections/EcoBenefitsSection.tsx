import React from "react";
import section5Img from "../../assets/images/section5-reviews.png";
import section6Img from "../../assets/images/section6-influencer.png";

export const EcoBenefitsSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Section 5 — Reviews / Community */}
      <img
        src={section5Img}
        alt="Hydra Curls Community Reviews"
        className="w-full h-auto block"
      />
      {/* Section 6 — Influencer / Expert testimonials */}
      <img
        src={section6Img}
        alt="Hydra Curls Expert Approval"
        className="w-full h-auto block"
      />
    </section>
  );
};
