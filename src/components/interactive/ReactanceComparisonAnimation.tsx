import React, { useState } from 'react';
import { Sliders, RotateCcw, Activity, Zap, Compass, CheckCircle2, AlertCircle, ArrowRightLeft, Sparkles } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ReactanceComparisonAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Inductive vs. Capacitive Reactance Comparison Lab',
    subtitle: 'Interactively analyze frequency-dependent opposition XL = 2πfL and XC = 1/(2πfC), compare impedance vectors, and observe the educational reactance crossover point.',
    freqLabel: 'AC Frequency (f)',
    indLabel: 'Inductance (L)',
    capLabel: 'Capacitance (C)',
    reset: 'Reset Defaults',
    xlMetric: 'Inductive Reactance XL',
    xcMetric: 'Capacitive Reactance XC',
    netReactanceMetric: 'Net Reactance Xnet (XL - XC)',
    crossoverFreqMetric: 'Crossover Frequency (f₀)',
    stateMetric: 'Dominant AC Behavior',
    zlMetric: 'Inductive Impedance ZL',
    zcMetric: 'Capacitive Impedance ZC',
    graphTitle: 'Dual Frequency Response: XL (Linear) vs. XC (Hyperbolic)',
    legendXL: 'XL = 2πfL (Proportional to f)',
    legendXC: 'XC = 1/(2πfC) (Inversely Proportional to f)',
    legendOperating: 'Current Operating Frequency',
    legendCrossover: 'Equal Reactance Crossover (f₀)',
    crossoverNoteTitle: 'Equal Reactance Crossover Point',
    crossoverNoteText: 'At f₀ = 1 / (2π√LC), the opposing reactances are equal (XL = XC). In series circuits, their +j and -j reactances cancel completely—a foundational principle of AC resonance that will be explored thoroughly in Lesson 14.',
    stateCapacitive: 'Capacitive Dominant (XC > XL): Net reactance is negative (-j), current leads voltage.',
    stateResonant: 'Equal Reactance (XL = XC): Reactances balance exactly, net opposition is purely real/resistive.',
    stateInductive: 'Inductive Dominant (XL > XC): Net reactance is positive (+j), current lags voltage.',
    comparisonTableTitle: 'Quick Reactance Comparison Reference',
    colParameter: 'Parameter / Characteristic',
    colInductive: 'Inductive Reactance (XL)',
    colCapacitive: 'Capacitive Reactance (XC)',
    rowFormula: 'Mathematical Formula',
    rowFreqDep: 'Frequency Dependence',
    rowDCBehavior: 'DC Behavior (f = 0 Hz)',
    rowHighFreq: 'High Frequency (f → ∞)',
    rowComplexZ: 'Complex Impedance',
    rowPhaseShift: 'Current Phase Shift',
    formulaCalloutTitle: 'Reactance Governing Equations',
    formulaCalloutText: 'XL = 2πfL (Ω)  |  XC = 1 / (2πfC) (Ω)  |  ZL = +jXL  |  ZC = -jXC  |  Xnet = XL - XC  |  f₀ = 1 / (2π√(LC))',
    formulaText: 'XL = 2πfL   |   XC = 1 / (2πfC)   |   ZL = +jXL   |   ZC = -jXC   |   f₀ = 1 / (2π√LC)'
  },
  hi: {
    title: 'इंडक्टिव बनाम कैपेसिटिव रिएक्टेंस तुलनात्मक लैब',
    subtitle: 'आवृत्ति-आधारित विरोध XL = 2πfL एवं XC = 1/(2πfC) का परस्पर विश्लेषण करें, प्रतिबाधा सदिशों की तुलना करें और शैक्षणिक क्रॉसओवर बिंदु का अवलोकन करें।',
    freqLabel: 'एसी आवृत्ति (f)',
    indLabel: 'प्रेरकत्व (L)',
    capLabel: 'धारिता (C)',
    reset: 'डिफ़ॉल्ट रीसेट',
    xlMetric: 'इंडक्टिव रिएक्टेंस XL',
    xcMetric: 'कैपेसिटिव रिएक्टेंस XC',
    netReactanceMetric: 'शुद्ध रिएक्टेंस Xnet (XL - XC)',
    crossoverFreqMetric: 'क्रॉसओवर आवृत्ति (f₀)',
    stateMetric: 'प्रमुख एसी व्यवहार',
    zlMetric: 'इंडक्टिव प्रतिबाधा ZL',
    zcMetric: 'कैपेसिटिव प्रतिबाधा ZC',
    graphTitle: 'द्वि-आवृत्ति अनुक्रिया: XL (रैखिक) बनाम XC (व्युत्क्रमानुपाती)',
    legendXL: 'XL = 2πfL (आवृत्ति के समानुपाती)',
    legendXC: 'XC = 1/(2πfC) (आवृत्ति के व्युत्क्रमानुपाती)',
    legendOperating: 'वर्तमान कार्यशील आवृत्ति',
    legendCrossover: 'समान रिएक्टेंस क्रॉसओवर (f₀)',
    crossoverNoteTitle: 'समान रिएक्टेंस क्रॉसओवर बिंदु',
    crossoverNoteText: 'f₀ = 1 / (2π√LC) पर दोनों विपरीत रिएक्टेंस बराबर हो जाते हैं (XL = XC)। सीरीज परिपथ में +j और -j रिएक्टेंस एक दूसरे को निरस्त कर देते हैं—यह एसी अनुनाद (Resonance) का आधार है जिसका विस्तृत अध्ययन अध्याय 5 के पाठ 14 में किया जाएगा।',
    stateCapacitive: 'कैपेसिटिव प्रधान (XC > XL): शुद्ध रिएक्टेंस ऋणात्मक (-j) है, धारा वोल्टेज से लीड करती है।',
    stateResonant: 'समान रिएक्टेंस (XL = XC): दोनों रिएक्टेंस संतुलित हैं, शुद्ध परिपथ व्यवहार पूरी तरह प्रतिरोधी होता है।',
    stateInductive: 'इंडक्टिव प्रधान (XL > XC): शुद्ध रिएक्टेंस धनात्मक (+j) है, धारा वोल्टेज से लैग करती है।',
    comparisonTableTitle: 'रिएक्टेंस तुलना संदर्भ तालिका',
    colParameter: 'विशेषता / पैरामीटर',
    colInductive: 'इंडक्टिव रिएक्टेंस (XL)',
    colCapacitive: 'कैपेसिटिव रिएक्टेंस (XC)',
    rowFormula: 'गणितीय सूत्र',
    rowFreqDep: 'आवृत्ति निर्भरता',
    rowDCBehavior: 'डीसी व्यवहार (f = 0 Hz)',
    rowHighFreq: 'उच्च आवृत्ति (f → ∞)',
    rowComplexZ: 'सम्मिश्र प्रतिबाधा',
    rowPhaseShift: 'धारा फेज विस्थापन',
    formulaCalloutTitle: 'रिएक्टेंस के मूल सूत्र',
    formulaCalloutText: 'XL = 2πfL (Ω)  |  XC = 1 / (2πfC) (Ω)  |  ZL = +jXL  |  ZC = -jXC  |  Xnet = XL - XC  |  f₀ = 1 / (2π√(LC))',
    formulaText: 'XL = 2πfL   |   XC = 1 / (2πfC)   |   ZL = +jXL   |   ZC = -jXC   |   f₀ = 1 / (2π√LC)'
  },
  bn: {
    title: 'ইন্ডাক্টিভ বনাম ক্যাপাসিটিভ রিঅ্যাকট্যান্স তুলনামূলক ল্যাব',
    subtitle: 'ফ্রিকোয়েন্সি-নির্ভর বাধা XL = 2πfL এবং XC = 1/(2πfC) এর তুলনামূলক বিশ্লেষণ, ইম্পিড্যান্স ভেক্টর নিরীক্ষণ এবং শিক্ষামূলক রিঅ্যাকট্যান্স ক্রসওভার পয়েন্ট অনুধাবন করুন।',
    freqLabel: 'এসি কম্পাঙ্ক (f)',
    indLabel: 'ইন্ডাকট্যান্স (L)',
    capLabel: 'ক্যাপাসিট্যান্স (C)',
    reset: 'ডিফল্ট রিসেট',
    xlMetric: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL',
    xcMetric: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC',
    netReactanceMetric: 'নেট রিঅ্যাকট্যান্স Xnet (XL - XC)',
    crossoverFreqMetric: 'ক্রসওভার কম্পাঙ্ক (f₀)',
    stateMetric: 'প্রধান এসি আচরণ',
    zlMetric: 'ইন্ডাক্টিভ ইম্পিড্যান্স ZL',
    zcMetric: 'ক্যাপাসিটিভ ইম্পিড্যান্স ZC',
    graphTitle: 'দ্বৈত ফ্রিকোয়েন্সি রেসপন্স: XL (রৈখিক) বনাম XC (হাইপারবোলিক)',
    legendXL: 'XL = 2πfL (f এর সমানুপাতিক)',
    legendXC: 'XC = 1/(2πfC) (f এর ব্যস্তানুপাতিক)',
    legendOperating: 'বর্তমান অপারেটিং ফ্রিকোয়েন্সি',
    legendCrossover: 'সমান রিঅ্যাকট্যান্স ক্রসওভার (f₀)',
    crossoverNoteTitle: 'সমান রিঅ্যাকট্যান্স ক্রসওভার বিন্দু',
    crossoverNoteText: 'f₀ = 1 / (2π√LC) কম্পাঙ্কে বিপরীতমুখী রিঅ্যাকট্যান্সদ্বয় সমান হয় (XL = XC)। সিরিজ সার্কিটে +j ও -j রিঅ্যাকট্যান্স একে অপরকে প্রশমিত করে—এটি এসি রেজোন্যান্সের মূল ভিত্তি যা পাঠ ১৪-এ বিস্তারিত আলোচিত হবে।',
    stateCapacitive: 'ক্যাপাসিটিভ প্রধান (XC > XL): নেট রিঅ্যাকট্যান্স ঋণাত্মক (-j), কারেন্ট ভোল্টেজের চেয়ে এগিয়ে থাকে।',
    stateResonant: 'সমান রিঅ্যাকট্যান্স (XL = XC): রিঅ্যাকট্যান্স পরস্পর সমান ও বিপরীত, নেট প্রভাব সম্পূর্ণরূপে রোধীয়।',
    stateInductive: 'ইন্ডাক্টিভ প্রধান (XL > XC): নেট রিঅ্যাকট্যান্স ধনাত্মক (+j), কারেন্ট ভোল্টেজের চেয়ে পিছিয়ে থাকে।',
    comparisonTableTitle: 'রিঅ্যাকট্যান্স তুলনামূলক চার্ট',
    colParameter: 'বৈশিষ্ট্য / প্যারামিটার',
    colInductive: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্স (XL)',
    colCapacitive: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স (XC)',
    rowFormula: 'গাণিতিক সূত্র',
    rowFreqDep: 'ফ্রিকোয়েন্সি নির্ভরতা',
    rowDCBehavior: 'ডিসি আচরণ (f = ০ Hz)',
    rowHighFreq: 'উচ্চ কম্পাঙ্ক (f → ∞)',
    rowComplexZ: 'জটিল ইম্পিড্যান্স',
    rowPhaseShift: 'কারেন্টের ফেজ পার্থক্য',
    formulaCalloutTitle: 'রিঅ্যাকট্যান্সের মূল সূত্রসমূহ',
    formulaCalloutText: 'XL = 2πfL (Ω)  |  XC = 1 / (2πfC) (Ω)  |  ZL = +jXL  |  ZC = -jXC  |  Xnet = XL - XC  |  f₀ = 1 / (2π√(LC))',
    formulaText: 'XL = 2πfL   |   XC = 1 / (2πfC)   |   ZL = +jXL   |   ZC = -jXC   |   f₀ = 1 / (2π√LC)'
  }
};

