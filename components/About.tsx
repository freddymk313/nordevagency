import { Check, Award, Users, Target, Zap } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="apropos" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Éléments d'arrière-plan sophistiqués */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-900/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-900/2 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              L&apos;Excellence dans
              {/* <span className="text-gray-800">Chaque Ligne de Code</span> */}
              <span className="block">
                Chaque <span className="text-gray-800">Ligne de Code</span>
              </span>
            </h2>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6 rounded-full" />
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous ne créons pas simplement des sites web. Nous concevons des
              <span className="text-gray-800 font-medium">
                {" "}
                expériences digitales sur mesure
              </span>{" "}
              qui propulsent votre business vers de nouveaux sommets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Colonne texte - Contenu enrichi */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  Chez{" "}
                  <span className="font-semibold text-gray-800">
                    Nordev Agency
                  </span>
                  , nous incarnons la fusion parfaite entre l&apos;
                  <span className="text-gray-800 font-semibold">
                    art du design
                  </span>
                  , la{" "}
                  <span className="text-gray-800 font-semibold">
                    maîtrise technologique
                  </span>{" "}
                  et la{" "}
                  <span className="text-gray-800 font-semibold">
                    stratégie business
                  </span>
                  .
                </p>

                <p className="text-base text-gray-600 leading-relaxed font-normal">
                  Chaque projet est une opportunité de repousser les limites de
                  l&apos;innovation et de délivrer des solutions qui{" "}
                  <span className="font-semibold text-gray-800">
                    dépassent les attentes
                  </span>
                  .
                </p>
              </div>

              {/* Points forts - Design amélioré */}
              <div className="space-y-6 pt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  {/* <Zap className="w-6 h-6 text-gray-800" /> */}
                  Notre Différence
                </h3>

                {[
                  {
                    icon: Award,
                    title: "Expertise Technique Avancée",
                    description:
                      "Maîtrise des technologies modernes actuel pour des performances optimales",
                  },
                  {
                    icon: Users,
                    title: "Partenaire Stratégique",
                    description:
                      "Nous nous engageons dans votre succès au-delà du simple développement",
                  },
                  {
                    icon: Target,
                    title: "Focus Résultats",
                    description:
                      "Chaque fonctionnalité est conçue pour atteindre vos objectifs business",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    // className="flex items-start gap-5 p-6 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-all duration-300 group cursor-default border border-gray-100"
                    className="group flex items-start gap-5 bg-white border border-gray-200 rounded-2xl hover:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden p-6"
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

                    {/* Bordure animée */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gray-800 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne visuelle - Statistiques impactantes */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "25+", label: "Projets d'Excellence", icon: Award },
                  { number: "98%", label: "Satisfaction Client", icon: Users },
                  {
                    number: "100%",
                    label: "Livraison Dans les Délais",
                    icon: Target,
                  },
                  { number: "24/7", label: "Support Premium", icon: Zap },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-2xl hover:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden p-8"
                    // className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 cursor-default"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-white" />
                        {/* <Image href={} height={25} width={25} /> */}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-semibold tracking-wide leading-tight">
                        {stat.label}
                      </div>
                    </div>

                    {/* Bordure animée */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gray-800 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>

              {/* Citation client */}
              <div className="mt-6 bg-gradient-to-br from-[#111111] to-gray-800 rounded-2xl p-6 text-white shadow-2xl">
                <div className="text-2xl font-light italic mb-4 leading-relaxed">
                  &ldquo;Nordev a transformé notre vision en une plateforme qui
                  dépasse toutes nos attentes. Un partenariat
                  exceptionnel.&rdquo;
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
