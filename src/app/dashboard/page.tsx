import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { properties } from '@/lib/mock-data';
import { PropertyCard } from '@/components/properties/PropertyCard';
import { Heart, Home, Bell, Settings, LogOut } from 'lucide-react';

export default function DashboardPage() {
  const savedProperties = properties.slice(0, 2);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-20">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-2">
          <div className="p-4 bg-surface rounded-xl mb-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">JD</div>
            <div>
              <p className="font-bold">John Doe</p>
              <p className="text-xs text-gray-500">Buyer</p>
            </div>
          </div>
          <button className="flex items-center gap-3 w-full p-3 bg-primary text-white rounded-lg font-medium">
            <Home className="w-5 h-5" /> Dashboard
          </button>
          <button className="flex items-center gap-3 w-full p-3 text-gray-600 hover:bg-surface rounded-lg font-medium transition-colors">
            <Heart className="w-5 h-5" /> Saved Properties
          </button>
          <button className="flex items-center gap-3 w-full p-3 text-gray-600 hover:bg-surface rounded-lg font-medium transition-colors">
            <Bell className="w-5 h-5" /> Alerts
          </button>
          <button className="flex items-center gap-3 w-full p-3 text-gray-600 hover:bg-surface rounded-lg font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </button>
          <div className="pt-6 mt-6 border-t">
            <button className="flex items-center gap-3 w-full p-3 text-red-500 hover:bg-red-50 rounded-lg font-medium transition-colors">
              <LogOut className="w-5 h-5" /> Log Out
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-4 bg-primary/10 text-primary rounded-full"><Heart className="w-6 h-6" /></div>
                <div>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-sm text-gray-500">Saved Properties</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-4 bg-primary/10 text-primary rounded-full"><Search className="w-6 h-6" /></div>
                <div>
                  <p className="text-3xl font-bold">4</p>
                  <p className="text-sm text-gray-500">Saved Searches</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-4 bg-primary/10 text-primary rounded-full"><Bell className="w-6 h-6" /></div>
                <div>
                  <p className="text-3xl font-bold">2</p>
                  <p className="text-sm text-gray-500">Active Alerts</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Recently Saved Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedProperties.map(p => <PropertyCard key={p.id} property={p} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Temporary icon for Search in dashboard
function Search(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
