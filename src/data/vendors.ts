export type VendorItem = {
  id: number;
  name: string;
  specialty: string;
  description: string;
  rating: number;
  featured?: boolean;
};

export const vendors: VendorItem[] = [
  {
    id: 1,
    name: "Mama Kemi's Kitchen",
    specialty: "Traditional Yoruba Cuisine",
    description:
      "Authentic jollof rice, pepper soup, and traditional Nigerian sweets made with love and generations of family recipes.",
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    name: "Sahel Spice Co.",
    specialty: "West African Fusion",
    description:
      "Modern interpretations of classic West African dishes with locally sourced ingredients and innovative presentation.",
    rating: 4.8,
    featured: false,
  },
  {
    id: 3,
    name: "Nile Valley Delights",
    specialty: "East African Specialties",
    description:
      "Bringing the flavors of East Africa to Abuja with authentic injera, berbere spices, and traditional coffee ceremonies.",
    rating: 4.7,
    featured: false,
  },
  {
    id: 4,
    name: "Baobab Bites",
    specialty: "Healthy African Snacks",
    description:
      "Nutritious and delicious snacks inspired by African superfoods, perfect for health-conscious food lovers.",
    rating: 4.6,
    featured: false,
  },
];
