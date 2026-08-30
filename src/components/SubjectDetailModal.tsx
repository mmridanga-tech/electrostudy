import React, { useState } from 'react';
import { X, BookOpen, CheckCircle2, FileText, ChevronDown, ChevronRight, Zap, Play, Maximize2, ExternalLink } from 'lucide-react';
import { SubjectItem, Language, Lesson } from '../types';
import { UI_TRANSLATIONS } from '../data/content';
import { DETAILED_SUBJECTS } from '../data/learningData';
import { LessonViewer } from './LessonViewer';

interface SubjectDetailModalProps {
  subject: SubjectItem | null;
  onClose: () => void;
  currentLanguage: Language;
  onOpenStudyTopic?: (topicId: string) => void;
}

export const SubjectDetailModal: React.FC<SubjectDetailModalProps> = ({
  subject,
  onClose,
  currentLanguage,
  onOpenStudyTopic
}) => {
  const t = UI_TRANSLATIONS[currentLanguage];
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [expandedChapters, setExpandedChapters] = useState<Record<string, boolean>>({ 
    'ch-elec-fund': true, 
    'ch-ohms-circuits': true,
    'ch-electrical-machines': true,
    'em-ch1-transformers': true,
    'em-ch2-dc-generators': true,
    'em-ch3-dc-motors': true,
    'em-ch4-induction-motors': true,
    'em-ch5-synchronous-special': true,
    'ps-ch1-generation': true,
    'ps-ch2-transmission': true,
    'ps-ch3-distribution': true,
    'ps-ch4-faults': true,
    'ps-ch5-protection': true
  });

  if (!subject) return null;

  // Check if detailed subject architecture exists
  const detailedSubject = DETAILED_SUBJECTS.find(s => s.id === subject.id || s.slug === subject.id);

  const toggleChapter = (chId: string) => {
    setExpandedChapters(prev => ({ ...prev, [chId]: !prev[chId] }));
  };

  const handleOpenFullscreenSubject = (topicId?: string) => {
    if (onOpenStudyTopic) {
      const defaultTopic = detailedSubject?.chapters[0]?.topics[0]?.id || (subject.id === 'electrical-machines' ? 'ch6-transformer-fundamentals' : 'tp-charge');
      const targetTopic = topicId || defaultTopic;
      onOpenStudyTopic(targetTopic);
      onClose();
    }
  };

  const mockSyllabus = [
    { unit: 'Unit 1', title: 'Circuit Fundamentals & DC Networks', topics: 'Ohm\'s Law, Kirchhoff\'s Laws, Mesh & Nodal Analysis, Superposition Theorem' },
    { unit: 'Unit 2', title: 'Single Phase & Three Phase AC Circuits', topics: 'RMS & Average values, Phasors, Resonance, Power Factor Correction' },
    { unit: 'Unit 3', title: 'Magnetic Circuits & Transformers', topics: 'Electromagnetic Induction, Transformer Equivalent Circuit, Losses & Efficiency' },
    { unit: 'Unit 4', title: 'Electrical Machines & Safety Measures', topics: 'DC Motors, Induction Motors, Earthing, Circuit Breakers, Fuses & Safety' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className={`relative w-full ${activeLesson ? 'max-w-4xl' : 'max-w-3xl'} bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 animate-in zoom-in-95 duration-200 transition-all flex flex-col max-h-[90vh]`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shadow-md shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold font-display text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                {subject.name[currentLanguage] || subject.name.en}
              </h3>
              <span className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">
                {t.syllabusModules || 'Syllabus & Course Modules'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {detailedSubject && onOpenStudyTopic && (
              <button
                onClick={() => handleOpenFullscreenSubject(activeLesson ? activeLesson.topicId : undefined)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 hover:bg-cyan-200 dark:hover:bg-cyan-900 text-xs font-bold transition-all border border-cyan-300 dark:border-cyan-800"
                title="Open Fullscreen Course Portal"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{currentLanguage === 'bn' ? 'ফুলস্ক্রিন ভিউ' : currentLanguage === 'hi' ? 'फुलस्क्रीन व्यू' : 'Fullscreen Portal'}</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1">
          {activeLesson ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800">
                <span className="text-xs font-semibold text-cyan-900 dark:text-cyan-200">
                  {currentLanguage === 'bn' ? 'ছোট উইন্ডোতে পড়তে অসুবিধা হলে পুরো স্ক্রিনে খুলুন:' : currentLanguage === 'hi' ? 'छोटे विंडो के बजाय पूरे स्क्रीन पर पढ़ें:' : 'For the best reading experience, open in fullscreen mode:'}
                </span>
                <button
                  onClick={() => handleOpenFullscreenSubject(activeLesson.topicId)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-xs transition-all shrink-0"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{currentLanguage === 'bn' ? 'বড় স্ক্রিনে খুলুন' : currentLanguage === 'hi' ? 'फुलस्क्रीन में पढ़ें' : 'Open Fullscreen'}</span>
                </button>
              </div>

              <LessonViewer
                lesson={activeLesson}
                currentLanguage={currentLanguage}
                onBack={() => setActiveLesson(null)}
              />
            </div>
          ) : (
            <>
              {/* Fullscreen Portal Promo Banner */}
              {detailedSubject && onOpenStudyTopic && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 via-blue-600/10 to-indigo-600/10 dark:from-cyan-950/40 dark:via-blue-950/40 dark:to-indigo-950/40 border border-cyan-200 dark:border-cyan-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 dark:text-cyan-300">
                      <Zap className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{currentLanguage === 'bn' ? 'বইয়ের মতো ফুলস্ক্রিন রিডার মোড' : currentLanguage === 'hi' ? 'फुलस्क्रीन बुक रीडर मोड' : 'Dedicated Fullscreen Book Reader'}</span>
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {currentLanguage === 'bn' 
                        ? (detailedSubject.id === 'electrical-machines' 
                            ? 'বামপাশে ৫টি মডিউল সূচিপত্র ও ডানপাশে ২৪টি সম্পূর্ণ লেসন পড়ার সুবিধা।'
                            : 'বামপাশে চ্যাপ্টার সূচিপত্র ও ডানপাশে আরামদায়ক বড় স্ক্রিনে পড়ার সুবিধা।')
                        : currentLanguage === 'hi' 
                        ? (detailedSubject.id === 'electrical-machines'
                            ? 'साइडबार इंडेक्स और 24 संपूर्ण इलेक्ट्रिकल मशीन पाठों का अध्ययन करें।'
                            : 'साइडबार इंडेक्स और बड़े स्क्रीन पर आसान अध्ययन अनुभव।')
                        : `Browse all ${detailedSubject.chapters.length} learning modules & structured lessons comfortably.`}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOpenFullscreenSubject()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-all shrink-0 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{currentLanguage === 'bn' ? 'কোর্স পোর্টালে পড়ুন' : currentLanguage === 'hi' ? 'कोर्स पोर्टल में पढ़ें' : 'Open Full Course Hub'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {subject.description[currentLanguage] || subject.description.en}
              </p>

              {detailedSubject ? (
                /* Structured Chapters -> Topics Architecture */
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-cyan-500" />
                      <span>Chapters & Learning Modules</span>
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 font-bold">
                      {detailedSubject.chapters.length} Chapters
                    </span>
                  </div>

                  <div className="space-y-3">
                    {detailedSubject.chapters.map((ch) => {
                      const chTitle = ch.title[currentLanguage] || ch.title.en;
                      const isExpanded = expandedChapters[ch.id] !== false;
                      const firstTopicWithLesson = ch.topics.find(t => !!t.lesson) || ch.topics[0];

                      return (
                        <div key={ch.id} className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-900/50">
                          <div className="w-full px-4 py-3 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-800 flex items-center justify-between text-left transition-colors">
                            <button
                              onClick={() => toggleChapter(ch.id)}
                              className="flex-1 font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2 text-left"
                            >
                              <BookOpen className="w-4 h-4 text-cyan-500 shrink-0" />
                              <span className="truncate">{chTitle}</span>
                            </button>
                            
                            <div className="flex items-center gap-2">
                              {firstTopicWithLesson && onOpenStudyTopic && (
                                <button
                                  onClick={() => handleOpenFullscreenSubject(firstTopicWithLesson.id)}
                                  className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-600/10 hover:bg-cyan-600 text-cyan-700 dark:text-cyan-300 hover:text-white text-[11px] font-bold transition-colors"
                                  title="Study this chapter in fullscreen portal"
                                >
                                  <Play className="w-2.5 h-2.5 fill-current" />
                                  <span>{currentLanguage === 'bn' ? 'ফুলস্ক্রিন' : 'Read'}</span>
                                </button>
                              )}
                              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 shrink-0">
                                {ch.topics.length} Topics
                              </span>
                              <button onClick={() => toggleChapter(ch.id)} className="p-1">
                                {isExpanded ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
                              </button>
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="p-3 space-y-2 bg-white dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800">
                              {ch.topics.map((tp) => {
                                const tpTitle = tp.title[currentLanguage] || tp.title.en;
                                const hasLesson = !!tp.lesson;

                                return (
                                  <div
                                    key={tp.id}
                                    onClick={() => {
                                      if (hasLesson) {
                                        if (onOpenStudyTopic) {
                                          handleOpenFullscreenSubject(tp.id);
                                        } else {
                                          setActiveLesson(tp.lesson!);
                                        }
                                      }
                                    }}
                                    className={`p-3 rounded-lg border transition-all flex items-center justify-between ${
                                      hasLesson
                                        ? 'bg-cyan-50/40 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-800/80 hover:bg-cyan-100/60 dark:hover:bg-cyan-900/40 shadow-2xs cursor-pointer'
                                        : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 opacity-80 cursor-default'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5">
                                      <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                                        {tp.order}
                                      </span>
                                      <span className={`text-xs font-semibold ${hasLesson ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
                                        {tpTitle}
                                      </span>
                                    </div>

                                    {hasLesson ? (
                                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-600 text-white font-bold text-[11px] shadow-2xs group shrink-0">
                                        <Zap className="w-3 h-3 text-cyan-200" />
                                        <span>{currentLanguage === 'bn' ? 'লেসন পড়ুন' : currentLanguage === 'hi' ? 'पाठ पढ़ें' : 'Read Lesson'}</span>
                                        <Play className="w-2.5 h-2.5 fill-white" />
                                      </span>
                                    ) : (
                                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shrink-0">
                                        Syllabus Topic
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* Fallback for other subjects without detailed structured data */
                <div className="space-y-3">
                  <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-cyan-500" />
                    <span>{t.syllabusBreakdown || 'Syllabus Breakdown (B.Tech / Diploma Aligned)'}</span>
                  </h4>

                  <div className="space-y-2.5">
                    {mockSyllabus.map((unit, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                            {unit.unit}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-semibold">
                            {t.freeResource || 'Free Resource'}
                          </span>
                        </div>
                        <h5 className="font-bold text-sm text-slate-900 dark:text-white">
                          {unit.title}
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {unit.topics}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>AICTE & State Board Aligned • {t.phase1Notice || 'Phase 1 Educational Foundation'}</span>
          </span>

          <div className="flex items-center gap-2">
            {detailedSubject && onOpenStudyTopic && !activeLesson && (
              <button
                onClick={() => handleOpenFullscreenSubject()}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{currentLanguage === 'bn' ? 'ফুলস্ক্রিন পোর্টাল' : currentLanguage === 'hi' ? 'फुलस्क्रीन पोर्टल' : 'Open Fullscreen Portal'}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition-all"
            >
              {t.close}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

