"use client";

import Link from "next/link";
import TrustedBy from "./TrustedBy";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[60vh] md:min-h-screen flex items-center justify-center relative overflow-hidden pt-12 md:pt-16"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 -right-10 w-80 h-80 bg-gray-800/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-gray-800/3 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-800/2 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(42,42,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(42,42,42,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h1 className="text-[28px] sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 leading-tight">
            Nous donnons vie à vos
            <span className="block mt-4">
              idées{" "}
              <span className="text-gray-900 relative">
                digitales
                {/* Petit soulignement discret pour le style */}
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gray-800/10 rounded-full" />
              </span>
            </span>
          </h1>

          <p className="text-[16px] sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Chez <span className="font-semibold">Nordev Agency</span>, nous
            créons des sites web et applications mobiles qui transforment votre
            vision en{" "}
            <span className="font-semibold text-black">
              solutions concrètes et performantes
            </span>
            .
          </p>

          {/* CTA Buttons - Version Embellie */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* Bouton Noir avec Cercle */}
            <Link href={"#contact"}>
              <button className="bg-[#111111] text-sm text-white pl-8 pr-2 py-2 rounded-full hover:bg-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-4 group">
                Réserver un appel
                <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black group-hover:bg-gray-100 transition-colors">
                  <svg
                    className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            {/* Bouton Secondaire Ajusté (Même hauteur) */}
            <Link href={"#portfolio"}>
              <button className="border-2 h-[56px] text-sm border-[#111111] text-gray-800 px-8 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold hover:shadow-lg transform hover:-translate-y-1">
                Voir nos réalisations
              </button>
            </Link>
          </div>

          <TrustedBy />
        </div>
      </div>
    </section>
  );
};

export default Hero;
