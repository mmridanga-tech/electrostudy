import React, { useState, useEffect } from 'react';
import { Sliders, Sun, Flame, Cog } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';

interface ElectricalPowerAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Electrical Power & Energy Conversion',
    subtitle: 'Observe how electrical power (P = V·I) converts electrical energy into light, heat, or mechanical motion.',
    loadType: 'Electrical Device Load',
    lamp: 'Electric Lamp (Light)',
    heater: 'Heating Coil (Heat)',
    motor: 'Electric Motor (Motion)',
    voltage: 'Voltage (V)',
    current: 'Current (I)',
    resistance: 'Resistance (R = V/I)',
    power: 'Electrical Power (P)',
    calloutTitle: 'Electrical Power Formulas',
    calloutText: 'Electrical power is the rate at which electrical energy is transferred by an electric circuit per unit time. Measured in Watts (W), 1 Watt = 1 Joule per second.',
    formulaText: 'P = V × I   =   I² · R   =   V² / R   [Watts, W]',
  },
  hi: {
    title: 'विद्युत शक्ति (Electrical Power) एवं ऊर्जा रूपांतरण',
    subtitle: 'देखें कि कैसे विद्युत शक्ति (P = V·I) विद्युत ऊर्जा को प्रकाश, ऊष्मा या यांत्रिक गति में परिवर्तित करती है।',
    loadType: 'विद्युत उपकरण लोड',
    lamp: 'विद्युत लैंप (प्रकाश)',
    heater: 'हीटिंग कॉइल (ऊष्मा)',
    motor: 'विद्युत मोटर (गति)',
    voltage: 'वोल्टेज (V)',
    current: 'धारा (I)',
    resistance: 'प्रतिरोध (R = V/I)',
    power: 'विद्युत शक्ति (P)',
    calloutTitle: 'विद्युत शक्ति के सूत्र',
    calloutText: 'विद्युत शक्ति वह दर है जिस पर परिपथ द्वारा विद्युत ऊर्जा स्थानांतरित की जाती है। इसका मात्रक वाट (W) है, 1 वाट = 1 जूल प्रति सेकंड।',
    formulaText: 'P = V × I   =   I² · R   =   V² / R   [वाट, W]',
  },
  bn: {
    title: 'তড়িৎ ক্ষমতা (Electrical Power) ও শক্তি রূপান্তর',
    subtitle: 'দেখুন কিভাবে তড়িৎ ক্ষমতা (P = V·I) তড়িৎ শক্তিকে আলো, তাপ বা যান্ত্রিক গতিতে রূপান্তরিত করে।',
    loadType: 'বৈদ্যুতিক ডিভাইস লোড',
    lamp: 'ইলেকট্রিক ল্যাম্প (আলো)',
    heater: 'হিটিং কয়েল (তাপ)',
    motor: 'ইলেকট্রিক মোটর (গতি)',
    voltage: 'ভোল্টেজ (V)',
    current: 'কারেন্ট (I)',
    resistance: 'রোধ (R = V/I)',
    power: 'তড়িৎ ক্ষমতা (P)',
    calloutTitle: 'তড়িৎ ক্ষমতার সূত্রাবলী',
    calloutText: 'তড়িৎ ক্ষমতা হলো যে হারে কোনো বর্তনীতে তড়িৎ শক্তি রূপান্তরিত হয়। এর একক ওয়াট (W), ১ ওয়াট = ১ জুল প্রতি সেকেন্ড।',
    formulaText: 'P = V × I   =   I² · R   =   V² / R   [ওয়াট, W]',
  }
};

