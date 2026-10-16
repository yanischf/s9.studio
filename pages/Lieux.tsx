import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, MapPin } from 'lucide-react';

const MAILTO = 'mailto:meet.section9@gmail.com';

const SEQUENCE = [
  { term: "Parler d'aujourd'hui", desc: "Ce qui est. Le lieu, le quartier, la communauté tels qu'on les vit." },
  { term: 'Parler de demain', desc: 'Ce qui pourrait être. Les envies, les futurs souhaitables.' },
  { term: 'Imaginer', desc: 'La divergence. Les idées libres, nombreuses, sans censure.' },
  { term: 'Converger', desc: 'Le tri. Relire ensemble, regrouper, faire émerger ce qui compte.' },
  { term: 'Décider', desc: "L'engagement. Au moins une décision collective avec un effet réel, même modeste." },
];

const MATERIAUX = [
  {
    term: 'Les outils',
    desc: "Ce qui permet au collectif de produire et de décider ensemble : formats d'ateliers, protocoles de convergence, mécanismes de décision, un support numérique partagé pour prolonger les échanges entre les rencontres.",
  },
  {
    term: 'Les rituels',
    desc: "Un outil s'utilise ; un rituel se vit et se répète. Le rendez-vous mensuel devenu habitude, le mur d'idées qu'on consulte en arrivant. C'est ce qui transforme une série d'événements en une vie collective.",
  },
  {
    term: 'Les environnements',
    desc: "L'espace physique et numérique qui invite sans obliger : un coin dédié, des supports visibles et évolutifs, une atmosphère qui dit « ici, on peut proposer ».",
  },
];

const ENGAGEMENTS = [
  {
    num: '01',
    title: 'La co-construction, toujours.',
    body: 'Vos objectifs, vos sujets, votre gouvernance, votre direction artistique : tout se dessine avec vous. Le dispositif doit vous ressembler : vous, augmenté.',
  },
  {
    num: '02',
    title: 'La décision à effet réel.',
    body: "Chaque démarche identifie en amont au moins une chose sur laquelle la décision collective aura un effet concret, même modeste. C'est ce qui distingue une participation sincère d'un théâtre de participation, et ce qui protège la confiance de tous.",
  },
  {
    num: '03',
    title: 'La transmission, puis le retrait.',
    body: 'Méthodes, rituels, communauté : tout vous est transmis. Notre travail est réussi quand il devient invisible.',
  },
];

const PREMIERS_PAS = [
  {
    num: '1',
    title: 'Une rencontre.',
    body: "Sans format ni dossier : vous racontez votre lieu, sa mission, ses envies. Nous racontons la démarche. On regarde ensemble si le désir est là, et quelle offre lui correspond.",
  },
  {
    num: '2',
    title: 'Une co-esquisse.',
    body: 'Quelques pages dessinées ensemble : vos objectifs, les sujets pressentis, le modèle choisi, un premier déroulé. Elle vous appartient, quoi que vous décidiez ensuite.',
  },
  {
    num: '3',
    title: 'Une décision.',
    body: "La vôtre, librement. Si c'est oui, la co-construction commence, et ce qui en naîtra ne ressemblera à rien d'autre, parce que ce sera le vôtre.",
  },
];

