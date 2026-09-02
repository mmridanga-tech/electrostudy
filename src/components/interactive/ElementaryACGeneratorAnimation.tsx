import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Play, Pause, RotateCw, Sliders, Zap, Activity, Info, RefreshCw } from 'lucide-react';
import { Language } from '../../types';

interface ElementaryACGeneratorAnimationProps {
  currentLanguage: Language;
}

export const ElementaryACGeneratorAnimation: React.FC<ElementaryACGeneratorAnimationProps> = ({
  currentLanguage
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [rpm, setRpm] = useState<number>(60); // 60 RPM = 1 rev/sec = 1 Hz
  const [bFieldT, setBFieldT] = useState<number>(1.0); // Tesla
  const [loopAreaM2, setLoopAreaM2] = useState<number>(0.05); // m^2 (e.g. 20cm x 25cm)
  const [turnsN, setTurnsN] = useState<number>(1);
  const [angleDeg, setAngleDeg] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Angular velocity omega = 2 * pi * (RPM / 60)
  const omega = (2 * Math.PI * rpm) / 60; // rad/s
  const frequencyHz = rpm / 60; // Hz

  // Peak EMF E_m = N * B * A * omega
  const eMax = turnsN * bFieldT * loopAreaM2 * omega; // Volts
  // Instantaneous EMF e(t) = E_m * sin(theta)
  const thetaRad = (angleDeg * Math.PI) / 180;
  const instantaneousEMF = eMax * Math.sin(thetaRad);
  const rmsEMF = eMax / Math.SQRT2;

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
      title: 'Elementary AC Generator: Rotating Loop & Slip-Rings Simulator',
      subtitle: 'Observe instantaneous sinusoidal EMF generation as a conductor loop rotates through a magnetic field',
      speed: 'Rotational Speed (RPM):',
      fluxDensity: 'Magnetic Flux Density (B):',
      loopArea: 'Armature Loop Area (A):',
      turns: 'Number of Turns (N):',
      angle: 'Instantaneous Rotor Angle (θ = ωt):',
      eMax: 'Peak Voltage (E_m):',
      eRms: 'RMS Voltage (E_rms):',
      eInst: 'Instantaneous Output (e):',
      freq: 'Electrical Frequency (f):',
      slipRings: 'Continuous Slip Rings with Carbon Brushes (Maintains Direct Unidirectional Coil Connection)',
      play: 'Run Rotor',
      pause: 'Freeze Rotation',
      reset: 'Reset'
    },
    hi: {
      title: 'प्राथमिक एसी जनरेटर: घूर्णी लूप एवं स्लिप-रिंग सिमुलेटर',
      subtitle: 'चुंबकीय क्षेत्र में लूप के घूमने पर तात्कालिक ज्यावक्रीय ईएमएफ उत्पत्ति का प्रेक्षण करें',
      speed: 'घूर्णन गति (RPM):',
      fluxDensity: 'चुंबकीय फ्लक्स घनत्व (B):',
      loopArea: 'आर्मेचर लूप क्षेत्रफल (A):',
      turns: 'फेरों की संख्या (N):',
      angle: 'तात्कालिक रोटर कोण (θ = ωt):',
      eMax: 'शिखर वोल्टेज (E_m):',
      eRms: 'RMS वोल्टेज (E_rms):',
      eInst: 'तात्कालिक आउटपुट (e):',
      freq: 'विद्युत आवृत्ति (f):',
      slipRings: 'कार्बन ब्रश युक्त निरंतर स्लिप रिंग्स (कुंडली का सीधा संबंध बनाए रखती हैं)',
      play: 'चलाएं',
      pause: 'रोकें',
      reset: 'रीसेट'
    },
    bn: {
      title: 'মৌলিক এসি জেনারেটর: ঘূর্ণায়মান লুপ ও স্লিপ-রিং সিমুলেটর',
      subtitle: 'চৌম্বক ক্ষেত্রে কন্ডাক্টর লুপ ঘোরার সময় তাৎক্ষণিক সাইনোসয়ডাল ইএমএফ উৎপাদন পর্যবেক্ষণ করো',
      speed: 'ঘূর্ণন গতি (RPM):',
      fluxDensity: 'চৌম্বক ফ্লাক্স ঘনত্ব (B):',
      loopArea: 'আর্মেচার লুপের ক্ষেত্রফল (A):',
      turns: 'পাকসংখ্যা (N):',
      angle: 'তাৎক্ষণিক রোটর কোণ (θ = ωt):',
      eMax: 'শীর্ষ ভোল্টেজ (E_m):',
      eRms: 'RMS ভোল্টেজ (E_rms):',
      eInst: 'তাৎক্ষণিক আউটপুট (e):',
      freq: 'বৈদ্যুতিক কম্পাঙ্ক (f):',
      slipRings: 'কার্বন ব্রাশসহ অবিচ্ছিন্ন স্লিপ রিংস (কয়েলের সাথে সরাসরি দ্বিমুখী সংযোগ বজায় রাখে)',
      play: 'চালান',
      pause: 'থামান',
      reset: 'রিসেট'
    }
  }[currentLanguage];

  // Helper for generating oscilloscope sine curve points
  const wavePoints = useMemo(() => {
    const points: string[] = [];
    const width = 360;
    const height = 110;
    const midY = height / 2;
    const amplitude = (height / 2 - 10) * (eMax > 0 ? 1 : 0);

    for (let deg = 0; deg <= 360; deg += 4) {
      const rad = (deg * Math.PI) / 180;
      const y = midY - amplitude * Math.sin(rad);
      points.push(`${deg},${y.toFixed(1)}`);
    }
    return points.join(' ');
  }, [eMax]);

  // Marker on oscilloscope at current angle
  const currentWaveY = useMemo(() => {
    const height = 110;
    const midY = height / 2;
    const amplitude = (height / 2 - 10) * (eMax > 0 ? 1 : 0);
    return midY - amplitude * Math.sin(thetaRad);
  }, [eMax, thetaRad]);

  // 3D perspective projection coordinates for rotating rectangular loop
  // Center is at (260, 130)
  const loopCoords = useMemo(() => {
    const cx = 270;
    const cy = 130;
    const r = 65; // radius
    const len = 90; // length in perspective

    // Two conductor sides cutting flux
    // Side A at angle theta, Side B at theta + 180
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

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div>
          <h2 className="text-lg font-bold text-sky-400 flex items-center gap-2">
            <Activity className="w-5 h-5 text-sky-400" />
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
              setBFieldT(1.0);
              setLoopAreaM2(0.05);
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
        {/* Left: Rotating Machine Vector Stage (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl p-3 border border-slate-800 relative">
          <div className="text-[11px] font-bold text-slate-400 mb-1 flex items-center justify-between">
            <span>Physical Generator Model (B-field, Loop & Slip-Rings)</span>
            <span className="font-mono text-cyan-400 font-semibold">θ = {Math.round(angleDeg)}°</span>
          </div>
          <svg viewBox="0 0 540 260" className="w-full h-64 select-none">
            <defs>
              <linearGradient id="nPoleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
              <linearGradient id="sPoleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
              <marker id="bArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* North Pole (Left) */}
            <g transform="translate(20, 45)">
              <rect x="0" y="0" width="75" height="170" rx="8" fill="url(#nPoleGrad)" stroke="#f87171" strokeWidth="2" />
              <text x="37" y="95" fill="#ffffff" fontSize="28" fontWeight="bold" textAnchor="middle">N</text>
              <text x="37" y="125" fill="#fca5a5" fontSize="10" fontWeight="bold" textAnchor="middle">MAGNET</text>
            </g>

            {/* South Pole (Right) */}
            <g transform="translate(445, 45)">
              <rect x="0" y="0" width="75" height="170" rx="8" fill="url(#sPoleGrad)" stroke="#60a5fa" strokeWidth="2" />
              <text x="37" y="95" fill="#ffffff" fontSize="28" fontWeight="bold" textAnchor="middle">S</text>
              <text x="37" y="125" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">MAGNET</text>
            </g>

            {/* Uniform Magnetic Flux Field Lines (N to S) */}
            {[75, 105, 130, 155, 185].map((y) => (
              <g key={`bline-${y}`}>
                <line x1="95" y1={y} x2="445" y2={y} stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.45" />
                <path d={`M 260 ${y} L 275 ${y}`} stroke="#38bdf8" strokeWidth="2" markerEnd="url(#bArrow)" />
              </g>
            ))}
            <text x="270" y="65" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
              Uniform Magnetic Field B → (N to S)
            </text>

            {/* Rotation Axis Shaft */}
            <line x1="270" y1="20" x2="270" y2="245" stroke="#64748b" strokeWidth="3" strokeDasharray="3 3" />
            <circle cx="270" cy="25" r="4" fill="#94a3b8" />

            {/* Rotating Armature Loop in 3D Perspective */}
            {/* Top Loop Link */}
            <line
              x1={loopCoords.topA.x}
              y1={loopCoords.topA.y}
              x2={loopCoords.topB.x}
              y2={loopCoords.topB.y}
              stroke="#fbbf24"
              strokeWidth="4"
            />
            {/* Conductor Side A (Red marker) */}
            <line
              x1={loopCoords.topA.x}
              y1={loopCoords.topA.y}
              x2={loopCoords.botA.x}
              y2={loopCoords.botA.y}
              stroke="#f87171"
              strokeWidth="5"
            />
            <circle cx={loopCoords.topA.x} cy={loopCoords.topA.y} r="5" fill="#ef4444" />
            <text x={loopCoords.topA.x} y={loopCoords.topA.y - 8} fill="#ef4444" fontSize="9" fontWeight="bold" textAnchor="middle">Side A</text>

            {/* Conductor Side B (Cyan marker) */}
            <line
              x1={loopCoords.topB.x}
              y1={loopCoords.topB.y}
              x2={loopCoords.botB.x}
              y2={loopCoords.botB.y}
              stroke="#38bdf8"
              strokeWidth="5"
            />
            <circle cx={loopCoords.topB.x} cy={loopCoords.topB.y} r="5" fill="#0284c7" />
            <text x={loopCoords.topB.x} y={loopCoords.topB.y - 8} fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Side B</text>

            {/* Bottom Loop Leads extending to Slip Rings */}
            <line x1={loopCoords.botA.x} y1={loopCoords.botA.y} x2="255" y2="210" stroke="#f87171" strokeWidth="2.5" />
            <line x1={loopCoords.botB.x} y1={loopCoords.botB.y} x2="285" y2="225" stroke="#38bdf8" strokeWidth="2.5" />

            {/* Slip Ring 1 (connected to side A) */}
            <g transform="translate(240, 205)">
              <ellipse cx="15" cy="5" rx="14" ry="5" fill="#d97706" stroke="#fbbf24" strokeWidth="2" />
              {/* Carbon Brush 1 */}
              <rect x="-8" y="1" width="8" height="8" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
              <line x1="-8" y1="5" x2="-25" y2="5" stroke="#f87171" strokeWidth="2" />
            </g>

            {/* Slip Ring 2 (connected to side B) */}
            <g transform="translate(240, 220)">
              <ellipse cx="15" cy="5" rx="14" ry="5" fill="#d97706" stroke="#fbbf24" strokeWidth="2" />
              {/* Carbon Brush 2 */}
              <rect x="30" y="1" width="8" height="8" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
              <line x1="38" y1="5" x2="55" y2="5" stroke="#38bdf8" strokeWidth="2" />
            </g>

            {/* External AC Load & Voltmeter */}
            <g transform="translate(270, 242)">
              <rect x="-65" y="-6" width="130" height="20" rx="4" fill="#0f172a" stroke="#475569" />
              <text x="0" y="8" fill="#38bdf8" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                AC Terminals (Slip Rings)
              </text>
            </g>

            {/* Rotation Direction Arrow */}
            <path
              d="M 230 40 A 45 18 0 0 1 310 40"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2.5"
              markerEnd="url(#bArrow)"
            />
            <text x="270" y="32" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">
              Rotation ω = {omega.toFixed(1)} rad/s
            </text>
          </svg>
        </div>

        {/* Right: Real-Time Oscilloscope Waveform (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl p-3 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1">
              <span>Oscilloscope: e = E_m · sin(ωt)</span>
              <span className="font-mono text-emerald-400">f = {frequencyHz.toFixed(1)} Hz</span>
            </div>

            {/* Waveform SVG */}
            <div className="bg-slate-900/90 rounded-lg p-2 border border-slate-800">
              <svg viewBox="0 0 360 110" className="w-full h-32">
                {/* Center zero axis */}
                <line x1="0" y1="55" x2="360" y2="55" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 3" />
                {/* 90, 180, 270 grid */}
                <line x1="90" y1="0" x2="90" y2="110" stroke="#1e293b" strokeWidth="1" />
                <line x1="180" y1="0" x2="180" y2="110" stroke="#1e293b" strokeWidth="1" />
                <line x1="270" y1="0" x2="270" y2="110" stroke="#1e293b" strokeWidth="1" />

                {/* Degree labels */}
                <text x="5" y="52" fill="#64748b" fontSize="8">0°</text>
                <text x="90" y="105" fill="#64748b" fontSize="8" textAnchor="middle">90°</text>
                <text x="180" y="105" fill="#64748b" fontSize="8" textAnchor="middle">180°</text>
                <text x="270" y="105" fill="#64748b" fontSize="8" textAnchor="middle">270°</text>
                <text x="355" y="52" fill="#64748b" fontSize="8" textAnchor="end">360°</text>

                {/* Voltage amplitude guides */}
                <text x="5" y="14" fill="#38bdf8" fontSize="8" fontWeight="bold">+E_m</text>
                <text x="5" y="102" fill="#f87171" fontSize="8" fontWeight="bold">-E_m</text>

                {/* Pure Sinusoidal Voltage Curve */}
                <polyline fill="none" stroke="#38bdf8" strokeWidth="2.5" points={wavePoints} />

                {/* Current Angle Tracking Dot */}
                <circle cx={Math.round(angleDeg)} cy={currentWaveY} r="5" fill="#facc15" stroke="#ffffff" strokeWidth="2" />
                <line x1={Math.round(angleDeg)} y1="0" x2={Math.round(angleDeg)} y2="110" stroke="#facc15" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Dynamic Value Metrics */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">{labels.eInst}</span>
              <span className="text-base font-bold font-mono text-cyan-400">
                {instantaneousEMF > 0 ? '+' : ''}
                {instantaneousEMF.toFixed(2)} V
              </span>
            </div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">{labels.eMax}</span>
              <span className="text-base font-bold font-mono text-amber-400">
                {eMax.toFixed(2)} V
              </span>
            </div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">{labels.eRms}</span>
              <span className="text-base font-bold font-mono text-emerald-400">
                {rmsEMF.toFixed(2)} V
              </span>
            </div>
            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">{labels.freq}</span>
              <span className="text-base font-bold font-mono text-purple-400">
                {frequencyHz.toFixed(1)} Hz
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
        {/* Speed RPM Slider */}
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

        {/* Magnetic Field B Slider */}
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

        {/* Area A Slider */}
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

        {/* Manual Angle Scrubber (when paused) */}
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

      {/* Slip Ring Explanatory Footer */}
      <div className="mt-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
        <Info className="w-4 h-4 text-sky-400 shrink-0" />
        <span>{labels.slipRings}</span>
      </div>
    </div>
  );
};
