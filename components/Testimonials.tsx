import { Quote, Star, Award, TrendingUp, Heart } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Nordev Agency a complètement transformé notre présence digitale. Leur attention aux détails et leur expertise technique sont exceptionnelles. Notre nouveau site a augmenté les conversions de 150% en seulement 3 mois.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
      rating: 5,
      project: "Site E-commerce Luxe",
      results: ["+150% conversions", "-40% taux de rebond", "3 mois livraison"]
    },
    {
      quote: "Travailler avec Nordev a été un tournant décisif pour notre scale-up. L'application mobile qu'ils ont développée a généré 50K téléchargements et une note de 4.9/5 sur les stores, dépassant toutes nos attentes.",
      author: "Michael Chen",
      role: "Fondateur, FitLife App",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
      rating: 5,
      project: "Application Mobile Fitness",
      results: ["50K téléchargements", "4.9/5 rating", "Top 10 App Store"]
    },
    {
      quote: "La plateforme SaaS développée par Nordev a automatisé 85% de nos processus et réduit nos coûts opérationnels de 30%. Leur accompagnement stratégique a été aussi précieux que leur expertise technique.",
      author: "Emily Rodriguez",
      role: "Directrice Marketing, GreenEco",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
      rating: 5,
      project: "Platforme SaaS B2B",
      results: ["85% processus automatisés", "-30% coûts opérationnels", "200+ utilisateurs"]
    },
  ];

  const stats = [
    { number: "98%", label: "Taux de Satisfaction", icon: Heart },
    { number: "4.9/5", label: "Note Moyenne", icon: Star },
    { number: "50+", label: "Projets d'Excellence", icon: Award },
    { number: "100%", label: "Clients Recommandent", icon: TrendingUp },
  ];

  return (
    <section id="temoignages" className="py-28 bg-white relative overflow-hidden">
      {/* Éléments de fond sophistiqués */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-900/3 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-900/2 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* En-tête premium */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-3 mb-8 shadow-lg">
            <Award className="w-5 h-5 text-gray-800" />
            <span className="text-sm font-semibold text-gray-800 tracking-wide">
              Témoignages Clients
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            La Confiance des{" "}
            <span className="text-gray-800 relative">
              Leaders
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-gray-800/20 rounded-full" />
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gray-800 to-gray-400 mx-auto mb-8 rounded-full" />

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Ils nous font confiance pour transformer leurs visions en 
            <span className="font-medium text-gray-800"> succès digitaux mesurables</span>. 
            Découvrez leurs retours d'expérience authentiques.
          </p>
        </div>
        
        {/* Grille des témoignages - Design premium */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl hover:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 relative overflow-hidden"
            >
              {/* Effet de brillance au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/0 via-gray-800/0 to-gray-800/0 group-hover:via-gray-800/5 group-hover:to-gray-800/10 transition-all duration-500 rounded-3xl" />
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* En-tête carte */}
                <div className="flex items-start justify-between mb-6">
                  {/* Note en étoiles */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" 
                      />
                    ))}
                  </div>
                  
                  {/* Icône de citation */}
                  <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Citation */}
                <blockquote className="text-gray-700 leading-relaxed text-lg mb-8 flex-1 relative">
                  <div className="absolute -top-4 -left-2 text-7xl text-gray-800/10 font-serif leading-none">"</div>
                  <div className="relative z-10">
                    {testimonial.quote}
                  </div>
                </blockquote>

                {/* Résultats chiffrés */}
                <div className="mb-6 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {testimonial.results.map((result, i) => (
                      <div key={i} className="text-xs font-semibold text-gray-800 bg-gray-50 py-2 rounded-lg">
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Séparateur */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-gray-800 to-gray-400 mb-6 rounded-full mx-auto" />

                {/* Type de projet */}
                <div className="mb-4 text-center">
                  <span className="text-sm font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-2xl border border-gray-200">
                    {testimonial.project}
                  </span>
                </div>
                
                {/* Auteur */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-gray-300 group-hover:border-gray-800 transition-all duration-300 shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-lg group-hover:text-gray-800 transition-colors">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>

              {/* Bordure animée */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1.5 bg-gradient-to-r from-gray-800 to-gray-600 group-hover:w-3/4 transition-all duration-700 rounded-full" />
            </div>
          ))}
        </div>

        {/* Statistiques de confiance - Design premium */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/3 rounded-full translate-y-24 -translate-x-24" />
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Des Résultats qui Parlent d&apos;eux-mêmes
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Notre engagement envers l&apos;excellence se reflète dans ces chiffres
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final - Conversion optimisée */}
        <div className="text-center">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gray-800/5 rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gray-800/3 rounded-full translate-x-20 translate-y-20" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Prêt à Écrire Votre Succès ?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Rejoignez les entreprises visionnaires qui nous font confiance 
                pour transformer leurs ambitions en réalisations digitales exceptionnelles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gray-800 text-white px-10 py-4 rounded-2xl hover:bg-gray-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3 group text-lg">
                  <span>Démarrer mon projet</span>
                  <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                
                <button className="border-2 border-gray-300 text-gray-800 px-10 py-4 rounded-2xl hover:border-gray-800 hover:shadow-lg transition-all duration-300 font-semibold flex items-center gap-3 group text-lg">
                  <span>Voir plus de témoignages</span>
                  <Star className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;