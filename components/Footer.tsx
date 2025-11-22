"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  ChevronRight,
  ArrowUp,
  Heart,
  Shield,
  Zap,
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
      
      {/* Bouton scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gray-800 hover:bg-gray-700 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 flex items-center justify-center group border border-white/10"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section principale */}
        <div className="grid lg:grid-cols-4 gap-12 py-20">
          {/* Colonne Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <div className="relative">
                {/* Version mobile */}
                <div className="lg:hidden">
                  <Image
                    src={"/logo/logo-1.jpg"}
                    height={60}
                    width={60}
                    alt="Nordev Agency - Agence de développement web et mobile"
                    className="rounded-xl"
                    quality={100}
                  />
                </div>

                {/* Version desktop */}
                <div className="hidden lg:block">
                  <Image
                    src={"/logo/logo-2.jpg"}
                    height={200}
                    width={200}
                    alt="Nordev Agency - Votre partenaire digital d'excellence"
                    className="rounded-xl"
                    quality={100}
                  />
                </div>
              </div>
            </Link>

            <p className="text-gray-400 text-[15px] leading-relaxed mt-6 mb-8 font-light max-w-md">
              Votre partenaire de confiance pour des 
              <span className="font-medium text-white"> solutions digitales sur mesure </span> 
              qui transforment votre vision en réalité.
            </p>

            {/* Badges de confiance */}
            {/* <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/5 rounded-2xl px-4 py-2 border border-white/10">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300 font-medium">Expert Certifié</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-2xl px-4 py-2 border border-white/10">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-gray-300 font-medium">Support 24/7</span>
              </div>
            </div> */}
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              Navigation
              {/* <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div> */}
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Services", href: "#services" },
                { name: "Réalisations", href: "#portfolio" },
                { name: "Notre Expertise", href: "#apropos" },
                { name: "Avis Clients", href: "#temoignages" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
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
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                />
                <button className="bg-white text-gray-900 px-6 py-3 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Mail className="w-5 h-5" />
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
                <span className="font-semibold text-white">Nordev Agency</span>. 
                Tous droits réservés.
              </p>
            </div>

            {/* Liens légaux */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
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

            {/* Made with love */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Créé avec</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>par Nordev Agency</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;