import React, { useState } from 'react';
import { Tag, Sparkles, Layers, ShieldCheck, Check, Info } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';

interface CapacitorCodeDecoderAnimationProps {
  currentLanguage: Language;
}

const TOLERANCES = [
  { code: 'B', descEn: '±0.1 pF (Ultra Precision)', descHi: '±0.1 pF', descBn: '±০.১ pF', percent: 0.1, isAbsolutePf: true },
  { code: 'C', descEn: '±0.25 pF (Precision)', descHi: '±0.25 pF', descBn: '±০.২৫ pF', percent: 0.25, isAbsolutePf: true },
  { code: 'D', descEn: '±0.5 pF (Precision)', descHi: '±0.5 pF', descBn: '±০.৫ pF', percent: 0.5, isAbsolutePf: true },
  { code: 'F', descEn: '±1% (Precision)', descHi: '±1%', descBn: '±১%', percent: 1.0 },
  { code: 'G', descEn: '±2% (Tight Tolerance)', descHi: '±2%', descBn: '±২%', percent: 2.0 },
  { code: 'J', descEn: '±5% (Standard 5%)', descHi: '±5%', descBn: '±৫%', percent: 5.0 },
  { code: 'K', descEn: '±10% (Most Common 10%)', descHi: '±10%', descBn: '±১০%', percent: 10.0 },
  { code: 'M', descEn: '±20% (General Purpose)', descHi: '±20%', descBn: '±২০%', percent: 20.0 },
  { code: 'Z', descEn: '+80% / -20% (Decoupling MLCC)', descHi: '+80% / -20%', descBn: '+৮০% / -২০%', percent: 20.0, isAsymmetric: true }
];

const VOLTAGE_CODES = [
  { code: '1H', volts: 50, desc: '50V DC (General Logic)' },
  { code: '2A', volts: 100, desc: '100V DC (Audio/Analog)' },
  { code: '2C', volts: 160, desc: '160V DC (Switching)' },
  { code: '2D', volts: 200, desc: '200V DC (Power Line)' },
  { code: '2E', volts: 250, desc: '250V DC (Mains Filter)' },
  { code: '2G', volts: 400, desc: '400V DC (PFC/SMPS)' },
  { code: '2J', volts: 630, desc: '630V DC (HV Snubber)' },
  { code: '3A', volts: 1000, desc: '1000V / 1kV DC (High Voltage)' }
];

