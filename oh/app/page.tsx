import Link from 'next/link';
import ServiceGrid from '@/components/services/ServiceGrid';
import Button from '@/components/ui/Button';
import { Carousel } from '@/components/ui/carousel';
import { getFeaturedServices } from '@/lib/services';
import { FaStethoscope, FaSyringe, FaEye, FaHeartbeat } from 'react-icons/fa';

export default function Home() {
  const featuredServices = getFeaturedServices();

  return (
    <>
      {/* Hero Section */}
      <section className="flex justify-center items-center w-full py-20 md:py-32 lg:py-32">
        <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <Carousel
            slides={[
              <div
                key="1"
                className="relative min-h-[90vh] flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end p-8 md:p-16 lg:p-20 flex"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgba(7, 48, 135, 0.8) 40%, rgba(37, 99, 235, 0.5) 55%, rgba(37, 99, 235, 0.3) 70%, rgba(37, 99, 235, 0.15) 80%, transparent 90%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_csFz9j5Dee86UdXPpn_9P6Al3rLszCLqAXcqCx0tX_RoumFdDHumzNBSb5UqWEoK-rO7UwTWf1t1-K5caquHHASVqhnpJhsFRuykQ4h4-k1NIYqWNpSpFHOHz2Fgp6WEmeh7X3TbJ6BkXBhOa0tQjyhj7joChIOF6Lqe1AiktM1r0fDVgHj2mbIdp8L9QEgFWKV0jWgxuUZYKigD8h7vOYmA2wDQg19JT6ffOpipRVU1TZWm9XBZy9WTc7NAQNum1eZiY0e5gu6b")'
                }}
              >
                <div className="flex flex-col gap-4 text-left max-w-4xl">
                  <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
                    Your Health, Our Priority.
                  </h1>
                  <h2 className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-normal leading-normal">
                    Private Health Services & Travel Vaccinations in London.
                  </h2>
                </div>
                <Link href="/book-services">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg md:text-xl px-8 py-4 md:px-12 md:py-6">
                    Book an Appointment
                  </Button>
                </Link>
              </div>,
              <div
                key="2"
                className="relative min-h-[90vh] flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end p-8 md:p-16 lg:p-20 flex"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgba(37, 99, 235, 0.7) 0%, rgba(37, 99, 235, 0.5) 20%, rgba(37, 99, 235, 0.3) 40%, rgba(37, 99, 235, 0.15) 55%, transparent 70%), url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80")'
                }}
              >
                <div className="flex flex-col gap-4 text-left max-w-4xl">
                  <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
                    Expert Care You Can Trust
                  </h1>
                  <h2 className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-normal leading-normal">
                    Professional pharmacists providing personalized healthcare solutions.
                  </h2>
                </div>
                <Link href="/Services/services">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg md:text-xl px-8 py-4 md:px-12 md:py-6">
                    Explore Services
                  </Button>
                </Link>
              </div>,
              <div
                key="3"
                className="relative min-h-[90vh] flex-col gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end p-8 md:p-16 lg:p-20 flex"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgba(37, 99, 235, 0.7) 0%, rgba(37, 99, 235, 0.5) 20%, rgba(37, 99, 235, 0.3) 40%, rgba(37, 99, 235, 0.15) 55%, transparent 70%), url("https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80")'
                }}
              >
                <div className="flex flex-col gap-4 text-left max-w-4xl">
                  <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
                    Travel Health Experts
                  </h1>
                  <h2 className="text-gray-200 text-xl md:text-2xl lg:text-3xl font-normal leading-normal">
                    Comprehensive travel vaccinations and health advice for your adventures.
                  </h2>
                </div>
                <Link href="/Travel-Clinic/travel-vaccination">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg md:text-xl px-8 py-4 md:px-12 md:py-6">
                    Plan Your Travel
                  </Button>
                </Link>
              </div>,
            ]}
          />
        </div>
      </section>

      {/* Featured Services */}
      <section className="w-full bg-section-light py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-text-light text-3xl font-bold tracking-tight text-center mb-12">
            Featured Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-3 text-center items-center">
              <div 
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" 
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAS6mRfRaIdP7-HEwVuSx244H3sjjWnV7ymkxvhkznxJ92og1rnjIUc0SAlUBugMhq6qTAk11tEarz2WFLR3SlytvzoTGxdhJRf2F8WITjbi_trTrMzuSeoFP9_Q-b7-S84xda1ZNAFb3piDUNkXPp0AqjV8Y0eR_0t0LTYxXIvORb72ygcoyTIkbSlRe5NNCkxYHRb_NdHe9nVMRyFAHYr2oFEi39PsnN1BomOJqHZzYNxMEnYWIGz9tAUXbTHWNjfgRRN0snj-ovp")'
                }}
              />
              <div>
                <p className="text-text-light text-lg font-bold leading-normal">Travel Vaccinations</p>
                <p className="text-text-muted-light text-sm font-normal leading-normal mt-1">
                  Stay protected on your travels with our comprehensive vaccination service.
                </p>
                <Link href="/Travel-Clinic/travel-vaccination" className="text-primary font-semibold text-sm mt-3 inline-block">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-center items-center">
              <div 
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" 
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmtSGLO_215TLN9x3DJRPc74L6tQnFmfzsOG6dFXPRvUZLjicde42UzgVnO7b7bVtCMG5Jtuo_p7cuFLIlGAODTOHh4u-U5u72fR-DwwzBgcQaB8yPJDXv9yhMW8poMuLQgxV1hS7H6oTL4HrDNKo1f5x26bFLZCvPn49KU75eHM_nuvAdzIVW6M_vJet8ww2QPwD9K4Hf5hvXk1qyIBp5Ewjv4HaoOrlQSPvuzQ7kVqNDuNnMwF0fIF-fukrC7uh5hkh7FBCdwEnU")'
                }}
              />
              <div>
                <p className="text-text-light text-lg font-bold leading-normal">Private Health Checks</p>
                <p className="text-text-muted-light text-sm font-normal leading-normal mt-1">
                  Proactive health screening to monitor and manage your wellbeing.
                </p>
                <Link href="/Services/services" className="text-primary font-semibold text-sm mt-3 inline-block">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-center items-center">
              <div 
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" 
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKtF8edOsUvVB80dNCH6qsUHJAtSqkV5lXD4u9wSKMZjru-vjT9NbnS3sSFC0j5zf3tlB7zNkkYRrQMXC6vkFLQDOGYoNl5VJa56UIxIMSluKhx1UG9OJj3l4Exhz4VIpPX6cXBwg4FWywlFY9CRwcpBxyHEKHcILXSNki3Q-hsASeVdkzQ6h2GPWn3AwcXYYeyw-LXTkEy3J-UyJ_bz45hSI-NRd4VWii213cLdXY-ExsqtU5Rv8dN8C6uKAkZ7w8eiHqLNtSEF4D")'
                }}
              />
              <div>
                <p className="text-text-light text-lg font-bold leading-normal">Minor Ailments Clinic</p>
                <p className="text-text-muted-light text-sm font-normal leading-normal mt-1">
                  Quick and convenient consultations for common health concerns.
                </p>
                <Link href="/Services/minor-ailement-clinic" className="text-primary font-semibold text-sm mt-3 inline-block">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 text-center items-center">
              <div 
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl" 
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAL9SiZDq9g44NWAMHeMhlgyxjJlkZbP0xPoxyWeTQn3LeeW3AbF0e5_cnSIrkb4J2NAJs46745dIm5DB_41rwGnJ8hZceg_PIw88U3AuHmPl-pAMzCd5NbxwgcHaUnGGzsOG7_BfZSM3jmeYtAQO3lslgV2UC0DhNyYPEBd-46WBYILph2aTP9mExDyPJn6pXxYkH5Hq5lC8qHcItjuFQmYsalcYCuQUcmu_q8v7rPHprrqOXBBPsZN1yM_6piEJZkxcd6g98wI0o-")'
                }}
              />
              <div>
                <p className="text-text-light text-lg font-bold leading-normal">Blood Tests</p>
                <p className="text-text-muted-light text-sm font-normal leading-normal mt-1">
                  A wide range of blood tests available with fast, accurate results.
                </p>
                <Link href="/Services/services" className="text-primary font-semibold text-sm mt-3 inline-block">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white-off">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaStethoscope className="text-white text-2xl" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Expert Care</h3>
              <p className="text-text-light">
                Licensed pharmacists providing professional healthcare advice
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSyringe className="text-white text-2xl" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Travel Health</h3>
              <p className="text-text-light">
                Comprehensive travel vaccination and health advice
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEye className="text-white text-2xl" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Eye Care</h3>
              <p className="text-text-light">
                High-quality spectacles at affordable prices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeartbeat className="text-white text-2xl" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">Weight Loss</h3>
              <p className="text-text-light">
                Professional weight loss programmes with expert support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-6">
              About OH Pharmacy
            </h2>
            <p className="text-text-light text-lg mb-6 leading-relaxed">
              Welcome to OH Pharmacy and Travel Vaccination Clinic. We offer a wide range of innovative private health services to meet the needs of our patients.
            </p>
            <p className="text-text-light text-lg mb-8 leading-relaxed">
              Are you travelling abroad soon? Get expert travel health advice and vaccines for your next adventure. Simply book your appointment online.
            </p>
            <Link href="/Services/services">
              <Button variant="primary" size="lg">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
