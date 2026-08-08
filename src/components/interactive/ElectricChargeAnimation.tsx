import React, { useState, useEffect } from 'react';
import { Sliders, ArrowLeftRight, HelpCircle } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';

interface ElectricChargeAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Electric Charge & Force Simulator',
    subtitle: 'Observe electrostatics interaction: repulsion between like charges and attraction between unlike charges.',
    charge1: 'Charge Q₁',
    charge2: 'Charge Q₂',
    typePositive: 'Positive (+Q)',
    typeNegative: 'Negative (-Q)',
    distance: 'Distance (r)',
    forceMagnitude: 'Calculated Force (F)',
    interactionMode: 'Interaction Result',
    repulsion: 'Repulsion Force (Pushed Apart)',
    attraction: 'Attraction Force (Pulled Together)',
    calloutTitle: 'Coulomb\'s Law of Electrostatics',
    calloutText: 'Like charges repel (+ and +, - and -); unlike charges attract (+ and -). The force between two point charges is directly proportional to the product of charges and inversely proportional to the square of the distance between them.',
    formulaText: 'F = k · (|Q₁ · Q₂| / r²)',
    q1Label: 'Q₁ Magnitude',
    q2Label: 'Q₂ Magnitude',
  },
  hi: {
    title: 'विद्युत आवेश एवं बल सिम्युलेटर',
    subtitle: 'स्थिरविद्युत परस्पर क्रिया देखें: समान आवेशों में प्रतिकर्षण और विपरीत आवेशों में आकर्षण।',
    charge1: 'आवेश Q₁',
    charge2: 'आवेश Q₂',
    typePositive: 'धनात्मक (+Q)',
    typeNegative: 'ऋणात्मक (-Q)',
    distance: 'दूरी (r)',
    forceMagnitude: 'गणना किया गया बल (F)',
    interactionMode: 'परस्पर क्रिया परिणाम',
    repulsion: 'प्रतिकर्षण बल (दूर धकेलता है)',
    attraction: 'आकर्षण बल (पास खींचता है)',
    calloutTitle: 'कूलॉम का स्थिरविद्युत नियम',
    calloutText: 'सजातीय आवेश परस्पर प्रतिकर्षित होते हैं (+ और +, - और -); विजातीय आवेश आकर्षित होते हैं (+ और -)। दो बिंदु आवेशों के बीच बल उनके आवेशों के गुणनफल के समानुपाती और दूरी के वर्ग के व्युत्क्रमानुपाती होता है।',
    formulaText: 'F = k · (|Q₁ · Q₂| / r²)',
    q1Label: 'Q₁ का मान',
    q2Label: 'Q₂ का मान',
  },
  bn: {
    title: 'তড়িৎ আধান ও বল সিমুলেটর',
    subtitle: 'স্থিরতড়িৎ মিথস্ক্রিয়া দেখুন: সম আধানের বিকর্ষণ এবং বিপরীত আধানের আকর্ষণ।',
    charge1: 'আধান Q₁',
    charge2: 'আধান Q₂',
    typePositive: 'ধনাত্মক (+Q)',
    typeNegative: 'ঋণাত্মক (-Q)',
    distance: 'দূরত্ব (r)',
    forceMagnitude: 'গণনাকৃত বল (F)',
    interactionMode: 'মিথস্ক্রিয়ার ফল',
    repulsion: 'বিকর্ষণ বল (দূরে ঠেলে দেয়)',
    attraction: 'আকর্ষণ বল (কাছে টানে)',
    calloutTitle: 'কুলম্বের স্থিরতড়িৎ সূত্র',
    calloutText: 'সমধর্মী আধান পরস্পরকে বিকর্ষণ করে (+ ও +, - ও -); বিপরীতধর্মী আধান আকর্ষণ করে (+ ও -)। দুই বিন্দু আধানের মধ্যকার বল তাদের আধানদ্বয়ের গুণফলের সমানুপাতিক এবং দূরত্বের বর্গের ব্যস্তানুপাতিক।',
    formulaText: 'F = k · (|Q₁ · Q₂| / r²)',
    q1Label: 'Q₁ মাত্রা',
    q2Label: 'Q₂ মাত্রা',
  }
};

