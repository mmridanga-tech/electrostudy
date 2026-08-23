import React, { useState } from 'react';
import { Cpu, Zap, Sliders, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface DCGeneratorTypesAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

type GeneratorType = 'separately-excited' | 'shunt' | 'series' | 'long-shunt' | 'short-shunt';

export const DCGeneratorTypesAnimation: React.FC<DCGeneratorTypesAnimationProps> = ({ language = 'en' }) => {
  const [genType, setGenType] = useState<GeneratorType>('shunt');
  const [terminalVoltage, setTerminalVoltage] = useState<number>(220);
  const [loadCurrent, setLoadCurrent] = useState<number>(50);
  const [ra, setRa] = useState<number>(0.05);
  const [rsh, setRsh] = useState<number>(110);
  const [rse, setRse] = useState<number>(0.03);
  const [brushDrop, setBrushDrop] = useState<number>(2);
  const [compoundMode, setCompoundMode] = useState<'cumulative' | 'differential'>('cumulative');

  // Calculations based on type
  let ish = 0;
  let ise = 0;
  let ia = 0;
  let eg = 0;
  let vArm = terminalVoltage;

  if (genType === 'separately-excited') {
    ish = 2; // independent external source
    ise = 0;
    ia = loadCurrent;
    eg = terminalVoltage + ia * ra + brushDrop;
  } else if (genType === 'shunt') {
    ish = rsh > 0 ? terminalVoltage / rsh : 0;
    ise = 0;
    ia = loadCurrent + ish;
    eg = terminalVoltage + ia * ra + brushDrop;
  } else if (genType === 'series') {
    ish = 0;
    ise = loadCurrent;
    ia = loadCurrent;
    eg = terminalVoltage + ia * (ra + rse) + brushDrop;
  } else if (genType === 'long-shunt') {
    ish = rsh > 0 ? terminalVoltage / rsh : 0;
    ia = loadCurrent + ish;
    ise = ia;
    eg = terminalVoltage + ia * (ra + rse) + brushDrop;
  } else if (genType === 'short-shunt') {
    ise = loadCurrent;
    vArm = terminalVoltage + loadCurrent * rse;
    ish = rsh > 0 ? vArm / rsh : 0;
    ia = loadCurrent + ish;
    eg = vArm + ia * ra + brushDrop;
  }

  const pLoadKw = (terminalVoltage * loadCurrent) / 1000;
  const pDevKw = (eg * ia) / 1000;
  const armatureLossKw = (ia * ia * ra) / 1000;
  const shuntLossKw = (ish * ish * rsh) / 1000;
  const seriesLossKw = (ise * ise * rse) / 1000;

  const labels = {
    en: {
      title: 'DC Generator Classification & Circuit Simulator',
      subtitle: 'Compare separately excited, shunt, series, and compound circuit topologies with live current and voltage computations.',
      types: {
        'separately-excited': 'Separately Excited',
        'shunt': 'DC Shunt Generator',
        'series': 'DC Series Generator',
        'long-shunt': 'Long-Shunt Compound',
        'short-shunt': 'Short-Shunt Compound'
      },
      terminalVoltage: 'Terminal Voltage (V)',
      loadCurrent: 'Load Current (IL)',
      ra: 'Armature Resistance (Ra)',
      rsh: 'Shunt Field Resistance (Rsh)',
      rse: 'Series Field Resistance (Rse)',
      brushDrop: 'Brush Voltage Drop (Vbrush)',
      compoundType: 'Compounding Flux Mode',
      cumulative: 'Cumulative (Φsh + Φse)',
      differential: 'Differential (Φsh - Φse)',
      calculatedEmf: 'Generated Internal EMF (Eg)',
      armCurrent: 'Armature Current (Ia)',
      shuntCurrent: 'Shunt Field Current (Ish)',
      seriesCurrent: 'Series Field Current (Ise)',
      outputPower: 'Delivered Load Power (Pout)',
      devPower: 'Armature Developed Power (Pdev)',
      cuLosses: 'Total Copper Losses',
      circuitAnalysis: 'Circuit Topology Analysis & Key Equations',
      realWorldApp: 'Primary Real-World Engineering Applications'
    },
    hi: {
      title: 'डीसी जनरेटर वर्गीकरण एवं परिपथ सिमुलेटर',
      subtitle: 'सेपरेटली एक्साइटेड, शंट, सीरीज एवं कंपाउंड टोपोलॉजी में करंट व EMF की लाइव गणना करें।',
      types: {
        'separately-excited': 'सेपरेटली एक्साइटेड',
        'shunt': 'डीसी शंट जनरेटर',
        'series': 'डीसी सीरीज जनरेटर',
        'long-shunt': 'लॉन्ग-शंट कंपाउंड',
        'short-shunt': 'शॉर्ट-शंट कंपाउंड'
      },
      terminalVoltage: 'टर्मिनल वोल्टेज (V)',
      loadCurrent: 'लोड धारा (IL)',
      ra: 'आर्मेचर प्रतिरोध (Ra)',
      rsh: 'शंट फील्ड प्रतिरोध (Rsh)',
      rse: 'सीरीज फील्ड प्रतिरोध (Rse)',
      brushDrop: 'ब्रश वोल्टेज ड्रॉप (Vbrush)',
      compoundType: 'कंपाउंडिंग फ्लक्स मोड',
      cumulative: 'संचयी (Φsh + Φse)',
      differential: 'विभेदी (Φsh - Φse)',
      calculatedEmf: 'उत्पन्न आंतरिक EMF (Eg)',
      armCurrent: 'आर्मेचर धारा (Ia)',
      shuntCurrent: 'शंट फील्ड धारा (Ish)',
      seriesCurrent: 'सीरीज फील्ड धारा (Ise)',
      outputPower: 'लोड आउटपुट पावर (Pout)',
      devPower: 'आर्मेचर विकसित पावर (Pdev)',
      cuLosses: 'कुल कॉपर हानियाँ',
      circuitAnalysis: 'परिपथ टोपोलॉजी विश्लेषण एवं समीकरण',
      realWorldApp: 'प्रमुख व्यावहारिक अनुप्रयोग'
    },
    bn: {
      title: 'ডিসি জেনারেটর শ্রেণিবিন্যাস ও সার্কিট সিমুলেটর',
      subtitle: 'সেপারেটলি এক্সাইটেড, শান্ট, সিরিজ এবং কম্পাউন্ড সার্কিটের কারেন্ট ও ভোল্টেজ গণনা করুন।',
      types: {
        'separately-excited': 'সেপারেটলি এক্সাইটেড',
        'shunt': 'ডিসি শান্ট জেনারেটর',
        'series': 'ডিসি সিরিজ জেনারেটর',
        'long-shunt': 'লং-শান্ট কম্পাউন্ড',
        'short-shunt': 'শর্ট-শান্ট কম্পাউন্ড'
      },
      terminalVoltage: 'টার্মিনাল ভোল্টেজ (V)',
      loadCurrent: 'লোড কারেন্ট (IL)',
      ra: 'আর্মেচার রোধ (Ra)',
      rsh: 'শান্ট ফিল্ড রোধ (Rsh)',
      rse: 'সিরিজ ফিল্ড রোধ (Rse)',
      brushDrop: 'ব্রাশ ভোল্টেজ ড্রপ (Vbrush)',
      compoundType: 'কম্পাউন্ডিং ফ্লাক্স মোড',
      cumulative: 'কিউমুলেটিভ (Φsh + Φse)',
      differential: 'ডিফারেনশিয়াল (Φsh - Φse)',
      calculatedEmf: 'উৎপন্ন অভ্যন্তরীণ EMF (Eg)',
      armCurrent: 'আর্মেচার কারেন্ট (Ia)',
      shuntCurrent: 'শান্ট ফিল্ড কারেন্ট (Ish)',
      seriesCurrent: 'সিরিজ ফিল্ড কারেন্ট (Ise)',
      outputPower: 'সরবরাহকৃত লোড পাওয়ার (Pout)',
      devPower: 'আর্মেচারে উৎপন্ন পাওয়ার (Pdev)',
      cuLosses: 'মোট কপার লস',
      circuitAnalysis: 'সার্কিট বিশ্লেষণ ও মূল সমীকরণ',
      realWorldApp: 'বাস্তব জীবনের প্রধান প্রয়োগসমূহ'
    }
  }[language];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 md:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <Cpu className="w-6 h-6 text-sky-400" />
          <h3 className="text-lg md:text-xl font-bold text-slate-100">{labels.title}</h3>
        </div>
        <p className="text-xs md:text-sm text-slate-400 mt-1">{labels.subtitle}</p>
      </div>

      {/* Generator Type Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {(['separately-excited', 'shunt', 'series', 'long-shunt', 'short-shunt'] as GeneratorType[]).map((t) => (
          <button
            key={t}
            onClick={() => setGenType(t)}
            className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
              genType === t
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {labels.types[t]}
          </button>
        ))}
      </div>

      {/* Main Grid: Circuit Diagram & Calculations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Circuit Visual SVG Schematic (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 520 320" className="w-full h-auto max-h-[300px]" aria-label="DC Generator Circuit Topology Diagram">
            <defs>
              <linearGradient id="armatureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <marker id="currentArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b" />
              </marker>
            </defs>

            {/* Background Grid Accent */}
            <line x1="40" y1="60" x2="480" y2="60" stroke="#334155" strokeWidth="2" />
            <line x1="40" y1="260" x2="480" y2="260" stroke="#334155" strokeWidth="2" />

            {/* Armature Symbol (Circle + 2 brushes) */}
            <g transform="translate(180, 160)">
              <circle cx="0" cy="0" r="32" fill="url(#armatureGrad)" stroke="#0369a1" strokeWidth="3" />
              <text x="0" y="5" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="bold">A</text>
              {/* Brushes */}
              <rect x="-8" y="-38" width="16" height="8" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
              <rect x="-8" y="30" width="16" height="8" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x="-16" y="-32" fill="#38bdf8" fontSize="12" fontWeight="bold">+</text>
              <text x="-16" y="38" fill="#f43f5e" fontSize="12" fontWeight="bold">-</text>
              {/* Armature Leads */}
              <line x1="0" y1="-38" x2="0" y2="-100" stroke="#38bdf8" strokeWidth="2.5" />
              <line x1="0" y1="38" x2="0" y2="100" stroke="#38bdf8" strokeWidth="2.5" />
              {/* Armature Current Arrow */}
              <line x1="0" y1="-55" x2="0" y2="-80" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#currentArrow)" />
              <text x="12" y="-65" fill="#f59e0b" fontSize="11" fontWeight="bold">Ia={ia.toFixed(1)}A</text>
            </g>

            {/* Separately Excited: Left Independent Field Box */}
            {genType === 'separately-excited' && (
              <g transform="translate(50, 160)">
                <rect x="0" y="-50" width="60" height="100" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" rx="4" />
                <path d="M 30 -40 Q 45 -20 30 0 Q 45 20 30 40" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
                <text x="30" y="-55" textAnchor="middle" fill="#94a3b8" fontSize="10">Ext DC Source</text>
                <text x="30" y="65" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">If = 2 A</text>
              </g>
            )}

            {/* Shunt Field Coils (Parallel across armature) */}
            {(genType === 'shunt' || genType === 'long-shunt' || genType === 'short-shunt') && (
              <g transform="translate(80, 160)">
                <line x1="0" y1="-100" x2="0" y2="-45" stroke="#38bdf8" strokeWidth="2" />
                <line x1="0" y1="45" x2="0" y2="100" stroke="#38bdf8" strokeWidth="2" />
                {/* Shunt Inductor Coil Symbol */}
                <path d="M 0 -45 C 18 -45 18 -25 0 -25 C 18 -25 18 -5 0 -5 C 18 -5 18 15 0 15 C 18 15 18 35 0 35 L 0 45" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
                <text x="-10" y="0" textAnchor="end" fill="#94a3b8" fontSize="10" fontWeight="bold">Rsh={rsh}Ω</text>
                {/* Current Arrow */}
                <line x1="0" y1="-85" x2="0" y2="-65" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#currentArrow)" />
                <text x="8" y="-75" fill="#f59e0b" fontSize="10">Ish={ish.toFixed(2)}A</text>
              </g>
            )}

            {/* Series Field Coils (In line with Armature) */}
            {(genType === 'series' || genType === 'long-shunt' || genType === 'short-shunt') && (
              <g transform="translate(300, 60)">
                {/* Series Coil Symbol */}
                <path d="M -30 0 C -30 -16 -10 -16 -10 0 C -10 -16 10 -16 10 0 C 10 -16 30 -16 30 0" stroke="#38bdf8" strokeWidth="3" fill="none" />
                <text x="0" y="-20" textAnchor="middle" fill="#94a3b8" fontSize="10" fontWeight="bold">Rse={rse}Ω</text>
                <line x1="-50" y1="0" x2="-30" y2="0" stroke="#38bdf8" strokeWidth="2.5" />
                <line x1="30" y1="0" x2="60" y2="0" stroke="#38bdf8" strokeWidth="2.5" />
              </g>
            )}

            {/* External Load Resistor at right */}
            <g transform="translate(440, 160)">
              <line x1="0" y1="-100" x2="0" y2="-40" stroke="#38bdf8" strokeWidth="2" />
              <line x1="0" y1="40" x2="0" y2="100" stroke="#38bdf8" strokeWidth="2" />
              {/* Zigzag Load Resistor */}
              <path d="M 0 -40 L -12 -30 L 12 -15 L -12 0 L 12 15 L -12 30 L 0 40" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
              <text x="20" y="0" fill="#f59e0b" fontSize="11" fontWeight="bold">LOAD</text>
              <text x="20" y="15" fill="#94a3b8" fontSize="9">V = {terminalVoltage}V</text>
              {/* Load Current Arrow */}
              <line x1="0" y1="-85" x2="0" y2="-65" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#currentArrow)" />
              <text x="-25" y="-75" fill="#f59e0b" fontSize="10">IL={loadCurrent}A</text>
            </g>

            {/* Top / Bottom Power Rails */}
            <line x1="80" y1="60" x2="440" y2="60" stroke="#38bdf8" strokeWidth="2" />
            <line x1="80" y1="260" x2="440" y2="260" stroke="#38bdf8" strokeWidth="2" />
          </svg>

          {/* Active Mode Banner */}
          <div className="w-full mt-2 bg-slate-900 border border-slate-800 rounded-lg p-2 text-center text-xs">
            <span className="text-slate-400 font-medium">Circuit State: </span>
            <span className="text-sky-300 font-bold font-mono">{labels.types[genType]}</span>
            {(genType === 'long-shunt' || genType === 'short-shunt') && (
              <span className="ml-2 text-amber-400 font-semibold">
                ({compoundMode === 'cumulative' ? labels.cumulative : labels.differential})
              </span>
            )}
          </div>
        </div>

        {/* Right: Calculated Telemetry & Sliders (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Main Output Box */}
          <div className="bg-gradient-to-br from-sky-500/10 via-slate-900 to-slate-950 border-2 border-sky-500/40 rounded-xl p-4 text-center shadow-lg">
            <span className="text-xs uppercase tracking-wider font-semibold text-sky-400">
              {labels.calculatedEmf}
            </span>
            <div className="text-3xl md:text-4xl font-extrabold text-sky-300 font-mono my-1">
              {eg.toFixed(2)} <span className="text-lg text-slate-300">V</span>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Terminal: {terminalVoltage}V | Ia: {ia.toFixed(1)}A
            </div>
          </div>

          {/* Secondary Telemetry Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg p-2.5">
              <div className="text-slate-400">{labels.armCurrent}</div>
              <div className="text-base font-bold text-amber-400 font-mono">{ia.toFixed(2)} A</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg p-2.5">
              <div className="text-slate-400">{labels.outputPower}</div>
              <div className="text-base font-bold text-emerald-400 font-mono">{pLoadKw.toFixed(2)} kW</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg p-2.5">
              <div className="text-slate-400">{labels.devPower}</div>
              <div className="text-base font-bold text-purple-400 font-mono">{pDevKw.toFixed(2)} kW</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg p-2.5">
              <div className="text-slate-400">{labels.cuLosses}</div>
              <div className="text-base font-bold text-rose-400 font-mono">
                {(armatureLossKw + shuntLossKw + seriesLossKw).toFixed(3)} kW
              </div>
            </div>
          </div>

          {/* Interactive Sliders */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
            {/* Terminal Voltage */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.terminalVoltage}</span>
                <span className="font-mono text-sky-400 font-bold">{terminalVoltage} V</span>
              </div>
              <input
                type="range"
                min="100"
                max="440"
                step="10"
                value={terminalVoltage}
                onChange={(e) => setTerminalVoltage(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>

            {/* Load Current */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.loadCurrent}</span>
                <span className="font-mono text-sky-400 font-bold">{loadCurrent} A</span>
              </div>
              <input
                type="range"
                min="0"
                max="120"
                step="5"
                value={loadCurrent}
                onChange={(e) => setLoadCurrent(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>

            {/* Armature Resistance */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.ra}</span>
                <span className="font-mono text-sky-400 font-bold">{ra} Ω</span>
              </div>
              <input
                type="range"
                min="0.01"
                max="0.2"
                step="0.01"
                value={ra}
                onChange={(e) => setRa(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>

            {/* Shunt Resistance (if applicable) */}
            {(genType === 'shunt' || genType === 'long-shunt' || genType === 'short-shunt') && (
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                  <span>{labels.rsh}</span>
                  <span className="font-mono text-sky-400 font-bold">{rsh} Ω</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="250"
                  step="5"
                  value={rsh}
                  onChange={(e) => setRsh(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>
            )}

            {/* Series Resistance (if applicable) */}
            {(genType === 'series' || genType === 'long-shunt' || genType === 'short-shunt') && (
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                  <span>{labels.rse}</span>
                  <span className="font-mono text-sky-400 font-bold">{rse} Ω</span>
                </div>
                <input
                  type="range"
                  min="0.01"
                  max="0.1"
                  step="0.005"
                  value={rse}
                  onChange={(e) => setRse(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Circuit Equations Box */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-2">
        <div className="text-sm font-bold text-sky-400 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          {labels.circuitAnalysis}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs font-mono text-slate-300">
          <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Field Current:</span>
            {genType === 'shunt' && 'Ish = V / Rsh = ' + ish.toFixed(2) + ' A'}
            {genType === 'series' && 'Ise = IL = ' + ise.toFixed(2) + ' A'}
            {genType === 'separately-excited' && 'If = independent = 2.0 A'}
            {genType === 'long-shunt' && 'Ish = V / Rsh = ' + ish.toFixed(2) + ' A'}
            {genType === 'short-shunt' && 'Ish = (V + IL·Rse) / Rsh = ' + ish.toFixed(2) + ' A'}
          </div>
          <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Armature Current:</span>
            {genType === 'shunt' && 'Ia = IL + Ish = ' + ia.toFixed(2) + ' A'}
            {genType === 'series' && 'Ia = Ise = IL = ' + ia.toFixed(2) + ' A'}
            {genType === 'separately-excited' && 'Ia = IL = ' + ia.toFixed(2) + ' A'}
            {genType === 'long-shunt' && 'Ia = IL + Ish = ' + ia.toFixed(2) + ' A'}
            {genType === 'short-shunt' && 'Ia = IL + Ish = ' + ia.toFixed(2) + ' A'}
          </div>
          <div className="p-2.5 bg-sky-500/10 rounded border border-sky-500/30 text-sky-300 font-bold">
            <span className="text-sky-400 block text-[10px] uppercase">Generated EMF:</span>
            {genType === 'shunt' && 'Eg = V + Ia·Ra + Vb = ' + eg.toFixed(2) + ' V'}
            {genType === 'series' && 'Eg = V + Ia(Ra+Rse) + Vb = ' + eg.toFixed(2) + ' V'}
            {genType === 'separately-excited' && 'Eg = V + Ia·Ra + Vb = ' + eg.toFixed(2) + ' V'}
            {genType === 'long-shunt' && 'Eg = V + Ia(Ra+Rse) + Vb = ' + eg.toFixed(2) + ' V'}
            {genType === 'short-shunt' && 'Eg = Varm + Ia·Ra + Vb = ' + eg.toFixed(2) + ' V'}
          </div>
        </div>
      </div>
    </div>
  );
};
