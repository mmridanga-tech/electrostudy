import React, { useState, useEffect } from 'react';
import { Sliders, RotateCcw, CheckCircle2, AlertCircle, Compass, Zap } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface KVLLoopAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: "Kirchhoff's Voltage Law (KVL) Interactive Closed Loop",
    subtitle: 'Observe conservation of energy around a closed electrical loop. Algebraic sum of all potential differences (rises + drops) is zero.',
    controlsTitle: 'Circuit Loop Parameters',
    sourceVoltage: 'Source Voltage (V_S)',
    resistor1: 'Resistor R₁',
    resistor2: 'Resistor R₂',
    resistor3: 'Resistor R₃',
    loopDirection: 'Traversal Direction',
    clockwise: 'Clockwise (CW)',
    counterClockwise: 'Counter-Clockwise (CCW)',
    totalRise: 'Total Potential Rise (ΣV_rise)',
    totalDrop: 'Total Potential Drop (ΣV_drop)',
    kvlResidual: 'KVL Sum (ΣV = V_rise - V_drop)',
    statusBalanced: 'BALANCED (KVL Satisfied: ΣV = 0)',
    statusUnbalanced: 'UNBALANCED (Fault / Stray Potential)',
    strayEmfToggle: 'Inject Stray Voltage (+3V Fault)',
    reset: 'Reset Loop',
    calloutTitle: 'KVL Principle (Conservation of Energy)',
    calloutText: 'Around any closed loop in a circuit: ΣV = 0 or ΣV_rises = ΣV_drops. Energy supplied by source equals energy consumed by passive elements.',
    formulaText: 'ΣV = V_S - (V_R1 + V_R2 + V_R3) = 0   |   I = V_S / (R₁ + R₂ + R₃)',
    currentLabel: 'Loop Current (I)',
    voltUnit: 'V',
    ohmUnit: 'Ω',
    ampUnit: 'A'
  },
  hi: {
    title: 'किरचॉफ का वोल्टेज नियम (KVL) इंटरएक्टिव बंद लूप',
    subtitle: 'एक बंद विद्युत लूप के चारों ओर ऊर्जा के संरक्षण का अवलोकन करें। सभी विभवांतरों (वृद्धि + गिरावट) का बीजगणितीय योग शून्य होता है।',
    controlsTitle: 'सर्किट लूप पैरामीटर',
    sourceVoltage: 'स्रोत वोल्टेज (V_S)',
    resistor1: 'प्रतिरोधक R₁',
    resistor2: 'प्रतिरोधक R₂',
    resistor3: 'प्रतिरोधक R₃',
    loopDirection: 'दिशा का चयन',
    clockwise: 'दक्षिणावर्त (CW)',
    counterClockwise: 'वामावर्त (CCW)',
    totalRise: 'कुल वोल्टेज वृद्धि (ΣV_rise)',
    totalDrop: 'कुल वोल्टेज गिरावट (ΣV_drop)',
    kvlResidual: 'KVL योग (ΣV = V_rise - V_drop)',
    statusBalanced: 'संतुलित (KVL संतुष्ट: ΣV = 0)',
    statusUnbalanced: 'असंतुलित (फॉल्ट / अवांछित वोल्टेज)',
    strayEmfToggle: 'फॉल्ट वोल्टेज जोड़ें (+3V)',
    reset: 'लूप रीसेट करें',
    calloutTitle: 'KVL सिद्धांत (ऊर्जा संरक्षण नियम)',
    calloutText: 'किसी भी बंद परिपथ (लूप) में: ΣV = 0 या ΣV_rises = ΣV_drops। स्रोत द्वारा दी गई ऊर्जा पैसिव घटकों द्वारा खपत ऊर्जा के बराबर होती है।',
    formulaText: 'ΣV = V_S - (V_R1 + V_R2 + V_R3) = 0   |   I = V_S / (R₁ + R₂ + R₃)',
    currentLabel: 'लूप धारा (I)',
    voltUnit: 'V',
    ohmUnit: 'Ω',
    ampUnit: 'A'
  },
  bn: {
    title: 'কার্শফের ভোল্টেজ সূত্র (KVL) ইন্টারেক্টিভ ক্লোজড লুপ',
    subtitle: 'একটি আবদ্ধ সার্কিট লুপে শক্তি সংরক্ষণের নীতি পর্যবেক্ষণ করুন। সকল বিভব পার্থক্যের (বৃদ্ধি + পতন) বীজগণিতীয় যোগফল শূন্য।',
    controlsTitle: 'সার্কিট লুপের প্যারামিটারসমূহ',
    sourceVoltage: 'উৎস ভোল্টেজ (V_S)',
    resistor1: 'রেজিস্টর R₁',
    resistor2: 'রেজিস্টর R₂',
    resistor3: 'রেজিস্টর R₃',
    loopDirection: 'লুপ ঘোরার দিক',
    clockwise: 'ঘড়ির কাঁটার দিকে (CW)',
    counterClockwise: 'ঘড়ির কাঁটার বিপরীতে (CCW)',
    totalRise: 'মোট বিভব বৃদ্ধি (ΣV_rise)',
    totalDrop: 'মোট বিভব পতন (ΣV_drop)',
    kvlResidual: 'KVL যোগফল (ΣV = V_rise - V_drop)',
    statusBalanced: 'সাম্যাবস্থা (KVL নিশ্চিত: ΣV = 0)',
    statusUnbalanced: 'অসাম্যাবস্থা (ফল্ট / অতিরিক্ত ভোল্টেজ)',
    strayEmfToggle: 'ফল্ট ভোল্টেজ যোগ (+৩V)',
    reset: 'লুপ রিসেট',
    calloutTitle: 'KVL মূলনীতি (শক্তি সংরক্ষণ নীতি)',
    calloutText: 'যেকোনো আবদ্ধ লুপে: ΣV = 0 বা ΣV_rises = ΣV_drops। সোর্স দ্বারা উৎপাদিত শক্তি রেজিস্টরে ব্যয়িত শক্তির সমান।',
    formulaText: 'ΣV = V_S - (V_R1 + V_R2 + V_R3) = 0   |   I = V_S / (R₁ + R₂ + R₃)',
    currentLabel: 'লুপ কারেন্ট (I)',
    voltUnit: 'V',
    ohmUnit: 'Ω',
    ampUnit: 'A'
  }
};

