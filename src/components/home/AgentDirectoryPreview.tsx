import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { agents } from '@/lib/mock-data';
import { Button } from '@/components/ui/Button';

export function AgentDirectoryPreview() {
  // Take first 4 agents for preview
  const displayAgents = agents.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Top Agents</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Work with the most experienced and highest-rated real estate professionals in Dubai.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayAgents.map((agent) => (
            <div key={agent.id} className="bg-surface rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-sm">
                <img src={agent.photoUrl} alt={agent.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{agent.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{agent.agency}</p>
              
              <div className="flex items-center justify-center gap-1 mb-4">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{agent.rating}</span>
                <span className="text-gray-500 text-sm">({agent.reviewsCount} reviews)</span>
              </div>

              <Link href={`/agents/${agent.id}`}>
                <Button variant="outline" className="w-full rounded-full bg-white hover:bg-gray-50 border-gray-200">View Profile</Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/agents">
            <Button size="lg" className="rounded-full px-8">Browse All Agents</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
