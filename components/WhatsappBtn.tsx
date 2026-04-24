"use client";

import { FaWhatsapp } from "react-icons/fa";

export const WhatsappBtn = () => {
  return (
    <div className="fixed bottom-6 right-6 z-999 group">
      
      {/* Tooltip Premium : Utilise ton style de badge habituel */}
      <div className="hidden md:flex absolute right-full mr-5 top-1/2 -translate-y-1/2 px-4 py-2 bg-card border border-border text-foreground text-[10px] font-bold uppercase *tracking-[0.2em] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 whitespace-nowrap shadow-2xl pointer-events-none">
        Besoin d'aide ? <span className="text-green-accent ml-2">Contactez-nous</span>
        {/* Petite flèche */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-card border-r border-t border-border rotate-45" />
      </div>

      {/* Anneau de pulsation : Discret en utilisant ton vert accentué */}
      {/* <div className="absolute inset-0 rounded-full bg-green-accent/20 hidden md:block md:animate-ping group-hover:animate-none opacity-0 group-hover:opacity-100 transition-opacity" /> */}

      {/* Le Bouton Principal : Noir profond pour la cohérence */}
      <a
        href="https://wa.me/243991040032"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 md:w-16 md:h-16 bg-[#0A0A0A] border border-white/5 text-white rounded-full flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-green-accent/50 hover:scale-110 active:scale-95"
        aria-label="Contact WhatsApp"
      >
        {/* Icône WhatsApp */}
        <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 transition-colors group-hover:text-green-accent" />

        {/* Badge de statut : Utilise ton vert oklch */}
        <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 md:w-4 md:h-4 bg-green-accent border-2 border-[#0A0A0A] rounded-full shadow-sm" />
      </a>
    </div>
  );
};