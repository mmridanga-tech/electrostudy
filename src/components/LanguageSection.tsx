import React from 'react';
import { Globe, CheckCircle2, Sparkles, Languages, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/content';

interface LanguageSectionProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export const LanguageSection: React.FC<LanguageSectionProps> = ({
  currentLanguage,
  onLanguageChange
}) => {
  const t = UI_TRANSLATIONS[currentLanguage];

  return (
    <section id="language-section" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 text-xs font-semibold border border-cyan-200 dark:border-cyan-800">
            <Globe className="w-3.5 h-3.5 text-cyan-500" />
            <span>{t.multilingualHubBadge || 'Multilingual Engineering Hub'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            {t.languageTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            {t.languageSubtitle}
          </p>
        </div>

        {/* 3 Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {LANGUAGES.map((lang) => {
            const isSelected = currentLanguage === lang.code;
            return (
              <div
                key={lang.code}
                id={`lang-card-${lang.code}`}
                onClick={() => onLanguageChange(lang.code)}
                className={`group relative rounded-2xl p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-cyan-50/90 to-white dark:from-cyan-950/80 dark:to-slate-900 border-cyan-500 ring-2 ring-cyan-500/30 shadow-lg'
                    : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-700 hover:bg-white dark:hover:bg-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-extrabold text-base border ${
                      isSelected
                        ? 'bg-cyan-600 text-white border-cyan-500'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}>
                      {lang.flagText}
                    </span>

                    {isSelected && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-950 px-2.5 py-1 rounded-full border border-cyan-200 dark:border-cyan-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                        <span>{t.activeLanguage || 'Active Language'}</span>
                      </span>
                    )}
                  </div>

                  <h3 className={`text-2xl font-bold font-display text-slate-900 dark:text-white mb-1 font-${lang.code}`} lang={lang.code}>
                    {lang.nativeName}
                  </h3>
                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 block mb-3">
                    {lang.name} ({lang.region})
                  </span>

                  <p className={`text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal font-${lang.code}`} lang={lang.code}>
                    {lang.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold">
                  <span className={isSelected ? 'text-cyan-700 dark:text-cyan-300' : 'text-slate-600 dark:text-slate-400'}>
                    {isSelected ? (t.currentlySelected || 'Currently Selected') : (t.clickToSwitch || 'Click to Switch')}
                  </span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400 group-hover:translate-x-1'}`} />
                </div>

              </div>
            );
          })}
        </div>

        {/* Message Notice */}
        <div className="p-4 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200/80 dark:border-cyan-800/80 text-center text-xs text-slate-700 dark:text-slate-300 font-medium max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
          <span>{t.languageBannerText}</span>
        </div>

      </div>
    </section>
  );
};
