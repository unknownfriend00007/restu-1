"use client";

import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { siteContent } from '@/config/siteContent';

const Location = () => {
  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      {/* Navigation space for fixed header */}
      <div className="h-20"></div>

      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#f8f6f3] to-[#ffffff] py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-light font-['Cormorant_Garamond'] text-[#0f1419] mb-4">
            Visit Us
          </h1>
          <p className="text-lg text-[#4a5568] font-['Inter']">
            Find your way to MYSTERIA
          </p>
        </div>
      </section>

      {/* Info Sections */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#f8f6f3] rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-[#c9a961] w-8 h-8" />
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
              <Phone className="text-[#c9a961] w-8 h-8" />
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
              <Clock className="text-[#c9a961] w-8 h-8" />
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

      {/* Map Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="w-full h-[450px] bg-[#f8f6f3] rounded-2xl flex items-center justify-center">
          <iframe
            src={siteContent.contact.address.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MYSTERIA Location Map"
          />
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold font-['Josefin_Sans'] text-[#1a1f2e] mb-8">
            Follow Us
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href={siteContent.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#f8f6f3] rounded-full flex items-center justify-center hover:bg-[#c9a961] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-6 h-6 text-[#4a5568]" />
            </a>
            <a
              href={siteContent.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#f8f6f3] rounded-full flex items-center justify-center hover:bg-[#c9a961] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-6 h-6 text-[#4a5568]" />
            </a>
            <a
              href={siteContent.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#f8f6f3] rounded-full flex items-center justify-center hover:bg-[#c9a961] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-6 h-6 text-[#4a5568]" />
            </a>
            <a
              href={siteContent.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#f8f6f3] rounded-full flex items-center justify-center hover:bg-[#c9a961] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Youtube className="w-6 h-6 text-[#4a5568]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;