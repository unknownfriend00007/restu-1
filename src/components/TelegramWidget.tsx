"use client";

import { useEffect } from 'react';
import { siteContent } from '@/config/siteContent';

const TelegramWidget = () => {
  useEffect(() => {
    // Load SociableKit script
    const script = document.createElement('script');
    script.src = 'https://cdn.sociablekit.com/telegram-feed.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize widget after script loads
    script.onload = () => {
      if (window.SociableKit) {
        window.SociableKit.init({
          container: '#sociablekit-embed',
          type: 'telegram-feed',
          username: siteContent.menu.telegramChannelUsername,
          theme: 'light',
          height: '600px'
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-center">Latest Updates & Specials</h3>
        <div id="sociablekit-embed" className="min-h-[600px]">
          <div className="flex items-center justify-center h-96 text-gray-500">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
              <p>Loading Telegram updates...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add type declaration for SociableKit
declare global {
  interface Window {
    SociableKit?: {
      init: (options: {
        container: string;
        type: string;
        username: string;
        theme: string;
        height: string;
      }) => void;
    };
  }
}

export default TelegramWidget;