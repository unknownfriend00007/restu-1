"use client";

import { useState, useEffect } from 'react';
import { Search, Download, CheckCircle, XCircle } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  veg: boolean;
  image: string;
}

const MysteriaMenu = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Starters', 'Main Course', 'Beverages', 'Desserts', 'Gaming Snacks'];

  useEffect(() => {
    // Simulate loading menu data
    const mockMenuData: MenuItem[] = [
      {
        id: 1,
        name: 'Truffle Mushroom Risotto',
        description: 'Creamy arborio rice with wild mushrooms, truffle oil, and parmesan',
        price: 549,
        category: 'Main Course',
        veg: true,
        image: 'https://images.unsplash.com/photo-1476124369491-b79cef575e0a?w=800'
      },
      {
        id: 2,
        name: 'Wagyu Beef Burger',
        description: 'Premium wagyu patty with caramelized onions, aged cheddar, truffle aioli',
        price: 749,
        category: 'Main Course',
        veg: false,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800'
      },
      {
        id: 3,
        name: 'Seafood Platter',
        description: 'Fresh selection of lobster, prawns, and scallops with lemon butter',
        price: 899,
        category: 'Starters',
        veg: false,
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800'
      },
      {
        id: 4,
        name: 'Berry Panna Cotta',
        description: 'Silky vanilla panna cotta with fresh berries and citrus reduction',
        price: 349,
        category: 'Desserts',
        veg: true,
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800'
      },
      {
        id: 5,
        name: 'Craft Coffee Selection',
        description: 'Single-origin beans brewed to perfection with artisanal techniques',
        price: 199,
        category: 'Beverages',
        veg: true,
        image: 'https://images.unsplash.com/photo-1542181961-9590d0c79dab?w=800'
      },
      {
        id: 6,
        name: 'Gaming Power Bites',
        description: 'Energy-boosting snacks perfect for intense gaming sessions',
        price: 249,
        category: 'Gaming Snacks',
        veg: true,
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800'
      }
    ];

    setTimeout(() => {
      setItems(mockMenuData);
      setFilteredItems(mockMenuData);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = items;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (activeCategory !== 'All') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    setFilteredItems(filtered);
  }, [searchTerm, activeCategory, items]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#f8f6f3] to-white pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-['Cormorant_Garamond'] text-6xl text-[#0f1419] font-light mb-4">
            Our Menu
          </h1>
          <p className="font-['Inter'] text-lg text-[#4a5568]">
            Crafted with passion, served with excellence
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            {/* Search Input */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#718096]" size={24} />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-14 bg-[#f8f6f3] border-2 border-transparent rounded-xl pl-12 pr-4 font-['Inter'] text-lg text-[#1a1f2e] placeholder-[#718096] focus:border-[#c9a961] focus:bg-white focus:shadow-lg transition-all duration-300"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-['Inter'] text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-[#c9a961] text-[#0f1419] shadow-lg'
                      : 'bg-[#f8f6f3] text-[#4a5568] hover:bg-white hover:border-2 hover:border-[#e2e8f0]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Download Button */}
            <div className="mt-6 flex justify-center">
              <button className="flex items-center space-x-2 px-6 py-3 bg-[#0f1419] text-white rounded-xl font-['Inter'] font-medium hover:bg-[#1a1f2e] transition-colors duration-300">
                <Download size={20} />
                <span>Download Full Menu</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                  <div className="bg-gray-300 h-48 rounded-xl mb-4"></div>
                  <div className="space-y-3">
                    <div className="bg-gray-300 h-6 rounded"></div>
                    <div className="bg-gray-300 h-4 rounded"></div>
                    <div className="bg-gray-300 h-4 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 bg-[#cbd5e0] rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-[#718096]" />
              </div>
              <h3 className="font-['Josefin_Sans'] text-2xl text-[#4a5568] mb-2">No dishes found</h3>
              <p className="font-['Inter'] text-lg text-[#718096]">Try a different search term or category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg border border-[#e2e8f0] overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:border-[#c9a961] transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-[#f8f6f3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Tag */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      <span className="font-['Inter'] text-xs font-semibold text-[#4a5568]">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-['Josefin_Sans'] text-xl font-semibold text-[#1a1f2e] mb-2">
                      {item.name}
                    </h3>
                    <p className="font-['Inter'] text-sm text-[#718096] leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      {/* Veg/Non-veg Indicator */}
                      <div className="flex items-center space-x-2">
                        {item.veg ? (
                          <>
                            <CheckCircle size={16} className="text-[#059669]" />
                            <span className="font-['Inter'] text-xs text-[#059669] font-medium">VEG</span>
                          </>
                        ) : (
                          <>
                            <XCircle size={16} className="text-[#dc2626]" />
                            <span className="font-['Inter'] text-xs text-[#dc2626] font-medium">NON-VEG</span>
                          </>
                        )}
                      </div>

                      {/* Price */}
                      <span className="font-['Cormorant_Garamond'] text-2xl text-[#c9a961] font-semibold">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MysteriaMenu;