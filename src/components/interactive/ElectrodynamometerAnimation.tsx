import React, { useState, useEffect } from 'react';
import { Sliders, Gauge, Zap } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ElectrodynamometerAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Electrodynamometer Instrument — Wattmeter Mode',
    subtitle: 'Observe how interaction between fixed current coils (CC) and moving pressure coil (PC) measures Active Power (P = V·I·cosφ).',
    appMode: 'Application Mode',
    wattmeter: 'Wattmeter (Power)',
    ammeter: 'Ammeter (Current)',
    voltmeter: 'Voltmeter (Voltage)',
    voltage: 'Load Voltage (V)',
    current: 'Load Current (I)',
    powerFactor: 'Power Factor (cos φ)',
    activePower: 'Active Power (P)',
    deflectingTorque: 'Deflecting Torque (Td)',
    pointerAngle: 'Pointer Deflection (θ)',
    scaleType: 'Scale Characteristic',
    linearWattmeterScale: 'Linear Scale for Wattmeter (θ ∝ P = V·I·cosφ)',
    squareLawNotice: 'When used as Ammeter/Voltmeter, Td ∝ I² resulting in a square-law scale.',
    calloutTitle: 'Electrodynamometer Working Principle & Equations',
    calloutText: 'Fixed coils produce magnetic field B ∝ I_load. Moving coil carries current i_p ∝ V_load. Deflecting torque Td ∝ I_fixed · I_moving · cosφ = V · I · cosφ = Active Power P. Controlling torque Tc = k·θ → θ ∝ P. Thus, scale is linear for power measurement.',
    formulaText: 'Td = I_fixed · I_moving · (dM / dθ)    |    P = V · I · cos φ    |    θ ∝ Active Power',
  },
  hi: {
    title: 'इलेक्ट्रोडायनेमोमीटर उपकरण — वाटमीटर मोड',
    subtitle: 'देखें कि कैसे फिक्स्ड करंट कॉइल्स (CC) और मूविंग प्रेशर कॉइल (PC) के बीच इंटरैक्शन सक्रिय शक्ति (P = V·I·cosφ) मापता है।',
    appMode: 'अनुप्रयोग मोड',
    wattmeter: 'वाटमीटर (शक्ति)',
    ammeter: 'अमीटर (धारा)',
    voltmeter: 'वोल्टमीटर (वोल्टेज)',
    voltage: 'लोड वोल्टेज (V)',
    current: 'लोड धारा (I)',
    powerFactor: 'पावर फैक्टर (cos φ)',
    activePower: 'सक्रिय शक्ति (Active Power, P)',
    deflectingTorque: 'विक्षेपक टॉर्क (Td)',
    pointerAngle: 'सुई का विक्षेप (θ)',
    scaleType: 'पैमाने की विशेषता',
    linearWattmeterScale: 'वाटमीटर के लिए एकसमान/रैखिक पैमाना (θ ∝ P = V·I·cosφ)',
    squareLawNotice: 'अमीटर/वोल्टमीटर के रूप में उपयोग करने पर Td ∝ I² वर्ग-नियम पैमाना देता है।',
    calloutTitle: 'इलेक्ट्रोडायनेमोमीटर कार्य सिद्धांत एवं समीकरण',
    calloutText: 'फिक्स्ड कॉइल चुंबकीय क्षेत्र B ∝ I_load बनाती हैं। मूविंग कॉइल में धारा i_p ∝ V_load बहती है। विक्षेपक टॉर्क Td ∝ V · I · cosφ = सक्रिय शक्ति P। साम्यावस्था पर θ ∝ P। अतः शक्ति मापन में पैमाना रैखिक होता है।',
    formulaText: 'Td = I_f · I_m · (dM / dθ)    |    P = V · I · cos φ    |    θ ∝ सक्रिय शक्ति',
  },
  bn: {
    title: 'ইলেক্ট্রোডায়নামোমিটার যন্ত্র — ওয়াটমিটার মোড',
    subtitle: 'দেখুন কীভাবে ফিক্সড কারেন্ট কয়েল (CC) এবং মুভিং প্রেসার কয়েলের (PC) পারস্পরিক প্রভাবে সক্রিয় পাওয়ার (P = V·I·cosφ) পরিমাপ করা যায়।',
    appMode: 'প্রয়োগ মোড',
    wattmeter: 'ওয়াটমিটার (পাওয়ার)',
    ammeter: 'অ্যামিটার (কারেন্ট)',
    voltmeter: 'ভোল্টমিটার (ভোল্টেজ)',
    voltage: 'লোড ভোল্টেজ (V)',
    current: 'লোড কারেন্ট (I)',
    powerFactor: 'পাওয়ার ফ্যাক্টর (cos φ)',
    activePower: 'সক্রিয় ক্ষমতা (Active Power, P)',
    deflectingTorque: 'ডিফ্লেক্টিং টর্ক (Td)',
    pointerAngle: 'কাঁটার বিচ্যুতি (θ)',
    scaleType: 'স্কেলের বৈশিষ্ট্য',
    linearWattmeterScale: 'ওয়াটমিটারের জন্য রৈখিক স্কেল (θ ∝ P = V·I·cosφ)',
    squareLawNotice: 'অ্যামিটার/ভোল্টমিটার হিসেবে ব্যবহারের সময় Td ∝ I² হওয়ায় অসুষম স্কেল তৈরি হয়।',
    calloutTitle: 'ইলেক্ট্রোডায়নামোমিটার কার্যনীতি ও সমীকরণ',
    calloutText: 'ফিক্সড কয়েল চৌম্বক ক্ষেত্র B ∝ I_load তৈরি করে। মুভিং কয়েলে প্রবাহ i_p ∝ V_load যায়। ডিফ্লেক্টিং টর্ক Td ∝ V · I · cosφ = অ্যাক্টিভ পাওয়ার P। সাম্যাবস্থায় θ ∝ P। তাই পাওয়ার পরিমাপে স্কেল রৈখিক হয়।',
    formulaText: 'Td = I_f · I_m · (dM / dθ)    |    P = V · I · cos φ    |    θ ∝ সক্রিয় পাওয়ার',
  }
};

