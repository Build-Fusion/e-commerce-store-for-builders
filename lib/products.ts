export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  features: string[];
  image: string;
  rating: number;
  reviews: number;
};

export const categories = [
  { name: "Power Tools", slug: "power-tools" },
  { name: "Hand Tools", slug: "hand-tools" },
  { name: "Safety Gear", slug: "safety" },
  { name: "Fasteners", slug: "fasteners" },
  { name: "Measuring", slug: "measuring" },
];

export const products: Product[] = [
  {
    id: "dewalt-20v-drill",
    name: "DeWalt 20V MAX Cordless Drill/Driver",
    price: 129.0,
    category: "power-tools",
    description:
      "Compact and powerful 20V MAX cordless drill with 2-speed transmission and high-performance motor. Ideal for drilling and driving in wood, metal, and plastic.",
    features: [
      "Brushless motor for longer runtime",
      "2-speed transmission (0-450 / 0-1500 RPM)",
      "LED work light",
      "Includes battery and charger",
    ],
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    rating: 4.8,
    reviews: 1240,
  },
  {
    id: "milwaukee-impact",
    name: "Milwaukee M18 Fuel Impact Driver",
    price: 179.0,
    category: "power-tools",
    description:
      "High-torque impact driver with POWERSTATE brushless motor. Delivers up to 1,800 in-lbs of torque for demanding fastening applications.",
    features: [
      "1,800 in-lbs of torque",
      "4-mode drive control",
      "Fuel gauge on tool",
      "Compatible with all M18 batteries",
    ],
    image: "https://images.unsplash.com/photo-1581094794329-cbef00f67b4d?w=800&q=80",
    rating: 4.9,
    reviews: 890,
  },
  {
    id: "stanley-hammer",
    name: "Stanley FatMax Framing Hammer",
    price: 34.99,
    category: "hand-tools",
    description:
      "22 oz framing hammer with magnetic nail starter and anti-vibration grip. Built for all-day framing and demolition work.",
    features: [
      "22 oz head weight",
      "Magnetic nail starter",
      "Anti-vibration grip",
      "Heat-treated steel",
    ],
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&q=80",
    rating: 4.6,
    reviews: 532,
  },
  {
    id: "hard-hat-pro",
    name: "3M Professional Hard Hat with Ratchet",
    price: 28.5,
    category: "safety",
    description:
      "ANSI Type I Class E hard hat with 4-point ratchet suspension. Lightweight and comfortable for all-day wear on the job site.",
    features: [
      "ANSI/ISEA Z89.1 Type I Class E",
      "Ratchet suspension",
      "UV resistant shell",
      "Available in multiple colors",
    ],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    rating: 4.7,
    reviews: 2103,
  },
  {
    id: "laser-level",
    name: "Bosch GLL 3-80 Line Laser",
    price: 349.0,
    category: "measuring",
    description:
      "Self-leveling 360° three-plane laser for precise layout work. Projects bright lines for plumb, level, and square applications.",
    features: [
      "360° horizontal + 2 vertical planes",
      "Working range up to 100 ft",
      "IP54 rated",
      "Includes mounting accessories",
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    rating: 4.8,
    reviews: 412,
  },
  {
    id: "screw-assortment",
    name: "Hillman Construction Screw Assortment (500pc)",
    price: 42.99,
    category: "fasteners",
    description:
      "Professional assortment of common construction screws in a durable organizer case. Covers most framing and finish applications.",
    features: [
      "500 pieces total",
      "Multiple lengths and diameters",
      "Organizer case included",
      "Coated for corrosion resistance",
    ],
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
    rating: 4.5,
    reviews: 678,
  },
  {
    id: "safety-glasses",
    name: "Pyramex Safety Glasses - Anti-Fog",
    price: 12.99,
    category: "safety",
    description:
      "Lightweight anti-fog safety glasses with wraparound design. Meets ANSI Z87.1 high-impact standards.",
    features: [
      "ANSI Z87.1+ rated",
      "Anti-fog coating",
      "UV protection",
      "Adjustable temples",
    ],
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5041?w=800&q=80",
    rating: 4.4,
    reviews: 1540,
  },
  {
    id: "tape-measure",
    name: "Stanley FatMax 25ft Tape Measure",
    price: 24.99,
    category: "measuring",
    description:
      "Heavy-duty 25-foot tape with 11-foot standout and BladeArmor coating for long life on the job.",
    features: [
      "25 ft length",
      "11 ft standout",
      "BladeArmor coating",
      "Hook holds on 3 sides",
    ],
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80",
    rating: 4.7,
    reviews: 3201,
  },
];