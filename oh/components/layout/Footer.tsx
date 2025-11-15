import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white mt-16 pl-32 pt-32">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-display font-bold mb-12">OH Pharmacy</h3>
            <p className="text-gray-300 mb-4">
              Your trusted local pharmacy offering a wide range of private health services and expert care.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/book-services" className="text-gray-300 hover:text-accent transition-colors">
                  Book Services
                </Link>
              </li>
              <li>
                <Link href="/Services/services" className="text-gray-300 hover:text-accent transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/Travel-Clinic/travel-vaccination" className="text-gray-300 hover:text-accent transition-colors">
                  Travel Clinic
                </Link>
              </li>
              <li>
                <Link href="/Services/contact-us" className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/Services/vitamin-b12" className="text-gray-300 hover:text-accent transition-colors">
                  Vitamin B12
                </Link>
              </li>
              <li>
                <Link href="/Travel-Clinic/travel-vaccination" className="text-gray-300 hover:text-accent transition-colors">
                  Travel Vaccination
                </Link>
              </li>
              <li>
                <Link href="/weight-loss-service" className="text-gray-300 hover:text-accent transition-colors">
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/eye-care" className="text-gray-300 hover:text-accent transition-colors">
                  Eye Care
                </Link>
              </li>
              <li>
                <Link href="/Vaccines/travel-vaccines" className="text-gray-300 hover:text-accent transition-colors">
                  All Vaccines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  OH Pharmacy<br />
                  River House, 1 Maidstone Road<br />
                  Sidcup, DA14 5RH
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent flex-shrink-0" />
                <a
                  href="tel:03330065650"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  0333 006 5650
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} OH Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

