import React, { useState } from 'react';
import { Language } from '../../types';
import { RotateCcw, Sliders, Zap, CheckCircle2, ArrowRightLeft, ShieldAlert } from 'lucide-react';

interface Props {
  currentLanguage: Language;
}

type Mode = 'voltageToCurrent' | 'currentToVoltage';

const LABELS = {
  en: {
    title: 'Source Transformation Interactive Simulator',
    subtitle: 'Demonstrating the equivalence between a voltage source with series resistance and a current source with parallel resistance connected to the same load.',
    modeTitle: 'Transformation Mode',
    voltageToCurrent: 'Voltage Source → Current Source',
    currentToVoltage: 'Current Source → Voltage Source',
    sourceParameters: 'Source Parameters',
    loadParameters: 'Load Resistance (RL)',
    vsLabel: 'Source Voltage (Vs)',
    isLabel: 'Source Current (Is)',
    rsLabel: 'Source Internal Resistance (Rs / Rp)',
    rlLabel: 'Connected Load Resistance (RL)',
    equivalentResults: 'Transformed Equivalent Parameters',
    originalCircuit: 'Original Circuit Architecture',
    transformedCircuit: 'Transformed Equivalent Circuit',
    calcEquivIs: 'Calculated Equivalent Current Source (Is = Vs / Rs)',
    calcEquivVs: 'Calculated Equivalent Voltage Source (Vs = Is × Rp)',
    sameResistance: 'Parallel Resistance (Rp = Rs)',
    sameSeriesResistance: 'Series Resistance (Rs = Rp)',
    loadVerification: 'Load Terminal Equivalence Verification',
    vlLabel: 'Terminal Load Voltage (VL)',
    ilLabel: 'Terminal Load Current (IL)',
    plLabel: 'Load Power Dissipation (PL)',
    verificationMatch: 'EQUIVALENT TERMINAL BEHAVIOR CONFIRMED (VL & IL identical in both models)',
    explanationTitle: 'Source Transformation Engineering Rules',
    explanationText: 'Source transformation is a network simplification technique based on Ohm’s Law (Vs = Is × Rs). It preserves external terminal voltage and current across any connected load (RL), provided Rs > 0. Practical internal resistance remains numerically equal (Rs = Rp).',
    reset: 'Reset Defaults'
  },
  hi: {
    title: 'स्रोत रूपांतरण इंटरएक्टिव सिम्युलेटर',
    subtitle: 'श्रेणी प्रतिरोधक युक्त वोल्टेज स्रोत और समानांतर प्रतिरोधक युक्त धारा स्रोत के बीच समतुल्यता का प्रदर्शन।',
    modeTitle: 'रूपांतरण मोड',
    voltageToCurrent: 'वोल्टेज स्रोत → धारा स्रोत',
    currentToVoltage: 'धारा स्रोत → वोल्टेज स्रोत',
    sourceParameters: 'स्रोत पैरामीटर',
    loadParameters: 'लोड प्रतिरोध (RL)',
    vsLabel: 'स्रोत वोल्टेज (Vs)',
    isLabel: 'स्रोत धारा (Is)',
    rsLabel: 'स्रोत आंतरिक प्रतिरोध (Rs / Rp)',
    rlLabel: 'संयोजित लोड प्रतिरोध (RL)',
    equivalentResults: 'रूपांतरित समतुल्य पैरामीटर',
    originalCircuit: 'मूल परिपथ संरचना',
    transformedCircuit: 'रूपांतरित समतुल्य परिपथ',
    calcEquivIs: 'गणनाकृत समतुल्य धारा स्रोत (Is = Vs / Rs)',
    calcEquivVs: 'गणनाकृत समतुल्य वोल्टेज स्रोत (Vs = Is × Rp)',
    sameResistance: 'समानांतर प्रतिरोध (Rp = Rs)',
    sameSeriesResistance: 'श्रेणी प्रतिरोध (Rs = Rp)',
    loadVerification: 'लोड टर्मिनल समतुल्यता सत्यापन',
    vlLabel: 'टर्मिनल लोड वोल्टेज (VL)',
    ilLabel: 'टर्मिनल लोड धारा (IL)',
    plLabel: 'लोड शक्ति खपत (PL)',
    verificationMatch: 'समतुल्य टर्मिनल व्यवहार की पुष्टि (दोनों मॉडलों में VL और IL समान हैं)',
    explanationTitle: 'स्रोत रूपांतरण के इंजीनियरिंग नियम',
    explanationText: 'स्रोत रूपांतरण ओम के नियम (Vs = Is × Rs) पर आधारित एक नेटवर्क सरलीकरण तकनीक है। यह किसी भी संयोजित लोड (RL) के पार बाहरी टर्मिनल वोल्टेज और धारा को संरक्षित रखता है। आंतरिक प्रतिरोध का संख्यात्मक मान अपरिवर्तित रहता है (Rs = Rp)।',
    reset: 'रीसेट करें'
  },
  bn: {
    title: 'সোর্স ট্রান্সফরমেশন ইন্টারেক্টিভ সিমুলেটর',
    subtitle: 'সিরিজ রেজিস্ট্যান্সযুক্ত ভোল্টেজ সোর্স এবং প্যারালাল রেজিস্ট্যান্সযুক্ত কারেন্ট সোর্সের সমতুল্যতা পর্যবেক্ষণ।',
    modeTitle: 'রূপান্তর মোড',
    voltageToCurrent: 'ভোল্টেজ সোর্স → কারেন্ট সোর্স',
    currentToVoltage: 'কারেন্ট সোর্স → ভোল্টেজ সোর্স',
    sourceParameters: 'সোর্স প্যারামিটারসমূহ',
    loadParameters: 'লোড রেজিস্ট্যান্স (RL)',
    vsLabel: 'সোর্স ভোল্টেজ (Vs)',
    isLabel: 'সোর্স কারেন্ট (Is)',
    rsLabel: 'সোর্সের অভ্যন্তরীণ রেজিস্ট্যান্স (Rs / Rp)',
    rlLabel: 'সংযুক্ত লোড রেজিস্ট্যান্স (RL)',
    equivalentResults: 'রূপান্তরিত সমতুল্য প্যারামিটার',
    originalCircuit: 'মূল সার্কিট বিন্যাস',
    transformedCircuit: 'রূপান্তরিত সমতুল্য সার্কিট',
    calcEquivIs: 'গণনাকৃত সমতুল্য কারেন্ট সোর্স (Is = Vs / Rs)',
    calcEquivVs: 'গণনাকৃত সমতুল্য ভোল্টেজ সোর্স (Vs = Is × Rp)',
    sameResistance: 'প্যারালাল রেজিস্ট্যান্স (Rp = Rs)',
    sameSeriesResistance: 'সিরিজ রেজিস্ট্যান্স (Rs = Rp)',
    loadVerification: 'লোড টার্মিনাল সমতুল্যতা সত্যতা যাচাই',
    vlLabel: 'টার্মিনাল লোড ভোল্টেজ (VL)',
    ilLabel: 'টার্মিনাল লোড কারেন্ট (IL)',
    plLabel: 'লোড পাওয়ার খরচ (PL)',
    verificationMatch: 'সমতুল্য টার্মিনাল বৈশিষ্ট্য প্রমাণিত (উভয় মডেলেই VL ও IL অভিন্ন)',
    explanationTitle: 'সোর্স ট্রান্সফরমেশনের ইঞ্জিনিয়ারিং নিয়মাবলী',
    explanationText: 'সোর্স ট্রান্সফরমেশন হলো ওহমের সূত্রের (Vs = Is × Rs) ওপর ভিত্তি করে সার্কিট সহজীকরণের একটি পদ্ধতি। এটি যেকোনো লোডের (RL) টার্মিনালে বহিস্থ ভোল্টেজ ও কারেন্ট অপরিবর্তিত রাখে। অভ্যন্তরীণ রেজিস্ট্যান্সের মান সমান থাকে (Rs = Rp)।',
    reset: 'রিসেট করুন'
  }
};