export const ElectrodynamometerAnimation: React.FC<ElectrodynamometerAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [mode, setMode] = useState<'wattmeter' | 'ammeter' | 'voltmeter'>('wattmeter');
  const [voltage, setVoltage] = useState<number>(220); // 0 to 250 V
  const [current, setCurrent] = useState<number>(5);   // 0 to 10 A
  const [pf, setPf] = useState<number>(0.8);           // 0.0 to 1.0
  const [animAngle, setAnimAngle] = useState<number>(31.68);

  // Calculations
  const activePower = voltage * current * pf; // Watts (max 250 * 10 * 1 = 2500 W)
  
  let targetAngle = 0;
  if (mode === 'wattmeter') {
    targetAngle = (activePower / 2500) * 90; // Linear scale 0 to 90 deg
  } else {
    // Ammeter / Voltmeter mode: square-law
    targetAngle = Math.pow(current / 10, 2) * 90;
  }

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
    setVoltage(220);
    setCurrent(5);
    setPf(0.8);
    setMode('wattmeter');
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
          {/* Mode Selector */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-xs font-bold text-slate-300 block">{t.appMode}</span>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => setMode('wattmeter')}
                className={`py-1.5 px-1 rounded-lg text-[11px] font-bold transition-all ${
                  mode === 'wattmeter'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t.wattmeter}
              </button>
              <button
                onClick={() => setMode('ammeter')}
                className={`py-1.5 px-1 rounded-lg text-[11px] font-bold transition-all ${
                  mode === 'ammeter'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t.ammeter}
              </button>
              <button
                onClick={() => setMode('voltmeter')}
                className={`py-1.5 px-1 rounded-lg text-[11px] font-bold transition-all ${
                  mode === 'voltmeter'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t.voltmeter}
              </button>
            </div>
          </div>

          {/* Voltage Slider */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-amber-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                {t.voltage}
              </span>
              <span className="font-mono text-amber-300 text-sm">{voltage} V</span>
            </div>
            <input
              type="range"
              min="0"
              max="250"
              step="5"
              value={voltage}
              onChange={(e) => setVoltage(parseInt(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              aria-label={t.voltage}
            />
          </div>

          {/* Current Slider */}
          <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-cyan-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                {t.current}
              </span>
              <span className="font-mono text-cyan-300 text-sm">{current.toFixed(1)} A</span>
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
          </div>

          {/* Power Factor Slider */}
          {mode === 'wattmeter' && (
            <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-purple-400 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  {t.powerFactor}
                </span>
                <span className="font-mono text-purple-300 text-sm">{pf.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="1.0"
                step="0.05"
                value={pf}
                onChange={(e) => setPf(parseFloat(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                aria-label={t.powerFactor}
              />
            </div>
          )}

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block text-[10px]">{t.activePower}</span>
              <span className="font-mono font-bold text-cyan-400 text-sm">
                {activePower.toFixed(0)} W
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
            <p className="text-[11px] mt-1 font-semibold">
              {mode === 'wattmeter' ? t.linearWattmeterScale : 'Non-Linear / Square-Law Scale'}
            </p>
            <p className="text-[10px] text-cyan-400/80 mt-1">{t.squareLawNotice}</p>
          </div>
        </div>

        {/* Visual Instrument SVG Representation */}
        <div className="md:col-span-7 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-950 border border-slate-800">
          <svg viewBox="0 0 320 220" className="w-full max-w-sm h-56">
            <defs>
              <linearGradient id="fixedCoilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
            </defs>

            {/* Fixed Coils (CC - Current Coil) - Split into Left and Right halves */}
            <g transform="translate(60, 75)">
              {/* Left Fixed Coil Half */}
              <rect x="0" y="0" width="35" height="50" rx="4" fill="url(#fixedCoilGrad)" stroke="#f87171" strokeWidth="1.5" />
              <text x="17.5" y="28" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">CC (L)</text>
              
              {/* Right Fixed Coil Half */}
              <rect x="125" y="0" width="35" height="50" rx="4" fill="url(#fixedCoilGrad)" stroke="#f87171" strokeWidth="1.5" />
              <text x="142.5" y="28" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">CC (R)</text>

              {/* Magnetic Field Arrows between Fixed Coils */}
              <g stroke="#f87171" strokeWidth="1" opacity="0.5">
                <line x1="38" y1="25" x2="122" y2="25" strokeDasharray="3,3" />
              </g>
            </g>

            {/* Moving Coil (PC - Pressure/Voltage Coil) Rotates with animAngle */}
            <g transform={`translate(160, 100) rotate(${animAngle - 45})`}>
              <rect x="-25" y="-12" width="50" height="24" rx="3" fill="#38bdf8" fillOpacity="0.5" stroke="#7dd3fc" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">PC Coil</text>
            </g>

            {/* Circuit wiring hints */}
            <text x="160" y="150" textAnchor="middle" fill="#94a3b8" fontSize="8">
              {mode === 'wattmeter' ? 'CC in series with Load | PC in parallel with Load' : 'CC and PC connected in series'}
            </text>

            {/* Scale Arc & Ticks */}
            <path d="M 60 40 A 110 110 0 0 1 260 40" fill="none" stroke="#475569" strokeWidth="3" />

            {/* Scale Ticks */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => {
              let frac = val / 10;
              if (mode !== 'wattmeter') {
                frac = Math.pow(val / 10, 2);
              }
              const deg = -135 + frac * 90;
              const rad = (deg * Math.PI) / 180;
              const x1 = 160 + 95 * Math.cos(rad);
              const y1 = 145 + 95 * Math.sin(rad);
              const x2 = 160 + 105 * Math.cos(rad);
              const y2 = 145 + 105 * Math.sin(rad);
              const xt = 160 + 115 * Math.cos(rad);
              const yt = 145 + 115 * Math.sin(rad);
              
              const labelVal = mode === 'wattmeter' ? val * 250 : val;

              return (
                <g key={val}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#38bdf8" strokeWidth={val % 5 === 0 ? "2" : "1"} />
                  {val % 2 === 0 && (
                    <text x={xt} y={yt} textAnchor="middle" dominantBaseline="middle" fill="#cbd5e1" fontSize="7" fontWeight="bold">
                      {labelVal}
                    </text>
                  )}
                </g>
              );
            })}
            <text x="160" y="20" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
              {mode === 'wattmeter' ? 'Wattmeter Scale (Watts)' : 'Ammeter / Voltmeter Scale'}
            </text>

            {/* Pointer */}
            <g transform={`rotate(${-135 + animAngle}, 160, 145)`}>
              <line x1="160" y1="145" x2="160" y2="45" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="160" cy="145" r="5" fill="#ef4444" />
            </g>
          </svg>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
