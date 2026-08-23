import React, { useState, useId } from 'react';
import { Zap, RotateCcw, ArrowRight, Gauge, Activity, ShieldCheck, Flame, Cpu } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface MachineEnergyConversionAnimationProps {
  currentLanguage: Language;
}

type MachineMode = 'MOTOR' | 'GENERATOR' | 'TRANSFORMER';

const TRANSLATIONS = {
  en: {
    title: 'Machine Energy Conversion & Power Flow Simulator',
    subtitle: 'Simulate and compare electromechanical and electromagnetic energy transfer across Motors, Generators, and Transformers with real-time loss partitioning.',
    modeSelect: 'Select Machine Type',
    motorMode: 'Electric Motor (Electrical → Mechanical)',
    genMode: 'Generator (Mechanical → Electrical)',
    transMode: 'Transformer (Electrical → Electrical AC)',
    inputPower: 'Input Power (P_in)',
    efficiency: 'Efficiency (η)',
    outputPower: 'Output Power (P_out)',
    losses: 'Internal Losses (P_loss)',
    energyFlow: 'Energy Flow Diagram',
    electricalEnergy: 'Electrical Energy',
    mechanicalEnergy: 'Mechanical Energy',
    magneticField: 'Electromagnetic Field Medium',
    magneticFlux: 'Time-Varying Magnetic Flux',
    heatLoss: 'Heat & Stray Losses (I²R + Iron + Mech)',
    coreCopperLoss: 'Core & Copper Losses (Iron + I²R)',
    reset: 'Reset Defaults',
    energyConservation: 'Law of Conservation of Energy: P_in = P_out + P_loss',
    efficiencyFormula: 'Efficiency Formula: η = (P_out / P_in) × 100%',
    summaryTitle: 'Key Conversion Principles',
    motorSummary: 'Motors convert electrical energy into mechanical torque through Lorentz force interaction in a magnetic field.',
    genSummary: 'Generators convert mechanical work into electrical EMF through Faraday induction as conductors cut flux.',
    transSummary: 'Transformers transfer AC electrical power between voltage levels statically through mutual magnetic induction (no moving parts).',
    lossBreakdown: 'Loss Distribution Estimation',
    torqueSpeedOutput: 'Equivalent Mechanical Output (at 1500 RPM)',
    torqueLabel: 'Developed Torque',
    terminalVoltage: 'Estimated Terminal Voltage (at rated current)',
    statusNormal: 'Normal Steady State Operation',
  },
  hi: {
    title: 'मशीन ऊर्जा रूपांतरण एवं पावर फ्लो सिम्युलेटर',
    subtitle: 'मोटर, जनरेटर एवं ट्रांसफॉर्मर में विद्युत-यांत्रिक और विद्युतचुंबकीय ऊर्जा रूपांतरण तथा हानि विभाजन का वास्तविक समय में अन्वेषण करें।',
    modeSelect: 'मशीन का प्रकार चुनें',
    motorMode: 'विद्युत मोटर (विद्युत → यांत्रिक)',
    genMode: 'जनरेटर (यांत्रिक → विद्युत)',
    transMode: 'ट्रांसफॉर्मर (विद्युत → विद्युत AC)',
    inputPower: 'इनपुट पावर (P_in)',
    efficiency: 'दक्षता (η)',
    outputPower: 'आउटपुट पावर (P_out)',
    losses: 'आंतरिक हानियाँ (P_loss)',
    energyFlow: 'ऊर्जा प्रवाह आरेख',
    electricalEnergy: 'विद्युत ऊर्जा',
    mechanicalEnergy: 'यांत्रिक ऊर्जा',
    magneticField: 'विद्युतचुंबकीय क्षेत्र माध्यम',
    magneticFlux: 'समय-परिवर्तनीय चुंबकीय फ्लक्स',
    heatLoss: 'ऊष्मा एवं स्ट्रे हानियाँ (I²R + कोर + यांत्रिक)',
    coreCopperLoss: 'कोर एवं कॉपर हानियाँ (लौह + I²R)',
    reset: 'डिफ़ॉल्ट रीसेट',
    energyConservation: 'ऊर्जा संरक्षण का नियम: P_in = P_out + P_loss',
    efficiencyFormula: 'दक्षता सूत्र: η = (P_out / P_in) × 100%',
    summaryTitle: 'प्रमुख रूपांतरण सिद्धांत',
    motorSummary: 'मोटर चुंबकीय क्षेत्र में लोरेंट्ज़ बल द्वारा विद्युत ऊर्जा को यांत्रिक टॉर्क में बदलती है।',
    genSummary: 'जनरेटर फैराडे के प्रेरण नियम द्वारा यांत्रिक कार्य को विद्युत EMF में बदलता है।',
    transSummary: 'ट्रांसफॉर्मर पारस्परिक प्रेरण द्वारा स्थिर रूप से AC विद्युत शक्ति का स्थानांतरण करता है (कोई गतिशील भाग नहीं)।',
    lossBreakdown: 'हानि वितरण अनुमान',
    torqueSpeedOutput: 'समतुल्य यांत्रिक आउटपुट (1500 RPM पर)',
    torqueLabel: 'उत्पन्न टॉर्क',
    terminalVoltage: 'अनुमानित टर्मिनल वोल्टेज',
    statusNormal: 'सामान्य स्थिर अवस्था संचालन',
  },
  bn: {
    title: 'মেশিন শক্তি রূপান্তর ও পাওয়ার ফ্লো সিমুলেটর',
    subtitle: 'মোটর, জেনারেটর ও ট্রান্সফরমারে ইলেক্ট্রোমেকানিক্যাল এবং ইলেক্ট্রোম্যাগনেটিক শক্তি রূপান্তরের বাস্তবসম্মত বিশ্লেষণ।',
    modeSelect: 'মেশিনের ধরন নির্বাচন করুন',
    motorMode: 'বৈদ্যুতিক মোটর (বৈদ্যুতিক → যান্ত্রিক)',
    genMode: 'জেনারেটর (যান্ত্রিক → বৈদ্যুতিক)',
    transMode: 'ট্রান্সফরমার (বৈদ্যুতিক → বৈদ্যুতিক AC)',
    inputPower: 'ইনপুট পাওয়ার (P_in)',
    efficiency: 'কর্মদক্ষতা (η)',
    outputPower: 'আউটপুট পাওয়ার (P_out)',
    losses: 'অভ্যন্তরীণ ক্ষতি (P_loss)',
    energyFlow: 'শক্তি প্রবাহ চিত্র',
    electricalEnergy: 'বৈদ্যুতিক শক্তি',
    mechanicalEnergy: 'যান্ত্রিক শক্তি',
    magneticField: 'তড়িচ্চুম্বকীয় ক্ষেত্র মাধ্যম',
    magneticFlux: 'পরিবর্তনশীল চৌম্বক ফ্লাক্স',
    heatLoss: 'তাপ ও অন্যান্য অপচয় (I²R + আয়রন + যান্ত্রিক)',
    coreCopperLoss: 'কোর ও কপার অপচয় (আয়রন + I²R)',
    reset: 'ডিফল্ট রিসেট',
    energyConservation: 'শক্তি সংরক্ষণ সূত্র: P_in = P_out + P_loss',
    efficiencyFormula: 'দক্ষতার সমীকরণ: η = (P_out / P_in) × 100%',
    summaryTitle: 'প্রধান রূপান্তর নীতিসমূহ',
    motorSummary: 'মোটর চৌম্বক ক্ষেত্রে লরেন্টজ বলের মাধ্যমে বিদ্যুৎ শক্তিকে যান্ত্রিক ঘূর্ণন শক্তিতে রূপান্তর করে।',
    genSummary: 'জেনারেটর ফ্যারাডের আবেশ নীতি অনুযায়ী যান্ত্রিক শক্তিকে বিদ্যুৎ শক্তিতে রূপান্তরিত করে।',
    transSummary: 'ট্রান্সফরমার পারস্পরিক আবেশের মাধ্যমে স্থিরভাবে AC ভোল্টেজ রূপান্তর করে (কোনো চলমান যন্ত্রাংশ নেই)।',
    lossBreakdown: 'ক্ষতির আনুমানিক বণ্টন',
    torqueSpeedOutput: 'যান্ত্রিক আউটপুট (১৫০০ RPM এ)',
    torqueLabel: 'উৎপন্ন টর্ক',
    terminalVoltage: 'আনুমানিক টার্মিনাল ভোল্টেজ',
    statusNormal: 'স্বাভাবিক স্থিতিশীল পরিচালনা',
  }
};

