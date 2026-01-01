export const siteContent = {
  restaurant: {
    name: "MYSTERIA",
    tagline: "Cafe · Diner · Games",
    description: "Where Gaming Meets Gastronomy",
    subtitle: "Excellence in every detail"
  },

  contact: {
    phone: "+91 98765 43210",
    email: "hello@mysteria.cafe",
    address: {
      street: "123 Marina Boulevard",
      city: "Gaming District",
      state: "Bangalore",
      zip: "Karnataka 560001",
      mapLink: "https://maps.google.com/?q=123+Marina+Boulevard,+Gaming+District,+Bangalore,+Karnataka+560001",
      embedUrl: "https://maps.google.com/maps?q=123+Marina+Boulevard,+Gaming+District,+Bangalore,+Karnataka+560001&output=embed"
    }
  },

  hours: [
    { day: "Monday - Thursday", time: "11:00 AM - 11:00 PM" },
    { day: "Friday - Sunday", time: "11:00 AM - 12:00 AM" },
    { day: "Closed", time: "Major Holidays" }
  ],

  social: {
    instagram: "https://instagram.com/mysteria",
    facebook: "https://facebook.com/mysteria",
    twitter: "https://twitter.com/mysteria",
    youtube: "https://youtube.com/mysteria"
  },

  menu: {
    categories: ["All", "Starters", "Main Course", "Beverages", "Desserts", "Gaming Snacks"],
    telegramChannelUsername: "mysteria"
  },

  forms: {
    contactFormAction: "https://formspree.io/f/your-form-id"
  },

  homepage: {
    heroImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop",
    subtitle: "Excellence in every detail", // Added subtitle here to resolve TS2339
    features: [
      {
        title: "Premium Gaming",
        description: "Latest consoles and high-performance PCs",
        icon: "🎮"
      },
      {
        title: "Gourmet Dining",
        description: "Chef-crafted dishes with premium ingredients",
        icon: "🍽️"
      },
      {
        title: "Refined Atmosphere",
        description: "Sophisticated ambiance for discerning guests",
        icon: "🏛️"
      }
    ]
  },

  seo: {
    title: "MYSTERIA Cafe, Diner & Games - Where Gaming Meets Gastronomy",
    description: "Experience premium dining and gaming at MYSTERIA. Chef-crafted dishes, latest consoles, and sophisticated ambiance in Bangalore.",
    keywords: "mysteria, cafe, diner, games, bangalore, premium dining, gaming cafe, restaurant"
  }
};