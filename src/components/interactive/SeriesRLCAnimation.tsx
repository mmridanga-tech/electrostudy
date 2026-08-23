import React, { useState, useId } from 'react';
import { Sliders, RotateCcw, Activity, Zap, Compass, CheckCircle2, AlertCircle, Triangle, Layers } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface SeriesRLCAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Series RLC Circuit & Impedance Simulator',
    subtitle: 'Analyze the interaction of Resistance, Inductance, and Capacitance in a single AC loop. Observe net reactance X = XL - XC, dynamic phase shifts, impedance triangles, and reactive power polarity.',
    voltageLabel: 'Supply Voltage V_rms (V)',
    resistanceLabel: 'Resistance R (Ω)',
    inductanceLabel: 'Inductance L (mH)',
    capacitanceLabel: 'Capacitance C (µF)',
    frequencyLabel: 'Frequency f (Hz)',
    reset: 'Reset Defaults',

    // Live Metrics
    xlMetric: 'Inductive Reactance XL',
    xcMetric: 'Capacitive Reactance XC',
    netXMetric: 'Net Reactance X (XL - XC)',
    zMetric: 'Impedance Magnitude |Z|',
    iMetric: 'Circuit Current I_rms',
    pfMetric: 'Power Factor (cos φ)',
    pMetric: 'Active Power P (W)',
    qMetric: 'Reactive Power Q (VAR)',
    sMetric: 'Apparent Power S (VA)',
    stateMetric: 'Circuit Operating Regime',

    // States
    stateInductive: 'Inductive Dominant (XL > XC): Current lags voltage, Q > 0 (Lagging PF).',
    stateCapacitive: 'Capacitive Dominant (XC > XL): Current leads voltage, Q < 0 (Leading PF).',
    stateBalanced: 'Reactances approximately equal (XL ≈ XC): Net reactance cancels, unity power factor (PF ≈ 1.0).',

    // Titles
    schematicTitle: 'Series RLC Schematic & Voltage Distribution',
    phasorTitle: 'Phasor Diagram & Voltage Triangle',
    waveformsTitle: 'Instantaneous AC Waveforms: v(t) & i(t)',
    trianglesTitle: 'Impedance & Voltage Triangles',

    legendVoltage: 'Supply Voltage v(t)',
    legendCurrent: 'Circuit Current i(t)',
    legendVR: 'Resistor Drop v_R(t)',
    
    summaryTitle: 'Governing Equations for Series RLC Circuit',
    summaryText: 'XL = 2πfL  |  XC = 1/(2πfC)  |  X = XL - XC  |  Z = R + j(XL - XC)  |  |Z| = √[R² + (XL - XC)²]  |  φ = tan⁻¹[(XL - XC)/R]  |  I = V/|Z|  |  PF = R/|Z|  |  P = I²R  |  Q = I²(XL - XC)'
  },
  hi: {
    title: 'सीरीज RLC परिपथ एवं प्रतिबाधा सिम्युलेटर',
    subtitle: 'एकल एसी लूप में प्रतिरोध, प्रेरकत्व और धारिता के अंतर्संबंध का विश्लेषण करें। शुद्ध रिएक्टेंस X = XL - XC, डायनामिक फेज विस्थापन, प्रतिबाधा त्रिभुज और रिएक्टिव शक्ति के ध्रुवत्व का अवलोकन करें।',
    voltageLabel: 'सप्लाई वोल्टेज V_rms (V)',
    resistanceLabel: 'प्रतिरोध R (Ω)',
    inductanceLabel: 'प्रेरकत्व L (mH)',
    capacitanceLabel: 'धारिता C (µF)',
    frequencyLabel: 'आवृत्ति f (Hz)',
    reset: 'डिफ़ॉल्ट रीसेट',

    // Live Metrics
    xlMetric: 'इंडक्टिव रिएक्टेंस XL',
    xcMetric: 'कैपेसिटिव रिएक्टेंस XC',
    netXMetric: 'शुद्ध रिएक्टेंस X (XL - XC)',
    zMetric: 'प्रतिबाधा परिमाण |Z|',
    iMetric: 'परिपथ धारा I_rms',
    pfMetric: 'पावर फैक्टर (cos φ)',
    pMetric: 'सक्रिय शक्ति P (W)',
    qMetric: 'प्रतिक्रियाशील शक्ति Q (VAR)',
    sMetric: 'आभासी शक्ति S (VA)',
    stateMetric: 'परिपथ परिचालन स्थिति',

    // States
    stateInductive: 'इंडक्टिव प्रधान (XL > XC): धारा वोल्टेज से लैग करती है, Q > 0 (Lagging PF)।',
    stateCapacitive: 'कैपेसिटिव प्रधान (XC > XL): धारा वोल्टेज से लीड करती है, Q < 0 (Leading PF)।',
    stateBalanced: 'रिएक्टेंस लगभग बराबर (XL ≈ XC): शुद्ध रिएक्टेंस निरस्त होता है, यूनिटी पावर फैक्टर (PF ≈ 1.0)।',

    // Titles
    schematicTitle: 'सीरीज RLC योजनाबद्ध आरेख एवं वोल्टेज वितरण',
    phasorTitle: 'फेजर आरेख एवं वोल्टेज त्रिभुज',
    waveformsTitle: 'तात्कालिक एसी तरंगरूप: v(t) एवं i(t)',
    trianglesTitle: 'प्रतिबाधा एवं वोल्टेज त्रिभुज',

    legendVoltage: 'सप्लाई वोल्टेज v(t)',
    legendCurrent: 'परिपथ धारा i(t)',
    legendVR: 'प्रतिरोधक ड्रॉप v_R(t)',
    
    summaryTitle: 'सीरीज RLC परिपथ के नियामक सूत्र',
    summaryText: 'XL = 2πfL  |  XC = 1/(2πfC)  |  X = XL - XC  |  Z = R + j(XL - XC)  |  |Z| = √[R² + (XL - XC)²]  |  φ = tan⁻¹[(XL - XC)/R]  |  I = V/|Z|  |  PF = R/|Z|  |  P = I²R  |  Q = I²(XL - XC)'
  },
  bn: {
    title: 'সিরিজ RLC সার্কিট ও ইম্পিড্যান্স সিমুলেটর',
    subtitle: 'একটি এসি লুপে রোধ, আবেশক ও ধারকের সম্মিলিত আচরণের বিশ্লেষণ। নেট রিঅ্যাকট্যান্স X = XL - XC, ফেজ শিফট, ইম্পিড্যান্স ত্রিভুজ এবং প্রতিক্রিয়াশীল ক্ষমতার দিক পরিবর্তন অনুধাবন করুন।',
    voltageLabel: 'সাপ্লাই ভোল্টেজ V_rms (V)',
    resistanceLabel: 'রোধ R (Ω)',
    inductanceLabel: 'ইন্ডাকট্যান্স L (mH)',
    capacitanceLabel: 'ক্যাপাসিট্যান্স C (µF)',
    frequencyLabel: 'কম্পাঙ্ক f (Hz)',
    reset: 'ডিফল্ট রিসেট',

    // Live Metrics
    xlMetric: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL',
    xcMetric: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC',
    netXMetric: 'নেট রিঅ্যাকট্যান্স X (XL - XC)',
    zMetric: 'ইম্পিড্যান্সের মান |Z|',
    iMetric: 'সার্কিট কারেন্ট I_rms',
    pfMetric: 'পাওয়ার ফ্যাক্টর (cos φ)',
    pMetric: 'সক্রিয় ক্ষমতা P (W)',
    qMetric: 'প্রতিক্রিয়াশীল ক্ষমতা Q (VAR)',
    sMetric: 'আপাত ক্ষমতা S (VA)',
    stateMetric: 'সার্কিটের কার্যপ্রণালী',

    // States
    stateInductive: 'ইন্ডাক্টিভ প্রধান (XL > XC): কারেন্ট ভোল্টেজ থেকে ল্যাগ করে, Q > 0 (Lagging PF)।',
    stateCapacitive: 'ক্যাপাসিটিভ প্রধান (XC > XL): কারেন্ট ভোল্টেজ থেকে লিড করে, Q < 0 (Leading PF)।',
    stateBalanced: 'রিঅ্যাকট্যান্স প্রায় সমান (XL ≈ XC): নেট রিঅ্যাকট্যান্স বাতিল হয়, ইউনিটি পাওয়ার ফ্যাক্টর (PF ≈ ১.০)।',

    // Titles
    schematicTitle: 'সিরিজ RLC সার্কিট ডায়াগ্রাম ও ভোল্টেজ বণ্টন',
    phasorTitle: 'ফেজর ডায়াগ্রাম ও ভোল্টেজ ত্রিভুজ',
    waveformsTitle: 'তাৎক্ষণিক এসি তরঙ্গরূপ: v(t) ও i(t)',
    trianglesTitle: 'ইম্পিড্যান্স ও ভোল্টেজ ত্রিভুজ',

    legendVoltage: 'সাপ্লাই ভোল্টেজ v(t)',
    legendCurrent: 'সার্কিট কারেন্ট i(t)',
    legendVR: 'রোধক ড্রপ v_R(t)',
    
    summaryTitle: 'সিরিজ RLC সার্কিটের মূল সমীকরণসমূহ',
    summaryText: 'XL = 2πfL  |  XC = 1/(2πfC)  |  X = XL - XC  |  Z = R + j(XL - XC)  |  |Z| = √[R² + (XL - XC)²]  |  φ = tan⁻¹[(XL - XC)/R]  |  I = V/|Z|  |  PF = R/|Z|  |  P = I²R  |  Q = I²(XL - XC)'
  }
};

