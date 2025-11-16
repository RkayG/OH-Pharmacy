'use client';

import { useState, useMemo } from 'react';
import { Service } from '@/lib/services';
import ServiceGrid from './ServiceGrid';
import { FaSearch } from 'react-icons/fa';

interface ServiceListProps {
  services: Service[];
  showBooking?: boolean;
  categoryName?: string;
}

export default function ServiceList({ services, showBooking = true, categoryName }: ServiceListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [services, searchTerm]);

  return (
    <div>
      {/* Search */}
      <div className="mb-8">
        <div className="relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${categoryName || 'services'}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#005A5B] focus:border-transparent"
          />
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

