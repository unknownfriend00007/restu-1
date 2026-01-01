"use client";

import { useState } from 'react';
import { siteContent } from '@/config/siteContent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      email: '',
      message: ''
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2 || formData.name.trim().length > 50) {
      newErrors.name = 'Name must be between 2-50 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters and spaces';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Email validation (optional)
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Order details are required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate Telegram integration (in real app, this would call your Telegram API)
      console.log('Order details:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      {/* Navigation space for fixed header */}
      <div className="h-20"></div>

      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#f8f6f3] to-[#ffffff] py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-light font-['Cormorant_Garamond'] text-[#0f1419] mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-[#4a5568] font-['Inter']">
            Pre-order your meal or send us a message
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#ffffff] p-12 rounded-2xl shadow-[0_4px_24px_rgba(15,20,25,0.12)]">
            <h2 className="text-3xl font-light font-['Cormorant_Garamond'] text-[#1a1f2e] mb-8">
              Place Your Order
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold font-['Inter'] text-[#4a5568] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-13 bg-[#f8f6f3] border-2 border-transparent rounded-xl px-4 text-base text-[#1a1f2e] font-['Inter'] focus:bg-[#ffffff] focus:border-[#c9a961] transition-all duration-300"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-sm text-[#dc2626] font-['Inter'] mt-1 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold font-['Inter'] text-[#4a5568] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-13 bg-[#f8f6f3] border-2 border-transparent rounded-xl px-4 text-base text-[#1a1f2e] font-['Inter'] focus:bg-[#ffffff] focus:border-[#c9a961] transition-all duration-300"
                  placeholder="9876543210"
                />
                {errors.phone && (
                  <p className="text-sm text-[#dc2626] font-['Inter'] mt-1 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold font-['Inter'] text-[#4a5568] mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-13 bg-[#f8f6f3] border-2 border-transparent rounded-xl px-4 text-base text-[#1a1f2e] font-['Inter'] focus:bg-[#ffffff] focus:border-[#c9a961] transition-all duration-300"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-sm text-[#dc2626] font-['Inter'] mt-1 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold font-['Inter'] text-[#4a5568] mb-2">
                  Order Details / Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-[#f8f6f3] border-2 border-transparent rounded-xl px-4 py-4 text-base text-[#1a1f2e] font-['Inter'] focus:bg-[#ffffff] focus:border-[#c9a961] transition-all duration-300 resize-none"
                  placeholder="Tell us what you'd like to order..."
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-[#dc2626] font-['Inter'] mt-1 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-gradient-to-r from-[#c9a961] to-[#b89751] text-[#0f1419] rounded-xl font-semibold font-['Inter'] transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(201,169,97,0.3)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin w-5 h-5 border-2 border-[#0f1419] border-t-transparent rounded-full"></div>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Place Order
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-[#059669]/10 border-2 border-[#059669] rounded-xl p-4 flex items-center">
                  <div className="w-6 h-6 bg-[#059669] rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#059669] font-['Inter']">
                    Order received! We'll contact you shortly.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-[#dc2626]/10 border-2 border-[#dc2626] rounded-xl p-4">
                  <p className="text-[#dc2626] font-['Inter']">
                    Failed to send. Please call us at {siteContent.contact.phone}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Address */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#f8f6f3] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="text-[#c9a961] w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657a8 8 0 11-11.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.093 11.182l4.257 4.257a1 1 0 01-1.414 1.414L12.686 13.09a1 1 0 00-1.414 0L7.059 16.894a1 1 0 11-1.414-1.414l4.26-4.26a8 8 0 1111.313-5.313z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold font-['Josefin_Sans'] text-[#1a1f2e] mb-4">
              Address
            </h3>
            <p className="text-base text-[#4a5568] font-['Inter'] leading-relaxed mb-6">
              {siteContent.contact.address.street}<br />
              {siteContent.contact.address.city}, {siteContent.contact.address.state} {siteContent.contact.address.zip}
            </p>
            <a
              href={siteContent.contact.address.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#c9a961] text-[#0f1419] px-6 py-3 rounded-lg font-medium font-['Inter'] hover:bg-[#b89751] transition-colors"
            >
              Get Directions
            </a>
          </div>

          {/* Contact */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#f8f6f3] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="text-[#c9a961] w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.9.218L9 2.22h3.28a1 1 0 01.9.218l1.278 1.278a1 1 0 01.218.9V18a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3v4m0 0v4m0 0v4m0-4h-6m6 0h-6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold font-['Josefin_Sans'] text-[#1a1f2e] mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <p className="text-base text-[#4a5568] font-['Inter'] leading-relaxed">
                <a href={`tel:${siteContent.contact.phone}`} className="text-[#c9a961] hover:text-[#b89751] transition-colors font-medium">
                  {siteContent.contact.phone}
                </a>
              </p>
              <p className="text-base text-[#4a5568] font-['Inter'] leading-relaxed">
                <a href={`mailto:${siteContent.contact.email}`} className="text-[#c9a961] hover:text-[#b89751] transition-colors font-medium">
                  {siteContent.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#f8f6f3] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="text-[#c9a961] w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold font-['Josefin_Sans'] text-[#1a1f2e] mb-4">
              Opening Hours
            </h3>
            <div className="space-y-2">
              {siteContent.hours.map((item, index) => (
                <div key={index} className="text-base text-[#4a5568] font-['Inter']">
                  <span className="font-medium">{item.day}</span>
                  <span className="ml-2">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;