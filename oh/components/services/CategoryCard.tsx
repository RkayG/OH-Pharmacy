import Link from 'next/link';
import { Service } from '@/lib/services';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Service['category'];
  label: string;
  description: string;
  serviceCount: number;
  image?: string;
}

const categoryImages: Record<Service['category'], string> = {
  'clinical': '/images/clinical.jpg',
  'vaccination': '/images/vaccination.jpg',
  'travel': '/images/travel.jpg',
  'prescribing': '/images/prescribing.jpg',
  'medication': '/images/medication.jpg',
  'children': '/images/children.jpg',
  'testing': '/images/testing.jpg',
  'womens-health': '/images/women.jpg',
  'lifestyle': '/images/healthy.jpg',
  'weight-loss': '/images/weight-loss.jpg',
  'certificates': '/images/cert.jpg',
  'additional': '/images/additional.jpg',
};

export default function CategoryCard({ category, label, description, serviceCount, image }: CategoryCardProps) {
  const categorySlug = category === 'weight-loss' ? 'weight-loss' : category;
  const categoryImage = image || categoryImages[category]; // fallback to category image

  return (
    <Link
      href={`/Services/category/${categorySlug}`}
      className="flex flex-col overflow-clip rounded-xl border border-gray-200 hover:shadow-lg transition-shadow bg-white group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={categoryImage}
          alt={label}
          className="aspect-[16/9] h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </div>
      <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 flex flex-col flex-grow">
        <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6 text-[#111418]">{label}</h3>
        <p className="text-[#617589] lg:text-lg mb-6 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-[#617589]">
            {serviceCount} service{serviceCount !== 1 ? 's' : ''}
          </span>
          <span className="group inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors px-6 py-3 text-sm">
            View Services
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

