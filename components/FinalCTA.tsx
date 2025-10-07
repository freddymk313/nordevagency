import { ArrowRight, Calendar, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Background elements sophistiqués */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gray-800/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gray-800/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-800/2 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern subtil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(42,42,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(42,42,42,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge d'action */}
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 mb-8 shadow-sm">
            <div className="w-2 h-2 bg-gray-800 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">
              Prochain projet ? Parlons-en
            </span>
          </div>
          
          {/* Titre principal */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Prêt à donner vie
            <span className="block">
              à votre <span className="text-gray-800">projet ?</span>
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Créons ensemble quelque chose d'<span className="text-gray-800 font-semibold">extraordinaire</span> 
            qui propulsera votre entreprise vers de nouveaux sommets.
          </p>
          
          {/* Boutons d'action principaux */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gray-800 text-white px-12 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Réserver un appel
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-gray-800 text-gray-800 px-12 py-4 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 font-semibold text-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3">
              <Phone className="w-5 h-5" />
              Nous appeler
            </button>
          </div>
          
          {/* Informations de contact secondaires */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 max-w-md mx-auto shadow-lg">
            <div className="space-y-4 text-center">
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Email</div>
                <a 
                  href="mailto:contact@nordevagency.com" 
                  className="text-gray-800 font-semibold hover:text-gray-600 transition-colors"
                >
                  contact@nordevagency.com
                </a>
              </div>
              
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Téléphone</div>
                <a 
                  href="tel:+33123456789" 
                  className="text-gray-800 font-semibold hover:text-gray-600 transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </div>
              
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Réponse garantie</div>
                <div className="text-gray-700">Sous 24 heures</div>
              </div>
            </div>
          </div>
          
          {/* Note de confiance */}
          <div className="mt-12">
            <p className="text-gray-500 text-sm">
              <span className="font-semibold">100% confidentiel</span> • Premier appel sans engagement • Devis personnalisé sous 48h
            </p>
          </div>
        </div>
      </div>
      
      {/* Élément décoratif flottant */}
      <div className="absolute bottom-8 left-8 w-4 h-4 bg-gray-800/20 rounded-full animate-bounce" />
      <div className="absolute top-8 right-8 w-3 h-3 bg-gray-800/30 rounded-full animate-bounce delay-75" />
    </section>
  );
};

export default FinalCTA;