"use client";

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { siteContent } from '@/config/siteContent';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Location', href: '/location' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{siteContent.restaurant.name}</h1>
              <p className="text-xs text-gray-600 hidden sm:block">{siteContent.restaurant.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                  location.pathname === item.href ? 'text-orange-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${siteContent.contact.phone}`}
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-orange-600"
            >
              <Phone size={16} />
              <span>{siteContent.contact.phone}</span>
            </a>
            <Link 
              to="/location"
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-orange-600"
            >
              <MapPin size={16} />
              <span>Location</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-orange-600 hover:bg-gray-50 ${
                    location.pathname === item.href ? 'text-orange-600 bg-orange-50' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-gray-200">
                <a 
                  href={`tel:${siteContent.contact.phone}`}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600"
                >
                  📞 {siteContent.contact.phone}
                </a>
                <Link 
                  to="/location"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600"
                >
                  📍 Location
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;