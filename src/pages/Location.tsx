"use client";

import { MapPin, Phone, Clock, Instagram, Facebook, Twitter, Youtube, ExternalLink } from 'lucide-react';
import { siteContent } from '@/config/siteContent';
import { cn } from '@/lib/utils';

const Location = () => {
  return (
    <div className="min-h-screen bg-mysteria-cream">
      <div className="h-20"></div>

      <header className="py-24 bg-gradient-to-b from-white to-mysteria-cream">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-display text-mysteria-navy mb-4">Visit Us</h1>
          <p className="text-mysteria-textSecondary text-xl font-light">Find your way to MYSTERIA</p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
            {/* Address */}
            <div className="premium-card p-12 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-mysteria-cream rounded-full flex items-center justify-center mb-8 text-mysteria-gold">
                <MapPin size={36} />
              </div>
              <h3 className="font-subheading text-2xl font-semibold text-mysteria-navy mb-4">Address</h3>
              <p className="text-mysteria-textSecondary leading-relaxed mb-8">
                {siteContent.contact.address.street}<br />
                Gaming District, {siteContent.contact.address.city}<br />
                {siteContent.contact.address.state} {siteContent.contact.address.zip}
              </p>
              <a 
                href={siteContent.contact.address.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button w-full flex items-center justify-center space-x-2"
              >
                <span>Get Directions</span>
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Contact */}
            <div className="premium-card p-12 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-mysteria-cream rounded-full flex items-center justify-center mb-8 text-mysteria-gold">
                <Phone size={36} />
              </div>
              <h3 className="font-subheading text-2xl font-semibold text-mysteria-navy mb-4">Contact</h3>
              <div className="space-y-4 mb-8">
                <a href={`tel:${siteContent.contact.phone}`} className="block text-xl font-medium text-mysteria-gold hover:underline">
                  {siteContent.contact.phone}
                </a>
                <a href={`mailto:${siteContent.contact.email}`} className="block text-mysteria-textSecondary hover:text-mysteria-gold transition-colors">
                  {siteContent.contact.email}
                </a>
              </div>
              <p className="text-sm text-mysteria-textMuted italic">Call us for group bookings and event inquiries.</p>
            </div>

            {/* Hours */}
            <div className="premium-card p-12 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-mysteria-cream rounded-full flex items-center justify-center mb-8 text-mysteria-gold">
                <Clock size={36} />
              </div>
              <h3 className="font-subheading text-2xl font-semibold text-mysteria-navy mb-4">Opening Hours</h3>
              <div className="space-y-4 w-full">
                {siteContent.hours.map((item, i) => (
                  <div key={i} className="flex justify-between items-center text-mysteria-textSecondary border-b border-gray-50 pb-2">
                    <span className="font-medium">{item.day}</span>
                    <span className="text-sm">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-[2rem] p-4 shadow-2xl shadow-mysteria-navy/5 border border-gray-100 mb-32 overflow-hidden h-[500px] relative">
            <div className="absolute inset-0 bg-mysteria-cream flex items-center justify-center flex-col space-y-4">
              <MapPin size={48} className="text-mysteria-gold/40" />
              <p className="font-subheading text-xl text-mysteria-textMuted tracking-widest uppercase">Interactive Map Loading...</p>
            </div>
            <iframe
              src={siteContent.contact.address.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mysteria Location"
              className="relative z-10 w-full h-full grayscale opacity-80 contrast-125"
            />
          </div>

          {/* Social Section */}
          <div className="text-center pb-24">
            <h2 className="font-display text-4xl text-mysteria-navy mb-12">Follow Our Journey</h2>
            <div className="flex justify-center gap-8">
              {[
                { Icon: Instagram, color: 'hover:bg-pink-500' },
                { Icon: Facebook, color: 'hover:bg-blue-600' },
                { Icon: Twitter, color: 'hover:bg-sky-500' },
                { Icon: Youtube, color: 'hover:bg-red-600' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={cn(
                    "w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:text-white group",
                    item.color
                  )}
                >
                  <item.Icon size={28} className="text-mysteria-textSecondary transition-colors group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;