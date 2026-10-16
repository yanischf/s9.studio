
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronDown, 
  Check, 
  X, 
  Zap, 
  Clock, 
  Target, 
  Layout, 
  Cpu, 
  Users, 
  Workflow, 
  Box,
  Maximize,
  Lightbulb,
  Sparkles,
  Flame,
  FastForward,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Coins,
  UserMinus
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 dark:border-neutral-800">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-bold tracking-tight group-hover:text-muted transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Offers: React.FC = () => {
  return (
    <div className="bg-surface dark:bg-black min-h-screen">
      {/* 1. HERO */}
      <section className="container mx-auto px-6 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-8"
          >
            <span className="px-4 py-1.5 border border-gray-200 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-muted block w-fit">
              Global Design Studio
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] text-balance">
              Installez un <span className="italic">système</span> qui crée sans vous.
            </h1>
            <p className="text-xl md:text-2xl text-muted font-medium leading-relaxed max-w-3xl italic">
              S9 conçoit les environnements physiques et digitaux, les rituels collaboratifs et les outils IA sur mesure qui libèrent vos équipes des tâches répétitives pour automatiser l'innovation au cœur de votre culture d'entreprise.
            </p>
          </motion.div>
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

      {/* 2. NAVIGATION ANCRÉE */}
      <nav aria-label="Navigation interne de la page" className="sticky top-[81px] z-40 bg-surface/80 backdrop-blur-md border-b border-gray-100 dark:border-neutral-900 py-6 flex justify-center gap-4">
        <a
          href="#liberation"
          className="px-8 py-4 border-2 border-black dark:border-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
        >
          La Libération
        </a>
        <a
          href="#creation"
          className="px-8 py-4 border-2 border-black dark:border-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
        >
          La Création
        </a>
      </nav>

      {/* 3. DIFFÉRENCIATION */}
      <section className="container mx-auto px-6 py-40">
        <div className="bg-black text-white rounded-[3rem] p-12 md:p-20 text-center">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Pas une prestation. <span className="italic text-gray-400">Un actif permanent.</span>
          </h2>
        </div>
      </section>

      {/* 4. SECTION — LA LIBÉRATION */}
      <section id="liberation" className="container mx-auto px-6 py-40 space-y-12">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Temps 01</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">La Libération</h2>
          <p className="text-xl text-muted font-medium italic max-w-3xl leading-relaxed">
            Avant de pouvoir créer, il est impératif de restaurer l'espace mental et le temps nécessaire à l'innovation. La Libération n'est pas une option, c'est le prérequis indispensable pour extraire votre équipe du mode survie opérationnel et lui redonner les moyens de ses ambitions créatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Organisation",
              content: "Clarification des rôles, structuration des processus, remise en ordre de ce qui freine la fluidité opérationnelle.",
              icon: <Layout className="w-8 h-8" />
            },
            {
              title: "Optimisation",
              content: "Identification des frictions, simplification des workflows, suppression de ce qui consomme du temps sans produire de valeur.",
              icon: <Workflow className="w-8 h-8" />
            },
            {
              title: "Assistants IA et outils",
              content: "Installation et configuration des outils adaptés à votre équipe et à vos usages. Des solutions concrètes, utilisées au quotidien.",
              icon: <Cpu className="w-8 h-8" />
            }
          ].map((card, i) => (
            <div key={i} className="bg-gray-100 dark:bg-neutral-900 rounded-[2.5rem] p-10 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black flex items-center justify-center shadow-sm">
                {card.icon}
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight">{card.title}</h3>
              <p className="text-muted leading-relaxed">{card.content}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-muted">Pour vous si...</h4>
            <p className="text-lg leading-relaxed">Votre équipe est compétente mais débordée. Le temps manque avant même d'avoir commencé à innover.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-xs text-muted">Ce que ça change</h4>
            <p className="text-lg leading-relaxed">Du temps récupéré. De la clarté retrouvée. Les conditions pour passer à la suite.</p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <a 
            href="mailto:meet.section9@gmail.com"
            className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Démarrer par La Libération <ArrowRight size={20} />
          </a>
          <p className="text-xs text-muted font-bold uppercase tracking-widest">Commence par un diagnostic de 45 minutes.</p>
        </div>
      </section>

      {/* 5. SECTION — LA CRÉATION */}
      <section id="creation" className="container mx-auto px-6 py-40 space-y-12">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Temps 02</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">La Création</h2>
          <p className="text-xl text-muted font-medium italic max-w-3xl leading-relaxed">
            La Création est le déploiement de votre nouvel OS créatif. À travers trois modules complémentaires, nous installons les structures, les rituels et les projets qui transforment durablement votre organisation en une entité capable d'innover de manière autonome et reproductible.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[80px] left-[10%] right-[10%] h-[4px] bg-black/5 dark:bg-white/5 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {[
              {
                num: "01",
                title: "La Creative Room",
                subtitle: "L'espace physique et digital dédié à la création dans vos murs.",
                forYou: "Votre équipe n'a pas d'espace dédié à la création et que l'opérationnel écrase systématiquement les projets.",
                impact: "Un espace conçu pour que vos équipes créent sans attendre que vous soyez disponible.",
                cta: "Installer ma Creative Room",
                icon: <Box className="w-10 h-10" />
              },
              {
                num: "02",
                title: "La Méthode",
                subtitle: "Les rituels et processus qui transforment vos équipes en créateurs autonomes.",
                forYou: "Votre équipe sait créer mais manque de rituels et de processus pour le faire de façon autonome et reproductible.",
                impact: "Vos équipes n'attendent plus votre validation pour avancer.",
                cta: "Découvrir la Méthode",
                icon: <Workflow className="w-10 h-10" />
              },
              {
                num: "03",
                title: "Le Sprint",
                subtitle: "Le premier projet stratégique piloté ensemble pour que vos équipes sachent continuer seules.",
                forYou: "Vous avez un projet stratégique qui n'a jamais vraiment démarré et que vous voulez le lancer avec une équipe capable de le continuer sans vous.",
                impact: "Un projet concret sorti. Une équipe qui sait reproduire le processus. S9 s'efface quand la machine tourne.",
                cta: "Lancer mon Sprint",
                icon: <Zap className="w-10 h-10" />
              }
            ].map((card, i) => (
              <div key={i} className="group p-12 bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] hover:border-black dark:hover:border-white transition-all flex flex-col justify-between h-full shadow-sm hover:shadow-xl">
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-16 bg-surface dark:bg-neutral-900 rounded-2xl flex items-center justify-center text-black dark:text-white shadow-sm group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                      {card.icon}
                    </div>
                    <span className="text-4xl font-black text-gray-100 dark:text-neutral-800 group-hover:text-black dark:group-hover:text-white transition-colors">{card.num}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-3xl font-bold tracking-tight">{card.title}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted">{card.subtitle}</p>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted">Pour vous si...</h4>
                      <p className="text-sm leading-relaxed italic text-muted">{card.forYou}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted">Ce que ça change</h4>
                      <p className="text-sm leading-relaxed font-bold">{card.impact}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-50 dark:border-neutral-900 space-y-4">
                  <a 
                    href="mailto:meet.section9@gmail.com"
                    className="flex items-center justify-between w-full px-6 py-4 bg-surface dark:bg-neutral-900 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group/btn"
                  >
                    {card.cta} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <p className="text-[9px] text-center text-muted font-bold uppercase tracking-widest">Démarre par un diagnostic de 45 minutes.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* METRICS / PROOF */}
      <section className="py-40 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="space-y-4">
              <div className="text-6xl font-display font-bold tracking-tighter">30%</div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">De temps récupéré en moyenne sur les flux de production.</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-display font-bold tracking-tighter">100%</div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">D'autonomie sur les processus d'innovation installés.</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-display font-bold tracking-tighter">01</div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Système unique, conçu sur mesure pour votre culture.</p>
            </div>
          </div>
        </div>
        {/* Stylized background logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
          <span className="font-logo text-[40rem] leading-none select-none">§</span>
        </div>
      </section>


    {/* 3.7. LES DYNAMIQUES CLÉS */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-4">
                <div className="rounded-3xl overflow-hidden aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Équipe concentrée en atelier de travail" />
                </div>
                <div className="p-8 bg-black text-white rounded-3xl flex flex-col justify-end min-h-[200px]">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Impact</span>
                   <p className="text-lg font-bold leading-tight mt-4 italic">Des effets visibles et durables.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Système et méthodes de conception" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Collaboration en équipe autour d'une méthode" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted flex items-center gap-2">
                <Zap size={12} /> Installation
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-black">Ce que S9 installe</h2>
            </div>
            
            <div className="space-y-10">
              {/* Groupe Libération */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold tracking-tight text-black border-l-4 border-black pl-6">Dans La Libération</h3>
                <div className="grid grid-cols-1 gap-8 ml-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold tracking-tight text-black">Analyser</h4>
                    <p className="text-muted leading-relaxed italic">Identification des frictions et de ce qui consomme du temps sans produire de valeur.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold tracking-tight text-black">Optimiser</h4>
                    <p className="text-muted leading-relaxed italic">Restructuration des processus, clarification des rôles, installation des bons outils et assistants IA.</p>
                  </div>
                </div>
              </div>

              {/* Groupe Création */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold tracking-tight text-black border-l-4 border-black pl-6">Dans La Création</h3>
                <div className="grid grid-cols-1 gap-8 ml-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold tracking-tight text-black">Concevoir</h4>
                    <p className="text-muted leading-relaxed italic">Conception des cadres, espaces et méthodes qui permettent à vos équipes de créer ensemble.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold tracking-tight text-black">Activer</h4>
                    <p className="text-muted leading-relaxed italic">Mise en cohésion des dynamiques humaines et de l'intelligence collective.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold tracking-tight text-black">Produire</h4>
                    <p className="text-muted leading-relaxed italic">Ancrage dans le réel par le prototypage, le test et l'itération.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    

      {/* 7. LES PERSONAS */}
      <section className="relative py-40">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gray-100/50 dark:bg-neutral-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gray-100/50 dark:bg-neutral-900/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
            <div className="md:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="sticky top-[173px] space-y-8"
              >
                 <div className="space-y-4">
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Qualification</span>
                   <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">Est-ce pour vous ?</h2>
                   <p className="text-xl text-muted font-light leading-relaxed max-w-sm">
                     Si vous vous reconnaissez dans l'un de ces trois profils, vous êtes exactement là où S9 intervient.
                   </p>
                 </div>
                 
                 <div className="pt-8 border-t border-gray-100 dark:border-neutral-900">
                   <p className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">Diagnostic gratuit de 45 min</p>
                   <p className="text-sm text-muted mt-2">Pour identifier votre point d'entrée idéal.</p>
                 </div>
              </motion.div>
            </div>

            <div className="md:col-span-7 space-y-8">
               {[
                 {
                   title: "Le Moteur",
                   desc: "Tout repose sur votre énergie. Sans votre présence, rien ne sort. Vous êtes le moteur et vous commencez à sentir que c'est exactement le problème.",
                   icon: <Flame size={24} />,
                   tag: "Surcharge"
                 },
                 {
                   title: "L'Éclaireur",
                   desc: "Vous voyez où aller. Vous avez ouvert la voie. Mais quand vous regardez derrière vous, vos équipes n'ont pas les outils pour suivre sans vous.",
                   icon: <FastForward size={24} />,
                   tag: "Transmission"
                 },
                 {
                   title: "L'Architecte",
                   desc: "Vous savez exactement ce qui ne fonctionne pas. Vous avez même les solutions en tête. Ce qui manque : le cadre pour que les autres construisent avec vous.",
                   icon: <Shield size={24} />,
                   tag: "Structure"
                 }
               ].map((persona, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: idx * 0.1 }}
                   whileHover={{ y: -5 }}
                   className="group p-10 border border-gray-100 dark:border-neutral-900 rounded-[3rem] bg-white dark:bg-neutral-950 hover:border-black dark:hover:border-white transition-all duration-500 shadow-sm hover:shadow-2xl relative overflow-hidden"
                 >
                    {/* Subtle card background accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 dark:bg-neutral-900/50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                    
                    <div className="relative z-10 space-y-8">
                      <div className="flex justify-between items-start">
                        <div className="flex gap-4 items-center">
                          <div className="w-14 h-14 rounded-2xl bg-surface dark:bg-neutral-900 flex items-center justify-center text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-500">
                            {persona.icon}
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gray-100 dark:bg-neutral-900 rounded-full">{persona.tag}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-gray-100 dark:border-neutral-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                          <CheckCircle2 size={18} className="text-black dark:text-white" />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-display text-3xl font-bold tracking-tighter">{persona.title}</h3>
                        <p className="text-lg text-muted italic leading-relaxed font-light">{persona.desc}</p>
                      </div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CITATION */}
      <section className="bg-black text-white py-40 relative overflow-hidden flex items-center justify-center">
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

      {/* 8. LE COMPARATIF */}
      <section className="container mx-auto px-6 py-40">
        <div className="mb-20 text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">Pourquoi installer un système plutôt que recruter ?</h2>
        </div>
        
        <div className="md:hidden space-y-12">
          {[
            { label: "Coût", col1: "100k€/an (salaire + charges)", col2: "Investissement unique & amortissable" },
            { label: "Garantie", col1: "Dépend de la personne", col2: "Basé sur un système structurel" },
            { label: "Impact", col1: "Ajoute une couche hiérarchique", col2: "Libère le potentiel de l'équipe actuelle" },
            { label: "Valeur", col1: "Part avec le collaborateur", col2: "Reste un actif de votre entreprise" }
          ].map((row, i) => (
            <div key={i} className="space-y-6">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted border-b border-gray-100 dark:border-neutral-900 pb-4">
                {row.label}
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-8 rounded-[2rem] bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900">
                  <span className="block text-[9px] font-bold uppercase tracking-widest text-muted mb-4">Recrutement d'un Cadre</span>
                  <p className="text-lg font-light italic text-muted leading-relaxed">{row.col1}</p>
                </div>
                <div className="p-8 rounded-[2rem] bg-black text-white dark:bg-white dark:text-black shadow-xl">
                  <span className="block text-[9px] font-bold uppercase tracking-widest opacity-50 mb-4">S9 — Système Permanent</span>
                  <p className="text-lg font-bold italic leading-relaxed">{row.col2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block overflow-x-auto pb-8">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="py-10 text-left text-[10px] font-bold uppercase tracking-widest text-muted w-1/4 border-b border-gray-100 dark:border-neutral-900">Critère</th>
                <th className="py-10 text-left text-2xl font-bold tracking-tight w-1/3 border-b border-gray-100 dark:border-neutral-900">Recrutement d'un Cadre Inno</th>
                <th className="py-10 text-left text-2xl font-bold tracking-tight text-black dark:text-white bg-gray-100 dark:bg-neutral-900 rounded-t-[2.5rem] px-10">
                  S9 — Un système permanent
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Coût", col1: "100k€/an (salaire + charges)", col2: "Investissement unique & amortissable" },
                { label: "Garantie", col1: "Dépend de la personne", col2: "Basé sur un système structurel" },
                { label: "Impact", col1: "Ajoute une couche hiérarchique", col2: "Libère le potentiel de l'équipe actuelle" },
                { label: "Valeur", col1: "Part avec le collaborateur", col2: "Reste un actif de votre entreprise" }
              ].map((row, i, arr) => (
                <tr key={i} className="group">
                  <td className="py-10 text-sm font-bold text-muted uppercase tracking-widest border-b border-gray-50 dark:border-neutral-900">{row.label}</td>
                  <td className="py-10 text-lg font-light text-muted italic border-b border-gray-50 dark:border-neutral-900">{row.col1}</td>
                  <td className={`py-10 text-lg font-bold bg-gray-100 dark:bg-neutral-900 px-10 italic ${i === arr.length - 1 ? 'rounded-b-[2.5rem]' : 'border-b border-gray-200 dark:border-neutral-800'}`}>
                    {row.col2}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

     

      {/* 9. LA FAQ */}
      <section className="container mx-auto px-6 py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <div className="sticky top-[173px] space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">FAQ</span>
                <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">Une question ?</h2>
                <p className="text-xl text-muted font-light leading-relaxed max-w-sm">
                  Nous répondons aux interrogations les plus fréquentes sur l'installation du système S9 dans votre organisation.
                </p>
              </div>
              
              <div className="pt-8 border-t border-gray-100 dark:border-neutral-900">
                <a href="mailto:meet.section9@gmail.com" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:underline">
                  Discuter de vos contraintes <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-2">
              <FAQItem 
                question="On n'a pas le temps de se lancer dans un projet de transformation en ce moment." 
                answer="C'est exactement pour ça que S9 intervient en deux temps. Vous ne vous engagez pas sur une transformation complète dès le départ. Vous commencez par La Libération — un premier levier concret et délimité. La Création vient quand vous êtes prêt."
              />
              <FAQItem 
                question="Est-ce que mes équipes vont adhérer ?" 
                answer="S9 ne s'impose pas. S9 se construit avec vos équipes. Les rituels, les processus, l'espace : tout est co-conçu avec ceux qui vont l'utiliser. L'adhésion n'est pas un prérequis. C'est un résultat."
              />
              <FAQItem 
                question="Est-ce que ça fonctionne si on est en télétravail partiel ?" 
                answer="Oui. La Creative Room a une dimension physique et une dimension digitale. Les deux sont conçues pour fonctionner ensemble ou séparément selon votre organisation."
              />
              <FAQItem 
                question="Comment je sais quel module correspond à ma situation ?" 
                answer="C'est exactement l'objet du diagnostic de 45 minutes. Avant toute chose, on comprend où vous en êtes et on vous indique le point d'entrée le plus pertinent. Aucun engagement avant cette conversation."
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section className="container mx-auto px-6 py-40">
        <div className="bg-black text-white rounded-[4rem] p-12 md:p-32 text-center space-y-12 relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] max-w-4xl mx-auto">
              Vous avez lu. <span className="italic text-gray-400">Maintenant on se parle.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
              45 minutes pour identifier votre point d'entrée et construire votre plan d'action. Sans engagement.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href="mailto:meet.section9@gmail.com" 
                className="group flex items-center gap-6 px-12 py-6 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Réserver mon diagnostic <ArrowRight size={20} />
              </a>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                Gratuit. Sans engagement. En visio ou en présentiel à Paris.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
            <span className="text-[40vw] font-black tracking-tighter select-none">S9</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
