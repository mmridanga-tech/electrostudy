import React, { useState, useEffect } from 'react';
import { Sliders, Gauge, Activity, Zap } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface MovingIronAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Moving Iron (MI) Instrument — Attraction & Repulsion',
    subtitle: 'Observe how deflecting torque (Td ∝ I²) produces a non-uniform scale and works on both AC & DC.',
    typeSelector: 'Instrument Type',
    attraction: 'Attraction Type',
    repulsion: 'Repulsion Type',
    signalType: 'Supply Signal',
    dc: 'DC Signal',
    ac: 'AC Signal (RMS)',
    current: 'Current (I)',
    deflectingTorque: 'Deflecting Torque (Td ∝ I²)',
    pointerAngle: 'Pointer Deflection (θ)',
    scaleType: 'Scale Characteristic',
    nonUniformScale: 'Non-Uniform / Square-Law Scale (Cramped at low end)',
    acDcNote: 'Since Td ∝ I², torque is always positive regardless of current polarity, allowing operation on both AC and DC.',
    calloutTitle: 'Moving Iron Working Principle & Equations',
    calloutText: 'Deflecting torque Td = ½ · I² · (dL/dθ). Controlling torque Tc = k·θ. At equilibrium, θ = (½/k) · I² · (dL/dθ) → θ ∝ I². Because deflection depends on square of current, lower scale markings are cramped while higher markings are expanded.',
    formulaText: 'Td = ½ · I² · (dL / dθ)    |    θ ∝ I² (or I_rms²)    |    Non-Linear Scale',
  },
  hi: {
    title: 'मूविंग आयरन (MI) उपकरण — आकर्षण एवं प्रतिकर्षण',
    subtitle: 'देखें कि विक्षेपक टॉर्क (Td ∝ I²) कैसे एक गैर-समान (Non-uniform) पैमाना बनाता है और AC व DC दोनों पर कार्य करता है।',
    typeSelector: 'उपकरण का प्रकार',
    attraction: 'आकर्षण प्रकार (Attraction)',
    repulsion: 'प्रतिकर्षण प्रकार (Repulsion)',
    signalType: 'सप्लाई सिग्नल',
    dc: 'DC सिग्नल',
    ac: 'AC सिग्नल (RMS)',
    current: 'धारा (I)',
    deflectingTorque: 'विक्षेपक टॉर्क (Td ∝ I²)',
    pointerAngle: 'सुई का विक्षेप (θ)',
    scaleType: 'पैमाने की विशेषता',
    nonUniformScale: 'गैर-समान / वर्ग-नियम पैमाना (शुरुआत में संकीर्ण)',
    acDcNote: 'चूँकि Td ∝ I², टॉर्क ध्रुवता से स्वतंत्र हमेशा धनात्मक रहता है, जिससे यह AC तथा DC दोनों पर काम करता है।',
    calloutTitle: 'मूविंग आयरन कार्य सिद्धांत एवं समीकरण',
    calloutText: 'विक्षेपक टॉर्क Td = ½ · I² · (dL/dθ)। नियंत्रक टॉर्क Tc = k·θ। साम्यावस्था पर, θ ∝ I²। चूँकि विक्षेप धारा के वर्ग पर निर्भर करता है, पैमाने की निचली रीडिंग पास-पास और ऊपरी रीडिंग दूर-दूर होती हैं।',
    formulaText: 'Td = ½ · I² · (dL / dθ)    |    θ ∝ I² (या I_rms²)    |    गैर-रैखिक पैमाना',
  },
  bn: {
    title: 'মুভিং আয়রন (এমআই) যন্ত্র — আকর্ষণ ও বিকর্ষণ',
    subtitle: 'দেখুন কীভাবে ডিফ্লেক্টিং টর্ক (Td ∝ I²) অসুষম স্কেল তৈরি করে এবং এসি ও ডিসি উভয় ক্ষেত্রে কাজ করে।',
    typeSelector: 'যন্ত্রের ধরন',
    attraction: 'আকর্ষণ টাইপ (Attraction)',
    repulsion: 'বিকর্ষণ টাইপ (Repulsion)',
    signalType: 'সরবরাহ সংকেত',
    dc: 'ডিসি সিগন্যাল',
    ac: 'এসি সিগন্যাল (RMS)',
    current: 'কারেন্ট (I)',
    deflectingTorque: 'ডিফ্লেক্টিং টর্ক (Td ∝ I²)',
    pointerAngle: 'কাঁটার বিচ্যুতি (θ)',
    scaleType: 'স্কেলের বৈশিষ্ট্য',
    nonUniformScale: 'অসুষম / স্কয়ার-ল স্কেল (শুরুতে ঘন ও শেষে বিস্তৃত)',
    acDcNote: 'যেহেতু Td ∝ I², টর্ক সর্বদা ধনাত্মক থাকে, তাই এটি এসি এবং ডিসি উভয় প্রবাহেই পরিমাপ করতে সক্ষম।',
    calloutTitle: 'মুভিং আয়রন কার্যনীতি ও সমীকরণ',
    calloutText: 'ডিফ্লেক্টিং টর্ক Td = ½ · I² · (dL/dθ)। কন্ট্রোলিং টর্ক Tc = k·θ। সাম্যাবস্থায়, θ ∝ I²। বিচ্যুতি কারেন্টের বর্গের সমানুপাতিক হওয়ায় স্কেলের নিচের পাঠ ঘন সন্নিবেশিত এবং উপরের পাঠ বিস্তৃত হয়।',
    formulaText: 'Td = ½ · I² · (dL / dθ)    |    θ ∝ I² (বা I_rms²)    |    অসুষম স্কেল',
  }
};

