import React, { useState } from 'react';
import { Sliders, RotateCcw, CheckCircle2, Split, ArrowDownUp, Info } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';

interface DividerNetworkAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Voltage & Current Division Simulator',
    subtitle: 'Explore multi-stage voltage drops in series networks and current splitting across parallel branches.',
    modeVoltage: 'MODE A: Voltage Division (Series)',
    modeCurrent: 'MODE B: Current Division (Parallel)',
    voltageControls: 'Series Voltage Divider Parameters',
    currentControls: 'Parallel Current Divider Parameters',
    vsLabel: 'Source Voltage (V_s)',
    r1Label: 'Resistor R₁',
    r2Label: 'Resistor R₂',
    r3Label: 'Resistor R₃',
    itotalLabel: 'Total Input Current (I_total)',
    resultsTitle: 'Calculated Circuit Quantities',
    rtotalLabel: 'Total Equivalent Resistance (R_total):',
    itotalCalcLabel: 'Circuit Current (I_total):',
    reqLabel: 'Equivalent Resistance (R_eq):',
    v1Label: 'Voltage Drop V₁ across R₁:',
    v2Label: 'Voltage Drop V₂ across R₂:',
    v3Label: 'Voltage Drop V₃ across R₃:',
    i1Label: 'Branch Current I₁ through R₁:',
    i2Label: 'Branch Current I₂ through R₂:',
    i3Label: 'Branch Current I₃ through R₃:',
    sumCheck: 'Sum Check Verification:',
    voltageFormulaNote: 'Voltage Divider Rule: V_x = V_s × (R_x / R_total). Voltage drops in direct proportion to resistance.',
    currentFormulaNote2: 'Current Divider Rule (2 Branches): I₁ = I_total × [R₂ / (R₁ + R₂)]. Notice R₂ is in the numerator because smaller resistance draws MORE current!',
    currentFormulaNote3: 'Current Divider Rule (General Conductance Form): I_x = I_total × (G_x / G_total) where G = 1/R.',
    calloutTitle: 'Divider Rules in Network Analysis',
    calloutText: 'Voltage division applies to elements sharing the SAME current (series). Current division applies to elements sharing the SAME voltage (parallel). In multi-stage networks, reduce sub-blocks first, apply division to find section quantities, then back-substitute.',
  },
  hi: {
    title: 'वोल्टेज एवं धारा विभाजन सिमुलेटर',
    subtitle: 'श्रेणी परिपथों में वोल्टेज ड्रॉप और समांतर शाखाओं में धारा विभाजन का अन्वेषण करें।',
    modeVoltage: 'मोड A: वोल्टेज विभाजन (श्रेणी)',
    modeCurrent: 'मोड B: धारा विभाजन (समांतर)',
    voltageControls: 'श्रेणी वोल्टेज डिवाइडर पैरामीटर',
    currentControls: 'समांतर धारा डिवाइडर पैरामीटर',
    vsLabel: 'स्रोत वोल्टेज (V_s)',
    r1Label: 'प्रतिरोधक R₁',
    r2Label: 'प्रतिरोधक R₂',
    r3Label: 'प्रतिरोधक R₃',
    itotalLabel: 'कुल इनपुट धारा (I_total)',
    resultsTitle: 'गणना की गई परिपथ राशियाँ',
    rtotalLabel: 'कुल समतुल्य प्रतिरोध (R_total):',
    itotalCalcLabel: 'परिपथ धारा (I_total):',
    reqLabel: 'समतुल्य प्रतिरोध (R_eq):',
    v1Label: 'R₁ पर वोल्टेज ड्रॉप V₁:',
    v2Label: 'R₂ पर वोल्टेज ड्रॉप V₂:',
    v3Label: 'R₃ पर वोल्टेज ड्रॉप V₃:',
    i1Label: 'R₁ से शाखा धारा I₁:',
    i2Label: 'R₂ से शाखा धारा I₂:',
    i3Label: 'R₃ से शाखा धारा I₃:',
    sumCheck: 'योग जाँच सत्यापन:',
    voltageFormulaNote: 'वोल्टेज डिवाइडर नियम: V_x = V_s × (R_x / R_total)। वोल्टेज ड्रॉप प्रतिरोध के सीधे समानुपाती होता है।',
    currentFormulaNote2: 'धारा डिवाइडर नियम (2 शाखाएँ): I₁ = I_total × [R₂ / (R₁ + R₂)]। ध्यान दें कि R₂ अंश में है क्योंकि कम प्रतिरोध अधिक धारा खींचता है!',
    currentFormulaNote3: 'धारा डिवाइडर नियम (सामान्य चालकता रूप): I_x = I_total × (G_x / G_total) जहाँ G = 1/R।',
    calloutTitle: 'नेटवर्क विश्लेषण में डिवाइडर नियम',
    calloutText: 'वोल्टेज विभाजन समान धारा साझा करने वाले श्रेणी घटकों पर लागू होता है। धारा विभाजन समान वोल्टेज साझा करने वाले समांतर घटकों पर लागू होता है।',
  },
  bn: {
    title: 'ভোল্টেজ ও কারেন্ট ডিভিশন সিমুলেটর',
    subtitle: 'সিরিজ সার্কিটে ভোল্টেজ পতন এবং প্যারালাল ব্রাঞ্চে কারেন্ট ভাগের বিশ্লেষণ করুন।',
    modeVoltage: 'মোড A: ভোল্টেজ ডিভিশন (সিরিজ)',
    modeCurrent: 'মোড B: কারেন্ট ডিভিশন (প্যারালাল)',
    voltageControls: 'সিরিজ ভোল্টেজ ডিভাইডার প্যারামিটার',
    currentControls: 'প্যারালাল কারেন্ট ডিভাইডার প্যারামিটার',
    vsLabel: 'সোর্স ভোল্টেজ (V_s)',
    r1Label: 'রেজিস্টর R₁',
    r2Label: 'রেজিস্টর R₂',
    r3Label: 'রেজিস্টর R₃',
    itotalLabel: 'মোট ইনপুট কারেন্ট (I_total)',
    resultsTitle: 'গণনাকৃত রাশিমালা',
    rtotalLabel: 'মোট সমতুল্য রেজিস্ট্যান্স (R_total):',
    itotalCalcLabel: 'সার্কিট কারেন্ট (I_total):',
    reqLabel: 'সমতুল্য রেজিস্ট্যান্স (R_eq):',
    v1Label: 'R₁ এর ভোল্টেজ পতন V₁:',
    v2Label: 'R₂ এর ভোল্টেজ পতন V₂:',
    v3Label: 'R₃ এর ভোল্টেজ পতন V₃:',
    i1Label: 'R₁ এর ব্রাঞ্চ কারেন্ট I₁:',
    i2Label: 'R₂ এর ব্রাঞ্চ কারেন্ট I₂:',
    i3Label: 'R₃ এর ব্রাঞ্চ কারেন্ট I₃:',
    sumCheck: 'যোগফল সত্যতা পরীক্ষা:',
    voltageFormulaNote: 'ভোল্টেজ ডিভাইডার রুল: V_x = V_s × (R_x / R_total)। ভোল্টেজ পতন রেজিস্ট্যান্সের সাথে সরাসরি সমানুপাতিক।',
    currentFormulaNote2: 'কারেন্ট ডিভাইডার রুল (২ ব্রাঞ্চ): I₁ = I_total × [R₂ / (R₁ + R₂)]। মনে রাখুন, লবে বিপরীত রেজিস্ট্যান্স R₂ থাকে কারণ কম রোধে বেশি কারেন্ট যায়!',
    currentFormulaNote3: 'কারেন্ট ডিভাইডার রুল (সাধারণ পরিবাহিতা ফর্ম): I_x = I_total × (G_x / G_total) যেখানে G = 1/R।',
    calloutTitle: 'নেটওয়ার্ক বিশ্লেষণে ডিভাইডার রুল',
    calloutText: 'ভোল্টেজ ডিভিশন সমান কারেন্ট প্রবাহী সিরিজ উপাদানে প্রযোজ্য। কারেন্ট ডিভিশন সমান ভোল্টেজ বিশিষ্ট প্যারালাল উপাদানে প্রযোজ্য।',
  }
};

