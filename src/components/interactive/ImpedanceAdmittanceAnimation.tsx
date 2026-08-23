import React, { useState, useId } from 'react';
import { Sliders, RotateCcw, Activity, Zap, Compass, CheckCircle2, AlertCircle, ArrowRightLeft, ShieldAlert } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ImpedanceAdmittanceAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Complex Impedance & Admittance Laboratory',
    subtitle: 'Interactively analyze the reciprocal relationship between Impedance Z = R + jX (Ω) and Admittance Y = G + jB (S). Observe how series opposition converts to parallel ease of current flow on dual complex planes.',
    resistanceLabel: 'Resistance R (Ω)',
    reactanceLabel: 'Reactance X (Ω) [Inductive (+) / Capacitive (-)]',
    reset: 'Reset Defaults',

    // Metrics
    zRectMetric: 'Impedance Z (Rectangular)',
    zPolarMetric: 'Impedance Z (Polar)',
    yRectMetric: 'Admittance Y (Rectangular)',
    yPolarMetric: 'Admittance Y (Polar)',
    gMetric: 'Conductance G = Re(Y)',
    bMetric: 'Susceptance B = Im(Y)',
    reciprocalNote: 'Y = 1/Z = G + jB',

    // Titles
    zPlaneTitle: 'Complex Impedance Plane (Z = R + jX)',
    yPlaneTitle: 'Complex Admittance Plane (Y = G + jB)',
    conversionTitle: 'Mathematical Conversion Equations',
    zeroZWarning: 'Singularity: Z = 0 + j0 Ω represents an ideal short circuit. Admittance is infinite and undefined. Please select non-zero R or X.',

    // Sign conventions
    inductiveNote: 'Inductive Load (X > 0): Z = R + jXL  →  Y = G - jBL (Susceptance has negative sign in Y)',
    capacitiveNote: 'Capacitive Load (X < 0): Z = R - jXC  →  Y = G + jBC (Susceptance has positive sign in Y)',
    resistiveNote: 'Purely Resistive (X = 0): Z = R + j0  →  Y = 1/R + j0 (G = 1/R, B = 0)'
  },
  hi: {
    title: 'सम्मिश्र प्रतिबाधा एवं प्रवेश्यता प्रयोगशाला',
    subtitle: 'प्रतिबाधा Z = R + jX (Ω) और प्रवेश्यता Y = G + jB (S) के व्युत्क्रम संबंध का अंतःक्रियात्मक विश्लेषण करें। देखें कि कैसे श्रेणी विरोध दोहरे सम्मिश्र तलों पर समानांतर धारा प्रवाह की सुगमता में परिवर्तित होता है।',
    resistanceLabel: 'प्रतिरोध R (Ω)',
    reactanceLabel: 'रिएक्टेंस X (Ω) [इंडक्टिव (+) / कैपेसिटिव (-)]',
    reset: 'डिफ़ॉल्ट रीसेट',

    // Metrics
    zRectMetric: 'प्रतिबाधा Z (आयताकार रूप)',
    zPolarMetric: 'प्रतिबाधा Z (ध्रुवीय रूप)',
    yRectMetric: 'प्रवेश्यता Y (आयताकार रूप)',
    yPolarMetric: 'प्रवेश्यता Y (ध्रुवीय रूप)',
    gMetric: 'चालकत्व G = Re(Y)',
    bMetric: 'ससेप्टेंस B = Im(Y)',
    reciprocalNote: 'Y = 1/Z = G + jB',

    // Titles
    zPlaneTitle: 'सम्मिश्र प्रतिबाधा तल (Z = R + jX)',
    yPlaneTitle: 'सम्मिश्र प्रवेश्यता तल (Y = G + jB)',
    conversionTitle: 'गणितीय रूपांतरण समीकरण',
    zeroZWarning: 'अपवाद स्थिति: Z = 0 + j0 Ω आदर्श शॉर्ट सर्किट दर्शाता है। प्रवेश्यता अनंत एवं अपरिभाषित है। कृपया अशून्य R या X चुनें।',

    // Sign conventions
    inductiveNote: 'इंडक्टिव लोड (X > 0): Z = R + jXL  →  Y = G - jBL (Y में ससेप्टेंस का चिह्न ऋणात्मक होता है)',
    capacitiveNote: 'कैपेसिटिव लोड (X < 0): Z = R - jXC  →  Y = G + jBC (Y में ससेप्टेंस का चिह्न धनात्मक होता है)',
    resistiveNote: 'विशुद्ध प्रतिरोधी (X = 0): Z = R + j0  →  Y = 1/R + j0 (G = 1/R, B = 0)'
  },
  bn: {
    title: 'জটিল ইম্পিড্যান্স ও অ্যাডমিট্যান্স ল্যাবরেটরি',
    subtitle: 'ইম্পিড্যান্স Z = R + jX (Ω) এবং অ্যাডমিট্যান্স Y = G + jB (S) এর পারস্পরিক সম্পর্কের বিশ্লেষণ। সিরিজ বাধা কীভাবে দ্বৈত জটিল তলে সমান্তরাল প্রবাহের সহজতায় রূপান্তরিত হয় তা নিরীক্ষণ করুন।',
    resistanceLabel: 'রোধ R (Ω)',
    reactanceLabel: 'রিঅ্যাকট্যান্স X (Ω) [ইন্ডাক্টিভ (+) / ক্যাপাসিটিভ (-)]',
    reset: 'ডিফল্ট রিসেট',

    // Metrics
    zRectMetric: 'ইম্পিড্যান্স Z (আয়তাকার রূপ)',
    zPolarMetric: 'ইম্পিড্যান্স Z (পোলার রূপ)',
    yRectMetric: 'অ্যাডমিট্যান্স Y (আয়তাকার রূপ)',
    yPolarMetric: 'অ্যাডমিট্যান্স Y (পোলার রূপ)',
    gMetric: 'কন্ডাক্ট্যান্স G = Re(Y)',
    bMetric: 'সাসেপ্ট্যান্স B = Im(Y)',
    reciprocalNote: 'Y = 1/Z = G + jB',

    // Titles
    zPlaneTitle: 'জটিল ইম্পিড্যান্স তল (Z = R + jX)',
    yPlaneTitle: 'জটিল অ্যাডমিট্যান্স তল (Y = G + jB)',
    conversionTitle: 'গাণিতিক রূপান্তর সমীকরণসমূহ',
    zeroZWarning: 'ব্যতিক্রম: Z = 0 + j0 Ω শর্ট সার্কিট নির্দেশ করে। অ্যাডমিট্যান্স অসীম ও অসংজ্ঞায়িত। অনুগ্রহ করে অশূন্য R বা X নির্বাচন করুন।',

    // Sign conventions
    inductiveNote: 'ইন্ডাক্টিভ লোড (X > 0): Z = R + jXL  →  Y = G - jBL (Y তে সাসেপ্ট্যান্স ঋণাত্মক চিহ্নে থাকে)',
    capacitiveNote: 'ক্যাপাসিটিভ লোড (X < 0): Z = R - jXC  →  Y = G + jBC (Y তে সাসেপ্ট্যান্স ধনাত্মক চিহ্নে থাকে)',
    resistiveNote: 'বিশুদ্ধ রোধীয় (X = 0): Z = R + j0  →  Y = 1/R + j0 (G = 1/R, B = 0)'
  }
};

