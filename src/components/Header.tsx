"use client";

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteContent } from '@/config/siteContent';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
    { name: 'Location', href: '/location' }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center",
      isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
          <span className="font-display text-3xl font-light tracking-wider text-mysteria-navy leading-none">
            {siteContent.restaurant.name}
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-mysteria-textMuted mt-1">
            {siteContent.restaurant.tagline}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-[15px] font-medium transition-colors hover:text-mysteria-gold relative group",
                location.pathname === item.href ? "text-mysteria-gold" : "text-mysteria-textSecondary"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-[2px] bg-mysteria-gold transition-all duration-300 group-hover:w-full",
                location.pathname === item.href && "w-full"
              )}></span>
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-mysteria-navy hover:text-mysteria-gold transition-colors"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={cn(
        "fixed inset-0 top-20 bg-white z-40 transition-transform duration-500 ease-in-out md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-8 space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-2xl font-display tracking-wide",
                location.pathname === item.href ? "text-mysteria-gold" : "text-mysteria-navy"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-gray-100 flex flex-col space-y-4">
            <span className="text-mysteria-textMuted uppercase tracking-widest text-xs">Connect</span>
            <a href={`tel:${siteContent.contact.phone}`} className="text-mysteria-textSecondary font-medium">
              {siteContent.contact.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;