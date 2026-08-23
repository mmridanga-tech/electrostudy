import React, { useState, useId } from 'react';
import { Sliders, RotateCcw, Activity, Zap, Compass, CheckCircle2, Layers, GitBranch, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface SeriesParallelACAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Series-Parallel AC Network Analyzer',
    subtitle: 'Systematically reduce AC networks combining series elements with parallel branches. Observe branch impedances, admittance addition, complex current division, and live phasor diagrams.',
    voltageLabel: 'Supply Voltage V_rms (V)',
    freqLabel: 'Frequency f (Hz)',
    rsLabel: 'Series Resistance R_s (Ω)',
    lsLabel: 'Series Inductance L_s (mH)',
    r1Label: 'Branch 1 Resistance R1 (Ω)',
    l1Label: 'Branch 1 Inductance L1 (mH)',
    r2Label: 'Branch 2 Resistance R2 (Ω)',
    c2Label: 'Branch 2 Capacitance C2 (µF)',
    presets: 'Circuit Presets',
    presetStandard: 'Standard RL + RC Parallel',
    presetPFC: 'Power Factor Correction',
    presetTuned: 'Near-Resonant Network',
    presetPure: 'Pure Reactive Branches',
    reset: 'Reset Defaults',

    // Tabs
    tabSchematic: 'Circuit & Currents',
    tabReduction: 'Step-by-Step Reduction',
    tabPhasor: 'Phasor Diagram',
    tabPower: 'Power Breakdown',

    // Live Metrics
    metricsTitle: 'Live Network Quantities',
    zinMetric: 'Total Input Impedance Z_in',
    itotalMetric: 'Total Current I_total',
    vpMetric: 'Parallel Node Voltage V_p',
    i1Metric: 'Branch 1 Current I_1',
    i2Metric: 'Branch 2 Current I_2',
    pfMetric: 'Overall Power Factor',
    pMetric: 'Total Active Power P',
    qMetric: 'Total Reactive Power Q',
    sMetric: 'Apparent Power S',

    // Steps
    step1Title: 'Step 1: Compute Branch Impedances (Z = R + jX)',
    step2Title: 'Step 2: Convert to Admittance (Y = 1/Z)',
    step3Title: 'Step 3: Combine Parallel Admittances (Y_p = Y1 + Y2)',
    step4Title: 'Step 4: Find Equivalent Parallel Impedance (Z_p = 1/Y_p)',
    step5Title: 'Step 5: Total Input Impedance (Z_in = Z_s + Z_p)',
    step6Title: 'Step 6: Total Current & Parallel Node Voltage',
    step7Title: 'Step 7: Branch Currents (Ohm & Current Divider)',

    summaryTitle: 'Governing Formulas for Series-Parallel AC Networks',
    summaryText: 'Z_s = R_s + jωL_s  |  Z_1 = R_1 + jωL_1  |  Z_2 = R_2 - j/(ωC_2)  |  Y_p = 1/Z_1 + 1/Z_2  |  Z_p = 1/Y_p  |  Z_in = Z_s + Z_p  |  I_total = V / Z_in  |  V_p = I_total · Z_p  |  I_1 = V_p / Z_1  |  I_2 = V_p / Z_2'
  },
  hi: {
    title: 'सीरीज-पैरेलल एसी नेटवर्क विश्लेषक',
    subtitle: 'सीरीज और समानांतर शाखाओं वाले एसी नेटवर्कों का चरणबद्ध विश्लेषण करें। शाखा प्रतिबाधाएं, प्रवेश्यता योग, सम्मिश्र धारा विभाजन और लाइव फेजर आरेख देखें।',
    voltageLabel: 'सप्लाई वोल्टेज V_rms (V)',
    freqLabel: 'आवृत्ति f (Hz)',
    rsLabel: 'सीरीज प्रतिरोध R_s (Ω)',
    lsLabel: 'सीरीज प्रेरकत्व L_s (mH)',
    r1Label: 'शाखा 1 प्रतिरोध R1 (Ω)',
    l1Label: 'शाखा 1 प्रेरकत्व L1 (mH)',
    r2Label: 'शाखा 2 प्रतिरोध R2 (Ω)',
    c2Label: 'शाखा 2 धारिता C2 (µF)',
    presets: 'परिपथ प्रीसेट',
    presetStandard: 'मानक RL + RC पैरेलल',
    presetPFC: 'पावर फैक्टर सुधार (PFC)',
    presetTuned: 'निकट-अनुनादी नेटवर्क',
    presetPure: 'शुद्ध रिएक्टिव शाखाएं',
    reset: 'डिफ़ॉल्ट रीसेट',

    tabSchematic: 'परिपथ एवं धाराएं',
    tabReduction: 'चरणबद्ध न्यूनीकरण',
    tabPhasor: 'फेजर आरेख',
    tabPower: 'शक्ति विभाजन',

    metricsTitle: 'लाइव नेटवर्क मान',
    zinMetric: 'कुल इनपुट प्रतिबाधा Z_in',
    itotalMetric: 'कुल धारा I_total',
    vpMetric: 'पैरेलल नोड वोल्टेज V_p',
    i1Metric: 'शाखा 1 धारा I_1',
    i2Metric: 'शाखा 2 धारा I_2',
    pfMetric: 'समग्र पावर फैक्टर',
    pMetric: 'कुल सक्रिय शक्ति P',
    qMetric: 'कुल प्रतिक्रियाशील शक्ति Q',
    sMetric: 'आभासी शक्ति S',

    step1Title: 'चरण 1: शाखा प्रतिबाधाएं ज्ञात करें (Z = R + jX)',
    step2Title: 'चरण 2: प्रवेश्यता में बदलें (Y = 1/Z)',
    step3Title: 'चरण 3: समानांतर प्रवेश्यताओं का योग (Y_p = Y1 + Y2)',
    step4Title: 'चरण 4: तुल्य समानांतर प्रतिबाधा (Z_p = 1/Y_p)',
    step5Title: 'चरण 5: कुल इनपुट प्रतिबाधा (Z_in = Z_s + Z_p)',
    step6Title: 'चरण 6: कुल धारा एवं पैरेलल नोड वोल्टेज',
    step7Title: 'चरण 7: शाखा धाराएं (ओम एवं धारा विभाजक नियम)',

    summaryTitle: 'सीरीज-पैरेलल एसी नेटवर्क के नियामक सूत्र',
    summaryText: 'Z_s = R_s + jωL_s  |  Z_1 = R_1 + jωL_1  |  Z_2 = R_2 - j/(ωC_2)  |  Y_p = 1/Z_1 + 1/Z_2  |  Z_p = 1/Y_p  |  Z_in = Z_s + Z_p  |  I_total = V / Z_in  |  V_p = I_total · Z_p  |  I_1 = V_p / Z_1  |  I_2 = V_p / Z_2'
  },
  bn: {
    title: 'সিরিজ-প্যারালাল এসি নেটওয়ার্ক অ্যানালাইজার',
    subtitle: 'সিরিজ উপাদান এবং সমান্তরাল শাখার সম্মিলিত এসি নেটওয়ার্কের ধাপে ধাপে সরলীকরণ। শাখা ইম্পিড্যান্স, অ্যাডমিট্যান্স যোগ, কারেন্ট বিভাজন এবং লাইভ ফেজর ডায়াগ্রাম পর্যবেক্ষণ করুন।',
    voltageLabel: 'সাপ্লাই ভোল্টেজ V_rms (V)',
    freqLabel: 'কম্পাঙ্ক f (Hz)',
    rsLabel: 'সিরিজ রোধ R_s (Ω)',
    lsLabel: 'সিরিজ আবেশক L_s (mH)',
    r1Label: 'শাখা ১ রোধ R1 (Ω)',
    l1Label: 'শাখা ১ আবেশক L1 (mH)',
    r2Label: 'শাখা ২ রোধ R2 (Ω)',
    c2Label: 'শাখা ২ ধারকত্ব C2 (µF)',
    presets: 'সার্কিট প্রিসেট',
    presetStandard: 'স্ট্যান্ডার্ড RL + RC প্যারালাল',
    presetPFC: 'পাওয়ার ফ্যাক্টর কারেকশন',
    presetTuned: 'রেজোন্যান্স টিউনড নেটওয়ার্ক',
    presetPure: 'বিশুদ্ধ রিঅ্যাক্টিভ শাখা',
    reset: 'ডিফল্ট রিসেট',

    tabSchematic: 'সার্কিট ও কারেন্ট প্রবাহ',
    tabReduction: 'ধাপে ধাপে সরলীকরণ',
    tabPhasor: 'ফেজর ডায়াগ্রাম',
    tabPower: 'পাওয়ার বণ্টন',

    metricsTitle: 'লাইভ সার্কিট পরিমাপ',
    zinMetric: 'মোট ইনপুট ইম্পিড্যান্স Z_in',
    itotalMetric: 'মোট কারেন্ট I_total',
    vpMetric: 'প্যারালাল নোড ভোল্টেজ V_p',
    i1Metric: 'শাখা ১ কারেন্ট I_1',
    i2Metric: 'শাখা ২ কারেন্ট I_2',
    pfMetric: 'সামগ্রিক পাওয়ার ফ্যাক্টর',
    pMetric: 'মোট সক্রিয় ক্ষমতা P',
    qMetric: 'মোট প্রতিক্রিয়াশীল ক্ষমতা Q',
    sMetric: 'অ্যাপারেন্ট পাওয়ার S',

    step1Title: 'ধাপ ১: শাখা ইম্পিড্যান্স নির্ণয় (Z = R + jX)',
    step2Title: 'ধাপ ২: অ্যাডমিট্যান্সে রূপান্তর (Y = 1/Z)',
    step3Title: 'ধাপ ৩: সমান্তরাল অ্যাডমিট্যান্সের যোগফল (Y_p = Y1 + Y2)',
    step4Title: 'ধাপ ৪: সমতুল্য সমান্তরাল ইম্পিড্যান্স (Z_p = 1/Y_p)',
    step5Title: 'ধাপ ৫: মোট ইনপুট ইম্পিড্যান্স (Z_in = Z_s + Z_p)',
    step6Title: 'ধাপ ৬: মোট কারেন্ট ও নোড ভোল্টেজ',
    step7Title: 'ধাপ ৭: প্রতিটি শাখার কারেন্ট বিভাজন',

    summaryTitle: 'সিরিজ-প্যারালাল এসি নেটওয়ার্কের গাণিতিক সূত্রাবলী',
    summaryText: 'Z_s = R_s + jωL_s  |  Z_1 = R_1 + jωL_1  |  Z_2 = R_2 - j/(ωC_2)  |  Y_p = 1/Z_1 + 1/Z_2  |  Z_p = 1/Y_p  |  Z_in = Z_s + Z_p  |  I_total = V / Z_in  |  V_p = I_total · Z_p  |  I_1 = V_p / Z_1  |  I_2 = V_p / Z_2'
  }
};

