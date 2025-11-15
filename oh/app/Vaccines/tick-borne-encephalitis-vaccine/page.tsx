import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Tick-Borne Encephalitis Vaccine - OH Pharmacy',
  description: 'Tick-Borne Encephalitis vaccination.',
};

export default function TickBorneEncephalitisVaccinePage() {
  const service = getServiceBySlug('/Vaccines/tick-borne-encephalitis-vaccine');
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}

