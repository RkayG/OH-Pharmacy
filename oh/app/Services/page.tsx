import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ServiceFilter from '@/components/services/ServiceFilter';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Our Services - OH Pharmacy',
  description: 'Find out more about our range of private services. We offer access to expert healthcare services.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        description="Find out more about our range of private services. We offer access to expert healthcare services."
      />

      <section className="py-16 bg-white-off">
        <div className="container mx-auto px-4">
          <ServiceFilter services={services} showBooking={true} />
        </div>
      </section>
    </>
  );
}

