import React, { useState, useEffect } from 'react';
import { RotateCcw, ShieldAlert, Zap, ArrowRight, ArrowLeft, Flame, BatteryCharging, Power } from 'lucide-react';

interface DCMotorBrakingAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

export type BrakingMode = 'motoring' | 'regenerative' | 'dynamic' | 'plugging';

export const DCMotorBrakingAnimation: React.FC<DCMotorBrakingAnimationProps> = ({ language = 'en' }) => {
  const [mode, setMode] = useState<BrakingMode>('motoring');
  const [speedRpm, setSpeedRpm] = useState<number>(1200); // Current speed
  const [brakingResistor, setBrakingResistor] = useState<number>(4.0); // Ohms
  const [supplyVoltage, setSupplyVoltage] = useState<number>(230); // Volts
  const [isDecelerating, setIsDecelerating] = useState<boolean>(false);
  const [antiPluggingTripped, setAntiPluggingTripped] = useState<boolean>(false);

  const Ra = 0.3; // Armature winding resistance
  const Ke = 0.165; // Back EMF constant (Eb = Ke * N)
  const Kt = 1.05; // Torque constant (T = Kt * Ia)

  // Calculate electrical parameters based on mode
  const backEmf = Math.max(0, Ke * speedRpm);

  let armatureCurrent = 0;
  let brakingTorque = 0;
  let powerFlowKw = 0;
  let powerDestination = 'mechanical';

  if (mode === 'motoring') {
    armatureCurrent = Math.max(0, (supplyVoltage - backEmf) / (Ra + 0.5));
    brakingTorque = 0;
    powerFlowKw = (supplyVoltage * armatureCurrent) / 1000;
    powerDestination = 'shaft_output';
  } else if (mode === 'regenerative') {
    // Regenerative occurs when overhauling load drives Eb > V
    const overhaulingEb = Math.max(supplyVoltage + 30, backEmf * 1.25);
    armatureCurrent = (overhaulingEb - supplyVoltage) / Ra;
    brakingTorque = Kt * armatureCurrent;
    powerFlowKw = (supplyVoltage * armatureCurrent) / 1000;
    powerDestination = 'grid_recovery';
  } else if (mode === 'dynamic') {
    // Dynamic: Armature across RB
    const totalR = Ra + brakingResistor;
    armatureCurrent = backEmf / totalR;
    brakingTorque = Kt * armatureCurrent;
    powerFlowKw = (armatureCurrent * armatureCurrent * totalR) / 1000;
    powerDestination = 'resistor_heat';
  } else if (mode === 'plugging') {
    // Plugging: V + Eb across Ra + R_plug
    const totalR = Ra + brakingResistor;
    armatureCurrent = (supplyVoltage + backEmf) / totalR;
    brakingTorque = Kt * armatureCurrent;
    powerFlowKw = ((supplyVoltage + backEmf) * armatureCurrent) / 1000;
    powerDestination = 'violent_deceleration';
  }

  // Active Deceleration Simulation Loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isDecelerating && speedRpm > 0 && mode !== 'motoring') {
      timer = setInterval(() => {
        setSpeedRpm((prev) => {
          const decelStep = Math.max(15, (brakingTorque / 1.5));
          const nextSpeed = prev - decelStep;
          if (nextSpeed <= 0) {
            setIsDecelerating(false);
            if (mode === 'plugging') {
              setAntiPluggingTripped(true);
            }
            return 0;
          }
          return nextSpeed;
        });
      }, 80);
    }
    return () => clearInterval(timer);
  }, [isDecelerating, speedRpm, mode, brakingTorque]);

  const handleStartBraking = (selectedMode: BrakingMode) => {
    setMode(selectedMode);
    setAntiPluggingTripped(false);
    if (speedRpm === 0) {
      setSpeedRpm(1200);
    }
    setIsDecelerating(true);
  };

  const handleReset = () => {
    setMode('motoring');
    setSpeedRpm(1200);
    setBrakingResistor(4.0);
    setSupplyVoltage(230);
    setIsDecelerating(false);
    setAntiPluggingTripped(false);
  };

  const labels = {
    en: {
      title: 'DC Motor Electric Braking & Industrial Drives Laboratory',
      subtitle: 'Simulate Regenerative Braking (energy recovery), Dynamic / Rheostatic Braking (heat dissipation), and Plugging (reverse voltage high-torque deceleration).',
      reset: 'Reset Defaults',
      modeMotoring: 'Normal Motoring Drive',
      modeRegen: 'Regenerative Braking (Eb > V)',
      modeDynamic: 'Dynamic / Rheostatic Braking',
      modePlugging: 'Plugging (Reverse Voltage)',
      applyBrakeBtn: 'Trigger Braking Action',
      speedBadge: 'Rotor Speed (N)',
      backEmfBadge: 'Generated Back EMF (Eb)',
      iaBadge: 'Braking Current (I_B)',
      torqueBadge: 'Retarding Torque (T_B)',
      powerBadge: 'Power Converted / Recovered',
      resistorSlider: 'Braking Series Resistor (R_B / R_plug)',
      speedSlider: 'Initial Rotating Speed (RPM)',
      antiPlugAlert: 'ANTI-PLUGGING RELAY ACTIVATED: Speed hit 0 RPM! Contactor opened immediately to prevent reverse rotation.',
      safetyDisclaimer: 'Note: In heavy industrial drives (cranes, elevators, trains), electrical braking is always supplemented by mechanical friction holding brakes at standstill.',
      energyFlowSupply: 'Power from DC Bus (Motoring)',
      energyFlowRegen: 'Power Recovered to DC Grid (Regeneration)',
      energyFlowDynamic: 'Kinetic Energy -> Heat in Resistor (Dynamic)',
      energyFlowPlugging: 'Maximum Electrical & Kinetic Heat Dissipation (Plugging)'
    },
    hi: {
      title: 'डीसी मोटर विद्युत ब्रेकिंग एवं औद्योगिक ड्राइव प्रयोगशाला',
      subtitle: 'रीजेनरेटिव ब्रेकिंग (ऊर्जा पुनर्प्राप्ति), डायनामिक ब्रेकिंग (ऊष्मा विसर्जन) एवं प्लगिंग (विपरीत वोल्टेज ब्रेकिंग) का लाइव सिमुलेशन।',
      reset: 'डिफ़ॉल्ट रीसेट',
      modeMotoring: 'सामान्य मोटरिंग प्रचालन',
      modeRegen: 'रीजेनरेटिव ब्रेकिंग (Eb > V)',
      modeDynamic: 'डायनामिक / रियोस्टैटिक ब्रेकिंग',
      modePlugging: 'प्लगिंग (रिवर्स वोल्टेज)',
      applyBrakeBtn: 'ब्रेकिंग क्रिया प्रारंभ करें',
      speedBadge: 'रोटर गति (N)',
      backEmfBadge: 'उत्पन्न बैक EMF (Eb)',
      iaBadge: 'ब्रेकिंग धारा (I_B)',
      torqueBadge: 'मंदक ब्रेकिंग टॉर्क (T_B)',
      powerBadge: 'पुनर्प्राप्त/विसर्जित शक्ति',
      resistorSlider: 'ब्रेकिंग श्रेणी प्रतिरोध (R_B / R_plug)',
      speedSlider: 'प्रारंभिक घूर्णन गति (RPM)',
      antiPlugAlert: 'एंटी-प्लगिंग रिले सक्रिय: गति 0 RPM हुई! मोटर को उल्टा घूमने से रोकने के लिए कॉन्टैक्टर तुरंत बंद हो गया।',
      safetyDisclaimer: 'सुरक्षा सूचना: क्रेन एवं लिफ्ट में शून्य गति पर मोटर को रोके रखने हेतु यांत्रिक पार्किंग ब्रेक अनिवार्य होते हैं।',
      energyFlowSupply: 'सप्लाई मेंस से शक्ति प्रवाह (मोटरिंग)',
      energyFlowRegen: 'ग्रिड को वापस बिजली पुनर्प्राप्ति (रीजेनरेशन)',
      energyFlowDynamic: 'गतिज ऊर्जा -> प्रतिरोध में गर्मी (डायनामिक)',
      energyFlowPlugging: 'अत्यधिक तीव्र ब्रेकिंग एवं ताप विसर्जन (प्लगिंग)'
    },
    bn: {
      title: 'ডিসি মোটর বৈদ্যুতিক ব্রেকিং ও ড্রাইভ ল্যাবরেটরি',
      subtitle: 'রিজেনারেটিভ ব্রেকিং (শক্তি পুনরুদ্ধার), ডায়নামিক ব্রেকিং (তাপীয় রূপান্তর) এবং প্লাগিং (রিভার্স ভোল্টেজ ব্রেকিং) সিমুলেশন।',
      reset: 'রিসেট করুন',
      modeMotoring: 'স্বাভাবিক মোটরিং মোড',
      modeRegen: 'রিজেনারেটিভ ব্রেকিং (Eb > V)',
      modeDynamic: 'ডায়নামিক / রিহোস্ট্যাটিক ব্রেকিং',
      modePlugging: 'প্লাগিং (রিভার্স ভোল্টেজ)',
      applyBrakeBtn: 'ব্রেকিং প্রয়োগ করুন',
      speedBadge: 'রোটর গতি (N)',
      backEmfBadge: 'উৎপন্ন ব্যাক EMF (Eb)',
      iaBadge: 'ব্রেকিং কারেন্ট (I_B)',
      torqueBadge: 'গতিরোধক টর্ক (T_B)',
      powerBadge: 'পুনরুদ্ধারকৃত/নির্গত ক্ষমতা',
      resistorSlider: 'ব্রেকিং সিরিজ রোধ (R_B / R_plug)',
      speedSlider: 'প্রাথমিক ঘূর্ণন গতি (RPM)',
      antiPlugAlert: 'অ্যান্টি-প্লাগিং রিলে সক্রিয়: গতি ০ RPM এ নামামাত্র সংযোগ বিচ্ছিন্ন হয়েছে যাতে মোটর উল্টো না ঘোরে।',
      safetyDisclaimer: 'নিরাপত্তা বার্তা: ক্রেন ও লিফটে শূন্য গতিতে মোটরকে স্থির ধরে রাখতে সর্বদা মেকানিক্যাল পার্কিং ব্রেক ব্যবহৃত হয়।',
      energyFlowSupply: 'সাপ্লাই লাইন থেকে শক্তি গ্রহণ (মোটরিং)',
      energyFlowRegen: 'পাওয়ার গ্রিডে বিদ্যুৎ পুনরুদ্ধার (রিজেনারেশন)',
      energyFlowDynamic: 'গতিশক্তি -> রোধে তাপীয় ক্ষয় (ডায়নামিক)',
      energyFlowPlugging: 'তীব্রতম ব্রেকিং টর্ক ও তাপীয় নিষ্কাশন (প্লাগিং)'
    }
  };

  const t = labels[language] || labels.en;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 shadow-xl max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-rose-500/10 text-rose-400 rounded-lg border border-rose-500/20">
              <ShieldAlert className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-white tracking-wide">{t.title}</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl">{t.subtitle}</p>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {t.reset}
        </button>
      </div>

      {/* Braking Mode Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-950 p-1.5 rounded-lg border border-slate-800">
        <button
          onClick={() => {
            setMode('motoring');
            setIsDecelerating(false);
            setAntiPluggingTripped(false);
            if (speedRpm === 0) setSpeedRpm(1200);
          }}
          className={`py-2 px-2.5 rounded-md text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            mode === 'motoring'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-pressed={mode === 'motoring'}
        >
          <Zap className="w-3.5 h-3.5" />
          {t.modeMotoring}
        </button>

        <button
          onClick={() => handleStartBraking('regenerative')}
          className={`py-2 px-2.5 rounded-md text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            mode === 'regenerative'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-pressed={mode === 'regenerative'}
        >
          <BatteryCharging className="w-3.5 h-3.5" />
          {t.modeRegen}
        </button>

        <button
          onClick={() => handleStartBraking('dynamic')}
          className={`py-2 px-2.5 rounded-md text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            mode === 'dynamic'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-pressed={mode === 'dynamic'}
        >
          <Flame className="w-3.5 h-3.5" />
          {t.modeDynamic}
        </button>

        <button
          onClick={() => handleStartBraking('plugging')}
          className={`py-2 px-2.5 rounded-md text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            mode === 'plugging'
              ? 'bg-rose-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-pressed={mode === 'plugging'}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          {t.modePlugging}
        </button>
      </div>

      {/* Anti-Plugging Relay Alert */}
      {antiPluggingTripped && (
        <div className="p-3 bg-emerald-950/80 border border-emerald-500/60 rounded-lg text-emerald-200 text-xs font-medium flex items-center gap-2">
          <Power className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{t.antiPlugAlert}</span>
        </div>
      )}

      {/* Main Grid: SVG Braking Circuit & Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG Power Flow Circuit Animation (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col items-center justify-center">
          <div className="w-full flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
            <span className="text-cyan-400 font-bold">
              {mode === 'motoring' && t.energyFlowSupply}
              {mode === 'regenerative' && t.energyFlowRegen}
              {mode === 'dynamic' && t.energyFlowDynamic}
              {mode === 'plugging' && t.energyFlowPlugging}
            </span>
            <span className={`px-2 py-0.5 rounded font-bold font-mono ${
              speedRpm === 0 ? 'bg-rose-900 text-rose-200' : 'bg-slate-800 text-cyan-300'
            }`}>
              {Math.round(speedRpm)} RPM
            </span>
          </div>

          <svg viewBox="0 0 460 240" className="w-full h-auto max-h-[260px]" aria-label="DC Motor Braking Circuit Diagram">
            {/* DC Bus Source (Left) */}
            <g transform="translate(40, 60)">
              <rect x="0" y="0" width="70" height="120" rx="8" fill="#090d16" stroke="#334155" strokeWidth="2" />
              <text x="35" y="24" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">DC BUS</text>
              <text x="35" y="44" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">230 V</text>
              <circle cx="35" cy="70" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="35" y="74" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">+</text>
              <circle cx="35" cy="100" r="10" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="35" y="104" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">-</text>
            </g>

            {/* Motor Rotor Armature (Right) */}
            <g transform="translate(350, 120)">
              <circle cx="0" cy="0" r="46" fill="#0f172a" stroke={mode === 'motoring' ? '#38bdf8' : mode === 'regenerative' ? '#10b981' : '#ef4444'} strokeWidth="3" />
              {/* Spinning Coil Lines */}
              <g transform={`rotate(${speedRpm * 1.5})`} className="origin-center">
                <line x1="-34" y1="0" x2="34" y2="0" stroke="#f59e0b" strokeWidth="3" />
                <line x1="0" y1="-34" x2="0" y2="34" stroke="#f59e0b" strokeWidth="3" />
              </g>
              <circle cx="0" cy="0" r="18" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
              <text x="0" y="5" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">M</text>
              <text x="0" y="62" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">
                Eb = {backEmf.toFixed(0)} V
              </text>
            </g>

            {/* Center: Dynamic Braking Resistor / Plugging Resistor */}
            <g transform="translate(200, 30)">
              <rect x="0" y="0" width="80" height="34" rx="4" fill="#090d16" stroke={mode === 'dynamic' || mode === 'plugging' ? '#f59e0b' : '#334155'} strokeWidth="2" />
              {/* Resistor zig zag */}
              <path d="M 10 17 L 20 8 L 30 26 L 40 8 L 50 26 L 60 8 L 70 17" fill="none" stroke={mode === 'dynamic' || mode === 'plugging' ? '#f59e0b' : '#475569'} strokeWidth="2.5" />
              <text x="40" y="-5" textAnchor="middle" fill="#f59e0b" fontSize="8.5" fontWeight="bold">
                Braking Resistor ({brakingResistor} Ω)
              </text>
            </g>

            {/* Connecting Circuit Wires */}
            {/* Top Wire */}
            <line x1="75" y1="90" x2="200" y2="90" stroke="#38bdf8" strokeWidth="2.5" />
            <line x1="280" y1="90" x2="350" y2="90" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Bottom Wire */}
            <line x1="75" y1="150" x2="350" y2="150" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Directional Power Flow Indicator Arrow */}
            {mode === 'motoring' && speedRpm > 0 && (
              <g transform="translate(180, 115)">
                <line x1="0" y1="0" x2="40" y2="0" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#arrow)" />
                <polygon points="45,0 35,-5 35,5" fill="#38bdf8" />
                <text x="20" y="-8" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold">Power In</text>
              </g>
            )}

            {mode === 'regenerative' && speedRpm > 0 && (
              <g transform="translate(220, 115)">
                <polygon points="-5,0 5,-5 5,5" fill="#10b981" />
                <line x1="0" y1="0" x2="-40" y2="0" stroke="#10b981" strokeWidth="3" />
                <text x="-20" y="-8" textAnchor="middle" fill="#10b981" fontSize="8" fontWeight="bold">Regeneration Power</text>
              </g>
            )}

            {mode === 'dynamic' && speedRpm > 0 && (
              <g transform="translate(240, 100)">
                <path d="M 110 20 L 110 -35 L 40 -35" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="4,2" />
                <text x="75" y="-42" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">Heat Dissipation</text>
              </g>
            )}

            {mode === 'plugging' && speedRpm > 0 && (
              <g transform="translate(210, 115)">
                <text x="20" y="-8" textAnchor="middle" fill="#ef4444" fontSize="8.5" fontWeight="bold">V + Eb Additive!</text>
              </g>
            )}
          </svg>

          {/* Trigger Brake Action Button */}
          <div className="w-full flex justify-center mt-3 pt-3 border-t border-slate-800">
            <button
              onClick={() => handleStartBraking(mode === 'motoring' ? 'dynamic' : mode)}
              className="px-6 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg shadow-lg transition flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              {t.applyBrakeBtn} ({mode.toUpperCase()})
            </button>
          </div>
        </div>

        {/* Dashboard Metrics (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.speedBadge}</span>
              <span className="text-xl font-bold font-mono text-cyan-400">{Math.round(speedRpm)} RPM</span>
            </div>

            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.backEmfBadge}</span>
              <span className="text-xl font-bold font-mono text-emerald-400">{backEmf.toFixed(1)} V</span>
            </div>

            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.iaBadge}</span>
              <span className="text-xl font-bold font-mono text-amber-400">{armatureCurrent.toFixed(1)} A</span>
            </div>

            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.torqueBadge}</span>
              <span className="text-xl font-bold font-mono text-rose-400">{brakingTorque.toFixed(1)} N·m</span>
            </div>
          </div>

          {/* Sliders */}
          <div className="p-3.5 bg-slate-950 rounded-lg border border-slate-800 space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">{t.resistorSlider}</span>
                <span className="text-amber-400 font-mono font-bold">{brakingResistor.toFixed(1)} Ω</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="8.0"
                step="0.5"
                value={brakingResistor}
                onChange={(e) => setBrakingResistor(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
                aria-label="Braking Resistor"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">{t.speedSlider}</span>
                <span className="text-cyan-400 font-mono font-bold">{speedRpm} RPM</span>
              </div>
              <input
                type="range"
                min="0"
                max="1600"
                step="50"
                value={speedRpm}
                onChange={(e) => setSpeedRpm(parseInt(e.target.value, 10))}
                className="w-full accent-cyan-500 cursor-pointer"
                aria-label="Initial Speed"
              />
            </div>
          </div>

          {/* Safety Disclaimer Banner */}
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <span className="text-amber-400 font-semibold block mb-0.5">Industrial Drive Rule:</span>
            {t.safetyDisclaimer}
          </div>
        </div>
      </div>
    </div>
  );
};
