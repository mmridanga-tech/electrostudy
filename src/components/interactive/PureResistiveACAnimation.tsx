import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RotateCcw, Play, Pause, Activity, Zap, Compass, Flame, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface PureResistiveACAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Purely Resistive AC Circuit Simulator',
    subtitle: 'Examine Ohm’s law in the AC domain, in-phase voltage and current waveforms, unity power factor (cos φ = 1.0), and the non-negative double-frequency instantaneous power pulsating curve.',
    vRmsLabel: 'RMS Voltage (Vrms)',
    resLabel: 'Resistance (R)',
    freqLabel: 'Frequency (f)',
    play: 'Play Animation',
    pause: 'Pause Animation',
    reset: 'Reset Defaults',
    scrubber: 'Rotor Angle θ = ωt',
    vrmsMetric: 'RMS Voltage Vrms',
    irmsMetric: 'RMS Current Irms',
    activePower: 'Active Power (P = V·I)',
    powerFactor: 'Power Factor (cos φ)',
    phaseAngle: 'Phase Angle (φ)',
    inPhaseStatus: 'In-Phase (φ = 0°)',
    schematicTitle: 'Circuit Schematic (AC Source & Pure Resistor)',
    waveformsTitle: 'Synchronized Voltage v(t), Current i(t) & Instantaneous Power p(t)',
    legendVoltage: 'Voltage v(t) = Vm · sin(ωt)',
    legendCurrent: 'Current i(t) = Im · sin(ωt)',
    legendPower: 'Power p(t) = v(t) · i(t) ≥ 0',
    legendPavg: 'Average Power P = Vrms · Irms',
    unityPfNote: 'Unity Power Factor: Because current and voltage cross zero and reach peaks at the exact same instant (in-phase), the power factor is strictly cos(0°) = 1.0.',
    powerDoubleFreqNote: 'Double-Frequency Power: Instantaneous power p(t) = VI(1 - cos 2ωt) oscillates at 2f (100 Hz for 50 Hz supply) and is NEVER NEGATIVE; thermal energy is dissipated continuously in both half-cycles.',
    formulaCalloutTitle: 'Resistive AC Governing Equations',
    formulaCalloutText: 'Current is strictly in-phase with voltage: i(t) = (Vm / R) · sin(ωt). Instantaneous power p(t) = v(t)i(t) = VmIm · sin²(ωt) = VI(1 - cos 2ωt). Average power P = Vrms · Irms = Irms² · R.',
    formulaText: 'Irms = Vrms / R   |   φ = 0° (cos φ = 1.0)   |   P = Vrms · Irms = Irms² · R   |   p(t) ≥ 0'
  },
  hi: {
    title: 'शुद्ध प्रतिरोधी एसी परिपथ सिम्युलेटर',
    subtitle: 'एसी डोमेन में ओम का नियम, समान फेज में वोल्टेज एवं धारा वेवफॉर्म, यूनिटी पावर फैक्टर (cos φ = 1.0) और सदैव धनात्मक द्वि-आवृत्ति तात्कालिक शक्ति वक्र का अध्ययन करें।',
    vRmsLabel: 'RMS वोल्टेज (Vrms)',
    resLabel: 'प्रतिरोध (R)',
    freqLabel: 'आवृत्ति (f)',
    play: 'एनीमेशन चलाएं',
    pause: 'एनीमेशन रोकें',
    reset: 'डिफ़ॉल्ट रीसेट',
    scrubber: 'रोटर कोण θ = ωt',
    vrmsMetric: 'RMS वोल्टेज Vrms',
    irmsMetric: 'RMS धारा Irms',
    activePower: 'सक्रिय शक्ति (P = V·I)',
    powerFactor: 'पावर फैक्टर (cos φ)',
    phaseAngle: 'फेज कोण (φ)',
    inPhaseStatus: 'समान फेज (φ = 0°)',
    schematicTitle: 'परिपथ आरेख (एसी स्रोत एवं शुद्ध प्रतिरोधक)',
    waveformsTitle: 'तुल्यकालिक वोल्टेज v(t), धारा i(t) एवं तात्कालिक शक्ति p(t)',
    legendVoltage: 'वोल्टेज v(t) = Vm · sin(ωt)',
    legendCurrent: 'धारा i(t) = Im · sin(ωt)',
    legendPower: 'शक्ति p(t) = v(t) · i(t) ≥ 0',
    legendPavg: 'औसत शक्ति P = Vrms · Irms',
    unityPfNote: 'यूनिटी पावर फैक्टर: चूँकि धारा और वोल्टेज एक ही क्षण पर शून्य और शिखर मान प्राप्त करते हैं, अतः पावर फैक्टर निश्चित रूप से cos(0°) = 1.0 होता है।',
    powerDoubleFreqNote: 'द्वि-आवृत्ति शक्ति: तात्कालिक शक्ति p(t) = VI(1 - cos 2ωt) आपूर्ति आवृत्ति की दोगुनी (2f) पर दोलन करती है और कभी ऋणात्मक नहीं होती।',
    formulaCalloutTitle: 'प्रतिरोधी एसी परिपथ के मूल सूत्र',
    formulaCalloutText: 'धारा सदैव वोल्टेज के समान फेज में होती है: i(t) = (Vm / R) · sin(ωt)। तात्कालिक शक्ति p(t) = VI(1 - cos 2ωt)। औसत शक्ति P = Vrms · Irms = Irms² · R।',
    formulaText: 'Irms = Vrms / R   |   φ = 0° (cos φ = 1.0)   |   P = Vrms · Irms = Irms² · R   |   p(t) ≥ 0'
  },
  bn: {
    title: 'বিশুদ্ধ রোধীয় এসি বর্তনী সিমুলেটর',
    subtitle: 'এসি সার্কিটে ওহমের সূত্র, ইন-ফেজ ভোল্টেজ ও কারেন্ট ওয়েভফর্ম, ইউনিটি পাওয়ার ফ্যাক্টর (cos φ = ১.০) এবং সর্বদা ধনাত্মক দ্বিগুণ ফ্রিকোয়েন্সির তাৎক্ষণিক পাওয়ার তরঙ্গ নিরীক্ষণ করুন।',
    vRmsLabel: 'RMS ভোল্টেজ (Vrms)',
    resLabel: 'রোধ (R)',
    freqLabel: 'ফ্রিকোয়েন্সি (f)',
    play: 'অ্যানিমেশন চালান',
    pause: 'অ্যানিমেশন থামান',
    reset: 'ডিফল্ট রিসেট',
    scrubber: 'রোটর কোণ θ = ωt',
    vrmsMetric: 'RMS ভোল্টেজ Vrms',
    irmsMetric: 'RMS কারেন্ট Irms',
    activePower: 'সক্রিয় শক্তি (P = V·I)',
    powerFactor: 'পাওয়ার ফ্যাক্টর (cos φ)',
    phaseAngle: 'ফেজ কোণ (φ)',
    inPhaseStatus: 'ইন-ফেজ (φ = 0°)',
    schematicTitle: 'সার্কিট ডায়াগ্রাম (এসি উৎস ও বিশুদ্ধ রোধ)',
    waveformsTitle: 'সমলয় ভোল্টেজ v(t), কারেন্ট i(t) এবং তাৎক্ষণিক পাওয়ার p(t)',
    legendVoltage: 'ভোল্টেজ v(t) = Vm · sin(ωt)',
    legendCurrent: 'কারেন্ট i(t) = Im · sin(ωt)',
    legendPower: 'পাওয়ার p(t) = v(t) · i(t) ≥ 0',
    legendPavg: 'গড় পাওয়ার P = Vrms · Irms',
    unityPfNote: 'ইউনিটি পাওয়ার ফ্যাক্টর: কারেন্ট ও ভোল্টেজ একই সাথে শূন্য ও সর্বোচ্চ মানে পৌঁছানোর ফলে ফেজ পার্থক্য শূন্য এবং পাওয়ার ফ্যাক্টর cos(0°) = ১.০।',
    powerDoubleFreqNote: 'দ্বিগুণ ফ্রিকোয়েন্সি পাওয়ার: তাৎক্ষণিক পাওয়ার p(t) = VI(1 - cos 2ωt) উৎসের দ্বিগুণ ফ্রিকোয়েন্সিতে (2f) স্পন্দিত হয় এবং কখনোই ঋণাত্মক হয় না।',
    formulaCalloutTitle: 'বিশুদ্ধ রোধীয় এসি সূত্রসমূহ',
    formulaCalloutText: 'কারেন্ট ভোল্টেজের সম্পূর্ণ ইন-ফেজে থাকে: i(t) = (Vm / R) · sin(ωt)। তাৎক্ষণিক পাওয়ার p(t) = VI(1 - cos 2ωt)। গড় পাওয়ার P = Vrms · Irms = Irms² · R।',
    formulaText: 'Irms = Vrms / R   |   φ = 0° (cos φ = 1.0)   |   P = Vrms · Irms = Irms² · R   |   p(t) ≥ 0'
  }
};

