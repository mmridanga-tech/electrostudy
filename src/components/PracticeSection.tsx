import React from 'react';
import { 
  CheckSquare, 
  Zap, 
  Cpu, 
  ShieldAlert, 
  ArrowRight, 
  Flame, 
  Layers, 
  HelpCircle,
  Award
} from 'lucide-react';
import { Language, PracticeItem } from '../types';
import { UI_TRANSLATIONS, PRACTICE_DATA } from '../data/content';

interface PracticeSectionProps {
  currentLanguage: Language;
  onStartPractice: (practiceId: string) => void;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({
  currentLanguage,
  onStartPractice
}) => {
  const t = UI_TRANSLATIONS[currentLanguage];

  const getPracticeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return Zap;
      case 'Cpu': return Cpu;
      case 'ShieldAlert': return ShieldAlert;
      default: return CheckSquare;
    }
  };

  const getDifficultyBadgeColor = (diff: string) => {
    switch (diff) {
      case 'Basic': return 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800';
      case 'Intermediate': return 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800';
      case 'Advanced': return 'bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <section id="practice-section" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 text-xs font-semibold border border-cyan-200 dark:border-cyan-800">
            <Award className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>{t.testPrepBadge || 'Exam & Competitive Test Prep'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            {t.practiceTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            {t.practiceSubtitle}
          </p>
        </div>

        {/* Practice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PRACTICE_DATA.map((item: PracticeItem) => {
            const Icon = getPracticeIcon(item.icon);
            return (
              <div
                key={item.id}
                id={`practice-card-${item.id}`}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-cyan-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center border border-cyan-200 dark:border-cyan-800 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${getDifficultyBadgeColor(item.difficulty)}`}>
                      {item.difficultyLabel[currentLanguage] || item.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                    {item.title[currentLanguage] || item.title.en}
                  </h3>

                  {/* Question Stats */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-4">
                    <HelpCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>{item.questionsCount} {t.questionsCountText} {t.questionsAvailable || 'Available'}</span>
                  </div>

                  {/* Topic Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.topics.map((topic, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  id={`btn-start-practice-${item.id}`}
                  onClick={() => onStartPractice(item.id)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 dark:bg-cyan-600 hover:bg-cyan-600 dark:hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-sm group/btn"
                >
                  <Flame className="w-4 h-4 text-amber-400 dark:text-cyan-200" />
                  <span>{t.startPractice}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