// Helper for complex numbers: { r: real, i: imag }
interface Complex {
  r: number;
  i: number;
}

function cMag(c: Complex): number {
  return Math.sqrt(c.r * c.r + c.i * c.i);
}

function cAngDeg(c: Complex): number {
  return (Math.atan2(c.i, c.r) * 180) / Math.PI;
}

function cAdd(a: Complex, b: Complex): Complex {
  return { r: a.r + b.r, i: a.i + b.i };
}

function cSub(a: Complex, b: Complex): Complex {
  return { r: a.r - b.r, i: a.i - b.i };
}

function cMul(a: Complex, b: Complex): Complex {
  return { r: a.r * b.r - a.i * b.i, i: a.r * b.i + a.i * b.r };
}

function cDiv(a: Complex, b: Complex): Complex {
  const den = b.r * b.r + b.i * b.i;
  if (den < 1e-12) return { r: 0, i: 0 };
  return {
    r: (a.r * b.r + a.i * b.i) / den,
    i: (a.i * b.r - a.r * b.i) / den
  };
}

function cInv(c: Complex): Complex {
  const den = c.r * c.r + c.i * c.i;
  if (den < 1e-12) return { r: 0, i: 0 };
  return { r: c.r / den, i: -c.i / den };
}

export const SeriesParallelACAnimation: React.FC<SeriesParallelACAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage];
  const prefersReducedMotion = useReducedMotion();
  const baseId = useId();

  // Circuit Parameters
  const [voltage, setVoltage] = useState<number>(120);
  const [frequency, setFrequency] = useState<number>(50);
  const [rs, setRs] = useState<number>(5);
  const [ls, setLs] = useState<number>(10); // mH
  const [r1, setR1] = useState<number>(20);
  const [l1, setL1] = useState<number>(40); // mH
  const [r2, setR2] = useState<number>(15);
  const [c2, setC2] = useState<number>(30); // µF

  const [activeTab, setActiveTab] = useState<'schematic' | 'reduction' | 'phasor' | 'power'>('schematic');

  const handleReset = () => {
    setVoltage(120);
    setFrequency(50);
    setRs(5);
    setLs(10);
    setR1(20);
    setL1(40);
    setR2(15);
    setC2(30);
  };

  const applyPreset = (preset: 'standard' | 'pfc' | 'tuned' | 'pure') => {
    if (preset === 'standard') {
      setVoltage(120); setFrequency(50);
      setRs(4); setLs(12);
      setR1(25); setL1(60);
      setR2(20); setC2(40);
    } else if (preset === 'pfc') {
      setVoltage(230); setFrequency(50);
      setRs(2); setLs(5);
      setR1(15); setL1(80); // inductive load
      setR2(1); setC2(65);  // capacitor bank for PF correction
    } else if (preset === 'tuned') {
      setVoltage(100); setFrequency(100);
      setRs(3); setLs(5);
      setR1(10); setL1(50);
      setR2(10); setC2(50.66); // resonant at 100 Hz
    } else if (preset === 'pure') {
      setVoltage(120); setFrequency(60);
      setRs(2); setLs(0);
      setR1(0.1); setL1(50);
      setR2(0.1); setC2(140);
    }
  };

  // Calculations
  const omega = 2 * Math.PI * Math.max(frequency, 1);
  const xls = omega * (ls * 1e-3);
  const xl1 = omega * (l1 * 1e-3);
  const xc2 = c2 > 0 ? 1 / (omega * (c2 * 1e-6)) : 1e9;

  // Series Impedance: Z_s = Rs + j(xls)
  const z_s: Complex = { r: Math.max(rs, 0), i: xls };
  // Branch 1 Impedance: Z_1 = R1 + j(xl1)
  const z_1: Complex = { r: Math.max(r1, 0.001), i: xl1 };
  // Branch 2 Impedance: Z_2 = R2 - j(xc2)
  const z_2: Complex = { r: Math.max(r2, 0.001), i: -xc2 };

  // Admittances
  const y_1 = cInv(z_1);
  const y_2 = cInv(z_2);
  const y_p = cAdd(y_1, y_2);

  // Parallel Equivalent Impedance Z_p = 1 / Y_p
  const z_p = cInv(y_p);

  // Total Input Impedance Z_in = Z_s + Z_p
  const z_in = cAdd(z_s, z_p);
  const z_in_mag = cMag(z_in);
  const z_in_ang = cAngDeg(z_in);

  // Total Current Phasor I_total = V_source / Z_in (Assume V_source = V ∠ 0°)
  const v_source: Complex = { r: voltage, i: 0 };
  const i_total = cDiv(v_source, z_in);
  const i_total_mag = cMag(i_total);
  const i_total_ang = cAngDeg(i_total);

  // Parallel Node Voltage V_p = I_total · Z_p
  const v_p = cMul(i_total, z_p);
  const v_p_mag = cMag(v_p);
  const v_p_ang = cAngDeg(v_p);

  // Series Drop V_s = I_total · Z_s
  const v_s = cMul(i_total, z_s);
  const v_s_mag = cMag(v_s);

  // Branch Currents: I1 = V_p / Z1, I2 = V_p / Z2
  const i_1 = cDiv(v_p, z_1);
  const i_1_mag = cMag(i_1);
  const i_1_ang = cAngDeg(i_1);

  const i_2 = cDiv(v_p, z_2);
  const i_2_mag = cMag(i_2);
  const i_2_ang = cAngDeg(i_2);

  // Powers
  const p_total = voltage * i_total_mag * Math.cos((z_in_ang * Math.PI) / 180);
  const q_total = voltage * i_total_mag * Math.sin((z_in_ang * Math.PI) / 180);
  const s_total = voltage * i_total_mag;
  const powerFactor = z_in_mag > 0 ? Math.cos((z_in_ang * Math.PI) / 180) : 1;
  const pfType = z_in_ang > 0.5 ? 'Lagging' : z_in_ang < -0.5 ? 'Leading' : 'Unity';

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
        <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 mr-2 flex items-center gap-1.5">
            <GitBranch className="w-4 h-4" /> {t.presets}:
          </span>
          <button
            type="button"
            onClick={() => applyPreset('standard')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            {t.presetStandard}
          </button>
          <button
            type="button"
            onClick={() => applyPreset('pfc')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            {t.presetPFC}
          </button>
          <button
            type="button"
            onClick={() => applyPreset('tuned')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            {t.presetTuned}
          </button>
          <button
            type="button"
            onClick={() => applyPreset('pure')}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
          >
            {t.presetPure}
          </button>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
          {/* Voltage & Frequency */}
          <div className="space-y-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800/80">
            <div className="text-xs font-bold text-sky-400 uppercase tracking-wide">AC Supply</div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>{t.voltageLabel}</span>
                <span className="font-mono text-sky-300 font-bold">{voltage} V</span>
              </div>
              <input
                type="range"
                min="20"
                max="300"
                step="5"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
                aria-label={t.voltageLabel}
              />
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>{t.freqLabel}</span>
                <span className="font-mono text-sky-300 font-bold">{frequency} Hz</span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                step="5"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
                aria-label={t.freqLabel}
              />
            </div>
          </div>

          {/* Series Section */}
          <div className="space-y-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800/80">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">Series Branch (Z_s)</div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>{t.rsLabel}</span>
                <span className="font-mono text-amber-300 font-bold">{rs} Ω</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="1"
                value={rs}
                onChange={(e) => setRs(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                aria-label={t.rsLabel}
              />
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>{t.lsLabel}</span>
                <span className="font-mono text-amber-300 font-bold">{ls} mH</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="2"
                value={ls}
                onChange={(e) => setLs(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                aria-label={t.lsLabel}
              />
            </div>
          </div>

          {/* Parallel Branch 1 */}
          <div className="space-y-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800/80">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Branch 1: RL (Z_1)</div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>{t.r1Label}</span>
                <span className="font-mono text-emerald-300 font-bold">{r1} Ω</span>
              </div>
              <input
                type="range"
                min="1"
                max="60"
                step="1"
                value={r1}
                onChange={(e) => setR1(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                aria-label={t.r1Label}
              />
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>{t.l1Label}</span>
                <span className="font-mono text-emerald-300 font-bold">{l1} mH</span>
              </div>
              <input
                type="range"
                min="0"
                max="150"
                step="5"
                value={l1}
                onChange={(e) => setL1(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                aria-label={t.l1Label}
              />
            </div>
          </div>

          {/* Parallel Branch 2 */}
          <div className="space-y-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800/80">
            <div className="text-xs font-bold text-purple-400 uppercase tracking-wide">Branch 2: RC (Z_2)</div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>{t.r2Label}</span>
                <span className="font-mono text-purple-300 font-bold">{r2} Ω</span>
              </div>
              <input
                type="range"
                min="1"
                max="60"
                step="1"
                value={r2}
                onChange={(e) => setR2(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
                aria-label={t.r2Label}
              />
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>{t.c2Label}</span>
                <span className="font-mono text-purple-300 font-bold">{c2} µF</span>
              </div>
              <input
                type="range"
                min="1"
                max="120"
                step="2"
                value={c2}
                onChange={(e) => setC2(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
                aria-label={t.c2Label}
              />
            </div>
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex gap-2 border-b border-slate-800 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('schematic')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'schematic'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {t.tabSchematic}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('reduction')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'reduction'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {t.tabReduction}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('phasor')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'phasor'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {t.tabPhasor}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('power')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === 'power'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            {t.tabPower}
          </button>
        </div>

        {/* Tab 1: Interactive Schematic */}
        {activeTab === 'schematic' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
            <div className="relative w-full overflow-x-auto">
              <svg viewBox="0 0 750 320" className="w-full max-w-3xl mx-auto block min-w-[500px]">
                <defs>
                  <linearGradient id="gradSupply" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>

                {/* Circuit Background Grid */}
                <rect x="5" y="5" width="740" height="310" rx="12" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />

                {/* AC Source */}
                <g transform="translate(60, 160)">
                  <circle cx="0" cy="0" r="28" fill="url(#gradSupply)" fillOpacity="0.15" stroke="#38bdf8" strokeWidth="2.5" />
                  <path d="M -14 0 Q -7 -14 0 0 Q 7 14 14 0" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                  <text x="0" y="44" fill="#bae6fd" fontSize="13" textAnchor="middle" fontWeight="bold">
                    {voltage} V, {frequency} Hz
                  </text>
                </g>

                {/* Main Upper Wires */}
                <path d="M 60 132 L 60 70 L 140 70" fill="none" stroke="#64748b" strokeWidth="3" />
                
                {/* Series Element Z_s (Rs + Ls) */}
                <g transform="translate(140, 50)">
                  {/* Rs */}
                  <rect x="0" y="5" width="60" height="30" rx="4" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
                  <text x="30" y="24" fill="#fde68a" fontSize="11" textAnchor="middle" fontWeight="bold">
                    Rs={rs}Ω
                  </text>
                  {/* Wire between */}
                  <line x1="60" y1="20" x2="80" y2="20" stroke="#64748b" strokeWidth="3" />
                  {/* Ls Coil */}
                  <rect x="80" y="5" width="70" height="30" rx="4" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
                  <text x="115" y="24" fill="#fde68a" fontSize="11" textAnchor="middle" fontWeight="bold">
                    Ls={ls}mH
                  </text>
                  <text x="75" y="-6" fill="#fef08a" fontSize="11" textAnchor="middle" fontWeight="bold">
                    Z_s = ({rs} + j{xls.toFixed(1)}) Ω
                  </text>
                </g>

                {/* Current arrow I_total */}
                <g transform="translate(100, 55)">
                  <line x1="0" y1="0" x2="25" y2="0" stroke="#38bdf8" strokeWidth="2.5" />
                  <polygon points="25,-4 32,0 25,4" fill="#38bdf8" />
                  <text x="12" y="-6" fill="#38bdf8" fontSize="11" fontWeight="bold">
                    I_total={i_total_mag.toFixed(2)}A
                  </text>
                </g>

                {/* Wire to Parallel Node A */}
                <line x1="290" y1="70" x2="380" y2="70" stroke="#64748b" strokeWidth="3" />
                {/* Node A */}
                <circle cx="380" cy="70" r="5" fill="#f59e0b" />
                <text x="380" y="55" fill="#fcd34d" fontSize="12" fontWeight="bold" textAnchor="middle">
                  Node A (V_p = {v_p_mag.toFixed(1)}V ∠{v_p_ang.toFixed(1)}°)
                </text>

                {/* Split to Branch 1 & Branch 2 */}
                <path d="M 380 70 L 460 70 L 460 110" fill="none" stroke="#64748b" strokeWidth="3" />
                <path d="M 380 70 L 620 70 L 620 110" fill="none" stroke="#64748b" strokeWidth="3" />

                {/* Branch 1 (RL) */}
                <g transform="translate(425, 110)">
                  <rect x="0" y="0" width="70" height="30" rx="4" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
                  <text x="35" y="19" fill="#a7f3d0" fontSize="11" textAnchor="middle" fontWeight="bold">R1={r1}Ω</text>
                  <line x1="35" y1="30" x2="35" y2="45" stroke="#64748b" strokeWidth="3" />
                  <rect x="0" y="45" width="70" height="30" rx="4" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
                  <text x="35" y="64" fill="#a7f3d0" fontSize="11" textAnchor="middle" fontWeight="bold">L1={l1}mH</text>
                  <line x1="35" y1="75" x2="35" y2="120" stroke="#64748b" strokeWidth="3" />
                  <text x="35" y="140" fill="#6ee7b7" fontSize="11" textAnchor="middle" fontWeight="bold">
                    I_1 = {i_1_mag.toFixed(2)} A
                  </text>
                </g>

                {/* Branch 2 (RC) */}
                <g transform="translate(585, 110)">
                  <rect x="0" y="0" width="70" height="30" rx="4" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
                  <text x="35" y="19" fill="#e9d5ff" fontSize="11" textAnchor="middle" fontWeight="bold">R2={r2}Ω</text>
                  <line x1="35" y1="30" x2="35" y2="45" stroke="#64748b" strokeWidth="3" />
                  <rect x="0" y="45" width="70" height="30" rx="4" fill="#581c87" stroke="#c084fc" strokeWidth="2" />
                  <text x="35" y="64" fill="#e9d5ff" fontSize="11" textAnchor="middle" fontWeight="bold">C2={c2}µF</text>
                  <line x1="35" y1="75" x2="35" y2="120" stroke="#64748b" strokeWidth="3" />
                  <text x="35" y="140" fill="#d8b4fe" fontSize="11" textAnchor="middle" fontWeight="bold">
                    I_2 = {i_2_mag.toFixed(2)} A
                  </text>
                </g>

                {/* Bottom Node B & Return Wire */}
                <path d="M 460 230 L 460 260 L 620 260 L 620 230" fill="none" stroke="#64748b" strokeWidth="3" />
                <circle cx="540" cy="260" r="5" fill="#f59e0b" />
                <text x="540" y="280" fill="#fcd34d" fontSize="12" fontWeight="bold" textAnchor="middle">Node B (Reference 0V)</text>
                <path d="M 540 260 L 60 260 L 60 188" fill="none" stroke="#64748b" strokeWidth="3" />
              </svg>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-800 text-xs">
              <div className="bg-slate-900/70 p-2.5 rounded-lg border border-slate-800">
                <div className="text-slate-400">Z_in (Magnitude & Angle)</div>
                <div className="font-mono text-sm font-bold text-sky-400">
                  {z_in_mag.toFixed(2)} Ω ∠ {z_in_ang.toFixed(1)}°
                </div>
              </div>
              <div className="bg-slate-900/70 p-2.5 rounded-lg border border-slate-800">
                <div className="text-slate-400">Total Line Current</div>
                <div className="font-mono text-sm font-bold text-amber-400">
                  {i_total_mag.toFixed(2)} A ∠ {i_total_ang.toFixed(1)}°
                </div>
              </div>
              <div className="bg-slate-900/70 p-2.5 rounded-lg border border-slate-800">
                <div className="text-slate-400">Parallel Node V_p</div>
                <div className="font-mono text-sm font-bold text-emerald-400">
                  {v_p_mag.toFixed(1)} V ∠ {v_p_ang.toFixed(1)}°
                </div>
              </div>
              <div className="bg-slate-900/70 p-2.5 rounded-lg border border-slate-800">
                <div className="text-slate-400">Power Factor</div>
                <div className="font-mono text-sm font-bold text-purple-400">
                  {powerFactor.toFixed(3)} ({pfType})
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Step-by-Step Mathematical Reduction */}
        {activeTab === 'reduction' && (
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4 text-xs sm:text-sm font-mono text-slate-200">
            {/* Step 1 */}
            <div className="p-3.5 bg-slate-900/60 rounded-lg border border-slate-800">
              <div className="text-amber-400 font-bold mb-1.5 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> {t.step1Title}
              </div>
              <div className="space-y-1 text-slate-300">
                <div>• ω = 2πf = 2π · {frequency} = <span className="text-sky-300 font-bold">{omega.toFixed(1)} rad/s</span></div>
                <div>• Series Impedance: Z_s = {rs} + j({omega.toFixed(1)} · {ls}×10⁻³) = <span className="text-amber-300 font-bold">{rs} + j{xls.toFixed(2)} Ω</span></div>
                <div>• Branch 1 (RL): Z_1 = {r1} + j({omega.toFixed(1)} · {l1}×10⁻³) = <span className="text-emerald-300 font-bold">{r1} + j{xl1.toFixed(2)} Ω</span> = {cMag(z_1).toFixed(2)} ∠ {cAngDeg(z_1).toFixed(1)}° Ω</div>
                <div>• Branch 2 (RC): Z_2 = {r2} - j/( {omega.toFixed(1)} · {c2}×10⁻⁶ ) = <span className="text-purple-300 font-bold">{r2} - j{xc2.toFixed(2)} Ω</span> = {cMag(z_2).toFixed(2)} ∠ {cAngDeg(z_2).toFixed(1)}° Ω</div>
              </div>
            </div>

            {/* Step 2 & 3 */}
            <div className="p-3.5 bg-slate-900/60 rounded-lg border border-slate-800">
              <div className="text-amber-400 font-bold mb-1.5 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> {t.step2Title} & {t.step3Title}
              </div>
              <div className="space-y-1 text-slate-300">
                <div>• Y_1 = 1 / Z_1 = ({z_1.r} - j{z_1.i.toFixed(2)}) / {(z_1.r**2 + z_1.i**2).toFixed(1)} = <span className="text-emerald-300 font-bold">{y_1.r.toFixed(4)} {y_1.i >= 0 ? '+' : '-'} j{Math.abs(y_1.i).toFixed(4)} S</span></div>
                <div>• Y_2 = 1 / Z_2 = ({z_2.r} + j{Math.abs(z_2.i).toFixed(2)}) / {(z_2.r**2 + z_2.i**2).toFixed(1)} = <span className="text-purple-300 font-bold">{y_2.r.toFixed(4)} {y_2.i >= 0 ? '+' : '-'} j{Math.abs(y_2.i).toFixed(4)} S</span></div>
                <div>• Total Parallel Admittance: Y_p = Y_1 + Y_2 = <span className="text-sky-300 font-bold">({y_p.r.toFixed(4)} {y_p.i >= 0 ? '+' : '-'} j{Math.abs(y_p.i).toFixed(4)}) S</span> = {cMag(y_p).toFixed(4)} ∠ {cAngDeg(y_p).toFixed(1)}° S</div>
              </div>
            </div>

            {/* Step 4 & 5 */}
            <div className="p-3.5 bg-slate-900/60 rounded-lg border border-slate-800">
              <div className="text-amber-400 font-bold mb-1.5 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> {t.step4Title} & {t.step5Title}
              </div>
              <div className="space-y-1 text-slate-300">
                <div>• Parallel Equivalent: Z_p = 1 / Y_p = <span className="text-sky-300 font-bold">({z_p.r.toFixed(2)} {z_p.i >= 0 ? '+' : '-'} j{Math.abs(z_p.i).toFixed(2)}) Ω</span> = {cMag(z_p).toFixed(2)} ∠ {cAngDeg(z_p).toFixed(1)}° Ω</div>
                <div>• Total Input Impedance: Z_in = Z_s + Z_p = ({z_s.r} + j{z_s.i.toFixed(2)}) + ({z_p.r.toFixed(2)} {z_p.i >= 0 ? '+' : '-'} j{Math.abs(z_p.i).toFixed(2)})</div>
                <div className="text-amber-300 font-bold text-sm">• Z_in = ({z_in.r.toFixed(2)} {z_in.i >= 0 ? '+' : '-'} j{Math.abs(z_in.i).toFixed(2)}) Ω = {z_in_mag.toFixed(2)} ∠ {z_in_ang.toFixed(2)}° Ω</div>
              </div>
            </div>

            {/* Step 6 & 7 */}
            <div className="p-3.5 bg-slate-900/60 rounded-lg border border-slate-800">
              <div className="text-amber-400 font-bold mb-1.5 flex items-center gap-2">
                <ArrowRight className="w-4 h-4" /> {t.step6Title} & {t.step7Title}
              </div>
              <div className="space-y-1 text-slate-300">
                <div>• Total Current: I_total = ({voltage} ∠ 0°) / ({z_in_mag.toFixed(2)} ∠ {z_in_ang.toFixed(1)}°) = <span className="text-amber-300 font-bold">{i_total_mag.toFixed(3)} ∠ {i_total_ang.toFixed(2)}° A</span></div>
                <div>• Parallel Node Voltage: V_p = I_total · Z_p = ({i_total_mag.toFixed(3)} ∠ {i_total_ang.toFixed(1)}°) · ({cMag(z_p).toFixed(2)} ∠ {cAngDeg(z_p).toFixed(1)}°) = <span className="text-emerald-300 font-bold">{v_p_mag.toFixed(2)} ∠ {v_p_ang.toFixed(2)}° V</span></div>
                <div>• Branch 1 Current: I_1 = V_p / Z_1 = ({v_p_mag.toFixed(1)} ∠ {v_p_ang.toFixed(1)}°) / ({cMag(z_1).toFixed(2)} ∠ {cAngDeg(z_1).toFixed(1)}°) = <span className="text-emerald-300 font-bold">{i_1_mag.toFixed(3)} ∠ {i_1_ang.toFixed(2)}° A</span></div>
                <div>• Branch 2 Current: I_2 = V_p / Z_2 = ({v_p_mag.toFixed(1)} ∠ {v_p_ang.toFixed(1)}°) / ({cMag(z_2).toFixed(2)} ∠ {cAngDeg(z_2).toFixed(1)}°) = <span className="text-purple-300 font-bold">{i_2_mag.toFixed(3)} ∠ {i_2_ang.toFixed(2)}° A</span></div>
                <div className="text-xs text-sky-400 pt-1">• KCL Phasor Verification: I_1 + I_2 = ({i_1.r.toFixed(3)} + {i_2.r.toFixed(3)}) + j({i_1.i.toFixed(3)} + {i_2.i.toFixed(3)}) = {i_total.r.toFixed(3)} + j{i_total.i.toFixed(3)} A = I_total (Exact match!).</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Phasor Diagram */}
        {activeTab === 'phasor' && (
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
            <div className="text-xs text-slate-400 text-center">
              Phasor plane centered on Supply Voltage V_source (Reference at 0° along positive real axis).
            </div>
            <div className="relative w-full overflow-hidden">
              <svg viewBox="-180 -150 360 300" className="w-full max-w-md mx-auto block h-64">
                {/* Axes */}
                <line x1="-160" y1="0" x2="160" y2="0" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="0" y1="-130" x2="0" y2="130" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="150" y="-8" fill="#64748b" fontSize="10" textAnchor="end">+Re</text>
                <text x="8" y="-120" fill="#64748b" fontSize="10">+j Im</text>

                {/* V_source Phasor (130 px long at 0 deg) */}
                <line x1="0" y1="0" x2="130" y2="0" stroke="#38bdf8" strokeWidth="3" />
                <polygon points="130,0 122,-4 122,4" fill="#38bdf8" />
                <text x="135" y="4" fill="#38bdf8" fontSize="11" fontWeight="bold">V_source ({voltage}V)</text>

                {/* V_p Phasor */}
                {(() => {
                  const scaleV = 130 / Math.max(voltage, 1);
                  const radVp = (v_p_ang * Math.PI) / 180;
                  const pxVp = v_p_mag * scaleV * Math.cos(radVp);
                  const pyVp = -v_p_mag * scaleV * Math.sin(radVp);
                  return (
                    <g>
                      <line x1="0" y1="0" x2={pxVp} y2={pyVp} stroke="#34d399" strokeWidth="2.5" />
                      <polygon points={`${pxVp},${pyVp} ${pxVp - 6 * Math.cos(radVp - 0.4)},${pyVp + 6 * Math.sin(radVp - 0.4)} ${pxVp - 6 * Math.cos(radVp + 0.4)},${pyVp + 6 * Math.sin(radVp + 0.4)}`} fill="#34d399" />
                      <text x={pxVp + 8} y={pyVp} fill="#34d399" fontSize="10" fontWeight="bold">V_p ({v_p_mag.toFixed(0)}V)</text>
                    </g>
                  );
                })()}

                {/* Currents Phasors (Scaled) */}
                {(() => {
                  const maxI = Math.max(i_total_mag, i_1_mag, i_2_mag, 0.1);
                  const scaleI = 90 / maxI;

                  const radIt = (i_total_ang * Math.PI) / 180;
                  const pxIt = i_total_mag * scaleI * Math.cos(radIt);
                  const pyIt = -i_total_mag * scaleI * Math.sin(radIt);

                  const radI1 = (i_1_ang * Math.PI) / 180;
                  const pxI1 = i_1_mag * scaleI * Math.cos(radI1);
                  const pyI1 = -i_1_mag * scaleI * Math.sin(radI1);

                  const radI2 = (i_2_ang * Math.PI) / 180;
                  const pxI2 = i_2_mag * scaleI * Math.cos(radI2);
                  const pyI2 = -i_2_mag * scaleI * Math.sin(radI2);

                  return (
                    <g>
                      {/* I_total */}
                      <line x1="0" y1="0" x2={pxIt} y2={pyIt} stroke="#fbbf24" strokeWidth="3" />
                      <polygon points={`${pxIt},${pyIt} ${pxIt - 6 * Math.cos(radIt - 0.4)},${pyIt + 6 * Math.sin(radIt - 0.4)} ${pxIt - 6 * Math.cos(radIt + 0.4)},${pyIt + 6 * Math.sin(radIt + 0.4)}`} fill="#fbbf24" />
                      <text x={pxIt + 6} y={pyIt + 4} fill="#fbbf24" fontSize="10" fontWeight="bold">I_tot ({i_total_mag.toFixed(1)}A)</text>

                      {/* I_1 */}
                      <line x1="0" y1="0" x2={pxI1} y2={pyI1} stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                      <text x={pxI1 + 6} y={pyI1} fill="#10b981" fontSize="9">I_1 ({i_1_mag.toFixed(1)}A)</text>

                      {/* I_2 */}
                      <line x1="0" y1="0" x2={pxI2} y2={pyI2} stroke="#c084fc" strokeWidth="2" strokeDasharray="3 3" />
                      <text x={pxI2 + 6} y={pyI2} fill="#c084fc" fontSize="9">I_2 ({i_2_mag.toFixed(1)}A)</text>
                    </g>
                  );
                })()}
              </svg>
            </div>
            <div className="flex justify-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5"><span className="w-3 h-1 bg-sky-400 rounded"></span> V_source</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-1 bg-emerald-400 rounded"></span> V_node</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-1 bg-amber-400 rounded"></span> I_total</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-1 bg-emerald-500 rounded"></span> I_1 (RL)</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-1 bg-purple-400 rounded"></span> I_2 (RC)</span>
            </div>
          </div>
        )}

        {/* Tab 4: Power Breakdown */}
        {activeTab === 'power' && (
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/70 p-4 rounded-xl border border-emerald-500/30">
                <div className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1">Active Power (P)</div>
                <div className="font-mono text-2xl font-black text-emerald-300">{p_total.toFixed(1)} W</div>
                <div className="text-xs text-slate-400 mt-2">
                  Dissipated across Rs, R1, and R2: P = I_total²·Rs + I1²·R1 + I2²·R2
                </div>
              </div>
              <div className="bg-slate-900/70 p-4 rounded-xl border border-amber-500/30">
                <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">Reactive Power (Q)</div>
                <div className="font-mono text-2xl font-black text-amber-300">{q_total.toFixed(1)} VAR</div>
                <div className="text-xs text-slate-400 mt-2">
                  Net oscillation between Ls, L1 inductors (+VAR) and C2 capacitor (-VAR)
                </div>
              </div>
              <div className="bg-slate-900/70 p-4 rounded-xl border border-sky-500/30">
                <div className="text-xs uppercase tracking-wider text-sky-400 font-bold mb-1">Apparent Power (S)</div>
                <div className="font-mono text-2xl font-black text-sky-300">{s_total.toFixed(1)} VA</div>
                <div className="text-xs text-slate-400 mt-2">
                  S = V_source · I_total = √(P² + Q²)
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-amber-400 uppercase tracking-wide">Branch Power Allocations:</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
                <div className="p-2 bg-slate-950 rounded border border-slate-800">
                  <span className="text-amber-300">Series Resistor (Rs):</span> {(i_total_mag**2 * rs).toFixed(1)} W
                </div>
                <div className="p-2 bg-slate-950 rounded border border-slate-800">
                  <span className="text-emerald-300">Branch 1 Resistor (R1):</span> {(i_1_mag**2 * r1).toFixed(1)} W
                </div>
                <div className="p-2 bg-slate-950 rounded border border-slate-800">
                  <span className="text-purple-300">Branch 2 Resistor (R2):</span> {(i_2_mag**2 * r2).toFixed(1)} W
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </InteractiveSimulationCard>
  );
};
