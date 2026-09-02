import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Play, Pause, RefreshCw, Sliders, Zap, Activity, Info, Split } from 'lucide-react';
import { Language } from '../../types';

interface ElementaryDCGeneratorAnimationProps {
  currentLanguage: Language;
}

export const ElementaryDCGeneratorAnimation: React.FC<ElementaryDCGeneratorAnimationProps> = ({
  currentLanguage
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [rpm, setRpm] = useState<number>(60);
  const [bFieldT, setBFieldT] = useState<number>(1.2);
  const [loopAreaM2, setLoopAreaM2] = useState<number>(0.06);
  const [angleDeg, setAngleDeg] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Angular velocity omega = 2 * pi * (RPM / 60)
  const omega = (2 * Math.PI * rpm) / 60;
  // Peak EMF E_m = B * A * omega
  const eMax = bFieldT * loopAreaM2 * omega;
  
  // Angle in radians
  const thetaRad = (angleDeg * Math.PI) / 180;
  // Internal alternating EMF: e_internal = E_m * sin(theta)
  const internalEMF = eMax * Math.sin(thetaRad);
  // Commutated rectified DC output at brushes: |e_internal|
  const externalDC = Math.abs(internalEMF);

  // DC Average: 2/pi * E_m
  const avgDC = (2 / Math.PI) * eMax;
  // RMS: E_m / sqrt(2)
  const rmsDC = eMax / Math.SQRT2;
  // Ripple factor: sqrt((V_rms / V_avg)^2 - 1) = 0.482
  const rippleFactor = 0.482;

  // Animation Loop
  useEffect(() => {
    if (!isPlaying) return;

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const deltaSec = (time - lastTimeRef.current) / 1000;
        setAngleDeg((prev) => (prev + (rpm * 360 * deltaSec) / 60) % 360);
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      lastTimeRef.current = null;
    };
  }, [isPlaying, rpm]);

  const labels = {
    en: {
      title: 'Elementary DC Generator: Split-Ring Commutator Simulator',
      subtitle: 'Observe mechanical rectification converting internal alternating EMF into unidirectional pulsating DC',
      speed: 'Rotor Speed (RPM):',
      fluxDensity: 'Magnetic Flux Density (B):',
      loopArea: 'Armature Loop Area (A):',
      angle: 'Rotor Angle (θ):',
      internalAC: 'Internal Generated AC EMF:',
      rectifiedDC: 'External Terminal DC (Rectified):',
      vAvg: 'Average DC Output (V_avg):',
      vRms: 'RMS Output (V_rms):',
      ripple: 'Ripple Factor (γ):',
      commutatorRole: 'Split-Ring Commutator segments switch brush connections every 180° (at the magnetic neutral plane), inverting negative half-cycles into positive DC pulses.',
      play: 'Start Rotation',
      pause: 'Freeze Rotation',
      reset: 'Reset'
    },
    hi: {
      title: 'प्राथमिक डीसी जनरेटर: स्प्लिट-रिंग कम्यूटेटर सिमुलेटर',
      subtitle: 'यांत्रिक दिष्टकरण द्वारा आंतरिक प्रत्यावर्ती ईएमएफ को एकदिशीय स्पंदित डीसी में बदलते देखें',
      speed: 'रोटर गति (RPM):',
      fluxDensity: 'चुंबकीय फ्लक्स घनत्व (B):',
      loopArea: 'आर्मेचर लूप क्षेत्रफल (A):',
      angle: 'रोटर कोण (θ):',
      internalAC: 'आंतरिक उत्पन्न एसी ईएमएफ:',
      rectifiedDC: 'बाह्य टर्मिनल डीसी (दिष्टकृत):',
      vAvg: 'औसत डीसी आउटपुट (V_avg):',
      vRms: 'RMS आउटपुट (V_rms):',
      ripple: 'उर्मिका गुणांक (Ripple Factor γ):',
      commutatorRole: 'स्प्लिट-रिंग कम्यूटेटर खंड प्रत्येक 180° पर (चुंबकीय उदासीन तल पर) ब्रश कनेक्शन बदलते हैं, जिससे ऋणात्मक चक्र धनात्मक डीसी में पलट जाता है।',
      play: 'प्रारंभ करें',
      pause: 'रोकें',
      reset: 'रीसेट'
    },
    bn: {
      title: 'মৌলিক ডিসি জেনারেটর: স্প্লিট-রিং কমিউটেটর সিমুলেটর',
      subtitle: 'যান্ত্রিক রেক্টিফিকেশন দ্বারা অভ্যন্তরীণ পরিবর্তনশীল এসি ইএমএফ একমুখী স্পন্দিত ডিসিতে রূপান্তর পর্যবেক্ষণ করো',
      speed: 'রোটর গতি (RPM):',
      fluxDensity: 'চৌম্বক ফ্লাক্স ঘনত্ব (B):',
      loopArea: 'আর্মেচার লুপের ক্ষেত্রফল (A):',
      angle: 'রোটর কোণ (θ):',
      internalAC: 'অভ্যন্তরীণ উৎপন্ন এসি ইএমএফ:',
      rectifiedDC: 'বহিঃস্থ টার্মিনাল ডিসি (রেক্টিফায়েড):',
      vAvg: 'গড় ডিসি আউটপুট (V_avg):',
      vRms: 'RMS আউটপুট (V_rms):',
      ripple: 'রিপল ফ্যাক্টর (γ):',
      commutatorRole: 'স্প্লিট-রিং কমিউটেটর সেগমেন্ট প্রতি ১৮০° অন্তর (ম্যাগনেটিক নিউট্রাল প্লেনে) ব্রাশ সংযোগ পরিবর্তন করে, ফলে নেগেটিভ অর্ধ-চক্র পজিটিভ ডিসি স্পন্দে রূপান্তরিত হয়।',
      play: 'চালান',
      pause: 'থামান',
      reset: 'রিসেট'
    }
  }[currentLanguage];

  // Internal AC wave points (sine)
  const acWavePoints = useMemo(() => {
    const points: string[] = [];
    const height = 90;
    const midY = height / 2;
    const amp = height / 2 - 8;
    for (let deg = 0; deg <= 360; deg += 4) {
      const rad = (deg * Math.PI) / 180;
      const y = midY - amp * Math.sin(rad);
      points.push(`${deg},${y.toFixed(1)}`);
    }
    return points.join(' ');
  }, []);

  // Rectified DC wave points (|sine|)
  const dcWavePoints = useMemo(() => {
    const points: string[] = [];
    const height = 90;
    const baseline = height - 10;
    const amp = height - 20;
    for (let deg = 0; deg <= 360; deg += 4) {
      const rad = (deg * Math.PI) / 180;
      const y = baseline - amp * Math.abs(Math.sin(rad));
      points.push(`${deg},${y.toFixed(1)}`);
    }
    return points.join(' ');
  }, []);

  // Loop perspective coordinates
  const loopCoords = useMemo(() => {
    const cx = 270;
    const cy = 125;
    const r = 65;
    const len = 85;

    const xA = cx + r * Math.cos(thetaRad);
    const yA = cy + (r * 0.45) * Math.sin(thetaRad);

    const xB = cx - r * Math.cos(thetaRad);
    const yB = cy - (r * 0.45) * Math.sin(thetaRad);

    return {
      topA: { x: xA, y: yA - len / 2 },
      botA: { x: xA, y: yA + len / 2 },
      topB: { x: xB, y: yB - len / 2 },
      botB: { x: xB, y: yB + len / 2 }
    };
  }, [thetaRad]);

  // Which commutator segment is contacting the positive brush (Left brush)?
  // When angle is 0 to 180, side A is contacting brush 1; when 180 to 360, side B contacts brush 1
  const segmentAIsLeft = angleDeg < 180;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div>
          <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <Split className="w-5 h-5 text-amber-400" />
            {labels.title}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">{labels.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              isPlaying
                ? 'bg-amber-600/80 hover:bg-amber-600 text-white'
                : 'bg-emerald-600/80 hover:bg-emerald-600 text-white'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? labels.pause : labels.play}
          </button>
          <button
            onClick={() => {
              setAngleDeg(0);
              setRpm(60);
              setBFieldT(1.2);
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg border border-slate-700 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            {labels.reset}
          </button>
        </div>
      </div>

      {/* Main Visualizer Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
        {/* Left: Split-Ring Commutator Mechanism (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl p-3 border border-slate-800 relative">
          <div className="text-[11px] font-bold text-slate-400 mb-1 flex items-center justify-between">
            <span>Split-Ring Commutator & Brush Rectification</span>
            <span className="font-mono text-amber-400 font-semibold">θ = {Math.round(angleDeg)}°</span>
          </div>
          <svg viewBox="0 0 540 260" className="w-full h-64 select-none">
            <defs>
              <linearGradient id="nPoleGradDC" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              <linearGradient id="sPoleGradDC" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <marker id="dcBArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Poles */}
            <rect x="20" y="45" width="75" height="170" rx="8" fill="url(#nPoleGradDC)" stroke="#f87171" strokeWidth="2" />
            <text x="57" y="95" fill="#ffffff" fontSize="28" fontWeight="bold" textAnchor="middle">N</text>
            <rect x="445" y="45" width="75" height="170" rx="8" fill="url(#sPoleGradDC)" stroke="#60a5fa" strokeWidth="2" />
            <text x="482" y="95" fill="#ffffff" fontSize="28" fontWeight="bold" textAnchor="middle">S</text>

            {/* B-field lines */}
            {[75, 110, 140, 175].map((y) => (
              <g key={`dcb-${y}`}>
                <line x1="95" y1={y} x2="445" y2={y} stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4" />
                <path d={`M 260 ${y} L 275 ${y}`} stroke="#38bdf8" strokeWidth="2" markerEnd="url(#dcBArrow)" />
              </g>
            ))}

            {/* Shaft */}
            <line x1="270" y1="20" x2="270" y2="245" stroke="#64748b" strokeWidth="3" strokeDasharray="3 3" />

            {/* Armature loop in 3D */}
            <line x1={loopCoords.topA.x} y1={loopCoords.topA.y} x2={loopCoords.topB.x} y2={loopCoords.topB.y} stroke="#fbbf24" strokeWidth="4" />
            {/* Side A (Red) */}
            <line x1={loopCoords.topA.x} y1={loopCoords.topA.y} x2={loopCoords.botA.x} y2={loopCoords.botA.y} stroke="#f87171" strokeWidth="5" />
            <circle cx={loopCoords.topA.x} cy={loopCoords.topA.y} r="5" fill="#ef4444" />
            <text x={loopCoords.topA.x} y={loopCoords.topA.y - 8} fill="#ef4444" fontSize="9" fontWeight="bold" textAnchor="middle">Side A</text>
            {/* Side B (Cyan) */}
            <line x1={loopCoords.topB.x} y1={loopCoords.topB.y} x2={loopCoords.botB.x} y2={loopCoords.botB.y} stroke="#38bdf8" strokeWidth="5" />
            <circle cx={loopCoords.topB.x} cy={loopCoords.topB.y} r="5" fill="#0284c7" />
            <text x={loopCoords.topB.x} y={loopCoords.topB.y - 8} fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Side B</text>

            {/* Leads down to commutator */}
            <line x1={loopCoords.botA.x} y1={loopCoords.botA.y} x2="260" y2="210" stroke="#f87171" strokeWidth="2.5" />
            <line x1={loopCoords.botB.x} y1={loopCoords.botB.y} x2="280" y2="210" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Split-Ring Commutator (Two semi-cylinders with mica insulation gap) */}
            <g transform="translate(270, 215)">
              {/* Commutator Segment 1 (Side A) */}
              <path
                d={`M -20 -10 A 22 8 0 0 1 -2 10 L -2 -10 Z`}
                fill={segmentAIsLeft ? '#ef4444' : '#0284c7'}
                stroke="#fbbf24"
                strokeWidth="1.5"
              />
              {/* Commutator Segment 2 (Side B) */}
              <path
                d={`M 2 -10 L 2 10 A 22 8 0 0 1 20 -10 Z`}
                fill={segmentAIsLeft ? '#0284c7' : '#ef4444'}
                stroke="#fbbf24"
                strokeWidth="1.5"
              />
              {/* Mica Insulation Gap */}
              <line x1="0" y1="-12" x2="0" y2="12" stroke="#ffffff" strokeWidth="2.5" />

              {/* Fixed Stationary Carbon Brush (+) on Left */}
              <rect x="-32" y="-6" width="10" height="12" fill="#334155" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="-40" y="3" fill="#ef4444" fontSize="11" fontWeight="bold" textAnchor="end">(+) Brush</text>

              {/* Fixed Stationary Carbon Brush (-) on Right */}
              <rect x="22" y="-6" width="10" height="12" fill="#334155" stroke="#94a3b8" strokeWidth="1.2" />
              <text x="40" y="3" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="start">(-) Brush</text>

              {/* Output leads to load */}
              <line x1="-32" y1="0" x2="-60" y2="0" stroke="#ef4444" strokeWidth="2" />
              <line x1="32" y1="0" x2="60" y2="0" stroke="#38bdf8" strokeWidth="2" />
            </g>

            {/* External DC Voltmeter */}
            <g transform="translate(270, 246)">
              <rect x="-70" y="-8" width="140" height="20" rx="4" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.2" />
              <text x="0" y="6" fill="#fbbf24" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                Pulsating DC Output ({externalDC.toFixed(2)} V)
              </text>
            </g>
          </svg>
        </div>

        {/* Right: Dual Oscilloscope Comparison (Internal AC vs Commutated DC) (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl p-3 border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 block mb-1">
              Internal Alternating vs Rectified DC Waveform
            </span>

            {/* Internal AC Waveform */}
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 mb-2">
              <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                <span className="text-sky-400 font-semibold">1. Armature Internal AC: e(t)</span>
                <span className="font-mono text-sky-400">{internalEMF.toFixed(2)} V</span>
              </div>
              <svg viewBox="0 0 360 90" className="w-full h-20">
                <line x1="0" y1="45" x2="360" y2="45" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                <polyline fill="none" stroke="#38bdf8" strokeWidth="2" points={acWavePoints} />
                <circle cx={Math.round(angleDeg)} cy={45 - (37 * (eMax > 0 ? internalEMF / eMax : 0))} r="4" fill="#facc15" />
              </svg>
            </div>

            {/* Commutated DC Waveform */}
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
              <div className="flex justify-between text-[10px] text-slate-400 mb-0.5">
                <span className="text-amber-400 font-semibold">2. External Commutated DC: |e(t)|</span>
                <span className="font-mono text-amber-400">{externalDC.toFixed(2)} V</span>
              </div>
              <svg viewBox="0 0 360 90" className="w-full h-20">
                <line x1="0" y1="80" x2="360" y2="80" stroke="#334155" strokeWidth="1" />
                {/* Average DC Line */}
                <line x1="0" y1={80 - 70 * (avgDC / eMax)} x2="360" y2={80 - 70 * (avgDC / eMax)} stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="355" y={76 - 70 * (avgDC / eMax)} fill="#10b981" fontSize="8" textAnchor="end">V_avg</text>
                <polyline fill="none" stroke="#fbbf24" strokeWidth="2.5" points={dcWavePoints} />
                <circle cx={Math.round(angleDeg)} cy={80 - (70 * (eMax > 0 ? externalDC / eMax : 0))} r="4" fill="#10b981" />
              </svg>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-center">
              <span className="text-[9px] text-slate-400 block">{labels.vAvg}</span>
              <span className="text-xs font-bold font-mono text-emerald-400">{avgDC.toFixed(2)} V</span>
            </div>
            <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-center">
              <span className="text-[9px] text-slate-400 block">{labels.vRms}</span>
              <span className="text-xs font-bold font-mono text-cyan-400">{rmsDC.toFixed(2)} V</span>
            </div>
            <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-800 text-center">
              <span className="text-[9px] text-slate-400 block">{labels.ripple}</span>
              <span className="text-xs font-bold font-mono text-amber-400">48.2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.speed}</span>
            <span className="font-mono font-bold text-sky-400">{rpm} RPM</span>
          </div>
          <input
            type="range"
            min="10"
            max="300"
            step="5"
            value={rpm}
            onChange={(e) => setRpm(Number(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.fluxDensity}</span>
            <span className="font-mono font-bold text-amber-400">{bFieldT.toFixed(2)} T</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="2.0"
            step="0.05"
            value={bFieldT}
            onChange={(e) => setBFieldT(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.loopArea}</span>
            <span className="font-mono font-bold text-emerald-400">{loopAreaM2.toFixed(2)} m²</span>
          </div>
          <input
            type="range"
            min="0.01"
            max="0.20"
            step="0.01"
            value={loopAreaM2}
            onChange={(e) => setLoopAreaM2(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.angle}</span>
            <span className="font-mono font-bold text-purple-400">{Math.round(angleDeg)}°</span>
          </div>
          <input
            type="range"
            min="0"
            max="360"
            step="1"
            disabled={isPlaying}
            value={Math.round(angleDeg)}
            onChange={(e) => setAngleDeg(Number(e.target.value))}
            className={`w-full h-1.5 bg-slate-800 rounded-lg ${
              isPlaying ? 'opacity-40 cursor-not-allowed' : 'accent-purple-500 cursor-pointer'
            }`}
          />
        </div>
      </div>

      {/* Explanatory Footer */}
      <div className="mt-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
        <Info className="w-4 h-4 text-amber-400 shrink-0" />
        <span>{labels.commutatorRole}</span>
      </div>
    </div>
  );
};
