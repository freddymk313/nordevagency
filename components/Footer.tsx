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
  ArrowUp,
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
    <footer className="bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Glows décoratifs très subtils */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Principale Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 py-20">
          
          {/* 1. Brand Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image
                src="/logo/logo-white.png"
                height={50}
                width={160}
                alt="Nordev Agency"
                className="h-10 w-auto object-contain"
                quality={100}
              />
            </Link>
            <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-sm">
              Concevoir le futur digital avec <span className="text-white">audace</span> et <span className="text-white">précision</span>.
            </p>
            {/* Social Icons - Version Minimaliste */}
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, i) => (
                <Link key={i} href={social.href} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white transition-all duration-300">
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Navigation Rapide (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8">Navigation</h3>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all -ml-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8">Contact</h3>
            <div className="space-y-6">
              <Link href="mailto:nordevagency@gmail.com" className="group block">
                <div className="text-[11px] font-bold text-gray-600 uppercase mb-1">Email</div>
                <div className="text-gray-300 group-hover:text-white transition-colors font-medium">nordevagency@gmail.com</div>
              </Link>
              <Link href="tel:+243991040032" className="group block">
                <div className="text-[11px] font-bold text-gray-600 uppercase mb-1">Téléphone</div>
                <div className="text-gray-300 group-hover:text-white transition-colors font-medium">+243 991 040 032</div>
              </Link>
              <div className="block">
                <div className="text-[11px] font-bold text-gray-600 uppercase mb-1">Bureau</div>
                <div className="text-gray-300 font-medium">Lubumbashi, RDC</div>
              </div>
            </div>
          </div>

          {/* 4. Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8">Newsletter</h3>
            <p className="text-gray-500 text-sm mb-6 font-medium">Restez à l'affût des dernières innovations.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-sm focus:outline-none focus:border-white/30 transition-all"
              />
              <button className="absolute right-2 top-2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Section Copyright */}
        <div className="border-t border-white/5 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600 text-xs font-bold tracking-widest uppercase">
              © {new Date().getFullYear()} NORDEV AGENCY — DÉPASSER LES LIMITES
            </div>
            
            {/* Bouton Retour en haut Signature */}
            <button 
              onClick={scrollToTop}
              className={`flex items-center gap-3 text-white text-[11px] font-bold uppercase tracking-widest transition-all duration-500 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            >
              Back to top 
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <ArrowUp className="w-4 h-4" />
              </span>
            </button>

            <div className="flex gap-8">
              <Link href="/privacy" className="text-gray-600 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;