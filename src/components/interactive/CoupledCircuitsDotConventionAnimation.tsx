import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const CoupledCircuitsDotConventionAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const labelId = useId();

  // Inductance values (mH)
  const [l1, setL1] = useState<number>(20);
  const [l2, setL2] = useState<number>(30);
  const [k, setK] = useState<number>(0.6); // Coupling coefficient (0 to 1)
  const [freq, setFreq] = useState<number>(50); // Hz

  // Dot locations: 'top' or 'bottom'
  const [dot1, setDot1] = useState<'top' | 'bottom'>('top');
  const [dot2, setDot2] = useState<'top' | 'bottom'>('top');

  // Connection mode: 'series' | 'twoMesh'
  const [mode, setMode] = useState<'series' | 'twoMesh'>('series');
  const [current1Dir, setCurrent1Dir] = useState<'down' | 'up'>('down'); // current entering top or bottom
  const [current2Dir, setCurrent2Dir] = useState<'down' | 'up'>('down');

  // Mathematical computations
  // M = k * sqrt(L1 * L2)
  const m = k * Math.sqrt(l1 * l2);
  const omega = 2 * Math.PI * freq;
  const xl1 = omega * (l1 * 1e-3);
  const xl2 = omega * (l2 * 1e-3);
  const xm = omega * (m * 1e-3);

  // Determine aiding vs opposing
  // Dot Rule: When currents enter both dotted terminals (or leave both), mutual terms have + sign (aiding).
  // If one enters dotted terminal and one leaves dotted terminal, mutual terms have - sign (opposing).
  const entersDot1 = (dot1 === 'top' && current1Dir === 'down') || (dot1 === 'bottom' && current1Dir === 'up');
  const entersDot2 = (dot2 === 'top' && current2Dir === 'down') || (dot2 === 'bottom' && current2Dir === 'up');
  const isAiding = entersDot1 === entersDot2;

  // Series equivalent
  const leqSeries = isAiding ? l1 + l2 + 2 * m : Math.max(0, l1 + l2 - 2 * m);
  const xeqSeries = omega * (leqSeries * 1e-3);

  const t = {
    title: {
      en: 'Magnetically Coupled Circuits & Dot Convention Simulator',
      hi: 'चुंबकीय रूप से युग्मित परिपथ एवं डॉट परिपाटी सिमुलेटर',
      bn: 'ম্যাগনেটিকালি কাপল্ড সার্কিট ও ডট কনভেনশন সিমুলেটর'
    },
    subtitle: {
      en: 'Understand mutual inductance M = k√(L₁L₂), induced voltages, and series aiding/opposing flux conditions',
      hi: 'पारस्परिक प्रेरकत्व M = k√(L₁L₂), प्रेरित वोल्टेज एवं श्रेणी सहायक/विरोधी फ्लक्स स्थितियों को समझें',
      bn: 'পারস্পরিক আবেশাঙ্ক M = k√(L₁L₂), আবিষ্ট ভোল্টেজ ও শ্রেণি সহায়ক/বিরোধী ফ্লাক্স অবস্থা বুঝুন'
    },
    coil1Params: { en: 'Coil 1 Inductance (L₁)', hi: 'कुंडली 1 प्रेरकत्व (L₁)', bn: 'কুণ্ডলী ১ আবেশাঙ্ক (L₁)' },
    coil2Params: { en: 'Coil 2 Inductance (L₂)', hi: 'कुंडली 2 प्रेरकत्व (L₂)', bn: 'কুণ্ডলী ২ আবেশাঙ্ক (L₂)' },
    couplingParams: { en: 'Coupling Factor (k)', hi: 'युग्मन गुणांक (k)', bn: 'যুগ্মন সহগ (k)' },
    dotRules: { en: 'Dot Placement & Polarity', hi: 'डॉट स्थिति एवं ध्रुवीयता', bn: 'ডট অবস্থান ও পোলারিটি' },
    fluxState: { en: 'Magnetic Flux State', hi: 'चुंबकीय फ्लक्स स्थिति', bn: 'চৌম্বক ফ্লাক্স অবস্থা' },
    aiding: { en: 'SERIES AIDING (Φ₁ + Φ₂)', hi: 'श्रेणी सहायक (Φ₁ + Φ₂)', bn: 'শ্রেণি সহায়ক (Φ₁ + Φ₂)' },
    opposing: { en: 'SERIES OPPOSING (Φ₁ - Φ₂)', hi: 'श्रेणी विरोधी (Φ₁ - Φ₂)', bn: 'শ্রেণি বিরোধী (Φ₁ - Φ₂)' },
    formula: { en: 'Formula & Calculations', hi: 'सूत्र एवं गणनाएँ', bn: 'সূত্র ও গণনা' }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Coupled Inductor Analyzer</span>
        </div>
        <h3 id={labelId} className="text-xl font-bold text-white mt-1">
          {t.title[lang]}
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          {t.subtitle[lang]}
        </p>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Coil 1 */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-cyan-300 block">{t.coil1Params[lang]}</span>
          <div className="flex justify-between">
            <span>L₁:</span>
            <span className="font-mono text-cyan-400">{l1} mH</span>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            value={l1}
            onChange={(e) => setL1(Number(e.target.value))}
            aria-label="Coil 1 inductance L1"
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <div className="flex items-center justify-between pt-1">
            <span>Dot on L₁:</span>
            <button
              onClick={() => setDot1(dot1 === 'top' ? 'bottom' : 'top')}
              className="px-2 py-1 bg-cyan-950 border border-cyan-700 text-cyan-300 rounded text-[11px] font-bold"
            >
              {dot1.toUpperCase()} Terminal
            </button>
          </div>
        </div>

        {/* Coil 2 */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-emerald-300 block">{t.coil2Params[lang]}</span>
          <div className="flex justify-between">
            <span>L₂:</span>
            <span className="font-mono text-emerald-400">{l2} mH</span>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            value={l2}
            onChange={(e) => setL2(Number(e.target.value))}
            aria-label="Coil 2 inductance L2"
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <div className="flex items-center justify-between pt-1">
            <span>Dot on L₂:</span>
            <button
              onClick={() => setDot2(dot2 === 'top' ? 'bottom' : 'top')}
              className="px-2 py-1 bg-emerald-950 border border-emerald-700 text-emerald-300 rounded text-[11px] font-bold"
            >
              {dot2.toUpperCase()} Terminal
            </button>
          </div>
        </div>

        {/* Coupling k & Freq */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-amber-300 block">{t.couplingParams[lang]}</span>
          <div className="flex justify-between">
            <span>Coeff k:</span>
            <span className="font-mono text-amber-400">{k.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={k}
            onChange={(e) => setK(Number(e.target.value))}
            aria-label="Coupling coefficient k"
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <div className="flex justify-between pt-1">
            <span>Frequency f:</span>
            <span className="font-mono text-amber-300">{freq} Hz</span>
          </div>
          <input
            type="range"
            min="10"
            max="200"
            step="10"
            value={freq}
            onChange={(e) => setFreq(Number(e.target.value))}
            aria-label="AC Frequency f"
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>

        {/* Current Flow Direction Selector */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2 flex flex-col justify-between">
          <span className="font-semibold text-purple-300 block">Current Inflow Vectors</span>
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[11px]">
              <span>i₁ enters:</span>
              <button
                onClick={() => setCurrent1Dir(current1Dir === 'down' ? 'up' : 'down')}
                className="px-2 py-0.5 bg-slate-800 rounded text-cyan-300 font-mono"
              >
                {current1Dir === 'down' ? 'TOP (↓)' : 'BOTTOM (↑)'}
              </button>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span>i₂ enters:</span>
              <button
                onClick={() => setCurrent2Dir(current2Dir === 'down' ? 'up' : 'down')}
                className="px-2 py-0.5 bg-slate-800 rounded text-emerald-300 font-mono"
              >
                {current2Dir === 'down' ? 'TOP (↓)' : 'BOTTOM (↑)'}
              </button>
            </div>
          </div>
          <div className={`p-1.5 rounded text-center font-bold text-[11px] ${
            isAiding ? 'bg-emerald-950/80 border border-emerald-500 text-emerald-300' : 'bg-rose-950/80 border border-rose-500 text-rose-300'
          }`}>
            {isAiding ? t.aiding[lang] : t.opposing[lang]}
          </div>
        </div>
      </div>

      {/* Interactive Core & Coils Schematic SVG */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
        <svg viewBox="0 0 740 220" className="w-full h-auto text-slate-300 select-none">
          {/* Iron/Ferrite Core Loop */}
          <rect x="180" y="30" width="380" height="150" rx="16" fill="none" stroke="#475569" strokeWidth="18" />
          <rect x="220" y="70" width="300" height="70" rx="6" fill="#020617" stroke="#334155" strokeWidth="3" />

          {/* Magnetic Flux Path & Arrows */}
          <path
            d="M 200 45 L 540 45 Q 555 45 555 60 L 555 150 Q 555 165 540 165 L 200 165 Q 185 165 185 150 L 185 60 Q 185 45 200 45 Z"
            fill="none"
            stroke={isAiding ? '#34d399' : '#f43f5e'}
            strokeWidth="3"
            strokeDasharray={isAiding ? '6 4' : '3 3'}
          />
          <text x="370" y="105" textAnchor="middle" fill={isAiding ? '#34d399' : '#f43f5e'} fontSize="12" fontWeight="bold" fontFamily="monospace">
            {isAiding ? 'Mutual Flux Aiding: Φ_total = Φ₁ + Φ₂' : 'Mutual Flux Opposing: Φ_total = |Φ₁ - Φ₂|'}
          </text>

          {/* Coil 1 (Left Leg) */}
          <g transform="translate(170, 40)">
            {/* Windings on Left Leg */}
            {[0, 20, 40, 60, 80, 100].map((y, idx) => (
              <g key={idx}>
                <ellipse cx="10" cy={y + 15} rx="22" ry="7" fill="none" stroke="#38bdf8" strokeWidth="4" />
              </g>
            ))}
            {/* Terminal wires */}
            <line x1="-30" y1="10" x2="10" y2="10" stroke="#38bdf8" strokeWidth="2.5" />
            <line x1="-30" y1="120" x2="10" y2="120" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Current vector arrow */}
            <path
              d={current1Dir === 'down' ? 'M -25 25 L -25 45' : 'M -25 45 L -25 25'}
              stroke="#38bdf8"
              strokeWidth="2.5"
            />
            <text x="-40" y="38" fill="#38bdf8" fontSize="11" fontWeight="bold">i₁</text>

            {/* Dot 1 */}
            <circle
              cx="2"
              cy={dot1 === 'top' ? -2 : 132}
              r="6"
              fill="#38bdf8"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            <text x="-50" y="15" fill="#94a3b8" fontSize="10">1</text>
            <text x="-50" y="125" fill="#94a3b8" fontSize="10">1'</text>
            <text x="-40" y="70" fill="#38bdf8" fontSize="12" fontWeight="bold">L₁ ({l1}mH)</text>
          </g>

          {/* Coil 2 (Right Leg) */}
          <g transform="translate(550, 40)">
            {/* Windings on Right Leg */}
            {[0, 20, 40, 60, 80, 100].map((y, idx) => (
              <g key={idx}>
                <ellipse cx="10" cy={y + 15} rx="22" ry="7" fill="none" stroke="#10b981" strokeWidth="4" />
              </g>
            ))}
            {/* Terminal wires */}
            <line x1="10" y1="10" x2="50" y2="10" stroke="#10b981" strokeWidth="2.5" />
            <line x1="10" y1="120" x2="50" y2="120" stroke="#10b981" strokeWidth="2.5" />

            {/* Current vector arrow */}
            <path
              d={current2Dir === 'down' ? 'M 45 25 L 45 45' : 'M 45 45 L 45 25'}
              stroke="#10b981"
              strokeWidth="2.5"
            />
            <text x="60" y="38" fill="#10b981" fontSize="11" fontWeight="bold">i₂</text>

            {/* Dot 2 */}
            <circle
              cx="18"
              cy={dot2 === 'top' ? -2 : 132}
              r="6"
              fill="#10b981"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            <text x="60" y="15" fill="#94a3b8" fontSize="10">2</text>
            <text x="60" y="125" fill="#94a3b8" fontSize="10">2'</text>
            <text x="60" y="70" fill="#10b981" fontSize="12" fontWeight="bold">L₂ ({l2}mH)</text>
          </g>

          {/* Top Label */}
          <text x="370" y="22" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">
            Mutual Inductance M = {m.toFixed(2)} mH (k = {k.toFixed(2)})
          </text>
        </svg>
      </div>

      {/* Quantitative Analysis Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/30 space-y-2">
          <div className="text-cyan-400 font-bold uppercase tracking-wider text-xs border-b border-cyan-900/50 pb-1">
            Inductive Reactances (@ {freq} Hz)
          </div>
          <div className="space-y-1 pt-1">
            <div>X_L1 = 2πf L₁: <span className="text-cyan-300 font-bold">{xl1.toFixed(2)} Ω</span></div>
            <div>X_L2 = 2πf L₂: <span className="text-emerald-300 font-bold">{xl2.toFixed(2)} Ω</span></div>
            <div>X_M = 2πf M: <span className="text-amber-300 font-bold">{xm.toFixed(2)} Ω</span></div>
            <div className="text-slate-400 text-[11px] pt-1">
              Coupling M = {m.toFixed(2)} mH
            </div>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/30 space-y-2">
          <div className="text-amber-400 font-bold uppercase tracking-wider text-xs border-b border-amber-900/50 pb-1">
            Series Equivalent Inductance
          </div>
          <div className="space-y-1 pt-1">
            <div>Condition: <span className={isAiding ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
              {isAiding ? 'Series Aiding (+2M)' : 'Series Opposing (-2M)'}
            </span></div>
            <div>L_eq = L₁ + L₂ {isAiding ? '+' : '-'} 2M:</div>
            <div className="text-amber-300 font-bold text-base">
              {leqSeries.toFixed(2)} mH
            </div>
            <div>Net Reactance X_eq: <span className="text-white font-bold">{xeqSeries.toFixed(2)} Ω</span></div>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-purple-500/30 space-y-2">
          <div className="text-purple-400 font-bold uppercase tracking-wider text-xs border-b border-purple-900/50 pb-1">
            Phasor Mesh Equations
          </div>
          <div className="space-y-1 pt-1 text-[11px]">
            <div className="text-cyan-300">
              V₁ = (j{xl1.toFixed(1)})I₁ {isAiding ? '+ (j' + xm.toFixed(1) + ')I₂' : '- (j' + xm.toFixed(1) + ')I₂'}
            </div>
            <div className="text-emerald-300">
              V₂ = (j{xl2.toFixed(1)})I₂ {isAiding ? '+ (j' + xm.toFixed(1) + ')I₁' : '- (j' + xm.toFixed(1) + ')I₁'}
            </div>
            <div className="text-slate-400 pt-1 text-[10px]">
              Sign of mutual term is {isAiding ? 'POSITIVE (+)' : 'NEGATIVE (-)'} because currents {isAiding ? 'both enter dotted ends' : 'one enters and one leaves dotted end'}.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
