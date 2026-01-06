"use client";

import { FaWhatsapp } from "react-icons/fa";

export const WhatsappBtn = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[999] group">
      
      {/* Tooltip : Masqué sur mobile (hidden), affiché sur desktop (md:flex) */}
      <div className="hidden md:flex absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black text-white text-[12px] font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-xl">
        Besoin d'aide ? <span className="text-gray-400 ml-1">Écrivez-nous</span>
        {/* Flèche du tooltip */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-black rotate-45" />
      </div>

      {/* Anneau de pulsation : Activé seulement sur desktop (md:animate-ping) */}
      <div className="absolute inset-0 rounded-full bg-black/20 hidden md:block md:animate-ping md:group-hover:animate-none" />

      {/* Le Bouton Principal */}
      <a
        href="https://wa.me/243991040032"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 md:w-16 md:h-16 bg-[#111111] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500 md:hover:scale-110 active:scale-90"
        aria-label="Contact WhatsApp"
      >
        {/* Icône */}
        <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" />

        {/* Badge de statut */}
        <div className="absolute top-0 right-0 w-3.5 h-3.5 md:w-4 md:h-4 bg-green-500 border-2 border-white rounded-full shadow-sm" />
      </a>
    </div>
  );
};