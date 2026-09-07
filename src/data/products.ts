import type { Product, Review, Ingredient, RoutineStep, HairTypeCategory, FAQItem } from "../types";

export interface FigmaProduct extends Product {
  cardBgColor: string;
}

export const FIGMA_PRODUCTS: FigmaProduct[] = [
  {
    id: "hydrating-shampoo",
    name: "Hydrating Shampoo",
    subtitle: "Cleanse & Moisture Balance",
    volume: "350ml",
    price: 24.99,
    oldPrice: 29.99,
    rating: 4.9,
    reviewsCount: 328,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
    badge: "Essential",
    description: "Gentle cleansing formula that removes build-up while locking in essential hydration.",
    benefits: ["0% Sulfates & Silicones", "48h Moisture Lock", "Scalp Refresh"],
    cardBgColor: "#EBBBFF"
  },
  {
    id: "hydrating-conditioner",
    name: "Hydrating Conditioner",
    subtitle: "Seal & Instant Detangle",
    volume: "350ml",
    price: 26.99,
    oldPrice: 31.99,
    rating: 4.8,
    reviewsCount: 245,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    badge: "Top Seller",
    description: "Deeply conditions and seals the hair cuticle to prevent moisture loss and control frizz.",
    benefits: ["Cuticle Seal", "Instant Slip", "Mirror Shine"],
    cardBgColor: "#AAB9FF"
  },
  {
    id: "defining-cream",
    name: "Defining Cream",
    subtitle: "Weightless Shape & Softness",
    volume: "300g",
    price: 28.99,
    oldPrice: 34.99,
    rating: 4.9,
    reviewsCount: 410,
    image: "https://images.unsplash.com/photo-1608248597260-657d64f3a6f2?auto=format&fit=crop&w=600&q=80",
    badge: "Community Favorite",
    description: "Rich styling cream that shapes waves, curls, and coils without any crunchy feel.",
    benefits: ["Touchably Soft", "48h Shape Memory", "Heat Shield"],
    cardBgColor: "#C7EEFF"
  },
  {
    id: "defining-gel",
    name: "Defining Gel",
    subtitle: "All-Day Hold & Frizz Protection",
    volume: "250ml",
    price: 27.99,
    oldPrice: 32.99,
    rating: 4.8,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    badge: "Frizz Guard",
    description: "Lightweight gel lock-in formula for high-definition curls with long-lasting hold.",
    benefits: ["Humidity Guard", "Zero Crunch", "Maximum Hold"],
    cardBgColor: "#FFCFAF"
  },
  {
    id: "hydrating-mask",
    name: "Hydrating Mask",
    subtitle: "Intensive Moisture Restoration",
    volume: "300g",
    price: 32.99,
    oldPrice: 38.99,
    rating: 5.0,
    reviewsCount: 512,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    badge: "Deep Repair",
    description: "Ultra-rich treatment mask penetrating deep into the cortex for ultimate curl repair.",
    benefits: ["Penetrates Cuticle", "Elasticity Boost", "Silky Softness"],
    cardBgColor: "#D9FEA6"
  }
];

export const PRODUCTS: Product[] = FIGMA_PRODUCTS;

export const INGREDIENTS: Ingredient[] = [
  {
    id: "coconut-oil",
    name: "Coconut Oil",
    type: "Natural Active",
    description: "Natural nourishment that penetrates the hair shaft to strengthen, protect, and add natural shine.",
    badge: "Hair Strength",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80",
    iconName: "Droplet"
  },
  {
    id: "avocado-extract",
    name: "Avocado Extract",
    type: "Nutrient Rich",
    description: "Rich in vitamins and fatty acids for ultimate curl definition, elasticity, and softness.",
    badge: "Curl Definition",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
    iconName: "Zap"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Sarah Mitchell",
    hairType: "Type 3B - Curly",
    rating: 5,
    comment: "My curls haven't looked this defined and hydrated in years. The 48h moisture lock is 100% real!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    date: "2 days ago",
    verified: true
  },
  {
    id: "r2",
    name: "Jessica Taylor",
    hairType: "Type 4A - Coily",
    rating: 5,
    comment: "The treatment mask is magic in a jar. My coily hair feels hydrated and bouncy instead of dry.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80",
    date: "1 week ago",
    verified: true
  },
  {
    id: "r3",
    name: "Emily Watson",
    hairType: "Type 2C - Wavy",
    rating: 5,
    comment: "Defined my loose waves with zero heavy residue. Highly recommend for anyone struggling with humidity!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    date: "2 weeks ago",
    verified: true
  }
];

