export interface Product {
  id: string;
  code: string;
  brand: 'Royal Canin' | 'Drools';
  title: string;
  category: 'Dog Dry Food' | 'Cat Dry Food' | 'Wet Food' | 'Veterinary Diet' | 'Treats & Chews';
  targetPet: 'Dog' | 'Cat';
  packagingSizes: string[];
  keyBenefits: string[];
  badge?: string;
  image: string;
  description: string;
  moq: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "rc-1",
    code: "RC-MA-15",
    brand: "Royal Canin",
    title: "Royal Canin Medium Adult Dog Food",
    category: "Dog Dry Food",
    targetPet: "Dog",
    packagingSizes: ["3kg Bag", "10kg Bag", "15kg Economy Bag"],
    keyBenefits: ["High Digestibility", "Omega 3 (EPA-DHA) for Skin", "Natural Defences Support"],
    badge: "Top Seller in NCR",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
    description: "Formulated for medium breed dogs (11 to 25 kg) from 12 months to 7 years old. Helps maintain natural defenses and optimal digestive health.",
    moq: "5 Bags"
  },
  {
    id: "rc-2",
    code: "rc-maxi-puppy",
    brand: "Royal Canin",
    title: "Royal Canin Maxi Puppy Dry Food",
    category: "Dog Dry Food",
    targetPet: "Dog",
    packagingSizes: ["4kg Bag", "15kg Bag"],
    keyBenefits: ["Immune System Support", "Moderate Energy Content", "Digestive Health"],
    badge: "High Retail Demand",
    image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80",
    description: "Specially formulated to support the nutritional needs of large puppies (adult weight 26 to 44 kg) up to 15 months old.",
    moq: "5 Bags"
  },
  {
    id: "rc-3",
    code: "rc-vet-gastro",
    brand: "Royal Canin",
    title: "Royal Canin Veterinary Diet Gastrointestinal",
    category: "Veterinary Diet",
    targetPet: "Dog",
    packagingSizes: ["2kg Bag", "7.5kg Bag", "12kg Bag"],
    keyBenefits: ["Digestive Security", "High Energy Formula", "High Palatability"],
    badge: "Vet Prescription",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    description: "Veterinary-exclusive diet for dogs with acute or chronic gastrointestinal disorders, pancreatic insufficiency, or recovery.",
    moq: "3 Bags"
  },
  {
    id: "rc-4",
    code: "rc-hairball-care",
    brand: "Royal Canin",
    title: "Royal Canin Hairball Care Feline Dry Food",
    category: "Cat Dry Food",
    targetPet: "Cat",
    packagingSizes: ["2kg Bag", "4kg Bag", "10kg Bag"],
    keyBenefits: ["Hairball Elimination", "Urinary Health", "High Fiber Blend"],
    badge: "Feline Best Seller",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    description: "Precisely balanced nutritional formula that naturally helps reduce hairball formation by stimulating intestinal transit.",
    moq: "5 Bags"
  },
  {
    id: "dr-1",
    code: "DR-FOCUS-PUPPY",
    brand: "Drools",
    title: "Drools Focus Super Premium Puppy Food",
    category: "Dog Dry Food",
    targetPet: "Dog",
    packagingSizes: ["1.2kg Bag", "4kg Bag", "15kg Bag"],
    keyBenefits: ["Real Chicken & Egg Formula", "DHA for Brain Development", "No Corn & No Wheat"],
    badge: "High Margin for Retailers",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80",
    description: "Super premium puppy food made with real chicken and egg. Free from corn, wheat, and soy for optimal absorption.",
    moq: "10 Bags"
  },
  {
    id: "dr-2",
    code: "dr-vetpro-skin",
    brand: "Drools",
    title: "Drools VetPro Skin & Coat Clinical Diet",
    category: "Veterinary Diet",
    targetPet: "Dog",
    packagingSizes: ["3kg Bag", "10kg Bag"],
    keyBenefits: ["Omega 3 & 6 Ratio 1:5", "Hydrolyzed Protein", "Reduces Itching"],
    badge: "Clinical Favorite",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
    description: "Specialized clinical nutrition formulated to manage food sensitivities and support skin recovery in dogs.",
    moq: "5 Bags"
  },
  {
    id: "dr-3",
    code: "dr-ocean-fish-cat",
    brand: "Drools",
    title: "Drools Ocean Fish Cat Dry Food",
    category: "Cat Dry Food",
    targetPet: "Cat",
    packagingSizes: ["1.2kg Bag", "3kg Bag", "7kg Bag"],
    keyBenefits: ["High Taurine", "Urinary pH Control", "Shiny Coat Formula"],
    badge: "Fast Moving SKU",
    image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=800&q=80",
    description: "Delicious ocean fish flavor loaded with high-quality protein, taurine, and essential vitamins for active cats.",
    moq: "10 Bags"
  }
];

export const NCR_LOCATIONS = [
  "Delhi (South, North, West, East, Central)",
  "Gurugram (Sohna Road, Cyber City, Golf Course)",
  "Noida & Greater Noida",
  "Ghaziabad (Indirapuram, Vaishali, Raj Nagar)",
  "Faridabad & Ballabhgarh"
];

export const FAQS = [
  {
    q: "Is Pawnourish an official wholesale distributor for Royal Canin and Drools?",
    a: "Yes. Pawnourish is a verified B2B wholesale distributor supplying 100% genuine, fresh-batch Royal Canin and Drools products directly to pet retailers, veterinary clinics, and breeders across Delhi NCR."
  },
  {
    q: "What is the Minimum Order Quantity (MOQ) for retailers?",
    a: "Our MOQs are retailer-friendly, starting at just 5 bags per order across mixed SKUs. This allows independent pet stores and clinics to maintain fresh inventory without tying up capital."
  },
  {
    q: "How fast is delivery within Delhi NCR?",
    a: "We offer Same-Day or 24-Hour delivery for orders placed before 12:00 PM across Delhi, Gurugram, Noida, Ghaziabad, and Faridabad via our dedicated logistics fleet."
  },
  {
    q: "Do you offer credit terms or Net payment options?",
    a: "Yes. Approved registered dealers who complete 3 successful orders qualify for Net 15 and Net 30 wholesale credit terms."
  },
  {
    q: "How can I get the full wholesale price list?",
    a: "You can click on 'Request Price List' on our website or contact our sales team directly on WhatsApp (+91 98100 XXXXX). We will instantly share the latest dealer rate card."
  }
];
