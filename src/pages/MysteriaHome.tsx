"use client";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Gamepad2, Coffee, Star } from 'lucide-react';

const MysteriaHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}>
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
            {['Home', 'Menu', 'Contact', 'Location'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="font-['Inter'] text-sm font-medium text-[#4a5568] hover:text-[#c9a961] transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-[#0f1419] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#0f1419] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#0f1419]"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f1419] to-[#1a1f2e]">
        <div className="absolute inset-0 opacity-[0.03] bg-[#0f1419]"></div>
        
        <div className="relative z-10 text-center text-[#f8f6f3] px-4 max-w-4xl mx-auto">
          <h1 className="font-['Cormorant_Garamond'] text-7xl md:text-9xl font-light mb-6 animate-fade-in">
            MYSTERIA
          </h1>
          <p className="font-['Josefin_Sans'] text-xl md:text-2xl text-[#c9a961] tracking-widest uppercase mb-8 animate-fade-in-delay">
            Cafe, Diner & Games
          </p>
          <div className="w-16 h-0.5 bg-[#c9a961] mx-auto mb-8 animate-fade-in-delay-2"></div>
          <p className="font-['Inter'] text-lg text-[#cbd5e0] font-light mb-12 animate-fade-in-delay-2">
            Where Gaming Meets Gastronomy
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2 mt-16">
            <Link 
              to="/menu"
              className="bg-[#c9a961] text-[#0f1419] px-12 py-4 rounded-xl font-['Inter'] font-semibold hover:bg-[#b89751] hover:shadow-2xl hover:scale-105 transition-all duration-400 text-lg"
            >
              Explore Menu
            </Link>
            <Link 
              to="/location"
              className="border-2 border-[#c9a961] text-[#c9a961] px-12 py-4 rounded-xl font-['Inter'] font-semibold hover:bg-[rgba(201,169,97,0.1)] transition-all duration-400 text-lg"
            >
              Visit Us
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-[#c9a961]" size={32} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#f8f6f3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-5xl text-[#0f1419] font-light mb-4">
              The MYSTERIA Experience
            </h2>
            <p className="font-['Inter'] text-lg text-[#718096]">
              Excellence in every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: Gamepad2,
                title: "Premium Gaming",
                description: "Latest consoles and high-performance PCs"
              },
              {
                icon: Coffee,
                title: "Gourmet Dining",
                description: "Chef-crafted dishes with premium ingredients"
              },
              {
                icon: Star,
                title: "Refined Atmosphere",
                description: "Sophisticated ambiance for discerning guests"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="bg-white p-12 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-[#f8f6f3] rounded-full flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-[#c9a961]" size={32} />
                </div>
                <h3 className="font-['Josefin_Sans'] text-2xl text-[#1a1f2e] font-semibold text-center mb-4">
                  {feature.title}
                </h3>
                <p className="font-['Inter'] text-lg text-[#4a5568] text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a1f2e]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-['Cormorant_Garamond'] text-4xl text-[#f8f6f3] font-light mb-4">
            Ready to Experience MYSTERIA?
          </h2>
          <p className="font-['Inter'] text-lg text-[#cbd5e0] mb-8">
            Reserve your table today
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-[#c9a961] text-[#0f1419] px-12 py-4 rounded-xl font-['Inter'] font-semibold hover:bg-[#b89751] hover:shadow-2xl hover:scale-105 transition-all duration-400 text-lg"
          >
            Pre-Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MysteriaHome;