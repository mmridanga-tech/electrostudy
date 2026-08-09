import React, { useState, useEffect } from 'react';
import { Sliders, RotateCcw, CheckCircle2, AlertCircle, ArrowRightLeft } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface KCLNodeAnimationProps {
  currentLanguage: Language;
}

interface Branch {
  id: string;
  name: string;
  current: number; // in Amperes
  dir: 'in' | 'out'; // entering or leaving node
  color: string;
  angle: number; // in degrees for visual radial layout
}

const TRANSLATIONS = {
  en: {
    title: "Kirchhoff's Current Law (KCL) Interactive Node",
    subtitle: 'Observe conservation of electric charge at a circuit node. Sum of currents entering a node equals sum of currents leaving.',
    branchCurrents: 'Branch Currents & Directions',
    entering: 'Entering (In)',
    leaving: 'Leaving (Out)',
    totalEntering: 'Total Entering (ΣI_in)',
    totalLeaving: 'Total Leaving (ΣI_out)',
    imbalance: 'KCL Imbalance (|ΣI_in - ΣI_out|)',
    statusBalanced: 'BALANCED (KCL Satisfied)',
    statusUnbalanced: 'UNBALANCED (Violates Charge Conservation)',
    autoBalance: 'Auto-Balance Branch 5',
    reset: 'Reset Node',
    calloutTitle: 'KCL Principle (Conservation of Charge)',
    calloutText: 'At any electrical node: ΣI_entering = ΣI_leaving or ΣI = 0. Charge cannot accumulate at a zero-capacitance node.',
    formulaText: 'ΣI_in = ΣI_out   ⇒   I₁ + I₂ + ... = I₃ + I₄ + ...',
    nodeLabel: 'Node N',
    currentUnit: 'A'
  },
  hi: {
    title: 'किरचॉफ का धारा नियम (KCL) इंटरएक्टिव नोड',
    subtitle: 'सर्किट नोड पर विद्युत आवेश के संरक्षण का अवलोकन करें। नोड में प्रवेश करने वाली धाराओं का योग निकलने वाली धाराओं के योग के बराबर होता है।',
    branchCurrents: 'शाखा धाराएँ एवं दिशाएँ',
    entering: 'प्रवेश करने वाली (In)',
    leaving: 'बाहर निकलने वाली (Out)',
    totalEntering: 'कुल प्रवेश धारा (ΣI_in)',
    totalLeaving: 'कुल निकास धारा (ΣI_out)',
    imbalance: 'KCL असंतुलन (|ΣI_in - ΣI_out|)',
    statusBalanced: 'संतुलित (KCL संतुष्ट)',
    statusUnbalanced: 'असंतुलित (आवेश संरक्षण का उल्लंघन)',
    autoBalance: 'शाखा 5 स्वतः संतुलित करें',
    reset: 'नोड रीसेट करें',
    calloutTitle: 'KCL सिद्धांत (आवेश संरक्षण नियम)',
    calloutText: 'किसी भी विद्युत नोड पर: ΣI_in = ΣI_out या ΣI = 0। नोड पर आवेश जमा नहीं हो सकता।',
    formulaText: 'ΣI_in = ΣI_out   ⇒   I₁ + I₂ + ... = I₃ + I₄ + ...',
    nodeLabel: 'नोड N',
    currentUnit: 'A'
  },
  bn: {
    title: 'কার্শফের কারেন্ট সূত্র (KCL) ইন্টারেক্টিভ নোড',
    subtitle: 'সার্কিট নোডে আধান সংরক্ষণের নীতি পর্যবেক্ষণ করুন। নোডে প্রবেশকারী কারেন্টের যোগফল বের হওয়া কারেন্টের যোগফলের সমান।',
    branchCurrents: 'শাখা কারেন্ট ও দিকসমূহ',
    entering: 'প্রবেশকারী (In)',
    leaving: 'বহির্গামী (Out)',
    totalEntering: 'মোট প্রবেশকারী কারেন্ট (ΣI_in)',
    totalLeaving: 'মোট বহির্গামী কারেন্ট (ΣI_out)',
    imbalance: 'KCL অসমতা (|ΣI_in - ΣI_out|)',
    statusBalanced: 'সাম্যাবস্থা (KCL নিশ্চিত)',
    statusUnbalanced: 'অসাম্যাবস্থা (আধান নীতির লঙ্ঘন)',
    autoBalance: 'শাখা ৫ স্বয়ংক্রিয় ব্যালেন্স',
    reset: 'নোড রিসেট',
    calloutTitle: 'KCL মূলনীতি (আধান সংরক্ষণ নীতি)',
    calloutText: 'যেকোনো সার্কিট নোডে: ΣI_in = ΣI_out বা ΣI = 0। কোনো নোডে চার্জ জমতে পারে না।',
    formulaText: 'ΣI_in = ΣI_out   ⇒   I₁ + I₂ + ... = I₃ + I₄ + ...',
    nodeLabel: 'নোড N',
    currentUnit: 'A'
  }
};

