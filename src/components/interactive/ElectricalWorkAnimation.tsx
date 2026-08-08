import React, { useState } from 'react';
import { Sliders, ArrowUpRight } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';

interface ElectricalWorkAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Electrical Work & Energy Transfer Process',
    subtitle: 'Observe how moving charge Q through a potential difference V performs electrical work (W = V·Q = V·I·t).',
    voltage: 'Potential Difference (V)',
    charge: 'Transferred Charge (Q)',
    time: 'Transfer Duration (t)',
    calculatedWork: 'Electrical Work (W)',
    calculatedCurrent: 'Equivalent Current (I = Q/t)',
    workVersusEnergy: 'Work vs. Energy Distinction',
    calloutTitle: 'Work vs. Energy Concept',
    calloutText: 'WORK (W = V·Q) is the active process of transferring energy when moving electric charges across a potential difference. ENERGY is the capacity or stored ability to perform that work.',
    formulaText: 'W = V × Q   =   V × I × t   [Joules, J]',
  },
  hi: {
    title: 'विद्युत कार्य एवं ऊर्जा स्थानांतरण प्रक्रिया',
    subtitle: 'देखें कि विभवांतर V के माध्यम से आवेश Q को स्थानांतरित करने पर विद्युत कार्य (W = V·Q = V·I·t) कैसे होता है।',
    voltage: 'विभवांतर (V)',
    charge: 'स्थानांतरित आवेश (Q)',
    time: 'स्थानांतरण अवधि (t)',
    calculatedWork: 'विद्युत कार्य (W)',
    calculatedCurrent: 'समतुल्य धारा (I = Q/t)',
    workVersusEnergy: 'कार्य बनाम ऊर्जा अंतर',
    calloutTitle: 'कार्य बनाम ऊर्जा की अवधारणा',
    calloutText: 'कार्य (W = V·Q) विभवांतर के पार आवेशों को स्थानांतरित करते समय ऊर्जा स्थानांतरित करने की सक्रिय प्रक्रिया है। ऊर्जा उस कार्य को करने की क्षमता या संगृहीत क्षमता है।',
    formulaText: 'W = V × Q   =   V × I × t   [जूल, J]',
  },
  bn: {
    title: 'তড়িৎ কাজ ও শক্তি স্থানান্তর প্রক্রিয়া',
    subtitle: 'বিভভ পার্থক্য V এর মধ্য দিয়ে আধান Q স্থানান্তর করার সময় তড়িৎ কাজ (W = V·Q = V·I·t) সম্পাদন প্রত্যক্ষ করুন।',
    voltage: 'বিভব পার্থক্য (V)',
    charge: 'স্থানান্তরিত আধান (Q)',
    time: 'স্থানান্তরের সময়কাল (t)',
    calculatedWork: 'তড়িৎ কাজ (W)',
    calculatedCurrent: 'সমতুল্য কারেন্ট (I = Q/t)',
    workVersusEnergy: 'কাজ বনাম শক্তির পার্থক্য',
    calloutTitle: 'কাজ বনাম শক্তির ধারণা',
    calloutText: 'কাজ (W = V·Q) হলো বিভব পার্থক্যের মধ্য দিয়ে আধান স্থানান্তরের সক্রিয় প্রক্রিয়া। শক্তি হলো সেই কাজ সম্পাদন করার সক্ষমতা বা সঞ্চিত ক্ষমতা।',
    formulaText: 'W = V × Q   =   V × I × t   [জুল, J]',
  }
};

export const ElectricalWorkAnimation: React.FC<ElectricalWorkAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [voltage, setVoltage] = useState<number>(12); // 1 to 24 V
  const [charge, setCharge] = useState<number>(5);   // 1 to 20 C
  const [time, setTime] = useState<number>(2);       // 1 to 10 s

  const work = voltage * charge; // W = V * Q (Joules)
  const current = charge / time; // I = Q / t (Amperes)

  const handleReset = () => {
    setVoltage(12);
    setCharge(5);
    setTime(2);
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
        {/* Charge Transfer Diagram Canvas */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            <span>Work Done Charge Transport Model</span>
            <span className="text-amber-400 font-bold font-mono">W = {work.toFixed(0)} Joules (J)</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative min-h-[220px]">
            <svg viewBox="0 0 340 200" className="w-full max-w-md h-52 select-none">
              {/* Ground & High Potential Barriers */}
              <line x1="40" y1="160" x2="300" y2="160" stroke="#3b82f6" strokeWidth="4" />
              <text x="50" y="180" fill="#3b82f6" fontSize="11" fontWeight="bold" fontFamily="monospace">0V (Ground)</text>

              <line x1="40" y1="40" x2="300" y2="40" stroke="#ef4444" strokeWidth="4" />
              <text x="50" y="30" fill="#ef4444" fontSize="11" fontWeight="bold" fontFamily="monospace">+{voltage}V Potential</text>

              {/* Work Transfer Arrow */}
              <line x1="170" y1="150" x2="170" y2="50" stroke="#f59e0b" strokeWidth="3" strokeDasharray="4 4" />
              <polygon points="170,45 163,55 177,55" fill="#f59e0b" />

              {/* Charge Transport Carrier */}
              <g transform="translate(170, 100)">
                <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#f59e0b" strokeWidth="3" />
                <text x="0" y="4" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold" fontFamily="monospace">
                  Q = {charge}C
                </text>
              </g>

              <text x="185" y="104" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                Moved across ΔV = {voltage}V
              </text>
            </svg>

            {/* Readouts */}
            <div className="grid grid-cols-3 gap-2 w-full mt-2 text-center text-xs">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Voltage (V)</div>
                <div className="text-xs font-bold text-cyan-300 font-mono">{voltage} V</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Charge (Q)</div>
                <div className="text-xs font-bold text-emerald-300 font-mono">{charge} C</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Work Done (W)</div>
                <div className="text-xs font-bold text-amber-400 font-mono">{work} J</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 print-hidden">
            {/* Voltage Slider */}
            <div className="space-y-1">
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

            {/* Charge Slider */}
            <div className="space-y-1 border-t border-slate-800/80 pt-2">
              <div className="flex justify-between text-xs font-bold text-emerald-300">
                <span>{t.charge}</span>
                <span className="font-mono">{charge} C</span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                value={charge}
                onChange={(e) => setCharge(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                aria-label="Charge slider"
              />
            </div>

            {/* Time Slider */}
            <div className="space-y-1 border-t border-slate-800/80 pt-2">
              <div className="flex justify-between text-xs font-bold text-amber-300">
                <span>{t.time}</span>
                <span className="font-mono">{time} s</span>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                aria-label="Time duration slider"
              />
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
