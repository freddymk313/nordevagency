"use client"

import { FiCheck, FiZap } from 'react-icons/fi';

const plans = [
  {
    title: "Basique",
    price: "110$",
    features: [
      "Site vitrine 1 à 3 pages",
      "Landing page",
      "Design responsive",
      "Hébergement offert 1 an",
      "Optimisation SEO",
      "Assistance par email",
    ],
    highlight: false,
    popular: false,
    link: "#"
  },
  {
    title: "Standard",
    price: "210$",
    features: [
      "Site web jusqu'à 6 pages",
      "Design personnalisé",
      "Optimisation SEO avancée",
      "Formulaire de contact",
      "Hébergement offert 1 an",
      "Intégration CMS"
    ],
    highlight: true,
    popular: true,
    link: "#"
  },
  {
    title: "Premium",
    price: "330$",
    features: [
      "Site E-commerce",
      "Gestion des produits illimitée",
      "Paiements en ligne sécurisés",
      "Support technique 3 mois",
      "Formation personnalisée",
      // "Hébergement offert 1 an",
      "Intégration CMS"
    ],
    highlight: false,
    popular: false,
    link: "#"
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Pricing = () => {
  return (
    <section className="relative py-16 md:20 lg:py-22 bg-gray-50 text-black overflow-hidden" id="prix">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#007bfe]/5 rounded-full filter blur-[100px] translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <div
        //   initial="hidden"
        //   whileInView="visible"
        //   viewport={{ once: true }}
        //   variants={fadeIn}
        //   transition={{ duration: 0.6 }}
          className="text-center mb-9 md:mb-12"
        >
          {/* <span className="inline-block bg-[#e6f1ff] text-[#007bfe] px-4 py-2 rounded-full font-medium mb-4">
            Nos Offres
          </span> */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Nos Offres
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins et budget.
          </p>
        </div>

        {/* Pricing plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#111111] text-white px-4 py-1 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 z-10">
                  <FiZap className="text-yellow-300" />
                  Le plus populaire
                </div>
              )}

              <div className={`h-full flex flex-col rounded-2xl overflow-hidden border-2 transition-all duration-300 ${plan.highlight
                ? "border-[#111111] shadow-xl"
                : "border-gray-200 shadow-md hover:shadow-lg"
                }`}>
                <div className={`p-8 pb-6 ${plan.highlight ? "bg-[#111111] text-white" : "bg-white"
                  }`}>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-gray-800"
                    }`}>
                    {plan.title}
                  </h3>
                  <p className={`text-4xl font-extrabold mb-4 ${plan.highlight ? "text-white" : "text-[#111111]"
                    }`}>
                    {plan.price}
                    <span className="text-lg font-normal">/projet</span>
                  </p>
                </div>

                <div className="grow bg-white p-8 pt-6">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <FiCheck className={`shrink-0 mt-1 ${plan.highlight ? "text-[#111111]" : "text-gray-400"
                          }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={plan.link}>
                    <button
                      className={`w-full py-2.5 rounded-full font-semibold transition-all ${plan.highlight
                        ? "bg-[#111111] text-white hover:bg-[#111111] shadow-md"
                        : "border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"
                        }`}>
                      Choisir ce plan
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>Besoin d'une solution personnalisée ? <a href="https://wa.me/243991040032"
            target="_blank"
            rel="noopener noreferrer" className="text-[#111111] hover:underline">Contactez-nous</a> pour un devis sur mesure.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

