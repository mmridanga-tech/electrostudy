import React, { useState } from 'react';
import { RefreshCw, RotateCcw, CheckCircle2, ArrowRightLeft, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';

interface StarDeltaAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Star-Delta (Wye-Delta) Transformation Simulator',
    subtitle: 'Bidirectional equivalence calculator between Delta (Δ) mesh connections and Star (Y) node connections.',
    modeDeltaToStar: 'Delta (Δ) → Star (Y)',
    modeStarToDelta: 'Star (Y) → Delta (Δ)',
    balancedShortcut: 'Set Balanced Network (30 Ω)',
    deltaInputsTitle: 'Delta Network Inputs (R_AB, R_BC, R_CA)',
    starInputsTitle: 'Star Network Inputs (R_A, R_B, R_C)',
    starOutputsTitle: 'Equivalent Star Resistors (Calculated)',
    deltaOutputsTitle: 'Equivalent Delta Resistors (Calculated)',
    verificationTitle: 'Mathematical Consistency Verification (Round-Trip Check)',
    verifyOk: 'Round-Trip Verification Passed! Both networks are 100% electrically identical.',
    rabLabel: 'Resistor R_AB (Between A & B):',
    rbcLabel: 'Resistor R_BC (Between B & C):',
    rcaLabel: 'Resistor R_CA (Between C & A):',
    raLabel: 'Star Arm R_A (Connected to Node A):',
    rbLabel: 'Star Arm R_B (Connected to Node B):',
    rcLabel: 'Star Arm R_C (Connected to Node C):',
    formulaTitle: 'Equivalence Transformation Formulas',
    deltaToStarFormula: 'Star Arm R_A = (R_AB × R_CA) / (R_AB + R_BC + R_CA)  [Product of adjacent sides / Sum of 3 sides]',
    starToDeltaFormula: 'Delta Side R_AB = (R_A·R_B + R_B·R_C + R_C·R_A) / R_C  [Sum of pair products / Opposite star arm]',
    calloutTitle: 'Star-Delta Equivalence Principles',
    calloutText: '1. Used to simplify bridge networks and circuits that are neither purely series nor parallel. 2. For balanced networks where all resistors equal R: R_Star = R_Delta / 3. 3. Node-to-node impedance remains identical between terminals A, B, and C.',
  },
  hi: {
    title: 'स्टार-डेल्टा रूपांतरण सिमुलेटर',
    subtitle: 'डेल्टा (Δ) और स्टार (Y) संयोजनों के बीच द्विदिशीय समतुल्यता कैलकुलेटर।',
    modeDeltaToStar: 'डेल्टा (Δ) → स्टार (Y)',
    modeStarToDelta: 'स्टार (Y) → डेल्टा (Δ)',
    balancedShortcut: 'संतुलित नेटवर्क सेट करें (30 Ω)',
    deltaInputsTitle: 'डेल्टा नेटवर्क इनपुट (R_AB, R_BC, R_CA)',
    starInputsTitle: 'स्टार नेटवर्क इनपुट (R_A, R_B, R_C)',
    starOutputsTitle: 'समतुल्य स्टार प्रतिरोधक (गणना किए गए)',
    deltaOutputsTitle: 'समतुल्य डेल्टा प्रतिरोधक (गणना किए गए)',
    verificationTitle: 'गणितीय निरंतरता सत्यापन (राउंड-ट्रिप जाँच)',
    verifyOk: 'राउंड-ट्रिप सत्यापन सफल! दोनों नेटवर्क 100% विद्युत रूप से समान हैं।',
    rabLabel: 'प्रतिरोधक R_AB (A और B के बीच):',
    rbcLabel: 'प्रतिरोधक R_BC (B और C के बीच):',
    rcaLabel: 'प्रतिरोधक R_CA (C और A के बीच):',
    raLabel: 'स्टार आर्म R_A (नोड A से जुड़ा):',
    rbLabel: 'स्टार आर्म R_B (नोड B से जुड़ा):',
    rcLabel: 'स्टार आर्म R_C (नोड C से जुड़ा):',
    formulaTitle: 'समतुल्यता रूपांतरण सूत्र',
    deltaToStarFormula: 'स्टार आर्म R_A = (R_AB × R_CA) / (R_AB + R_BC + R_CA)  [आसन्न भुजाओं का गुणनफल / 3 भुजाओं का योग]',
    starToDeltaFormula: 'डेल्टा भुजा R_AB = (R_A·R_B + R_B·R_C + R_C·R_A) / R_C  [युग्म गुणनफलों का योग / विपरीत स्टार आर्म]',
    calloutTitle: 'स्टार-डेल्टा समतुल्यता सिद्धांत',
    calloutText: '1. ब्रिज नेटवर्कों को हल करने के लिए उपयोग किया जाता है। 2. R मान वाले संतुलित नेटवर्कों के लिए: R_Star = R_Delta / 3। 3. टर्मिनल A, B, C के बीच प्रतिबाधा समान रहती है।',
  },
  bn: {
    title: 'স্টার-ডেল্টা রূপান্তর সিমুলেটর',
    subtitle: 'ডেল্টা (Δ) মেশ এবং স্টার (Y) সংযোগের মধ্যকার দ্বিমুখী সমতুল্যতা ক্যালকুলেটর।',
    modeDeltaToStar: 'ডেল্টা (Δ) → স্টার (Y)',
    modeStarToDelta: 'স্টার (Y) → ডেল্টা (Δ)',
    balancedShortcut: 'সুষম নেটওয়ার্ক সেট (৩০ Ω)',
    deltaInputsTitle: 'ডেল্টা নেটওয়ার্ক ইনপুট (R_AB, R_BC, R_CA)',
    starInputsTitle: 'স্টার নেটওয়ার্ক ইনপুট (R_A, R_B, R_C)',
    starOutputsTitle: 'সমতুল্য স্টার রেজিস্টর (গণনাকৃত)',
    deltaOutputsTitle: 'সমতুল্য ডেল্টা রেজিস্টর (গণনাকৃত)',
    verificationTitle: 'গাণিতিক সামঞ্জস্যতা পরীক্ষা (রাউন্ড-ট্রিপ চেক)',
    verifyOk: 'রাউন্ড-ট্রিপ পরীক্ষা সফল! উভয় নেটওয়ার্ক শতভাগ বৈদ্যুতিকভাবে অভিন্ন।',
    rabLabel: 'রেজিস্টর R_AB (A ও B এর মাঝে):',
    rbcLabel: 'রেজিস্টর R_BC (B ও C এর মাঝে):',
    rcaLabel: 'রেজিস্টর R_CA (C ও A এর মাঝে):',
    raLabel: 'স্টার আর্ম R_A (নোড A এর সাথে):',
    rbLabel: 'স্টার আর্ম R_B (নোড B এর সাথে):',
    rcLabel: 'স্টার আর্ম R_C (নোড C এর সাথে):',
    formulaTitle: 'সমতুল্যতা রূপান্তর সূত্রাবলী',
    deltaToStarFormula: 'স্টার আর্ম R_A = (R_AB × R_CA) / (R_AB + R_BC + R_CA)  [সংলগ্ন দুই বাহুর গুণফল / ৩ বাহুর যোগফল]',
    starToDeltaFormula: 'ডেল্টা বাহু R_AB = (R_A·R_B + R_B·R_C + R_C·R_A) / R_C  [জোড়া গুণফলের সমষ্টি / বিপরীত স্টার আর্ম]',
    calloutTitle: 'স্টার-ডেল্টা সমতুল্যতার মূলনীতি',
    calloutText: '১. বীজ নেটওয়ার্ক সহজীকরণে ব্যবহৃত হয়। ২. সব রেজিস্ট্যান্স R হলে: R_Star = R_Delta / ৩। ৩. টার্মিনাল A, B, C এর মধ্যকার রোধ সর্বদা অপরিবর্তিত থাকে।',
  }
};

