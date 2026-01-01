"use client";

import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const MysteriaFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1419] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#c9a961] rounded-full flex items-center justify-center">
                <span className="text-[#0f1419] font-bold text-xl">M</span>
              </div>
              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl text-[#f8f6f3]">MYSTERIA</h2>
              </div>
            </div>
            <p className="font-['Inter'] text-sm text-[#718096] mb-4">
              Where Gaming Meets Gastronomy
            </p>
            <p className="font-['Inter'] text-sm text-[#cbd5e0]">
              Premium gaming cafe and restaurant offering exceptional dining experiences 
              in a sophisticated atmosphere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Josefin_Sans'] text-sm text-[#c9a961] uppercase tracking-widest mb-6">
              Navigate
            </h3>
            <ul className="space-y-3">
              {['Home', 'Menu', 'Contact', 'Location'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="font-['Inter'] text-base text-[#cbd5e0] hover:text-[#c9a961] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Josefin_Sans'] text-sm text-[#c9a961] uppercase tracking-widest mb-6">
              Connect
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#c9a961]" />
                <a 
                  href="tel:+919876543210"
                  className="font-['Inter'] text-base text-[#cbd5e0] hover:text-[#c9a961] transition-colors duration-300"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#c9a961]" />
                <a 
                  href="mailto:hello@mysteria.cafe"
                  className="font-['Inter'] text-base text-[#cbd5e0] hover:text-[#c9a961] transition-colors duration-300"
                >
                  hello@mysteria.cafe
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#c9a961]" />
                <span className="font-['Inter'] text-base text-[#cbd5e0]">
                  123 Marina Boulevard, Bangalore
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Youtube, label: 'YouTube' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 bg-[#1a1f2e] rounded-full flex items-center justify-center text-[#cbd5e0] hover:bg-[#c9a961] hover:text-[#0f1419] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a1f2e] pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-['Inter'] text-sm text-[#718096] mb-4 md:mb-0">
              © {currentYear} MYSTERIA Cafe. All rights reserved.
            </p>
            <div className="font-['Inter'] text-sm text-[#718096]">
              Crafted with passion for premium experiences
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MysteriaFooter;