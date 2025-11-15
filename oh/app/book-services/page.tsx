import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ServiceGrid from '@/components/services/ServiceGrid';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Book Services Online - OH Pharmacy',
  description: 'Book our expert healthcare services online 24/7. Travel vaccinations, weight loss programmes, and more. Book your appointment in minutes.',
};

export default function BookServicesPage() {
  // Filter only bookable services (those with booking URLs or all services)
  const bookableServices = services.filter(service => 
    service.bookingUrl || service.category === 'general' || service.category === 'travel'
  );

  return (
    <>
      <Hero
        title="Book Our Services Online"
        subtitle="24/7 Online Booking"
        description="Book expert healthcare services from the comfort of your home. Simply visit our website and book the service you require in minutes."
      />

      <section className="py-16 bg-white-off">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-4">
              Available Services
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Select a service below to view details and book your appointment online.
            </p>
          </div>

          <ServiceGrid services={bookableServices} showBooking={true} />
        </div>
      </section>
    </>
  );
}

