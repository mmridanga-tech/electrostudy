import React from 'react';
import { 
  Zap, 
  Cpu, 
  Activity, 
  Gauge, 
  SlidersHorizontal, 
  Radio, 
  ArrowRight, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';
import { Language, SubjectItem } from '../types';
import { UI_TRANSLATIONS, SUBJECTS_DATA } from '../data/content';

interface ExploreSubjectsProps {
  currentLanguage: Language;
  onSelectSubject: (subjectId: string) => void;
}

export const ExploreSubjects: React.FC<ExploreSubjectsProps> = ({
  currentLanguage,
  onSelectSubject
}) => {
  const t = UI_TRANSLATIONS[currentLanguage];

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return Zap;
      case 'Cpu': return Cpu;
      case 'Activity': return Activity;
      case 'Gauge': return Gauge;
      case 'SlidersHorizontal': return SlidersHorizontal;
      case 'Radio': return Radio;
      default: return BookOpen;
    }
  };

  return (
    <section id="subjects-section" className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 text-xs font-semibold border border-cyan-200 dark:border-cyan-800">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>{t.comprehensiveSyllabus || 'Comprehensive Syllabus'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            {t.exploreTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            {t.exploreSubtitle}
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SUBJECTS_DATA.map((subject: SubjectItem) => {
            const Icon = getSubjectIcon(subject.icon);
            return (
              <div
                key={subject.id}
                id={`subject-card-${subject.id}`}
                className="group relative bg-slate-50 dark:bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500 dark:hover:border-cyan-500 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${subject.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {subject.badge && (
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                        {subject.badge}
                      </span>
                    )}
                  </div>

                  {/* Subject Title */}
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                    {subject.name[currentLanguage] || subject.name.en}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-6 font-normal">
                    {subject.description[currentLanguage] || subject.description.en}
                  </p>
                </div>

                {/* Footer with topic count & arrow */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                    {subject.topicsCount} {t.keyTopics || 'Key Topics'}
                  </span>
                  
                  <button
                    id={`btn-explore-subject-${subject.id}`}
                    onClick={() => onSelectSubject(subject.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors"
                  >
                    <span>{t.exploreCardBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