const TRANSLATIONS = {
  en: {
    title: 'Capacitor 3-Digit EIA Marking & Tolerance Decoder Lab',
    subtitle: 'Interactively decode 3-digit EIA numerical marking codes (e.g. 104, 473, 222), tolerance letters, and voltage rating prefixes. View real-time conversions to pF, nF, µF and physical component package visualizations.',
    digit1Label: '1st Significant Digit',
    digit2Label: '2nd Significant Digit',
    multiplierLabel: 'Multiplier (10^n)',
    toleranceLabel: 'Tolerance Code Letter',
    voltageLabel: 'EIA Voltage Rating Code',
    packageTypeLabel: 'Capacitor Visual Package Style',
    packageCeramic: 'Ceramic Disc',
    packageFilm: 'Polyester/Mylar Film (Box/Dip)',
    packageSMD: 'Surface Mount MLCC (SMD 1206)',
    reset: 'Reset Defaults',
    nominalValTitle: 'Decoded Nominal Capacitance',
    rangeTitle: 'Guaranteed Tolerance Range',
    formulaTitle: 'EIA 3-Digit Decoding Rules',
    formulaText: 'Value = (Digit 1 · 10 + Digit 2) × 10^(Multiplier) in Picofarads (pF)  |  1 nF = 1,000 pF  |  1 µF = 1,000,000 pF'
  },
  hi: {
    title: 'संधारित्र 3-अंकीय ईआईए कोड एवं टॉलरेंस डिकोडर',
    subtitle: '3-अंकीय ईआईए संख्यात्मक कोड (जैसे 104, 473), टॉलरेंस अक्षर एवं वोल्टेज रेटिंग को डिकोड करें। pF, nF एवं µF में मान तथा कंपोनेंट का सजीव दृश्य देखें।',
    digit1Label: 'पहला सार्थक अंक',
    digit2Label: 'दूसरा सार्थक अंक',
    multiplierLabel: 'गुणक (10^n)',
    toleranceLabel: 'टॉलरेंस अक्षर कोड',
    voltageLabel: 'ईआईए वोल्टेज रेटिंग कोड',
    packageTypeLabel: 'संधारित्र पैकेज प्रकार',
    packageCeramic: 'सिरेमिक डिस्क (Ceramic Disc)',
    packageFilm: 'पॉलिएस्टर फिल्म (Film Box)',
    packageSMD: 'एसएमडी चिप (SMD MLCC)',
    reset: 'डिफ़ॉल्ट रीसेट',
    nominalValTitle: 'डिकोड किया गया मानक मान',
    rangeTitle: 'गारंटीकृत टॉलरेंस सीमा',
    formulaTitle: 'ईआईए 3-अंकीय डिकोडिंग नियम',
    formulaText: 'मान = (अंक 1 · 10 + अंक 2) × 10^(गुणक) पिकोफैरड (pF) में  |  1 nF = 1,000 pF  |  1 µF = 1,000,000 pF'
  },
  bn: {
    title: 'ক্যাপাসিটর ৩-সংখ্যার ইআইএ কোড ও টলারেন্স ডিকোডার ল্যাব',
    subtitle: '৩-সংখ্যার EIA ক্যাপাসিটর কোড (যেমন ১০৪, ৪৭৩, ২২২), টলারেন্স লেটার এবং ভোল্টেজ রেটিং প্রিফিক্স ডিকোড করুন। pF, nF, µF এ রিয়েল-টাইম রূপান্তর ও বাস্তব কম্পোনেন্ট ডিজাইন দেখুন।',
    digit1Label: '১ম তাৎপর্যপূর্ণ অঙ্ক',
    digit2Label: '২য় তাৎপর্যপূর্ণ অঙ্ক',
    multiplierLabel: 'গুণক (10^n)',
    toleranceLabel: 'টলারেন্স লেটার কোড',
    voltageLabel: 'ইআইএ ভোল্টেজ রেটিং কোড',
    packageTypeLabel: 'ক্যাপাসিটর প্যাকেজ ডিজাইন',
    packageCeramic: 'সিরামিক ডিস্ক (Ceramic Disc)',
    packageFilm: 'পলিয়েস্টার ফিল্ম (Mylar/Box)',
    packageSMD: 'সারফেস মাউন্ট চিপ (SMD MLCC)',
    reset: 'ডিফল্ট রিসেট',
    nominalValTitle: 'ডিকোডকৃত ধারকত্ব মান',
    rangeTitle: 'নির্ধারিত টলারেন্স সীমা',
    formulaTitle: 'EIA ৩-সংখ্যার কোডিং সূত্রাবলী',
    formulaText: 'মান = (১ম অঙ্ক · ১০ + ২য় অঙ্ক) × ১০^(গুণক) পিকোফ্যারাড (pF) এ  |  ১ nF = ১,০০০ pF  |  ১ µF = ১,০০০,০০০ pF'
  }
};

