'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import Navigation from './Navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:03330065650" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <FaPhone className="text-sm" />
                <span>0333 006 5650</span>
              </a>
              <div className="hidden md:flex items-center gap-2">
                <FaMapMarkerAlt className="text-sm" />
                <span>OH Pharmacy, River House, 1 Maidstone Road, Sidcup, DA14 5RH</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                Facebook
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-90 transition-opacity">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-display font-bold text-primary">
              OH Pharmacy
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Navigation />
            <Link 
              href="/book-services" 
              className="px-6 py-2 bg-gradient-primary text-white rounded-md font-medium hover:opacity-90 transition-opacity shadow-md"
            >
              Book Online
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4">
            <Navigation mobile />
            <Link 
              href="/book-services" 
              className="block mt-4 px-6 py-2 bg-gradient-primary text-white rounded-md font-medium text-center hover:opacity-90 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

