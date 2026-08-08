import React from 'react';
import { Zap, ArrowRight, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/content';

interface CTAProps {
  currentLanguage: Language;
  onStartLearning: () => void;
}

export const CTA: React.FC<CTAProps> = ({ currentLanguage, onStartLearning }) => {
  const t = UI_TRANSLATIONS[currentLanguage];

  return (
    <section id="cta-section" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden bg-circuit-grid">
      
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 text-cyan-300 text-xs font-semibold border border-cyan-800 shadow-sm mx-auto">
          <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
          <span>{t.noCostFree || 'No Cost • No Limits • Free Forever'}</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight max-w-3xl mx-auto">
          {t.ctaTitle}
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
          {t.ctaSubtitle}
        </p>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-btn-start-learning"
            onClick={onStartLearning}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-extrabold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
          >
            <BookOpen className="w-5 h-5 text-slate-950" />
            <span>{t.startLearning}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Supporting Feature Bullet points */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300 font-medium border-t border-slate-800/80 max-w-xl mx-auto">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>{t.btechSyllabus || 'B.Tech / BE Syllabus'}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>{t.diplomaSyllabus || 'State Polytechnic Diploma'}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>{t.itiSyllabus || 'NCVT ITI Electrician'}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
