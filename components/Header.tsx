"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Services", href: "#services" },
  { name: "Réalisations", href: "#projets" }, // Changement sémantique plus impactant
  { name: "Notre Expertise", href: "#apropos" }, // Plus engageant
  { name: "Avis Clients", href: "#temoignages" }, // Plus confiance
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Ajout d'un effet de scroll pour une navbar plus dynamique
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      {/* Navbar Principale - Améliorée */}
      <nav className={`bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95 transition-all duration-300 ${
        isScrolled ? 'py-3 shadow-lg' : 'py-6'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo - Version optimisée */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                {/* Version mobile */}
                <div className="lg:hidden relative">
                  <Image
                    src={"/logo/logo-1.jpg"}
                    height={52}
                    width={52}
                    alt="[Nom Agence] - Création de sites web et applications"
                    className="transition-transform group-hover:scale-105"
                    quality={100}
                    priority
                  />
                </div>

                {/* Version desktop */}
                <div className="hidden lg:block relative">
                  <Image
                    src={"/logo/logo-2.jpg"}
                    height={180} // Légèrement réduit pour plus d'élégance
                    width={180}
                    alt="[Nom Agence] - Agence de développement web et mobile"
                    className="transition-transform group-hover:scale-105"
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </Link>

            {/* Liens navigation - Centré */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-10"> {/* Espacement augmenté */}
                {links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group text-[15px]"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Principal - Optimisé */}
            <div className="hidden lg:block">
              <Link href="#contact"> {/* Lien vers section contact */}
                <button className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-3 group text-[15px]">
                  <span>Démarrer mon projet</span> {/* Copy plus engageant */}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Menu Burger - Refondu */}
            <button
              className="lg:hidden p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu principal"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile - Version Premium */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-500 ease-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
        style={{ top: "76px" }}
      >
        <div className="container mx-auto px-6 py-8">
          {/* Liens Mobile avec animations séquentielles */}
          <div className="flex flex-col space-y-1">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                // className=""
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: isMenuOpen ? `${idx * 100}ms` : '0ms'
                }}
                className={`${isMenuOpen ? 'animate-fadeInUp' : ''} text-xl font-semibold text-gray-900 hover:text-gray-700 transition-all duration-300 py-5 border-b border-gray-100 hover:pl-4 hover:bg-gray-50 rounded-lg px-2`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Mobile - Mise en valeur */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-gray-900 text-white px-8 py-5 rounded-2xl hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group text-[16px]">
                <span>Démarrer mon projet</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Informations de contact - Design épuré */}
          <div className="mt-12 text-center space-y-3">
            <div className="bg-gray-50 rounded-2xl p-6">
              <p className="text-gray-600 text-[15px] font-medium">
                Prêt à concrétiser votre vision ?
              </p>
              <p className="text-gray-800 text-[15px] font-semibold mt-1">
                Discutons de votre projet
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay amélioré */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30 lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}