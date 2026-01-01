"use client";

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteContent } from '@/config/siteContent';

// Replace these with actual values from user
const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      setStatus('error');
      return;
    }

    const text = `
🍽️ <b>NEW ORDER - MYSTERIA</b>

👤 <b>Name:</b> ${formData.name}
📞 <b>Phone:</b> ${formData.phone}
📧 <b>Email:</b> ${formData.email || 'Not provided'}

📝 <b>Order Details:</b>
${formData.message}

⏰ <i>Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</i>
    `.trim();

    try {
      // Note: In production, this would be a backend call to hide tokens
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-10 text-center animate-fade-in">
        <CheckCircle2 size={64} className="mx-auto text-emerald-500 mb-6" />
        <h3 className="font-subheading text-2xl font-bold text-emerald-900 mb-2">Order Received!</h3>
        <p className="text-emerald-700">We've received your request and will contact you shortly to confirm.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-emerald-900 font-semibold underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-mysteria-textSecondary ml-1">Full Name *</label>
          <input 
            type="text" 
            name="name"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-14 bg-mysteria-cream border-2 border-transparent focus:border-mysteria-gold focus:bg-white outline-none rounded-xl px-6 text-mysteria-navy transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-mysteria-textSecondary ml-1">Phone Number *</label>
          <input 
            type="tel" 
            name="phone"
            required
            placeholder="9876543210"
            pattern="[6-9][0-9]{9}"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-14 bg-mysteria-cream border-2 border-transparent focus:border-mysteria-gold focus:bg-white outline-none rounded-xl px-6 text-mysteria-navy transition-all duration-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-mysteria-textSecondary ml-1">Email Address (Optional)</label>
        <input 
          type="email" 
          name="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-14 bg-mysteria-cream border-2 border-transparent focus:border-mysteria-gold focus:bg-white outline-none rounded-xl px-6 text-mysteria-navy transition-all duration-300"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-mysteria-textSecondary ml-1">Order Details / Message *</label>
        <textarea 
          name="message"
          required
          rows={5}
          placeholder="Tell us what you'd like to order or your general enquiry..."
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-mysteria-cream border-2 border-transparent focus:border-mysteria-gold focus:bg-white outline-none rounded-xl p-6 text-mysteria-navy transition-all duration-300 resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center space-x-2 text-[#dc2626] bg-red-50 p-4 rounded-xl border border-red-100 animate-fade-in">
          <AlertCircle size={20} />
          <span className="text-sm font-medium">Failed to send. Please call us directly at {siteContent.contact.phone}</span>
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === 'loading'}
        className={cn(
          "w-full h-16 flex items-center justify-center space-x-3 transition-all duration-300 rounded-xl font-bold text-lg",
          status === 'loading' ? "bg-gray-200 cursor-not-allowed" : "bg-mysteria-gold text-mysteria-navy hover:scale-[1.02] shadow-lg shadow-mysteria-gold/20"
        )}
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={24} className="animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <span>Place Order Now</span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;