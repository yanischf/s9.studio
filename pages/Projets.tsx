import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projets: React.FC = () => {
  return (
    <div className="bg-surface dark:bg-black min-h-screen">
      {/* HERO */}
      <section className="container mx-auto px-6 pt-40 pb-24 md:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-8"
        >
          <span className="inline-block px-4 py-1.5 border border-gray-200 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
            Initiés par le studio
          </span>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] text-balance">
            Projets en cours.
          </h1>
        </motion.div>
      </section>

      {/* GRILLE DES PROJETS */}
      <section className="container mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-10 bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-5xl hover:border-black dark:hover:border-white transition-all flex flex-col min-h-[24rem]"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">{`Projet 0${i + 1}`}</span>

              {/* Logo du projet, ou nom en toutes lettres si aucun logo */}
              <div className="flex-grow flex items-center py-10">
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    loading="lazy"
                    className="h-20 md:h-24 w-auto max-w-full object-contain object-left"
                  />
                ) : (
                  <span className="font-display text-3xl md:text-4xl font-bold tracking-tighter">{p.name}</span>
                )}
              </div>

              <p className="text-muted leading-relaxed mb-8">{p.description}</p>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-fit text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4"
              >
                Voir le site <ArrowUpRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projets;