export const ReactanceComparisonAnimation: React.FC<ReactanceComparisonAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  // Control state
  const [freq, setFreq] = useState<number>(50); // Hz
  const [inductanceMh, setInductanceMh] = useState<number>(100); // mH
  const [capacitanceUf, setCapacitanceUf] = useState<number>(50); // uF

  // Safe Guarded Mathematical Values
  const safeFreq = Math.max(5, freq);
  const inductanceH = Math.max(0.001, inductanceMh / 1000);
  const capacitanceF = Math.max(1e-7, capacitanceUf * 1e-6);

  const xl = 2 * Math.PI * safeFreq * inductanceH;
  const xc = 1 / (2 * Math.PI * safeFreq * capacitanceF);
  const netX = xl - xc;

  // Crossover frequency where XL = XC: f0 = 1 / (2*pi*sqrt(L*C))
  const lcProduct = inductanceH * capacitanceF;
  const f0 = lcProduct > 0 ? 1 / (2 * Math.PI * Math.sqrt(lcProduct)) : 0;
  const xlAtF0 = 2 * Math.PI * f0 * inductanceH;

  // Determine current operating state
  const deltaF = Math.abs(safeFreq - f0);
  const isAtCrossover = deltaF < (f0 * 0.04); // Within 4%
  const isInductiveDominant = safeFreq > f0 && !isAtCrossover;
  const isCapacitiveDominant = safeFreq < f0 && !isAtCrossover;

  const handleReset = () => {
    setFreq(50);
    setInductanceMh(100);
    setCapacitanceUf(50);
  };

  // Dual Curve Graph Dimensions
  const graphWidth = 560;
  const graphHeight = 220;
  const paddingLeft = 45;
  const paddingRight = 30;
  const paddingTop = 20;
  const paddingBottom = 35;

  const plotWidth = graphWidth - paddingLeft - paddingRight;
  const plotHeight = graphHeight - paddingTop - paddingBottom;

  const graphMinF = 10;
  const graphMaxF = Math.max(250, Math.ceil(f0 * 1.8 / 50) * 50);
  const graphMaxY = Math.max(200, Math.ceil(Math.max(xl, xc, xlAtF0 * 1.8) / 50) * 50);

  // Generate paths for XL and XC
  const numSteps = 80;
  let xlCurveD = '';
  let xcCurveD = '';

  for (let i = 0; i <= numSteps; i++) {
    const fStep = graphMinF + (i / numSteps) * (graphMaxF - graphMinF);
    const xlVal = 2 * Math.PI * fStep * inductanceH;
    const xcVal = 1 / (2 * Math.PI * fStep * capacitanceF);

    const xPos = paddingLeft + ((fStep - graphMinF) / (graphMaxF - graphMinF)) * plotWidth;
    
    // Normalized Y positions (inverted: top is high value)
    const yNormXL = Math.max(0, Math.min(1, xlVal / graphMaxY));
    const yPosXL = (paddingTop + plotHeight) - yNormXL * plotHeight;

    const yNormXC = Math.max(0, Math.min(1, xcVal / graphMaxY));
    const yPosXC = (paddingTop + plotHeight) - yNormXC * plotHeight;

    if (i === 0) {
      xlCurveD = `M ${xPos} ${yPosXL}`;
      xcCurveD = `M ${xPos} ${yPosXC}`;
    } else {
      xlCurveD += ` L ${xPos} ${yPosXL}`;
      xcCurveD += ` L ${xPos} ${yPosXC}`;
    }
  }

  // Operating Frequency Marker
  const curFracF = Math.max(0, Math.min(1, (safeFreq - graphMinF) / (graphMaxF - graphMinF)));
  const curX = paddingLeft + curFracF * plotWidth;
  const curY_XL = (paddingTop + plotHeight) - Math.max(0, Math.min(1, xl / graphMaxY)) * plotHeight;
  const curY_XC = (paddingTop + plotHeight) - Math.max(0, Math.min(1, xc / graphMaxY)) * plotHeight;

  // Crossover Point Marker
  const f0Frac = (f0 - graphMinF) / (graphMaxF - graphMinF);
  const f0_X = f0Frac >= 0 && f0Frac <= 1 ? paddingLeft + f0Frac * plotWidth : null;
  const f0_Y = (paddingTop + plotHeight) - Math.max(0, Math.min(1, xlAtF0 / graphMaxY)) * plotHeight;

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={t.formulaCalloutTitle}
      calloutText={t.formulaCalloutText}
      formulaText={t.formulaText}
    >
      <div className="space-y-6">
        {/* TOP CONTROLS & COMPARATIVE METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Sliders className="w-4 h-4" /> Circuit Parameters
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-1 bg-slate-800/80 rounded"
                aria-label="Reset parameters"
              >
                <RotateCcw className="w-3 h-3" /> {t.reset}
              </button>
            </div>

            {/* Slider 1: Frequency */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <label htmlFor="react-f-slider" className="text-slate-300 font-semibold">{t.freqLabel}</label>
                <span className="text-amber-400 font-bold">{freq} Hz</span>
              </div>
              <input
                id="react-f-slider"
                type="range"
                min="10"
                max="300"
                step="2"
                value={freq}
                onChange={(e) => setFreq(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label="Adjust AC Frequency"
              />
            </div>

            {/* Slider 2: Inductance (L) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <label htmlFor="react-l-slider" className="text-slate-300 font-semibold">{t.indLabel}</label>
                <span className="text-emerald-400 font-bold">{inductanceMh} mH ({inductanceH.toFixed(3)} H)</span>
              </div>
              <input
                id="react-l-slider"
                type="range"
                min="10"
                max="500"
                step="10"
                value={inductanceMh}
                onChange={(e) => setInductanceMh(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Adjust Inductance"
              />
            </div>

            {/* Slider 3: Capacitance (C) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <label htmlFor="react-c-slider" className="text-slate-300 font-semibold">{t.capLabel}</label>
                <span className="text-sky-400 font-bold">{capacitanceUf} µF</span>
              </div>
              <input
                id="react-c-slider"
                type="range"
                min="5"
                max="200"
                step="5"
                value={capacitanceUf}
                onChange={(e) => setCapacitanceUf(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-label="Adjust Capacitance"
              />
            </div>

            {/* Crossover Quick-Jump Button */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Equal Reactance f₀:</span>
              <button
                type="button"
                onClick={() => setFreq(Math.round(f0))}
                className="px-2.5 py-1 text-xs font-mono font-bold rounded bg-purple-500/20 text-purple-300 border border-purple-500/40 hover:bg-purple-500/30 transition-all flex items-center gap-1"
                aria-label="Jump to crossover frequency"
              >
                <Sparkles className="w-3 h-3 text-purple-400" /> Snap to f₀ = {f0.toFixed(1)} Hz
              </button>
            </div>
          </div>

          {/* Comparative Metrics Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {/* XL Card */}
            <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.xlMetric}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-emerald-400">{xl.toFixed(2)}</span>
                <span className="text-xs text-slate-400 ml-1">Ω</span>
              </div>
              <span className="text-[10px] text-emerald-300/80 font-mono">ZL = +j {xl.toFixed(1)} Ω</span>
            </div>

            {/* XC Card */}
            <div className="bg-slate-900/90 border border-sky-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.xcMetric}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-sky-400">{xc.toFixed(2)}</span>
                <span className="text-xs text-slate-400 ml-1">Ω</span>
              </div>
              <span className="text-[10px] text-sky-300/80 font-mono">ZC = -j {xc.toFixed(1)} Ω</span>
            </div>

            {/* Net Reactance Card */}
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.netReactanceMetric}</span>
              <div className="my-1">
                <span className={`text-xl font-bold font-mono ${netX > 0 ? 'text-emerald-400' : netX < 0 ? 'text-sky-400' : 'text-purple-400'}`}>
                  {netX > 0 ? `+${netX.toFixed(1)}` : netX.toFixed(1)}
                </span>
                <span className="text-xs text-slate-400 ml-1">Ω</span>
              </div>
              <span className="text-[10px] text-amber-300/80 font-mono">
                {netX > 0 ? 'Net Inductive (+j)' : netX < 0 ? 'Net Capacitive (-j)' : 'Net Zero (Cancel)'}
              </span>
            </div>

            {/* Crossover Frequency f0 */}
            <div className="bg-slate-900/90 border border-purple-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.crossoverFreqMetric}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-purple-400">{f0.toFixed(1)}</span>
                <span className="text-xs text-slate-400 ml-1">Hz</span>
              </div>
              <span className="text-[10px] text-purple-300/80 font-mono">XL = XC = {xlAtF0.toFixed(1)} Ω</span>
            </div>

            {/* Ratio XL / XC */}
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">Ratio (XL / XC)</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-slate-200">{(xc > 0 ? xl / xc : 0).toFixed(3)}</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">{xl > xc ? 'XL Dominates' : xl < xc ? 'XC Dominates' : 'Unity (1.000)'}</span>
            </div>

            {/* Operating State Status Badge */}
            <div className={`border rounded-xl p-3 flex flex-col justify-between ${
              isAtCrossover
                ? 'bg-purple-950/30 border-purple-500/40 text-purple-300'
                : isInductiveDominant
                ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                : 'bg-sky-950/30 border-sky-500/40 text-sky-300'
            }`}>
              <span className="text-[11px] font-mono uppercase tracking-wide">{t.stateMetric}</span>
              <div className="my-1 font-bold text-sm flex items-center gap-1.5">
                {isAtCrossover ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    <span>Equal (XL = XC)</span>
                  </>
                ) : isInductiveDominant ? (
                  <>
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span>Inductive (XL &gt; XC)</span>
                  </>
                ) : (
                  <>
                    <ArrowRightLeft className="w-4 h-4 text-sky-400" />
                    <span>Capacitive (XC &gt; XL)</span>
                  </>
                )}
              </div>
              <span className="text-[10px] font-mono">
                {isAtCrossover ? 'Phase φ = 0°' : isInductiveDominant ? 'Current lags (φ < 0)' : 'Current leads (φ > 0)'}
              </span>
            </div>
          </div>
        </div>

        {/* MIDDLE: DUAL FREQUENCY RESPONSE GRAPH */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
            <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" /> {t.graphTitle}
            </span>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-3 h-0.5 bg-emerald-400 inline-block"></span> {t.legendXL}
              </span>
              <span className="text-sky-400 flex items-center gap-1">
                <span className="w-3 h-0.5 bg-sky-400 inline-block"></span> {t.legendXC}
              </span>
              <span className="text-purple-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-400 inline-block"></span> {t.legendCrossover}
              </span>
              <span className="text-amber-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span> {t.legendOperating}
              </span>
            </div>
          </div>

          {/* SVG Canvas for Dual Response Curves */}
          <div className="w-full overflow-x-auto">
            <svg viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="w-full min-w-[500px] h-56">
              {/* Coordinate Grid Axes */}
              <line x1={paddingLeft} y1={paddingTop + plotHeight} x2={graphWidth - paddingRight} y2={paddingTop + plotHeight} stroke="#475569" strokeWidth="1.5" />
              <line x1={paddingLeft} y1={paddingTop} x2={paddingLeft} y2={paddingTop + plotHeight} stroke="#475569" strokeWidth="1.5" />

              {/* Axis Labels */}
              <text x={graphWidth - paddingRight} y={paddingTop + plotHeight + 20} textAnchor="end" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">
                Frequency f (Hz) →
              </text>
              <text x={paddingLeft - 8} y={paddingTop + 6} textAnchor="end" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">
                Reactance X (Ω) ↑
              </text>

              {/* Grid ticks for frequency */}
              {[50, 100, 150, 200, 250, 300].map((fTick) => {
                if (fTick > graphMaxF) return null;
                const xTick = paddingLeft + ((fTick - graphMinF) / (graphMaxF - graphMinF)) * plotWidth;
                return (
                  <g key={fTick}>
                    <line x1={xTick} y1={paddingTop} x2={xTick} y2={paddingTop + plotHeight} stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                    <text x={xTick} y={paddingTop + plotHeight + 14} textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">
                      {fTick}
                    </text>
                  </g>
                );
              })}

              {/* Reactance Curves */}
              <path d={xlCurveD} fill="none" stroke="#10b981" strokeWidth="2.5" />
              <path d={xcCurveD} fill="none" stroke="#38bdf8" strokeWidth="2.5" />

              {/* Crossover Line and Marker (f0) */}
              {f0_X !== null && (
                <g>
                  <line x1={f0_X} y1={paddingTop} x2={f0_X} y2={paddingTop + plotHeight} stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx={f0_X} cy={f0_Y} r="5" fill="#c084fc" stroke="#0f172a" strokeWidth="1.5" />
                  <text x={f0_X + 6} y={f0_Y - 8} fill="#c084fc" fontSize="8" fontWeight="bold" fontFamily="monospace">
                    f₀={f0.toFixed(1)}Hz (XL=XC={xlAtF0.toFixed(1)}Ω)
                  </text>
                </g>
              )}

              {/* Current Operating Frequency Vertical Guide */}
              <line x1={curX} y1={paddingTop} x2={curX} y2={paddingTop + plotHeight} stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 2" />
              
              {/* XL Operating Dot */}
              <circle cx={curX} cy={curY_XL} r="4.5" fill="#10b981" stroke="#0f172a" strokeWidth="1.5" />
              <text x={curX + 6} y={curY_XL + 3} fill="#10b981" fontSize="8" fontWeight="bold" fontFamily="monospace">
                XL={xl.toFixed(1)}Ω
              </text>

              {/* XC Operating Dot */}
              <circle cx={curX} cy={curY_XC} r="4.5" fill="#38bdf8" stroke="#0f172a" strokeWidth="1.5" />
              <text x={curX + 6} y={curY_XC + 3} fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="monospace">
                XC={xc.toFixed(1)}Ω
              </text>
            </svg>
          </div>

          {/* Educational Callout on Crossover & Behavior */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-slate-300 space-y-1">
              <span className="font-bold text-amber-300 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" /> Current Frequency State: {safeFreq} Hz
              </span>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                {isAtCrossover ? t.stateResonant : isInductiveDominant ? t.stateInductive : t.stateCapacitive}
              </p>
            </div>

            <div className="p-3 bg-slate-900/90 border border-purple-500/30 rounded-lg text-xs text-slate-300 space-y-1">
              <span className="font-bold text-purple-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> {t.crossoverNoteTitle}
              </span>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                {t.crossoverNoteText}
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM: COMPREHENSIVE COMPARISON TABLE */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" /> {t.comparisonTableTitle}
          </span>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400">
                  <th className="py-2 px-3">{t.colParameter}</th>
                  <th className="py-2 px-3 text-emerald-400">{t.colInductive}</th>
                  <th className="py-2 px-3 text-sky-400">{t.colCapacitive}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300 text-[11px]">
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-400">{t.rowFormula}</td>
                  <td className="py-2 px-3 text-emerald-300">XL = 2πfL = ωL</td>
                  <td className="py-2 px-3 text-sky-300">XC = 1 / (2πfC) = 1 / (ωC)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-400">{t.rowFreqDep}</td>
                  <td className="py-2 px-3 text-emerald-300">Directly Proportional (XL ∝ f)</td>
                  <td className="py-2 px-3 text-sky-300">Inversely Proportional (XC ∝ 1/f)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-400">{t.rowDCBehavior}</td>
                  <td className="py-2 px-3 text-emerald-300">XL = 0 Ω (Short Circuit to DC)</td>
                  <td className="py-2 px-3 text-sky-300">XC = ∞ Ω (Open Circuit / Blocks DC)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-400">{t.rowHighFreq}</td>
                  <td className="py-2 px-3 text-emerald-300">XL → ∞ (Blocks High Frequency)</td>
                  <td className="py-2 px-3 text-sky-300">XC → 0 Ω (Passes High Frequency)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-400">{t.rowComplexZ}</td>
                  <td className="py-2 px-3 text-emerald-300">ZL = +j XL = XL ∠ +90°</td>
                  <td className="py-2 px-3 text-sky-300">ZC = -j XC = XC ∠ -90°</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-semibold text-slate-400">{t.rowPhaseShift}</td>
                  <td className="py-2 px-3 text-emerald-300">Current lags voltage by 90° (φ = -90°)</td>
                  <td className="py-2 px-3 text-sky-300">Current leads voltage by 90° (φ = +90°)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
