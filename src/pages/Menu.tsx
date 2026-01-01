"use client";

import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { siteContent } from '@/config/siteContent';
import menuData from '@/data/menu.json';

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(menuData.items);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = menuData.items;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    setFilteredItems(filtered);
  }, [searchTerm, activeCategory]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      {/* Navigation space for fixed header */}
      <div className="h-20"></div>

      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#f8f6f3] to-[#ffffff] py-32 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-light font-['Cormorant_Garamond'] text-[#0f1419] mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-[#4a5568] font-['Inter']">
            Crafted with passion, served with excellence
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="container mx-auto px-4 mb-12">
        <div className="bg-[#ffffff] p-8 rounded-2xl shadow-[0_4px_16px_rgba(15,20,25,0.08)]">
          {/* Search Input */}
          <div className="relative mb-6">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#718096] w-5 h-5" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full h-13 bg-[#f8f6f3] border-2 border-transparent rounded-xl pl-12 pr-4 text-base text-[#1a1f2e] font-['Inter'] focus:bg-[#ffffff] focus:border-[#c9a961] transition-all duration-300"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {siteContent.menu.categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#c9a961] text-[#0f1419] font-medium font-['Inter']'
                    : 'bg-[#f8f6f3] text-[#4a5568] font-medium font-['Inter'] hover:bg-[#ffffff] hover:border-[#e2e8f0] border-2 border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="container mx-auto px-4 pb-24">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-[#ffffff] rounded-2xl shadow-[0_2px_8px_rgba(15,20,25,0.06)] animate-pulse">
                <div className="h-48 bg-[#f8f6f3] rounded-t-2xl"></div>
                <div className="p-6">
                  <div className="h-6 bg-[#f8f6f3] rounded mb-4"></div>
                  <div className="h-4 bg-[#f8f6f3] rounded mb-2"></div>
                  <div className="h-4 bg-[#f8f6f3] rounded w-3/4 mb-6"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-[#f8f6f3] rounded w-8"></div>
                    <div className="h-6 bg-[#f8f6f3] rounded w-12"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 mx-auto mb-6 text-[#cbd5e0]">
              <Search className="w-full h-full" />
              <X className="absolute w-16 h-16 text-[#cbd5e0]" />
            </div>
            <h3 className="text-2xl font-semibold font-['Josefin_Sans'] text-[#4a5568] mb-2">
              No dishes found
            </h3>
            <p className="text-base text-[#718096] font-['Inter']">
              Try a different search term
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-[#ffffff] border border-[#e2e8f0] rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(15,20,25,0.06)] transition-all duration-400 hover:shadow-[0_12px_32px_rgba(201,169,97,0.15)] hover:border-[#c9a961] hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#f8f6f3]/95 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <span className="text-xs font-semibold font-['Inter'] text-[#4a5568]">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-['Josefin_Sans'] text-[#1a1f2e] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-base text-[#718096] font-['Inter'] leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.veg ? 'bg-[#059669]' : 'bg-[#dc2626]'
                        }`}
                      ></div>
                      <span
                        className={`text-xs font-medium font-['Inter'] ${
                          item.veg ? 'text-[#059669]' : 'text-[#dc2626]'
                        }`}
                      >
                        {item.veg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>
                    <span className="text-2xl font-semibold font-['Cormorant_Garamond'] text-[#c9a961]">
                      ₹{item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

// Add X icon for empty state
const X = ({ className }: { className: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Menu;