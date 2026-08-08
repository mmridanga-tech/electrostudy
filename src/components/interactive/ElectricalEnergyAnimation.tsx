import React, { useState, useEffect } from 'react';
import { Sliders, Play, Pause, RotateCcw, Activity } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';

interface ElectricalEnergyAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Electrical Energy & kWh Meter Simulator',
    subtitle: 'Observe how electrical energy accumulates over time based on active power rating (E = P·t).',
    powerRating: 'Power Load (P)',
    timeScale: 'Time Simulation Speed',
    startMeter: 'Start Meter',
    pauseMeter: 'Pause Meter',
    accumulatedJoules: 'Energy in Joules (J)',
    accumulatedWh: 'Energy in Watt-hours (Wh)',
    accumulatedKWh: 'Commercial Energy (kWh)',
    kwhDial: 'Commercial Utility Meter (kWh)',
    calloutTitle: 'Electrical Energy Definition',
    calloutText: 'Electrical energy is the total power consumed over a given period. The commercial unit of electrical energy is the kilowatt-hour (kWh) or Board of Trade Unit (BOTU). 1 kWh = 1,000 Watts for 1 hour = 3,600,000 Joules (3.6 MJ).',
    formulaText: 'E = P × t   ⇒   1 kWh = 1 kW × 1 hour = 3.6 × 10⁶ Joules',
  },
  hi: {
    title: 'विद्युत ऊर्जा एवं kWh मीटर सिम्युलेटर',
    subtitle: 'देखें कि कैसे विद्युत शक्ति की दर के आधार पर समय के साथ विद्युत ऊर्जा जमा होती है (E = P·t)।',
    powerRating: 'पावर लोड (P)',
    timeScale: 'समय गति',
    startMeter: 'मीटर चालू करें',
    pauseMeter: 'मीटर रोकें',
    accumulatedJoules: 'ऊर्जा जूल में (J)',
    accumulatedWh: 'ऊर्जा वाट-घंटे में (Wh)',
    accumulatedKWh: 'व्यावसायिक ऊर्जा (kWh)',
    kwhDial: 'कमर्शियल बिजली मीटर (kWh)',
    calloutTitle: 'विद्युत ऊर्जा की परिभाषा',
    calloutText: 'विद्युत ऊर्जा एक निश्चित समय में खपत की गई कुल शक्ति है। विद्युत ऊर्जा का व्यावसायिक मात्रक किलोवाट-घंटा (kWh) या यूनिट है। 1 kWh = 1,000 वाट 1 घंटे के लिए = 36,000,000 जूल (3.6 MJ)।',
    formulaText: 'E = P × t   ⇒   1 kWh = 1 kW × 1 hour = 3.6 × 10⁶ जूल',
  },
  bn: {
    title: 'তড়িৎ শক্তি ও kWh মিটার সিমুলেটর',
    subtitle: 'দেখুন কিভাবে পাওয়ার রেটিং অনুযায়ী সময়ের সাথে সাথে তড়িৎ শক্তি জমা হয় (E = P·t)।',
    powerRating: 'পাওয়ার লোড (P)',
    timeScale: 'সময় গতি',
    startMeter: 'মিটার চালু করুন',
    pauseMeter: 'মিটার থামান',
    accumulatedJoules: 'জুলে শক্তি (J)',
    accumulatedWh: 'ওয়াট-ঘণ্টায় শক্তি (Wh)',
    accumulatedKWh: 'বাণিজ্যিক শক্তি (kWh)',
    kwhDial: 'কমার্শিয়াল বিদ্যুৎ মিটার (kWh)',
    calloutTitle: 'তড়িৎ শক্তির সংজ্ঞা',
    calloutText: 'তড়িৎ শক্তি হলো কোনো নির্দিষ্ট সময়ে ব্যবহৃত মোট ক্ষমতা। তড়িৎ শক্তির বাণিজ্যিক একক কিলোওয়াট-ঘণ্টা (kWh) বা ইউনিট। ১ kWh = ১,০০০ ওয়াট ১ ঘণ্টার জন্য = ৩,৬০০,০০০ জুল (৩.৬ MJ)।',
    formulaText: 'E = P × t   ⇒   1 kWh = 1 kW × 1 hour = 3.6 × 10⁶ জুল',
  }
};

