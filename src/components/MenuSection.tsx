"use client";

import { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { siteContent } from '@/config/siteContent';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  veg: boolean;
}

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch('/menu.json');
        if (!response.ok) {
          throw new Error('Failed to fetch menu');
        }
        const data = await response.json();
        setMenuItems(data.items);
        setFilteredItems(data.items);
      } catch (err) {
        setError('Failed to load menu. Please try again later.');
        console.error('Error loading menu:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    let filtered = menuItems;

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(term) || 
        item.description.toLowerCase().includes(term)
      );
    }

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    setFilteredItems(filtered);
  }, [searchTerm, activeCategory, menuItems]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          MENU
        </h2>

        {/* Search and Filter Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 border border-cyan-500/30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {siteContent.menu.categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {activeCategory === category && (
                    <Filter size={16} />
                  )}
                  <span>{category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-pink-400">
                      ₹{item.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      item.veg 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}>
                      {item.veg ? 'VEG' : 'NON-VEG'}
                    </span>
                    
                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded border border-gray-700">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No items found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;