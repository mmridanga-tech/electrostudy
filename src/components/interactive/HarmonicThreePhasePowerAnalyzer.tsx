import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Activity, Zap, AlertTriangle, ShieldAlert, Sliders, RefreshCw } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const HarmonicThreePhasePowerAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Inputs
  const [fundamentalI, setFundamentalI] = useState<number>(50); // A (I1)
  const [h3Pct, setH3Pct] = useState<number>(45); // 3rd Harmonic % (Triplen - Zero Sequence)
  const [h5Pct, setH5Pct] = useState<number>(20); // 5th Harmonic % (Negative Sequence)
  const [h7Pct, setH7Pct] = useState<number>(10); // 7th Harmonic % (Positive Sequence)
  const [dpf, setDpf] = useState<number>(0.92); // Displacement Power Factor

  // Presets
  const applyPreset = (type: 'linear' | 'smps' | 'vfd' | 'led') => {
    if (type === 'linear') {
      setH3Pct(0); setH5Pct(0); setH7Pct(0); setDpf(0.98);
    } else if (type === 'smps') {
      // Data center / IT equipment: Massive 3rd harmonic
      setH3Pct(65); setH5Pct(30); setH7Pct(15); setDpf(0.90);
    } else if (type === 'vfd') {
      // 6-Pulse VFD: Low 3rd, high 5th & 7th
      setH3Pct(2); setH5Pct(35); setH7Pct(18); setDpf(0.85);
    } else if (type === 'led') {
      setH3Pct(35); setH5Pct(15); setH7Pct(8); setDpf(0.95);
    }
  };

  // Harmonics calculation
  const i3 = (fundamentalI * h3Pct) / 100;
  const i5 = (fundamentalI * h5Pct) / 100;
  const i7 = (fundamentalI * h7Pct) / 100;

  // Phase Current True RMS
  const irms = Math.sqrt(fundamentalI * fundamentalI + i3 * i3 + i5 * i5 + i7 * i7);

  // Total Harmonic Current
  const ihTotal = Math.sqrt(i3 * i3 + i5 * i5 + i7 * i7);
  const thdI = fundamentalI > 0 ? (ihTotal / fundamentalI) * 100 : 0;

  // Neutral Current:
  // In balanced 3-phase, fundamental, 5th, and 7th cancel out in the neutral (sum to 0).
  // Triplens (3rd, 9th, 15th) are in phase across all 3 phases, adding up arithmetically:
  // In = 3 * I3
  const neutralI = 3 * i3;
  const neutralRatio = fundamentalI > 0 ? (neutralI / fundamentalI) * 100 : 0;

  // True Power Factor = DPF / sqrt(1 + THD^2)
  const truePf = dpf / Math.sqrt(1 + (thdI / 100) * (thdI / 100));

  const t = {
    en: {
      title: 'Harmonic Flow & Triplen Neutral Current Analyzer',
      subtitle: 'Harmonic Sequence Decoupling, Triplen Neutral Superposition & True vs Displacement PF',
      presets: 'Industrial Nonlinear Load Archetypes',
      smps: 'Data Center / IT (SMPS)',
      vfd: '6-Pulse VFD / Inverter',
      led: 'Commercial LED Array',
      linear: 'Linear Pure Resistive',
      harmonicControls: 'Current Harmonic Spectrum (% of I₁)',
      i1: 'Fundamental 50Hz/60Hz Current (I₁)',
      h3: '3rd Harmonic (150Hz / 180Hz) - Zero Sequence',
      h5: '5th Harmonic (250Hz / 300Hz) - Negative Sequence',
      h7: '7th Harmonic (350Hz / 420Hz) - Positive Sequence',
      dpfLabel: 'Displacement Power Factor (cos φ₁)',
      neutralAnalysis: 'Neutral Conductor Triplen Current Overload',
      neutralAmp: 'Neutral Return Current (In ≈ 3 × I₃)',
      neutralAmpSub: 'Triplen zero-sequence currents add arithmetically in neutral',
      thdLabel: 'Total Harmonic Distortion (THD_I)',
      truePfLabel: 'True Power Factor (TPF)',
      dpfShort: 'Displacement PF (DPF)',
      neutralBurnNotice: 'DANGER: Neutral current exceeds 100% of phase current! In commercial buildings with undersized shared neutrals (50% or 100% size), this causes catastrophic cable overheating and electrical fire risks.',
      vfdNotice: 'VFD harmonic profile: High 5th and 7th harmonics cause counter-rotating negative sequence torque and harmonic losses in supply transformers (K-factor rating required).'
    },
    hi: {
      title: 'हार्मोनिक प्रवाह एवं ट्रिप्लन न्यूट्रल धारा विश्लेषक',
      subtitle: 'हार्मोनिक अनुक्रम विघटन, ट्रिप्लन न्यूट्रल अध्यारोपण एवं वास्तविक बनाम डिस्प्लेसमेंट PF',
      presets: 'औद्योगिक नॉन-लीनियर लोड प्रकार',
      smps: 'डेटा सेंटर / IT उपकरण',
      vfd: '6-पल्स VFD / इन्वर्टर',
      led: 'कमर्शियल LED लाइटिंग',
      linear: 'लीनियर प्रतिरोधी लोड',
      harmonicControls: 'करंट हार्मोनिक स्पेक्ट्रम (% of I₁)',
      i1: 'मूल 50Hz धारा (I₁)',
      h3: 'तीसरी हार्मोनिक (150Hz) - जीरो अनुक्रम',
      h5: 'पांचवीं हार्मोनिक (250Hz) - नेगेटिव अनुक्रम',
      h7: 'सातवीं हार्मोनिक (350Hz) - पॉजिटिव अनुक्रम',
      dpfLabel: 'डिस्प्लेसमेंट पावर फैक्टर (cos φ₁)',
      neutralAnalysis: 'न्यूट्रल कंडक्टर ट्रिप्लन धारा ओवरलोड',
      neutralAmp: 'न्यूट्रल रिटर्न करंट (In ≈ 3 × I₃)',
      neutralAmpSub: 'ट्रिप्लन जीरो-अनुक्रम धाराएं न्यूट्रल में सीधे जुड़ती हैं',
      thdLabel: 'टोटल हार्मोनिक डिस्टॉर्शन (THD_I)',
      truePfLabel: 'ट्रू पावर फैक्टर (TPF)',
      dpfShort: 'डिस्प्लेसमेंट PF (DPF)',
      neutralBurnNotice: 'खतरा: न्यूट्रल करंट फेज करंट के 100% से अधिक है! कम साइज के न्यूट्रल में यह केबल को गर्म कर आग का खतरा पैदा करता है।',
      vfdNotice: 'VFD प्रोफाइल: 5वीं व 7वीं हार्मोनिक विपरीत घूर्णन टॉर्क और ट्रांसफार्मर में अत्यधिक हीटिंग पैदा करती हैं।'
    },
    bn: {
      title: 'হারমোনিক প্রবাহ ও ট্রিপলন নিউট্রাল কারেন্ট বিশ্লেষক',
      subtitle: 'হারমোনিক সিকোয়েন্স বিন্যাস, নিউট্রালে ট্রিপলন সংযোজন ও ট্রু বনাম ডিসপ্লেসমেন্ট PF',
      presets: 'শিল্প নন-লিনিয়ার লোড ধরন',
      smps: 'ডাটা সেন্টার / IT লোড',
      vfd: '৬-পালস VFD / ইনভার্টার',
      led: 'বাণিজ্যিক LED লাইটিং',
      linear: 'লিনিয়ার বিশুদ্ধ রোধক',
      harmonicControls: 'কারেন্ট হারমোনিক বর্ণালী (% of I₁)',
      i1: 'মৌলিক ৫০Hz কারেন্ট (I₁)',
      h3: '৩য় হারমোনিক (১৫০Hz) - জিরো সিকোয়েন্স',
      h5: '৫ম হারমোনিক (২৫০Hz) - নেগেটিভ সিকোয়েন্স',
      h7: '৭ম হারমোনিক (৩৫০Hz) - পজিটিভ সিকোয়েন্স',
      dpfLabel: 'ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর (cos φ₁)',
      neutralAnalysis: 'নিউট্রাল পরিবাহীতে ট্রিপলন কারেন্ট ওভারলোড',
      neutralAmp: 'নিউট্রাল কারেন্ট (In ≈ ৩ × I₃)',
      neutralAmpSub: 'ট্রিপলন জিরো-সিকোয়েন্স কারেন্ট নিউট্রালে গাণিতিকভাবে যোগ হয়',
      thdLabel: 'টোটাল হারমোনিক ডিসটরশন (THD_I)',
      truePfLabel: 'ট্রু পাওয়ার ফ্যাক্টর (TPF)',
      dpfShort: 'ডিসপ্লেসমেন্ট PF (DPF)',
      neutralBurnNotice: 'বিপদ: নিউট্রাল কারেন্ট ফেজ কারেন্টের ১০০% ছাড়িয়ে গেছে! সরু নিউট্রাল তারে এটি অগ্নিকাণ্ডের ঝুঁকি তৈরি করে।',
      vfdNotice: 'VFD প্রোফাইল: ৫ম ও ৭ম হারমোনিক বিপরীতমুখী ঘূর্ণন তৈরি করে ট্রান্সফরমার উত্তপ্ত করে।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 max-w-5xl mx-auto shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="p-2.5 bg-rose-500/10 text-rose-400 rounded-lg border border-rose-500/20">
          <Activity className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">{t.title}</h3>
          <p className="text-xs text-slate-400">{t.subtitle}</p>
        </div>
      </div>

      {/* Presets */}
      <div className="mb-5 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
        <div className="text-xs text-slate-400 font-medium mb-2">{t.presets}</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            type="button"
            onClick={() => applyPreset('smps')}
            className="py-1.5 px-2 bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 border border-rose-800/50 rounded text-xs font-medium text-center transition-colors"
          >
            {t.smps}
          </button>
          <button
            type="button"
            onClick={() => applyPreset('vfd')}
            className="py-1.5 px-2 bg-indigo-950/40 hover:bg-indigo-900/50 text-indigo-300 border border-indigo-800/50 rounded text-xs font-medium text-center transition-colors"
          >
            {t.vfd}
          </button>
          <button
            type="button"
            onClick={() => applyPreset('led')}
            className="py-1.5 px-2 bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 border border-amber-800/50 rounded text-xs font-medium text-center transition-colors"
          >
            {t.led}
          </button>
          <button
            type="button"
            onClick={() => applyPreset('linear')}
            className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded text-xs font-medium text-center transition-colors"
          >
            {t.linear}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-4 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.harmonicControls}</div>

          {/* I1 */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.i1}</span>
              <span className="font-mono text-emerald-400 font-bold">{fundamentalI} A</span>
            </div>
            <input
              id={`${controlId}-i1`}
              type="range"
              min="10"
              max="200"
              step="5"
              value={fundamentalI}
              onChange={(e) => setFundamentalI(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
          </div>

          {/* H3 */}
          <div className="p-2.5 bg-slate-900 rounded border border-purple-900/40 space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-purple-400 font-semibold">{t.h3}</span>
              <span className="font-mono text-purple-300 font-bold">{h3Pct}% ({i3.toFixed(1)} A)</span>
            </div>
            <input
              id={`${controlId}-h3`}
              type="range"
              min="0"
              max="80"
              value={h3Pct}
              onChange={(e) => setH3Pct(Number(e.target.value))}
              className="w-full accent-purple-500 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
          </div>

          {/* H5 */}
          <div className="p-2.5 bg-slate-900 rounded border border-rose-900/40 space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-rose-400 font-semibold">{t.h5}</span>
              <span className="font-mono text-rose-300 font-bold">{h5Pct}% ({i5.toFixed(1)} A)</span>
            </div>
            <input
              id={`${controlId}-h5`}
              type="range"
              min="0"
              max="50"
              value={h5Pct}
              onChange={(e) => setH5Pct(Number(e.target.value))}
              className="w-full accent-rose-500 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
          </div>

          {/* H7 */}
          <div className="p-2.5 bg-slate-900 rounded border border-blue-900/40 space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-blue-400 font-semibold">{t.h7}</span>
              <span className="font-mono text-blue-300 font-bold">{h7Pct}% ({i7.toFixed(1)} A)</span>
            </div>
            <input
              id={`${controlId}-h7`}
              type="range"
              min="0"
              max="35"
              value={h7Pct}
              onChange={(e) => setH7Pct(Number(e.target.value))}
              className="w-full accent-blue-500 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
          </div>

          {/* DPF */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.dpfLabel}</span>
              <span className="font-mono text-cyan-400 font-bold">{dpf.toFixed(2)}</span>
            </div>
            <input
              id={`${controlId}-dpf`}
              type="range"
              min="0.50"
              max="1.00"
              step="0.01"
              value={dpf}
              onChange={(e) => setDpf(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
          </div>
        </div>

        {/* Display & Analysis */}
        <div className="lg:col-span-6 space-y-4">
          {/* Neutral Current Hero */}
          <div className={`p-4 rounded-lg border ${
            neutralRatio > 100
              ? 'bg-rose-950/60 border-rose-600 text-rose-200'
              : 'bg-slate-950/90 border-slate-800 text-slate-200'
          }`}>
            <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">{t.neutralAnalysis}</span>
            <div className="flex justify-between items-baseline mt-1">
              <div className="text-2xl font-mono font-bold text-amber-400">
                {neutralI.toFixed(1)} <span className="text-sm font-normal text-slate-400">A RMS</span>
              </div>
              <span className={`font-mono text-sm font-bold ${neutralRatio > 100 ? 'text-rose-400' : 'text-slate-300'}`}>
                {neutralRatio.toFixed(1)}% of I₁
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">{t.neutralAmpSub}</p>
          </div>

          {/* Power Quality Metrics */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block mb-1">True RMS I</span>
              <div className="text-lg font-bold font-mono text-slate-200">{irms.toFixed(1)} A</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block mb-1">{t.thdLabel}</span>
              <div className={`text-lg font-bold font-mono ${thdI > 20 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {thdI.toFixed(1)}%
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block mb-1">{t.truePfLabel}</span>
              <div className="text-lg font-bold font-mono text-cyan-400">{truePf.toFixed(3)}</div>
              <span className="text-[9px] text-slate-500 font-mono">DPF: {dpf.toFixed(2)}</span>
            </div>
          </div>

          {/* Harmonic Sequence Breakdown */}
          <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs space-y-2">
            <span className="text-[11px] font-bold text-slate-300 block uppercase tracking-wider">Harmonic Sequence Polarities</span>
            <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
              <div className="p-1.5 bg-purple-950/30 rounded border border-purple-900/40 text-purple-300">
                <span className="block font-bold">Zero (V₀/I₀)</span>
                <span>h = 3, 9, 15</span>
              </div>
              <div className="p-1.5 bg-rose-950/30 rounded border border-rose-900/40 text-rose-300">
                <span className="block font-bold">Negative (V₂/I₂)</span>
                <span>h = 2, 5, 8, 11</span>
              </div>
              <div className="p-1.5 bg-emerald-950/30 rounded border border-emerald-900/40 text-emerald-300">
                <span className="block font-bold">Positive (V₁/I₁)</span>
                <span>h = 1, 4, 7, 10</span>
              </div>
            </div>
          </div>

          {/* Danger Alert */}
          {neutralRatio > 100 ? (
            <div className="p-3 bg-rose-950/60 border border-rose-600 rounded-lg text-rose-200 text-xs flex items-start gap-2.5">
              <ShieldAlert className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
              <div>
                <span className="font-bold text-rose-100 block">Neutral Thermal Hazard!</span>
                {t.neutralBurnNotice}
              </div>
            </div>
          ) : h5Pct > 25 ? (
            <div className="p-3 bg-amber-950/40 border border-amber-800/60 rounded-lg text-amber-300 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
              <div>
                <span className="font-bold text-amber-200 block">Negative Sequence Motor Stress</span>
                {t.vfdNotice}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
