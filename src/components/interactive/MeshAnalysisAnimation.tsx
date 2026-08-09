import React, { useState } from 'react';
import { Sliders, RotateCcw, CheckCircle2, Info, Compass } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface MeshAnalysisAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Mesh Analysis Educational Solver (2-Mesh Network)',
    subtitle: 'Systematically apply Kirchhoff\'s Voltage Law (KVL) around independent planar loops using mesh currents.',
    circuitControls: 'Circuit Parameters (DC Sources & Resistors)',
    vs1Label: 'Voltage Source V_s1 (Mesh 1 Drive)',
    vs2Label: 'Voltage Source V_s2 (Mesh 2 Drive)',
    r1Label: 'Resistor R₁ (Mesh 1 Exclusive)',
    r2Label: 'Resistor R₂ (Mesh 2 Exclusive)',
    rmLabel: 'Shared Resistor R_m (Between Mesh 1 & 2)',
    solvedMeshCurrents: 'Solved Independent Mesh Currents',
    mesh1Current: 'Mesh 1 Current (I₁ Clockwise)',
    mesh2Current: 'Mesh 2 Current (I₂ Clockwise)',
    sharedBranchCurrent: 'Shared Branch Current (I_Rm = I₁ - I₂)',
    kvlResidual: 'KVL Residual Check',
    kvlMesh1: 'Mesh 1 KVL: V_s1 - I₁R₁ - (I₁ - I₂)R_m',
    kvlMesh2: 'Mesh 2 KVL: - (I₂ - I₁)R_m - I₂R₂ - V_s2',
    formulationTitle: 'Dynamic Matrix Formulation [R][I] = [V]',
    reset: 'Reset Network',
    calloutTitle: 'Mesh Analysis Method Steps',
    calloutText: '1. Identify independent planar meshes. 2. Assign clockwise mesh currents (I1, I2). 3. Express voltage drop across shared resistor as R_m(I1 - I2). 4. Apply KVL around each mesh and solve [R][I] = [V].',
    supermeshTitle: 'Supermesh Concept (Static Educational Note)',
    supermeshText: 'A Supermesh is formed when a current source (independent or dependent) is shared between two adjacent meshes. To analyze: 1. Remove the current source branch to create a combined supermesh. 2. Write 1 supermesh KVL equation. 3. Write 1 constraint equation: I1 - I2 = I_source.',
    balanced: 'KVL Verified (ΣV = 0 V)',
  },
  hi: {
    title: 'मेष विश्लेषण शिक्षण सॉल्वर (2-मेष नेटवर्क)',
    subtitle: 'मेष धाराओं का उपयोग करके स्वतंत्र समतलीय लूपों पर किरचॉफ के वोल्टेज नियम (KVL) को व्यवस्थित रूप से लागू करें।',
    circuitControls: 'सर्किट पैरामीटर (डीसी स्रोत एवं प्रतिरोधक)',
    vs1Label: 'वोल्टेज स्रोत V_s1 (मेष 1 ड्राइव)',
    vs2Label: 'वोल्टेज स्रोत V_s2 (मेष 2 ड्राइव)',
    r1Label: 'प्रतिरोधक R₁ (केवल मेष 1)',
    r2Label: 'प्रतिरोधक R₂ (केवल मेष 2)',
    rmLabel: 'साझा प्रतिरोधक R_m (मेष 1 और 2 के बीच)',
    solvedMeshCurrents: 'हल की गई स्वतंत्र मेष धाराएँ',
    mesh1Current: 'मेष 1 धारा (I₁ दक्षिणावर्त)',
    mesh2Current: 'मेष 2 धारा (I₂ दक्षिणावर्त)',
    sharedBranchCurrent: 'साझा शाखा धारा (I_Rm = I₁ - I₂)',
    kvlResidual: 'KVL अवशिष्ट जाँच',
    kvlMesh1: 'मेष 1 KVL: V_s1 - I₁R₁ - (I₁ - I₂)R_m',
    kvlMesh2: 'मेष 2 KVL: - (I₂ - I₁)R_m - I₂R₂ - V_s2',
    formulationTitle: 'डायनामिक मैट्रिक्स समीकरण [R][I] = [V]',
    reset: 'नेटवर्क रीसेट करें',
    calloutTitle: 'मेष विश्लेषण विधि के चरण',
    calloutText: '1. स्वतंत्र समतलीय मेषों की पहचान करें। 2. दक्षिणावर्त मेष धाराएँ (I1, I2) असाइन करें। 3. साझा प्रतिरोधक पर वोल्टेज ड्रॉप R_m(I1 - I2) के रूप में लिखें। 4. प्रत्येक मेष में KVL लागू करें और [R][I] = [V] हल करें।',
    supermeshTitle: 'सुपरमेष अवधारणा (शैक्षणिक टिप्पणी)',
    supermeshText: 'सुपरमेष तब बनता है जब दो आसन्न मेषों के बीच एक धारा स्रोत साझा होता है। विश्लेषण के लिए: 1. धारा स्रोत शाखा को हटाकर सुपरमेष बनाएँ। 2. 1 सुपरमेष KVL समीकरण लिखें। 3. 1 बाधा समीकरण लिखें: I1 - I2 = I_source।',
    balanced: 'KVL सत्यापित (ΣV = 0 V)',
  },
  bn: {
    title: 'মেশ অ্যানালিসিস শিক্ষামূলক সলভার (২-মেশ নেটওয়ার্ক)',
    subtitle: 'মেশ কারেন্ট ব্যবহার করে স্বাধীন সমতলীয় লুপগুলোতে কার্শফের ভোল্টেজ সূত্র (KVL) প্রণালীবদ্ধভাবে প্রয়োগ করুন।',
    circuitControls: 'সার্কিট প্যারামিটার (ডিসি সোর্স ও রেজিস্টর)',
    vs1Label: 'ভোল্টেজ সোর্স V_s1 (মেশ ১ ড্রাইভ)',
    vs2Label: 'ভোল্টেজ সোর্স V_s2 (মেশ ২ ড্রাইভ)',
    r1Label: 'রেজিস্টর R₁ (একমাত্র মেশ ১)',
    r2Label: 'রেজিস্টর R₂ (একমাত্র মেশ ২)',
    rmLabel: 'শেয়ার্ড রেজিস্টর R_m (মেশ ১ ও ২ এর মাঝে)',
    solvedMeshCurrents: 'নির্ণীত স্বাধীন মেশ কারেন্টসমূহ',
    mesh1Current: 'মেশ ১ কারেন্ট (I₁ ঘড়ির কাঁটার দিকে)',
    mesh2Current: 'মেশ ২ কারেন্ট (I₂ ঘড়ির কাঁটার দিকে)',
    sharedBranchCurrent: 'শেয়ার্ড ব্রাঞ্চ কারেন্ট (I_Rm = I₁ - I₂)',
    kvlResidual: 'KVL অবশিষ্টাংশ পরীক্ষা',
    kvlMesh1: 'মেশ ১ KVL: V_s1 - I₁R₁ - (I₁ - I₂)R_m',
    kvlMesh2: 'মেশ ২ KVL: - (I₂ - I₁)R_m - I₂R₂ - V_s2',
    formulationTitle: 'ডাইনামিক ম্যাট্রিক্স সমীকরণ [R][I] = [V]',
    reset: 'নেটওয়ার্ক রিসেট করুন',
    calloutTitle: 'মেশ অ্যানালিসিস পদ্ধতির ধাপসমূহ',
    calloutText: '১. স্বাধীন সমতলীয় মেশ চিহ্নিত করুন। ২. ঘড়ির কাঁটার দিকে মেশ কারেন্ট (I1, I2) ধরুন। ৩. শেয়ার্ড রেজিস্টরের বিভব পতন R_m(I1 - I2) রূপে লিখুন। ৪. KVL প্রয়োগ করে [R][I] = [V] সমাধান করুন।',
    supermeshTitle: 'সুপারমেশ ধারণা (শিক্ষামূলক নোট)',
    supermeshText: 'দুটি পাশাপাশি মেশের মাঝে কারেন্ট সোর্স থাকলে সুপারমেশ তৈরি হয়। বিশ্লেষণের জন্য: ১. কারেন্ট সোর্স ব্রাঞ্চ সরিয়ে সুপারমেশ গঠন করুন। ২. ১ টি সুপারমেশ KVL সমীকরণ লিখুন। ৩. ১ টি শর্ত সমীকরণ লিখুন: I1 - I2 = I_source।',
    balanced: 'KVL প্রমাণিত (ΣV = 0 V)',
  }
};

