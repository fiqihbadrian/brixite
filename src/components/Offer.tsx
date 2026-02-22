'use client'
import { useState, useEffect } from 'react';

export default function Offer() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // Auto-hide after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl p-4 flex items-center space-x-3 animate-bounce">
        <div className="text-sm font-medium">
          <span className="font-bold">🔥 25% OFF!</span> Limited time
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-yellow-300 text-xs"
          aria-label="Close notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
