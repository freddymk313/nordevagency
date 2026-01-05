import { Quote, Star, CheckCircle2, Users2, Users } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Nordev Agency a complètement transformé notre présence digitale. Leur attention aux détails est exceptionnelle. Notre nouveau site a augmenté les conversions de 150%.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      project: "Site E-commerce",
    },
    {
      quote:
        "Travailler avec Nordev a été un tournant. Ils ont livré une application mobile qui a dépassé nos attentes. Le support a été exceptionnel tout au long du processus.",
      author: "Michael Chen",
      role: "Fondateur, FitLife App",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      project: "Application Mobile",
    },
    {
      quote:
        "La créativité et le professionnalisme de l'équipe ont rendu le processus fluide. Ils comprennent vraiment ce qu'il faut pour créer des produits digitaux d'exception.",
      author: "Emily Rodriguez",
      role: "Directrice Marketing, GreenEco",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      project: "Platforme SaaS",
    },
  ];

  return (
    <section
      id="temoignages"
      className="py-12 md:py-32 bg-[#FBFBFB] relative overflow-hidden"
    >
      {/* Sphères de décorations diffuses */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gray-200/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gray-100/50 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header de section */}
        <div className="text-center mb-10 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase bg-gray-100 rounded-full">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
            Ils nous font <span className="text-gray-400">confiance</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Découvrez comment nous aidons nos clients à{" "}
            <span className="text-black">transformer leurs ambitions</span> en
            succès mesurables.
          </p>
        </div>

        {/* Grille Bento des témoignages */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 relative flex flex-col justify-between"
            >
              <div>
                {/* Header du témoignage : Projet + Stars */}
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 md:w-4 md:h-4 fill-black text-black"
                      />
                    ))}
                  </div>
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>

                {/* Icône Quote Stylisée */}
                <div className="mb-6 opacity-10 group-hover:opacity-100 group-hover:text-black transition-all duration-500">
                  <Quote className="ww-6 h-6 md:w-8 md:h-8 rotate-180" />
                </div>

                {/* La Citation */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 font-medium">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* L'Auteur (Footer de la carte) */}
              {/* <div className="flex items-center gap-3 md:gap-4 pt-5 md:pt-6 border-t border-gray-50">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500 border-2 border-white shadow-md"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 md:w-5 md:h-5 bg-black rounded-full border-2 border-white flex items-center justify-center">
                     <CheckCircle2 className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base text-gray-900 leading-tight">{testimonial.author}</div>
                  <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">{testimonial.role}</div>
                </div>
              </div> */}

              <div className="flex items-center gap-3 md:gap-4 pt-5 md:pt-6 border-t border-gray-50">
                <div className="relative">
                  {/* Remplacement de l'image par l'icône User */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100 flex items-center justify-center border-2 border-white shadow-sm group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <Users className="w-5 h-5 md:w-5.5 md:h-5.5" />
                  </div>

                  {/* Badge de vérification (conservé) */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 md:w-5 md:h-5 bg-black rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                  </div>
                </div>

                <div>
                  <div className="font-bold text-sm md:text-base text-gray-900 leading-tight">
                    {testimonial.author}
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Petit bandeau "Social Proof" discret en dessous */}
        <div className="mt-16 md:mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="font-black text-xl md:text-2xl tracking-tighter">
            TRUSTED BY 20+ COMPANIES
          </span>
          <div className="h-px w-12 bg-gray-300 hidden md:block" />
          <span className="font-bold text-base md:text-lg italic tracking-tight">
            "The best digital partner in DRC"
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