export const ElectricalPowerAnimation: React.FC<ElectricalPowerAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [voltage, setVoltage] = useState<number>(12); // 1 to 24 V
  const [current, setCurrent] = useState<number>(3);   // 1 to 10 A
  const [loadType, setLoadType] = useState<'lamp' | 'heater' | 'motor'>('lamp');
  const [motorAngle, setMotorAngle] = useState<number>(0);

  const power = voltage * current; // Watts
  const resistance = current > 0 ? voltage / current : 0;

  // Motor rotation animation loop
  useEffect(() => {
    if (loadType !== 'motor') return;

    let animId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Rotation speed proportional to power
      const speed = power * 10; // deg/sec

      setMotorAngle(prev => (prev + speed * dt) % 360);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [loadType, power]);

  const handleReset = () => {
    setVoltage(12);
    setCurrent(3);
    setLoadType('lamp');
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual Device Output Canvas */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            <span>Power Output Visualization</span>
            <span className="text-amber-400 font-bold font-mono">P = {power.toFixed(1)} Watts (W)</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative min-h-[220px]">
            <svg viewBox="0 0 340 200" className="w-full max-w-md h-52 select-none">
              {/* Load Device Rendering */}
              {loadType === 'lamp' && (
                <g transform="translate(170, 100)">
                  {/* Glowing Radius Circle */}
                  <circle cx="0" cy="0" r={Math.min(70, 20 + power * 0.25)} fill="#f59e0b" fillOpacity={Math.min(0.7, 0.1 + power * 0.003)} />
                  <circle cx="0" cy="0" r="30" fill="#1e293b" stroke="#f59e0b" strokeWidth="3" />
                  <path d="M-15,-15 L15,15 M-15,15 L15,-15" stroke="#f59e0b" strokeWidth="3" />
                  <text x="0" y="50" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                    Glow Lumens ∝ {power.toFixed(0)} W
                  </text>
                </g>
              )}

              {loadType === 'heater' && (
                <g transform="translate(170, 100)">
                  <rect x="-60" y="-30" width="120" height="60" fill="#1e293b" stroke="#ef4444" strokeWidth="3" rx="8" />
                  {/* Heat Waves */}
                  <path d="M -40 -15 Q -30 -25 -20 -15 Q -10 -5 0 -15 Q 10 -25 20 -15 Q 30 -5 40 -15" fill="none" stroke="#ef4444" strokeWidth="3" />
                  <path d="M -40 10 Q -30 0 -20 10 Q -10 20 0 10 Q 10 0 20 10 Q 30 20 40 10" fill="none" stroke="#f97316" strokeWidth="3" />
                  <text x="0" y="50" textAnchor="middle" fill="#f87171" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                    Thermal Energy ∝ {power.toFixed(0)} W
                  </text>
                </g>
              )}

              {loadType === 'motor' && (
                <g transform="translate(170, 100)">
                  <circle cx="0" cy="0" r="40" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
                  <g transform={`rotate(${motorAngle})`}>
                    <line x1="-30" y1="0" x2="30" y2="0" stroke="#38bdf8" strokeWidth="4" />
                    <line x1="0" y1="-30" x2="0" y2="30" stroke="#38bdf8" strokeWidth="4" />
                    <circle cx="0" cy="0" r="8" fill="#38bdf8" />
                  </g>
                  <text x="0" y="60" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                    RPM Speed ∝ {power.toFixed(0)} W
                  </text>
                </g>
              )}
            </svg>

            {/* Readouts */}
            <div className="grid grid-cols-4 gap-1.5 w-full mt-2 text-center text-xs">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Voltage (V)</div>
                <div className="text-xs font-bold text-cyan-300 font-mono">{voltage} V</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Current (I)</div>
                <div className="text-xs font-bold text-emerald-300 font-mono">{current} A</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Resistance (R)</div>
                <div className="text-xs font-bold text-slate-300 font-mono">{resistance.toFixed(1)} Ω</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Power (P)</div>
                <div className="text-xs font-bold text-amber-400 font-mono">{power.toFixed(0)} W</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 print-hidden">
            {/* Load Type Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-200">{t.loadType}</label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  onClick={() => setLoadType('lamp')}
                  className={`p-2 rounded text-xs font-bold flex flex-col items-center gap-1 border transition-all ${
                    loadType === 'lamp' ? 'bg-amber-950 border-amber-500 text-amber-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                  aria-label="Select Lamp Load"
                >
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Lamp</span>
                </button>
                <button
                  onClick={() => setLoadType('heater')}
                  className={`p-2 rounded text-xs font-bold flex flex-col items-center gap-1 border transition-all ${
                    loadType === 'heater' ? 'bg-rose-950 border-rose-500 text-rose-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                  aria-label="Select Heater Load"
                >
                  <Flame className="w-4 h-4 text-rose-400" />
                  <span>Heater</span>
                </button>
                <button
                  onClick={() => setLoadType('motor')}
                  className={`p-2 rounded text-xs font-bold flex flex-col items-center gap-1 border transition-all ${
                    loadType === 'motor' ? 'bg-cyan-950 border-cyan-500 text-cyan-300' : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                  aria-label="Select Motor Load"
                >
                  <Cog className="w-4 h-4 text-cyan-400" />
                  <span>Motor</span>
                </button>
              </div>
            </div>

            {/* Voltage Slider */}
            <div className="space-y-1 border-t border-slate-800/80 pt-2">
              <div className="flex justify-between text-xs font-bold text-cyan-300">
                <span>{t.voltage}</span>
                <span className="font-mono">{voltage} V</span>
              </div>
              <input
                type="range"
                min={1}
                max={24}
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                aria-label="Voltage slider"
              />
            </div>

            {/* Current Slider */}
            <div className="space-y-1 border-t border-slate-800/80 pt-2">
              <div className="flex justify-between text-xs font-bold text-emerald-300">
                <span>{t.current}</span>
                <span className="font-mono">{current} A</span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={current}
                onChange={(e) => setCurrent(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                aria-label="Current slider"
              />
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
