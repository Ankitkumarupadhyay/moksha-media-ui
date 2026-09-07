# Garnier Fructis Hydra Curls – Responsive React Application

A high-precision, responsive, production-quality React application built to replicate the **Garnier Fructis Hydra Curls** landing page design from Figma.

---

## Overview

This project converts the provided Figma design (node-id `1-503`) into a fully responsive, modern web interface with seamless micro-animations, slide-over shopping cart, hair type guide, interactive routine steps, before-and-after comparison slider, customer reviews carousel, and complete product showcase.

---

## Tech Stack

- **React 18** – Modern functional components & hooks architecture
- **TypeScript** – Strict typing across all components, interfaces, and product data
- **Vite** – Next-generation lightning-fast frontend tooling
- **Tailwind CSS v4** – Utility-first CSS framework with custom design tokens & gradients
- **Lucide React** – Clean, modern icon set
- **Framer Motion** – Fluid micro-animations and smooth layout transitions
- **Canvas Confetti** – Delightful celebratory feedback upon checkout

---

## Project Structure

```text
src/
├── assets/             # Branding and background graphics
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Sticky top header with nav links, search & cart badge
│   │   ├── MobileNav.tsx        # Responsive mobile drawer navigation menu
│   │   ├── CartDrawer.tsx       # Slide-over shopping cart with price calculations
│   │   ├── Footer.tsx           # Dark multi-column footer with social links
│   │   └── Container.tsx        # Responsive max-width wrapper
│   ├── ui/
│   │   ├── Button.tsx           # Custom branded buttons with glow & hover states
│   │   ├── Badge.tsx            # Pill tag badges (NOVO, 48H, Vegan, etc.)
│   │   ├── ProductCard.tsx      # Product item card with Add to Cart action
│   │   ├── ReviewCard.tsx       # 5-star customer testimonial card
│   │   ├── HairTypeCard.tsx     # Hair type guide selector (2A to 4C)
│   │   └── Toast.tsx            # Floating notification toast alerts
│   └── sections/
│       ├── HeroSection.tsx              # Deep purple gradient hero with wave bottom
│       ├── TechnologyHighlight.tsx      # Filoxano + Avocado technology feature
│       ├── ProductCollectionBanner.tsx  # Product range grid
│       ├── NutritionFeature.tsx         # Soft teal split feature section
│       ├── EcoBenefitsSection.tsx       # Arched purple section with eco badges
│       ├── ClinicalStatsSection.tsx     # 48h hydration proof & clinical metrics
│       ├── IngredientsGrid.tsx          # Key active ingredient cards
│       ├── BeforeAfterSection.tsx       # Interactive before/after hair transformation slider
│       ├── CustomerReviewsSection.tsx   # Social proof testimonial grid
│       ├── HairTypeGuideSection.tsx     # Interactive Wavy/Curly/Coily routine selector
│       ├── HowToUseRoutineSection.tsx   # 4-step hair routine tabs
│       ├── EditorialBentoGrid.tsx       # 6-box brand story bento grid
│       ├── FAQSection.tsx               # Expandable Q&A accordion
│       └── NewsletterSection.tsx        # 15% OFF discount email subscription form
├── context/
│   └── CartContext.tsx         # Global shopping cart state & notification provider
├── data/
│   └── products.ts             # Typed data for products, ingredients, FAQs & reviews
├── types/
│   └── index.ts                # TypeScript interface definitions
├── App.tsx                     # Main application wrapper
├── main.tsx                    # React root entry point
└── index.css                   # Tailwind directives & design tokens
```

---

## Setup Instructions

```bash
# Clone repository
git clone <repository-url>
cd design

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be accessible at `http://localhost:5173/`.

---

## Build for Production

```bash
# Type-check and build production bundle
npm run build
```

Production assets will be output to the `dist/` directory.

---

## AI Tools Used

- **Google Antigravity AI** – Used for accelerating component scaffolding, extracting design system tokens from Figma thumbnails, structuring TypeScript architecture, ensuring responsive layout accuracy, debugging PostCSS configuration, and verifying zero build errors.
- All generated code was thoroughly reviewed, tested, and polished manually to ensure production-grade standards.

---

## Development Time

Total Development Time: [3 hours]

---
