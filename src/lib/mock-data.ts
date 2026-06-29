import { Property, Agent } from "./types";

export const agents: Agent[] = [
  {
    id: "a1",
    name: "Sarah Ahmed",
    agency: "Premium Properties Dubai",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60",
    phone: "+971 50 123 4567",
    email: "sarah@premium-dubai.com",
    rating: 4.9,
    reviewsCount: 124,
  },
  {
    id: "a2",
    name: "Michael Chen",
    agency: "Luxury Estates",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60",
    phone: "+971 55 987 6543",
    email: "michael@luxuryestates.ae",
    rating: 4.7,
    reviewsCount: 89,
  }
];

export const properties: Property[] = [
  {
    id: "p1",
    title: "Luxury Waterfront Villa with Private Beach",
    description: "Experience unparalleled luxury in this stunning custom-built villa on Palm Jumeirah. Featuring panoramic sea views, a private beach, infinity pool, and state-of-the-art smart home technology.",
    price: 35000000,
    listingType: "Buy",
    propertyType: "Villa",
    bedrooms: 6,
    bathrooms: 8,
    areaSqft: 12500,
    location: "Frond N, Palm Jumeirah",
    community: "Palm Jumeirah",
    city: "Dubai",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&auto=format&fit=crop&q=80"
    ],
    amenities: ["Private Beach", "Infinity Pool", "Smart Home", "Cinema Room", "Gym", "Maid's Room", "Driver's Room"],
    agent: agents[0],
    isVerified: true,
    isFeatured: true,
    coordinates: { lat: 25.1124, lng: 55.1390 }
  },
  {
    id: "p2",
    title: "Ultra-Modern Penthouse in Downtown Dubai",
    description: "Situated in the heart of Downtown Dubai, this spectacular penthouse offers breathtaking, unobstructed views of the Burj Khalifa and the Dubai Fountains. Includes exclusive access to premium building amenities.",
    price: 18500000,
    listingType: "Buy",
    propertyType: "Penthouse",
    bedrooms: 4,
    bathrooms: 5,
    areaSqft: 6200,
    location: "Opera District, Downtown Dubai",
    community: "Downtown Dubai",
    city: "Dubai",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&auto=format&fit=crop&q=80"
    ],
    amenities: ["Burj Khalifa View", "Private Elevator", "Concierge", "Valet Parking", "Spa", "Pool"],
    agent: agents[1],
    isVerified: true,
    isFeatured: true,
    coordinates: { lat: 25.1972, lng: 55.2744 }
  },
  {
    id: "p3",
    title: "Premium Marina View Apartment",
    description: "Fully furnished 3-bedroom apartment with full marina views. High floor, upgraded interiors, and ready to move in. Walking distance to JBR beach and Marina Mall.",
    price: 320000, // Rent
    listingType: "Rent",
    propertyType: "Apartment",
    bedrooms: 3,
    bathrooms: 4,
    areaSqft: 2100,
    location: "Dubai Marina",
    community: "Dubai Marina",
    city: "Dubai",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1e59c11818?w=1200&auto=format&fit=crop&q=80"
    ],
    amenities: ["Balcony", "Shared Pool", "Gym", "Covered Parking", "Security", "Built-in Wardrobes"],
    agent: agents[0],
    isVerified: true,
    isFeatured: false,
    coordinates: { lat: 25.0805, lng: 55.1403 }
  },
  {
    id: "p4",
    title: "Contemporary Townhouse in Arabian Ranches 3",
    description: "Brand new, spacious townhouse in the sought-after Arabian Ranches 3 community. Perfect for families, featuring a private garden, modern kitchen, and access to world-class community facilities.",
    price: 3200000,
    listingType: "Buy",
    propertyType: "Townhouse",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 2800,
    location: "Sun, Arabian Ranches 3",
    community: "Arabian Ranches 3",
    city: "Dubai",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18efc2291?w=1200&auto=format&fit=crop&q=80"
    ],
    amenities: ["Private Garden", "Community Pool", "Lazy River", "Parks", "Kids Play Area"],
    agent: agents[1],
    isVerified: true,
    isFeatured: true,
    roi: 6.2,
    coordinates: { lat: 25.0454, lng: 55.2891 }
  },
  {
    id: "p5",
    title: "Off-Plan Luxury Mansion - Dubai Hills Estate",
    description: "Invest in the future with this spectacular off-plan mansion in Dubai Hills Estate. Offering flexible payment plans and projected high capital appreciation. Overlooking the 18-hole championship golf course.",
    price: 45000000,
    listingType: "Buy",
    propertyType: "Villa",
    bedrooms: 7,
    bathrooms: 9,
    areaSqft: 16000,
    location: "Dubai Hills View",
    community: "Dubai Hills Estate",
    city: "Dubai",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&auto=format&fit=crop&q=80"
    ],
    amenities: ["Golf Course View", "Customizable", "Private Pool", "Home Cinema", "Basement Parking"],
    agent: agents[0],
    isVerified: true,
    isFeatured: true,
    developer: "Emaar",
    completionDate: "Q4 2026",
    coordinates: { lat: 25.1090, lng: 55.2635 }
  }
];

export const communities = [
  {
    name: "Downtown Dubai",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60",
    propertiesCount: 1240,
    avgPrice: "2.5M AED",
    rentalYield: "5.8%"
  },
  {
    name: "Dubai Marina",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&auto=format&fit=crop&q=60",
    propertiesCount: 2150,
    avgPrice: "2.1M AED",
    rentalYield: "6.5%"
  },
  {
    name: "Palm Jumeirah",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=800&auto=format&fit=crop&q=60",
    propertiesCount: 850,
    avgPrice: "5.5M AED",
    rentalYield: "4.5%"
  },
  {
    name: "Dubai Hills Estate",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=60",
    propertiesCount: 1560,
    avgPrice: "3.2M AED",
    rentalYield: "5.9%"
  }
];
