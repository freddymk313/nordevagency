import { ArrowRight, Calendar, Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Titre principal */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Prêt à donner vie
            <span className="block">
              à votre <span className="text-gray-800">projet ?</span>
            </span>
          </h2>
          
          <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6 rounded-full" />
          
          {/* Description */}
          <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Créons ensemble quelque chose d'<span className="">extraordinaire </span> 
            qui propulsera votre entreprise vers de nouveaux sommets.
          </p>
          
          {/* Boutons d'action principaux */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 *md:mb-12">
            <button className="group bg-[#111111] text-white px-6 py-4 rounded-full hover:bg-gray-900 transition-all duration-300 font-semibold text-sm shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center gap-3">
              <Calendar className="w-4 h-4" />
              Réserver un appel
              {/* <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
          
          {/* Informations de contact secondaires */}
          <div className="*bg-white/80 *backdrop-blur-sm border-gray-200 *rounded-2xl pt-8 max-w-md mx-auto *shadow-lg">
            <div className="space-y-4 text-center">
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Email</div>
                <a 
                  href="mailto:nordevagency@gmail.com" 
                  className="text-gray-800 font-semibold hover:text-gray-600 transition-colors"
                >
                  nordevagency@gmail.com
                </a>
              </div>
              
              <div>
                <div className="text-sm font-semibold text-gray-600 mb-1">Téléphone</div>
                <a 
                  href="tel:+243900611443" 
                  className="text-gray-800 font-semibold hover:text-gray-600 transition-colors"
                >
                  +243900611443
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;