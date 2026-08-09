import React, { useState } from 'react';
import { Sliders, RotateCcw, CheckCircle2, Info, Layers } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface NodalAnalysisAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Nodal Analysis Educational Solver (2-Node System)',
    subtitle: 'Systematically apply Kirchhoff\'s Current Law (KCL) at essential nodes using node voltages as independent variables.',
    circuitControls: 'Circuit Parameters (DC Sources & Resistors)',
    vs1Label: 'Voltage Source V_s1',
    vs2Label: 'Voltage Source V_s2',
    r1Label: 'Resistor R₁ (Series with V_s1)',
    r2Label: 'Resistor R₂ (Shared between Va & Vb)',
    r3Label: 'Resistor R₃ (Ground branch at Va)',
    r4Label: 'Resistor R₄ (Series with V_s2)',
    r5Label: 'Resistor R₅ (Ground branch at Vb)',
    solvedNodeVoltages: 'Solved Essential Node Voltages',
    nodeA: 'Node A Voltage (Va)',
    nodeB: 'Node B Voltage (Vb)',
    groundNode: 'Reference Node (Ground)',
    branchCurrents: 'Calculated Branch Currents',
    ir1: 'I_R1 (V_s1 → Va)',
    ir2: 'I_R2 (Va → Vb)',
    ir3: 'I_R3 (Va → Ground)',
    ir4: 'I_R4 (V_s2 → Vb)',
    ir5: 'I_R5 (Vb → Ground)',
    kclResidual: 'KCL Residual Check',
    kclNodeA: 'Node A KCL: I_R1 - I_R2 - I_R3',
    kclNodeB: 'Node B KCL: I_R4 + I_R2 - I_R5',
    formulationTitle: 'Dynamic Matrix Formulation [G][V] = [I]',
    reset: 'Reset Network',
    calloutTitle: 'Nodal Analysis Method Steps',
    calloutText: '1. Select a reference node (Ground = 0V). 2. Assign node voltages Va, Vb to essential nodes. 3. Apply KCL (ΣI = 0) at each node using Ohm\'s Law I = (V_start - V_end) / R. 4. Solve the matrix system.',
    supernodeTitle: 'Supernode Concept (Static Educational Note)',
    supernodeText: 'A Supernode occurs when an ideal voltage source is connected directly between two non-reference nodes (Va & Vb). To analyze: 1. Combine Va & Vb into a single supernode enclosure for KCL. 2. Write the constraint equation Va - Vb = V_source.',
    balanced: 'KCL Verified (ΣI = 0 A)',
  },
  hi: {
    title: 'नोडल विश्लेषण शिक्षण सॉल्वर (2-नोड सिस्टम)',
    subtitle: 'नोड वोल्टेज को स्वतंत्र चर के रूप में उपयोग करके मुख्य नोड्स पर किरचॉफ के धारा नियम (KCL) को व्यवस्थित रूप से लागू करें।',
    circuitControls: 'सर्किट पैरामीटर (डीसी स्रोत एवं प्रतिरोधक)',
    vs1Label: 'वोल्टेज स्रोत V_s1',
    vs2Label: 'वोल्टेज स्रोत V_s2',
    r1Label: 'प्रतिरोधक R₁ (V_s1 के साथ श्रेणी)',
    r2Label: 'प्रतिरोधक R₂ (Va एवं Vb के बीच)',
    r3Label: 'प्रतिरोधक R₃ (Va का ग्राउंड शाखा)',
    r4Label: 'प्रतिरोधक R₄ (V_s2 के साथ श्रेणी)',
    r5Label: 'प्रतिरोधक R₅ (Vb का ग्राउंड शाखा)',
    solvedNodeVoltages: 'हल किए गए मुख्य नोड वोल्टेज',
    nodeA: 'नोड A वोल्टेज (Va)',
    nodeB: 'नोड B वोल्टेज (Vb)',
    groundNode: 'संदर्भ नोड (ग्राउंड)',
    branchCurrents: 'परिकलित शाखा धाराएँ',
    ir1: 'I_R1 (V_s1 → Va)',
    ir2: 'I_R2 (Va → Vb)',
    ir3: 'I_R3 (Va → ग्राउंड)',
    ir4: 'I_R4 (V_s2 → Vb)',
    ir5: 'I_R5 (Vb → ग्राउंड)',
    kclResidual: 'KCL अवशिष्ट जाँच',
    kclNodeA: 'नोड A KCL: I_R1 - I_R2 - I_R3',
    kclNodeB: 'नोड B KCL: I_R4 + I_R2 - I_R5',
    formulationTitle: 'डायनामिक मैट्रिक्स समीकरण [G][V] = [I]',
    reset: 'नेटवर्क रीसेट करें',
    calloutTitle: 'नोडल विश्लेषण विधि के चरण',
    calloutText: '1. संदर्भ नोड चुनें (ग्राउंड = 0V)। 2. मुख्य नोड्स पर नोड वोल्टेज Va, Vb असाइन करें। 3. ओम के नियम I = (V_start - V_end)/R का उपयोग करके KCL (ΣI = 0) लागू करें। 4. मैट्रिक्स समीकरण हल करें।',
    supernodeTitle: 'सुपरनोड अवधारणा (शैक्षणिक टिप्पणी)',
    supernodeText: 'सुपरनोड तब बनता है जब दो गैर-संदर्भ नोड्स (Va और Vb) के बीच सीधे वोल्टेज स्रोत जुड़ा हो। विश्लेषण के लिए: 1. Va और Vb को एक सुपरनोड में मिलाएँ। 2. बाधा समीकरण Va - Vb = V_source लिखें।',
    balanced: 'KCL सत्यापित (ΣI = 0 A)',
  },
  bn: {
    title: 'নোডাল অ্যানালিসিস শিক্ষামূলক সলভার (২-নোড সিস্টেম)',
    subtitle: 'নোড ভোল্টেজকে প্রধান চলক হিসেবে ধরে এসেনশিয়াল নোডগুলোতে কার্শফের কারেন্ট সূত্র (KCL) প্রণালীবদ্ধভাবে প্রয়োগ করুন।',
    circuitControls: 'সার্কিট প্যারামিটার (ডিসি সোর্স ও রেজিস্টর)',
    vs1Label: 'ভোল্টেজ সোর্স V_s1',
    vs2Label: 'ভোল্টেজ সোর্স V_s2',
    r1Label: 'রেজিস্টর R₁ (V_s1 এর সাথে সিরিজে)',
    r2Label: 'রেজিস্টর R₂ (Va ও Vb এর মাঝে)',
    r3Label: 'রেজিস্টর R₃ (Va এর গ্রাউন্ড ব্রাঞ্চ)',
    r4Label: 'রেজিস্টর R₄ (V_s2 এর সাথে সিরিজে)',
    r5Label: 'রেজিস্টর R₅ (Vb এর গ্রাউন্ড ব্রাঞ্চ)',
    solvedNodeVoltages: 'নির্ণীত এসেনশিয়াল নোড ভোল্টেজ',
    nodeA: 'নোড A ভোল্টেজ (Va)',
    nodeB: 'নোড B ভোল্টেজ (Vb)',
    groundNode: 'রেফারেন্স নোড (গ্রাউন্ড)',
    branchCurrents: 'হিসাবকৃত ব্রাঞ্চ কারেন্টসমূহ',
    ir1: 'I_R1 (V_s1 → Va)',
    ir2: 'I_R2 (Va → Vb)',
    ir3: 'I_R3 (Va → গ্রাউন্ড)',
    ir4: 'I_R4 (V_s2 → Vb)',
    ir5: 'I_R5 (Vb → গ্রাউন্ড)',
    kclResidual: 'KCL অবশিষ্টাংশ পরীক্ষা',
    kclNodeA: 'নোড A KCL: I_R1 - I_R2 - I_R3',
    kclNodeB: 'নোড B KCL: I_R4 + I_R2 - I_R5',
    formulationTitle: 'ডাইনামিক ম্যাট্রিক্স সমীকরণ [G][V] = [I]',
    reset: 'নেটওয়ার্ক রিসেট করুন',
    calloutTitle: 'নোডাল অ্যানালিসিস পদ্ধতির ধাপসমূহ',
    calloutText: '১. একটি রেফারেন্স নোড বেছে নিন (গ্রাউন্ড = 0V)। ২. এসেনশিয়াল নোডে নোড ভোল্টেজ Va, Vb নির্ধারণ করুন। ৩. ওহমের সূত্র I = (V_start - V_end)/R ব্যবহার করে KCL (ΣI = 0) প্রয়োগ করুন। ৪. ম্যাট্রিক্স সমাধান করুন।',
    supernodeTitle: 'সুপারনোড ধারণা (শিক্ষামূলক নোট)',
    supernodeText: 'দুটি নন-রেফারেন্স নোডের (Va ও Vb) মাঝে সরাসরি একটি ভোল্টেজ সোর্স যুক্ত থাকলে সুপারনোড তৈরি হয়। বিশ্লেষণের জন্য: ১. Va ও Vb কে একটি সুপারনোড হিসেবে যুক্ত করে KCL লিখুন। ২. শর্ত সমীকরণ Va - Vb = V_source লিখুন।',
    balanced: 'KCL প্রমাণিত (ΣI = 0 A)',
  }
};

