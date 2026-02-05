
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  Wrench, 
  CalendarCheck,
  CheckCircle2,
  Lightbulb,
  Zap,
  Target
} from 'lucide-react';
import { TOOLKIT_ITEMS, ICON_MAP } from '../constants';

const ToolkitDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tool = TOOLKIT_ITEMS.find((t) => t.id === id);

  if (!tool) {
    return <Navigate to="/toolkit" replace />;
  }

  return (
    <div className="pt-24 bg-surface dark:bg-black min-h-screen">
      {/* 1. BACK BUTTON & HEADER */}
      <div className="container mx-auto px-6 pt-10">
        <Link 
          to="/toolkit" 
          className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-muted hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={16} /> Retour au toolkit
        </Link>
      </div>

      {/* 2. HERO SECTION */}
      <section className="container mx-auto px-6 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-4">
               <span className="px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
                {tool.category}
               </span>
               <div className="h-px w-12 bg-gray-200 dark:bg-neutral-800"></div>
               <span className="text-[10px] font-bold text-muted uppercase tracking-widest">S9 RESOURCE PROTOCOL</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance">
              {tool.title}.
            </h1>
            <p className="text-xl md:text-2xl text-muted font-light leading-relaxed max-w-3xl italic border-l-4 border-gray-100 dark:border-neutral-800 pl-8">
              {tool.objective}
            </p>
          </div>
          
          <div className="lg:col-span-4 bg-white dark:bg-neutral-950 p-10 rounded-[3rem] border border-gray-100 dark:border-neutral-900 shadow-xl space-y-10">
             <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface dark:bg-neutral-900 flex items-center justify-center">
                    <Clock size={18} className="text-muted" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted block">Temps estimé</span>
                    <p className="text-sm font-bold italic">{tool.estimatedTime}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface dark:bg-neutral-900 flex items-center justify-center">
                    <Wrench size={18} className="text-muted" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted block">Matériel nécessaire</span>
                    <ul className="text-xs font-medium space-y-1 mt-1 italic">
                      {tool.materials.map((m, i) => <li key={i}>• {m}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface dark:bg-neutral-900 flex items-center justify-center">
                    <CalendarCheck size={18} className="text-muted" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted block">Quand l’utiliser</span>
                    <ul className="text-xs font-medium space-y-1 mt-1 italic">
                      {tool.whenToUse.map((w, i) => <li key={i}>• {w}</li>)}
                    </ul>
                  </div>
                </div>
             </div>
             
             <button className="w-full py-5 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-4">
                Télécharger le canevas <ArrowRight size={16} />
             </button>
          </div>
        </div>
      </section>

      {/* 3. CORE CONTENT GRID */}
      <section className="container mx-auto px-6 py-20 border-t border-gray-100 dark:border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Column: What it allows / Expected Results */}
          <div className="lg:col-span-4 space-y-20">
            <div className="space-y-10">
              <h3 className="text-2xl font-bold tracking-tight border-b border-gray-100 dark:border-neutral-900 pb-4">Ce qu’elle permet de faire</h3>
              <ul className="space-y-6">
                {tool.whatItAllows.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 size={20} className="shrink-0 text-black dark:text-white" />
                    <p className="text-sm text-muted leading-relaxed italic">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h3 className="text-2xl font-bold tracking-tight border-b border-gray-100 dark:border-neutral-900 pb-4">Résultat attendu</h3>
              <ul className="space-y-6">
                {tool.expectedResult.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <Target size={20} className="shrink-0 text-black dark:text-white" />
                    <p className="text-sm text-muted leading-relaxed italic">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Detailed Steps */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-4xl font-bold tracking-tighter">Étapes détaillées</h2>
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Protocol — v1.0</span>
            </div>
            
            <div className="space-y-4">
              {tool.steps.map((step, idx) => (
                <div key={idx} className="group flex gap-8 p-10 bg-white dark:bg-neutral-950 rounded-[2.5rem] border border-gray-100 dark:border-neutral-900 hover:border-black dark:hover:border-white transition-all">
                  <div className="shrink-0 text-4xl font-black text-gray-100 dark:text-neutral-900 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {idx + 1}.
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold tracking-tight">{step.title}</h4>
                    <p className="text-muted leading-relaxed text-sm italic">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ADVICE & CASE STUDIES */}
      <section className="container mx-auto px-6 py-32 bg-surface dark:bg-neutral-950 rounded-[4rem] mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8 bg-white dark:bg-black p-12 rounded-[3rem] border border-gray-100 dark:border-neutral-900">
            <div className="w-12 h-12 rounded-full bg-surface dark:bg-neutral-900 flex items-center justify-center">
              <Lightbulb size={24} className="text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold tracking-tighter">Astuces & Variantes</h3>
            <ul className="space-y-4">
              {tool.tips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted italic">
                  <span>—</span> {tip}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8 bg-black text-white p-12 rounded-[3rem] relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold tracking-tighter">Exemples / Cas d’usage</h3>
            <div className="space-y-6">
              {tool.useCases.map((uc, i) => (
                <p className="text-sm text-gray-400 leading-relaxed border-l border-white/20 pl-6 italic" key={i}>
                  {uc}
                </p>
              ))}
            </div>
            <div className="absolute top-10 right-10 opacity-10 font-black text-4xl italic">S9 CASE</div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="container mx-auto px-6 py-20 pb-40 text-center">
        <h3 className="text-2xl font-bold mb-12">Besoin d'un accompagnement pour animer ce protocole ?</h3>
        <Link 
          to="/contact" 
          className="group inline-flex items-center gap-6 px-12 py-6 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform"
        >
          Discuter avec le studio <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>
    </div>
  );
};

export default ToolkitDetail;
