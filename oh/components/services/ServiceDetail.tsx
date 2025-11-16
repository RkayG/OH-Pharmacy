import Image from 'next/image';
import { Service } from '@/lib/services';
import { Button } from '../../components/ui/Button';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Hero from '@/components/ui/Hero';
import { FaCheckCircle } from 'react-icons/fa';
import { services } from '@/lib/services';

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const relatedServices = services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 3);

  const getBreadcrumbItems = (): Array<{ label: string; href?: string }> => {
    const items: Array<{ label: string; href?: string }> = [{ label: 'Home', href: '/' }];
    
    if (service.category === 'general') {
      items.push({ label: 'Services', href: '/Services' });
    } else if (service.category === 'travel') {
      items.push({ label: 'Travel Clinic', href: '/Travel-Clinic/travel-vaccination' });
    } else if (service.category === 'vaccine') {
      items.push({ label: 'Vaccines', href: '/Vaccines/travel-vaccines' });
    } else if (service.category === 'weight-loss') {
      items.push({ label: 'Services', href: '/Services' });
    }
    
    items.push({ label: service.title });
    return items;
  };
  
  const breadcrumbItems = getBreadcrumbItems();

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <Hero
        title={service.title}
        description={service.description}
        image={service.image}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Full Description */}
            {service.fullDescription && (
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-text-light text-lg leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>
            )}

            {/* Features */}
            {service.features && service.features.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold text-text-dark mb-6">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-text-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price & Booking */}
            <div className="bg-white-off rounded-md p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  {service.price && (
                    <p className="text-3xl font-display font-bold text-primary mb-2">
                      From {service.price}
                    </p>
                  )}
                  <p className="text-text-light">
                    Book your appointment online today
                  </p>
                </div>
                {service.bookingUrl ? (
                  <Button
                    href={service.bookingUrl}
                    external
                    variant="primary"
                    size="lg"
                  >
                    Book Online
                  </Button>
                ) : (
                  <Button
                    href="/book-services"
                    variant="primary"
                    size="lg"
                  >
                    Book Appointment
                  </Button>
                )}
              </div>
            </div>

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div>
                <h3 className="text-2xl font-display font-semibold text-text-dark mb-6">
                  Related Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedServices.map((related) => (
                    <div key={related.id} className="bg-white-off rounded-md p-6">
                      <h4 className="font-display font-semibold text-lg mb-2">
                        {related.title}
                      </h4>
                      <p className="text-text-light text-sm mb-4">
                        {related.description}
                      </p>
                      <Button
                        href={related.slug}
                        variant="outline"
                        size="sm"
                      >
                        Learn More
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

