import React from 'react';
import { BookOpen, FileCode, CheckSquare, Languages, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS, STATS_DATA } from '../data/content';

interface StatsProps {
  currentLanguage: Language;
}

export const Stats: React.FC<StatsProps> = ({ currentLanguage }) => {
  const t = UI_TRANSLATIONS[currentLanguage];

  const getStatIcon = (id: string) => {
    switch (id) {
      case 'stat-subjects': return BookOpen;
      case 'stat-resources': return FileCode;
      case 'stat-mcqs': return CheckSquare;
      case 'stat-languages': return Languages;
      default: return Sparkles;
    }
  };

  return (
    <section id="stats-section" className="py-10 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((stat) => {
            const Icon = getStatIcon(stat.id);
            const labelText = t[stat.keyLabel as keyof typeof t] || stat.keyLabel;
            return (
              <div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                className="group relative bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {t.verifiedBadge || 'Verified'}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                  {labelText}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
