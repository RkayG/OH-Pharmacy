import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ServiceGrid from '@/components/services/ServiceGrid';
import { getServicesByCategory } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Travel Vaccines - OH Pharmacy',
  description: 'Comprehensive travel vaccination services. Get protected before your trip.',
};

export default function TravelVaccinesPage() {
  const vaccines = getServicesByCategory('vaccination');

  return (
    <>
      <Hero
        title="Travel Vaccines"
        description="Comprehensive travel vaccination services. Get protected before your trip."
      />

      <section className="py-16 bg-white-off">
        <div className="container mx-auto px-4">
          <ServiceGrid services={vaccines} showBooking={false} />
        </div>
      </section>
    </>
  );
}

