import React, { useState, useEffect } from 'react';
import { Zap, Sliders, RotateCcw, Activity, HelpCircle, Info, ShieldAlert } from 'lucide-react';
import { Language } from '../../types';

interface OhmsLawSimulationProps {
  currentLanguage: Language;
}

// Pure calculation helper
export const calculateCurrent = (v: number, r: number): number => {
  if (r <= 0) return 0;
  return v / r;
};

// Formatting helper
export const formatValue = (num: number, decimals: number = 2): string => {
  if (Number.isInteger(num)) return num.toString();
  return num.toFixed(decimals);
};

const SIMULATION_TRANSLATIONS = {
  en: {
    title: "Ohm's Law Interactive Simulator",
    subtitle: "Adjust Voltage and Resistance to observe live changes in Current",
    voltage: "Voltage (V)",
    resistance: "Resistance (R)",
    current: "Current (I)",
    conventionalCurrent: "Conventional Current (+ to -)",
    electronFlow: "Electron Flow (- to +)",
    flowMode: "Flow View",
    presets: "Test Presets",
    reset: "Reset (12V, 6Ω)",
    liveMeasurements: "Live Circuit Measurements",
    formulaHeading: "Ohm's Law Mathematical Model",
    graphTitle: "V-I Characteristic Curve (Current vs. Voltage)",
    xAxis: "Voltage V (Volts)",
    yAxis: "Current I (Amperes)",
    callout1Title: "1. Increase Voltage",
    callout1Desc: "With resistance fixed, increasing voltage increases current proportionally.",
    callout2Title: "2. Increase Resistance",
    callout2Desc: "With voltage fixed, increasing resistance reduces current inversely.",
    callout3Title: "3. Ohm's Law Principle",
    callout3Desc: "Current is directly proportional to voltage and inversely proportional to resistance.",
    explanationHeader: "Live Dynamic Behaviour:",
    expVUp: "Higher Voltage pushes more electrical charge through the resistor.",
    expRUp: "Higher Resistance restricts and slows down the flow of charge.",
    expResult: "According to I = V / R:",
    reducedMotionNotice: "Reduced motion preference active — flow animation paused.",
  },
  hi: {
    title: "ओम नियम इंटरैक्टिव सिम्युलेटर",
    subtitle: "धारा में बदलाव देखने के लिए वोल्टेज और प्रतिरोध समायोजित करें",
    voltage: "वोल्टेज (V)",
    resistance: "प्रतिरोध (R)",
    current: "विद्युत धारा (I)",
    conventionalCurrent: "पारंपरिक धारा (+ से -)",
    electronFlow: "इलेक्ट्रॉन प्रवाह (- से +)",
    flowMode: "प्रवाह मोड",
    presets: "परीक्षण मान (Presets)",
    reset: "रीसेट (12V, 6Ω)",
    liveMeasurements: "लाइव परिपथ माप",
    formulaHeading: "ओम नियम गणितीय मॉडल",
    graphTitle: "V-I अभिलक्षण वक्र (धारा बनाम वोल्टेज)",
    xAxis: "वोल्टेज V (वोल्ट)",
    yAxis: "धारा I (एम्पीयर)",
    callout1Title: "1. वोल्टेज बढ़ाएं",
    callout1Desc: "प्रतिरोध स्थिर रहने पर, वोल्टेज बढ़ाने से धारा समानुपाती रूप से बढ़ती है।",
    callout2Title: "2. प्रतिरोध बढ़ाएं",
    callout2Desc: "वोल्टेज स्थिर रहने पर, प्रतिरोध बढ़ाने से धारा व्युत्क्रमानुपाती रूप से घटती है।",
    callout3Title: "3. ओम का नियम",
    callout3Desc: "धारा वोल्टेज के समानुपाती और प्रतिरोध के व्युत्क्रमानुपाती होती है।",
    explanationHeader: "लाइव डायनेमिक व्यवहार:",
    expVUp: "उच्च वोल्टेज प्रतिरोधक के माध्यम से अधिक विद्युत आवेश को धकेलता है।",
    expRUp: "उच्च प्रतिरोध आवेश के प्रवाह को रोकता और धीमा करता है।",
    expResult: "I = V / R के अनुसार:",
    reducedMotionNotice: "रिड्यूस्ड मोशन सक्रिय है — प्रवाह एनिमेटेड गति रोक दी गई है।",
  },
  bn: {
    title: "ওহমের সূত্র ইন্টারঅ্যাক্টিভ সিমুলেটর",
    subtitle: "তড়িৎ প্রবাহের লাইভ পরিবর্তন দেখতে ভোল্টেজ ও রোধ পরিবর্তন করুন",
    voltage: "ভোল্টেজ (V)",
    resistance: "রোধ (R)",
    current: "তড়িৎ প্রবাহ (I)",
    conventionalCurrent: "প্রচলিত কারেন্ট (+ থেকে -)",
    electronFlow: "ইলেকট্রন প্রবাহ (- থেকে +)",
    flowMode: "প্রবাহের মোড",
    presets: "টেস্ট প্রিসেট",
    reset: "রিসেট (12V, 6Ω)",
    liveMeasurements: "লাইভ সার্কিট পরিমাপ",
    formulaHeading: "ওহমের সূত্রের গাণিতিক গণনা",
    graphTitle: "V-I বৈশিষ্ট্য রেখাচিত্র (কারেন্ট বনাম ভোল্টেজ)",
    xAxis: "ভোল্টেজ V (ভোল্ট)",
    yAxis: "কারেন্ট I (অ্যাম্পিয়ার)",
    callout1Title: "১. ভোল্টেজ বৃদ্ধি",
    callout1Desc: "রোধ নির্দিষ্ট থাকলে, ভোল্টেজ বাড়ালে তড়িৎ প্রবাহ সমানুপাতিকভাবে বৃদ্ধি পায়।",
    callout2Title: "২. রোধ বৃদ্ধি",
    callout2Desc: "ভোল্টেজ নির্দিষ্ট থাকলে, রোধ বাড়ালে তড়িৎ প্রবাহ ব্যস্তানুপাতিকভাবে হ্রাস পায়।",
    callout3Title: "৩. ওহমের নীতি",
    callout3Desc: "তড়িৎ প্রবাহ ভোল্টেজের সমানুপাতিক এবং রোধের ব্যস্তানুপাতিক।",
    explanationHeader: "লাইভ সার্কিট আচরণ:",
    expVUp: "উচ্চ ভোল্টেজ রেজিস্টরের মধ্য দিয়ে বেশি চার্জ ঠেলে দেয়।",
    expRUp: "উচ্চ রোধ চার্জের প্রবাহকে বাধা দেয় এবং ধীর করে।",
    expResult: "I = V / R সূত্র অনুসারে:",
    reducedMotionNotice: "রিডিউসড মোশন সক্রিয় রয়েছে — মোশন অ্যানিমেশন স্থগিত রাখা হয়েছে।",
  }
};

