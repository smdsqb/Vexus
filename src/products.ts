export type ProductCategory = "jacket" | "hoodie";

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  price: number;
  badge?: "Bestseller" | "New" | "Limited";
  colorway: string;
  num: string;
  accentColor: "red" | "gold" | "blue";
  description: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "monza-jacket",
    name: "Monza Jacket",
    subtitle: "Racing Jacket",
    category: "jacket",
    price: 1500,
    badge: "Bestseller",
    colorway: "Black / Red",
    num: "01",
    accentColor: "red",
    description:
      "The Monza Jacket pulls from the relentless pace of the Italian Grand Prix. Shoulder-stripe detailing, a clean zipper channel, and a weight that sits right for the Indian climate.",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: "silverstone-hoodie",
    name: "Silverstone Hoodie",
    subtitle: "Pullover Hoodie",
    category: "hoodie",
    price: 1500,
    badge: "New",
    colorway: "Midnight Blue",
    num: "02",
    accentColor: "gold",
    description:
      "Built for the grey-sky intensity of Silverstone. Deep midnight colourway with a gold collar trim and an oversized hood. The kind of hoodie you wear on a cold morning and forget to take off.",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: "suzuka-jacket",
    name: "Suzuka Gold",
    subtitle: "Racing Jacket",
    category: "jacket",
    price: 1500,
    badge: "Limited",
    colorway: "Carbon / Gold",
    num: "03",
    accentColor: "gold",
    description:
      "Inspired by the precision of Suzuka's figure-eight layout. Diagonal gold stripe detailing across the chest, carbon-dark base, and a cut that works on the street as much as at a watch party.",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
  {
    id: "imola-hoodie",
    name: "Imola Hoodie",
    subtitle: "Pullover Hoodie",
    category: "hoodie",
    price: 1500,
    badge: "New",
    colorway: "Deep Red",
    num: "04",
    accentColor: "red",
    description:
      "Deep red colourway referencing Imola's iconic Autodromo Enzo e Dino Ferrari. Heavy-blend cotton, dropped shoulders, and a front pocket that can actually hold something.",
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
  },
];

export const formatPrice = (price: number, currency: "INR" | "SGD" = "INR") => {
  if (currency === "SGD") {
    return `S$${(price * 0.016).toFixed(0)}`;
  }
  return `₹${price.toLocaleString("en-IN")}`;
};
