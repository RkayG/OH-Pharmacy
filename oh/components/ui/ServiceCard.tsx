import Image from 'next/image';
import Link from 'next/link';
import { Service } from '@/lib/services';
import { Button } from '../../components/ui/Button';
import Card from './Card';
import { FaArrowRight } from 'react-icons/fa';

interface ServiceCardProps {
  service: Service;
  showBooking?: boolean;
  className?: string;
}

export default function ServiceCard({ service, showBooking = true, className }: ServiceCardProps) {
  return (
    <Card hover className={className}>
      <div className="flex flex-col h-full">
        {/* Image */}
        {service.image ? (
          <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden bg-gray-200">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-48 mb-4 rounded-md bg-gradient-primary flex items-center justify-center">
            <span className="text-white text-4xl font-display font-bold">
              {service.title.charAt(0)}
            </span>
          </div>
        )}
        
        {/* Content */}
        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-display font-semibold text-text-dark mb-2">
            {service.title}
          </h3>
          <p className="text-text-light mb-4 flex-grow">
            {service.description}
          </p>
          
          {/* Price */}
          {service.price && (
            <p className="text-primary font-semibold mb-4">
              From {service.price}
            </p>
          )}
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <Link
              href={service.slug}
              className="flex items-center gap-2 text-primary font-medium hover:underline transition-colors"
            >
              More Details
              <FaArrowRight className="text-sm" />
            </Link>
            {showBooking && service.bookingUrl && (
              <Button
                href={service.bookingUrl}
                external
                variant="primary"
                size="sm"
                className="w-full sm:w-auto"
              >
                Book Online
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

