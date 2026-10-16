import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Repeat, Frame, MapPin, Building2 } from 'lucide-react';

const MAILTO = 'mailto:meet.section9@gmail.com';

const HomeMeta: React.FC = () => {
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
              s9 — studio de méta-design · Paris
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] text-balance">
              Permettre à chacun d'exister et de créer, ensemble.
            </h1>
            <p className="text-xl md:text-2xl text-muted font-medium leading-relaxed max-w-3xl italic">
              s9 conçoit les conditions dans lesquelles les collectifs peuvent concevoir : leurs outils, leurs rituels, leurs environnements. Nous ne créons pas à votre place — nous rendons votre création possible, durable et partagée.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <a
                href="#meta-design"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Découvrir la démarche <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={MAILTO}
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-black dark:border-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                Nous rencontrer
              </a>
            </div>
          </motion.div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-64 h-64 rounded-full border border-gray-200 dark:border-neutral-800 flex items-center justify-center animate-pulse">
              <span className="font-logo text-9xl font-black">§</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LE CONSTAT */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="max-w-4xl space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Le constat</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            Des publics fidèles. Des équipes compétentes. Et si peu de collectifs.
          </h2>
          <div className="space-y-6 text-xl text-muted leading-relaxed max-w-3xl">
            <p>
              Partout, le même paradoxe. Des lieux pleins de visiteurs qui viennent, apprécient — et repartent, sans lien entre eux, sans prise sur ce qui les accueille. Des organisations pleines de talents qui exécutent, proposent parfois — et attendent une validation qui n'arrive pas.
            </p>
            <p>
              Ce qui manque n'est presque jamais la bonne volonté. Ce qui manque, ce sont les conditions : les moments, les outils, les rituels et les espaces qui permettent à un groupe d'imaginer, de discuter et de décider ensemble — pour de vrai.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-black text-white rounded-[3rem] p-12 md:p-20 text-center">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
            On ne visite pas ce qu'on a contribué à imaginer. <span className="italic text-gray-400">On y appartient.</span>
          </p>
        </div>
      </section>

      {/* 3. LE MÉTA-DESIGN */}
      <section id="meta-design" className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900 scroll-mt-28">
        <div className="max-w-4xl space-y-8 mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">La pratique</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            Notre métier : le design du design.
          </h2>
          <p className="text-xl text-muted leading-relaxed max-w-3xl">
            Là où le design conçoit des objets et des services, le méta-design conçoit la manière même de concevoir. Nous ne livrons pas de solutions finies : nous installons chez vous la capacité de créer — et nous nous retirons quand elle tourne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Wrench className="w-8 h-8" />,
              title: 'Les outils',
              body: "Ce qui permet au collectif de produire et de décider ensemble : formats d'ateliers, protocoles de convergence, mécanismes de décision.",
            },
            {
              icon: <Repeat className="w-8 h-8" />,
              title: 'Les rituels',
              body: "Un outil s'utilise ; un rituel se vit et se répète. Les rendez-vous, les habitudes, les moments qui transforment une série d'événements en une vie collective.",
            },
            {
              icon: <Frame className="w-8 h-8" />,
              title: 'Les environnements',
              body: "Les espaces physiques et numériques qui invitent sans obliger : un lieu, un mur d'idées, une atmosphère qui dit « ici, on peut proposer ».",
            },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gray-100 dark:bg-neutral-900 rounded-[2.5rem] p-10 space-y-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-black flex items-center justify-center shadow-sm">
                {m.icon}
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight">{m.title}</h3>
              <p className="text-muted leading-relaxed">{m.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] p-10 md:p-14">
          <p className="text-xl md:text-2xl font-bold tracking-tight leading-relaxed">
            Rien n'arrive plaqué.{' '}
            <span className="italic text-muted font-medium">
              Le modèle se co-construit, toujours — dans votre identité, à votre rythme, autour de votre mission.
            </span>
          </p>
        </div>
      </section>

      {/* 4. DEUX TERRAINS */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="max-w-4xl space-y-6 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Deux terrains</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            Une même pratique, deux terrains.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/lieux"
            className="group p-12 bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] hover:border-black dark:hover:border-white transition-all flex flex-col justify-between min-h-[340px]"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-surface dark:bg-neutral-900 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-display text-3xl font-bold tracking-tight">Lieux, collectifs & quartiers</h3>
              <p className="text-muted leading-relaxed">
                Tiers-lieux, espaces culturels, maisons engagées, établissements qui accueillent du public : nous vous accompagnons à faire communauté autour de votre mission — et, si vous le désirez, à devenir un point de rencontre pour votre quartier.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
              Découvrir le Dispositif <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/organisations"
            className="group p-12 bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] hover:border-black dark:hover:border-white transition-all flex flex-col justify-between min-h-[340px]"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-surface dark:bg-neutral-900 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="font-display text-3xl font-bold tracking-tight">Organisations & équipes</h3>
              <p className="text-muted leading-relaxed">
                Entreprises, studios, structures : nous installons dans vos murs les conditions d'une création collective autonome — pour que vos équipes n'attendent plus la validation pour avancer.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
              Découvrir l'accompagnement <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* 5. LA MÉTHODE COMMUNE */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="max-w-4xl space-y-6 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">La méthode commune</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            Trois engagements, quel que soit le terrain.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: '01',
              title: 'La co-construction, toujours.',
              body: 'Objectifs, sujets, déroulés, identité : tout se dessine avec vous. Le dispositif doit vous ressembler — vous, augmenté.',
            },
            {
              num: '02',
              title: 'La décision à effet réel.',
              body: "Chaque démarche aboutit à au moins une décision collective qui a un effet concret, même modeste. On ne fait pas semblant : c'est ce qui distingue une participation sincère d'un théâtre de participation.",
            },
            {
              num: '03',
              title: 'La transmission, puis le retrait.',
              body: 'Ce que nous construisons vous appartient — les méthodes, les rituels, la communauté. Nous construisons, nous transmettons, nous nous retirons.',
            },
          ].map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-6 p-10 bg-gray-100 dark:bg-neutral-900 rounded-[2.5rem] h-full"
            >
              <span className="text-4xl font-black text-gray-300 dark:text-neutral-700">{e.num}</span>
              <h3 className="font-display text-2xl font-bold tracking-tight">{e.title}</h3>
              <p className="text-muted leading-relaxed">{e.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CITATION */}
      <section className="bg-black text-white py-40 relative overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl md:text-7xl font-light italic leading-tight tracking-tighter"
          >
            « Notre travail est réussi quand il devient invisible : quand votre collectif crée sans nous. »
          </motion.blockquote>
        </div>
        <div className="absolute inset-0 opacity-15 flex items-center justify-center select-none pointer-events-none">
          <span className="font-logo text-[40vw] font-black leading-none">§</span>
        </div>
      </section>

      {/* 6. PREUVES & MATIÈRE */}
      <section className="container mx-auto px-6 py-40">
        <div className="max-w-4xl space-y-6 mb-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Preuves & matière</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            La démarche se vit avant de s'expliquer.
          </h2>
          <p className="text-xl text-muted leading-relaxed max-w-3xl">
            Nous animons une série d'événements de création collective à travers Paris : une soirée, un lieu, une question ouverte ensemble — et une décision réelle à la fin. C'est notre pratique en accès libre, et la meilleure manière de comprendre ce que nous faisons.
          </p>
          <Link
            to="/events"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Voir les prochaines dates <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Conteneur prêt pour les futures cartes (portraits de soirée & études de cas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À venir : portraits de soirée et études de cas */}
        </div>
      </section>

      {/* 7. PREMIERS PAS */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="bg-black text-white rounded-[4rem] p-12 md:p-32 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] max-w-4xl mx-auto">
              Tout commence par une rencontre.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
              Pas de dossier, pas de format. Vous nous racontez ce que vous êtes, votre mission, vos envies. Nous vous racontons la démarche. On regarde ensemble si le désir est là — et par où commencer.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href={MAILTO}
                className="group flex items-center gap-6 px-12 py-6 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Nous écrire <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                Paris & Île-de-France · en physique de préférence
              </p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center select-none">
            <span className="font-logo text-[40vw] font-black leading-none">§</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeMeta;
