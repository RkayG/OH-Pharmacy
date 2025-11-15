import Hero from '@/components/ui/Hero';
import ServiceGrid from '@/components/services/ServiceGrid';
import Button from '@/components/ui/Button';
import { getFeaturedServices } from '@/lib/services';
import { FaStethoscope, FaSyringe, FaEye, FaHeartbeat } from 'react-icons/fa';

export default function Home() {
  const featuredServices = getFeaturedServices();

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Your Health, Our Priority"
        subtitle="Welcome to OH Pharmacy"
        description="We offer a wide range of innovative private health services to meet the needs of our patients. From travel vaccinations to weight loss programmes, we're here to help."
        ctaText="Book Your Appointment"
        ctaHref="/book-services"
      />

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
            <Button href="/Services/services" variant="outline" size="lg">
              View All Services
            </Button>
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
            <Button href="/Services/services" variant="primary" size="lg">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
