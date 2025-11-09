"use client"
import {useState} from "react"
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce Luxe",
      description: "Marketplace premium avec système de réservation en temps réel et paiements sécurisés.",
      category: "Développement Web",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Application Fitness Mobile",
      description: "App de suivi d'activité sportive avec IA et analytics personnalisés.",
      category: "Application Mobile",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Node.js"],
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "Dashboard Analytics Entreprise",
      description: "Outil de business intelligence avec visualisation de données en temps réel.",
      category: "Développement Web",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      link: "#"
    },
    {
      id: 4,
      title: "Site Corporate FinTech",
      description: "Refonte complète avec design system et intégration CMS headless.",
      category: "Design UI/UX",
      image: "/api/placeholder/600/400",
      technologies: ["Figma", "Webflow", "GraphQL"],
      link: "#"
    },
    {
      id: 5,
      title: "Solution SaaS B2B",
      description: "Platform de gestion de projet avec collaboration d'équipe avancée.",
      category: "Développement Web",
      image: "/api/placeholder/600/400",
      technologies: ["React", "MongoDB", "Socket.io", "AWS"],
      link: "#"
    },
    {
      id: 6,
      title: "App de Livraison Instantanée",
      description: "Application de livraison en moins de 30 minutes avec tracking GPS.",
      category: "Application Mobile",
      image: "/api/placeholder/600/400",
      technologies: ["Flutter", "Google Maps", "Firebase"],
      link: "#"
    }
  ];

  const categories = ["Tous", "Développement Web", "Application Mobile", "Design UI/UX"];

  const [activeCategory, setActiveCategory] = useState("Tous");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          {/* <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium text-gray-700">
              Nos réalisations
            </span>
          </div> */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Portfolio <span className="text-gray-800">d'exception</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6 rounded-full" />

          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de nos projets les plus innovants, 
            où <span className="text-gray-800 font-medium">expertise technique</span> et 
            <span className="text-gray-800 font-medium"> créativité</span> se rencontrent.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleProjects(6);
              }}
              className={`px-4 py-2 rounded-full border-1 transition-all duration-300 text-sm font-semibold ${
                activeCategory === category
                  ? "bg-gray-800 text-white border-gray-800 shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-800 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image du projet */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 bg-gray-800/0 group-hover:bg-gray-800/10 transition-all duration-500" />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Projet Phare
                  </div>
                )}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  🎨 Image du projet
                </div>
                
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Voir le projet
                  </button>
                </div>
              </div>

              {/* Contenu du projet */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies utilisées */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Lien vers le projet */}
                <button className="w-full bg-gray-800 text-white py-2.5 rounded-lg hover:bg-gray-900 transition-all duration-300 font-semibold text-sm">
                  Découvrir le cas client
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir Plus */}
        {visibleProjects < filteredProjects.length && (
          <div className="text-center">
            <button
              onClick={() => setVisibleProjects(prev => prev + 3)}
              className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 font-semibold"
            >
              Voir plus de projets
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;