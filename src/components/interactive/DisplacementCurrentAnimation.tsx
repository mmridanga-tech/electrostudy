import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Play, Pause, RotateCcw, Info, Activity, Layers, Disc } from 'lucide-react';
import { Language } from '../../types';

interface DisplacementCurrentAnimationProps {
  currentLanguage: Language;
}

export const DisplacementCurrentAnimation: React.FC<DisplacementCurrentAnimationProps> = ({
  currentLanguage
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [voltagePeakV, setVoltagePeakV] = useState<number>(12); // Volts
  const [freqHz, setFreqHz] = useState<number>(1.0); // Hz
  const [relativePermittivity, setRelativePermittivity] = useState<number>(3.0); // dielectric constant
  const [animTime, setAnimTime] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Animation frame loop
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;
        if (isPlaying) {
          setAnimTime((prev) => prev + dt);
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
  }, [isPlaying]);

  // Capacitor parameters
  // Plate area A = 0.01 m^2 (10cm x 10cm), gap d = 2 mm = 0.002 m
  const eps0 = 8.854e-12;
  const plateAreaA = 0.01;
  const plateSeparationD = 0.002;
  const capacitanceC = (eps0 * relativePermittivity * plateAreaA) / plateSeparationD;

  const omega = 2 * Math.PI * freqHz;
  // V(t) = V0 * sin(omega * t)
  // I_c(t) = C * dV/dt = C * V0 * omega * cos(omega * t)
  const instantV = voltagePeakV * Math.sin(omega * animTime);
  const instantIc = capacitanceC * voltagePeakV * omega * Math.cos(omega * animTime); // Amperes

  // Electric field between plates: E(t) = V(t) / d
  const instantE = instantV / plateSeparationD; // V/m
  // D(t) = eps * E(t)
  const instantD = eps0 * relativePermittivity * instantE; // C/m^2
  // J_d(t) = dD/dt = eps * (1/d) * dV/dt
  const instantJd = (eps0 * relativePermittivity / plateSeparationD) * voltagePeakV * omega * Math.cos(omega * animTime);
  // Total displacement current: I_d = J_d * A = I_c !
  const instantId = instantJd * plateAreaA;

  const labels = {
    en: {
      title: 'Displacement Current & Ampère-Maxwell Law Simulator',
      subtitle: 'Analyze Maxwell’s displacement current J_d = ∂D/∂t sustaining circuit continuity across an insulating capacitor gap',
      voltageSlider: 'AC Excitation Voltage (V₀):',
      freqSlider: 'Excitation Frequency (f):',
      dielectricSlider: 'Dielectric Permittivity (ε_r):',
      play: 'Play Simulation',
      pause: 'Pause Simulation',
      reset: 'Reset Default',
      vCapLabel: 'Instantaneous Plate Voltage V(t):',
      iWireLabel: 'Conduction Current in Wires (I_c):',
      iDispLabel: 'Displacement Current in Gap (I_d):',
      jDispLabel: 'Displacement Current Density (J_d = ∂D/∂t):',
      continuityTitle: 'The Capacitor Paradox & Circuit Continuity',
      continuityDesc: 'In a charging capacitor, electric charge accumulates on the metal plates, but zero real electrons or physical ions traverse the insulating dielectric gap. Maxwell realized that a time-varying electric field generates a displacement current density J_d = ∂D/∂t inside the gap whose integral I_d = ∬ J_d · dA exactly equals the wire conduction current I_c. Furthermore, this displacement flux creates an identical circulating magnetic field B around the gap as around the conducting wire!'
    },
    hi: {
      title: 'विस्थापन धारा एवं एम्पीयर-मैक्सवेल नियम सिमुलेटर',
      subtitle: 'परावैद्युत अंतराल में परिपथ निरंतरता बनाए रखने वाली विस्थापन धारा J_d = ∂D/∂t का विश्लेषण करें',
      voltageSlider: 'प्रत्यावर्ती वोल्टता शिखर (V₀):',
      freqSlider: 'आवृत्ति (f):',
      dielectricSlider: 'परावैद्युतांक (ε_r):',
      play: 'चालू करें',
      pause: 'रोकें',
      reset: 'रीसेट',
      vCapLabel: 'प्लेट वोल्टता V(t):',
      iWireLabel: 'तारों में चालन धारा (I_c):',
      iDispLabel: 'अंतराल में विस्थापन धारा (I_d):',
      jDispLabel: 'विस्थापन धारा घनत्व (J_d = ∂D/∂t):',
      continuityTitle: 'संधारित्र विरोधाभास एवं परिपथ निरंतरता',
      continuityDesc: 'संधारित्र के परावैद्युत अंतराल में कोई वास्तविक इलेक्ट्रॉन नहीं बहते, फिर भी परिपथ में धारा निरंतर रहती है। मैक्सवेल ने सिद्ध किया कि बदलते विद्युत क्षेत्र की दर (∂D/∂t) विस्थापन धारा उत्पन्न करती है, जिसका मान ठीक तार की चालन धारा (I_c) के बराबर होता है और यह समान चुंबकीय क्षेत्र B उत्पन्न करती है।'
    },
    bn: {
      title: 'সরণ কারেন্ট (Displacement Current) ও অ্যাম্পিয়ার-ম্যাক্সওয়েল সূত্র সিমুলেটর',
      subtitle: 'অন্তরক ডাই-ইলেকট্রিক ফাঁকে সার্কিটের ধারাবাহিকতা রক্ষাকারী সরণ কারেন্ট J_d = ∂D/∂t পর্যবেক্ষণ করো',
      voltageSlider: 'এসি ভোল্টেজ শীর্ষ মান (V₀):',
      freqSlider: 'কম্পাঙ্ক (f):',
      dielectricSlider: 'ডাই-ইলেকট্রিক ধ্রুবক (ε_r):',
      play: 'চালু করুন',
      pause: 'বিরতি',
      reset: 'রিসেট',
      vCapLabel: 'ক্যাপাসিটর ভোল্টেজ V(t):',
      iWireLabel: 'পরিবাহী তারে তড়িৎপ্রবাহ (I_c):',
      iDispLabel: 'ফাঁকে সরণ কারেন্ট (I_d):',
      jDispLabel: 'সরণ কারেন্ট ঘনত্ব (J_d = ∂D/∂t):',
      continuityTitle: 'ক্যাপাসিটর প্যারাডক্স ও কারেন্ট ধারাবাহিকতা',
      continuityDesc: 'ক্যাপাসিটরের ডাই-ইলেকট্রিক ব্যবধানে কোনো বাস্তব ইলেকট্রন চলাচল করে না। তবুও সময়-পরিবর্তনশীল তড়িৎ ফ্লাক্সের পরিবর্তনের হার (∂D/∂t) সরণ কারেন্ট তৈরি করে, যা তারের পরিবহন কারেন্টের (I_c) হুবহু সমান এবং সমমানের চৌম্বক ক্ষেত্র B সৃষ্টি করে।'
    }
  }[currentLanguage] || {
    title: 'Displacement Current & Ampère-Maxwell Law Simulator',
    subtitle: 'Analyze Maxwell’s displacement current J_d = ∂D/∂t',
    voltageSlider: 'AC Excitation Voltage (V₀):',
    freqSlider: 'Excitation Frequency (f):',
    dielectricSlider: 'Dielectric Permittivity (ε_r):',
    play: 'Play Simulation',
    pause: 'Pause Simulation',
    reset: 'Reset Default',
    vCapLabel: 'Plate Voltage V(t):',
    iWireLabel: 'Conduction Current (I_c):',
    iDispLabel: 'Displacement Current (I_d):',
    jDispLabel: 'Displacement Current Density (J_d):',
    continuityTitle: 'The Capacitor Paradox & Circuit Continuity',
    continuityDesc: 'A time-varying electric field generates displacement current density J_d = ∂D/∂t inside the dielectric gap.'
  };

  const handleReset = () => {
    setIsPlaying(true);
    setVoltagePeakV(12);
    setFreqHz(1.0);
    setRelativePermittivity(3.0);
    setAnimTime(0);
  };

  // Electron animation drift offset in wire
  const electronDriftOffset = (animTime * 80 * Math.sin(omega * animTime)) % 40;

  return (
    <div
      className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 text-white shadow-xl max-w-4xl mx-auto"
      id="simulation-displacement-current"
      role="region"
      aria-label="Displacement Current Simulation"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-teal-950/80 border border-teal-700/50 text-teal-400">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">{labels.title}</h3>
            <p className="text-xs text-slate-400">{labels.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label={isPlaying ? labels.pause : labels.play}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label={labels.reset}
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>{labels.reset}</span>
          </button>
        </div>
      </div>

      {/* Main Simulation Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* SVG Canvas: Capacitor and Circuit with Drift & Field */}
        <div className="lg:col-span-2 bg-slate-950 rounded-xl border border-slate-800 p-3 flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]">
          <svg
            viewBox="0 0 460 300"
            className="w-full h-auto max-h-[320px]"
            role="img"
            aria-label="Capacitor conduction current and displacement current diagram"
          >
            <defs>
              <marker id="arrow-disp" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#2dd4bf" />
              </marker>
              <marker id="arrow-wire-i" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Dark background */}
            <rect width="460" height="300" fill="#030712" />

            {/* AC Source at Bottom */}
            <g transform="translate(230, 260)">
              <circle cx="0" cy="0" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <path d="M -9 0 Q -4.5 -8 0 0 Q 4.5 8 9 0" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="0" y="28" fill="#94a3b8" fontSize="10" textAnchor="middle">
                AC V(t) = {instantV.toFixed(1)} V
              </text>
            </g>

            {/* Left Connecting Wire */}
            <path d="M 212 260 L 60 260 L 60 140 L 175 140" fill="none" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
            {/* Right Connecting Wire */}
            <path d="M 248 260 L 400 260 L 400 140 L 285 140" fill="none" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />

            {/* Conduction Current Vector on Left Wire */}
            {Math.abs(instantIc) > 1e-10 && (
              <g>
                <line
                  x1={instantIc > 0 ? 90 : 130}
                  y1="140"
                  x2={instantIc > 0 ? 130 : 90}
                  y2="140"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  markerEnd="url(#arrow-wire-i)"
                />
                <text x="110" y="125" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  I_c (Conduction)
                </text>
              </g>
            )}

            {/* Conduction Current Vector on Right Wire */}
            {Math.abs(instantIc) > 1e-10 && (
              <g>
                <line
                  x1={instantIc > 0 ? 330 : 370}
                  y1="140"
                  x2={instantIc > 0 ? 370 : 330}
                  y2="140"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  markerEnd="url(#arrow-wire-i)"
                />
                <text x="350" y="125" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                  I_c (Conduction)
                </text>
              </g>
            )}

            {/* Left Capacitor Plate */}
            <rect
              x="175"
              y="60"
              width="14"
              height="160"
              rx="3"
              fill={instantV >= 0 ? '#ef4444' : '#3b82f6'}
              stroke="#ffffff"
              strokeWidth="1.5"
            />
            {/* Right Capacitor Plate */}
            <rect
              x="271"
              y="60"
              width="14"
              height="160"
              rx="3"
              fill={instantV >= 0 ? '#3b82f6' : '#ef4444'}
              stroke="#ffffff"
              strokeWidth="1.5"
            />

            {/* Dielectric Gap Background */}
            <rect
              x="189"
              y="60"
              width="82"
              height="160"
              fill="#0f766e"
              fillOpacity="0.12"
              stroke="#14b8a6"
              strokeDasharray="4 4"
            />
            <text x="230" y="50" fill="#14b8a6" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              Dielectric Gap (ε_r = {relativePermittivity})
            </text>

            {/* Electric Field & Displacement Lines in Gap */}
            {[80, 105, 130, 155, 180, 205].map((yPos, idx) => {
              const isEForward = instantV >= 0;
              const xStart = isEForward ? 193 : 267;
              const xEnd = isEForward ? 267 : 193;

              return (
                <line
                  key={idx}
                  x1={xStart}
                  y1={yPos}
                  x2={xEnd}
                  y2={yPos}
                  stroke="#2dd4bf"
                  strokeWidth="2.5"
                  strokeDasharray={Math.abs(instantJd) > 1e-6 ? 'none' : '3 3'}
                  markerEnd="url(#arrow-disp)"
                  opacity={0.3 + 0.7 * (Math.abs(instantV) / voltagePeakV)}
                />
              );
            })}

            {/* Label in Gap for J_d */}
            <g transform="translate(230, 140)">
              <rect x="-42" y="-12" width="84" height="24" rx="4" fill="#042f2e" stroke="#0d9488" strokeWidth="1" />
              <text x="0" y="4" fill="#2dd4bf" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                J_d = ∂D/∂t
              </text>
            </g>

            {/* Bottom Status Banner */}
            <g transform="translate(15, 260)">
              <rect width="180" height="28" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="90" y="18" fill="#2dd4bf" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                I_conduction ≡ I_displacement
              </text>
            </g>
          </svg>
        </div>

        {/* Real-Time Mathematical Telemetry */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-3.5 flex flex-col justify-between space-y-3">
          <div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>Current Continuity Match</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-teal-300">
                I_c = dQ/dt ≡ I_d = ∬ (∂D/∂t) · dA
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                Capacitance C = <span className="text-white font-bold">{(capacitanceC * 1e12).toFixed(1)} pF</span>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">{labels.iWireLabel}</span>
                <span className="font-mono font-bold text-sky-400">
                  {(instantIc * 1e6).toFixed(2)} µA
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">{labels.iDispLabel}</span>
                <span className="font-mono font-bold text-teal-400">
                  {(instantId * 1e6).toFixed(2)} µA
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">Displacement Flux (J_d):</span>
                <span className="font-mono font-bold text-emerald-400">
                  {(instantJd * 1e6).toFixed(2)} µA/m²
                </span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 flex items-start gap-2">
            <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
            <span>
              Zero electrons cross the dielectric gap. Continuity is preserved strictly by the displacement flux rate ∂D/∂t.
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
        {/* Voltage Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.voltageSlider}</span>
            <span className="font-mono font-bold text-teal-300">{voltagePeakV} V</span>
          </div>
          <input
            type="range"
            min="2"
            max="48"
            step="2"
            value={voltagePeakV}
            onChange={(e) => setVoltagePeakV(Number(e.target.value))}
            className="w-full accent-teal-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label={labels.voltageSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>2 V</span>
            <span>24 V</span>
            <span>48 V</span>
          </div>
        </div>

        {/* Frequency Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.freqSlider}</span>
            <span className="font-mono font-bold text-sky-300">{freqHz.toFixed(1)} Hz</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3.0"
            step="0.2"
            value={freqHz}
            onChange={(e) => setFreqHz(Number(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label={labels.freqSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>0.2 Hz</span>
            <span>1.0 Hz</span>
            <span>3.0 Hz</span>
          </div>
        </div>

        {/* Permittivity Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.dielectricSlider}</span>
            <span className="font-mono font-bold text-amber-300">{relativePermittivity.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="1.0"
            max="8.0"
            step="0.5"
            value={relativePermittivity}
            onChange={(e) => setRelativePermittivity(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label={labels.dielectricSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>1.0 (Air)</span>
            <span>3.0 (Mylar)</span>
            <span>8.0 (Glass)</span>
          </div>
        </div>
      </div>

      {/* Conceptual Explanation Box */}
      <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs leading-relaxed text-slate-300">
        <h4 className="font-bold text-teal-300 mb-1 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-teal-400" />
          <span>{labels.continuityTitle}</span>
        </h4>
        <p>{labels.continuityDesc}</p>
      </div>
    </div>
  );
};
