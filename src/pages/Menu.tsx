"use client";

import { useState } from 'react';
import { Download, Clock } from 'lucide-react';
import { siteContent } from '@/config/siteContent';
import TelegramWidget from '@/components/TelegramWidget';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl mb-8 text-orange-100">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
          <a 
            href={siteContent.menu.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Download size={20} />
            <span>Download Full Menu</span>
          </a>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {siteContent.menu.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Menu Categories */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                {activeCategory} Menu
              </h2>
              
              {/* Sample Menu Items - Replace with actual menu data */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">Signature Butter Chicken</h3>
                    <span className="text-lg font-bold text-orange-600">₹299</span>
                  </div>
                  <p className="text-gray-600">
                    Tender chicken pieces marinated in yogurt and spices, cooked in a rich, creamy tomato-based gravy with aromatic herbs
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">Royal Biryani</h3>
                    <span className="text-lg font-bold text-orange-600">₹399</span>
                  </div>
                  <p className="text-gray-600">
                    Fragrant basmati rice layered with marinated meat, caramelized onions, and exotic spices, slow-cooked to perfection
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">Paneer Tikka</h3>
                    <span className="text-lg font-bold text-orange-600">₹249</span>
                  </div>
                  <p className="text-gray-600">
                    Soft cottage cheese cubes marinated in yogurt and spices, grilled in a traditional clay oven for a smoky flavor
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">Dal Makhani</h3>
                    <span className="text-lg font-bold text-orange-600">₹199</span>
                  </div>
                  <p className="text-gray-600">
                    Creamy black lentils slow-cooked overnight with butter and cream, tempered with aromatic spices
                  </p>
                </div>
              </div>
            </div>

            {/* Telegram Widget */}
            <div>
              <TelegramWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="text-orange-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Fresh Daily</h3>
              <p className="text-gray-600">
                Our menu changes seasonally to ensure the freshest ingredients
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-600 mx-auto mb-4">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Locally Sourced</h3>
              <p className="text-gray-600">
                We partner with local farmers and suppliers for the best quality
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-600 mx-auto mb-4">
                <span className="text-4xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Chef's Special</h3>
              <p className="text-gray-600">
                Ask about our daily specials and chef's recommendations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;