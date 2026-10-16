
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Clock, Sparkles, Target, Layout, Box, Workflow, Flame, FastForward, Shield, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home2: React.FC = () => {
  return (
    <div className="bg-surface dark:bg-black min-h-screen">
      {/* HERO SECTION */}
      <section className="container mx-auto px-6 pt-40 pb-32">
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
            <p className="text-xl md:text-2xl text-muted font-medium leading-relaxed max-w-2xl">
              S9 conçoit les environnements, les rituels et les outils IA qui libèrent vos équipes et automatisent l'innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/" 
                className="group flex items-center gap-6 px-10 py-5 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Découvrir l'offre <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="aspect-[3/4] bg-gray-100 dark:bg-neutral-900 rounded-[4rem] overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/s9studio/800/1200" 
                alt="S9 Studio" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* THE DUALITY SECTION */}
      <section className="py-32 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-neutral-800 rounded-[4rem] overflow-hidden border border-neutral-800">
            {/* Part 1: Liberation */}
            <div className="bg-black p-12 md:p-20 space-y-8 hover:bg-neutral-900 transition-colors group">
              <div className="flex justify-between items-start">
                <Clock className="w-12 h-12 text-gray-600 group-hover:text-white transition-colors" />
                <span className="text-4xl font-display font-bold opacity-10">01</span>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">La Libération</h2>
                <p className="text-gray-400 leading-relaxed">
                  Nous supprimons la friction opérationnelle. En automatisant les tâches répétitives par l'IA et en structurant vos flux, nous rendons à vos équipes leur ressource la plus précieuse : le temps.
                </p>
              </div>
              <ul className="space-y-3 text-sm font-bold uppercase tracking-widest text-gray-500">
                <li className="flex items-center gap-3"><Zap size={14} /> Assistants IA sur mesure</li>
                <li className="flex items-center gap-3"><Zap size={14} /> Optimisation des flux</li>
                <li className="flex items-center gap-3"><Zap size={14} /> Clarté opérationnelle</li>
              </ul>
            </div>

            {/* Part 2: Creation */}
            <div className="bg-black p-12 md:p-20 space-y-8 hover:bg-neutral-900 transition-colors group">
              <div className="flex justify-between items-start">
                <Sparkles className="w-12 h-12 text-gray-600 group-hover:text-white transition-colors" />
                <span className="text-4xl font-display font-bold opacity-10">02</span>
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">La Création</h2>
                <p className="text-gray-400 leading-relaxed">
                  Nous installons la capacité d'innover. Une fois le temps libéré, nous aménageons vos espaces et vos rituels pour que l'innovation devienne un réflexe autonome de votre organisation.
                </p>
              </div>
              <ul className="space-y-3 text-sm font-bold uppercase tracking-widest text-gray-500">
                <li className="flex items-center gap-3"><Zap size={14} /> Creative Room</li>
                <li className="flex items-center gap-3"><Zap size={14} /> Rituels d'innovation</li>
                <li className="flex items-center gap-3"><Zap size={14} /> Autonomie créative</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-4xl space-y-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Philosophie</span>
          <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
            Le design n'est pas un service. <br />
            C'est une <span className="italic">infrastructure</span>.
          </h2>
          <p className="text-2xl text-muted leading-relaxed">
            La plupart des studios vendent des livrables. S9 vend des systèmes. Nous ne venons pas faire le travail à votre place, nous venons installer la machine qui vous permet de le faire mieux, plus vite, et sans nous.
          </p>
        </div>
      </section>

      {/* 3 MODULES SECTION */}
      <section className="container mx-auto px-6 py-32">
        <div className="mb-20 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">L'infrastructure créative</span>
          <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl">
            Trois briques. Un système d'exploitation <span className="italic">créatif</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              id: "01",
              title: "L'Espace",
              subtitle: "Creative Room",
              desc: "L'infrastructure physique et digitale où vos équipes opèrent. Un lieu protégé de l'opérationnel pour matérialiser les idées.",
              icon: <Box className="w-10 h-10" />,
              cta: "Installer mon espace"
            },
            {
              id: "02",
              title: "Le Protocole",
              subtitle: "La Méthode",
              desc: "Les rituels et processus qui automatisent la décision et la création. Vos équipes deviennent autonomes et reproductibles.",
              icon: <Workflow className="w-10 h-10" />,
              cta: "Découvrir le protocole"
            },
            {
              id: "03",
              title: "L'Impulsion",
              subtitle: "Le Sprint",
              desc: "Le projet pilote qui active le système. Nous lançons un projet stratégique ensemble pour que vos équipes sachent continuer seules.",
              icon: <Zap className="w-10 h-10" />,
              cta: "Lancer mon sprint"
            }
          ].map((module, i) => (
            <div key={i} className="group p-12 bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[3rem] hover:border-black dark:hover:border-white transition-all flex flex-col justify-between h-full shadow-sm hover:shadow-xl">
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <div className="w-16 h-16 bg-surface dark:bg-neutral-900 rounded-2xl flex items-center justify-center text-black dark:text-white shadow-sm group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                    {module.icon}
                  </div>
                  <span className="text-4xl font-black text-gray-100 dark:text-neutral-800 group-hover:text-black dark:group-hover:text-white transition-colors">{module.id}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="font-display text-3xl font-bold tracking-tight">{module.title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted">{module.subtitle}</p>
                  <p className="text-muted leading-relaxed italic">{module.desc}</p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-50 dark:border-neutral-900">
                <Link 
                  to="/" 
                  className="flex items-center justify-between w-full px-6 py-4 bg-surface dark:bg-neutral-900 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group/btn"
                >
                  {module.cta} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PERSONAS SECTION */}
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
                className="sticky top-[80px] space-y-8"
              >
                 <div className="space-y-4">
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Qualification</span>
                   <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-8">Est-ce pour vous ?</h2>
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

      {/* COMPARATIF ROI SECTION */}
      <section className="container mx-auto px-6 py-40 mb-20">
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-tight">Pourquoi installer un système plutôt que recruter ?</h2>
        </div>

        <div className="overflow-x-auto pb-8">
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

      {/* CTA SECTION */}
      <section className="container mx-auto px-6 py-32">
        <div className="bg-black text-white rounded-[4rem] p-12 md:p-32 text-center space-y-12 relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl mx-auto">
              Prêt à passer au <span className="italic text-gray-400">niveau supérieur</span> ?
            </h2>
            <div className="flex flex-col items-center gap-6">
              <Link 
                to="/" 
                className="group flex items-center gap-6 px-12 py-6 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Voir nos solutions <ArrowRight size={20} />
              </Link>
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

export default Home2;
