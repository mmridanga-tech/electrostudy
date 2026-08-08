import React, { useState, useEffect, useRef } from 'react';
import { Sliders, Play, Pause, Activity } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ElectricCurrentAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Electric Current & Rate of Charge Flow',
    subtitle: 'Visualize how electric current represents charge passing through a conductor cross-section per unit time.',
    currentLevel: 'Current Level (I)',
    electronFlow: 'Electron Flow (- to +)',
    conventionalCurrent: 'Conventional Current (+ to -)',
    start: 'Start Flow',
    pause: 'Pause Flow',
    measurementBoundary: 'Cross-Section Boundary',
    chargesPassed: 'Charges Passed (Q)',
    elapsedTime: 'Time (t)',
    rateOutput: 'Current Rate (I = Q/t)',
    calloutTitle: 'Fundamental Current Definition',
    calloutText: 'Electric current is the rate of flow of electric charge past a point in a circuit. One Ampere (1 A) equals one Coulomb of charge passing through a conductor cross-section per second (1 A = 1 C/s).',
    formulaText: 'I = Q / t  ⇒  Q = I × t',
  },
  hi: {
    title: 'विद्युत धारा एवं आवेश प्रवाह की दर',
    subtitle: 'देखें कि विद्युत धारा प्रति इकाई समय में चालक के अनुप्रस्थ काट से गुजरने वाले आवेश को कैसे दर्शाती है।',
    currentLevel: 'धारा का स्तर (I)',
    electronFlow: 'इलेक्ट्रॉन प्रवाह (- से +)',
    conventionalCurrent: 'पारंपरिक धारा (+ से -)',
    start: 'प्रवाह शुरू करें',
    pause: 'प्रवाह रोकें',
    measurementBoundary: 'अनुप्रस्थ काट सीमा',
    chargesPassed: 'पार किए गए आवेश (Q)',
    elapsedTime: 'बीता समय (t)',
    rateOutput: 'धारा दर (I = Q/t)',
    calloutTitle: 'विद्युत धारा की मूल परिभाषा',
    calloutText: 'विद्युत धारा किसी परिपथ में किसी बिंदु से होकर आवेश प्रवाह की दर है। एक एम्पीयर (1 A) का अर्थ है प्रति सेकंड चालक के अनुप्रस्थ काट से एक कूलॉम आवेश का गुजरना (1 A = 1 C/s)।',
    formulaText: 'I = Q / t  ⇒  Q = I × t',
  },
  bn: {
    title: 'তড়িৎ প্রবাহ ও আধান প্রবাহের হার',
    subtitle: 'দেখুন কিভাবে তড়িৎ প্রবাহ প্রতি একক সময়ে পরিবাহীর প্রস্থচ্ছেদের মধ্য দিয়ে অতিক্রান্ত আধান নির্দেশ করে।',
    currentLevel: 'প্রবাহের মাত্রা (I)',
    electronFlow: 'ইলেকট্রন প্রবাহ (- থেকে +)',
    conventionalCurrent: 'প্রচলিত কারেন্ট (+ থেকে -)',
    start: 'প্রবাহ শুরু করুন',
    pause: 'প্রবাহ থামান',
    measurementBoundary: 'প্রস্থচ্ছেদ সীমা',
    chargesPassed: 'অতিক্রান্ত আধান (Q)',
    elapsedTime: 'অতিবাহিত সময় (t)',
    rateOutput: 'প্রবাহের হার (I = Q/t)',
    calloutTitle: 'তড়িৎ প্রবাহের মূল সংজ্ঞা',
    calloutText: 'তড়িৎ প্রবাহ হলো কোনো পরিবাহীর প্রস্থচ্ছেদের মধ্য দিয়ে আধান অতিক্রান্ত হওয়ার হার। এক অ্যাম্পিয়ার (1 A) বলতে বোঝায় প্রতি সেকেন্ডে পরিবাহীর মধ্য দিয়ে এক কুলম্ব আধানের প্রবাহ (1 A = 1 C/s)।',
    formulaText: 'I = Q / t  ⇒  Q = I × t',
  }
};

