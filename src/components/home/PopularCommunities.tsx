import React from 'react';
import { communities } from '@/lib/mock-data';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

export function PopularCommunities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Communities</h2>
          <p className="text-gray-600 text-lg">
            Explore Dubai's most sought-after neighborhoods. From beachfront luxury to family-friendly suburbs, find the perfect area for your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community, index) => (
            <Link href={`/communities/${community.name.toLowerCase().replace(/\s+/g, '-')}`} key={index} className="group">
              <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-sm hover:shadow-xl transition-all duration-300">
                <img 
                  src={community.image} 
                  alt={community.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">{community.name}</h3>
                  <div className="flex items-center justify-between text-white/90 text-sm">
                    <span>{community.propertiesCount} Properties</span>
                    <div className="flex items-center gap-1 text-green-400 font-semibold">
                      <TrendingUp className="w-4 h-4" /> {community.rentalYield} ROI
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/communities">
            <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Explore All Areas
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
