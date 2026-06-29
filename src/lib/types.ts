export type PropertyType = "Villa" | "Apartment" | "Townhouse" | "Penthouse" | "Plot";
export type ListingType = "Buy" | "Rent";

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  listingType: ListingType;
  propertyType: PropertyType;
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
  location: string;
  community: string;
  city: string;
  images: string[];
  amenities: string[];
  agent: Agent;
  isVerified: boolean;
  isFeatured: boolean;
  roi?: number; // Return on Investment %
  developer?: string;
  completionDate?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Agent {
  id: string;
  name: string;
  agency: string;
  photoUrl: string;
  phone: string;
  email: string;
  rating: number;
  reviewsCount: number;
}
