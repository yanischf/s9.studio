import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Building2, Box, MapPin, Users } from 'lucide-react';
import { PROJECTS } from '../constants';

const SCALES = [
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'Organisations',
    body: "Rôles, processus, gouvernance. Ce qui permet à une équipe d'avancer sans tout faire remonter.",
  },
  {
    icon: <Box className="w-7 h-7" />,
    title: 'Espaces',
    body: "Lieux de travail, de rencontre, de création. Ce que l'environnement physique rend possible ou empêche.",
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    title: 'Villes et territoires',
    body: "Usages, participation, appropriation. Ce qu'un territoire laisse ouvert à celles et ceux qui l'habitent.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Communautés',
    body: "Contribution, coopération, reconnaissance. Ce qui fait qu'un collectif se construit plutôt qu'il ne consomme.",
  },
];

const CONVICTIONS = [
  {
    num: '01',
    title: 'Tout le monde conçoit.',
    body: "Chaque personne, chaque collectif fabrique des solutions au quotidien. Notre rôle n'est pas de les remplacer, mais de leur donner de meilleures conditions pour le faire.",
  },
  {
    num: '02',
    title: 'La différence des regards est une ressource.',
    body: "Personne ne détient seul la connaissance d'un problème complexe. C'est dans la rencontre entre des savoirs qui ne se ressemblent pas que l'inattendu apparaît.",
  },
  {
    num: '03',
    title: 'Le prototype est un outil de pensée.',
    body: "On comprend un problème en le manipulant. Tester tôt, ajuster, recommencer : c'est ainsi qu'une idée devient réelle.",
  },
  {
    num: '04',
    title: "Un cadre n'est jamais neutre.",
    body: "Concevoir un cadre, c'est décider de ce qui sera possible. Nous en assumons la responsabilité, et nous la rendons visible.",
  },
  {
    num: '05',
    title: "Notre travail réussit quand il n'est plus nécessaire.",
    body: "Nous construisons des dispositifs ouverts, que d'autres peuvent s'approprier, transformer, parfois détourner.",
  },
];