export const KVLLoopAnimation: React.FC<KVLLoopAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const reducedMotion = useReducedMotion();

  // State
  const [vs, setVs] = useState<number>(24); // Volts
  const [r1, setR1] = useState<number>(10); // Ohms
  const [r2, setR2] = useState<number>(20); // Ohms
  const [r3, setR3] = useState<number>(30); // Ohms
  const [direction, setDirection] = useState<'cw' | 'ccw'>('cw');
  const [injectStray, setInjectStray] = useState<boolean>(false);

  const [particleOffset, setParticleOffset] = useState<number>(0);

  // Animation frame
  useEffect(() => {
    if (reducedMotion) return;
    let animId: number;
    const step = () => {
      setParticleOffset(prev => (prev + 1.2) % 40);
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [reducedMotion]);

  // Calculations
  const rTotal = Math.max(0.1, r1 + r2 + r3);
  const current = Number((vs / rTotal).toFixed(3)); // Amperes
  const vr1 = Number((current * r1).toFixed(2));
  const vr2 = Number((current * r2).toFixed(2));
  const vr3 = Number((current * r3).toFixed(2));

  const totalRise = vs + (injectStray ? 3 : 0);
  const totalDrop = Number((vr1 + vr2 + vr3).toFixed(2));
  const residual = Number(Math.abs(totalRise - totalDrop).toFixed(2));
  const isBalanced = residual < 0.05;

  const handleReset = () => {
    setVs(24);
    setR1(10);
    setR2(20);
    setR3(30);
    setDirection('cw');
    setInjectStray(false);
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={t.calloutTitle}
      calloutText={t.calloutText}
      formulaText={t.formulaText}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Visual Animation Viewport */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 bg-slate-950 rounded-xl border border-slate-800 text-white relative min-h-[340px] shadow-inner">
          {/* Status Badge */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border shadow-sm transition-all">
            {isBalanced ? (
              <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/80 border-emerald-600/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.statusBalanced}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-rose-400 bg-rose-950/80 border-rose-600/50">
                <AlertCircle className="w-4 h-4 text-rose-400 animate-pulse" />
                <span>{t.statusUnbalanced}</span>
              </div>
            )}
          </div>

          {/* Current Readout Badge */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-900/90 border border-slate-700 text-xs font-mono text-cyan-300">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>{t.currentLabel}: <strong className="text-white">{current} {t.ampUnit}</strong></span>
          </div>

          <svg viewBox="0 0 400 280" className="w-full max-w-md h-auto" aria-label="KVL Closed Loop Diagram">
            {/* Main Closed Loop Wire Rectangle */}
            <rect x="50" y="40" width="300" height="200" rx="10" fill="none" stroke="#475569" strokeWidth="4" />

            {/* Loop Traversal Direction Indicator (Center Arrow Circle) */}
            <g transform="translate(200, 140)">
              <circle cx="0" cy="0" r="32" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,3" />
              <path
                d={direction === 'cw' 
                  ? "M -16,0 A 16,16 0 1,1 16,0" 
                  : "M 16,0 A 16,16 0 1,1 -16,0"}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                markerEnd="url(#kvl-arrow)"
              />
              <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
                {direction === 'cw' ? 'CW' : 'CCW'}
              </text>
            </g>

            {/* Arrowhead marker */}
            <defs>
              <marker id="kvl-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Animated Electron Dots around the loop */}
            {!reducedMotion && current > 0 && [0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              // Perimeter total = 2*(300+200) = 1000
              const perimeter = 1000;
              let pos = ((particleOffset * 25 + i * 125) % perimeter);
              if (direction === 'ccw') pos = perimeter - pos;

              let px = 50;
              let py = 40;

              if (pos < 300) {
                // Top edge: (50, 40) -> (350, 40)
                px = 50 + pos;
                py = 40;
              } else if (pos < 500) {
                // Right edge: (350, 40) -> (350, 240)
                px = 350;
                py = 40 + (pos - 300);
              } else if (pos < 800) {
                // Bottom edge: (350, 240) -> (50, 240)
                px = 350 - (pos - 500);
                py = 240;
              } else {
                // Left edge: (50, 240) -> (50, 40)
                px = 50;
                py = 240 - (pos - 800);
              }

              return (
                <circle
                  key={`dot-${i}`}
                  cx={px}
                  cy={py}
                  r="3.5"
                  fill="#f59e0b"
                  className="drop-shadow"
                />
              );
            })}

            {/* Voltage Source (Left Branch) */}
            <g transform="translate(50, 140)">
              <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
              <text x="0" y="-6" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">+</text>
              <text x="0" y="14" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">-</text>
              <rect x="-42" y="-12" width="38" height="24" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
              <text x="-23" y="4" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
                {vs}{t.voltUnit}
              </text>
            </g>

            {/* Resistor R1 (Top Branch) */}
            <g transform="translate(200, 40)">
              <rect x="-35" y="-14" width="70" height="28" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="4" />
              <text x="0" y="-1" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">
                R₁ = {r1}{t.ohmUnit}
              </text>
              <text x="0" y="10" textAnchor="middle" fill="#a7f3d0" fontSize="9" fontWeight="bold" fontFamily="monospace">
                V_R1 = {vr1}{t.voltUnit}
              </text>
            </g>

            {/* Resistor R2 (Right Branch) */}
            <g transform="translate(350, 140)">
              <rect x="-14" y="-35" width="28" height="70" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="4" />
              <text x="0" y="-5" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">
                R₂={r2}{t.ohmUnit}
              </text>
              <text x="0" y="12" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontWeight="bold" fontFamily="monospace">
                {vr2}{t.voltUnit}
              </text>
            </g>

            {/* Resistor R3 (Bottom Branch) */}
            <g transform="translate(200, 240)">
              <rect x="-35" y="-14" width="70" height="28" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="4" />
              <text x="0" y="-1" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">
                R₃ = {r3}{t.ohmUnit}
              </text>
              <text x="0" y="10" textAnchor="middle" fill="#a7f3d0" fontSize="9" fontWeight="bold" fontFamily="monospace">
                V_R3 = {vr3}{t.voltUnit}
              </text>
            </g>

            {/* Stray Fault Indicator if injected */}
            {injectStray && (
              <g transform="translate(110, 240)">
                <circle cx="0" cy="0" r="12" fill="#881337" stroke="#fb7185" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">+3V</text>
              </g>
            )}
          </svg>

          {/* KVL Equation Strip */}
          <div className="w-full grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-800 text-center text-xs">
            <div className="p-1.5 rounded bg-sky-950/50 border border-sky-800/40">
              <span className="text-slate-400 block text-[10px]">{t.totalRise}</span>
              <span className="text-sky-400 font-bold text-sm font-mono">{totalRise} V</span>
            </div>
            <div className="p-1.5 rounded bg-emerald-950/50 border border-emerald-800/40">
              <span className="text-slate-400 block text-[10px]">{t.totalDrop}</span>
              <span className="text-emerald-400 font-bold text-sm font-mono">{totalDrop} V</span>
            </div>
            <div className={`p-1.5 rounded border ${isBalanced ? 'bg-teal-950/50 border-teal-800/40' : 'bg-rose-950/50 border-rose-800/40'}`}>
              <span className="text-slate-400 block text-[10px]">{t.kvlResidual}</span>
              <span className={`font-bold text-sm font-mono ${isBalanced ? 'text-teal-300' : 'text-rose-400'}`}>
                {residual} V
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="lg:col-span-5 space-y-4 print:hidden">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-cyan-500" />
              <span>{t.controlsTitle}</span>
            </h4>
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-md border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setDirection('cw')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors ${
                  direction === 'cw' ? 'bg-cyan-600 text-white' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                CW
              </button>
              <button
                onClick={() => setDirection('ccw')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors ${
                  direction === 'ccw' ? 'bg-cyan-600 text-white' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                CCW
              </button>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            {/* Source Voltage V_S */}
            <div>
              <div className="flex justify-between mb-1 font-medium">
                <span className="text-sky-600 dark:text-sky-400 font-semibold">{t.sourceVoltage}:</span>
                <span className="font-mono text-slate-700 dark:text-slate-300 font-bold">{vs} V</span>
              </div>
              <input
                type="range"
                min="6"
                max="60"
                step="2"
                value={vs}
                onChange={(e) => setVs(parseFloat(e.target.value) || 0)}
                className="w-full accent-sky-500 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            {/* Resistor R1 */}
            <div>
              <div className="flex justify-between mb-1 font-medium">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{t.resistor1}:</span>
                <span className="font-mono text-slate-700 dark:text-slate-300 font-bold">{r1} Ω</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={r1}
                onChange={(e) => setR1(parseFloat(e.target.value) || 1)}
                className="w-full accent-emerald-500 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            {/* Resistor R2 */}
            <div>
              <div className="flex justify-between mb-1 font-medium">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{t.resistor2}:</span>
                <span className="font-mono text-slate-700 dark:text-slate-300 font-bold">{r2} Ω</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={r2}
                onChange={(e) => setR2(parseFloat(e.target.value) || 1)}
                className="w-full accent-emerald-500 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            {/* Resistor R3 */}
            <div>
              <div className="flex justify-between mb-1 font-medium">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{t.resistor3}:</span>
                <span className="font-mono text-slate-700 dark:text-slate-300 font-bold">{r3} Ω</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={r3}
                onChange={(e) => setR3(parseFloat(e.target.value) || 1)}
                className="w-full accent-emerald-500 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            {/* Inject Fault Voltage Toggle */}
            <div className="pt-2">
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
                <input
                  type="checkbox"
                  checked={injectStray}
                  onChange={(e) => setInjectStray(e.target.checked)}
                  className="rounded text-rose-600 focus:ring-rose-500 h-4 w-4"
                />
                <span className="text-xs font-semibold text-rose-700 dark:text-rose-300">
                  {t.strayEmfToggle}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
