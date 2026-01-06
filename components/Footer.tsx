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
    <footer className="bg-[#111111] relative overflow-hidden border-t border-white/10">
      {/* Glows décoratifs (Plus subtils, style Portfolio) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section principale */}
        <div className="grid lg:grid-cols-4 gap-12 py-12 md:py-24">
          
          {/* Colonne 1: Branding */}
          <div className="space-y-8">
            <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Image
                src="/logo/logo-white.png"
                height={230}
                width={230}
                alt="Nordev Agency"
                className="h-15 md:h-auto w-auto m-0 md:-ml-2 md:-mt-3 object-contain"
                quality={100}
              />
            </Link>

            {/* Status Badge (Cohérence Portfolio) */}
            {/* <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Disponible pour vos projets</span>
            </div> */}

            <p className="text-gray-400 text-base leading-relaxed font-light">
              Votre partenaire de confiance pour des
              <span className="*text-white *font-medium"> solutions digitales sur mesure </span>
              qui transforment votre vision en succès concret.
            </p>
          </div>

          {/* Colonne 2: Navigation (Style Clean) */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8 opacity-50">
              Navigation
            </h3>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 group flex items-center gap-3 text-sm font-medium"
                  >
                    <div className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Contact (Style Cartes Portfolio) */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8 opacity-50">
              Contact
            </h3>
            <ul className="space-y-6">
              {[
                { label: "Email", value: "nordevagency@gmail.com", href: "mailto:nordevagency@gmail.com", icon: Mail },
                { label: "Téléphone", value: "+243 991 040 032", href: "tel:+243991040032", icon: Phone },
                { label: "Studio", value: "Lubumbashi, RDC", icon: MapPin }
              ].map((item, i) => (
                <li key={i}>
                  {item.href ? (
                    <Link href={item.href} className="group flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <item.icon className="w-4 h-4 text-gray-200" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</div>
                        <div className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">{item.value}</div>
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400">
                        <item.icon className="w-4 h-4 text-gray-200" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</div>
                        <div className="text-gray-300 text-sm font-medium">{item.value}</div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4: Newsletter & Socials */}
          <div>
            <h3 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8 opacity-50">
              Newsletter
            </h3>
            <div className="space-y-8">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-4 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-all"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-all group/btn shadow-xl">
                  <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">Suivez-nous</p>
                <div className="flex gap-3">
                  {[Linkedin, Instagram, Twitter, Github].map((Icon, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="w-10 h-10 *bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover: bg-white hover: text-black transition-all duration-500"
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section inférieure: Copyright & Back to top */}
        <div className="border-t border-white/10 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-2">
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Nordev Agency. <span className="text-white/20">Designé pour l'excellence.</span>
            </p>
          </div>

          {/* Bouton Back to Top Signature */}
          <button 
            onClick={scrollToTop}
            className={`group flex items-center gap-4 transition-all duration-700 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          >
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] group-hover:mr-2 transition-all">Back to top</span>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </div>
          </button>

          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((legal) => (
              <Link key={legal} href="#" className="text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">
                {legal}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;