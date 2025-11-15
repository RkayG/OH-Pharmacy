import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Private Weight Loss Service - OH Pharmacy',
  description: 'Begin your weight loss journey with our private service. We offer online consultations, expert support, and regular check-in appointments.',
};

export default function WeightLossServicePage() {
  const service = getServiceBySlug('/weight-loss-service');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

