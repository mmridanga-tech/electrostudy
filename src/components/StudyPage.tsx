import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ArrowLeft, 
  BookOpen, 
  Share2, 
  Link as LinkIcon, 
  Printer, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Sun, 
  Moon, 
  Globe, 
  CheckCircle2, 
  List, 
  Sparkles,
  FileText
} from 'lucide-react';
import { Language, Theme } from '../types';
import { getTopicContext } from '../data/learningData';
import { LessonViewer } from './LessonViewer';
import { UI_TRANSLATIONS } from '../data/content';

interface StudyPageProps {
  topicId: string;
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onToggleTheme: () => void;
  onClose: () => void;
  onSelectTopic: (topicId: string) => void;
}

export const StudyPage: React.FC<StudyPageProps> = ({
  topicId,
  currentLanguage,
  onLanguageChange,
  theme,
  onToggleTheme,
  onClose,
  onSelectTopic
}) => {
  const context = getTopicContext(topicId);
  const [isMobileContentsOpen, setIsMobileContentsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Close mobile contents drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileContentsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!context) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-cyan-900/50 text-cyan-400 flex items-center justify-center mb-4 border border-cyan-700">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold font-display mb-2">Lesson Context Not Found</h2>
        <p className="text-sm text-slate-400 max-w-md mb-6">
          The requested study topic could not be located in the current syllabus database.
        </p>
        <button
          onClick={onClose}
          className="px-5 py-2.5 rounded-xl bg-cyan-600 text-white font-bold text-xs shadow-lg hover:bg-cyan-500 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Dashboard</span>
        </button>
      </div>
    );
  }

  const { subject, chapter, topic, lesson, topicIndex, totalTopics, prevTopic, nextTopic } = context;

  const subjectTitle = subject.title[currentLanguage] || subject.title.en;
  const chapterTitle = chapter.title[currentLanguage] || chapter.title.en;
  const topicTitle = topic.title[currentLanguage] || topic.title.en;

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = `${topicTitle} - ElectroStudy`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: `Study ${topicTitle} (${chapterTitle}) on ElectroStudy!`,
          url: shareUrl,
        });
      } catch {
        // User cancelled or share not allowed
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setToastMessage('Lesson link copied to clipboard!');
      setTimeout(() => setToastMessage(null), 3000);
    } catch {
      setToastMessage('Link copying unavailable');
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#f8fafc] text-slate-900 dark:bg-[#090d16] dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 overflow-hidden">
      
      {/* PRINT STYLES inject */}
      <style>{`
        @media print {
          body, html, #root {
            background: white !important;
            color: black !important;
            overflow: visible !important;
          }
          .print-hidden, header, nav, .study-sidebar, .study-header, .study-toolbar, .study-bottom-nav, button {
            display: none !important;
          }
          .print-show {
            display: block !important;
          }
          .print-container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            background: white !important;
            color: black !important;
            box-shadow: none !important;
            border: none !important;
          }
          .print-container * {
            color: black !important;
            background: transparent !important;
            border-color: #cbd5e1 !important;
            box-shadow: none !important;
            text-shadow: none !important;
          }
        }
      `}</style>

      {/* TOP STUDY HEADER */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 px-4 py-3 flex items-center justify-between shrink-0 shadow-2xs print-hidden">
        
        {/* Left: Brand & Exit */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all"
            aria-label="Back to Subject"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Zap className="w-4 h-4" />
            </div>
            <span className="font-extrabold font-display text-sm tracking-tight text-slate-900 dark:text-white hidden sm:inline">
              ElectroStudy
            </span>
          </div>
        </div>

        {/* Center: Breadcrumb (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 max-w-xl truncate px-2">
          <span className="truncate">{subjectTitle}</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" />
          <span className="truncate">{chapterTitle}</span>
          <ChevronRight className="w-3.5 h-3.5 shrink-0 text-cyan-500" />
          <span className="font-bold text-slate-900 dark:text-slate-100 truncate">{topicTitle}</span>
        </div>

        {/* Right: Study Toolbar */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Language Selector */}
          <div className="relative flex items-center bg-slate-100 dark:bg-slate-800/90 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700">
            {(['en', 'hi', 'bn'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`px-2 py-1 rounded-md text-[11px] font-bold transition-all ${
                  currentLanguage === lang
                    ? 'bg-cyan-600 text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'hi' ? 'हिं' : 'বাংলা'}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            title={theme === 'dark' ? 'Switch to Light Study Mode' : 'Switch to Dark Study Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            title="Copy Lesson Link"
            aria-label="Copy Lesson Link"
          >
            <LinkIcon className="w-4 h-4" />
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            title="Share Lesson"
            aria-label="Share Lesson"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Print */}
          <button
            onClick={handlePrint}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            title="Print Lesson Notes"
            aria-label="Print Lesson Notes"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Close Fullscreen Study */}
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ml-1"
            title="Close Study Mode"
            aria-label="Close Study Mode"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* MOBILE CONTENTS BAR (Small screens only) */}
      <div className="lg:hidden bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 px-4 py-2 flex items-center justify-between shrink-0 print-hidden">
        <button
          onClick={() => setIsMobileContentsOpen(true)}
          className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 dark:text-cyan-300 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xs"
        >
          <List className="w-4 h-4 text-cyan-500" />
          <span>Chapter Contents ({topicIndex} of {totalTopics})</span>
        </button>

        <span className="text-[11px] font-mono font-semibold text-slate-500 dark:text-slate-400">
          {Math.round((topicIndex / totalTopics) * 100)}% Position
        </span>
      </div>

      {/* MAIN BODY AREA: SIDEBAR + CONTENT */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* DESKTOP SIDEBAR */}
        <aside className="study-sidebar hidden lg:flex flex-col w-72 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto print-hidden">
          
          {/* Chapter Title Header */}
          <div className="pb-4 border-b border-slate-200 dark:border-slate-800 mb-4 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Chapter Navigation</span>
            </span>
            <h3 className="font-bold font-display text-sm text-slate-900 dark:text-white leading-snug">
              {chapterTitle}
            </h3>
            
            {/* Progress indicator */}
            <div className="pt-2 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span>Topic Position</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">{topicIndex} of {totalTopics}</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-cyan-500 h-full transition-all duration-300"
                  style={{ width: `${(topicIndex / totalTopics) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Topics List */}
          <div className="space-y-1.5 flex-1">
            {chapter.topics.map((tp) => {
              const tpTitle = tp.title[currentLanguage] || tp.title.en;
              const isCurrent = tp.id === topic.id;
              const hasLesson = !!tp.lesson;

              return (
                <button
                  key={tp.id}
                  onClick={() => onSelectTopic(tp.id)}
                  className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-2.5 group ${
                    isCurrent
                      ? 'bg-cyan-600 text-white shadow-md font-bold ring-2 ring-cyan-400/50'
                      : hasLesson
                      ? 'bg-slate-100/70 dark:bg-slate-800/60 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-800'
                      : 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/40 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-md font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                    isCurrent
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    {tp.order}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold leading-snug truncate">
                      {tpTitle}
                    </div>

                    <div className="mt-0.5 flex items-center gap-1">
                      {hasLesson ? (
                        <span className={`text-[9px] font-bold font-mono uppercase px-1.5 py-0.2 rounded ${
                          isCurrent ? 'bg-white/20 text-cyan-100' : 'bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300'
                        }`}>
                          Interactive Lesson
                        </span>
                      ) : (
                        <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500">
                          Syllabus Topic
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 dark:text-slate-500 text-center font-mono">
            AICTE & State Diploma Syllabus Aligned
          </div>
        </aside>

        {/* MAIN SCROLLABLE CONTENT CANVAS */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8 print-container">
          
          <div className="max-w-3xl lg:max-w-4xl mx-auto space-y-8">
            
            {/* PRINT HEADER ONLY (hidden on screen) */}
            <div className="hidden print-show mb-6 pb-4 border-b-2 border-black">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-600">ElectroStudy — Engineering Study Notes</div>
              <h1 className="text-2xl font-black mt-1">{subjectTitle}</h1>
              <h2 className="text-lg font-bold text-slate-700">{chapterTitle} — {topicTitle}</h2>
            </div>

            {/* SCREEN TOPIC CARD HEADER */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-cyan-500" />
                  <span>{subjectTitle} • {chapterTitle}</span>
                </span>

                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Topic {topicIndex} of {totalTopics}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
                {topicTitle}
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Comprehensive engineering notes, formulas, step-by-step solved numericals, and exam practice questions formatted for maximum clarity.
              </p>
            </div>

            {/* LESSON ENGINE OR COMING SOON CARD */}
            {lesson ? (
              <LessonViewer
                lesson={lesson}
                currentLanguage={currentLanguage}
                onBack={onClose}
              />
            ) : (
              <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto border border-amber-200 dark:border-amber-800">
                  <Sparkles className="w-8 h-8" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                    Syllabus Topic • Content Coming Soon
                  </span>
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">
                    {topicTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Lesson notes, solved examples, and interactive visual aids for this topic are currently being compiled according to the AICTE model syllabus.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => onSelectTopic('tp-ohms-law')}
                    className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4 text-cyan-200" />
                    <span>Study Ohm's Law (Lesson 1)</span>
                  </button>

                  {prevTopic && (
                    <button
                      onClick={() => onSelectTopic(prevTopic.id)}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition-all flex items-center gap-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous Topic</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* BOTTOM CHAPTER NAVIGATION */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 print-hidden study-bottom-nav">
              {prevTopic ? (
                <button
                  onClick={() => onSelectTopic(prevTopic.id)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all shadow-2xs group max-w-[48%]"
                >
                  <ChevronLeft className="w-4 h-4 text-cyan-500 shrink-0 group-hover:-translate-x-0.5 transition-transform" />
                  <div className="text-left truncate">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Previous Topic</div>
                    <div className="truncate font-bold">{prevTopic.title[currentLanguage] || prevTopic.title.en}</div>
                  </div>
                </button>
              ) : (
                <div className="text-xs font-mono text-slate-400 italic">Start of Chapter</div>
              )}

              {nextTopic ? (
                <button
                  onClick={() => onSelectTopic(nextTopic.id)}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all shadow-md group max-w-[48%] ml-auto"
                >
                  <div className="text-right truncate">
                    <div className="text-[10px] font-mono text-cyan-200 uppercase">Next Topic</div>
                    <div className="truncate font-bold">{nextTopic.title[currentLanguage] || nextTopic.title.en}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ) : (
                <div className="text-xs font-mono text-slate-400 italic">End of Chapter</div>
              )}
            </div>

          </div>
        </main>
      </div>

      {/* MOBILE CONTENTS DRAWER OVERLAY */}
      {isMobileContentsOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex justify-start animate-in fade-in duration-200 print-hidden lg:hidden">
          <div 
            className="fixed inset-0" 
            onClick={() => setIsMobileContentsOpen(false)} 
          />

          <div className="relative w-80 max-w-[85vw] h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col p-4 shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                <BookOpen className="w-4 h-4 text-cyan-500" />
                <span>Chapter Contents</span>
              </div>
              <button
                onClick={() => setIsMobileContentsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-3 border-b border-slate-200 dark:border-slate-800 space-y-1">
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">{chapterTitle}</h4>
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400">
                <span>Progress: Topic {topicIndex} of {totalTopics}</span>
                <span>{Math.round((topicIndex / totalTopics) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full" style={{ width: `${(topicIndex / totalTopics) * 100}%` }} />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto py-3 space-y-1.5">
              {chapter.topics.map((tp) => {
                const tpTitle = tp.title[currentLanguage] || tp.title.en;
                const isCurrent = tp.id === topic.id;
                const hasLesson = !!tp.lesson;

                return (
                  <button
                    key={tp.id}
                    onClick={() => {
                      onSelectTopic(tp.id);
                      setIsMobileContentsOpen(false);
                    }}
                    className={`w-full p-2.5 rounded-xl text-left transition-all flex items-start gap-2.5 ${
                      isCurrent
                        ? 'bg-cyan-600 text-white font-bold'
                        : hasLesson
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-md font-mono text-[11px] font-bold flex items-center justify-center shrink-0 bg-slate-200 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 mt-0.5">
                      {tp.order}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold truncate">{tpTitle}</div>
                      {hasLesson && (
                        <span className="text-[9px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                          Interactive Lesson
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-bold shadow-xl border border-slate-700 dark:border-slate-300 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200 print-hidden">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
};
