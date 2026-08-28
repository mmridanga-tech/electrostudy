import React, { useEffect, useState } from 'react';
import { RotateCcw, Info, Zap } from 'lucide-react';
import { Language } from '../../types';

export interface MultilingualString {
  en: string;
  hi?: string;
  bn?: string;
  [key: string]: string | undefined;
}

interface InteractiveSimulationCardProps {
  currentLanguage: Language;
  title: string | MultilingualString;
  subtitle?: string | MultilingualString;
  description?: string | MultilingualString;
  badge?: string;
  onReset?: () => void;
  resetLabel?: string;
  children: React.ReactNode;
  calloutTitle?: string | MultilingualString;
  calloutText?: string | MultilingualString;
  formulaText?: string;
  extraHeaderActions?: React.ReactNode;
}

const COMMON_STRINGS = {
  en: {
    reset: 'Reset',
    reducedMotionNotice: 'Reduced motion active — dynamic animations paused.',
  },
  hi: {
    reset: 'रीसेट',
    reducedMotionNotice: 'रिड्यूस्ड मोशन सक्रिय है — गति एनिमेटेड रोक दी गई है।',
  },
  bn: {
    reset: 'রিসেট',
    reducedMotionNotice: 'রিডিউসড মোশন সক্রিয় — অ্যানিমেশন স্থগিত রাখা হয়েছে।',
  }
};

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
}

export const InteractiveSimulationCard: React.FC<InteractiveSimulationCardProps> = ({
  currentLanguage,
  title,
  subtitle,
  description,
  badge,
  onReset,
  resetLabel,
  children,
  calloutTitle,
  calloutText,
  formulaText,
  extraHeaderActions,
}) => {
  const t = COMMON_STRINGS[currentLanguage] || COMMON_STRINGS.en;
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  const resolveText = (val: string | MultilingualString | undefined): string => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[currentLanguage] || val.en || Object.values(val)[0] || '';
  };

  const displayTitle = resolveText(title);
  const displaySubtitle = resolveText(subtitle || description);
  const displayCalloutTitle = resolveText(calloutTitle);
  const displayCalloutText = resolveText(calloutText);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 text-white space-y-5 shadow-xl print-avoid-break">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Zap className="w-5 h-5 text-cyan-400 shrink-0" />
            <h3 className="text-base sm:text-lg font-extrabold font-display tracking-tight text-white">
              {displayTitle}
            </h3>
            {badge && (
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                {badge}
              </span>
            )}
          </div>
          {displaySubtitle && (
            <p className="text-xs text-slate-400">
              {displaySubtitle}
            </p>
          )}
        </div>

        {/* Controls / Header Actions */}
        <div className="flex items-center gap-2 flex-wrap print-hidden">
          {extraHeaderActions}
          {onReset && (
            <button
              onClick={onReset}
              className="px-2.5 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-800 text-xs font-bold text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label={resetLabel || t.reset}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{resetLabel || t.reset}</span>
            </button>
          )}
        </div>
      </div>

      {/* Reduced Motion Notice */}
      {prefersReducedMotion && (
        <div className="p-2.5 rounded-lg bg-amber-950/60 border border-amber-800/60 text-amber-300 text-xs flex items-center gap-2">
          <Info className="w-4 h-4 shrink-0 text-amber-400" />
          <span>{t.reducedMotionNotice}</span>
        </div>
      )}

      {/* Body Content */}
      <div className="space-y-5">
        {children}
      </div>

      {/* Educational Callout Footer */}
      {(displayCalloutText || formulaText) && (
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          {formulaText && (
            <div className="font-mono text-xs sm:text-sm text-cyan-300 font-bold bg-cyan-950/50 p-2.5 rounded-lg border border-cyan-800/60">
              {formulaText}
            </div>
          )}
          {displayCalloutText && (
            <div className="text-xs text-slate-300 leading-relaxed font-sans">
              {displayCalloutTitle && <strong className="text-amber-400 mr-1.5">{displayCalloutTitle}:</strong>}
              <span>{displayCalloutText}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
