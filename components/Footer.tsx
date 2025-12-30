"use client";

import { links } from "@/constants";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Send, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#111111] pt-24 pb-12 relative overflow-hidden border-t border-white/10">
      
      {/* TEXTE GEANT EN ARRIERE-PLAN avec dégradé subtil */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03]">
        <h1 className="text-[20vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white/10 to-transparent leading-none tracking-tighter">
          NORDEV
        </h1>
      </div>

      {/* Élément décoratif d'accentuation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: LOGO & NEWSLETTER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 pb-20 border-b border-white/10">
          <div className="space-y-6 max-w-sm">
            <Image
              src="/logo/logo-white-2.png"
              height={60}
              width={180}
              alt="Nordev Agency"
              className="h-12 w-auto object-contain *brightness-110"
            />
            <p className="text-gray-300/80 text-lg font-light leading-relaxed">
              Nous façonnons des expériences <span className="text-white font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">digitales mémorables</span> pour les marques ambitieuses.
            </p>
          </div>

          <div className="w-full lg:w-[450px]">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-white/50"></span>
              Restons connectés
            </h4>
            <div className="relative group">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full bg-transparent border-b border-white/30 py-4 text-white text-lg focus:outline-none focus:border-white transition-all duration-300 placeholder:text-gray-500 placeholder:transition-colors placeholder:group-hover:text-gray-400"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/10 group">
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS & CONTACT */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-20">
          
          {/* Sitemap */}
          <div className="space-y-8">
            <h5 className="text-white/90 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-4 h-0.5 bg-white/60"></span>
              Sitemap
            </h5>
            <ul className="space-y-4">
              {links.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm font-medium flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-white/0 group-hover:bg-white/60 transition-all duration-300 group-hover:scale-125"></div>
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-8">
            <h5 className="text-white/90 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-4 h-0.5 bg-white/60"></span>
              Contact
            </h5>
            <div className="space-y-4">
              <Link 
                href="mailto:nordevagency@gmail.com" 
                className="block text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-3 group"
              >
                <Mail className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                <span>nordevagency@gmail.com</span>
              </Link>
              <Link 
                href="tel:+243991040032" 
                className="block text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-3 group"
              >
                <Phone className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                <span>+243 991 040 032</span>
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-8">
            <h5 className="text-white/90 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2">
              <span className="w-4 h-0.5 bg-white/60"></span>
              Social
            </h5>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Linkedin, label: 'LI', color: 'hover:bg-[#0077B5]' },
                { icon: Instagram, label: 'IN', color: 'hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]' },
                { icon: Twitter, label: 'TW', color: 'hover:bg-[#1DA1F2]' }
              ].map((s, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-400 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-110 group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${s.color}`}></div>
                  <span className="relative z-10 group-hover:text-white">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Localisation */}
          <div className="space-y-8 text-right md:text-left">
            <h5 className="text-white/90 text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2 md:justify-start justify-end">
              <span className="w-4 h-0.5 bg-white/60"></span>
              Studio
            </h5>
            <div className="flex items-start gap-3 md:justify-start justify-end">
              <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Lubumbashi, Haut-Katanga<br />
                République Démocratique du Congo
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT & SCROLL */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none border-r border-white/10 pr-6">
              © {new Date().getFullYear()} NORDEV
            </span>
            <div className="flex gap-4">
               <Link href="#" className="text-[10px] text-gray-500 hover:text-white font-bold uppercase tracking-tighter transition-colors duration-300 relative group">
                 <span className="relative">
                   Privacy
                   <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                 </span>
               </Link>
               <Link href="#" className="text-[10px] text-gray-500 hover:text-white font-bold uppercase tracking-tighter transition-colors duration-300 relative group">
                 <span className="relative">
                   Terms
                   <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
                 </span>
               </Link>
            </div>
          </div>

          {/* Back to Top Bouton Signature */}
          <button 
            onClick={scrollToTop}
            className={`group flex items-center gap-4 transition-all duration-500 ${
              showScrollTop 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <span className="text-[10px] font-black text-white/80 uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-300 group-hover:mr-2">
              Top
            </span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <ArrowUp className="w-5 h-5 relative z-10 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>
        </div>
      </div>

      {/* Ligne décorative du bas */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </footer>
  );
};

export default Footer;