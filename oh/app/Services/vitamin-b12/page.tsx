import { Metadata } from 'next';
import ServiceDetail from '@/components/services/ServiceDetail';
import { getServiceBySlug } from '@/lib/services';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Private Vitamin B12 Injection Service - OH Pharmacy',
  description: 'Book your private vitamin B12 injection at a date and time that suits you. Once your order is approved, visit us at OH Pharmacy to get the injection.',
};

export default function VitaminB12Page() {
  const service = getServiceBySlug('/Services/vitamin-b12');
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