const Home: React.FC = () => {
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
            <span className="inline-block px-4 py-1.5 border border-gray-200 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
              Studio de design global
            </span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance">
              Nous concevons ce qui rend la création possible.
            </h1>
            <p className="text-xl md:text-2xl text-muted font-medium leading-relaxed max-w-2xl italic">
              Une organisation, un lieu, un territoire, une communauté. Avant les solutions, il y a les conditions dans lesquelles elles naissent.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <a
                href="#projets"
                className="group inline-flex items-center justify-center gap-3 px-9 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform"
              >
                Découvrir nos projets <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border border-gray-200 dark:border-neutral-800 flex items-center justify-center">
                <span className="font-logo text-8xl md:text-9xl font-black">§</span>
              </div>
              <span className="absolute -bottom-3 -right-2 bg-black text-white px-4 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.2em]">
                Meta-design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LA COUCHE INVISIBLE */}
      <section className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] flex items-center justify-center select-none pointer-events-none" aria-hidden="true">
          <span className="font-logo text-[55vw] font-black leading-none">§</span>
        </div>
        <div className="relative container mx-auto px-6 py-40">
          <div className="max-w-3xl space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 block">La couche invisible</span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
              Ce qu'on ne voit pas décide de presque tout.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>Les règles implicites. La façon dont une décision circule. L'espace qui rapproche ou qui isole. Les rituels qui autorisent une idée ou la font taire.</p>
              <p>Cette couche ne figure dans aucun livrable. Pourtant, c'est elle qui détermine ce qu'un groupe est capable d'imaginer, de décider et de construire.</p>
            </div>
            <p className="text-2xl md:text-3xl font-bold tracking-tight leading-snug pt-2">
              Nous ne concevons pas d'abord des objets. <span className="text-gray-500 italic">Nous concevons cette couche.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. L'ÉCHELLE */}
      <section className="container mx-auto px-6 py-40">
        <div className="max-w-3xl space-y-5 mb-16">
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
            La même question, à toutes les échelles.
          </h2>
          <p className="text-xl text-muted font-medium italic leading-relaxed">
            Qu'est-ce qui permet à des personnes de créer ensemble, durablement ?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCALES.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-9 bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-4xl hover:border-black dark:hover:border-white transition-all flex flex-col gap-6 min-h-[18rem]"
            >
              <span className="w-14 h-14 rounded-2xl bg-surface dark:bg-neutral-900 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                {s.icon}
              </span>
              <h3 className="text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className="text-muted leading-relaxed">{s.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 4. CONVICTIONS */}
      <section className="container mx-auto px-6 pb-40">
        <div className="max-w-3xl space-y-5 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Convictions</span>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
            Cinq idées qui guident notre travail.
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {CONVICTIONS.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group p-8 md:p-10 bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-4xl hover:border-black dark:hover:border-white transition-all grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-start"
            >
              <span className="md:col-span-2 text-4xl font-black text-gray-200 dark:text-neutral-800 group-hover:text-black dark:group-hover:text-white transition-colors">
                {c.num}
              </span>
              <div className="md:col-span-10 space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{c.title}</h3>
                <p className="text-muted leading-relaxed max-w-3xl">{c.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* 5. CE QUE NOUS CONSTRUISONS */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block mb-5">Ambition</span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
              Un studio, et une pratique à partager.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg md:text-xl text-muted leading-relaxed">
            <p>S9 réunit des designers, des praticiens et des chercheurs autour d'une même question. Nous initions nos propres projets, nous accompagnons des organisations, et nous ouvrons des espaces de discussion sur la façon dont on crée ensemble.</p>
            <p className="text-black dark:text-white font-medium">Notre désir : faire de cette approche une pratique partagée. Pas une méthode réservée à quelques spécialistes, mais une manière de penser accessible à toute équipe, tout lieu, tout collectif qui veut se donner les moyens de créer.</p>
            <p>Ce studio évoluera avec les projets qu'il accueille. Comme les cadres que nous concevons.</p>
            <p className="pt-4 text-sm text-muted border-t border-gray-100 dark:border-neutral-900">
              Ce champ porte un nom : le <span className="font-bold text-black dark:text-white">meta-design</span>. Concevoir les conditions plutôt que les solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 6. PROJETS EN COURS */}
      <section id="projets" className="bg-white dark:bg-neutral-950 border-y border-gray-100 dark:border-neutral-900 scroll-mt-28">
        <div className="container mx-auto px-6 py-40">
          <div className="max-w-3xl space-y-5 mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Initiés par le studio</span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
              Projets en cours
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-10 bg-surface dark:bg-black border border-gray-100 dark:border-neutral-900 rounded-5xl hover:border-black dark:hover:border-white transition-all flex flex-col justify-between min-h-[20rem]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">{p.name}</span>
                  <span className="w-10 h-10 rounded-full border border-gray-200 dark:border-neutral-800 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tighter">
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.name}
                        loading="lazy"
                        className={p.logoClassName ?? 'h-14 md:h-16 w-auto max-w-full object-contain object-left'}
                      />
                    ) : (
                      p.name
                    )}
                  </h3>
                  <p className="text-muted leading-relaxed italic line-clamp-4">{p.description}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/projets"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4"
            >
              Voir tous les projets <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. DEUX TERRAINS — où commencer */}
      <section className="bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] flex items-center justify-center select-none pointer-events-none" aria-hidden="true">
          <span className="font-logo text-[50vw] font-black leading-none">§</span>
        </div>
        <div className="relative container mx-auto px-6 py-40">
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 block">Par où commencer</span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
              Vous dirigez une organisation, ou vous faites vivre un lieu ?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Deux terrains, une même pratique. Selon qui vous êtes, le point d'entrée change. La démarche, non.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              to="/organisations"
              className="group p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white hover:text-black transition-all flex flex-col justify-between min-h-[16rem]"
            >
              <div className="space-y-3">
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Organisations &amp; équipes</h3>
                <p className="text-gray-400 group-hover:text-gray-600 leading-relaxed transition-colors">
                  Libérer le temps de vos équipes, puis installer durablement leur capacité à créer ensemble.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                Découvrir l'offre <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/lieux"
              className="group p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white hover:text-black transition-all flex flex-col justify-between min-h-[16rem]"
            >
              <div className="space-y-3">
                <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Lieux, collectifs &amp; quartiers</h3>
                <p className="text-gray-400 group-hover:text-gray-600 leading-relaxed transition-colors">
                  Faire communauté autour de votre mission et, si vous le désirez, devenir un point de rencontre pour votre quartier.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                Découvrir le Dispositif <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
