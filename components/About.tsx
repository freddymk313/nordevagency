import { Users, Trophy, Target, Star, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#FBFBFB] relative overflow-hidden">
      {/* Background Decoratif Sophistiqué */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gray-200/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gray-100/60 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header avec Badge */}
          <div className="text-center mb-16 md:mb-24">
            <span className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-[0.2em] text-gray-400 uppercase bg-gray-100 rounded-full">
              Notre ADN
            </span>
            <h2 className="text-3xl md:text-5xl *lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1]">
              L'Excellence dans <br />
              <span className="text-gray-400">Chaque Projet</span>
            </h2>
            <p className="text-lg *md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Chez <span className="text-black">Nordev Agency</span>, nous concevons des expériences sur mesure qui transforment votre vision en un levier de croissance.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Colonne GAUCHE - Expertise & Différence */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Notre Différence</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Nous incarnons la fusion parfaite entre l'art du design, la maîtrise technologique et la stratégie business pour dépasser vos attentes.
                </p>
              </div>

              {/* Cartes de différence horizontales */}
              <div className="space-y-4">
                {[
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Expertise Technique Avancée",
                    desc: "Maîtrise des technologies modernes pour des performances optimales."
                  },
                  {
                    icon: <ShieldCheck className="w-5 h-5" />,
                    title: "Partenaire Stratégique",
                    desc: "Nous nous engageons dans votre succès au-delà du développement."
                  }
                ].map((item, index) => (
                  <div key={index} className="group flex items-center gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-black transition-all duration-500">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colonne DROITE - Stats & Testimonial (Bento Grid) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {/* Stat 1 */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-500">
                   <div className="text-4xl font-black text-black mb-2 tracking-tighter">25+</div>
                   <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Projets livrés</div>
                </div>

                {/* Stat 2 */}
                <div className="bg-black p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-transform duration-500">
                   <div className="text-4xl font-black text-white mb-2 tracking-tighter">98%</div>
                   <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Satisfaction</div>
                </div>

                {/* Stat 3 - Largeur complète ou Testimonial */}
                <div className="col-span-2 bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 relative overflow-hidden group">
                   <div className="relative z-10">
                     <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-black text-black" />)}
                     </div>
                     <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                       "Nordev a su transformer notre vision complexe en une interface simple et redoutablement efficace."
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                           <Users className="w-5 h-5 text-black" />
                        </div>
                        <div>
                           <div className="font-bold text-gray-900 text-sm">Pierre Martin</div>
                           <div className="text-gray-500 text-xs">CEO, TechVision</div>
                        </div>
                     </div>
                   </div>
                   {/* Décoration de fond de carte */}
                   <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-black/10 transition-colors" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;