export type PropertyType = "Villa" | "Apartment" | "Townhouse" | "Penthouse" | "Mansion" | "Commercial";
export type PropertyStatus = "Ready" | "Off-plan" | "Under Construction";
export type ListingType = "Buy" | "Rent";

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  community: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sq ft
  type: PropertyType;
  listingType: ListingType;
  status: PropertyStatus;
  images: string[];
  features: string[];
  amenities: string[];
  isVerified: boolean;
  agentId: string;
  developer?: string;
  completionDate?: string; // For off-plan
  roi?: number; // Estimated Return on Investment
  featured?: boolean;
  luxury?: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
}
