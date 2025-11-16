import Link from 'next/link';
import { Service } from '@/lib/services';

interface ServiceCardProps {
  service: Service;
  showBooking?: boolean;
  className?: string;
}

export default function ServiceCard({ service, showBooking = true, className }: ServiceCardProps) {
  return (
    <div className={`relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-all duration-300 hover:shadow-lg ${className || ''}`}>
      {/* Image Section */}
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gray-200 bg-clip-border shadow-lg shadow-[#005A5B]/40">
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-[#005A5B] to-[#005A5B]/80">
            <span className="text-white text-4xl font-bold">
              {service.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-[#111418] antialiased">
          {service.title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-[#617589] antialiased">
          {service.description}
        </p>
        {service.price && (
          <p className="mt-3 block font-sans text-base font-semibold text-[#005A5B]">
            From {service.price}
          </p>
        )}
      </div>

      {/* Button Section */}
      <div className="p-6 pt-0">
        {showBooking && service.bookingUrl ? (
          <a
            href={service.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full select-none rounded-lg bg-[#005A5B] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#005A5B]/20 transition-all hover:shadow-lg hover:shadow-[#005A5B]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Book Online
          </a>
        ) : (
          <Link
            href={service.slug}
            className="block w-full select-none rounded-lg bg-[#005A5B] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#005A5B]/20 transition-all hover:shadow-lg hover:shadow-[#005A5B]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Read More
          </Link>
        )}
      </div>
    </div>
  );
}

