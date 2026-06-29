import React from 'react';
import Link from 'next/link';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-surface pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Intro */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight">
                Luxe<span className="text-primary">Estate</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Premium real estate marketplace in Dubai. Find luxury properties, off-plan projects, and investment opportunities with our trusted platform.
            </p>
            <div className="flex gap-4 pt-2 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Properties</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Villas for Sale</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Apartments for Rent</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Off-Plan Projects</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Luxury Penthouses</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Commercial Properties</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Our Agents</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Support</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">Level 42, Emirates Towers, Sheikh Zayed Road, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">+971 800 LUXE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400 text-sm">hello@luxeestate.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LuxeEstate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
