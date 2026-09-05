import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { AlertTriangle, ShieldCheck, Flame, ToggleLeft, ToggleRight, Radio } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const NeutralDisplacementSimulator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Operating States
  const [loadType, setLoadType] = useState<'balanced' | 'unbalanced'>('unbalanced');
  const [faultScenario, setFaultScenario] = useState<'healthy' | 'high_r' | 'broken_neutral' | 'single_phase'>('broken_neutral');
  const [vNominal] = useState<number>(230); // Nominal Phase-to-Neutral voltage (400V line)

  // Load Resistances (Ohms)
  const rA = loadType === 'balanced' ? 20 : 10;   // Heavy load on Phase A
  const rB = loadType === 'balanced' ? 20 : 50;   // Light load on Phase B
  const rC = loadType === 'balanced' ? 20 : 100;  // Very light load on Phase C

  // Calculate Neutral displacement and effective voltages
  // Supply ideal phasors:
  // Van = 230 ∠ 0° = 230 + j0
  // Vbn = 230 ∠ -120° = -115 - j199.18
  // Vcn = 230 ∠ +120° = -115 + j199.18
  const Van = { r: vNominal, i: 0 };
  const Vbn = { r: -0.5 * vNominal, i: -(Math.sqrt(3) / 2) * vNominal };
  const Vcn = { r: -0.5 * vNominal, i: (Math.sqrt(3) / 2) * vNominal };

  let Ya = { r: 1 / rA, i: 0 };
  let Yb = { r: 1 / rB, i: 0 };
  let Yc = { r: 1 / rC, i: 0 };

  if (faultScenario === 'single_phase') {
    // Phase A broken/open
    Ya = { r: 0, i: 0 };
  }

  // Neutral admittance Yn
  let Yn = { r: 1000, i: 0 }; // default healthy low resistance
  if (faultScenario === 'healthy') {
    Yn = { r: 100, i: 0 }; // 0.01 ohm
  } else if (faultScenario === 'high_r') {
    Yn = { r: 1 / 15, i: 0 }; // 15 ohm high resistance neutral
  } else if (faultScenario === 'broken_neutral' || faultScenario === 'single_phase') {
    Yn = { r: 0, i: 0 }; // completely open neutral
  }

  // Millman's Theorem: V_N'N = (Van Ya + Vbn Yb + Vcn Yc) / (Ya + Yb + Yc + Yn)
  const numR = Van.r * Ya.r + Vbn.r * Yb.r + Vcn.r * Yc.r;
  const numI = Van.i * Ya.r + Vbn.i * Yb.r + Vcn.i * Yc.r;
  const denR = Ya.r + Yb.r + Yc.r + Yn.r;

  const VshiftR = numR / denR;
  const VshiftI = numI / denR;
  const vShiftMag = Math.sqrt(VshiftR * VshiftR + VshiftI * VshiftI);

  // Resulting phase voltages on appliances
  const VaLoad = { r: Van.r - VshiftR, i: Van.i - VshiftI };
  const VbLoad = { r: Vbn.r - VshiftR, i: Vbn.i - VshiftI };
  const VcLoad = { r: Vcn.r - VshiftR, i: Vcn.i - VshiftI };

  const magVa = faultScenario === 'single_phase' ? 0 : Math.sqrt(VaLoad.r * VaLoad.r + VaLoad.i * VaLoad.i);
  const magVb = Math.sqrt(VbLoad.r * VbLoad.r + VbLoad.i * VbLoad.i);
  const magVc = Math.sqrt(VcLoad.r * VcLoad.r + VcLoad.i * VcLoad.i);

  // Overvoltage / Undervoltage detection
  const isOvervoltage = Math.max(magVa, magVb, magVc) > 260;
  const isUndervoltage = (magVa > 0 && magVa < 190) || magVb < 190 || magVc < 190;

  const t = {
    en: {
      title: 'Neutral Displacement & Open-Neutral Fault Simulator',
      subtitle: 'Transient Voltage Redistribution, Single-Phasing & Catastrophic Overvoltage on Floating Loads',
      faultMode: 'Neutral Conductor Integrity Scenario',
      healthy: 'Healthy Solid Neutral (0 Ω)',
      highR: 'High-Resistance Neutral (15 Ω)',
      brokenN: 'Broken / Open Neutral (∞ Ω)',
      singlePh: 'Single-Phasing (Phase A Open + Floating N)',
      loadBal: 'Load Distribution Profile',
      bal: 'Balanced Equal Loading',
      unbal: 'Severely Unbalanced Phase Loading',
      vnShift: 'Neutral Point Displacement (VN\'N)',
      voltagesApplied: 'Terminal Voltages Delivered to Single-Phase Loads',
      dangerOvervoltage: 'DANGER: Phase Overvoltage (>260V) detected! Electronics & appliances will burn out immediately.',
      dangerUndervoltage: 'WARNING: Phase Undervoltage (<190V) causing motor stalling and compressor overheating.',
      safeOperation: 'System Stable: Neutral maintains 0V reference, isolating phase load variations.'
    },
    hi: {
      title: 'न्यूट्रल विस्थापन एवं ओपन-न्यूट्रल फॉल्ट सिम्युलेटर',
      subtitle: 'फ्लोटिंग लोड पर क्षणिक वोल्टेज पुनर्वितरण, सिंगल-फेजिंग एवं विनाशकारी ओवर-वोल्टेज',
      faultMode: 'न्यूट्रल कंडक्टर अखंडता परिदृश्य',
      healthy: 'स्वस्थ सॉलिड न्यूट्रल (0 Ω)',
      highR: 'उच्च प्रतिरोध न्यूट्रल (15 Ω)',
      brokenN: 'टूटा हुआ / ओपन न्यूट्रल (∞ Ω)',
      singlePh: 'सिंगल-फेजिंग (फेज A ओपन + फ्लोटिंग N)',
      loadBal: 'लोड वितरण प्रोफ़ाइल',
      bal: 'संतुलित समान भार',
      unbal: 'अत्यधिक असंतुलित फेज भार',
      vnShift: 'न्यूट्रल बिंदु विस्थापन (VN\'N)',
      voltagesApplied: 'सिंगल-फेज उपकरणों पर मिलने वाला वोल्टेज',
      dangerOvervoltage: 'खतरा: अत्यधिक ओवर-वोल्टेज (>260V)! उपकरण तुरंत जलकर नष्ट हो जाएंगे।',
      dangerUndervoltage: 'चेतावनी: अंडर-वोल्टेज (<190V) से मोटरें जाम होंगी एवं कंप्रेसर गर्म होंगे।',
      safeOperation: 'प्रणाली स्थिर: न्यूट्रल 0V संदर्भ बनाए रखता है, जिससे उपकरण सुरक्षित रहते हैं।'
    },
    bn: {
      title: 'নিউট্রাল স্থানান্তর ও ওপেন-নিউট্রাল ফল্ট সিমুলেটর',
      subtitle: 'ভাসমান লোডে ভোল্টেজ স্থানান্তর, সিঙ্গেল-ফেজিং ও মারাত্মক ওভার-ভোল্টেজ',
      faultMode: 'নিউট্রাল পরিবাহীর অবস্থা',
      healthy: 'স্বাভাবিক দৃঢ় নিউট্রাল (০ Ω)',
      highR: 'উচ্চ রোধযুক্ত নিউট্রাল (১৫ Ω)',
      brokenN: 'বিচ্ছিন্ন / ওপেন নিউট্রাল (∞ Ω)',
      singlePh: 'সিঙ্গেল-ফেজিং (ফেজ A বিচ্ছিন্ন + ভাসমান N)',
      loadBal: 'লোড বণ্টন মোড',
      bal: 'ভারসাম্যপূর্ণ সম-লোড',
      unbal: 'তীব্র ভারসাম্যহীন ফেজ লোড',
      vnShift: 'নিউট্রাল বিন্দু স্থানান্তর (VN\'N)',
      voltagesApplied: 'যন্ত্রপাতিতে প্রাপ্ত কার্যকর ভোল্টেজ',
      dangerOvervoltage: 'বিপদ: মারাত্মক ওভার-ভোল্টেজ (>২৬০V)! ঘরের যন্ত্রপাতি তৎক্ষণাৎ পুড়ে যাবে।',
      dangerUndervoltage: 'সতর্কতা: আন্ডার-ভোল্টেজ (<১৯০V) এর কারণে মোটর লক ও অতিরিক্ত গরম হবে।',
      safeOperation: 'সিস্টেম নিরাপদ: নিউট্রাল ০V রেফারেন্স ধরে রেখে প্রতিটি ফেজ সুরক্ষিত রাখে।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 max-w-5xl mx-auto shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">{t.title}</h3>
          <p className="text-xs text-slate-400">{t.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
          <div>
            <label className="text-xs text-slate-400 block mb-2 font-semibold uppercase tracking-wider">{t.faultMode}</label>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setFaultScenario('healthy')}
                className={`w-full py-2 px-3 rounded text-xs font-medium border text-left flex items-center justify-between transition-colors ${
                  faultScenario === 'healthy'
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{t.healthy}</span>
                <ShieldCheck className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setFaultScenario('high_r')}
                className={`w-full py-2 px-3 rounded text-xs font-medium border text-left flex items-center justify-between transition-colors ${
                  faultScenario === 'high_r'
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{t.highR}</span>
                <AlertTriangle className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setFaultScenario('broken_neutral')}
                className={`w-full py-2 px-3 rounded text-xs font-medium border text-left flex items-center justify-between transition-colors ${
                  faultScenario === 'broken_neutral'
                    ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{t.brokenN}</span>
                <Flame className="w-4 h-4 text-rose-400" />
              </button>

              <button
                type="button"
                onClick={() => setFaultScenario('single_phase')}
                className={`w-full py-2 px-3 rounded text-xs font-medium border text-left flex items-center justify-between transition-colors ${
                  faultScenario === 'single_phase'
                    ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{t.singlePh}</span>
                <Radio className="w-4 h-4 text-purple-400" />
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <label className="text-xs text-slate-400 block mb-2 font-semibold uppercase tracking-wider">{t.loadBal}</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLoadType('bal')}
                className={`py-2 px-2.5 rounded text-xs font-medium border transition-colors ${
                  loadType === 'balanced'
                    ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.bal}
              </button>
              <button
                type="button"
                onClick={() => setLoadType('unbalanced')}
                className={`py-2 px-2.5 rounded text-xs font-medium border transition-colors ${
                  loadType === 'unbalanced'
                    ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {t.unbal}
              </button>
            </div>

            <div className="mt-3 p-2.5 bg-slate-900 rounded border border-slate-800 text-[11px] font-mono text-slate-300 space-y-0.5">
              <div>Phase A Load: <span className="text-red-400 font-bold">{rA} Ω</span> (Heavy)</div>
              <div>Phase B Load: <span className="text-yellow-400 font-bold">{rB} Ω</span> (Medium)</div>
              <div>Phase C Load: <span className="text-blue-400 font-bold">{rC} Ω</span> (Light)</div>
            </div>
          </div>
        </div>

        {/* Display and Schematic */}
        <div className="lg:col-span-7 space-y-4">
          {/* Neutral Shift Hero Card */}
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 block font-medium">{t.vnShift}</span>
              <div className="text-2xl font-mono font-bold text-amber-400">
                {vShiftMag.toFixed(1)} <span className="text-sm font-normal text-slate-500">Volts</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">Potential of Star Point N' w.r.t Ground</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block font-medium">Neutral Status</span>
              <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold inline-block mt-1 ${
                faultScenario === 'broken_neutral' || faultScenario === 'single_phase'
                  ? 'bg-rose-950 text-rose-300 border border-rose-800'
                  : faultScenario === 'high_r'
                  ? 'bg-amber-950 text-amber-300 border border-amber-800'
                  : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
              }`}>
                {faultScenario === 'healthy' ? 'SOLID GROUND' : faultScenario === 'high_r' ? 'HIGH IMPEDANCE' : 'FLOATING'}
              </span>
            </div>
          </div>

          {/* Delivered Terminal Voltages Cards */}
          <div>
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">{t.voltagesApplied}</div>
            <div className="grid grid-cols-3 gap-3">
              {/* Phase A */}
              <div className={`p-3 rounded-lg border ${
                magVa > 260
                  ? 'bg-rose-950/60 border-rose-700 text-rose-200'
                  : magVa > 0 && magVa < 190
                  ? 'bg-amber-950/40 border-amber-700 text-amber-200'
                  : 'bg-slate-950/80 border-slate-800 text-slate-200'
              }`}>
                <div className="text-xs text-red-400 font-bold mb-1">Phase A-N'</div>
                <div className="text-xl font-bold font-mono">
                  {magVa.toFixed(1)} <span className="text-xs font-normal">V</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  {magVa === 0 ? 'Dead Phase' : magVa > 260 ? 'OVERVOLTAGE!' : magVa < 190 ? 'UNDERVOLTAGE!' : 'Normal (±10%)'}
                </div>
              </div>

              {/* Phase B */}
              <div className={`p-3 rounded-lg border ${
                magVb > 260
                  ? 'bg-rose-950/60 border-rose-700 text-rose-200'
                  : magVb < 190
                  ? 'bg-amber-950/40 border-amber-700 text-amber-200'
                  : 'bg-slate-950/80 border-slate-800 text-slate-200'
              }`}>
                <div className="text-xs text-yellow-400 font-bold mb-1">Phase B-N'</div>
                <div className="text-xl font-bold font-mono">
                  {magVb.toFixed(1)} <span className="text-xs font-normal">V</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  {magVb > 260 ? 'OVERVOLTAGE!' : magVb < 190 ? 'UNDERVOLTAGE!' : 'Normal (±10%)'}
                </div>
              </div>

              {/* Phase C */}
              <div className={`p-3 rounded-lg border ${
                magVc > 260
                  ? 'bg-rose-950/60 border-rose-700 text-rose-200'
                  : magVc < 190
                  ? 'bg-amber-950/40 border-amber-700 text-amber-200'
                  : 'bg-slate-950/80 border-slate-800 text-slate-200'
              }`}>
                <div className="text-xs text-blue-400 font-bold mb-1">Phase C-N'</div>
                <div className="text-xl font-bold font-mono">
                  {magVc.toFixed(1)} <span className="text-xs font-normal">V</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">
                  {magVc > 260 ? 'OVERVOLTAGE!' : magVc < 190 ? 'UNDERVOLTAGE!' : 'Normal (±10%)'}
                </div>
              </div>
            </div>
          </div>

          {/* Warning Banner */}
          {isOvervoltage ? (
            <div className="p-3 bg-rose-950/60 border border-rose-700/80 rounded-lg text-rose-200 text-xs flex items-start gap-2.5">
              <Flame className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
              <div>
                <span className="font-bold block text-rose-100">Equipment Catastrophe Warning!</span>
                {t.dangerOvervoltage} The light-load phase voltage surges towards line-to-line 400V.
              </div>
            </div>
          ) : isUndervoltage ? (
            <div className="p-3 bg-amber-950/50 border border-amber-700/80 rounded-lg text-amber-200 text-xs flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
              <div>
                <span className="font-bold block text-amber-100">Severe Undervoltage Risk</span>
                {t.dangerUndervoltage} Heavy load phase experiences severe voltage sag.
              </div>
            </div>
          ) : (
            <div className="p-3 bg-emerald-950/40 border border-emerald-700/60 rounded-lg text-emerald-200 text-xs flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>{t.safeOperation}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
