"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const [searchType, setSearchType] = useState<'Buy' | 'Rent'>('Buy');

  return (
    <div className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/first_page.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Find Your Perfect Property
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow">
            Search thousands of verified properties across Dubai. Discover luxury living in the world's most dynamic city.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl p-4 shadow-xl max-w-4xl mx-auto">
            {/* Toggle Buy/Rent */}
            <div className="flex mb-4 border-b">
              <button
                onClick={() => setSearchType('Buy')}
                className={`pb-3 px-6 text-sm font-semibold transition-colors ${searchType === 'Buy' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Buy
              </button>
              <button
                onClick={() => setSearchType('Rent')}
                className={`pb-3 px-6 text-sm font-semibold transition-colors ${searchType === 'Rent' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Rent
              </button>
            </div>

            {/* Inputs */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="City, community or building" 
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-gray-800"
                />
              </div>
              <div className="md:w-1/4 relative">
                <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white text-gray-800 appearance-none">
                  <option value="">Property Type</option>
                  <option value="Villa">Villa</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Penthouse">Penthouse</option>
                </select>
              </div>
              <Button size="lg" className="md:w-auto w-full rounded-lg text-lg">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
