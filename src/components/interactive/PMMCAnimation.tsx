import React, { useState, useEffect } from 'react';
import { Sliders, Gauge, RotateCcw } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface PMMCAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'PMMC (Permanent Magnet Moving Coil) Instrument',
    subtitle: 'Observe how magnetic force on a current-carrying coil creates linear deflecting torque (Td ∝ I) resulting in a uniform scale.',
    current: 'Coil Current (I)',
    fluxDensity: 'Magnetic Flux Density (B)',
    deflectingTorque: 'Deflecting Torque (Td)',
    controllingTorque: 'Controlling Torque (Tc)',
    pointerAngle: 'Pointer Deflection (θ)',
    scaleType: 'Scale Characteristic',
    uniformScale: 'Uniform / Linear Scale (θ ∝ I)',
    dcNotice: 'PMMC measures DC current directly because average torque for AC is zero.',
    calloutTitle: 'PMMC Working Principle & Equations',
    calloutText: 'Deflecting torque Td = N·B·A·I. Controlling torque Tc = k·θ. At equilibrium, Td = Tc → θ = (N·B·A / k) · I. Since N, B, A, k are constant, deflection θ is directly proportional to current I.',
    formulaText: 'Td = N · B · A · I    |    Tc = k · θ    |    θ ∝ I  (Linear Scale)',
  },
  hi: {
    title: 'पीएमएमसी (स्थायी चुंबक चल कुंडली) उपकरण',
    subtitle: 'देखें कि धारावाही कुंडली पर चुंबकीय बल रैखिक विक्षेपक टॉर्क (Td ∝ I) उत्पन्न करता है जिससे एकसमान पैमाना (Uniform Scale) प्राप्त होता है।',
    current: 'कुंडली धारा (I)',
    fluxDensity: 'चुंबकीय फ्लक्स घनत्व (B)',
    deflectingTorque: 'विक्षेपक टॉर्क (Td)',
    controllingTorque: 'नियंत्रक टॉर्क (Tc)',
    pointerAngle: 'सुई का विक्षेप (θ)',
    scaleType: 'पैमाने की विशेषता',
    uniformScale: 'एकसमान / रैखिक पैमाना (θ ∝ I)',
    dcNotice: 'PMMC सीधे DC मापता है क्योंकि AC का औसत टॉर्क शून्य होता है।',
    calloutTitle: 'PMMC कार्य सिद्धांत एवं समीकरण',
    calloutText: 'विक्षेपक टॉर्क Td = N·B·A·I। नियंत्रक टॉर्क Tc = k·θ। साम्यावस्था पर, Td = Tc → θ = (N·B·A / k) · I। चूँकि N, B, A, k नियतांक हैं, विक्षेप θ धारा I के सीधे समानुपाती होता है।',
    formulaText: 'Td = N · B · A · I    |    Tc = k · θ    |    θ ∝ I  (रैखिक पैमाना)',
  },
  bn: {
    title: 'পিএমএমসি (স্থায়ী চুম্বক চলক কয়েল) যন্ত্র',
    subtitle: 'পর্যবেক্ষণ করুন কীভাবে প্রবাহবাহী কয়েলের ওপর চুম্বক বল রৈখিক টর্ক (Td ∝ I) তৈরি করে যার ফলে সুষম স্কেল পাওয়া যায়।',
    current: 'কয়েল কারেন্ট (I)',
    fluxDensity: 'চৌম্বক ফ্লাক্স ঘনত্ব (B)',
    deflectingTorque: 'ডিফ্লেক্টিং টর্ক (Td)',
    controllingTorque: 'কন্ট্রোলিং টর্ক (Tc)',
    pointerAngle: 'কাঁটার বিচ্যুতি (θ)',
    scaleType: 'স্কেলের বৈশিষ্ট্য',
    uniformScale: 'সুষম / রৈখিক স্কেল (θ ∝ I)',
    dcNotice: 'পিএমএমসি সরাসরি ডিএস কারেন্ট মাপে কারণ এসির জন্য গড় টর্ক শূন্য হয়।',
    calloutTitle: 'পিএমএমসি কার্যনীতি ও সমীকরণ',
    calloutText: 'ডিফ্লেক্টিং টর্ক Td = N·B·A·I। কন্ট্রোলিং টর্ক Tc = k·θ। সাম্যাবস্থায়, Td = Tc → θ = (N·B·A / k) · I। যেহেতু N, B, A, k ধ্রুবক, তাই কাঁটার বিচ্যুতি θ কারেন্ট I-এর সরাসরি সমানুপাতিক।',
    formulaText: 'Td = N · B · A · I    |    Tc = k · θ    |    θ ∝ I  (সুষম স্কেল)',
  }
};