export const NodalAnalysisAnimation: React.FC<NodalAnalysisAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const reducedMotion = useReducedMotion();

  // State for circuit components
  const [Vs1, setVs1] = useState<number>(12);
  const [Vs2, setVs2] = useState<number>(6);
  const [R1, setR1] = useState<number>(4);
  const [R2, setR2] = useState<number>(6);
  const [R3, setR3] = useState<number>(12);
  const [R4, setR4] = useState<number>(3);
  const [R5, setR5] = useState<number>(8);

  const [showSupernodeNote, setShowSupernodeNote] = useState<boolean>(false);

  // Safe non-zero resistances
  const safeR1 = Math.max(0.1, R1);
  const safeR2 = Math.max(0.1, R2);
  const safeR3 = Math.max(0.1, R3);
  const safeR4 = Math.max(0.1, R4);
  const safeR5 = Math.max(0.1, R5);

  // Conductance matrix elements: [G][V] = [I]
  // Node A: Va(1/R1 + 1/R2 + 1/R3) - Vb(1/R2) = Vs1/R1
  // Node B: -Va(1/R2) + Vb(1/R2 + 1/R4 + 1/R5) = Vs2/R4
  const G11 = (1 / safeR1) + (1 / safeR2) + (1 / safeR3);
  const G12 = -1 / safeR2;
  const G21 = -1 / safeR2;
  const G22 = (1 / safeR2) + (1 / safeR4) + (1 / safeR5);

  const I1_vec = Vs1 / safeR1;
  const I2_vec = Vs2 / safeR4;

  const detG = G11 * G22 - G12 * G21;

  let Va = 0;
  let Vb = 0;

  if (Math.abs(detG) > 1e-9) {
    Va = (I1_vec * G22 - I2_vec * G12) / detG;
    Vb = (G11 * I2_vec - G21 * I1_vec) / detG;
  }

  // Branch currents
  const Ir1 = (Vs1 - Va) / safeR1;
  const Ir2 = (Va - Vb) / safeR2;
  const Ir3 = Va / safeR3;
  const Ir4 = (Vs2 - Vb) / safeR4;
  const Ir5 = Vb / safeR5;

  const kclNodeA = Ir1 - Ir2 - Ir3;
  const kclNodeB = Ir4 + Ir2 - Ir5;

  const handleReset = () => {
    setVs1(12);
    setVs2(6);
    setR1(4);
    setR2(6);
    setR3(12);
    setR4(3);
    setR5(8);
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={t.calloutTitle}
      calloutText={t.calloutText}
      formulaText="[G] · [V] = [I]   ⇒   G₁₁Va + G₁₂Vb = I₁ ,  G₂₁Va + G₂₂Vb = I₂"
    >
      <div className="space-y-6 text-slate-100">
        {/* SVG Circuit Schematic */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-inner flex flex-col items-center justify-center">
          <svg viewBox="0 0 600 280" className="w-full max-w-2xl h-auto">
            {/* Ground Rail */}
            <line x1="80" y1="230" x2="520" y2="230" stroke="#475569" strokeWidth="3" />
            
            {/* Ground Symbol */}
            <g transform="translate(300, 230)">
              <line x1="0" y1="0" x2="0" y2="15" stroke="#38bdf8" strokeWidth="3" />
              <line x1="-16" y1="15" x2="16" y2="15" stroke="#38bdf8" strokeWidth="3" />
              <line x1="-10" y1="20" x2="10" y2="20" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="-4" y1="25" x2="4" y2="25" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="38" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Ref (0V)</text>
            </g>

            {/* Left Branch: Vs1 + R1 to Node A */}
            <line x1="80" y1="230" x2="80" y2="70" stroke="#64748b" strokeWidth="2.5" />
            <line x1="80" y1="70" x2="220" y2="70" stroke="#64748b" strokeWidth="2.5" />
            
            {/* Vs1 Source */}
            <g transform="translate(80, 160)">
              <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">+</text>
              <text x="0" y="11" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">-</text>
              <text x="-25" y="4" textAnchor="end" fill="#38bdf8" fontSize="11" fontWeight="bold">{Vs1}V</text>
            </g>

            {/* R1 Resistor */}
            <g transform="translate(140, 70)">
              <rect x="-22" y="-12" width="44" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">R₁={R1}Ω</text>
            </g>

            {/* Node A (Va) Junction */}
            <circle cx="220" cy="70" r="8" fill="#eab308" stroke="#fef08a" strokeWidth="2" />
            <rect x="195" y="30" width="50" height="22" fill="#854d0e" stroke="#fde047" strokeWidth="1.5" rx="4" />
            <text x="220" y="45" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold">Va = {Va.toFixed(2)}V</text>

            {/* Middle Branch R2 between Va and Vb */}
            <line x1="220" y1="70" x2="380" y2="70" stroke="#64748b" strokeWidth="2.5" />
            <g transform="translate(300, 70)">
              <rect x="-24" y="-12" width="48" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">R₂={R2}Ω</text>
            </g>

            {/* Node B (Vb) Junction */}
            <circle cx="380" cy="70" r="8" fill="#eab308" stroke="#fef08a" strokeWidth="2" />
            <rect x="355" y="30" width="50" height="22" fill="#854d0e" stroke="#fde047" strokeWidth="1.5" rx="4" />
            <text x="380" y="45" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold">Vb = {Vb.toFixed(2)}V</text>

            {/* Branch R3 from Va to Ground */}
            <line x1="220" y1="70" x2="220" y2="230" stroke="#64748b" strokeWidth="2.5" />
            <g transform="translate(220, 150)">
              <rect x="-12" y="-22" width="24" height="44" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="18" y="4" fill="#34d399" fontSize="11" fontWeight="bold">R₃={R3}Ω</text>
            </g>

            {/* Right Branch: Vs2 + R4 to Node B */}
            <line x1="520" y1="230" x2="520" y2="70" stroke="#64748b" strokeWidth="2.5" />
            <line x1="520" y1="70" x2="380" y2="70" stroke="#64748b" strokeWidth="2.5" />

            {/* Vs2 Source */}
            <g transform="translate(520, 160)">
              <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">+</text>
              <text x="0" y="11" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">-</text>
              <text x="25" y="4" textAnchor="start" fill="#38bdf8" fontSize="11" fontWeight="bold">{Vs2}V</text>
            </g>

            {/* R4 Resistor */}
            <g transform="translate(450, 70)">
              <rect x="-22" y="-12" width="44" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">R₄={R4}Ω</text>
            </g>

            {/* Branch R5 from Vb to Ground */}
            <line x1="380" y1="70" x2="380" y2="230" stroke="#64748b" strokeWidth="2.5" />
            <g transform="translate(380, 150)">
              <rect x="-12" y="-22" width="24" height="44" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="18" y="4" fill="#34d399" fontSize="11" fontWeight="bold">R₅={R5}Ω</text>
            </g>

            {/* Current Labels with Directional Badges */}
            <text x="140" y="102" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">I_R1={Ir1.toFixed(2)}A</text>
            <text x="300" y="102" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">I_R2={Ir2.toFixed(2)}A</text>
            <text x="220" y="190" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">I_R3={Ir3.toFixed(2)}A</text>
            <text x="450" y="102" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">I_R4={Ir4.toFixed(2)}A</text>
            <text x="380" y="190" textAnchor="middle" fill="#a7f3d0" fontSize="10" fontWeight="bold">I_R5={Ir5.toFixed(2)}A</text>
          </svg>
        </div>

        {/* Interactive Controls & Live Solved Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Controls Panel (Hidden in print) */}
          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4 print:hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                {t.circuitControls}
              </h4>
              <button
                onClick={() => setShowSupernodeNote(!showSupernodeNote)}
                className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 flex items-center gap-1.5 border border-amber-500/30 transition-colors"
              >
                <Layers className="w-3.5 h-3.5" />
                {t.supernodeTitle.split(' ')[0]}
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span>{t.vs1Label}</span>
                  <span className="font-mono text-cyan-300 font-bold">{Vs1} V</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="1"
                  value={Vs1}
                  onChange={(e) => setVs1(Number(e.target.value))}
                  aria-label={t.vs1Label}
                  className="w-full accent-cyan-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span>{t.vs2Label}</span>
                  <span className="font-mono text-cyan-300 font-bold">{Vs2} V</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="1"
                  value={Vs2}
                  onChange={(e) => setVs2(Number(e.target.value))}
                  aria-label={t.vs2Label}
                  className="w-full accent-cyan-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>{t.r1Label.split(' ')[0]} {t.r1Label.split(' ')[1]}</span>
                    <span className="font-mono text-emerald-400 font-bold">{R1} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={R1}
                    onChange={(e) => setR1(Number(e.target.value))}
                    aria-label={t.r1Label}
                    className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>{t.r2Label.split(' ')[0]} {t.r2Label.split(' ')[1]}</span>
                    <span className="font-mono text-emerald-400 font-bold">{R2} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={R2}
                    onChange={(e) => setR2(Number(e.target.value))}
                    aria-label={t.r2Label}
                    className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>{t.r3Label.split(' ')[0]} {t.r3Label.split(' ')[1]}</span>
                    <span className="font-mono text-emerald-400 font-bold">{R3} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={R3}
                    onChange={(e) => setR3(Number(e.target.value))}
                    aria-label={t.r3Label}
                    className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span>{t.r4Label.split(' ')[0]} {t.r4Label.split(' ')[1]}</span>
                    <span className="font-mono text-emerald-400 font-bold">{R4} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={R4}
                    onChange={(e) => setR4(Number(e.target.value))}
                    aria-label={t.r4Label}
                    className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Solved Results Panel */}
          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
            <h4 className="text-sm font-semibold text-amber-400 border-b border-slate-800 pb-2">
              {t.solvedNodeVoltages}
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-950 rounded-lg border border-amber-500/30 text-center">
                <span className="text-xs text-slate-400 block">{t.nodeA}</span>
                <span className="text-xl font-bold font-mono text-amber-300">{Va.toFixed(3)} V</span>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-amber-500/30 text-center">
                <span className="text-xs text-slate-400 block">{t.nodeB}</span>
                <span className="text-xl font-bold font-mono text-amber-300">{Vb.toFixed(3)} V</span>
              </div>
            </div>

            {/* Branch Currents Summary */}
            <div className="space-y-1.5 text-xs font-mono">
              <span className="text-slate-400 block font-sans font-semibold border-b border-slate-800/60 pb-1">{t.branchCurrents}</span>
              <div className="grid grid-cols-2 gap-2 text-slate-300">
                <div>{t.ir1}: <span className="text-emerald-400 font-bold">{Ir1.toFixed(3)} A</span></div>
                <div>{t.ir2}: <span className="text-emerald-400 font-bold">{Ir2.toFixed(3)} A</span></div>
                <div>{t.ir3}: <span className="text-emerald-400 font-bold">{Ir3.toFixed(3)} A</span></div>
                <div>{t.ir4}: <span className="text-emerald-400 font-bold">{Ir4.toFixed(3)} A</span></div>
                <div className="col-span-2">{t.ir5}: <span className="text-emerald-400 font-bold">{Ir5.toFixed(3)} A</span></div>
              </div>
            </div>

            {/* KCL Residual Check */}
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-200 font-medium">{t.balanced}</span>
              </div>
              <span className="font-mono text-emerald-400">ΔI = {Math.abs(kclNodeA).toFixed(4)} A</span>
            </div>
          </div>
        </div>

        {/* Dynamic Matrix Formulation */}
        <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-3">
          <h4 className="text-sm font-semibold text-cyan-300 flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400" />
            {t.formulationTitle}
          </h4>
          <div className="p-4 bg-slate-950 rounded-lg font-mono text-xs space-y-2 overflow-x-auto text-slate-300">
            <div>
              <span className="text-cyan-400">Node A KCL:</span> ({Vs1} - Va)/{R1} = Va/{R3} + (Va - Vb)/{R2}
              <br />
              &nbsp;&nbsp;⇒ Va·({(1/safeR1).toFixed(3)} + {(1/safeR2).toFixed(3)} + {(1/safeR3).toFixed(3)}) - Vb·({(1/safeR2).toFixed(3)}) = {(Vs1/safeR1).toFixed(3)}
            </div>
            <div>
              <span className="text-cyan-400">Node B KCL:</span> ({Vs2} - Vb)/{R4} + (Va - Vb)/{R2} = Vb/{R5}
              <br />
              &nbsp;&nbsp;⇒ -Va·({(1/safeR2).toFixed(3)}) + Vb·({(1/safeR2).toFixed(3)} + {(1/safeR4).toFixed(3)} + {(1/safeR5).toFixed(3)}) = {(Vs2/safeR4).toFixed(3)}
            </div>
            <div className="pt-2 border-t border-slate-800 text-amber-300">
              <span className="text-slate-400">Matrix Form:</span>
              <br />
              [ {G11.toFixed(3)} &nbsp; {G12.toFixed(3)} ] [ Va ] = [ {I1_vec.toFixed(3)} ]
              <br />
              [ {G21.toFixed(3)} &nbsp; {G22.toFixed(3)} ] [ Vb ] = [ {I2_vec.toFixed(3)} ]
            </div>
          </div>
        </div>

        {/* Supernode Educational Note (Toggleable) */}
        {showSupernodeNote && (
          <div className="p-4 bg-amber-950/40 border border-amber-500/40 rounded-xl space-y-2 text-xs">
            <h5 className="font-semibold text-amber-300 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              {t.supernodeTitle}
            </h5>
            <p className="text-amber-100/90 leading-relaxed">{t.supernodeText}</p>
          </div>
        )}
      </div>
    </InteractiveSimulationCard>
  );
};