export const ImpedanceAdmittanceAnimation: React.FC<ImpedanceAdmittanceAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const prefersReducedMotion = useReducedMotion();
  const baseId = useId();

  // Inputs
  const [resistance, setResistance] = useState<number>(30); // R in Ohms
  const [reactance, setReactance] = useState<number>(40); // X in Ohms (+ for inductive, - for capacitive)

  const handleReset = () => {
    setResistance(30);
    setReactance(40);
  };

  const R = resistance;
  const X = reactance;
  const denominator = R * R + X * X;

  const isZeroZ = denominator === 0;

  // Complex Impedance
  const Z_mag = Math.sqrt(denominator);
  const theta_Z_deg = !isZeroZ ? Math.atan2(X, R) * (180 / Math.PI) : 0;

  // Complex Admittance
  const G = !isZeroZ ? R / denominator : 0; // Siemens
  const B = !isZeroZ ? -X / denominator : 0; // Siemens (Note the negative sign!)
  const Y_mag = !isZeroZ ? 1 / Z_mag : 0;
  const theta_Y_deg = !isZeroZ ? -theta_Z_deg : 0;

  // Load classification
  let loadNote = t.resistiveNote;
  if (X > 0) loadNote = t.inductiveNote;
  else if (X < 0) loadNote = t.capacitiveNote;

  // Vector graphics calculations
  // Z Plane SVG scale (Max coordinate ~ 100 ohms)
  const zSvgSize = 240;
  const zCenter = zSvgSize / 2;
  const zScale = 90 / 100; // 100 ohms fits in 90px

  const zVecX = zCenter + R * zScale;
  const zVecY = zCenter - X * zScale; // SVG y is inverted

  // Y Plane SVG scale (Max Y ~ 0.1 Siemens or scale appropriately)
  const ySvgSize = 240;
  const yCenter = ySvgSize / 2;
  // Dynamic scaling for Y so vector is clearly visible
  const maxExpectedY = Math.max(0.01, Y_mag);
  const yScale = 85 / (maxExpectedY > 0 ? maxExpectedY * 1.3 : 0.05);

  const yVecX = yCenter + G * yScale;
  const yVecY = yCenter - B * yScale; // SVG y inverted

  return (
    <InteractiveSimulationCard
      title={t.title}
      subtitle={t.subtitle}
      badgeText={X > 0 ? 'Inductive Impedance (Z = R + jX)' : X < 0 ? 'Capacitive Impedance (Z = R - jX)' : 'Pure Resistance (Z = R)'}
    >
      <div className="space-y-6">
        {/* Zero Z Warning banner if R=0 and X=0 */}
        {isZeroZ && (
          <div className="p-3 bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 rounded-xl text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
            <span className="font-semibold">{t.zeroZWarning}</span>
          </div>
        )}

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* Z Rectangular */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.zRectMetric}</span>
            <div className="text-base font-extrabold text-blue-600 dark:text-blue-400 mt-0.5 font-mono">
              {R.toFixed(1)} {X >= 0 ? '+' : '-'} j{Math.abs(X).toFixed(1)} <span className="text-xs font-medium">Ω</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Z = R + jX</span>
          </div>

          {/* Z Polar */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.zPolarMetric}</span>
            <div className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 mt-0.5 font-mono">
              {Z_mag.toFixed(2)} ∠ {theta_Z_deg.toFixed(1)}° <span className="text-xs font-medium">Ω</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">|Z| = √(R² + X²)</span>
          </div>

          {/* Y Rectangular */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.yRectMetric}</span>
            <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5 font-mono">
              {!isZeroZ ? `${(G * 1000).toFixed(2)} ${B >= 0 ? '+' : '-'} j${Math.abs(B * 1000).toFixed(2)}` : 'Undefined'} <span className="text-xs font-medium">mS</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Y = G + jB</span>
          </div>

          {/* Y Polar */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.yPolarMetric}</span>
            <div className="text-base font-extrabold text-cyan-600 dark:text-cyan-400 mt-0.5 font-mono">
              {!isZeroZ ? `${(Y_mag * 1000).toFixed(2)} ∠ ${theta_Y_deg.toFixed(1)}°` : 'Undefined'} <span className="text-xs font-medium">mS</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">|Y| = 1/|Z| ∠ -θ</span>
          </div>

          {/* Conductance G */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.gMetric}</span>
            <div className="text-base font-extrabold text-amber-600 dark:text-amber-400 mt-0.5 font-mono">
              {(G * 1000).toFixed(2)} <span className="text-xs font-medium">mS</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">G = R / |Z|²</span>
          </div>

          {/* Susceptance B */}
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.bMetric}</span>
            <div className={`text-base font-extrabold mt-0.5 font-mono ${B >= 0 ? 'text-cyan-600 dark:text-cyan-400' : 'text-purple-600 dark:text-purple-400'}`}>
              {(B * 1000).toFixed(2)} <span className="text-xs font-medium">mS</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">B = -X / |Z|²</span>
          </div>
        </div>

        {/* Complex Plane Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Complex Impedance Plane */}
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-white space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                {t.zPlaneTitle}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                Units: Ohms (Ω)
              </span>
            </div>

            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 flex justify-center">
              <svg viewBox={`0 0 ${zSvgSize} ${zSvgSize}`} className="w-full max-w-[260px] h-52" aria-label="Complex Impedance Vector Plane">
                {/* Grid Lines */}
                <circle cx={zCenter} cy={zCenter} r={30} fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx={zCenter} cy={zCenter} r={60} fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx={zCenter} cy={zCenter} r={90} fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

                {/* Axes */}
                <line x1="10" y1={zCenter} x2={zSvgSize - 10} y2={zCenter} stroke="#475569" strokeWidth="1.5" />
                <line x1={zCenter} y1="10" x2={zCenter} y2={zSvgSize - 10} stroke="#475569" strokeWidth="1.5" />

                <text x={zSvgSize - 15} y={zCenter - 5} fill="#94a3b8" fontSize="9" fontWeight="bold">+R</text>
                <text x={zCenter + 5} y="18" fill="#94a3b8" fontSize="9" fontWeight="bold">+jX</text>
                <text x={zCenter + 5} y={zSvgSize - 8} fill="#94a3b8" fontSize="9" fontWeight="bold">-jX</text>

                {/* Resistance component line */}
                <line x1={zCenter} y1={zCenter} x2={zVecX} y2={zCenter} stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
                {/* Reactance component line */}
                <line x1={zVecX} y1={zCenter} x2={zVecX} y2={zVecY} stroke="#a855f7" strokeWidth="2" strokeDasharray="3 3" />

                {/* Impedance Vector Z */}
                {!isZeroZ && (
                  <g>
                    <line x1={zCenter} y1={zCenter} x2={zVecX} y2={zVecY} stroke="#38bdf8" strokeWidth="3" />
                    <circle cx={zVecX} cy={zVecY} r="4" fill="#38bdf8" />
                    <text x={zVecX + (R >= 0 ? 8 : -20)} y={zVecY} fill="#38bdf8" fontSize="10" fontWeight="bold">
                      Z ({Z_mag.toFixed(1)}Ω)
                    </text>
                    <text x={zCenter + 15} y={zCenter + (X >= 0 ? -8 : 14)} fill="#fbbf24" fontSize="9" fontWeight="bold">
                      θ = {theta_Z_deg.toFixed(1)}°
                    </text>
                  </g>
                )}
              </svg>
            </div>
          </div>

          {/* Complex Admittance Plane */}
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-white space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                {t.yPlaneTitle}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                Units: Siemens (S / mS)
              </span>
            </div>

            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 flex justify-center">
              <svg viewBox={`0 0 ${ySvgSize} ${ySvgSize}`} className="w-full max-w-[260px] h-52" aria-label="Complex Admittance Vector Plane">
                <circle cx={yCenter} cy={yCenter} r={30} fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx={yCenter} cy={yCenter} r={60} fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx={yCenter} cy={yCenter} r={90} fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

                {/* Axes */}
                <line x1="10" y1={yCenter} x2={ySvgSize - 10} y2={yCenter} stroke="#475569" strokeWidth="1.5" />
                <line x1={yCenter} y1="10" x2={yCenter} y2={ySvgSize - 10} stroke="#475569" strokeWidth="1.5" />

                <text x={ySvgSize - 15} y={yCenter - 5} fill="#94a3b8" fontSize="9" fontWeight="bold">+G</text>
                <text x={yCenter + 5} y="18" fill="#94a3b8" fontSize="9" fontWeight="bold">+jB</text>
                <text x={yCenter + 5} y={ySvgSize - 8} fill="#94a3b8" fontSize="9" fontWeight="bold">-jB</text>

                {/* Conductance component line */}
                <line x1={yCenter} y1={yCenter} x2={yVecX} y2={yCenter} stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
                {/* Susceptance component line */}
                <line x1={yVecX} y1={yCenter} x2={yVecX} y2={yVecY} stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />

                {/* Admittance Vector Y */}
                {!isZeroZ && (
                  <g>
                    <line x1={yCenter} y1={yCenter} x2={yVecX} y2={yVecY} stroke="#10b981" strokeWidth="3" />
                    <circle cx={yVecX} cy={yVecY} r="4" fill="#10b981" />
                    <text x={yVecX + 8} y={yVecY} fill="#10b981" fontSize="10" fontWeight="bold">
                      Y ({(Y_mag * 1000).toFixed(1)}mS)
                    </text>
                    <text x={yCenter + 15} y={yCenter + (B >= 0 ? -8 : 14)} fill="#22d3ee" fontSize="9" fontWeight="bold">
                      -θ = {theta_Y_deg.toFixed(1)}°
                    </text>
                  </g>
                )}
              </svg>
            </div>
          </div>
        </div>

        {/* Interactive Controls (Hidden in Print) */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 print:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
              <Sliders className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Impedance Parameter Controls</span>
            </div>
            <button
              type="button"
              id={`${baseId}-reset-btn`}
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-lg border border-slate-300 dark:border-slate-600 transition-colors shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t.reset}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Resistance Input */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <label htmlFor={`${baseId}-resistance-slider`}>{t.resistanceLabel}</label>
                <span className="font-bold text-amber-600 dark:text-amber-400">{resistance} Ω</span>
              </div>
              <input
                id={`${baseId}-resistance-slider`}
                type="range"
                min="0"
                max="100"
                step="5"
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
                aria-label={t.resistanceLabel}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>

            {/* Reactance Input (-100 to +100) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <label htmlFor={`${baseId}-reactance-slider`}>{t.reactanceLabel}</label>
                <span className={`font-bold ${reactance >= 0 ? 'text-purple-600 dark:text-purple-400' : 'text-cyan-600 dark:text-cyan-400'}`}>
                  {reactance > 0 ? `+${reactance}` : reactance} Ω
                </span>
              </div>
              <input
                id={`${baseId}-reactance-slider`}
                type="range"
                min="-100"
                max="100"
                step="5"
                value={reactance}
                onChange={(e) => setReactance(Number(e.target.value))}
                aria-label={t.reactanceLabel}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          </div>
        </div>

        {/* Mathematical Conversion Reference Card */}
        <div className="p-4 bg-slate-100 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
          <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ArrowRightLeft className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            {t.conversionTitle}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-slate-700 dark:text-slate-300">
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-cyan-600 dark:text-cyan-400 block font-sans">Z → Y (Rectangular Conversion):</span>
              <p>G = R / (R² + X²) = R / |Z|²</p>
              <p>B = -X / (R² + X²) = -X / |Z|²</p>
              <p>Y = G + jB = 1 / Z</p>
            </div>
            <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 block font-sans">Y → Z (Inverse Conversion):</span>
              <p>R = G / (G² + B²) = G / |Y|²</p>
              <p>X = -B / (G² + B²) = -B / |Y|²</p>
              <p>Z = R + jX = 1 / Y</p>
            </div>
          </div>
          <div className="text-[11px] text-slate-600 dark:text-slate-400 pt-1 font-medium">
            {loadNote}
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
