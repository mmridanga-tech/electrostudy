import React, { useState } from 'react';
import { Language } from '../../types';
import { RotateCcw, Sliders, Zap, CheckCircle2, AlertOctagon, RefreshCw } from 'lucide-react';

interface Props {
  currentLanguage: Language;
}

type ViewCase = 'caseA' | 'caseB' | 'compare';

const LABELS = {
  en: {
    title: 'Reciprocity Theorem Interactive Verification',
    subtitle: 'Demonstrating that in any linear bilateral passive network, the ratio of excitation (source) at Port 1 to response (current) at Port 2 equals the ratio when source and response positions are interchanged.',
    caseTitle: 'Circuit Port Setup Case',
    caseA: 'Case A: Source at Port 1 → Ammeter at Port 2',
    caseB: 'Case B: Source at Port 2 → Ammeter at Port 1',
    compare: 'Side-by-Side Comparison',
    parameters: 'T-Network Parameter Controls',
    vsLabel: 'Excitation Voltage (Vs)',
    r1Label: 'Port 1 Resistor (R1)',
    r2Label: 'Port 2 Resistor (R2)',
    r3Label: 'Shunt Resistor (R3)',
    unilateralToggle: 'Insert Unilateral Element (Diode in Branch 2)',
    results: 'Reciprocity Quantitative Analysis',
    respCaseA: 'Case A Short-Circuit Response (I2A)',
    respCaseB: 'Case B Short-Circuit Response (I1B)',
    transferAdmittance: 'Transfer Admittance (Y12 = Y21)',
    diffLabel: 'Response Absolute Difference (|I2A - I1B|)',
    statusReciprocal: 'RECIPROCAL NETWORK (I2A = I1B)',
    statusNonReciprocal: 'NON-RECIPROCAL / UNILATERAL NETWORK (I2A ≠ I1B)',
    explanationTitle: 'Reciprocity Conditions & Engineering Rules',
    explanationText: 'Reciprocity applies ONLY to linear, bilateral, passive networks containing a single independent source and no dependent sources or initial energy storage. Introducing unilateral devices (such as diodes or transistors) breaks reciprocity.',
    reset: 'Reset Defaults'
  },
  hi: {
    title: 'रेसीप्रोसिटी (पारस्परिकता) प्रमेय इंटरएक्टिव सत्यापन',
    subtitle: 'यह प्रदर्शित करना कि किसी भी रैखिक द्विपक्षीय (bilateral) निष्क्रिय नेटवर्क में, पोर्ट 1 पर उत्तेजना (स्रोत) और पोर्ट 2 पर अनुक्रिया (धारा) का अनुपात, स्थिति अदला-बदली करने पर समान रहता है।',
    caseTitle: 'परिपथ पोर्ट व्यवस्था',
    caseA: 'केस A: पोर्ट 1 पर स्रोत → पोर्ट 2 पर अमीटर',
    caseB: 'केस B: पोर्ट 2 पर स्रोत → पोर्ट 1 पर अमीटर',
    compare: 'दोनों केस का तुलनात्मक दृश्य',
    parameters: 'टी-नेटवर्क पैरामीटर नियंत्रण',
    vsLabel: 'उत्तेजना वोल्टेज (Vs)',
    r1Label: 'पोर्ट 1 प्रतिरोधक (R1)',
    r2Label: 'पोर्ट 2 प्रतिरोधक (R2)',
    r3Label: 'शंट प्रतिरोधक (R3)',
    unilateralToggle: 'एकतरफा घटक जोड़ें (शाखा 2 में डायोड)',
    results: 'रेसीप्रोसिटी विश्लेषणात्मक परिणाम',
    respCaseA: 'केस A शॉर्ट-सर्किट धारा (I2A)',
    respCaseB: 'केस B शॉर्ट-सर्किट धारा (I1B)',
    transferAdmittance: 'ट्रांसफर एडमिटेंस (Y12 = Y21)',
    diffLabel: 'अनुक्रिया का अंतर (|I2A - I1B|)',
    statusReciprocal: 'रेसीप्रोकल (पारस्परिक) नेटवर्क (I2A = I1B)',
    statusNonReciprocal: 'गैर-रेसीप्रोकल / एकतरफा नेटवर्क (I2A ≠ I1B)',
    explanationTitle: 'रेसीप्रोसिटी की शर्तें एवं नियम',
    explanationText: 'रेसीप्रोसिटी केवल रेखीय, द्विपक्षीय और निष्क्रिय नेटवर्कों पर लागू होती है जिसमें केवल एक ही स्वतंत्र स्रोत हो। डायोड या ट्रांजिस्टर जैसे एकतरफा घटक जोड़ने पर यह नियम विफल हो जाता है।',
    reset: 'रीसेट करें'
  },
  bn: {
    title: 'রেসিপ্রোসিটি উপপাদ্য ইন্টারেক্টিভ সত্যতা যাচাই',
    subtitle: 'প্রমাণ যে যেকোনো লিনিয়ার বাইল্যাটারাল প্যাসিভ নেটওয়ার্কে পোর্ট ১ এ সোর্স ও পোর্ট ২ এ কারেন্ট রেসপন্সের অনুপাত, সোর্স ও রেসপন্সের অবস্থান অদল-বদল করলেও অপরিবর্তিত থাকে।',
    caseTitle: 'সার্কিট পোর্ট সেটআপ',
    caseA: 'কেস A: পোর্ট ১ এ সোর্স → পোর্ট ২ এ অ্যামিটার',
    caseB: 'কেস B: পোর্ট ২ এ সোর্স → পোর্ট ১ এ অ্যামিটার',
    compare: 'পাশাপাশি তুলনা',
    parameters: 'টি-নেটওয়ার্ক প্যারামিটারসমূহ',
    vsLabel: 'সোর্স ভোল্টেজ (Vs)',
    r1Label: 'পোর্ট ১ রেজিস্টর (R1)',
    r2Label: 'পোর্ট ২ রেজিস্টর (R2)',
    r3Label: 'শান্ট রেজিস্টর (R3)',
    unilateralToggle: 'একমুখী উপাদান যুক্তকরণ (ব্রাঞ্চ ২ এ ডায়োড)',
    results: 'রেসিপ্রোসিটি বিশ্লেষণ ও লাইভ ফলাফল',
    respCaseA: 'কেস A শর্ট-সার্কিট রেসপন্স (I2A)',
    respCaseB: 'কেস B শর্ট-সার্কিট রেসপন্স (I1B)',
    transferAdmittance: 'ট্রান্সফার অ্যাডমিট্যান্স (Y12 = Y21)',
    diffLabel: 'রেসপন্সের পার্থক্য (|I2A - I1B|)',
    statusReciprocal: 'রেসিপ্রোকাল (দ্বিপক্ষীয় সমতুল্য) নেটওয়ার্ক (I2A = I1B)',
    statusNonReciprocal: 'নন-রেসিপ্রোকাল / একমুখী নেটওয়ার্ক (I2A ≠ I1B)',
    explanationTitle: 'রেসিপ্রোসিটি উপপাদ্যের শর্তাবলী',
    explanationText: 'রেসিপ্রোসিটি কেবল লিনিয়ার, বাইল্যাটারাল, প্যাসিভ সার্কিটে প্রযোজ্য যেখানে একটি মাত্র ইনডিপেনডেন্ট সোর্স থাকে। ডায়োড বা ট্রানজিস্টরের মতো একমুখী উপাদান যুক্ত করলে রেসিপ্রোসিটি কাজ করে না।',
    reset: 'রিসেট করুন'
  }
};

