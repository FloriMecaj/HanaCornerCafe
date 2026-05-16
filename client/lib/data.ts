import type { LucideIcon } from "lucide-react";
import {
  Bean,
  CakeSlice,
  Coffee,
  Croissant,
  Leaf,
  Martini,
  Music4,
  Sun,
  Trees,
} from "lucide-react";

export const cafe = {
  name: "Hana Corner Café",
  tagline: "Specialty Coffee & Brunch — Tirana",
  subtitle: "Specialty Coffee & Brunch · Tirana, Albania",
  address: "Rruga Gjin Bue Shpata 4, Tiranë 1001, Albania",
  phone: "+355 67 688 0348",
  instagram: "https://www.instagram.com/hana_cornercafe",
  instagramHandle: "@hana_cornercafe",
  rating: 4.5,
  reviewCount: 735,
  hoursLabel: "Open daily · closes 10 PM",
  priceRange: "ALL 500–1,000 per person",
  badge: "Best plant-based milk in Tirana",
};

export type MenuItem = {
  name: string;
  description: string;
  badges?: string[];
  featured?: boolean;
};

export type MenuSectionData = {
  title: string;
  icon: LucideIcon;
  intro: string;
  items: MenuItem[];
};

export const highlights = [
  {
    title: "Plant-based first",
    description:
      "Soy, almond, and oat milk choices that regulars and travelers specifically call out.",
    icon: Leaf,
  },
  {
    title: "Outdoor seating",
    description:
      "A corner-table atmosphere that works for slow brunches and evening coffee.",
    icon: Trees,
  },
  {
    title: "Great music",
    description:
      "A relaxed soundtrack that supports the room instead of competing with it.",
    icon: Music4,
  },
  {
    title: "Open late",
    description:
      "An easy all-day pace with evenings that stay social right up to closing.",
    icon: Bean,
  },
];

export const menuSections: MenuSectionData[] = [
  {
    title: "Espresso Bar",
    icon: Coffee,
    intro:
      "Classic drinks with careful extraction, textured milk, and an easy all-day pace.",
    items: [
      {
        name: "Espresso",
        description: "Balanced and chocolatey with a clean finish.",
      },
      {
        name: "Cappuccino",
        description: "Soft foam, warm spice notes, and a quietly sweet body.",
      },
      {
        name: "Oatmilk Latte",
        description:
          "The café favorite for plant-based regulars and first-timers.",
        badges: ["plant-based"],
        featured: true,
      },
      {
        name: "Matcha Latte",
        description: "Bright, grassy, and calm with a creamy finish.",
      },
    ],
  },
  {
    title: "Cold Brews & Iced",
    icon: Sun,
    intro:
      "Chilled options for warm Tirana afternoons, laptop hours, and post-brunch lingering.",
    items: [
      {
        name: "Cold Brew",
        description: "Low-acid, cocoa-toned, and quietly strong.",
      },
      {
        name: "Iced Latte",
        description: "Silky milk over espresso with a clean finish.",
      },
      {
        name: "Espresso Tonic",
        description: "Bright citrus lift and a bittersweet sparkle.",
      },
      {
        name: "House Lemonade",
        description: "A fresh, herb-leaning cooler with brunch energy.",
      },
    ],
  },
  {
    title: "Plant-Based Options",
    icon: Leaf,
    intro:
      "Thoughtful plant-based choices that feel fully considered rather than secondary.",
    items: [
      {
        name: "Oat Chai",
        description: "Spiced, creamy, and soft on the finish.",
        badges: ["vegan", "plant-based"],
      },
      {
        name: "Golden Milk",
        description: "Turmeric warmth with mellow sweetness.",
        badges: ["plant-based"],
      },
      {
        name: "Vegan Cookie",
        description: "A house favorite beside coffee in the late afternoon.",
        badges: ["vegan"],
      },
      {
        name: "Banana Bread",
        description: "Moist crumb, gentle spice, and a familiar comfort.",
        badges: ["plant-based"],
      },
    ],
  },
  {
    title: "Brunch & Food",
    icon: Croissant,
    intro:
      "Brunch plates for long conversations, repeat visits, and that late-morning light.",
    items: [
      {
        name: "Avocado Toast",
        description: "Greens, seeds, citrus, and a sharp fresh finish.",
        badges: ["vegetarian"],
      },
      {
        name: "Eggs & Labneh",
        description: "Jammy eggs with creamy tang and warm bread.",
      },
      {
        name: "Brunch Plate",
        description: "Seasonal vegetables, eggs, salad, and bakery extras.",
      },
      {
        name: "Prosciutto Toast",
        description: "Savory, layered, and brightened with herbs.",
      },
    ],
  },
  {
    title: "Cakes & Desserts",
    icon: CakeSlice,
    intro:
      "The pastry case is part of the experience, especially if you stay for a second coffee.",
    items: [
      {
        name: "House Torte",
        description: "Elegant layers and a soft, buttery finish.",
        featured: true,
      },
      {
        name: "Basque Cheesecake",
        description: "Burnished edges with a lush center.",
      },
      {
        name: "Peanut Butter Cheesecake",
        description: "Rich and playful with a dessert-bar feel.",
      },
      { name: "Lime Pie", description: "Bright citrus cream and crisp crust." },
    ],
  },
  {
    title: "Seasonal Specials",
    icon: Martini,
    intro:
      "A changing set of small-batch drinks and plates that keeps the menu feeling alive.",
    items: [
      {
        name: "Strawberry Matcha Cloud",
        description: "Fruity sweetness under a grassy matcha top.",
      },
      {
        name: "Rosemary Orange Spritz",
        description: "Mediterranean citrus with a herbal finish.",
      },
      {
        name: "Garden Focaccia",
        description: "Olive oil crumb with vegetables and whipped cheese.",
      },
      {
        name: "Evening Aperitivo Board",
        description: "A social plate for later hours and good music.",
      },
    ],
  },
];

