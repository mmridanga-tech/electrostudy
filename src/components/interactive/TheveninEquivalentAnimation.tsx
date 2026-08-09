import React, { useState } from 'react';
import { Language } from '../../types';
import { RotateCcw, ArrowRight, Eye, Sliders, Layers } from 'lucide-react';

interface Props {
  currentLanguage: Language;
}

const LABELS = {
  en: {
    title: "Thevenin's Theorem Interactive Circuit Builder",
    subtitle: "Step-by-step reduction of a complex linear DC network into an equivalent voltage source (Vth) and series resistance (Rth).",
    originalNetwork: "Original Network",
    theveninEquivalent: "Thevenin Equivalent",
    workflowSteps: "Reduction Workflow Steps",
    step1: "1. Original Network",
    step2: "2. Remove Load (RL)",
    step3: "3. Calculate Vth (Voc)",
    step4: "4. Calculate Rth (Deactivate Vs)",
    step5: "5. Construct Equivalent",
    step6: "6. Reconnect Load",
    controls: "Network Parameter Controls",
    vsLabel: "Source Voltage (Vs)",
    r1Label: "Series Resistor (R1)",
    r2Label: "Parallel Resistor (R2)",
    r3Label: "Branch Resistor (R3)",
    rlLabel: "Load Resistor (RL)",
    liveMetrics: "Live Thevenin Metrics",
    vthLabel: "Thevenin Voltage (Vth)",
    rthLabel: "Thevenin Resistance (Rth)",
    ilLabel: "Load Current (IL)",
    vlLabel: "Load Voltage (VL)",
    reset: "Reset Defaults",
    stepInfoTitle: "Current Step Explanation",
    step1Info: "Original circuit with voltage source Vs driving resistors R1, R2, R3 and load RL connected across output terminals A and B.",
    step2Info: "Load resistor RL is disconnected from terminals A and B, leaving an open circuit across output terminals.",
    step3Info: "Open-circuit terminal voltage Voc is calculated across terminals A and B. Since no current flows in R3, Voc = Vs × R2 / (R1 + R2).",
    step4Info: "Independent voltage source Vs is deactivated (short-circuited). Looking into terminals A and B, R1 and R2 are in parallel, in series with R3.",
    step5Info: "Thevenin equivalent circuit is constructed containing single voltage source Vth in series with resistance Rth.",
    step6Info: "Load resistor RL is reconnected across terminals A and B of the Thevenin equivalent circuit. IL = Vth / (Rth + RL)."
  },
  hi: {
    title: "थेवेनिन प्रमेय इंटरएक्टिव परिपथ निर्माता",
    subtitle: "जटिल रेखीय डीसी नेटवर्क को समतुल्य वोल्टेज स्रोत (Vth) और श्रेणी प्रतिरोध (Rth) में चरण-दर-चरण रिडक्शन।",
    originalNetwork: "मूल नेटवर्क",
    theveninEquivalent: "थेवेनिन समतुल्य",
    workflowSteps: "रिडक्शन प्रक्रिया के चरण",
    step1: "1. मूल नेटवर्क",
    step2: "2. लोड हटाएं (RL)",
    step3: "3. Vth (Voc) की गणना करें",
    step4: "4. Rth की गणना करें (Vs बंद करें)",
    step5: "5. समतुल्य परिपथ बनाएं",
    step6: "6. लोड पुनः जोड़ें",
    controls: "नेटवर्क पैरामीटर नियंत्रण",
    vsLabel: "स्रोत वोल्टेज (Vs)",
    r1Label: "श्रेणी प्रतिरोधक (R1)",
    r2Label: "समानांतर प्रतिरोधक (R2)",
    r3Label: "शाखा प्रतिरोधक (R3)",
    rlLabel: "लोड प्रतिरोधक (RL)",
    liveMetrics: "लाइव थेवेनिन मान",
    vthLabel: "थेवेनिन वोल्टेज (Vth)",
    rthLabel: "थेवेनिन प्रतिरोध (Rth)",
    ilLabel: "लोड धारा (IL)",
    vlLabel: "लोड वोल्टेज (VL)",
    reset: "रीसेट करें",
    stepInfoTitle: "वर्तमान चरण का स्पष्टीकरण",
    step1Info: "वोल्टेज स्रोत Vs, प्रतिरोधक R1, R2, R3 और आउटपुट टर्मिनल A और B पर जुड़े लोड RL के साथ मूल परिपथ।",
    step2Info: "लोड प्रतिरोधक RL को टर्मिनल A और B से अलग कर दिया जाता है, जिससे खुले टर्मिनल छूट जाते हैं।",
    step3Info: "टर्मिनल A और B पर ओपन-सर्किट वोल्टेज Voc की गणना की जाती है। R3 में कोई धारा न बहने के कारण Voc = Vs × R2 / (R1 + R2)।",
    step4Info: "स्वतंत्र वोल्टेज स्रोत Vs को शॉर्ट-सर्किट करके बंद कर दिया जाता है। A और B से देखने पर R1 और R2 समानांतर में हैं, जो R3 के श्रेणी में हैं।",
    step5Info: "थेवेनिन समतुल्य परिपथ में एकल वोल्टेज स्रोत Vth और श्रेणी प्रतिरोध Rth शामिल है।",
    step6Info: "लोड प्रतिरोधक RL को थेवेनिन समतुल्य परिपथ में पुनः जोड़ा जाता है। IL = Vth / (Rth + RL)।"
  },
  bn: {
    title: "থেভেনিন উপপাদ্য ইন্টারেক্টিভ সার্কিট বিল্ডার",
    subtitle: "ধাপে ধাপে জটিল ডিসি নেটওয়ার্ককে সমতুল্য ভোল্টেজ সোর্স (Vth) এবং সিরিজ রেজিস্টেন্সে (Rth) রূপান্তর।",
    originalNetwork: "মূল নেটওয়ার্ক",
    theveninEquivalent: "থেভেনিন সমতুল্য",
    workflowSteps: "রিডাকশন প্রক্রিয়ার ধাপসমূহ",
    step1: "১. মূল নেটওয়ার্ক",
    step2: "২. লোড বিচ্ছিন্নকরণ (RL)",
    step3: "৩. Vth (Voc) নির্ণয়",
    step4: "৪. Rth নির্ণয় (Vs শর্ট)",
    step5: "৫. সমতুল্য সার্কিট তৈরি",
    step6: "৬. লোড পুনঃসংযোগ",
    controls: "নেটওয়ার্ক প্যারামিটার কন্ট্রোল",
    vsLabel: "সোর্স ভোল্টেজ (Vs)",
    r1Label: "সিরিজ রেজিস্টর (R1)",
    r2Label: "প্যারালাল রেজিস্টর (R2)",
    r3Label: "ব্রাঞ্চ রেজিস্টর (R3)",
    rlLabel: "লোড রেজিস্টর (RL)",
    liveMetrics: "লাইভ থেভেনিন মানসমূহ",
    vthLabel: "থেভেনিন ভোল্টেজ (Vth)",
    rthLabel: "থেভেনিন রেজিস্ট্যান্স (Rth)",
    ilLabel: "লোড কারেন্ট (IL)",
    vlLabel: "লোড ভোল্টেজ (VL)",
    reset: "রিসেট করুন",
    stepInfoTitle: "বর্তমান ধাপের ব্যাখ্যা",
    step1Info: "ভোল্টেজ সোর্স Vs, রেজিস্টর R1, R2, R3 এবং আউটপুট টার্মিনাল A ও B তে যুক্ত লোড RL সহ মূল সার্কিট।",
    step2Info: "লোড রেজিস্টর RL কে টার্মিনাল A ও B থেকে বিচ্ছিন্ন করে ওপেন সার্কিট করা হয়েছে।",
    step3Info: "টার্মিনাল A ও B এর ওপেন সার্কিট ভোল্টেজ Voc নির্ণয় করা হয়েছে। R3 তে কোনো কারেন্ট না থাকায়, Voc = Vs × R2 / (R1 + R2)।",
    step4Info: "সোর্স Vs কে শর্ট সার্কিট করা হয়েছে। A ও B থেকে দেখলে R1 ও R2 প্যারালালে রয়েছে এবং R3 এর সাথে সিরিজে যুক্ত।",
    step5Info: "একটি ভোল্টেজ সোর্স Vth এবং একটি সিরিজ রেজিস্ট্যান্স Rth দিয়ে থেভেনিন সমতুল্য সার্কিট গঠন করা হয়েছে।",
    step6Info: "থেভেনিন সমতুল্য সার্কিটে লোড RL পুনঃসংযোগ করা হয়েছে। IL = Vth / (Rth + RL)।"
  }
};

