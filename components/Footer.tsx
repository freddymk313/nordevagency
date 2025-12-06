"use client";

import { links } from "@/constants";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  ChevronRight,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] relative overflow-hidden">
      {/* Éléments décoratifs sophistiqués */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/3 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section principale */}
        <div className="grid lg:grid-cols-4 gap-8 md:gap-12 py-14 md:py-20">
          {/* Colonne Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <div className="relative">
                {/* Version desktop */}
                <div className="">
                  <Image
                    src={"/logo/logo-white.png"}
                    height={200}
                    width={200}
                    alt="Nordev Agency - Votre partenaire digital d'excellence"
                    // className="rounded-xl"
                    quality={100}
                  />
                </div>
              </div>
            </Link>

            <p className="text-gray-400 text-base leading-relaxed mt-6 mb-8 font-light max-w-md">
              Votre partenaire de confiance pour des
              <span className=""> solutions digitales sur mesure </span>
              qui transforment votre vision en réalité.
            </p>

          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Navigation
            </h3>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 group flex items-center gap-2 text-[15px] font-medium"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-gray-500" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Contact
              {/* <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div> */}
            </h3>
            <ul className="space-y-5 text-[15px]">
              <li>
                <Link
                  href="mailto:nordevagency@gmail.com"
                  className="text-gray-400 hover:text-white transition-all duration-300 group flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-gray-300 font-medium group-hover:text-white text-[14px]">nordevagency@gmail.com</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+243991040032"
                  className="text-gray-400 hover:text-white transition-all duration-300 group flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Phone className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Téléphone</div>
                    <div className="text-gray-300 font-medium group-hover:text-white">+243 991 040 032</div>
                  </div>
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Localisation</div>
                    <div className="text-gray-300 font-medium">Lubumbashi, RDC</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter & Réseaux sociaux */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Restons Connectés
              {/* <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div> */}
            </h3>

            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-4">
                Recevez nos conseils experts et actualités digitales.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 bg-white/5 border text-[14px] border-white/10 rounded-2xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button className="bg-white text-gray-900 px-5 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Suivez notre aventure</p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Github, href: "#", label: "GitHub" }
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 group border border-white/10 hover:border-white/30"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section inférieure */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold *text-white">Nordev Agency</span>.
                Tous droits réservés.
              </p>
            </div>

            {/* Liens légaux */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[15px]">
              <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
                Conditions d'utilisation
              </Link>
              <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors">
                Préférences cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;