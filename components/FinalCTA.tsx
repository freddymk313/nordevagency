import { ArrowRight, Calendar, Phone, Mail, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decoratif : Motif de points et dégradé radial */}
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`, backgroundSize: '24px 24px' }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_white_70%)] z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[11px] font-bold text-green-700 uppercase tracking-wider">Disponible pour de nouveaux projets</span>
          </div>

          {/* Titre principal */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Prêt à donner vie <br />
            <span className="text-gray-400">à votre vision ?</span>
          </h2>
          
          {/* Description */}
          <p className="text-lg *md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Créons ensemble quelque chose d'<span className="text-black font-semibold">extraordinaire</span> qui propulsera votre business vers de nouveaux sommets.
          </p>
          
          {/* Bouton d'action principal (Ton bouton Signature) */}
          <div className="flex justify-center mb-20">
            <button className="bg-[#111111] text-sm text-white pl-8 pr-2 py-2 rounded-full hover:bg-black transition-all duration-300 font-bold shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 flex items-center gap-6 group">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-white" />
                <span>Réserver un appel </span>
              </div>
              <span className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-black group-hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>
          
          {/* Grille de contact secondaire */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a 
              href="mailto:nordevagency@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100* bg-white/50 backdrop-blur-sm border-black transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50* flex items-center justify-center bg-black text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</div>
                <div className="text-sm font-bold text-gray-900">nordevagency@gmail.com</div>
              </div>
            </a>

            <a 
              href="tel:+243900611443"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-gray-100* bg-white/50 backdrop-blur-sm border-black transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50* flex items-center justify-center bg-black text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Téléphone</div>
                <div className="text-sm font-bold text-gray-900">+243 900 611 443</div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;