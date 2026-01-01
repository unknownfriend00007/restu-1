"use client";

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Gamepad2 } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center neon-border">
              <Gamepad2 size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {siteContent.restaurant.name.split(',')[0]}
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">
                {siteContent.restaurant.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all hover:text-cyan-400 ${
                  location.pathname === item.href ? 'text-cyan-400' : 'text-gray-300'
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
              className="flex items-center space-x-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone size={16} />
              <span>{siteContent.contact.phone}</span>
            </a>
            <Link 
              to="/location"
              className="flex items-center space-x-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              <MapPin size={16} />
              <span>Location</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href 
                      ? 'text-cyan-400 bg-gray-800/50' 
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-gray-800">
                <a 
                  href={`tel:${siteContent.contact.phone}`}
                  className="block px-3 py-2 text-base font-medium text-cyan-400"
                >
                  📞 {siteContent.contact.phone}
                </a>
                <Link 
                  to="/location"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-purple-400"
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