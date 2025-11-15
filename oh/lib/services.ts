export interface Service {
  id: string;
  title: string;
  slug: string;
  category: 'general' | 'travel' | 'vaccine' | 'weight-loss';
  description: string;
  fullDescription?: string;
  image?: string;
  price?: string;
  bookingUrl?: string;
  features?: string[];
}

export const services: Service[] = [
  // General Services
  {
    id: 'vitamin-b12',
    title: 'Vitamin B12 Injections',
    slug: '/Services/vitamin-b12',
    category: 'general',
    description: 'Private Vitamin B12 injection service. Book your appointment online.',
    fullDescription: 'We offer a private Vitamin B12 injection service at our pharmacy. Please complete your order online to get the injection at the pharmacy.',
    price: '£29',
    bookingUrl: 'https://www.treatlocal.co.uk/online-booking/sidcup/vitamin-b12-injection-service/appointment',
  },
  {
    id: 'earwax-removal',
    title: 'Earwax Removal',
    slug: '/Services/earwax-removal-service',
    category: 'general',
    description: 'Microsuction earwax removal service. Safe and professional.',
    fullDescription: 'We offer a private microsuction earwax removal service in Sidcup at Rifaray Pharmacy. Book your appointment online.',
  },
  {
    id: 'minor-ailment',
    title: 'Minor Ailment Clinic',
    slug: '/Services/minor-ailement-clinic',
    category: 'general',
    description: 'Private minor ailment clinic for common health issues.',
    fullDescription: 'Our private minor ailment clinic provides expert advice and treatment for common health issues.',
  },
  {
    id: 'private-prescriptions',
    title: 'Private Prescriptions',
    slug: '/Services/private-prescriptions',
    category: 'general',
    description: 'Private prescription services available at our pharmacy.',
    fullDescription: 'We offer private prescription services for your convenience.',
  },
  {
    id: 'morning-after-pill',
    title: 'Morning-After Pill',
    slug: '/Services/morning-after-pill',
    category: 'general',
    description: 'Emergency contraception available at our pharmacy.',
    fullDescription: 'Morning-after pill service available for emergency contraception.',
  },
  {
    id: 'erectile-dysfunction',
    title: 'Erectile Dysfunction',
    slug: '/Services/erectile-dysfunction',
    category: 'general',
    description: 'Private treatment for erectile dysfunction.',
    fullDescription: 'Expert treatment and advice for erectile dysfunction.',
  },
  {
    id: 'hair-loss',
    title: 'Hair Loss Treatment',
    slug: '/Services/hair-loss',
    category: 'general',
    description: 'Professional hair loss treatment services.',
    fullDescription: 'Expert hair loss treatment and consultation services.',
  },
  {
    id: 'eye-care',
    title: 'Eye Care',
    slug: '/eye-care',
    category: 'general',
    description: 'High-quality spectacles at affordable prices.',
    fullDescription: 'Rifaray Eye Care offers high-quality spectacles at affordable prices. Contact our team for details.',
  },
  
  // Travel & Vaccination
  {
    id: 'travel-clinic',
    title: 'Travel Clinic',
    slug: '/Travel-Clinic/travel-vaccination',
    category: 'travel',
    description: 'Expert travel health advice, vaccines and antimalarials.',
    fullDescription: 'Are you travelling abroad soon? Get expert travel health advice, vaccines and antimalarials at our pharmacy.',
    bookingUrl: 'https://www.treatlocal.co.uk/online-booking/sidcup/travel-vaccine/appointment',
  },
  {
    id: 'special-vaccination',
    title: 'Speciality Vaccine',
    slug: '/Travel-Clinic/special-vaccination',
    category: 'travel',
    description: 'Private speciality vaccines including Chickenpox, Shingles and HPV.',
    fullDescription: 'We offer private speciality vaccines at our pharmacy, including Chickenpox, Shingles and HPV vaccines. Book your appointment online.',
    bookingUrl: 'https://www.treatlocal.co.uk/online-booking/sidcup/speciality-vaccine/appointment',
  },
  {
    id: 'hajj-umrah',
    title: 'Hajj and Umrah Vaccine',
    slug: '/Travel-Clinic/hajj-and-umrah-vaccination',
    category: 'travel',
    description: 'Get the meningitis ACWY vaccine and certificate for Hajj and Umrah.',
    fullDescription: 'Get the meningitis ACWY vaccine and certificate from our travel clinic for Hajj and Umrah. Book your appointment online.',
    bookingUrl: 'https://www.treatlocal.co.uk/online-booking/sidcup/hajj-umrah-vaccine/appointment',
  },
  {
    id: 'antimalarials',
    title: 'Antimalarials',
    slug: '/Travel-Clinic/antimalarials-sidcup',
    category: 'travel',
    description: 'Antimalarial medication for travel protection.',
    fullDescription: 'Expert advice and antimalarial medication for your travel needs.',
  },
  {
    id: 'covid-vaccination',
    title: 'Private COVID Vaccination',
    slug: '/Travel-Clinic/private-covid-vaccination-service',
    category: 'travel',
    description: 'Private COVID-19 vaccination service.',
    fullDescription: 'Private COVID-19 vaccination service available at our pharmacy.',
  },
  
  // Vaccines
  {
    id: 'cholera',
    title: 'Cholera Vaccine',
    slug: '/Vaccines/cholera-vaccine',
    category: 'vaccine',
    description: 'Cholera vaccination for travel protection.',
  },
  {
    id: 'dengue',
    title: 'Dengue Vaccine',
    slug: '/Vaccines/dengue-vaccine',
    category: 'vaccine',
    description: 'Dengue fever vaccination.',
  },
  {
    id: 'dtp',
    title: 'Diphtheria, Tetanus & Polio (DTP)',
    slug: '/Vaccines/diphtheria-tetanus-polio-dtp-vaccine',
    category: 'vaccine',
    description: 'DTP combined vaccination.',
  },
  {
    id: 'hepatitis-a',
    title: 'Hepatitis A Vaccine',
    slug: '/Vaccines/hepatitis-a-vaccine',
    category: 'vaccine',
    description: 'Hepatitis A vaccination for travel protection.',
  },
  {
    id: 'hepatitis-b',
    title: 'Hepatitis B Vaccine',
    slug: '/Vaccines/hepatitis-b-vaccine',
    category: 'vaccine',
    description: 'Hepatitis B vaccination.',
  },
  {
    id: 'hpv',
    title: 'HPV Vaccination',
    slug: '/Vaccines/hpv-vaccination',
    category: 'vaccine',
    description: 'Human Papillomavirus (HPV) vaccination.',
  },
  {
    id: 'japanese-encephalitis',
    title: 'Japanese Encephalitis Vaccine',
    slug: '/Vaccines/japanese-encephalitis-vaccine',
    category: 'vaccine',
    description: 'Japanese Encephalitis vaccination for travel.',
  },
  {
    id: 'meningitis-acwy',
    title: 'Meningitis ACWY Vaccine',
    slug: '/Vaccines/meningitis-acwy-vaccine',
    category: 'vaccine',
    description: 'Meningitis ACWY vaccination.',
  },
  {
    id: 'meningitis-b',
    title: 'Meningitis B Vaccine',
    slug: '/Vaccines/meningitis-b-vaccine',
    category: 'vaccine',
    description: 'Meningitis B vaccination.',
  },
  {
    id: 'rabies',
    title: 'Rabies Vaccine',
    slug: '/Vaccines/rabies-vaccine',
    category: 'vaccine',
    description: 'Rabies vaccination for travel protection.',
  },
  {
    id: 'shingles',
    title: 'Shingles Vaccine',
    slug: '/Vaccines/shingles-vaccine',
    category: 'vaccine',
    description: 'Shingles (Herpes Zoster) vaccination.',
  },
  {
    id: 'tick-encephalitis',
    title: 'Tick-Borne Encephalitis Vaccine',
    slug: '/Vaccines/tick-borne-encephalitis-vaccine',
    category: 'vaccine',
    description: 'Tick-Borne Encephalitis vaccination.',
  },
  {
    id: 'typhoid',
    title: 'Typhoid Vaccine',
    slug: '/Vaccines/typhoid-vaccine',
    category: 'vaccine',
    description: 'Typhoid vaccination for travel protection.',
  },
  
  // Weight Loss
  {
    id: 'weight-loss',
    title: 'Injectable Weight Loss Programme',
    slug: '/weight-loss-service',
    category: 'weight-loss',
    description: 'Private injectable weight loss programme with expert support.',
    fullDescription: 'Find out more about our private injectable weight loss programme. You will find useful information about the programme and also the link to start your online consultation.',
    bookingUrl: 'https://expertweightloss.co.uk/booking/injection/clinic/sidcup',
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return services.filter(service => service.category === category);
};

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => 
    ['vitamin-b12', 'travel-clinic', 'special-vaccination', 'weight-loss', 'earwax-removal', 'eye-care'].includes(service.id)
  );
};

