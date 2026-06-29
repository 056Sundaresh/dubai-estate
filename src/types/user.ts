export type UserRole = "User" | "Agent" | "Developer" | "Admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  savedProperties: string[]; // Property IDs
  savedSearches: any[];
}

export interface Agent extends Omit<User, 'role' | 'savedProperties' | 'savedSearches'> {
  role: "Agent";
  agency: string;
  phone: string;
  languages: string[];
  experienceYears: number;
  listingsCount: number;
  rating: number;
  reviewsCount: number;
  about: string;
}