export const ElectricChargeAnimation: React.FC<ElectricChargeAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [type1, setType1] = useState<'pos' | 'neg'>('pos');
  const [type2, setType2] = useState<'pos' | 'neg'>('neg');
  const [q1Val, setQ1Val] = useState<number>(2); // 1 to 5
  const [q2Val, setQ2Val] = useState<number>(2); // 1 to 5
  const [distance, setDistance] = useState<number>(3); // 1 to 5 (1 = close, 5 = far)
  const [animOffset, setAnimOffset] = useState<number>(0);

  const isLikeCharge = type1 === type2;
  // Coulomb's law relative magnitude: F ~ (q1 * q2) / (r^2)
  const rawForce = (q1Val * q2Val) / (distance * distance);
  const relativeForce = Math.min(100, Math.max(5, rawForce * 15));

  const handleReset = () => {
    setType1('pos');
    setType2('neg');
    setQ1Val(2);
    setQ2Val(2);
    setDistance(3);
  };

  // Subtle breathing pulse for force arrows
  useEffect(() => {
    let frameId: number;
    let tVal = 0;
    const animate = () => {
      tVal += 0.05;
      setAnimOffset(Math.sin(tVal) * 4);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Visual position offset based on distance slider
  const centerX = 170;
  const separation = 40 + distance * 22; // 62px to 150px spacing
  const x1 = centerX - separation / 2;
  const x2 = centerX + separation / 2;

  // Arrow directions:
  // If repulsion (like charges): arrow 1 points left (-), arrow 2 points right (+)
  // If attraction (unlike charges): arrow 1 points right (+), arrow 2 points left (-)
  const arrowDirection = isLikeCharge ? 'outward' : 'inward';

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
        {/* Visual Animation Canvas */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            <span>Particle Canvas</span>
            <span className={isLikeCharge ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>
              {isLikeCharge ? t.repulsion : t.attraction}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative min-h-[220px]">
            <svg viewBox="0 0 340 200" className="w-full max-w-md h-52 select-none">
              {/* Background Electric Field Grid Lines */}
              <defs>
                <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                </pattern>
                <radialGradient id="posGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="negGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
              </defs>

              <rect x="0" y="0" width="340" height="200" fill="url(#gridPattern)" rx="8" />

              {/* Distance line */}
              <line x1={x1} y1="150" x2={x2} y2="150" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1={x1} y1="145" x2={x1} y2="155" stroke="#64748b" strokeWidth="1.5" />
              <line x1={x2} y1="145" x2={x2} y2="155" stroke="#64748b" strokeWidth="1.5" />
              <text x={centerX} y="165" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">
                r = {distance} cm
              </text>

              {/* Particle 1 Glow & Body */}
              <circle cx={x1} cy="90" r={20 + q1Val * 3} fill={type1 === 'pos' ? 'url(#posGlow)' : 'url(#negGlow)'} />
              <circle cx={x1} cy="90" r={16 + q1Val * 2} fill={type1 === 'pos' ? '#dc2626' : '#2563eb'} stroke="#ffffff" strokeWidth="2" />
              <text x={x1} y="95" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="bold">
                {type1 === 'pos' ? '+' : '-'}
              </text>
              <text x={x1} y="52" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="bold" fontFamily="monospace">
                Q₁ = {type1 === 'pos' ? '+' : '-'}{q1Val} μC
              </text>

              {/* Particle 2 Glow & Body */}
              <circle cx={x2} cy="90" r={20 + q2Val * 3} fill={type2 === 'pos' ? 'url(#posGlow)' : 'url(#negGlow)'} />
              <circle cx={x2} cy="90" r={16 + q2Val * 2} fill={type2 === 'pos' ? '#dc2626' : '#2563eb'} stroke="#ffffff" strokeWidth="2" />
              <text x={x2} y="95" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="bold">
                {type2 === 'pos' ? '+' : '-'}
              </text>
              <text x={x2} y="52" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="bold" fontFamily="monospace">
                Q₂ = {type2 === 'pos' ? '+' : '-'}{q2Val} μC
              </text>

              {/* Force Vectors / Arrows */}
              {arrowDirection === 'outward' ? (
                <>
                  {/* Leftward Force on Particle 1 */}
                  <g transform={`translate(${x1 - 25 - animOffset}, 90)`}>
                    <line x1="0" y1="0" x2="-25" y2="0" stroke="#f59e0b" strokeWidth="3" />
                    <polygon points="-25,0 -15,-5 -15,5" fill="#f59e0b" />
                    <text x="-15" y="-8" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="monospace">F_repel</text>
                  </g>
                  {/* Rightward Force on Particle 2 */}
                  <g transform={`translate(${x2 + 25 + animOffset}, 90)`}>
                    <line x1="0" y1="0" x2="25" y2="0" stroke="#f59e0b" strokeWidth="3" />
                    <polygon points="25,0 15,-5 15,5" fill="#f59e0b" />
                    <text x="15" y="-8" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="monospace">F_repel</text>
                  </g>
                </>
              ) : (
                <>
                  {/* Rightward Force on Particle 1 (towards Q2) */}
                  <g transform={`translate(${x1 + 25 + animOffset}, 90)`}>
                    <line x1="0" y1="0" x2="25" y2="0" stroke="#10b981" strokeWidth="3" />
                    <polygon points="25,0 15,-5 15,5" fill="#10b981" />
                    <text x="12" y="-8" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">F_attract</text>
                  </g>
                  {/* Leftward Force on Particle 2 (towards Q1) */}
                  <g transform={`translate(${x2 - 25 - animOffset}, 90)`}>
                    <line x1="0" y1="0" x2="-25" y2="0" stroke="#10b981" strokeWidth="3" />
                    <polygon points="-25,0 -15,-5 -15,5" fill="#10b981" />
                    <text x="-12" y="-8" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">F_attract</text>
                  </g>
                </>
              )}
            </svg>

            <div className="w-full text-center mt-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs flex justify-around">
              <span className="text-slate-400">Interaction: <strong className={isLikeCharge ? 'text-amber-400' : 'text-emerald-400'}>{isLikeCharge ? t.repulsion : t.attraction}</strong></span>
              <span className="text-slate-400">Relative Force: <strong className="text-cyan-300 font-mono">{relativeForce.toFixed(1)} N (rel)</strong></span>
            </div>
          </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 print-hidden">
            {/* Q1 Controls */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span>{t.charge1}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setType1('pos')}
                    className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-all ${
                      type1 === 'pos' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                    aria-label="Set Charge 1 Positive"
                  >
                    {t.typePositive}
                  </button>
                  <button
                    onClick={() => setType1('neg')}
                    className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-all ${
                      type1 === 'neg' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                    aria-label="Set Charge 1 Negative"
                  >
                    {t.typeNegative}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400 w-20">{t.q1Label}:</span>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={q1Val}
                  onChange={(e) => setQ1Val(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  aria-label="Charge 1 magnitude"
                />
                <span className="text-xs font-mono text-cyan-300 w-8">{q1Val}μC</span>
              </div>
            </div>

            {/* Q2 Controls */}
            <div className="space-y-2 border-t border-slate-800/80 pt-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span>{t.charge2}</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setType2('pos')}
                    className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-all ${
                      type2 === 'pos' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                    aria-label="Set Charge 2 Positive"
                  >
                    + Positive
                  </button>
                  <button
                    onClick={() => setType2('neg')}
                    className={`px-2 py-0.5 rounded text-xs font-mono font-bold transition-all ${
                      type2 === 'neg' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                    aria-label="Set Charge 2 Negative"
                  >
                    - Negative
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400 w-20">{t.q2Label}:</span>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={q2Val}
                  onChange={(e) => setQ2Val(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  aria-label="Charge 2 magnitude"
                />
                <span className="text-xs font-mono text-cyan-300 w-8">{q2Val}μC</span>
              </div>
            </div>

            {/* Distance Slider */}
            <div className="space-y-1.5 border-t border-slate-800/80 pt-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{t.distance}</span>
                </span>
                <span className="font-mono text-cyan-300">{distance} cm</span>
              </div>
              <input
                type="range"
                min={1}
                max={5}
                step={1}
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                aria-label="Distance slider"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 cm (Close / High F)</span>
                <span>5 cm (Far / Low F)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
