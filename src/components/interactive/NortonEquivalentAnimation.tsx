import React, { useState } from 'react';
import { Language } from '../../types';
import { RotateCcw, ArrowRight, Eye, Sliders, Layers, ArrowLeftRight } from 'lucide-react';

interface Props {
  currentLanguage: Language;
}

const LABELS = {
  en: {
    title: "Norton's Theorem Interactive Circuit Builder",
    subtitle: "Step-by-step reduction of a complex linear DC network into an equivalent current source (IN) and parallel resistance (RN).",
    originalNetwork: "Original Network",
    nortonEquivalent: "Norton Equivalent",
    comparisonView: "Thevenin ↔ Norton Equivalence",
    workflowSteps: "Reduction Workflow Steps",
    step1: "1. Original Network",
    step2: "2. Remove Load (RL)",
    step3: "3. Short Terminals A-B",
    step4: "4. Calculate IN (Isc)",
    step5: "5. Calculate RN (Deactivate Vs)",
    step6: "6. Construct Equivalent",
    step7: "7. Reconnect Load",
    controls: "Network Parameter Controls",
    vsLabel: "Source Voltage (Vs)",
    r1Label: "Series Resistor (R1)",
    r2Label: "Parallel Resistor (R2)",
    r3Label: "Branch Resistor (R3)",
    rlLabel: "Load Resistor (RL)",
    liveMetrics: "Live Norton Metrics",
    inLabel: "Norton Current (IN)",
    rnLabel: "Norton Resistance (RN)",
    ilLabel: "Load Current (IL)",
    vlLabel: "Load Voltage (VL)",
    vthLabel: "Thevenin Dual (Vth)",
    reset: "Reset Defaults",
    stepInfoTitle: "Current Step Explanation",
    step1Info: "Original circuit with voltage source Vs, resistors R1, R2, R3 and load RL connected across output terminals A and B.",
    step2Info: "Load resistor RL is disconnected from terminals A and B, leaving open output terminals.",
    step3Info: "Output terminals A and B are directly shorted with a zero-resistance wire to prepare for short-circuit current measurement.",
    step4Info: "Short-circuit current IN (Isc) flowing through shorted terminals A-B is calculated: IN = Vs × R2 / (R1·R2 + R1·R3 + R2·R3).",
    step5Info: "Voltage source Vs is deactivated (shorted). Looking into terminals A and B, RN = R3 + (R1·R2)/(R1+R2). (Note: RN = Rth).",
    step6Info: "Norton equivalent circuit is constructed containing single independent current source IN connected in parallel with resistance RN.",
    step7Info: "Load resistor RL is reconnected in parallel across terminals A and B. IL = IN × RN / (RN + RL) via Current Divider Rule."
  },
  hi: {
    title: "नॉर्टन प्रमेय इंटरएक्टिव परिपथ निर्माता",
    subtitle: "जटिल रेखीय डीसी नेटवर्क को समतुल्य धारा स्रोत (IN) और समानांतर प्रतिरोध (RN) में चरण-दर-चरण रिडक्शन।",
    originalNetwork: "मूल नेटवर्क",
    nortonEquivalent: "नॉर्टन समतुल्य",
    comparisonView: "थेवेनिन ↔ नॉर्टन समतुल्यता",
    workflowSteps: "रिडक्शन प्रक्रिया के चरण",
    step1: "1. मूल नेटवर्क",
    step2: "2. लोड हटाएं (RL)",
    step3: "3. टर्मिनल A-B शॉर्ट करें",
    step4: "4. IN (Isc) की गणना करें",
    step5: "5. RN की गणना करें (Vs बंद करें)",
    step6: "6. समतुल्य परिपथ बनाएं",
    step7: "7. लोड पुनः जोड़ें",
    controls: "नेटवर्क पैरामीटर नियंत्रण",
    vsLabel: "स्रोत वोल्टेज (Vs)",
    r1Label: "श्रेणी प्रतिरोधक (R1)",
    r2Label: "समानांतर प्रतिरोधक (R2)",
    r3Label: "शाखा प्रतिरोधक (R3)",
    rlLabel: "लोड प्रतिरोधक (RL)",
    liveMetrics: "लाइव नॉर्टन मान",
    inLabel: "नॉर्टन धारा (IN)",
    rnLabel: "नॉर्टन प्रतिरोध (RN)",
    ilLabel: "लोड धारा (IL)",
    vlLabel: "लोड वोल्टेज (VL)",
    vthLabel: "थेवेनिन द्वैत (Vth)",
    reset: "रीसेट करें",
    stepInfoTitle: "वर्तमान चरण का स्पष्टीकरण",
    step1Info: "वोल्टेज स्रोत Vs, प्रतिरोधक R1, R2, R3 और आउटपुट टर्मिनल A और B पर जुड़े लोड RL के साथ मूल परिपथ।",
    step2Info: "लोड प्रतिरोधक RL को टर्मिनल A और B से अलग कर दिया जाता है।",
    step3Info: "शॉर्ट-सर्किट धारा मापने के लिए आउटपुट टर्मिनल A और B को शून्य-प्रतिरोध तार से सीधे शॉर्ट किया जाता है।",
    step4Info: "शॉर्ट-सर्किट धारा IN (Isc) की गणना की जाती है: IN = Vs × R2 / (R1·R2 + R1·R3 + R2·R3)।",
    step5Info: "वोल्टेज स्रोत Vs को बंद (शॉर्ट) किया जाता है। टर्मिनल A और B से देखने पर, RN = R3 + (R1·R2)/(R1+R2)। (ध्यान दें: RN = Rth)।",
    step6Info: "नॉर्टन समतुल्य परिपथ में स्वतंत्र धारा स्रोत IN शामिल है जो प्रतिरोध RN के समानांतर जुड़ा है।",
    step7Info: "लोड प्रतिरोधक RL को टर्मिनल A और B के समानांतर पुनः जोड़ा जाता है। धारा विभाजन नियम से IL = IN × RN / (RN + RL)।"
  },
  bn: {
    title: "নর্টন উপপাদ্য ইন্টারেক্টিভ সার্কিট বিল্ডার",
    subtitle: "ধাপে ধাপে জটিল ডিসি নেটওয়ার্ককে সমতুল্য কারেন্ট সোর্স (IN) এবং প্যারালাল রেজিস্টেন্সে (RN) রূপান্তর।",
    originalNetwork: "মূল নেটওয়ার্ক",
    nortonEquivalent: "নর্টন সমতুল্য",
    comparisonView: "থেভেনিন ↔ নর্টন সমতুল্যতা",
    workflowSteps: "রিডাকশন প্রক্রিয়ার ধাপসমূহ",
    step1: "১. মূল নেটওয়ার্ক",
    step2: "২. লোড বিচ্ছিন্নকরণ (RL)",
    step3: "৩. টার্মিনাল A-B শর্টকরণ",
    step4: "৪. IN (Isc) নির্ণয়",
    step5: "৫. RN নির্ণয় (Vs শর্ট)",
    step6: "৬. সমতুল্য সার্কিট তৈরি",
    step7: "৭. লোড পুনঃসংযোগ",
    controls: "নেটওয়ার্ক প্যারামিটার কন্ট্রোল",
    vsLabel: "সোর্স ভোল্টেজ (Vs)",
    r1Label: "সিরিজ রেজিস্টর (R1)",
    r2Label: "প্যারালাল রেজিস্টর (R2)",
    r3Label: "ব্রাঞ্চ রেজিস্টর (R3)",
    rlLabel: "লোড রেজিস্টর (RL)",
    liveMetrics: "লাইভ নর্টন মানসমূহ",
    inLabel: "নর্টন কারেন্ট (IN)",
    rnLabel: "নর্টন রেজিস্ট্যান্স (RN)",
    ilLabel: "লোড কারেন্ট (IL)",
    vlLabel: "লোড ভোল্টেজ (VL)",
    vthLabel: "থেভেনিন ভোল্টেজ (Vth)",
    reset: "রিসেট করুন",
    stepInfoTitle: "বর্তমান ধাপের ব্যাখ্যা",
    step1Info: "ভোল্টেজ সোর্স Vs, রেজিস্টর R1, R2, R3 এবং আউটপুট টার্মিনাল A ও B তে যুক্ত লোড RL সহ মূল সার্কিট।",
    step2Info: "লোড রেজিস্টর RL কে টার্মিনাল A ও B থেকে বিচ্ছিন্ন করা হয়েছে।",
    step3Info: "শর্ট সার্কিট কারেন্ট পরিমাপের জন্য টার্মিনাল A ও B কে একটি জিরো-রেজিস্ট্যান্স তার দিয়ে শর্ট করা হয়েছে।",
    step4Info: "টার্মিনাল A-B দিয়ে প্রবাহিত শর্ট সার্কিট কারেন্ট IN (Isc) গণনা করা হয়েছে: IN = Vs × R2 / (R1·R2 + R1·R3 + R2·R3)।",
    step5Info: "সোর্স Vs কে শর্ট করা হয়েছে। A ও B থেকে দেখলে RN = R3 + (R1·R2)/(R1+R2)। (মনে রাখুন: RN = Rth)।",
    step6Info: "একটি কারেন্ট সোর্স IN এবং তার সাথে প্যারালালে যুক্ত রেজিস্ট্যান্স RN দিয়ে নর্টন সমতুল্য সার্কিট গঠন করা হয়েছে।",
    step7Info: "লোড রেজিস্টর RL কে নর্টন সমতুল্য সার্কিটে প্যারালালে যুক্ত করা হয়েছে। কারেন্ট ডিভাইডার সূত্রে IL = IN × RN / (RN + RL)।"
  }
};

