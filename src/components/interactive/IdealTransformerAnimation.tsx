import React, { useState, useEffect, useRef } from 'react';
import { Zap, Play, Pause, RotateCcw, ArrowRight, ShieldCheck, Activity, Scale, Cpu } from 'lucide-react';
import { Language } from '../../types';

interface IdealTransformerAnimationProps {
  currentLanguage: Language;
}

type TransformerMode = 'STEP_UP' | 'STEP_DOWN' | 'ISOLATION';

export const IdealTransformerAnimation: React.FC<IdealTransformerAnimationProps> = ({ currentLanguage }) => {
  // Parameters
  const [n1, setN1] = useState<number>(200); // Primary turns
  const [n2, setN2] = useState<number>(400); // Secondary turns
  const [v1Rms, setV1Rms] = useState<number>(230); // Volts RMS
  const [freq, setFreq] = useState<number>(50); // Hz
  const [loadResistance, setLoadResistance] = useState<number>(25); // Ohms
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);

  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());

  // Mathematical Calculations
  // Transformation Ratio K = N2 / N1
  const turnsRatioK = n2 / (n1 || 1);
  const turnsRatioA = n1 / (n2 || 1); // a = N1/N2

  // Universal Transformer EMF Formula: E1 = 4.44 * f * N1 * Phi_m
  // In an ideal transformer, V1 = E1
  // Phi_m = V1 / (4.44 * f * N1) in Webers
  const phiM_Wb = v1Rms / (4.44288 * freq * n1);
  const phiM_mWb = phiM_Wb * 1000;

  // Volts per Turn: E/N = 4.44 * f * Phi_m
  const voltsPerTurn = (4.44288 * freq * phiM_Wb);

  // Secondary Induced RMS Voltage: E2 = K * E1
  const v2Rms = turnsRatioK * v1Rms;

  // Secondary Current (RMS): I2 = V2 / RL
  const i2Rms = loadResistance > 0 ? v2Rms / loadResistance : 0;

  // Primary Current from Ampere-Turn balance: N1*I1 = N2*I2 ==> I1 = (N2/N1) * I2 = K * I2
  const i1Rms = turnsRatioK * i2Rms;

  // Apparent Powers (VA)
  const powerInVA = v1Rms * i1Rms;
  const powerOutVA = v2Rms * i2Rms;

  // Reflected Impedance: Zin = a^2 * ZL = (N1/N2)^2 * RL
  const reflectedImpedance = Math.pow(turnsRatioA, 2) * loadResistance;

  // Instantaneous Time Values
  const omega = 2 * Math.PI * freq;
  const v1Instant = Math.SQRT2 * v1Rms * Math.sin(omega * time);
  const v2Instant = Math.SQRT2 * v2Rms * Math.sin(omega * time);
  const fluxInstant = Math.sin(omega * time - Math.PI / 2); // Flux lags V1 by 90 degrees

  // Animation Loop
  useEffect(() => {
    const update = (now: number) => {
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (isPlaying) {
        setTime((prev) => prev + dt * 0.08); // Slow visual sinusoidal time
      }
      animFrameRef.current = requestAnimationFrame(update);
    };

    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(update);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  // Mode Quick Selectors
  const setMode = (mode: TransformerMode) => {
    if (mode === 'STEP_UP') {
      setN1(150);
      setN2(600);
      setV1Rms(230);
    } else if (mode === 'STEP_DOWN') {
      setN1(600);
      setN2(150);
      setV1Rms(230);
    } else {
      setN1(300);
      setN2(300);
      setV1Rms(230);
    }
  };

  const currentMode: TransformerMode =
    n2 > n1 ? 'STEP_UP' : n2 < n1 ? 'STEP_DOWN' : 'ISOLATION';

  const labels = {
    en: {
      title: 'Universal Transformer EMF Equation & Ideal Machine Simulator',
      subtitle: 'RMS EMF E = 4.44·f·N·Φ_m, Ampere-Turn balance (N₁I₁ = N₂I₂), and 100% Apparent Power Conservation',
      stepUp: 'Step-Up Mode (N₂ > N₁)',
      stepDown: 'Step-Down Mode (N₂ < N₁)',
      isolation: '1:1 Isolation Mode (N₂ = N₁)',
      priTurns: 'Primary Turns (N₁)',
      secTurns: 'Secondary Turns (N₂)',
      priVoltage: 'Primary RMS Voltage (V₁)',
      frequency: 'AC Frequency (f)',
      loadRes: 'Secondary Load (R_L)',
      turnsRatio: 'Transformation Ratio (K = N₂/N₁)',
      voltsPerTurn: 'EMF per Turn (E/N = 4.44·f·Φ_m)',
      secVoltage: 'Secondary RMS Voltage (V₂)',
      secCurrent: 'Secondary RMS Current (I₂)',
      priCurrent: 'Primary RMS Current (I₁)',
      coreFlux: 'Peak Core Magnetic Flux (Φ_m)',
      reflectedZ: 'Reflected Load Impedance (Z_in)',
      inputPower: 'Input Apparent Power (S₁ = V₁I₁)',
      outputPower: 'Output Apparent Power (S₂ = V₂I₂)',
      conservation: 'Power Conservation (S₁ ≡ S₂)',
      reset: 'Reset Defaults',
      play: 'Animate',
      pause: 'Pause'
    },
    hi: {
      title: 'सार्वत्रिक ट्रांसफॉर्मर ईएमएफ समीकरण एवं आदर्श मशीन सिमुलेटर',
      subtitle: 'RMS EMF E = 4.44·f·N·Φ_m, एम्पीयर-टर्न संतुलन (N₁I₁ = N₂I₂), एवं 100% स्पष्ट शक्ति संरक्षण',
      stepUp: 'स्टेप-अप मोड (N₂ > N₁)',
      stepDown: 'स्टेप-डाउन मोड (N₂ < N₁)',
      isolation: '1:1 आइसोलेशन मोड (N₂ = N₁)',
      priTurns: 'प्राथमिक फेरे (N₁)',
      secTurns: 'द्वितीयक फेरे (N₂)',
      priVoltage: 'प्राथमिक RMS वोल्टेज (V₁)',
      frequency: 'एसी आवृत्ति (f)',
      loadRes: 'द्वितीयक लोड (R_L)',
      turnsRatio: 'रूपांतरण अनुपात (K = N₂/N₁)',
      voltsPerTurn: 'प्रति फेरा ईएमएफ (E/N = 4.44·f·Φ_m)',
      secVoltage: 'द्वितीयक RMS वोल्टेज (V₂)',
      secCurrent: 'द्वितीयक RMS धारा (I₂)',
      priCurrent: 'प्राथमिक RMS धारा (I₁)',
      coreFlux: 'अधिकतम कोर चुंबकीय फ्लक्स (Φ_m)',
      reflectedZ: 'परावर्तित प्रतिबाधा (Z_in)',
      inputPower: 'इनपुट स्पष्ट शक्ति (S₁ = V₁I₁)',
      outputPower: 'आउटपुट स्पष्ट शक्ति (S₂ = V₂I₂)',
      conservation: 'ऊर्जा संरक्षण (S₁ ≡ S₂)',
      reset: 'रीसेट',
      play: 'चलाएं',
      pause: 'रोकें'
    },
    bn: {
      title: 'সার্বজনীন ট্রান্সফরমার ইএমএফ সমীকরণ ও আদর্শ মেশিন সিমুলেটর',
      subtitle: 'RMS EMF E = ৪.৪৪·f·N·Φ_m, অ্যাম্পিয়ার-টার্ন সমতা (N₁I₁ = N₂I₂), এবং ১০০% শক্তি সংরক্ষণ নীতি',
      stepUp: 'স্টেপ-আপ মোড (N₂ > N₁)',
      stepDown: 'স্টেপ-ডাউন মোড (N₂ < N₁)',
      isolation: '১:১ আইসোলেশন মোড (N₂ = N₁)',
      priTurns: 'প্রাইমারি পাকসংখ্যা (N₁)',
      secTurns: 'সেকেন্ডারি পাকসংখ্যা (N₂)',
      priVoltage: 'প্রাইমারি RMS ভোল্টেজ (V₁)',
      frequency: 'এসি কম্পাঙ্ক (f)',
      loadRes: 'সেকেন্ডারি লোড (R_L)',
      turnsRatio: 'রূপান্তর অনুপাত (K = N₂/N₁)',
      voltsPerTurn: 'প্রতি পাকে ইএমএফ (E/N = ৪.৪৪·f·Φ_m)',
      secVoltage: 'সেকেন্ডারি RMS ভোল্টেজ (V₂)',
      secCurrent: 'সেকেন্ডারি RMS কারেন্ট (I₂)',
      priCurrent: 'প্রাইমারি RMS কারেন্ট (I₁)',
      coreFlux: 'শীর্ষ কোর চৌম্বক ফ্লাক্স (Φ_m)',
      reflectedZ: 'প্রতিফলিত লোড প্রতিবন্ধকতা (Z_in)',
      inputPower: 'ইনপুট আপাত শক্তি (S₁ = V₁I₁)',
      outputPower: 'আউটপুট আপাত শক্তি (S₂ = V₂I₂)',
      conservation: 'শক্তি সংরক্ষণ (S₁ ≡ S₂)',
      reset: 'রিসেট',
      play: 'চালান',
      pause: 'থামান'
    }
  };

  const t = labels[currentLanguage] || labels.en;

  const resetDefaults = () => {
    setN1(200);
    setN2(400);
    setV1Rms(230);
    setFreq(50);
    setLoadResistance(25);
    setTime(0);
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-4 md:p-6 shadow-2xl text-slate-100 font-sans my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-700/70 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              <Cpu className="w-5 h-5" />
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
            onClick={resetDefaults}
            aria-label={t.reset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-medium text-slate-300 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {t.reset}
          </button>
        </div>
      </div>

      {/* Mode Presets Ribbon */}
      <div className="grid grid-cols-3 gap-2 mt-4 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
        <button
          type="button"
          onClick={() => setMode('STEP_UP')}
          aria-pressed={currentMode === 'STEP_UP'}
          className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
            currentMode === 'STEP_UP'
              ? 'bg-amber-950/70 text-amber-300 border-amber-500 shadow-sm shadow-amber-500/20'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
          }`}
        >
          {t.stepUp}
        </button>
        <button
          type="button"
          onClick={() => setMode('STEP_DOWN')}
          aria-pressed={currentMode === 'STEP_DOWN'}
          className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
            currentMode === 'STEP_DOWN'
              ? 'bg-cyan-950/70 text-cyan-300 border-cyan-500 shadow-sm shadow-cyan-500/20'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
          }`}
        >
          {t.stepDown}
        </button>
        <button
          type="button"
          onClick={() => setMode('ISOLATION')}
          aria-pressed={currentMode === 'ISOLATION'}
          className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all text-center ${
            currentMode === 'ISOLATION'
              ? 'bg-purple-950/70 text-purple-300 border-purple-500 shadow-sm shadow-purple-500/20'
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
          }`}
        >
          {t.isolation}
        </button>
      </div>

      {/* Main Simulation Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left Column: Animated Transformer Core & Phasor Oscilloscope */}
        <div className="lg:col-span-7 bg-slate-950/90 rounded-xl border border-slate-800 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-semibold text-slate-300">
                Laminated Core Transformer (K = {turnsRatioK.toFixed(2)})
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-700 text-emerald-300">
              <Scale className="w-3.5 h-3.5" />
              S₁: {powerInVA.toFixed(1)} VA ≡ S₂: {powerOutVA.toFixed(1)} VA (100%)
            </div>
          </div>

          {/* SVG Laminated Core & Coils */}
          <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-slate-950 rounded-lg overflow-hidden border border-slate-800/60">
            <svg viewBox="0 0 700 370" className="w-full h-full">
              <defs>
                <linearGradient id="ironGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
              </defs>

              {/* Laminated Silicon Steel Core */}
              <rect x="150" y="85" width="400" height="210" rx="12" fill="url(#ironGrad)" stroke="#64748b" strokeWidth="3" />
              <rect x="235" y="140" width="230" height="100" rx="8" fill="#020617" stroke="#334155" strokeWidth="2" />

              {/* Lamination Lines */}
              {[155, 160, 540, 545].map((xP, i) => (
                <line key={`lam-${i}`} x1={xP} y1="90" x2={xP} y2="290" stroke="#475569" strokeWidth="1" strokeDasharray="4 2" />
              ))}

              {/* Continuous Sinusoidal Core Flux Lines */}
              <path
                d="M 192 112 L 508 112 C 528 112 528 268 508 268 L 192 268 C 172 268 172 112 192 112 Z"
                fill="none"
                stroke="#6366f1"
                strokeWidth={Math.max(2, 5 * Math.abs(fluxInstant))}
                opacity={0.4 + 0.6 * Math.abs(fluxInstant)}
              />

              {/* Primary Winding (Left Limb) */}
              <g transform="translate(192, 190)">
                {[-70, -50, -30, -10, 10, 30, 50, 70].map((yOff, idx) => (
                  <g key={`w1-${idx}`}>
                    <path
                      d={`M -24 ${yOff - 8} C -40 ${yOff}, -40 ${yOff + 16}, -24 ${yOff + 8}`}
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M -24 ${yOff + 8} L 24 ${yOff - 8}`}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="5"
                    />
                  </g>
                ))}
                {/* Dot */}
                <circle cx="-35" cy="-80" r="5" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
                <text x="-48" y="-5" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="end">Primary (N₁={n1})</text>
                <text x="-48" y="15" fill="#94a3b8" fontSize="11" textAnchor="end">V₁ = {v1Rms} V (RMS)</text>
                <text x="-48" y="32" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="end">I₁ = {i1Rms.toFixed(2)} A</text>
              </g>

              {/* Secondary Winding (Right Limb) */}
              <g transform="translate(508, 190)">
                {[-70, -50, -30, -10, 10, 30, 50, 70].map((yOff, idx) => (
                  <g key={`w2-${idx}`}>
                    <path
                      d={`M -24 ${yOff - 8} C -40 ${yOff}, -40 ${yOff + 16}, -24 ${yOff + 8}`}
                      fill="none"
                      stroke="#d97706"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M -24 ${yOff + 8} L 24 ${yOff - 8}`}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="5"
                    />
                  </g>
                ))}
                {/* Dot */}
                <circle cx="35" cy="-80" r="5" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
                <text x="48" y="-5" fill="#fbbf24" fontSize="13" fontWeight="bold" textAnchor="start">Secondary (N₂={n2})</text>
                <text x="48" y="15" fill="#94a3b8" fontSize="11" textAnchor="start">V₂ = {v2Rms.toFixed(1)} V (RMS)</text>
                <text x="48" y="32" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="start">I₂ = {i2Rms.toFixed(2)} A</text>
              </g>

              {/* AC Voltage Source (Left) */}
              <g transform="translate(60, 190)">
                <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
                <path d="M -12 0 Q -6 -12 0 0 T 12 0" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                <text x="0" y="36" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
                  v₁(t) = {v1Instant.toFixed(0)} V
                </text>
                <line x1="0" y1="-22" x2="0" y2="-80" stroke="#38bdf8" strokeWidth="2" />
                <line x1="0" y1="-80" x2="168" y2="-80" stroke="#38bdf8" strokeWidth="2" />
                <line x1="0" y1="22" x2="0" y2="80" stroke="#38bdf8" strokeWidth="2" />
                <line x1="0" y1="80" x2="168" y2="80" stroke="#38bdf8" strokeWidth="2" />
              </g>

              {/* Secondary Load Resistance (Right) */}
              <g transform="translate(635, 190)">
                <rect x="-14" y="-30" width="28" height="60" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                <text x="0" y="5" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">R_L</text>
                <text x="0" y="44" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">
                  {loadResistance} Ω
                </text>
                <line x1="0" y1="-30" x2="0" y2="-80" stroke="#f59e0b" strokeWidth="2" />
                <line x1="0" y1="-80" x2="-103" y2="-80" stroke="#f59e0b" strokeWidth="2" />
                <line x1="0" y1="30" x2="0" y2="80" stroke="#f59e0b" strokeWidth="2" />
                <line x1="0" y1="80" x2="-103" y2="80" stroke="#f59e0b" strokeWidth="2" />
              </g>

              {/* Central Core Text: Universal EMF Equation */}
              <text x="350" y="175" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">
                Core Magnetic Flux Φ_m
              </text>
              <text x="350" y="196" fill="#818cf8" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                Φ_m = {phiM_mWb.toFixed(3)} mWb
              </text>
              <text x="350" y="215" fill="#a5b4fc" fontSize="10" textAnchor="middle">
                (E / N = {voltsPerTurn.toFixed(3)} V/turn)
              </text>
            </svg>
          </div>

          {/* Bottom Live Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-2 border-t border-slate-800 text-center">
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Turns Ratio K</span>
              <span className="text-sm font-bold font-mono text-cyan-400">{turnsRatioK.toFixed(3)}</span>
              <span className="text-[10px] text-slate-500 block">N₂ / N₁</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Volts Per Turn</span>
              <span className="text-sm font-bold font-mono text-indigo-400">{voltsPerTurn.toFixed(3)} V/t</span>
              <span className="text-[10px] text-slate-500 block">4.44·f·Φ_m</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Secondary Voltage V₂</span>
              <span className="text-sm font-bold font-mono text-amber-400">{v2Rms.toFixed(1)} V</span>
              <span className="text-[10px] text-slate-500 block">K · V₁</span>
            </div>
            <div className="bg-slate-900/80 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Reflected Z_in</span>
              <span className="text-sm font-bold font-mono text-emerald-400">{reflectedImpedance.toFixed(1)} Ω</span>
              <span className="text-[10px] text-slate-500 block">(N₁/N₂)² · R_L</span>
            </div>
          </div>
        </div>

        {/* Right Column: Parameters & Live Calculations */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Controls Card */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-indigo-400" />
              Transformer Electrical Parameters
            </h4>

            {/* Primary Voltage V1 */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">{t.priVoltage} (V₁)</span>
                <span className="font-mono text-cyan-400 font-bold">{v1Rms} V</span>
              </div>
              <input
                type="range"
                min="10"
                max="440"
                step="5"
                value={v1Rms}
                onChange={(e) => setV1Rms(parseInt(e.target.value))}
                aria-label={t.priVoltage}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            {/* Primary Turns N1 */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">{t.priTurns} (N₁)</span>
                <span className="font-mono text-sky-400 font-bold">{n1} turns</span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="25"
                value={n1}
                onChange={(e) => setN1(parseInt(e.target.value))}
                aria-label={t.priTurns}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>

            {/* Secondary Turns N2 */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">{t.secTurns} (N₂)</span>
                <span className="font-mono text-amber-400 font-bold">{n2} turns</span>
              </div>
              <input
                type="range"
                min="50"
                max="1000"
                step="25"
                value={n2}
                onChange={(e) => setN2(parseInt(e.target.value))}
                aria-label={t.secTurns}
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
                min="25"
                max="400"
                step="25"
                value={freq}
                onChange={(e) => setFreq(parseInt(e.target.value))}
                aria-label={t.frequency}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Load Resistance RL */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">{t.loadRes} (R_L)</span>
                <span className="font-mono text-yellow-400 font-bold">{loadResistance} Ω</span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={loadResistance}
                onChange={(e) => setLoadResistance(parseInt(e.target.value))}
                aria-label={t.loadRes}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
              />
            </div>
          </div>

          {/* Governing Mathematical Formulations Box */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-xl border border-slate-800">
            <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Mathematical Proofs & Conservation
            </h4>
            <div className="space-y-1.5 text-xs font-mono text-slate-300">
              <div className="flex justify-between py-0.5 border-b border-slate-800/80">
                <span className="text-slate-400">E₁ = 4.44·f·N₁·Φ_m:</span>
                <span className="font-bold text-cyan-400">{(4.44288 * freq * n1 * phiM_Wb).toFixed(1)} V</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-slate-800/80">
                <span className="text-slate-400">E₂ = 4.44·f·N₂·Φ_m:</span>
                <span className="font-bold text-amber-400">{(4.44288 * freq * n2 * phiM_Wb).toFixed(1)} V</span>
              </div>
              <div className="flex justify-between py-0.5 border-b border-slate-800/80">
                <span className="text-slate-400">Amp-Turns N₁I₁ = N₂I₂:</span>
                <span className="font-bold text-emerald-400">{(n1 * i1Rms).toFixed(1)} AT</span>
              </div>
              <div className="flex justify-between py-0.5">
                <span className="text-slate-400">Conservation S₁ = S₂:</span>
                <span className="font-bold text-indigo-400">{powerInVA.toFixed(1)} VA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