export const galleryItems = [
  {
    src: "/images/image5.jpg",
    alt: "Specialty coffee at Hana Corner Cafe",
    caption: "Slow pours and textured milk.",
    category: "Coffee",
  },
  {
    src: "/images/image6.jpg",
    alt: "Brunch plates at Hana Corner Cafe",
    caption: "Brunch built for lingering.",
    category: "Food",
  },
  {
    src: "/images/image3.jpg",
    alt: "Warm cafe interior and outdoor mood",
    caption: "A little corner that feels like home.",
    category: "Vibes",
  },
  {
    src: "/images/image4.jpg",
    alt: "Espresso and pastry pairing",
    caption: "Espresso beside the pastry case.",
    category: "Coffee",
  },
  {
    src: "/images/image5.jpg",
    alt: "Featured cake or dessert",
    caption: "House torte in afternoon light.",
    category: "Food",
  },
  {
    src: "/images/image6.jpg",
    alt: "Community table and music-friendly atmosphere",
    caption: "Plants, music, and community energy.",
    category: "Vibes",
  },
  {
    src: "/images/image7.jpg",
    alt: "Coffee close-up and bar details",
    caption: "Close details from the espresso bar.",
    category: "Coffee",
  },
  {
    src: "/images/image8.jpg",
    alt: "Cafe mood and seating",
    caption: "Light, seating, and the room itself.",
    category: "Vibes",
  },
];

export const reviewCards = [
  {
    author: "Thomas Wilson",
    source: "Google review",
    quote: "Fantastic spot I kept returning to during my stay in Tirana.",
    note: "Quoted across Hana's own site and public directory listings.",
  },
  {
    author: "Globetrekker Sarah",
    source: "Travel review excerpt",
    quote:
      "A lively upstairs event space and a social atmosphere that draws tourists and expats.",
    note: "Based on public review excerpts surfaced in travel listings.",
  },
  {
    author: "Plant-based regulars",
    source: "Visitor summary",
    quote:
      "Among the best plant-based milk options in Tirana, with vegan-friendly sweets that feel intentional.",
    note: "Synthesized from public café review summaries.",
  },
];

export const stats = [
  { value: 4.5, suffix: "★", label: "Google rating" },
  { value: 735, suffix: "+", label: "Reviews" },
  { value: 3, suffix: "", label: "Plant milks daily" },
];

export const footerPreview = [
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
];
