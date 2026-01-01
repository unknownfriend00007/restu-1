"use client";

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '@/config/siteContent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mysteria-navy text-mysteria-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {/* Brand Column */}
          <div className="flex flex-col space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="font-display text-3xl font-light tracking-wider text-white">
                {siteContent.restaurant.name}
              </span>
              <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-mysteria-textMuted">
                {siteContent.restaurant.fullTagline}
              </span>
            </Link>
            <p className="text-mysteria-textMuted text-sm leading-relaxed max-w-xs">
              {siteContent.restaurant.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-8">
            <h4 className="font-subheading text-mysteria-gold uppercase tracking-[0.2em] text-sm">Navigate</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Contact', 'Location'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-[#cbd5e0] hover:text-mysteria-gold transition-colors text-[15px]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-8">
            <h4 className="font-subheading text-mysteria-gold uppercase tracking-[0.2em] text-sm">Connect</h4>
            <ul className="space-y-5">
              <li className="flex items-center space-x-3 text-[#cbd5e0]">
                <Phone size={18} className="text-mysteria-gold" />
                <a href={`tel:${siteContent.contact.phone}`} className="hover:text-mysteria-gold transition-colors">
                  {siteContent.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-[#cbd5e0]">
                <Mail size={18} className="text-mysteria-gold" />
                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-mysteria-gold transition-colors">
                  {siteContent.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-3 text-[#cbd5e0]">
                <MapPin size={18} className="text-mysteria-gold mt-1" />
                <span>{siteContent.contact.address.city}, {siteContent.contact.address.state}</span>
              </li>
            </ul>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-mysteria-gold hover:border-mysteria-gold hover:text-mysteria-navy transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-mysteria-textMuted text-sm">
          <p>© {currentYear} {siteContent.restaurant.name} Cafe. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-mysteria-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-mysteria-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;