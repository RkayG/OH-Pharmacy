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
    fullDescription: 'We offer a private vitamin B12 injection service in Sidcup at our clinic. Simply complete an online consultation and book an appointment online. Once your order is reviewed and approved by our doctors/prescribers, you will be able to attend the pharmacy to get the injection. This service must be ordered online.',
    price: '£29',
    bookingUrl: 'https://www.treatlocal.co.uk/online-booking/sidcup/vitamin-b12-injection-service/appointment',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'earwax-removal',
    title: 'Earwax Removal',
    slug: '/Services/earwax-removal-service',
    category: 'general',
    description: 'Microsuction earwax removal service. Safe and professional.',
    fullDescription: 'We offer a private microsuction earwax removal service in Sidcup at Rifaray Pharmacy. Book your appointment online.',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop',
  },
  {
    id: 'minor-ailment',
    title: 'Minor Ailment Clinic',
    slug: '/Services/minor-ailement-clinic',
    category: 'general',
    description: 'Private minor ailment clinic for common health issues.',
    fullDescription: 'Our private minor ailment clinic provides expert advice and treatment for common health issues.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
  },
  {
    id: 'private-prescriptions',
    title: 'Private Prescriptions',
    slug: '/Services/private-prescriptions',
    category: 'general',
    description: 'Private prescription services available at our pharmacy.',
    fullDescription: 'We offer private prescription services for your convenience.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop',
  },
  {
    id: 'morning-after-pill',
    title: 'Morning-After Pill',
    slug: '/Services/morning-after-pill',
    category: 'general',
    description: 'Emergency contraception available at our pharmacy.',
    fullDescription: 'Morning-after pill service available for emergency contraception.',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
  },
  {
    id: 'stop-smoking',
    title: 'Stop Smoking',
    slug: '/Services/stop-smoking',
    category: 'general',
    description: 'Expert advice and support to help you quit smoking.',
    fullDescription: 'Our Stop Smoking Service is designed to help you quit smoking through expert advice and Nicotine replacement products. Our trained pharmacists can provide personalized support and guidance to help you on your journey to becoming smoke-free.',
    features: [
      'Expert pharmacist consultations',
      'Nicotine replacement products',
      'Personalized quit plans',
      'Ongoing support and advice',
      'Proven success strategies',
    ],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'erectile-dysfunction',
    title: 'Erectile Dysfunction',
    slug: '/Services/erectile-dysfunction',
    category: 'general',
    description: 'Private treatment for erectile dysfunction.',
    fullDescription: 'Expert treatment and advice for erectile dysfunction.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
  },
  {
    id: 'hair-loss',
    title: 'Hair Loss Treatment',
    slug: '/Services/hair-loss',
    category: 'general',
    description: 'Professional hair loss treatment services.',
    fullDescription: 'Expert hair loss treatment and consultation services.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop',
  },
  {
    id: 'eye-care',
    title: 'Eye Care',
    slug: '/eye-care',
    category: 'general',
    description: 'High-quality spectacles at affordable prices.',
    fullDescription: 'Rifaray Eye Care offers high-quality spectacles at affordable prices. Contact our team for details.',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop',
  },
  {
    id: 'private-health-checks',
    title: 'Private Health Checks',
    slug: '/Services/private-health-checks',
    category: 'general',
    description: 'Advanced screening for optimal wellness. Proactive health screening to monitor and manage your wellbeing.',
    fullDescription: 'Our comprehensive private health check services provide advanced screening to help you monitor and manage your wellbeing. We offer a range of health assessments tailored to your needs, including blood pressure monitoring, cholesterol checks, diabetes screening, and more. Book your appointment to take proactive steps towards optimal health.',
    features: [
      'Comprehensive health assessments',
      'Blood pressure monitoring',
      'Cholesterol and diabetes screening',
      'Personalized health reports',
      'Expert pharmacist consultations',
    ],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'blood-tests',
    title: 'Blood Tests',
    slug: '/Services/blood-tests',
    category: 'general',
    description: 'A wide range of blood tests available with fast, accurate results.',
    fullDescription: 'We offer a comprehensive range of private blood tests to help monitor your health and detect potential issues early. Our blood testing services include full blood counts, liver function tests, kidney function tests, thyroid function tests, vitamin and mineral levels, and more. Fast, accurate results with expert interpretation and advice.',
    features: [
      'Wide range of blood tests available',
      'Fast and accurate results',
      'Expert interpretation and advice',
      'Convenient appointment booking',
      'Confidential and professional service',
    ],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
  },
  
  // Travel & Vaccination
  {
    id: 'travel-clinic',
    title: 'Travel Clinic',
    slug: '/Travel-Clinic/travel-vaccination',
    category: 'travel',
    description: 'Expert travel health advice, vaccines and antimalarials.',
    fullDescription: 'Get your travel vaccines for your upcoming trip abroad at our clinic. We offer a wide range of private vaccines and antimalarials. Book a pre-travel consultation for expert travel health advice tailored to your travel plans. Book your appointment online.',
    features: [
      'Expert Travel Health Advice',
      'Wide range of travel vaccines',
      'Friendly and efficient service',
    ],
    bookingUrl: 'https://www.treatlocal.co.uk/online-booking/sidcup/travel-vaccine/appointment',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'special-vaccination',
    title: 'Speciality Vaccine',
    slug: '/Travel-Clinic/special-vaccination',
    category: 'travel',
    description: 'Private speciality vaccines including Chickenpox, Shingles and HPV.',
    fullDescription: 'We refer to vaccines not generally used for travel purposes as Speciality Vaccines. Our clinic offers a wide range of private vaccines in Sidcup. Book your appointment online for expert advice and vaccinations. We also offer a wide range of travel vaccines and antimalarials.',
    features: [
      'No long waiting lists',
      'Expert vaccination clinic',
      'Safe, fast and efficient service',
    ],
    bookingUrl: 'https://www.treatlocal.co.uk/online-booking/sidcup/speciality-vaccine/appointment',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'hajj-umrah',
    title: 'Hajj and Umrah Vaccine',
    slug: '/Travel-Clinic/hajj-and-umrah-vaccination',
    category: 'travel',
    description: 'Get the meningitis ACWY vaccine and certificate for Hajj and Umrah.',
    fullDescription: 'Get the meningitis ACWY vaccine and certificate from our travel clinic for Hajj and Umrah. Book your appointment online.',
    bookingUrl: 'https://www.treatlocal.co.uk/online-booking/sidcup/hajj-umrah-vaccine/appointment',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'antimalarials',
    title: 'Antimalarials',
    slug: '/Travel-Clinic/antimalarials-sidcup',
    category: 'travel',
    description: 'Antimalarial medication for travel protection.',
    fullDescription: 'Expert advice and antimalarial medication for your travel needs.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'covid-vaccination',
    title: 'Private COVID Vaccination',
    slug: '/Travel-Clinic/private-covid-vaccination-service',
    category: 'travel',
    description: 'Private COVID-19 vaccination service.',
    fullDescription: 'Private COVID-19 vaccination service available at our pharmacy.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  
  // Vaccines
  {
    id: 'cholera',
    title: 'Cholera Vaccine',
    slug: '/Vaccines/cholera-vaccine',
    category: 'vaccine',
    description: 'Cholera vaccination for travel protection.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'dengue',
    title: 'Dengue Vaccine',
    slug: '/Vaccines/dengue-vaccine',
    category: 'vaccine',
    description: 'Dengue fever vaccination.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'dtp',
    title: 'Diphtheria, Tetanus & Polio (DTP)',
    slug: '/Vaccines/diphtheria-tetanus-polio-dtp-vaccine',
    category: 'vaccine',
    description: 'DTP combined vaccination.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'hepatitis-a',
    title: 'Hepatitis A Vaccine',
    slug: '/Vaccines/hepatitis-a-vaccine',
    category: 'vaccine',
    description: 'Hepatitis A vaccination for travel protection.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'hepatitis-b',
    title: 'Hepatitis B Vaccine',
    slug: '/Vaccines/hepatitis-b-vaccine',
    category: 'vaccine',
    description: 'Hepatitis B vaccination.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'hpv',
    title: 'HPV Vaccination',
    slug: '/Vaccines/hpv-vaccination',
    category: 'vaccine',
    description: 'Human Papillomavirus (HPV) vaccination.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'japanese-encephalitis',
    title: 'Japanese Encephalitis Vaccine',
    slug: '/Vaccines/japanese-encephalitis-vaccine',
    category: 'vaccine',
    description: 'Japanese Encephalitis vaccination for travel.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'meningitis-acwy',
    title: 'Meningitis ACWY Vaccine',
    slug: '/Vaccines/meningitis-acwy-vaccine',
    category: 'vaccine',
    description: 'Meningitis ACWY vaccination.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'meningitis-b',
    title: 'Meningitis B Vaccine',
    slug: '/Vaccines/meningitis-b-vaccine',
    category: 'vaccine',
    description: 'Meningitis B vaccination.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'rabies',
    title: 'Rabies Vaccine',
    slug: '/Vaccines/rabies-vaccine',
    category: 'vaccine',
    description: 'Rabies vaccination for travel protection.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'shingles',
    title: 'Shingles Vaccine',
    slug: '/Vaccines/shingles-vaccine',
    category: 'vaccine',
    description: 'Shingles (Herpes Zoster) vaccination.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'tick-encephalitis',
    title: 'Tick-Borne Encephalitis Vaccine',
    slug: '/Vaccines/tick-borne-encephalitis-vaccine',
    category: 'vaccine',
    description: 'Tick-Borne Encephalitis vaccination.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  {
    id: 'typhoid',
    title: 'Typhoid Vaccine',
    slug: '/Vaccines/typhoid-vaccine',
    category: 'vaccine',
    description: 'Typhoid vaccination for travel protection.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
  },
  
  // Weight Loss
  {
    id: 'weight-loss',
    title: 'Injectable Weight Loss Programme',
    slug: '/weight-loss-service',
    category: 'weight-loss',
    description: 'Private injectable weight loss programme with expert support.',
    fullDescription: 'Take charge of your weight loss journey with our private weight loss service in Sidcup, in partnership with Expert Weight Loss. We offer a comprehensive service starting with an online consultation to assess your eligibility. We also offer exercise and diet advice to help you develop healthy living habits so that you can maintain your body weight in the long term. Start your weight loss journey today and improve your health and confidence. Our weight loss service is designed to put you in control of your weight loss journey. The collaborative approach of Expert Weight Loss and Rifaray Pharmacy gives you convenience and comprehensive support throughout the programme. You will have regular check-in appointments with the pharmacy team and your stats will be available through the patient dashboard for you to track your progress along the way.',
    features: [
      'Online consultations',
      'Diet and exercise advice',
      'Regular check-in appointments',
      'Patient dashboard to track progress',
      'Comprehensive support throughout the programme',
    ],
    bookingUrl: 'https://expertweightloss.co.uk/booking/injection/clinic/sidcup',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
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

