import React, { useState, useId } from 'react';
import { Sliders, RotateCcw, Activity, Zap, Radio, CheckCircle2, TrendingUp, Filter, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ResonanceQBandwidthAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Resonance, Q-Factor & Bandwidth Laboratory',
    subtitle: 'Explore the mathematical and practical relationships between resonant frequency (f₀), quality factor (Q), half-power frequencies (f₁, f₂), -3dB cutoff points, and circuit selectivity.',
    rLabel: 'Series Resistance R (Ω)',
    lLabel: 'Inductance L (mH)',
    cLabel: 'Capacitance C (µF)',
    vLabel: 'Source Voltage V (V)',
    reset: 'Reset Defaults',

    // Selectivity presets
    presets: 'Selectivity Presets',
    presetHighQ: 'High Q (Sharp / Narrow Band)',
    presetMediumQ: 'Medium Q (Standard Tuner)',
    presetLowQ: 'Low Q (Broadband Filter)',

    // Tabs
    tabCurve: 'Half-Power Resonance Curve',
    tabCalculations: 'Detailed Mathematical Formulations',
    tabSelectivity: 'Selectivity & Damping',

    // Key metrics
    f0: 'Resonant Frequency (f₀)',
    qFactor: 'Quality Factor (Q₀)',
    bandwidth: 'Bandwidth (BW = Δf)',
    f1: 'Lower Half-Power Cutoff (f₁)',
    f2: 'Upper Half-Power Cutoff (f₂)',
    peakCurrent: 'Peak Resonant Current (I₀)',
    halfPowerCurrent: 'Half-Power Current (0.707 I₀)',
    selectivity: 'Circuit Selectivity Rating',

    summaryTitle: 'Governing Bandwidth and Q-Factor Equations',
    summaryText: 'f₀ = 1/(2π√LC)  |  Q = (ω₀L)/R = (1/R)√(L/C) = f₀/BW  |  BW = f₂ - f₁ = R/(2πL)  |  f₁ ≈ f₀ - BW/2, f₂ ≈ f₀ + BW/2  |  f₀ = √(f₁ · f₂)'
  },
  hi: {
    title: 'अनुनाद, Q-फैक्टर एवं बैंडविड्थ प्रयोगशाला',
    subtitle: 'अनुनादी आवृत्ति (f₀), गुणवत्ता कारक (Q), अर्ध-शक्ति आवृत्तियों (f₁, f₂), -3dB कटऑफ बिंदुओं एवं परिपथ चयनात्मकता (Selectivity) के संबंधों का व्यावहारिक विश्लेषण करें।',
    rLabel: 'सीरीज प्रतिरोध R (Ω)',
    lLabel: 'प्रेरकत्व L (mH)',
    cLabel: 'धारिता C (µF)',
    vLabel: 'स्रोत वोल्टेज V (V)',
    reset: 'डिफ़ॉल्ट रीसेट',

    presets: 'चयनात्मकता प्रीसेट',
    presetHighQ: 'उच्च Q (तीक्ष्ण / संकीर्ण बैंड)',
    presetMediumQ: 'मध्यम Q (मानक ट्यूनर)',
    presetLowQ: 'निम्न Q (ब्रॉडबैंड फिल्टर)',

    tabCurve: 'अर्ध-शक्ति अनुनाद वक्र',
    tabCalculations: 'विस्तृत गणितीय सूत्र',
    tabSelectivity: 'चयनात्मकता एवं अवमंदन',

    f0: 'अनुनादी आवृत्ति (f₀)',
    qFactor: 'गुणवत्ता कारक (Q₀)',
    bandwidth: 'बैंडविड्थ (BW = Δf)',
    f1: 'निचली अर्ध-शक्ति आवृत्ति (f₁)',
    f2: 'ऊपरी अर्ध-शक्ति आवृत्ति (f₂)',
    peakCurrent: 'शिखर अनुनादी धारा (I₀)',
    halfPowerCurrent: 'अर्ध-शक्ति धारा (0.707 I₀)',
    selectivity: 'परिपथ चयनात्मकता स्तर',

    summaryTitle: 'बैंडविड्थ एवं Q-फैक्टर नियामक समीकरण',
    summaryText: 'f₀ = 1/(2π√LC)  |  Q = (ω₀L)/R = (1/R)√(L/C) = f₀/BW  |  BW = f₂ - f₁ = R/(2πL)  |  f₁ ≈ f₀ - BW/2, f₂ ≈ f₀ + BW/2  |  f₀ = √(f₁ · f₂)'
  },
  bn: {
    title: 'রেজোন্যান্স, Q-ফ্যাক্টর ও ব্যান্ডউইথ ল্যাবরেটরি',
    subtitle: 'রেজোন্যান্ট কম্পাঙ্ক (f₀), কোয়ালিটি ফ্যাক্টর (Q), হাফ-পাওয়ার কাটঅফ ফ্রিকোয়েন্সি (f₁, f₂), -3dB পয়েন্ট এবং সার্কিটের সিলেক্টিভিটির বাস্তব সম্পর্ক পর্যবেক্ষণ করুন।',
    rLabel: 'সিরিজ রোধ R (Ω)',
    lLabel: 'আবেশক L (mH)',
    cLabel: 'ধারকত্ব C (µF)',
    vLabel: 'সোর্স ভোল্টেজ V (V)',
    reset: 'ডিফল্ট রিসেট',

    presets: 'সিলেক্টিভিটি প্রিসেট',
    presetHighQ: 'উচ্চ Q (তীক্ষ্ণ / সংকীর্ণ ব্যান্ড)',
    presetMediumQ: 'মাঝারি Q (স্ট্যান্ডার্ড টিউনার)',
    presetLowQ: 'কম Q (ব্রডব্যান্ড ফিল্টার)',

    tabCurve: 'হাফ-পাওয়ার রেজোন্যান্স কার্ভ',
    tabCalculations: 'বিস্তারিত গাণিতিক হিসাব',
    tabSelectivity: 'সিলেক্টিভিটি ও ড্যাম্পিং',

    f0: 'রেজোন্যান্ট ফ্রিকোয়েন্সি (f₀)',
    qFactor: 'কোয়ালিটি ফ্যাক্টর (Q₀)',
    bandwidth: 'ব্যান্ডউইথ (BW = Δf)',
    f1: 'নিম্ন হাফ-পাওয়ার কম্পাঙ্ক (f₁)',
    f2: 'উচ্চ হাফ-পাওয়ার কম্পাঙ্ক (f₂)',
    peakCurrent: 'সর্বোচ্চ রেজোন্যান্স কারেন্ট (I₀)',
    halfPowerCurrent: 'হাফ-পাওয়ার কারেন্ট (০.৭০৭ I₀)',
    selectivity: 'সার্কিট সিলেক্টিভিটি রেটিং',

    summaryTitle: 'ব্যান্ডউইথ ও Q-ফ্যাক্টরের মৌলিক সূত্রাবলী',
    summaryText: 'f₀ = 1/(2π√LC)  |  Q = (ω₀L)/R = (1/R)√(L/C) = f₀/BW  |  BW = f₂ - f₁ = R/(2πL)  |  f₁ ≈ f₀ - BW/2, f₂ ≈ f₀ + BW/2  |  f₀ = √(f₁ · f₂)'
  }
};