export const CapacitorCodeDecoderAnimation: React.FC<CapacitorCodeDecoderAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  // State
  const [d1, setD1] = useState<number>(1);
  const [d2, setD2] = useState<number>(0);
  const [multiplier, setMultiplier] = useState<number>(4); // 104 = 100,000 pF = 100 nF = 0.1 µF
  const [selectedTolCode, setSelectedTolCode] = useState<string>('K');
  const [selectedVoltCode, setSelectedVoltCode] = useState<string>('2A');
  const [packageType, setPackageType] = useState<'ceramic' | 'film' | 'smd'>('ceramic');

  const selectedTol = TOLERANCES.find(tol => tol.code === selectedTolCode) || TOLERANCES[6];
  const selectedVolt = VOLTAGE_CODES.find(v => v.code === selectedVoltCode) || VOLTAGE_CODES[1];

  // Mathematical Decoding
  const significantDigits = d1 * 10 + d2;
  const nominalPf = significantDigits * Math.pow(10, multiplier);
  const nominalNf = nominalPf / 1e3;
  const nominalUf = nominalPf / 1e6;

  // Tolerance Range
  let minPf = nominalPf * (1 - selectedTol.percent / 100);
  let maxPf = nominalPf * (1 + selectedTol.percent / 100);
  if (selectedTol.isAbsolutePf) {
    minPf = Math.max(0, nominalPf - selectedTol.percent);
    maxPf = nominalPf + selectedTol.percent;
  }

  const eiaCodeString = `${d1}${d2}${multiplier}${selectedTolCode}`;
  const fullMarkingString = `${selectedVoltCode}${d1}${d2}${multiplier}${selectedTolCode}`;

  const handleReset = () => {
    setD1(1);
    setD2(0);
    setMultiplier(4);
    setSelectedTolCode('K');
    setSelectedVoltCode('2A');
    setPackageType('ceramic');
  };

  const formatPf = (val: number) => {
    if (val >= 1e6) return `${(val / 1e6).toFixed(4)} µF`;
    if (val >= 1e3) return `${(val / 1e3).toFixed(2)} nF`;
    return `${val.toFixed(1)} pF`;
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      formulaText={t.formulaText}
      extraHeaderActions={
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setPackageType('ceramic')}
            className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
              packageType === 'ceramic' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.packageCeramic}
          </button>
          <button
            onClick={() => setPackageType('film')}
            className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
              packageType === 'film' ? 'bg-yellow-600 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.packageFilm}
          </button>
          <button
            onClick={() => setPackageType('smd')}
            className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
              packageType === 'smd' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.packageSMD}
          </button>
        </div>
      }
    >
      {/* Code Input Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
        {/* Digit 1 */}
        <div className="space-y-1">
          <label className="text-xs text-slate-300 font-semibold block">{t.digit1Label}</label>
          <select
            value={d1}
            onChange={(e) => setD1(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-cyan-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-cyan-400"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
              <option key={`d1-${n}`} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Digit 2 */}
        <div className="space-y-1">
          <label className="text-xs text-slate-300 font-semibold block">{t.digit2Label}</label>
          <select
            value={d2}
            onChange={(e) => setD2(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-cyan-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-cyan-400"
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
              <option key={`d2-${n}`} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Multiplier */}
        <div className="space-y-1">
          <label className="text-xs text-slate-300 font-semibold block">{t.multiplierLabel}</label>
          <select
            value={multiplier}
            onChange={(e) => setMultiplier(Number(e.target.value))}
            className="w-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-emerald-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-400"
          >
            <option value={0}>0 (× 10⁰ = 1)</option>
            <option value={1}>1 (× 10¹ = 10)</option>
            <option value={2}>2 (× 10² = 100)</option>
            <option value={3}>3 (× 10³ = 1k)</option>
            <option value={4}>4 (× 10⁴ = 10k)</option>
            <option value={5}>5 (× 10⁵ = 100k)</option>
            <option value={6}>6 (× 10⁶ = 1M)</option>
          </select>
        </div>

        {/* Tolerance */}
        <div className="space-y-1">
          <label className="text-xs text-slate-300 font-semibold block">{t.toleranceLabel}</label>
          <select
            value={selectedTolCode}
            onChange={(e) => setSelectedTolCode(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-purple-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-purple-400"
          >
            {TOLERANCES.map(tol => (
              <option key={tol.code} value={tol.code}>
                {tol.code} ({currentLanguage === 'hi' ? tol.descHi : currentLanguage === 'bn' ? tol.descBn : tol.descEn})
              </option>
            ))}
          </select>
        </div>

        {/* Voltage Code */}
        <div className="space-y-1 col-span-2 sm:col-span-1">
          <label className="text-xs text-slate-300 font-semibold block">{t.voltageLabel}</label>
          <select
            value={selectedVoltCode}
            onChange={(e) => setSelectedVoltCode(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-amber-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-400"
          >
            {VOLTAGE_CODES.map(v => (
              <option key={v.code} value={v.code}>
                {v.code} ({v.volts}V DC)
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Decoded Value Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-slate-950 p-3.5 rounded-xl border border-cyan-900/60 shadow-sm">
          <div className="text-xs text-slate-400 font-medium mb-1">Picofarads (pF)</div>
          <div className="text-xl font-bold font-mono text-cyan-300">
            {nominalPf.toLocaleString()} pF
          </div>
          <div className="text-[10px] text-slate-400 mt-1 font-mono">
            {d1}{d2} × 10^{multiplier} pF
          </div>
        </div>

        <div className="bg-slate-950 p-3.5 rounded-xl border border-emerald-900/60 shadow-sm">
          <div className="text-xs text-slate-400 font-medium mb-1">Nanofarads (nF)</div>
          <div className="text-xl font-bold font-mono text-emerald-300">
            {nominalNf >= 1000 ? `${(nominalNf / 1000).toFixed(3)} µF` : `${nominalNf.toFixed(2)} nF`}
          </div>
          <div className="text-[10px] text-slate-400 mt-1 font-mono">
            {nominalNf} nF
          </div>
        </div>

        <div className="bg-slate-950 p-3.5 rounded-xl border border-purple-900/60 shadow-sm">
          <div className="text-xs text-slate-400 font-medium mb-1">Microfarads (µF)</div>
          <div className="text-xl font-bold font-mono text-purple-300">
            {nominalUf < 0.001 ? `${(nominalUf * 1000).toFixed(3)} nF` : `${nominalUf.toFixed(4)} µF`}
          </div>
          <div className="text-[10px] text-slate-400 mt-1 font-mono">
            Tolerance: ±{selectedTol.percent}% ({formatPf(minPf)} → {formatPf(maxPf)})
          </div>
        </div>
      </div>

      {/* Realistic Component Package Physical Simulation SVG */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Tag className="w-4 h-4 text-cyan-400" />
            Physical Component Rendering & Laser Markings
          </h4>
          <span className="text-xs font-mono text-amber-400 font-bold bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
            Marking Code: {fullMarkingString}
          </span>
        </div>

        <div className="w-full flex justify-center py-4 overflow-x-auto">
          <svg viewBox="0 0 460 190" className="w-full max-w-md h-auto select-none">
            <defs>
              <linearGradient id="discGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
              <linearGradient id="filmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#451a03" />
              </linearGradient>
              <linearGradient id="smdBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78716c" />
                <stop offset="100%" stopColor="#44403c" />
              </linearGradient>
              <linearGradient id="smdCap" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>

            {packageType === 'ceramic' && (
              /* Ceramic Disc Capacitor */
              <g transform="translate(230, 80)">
                {/* Leads */}
                <line x1="-20" y1="35" x2="-20" y2="100" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                <line x1="20" y1="35" x2="20" y2="100" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                {/* Disc Body */}
                <circle cx="0" cy="0" r="48" fill="url(#discGrad)" stroke="#f59e0b" strokeWidth="1.5" />
                {/* Markings */}
                <text x="0" y="-8" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                  {eiaCodeString}
                </text>
                <text x="0" y="14" fill="#fde68a" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                  {selectedVolt.volts}V
                </text>
                <line x1="-25" y1="22" x2="25" y2="22" stroke="#fde68a" strokeWidth="1" />
              </g>
            )}

            {packageType === 'film' && (
              /* Box/Polyester Film Capacitor */
              <g transform="translate(230, 80)">
                {/* Leads */}
                <line x1="-35" y1="35" x2="-35" y2="100" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                <line x1="35" y1="35" x2="35" y2="100" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                {/* Box Body */}
                <rect x="-65" y="-45" width="130" height="80" rx="6" fill="url(#filmGrad)" stroke="#eab308" strokeWidth="2" />
                {/* Laser Markings */}
                <text x="-50" y="-20" fill="#fef08a" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  EPCOS / WIMA
                </text>
                <text x="-50" y="2" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="monospace">
                  {nominalNf >= 1000 ? `${(nominalNf/1000).toFixed(2)}µF` : `${nominalNf}nF`} {selectedTolCode}
                </text>
                <text x="-50" y="22" fill="#fef08a" fontSize="12" fontWeight="bold" fontFamily="monospace">
                  {selectedVolt.volts}V DC ({eiaCodeString})
                </text>
              </g>
            )}

            {packageType === 'smd' && (
              /* SMD MLCC Chip */
              <g transform="translate(230, 90)">
                {/* PCB Solder Pads */}
                <rect x="-80" y="30" width="160" height="10" fill="#15803d" />
                <rect x="-70" y="22" width="30" height="8" fill="#94a3b8" rx="1" />
                <rect x="40" y="22" width="30" height="8" fill="#94a3b8" rx="1" />
                {/* Ceramic Body */}
                <rect x="-60" y="-30" width="120" height="55" rx="4" fill="url(#smdBody)" stroke="#57534e" strokeWidth="1" />
                {/* Metal End Terminations */}
                <rect x="-60" y="-30" width="22" height="55" rx="3" fill="url(#smdCap)" stroke="#94a3b8" strokeWidth="1" />
                <rect x="38" y="-30" width="22" height="55" rx="3" fill="url(#smdCap)" stroke="#94a3b8" strokeWidth="1" />
                {/* Laser Code (or size label) */}
                <text x="0" y="2" fill="#e7e5e4" fontSize="13" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                  1206 MLCC
                </text>
                <text x="0" y="16" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                  {eiaCodeString} ({selectedVolt.volts}V)
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
