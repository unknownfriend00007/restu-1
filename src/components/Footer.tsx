"use client";

import { Link } from 'react-router-dom';
import { siteContent } from '@/config/siteContent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1419] text-[#f8f6f3]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light font-['Cormorant_Garamond'] mb-2">
              {siteContent.restaurant.name}
            </h3>
            <p className="text-sm text-[#718096] font-['Inter']">
              {siteContent.restaurant.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs text-[#c9a961] font-['Josefin_Sans'] uppercase tracking-[2px] font-semibold mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-[#cbd5e0] hover:text-[#c9a961] transition-colors font-['Inter']">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm text-[#cbd5e0] hover:text-[#c9a961] transition-colors font-['Inter']">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-[#cbd5e0] hover:text-[#c9a961] transition-colors font-['Inter']">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-sm text-[#cbd5e0] hover:text-[#c9a961] transition-colors font-['Inter']">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs text-[#c9a961] font-['Josefin_Sans'] uppercase tracking-[2px] font-semibold mb-4">
              Connect
            </h4>
            <ul className="space-y-2">
              <li className="text-sm text-[#cbd5e0] font-['Inter']">
                <a href={`tel:${siteContent.contact.phone}`} className="hover:text-[#c9a961] transition-colors">
                  {siteContent.contact.phone}
                </a>
              </li>
              <li className="text-sm text-[#cbd5e0] font-['Inter']">
                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-[#c9a961] transition-colors">
                  {siteContent.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a1f2e] mt-8 pt-8">
          <div className="text-center">
            <p className="text-sm text-[#718096] font-['Inter']">
              © {currentYear} {siteContent.restaurant.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;