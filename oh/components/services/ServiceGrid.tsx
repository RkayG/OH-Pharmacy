import { Service } from '@/lib/services';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceGridProps {
  services: Service[];
  showBooking?: boolean;
}

export default function ServiceGrid({ services, showBooking = true }: ServiceGridProps) {
  if (services.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-light text-lg">No services found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="flex flex-col overflow-clip rounded-xl border border-gray-200 hover:shadow-lg transition-shadow bg-white"
        >
          <div>
            <img
              src={service.image || 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'}
              alt={service.title}
              className="aspect-[16/9] h-full w-full object-cover object-center"
            />
          </div>
          <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 flex flex-col flex-grow">
            <h3 className="mb-3 text-lg font-semibold md:mb-4 lg:mb-6 text-[#111418]">
              {service.title}
            </h3>
            <p className="text-[#617589] mb-6 flex-grow">
              {service.description}
            </p>
            {service.price && (
              <p className="mb-4 text-base font-semibold text-[#005A5B]">
                From {service.price}
              </p>
            )}
            {showBooking && service.bookingUrl ? (
              <a
                href={service.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center text-sm font-semibold text-[#005A5B] hover:text-[#005A5B]/80 transition-colors mt-auto"
              >
                Book Online
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </a>
            ) : (
              <Link
                href={service.slug}
                className="group inline-flex items-center text-sm font-semibold text-[#005A5B] hover:text-[#005A5B]/80 transition-colors mt-auto"
              >
                Learn More
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

