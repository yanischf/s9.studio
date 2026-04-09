
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, Calendar, AlertTriangle, Clock, Coins, UserMinus, Zap, Workflow, Users, Cpu } from 'lucide-react';

const InnovationJourney = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  const steps = [
    {
      title: "Diagnostic & Libération",
      desc: "On identifie les blocages et on vide le bureau pour retrouver de l'air.",
      impact: "Charge mentale -40%",
      icon: <Zap size={32} />,
      range: [0, 0.25]
    },
    {
      title: "Structure & Méthodes",
      desc: "On installe les règles du jeu, les rituels et les outils de pilotage.",
      impact: "Vitesse d'exécution x2",
      icon: <Workflow size={32} />,
      range: [0.25, 0.5]
    },
    {
      title: "Activation Humaine",
      desc: "On aligne les talents sur une vision commune et une culture créative.",
      impact: "Engagement +60%",
      icon: <Users size={32} />,
      range: [0.5, 0.75]
    },
    {
      title: "Innovation Autonome",
      desc: "Le système tourne seul, boosté par l'IA et l'intelligence collective.",
      impact: "Croissance Durable",
      icon: <Cpu size={32} />,
      range: [0.75, 1]
    }
  ];

  return (
    <div className="w-full">
      <motion.div style={{ x }} className="flex gap-20 px-[10vw]">
        {steps.map((step, i) => {
          const inputOpacity = [
            Math.max(0, step.range[0] - 0.1),
            step.range[0],
            step.range[1],
            Math.min(1, step.range[1] + 0.1)
          ];

          const opacity = useTransform(
            scrollYProgress,
            inputOpacity,
            [0.15, 1, 1, 0.15]
          );
          
          const scale = useTransform(
            scrollYProgress,
            inputOpacity,
            [0.85, 1, 1, 0.85]
          );

          const glowOpacity = useTransform(
            scrollYProgress,
            inputOpacity,
            [0, 0.8, 0.8, 0]
          );

          return (
            <motion.div 
              key={i} 
              style={{ opacity, scale }}
              className="shrink-0 w-[85vw] md:w-[45vw] space-y-12 relative will-change-transform"
            >
              <motion.div 
                style={{ opacity: glowOpacity }}
                className="absolute -inset-40 bg-white/10 blur-[120px] rounded-full pointer-events-none"
              />

              <div className="relative z-10">
                <div className="relative">
                  <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all">
                    {step.icon}
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">
                    0{i + 1}
                  </div>
                </div>
                
                <div className="mt-12 space-y-6">
                  <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-400 font-light italic leading-relaxed max-w-md">
                    {step.desc}
                  </p>
                  <div className="pt-8">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span className="text-sm font-bold uppercase tracking-widest text-white">
                        {step.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      
      <div className="absolute bottom-20 left-[10vw] right-[10vw] h-[2px] bg-white/10">
        <motion.div 
          style={{ scaleX: scrollYProgress }} 
          className="absolute inset-0 bg-white origin-left"
        />
      </div>
    </div>
  );
};

const SectionsToKeep: React.FC = () => {
  const journeyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: journeyRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold tracking-tighter mb-12">Sections to keep</h1>
        <p className="text-xl text-muted mb-20">This page contains sections that have been moved from the main pages but are kept for reference.</p>
      </section>

      {/* 3. ROADMAP (TIMELINE) - MOVED FROM UNIQUE OFFER V2 */}
      <section className="bg-surface py-32 rounded-[5rem] mx-4 md:mx-10 mb-40">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">Votre Roadmap vers la Souveraineté</h2>
            <p className="text-xl text-muted italic mt-4">L'installation de votre Lab Natif se déroule en trois phases claires.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                phase: "Phase 1",
                time: "Semaines 1-2",
                title: "Le Diagnostic de Capacité",
                desc: "Nous identifions vos 'fuites de valeur' et cartographions votre langage de conception unique.",
                deliverable: "Votre Schéma Directeur d'Infrastructure"
              },
              {
                phase: "Phase 2",
                time: "Semaines 3-8",
                title: "Le Build",
                desc: "Installation physique du Lab, configuration de votre OS digital et mise en place du Cockpit.",
                deliverable: "Votre Infrastructure S9 opérationnelle"
              },
              {
                phase: "Phase 3",
                time: "Semaines 9-12",
                title: "L’Activation",
                desc: "Nous pilotons avec vos équipes votre premier projet stratégique ('Sprint') pour roder la machine.",
                deliverable: "Une offre mise sur le marché en un temps record"
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start group">
                <div className="md:w-48 shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted block">{step.time}</span>
                  <span className="text-2xl font-black text-black">{step.phase}</span>
                </div>
                <div className="flex-grow p-10 bg-white rounded-[2.5rem] border border-gray-100 group-hover:shadow-2xl transition-all">
                  <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                  <p className="text-muted italic mb-6">{step.desc}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full text-[10px] font-bold uppercase tracking-widest">
                    <CheckCircle2 size={12} /> Livrable : {step.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
      </section>

      {/* 3.5 LA MÉTHODOLOGIE (INSTALLATION EN 3 TEMPS) - MOVED FROM UNIQUE OFFER V2 */}
      <section className="bg-white py-32 mb-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 items-end">
            <div className="space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted block">Le Process</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-black">Installation en 3 temps, sans friction.</h2>
            </div>
            <div className="space-y-6">
              <div className="h-40 w-full rounded-[2rem] overflow-hidden grayscale opacity-50 border border-gray-100">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Methodologie Blueprint" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-[3rem] overflow-hidden shadow-2xl mb-16 text-black">
            {[
              {
                step: "01",
                title: "Diagnostic de Capacité",
                desc: "Analyse de vos flux de décision et cartographie de votre 'langage de conception'. Nous définissons l'architecture idéale de votre futur Lab hybride."
              },
              {
                step: "02",
                title: "Le Build",
                desc: "Aménagement de votre espace physique et configuration de vos outils digitaux (votre OS propriétaire). Installation des rituels de création."
              },
              {
                step: "03",
                title: "L’Activation",
                desc: "Nous pilotons avec vous votre premier projet stratégique au sein de ce nouvel environnement pour 'roder' la machine."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 space-y-8 group hover:bg-surface transition-colors">
                <span className="text-4xl font-black text-gray-100 group-hover:text-black transition-colors">{item.step}</span>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold tracking-tight">{item.title}</h4>
                  <p className="text-sm text-muted leading-relaxed italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="mailto:meet.section9@gmail.com" className="group flex items-center gap-6 px-10 py-5 border-2 border-black rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              PLANIFIER L'INSTALLATION <Calendar size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 8.5. LE VOYAGE DE L'INNOVATION (SCROLL ANIMATION) - MOVED FROM OFFERS */}
      <section className="relative bg-black py-40">
        <div className="container mx-auto px-6 mb-20 text-center space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">Le Voyage</span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-white">De la libération à l'innovation</h2>
          <p className="text-xl text-gray-400 font-light italic">Scrollez pour voir l'installation de votre nouveau système</p>
        </div>

        <div ref={journeyRef} className="relative h-[250vh]">
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <InnovationJourney scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionsToKeep;
