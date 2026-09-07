export interface Product {
  id: string;
  name: string;
  subtitle: string;
  volume: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
  description: string;
  benefits: string[];
}

export interface Review {
  id: string;
  name: string;
  hairType: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
  verified: boolean;
}

export interface Ingredient {
  id: string;
  name: string;
  type: string;
  description: string;
  badge: string;
  image: string;
  iconName: string;
}

export interface RoutineStep {
  stepNumber: number;
  title: string;
  action: string;
  description: string;
  proTip: string;
  productId: string;
  image: string;
}

export interface HairTypeCategory {
  id: string;
  typeCode: string; // e.g. "2A-2C"
  title: string;
  subtitle: string;
  description: string;
  image: string;
  recommendedProducts: string[];
  tips: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
