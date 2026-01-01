"use client";

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const MysteriaHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
    { name: 'Location', href: '/location' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Scroll effect would be handled in individual pages

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-[#0f1419] rounded-full flex items-center justify-center">
            <span className="text-[#f8f6f3] font-bold text-2xl">M</span>
          </div>
          <div className="text-left">
            <h1 className="font-['Cormorant_Garamond'] text-3xl text-[#0f1419] font-light">MYSTERIA</h1>
            <p className="font-['Inter'] text-xs text-[#718096] tracking-widest">CAFE · DINER · GAMES</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`font-['Inter'] text-sm font-medium transition-colors duration-300 relative ${
                isActive(item.href)
                  ? 'text-[#c9a961]'
                  : 'text-[#4a5568] hover:text-[#c9a961]'
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c9a961]"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 font-['Inter'] text-lg font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-[#c9a961]'
                      : 'text-[#4a5568] hover:text-[#c9a961]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MysteriaHeader;