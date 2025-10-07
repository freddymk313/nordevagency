const About = () => {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* En-tête avec badge */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-gray-700">
                Notre histoire
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              L'expertise <span className="text-gray-800">Nordev</span>
            </h2>
            
            <div className="w-20 h-1 bg-gray-800 mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Colonne texte */}
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Chez <span className="font-semibold text-gray-800">Nordev Agency</span>, nous croyons que 
                les produits digitaux exceptionnels naissent de l'alliance parfaite entre la 
                <span className="text-gray-800 font-medium"> créativité</span>, la 
                <span className="text-gray-800 font-medium"> technologie</span> et la 
                <span className="text-gray-800 font-medium"> réflexion stratégique</span>.
              </p>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Notre mission est de transformer votre vision en réalité grâce à un développement 
                web et mobile d'exception, sur mesure et orienté résultats.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-800">Expertise technique</span> - Maîtrise des dernières technologies et frameworks
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-800">Approche sur mesure</span> - Solutions adaptées à vos besoins spécifiques
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-800">Support continu</span> - Accompagnement de l'idée à la livraison et au-delà
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <button className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Découvrir notre méthodologie
                </button>
              </div>
            </div>

            {/* Colonne visuelle */}
            <div className="relative">
              {/* Carte statistique */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">5+</div>
                    <div className="text-sm text-gray-600">Années d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Projets réussis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction client</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Support réactif</div>
                  </div>
                </div>
                
                {/* Citation */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 italic text-center">
                    "Notre passion : transformer vos défis digitaux en 
                    <span className="text-gray-800 font-medium"> succès tangibles</span>."
                  </p>
                  <p className="text-sm text-gray-500 text-center mt-2">— Fondateur Nordev Agency</p>
                </div>
              </div>

              {/* Éléments décoratifs */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-800 rounded-full opacity-10" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-800 rounded-full opacity-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;