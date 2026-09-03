import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Play, Pause, RotateCcw, ArrowRight, Zap, Gauge, Compass, Info, Train } from 'lucide-react';
import { Language } from '../../types';

interface LinearInductionMaglevAnimationProps {
  currentLanguage: Language;
}

type LevitationMode = 'PROPULSION_LIM' | 'EMS_ATTRACTIVE' | 'EDS_REPULSIVE';

export const LinearInductionMaglevAnimation: React.FC<LinearInductionMaglevAnimationProps> = ({
  currentLanguage
}) => {
  const [activeTab, setActiveTab] = useState<LevitationMode>('PROPULSION_LIM');
  const [frequencyHz, setFrequencyHz] = useState<number>(50); // 10 Hz to 120 Hz
  const [vehicleSpeedMs, setVehicleSpeedMs] = useState<number>(20); // 0 to 60 m/s
  const [bFieldTesla, setBFieldTesla] = useState<number>(1.0); // 0.2 T to 1.8 T
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [waveOffset, setWaveOffset] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Pole pitch tau (distance between adjacent North and South poles along the stator track)
  const polePitchTauM = 0.35; // 35 cm pole pitch

  // Synchronous linear velocity: v_s = 2 * f * tau
  const synchronousSpeedMs = useMemo(() => {
    return 2 * frequencyHz * polePitchTauM;
  }, [frequencyHz, polePitchTauM]);

  // Linear motor slip: s = (v_s - v) / v_s
  const slipS = useMemo(() => {
    if (synchronousSpeedMs === 0) return 1.0;
    return (synchronousSpeedMs - vehicleSpeedMs) / synchronousSpeedMs;
  }, [synchronousSpeedMs, vehicleSpeedMs]);

  // Linear induction motor thrust force calculation:
  // F_thrust = (3 * V1^2 / v_s) * [ (R2 / s) / ( (R1 + R2/s)^2 + (X1 + X2)^2 ) ]
  // In simplified form: F_thrust approx k_thrust * B^2 * (s / (s^2 + s_max^2))
  const thrustKiloNewtons = useMemo(() => {
    if (!isRunning) return 0;
    const sMax = 0.22; // slip for maximum breakdown thrust
    const normalizedB = bFieldTesla / 1.0;
    const shape = (2 * slipS * sMax) / (Math.pow(slipS, 2) + Math.pow(sMax, 2));
    const maxThrustKn = 45 * Math.pow(normalizedB, 2);
    const thrust = maxThrustKn * shape;
    return Math.max(-25, Math.min(65, thrust));
  }, [isRunning, slipS, bFieldTesla]);

  // Levitation air-gap and force for Maglev modes:
  const levitationStatus = useMemo(() => {
    if (activeTab === 'EMS_ATTRACTIVE') {
      // EMS (Transrapid): Electromagnets under track rail pull UP towards iron track.
      // Gap must be actively regulated to ~15 mm
      return {
        gapMm: 15,
        type: 'Active Closed-Loop Ferromagnetic Attraction (Transrapid)',
        stability: 'Earnshaw Theorem: Inherently unstable; requires 100 kHz feedback gap sensors',
        speedThreshold: 'Operates from 0 km/h (station dwell) to 500 km/h'
      };
    } else if (activeTab === 'EDS_REPULSIVE') {
      // EDS (SCMaglev L0): Superconducting magnets induce repulsive eddy currents in aluminum figure-8 track coils.
      // Inherently self-stabilizing above lift-off speed (~100 km/h or 28 m/s)
      const liftOff = vehicleSpeedMs >= 25;
      return {
        gapMm: liftOff ? 100 : 0,
        type: 'Passive Electrodynamic Eddy-Current Repulsion (JR SCMaglev)',
        stability: 'Lenz’s Law: Inherently self-stabilizing (no active gap sensor needed)',
        speedThreshold: liftOff ? 'Fully Levitated on Magnetic Cushion (100 mm gap)' : 'Below 100 km/h: Supported by rubber wheels'
      };
    }
    return null;
  }, [activeTab, vehicleSpeedMs]);

  // Animation wave loop
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;
        if (isRunning) {
          // Stator traveling wave speed
          const waveSpeed = synchronousSpeedMs * 18; // scaled for visual canvas
          setWaveOffset((prev) => (prev + waveSpeed * dt) % 140);
        }
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      lastTimeRef.current = null;
    };
  }, [isRunning, synchronousSpeedMs]);

  const labels = {
    en: {
      title: 'Linear Induction Motors (LIM) & Maglev Simulator',
      subtitle: 'Analyze linear traveling waves (v_s = 2·f·τ), reaction plate slip, and EMS/EDS levitation',
      tabLim: 'Linear Induction Motor (LIM Propulsion)',
      tabEms: 'EMS Maglev (Attractive Suspension)',
      tabEds: 'EDS Maglev (Repulsive Cryogenic Suspension)',
      frequency: 'Stator Inverter Frequency (f):',
      speed: 'Vehicle Actual Speed (v):',
      bField: 'Magnetic Field Intensity (B):',
      syncSpeed: 'Synchronous Field Velocity (v_s):',
      slip: 'Linear Slip (s):',
      thrust: 'Forward Net Thrust (F_thrust):',
      start: 'Power Stator Track',
      stop: 'Inverter Standby',
      reset: 'Reset Speed & Frequency',
      modelNote: 'Educational Simulation Model: Electromagnetic traveling wave and force parameters represent lumped-element didactic models, not full finite-element train control systems.'
    },
    hi: {
      title: 'रैखिक प्रेरण मोटर (LIM) एवं मैगलेव सिमुलेटर',
      subtitle: 'रैखिक प्रगामी तरंग (v_s = 2·f·τ), रिएक्शन प्लेट स्लिप एवं EMS/EDS उत्तोलन का विश्लेषण',
      tabLim: 'लीनियर इंडक्शन मोटर (LIM प्रणोदन)',
      tabEms: 'EMS मैगलेव (आकर्षण उत्तोलन)',
      tabEds: 'EDS मैगलेव (प्रतिकर्षण सुपरकंडक्टिंग उत्तोलन)',
      frequency: 'स्टेटर इन्वर्टर आवृत्ति (f):',
      speed: 'वाहन की वास्तविक गति (v):',
      bField: 'चुंबकीय क्षेत्र तीव्रता (B):',
      syncSpeed: 'तुल्यकालिक क्षेत्र वेग (v_s):',
      slip: 'रैखिक स्लिप (s):',
      thrust: 'शुद्ध आगे का थ्रस्ट (F_thrust):',
      start: 'स्टेटर ट्रैक चालू करें',
      stop: 'स्टैंडबाय करें',
      reset: 'रीसेट करें',
      modelNote: 'शैक्षणिक सिमुलेशन मॉडल: विद्युत-चुंबकीय तरंग एवं बल मान शैक्षणिक शिक्षण हेतु सरलीकृत किए गए हैं।'
    },
    bn: {
      title: 'লিনিয়ার ইন্ডাকশন মোটর (LIM) ও ম্যাগলেভ সিমুলেটর',
      subtitle: 'লিনিয়ার ট্রাভেলিং ওয়েভ (v_s = ২·f·τ), প্রতিক্রিয়াশীল প্লেট স্লিপ ও EMS/EDS লেভিটেশন বিশ্লেষণ',
      tabLim: 'লিনিয়ার ইন্ডাকশন মোটর (LIM প্রপালশন)',
      tabEms: 'EMS ম্যাগলেভ (আকর্ষণ লেভিটেশন)',
      tabEds: 'EDS ম্যাগলেভ (বিকর্ষণ ক্রায়োজেনিক লেভিটেশন)',
      frequency: 'স্ট্যাটর ইনভার্টার কম্পাঙ্ক (f):',
      speed: 'গাড়ির প্রকৃত গতিবেগ (v):',
      bField: 'চৌম্বক ক্ষেত্রের মান (B):',
      syncSpeed: 'সিঙ্ক্রোনাস ফিল্ড বেগ (v_s):',
      slip: 'লিনিয়ার স্লিপ (s):',
      thrust: 'সামনের নেট থ্রাস্ট (F_thrust):',
      start: 'স্ট্যাটর ট্র্যাক চালু করুন',
      stop: 'স্ট্যান্ডবাই করুন',
      reset: 'রিসেট করুন',
      modelNote: 'শিক্ষামূলক সিমুলেশন মডেল: তড়িৎচৌম্বক তরঙ্গ ও বলের সমীকরণ নীতিগত উপলব্ধির জন্য প্রণীত।'
    }
  }[currentLanguage];

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-6 border border-slate-700 shadow-xl">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-400 flex items-center gap-2">
            <Train className="w-6 h-6 text-emerald-400" />
            {labels.title}
          </h2>
          <p className="text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
              isRunning
                ? 'bg-amber-600 hover:bg-amber-700 text-white focus:ring-amber-500'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500'
            }`}
            aria-label={isRunning ? labels.stop : labels.start}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isRunning ? labels.stop : labels.start}
          </button>
          <button
            onClick={() => {
              setFrequencyHz(50);
              setVehicleSpeedMs(20);
              setBFieldTesla(1.0);
              setIsRunning(true);
            }}
            className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 transition-colors focus:ring-2 focus:ring-emerald-400"
            aria-label={labels.reset}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('PROPULSION_LIM')}
          className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors flex items-center gap-2 ${
            activeTab === 'PROPULSION_LIM'
              ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <ArrowRight className="w-4 h-4" />
          {labels.tabLim}
        </button>
        <button
          onClick={() => setActiveTab('EMS_ATTRACTIVE')}
          className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors flex items-center gap-2 ${
            activeTab === 'EMS_ATTRACTIVE'
              ? 'bg-sky-600 border-sky-400 text-white shadow-lg'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Zap className="w-4 h-4" />
          {labels.tabEms}
        </button>
        <button
          onClick={() => setActiveTab('EDS_REPULSIVE')}
          className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors flex items-center gap-2 ${
            activeTab === 'EDS_REPULSIVE'
              ? 'bg-purple-600 border-purple-400 text-white shadow-lg'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Compass className="w-4 h-4" />
          {labels.tabEds}
        </button>
      </div>

      {/* Main Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Left: Graphic SVG Canvas */}
        <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center relative min-h-[380px]">
          {/* Status Badge */}
          <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur border border-slate-700 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isRunning ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'
              }`}
            />
            <span className="font-mono text-slate-200 font-semibold">
              {activeTab === 'PROPULSION_LIM'
                ? `Slip s = ${slipS.toFixed(2)} | v_s = ${synchronousSpeedMs.toFixed(1)} m/s`
                : levitationStatus?.type.split(' ')[0]}
            </span>
          </div>

          <svg viewBox="0 0 520 300" className="w-full max-w-lg h-auto">
            <defs>
              <linearGradient id="ironBacking" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="aluminumSheet" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>

            {/* LIM PROPULSION VIEW */}
            {activeTab === 'PROPULSION_LIM' && (
              <g>
                {/* Secondary Vehicle Bogie (Top) */}
                <g transform="translate(260, 90)">
                  {/* Vehicle Body */}
                  <rect x="-170" y="-55" width="340" height="40" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="2" />
                  <text x="0" y="-30" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">
                    VEHICLE CHASSIS / BOGIE
                  </text>
                  <text x="0" y="-18" fill="#94a3b8" fontSize="8.5" textAnchor="middle">
                    Forward Velocity v = {vehicleSpeedMs} m/s ({(vehicleSpeedMs * 3.6).toFixed(0)} km/h)
                  </text>

                  {/* Reaction Plate: Steel Backing + Aluminum Face */}
                  <rect x="-160" y="-14" width="320" height="8" fill="url(#ironBacking)" stroke="#334155" />
                  <rect x="-160" y="-6" width="320" height="7" fill="url(#aluminumSheet)" stroke="#60a5fa" />
                  <text x="-140" y="0" fill="#ffffff" fontSize="7" fontWeight="bold">ALUMINUM SHEET</text>

                  {/* Induced Eddy Current Loops in Aluminum */}
                  {isRunning && (
                    <g stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.8">
                      {[-120, -60, 0, 60, 120].map((xP, i) => (
                        <ellipse key={i} cx={xP} cy="-2" rx="20" ry="3.5" strokeDasharray="3 2" />
                      ))}
                    </g>
                  )}

                  {/* Net Thrust Vector Arrow */}
                  {thrustKiloNewtons > 0 && (
                    <g transform="translate(40, -45)">
                      <line x1="0" y1="0" x2={Math.min(100, thrustKiloNewtons * 1.6)} y2="0" stroke="#10b981" strokeWidth="4" />
                      <polygon
                        points={`${Math.min(100, thrustKiloNewtons * 1.6)},-6 ${Math.min(100, thrustKiloNewtons * 1.6) + 12},0 ${Math.min(100, thrustKiloNewtons * 1.6)},6`}
                        fill="#10b981"
                      />
                      <text x={Math.min(100, thrustKiloNewtons * 1.6) / 2} y="-8" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">
                        Thrust F = {thrustKiloNewtons.toFixed(1)} kN
                      </text>
                    </g>
                  )}
                </g>

                {/* Stator Air Gap */}
                <text x="260" y="105" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">
                  Air Gap g ≈ 12 mm
                </text>

                {/* Primary Stator Track (Bottom) */}
                <g transform="translate(60, 120)">
                  {/* Stator Core */}
                  <rect x="0" y="0" width="400" height="90" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                  <text x="200" y="80" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
                    3-PHASE LINEAR STATOR TRACK (TRACK-BED)
                  </text>
                  <text x="200" y="65" fill="#64748b" fontSize="8" textAnchor="middle">
                    Synchronous Speed v_s = 2·f·τ = {synchronousSpeedMs.toFixed(1)} m/s
                  </text>

                  {/* Traveling Wave Poles (animated with waveOffset) */}
                  {Array.from({ length: 9 }).map((_, idx) => {
                    const poleX = (idx * 70 + waveOffset) % 400;
                    const isNorth = Math.floor((idx * 70 + waveOffset) / 70) % 2 === 0;
                    return (
                      <g key={idx} transform={`translate(${poleX}, 0)`}>
                        <rect
                          x="0"
                          y="0"
                          width="35"
                          height="40"
                          fill={isNorth ? '#b91c1c' : '#1d4ed8'}
                          stroke="#475569"
                        />
                        <text x="17.5" y="25" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
                          {isNorth ? 'N' : 'S'}
                        </text>
                      </g>
                    );
                  })}
                </g>

                {/* Traveling Wave Propagation Arrow */}
                <g transform="translate(260, 240)">
                  <line x1="-120" y1="0" x2="120" y2="0" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="5 3" />
                  <polygon points="120,-5 132,0 120,5" fill="#f59e0b" />
                  <text x="0" y="18" fill="#f59e0b" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                    Traveling Magnetic Wave v_s →
                  </text>
                </g>
              </g>
            )}

            {/* EMS ATTRACTIVE MAGLEV VIEW */}
            {activeTab === 'EMS_ATTRACTIVE' && (
              <g transform="translate(260, 140)">
                {/* Fixed Steel Guideway Track (T-shape) */}
                <path
                  d="M -160 -80 L 160 -80 L 160 -50 L 80 -50 L 80 0 L 120 0 L 120 20 L 50 20 L 50 -50 L -50 -50 L -50 20 L -120 20 L -120 0 L -80 0 L -80 -50 L -160 -50 Z"
                  fill="#334155"
                  stroke="#64748b"
                  strokeWidth="2"
                />
                <text x="0" y="-62" fill="#e2e8f0" fontSize="11" fontWeight="bold" textAnchor="middle">
                  STEEL GUIDEWAY RAIL (FERROMAGNETIC)
                </text>

                {/* Vehicle Bogie arms wrapping around underneath track */}
                <g transform="translate(0, 15)">
                  {/* Left Magnet C-core pulling UP */}
                  <path d="M -130 15 L -70 15 L -70 -5 L -90 -5 L -90 5 L -110 5 L -110 -5 L -130 -5 Z" fill="#b91c1c" stroke="#dc2626" />
                  <text x="-100" y="12" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">N</text>

                  {/* Right Magnet C-core pulling UP */}
                  <path d="M 70 15 L 130 15 L 130 -5 L 110 -5 L 110 5 L 90 5 L 90 -5 L 70 -5 Z" fill="#1d4ed8" stroke="#3b82f6" />
                  <text x="100" y="12" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">S</text>

                  {/* Attractive Magnetic Flux Loop */}
                  <path d="M -100 -5 L -100 -18" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />
                  <path d="M 100 -5 L 100 -18" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" />

                  {/* Upward Attractive Lift Arrows */}
                  <line x1="-100" y1="40" x2="-100" y2="20" stroke="#34d399" strokeWidth="3" />
                  <polygon points="-104,22 -96,22 -100,14" fill="#34d399" />
                  <line x1="100" y1="40" x2="100" y2="20" stroke="#34d399" strokeWidth="3" />
                  <polygon points="96,22 104,22 100,14" fill="#34d399" />
                  <text x="0" y="50" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">
                    Active Upward Magnetic Attraction (Gap = 15 mm)
                  </text>
                </g>
              </g>
            )}

            {/* EDS REPULSIVE MAGLEV VIEW */}
            {activeTab === 'EDS_REPULSIVE' && (
              <g transform="translate(260, 140)">
                {/* Concrete Guideway Side Walls */}
                <rect x="-180" y="-80" width="30" height="150" fill="#1e293b" stroke="#334155" />
                <rect x="150" y="-80" width="30" height="150" fill="#1e293b" stroke="#334155" />

                {/* Passive Figure-8 Figure Ground Coils in Guideway */}
                <rect x="-150" y="-50" width="12" height="90" rx="3" fill="#b45309" stroke="#f59e0b" />
                <rect x="138" y="-50" width="12" height="90" rx="3" fill="#b45309" stroke="#f59e0b" />
                <text x="-165" y="0" fill="#f59e0b" fontSize="8" fontWeight="bold" transform="rotate(-90 -165 0)">
                  Figure-8 Null Coils
                </text>

                {/* Train Vehicle with On-board Superconducting Coils (SCM) */}
                <g transform="translate(0, 5)">
                  <rect x="-120" y="-60" width="240" height="100" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                  <text x="0" y="-30" fill="#e0f2fe" fontSize="12" fontWeight="bold" textAnchor="middle">
                    JR SCMAGLEV CAR (SCM)
                  </text>

                  {/* Superconducting Magnets on bogie flanks */}
                  <rect x="-122" y="-20" width="16" height="50" fill="#6366f1" stroke="#818cf8" />
                  <rect x="106" y="-20" width="16" height="50" fill="#6366f1" stroke="#818cf8" />
                  <text x="0" y="-10" fill="#94a3b8" fontSize="8" textAnchor="middle">
                    Niobium-Titanium Liquid Helium Cryostat (-269°C)
                  </text>

                  {/* Repulsive Force Vectors */}
                  <line x1="-100" y1="10" x2="-60" y2="10" stroke="#a855f7" strokeWidth="3" />
                  <polygon points="-62,6 -62,14 -52,10" fill="#a855f7" />
                  <line x1="100" y1="10" x2="60" y2="10" stroke="#a855f7" strokeWidth="3" />
                  <polygon points="62,6 62,14 52,10" fill="#a855f7" />
                  <text x="0" y="25" fill="#c084fc" fontSize="9.5" fontWeight="bold" textAnchor="middle">
                    Passive Eddy-Current Repulsion (Lenz's Law Lift = 100 mm)
                  </text>
                </g>
              </g>
            )}
          </svg>

          {/* Model Disclaimer Notice */}
          <div className="w-full mt-3 p-2 bg-slate-900 border border-slate-700/60 rounded text-center">
            <p className="text-[11px] text-amber-300/90 font-mono">
              <Info className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
              {labels.modelNote}
            </p>
          </div>
        </div>

        {/* Right: Technical Readouts & Controls */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Main Gauges */}
          <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <span className="text-[11px] text-slate-400 block">{labels.thrust}</span>
                <span className="text-xl font-bold font-mono text-emerald-400">
                  {thrustKiloNewtons.toFixed(1)} kN
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  F_thrust ∝ s·B²
                </span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <span className="text-[11px] text-slate-400 block">{labels.slip}</span>
                <span className="text-xl font-bold font-mono text-amber-400">
                  s = {slipS.toFixed(3)}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">
                  (v_s - v) / v_s
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{labels.syncSpeed}</span>
                <span className="text-base font-bold font-mono text-cyan-300">
                  {synchronousSpeedMs.toFixed(1)} m/s
                </span>
                <span className="text-[10px] text-slate-500 block">
                  ({(synchronousSpeedMs * 3.6).toFixed(0)} km/h)
                </span>
              </div>
              <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Vehicle Speed (v):</span>
                <span className="text-base font-bold font-mono text-purple-400">
                  {vehicleSpeedMs} m/s
                </span>
                <span className="text-[10px] text-slate-500 block">
                  ({(vehicleSpeedMs * 3.6).toFixed(0)} km/h)
                </span>
              </div>
            </div>

            {/* Maglev specifics if in Maglev mode */}
            {levitationStatus && (
              <div className="mt-3 p-3 bg-slate-950 rounded-lg border border-slate-700 text-xs space-y-1">
                <p className="text-sky-300 font-bold">{levitationStatus.type}</p>
                <p className="text-slate-300">{levitationStatus.stability}</p>
                <p className="text-amber-400 font-mono text-[11px]">{levitationStatus.speedThreshold}</p>
              </div>
            )}
          </div>

          {/* Interactive Sliders */}
          <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700 space-y-4">
            {/* Frequency */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">{labels.frequency}</span>
                <span className="font-mono text-emerald-400">{frequencyHz} Hz</span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={frequencyHz}
                onChange={(e) => setFrequencyHz(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label={labels.frequency}
              />
            </div>

            {/* Actual Vehicle Speed */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">{labels.speed}</span>
                <span className="font-mono text-purple-400">{vehicleSpeedMs} m/s ({(vehicleSpeedMs * 3.6).toFixed(0)} km/h)</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="2"
                value={vehicleSpeedMs}
                onChange={(e) => setVehicleSpeedMs(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label={labels.speed}
              />
            </div>

            {/* B-Field */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">{labels.bField}</span>
                <span className="font-mono text-amber-400">{bFieldTesla.toFixed(1)} Tesla</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="1.8"
                step="0.1"
                value={bFieldTesla}
                onChange={(e) => setBFieldTesla(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label={labels.bField}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
