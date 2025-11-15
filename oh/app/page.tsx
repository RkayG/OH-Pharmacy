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
      <section className="flex justify-center items-center w-full py-10 md:py-20">
        <div className="w-full border border-red-500 max-w-6xl px-4 sm:px-6 lg:px-8">
          <Carousel
            slides={[
              <div
                key="1"
                className="relative min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end p-6 md:p-12 flex"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=80")'
                }}
              >
                <div className="flex flex-col gap-2 text-left max-w-2xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
                    Your Health, Our Priority.
                  </h1>
                  <h2 className="text-gray-200 text-base font-normal leading-normal md:text-lg">
                    Private Health Services & Travel Vaccinations in London.
                  </h2>
                </div>
                <Link href="/book-services">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Book an Appointment
                  </Button>
                </Link>
              </div>,
              <div
                key="2"
                className="relative min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end p-6 md:p-12 flex"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80")'
                }}
              >
                <div className="flex flex-col gap-2 text-left max-w-2xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
                    Expert Care You Can Trust
                  </h1>
                  <h2 className="text-gray-200 text-base font-normal leading-normal md:text-lg">
                    Professional pharmacists providing personalized healthcare solutions.
                  </h2>
                </div>
                <Link href="/Services/services">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Explore Services
                  </Button>
                </Link>
              </div>,
              <div
                key="3"
                className="relative min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end p-6 md:p-12 flex"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&q=80")'
                }}
              >
                <div className="flex flex-col gap-2 text-left max-w-2xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-tighter md:text-6xl">
                    Travel Health Experts
                  </h1>
                  <h2 className="text-gray-200 text-base font-normal leading-normal md:text-lg">
                    Comprehensive travel vaccinations and health advice for your adventures.
                  </h2>
                </div>
                <Link href="/Travel-Clinic/travel-vaccination">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Plan Your Travel
                  </Button>
                </Link>
              </div>,
            ]}
          />
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-dark mb-4">
              Our Services
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of private health services designed to keep you and your family healthy.
            </p>
          </div>
          <ServiceGrid services={featuredServices} />
          <div className="text-center mt-12">
            <Link href="/Services/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
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
