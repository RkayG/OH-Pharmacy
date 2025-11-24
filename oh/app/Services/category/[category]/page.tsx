import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import ServiceList from '@/components/services/ServiceList';
import { getServicesByCategory } from '@/lib/services';
import { Service } from '@/lib/services';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/ui/Breadcrumb';

const categoryMap: Record<
  string,
  { label: string; description: string; image: string }
> = {
  clinical: {
    label: "Clinical & Health Services",
    description:
      "Comprehensive health assessments, blood pressure checks, cholesterol testing, and more to help you monitor and manage your wellbeing.",
    image: "https://source.unsplash.com/1600x900/?healthcare,clinic",
  },
  vaccination: {
    label: "Vaccinations & Immunisation",
    description:
      "Flu vaccinations, travel vaccines, and routine immunisations to keep you and your family protected.",
    image: "https://source.unsplash.com/1600x900/?vaccine,immunisation",
  },
  travel: {
    label: "Travel Health Services",
    description:
      "Expert travel health consultations, antimalarials, and travel vaccination certificates for your journey.",
    image: "https://source.unsplash.com/1600x900/?travel,health",
  },
  prescribing: {
    label: "Private Prescribing & Consultations",
    description:
      "Pharmacist prescriber consultations for UTIs, ear infections, skin conditions, and more.",
    image: "https://source.unsplash.com/1600x900/?doctor,consultation",
  },
  medication: {
    label: "Medication-Related Services",
    description:
      "Private prescriptions, repeat prescription collection, and emergency medication supply.",
    image: "https://source.unsplash.com/1600x900/?pharmacy,medication",
  },
  children: {
    label: "Children & Family Services",
    description:
      "Childhood vaccinations, head lice treatment, and newborn health support for your family.",
    image: "/images/children.jpg",
  },
  testing: {
    label: "Testing & Screening Services",
    description:
      "STD/STI testing, blood tests, hormone testing, and comprehensive health screening.",
    image: "https://source.unsplash.com/1600x900/?laboratory,test",
  },
  "womens-health": {
    label: "Women’s Health Services",
    description:
      "Contraception, UTI treatment, menopause consultations, and pregnancy testing.",
    image: "https://source.unsplash.com/1600x900/?women,health",
  },
  lifestyle: {
    label: "Lifestyle & Wellness Services",
    description:
      "Smoking cessation, vitamin B12 injections, earwax removal, and healthy lifestyle coaching.",
    image: "https://source.unsplash.com/1600x900/?wellness,healthy-lifestyle",
  },
  "weight-loss": {
    label: "Weight Loss Services",
    description:
      "Injectable weight loss programmes with expert support and regular check-ins.",
    image: "https://source.unsplash.com/1600x900/?weightloss,fitness",
  },
  certificates: {
    label: "Certificates & Workplace Services",
    description:
      "Fit-to-fly certificates, occupational health vaccinations, and workplace medicals.",
    image: "https://source.unsplash.com/1600x900/?certificate,workplace",
  },
  additional: {
    label: "Additional Services",
    description:
      "Needle disposal, mobility aids, eye care, and other essential pharmacy services.",
    image: "https://source.unsplash.com/1600x900/?healthcare,services",
  },
};


interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  // Return all valid category slugs
  return Object.keys(categoryMap).map((category) => ({
    category: category,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = categoryMap[category];
  
  if (!categoryInfo) {
    return {
      title: 'Category Not Found - OH Health + Pharmacy',
    };
  }

  return {
    title: `${categoryInfo.label} - OH Health + Pharmacy`,
    description: categoryInfo.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  // Handle weight-loss category slug
  const categorySlug = category === 'weight-loss' ? 'weight-loss' : category;
  const categoryInfo = categoryMap[categorySlug];

  if (!categoryInfo) {
    notFound();
  }

  const categoryServices = getServicesByCategory(categorySlug as Service['category']);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/Services' },
    { label: categoryInfo.label },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <Hero
          title={categoryInfo.label}
          description={categoryInfo.description}
          image={categoryInfo.image}   // ← dynamic image
        />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceList
            services={categoryServices}
            showBooking={true}
            categoryName={categoryInfo.label}
          />
        </div>
      </section>
    </>
  );
}