const Lieux: React.FC = () => {
  return (
    <div className="bg-surface dark:bg-black min-h-screen">
      {/* 1. HERO */}
      <section className="container mx-auto px-6 py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-8"
        >
          <span className="px-4 py-1.5 border border-gray-200 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-muted block w-fit">
            le Dispositif · pour les lieux, collectifs & quartiers
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] text-balance">
            Créer les conditions de la co-création.
          </h1>
          <p className="text-xl md:text-2xl text-muted font-medium leading-relaxed max-w-3xl italic">
            Vous avez un lieu, un public, une mission. Nous vous accompagnons à faire communauté autour d'elle et, si vous le désirez, à devenir un point de rencontre pour votre quartier. Trois offres, un principe : rien n'arrive plaqué, tout se construit avec vous.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <a
              href={MAILTO}
              className="group inline-flex items-center gap-4 px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Ouvrir la discussion <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#offres"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-black dark:border-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
            >
              Voir les trois offres
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. LE CONSTAT */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="max-w-4xl space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Le constat</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            Vos visiteurs viennent. Ils apprécient. Ils repartent.
          </h2>
          <div className="space-y-6 text-xl text-muted leading-relaxed max-w-3xl">
            <p>
              Un soir, dans votre espace. Les habitués sont là, quelques curieux ont poussé la porte. Ils viennent pour ce que vous proposez, et ils repartent. Entre eux, pourtant, il y avait tout : des idées, des envies, des savoir-faire, des voisins qui ne se connaissaient pas.
            </p>
            <p>
              Beaucoup de lieux ont un public fidèle sans avoir une communauté : des gens qui viennent sans lien entre eux, sans prise sur le projet, sans raison de se sentir co-auteurs. Ce qui manque n'est presque jamais la bonne volonté. Ce sont les conditions : les moments, les outils, les rituels et les espaces qui permettent à un groupe d'imaginer, de discuter et de décider ensemble.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-black text-white rounded-[3rem] p-12 md:p-20 text-center">
          <p className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
            On ne visite pas un lieu qu'on a contribué à imaginer. <span className="italic text-gray-400">On y appartient.</span>
          </p>
        </div>
      </section>

      {/* 3. LA POSTURE */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="max-w-4xl space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">La posture</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            Rester soi, portes ouvertes.
          </h2>
          <div className="space-y-6 text-xl text-muted leading-relaxed max-w-3xl">
            <p>
              Votre établissement a une mission propre, et c'est autour d'elle qu'il fait communauté. Mais aucun lieu n'existe hors-sol : vous êtes situé quelque part, vous recevez des gens, et par votre seule proposition, vous façonnez déjà votre quartier.
            </p>
            <p>
              Nous appelons cette posture la <strong className="text-black dark:text-white font-bold">communauté ouverte</strong> : un lieu qui traite ses propres sujets, qui poursuit sa propre mission, mais qui le fait portes ouvertes, en donnant à ceux qui l'entourent une place de co-auteurs plutôt que de spectateurs. Ni repli sur soi, ni dissolution dans le tout-public : une identité claire, et une ouverture assumée.
            </p>
            <p>
              Les sujets vous appartiennent. Vous choisissez ce que vous mettez en partage, en accord avec ce que vous êtes. Nous apportons la méthode pour que cette ouverture fonctionne réellement.
            </p>
          </div>
        </div>
      </section>

      {/* 4. LES TROIS OFFRES */}
      <section id="offres" className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900 scroll-mt-28">
        <div className="max-w-4xl space-y-6 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Les trois offres</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            Trois manières d'entrer. Vous choisissez la vôtre.
          </h2>
          <p className="text-xl text-muted leading-relaxed max-w-3xl">
            Nos trois offres ne sont pas des étapes obligées : ce sont des entrées parallèles. Chaque lieu choisit le modèle qui correspond à ses objectifs, son budget, son rythme, et circule de l'une à l'autre au fil de son envie.
          </p>
        </div>

        <div className="space-y-8">
          {/* Offre 1 — Essayer */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] p-10 md:p-16 space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-surface dark:bg-neutral-900 flex items-center justify-center">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Essayer</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Une soirée, une journée, un week-end.</p>
              </div>
            </div>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">
              Le temps d'un événement, votre espace devient un lieu de création collective : on y parle, on y imagine, on y décide de vraies choses. Aucun engagement au-delà de l'événement lui-même ; votre programmation continue de vivre.
            </p>
            <p className="text-sm font-bold uppercase tracking-widest text-muted">
              L'événement se compose comme un menu, avec les séquences qui vous ressemblent :
            </p>
            <ul className="divide-y divide-gray-100 dark:divide-neutral-900 border-y border-gray-100 dark:border-neutral-900">
              {SEQUENCE.map((s, i) => (
                <li key={i} className="py-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <span className="shrink-0 w-full sm:w-52 font-bold tracking-tight">{s.term}</span>
                  <span className="text-muted leading-relaxed italic">{s.desc}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">
              À la fin : des idées organisées et visibles, une décision actée, un groupe de personnes liées à votre lieu, et l'envie, libre, de la suite.
            </p>
            <p className="text-xl md:text-2xl font-bold tracking-tight leading-relaxed italic border-l-4 border-black dark:border-white pl-6">
              Un premier pas n'a pas besoin d'être grand. Il a besoin d'être fait ensemble.
            </p>
          </motion.article>

          {/* Offre 2 — Faire communauté */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] p-10 md:p-16 space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-surface dark:bg-neutral-900 flex items-center justify-center">
                <Users className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Faire communauté</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Outils, rituels, environnements.</p>
              </div>
            </div>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">
              L'offre centrale : un accompagnement de plusieurs semaines ou mois pour construire une communauté durable autour de votre mission. Faire communauté ne se décrète pas. Cela se construit, avec trois matériaux :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MATERIAUX.map((m, i) => (
                <div key={i} className="bg-surface dark:bg-neutral-900 rounded-[2rem] p-8 space-y-3">
                  <h4 className="text-lg font-bold tracking-tight">{m.term}</h4>
                  <p className="text-sm text-muted leading-relaxed italic">{m.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-muted leading-relaxed max-w-3xl">
              Le déroulé : diagnostic partagé, conception de l'agencement, lancement accompagné, puis transmission complète à votre équipe.
            </p>
            <p className="text-xl md:text-2xl font-bold tracking-tight leading-relaxed italic border-l-4 border-black dark:border-white pl-6">
              La communauté construite vous appartient, jamais à nous. Nous construisons, nous transmettons, nous nous retirons.
            </p>
          </motion.article>

          {/* Offre 3 — S'ouvrir au quartier */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] p-10 md:p-16 space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-surface dark:bg-neutral-900 flex items-center justify-center">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight">S'ouvrir au quartier</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Devenir un point de rencontre pour les habitants.</p>
              </div>
            </div>
            <div className="space-y-6 text-lg text-muted leading-relaxed max-w-3xl">
              <p>
                Certains lieux portent un désir plus large : devenir un point de recueil pour leur zone géographique, un endroit où les habitants viennent se retrouver, échanger, et imaginer ensemble leur quartier et le vivre-ensemble de demain.
              </p>
              <p>
                Nous le disons avec honnêteté : la participation citoyenne véritable est exigeante. Elle demande du temps, de la constance, et une confiance qui ne se gagne qu'en tenant ses promesses. Beaucoup de dispositifs qui la promettent la déçoivent.
              </p>
              <p>
                C'est pourquoi cette offre fonctionne ainsi : si le désir est posé par le lieu, alors elle peut exister, et nous la construisons pas à pas, sans sur-promettre. Des temps d'échange ouverts au quartier, greffés sur votre vie ; des sujets à l'échelle du territoire, toujours reliés à au moins une décision à effet réel ; une montée en régime progressive. On commence petit, on tient ce qu'on promet, on élargit quand la confiance est là.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* 5. LA MÉTHODE */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="max-w-4xl space-y-6 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">La méthode</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            Trois engagements, quelle que soit l'offre.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ENGAGEMENTS.map((e, i) => (
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

      {/* 6. LIBRE COURS — EN ACCÈS LIBRE */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">En accès libre · Libre Cours</span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
              Venez la voir fonctionner.
            </h2>
            <p className="text-xl text-muted leading-relaxed">
              Le temps d'une rencontre, dans un lieu de votre quartier, on échange des idées, des envies, des manières de voir le monde, avec des gens qui vivent à deux rues de chez vous. Pas besoin d'être expert, membre ou invité de quelqu'un. Habiter à côté suffit.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <a
                href="https://librecours.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Découvrir Libre Cours <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={MAILTO}
                className="inline-flex items-center gap-3 px-10 py-5 border-2 border-black dark:border-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                Accueillir une date
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src="/logos/librecours.png"
              alt="Libre Cours"
              loading="lazy"
              className="w-56 h-56 md:w-72 md:h-72 object-contain"
            />
          </div>
        </div>
      </section>

      {/* 7. PREMIERS PAS */}
      <section className="container mx-auto px-6 py-40 border-t border-gray-100 dark:border-neutral-900">
        <div className="max-w-4xl space-y-6 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Premiers pas</span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
            Une rencontre, une co-esquisse, une décision.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PREMIERS_PAS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="space-y-4 p-10 bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[2.5rem] h-full"
            >
              <span className="text-4xl font-black text-gray-200 dark:text-neutral-800">{p.num}</span>
              <h3 className="font-display text-2xl font-bold tracking-tight">{p.title}</h3>
              <p className="text-muted leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center space-y-6">
          <a
            href={MAILTO}
            className="group inline-flex items-center gap-4 px-12 py-6 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Ouvrir la discussion <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-muted font-bold uppercase tracking-widest">
            Paris & Île-de-France · réponse sous quelques jours
          </p>
        </div>
      </section>
    </div>
  );
};

export default Lieux;
