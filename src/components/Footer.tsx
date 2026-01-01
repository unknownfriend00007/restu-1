"use client";

import { Link } from 'react-router-dom';
import { Facebook, Instagram, Send, Phone, Mail, MapPin, Clock, Gamepad2 } from 'lucide-react';
import { siteContent } from '@/config/siteContent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-cyan-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center neon-border">
                <Gamepad2 size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {siteContent.restaurant.name}
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {siteContent.restaurant.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              {siteContent.restaurant.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href={`tel:${siteContent.contact.phone}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {siteContent.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={18} className="text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href={`mailto:${siteContent.contact.email}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {siteContent.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-pink-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  {siteContent.contact.address.street}<br />
                  {siteContent.contact.address.city}, {siteContent.contact.address.state} {siteContent.contact.address.zip}
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
              Business Hours
            </h4>
            <ul className="space-y-2">
              {siteContent.hours.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Clock size={18} className="text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400">{item.day}</div>
                    <div className="text-white font-medium">{item.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a 
                href={siteContent.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={siteContent.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={siteContent.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-500 transition-all"
              >
                <Send size={20} />
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} MYSTERIA Cafe, Diner & Games. All rights reserved.
            </div>
          </div>
        </div>

        {/* Made by RPS Link */}
        <div className="mt-4 text-center">
          <a
            href="mailto:mail.rps.active@proton.me"
            className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
          >
            Made by: RPS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;