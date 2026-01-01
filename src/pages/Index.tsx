"use client";

import { Link } from 'react-router-dom';
import { siteContent } from '@/config/siteContent';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={siteContent.homepage.heroImage}
            alt="MYSTERIA Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1419] to-[#1a1f2e] opacity-90"></div>
          {/* Fixed SVG URL escaping issue */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grain%22%20width%3D%22100%22%20height%3D%22100%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%221%22%20fill%3D%22white%22%20opacity%3D%220.03%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22url(%23grain)%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
        </div>
        
        <div className="relative z-10 text-center text-[#f8f6f3] px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light font-['Cormorant_Garamond'] mb-6 animate-fade-in">
            {siteContent.restaurant.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#c9a961] font-['Josefin_Sans'] tracking-[4px] uppercase animate-fade-in-delay">
            Cafe, Diner & Games
          </p>
          <div className="w-[60px] h-0.5 bg-[#c9a961] mx-auto mb-8 animate-fade-in-delay"></div>
          <p className="text-lg text-[#cbd5e0] font-['Inter'] font-light mb-12 animate-fade-in-delay-2">
            {siteContent.restaurant.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link 
              to="/menu"
              className="bg-[#c9a961] text-[#0f1419] px-8 py-4 rounded-lg font-medium hover:bg-[#b89751] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(201,169,97,0.3)] text-lg font-['Inter']"
            >
              Explore Menu
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-[#c9a961] text-[#c9a961] px-8 py-4 rounded-lg font-medium hover:bg-[#c9a961]/10 transition-all duration-300 text-lg font-['Inter']"
            >
              Visit Us
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#c9a961] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#c9a961] rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#f8f6f3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light font-['Cormorant_Garamond'] text-[#0f1419] mb-4">
              The MYSTERIA Experience
            </h2>
            <p className="text-base text-[#718096] font-['Inter']">
              {siteContent.homepage.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {siteContent.homepage.features.map((feature, index) => (
              <div 
                key={index}
                className="bg-[#ffffff] p-8 rounded-2xl shadow-[0_4px_16px_rgba(15,20,25,0.08)] hover:shadow-[0_12px_32px_rgba(15,20,25,0.12)] transition-all duration-400 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#f8f6f3] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold font-['Josefin_Sans'] text-[#1a1f2e] mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-[#4a5568] font-['Inter'] leading-relaxed">
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
          <h2 className="text-4xl font-light font-['Cormorant_Garamond'] text-[#f8f6f3] mb-4">
            Ready to Experience MYSTERIA?
          </h2>
          <p className="text-xl text-[#cbd5e0] font-['Inter'] mb-8">
            Reserve your table today
          </p>
          <Link 
            to="/contact"
            className="bg-[#c9a961] text-[#0f1419] px-8 py-4 rounded-lg font-medium hover:bg-[#b89751] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(201,169,97,0.3)] text-lg font-['Inter']"
          >
            Pre-Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;