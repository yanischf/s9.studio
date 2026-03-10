
import React from 'react';
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
  Building2
} from 'lucide-react';

const UniqueOfferV2: React.FC = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* 1. HERO - LE CROCHET STRATÉGIQUE */}
      <section className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-5xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted block mb-6">L’Infrastructure Lab Natif</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-black mb-12">
            L'innovation n'est pas une réunion, c'est une infrastructure.
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <p className="text-xl md:text-2xl text-muted font-light leading-relaxed italic">
              Si vos projets traînent dans des e-mails, vous gérez de la lenteur, pas de la croissance. Tant que tout dépend de votre validation, votre entreprise est plafonnée. Installez votre moteur de création et reprenez le contrôle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO BLOC NOIR */}
      <section className="bg-black text-white py-24 mx-4 md:mx-10 rounded-[3rem] mb-32">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <p className="text-2xl md:text-3xl font-light leading-relaxed italic">
             "L'Offre Lab Natif de Section9 n'est pas une mission de conseil. C’est l’installation d’une <span className="font-bold border-b-2 border-white/20 pb-1">capacité de production souveraine</span> au cœur de votre entreprise."
           </p>
        </div>
      </section>

      {/* 2. LES 3 PILIERS D'AUTONOMIE */}
      <section className="container mx-auto px-6 py-20 mb-40">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6">3 Piliers pour votre autonomie totale</h2>
          <p className="text-xl text-muted italic">Pour que votre entreprise crée sans vous solliciter, elle a besoin d'une infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {[
            {
              id: "01",
              title: "Le Cockpit de Décision Visuelle",
              subtitle: "L'intelligence de votre entreprise, enfin sortie des têtes.",
              desc: "Nous créons un environnement visuel (physique et digital) qui cartographie l'ensemble de votre stratégie et de vos projets en cours.",
              result: "Vous entrez dans la pièce et vous savez exactement où on en est en 30 secondes.",
              impact: "Fin de la 'réunionite' de suivi. Vous pilotez par la vue, pas par le rapport.",
              icon: <Layout className="w-10 h-10" />
            },
            {
              id: "02",
              title: "L’Espace d’Action Hybride",
              subtitle: "Le lieu où les idées deviennent des actifs.",
              desc: "Nous aménageons dans vos murs un espace physique agile, doublé d'une infrastructure digitale (No-code, IA, Design) configurée sur mesure.",
              result: "Un lieu dédié qui protège la création de l'urgence opérationnelle.",
              impact: "Vos équipes disposent des mêmes outils que les meilleures startups pour prototyper.",
              icon: <Building2 className="w-10 h-10" />
            },
            {
              id: "03",
              title: "Le Protocole d’Émergence S9",
              subtitle: "La méthode qui transforme vos collaborateurs en moteurs.",
              desc: "Nous transmettons à vos équipes nos rituels de décision et de production rapide.",
              result: "Vos talents apprennent à valider des hypothèses et accélérer les bonnes idées en autonomie.",
              impact: "Vous récupérez 15h de temps de cerveau par semaine.",
              icon: <Zap className="w-10 h-10" />
            }
          ].map((pillar, i) => (
            <div key={i} className="group p-12 bg-surface rounded-[3rem] border border-gray-100 hover:border-black transition-all flex flex-col justify-between h-full">
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black shadow-sm group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-4xl font-black text-gray-200 group-hover:text-black transition-colors">{pillar.id}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight">{pillar.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted">{pillar.subtitle}</p>
                  <p className="text-muted leading-relaxed italic">{pillar.desc}</p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-100 space-y-4">
                <p className="text-sm"><strong>Le résultat :</strong> <span className="italic text-muted">{pillar.result}</span></p>
                <p className="text-sm"><strong>L’impact :</strong> <span className="italic text-black font-bold">{pillar.impact}</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ROADMAP (TIMELINE) */}
      <section className="bg-surface py-32 rounded-[5rem] mx-4 md:mx-10 mb-40">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">Votre Roadmap vers la Souveraineté</h2>
            <p className="text-xl text-muted italic mt-4">L'installation de votre Lab Natif se déroule en trois phases claires.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {[
              {
                phase: "Phase 1",
                time: "Semaines 1-2",
                title: "Le Diagnostic de Capacité",
                desc: "Nous identifions vos 'fuites de valeur' et cartographions votre langage de conception unique.",
                deliverable: "Votre Schéma Directeur d'Infrastructure"
              },
              {
                phase: "Phase 2",
                time: "Semaines 3-8",
                title: "Le Build",
                desc: "Installation physique du Lab, configuration de votre OS digital et mise en place du Cockpit.",
                deliverable: "Votre Infrastructure S9 opérationnelle"
              },
              {
                phase: "Phase 3",
                time: "Semaines 9-12",
                title: "L’Activation",
                desc: "Nous pilotons avec vos équipes votre premier projet stratégique ('Sprint') pour roder la machine.",
                deliverable: "Une offre mise sur le marché en un temps record"
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-start group">
                <div className="md:w-48 shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted block">{step.time}</span>
                  <span className="text-2xl font-black text-black">{step.phase}</span>
                </div>
                <div className="flex-grow p-10 bg-white rounded-[2.5rem] border border-gray-100 group-hover:shadow-2xl transition-all">
                  <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                  <p className="text-muted italic mb-6">{step.desc}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface rounded-full text-[10px] font-bold uppercase tracking-widest">
                    <CheckCircle2 size={12} /> Livrable : {step.deliverable}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPARATIF ROI */}
      <section className="container mx-auto px-6 py-20 mb-40">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Pourquoi investir dans un Lab plutôt que de recruter ?</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="py-8 text-left text-[10px] font-bold uppercase tracking-widest text-muted w-1/4">Critère</th>
                <th className="py-8 text-left text-2xl font-bold tracking-tight w-1/3">Recrutement d'un Cadre Inno</th>
                <th className="py-8 text-left text-2xl font-bold tracking-tight text-black bg-surface rounded-t-3xl px-8">Installation Lab Natif (S9)</th>
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
            <h2 className="text-4xl font-bold tracking-tighter">Une question ?</h2>
            <div className="mt-8">
              <a href="mailto:meet.section9@gmail.com" className="text-sm font-bold uppercase tracking-widest underline underline-offset-8">Discuter de vos contraintes</a>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-12">
            {[
              {
                q: "Est-ce que ça demande beaucoup de place ?",
                a: "Le Lab Natif est modulaire. Il s'adapte à votre surface : d'un coin de bureau optimisé à un étage complet."
              },
              {
                q: "Mes équipes ne sont pas des 'créatifs', est-ce pour nous ?",
                a: "L'innovation n'est pas une question de talent artistique, c'est une question de processus. Le Lab Natif est conçu pour les profils techniques et opérationnels des PME."
              }
            ].map((faq, i) => (
              <div key={i} className="space-y-4">
                <div className="flex gap-4 items-center">
                  <HelpCircle size={20} className="text-muted" />
                  <h3 className="text-xl font-bold italic">"{faq.q}"</h3>
                </div>
                <p className="text-muted leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="container mx-auto px-6 py-20 pb-40">
        <div className="bg-black text-white rounded-[5rem] p-12 md:p-32 text-center relative overflow-hidden">
          <div className="relative z-10 space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight max-w-4xl mx-auto">
              Reprenez les commandes de votre croissance.
            </h2>
            <div className="flex flex-col items-center gap-8">
              <a 
                href="mailto:meet.section9@gmail.com" 
                className="group flex items-center gap-6 px-12 py-6 bg-white text-black rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform"
              >
                RÉSERVER MON DIAGNOSTIC D'INFRASTRUCTURE <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted">Diagnostic de 45 minutes</span>
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