export const ReciprocityAnimation: React.FC<Props> = ({ currentLanguage }) => {
  const t = LABELS[currentLanguage] || LABELS.en;

  const [vs, setVs] = useState<number>(20);
  const [r1, setR1] = useState<number>(10);
  const [r2, setR2] = useState<number>(15);
  const [r3, setR3] = useState<number>(20);
  const [hasDiode, setHasDiode] = useState<boolean>(false);
  const [activeCase, setActiveCase] = useState<ViewCase>('compare');

  // Exact calculations
  const safeR1 = Math.max(1, r1);
  const safeR2 = Math.max(1, r2);
  const safeR3 = Math.max(1, r3);

  // Case A: Vs at Port 1, Port 2 shorted through ideal Ammeter
  const rinA = safeR1 + (safeR2 * safeR3) / (safeR2 + safeR3);
  const isA = vs / rinA;
  const i2a = isA * (safeR3 / (safeR2 + safeR3));

  // Case B: Vs at Port 2, Port 1 shorted through ideal Ammeter
  // If diode is active, current flowing from Port 2 to Port 1 is blocked in Branch 2
  const r2EffectiveB = hasDiode ? 1e6 : safeR2; // High resistance blocking diode
  const rinB = r2EffectiveB + (safeR1 * safeR3) / (safeR1 + safeR3);
  const isB = vs / rinB;
  const i1b = isB * (safeR3 / (safeR1 + safeR3));

  const diff = Math.abs(i2a - i1b);
  const isReciprocal = diff < 1e-4;

  const handleReset = () => {
    setVs(20);
    setR1(10);
    setR2(15);
    setR3(20);
    setHasDiode(false);
    setActiveCase('compare');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-lg font-bold font-display text-pink-400 flex items-center gap-2">
            <RefreshCw className="w-5 h-5 text-pink-400" />
            <span>{t.title}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>
        <button
          onClick={handleReset}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-bold transition-colors border border-slate-700 print-hidden"
          aria-label={t.reset}
        >
          <RotateCcw className="w-3.5 h-3.5 text-pink-400" />
          <span>{t.reset}</span>
        </button>
      </div>

      {/* Case Selector Tabs */}
      <div className="space-y-2 print-hidden">
        <label className="text-xs font-bold text-slate-400 font-mono tracking-wider uppercase block">
          {t.caseTitle}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            onClick={() => setActiveCase('compare')}
            className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeCase === 'compare'
                ? 'bg-pink-950/80 border-pink-500 text-pink-300 shadow-lg shadow-pink-950/50'
                : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-pink-400" />
            <span>{t.compare}</span>
          </button>

          <button
            onClick={() => setActiveCase('caseA')}
            className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeCase === 'caseA'
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-lg shadow-cyan-950/50'
                : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span>{t.caseA}</span>
          </button>

          <button
            onClick={() => setActiveCase('caseB')}
            className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeCase === 'caseB'
                ? 'bg-amber-950/80 border-amber-500 text-amber-300 shadow-lg shadow-amber-950/50'
                : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span>{t.caseB}</span>
          </button>
        </div>
      </div>

      {/* Visual Circuit Diagrams */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Case A Diagram */}
        {(activeCase === 'caseA' || activeCase === 'compare') && (
          <div className="bg-slate-950 rounded-xl p-4 border border-cyan-900/60 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono font-bold text-cyan-400">
              <span>{t.caseA}</span>
              <span className="text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                I2A = {i2a.toFixed(4)} A
              </span>
            </div>

            <svg viewBox="0 0 380 180" className="w-full h-auto">
              {/* Rail */}
              <line x1="30" y1="150" x2="350" y2="150" stroke="#475569" strokeWidth="2.5" />

              {/* Port 1 Source Vs */}
              <g transform="translate(30, 90)">
                <line x1="0" y1="-60" x2="0" y2="60" stroke="#475569" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
                <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">+</text>
                <text x="0" y="11" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">-</text>
                <text x="-25" y="4" textAnchor="end" fill="#38bdf8" fontSize="10" fontWeight="bold">{vs}V</text>
              </g>

              {/* Top wire R1 */}
              <line x1="30" y1="30" x2="100" y2="30" stroke="#475569" strokeWidth="2.5" />
              <g transform="translate(130, 30)">
                <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="3" />
                <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">R1 = {r1}Ω</text>
              </g>
              <line x1="150" y1="30" x2="200" y2="30" stroke="#475569" strokeWidth="2.5" />

              {/* Central Junction */}
              <circle cx="200" cy="30" r="4" fill="#38bdf8" />

              {/* Shunt R3 */}
              <line x1="200" y1="30" x2="200" y2="60" stroke="#475569" strokeWidth="2.5" />
              <g transform="translate(200, 85)">
                <rect x="-10" y="-20" width="20" height="40" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="3" />
                <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">R3</text>
              </g>
              <line x1="200" y1="110" x2="200" y2="150" stroke="#475569" strokeWidth="2.5" />

              {/* Branch R2 */}
              <line x1="200" y1="30" x2="250" y2="30" stroke="#475569" strokeWidth="2.5" />
              <g transform="translate(280, 30)">
                <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="3" />
                <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">R2 = {r2}Ω</text>
              </g>
              <line x1="300" y1="30" x2="350" y2="30" stroke="#475569" strokeWidth="2.5" />

              {/* Port 2 Shorted with Ammeter A */}
              <g transform="translate(350, 90)">
                <line x1="0" y1="-60" x2="0" y2="60" stroke="#38bdf8" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">A2</text>
                <text x="22" y="4" textAnchor="start" fill="#34d399" fontSize="10" fontWeight="bold">{i2a.toFixed(3)}A</text>
              </g>
            </svg>
          </div>
        )}

        {/* Case B Diagram */}
        {(activeCase === 'caseB' || activeCase === 'compare') && (
          <div className="bg-slate-950 rounded-xl p-4 border border-amber-900/60 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono font-bold text-amber-400">
              <span>{t.caseB}</span>
              <span className="text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">
                I1B = {i1b.toFixed(4)} A
              </span>
            </div>

            <svg viewBox="0 0 380 180" className="w-full h-auto">
              {/* Rail */}
              <line x1="30" y1="150" x2="350" y2="150" stroke="#475569" strokeWidth="2.5" />

              {/* Port 1 Shorted with Ammeter A */}
              <g transform="translate(30, 90)">
                <line x1="0" y1="-60" x2="0" y2="60" stroke="#fbbf24" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">A1</text>
                <text x="-22" y="4" textAnchor="end" fill="#34d399" fontSize="10" fontWeight="bold">{i1b.toFixed(3)}A</text>
              </g>

              {/* Top wire R1 */}
              <line x1="30" y1="30" x2="100" y2="30" stroke="#475569" strokeWidth="2.5" />
              <g transform="translate(130, 30)">
                <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" rx="3" />
                <text x="0" y="4" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">R1 = {r1}Ω</text>
              </g>
              <line x1="150" y1="30" x2="200" y2="30" stroke="#475569" strokeWidth="2.5" />

              {/* Central Junction */}
              <circle cx="200" cy="30" r="4" fill="#fbbf24" />

              {/* Shunt R3 */}
              <line x1="200" y1="30" x2="200" y2="60" stroke="#475569" strokeWidth="2.5" />
              <g transform="translate(200, 85)">
                <rect x="-10" y="-20" width="20" height="40" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" rx="3" />
                <text x="0" y="4" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">R3</text>
              </g>
              <line x1="200" y1="110" x2="200" y2="150" stroke="#475569" strokeWidth="2.5" />

              {/* Branch R2 (with optional Diode symbol if inserted) */}
              <line x1="200" y1="30" x2="250" y2="30" stroke="#475569" strokeWidth="2.5" />
              <g transform="translate(280, 30)">
                <rect x="-20" y="-10" width="40" height="20" fill="#1e293b" stroke={hasDiode ? '#ef4444' : '#fbbf24'} strokeWidth="2" rx="3" />
                <text x="0" y="4" textAnchor="middle" fill={hasDiode ? '#f87171' : '#fbbf24'} fontSize="10" fontWeight="bold">
                  {hasDiode ? 'R2+Diode' : `R2 = ${r2}Ω`}
                </text>
              </g>
              <line x1="300" y1="30" x2="350" y2="30" stroke="#475569" strokeWidth="2.5" />

              {/* Port 2 Source Vs */}
              <g transform="translate(350, 90)">
                <line x1="0" y1="-60" x2="0" y2="60" stroke="#475569" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#fbbf24" strokeWidth="2.5" />
                <text x="0" y="-3" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">+</text>
                <text x="0" y="11" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">-</text>
                <text x="25" y="4" textAnchor="start" fill="#fbbf24" fontSize="10" fontWeight="bold">{vs}V</text>
              </g>
            </svg>
          </div>
        )}
      </div>

      {/* Sliders & Unilateral Diode Toggle */}
      <div className="space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 print-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h4 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider flex items-center gap-2">
            <Sliders className="w-4 h-4 text-pink-400" />
            <span>{t.parameters}</span>
          </h4>

          {/* Unilateral Diode Toggle */}
          <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-mono text-slate-300">
            <input
              type="checkbox"
              checked={hasDiode}
              onChange={(e) => setHasDiode(e.target.checked)}
              className="w-4 h-4 accent-red-500 rounded cursor-pointer"
            />
            <span className={hasDiode ? 'text-red-400 font-bold' : 'text-slate-400'}>
              {t.unilateralToggle}
            </span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-pink-400 font-bold">{t.vsLabel}:</span>
              <span className="text-white font-bold">{vs} V</span>
            </div>
            <input
              type="range"
              min="2"
              max="60"
              step="1"
              value={vs}
              onChange={(e) => setVs(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-cyan-400 font-bold">{t.r1Label}:</span>
              <span className="text-white font-bold">{r1} Ω</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={r1}
              onChange={(e) => setR1(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-amber-400 font-bold">{t.r2Label}:</span>
              <span className="text-white font-bold">{r2} Ω</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={r2}
              onChange={(e) => setR2(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-purple-400 font-bold">{t.r3Label}:</span>
              <span className="text-white font-bold">{r3} Ω</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={r3}
              onChange={(e) => setR3(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
            />
          </div>
        </div>
      </div>

      {/* Live Quantitative Verification Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-950 rounded-xl border border-cyan-900/80">
          <div className="text-xs font-mono text-cyan-400 font-bold mb-1">{t.respCaseA}</div>
          <div className="text-lg font-bold font-mono text-cyan-300">{i2a.toFixed(4)} A</div>
          <div className="text-[11px] text-slate-400 font-mono mt-1">Y21 = {(i2a / vs).toFixed(4)} S</div>
        </div>

        <div className="p-4 bg-slate-950 rounded-xl border border-amber-900/80">
          <div className="text-xs font-mono text-amber-400 font-bold mb-1">{t.respCaseB}</div>
          <div className="text-lg font-bold font-mono text-amber-300">{i1b.toFixed(4)} A</div>
          <div className="text-[11px] text-slate-400 font-mono mt-1">Y12 = {(i1b / vs).toFixed(4)} S</div>
        </div>

        <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
          <div className="text-xs font-mono text-slate-400 font-bold mb-1">{t.diffLabel}</div>
          <div className="text-lg font-bold font-mono text-white">{diff.toFixed(5)} A</div>
          <div className="text-[11px] text-slate-400 font-mono mt-1">Tolerance: &lt; 0.0001 A</div>
        </div>
      </div>

      {/* Reciprocity Status Banner */}
      <div className={`p-4 rounded-xl border font-mono text-xs leading-relaxed ${
        isReciprocal
          ? 'bg-emerald-950/40 border-emerald-500/80 text-emerald-300'
          : 'bg-red-950/40 border-red-500/80 text-red-300'
      }`}>
        <div className="flex items-center gap-2 font-bold mb-1">
          {isReciprocal ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          ) : (
            <AlertOctagon className="w-5 h-5 text-red-400" />
          )}
          <span>{isReciprocal ? t.statusReciprocal : t.statusNonReciprocal}</span>
        </div>
        <p>
          {isReciprocal
            ? `I2A (${i2a.toFixed(4)} A) = I1B (${i1b.toFixed(4)} A). Reciprocity Theorem confirmed for linear bilateral network!`
            : `Unilateral diode element breaks network symmetry. I2A (${i2a.toFixed(4)} A) ≠ I1B (${i1b.toFixed(4)} A). Reciprocity DOES NOT apply.`}
        </p>
      </div>

      {/* Rule Explanation Banner */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1 text-xs">
        <h4 className="font-bold text-pink-400 font-mono flex items-center gap-2">
          <Zap className="w-4 h-4 text-pink-400" />
          <span>{t.explanationTitle}</span>
        </h4>
        <p className="text-slate-300 leading-relaxed">
          {t.explanationText}
        </p>
      </div>
    </div>
  );
};
