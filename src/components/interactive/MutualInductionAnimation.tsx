import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Zap, Sparkles, Activity, Layers, Shuffle, ArrowRight } from 'lucide-react';
import { Language } from '../../types';

interface MutualInductionAnimationProps {
  currentLanguage: Language;
}

export const MutualInductionAnimation: React.FC<MutualInductionAnimationProps> = ({ currentLanguage }) => {
  // Parameters
  const [n1, setN1] = useState<number>(200); // Primary turns
  const [n2, setN2] = useState<number>(400); // Secondary turns
  const [l1, setL1] = useState<number>(1.2); // Primary Inductance H
  const [l2, setL2] = useState<number>(4.8); // Secondary Inductance H
  const [k, setK] = useState<number>(0.85); // Coupling coefficient
  const [freq, setFreq] = useState<number>(50); // Hz
  const [i1m, setI1m] = useState<number>(4.0); // Primary current amplitude A
  const [loadResistance, setLoadResistance] = useState<number>(20); // Ohms
  const [couplingMode, setCouplingMode] = useState<'AIDING' | 'OPPOSING'>('AIDING');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);

  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());

  // Calculations
  const omega = 2 * Math.PI * freq;
  // Mutual Inductance M = k * sqrt(L1 * L2)
  const mutualInductanceM = k * Math.sqrt(l1 * l2);

  // Time-dependent variables
  // i1(t) = I1m * sin(omega * t)
  const i1 = i1m * Math.sin(omega * time);
  // di1/dt = I1m * omega * cos(omega * t)
  const di1_dt = i1m * omega * Math.cos(omega * time);

  // Self-induced EMF in primary: e1 = -L1 * (di1/dt)
  const e1 = -l1 * di1_dt;
  const e1_rms = (l1 * i1m * omega) / Math.SQRT2;

  // Mutually induced EMF in secondary: e2 = -M * (di1/dt) (magnitude signed by mode)
  const signMultiplier = couplingMode === 'AIDING' ? 1 : -1;
  const e2 = -signMultiplier * mutualInductanceM * di1_dt;
  const e2_rms = (mutualInductanceM * i1m * omega) / Math.SQRT2;

  // Secondary current: i2(t) = e2(t) / loadResistance
  const i2 = e2 / loadResistance;
  const i2_rms = e2_rms / loadResistance;

  // Primary flux linkage: lambda12 = M * i1
  const fluxLinkage12 = mutualInductanceM * i1;
  const maxFluxLinkage12 = mutualInductanceM * i1m;

  // Ideal M check: M_ideal = sqrt(L1 * L2)
  const mIdeal = Math.sqrt(l1 * l2);

  // Animation Loop
  useEffect(() => {
    const update = (now: number) => {
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (isPlaying) {
        // Slow down visual time by 0.05 for smooth sinusoidal visualization
        setTime((prev) => prev + dt * 0.08);
      }
      animFrameRef.current = requestAnimationFrame(update);
    };

    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(update);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  const labels = {
    en: {
      title: 'Mutual Induction & Coupled Coils Simulator',
      subtitle: 'Two magnetically coupled coils: changing primary current i₁(t) induces mutual EMF e₂(t) = -M (di₁/dt)',
      primaryCoil: 'Primary Coil (Coil 1)',
      secondaryCoil: 'Secondary Coil (Coil 2)',
      couplingMode: 'Magnetic Coupling Polarity',
      aiding: 'Series Aiding (Dot-to-Dot / +M)',
      opposing: 'Series Opposing (Inverted / -M)',
      primaryTurns: 'Primary Turns (N₁)',
      secondaryTurns: 'Secondary Turns (N₂)',
      primaryInd: 'Primary Inductance (L₁)',
      secondaryInd: 'Secondary Inductance (L₂)',
      couplingCoeff: 'Coupling Coefficient (k)',
      frequency: 'Supply Frequency (f)',
      currentAmp: 'Primary Peak Current (I_1m)',
      loadRes: 'Secondary Load (R_L)',
      mutualInductance: 'Mutual Inductance (M)',
      idealMutual: 'Ideal Mutual Inductance (M_ideal)',
      primaryInducedEmf: 'Primary Self-EMF e₁',
      secondaryInducedEmf: 'Secondary Mutual EMF e₂',
      fluxLinkage: 'Mutual Flux Linkage (λ₁₂ = N₂Φ₁₂)',
      dotConvention: 'Dot Convention Polarity',
      fluxLines: 'Shared Magnetic Flux Lines (Φ₁₂)',
      leakageLines: 'Leakage Flux (Φ_l)',
      reset: 'Reset Defaults',
      play: 'Animate',
      pause: 'Pause'
    },
    hi: {
      title: 'पारस्परिक प्रेरण एवं युग्मित कुंडलियां सिमुलेटर',
      subtitle: 'दो चुंबकीय रूप से युग्मित कुंडलियां: प्राथमिक धारा i₁(t) परिवर्तन से द्वितीयक में प्रेरित ईएमएफ e₂(t) = -M(di₁/dt)',
      primaryCoil: 'प्राथमिक कुंडली (Coil 1)',
      secondaryCoil: 'द्वितीयक कुंडली (Coil 2)',
      couplingMode: 'चुंबकीय युग्मन ध्रुवता',
      aiding: 'श्रेणी सहायक (Aiding / +M)',
      opposing: 'श्रेणी विरोधी (Opposing / -M)',
      primaryTurns: 'प्राथमिक फेरे (N₁)',
      secondaryTurns: 'द्वितीयक फेरे (N₂)',
      primaryInd: 'प्राथमिक प्रेरकत्व (L₁)',
      secondaryInd: 'द्वितीयक प्रेरकत्व (L₂)',
      couplingCoeff: 'युग्मन गुणांक (k)',
      frequency: 'आवृत्ति (f)',
      currentAmp: 'प्राथमिक शीर्ष धारा (I_1m)',
      loadRes: 'द्वितीयक लोड (R_L)',
      mutualInductance: 'अन्योन्य प्रेरकत्व (M)',
      idealMutual: 'आदर्श अन्योन्य प्रेरकत्व (M_ideal)',
      primaryInducedEmf: 'प्राथमिक स्व-ईएमएफ e₁',
      secondaryInducedEmf: 'द्वितीयक अन्योन्य ईएमएफ e₂',
      fluxLinkage: 'पारस्परिक फ्लक्स लिंकेज (λ₁₂)',
      dotConvention: 'डॉट परिपाटी ध्रुवता',
      fluxLines: 'उभयनिष्ठ चुंबकीय फ्लक्स (Φ₁₂)',
      leakageLines: 'क्षरण फ्लक्स (Φ_l)',
      reset: 'रीसेट',
      play: 'चलाएं',
      pause: 'रोकें'
    },
    bn: {
      title: 'পারস্পরিক আবেশ ও কাপলড কয়েল সিমুলেটর',
      subtitle: 'চৌম্বকীয়ভাবে যুক্ত দুটি কয়েল: প্রাইমারি কারেন্ট i₁(t) পরিবর্তনের মাধ্যমে সেকেন্ডারিতে আবিষ্ট ইএমএফ e₂(t) = -M(di₁/dt)',
      primaryCoil: 'প্রাইমারি কয়েল (কয়েল ১)',
      secondaryCoil: 'সেকেন্ডারি কয়েল (কয়েল ২)',
      couplingMode: 'চৌম্বক কাপলিং পোলারিটি',
      aiding: 'সিরিজ সহায়ক (Aiding / +M)',
      opposing: 'সিরিজ বিরোধী (Opposing / -M)',
      primaryTurns: 'প্রাইমারি পাকসংখ্যা (N₁)',
      secondaryTurns: 'সেকেন্ডারি পাকসংখ্যা (N₂)',
      primaryInd: 'প্রাইমারি আবেশাঙ্ক (L₁)',
      secondaryInd: 'সেকেন্ডারি আবেশাঙ্ক (L₂)',
      couplingCoeff: 'কাপলিং গুণাঙ্ক (k)',
      frequency: 'কম্পাঙ্ক (f)',
      currentAmp: 'প্রাইমারি শীর্ষ কারেন্ট (I_1m)',
      loadRes: 'সেকেন্ডারি লোড (R_L)',
      mutualInductance: 'পারস্পরিক আবেশাঙ্ক (M)',
      idealMutual: 'আদর্শ পারস্পরিক আবেশাঙ্ক (M_ideal)',
      primaryInducedEmf: 'প্রাইমারি স্ব-ইএমএফ e₁',
      secondaryInducedEmf: 'সেকেন্ডারি পারস্পরিক ইএমএফ e₂',
      fluxLinkage: 'পারস্পরিক ফ্লাক্স লিংকেজ (λ₁₂)',
      dotConvention: 'ডট কনভেনশন পোলারিটি',
      fluxLines: 'যৌথ চৌম্বক ফ্লাক্স (Φ₁₂)',
      leakageLines: 'লিকেজ ফ্লাক্স (Φ_l)',
      reset: 'রিসেট',
      play: 'চালান',
      pause: 'থামান'
    }
  };

  const t = labels[currentLanguage] || labels.en;

  // Normalized phase for SVG visualization
  const fluxPhase = Math.sin(omega * time);
  const fluxIntensity = Math.abs(fluxPhase);
  const fluxColor = fluxPhase >= 0 ? '#38bdf8' : '#818cf8';

  const resetAll = () => {
    setN1(200);
    setN2(400);
    setL1(1.2);
    setL2(4.8);
    setK(0.85);
    setFreq(50);
    setI1m(4.0);
    setLoadResistance(20);
    setCouplingMode('AIDING');
    setTime(0);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-4 md:p-6 shadow-2xl text-slate-100 font-sans my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-700/70 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Zap className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white">{t.title}</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? t.pause : t.play}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              isPlaying
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? t.pause : t.play}
          </button>
          <button
            onClick={resetAll}
            aria-label={t.reset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-medium text-slate-300 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {t.reset}
          </button>
        </div>
      </div>

      {/* Main Grid: Visual Simulation & Live Meter Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left Column: Visual Circuit Schematic Animation */}
        <div className="lg:col-span-7 bg-slate-950/90 rounded-xl border border-slate-800 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold text-slate-300">
                {t.dotConvention}: {couplingMode === 'AIDING' ? 'Dots at Top (In-Phase / Aiding)' : 'Dot Inverted (Opposing)'}
              </span>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-300 font-bold">
              k = {(k * 100).toFixed(0)}%
            </span>
          </div>

          {/* SVG Animated Diagram */}
          <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-slate-950 rounded-lg overflow-hidden border border-slate-800/60">
            <svg viewBox="0 0 700 380" className="w-full h-full">
              <defs>
                <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <marker id="arrowFlux" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M 0 0 L 8 4 L 0 8 z" fill={fluxColor} />
                </marker>
                <marker id="arrowI1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
                </marker>
                <marker id="arrowI2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 z" fill="#f59e0b" />
                </marker>
              </defs>

              {/* Central Shared Magnetic Core (Ferromagnetic Bar/Toroid) */}
              <rect x="150" y="90" width="400" height="200" rx="12" fill="url(#coreGrad)" stroke="#475569" strokeWidth="2.5" />
              <rect x="230" y="140" width="240" height="100" rx="8" fill="#020617" stroke="#334155" strokeWidth="2" />

              {/* Magnetic Flux Lines flowing through core */}
              <path
                d="M 190 115 L 510 115 C 530 115 530 265 510 265 L 190 265 C 170 265 170 115 190 115 Z"
                fill="none"
                stroke={fluxColor}
                strokeWidth={Math.max(1.5, 5 * k * fluxIntensity)}
                strokeDasharray={k > 0.95 ? 'none' : '8 4'}
                opacity={0.3 + 0.7 * fluxIntensity}
              />
              <path
                d="M 175 102 L 525 102 C 550 102 550 278 525 278 L 175 278 C 150 278 150 102 175 102 Z"
                fill="none"
                stroke={fluxColor}
                strokeWidth={Math.max(1, 3 * k * fluxIntensity)}
                opacity={0.2 + 0.6 * fluxIntensity}
              />

              {/* Leakage Flux Loops (if k < 1) */}
              {k < 0.98 && (
                <g opacity={(1 - k) * 0.9}>
                  <path
                    d="M 210 120 C 235 60, 140 60, 160 120"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />
                  <path
                    d="M 490 120 C 515 60, 420 60, 440 120"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />
                  <text x="185" y="55" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">
                    Leakage Φ_l1
                  </text>
                </g>
              )}

              {/* Primary Coil (Left Limb) */}
              <g transform="translate(190, 190)">
                {/* Winding Turns */}
                {[-70, -50, -30, -10, 10, 30, 50, 70].map((yOff, idx) => (
                  <g key={`pri-${idx}`}>
                    <path
                      d={`M -25 ${yOff - 8} C -40 ${yOff}, -40 ${yOff + 16}, -25 ${yOff + 8}`}
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M -25 ${yOff + 8} L 25 ${yOff - 8}`}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="5"
                    />
                  </g>
                ))}
                {/* Dot Convention Indicator (Primary) */}
                <circle cx="-35" cy="-80" r="6" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
                <text x="-35" y="-92" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle">● Dot</text>
                <text x="-50" y="5" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="end">Coil 1 (N₁={n1})</text>
                <text x="-50" y="24" fill="#94a3b8" fontSize="11" textAnchor="end">L₁ = {l1.toFixed(2)} H</text>
              </g>

              {/* Secondary Coil (Right Limb) */}
              <g transform="translate(510, 190)">
                {/* Winding Turns */}
                {[-70, -50, -30, -10, 10, 30, 50, 70].map((yOff, idx) => (
                  <g key={`sec-${idx}`}>
                    <path
                      d={`M -25 ${yOff - 8} C -40 ${yOff}, -40 ${yOff + 16}, -25 ${yOff + 8}`}
                      fill="none"
                      stroke="#d97706"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M -25 ${yOff + 8} L 25 ${yOff - 8}`}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="5"
                    />
                  </g>
                ))}
                {/* Dot Convention Indicator (Secondary) */}
                <circle
                  cx="35"
                  cy={couplingMode === 'AIDING' ? -80 : 80}
                  r="6"
                  fill="#facc15"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
                <text
                  x="35"
                  y={couplingMode === 'AIDING' ? -92 : 100}
                  fill="#facc15"
                  fontSize="11"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  ● Dot
                </text>
                <text x="50" y="5" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="start">Coil 2 (N₂={n2})</text>
                <text x="50" y="24" fill="#94a3b8" fontSize="11" textAnchor="start">L₂ = {l2.toFixed(2)} H</text>
              </g>

              {/* Primary Circuit Terminals & AC Generator */}
              <g transform="translate(60, 190)">
                <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
                <path d="M -12 0 Q -6 -12 0 0 T 12 0" fill="none" stroke="#10b981" strokeWidth="2.5" />
                <text x="0" y="34" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">
                  i₁(t) = {(i1).toFixed(2)} A
                </text>
                {/* Top lead */}
                <line x1="0" y1="-22" x2="0" y2="-80" stroke="#10b981" strokeWidth="2" />
                <line x1="0" y1="-80" x2="165" y2="-80" stroke="#10b981" strokeWidth="2" />
                {/* Bottom lead */}
                <line x1="0" y1="22" x2="0" y2="80" stroke="#10b981" strokeWidth="2" />
                <line x1="0" y1="80" x2="165" y2="80" stroke="#10b981" strokeWidth="2" />
              </g>

              {/* Secondary Circuit Terminals & Load Resistor */}
              <g transform="translate(630, 190)">
                <rect x="-14" y="-30" width="28" height="60" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                <text x="0" y="5" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">R_L</text>
                <text x="0" y="44" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">
                  {loadResistance} Ω
                </text>
                {/* Top lead */}
                <line x1="0" y1="-30" x2="0" y2="-80" stroke="#f59e0b" strokeWidth="2" />
                <line x1="0" y1="-80" x2="-95" y2="-80" stroke="#f59e0b" strokeWidth="2" />
                {/* Bottom lead */}
                <line x1="0" y1="30" x2="0" y2="80" stroke="#f59e0b" strokeWidth="2" />
                <line x1="0" y1="80" x2="-95" y2="80" stroke="#f59e0b" strokeWidth="2" />
              </g>

              {/* Center Core Label */}
              <text x="350" y="180" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">
                Mutual Flux Linkage Φ₁₂
              </text>
              <text x="350" y="202" fill="#38bdf8" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                M = {mutualInductanceM.toFixed(3)} H
              </text>
            </svg>
          </div>

          {/* Bottom Live Waveform Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-2 border-t border-slate-800 text-center">
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Primary Back-EMF e₁</span>
              <span className="text-sm font-bold font-mono text-cyan-400">{e1.toFixed(1)} V</span>
              <span className="text-[10px] text-slate-500 block">({e1_rms.toFixed(1)} V rms)</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Secondary Mutual EMF e₂</span>
              <span className="text-sm font-bold font-mono text-amber-400">{e2.toFixed(1)} V</span>
              <span className="text-[10px] text-slate-500 block">({e2_rms.toFixed(1)} V rms)</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Secondary Current i₂</span>
              <span className="text-sm font-bold font-mono text-emerald-400">{i2.toFixed(2)} A</span>
              <span className="text-[10px] text-slate-500 block">({i2_rms.toFixed(2)} A rms)</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Mutual Inductance M</span>
              <span className="text-sm font-bold font-mono text-purple-400">{mutualInductanceM.toFixed(3)} H</span>
              <span className="text-[10px] text-slate-500 block">k = {k.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Parameter Sliders & Mode Toggle */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Coupling Mode Selector */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-2">
              <Shuffle className="w-4 h-4 text-cyan-400" />
              {t.couplingMode}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setCouplingMode('AIDING')}
                aria-pressed={couplingMode === 'AIDING'}
                className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                  couplingMode === 'AIDING'
                    ? 'bg-cyan-600/30 text-cyan-300 border-cyan-500 shadow-sm shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {t.aiding}
              </button>
              <button
                type="button"
                onClick={() => setCouplingMode('OPPOSING')}
                aria-pressed={couplingMode === 'OPPOSING'}
                className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
                  couplingMode === 'OPPOSING'
                    ? 'bg-purple-600/30 text-purple-300 border-purple-500 shadow-sm shadow-purple-500/20'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                {t.opposing}
              </button>
            </div>
          </div>

          {/* Interactive Sliders */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col gap-3.5">
            {/* Coupling Coefficient k */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">{t.couplingCoeff} (k)</span>
                <span className="font-mono text-cyan-400 font-bold">{k.toFixed(2)} ({k === 1 ? 'Ideal' : `${(k * 100).toFixed(0)}%`})</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="1.0"
                step="0.05"
                value={k}
                onChange={(e) => setK(parseFloat(e.target.value))}
                aria-label={t.couplingCoeff}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            {/* Primary Inductance L1 */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">{t.primaryInd} (L₁)</span>
                <span className="font-mono text-sky-400 font-bold">{l1.toFixed(2)} H</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="5.0"
                step="0.1"
                value={l1}
                onChange={(e) => setL1(parseFloat(e.target.value))}
                aria-label={t.primaryInd}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>

            {/* Secondary Inductance L2 */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">{t.secondaryInd} (L₂)</span>
                <span className="font-mono text-amber-400 font-bold">{l2.toFixed(2)} H</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="10.0"
                step="0.2"
                value={l2}
                onChange={(e) => setL2(parseFloat(e.target.value))}
                aria-label={t.secondaryInd}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Frequency f */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">{t.frequency} (f)</span>
                <span className="font-mono text-emerald-400 font-bold">{freq} Hz</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={freq}
                onChange={(e) => setFreq(parseInt(e.target.value))}
                aria-label={t.frequency}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Primary Current Amplitude */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">{t.currentAmp}</span>
                <span className="font-mono text-pink-400 font-bold">{i1m.toFixed(1)} A</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10.0"
                step="0.5"
                value={i1m}
                onChange={(e) => setI1m(parseFloat(e.target.value))}
                aria-label={t.currentAmp}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
            </div>

            {/* Secondary Load Resistance */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">{t.loadRes}</span>
                <span className="font-mono text-yellow-400 font-bold">{loadResistance} Ω</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={loadResistance}
                onChange={(e) => setLoadResistance(parseInt(e.target.value))}
                aria-label={t.loadRes}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
              />
            </div>
          </div>

          {/* Mathematical Formulation Reference Box */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-xl border border-slate-800">
            <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Mathematical Verification
            </h4>
            <div className="space-y-1.5 text-xs font-mono text-slate-300">
              <div className="flex justify-between py-0.5 border-b border-slate-800/80">
                <span className="text-slate-400">M = k · √(L₁ · L₂):</span>
                <span className="font-bold text-cyan-400">{mutualInductanceM.toFixed(4)} H</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-slate-800/80">
                <span className="text-slate-400">M_ideal (k = 1.0):</span>
                <span className="font-bold text-slate-300">{mIdeal.toFixed(4)} H</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-slate-800/80">
                <span className="text-slate-400">Peak di₁/dt = ω·I_1m:</span>
                <span className="font-bold text-emerald-400">{(omega * i1m).toFixed(1)} A/s</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-slate-400">Peak e₂ = M · (di₁/dt):</span>
                <span className="font-bold text-amber-400">{(mutualInductanceM * omega * i1m).toFixed(1)} V</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
