import React from 'react';
import { Zap, BookOpen, FileText, CheckSquare, Wrench, GraduationCap, Info, Heart, Shield, Globe, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/content';

interface FooterProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onNavClick: (navId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLanguage,
  onLanguageChange,
  onNavClick
}) => {
  const t = UI_TRANSLATIONS[currentLanguage];

  const quickLinks = [
    { id: 'home', label: t.navHome, icon: Zap },
    { id: 'subjects', label: t.navSubjects, icon: BookOpen },
    { id: 'tools', label: t.navTools, icon: Wrench },
    { id: 'mcq', label: t.navMCQ, icon: CheckSquare }
  ];

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-md">
                <Zap className="w-5 h-5 fill-cyan-100" />
              </div>
              <span className="text-xl font-bold font-display text-white tracking-tight">
                Electro<span className="text-cyan-400">Study</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              {t.footerTagline}
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <div className="font-semibold text-cyan-400 mb-0.5">{t.targetAudiences || 'Target Audiences'}</div>
              <p className="text-[11px] text-slate-400">
                • {t.btechSyllabus || 'B.Tech / BE Electrical Engineering'}<br />
                • {t.diplomaSyllabus || 'Diploma in Electrical Engineering'}<br />
                • {t.itiSyllabus || 'ITI Electrician & Wireman Trade'}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-200">
              {t.quickNavigation || 'Quick Navigation'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.id}>
                    <button
                      id={`footer-link-${link.id}`}
                      onClick={() => onNavClick(link.id)}
                      className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors py-0.5"
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-500/80" />
                      <span>{link.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Languages */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-200">
              {t.supportedLanguages || 'Supported Languages'}
            </h4>
            <div className="space-y-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  id={`footer-lang-${lang.code}`}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`w-full text-left p-2.5 rounded-lg border flex items-center justify-between transition-all ${
                    currentLanguage === lang.code
                      ? 'bg-cyan-950/80 border-cyan-700 text-cyan-300 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs">{lang.nativeName} ({lang.name})</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 uppercase">{lang.code}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Platform Values */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-200">
              {t.platformCommitment || 'Platform Commitment'}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.freeAccessTitle || '100% Free Access'}</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  {t.freeAccessDesc || 'All study material, notes, formulas and calculators are free without mandatory login or subscription.'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>{t.footerCopyright}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 font-semibold text-[11px]">
              {t.footerBadge}
            </span>

            <button
              id="footer-back-to-top-btn"
              onClick={() => onNavClick('home')}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-700 transition-all text-[11px] font-medium"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
