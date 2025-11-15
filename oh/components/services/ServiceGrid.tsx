import { Service } from '@/lib/services';
import ServiceCard from '@/components/ui/ServiceCard';

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} showBooking={showBooking} />
      ))}
    </div>
  );
}

