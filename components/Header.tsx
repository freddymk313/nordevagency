"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Navbar Principale */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo à gauche */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                Nordev Agency
              </span>
            </div>

            {/* Liens au centre - Desktop */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  Services
                </a>
                <a
                  href="#projets"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  Projets
                </a>
                <a
                  href="#apropos"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  À propos
                </a>
                <a
                  href="#temoignages"
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                >
                  Témoignages
                </a>
              </div>
            </div>

            {/* Bouton à droite - Desktop */}
            <div className="hidden lg:block">
              <button className="bg-gray-800 text-white px-6 py-2.5 rounded-lg hover:bg-gray-900 transition-all duration-300 font-medium shadow-sm hover:shadow-md">
                Réserver un appel
              </button>
            </div>

            {/* Menu Burger - Mobile */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }} // Hauteur de la navbar
      >
        <div className="container mx-auto px-6 py-8">
          {/* Liens Mobile */}
          <div className="flex flex-col space-y-6">
            <a
              href="#services"
              className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projets"
              className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </a>
            <a
              href="#apropos"
              className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </a>
            <a
              href="#temoignages"
              className="text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </a>
          </div>

          {/* Bouton Mobile */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <button
              className="w-full bg-gray-800 text-white py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 font-semibold text-lg shadow-sm"
              onClick={() => {
                setIsMenuOpen(false);
                // Ajouter ici la logique pour réserver un appel
              }}
            >
              Réserver un appel
            </button>
          </div>

          {/* Informations de contact mobile */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">Disponible du Lundi au Vendredi</p>
            <p className="text-gray-800 font-medium">9h - 18h</p>
          </div>
        </div>
      </div>

      {/* Overlay de fond quand le menu est ouvert */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}