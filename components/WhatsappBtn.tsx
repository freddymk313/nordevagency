"use client";

import { FaWhatsapp } from "react-icons/fa";

export const WhatsappBtn = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[999] group">
      {/* Tooltip / Message au survol */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black text-white text-[12px] font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap shadow-xl">
        Besoin d'aide ? <span className="text-gray-400">Écrivez-nous</span>
        {/* Flèche du tooltip */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-black rotate-45" />
      </div>

      {/* Anneau de pulsation décoratif */}
      <div className="absolute inset-0 rounded-full bg-black/20 animate-ping group-hover:animate-none" />

      {/* Le Bouton Principal */}
      <a
        href="https://wa.me/243991040032"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-[#111111] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-110 active:scale-95 group-hover:bg-black"
        aria-label="Contact WhatsApp"
      >
        {/* Conteneur interne pour l'icône (Style Signature) */}
        {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black transition-transform duration-500 group-hover:rotate-[12deg]"> */}
          <FaWhatsapp className="w-6 h-6" />
        {/* </div> */}

        {/* Badge de statut en ligne */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-sm" />
      </a>
    </div>
  );
};