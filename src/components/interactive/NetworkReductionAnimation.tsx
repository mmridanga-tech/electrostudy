import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, RotateCcw, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface NetworkReductionAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Network Reduction Educational Simulator',
    subtitle: 'Step-by-step systematic simplification of a multi-stage DC resistor network.',
    controlsTitle: 'Source & Network Parameters',
    voltageLabel: 'Source Voltage (V_s)',
    r1Label: 'Series Entrance Resistor R₁',
    r2Label: 'Parallel Branch R₂',
    r3Label: 'Parallel Branch R₃',
    r4Label: 'Parallel Branch R₄',
    r5Label: 'Series Branch R₅',
    r6Label: 'Series Branch R₆',
    stepTitle: 'Reduction Step Progress',
    prevStep: 'Previous Step',
    nextStep: 'Next Step',
    autoPlay: 'Auto Step',
    pause: 'Pause',
    reset: 'Reset Network',
    step0Name: 'Step 0: Full Original Circuit',
    step0Desc: 'Network contains entrance resistor R₁ (6 Ω) in series with parallel block 1 (R₂ || R₃) and parallel block 2 (R₄ || (R₅ + R₆)).',
    step1Name: 'Step 1: Reduce Series Branch (R₅ + R₆)',
    step1Desc: 'Identify branch with R₅ (10 Ω) and R₆ (14 Ω) in series without junctions between them: R_s1 = R₅ + R₆ = 24 Ω.',
    step2Name: 'Step 2: Reduce First Parallel Pair (R₂ || R₃)',
    step2Desc: 'Identify parallel pair R₂ (20 Ω) and R₃ (30 Ω) connected across identical nodes: R_p1 = (R₂ × R₃) / (R₂ + R₃) = 12 Ω.',
    step3Name: 'Step 3: Reduce Second Parallel Pair (R₄ || R_s1)',
    step3Desc: 'Identify parallel pair R₄ (24 Ω) and simplified branch R_s1 (24 Ω): R_p2 = (R₄ × R_s1) / (R₄ + R_s1) = 12 Ω.',
    step4Name: 'Step 4: Single Equivalent Resistance (R_eq)',
    step4Desc: 'Combine remaining series components R₁, R_p1, and R_p2: R_eq = R₁ + R_p1 + R_p2 = 30 Ω. Calculate total current I_total = V_s / R_eq.',
    backSubTitle: 'Back-Substitution Analysis (Branch Currents & Voltages)',
    reqLabel: 'Total Equivalent Resistance (R_eq):',
    itotalLabel: 'Total Source Current (I_total):',
    vr1Label: 'Voltage across R₁ (V_R1):',
    vrp1Label: 'Voltage across Block 1 (V_Rp1):',
    vrp2Label: 'Voltage across Block 2 (V_Rp2):',
    ir2Label: 'Current through R₂ (I_R2):',
    ir3Label: 'Current through R₃ (I_R3):',
    ir4Label: 'Current through R₄ (I_R4):',
    ir56Label: 'Current through (R₅ + R₆) Branch:',
    calloutTitle: 'Systematic Reduction Method',
    calloutText: '1. Work from the farthest branch back toward the source. 2. Replace series components (R_s = R₁ + R₂) and parallel components (R_p = R1·R2/(R1+R2)). 3. Redraw circuit after every step. 4. Use back-substitution to solve local branch currents and component voltages.',
  },
  hi: {
    title: 'नेटवर्क रिडक्शन शैक्षणिक सिमुलेटर',
    subtitle: 'मल्टी-स्टेज डीसी प्रतिरोधक नेटवर्क का चरण-दर-चरण व्यवस्थित सरलीकरण।',
    controlsTitle: 'स्रोत एवं नेटवर्क पैरामीटर',
    voltageLabel: 'स्रोत वोल्टेज (V_s)',
    r1Label: 'श्रेणी प्रवेश प्रतिरोधक R₁',
    r2Label: 'समांतर शाखा R₂',
    r3Label: 'समांतर शाखा R₃',
    r4Label: 'समांतर शाखा R₄',
    r5Label: 'श्रेणी शाखा R₅',
    r6Label: 'श्रेणी शाखा R₆',
    stepTitle: 'रिडक्शन चरण प्रगति',
    prevStep: 'पिछला चरण',
    nextStep: 'अगला चरण',
    autoPlay: 'ऑटो स्टेप',
    pause: 'रोकें',
    reset: 'नेटवर्क रीसेट करें',
    step0Name: 'चरण 0: मूल पूर्ण परिपथ',
    step0Desc: 'नेटवर्क में प्रवेश प्रतिरोधक R₁ (6 Ω) श्रेणी में है, जिसके साथ समांतर ब्लॉक 1 (R₂ || R₃) और समांतर ब्लॉक 2 (R₄ || (R₅ + R₆)) जुड़े हैं।',
    step1Name: 'चरण 1: श्रेणी शाखा (R₅ + R₆) को घटाएँ',
    step1Desc: 'R₅ (10 Ω) और R₆ (14 Ω) वाली श्रेणी शाखा को पहचानें: R_s1 = R₅ + R₆ = 24 Ω।',
    step2Name: 'चरण 2: पहला समांतर जोड़ा (R₂ || R₃) घटाएँ',
    step2Desc: 'समांतर जोड़े R₂ (20 Ω) और R₃ (30 Ω) को पहचानें: R_p1 = (R₂ × R₃) / (R₂ + R₃) = 12 Ω।',
    step3Name: 'चरण 3: दूसरा समांतर जोड़ा (R₄ || R_s1) घटाएँ',
    step3Desc: 'समांतर जोड़े R₄ (24 Ω) और सरलीकृत शाखा R_s1 (24 Ω) को पहचानें: R_p2 = (R₄ × R_s1) / (R₄ + R_s1) = 12 Ω।',
    step4Name: 'चरण 4: एकल समतुल्य प्रतिरोध (R_eq)',
    step4Desc: 'शेष श्रेणी घटकों R₁, R_p1, और R_p2 को जोड़ें: R_eq = R₁ + R_p1 + R_p2 = 30 Ω। कुल धारा I_total = V_s / R_eq।',
    backSubTitle: 'बैक-प्रतिस्थापन विश्लेषण (शाखा धाराएँ एवं वोल्टेज)',
    reqLabel: 'कुल समतुल्य प्रतिरोध (R_eq):',
    itotalLabel: 'कुल स्रोत धारा (I_total):',
    vr1Label: 'R₁ पर वोल्टेज (V_R1):',
    vrp1Label: 'ब्लॉक 1 पर वोल्टेज (V_Rp1):',
    vrp2Label: 'ब्लॉक 2 पर वोल्टेज (V_Rp2):',
    ir2Label: 'R₂ से धारा (I_R2):',
    ir3Label: 'R₃ से धारा (I_R3):',
    ir4Label: 'R₄ से धारा (I_R4):',
    ir56Label: '(R₅ + R₆) शाखा से धारा:',
    calloutTitle: 'व्यवस्थित नेटवर्क रिडक्शन विधि',
    calloutText: '1. स्रोत से सबसे दूर की शाखा से शुरू करके स्रोत की ओर आएं। 2. श्रेणी घटकों (R_s = R₁ + R₂) और समांतर घटकों (R_p = R1·R2/(R1+R2)) को बदलें। 3. प्रत्येक चरण के बाद परिपथ को फिर से बनाएं। 4. बैक-प्रतिस्थापन द्वारा स्थानीय शाखा धाराओं और घटकों के वोल्टेज को हल करें।',
  },
  bn: {
    title: 'নেটওয়ার্ক রিডাকশন শিক্ষামূলক সিমুলেটর',
    subtitle: 'বহু-ধাপের ডিসি রেজিস্টর নেটওয়ার্কের পর্যায়ক্রমিক সহজীকরণ।',
    controlsTitle: 'সোর্স ও নেটওয়ার্ক প্যারামিটার',
    voltageLabel: 'সোর্স ভোল্টেজ (V_s)',
    r1Label: 'সিরিজ এন্ট্রান্স রেজিস্টর R₁',
    r2Label: 'প্যারালাল ব্রাঞ্চ R₂',
    r3Label: 'প্যারালাল ব্রাঞ্চ R₃',
    r4Label: 'প্যারালাল ব্রাঞ্চ R₄',
    r5Label: 'সিরিজ ব্রাঞ্চ R₅',
    r6Label: 'সিরিজ ব্রাঞ্চ R₆',
    stepTitle: 'রিডাকশন ধাপের অগ্রগতি',
    prevStep: 'পূর্ববর্তী ধাপ',
    nextStep: 'পরবর্তী ধাপ',
    autoPlay: 'অটো প্লে',
    pause: 'থামুন',
    reset: 'নেটওয়ার্ক রিসেট',
    step0Name: 'ধাপ ০: মূল সম্পূর্ণ সার্কিট',
    step0Desc: 'নেটওয়ার্কে প্রবেশের রেজিস্টর R₁ (৬ Ω) এবং তার সাথে প্যারালাল ব্লক ১ (R₂ || R₃) ও প্যারালাল ব্লক ২ (R₄ || (R₅ + R₆)) যুক্ত আছে।',
    step1Name: 'ধাপ ১: সিরিজ ব্রাঞ্চ (R₅ + R₆) হ্রাসকরণ',
    step1Desc: 'R₅ (১০ Ω) এবং R₆ (১৪ Ω) যুক্ত সিরিজ ব্রাঞ্চ হ্রাস করুন: R_s1 = R₅ + R₆ = ২৪ Ω।',
    step2Name: 'ধাপ ২: প্রথম প্যারালাল জোড়া (R₂ || R₃) হ্রাসকরণ',
    step2Desc: 'প্যারালাল জোড়া R₂ (২০ Ω) ও R₃ (৩০ Ω) হ্রাস করুন: R_p1 = (R₂ × R₃) / (R₂ + R₃) = ১২ Ω।',
    step3Name: 'ধাপ ৩: দ্বিতীয় প্যারালাল জোড়া (R₄ || R_s1) হ্রাসকরণ',
    step3Desc: 'প্যারালাল জোড়া R₄ (২৪ Ω) ও সরলীকৃত ব্রাঞ্চ R_s1 (২৪ Ω) হ্রাস করুন: R_p2 = (R₄ × R_s1) / (R₄ + R_s1) = ১২ Ω।',
    step4Name: 'ধাপ ৪: একক সমতুল্য রেজিস্ট্যান্স (R_eq)',
    step4Desc: 'অবশিষ্ট সিরিজ উপাদান R₁, R_p1 এবং R_p2 যুক্ত করুন: R_eq = R₁ + R_p1 + R_p2 = ৩০ Ω। মোট কারেন্ট I_total = V_s / R_eq।',
    backSubTitle: 'ব্যাক-সাবস্টিটিউশন বিশ্লেষণ (ব্রাঞ্চ কারেন্ট ও ভোল্টেজ)',
    reqLabel: 'মোট সমতুল্য রেজিস্ট্যান্স (R_eq):',
    itotalLabel: 'মোট সোর্স কারেন্ট (I_total):',
    vr1Label: 'R₁ এর ভোল্টেজ (V_R1):',
    vrp1Label: 'ব্লক ১ এর ভোল্টেজ (V_Rp1):',
    vrp2Label: 'ব্লক ২ এর ভোল্টেজ (V_Rp2):',
    ir2Label: 'R₂ এর কারেন্ট (I_R2):',
    ir3Label: 'R₃ এর কারেন্ট (I_R3):',
    ir4Label: 'R₄ এর কারেন্ট (I_R4):',
    ir56Label: '(R₅ + R₆) ব্রাঞ্চের কারেন্ট:',
    calloutTitle: 'প্রণালীবদ্ধ নেটওয়ার্ক রিডাকশন পদ্ধতি',
    calloutText: '১. সোর্স থেকে সবচেয়ে দূরের ব্রাঞ্চ থেকে শুরু করে সোর্সের দিকে আসুন। ২. সিরিজ উপাদান (R_s = R₁ + R₂) ও প্যারালাল উপাদান (R_p = R1·R2/(R1+R2)) চিহ্নিত করে সরল করুন। ৩. প্রতি ধাপের পর সার্কিট পুনর্বিন্যাস করুন। ৪. ব্যাক-সাবস্টিটিউশন দ্বারা স্থানীয় ব্রাঞ্চ কারেন্ট ও ভোল্টেজ নির্ণয় করুন।',
  }
};

