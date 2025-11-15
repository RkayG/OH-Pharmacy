import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Contact Us - OH Pharmacy',
  description: 'Get in touch with OH Pharmacy. We are here to help with all your healthcare needs.',
};

export default function ContactUsPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        description="Get in touch with OH Pharmacy. We are here to help with all your healthcare needs."
      />

      <section className="py-16 bg-white-off">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Address</h3>
                <p className="text-text-light text-sm">
                  OH Pharmacy<br />
                  River House<br />
                  1 Maidstone Road<br />
                  Sidcup, DA14 5RH
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Phone</h3>
                <a href="tel:03330065650" className="text-primary hover:underline">
                  0333 006 5650
                </a>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Email</h3>
                <a href="mailto:info@ohpharmacy.co.uk" className="text-primary hover:underline text-sm">
                  info@ohpharmacy.co.uk
                </a>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="text-white text-2xl" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">Opening Hours</h3>
                <p className="text-text-light text-sm">
                  Mon-Fri: 9am-6pm<br />
                  Sat: 9am-5pm<br />
                  Sun: Closed
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