export const DividerNetworkAnimation: React.FC<DividerNetworkAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  // Mode: 'voltage' or 'current'
  const [mode, setMode] = useState<'voltage' | 'current'>('voltage');

  // Mode A Inputs
  const [Vs, setVs] = useState<number>(24);
  const [R1, setR1] = useState<number>(10);
  const [R2, setR2] = useState<number>(20);
  const [R3, setR3] = useState<number>(30);

  // Mode B Inputs
  const [Itotal, setItotal] = useState<number>(12);
  const [Rp1, setRp1] = useState<number>(10);
  const [Rp2, setRp2] = useState<number>(15);
  const [Rp3, setRp3] = useState<number>(30);
  const [numBranches, setNumBranches] = useState<2 | 3>(2);

  // Safe values
  const safeR1 = Math.max(0.1, R1);
  const safeR2 = Math.max(0.1, R2);
  const safeR3 = Math.max(0.1, R3);

  const safeRp1 = Math.max(0.1, Rp1);
  const safeRp2 = Math.max(0.1, Rp2);
  const safeRp3 = Math.max(0.1, Rp3);

  // Mode A calculations (Voltage Division)
  const RtotalA = safeR1 + safeR2 + safeR3;
  const IcalcA = Vs / RtotalA;
  const V1 = Vs * (safeR1 / RtotalA);
  const V2 = Vs * (safeR2 / RtotalA);
  const V3 = Vs * (safeR3 / RtotalA);
  const sumV = V1 + V2 + V3;

  // Mode B calculations (Current Division)
  const G1 = 1 / safeRp1;
  const G2 = 1 / safeRp2;
  const G3 = numBranches === 3 ? 1 / safeRp3 : 0;
  const Gtotal = G1 + G2 + G3;
  const ReqB = 1 / Gtotal;

  const I1 = Itotal * (G1 / Gtotal);
  const I2 = Itotal * (G2 / Gtotal);
  const I3 = numBranches === 3 ? Itotal * (G3 / Gtotal) : 0;
  const sumI = I1 + I2 + I3;

  const handleReset = () => {
    setVs(24);
    setR1(10);
    setR2(20);
    setR3(30);

    setItotal(12);
    setRp1(10);
    setRp2(15);
    setRp3(30);
    setNumBranches(2);
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
      {/* Mode Selector Tabs */}
      <div className="flex gap-2 mb-6 print:hidden">
        <button
          onClick={() => setMode('voltage')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border ${
            mode === 'voltage'
              ? 'bg-cyan-600 text-white border-cyan-400 shadow-md shadow-cyan-900/30'
              : 'bg-slate-900 dark:bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
          }`}
        >
          <Split className="w-4 h-4 text-cyan-300" />
          {t.modeVoltage}
        </button>
        <button
          onClick={() => setMode('current')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 border ${
            mode === 'current'
              ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-900/30'
              : 'bg-slate-900 dark:bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
          }`}
        >
          <ArrowDownUp className="w-4 h-4 text-purple-300" />
          {t.modeCurrent}
        </button>
      </div>

      {/* MODE A: VOLTAGE DIVISION */}
      {mode === 'voltage' && (
        <div className="space-y-6">
          {/* Controls */}
          <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-100 print:hidden">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Sliders className="w-4 h-4" />
              {t.voltageControls}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.vsLabel}: <span className="font-mono text-cyan-400 font-bold">{Vs} V</span>
                </label>
                <input
                  type="range"
                  min="6"
                  max="120"
                  step="2"
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
                  max="50"
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
                  min="1"
                  max="50"
                  value={R2}
                  onChange={e => setR2(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.r3Label}: <span className="font-mono text-rose-400 font-bold">{R3} Ω</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={R3}
                  onChange={e => setR3(Number(e.target.value))}
                  className="w-full accent-rose-500"
                />
              </div>
            </div>
          </div>

          {/* Voltage Divider Schematic SVG */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center">
            <svg viewBox="0 0 520 180" className="w-full max-w-xl h-auto">
              <rect x="30" y="30" width="460" height="120" rx="6" fill="none" stroke="#38bdf8" strokeWidth="3" />

              {/* Source Vs */}
              <g transform="translate(30, 90)">
                <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" />
                <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">+</text>
                <text x="0" y="11" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">-</text>
                <text x="-28" y="4" textAnchor="end" fill="#38bdf8" fontSize="12" fontWeight="bold">{Vs}V</text>
              </g>

              {/* R1 */}
              <g transform="translate(130, 30)">
                <rect x="-25" y="-12" width="50" height="24" fill="#1e293b" stroke="#10b981" strokeWidth="2.5" rx="3" />
                <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">R₁ ({safeR1}Ω)</text>
                <text x="0" y="32" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="bold">V₁ = {V1.toFixed(2)}V</text>
              </g>

              {/* R2 */}
              <g transform="translate(260, 30)">
                <rect x="-25" y="-12" width="50" height="24" fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" rx="3" />
                <text x="0" y="4" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">R₂ ({safeR2}Ω)</text>
                <text x="0" y="32" textAnchor="middle" fill="#fde047" fontSize="11" fontWeight="bold">V₂ = {V2.toFixed(2)}V</text>
              </g>

              {/* R3 */}
              <g transform="translate(390, 30)">
                <rect x="-25" y="-12" width="50" height="24" fill="#1e293b" stroke="#f43f5e" strokeWidth="2.5" rx="3" />
                <text x="0" y="4" textAnchor="middle" fill="#fda4af" fontSize="10" fontWeight="bold">R₃ ({safeR3}Ω)</text>
                <text x="0" y="32" textAnchor="middle" fill="#fecdd3" fontSize="11" fontWeight="bold">V₃ = {V3.toFixed(2)}V</text>
              </g>

              {/* Current label */}
              <text x="260" y="140" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
                I_total = {IcalcA.toFixed(2)} A (Same Current Through All Resistors)
              </text>
            </svg>
          </div>

          {/* Results Table & Formula Note */}
          <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {t.resultsTitle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs mb-4">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.rtotalLabel}</span>
                <span className="font-mono font-bold text-cyan-400">{RtotalA.toFixed(1)} Ω</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.itotalCalcLabel}</span>
                <span className="font-mono font-bold text-cyan-300">{IcalcA.toFixed(3)} A</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.v1Label}</span>
                <span className="font-mono font-bold text-emerald-400">{V1.toFixed(2)} V</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.v2Label}</span>
                <span className="font-mono font-bold text-amber-400">{V2.toFixed(2)} V</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.v3Label}</span>
                <span className="font-mono font-bold text-rose-400">{V3.toFixed(2)} V</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.sumCheck}</span>
                <span className="font-mono font-bold text-emerald-300">
                  {V1.toFixed(2)} + {V2.toFixed(2)} + {V3.toFixed(2)} = {sumV.toFixed(2)} V (✓ V_s)
                </span>
              </div>
            </div>
            <div className="p-3 bg-cyan-950/40 rounded-lg border border-cyan-800/50 text-xs text-cyan-200 leading-relaxed">
              {t.voltageFormulaNote}
            </div>
          </div>
        </div>
      )}

      {/* MODE B: CURRENT DIVISION */}
      {mode === 'current' && (
        <div className="space-y-6">
          {/* Controls */}
          <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-100 print:hidden">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                {t.currentControls}
              </h4>
              <div className="flex gap-2">
                <button
                  onClick={() => setNumBranches(2)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition border ${
                    numBranches === 2
                      ? 'bg-purple-600 text-white border-purple-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  2 Branches
                </button>
                <button
                  onClick={() => setNumBranches(3)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition border ${
                    numBranches === 3
                      ? 'bg-purple-600 text-white border-purple-400'
                      : 'bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  3 Branches
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.itotalLabel}: <span className="font-mono text-purple-400 font-bold">{Itotal} A</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={Itotal}
                  onChange={e => setItotal(Number(e.target.value))}
                  className="w-full accent-purple-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.r1Label}: <span className="font-mono text-emerald-400 font-bold">{Rp1} Ω</span>
                </label>
                <input
                  type="range"
                  min="2"
                  max="60"
                  value={Rp1}
                  onChange={e => setRp1(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  {t.r2Label}: <span className="font-mono text-amber-400 font-bold">{Rp2} Ω</span>
                </label>
                <input
                  type="range"
                  min="2"
                  max="60"
                  value={Rp2}
                  onChange={e => setRp2(Number(e.target.value))}
                  className="w-full accent-amber-500"
                />
              </div>
              {numBranches === 3 && (
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">
                    {t.r3Label}: <span className="font-mono text-rose-400 font-bold">{Rp3} Ω</span>
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="60"
                    value={Rp3}
                    onChange={e => setRp3(Number(e.target.value))}
                    className="w-full accent-rose-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Current Divider Schematic SVG */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center">
            <svg viewBox="0 0 520 180" className="w-full max-w-xl h-auto">
              {/* Rails */}
              <line x1="30" y1="30" x2="480" y2="30" stroke="#38bdf8" strokeWidth="3" />
              <line x1="30" y1="150" x2="480" y2="150" stroke="#38bdf8" strokeWidth="3" />

              {/* Source Current Arrow */}
              <g transform="translate(60, 90)">
                <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#c084fc" strokeWidth="3" />
                <line x1="0" y1="10" x2="0" y2="-10" stroke="#c084fc" strokeWidth="2.5" />
                <polygon points="0,-12 -5,-4 5,-4" fill="#c084fc" />
                <text x="-28" y="4" textAnchor="end" fill="#c084fc" fontSize="12" fontWeight="bold">{Itotal}A</text>
              </g>

              {/* Branch 1 */}
              <g transform="translate(180, 90)">
                <line x1="0" y1="-60" x2="0" y2="-20" stroke="#38bdf8" strokeWidth="2.5" />
                <rect x="-14" y="-20" width="28" height="40" fill="#1e293b" stroke="#10b981" strokeWidth="2.5" rx="3" />
                <text x="20" y="-2" fill="#34d399" fontSize="10" fontWeight="bold">R₁ ({safeRp1}Ω)</text>
                <text x="20" y="12" fill="#a7f3d0" fontSize="11" fontWeight="bold">I₁ = {I1.toFixed(2)}A</text>
                <line x1="0" y1="20" x2="0" y2="60" stroke="#38bdf8" strokeWidth="2.5" />
              </g>

              {/* Branch 2 */}
              <g transform="translate(320, 90)">
                <line x1="0" y1="-60" x2="0" y2="-20" stroke="#38bdf8" strokeWidth="2.5" />
                <rect x="-14" y="-20" width="28" height="40" fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" rx="3" />
                <text x="20" y="-2" fill="#fbbf24" fontSize="10" fontWeight="bold">R₂ ({safeRp2}Ω)</text>
                <text x="20" y="12" fill="#fde047" fontSize="11" fontWeight="bold">I₂ = {I2.toFixed(2)}A</text>
                <line x1="0" y1="20" x2="0" y2="60" stroke="#38bdf8" strokeWidth="2.5" />
              </g>

              {/* Branch 3 (Optional) */}
              {numBranches === 3 && (
                <g transform="translate(440, 90)">
                  <line x1="0" y1="-60" x2="0" y2="-20" stroke="#38bdf8" strokeWidth="2.5" />
                  <rect x="-14" y="-20" width="28" height="40" fill="#1e293b" stroke="#f43f5e" strokeWidth="2.5" rx="3" />
                  <text x="20" y="-2" fill="#fda4af" fontSize="10" fontWeight="bold">R₃ ({safeRp3}Ω)</text>
                  <text x="20" y="12" fill="#fecdd3" fontSize="11" fontWeight="bold">I₃ = {I3.toFixed(2)}A</text>
                  <line x1="0" y1="20" x2="0" y2="60" stroke="#38bdf8" strokeWidth="2.5" />
                </g>
              )}
            </svg>
          </div>

          {/* Results & Explanations */}
          <div className="bg-slate-900 dark:bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-100">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              {t.resultsTitle}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs mb-4">
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.reqLabel}</span>
                <span className="font-mono font-bold text-purple-400">{ReqB.toFixed(2)} Ω</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.i1Label}</span>
                <span className="font-mono font-bold text-emerald-400">{I1.toFixed(2)} A</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.i2Label}</span>
                <span className="font-mono font-bold text-amber-400">{I2.toFixed(2)} A</span>
              </div>
              {numBranches === 3 && (
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">{t.i3Label}</span>
                  <span className="font-mono font-bold text-rose-400">{I3.toFixed(2)} A</span>
                </div>
              )}
              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.sumCheck}</span>
                <span className="font-mono font-bold text-emerald-300">
                  {I1.toFixed(2)} + {I2.toFixed(2)} {numBranches === 3 ? `+ ${I3.toFixed(2)}` : ''} = {sumI.toFixed(2)} A (✓ I_total)
                </span>
              </div>
            </div>
            <div className="p-3 bg-purple-950/40 rounded-lg border border-purple-800/50 text-xs text-purple-200 leading-relaxed">
              {numBranches === 2 ? t.currentFormulaNote2 : t.currentFormulaNote3}
            </div>
          </div>
        </div>
      )}
    </InteractiveSimulationCard>
  );
};
