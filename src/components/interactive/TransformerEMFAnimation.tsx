import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, Zap, ArrowRight, Activity, Gauge, Cpu, HelpCircle, ShieldCheck } from 'lucide-react';

interface TransformerEMFAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

type TransformerMode = 'step-up' | 'step-down' | 'isolation';

export const TransformerEMFAnimation: React.FC<TransformerEMFAnimationProps> = ({ language = 'en' }) => {
  const [mode, setMode] = useState<TransformerMode>('step-up');
  const [frequency, setFrequency] = useState<number>(50); // Hz
  const [turnsN1, setTurnsN1] = useState<number>(400); // Primary turns
  const [turnsN2, setTurnsN2] = useState<number>(800); // Secondary turns
  const [fluxMilliWb, setFluxMilliWb] = useState<number>(12); // mWb (Φm)
  const [primaryVoltageV1, setPrimaryVoltageV1] = useState<number>(230); // Volts
  const [loadCurrentI2, setLoadCurrentI2] = useState<number>(10); // Amperes
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [animTime, setAnimTime] = useState<number>(0);

  const requestRef = useRef<number | null>(null);

  // Animation loop for flux & alternating waveform
  useEffect(() => {
    let lastTime = performance.now();
    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      if (isPlaying) {
        setAnimTime((prev) => (prev + delta * (frequency / 50)) % 100);
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, frequency]);

  // Handle Preset Modes
  const handleModeChange = (newMode: TransformerMode) => {
    setMode(newMode);
    if (newMode === 'step-up') {
      setTurnsN1(300);
      setTurnsN2(900);
    } else if (newMode === 'step-down') {
      setTurnsN1(800);
      setTurnsN2(200);
    } else if (newMode === 'isolation') {
      setTurnsN1(500);
      setTurnsN2(500);
    }
  };

  // Safe Math Calculations
  const safeFreq = Math.max(1, frequency);
  const safeN1 = Math.max(1, turnsN1);
  const safeN2 = Math.max(1, turnsN2);
  const safePhiM = Math.max(0.0001, fluxMilliWb / 1000); // Wb
  const safeV1 = Math.max(1, primaryVoltageV1);
  const safeI2 = Math.max(0, loadCurrentI2);

  // Exact EMF Equations: E = 4.44 * f * N * Phi_m
  const E1 = 4.44 * safeFreq * safeN1 * safePhiM;
  const E2 = 4.44 * safeFreq * safeN2 * safePhiM;

  // Ratios
  const transformationRatioK = safeN2 / safeN1; // V2/V1 = N2/N1 = K
  const turnsRatioA = safeN1 / safeN2; // N1/N2 = a
  const secondaryVoltageV2 = safeV1 * transformationRatioK;
  const primaryCurrentI1 = safeI2 * transformationRatioK; // Ideal I1 = I2 * (N2/N1)

  // Power Calculations
  const powerOutWatts = secondaryVoltageV2 * safeI2;
  const powerInWatts = safeV1 * primaryCurrentI1 + 25; // with small nominal core loss
  const efficiency = powerOutWatts > 0 ? Math.min(99.4, (powerOutWatts / (powerOutWatts + 35)) * 100) : 100;

  const handleReset = () => {
    setMode('step-up');
    setFrequency(50);
    setTurnsN1(400);
    setTurnsN2(800);
    setFluxMilliWb(12);
    setPrimaryVoltageV1(230);
    setLoadCurrentI2(10);
  };

  const t = {
    title: {
      en: 'Interactive Transformer EMF & Alternating Flux Simulator',
      hi: 'इंटरैक्टिव ट्रांसफॉर्मर EMF एवं प्रत्यावर्ती फ्लक्स सिम्युलेटर',
      bn: 'ইন্টারেক্টিভ ট্রান্সফরমার EMF ও পরিবর্তী ফ্লাক্স সিমুলেটর'
    },
    stepUp: { en: 'Step-Up (N2 > N1)', hi: 'स्टेप-अप (N2 > N1)', bn: 'স্টেপ-আপ (N2 > N1)' },
    stepDown: { en: 'Step-Down (N2 < N1)', hi: 'स्टेप-डाउन (N2 < N1)', bn: 'স্টেপ-ডাউন (N2 < N1)' },
    isolation: { en: '1:1 Isolation (N2 = N1)', hi: '1:1 आइसोलेशन (N2 = N1)', bn: '১:১ আইসোলেশন (N2 = N1)' },
    freqLabel: { en: 'AC Frequency (f)', hi: 'AC आवृत्ति (f)', bn: 'AC কম্পাঙ্ক (f)' },
    n1Label: { en: 'Primary Turns (N1)', hi: 'प्राइमरी टर्न्स (N1)', bn: 'প্রাইমারি টার্ন (N1)' },
    n2Label: { en: 'Secondary Turns (N2)', hi: 'सेकेंडरी टर्न्स (N2)', bn: 'সেকেন্ডারি টার্ন (N2)' },
    fluxLabel: { en: 'Max Core Flux (Φm)', hi: 'अधिकतम कोर फ्लक्स (Φm)', bn: 'সর্বোচ্চ কোর ফ্লাক্স (Φm)' },
    v1Label: { en: 'Primary Voltage (V1)', hi: 'प्राइमरी वोल्टेज (V1)', bn: 'প্রাইমারি ভোল্টেজ (V1)' },
    i2Label: { en: 'Load Current (I2)', hi: 'लोड धारा (I2)', bn: 'লোড কারেন্ট (I2)' },
    calcE1: { en: 'Primary Induced EMF (E1)', hi: 'प्राइमरी प्रेरित EMF (E1)', bn: 'প্রাইমারি আবিষ্ট EMF (E1)' },
    calcE2: { en: 'Secondary Induced EMF (E2)', hi: 'सेकेंडरी प्रेरित EMF (E2)', bn: 'সেকেন্ডারি আবিষ্ট EMF (E2)' },
    transRatio: { en: 'Transformation Ratio (K = N2/N1)', hi: 'रूपांतरण अनुपात (K = N2/N1)', bn: 'রূপান্তর অনুপাত (K = N2/N1)' },
    v2Est: { en: 'Secondary Terminal V2', hi: 'सेकेंडरी टर्मिनल V2', bn: 'সেকেন্ডারি ভোল্টেজ V2' },
    i1Est: { en: 'Primary Input Current I1', hi: 'प्राइमरी इनपुट धारा I1', bn: 'প্রাইমারি ইনপুট কারেন্ট I1' },
    efficiencyLabel: { en: 'Operating Efficiency (η)', hi: 'परिचालन दक्षता (η)', bn: 'কার্যকর দক্ষতা (η)' },
    reset: { en: 'Reset Defaults', hi: 'रीसेट करें', bn: 'রিসেট করুন' },
    fluxCycle: { en: 'Sinusoidal Core Flux: Φ(t) = Φm sin(2πft)', hi: 'ज्यावक्रीय कोर फ्लक्स: Φ(t) = Φm sin(2πft)', bn: 'সাইনুসয়েডাল কোর ফ্লাক্স: Φ(t) = Φm sin(2πft)' }
  };

  // Instantaneous flux position for visual arrows
  const instantaneousPhase = Math.sin(animTime * 2 * Math.PI);
  const fluxArrowOffset = (animTime * 50) % 20;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
              {t.title[language]}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {t.fluxCycle[language]} — Derivation: <span className="font-mono text-cyan-400">E = 4.44 · f · N · Φm</span>
          </p>
        </div>

        {/* Preset Mode Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleModeChange('step-up')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              mode === 'step-up'
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/40'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
            aria-pressed={mode === 'step-up'}
          >
            {t.stepUp[language]}
          </button>
          <button
            onClick={() => handleModeChange('step-down')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              mode === 'step-down'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/40'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
            aria-pressed={mode === 'step-down'}
          >
            {t.stepDown[language]}
          </button>
          <button
            onClick={() => handleModeChange('isolation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              mode === 'isolation'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
            aria-pressed={mode === 'isolation'}
          >
            {t.isolation[language]}
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors"
            title={t.reset[language]}
            aria-label={t.reset[language]}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Simulation Viewport: Transformer Core + Magnetic Flux + Windings */}
      <div className="my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
          {/* SVG Animated Transformer Core */}
          <svg viewBox="0 0 560 300" className="w-full h-auto max-h-[300px]">
            <defs>
              <linearGradient id="tfCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <filter id="glowFlux" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background grid */}
            <pattern id="tfGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
            <rect width="560" height="300" fill="url(#tfGrid)" opacity="0.4" />

            {/* Laminated Silicon Steel Core Structure */}
            <rect x="130" y="35" width="300" height="230" rx="10" fill="url(#tfCoreGrad)" stroke="#64748b" strokeWidth="3" />
            <rect x="200" y="75" width="160" height="150" rx="6" fill="#020617" stroke="#475569" strokeWidth="2.5" />

            {/* Lamination lines indicator */}
            {[50, 80, 110, 140, 170, 200, 230].map((ly) => (
              <line key={`lam-${ly}`} x1="132" y1={ly} x2="198" y2={ly} stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
            ))}
            {[50, 80, 110, 140, 170, 200, 230].map((ly) => (
              <line key={`lam2-${ly}`} x1="362" y1={ly} x2="428" y2={ly} stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
            ))}

            {/* Animated Mutual Magnetic Flux Path */}
            <path
              d="M 165 55 L 395 55 A 15 15 0 0 1 410 70 L 410 230 A 15 15 0 0 1 395 245 L 165 245 A 15 15 0 0 1 150 230 L 150 70 A 15 15 0 0 1 165 55 Z"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="4"
              strokeDasharray="10 6"
              strokeDashoffset={fluxArrowOffset}
              filter="url(#glowFlux)"
              opacity={0.4 + Math.abs(instantaneousPhase) * 0.6}
            />

            {/* Flux Flow Arrows */}
            <g opacity={Math.abs(instantaneousPhase)}>
              <polygon points="280,50 290,55 280,60" fill="#38bdf8" />
              <polygon points="405,150 410,160 415,150" fill="#38bdf8" />
              <polygon points="280,240 270,245 280,250" fill="#38bdf8" />
              <polygon points="145,150 150,140 155,150" fill="#38bdf8" />
            </g>

            {/* Core Label */}
            <text x="280" y="145" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
              CRGO Laminated Core
            </text>
            <text x="280" y="162" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">
              Φm = {fluxMilliWb.toFixed(1)} mWb
            </text>
            <text x="280" y="178" textAnchor="middle" fill="#64748b" fontSize="9">
              f = {frequency} Hz
            </text>

            {/* PRIMARY WINDING (Left Limb) */}
            <g transform="translate(120, 80)">
              {/* Coil Turns rendered dynamically */}
              {Array.from({ length: Math.min(10, Math.max(4, Math.round(turnsN1 / 100))) }).map((_, i, arr) => {
                const step = 140 / (arr.length + 1);
                const cy = (i + 1) * step;
                return (
                  <g key={`n1-${i}`}>
                    <rect x="0" y={cy - 6} width="28" height="12" rx="4" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" />
                    <ellipse cx="14" cy={cy} rx="7" ry="3" fill="#b45309" />
                  </g>
                );
              })}
              {/* Primary Leads */}
              <path d="M 0 10 L -60 10 L -60 40" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
              <path d="M 0 130 L -60 130 L -60 100" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
              
              {/* AC Source Circle */}
              <circle cx="-60" cy="70" r="18" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
              <path d="M -68 70 Q -64 62 -60 70 T -52 70" fill="none" stroke="#fbbf24" strokeWidth="2" />
              
              <text x="-90" y="45" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">
                V1 = {primaryVoltageV1} V
              </text>
              <text x="-90" y="60" textAnchor="middle" fill="#94a3b8" fontSize="9">
                I1 ≈ {primaryCurrentI1.toFixed(1)} A
              </text>
              <text x="-90" y="95" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">
                N1 = {turnsN1} Turns
              </text>
              <text x="-90" y="110" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">
                E1 = {E1.toFixed(1)} V
              </text>
            </g>

            {/* SECONDARY WINDING (Right Limb) */}
            <g transform="translate(412, 80)">
              {/* Coil Turns rendered dynamically */}
              {Array.from({ length: Math.min(10, Math.max(4, Math.round(turnsN2 / 100))) }).map((_, i, arr) => {
                const step = 140 / (arr.length + 1);
                const cy = (i + 1) * step;
                return (
                  <g key={`n2-${i}`}>
                    <rect x="0" y={cy - 6} width="28" height="12" rx="4" fill="#2563eb" stroke="#60a5fa" strokeWidth="1.5" />
                    <ellipse cx="14" cy={cy} rx="7" ry="3" fill="#1d4ed8" />
                  </g>
                );
              })}
              {/* Secondary Leads */}
              <path d="M 28 10 L 85 10 L 85 40" stroke="#60a5fa" strokeWidth="2.5" fill="none" />
              <path d="M 28 130 L 85 130 L 85 100" stroke="#60a5fa" strokeWidth="2.5" fill="none" />
              
              {/* Load Impedance Box */}
              <rect x="73" y="40" width="24" height="60" rx="4" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
              <text x="85" y="74" textAnchor="middle" fill="#60a5fa" fontSize="9" fontWeight="bold">Load</text>

              <text x="120" y="45" fill="#60a5fa" fontSize="10" fontWeight="bold">
                V2 ≈ {secondaryVoltageV2.toFixed(1)} V
              </text>
              <text x="120" y="60" fill="#94a3b8" fontSize="9">
                I2 = {loadCurrentI2} A
              </text>
              <text x="120" y="95" fill="#3b82f6" fontSize="9" fontWeight="bold">
                N2 = {turnsN2} Turns
              </text>
              <text x="120" y="110" fill="#38bdf8" fontSize="9" fontFamily="monospace">
                E2 = {E2.toFixed(1)} V
              </text>
            </g>

            {/* Bottom Status Banner */}
            <rect x="150" y="270" width="260" height="24" rx="5" fill="#0b1329" stroke="#334155" />
            <text x="280" y="286" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
              K = N2/N1 = {transformationRatioK.toFixed(3)} ({secondaryVoltageV2 > primaryVoltageV1 ? 'Step-Up' : secondaryVoltageV2 < primaryVoltageV1 ? 'Step-Down' : '1:1'})
            </text>
          </svg>

          {/* AC Waveform Real-time Oscilloscope */}
          <div className="w-full mt-3 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>AC Flux Wave: <strong className="text-cyan-300">Φ(t) = {(safePhiM * 1000 * Math.sin(animTime * 2 * Math.PI)).toFixed(2)} mWb</strong></span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Primary e1(t)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span> Secondary e2(t)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Core Flux Φ(t)
              </span>
            </div>
          </div>
        </div>

        {/* Live Calculation Cards & Ratios */}
        <div className="lg:col-span-4 space-y-3">
          {/* E1 Card */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
              <span>{t.calcE1[language]}</span>
              <span className="text-amber-400 font-mono font-bold">4.44·f·N1·Φm</span>
            </div>
            <div className="text-xl font-mono font-extrabold text-amber-400">
              {E1.toFixed(1)} <span className="text-xs font-normal text-slate-400">V (RMS)</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-mono">
              4.44 × {frequency} × {turnsN1} × {(safePhiM * 1000).toFixed(1)}m
            </p>
          </div>

          {/* E2 Card */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
              <span>{t.calcE2[language]}</span>
              <span className="text-cyan-400 font-mono font-bold">4.44·f·N2·Φm</span>
            </div>
            <div className="text-xl font-mono font-extrabold text-cyan-400">
              {E2.toFixed(1)} <span className="text-xs font-normal text-slate-400">V (RMS)</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 font-mono">
              4.44 × {frequency} × {turnsN2} × {(safePhiM * 1000).toFixed(1)}m
            </p>
          </div>

          {/* Ratios Card */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
            <div className="text-xs text-slate-400 mb-2">{t.transRatio[language]}</div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">K = N2/N1</div>
                <div className="text-sm font-mono font-bold text-white">{transformationRatioK.toFixed(3)}</div>
              </div>
              <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
                <div className="text-[10px] text-slate-400">a = N1/N2</div>
                <div className="text-sm font-mono font-bold text-white">{turnsRatioA.toFixed(3)}</div>
              </div>
            </div>
          </div>

          {/* Power & Efficiency Card */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
            <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
              <span>{t.efficiencyLabel[language]}</span>
              <span className="text-emerald-400 font-mono font-bold">{efficiency.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${efficiency}%` }}></div>
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 mt-2">
              <span>P_out: {(powerOutWatts / 1000).toFixed(2)} kW</span>
              <span>P_in: {(powerInWatts / 1000).toFixed(2)} kW</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
        {/* Frequency Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300 font-medium">
            <label htmlFor="tf-freq">{t.freqLabel[language]}</label>
            <span className="font-mono text-cyan-400 font-bold">{frequency} Hz</span>
          </div>
          <input
            id="tf-freq"
            type="range"
            min="25"
            max="100"
            step="1"
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            aria-label={t.freqLabel[language]}
          />
        </div>

        {/* Primary Turns N1 */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300 font-medium">
            <label htmlFor="tf-n1">{t.n1Label[language]}</label>
            <span className="font-mono text-amber-400 font-bold">{turnsN1} Turns</span>
          </div>
          <input
            id="tf-n1"
            type="range"
            min="100"
            max="1500"
            step="50"
            value={turnsN1}
            onChange={(e) => setTurnsN1(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            aria-label={t.n1Label[language]}
          />
        </div>

        {/* Secondary Turns N2 */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300 font-medium">
            <label htmlFor="tf-n2">{t.n2Label[language]}</label>
            <span className="font-mono text-blue-400 font-bold">{turnsN2} Turns</span>
          </div>
          <input
            id="tf-n2"
            type="range"
            min="100"
            max="1500"
            step="50"
            value={turnsN2}
            onChange={(e) => setTurnsN2(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            aria-label={t.n2Label[language]}
          />
        </div>

        {/* Core Flux Phi_m */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300 font-medium">
            <label htmlFor="tf-flux">{t.fluxLabel[language]}</label>
            <span className="font-mono text-cyan-400 font-bold">{fluxMilliWb.toFixed(1)} mWb</span>
          </div>
          <input
            id="tf-flux"
            type="range"
            min="2"
            max="30"
            step="0.5"
            value={fluxMilliWb}
            onChange={(e) => setFluxMilliWb(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            aria-label={t.fluxLabel[language]}
          />
        </div>

        {/* Primary Voltage V1 */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300 font-medium">
            <label htmlFor="tf-v1">{t.v1Label[language]}</label>
            <span className="font-mono text-amber-400 font-bold">{primaryVoltageV1} V</span>
          </div>
          <input
            id="tf-v1"
            type="range"
            min="50"
            max="500"
            step="10"
            value={primaryVoltageV1}
            onChange={(e) => setPrimaryVoltageV1(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            aria-label={t.v1Label[language]}
          />
        </div>

        {/* Secondary Load Current I2 */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300 font-medium">
            <label htmlFor="tf-i2">{t.i2Label[language]}</label>
            <span className="font-mono text-emerald-400 font-bold">{loadCurrentI2} A</span>
          </div>
          <input
            id="tf-i2"
            type="range"
            min="0"
            max="40"
            step="1"
            value={loadCurrentI2}
            onChange={(e) => setLoadCurrentI2(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            aria-label={t.i2Label[language]}
          />
        </div>
      </div>
    </div>
  );
};
