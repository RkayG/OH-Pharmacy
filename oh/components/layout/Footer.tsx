import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#111418] dark:bg-[#101922] text-white mt-16 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-[#005A5B]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">OH Pharmacy</h3>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your trusted partner in health and wellness. Providing expert care and private services to the Kent community.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#005A5B] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#005A5B] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#005A5B] transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/book-services" className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm">
                  Book Services
                </Link>
              </li>
              <li>
                <Link href="/Services/services" className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/Travel-Clinic/travel-vaccination" className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm">
                  Travel Clinic
                </Link>
              </li>
              <li>
                <Link href="/Services/contact-us" className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/Services/vitamin-b12" className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm">
                  Vitamin B12
                </Link>
              </li>
              <li>
                <Link href="/Travel-Clinic/travel-vaccination" className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm">
                  Travel Vaccination
                </Link>
              </li>
              <li>
                <Link href="/weight-loss-service" className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm">
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/eye-care" className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm">
                  Eye Care
                </Link>
              </li>
              <li>
                <Link href="/Vaccines/travel-vaccines" className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm">
                  All Vaccines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#005A5B] mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm leading-relaxed">
                  OH Pharmacy<br />
                  River House, 1 Maidstone Road<br />
                  Sidcup, DA14 5RH
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#005A5B] flex-shrink-0" size={16} />
                <a
                  href="tel:03330065650"
                  className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm"
                >
                  0333 006 5650
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#005A5B] flex-shrink-0" size={16} />
                <a
                  href="mailto:info@ohpharmacy.co.uk"
                  className="text-gray-300 hover:text-[#005A5B] transition-colors text-sm"
                >
                  info@ohpharmacy.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} OH Pharmacy. All rights reserved.{' '}
            <Link href="/privacy-policy" className="hover:text-[#005A5B] transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