export const MachineEnergyConversionAnimation: React.FC<MachineEnergyConversionAnimationProps> = ({
  currentLanguage
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  const [mode, setMode] = useState<MachineMode>('MOTOR');
  const [inputPowerKW, setInputPowerKW] = useState<number>(10); // kW (1 to 100 kW)
  const [efficiencyPct, setEfficiencyPct] = useState<number>(88); // % (50% to 98%)

  const inputPowerId = useId();
  const efficiencyId = useId();

  // Safety checks against NaN / Infinity / division by zero
  const safeInputKW = Math.max(0.1, isNaN(inputPowerKW) ? 10 : inputPowerKW);
  const safeEffPct = Math.min(99.5, Math.max(1, isNaN(efficiencyPct) ? 88 : efficiencyPct));

  // Calculations
  const outputPowerKW = (safeInputKW * safeEffPct) / 100;
  const lossPowerKW = Math.max(0, safeInputKW - outputPowerKW);

  // Derived metrics
  // For Motor: Torque at 1500 RPM (P = 2*pi*N*T / 60 => T = P_out * 60 / (2*pi*N))
  const speedRpm = 1500;
  const torqueNm = (outputPowerKW * 1000 * 60) / (2 * Math.PI * speedRpm);

  // For Generator: Output current at 400V 3-phase (P = sqrt(3)*V*I*pf, say pf=0.85)
  const genVoltage = 400;
  const genCurrentA = (outputPowerKW * 1000) / (Math.sqrt(3) * genVoltage * 0.85);

  // For Transformer: Secondary kVA (kVA = kW / pf, pf=0.9)
  const transKVA = outputPowerKW / 0.9;

  const handleReset = () => {
    setMode('MOTOR');
    setInputPowerKW(10);
    setEfficiencyPct(88);
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={t.summaryTitle}
      calloutText={
        mode === 'MOTOR'
          ? t.motorSummary
          : mode === 'GENERATOR'
          ? t.genSummary
          : t.transSummary
      }
      formulaText={t.efficiencyFormula}
      extraHeaderActions={
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800" role="radiogroup" aria-label={t.modeSelect}>
          <button
            type="button"
            role="radio"
            aria-checked={mode === 'MOTOR'}
            onClick={() => setMode('MOTOR')}
            className={`px-2.5 py-1 text-xs font-bold rounded transition-all ${
              mode === 'MOTOR'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Motor
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={mode === 'GENERATOR'}
            onClick={() => setMode('GENERATOR')}
            className={`px-2.5 py-1 text-xs font-bold rounded transition-all ${
              mode === 'GENERATOR'
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Generator
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={mode === 'TRANSFORMER'}
            onClick={() => setMode('TRANSFORMER')}
            className={`px-2.5 py-1 text-xs font-bold rounded transition-all ${
              mode === 'TRANSFORMER'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Transformer
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-4 space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {t.modeSelect}
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400">
              {mode}
            </span>
          </div>

          {/* Input Power Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <label htmlFor={inputPowerId} className="text-slate-300">
                {t.inputPower}
              </label>
              <span className="font-mono text-cyan-300 font-bold">
                {safeInputKW.toFixed(1)} kW
              </span>
            </div>
            <input
              id={inputPowerId}
              type="range"
              min="1"
              max="50"
              step="0.5"
              value={safeInputKW}
              onChange={(e) => setInputPowerKW(parseFloat(e.target.value))}
              aria-label={t.inputPower}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>1.0 kW</span>
              <span>25.0 kW</span>
              <span>50.0 kW</span>
            </div>
          </div>

          {/* Efficiency Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <label htmlFor={efficiencyId} className="text-slate-300">
                {t.efficiency} (η)
              </label>
              <span className="font-mono text-emerald-300 font-bold">
                {safeEffPct.toFixed(1)}%
              </span>
            </div>
            <input
              id={efficiencyId}
              type="range"
              min="50"
              max="98"
              step="0.5"
              value={safeEffPct}
              onChange={(e) => setEfficiencyPct(parseFloat(e.target.value))}
              aria-label={t.efficiency}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>50% (Low)</span>
              <span>85% (Typical)</span>
              <span>98% (High)</span>
            </div>
          </div>

          {/* Live Metrics Card */}
          <div className="pt-2 border-t border-slate-800 space-y-2">
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{t.outputPower}</span>
                <span className="text-sm font-bold text-emerald-400">{outputPowerKW.toFixed(2)} kW</span>
              </div>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{t.losses}</span>
                <span className="text-sm font-bold text-rose-400">{lossPowerKW.toFixed(2)} kW</span>
              </div>
            </div>

            {/* Mode-Specific Physical Metric */}
            <div className="p-2.5 bg-slate-900/90 rounded-lg border border-cyan-900/50 text-xs">
              {mode === 'MOTOR' && (
                <div>
                  <span className="text-[10px] text-slate-400 block">{t.torqueLabel} (at 1500 RPM)</span>
                  <span className="font-mono font-bold text-cyan-300 text-sm">{torqueNm.toFixed(1)} N·m</span>
                </div>
              )}
              {mode === 'GENERATOR' && (
                <div>
                  <span className="text-[10px] text-slate-400 block">{t.terminalVoltage} (400V 3Φ Line I)</span>
                  <span className="font-mono font-bold text-emerald-300 text-sm">{genCurrentA.toFixed(1)} A</span>
                </div>
              )}
              {mode === 'TRANSFORMER' && (
                <div>
                  <span className="text-[10px] text-slate-400 block">Apparent Power Rating</span>
                  <span className="font-mono font-bold text-amber-300 text-sm">{transKVA.toFixed(2)} kVA</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Visual Energy Flow Diagram */}
        <div className="lg:col-span-8 space-y-4">
          <div className="p-4 sm:p-6 bg-slate-950 rounded-xl border border-slate-800 relative overflow-hidden">
            <h4 className="text-xs font-mono font-bold text-slate-400 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              {t.energyFlow} — {mode === 'MOTOR' ? t.motorMode : mode === 'GENERATOR' ? t.genMode : t.transMode}
            </h4>

            {/* SVG Visual Diagram */}
            <div className="w-full flex items-center justify-center">
              <svg viewBox="0 0 620 230" className="w-full h-auto max-h-56">
                <defs>
                  <linearGradient id="elecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="100%" stopColor="#0369a1" />
                  </linearGradient>
                  <linearGradient id="mechGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#059669" />
                    <stop offset="100%" stopColor="#047857" />
                  </linearGradient>
                  <linearGradient id="fieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#6d28d9" />
                  </linearGradient>
                  <linearGradient id="lossGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#b91c1c" />
                  </linearGradient>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#38bdf8" />
                  </marker>
                  <marker id="arrowhead-loss" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#f87171" />
                  </marker>
                </defs>

                {/* Left Block (Input) */}
                <g transform="translate(20, 60)">
                  <rect
                    x="0"
                    y="0"
                    width="140"
                    height="90"
                    rx="8"
                    fill={mode === 'GENERATOR' ? 'url(#mechGrad)' : 'url(#elecGrad)'}
                    stroke="#38bdf8"
                    strokeWidth="2"
                  />
                  <text x="70" y="24" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
                    {mode === 'GENERATOR' ? t.mechanicalEnergy : t.electricalEnergy}
                  </text>
                  <text x="70" y="42" textAnchor="middle" fill="#bae6fd" fontSize="10">
                    [ Input Stage ]
                  </text>
                  <rect x="20" y="52" width="100" height="26" rx="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
                  <text x="70" y="69" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="monospace">
                    {safeInputKW.toFixed(1)} kW
                  </text>
                </g>

                {/* Arrow 1: Input to Medium */}
                <g>
                  <line
                    x1="162"
                    y1="105"
                    x2="228"
                    y2="105"
                    stroke="#38bdf8"
                    strokeWidth="4"
                    markerEnd="url(#arrowhead)"
                    strokeDasharray={isReducedMotion ? 'none' : '6 4'}
                    className={isReducedMotion ? '' : 'animate-pulse'}
                  />
                  <text x="195" y="95" textAnchor="middle" fill="#7dd3fc" fontSize="9" fontWeight="bold">
                    P_in
                  </text>
                </g>

                {/* Center Block (Magnetic Conversion Medium) */}
                <g transform="translate(230, 45)">
                  <rect
                    x="0"
                    y="0"
                    width="160"
                    height="120"
                    rx="10"
                    fill="url(#fieldGrad)"
                    stroke="#c084fc"
                    strokeWidth="2"
                  />
                  <circle cx="80" cy="45" r="22" fill="#3b0764" stroke="#e879f9" strokeWidth="2" />
                  <Zap className="w-6 h-6 text-yellow-300" x="68" y="33" />
                  <text x="80" y="80" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">
                    {mode === 'TRANSFORMER' ? t.magneticFlux : t.magneticField}
                  </text>
                  <text x="80" y="96" textAnchor="middle" fill="#e9d5ff" fontSize="8">
                    {mode === 'TRANSFORMER' ? 'Stationary Core B(t)' : 'Air-Gap B Field'}
                  </text>
                  <text x="80" y="110" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">
                    η = {safeEffPct.toFixed(1)}%
                  </text>
                </g>

                {/* Loss Branch (Downward from Medium) */}
                <g>
                  <line
                    x1="310"
                    y1="167"
                    x2="310"
                    y2="198"
                    stroke="#f87171"
                    strokeWidth="3"
                    markerEnd="url(#arrowhead-loss)"
                    strokeDasharray={isReducedMotion ? 'none' : '4 3'}
                  />
                  <rect x="245" y="200" width="130" height="24" rx="4" fill="url(#lossGrad)" stroke="#fca5a5" strokeWidth="1" />
                  <text x="310" y="215" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace">
                    Loss: {lossPowerKW.toFixed(2)} kW
                  </text>
                </g>

                {/* Arrow 2: Medium to Output */}
                <g>
                  <line
                    x1="392"
                    y1="105"
                    x2="458"
                    y2="105"
                    stroke="#34d399"
                    strokeWidth="4"
                    markerEnd="url(#arrowhead)"
                    strokeDasharray={isReducedMotion ? 'none' : '6 4'}
                    className={isReducedMotion ? '' : 'animate-pulse'}
                  />
                  <text x="425" y="95" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontWeight="bold">
                    P_out
                  </text>
                </g>

                {/* Right Block (Output) */}
                <g transform="translate(460, 60)">
                  <rect
                    x="0"
                    y="0"
                    width="140"
                    height="90"
                    rx="8"
                    fill={mode === 'MOTOR' ? 'url(#mechGrad)' : 'url(#elecGrad)'}
                    stroke="#34d399"
                    strokeWidth="2"
                  />
                  <text x="70" y="24" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">
                    {mode === 'MOTOR' ? t.mechanicalEnergy : t.electricalEnergy}
                  </text>
                  <text x="70" y="42" textAnchor="middle" fill="#a7f3d0" fontSize="10">
                    [ Useful Output ]
                  </text>
                  <rect x="20" y="52" width="100" height="26" rx="4" fill="#0f172a" stroke="#34d399" strokeWidth="1" />
                  <text x="70" y="69" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold" fontFamily="monospace">
                    {outputPowerKW.toFixed(2)} kW
                  </text>
                </g>
              </svg>
            </div>

            {/* Bottom Loss Breakdown & Safety Status */}
            <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>
                  {mode === 'TRANSFORMER' ? t.coreCopperLoss : t.heatLoss}:{' '}
                  <strong className="text-rose-300 font-mono font-bold">
                    {lossPowerKW.toFixed(2)} kW ({((lossPowerKW / safeInputKW) * 100).toFixed(1)}%)
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 font-semibold font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.statusNormal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
