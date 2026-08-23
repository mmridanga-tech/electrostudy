import React, { useState, useId } from 'react';
import { Sliders, RotateCcw, Activity, Zap, Radio, CheckCircle2, TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ResonanceAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Resonance Laboratory: Series vs Parallel Resonance',
    subtitle: 'Explore the dual nature of electrical resonance in Series (Acceptor) and Parallel (Rejector/Tank) circuits. Observe reactance cancellation, impedance extremes, voltage/current magnification, and frequency response curves.',
    circuitType: 'Resonance Configuration',
    seriesType: 'Series Resonance (Acceptor / Min Z / Max I)',
    parallelType: 'Parallel Tank Resonance (Rejector / Max Z / Min I)',

    // Sliders
    resLabel: 'Resistance R (Ω)',
    indLabel: 'Inductance L (mH)',
    capLabel: 'Capacitance C (µF)',
    freqLabel: 'Operating Frequency f (Hz)',
    coilRLabel: 'Coil Internal Resistance r_L (Ω)',
    tuneToResonance: 'Snap to Exact Resonant Frequency (f₀)',
    reset: 'Reset Defaults',

    // Tabs
    tabResponse: 'Frequency Response Curves',
    tabPhasors: 'Phasor Cancellation',
    tabMagnification: 'Magnification & Waveforms',
    tabComparison: 'Series vs Parallel Duals',

    // Key metrics
    f0Label: 'Resonant Frequency f₀',
    zResLabel: 'Resonant Impedance Z₀',
    iResLabel: 'Resonant Current I₀',
    qFactorLabel: 'Quality Factor Q₀',
    curZLabel: 'Current Impedance |Z|',
    curILabel: 'Current Magnitude |I|',
    curPhaseLabel: 'Phase Angle φ',
    natureLabel: 'Circuit Operating Nature',

    // Status
    statusResonant: 'At Resonance (Unity Power Factor, Purely Resistive)',
    statusInductive: 'Inductive Dominant (Lagging Current)',
    statusCapacitive: 'Capacitive Dominant (Leading Current)',

    summaryTitle: 'Governing Resonance Principles & Dual Relationships',
    summaryText: 'Series: f₀ = 1/(2π√LC), Z_min = R, I_max = V/R, V_L = V_C = Q·V (Voltage Magnifier)  |  Parallel: f_r ≈ 1/(2π√LC), Z_max = L/(C·r_L), I_min = V/Z_max, I_circ = Q·I_supply (Current Magnifier)'
  },
  hi: {
    title: 'अनुनाद प्रयोगशाला: श्रेणी बनाम समानांतर अनुनाद',
    subtitle: 'सीरीज (स्वीकर्ता/एक्सेप्टर) और पैरेलल (रिजेक्टर/टैंक) परिपथों में विद्युत अनुनाद का अध्ययन करें। रिएक्टेंस रद्दीकरण, प्रतिबाधा सीमाएं, वोल्टेज/धारा आवर्धन एवं आवृत्ति प्रतिक्रिया वक्र देखें।',
    circuitType: 'अनुनाद विन्यास (Configuration)',
    seriesType: 'सीरीज अनुनाद (स्वीकर्ता / न्यूनतम Z / अधिकतम I)',
    parallelType: 'पैरेलल टैंक अनुनाद (रिजेक्टर / अधिकतम Z / न्यूनतम I)',

    resLabel: 'प्रतिरोध R (Ω)',
    indLabel: 'प्रेरकत्व L (mH)',
    capLabel: 'धारिता C (µF)',
    freqLabel: 'कार्यकारी आवृत्ति f (Hz)',
    coilRLabel: 'कॉइल का आंतरिक प्रतिरोध r_L (Ω)',
    tuneToResonance: 'सटीक अनुनादी आवृत्ति (f₀) पर सेट करें',
    reset: 'डिफ़ॉल्ट रीसेट',

    tabResponse: 'आवृत्ति प्रतिक्रिया वक्र (Curves)',
    tabPhasors: 'फेजर रद्दीकरण (Phasor)',
    tabMagnification: 'आवर्धन एवं वेवफॉर्म',
    tabComparison: 'सीरीज बनाम पैरेलल तुलना',

    f0Label: 'अनुनादी आवृत्ति f₀',
    zResLabel: 'अनुनादी प्रतिबाधा Z₀',
    iResLabel: 'अनुनादी धारा I₀',
    qFactorLabel: 'गुणवत्ता कारक Q₀',
    curZLabel: 'वर्तमान प्रतिबाधा |Z|',
    curILabel: 'वर्तमान धारा मान |I|',
    curPhaseLabel: 'फेज कोण φ',
    natureLabel: 'परिपथ की वर्तमान प्रकृति',

    statusResonant: 'अनुनाद पर (इकाई पावर फैक्टर, शुद्ध प्रतिरोधी)',
    statusInductive: 'इंडक्टिव प्रभावी (पश्चगामी धारा / Lagging)',
    statusCapacitive: 'कैपेसिटिव प्रभावी (अग्रगामी धारा / Leading)',

    summaryTitle: 'अनुनाद के सिद्धांत एवं द्वैत संबंध',
    summaryText: 'सीरीज: f₀ = 1/(2π√LC), Z_min = R, I_max = V/R, V_L = V_C = Q·V (वोल्टेज आवर्धक)  |  पैरेलल: f_r ≈ 1/(2π√LC), Z_max = L/(C·r_L), I_min = V/Z_max, I_circ = Q·I (धारा आवर्धक)'
  },
  bn: {
    title: 'রেজোন্যান্স ল্যাবরেটরি: সিরিজ বনাম প্যারালাল রেজোন্যান্স',
    subtitle: 'সিরিজ (অ্যাক্সেপ্টর) এবং প্যারালাল (রিজেক্টর/ট্যাঙ্ক) সার্কিটে বৈদ্যুতিক রেজোন্যান্সের দ্বৈত রূপ অন্বেষণ করুন। রিঅ্যাকট্যান্স কাটাকাটি, ইম্পিড্যান্স সীমা, ভোল্টেজ/কারেন্ট বিবর্ধন ও ফ্রিকোয়েন্সি রেসপন্স কার্ভ পর্যবেক্ষণ করুন।',
    circuitType: 'রেজোন্যান্স কনফিগারেশন',
    seriesType: 'সিরিজ রেজোন্যান্স (অ্যাক্সেপ্টর / সর্বনিম্ন Z / সর্বোচ্চ I)',
    parallelType: 'প্যারালাল ট্যাঙ্ক রেজোন্যান্স (রিজেক্টর / সর্বোচ্চ Z / সর্বনিম্ন I)',

    resLabel: 'রোধ R (Ω)',
    indLabel: 'আবেশক L (mH)',
    capLabel: 'ধারকত্ব C (µF)',
    freqLabel: 'কম্পাঙ্ক f (Hz)',
    coilRLabel: 'কয়েলের অভ্যন্তরীণ রোধ r_L (Ω)',
    tuneToResonance: 'সঠিক রেজোন্যান্ট ফ্রিকোয়েন্সিতে (f₀) টিউন করুন',
    reset: 'ডিফল্ট রিসেট',

    tabResponse: 'ফ্রিকোয়েন্সি রেসপন্স কার্ভ',
    tabPhasors: 'ফেজর ক্যান্সেলেশন',
    tabMagnification: 'বিবর্ধন ও তরঙ্গরূপ',
    tabComparison: 'সিরিজ বনাম প্যারালাল তুলনা',

    f0Label: 'রেজোন্যান্ট কম্পাঙ্ক f₀',
    zResLabel: 'রেজোন্যান্স ইম্পিড্যান্স Z₀',
    iResLabel: 'রেজোন্যান্স কারেন্ট I₀',
    qFactorLabel: 'কোয়ালিটি ফ্যাক্টর Q₀',
    curZLabel: 'বর্তমান ইম্পিড্যান্স |Z|',
    curILabel: 'বর্তমান কারেন্ট |I|',
    curPhaseLabel: 'ফেজ কোণ φ',
    natureLabel: 'সার্কিটের বর্তমান অবস্থা',

    statusResonant: 'রেজোন্যান্সে আছে (ইউনিটি পাওয়ার ফ্যাক্টর, বিশুদ্ধ রেজিস্টিভ)',
    statusInductive: 'ইন্ডাক্টিভ প্রধান (ল্যাগিং কারেন্ট)',
    statusCapacitive: 'ক্যাপাসিটিভ প্রধান (লিডিং কারেন্ট)',

    summaryTitle: 'রেজোন্যান্সের মৌলিক নীতি ও দ্বৈত সম্পর্ক',
    summaryText: 'সিরিজ: f₀ = 1/(2π√LC), Z_min = R, I_max = V/R, V_L = V_C = Q·V (ভোল্টেজ বিবর্ধক)  |  প্যারালাল: f_r ≈ 1/(2π√LC), Z_max = L/(C·r_L), I_min = V/Z_max, I_circ = Q·I (কারেন্ট বিবর্ধক)'
  }
};

