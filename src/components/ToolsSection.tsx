import React from 'react';
import { 
  Zap, 
  Activity, 
  Cpu, 
  Ruler, 
  TrendingDown, 
  Layers, 
  ArrowRight, 
  Calculator,
  Play
} from 'lucide-react';
import { Language, ToolItem } from '../types';
import { UI_TRANSLATIONS, TOOLS_DATA } from '../data/content';

interface ToolsSectionProps {
  currentLanguage: Language;
  onOpenToolModal: (tool: ToolItem) => void;
  onViewAllTools: () => void;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({
  currentLanguage,
  onOpenToolModal,
  onViewAllTools
}) => {
  const t = UI_TRANSLATIONS[currentLanguage];

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return Zap;
      case 'Activity': return Activity;
      case 'Cpu': return Cpu;
      case 'Ruler': return Ruler;
      case 'TrendingDown': return TrendingDown;
      case 'Layers': return Layers;
      default: return Calculator;
    }
  };

  return (
    <section id="tools-section" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden bg-circuit-grid">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800">
              <Calculator className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.calculatorTitle || 'Interactive Engineering Calculators'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-white tracking-tight">
              {t.toolsTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              {t.toolsSubtitle}
            </p>
          </div>

          <button
            id="btn-view-all-tools"
            onClick={onViewAllTools}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold shadow-lg shadow-cyan-600/30 transition-all self-start md:self-auto group"
          >
            <span>{t.viewAllTools}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS_DATA.map((tool: ToolItem) => {
            const Icon = getToolIcon(tool.icon);
            return (
              <div
                key={tool.id}
                id={`tool-card-${tool.id}`}
                onClick={() => onOpenToolModal(tool)}
                className="group relative bg-slate-950/90 hover:bg-slate-800/90 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center border border-cyan-800/60 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {tool.name[currentLanguage] || tool.name.en}
                  </h3>

                  <p className="text-xs text-slate-300 font-normal line-clamp-2 leading-relaxed mb-4">
                    {tool.description[currentLanguage] || tool.description.en}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto font-mono text-[11px]">
                  <span className="text-cyan-400/90 bg-cyan-950/60 px-2 py-1 rounded border border-cyan-900/60">
                    {tool.formula}
                  </span>
                  <span className="inline-flex items-center gap-1 text-cyan-400 group-hover:text-white font-sans font-bold text-xs">
                    <span>{t.tryCalculator || 'Try Calculator'}</span>
                    <Play className="w-3 h-3 fill-cyan-400 group-hover:fill-white" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
