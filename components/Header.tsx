"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Navbar Principale */}
      <nav className="bg-white sticky top-0 z-50 *backdrop-blur-sm *bg-white/95 py-4 md:py-6 lg:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo à gauche */}
            <Link href="/">
              <div className="*flex items-center *space-x-3">
                <div className="lg:hidden">
                  <Image
                    src={"/logo/logo-1.jpg"}
                    height={48}
                    width={48}
                    alt={"logo image"}
                    // className="w-12 h-12 object-cover"
                    quality={100}
                  />
                </div>

                <div className="hidden lg:block">
                  <Image
                    src={"/logo/logo-2.jpg"}
                    height={230}
                    width={230}
                    alt={"logo image"}
                    // className="w-12 h-12 object-cover"
                    // quality={100}
                  />
                </div>
              </div>
            </Link>

            {/* Liens au centre - Desktop */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8 *text-base">
                {links.map((link: any, idx: any) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="text-gray-700 text-base hover:text-gray-900 transition-colors =font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <Link href="#pricing">
                <button className="bg-[#111111] text-sm text-white pl-7 pr-2 py-2 rounded-full hover:bg-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-4 group">
                  {/* Réserver un appel */}
                  Voir nos tarifs
                  {/* Le cercle autour de la flèche */}
                  <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black group-hover:bg-gray-200 transition-colors">
                    <svg
                      className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            {/* Menu Burger - Mobile */}
            <button
              className="lg:hidden p-2 rounded-lg *hover:bg-gray-100 transition-colors"
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
        <div className="container mx-auto px-4 py-8 pt-12">
          {/* Liens Mobile */}
          <div className="flex flex-col space-y-6">
            {links.map((link: any, idx: any) => (
              <Link
                key={idx}
                href={link.href}
                className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors py-3 border-b border-gray-200"
                // className="text-gray-700 text-base hover:text-gray-900 transition-colors =font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bouton Mobile */}
          <div className="mt-4 pt-8 *border-t border-gray-200">
            {/* <button className="w-full bg-[#111111] text-sm text-white px-8 py-4 rounded-full hover:bg-[#111111]/95 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform *hover:-translate-y-1 flex items-center justify-center gap-3 group">
              <span>Réserver un appel</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button> */}
            <button className="bg-[#111111] text-sm text-white pl-6 pr-2 py-2 rounded-full hover:bg-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-4 group">
              Réserver un appel
              {/* Le cercle autour de la flèche */}
              <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black group-hover:bg-gray-200 transition-colors">
                <svg
                  className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Informations de contact mobile */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2 text-base">
              Disponible du Lundi au Vendredi
            </p>
            <p className="text-gray-800 text-base font-medium">9h - 18h</p>
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
