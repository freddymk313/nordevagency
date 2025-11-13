"use client"
import { ChevronLeft, ChevronRight, ExternalLink, Play, Award } from "lucide-react";
import { useState, useEffect } from "react"
import Image from "next/image";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce Luxe",
      description: "Création d'une marketplace premium avec augmentation de 150% du taux de conversion et système de réservation en temps réel.",
      category: "Développement Web",
      image: "/img/1.webp",
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      link: "#",
      featured: true,
      results: ["+150% conversion", "3s load time", "99.9% uptime"]
    },
    {
      id: 2,
      title: "Application Fitness Mobile",
      description: "Application de suivi sportif avec IA personnalisée ayant généré 50K téléchargements en 3 mois et une note de 4.9/5.",
      category: "Application Mobile",
      image: "/img/2.png",
      technologies: ["React Native", "Firebase", "Node.js"],
      link: "#",
      featured: true,
      results: ["50K downloads", "4.9/5 rating", "30% retention"]
    },
    {
      id: 3,
      title: "Dashboard Analytics Entreprise",
      description: "Outil de business intelligence ayant réduit le temps d'analyse des données de 70% pour une équipe de 200+ utilisateurs.",
      category: "Développement Web",
      image: "/img/3.jpg",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      link: "#",
      results: ["-70% analysis time", "200+ users", "Real-time data"]
    },
    {
      id: 4,
      title: "Site Corporate FinTech",
      description: "Refonte complète ayant augmenté la génération de leads de 120% et amélioré les performances de 300%.",
      category: "Design UI/UX",
      image: "/img/4.png",
      technologies: ["Figma", "Webflow", "GraphQL"],
      link: "#",
      results: ["+120% leads", "300% perf", "Award winning"]
    },
    {
      id: 5,
      title: "Solution SaaS B2B",
      description: "Plateforme de gestion ayant automatisé 85% des processus manuels pour une entreprise de 500 employés.",
      category: "Développement Web",
      image: "/img/5.jpg",
      technologies: ["React", "MongoDB", "Socket.io", "AWS"],
      link: "#",
      results: ["85% automated", "500 users", "24/7 scaling"]
    },
    {
      id: 6,
      title: "App de Livraison Instantanée",
      description: "Application ayant réduit les délais de livraison à moins de 30 minutes avec un taux de satisfaction client de 98%.",
      category: "Application Mobile",
      image: "/img/6.jpg",
      technologies: ["Flutter", "Google Maps", "Firebase"],
      link: "#",
      results: ["30min delivery", "98% satisfaction", "10K+ orders"]
    }
  ];

  const categories = ["Tous", "Développement Web", "Application Mobile", "Design UI/UX"];

  const [activeCategory, setActiveCategory] = useState("Tous");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const currentProject = filteredProjects[currentProjectIndex];

  const navigateProject = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    if (direction === 'next') {
      setCurrentProjectIndex((prevIndex) => 
        prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentProjectIndex((prevIndex) => 
        prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
      );
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentProjectIndex(0);
  };

  // Auto-rotation des projets
  useEffect(() => {
    const interval = setInterval(() => {
      navigateProject('next');
    }, 8000);
    return () => clearInterval(interval);
  }, [filteredProjects.length]);

  return (
    <section id="portfolio" className="py-28 bg-gray-50 relative overflow-hidden">
      {/* Éléments de fond */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-gray-800/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gray-800/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête premium */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-3 mb-8 shadow-lg">
            <Award className="w-5 h-5 text-gray-800" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">
              Nos Réussites
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Projets{" "}
            <span className="text-gray-800 relative">
              d&apos;Excellence
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-gray-800/20 rounded-full" />
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-gray-400 mx-auto mb-8 rounded-full" />

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Découvrez comment nous transformons les visions ambitieuses en 
            <span className="font-medium text-gray-800"> solutions digitales performantes</span> 
            qui marquent leur industrie.
          </p>
        </div>

        {/* Filtres par catégorie - Design amélioré */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-3 rounded-2xl border-2 transition-all duration-300 text-sm font-semibold tracking-wide ${
                activeCategory === category
                  ? "bg-gray-800 text-white border-gray-800 shadow-xl transform -translate-y-1"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-800 hover:shadow-lg hover:transform hover:-translate-y-0.5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel des projets - Version premium */}
        <div className="max-w-7xl mx-auto">
          <div className={`bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100 ${
            isAnimating ? 'opacity-90 scale-95' : 'opacity-100 scale-100'
          }`}>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image du projet avec overlay */}
              <div className="relative group overflow-hidden bg-gray-900 min-h-[500px]">
                <Image 
                  src={currentProject.image} 
                  alt={currentProject.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
                
                {/* Badge featured */}
                {currentProject.featured && (
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-gray-800 to-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Projet Phare
                  </div>
                )}
                
                {/* Résultats overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-3">
                    {currentProject.results?.map((result, index) => (
                      <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                        <div className="text-xs font-bold text-gray-800 leading-tight">
                          {result}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contenu du projet */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-2xl text-sm font-semibold mb-4 border border-gray-200">
                      {currentProject.category}
                    </span>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                      {currentProject.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed font-normal">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                      Stack Technologique
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {currentProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 px-4 py-2 rounded-2xl hover:border-gray-800 hover:bg-white transition-all duration-300 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-4 pt-4">
                    <a 
                      href={currentProject.link}
                      className="flex-1 bg-gray-800 text-white text-center py-4 px-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
                    >
                      <span>Voir le projet</span>
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </a>
                    <button className="flex items-center justify-center w-14 h-14 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl hover:border-gray-800 hover:shadow-lg transition-all duration-300 group">
                      <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation et indicateurs */}
          <div className="flex justify-between items-center mt-12 px-4">
            <button
              onClick={() => navigateProject('prev')}
              className="flex items-center justify-center w-14 h-14 bg-gray-800 text-white rounded-2xl hover:bg-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-x-1 group"
              aria-label="Projet précédent"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Indicateurs de projets */}
            <div className="flex items-center gap-8">
              <span className="text-lg text-gray-700 font-semibold">
                <span className="text-gray-900">{currentProjectIndex + 1}</span>
                <span className="text-gray-400"> / {filteredProjects.length}</span>
              </span>
              
              <div className="flex gap-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentProjectIndex(index);
                      setIsAnimating(true);
                      setTimeout(() => setIsAnimating(false), 500);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex 
                        ? 'bg-gray-800 w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => navigateProject('next')}
              className="flex items-center justify-center w-14 h-14 bg-gray-800 text-white rounded-2xl hover:bg-gray-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:translate-x-1 group"
              aria-label="Projet suivant"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prêt à créer votre prochain projet d&apos;exception ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez nos clients satisfaits et donnez vie à votre vision digitale.
            </p>
            <button className="bg-gray-800 text-white px-12 py-4 rounded-2xl hover:bg-gray-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 mx-auto group">
              <span>Démarrer mon projet</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;