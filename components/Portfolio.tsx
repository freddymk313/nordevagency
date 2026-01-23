"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link: string;
}

const Portfolio = () => {
  const t = useTranslations("Portfolio");

  const projects: Project[] = t.raw("projects") as unknown as Project[];
  const categories: string[] = t.raw("categories") as unknown as string[];

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const filteredProjects =
    activeCategory === categories[0]
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const currentProject = filteredProjects[currentProjectIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextProject, 5000);
    return () => clearInterval(interval);
  }, [filteredProjects, isHovered]);

  return (
    <section id="portfolio" className="py-12 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-5 md:px-6">
        {/* En-tête */}
        <div className="text-center mb-10 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-[10px] md:text-[12px] font-bold tracking-widest text-gray-400 uppercase bg-gray-50 rounded-full">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            {t("title.main")} <span className="text-gray-400">{t("title.highlight")}</span>
          </h2>
          <p
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2"
            dangerouslySetInnerHTML={{ __html: t("description") }}
          />
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentProjectIndex(0);
              }}
              className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto relative">
          <div
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Visuel */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
                  <div className="bg-gray-100/80 backdrop-blur-md px-3 py-2 md:px-4 md:py-3 border-b border-gray-200 flex items-center gap-2">
                    <div className="flex gap-1.2 md:gap-1.5">
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400" />
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="mx-auto bg-white rounded-md px-2 py-0.5 md:px-3 md:py-1 text-[9px] md:text-[10px] text-gray-400 flex items-center gap-2 w-2/3 md:w-1/2 truncate">
                      <Globe className="w-2.5 h-2.5 md:w-3 md:h-3 shrink-0" />
                      <span className="truncate">{currentProject.link}</span>
                    </div>
                  </div>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Infos */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {currentProject.category}
                  </span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
                  {currentProject.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-base md:text-lg font-medium">
                  {currentProject.description}
                </p>

                <div className="mb-8 md:mb-10 flex flex-wrap gap-1.5 md:gap-2">
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-gray-50 text-gray-500 rounded-md border border-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-fit"
                >
                  <button className="bg-[#111111] text-sm text-white pl-6 md:pl-8 pr-2 py-2 rounded-full hover:bg-black transition-all duration-300 font-semibold shadow-lg flex items-center justify-between group/btn w-full sm:w-fit gap-4 md:gap-6">
                    {t("button")}
                    <span className="bg-white w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-black group-hover/btn:bg-gray-100 transition-colors">
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:scale-110 transition-transform" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 md:mt-16">
            <div className="flex gap-3 md:gap-4 items-center w-full sm:w-auto justify-between">
              <button
                onClick={prevProject}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="sm:hidden flex gap-2">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className={`transition-all duration-500 rounded-full ${
                      index === currentProjectIndex
                        ? "w-8 md:w-10 h-1.5 md:h-2 bg-black"
                        : "w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-200"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="hidden sm:flex gap-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentProjectIndex
                      ? "w-8 md:w-10 h-1.5 md:h-2 bg-black"
                      : "w-1.5 md:w-2 h-1.5 md:h-2 bg-gray-200"
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
