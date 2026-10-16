import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Layout, Workflow, Cpu, Box, Flame, FastForward, Shield } from 'lucide-react';
import FAQItem from '../components/FAQItem';

const MAILTO = 'mailto:meet.section9@gmail.com';

const LIBERATION_CARDS = [
  {
    title: 'Organisation',
    content: 'Clarification des rôles, structuration des processus, remise en ordre de ce qui freine la fluidité opérationnelle.',
    icon: <Layout className="w-8 h-8" />,
  },
  {
    title: 'Optimisation',
    content: 'Identification des frictions, simplification des workflows, suppression de ce qui consomme du temps sans produire de valeur.',
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    title: 'Assistants IA et outils',
    content: 'Installation et configuration des outils adaptés à votre équipe et à vos usages. Des solutions concrètes, utilisées au quotidien.',
    icon: <Cpu className="w-8 h-8" />,
  },
];

const CREATION_CARDS = [
  {
    num: '01',
    tag: 'Environnement',
    title: 'La Creative Room',
    subtitle: "L'espace physique et digital dédié à la création dans vos murs.",
    forYou: "Votre équipe n'a pas d'espace dédié à la création et l'opérationnel écrase systématiquement les projets.",
    impact: 'Un espace conçu pour que vos équipes créent sans attendre que vous soyez disponible.',
    cta: 'Installer ma Creative Room',
    icon: <Box className="w-10 h-10" />,
  },
  {
    num: '02',
    tag: 'Outils + rituels',
    title: 'La Méthode',
    subtitle: 'Les rituels et processus qui transforment vos équipes en créateurs autonomes.',
    forYou: 'Votre équipe sait créer mais manque de rituels et de processus pour le faire de façon autonome et reproductible.',
    impact: "Vos équipes n'attendent plus votre validation pour avancer.",
    cta: 'Découvrir la Méthode',
    icon: <Workflow className="w-10 h-10" />,
  },
  {
    num: '03',
    tag: 'Mise en pratique',
    title: 'Le Sprint',
    subtitle: 'Le premier projet stratégique piloté ensemble pour que vos équipes sachent continuer seules.',
    forYou: "Vous avez un projet stratégique qui n'a jamais vraiment démarré et vous voulez le lancer avec une équipe capable de le continuer sans vous.",
    impact: "Un projet concret sorti. Une équipe qui sait reproduire le processus. S9 s'efface quand la machine tourne.",
    cta: 'Lancer mon Sprint',
    icon: <Zap className="w-10 h-10" />,
  },
];

const PERSONAS = [
  {
    title: 'Le Moteur',
    desc: "Tout repose sur votre énergie. Sans votre présence, rien ne sort. Vous êtes le moteur et vous commencez à sentir que c'est exactement le problème.",
    icon: <Flame size={24} />,
    tag: 'Surcharge',
  },
  {
    title: "L'Éclaireur",
    desc: "Vous voyez où aller. Vous avez ouvert la voie. Mais quand vous regardez derrière vous, vos équipes n'ont pas les outils pour suivre sans vous.",
    icon: <FastForward size={24} />,
    tag: 'Transmission',
  },
  {
    title: "L'Architecte",
    desc: "Vous savez exactement ce qui ne fonctionne pas. Vous avez même les solutions en tête. Ce qui manque : le cadre pour que les autres construisent avec vous.",
    icon: <Shield size={24} />,
    tag: 'Structure',
  },
];

