// data/products.ts

export type Product = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  ageRange: string;
  materials: string;
  keyFeatures: string[];
  safetyNotes: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "nb-1",
    name: "Natural Baby Organic Swaddle Wrap",
    slug: "organic-swaddle-wrap",
    shortDescription: "Soft, breathable organic cotton swaddle for newborns.",
    longDescription:
      "The Natural Baby Organic Swaddle Wrap is made from GOTS-certified organic cotton that is gentle on newborn skin. Its breathable weave helps prevent overheating while keeping your baby snug and secure. Designed with an easy wrap-and-tuck style, it reduces startle reflex and promotes deeper sleep.",
    ageRange: "0–4 months",
    materials: "100% GOTS-certified organic cotton",
    keyFeatures: [
      "Breathable lightweight fabric to reduce overheating",
      "Easy wrap design suitable for new parents",
      "Machine washable and quick drying",
      "Available in neutral, calming colors"
    ],
    safetyNotes:
      "Always place baby on their back to sleep. Stop using swaddles once baby shows signs of rolling over.",
    category: "Sleep"
  },
  {
    id: "nb-2",
    name: "Natural Baby Bamboo Feeding Bottle",
    slug: "bamboo-feeding-bottle",
    shortDescription: "Anti-colic glass bottle with bamboo sleeve and silicone nipple.",
    longDescription:
      "The Natural Baby Bamboo Feeding Bottle features a durable borosilicate glass body with a removable bamboo sleeve for better grip and insulation. The soft, breast-shaped silicone nipple has an anti-colic vent system that minimizes air intake, helping to reduce gas and discomfort.",
    ageRange: "0–18 months",
    materials: "Borosilicate glass, food-grade silicone, bamboo sleeve",
    keyFeatures: [
      "Anti-colic vented nipple design",
      "BPA, BPS, and phthalate free",
      "Heat-resistant glass safe for sterilizers",
      "Measurement markings for easy preparation"
    ],
    safetyNotes:
      "Check nipple regularly for wear or damage. Do not microwave milk in the bottle to avoid uneven heating.",
    category: "Feeding"
  },
  {
    id: "nb-3",
    name: "Natural Baby Hypoallergenic Diapers",
    slug: "hypoallergenic-diapers",
    shortDescription: "Ultra-soft, plant-based diapers for sensitive skin.",
    longDescription:
      "Natural Baby Hypoallergenic Diapers are made with plant-derived materials and a feather-soft top sheet to protect delicate skin. They are free from chlorine, fragrances, and lotions, and feature a high-absorption core that keeps baby dry day and night.",
    ageRange: "0–24 months",
    materials: "Plant-based fibers, super absorbent core, elastic waistband",
    keyFeatures: [
      "Fragrance-free and chlorine-free",
      "Wetness indicator stripe",
      "Stretchy leak-guard cuffs",
      "Dermatologist-tested for sensitive skin"
    ],
    safetyNotes:
      "Change diapers frequently to avoid rashes. Do not flush diapers; dispose of in household waste.",
    category: "Diapering"
  },
  {
    id: "nb-4",
    name: "Natural Baby Soothing Body Lotion",
    slug: "soothing-body-lotion",
    shortDescription: "Gentle lotion with shea butter and oat extract.",
    longDescription:
      "Natural Baby Soothing Body Lotion is a lightweight, fast-absorbing formula created for daily use on baby’s delicate skin. It combines organic shea butter, oat extract, and aloe vera to provide long-lasting moisture without greasiness.",
    ageRange: "0+ months",
    materials: "Shea butter, oat extract, aloe vera, coconut-derived emollients",
    keyFeatures: [
      "No parabens, mineral oil, or artificial fragrance",
      "Pediatrician and dermatologist tested",
      "Non-sticky feel suitable for warm climates",
      "Pump dispenser for easy one-handed use"
    ],
    safetyNotes:
      "For external use only. Avoid contact with eyes. Discontinue use if irritation occurs.",
    category: "Skincare"
  },
  {
    id: "nb-5",
    name: "Natural Baby Foam Play Mat",
    slug: "foam-play-mat",
    shortDescription: "Non-toxic cushioned mat for tummy time and play.",
    longDescription:
      "The Natural Baby Foam Play Mat creates a safe, cushioned area for tummy time, crawling, and early play. Made from non-toxic, BPA-free EVA foam with a textured surface to reduce slipping, it is easy to wipe clean and reassemble.",
    ageRange: "3–36 months",
    materials: "Non-toxic EVA foam, textured finish",
    keyFeatures: [
      "Interlocking tiles for flexible layout",
      "Water-resistant and easy to clean",
      "Soft cushioning to reduce impact during falls",
      "Neutral design that suits modern homes"
    ],
    safetyNotes:
      "Always supervise baby during play. Do not use on top of stairs or uneven surfaces.",
    category: "Play"
  },
  {
    id: "nb-6",
    name: "Natural Baby Ergonomic Carrier",
    slug: "ergonomic-carrier",
    shortDescription: "Front and back baby carrier with hip-healthy design.",
    longDescription:
      "The Natural Baby Ergonomic Carrier supports baby in the recommended 'M' seat position, helping healthy hip development. It offers multiple carry positions with wide padded straps to distribute weight evenly for parents.",
    ageRange: "3–24 months (5.5–15 kg)",
    materials: "Cotton outer, breathable mesh panel, padded straps",
    keyFeatures: [
      "Adjustable seat width and panel height",
      "Breathable mesh for airflow in warm weather",
      "Removable head support for younger babies",
      "Machine washable"
    ],
    safetyNotes:
      "Ensure baby’s airways are always clear and visible. Follow weight limits strictly.",
    category: "Travel"
  },
  {
    id: "nb-7",
    name: "Natural Baby Silicone Teether Ring",
    slug: "silicone-teether-ring",
    shortDescription: "Textured silicone ring to soothe teething discomfort.",
    longDescription:
      "The Natural Baby Silicone Teether Ring is made from 100% food-grade silicone with multiple textures to massage sore gums. Its lightweight, easy-to-grip design is perfect for little hands and can be chilled for extra soothing relief.",
    ageRange: "3–18 months",
    materials: "Food-grade silicone",
    keyFeatures: [
      "Free from BPA, PVC, and phthalates",
      "Different textures on each side",
      "Dishwasher safe (top rack)",
      "Can be chilled (not frozen) for extra comfort"
    ],
    safetyNotes:
      "Inspect regularly for damage. Do not tie teether around baby’s neck or crib.",
    category: "Teething"
  },
  {
    id: "nb-8",
    name: "Natural Baby Convertible Crib Blanket",
    slug: "convertible-crib-blanket",
    shortDescription: "Lightweight breathable blanket for crib or stroller.",
    longDescription:
      "The Natural Baby Convertible Crib Blanket is a dual-use blanket that can be used in cribs, bassinets, or strollers. It is made with a breathable cotton-muslin blend, designed to provide warmth without overheating.",
    ageRange: "6–36 months (for supervised use)",
    materials: "Cotton-muslin blend",
    keyFeatures: [
      "Breathable weave suitable for most seasons",
      "Machine washable and softens with each wash",
      "Large size that can be folded or layered",
      "Neutral patterns suitable for all genders"
    ],
    safetyNotes:
      "Follow safe sleep guidelines. Do not use loose blankets with infants unable to roll and reposition themselves.",
    category: "Sleep"
  },
  {
    id: "nb-9",
    name: "Natural Baby Gentle Hair & Body Wash",
    slug: "gentle-hair-body-wash",
    shortDescription: "Tear-free 2-in-1 wash for baby’s hair and body.",
    longDescription:
      "Natural Baby Gentle Hair & Body Wash is a mild, tear-free cleanser formulated with coconut-derived surfactants and chamomile extract. It cleanses without stripping natural oils, leaving baby’s skin and hair soft and refreshed.",
    ageRange: "0+ months",
    materials: "Coconut-derived cleansers, chamomile extract, glycerin",
    keyFeatures: [
      "Tear-free and pH balanced",
      "No SLS, SLES, or artificial dyes",
      "Light natural scent from plant extracts",
      "Pump bottle for easy bath-time use"
    ],
    safetyNotes:
      "Avoid contact with eyes. Rinse thoroughly with water. Keep out of reach of children when not in use.",
    category: "Bath"
  }
];
