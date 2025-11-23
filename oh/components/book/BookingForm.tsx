'use client';

import { services } from '@/lib/services';
import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaSearch, FaCheck } from 'react-icons/fa';

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState<string>('');
  const [serviceSearch, setServiceSearch] = useState('');
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [preferredTimeOfDay, setPreferredTimeOfDay] = useState<string[]>([]);
  const [preferredContact, setPreferredContact] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [phoneError, setPhoneError] = useState<string>('');

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeOfDayOptions = ['Morning', 'Afternoon', 'Evening'];
  const contactMethods = ['Email', 'Phone', 'Either'];

  // Pre-select service from query parameter
  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service.id);
        setServiceSearch(service.title);
      }
    }
  }, [searchParams]);

  // Filter services based on search
  const filteredServices = useMemo(() => {
    if (!serviceSearch) return services;
    const searchLower = serviceSearch.toLowerCase();
    return services.filter(service =>
      service.title.toLowerCase().includes(searchLower) ||
      service.description.toLowerCase().includes(searchLower)
    );
  }, [serviceSearch]);

  const selectedServiceData = services.find(s => s.id === selectedService);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowServiceDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDayToggle = (day: string) => {
    setSelectedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const handleTimeToggle = (time: string) => {
    setPreferredTimeOfDay(prev =>
      prev.includes(time)
        ? prev.filter(t => t !== time)
        : [...prev, time]
    );
  };

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters except +
    let digits = value.replace(/[^\d+]/g, '');
    
    // Remove existing +44 if present
    if (digits.startsWith('+44')) {
      digits = digits.slice(3);
    } else if (digits.startsWith('44')) {
      digits = digits.slice(2);
    }
    
    // Remove leading 0 if present (UK numbers start with 0, but +44 format doesn't include it)
    if (digits.startsWith('0')) {
      digits = digits.slice(1);
    }
    
    // Add +44 prefix
    return digits ? `+44${digits}` : '+44';
  };

  const validatePhoneNumber = (phone: string): boolean => {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    
    // Must have at least +44 and some digits
    if (digits.length < 3) {
      return false;
    }
    
    // Extract UK digits (remove country code 44 if present)
    let ukDigits = digits;
    if (digits.startsWith('44')) {
      ukDigits = digits.slice(2);
    }
    
    // UK phone numbers after +44 are 10 digits (without leading 0)
    // Mobile: +44 7xxx xxxxxx (10 digits starting with 7)
    // Landline: +44 1xxx xxxxxx, +44 2x xxxx xxxx (10 digits starting with 1 or 2)
    if (ukDigits.length !== 10) {
      return false;
    }
    
    // Valid UK prefixes after +44: 1, 2, 3, 7, 8, 9
    const validFirstDigits = ['1', '2', '3', '7', '8', '9'];
    return validFirstDigits.includes(ukDigits[0]);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatPhoneNumber(value);
    
    setFormData({ ...formData, phone: formatted });
    
    // Validate if user has entered something beyond just +44
    if (formatted.length > 3) {
      const isValid = validatePhoneNumber(formatted);
      if (isValid) {
        setPhoneError(''); // Clear error when valid
      } else {
        // Only show error if user has entered enough digits to potentially be complete
        const digits = formatted.replace(/\D/g, '');
        const ukDigits = digits.startsWith('44') ? digits.slice(2) : digits;
        if (ukDigits.length >= 10) {
          setPhoneError('Please enter a valid phone number');
        } else {
          setPhoneError(''); // Don't show error while still typing
        }
      }
    } else {
      setPhoneError(''); // Clear error if field is empty or just +44
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number before submission
    if (formData.phone && !validatePhoneNumber(formData.phone)) {
      setPhoneError('Please enter a valid phone number');
      return;
    }
    
    // Handle form submission here
    console.log({
      service: selectedServiceData,
      availability: selectedDays,
      preferredTimeOfDay,
      preferredContact,
      ...formData,
    });
    // You can add API call here to submit the booking request
    alert('Booking request submitted! We will contact you soon.');
  };

  return (
    <div className="bg-white rounded-xl border border-primary p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
        Booking Request Form
      </h2>
      <p className="text-[#617589] mb-8">
        Please provide the following information so we can assist you with your booking.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Selection */}
        <div>
          <label className="block text-sm font-semibold text-[#111418] mb-2">
            Service to Book <span className="text-red-500">*</span>
          </label>
          <div className="relative" ref={dropdownRef}>
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search and select a service..."
                value={serviceSearch}
                onChange={(e) => {
                  setServiceSearch(e.target.value);
                  setShowServiceDropdown(true);
                }}
                onFocus={() => setShowServiceDropdown(true)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            {showServiceDropdown && filteredServices.length > 0 && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      setSelectedService(service.id);
                      setServiceSearch(service.title);
                      setShowServiceDropdown(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-[#111418]">{service.title}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
          {selectedServiceData && (
            <div className="mt-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-primary">
                <span className="font-medium">Selected:</span> {selectedServiceData.title}
              </p>
            </div>
          )}
        </div>

        {/* Availability Days */}
        <div>
          <label className="block text-sm font-semibold text-[#111418] mb-3">
            Your Typical Availability <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-[#617589] mb-3">
            Select all days you are typically available (you're not selecting a specific date)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {daysOfWeek.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => handleDayToggle(day)}
                className={`flex items-center justify-center px-4 py-3 rounded-lg border-2 transition-colors ${
                  selectedDays.includes(day)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-[#111418] border-gray-300 hover:border-primary/50'
                }`}
              >
                {selectedDays.includes(day) && (
                  <FaCheck className="mr-2" />
                )}
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Preferred Time of Day */}
        <div>
          <label className="block text-sm font-semibold text-[#111418] mb-3">
            Preferred Time of Day <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-[#617589] mb-3">
            Select all time periods you prefer for appointments
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {timeOfDayOptions.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => handleTimeToggle(time)}
                className={`flex items-center justify-center px-4 py-3 rounded-lg border-2 transition-colors ${
                  preferredTimeOfDay.includes(time)
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-[#111418] border-gray-300 hover:border-primary/50'
                }`}
              >
                {preferredTimeOfDay.includes(time) && (
                  <FaCheck className="mr-2" />
                )}
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-semibold text-[#111418] mb-2">
            How would you like to be contacted? <span className="text-red-500">*</span>
          </label>
          <select
            value={preferredContact}
            onChange={(e) => setPreferredContact(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
            required
          >
            <option value="">Select preferred contact method</option>
            {contactMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-[#111418] mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
            required
          />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#111418] mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#111418] mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="+44 7xxx xxxxxx"
              className={`w-full px-4 py-3 border rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none ${
                phoneError ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {phoneError && (
              <p className="mt-1 text-sm text-red-500">{phoneError}</p>
            )}
            
          </div>
        </div>

        {/* Additional Message */}
        <div>
            <label className="block text-sm font-semibold text-[#111418] mb-2">
            Additional Message or Special Requirements
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            placeholder="Please provide any additional information, special requirements, or questions you may have..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors text-base"
          >
            Submit Booking Request
          </button>
        </div>
      </form>
    </div>
  );
}

