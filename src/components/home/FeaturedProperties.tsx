import React from 'react';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { properties } from '@/lib/mock-data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function FeaturedProperties() {
  const featured = properties.filter(p => p.isFeatured).slice(0, 3);

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Hand-picked luxury properties for sale and rent in Dubai's most exclusive neighborhoods.
            </p>
          </div>
          <Link 
            href="/properties" 
            className="hidden md:flex items-center text-primary font-semibold hover:text-primary-hover transition-colors"
          >
            View All Properties <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <Link 
            href="/properties" 
            className="flex items-center text-primary font-semibold hover:text-primary-hover transition-colors"
          >
            View All Properties <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
