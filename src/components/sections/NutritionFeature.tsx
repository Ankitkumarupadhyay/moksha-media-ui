import React from "react";
import section4Img from "../../assets/images/section4-ingredients.png";

export const NutritionFeature: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Render the exact Figma section 4 frame as image */}
      <img
        src={section4Img}
        alt="Hydra Curls Ingredient Features"
        className="w-full h-auto block"
      />
    </section>
  );
};