export const PureResistiveACAnimation: React.FC<PureResistiveACAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  // Inputs
  const [vRms, setVRms] = useState<number>(230); // Volts
  const [resistance, setResistance] = useState<number>(10); // Ohms
  const [frequency, setFrequency] = useState<number>(50); // Hz
  const [isPlaying, setIsPlaying] = useState<boolean>(!isReducedMotion);
  const [angleDeg, setAngleDeg] = useState<number>(0);

  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Derived Calculations
  const vm = Math.SQRT2 * vRms;
  const iRms = vRms / (resistance || 1);
  const im = Math.SQRT2 * iRms;
  const activePowerW = vRms * iRms;
  const peakInstantPowerW = vm * im; // 2 * activePowerW

  const rad = (angleDeg * Math.PI) / 180;
  const instV = vm * Math.sin(rad);
  const instI = im * Math.sin(rad);
  const instP = instV * instI; // always >= 0

  // Animation Loop
  useEffect(() => {
    if (isReducedMotion) {
      setIsPlaying(false);
      return;
    }

    const animate = (timestamp: number) => {
      if (lastTimeRef.current !== 0 && isPlaying) {
        const deltaSec = (timestamp - lastTimeRef.current) / 1000;
        setAngleDeg((prev) => (prev + deltaSec * 90) % 360);
      }
      lastTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPlaying, isReducedMotion]);

  const handleReset = () => {
    setVRms(230);
    setResistance(10);
    setFrequency(50);
    setAngleDeg(0);
    setIsPlaying(!isReducedMotion);
  };

  // Waveform SVG Dimensions
  const svgW = 820;
  const svgH = 260;
  const waveStartX = 50;
  const waveEndX = svgW - 30;
  const waveWidth = waveEndX - waveStartX;
  const centerY = 130;
  const vScalePx = 75; // for max peak Vm

  // Build Curves for v(t), i(t), and p(t)
  const steps = 120;
  let pathV = '';
  let pathI = '';
  let pathP = '';

  for (let i = 0; i <= steps; i++) {
    const frac = i / steps;
    const th = frac * 2 * Math.PI;
    const x = waveStartX + frac * waveWidth;

    // Normalized sine: sin(th)
    const sinVal = Math.sin(th);
    const yV = centerY - sinVal * vScalePx;
    const yI = centerY - sinVal * (vScalePx * 0.7); // scale current slightly lower for visual separation

    // Power: p(th) = sin^2(th) goes from 0 to 1
    const pVal = sinVal * sinVal; // 0 to 1
    const yP = centerY - pVal * (vScalePx * 1.1); // sits above baseline 0

    if (i === 0) {
      pathV += `M ${x.toFixed(2)} ${yV.toFixed(2)}`;
      pathI += `M ${x.toFixed(2)} ${yI.toFixed(2)}`;
      pathP += `M ${x.toFixed(2)} ${yP.toFixed(2)}`;
    } else {
      pathV += ` L ${x.toFixed(2)} ${yV.toFixed(2)}`;
      pathI += ` L ${x.toFixed(2)} ${yI.toFixed(2)}`;
      pathP += ` L ${x.toFixed(2)} ${yP.toFixed(2)}`;
    }
  }

  // Instantaneous Cursor Position
  const markerFrac = (angleDeg % 360) / 360;
  const markerX = waveStartX + markerFrac * waveWidth;
  const curMarkerYV = centerY - Math.sin(rad) * vScalePx;
  const curMarkerYI = centerY - Math.sin(rad) * (vScalePx * 0.7);
  const curMarkerYP = centerY - Math.sin(rad) * Math.sin(rad) * (vScalePx * 1.1);

  // Power Average Line Y
  const pAvgY = centerY - 0.5 * (vScalePx * 1.1);

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={t.formulaCalloutTitle}
      calloutText={t.formulaCalloutText}
      formulaText={t.formulaText}
    >
      <div className="space-y-6">
        {/* Sliders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          {/* RMS Voltage */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-cyan-300 font-semibold">{t.vRmsLabel}</span>
              <span className="text-cyan-400 font-bold px-1.5 py-0.5 bg-cyan-950 border border-cyan-800 rounded">
                {vRms} V
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="400"
              step="10"
              value={vRms}
              onChange={(e) => setVRms(Number(e.target.value))}
              aria-label={t.vRmsLabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>50 V</span>
              <span>230 V</span>
              <span>400 V</span>
            </div>
          </div>

          {/* Resistance R */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-amber-300 font-semibold">{t.resLabel}</span>
              <span className="text-amber-400 font-bold px-1.5 py-0.5 bg-amber-950 border border-amber-800 rounded">
                {resistance} Ω
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={resistance}
              onChange={(e) => setResistance(Number(e.target.value))}
              aria-label={t.resLabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>5 Ω</span>
              <span>10 Ω</span>
              <span>50 Ω</span>
            </div>
          </div>

          {/* Frequency f */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-purple-300 font-semibold">{t.freqLabel}</span>
              <span className="text-purple-400 font-bold px-1.5 py-0.5 bg-purple-950 border border-purple-800 rounded">
                {frequency} Hz
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              step="5"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              aria-label={t.freqLabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>20 Hz</span>
              <span>50 Hz</span>
              <span>100 Hz</span>
            </div>
          </div>
        </div>

        {/* Live Calculation Display Dashboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase text-slate-400 block">{t.irmsMetric}</span>
            <span className="text-sm font-bold text-amber-300 mt-1 block">
              {iRms.toFixed(2)} A <span className="text-[10px] text-slate-400">(Im={im.toFixed(1)}A)</span>
            </span>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase text-slate-400 block">{t.activePower}</span>
            <span className="text-sm font-bold text-emerald-300 mt-1 block">
              {activePowerW.toFixed(1)} W <span className="text-[10px] text-slate-400">(Pk={peakInstantPowerW.toFixed(0)}W)</span>
            </span>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase text-slate-400 block">{t.powerFactor}</span>
            <span className="text-sm font-bold text-cyan-300 mt-1 block">
              1.000 <span className="text-[10px] text-cyan-400">(Unity)</span>
            </span>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase text-slate-400 block">{t.phaseAngle}</span>
            <span className="text-sm font-bold text-purple-300 mt-1 block">
              φ = 0.0° <span className="text-[10px] text-purple-400">(In-Phase)</span>
            </span>
          </div>
        </div>

        {/* Schematics & Waveforms Combined View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* Circuit Diagram Box (Left) */}
          <div className="lg:col-span-4 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
            <span className="text-xs font-mono font-bold text-slate-400 block mb-2">{t.schematicTitle}</span>
            <svg viewBox="0 0 260 200" className="w-full h-auto select-none" role="img" aria-label="Pure Resistive AC Circuit Schematic">
              {/* Wiring Loop */}
              <rect x="40" y="30" width="180" height="140" rx="6" fill="none" stroke="#334155" strokeWidth="2.5" />

              {/* AC Source Symbol */}
              <g transform="translate(40, 100)">
                <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
                <path d="M -10 0 Q -5 -8 0 0 Q 5 8 10 0" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <text x="-25" y="4" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="end">
                  {vRms}V~
                </text>
              </g>

              {/* Series Ammeter */}
              <g transform="translate(130, 30)">
                <circle cx="0" cy="0" r="13" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
                <text x="0" y="4" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  A
                </text>
                <text x="0" y="-18" fill="#fbbf24" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  {iRms.toFixed(1)} A
                </text>
              </g>

              {/* Pure Resistor Load */}
              <g transform="translate(220, 100)">
                <rect x="-14" y="-35" width="28" height="70" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" />
                {/* Resistor Hatch lines */}
                <line x1="-10" y1="-20" x2="10" y2="-20" stroke="#f59e0b" strokeWidth="1.5" />
                <line x1="-10" y1="-5" x2="10" y2="-5" stroke="#f59e0b" strokeWidth="1.5" />
                <line x1="-10" y1="10" x2="10" y2="10" stroke="#f59e0b" strokeWidth="1.5" />
                <line x1="-10" y1="25" x2="10" y2="25" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="20" y="4" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  R={resistance}Ω
                </text>
              </g>

              {/* Dynamic Voltage Voltmeter across Resistor */}
              <g transform="translate(180, 100)">
                <line x1="0" y1="-45" x2="0" y2="45" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="0" cy="0" r="11" fill="#0e7490" stroke="#22d3ee" strokeWidth="1.5" />
                <text x="0" y="3.5" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  V
                </text>
              </g>

              {/* Instantaneous Values Bar */}
              <text x="130" y="185" fill="#94a3b8" fontSize="9" fontFamily="monospace" textAnchor="middle">
                p(t) = {instP.toFixed(0)} W (Dissipating)
              </text>
            </svg>

            <div className="text-[11px] font-mono text-emerald-400/90 bg-emerald-950/40 p-2 rounded border border-emerald-800/60 mt-2">
              ✓ {t.unityPfNote}
            </div>
          </div>

          {/* Synchronized Waveforms Display (Right) */}
          <div className="lg:col-span-8 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between overflow-x-auto">
            <span className="text-xs font-mono font-bold text-slate-400 block mb-2">{t.waveformsTitle}</span>
            <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full h-auto select-none" role="img" aria-label="Resistive AC Waveforms Graph">
              {/* Zero Reference Line */}
              <line x1={waveStartX} y1={centerY} x2={waveEndX} y2={centerY} stroke="#475569" strokeWidth="1.5" />
              <line x1={waveStartX} y1={20} x2={waveStartX} y2={svgH - 20} stroke="#475569" strokeWidth="1.5" />

              {/* Degree labels */}
              <text x={waveStartX} y={centerY + 16} fill="#64748b" fontSize="9.5" fontFamily="monospace">0°</text>
              <text x={waveStartX + 0.25 * waveWidth} y={centerY + 16} fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="monospace">90°</text>
              <text x={waveStartX + 0.5 * waveWidth} y={centerY + 16} fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="monospace">180°</text>
              <text x={waveStartX + 0.75 * waveWidth} y={centerY + 16} fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="monospace">270°</text>
              <text x={waveEndX} y={centerY + 16} fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="monospace">360°</text>

              {/* Average Power Level Line */}
              <line x1={waveStartX} y1={pAvgY} x2={waveEndX} y2={pAvgY} stroke="#10b981" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.8" />
              <text x={waveEndX - 5} y={pAvgY - 5} fill="#10b981" fontSize="9.5" fontFamily="monospace" textAnchor="end" fontWeight="bold">
                P_avg = {activePowerW.toFixed(0)} W
              </text>

              {/* Power Curve p(t) in Emerald Gradient/Line */}
              <path d={pathP} fill="none" stroke="#10b981" strokeWidth="2.5" />

              {/* Voltage Curve v(t) in Cyan */}
              <path d={pathV} fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />

              {/* Current Curve i(t) in Amber */}
              <path d={pathI} fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2" />

              {/* Cursor Scrubber Vertical Line */}
              <line x1={markerX} y1={25} x2={markerX} y2={svgH - 25} stroke="#f43f5e" strokeWidth="1.2" strokeDasharray="2 2" />
              <circle cx={markerX} cy={curMarkerYV} r="4.5" fill="#22d3ee" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx={markerX} cy={curMarkerYI} r="4" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx={markerX} cy={curMarkerYP} r="4.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />

              {/* Graph Legend */}
              <g transform={`translate(${waveStartX + 10}, ${svgH - 15})`}>
                <rect x="0" y="0" width="12" height="3" fill="#22d3ee" rx="1" />
                <text x="18" y="4" fill="#22d3ee" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  v(t) = {instV.toFixed(1)} V (Vm={vm.toFixed(1)}V)
                </text>

                <rect x="220" y="0" width="12" height="3" fill="#fbbf24" rx="1" />
                <text x="238" y="4" fill="#fbbf24" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  i(t) = {instI.toFixed(2)} A (Im={im.toFixed(2)}A)
                </text>

                <rect x="440" y="0" width="12" height="3" fill="#10b981" rx="1" />
                <text x="458" y="4" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  p(t) = {instP.toFixed(0)} W (≥ 0 Always)
                </text>
              </g>
            </svg>

            <div className="text-[11px] font-mono text-purple-300/90 bg-purple-950/30 p-2 rounded border border-purple-800/50 mt-2">
              💡 {t.powerDoubleFreqNote}
            </div>
          </div>
        </div>

        {/* Playback & Angle Scrubber Controls */}
        <div className="print:hidden flex flex-wrap items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? t.pause : t.play}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-md shadow-cyan-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? t.pause : t.play}</span>
            </button>

            <button
              onClick={handleReset}
              aria-label={t.reset}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono font-medium transition-colors flex items-center gap-1.5 border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.reset}</span>
            </button>
          </div>

          <div className="flex items-center gap-3 flex-1 min-w-[200px] max-w-md">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1 whitespace-nowrap">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              {t.scrubber}:
            </span>
            <input
              type="range"
              min="0"
              max="360"
              step="5"
              value={angleDeg}
              onChange={(e) => {
                setIsPlaying(false);
                setAngleDeg(Number(e.target.value));
              }}
              aria-label={t.scrubber}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            />
            <span className="text-xs font-mono text-cyan-300 font-bold min-w-[45px] text-right">
              {angleDeg.toFixed(0)}°
            </span>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
