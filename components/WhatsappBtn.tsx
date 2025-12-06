"use client";

import { FaWhatsapp } from "react-icons/fa";

export const WhatsappBtn = () => {

  return (
    <>
        <a
          href="https://wa.me/243991040032"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-2 md:bottom-8 right-4 md:right-6 z-50 bg-[#111111] hover:bg-[#111111]/30 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Contact WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>
    </>
  );
};
