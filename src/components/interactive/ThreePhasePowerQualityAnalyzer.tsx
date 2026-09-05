import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Activity, Zap, AlertTriangle, ShieldAlert, Sliders, CheckCircle2, RefreshCw, BarChart3 } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const ThreePhasePowerQualityAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Disturbance Presets
  const [preset, setPreset] = useState<'normal' | 'sag' | 'swell' | 'vfd' | 'triplen' | 'unbalance' | 'flicker'>('triplen');

  // Input states
  const [fundamentalI, setFundamentalI] = useState<number>(60); // Amperes
  const [vNominal, setVNominal] = useState<number>(230); // Volts phase-to-neutral
  const [h3Pct, setH3Pct] = useState<number>(45); // 3rd harmonic %
  const [h5Pct, setH5Pct] = useState<number>(22); // 5th harmonic %
  const [h7Pct, setH7Pct] = useState<number>(12); // 7th harmonic %
  const [h9Pct, setH9Pct] = useState<number>(6);  // 9th harmonic %
  const [dpf, setDpf] = useState<number>(0.92);   // Displacement Power Factor
  const [vUnbalancePct, setVUnbalancePct] = useState<number>(1.8); // Voltage Unbalance Factor %
  const [sagPct, setSagPct] = useState<number>(0); // 0 = no sag, 35 = 35% dip

  const selectPreset = (p: 'normal' | 'sag' | 'swell' | 'vfd' | 'triplen' | 'unbalance' | 'flicker') => {
    setPreset(p);
    if (p === 'normal') {
      setH3Pct(2); setH5Pct(3); setH7Pct(2); setH9Pct(1);
      setDpf(0.98); setVUnbalancePct(0.5); setSagPct(0);
    } else if (p === 'sag') {
      setH3Pct(4); setH5Pct(5); setH7Pct(3); setH9Pct(1);
      setDpf(0.92); setVUnbalancePct(4.5); setSagPct(35); // 35% voltage drop
    } else if (p === 'swell') {
      setH3Pct(3); setH5Pct(4); setH7Pct(2); setH9Pct(1);
      setDpf(0.94); setVUnbalancePct(3.0); setSagPct(-20); // 20% voltage rise
    } else if (p === 'vfd') {
      setH3Pct(2); setH5Pct(34); setH7Pct(18); setH9Pct(4);
      setDpf(0.85); setVUnbalancePct(1.2); setSagPct(0);
    } else if (p === 'triplen') {
      setH3Pct(58); setH5Pct(16); setH7Pct(10); setH9Pct(14);
      setDpf(0.90); setVUnbalancePct(1.5); setSagPct(0);
    } else if (p === 'unbalance') {
      setH3Pct(5); setH5Pct(6); setH7Pct(4); setH9Pct(2);
      setDpf(0.88); setVUnbalancePct(4.8); setSagPct(0);
    } else if (p === 'flicker') {
      setH3Pct(8); setH5Pct(12); setH7Pct(8); setH9Pct(3);
      setDpf(0.80); setVUnbalancePct(2.5); setSagPct(12);
    }
  };

  // Calculations
  const vActual = vNominal * (1 - sagPct / 100);
  const i3 = (fundamentalI * h3Pct) / 100;
  const i5 = (fundamentalI * h5Pct) / 100;
  const i7 = (fundamentalI * h7Pct) / 100;
  const i9 = (fundamentalI * h9Pct) / 100;

  // True RMS Phase Current
  const irms = Math.sqrt(fundamentalI * fundamentalI + i3 * i3 + i5 * i5 + i7 * i7 + i9 * i9);

  // Total Harmonic Distortion of Current (THD_I)
  const ihTotal = Math.sqrt(i3 * i3 + i5 * i5 + i7 * i7 + i9 * i9);
  const thdI = fundamentalI > 0 ? (ihTotal / fundamentalI) * 100 : 0;

  // Estimated Voltage THD (caused by harmonic current flowing through grid source impedance)
  const thdV = Math.min(18, (thdI * 0.18) + (vUnbalancePct * 0.4));

  // Crest Factor (ratio of peak to true RMS) - sharp non-linear pulses have high crest factor
  const crestFactor = 1.414 * (1 + (thdI / 150));

  // True Power Factor = Displacement PF / sqrt(1 + THD_I^2)
  const truePf = dpf / Math.sqrt(1 + Math.pow(thdI / 100, 2));

  // Neutral Current:
  // Triplens (3rd, 9th) are zero-sequence, adding co-phasally in the neutral: In_triplen = 3 * sqrt(i3^2 + i9^2)
  // Unbalance component roughly adds in quadrature
  const triplenNeutral = 3 * Math.sqrt(i3 * i3 + i9 * i9);
  const unbalanceNeutral = fundamentalI * (vUnbalancePct / 100) * 1.5;
  const inTrue = Math.sqrt(triplenNeutral * triplenNeutral + unbalanceNeutral * unbalanceNeutral);
  const neutralLoadingPct = fundamentalI > 0 ? (inTrue / fundamentalI) * 100 : 0;

  // Compliance Flags (IEEE 519 / EN 50160)
  const ieeeThdIPass = thdI <= 8.0;
  const ieeeThdVPass = thdV <= 5.0;
  const vufPass = vUnbalancePct <= 2.0;
  const neutralWarning = neutralLoadingPct > 100;

  // Multilingual Dictionary
  const t = {
    en: {
      title: 'Three-Phase Power Quality Measurement & Diagnostics',
      subtitle: 'Analyze voltage sag/swell, harmonic distortion, triplen neutral stacking, and IEEE 519 compliance.',
      presets: 'Power Quality Event Presets:',
      norm: 'Normal (Clean)',
      sag: 'Voltage Sag (-35%)',
      swell: 'Voltage Swell (+20%)',
      vfd: '6-Pulse VFD Distortion',
      triplen: 'Data Center (Triplen Stacking)',
      unbalance: 'Severe Unbalance (4.8% VUF)',
      flicker: 'Rapid Flicker / Fluctuation',
      controls: 'Diagnostic Parameter Adjustments',
      fundI: 'Fundamental Current (I₁)',
      vNom: 'Nominal Phase Voltage (V_L-N)',
      h3: '3rd Harmonic % (Triplen - Zero Sequence)',
      h5: '5th Harmonic % (Negative Sequence)',
      h7: '7th Harmonic % (Positive Sequence)',
      dpf: 'Displacement Power Factor (cos φ₁)',
      vuf: 'Voltage Unbalance Factor (VUF %)',
      metricsTitle: 'Power Quality Analyzer Measurements',
      vRms: 'Actual Phase Voltage',
      iRms: 'True RMS Phase Current',
      thdI: 'Current Distortion (THD_I)',
      thdV: 'Voltage Distortion (THD_V)',
      dpfLabel: 'Displacement PF (DPF)',
      tpfLabel: 'True Power Factor (TPF)',
      cfLabel: 'Crest Factor (I_peak / I_rms)',
      inLabel: 'Neutral Conductor Current (In)',
      spectrumTitle: 'Harmonic Spectrum & Sequence Distribution',
      waveformTitle: 'Simulated Distorted Phase Current Waveform',
      advisoryTitle: 'Industrial Power Quality Diagnostics & Remediation',
      neutralOverload: 'CRITICAL NEUTRAL HAZARD: Neutral current exceeds phase current (>100%). Overheating danger! Requires 200% neutral conductor or active harmonic filtering.',
      thdHigh: 'IEEE 519 EXCEEDED: Current THD exceeds standard limit. Recommend installing tuned passive trap or active power filter (APF).',
      vufHigh: 'VOLTAGE UNBALANCE ALERT: VUF > 2% causes heavy negative-sequence currents in 3-phase induction motors, leading to derating and rotor overheating.',
      compliant: 'ALL PARAMETERS COMPLIANT: Harmonic levels and voltage balance are within IEEE 519 and EN 50160 utility grid tolerances.',
      pass: 'PASS',
      fail: 'FAIL',
      warning: 'WARNING'
    },
    hi: {
      title: 'थ्री-फेज पावर क्वालिटी मापन एवं नैदानिक विश्लेषण',
      subtitle: 'वोल्टेज सैग/स् swell, हार्मोनिक डिस्टॉर्शन, ट्रिप्लेन न्यूट्रल स्टैकिंग एवं IEEE 519 अनुपालन का विश्लेषण।',
      presets: 'पावर क्वालिटी पूर्व-निर्धारित स्थितियाँ:',
      norm: 'सामान्य (शुद्ध)',
      sag: 'वोल्टेज सैग (-35%)',
      swell: 'वोल्टेज स्वेल (+20%)',
      vfd: '6-पल्स VFD विरूपण',
      triplen: 'डेटा सेंटर (ट्रिप्लेन स्टैकिंग)',
      unbalance: 'गंभीर असंतुलन (4.8% VUF)',
      flicker: 'तीव्र फ्लिकर / उतार-चढ़ाव',
      controls: 'पैरामीटर नियंत्रण',
      fundI: 'मौलिक धारा (I₁)',
      vNom: 'नाममात्र फेज वोल्टेज',
      h3: 'तीसरा हार्मोनिक % (ट्रिप्लेन)',
      h5: 'पाँचवाँ हार्मोनिक % (नेगेटिव अनुक्रम)',
      h7: 'सातवाँ हार्मोनिक % (पॉजिटिव अनुक्रम)',
      dpf: 'डिस्प्लेसमेंट पावर फैक्टर (cos φ₁)',
      vuf: 'वोल्टेज असंतुलन अनुपात (VUF %)',
      metricsTitle: 'पावर क्वालिटी विश्लेषक मापन परिणाम',
      vRms: 'वास्तविक फेज वोल्टेज',
      iRms: 'ट्रू RMS फेज धारा',
      thdI: 'धारा विरूपण (THD_I)',
      thdV: 'वोल्टेज विरूपण (THD_V)',
      dpfLabel: 'डिस्प्लेसमेंट PF (DPF)',
      tpfLabel: 'सच्चा पावर फैक्टर (TPF)',
      cfLabel: 'क्रेस्ट फैक्टर (I_peak / I_rms)',
      inLabel: 'न्यूट्रल चालक धारा (In)',
      spectrumTitle: 'हार्मोनिक स्पेक्ट्रम एवं अनुक्रम वितरण',
      waveformTitle: 'सिम्युलेटेड विकृत धारा तरंग (Waveform)',
      advisoryTitle: 'औद्योगिक पावर क्वालिटी निदान एवं सुधार',
      neutralOverload: 'गंभीर न्यूट्रल संकट: न्यूट्रल धारा फेज धारा से अधिक है (>100%)। 200% न्यूट्रल या एक्टिव हार्मोनिक फिल्टर अनिवार्य है।',
      thdHigh: 'IEEE 519 सीमा पार: करंट THD अनुमेय सीमा से अधिक है। ट्यून्ड फिल्टर या APF स्थापित करें।',
      vufHigh: 'वोल्टेज असंतुलन चेतावनी: VUF > 2% मोटरों में अत्यधिक नेगेटिव अनुक्रम धारा उत्पन्न करता है।',
      compliant: 'सभी पैरामीटर सुरक्षित हैं: हार्मोनिक स्तर और वोल्टेज संतुलन मानक सीमाओं के भीतर हैं।',
      pass: 'उत्तीर्ण',
      fail: 'असफल',
      warning: 'चेतावनी'
    },
    bn: {
      title: 'থ্রি-ফেজ পাওয়ার কোয়ালিটি পরিমাপ ও ডায়াগনস্টিকস',
      subtitle: 'ভোল্টেজ স্যাগ/সোয়েল, হারমোনিক বিকৃতি, ট্রিপ্লেন নিউট্রাল স্ট্যাকিং ও IEEE 519 মানদণ্ড বিশ্লেষণ।',
      presets: 'পাওয়ার কোয়ালিটি ইভেন্ট প্রিসেট:',
      norm: 'স্বাভাবিক (বিশুদ্ধ)',
      sag: 'ভোল্টেজ স্যাগ (-৩৫%)',
      swell: 'ভোল্টেজ সোয়েল (+২০%)',
      vfd: '৬-পালস VFD বিকৃতি',
      triplen: 'ডেটা সেন্টার (ট্রিপ্লেন নিউট্রাল)',
      unbalance: 'তীব্র ভারসাম্যহীনতা (৪.৮% VUF)',
      flicker: 'তীব্র ফ্লিকার / ওঠানামা',
      controls: 'প্যারামিটার সামঞ্জস্য',
      fundI: 'মৌলিক কারেন্ট (I₁)',
      vNom: 'নামমাত্র ফেজ ভোল্টেজ',
      h3: '৩য় হারমোনিক % (ট্রিপ্লেন)',
      h5: '৫ম হারমোনিক % (নেগেটিভ সিকোয়েন্স)',
      h7: '৭ম হারমোনিক % (পজিটিভ সিকোয়েন্স)',
      dpf: 'ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর (cos φ₁)',
      vuf: 'ভোল্টেজ ভারসাম্যহীনতা (VUF %)',
      metricsTitle: 'পাওয়ার কোয়ালিটি অ্যানালাইজার রিডিং',
      vRms: 'প্রকৃত ফেজ ভোল্টেজ',
      iRms: 'ট্রু আরএমএস ফেজ কারেন্ট',
      thdI: 'কারেন্ট বিকৃতি (THD_I)',
      thdV: 'ভোল্টেজ বিকৃতি (THD_V)',
      dpfLabel: 'ডিসপ্লেসমেন্ট PF (DPF)',
      tpfLabel: 'ট্রু পাওয়ার ফ্যাক্টর (TPF)',
      cfLabel: 'ক্রেস্ট ফ্যাক্টর (I_peak / I_rms)',
      inLabel: 'নিউট্রাল তারের কারেন্ট (In)',
      spectrumTitle: 'হারমোনিক স্পেকট্রাম ও সিকোয়েন্স বিভাজন',
      waveformTitle: 'সিমুলেটেড বিকৃত কারেন্ট ওয়েভফর্ম',
      advisoryTitle: 'শিল্প পাওয়ার কোয়ালিটি পর্যবেক্ষণ ও প্রতিকার',
      neutralOverload: 'মারাত্মক নিউট্রাল ঝুঁকি: নিউট্রাল কারেন্ট ফেজ কারেন্টকে ছাড়িয়ে গেছে (>১০০%)। ২০০% নিউট্রাল বা অ্যাক্টিভ ফিল্টার আবশ্যক।',
      thdHigh: 'IEEE 519 অতিক্রম করেছে: কারেন্ট THD সীমার বাইরে। প্যাসিভ বা অ্যাক্টিভ ফিল্টার প্রয়োজন।',
      vufHigh: 'ভোল্টেজ ভারসাম্যহীনতা সতর্কতা: VUF > ২% মোটরে ক্ষতিকর নেগেটিভ সিকোয়েন্স সৃষ্টি করে।',
      compliant: 'সকল মানদণ্ড সন্তোষজনক: হারমোনিক এবং ভোল্টেজ ভারসাম্য নির্ধারিত সীমার মধ্যে রয়েছে।',
      pass: 'পাস',
      fail: 'ফেল',
      warning: 'সতর্কতা'
    }
  }[lang];

  // SVG Waveform generation
  const generateWaveformPoints = () => {
    const points: string[] = [];
    const width = 420;
    const height = 120;
    const midY = height / 2;
    const scaleY = 38;

    for (let x = 0; x <= width; x += 3) {
      const angle = (x / width) * 4 * Math.PI; // 2 cycles
      // Synthesize composite waveform
      const yFund = Math.sin(angle);
      const y3 = (h3Pct / 100) * Math.sin(3 * angle);
      const y5 = (h5Pct / 100) * Math.sin(5 * angle);
      const y7 = (h7Pct / 100) * Math.sin(7 * angle);
      const totalY = (yFund + y3 + y5 + y7) / (1 + (thdI / 100) * 0.6);
      const py = midY - totalY * scaleY;
      points.push(`${x},${py.toFixed(1)}`);
    }
    return points.join(' ');
  };

  return (
    <div id="three-phase-power-quality-analyzer" className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-cyan-400 mb-1">
          <Activity className="w-5 h-5" />
          <h3 className="text-lg font-bold font-display">{t.title}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-400">{t.subtitle}</p>
      </div>

      {/* Preset Buttons */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
          {t.presets}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {(['normal', 'sag', 'swell', 'vfd', 'triplen', 'unbalance', 'flicker'] as const).map((p) => (
            <button
              key={p}
              id={`pq-preset-${p}`}
              onClick={() => selectPreset(p)}
              className={`px-2.5 py-2 rounded-lg text-xs font-medium transition-all text-center ${
                preset === p
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30 ring-1 ring-cyan-400'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t[p]}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Controls & Live Metrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sliders Panel */}
        <div className="lg:col-span-5 bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Sliders className="w-4 h-4" />
            <span>{t.controls}</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>{t.fundI}:</span>
                <span className="font-mono text-cyan-400 font-bold">{fundamentalI} A</span>
              </div>
              <input
                id={`${controlId}-fundI`}
                type="range"
                min="10"
                max="150"
                step="5"
                value={fundamentalI}
                onChange={(e) => setFundamentalI(Number(e.target.value))}
                className="w-full accent-cyan-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>{t.h3}:</span>
                <span className="font-mono text-rose-400 font-bold">{h3Pct}% ({i3.toFixed(1)} A)</span>
              </div>
              <input
                id={`${controlId}-h3`}
                type="range"
                min="0"
                max="80"
                step="2"
                value={h3Pct}
                onChange={(e) => { setH3Pct(Number(e.target.value)); setPreset('triplen'); }}
                className="w-full accent-rose-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>{t.h5}:</span>
                <span className="font-mono text-amber-400 font-bold">{h5Pct}% ({i5.toFixed(1)} A)</span>
              </div>
              <input
                id={`${controlId}-h5`}
                type="range"
                min="0"
                max="50"
                step="2"
                value={h5Pct}
                onChange={(e) => { setH5Pct(Number(e.target.value)); setPreset('vfd'); }}
                className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>{t.h7}:</span>
                <span className="font-mono text-emerald-400 font-bold">{h7Pct}% ({i7.toFixed(1)} A)</span>
              </div>
              <input
                id={`${controlId}-h7`}
                type="range"
                min="0"
                max="30"
                step="1"
                value={h7Pct}
                onChange={(e) => setH7Pct(Number(e.target.value))}
                className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>{t.dpf}:</span>
                <span className="font-mono text-blue-400 font-bold">{dpf.toFixed(2)}</span>
              </div>
              <input
                id={`${controlId}-dpf`}
                type="range"
                min="0.60"
                max="1.00"
                step="0.02"
                value={dpf}
                onChange={(e) => setDpf(Number(e.target.value))}
                className="w-full accent-blue-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>{t.vuf}:</span>
                <span className="font-mono text-purple-400 font-bold">{vUnbalancePct.toFixed(1)}%</span>
              </div>
              <input
                id={`${controlId}-vuf`}
                type="range"
                min="0"
                max="8"
                step="0.2"
                value={vUnbalancePct}
                onChange={(e) => { setVUnbalancePct(Number(e.target.value)); setPreset('unbalance'); }}
                className="w-full accent-purple-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Live Metrics Display */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{t.metricsTitle}</span>
              <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                True RMS Metering Engine
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400">{t.vRms}</div>
                <div className="text-base font-bold font-mono text-cyan-300">{vActual.toFixed(1)} V</div>
                <div className="text-[9px] text-slate-500">{sagPct > 0 ? `-${sagPct}% Sag` : sagPct < 0 ? `+${Math.abs(sagPct)}% Swell` : 'Nominal'}</div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400">{t.iRms}</div>
                <div className="text-base font-bold font-mono text-emerald-300">{irms.toFixed(1)} A</div>
                <div className="text-[9px] text-slate-500">I_fund: {fundamentalI} A</div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>{t.thdI}</span>
                  <span className={`text-[9px] font-bold px-1 rounded ${ieeeThdIPass ? 'bg-emerald-950 text-emerald-400' : 'bg-rose-950 text-rose-400'}`}>
                    {ieeeThdIPass ? t.pass : t.fail}
                  </span>
                </div>
                <div className={`text-base font-bold font-mono ${ieeeThdIPass ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {thdI.toFixed(1)}%
                </div>
                <div className="text-[9px] text-slate-500">IEEE 519: &le; 8.0%</div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>{t.thdV}</span>
                  <span className={`text-[9px] font-bold px-1 rounded ${ieeeThdVPass ? 'bg-emerald-950 text-emerald-400' : 'bg-rose-950 text-rose-400'}`}>
                    {ieeeThdVPass ? t.pass : t.fail}
                  </span>
                </div>
                <div className={`text-base font-bold font-mono ${ieeeThdVPass ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {thdV.toFixed(1)}%
                </div>
                <div className="text-[9px] text-slate-500">IEEE 519: &le; 5.0%</div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400">{t.dpfLabel}</div>
                <div className="text-base font-bold font-mono text-blue-300">{dpf.toFixed(3)}</div>
                <div className="text-[9px] text-slate-500">Fundamental cos φ₁</div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400">{t.tpfLabel}</div>
                <div className="text-base font-bold font-mono text-amber-300">{truePf.toFixed(3)}</div>
                <div className="text-[9px] text-slate-500">DPF / &radic;(1+THD&sup2;)</div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400">{t.cfLabel}</div>
                <div className="text-base font-bold font-mono text-purple-300">{crestFactor.toFixed(2)}</div>
                <div className="text-[9px] text-slate-500">Pure Sine = 1.414</div>
              </div>

              <div className={`p-2.5 rounded-lg border ${neutralWarning ? 'bg-rose-950/50 border-rose-600' : 'bg-slate-900 border-slate-800'}`}>
                <div className="text-[10px] text-slate-400 flex items-center justify-between">
                  <span>{t.inLabel}</span>
                  {neutralWarning && <AlertTriangle className="w-3 h-3 text-rose-400" />}
                </div>
                <div className={`text-base font-bold font-mono ${neutralWarning ? 'text-rose-400 animate-pulse' : 'text-cyan-300'}`}>
                  {inTrue.toFixed(1)} A
                </div>
                <div className="text-[9px] text-slate-400">{neutralLoadingPct.toFixed(0)}% of Phase I₁</div>
              </div>
            </div>
          </div>

          {/* Waveform & Spectrum Visualizer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Waveform Canvas */}
            <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
              <div className="text-[11px] font-bold text-slate-300 flex items-center justify-between">
                <span>{t.waveformTitle}</span>
                <span className="text-[9px] text-cyan-400 font-mono">2 Cycles (50Hz)</span>
              </div>
              <div className="w-full h-24 bg-slate-950 rounded border border-slate-800 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 420 120" className="w-full h-full">
                  {/* Grid Lines */}
                  <line x1="0" y1="60" x2="420" y2="60" stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />
                  <line x1="105" y1="0" x2="105" y2="120" stroke="#1e293b" strokeWidth="1" />
                  <line x1="210" y1="0" x2="210" y2="120" stroke="#1e293b" strokeWidth="1" />
                  <line x1="315" y1="0" x2="315" y2="120" stroke="#1e293b" strokeWidth="1" />
                  {/* Distorted Waveform Polyline */}
                  <polyline
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    points={generateWaveformPoints()}
                  />
                </svg>
              </div>
            </div>

            {/* Harmonic Spectrum Bar Graph */}
            <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl space-y-2">
              <div className="text-[11px] font-bold text-slate-300 flex items-center justify-between">
                <span>{t.spectrumTitle}</span>
                <span className="text-[9px] text-amber-400 font-mono">Order (h)</span>
              </div>
              <div className="space-y-1.5 text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="w-6 font-mono text-slate-400">h1</span>
                  <div className="flex-1 bg-slate-800 h-2 rounded overflow-hidden">
                    <div className="bg-cyan-500 h-full w-full" />
                  </div>
                  <span className="w-10 text-right font-mono text-cyan-300">100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 font-mono text-rose-400">h3 (0)</span>
                  <div className="flex-1 bg-slate-800 h-2 rounded overflow-hidden">
                    <div className="bg-rose-500 h-full" style={{ width: `${Math.min(100, h3Pct)}%` }} />
                  </div>
                  <span className="w-10 text-right font-mono text-rose-300">{h3Pct}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 font-mono text-amber-400">h5 (-)</span>
                  <div className="flex-1 bg-slate-800 h-2 rounded overflow-hidden">
                    <div className="bg-amber-500 h-full" style={{ width: `${Math.min(100, h5Pct * 2)}%` }} />
                  </div>
                  <span className="w-10 text-right font-mono text-amber-300">{h5Pct}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 font-mono text-emerald-400">h7 (+)</span>
                  <div className="flex-1 bg-slate-800 h-2 rounded overflow-hidden">
                    <div className="bg-emerald-500 h-full" style={{ width: `${Math.min(100, h7Pct * 3)}%` }} />
                  </div>
                  <span className="w-10 text-right font-mono text-emerald-300">{h7Pct}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advisory & Compliance Diagnostic Box */}
      <div className={`p-4 rounded-xl border ${
        neutralWarning || !ieeeThdIPass || !vufPass
          ? 'bg-rose-950/40 border-rose-800 text-rose-200'
          : 'bg-emerald-950/40 border-emerald-800 text-emerald-200'
      }`}>
        <div className="flex items-start gap-3">
          {neutralWarning || !ieeeThdIPass || !vufPass ? (
            <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          )}
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider">
              {t.advisoryTitle}
            </h4>
            <p className="text-xs">
              {neutralWarning
                ? t.neutralOverload
                : !ieeeThdIPass
                ? t.thdHigh
                : !vufPass
                ? t.vufHigh
                : t.compliant}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
