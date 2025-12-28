# Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and TailwindCSS. Features include menu display, location information, contact forms, and social media integration.

## Features

- 🍽️ Modern, responsive design optimized for all devices
- 📱 Mobile-first approach with hamburger menu
- 🗺️ Google Maps integration for location
- 📞 Click-to-call and WhatsApp integration
- 📧 Contact form with validation
- 📱 Telegram widget for menu updates
- 🎨 Warm, appetizing color scheme
- ⚡ Fast loading with optimized images
- 🔍 SEO optimized with meta tags
- ♿ Accessibility compliant

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router
- **Icons**: Lucide React
- **UI Components**: Shadcn/ui
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner (Toast)
- **Deployment**: Vercel-ready

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd restaurant-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your content**
   Edit `/src/config/siteContent.ts` to customize:
   - Restaurant name and description
   - Contact information
   - Business hours
   - Social media links
   - Menu items and prices
   - Form submission endpoint

4. **Add your images**
   - Add hero image to `/public/hero.jpg`
   - Add logo to `/public/logo.png`
   - Add dish images to `/public/dish1.jpg`, `/public/dish2.jpg`, `/public/dish3.jpg`
   - See `/public/placeholder-images.txt` for detailed instructions

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## Configuration

### Site Content
All editable content is centralized in `/src/config/siteContent.ts`:

```typescript
export const siteContent = {
  restaurant: {
    name: "Your Restaurant Name",
    tagline: "Your tagline here",
    // ... other settings
  },
  // ... other configuration sections
};
```

### Contact Form
Update the form action in `siteContent.ts`:
```typescript
forms: {
  contactFormAction: "https://formspree.io/f/YOUR_FORM_ID"
}
```

### Google Maps
Update the map coordinates in `siteContent.ts`:
```typescript
contact: {
  address: {
    mapLink: "https://maps.google.com/?q=LATITUDE,LONGITUDE",
    embedUrl: "https://maps.google.com/maps?q=LATITUDE,LONGITUDE&output=embed"
  }
}
```

### Telegram Widget
Configure your Telegram channel in `siteContent.ts`:
```typescript
menu: {
  telegramChannelUsername: "yourchannelname"
}
```

## Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure environment variables** (if needed)
   ```bash
   vercel env add
   ```

### Manual Build

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Preview the build**
   ```bash
   npm run preview
   ```

## Customization

### Colors
The color scheme uses warm, appetizing tones. Modify in `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      orange: {
        50: '#fff7ed',
        600: '#ea580c', // Primary orange
        // ... other shades
      }
    }
  }
}
```

### Fonts
Add custom fonts in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

### Adding New Pages

1. Create a new page component in `/src/pages/`
2. Add the route in `/src/App.tsx`
3. Update navigation in `/src/components/Header.tsx`

## SEO Optimization

The site includes:
- Meta tags for each page
- Open Graph tags for social sharing
- Structured data for search engines
- Semantic HTML5 elements
- Alt text for images
- Proper heading hierarchy

Update SEO settings in `siteContent.ts`:
```typescript
seo: {
  title: "Your Restaurant - Best Food in City",
  description: "Description for search engines",
  keywords: "restaurant, food, city, cuisine"
}
```

## Performance

- Images are lazy-loaded
- Components are code-split by route
- CSS is purged of unused styles
- Fonts are optimized
- Assets are compressed

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact:
- Email: support@yourrestaurant.com
- Phone: +91-XXXXXXXXXX

---

Made with ❤️ for great restaurants