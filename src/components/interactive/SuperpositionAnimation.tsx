import React, { useState } from 'react';
import { Language } from '../../types';
import { RotateCcw, Sliders, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface Props {
  currentLanguage: Language;
}

type Mode = 'all' | 'source1' | 'source2';

const LABELS = {
  en: {
    title: 'Superposition Theorem Interactive Simulator',
    subtitle: 'Demonstrating that the total response (voltage or current) in a linear DC network with multiple independent sources is the algebraic sum of individual source responses.',
    modeTitle: 'Operating Circuit Mode',
    modeAll: 'Full Circuit (V1 + V2 Active)',
    modeS1: 'Source 1 Only (V2 Short-Circuited)',
    modeS2: 'Source 2 Only (V1 Short-Circuited)',
    parameters: 'Circuit Parameters',
    v1Label: 'Voltage Source V1',
    v2Label: 'Voltage Source V2',
    r1Label: 'Resistor R1 (Series V1)',
    r2Label: 'Load Resistor R2 (Branch A-GND)',
    r3Label: 'Resistor R3 (Series V2)',
    results: 'Superposition Analysis & Live Results',
    contribS1: 'Source 1 Contribution (I′_L)',
    contribS2: 'Source 2 Contribution (I″_L)',
    totalResponse: 'Total Response (IL = I′_L + I″_L)',
    equationCheck: 'Linearity Equation Verification',
    powerWarningTitle: 'Critical Rule: Superposition Does NOT Apply Directly to Power',
    powerWarningText: 'Power is proportional to current squared (P = I²R). Sum of individual powers (P1 + P2) does NOT equal actual total power (P_total). Total power must be computed using actual total current/voltage.',
    reset: 'Reset Defaults',
    nodeVoltage: 'Top Junction Voltage (VA)',
    loadCurrent: 'Load Current (IL)',
    powerDissipated: 'Load Power (P_L)'
  },
  hi: {
    title: 'सुपरपोजिशन प्रमेय इंटरएक्टिव सिम्युलेटर',
    subtitle: 'यह प्रदर्शित करना कि कई स्वतंत्र स्रोतों वाले रैखिक डीसी नेटवर्क में कुल अनुक्रिया (वोल्टेज या धारा) व्यक्तिगत स्रोत अनुक्रियाओं का बीजगणितीय योग है।',
    modeTitle: 'परिचालन परिपथ मोड',
    modeAll: 'पूर्ण परिपथ (V1 + V2 दोनों सक्रिय)',
    modeS1: 'केवल स्रोत 1 (V2 शॉर्ट-सर्किट)',
    modeS2: 'केवल स्रोत 2 (V1 शॉर्ट-सर्किट)',
    parameters: 'परिपथ पैरामीटर',
    v1Label: 'वोल्टेज स्रोत V1',
    v2Label: 'वोल्टेज स्रोत V2',
    r1Label: 'प्रतिरोधक R1 (श्रेणी V1)',
    r2Label: 'लोड प्रतिरोधक R2 (शाखा A-GND)',
    r3Label: 'प्रतिरोधक R3 (श्रेणी V2)',
    results: 'सुपरपोजिशन विश्लेषण एवं परिणाम',
    contribS1: 'स्रोत 1 योगदान (I′_L)',
    contribS2: 'स्रोत 2 योगदान (I″_L)',
    totalResponse: 'कुल अनुक्रिया (IL = I′_L + I″_L)',
    equationCheck: 'रेखीय समीकरण सत्यापन',
    powerWarningTitle: 'महत्वपूर्ण नियम: सुपरपोजिशन शक्ति (Power) पर सीधे लागू नहीं होता',
    powerWarningText: 'शक्ति धारा के वर्ग के समानुपाती होती है (P = I²R)। व्यक्तिगत शक्तियों का योग (P1 + P2) वास्तविक कुल शक्ति (P_total) के बराबर नहीं होता। शक्ति की गणना कुल धारा से की जानी चाहिए।',
    reset: 'रीसेट करें',
    nodeVoltage: 'जंक्शन वोल्टेज (VA)',
    loadCurrent: 'लोड धारा (IL)',
    powerDissipated: 'लोड शक्ति (P_L)'
  },
  bn: {
    title: 'সুপারপজিশন উপপাদ্য ইন্টারেক্টিভ সিমুলেটর',
    subtitle: 'মাল্টিপল ইন্ডিপেনডেন্ট সোর্সযুক্ত লিনিয়ার ডিসি নেটওয়ার্কে মোট ভোল্টেজ বা কারেন্ট যে প্রতিটি সোর্সের পৃথক রেসপন্সের বীজগাণিতিক যোগফলের সমান — তা প্রত্যক্ষ প্রমাণ।',
    modeTitle: 'সার্কিট অপারেশন মোড',
    modeAll: 'পূর্ণ সার্কিট (V1 + V2 উভয় সক্রিয়)',
    modeS1: 'কেবল সোর্স ১ (V2 শর্ট-সার্কিট)',
    modeS2: 'কেবল সোর্স ২ (V1 শর্ট-সার্কিট)',
    parameters: 'সার্কিট প্যারামিটারসমূহ',
    v1Label: 'ভোল্টেজ সোর্স V1',
    v2Label: 'ভোল্টেজ সোর্স V2',
    r1Label: 'রেজিস্টর R1 (সিরিজ V1)',
    r2Label: 'লোড রেজিস্টর R2 (ব্রাঞ্চ A-GND)',
    r3Label: 'রেজিস্টর R3 (সিরিজ V2)',
    results: 'সুপারপজিশন বিশ্লেষণ ও লাইভ ফলাফল',
    contribS1: 'সোর্স ১ অবদান (I′_L)',
    contribS2: 'সোর্স ২ অবদান (I″_L)',
    totalResponse: 'মোট রেসপন্স (IL = I′_L + I″_L)',
    equationCheck: 'লিনিয়ারিটি সমীকরণ যাচাইকরণ',
    powerWarningTitle: 'গুরুত্বপূর্ণ নিয়ম: পাওয়ার (Power) এর ওপর সরাসরি সুপারপজিশন প্রযোজ্য নয়',
    powerWarningText: 'পাওয়ার কারেন্টের বর্গের সমানুপাতিক (P = I²R)। পৃথক পাওয়ারের যোগফল (P1 + P2) মূল মোট পাওয়ার (P_total) এর সমান হয় না। মোট কারেন্ট থেকে মোট পাওয়ার হিসাব করতে হয়।',
    reset: 'রিসেট করুন',
    nodeVoltage: 'জংশন ভোল্টেজ (VA)',
    loadCurrent: 'লোড কারেন্ট (IL)',
    powerDissipated: 'লোড পাওয়ার (P_L)'
  }
};

export const SuperpositionAnimation: React.FC<Props> = ({ currentLanguage }) => {
  const t = LABELS[currentLanguage] || LABELS.en;

  const [v1, setV1] = useState<number>(20);
  const [v2, setV2] = useState<number>(10);
  const [r1, setR1] = useState<number>(10);
  const [r2, setR2] = useState<number>(20);
  const [r3, setR3] = useState<number>(10);
  const [mode, setMode] = useState<Mode>('all');

  // Exact calculations using nodal analysis
  const g1 = 1 / Math.max(1, r1);
  const g2 = 1 / Math.max(1, r2);
  const g3 = 1 / Math.max(1, r3);
  const gTotal = g1 + g2 + g3;

  // Source 1 contribution (V1 active, V2 = 0)
  const va1 = (v1 * g1) / gTotal;
  const il1 = va1 * g2;
  const p1 = il1 * il1 * r2;

  // Source 2 contribution (V2 active, V1 = 0)
  const va2 = (v2 * g3) / gTotal;
  const il2 = va2 * g2;
  const p2 = il2 * il2 * r2;

  // Total response
  const vaTotal = va1 + va2;
  const ilTotal = il1 + il2;
  const pTotalActual = ilTotal * ilTotal * r2;
  const pSumIndividual = p1 + p2;

  // Active values based on selected mode
  const activeVa = mode === 'source1' ? va1 : mode === 'source2' ? va2 : vaTotal;
  const activeIl = mode === 'source1' ? il1 : mode === 'source2' ? il2 : ilTotal;
  const activeP = mode === 'source1' ? p1 : mode === 'source2' ? p2 : pTotalActual;

  const handleReset = () => {
    setV1(20);
    setV2(10);
    setR1(10);
    setR2(20);
    setR3(10);
    setMode('all');
  };

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-lg font-bold font-display text-cyan-400 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
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
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t.reset}</span>
        </button>
      </div>

      {/* Mode Selector Tabs */}
      <div className="space-y-2 print-hidden">
        <label className="text-xs font-bold text-slate-400 font-mono tracking-wider uppercase block">
          {t.modeTitle}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            onClick={() => setMode('all')}
            className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mode === 'all'
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-lg shadow-cyan-950/50'
                : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span>{t.modeAll}</span>
          </button>

          <button
            onClick={() => setMode('source1')}
            className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mode === 'source1'
                ? 'bg-amber-950/80 border-amber-500 text-amber-300 shadow-lg shadow-amber-950/50'
                : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span>{t.modeS1}</span>
          </button>

          <button
            onClick={() => setMode('source2')}
            className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              mode === 'source2'
                ? 'bg-purple-950/80 border-purple-500 text-purple-300 shadow-lg shadow-purple-950/50'
                : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
            <span>{t.modeS2}</span>
          </button>
        </div>
      </div>

      {/* Interactive Circuit Schematic SVG */}
      <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
        <svg viewBox="0 0 540 240" className="w-full max-w-xl h-auto">
          <defs>
            <marker id="arrow-cyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
            </marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
            </marker>
            <marker id="arrow-purple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#c084fc" />
            </marker>
          </defs>

          {/* Bottom Rail / GND */}
          <line x1="60" y1="200" x2="480" y2="200" stroke="#475569" strokeWidth="3" />
          <g transform="translate(270, 200)">
            <line x1="0" y1="0" x2="0" y2="15" stroke="#475569" strokeWidth="2" />
            <line x1="-15" y1="15" x2="15" y2="15" stroke="#475569" strokeWidth="2" />
            <line x1="-10" y1="19" x2="10" y2="19" stroke="#475569" strokeWidth="2" />
            <line x1="-5" y1="23" x2="5" y2="23" stroke="#475569" strokeWidth="2" />
          </g>

          {/* Left Branch: V1 Source */}
          <line x1="60" y1="200" x2="60" y2="140" stroke="#475569" strokeWidth="3" />
          {mode === 'source2' ? (
            // Short-circuit line for V1
            <g>
              <line x1="60" y1="140" x2="60" y2="60" stroke="#ef4444" strokeWidth="3" strokeDasharray="3 3" />
              <rect x="25" y="88" width="70" height="20" rx="4" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
              <text x="60" y="102" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">V1 SHORTED</text>
            </g>
          ) : (
            // Active V1 Source
            <g transform="translate(60, 100)">
              <circle cx="0" cy="0" r="20" fill="#0f172a" stroke="#fbbf24" strokeWidth="3" />
              <text x="0" y="-4" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">+</text>
              <text x="0" y="12" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">-</text>
              <text x="-28" y="4" textAnchor="end" fill="#fbbf24" fontSize="12" fontWeight="bold">{v1}V</text>
            </g>
          )}
          <line x1="60" y1="60" x2="60" y2="40" stroke="#475569" strokeWidth="3" />

          {/* Resistor R1 */}
          <line x1="60" y1="40" x2="110" y2="40" stroke="#475569" strokeWidth="3" />
          <g transform="translate(140, 40)">
            <rect x="-25" y="-12" width="50" height="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="4" />
            <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">R1 = {r1}Ω</text>
          </g>
          <line x1="170" y1="40" x2="270" y2="40" stroke="#475569" strokeWidth="3" />

          {/* Central Junction Node A */}
          <circle cx="270" cy="40" r="6" fill="#38bdf8" />
          <text x="270" y="24" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">
            Node A ({activeVa.toFixed(2)}V)
          </text>

          {/* Middle Branch: Load Resistor R2 */}
          <line x1="270" y1="40" x2="270" y2="80" stroke="#475569" strokeWidth="3" />
          <g transform="translate(270, 115)">
            <rect x="-14" y="-25" width="28" height="50" fill="#1e293b" stroke="#34d399" strokeWidth="2.5" rx="4" />
            <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">R2</text>
            <text x="0" y="16" textAnchor="middle" fill="#34d399" fontSize="9">{r2}Ω</text>
          </g>
          <line x1="270" y1="150" x2="270" y2="200" stroke="#475569" strokeWidth="3" />

          {/* Current Flow Arrow through R2 */}
          <path
            d="M 295 80 L 295 140"
            stroke={mode === 'source1' ? '#fbbf24' : mode === 'source2' ? '#c084fc' : '#38bdf8'}
            strokeWidth="3"
            markerEnd={mode === 'source1' ? 'url(#arrow-amber)' : mode === 'source2' ? 'url(#arrow-purple)' : 'url(#arrow-cyan)'}
          />
          <text
            x="305"
            y="115"
            textAnchor="start"
            fill={mode === 'source1' ? '#fbbf24' : mode === 'source2' ? '#c084fc' : '#38bdf8'}
            fontSize="11"
            fontWeight="bold"
            fontFamily="monospace"
          >
            IL = {activeIl.toFixed(3)}A
          </text>

          {/* Right Branch: Resistor R3 */}
          <line x1="270" y1="40" x2="370" y2="40" stroke="#475569" strokeWidth="3" />
          <g transform="translate(400, 40)">
            <rect x="-25" y="-12" width="50" height="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="4" />
            <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">R3 = {r3}Ω</text>
          </g>
          <line x1="430" y1="40" x2="480" y2="40" stroke="#475569" strokeWidth="3" />

          {/* Right Branch: V2 Source */}
          <line x1="480" y1="40" x2="480" y2="60" stroke="#475569" strokeWidth="3" />
          {mode === 'source1' ? (
            // Short-circuit line for V2
            <g>
              <line x1="480" y1="60" x2="480" y2="140" stroke="#ef4444" strokeWidth="3" strokeDasharray="3 3" />
              <rect x="445" y="88" width="70" height="20" rx="4" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
              <text x="480" y="102" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold">V2 SHORTED</text>
            </g>
          ) : (
            // Active V2 Source
            <g transform="translate(480, 100)">
              <circle cx="0" cy="0" r="20" fill="#0f172a" stroke="#c084fc" strokeWidth="3" />
              <text x="0" y="-4" textAnchor="middle" fill="#c084fc" fontSize="12" fontWeight="bold">+</text>
              <text x="0" y="12" textAnchor="middle" fill="#c084fc" fontSize="12" fontWeight="bold">-</text>
              <text x="28" y="4" textAnchor="start" fill="#c084fc" fontSize="12" fontWeight="bold">{v2}V</text>
            </g>
          )}
          <line x1="480" y1="140" x2="480" y2="200" stroke="#475569" strokeWidth="3" />
        </svg>

        {/* Dynamic Mode Caption */}
        <div className="mt-2 text-center text-xs font-mono text-cyan-300 font-bold">
          {mode === 'all' && `Full Circuit: Both V1 (${v1}V) and V2 (${v2}V) active simultaneously.`}
          {mode === 'source1' && `Source 1 Only: V1 (${v1}V) active, V2 replaced by 0Ω Short Circuit.`}
          {mode === 'source2' && `Source 2 Only: V2 (${v2}V) active, V1 replaced by 0Ω Short Circuit.`}
        </div>
      </div>

      {/* Parameter Sliders */}
      <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800 print-hidden">
        <h4 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider flex items-center gap-2">
          <Sliders className="w-4 h-4 text-cyan-400" />
          <span>{t.parameters}</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-amber-400 font-bold">{t.v1Label}:</span>
              <span className="text-white font-bold">{v1} V</span>
            </div>
            <input
              type="range"
              min="0"
              max="60"
              step="1"
              value={v1}
              onChange={(e) => setV1(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-purple-400 font-bold">{t.v2Label}:</span>
              <span className="text-white font-bold">{v2} V</span>
            </div>
            <input
              type="range"
              min="0"
              max="60"
              step="1"
              value={v2}
              onChange={(e) => setV2(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-cyan-400 font-bold">{t.r1Label}:</span>
              <span className="text-white font-bold">{r1} Ω</span>
            </div>
            <input
              type="range"
              min="2"
              max="50"
              step="1"
              value={r1}
              onChange={(e) => setR1(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-emerald-400 font-bold">{t.r2Label}:</span>
              <span className="text-white font-bold">{r2} Ω</span>
            </div>
            <input
              type="range"
              min="2"
              max="50"
              step="1"
              value={r2}
              onChange={(e) => setR2(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-cyan-400 font-bold">{t.r3Label}:</span>
              <span className="text-white font-bold">{r3} Ω</span>
            </div>
            <input
              type="range"
              min="2"
              max="50"
              step="1"
              value={r3}
              onChange={(e) => setR3(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
      </div>

      {/* Individual Source Contributions & Total Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Source 1 Contribution */}
        <div className={`p-4 rounded-xl border transition-all ${
          mode === 'source1' ? 'bg-amber-950/40 border-amber-500/80' : 'bg-slate-950/80 border-slate-800'
        }`}>
          <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold text-xs font-mono uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>{t.contribS1}</span>
          </div>
          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex justify-between text-slate-400">
              <span>{t.nodeVoltage} (VA′):</span>
              <span className="text-amber-300 font-bold">{va1.toFixed(3)} V</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>{t.loadCurrent} (I′_L):</span>
              <span className="text-amber-300 font-bold">{il1.toFixed(3)} A</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>{t.powerDissipated} (P1):</span>
              <span className="text-amber-300 font-bold">{p1.toFixed(3)} W</span>
            </div>
          </div>
        </div>

        {/* Source 2 Contribution */}
        <div className={`p-4 rounded-xl border transition-all ${
          mode === 'source2' ? 'bg-purple-950/40 border-purple-500/80' : 'bg-slate-950/80 border-slate-800'
        }`}>
          <div className="flex items-center gap-2 mb-2 text-purple-400 font-bold text-xs font-mono uppercase">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>{t.contribS2}</span>
          </div>
          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex justify-between text-slate-400">
              <span>{t.nodeVoltage} (VA″):</span>
              <span className="text-purple-300 font-bold">{va2.toFixed(3)} V</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>{t.loadCurrent} (I″_L):</span>
              <span className="text-purple-300 font-bold">{il2.toFixed(3)} A</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>{t.powerDissipated} (P2):</span>
              <span className="text-purple-300 font-bold">{p2.toFixed(3)} W</span>
            </div>
          </div>
        </div>

        {/* Total Superposition Response */}
        <div className={`p-4 rounded-xl border transition-all ${
          mode === 'all' ? 'bg-cyan-950/40 border-cyan-500/80' : 'bg-slate-950/80 border-slate-800'
        }`}>
          <div className="flex items-center gap-2 mb-2 text-cyan-400 font-bold text-xs font-mono uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{t.totalResponse}</span>
          </div>
          <div className="space-y-1.5 text-xs font-mono">
            <div className="flex justify-between text-slate-400">
              <span>{t.nodeVoltage} (VA):</span>
              <span className="text-cyan-300 font-bold">{vaTotal.toFixed(3)} V</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>{t.loadCurrent} (IL):</span>
              <span className="text-cyan-300 font-bold">{ilTotal.toFixed(3)} A</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>{t.powerDissipated} (P_total):</span>
              <span className="text-cyan-300 font-bold">{pTotalActual.toFixed(3)} W</span>
            </div>
          </div>
        </div>
      </div>

      {/* Superposition Linear Sum Verification Banner */}
      <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 space-y-2">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono">
          <CheckCircle2 className="w-4 h-4" />
          <span>{t.equationCheck}</span>
        </div>
        <div className="text-xs font-mono text-slate-200 leading-relaxed bg-emerald-950/30 p-3 rounded-lg border border-emerald-800/50">
          <p>
            <strong>Current Superposition:</strong> IL = I′_L + I″_L = {il1.toFixed(3)} A + {il2.toFixed(3)} A ={' '}
            <span className="text-emerald-400 font-bold">{ilTotal.toFixed(3)} A</span>
          </p>
          <p className="mt-1">
            <strong>Node Voltage Superposition:</strong> VA = VA′ + VA″ = {va1.toFixed(3)} V + {va2.toFixed(3)} V ={' '}
            <span className="text-emerald-400 font-bold">{vaTotal.toFixed(3)} V</span>
          </p>
        </div>
      </div>

      {/* Non-linear Power Warning Banner */}
      <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 space-y-2">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>{t.powerWarningTitle}</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {t.powerWarningText}
        </p>
        <div className="text-xs font-mono text-amber-300 pt-1">
          Sum of Individual Powers (P1 + P2) = {p1.toFixed(3)} W + {p2.toFixed(3)} W ={' '}
          <span className="text-amber-400 font-bold">{pSumIndividual.toFixed(3)} W</span>
          {' ≠ '} Actual Total Power (P_total) ={' '}
          <span className="text-cyan-400 font-bold">{pTotalActual.toFixed(3)} W</span>
        </div>
      </div>
    </div>
  );
};
