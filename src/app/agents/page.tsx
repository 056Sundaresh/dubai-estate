import React from 'react';
import { agents } from '@/lib/mock-data';
import { Star, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AgentsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Real Estate Experts</h1>
        <p className="text-lg text-gray-600 max-w-2xl">Find the perfect agent to help you buy, sell, or rent your property. Our verified professionals have deep knowledge of the Dubai market.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <img src={agent.photoUrl} alt={agent.name} className="w-20 h-20 rounded-full object-cover border-2 border-primary/20" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                <p className="text-primary font-medium text-sm">{agent.agency}</p>
                <div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{agent.rating}</span>
                  <span>({agent.reviewsCount})</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600 bg-surface p-3 rounded-lg">
                <Phone className="w-4 h-4" />
                <span>{agent.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 bg-surface p-3 rounded-lg">
                <Mail className="w-4 h-4" />
                <span className="truncate">{agent.email}</span>
              </div>
            </div>

            <Button className="w-full">View Full Profile</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