export const ROUTINE_STEPS: RoutineStep[] = [
  {
    stepNumber: 1,
    title: "Cleanse",
    action: "Wash with Hydrating Shampoo",
    description: "Apply to wet hair, gently massage scalp into a rich creamy lather, and rinse thoroughly.",
    proTip: "Massage roots only; the lather will cleanse ends without drying out natural oils.",
    productId: "hydrating-shampoo",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
  },
  {
    stepNumber: 2,
    title: "Condition",
    action: "Seal with Hydrating Conditioner",
    description: "Smooth through mid-lengths to ends to lock in hydration and detangle instantly.",
    proTip: "Rinse with cool water to enhance mirror-like shine.",
    productId: "hydrating-conditioner",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80"
  },
  {
    stepNumber: 3,
    title: "Treat",
    action: "Apply Hydrating Mask (1-2x Weekly)",
    description: "Squeeze out excess water and work mask section by section. Leave on for 3 minutes.",
    proTip: "Finger detangle while mask is active for smooth distribution.",
    productId: "hydrating-mask",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
  },
  {
    stepNumber: 4,
    title: "Define & Hold",
    action: "Style with Defining Cream + Gel",
    description: "Scrunch Defining Cream into damp curls followed by Defining Gel for all-day hold.",
    proTip: "Diffuse on warm setting or air dry for soft, touchable volume.",
    productId: "defining-cream",
    image: "https://images.unsplash.com/photo-1608248597260-657d64f3a6f2?auto=format&fit=crop&w=600&q=80"
  }
];

export const HAIR_TYPES: HairTypeCategory[] = [
  {
    id: "wavy",
    typeCode: "Type 2A - 2C",
    title: "Wavy Hair",
    subtitle: "Lightweight Wave Definition",
    description: "S-shaped wave pattern needing weightless moisture to keep roots bouncy and full of movement.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    recommendedProducts: ["hydrating-shampoo", "hydrating-conditioner", "defining-cream"],
    tips: [
      "Avoid heavy butter creams at the root",
      "Scrunch with a microfiber towel",
      "Use light praying-hands technique"
    ]
  },
  {
    id: "curly",
    typeCode: "Type 3A - 3C",
    title: "Curly Hair",
    subtitle: "Pure Definition & Moisture Lock",
    description: "Defined spiral ringlets prone to dryness toward ends. Requires deep hydration and sealing.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    recommendedProducts: ["hydrating-shampoo", "hydrating-mask", "defining-cream", "defining-gel"],
    tips: [
      "Weekly mask treatments for end protection",
      "Rake and pulse cream through damp curls",
      "Sleep with a silk pillowcase"
    ]
  },
  {
    id: "coily",
    typeCode: "Type 4A - 4C",
    title: "Coily Hair",
    subtitle: "Ultra Hydration & Sealing Care",
    description: "Tight Z-shaped or zig-zag coil patterns requiring rich moisture retention and intense nourishment.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
    recommendedProducts: ["hydrating-shampoo", "hydrating-mask", "hydrating-conditioner", "defining-cream", "defining-gel"],
    tips: [
      "Use LOC (Liquid, Oil, Cream) method",
      "Apply defining cream on soaking wet hair",
      "Deep condition 2x weekly"
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is the Hydra Curls formula free of sulfates, silicones, and parabens?",
    answer: "Yes! All Hydra Curls products are 100% free from harsh SLS, silicones, and parabens, making them clean and safe for daily curl maintenance.",
    category: "Formula"
  },
  {
    id: "faq-2",
    question: "Will these products weigh down fine waves?",
    answer: "No. Our Hyaluronic Acid formulation penetrates deep into the cuticle without leaving heavy residue.",
    category: "Results"
  },
  {
    id: "faq-3",
    question: "How does the 48-hour hydration work?",
    answer: "Our advanced formula locks in moisture for 48 continuous hours of frizz control and curl bounce.",
    category: "Efficacy"
  }
];