export const OhmsLawSimulation: React.FC<OhmsLawSimulationProps> = ({ currentLanguage }) => {
  const t = SIMULATION_TRANSLATIONS[currentLanguage] || SIMULATION_TRANSLATIONS.en;

  // States
  const [voltage, setVoltage] = useState<number>(12); // Default 12 V
  const [resistance, setResistance] = useState<number>(6); // Default 6 Ω
  const [flowDirection, setFlowDirection] = useState<'conventional' | 'electron'>('conventional');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Calculate Current I = V / R
  const current = calculateCurrent(voltage, resistance);

  // Reset function
  const handleReset = () => {
    setVoltage(12);
    setResistance(6);
  };

  // Test preset handlers
  const applyPreset = (v: number, r: number) => {
    setVoltage(v);
    setResistance(r);
  };

  // Calculate animation speed based on Current
  // Higher current -> faster flow (shorter duration)
  const animDuration = prefersReducedMotion 
    ? 0 
    : Math.max(0.4, Math.min(3.5, 3 / Math.sqrt(current)));

  // SVG Graph parameters
  const svgWidth = 320;
  const svgHeight = 160;
  const paddingLeft = 40;
  const paddingBottom = 30;
  const paddingTop = 15;
  const paddingRight = 15;

  const graphW = svgWidth - paddingLeft - paddingRight;
  const graphH = svgHeight - paddingTop - paddingBottom;

  // Max scale ranges for graph: V in [0, 24], I in [0, 24]
  const maxV = 24;
  const maxI = 24;

  const mapX = (vVal: number) => paddingLeft + (vVal / maxV) * graphW;
  const mapY = (iVal: number) => paddingTop + graphH - (Math.min(iVal, maxI) / maxI) * graphH;

  // Current point on graph
  const pointX = mapX(voltage);
  const pointY = mapY(current);

  // Line endpoints for I = V / R across V = 0 to 24
  const lineStartX = mapX(0);
  const lineStartY = mapY(0);

  const iAtMaxV = calculateCurrent(maxV, resistance);
  const lineEndX = mapX(maxV);
  const lineEndY = mapY(iAtMaxV);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 text-white space-y-6 shadow-xl">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
            <h3 className="text-base sm:text-lg font-extrabold font-display tracking-tight text-white">
              {t.title}
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Reset & Flow Toggle Buttons */}
        <div className="flex items-center gap-2 flex-wrap print-hidden">
          <button
            onClick={() => setFlowDirection(prev => prev === 'conventional' ? 'electron' : 'conventional')}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-300 transition-colors flex items-center gap-1.5"
            title="Toggle between Conventional Current and Electron Flow"
            aria-label="Toggle flow direction"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>{flowDirection === 'conventional' ? t.conventionalCurrent : t.electronFlow}</span>
          </button>

          <button
            onClick={handleReset}
            className="px-2.5 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-800 text-xs font-bold text-cyan-300 transition-colors flex items-center gap-1.5"
            aria-label={t.reset}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t.reset}</span>
          </button>
        </div>
      </div>

      {/* Reduced motion alert if active */}
      {prefersReducedMotion && (
        <div className="p-2.5 rounded-lg bg-amber-950/60 border border-amber-800/60 text-amber-300 text-xs flex items-center gap-2">
          <Info className="w-4 h-4 shrink-0 text-amber-400" />
          <span>{t.reducedMotionNotice}</span>
        </div>
      )}

      {/* MAIN RESPONSIVE STACK / GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: CIRCUIT SCHEMATIC ANIMATION (6 cols on lg) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            <span>Circuit Schematic</span>
            <span className="text-[10px] text-slate-400">{flowDirection === 'conventional' ? 'Conventional (+ → -)' : 'Electron (- → +)'}</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative min-h-[220px]">
            
            {/* SVG Circuit Schematic */}
            <svg viewBox="0 0 340 200" className="w-full max-w-sm h-48 select-none">
              
              {/* Main Outer Wire Path */}
              <rect
                x="50"
                y="40"
                width="240"
                height="120"
                rx="8"
                fill="none"
                stroke="#334155"
                strokeWidth="4"
              />

              {/* Dynamic Animated Flow Line */}
              <rect
                x="50"
                y="40"
                width="240"
                height="120"
                rx="8"
                fill="none"
                stroke={flowDirection === 'conventional' ? '#f59e0b' : '#38bdf8'}
                strokeWidth="4"
                strokeDasharray="10 10"
                style={{
                  animation: !prefersReducedMotion && animDuration > 0
                    ? `dashFlow ${animDuration}s linear infinite ${flowDirection === 'electron' ? 'reverse' : 'normal'}`
                    : 'none',
                  opacity: current > 0 ? 0.9 : 0.2
                }}
              />

              {/* Left Side: DC Voltage Source */}
              <g transform="translate(50, 100)">
                <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
                <text x="0" y="-5" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="bold">+</text>
                <text x="0" y="14" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="bold">-</text>
                <text x="-30" y="4" textAnchor="end" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="monospace">
                  {voltage} V
                </text>
              </g>

              {/* Top Side: Resistor Symbol */}
              <g transform="translate(170, 40)">
                <rect x="-35" y="-14" width="70" height="28" fill="#1e293b" stroke="#10b981" strokeWidth="2" rx="4" />
                <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold" fontFamily="monospace">
                  {resistance} Ω
                </text>
                <text x="0" y="-20" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">
                  Resistor (R)
                </text>
              </g>

              {/* Right Side: Ammeter Measurement Node */}
              <g transform="translate(290, 100)">
                <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
                <text x="0" y="4" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">
                  A
                </text>
                <text x="28" y="4" textAnchor="start" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">
                  {formatValue(current)} A
                </text>
              </g>

              {/* Bottom Wire Label */}
              <text x="170" y="180" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="monospace">
                Return Path (GND)
              </text>
            </svg>

            {/* CSS Animation Keyframes for Dash Flow */}
            <style>{`
              @keyframes dashFlow {
                0% {
                  stroke-dashoffset: 40;
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>

            <div className="text-center mt-2">
              <span className="text-[11px] font-mono text-amber-400/90 font-semibold bg-amber-950/40 px-3 py-1 rounded-full border border-amber-800/40">
                Current Activity Rate: {formatValue(current)} A ({animDuration > 0 ? `${animDuration.toFixed(1)}s loop` : 'static'})
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: LIVE MEASUREMENTS & CONTROLS (6 cols on lg) */}
        <div className="lg:col-span-6 space-y-5">
          
          {/* Live Values Readout Cards */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              {t.liveMeasurements}
            </h4>
            <div className="grid grid-cols-3 gap-2.5">
              
              {/* Voltage Box */}
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/80 text-center space-y-1">
                <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase">{t.voltage}</div>
                <div className="text-lg sm:text-xl font-bold font-mono text-cyan-300">{voltage} V</div>
              </div>

              {/* Resistance Box */}
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-center space-y-1">
                <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase">{t.resistance}</div>
                <div className="text-lg sm:text-xl font-bold font-mono text-emerald-300">{resistance} Ω</div>
              </div>

              {/* Current Box */}
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/80 text-center space-y-1">
                <div className="text-[10px] font-mono font-bold text-amber-400 uppercase">{t.current}</div>
                <div className="text-lg sm:text-xl font-bold font-mono text-amber-300">{formatValue(current)} A</div>
              </div>

            </div>
          </div>

          {/* Interactive Sliders */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 print-hidden">
            
            {/* Voltage Slider */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor="voltage-slider" className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{t.voltage}</span>
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={1}
                    max={24}
                    value={voltage}
                    onChange={(e) => setVoltage(Math.max(1, Math.min(24, Number(e.target.value) || 1)))}
                    className="w-14 px-1.5 py-0.5 rounded bg-slate-800 border border-cyan-700/80 text-right font-mono text-xs text-cyan-300 font-bold focus:outline-none focus:border-cyan-400"
                    aria-label="Numeric voltage input"
                  />
                  <span className="text-xs font-mono text-slate-400">V</span>
                </div>
              </div>
              <input
                id="voltage-slider"
                type="range"
                min={1}
                max={24}
                step={1}
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Voltage slider"
                aria-valuenow={voltage}
                aria-valuemin={1}
                aria-valuemax={24}
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 V</span>
                <span>12 V</span>
                <span>24 V</span>
              </div>
            </div>

            {/* Resistance Slider */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor="resistance-slider" className="font-bold text-emerald-300 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>{t.resistance}</span>
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={resistance}
                    onChange={(e) => setResistance(Math.max(1, Math.min(100, Number(e.target.value) || 1)))}
                    className="w-14 px-1.5 py-0.5 rounded bg-slate-800 border border-emerald-700/80 text-right font-mono text-xs text-emerald-300 font-bold focus:outline-none focus:border-emerald-400"
                    aria-label="Numeric resistance input"
                  />
                  <span className="text-xs font-mono text-slate-400">Ω</span>
                </div>
              </div>
              <input
                id="resistance-slider"
                type="range"
                min={1}
                max={100}
                step={1}
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Resistance slider"
                aria-valuenow={resistance}
                aria-valuemin={1}
                aria-valuemax={100}
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 Ω</span>
                <span>50 Ω</span>
                <span>100 Ω</span>
              </div>
            </div>

            {/* Test Presets */}
            <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">{t.presets}:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                <button
                  onClick={() => applyPreset(12, 6)}
                  className={`px-2 py-1 rounded text-[11px] font-mono border transition-all ${
                    voltage === 12 && resistance === 6
                      ? 'bg-amber-950 border-amber-500 text-amber-300 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  12V, 6Ω → 2A
                </button>

                <button
                  onClick={() => applyPreset(24, 6)}
                  className={`px-2 py-1 rounded text-[11px] font-mono border transition-all ${
                    voltage === 24 && resistance === 6
                      ? 'bg-amber-950 border-amber-500 text-amber-300 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  24V, 6Ω → 4A
                </button>

                <button
                  onClick={() => applyPreset(12, 12)}
                  className={`px-2 py-1 rounded text-[11px] font-mono border transition-all ${
                    voltage === 12 && resistance === 12
                      ? 'bg-amber-950 border-amber-500 text-amber-300 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  12V, 12Ω → 1A
                </button>

                <button
                  onClick={() => applyPreset(6, 12)}
                  className={`px-2 py-1 rounded text-[11px] font-mono border transition-all ${
                    voltage === 6 && resistance === 12
                      ? 'bg-amber-950 border-amber-500 text-amber-300 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  6V, 12Ω → 0.5A
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* FORMULA SUBSTITUTION & DYNAMIC EXPLANATION PANEL */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
          <HelpCircle className="w-4 h-4 text-amber-400" />
          <span>{t.formulaHeading}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          
          {/* Formula Display */}
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5 font-mono">
            <div className="text-xs text-slate-400">Formula: <span className="text-cyan-300 font-bold">I = V / R</span></div>
            <div className="text-sm sm:text-base font-bold text-amber-300">
              I = {voltage} V / {resistance} Ω = <span className="text-amber-400 text-lg sm:text-xl font-extrabold">{formatValue(current)} A</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Check V = I × R: {formatValue(current)} A × {resistance} Ω = {formatValue(current * resistance)} V
            </div>
          </div>

          {/* Dynamic Educational Reasoning */}
          <div className="space-y-1 text-xs text-slate-300 leading-relaxed font-sans">
            <p className="font-bold text-slate-200">{t.explanationHeader}</p>
            <ul className="list-disc list-inside space-y-0.5 text-slate-300">
              <li>{t.expVUp}</li>
              <li>{t.expRUp}</li>
              <li className="font-semibold text-amber-300">
                {t.expResult} {voltage} V ÷ {resistance} Ω = {formatValue(current)} A.
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* LIVE V-I GRAPH */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
          <span>{t.graphTitle}</span>
          <span className="text-[10px] text-slate-400 font-mono">R = {resistance} Ω (Slope = 1/{resistance})</span>
        </div>

        <div className="w-full flex justify-center overflow-x-auto">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full max-w-md h-44 select-none">
            
            {/* Grid lines */}
            <line x1={paddingLeft} y1={paddingTop} x2={paddingLeft} y2={svgHeight - paddingBottom} stroke="#334155" strokeWidth="1.5" />
            <line x1={paddingLeft} y1={svgHeight - paddingBottom} x2={svgWidth - paddingRight} y2={svgHeight - paddingBottom} stroke="#334155" strokeWidth="1.5" />

            {/* Horizontal Grid lines (5A, 10A, 15A, 20A) */}
            {[6, 12, 18, 24].map((iVal) => {
              const y = mapY(iVal);
              return (
                <g key={iVal}>
                  <line x1={paddingLeft} y1={y} x2={svgWidth - paddingRight} y2={y} stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                  <text x={paddingLeft - 6} y={y + 3} textAnchor="end" fill="#64748b" fontSize="8" fontFamily="monospace">{iVal}A</text>
                </g>
              );
            })}

            {/* Vertical Grid lines (6V, 12V, 18V, 24V) */}
            {[6, 12, 18, 24].map((vVal) => {
              const x = mapX(vVal);
              return (
                <g key={vVal}>
                  <line x1={x} y1={paddingTop} x2={x} y2={svgHeight - paddingBottom} stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                  <text x={x} y={svgHeight - paddingBottom + 12} textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">{vVal}V</text>
                </g>
              );
            })}

            {/* V-I Linear Curve for current Resistance */}
            <line
              x1={lineStartX}
              y1={lineStartY}
              x2={lineEndX}
              y2={lineEndY}
              stroke="#06b6d4"
              strokeWidth="2.5"
            />

            {/* Crosshairs for Active Operating Point */}
            <line x1={pointX} y1={svgHeight - paddingBottom} x2={pointX} y2={pointY} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
            <line x1={paddingLeft} y1={pointY} x2={pointX} y2={pointY} stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />

            {/* Operating Point Circle */}
            <circle cx={pointX} cy={pointY} r="6" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />

            {/* Point Label Tooltip */}
            <g transform={`translate(${Math.min(pointX + 10, svgWidth - 90)}, ${Math.max(pointY - 10, paddingTop + 15)})`}>
              <rect x="0" y="-12" width="80" height="18" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" rx="3" />
              <text x="40" y="0" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold" fontFamily="monospace">
                ({voltage}V, {formatValue(current)}A)
              </text>
            </g>

            {/* Axes Labels */}
            <text x={svgWidth / 2 + 10} y={svgHeight - 4} textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">{t.xAxis}</text>
            <text x="12" y={svgHeight / 2} textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif" transform={`rotate(-90 12 ${svgHeight/2})`}>{t.yAxis}</text>
          </svg>
        </div>
      </div>

      {/* EDUCATIONAL CALLOUT CARDS (3 CARDS) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        
        {/* Card 1: Increase Voltage */}
        <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-800/60 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>{t.callout1Title}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            {t.callout1Desc}
          </p>
        </div>

        {/* Card 2: Increase Resistance */}
        <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/60 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span>{t.callout2Title}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            {t.callout2Desc}
          </p>
        </div>

        {/* Card 3: Fundamental Ohm's Law */}
        <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-800/60 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
            <Activity className="w-4 h-4 text-amber-400" />
            <span>{t.callout3Title}</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-normal">
            {t.callout3Desc}
          </p>
        </div>

      </div>

    </div>
  );
};
