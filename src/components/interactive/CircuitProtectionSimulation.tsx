import React, { useState } from 'react';
import { ShieldAlert, Zap, Lock, Sliders, CheckCircle2, AlertTriangle, RotateCcw } from 'lucide-react';
import { Language } from '../../types';

interface CircuitProtectionSimulationProps {
  currentLanguage: Language;
}

export const CircuitProtectionSimulation: React.FC<CircuitProtectionSimulationProps> = ({ currentLanguage }) => {
  const [activeTab, setActiveTab] = useState<'fuse' | 'mcb' | 'rccb' | 'loto'>('fuse');

  // --- Fuse State ---
  const [fuseRating, setFuseRating] = useState<number>(16); // Amperes
  const [fuseCurrent, setFuseCurrent] = useState<number>(32); // Amperes
  const [fuseType, setFuseType] = useState<'rewireable' | 'hrc'>('hrc');
  const [isFuseBlown, setIsFuseBlown] = useState<boolean>(false);

  // Fusing factor
  const fusingFactor = fuseType === 'rewireable' ? 1.45 : 1.25;
  const minFusingCurrent = Math.round(fuseRating * fusingFactor * 10) / 10;
  // Estimated clearing time (empirical inverse time approximation: t = k / (I/In)^3)
  const overloadRatio = fuseCurrent / fuseRating;
  let fuseBlowTimeSec = Infinity;
  if (fuseCurrent >= minFusingCurrent) {
    fuseBlowTimeSec = Math.max(0.005, Math.round((20 / Math.pow(overloadRatio, 2.5)) * 1000) / 1000);
  }
  const i2tEnergy = Math.round(Math.pow(fuseCurrent, 2) * (fuseBlowTimeSec === Infinity ? 0 : fuseBlowTimeSec));

  // --- MCB State ---
  const [mcbRating, setMcbRating] = useState<number>(16); // Amperes
  const [mcbCurve, setMcbCurve] = useState<'B' | 'C' | 'D'>('C');
  const [mcbCurrent, setMcbCurrent] = useState<number>(80); // Amperes
  const [isMcbTripped, setIsMcbTripped] = useState<boolean>(false);

  const mcbMultipliers = {
    B: { min: 3, max: 5, use: 'Domestic resistive loads / long cable runs' },
    C: { min: 5, max: 10, use: 'General commercial, inductive, fluorescent lighting' },
    D: { min: 10, max: 20, use: 'High inrush motors, transformers, industrial welders' }
  };
  const curveConfig = mcbMultipliers[mcbCurve];
  const mcbRatio = mcbCurrent / mcbRating;
  let mcbTripMechanism = 'Normal Operation (No Trip)';
  let mcbTripTime = 'Continuous (> 1 hr)';
  if (mcbRatio >= curveConfig.max) {
    mcbTripMechanism = 'Magnetic Solenoid (Instantaneous Short-Circuit Trip)';
    mcbTripTime = '< 10 ms (0.01 s)';
  } else if (mcbRatio >= curveConfig.min) {
    mcbTripMechanism = 'Magnetic/Thermal Boundary Trip';
    mcbTripTime = '0.01 s to 0.1 s';
  } else if (mcbRatio >= 1.45) {
    mcbTripMechanism = 'Thermal Bimetallic Strip Deflection';
    mcbTripTime = `${Math.round(60 / Math.pow(mcbRatio, 1.8))} s`;
  } else if (mcbRatio >= 1.13) {
    mcbTripMechanism = 'Slow Thermal Overload';
    mcbTripTime = '5 min to 1 hr';
  }

  // --- RCCB State ---
  const [rccbRating, setRccbRating] = useState<number>(30); // mA (30, 100, 300)
  const [liveCurrent, setLiveCurrent] = useState<number>(10.0); // Amps
  const [leakageMa, setLeakageMa] = useState<number>(35); // mA
  const isRccbTripped = leakageMa >= rccbRating;
  const neutralCurrent = Math.round((liveCurrent - (leakageMa / 1000)) * 1000) / 1000;

  // --- LOTO 5 Golden Rules State ---
  const [goldenRules, setGoldenRules] = useState<boolean[]>([false, false, false, false, false]);
  const toggleRule = (idx: number) => {
    setGoldenRules(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };
  const allRulesPassed = goldenRules.every(r => r);

  const t = {
    en: {
      title: 'Circuit Protection & Isolation Engineering Lab',
      subtitle: 'Analyze fuse I²t characteristics, MCB B/C/D trip curves, RCCB residual magnetic flux detection, and LOTO 5 Golden Safety Rules',
      tabFuse: 'Fuse (I²t Arc Melting)',
      tabMcb: 'MCB (Thermal-Magnetic Trip)',
      tabRccb: 'RCCB (CBCT Residual Core)',
      tabLoto: 'LOTO & 5 Golden Rules',
      reset: 'Reset Defaults'
    },
    hi: {
      title: 'परिपथ सुरक्षा एवं विद्युत पृथक्करण प्रयोगशाला',
      subtitle: 'फ्यूज I²t विशेषताएं, MCB B/C/D ट्रिप वक्र, RCCB अवशिष्ट चुंबकीय फ्लक्स और LOTO 5 स्वर्णिम सुरक्षा नियम',
      tabFuse: 'फ्यूज (I²t तापीय पिघलन)',
      tabMcb: 'MCB (थर्मल-मैग्नेटिक ट्रिप)',
      tabRccb: 'RCCB (अवशिष्ट धारा संरक्षण)',
      tabLoto: 'LOTO एवं 5 स्वर्णिम नियम',
      reset: 'रीसेट करें'
    },
    bn: {
      title: 'বর্তনী সুরক্ষা ও আইসোলেশন ইঞ্জিনিয়ারিং ল্যাব',
      subtitle: 'ফিউজ I²t বৈশিষ্ট্য, MCB B/C/D ট্রিপ কার্ভ, RCCB অবশিষ্ট ফ্লাক্স শনাক্তকরণ এবং LOTO ৫টি গোল্ডেন সেফটি রুলস',
      tabFuse: 'ফিউজ (I²t আর্ক গলন)',
      tabMcb: 'MCB (থার্মাল-ম্যাগনেটিক ট্রিপ)',
      tabRccb: 'RCCB (অবশিষ্ট কারেন্ট ডিটেকশন)',
      tabLoto: 'LOTO ও ৫টি গোল্ডেন রুলস',
      reset: 'রিসেট করুন'
    }
  }[currentLanguage];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl text-slate-100 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">{t.title}</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <button
          onClick={() => {
            setFuseRating(16);
            setFuseCurrent(32);
            setIsFuseBlown(false);
            setMcbRating(16);
            setMcbCurve('C');
            setMcbCurrent(80);
            setIsMcbTripped(false);
            setRccbRating(30);
            setLeakageMa(35);
            setGoldenRules([false, false, false, false, false]);
          }}
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition-colors border border-slate-700 w-fit"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.reset}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('fuse')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
            activeTab === 'fuse' ? 'bg-amber-500/20 border border-amber-500 text-amber-300' : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>{t.tabFuse}</span>
        </button>
        <button
          onClick={() => setActiveTab('mcb')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
            activeTab === 'mcb' ? 'bg-cyan-500/20 border border-cyan-500 text-cyan-300' : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>{t.tabMcb}</span>
        </button>
        <button
          onClick={() => setActiveTab('rccb')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
            activeTab === 'rccb' ? 'bg-emerald-500/20 border border-emerald-500 text-emerald-300' : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>{t.tabRccb}</span>
        </button>
        <button
          onClick={() => setActiveTab('loto')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
            activeTab === 'loto' ? 'bg-rose-500/20 border border-rose-500 text-rose-300' : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800'
          }`}
        >
          <Lock className="w-4 h-4" />
          <span>{t.tabLoto}</span>
        </button>
      </div>

      {/* TAB 1: FUSE SIMULATOR */}
      {activeTab === 'fuse' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Fuse SVG (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center">
              <svg viewBox="0 0 280 180" className="w-full h-44">
                {/* Ceramic / Glass Body */}
                <rect x="50" y="55" width="180" height="70" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                {/* Silica Sand Filling Texture (for HRC) */}
                {fuseType === 'hrc' && (
                  <rect x="55" y="60" width="170" height="60" fill="#292524" stroke="none" opacity="0.6" />
                )}
                
                {/* Left Metal Contact Cap */}
                <rect x="35" y="50" width="25" height="80" rx="3" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />
                {/* Right Metal Contact Cap */}
                <rect x="220" y="50" width="25" height="80" rx="3" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />

                {/* Circuit Terminals */}
                <line x1="5" y1="90" x2="35" y2="90" stroke="#f59e0b" strokeWidth="3" />
                <line x1="245" y1="90" x2="275" y2="90" stroke="#f59e0b" strokeWidth="3" />

                {/* Fuse Element (Silver / Tinned Copper Wire) */}
                {fuseCurrent < minFusingCurrent ? (
                  // Intact wire
                  <path
                    d="M 60,90 Q 100,75 140,90 T 220,90"
                    fill="none"
                    stroke={fuseCurrent > fuseRating ? '#f97316' : '#cbd5e1'}
                    strokeWidth={fuseCurrent > fuseRating ? 3.5 : 2}
                  />
                ) : (
                  // Melted / Blown wire with Arc
                  <g>
                    <path d="M 60,90 L 105,90" fill="none" stroke="#ef4444" strokeWidth="3" />
                    <path d="M 175,90 L 220,90" fill="none" stroke="#ef4444" strokeWidth="3" />
                    {/* Melting Arc Plasma */}
                    <circle cx="140" cy="90" r="14" fill="#fbbf24" fillOpacity="0.4" className="animate-ping" />
                    <text x="140" y="94" fill="#ef4444" fontSize="16" fontWeight="bold" textAnchor="middle">⚡ ARC</text>
                  </g>
                )}

                {/* Label on cartridge */}
                <text x="140" y="72" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">
                  {fuseType.toUpperCase()} CARTRIDGE
                </text>
                <text x="140" y="115" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                  {fuseRating} A | 415V ~ 80kA
                </text>
              </svg>
              <div className={`mt-2 text-xs font-mono font-bold ${fuseCurrent >= minFusingCurrent ? 'text-red-400' : 'text-emerald-400'}`}>
                {fuseCurrent >= minFusingCurrent ? `FUSE BLOWN in ${fuseBlowTimeSec} s!` : 'NORMAL CONDUCTION (Intact)'}
              </div>
            </div>

            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-xs">
              {/* Fuse Type */}
              <div>
                <label className="font-semibold text-slate-300 block mb-1.5">Fuse Construction Type:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setFuseType('hrc')}
                    className={`p-2 rounded-lg border text-left transition-all ${
                      fuseType === 'hrc' ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    <div>HRC Cartridge Fuse</div>
                    <div className="text-[10px] text-slate-400">Silica sand arc-quenching, Fusing Factor ≈ 1.25</div>
                  </button>
                  <button
                    onClick={() => setFuseType('rewireable')}
                    className={`p-2 rounded-lg border text-left transition-all ${
                      fuseType === 'rewireable' ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    <div>Semi-Enclosed Rewireable</div>
                    <div className="text-[10px] text-slate-400">Tinned copper wire, Fusing Factor ≈ 1.45</div>
                  </button>
                </div>
              </div>

              {/* Fuse Rating */}
              <div>
                <label className="font-semibold text-slate-300 block mb-1">Rated Current (In):</label>
                <div className="flex gap-2">
                  {[6, 10, 16, 25, 32, 63].map(val => (
                    <button
                      key={val}
                      onClick={() => setFuseRating(val)}
                      className={`flex-1 py-1.5 rounded border font-mono ${
                        fuseRating === val ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      {val}A
                    </button>
                  ))}
                </div>
              </div>

              {/* Load Current Slider */}
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span className="text-slate-300">Through Current (I):</span>
                  <span className={`font-mono font-bold ${fuseCurrent >= minFusingCurrent ? 'text-red-400' : 'text-emerald-400'}`}>
                    {fuseCurrent} A ({overloadRatio.toFixed(1)} × In)
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="200"
                  step="1"
                  value={fuseCurrent}
                  onChange={e => setFuseCurrent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-slate-400 text-xs">Min Fusing Current</div>
              <div className="text-base font-bold font-mono text-amber-300 mt-1">{minFusingCurrent} A</div>
              <div className="text-[10px] text-slate-500">In × Fusing Factor ({fusingFactor})</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-slate-400 text-xs">Clearing / Melting Time</div>
              <div className="text-base font-bold font-mono text-cyan-300 mt-1">
                {fuseBlowTimeSec === Infinity ? 'Infinite (>24 hr)' : `${fuseBlowTimeSec} s`}
              </div>
              <div className="text-[10px] text-slate-500">Inverse time curve</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-slate-400 text-xs">Pre-Arcing I²t Energy</div>
              <div className="text-base font-bold font-mono text-rose-300 mt-1">
                {i2tEnergy.toLocaleString()} A²·s
              </div>
              <div className="text-[10px] text-slate-500">Thermal let-through energy</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-slate-400 text-xs">Rupturing Capacity</div>
              <div className="text-base font-bold font-mono text-emerald-300 mt-1">
                {fuseType === 'hrc' ? '80 kA @ 415V' : '4 kA @ 240V'}
              </div>
              <div className="text-[10px] text-slate-500">Max prospective fault clearance</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MCB SIMULATOR */}
      {activeTab === 'mcb' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual MCB Graphic (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center">
              <svg viewBox="0 0 200 240" className="w-48 h-56">
                {/* MCB Outer DIN Enclosure */}
                <rect x="40" y="20" width="120" height="200" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                
                {/* Toggle Switch */}
                <g transform="translate(100, 100)">
                  <rect x="-18" y="-30" width="36" height="60" rx="4" fill="#0f172a" stroke="#334155" />
                  {/* Switch Handle (ON / OFF) */}
                  <rect
                    x="-12"
                    y={mcbRatio >= curveConfig.max || mcbRatio >= 1.45 ? 5 : -25}
                    width="24"
                    height="25"
                    rx="3"
                    fill={mcbRatio >= curveConfig.max || mcbRatio >= 1.45 ? '#dc2626' : '#16a34a'}
                    className="transition-all duration-300"
                  />
                  <text
                    x="0"
                    y={mcbRatio >= curveConfig.max || mcbRatio >= 1.45 ? 20 : -10}
                    fill="#ffffff"
                    fontSize="9"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {mcbRatio >= curveConfig.max || mcbRatio >= 1.45 ? 'OFF' : 'ON'}
                  </text>
                </g>

                {/* Status Indicator Window */}
                <circle
                  cx="100"
                  cy="165"
                  r="8"
                  fill={mcbRatio >= curveConfig.max || mcbRatio >= 1.45 ? '#dc2626' : '#16a34a'}
                />

                {/* MCB Faceplate Markings */}
                <text x="100" y="45" fill="#f8fafc" fontSize="13" fontWeight="black" textAnchor="middle">
                  {mcbCurve}{mcbRating}
                </text>
                <text x="100" y="60" fill="#94a3b8" fontSize="8" textAnchor="middle">240/415V ~ 10000A</text>
                <rect x="70" y="65" width="60" height="12" rx="2" fill="#020617" stroke="#38bdf8" strokeWidth="0.8" />
                <text x="100" y="74" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">IEC 60898-1</text>
              </svg>
              <div className="mt-2 text-center">
                <div className={`text-xs font-mono font-bold ${mcbRatio >= 1.45 ? 'text-red-400' : 'text-emerald-400'}`}>
                  {mcbRatio >= curveConfig.max ? 'TRIPPED BY MAGNETIC COIL (<10ms)' : mcbRatio >= 1.45 ? 'TRIPPED BY THERMAL BIMETAL' : 'HOLDING (NO TRIP)'}
                </div>
              </div>
            </div>

            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-xs">
              {/* Curve Selection */}
              <div>
                <label className="font-semibold text-slate-300 block mb-1.5">Tripping Characteristic Curve (IEC 60898):</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['B', 'C', 'D'] as const).map(c => (
                    <button
                      key={c}
                      onClick={() => setMcbCurve(c)}
                      className={`p-2 rounded-lg border text-left transition-all ${
                        mcbCurve === c ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      <div className="text-xs font-bold">Type {c} Curve</div>
                      <div className="text-[10px] text-slate-400 font-mono">Trip: {mcbMultipliers[c].min}–{mcbMultipliers[c].max} × In</div>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 mt-1 italic">{curveConfig.use}</p>
              </div>

              {/* MCB Rating */}
              <div>
                <label className="font-semibold text-slate-300 block mb-1">Rated Current (In):</label>
                <div className="flex gap-2">
                  {[6, 10, 16, 20, 32, 63].map(val => (
                    <button
                      key={val}
                      onClick={() => setMcbRating(val)}
                      className={`flex-1 py-1.5 rounded border font-mono ${
                        mcbRating === val ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      {val}A
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Slider */}
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span className="text-slate-300">Prospective Operating Current (I):</span>
                  <span className="font-mono text-amber-400 font-bold">{mcbCurrent} A ({mcbRatio.toFixed(1)} × In)</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="350"
                  step="1"
                  value={mcbCurrent}
                  onChange={e => setMcbCurrent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-slate-400 text-xs">Active Trip Mechanism</div>
              <div className="text-sm font-bold text-cyan-300 mt-1">{mcbTripMechanism}</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-slate-400 text-xs">Tripping Clearance Time</div>
              <div className="text-base font-bold font-mono text-amber-400 mt-1">{mcbTripTime}</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-slate-400 text-xs">Magnetic Instantaneous Threshold</div>
              <div className="text-base font-bold font-mono text-emerald-400 mt-1">
                {mcbRating * curveConfig.min} A – {mcbRating * curveConfig.max} A
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: RCCB SIMULATOR */}
      {activeTab === 'rccb' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Toroid SVG (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center">
              <svg viewBox="0 0 260 220" className="w-full h-52">
                {/* Toroidal Ferrite Core (CBCT) */}
                <circle cx="130" cy="110" r="75" fill="#1e293b" stroke="#475569" strokeWidth="18" />
                <circle cx="130" cy="110" r="50" fill="#090d16" stroke="#334155" strokeWidth="2" />
                
                {/* Phase Wire going through core */}
                <path d="M 30,85 L 230,85" stroke="#ef4444" strokeWidth="5" fill="none" />
                <text x="30" y="75" fill="#ef4444" fontSize="10" fontWeight="bold">Phase: {liveCurrent.toFixed(2)} A</text>

                {/* Neutral Wire returning through core */}
                <path d="M 230,135 L 30,135" stroke="#38bdf8" strokeWidth="5" fill="none" />
                <text x="30" y="155" fill="#38bdf8" fontSize="10" fontWeight="bold">Neutral: {neutralCurrent.toFixed(3)} A</text>

                {/* Sensing Secondary Coil around toroid */}
                <rect x="120" y="15" width="20" height="35" rx="3" fill="#d97706" stroke="#b45309" strokeWidth="1" />
                <text x="130" y="10" fill="#fbbf24" fontSize="8" textAnchor="middle" fontWeight="bold">Search Coil</text>

                {/* Net Flux Indicator */}
                <text x="130" y="115" fill={isRccbTripped ? '#ef4444' : '#10b981'} fontSize="11" fontWeight="bold" textAnchor="middle">
                  {isRccbTripped ? `ΔI = ${leakageMa} mA` : 'Φ_net = 0'}
                </text>
              </svg>
              <div className={`mt-2 text-xs font-mono font-bold ${isRccbTripped ? 'text-red-400' : 'text-emerald-400'}`}>
                {isRccbTripped ? `TRIPPED! Leakage (${leakageMa}mA) ≥ Sensitivity (${rccbRating}mA)` : 'HEALTHY (Balanced Core Flux)'}
              </div>
            </div>

            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-xs">
              {/* RCCB Sensitivity */}
              <div>
                <label className="font-semibold text-slate-300 block mb-1.5">Rated Residual Operating Current (IΔn):</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { ma: 30, label: '30 mA', desc: 'Domestic Personal Protection (prevents ventricular fibrillation)' },
                    { ma: 100, label: '100 mA', desc: 'Commercial equipment protection' },
                    { ma: 300, label: '300 mA', desc: 'Industrial fire protection (prevents arc-flash ignition)' }
                  ].map(item => (
                    <button
                      key={item.ma}
                      onClick={() => setRccbRating(item.ma)}
                      className={`p-2 rounded-lg border text-left transition-all ${
                        rccbRating === item.ma ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold' : 'bg-slate-800 border-slate-700 text-slate-400'
                      }`}
                    >
                      <div className="font-bold text-xs">{item.label}</div>
                      <div className="text-[10px] text-slate-400">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Earth Leakage Current Slider */}
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span className="text-slate-300">Simulated Earth Leakage Current (I_leak):</span>
                  <span className={`font-mono font-bold ${isRccbTripped ? 'text-red-400' : 'text-emerald-400'}`}>
                    {leakageMa} mA
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="150"
                  step="1"
                  value={leakageMa}
                  onChange={e => setLeakageMa(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Test Button */}
              <div className="pt-2">
                <button
                  onClick={() => setLeakageMa(rccbRating + 10)}
                  className="w-full py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 rounded-lg font-bold transition-colors"
                >
                  Simulate Monthly "TEST" Pushbutton (Injects ~35mA Leakage)
                </button>
              </div>
            </div>
          </div>

          {/* Core Balance Explanation */}
          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs space-y-1">
            <div className="font-bold text-cyan-300">Core Balance Principle: Kirchoff's Current Law</div>
            <p className="text-slate-400">
              Under healthy operation, Phase current equals Neutral return current: <span className="font-mono text-slate-200">I_L - I_N = 0</span>. Their opposing magnetic fluxes cancel out inside the toroidal magnetic core. When current leaks to earth through a human body or damaged insulation, <span className="font-mono text-slate-200">I_L ≠ I_N</span>, inducing a secondary voltage that energizes the trip relay to isolate power within <span className="font-bold text-emerald-400">&lt; 30 ms</span>.
            </p>
          </div>
        </div>
      )}

      {/* TAB 4: LOTO 5 GOLDEN RULES */}
      {activeTab === 'loto' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div>
              <div className="text-sm font-bold text-slate-200">Electrical Isolation Status:</div>
              <div className={`text-base font-extrabold ${allRulesPassed ? 'text-emerald-400' : 'text-red-400'}`}>
                {allRulesPassed ? '✓ CERTIFIED ZERO-ENERGY STATE (SAFE TO TOUCH)' : '⚠ HAZARDOUS LIVE WORK ZONE (TOUCH FORBIDDEN)'}
              </div>
            </div>
            <div className={`px-4 py-2 rounded-lg border font-mono font-bold text-xs ${allRulesPassed ? 'bg-emerald-950 border-emerald-500 text-emerald-300' : 'bg-red-950 border-red-500 text-red-300 animate-pulse'}`}>
              {allRulesPassed ? 'PERMIT TO WORK: APPROVED' : 'PERMIT TO WORK: DENIED'}
            </div>
          </div>

          {/* 5 Golden Rules Checklist */}
          <div className="space-y-2 text-xs">
            {[
              {
                num: 1,
                title: 'Disconnect Completely (Isolate)',
                desc: 'Open circuit breakers and isolators on all sides of incoming feed to achieve a physical air gap.'
              },
              {
                num: 2,
                title: 'Secure Against Reconnection (Lockout / Tagout - LOTO)',
                desc: 'Apply personal safety padlocks, hasps, and danger tags to handles. Only the worker holds their individual key.'
              },
              {
                num: 3,
                title: 'Verify Absence of Operating Voltage (Live-Dead-Live Test)',
                desc: 'Use a certified two-pole voltage detector: test on known live source, verify target busbar is dead (0V), re-verify tester on live source.'
              },
              {
                num: 4,
                title: 'Carry Out Grounding and Short-Circuiting',
                desc: 'Attach portable earthing leads to connect all phase conductors directly to ground, discharging residual capacitance.'
              },
              {
                num: 5,
                title: 'Provide Protection Against Adjacent Live Parts',
                desc: 'Erect insulating safety barriers, danger tape, and warning notices preventing accidental encroachment on live equipment.'
              }
            ].map((rule, idx) => (
              <div
                key={rule.num}
                onClick={() => toggleRule(idx)}
                className={`p-3 rounded-lg border cursor-pointer flex items-start space-x-3 transition-all ${
                  goldenRules[idx] ? 'bg-emerald-950/40 border-emerald-500/60' : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                  goldenRules[idx] ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'bg-slate-800 border-slate-600'
                }`}>
                  {goldenRules[idx] && <CheckCircle2 className="w-4 h-4" />}
                </div>
                <div>
                  <div className={`font-bold ${goldenRules[idx] ? 'text-emerald-300' : 'text-slate-200'}`}>
                    Rule {rule.num}: {rule.title}
                  </div>
                  <p className="text-slate-400 text-[11px] mt-0.5">{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