export const NetworkReductionAnimation: React.FC<NetworkReductionAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const reducedMotion = useReducedMotion();

  // Adjustable parameters
  const [Vs, setVs] = useState<number>(60);
  const [R1, setR1] = useState<number>(6);
  const [R2, setR2] = useState<number>(20);
  const [R3, setR3] = useState<number>(30);
  const [R4, setR4] = useState<number>(24);
  const [R5, setR5] = useState<number>(10);
  const [R6, setR6] = useState<number>(14);

  // Step state: 0 to 4
  const [step, setStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Auto step effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && !reducedMotion) {
      timer = setInterval(() => {
        setStep(prev => (prev >= 4 ? 0 : prev + 1));
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, reducedMotion]);

  // Safe non-zero resistor values
  const safeR1 = Math.max(0.1, R1);
  const safeR2 = Math.max(0.1, R2);
  const safeR3 = Math.max(0.1, R3);
  const safeR4 = Math.max(0.1, R4);
  const safeR5 = Math.max(0.1, R5);
  const safeR6 = Math.max(0.1, R6);

  // Step-by-step math calculations
  const Rs1 = safeR5 + safeR6;
  const Rp1 = (safeR2 * safeR3) / (safeR2 + safeR3);
  const Rp2 = (safeR4 * Rs1) / (safeR4 + Rs1);
  const Req = safeR1 + Rp1 + Rp2;

  const Itotal = Vs / Req;
  const VR1 = Itotal * safeR1;
  const VRp1 = Itotal * Rp1;
  const VRp2 = Itotal * Rp2;

  const IR2 = VRp1 / safeR2;
  const IR3 = VRp1 / safeR3;
  const IR4 = VRp2 / safeR4;
  const IR56 = VRp2 / Rs1;

  const handleReset = () => {
    setVs(60);
    setR1(6);
    setR2(20);
    setR3(30);
    setR4(24);
    setR5(10);
    setR6(14);
    setStep(0);
    setIsPlaying(false);
  };

  const stepsInfo = [
    { name: t.step0Name, desc: t.step0Desc },
    { name: t.step1Name, desc: t.step1Desc },
    { name: t.step2Name, desc: t.step2Desc },
    { name: t.step3Name, desc: t.step3Desc },
    { name: t.step4Name, desc: t.step4Desc },
  ];

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      calloutTitle={t.calloutTitle}
      calloutText={t.calloutText}
    >
      {/* Parameter Controls */}
      <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-100 mb-6 print:hidden">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          {t.controlsTitle}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1">
              {t.voltageLabel}: <span className="font-mono text-cyan-400 font-bold">{Vs} V</span>
            </label>
            <input
              type="range"
              min="10"
              max="120"
              step="5"
              value={Vs}
              onChange={e => setVs(Number(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1">
              {t.r1Label}: <span className="font-mono text-emerald-400 font-bold">{R1} Ω</span>
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={R1}
              onChange={e => setR1(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1">
              {t.r2Label}: <span className="font-mono text-amber-400 font-bold">{R2} Ω</span>
            </label>
            <input
              type="range"
              min="5"
              max="50"
              value={R2}
              onChange={e => setR2(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1">
              {t.r3Label}: <span className="font-mono text-amber-400 font-bold">{R3} Ω</span>
            </label>
            <input
              type="range"
              min="5"
              max="60"
              value={R3}
              onChange={e => setR3(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1">
              {t.r4Label}: <span className="font-mono text-purple-400 font-bold">{R4} Ω</span>
            </label>
            <input
              type="range"
              min="5"
              max="60"
              value={R4}
              onChange={e => setR4(Number(e.target.value))}
              className="w-full accent-purple-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1">
              {t.r5Label}: <span className="font-mono text-rose-400 font-bold">{R5} Ω</span>
            </label>
            <input
              type="range"
              min="2"
              max="30"
              value={R5}
              onChange={e => setR5(Number(e.target.value))}
              className="w-full accent-rose-500"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-slate-300 block mb-1">
              {t.r6Label}: <span className="font-mono text-rose-400 font-bold">{R6} Ω</span>
            </label>
            <input
              type="range"
              min="2"
              max="30"
              value={R6}
              onChange={e => setR6(Number(e.target.value))}
              className="w-full accent-rose-500"
            />
          </div>
        </div>
      </div>

      {/* Step Navigation Controls */}
      <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-100 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.stepTitle}:</span>
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
              {step} / 4
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setStep(prev => Math.max(0, prev - 1))}
              disabled={step === 0}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-semibold text-slate-200 transition"
            >
              <SkipBack className="w-3.5 h-3.5" />
              {t.prevStep}
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs font-semibold text-white transition"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isPlaying ? t.pause : t.autoPlay}
            </button>
            <button
              onClick={() => setStep(prev => Math.min(4, prev + 1))}
              disabled={step === 4}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-semibold text-slate-200 transition"
            >
              {t.nextStep}
              <SkipForward className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {t.reset}
            </button>
          </div>
        </div>

        {/* Step Progress indicators */}
        <div className="grid grid-cols-5 gap-1.5 mb-4">
          {[0, 1, 2, 3, 4].map(sIdx => (
            <button
              key={sIdx}
              onClick={() => {
                setStep(sIdx);
                setIsPlaying(false);
              }}
              className={`py-2 px-1 rounded-lg text-xs font-semibold transition text-center border ${
                step === sIdx
                  ? 'bg-cyan-500 text-white border-cyan-400 font-bold shadow-md shadow-cyan-900/40'
                  : step > sIdx
                  ? 'bg-slate-800 text-emerald-400 border-emerald-800/60'
                  : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:bg-slate-800'
              }`}
            >
              Step {sIdx}
            </button>
          ))}
        </div>

        {/* Active Step Description */}
        <div className="bg-slate-950 p-4 rounded-lg border border-cyan-900/50">
          <h5 className="text-sm font-bold text-cyan-300 mb-1 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            {stepsInfo[step].name}
          </h5>
          <p className="text-xs text-slate-300 leading-relaxed">{stepsInfo[step].desc}</p>
        </div>
      </div>

      {/* SVG Circuit Schematic According to Active Step */}
      <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 mb-6 flex flex-col items-center">
        <svg viewBox="0 0 620 220" className="w-full max-w-2xl h-auto">
          {/* Main Power Rail Left */}
          <line x1="30" y1="40" x2="100" y2="40" stroke="#38bdf8" strokeWidth="3" />
          <line x1="30" y1="180" x2="580" y2="180" stroke="#38bdf8" strokeWidth="3" />
          <line x1="30" y1="40" x2="30" y2="180" stroke="#38bdf8" strokeWidth="3" />

          {/* Source Vs */}
          <g transform="translate(30, 110)">
            <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
            <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">+</text>
            <text x="0" y="11" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">-</text>
            <text x="-28" y="4" textAnchor="end" fill="#38bdf8" fontSize="12" fontWeight="bold">{Vs}V</text>
          </g>

          {/* R1 Entrance Resistor */}
          <g transform="translate(130, 40)">
            <line x1="-30" y1="0" x2="-15" y2="0" stroke="#38bdf8" strokeWidth="3" />
            <rect x="-15" y="-12" width="30" height="24" fill="#1e293b" stroke="#10b981" strokeWidth="2" rx="3" />
            <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R₁ ({safeR1}Ω)</text>
            <line x1="15" y1="0" x2="30" y2="0" stroke="#38bdf8" strokeWidth="3" />
          </g>

          {/* STEP 0, 1: Block 1 is original (R2 || R3) */}
          {step < 2 ? (
            <g transform="translate(240, 40)">
              {/* Parallel branches for R2 & R3 */}
              <line x1="-80" y1="0" x2="-50" y2="0" stroke="#38bdf8" strokeWidth="3" />
              <line x1="-50" y1="-25" x2="-50" y2="25" stroke="#38bdf8" strokeWidth="3" />
              <line x1="50" y1="-25" x2="50" y2="25" stroke="#38bdf8" strokeWidth="3" />
              <line x1="50" y1="0" x2="80" y2="0" stroke="#38bdf8" strokeWidth="3" />

              {/* R2 Top */}
              <line x1="-50" y1="-25" x2="-20" y2="-25" stroke="#38bdf8" strokeWidth="2" />
              <rect x="-20" y="-35" width="40" height="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="3" />
              <text x="0" y="-22" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">R₂ ({safeR2}Ω)</text>
              <line x1="20" y1="-25" x2="50" y2="-25" stroke="#38bdf8" strokeWidth="2" />

              {/* R3 Bottom */}
              <line x1="-50" y1="25" x2="-20" y2="25" stroke="#38bdf8" strokeWidth="2" />
              <rect x="-20" y="15" width="40" height="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" rx="3" />
              <text x="0" y="28" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">R₃ ({safeR3}Ω)</text>
              <line x1="20" y1="25" x2="50" y2="25" stroke="#38bdf8" strokeWidth="2" />
            </g>
          ) : (
            /* STEP 2, 3, 4: Block 1 is reduced to Rp1 */
            <g transform="translate(240, 40)">
              <line x1="-80" y1="0" x2="-20" y2="0" stroke="#38bdf8" strokeWidth="3" />
              <rect x="-20" y="-14" width="40" height="28" fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" rx="4" />
              <text x="0" y="-2" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">R_p1</text>
              <text x="0" y="9" textAnchor="middle" fill="#fde047" fontSize="9" fontWeight="bold">({Rp1.toFixed(1)}Ω)</text>
              <line x1="20" y1="0" x2="80" y2="0" stroke="#38bdf8" strokeWidth="3" />
            </g>
          )}

          {/* STEP 0: Block 2 has R4 || (R5 + R6) */}
          {step === 0 && (
            <g transform="translate(450, 40)">
              <line x1="-130" y1="0" x2="-80" y2="0" stroke="#38bdf8" strokeWidth="3" />
              <line x1="-80" y1="-30" x2="-80" y2="30" stroke="#38bdf8" strokeWidth="3" />
              <line x1="80" y1="-30" x2="80" y2="140" stroke="#38bdf8" strokeWidth="3" />

              {/* R4 Branch */}
              <line x1="-80" y1="-30" x2="-20" y2="-30" stroke="#38bdf8" strokeWidth="2" />
              <rect x="-20" y="-40" width="40" height="20" fill="#1e293b" stroke="#a855f7" strokeWidth="2" rx="3" />
              <text x="0" y="-27" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">R₄ ({safeR4}Ω)</text>
              <line x1="20" y1="-30" x2="80" y2="-30" stroke="#38bdf8" strokeWidth="2" />

              {/* R5 + R6 Branch */}
              <line x1="-80" y1="30" x2="-50" y2="30" stroke="#38bdf8" strokeWidth="2" />
              <rect x="-50" y="20" width="36" height="20" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" rx="3" />
              <text x="-32" y="33" textAnchor="middle" fill="#fda4af" fontSize="9" fontWeight="bold">R₅ ({safeR5}Ω)</text>
              <line x1="-14" y1="30" x2="14" y2="30" stroke="#38bdf8" strokeWidth="2" />
              <rect x="14" y="20" width="36" height="20" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" rx="3" />
              <text x="32" y="33" textAnchor="middle" fill="#fda4af" fontSize="9" fontWeight="bold">R₆ ({safeR6}Ω)</text>
              <line x1="50" y1="30" x2="80" y2="30" stroke="#38bdf8" strokeWidth="2" />
            </g>
          )}

          {/* STEP 1: Block 2 has R4 || R_s1 */}
          {step === 1 && (
            <g transform="translate(450, 40)">
              <line x1="-130" y1="0" x2="-80" y2="0" stroke="#38bdf8" strokeWidth="3" />
              <line x1="-80" y1="-30" x2="-80" y2="30" stroke="#38bdf8" strokeWidth="3" />
              <line x1="80" y1="-30" x2="80" y2="140" stroke="#38bdf8" strokeWidth="3" />

              {/* R4 Branch */}
              <line x1="-80" y1="-30" x2="-20" y2="-30" stroke="#38bdf8" strokeWidth="2" />
              <rect x="-20" y="-40" width="40" height="20" fill="#1e293b" stroke="#a855f7" strokeWidth="2" rx="3" />
              <text x="0" y="-27" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">R₄ ({safeR4}Ω)</text>
              <line x1="20" y1="-30" x2="80" y2="-30" stroke="#38bdf8" strokeWidth="2" />

              {/* R_s1 Reduced Branch */}
              <line x1="-80" y1="30" x2="-25" y2="30" stroke="#38bdf8" strokeWidth="2" />
              <rect x="-25" y="18" width="50" height="24" fill="#1e293b" stroke="#f43f5e" strokeWidth="2.5" rx="3" />
              <text x="0" y="33" textAnchor="middle" fill="#fda4af" fontSize="10" fontWeight="bold">R_s1 ({Rs1}Ω)</text>
              <line x1="25" y1="30" x2="80" y2="30" stroke="#38bdf8" strokeWidth="2" />
            </g>
          )}

          {/* STEP 2, 3: Block 2 is reduced to Rp2 */}
          {(step === 2 || step === 3) && (
            <g transform="translate(450, 40)">
              <line x1="-130" y1="0" x2="-25" y2="0" stroke="#38bdf8" strokeWidth="3" />
              <rect x="-25" y="-14" width="50" height="28" fill="#1e293b" stroke="#a855f7" strokeWidth="2.5" rx="4" />
              <text x="0" y="-2" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">R_p2</text>
              <text x="0" y="9" textAnchor="middle" fill="#e9d5ff" fontSize="9" fontWeight="bold">({Rp2.toFixed(1)}Ω)</text>
              <line x1="25" y1="0" x2="80" y2="0" stroke="#38bdf8" strokeWidth="3" />
              <line x1="80" y1="0" x2="80" y2="140" stroke="#38bdf8" strokeWidth="3" />
            </g>
          )}

          {/* STEP 4: Single equivalent Req */}
          {step === 4 && (
            <g transform="translate(320, 40)">
              <line x1="-220" y1="0" x2="-30" y2="0" stroke="#38bdf8" strokeWidth="3.5" />
              <rect x="-30" y="-18" width="60" height="36" fill="#0284c7" stroke="#38bdf8" strokeWidth="3" rx="6" />
              <text x="0" y="-3" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">R_eq</text>
              <text x="0" y="11" textAnchor="middle" fill="#f0f9ff" fontSize="11" fontWeight="bold">{Req.toFixed(1)} Ω</text>
              <line x1="30" y1="0" x2="210" y2="0" stroke="#38bdf8" strokeWidth="3.5" />
              <line x1="210" y1="0" x2="210" y2="140" stroke="#38bdf8" strokeWidth="3.5" />
            </g>
          )}

          {/* Current Arrow for step 4 */}
          {step === 4 && (
            <g transform="translate(90, 25)">
              <text x="0" y="0" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
                I_total = {Itotal.toFixed(2)} A
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Back-substitution Analysis Table */}
      <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-100">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-cyan-400" />
          {t.backSubTitle}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">{t.reqLabel}</span>
            <span className="font-mono font-bold text-cyan-400">{Req.toFixed(2)} Ω</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">{t.itotalLabel}</span>
            <span className="font-mono font-bold text-cyan-300">{Itotal.toFixed(2)} A</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">{t.vr1Label}</span>
            <span className="font-mono font-bold text-emerald-400">{VR1.toFixed(2)} V</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">{t.vrp1Label}</span>
            <span className="font-mono font-bold text-amber-400">{VRp1.toFixed(2)} V</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">{t.vrp2Label}</span>
            <span className="font-mono font-bold text-purple-400">{VRp2.toFixed(2)} V</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">{t.ir2Label}</span>
            <span className="font-mono font-bold text-amber-300">{IR2.toFixed(2)} A</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">{t.ir3Label}</span>
            <span className="font-mono font-bold text-amber-300">{IR3.toFixed(2)} A</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">{t.ir4Label}</span>
            <span className="font-mono font-bold text-purple-300">{IR4.toFixed(2)} A</span>
          </div>
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">{t.ir56Label}</span>
            <span className="font-mono font-bold text-rose-300">{IR56.toFixed(2)} A</span>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