export const TheveninEquivalentAnimation: React.FC<Props> = ({ currentLanguage }) => {
  const l = LABELS[currentLanguage] || LABELS.en;

  // Circuit Parameters
  const [vs, setVs] = useState<number>(36);
  const [r1, setR1] = useState<number>(12);
  const [r2, setR2] = useState<number>(24);
  const [r3, setR3] = useState<number>(8);
  const [rl, setRl] = useState<number>(20);

  // Workflow step (1 to 6)
  const [step, setStep] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'original' | 'equivalent'>('original');

  // Exact Calculation Engine
  const vth = (vs * r2) / (r1 + r2);
  const rth = r3 + (r1 * r2) / (r1 + r2);
  const il = vth / (rth + rl);
  const vl = il * rl;

  const handleReset = () => {
    setVs(36);
    setR1(12);
    setR2(24);
    setR3(8);
    setRl(20);
    setStep(1);
    setViewMode('original');
  };

  const getStepDescription = () => {
    switch (step) {
      case 1: return l.step1Info;
      case 2: return l.step2Info;
      case 3: return l.step3Info;
      case 4: return l.step4Info;
      case 5: return l.step5Info;
      case 6: return l.step6Info;
      default: return '';
    }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            {l.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">{l.subtitle}</p>
        </div>
        <div className="flex items-center gap-2 print:hidden">
          <button
            onClick={() => setViewMode(viewMode === 'original' ? 'equivalent' : 'original')}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
            aria-label="Toggle Circuit View"
          >
            <Eye className="w-4 h-4" />
            {viewMode === 'original' ? l.theveninEquivalent : l.originalNetwork}
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-rose-300 border border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
            aria-label="Reset parameters to defaults"
          >
            <RotateCcw className="w-4 h-4" />
            {l.reset}
          </button>
        </div>
      </div>

      {/* Step Selector Buttons (Print Hidden) */}
      <div className="space-y-2 print:hidden">
        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">{l.workflowSteps}</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {[
            { id: 1, name: l.step1 },
            { id: 2, name: l.step2 },
            { id: 3, name: l.step3 },
            { id: 4, name: l.step4 },
            { id: 5, name: l.step5 },
            { id: 6, name: l.step6 },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setStep(s.id);
                if (s.id >= 5) setViewMode('equivalent');
                else if (s.id < 5) setViewMode('original');
              }}
              className={`px-2.5 py-2 rounded-lg text-xs font-medium text-center transition-all ${
                step === s.id
                  ? 'bg-cyan-600 text-white font-bold shadow-md shadow-cyan-900/40 ring-1 ring-cyan-400'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
              aria-label={`Step ${s.id}: ${s.name}`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Step Info Box */}
      <div className="p-3 bg-cyan-950/40 border border-cyan-800/50 rounded-lg text-xs text-cyan-200">
        <span className="font-bold text-cyan-300 block mb-1">{l.stepInfoTitle}:</span>
        <p>{getStepDescription()}</p>
      </div>

      {/* SVG Circuit Canvas Area */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center min-h-[220px]">
        {viewMode === 'original' || step < 5 ? (
          /* Original Circuit View */
          <svg viewBox="0 0 500 220" className="w-full max-w-lg h-auto">
            {/* Main Outer Wire loop */}
            <rect x="50" y="40" width="400" height="140" rx="8" fill="none" stroke="#475569" strokeWidth="2.5" />

            {/* Source Vs (Left Branch) */}
            <g transform="translate(50, 110)">
              {step === 4 ? (
                /* Vs Shorted in Step 4 */
                <line x1="0" y1="-30" x2="0" y2="30" stroke="#ef4444" strokeWidth="4" strokeDasharray="3 3" />
              ) : (
                <g>
                  <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
                  <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Vs</text>
                  <text x="0" y="10" textAnchor="middle" fill="#93c5fd" fontSize="10">{vs}V</text>
                </g>
              )}
            </g>

            {/* Resistor R1 (Top Series) */}
            <g transform="translate(150, 40)">
              <rect x="-25" y="-12" width="50" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="4" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">R1 = {r1}Ω</text>
            </g>

            {/* Resistor R2 (Middle Parallel Branch) */}
            <line x1="250" y1="40" x2="250" y2="180" stroke="#475569" strokeWidth="2" />
            <g transform="translate(250, 110)">
              <rect x="-12" y="-25" width="24" height="50" fill="#1e293b" stroke="#a855f7" strokeWidth="2" rx="4" />
              <text x="18" y="4" fill="#d8b4fe" fontSize="11" fontWeight="bold">R2 = {r2}Ω</text>
            </g>

            {/* Resistor R3 (Top Branch Right) */}
            <g transform="translate(340, 40)">
              <rect x="-25" y="-12" width="50" height="24" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="4" />
              <text x="0" y="3" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">R3 = {r3}Ω</text>
            </g>

            {/* Output Terminals A & B */}
            <circle cx="450" cy="40" r="4" fill="#f43f5e" />
            <text x="450" y="28" textAnchor="middle" fill="#f43f5e" fontSize="11" fontWeight="bold">A</text>
            <circle cx="450" cy="180" r="4" fill="#f43f5e" />
            <text x="450" y="196" textAnchor="middle" fill="#f43f5e" fontSize="11" fontWeight="bold">B</text>

            {/* Load RL (Right Branch) */}
            {step === 2 || step === 3 || step === 4 ? (
              /* Load Disconnected */
              <g transform="translate(450, 110)">
                <text x="12" y="4" fill="#94a3b8" fontSize="10" italic="true">[RL Removed (Open)]</text>
                {step === 3 && (
                  <text x="-40" y="4" fill="#38bdf8" fontSize="11" fontWeight="bold">Voc = {vth.toFixed(2)}V</text>
                )}
              </g>
            ) : (
              /* Load Connected */
              <g transform="translate(450, 110)">
                <rect x="-12" y="-25" width="24" height="50" fill="#1e293b" stroke="#ec4899" strokeWidth="2.5" rx="4" />
                <text x="18" y="4" fill="#f472b6" fontSize="11" fontWeight="bold">RL = {rl}Ω</text>
                {(step === 1 || step === 6) && (
                  <text x="-50" y="4" fill="#ec4899" fontSize="10" fontWeight="bold">IL = {il.toFixed(2)}A</text>
                )}
              </g>
            )}
          </svg>
        ) : (
          /* Thevenin Equivalent View */
          <svg viewBox="0 0 500 220" className="w-full max-w-lg h-auto">
            <rect x="60" y="40" width="380" height="140" rx="8" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="6 4" />

            {/* Vth Source */}
            <g transform="translate(60, 110)">
              <circle cx="0" cy="0" r="20" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Vth</text>
              <text x="0" y="10" textAnchor="middle" fill="#93c5fd" fontSize="10">{vth.toFixed(2)}V</text>
            </g>

            {/* Rth Resistor */}
            <g transform="translate(250, 40)">
              <rect x="-35" y="-14" width="70" height="28" fill="#1e293b" stroke="#34d399" strokeWidth="2.5" rx="4" />
              <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">Rth = {rth.toFixed(2)}Ω</text>
            </g>

            {/* Terminals A & B */}
            <circle cx="440" cy="40" r="4" fill="#f43f5e" />
            <text x="440" y="28" textAnchor="middle" fill="#f43f5e" fontSize="11" fontWeight="bold">A</text>
            <circle cx="440" cy="180" r="4" fill="#f43f5e" />
            <text x="440" y="196" textAnchor="middle" fill="#f43f5e" fontSize="11" fontWeight="bold">B</text>

            {/* Reconnected Load RL */}
            {step === 5 ? (
              <g transform="translate(440, 110)">
                <text x="12" y="4" fill="#94a3b8" fontSize="10" italic="true">[Ready to reconnect RL]</text>
              </g>
            ) : (
              <g transform="translate(440, 110)">
                <rect x="-12" y="-25" width="24" height="50" fill="#1e293b" stroke="#ec4899" strokeWidth="2.5" rx="4" />
                <text x="18" y="4" fill="#f472b6" fontSize="11" fontWeight="bold">RL = {rl}Ω</text>
                <text x="-50" y="4" fill="#ec4899" fontSize="10" fontWeight="bold">IL = {il.toFixed(2)}A</text>
              </g>
            )}
          </svg>
        )}

        <div className="mt-2 text-xs font-mono text-cyan-300 font-semibold">
          {viewMode === 'original' ? l.originalNetwork : l.theveninEquivalent} View
        </div>
      </div>

      {/* Live Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/70 p-3 rounded-lg border border-slate-800">
        <div className="p-2.5 bg-slate-900 rounded border border-cyan-900/50">
          <span className="text-[11px] text-slate-400 block">{l.vthLabel}</span>
          <span className="text-lg font-mono font-bold text-cyan-400">{vth.toFixed(2)} V</span>
        </div>
        <div className="p-2.5 bg-slate-900 rounded border border-emerald-900/50">
          <span className="text-[11px] text-slate-400 block">{l.rthLabel}</span>
          <span className="text-lg font-mono font-bold text-emerald-400">{rth.toFixed(2)} Ω</span>
        </div>
        <div className="p-2.5 bg-slate-900 rounded border border-pink-900/50">
          <span className="text-[11px] text-slate-400 block">{l.ilLabel}</span>
          <span className="text-lg font-mono font-bold text-pink-400">{il.toFixed(2)} A</span>
        </div>
        <div className="p-2.5 bg-slate-900 rounded border border-amber-900/50">
          <span className="text-[11px] text-slate-400 block">{l.vlLabel}</span>
          <span className="text-lg font-mono font-bold text-amber-400">{vl.toFixed(2)} V</span>
        </div>
      </div>

      {/* Parameter Sliders Controls (Print Hidden) */}
      <div className="space-y-4 pt-2 border-t border-slate-800 print:hidden">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
          <Sliders className="w-4 h-4 text-cyan-400" />
          {l.controls}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {/* Vs Slider */}
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
            <div className="flex justify-between font-mono">
              <span className="text-slate-300">{l.vsLabel}:</span>
              <span className="text-cyan-400 font-bold">{vs} V</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="2"
              value={vs}
              onChange={(e) => setVs(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
              aria-label={l.vsLabel}
            />
          </div>

          {/* R1 Slider */}
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
            <div className="flex justify-between font-mono">
              <span className="text-slate-300">{l.r1Label}:</span>
              <span className="text-emerald-400 font-bold">{r1} Ω</span>
            </div>
            <input
              type="range"
              min="2"
              max="50"
              step="1"
              value={r1}
              onChange={(e) => setR1(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
              aria-label={l.r1Label}
            />
          </div>

          {/* R2 Slider */}
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
            <div className="flex justify-between font-mono">
              <span className="text-slate-300">{l.r2Label}:</span>
              <span className="text-purple-400 font-bold">{r2} Ω</span>
            </div>
            <input
              type="range"
              min="2"
              max="100"
              step="2"
              value={r2}
              onChange={(e) => setR2(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
              aria-label={l.r2Label}
            />
          </div>

          {/* R3 Slider */}
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5">
            <div className="flex justify-between font-mono">
              <span className="text-slate-300">{l.r3Label}:</span>
              <span className="text-amber-400 font-bold">{r3} Ω</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={r3}
              onChange={(e) => setR3(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
              aria-label={l.r3Label}
            />
          </div>

          {/* RL Slider */}
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5 sm:col-span-2 lg:col-span-1">
            <div className="flex justify-between font-mono">
              <span className="text-slate-300">{l.rlLabel}:</span>
              <span className="text-pink-400 font-bold">{rl} Ω</span>
            </div>
            <input
              type="range"
              min="2"
              max="100"
              step="2"
              value={rl}
              onChange={(e) => setRl(Number(e.target.value))}
              className="w-full accent-pink-500 cursor-pointer"
              aria-label={l.rlLabel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
