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

export const siteContent = {
  restaurant: {
    name: "Restaurant Name",
    tagline: "Authentic Flavors, Memorable Experiences",
    description: "Your restaurant description here...",
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
    { day: "Monday - Friday", time: "11:00 AM - 10:00 PM" },
    { day: "Saturday - Sunday", time: "10:00 AM - 11:00 PM" }
  ],

  social: {
    instagram: "https://instagram.com/restaurant",
    facebook: "https://facebook.com/restaurant",
    telegram: "https://t.me/restaurantchannel"
  },

  menu: {
    telegramChannelUsername: VITE_TELEGRAM_USERNAME,
    downloadLink: VITE_MENU_DOWNLOAD_LINK,
    categories: ["All", "Breakfast", "Lunch", "Dinner", "Beverages"]
  },

  homepage: {
    heroImage: "/hero.jpg",
    aboutText: "Welcome to our restaurant, where culinary tradition meets modern innovation. Our journey began with a simple passion for bringing people together through exceptional food. Every dish tells a story, carefully crafted with the finest ingredients and years of expertise. We believe that great food is not just about taste, but about creating memories that last a lifetime. Our chefs blend traditional recipes with contemporary techniques to create dishes that are both familiar and exciting. Whether you're joining us for a casual lunch or a special celebration, we're committed to making every visit unforgettable.",
    featuredDishes: [
      { 
        name: "Signature Butter Chicken", 
        description: "Tender chicken in rich, creamy tomato sauce with aromatic spices", 
        price: "₹299", 
        image: "/dish1.jpg" 
      },
      { 
        name: "Royal Biryani", 
        description: "Fragrant basmati rice with marinated meat and exotic spices", 
        price: "₹399", 
        image: "/dish2.jpg" 
      },
      { 
        name: "Fresh Garden Salad", 
        description: "Crisp vegetables with house-made dressing and herbs", 
        price: "₹249", 
        image: "/dish3.jpg" 
      }
    ]
  },

  forms: {
    contactFormAction: VITE_CONTACT_FORM_ACTION
  },

  seo: {
    title: "Restaurant Name - Authentic Flavors in Narnaund",
    description: "Experience authentic flavors and memorable dining at Restaurant Name in Narnaund, Haryana. Fresh ingredients, traditional recipes, and warm hospitality.",
    keywords: "restaurant, narnaund, haryana, authentic food, dining, biryani, butter chicken"
  }
};