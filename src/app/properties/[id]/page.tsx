import React from 'react';
import { properties } from '@/lib/mock-data';
import { MapPin, BedDouble, Bath, Square, Check, Share, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MapViewer } from '@/components/common/MapViewer';

export function generateStaticParams() {
  return properties.map((p) => ({
    id: p.id,
  }));
}

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    return <div className="mt-24 text-center">Property not found</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex gap-2 mb-2">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">{property.listingType}</span>
            <span className="bg-surface border px-3 py-1 rounded-full text-xs font-semibold">{property.propertyType}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
          <div className="flex items-center text-gray-500 gap-2">
            <MapPin className="w-4 h-4" />
            <span>{property.location}, {property.city}</span>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-bold text-primary">AED {property.price.toLocaleString()}</h2>
          <div className="flex items-center justify-end gap-3 mt-4">
            <Button variant="outline" size="icon" className="rounded-full"><Share className="w-4 h-4" /></Button>
            <Button variant="outline" size="icon" className="rounded-full"><Heart className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 h-[500px]">
        <div className="md:col-span-3 rounded-2xl overflow-hidden h-full">
          <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
        </div>
        <div className="hidden md:flex flex-col gap-4 h-full">
          {property.images.slice(1, 3).map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden h-1/2">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Key Details */}
          <div className="flex flex-wrap gap-8 py-6 border-y border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-surface rounded-full"><BedDouble className="w-6 h-6 text-gray-700" /></div>
              <div>
                <p className="text-sm text-gray-500">Bedrooms</p>
                <p className="font-semibold text-lg">{property.bedrooms}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-surface rounded-full"><Bath className="w-6 h-6 text-gray-700" /></div>
              <div>
                <p className="text-sm text-gray-500">Bathrooms</p>
                <p className="font-semibold text-lg">{property.bathrooms}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-surface rounded-full"><Square className="w-6 h-6 text-gray-700" /></div>
              <div>
                <p className="text-sm text-gray-500">Area</p>
                <p className="font-semibold text-lg">{property.areaSqft.toLocaleString()} sqft</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{property.description}</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.amenities.map(a => (
                <div key={a} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Location Map</h3>
            <div className="h-[400px] rounded-2xl overflow-hidden border">
              <MapViewer 
                center={property.coordinates || {lat: 25.2, lng: 55.2}} 
                zoom={14} 
                markers={[{lat: property.coordinates?.lat || 25.2, lng: property.coordinates?.lng || 55.2}]} 
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-surface rounded-2xl p-6 sticky top-28 border border-gray-100">
            <h3 className="text-xl font-bold mb-6">Contact Agent</h3>
            <div className="flex items-center gap-4 mb-6">
              <img src={property.agent.photoUrl} alt={property.agent.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
              <div>
                <p className="font-bold text-lg">{property.agent.name}</p>
                <p className="text-sm text-primary font-medium">{property.agent.agency}</p>
              </div>
            </div>
            <div className="space-y-3">
              <Button className="w-full" size="lg">Call Now</Button>
              <Button className="w-full bg-green-500 hover:bg-green-600" size="lg">WhatsApp</Button>
              <Button variant="outline" className="w-full" size="lg">Email Agent</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
