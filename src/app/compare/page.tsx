import React from 'react';
import { properties } from '@/lib/mock-data';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ComparePage() {
  const compareItems = properties.slice(0, 2);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Compare Properties</h1>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b font-medium text-gray-500 w-1/4">Feature</th>
              {compareItems.map(p => (
                <th key={p.id} className="p-4 border-b w-1/3">
                  <div className="relative rounded-lg overflow-hidden aspect-[4/3] mb-4">
                    <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-primary font-bold text-xl mb-4">AED {p.price.toLocaleString()}</p>
                  <Button className="w-full">Contact Agent</Button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-4 font-medium text-gray-700">Location</td>
              {compareItems.map(p => <td key={p.id} className="p-4">{p.location}</td>)}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-700">Property Type</td>
              {compareItems.map(p => <td key={p.id} className="p-4">{p.propertyType}</td>)}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-700">Bedrooms</td>
              {compareItems.map(p => <td key={p.id} className="p-4">{p.bedrooms}</td>)}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-700">Bathrooms</td>
              {compareItems.map(p => <td key={p.id} className="p-4">{p.bathrooms}</td>)}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-700">Area (sqft)</td>
              {compareItems.map(p => <td key={p.id} className="p-4">{p.areaSqft.toLocaleString()}</td>)}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-700">Status</td>
              {compareItems.map(p => <td key={p.id} className="p-4">Ready</td>)}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-700">Smart Home</td>
              {compareItems.map(p => (
                <td key={p.id} className="p-4">
                  {p.amenities.includes("Smart Home") ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-700">Private Pool</td>
              {compareItems.map(p => (
                <td key={p.id} className="p-4">
                  {(p.amenities.includes("Private Pool") || p.amenities.includes("Infinity Pool")) ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
