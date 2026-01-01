"use client";

import { Download } from 'lucide-react';
import { siteContent } from '@/config/siteContent';
import MenuSection from '@/components/MenuSection';

const Menu = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={siteContent.homepage.heroImage}
            alt="MYSTERIA Menu"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1514984879728-be0afccc0d4b?w=1920&h=1080&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            OUR MENU
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Experience the fusion of gaming and gastronomy
          </p>
          <a 
            href={siteContent.menu.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105"
          >
            <Download size={20} />
            <span>Download Full Menu</span>
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection />
    </div>
  );
};

export default Menu;