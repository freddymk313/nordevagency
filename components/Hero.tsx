import TrustedBy from "./TrustedBy";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24">
      {/* Background elements sophistiqués - Version améliorée */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gray-800/3 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-gray-800/2 rounded-full blur-3xl animate-float-medium" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-800/5 rounded-full blur-3xl animate-float-fast" />
      
      {/* Grid pattern subtil - Amélioré */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(42,42,42,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(42,42,42,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Badge Premium - Nouveau design */}
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-3 mb-12 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group cursor-default">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse delay-150" />
              <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse delay-300" />
            </div>
            <span className="text-sm font-semibold text-gray-800 tracking-wide">
              Agence Premium de Développement Web & Mobile
            </span>
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <span className="text-xs font-medium text-gray-600">
              Depuis 2023
            </span>
          </div>
          
          {/* Titre principal - Copywriting optimisé */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-10 leading-tight tracking-tight">
            Votre Partenaire
            <span className="block mt-4 md:mt-6">
              Digital{" "}
              <span className="relative">
                d&apos;Excellence
                <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-gray-800/20 to-gray-800/5 rounded-full" />
              </span>
            </span>
          </h1>
          
          {/* Sous-titre percutant */}
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 mb-4 font-light tracking-wide max-w-4xl mx-auto">
            Sites web <span className="font-medium">sur mesure</span> et applications mobiles 
            <span className="font-medium"> haute performance</span>
          </p>
          
          {/* Description - Recentrée client */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed font-normal">
            Nous transformons vos <span className="font-semibold text-gray-800">ambitions digitales</span> en solutions concrètes 
            qui <span className="font-semibold text-gray-800">boostent votre croissance</span> et vous distinguent de la concurrence.
          </p>
          
          {/* CTA Buttons - Stratégie améliorée */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
            {/* CTA Principal - Urgence & Valeur */}
            <Link href="#contact">
              <button className="bg-gray-900 text-white px-10 py-5 rounded-2xl hover:bg-gray-800 transition-all duration-300 font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1.5 flex items-center gap-3 group text-[16px] min-w-[220px] justify-center">
                <span>Obtenir mon devis gratuit</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
            
            {/* CTA Secondaire - Social Proof */}
            <Link href="#projets">
              <button className="border-2 border-gray-300 bg-white/60 backdrop-blur-sm text-gray-800 px-10 py-5 rounded-2xl hover:border-gray-800 hover:bg-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 group text-[16px] min-w-[220px] justify-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Voir nos réussites</span>
              </button>
            </Link>
          </div>

          {/* TrustedBy Section */}
          <div className="mb-16">
            <TrustedBy />
          </div>
          
          {/* Stats Social Proof - Design premium */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-gray-200/60">
            {[
              { number: "50+", label: "Projets Excellents", suffix: "" },
              { number: "98%", label: "Taux de Satisfaction", suffix: "" },
              { number: "24/7", label: "Support Premium", suffix: "" },
              { number: "100%", label: "Projets Livrés", suffix: "À temps" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-default"
              >
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                  {stat.suffix && <span className="text-lg">{stat.suffix}</span>}
                </div>
                <div className="text-sm text-gray-600 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Élégant */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 font-medium tracking-widest uppercase">
            Explorer
          </span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;