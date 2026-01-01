"use client";

import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, Gamepad2 } from 'lucide-react';
import { siteContent } from '@/config/siteContent';
import MenuSection from '@/components/MenuSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={siteContent.homepage.heroImage}
            alt="MYSTERIA Cafe, Diner & Games"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1514984879728-be0afccc0d4b?w=1920&h=1080&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
          {/* Animated Cyberpunk Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            MYSTERIA
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300 font-light tracking-wider">
            Cafe, Diner & Games
          </p>
          <p className="text-xl md:text-2xl mb-12 text-gray-400 italic">
            {siteContent.restaurant.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/menu"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg"
            >
              View Menu
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 text-lg"
            >
              Place Order
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
<dyad-write path="src/pages/Index.tsx" description="Updating Index page with cyberpunk theme and MYSTERIA branding (continued)">
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Gamepad2 className="text-cyan-400" size={48} />
            </div>
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About MYSTERIA
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {siteContent.homepage.aboutText}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-cyan-500/20">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">Gaming Arena</h3>
                <p className="text-gray-400">State-of-the-art gaming stations with the latest titles and high-performance hardware</p>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-purple-500/20">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Fusion Cuisine</h3>
                <p className="text-gray-400">Innovative dishes that blend traditional flavors with molecular gastronomy techniques</p>
              </div>
              <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-pink-500/20">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-pink-400 mb-2">Immersive Experience</h3>
                <p className="text-gray-400">Cyberpunk-themed environment with dynamic lighting and interactive elements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />

      {/* Quick Info */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Business Hours</h3>
              <div className="space-y-2 mt-4">
                {siteContent.hours.map((item, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-3 border border-cyan-500/20">
                    <p className="font-medium text-white">{item.day}</p>
                    <p className="text-cyan-400">{item.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Location</h3>
              <p className="text-gray-300 mb-4">
                {siteContent.contact.address.street}<br />
                {siteContent.contact.address.city}, {siteContent.contact.address.state}
              </p>
              <Link 
                to="/location"
                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                <span>Get Directions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">Contact</h3>
              <p className="text-gray-300 mb-4">
                Call us for reservations<br />
                or special events
              </p>
              <a 
                href={`tel:${siteContent.contact.phone}`}
                className="inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 font-medium transition-colors"
              >
                <span>{siteContent.contact.phone}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ready to Enter the Future?
          </h2>
          <p className="text-xl mb-12 text-gray-300">Join us for an unforgettable experience where gaming meets gastronomy</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-lg"
            >
              Place Your Order
            </Link>
            <a 
              href={`tel:${siteContent.contact.phone}`}
              className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105 text-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;