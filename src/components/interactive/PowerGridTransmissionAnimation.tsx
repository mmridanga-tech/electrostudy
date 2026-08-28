import React, { useState, useEffect } from 'react';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';
import { Language } from '../../types';
import { Activity, Zap, AlertTriangle, ShieldCheck, Play, Pause, RotateCcw } from 'lucide-react';

interface PowerGridTransmissionAnimationProps {
  currentLanguage: Language;
}

export const PowerGridTransmissionAnimation: React.FC<PowerGridTransmissionAnimationProps> = ({
  currentLanguage
}) => {
  // Input parameters
  const [sendingVoltageKV, setSendingVoltageKV] = useState<number>(132); // kV
  const [lineLengthKM, setLineLengthKM] = useState<number>(120); // km
  const [loadMW, setLoadMW] = useState<number>(80); // MW
  const [powerFactor, setPowerFactor] = useState<number>(0.85); // lagging
  const [isFaultActive, setIsFaultActive] = useState<boolean>(false);
  const [isBreakerTripped, setIsBreakerTripped] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [animTime, setAnimTime] = useState<number>(0);

  // Multilingual translations
  const t = {
    title: {
      en: 'Power Grid Transmission & Fault Simulation',
      hi: 'पावर ग्रिड ट्रांसमिशन एवं फॉल्ट सिमुलेशन',
      bn: 'পাওয়ার গ্রিড সঞ্চালন ও ফল্ট সিমুলেশন'
    },
    subtitle: {
      en: 'Analyze line voltage drop, Ferranti effect, transmission efficiency, and circuit breaker fault isolation.',
      hi: 'लाइन वोल्टेज ड्रॉप, फेरांती प्रभाव, ट्रांसमिशन दक्षता एवं सर्किट ब्रेकर फॉल्ट आइसोलेशन का विश्लेषण करें।',
      bn: 'লাইন ভোল্টেজ ড্রপ, ফেরান্তি ইফেক্ট, সঞ্চালন দক্ষতা এবং সার্কিট ব্রেকার ফল্ট আইসোলেশন পর্যবেক্ষণ করুন।'
    },
    sendingVoltage: { en: 'Sending Voltage (Vs)', hi: 'सेंडिंग वोल्टेज (Vs)', bn: 'সেন্ডিং ভোল্টেজ (Vs)' },
    lineLength: { en: 'Line Length (km)', hi: 'लाइन लंबाई (किमी)', bn: 'লাইনের দৈর্ঘ্য (কিমি)' },
    loadPower: { en: 'Load Power (P)', hi: 'लोड पावर (P)', bn: 'লোড পাওয়ার (P)' },
    powerFactorLabel: { en: 'Power Factor (cos φ)', hi: 'पावर फैक्टर (cos φ)', bn: 'পাওয়ার ফ্যাক্টর (cos φ)' },
    simulateFault: { en: 'Simulate Grid Fault', hi: 'फॉल्ट सिमुलेट करें', bn: 'গ্রিড ফল্ট সিমুলেট করুন' },
    clearFault: { en: 'Reset Breaker & Clear Fault', hi: 'ब्रेकर रीसेट करें', bn: 'ব্রেকার রিসেট ও ফল্ট মুক্ত' },
    receivingVoltage: { en: 'Receiving Voltage (Vr)', hi: 'रिसीविंग वोल्टेज (Vr)', bn: 'রিসিভিং ভোল্টেজ (Vr)' },
    voltReg: { en: 'Voltage Regulation', hi: 'वोल्टेज रेगुलेशन', bn: 'ভোল্টেজ রেগুলেশন' },
    efficiency: { en: 'Transmission Efficiency', hi: 'संचालन दक्षता', bn: 'সঞ্চালন দক্ষতা' },
    lineCurrent: { en: 'Line Current (IL)', hi: 'लाइन धारा (IL)', bn: 'লাইন কারেন্ট (IL)' },
    lineLosses: { en: 'Total I²R Loss', hi: 'कुल I²R हानि', bn: 'মোট I²R লস' },
    ferrantiAlert: {
      en: 'Ferranti Effect Active: Receiving voltage Vr > Sending voltage Vs due to line charging capacitance!',
      hi: 'फेरांती प्रभाव सक्रिय: लाइन चार्जिंग कैपेसिटेंस के कारण Vr > Vs!',
      bn: 'ফেরান্তি ইফেক্ট সক্রিয়: লাইন চার্জিং ক্যাপাসিট্যান্সের কারণে Vr > Vs!'
    },
    faultAlert: {
      en: 'CRITICAL: Symmetrical 3-Phase Fault Detected! Protective Relay Tripped Circuit Breaker.',
      hi: 'गंभीर: 3-फेज फॉल्ट डिटेक्ट! प्रोटेक्टिव रिले ने सर्किट ब्रेकर ट्रिप किया।',
      bn: 'জরুরি: ৩-ফেজ ফল্ট শনাক্ত! প্রটেক্টিভ রিলে সার্কিট ব্রেকার ট্রিপ করেছে।'
    },
    normalState: {
      en: 'Grid Status: Stable & Synchronized',
      hi: 'ग्रिड स्थिति: स्थिर एवं समकालिक',
      bn: 'গ্রিড স্ট্যাটাস: স্থিতিশীল ও সিঙ্ক্রোনাইজড'
    }
  };

  // Animation ticker
  useEffect(() => {
    if (!isAnimating || isBreakerTripped) return;
    const interval = setInterval(() => {
      setAnimTime((prev) => (prev + 0.05) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, [isAnimating, isBreakerTripped]);

  // Calculations
  const rPerKm = 0.12; // Ω/km
  const xPerKm = 0.38; // Ω/km
  const totalR = rPerKm * lineLengthKM;
  const totalX = xPerKm * lineLengthKM;

  const vNominal = sendingVoltageKV * 1000; // Volts (Line-to-Line)
  const vPhase = vNominal / Math.sqrt(3);

  // Load current calculation
  const sinPhi = Math.sqrt(Math.max(0, 1 - powerFactor * powerFactor));
  const pPerPhase = (loadMW * 1e6) / 3;
  const currentApprox = loadMW > 0 ? (loadMW * 1e6) / (Math.sqrt(3) * vNominal * powerFactor) : 0;

  // Approximate voltage drop: ΔV_phase = I * (R cos φ + X sin φ) - (Charging boost for long lines)
  const chargingBoost = (lineLengthKM > 80 && loadMW < 20) ? (Math.pow(lineLengthKM, 1.8) * 0.4) : 0;
  const deltaVPhase = (currentApprox * (totalR * powerFactor + totalX * sinPhi)) - chargingBoost;
  
  const vrPhase = Math.max(1000, vPhase - deltaVPhase);
  const vrLineKV = (vrPhase * Math.sqrt(3)) / 1000;

  const voltageRegulationPercent = (((vPhase - vrPhase) / vrPhase) * 100).toFixed(2);
  const totalLossMW = (3 * Math.pow(currentApprox, 2) * totalR) / 1e6;
  const transmissionEfficiency = loadMW > 0 ? Math.min(99.4, Math.max(60, ((loadMW) / (loadMW + totalLossMW)) * 100)).toFixed(1) : '100.0';

  const isFerranti = parseFloat(voltageRegulationPercent) < 0 && loadMW < 25;

  const handleReset = () => {
    setSendingVoltageKV(132);
    setLineLengthKM(120);
    setLoadMW(80);
    setPowerFactor(0.85);
    setIsFaultActive(false);
    setIsBreakerTripped(false);
    setIsAnimating(true);
  };

  const handleToggleFault = () => {
    if (isFaultActive || isBreakerTripped) {
      setIsFaultActive(false);
      setIsBreakerTripped(false);
    } else {
      setIsFaultActive(true);
      setTimeout(() => {
        setIsBreakerTripped(true);
      }, 300);
    }
  };

  return (
    <InteractiveSimulationCard
      title={t.title}
      subtitle={t.subtitle}
      currentLanguage={currentLanguage}
      badge="Power Grid Simulation"
      onReset={handleReset}
    >
      <div className="space-y-6">
        
        {/* Status Banner */}
        <div className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
          isBreakerTripped
            ? 'bg-rose-950/60 border-rose-800/80 text-rose-200'
            : isFerranti
            ? 'bg-amber-950/60 border-amber-800/80 text-amber-200'
            : 'bg-cyan-950/40 border-cyan-800/60 text-cyan-200'
        }`}>
          <div className="flex items-center gap-2.5">
            {isBreakerTripped ? (
              <AlertTriangle className="w-5 h-5 text-rose-400 animate-pulse shrink-0" />
            ) : isFerranti ? (
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            )}
            <span className="text-xs sm:text-sm font-semibold">
              {isBreakerTripped
                ? (t.faultAlert[currentLanguage] || t.faultAlert.en)
                : isFerranti
                ? (t.ferrantiAlert[currentLanguage] || t.ferrantiAlert.en)
                : (t.normalState[currentLanguage] || t.normalState.en)}
            </span>
          </div>

          <button
            onClick={handleToggleFault}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 ${
              isBreakerTripped
                ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
            }`}
          >
            {isBreakerTripped
              ? (t.clearFault[currentLanguage] || t.clearFault.en)
              : (t.simulateFault[currentLanguage] || t.simulateFault.en)}
          </button>
        </div>

        {/* SVG Schematic & Grid Animation */}
        <div className="relative w-full h-64 sm:h-72 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center p-2">
          <svg viewBox="0 0 900 360" className="w-full h-full">
            <defs>
              <linearGradient id="gridBgGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#030712" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              <linearGradient id="pylonGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>

              <filter id="gridGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <rect width="900" height="360" fill="url(#gridBgGrad)" />

            {/* Grid ground line */}
            <line x1="30" y1="300" x2="870" y2="300" stroke="#1e293b" strokeWidth="2" strokeDasharray="6 4" />

            {/* 1. Generating Station (Left) */}
            <g transform="translate(50, 160)">
              <rect x="0" y="40" width="80" height="90" rx="8" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
              <circle cx="40" cy="85" r="24" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
              <text x="40" y="89" fill="#e0f2fe" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">GEN</text>
              <text x="40" y="145" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">11 kV Plant</text>

              {/* Step Up Transformer */}
              <circle cx="115" cy="85" r="16" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="135" cy="85" r="16" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="125" y="118" fill="#38bdf8" fontSize="9" textAnchor="middle">Step-Up</text>
            </g>

            {/* Circuit Breaker at Sending End */}
            <g transform="translate(220, 245)">
              <rect x="-15" y="-15" width="30" height="30" rx="4" fill={isBreakerTripped ? '#881337' : '#064e3b'} stroke={isBreakerTripped ? '#f43f5e' : '#10b981'} strokeWidth="2" />
              <text x="0" y="4" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">CB1</text>
              <text x="0" y="26" fill={isBreakerTripped ? '#f43f5e' : '#10b981'} fontSize="8" fontWeight="bold" textAnchor="middle">
                {isBreakerTripped ? 'TRIPPED' : 'CLOSED'}
              </text>
            </g>

            {/* 2. Transmission Pylons / Overhead Towers */}
            {/* Tower 1 */}
            <g transform="translate(340, 110)">
              <polygon points="30,0 20,180 40,180" fill="url(#pylonGrad)" stroke="#475569" strokeWidth="1" />
              <line x1="0" y1="30" x2="60" y2="30" stroke="#94a3b8" strokeWidth="3" />
              <line x1="5" y1="70" x2="55" y2="70" stroke="#94a3b8" strokeWidth="3" />
              <line x1="10" y1="110" x2="50" y2="110" stroke="#94a3b8" strokeWidth="3" />
              <text x="30" y="195" fill="#64748b" fontSize="9" textAnchor="middle">Tower 1</text>
            </g>

            {/* Tower 2 */}
            <g transform="translate(560, 110)">
              <polygon points="30,0 20,180 40,180" fill="url(#pylonGrad)" stroke="#475569" strokeWidth="1" />
              <line x1="0" y1="30" x2="60" y2="30" stroke="#94a3b8" strokeWidth="3" />
              <line x1="5" y1="70" x2="55" y2="70" stroke="#94a3b8" strokeWidth="3" />
              <line x1="10" y1="110" x2="50" y2="110" stroke="#94a3b8" strokeWidth="3" />
              <text x="30" y="195" fill="#64748b" fontSize="9" textAnchor="middle">Tower 2</text>
            </g>

            {/* Transmission Line Conductors (3-Phase) */}
            {/* Phase R */}
            <path
              d="M 235 245 Q 355 140 370 140 Q 465 160 590 140 Q 650 160 690 245"
              fill="none"
              stroke={isBreakerTripped ? '#475569' : '#ef4444'}
              strokeWidth="2.5"
              filter={isBreakerTripped ? undefined : 'url(#gridGlow)'}
            />
            {/* Phase Y */}
            <path
              d="M 235 245 Q 355 180 370 180 Q 465 200 590 180 Q 650 200 690 245"
              fill="none"
              stroke={isBreakerTripped ? '#475569' : '#eab308'}
              strokeWidth="2"
            />
            {/* Phase B */}
            <path
              d="M 235 245 Q 355 220 370 220 Q 465 235 590 220 Q 650 235 690 245"
              fill="none"
              stroke={isBreakerTripped ? '#475569' : '#3b82f6'}
              strokeWidth="2"
            />

            {/* Traveling Energy Pulses along lines */}
            {!isBreakerTripped && isAnimating && (
              <>
                <circle
                  cx={235 + ((animTime * 4.5) % 455)}
                  cy={180 + Math.sin(animTime * 2) * 15}
                  r="4"
                  fill="#38bdf8"
                  filter="url(#gridGlow)"
                />
                <circle
                  cx={300 + ((animTime * 4.5) % 390)}
                  cy={200}
                  r="3.5"
                  fill="#fbbf24"
                />
              </>
            )}

            {/* Fault Arc Animation if Active */}
            {isFaultActive && !isBreakerTripped && (
              <g transform="translate(480, 180)">
                <polygon points="0,-15 12,5 -5,8 8,25 -10,35" fill="#facc15" stroke="#ef4444" strokeWidth="2" className="animate-ping" />
                <line x1="0" y1="20" x2="0" y2="120" stroke="#ef4444" strokeWidth="3" strokeDasharray="4 2" />
                <text x="0" y="135" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">GROUND FAULT</text>
              </g>
            )}

            {/* 3. Substation & Factory Load (Right) */}
            <g transform="translate(710, 160)">
              {/* Step Down Transformer */}
              <circle cx="15" cy="85" r="16" fill="none" stroke="#10b981" strokeWidth="2" />
              <circle cx="35" cy="85" r="16" fill="none" stroke="#10b981" strokeWidth="2" />
              <text x="25" y="118" fill="#10b981" fontSize="9" textAnchor="middle">Step-Down</text>

              {/* City / Factory Load Block */}
              <rect x="65" y="45" width="85" height="85" rx="8" fill="#1e293b" stroke={isBreakerTripped ? '#475569' : '#10b981'} strokeWidth="2" />
              <text x="107" y="78" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">GRID LOAD</text>
              <text x="107" y="98" fill="#38bdf8" fontSize="10" fontWeight="mono" textAnchor="middle">{loadMW} MW</text>
              <text x="107" y="115" fill="#94a3b8" fontSize="9" textAnchor="middle">pf: {powerFactor}</text>
              <text x="107" y="145" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">City Substation</text>
            </g>

            {/* Voltage Tags */}
            <g transform="translate(180, 80)">
              <rect x="0" y="0" width="90" height="32" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
              <text x="45" y="14" fill="#94a3b8" fontSize="8" textAnchor="middle">Vs (Sending)</text>
              <text x="45" y="27" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">{sendingVoltageKV} kV</text>
            </g>

            <g transform="translate(640, 80)">
              <rect x="0" y="0" width="90" height="32" rx="6" fill="#0f172a" stroke={isFerranti ? '#f59e0b' : '#10b981'} strokeWidth="1.5" />
              <text x="45" y="14" fill="#94a3b8" fontSize="8" textAnchor="middle">Vr (Receiving)</text>
              <text x="45" y="27" fill={isFerranti ? '#fbbf24' : '#34d399'} fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                {isBreakerTripped ? '0.0 kV' : `${vrLineKV.toFixed(1)} kV`}
              </text>
            </g>
          </svg>
        </div>

        {/* Real-time Computed Parameter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 font-medium">
              {t.receivingVoltage[currentLanguage] || t.receivingVoltage.en}
            </span>
            <div className={`text-lg sm:text-xl font-mono font-bold ${isFerranti ? 'text-amber-400' : 'text-emerald-400'}`}>
              {isBreakerTripped ? '0.00 kV' : `${vrLineKV.toFixed(2)} kV`}
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Nominal: {sendingVoltageKV} kV</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 font-medium">
              {t.voltReg[currentLanguage] || t.voltReg.en}
            </span>
            <div className={`text-lg sm:text-xl font-mono font-bold ${parseFloat(voltageRegulationPercent) > 10 ? 'text-rose-400' : isFerranti ? 'text-amber-400' : 'text-cyan-400'}`}>
              {isBreakerTripped ? '---' : `${voltageRegulationPercent}%`}
            </div>
            <span className="text-[10px] text-slate-500 font-mono">{isFerranti ? 'Ferranti Boost' : 'Standard Drop'}</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 font-medium">
              {t.lineCurrent[currentLanguage] || t.lineCurrent.en}
            </span>
            <div className="text-lg sm:text-xl font-mono font-bold text-slate-200">
              {isBreakerTripped ? '0.0 A' : `${currentApprox.toFixed(1)} A`}
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Per Phase RMS</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-[11px] text-slate-400 font-medium">
              {t.efficiency[currentLanguage] || t.efficiency.en}
            </span>
            <div className="text-lg sm:text-xl font-mono font-bold text-teal-400">
              {isBreakerTripped ? '0.0%' : `${transmissionEfficiency}%`}
            </div>
            <span className="text-[10px] text-slate-500 font-mono">Loss: {isBreakerTripped ? '0' : totalLossMW.toFixed(2)} MW</span>
          </div>
        </div>

        {/* User Interactive Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
          
          {/* Sending Voltage Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">{t.sendingVoltage[currentLanguage] || t.sendingVoltage.en}</span>
              <span className="font-mono text-cyan-400">{sendingVoltageKV} kV</span>
            </div>
            <input
              type="range"
              min="33"
              max="400"
              step="1"
              value={sendingVoltageKV}
              onChange={(e) => setSendingVoltageKV(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>33 kV (Distribution)</span>
              <span>132 kV</span>
              <span>400 kV (EHV)</span>
            </div>
          </div>

          {/* Line Length Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">{t.lineLength[currentLanguage] || t.lineLength.en}</span>
              <span className="font-mono text-cyan-400">{lineLengthKM} km</span>
            </div>
            <input
              type="range"
              min="20"
              max="350"
              step="5"
              value={lineLengthKM}
              onChange={(e) => setLineLengthKM(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Short (&lt;80km)</span>
              <span>Medium (80-240km)</span>
              <span>Long (&gt;240km)</span>
            </div>
          </div>

          {/* Load MW Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">{t.loadPower[currentLanguage] || t.loadPower.en}</span>
              <span className="font-mono text-cyan-400">{loadMW} MW</span>
            </div>
            <input
              type="range"
              min="0"
              max="300"
              step="5"
              value={loadMW}
              onChange={(e) => setLoadMW(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0 MW (No Load / Ferranti)</span>
              <span>150 MW</span>
              <span>300 MW (Full Load)</span>
            </div>
          </div>

          {/* Power Factor Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-300">{t.powerFactorLabel[currentLanguage] || t.powerFactorLabel.en}</span>
              <span className="font-mono text-cyan-400">{powerFactor} (lag)</span>
            </div>
            <input
              type="range"
              min="0.60"
              max="1.00"
              step="0.02"
              value={powerFactor}
              onChange={(e) => setPowerFactor(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>0.60 (Poor inductive)</span>
              <span>0.85 (Industrial)</span>
              <span>1.00 (Unity)</span>
            </div>
          </div>

        </div>

      </div>
    </InteractiveSimulationCard>
  );
};
