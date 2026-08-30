import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Zap, Sparkles, TrendingUp, TrendingDown, Info, ShieldAlert } from 'lucide-react';
import { Language } from '../../types';

interface SelfInductionAnimationProps {
  currentLanguage: Language;
}

export const SelfInductionAnimation: React.FC<SelfInductionAnimationProps> = ({ currentLanguage }) => {
  // Parameters
  const [voltage, setVoltage] = useState<number>(24); // Volts
  const [resistance, setResistance] = useState<number>(10); // Ohms
  const [inductance, setInductance] = useState<number>(2.0); // Henry
  const [circuitMode, setCircuitMode] = useState<'CHARGE' | 'DISCHARGE' | 'ABRUPT_OPEN'>('CHARGE');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [elapsedTime, setElapsedTime] = useState<number>(0.0); // seconds

  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());

  // Mathematical Calculations
  const tau = resistance > 0 ? inductance / resistance : 0; // Time constant (s)
  const maxCurrent = resistance > 0 ? voltage / resistance : 0; // I_0 (A)
  const maxStoredEnergy = 0.5 * inductance * maxCurrent * maxCurrent; // Joules (J)

  // Current and Inductor Voltage at elapsedTime
  let currentI = 0;
  let inductorVoltage = 0;
  let backEMFSpike = 0;

  if (circuitMode === 'CHARGE') {
    // Growth: i(t) = I_0 * (1 - e^(-t / tau))
    const expFactor = Math.exp(-elapsedTime / (tau || 0.001));
    currentI = maxCurrent * (1 - expFactor);
    // v_L(t) = V * e^(-t / tau)
    inductorVoltage = voltage * expFactor;
  } else if (circuitMode === 'DISCHARGE') {
    // Decay: i(t) = I_0 * e^(-t / tau)
    const expFactor = Math.exp(-elapsedTime / (tau || 0.001));
    currentI = maxCurrent * expFactor;
    // v_L(t) = -V * e^(-t / tau)
    inductorVoltage = -voltage * expFactor;
  } else {
    // ABRUPT OPEN: extreme high back EMF spark
    currentI = 0;
    inductorVoltage = -voltage * 15; // 15x inductive spike
    backEMFSpike = voltage * 15;
  }

  const currentEnergy = 0.5 * inductance * currentI * currentI;

  // Animation Loop
  useEffect(() => {
    const update = (now: number) => {
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (isPlaying && circuitMode !== 'ABRUPT_OPEN') {
        setElapsedTime((prev) => {
          const next = prev + dt * 0.8;
          if (next > tau * 5.5) return tau * 5.5; // Cap at 5.5 tau
          return next;
        });
      }
      animFrameRef.current = requestAnimationFrame(update);
    };

    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(update);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, circuitMode, tau]);

  const labels = {
    en: {
      title: 'Self-Induction & Inductor Energy Storage Simulator',
      subtitle: 'Transient current growth, decay, time constant τ = L/R, and stored magnetic energy (W = ½LI²)',
      modeCharge: 'Switch ON (Current Growth)',
      modeDischarge: 'Freewheel (Current Decay)',
      modeSpark: 'Abrupt Switch OPEN (High Back-EMF Kick)',
      voltage: 'Supply DC Voltage (V)',
      resistance: 'Series Resistance (R)',
      inductance: 'Self-Inductance (L)',
      timeConstant: 'Time Constant (τ = L/R)',
      steadyCurrent: 'Steady-State Current (I₀ = V/R)',
      currentVal: 'Instantaneous Current i(t)',
      inductorVoltVal: 'Inductor Back-EMF v_L(t)',
      storedEnergyVal: 'Stored Magnetic Energy W',
      time63: '63.2% rise at t = 1τ',
      time37: '36.8% remaining at t = 1τ',
      steadyStateNote: 'After 5τ (~99.3%), current reaches steady state where inductor acts as pure short circuit.',
      sparkWarning: 'DANGER: Breaking inductive current abruptly causes di/dt → ∞, inducing a destructive voltage spike (-L di/dt) across switch contacts!',
      play: 'Play Response',
      pause: 'Pause',
      reset: 'Restart Transient',
    },
    hi: {
      title: 'स्व-प्रेरण एवं प्रेरक ऊर्जा संचयन सिमुलेटर',
      subtitle: 'क्षणिक धारा वृद्धि, क्षय, समय स्थिरांक τ = L/R, एवं संचित चुंबकीय ऊर्जा (W = ½LI²)',
      modeCharge: 'स्विच ऑन (धारा वृद्धि)',
      modeDischarge: 'फ्रीव्हील (धारा क्षय)',
      modeSpark: 'स्विच अचानक खोलना (उच्च बैक-EMF स्पार्क)',
      voltage: 'डीसी आपूर्ति वोल्टेज (V)',
      resistance: 'श्रेणी प्रतिरोध (R)',
      inductance: 'स्व-प्रेरकत्व (L)',
      timeConstant: 'समय स्थिरांक (τ = L/R)',
      steadyCurrent: 'स्थिर अवस्था धारा (I₀ = V/R)',
      currentVal: 'तात्कालिक धारा i(t)',
      inductorVoltVal: 'प्रेरक बैक-EMF v_L(t)',
      storedEnergyVal: 'संचित चुंबकीय ऊर्जा W',
      time63: 't = 1τ पर 63.2% वृद्धि',
      time37: 't = 1τ पर 36.8% शेष',
      steadyStateNote: '5τ (~99.3%) के बाद, धारा स्थिर हो जाती है और प्रेरक शुद्ध शॉर्ट सर्किट की तरह व्यवहार करता है।',
      sparkWarning: 'चेतावनी: प्रेरक धारा को अचानक तोड़ने से di/dt → ∞ हो जाता है, जिससे स्विच संपर्कों पर खतरनाक वोल्टेज स्पाइक उत्पन्न होती है!',
      play: 'चलाएं',
      pause: 'रोकें',
      reset: 'पुनः प्रारंभ करें',
    },
    bn: {
      title: 'স্ব-আবেশ ও ইন্ডাক্টর শক্তি সঞ্চয় সিমুলেটর',
      subtitle: 'ক্ষণস্থায়ী কারেন্ট বৃদ্ধি, ক্ষয়, সময় ধ্রুবক τ = L/R এবং সঞ্চিত চৌম্বক শক্তি (W = ½LI²)',
      modeCharge: 'সুইচ অন (কারেন্ট বৃদ্ধি)',
      modeDischarge: 'ফ্রি-হুইল (কারেন্ট ক্ষয়)',
      modeSpark: 'সুইচ হঠাৎ বিচ্ছিন্ন (তীব্র ব্যাক-EMF স্পার্ক)',
      voltage: 'ডিসি সরবরাহ ভোল্টেজ (V)',
      resistance: 'সিরিজ রোধ (R)',
      inductance: 'স্ব-আবেশাঙ্ক (L)',
      timeConstant: 'সময় ধ্রুবক (τ = L/R)',
      steadyCurrent: 'স্থির অবস্থার কারেন্ট (I₀ = V/R)',
      currentVal: 'তাৎক্ষণিক কারেন্ট i(t)',
      inductorVoltVal: 'ইন্ডাক্টর ব্যাক-EMF v_L(t)',
      storedEnergyVal: 'সঞ্চিত চৌম্বক শক্তি W',
      time63: 't = ১τ তে ৬৩.২% বৃদ্ধি',
      time37: 't = ১τ তে ৩৬.৮% অবশিষ্ট',
      steadyStateNote: '৫τ (~৯৯.৩%) পর কারেন্ট স্থির হয় এবং ইন্ডাক্টর আদর্শ শর্ট সার্কিট হিসেবে কাজ করে।',
      sparkWarning: 'সতর্কতা: ইন্ডাক্টিভ কারেন্ট হঠাৎ বন্ধ করলে di/dt → ∞ হয়ে সুইচে মারাত্মক ভোল্টেজ স্পাইক (-L di/dt) সৃষ্টি করে!',
      play: 'প্লে করুন',
      pause: 'পজ করুন',
      reset: 'পুনরায় চালু করুন',
    }
  }[currentLanguage];

  // Curve Generation for Graph Viewport
  const graphWidth = 320;
  const graphHeight = 100;
  const graphYBase = 110;

  const totalGraphTau = 5.0;
  const pointsCount = 100;
  let currentCurvePath = '';
  let voltageCurvePath = '';

  for (let i = 0; i < pointsCount; i++) {
    const tFrac = (i / (pointsCount - 1)) * totalGraphTau;
    const x = 30 + (i / (pointsCount - 1)) * graphWidth;

    let iRatio = 0;
    let vRatio = 0;

    if (circuitMode === 'CHARGE') {
      iRatio = 1 - Math.exp(-tFrac);
      vRatio = Math.exp(-tFrac);
    } else {
      iRatio = Math.exp(-tFrac);
      vRatio = -Math.exp(-tFrac);
    }

    const yI = graphYBase - iRatio * (graphHeight * 0.8);
    const yV = graphYBase - (circuitMode === 'CHARGE' ? vRatio * (graphHeight * 0.8) : (vRatio + 1) * (graphHeight * 0.4));

    if (i === 0) {
      currentCurvePath = `M ${x} ${yI}`;
      voltageCurvePath = `M ${x} ${yV}`;
    } else {
      currentCurvePath += ` L ${x} ${yI}`;
      voltageCurvePath += ` L ${x} ${yV}`;
    }
  }

  // Cursor coordinates
  const currentTauRatio = tau > 0 ? elapsedTime / tau : 0;
  const cursorX = 30 + Math.min(1, currentTauRatio / totalGraphTau) * graphWidth;
  const cursorY = graphYBase - (currentI / (maxCurrent || 1)) * (graphHeight * 0.8);

  // 1-Tau marker x coordinate
  const tauMarkerX = 30 + (1 / totalGraphTau) * graphWidth;

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 text-slate-100 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-400 animate-pulse" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-100">{labels.title}</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              isPlaying
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
            }`}
            aria-label={isPlaying ? labels.pause : labels.play}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setElapsedTime(0.0)}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
            title={labels.reset}
            aria-label={labels.reset}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mode Switcher Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
        <button
          onClick={() => {
            setCircuitMode('CHARGE');
            setElapsedTime(0);
          }}
          className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
            circuitMode === 'CHARGE'
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md shadow-emerald-500/10'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-850 hover:text-slate-200'
          }`}
        >
          <TrendingUp className="w-4 h-4 text-emerald-400" />
          <span>{labels.modeCharge}</span>
        </button>

        <button
          onClick={() => {
            setCircuitMode('DISCHARGE');
            setElapsedTime(0);
          }}
          className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
            circuitMode === 'DISCHARGE'
              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/10'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-850 hover:text-slate-200'
          }`}
        >
          <TrendingDown className="w-4 h-4 text-cyan-400" />
          <span>{labels.modeDischarge}</span>
        </button>

        <button
          onClick={() => {
            setCircuitMode('ABRUPT_OPEN');
            setElapsedTime(0);
          }}
          className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
            circuitMode === 'ABRUPT_OPEN'
              ? 'bg-red-500/20 text-red-300 border-red-500/50 shadow-md shadow-red-500/10'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-850 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-bounce" />
          <span>{labels.modeSpark}</span>
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Circuit Schematic Diagram with Live Current Dots & Coil Field */}
        <div className="lg:col-span-6 bg-slate-900/80 rounded-xl border border-slate-800 p-4 flex flex-col items-center justify-center relative">
          <svg viewBox="0 0 360 220" className="w-full h-auto max-h-[240px]">
            {/* Outer Circuit Loop */}
            <rect x="40" y="40" width="280" height="140" rx="8" fill="none" stroke="#475569" strokeWidth="3" />

            {/* DC Voltage Source (Left Branch) */}
            <g transform="translate(40, 110)">
              <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="0" y="-3" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">+</text>
              <text x="0" y="11" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">-</text>
              <text x="-25" y="4" textAnchor="end" fill="#38bdf8" fontSize="10" fontWeight="bold">
                {voltage}V
              </text>
            </g>

            {/* Switch Mechanism (Top Left) */}
            <g transform="translate(100, 40)">
              <circle cx="0" cy="0" r="4" fill="#94a3b8" />
              <circle cx="40" cy="0" r="4" fill="#94a3b8" />
              {circuitMode === 'ABRUPT_OPEN' ? (
                <g>
                  {/* Open switch blade with spark discharge */}
                  <line x1="0" y1="0" x2="25" y2="-20" stroke="#ef4444" strokeWidth="3" />
                  {/* Electric Arc Spark */}
                  <path d="M 0 0 L 10 -8 L 18 -2 L 32 -14 L 40 0" stroke="#fbbf24" strokeWidth="2" fill="none" className="animate-pulse" />
                  <circle cx="20" cy="-6" r="12" fill="#fbbf24" opacity="0.3" className="animate-ping" />
                </g>
              ) : (
                <line x1="0" y1="0" x2="40" y2="0" stroke="#10b981" strokeWidth="3" />
              )}
              <text x="20" y="-12" fill="#cbd5e1" fontSize="9" fontWeight="bold" textAnchor="middle">
                Switch (SW)
              </text>
            </g>

            {/* Resistor (Top Right) */}
            <g transform="translate(220, 40)">
              <rect x="-20" y="-10" width="40" height="20" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
              <text x="0" y="4" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">
                R={resistance}Ω
              </text>
            </g>

            {/* Inductor Coil with Iron Core (Right Branch) */}
            <g transform="translate(320, 110)">
              {/* Iron core lines */}
              <line x1="18" y1="-30" x2="18" y2="30" stroke="#64748b" strokeWidth="2" />
              <line x1="22" y1="-30" x2="22" y2="30" stroke="#64748b" strokeWidth="2" />

              {/* Coil Loops */}
              {[-25, -10, 5, 20].map((yP, i) => (
                <path
                  key={i}
                  d={`M 0 ${yP} C 16 ${yP - 8}, 16 ${yP + 8}, 0 ${yP + 8}`}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3"
                />
              ))}
              <text x="-12" y="4" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="end">
                L={inductance}H
              </text>

              {/* Magnetic field flux lines through coil */}
              {currentI > 0.05 && (
                <ellipse
                  cx="8"
                  cy="0"
                  rx="14"
                  ry="45"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  opacity={Math.min(1, currentI / maxCurrent)}
                />
              )}
            </g>

            {/* Live Current Flow Arrow on Bottom Loop */}
            {currentI > 0.01 && (
              <g transform="translate(180, 180)">
                <line x1="-30" y1="0" x2="30" y2="0" stroke="#10b981" strokeWidth="3" />
                <polygon points="30,-5 42,0 30,5" fill="#10b981" />
                <text x="0" y="16" fill="#10b981" fontSize="9" fontWeight="bold" textAnchor="middle">
                  i(t) = {currentI.toFixed(2)} A
                </text>
              </g>
            )}
          </svg>

          {/* Spark Warning or Normal Status */}
          {circuitMode === 'ABRUPT_OPEN' ? (
            <div className="w-full mt-2 p-2.5 rounded-lg bg-red-950/80 border border-red-800 text-[11px] text-red-200 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{labels.sparkWarning}</span>
            </div>
          ) : (
            <div className="w-full mt-2 p-2 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
              <span className="text-cyan-400 font-bold">Steady-State Response: </span>
              {labels.steadyStateNote}
            </div>
          )}
        </div>

        {/* Right: Transient Graph (Current Growth & Decay) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-mono font-bold text-slate-300">
                Current Response: i(t) vs Time (t / τ)
              </span>
              <div className="flex items-center gap-3 text-[11px] font-mono">
                <span className="text-emerald-400 font-bold">― Current i(t)</span>
                <span className="text-amber-400 font-bold">― Back-EMF v_L(t)</span>
              </div>
            </div>

            {/* SVG Graph */}
            <svg viewBox="0 0 380 140" className="w-full h-auto bg-slate-950 rounded-lg border border-slate-800">
              {/* Grid Lines */}
              <line x1="30" y1={graphYBase} x2="360" y2={graphYBase} stroke="#475569" strokeWidth="1.5" />
              <line x1="30" y1="20" x2="30" y2={graphYBase} stroke="#475569" strokeWidth="1.5" />

              {/* 1 Tau Vertical Marker Line */}
              <line x1={tauMarkerX} y1="20" x2={tauMarkerX} y2={graphYBase} stroke="#64748b" strokeWidth="1" strokeDasharray="3 3" />
              <text x={tauMarkerX} y="15" fill="#94a3b8" fontSize="8" textAnchor="middle">1τ</text>

              {/* 63.2% or 36.8% horizontal threshold line */}
              {circuitMode === 'CHARGE' ? (
                <>
                  <line x1="30" y1={graphYBase - 0.632 * graphHeight * 0.8} x2="360" y2={graphYBase - 0.632 * graphHeight * 0.8} stroke="#059669" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="360" y={graphYBase - 0.632 * graphHeight * 0.8 - 3} fill="#34d399" fontSize="8" textAnchor="end">63.2% I₀</text>
                </>
              ) : (
                <>
                  <line x1="30" y1={graphYBase - 0.368 * graphHeight * 0.8} x2="360" y2={graphYBase - 0.368 * graphHeight * 0.8} stroke="#0284c7" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="360" y={graphYBase - 0.368 * graphHeight * 0.8 - 3} fill="#38bdf8" fontSize="8" textAnchor="end">36.8% I₀</text>
                </>
              )}

              {/* Plot Paths */}
              <path d={currentCurvePath} fill="none" stroke="#10b981" strokeWidth="2.5" />
              <path d={voltageCurvePath} fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 2" />

              {/* Animated Progress Dot */}
              <circle cx={cursorX} cy={cursorY} r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            </svg>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">{labels.timeConstant}</span>
                <span className="text-sm font-bold font-mono text-cyan-400">
                  {tau.toFixed(3)} <span className="text-[10px]">s</span>
                </span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">{labels.currentVal}</span>
                <span className="text-sm font-bold font-mono text-emerald-400">
                  {currentI.toFixed(2)} <span className="text-[10px]">A</span>
                </span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">{labels.inductorVoltVal}</span>
                <span className="text-sm font-bold font-mono text-amber-400">
                  {inductorVoltage.toFixed(1)} <span className="text-[10px]">V</span>
                </span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">{labels.storedEnergyVal}</span>
                <span className="text-sm font-bold font-mono text-purple-400">
                  {currentEnergy.toFixed(2)} <span className="text-[10px]">J</span>
                </span>
              </div>
            </div>
          </div>

          {/* Formula Callout */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-3 flex flex-col gap-1">
            <span className="text-xs font-mono font-bold text-amber-400">Magnetic Energy Storage Formula:</span>
            <span className="text-sm font-mono font-bold text-slate-100">
              W = ½ · L · I² = 0.5 × {inductance} × ({maxCurrent.toFixed(2)})² = {maxStoredEnergy.toFixed(2)} Joules
            </span>
          </div>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800">
        {/* Voltage Slider */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="volt-slider" className="text-xs font-medium text-slate-300">{labels.voltage}</label>
            <span className="text-xs font-bold font-mono text-cyan-400">{voltage} V</span>
          </div>
          <input
            id="volt-slider"
            type="range"
            min="6"
            max="120"
            step="6"
            value={voltage}
            onChange={(e) => setVoltage(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            aria-label={labels.voltage}
          />
        </div>

        {/* Resistance Slider */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="res-slider" className="text-xs font-medium text-slate-300">{labels.resistance}</label>
            <span className="text-xs font-bold font-mono text-amber-400">{resistance} Ω</span>
          </div>
          <input
            id="res-slider"
            type="range"
            min="2"
            max="50"
            step="2"
            value={resistance}
            onChange={(e) => setResistance(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
            aria-label={labels.resistance}
          />
        </div>

        {/* Inductance Slider */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="ind-slider" className="text-xs font-medium text-slate-300">{labels.inductance}</label>
            <span className="text-xs font-bold font-mono text-emerald-400">{inductance.toFixed(1)} H</span>
          </div>
          <input
            id="ind-slider"
            type="range"
            min="0.2"
            max="10.0"
            step="0.2"
            value={inductance}
            onChange={(e) => setInductance(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            aria-label={labels.inductance}
          />
        </div>
      </div>
    </div>
  );
};
