import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 transform-gpu will-change-transform contain-layout">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between min-h-[28px] sm:min-h-[32px] relative">
          {/* Logo - Left side */}
          <div className="flex items-center pl-2 sm:pl-4">
            <div className="flex items-center">
              <img 
                src="/ekrankoruma.png" 
                alt="SEKToulouse Logo" 
                className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 object-contain mr-2 sm:mr-3"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  console.log('Logo yüklenemedi:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
          
          {/* Home Button - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link 
              to="/" 
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 smooth-transition active:scale-95 border border-gray-200 hover:border-gray-300"
            >
              <Home size={24} className="sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]" />
            </Link>
          </div>
          
          {/* Empty div for balance */}
          <div className="w-16 sm:w-20 md:w-24"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;