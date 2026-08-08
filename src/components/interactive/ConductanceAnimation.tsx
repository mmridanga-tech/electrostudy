import React, { useState, useEffect } from 'react';
import { Sliders } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ConductanceAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Electrical Conductance & Ease of Flow',
    subtitle: 'Understand conductance (G) as the reciprocal of resistance, measuring how easily electric charge flows.',
    resistance: 'Resistance (R)',
    conductance: 'Conductance (G = 1/R)',
    voltage: 'Applied Voltage (V)',
    current: 'Resulting Current (I = G·V)',
    highwayLanes: 'Flow Highway Openings',
    calloutTitle: 'Conductance Concept',
    calloutText: 'Conductance (G) represents the ease with which electric current passes through a component. Measured in Siemens (S) or mhos (℧), conductance is the mathematical reciprocal of resistance: G = 1 / R.',
    formulaText: 'G = 1 / R  [Siemens, S]   ⇒   I = G × V',
  },
  hi: {
    title: 'विद्युत चालकता (Conductance) एवं प्रवाह की सुगमता',
    subtitle: 'चालकता (G) को प्रतिरोध के व्युत्क्रम के रूप में समझें, जो यह मापती है कि आवेश कितनी आसानी से बहता है।',
    resistance: 'प्रतिरोध (R)',
    conductance: 'चालकता (G = 1/R)',
    voltage: 'लागू वोल्टेज (V)',
    current: 'परिणामी धारा (I = G·V)',
    highwayLanes: 'प्रवाह मार्ग की चौड़ाई',
    calloutTitle: 'चालकता की अवधारणा',
    calloutText: 'चालकता (G) वह सुगमता है जिसके साथ विद्युत धारा किसी घटक से होकर गुजरती है। इसका मात्रक सीमेंस (S) है, और यह प्रतिरोध का व्युत्क्रम होती है: G = 1 / R।',
    formulaText: 'G = 1 / R  [सीमेंस, S]   ⇒   I = G × V',
  },
  bn: {
    title: 'তড়িৎ পরিবাহিতা (Conductance) ও সহজ প্রবাহ',
    subtitle: 'পরিবাহিতাকে (G) রোধের বিপরীত হিসেবে বুঝুন, যা পরিবাহীর মধ্য দিয়ে আধানের সহজ প্রবাহের পরিমাপ।',
    resistance: 'রোধ (R)',
    conductance: 'পরিবাহিতা (G = 1/R)',
    voltage: 'প্রযুক্ত ভোল্টেজ (V)',
    current: 'ফলাফল কারেন্ট (I = G·V)',
    highwayLanes: 'প্রবাহের লেনের প্রস্থ',
    calloutTitle: 'পরিবাহিতার ধারণা',
    calloutText: 'পরিবাহিতা (G) হলো কোনো উপাদানের মধ্য দিয়ে বিদ্যুৎ প্রবাহের সহজতা। এর একক সিমেন্স (S), যা রোধের ব্যস্তানুপাতিক: G = 1 / R।',
    formulaText: 'G = 1 / R  [সিমেন্স, S]   ⇒   I = G × V',
  }
};

export const ConductanceAnimation: React.FC<ConductanceAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [resistance, setResistance] = useState<number>(4); // 1 to 20 Ω
  const [voltage, setVoltage] = useState<number>(12); // 1 to 24 V

  const conductance = 1 / resistance; // 0.05 S to 1 S
  const current = conductance * voltage; // I = G * V

  const handleReset = () => {
    setResistance(4);
    setVoltage(12);
  };

  const [particleOffsets, setParticleOffsets] = useState<number[]>([0, 30, 60, 90, 120, 150]);

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    let animId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // Higher conductance -> faster & smoother motion
      const speed = current * 20;

      setParticleOffsets(prev => prev.map(p => (p + speed * dt) % 200));

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [current]);

  // Visual channel width scales with Conductance G (from 15px at low G to 70px at high G)
  const channelH = 15 + conductance * 60;
  const channelY = 100 - channelH / 2;

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
        {/* Visual Channel / Conductance Pipe */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            <span>Conductance Highway View</span>
            <span className="text-emerald-400 font-bold font-mono">G = {conductance.toFixed(3)} S ({conductance.toFixed(3)} ℧)</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative min-h-[220px]">
            <svg viewBox="0 0 340 200" className="w-full max-w-md h-52 select-none">
              {/* Wide funnel walls */}
              <path
                d={`M 30 40 L 80 ${channelY} L 260 ${channelY} L 310 40`}
                fill="none"
                stroke="#334155"
                strokeWidth="2"
              />
              <path
                d={`M 30 160 L 80 ${channelY + channelH} L 260 ${channelY + channelH} L 310 160`}
                fill="none"
                stroke="#334155"
                strokeWidth="2"
              />

              {/* Conductance Channel Fill */}
              <rect
                x="80"
                y={channelY}
                width="180"
                height={channelH}
                fill="#10b981"
                fillOpacity="0.2"
                stroke="#10b981"
                strokeWidth="2"
                rx="4"
              />

              {/* Particles Flowing Through Channel */}
              {particleOffsets.map((offset, idx) => {
                const px = 70 + (offset % 200);
                const py = channelY + 6 + ((idx * 13) % Math.max(10, channelH - 12));
                return (
                  <circle key={`p-${idx}`} cx={px} cy={py} r="3.5" fill="#34d399" />
                );
              })}

              <text x="170" y={channelY - 10} textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="monospace">
                High Conductance G = Wide Flow Channel
              </text>
            </svg>

            {/* Readouts */}
            <div className="grid grid-cols-3 gap-2 w-full mt-2 text-center text-xs">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Resistance (R)</div>
                <div className="text-sm font-bold text-cyan-300 font-mono">{resistance} Ω</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Conductance (G)</div>
                <div className="text-sm font-bold text-emerald-300 font-mono">{conductance.toFixed(3)} S</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">Current (I = G·V)</div>
                <div className="text-sm font-bold text-amber-300 font-mono">{current.toFixed(2)} A</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 print-hidden">
            {/* Resistance Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-cyan-300">
                <span>{t.resistance}</span>
                <span className="font-mono">{resistance} Ω</span>
              </div>
              <input
                type="range"
                min={1}
                max={20}
                step={1}
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                aria-label="Resistance slider"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 Ω (G = 1 S)</span>
                <span>20 Ω (G = 0.05 S)</span>
              </div>
            </div>

            {/* Voltage Slider */}
            <div className="space-y-1 border-t border-slate-800/80 pt-2">
              <div className="flex justify-between text-xs font-bold text-amber-300">
                <span>{t.voltage}</span>
                <span className="font-mono">{voltage} V</span>
              </div>
              <input
                type="range"
                min={1}
                max={24}
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                aria-label="Voltage slider"
              />
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
