"use client";

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const MysteriaLocation = () => {
  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#f8f6f3] to-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-['Cormorant_Garamond'] text-6xl text-[#0f1419] font-light mb-4">
            Visit Us
          </h1>
          <p className="font-['Inter'] text-lg text-[#4a5568]">
            Find your way to MYSTERIA
          </p>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Address */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f8f6f3] rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-[#c9a961]" size={32} />
              </div>
              <h3 className="font-['Josefin_Sans'] text-xl text-[#1a1f2e] font-semibold mb-4">
                Address
              </h3>
              <p className="font-['Inter'] text-lg text-[#4a5568] leading-relaxed mb-6">
                123 Marina Boulevard,<br />
                Gaming District,<br />
                Bangalore, Karnataka 560001
              </p>
              <a 
                href="https://maps.google.com/?q=Bangalore+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c9a961] text-[#0f1419] px-6 py-3 rounded-lg font-['Inter'] font-semibold hover:bg-[#b89751] transition-colors duration-300"
              >
                Get Directions
              </a>
            </div>

            {/* Contact */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f8f6f3] rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-[#c9a961]" size={32} />
              </div>
              <h3 className="font-['Josefin_Sans'] text-xl text-[#1a1f2e] font-semibold mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <a 
                  href="tel:+919876543210"
                  className="block font-['Inter'] text-lg text-[#c9a961] hover:underline"
                >
                  +91 98765 43210
                </a>
                <a 
                  href="mailto:hello@mysteria.cafe"
                  className="block font-['Inter'] text-lg text-[#4a5568] hover:text-[#c9a961] hover:underline"
                >
                  hello@mysteria.cafe
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f8f6f3] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-[#c9a961]" size={32} />
              </div>
              <h3 className="font-['Josefin_Sans'] text-xl text-[#1a1f2e] font-semibold mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2 font-['Inter'] text-lg text-[#4a5568]">
                <div>
                  <p className="font-semibold">Monday - Thursday</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold">Friday - Sunday</p>
                  <p>11:00 AM - 12:00 AM</p>
                </div>
                <div>
                  <p className="text-sm text-[#718096]">Closed on Major Holidays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[#f8f6f3] rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={64} className="text-[#c9a961] mx-auto mb-4" />
              <h3 className="font-['Josefin_Sans'] text-2xl text-[#1a1f2e] mb-2">
                Interactive Map Coming Soon
              </h3>
              <p className="font-['Inter'] text-lg text-[#718096]">
                Find us at 123 Marina Boulevard, Bangalore
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-['Josefin_Sans'] text-3xl text-[#1a1f2e] mb-8">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Instagram, color: 'hover:bg-pink-500' },
              { icon: Facebook, color: 'hover:bg-blue-500' },
              { icon: Twitter, color: 'hover:bg-blue-400' },
              { icon: Youtube, color: 'hover:bg-red-500' }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 bg-[#f8f6f3] rounded-full flex items-center justify-center text-[#4a5568] hover:text-white hover:scale-110 transition-all duration-300"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MysteriaLocation;