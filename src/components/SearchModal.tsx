import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Wrench, CheckSquare, Zap, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { SUBJECTS_DATA, TOOLS_DATA, PRACTICE_DATA, UI_TRANSLATIONS } from '../data/content';
import { DETAILED_SUBJECTS } from '../data/learningData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
  onSelectSubject: (id: string) => void;
  onSelectTool: (id: string) => void;
  onSelectPractice: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  onSelectSubject,
  onSelectTool,
  onSelectPractice
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const t = UI_TRANSLATIONS[currentLanguage];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const lowerQuery = query.toLowerCase().trim();

  const filteredSubjects = SUBJECTS_DATA.filter(s => {
    const matchBase = s.name[currentLanguage]?.toLowerCase().includes(lowerQuery) ||
      s.name.en.toLowerCase().includes(lowerQuery) ||
      s.description[currentLanguage]?.toLowerCase().includes(lowerQuery);
    if (matchBase) return true;
    const detailed = DETAILED_SUBJECTS.find(ds => ds.id === s.id || ds.slug === s.id);
    if (detailed) {
      return detailed.chapters.some(ch => 
        ch.title.en.toLowerCase().includes(lowerQuery) ||
        (ch.title.hi && ch.title.hi.toLowerCase().includes(lowerQuery)) ||
        (ch.title.bn && ch.title.bn.toLowerCase().includes(lowerQuery)) ||
        ch.topics.some(tp => 
          tp.title.en.toLowerCase().includes(lowerQuery) ||
          (tp.title.hi && tp.title.hi.toLowerCase().includes(lowerQuery)) ||
          (tp.title.bn && tp.title.bn.toLowerCase().includes(lowerQuery))
        )
      );
    }
    return false;
  });

  const filteredTools = TOOLS_DATA.filter(t => 
    t.name[currentLanguage]?.toLowerCase().includes(lowerQuery) ||
    t.name.en.toLowerCase().includes(lowerQuery) ||
    t.formula.toLowerCase().includes(lowerQuery)
  );

  const filteredMCQs = PRACTICE_DATA.filter(p =>
    p.title[currentLanguage]?.toLowerCase().includes(lowerQuery) ||
    p.title.en.toLowerCase().includes(lowerQuery) ||
    p.topics.some(tp => tp.toLowerCase().includes(lowerQuery))
  );

  const hasResults = filteredSubjects.length > 0 || filteredTools.length > 0 || filteredMCQs.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80">
          <Search className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-200 dark:bg-slate-800 rounded-md"
          >
            Esc
          </button>
        </div>

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5 divide-y divide-slate-100 dark:divide-slate-800">
          
          {!query && (
            <div className="text-center py-8 text-slate-400 text-xs">
              <Zap className="w-8 h-8 text-cyan-500 mx-auto mb-2 opacity-60 animate-bounce" />
              <p className="font-medium text-slate-600 dark:text-slate-300">{t.typeToSearch || 'Type to search across subjects, formulas, MCQs, and electrical tools'}</p>
              <p className="text-[11px] text-slate-400 mt-1">{t.tryKeywords || 'Try keywords like: "Ohm", "Transformer", "Motor", "Cable", "Power"'}</p>
            </div>
          )}

          {query && !hasResults && (
            <div className="text-center py-8 text-slate-400 text-sm">
              No study materials found for "<span className="text-cyan-600 font-semibold">{query}</span>"
            </div>
          )}

          {/* Subjects Matches */}
          {filteredSubjects.length > 0 && (
            <div className="pt-2">
              <div className="text-[11px] font-bold font-display uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-500" />
                <span>{t.statsSubjectsLabel || 'Subjects'} ({filteredSubjects.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredSubjects.map(subject => (
                  <button
                    key={subject.id}
                    onClick={() => {
                      onSelectSubject(subject.id);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-cyan-50 dark:hover:bg-slate-800 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                        {subject.name[currentLanguage] || subject.name.en}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {subject.description[currentLanguage] || subject.description.en}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tools Matches */}
          {filteredTools.length > 0 && (
            <div className="pt-3">
              <div className="text-[11px] font-bold font-display uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-cyan-500" />
                <span>{t.calculatorsAndTools || 'Calculators & Tools'} ({filteredTools.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredTools.map(tool => (
                  <button
                    key={tool.id}
                    onClick={() => {
                      onSelectTool(tool.id);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-cyan-50 dark:hover:bg-slate-800 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                        {tool.name[currentLanguage] || tool.name.en}
                      </div>
                      <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                        Formula: {tool.formula}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* MCQ Matches */}
          {filteredMCQs.length > 0 && (
            <div className="pt-3">
              <div className="text-[11px] font-bold font-display uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <CheckSquare className="w-3.5 h-3.5 text-cyan-500" />
                <span>{t.mcqsAndPractice || 'MCQs & Practice'} ({filteredMCQs.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredMCQs.map(mcq => (
                  <button
                    key={mcq.id}
                    onClick={() => {
                      onSelectPractice(mcq.id);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-cyan-50 dark:hover:bg-slate-800 flex items-center justify-between group transition-colors"
                  >
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                        {mcq.title[currentLanguage] || mcq.title.en}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {mcq.questionsCount} Questions • {mcq.difficulty} Level
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
