import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Search, 
  Sun, 
  Moon, 
  Globe, 
  Menu, 
  X, 
  BookOpen, 
  FileText, 
  CheckSquare, 
  Wrench, 
  GraduationCap,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { Language, Theme } from '../types';
import { LANGUAGES, UI_TRANSLATIONS } from '../data/content';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  activeNav: string;
  onNavClick: (navId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  theme,
  onToggleTheme,
  onOpenSearch,
  activeNav,
  onNavClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = UI_TRANSLATIONS[currentLanguage];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.navHome, icon: Zap },
    { id: 'subjects', label: t.navSubjects, icon: BookOpen },
    { id: 'tools', label: t.navTools, icon: Wrench },
    { id: 'mcq', label: t.navMCQ, icon: CheckSquare }
  ];

  const currentLangObj = LANGUAGES.find(l => l.code === currentLanguage) || LANGUAGES[0];

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md shadow-slate-200/50 dark:shadow-cyan-950/20 border-b border-slate-200/80 dark:border-slate-800' 
          : 'bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
            {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <button 
              id="header-logo-button"
              onClick={() => onNavClick('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1"
              aria-label="ElectroStudy Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 group-hover:scale-105 transition-all duration-300">
                <Zap className="w-6 h-6 fill-cyan-100 text-white animate-pulse" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-900" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold font-display tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Electro<span className="text-cyan-600 dark:text-cyan-400">Study</span>
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                    FREE
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden lg:block font-medium">
                  {t.logoSubtext || 'Electrical Engineering Hub'}
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => onNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 font-semibold shadow-xs'
                      : 'text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400 dark:text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Trigger */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 rounded-lg transition-all text-sm border border-transparent hover:border-slate-200 dark:hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              title="Search subjects, formulas, tools"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="hidden xl:inline text-xs text-slate-500 dark:text-slate-400 font-normal">{t.searchLabel || 'Search (Cmd+K)'}</span>
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                id="header-language-toggle"
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
                aria-expanded={isLangDropdownOpen}
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{currentLangObj.nativeName}</span>
                <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsLangDropdownOpen(false)} 
                  />
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 py-1.5 z-20 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      {t.selectLanguage || 'Select Language'}
                    </div>
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        id={`header-lang-${lang.code}`}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between transition-colors ${
                          currentLanguage === lang.code
                            ? 'bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 font-bold'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-mono text-[10px] text-cyan-600 dark:text-cyan-400 font-bold border border-slate-200 dark:border-slate-700">
                            {lang.flagText}
                          </span>
                          <div className="flex flex-col">
                            <span className={`font-medium text-slate-900 dark:text-white font-${lang.code}`} lang={lang.code}>{lang.nativeName}</span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400">{lang.region}</span>
                          </div>
                        </div>
                        {currentLanguage === lang.code && (
                          <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              id="header-theme-toggle"
              onClick={onToggleTheme}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="header-mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-slate-800 dark:text-slate-100" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-3 py-1">
            <span>{t.navigationMenuTitle || 'Navigation Menu'}</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded"
              aria-label="Close Mobile Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => {
                  onNavClick(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 font-bold border border-cyan-200/60 dark:border-cyan-800'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between px-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{t.selectLanguage || 'Language'}:</span>
            <div className="flex gap-1.5">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  id={`mobile-lang-${l.code}`}
                  onClick={() => {
                    onLanguageChange(l.code);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors ${
                    currentLanguage === l.code
                      ? 'bg-cyan-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {l.nativeName}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
