"use client";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Nordev Agency</span>
            </div>

            {/* Liens desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-gray-700 hover:text-gray-900 transition-colors">
                Réalisations
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors">
                Réserver un appel
              </button>
            </div>

            {/* Menu burger mobile */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <a 
                href="#services" 
                className="block text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#portfolio" 
                className="block text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Réalisations
              </a>
              <a 
                href="#contact" 
                className="block text-gray-700 hover:text-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition-colors">
                Réserver un appel
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;