export const ElectricCurrentAnimation: React.FC<ElectricCurrentAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [currentVal, setCurrentVal] = useState<number>(3); // 1 to 10 A
  const [showElectrons, setShowElectrons] = useState<boolean>(true);
  const [showConventional, setShowConventional] = useState<boolean>(true);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  // Counter state
  const [chargePassedCount, setChargePassedCount] = useState<number>(0);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const prevXRef = useRef<number[]>([]);

  // Particle position animation loop
  const particleCount = 12;
  const [particleOffsets, setParticleOffsets] = useState<number[]>(() => 
    Array.from({ length: particleCount }, (_, i) => (i * 300) / particleCount)
  );

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isRunning || reducedMotion) return;

    let animId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      setElapsedTime(prev => prev + dt);

      // Increment charge passed counter based on current rate
      setChargePassedCount(prev => prev + currentVal * dt);

      // Speed proportional to current
      const speed = currentVal * 25; // px/sec

      setParticleOffsets(prevOffsets => {
        return prevOffsets.map(pos => {
          const nextPos = (pos + speed * dt) % 300;
          return nextPos;
        });
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isRunning, currentVal]);

  const handleReset = () => {
    setCurrentVal(3);
    setShowElectrons(true);
    setShowConventional(true);
    setIsRunning(true);
    setChargePassedCount(0);
    setElapsedTime(0);
    setParticleOffsets(Array.from({ length: particleCount }, (_, i) => (i * 300) / particleCount));
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      calloutTitle={t.calloutTitle}
      calloutText={t.calloutText}
      formulaText={t.formulaText}
      extraHeaderActions={
        <button
          onClick={() => setIsRunning(prev => !prev)}
          className="px-2.5 py-1.5 rounded-lg bg-amber-950/80 hover:bg-amber-900 border border-amber-800 text-xs font-bold text-amber-300 transition-colors flex items-center gap-1.5"
          aria-label={isRunning ? t.pause : t.start}
        >
          {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span>{isRunning ? t.pause : t.start}</span>
        </button>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual Circuit Canvas */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            <span>Closed Conductor Circuit</span>
            <span className="text-amber-400 font-mono">I = {currentVal} A</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative min-h-[220px]">
            <svg viewBox="0 0 340 200" className="w-full max-w-md h-52 select-none">
              {/* Outer Loop Wire */}
              <rect x="40" y="30" width="260" height="140" rx="12" fill="none" stroke="#334155" strokeWidth="6" />

              {/* Cross-section Measurement Boundary Line */}
              <line x1="170" y1="20" x2="170" y2="40" stroke="#f59e0b" strokeWidth="3" strokeDasharray="3 3" />
              <text x="170" y="14" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="monospace">
                {t.measurementBoundary} (Cross Section)
              </text>

              {/* Battery Source (Left Wire) */}
              <g transform="translate(40, 100)">
                <rect x="-16" y="-30" width="32" height="60" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" rx="4" />
                <line x1="-10" y1="-12" x2="10" y2="-12" stroke="#ef4444" strokeWidth="4" />
                <line x1="-5" y1="12" x2="5" y2="12" stroke="#3b82f6" strokeWidth="4" />
                <text x="0" y="-18" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">+</text>
                <text x="0" y="24" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">-</text>
                <text x="-24" y="4" textAnchor="end" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
                  DC Source
                </text>
              </g>

              {/* Load Lamp (Right Wire) */}
              <g transform="translate(300, 100)">
                <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
                <path d="M-8,-8 L8,8 M-8,8 L8,-8" stroke="#f59e0b" strokeWidth="2" />
                <text x="24" y="4" textAnchor="start" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="monospace">
                  Load
                </text>
              </g>

              {/* Top Conductor Tube (Zooms in cross-section) */}
              <rect x="70" y="22" width="200" height="16" fill="#1e293b" stroke="#475569" strokeWidth="1" rx="4" />

              {/* Electrons Flow Particles (Left to Right in bottom wire, Right to Left in top wire: - to +) */}
              {showElectrons && particleOffsets.map((offset, idx) => {
                // Top wire path: 270 down to 70 (Right to Left: - to +)
                const topX = 270 - (offset % 200);
                return (
                  <g key={`e-${idx}`} transform={`translate(${topX}, 30)`}>
                    <circle cx="0" cy="0" r="4" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                    <text x="0" y="2.5" textAnchor="middle" fill="#000000" fontSize="7" fontWeight="bold">-</text>
                  </g>
                );
              })}

              {/* Conventional Current Indicators (Left to Right on top wire: + to -) */}
              {showConventional && (
                <g transform="translate(170, 48)">
                  <path d="M -20 0 L 20 0 M 12 -4 L 20 0 L 12 4" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
                  <text x="0" y="14" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold" fontFamily="monospace">
                    Conventional Current (I) →
                  </text>
                </g>
              )}

              {/* Electron Flow Label */}
              {showElectrons && (
                <text x="170" y="70" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="monospace">
                  ← Electron Motion (-e)
                </text>
              )}
            </svg>

            {/* Live Counter Display */}
            <div className="grid grid-cols-3 gap-2 w-full mt-2 text-center">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">{t.chargesPassed}</div>
                <div className="text-sm font-bold text-cyan-300 font-mono">{chargePassedCount.toFixed(1)} C</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">{t.elapsedTime}</div>
                <div className="text-sm font-bold text-amber-300 font-mono">{elapsedTime.toFixed(1)} s</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">{t.rateOutput}</div>
                <div className="text-sm font-bold text-emerald-300 font-mono">{currentVal.toFixed(1)} A</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 print-hidden">
            {/* Current Level Slider */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <label className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{t.currentLevel}</span>
                </label>
                <span className="font-mono text-cyan-300 font-bold">{currentVal} A</span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                step={0.5}
                value={currentVal}
                onChange={(e) => setCurrentVal(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                aria-label="Current slider"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 A (Slow)</span>
                <span>5 A</span>
                <span>10 A (Fast)</span>
              </div>
            </div>

            {/* View Toggles */}
            <div className="space-y-2 border-t border-slate-800/80 pt-3">
              <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showElectrons}
                  onChange={(e) => setShowElectrons(e.target.checked)}
                  className="rounded bg-slate-800 border-slate-700 text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-cyan-300">{t.electronFlow}</span>
              </label>

              <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showConventional}
                  onChange={(e) => setShowConventional(e.target.checked)}
                  className="rounded bg-slate-800 border-slate-700 text-amber-500 focus:ring-amber-500"
                />
                <span className="text-amber-300">{t.conventionalCurrent}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
