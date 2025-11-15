'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface NavigationProps {
  mobile?: boolean;
}

export default function Navigation({ mobile = false }: NavigationProps) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Travel Clinic',
      href: '/Travel-Clinic/travel-vaccination',
      dropdown: [
        { label: 'Travel Vaccination', href: '/Travel-Clinic/travel-vaccination' },
        { label: 'Antimalarials', href: '/Travel-Clinic/antimalarials-sidcup' },
        { label: 'Special Vaccination', href: '/Travel-Clinic/special-vaccination' },
        { label: 'Hajj & Umrah', href: '/Travel-Clinic/hajj-and-umrah-vaccination' },
        { label: 'COVID Vaccination', href: '/Travel-Clinic/private-covid-vaccination-service' },
        { label: 'Vaccine Prices', href: '/Travel-Clinic/vaccine-prices' },
      ],
    },
    {
      label: 'Vaccines',
      href: '/Vaccines/travel-vaccines',
      dropdown: [
        { label: 'All Travel Vaccines', href: '/Vaccines/travel-vaccines' },
        { label: 'Cholera', href: '/Vaccines/cholera-vaccine' },
        { label: 'Dengue', href: '/Vaccines/dengue-vaccine' },
        { label: 'DTP', href: '/Vaccines/diphtheria-tetanus-polio-dtp-vaccine' },
        { label: 'Hepatitis A', href: '/Vaccines/hepatitis-a-vaccine' },
        { label: 'Hepatitis B', href: '/Vaccines/hepatitis-b-vaccine' },
        { label: 'HPV', href: '/Vaccines/hpv-vaccination' },
        { label: 'Japanese Encephalitis', href: '/Vaccines/japanese-encephalitis-vaccine' },
        { label: 'Meningitis ACWY', href: '/Vaccines/meningitis-acwy-vaccine' },
        { label: 'Meningitis B', href: '/Vaccines/meningitis-b-vaccine' },
        { label: 'Rabies', href: '/Vaccines/rabies-vaccine' },
        { label: 'Shingles', href: '/Vaccines/shingles-vaccine' },
        { label: 'Tick-Borne Encephalitis', href: '/Vaccines/tick-borne-encephalitis-vaccine' },
        { label: 'Typhoid', href: '/Vaccines/typhoid-vaccine' },
      ],
    },
    { label: 'Eye Care', href: '/eye-care' },
    {
      label: 'Services',
      href: '/Services/services',
      dropdown: [
        { label: 'All Services', href: '/Services/services' },
        { label: 'Vitamin B12', href: '/Services/vitamin-b12' },
        { label: 'Earwax Removal', href: '/Services/earwax-removal-service' },
        { label: 'Minor Ailment Clinic', href: '/Services/minor-ailement-clinic' },
        { label: 'Private Prescriptions', href: '/Services/private-prescriptions' },
        { label: 'Morning-After Pill', href: '/Services/morning-after-pill' },
        { label: 'Erectile Dysfunction', href: '/Services/erectile-dysfunction' },
        { label: 'Hair Loss', href: '/Services/hair-loss' },
        { label: 'Contact Us', href: '/Services/contact-us' },
      ],
    },
    { label: 'Contact', href: '/Services/contact-us' },
  ];

  const baseClasses = mobile
    ? 'flex flex-col gap-4'
    : 'flex items-center gap-8';

  return (
    <nav className={baseClasses}>
      {navItems.map((item) => {
        if (item.dropdown) {
          return (
            <div key={item.label} className="relative">
              <button
                className={`flex items-center gap-1 px-3 py-2 font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-text-dark hover:text-primary'
                }`}
                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
              >
                {item.label}
                <FaChevronDown
                  className={`text-xs transition-transform ${
                    openDropdown === item.label ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {(openDropdown === item.label || mobile) && (
                <div
                  className={`${
                    mobile
                      ? 'mt-2 ml-4'
                      : 'absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg py-2 min-w-[200px]'
                  }`}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(subItem.href)
                          ? 'text-primary font-medium'
                          : 'text-text-dark hover:text-primary hover:bg-white-off'
                      }`}
                      onClick={() => mobile && setOpenDropdown(null)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-2 font-medium transition-colors ${
              isActive(item.href)
                ? 'text-primary'
                : 'text-text-dark hover:text-primary'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

