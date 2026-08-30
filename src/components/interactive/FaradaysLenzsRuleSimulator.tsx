import React, { useState, useEffect, useId } from 'react';
import { Language } from '../../types';
import { Play, Pause, RotateCcw, Zap, Magnet, ShieldAlert, ArrowLeftRight, Gauge, Activity, RefreshCw } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
  focusMode?: 'faraday' | 'lenz' | 'all';
}

export const FaradaysLenzsRuleSimulator: React.FC<Props> = ({
  currentLanguage,
  language,
  focusMode = 'all'
}) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Core Simulation States
  const [velocity, setVelocity] = useState<number>(2.5); // m/s magnitude
  const [direction, setDirection] = useState<1 | -1>(1); // 1 = moving right into coil, -1 = moving left out
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [magnetPolarity, setMagnetPolarity] = useState<'N-left' | 'N-right'>('N-right'); // N-right means North faces coil (assuming coil is on right)
  const [turns, setTurns] = useState<number>(200); // 50 to 500
  const [coreMaterial, setCoreMaterial] = useState<'air' | 'ferrite' | 'iron'>('iron');
  const [magnetX, setMagnetX] = useState<number>(-120); // -200 (far left) to 40 (inside coil)
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  const corePermeability = {
    air: 1,
    ferrite: 600,
    iron: 2000
  };

  const mu_r = corePermeability[coreMaterial];
  const coilCenterX = 70;
  const coilRadius = 45;

  // Animation Frame Loop
  useEffect(() => {
    if (!isPlaying || reducedMotion) return;

    const interval = setInterval(() => {
      setMagnetX(prev => {
        const next = prev + direction * (velocity * 1.8);
        if (next >= 40) {
          setDirection(-1);
          return 40;
        }
        if (next <= -180) {
          setDirection(1);
          return -180;
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isPlaying, direction, velocity, reducedMotion]);

  // Distance from magnet tip to coil center
  const magnetTipX = magnetPolarity === 'N-right' ? magnetX + 70 : magnetX + 70;
  const dist = Math.abs(coilCenterX - magnetTipX);

  // Magnetic Flux model: Gaussian-like flux coupling as magnet nears coil
  const baseB0 = 0.04; // 40 mT dipole surface
  const coreMultiplier = coreMaterial === 'iron' ? 2.5 : coreMaterial === 'ferrite' ? 1.8 : 1.0;
  const couplingFactor = Math.exp(-Math.pow(dist / 65, 2));
  const fluxSign = magnetPolarity === 'N-right' ? 1 : -1;
  const currentFluxWb = baseB0 * coreMultiplier * (Math.PI * Math.pow(coilRadius * 1e-3, 2)) * couplingFactor * fluxSign;

  // Rate of change of flux dPhi/dt = (dPhi/dx) * (dx/dt)
  const effectiveSpeed = (isPlaying && !reducedMotion ? velocity * direction : 0);
  const dCoupling_dx = - (2 * (coilCenterX - magnetTipX) / Math.pow(65, 2)) * couplingFactor * (-direction);
  // Induced EMF: e = - N * dPhi/dt
  const rateOfFluxChange = (baseB0 * coreMultiplier * (Math.PI * Math.pow(coilRadius * 1e-3, 2))) * dCoupling_dx * effectiveSpeed * 10;
  const inducedEMF = - turns * rateOfFluxChange * fluxSign;

  // Coil Circuit Resistance and Current
  const coilResistance = 2.5 + (turns * 0.01); // Ohms
  const inducedCurrent = inducedEMF / coilResistance; // Amperes
  const galvanometerDeflection = Math.max(-50, Math.min(50, inducedCurrent * 120));

  // Lenz Law Opposing Pole at coil left entrance
  // If North enters (dx > 0, N-right), induced current creates North pole to repel.
  // If North leaves (dx < 0, N-right), induced current creates South pole to attract.
  let coilLeftPole: 'N' | 'S' | 'None' = 'None';
  let lenzActionText = '';
  if (Math.abs(inducedCurrent) > 0.005) {
    if (magnetPolarity === 'N-right') {
      if (direction === 1) {
        coilLeftPole = 'N'; // Repulsion
        lenzActionText = lang === 'hi' ? 'प्रतिकर्षण (उत्तरी ध्रुव बनकर पास आने का विरोध)' : lang === 'bn' ? 'বিকর্ষণ (উত্তর মেরু সৃষ্টি করে আগমনে বাধা)' : 'Repulsion (Creates North Pole to oppose entry)';
      } else {
        coilLeftPole = 'S'; // Attraction
        lenzActionText = lang === 'hi' ? 'आकर्षण (दक्षिणी ध्रुव बनकर दूर जाने का विरोध)' : lang === 'bn' ? 'আকর্ষণ (দক্ষিণ মেরু সৃষ্টি করে দূরযাত্রায় বাধা)' : 'Attraction (Creates South Pole to oppose leaving)';
      }
    } else {
      if (direction === 1) {
        coilLeftPole = 'S';
        lenzActionText = lang === 'hi' ? 'प्रतिकर्षण (दक्षिणी ध्रुव बनकर पास आने का विरोध)' : lang === 'bn' ? 'বিকর্ষণ (দক্ষিণ মেরু সৃষ্টি করে আগমনে বাধা)' : 'Repulsion (Creates South Pole to oppose entry)';
      } else {
        coilLeftPole = 'N';
        lenzActionText = lang === 'hi' ? 'आकर्षण (उत्तरी ध्रुव बनकर दूर जाने का विरोध)' : lang === 'bn' ? 'আকর্ষণ (উত্তর মেরু সৃষ্টি করে দূরযাত্রায় বাধা)' : 'Attraction (Creates North Pole to oppose leaving)';
      }
    }
  }

  const mechanicalPowerW = Math.abs(inducedEMF * inducedCurrent);

  const t = {
    title: {
      en: "Faraday's & Lenz's Law Electromagnetic Induction Simulator",
      hi: 'फैराडे एवं लेंज के नियम का विद्युत चुंबकीय प्रेरण सिम्युलेटर',
      bn: 'ফ্যারাডে ও লেনজের সূত্রের তড়িৎচুম্বকীয় আবেশ সিমুলেটর'
    },
    subtitle: {
      en: 'Real-time flux linkage, Lenz opposing force, and energy conservation dynamics',
      hi: 'वास्तविक समय फ्लक्स लिंकेज, लेंज विरोधी बल एवं ऊर्जा संरक्षण गतिकी',
      bn: 'রিয়েল-টাইম ফ্লাক্স লিংকেজ, লেনজের বিরোধী বল ও শক্তি সংরক্ষণ বিশ্লেষণ'
    },
    controls: {
      en: 'Simulation Controls',
      hi: 'सिम्युलेटर नियंत्रण',
      bn: 'সিমুলেশন নিয়ন্ত্রণ'
    },
    velocity: {
      en: 'Magnet Velocity (v):',
      hi: 'चुंबक का वेग (v):',
      bn: 'চুম্বকের গতিবেগ (v):'
    },
    polarity: {
      en: 'Magnet Facing Pole:',
      hi: 'सामने वाला चुंबकीय ध्रुव:',
      bn: 'সামনের চৌম্বক মেরু:'
    },
    turns: {
      en: 'Coil Turns (N):',
      hi: 'कुंडली के फेरे (N):',
      bn: 'কয়েলের পাকসংখ্যা (N):'
    },
    core: {
      en: 'Magnetic Core Material:',
      hi: 'चुंबकीय कोर पदार्थ:',
      bn: 'চৌম্বক কোর উপাদান:'
    },
    air: { en: 'Air Core (μr = 1)', hi: 'वायु कोर (μr = 1)', bn: 'বায়ু কোর (μr = ১)' },
    ferrite: { en: 'Ferrite Core (μr = 600)', hi: 'फेराइट कोर (μr = 600)', bn: 'ফেরাইট কোর (μr = ৬০০)' },
    iron: { en: 'Soft Iron (μr = 2000)', hi: 'नर्म लोहा (μr = 2000)', bn: 'নরম লোহা (μr = ২০০০)' },
    inducedEmf: {
      en: 'Induced EMF (e = -N dΦ/dt):',
      hi: 'प्रेरित विद्युत वाहक बल (e = -N dΦ/dt):',
      bn: 'আবিষ্ট ইএমএফ (e = -N dΦ/dt):'
    },
    inducedCurr: {
      en: 'Induced Current (i = e/R):',
      hi: 'प्रेरित धारा (i = e/R):',
      bn: 'আবিষ্ট প্রবাহ (i = e/R):'
    },
    galvanometer: {
      en: 'Galvanometer (G)',
      hi: 'गैल्वेनोमीटर (G)',
      bn: 'গ্যালভানোমিটার (G)'
    },
    lenzLawStatus: {
      en: "Lenz's Law Dynamic Reaction:",
      hi: 'लेंज के नियम की प्रतिक्रिया:',
      bn: 'লেনজের সূত্রের তাৎক্ষণিক প্রতিক্রিয়া:'
    },
    energyConservation: {
      en: 'Energy Conservation Audit:',
      hi: 'ऊर्जा संरक्षण संतुलन:',
      bn: 'শক্তি সংরক্ষণ নিরীক্ষা:'
    },
    mechWork: {
      en: 'Mechanical Work Input = Electrical Power Output + Joule Heat',
      hi: 'यांत्रिक कार्य इनपुट = विद्युत शक्ति आउटपुट + जूल ऊष्मा',
      bn: 'যান্ত্রিক শক্তি ইনপুট = বৈদ্যুতিক শক্তি আউটপুট + জুল তাপ'
    },
    stepForward: { en: 'Move Right →', hi: 'दाएं बढ़ाएं →', bn: 'ডানে সরান →' },
    stepBackward: { en: '← Move Left', hi: '← बाएं बढ़ाएं', bn: '← বামে সরান' },
    reducedMotionLabel: {
      en: 'Reduced Motion Mode',
      hi: 'मंद गति मोड',
      bn: 'ধীর গতি মোড'
    }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-700/70 rounded-xl p-4 sm:p-6 shadow-2xl text-slate-100 font-sans my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
              <Zap className="w-5 h-5" />
            </span>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {t.title[lang]}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-pressed={isPlaying}
            aria-label={isPlaying ? 'Pause simulation' : 'Play simulation'}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-all shadow-md active:scale-95 focus:ring-2 focus:ring-cyan-400 outline-none"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'Pause' : 'Animate'}</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMagnetX(-120);
              setDirection(1);
            }}
            aria-label="Reset simulation"
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all border border-slate-700 focus:ring-2 focus:ring-slate-400 outline-none"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage (SVG Canvas) */}
      <div className="relative w-full bg-slate-950 rounded-xl border border-slate-800 p-2 sm:p-4 overflow-hidden mb-6 flex flex-col items-center">
        <svg
          viewBox="-240 -120 480 250"
          className="w-full max-w-2xl h-56 sm:h-64 select-none"
          role="img"
          aria-label="Electromagnetic induction interactive apparatus with moving bar magnet and coil"
        >
          <defs>
            {/* Magnet Gradients */}
            <linearGradient id="northPoleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <linearGradient id="southPoleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="ironCoreGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="glow" />
              <feComposite in="SourceGraphic" in2="glow" operator="over" />
            </filter>
          </defs>

          {/* Magnetic Field Lines from Bar Magnet */}
          <g opacity={Math.min(1, 0.4 + velocity * 0.15)}>
            {[-40, -20, 20, 40].map((offsetY, idx) => (
              <path
                key={idx}
                d={`M ${magnetX + 35} ${offsetY * 0.4} Q ${magnetX + 35} ${offsetY * 1.6} ${magnetX - 45} ${offsetY * 1.4}`}
                fill="none"
                stroke={magnetPolarity === 'N-right' ? '#f87171' : '#60a5fa'}
                strokeWidth="1.5"
                strokeDasharray="4 3"
                opacity="0.6"
              />
            ))}
          </g>

          {/* Core Structure inside coil */}
          {coreMaterial !== 'air' && (
            <rect
              x={coilCenterX - 45}
              y="-22"
              width="90"
              height="44"
              rx="4"
              fill="url(#ironCoreGrad)"
              stroke="#64748b"
              strokeWidth="1.5"
            />
          )}

          {/* Coil Form & Turns */}
          <g>
            {/* Coil Back Loops */}
            {Array.from({ length: 9 }).map((_, i) => {
              const xPos = coilCenterX - 40 + i * 10;
              return (
                <path
                  key={`back-${i}`}
                  d={`M ${xPos} -35 A 8 35 0 0 0 ${xPos + 8} 35`}
                  fill="none"
                  stroke="#b45309"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              );
            })}

            {/* Coil Front Loops with Dynamic Current Glow */}
            {Array.from({ length: 9 }).map((_, i) => {
              const xPos = coilCenterX - 40 + i * 10;
              const isGlowing = Math.abs(inducedCurrent) > 0.005;
              const currentStroke = isGlowing
                ? inducedCurrent > 0
                  ? '#34d399' // Green forward
                  : '#f59e0b' // Amber reversed
                : '#d97706';
              return (
                <path
                  key={`front-${i}`}
                  d={`M ${xPos + 8} 35 A 8 35 0 0 0 ${xPos + 10} -35`}
                  fill="none"
                  stroke={currentStroke}
                  strokeWidth={isGlowing ? '5' : '3.5'}
                  filter={isGlowing ? 'url(#glow)' : undefined}
                  strokeLinecap="round"
                />
              );
            })}
          </g>

          {/* Induced Pole Marker on Coil Entrance */}
          {coilLeftPole !== 'None' && (
            <g transform={`translate(${coilCenterX - 55}, 0)`}>
              <circle cx="0" cy="0" r="16" fill={coilLeftPole === 'N' ? '#dc2626' : '#2563eb'} opacity="0.9" />
              <text x="0" y="5" fill="#ffffff" fontWeight="bold" fontSize="14" textAnchor="middle">
                {coilLeftPole}
              </text>
              <text x="0" y="-22" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
                {lang === 'hi' ? 'प्रेरित ध्रुव' : lang === 'bn' ? 'আবিষ্ট মেরু' : 'Induced Pole'}
              </text>
            </g>
          )}

          {/* Bar Magnet (Movable) */}
          <g transform={`translate(${magnetX}, 0)`}>
            {/* South Half */}
            <rect
              x={magnetPolarity === 'N-right' ? -35 : 0}
              y="-20"
              width="35"
              height="40"
              rx="3"
              fill="url(#southPoleGrad)"
              stroke="#1e3a8a"
              strokeWidth="1.5"
            />
            <text
              x={magnetPolarity === 'N-right' ? -18 : 18}
              y="6"
              fill="#ffffff"
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              S
            </text>

            {/* North Half */}
            <rect
              x={magnetPolarity === 'N-right' ? 0 : -35}
              y="-20"
              width="35"
              height="40"
              rx="3"
              fill="url(#northPoleGrad)"
              stroke="#7f1d1d"
              strokeWidth="1.5"
            />
            <text
              x={magnetPolarity === 'N-right' ? 18 : -18}
              y="6"
              fill="#ffffff"
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              N
            </text>

            {/* Velocity Vector Arrow */}
            {isPlaying && (
              <g transform={`translate(${magnetPolarity === 'N-right' ? 0 : 0}, -32)`}>
                <line
                  x1={direction === 1 ? -15 : 15}
                  y1="0"
                  x2={direction === 1 ? 25 : -25}
                  y2="0"
                  stroke="#fbbf24"
                  strokeWidth="3"
                />
                <polygon
                  points={direction === 1 ? '25,-4 32,0 25,4' : '-25,-4 -32,0 -25,4'}
                  fill="#fbbf24"
                />
                <text x="0" y="-7" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">
                  v = {(velocity * direction).toFixed(1)} m/s
                </text>
              </g>
            )}
          </g>

          {/* Connecting Wires from Coil to Galvanometer */}
          <path
            d={`M ${coilCenterX - 35} 35 L ${coilCenterX - 35} 80 L 10 80`}
            fill="none"
            stroke="#64748b"
            strokeWidth="2.5"
          />
          <path
            d={`M ${coilCenterX + 45} 35 L ${coilCenterX + 45} 95 L 30 95 L 30 80`}
            fill="none"
            stroke="#64748b"
            strokeWidth="2.5"
          />

          {/* Galvanometer Sub-Assembly */}
          <g transform="translate(0, 80)">
            {/* Outer Instrument Housing */}
            <circle cx="0" cy="0" r="32" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="28" fill="#1e293b" />

            {/* Scale Dial */}
            <path d="M -20 -10 A 24 24 0 0 1 20 -10" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Center Zero & Markers */}
            <line x1="0" y1="-26" x2="0" y2="-21" stroke="#38bdf8" strokeWidth="2" />
            <line x1="-16" y1="-17" x2="-12" y2="-15" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="16" y1="-17" x2="12" y2="-15" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="0" y="-12" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">0</text>
            <text x="-18" y="-9" fill="#f87171" fontSize="7" textAnchor="middle">-</text>
            <text x="18" y="-9" fill="#34d399" fontSize="7" textAnchor="middle">+</text>

            {/* Pivot Needle */}
            <g transform={`rotate(${galvanometerDeflection})`}>
              <line x1="0" y1="5" x2="0" y2="-24" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
            </g>

            {/* Label */}
            <text x="0" y="18" fill="#e2e8f0" fontSize="10" fontWeight="bold" textAnchor="middle">
              {t.galvanometer[lang]}
            </text>
          </g>
        </svg>

        {/* Live Status Bar under SVG */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-2 text-center text-xs">
          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
            <span className="text-slate-400 block">{lang === 'hi' ? 'चुंबकीय फ्लक्स (Φ)' : lang === 'bn' ? 'চৌম্বক ফ্লাক্স (Φ)' : 'Magnetic Flux (Φ)'}</span>
            <span className="font-mono text-cyan-400 font-bold text-sm">
              {(currentFluxWb * 1e6).toFixed(1)} μWb
            </span>
          </div>
          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
            <span className="text-slate-400 block">{lang === 'hi' ? 'फ्लक्स परिवर्तन (dΦ/dt)' : lang === 'bn' ? 'ফ্লাক্স পরিবর্তন (dΦ/dt)' : 'Rate (dΦ/dt)'}</span>
            <span className="font-mono text-amber-400 font-bold text-sm">
              {(rateOfFluxChange * 1e3).toFixed(2)} mWb/s
            </span>
          </div>
          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
            <span className="text-slate-400 block">{t.inducedEmf[lang]}</span>
            <span className={`font-mono font-bold text-sm ${Math.abs(inducedEMF) > 0.05 ? 'text-emerald-400' : 'text-slate-300'}`}>
              {(inducedEMF).toFixed(3)} V
            </span>
          </div>
          <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
            <span className="text-slate-400 block">{t.inducedCurr[lang]}</span>
            <span className="font-mono text-emerald-400 font-bold text-sm">
              {(inducedCurrent * 1000).toFixed(1)} mA
            </span>
          </div>
        </div>
      </div>

      {/* Lenz's Law & Energy Flow Callout */}
      <div className="bg-slate-950/70 border border-cyan-900/40 rounded-xl p-3 sm:p-4 mb-6">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-bold text-amber-300 block mb-1">
              {t.lenzLawStatus[lang]} {lenzActionText || (lang === 'hi' ? 'स्थिर अवस्था (कोई विरोधी बल नहीं)' : lang === 'bn' ? 'স্থির অবস্থা (কোনো বিরোধী বল নেই)' : 'Stationary (Zero Opposing Force)')}
            </span>
            <p className="text-slate-300 leading-relaxed">
              {lang === 'hi'
                ? `लेंज का नियम: प्रेरित ईएमएफ का ऋणात्मक चिह्न (-N dΦ/dt) यह सुनिश्चित करता है कि प्रेरित धारा उस कारण (चुंबक की गति) का विरोध करती है जिससे वह उत्पन्न हुई है। यांत्रिक कार्य = ${(mechanicalPowerW * 1000).toFixed(2)} mW विद्युत ऊर्जा में रूपांतरित होता है।`
                : lang === 'bn'
                ? `লেনজের সূত্র: আবিষ্ট ইএমএফ-এর ঋণাত্মক চিহ্ন (-N dΦ/dt) নিশ্চিত করে যে আবিষ্ট প্রবাহ সর্বদা চুম্বকের আপেক্ষিক গতির বিরোধিতা করে। ইনপুট যান্ত্রিক কাজ = ${(mechanicalPowerW * 1000).toFixed(2)} mW বৈদ্যুতিক শক্তিতে রূপান্তরিত হচ্ছে।`
                : `Lenz's Law Principle: The negative sign in Faraday's law ($e = -N \\frac{d\\Phi}{dt}$) enforces energy conservation. The induced current creates a magnetic pole that mechanically opposes magnet motion. Mechanical input power = ${(mechanicalPowerW * 1000).toFixed(2)} mW converted to electrical power.`}
            </p>
          </div>
        </div>
      </div>

      {/* Parameter Control Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
        {/* Velocity Slider */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-slate-300">
            <label htmlFor={`${controlId}-velocity`} className="font-semibold">{t.velocity[lang]}</label>
            <span className="font-mono text-cyan-400 font-bold">{velocity.toFixed(1)} m/s</span>
          </div>
          <input
            id={`${controlId}-velocity`}
            type="range"
            min="0.5"
            max="5.0"
            step="0.5"
            value={velocity}
            onChange={(e) => setVelocity(parseFloat(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>0.5 m/s (Slow)</span>
            <span>5.0 m/s (Fast)</span>
          </div>
        </div>

        {/* Coil Turns Slider */}
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center text-slate-300">
            <label htmlFor={`${controlId}-turns`} className="font-semibold">{t.turns[lang]}</label>
            <span className="font-mono text-emerald-400 font-bold">{turns} turns</span>
          </div>
          <input
            id={`${controlId}-turns`}
            type="range"
            min="50"
            max="500"
            step="50"
            value={turns}
            onChange={(e) => setTurns(parseInt(e.target.value, 10))}
            className="w-full accent-emerald-500 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-500">
            <span>50 turns</span>
            <span>500 turns</span>
          </div>
        </div>

        {/* Polarity Toggle */}
        <div className="flex flex-col gap-1.5">
          <span className="font-semibold text-slate-300">{t.polarity[lang]}</span>
          <div className="grid grid-cols-2 gap-1.5">
            <button
              type="button"
              onClick={() => setMagnetPolarity('N-right')}
              aria-pressed={magnetPolarity === 'N-right'}
              className={`py-2 px-2 rounded-lg font-bold transition-all text-center ${
                magnetPolarity === 'N-right'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              N-Pole Forward
            </button>
            <button
              type="button"
              onClick={() => setMagnetPolarity('N-left')}
              aria-pressed={magnetPolarity === 'N-left'}
              className={`py-2 px-2 rounded-lg font-bold transition-all text-center ${
                magnetPolarity === 'N-left'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              S-Pole Forward
            </button>
          </div>
        </div>

        {/* Core Material Selector */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor={`${controlId}-core`} className="font-semibold text-slate-300">{t.core[lang]}</label>
          <select
            id={`${controlId}-core`}
            value={coreMaterial}
            onChange={(e) => setCoreMaterial(e.target.value as any)}
            className="bg-slate-900 border border-slate-700 text-slate-200 rounded-lg p-2 font-medium focus:ring-2 focus:ring-cyan-400 outline-none"
          >
            <option value="air">{t.air[lang]}</option>
            <option value="ferrite">{t.ferrite[lang]}</option>
            <option value="iron">{t.iron[lang]}</option>
          </select>
        </div>
      </div>

      {/* Manual Step Controls & Reduced Motion Support */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setIsPlaying(false);
              setDirection(-1);
              setMagnetX(prev => Math.max(-180, prev - 15));
            }}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 font-medium transition-all"
          >
            {t.stepBackward[lang]}
          </button>
          <button
            type="button"
            onClick={() => {
              setIsPlaying(false);
              setDirection(1);
              setMagnetX(prev => Math.min(40, prev + 15));
            }}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 font-medium transition-all"
          >
            {t.stepForward[lang]}
          </button>
        </div>

        <label className="flex items-center gap-2 text-slate-400 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={reducedMotion}
            onChange={(e) => {
              setReducedMotion(e.target.checked);
              if (e.target.checked) setIsPlaying(false);
            }}
            className="rounded accent-cyan-500"
          />
          <span>{t.reducedMotionLabel[lang]}</span>
        </label>
      </div>
    </div>
  );
};