export const NortonEquivalentAnimation: React.FC<Props> = ({ currentLanguage }) => {
  const l = LABELS[currentLanguage] || LABELS.en;

  // Circuit Parameters
  const [vs, setVs] = useState<number>(36);
  const [r1, setR1] = useState<number>(12);
  const [r2, setR2] = useState<number>(24);
  const [r3, setR3] = useState<number>(8);
  const [rl, setRl] = useState<number>(20);

  // Workflow step (1 to 7)
  const [step, setStep] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'original' | 'equivalent' | 'comparison'>('original');

  // Exact Calculation Engine
  const vth = (vs * r2) / (r1 + r2);
  const rn = r3 + (r1 * r2) / (r1 + r2); // RN = Rth
  const inCurrent = vth / rn; // IN = Vth / RN = I_sc
  const il = inCurrent * (rn / (rn + rl));
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
      case 7: return l.step7Info;
      default: return '';
    }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-amber-400 flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            {l.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1">{l.subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 print:hidden">
          <button
            onClick={() => setViewMode(viewMode === 'original' ? 'equivalent' : viewMode === 'equivalent' ? 'comparison' : 'original')}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
            aria-label="Toggle Circuit View"
          >
            <Eye className="w-4 h-4" />
            {viewMode === 'original' ? l.nortonEquivalent : viewMode === 'equivalent' ? l.comparisonView : l.originalNetwork}
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
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5">
          {[
            { id: 1, name: l.step1 },
            { id: 2, name: l.step2 },
            { id: 3, name: l.step3 },
            { id: 4, name: l.step4 },
            { id: 5, name: l.step5 },
            { id: 6, name: l.step6 },
            { id: 7, name: l.step7 },
          ].map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setStep(s.id);
                if (s.id >= 6) setViewMode('equivalent');
                else if (s.id < 6) setViewMode('original');
              }}
              className={`px-2 py-2 rounded-lg text-[11px] font-medium text-center transition-all ${
                step === s.id
                  ? 'bg-amber-600 text-white font-bold shadow-md shadow-amber-900/40 ring-1 ring-amber-400'
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
      <div className="p-3 bg-amber-950/40 border border-amber-800/50 rounded-lg text-xs text-amber-200">
        <span className="font-bold text-amber-300 block mb-1">{l.stepInfoTitle}:</span>
        <p>{getStepDescription()}</p>
      </div>

      {/* SVG Circuit Canvas Area */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center min-h-[220px]">
        {viewMode === 'comparison' ? (
          /* Dual Comparison View: Thevenin vs Norton */
          <svg viewBox="0 0 500 210" className="w-full max-w-lg h-auto">
            {/* Left: Thevenin Dual */}
            <g transform="translate(10, 0)">
              <rect x="20" y="20" width="200" height="150" rx="6" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 3" />
              <text x="120" y="40" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Thevenin Dual</text>
              <circle cx="50" cy="95" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="50" y="99" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Vth</text>
              <rect x="100" y="12" width="36" height="16" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="2" />
              <text x="118" y="24" textAnchor="middle" fill="#34d399" fontSize="9">Rth</text>
              <text x="120" y="150" textAnchor="middle" fill="#93c5fd" fontSize="10">Vth = IN × RN = {vth.toFixed(2)}V</text>
            </g>

            {/* Equivalency Arrow */}
            <g transform="translate(250, 95)">
              <path d="M -15,0 L 15,0 M 8,-6 L 15,0 L 8,6 M -8,-6 L -15,0 L -8,6" stroke="#f59e0b" strokeWidth="2.5" />
              <text x="0" y="-12" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Dual ↔</text>
            </g>

            {/* Right: Norton Equivalent */}
            <g transform="translate(260, 0)">
              <rect x="20" y="20" width="200" height="150" rx="6" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
              <text x="120" y="40" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">Norton Equivalent</text>
              <circle cx="50" cy="95" r="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="50" y="99" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">IN</text>
              <rect x="105" y="80" width="16" height="30" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="2" />
              <text x="124" y="98" fill="#34d399" fontSize="9">RN</text>
              <text x="120" y="150" textAnchor="middle" fill="#fef08a" fontSize="10">IN = Vth / Rth = {inCurrent.toFixed(2)}A</text>
            </g>
          </svg>
        ) : viewMode === 'original' || step < 6 ? (
          /* Original / Step 1-5 Circuit View */
          <svg viewBox="0 0 500 220" className="w-full max-w-lg h-auto">
            <rect x="50" y="40" width="400" height="140" rx="8" fill="none" stroke="#475569" strokeWidth="2.5" />

            {/* Vs Source */}
            <g transform="translate(50, 110)">
              {step === 5 ? (
                <line x1="0" y1="-30" x2="0" y2="30" stroke="#ef4444" strokeWidth="4" strokeDasharray="3 3" />
              ) : (
                <g>
                  <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
                  <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Vs</text>
                  <text x="0" y="10" textAnchor="middle" fill="#93c5fd" fontSize="10">{vs}V</text>
                </g>
              )}
            </g>

            {/* R1 */}
            <g transform="translate(150, 40)">
              <rect x="-25" y="-12" width="50" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="4" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">R1 = {r1}Ω</text>
            </g>

            {/* R2 */}
            <line x1="250" y1="40" x2="250" y2="180" stroke="#475569" strokeWidth="2" />
            <g transform="translate(250, 110)">
              <rect x="-12" y="-25" width="24" height="50" fill="#1e293b" stroke="#a855f7" strokeWidth="2" rx="4" />
              <text x="18" y="4" fill="#d8b4fe" fontSize="11" fontWeight="bold">R2 = {r2}Ω</text>
            </g>

            {/* R3 */}
            <g transform="translate(340, 40)">
              <rect x="-25" y="-12" width="50" height="24" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="4" />
              <text x="0" y="3" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="bold">R3 = {r3}Ω</text>
            </g>

            {/* Output Terminals A & B */}
            <circle cx="450" cy="40" r="4" fill="#f43f5e" />
            <text x="450" y="28" textAnchor="middle" fill="#f43f5e" fontSize="11" fontWeight="bold">A</text>
            <circle cx="450" cy="180" r="4" fill="#f43f5e" />
            <text x="450" y="196" textAnchor="middle" fill="#f43f5e" fontSize="11" fontWeight="bold">B</text>

            {/* Terminal State */}
            {step === 3 || step === 4 ? (
              /* Shorted Terminals */
              <g>
                <line x1="450" y1="40" x2="450" y2="180" stroke="#ef4444" strokeWidth="3" />
                <text x="460" y="110" fill="#f87171" fontSize="11" fontWeight="bold">IN = Isc = {inCurrent.toFixed(2)}A</text>
              </g>
            ) : step === 2 ? (
              /* Open Terminals */
              <text x="458" y="110" fill="#94a3b8" fontSize="10" italic="true">[RL Removed]</text>
            ) : (
              /* RL Connected */
              <g transform="translate(450, 110)">
                <rect x="-12" y="-25" width="24" height="50" fill="#1e293b" stroke="#ec4899" strokeWidth="2.5" rx="4" />
                <text x="18" y="4" fill="#f472b6" fontSize="11" fontWeight="bold">RL = {rl}Ω</text>
                <text x="-50" y="4" fill="#ec4899" fontSize="10" fontWeight="bold">IL = {il.toFixed(2)}A</text>
              </g>
            )}
          </svg>
        ) : (
          /* Norton Equivalent View */
          <svg viewBox="0 0 500 220" className="w-full max-w-lg h-auto">
            <rect x="60" y="40" width="380" height="140" rx="8" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="6 4" />

            {/* IN Current Source */}
            <g transform="translate(100, 110)">
              <circle cx="0" cy="0" r="20" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
              <path d="M 0,10 L 0,-10 M -4,-4 L 0,-10 L 4,-4" stroke="#f59e0b" strokeWidth="2" />
              <text x="-30" y="-3" textAnchor="end" fill="#f59e0b" fontSize="11" fontWeight="bold">IN</text>
              <text x="-30" y="10" textAnchor="end" fill="#fef08a" fontSize="10">{inCurrent.toFixed(2)}A</text>
            </g>

            {/* RN Resistor (Parallel) */}
            <line x1="260" y1="40" x2="260" y2="180" stroke="#475569" strokeWidth="2" />
            <g transform="translate(260, 110)">
              <rect x="-14" y="-28" width="28" height="56" fill="#1e293b" stroke="#34d399" strokeWidth="2.5" rx="4" />
              <text x="20" y="4" fill="#34d399" fontSize="11" fontWeight="bold">RN = {rn.toFixed(2)}Ω</text>
            </g>

            {/* Terminals A & B */}
            <circle cx="420" cy="40" r="4" fill="#f43f5e" />
            <text x="420" y="28" textAnchor="middle" fill="#f43f5e" fontSize="11" fontWeight="bold">A</text>
            <circle cx="420" cy="180" r="4" fill="#f43f5e" />
            <text x="420" y="196" textAnchor="middle" fill="#f43f5e" fontSize="11" fontWeight="bold">B</text>

            {/* Reconnected Load RL */}
            {step === 6 ? (
              <text x="428" y="110" fill="#94a3b8" fontSize="10" italic="true">[Ready to reconnect RL]</text>
            ) : (
              <g transform="translate(420, 110)">
                <rect x="-12" y="-25" width="24" height="50" fill="#1e293b" stroke="#ec4899" strokeWidth="2.5" rx="4" />
                <text x="18" y="4" fill="#f472b6" fontSize="11" fontWeight="bold">RL = {rl}Ω</text>
                <text x="-50" y="4" fill="#ec4899" fontSize="10" fontWeight="bold">IL = {il.toFixed(2)}A</text>
              </g>
            )}
          </svg>
        )}

        <div className="mt-2 text-xs font-mono text-amber-300 font-semibold">
          {viewMode === 'original' ? l.originalNetwork : viewMode === 'equivalent' ? l.nortonEquivalent : l.comparisonView} View
        </div>
      </div>

      {/* Live Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 bg-slate-950/70 p-3 rounded-lg border border-slate-800">
        <div className="p-2.5 bg-slate-900 rounded border border-amber-900/50">
          <span className="text-[11px] text-slate-400 block">{l.inLabel}</span>
          <span className="text-lg font-mono font-bold text-amber-400">{inCurrent.toFixed(2)} A</span>
        </div>
        <div className="p-2.5 bg-slate-900 rounded border border-emerald-900/50">
          <span className="text-[11px] text-slate-400 block">{l.rnLabel}</span>
          <span className="text-lg font-mono font-bold text-emerald-400">{rn.toFixed(2)} Ω</span>
        </div>
        <div className="p-2.5 bg-slate-900 rounded border border-pink-900/50">
          <span className="text-[11px] text-slate-400 block">{l.ilLabel}</span>
          <span className="text-lg font-mono font-bold text-pink-400">{il.toFixed(2)} A</span>
        </div>
        <div className="p-2.5 bg-slate-900 rounded border border-cyan-900/50">
          <span className="text-[11px] text-slate-400 block">{l.vlLabel}</span>
          <span className="text-lg font-mono font-bold text-cyan-400">{vl.toFixed(2)} V</span>
        </div>
        <div className="p-2.5 bg-slate-900 rounded border border-purple-900/50 col-span-2 sm:col-span-1">
          <span className="text-[11px] text-slate-400 block">{l.vthLabel}</span>
          <span className="text-lg font-mono font-bold text-purple-400">{vth.toFixed(2)} V</span>
        </div>
      </div>

      {/* Parameter Sliders Controls (Print Hidden) */}
      <div className="space-y-4 pt-2 border-t border-slate-800 print:hidden">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
          <Sliders className="w-4 h-4 text-amber-400" />
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
