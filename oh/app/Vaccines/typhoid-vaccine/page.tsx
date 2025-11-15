import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Typhoid Vaccine - OH Pharmacy',
  description: 'Typhoid vaccination for travel protection.',
};

export default function TyphoidVaccinePage() {
  const service = getServiceBySlug('/Vaccines/typhoid-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

