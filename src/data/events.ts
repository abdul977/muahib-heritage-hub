export type EventItem = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  description: string;
  featured?: boolean;
};

export const events: EventItem[] = [
  {
    id: 1,
    title: "Heritage Food Festival",
    date: "March 15, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "Millennium Park, Abuja",
    capacity: "500+ Attendees",
    description:
      "A grand celebration of African culinary heritage featuring traditional dishes from across the continent, cooking demonstrations, and cultural performances.",
    featured: true,
  },
  {
    id: 2,
    title: "Chef's Table Experience",
    date: "March 22, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Cultural Centre, Maitama",
    capacity: "50 Guests",
    description:
      "An intimate dining experience with renowned African chefs sharing their signature dishes and stories behind traditional recipes.",
    featured: false,
  },
  {
    id: 3,
    title: "Street Food Safari",
    date: "March 29, 2025",
    time: "12:00 PM - 6:00 PM",
    location: "Wuse Market Square",
    capacity: "300+ Foodies",
    description:
      "Explore the vibrant world of African street food with guided tastings, vendor spotlights, and interactive cooking sessions.",
    featured: false,
  },
];
