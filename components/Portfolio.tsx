"use client";
import { ChevronLeft, ChevronRight, ExternalLink, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Funda Online",
      description: "Plateforme d'apprentissage en ligne avec cours interactifs et suivi des progrès.",
      category: "Développement Web",
      image: "/portfolio/funda.png",
      technologies: ["Next.js", "TypeScript", "Sanity", "Tailwind"],
      link: "https://funda-online.com",
    },
    {
      id: 2,
      title: "CS Bisournouse",
      description: "Site web de l'école de cirque de Bisournouse avec gestion des inscriptions.",
      category: "Développement Web",
      image: "/portfolio/csbis.png",
      technologies: ["React", "TypeScript", "Node.js", "Tailwind"],
      link: "https://csbisournouse.vercel.app",
    },
    {
        id: 3,
        title: "Metro Travels",
        description: "Site de réservation de voyages avec recommandations personnalisées.",
        category: "Développement Web",
        image: "/portfolio/metro.png",
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        link: "https://metrotravels.vercel.app/destinations",
      },
      {
        id: 4,
        title: "Pexelsinovation",
        description: "Landing page pour une agence de design et développement innovante.",
        category: "Développement Web",
        image: "/portfolio/pexels.png",
        technologies: ["Next.js", "TypeScript", "Tailwind"],
        link: "https://pexelsinovation.vercel.app",
      },
    // ... Garde tes autres projets ici
  ];

  const categories = ["Tous", "Développement Web"];

  const [activeCategory, setActiveCategory] = useState("Tous");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const currentProject = filteredProjects[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextProject, 5000);
    return () => clearInterval(interval);
  }, [filteredProjects, isHovered]);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-gray-400 uppercase bg-gray-50 rounded-full">
            Nos Réalisations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio <span className="text-gray-400">d'exception</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nous transformons des idées complexes en interfaces <span className="text-black font-medium">intuitives et performantes</span>.
          </p>
        </div>

        {/* Filtres Stylisés */}
        <div className="flex justify-center gap-3 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => { setActiveCategory(category); setCurrentProjectIndex(0); }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-black text-white shadow-xl scale-105"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel de Projet */}
        <div className="max-w-6xl mx-auto relative">
          <div 
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* CÔTÉ GAUCHE : VISUEL (Browser Look) */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 bg-gray-50">
                  {/* Barre de navigateur factice */}
                  <div className="bg-gray-100/80 backdrop-blur-md px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="mx-auto bg-white rounded-md px-3 py-1 text-[10px] text-gray-400 flex items-center gap-2 w-1/2">
                      <Globe className="w-3 h-3" /> {currentProject.link}
                    </div>
                  </div>
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* CÔTÉ DROIT : INFOS */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{currentProject.category}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                  {currentProject.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg font-medium">
                  {currentProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-10">
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span key={index} className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-gray-50 text-gray-500 rounded-lg border border-gray-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BOUTON SIGNATURE */}
                <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#111111] text-sm text-white pl-8 pr-2 py-2 rounded-full hover:bg-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-between group/btn w-fit gap-6">
                    Voir le projet
                    <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black group-hover/btn:bg-gray-100 transition-colors">
                      <ExternalLink className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12 md:mt-16">
            <div className="flex gap-4">
              <button 
                onClick={prevProject} 
                className="w-12 h-12 rounded-full border border-[#111111] flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextProject} 
                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="hidden md:flex gap-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentProjectIndex ? "w-10 h-2 bg-black" : "w-2 h-2 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;