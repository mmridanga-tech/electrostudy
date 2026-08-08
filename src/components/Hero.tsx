import React, { useState } from 'react';
import { 
  Zap, 
  ArrowRight, 
  Wrench, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Gauge, 
  Radio,
  BookOpen
} from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/content';

interface HeroProps {
  currentLanguage: Language;
  onStartLearning: () => void;
  onExploreTools: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLanguage,
  onStartLearning,
  onExploreTools
}) => {
  const t = UI_TRANSLATIONS[currentLanguage];
  const [activeNode, setActiveNode] = useState<'A' | 'B' | 'C'>('A');

  return (
    <section id="hero-section" className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-circuit-grid">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/90 dark:bg-cyan-950/90 border border-cyan-200 dark:border-cyan-800/80 text-cyan-800 dark:text-cyan-300 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white leading-[1.15]">
              {t.heroHeadingPrefix}{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 dark:from-cyan-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                {t.heroHeadingSuffix}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
              {t.heroSubtitle}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
              <button
                id="hero-btn-start-learning"
                onClick={onStartLearning}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 group"
              >
                <BookOpen className="w-5 h-5 text-cyan-100" />
                <span>{t.startLearning}</span>
                <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-btn-explore-tools"
                onClick={onExploreTools}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-base border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-300 dark:hover:border-cyan-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <Wrench className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>{t.exploreTools}</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/80 dark:border-slate-800/80 w-full text-xs text-slate-600 dark:text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.btechSyllabus || 'Degree (B.Tech / BE)'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.diplomaSyllabus || 'Diploma Electrical'}</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{t.itiSyllabus || 'ITI Electrician'}</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual (Interactive Engineering & Circuit Schematic) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Frame Card */}
              <div className="relative rounded-2xl bg-slate-900 text-white p-6 sm:p-7 shadow-2xl border border-cyan-500/30 overflow-hidden glow-cyan">
                
                {/* Circuit Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wide uppercase">
                      {t.schematicEngineTitle || 'Interactive Schematic Engine'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px] text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                    <Activity className="w-3 h-3 text-cyan-400" />
                    <span>230V / 50Hz AC</span>
                  </div>
                </div>

                {/* SVG Circuit Schematic Diagram */}
                <div className="relative bg-slate-950/80 rounded-xl p-4 border border-cyan-900/40 mb-5">
                  <svg className="w-full h-44" viewBox="0 0 360 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    
                    {/* Grid background lines */}
                    <path d="M0 40H360 M0 80H360 M0 120H360 M90 0V160 M180 0V160 M270 0V160" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 4" />

                    {/* Circuit Trace Lines */}
                    <path d="M30 80 H80 M120 80 H180 M220 80 H280 M320 80 H330 V130 H30 V80" stroke="#0ea5e9" strokeWidth="2.5" />
                    
                    {/* Pulsing Current Flow Line */}
                    <path d="M30 80 H80 M120 80 H180 M220 80 H280 M320 80 H330 V130 H30 V80" stroke="#38bdf8" strokeWidth="2.5" className="animate-current-flow" />

                    {/* AC Source Symbol (Left) */}
                    <circle cx="30" cy="80" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                    <path d="M23 80 C23 75 27 75 30 80 C33 85 37 85 37 80" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

                    {/* Resistor R1 Symbol */}
                    <rect x="80" y="70" width="40" height="20" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" rx="2" />
                    <text x="100" y="84" fill="#a5f3fc" fontSize="10" fontFamily="monospace" textAnchor="middle">R = 10Ω</text>

                    {/* Inductor / Transformer L1 Symbol */}
                    <path d="M180 80 Q190 65 195 80 Q200 65 205 80 Q210 65 220 80" stroke="#38bdf8" strokeWidth="2" fill="none" />
                    <text x="200" y="60" fill="#a5f3fc" fontSize="10" fontFamily="monospace" textAnchor="middle">L = 50mH</text>

                    {/* Capacitor C1 Symbol */}
                    <line x1="280" y1="65" x2="280" y2="95" stroke="#38bdf8" strokeWidth="3" />
                    <line x1="288" y1="65" x2="288" y2="95" stroke="#38bdf8" strokeWidth="3" />
                    <text x="284" y="55" fill="#a5f3fc" fontSize="10" fontFamily="monospace" textAnchor="middle">C = 100μF</text>

                    {/* Node A */}
                    <circle 
                      cx="150" cy="80" r="6" 
                      fill={activeNode === 'A' ? "#22d3ee" : "#0284c7"} 
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveNode('A')}
                    />
                    <text x="150" y="102" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Node A</text>

                    {/* Node B */}
                    <circle 
                      cx="250" cy="80" r="6" 
                      fill={activeNode === 'B' ? "#22d3ee" : "#0284c7"} 
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveNode('B')}
                    />
                    <text x="250" y="102" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Node B</text>

                    {/* Load Node C */}
                    <circle 
                      cx="330" cy="80" r="6" 
                      fill={activeNode === 'C' ? "#22d3ee" : "#0284c7"} 
                      className="cursor-pointer hover:scale-125 transition-transform"
                      onClick={() => setActiveNode('C')}
                    />
                    <text x="330" y="102" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">Load C</text>

                  </svg>
                </div>

                {/* Live Node Value Telemetry Box */}
                <div className="grid grid-cols-3 gap-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 text-center font-mono">
                  <div className={`p-2 rounded-lg transition-colors ${activeNode === 'A' ? 'bg-cyan-950 border border-cyan-500' : 'bg-slate-900'}`}>
                    <span className="block text-[10px] text-slate-400">Node A (VR)</span>
                    <span className="text-xs font-bold text-cyan-300">
                      {activeNode === 'A' ? '141.4 V' : '140 V'}
                    </span>
                  </div>
                  <div className={`p-2 rounded-lg transition-colors ${activeNode === 'B' ? 'bg-cyan-950 border border-cyan-500' : 'bg-slate-900'}`}>
                    <span className="block text-[10px] text-slate-400">Node B (VL)</span>
                    <span className="text-xs font-bold text-cyan-300">
                      {activeNode === 'B' ? '88.5 V' : '88 V'}
                    </span>
                  </div>
                  <div className={`p-2 rounded-lg transition-colors ${activeNode === 'C' ? 'bg-cyan-950 border border-cyan-500' : 'bg-slate-900'}`}>
                    <span className="block text-[10px] text-slate-400">Current (I)</span>
                    <span className="text-xs font-bold text-emerald-400">
                      14.14 A
                    </span>
                  </div>
                </div>

                {/* Floating Feature Badges */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t.realtimeFormulas || 'Real-time Formulas'}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
                    <span>{t.interactiveSolvers || 'Interactive Solvers'}</span>
                  </span>
                </div>

              </div>

              {/* Decorative Corner Accent Chips */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 p-3 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 flex items-center gap-3 hidden sm:flex">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-display">{t.btechSyllabus || 'B.Tech & ITI Syllabus'}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{t.btechItiAligned || 'Aligned with AICTE & NCVT'}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
