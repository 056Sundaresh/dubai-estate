import React from 'react';
import Image from 'next/link'; // wait, image is next/image
import { Property } from '@/lib/types';
import { Heart, MapPin, BedDouble, Bath, Square, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold rounded-md text-gray-900">
            {property.propertyType}
          </span>
          {property.isVerified && (
            <span className="bg-primary/90 backdrop-blur px-3 py-1 text-xs font-semibold rounded-md text-white flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Verified
            </span>
          )}
        </div>

        {/* Favorite */}
        <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur rounded-full text-gray-500 hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>

        {/* Price overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-2xl font-bold drop-shadow-md">
            AED {property.price.toLocaleString()}
            {property.listingType === 'Rent' && <span className="text-sm font-normal"> / year</span>}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <Link href={`/properties/${property.id}`} className="block">
          <h4 className="text-lg font-semibold text-gray-900 line-clamp-1 hover:text-primary transition-colors">
            {property.title}
          </h4>
        </Link>
        
        <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
          <MapPin className="w-4 h-4" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 mt-4 py-4 border-t border-b border-gray-100">
          <div className="flex items-center gap-1 text-gray-600">
            <BedDouble className="w-4 h-4" />
            <span className="text-sm font-medium">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Bath className="w-4 h-4" />
            <span className="text-sm font-medium">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Square className="w-4 h-4" />
            <span className="text-sm font-medium">{property.areaSqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <img 
              src={property.agent.photoUrl} 
              alt={property.agent.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-gray-700">{property.agent.name}</span>
          </div>
          <Link href={`/properties/${property.id}`}>
            <Button variant="outline" size="sm" className="rounded-full">Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
