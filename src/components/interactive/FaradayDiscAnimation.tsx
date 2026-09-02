import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Play, Pause, RefreshCw, Sliders, Zap, Disc, RotateCw, Info } from 'lucide-react';
import { Language } from '../../types';

interface FaradayDiscAnimationProps {
  currentLanguage: Language;
}

export const FaradayDiscAnimation: React.FC<FaradayDiscAnimationProps> = ({
  currentLanguage
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [rpm, setRpm] = useState<number>(1200); // 1200 RPM
  const [bFieldT, setBFieldT] = useState<number>(1.5); // 1.5 T
  const [discRadiusCm, setDiscRadiusCm] = useState<number>(15); // 15 cm = 0.15 m
  const [loadResistanceOhm, setLoadResistanceOhm] = useState<number>(0.05); // 50 mΩ (low voltage, high current device)
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Angular velocity omega = 2 * pi * (RPM / 60)
  const omega = (2 * Math.PI * rpm) / 60; // rad/s
  const radiusM = discRadiusCm / 100; // meters

  // Radial motional EMF: E = 1/2 * B * omega * R^2
  const generatedEMF = 0.5 * bFieldT * omega * (radiusM * radiusM); // Volts

  // Internal resistance of solid copper disc (approx 0.002 Ohm)
  const internalResistanceOhm = 0.002;
  const totalResistance = internalResistanceOhm + loadResistanceOhm;
  // Output current
  const currentAmps = generatedEMF / totalResistance;
  // Terminal Voltage
  const terminalVoltage = currentAmps * loadResistanceOhm;
  // Mechanical Braking Torque: T = 1/2 * I * B * R^2
  const counterTorqueNm = 0.5 * currentAmps * bFieldT * (radiusM * radiusM);
  // Power
  const outputPowerW = terminalVoltage * currentAmps;

  // Animation Loop
  useEffect(() => {
    if (!isPlaying) return;

    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const deltaSec = (time - lastTimeRef.current) / 1000;
        setRotationAngle((prev) => (prev + (rpm * 360 * deltaSec) / 60) % 360);
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
      title: 'Faraday Disc / Homopolar Generator Simulator',
      subtitle: 'Analyze radial motional EMF and steady ripple-free DC induction without a commutator',
      speedLabel: 'Disc Rotational Speed (RPM):',
      bFieldLabel: 'Axial Magnetic Flux Density (B):',
      radiusLabel: 'Disc Radius (R):',
      loadLabel: 'External Load Resistance (R_L):',
      emfLabel: 'Generated Motional EMF (E = ½ B ω R²):',
      terminalVLabel: 'Terminal Voltage (V_L):',
      currentLabel: 'Radial Load Current (I):',
      torqueLabel: 'Opposing Counter Torque (T):',
      powerLabel: 'Electrical Power Delivered:',
      pureDcNotice: 'Remarkable Property: Generates pure, ripple-free direct current without commutators or diodes! Characteristics: Very low voltage, massive current capability (used in railguns & metallurgy).',
      play: 'Spin Disc',
      pause: 'Freeze Rotation',
      reset: 'Reset'
    },
    hi: {
      title: 'फैराडे डिस्क / होमोपोलर जनरेटर सिमुलेटर',
      subtitle: 'त्रिज्यीय गतिक ईएमएफ एवं बिना कम्यूटेटर के शुद्ध रिपल-मुक्त डीसी प्रेरण का विश्लेषण करें',
      speedLabel: 'डिस्क घूर्णन गति (RPM):',
      bFieldLabel: 'अक्षीय चुंबकीय फ्लक्स घनत्व (B):',
      radiusLabel: 'डिस्क त्रिज्या (R):',
      loadLabel: 'बाह्य लोड प्रतिरोध (R_L):',
      emfLabel: 'उत्पन्न गतिक ईएमएफ (E = ½ B ω R²):',
      terminalVLabel: 'टर्मिनल वोल्टेज (V_L):',
      currentLabel: 'त्रिज्यीय लोड धारा (I):',
      torqueLabel: 'विरोधी यांत्रिक टॉर्क (T):',
      powerLabel: 'प्रदत्त विद्युत शक्ति:',
      pureDcNotice: 'विशेषता: बिना कम्यूटेटर या डायोड के शुद्ध, बिना रिपल वाली डीसी उत्पन्न करता है! लक्षण: अत्यंत निम्न वोल्टेज, विशाल धारा क्षमता (रेल-गन एवं धातुकर्म में प्रयुक्त)।',
      play: 'डिस्क घुमाएं',
      pause: 'रोकें',
      reset: 'रीसेट'
    },
    bn: {
      title: 'ফ্যারাডে ডিস্ক / হোমোপোলার জেনারেটর সিমুলেটর',
      subtitle: 'অরীয় মোশনাল ইএমএফ ও কমিউটেটরবিহীন বিশুদ্ধ রিপল-মুক্ত ডিসি আবেশ বিশ্লেষণ করো',
      speedLabel: 'ডিস্কের ঘূর্ণন গতি (RPM):',
      bFieldLabel: 'অক্ষীয় চৌম্বক ফ্লাক্স ঘনত্ব (B):',
      radiusLabel: 'ডিস্কের ব্যাসার্ধ (R):',
      loadLabel: 'বহিঃস্থ লোড রোধ (R_L):',
      emfLabel: 'উৎপন্ন মোশনাল ইএমএফ (E = ½ B ω R²):',
      terminalVLabel: 'টার্মিনাল ভোল্টেজ (V_L):',
      currentLabel: 'অরীয় লোড কারেন্ট (I):',
      torqueLabel: 'বিপরীতমুখী যান্ত্রিক টর্ক (T):',
      powerLabel: 'সরবরাহকৃত বৈদ্যুতিক ক্ষমতা:',
      pureDcNotice: 'অনবদ্য বৈশিষ্ট্য: কোনো কমিউটেটর বা রেক্টিফায়ার ছাড়াই সম্পূর্ণ মসৃণ খাঁটি ডিসি তৈরি করে! বৈশিষ্ট্য: অতি নিম্ন ভোল্টেজ এবং বিপুল কারেন্ট প্রবাহ (রেলগান ও ধাতু নিষ্কাশনে ব্যবহৃত)।',
      play: 'ডিস্ক ঘোরান',
      pause: 'থামান',
      reset: 'রিসেট'
    }
  }[currentLanguage];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div>
          <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <Disc className="w-5 h-5 text-amber-400" />
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
              setRpm(1200);
              setBFieldT(1.5);
              setDiscRadiusCm(15);
              setLoadResistanceOhm(0.05);
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
        {/* Left: Faraday Disc Schematic (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl p-3 border border-slate-800 relative">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-400 mb-1">
            <span>Rotating Copper Disc in Axial B-field</span>
            <span className="font-mono text-cyan-400">ω = {omega.toFixed(1)} rad/s</span>
          </div>

          <svg viewBox="0 0 500 270" className="w-full h-64 select-none">
            <defs>
              <radialGradient id="copperGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="70%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#92400e" />
              </radialGradient>
              <marker id="lorentzArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
              </marker>
              <marker id="rotArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Background B-field Symbols (Crosses indicating field INTO page) */}
            <g opacity="0.3">
              {[60, 110, 160, 210, 260, 310, 360, 410, 450].map((x) =>
                [40, 80, 120, 160, 200, 240].map((y) => (
                  <g key={`b-${x}-${y}`}>
                    <circle cx={x} cy={y} r="5" fill="none" stroke="#38bdf8" strokeWidth="1" />
                    <line x1={x - 3} y1={y - 3} x2={x + 3} y2={y + 3} stroke="#38bdf8" strokeWidth="1" />
                    <line x1={x - 3} y1={y + 3} x2={x + 3} y2={y - 3} stroke="#38bdf8" strokeWidth="1" />
                  </g>
                ))
              )}
            </g>
            <text x="30" y="25" fill="#38bdf8" fontSize="9.5" fontWeight="bold">
              Axial Field B = {bFieldT} T (Into Page ⊗)
            </text>

            {/* The Rotating Solid Copper Disc (Center at (220, 135)) */}
            <g transform="translate(220, 135)">
              {/* Copper Disc Body */}
              <circle cx="0" cy="0" r="95" fill="url(#copperGrad)" stroke="#f59e0b" strokeWidth="3" />

              {/* Spoke lines to visualize rotation */}
              <g transform={`rotate(${rotationAngle})`}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                  <line
                    key={`spoke-${deg}`}
                    x1="0"
                    y1="0"
                    x2={95 * Math.cos((deg * Math.PI) / 180)}
                    y2={95 * Math.sin((deg * Math.PI) / 180)}
                    stroke="#78350f"
                    strokeWidth="1.2"
                    strokeDasharray="4 3"
                  />
                ))}
              </g>

              {/* Central Axle / Shaft (Center Contact) */}
              <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="0" cy="0" r="6" fill="#38bdf8" />

              {/* Radial Motional EMF Vector: Center to Rim */}
              <line x1="0" y1="0" x2="0" y2="-85" stroke="#ef4444" strokeWidth="3.5" markerEnd="url(#lorentzArrow)" />
              <text x="8" y="-45" fill="#fecaca" fontSize="10" fontWeight="bold">
                E = v × B (Radial)
              </text>

              {/* Rotation Direction indicator */}
              <path
                d="M -70 -70 A 99 99 0 0 1 70 -70"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                markerEnd="url(#rotArrow)"
              />
              <text x="0" y="-105" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">
                Rotation ω ({rpm} RPM)
              </text>

              {/* Sliding Rim Brush (Top Peripheral Contact) */}
              <g transform="translate(0, -95)">
                <rect x="-12" y="-12" width="24" height="12" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
                <text x="18" y="-3" fill="#fbbf24" fontSize="9.5" fontWeight="bold">Rim Brush (+)</text>
              </g>

              {/* Center Axle Brush */}
              <text x="-20" y="24" fill="#38bdf8" fontSize="9.5" fontWeight="bold">Center Brush (-)</text>
            </g>

            {/* Circuit Connections from Rim Brush and Axle Brush to Load */}
            {/* Top wire from Rim brush to Load */}
            <path d="M 220 28 L 410 28 L 410 95" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
            {/* Bottom wire from Axle brush to Load */}
            <path d="M 220 135 L 360 135 L 360 175 L 410 175 L 410 145" fill="none" stroke="#38bdf8" strokeWidth="2.5" />

            {/* External Load Box */}
            <g transform="translate(410, 120)">
              <rect x="-25" y="-25" width="50" height="50" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
              <text x="0" y="-5" fill="#10b981" fontSize="10" fontWeight="bold" textAnchor="middle">LOAD</text>
              <text x="0" y="12" fill="#ffffff" fontSize="9" textAnchor="middle">{loadResistanceOhm * 1000} mΩ</text>
            </g>

            {/* DC Voltmeter & Ammeter Display */}
            <g transform="translate(370, 220)">
              <rect x="-50" y="-15" width="160" height="42" rx="6" fill="#020617" stroke="#334155" />
              <text x="30" y="3" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">
                V_DC = {terminalVoltage.toFixed(3)} V
              </text>
              <text x="30" y="19" fill="#34d399" fontSize="10" textAnchor="middle">
                I_DC = {currentAmps.toFixed(1)} A (Steady DC)
              </text>
            </g>
          </svg>
        </div>

        {/* Right: Calculations & Output Metrics (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 rounded-xl p-3 border border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 block mb-2">
              Faraday Generator Analytical Formulas
            </span>

            <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 mb-2 font-mono text-[11px] text-cyan-300">
              E = ∫₀ᴿ (ω·r)·B dr = ½ · B · ω · R² = B · π · R² · f
            </div>

            <div className="space-y-2 mb-3">
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-[11px] text-slate-400">{labels.emfLabel}</span>
                <span className="text-sm font-mono font-bold text-amber-400">{generatedEMF.toFixed(3)} V</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-[11px] text-slate-400">{labels.terminalVLabel}</span>
                <span className="text-sm font-mono font-bold text-emerald-400">{terminalVoltage.toFixed(3)} V</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-[11px] text-slate-400">{labels.currentLabel}</span>
                <span className="text-sm font-mono font-bold text-cyan-400">{currentAmps.toFixed(1)} A</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-[11px] text-slate-400">{labels.torqueLabel}</span>
                <span className="text-sm font-mono font-bold text-red-400">{counterTorqueNm.toFixed(3)} N·m</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-[11px] text-slate-400">{labels.powerLabel}</span>
                <span className="text-sm font-mono font-bold text-purple-400">{outputPowerW.toFixed(1)} W</span>
              </div>
            </div>
          </div>

          <div className="p-2 bg-amber-950/40 border border-amber-800/60 rounded-lg text-[10px] text-amber-200">
            {labels.pureDcNotice}
          </div>
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.speedLabel}</span>
            <span className="font-mono font-bold text-sky-400">{rpm} RPM</span>
          </div>
          <input
            type="range"
            min="200"
            max="3600"
            step="50"
            value={rpm}
            onChange={(e) => setRpm(Number(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.bFieldLabel}</span>
            <span className="font-mono font-bold text-amber-400">{bFieldT.toFixed(2)} T</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3.0"
            step="0.1"
            value={bFieldT}
            onChange={(e) => setBFieldT(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.radiusLabel}</span>
            <span className="font-mono font-bold text-emerald-400">{discRadiusCm} cm</span>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={discRadiusCm}
            onChange={(e) => setDiscRadiusCm(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400">{labels.loadLabel}</span>
            <span className="font-mono font-bold text-purple-400">{(loadResistanceOhm * 1000).toFixed(0)} mΩ</span>
          </div>
          <input
            type="range"
            min="0.01"
            max="0.20"
            step="0.01"
            value={loadResistanceOhm}
            onChange={(e) => setLoadResistanceOhm(Number(e.target.value))}
            className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
