"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, Menu, X, User, Search, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Luxe<span className="text-primary">Estate</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="/properties?type=Buy" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Buy</Link>
              <Link href="/properties?type=Rent" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Rent</Link>
              <Link href="/projects" className="text-sm font-medium text-white/90 hover:text-white transition-colors">New Projects</Link>
              <Link href="/communities" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Communities</Link>
              <Link href="/agents" className="text-sm font-medium text-white/90 hover:text-white transition-colors">Agents</Link>
            </div>
          </div>

          {/* Action Icons Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-white/90 hover:text-white transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <Link href="/dashboard">
              <Button variant="outline" className="gap-2 rounded-full border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <User className="h-4 w-4" />
                <span>Log In</span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/10 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-lg">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link href="/properties?type=Buy" className="block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white">Buy</Link>
            <Link href="/properties?type=Rent" className="block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white">Rent</Link>
            <Link href="/projects" className="block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white">New Projects</Link>
            <Link href="/communities" className="block rounded-md px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white">Communities</Link>
            <div className="mt-4 px-3">
              <Button className="w-full justify-center bg-white text-black hover:bg-gray-100">Log In</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
