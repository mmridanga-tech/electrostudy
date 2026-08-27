import React, { useState, useId } from 'react';
import { Network, Zap, Split, Layers, Gauge, Info } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface CapacitorsSeriesParallelAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Capacitor Series & Parallel Combination Lab',
    subtitle: 'Compare series and parallel capacitor topologies. Analyze equivalent capacitance (Ceq), voltage division across individual capacitors, charge accumulation (Q1, Q2, Q3), and total electrostatic energy.',
    modeSeries: 'Series Connection Mode',
    modeParallel: 'Parallel Connection Mode',
    c1Label: 'Capacitor C₁ (µF)',
    c2Label: 'Capacitor C₂ (µF)',
    c3Label: 'Capacitor C₃ (µF)',
    voltageLabel: 'Total DC Supply Voltage V_total (V)',
    reset: 'Reset Defaults',
    ceqMetric: 'Equivalent Capacitance (Ceq)',
    totalChargeMetric: 'Total Stored Charge (Q_total)',
    totalEnergyMetric: 'Total Electrostatic Energy (E_total)',
    distributionTitle: 'Branch Voltage, Charge & Energy Breakdown',
    schematicTitle: 'Interactive Circuit Schematic & Live Charge Meter',
    seriesBehaviorNote: 'Series Key Rule: Same charge flows through all capacitors (Q_total = Q₁ = Q₂ = Q₃). The voltage divides inversely proportional to capacitance: smallest capacitor gets the highest voltage stress!',
    parallelBehaviorNote: 'Parallel Key Rule: Same voltage appears across all capacitors (V₁ = V₂ = V₃ = V_total). Equivalent capacitance adds directly (Ceq = C₁ + C₂ + C₃), and charge divides directly proportional to capacitance (Q_i = C_i · V).',
    formulaTitle: 'Combination Mathematical Formulas',
    formulaSeriesText: 'Series: 1/Ceq = 1/C₁ + 1/C₂ + 1/C₃  |  Q₁ = Q₂ = Q₃ = Q_tot = Ceq · V  |  V_i = Q_tot / C_i',
    formulaParallelText: 'Parallel: Ceq = C₁ + C₂ + C₃  |  V₁ = V₂ = V₃ = V_tot  |  Q_i = C_i · V_tot  |  Q_tot = Q₁ + Q₂ + Q₃'
  },
  hi: {
    title: 'संधारित्र श्रेणी एवं समानांतर संयोजन प्रयोगशाला',
    subtitle: 'श्रेणी और समानांतर संधारित्र सर्किट का तुलनात्मक अध्ययन करें। तुल्य धारिता (Ceq), वोल्टेज विभाजन, आवेश वितरण और कुल स्थिरवैद्युत ऊर्जा का सजीव विश्लेषण देखें।',
    modeSeries: 'श्रेणी (Series) संयोजन',
    modeParallel: 'समानांतर (Parallel) संयोजन',
    c1Label: 'संधारित्र C₁ (µF)',
    c2Label: 'संधारित्र C₂ (µF)',
    c3Label: 'संधारित्र C₃ (µF)',
    voltageLabel: 'कुल डीसी सप्लाई वोल्टेज V_total (V)',
    reset: 'डिफ़ॉल्ट रीसेट',
    ceqMetric: 'तुल्य धारिता (Ceq)',
    totalChargeMetric: 'कुल संचित आवेश (Q_total)',
    totalEnergyMetric: 'कुल संचित ऊर्जा (E_total)',
    distributionTitle: 'प्रत्येक कैपेसिटर का वोल्टेज, आवेश एवं ऊर्जा विवरण',
    schematicTitle: 'सर्किट आरेख एवं लाइव चार्ज मीटर',
    seriesBehaviorNote: 'श्रेणी नियम: सभी कैपेसिटर पर समान आवेश (Q_tot = Q₁ = Q₂ = Q₃) रहता है। वोल्टेज धारिता के व्युत्क्रमानुपाती विभाजित होता है—सबसे छोटे कैपेसिटर पर सर्वाधिक वोल्टेज ड्रॉप होता है!',
    parallelBehaviorNote: 'समानांतर नियम: सभी कैपेसिटर पर समान वोल्टेज (V₁ = V₂ = V₃ = V_total) रहता है। तुल्य धारिता सीधे जुड़ती है (Ceq = C₁ + C₂ + C₃) और अधिक धारिता वाला कैपेसिटर अधिक आवेश संचित करता है।',
    formulaTitle: 'संयोजन के मुख्य सूत्र',
    formulaSeriesText: 'श्रेणी: 1/Ceq = 1/C₁ + 1/C₂ + 1/C₃  |  Q₁ = Q₂ = Q₃ = Q_tot = Ceq · V  |  V_i = Q_tot / C_i',
    formulaParallelText: 'समानांतर: Ceq = C₁ + C₂ + C₃  |  V₁ = V₂ = V₃ = V_tot  |  Q_i = C_i · V_tot  |  Q_tot = Q₁ + Q₂ + Q₃'
  },
  bn: {
    title: 'ধারকের শ্রেণি ও সমান্তরাল সংযোগ ল্যাব',
    subtitle: 'শ্রেণি ও সমান্তরাল ধারক বর্তনী পর্যবেক্ষণ করুন। তুল্য ধারকত্ব (Ceq), পৃথক ভোল্টেজ ড্রপ, সঞ্চিত চার্জ (Q1, Q2, Q3) এবং মোট স্থিরতড়িৎ শক্তির পরিবর্তন দেখুন।',
    modeSeries: 'শ্রেণি (Series) সংযোগ',
    modeParallel: 'সমান্তরাল (Parallel) সংযোগ',
    c1Label: 'ক্যাপাসিটর C₁ (µF)',
    c2Label: 'ক্যাপাসিটর C₂ (µF)',
    c3Label: 'ক্যাপাসিটর C₃ (µF)',
    voltageLabel: 'মোট ডিসি সাপ্লাই ভোল্টেজ V_total (V)',
    reset: 'ডিফল্ট রিসেট',
    ceqMetric: 'তুল্য ধারকত্ব (Ceq)',
    totalChargeMetric: 'মোট সঞ্চিত চার্জ (Q_total)',
    totalEnergyMetric: 'মোট স্থিরতড়িৎ শক্তি (E_total)',
    distributionTitle: 'প্রতিটি ক্যাপাসিটরের ভোল্টেজ, চার্জ ও শক্তির বিশদ বিশ্লেষণ',
    schematicTitle: 'ইন্টারঅ্যাক্টিভ সার্কিট ডায়াগ্রাম ও রিয়েলটাইম মিটার',
    seriesBehaviorNote: 'শ্রেণি সংযোগের মূল নিয়ম: সকল ক্যাপাসিটরে সমপরিমাণ চার্জ থাকে (Q_total = Q₁ = Q₂ = Q₃)। সবচেয়ে কম মানের ক্যাপাসিটরে সবচেয়ে বেশি ভোল্টেজ ড্রপ হয় (V ∝ 1/C)!',
    parallelBehaviorNote: 'সমান্তরাল সংযোগের মূল নিয়ম: সকল ক্যাপাসিটরের আড়াআড়িতে ভোল্টেজ সমান থাকে (V₁ = V₂ = V₃ = V_total)। তুল্য ধারকত্ব সরাসরি যোগ হয় (Ceq = C₁ + C₂ + C₃) এবং চার্জ ধারকত্বের সমানুপাতিক হয়।',
    formulaTitle: 'সংযোগের গাণিতিক সূত্রসমূহ',
    formulaSeriesText: 'শ্রেণি: 1/Ceq = 1/C₁ + 1/C₂ + 1/C₃  |  Q₁ = Q₂ = Q₃ = Q_tot = Ceq · V  |  V_i = Q_tot / C_i',
    formulaParallelText: 'সমান্তরাল: Ceq = C₁ + C₂ + C₃  |  V₁ = V₂ = V₃ = V_tot  |  Q_i = C_i · V_tot  |  Q_tot = Q₁ + Q₂ + Q₃'
  }
};

