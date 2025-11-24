import { Check, Award, Users, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="apropos" className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Éléments d'arrière-plan sophistiqués */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-900/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-900/2 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* En-tête avec badge premium */}
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-3 mb-8">
              <Target className="w-5 h-5 text-gray-800" />
              <span className="text-sm font-semibold text-gray-800 tracking-wide">
                Notre Philosophie
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              L&apos;Excellence dans 
              <span className="block mt-3">
                Chaque{" "}
                <span className="text-gray-800 relative">
                  Ligne de Code
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-gray-800/20 rounded-full" />
                </span>
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-gray-400 mx-auto mb-8 rounded-full" />
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Nous ne créons pas simplement des sites web. Nous concevons des 
              <span className="font-medium text-gray-800"> expériences digitales sur mesure</span> qui 
              propulsent votre business vers de nouveaux sommets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Colonne texte - Contenu enrichi */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed font-normal">
                  Chez <span className="font-semibold text-gray-800">Nordev Agency</span>, nous incarnons 
                  la fusion parfaite entre l&apos;<span className="text-gray-800 font-semibold">art du design</span>, 
                  la <span className="text-gray-800 font-semibold">maîtrise technologique</span> et 
                  la <span className="text-gray-800 font-semibold">stratégie business</span>.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed font-normal">
                  Chaque projet est une opportunité de repousser les limites de l&apos;innovation 
                  et de délivrer des solutions qui <span className="font-semibold text-gray-800">dépassent les attentes</span>.
                </p>
              </div>

              {/* Points forts - Design amélioré */}
              <div className="space-y-6 pt-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-gray-800" />
                  Notre Différence
                </h3>
                
                {[
                  {
                    icon: Award,
                    title: "Expertise Technique Avancée",
                    description: "Maîtrise des technologies modernes (Next.js, React Native, Node.js) pour des performances optimales"
                  },
                  {
                    icon: Users,
                    title: "Partenaire Stratégique",
                    description: "Nous nous engageons dans votre succès au-delà du simple développement"
                  },
                  {
                    icon: Target,
                    title: "Focus Résultats",
                    description: "Chaque fonctionnalité est conçue pour atteindre vos objectifs business"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-all duration-300 group cursor-default border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA intégré */}
              <div className="pt-8">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-3 group">
                  <span>Découvrir notre méthodologie</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Colonne visuelle - Statistiques impactantes */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "50+", label: "Projets d'Excellence", icon: Award },
                  { number: "98%", label: "Satisfaction Client", icon: Users },
                  { number: "100%", label: "Livraison Dans les Délais", icon: Target },
                  { number: "24/7", label: "Support Premium", icon: Zap }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 cursor-default"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-semibold tracking-wide leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Citation client */}
              <div className="mt-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-2xl font-light italic mb-4 leading-relaxed">
                  &ldquo;Nordev a transformé notre vision en une plateforme qui dépasse 
                  toutes nos attentes. Un partenariat exceptionnel.&rdquo;
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Pierre Martin</div>
                    <div className="text-white/70 text-sm">CEO, TechVision</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;