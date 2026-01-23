"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Header");

  const links = [
    { key: "about", href: "#about" },
    { key: "portfolio", href: "#portfolio" },
    { key: "testimonials", href: "#temoignages" },
    { key: "pricing", href: "#pricing" },
    { key: "contact", href: "#contact" }
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header>
      {/* NAVBAR */}
      <nav className="bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95 py-4 md:py-6 lg:py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* LOGO */}
            <Link href="/">
              <div className="flex items-center space-x-3">
                <div className="lg:hidden">
                  <Image
                    src="/logo/logo-1.jpg"
                    height={48}
                    width={48}
                    alt="Nordev Agency logo"
                    quality={100}
                  />
                </div>
                <div className="hidden lg:block">
                  <Image
                    src="/logo/logo-2.jpg"
                    height={230}
                    width={230}
                    alt="Nordev Agency logo"
                  />
                </div>
              </div>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8 text-base">
                {links.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                ))}
              </div>
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:block">
              <Link href="#pricing">
                <button className="bg-[#111111] text-sm text-white pl-7 pr-2 py-2 rounded-full hover:bg-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-4 group">
                  {t("cta")}
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

            {/* BURGER */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "64px" }}
      >
        <div className="container mx-auto px-4 pt-12">
          <div className="flex flex-col space-y-6">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-semibold text-gray-900 hover:text-gray-700 py-3 border-b"
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}
          </div>

          <div className="pt-8">
            <button className="bg-[#111111] text-sm text-white pl-8 pr-2 py-2 rounded-full font-semibold shadow-lg flex items-center gap-4 group">
              {t("cta")}
              <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black">
                →
              </span>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">{t("availability")}</p>
            <p className="text-gray-800 font-medium">{t("hours")}</p>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-30 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
