import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function LuxuryCollection() {
  const luxuryProps = [
    {
      id: "l1",
      title: "Signature Villa on the Fronds",
      location: "Palm Jumeirah",
      price: "45,000,000",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&auto=format&fit=crop&q=80",
    },
    {
      id: "l2",
      title: "Bespoke Mansion with Golf Course View",
      location: "Dubai Hills Estate",
      price: "65,000,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80",
    }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">The Luxury Collection</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Curated premium residences for the most discerning buyers. Discover our exclusive portfolio of ultra-luxury properties.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {luxuryProps.map((prop) => (
            <Link key={prop.id} href={`/properties/${prop.id}`} className="group relative rounded-2xl overflow-hidden aspect-[16/9] block">
              <img src={prop.image} alt={prop.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-primary font-medium mb-2">{prop.location}</p>
                <h3 className="text-3xl font-bold mb-4">{prop.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold text-white">AED {prop.price}</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">View Property</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">Explore All Luxury</Button>
        </div>
      </div>
    </section>
  );
}
