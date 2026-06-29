import React from 'react';
import { communities } from '@/lib/mock-data';
import Link from 'next/link';

export default function CommunitiesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Popular Communities in Dubai</h1>
        <p className="text-lg text-gray-600">Explore the most sought-after neighborhoods. Find the perfect community that matches your lifestyle, whether it's waterfront living, urban luxury, or family-friendly suburbs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communities.map((community, index) => (
          <Link href={`/properties?community=${community.name}`} key={index} className="group relative rounded-2xl overflow-hidden aspect-[4/3] block">
            <img src={community.image} alt={community.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full text-white">
              <h3 className="text-2xl font-bold mb-2">{community.name}</h3>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-gray-300 mb-1">Avg. Price</p>
                  <p className="font-semibold text-primary">{community.avgPrice}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-300 mb-1">Rental Yield</p>
                  <p className="font-semibold text-green-400">{community.rentalYield}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <span className="text-sm font-medium">{community.propertiesCount} Active Listings</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
