"use client"

import React, { useState } from 'react';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { properties } from '@/lib/mock-data';
import { MapViewer } from '@/components/common/MapViewer';

export default function PropertiesPage() {
  const [view, setView] = useState<'list' | 'map'>('list');

  const markers = properties.map(p => ({
    lat: p.coordinates?.lat || 25.2,
    lng: p.coordinates?.lng || 55.2,
    popup: `${p.title} - AED ${p.price}`
  }));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Property Search</h1>
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium ${view === 'list' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
            onClick={() => setView('list')}
          >
            List
          </button>
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium ${view === 'map' ? 'bg-white shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
            onClick={() => setView('map')}
          >
            Map
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="hidden lg:block space-y-6">
          <div className="bg-surface p-6 rounded-xl border border-gray-100">
            <h3 className="font-semibold mb-4">Filters</h3>
            {/* Filter controls would go here */}
            <p className="text-sm text-gray-500">Filters under construction</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          {view === 'list' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="h-[600px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm relative z-0">
              <MapViewer 
                center={{ lat: 25.15, lng: 55.2 }} 
                zoom={11} 
                markers={markers}
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
