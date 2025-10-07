const Services = () => {
  const services = [
    {
    //   icon: Code,
      title: "Développement Web",
      description: "Sites web sur mesure développés avec les technologies modernes, optimisés pour la performance, le SEO et l'expérience utilisateur.",
      features: ["React/Next.js", "Performance optimisée", "SEO technique", "Responsive design"]
    },
    {
    //   icon: Smartphone,
      title: "Applications Mobiles",
      description: "Applications natives et cross-platform offrant des expériences fluides sur iOS et Android, avec des performances optimales.",
      features: ["React Native/Flutter", "UI/UX native", "Performances", "Stores conformes"]
    },
    {
    //   icon: Palette,
      title: "Design UI/UX",
      description: "Designs élégants et intuitifs qui capturent l'identité de votre marque et engagent votre audience efficacement.",
      features: ["Design system", "Prototypage", "Tests utilisateurs", "Identité visuelle"]
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="text-sm font-medium text-gray-700">
              Nos domaines d'expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services <span className="text-gray-800">Premium</span>
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions digitales complètes et sur mesure, conçues pour répondre 
            à vos <span className="text-gray-800 font-medium">objectifs spécifiques</span> et 
            propulser votre croissance.
          </p>
        </div>
        
        {/* Grille des services */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden"
            >
              {/* Effet de fond au hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Numéro de service */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-500 z-0">
                0{index + 1}
              </div>
              
              <div className="relative z-10">
                {/* Icône */}
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300 shadow-lg">
                  {/* <service.icon className="w-8 h-8 text-white" /> */}
                </div>
                
                {/* Titre */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {service.description}
                </p>
                
                {/* Liste des features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-800 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <button className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl group-hover:scale-105">
                  En savoir plus
                </button>
              </div>
              
              {/* Bordure animée */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gray-800 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Note additionnelle */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <p className="text-gray-600 text-lg">
              <span className="font-semibold text-gray-800">Projet personnalisé ?</span> Nous adaptons 
              nos services à vos besoins spécifiques pour une solution parfaitement alignée avec 
              vos objectifs.
            </p>
            <button className="mt-6 border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 font-semibold">
              Discutons de votre projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;