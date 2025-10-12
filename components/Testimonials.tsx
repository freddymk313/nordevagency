import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Nordev Agency a complètement transformé notre présence digitale. Leur attention aux détails et leur expertise technique sont exceptionnelles. Notre nouveau site a augmenté les conversions de 150%.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      rating: 5,
      project: "Site E-commerce"
    },
    {
      quote: "Travailler avec Nordev a été un tournant pour notre entreprise. Ils ont livré une application mobile qui a dépassé toutes nos attentes, et le support a été exceptionnel tout au long du processus.",
      author: "Michael Chen",
      role: "Fondateur, FitLife App",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      rating: 5,
      project: "Application Mobile"
    },
    {
      quote: "La créativité et le professionnalisme de l'équipe ont rendu tout le processus de développement fluide et agréable. Ils comprennent vraiment ce qu'il faut pour créer des produits digitaux exceptionnels.",
      author: "Emily Rodriguez",
      role: "Directrice Marketing, GreenEco",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      rating: 5,
      project: "Platforme SaaS"
    },
  ];

  return (
    <section id="temoignages" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Éléments de fond décoratifs */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gray-800/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-12 md:mb-20">
          {/* <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="text-sm font-medium text-gray-700">
              Témoignages clients
            </span>
          </div> */}
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Ils nous <span className="text-gray-800">font confiance</span>
          </h2>
          <div className="w-20 h-0.5 bg-gray-800 mx-auto mb-6 rounded-full" />
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours d'expérience de nos clients qui ont transformé 
            leurs <span className="text-gray-800 font-medium">ambitions digitales en succès concrets</span>.
          </p>
        </div>
        
        {/* Grille des témoignages */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl hover:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden p-6"
            >
              {/* Fond décoratif */}
              {/* <div className="absolute top-0 right-0 w-20 h-20 bg-gray-800/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700" /> */}
              
              <div className="relative z-10">
                {/* Note en étoiles */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>

                {/* Icône de citation */}
                <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                
                {/* Citation */}
                <blockquote className="text-gray-700 leading-relaxed text-base mb-6 italic relative">
                  "{testimonial.quote}"
                  <div className="absolute -top-2 -left-2 text-6xl text-gray-800/10 font-serif">"</div>
                </blockquote>

                {/* Séparateur */}
                <div className="w-12 h-0.5 bg-gray-800/20 mb-6 rounded-full" />

                {/* Type de projet */}
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded-full">
                    {testimonial.project}
                  </span>
                </div>
                
                {/* Auteur */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 group-hover:border-gray-800 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-base group-hover:text-gray-800 transition-colors">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>

              {/* Bordure animée */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gray-800 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Statistiques de confiance */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
                <div className="text-gray-600 text-sm">Note moyenne</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600 text-sm">Projets livrés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Recommendation</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <div className="bg-gray-800 text-white rounded-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Fond décoratif */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Prêt à rejoindre nos clients satisfaits ?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Rejoignez les entreprises qui nous font confiance pour transformer 
                leurs idées en solutions digitales performantes.
              </p>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Réserver un appel découverte
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;