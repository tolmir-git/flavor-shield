// Real menu data from Happy London restaurant
export interface MenuItem {
  id: number;
  name: string;
  category: string;
  description?: string;
  price?: string;
  allergens: string[];
  traces?: string[];
}

export const MENU_DATA: MenuItem[] = [
  // Salads
  {
    id: 1,
    name: "Caesar Palace",
    category: "Salads",
    description: "Classic Caesar salad with premium ingredients",
    price: "£12.50",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "lupin", "milk", "mollusc", "nuts"],
    traces: ["gluten", "milk"]
  },
  {
    id: 2,
    name: "Vegetarian Protein Salad",
    category: "Salads",
    description: "High-protein vegetarian salad with mixed greens",
    price: "£11.00",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs"],
    traces: ["gluten"]
  },
  {
    id: 3,
    name: "Caesar Bowl with Crispy Chicken",
    category: "Salads",
    description: "Caesar salad topped with crispy chicken pieces",
    price: "£14.50",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "fish", "milk", "mollusc", "nuts"],
    traces: ["gluten", "milk"]
  },
  {
    id: 4,
    name: "Greek Salad",
    category: "Salads",
    description: "Traditional Greek salad with feta cheese",
    price: "£10.50",
    allergens: ["mustard", "milk"],
    traces: []
  },
  {
    id: 5,
    name: "Vegetarian Shopska Salad",
    category: "Salads",
    description: "Bulgarian-style salad with fresh vegetables",
    price: "£9.50",
    allergens: ["mustard"],
    traces: []
  },
  {
    id: 6,
    name: "Cobb Salad",
    category: "Salads",
    description: "American-style salad with bacon and blue cheese",
    price: "£13.00",
    allergens: ["celery", "crustaceans", "fish", "peanuts"],
    traces: ["milk"]
  },
  {
    id: 7,
    name: "Avocado Caprese",
    category: "Salads",
    description: "Fresh mozzarella, tomatoes, and avocado",
    price: "£11.50",
    allergens: ["crustaceans", "milk", "soya"],
    traces: []
  },
  {
    id: 8,
    name: "Vegetarian Lady Cobb",
    category: "Salads",
    description: "Vegetarian version of the classic Cobb salad",
    price: "£12.00",
    allergens: ["mustard", "celery"],
    traces: []
  },
  {
    id: 9,
    name: "Grilled Chicken Caesar",
    category: "Salads",
    description: "Caesar salad with perfectly grilled chicken breast",
    price: "£13.50",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs"],
    traces: ["gluten", "milk"]
  },
  {
    id: 10,
    name: "Caesar with Crispy Chicken",
    category: "Salads",
    description: "Classic Caesar with golden crispy chicken",
    price: "£14.00",
    allergens: ["mustard", "celery", "gluten", "crustaceans", "eggs", "nuts"],
    traces: ["gluten", "milk"]
  },
  
  // Starters
  {
    id: 11,
    name: "Pulled Chicken Rolls",
    category: "Starters",
    description: "Tender pulled chicken in soft rolls",
    price: "£8.50",
    allergens: ["sesame"],
    traces: ["gluten"]
  },
  {
    id: 12,
    name: "Cheeseburger Sliders",
    category: "Starters",
    description: "Mini cheeseburger sliders",
    price: "£9.00",
    allergens: ["sesame"],
    traces: ["gluten", "milk"]
  }
];

export const ALLERGEN_LIST = [
  { key: "celery", icon: "🥬" },
  { key: "gluten", icon: "🌾" },
  { key: "crustaceans", icon: "🦐" },
  { key: "eggs", icon: "🥚" },
  { key: "fish", icon: "🐟" },
  { key: "lupin", icon: "🌱" },
  { key: "milk", icon: "🥛" },
  { key: "mollusc", icon: "🦪" },
  { key: "mustard", icon: "🌿" },
  { key: "nuts", icon: "🌰" },
  { key: "peanuts", icon: "🥜" },
  { key: "sesame", icon: "🌾" },
  { key: "soya", icon: "🌿" },
  { key: "sulphur", icon: "⚡" }
];

export const CATEGORIES = ["All", "Salads", "Starters", "Mains", "Desserts", "Drinks"];