export const PMMCAnimation: React.FC<PMMCAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [current, setCurrent] = useState<number>(5); // 0 to 10 mA
  const [fluxDensity, setFluxDensity] = useState<number>(0.5); // 0.1 to 1.0 Tesla
  const [animAngle, setAnimAngle] = useState<number>(45);

  const N = 100; // turns
  const A = 0.0004; // m^2 (4 cm^2)
  const k = 0.2; // uNm / deg

  // Td in uNm = N * B * A * I (mA) = 100 * B * 0.0004 * I = 0.04 * B * I uNm
  const deflectingTorque = N * fluxDensity * A * (current * 1000) * 0.025; // scaled for clear readout
  const targetAngle = (current / 10) * 90; // 0 to 90 degrees

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
    setFluxDensity(0.5);
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
        {/* Interactive Controls & Readout */}
        <div className="md:col-span-5 space-y-4">
          {/* Current Slider */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-cyan-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                {t.current}
              </span>
              <span className="font-mono text-cyan-300 text-sm">{current.toFixed(1)} mA</span>
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
              <span>0 mA</span>
              <span>5 mA</span>
              <span>10 mA</span>
            </div>
          </div>

          {/* Flux Density Slider */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-amber-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                {t.fluxDensity}
              </span>
              <span className="font-mono text-amber-300 text-sm">{fluxDensity.toFixed(2)} T</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={fluxDensity}
              onChange={(e) => setFluxDensity(parseFloat(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              aria-label={t.fluxDensity}
            />
          </div>

          {/* Readout Metrics */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">{t.deflectingTorque}</span>
              <span className="font-mono font-bold text-cyan-400 text-sm">
                {(deflectingTorque * 10).toFixed(2)} μN·m
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">{t.pointerAngle}</span>
              <span className="font-mono font-bold text-emerald-400 text-sm">
                {animAngle.toFixed(1)}°
              </span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/60 text-xs text-cyan-200">
            <div className="font-bold flex items-center gap-1 text-cyan-300">
              <Gauge className="w-3.5 h-3.5" />
              {t.scaleType}
            </div>
            <p className="text-[11px] mt-1 font-semibold">{t.uniformScale}</p>
            <p className="text-[10px] text-cyan-400/80 mt-1">{t.dcNotice}</p>
          </div>
        </div>

        {/* Visual Instrument SVG Representation */}
        <div className="md:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950 border border-slate-800">
          <svg viewBox="0 0 320 220" className="w-full max-w-sm h-56">
            <defs>
              <linearGradient id="magnetN" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              <linearGradient id="magnetS" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>

            {/* Permanent Magnet Poles with Cylindrical Shoes */}
            <path d="M 30 140 L 30 70 C 30 40, 80 40, 100 70 L 100 130 C 80 120, 60 120, 30 140 Z" fill="url(#magnetN)" stroke="#991b1b" strokeWidth="1.5" />
            <text x="50" y="80" fill="#ffffff" fontWeight="extrabold" fontSize="16">N</text>

            <path d="M 290 140 L 290 70 C 290 40, 240 40, 220 70 L 220 130 C 240 120, 260 120, 290 140 Z" fill="url(#magnetS)" stroke="#1e40af" strokeWidth="1.5" />
            <text x="260" y="80" fill="#ffffff" fontWeight="extrabold" fontSize="16">S</text>

            {/* Flux Lines */}
            <g opacity="0.3" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,3">
              <line x1="95" y1="85" x2="225" y2="85" />
              <line x1="95" y1="100" x2="225" y2="100" />
              <line x1="95" y1="115" x2="225" y2="115" />
            </g>

            {/* Soft Iron Core */}
            <circle cx="160" cy="100" r="32" fill="#334155" stroke="#64748b" strokeWidth="2" />
            <text x="160" y="104" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">Iron Core</text>

            {/* Rectangular Coil Assembly (Rotates with animAngle) */}
            <g transform={`rotate(${animAngle - 45}, 160, 100)`}>
              <rect x="118" y="92" width="84" height="16" rx="3" fill="#f59e0b" fillOpacity="0.4" stroke="#d97706" strokeWidth="2" />
              {/* Coil Windings */}
              <line x1="125" y1="92" x2="125" y2="108" stroke="#b45309" strokeWidth="1.5" />
              <line x1="135" y1="92" x2="135" y2="108" stroke="#b45309" strokeWidth="1.5" />
              <line x1="185" y1="92" x2="185" y2="108" stroke="#b45309" strokeWidth="1.5" />
              <line x1="195" y1="92" x2="195" y2="108" stroke="#b45309" strokeWidth="1.5" />
            </g>

            {/* Control Springs (Hairsprings) */}
            <circle cx="160" cy="100" r="10" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="2,2" />

            {/* Scale Arc & Ticks */}
            <path d="M 80 40 A 100 100 0 0 1 240 40" fill="none" stroke="#475569" strokeWidth="3" />
            {/* Ticks from 0 to 10 mA (Equally spaced!) */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => {
              const deg = -135 + (val / 10) * 90; // -135 to -45 deg
              const rad = (deg * Math.PI) / 180;
              const x1 = 160 + 92 * Math.cos(rad);
              const y1 = 140 + 92 * Math.sin(rad);
              const x2 = 160 + 102 * Math.cos(rad);
              const y2 = 140 + 102 * Math.sin(rad);
              const xt = 160 + 112 * Math.cos(rad);
              const yt = 140 + 112 * Math.sin(rad);
              return (
                <g key={val}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#38bdf8" strokeWidth={val % 5 === 0 ? "2" : "1"} />
                  {val % 2 === 0 && (
                    <text x={xt} y={yt} textAnchor="middle" dominantBaseline="middle" fill="#94a3b8" fontSize="8" fontWeight="bold">
                      {val}
                    </text>
                  )}
                </g>
              );
            })}
            <text x="160" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Uniform Scale (mA)</text>

            {/* Pointer (Rotates from -135 deg up to -45 deg) */}
            <g transform={`rotate(${-135 + animAngle}, 160, 140)`}>
              <line x1="160" y1="140" x2="160" y2="48" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="160" cy="140" r="5" fill="#ef4444" />
            </g>
          </svg>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