export const KCLNodeAnimation: React.FC<KCLNodeAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const reducedMotion = useReducedMotion();

  // 4 main branches + 1 auto branch
  const [b1, setB1] = useState<number>(5.0); // Entering
  const [b2, setB2] = useState<number>(3.0); // Entering
  const [b3, setB3] = useState<number>(4.0); // Leaving
  const [b4, setB4] = useState<number>(2.0); // Leaving
  const [b5Dir, setB5Dir] = useState<'in' | 'out'>('out');
  const [b5, setB5] = useState<number>(2.0); // Leaving

  const [particleOffset, setParticleOffset] = useState<number>(0);

  // Animation loop for current flow particles
  useEffect(() => {
    if (reducedMotion) return;
    let animId: number;
    const step = () => {
      setParticleOffset(prev => (prev + 1.5) % 30);
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [reducedMotion]);

  // Sum calculations
  const totalIn = Number((b1 + b2 + (b5Dir === 'in' ? b5 : 0)).toFixed(2));
  const totalOut = Number((b3 + b4 + (b5Dir === 'out' ? b5 : 0)).toFixed(2));
  const imbalance = Number(Math.abs(totalIn - totalOut).toFixed(2));
  const isBalanced = imbalance < 0.05;

  const handleAutoBalance = () => {
    const inWithoutB5 = b1 + b2;
    const outWithoutB5 = b3 + b4;
    const diff = inWithoutB5 - outWithoutB5;
    if (diff >= 0) {
      setB5Dir('out');
      setB5(Number(diff.toFixed(2)));
    } else {
      setB5Dir('in');
      setB5(Number(Math.abs(diff).toFixed(2)));
    }
  };

  const handleReset = () => {
    setB1(5.0);
    setB2(3.0);
    setB3(4.0);
    setB4(2.0);
    setB5Dir('out');
    setB5(2.0);
  };

  // SVG dimensions & node position
  const cx = 200;
  const cy = 160;

  // Branch visual coordinates
  const branchCoords = [
    { id: 'I₁', val: b1, dir: 'in', color: '#38bdf8', x: 50, y: 50, angle: 215 },
    { id: 'I₂', val: b2, dir: 'in', color: '#34d399', x: 50, y: 270, angle: 145 },
    { id: 'I₃', val: b3, dir: 'out', color: '#f59e0b', x: 350, y: 50, angle: 325 },
    { id: 'I₄', val: b4, dir: 'out', color: '#ec4899', x: 350, y: 270, angle: 35 },
    { id: 'I₅', val: b5, dir: b5Dir, color: '#a855f7', x: 200, y: 290, angle: 90 },
  ];

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={t.calloutTitle}
      calloutText={t.calloutText}
      formulaText={t.formulaText}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Visual Animation Viewport */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 bg-slate-950 rounded-xl border border-slate-800 text-white relative min-h-[340px] shadow-inner">
          {/* Status Badge */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border shadow-sm transition-all">
            {isBalanced ? (
              <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/80 border-emerald-600/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.statusBalanced}</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-rose-400 bg-rose-950/80 border-rose-600/50">
                <AlertCircle className="w-4 h-4 text-rose-400 animate-pulse" />
                <span>{t.statusUnbalanced}</span>
              </div>
            )}
          </div>

          <svg viewBox="0 0 400 320" className="w-full max-w-md h-auto" aria-label="KCL Node Diagram">
            <defs>
              <filter id="glow-node" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Central Node glow */}
            <circle cx={cx} cy={cy} r="22" fill={isBalanced ? "#065f46" : "#881337"} opacity="0.6" filter="url(#glow-node)" />

            {/* Branch Wires */}
            {branchCoords.map((b) => (
              <line
                key={`line-${b.id}`}
                x1={cx}
                y1={cy}
                x2={b.x}
                y2={b.y}
                stroke={b.color}
                strokeWidth={Math.max(2, Math.min(6, b.val * 0.8))}
                strokeDasharray="6,4"
                strokeLinecap="round"
                opacity="0.8"
              />
            ))}

            {/* Particle Flow Dots */}
            {!reducedMotion && branchCoords.flatMap((b) => {
              if (b.val <= 0) return [];
              // calculate 3 particles along each line
              const dx = b.x - cx;
              const dy = b.y - cy;

              return [0, 1, 2].map((idx) => {
                const baseRatio = ((particleOffset + idx * 10) % 30) / 30;
                // If entering: particle moves from (b.x, b.y) -> (cx, cy)
                // If leaving: particle moves from (cx, cy) -> (b.x, b.y)
                const ratio = b.dir === 'in' ? 1 - baseRatio : baseRatio;
                const px = cx + dx * ratio;
                const py = cy + dy * ratio;

                return (
                  <circle
                    key={`p-${b.id}-${idx}`}
                    cx={px}
                    cy={py}
                    r={Math.max(2.5, Math.min(5, b.val * 0.6))}
                    fill={b.color}
                    className="drop-shadow-md"
                  />
                );
              });
            })}

            {/* Central Node Circle */}
            <circle cx={cx} cy={cy} r="16" fill="#0f172a" stroke={isBalanced ? "#34d399" : "#fb7185"} strokeWidth="3" />
            <text x={cx} y={cy + 4} textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="11" fontFamily="sans-serif">
              {t.nodeLabel}
            </text>

            {/* Branch Value & Arrow Labels */}
            {branchCoords.map((b) => {
              const dx = b.x - cx;
              const dy = b.y - cy;
              const midX = cx + dx * 0.55;
              const midY = cy + dy * 0.55;

              // Arrow angle calculation
              const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
              const arrowAngle = b.dir === 'in' ? angleDeg + 180 : angleDeg;

              return (
                <g key={`label-${b.id}`}>
                  {/* Arrowhead */}
                  <g transform={`translate(${midX}, ${midY}) rotate(${arrowAngle})`}>
                    <polygon points="-6,-4 6,0 -6,4" fill={b.color} />
                  </g>

                  {/* Text Badge */}
                  <rect
                    x={b.x - 28}
                    y={b.y - 14}
                    width="56"
                    height="28"
                    rx="6"
                    fill="#1e293b"
                    stroke={b.color}
                    strokeWidth="1.5"
                  />
                  <text x={b.x} y={b.y - 1} textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="monospace">
                    {b.id} = {b.val}{t.currentUnit}
                  </text>
                  <text x={b.x} y={b.y + 10} textAnchor="middle" fill={b.dir === 'in' ? '#38bdf8' : '#f59e0b'} fontSize="8" fontWeight="bold">
                    {b.dir === 'in' ? '↓ IN' : '↑ OUT'}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick Metrics Strip */}
          <div className="w-full grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-800 text-center text-xs">
            <div className="p-1.5 rounded bg-sky-950/50 border border-sky-800/40">
              <span className="text-slate-400 block text-[10px]">{t.totalEntering}</span>
              <span className="text-sky-400 font-bold text-sm font-mono">{totalIn} A</span>
            </div>
            <div className="p-1.5 rounded bg-amber-950/50 border border-amber-800/40">
              <span className="text-slate-400 block text-[10px]">{t.totalLeaving}</span>
              <span className="text-amber-400 font-bold text-sm font-mono">{totalOut} A</span>
            </div>
            <div className={`p-1.5 rounded border ${isBalanced ? 'bg-emerald-950/50 border-emerald-800/40' : 'bg-rose-950/50 border-rose-800/40'}`}>
              <span className="text-slate-400 block text-[10px]">{t.imbalance}</span>
              <span className={`font-bold text-sm font-mono ${isBalanced ? 'text-emerald-400' : 'text-rose-400'}`}>
                {imbalance} A
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Control Panel */}
        <div className="lg:col-span-5 space-y-4 print:hidden">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-cyan-500" />
              <span>{t.branchCurrents}</span>
            </h4>
            <button
              onClick={handleAutoBalance}
              className="flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors shadow-sm"
              title="Automatically calculate Branch 5 to balance the node"
            >
              <ArrowRightLeft className="w-3.5 h-3.5" />
              <span>{t.autoBalance}</span>
            </button>
          </div>

          {/* Sliders */}
          <div className="space-y-3 text-xs">
            {/* Branch 1 */}
            <div>
              <div className="flex justify-between mb-1 font-medium">
                <span className="text-sky-600 dark:text-sky-400 font-semibold">I₁ (Entering):</span>
                <span className="font-mono text-slate-700 dark:text-slate-300">{b1} A</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={b1}
                onChange={(e) => setB1(parseFloat(e.target.value) || 0)}
                className="w-full accent-sky-500 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            {/* Branch 2 */}
            <div>
              <div className="flex justify-between mb-1 font-medium">
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">I₂ (Entering):</span>
                <span className="font-mono text-slate-700 dark:text-slate-300">{b2} A</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={b2}
                onChange={(e) => setB2(parseFloat(e.target.value) || 0)}
                className="w-full accent-emerald-500 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            {/* Branch 3 */}
            <div>
              <div className="flex justify-between mb-1 font-medium">
                <span className="text-amber-600 dark:text-amber-400 font-semibold">I₃ (Leaving):</span>
                <span className="font-mono text-slate-700 dark:text-slate-300">{b3} A</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={b3}
                onChange={(e) => setB3(parseFloat(e.target.value) || 0)}
                className="w-full accent-amber-500 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            {/* Branch 4 */}
            <div>
              <div className="flex justify-between mb-1 font-medium">
                <span className="text-pink-600 dark:text-pink-400 font-semibold">I₄ (Leaving):</span>
                <span className="font-mono text-slate-700 dark:text-slate-300">{b4} A</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                step="0.5"
                value={b4}
                onChange={(e) => setB4(parseFloat(e.target.value) || 0)}
                className="w-full accent-pink-500 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            {/* Branch 5 (Flexible Direction) */}
            <div className="p-2.5 rounded-lg border border-purple-300/40 dark:border-purple-800/40 bg-purple-50/50 dark:bg-purple-950/20">
              <div className="flex items-center justify-between mb-1.5 font-medium">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">I₅ (Variable):</span>
                <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-0.5 rounded border border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => setB5Dir('in')}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors ${
                      b5Dir === 'in' ? 'bg-sky-500 text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    IN
                  </button>
                  <button
                    onClick={() => setB5Dir('out')}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors ${
                      b5Dir === 'out' ? 'bg-amber-500 text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    OUT
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={b5}
                  onChange={(e) => setB5(parseFloat(e.target.value) || 0)}
                  className="w-full accent-purple-500 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                />
                <span className="font-mono text-slate-700 dark:text-slate-300 font-bold min-w-[32px] text-right">{b5} A</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