const Organisations: React.FC = () => {
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
              s9 · pour les organisations & les équipes
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] text-balance">
              Vos équipes savent créer. Installons les conditions pour qu'elles le fassent ensemble, sans attendre.
            </h1>
            <p className="text-xl md:text-2xl text-muted font-medium leading-relaxed max-w-3xl italic">
              S9 conçoit les environnements, les rituels collaboratifs et les outils, y compris les assistants IA, qui restaurent le temps et l'espace mental de la création, pour rendre la création collective autonome et reproductible au cœur de votre organisation.
            </p>
          </motion.div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-64 h-64 rounded-full border border-gray-200 dark:border-neutral-800 flex items-center justify-center animate-pulse">
              <span className="font-logo text-9xl font-black">§</span>
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

      {/* 4. LA LIBÉRATION */}
      <section id="liberation" className="container mx-auto px-6 py-40 space-y-12 scroll-mt-28">
        <div className="space-y-2 max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Temps 01</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">La Libération</h2>
          <p className="text-xl text-muted font-medium italic max-w-3xl leading-relaxed">
            Avant de pouvoir créer, il est impératif de restaurer l'espace mental et le temps nécessaires à la création. La Libération n'est pas une option, c'est le prérequis indispensable pour extraire votre équipe du mode survie opérationnel et lui redonner les moyens de ses ambitions créatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LIBERATION_CARDS.map((card, i) => (
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
            <h3 className="font-bold uppercase tracking-widest text-xs text-muted">Pour vous si...</h3>
            <p className="text-lg leading-relaxed">Votre équipe est compétente mais débordée. Le temps manque avant même d'avoir commencé à créer.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-widest text-xs text-muted">Ce que ça change</h3>
            <p className="text-lg leading-relaxed">Du temps récupéré. De la clarté retrouvée. Les conditions pour passer à la suite.</p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <a
            href={MAILTO}
            className="inline-flex items-center gap-4 px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Démarrer par La Libération <ArrowRight size={20} />
          </a>
          <p className="text-xs text-muted font-bold uppercase tracking-widest">Commence par un diagnostic de 45 minutes.</p>
        </div>
      </section>

      {/* 5. LA CRÉATION */}
      <section id="creation" className="container mx-auto px-6 py-40 space-y-12 scroll-mt-28">
        <div className="space-y-2 max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Temps 02</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">La Création</h2>
          <p className="text-xl text-muted font-medium italic max-w-3xl leading-relaxed">
            La Création est le déploiement de votre cadre créatif. À travers trois modules complémentaires, nous installons les environnements, les rituels et les projets qui rendent votre organisation capable de créer de manière autonome et reproductible.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[80px] left-[10%] right-[10%] h-[4px] bg-black/5 dark:bg-white/5 z-0" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {CREATION_CARDS.map((card, i) => (
              <div key={i} className="group p-12 bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] hover:border-black dark:hover:border-white transition-all flex flex-col justify-between h-full shadow-sm hover:shadow-xl">
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-16 bg-surface dark:bg-neutral-900 rounded-2xl flex items-center justify-center text-black dark:text-white shadow-sm group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                      {card.icon}
                    </div>
                    <span className="text-4xl font-black text-gray-100 dark:text-neutral-800 group-hover:text-black dark:group-hover:text-white transition-colors">{card.num}</span>
                  </div>
                  <div className="space-y-3">
                    <span className="inline-block text-[9px] font-bold uppercase tracking-[0.2em] text-muted px-3 py-1 bg-surface dark:bg-neutral-900 rounded-full">{card.tag}</span>
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
                    href={MAILTO}
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

      {/* 6. CE QUE S9 INSTALLE (texte, sans image) */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block mb-4">Concrètement</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">Ce que S9 installe</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-tight border-l-4 border-black dark:border-white pl-6">Dans La Libération</h3>
            <div className="space-y-8 ml-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight">Analyser</h4>
                <p className="text-muted leading-relaxed italic">Identification des frictions et de ce qui consomme du temps sans produire de valeur.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight">Optimiser</h4>
                <p className="text-muted leading-relaxed italic">Restructuration des processus, clarification des rôles, installation des bons outils et assistants IA.</p>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-tight border-l-4 border-black dark:border-white pl-6">Dans La Création</h3>
            <div className="space-y-8 ml-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight">Concevoir</h4>
                <p className="text-muted leading-relaxed italic">Conception des cadres, espaces et méthodes qui permettent à vos équipes de créer ensemble.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight">Activer</h4>
                <p className="text-muted leading-relaxed italic">Mise en cohésion des dynamiques humaines et de l'intelligence collective.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold tracking-tight">Produire</h4>
                <p className="text-muted leading-relaxed italic">Ancrage dans le réel par le prototypage, le test et l'itération.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LES PERSONAS */}
      <section className="relative py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gray-100/50 dark:bg-neutral-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gray-100/50 dark:bg-neutral-900/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
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

            <div className="lg:col-span-7 space-y-8">
              {PERSONAS.map((persona, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative p-10 bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[2.5rem] hover:border-black dark:hover:border-white transition-all"
                >
                  <div className="relative z-10 space-y-8">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-4 items-center">
                        <div className="w-14 h-14 rounded-2xl bg-surface dark:bg-neutral-900 flex items-center justify-center text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-500">
                          {persona.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gray-100 dark:bg-neutral-900 rounded-full">{persona.tag}</span>
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

      {/* 8. CITATION */}
      <section className="bg-black text-white py-40 relative overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl md:text-7xl font-light italic leading-tight tracking-tighter"
          >
            « Notre travail est réussi quand il devient invisible ; quand votre organisation crée sans nous. »
          </motion.blockquote>
        </div>
        <div className="absolute inset-0 opacity-15 flex items-center justify-center select-none pointer-events-none">
          <span className="font-logo text-[40vw] font-black leading-none">§</span>
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
                  Nous répondons aux interrogations les plus fréquentes sur l'accompagnement des organisations par S9.
                </p>
              </div>
              <div className="pt-8 border-t border-gray-100 dark:border-neutral-900">
                <a href={MAILTO} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:underline">
                  Discuter de vos contraintes <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-2">
              <FAQItem
                question="On n'a pas le temps de se lancer dans un projet de transformation en ce moment."
                answer="C'est exactement pour ça que S9 intervient en deux temps. Vous ne vous engagez pas sur une transformation complète dès le départ. Vous commencez par La Libération, un premier levier concret et délimité. La Création vient quand vous êtes prêt."
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
                href={MAILTO}
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

export default Organisations;