export const StarDeltaAnimation: React.FC<StarDeltaAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [dir, setDir] = useState<'deltaToStar' | 'starToDelta'>('deltaToStar');

  // Delta Inputs
  const [Rab, setRab] = useState<number>(30);
  const [Rbc, setRbc] = useState<number>(30);
  const [Rca, setRca] = useState<number>(30);

  // Star Inputs
  const [Ra, setRa] = useState<number>(10);
  const [Rb, setRb] = useState<number>(10);
  const [Rc, setRc] = useState<number>(10);

  // Safe Delta
  const sRab = Math.max(0.1, Rab);
  const sRbc = Math.max(0.1, Rbc);
  const sRca = Math.max(0.1, Rca);

  // Safe Star
  const sRa = Math.max(0.1, Ra);
  const sRb = Math.max(0.1, Rb);
  const sRc = Math.max(0.1, Rc);

  // Delta -> Star calculations
  const deltaSum = sRab + sRbc + sRca;
  const calcRa = (sRab * sRca) / deltaSum;
  const calcRb = (sRab * sRbc) / deltaSum;
  const calcRc = (sRbc * sRca) / deltaSum;

  // Verification Delta -> Star -> Recovered Delta
  const starSumProduct = calcRa * calcRb + calcRb * calcRc + calcRc * calcRa;
  const recRab = starSumProduct / calcRc;
  const recRbc = starSumProduct / calcRa;
  const recRca = starSumProduct / calcRb;

  // Star -> Delta calculations
  const starNumerator = sRa * sRb + sRb * sRc + sRc * sRa;
  const calcRab = starNumerator / sRc;
  const calcRbc = starNumerator / sRa;
  const calcRca = starNumerator / sRb;

  // Verification Star -> Delta -> Recovered Star
  const recDeltaSum = calcRab + calcRbc + calcRca;
  const recRa = (calcRab * calcRca) / recDeltaSum;
  const recRb = (calcRab * calcRbc) / recDeltaSum;
  const recRc = (calcRbc * calcRca) / recDeltaSum;

  const handleReset = () => {
    setRab(30);
    setRbc(30);
    setRca(30);
    setRa(10);
    setRb(10);
    setRc(10);
    setDir('deltaToStar');
  };

  const handleBalancedShortcut = () => {
    if (dir === 'deltaToStar') {
      setRab(30);
      setRbc(30);
      setRca(30);
    } else {
      setRa(10);
      setRb(10);
      setRc(10);
    }
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      calloutTitle={t.calloutTitle}
      calloutText={t.calloutText}
    >
      {/* Direction & Shortcut Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 print:hidden">
        <div className="flex gap-2 flex-1 min-w-[280px]">
          <button
            onClick={() => setDir('deltaToStar')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border ${
              dir === 'deltaToStar'
                ? 'bg-amber-600 text-white border-amber-400 shadow-md shadow-amber-900/30'
                : 'bg-slate-900 dark:bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4 text-amber-300" />
            {t.modeDeltaToStar}
          </button>
          <button
            onClick={() => setDir('starToDelta')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border ${
              dir === 'starToDelta'
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-900/30'
                : 'bg-slate-900 dark:bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4 text-emerald-300" />
            {t.modeStarToDelta}
          </button>
        </div>
        <button
          onClick={handleBalancedShortcut}
          className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-cyan-300 border border-slate-700 transition flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          {t.balancedShortcut}
        </button>
      </div>

      {/* DELTA TO STAR MODE */}
      {dir === 'deltaToStar' && (
        <div className="space-y-6">
          {/* Delta Inputs */}
          <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-100 print:hidden">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              {t.deltaInputsTitle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.rabLabel} <span className="font-mono text-amber-400 font-bold">{Rab} Ω</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="120"
                  value={Rab}
                  onChange={e => setRab(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.rbcLabel} <span className="font-mono text-amber-400 font-bold">{Rbc} Ω</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="120"
                  value={Rbc}
                  onChange={e => setRbc(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.rcaLabel} <span className="font-mono text-amber-400 font-bold">{Rca} Ω</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="120"
                  value={Rca}
                  onChange={e => setRca(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Dual Schematic Side-by-Side SVG */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Delta Schematic */}
            <div className="flex flex-col items-center border-r-0 md:border-r border-slate-800 pr-0 md:pr-4">
              <span className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">Delta (Δ) Network</span>
              <svg viewBox="0 0 240 200" className="w-52 h-44">
                {/* Triangle Nodes */}
                {/* Node A (Top) */}
                <circle cx="120" cy="25" r="7" fill="#fbbf24" />
                <text x="120" y="14" textAnchor="middle" fill="#fde047" fontSize="11" fontWeight="bold">A</text>

                {/* Node B (Bottom Left) */}
                <circle cx="30" cy="160" r="7" fill="#fbbf24" />
                <text x="16" y="165" textAnchor="end" fill="#fde047" fontSize="11" fontWeight="bold">B</text>

                {/* Node C (Bottom Right) */}
                <circle cx="210" cy="160" r="7" fill="#fbbf24" />
                <text x="224" y="165" fill="#fde047" fontSize="11" fontWeight="bold">C</text>

                {/* R_AB (A to B) */}
                <line x1="120" y1="25" x2="30" y2="160" stroke="#f59e0b" strokeWidth="2.5" />
                <rect x="58" y="78" width="36" height="18" fill="#1e293b" stroke="#f59e0b" rx="3" />
                <text x="76" y="91" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">{sRab}Ω</text>

                {/* R_BC (B to C) */}
                <line x1="30" y1="160" x2="210" y2="160" stroke="#f59e0b" strokeWidth="2.5" />
                <rect x="102" y="151" width="36" height="18" fill="#1e293b" stroke="#f59e0b" rx="3" />
                <text x="120" y="164" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">{sRbc}Ω</text>

                {/* R_CA (C to A) */}
                <line x1="210" y1="160" x2="120" y2="25" stroke="#f59e0b" strokeWidth="2.5" />
                <rect x="146" y="78" width="36" height="18" fill="#1e293b" stroke="#f59e0b" rx="3" />
                <text x="164" y="91" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">{sRca}Ω</text>
              </svg>
            </div>

            {/* Star Schematic */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wider">Equivalent Star (Y) Network</span>
              <svg viewBox="0 0 240 200" className="w-52 h-44">
                {/* Center Node N */}
                <circle cx="120" cy="110" r="5" fill="#34d399" />

                {/* Terminals */}
                <circle cx="120" cy="25" r="7" fill="#34d399" />
                <text x="120" y="14" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="bold">A</text>

                <circle cx="30" cy="160" r="7" fill="#34d399" />
                <text x="16" y="165" textAnchor="end" fill="#a7f3d0" fontSize="11" fontWeight="bold">B</text>

                <circle cx="210" cy="160" r="7" fill="#34d399" />
                <text x="224" y="165" fill="#a7f3d0" fontSize="11" fontWeight="bold">C</text>

                {/* R_A Arm */}
                <line x1="120" y1="25" x2="120" y2="110" stroke="#10b981" strokeWidth="2.5" />
                <rect x="102" y="55" width="36" height="18" fill="#1e293b" stroke="#10b981" rx="3" />
                <text x="120" y="68" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">{calcRa.toFixed(2)}Ω</text>

                {/* R_B Arm */}
                <line x1="30" y1="160" x2="120" y2="110" stroke="#10b981" strokeWidth="2.5" />
                <rect x="58" y="125" width="36" height="18" fill="#1e293b" stroke="#10b981" rx="3" />
                <text x="76" y="138" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">{calcRb.toFixed(2)}Ω</text>

                {/* R_C Arm */}
                <line x1="210" y1="160" x2="120" y2="110" stroke="#10b981" strokeWidth="2.5" />
                <rect x="146" y="125" width="36" height="18" fill="#1e293b" stroke="#10b981" rx="3" />
                <text x="164" y="138" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">{calcRc.toFixed(2)}Ω</text>
              </svg>
            </div>
          </div>

          {/* Results & Round-Trip Verification */}
          <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-100 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {t.starOutputsTitle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Star Arm R_A:</span>
                <span className="font-mono font-bold text-emerald-400">{calcRa.toFixed(2)} Ω</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Star Arm R_B:</span>
                <span className="font-mono font-bold text-emerald-400">{calcRb.toFixed(2)} Ω</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Star Arm R_C:</span>
                <span className="font-mono font-bold text-emerald-400">{calcRc.toFixed(2)} Ω</span>
              </div>
            </div>

            {/* Verification Box */}
            <div className="p-3 bg-emerald-950/40 rounded-lg border border-emerald-800/60 text-xs text-emerald-200">
              <h5 className="font-bold mb-1 flex items-center gap-1.5 text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {t.verificationTitle}
              </h5>
              <p className="text-[11px] font-mono text-emerald-200/90 mb-1">
                Recovered Delta: R_AB = {recRab.toFixed(2)}Ω | R_BC = {recRbc.toFixed(2)}Ω | R_CA = {recRca.toFixed(2)}Ω
              </p>
              <p className="text-[11px] font-bold text-emerald-300">{t.verifyOk}</p>
            </div>

            <div className="p-3 bg-amber-950/30 rounded-lg border border-amber-800/40 text-xs text-amber-200 leading-relaxed font-mono">
              {t.deltaToStarFormula}
            </div>
          </div>
        </div>
      )}

      {/* STAR TO DELTA MODE */}
      {dir === 'starToDelta' && (
        <div className="space-y-6">
          {/* Star Inputs */}
          <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-100 print:hidden">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
              {t.starInputsTitle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.raLabel} <span className="font-mono text-emerald-400 font-bold">{Ra} Ω</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="60"
                  value={Ra}
                  onChange={e => setRa(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.rbLabel} <span className="font-mono text-emerald-400 font-bold">{Rb} Ω</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="60"
                  value={Rb}
                  onChange={e => setRb(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.rcLabel} <span className="font-mono text-emerald-400 font-bold">{Rc} Ω</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="60"
                  value={Rc}
                  onChange={e => setRc(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
            </div>
          </div>

          {/* Results & Round-Trip Verification */}
          <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-100 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {t.deltaOutputsTitle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Delta Resistor R_AB:</span>
                <span className="font-mono font-bold text-amber-400">{calcRab.toFixed(2)} Ω</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Delta Resistor R_BC:</span>
                <span className="font-mono font-bold text-amber-400">{calcRbc.toFixed(2)} Ω</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">Delta Resistor R_CA:</span>
                <span className="font-mono font-bold text-amber-400">{calcRca.toFixed(2)} Ω</span>
              </div>
            </div>

            {/* Verification Box */}
            <div className="p-3 bg-emerald-950/40 rounded-lg border border-emerald-800/60 text-xs text-emerald-200">
              <h5 className="font-bold mb-1 flex items-center gap-1.5 text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                {t.verificationTitle}
              </h5>
              <p className="text-[11px] font-mono text-emerald-200/90 mb-1">
                Recovered Star Arms: R_A = {recRa.toFixed(2)}Ω | R_B = {recRb.toFixed(2)}Ω | R_C = {recRc.toFixed(2)}Ω
              </p>
              <p className="text-[11px] font-bold text-emerald-300">{t.verifyOk}</p>
            </div>

            <div className="p-3 bg-emerald-950/30 rounded-lg border border-emerald-800/40 text-xs text-emerald-200 leading-relaxed font-mono">
              {t.starToDeltaFormula}
            </div>
          </div>
        </div>
      )}
    </InteractiveSimulationCard>
  );
};
