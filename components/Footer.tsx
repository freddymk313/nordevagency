"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Send,
  ArrowUp,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// J'ai simplifié les liens pour la démo, utilise tes constantes habituelles
const footerLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0A0A0A] relative overflow-hidden border-t border-white/5 pt-20">
      {/* Lueurs subtiles pour le côté "premium" */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-accent/[0.03] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 pb-16">
          
          {/* Colonne 1: Branding */}
          <div className="space-y-6">
            <Link href="/" className="inline-block transition-opacity hover:opacity-80">
              <Image
                src="/logo/logo-white.png" // Assure-toi d'avoir une version blanche
                height={50}
                width={180}
                alt="Nordev Agency"
                className="h-17 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 font-sans text-sm leading-relaxed max-w-xs">
              We build high-end digital experiences that transform ambitious brands into market leaders.
            </p>
          </div>

          {/* Colonne 2: Navigation */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-green-accent transition-all duration-300 group flex items-center gap-3 text-sm font-medium"
                  >
                    <div className="w-0 h-px bg-green-accent group-hover:w-4 transition-all duration-300" />
                    {/* <ChevronRight className="w-3 h-3 *bg-green-accent group-hover:w-4 transition-all duration-300" /> */}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Contact */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase mb-8">
              Get in Touch
            </h3>
            <ul className="space-y-5">
              {[
                { label: "Email", value: "nordevagency@gmail.com", href: "mailto:nordevagency@gmail.com", icon: Mail },
                { label: "Phone", value: "+243 991 040 032", href: "tel:+243991040032", icon: Phone },
                { label: "Studio", value: "Lubumbashi, RDC", icon: MapPin }
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href || "#"} className="group flex items-center gap-4">
                    <div className="w-10 h-10 bg-muted/20 border border-white/10 rounded-xl text-white flex items-center justify-center group-hover:bg-green-accent group-hover:text-black transition-all duration-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">{item.label}</div>
                      <div className="text-gray-400 group-hover:text-white transition-colors text-sm">{item.value}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4: Newsletter */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase mb-8">
              Weekly Insights
            </h3>
            <div className="space-y-6">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-accent/50 transition-all"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-green-accent text-black w-9 h-9 rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-lg">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="flex gap-3">
                {[Linkedin, Instagram, Twitter, Github].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
              <button 
            onClick={scrollToTop}
            className={`group flex items-center gap-4 transition-all duration-700 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          >
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Back to top</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-green-accent group-hover:text-black group-hover:border-green-accent transition-all duration-500">
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </div>
          </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-600 text-[11px] font-bold uppercase *tracking-[0.2em]">
            © {new Date().getFullYear()} Nordev Agency. <span className="opacity-50">Crafted in Lubumbashi.</span>
          </p>

          {/* <button 
            onClick={scrollToTop}
            className={`group flex items-center gap-4 transition-all duration-700 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          >
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Back to top</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-green-accent group-hover:text-black group-hover:border-green-accent transition-all duration-500">
              <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </div>
          </button> */}

          <div className="flex gap-6">
            {["Privacy", "Terms"].map((legal) => (
              <Link key={legal} href="#" className="text-[11px] font-bold text-gray-600 hover:text-white uppercase transition-colors">
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