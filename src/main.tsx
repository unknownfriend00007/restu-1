import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";

createRoot(document.getElementById("root")!).render(<App />);

// AI Bot Script
const script1 = document.createElement('script');
script1.src = "https://cdn.jsdelivr.net/gh/unknownfriend00007/beautiful-flowise-chat@fddc10b/dist/chat.min.js";
script1.async = true;
document.head.appendChild(script1);

// Add type declaration for BeautifulFlowiseChat
declare global {
  interface Window {
    BeautifulFlowiseChat?: {
      init: (config: {
        chatflowid: string;
        apiHost: string;
        theme: string;
        primaryColor: string;
        primaryDarkColor: string;
        customUserMessageBg: string;
        customUserMessageText: string;
        customChatBg: string;
        title: string;
        subtitle: string;
        welcomeMessage: string;
        placeholder: string;
        avatar: string;
        enableStreaming: boolean;
        enableMarkdown: boolean;
        showTimestamp: boolean;
        confirmOnReset: boolean;
        maxMessages: number;
        requestTimeout: number;
        debug: boolean;
      }) => void;
    };
  }
}

script1.onload = () => {
  if (window.BeautifulFlowiseChat) {
    window.BeautifulFlowiseChat.init({
      // Required
      chatflowid: "a32ee1fe-b6bd-43e0-846b-d95b48a5ad6f",
      apiHost: "https://ruvatron-flowhybrid-3.hf.space",
      
      // Custom Theme
      theme: "custom",
      primaryColor: "#ea580c",              // Main orange (header, buttons, accents)
      primaryDarkColor: "#c2410c",          // Darker orange for hover/gradient
      customUserMessageBg: "#ffedd5",       // Soft light-orange background
      customUserMessageText: "#7c2d12",     // Deep orange-brown text
      customChatBg: "#ffffff",              // Pure white chat background
      
      // Content
      title: "My AI Assistant",
      subtitle: "Always here to help",
      welcomeMessage: "Hello! Ask me anything.",
      placeholder: "Type your message...",
      avatar: "🤖",
      
      // Features
      enableStreaming: true,
      enableMarkdown: true,
      showTimestamp: true,
      
      // Advanced
      confirmOnReset: true,
      maxMessages: 100,
      requestTimeout: 30000,
      
      // Misc
      debug: false
    });
  }
};