'use client'; 

import React from 'react';

export default function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className="fixed hidden md:flex bottom-20 md:bottom-22 z-50 right-5 md:right-6 items-center space-x-3"
    >
      <div className="bg-gradient-to-t  from-[#4a208a] to-[#13012e] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition-all duration-300">
        <i className="fas fa-arrow-up text-[18px] text-white"></i>
      </div>
    </button>
  );
}
