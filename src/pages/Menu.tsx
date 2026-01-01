"use client";

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { siteContent } from '@/config/siteContent';
import { menuItems } from '@/data/menuData';
import MenuCard from '@/components/MenuCard';
import { cn } from '@/lib/utils';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-mysteria-cream">
      {/* Header Space */}
      <div className="h-20"></div>

      {/* Page Header */}
      <header className="py-24 bg-gradient-to-b from-white to-mysteria-cream">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-display text-mysteria-navy mb-4">Our Menu</h1>
          <p className="text-mysteria-textSecondary text-xl font-light">Crafted with passion, served with excellence</p>
        </div>
      </header>

      {/* Search & Filter Bar */}
      <section className="sticky top-20 z-40 bg-mysteria-cream/80 backdrop-blur-md py-8">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col space-y-8">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-mysteria-textMuted" size={20} />
              <input 
                type="text" 
                placeholder="Search dishes..."
                className="w-full h-14 bg-mysteria-cream border-2 border-transparent focus:border-mysteria-gold focus:bg-white outline-none rounded-xl pl-16 pr-6 text-mysteria-navy transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {siteContent.menu.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border-2",
                    activeCategory === category 
                      ? "bg-mysteria-gold border-mysteria-gold text-mysteria-navy shadow-lg shadow-mysteria-gold/20" 
                      : "bg-mysteria-cream border-transparent text-mysteria-textSecondary hover:border-gray-200 hover:bg-white"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 opacity-50">
              <Search size={64} className="mx-auto mb-6 text-mysteria-textMuted" />
              <h3 className="font-subheading text-2xl text-mysteria-navy mb-2">No dishes found</h3>
              <p className="text-mysteria-textMuted">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;