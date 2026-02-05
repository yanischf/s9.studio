
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Share2, 
  Download, 
  ArrowRight,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { TOOLKIT_ITEMS, ICON_MAP } from '../constants';

type FilterType = 'Tous' | 'Cadre' | 'Vivant' | 'Collectif' | 'Autonomie' | 'Terrain';

const MetaDesignToolkit: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Tous');

  const filters: FilterType[] = ['Tous', 'Cadre', 'Vivant', 'Collectif', 'Autonomie', 'Terrain'];

  const filteredTools = useMemo(() => {
    if (activeFilter === 'Tous') return TOOLKIT_ITEMS;
    return TOOLKIT_ITEMS.filter(tool => tool.category === (activeFilter as any));
  }, [activeFilter]);

  return (
    <div className="pt-24 bg-surface dark:bg-black min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-6 pt-20 pb-32 border-b border-gray-100 dark:border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-4 space-y-8">
            <span className="px-4 py-1.5 border border-gray-200 dark:border-neutral-700 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] text-muted block w-fit">
              Ressources
            </span>
            <p className="text-xs text-[#8E9AAF] font-medium leading-relaxed max-w-xs uppercase tracking-widest">
              L'arsenal méthodologique du studio — Pensé pour la systémique.
            </p>
          </div>
          <div className="md:col-span-8 text-right">
            <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-balance mb-8">
              MetaDesign <span className="italic">ToolKit</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted font-light max-w-2xl ml-auto leading-relaxed italic">
              Explorez les outils que nous utilisons pour structurer les cadres de la création.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="sticky top-24 z-40 bg-surface/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-neutral-900">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted mr-4">Filtrer par :</span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeFilter === filter 
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg' 
                    : 'bg-white dark:bg-neutral-900 text-muted hover:text-black dark:hover:text-white border border-gray-100 dark:border-neutral-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TOOLS GRID */}
      <section className="container mx-auto px-6 py-20 min-h-[600px]">
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-2">
            <h2 className="font-display text-3xl font-bold tracking-tighter">Catalogue des ressources</h2>
            <p className="text-sm text-muted">{filteredTools.length} outil{filteredTools.length > 1 ? 's' : ''} disponible{filteredTools.length > 1 ? 's' : ''}</p>
          </div>
          <div className="text-[10px] font-bold text-muted uppercase tracking-widest">(01)</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool) => (
            <Link 
              key={tool.id} 
              to={`/toolkit/${tool.id}`}
              className="group bg-white dark:bg-neutral-950 border border-gray-100 dark:border-neutral-900 rounded-[2.5rem] p-8 md:p-10 hover:border-black dark:hover:border-white transition-all relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full bg-surface dark:bg-neutral-900 flex items-center justify-center text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                    {ICON_MAP[tool.icon]}
                  </div>
                  <div className="flex gap-2">
                    {tool.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-gray-50 dark:bg-neutral-900 text-muted rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-accent dark:text-gray-400 uppercase tracking-widest opacity-60">
                    {tool.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold tracking-tighter transition-all">{tool.title}</h3>
                  <p className="text-muted leading-relaxed text-sm line-clamp-3">{tool.objective}</p>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-50 dark:border-neutral-900 flex justify-between items-center relative z-10">
                <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted group-hover:text-black dark:group-hover:text-white transition-colors">
                  Consulter la fiche <ArrowRight size={14} />
                </span>
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center text-muted group-hover:text-black dark:group-hover:text-white transition-all">
                  <Eye size={16} />
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gray-50 dark:bg-neutral-900/50 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          ))}

          {filteredTools.length === 0 && (
            <div className="col-span-full py-20 text-center space-y-4">
              <p className="text-muted italic">Aucun outil ne correspond à cette catégorie pour le moment.</p>
              <button 
                onClick={() => setActiveFilter('Tous')}
                className="text-[10px] font-bold uppercase underline underline-offset-4"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. ACCESS SECTION */}
      <section className="container mx-auto px-6 py-32 mb-20">
        <div className="bg-black text-white rounded-[4rem] p-12 md:p-32 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck size={14} /> Accès réservé aux partenaires
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter leading-tight italic">
                Débloquez le plein potentiel de vos équipes.
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Le MetaDesign ToolKit complet est disponible pour nos clients et partenaires. Il comprend les versions éditables, les guides d'animation et un support dédié.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[3rem] space-y-8 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold tracking-tight">Obtenir un accès</h3>
              <p className="text-muted text-sm leading-relaxed">
                Vous travaillez déjà avec S9 ? Demandez vos codes d'accès. Vous souhaitez implémenter ces outils dans votre organisation ? Discutons-en.
              </p>
              <div className="flex flex-col gap-4">
                <Link to="/contact" className="group flex items-center justify-center gap-4 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform text-xs">
                  Demander un accès <ArrowRight size={16} />
                </Link>
                <button className="flex items-center justify-center gap-4 py-5 border border-white/20 text-white rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-xs">
                  Télécharger l'aperçu (PDF) <Download size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <span className="font-display text-[35vw] font-black tracking-tighter select-none">TOOLKIT</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetaDesignToolkit;
