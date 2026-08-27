import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExploreSubjects } from './components/ExploreSubjects';
import { ToolsSection } from './components/ToolsSection';
import { PracticeSection } from './components/PracticeSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { QuickToolModal } from './components/QuickToolModal';
import { SubjectDetailModal } from './components/SubjectDetailModal';
import { StudyPage } from './components/StudyPage';
import { Language, Theme, ToolItem, SubjectItem } from './types';
import { SUBJECTS_DATA, TOOLS_DATA } from './data/content';
import { getTopicContext } from './data/learningData';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('light');
  const [activeNav, setActiveNav] = useState<string>('home');

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [activeToolModal, setActiveToolModal] = useState<ToolItem | null>(null);
  const [activeSubjectModal, setActiveSubjectModal] = useState<SubjectItem | null>(null);
  const [activeStudyTopicId, setActiveStudyTopicId] = useState<string | null>(null);

  // Synchronize document language attributes
  useEffect(() => {
    document.documentElement.setAttribute('lang', currentLanguage);
    document.documentElement.setAttribute('data-lang', currentLanguage);
  }, [currentLanguage]);

  // Hash route change listener for direct topic addressability
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && (hash.startsWith('#study/') || hash.startsWith('#/study/') || hash.startsWith('#study?'))) {
        const parts = hash.split('/');
        const rawTopicId = parts[parts.length - 1].replace('?topic=', '');
        if (rawTopicId) {
          const ctx = getTopicContext(rawTopicId);
          if (ctx && ctx.lesson) {
            setActiveSubjectModal(null);
            setActiveStudyTopicId(ctx.topic.id);
          }
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Initialize theme from preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('electrostudy_theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Default light mode as specified in guidelines
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Synchronize document language and typography attributes
  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.setAttribute('data-lang', currentLanguage);
    document.documentElement.classList.remove('lang-en', 'lang-hi', 'lang-bn');
    document.documentElement.classList.add(`lang-${currentLanguage}`);
  }, [currentLanguage]);

  // Synchronize study-print-active body class for print isolation
  useEffect(() => {
    if (activeStudyTopicId) {
      document.body.classList.add('study-print-active');
    } else {
      document.body.classList.remove('study-print-active');
    }
    return () => {
      document.body.classList.remove('study-print-active');
    };
  }, [activeStudyTopicId]);

  // Keyboard shortcut for Cmd+K or / search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('electrostudy_theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const scrollToSection = (sectionId: string) => {
    if (activeStudyTopicId) {
      setActiveStudyTopicId(null);
      if (window.location.hash.startsWith('#study')) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
    setActiveNav(sectionId);
    let elId = '';
    switch (sectionId) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      case 'subjects':
      case 'notes':
        elId = 'subjects-section';
        break;
      case 'tools':
        elId = 'tools-section';
        break;
      case 'mcq':
      case 'exams':
      case 'practice':
        elId = 'practice-section';
        break;
      default:
        elId = 'hero-section';
    }

    setTimeout(() => {
      const element = document.getElementById(elId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Scrollspy: update activeNav as user scrolls through sections
  useEffect(() => {
    if (activeStudyTopicId) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = [
        { id: 'home', el: document.getElementById('hero-section') },
        { id: 'subjects', el: document.getElementById('subjects-section') },
        { id: 'tools', el: document.getElementById('tools-section') },
        { id: 'mcq', el: document.getElementById('practice-section') }
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.el && sec.el.offsetTop <= scrollPos) {
          setActiveNav(sec.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeStudyTopicId]);

  const handleSelectSubject = (subjectId: string) => {
    const subject = SUBJECTS_DATA.find(s => s.id === subjectId) || SUBJECTS_DATA[0];
    setActiveSubjectModal(subject);
  };

  const handleSelectTool = (toolId: string) => {
    const tool = TOOLS_DATA.find(t => t.id === toolId) || TOOLS_DATA[0];
    setActiveToolModal(tool);
  };

  const handleSelectPractice = (practiceId: string) => {
    if (practiceId === 'practice-basic-concepts') {
      handleOpenStudyTopic('ch1-charge-current-voltage');
    } else if (practiceId === 'practice-circuits') {
      handleOpenStudyTopic('ch2-ohms-law-resistance');
    } else if (practiceId === 'practice-safety') {
      const subject = SUBJECTS_DATA.find(s => s.id === 'basic-electrical') || SUBJECTS_DATA[0];
      setActiveSubjectModal(subject);
    } else {
      const practiceSection = document.getElementById('practice-section');
      if (practiceSection) {
        practiceSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenStudyTopic = (topicId: string) => {
    const ctx = getTopicContext(topicId);
    if (ctx) {
      setActiveSubjectModal(null);
      setActiveStudyTopicId(topicId);
      window.location.hash = `#study/${topicId}`;
    }
  };

  const handleCloseStudyTopic = () => {
    setActiveStudyTopicId(null);
    if (window.location.hash.startsWith('#study')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 ${activeStudyTopicId ? 'study-print-active' : ''}`}>
      
      {/* FULL SCREEN STUDY PAGE REDESIGN */}
      {activeStudyTopicId && (
        <StudyPage
          topicId={activeStudyTopicId}
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onClose={handleCloseStudyTopic}
          onSelectTopic={handleOpenStudyTopic}
        />
      )}
      
      {/* Underlying Home Page Content Container - completely hidden from print flow when StudyPage is active */}
      <div className={`home-page-container flex-grow flex flex-col ${activeStudyTopicId ? 'study-print-hidden print:hidden' : ''}`}>
        
        {/* Sticky Header */}
        <Header
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onOpenSearch={() => setIsSearchOpen(true)}
          activeNav={activeNav}
          onNavClick={scrollToSection}
        />

        {/* Main Page Layout */}
        <main className="flex-grow">
          
          {/* Hero Section */}
          <Hero
            currentLanguage={currentLanguage}
            onStartLearning={() => scrollToSection('subjects')}
            onExploreTools={() => scrollToSection('tools')}
          />

          {/* Explore Electrical Engineering Section */}
          <ExploreSubjects
            currentLanguage={currentLanguage}
            onSelectSubject={handleSelectSubject}
            onOpenStudyTopic={handleOpenStudyTopic}
          />

          {/* Electrical Tools Section */}
          <ToolsSection
            currentLanguage={currentLanguage}
            onOpenToolModal={(tool) => setActiveToolModal(tool)}
            onViewAllTools={() => scrollToSection('tools')}
          />

          {/* MCQ / Practice Section */}
          <PracticeSection
            currentLanguage={currentLanguage}
            onStartPractice={(practiceId) => handleSelectPractice(practiceId)}
          />

        </main>

        {/* Footer */}
        <Footer
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          onNavClick={scrollToSection}
        />

        {/* Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          currentLanguage={currentLanguage}
          onSelectSubject={handleSelectSubject}
          onSelectTool={handleSelectTool}
          onSelectPractice={handleSelectPractice}
        />

        {/* Quick Calculator Tool Modal */}
        <QuickToolModal
          tool={activeToolModal}
          onClose={() => setActiveToolModal(null)}
          currentLanguage={currentLanguage}
        />

        {/* Subject Detail / Syllabus Breakdown Modal */}
        <SubjectDetailModal
          subject={activeSubjectModal}
          onClose={() => setActiveSubjectModal(null)}
          currentLanguage={currentLanguage}
          onOpenStudyTopic={handleOpenStudyTopic}
        />

      </div>

    </div>
  );
}
