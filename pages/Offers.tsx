
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { OFFERS, ICON_MAP } from '../constants';

const Offers: React.FC = () => {
  // Filter out the requested offers
  const filteredOffers = OFFERS.filter(
    (offer) => offer.id !== 'foresight-studio' && offer.id !== 's9-studio-global'
  );

  return (
    <div className="pt-24 bg-surface dark:bg-black min-h-screen">
      {/* HERO SECTION */}
      <section className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-4 space-y-8">
            <span className="px-4 py-1.5 border border-gray-200 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-muted block w-fit">
              Solutions
            </span>
            <p className="text-xs text-muted font-medium leading-relaxed max-w-xs uppercase tracking-widest">
              Un spectre complet de design systémique pour transformer les organisations.
            </p>
          </div>
          <div className="md:col-span-8 text-right">
            <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8">
              Expertises & <span className="italic">Impact</span>.
            </h1>
          </div>
        </div>
      </section>

      {/* OFFERS GRID (01) */}
      <section className="container mx-auto px-6 py-32">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Catalogue</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">Nos prestations</h2>
          </div>
          <div className="text-[10px] font-bold text-muted uppercase tracking-widest">(01)</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredOffers.map((offer, idx) => (
            <div 
              key={offer.id} 
              className="bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] p-10 md:p-14 flex flex-col justify-between overflow-hidden relative"
            >
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 rounded-full bg-surface dark:bg-neutral-900 flex items-center justify-center text-black dark:text-white">
                    {ICON_MAP[offer.icon]}
                  </div>
                  <span className="text-[10px] font-bold text-muted opacity-50">0{idx + 1}</span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tighter">
                    {offer.title}
                  </h3>
                  <p className="text-muted leading-relaxed max-w-md">
                    {offer.shortDescription}
                  </p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 dark:bg-white/5 rounded-bl-full translate-x-8 -translate-y-8 transition-transform"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-6 py-20 pb-32">
        <div className="bg-black text-white rounded-[3rem] p-12 md:p-32 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-12">
            <Sparkles className="mx-auto w-12 h-12 text-muted" />
            <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl mx-auto">
              Une demande spécifique ? Parlons-en.
            </h2>
            <div className="flex justify-center">
              <Link 
                to="/contact" 
                className="group flex items-center gap-6 px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Nous contacter <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <span className="text-[40vw] font-black tracking-tighter select-none">S9</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;