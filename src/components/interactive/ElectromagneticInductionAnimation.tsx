import React, { useState, useEffect } from 'react';
import { Language } from '../../types';
import { Play, Pause, RotateCcw, Zap, Compass, Magnet, ArrowRight } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const ElectromagneticInductionAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [current, setCurrent] = useState<number>(3.0); // Amperes
  const [turns, setTurns] = useState<number>(10);
  const [coreType, setCoreType] = useState<'air' | 'iron' | 'ferrite'>('iron');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [magnetPos, setMagnetPos] = useState<number>(0); // -50 to 50
  const [motionDirection, setMotionDirection] = useState<number>(1);
  const [mode, setMode] = useState<'solenoid' | 'lenz'>('solenoid');

  // Magnetic permeability constants
  const relativePermeability = {
    air: 1,
    iron: 2000,
    ferrite: 800,
  };

  const mu_r = relativePermeability[coreType];
  const coilLength = 0.10; // meters (10 cm)
  const coilArea = 0.0005; // m² (5 cm²)
  const mu_0 = 4 * Math.PI * 1e-7;

  // Calculations
  const H = (turns * current) / coilLength; // A/m
  const B = Math.min(mu_0 * mu_r * H, coreType === 'iron' ? 1.8 : coreType === 'ferrite' ? 0.45 : 0.05); // Tesla (with saturation cap)
  const totalFlux = B * coilArea * 1e6; // micro-Webers (μWb)
  const inductance = ((mu_0 * mu_r * Math.pow(turns, 2) * coilArea) / coilLength) * 1e3; // mH
  const storedEnergy = 0.5 * (inductance * 1e-3) * Math.pow(current, 2) * 1e3; // milli-Joules (mJ)

  // Lenz Law motion loop
  useEffect(() => {
    if (!isPlaying || mode !== 'lenz') return;
    const interval = setInterval(() => {
      setMagnetPos(prev => {
        if (prev >= 60) setMotionDirection(-1);
        if (prev <= -60) setMotionDirection(1);
        return prev + motionDirection * 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [isPlaying, mode, motionDirection]);

  // Induced EMF calculation for Lenz mode
  const magnetSpeed = motionDirection * 1.5;
  const inducedEMF = mode === 'lenz' ? -1 * turns * 0.08 * magnetSpeed * Math.cos((magnetPos * Math.PI) / 120) : 0;

  const t = {
    title: {
      en: 'Electromagnetism & Solenoid Magnetic Field Simulator',
      hi: 'विद्युतचुंबकत्व एवं परिनालिका चुंबकीय क्षेत्र सिम्युलेटर',
      bn: 'তড়িচ্চুম্বকত্ব ও সলিনয়েড চৌম্বক ক্ষেত্র সিমুলেটর'
    },
    modeSolenoid: {
      en: 'Solenoid Field (B = μ·N·I/l)',
      hi: 'परिनालिका क्षेत्र (B = μ·N·I/l)',
      bn: 'সলিনয়েড ক্ষেত্র (B = μ·N·I/l)'
    },
    modeLenz: {
      en: 'Faraday & Lenz Induction',
      hi: 'फैराडे एवं लेन्ज़ प्रेरण',
      bn: 'ফ্যারাডে ও লেঞ্জের আবেশ'
    },
    current: {
      en: 'Current (I):',
      hi: 'धारा (I):',
      bn: 'কারেন্ট (I):'
    },
    turnsLabel: {
      en: 'Coil Turns (N):',
      hi: 'फेरों की संख्या (N):',
      bn: 'পাকসংখ্যা (N):'
    },
    core: {
      en: 'Core Material:',
      hi: 'कोर पदार्थ:',
      bn: 'কোর উপাদান:'
    },
    air: { en: 'Air (μr = 1)', hi: 'वायु (μr = 1)', bn: 'বায়ু (μr = ১)' },
    iron: { en: 'Soft Iron (μr = 2000)', hi: 'नर्म लोहा (μr = 2000)', bn: 'নরম লোহা (μr = ২০০০)' },
    ferrite: { en: 'Ferrite (μr = 800)', hi: 'फेराइट (μr = 800)', bn: 'ফেরাইট (μr = ৮০০)' },
    fluxDensity: {
      en: 'Flux Density (B):',
      hi: 'फ्लक्स घनत्व (B):',
      bn: 'ফ্লাক্স ঘনত্ব (B):'
    },
    inductanceLabel: {
      en: 'Self-Inductance (L):',
      hi: 'स्व-प्रेरकत्व (L):',
      bn: 'ইন্ডাক্ট্যান্স (L):'
    },
    storedEnergyLabel: {
      en: 'Stored Energy (W):',
      hi: 'संचित ऊर्जा (W):',
      bn: 'সঞ্চিত শক্তি (W):'
    },
    inducedVoltage: {
      en: 'Induced EMF (e = -N dΦ/dt):',
      hi: 'प्रेरित EMF (e = -N dΦ/dt):',
      bn: 'আবিষ্ট EMF (e = -N dΦ/dt):'
    },
    lenzRule: {
      en: 'Lenz\'s Law: Induced current creates an opposing magnetic field resisting the magnet\'s motion!',
      hi: 'लेन्ज़ का नियम: प्रेरित धारा ऐसा चुंबकीय क्षेत्र बनाती है जो चुंबक की गति का विरोध करता है!',
      bn: 'লেঞ্জের সূত্র: আবিষ্ট কারেন্ট এমন চৌম্বক ক্ষেত্র তৈরি করে যা চুম্বকের গতির সরাসরি বিরোধিতা করে!'
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Magnet className="w-6 h-6 text-amber-400" />
          <h3 className="font-bold text-lg text-slate-100">{t.title[lang]}</h3>
        </div>
        <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setMode('solenoid')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              mode === 'solenoid' ? 'bg-amber-500 text-slate-950 font-bold shadow' : 'text-slate-300 hover:text-white'
            }`}
          >
            {t.modeSolenoid[lang]}
          </button>
          <button
            onClick={() => setMode('lenz')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
              mode === 'lenz' ? 'bg-indigo-500 text-white font-bold shadow' : 'text-slate-300 hover:text-white'
            }`}
          >
            {t.modeLenz[lang]}
          </button>
        </div>
      </div>

      {/* Main Visual Canvas */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-lg p-4 h-64 flex items-center justify-center overflow-hidden mb-5">
        <svg className="w-full h-full" viewBox="0 0 600 220">
          <defs>
            <linearGradient id="ironGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="copperGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="50%" stopColor="#fdba74" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
            <radialGradient id="magnetFieldGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
              <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
            </radialGradient>
          </defs>

          {mode === 'solenoid' ? (
            <>
              {/* Magnetic Field Flux Lines */}
              {Array.from({ length: 7 }).map((_, i) => {
                const spread = (i - 3) * 22;
                const fieldOpacity = Math.min(1.0, (B / 1.5) * 0.9 + 0.1);
                return (
                  <path
                    key={i}
                    d={`M 120 110 C 60 ${110 + spread * 2}, 60 ${110 - spread * 2}, 180 ${110 - spread} L 420 ${110 - spread} C 540 ${110 - spread * 2}, 540 ${110 + spread * 2}, 480 110`}
                    fill="none"
                    stroke={current > 0 ? '#38bdf8' : '#64748b'}
                    strokeWidth={Math.max(1, Math.min(4, B * 2.5))}
                    strokeDasharray="6,4"
                    strokeOpacity={fieldOpacity}
                    className={isPlaying && current > 0 ? 'animate-pulse' : ''}
                  />
                );
              })}

              {/* Magnetic Core */}
              {coreType !== 'air' && (
                <rect
                  x="180"
                  y="85"
                  width="240"
                  height="50"
                  rx="6"
                  fill={coreType === 'iron' ? 'url(#ironGrad)' : '#1e293b'}
                  stroke={coreType === 'iron' ? '#cbd5e1' : '#475569'}
                  strokeWidth="2"
                />
              )}

              {/* Solenoid Helical Coils */}
              {Array.from({ length: turns }).map((_, i) => {
                const xPos = 190 + (i * 220) / (turns - 1 || 1);
                return (
                  <g key={i}>
                    {/* Back loop */}
                    <ellipse cx={xPos} cy={110} rx="7" ry="32" fill="none" stroke="#9a3412" strokeWidth="4" />
                    {/* Front coil strand */}
                    <path
                      d={`M ${xPos - 5} 78 C ${xPos + 10} 85, ${xPos + 10} 135, ${xPos - 5} 142`}
                      fill="none"
                      stroke="url(#copperGrad)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </g>
                );
              })}

              {/* Pole Labels */}
              {current > 0 && (
                <>
                  <g transform="translate(140, 110)">
                    <circle r="16" fill="#ef4444" />
                    <text x="0" y="5" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="13">
                      N
                    </text>
                  </g>
                  <g transform="translate(460, 110)">
                    <circle r="16" fill="#3b82f6" />
                    <text x="0" y="5" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="13">
                      S
                    </text>
                  </g>
                </>
              )}

              {/* Current Flow Arrow */}
              <g transform="translate(300, 175)">
                <text x="-40" y="4" fill="#fbbf24" fontSize="12" fontWeight="bold">
                  I = {current.toFixed(1)} A
                </text>
                <path d="M 20 0 L 60 0 M 52 -4 L 60 0 L 52 4" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
              </g>
            </>
          ) : (
            <>
              {/* Faraday/Lenz Law Demonstration */}
              {/* Stationary Coil with Galvanometer */}
              <rect x="340" y="80" width="140" height="60" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />
              {Array.from({ length: 8 }).map((_, i) => (
                <ellipse
                  key={i}
                  cx={355 + i * 16}
                  cy={110}
                  rx="6"
                  ry="32"
                  fill="none"
                  stroke="url(#copperGrad)"
                  strokeWidth="4.5"
                />
              ))}

              {/* Moving Bar Magnet */}
              <g transform={`translate(${160 + magnetPos}, 90)`}>
                {/* North Pole */}
                <rect x="0" y="0" width="60" height="40" fill="#ef4444" rx="4" />
                <text x="30" y="25" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="14">
                  N
                </text>
                {/* South Pole */}
                <rect x="60" y="0" width="60" height="40" fill="#3b82f6" rx="4" />
                <text x="90" y="25" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="14">
                  S
                </text>
                {/* Motion Vector Arrow */}
                <path
                  d={motionDirection > 0 ? 'M 130 20 L 160 20 M 152 14 L 160 20 L 152 26' : 'M -10 20 L -40 20 M -32 14 L -40 20 L -32 26'}
                  stroke="#fbbf24"
                  strokeWidth="3"
                  fill="none"
                />
              </g>

              {/* Center Zero Galvanometer */}
              <g transform="translate(410, 190)">
                <rect x="-45" y="-20" width="90" height="30" rx="5" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
                <line x1="-30" y1="-5" x2="30" y2="-5" stroke="#475569" strokeWidth="1" />
                <circle cx="0" cy="-5" r="2" fill="#e2e8f0" />
                {/* Needle Deflection based on inducedEMF */}
                <line
                  x1="0"
                  y1="-5"
                  x2={inducedEMF * 25}
                  y2="-18"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <text x="0" y="6" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">
                  GALVANOMETER
                </text>
              </g>
            </>
          )}
        </svg>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-800/80 p-3 rounded-lg border border-slate-700 mb-4">
        {mode === 'solenoid' ? (
          <>
            <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
              <span className="text-xs text-slate-400 block">{t.fluxDensity[lang]}</span>
              <span className="text-base font-bold text-sky-400">
                {B.toFixed(3)} <span className="text-xs font-normal">Tesla (T)</span>
              </span>
            </div>
            <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
              <span className="text-xs text-slate-400 block">Total Flux (Φ):</span>
              <span className="text-base font-bold text-amber-400">
                {totalFlux.toFixed(1)} <span className="text-xs font-normal">μWb</span>
              </span>
            </div>
            <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
              <span className="text-xs text-slate-400 block">{t.inductanceLabel[lang]}</span>
              <span className="text-base font-bold text-emerald-400">
                {inductance.toFixed(2)} <span className="text-xs font-normal">mH</span>
              </span>
            </div>
            <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
              <span className="text-xs text-slate-400 block">{t.storedEnergyLabel[lang]}</span>
              <span className="text-base font-bold text-purple-400">
                {storedEnergy.toFixed(2)} <span className="text-xs font-normal">mJ</span>
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="col-span-2 p-2 bg-slate-900/60 rounded border border-slate-700/60">
              <span className="text-xs text-slate-400 block">{t.inducedVoltage[lang]}</span>
              <span className="text-base font-bold text-emerald-400">
                {inducedEMF.toFixed(2)} <span className="text-xs font-normal">Volts</span>
              </span>
            </div>
            <div className="col-span-2 p-2 bg-slate-900/60 rounded border border-slate-700/60 flex items-center gap-2">
              <Compass className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-xs text-slate-300 leading-tight">{t.lenzRule[lang]}</span>
            </div>
          </>
        )}
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700">
        {mode === 'solenoid' ? (
          <>
            {/* Current Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                <span>{t.current[lang]}</span>
                <span className="text-amber-400">{current.toFixed(1)} A</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={current}
                onChange={e => setCurrent(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Turns Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                <span>{t.turnsLabel[lang]}</span>
                <span className="text-sky-400">{turns} turns</span>
              </div>
              <input
                type="range"
                min="4"
                max="20"
                step="1"
                value={turns}
                onChange={e => setTurns(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>

            {/* Core Type Selector */}
            <div>
              <span className="block text-xs font-semibold text-slate-300 mb-1">{t.core[lang]}</span>
              <div className="grid grid-cols-3 gap-1">
                {(['air', 'iron', 'ferrite'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setCoreType(type)}
                    className={`py-1 text-xs font-medium rounded transition-all ${
                      coreType === type
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {t[type][lang].split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="col-span-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-xs transition-all ${
                  isPlaying ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500 text-white'
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? 'Pause Motion' : 'Start Motion'}
              </button>
              <button
                onClick={() => {
                  setMagnetPos(0);
                  setMotionDirection(1);
                }}
                className="flex items-center gap-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-semibold text-slate-200"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-300">{t.turnsLabel[lang]}</span>
              <input
                type="range"
                min="4"
                max="20"
                value={turns}
                onChange={e => setTurns(parseInt(e.target.value))}
                className="w-32 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <span className="text-xs font-bold text-indigo-400">{turns}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