export const ResonanceAnimation: React.FC<ResonanceAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage];
  const prefersReducedMotion = useReducedMotion();
  const baseId = useId();

  // Mode: Series or Parallel
  const [circuitMode, setCircuitMode] = useState<'series' | 'parallel'>('series');

  // Parameters
  const [voltage, setVoltage] = useState<number>(100);
  const [r, setR] = useState<number>(10);
  const [l, setL] = useState<number>(20); // mH
  const [c, setC] = useState<number>(10); // µF
  const [frequency, setFrequency] = useState<number>(355.88); // Hz (initial tuned near f0)

  // For parallel practical coil
  const [rCoil, setRCoil] = useState<number>(4); // internal coil resistance in parallel tank

  const [activeTab, setActiveTab] = useState<'response' | 'phasors' | 'magnification' | 'comparison'>('response');

  // Exact calculations
  const L_val = Math.max(l, 0.01) * 1e-3; // H
  const C_val = Math.max(c, 0.01) * 1e-6; // F

  // Resonant frequency f0 for series = 1 / (2π√LC)
  const f0_series = 1 / (2 * Math.PI * Math.sqrt(L_val * C_val));

  // Resonant frequency for practical parallel tank: f_r = 1/(2π) * sqrt(1/(LC) - (rCoil^2 / L^2))
  const termInsideSqrt = (1 / (L_val * C_val)) - ((rCoil * rCoil) / (L_val * L_val));
  const f0_parallel = termInsideSqrt > 0 ? (1 / (2 * Math.PI)) * Math.sqrt(termInsideSqrt) : f0_series;

  const f_target = circuitMode === 'series' ? f0_series : f0_parallel;

  const snapToResonance = () => {
    setFrequency(Number(f_target.toFixed(2)));
  };

  const handleReset = () => {
    setCircuitMode('series');
    setVoltage(100);
    setR(10);
    setL(20);
    setC(10);
    setRCoil(4);
    const initialF0 = 1 / (2 * Math.PI * Math.sqrt(20e-3 * 10e-6));
    setFrequency(Number(initialF0.toFixed(2)));
  };

  // Current Frequency Calculations
  const omega = 2 * Math.PI * Math.max(frequency, 0.1);
  const xl = omega * L_val;
  const xc = 1 / (omega * C_val);

  // Series Calculations
  const z_series_mag = Math.sqrt(r * r + (xl - xc) * (xl - xc));
  const z_series_ang = (Math.atan2(xl - xc, r) * 180) / Math.PI;
  const i_series_mag = z_series_mag > 0 ? voltage / z_series_mag : 0;
  const vl_series = i_series_mag * xl;
  const vc_series = i_series_mag * xc;
  const vr_series = i_series_mag * r;
  const q_series = (1 / Math.max(r, 0.001)) * Math.sqrt(L_val / C_val);

  // Parallel Calculations (Practical coil in parallel with ideal capacitor)
  // Y_coil = 1 / (rCoil + j xl) = (rCoil - j xl) / (rCoil^2 + xl^2)
  // Y_cap = + j (1/xc) = + j (omega * C)
  // Y_total = (rCoil / (rCoil^2 + xl^2)) + j ( omega*C - xl / (rCoil^2 + xl^2) )
  const denCoil = rCoil * rCoil + xl * xl;
  const g_par = rCoil / denCoil;
  const b_par = (omega * C_val) - (xl / denCoil);
  const y_par_mag = Math.sqrt(g_par * g_par + b_par * b_par);
  const z_par_mag = y_par_mag > 1e-12 ? 1 / y_par_mag : 1e9;
  const z_par_ang = (-Math.atan2(b_par, g_par) * 180) / Math.PI;
  const i_par_total = voltage * y_par_mag;
  const i_par_coil = voltage / Math.sqrt(rCoil * rCoil + xl * xl);
  const i_par_cap = voltage / xc;
  const r_dynamic_par = L_val / (C_val * Math.max(rCoil, 0.001));
  const q_parallel = (omega * L_val) / Math.max(rCoil, 0.001);

  // Mode Active Quantities
  const current_z = circuitMode === 'series' ? z_series_mag : z_par_mag;
  const current_i = circuitMode === 'series' ? i_series_mag : i_par_total;
  const current_phase = circuitMode === 'series' ? z_series_ang : z_par_ang;
  const active_q = circuitMode === 'series' ? q_series : q_parallel;
  const z_at_res = circuitMode === 'series' ? r : r_dynamic_par;
  const i_at_res = circuitMode === 'series' ? voltage / r : voltage / r_dynamic_par;

  const isResonant = Math.abs(frequency - f_target) < 1.0;
  const isInductive = circuitMode === 'series' ? xl > xc + 0.5 : b_par < -1e-5;
  const isCapacitive = circuitMode === 'series' ? xc > xl + 0.5 : b_par > 1e-5;

  // Generate Frequency Response Curve Points (60 points from 0.2*f0 to 2.5*f0)
  const curvePoints: Array<{ f: number; z: number; i: number; xl: number; xc: number }> = [];
  const minF = Math.max(f_target * 0.15, 10);
  const maxF = f_target * 2.8;
  const stepF = (maxF - minF) / 70;

  for (let freqScan = minF; freqScan <= maxF; freqScan += stepF) {
    const wScan = 2 * Math.PI * freqScan;
    const xlScan = wScan * L_val;
    const xcScan = 1 / (wScan * C_val);

    if (circuitMode === 'series') {
      const zVal = Math.sqrt(r * r + (xlScan - xcScan) * (xlScan - xcScan));
      const iVal = voltage / zVal;
      curvePoints.push({ f: freqScan, z: zVal, i: iVal, xl: xlScan, xc: xcScan });
    } else {
      const dCoil = rCoil * rCoil + xlScan * xlScan;
      const gP = rCoil / dCoil;
      const bP = (wScan * C_val) - (xlScan / dCoil);
      const yMag = Math.sqrt(gP * gP + bP * bP);
      const zVal = yMag > 1e-12 ? 1 / yMag : 1e6;
      const iVal = voltage * yMag;
      curvePoints.push({ f: freqScan, z: zVal, i: iVal, xl: xlScan, xc: xcScan });
    }
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
        {/* Mode Selector */}
        <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">{t.circuitType}:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => { setCircuitMode('series'); setFrequency(Number(f0_series.toFixed(1))); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 ${
                circuitMode === 'series'
                  ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${circuitMode === 'series' ? 'opacity-100' : 'opacity-0'}`} />
              {t.seriesType}
            </button>
            <button
              type="button"
              onClick={() => { setCircuitMode('parallel'); setFrequency(Number(f0_parallel.toFixed(1))); }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-2 ${
                circuitMode === 'parallel'
                  ? 'bg-purple-500 text-white shadow-md font-black'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${circuitMode === 'parallel' ? 'opacity-100' : 'opacity-0'}`} />
              {t.parallelType}
            </button>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
          {/* R */}
          <div className="space-y-2 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs text-slate-300">
              <span className="font-bold">{circuitMode === 'series' ? t.resLabel : t.coilRLabel}</span>
              <span className="font-mono text-amber-300 font-bold">
                {circuitMode === 'series' ? `${r} Ω` : `${rCoil} Ω`}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={circuitMode === 'series' ? r : rCoil}
              onChange={(e) => {
                if (circuitMode === 'series') setR(Number(e.target.value));
                else setRCoil(Number(e.target.value));
              }}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
              aria-label={t.resLabel}
            />
            <div className="text-[10px] text-slate-400">
              {circuitMode === 'series' ? 'Determines minimum Z & bandwidth' : 'Coil resistance determines tank Q and dynamic R'}
            </div>
          </div>

          {/* L */}
          <div className="space-y-2 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs text-slate-300">
              <span className="font-bold">{t.indLabel}</span>
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
              aria-label={t.indLabel}
            />
            <div className="text-[10px] text-slate-400">Inductive reactance XL = 2πfL = {xl.toFixed(1)} Ω</div>
          </div>

          {/* C */}
          <div className="space-y-2 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs text-slate-300">
              <span className="font-bold">{t.capLabel}</span>
              <span className="font-mono text-purple-300 font-bold">{c} µF</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
              aria-label={t.capLabel}
            />
            <div className="text-[10px] text-slate-400">Capacitive reactance XC = 1/(2πfC) = {xc.toFixed(1)} Ω</div>
          </div>

          {/* Frequency */}
          <div className="space-y-2 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs text-slate-300">
              <span className="font-bold">{t.freqLabel}</span>
              <span className="font-mono text-sky-300 font-bold">{frequency.toFixed(1)} Hz</span>
            </div>
            <input
              type="range"
              min={Math.max(10, Math.floor(f_target * 0.2))}
              max={Math.ceil(f_target * 2.5)}
              step="1"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
              aria-label={t.freqLabel}
            />
            <button
              type="button"
              onClick={snapToResonance}
              className="w-full py-1 rounded bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-[11px] font-bold transition flex items-center justify-center gap-1"
            >
              <Zap className="w-3 h-3 text-sky-400" /> {t.tuneToResonance} ({f_target.toFixed(1)} Hz)
            </button>
          </div>
        </div>

        {/* Operating Status Banner */}
        <div className={`p-3.5 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-semibold ${
          isResonant
            ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
            : isInductive
            ? 'bg-blue-950/60 border-blue-500/50 text-blue-300'
            : 'bg-purple-950/60 border-purple-500/50 text-purple-300'
        }`}>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            <span>
              {t.natureLabel}: {isResonant ? t.statusResonant : isInductive ? t.statusInductive : t.statusCapacitive}
            </span>
          </div>
          <div className="font-mono text-sm font-bold">
            f₀ = {f_target.toFixed(2)} Hz | Q₀ = {active_q.toFixed(2)} | φ = {current_phase.toFixed(1)}°
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-2 border-b border-slate-800 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('response')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'response'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {t.tabResponse}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('phasors')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'phasors'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {t.tabPhasors}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('magnification')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'magnification'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {t.tabMagnification}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'comparison'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {t.tabComparison}
          </button>
        </div>

        {/* Tab 1: Frequency Response Plots */}
        {activeTab === 'response' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
            <div className="text-xs text-slate-400 flex justify-between items-center">
              <span>{circuitMode === 'series' ? 'Series Resonance: Minimum Impedance (Z=R) & Peak Current (I=V/R)' : 'Parallel Resonance: Maximum Dynamic Impedance (Z_max) & Dip Current (I_min)'}</span>
              <span className="font-mono text-amber-400 font-bold">Orange Dot = Operating Frequency ({frequency.toFixed(1)} Hz)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Plot 1: Impedance |Z| vs Frequency */}
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-sky-300 mb-2 flex justify-between">
                  <span>Impedance |Z| vs Frequency</span>
                  <span className="font-mono text-amber-300">|Z| = {current_z.toFixed(1)} Ω</span>
                </div>
                <svg viewBox="0 0 320 180" className="w-full h-44">
                  {/* Grid Lines */}
                  <line x1="35" y1="150" x2="305" y2="150" stroke="#334155" strokeWidth="1.5" />
                  <line x1="35" y1="20" x2="35" y2="150" stroke="#334155" strokeWidth="1.5" />
                  
                  {/* Resonance f0 vertical dashed line */}
                  {(() => {
                    const f0_x = 35 + ((f_target - minF) / (maxF - minF)) * 270;
                    return (
                      <g>
                        <line x1={f0_x} y1="20" x2={f0_x} y2="150" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                        <text x={f0_x} y="165" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">f₀ ({f_target.toFixed(0)}Hz)</text>
                      </g>
                    );
                  })()}

                  {/* Impedance Curve */}
                  {(() => {
                    const maxZVal = Math.max(...curvePoints.map(p => p.z), 100);
                    const pathD = curvePoints.map((p, idx) => {
                      const px = 35 + ((p.f - minF) / (maxF - minF)) * 270;
                      const py = 150 - Math.min((p.z / maxZVal) * 125, 125);
                      return `${idx === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`;
                    }).join(' ');

                    const cur_x = 35 + ((frequency - minF) / (maxF - minF)) * 270;
                    const cur_y = 150 - Math.min((current_z / maxZVal) * 125, 125);

                    return (
                      <g>
                        <path d={pathD} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                        {/* Current Operating Point Marker */}
                        <circle cx={cur_x} cy={cur_y} r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                      </g>
                    );
                  })()}
                </svg>
              </div>

              {/* Plot 2: Current |I| vs Frequency */}
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-emerald-300 mb-2 flex justify-between">
                  <span>Current |I| vs Frequency</span>
                  <span className="font-mono text-amber-300">|I| = {current_i.toFixed(2)} A</span>
                </div>
                <svg viewBox="0 0 320 180" className="w-full h-44">
                  <line x1="35" y1="150" x2="305" y2="150" stroke="#334155" strokeWidth="1.5" />
                  <line x1="35" y1="20" x2="35" y2="150" stroke="#334155" strokeWidth="1.5" />

                  {/* f0 vertical line */}
                  {(() => {
                    const f0_x = 35 + ((f_target - minF) / (maxF - minF)) * 270;
                    return (
                      <g>
                        <line x1={f0_x} y1="20" x2={f0_x} y2="150" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                        <text x={f0_x} y="165" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">f₀</text>
                      </g>
                    );
                  })()}

                  {/* Current Curve */}
                  {(() => {
                    const maxIVal = Math.max(...curvePoints.map(p => p.i), 1);
                    const pathD = curvePoints.map((p, idx) => {
                      const px = 35 + ((p.f - minF) / (maxF - minF)) * 270;
                      const py = 150 - Math.min((p.i / maxIVal) * 125, 125);
                      return `${idx === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`;
                    }).join(' ');

                    const cur_x = 35 + ((frequency - minF) / (maxF - minF)) * 270;
                    const cur_y = 150 - Math.min((current_i / maxIVal) * 125, 125);

                    return (
                      <g>
                        <path d={pathD} fill="none" stroke="#34d399" strokeWidth="2.5" />
                        <circle cx={cur_x} cy={cur_y} r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                      </g>
                    );
                  })()}
                </svg>
              </div>
            </div>

            {/* Reactance Crossover Display */}
            <div className="p-3 bg-slate-900/40 rounded-lg border border-slate-800 text-xs flex flex-wrap justify-around text-slate-300 font-mono">
              <div>XL = 2πfL = <span className="text-emerald-400 font-bold">{xl.toFixed(2)} Ω</span></div>
              <div>XC = 1/(2πfC) = <span className="text-purple-400 font-bold">{xc.toFixed(2)} Ω</span></div>
              <div>Net Reactance (XL - XC) = <span className="text-amber-400 font-bold">{(xl - xc).toFixed(2)} Ω</span></div>
            </div>
          </div>
        )}

        {/* Tab 2: Phasor Cancellation */}
        {activeTab === 'phasors' && (
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="text-xs text-slate-400 text-center">
              {circuitMode === 'series'
                ? 'Series Phasors: Inductor Voltage V_L (+90°) and Capacitor Voltage V_C (-90°) directly cancel each other when f = f₀.'
                : 'Parallel Phasors: Inductive Branch Current I_L and Capacitive Branch Current I_C reactive components cancel in parallel node.'}
            </div>

            <div className="relative w-full overflow-hidden">
              <svg viewBox="-150 -130 300 260" className="w-full max-w-sm mx-auto block h-60">
                <line x1="-130" y1="0" x2="130" y2="0" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="0" y1="-110" x2="0" y2="110" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />

                {circuitMode === 'series' ? (
                  <>
                    {/* VR Phasor (along real axis) */}
                    <line x1="0" y1="0" x2={Math.min(vr_series * 0.9, 100)} y2="0" stroke="#f59e0b" strokeWidth="3" />
                    <text x={Math.min(vr_series * 0.9, 100) + 5} y="4" fill="#f59e0b" fontSize="10" fontWeight="bold">
                      V_R ({vr_series.toFixed(0)}V)
                    </text>

                    {/* VL Phasor (up +90) */}
                    {(() => {
                      const scaleV = 80 / Math.max(vl_series, vc_series, 100);
                      const lenL = Math.min(vl_series * scaleV, 95);
                      const lenC = Math.min(vc_series * scaleV, 95);
                      return (
                        <>
                          <line x1="0" y1="0" x2="0" y2={-lenL} stroke="#10b981" strokeWidth="2.5" />
                          <polygon points={`0,${-lenL} -4,${-lenL + 7} 4,${-lenL + 7}`} fill="#10b981" />
                          <text x="6" y={-lenL + 10} fill="#10b981" fontSize="10" fontWeight="bold">
                            +j V_L ({vl_series.toFixed(0)}V)
                          </text>

                          <line x1="0" y1="0" x2="0" y2={lenC} stroke="#c084fc" strokeWidth="2.5" />
                          <polygon points={`0,${lenC} -4,${lenC - 7} 4,${lenC - 7}`} fill="#c084fc" />
                          <text x="6" y={lenC - 4} fill="#c084fc" fontSize="10" fontWeight="bold">
                            -j V_C ({vc_series.toFixed(0)}V)
                          </text>
                        </>
                      );
                    })()}
                  </>
                ) : (
                  <>
                    {/* Parallel: Voltage is reference at 0 deg */}
                    <line x1="0" y1="0" x2="90" y2="0" stroke="#38bdf8" strokeWidth="3" />
                    <text x="95" y="4" fill="#38bdf8" fontSize="10" fontWeight="bold">V_supply</text>

                    {/* IC (Leading +90) */}
                    <line x1="0" y1="0" x2="0" y2={-Math.min(i_par_cap * 15, 90)} stroke="#c084fc" strokeWidth="2.5" />
                    <text x="6" y={-Math.min(i_par_cap * 15, 90) + 12} fill="#c084fc" fontSize="10" fontWeight="bold">
                      I_C ({i_par_cap.toFixed(2)}A)
                    </text>

                    {/* IL (Lagging ~ -90) */}
                    {(() => {
                      const angCoil = Math.atan2(xl, rCoil);
                      const lenCoil = Math.min(i_par_coil * 15, 90);
                      const px = lenCoil * Math.cos(angCoil);
                      const py = lenCoil * Math.sin(angCoil);
                      return (
                        <g>
                          <line x1="0" y1="0" x2={px} y2={py} stroke="#10b981" strokeWidth="2.5" />
                          <text x={px + 4} y={py + 10} fill="#10b981" fontSize="10" fontWeight="bold">
                            I_coil ({i_par_coil.toFixed(2)}A)
                          </text>
                        </g>
                      );
                    })()}
                  </>
                )}
              </svg>
            </div>

            <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-xs text-slate-300">
              <span className="font-bold text-amber-400">Physical Insight:</span> At resonance, total reactive energy stored in the inductor's magnetic field perfectly oscillates back and forth into the capacitor's electric field with zero net reactive VAR drawn from the AC mains.
            </div>
          </div>
        )}

        {/* Tab 3: Magnification & Waveforms */}
        {activeTab === 'magnification' && (
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/70 rounded-xl border border-emerald-500/30 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {circuitMode === 'series' ? 'Voltage Magnification (V_L = V_C = Q · V)' : 'Current Magnification (I_circ = Q · I_line)'}
                </div>
                <div className="font-mono text-2xl font-black text-emerald-300">
                  {circuitMode === 'series' ? `${(active_q * voltage).toFixed(1)} V` : `${(active_q * i_par_total).toFixed(2)} A`}
                </div>
                <div className="text-xs text-slate-300">
                  {circuitMode === 'series'
                    ? `With Q = ${active_q.toFixed(2)} and V_supply = ${voltage}V, the voltage across inductor and capacitor reaches ${vl_series.toFixed(1)}V, exceeding supply by ${(vl_series / voltage).toFixed(2)}x!`
                    : `In tank resonance, circulating tank current between L and C reaches ${(q_parallel * i_par_total).toFixed(2)}A while supply draws only ${i_par_total.toFixed(2)}A.`}
                </div>
              </div>

              <div className="p-4 bg-slate-900/70 rounded-xl border border-sky-500/30 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Dynamic Resonant Resistance (Z₀)
                </div>
                <div className="font-mono text-2xl font-black text-sky-300">
                  {circuitMode === 'series' ? `${r} Ω (Pure Resistance)` : `${r_dynamic_par.toFixed(1)} Ω (L / C·r_L)`}
                </div>
                <div className="text-xs text-slate-300">
                  {circuitMode === 'series'
                    ? 'At series resonance, the circuit offers purely minimum impedance equal strictly to coil resistance R.'
                    : 'At parallel anti-resonance, the tank circuit presents an extremely high equivalent dynamic resistance R_dyn.'}
                </div>
              </div>
            </div>

            {/* Warning Callout for High Voltage/Current Magnification */}
            {active_q > 5 && (
              <div className="p-3 bg-amber-950/40 border border-amber-500/40 rounded-lg text-xs text-amber-300 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>
                  High Quality Factor (Q = {active_q.toFixed(1)}). In high-Q series circuits, capacitor insulation breakdown can occur due to excessive voltage magnification across reactive elements.
                </span>
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Comparison Table */}
        {activeTab === 'comparison' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-2.5 px-3">Parameter / Feature</th>
                  <th className="py-2.5 px-3 text-amber-300">Series Resonance</th>
                  <th className="py-2.5 px-3 text-purple-300">Parallel Resonance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                <tr>
                  <td className="py-2 px-3 text-slate-400 font-sans">Common Circuit Name</td>
                  <td className="py-2 px-3 text-amber-400 font-bold">Acceptor Circuit</td>
                  <td className="py-2 px-3 text-purple-400 font-bold">Rejector / Tank Circuit</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-400 font-sans">Impedance at Resonance (Z₀)</td>
                  <td className="py-2 px-3">Minimum: Z₀ = R</td>
                  <td className="py-2 px-3">Maximum: Z₀ = L / (C · r_L)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-400 font-sans">Supply Current (I₀)</td>
                  <td className="py-2 px-3">Maximum: I₀ = V / R</td>
                  <td className="py-2 px-3">Minimum: I₀ = V / Z_max</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-400 font-sans">Power Factor at f₀</td>
                  <td className="py-2 px-3 text-emerald-400">Unity (1.0)</td>
                  <td className="py-2 px-3 text-emerald-400">Unity (1.0)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-400 font-sans">Magnification Effect</td>
                  <td className="py-2 px-3">Voltage: V_L = V_C = Q · V</td>
                  <td className="py-2 px-3">Current: I_circ = Q · I_supply</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-400 font-sans">Below Resonant Frequency (f &lt; f₀)</td>
                  <td className="py-2 px-3 text-purple-300">Capacitive (Leading)</td>
                  <td className="py-2 px-3 text-blue-300">Inductive (Lagging)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-400 font-sans">Above Resonant Frequency (f &gt; f₀)</td>
                  <td className="py-2 px-3 text-blue-300">Inductive (Lagging)</td>
                  <td className="py-2 px-3 text-purple-300">Capacitive (Leading)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-slate-400 font-sans">Primary Engineering Applications</td>
                  <td className="py-2 px-3 font-sans">Radio/TV tuning, signal extraction</td>
                  <td className="py-2 px-3 font-sans">RF oscillators, induction heating, wave traps</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </InteractiveSimulationCard>
  );
};
