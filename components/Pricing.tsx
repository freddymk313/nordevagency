"use client";

import { CheckCircle2, Zap, ArrowRight } from "lucide-react";

const plans = [
  {
    title: "Basique",
    price: "110$",
    description: "Parfait pour lancer votre présence en ligne.",
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
    description: "La solution idéale pour booster votre activité.",
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
    description: "Le summum de la performance digitale.",
    features: [
      "Site E-commerce complet",
      "Gestion des produits illimitée",
      "Paiements sécurisés",
      "Support technique 3 mois",
      "Formation personnalisée",
      "Optimisation conversion",
    ],
    highlight: false,
    popular: false,
    link: "#"
  },
];

const Pricing = () => {
  return (
    <section className="relative py-20 md:py-32 bg-[#FBFBFB] overflow-hidden" id="pricing">
      {/* Background Decoratif */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-gray-400 uppercase bg-gray-100 rounded-full">
            Tarification
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Des offres <span className="text-gray-400">claires et transparentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choisissez la formule qui correspond à vos besoins. Pas de frais cachés, juste de la performance.
          </p>
        </div>

        {/* Pricing plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="relative group">
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 z-20 shadow-xl">
                  <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  RECOMMANDÉ
                </div>
              )}

              <div className={`h-full flex flex-col p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 border ${
                plan.highlight 
                ? "bg-white border-black shadow-[0_20px_50px_rgba(0,0,0,0.1)] scale-105 z-10" 
                : "bg-white/50 border-gray-100 hover:border-gray-300 backdrop-blur-sm"
              }`}>
                
                {/* Header du plan */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                    <span className="text-gray-400 font-medium text-sm">/projet</span>
                  </div>
                </div>

                {/* Liste des features */}
                <ul className="space-y-4 mb-10 grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-medium">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.highlight ? "text-black" : "text-gray-300"}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Notre Bouton Signature */}
                <a href={plan.link} className="block mt-auto">
                  <button className={`w-full text-sm font-bold pl-6 pr-2 py-2 rounded-full transition-all duration-300 flex items-center justify-between group/btn ${
                    plan.highlight 
                    ? "bg-[#111111] text-white hover:bg-black shadow-lg" 
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}>
                    <span>Choisir ce plan</span>
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      plan.highlight ? "bg-white text-black" : "bg-white text-gray-900"
                    }`}>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm font-medium">
            Besoin d'une solution personnalisée ?{" "}
            <a href="https://wa.me/243991040032" target="_blank" rel="noopener noreferrer" className="text-black border-b border-black hover:opacity-60 transition-opacity pb-0.5">
              Contactez-nous pour un devis sur mesure
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;