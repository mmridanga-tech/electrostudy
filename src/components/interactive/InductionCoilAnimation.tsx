import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Play, Pause, RefreshCw, Zap, Sliders, Flame, ShieldAlert, CheckCircle2, Info } from 'lucide-react';
import { Language } from '../../types';

interface InductionCoilAnimationProps {
  currentLanguage: Language;
}

export const InductionCoilAnimation: React.FC<InductionCoilAnimationProps> = ({
  currentLanguage
}) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isSparking, setIsSparking] = useState<boolean>(false);
  const [batteryVoltageV, setBatteryVoltageV] = useState<number>(12); // 12V
  const [primaryTurns, setPrimaryTurns] = useState<number>(100);
  const [secondaryTurns, setSecondaryTurns] = useState<number>(20000);
  const [hasCapacitor, setHasCapacitor] = useState<boolean>(true);
  const [sparkGapMm, setSparkGapMm] = useState<number>(8); // mm

  const turnsRatio = secondaryTurns / primaryTurns; // e.g. 200:1

  // With capacitor: break time dt is very fast (~20 μs)
  // Without capacitor: contact arcing sustains current, dt is slow (~200 μs) and contact burns!
  const breakTimeUs = hasCapacitor ? 20 : 250;
  // Primary current I_1 = V / R_p
  const primaryCurrentA = batteryVoltageV / 1.2; // approx 10 A
  // Peak induced secondary voltage: E_2 = M * (di_1 / dt)
  // Approx secondary voltage kV
  const secondaryVoltageKv = useMemo(() => {
    // E_2 ~ (N2/N1) * L_p * (di/dt)
    // Approximate kV output
    const rawKv = (turnsRatio * 0.001 * primaryCurrentA * 1e6) / (breakTimeUs * 1000);
    return Math.min(45, Math.max(1, rawKv * 0.08));
  }, [turnsRatio, primaryCurrentA, breakTimeUs]);

  // Air breakdown threshold: ~3 kV per mm
  const requiredVoltageForGapKv = sparkGapMm * 3.0; // 3 kV/mm in standard air
  const canSparkCross = secondaryVoltageKv >= requiredVoltageForGapKv;

  // Buzzer vibrator loop
  useEffect(() => {
    if (!isRunning) {
      setIsSparking(false);
      return;
    }

    const interval = setInterval(() => {
      if (canSparkCross) {
        setIsSparking((prev) => !prev);
      } else {
        setIsSparking(false);
      }
    }, 90);

    return () => clearInterval(interval);
  }, [isRunning, canSparkCross]);

  // Manual one-shot fire
  const handleSingleTrigger = () => {
    setIsSparking(true);
    setTimeout(() => {
      setIsSparking(false);
    }, 250);
  };

  const labels = {
    en: {
      title: 'Ruhmkorff Induction Coil & High-Voltage Spark Simulator',
      subtitle: 'Demonstrate rapid flux collapse (-dΦ/dt), primary interrupter, capacitor action, and kV spark generation',
      vibrator: 'Trembler / Interrupter Auto-Vibrator:',
      batteryV: 'Primary DC Battery Voltage:',
      turnsN1: 'Primary Turns (N₁):',
      turnsN2: 'Secondary Turns (N₂):',
      turnsRatioLabel: 'Turns Ratio (N₂ / N₁):',
      sparkGapLabel: 'Secondary Spark Gap Distance:',
      capToggle: 'Parallel Spark-Quenching Capacitor across Interrupter:',
      secVoltage: 'Peak Secondary Induced Voltage:',
      sparkStatus: 'Spark Discharge Status:',
      sparksYes: 'HIGH VOLTAGE ARC DISCHARGE ACTIVE!',
      sparksNo: 'Insufficient voltage to ionize air gap (increase turns or reduce gap).',
      capWarning: 'WITHOUT CAPACITOR: Current arcs across contact points, slowing flux decay and burning contacts. Secondary pulse is severely reduced!',
      capSuccess: 'WITH CAPACITOR: Quenches primary contact arc instantly, causing near-instantaneous magnetic flux collapse (-dΦ/dt) to generate maximum secondary kV!',
      fireSingle: 'Manual Trigger Pulse',
      startAuto: 'Start Trembler Vibrator',
      stopAuto: 'Stop Vibrator',
      reset: 'Reset'
    },
    hi: {
      title: 'रूह्मकॉर्फ प्रेरण कुंडली एवं उच्च-वोल्टेज स्पार्क सिमुलेटर',
      subtitle: 'तीव्र फ्लक्स पतन (-dΦ/dt), प्राथमिक इंटरप्टर, संधारित्र क्रिया एवं kV स्पार्क उत्पत्ति का प्रेक्षण करें',
      vibrator: 'कंपक / इंटरप्टर स्वचालित कंपन:',
      batteryV: 'प्राथमिक डीसी बैटरी वोल्टेज:',
      turnsN1: 'प्राथमिक फेरे (N₁):',
      turnsN2: 'द्वितीयक फेरे (N₂):',
      turnsRatioLabel: 'फेरों का अनुपात (N₂ / N₁):',
      sparkGapLabel: 'द्वितीयक स्पार्क गैप दूरी:',
      capToggle: 'इंटरप्टर के समानांतर स्पार्क-शमन संधारित्र (Capacitor):',
      secVoltage: 'शिखर द्वितीयक प्रेरित वोल्टेज:',
      sparkStatus: 'स्पार्क विसर्जन स्थिति:',
      sparksYes: 'उच्च-वोल्टेज स्पार्क आर्क सक्रिय!',
      sparksNo: 'वायु अंतराल को आयनित करने के लिए वोल्टेज अपर्याप्त है।',
      capWarning: 'संधारित्र के बिना: संपर्कों पर चिंगारी उठती है जिससे फ्लक्स पतन धीमा होता है और संपर्क जल जाते हैं। द्वितीयक वोल्टेज बहुत घट जाता है!',
      capSuccess: 'संधारित्र के साथ: प्राथमिक संपर्कों की चिंगारी तुरंत शांत होती है, तीव्र फ्लक्स पतन (-dΦ/dt) से अधिकतम kV स्पार्क उत्पन्न होता है!',
      fireSingle: 'एकल स्पार्क ट्रिगर',
      startAuto: 'कंपन प्रारंभ करें',
      stopAuto: 'कंपन रोकें',
      reset: 'रीसेट'
    },
    bn: {
      title: 'রুমকর্ফ ইনডাকশন কয়েল ও হাই-ভোল্টেজ স্পার্ক সিমুলেটর',
      subtitle: 'দ্রুত ফ্লাক্স পতন (-dΦ/dt), প্রাইমারি ইন্টারাপ্টার, ক্যাপাসিটর ক্রিয়া এবং kV স্পার্ক সৃষ্টি পর্যবেক্ষণ করো',
      vibrator: 'ট্রেম্বলার / ইন্টারাপ্টার স্বয়ংক্রিয় কম্পন:',
      batteryV: 'প্রাইমারি ডিসি ব্যাটারি ভোল্টেজ:',
      turnsN1: 'প্রাইমারি পাকসংখ্যা (N₁):',
      turnsN2: 'সেকেন্ডারি পাকসংখ্যা (N₂):',
      turnsRatioLabel: 'পাকসংখ্যার অনুপাত (N₂ / N₁):',
      sparkGapLabel: 'সেকেন্ডারি স্পার্ক গ্যাপের দূরত্ব:',
      capToggle: 'ইন্টারাপ্টারের সমান্তরালে স্পার্ক-নির্বাপক ক্যাপাসিটর:',
      secVoltage: 'শীর্ষ সেকেন্ডারি আবিষ্ট ভোল্টেজ:',
      sparkStatus: 'স্পার্ক নির্গমন অবস্থা:',
      sparksYes: 'উচ্চ ভোল্টেজ আর্ক ডিসচার্জ সক্রিয়!',
      sparksNo: 'বায়ু ফাঁকা স্থানকে আয়নিত করার মতো ভোল্টেজ পর্যাপ্ত নয়।',
      capWarning: 'ক্যাপাসিটর ছাড়া: সংস্পর্শ বিন্দুতে স্পার্ক সৃষ্টি হয়, ফলে ফ্লাক্স ধীরে হ্রাস পায় এবং পয়েন্ট পুড়ে যায়। আউটপুট মারাত্মক কমে যায়!',
      capSuccess: 'ক্যাপাসিটর সহ: কন্টাক্ট আর্কিং অবিলম্বে নিভিয়ে দেয়, ফলে অতি দ্রুত ফ্লাক্স ধ্বস (-dΦ/dt) ঘটে সর্বোচ্চ সেকেন্ডারি kV তৈরি হয়!',
      fireSingle: 'একক স্পার্ক পালস',
      startAuto: 'কম্পন চালু করুন',
      stopAuto: 'কম্পন বন্ধ করুন',
      reset: 'রিসেট'
    }
  }[currentLanguage];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div>
          <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            {labels.title}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">{labels.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              isRunning
                ? 'bg-red-600 hover:bg-red-500 text-white'
                : 'bg-amber-600 hover:bg-amber-500 text-white'
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isRunning ? labels.stopAuto : labels.startAuto}
          </button>
          <button
            onClick={handleSingleTrigger}
            disabled={isRunning}
            className="flex items-center gap-1 px-3 py-1.5 bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-xs font-semibold text-white rounded-lg transition"
          >
            <Zap className="w-3.5 h-3.5" />
            {labels.fireSingle}
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setIsSparking(false);
              setBatteryVoltageV(12);
              setSecondaryTurns(20000);
              setHasCapacitor(true);
              setSparkGapMm(8);
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg border border-slate-700 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            {labels.reset}
          </button>
        </div>
      </div>

      {/* Main Schematic & Spark Chamber */}
      <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 mb-4 relative overflow-hidden">
        <svg viewBox="0 0 680 270" className="w-full h-64 select-none">
          <defs>
            <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#67e8f9" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Soft Iron Core Bundle (Center horizontal) */}
          <rect x="110" y="110" width="310" height="28" rx="4" fill="#334155" stroke="#64748b" strokeWidth="2" />
          <text x="265" y="128" fill="#cbd5e1" fontSize="10" fontWeight="bold" textAnchor="middle">
            Laminated Soft Iron Wire Core
          </text>

          {/* Primary Coil Winding (Few turns, thick copper wire) */}
          <g>
            {[140, 170, 200, 230, 260, 290, 320, 350, 380].map((x) => (
              <rect key={`pri-${x}`} x={x} y="102" width="14" height="44" rx="3" fill="#b45309" stroke="#fbbf24" strokeWidth="1.5" />
            ))}
            <text x="265" y="94" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">
              Primary Winding (N₁ = {primaryTurns}, Thick Wire)
            </text>
          </g>

          {/* Secondary Coil Winding (Massive turns of fine wire enclosing primary) */}
          <rect x="130" y="60" width="270" height="30" rx="4" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="265" y="78" fill="#a5b4fc" fontSize="10" fontWeight="bold" textAnchor="middle">
            Secondary High-Voltage Winding (N₂ = {secondaryTurns.toLocaleString()} Turns, E_ind ∝ -N₂ dΦ/dt)
          </text>

          {/* Trembler Contact Breaker Mechanism (Hammer on left of iron core) */}
          <g transform="translate(60, 90)">
            {/* Spring strip */}
            <line x1="25" y1="0" x2="25" y2="70" stroke="#94a3b8" strokeWidth="3" />
            {/* Soft Iron Hammer facing core */}
            <circle cx="42" cy="35" r="9" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Platinum Contact point */}
            <circle cx="25" cy="35" r="3.5" fill="#facc15" />

            {/* Adjustable Contact Screw with platinum tip */}
            <rect x="-10" y="32" width="30" height="6" fill="#334155" stroke="#cbd5e1" strokeWidth="1" />
            <text x="15" y="-6" fill="#cbd5e1" fontSize="9" fontWeight="bold" textAnchor="middle">Trembler Hammer</text>
          </g>

          {/* Primary Circuit Wiring with Battery and Capacitor */}
          {/* Wire from battery to primary */}
          <path d="M 85 220 L 85 160 L 140 146" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
          {/* Wire from primary to contact screw */}
          <path d="M 394 146 L 420 200 L 50 200 L 50 125" fill="none" stroke="#fbbf24" strokeWidth="2.5" />

          {/* Battery */}
          <g transform="translate(85, 230)">
            <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#fbbf24" strokeWidth="2" />
            <text x="0" y="4" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">{batteryVoltageV}V</text>
            <text x="0" y="24" fill="#94a3b8" fontSize="8" textAnchor="middle">DC Battery</text>
          </g>

          {/* Spark Quenching Capacitor across contact points */}
          <g transform="translate(30, 145)">
            <rect x="-15" y="0" width="30" height="20" rx="3" fill={hasCapacitor ? '#065f46' : '#334155'} stroke={hasCapacitor ? '#34d399' : '#64748b'} strokeWidth="1.5" />
            <text x="0" y="13" fill={hasCapacitor ? '#6ee7b7' : '#94a3b8'} fontSize="8" fontWeight="bold" textAnchor="middle">
              {hasCapacitor ? '0.22 μF' : 'OFF'}
            </text>
            <text x="0" y="-4" fill="#94a3b8" fontSize="8" textAnchor="middle">Capacitor</text>
          </g>

          {/* Secondary Circuit Leads to High-Voltage Spark Gap */}
          <path d="M 140 60 L 140 30 L 490 30 L 490 85" fill="none" stroke="#a855f7" strokeWidth="2.5" />
          <path d="M 390 60 L 390 45 L 450 45 L 450 145 L 490 145 L 490 115" fill="none" stroke="#a855f7" strokeWidth="2.5" />

          {/* Spark Gap Electrodes Chamber (Right side) */}
          <g transform="translate(540, 100)">
            <rect x="-45" y="-55" width="150" height="110" rx="10" fill="#020617" stroke="#334155" strokeWidth="2" />
            <text x="30" y="-40" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">
              SPARK GAP ({sparkGapMm} mm)
            </text>

            {/* Electrode 1 (Top needle) */}
            <line x1="30" y1="-30" x2="30" y2={`-${sparkGapMm * 1.5}`} stroke="#e2e8f0" strokeWidth="4" />
            <polygon points={`27,-${sparkGapMm * 1.5} 33,-${sparkGapMm * 1.5} 30,-${sparkGapMm * 1.5 + 4}`} fill="#ffffff" />

            {/* Electrode 2 (Bottom needle) */}
            <line x1="30" y1="30" x2="30" y2={`${sparkGapMm * 1.5}`} stroke="#e2e8f0" strokeWidth="4" />
            <polygon points={`27,${sparkGapMm * 1.5} 33,${sparkGapMm * 1.5} 30,${sparkGapMm * 1.5 - 4}`} fill="#ffffff" />

            {/* Visual High Voltage Spark Arc */}
            {isSparking && (
              <g>
                <circle cx="30" cy="0" r="28" fill="url(#sparkGlow)" />
                {/* Jagged Lightning Path */}
                <path
                  d={`M 30 -${sparkGapMm * 1.5} Q 22 0 30 ${sparkGapMm * 1.5}`}
                  stroke="#ffffff"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d={`M 30 -${sparkGapMm * 1.5} L 36 -2 L 24 2 L 30 ${sparkGapMm * 1.5}`}
                  stroke="#67e8f9"
                  strokeWidth="2"
                  fill="none"
                />
              </g>
            )}

            {/* Spark Gap Status Text */}
            <text
              x="30"
              y="45"
              fill={isSparking ? '#22d3ee' : '#64748b'}
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
            >
              {isSparking ? 'DISCHARGING' : 'STANDBY'}
            </text>
          </g>

          {/* Secondary Voltmeter Banner */}
          <g transform="translate(540, 220)">
            <rect x="-40" y="-12" width="140" height="30" rx="4" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
            <text x="30" y="8" fill="#c084fc" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              V_sec = {secondaryVoltageKv.toFixed(1)} kV
            </text>
          </g>
        </svg>

        {/* Dynamic Status / Capacitor Banner */}
        <div
          className={`mt-2 p-2.5 rounded-lg border text-xs font-medium ${
            !hasCapacitor
              ? 'bg-red-950/80 border-red-800 text-red-200'
              : canSparkCross
              ? 'bg-emerald-950/80 border-emerald-800 text-emerald-200'
              : 'bg-amber-950/80 border-amber-800 text-amber-200'
          }`}
        >
          {!hasCapacitor ? labels.capWarning : canSparkCross ? labels.capSuccess : labels.sparksNo}
        </div>
      </div>

      {/* Control Sliders & Capacitor Toggle */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 mb-4">
        {/* Battery Voltage */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.batteryV}</span>
            <span className="font-mono font-bold text-amber-400">{batteryVoltageV} V</span>
          </div>
          <input
            type="range"
            min="6"
            max="24"
            step="2"
            value={batteryVoltageV}
            onChange={(e) => setBatteryVoltageV(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>

        {/* Secondary Turns */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.turnsN2}</span>
            <span className="font-mono font-bold text-purple-400">{(secondaryTurns / 1000).toFixed(0)}k</span>
          </div>
          <input
            type="range"
            min="5000"
            max="40000"
            step="1000"
            value={secondaryTurns}
            onChange={(e) => setSecondaryTurns(Number(e.target.value))}
            className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>

        {/* Spark Gap Distance */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.sparkGapLabel}</span>
            <span className="font-mono font-bold text-cyan-400">{sparkGapMm} mm</span>
          </div>
          <input
            type="range"
            min="2"
            max="15"
            step="1"
            value={sparkGapMm}
            onChange={(e) => setSparkGapMm(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>

        {/* Capacitor Checkbox */}
        <div className="flex flex-col justify-center">
          <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-300">
            <input
              type="checkbox"
              checked={hasCapacitor}
              onChange={(e) => setHasCapacitor(e.target.checked)}
              className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
            />
            <span>{labels.capToggle}</span>
          </label>
          <span className="text-[10px] text-slate-500 mt-1">
            Accelerates break time to {breakTimeUs} μs
          </span>
        </div>
      </div>

      {/* Engineering Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
          <span className="text-[10px] text-slate-400 block">{labels.turnsRatioLabel}</span>
          <span className="text-sm font-mono font-bold text-purple-400">{turnsRatio}:1</span>
        </div>
        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
          <span className="text-[10px] text-slate-400 block">{labels.secVoltage}</span>
          <span className="text-sm font-mono font-bold text-cyan-400">{secondaryVoltageKv.toFixed(1)} kV</span>
        </div>
        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
          <span className="text-[10px] text-slate-400 block">Air Breakdown Req:</span>
          <span className="text-sm font-mono font-bold text-amber-400">{requiredVoltageForGapKv} kV</span>
        </div>
        <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
          <span className="text-[10px] text-slate-400 block">Arc Possible:</span>
          <span
            className={`text-sm font-bold ${
              canSparkCross ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {canSparkCross ? 'YES (Active)' : 'NO (Gap too wide)'}
          </span>
        </div>
      </div>
    </div>
  );
};
