import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f6f3]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#0f1419] font-cormorant">404</h1>
        <p className="text-xl text-[#4a5568] mb-4 font-inter">Oops! Page not found</p>
        <a href="/" className="text-[#c9a961] hover:text-[#b89751] underline font-inter">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;