
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 bg-surface">
      {/* HERO SECTION - Updated image to reflect structure, frame and systemic rules */}
      <section className="container mx-auto px-6 pt-10 pb-12">
        <div className="overflow-hidden rounded-[3rem]">
          <img 
            src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=2000&q=80" 
            alt="Structure et cadre systémique S9" 
            className="w-full h-[60vh] md:h-[70vh] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </section>

      {/* MANIFESTO CONTENT SECTION */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
             <div className="sticky top-32 space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter leading-tight">Concevoir le cadre avant le projet.</h2>
             </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="space-y-12 text-xl md:text-2xl text-muted font-light leading-relaxed max-w-4xl">

              <div className="space-y-6 pt-12 border-t border-gray-100">
                <p className="italic">
                  Toute création dépend de son environnement :
                  des méthodes utilisées, des relations entre les personnes,
                  des espaces dans lesquels les idées émergent,
                  et du cadre qui autorise ou empêche la collaboration.                
                </p>
                <p>
                  S9 conçois ces conditions
                </p>
              </div>

              <div className="space-y-6 pt-12 border-t border-gray-100">
                <p>
                  Nous accompagnons les organisations à structurer les environnements qui rendent le design, 
                  l’innovation et la création réellement possibles. Avant de concevoir des projets, nous concevons le cadre dans lequel ils prennent forme.
                </p>
                <p>
                  Notre rôle n’est pas d’imposer une vision. Il est d’aider les collectifs à faire émerger la leur, ensemble.
                </p>
              </div>

              <div className="space-y-6 pt-12 border-t border-gray-100">
                <p>
                  Nous travaillons sur les <span className="text-black font-medium">systèmes de création</span> : 
                  les méthodes, les processus, les espaces, les rôles et les cultures qui permettent aux équipes de penser clairement, 
                  de décider collectivement et de transformer des intentions en actions concrètes.
                </p>
              </div>

              <div className="space-y-6 pt-12 border-t border-gray-100">
                <p>
                  Nous croyons à la <span className="italic">convergence des expertises</span>. 
                  Design, technologie, art, science, économie, service public : c’est dans la rencontre de ces disciplines que naissent les réponses les plus justes face à la complexité.
                </p>
                <p>
                  Nous utilisons le prototype comme outil de pensée, la collaboration comme méthode, et l’humain comme point de repère.
                </p>
              </div>

              <div className="space-y-6 pt-12 border-t border-gray-100">
                <p>
                  Chaque projet est une mise en situation réelle : tester, ajuster, apprendre, produire. 
                  Non pour explorer indéfiniment, mais pour faire avancer.
                </p>
                <p>
                  Nous croyons à l’action située, au travail ancré dans le contexte, aux décisions prises avec celles et ceux qui font et qui utilisent. 
                  C’est ainsi que les projets deviennent durables, appropriables et vivants.
                </p>
              </div>

              <div className="space-y-6 pt-12 border-t border-gray-100">
              
                <p className="text-black font-bold text-3xl md:text-4xl mt-12">
                  Nous ne cherchons pas à maîtriser le futur. Nous cherchons à le rendre concevable, souhaitable et partageable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="container mx-auto px-6 py-32 text-center">
        <div className="bg-black text-white rounded-[4rem] p-12 md:p-32 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl mx-auto">
              Prêt à concevoir les conditions de votre réussite ?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact" 
                className="group flex items-center gap-6 px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform mx-auto"
              >
                Contactez S9 <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center select-none">
            <span className="font-logo text-[40vw] font-black leading-none tracking-tighter">§</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