export const SeriesRLCAnimation: React.FC<SeriesRLCAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const prefersReducedMotion = useReducedMotion();
  const baseId = useId();

  // Component State
  const [voltage, setVoltage] = useState<number>(230); // V
  const [resistance, setResistance] = useState<number>(20); // Ohms
  const [inductance, setInductance] = useState<number>(150); // mH (0.15 H)
  const [capacitance, setCapacitance] = useState<number>(50); // µF (50e-6 F)
  const [frequency, setFrequency] = useState<number>(50); // Hz

  const handleReset = () => {
    setVoltage(230);
    setResistance(20);
    setInductance(150);
    setCapacitance(50);
    setFrequency(50);
  };

  // Calculations
  const V = Math.max(1, voltage);
  const R = Math.max(0.1, resistance);
  const f = Math.max(0.1, frequency);
  const L_H = Math.max(0.001, inductance) / 1000;
  const C_F = Math.max(0.1, capacitance) * 1e-6;
  const omega = 2 * Math.PI * f;

  const XL = omega * L_H;
  const XC = 1 / (omega * C_F);
  const X_net = XL - XC; // Net reactance

  const Z_mag = Math.sqrt(R * R + X_net * X_net);
  const phaseAngleDeg = Math.atan2(X_net, R) * (180 / Math.PI);
  const phaseRad = (phaseAngleDeg * Math.PI) / 180;

  const I_rms = Z_mag > 0 ? V / Z_mag : 0;
  const powerFactor = Z_mag > 0 ? R / Z_mag : 1;
  const activePower = I_rms * I_rms * R; // P = I²R
  const reactivePower = I_rms * I_rms * X_net; // Q = I²(XL - XC)
  const apparentPower = V * I_rms; // S = VI

  const VR = I_rms * R;
  const VL = I_rms * XL;
  const VC = I_rms * XC;
  const VX_net = Math.abs(VL - VC);

  // Determine state
  const isApproxEqual = Math.abs(XL - XC) < 0.5;
  const isInductive = XL > XC + 0.5;
  const isCapacitive = XC > XL + 0.5;

  let stateText = t.stateBalanced;
  let stateBadgeColor = 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800';

  if (isInductive) {
    stateText = t.stateInductive;
    stateBadgeColor = 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800';
  } else if (isCapacitive) {
    stateText = t.stateCapacitive;
    stateBadgeColor = 'bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800';
  }

  // Waveform SVG constants
  const svgWidth = 560;
  const svgHeight = 220;
  const midY = svgHeight / 2;
  const ampV = 70;
  const ampI = Math.min(65, (I_rms / Math.max(1, (V / 10))) * 60 + 20);

  const wavePointsV: string[] = [];
  const wavePointsI: string[] = [];
  const wavePointsVR: string[] = [];
  const numPoints = 120;

  for (let i = 0; i <= numPoints; i++) {
    const x = (i / numPoints) * svgWidth;
    const theta = (i / numPoints) * 4 * Math.PI;
    const yV = midY - ampV * Math.sin(theta);
    const yI = midY - ampI * Math.sin(theta - phaseRad);
    const yVR = midY - (ampV * (VR / V)) * Math.sin(theta - phaseRad);

    wavePointsV.push(`${x.toFixed(1)},${yV.toFixed(1)}`);
    wavePointsI.push(`${x.toFixed(1)},${yI.toFixed(1)}`);
    wavePointsVR.push(`${x.toFixed(1)},${yVR.toFixed(1)}`);
  }

  return (
    <InteractiveSimulationCard
      title={t.title}
      subtitle={t.subtitle}
      badgeText={isInductive ? 'Inductive Regime' : isCapacitive ? 'Capacitive Regime' : 'Balanced Reactances'}
    >
      <div className="space-y-6">
        {/* Operating State Alert Banner */}
        <div className={`p-3 rounded-xl border flex items-center justify-between gap-3 text-xs ${stateBadgeColor}`}>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 shrink-0" />
            <span className="font-semibold">{stateText}</span>
          </div>
          <button
            type="button"
            id={`${baseId}-reset-btn`}
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-600 transition-colors shrink-0 shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {t.reset}
          </button>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.xlMetric}</span>
            <div className="text-base font-extrabold text-amber-600 dark:text-amber-400 mt-0.5">
              {XL.toFixed(2)} <span className="text-xs font-medium">Ω</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">XL = 2πfL</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.xcMetric}</span>
            <div className="text-base font-extrabold text-cyan-600 dark:text-cyan-400 mt-0.5">
              {XC.toFixed(2)} <span className="text-xs font-medium">Ω</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">XC = 1/(2πfC)</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.netXMetric}</span>
            <div className={`text-base font-extrabold mt-0.5 ${X_net >= 0 ? 'text-purple-600 dark:text-purple-400' : 'text-blue-600 dark:text-blue-400'}`}>
              {X_net > 0 ? `+${X_net.toFixed(2)}` : X_net.toFixed(2)} <span className="text-xs font-medium">Ω</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">X = XL - XC</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.zMetric}</span>
            <div className="text-base font-extrabold text-indigo-600 dark:text-indigo-400 mt-0.5">
              {Z_mag.toFixed(2)} <span className="text-xs font-medium">Ω</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">|Z| = √(R² + X²)</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.iMetric}</span>
            <div className="text-base font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">
              {I_rms.toFixed(2)} <span className="text-xs font-medium">A</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">I = V / |Z|</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.pfMetric}</span>
            <div className="text-base font-extrabold text-slate-800 dark:text-slate-100 mt-0.5">
              {powerFactor.toFixed(3)}
            </div>
            <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 block">
              φ = {phaseAngleDeg.toFixed(1)}° ({isInductive ? 'Lag' : isCapacitive ? 'Lead' : 'Unity'})
            </span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.pMetric}</span>
            <div className="text-base font-bold text-slate-800 dark:text-slate-200 mt-0.5">
              {activePower.toFixed(1)} <span className="text-xs font-medium">W</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">P = I²R = VI cos φ</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.qMetric}</span>
            <div className="text-base font-bold text-purple-600 dark:text-purple-400 mt-0.5">
              {reactivePower.toFixed(1)} <span className="text-xs font-medium">VAR</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Q = I²(XL - XC)</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">{t.sMetric}</span>
            <div className="text-base font-bold text-cyan-600 dark:text-cyan-400 mt-0.5">
              {apparentPower.toFixed(1)} <span className="text-xs font-medium">VA</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">S = V · I</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">Voltage Drops</span>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5 leading-tight">
              VR: {VR.toFixed(1)}V | VL: {VL.toFixed(1)}V | VC: {VC.toFixed(1)}V
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">|VL - VC| = {VX_net.toFixed(1)}V</span>
          </div>
        </div>

        {/* Visualizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Schematic & Phasor Diagram */}
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-white space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                {t.phasorTitle} & Schematic
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                Z = {R.toFixed(1)} {X_net >= 0 ? '+' : '-'} j{Math.abs(X_net).toFixed(1)} Ω
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Circuit Schematic */}
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 flex flex-col items-center">
                <span className="text-[10px] font-semibold text-slate-400 mb-1">
                  Series R-L-C Circuit
                </span>
                <svg viewBox="0 0 200 130" className="w-full h-28" aria-label="Series RLC Circuit Schematic">
                  <rect x="15" y="25" width="170" height="80" rx="8" fill="none" stroke="#64748b" strokeWidth="2" />
                  
                  {/* AC Source */}
                  <circle cx="15" cy="65" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                  <path d="M 9 65 Q 12 58 15 65 T 21 65" fill="none" stroke="#38bdf8" strokeWidth="2" />
                  <text x="15" y="90" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">~ {V}V</text>

                  {/* Resistor R */}
                  <rect x="42" y="20" width="28" height="10" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" rx="2" />
                  <text x="56" y="15" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">R={R}Ω</text>

                  {/* Inductor L */}
                  <path d="M 85 25 Q 89 17 93 25 Q 97 17 101 25 Q 105 17 109 25" fill="none" stroke="#a855f7" strokeWidth="2" />
                  <text x="97" y="15" textAnchor="middle" fill="#c084fc" fontSize="8" fontWeight="bold">L={inductance}mH</text>

                  {/* Capacitor C */}
                  <line x1="130" y1="18" x2="130" y2="32" stroke="#06b6d4" strokeWidth="2.5" />
                  <line x1="136" y1="18" x2="136" y2="32" stroke="#06b6d4" strokeWidth="2.5" />
                  <text x="133" y="15" textAnchor="middle" fill="#22d3ee" fontSize="8" fontWeight="bold">C={capacitance}µF</text>

                  {/* Current flow arrow */}
                  <path d="M 60 105 L 130 105" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                  <polygon points="133,105 127,101 127,109" fill="#10b981" />
                  <text x="95" y="120" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">I = {I_rms.toFixed(2)} A</text>
                </svg>
              </div>

              {/* Phasor Diagram */}
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 flex flex-col items-center">
                <span className="text-[10px] font-semibold text-slate-400 mb-1">
                  Voltage Phasor Triangle
                </span>
                <svg viewBox="0 0 240 180" className="w-full h-36" aria-label="RLC Phasor Diagram">
                  {/* Axes */}
                  <line x1="20" y1="90" x2="220" y2="90" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="120" y1="10" x2="120" y2="170" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="120" cy="90" r="3" fill="#94a3b8" />

                  {/* VR along real axis */}
                  <line x1="120" y1="90" x2="185" y2="90" stroke="#f59e0b" strokeWidth="2.5" />
                  <polygon points="189,90 182,86 182,94" fill="#f59e0b" />
                  <text x="175" y="82" fill="#fbbf24" fontSize="9" fontWeight="bold">V_R</text>

                  {/* VL and VC on vertical axis from origin */}
                  {/* VL upward */}
                  <line x1="120" y1="90" x2="120" y2="35" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="2 2" />
                  <text x="105" y="45" fill="#c084fc" fontSize="8">V_L ({VL.toFixed(0)}V)</text>

                  {/* VC downward */}
                  <line x1="120" y1="90" x2="120" y2="155" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="2 2" />
                  <text x="105" y="145" fill="#22d3ee" fontSize="8">V_C ({VC.toFixed(0)}V)</text>

                  {/* Net Reactive vector (VL - VC) from tip of VR */}
                  {isInductive && (
                    <g>
                      <line x1="185" y1="90" x2="185" y2="40" stroke="#a855f7" strokeWidth="2.5" />
                      <polygon points="185,35 181,42 189,42" fill="#a855f7" />
                      <text x="192" y="65" fill="#c084fc" fontSize="8" fontWeight="bold">V_L - V_C</text>

                      {/* Resultant Supply Voltage VS */}
                      <line x1="120" y1="90" x2="185" y2="40" stroke="#38bdf8" strokeWidth="3" />
                      <polygon points="189,37 180,41 185,48" fill="#38bdf8" />
                      <text x="145" y="55" fill="#38bdf8" fontSize="9" fontWeight="bold">V_S ({V}V)</text>

                      {/* Angle φ */}
                      <path d="M 145 90 A 25 25 0 0 0 140 73" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
                      <text x="150" y="80" fill="#fbbf24" fontSize="8" fontWeight="bold">+{phaseAngleDeg.toFixed(1)}°</text>
                    </g>
                  )}

                  {isCapacitive && (
                    <g>
                      <line x1="185" y1="90" x2="185" y2="140" stroke="#06b6d4" strokeWidth="2.5" />
                      <polygon points="185,145 181,138 189,138" fill="#06b6d4" />
                      <text x="192" y="125" fill="#22d3ee" fontSize="8" fontWeight="bold">V_C - V_L</text>

                      {/* Resultant Supply Voltage VS */}
                      <line x1="120" y1="90" x2="185" y2="140" stroke="#38bdf8" strokeWidth="3" />
                      <polygon points="189,143 185,132 180,139" fill="#38bdf8" />
                      <text x="145" y="125" fill="#38bdf8" fontSize="9" fontWeight="bold">V_S ({V}V)</text>

                      {/* Angle φ */}
                      <path d="M 145 90 A 25 25 0 0 1 140 107" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                      <text x="150" y="103" fill="#22d3ee" fontSize="8" fontWeight="bold">{phaseAngleDeg.toFixed(1)}°</text>
                    </g>
                  )}

                  {isApproxEqual && (
                    <g>
                      <line x1="120" y1="90" x2="185" y2="90" stroke="#38bdf8" strokeWidth="3" />
                      <polygon points="189,90 182,86 182,94" fill="#38bdf8" />
                      <text x="145" y="75" fill="#38bdf8" fontSize="9" fontWeight="bold">V_S = V_R ({V}V)</text>
                      <text x="120" y="165" textAnchor="middle" fill="#34d399" fontSize="8">VL and VC Cancel Out</text>
                    </g>
                  )}
                </svg>
              </div>
            </div>
          </div>

          {/* Waveforms */}
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-white space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                {t.waveformsTitle}
              </span>
              <span className="text-[11px] font-medium text-slate-300">
                f = {frequency} Hz (φ = {phaseAngleDeg.toFixed(1)}°)
              </span>
            </div>

            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-40" aria-label="AC Voltage and Current Waveforms">
                <line x1="0" y1={midY} x2={svgWidth} y2={midY} stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Voltage v(t) */}
                <polyline fill="none" stroke="#38bdf8" strokeWidth="2.5" points={wavePointsV.join(' ')} />

                {/* Current i(t) */}
                <polyline fill="none" stroke="#10b981" strokeWidth="2.5" points={wavePointsI.join(' ')} />

                {/* Resistor drop v_R(t) */}
                <polyline fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 2" points={wavePointsVR.join(' ')} />

                <text x="20" y="25" fill="#38bdf8" fontSize="11" fontWeight="bold">
                  v(t) = V_m sin(ωt)
                </text>
                <text x="200" y="25" fill="#10b981" fontSize="11" fontWeight="bold">
                  i(t) = I_m sin(ωt {phaseAngleDeg >= 0 ? '-' : '+'} {Math.abs(phaseAngleDeg).toFixed(1)}°)
                </text>
              </svg>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs mt-2 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-3 h-0.5 bg-cyan-400 rounded-full" />
                  {t.legendVoltage}
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-3 h-0.5 bg-emerald-400 rounded-full" />
                  {t.legendCurrent}
                </span>
                <span className="flex items-center gap-1.5 text-amber-400">
                  <span className="w-3 h-0.5 bg-amber-400 rounded-full border-t border-dashed" />
                  {t.legendVR}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Controls (Hidden in Print) */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 print:hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
            <Sliders className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Circuit Parameter Adjustments</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Voltage */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <label htmlFor={`${baseId}-voltage-input`}>{t.voltageLabel}</label>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">{voltage} V</span>
              </div>
              <input
                id={`${baseId}-voltage-input`}
                type="range"
                min="20"
                max="400"
                step="5"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                aria-label={t.voltageLabel}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />
            </div>

            {/* Resistance */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <label htmlFor={`${baseId}-resistance-input`}>{t.resistanceLabel}</label>
                <span className="font-bold text-amber-600 dark:text-amber-400">{resistance} Ω</span>
              </div>
              <input
                id={`${baseId}-resistance-input`}
                type="range"
                min="5"
                max="150"
                step="5"
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
                aria-label={t.resistanceLabel}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>

            {/* Inductance */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <label htmlFor={`${baseId}-inductance-input`}>{t.inductanceLabel}</label>
                <span className="font-bold text-purple-600 dark:text-purple-400">{inductance} mH</span>
              </div>
              <input
                id={`${baseId}-inductance-input`}
                type="range"
                min="10"
                max="500"
                step="10"
                value={inductance}
                onChange={(e) => setInductance(Number(e.target.value))}
                aria-label={t.inductanceLabel}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
            </div>

            {/* Capacitance */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <label htmlFor={`${baseId}-capacitance-input`}>{t.capacitanceLabel}</label>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">{capacitance} µF</span>
              </div>
              <input
                id={`${baseId}-capacitance-input`}
                type="range"
                min="5"
                max="250"
                step="5"
                value={capacitance}
                onChange={(e) => setCapacitance(Number(e.target.value))}
                aria-label={t.capacitanceLabel}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />
            </div>

            {/* Frequency */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <label htmlFor={`${baseId}-frequency-input`}>{t.frequencyLabel}</label>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{frequency} Hz</span>
              </div>
              <input
                id={`${baseId}-frequency-input`}
                type="range"
                min="10"
                max="200"
                step="5"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                aria-label={t.frequencyLabel}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          </div>
        </div>

        {/* Governing Equations Summary */}
        <div className="p-3 bg-slate-100 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900 dark:text-white block mb-0.5">{t.summaryTitle}</span>
            <p className="font-mono text-[11px] leading-relaxed">
              {t.summaryText}
            </p>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
