"use client";

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const MysteriaContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2 || formData.name.trim().length > 50) {
      newErrors.name = 'Name must be between 2 and 50 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Name can only contain letters and spaces';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    // Email validation (optional)
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Order details are required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (minimum 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const mockTelegramSend = async (data: typeof formData) => {
    // Simulate Telegram API call
    return new Promise<{ success: boolean }>((resolve) => {
      setTimeout(() => {
        // Simulate 90% success rate
        resolve({ success: Math.random() > 0.1 });
      }, 1500);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await mockTelegramSend(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#f8f6f3] to-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-['Cormorant_Garamond'] text-6xl text-[#0f1419] font-light mb-4">
            Get in Touch
          </h1>
          <p className="font-['Inter'] text-lg text-[#4a5568]">
            Pre-order your meal or send us a message
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-white p-12 rounded-2xl shadow-xl">
              <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#1a1f2e] font-light mb-8">
                Place Your Order
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="font-['Inter'] text-sm font-semibold text-[#4a5568] mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full h-14 bg-[#f8f6f3] border-2 rounded-xl px-4 font-['Inter'] text-lg text-[#1a1f2e] transition-all duration-300 ${
                      errors.name 
                        ? 'border-[#dc2626] focus:border-[#dc2626]' 
                        : 'border-transparent focus:border-[#c9a961] focus:bg-white focus:shadow-lg'
                    }`}
                  />
                  {errors.name && (
                    <p className="font-['Inter'] text-sm text-[#dc2626] mt-2 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="font-['Inter'] text-sm font-semibold text-[#4a5568] mb-2 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className={`w-full h-14 bg-[#f8f6f3] border-2 rounded-xl px-4 font-['Inter'] text-lg text-[#1a1f2e] transition-all duration-300 ${
                      errors.phone 
                        ? 'border-[#dc2626] focus:border-[#dc2626]' 
                        : 'border-transparent focus:border-[#c9a961] focus:bg-white focus:shadow-lg'
                    }`}
                  />
                  {errors.phone && (
                    <p className="font-['Inter'] text-sm text-[#dc2626] mt-2 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="font-['Inter'] text-sm font-semibold text-[#4a5568] mb-2 block">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full h-14 bg-[#f8f6f3] border-2 rounded-xl px-4 font-['Inter'] text-lg text-[#1a1f2e] transition-all duration-300 ${
                      errors.email 
                        ? 'border-[#dc2626] focus:border-[#dc2626]' 
                        : 'border-transparent focus:border-[#c9a961] focus:bg-white focus:shadow-lg'
                    }`}
                  />
                  {errors.email && (
                    <p className="font-['Inter'] text-sm text-[#dc2626] mt-2 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="font-['Inter'] text-sm font-semibold text-[#4a5568] mb-2 block">
                    Order Details / Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us what you'd like to order..."
                    className={`w-full bg-[#f8f6f3] border-2 rounded-xl p-4 font-['Inter'] text-lg text-[#1a1f2e] transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-[#dc2626] focus:border-[#dc2626]' 
                        : 'border-transparent focus:border-[#c9a961] focus:bg-white focus:shadow-lg'
                    }`}
                  />
                  {errors.message && (
                    <p className="font-['Inter'] text-sm text-[#dc2626] mt-2 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-[#c9a961] to-[#b89751] text-[#0f1419] rounded-xl font-['Inter'] font-semibold flex items-center justify-center hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin mr-2" />
                      Sending Order...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Order
                    </>
                  )}
                </button>
              </form>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 bg-[rgba(5,150,105,0.1)] border-2 border-[#059669] rounded-xl flex items-center">
                  <CheckCircle size={24} className="text-[#059669] mr-3" />
                  <span className="font-['Inter'] text-lg text-[#059669]">
                    Order received! We'll contact you shortly.
                  </span>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mt-6 p-4 bg-[rgba(220,38,38,0.1)] border-2 border-[#dc2626] rounded-xl flex items-center">
                  <AlertCircle size={24} className="text-[#dc2626] mr-3" />
                  <span className="font-['Inter'] text-lg text-[#dc2626]">
                    Failed to send. Please call us at +91 98765 43210
                  </span>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="font-['Inter'] text-sm text-[#718096]">
                For urgent inquiries, call us directly at{' '}
                <a href="tel:+919876543210" className="text-[#c9a961] hover:underline">
                  +91 98765 43210
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MysteriaContact;