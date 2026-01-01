"use client";

import { Link } from 'react-router-dom';
import { ChevronDown, Gamepad2, UtensilsCrossed, Sparkles } from 'lucide-react';
import { siteContent } from '@/config/siteContent';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-mysteria-navy">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-mysteria-charcoal via-mysteria-navy to-mysteria-navy"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="font-display text-7xl md:text-[120px] font-light text-mysteria-cream tracking-wider mb-2 animate-fade-in opacity-0">
            {siteContent.restaurant.name}
          </h1>
          <p className="font-subheading text-lg md:text-2xl text-mysteria-gold uppercase tracking-[0.4em] mb-8 animate-fade-in opacity-0 animate-delay-100">
            {siteContent.restaurant.tagline}
          </p>
          
          <div className="w-16 h-[2px] bg-mysteria-gold mb-8 animate-fade-in opacity-0 animate-delay-200"></div>
          
          <p className="font-sans text-lg md:text-xl text-[#cbd5e0] font-light max-w-2xl mb-12 animate-fade-in opacity-0 animate-delay-300 leading-relaxed">
            {siteContent.restaurant.fullTagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in opacity-0 animate-delay-300">
            <Link to="/menu" className="gold-button">
              Explore Menu
            </Link>
            <Link to="/location" className="outline-button">
              Visit Us
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-mysteria-gold animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-mysteria-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-5xl font-display text-mysteria-navy mb-4">The MYSTERIA Experience</h2>
            <p className="text-mysteria-textMuted uppercase tracking-widest text-sm">Excellence in every detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: Gamepad2, 
                title: "Premium Gaming", 
                desc: "Equipped with the latest next-gen consoles and high-performance PC rigs for an unparalleled gaming session." 
              },
              { 
                icon: UtensilsCrossed, 
                title: "Gourmet Dining", 
                desc: "A menu meticulously crafted by our executive chefs, featuring premium global ingredients and bold flavors." 
              },
              { 
                icon: Sparkles, 
                title: "Refined Atmosphere", 
                desc: "A sophisticated ambiance designed for discerning guests who appreciate comfort, aesthetics, and high-end tech." 
              }
            ].map((feature, i) => (
              <div key={i} className="premium-card p-12 text-center flex flex-col items-center group">
                <div className="w-16 h-16 bg-mysteria-cream rounded-2xl flex items-center justify-center mb-8 text-mysteria-gold transition-colors group-hover:bg-mysteria-gold group-hover:text-white">
                  <feature.icon size={32} />
                </div>
                <h3 className="font-subheading text-2xl font-semibold text-mysteria-navy mb-4">{feature.title}</h3>
                <p className="text-mysteria-textSecondary leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-24 bg-mysteria-charcoal text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-5xl font-display mb-6">Ready to Experience MYSTERIA?</h2>
          <p className="text-xl text-[#cbd5e0] mb-12 font-light">Join us for an evening where entertainment meets epicurean delight.</p>
          <Link to="/contact" className="gold-button inline-block">
            Pre-Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;