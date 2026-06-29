import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, BookOpen, PieChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

export function MarketInsights() {
  const insights = [
    {
      id: 1,
      title: "Dubai Real Estate Market Report Q1 2026",
      category: "Market Report",
      icon: <PieChart className="w-5 h-5 text-primary" />,
      date: "April 15, 2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Top 5 Areas for Highest Rental Yields in Dubai",
      category: "Investment Guide",
      icon: <TrendingUp className="w-5 h-5 text-primary" />,
      date: "April 10, 2026",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "A Comprehensive Guide to Buying Off-Plan Properties",
      category: "Buying Guide",
      icon: <BookOpen className="w-5 h-5 text-primary" />,
      date: "April 5, 2026",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=600&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-surface border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Property Market Insights</h2>
            <p className="text-gray-600 max-w-2xl">Stay informed with the latest trends, market reports, and expert guides.</p>
          </div>
          <Link href="/insights" className="hidden md:flex items-center text-primary font-semibold hover:underline gap-1">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <Card key={insight.id} className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-sm bg-white cursor-pointer group">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img src={insight.image} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm text-gray-800">
                  {insight.icon} {insight.category}
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">{insight.date}</p>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">{insight.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
