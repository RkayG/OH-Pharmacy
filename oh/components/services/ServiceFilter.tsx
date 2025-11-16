'use client';

import { useState, useMemo } from 'react';
import { Service } from '@/lib/services';
import ServiceGrid from './ServiceGrid';
import { FaSearch } from 'react-icons/fa';

interface ServiceFilterProps {
  services: Service[];
  showBooking?: boolean;
}

export default function ServiceFilter({ services, showBooking = true }: ServiceFilterProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Service['category'] | 'all'>('all');

  const categories: Array<{ value: Service['category'] | 'all'; label: string }> = [
    { value: 'all', label: 'All Services' },
    { value: 'general', label: 'General Services' },
    { value: 'travel', label: 'Travel & Vaccination' },
    { value: 'vaccine', label: 'Vaccines' },
    { value: 'weight-loss', label: 'Weight Loss' },
  ];

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [services, searchTerm, selectedCategory]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#005A5B] focus:border-transparent"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                selectedCategory === category.value
                  ? 'bg-[#005A5B] text-white'
                  : 'bg-white text-[#111418] hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div>
        <p className="text-[#617589] mb-4">
          Showing {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}
        </p>
        <ServiceGrid services={filteredServices} showBooking={showBooking} />
      </div>
    </div>
  );
}

