export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  veg: boolean;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Truffle Mushroom Risotto",
    description: "Creamy arborio rice with wild mushrooms, truffle oil, and aged parmesan shavings.",
    price: "₹549",
    category: "Main Course",
    veg: true,
    image: "https://images.unsplash.com/photo-1476124369491-b79cef575e0a?w=800&q=80"
  },
  {
    id: 2,
    name: "Wagyu Beef Burger",
    description: "Premium wagyu patty with caramelized onions, aged cheddar, and house-made truffle aioli.",
    price: "₹749",
    category: "Main Course",
    veg: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80"
  },
  {
    id: 3,
    name: "Burrata & Heirloom Tomato",
    description: "Creamy burrata cheese served with seasonal heirloom tomatoes and basil pesto oil.",
    price: "₹449",
    category: "Starters",
    veg: true,
    image: "https://images.unsplash.com/photo-1608897013039-887f3c0cac56?w=800&q=80"
  },
  {
    id: 4,
    name: "Golden Garlic Prawns",
    description: "Sautéed jumbo prawns in a rich garlic butter sauce with hints of lemon and parsley.",
    price: "₹499",
    category: "Starters",
    veg: false,
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=800&q=80"
  },
  {
    id: 5,
    name: "Saffron Infused Latte",
    description: "Espresso combined with milk infused with premium Kashmiri saffron and honey.",
    price: "₹349",
    category: "Beverages",
    veg: true,
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=800&q=80"
  },
  {
    id: 6,
    name: "Artisan Nachos",
    description: "Hand-cut corn tortillas with aged cheddar blend, jalapeños, and fresh house salsa.",
    price: "₹349",
    category: "Gaming Snacks",
    veg: true,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800&q=80"
  },
  {
    id: 7,
    name: "Dark Chocolate Lava Cake",
    description: "Decadent 70% dark chocolate cake with a molten center, served with vanilla bean gelato.",
    price: "₹399",
    category: "Desserts",
    veg: true,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80"
  },
  {
    id: 8,
    name: "Wild Berry Sparkling Tea",
    description: "Refreshing cold brew hibiscus tea with a blend of seasonal forest berries.",
    price: "₹249",
    category: "Beverages",
    veg: true,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80"
  },
  {
    id: 9,
    name: "Tandoori Chicken Wings",
    description: "Succulent wings marinated in traditional spices and charred in our clay oven.",
    price: "₹399",
    category: "Gaming Snacks",
    veg: false,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&q=80"
  },
  {
    id: 10,
    name: "Miso Glazed Salmon",
    description: "Pan-seared Atlantic salmon with a sweet and savory miso glaze, served with baby bok choy.",
    price: "₹699",
    category: "Main Course",
    veg: false,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80"
  }
];