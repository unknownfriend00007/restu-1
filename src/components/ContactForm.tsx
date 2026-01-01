"use client";

import { useState } from 'react';
import { siteContent } from '@/config/siteContent';
import { showSuccess, showError } from '@/utils/toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      message: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Order details are required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Only allow digits for phone field
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [name]: numericValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // First, try to send via Telegram
      if (siteContent.forms.telegramBotToken && siteContent.forms.telegramChatId) {
        const telegramMessage = `🎮 NEW ORDER\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\n\nOrder:\n${formData.message}`;
        
        const telegramResponse = await fetch(
          `https://api.telegram.org/bot${siteContent.forms.telegramBotToken}/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: siteContent.forms.telegramChatId,
              text: telegramMessage,
              parse_mode: 'HTML'
            })
          }
        );

        if (!telegramResponse.ok) {
          throw new Error('Failed to send Telegram message');
        }
      }

      // Show success toast
      showSuccess('Order placed successfully! We\'ll contact you shortly.');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      showError('Failed to place order. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
            errors.name ? 'border-red-500' : 'border-gray-600'
          }`}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone * (10 digits)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all ${
            errors.phone ? 'border-red-500' : 'border-gray-600'
          }`}
          placeholder="9876543210"
          maxLength={10}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email (Optional)
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Order Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none transition-all ${
            errors.message ? 'border-red-500' : 'border-gray-600'
          }`}
          placeholder="What would you like to order? (e.g., Neon Nachos, Cyber Burger, etc.)"
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-cyan-500/25"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
            Placing Order...
          </div>
        ) : (
          'Place Order'
        )}
      </button>
    </form>
  );
};

export default ContactForm;