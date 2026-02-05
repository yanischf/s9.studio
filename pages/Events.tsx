
import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Mail, Sparkles } from 'lucide-react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="pt-24 bg-surface dark:bg-black">
      {/* HERO SECTION */}
      <section className="container mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-4 space-y-8">
            <span className="px-4 py-1.5 border border-gray-200 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-muted block w-fit">
              Communauté
            </span>
          </div>
          <div className="md:col-span-8 text-right">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8">
              Événements & Échanges
            </h1>
            <p className="text-lg md:text-xl text-muted font-light max-w-2xl ml-auto leading-relaxed italic">
              Explorez les nouvelles frontières du design avec nos masterclasses et ateliers immersifs.
            </p>
          </div>
        </div>
      </section>

      {/* EVENTS GRID (01) */}
      <section className="container mx-auto px-6 py-32">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Agenda</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Prochains rendez-vous</h2>
          </div>
          <div className="text-[10px] font-bold text-muted uppercase tracking-widest">(01)</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {EVENTS.map((event) => (
            <div 
              key={event.id}
              className="group bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] p-10 md:p-14 hover:border-black dark:hover:border-white transition-all relative overflow-hidden"
            >
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-full bg-surface dark:bg-neutral-900 flex items-center justify-center text-black dark:text-white">
                      <Calendar size={24} />
                   </div>
                   <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted block mb-1">{event.date}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-1">
                        <MapPin size={10} /> {event.location}
                      </span>
                   </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter transition-all">
                  {event.title}
                </h3>
                <p className="text-muted leading-relaxed max-w-md italic">
                  {event.description}
                </p>
                
                <button className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest group-hover:gap-6 transition-all">
                  Réserver ma place <ArrowRight size={16} />
                </button>
              </div>
              <Sparkles className="absolute -right-10 -bottom-10 w-40 h-40 text-surface dark:text-neutral-900/50 group-hover:rotate-12 transition-transform" />
            </div>
          ))}
        </div>

        {/* NEWSLETTER (02) */}
        <section className="bg-black text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted block">Newsletter</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">Restez à l'écoute.</h2>
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest">(02)</div>
            </div>
            
            <div className="space-y-8">
              {subscribed ? (
                <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center animate-in zoom-in-95">
                  <Mail className="w-12 h-12 mx-auto text-white mb-4" />
                  <h3 className="text-2xl font-bold">Bienvenue dans le réseau S9.</h3>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <p className="text-muted text-lg italic">Recevez nos dernières réflexions et outils exclusifs directement par mail.</p>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-b-2 border-white/20 py-4 text-xl focus:outline-none focus:border-white transition-colors placeholder:text-muted"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 bottom-4 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Events;
