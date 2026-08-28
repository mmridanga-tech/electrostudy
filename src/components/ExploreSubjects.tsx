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
  Sparkles,
  Maximize2
} from 'lucide-react';
import { Language, SubjectItem } from '../types';
import { UI_TRANSLATIONS, SUBJECTS_DATA } from '../data/content';

interface ExploreSubjectsProps {
  currentLanguage: Language;
  onSelectSubject: (subjectId: string) => void;
  onOpenStudyTopic?: (topicId: string) => void;
}

export const ExploreSubjects: React.FC<ExploreSubjectsProps> = ({
  currentLanguage,
  onSelectSubject,
  onOpenStudyTopic
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

  const handleStartCourse = (subjectId: string) => {
    if (onOpenStudyTopic) {
      if (subjectId === 'basic-electrical' || subjectId === 'be-01') {
        onOpenStudyTopic('tp-charge');
        return;
      }
      if (subjectId === 'electrical-machines') {
        onOpenStudyTopic('ch6-transformer-fundamentals');
        return;
      }
      if (subjectId === 'power-systems') {
        onOpenStudyTopic('ps-tp1-generation-methods');
        return;
      }
      if (subjectId === 'electrical-measurements') {
        onOpenStudyTopic('ch3-fundamentals-measurement');
        return;
      }
      if (subjectId === 'network-theory' || subjectId === 'circuit-theory') {
        onOpenStudyTopic('ch4-ohms-law-applications');
        return;
      }
      // Fallback: open default course topic
      onOpenStudyTopic('tp-charge');
      return;
    }
    onSelectSubject(subjectId);
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
            const isDetailedAvailable = subject.id === 'basic-electrical' || subject.id === 'electrical-machines';

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

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 space-y-3 mt-auto">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
                      {subject.topicsCount} {t.keyTopics || 'Key Topics'}
                    </span>
                    <button
                      onClick={() => onSelectSubject(subject.id)}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                    >
                      {currentLanguage === 'bn' ? 'সিলেবাস দেখুন' : currentLanguage === 'hi' ? 'पाठ्यक्रम विवरण' : 'Syllabus Breakdown'}
                    </button>
                  </div>

                  {isDetailedAvailable ? (
                    <button
                      id={`btn-open-course-${subject.id}`}
                      onClick={() => handleStartCourse(subject.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4 text-cyan-200" />
                      <span>{currentLanguage === 'bn' ? 'বড় স্ক্রিনে কোর্স শুরু করুন' : currentLanguage === 'hi' ? 'फुलस्क्रीन कोर्स पोर्टल खोलें' : 'Open Full-Screen Course Portal'}</span>
                      <Maximize2 className="w-3.5 h-3.5 opacity-80 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  ) : (
                    <button
                      id={`btn-explore-subject-${subject.id}`}
                      onClick={() => onSelectSubject(subject.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>{t.exploreCardBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
