
import React from 'react';
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
  ShieldCheck
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-24 bg-surface">
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 pt-20 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start md:items-end">
          <div className="md:col-span-4 self-center md:self-end">
            <div className="mb-8 md:mb-0">
              <p className="text-[11px] text-[#8E9AAF] font-bold uppercase tracking-[0.2em]">
                META DESIGN • INNOVATION • SYSTÈMES
              </p>
            </div>
          </div>

          <div className="md:col-span-8 text-right relative">
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-extrabold tracking-tighter leading-[0.85] text-balance mb-12 text-black">
              L'émergence par le cadre
            </h1>

            <div className="space-y-8 max-w-2xl ml-auto mb-12">
              <p className="text-xl md:text-2xl text-[#8E9AAF] font-medium leading-relaxed italic">
                Nous concevons les environnements, méthodes et dynamiques collectives qui permettent au design et à l'innovation d'émerger durablement.
              </p>
            </div>

            <div className="flex justify-end gap-6 items-center">
              <Link 
                to="/unique-offer" 
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
          />
        </div>
      </section>

      {/* 2. CE QUE NOUS FAISONS */}
      <section className="container mx-auto px-6 py-32 border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block mb-4">La Mission</span>
             <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1]">Créer les conditions avant de créer les solutions</h2>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { title: "Structurer les environnements d'innovation", desc: "Mettre en place des méthodes et des dispositifs clairs pour créer, tester et décider efficacement.", icon: <Layers size={24} /> },
                { title: "Activer l’intelligence collective", desc: "Faire émerger des idées actionnables grâce à la collaboration et au prototypage.", icon: <Workflow size={24} /> },
                { title: "Aligner les équipes et les expertises", desc: "Créer un langage commun entre design, tech, stratégie et métiers.", icon: <Users size={24} /> },
                { title: "Transformer les intentions", desc: "Passer de la vision abstraite à des projets concrets et opérationnels.", icon: <Target size={24} /> }
              ].map((item, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="text-black group-hover:scale-110 transition-transform origin-left">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LES DYNAMIQUES CLÉS */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="rounded-3xl overflow-hidden aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Focus" />
                </div>
                <div className="p-8 bg-black text-white rounded-3xl flex flex-col justify-end min-h-[200px]">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Impact</span>
                   <p className="text-lg font-bold leading-tight mt-4 italic">Des effets visibles et durables.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-square grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="System" />
                </div>
                <div className="rounded-3xl overflow-hidden aspect-[3/4] grayscale hover:grayscale-0 transition-all duration-700">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Method" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">03 — Dynamiques Clés</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">Les dynamiques clés du méta-design chez S9</h2>
              <p className="text-lg text-muted font-light">Notre expertise repose sur 4 dynamiques fondamentales</p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {[
                { 
                  t: "1. Cadre", 
                  d: "Nous concevons les règles, méthodes et processus qui structurent la création avant même de produire des solutions.", 
                  r: "Résultat : les équipes savent comment avancer, décider et créer ensemble.",
                  icon: <Maximize size={20} /> 
                },
                { 
                  t: "2. Environnement", 
                  d: "Nous travaillons sur les espaces physiques, numériques et organisationnels qui influencent les comportements et la collaboration.", 
                  r: "Résultat : la création devient plus fluide et plus collective.",
                  icon: <Box size={20} /> 
                },
                { 
                  t: "3. Interaction", 
                  d: "Nous orchestrons les dynamiques humaines : rôles, contributions, intelligence collective et prise de décision.", 
                  r: "Résultat : les expertises convergent au lieu de s’opposer.",
                  icon: <Users size={20} /> 
                },
                { 
                  t: "4. Mise en action", 
                  d: "Nous ancrons les projets dans le réel par le prototypage, le test et l’itération.", 
                  r: "Résultat : les idées deviennent des projets concrets et activables.",
                  icon: <Zap size={20} /> 
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group border-b border-gray-100 pb-8 last:border-0">
                  <div className="shrink-0 w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-muted group-hover:bg-black group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight">{item.t}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.d}</p>
                    <p className="text-sm font-bold italic text-black pt-1">{item.r}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOTRE UNIQUE OFFRE */}
      <section className="container mx-auto px-6 py-32 bg-surface rounded-[5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block">Infrastructure</span>
              <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9]">Notre unique offre : Le Lab Natif</h2>
              <p className="text-xl text-muted font-light leading-relaxed max-w-xl">
                L'infrastructure souveraine, physique et digitale, qui transforme votre savoir-faire en avantage stratégique.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { title: "Cockpit de Décision", desc: "Cartographier la complexité et décider en temps réel.", icon: <Cpu className="w-5 h-5" /> },
                { title: "Espace d'Action Hybride", desc: "Un environnement sur-mesure dans vos murs et sur vos écrans.", icon: <Box className="w-5 h-5" /> },
                { title: "Protocole d’Émergence", desc: "Une méthode d'action qui rend vos équipes autonomes.", icon: <Zap className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold tracking-tight">{item.title}</h4>
                    <p className="text-sm text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link 
                to="/unique-offer" 
                className="group flex items-center gap-6 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform w-fit shadow-xl"
              >
                DÉCOUVRIR LE LAB NATIF <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-black/5 rounded-[4rem] blur-2xl group-hover:bg-black/10 transition-colors"></div>
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Lab Natif Environment"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
                <div className="flex items-center gap-3 text-white">
                  <ShieldCheck size={20} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Innovation Souveraine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. À QUI NOUS NOUS ADRESSONS */}
      <section className="container mx-auto px-6 py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 sticky top-32">
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block mb-4">Cibles</span>
             <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-8">À qui nous nous adressons</h2>
             <p className="text-xl text-muted font-light leading-relaxed">
               Partout où il est nécessaire de mieux travailler ensemble pour mieux concevoir.
             </p>
          </div>
          <div className="md:col-span-7 space-y-4">
             {[
               "Entreprises et organisations",
               "Collectivités et institutions publiques",
               "Structures culturelles, éducatives et hybrides",
               "Équipes projet confrontées à la complexité"
             ].map((target, idx) => (
               <div key={idx} className="group p-10 border border-gray-100 rounded-[2.5rem] bg-white hover:border-black transition-all flex justify-between items-center">
                  <h3 className="text-2xl font-bold tracking-tighter">{target}</h3>
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 size={20} className="text-black" />
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. NOTRE POSTURE */}
      <section className="bg-black text-white py-40 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted">Notre Posture</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">Accompagner plutôt qu’imposer</h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg italic">
                Nous n’apportons pas de solutions toutes faites. Nous concevons avec vous le cadre qui permet aux bonnes solutions d’émerger, d’être comprises, partagées et mises en œuvre.
              </p>
            </div>
            <div className="space-y-12">
              <blockquote className="text-2xl md:text-4xl font-light italic leading-tight tracking-tight border-l-4 border-white/20 pl-8">
                “Nous ne cherchons pas à maîtriser le futur, nous cherchons à le rendre concevable, souhaitable et partageable.”
              </blockquote>
              <div className="pt-8 flex items-center gap-6">
                <Link to="/about" className="text-sm font-bold uppercase tracking-widest underline underline-offset-8 decoration-white/20 hover:decoration-white transition-colors">
                  Lire le manifeste complet
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-5 flex items-center justify-center select-none pointer-events-none tracking-tighter">
          <span className="font-logo text-[35vw] font-black leading-none">§</span>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="container mx-auto px-6 py-20 pb-32">
        <div className="bg-white rounded-[4rem] p-12 md:p-32 text-center border border-gray-100 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl mx-auto">
              Vous souhaitez créer un environnement plus propice à la conception ?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact" 
                className="group flex items-center gap-6 px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                Contactez S9 <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="group flex items-center gap-6 px-10 py-5 bg-surface text-black rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors"
              >
                Discutons de vos enjeux <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-[40vw] h-[40vw] bg-gray-50 rounded-full blur-[100px] opacity-30"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
