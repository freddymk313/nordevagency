import { Users } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="apropos"
      className="py-16 md:py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-gray-900/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-900/2 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              L&apos;Excellence dans
              <span className="block">
                Chaque <span className="text-gray-800">Projet</span>
              </span>
            </h2>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6 rounded-full" />
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous ne créons pas simplement des sites web. Nous concevons des
              <span> expériences digitales sur mesure</span> qui propulsent
              votre business vers de nouveaux sommets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
            {/* Texte */}
            <div className="space-y-8">
              <div className="space-y-4 md:space-y-6">
                <p className="text-base text-gray-600 leading-relaxed">
                  Chez <span>Nordev Agency</span>, nous incarnons la fusion
                  parfaite entre l&apos;<span>art du design</span>, la{" "}
                  <span>maîtrise technologique</span> et la{" "}
                  <span>stratégie business</span>.
                </p>

                <p className="text-base text-gray-600 leading-relaxed">
                  Chaque projet est une opportunité de repousser les limites de
                  l&apos;innovation et de délivrer des solutions qui{" "}
                  <span>dépassent les attentes</span>.
                </p>
              </div>

              {/* Notre différence */}
              <div className="space-y-4 md:space-y-6 pt-1 md:pt-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Notre Différence
                </h3>

                {[
                  {
                    icon: "/icon-about/badge.svg",
                    title: "Expertise Technique Avancée",
                    description:
                      "Maîtrise des technologies modernes actuel pour des performances optimales",
                  },
                  {
                    icon: "/icon-about/customer.svg",
                    title: "Partenaire Stratégique",
                    description:
                      "Nous nous engageons dans votre succès au-delà du simple développement",
                  },
                  {
                    icon: "/icon-about/target.svg",
                    title: "Focus Résultats",
                    description:
                      "Chaque fonctionnalité est conçue pour atteindre vos objectifs business",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 md:gap-5 bg-white border border-gray-200 rounded-2xl hover:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 p-4 md:p-6 relative overflow-hidden"
                  >
                    <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={24}
                        height={24}
                        className="invert"
                      />
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-[15px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gray-800 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  {
                    number: "25+",
                    label: "Projets d'Excellence",
                    icon: "/icon-about/badge.svg",
                  },
                  {
                    number: "98%",
                    label: "Satisfaction Client",
                    icon: "/icon-about/group.svg",
                  },
                  {
                    number: "100%",
                    label: "Livraison Dans les Délais",
                    icon: "/icon-about/target.svg",
                  },
                  {
                    number: "24/7",
                    label: "Support Premium",
                    icon: "/icon-about/customer.svg",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white border border-gray-200 rounded-2xl hover:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 p-6 md:p-8 relative overflow-hidden"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={stat.icon}
                          alt={stat.label}
                          width={28}
                          height={28}
                          className="invert"
                        />
                      </div>

                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 font-semibold">
                        {stat.label}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gray-800 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>

              {/* Citation */}
              <div className="mt-6 bg-linear-to-br from-[#111111] to-gray-800 rounded-2xl p-6 text-white shadow-2xl">
                <div className="italic mb-4">
                  &ldquo;Nordev a transformé notre vision en une plateforme qui
                  dépasse toutes nos attentes.&rdquo;
                </div>
                <div className="flex items-center gap-4">
                  {/* <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Image
                      src="/icon-about/users.svg"
                      alt="Client"
                      width={24}
                      height={24}
                      className="invert"
                    />
                  </div> */}
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    {" "}
                    <Users className="w-6 h-6 text-white" />{" "}
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
