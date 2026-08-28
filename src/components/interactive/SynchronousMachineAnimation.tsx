import React, { useState } from 'react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';
import { Play, Pause, Zap, Activity, Sliders } from 'lucide-react';

interface SynchronousMachineAnimationProps {
  currentLanguage: Language;
}

export const SynchronousMachineAnimation: React.FC<SynchronousMachineAnimationProps> = ({ currentLanguage }) => {
  const [fieldCurrent, setFieldCurrent] = useState(5.0); // Amps DC excitation (Normal is ~5A)
  const [loadLevel, setLoadLevel] = useState(50); // % active power load

  // Physics calculation
  const normalIf = 5.0; // Amps for unity PF
  const diff = fieldCurrent - normalIf;
  
  // Power factor & type
  let pf = Math.max(0.65, 1 - Math.abs(diff) * 0.08);
  let pfType = 'Unity (1.00)';
  let pfColor = 'text-emerald-500';
  let modeDesc = 'Normal Excitation';

  if (diff < -0.2) {
    pfType = `${pf.toFixed(2)} Lagging`;
    pfColor = 'text-amber-500';
    modeDesc = 'Under-Excited (Absorbs Q)';
  } else if (diff > 0.2) {
    pfType = `${pf.toFixed(2)} Leading`;
    pfColor = 'text-cyan-500';
    modeDesc = 'Over-Excited (Synchronous Condenser Mode)';
  }

  // Armature Current: V-Curve shape: Ia increases when under or over excited
  const baseIa = 20 * (loadLevel / 100);
  const armatureCurrent = Math.max(baseIa, baseIa + Math.pow(diff, 2) * 2.2 + (loadLevel < 10 ? Math.abs(diff) * 2.5 : 0)).toFixed(1);

  const handleReset = () => {
    setFieldCurrent(5.0);
    setLoadLevel(50);
  };

  return (
    <InteractiveSimulationCard
      title={{
        en: 'Synchronous Machine V-Curves & Excitation Control Simulator',
        hi: 'सिंक्रोनस मशीन V-वक्र एवं उत्तेजना नियंत्रण सिमुलेटर',
        bn: 'সিনক্রোনাস মেশিন V-কার্ভ ও এক্সাইটেশন কন্ট্রোল সিমুলেটর'
      }}
      description={{
        en: 'Adjust DC field excitation to observe V-Curve behaviour, power factor variation (Lagging → Unity → Leading), and synchronous condenser reactive power compensation.',
        hi: 'डीसी फील्ड करंट बदलकर V-वक्र, पावर फैक्टर (लैगिंग से लीडिंग) एवं सिंक्रोनस कंडेनसर की कार्यप्रणाली देखें।',
        bn: 'ডিসি ফিল্ড কারেন্ট পরিবর্তন করে V-কার্ভের আচরণ, পাওয়ার ফ্যাক্টর (ল্যাগিং থেকে লিডিং) ও সিনক্রোনাস কনডেনসারের রিঅ্যাক্টিভ পাওয়ার সাপোর্ট দেখুন।'
      }}
      currentLanguage={currentLanguage}
      badge="High-Voltage Grid Sim"
      onReset={handleReset}
    >
      <div className="space-y-6">
        
        {/* Animated V-Curve SVG Display */}
        <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between overflow-hidden">
          
          <div className="flex justify-between items-center z-10">
            <span className="text-xs font-mono font-bold text-slate-300">Live V-Curve: Armature Current ($I_a$) vs Field Current ($I_f$)</span>
            <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 ${pfColor}`}>
              {pfType}
            </span>
          </div>

          {/* SVG V-Curve Drawing */}
          <div className="relative w-full h-40 flex items-center justify-center">
            <svg viewBox="0 0 300 120" className="w-full h-full">
              {/* Grid Lines */}
              <line x1="20" y1="10" x2="20" y2="105" stroke="#334155" strokeWidth="1.5" />
              <line x1="20" y1="105" x2="280" y2="105" stroke="#334155" strokeWidth="1.5" />
              <line x1="150" y1="10" x2="150" y2="105" stroke="#475569" strokeDasharray="3 3" strokeWidth="1" />
              
              {/* Labels */}
              <text x="10" y="20" fill="#94a3b8" fontSize="8" fontFamily="monospace">Ia</text>
              <text x="260" y="115" fill="#94a3b8" fontSize="8" fontFamily="monospace">If (DC)</text>
              <text x="135" y="115" fill="#10b981" fontSize="8" fontFamily="monospace">Unity PF</text>

              {/* No Load V Curve */}
              <path d="M 40 40 Q 150 95 260 40" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 2" />
              
              {/* Full Load V Curve */}
              <path d="M 40 20 Q 150 70 260 20" fill="none" stroke="#06b6d4" strokeWidth="2.5" />

              {/* Current Operating Point Dot */}
              {(() => {
                const svgX = 40 + ((fieldCurrent - 1) / 8) * 220;
                // Calculate y based on parabola
                const normX = (svgX - 150) / 110;
                const baseHeight = 70 - (loadLevel / 100) * 25;
                const svgY = baseHeight + Math.pow(normX, 2) * 45;
                return (
                  <g>
                    <circle cx={svgX} cy={svgY} r="7" fill="#f59e0b" className="animate-ping opacity-75" />
                    <circle cx={svgX} cy={svgY} r="5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
                    <line x1={svgX} y1={svgY} x2={svgX} y2="105" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Operating Mode Status */}
          <div className="flex justify-between items-center text-[11px] font-mono bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800">
            <span className="text-slate-400">Mode: <strong className="text-white">{modeDesc}</strong></span>
            <span className="text-slate-400">Armature Current: <strong className="text-amber-400">{armatureCurrent} A</strong></span>
          </div>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
          
          {/* DC Field Current */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span>DC Field Excitation ($I_f$):</span>
              <span className="font-mono text-cyan-600 dark:text-cyan-400">{fieldCurrent.toFixed(1)} A</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="9.0"
              step="0.2"
              value={fieldCurrent}
              onChange={(e) => setFieldCurrent(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>1.0 A (Under-Excited)</span>
              <span>5.0 A (Unity)</span>
              <span>9.0 A (Over-Excited)</span>
            </div>
          </div>

          {/* Mechanical Load */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span>Mechanical Shaft Load:</span>
              <span className="font-mono text-amber-600 dark:text-amber-400">{loadLevel}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="10"
              value={loadLevel}
              onChange={(e) => setLoadLevel(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>0% (Synchronous Condenser)</span>
              <span>100% (Full Load)</span>
            </div>
          </div>
        </div>

        {/* Info Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-center">
            <div className="text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400">Power Factor</div>
            <div className={`text-base font-extrabold font-mono ${pfColor}`}>{pfType}</div>
          </div>
          <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 text-center">
            <div className="text-[10px] uppercase font-bold text-cyan-600 dark:text-cyan-400">Reactive Power (Q)</div>
            <div className="text-base font-extrabold font-mono text-cyan-950 dark:text-cyan-100">
              {diff > 0.2 ? `+${(diff * 1.5).toFixed(1)} kVAR (Supplied)` : diff < -0.2 ? `-${Math.abs(diff * 1.5).toFixed(1)} kVAR (Drawn)` : '0.0 kVAR (Zero Q)'}
            </div>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center">
            <div className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">Speed Synchronism</div>
            <div className="text-base font-extrabold font-mono text-emerald-950 dark:text-emerald-100">Exact 1500 RPM</div>
          </div>
        </div>

      </div>
    </InteractiveSimulationCard>
  );
};