export const ResonanceQBandwidthAnimation: React.FC<ResonanceQBandwidthAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage];
  const prefersReducedMotion = useReducedMotion();
  const baseId = useId();

  // Circuit Component Values
  const [r, setR] = useState<number>(5); // Ohms
  const [l, setL] = useState<number>(20); // mH
  const [c, setC] = useState<number>(5); // µF
  const [voltage, setVoltage] = useState<number>(100); // Volts

  const [activeTab, setActiveTab] = useState<'curve' | 'calculations' | 'selectivity'>('curve');

  const handleReset = () => {
    setR(5);
    setL(20);
    setC(5);
    setVoltage(100);
  };

  const applyPreset = (type: 'high' | 'med' | 'low') => {
    if (type === 'high') {
      setR(2);
      setL(40);
      setC(2.5);
    } else if (type === 'med') {
      setR(10);
      setL(20);
      setC(10);
    } else if (type === 'low') {
      setR(40);
      setL(10);
      setC(20);
    }
  };

  // Calculations
  const L_H = Math.max(l, 0.001) * 1e-3;
  const C_F = Math.max(c, 0.001) * 1e-6;
  const R_Ohm = Math.max(r, 0.01);

  const omega0 = 1 / Math.sqrt(L_H * C_F);
  const f0 = omega0 / (2 * Math.PI);

  // Q-Factor: Q = (omega0 * L) / R = (1 / R) * sqrt(L / C)
  const qFactor = (omega0 * L_H) / R_Ohm;

  // Bandwidth (Hz): BW = f0 / Q = R / (2 * pi * L)
  const bandwidth = f0 / qFactor;

  // Exact Half-Power Frequencies:
  // f1 = f0 * [ sqrt(1 + (1/(4*Q^2))) - 1/(2*Q) ]
  // f2 = f0 * [ sqrt(1 + (1/(4*Q^2))) + 1/(2*Q) ]
  const qTerm = 1 / (2 * qFactor);
  const sqrtTerm = Math.sqrt(1 + qTerm * qTerm);
  const f1 = f0 * (sqrtTerm - qTerm);
  const f2 = f0 * (sqrtTerm + qTerm);

  // Peak and Half-power Currents
  const i0 = voltage / R_Ohm;
  const iHalfPower = i0 * 0.707106;
  const p0 = (i0 * i0) * R_Ohm;
  const pHalf = p0 / 2;

  // Selectivity Assessment
  const selectivityRating = qFactor >= 20 ? 'Sharp / Highly Selective' : qFactor >= 5 ? 'Moderate / Standard Tuning' : 'Broadband / Flat / Low Selectivity';

  // Curve Generation
  const spanMin = Math.max(f0 - 2.5 * bandwidth, f0 * 0.1, 5);
  const spanMax = f0 + 2.5 * bandwidth;
  const scanPoints: Array<{ f: number; i: number; p: number; phase: number }> = [];
  const numSteps = 80;
  const fStep = (spanMax - spanMin) / numSteps;

  for (let scanF = spanMin; scanF <= spanMax; scanF += fStep) {
    const w = 2 * Math.PI * scanF;
    const xl = w * L_H;
    const xc = 1 / (w * C_F);
    const z = Math.sqrt(R_Ohm * R_Ohm + (xl - xc) * (xl - xc));
    const curI = voltage / z;
    const curP = curI * curI * R_Ohm;
    const phaseDeg = (Math.atan2(xl - xc, R_Ohm) * 180) / Math.PI;
    scanPoints.push({ f: scanF, i: curI, p: curP, phase: phaseDeg });
  }

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={t.summaryTitle}
      formulaText={t.summaryText}
    >
      <div className="space-y-6" id={`${baseId}-content`}>
        {/* Preset Selector */}
        <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">{t.presets}:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => applyPreset('high')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-emerald-500/30 transition"
            >
              {t.presetHighQ}
            </button>
            <button
              type="button"
              onClick={() => applyPreset('med')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-sky-300 border border-sky-500/30 transition"
            >
              {t.presetMediumQ}
            </button>
            <button
              type="button"
              onClick={() => applyPreset('low')}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-purple-300 border border-purple-500/30 transition"
            >
              {t.presetLowQ}
            </button>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
          {/* R Slider */}
          <div className="space-y-2 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs text-slate-300">
              <span className="font-bold">{t.rLabel}</span>
              <span className="font-mono text-amber-300 font-bold">{r} Ω</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={r}
              onChange={(e) => setR(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
              aria-label={t.rLabel}
            />
            <div className="text-[10px] text-slate-400">Lower R = Higher Q & Narrower Bandwidth</div>
          </div>

          {/* L Slider */}
          <div className="space-y-2 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs text-slate-300">
              <span className="font-bold">{t.lLabel}</span>
              <span className="font-mono text-emerald-300 font-bold">{l} mH</span>
            </div>
            <input
              type="range"
              min="2"
              max="100"
              step="2"
              value={l}
              onChange={(e) => setL(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              aria-label={t.lLabel}
            />
            <div className="text-[10px] text-slate-400">Higher L = Increased inductive energy storage</div>
          </div>

          {/* C Slider */}
          <div className="space-y-2 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs text-slate-300">
              <span className="font-bold">{t.cLabel}</span>
              <span className="font-mono text-purple-300 font-bold">{c} µF</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="30"
              step="0.5"
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
              aria-label={t.cLabel}
            />
            <div className="text-[10px] text-slate-400">Sets electrostatic energy & crossover center</div>
          </div>

          {/* V Slider */}
          <div className="space-y-2 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs text-slate-300">
              <span className="font-bold">{t.vLabel}</span>
              <span className="font-mono text-sky-300 font-bold">{voltage} V</span>
            </div>
            <input
              type="range"
              min="20"
              max="240"
              step="10"
              value={voltage}
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
              aria-label={t.vLabel}
            />
            <div className="text-[10px] text-slate-400">Peak Current I₀ = V / R = {i0.toFixed(2)} A</div>
          </div>
        </div>

        {/* Live Parameter Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-slate-900/80 p-3 rounded-xl border border-sky-500/30">
            <div className="text-[11px] uppercase tracking-wider text-slate-400">{t.f0}</div>
            <div className="font-mono text-lg font-black text-sky-300">{f0.toFixed(2)} Hz</div>
            <div className="text-[10px] text-slate-400">ω₀ = {omega0.toFixed(1)} rad/s</div>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-emerald-500/30">
            <div className="text-[11px] uppercase tracking-wider text-slate-400">{t.qFactor}</div>
            <div className="font-mono text-lg font-black text-emerald-300">{qFactor.toFixed(2)}</div>
            <div className="text-[10px] text-slate-400">Q = (ω₀L)/R = (1/R)√(L/C)</div>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-amber-500/30">
            <div className="text-[11px] uppercase tracking-wider text-slate-400">{t.bandwidth}</div>
            <div className="font-mono text-lg font-black text-amber-300">{bandwidth.toFixed(2)} Hz</div>
            <div className="text-[10px] text-slate-400">Δf = f₂ - f₁ = R / (2πL)</div>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-purple-500/30">
            <div className="text-[11px] uppercase tracking-wider text-slate-400">Half-Power Frequencies</div>
            <div className="font-mono text-xs font-bold text-purple-300">
              f₁ = {f1.toFixed(1)} Hz<br />f₂ = {f2.toFixed(1)} Hz
            </div>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex gap-2 border-b border-slate-800 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('curve')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'curve'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {t.tabCurve}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('calculatiions' as any)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'calculations'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {t.tabCalculations}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('selectivity')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'selectivity'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {t.tabSelectivity}
          </button>
        </div>

        {/* Tab 1: Half-Power Resonance SVG Plot */}
        {activeTab === 'curve' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
            <div className="relative w-full overflow-hidden">
              <svg viewBox="0 0 500 240" className="w-full max-w-2xl mx-auto block h-64">
                {/* Axes */}
                <line x1="50" y1="200" x2="470" y2="200" stroke="#334155" strokeWidth="2" />
                <line x1="50" y1="20" x2="50" y2="200" stroke="#334155" strokeWidth="2" />

                {/* Half Power Threshold Line (0.707 I0) */}
                {(() => {
                  const yHalf = 200 - (0.707106 * 160);
                  const xF1 = 50 + ((f1 - spanMin) / (spanMax - spanMin)) * 420;
                  const xF2 = 50 + ((f2 - spanMin) / (spanMax - spanMin)) * 420;
                  const xF0 = 50 + ((f0 - spanMin) / (spanMax - spanMin)) * 420;

                  // Build Curve path
                  const maxCur = Math.max(...scanPoints.map(p => p.i), 1);
                  const pathD = scanPoints.map((pt, i) => {
                    const px = 50 + ((pt.f - spanMin) / (spanMax - spanMin)) * 420;
                    const py = 200 - (pt.i / maxCur) * 160;
                    return `${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`;
                  }).join(' ');

                  return (
                    <g>
                      {/* Shaded Bandwidth Region between f1 and f2 */}
                      <rect
                        x={Math.max(xF1, 50)}
                        y="40"
                        width={Math.max(xF2 - xF1, 0)}
                        height="160"
                        fill="#38bdf8"
                        fillOpacity="0.08"
                      />

                      {/* 0.707 I0 Dash line */}
                      <line x1="50" y1={yHalf} x2="470" y2={yHalf} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" />
                      <text x="55" y={yHalf - 6} fill="#f59e0b" fontSize="10" fontWeight="bold">
                        I_half = 0.707 I₀ ({iHalfPower.toFixed(2)} A, -3 dB)
                      </text>

                      {/* Resonance Curve */}
                      <path d={pathD} fill="none" stroke="#38bdf8" strokeWidth="3" />

                      {/* f0 Peak Marker */}
                      <circle cx={xF0} cy={40} r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
                      <line x1={xF0} y1="40" x2={xF0} y2="200" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
                      <text x={xF0} y="30" fill="#38bdf8" fontSize="11" textAnchor="middle" fontWeight="bold">
                        Peak I₀ = {i0.toFixed(2)}A
                      </text>
                      <text x={xF0} y="215" fill="#38bdf8" fontSize="10" textAnchor="middle" fontWeight="bold">
                        f₀ ({f0.toFixed(1)} Hz)
                      </text>

                      {/* f1 Marker */}
                      <circle cx={xF1} cy={yHalf} r="4" fill="#a855f7" stroke="#ffffff" strokeWidth="1" />
                      <line x1={xF1} y1={yHalf} x2={xF1} y2="200" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" />
                      <text x={xF1} y="215" fill="#c084fc" fontSize="9" textAnchor="middle" fontWeight="bold">
                        f₁ ({f1.toFixed(1)} Hz)
                      </text>

                      {/* f2 Marker */}
                      <circle cx={xF2} cy={yHalf} r="4" fill="#a855f7" stroke="#ffffff" strokeWidth="1" />
                      <line x1={xF2} y1={yHalf} x2={xF2} y2="200" stroke="#a855f7" strokeWidth="1" strokeDasharray="2 2" />
                      <text x={xF2} y="215" fill="#c084fc" fontSize="9" textAnchor="middle" fontWeight="bold">
                        f₂ ({f2.toFixed(1)} Hz)
                      </text>

                      {/* Bandwidth Double Arrow Indicator */}
                      <line x1={xF1} y1="120" x2={xF2} y2="120" stroke="#10b981" strokeWidth="2" />
                      <polygon points={`${xF1},120 ${xF1 + 6},116 ${xF1 + 6},124`} fill="#10b981" />
                      <polygon points={`${xF2},120 ${xF2 - 6},116 ${xF2 - 6},124`} fill="#10b981" />
                      <text x={(xF1 + xF2) / 2} y="112" fill="#34d399" fontSize="11" textAnchor="middle" fontWeight="bold">
                        BW = Δf = {bandwidth.toFixed(1)} Hz
                      </text>
                    </g>
                  );
                })()}
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300 font-mono">
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                <span className="text-amber-400 font-bold">At f₁ (Lower -3dB Point):</span>
                <div className="mt-1 text-slate-400">
                  • Circuit is capacitive (XC &gt; XL)<br />
                  • Phase angle = -45° (Current leads Voltage)<br />
                  • Power = P₀ / 2 = {pHalf.toFixed(1)} W
                </div>
              </div>
              <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800">
                <span className="text-sky-400 font-bold">At f₂ (Upper -3dB Point):</span>
                <div className="mt-1 text-slate-400">
                  • Circuit is inductive (XL &gt; XC)<br />
                  • Phase angle = +45° (Current lags Voltage)<br />
                  • Power = P₀ / 2 = {pHalf.toFixed(1)} W
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Detailed Mathematical Calculations */}
        {activeTab === 'calculations' && (
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4 text-xs sm:text-sm font-mono text-slate-200">
            <div className="p-3.5 bg-slate-900/60 rounded-lg border border-slate-800 space-y-2">
              <div className="text-sky-400 font-bold flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Resonant Frequency Derivation (XL = XC):
              </div>
              <div className="text-slate-300">
                ω₀L = 1 / (ω₀C) ⇒ ω₀² = 1 / (LC) ⇒ ω₀ = 1 / √(LC)<br />
                f₀ = ω₀ / (2π) = 1 / ( 2π √({L_H.toFixed(4)} × {C_F.toExponential(3)}) ) = <span className="text-sky-300 font-bold">{f0.toFixed(2)} Hz</span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-900/60 rounded-lg border border-slate-800 space-y-2">
              <div className="text-emerald-400 font-bold flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Quality Factor Formulations:
              </div>
              <div className="text-slate-300">
                • Energy Ratio: Q = 2π × (Max Energy Stored / Energy Dissipated per Cycle)<br />
                • Reactance-to-Resistance: Q = (ω₀L) / R = ({omega0.toFixed(1)} × {L_H}) / {R_Ohm} = <span className="text-emerald-300 font-bold">{qFactor.toFixed(2)}</span><br />
                • Characteristic Component Form: Q = (1 / R) √(L / C) = (1 / {R_Ohm}) √({L_H} / {C_F}) = <span className="text-emerald-300 font-bold">{qFactor.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-900/60 rounded-lg border border-slate-800 space-y-2">
              <div className="text-amber-400 font-bold flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> Half-Power Frequencies & Bandwidth:
              </div>
              <div className="text-slate-300">
                • Bandwidth: BW = f₀ / Q = {f0.toFixed(2)} / {qFactor.toFixed(2)} = <span className="text-amber-300 font-bold">{bandwidth.toFixed(2)} Hz</span><br />
                • Bandwidth from circuit parameters: BW = R / (2πL) = {R_Ohm} / (2π × {L_H}) = <span className="text-amber-300 font-bold">{bandwidth.toFixed(2)} Hz</span><br />
                • Lower Cutoff: f₁ = f₀ [√(1 + 1/(4Q²)) - 1/(2Q)] = <span className="text-purple-300 font-bold">{f1.toFixed(2)} Hz</span><br />
                • Upper Cutoff: f₂ = f₀ [√(1 + 1/(4Q²)) + 1/(2Q)] = <span className="text-purple-300 font-bold">{f2.toFixed(2)} Hz</span><br />
                • Geometric Mean Verification: √(f₁ × f₂) = √({f1.toFixed(2)} × {f2.toFixed(2)}) = <span className="text-sky-300 font-bold">{Math.sqrt(f1 * f2).toFixed(2)} Hz</span> (Identical to f₀!).
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Selectivity & Filter Applications */}
        {activeTab === 'selectivity' && (
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/70 rounded-xl border border-emerald-500/30 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Selectivity Assessment
                </div>
                <div className="text-lg font-black text-emerald-300">{selectivityRating}</div>
                <div className="text-xs text-slate-300">
                  Selectivity is the ability of the tuned circuit to distinguish and select a desired signal frequency while rejecting all adjacent unwanted frequencies.
                </div>
              </div>

              <div className="p-4 bg-slate-900/70 rounded-xl border border-sky-500/30 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Practical Tuning Applications
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div>• <span className="text-sky-300 font-semibold">AM/FM Radio Tuners:</span> Require high Q (Q &gt; 50) to isolate individual broadcasting carrier channels (e.g. 10 kHz AM channel spacing).</div>
                  <div>• <span className="text-amber-300 font-semibold">Broadband Transceivers:</span> Require lower Q to pass audio modulation without clipping high-frequency sidebands.</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </InteractiveSimulationCard>
  );
};
