
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  Layout, 
  Zap, 
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  TrendingUp,
  Clock,
  Briefcase,
  Layers,
  MousePointer2,
  Building2,
  Calendar,
  Maximize,
  Box,
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const UniqueOfferV2: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* 1. HERO - LE CROCHET STRATÉGIQUE */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.85] text-black mb-12">
            Pas une transformation en bloc. Trois façons d'y arriver.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl text-muted font-light leading-relaxed italic">
              Un module pour poser le cadre. Un pour activer vos équipes. Un pour lancer votre prochain projet stratégique. Vous choisissez par où commencer.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-20 rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm grayscale hover:grayscale-0 transition-all duration-1000">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
            alt="Infrastructure Lab Natif" 
            className="w-full h-[400px] md:h-[600px] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* INTRO BLOC NOIR */}
      <section className="bg-black text-white py-24 mx-4 md:mx-10 rounded-[3rem] mb-32">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <p className="text-2xl md:text-3xl font-light leading-relaxed italic">
             Pas une prestation. Un actif permanent.
           </p>
        </div>
      </section>

      {/* 2. LES 3 MODULES D'AUTONOMIE */}
      <section className="container mx-auto px-6 py-20 mb-40">
        <div className="mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted block mb-4">La capacité de créer, installée dans vos murs.</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-black mb-6">Trois modules distincts. Un seul objectif : que votre organisation innove sans vous.</h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[80px] left-[10%] right-[10%] h-[4px] bg-black/30 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {[
              {
                id: "01",
                title: "La Creative Room",
                subtitle: "L'espace physique et digital dédié à la création dans vos murs.",
                forYou: "Pour vous si votre équipe n'a pas d'espace dédié à la création et que l'opérationnel écrase systématiquement les projets.",
                desc: "Vos équipes ont un lieu protégé de l'opérationnel conçu pour que les idées émergent, se testent et avancent.",
                result: "Diagnostic + installation + configuration.",
                impact: "Un espace conçu pour que vos équipes créent sans attendre que vous soyez disponible.",
                icon: <Building2 className="w-10 h-10" />,
                cta: "Installer ma Creative Room"
              },
              {
                id: "02",
                title: "La Méthode",
                subtitle: "Les rituels et processus qui transforment vos équipes en créateurs autonomes.",
                forYou: "Pour vous si votre équipe sait créer mais manque de rituels et de processus pour le faire de façon autonome et reproductible.",
                desc: "Vos collaborateurs savent comment avancer, décider et créer ensemble sans attendre votre validation.",
                result: "Accompagnement et formation transmis.",
                impact: "Vos équipes n'attendent plus votre validation pour avancer elles ont les outils pour décider et créer seules.",
                icon: <Layers className="w-10 h-10" />,
                cta: "Découvrir la Méthode"
              },
              {
                id: "03",
                title: "Le Sprint",
                subtitle: "Le premier projet stratégique piloté ensemble pour que vos équipes sachent continuer seules.",
                forYou: "Pour vous si vous avez un projet critique à lancer et que vous voulez en profiter pour installer une nouvelle culture de travail.",
                desc: "Un livrable concret sorti en temps record. Et une équipe qui sait reproduire le processus sans vous.",
                result: "Ateliers de facilitation + transmission des outils.",
                impact: "S9 s'efface quand la machine tourne.",
                icon: <Zap className="w-10 h-10" />,
                cta: "Lancer mon Sprint"
              }
            ].map((module, i) => (
              <div key={i} className="group p-12 bg-surface rounded-[3rem] border border-gray-100 hover:border-black transition-all flex flex-col justify-between h-full">
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black shadow-sm group-hover:scale-110 transition-transform">
                      {module.icon}
                    </div>
                    <span className="text-4xl font-black text-gray-200 group-hover:text-black transition-colors">{module.id}</span>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold tracking-tight">{module.title}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted">{module.subtitle}</p>
                    <div className="bg-white/50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-sm text-black leading-relaxed">
                        <strong>Pour vous si</strong> {module.forYou.replace(/^Pour vous si\s*/, "")}
                      </p>
                    </div>
                    <p className="text-muted leading-relaxed italic">{module.desc}</p>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <a 
                    href="mailto:meet.section9@gmail.com" 
                    className="flex items-center justify-between w-full px-6 py-4 bg-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all group/btn border border-gray-100"
                  >
                    {module.cta} <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.7. LES DYNAMIQUES CLÉS */}
      <section className="container mx-auto px-6 py-16 border-t border-gray-100 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-4">
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
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted flex items-center gap-2">
                <Zap size={12} /> Dynamiques Clés
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-black">Les dynamiques de votre transformation</h2>
              <p className="text-lg text-muted font-light">Notre expertise repose sur 4 dynamiques fondamentales</p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {[
                { 
                  t: "1. Structurer", 
                  d: "Nous concevons les règles, méthodes et processus qui structurent la création avant même de produire des solutions.", 
                  r: "Résultat : les équipes savent comment avancer, décider et créer ensemble.",
                  icon: <Maximize size={20} /> 
                },
                { 
                  t: "2. Aménager", 
                  d: "Nous travaillons sur les espaces physiques, numériques et organisationnels qui influencent les comportements et la collaboration.", 
                  r: "Résultat : la création devient plus fluide et plus collective.",
                  icon: <Box size={20} /> 
                },
                { 
                  t: "3. Activer", 
                  d: "Nous orchestrons les dynamiques humaines : rôles, contributions, intelligence collective et prise de décision.", 
                  r: "Résultat : les expertises convergent au lieu de s’opposer.",
                  icon: <Users size={20} /> 
                },
                { 
                  t: "4. Produire", 
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
                    <h3 className="text-xl font-bold tracking-tight text-black">{item.t}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.d}</p>
                    <p className="text-sm font-bold italic text-black pt-1">{item.r}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARATIF ROI */}
      <section className="container mx-auto px-6 py-20 mb-40">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">Pourquoi installer un système plutôt que recruter ?</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-8 text-left text-[10px] font-bold uppercase tracking-widest text-muted w-1/4">Critère</th>
                <th className="py-8 text-left text-2xl font-bold tracking-tight w-1/3">Recrutement d'un Cadre Inno</th>
                <th className="py-8 text-left text-2xl font-bold tracking-tight text-black bg-surface rounded-t-3xl px-8">S9 — Un système permanent</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "Coût", col1: "100k€/an (salaire + charges)", col2: "Investissement unique & amortissable" },
                { label: "Garantie", col1: "Dépend de la personne", col2: "Basé sur un système structurel" },
                { label: "Impact", col1: "Ajoute une couche hiérarchique", col2: "Libère le potentiel de l'équipe actuelle" },
                { label: "Valeur", col1: "Part avec le collaborateur", col2: "Reste un actif de votre entreprise" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-50 group">
                  <td className="py-8 text-sm font-bold text-muted uppercase tracking-widest">{row.label}</td>
                  <td className="py-8 text-lg font-light text-muted italic">{row.col1}</td>
                  <td className="py-8 text-lg font-bold bg-surface px-8 italic">{row.col2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="container mx-auto px-6 py-32 border-t border-gray-100 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">Une question ?</h2>
            <div className="mt-8">
              <a href="mailto:meet.section9@gmail.com" className="text-sm font-bold uppercase tracking-widest underline underline-offset-8">Discuter de vos contraintes</a>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-4">
            {[
              {
                q: "On n'a pas le temps de se lancer dans un projet de transformation en ce moment.",
                a: "C'est exactement pour ça que S9 intervient en modules. Vous ne vous engagez pas sur une transformation complète dès le départ. Vous commencez par ce qui correspond à votre situation aujourd'hui : une Creative Room, une méthode, un projet. Le reste vient quand vous êtes prêt."
              },
              {
                q: "Est-ce que mes équipes vont adhérer ?",
                a: "S9 ne s'impose pas. S9 se construit avec vos équipes. Les rituels, les processus, l'espace : tout est co-conçu avec ceux qui vont l'utiliser. L'adhésion n'est pas un prérequis. C'est un résultat."
              },
              {
                q: "Est-ce que ça fonctionne si on est en télétravail partiel ?",
                a: "Oui. La Creative Room a une dimension physique et une dimension digitale. Les deux sont conçues pour fonctionner ensemble ou séparément selon votre organisation."
              },
              {
                q: "Comment je sais quel module correspond à ma situation ?",
                a: "C'est exactement l'objet du diagnostic de 45 minutes. Avant toute chose, on comprend où vous en êtes et on vous indique le point d'entrée le plus pertinent. Aucun engagement avant cette conversation."
              }
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-100 last:border-0">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full py-6 flex justify-between items-center text-left group"
                >
                  <div className="flex gap-4 items-center">
                    <HelpCircle size={20} className="text-muted group-hover:text-black transition-colors" />
                    <h3 className="text-xl font-bold italic">"{faq.q}"</h3>
                  </div>
                  {openFaq === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                  <p className="text-muted leading-relaxed pl-9">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="container mx-auto px-6 py-20 pb-40">
        <div className="bg-black text-white rounded-[5rem] p-12 md:p-32 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-12">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] max-w-4xl mx-auto">
              Vous avez lu. Maintenant on se parle.
            </h2>
            <div className="flex flex-col items-center gap-8">
              <a 
                href="mailto:meet.section9@gmail.com" 
                className="group flex items-center gap-6 px-12 py-6 bg-white text-black rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform"
              >
                Réserver mon diagnostique <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted">Gratuit. Sans engagement. En visio ou en présentiel à Paris/Lyon.</span>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center select-none">
            <span className="font-logo text-[45vw] font-black tracking-tighter leading-none">§</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniqueOfferV2;