export const CapacitorsSeriesParallelAnimation: React.FC<CapacitorsSeriesParallelAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const c1Id = useId();
  const c2Id = useId();
  const c3Id = useId();
  const voltId = useId();

  // State
  const [connectionMode, setConnectionMode] = useState<'series' | 'parallel'>('series');
  const [c1, setC1] = useState<number>(10); // in µF
  const [c2, setC2] = useState<number>(20); // in µF
  const [c3, setC3] = useState<number>(30); // in µF
  const [vTotal, setVTotal] = useState<number>(60); // Volts

  // Calculations
  let cEq_uF = 0;
  let qTotal_uC = 0;
  let eTotal_mJ = 0;

  // Individual metrics
  let v1 = 0, v2 = 0, v3 = 0;
  let q1_uC = 0, q2_uC = 0, q3_uC = 0;
  let e1_mJ = 0, e2_mJ = 0, e3_mJ = 0;

  if (connectionMode === 'series') {
    // 1/Ceq = 1/c1 + 1/c2 + 1/c3
    cEq_uF = 1 / (1 / c1 + 1 / c2 + 1 / c3);
    qTotal_uC = cEq_uF * vTotal;
    q1_uC = qTotal_uC;
    q2_uC = qTotal_uC;
    q3_uC = qTotal_uC;
    v1 = qTotal_uC / c1;
    v2 = qTotal_uC / c2;
    v3 = qTotal_uC / c3;
    e1_mJ = 0.5 * c1 * 1e-6 * Math.pow(v1, 2) * 1e3;
    e2_mJ = 0.5 * c2 * 1e-6 * Math.pow(v2, 2) * 1e3;
    e3_mJ = 0.5 * c3 * 1e-6 * Math.pow(v3, 2) * 1e3;
    eTotal_mJ = e1_mJ + e2_mJ + e3_mJ;
  } else {
    // Parallel: Ceq = c1 + c2 + c3
    cEq_uF = c1 + c2 + c3;
    v1 = vTotal;
    v2 = vTotal;
    v3 = vTotal;
    q1_uC = c1 * vTotal;
    q2_uC = c2 * vTotal;
    q3_uC = c3 * vTotal;
    qTotal_uC = q1_uC + q2_uC + q3_uC;
    e1_mJ = 0.5 * c1 * 1e-6 * Math.pow(v1, 2) * 1e3;
    e2_mJ = 0.5 * c2 * 1e-6 * Math.pow(v2, 2) * 1e3;
    e3_mJ = 0.5 * c3 * 1e-6 * Math.pow(v3, 2) * 1e3;
    eTotal_mJ = e1_mJ + e2_mJ + e3_mJ;
  }

  const handleReset = () => {
    setConnectionMode('series');
    setC1(10);
    setC2(20);
    setC3(30);
    setVTotal(60);
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      formulaText={connectionMode === 'series' ? t.formulaSeriesText : t.formulaParallelText}
      extraHeaderActions={
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setConnectionMode('series')}
            className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
              connectionMode === 'series'
                ? 'bg-cyan-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.modeSeries}
          </button>
          <button
            onClick={() => setConnectionMode('parallel')}
            className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
              connectionMode === 'parallel'
                ? 'bg-cyan-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.modeParallel}
          </button>
        </div>
      }
    >
      {/* Parameter Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={c1Id} className="text-slate-300 font-semibold">{t.c1Label}</label>
            <span className="font-mono text-cyan-400 font-bold">{c1} µF</span>
          </div>
          <input
            id={c1Id}
            type="range"
            min="1"
            max="100"
            step="1"
            value={c1}
            onChange={(e) => setC1(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={c2Id} className="text-slate-300 font-semibold">{t.c2Label}</label>
            <span className="font-mono text-emerald-400 font-bold">{c2} µF</span>
          </div>
          <input
            id={c2Id}
            type="range"
            min="1"
            max="100"
            step="1"
            value={c2}
            onChange={(e) => setC2(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={c3Id} className="text-slate-300 font-semibold">{t.c3Label}</label>
            <span className="font-mono text-purple-400 font-bold">{c3} µF</span>
          </div>
          <input
            id={c3Id}
            type="range"
            min="1"
            max="100"
            step="1"
            value={c3}
            onChange={(e) => setC3(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={voltId} className="text-slate-300 font-semibold">{t.voltageLabel}</label>
            <span className="font-mono text-amber-400 font-bold">{vTotal} V</span>
          </div>
          <input
            id={voltId}
            type="range"
            min="5"
            max="240"
            step="5"
            value={vTotal}
            onChange={(e) => setVTotal(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
        </div>
      </div>

      {/* Global Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-slate-950 p-3.5 rounded-xl border border-cyan-900/60 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-medium">{t.ceqMetric}</div>
            <div className="text-lg sm:text-xl font-bold font-mono text-cyan-300 mt-0.5">
              {cEq_uF.toFixed(2)} µF
            </div>
          </div>
          <Layers className="w-6 h-6 text-cyan-400/80" />
        </div>

        <div className="bg-slate-950 p-3.5 rounded-xl border border-emerald-900/60 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-medium">{t.totalChargeMetric}</div>
            <div className="text-lg sm:text-xl font-bold font-mono text-emerald-300 mt-0.5">
              {qTotal_uC.toFixed(1)} µC
            </div>
          </div>
          <Zap className="w-6 h-6 text-emerald-400/80" />
        </div>

        <div className="bg-slate-950 p-3.5 rounded-xl border border-amber-900/60 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-medium">{t.totalEnergyMetric}</div>
            <div className="text-lg sm:text-xl font-bold font-mono text-amber-300 mt-0.5">
              {eTotal_mJ.toFixed(2)} mJ
            </div>
          </div>
          <Gauge className="w-6 h-6 text-amber-400/80" />
        </div>
      </div>

      {/* Interactive Circuit Schematic SVG */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Network className="w-4 h-4 text-cyan-400" />
            {t.schematicTitle} ({connectionMode === 'series' ? 'Series' : 'Parallel'})
          </h4>
          <span className="text-[11px] font-mono text-amber-400 font-bold">
            V_supply = {vTotal} V
          </span>
        </div>

        <div className="w-full flex justify-center py-2 overflow-x-auto">
          <svg viewBox="0 0 540 220" className="w-full max-w-xl h-auto select-none">
            {/* Background Grid */}
            <defs>
              <pattern id="spGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="540" height="220" fill="url(#spGrid)" rx="8" />

            {/* DC Voltage Source on Left */}
            <g transform="translate(50, 110)">
              <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
              <text x="0" y="-5" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">+</text>
              <text x="0" y="12" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle">-</text>
              <text x="0" y="36" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">{vTotal}V DC</text>
            </g>

            {connectionMode === 'series' ? (
              /* Series Schematic */
              <g>
                {/* Loop Wires */}
                <path
                  d="M 50 88 L 50 50 L 140 50
                     M 180 50 L 260 50
                     M 300 50 L 380 50
                     M 420 50 L 480 50 L 480 170 L 50 170 L 50 132"
                  stroke="#64748b"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Capacitor C1 (140 to 180, Y=50) */}
                <g transform="translate(140, 50)">
                  <line x1="0" y1="0" x2="16" y2="0" stroke="#38bdf8" strokeWidth="2.5" />
                  <line x1="16" y1="-18" x2="16" y2="18" stroke="#38bdf8" strokeWidth="3" />
                  <line x1="24" y1="-18" x2="24" y2="18" stroke="#38bdf8" strokeWidth="3" />
                  <line x1="24" y1="0" x2="40" y2="0" stroke="#38bdf8" strokeWidth="2.5" />
                  <text x="20" y="-24" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">C₁ ({c1}µF)</text>
                  <text x="20" y="32" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">{v1.toFixed(1)}V</text>
                  <text x="20" y="44" fill="#34d399" fontSize="9" textAnchor="middle">Q={q1_uC.toFixed(0)}µC</text>
                </g>

                {/* Capacitor C2 (260 to 300, Y=50) */}
                <g transform="translate(260, 50)">
                  <line x1="0" y1="0" x2="16" y2="0" stroke="#34d399" strokeWidth="2.5" />
                  <line x1="16" y1="-18" x2="16" y2="18" stroke="#34d399" strokeWidth="3" />
                  <line x1="24" y1="-18" x2="24" y2="18" stroke="#34d399" strokeWidth="3" />
                  <line x1="24" y1="0" x2="40" y2="0" stroke="#34d399" strokeWidth="2.5" />
                  <text x="20" y="-24" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">C₂ ({c2}µF)</text>
                  <text x="20" y="32" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">{v2.toFixed(1)}V</text>
                  <text x="20" y="44" fill="#34d399" fontSize="9" textAnchor="middle">Q={q2_uC.toFixed(0)}µC</text>
                </g>

                {/* Capacitor C3 (380 to 420, Y=50) */}
                <g transform="translate(380, 50)">
                  <line x1="0" y1="0" x2="16" y2="0" stroke="#c084fc" strokeWidth="2.5" />
                  <line x1="16" y1="-18" x2="16" y2="18" stroke="#c084fc" strokeWidth="3" />
                  <line x1="24" y1="-18" x2="24" y2="18" stroke="#c084fc" strokeWidth="3" />
                  <line x1="24" y1="0" x2="40" y2="0" stroke="#c084fc" strokeWidth="2.5" />
                  <text x="20" y="-24" fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="middle">C₃ ({c3}µF)</text>
                  <text x="20" y="32" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">{v3.toFixed(1)}V</text>
                  <text x="20" y="44" fill="#34d399" fontSize="9" textAnchor="middle">Q={q3_uC.toFixed(0)}µC</text>
                </g>
              </g>
            ) : (
              /* Parallel Schematic */
              <g>
                {/* Main Top and Bottom Rails */}
                <line x1="50" y1="88" x2="50" y2="40" stroke="#64748b" strokeWidth="2.5" />
                <line x1="50" y1="40" x2="440" y2="40" stroke="#f59e0b" strokeWidth="2.5" />
                <line x1="50" y1="132" x2="50" y2="180" stroke="#64748b" strokeWidth="2.5" />
                <line x1="50" y1="180" x2="440" y2="180" stroke="#38bdf8" strokeWidth="2.5" />

                {/* Branch 1 (X=180) */}
                <g transform="translate(180, 0)">
                  <line x1="0" y1="40" x2="0" y2="98" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="-18" y1="98" x2="18" y2="98" stroke="#38bdf8" strokeWidth="3" />
                  <line x1="-18" y1="106" x2="18" y2="106" stroke="#38bdf8" strokeWidth="3" />
                  <line x1="0" y1="106" x2="0" y2="180" stroke="#38bdf8" strokeWidth="2" />
                  <circle cx="0" cy="40" r="3" fill="#f59e0b" />
                  <circle cx="0" cy="180" r="3" fill="#38bdf8" />
                  <text x="26" y="96" fill="#38bdf8" fontSize="11" fontWeight="bold">C₁ ({c1}µF)</text>
                  <text x="26" y="112" fill="#fbbf24" fontSize="10">{v1}V</text>
                  <text x="26" y="126" fill="#34d399" fontSize="9" fontWeight="bold">Q₁={q1_uC.toFixed(0)}µC</text>
                </g>

                {/* Branch 2 (X=300) */}
                <g transform="translate(300, 0)">
                  <line x1="0" y1="40" x2="0" y2="98" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="-18" y1="98" x2="18" y2="98" stroke="#34d399" strokeWidth="3" />
                  <line x1="-18" y1="106" x2="18" y2="106" stroke="#34d399" strokeWidth="3" />
                  <line x1="0" y1="106" x2="0" y2="180" stroke="#38bdf8" strokeWidth="2" />
                  <circle cx="0" cy="40" r="3" fill="#f59e0b" />
                  <circle cx="0" cy="180" r="3" fill="#38bdf8" />
                  <text x="26" y="96" fill="#34d399" fontSize="11" fontWeight="bold">C₂ ({c2}µF)</text>
                  <text x="26" y="112" fill="#fbbf24" fontSize="10">{v2}V</text>
                  <text x="26" y="126" fill="#34d399" fontSize="9" fontWeight="bold">Q₂={q2_uC.toFixed(0)}µC</text>
                </g>

                {/* Branch 3 (X=420) */}
                <g transform="translate(420, 0)">
                  <line x1="0" y1="40" x2="0" y2="98" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="-18" y1="98" x2="18" y2="98" stroke="#c084fc" strokeWidth="3" />
                  <line x1="-18" y1="106" x2="18" y2="106" stroke="#c084fc" strokeWidth="3" />
                  <line x1="0" y1="106" x2="0" y2="180" stroke="#38bdf8" strokeWidth="2" />
                  <circle cx="0" cy="40" r="3" fill="#f59e0b" />
                  <circle cx="0" cy="180" r="3" fill="#38bdf8" />
                  <text x="26" y="96" fill="#c084fc" fontSize="11" fontWeight="bold">C₃ ({c3}µF)</text>
                  <text x="26" y="112" fill="#fbbf24" fontSize="10">{v3}V</text>
                  <text x="26" y="126" fill="#34d399" fontSize="9" fontWeight="bold">Q₃={q3_uC.toFixed(0)}µC</text>
                </g>
              </g>
            )}
          </svg>
        </div>

        {/* Informative Note */}
        <div className="text-xs text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-start gap-2">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p>
            {connectionMode === 'series' ? t.seriesBehaviorNote : t.parallelBehaviorNote}
          </p>
        </div>
      </div>

      {/* Individual Breakdown Table / Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <div className="text-xs font-bold text-cyan-400 mb-2">Capacitor C₁ ({c1} µF)</div>
          <div className="space-y-1 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span>Voltage Drop:</span>
              <strong className="text-amber-400">{v1.toFixed(2)} V</strong>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Charge Stored:</span>
              <strong className="text-emerald-400">{q1_uC.toFixed(1)} µC</strong>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Energy:</span>
              <strong className="text-purple-400">{e1_mJ.toFixed(2)} mJ</strong>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <div className="text-xs font-bold text-emerald-400 mb-2">Capacitor C₂ ({c2} µF)</div>
          <div className="space-y-1 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span>Voltage Drop:</span>
              <strong className="text-amber-400">{v2.toFixed(2)} V</strong>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Charge Stored:</span>
              <strong className="text-emerald-400">{q2_uC.toFixed(1)} µC</strong>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Energy:</span>
              <strong className="text-purple-400">{e2_mJ.toFixed(2)} mJ</strong>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
          <div className="text-xs font-bold text-purple-400 mb-2">Capacitor C₃ ({c3} µF)</div>
          <div className="space-y-1 text-xs font-mono">
            <div className="flex justify-between text-slate-300">
              <span>Voltage Drop:</span>
              <strong className="text-amber-400">{v3.toFixed(2)} V</strong>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Charge Stored:</span>
              <strong className="text-emerald-400">{q3_uC.toFixed(1)} µC</strong>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Energy:</span>
              <strong className="text-purple-400">{e3_mJ.toFixed(2)} mJ</strong>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