export const MovingIronAnimation: React.FC<MovingIronAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [miType, setMiType] = useState<'attraction' | 'repulsion'>('repulsion');
  const [signalMode, setSignalMode] = useState<'dc' | 'ac'>('dc');
  const [current, setCurrent] = useState<number>(5); // 0 to 10 A
  const [animAngle, setAnimAngle] = useState<number>(22.5);

  // Square-law deflection: angle proportional to I^2
  // Max current = 10 A -> 90 degrees deflection
  const targetAngle = Math.pow(current / 10, 2) * 90;
  const torqueFactor = Math.pow(current, 2);

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setAnimAngle(targetAngle);
      return;
    }

    let animId: number;
    let currentDeg = animAngle;

    const step = () => {
      const diff = targetAngle - currentDeg;
      if (Math.abs(diff) < 0.2) {
        currentDeg = targetAngle;
        setAnimAngle(targetAngle);
      } else {
        currentDeg += diff * 0.15;
        setAnimAngle(currentDeg);
        animId = requestAnimationFrame(step);
      }
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [targetAngle, reducedMotion]);

  const handleReset = () => {
    setCurrent(5);
    setMiType('repulsion');
    setSignalMode('dc');
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      calloutTitle={t.calloutTitle}
      calloutText={t.calloutText}
      formulaText={t.formulaText}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Controls Column */}
        <div className="md:col-span-5 space-y-4">
          {/* Type Selector Toggle */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-xs font-bold text-slate-300 block">{t.typeSelector}</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setMiType('repulsion')}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  miType === 'repulsion'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t.repulsion}
              </button>
              <button
                onClick={() => setMiType('attraction')}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  miType === 'attraction'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t.attraction}
              </button>
            </div>
          </div>

          {/* AC / DC Selector */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-xs font-bold text-slate-300 block">{t.signalType}</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSignalMode('dc')}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  signalMode === 'dc'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t.dc}
              </button>
              <button
                onClick={() => setSignalMode('ac')}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  signalMode === 'ac'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t.ac}
              </button>
            </div>
          </div>

          {/* Current Slider */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-cyan-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                {t.current}
              </span>
              <span className="font-mono text-cyan-300 text-sm">{current.toFixed(1)} A {signalMode === 'ac' ? 'RMS' : ''}</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={current}
              onChange={(e) => setCurrent(parseFloat(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              aria-label={t.current}
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0 A</span>
              <span>5 A</span>
              <span>10 A</span>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">{t.deflectingTorque}</span>
              <span className="font-mono font-bold text-amber-400 text-sm">
                {torqueFactor.toFixed(1)} k·A²
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">{t.pointerAngle}</span>
              <span className="font-mono font-bold text-emerald-400 text-sm">
                {animAngle.toFixed(1)}°
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/60 text-xs text-amber-200">
            <div className="font-bold flex items-center gap-1 text-amber-300">
              <Gauge className="w-3.5 h-3.5" />
              {t.scaleType}
            </div>
            <p className="text-[11px] mt-1 font-semibold">{t.nonUniformScale}</p>
            <p className="text-[10px] text-amber-400/80 mt-1">{t.acDcNote}</p>
          </div>
        </div>

        {/* Visual Instrument SVG Representation */}
        <div className="md:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950 border border-slate-800">
          <svg viewBox="0 0 320 220" className="w-full max-w-sm h-56">
            <defs>
              <linearGradient id="coilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
            </defs>

            {/* Field Solenoid Coil */}
            <g transform="translate(100, 60)">
              <rect x="0" y="0" width="120" height="75" rx="8" fill="url(#coilGrad)" stroke="#f59e0b" strokeWidth="2" />
              <rect x="25" y="15" width="70" height="45" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
              
              {/* Coil windings visual */}
              {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="75" stroke="#fef3c7" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
              ))}

              {/* Vane Representation */}
              {miType === 'repulsion' ? (
                <>
                  {/* Fixed Iron Vane inside coil */}
                  <rect x="35" y="22" width="10" height="30" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />
                  <text x="35" y="16" fill="#cbd5e1" fontSize="7" fontWeight="bold">Fixed Vane</text>

                  {/* Moving Iron Vane (Repelled by fixed vane) */}
                  <g transform={`translate(${48 + (animAngle / 90) * 22}, 22)`}>
                    <rect x="0" y="0" width="10" height="30" fill="#38bdf8" stroke="#7dd3fc" strokeWidth="1" />
                    <text x="0" y="-4" fill="#7dd3fc" fontSize="7" fontWeight="bold">Moving Vane</text>
                  </g>
                </>
              ) : (
                <>
                  {/* Attraction type: Oval Iron Vane drawn into solenoid core */}
                  <g transform={`translate(${20 + (animAngle / 90) * 35}, 30) rotate(${15 + animAngle * 0.4})`}>
                    <ellipse cx="15" cy="8" rx="20" ry="8" fill="#38bdf8" stroke="#7dd3fc" strokeWidth="1.5" />
                    <text x="15" y="10" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="bold">Iron Vane</text>
                  </g>
                </>
              )}
            </g>

            {/* Non-Uniform Scale Arc & Ticks */}
            <path d="M 60 38 A 120 120 0 0 1 260 38" fill="none" stroke="#475569" strokeWidth="3" />

            {/* Non-linear scale ticks: angle = (I/10)^2 * 90 degrees */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => {
              const degFrac = Math.pow(val / 10, 2);
              const deg = -135 + degFrac * 90; // -135 to -45 deg
              const rad = (deg * Math.PI) / 180;
              const x1 = 160 + 105 * Math.cos(rad);
              const y1 = 150 + 105 * Math.sin(rad);
              const x2 = 160 + 115 * Math.cos(rad);
              const y2 = 150 + 115 * Math.sin(rad);
              const xt = 160 + 125 * Math.cos(rad);
              const yt = 150 + 125 * Math.sin(rad);
              return (
                <g key={val}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth={val % 5 === 0 ? "2" : "1"} />
                  {(val % 2 === 0 || val === 1) && (
                    <text x={xt} y={yt} textAnchor="middle" dominantBaseline="middle" fill="#cbd5e1" fontSize="8" fontWeight="bold">
                      {val}
                    </text>
                  )}
                </g>
              );
            })}
            <text x="160" y="18" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Non-Uniform Scale (0 to 10 A)</text>

            {/* Pointer */}
            <g transform={`rotate(${-135 + animAngle}, 160, 150)`}>
              <line x1="160" y1="150" x2="160" y2="45" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="160" cy="150" r="5" fill="#ef4444" />
            </g>
          </svg>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
