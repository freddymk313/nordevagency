"use client"

const TrustedBy = () => {
  const companies = [
    { 
      name: "Google", 
      logo: "/trusted/asunicaco.PNG",
      width: 80,
      height: 27
    },
    { 
      name: "Slack", 
      logo: "/trusted/asunicaco.PNG",
      width: 70,
      height: 28
    },
    { 
      name: "Notion", 
      logo: "/trusted/asunicaco.PNG",
      width: 28,
      height: 28
    },
    { 
      name: "Figma", 
      logo: "/trusted/asunicaco.PNG",
      width: 60,
      height: 24
    },
    { 
      name: "Amazon", 
      logo: "/trusted/asunicaco.PNG",
      width: 85,
      height: 26
    },
    { 
      name: "Microsoft", 
      logo: "/trusted/asunicaco.PNG",
      width: 120,
      height: 25
    },
  ];

  return (
    <section className="*py-20 *bg-gray-50 *border-y *border-gray-200">
      <div className="container mx-auto px-4">
        {/* Titre élégant */}
        {/* <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wider">
            Ils nous font confiance
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Partenaires et clients <span className="text-gray-800">d'exception</span>
          </h2>
          <div className="w-16 h-0.5 bg-gray-800 mx-auto mt-4" />
        </div> */}
        
        {/* Logos avec animation de défilement infinie */}
        <div className="relative">
          {/* Gradient overlays pour un effet premium */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          <div className="flex overflow-hidden space-x-16 py-4">
            {/* Première ligne défilante */}
            <div className="flex space-x-16 animate-scroll">
              {companies.map((company, index) => (
                <div 
                  key={`first-${company.name}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100 hover:scale-110"
                >
                  <img 
                    src="/portfolio/1.PNG"
                    alt={company.name}
                    className="h-8 md:h-10 w-auto object-contain filter brightness-0"
                    style={{ 
                      width: `${company.width}px`,
                      height: `${company.height}px`
                    }}
                  />
                </div>
              ))}
            </div>
            
            {/* Duplication pour l'effet de boucle infinie */}
            <div className="flex space-x-16 animate-scroll" aria-hidden="true">
              {companies.map((company, index) => (
                <div 
                  key={`second-${company.name}`}
                  className="flex-shrink-0 grayscale opacity-70"
                >
                  <img 
                    src={company.logo} 
                    alt=""
                    className="h-8 md:h-10 w-auto object-contain filter brightness-0"
                    style={{ 
                      width: `${company.width}px`,
                      height: `${company.height}px`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Citation de confiance */}
        {/* <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-gray-600 italic">
            "Collaborer avec les plus grandes entreprises nous pousse à toujours 
            <span className="text-gray-800 font-medium"> innover et exceller</span> dans chaque projet."
          </p>
          <p className="text-sm text-gray-500 mt-2">— Équipe Nordev Agency</p>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .hover\:scale-110:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;