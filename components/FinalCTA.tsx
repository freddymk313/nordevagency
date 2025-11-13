import { ArrowRight, Calendar, Phone, Mail, Clock, Star, Zap } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Éléments de fond dynamiques */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-800/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-800/3 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-float-medium" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-800/2 rounded-full blur-3xl animate-float-fast" />
      
      {/* Motif géométrique subtil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(42,42,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(42,42,42,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Carte principale CTA */}
          <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              
              {/* Colonne de contenu */}
              <div className="p-12 md:p-16 flex flex-col justify-center">
                {/* Badge d'urgence */}
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-600 text-white px-6 py-3 rounded-2xl mb-8 shadow-lg">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm font-semibold tracking-wide">
                    Offre de Lancement Limitée
                  </span>
                </div>
                
                {/* Titre principal percutant */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  Votre Projet
                  <span className="block mt-4">
                    <span className="text-gray-800 relative">
                      d&apos;Exception
                      <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-gray-800 to-gray-800/20 rounded-full" />
                    </span>
                    <span className="block mt-2">Vous Attend</span>
                  </span>
                </h2>
                
                {/* Séparateur élégant */}
                <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-gray-400 mb-8 rounded-full" />
                
                {/* Description persuasive */}
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
                  Ne laissez pas votre vision digitale attendre. 
                  <span className="font-semibold text-gray-800"> Commençons ensemble</span> votre 
                  transformation dès aujourd&apos;hui.
                </p>

                {/* Bénéfices rapides */}
                <div className="space-y-4 mb-12">
                  {[
                    "Audit gratuit de votre projet",
                    "Devis personnalisé sous 24h",
                    "Expertise technique dédiée",
                    "Livraison dans les délais"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-4 text-gray-700">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className="text-lg font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                {/* Boutons d'action principaux */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  {/* CTA Principal - Urgence */}
                  <button className="group bg-gray-800 text-white px-10 py-5 rounded-2xl hover:bg-gray-700 transition-all duration-300 font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center gap-4 text-lg flex-1">
                    <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span>Réserver mon audit gratuit</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                  
                  {/* CTA Secondaire */}
                  <button className="group border-2 border-gray-300 text-gray-800 px-8 py-5 rounded-2xl hover:border-gray-800 hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center gap-3 text-lg flex-1">
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Nous appeler</span>
                  </button>
                </div>
                
                {/* Garantie de satisfaction */}
                <div className="flex items-center justify-center gap-3 text-gray-600">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">98% de clients satisfaits</span>
                </div>
              </div>
              
              {/* Colonne contact & informations */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 md:p-16 text-white relative overflow-hidden">
                {/* Éléments décoratifs */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/3 rounded-full translate-y-16 -translate-x-16" />
                
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                    Parlons de
                    <span className="block text-white/90">Votre Projet</span>
                  </h3>
                  
                  {/* Informations de contact */}
                  <div className="space-y-8 mb-12">
                    <div className="flex items-center gap-5 group cursor-pointer">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm font-medium mb-1">Email</div>
                        <a 
                          href="mailto:nordevagency@gmail.com" 
                          className="text-lg font-semibold text-white hover:text-white/80 transition-colors"
                        >
                          nordevagency@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5 group cursor-pointer">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm font-medium mb-1">Téléphone</div>
                        <a 
                          href="tel:+243991040032" 
                          className="text-lg font-semibold text-white hover:text-white/80 transition-colors"
                        >
                          +243 991 040 032
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white/70 text-sm font-medium mb-1">Disponibilité</div>
                        <div className="text-lg font-semibold text-white">
                          Lun - Ven : 9h - 18h
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Avantages immédiats */}
                  <div className="border-t border-white/20 pt-8">
                    <h4 className="text-lg font-semibold mb-4 text-white/90">Pourquoi nous choisir ?</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {[
                        "Expertise certifiée",
                        "Support 24/7",
                        "Livraison rapide",
                        "Satisfaction garantie"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-white/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bandeau de confiance final */}
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg font-light">
              Rejoignez les <span className="font-semibold text-gray-800">50+ entreprises</span> qui nous font confiance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;