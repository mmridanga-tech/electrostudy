import React, { useState, useEffect } from 'react';
import { Language } from '../../types';
import { Play, RotateCcw, Zap, Clock, Activity, Power } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const RLTransientCircuitAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [V_source, setVSource] = useState<number>(12); // Volts
  const [resistance, setResistance] = useState<number>(10); // Ohms
  const [inductance, setInductance] = useState<number>(50); // mH
  const [switchClosed, setSwitchClosed] = useState<boolean>(true);
  const [simTime, setSimTime] = useState<number>(0); // ms
  const [isSimulating, setIsSimulating] = useState<boolean>(true);

  // Time constant τ = L / R
  const tau_ms = (inductance / resistance); // ms
  const steadyCurrent = V_source / resistance; // Amperes
  const maxEnergy = 0.5 * (inductance * 1e-3) * Math.pow(steadyCurrent, 2) * 1e3; // mJ

  // Simulation timer
  useEffect(() => {
    if (!isSimulating) return;
    const maxTime = tau_ms * 6;
    const interval = setInterval(() => {
      setSimTime(prev => {
        if (prev >= maxTime) return 0;
        return prev + (maxTime / 100);
      });
    }, 40);
    return () => clearInterval(interval);
  }, [isSimulating, tau_ms]);

  // Dynamic values at current simTime
  const t = simTime;
  const current_t = switchClosed
    ? steadyCurrent * (1 - Math.exp(-t / tau_ms))
    : steadyCurrent * Math.exp(-t / tau_ms);

  const v_inductor = switchClosed
    ? V_source * Math.exp(-t / tau_ms)
    : -V_source * Math.exp(-t / tau_ms);

  const v_resistor = current_t * resistance;
  const energy_t = 0.5 * (inductance * 1e-3) * Math.pow(current_t, 2) * 1e3; // mJ

  // Generate SVG path for current curve
  const generateCurrentPath = () => {
    const points: string[] = [];
    const maxT = tau_ms * 5;
    for (let x = 0; x <= 220; x += 4) {
      const timeVal = (x / 220) * maxT;
      const iVal = switchClosed
        ? steadyCurrent * (1 - Math.exp(-timeVal / tau_ms))
        : steadyCurrent * Math.exp(-timeVal / tau_ms);
      const y = 140 - (iVal / (steadyCurrent || 1)) * 100;
      points.push(`${x + 40},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  // Generate SVG path for inductor voltage curve
  const generateVoltagePath = () => {
    const points: string[] = [];
    const maxT = tau_ms * 5;
    for (let x = 0; x <= 220; x += 4) {
      const timeVal = (x / 220) * maxT;
      const vVal = switchClosed
        ? V_source * Math.exp(-timeVal / tau_ms)
        : -V_source * Math.exp(-timeVal / tau_ms);
      const y = 140 - (Math.abs(vVal) / (V_source || 1)) * 100;
      points.push(`${x + 40},${y}`);
    }
    return `M ${points.join(' L ')}`;
  };

  const labels = {
    title: {
      en: 'RL Circuit Transient Growth & Decay Simulator',
      hi: 'RL परिपथ क्षणिक धारा वृद्धि एवं ह्रास सिम्युलेटर',
      bn: 'RL সার্কিট ট্রানজিয়েন্ট কারেন্ট বৃদ্ধি ও হ্রাস সিমুলেটর'
    },
    switchOn: {
      en: 'Growth (Switch ON)',
      hi: 'वृद्धि (स्विच ऑन)',
      bn: 'কারেন্ট বৃদ্ধি (সুইচ অন)'
    },
    switchOff: {
      en: 'Decay (Switch OFF)',
      hi: 'ह्रास (स्विच ऑफ)',
      bn: 'কারেন্ট হ্রাস (সুইচ অফ)'
    },
    timeConstant: {
      en: 'Time Constant (τ = L/R):',
      hi: 'समय स्थिरांक (τ = L/R):',
      bn: 'টাইম কনস্ট্যান্ট (τ = L/R):'
    },
    currentNow: {
      en: 'Instantaneous Current i(t):',
      hi: 'तात्कालिक धारा i(t):',
      bn: 'তাৎক্ষণিক কারেন্ট i(t):'
    },
    vInductorNow: {
      en: 'Inductor Voltage v_L(t):',
      hi: 'इंडक्टर वोल्टेज v_L(t):',
      bn: 'ইন্ডাক্টর ভোল্টেজ v_L(t):'
    },
    energyNow: {
      en: 'Stored Magnetic Energy:',
      hi: 'संचित चुंबकीय ऊर्जा:',
      bn: 'সঞ্চিত চৌম্বক শক্তি:'
    },
    tauRule: {
      en: 'At t = 1τ, current reaches 63.2% of steady state (I_max). At 5τ, it reaches 99.3%!',
      hi: 't = 1τ पर धारा अधिकतम मान के 63.2% तक पहुँचती है। 5τ पर 99.3% पहुँच जाती है!',
      bn: 't = ১τ সময়ে কারেন্ট সর্বোচ্চ মানের ৬৩.২% এ পৌঁছায়। ৫τ সময়ে ৯৯.৩% সম্পূর্ণ হয়!'
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-emerald-400" />
          <h3 className="font-bold text-lg text-slate-100">{labels.title[lang]}</h3>
        </div>
        <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => {
              setSwitchClosed(true);
              setSimTime(0);
            }}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              switchClosed ? 'bg-emerald-500 text-slate-950 font-bold shadow' : 'text-slate-300 hover:text-white'
            }`}
          >
            {labels.switchOn[lang]}
          </button>
          <button
            onClick={() => {
              setSwitchClosed(false);
              setSimTime(0);
            }}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              !switchClosed ? 'bg-rose-500 text-white font-bold shadow' : 'text-slate-300 hover:text-white'
            }`}
          >
            {labels.switchOff[lang]}
          </button>
        </div>
      </div>

      {/* Main Dual Display: Circuit Diagram + Real-time Oscilloscope */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Schematic View */}
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 h-64 flex items-center justify-center relative">
          <svg className="w-full h-full" viewBox="0 0 300 200">
            {/* Battery DC Source */}
            <g transform="translate(40, 100)">
              <circle r="18" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
              <text x="-7" y="-2" fill="#3b82f6" fontWeight="bold" fontSize="12">
                +
              </text>
              <text x="-5" y="10" fill="#3b82f6" fontWeight="bold" fontSize="12">
                -
              </text>
              <text x="-30" y="4" fill="#94a3b8" fontSize="10" fontWeight="bold">
                {V_source}V
              </text>
            </g>

            {/* Connecting Wires */}
            <path
              d="M 40 82 L 40 40 L 90 40 M 130 40 L 170 40 M 260 40 L 260 100 L 260 160 L 40 160 L 40 118"
              fill="none"
              stroke="#64748b"
              strokeWidth="2.5"
            />

            {/* Switch */}
            <g transform="translate(90, 40)">
              <circle cx="0" cy="0" r="3" fill="#e2e8f0" />
              <circle cx="40" cy="0" r="3" fill="#e2e8f0" />
              <line
                x1="0"
                y1="0"
                x2="38"
                y2={switchClosed ? 0 : -20}
                stroke={switchClosed ? '#10b981' : '#f43f5e'}
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>

            {/* Resistor R */}
            <g transform="translate(170, 30)">
              <rect x="0" y="0" width="40" height="20" fill="#334155" stroke="#f59e0b" strokeWidth="2" rx="3" />
              <text x="20" y="14" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">
                {resistance}Ω
              </text>
              <text x="20" y="-6" fill="#cbd5e1" fontSize="9" textAnchor="middle">
                v_R = {v_resistor.toFixed(1)}V
              </text>
            </g>

            {/* Inductor Coil L */}
            <g transform="translate(260, 70)">
              <path
                d="M 0 0 C 15 5, 15 15, 0 20 C 15 25, 15 35, 0 40 C 15 45, 15 55, 0 60"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3.5"
              />
              <text x="18" y="32" fill="#38bdf8" fontSize="10" fontWeight="bold">
                {inductance}mH
              </text>
              <text x="18" y="46" fill="#94a3b8" fontSize="9">
                v_L = {v_inductor.toFixed(1)}V
              </text>
            </g>

            {/* Animated Current Particle Flow */}
            {switchClosed && current_t > 0.05 && (
              <circle
                cx={40 + ((simTime * 20) % 220)}
                cy="160"
                r="3.5"
                fill="#fbbf24"
                className="animate-ping opacity-75"
              />
            )}

            {/* Live readout badge */}
            <g transform="translate(110, 120)">
              <rect x="0" y="0" width="80" height="30" rx="4" fill="#0f172a" stroke="#334155" />
              <text x="40" y="14" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">
                i = {current_t.toFixed(2)} A
              </text>
              <text x="40" y="24" fill="#64748b" fontSize="8" textAnchor="middle">
                t = {simTime.toFixed(1)} ms
              </text>
            </g>
          </svg>
        </div>

        {/* Transient Curves Graph */}
        <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 h-64 flex flex-col justify-between">
          <div className="flex justify-between items-center text-xs font-semibold px-2">
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-2.5 h-0.5 bg-emerald-400 inline-block"></span> i(t) Current
            </span>
            <span className="text-sky-400 flex items-center gap-1">
              <span className="w-2.5 h-0.5 bg-sky-400 inline-block"></span> v_L(t) Voltage
            </span>
            <span className="text-amber-400 font-mono">τ = {tau_ms.toFixed(2)} ms</span>
          </div>

          <div className="relative flex-1">
            <svg className="w-full h-full" viewBox="0 0 280 160">
              {/* Grid lines */}
              <line x1="40" y1="20" x2="40" y2="140" stroke="#334155" strokeWidth="1" />
              <line x1="40" y1="140" x2="270" y2="140" stroke="#334155" strokeWidth="1" />
              <line x1="40" y1="80" x2="270" y2="80" stroke="#1e293b" strokeDasharray="3,3" />

              {/* Time constant markers */}
              {[1, 2, 3, 4, 5].map(mult => {
                const x = 40 + (mult / 5) * 220;
                return (
                  <g key={mult}>
                    <line x1={x} y1="138" x2={x} y2="142" stroke="#64748b" strokeWidth="1" />
                    <text x={x} y="152" fill="#64748b" fontSize="8" textAnchor="middle">
                      {mult}τ
                    </text>
                  </g>
                );
              })}

              {/* Current curve (Emerald) */}
              <path d={generateCurrentPath()} fill="none" stroke="#10b981" strokeWidth="2.5" />

              {/* Voltage curve (Sky) */}
              <path d={generateVoltagePath()} fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,2" />

              {/* Live Tracking Dot for Current */}
              {(() => {
                const xPos = 40 + Math.min(220, (simTime / (tau_ms * 5)) * 220);
                const yPos = 140 - (current_t / (steadyCurrent || 1)) * 100;
                return <circle cx={xPos} cy={yPos} r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />;
              })()}
            </svg>
          </div>
        </div>
      </div>

      {/* Numerical Analytics Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-800/80 p-3 rounded-lg border border-slate-700 mb-4">
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{labels.timeConstant[lang]}</span>
          <span className="text-base font-bold text-amber-400">
            {tau_ms.toFixed(2)} <span className="text-xs font-normal">ms</span>
          </span>
        </div>
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{labels.currentNow[lang]}</span>
          <span className="text-base font-bold text-emerald-400">
            {current_t.toFixed(3)} <span className="text-xs font-normal">A / {steadyCurrent.toFixed(2)} A</span>
          </span>
        </div>
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{labels.vInductorNow[lang]}</span>
          <span className="text-base font-bold text-sky-400">
            {v_inductor.toFixed(2)} <span className="text-xs font-normal">V</span>
          </span>
        </div>
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{labels.energyNow[lang]}</span>
          <span className="text-base font-bold text-purple-400">
            {energy_t.toFixed(2)} <span className="text-xs font-normal">mJ</span>
          </span>
        </div>
      </div>

      {/* Interactive Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700">
        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
            <span>DC Voltage (V):</span>
            <span className="text-sky-400">{V_source} V</span>
          </div>
          <input
            type="range"
            min="3"
            max="48"
            value={V_source}
            onChange={e => setVSource(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
            <span>Resistance (R):</span>
            <span className="text-amber-400">{resistance} Ω</span>
          </div>
          <input
            type="range"
            min="2"
            max="50"
            value={resistance}
            onChange={e => setResistance(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
            <span>Inductance (L):</span>
            <span className="text-emerald-400">{inductance} mH</span>
          </div>
          <input
            type="range"
            min="10"
            max="200"
            step="5"
            value={inductance}
            onChange={e => setInductance(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>
      </div>
    </div>
  );
};