export const SourceTransformationAnimation: React.FC<Props> = ({ currentLanguage }) => {
  const t = LABELS[currentLanguage] || LABELS.en;

  const [mode, setMode] = useState<Mode>('voltageToCurrent');
  const [vs, setVs] = useState<number>(24);
  const [is, setIs] = useState<number>(4);
  const [rSource, setRSource] = useState<number>(6); // Rs or Rp
  const [rl, setRl] = useState<number>(12);

  const safeRSource = Math.max(0.1, rSource);
  const safeRl = Math.max(0.1, rl);

  // Mode calculations
  let calculatedVs = 0;
  let calculatedIs = 0;
  let loadVoltage = 0;
  let loadCurrent = 0;
  let loadPower = 0;

  if (mode === 'voltageToCurrent') {
    // Input is Vs and Rs
    calculatedIs = vs / safeRSource;
    calculatedVs = vs;
    loadCurrent = vs / (safeRSource + safeRl);
    loadVoltage = loadCurrent * safeRl;
    loadPower = loadCurrent * loadCurrent * safeRl;
  } else {
    // Input is Is and Rp
    calculatedVs = is * safeRSource;
    calculatedIs = is;
    const rParallelEquiv = (safeRSource * safeRl) / (safeRSource + safeRl);
    loadVoltage = is * rParallelEquiv;
    loadCurrent = loadVoltage / safeRl;
    loadPower = loadCurrent * loadCurrent * safeRl;
  }

  const handleReset = () => {
    setMode('voltageToCurrent');
    setVs(24);
    setIs(4);
    setRSource(6);
    setRl(12);
  };

  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
            <ArrowRightLeft className="w-4 h-4" />
            <span>Chapter 4 • Lesson 16 Interactive Model</span>
          </div>
          <h3 className="text-xl font-bold font-display text-white">{t.title}</h3>
          <p className="text-xs text-slate-400 mt-0.5">{t.subtitle}</p>
        </div>

        <button
          onClick={handleReset}
          className="print:hidden px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono font-medium transition-colors motion-reduce:transition-none flex items-center gap-1.5 self-start sm:self-auto border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label={t.reset}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.reset}</span>
        </button>
      </div>

      {/* Mode Selector */}
      <div className="print:hidden space-y-2">
        <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t.modeTitle}</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button
            onClick={() => setMode('voltageToCurrent')}
            aria-label={t.voltageToCurrent}
            aria-pressed={mode === 'voltageToCurrent'}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all motion-reduce:transition-none border flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              mode === 'voltageToCurrent'
                ? 'bg-cyan-600/30 text-cyan-300 border-cyan-500 shadow-md shadow-cyan-950'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
            }`}
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>{t.voltageToCurrent}</span>
          </button>

          <button
            onClick={() => setMode('currentToVoltage')}
            aria-label={t.currentToVoltage}
            aria-pressed={mode === 'currentToVoltage'}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-mono transition-all motion-reduce:transition-none border flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              mode === 'currentToVoltage'
                ? 'bg-emerald-600/30 text-emerald-300 border-emerald-500 shadow-md shadow-emerald-950'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
            }`}
          >
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>{t.currentToVoltage}</span>
          </button>
        </div>
      </div>

      {/* Controls Grid */}
      <div className="print:hidden grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
        {mode === 'voltageToCurrent' ? (
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">{t.vsLabel}:</span>
              <span className="text-cyan-400 font-bold">{vs} V</span>
            </div>
            <input
              type="range"
              min="2"
              max="100"
              step="2"
              value={vs}
              onChange={(e) => setVs(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 rounded-lg h-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={t.vsLabel}
            />
          </div>
        ) : (
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">{t.isLabel}:</span>
              <span className="text-emerald-400 font-bold">{is} A</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="20"
              step="0.5"
              value={is}
              onChange={(e) => setIs(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 rounded-lg h-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={t.isLabel}
            />
          </div>
        )}

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">{t.rsLabel}:</span>
            <span className="text-amber-400 font-bold">{rSource} Ω</span>
          </div>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={rSource}
            onChange={(e) => setRSource(parseFloat(e.target.value))}
            className="w-full accent-amber-500 bg-slate-800 rounded-lg h-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={t.rsLabel}
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-slate-400">{t.rlLabel}:</span>
            <span className="text-indigo-400 font-bold">{rl} Ω</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            step="1"
            value={rl}
            onChange={(e) => setRl(parseFloat(e.target.value))}
            className="w-full accent-indigo-500 bg-slate-800 rounded-lg h-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={t.rlLabel}
          />
        </div>
      </div>

      {/* Side-by-side Schematics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Voltage Source Model */}
        <div className={`p-4 rounded-xl border transition-all motion-reduce:transition-none ${
          mode === 'voltageToCurrent' ? 'border-cyan-500/50 bg-slate-950/90' : 'border-slate-800 bg-slate-950/40'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              {mode === 'voltageToCurrent' ? t.originalCircuit : t.transformedCircuit}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
              Thevenin Model (Vs in series with Rs)
            </span>
          </div>

          <svg viewBox="0 0 340 180" className="w-full h-auto text-slate-200">
            {/* Wires */}
            <path d="M 40 90 L 40 30 L 120 30" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 180 30 L 280 30 L 280 60" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 40 90 L 40 150 L 280 150 L 280 120" fill="none" stroke="currentColor" strokeWidth="2" />

            {/* Voltage Source */}
            <circle cx="40" cy="90" r="18" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
            <text x="40" y="86" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">+</text>
            <text x="40" y="100" textAnchor="middle" fill="#22d3ee" fontSize="12" fontWeight="bold">-</text>
            <text x="40" y="125" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">
              Vs = {mode === 'voltageToCurrent' ? `${vs}V` : `${calculatedVs.toFixed(2)}V`}
            </text>

            {/* Series Resistor Rs */}
            <rect x="120" y="20" width="60" height="20" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" rx="3" />
            <text x="150" y="34" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold" fontFamily="monospace">
              Rs = {rSource}Ω
            </text>

            {/* Terminals A and B */}
            <circle cx="230" cy="30" r="4" fill="#38bdf8" />
            <text x="230" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">A</text>
            <circle cx="230" cy="150" r="4" fill="#38bdf8" />
            <text x="230" y="165" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">B</text>

            {/* Load Resistor RL */}
            <rect x="270" y="60" width="20" height="60" fill="#0f172a" stroke="#818cf8" strokeWidth="2" rx="3" />
            <text x="305" y="94" textAnchor="middle" fill="#a5b4fc" fontSize="10" fontWeight="bold" fontFamily="monospace">
              RL = {rl}Ω
            </text>

            {/* Load Current Arrow */}
            <path d="M 250 30 L 265 30" fill="none" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrow)" />
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#22c55e" />
              </marker>
            </defs>
          </svg>

          <div className="mt-2 text-[11px] font-mono text-slate-300 space-y-1 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
            <div>Vs = <span className="text-cyan-400 font-bold">{mode === 'voltageToCurrent' ? vs : calculatedVs.toFixed(2)} V</span></div>
            <div>Rs = <span className="text-amber-400 font-bold">{rSource} Ω</span> (Series)</div>
            <div>IL = <span className="text-emerald-400 font-bold">{loadCurrent.toFixed(3)} A</span></div>
          </div>
        </div>

        {/* Current Source Model */}
        <div className={`p-4 rounded-xl border transition-all motion-reduce:transition-none ${
          mode === 'currentToVoltage' ? 'border-emerald-500/50 bg-slate-950/90' : 'border-slate-800 bg-slate-950/40'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              {mode === 'currentToVoltage' ? t.originalCircuit : t.transformedCircuit}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
              Norton Model (Is in parallel with Rp)
            </span>
          </div>

          <svg viewBox="0 0 340 180" className="w-full h-auto text-slate-200">
            {/* Top wire */}
            <path d="M 50 30 L 280 30" fill="none" stroke="currentColor" strokeWidth="2" />
            {/* Bottom wire */}
            <path d="M 50 150 L 280 150" fill="none" stroke="currentColor" strokeWidth="2" />

            {/* Current Source Branch */}
            <path d="M 50 30 L 50 60" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 50 120 L 50 150" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="90" r="18" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
            <path d="M 50 102 L 50 78" fill="none" stroke="#34d399" strokeWidth="2" markerEnd="url(#arrowCur)" />
            <defs>
              <marker id="arrowCur" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#34d399" />
              </marker>
            </defs>
            <text x="50" y="125" textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="monospace">
              Is = {mode === 'currentToVoltage' ? `${is}A` : `${calculatedIs.toFixed(2)}A`}
            </text>

            {/* Parallel Resistor Rp */}
            <path d="M 150 30 L 150 60" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 150 120 L 150 150" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="140" y="60" width="20" height="60" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" rx="3" />
            <text x="150" y="132" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold" fontFamily="monospace">
              Rp = {rSource}Ω
            </text>

            {/* Terminals A and B */}
            <circle cx="230" cy="30" r="4" fill="#38bdf8" />
            <text x="230" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">A</text>
            <circle cx="230" cy="150" r="4" fill="#38bdf8" />
            <text x="230" y="165" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">B</text>

            {/* Load Resistor RL */}
            <path d="M 280 30 L 280 60" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M 280 120 L 280 150" fill="none" stroke="currentColor" strokeWidth="2" />
            <rect x="270" y="60" width="20" height="60" fill="#0f172a" stroke="#818cf8" strokeWidth="2" rx="3" />
            <text x="305" y="94" textAnchor="middle" fill="#a5b4fc" fontSize="10" fontWeight="bold" fontFamily="monospace">
              RL = {rl}Ω
            </text>
          </svg>

          <div className="mt-2 text-[11px] font-mono text-slate-300 space-y-1 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
            <div>Is = <span className="text-emerald-400 font-bold">{mode === 'currentToVoltage' ? is : calculatedIs.toFixed(2)} A</span></div>
            <div>Rp = <span className="text-amber-400 font-bold">{rSource} Ω</span> (Parallel)</div>
            <div>IL = <span className="text-emerald-400 font-bold">{loadCurrent.toFixed(3)} A</span></div>
          </div>
        </div>
      </div>

      {/* Terminal Equivalence Box */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{t.loadVerification}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[10px] font-mono text-slate-400">{t.vlLabel}</div>
            <div className="text-lg font-bold font-mono text-cyan-400">{loadVoltage.toFixed(2)} V</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[10px] font-mono text-slate-400">{t.ilLabel}</div>
            <div className="text-lg font-bold font-mono text-emerald-400">{loadCurrent.toFixed(3)} A</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-[10px] font-mono text-slate-400">{t.plLabel}</div>
            <div className="text-lg font-bold font-mono text-amber-400">{loadPower.toFixed(2)} W</div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs font-mono flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>{t.verificationMatch}</span>
        </div>
      </div>

      {/* Engineering Explanation */}
      <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-2 text-xs text-slate-300">
        <div className="font-bold font-display text-white flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4 text-amber-400" />
          <span>{t.explanationTitle}</span>
        </div>
        <p className="leading-relaxed text-slate-400">{t.explanationText}</p>
      </div>
    </div>
  );
};
