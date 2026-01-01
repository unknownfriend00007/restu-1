"use client";

import { MenuItem } from '@/data/menuData';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <div className="premium-card group overflow-hidden animate-fade-in opacity-0">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md shadow-sm border border-gray-100">
          <span className="text-[11px] font-semibold text-mysteria-textSecondary uppercase tracking-widest">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-subheading text-2xl font-semibold text-mysteria-navy mb-2">
          {item.name}
        </h3>
        <p className="text-mysteria-textSecondary text-[15px] leading-relaxed mb-6 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${item.veg ? 'bg-[#059669]' : 'bg-[#dc2626]'}`}></div>
            <span className={`text-xs font-medium ${item.veg ? 'text-[#059669]' : 'text-[#dc2626]'}`}>
              {item.veg ? 'VEG' : 'NON-VEG'}
            </span>
          </div>
          <span className="font-display text-3xl font-semibold text-mysteria-gold">
            {item.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;