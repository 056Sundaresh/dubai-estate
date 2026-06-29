import React from 'react';
import Link from 'next/link';
import { Building, Calendar, Percent } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function OffPlanProjects() {
  const projects = [
    {
      id: "p1",
      title: "Emaar Beachfront",
      developer: "Emaar",
      completion: "Q4 2025",
      startingPrice: "2,500,000",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=80",
      roi: "8%"
    },
    {
      id: "p2",
      title: "Atlantis The Royal Residences",
      developer: "Kerzner",
      completion: "Ready",
      startingPrice: "8,000,000",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&auto=format&fit=crop&q=80",
      roi: "6%"
    },
    {
      id: "p3",
      title: "Damac Hills 2",
      developer: "Damac",
      completion: "Q2 2026",
      startingPrice: "1,200,000",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&auto=format&fit=crop&q=80",
      roi: "7.5%"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">New Project Launches</h2>
            <p className="text-gray-600 max-w-2xl">Discover the latest off-plan projects from top developers with attractive payment plans.</p>
          </div>
          <Link href="/projects" className="hidden md:block text-primary font-semibold hover:underline">
            View All Projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded text-xs font-semibold">Off-Plan</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4 border-b pb-4">
                  <div className="flex items-center gap-1"><Building className="w-4 h-4"/> {project.developer}</div>
                  <div className="flex items-center gap-1"><Calendar className="w-4 h-4"/> {project.completion}</div>
                  <div className="flex items-center gap-1"><Percent className="w-4 h-4"/> {project.roi} ROI</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Starting From</p>
                    <p className="text-lg font-bold text-primary">AED {project.startingPrice}</p>
                  </div>
                  <Button variant="outline" size="sm">Get Details</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
