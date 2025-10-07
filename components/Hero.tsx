const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background elements sophistiqués */}
      <div className="absolute top-1/4 -right-10 w-80 h-80 bg-gray-800/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-10 w-96 h-96 bg-gray-800/3 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-800/2 rounded-full blur-3xl" />
      
      {/* Grid pattern subtil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(42,42,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(42,42,42,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          {/* Badge premium */}
          {/* <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              Agence de développement web sur mesure
            </span>
          </div> */}
          
          {/* Titre principal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Nous donnons vie à vos
            <span className="block mt-4">
              idées{" "}
              <span className="text-gray-800 relative">
                digitales
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gray-800/20 rounded-full" />
              </span>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Chez <span className="font-semibold text-gray-800">Nordev Agency</span>, nous créons des sites web et applications mobiles 
            qui transforment votre vision en <span className="text-gray-800 font-medium">solutions concrètes et performantes</span>.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gray-800 text-sm text-white px-8 py-4 rounded-full hover:bg-gray-900 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 group">
              Réserver un appel
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button className="border-2 text-sm border-gray-300 text-gray-800 px-8 py-4 rounded-full hover:border-gray-800 transition-all duration-300 font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1">
              Voir nos réalisations
            </button>
          </div>
          
          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">50+</div>
              <div className="text-sm text-gray-600">Projets livrés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">98%</div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">5★</div>
              <div className="text-sm text-gray-600">Rating moyen</div>
            </div>
          </div> */}
        </div>
      </div>
      
      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;