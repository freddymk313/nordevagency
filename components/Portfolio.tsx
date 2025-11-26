"use client";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce Luxe",
      description:
        "Marketplace premium avec système de réservation en temps réel et paiements sécurisés.",
      category: "Développement Web",
      image: "/portfolio/1.PNG",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Application Fitness Mobile",
      description:
        "App de suivi d'activité sportive avec IA et analytics personnalisés.",
      category: "Application Mobile",
      image: "/portfolio/2.PNG",
      technologies: ["React Native", "Firebase", "Node.js"],
      link: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Dashboard Analytics Entreprise",
      description:
        "Outil de business intelligence avec visualisation de données en temps réel.",
      category: "Développement Web",
      image: "/portfolio/3.PNG",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      link: "#",
    },
    {
      id: 4,
      title: "Site Corporate FinTech",
      description:
        "Refonte complète avec design system et intégration CMS headless.",
      category: "Design UI/UX",
      image: "/portfolio/4.PNG",
      technologies: ["Figma", "Webflow", "GraphQL"],
      link: "#",
    },
    {
      id: 5,
      title: "Solution SaaS B2B",
      description:
        "Platform de gestion de projet avec collaboration d'équipe avancée.",
      category: "Développement Web",
      image: "/portfolio/5.PNG",
      technologies: ["React", "MongoDB", "Socket.io", "AWS"],
      link: "#",
    },
    {
      id: 6,
      title: "App de Livraison Instantanée",
      description:
        "Application de livraison en moins de 30 minutes avec tracking GPS.",
      category: "Application Mobile",
      image: "/portfolio/6.PNG",
      technologies: ["Flutter", "Google Maps", "Firebase"],
      link: "#",
    },
  ];

  const categories = [
    "Tous",
    "Développement Web",
    "Application Mobile",
    "Design UI/UX",
  ];

  const [activeCategory, setActiveCategory] = useState("Tous");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const filteredProjects =
    activeCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const currentProject = filteredProjects[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  // Réinitialiser l'index quand on change de catégorie
  const handleCategoryChange = (category: any) => {
    setActiveCategory(category);
    setCurrentProjectIndex(0);
  };

  useEffect(() => {
    if (isHovered) return; // ne pas autoplay si survol
    const interval = setInterval(() => {
      nextProject();
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredProjects, isHovered]);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Portfolio <span className="text-gray-800">d'exception</span>
          </h2>

          <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6 rounded-full" />

          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de nos projets les plus innovants, où{" "}
            <span className="text-gray-800 font-medium">
              expertise technique
            </span>{" "}
            et
            <span className="text-gray-800 font-medium"> créativité</span> se
            rencontrent.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-meduim ${
                activeCategory === category
                  ? "bg-gray-800 text-white border-gray-800 shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-800 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel des projets */}
        <div className="max-w-6xl mx-auto">
          {/* Carte du projet actuel */}
          <div
            className="overflow-hidden =hover:shadow-xl transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image du projet */}
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl" /> */}
              </div>

              {/* Contenu du projet */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {currentProject.category}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {currentProject.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase text-gray-900 mb-3 tracking-wide">
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          // className="text-xs font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded"
                          className="text-xs border font-medium px-2 py-1 bg-white text-gray-700 rounded-full border-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bouton de démonstration */}
                <div className="flex gap-4">
                  <a
                    href={currentProject.link}
                    className="flex-1 bg-[#111111] text-sm text-white text-center py-4 px-8 rounded-full hover:bg-gray-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
                    // className="flex-1 bg-gray-800 text-white text-center py-3 px-6 rounded-full hover:bg-gray-700 transition-all duration-300 font-semibold"
                  >
                    <span>Voir le projet</span>
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-5 items-center mt-12 px-4">
            {/* PREV */}
            <button
              onClick={prevProject}
              aria-label="Projet précédent"
              className="flex items-center justify-center w-12 h-12 bg-[#111111] text-white rounded-full hover:bg-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-x-1 group"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* INDICATEURS */}
            <div className="flex gap-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentProjectIndex
                      ? "bg-gray-800 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* NEXT */}
            <button
              onClick={nextProject}
              aria-label="Projet suivant"
              className="flex items-center justify-center w-12 h-12 bg-[#111111] text-white rounded-full hover:bg-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:translate-x-1 group"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
