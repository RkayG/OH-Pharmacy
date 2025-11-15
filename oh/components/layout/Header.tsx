'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PharmacyNavigation } from '@/components/ui/pharmacy-navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background-light fixed w-full z-20 top-0 start-0 border-b border-border relative">
      <div className="flex items-center justify-between py-8 mx-auto max-w-screen-xl p-4">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="text-primary">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-text-light">OH Pharmacy</span>
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden md:flex">
          <PharmacyNavigation />
        </div>

        {/* Right Side - Book Appointment + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Book Appointment Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/book-services" className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text-light rounded-lg md:hidden hover:bg-secondary/10 hover:text-text-light focus:outline-none focus:ring-2 focus:ring-border"
            aria-controls="mega-menu-full"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background-light">
            <div className="px-4 py-4">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="block py-2 px-3 text-text-light hover:text-primary border-b border-border hover:bg-secondary/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/Services/services"
                  className="block py-2 px-3 text-text-light hover:text-primary border-b border-border hover:bg-secondary/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/Travel-Clinic/travel-vaccination"
                  className="block py-2 px-3 text-text-light hover:text-primary border-b border-border hover:bg-secondary/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Travel Clinic
                </Link>
                <Link
                  href="/Services/services"
                  className="block py-2 px-3 text-text-light hover:text-primary border-b border-border hover:bg-secondary/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/Services/contact-us"
                  className="block py-2 px-3 text-text-light hover:text-primary border-b border-border hover:bg-secondary/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  href="/book-services"
                  className="block mt-4 px-6 py-3 bg-primary text-white rounded-lg font-medium text-center hover:bg-primary/90 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </nav>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