export const ElectricalEnergyAnimation: React.FC<ElectricalEnergyAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [powerWatts, setPowerWatts] = useState<number>(1000); // 100 W to 5000 W
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [simulatedSeconds, setSimulatedSeconds] = useState<number>(0);

  // Meter accumulation loop
  useEffect(() => {
    if (!isRunning) return;

    let animId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Time multiplier: 1 real second = 60 simulated seconds
      setSimulatedSeconds(prev => prev + dt * 60);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isRunning]);

  const joules = powerWatts * simulatedSeconds; // W * s = Joules
  const wattHours = joules / 3600;
  const kWh = wattHours / 1000;

  const handleReset = () => {
    setPowerWatts(1000);
    setIsRunning(true);
    setSimulatedSeconds(0);
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
      extraHeaderActions={
        <button
          onClick={() => setIsRunning(prev => !prev)}
          className="px-2.5 py-1.5 rounded-lg bg-amber-950/80 hover:bg-amber-900 border border-amber-800 text-xs font-bold text-amber-300 transition-colors flex items-center gap-1.5"
          aria-label={isRunning ? t.pauseMeter : t.startMeter}
        >
          {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          <span>{isRunning ? t.pauseMeter : t.startMeter}</span>
        </button>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual Energy Meter Dial Canvas */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            <span>Accumulated Energy Meter</span>
            <span className="text-emerald-400 font-bold font-mono">{(simulatedSeconds / 60).toFixed(1)} Sim Minutes</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative min-h-[220px]">
            <svg viewBox="0 0 340 200" className="w-full max-w-md h-52 select-none">
              {/* Outer Energy Meter Casing */}
              <rect x="50" y="20" width="240" height="160" fill="#0f172a" stroke="#38bdf8" strokeWidth="3" rx="12" />

              {/* Meter Title Header */}
              <rect x="70" y="32" width="200" height="24" fill="#1e293b" rx="4" />
              <text x="170" y="48" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
                UTILITY ENERGY METER (kWh)
              </text>

              {/* Digital Register Counter Display Box */}
              <rect x="80" y="70" width="180" height="40" fill="#020617" stroke="#334155" strokeWidth="2" rx="6" />
              <text x="170" y="98" textAnchor="middle" fill="#f59e0b" fontSize="22" fontWeight="extrabold" fontFamily="monospace">
                {kWh.toFixed(4)} <tspan fontSize="12" fill="#94a3b8">kWh</tspan>
              </text>

              {/* Rotating Disk Simulation */}
              <g transform="translate(170, 142)">
                <ellipse cx="0" cy="0" rx="60" ry="12" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
                <line
                  x1={-50 * Math.cos((simulatedSeconds % 10) * 0.63)}
                  y1="0"
                  x2={50 * Math.cos((simulatedSeconds % 10) * 0.63)}
                  y2="0"
                  stroke="#ef4444"
                  strokeWidth="3"
                />
                <circle cx="0" cy="0" r="4" fill="#38bdf8" />
              </g>

              <text x="170" y="172" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                Disc speed ∝ Load ({powerWatts} W)
              </text>
            </svg>

            {/* Readouts */}
            <div className="grid grid-cols-3 gap-2 w-full mt-2 text-center text-xs">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Joules (J)</div>
                <div className="text-xs font-bold text-cyan-300 font-mono">{joules.toFixed(0)} J</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Watt-hours (Wh)</div>
                <div className="text-xs font-bold text-emerald-300 font-mono">{wattHours.toFixed(2)} Wh</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Units (kWh)</div>
                <div className="text-xs font-bold text-amber-400 font-mono">{kWh.toFixed(4)} kWh</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 print-hidden">
            {/* Power Rating Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-amber-300">
                <span>{t.powerRating}</span>
                <span className="font-mono">{powerWatts} W ({(powerWatts / 1000).toFixed(1)} kW)</span>
              </div>
              <input
                type="range"
                min={100}
                max={5000}
                step={100}
                value={powerWatts}
                onChange={(e) => setPowerWatts(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                aria-label="Power load slider"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>100 W (Bulb)</span>
                <span>2000 W (Heater)</span>
                <span>5000 W (Industrial)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
