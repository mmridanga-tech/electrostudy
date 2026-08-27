import React, { useState } from 'react';
import { Language } from '../../types';
import { Network, ArrowLeftRight, HelpCircle, Layers, Sliders } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const InductorCouplingAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [L1, setL1] = useState<number>(10); // mH
  const [L2, setL2] = useState<number>(20); // mH
  const [couplingK, setCouplingK] = useState<number>(0.7); // 0 to 1
  const [connectionMode, setConnectionMode] = useState<'series-aiding' | 'series-opposing' | 'parallel-aiding' | 'parallel-opposing'>('series-aiding');
  const [dot1Top, setDot1Top] = useState<boolean>(true);
  const [dot2Top, setDot2Top] = useState<boolean>(true);

  // Mutual Inductance M = k * sqrt(L1 * L2)
  const M = couplingK * Math.sqrt(L1 * L2);

  // Equivalent Inductance Leq calculation
  let Leq = 0;
  if (connectionMode === 'series-aiding') {
    Leq = L1 + L2 + 2 * M;
  } else if (connectionMode === 'series-opposing') {
    Leq = Math.max(0.1, L1 + L2 - 2 * M);
  } else if (connectionMode === 'parallel-aiding') {
    Leq = (L1 * L2 - Math.pow(M, 2)) / (L1 + L2 - 2 * M);
  } else if (connectionMode === 'parallel-opposing') {
    Leq = (L1 * L2 - Math.pow(M, 2)) / (L1 + L2 + 2 * M);
  }

  const t = {
    title: {
      en: 'Mutual Inductance, Dot Convention & Magnetic Coupling Simulator',
      hi: 'पारस्परिक प्रेरकत्व, डॉट परिपाटी एवं चुंबकीय युग्मन सिम्युलेटर',
      bn: 'মিউচুয়াল ইন্ডাক্ট্যান্স, ডট কনভেনশন ও চৌম্বক কাপলিং সিমুলেটর'
    },
    seriesAiding: {
      en: 'Series Aiding (L1 + L2 + 2M)',
      hi: 'श्रेणी सहायक (L1 + L2 + 2M)',
      bn: 'সিরিজ এইডিং (L1 + L2 + 2M)'
    },
    seriesOpposing: {
      en: 'Series Opposing (L1 + L2 - 2M)',
      hi: 'श्रेणी विरोधी (L1 + L2 - 2M)',
      bn: 'সিরিজ অপোজিং (L1 + L2 - 2M)'
    },
    parallelAiding: {
      en: 'Parallel Aiding',
      hi: 'समानांतर सहायक',
      bn: 'প্যারালাল এইডিং'
    },
    parallelOpposing: {
      en: 'Parallel Opposing',
      hi: 'समानांतर विरोधी',
      bn: 'প্যারালাল অপোজিং'
    },
    mutualInductance: {
      en: 'Mutual Inductance (M):',
      hi: 'पारस्परिक प्रेरकत्व (M):',
      bn: 'মিউচুয়াল ইন্ডাক্ট্যান্স (M):'
    },
    equivalentL: {
      en: 'Total Equivalent Inductance (L_eq):',
      hi: 'कुल तुल्य प्रेरकत्व (L_eq):',
      bn: 'মোট তুল্য ইন্ডাক্ট্যান্স (L_eq):'
    },
    couplingCoeff: {
      en: 'Coupling Factor (k):',
      hi: 'युग्मन गुणांक (k):',
      bn: 'কাপলিং সহগ (k):'
    },
    dotExplanation: {
      en: 'Dot Convention Rule: Current entering both dotted terminals produces mutually aiding magnetic flux (Φ1 + Φ2).',
      hi: 'डॉट परिपाटी नियम: दोनों डॉटेड सिरों में धारा प्रवेश करने पर परस्पर सहायक चुंबकीय फ्लक्स उत्पन्न होता है।',
      bn: 'ডট কনভেনশন নীতি: উভয় ডট টার্মিনাল দিয়ে কারেন্ট প্রবেশ করলে ফ্লাক্স একে অপরের সহায়ক (Aiding) হয়।'
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Layers className="w-6 h-6 text-amber-400" />
          <h3 className="font-bold text-lg text-slate-100">{t.title[lang]}</h3>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {(['series-aiding', 'series-opposing', 'parallel-aiding', 'parallel-opposing'] as const).map(mode => (
          <button
            key={mode}
            onClick={() => setConnectionMode(mode)}
            className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
              connectionMode === mode
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {mode === 'series-aiding'
              ? t.seriesAiding[lang]
              : mode === 'series-opposing'
              ? t.seriesOpposing[lang]
              : mode === 'parallel-aiding'
              ? t.parallelAiding[lang]
              : t.parallelOpposing[lang]}
          </button>
        ))}
      </div>

      {/* Interactive Visual Canvas */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-lg p-4 h-64 flex items-center justify-center overflow-hidden mb-4">
        <svg className="w-full h-full" viewBox="0 0 500 220">
          <defs>
            <linearGradient id="fluxGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Magnetic Core linkage between two coils */}
          <rect
            x="90"
            y="60"
            width="320"
            height="100"
            rx="12"
            fill="none"
            stroke="#475569"
            strokeWidth="18"
            strokeLinejoin="round"
          />

          {/* Shared Mutual Flux Lines */}
          {couplingK > 0.1 && (
            <path
              d="M 120 70 L 380 70 L 380 150 L 120 150 Z"
              fill="none"
              stroke="url(#fluxGrad)"
              strokeWidth={couplingK * 6}
              strokeDasharray="8,4"
              className="animate-pulse"
            />
          )}

          {/* Coil 1 (Left Coil L1) */}
          <g transform="translate(100, 60)">
            {/* Coil strands */}
            {Array.from({ length: 6 }).map((_, i) => (
              <path
                key={i}
                d={`M -15 ${i * 18 + 5} C 15 ${i * 18 + 10}, 15 ${i * 18 + 20}, -15 ${i * 18 + 22}`}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            ))}
            {/* Dot Indicator 1 */}
            <circle
              cx="-24"
              cy={dot1Top ? '10' : '90'}
              r="6"
              fill="#ef4444"
              stroke="#ffffff"
              strokeWidth="1.5"
              className="cursor-pointer"
              onClick={() => setDot1Top(!dot1Top)}
            />
            <text x="-48" y="55" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">
              L1 = {L1}mH
            </text>
          </g>

          {/* Coil 2 (Right Coil L2) */}
          <g transform="translate(400, 60)">
            {/* Coil strands */}
            {Array.from({ length: 6 }).map((_, i) => (
              <path
                key={i}
                d={`M -15 ${i * 18 + 5} C 15 ${i * 18 + 10}, 15 ${i * 18 + 20}, -15 ${i * 18 + 22}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            ))}
            {/* Dot Indicator 2 */}
            <circle
              cx="20"
              cy={connectionMode.includes('aiding') ? (dot1Top ? '10' : '90') : (dot1Top ? '90' : '10')}
              r="6"
              fill="#ef4444"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            <text x="50" y="55" fill="#f59e0b" fontSize="12" fontWeight="bold" textAnchor="middle">
              L2 = {L2}mH
            </text>
          </g>

          {/* Central Mutual Coupling Badge */}
          <g transform="translate(250, 110)">
            <rect x="-65" y="-22" width="130" height="44" rx="6" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
            <text x="0" y="-4" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">
              M = {M.toFixed(2)} mH
            </text>
            <text x="0" y="14" fill="#94a3b8" fontSize="10" textAnchor="middle">
              k = {couplingK.toFixed(2)}
            </text>
          </g>
        </svg>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-800/80 p-3 rounded-lg border border-slate-700 mb-4">
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{t.couplingCoeff[lang]}</span>
          <span className="text-base font-bold text-indigo-400">
            k = {couplingK.toFixed(2)} <span className="text-xs font-normal">({Math.round(couplingK * 100)}% flux linked)</span>
          </span>
        </div>
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{t.mutualInductance[lang]}</span>
          <span className="text-base font-bold text-amber-400">
            {M.toFixed(2)} <span className="text-xs font-normal">mH</span>
          </span>
        </div>
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{t.equivalentL[lang]}</span>
          <span className="text-base font-bold text-emerald-400">
            {Leq.toFixed(2)} <span className="text-xs font-normal">mH</span>
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700">
        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
            <span>Inductance L1:</span>
            <span className="text-sky-400">{L1} mH</span>
          </div>
          <input
            type="range"
            min="2"
            max="50"
            value={L1}
            onChange={e => setL1(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
            <span>Inductance L2:</span>
            <span className="text-amber-400">{L2} mH</span>
          </div>
          <input
            type="range"
            min="2"
            max="50"
            value={L2}
            onChange={e => setL2(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
            <span>Coupling Factor (k):</span>
            <span className="text-indigo-400">{couplingK.toFixed(2)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={couplingK}
            onChange={e => setCouplingK(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};
