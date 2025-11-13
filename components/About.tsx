import { Check } from "lucide-react";

const About = () => {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* En-tête avec badge */}
          <div className="text-center mb-12 md:mb-20">
            {/* <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-gray-700">
                Notre histoire
              </span>
            </div> */}
            {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre <span className="text-gray-800">histoire</span>
            </h2> */}
            
            {/* <div className="w-20 h-1 bg-gray-800 mx-auto mb-8 rounded-full" /> */}

            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            À propos <span className="text-gray-800"> de Nordev</span>
          </h2>
          <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6 rounded-full" />
          {/* <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours d'expérience de nos clients qui ont transformé 
            leurs <span className="text-gray-800 font-medium">ambitions digitales en succès concrets</span>.
          </p> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Colonne texte */}
            <div className="space-y-6">
              <p className="text-md text-gray-600 leading-relaxed">
                Chez <span className="font-semibold text-gray-800">Nordev Agency</span>, nous croyons que 
                les produits digitaux exceptionnels naissent de l'alliance parfaite entre la 
                <span className="text-gray-800 font-medium"> créativité</span>, la 
                <span className="text-gray-800 font-medium"> technologie</span> et la 
                <span className="text-gray-800 font-medium"> réflexion stratégique</span>.
              </p>
              
              <p className="text-base text-gray-600 leading-relaxed">
                Notre mission est de transformer votre vision en réalité grâce à un développement 
                web et mobile d'exception, sur mesure et orienté résultats.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-5.5 h-5.5 bg-gray-800 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-gray-700 text-base">
                    <span className=" text-gray-800">Expertise technique</span> - Maîtrise des dernières technologies et frameworks
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-gray-700 text-base">
                    <span className="font-semibold text-gray-800">Approche sur mesure</span> - Solutions adaptées à vos besoins spécifiques
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="text-gray-700 text-base">
                    <span className="font-semibold text-gray-800">Support continu</span> - Accompagnement de l'idée à la livraison et au-delà
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne visuelle */}
            <div className="relative">
              {/* Carte statistique */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;