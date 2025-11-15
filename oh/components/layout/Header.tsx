'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-background-light fixed w-full z-20 top-0 start-0 border-b border-border">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="text-primary">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-text-light">OH Pharmacy</span>
        </Link>

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

        <div id="mega-menu-full" className={`items-center justify-between ${mobileMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link href="/" className="block py-2 px-3 text-text-light hover:text-primary border-b border-border hover:bg-secondary/10 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0" aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className="flex items-center justify-between w-full py-2 px-3 font-medium text-text-light border-b border-border md:w-auto hover:bg-secondary/10 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services
                <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
                </svg>
              </button>
            </li>
            <li>
              <Link href="/Travel-Clinic/travel-vaccination" className="block py-2 px-3 text-text-light hover:text-primary border-b border-border hover:bg-secondary/10 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                Travel Clinic
              </Link>
            </li>
            <li>
              <Link href="/Services/services" className="block py-2 px-3 text-text-light hover:text-primary border-b border-border hover:bg-secondary/10 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                About
              </Link>
            </li>
            <li>
              <Link href="/Services/contact-us" className="block py-2 px-3 text-text-light hover:text-primary border-b border-border hover:bg-secondary/10 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {dropdownOpen && (
        <div id="mega-menu-full-dropdown" className="mt-1 bg-background-light border-border shadow-sm border-y">
          <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-text-light sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul aria-labelledby="mega-menu-full-dropdown-button">
              <li>
                <Link href="/Services/vitamin-b12" className="block p-3 rounded-lg hover:bg-secondary/10">
                  <div className="font-semibold">Vitamin B12 Injections</div>
                  <span className="text-sm text-text-muted-light">Essential vitamin injections for energy and wellness.</span>
                </Link>
              </li>
              <li>
                <Link href="/Services/earwax-removal-service" className="block p-3 rounded-lg hover:bg-secondary/10">
                  <div className="font-semibold">Earwax Removal</div>
                  <span className="text-sm text-text-muted-light">Safe and professional earwax removal service.</span>
                </Link>
              </li>
              <li>
                <Link href="/Services/private-prescriptions" className="block p-3 rounded-lg hover:bg-secondary/10">
                  <div className="font-semibold">Private Prescriptions</div>
                  <span className="text-sm text-text-muted-light">Convenient private prescription services.</span>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/Travel-Clinic/travel-vaccination" className="block p-3 rounded-lg hover:bg-secondary/10">
                  <div className="font-semibold">Travel Vaccinations</div>
                  <span className="text-sm text-text-muted-light">Complete travel health protection.</span>
                </Link>
              </li>
              <li>
                <Link href="/Services/minor-ailement-clinic" className="block p-3 rounded-lg hover:bg-secondary/10">
                  <div className="font-semibold">Minor Ailments Clinic</div>
                  <span className="text-sm text-text-muted-light">Quick consultations for common health issues.</span>
                </Link>
              </li>
              <li>
                <Link href="/weight-loss-service" className="block p-3 rounded-lg hover:bg-secondary/10">
                  <div className="font-semibold">Weight Loss Services</div>
                  <span className="text-sm text-text-muted-light">Professional weight management support.</span>
                </Link>
              </li>
            </ul>
            <ul className="hidden md:block">
              <li>
                <Link href="/eye-care" className="block p-3 rounded-lg hover:bg-secondary/10">
                  <div className="font-semibold">Eye Care Services</div>
                  <span className="text-sm text-text-muted-light">Comprehensive eye care and optical services.</span>
                </Link>
              </li>
              <li>
                <Link href="/Services/erectile-dysfunction" className="block p-3 rounded-lg hover:bg-secondary/10">
                  <div className="font-semibold">Erectile Dysfunction</div>
                  <span className="text-sm text-text-muted-light">Discreet consultations and treatments.</span>
                </Link>
              </li>
              <li>
                <Link href="/Services/hair-loss" className="block p-3 rounded-lg hover:bg-secondary/10">
                  <div className="font-semibold">Hair Loss Treatments</div>
                  <span className="text-sm text-text-muted-light">Effective solutions for hair restoration.</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

