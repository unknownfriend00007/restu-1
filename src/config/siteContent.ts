const VITE_CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || "+91-XXXXXXXXXX";
const VITE_CONTACT_WHATSAPP = import.meta.env.VITE_CONTACT_WHATSAPP || "+91-XXXXXXXXXX";
const VITE_CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "info@restaurant.com";
const VITE_ADDRESS_STREET = import.meta.env.VITE_ADDRESS_STREET || "123 Main Street";
const VITE_ADDRESS_CITY = import.meta.env.VITE_ADDRESS_CITY || "Narnaund";
const VITE_ADDRESS_STATE = import.meta.env.VITE_ADDRESS_STATE || "Haryana";
const VITE_ADDRESS_ZIP = import.meta.env.VITE_ADDRESS_ZIP || "125039";
const VITE_MAP_LINK = import.meta.env.VITE_MAP_LINK || "https://maps.google.com/?q=28.9470,76.1065";
const VITE_MAP_EMBED_URL = import.meta.env.VITE_MAP_EMBED_URL || "https://maps.google.com/maps?q=28.9470,76.1065&output=embed";
const VITE_TELEGRAM_USERNAME = import.meta.env.VITE_TELEGRAM_USERNAME || "restaurantchannel";
const VITE_MENU_DOWNLOAD_LINK = import.meta.env.VITE_MENU_DOWNLOAD_LINK || "https://t.me/channel/123";
const VITE_CONTACT_FORM_ACTION = import.meta.env.VITE_CONTACT_FORM_ACTION || "https://formspree.io/f/YOUR_ID";
const VITE_TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || "YOUR_TOKEN_HERE";
const VITE_TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || "YOUR_CHAT_ID_HERE";

export const siteContent = {
  restaurant: {
    name: "MYSTERIA Cafe, Diner & Games",
    tagline: "Where Gaming Meets Gastronomy",
    description: "Experience the future of dining and gaming. MYSTERIA combines cutting-edge technology with culinary excellence in a cyberpunk-inspired environment. Challenge your friends in our state-of-the-art gaming arena while enjoying delicious food and drinks.",
    logo: "/logo.png"
  },

  contact: {
    phone: VITE_CONTACT_PHONE,
    whatsapp: VITE_CONTACT_WHATSAPP,
    email: VITE_CONTACT_EMAIL,
    address: {
      street: VITE_ADDRESS_STREET,
      city: VITE_ADDRESS_CITY,
      state: VITE_ADDRESS_STATE,
      zip: VITE_ADDRESS_ZIP,
      mapLink: VITE_MAP_LINK,
      embedUrl: VITE_MAP_EMBED_URL
    }
  },

  hours: [
    { day: "Monday - Friday", time: "10:00 AM - 12:00 AM" },
    { day: "Saturday - Sunday", time: "09:00 AM - 1:00 AM" }
  ],

  social: {
    instagram: "https://instagram.com/mysteria.cafe",
    facebook: "https://facebook.com/mysteria.cafe",
    telegram: "https://t.me/mysteriaofficial"
  },

  menu: {
    telegramChannelUsername: VITE_TELEGRAM_USERNAME,
    downloadLink: VITE_MENU_DOWNLOAD_LINK,
    categories: ["All", "Starters", "Main Course", "Beverages", "Desserts", "Gaming Snacks"]
  },

  homepage: {
    heroImage: "/hero.jpg",
    aboutText: "Welcome to MYSTERIA, where the digital and culinary worlds collide. Our cyberpunk-inspired space features state-of-the-art gaming stations, immersive lighting, and a menu designed for gamers and food enthusiasts alike. Whether you're here for a quick snack between matches or a full dining experience, our fusion cuisine will transport your taste buds to another dimension. Our chefs combine traditional techniques with molecular gastronomy to create dishes that are as visually stunning as they are delicious. Join us and become part of the MYSTERIA experience.",
    featuredDishes: [
      { 
        name: "Neon Nachos", 
        description: "Crispy tortilla chips loaded with melted cheese, jalapeños, and our signature neon cheese sauce", 
        price: "₹249", 
        image: "/dish1.jpg" 
      },
      { 
        name: "Cyber Burger", 
        description: "Double patty burger with special sauce, lettuce, tomato, and pickles in a glowing brioche bun", 
        price: "₹399", 
        image: "/dish2.jpg" 
      },
      { 
        name: "Quantum Wings", 
        description: "Chicken wings tossed in our atomic hot sauce with cooling blue cheese dip", 
        price: "₹349", 
        image: "/dish3.jpg" 
      }
    ]
  },

  forms: {
    contactFormAction: VITE_CONTACT_FORM_ACTION,
    telegramBotToken: VITE_TELEGRAM_BOT_TOKEN,
    telegramChatId: VITE_TELEGRAM_CHAT_ID
  },

  seo: {
    title: "MYSTERIA Cafe, Diner & Games - Where Gaming Meets Gastronomy",
    description: "Experience the future of dining and gaming at MYSTERIA. Cyberpunk-themed cafe with state-of-the-art gaming stations and innovative fusion cuisine in Narnaund, Haryana.",
    keywords: "gaming cafe, cyberpunk restaurant, MYSTERIA, gaming and food, Narnaund, Haryana, futuristic dining, gaming lounge"
  }
};