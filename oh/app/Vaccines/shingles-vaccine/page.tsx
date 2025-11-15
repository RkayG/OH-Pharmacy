import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Shingles Vaccine - OH Pharmacy',
  description: 'Shingles (Herpes Zoster) vaccination.',
};

export default function ShinglesVaccinePage() {
  const service = getServiceBySlug('/Vaccines/shingles-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

