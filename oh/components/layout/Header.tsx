'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PharmacyNavigation, healthServices, vaccinationServices, consultationServices } from '@/components/ui/pharmacy-navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background-light mx-auto fixed w-full z-20 top-0 start-0 border-b border-border relative">
      <div className="flex items-center justify-between py-8 mx-auto  px-4 p-4">
        {/* Logo - Left */}
        <Link href="/" className="items-center space-x-3 rtl:space-x-reverse">
          <div className="text-primary">
             <img 
                src="/images/oh-logo.png" 
                alt="OH Pharmacy Logo"
                className="h-10 w-auto" 
              />

          </div>
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex">
          <PharmacyNavigation />
        </div>

        {/* Right Side - Book Appointment + Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Book Appointment Button - Desktop */}
          <div className="hidden md:block">
            <Link href="/book-services" className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white h-12 px-6 py-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-collapse-toggle="mega-menu-full"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text-light rounded-lg lg:hidden hover:bg-secondary/10 hover:text-text-light focus:outline-none focus:ring-2 focus:ring-border"
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
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background-light w-full">
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
                href="/Services"
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
                className="block mt-4 px-6 py-3 bg-primary text-white rounded-full border border-primary text-center hover:bg-primary/90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>

              <div className="pt-6 border-t border-border">
                <p className="text-sm font-semibold text-text-dark uppercase tracking-wide mb-2">Health Services</p>
                <div className="grid grid-cols-1 gap-2">
                  {healthServices.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="text-sm text-text-light hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm font-semibold text-text-dark uppercase tracking-wide mb-2">Vaccinations</p>
                <div className="grid grid-cols-1 gap-2">
                  {vaccinationServices.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="text-sm text-text-light hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm font-semibold text-text-dark uppercase tracking-wide mb-2">Consultations</p>
                <div className="grid grid-cols-1 gap-2">
                  {consultationServices.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="text-sm text-text-light hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}

