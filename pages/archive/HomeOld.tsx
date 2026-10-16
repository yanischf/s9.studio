
import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Target, 
  Workflow, 
  Users, 
  Layers, 
  CheckCircle2,
  Zap,
  Box,
  Maximize,
  Cpu,
  ShieldCheck,
  AlertTriangle,
  Clock,
  Coins,
  UserMinus,
  TrendingUp,
  Flame,
  FastForward,
  Shield
} from 'lucide-react';

const HomeOld: React.FC = () => {
  return (
    <div className="pt-24 bg-surface">
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 pt-20 pb-12 relative">
        <div className="space-y-12 text-left">
          <div className="mb-8">
            <p className="text-[11px] text-[#8E9AAF] font-bold uppercase tracking-[0.2em]">
              META DESIGN • INNOVATION • SYSTÈMES
            </p>
          </div>

          <div className="relative">
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-extrabold tracking-tighter leading-[0.85] text-balance text-black mt-12 mb-8 p-0">
              Vous êtes le moteur de votre entreprise. C'est exactement le problème.
            </h1>

            <div className="max-w-2xl mr-auto mt-8 p-0">
              <p className="text-xl md:text-2xl text-[#8E9AAF] font-medium leading-relaxed italic m-0 p-0">
                Vous avez les bonnes personnes. Nous concevons le cadre qui les libère
              </p>
            </div>

            <div className="flex justify-start gap-6 items-center mt-12">
              <Link 
                to="/archive/unique-offer-v2"
                className="group flex items-center gap-6 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                DÉCOUVRIR LE LAB NATIF <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="mt-24 overflow-hidden rounded-[3rem] bg-white flex items-center justify-center p-8 md:p-20 border border-gray-100 shadow-sm relative group">
          <img 
            src="https://image.noelshack.com/fichiers/2026/05/4/1769699586-home-bg.png" 
            alt="S9 Studio - Human Grid Protocol" 
            className="w-full max-h-[70vh] object-contain group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 2. LE CONSTAT (MIROIR DES DOULEURS) */}
      <section className="bg-black text-white py-32 mt-20 rounded-[4rem] mx-4 md:mx-10 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                <AlertTriangle size={14} className="text-white" /> Le Constat
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                Votre entreprise est lente parce que tout dépend de vous.
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light italic">
                Vous êtes le goulot d'étranglement de votre propre croissance. Sans système dédié, chaque projet finit sur votre bureau, vos idées stagnent et vos talents s'essoufflent.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-1 gap-6">
              {[
                {
                  title: "Trop lent pour le marché, trop vite pour l'équipe",
                  desc: "Vous avez une idée. Elle circule en réunion pendant trois semaines. Quand elle sort enfin, le marché a déjà bougé.",
                  icon: <Clock size={24} />,
                  leak: "Retard Stratégique"
                },
                {
                  title: "L'accord silencieux qui enterre les projets",
                  desc: "Une bonne idée émerge en réunion. Tout le monde acquiesce. Deux semaines après, personne ne l'a portée. Elle a disparu sans que personne ne sache pourquoi.",
                  icon: <Coins size={24} />,
                  leak: "Dépendance Financière"
                },
                {
                  title: "Bons individuellement. Bloqués collectivement.",
                  desc: "Vos collaborateurs sont bons dans leur domaine. Mais dès qu'il s'agit de créer ensemble, quelque chose coince. Le collectif ne produit pas ce que les individus promettent.",
                  icon: <UserMinus size={24} />,
                  leak: "Épuisement du Leader"
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 md:p-12 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-white/30 transition-all flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                      <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-white text-black rounded-full">{item.leak}</span>
                    </div>
                    <p className="text-gray-400 leading-relaxed italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute -bottom-20 -right-20 opacity-10 pointer-events-none select-none">
          <span className="font-logo text-[40vw] font-black leading-none">§</span>
        </div>
      </section>

      {/* 2.5 LA MUTATION */}
      <section className="container mx-auto px-6 py-40 bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted flex items-center gap-3">
                <TrendingUp size={14} /> Le Diagnostic
              </span>
              <h2 className="text-5xl md:text-[6rem] font-bold tracking-tighter leading-[0.9] text-black">
                Votre organisation n'a pas été conçue pour créer sans vous.
                </h2>
            </div>
            
            <div className="max-w-3xl space-y-8">
              <p className="text-2xl md:text-3xl text-muted font-light leading-relaxed italic">
                          Ce n'est pas un problème de talent. C'est un problème de conception. S9 intervient exactement là.

              </p>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
             <div className="relative">
                <div className="w-64 h-64 rounded-full border border-gray-200 flex items-center justify-center animate-pulse">
                   <span className="font-logo text-9xl font-black">§</span>
                </div>
                <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  OS V1.0
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. LES 3 MODULES DE L'OFFRE (ARCHITECTURE UNIQUE OFFER) */}
      <section className="container mx-auto px-6 py-32">
        <div className="mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block mb-4">La capacité de créer, installée dans vos murs.</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight">Trois modules distincts. Un seul objectif : que votre organisation innove sans vous.</h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[80px] left-[10%] right-[10%] h-[4px] bg-black/30 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {[
              {
                id: "01",
                title: "La Creative Room",
                subtitle: "L'espace physique et digital dédié à la création dans vos murs.",
                desc: "Vos équipes ont un lieu protégé de l'opérationnel conçu pour que les idées émergent, se testent et avancent.",
                result: "Diagnostic + installation + configuration.",
                impact: "Une durée adaptée à votre structure.",
                icon: <Box className="w-10 h-10" />,
                cta: "Installer ma Creative Room"
              },
              {
                id: "02",
                title: "La Méthode",
                subtitle: "Les rituels et processus qui transforment vos équipes en créateurs autonomes.",
                desc: "Vos collaborateurs savent comment avancer, décider et créer ensemble sans attendre votre validation.",
                result: "Accompagnement et formation transmis.",
                impact: "Jusqu'à ce que vos équipes n'en aient plus besoin.",
                icon: <Workflow className="w-10 h-10" />,
                cta: "Découvrir la Méthode"
              },
              {
                id: "03",
                title: "Le Sprint",
                subtitle: "Le premier projet stratégique piloté ensemble pour que vos équipes sachent continuer seules.",
                desc: "Un livrable concret sorti en temps record. Et une équipe qui sait reproduire le processus sans vous.",
                result: "Ateliers de facilitation + transmission des outils.",
                impact: "S9 s'efface quand la machine tourne.",
                icon: <Zap className="w-10 h-10" />,
                cta: "Lancer mon Sprint"
              }
            ].map((module, i) => (
              <div key={i} className="group p-12 bg-white border border-gray-100 rounded-[3rem] hover:border-black transition-all flex flex-col justify-between h-full shadow-sm hover:shadow-xl">
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center text-black shadow-sm group-hover:bg-black group-hover:text-white transition-all">
                      {module.icon}
                    </div>
                    <span className="text-4xl font-black text-gray-100 group-hover:text-black transition-colors">{module.id}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold tracking-tight">{module.title}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted">{module.subtitle}</p>
                    <p className="text-muted leading-relaxed italic">{module.desc}</p>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-50 space-y-6">
                  <div className="space-y-4">
                    <p className="text-sm"><strong>Le résultat :</strong> <span className="italic text-muted">{module.result}</span></p>
                    <p className="text-sm"><strong>L’impact :</strong> <span className="italic text-black font-bold">{module.impact}</span></p>
                  </div>
                  
                  <Link 
                    to="/archive/unique-offer-v2"
                    className="flex items-center justify-between w-full px-6 py-4 bg-surface rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all group/btn"
                  >
                    {module.cta} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <Link 
            to="/archive/unique-offer-v2"
            className="group flex items-center gap-6 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
          >
            DÉCOUVRIR L'OFFRE COMPLÈTE <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 6. À QUI NOUS NOUS ADRESSONS (EST-CE POUR VOUS ?) */}
      <section className="container mx-auto px-6 py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 lg:sticky lg:top-32">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block mb-4">Qualification</span>
             <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-8">Est-ce pour vous ?</h2>
             <p className="text-xl text-muted font-light leading-relaxed max-w-sm">
               Si vous vous reconnaissez dans l'un de ces trois profils, vous êtes exactement là où S9 intervient.
             </p>
          </div>
          <div className="md:col-span-7 space-y-6">
             {[
               {
                 title: "Le Moteur",
                 desc: "Tout repose sur votre énergie. Sans votre présence, rien ne sort. Vous êtes le moteur et vous commencez à sentir que c'est exactement le problème.",
                 icon: <Flame size={24} />
               },
               {
                 title: "L'Éclaireur",
                 desc: "Vous voyez où aller. Vous avez ouvert la voie. Mais quand vous regardez derrière vous, vos équipes n'ont pas les outils pour suivre sans vous.",
                 icon: <FastForward size={24} />
               },
               {
                 title: "L'Architecte",
                 desc: "Vous savez exactement ce qui ne fonctionne pas. Vous avez même les solutions en tête. Ce qui manque : le cadre pour que les autres construisent avec vous.",
                 icon: <Shield size={24} />
               }
             ].map((persona, idx) => (
               <div key={idx} className="group p-10 border border-gray-100 rounded-[2.5rem] bg-white hover:border-black transition-all space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
                      {persona.icon}
                    </div>
                    <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <CheckCircle2 size={16} className="text-black" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tighter">{persona.title}</h3>
                    <p className="text-lg text-muted italic leading-relaxed">{persona.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. CITATION */}
      <section className="bg-black text-white py-60 relative overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-light italic leading-tight tracking-tighter"
          >
            “Notre travail est réussi quand il devient invisible ; quand votre organisation crée sans nous.”
          </motion.blockquote>
        </div>
        <div className="absolute inset-0 opacity-15 flex items-center justify-center select-none pointer-events-none">
          <span className="font-logo text-[40vw] font-black leading-none">§</span>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="container mx-auto px-6 py-20 pb-32">
        <div className="bg-white rounded-[4rem] p-12 md:p-32 text-center border border-gray-100 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl mx-auto">
              Le premier pas ne prend pas 12 semaines. Il prend 45 minutes.
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:meet.section9@gmail.com" 
                className="group flex items-center gap-6 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Contactez S9 <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a 
                href="https://calendly.com/meet-section9/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 px-10 py-5 border-2 border-black text-black rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
              >
                Prendre un rendez-vous <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-[40vw] h-[40vw] bg-gray-50 rounded-full blur-[100px] opacity-30"></div>
        </div>
      </section>
    </div>
  );
};

export default HomeOld;