export const MeshAnalysisAnimation: React.FC<MeshAnalysisAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const reducedMotion = useReducedMotion();

  // State for circuit elements
  const [Vs1, setVs1] = useState<number>(20);
  const [Vs2, setVs2] = useState<number>(10);
  const [R1, setR1] = useState<number>(4);
  const [R2, setR2] = useState<number>(6);
  const [Rm, setRm] = useState<number>(2);

  const [showSupermeshNote, setShowSupermeshNote] = useState<boolean>(false);

  // Safe non-zero resistances
  const safeR1 = Math.max(0.1, R1);
  const safeR2 = Math.max(0.1, R2);
  const safeRm = Math.max(0.1, Rm);

  // Resistance matrix: [R][I] = [V]
  // Mesh 1 KVL: (R1 + Rm) I1 - Rm I2 = Vs1
  // Mesh 2 KVL: -Rm I1 + (R2 + Rm) I2 = -Vs2
  const R11 = safeR1 + safeRm;
  const R12 = -safeRm;
  const R21 = -safeRm;
  const R22 = safeR2 + safeRm;

  const V1_vec = Vs1;
  const V2_vec = -Vs2;

  const detR = R11 * R22 - R12 * R21;

  let I1 = 0;
  let I2 = 0;

  if (Math.abs(detR) > 1e-9) {
    I1 = (V1_vec * R22 - V2_vec * R12) / detR;
    I2 = (R11 * V2_vec - R21 * V1_vec) / detR;
  }

  const Irm = I1 - I2; // downward current through Rm

  const kvl1Residual = Vs1 - I1 * safeR1 - Irm * safeRm;
  const kvl2Residual = -Irm * safeRm - I2 * safeR2 - Vs2;

  const handleReset = () => {
    setVs1(20);
    setVs2(10);
    setR1(4);
    setR2(6);
    setRm(2);
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
      formulaText="[R] · [I] = [V]   ⇒   (R₁ + R_m)I₁ - R_m I₂ = V_s1  ,   -R_m I₁ + (R₂ + R_m)I₂ = -V_s2"
    >
      <div className="space-y-6 text-slate-100">
        {/* SVG Circuit Schematic */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-inner flex flex-col items-center justify-center">
          <svg viewBox="0 0 600 280" className="w-full max-w-2xl h-auto">
            {/* Outer Box Loop */}
            <rect x="60" y="40" width="480" height="190" rx="6" fill="none" stroke="#475569" strokeWidth="3" />
            
            {/* Middle Shared Branch */}
            <line x1="300" y1="40" x2="300" y2="230" stroke="#475569" strokeWidth="3" />

            {/* Voltage Source Vs1 (Left) */}
            <g transform="translate(60, 135)">
              <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">+</text>
              <text x="0" y="11" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">-</text>
              <text x="-25" y="4" textAnchor="end" fill="#38bdf8" fontSize="11" fontWeight="bold">V_s1={Vs1}V</text>
            </g>

            {/* Resistor R1 (Top Left) */}
            <g transform="translate(180, 40)">
              <rect x="-24" y="-12" width="48" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">R₁={R1}Ω</text>
            </g>

            {/* Shared Resistor Rm (Middle Branch) */}
            <g transform="translate(300, 135)">
              <rect x="-12" y="-24" width="24" height="48" fill="#1e293b" stroke="#eab308" strokeWidth="2" rx="3" />
              <text x="20" y="4" fill="#fef08a" fontSize="11" fontWeight="bold">R_m={Rm}Ω</text>
            </g>

            {/* Resistor R2 (Top Right) */}
            <g transform="translate(420, 40)">
              <rect x="-24" y="-12" width="48" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
              <text x="0" y="3" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">R₂={R2}Ω</text>
            </g>

            {/* Voltage Source Vs2 (Right) */}
            <g transform="translate(540, 135)">
              <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">+</text>
              <text x="0" y="11" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">-</text>
              <text x="25" y="4" textAnchor="start" fill="#38bdf8" fontSize="11" fontWeight="bold">V_s2={Vs2}V</text>
            </g>

            {/* Mesh 1 Clockwise Loop Indicator */}
            <g transform="translate(180, 135)">
              <path d="M -25,0 A 25,25 0 1,1 25,0" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
              <polygon points="25,0 20,-6 28,-3" fill="#f59e0b" />
              <text x="0" y="5" textAnchor="middle" fill="#fde047" fontSize="12" fontWeight="bold">Mesh 1 (I₁)</text>
              <text x="0" y="20" textAnchor="middle" fill="#34d399" fontSize="11" fontMonospace="true">{I1.toFixed(3)} A</text>
            </g>

            {/* Mesh 2 Clockwise Loop Indicator */}
            <g transform="translate(420, 135)">
              <path d="M -25,0 A 25,25 0 1,1 25,0" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4 2" />
              <polygon points="25,0 20,-6 28,-3" fill="#f59e0b" />
              <text x="0" y="5" textAnchor="middle" fill="#fde047" fontSize="12" fontWeight="bold">Mesh 2 (I₂)</text>
              <text x="0" y="20" textAnchor="middle" fill="#34d399" fontSize="11" fontMonospace="true">{I2.toFixed(3)} A</text>
            </g>

            {/* Shared Current Arrow */}
            <g transform="translate(300, 200)">
              <text x="-40" y="-10" fill="#fbbf24" fontSize="10" fontWeight="bold">I_Rm = {Irm.toFixed(3)} A</text>
            </g>
          </svg>
        </div>

        {/* Controls and Solved Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Controls Panel (Hidden in print) */}
          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4 print:hidden">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h4 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                {t.circuitControls}
              </h4>
              <button
                onClick={() => setShowSupermeshNote(!showSupermeshNote)}
                className="text-xs px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-300 flex items-center gap-1.5 border border-amber-500/30 transition-colors"
              >
                <Compass className="w-3.5 h-3.5" />
                {t.supermeshTitle.split(' ')[0]}
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
                  max="40"
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
                  max="40"
                  step="1"
                  value={Vs2}
                  onChange={(e) => setVs2(Number(e.target.value))}
                  aria-label={t.vs2Label}
                  className="w-full accent-cyan-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
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
                    <span>{t.rmLabel.split(' ')[0]} {t.rmLabel.split(' ')[1]}</span>
                    <span className="font-mono text-amber-400 font-bold">{Rm} Ω</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={Rm}
                    onChange={(e) => setRm(Number(e.target.value))}
                    aria-label={t.rmLabel}
                    className="w-full accent-amber-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Solved Results Panel */}
          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 space-y-4">
            <h4 className="text-sm font-semibold text-amber-400 border-b border-slate-800 pb-2">
              {t.solvedMeshCurrents}
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-950 rounded-lg border border-emerald-500/30 text-center">
                <span className="text-xs text-slate-400 block">{t.mesh1Current}</span>
                <span className="text-xl font-bold font-mono text-emerald-300">{I1.toFixed(3)} A</span>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-emerald-500/30 text-center">
                <span className="text-xs text-slate-400 block">{t.mesh2Current}</span>
                <span className="text-xl font-bold font-mono text-emerald-300">{I2.toFixed(3)} A</span>
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-lg border border-amber-500/30 text-center">
              <span className="text-xs text-slate-400 block">{t.sharedBranchCurrent}</span>
              <span className="text-lg font-bold font-mono text-amber-300">{Irm.toFixed(3)} A</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">I_Rm = I₁ - I₂ = {I1.toFixed(3)} - ({I2.toFixed(3)})</span>
            </div>

            {/* KVL Residual Check */}
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-200 font-medium">{t.balanced}</span>
              </div>
              <span className="font-mono text-emerald-400">ΔV = {Math.abs(kvl1Residual).toFixed(4)} V</span>
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
              <span className="text-cyan-400">Mesh 1 KVL:</span> ({R1} + {Rm})I₁ - {Rm}I₂ = {Vs1}
              <br />
              &nbsp;&nbsp;⇒ {R11}I₁ - {-R12}I₂ = {Vs1}
            </div>
            <div>
              <span className="text-cyan-400">Mesh 2 KVL:</span> -{Rm}I₁ + ({R2} + {Rm})I₂ = -{Vs2}
              <br />
              &nbsp;&nbsp;⇒ -{-R21}I₁ + {R22}I₂ = {-Vs2}
            </div>
            <div className="pt-2 border-t border-slate-800 text-amber-300">
              <span className="text-slate-400">Matrix Form:</span>
              <br />
              [ {R11.toFixed(1)} &nbsp; {R12.toFixed(1)} ] [ I₁ ] = [ {V1_vec.toFixed(1)} ]
              <br />
              [ {R21.toFixed(1)} &nbsp; {R22.toFixed(1)} ] [ I₂ ] = [ {V2_vec.toFixed(1)} ]
            </div>
          </div>
        </div>

        {/* Supermesh Educational Note (Toggleable) */}
        {showSupermeshNote && (
          <div className="p-4 bg-amber-950/40 border border-amber-500/40 rounded-xl space-y-2 text-xs">
            <h5 className="font-semibold text-amber-300 flex items-center gap-2">
              <Compass className="w-4 h-4" />
              {t.supermeshTitle}
            </h5>
            <p className="text-amber-100/90 leading-relaxed">{t.supermeshText}</p>
          </div>
        )}
      </div>
    </InteractiveSimulationCard>
  );
};
