
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2, 
  Target, 
  Puzzle, 
  Calendar, 
  Users,
} from 'lucide-react';
import { OFFERS, ICON_MAP } from '../constants';

const OfferDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const offer = OFFERS.find((o) => o.id === id);

  if (!offer) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-24 bg-surface dark:bg-black">
      {/* BACK BUTTON */}
      <div className="container mx-auto px-6 pt-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-muted hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> Retour à l'accueil
        </Link>
      </div>

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-4 space-y-8">
            <div className="w-16 h-16 rounded-full bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 flex items-center justify-center text-accent">
               {ICON_MAP[offer.icon]}
            </div>
            <span className="px-4 py-1.5 border border-gray-200 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-muted block w-fit">
              Service Detail
            </span>
          </div>
          <div className="md:col-span-8 text-right">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8">
              {offer.title}
            </h1>
          </div>
        </div>
      </section>

      {/* CONTENT GRID (01) */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7 space-y-16">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">La Problématique</span>
                <p className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight">{offer.problem}</p>
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">La Solution S9</span>
                <p className="text-lg text-muted leading-relaxed max-w-2xl italic">{offer.solution}</p>
              </div>
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest">(01)</div>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-[3rem] p-10 md:p-14 border border-gray-100 dark:border-neutral-800 space-y-10">
               <h3 className="text-2xl font-bold tracking-tighter flex items-center gap-4">
                  Bénéfices <div className="h-px flex-grow bg-gray-100 dark:bg-neutral-800"></div>
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {offer.benefits.map((benefit, idx) => (
                   <div key={idx} className="flex items-center gap-4 p-4 border border-gray-50 dark:border-neutral-800 rounded-2xl bg-surface dark:bg-black/50">
                     <CheckCircle2 size={18} className="text-black dark:text-white shrink-0" />
                     <span className="text-sm font-medium italic">{benefit}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-32 space-y-8">
            <div className="bg-black text-white rounded-[3rem] p-12 space-y-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Informations Clés</span>
              
              <div className="space-y-8">
                <div className="space-y-2">
                   <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted">
                      <Calendar size={12} /> Format / Durée
                   </h4>
                   <p className="text-lg font-bold italic">{offer.format}</p>
                </div>
                <div className="space-y-2">
                   <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted">
                      <Users size={12} /> Cible
                   </h4>
                   <p className="text-lg font-bold italic">{offer.target}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <Link 
                  to="/contact" 
                  className="group flex flex-col items-center gap-4 w-full py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform px-8 text-center"
                >
                  <span className="text-xs leading-snug">{offer.cta || 'Démarrer'}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER OFFERS GRID (02) */}
      <section className="container mx-auto px-6 py-32 border-t border-gray-100 dark:border-neutral-900">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Expertises</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Explorez plus</h2>
          </div>
          <div className="text-[10px] font-bold text-muted uppercase tracking-widest">(02)</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-800 rounded-3xl overflow-hidden">
          {OFFERS.filter(o => o.id !== id).slice(0, 3).map((other) => (
            <Link 
              key={other.id} 
              to={`/offer/${other.id}`} 
              className="bg-surface dark:bg-black p-10 hover:bg-white dark:hover:bg-neutral-900 transition-all group"
            >
              <div className="text-muted group-hover:text-black dark:group-hover:text-white mb-6">
                {ICON_MAP[other.icon]}
              </div>
              <h3 className="text-xl font-bold mb-4 transition-all">{other.title}</h3>
              <p className="text-xs text-muted line-clamp-2 italic">{other.shortDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OfferDetail;
