import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Info, Activity, Disc, Zap } from 'lucide-react';
import { Language } from '../../types';

interface FaradayLawFieldInductionAnimationProps {
  currentLanguage: Language;
}

export const FaradayLawFieldInductionAnimation: React.FC<FaradayLawFieldInductionAnimationProps> = ({
  currentLanguage
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [fluxPeakB0, setFluxPeakB0] = useState<number>(1.5); // Peak Tesla
  const [frequencyHz, setFrequencyHz] = useState<number>(1.0); // Hz
  const [coreRadiusMm, setCoreRadiusMm] = useState<number>(45); // mm
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

  // Instantaneous magnetic field and time derivative
  // B(t) = B0 * sin(omega * t)
  // dB/dt = B0 * omega * cos(omega * t)
  // Inside core of radius a:
  // ∮ E · dl = E * (2πr) = - dPhi/dt = - A * dB/dt = - (π a^2) * dB/dt
  // For r > a: E(r) = - (a^2 / 2r) * dB/dt
  const omega = 2 * Math.PI * frequencyHz;
  const instantB = fluxPeakB0 * Math.sin(omega * animTime);
  const instantdBdt = fluxPeakB0 * omega * Math.cos(omega * animTime);

  const coreRadiusM = coreRadiusMm * 1e-3;
  const coreArea = Math.PI * coreRadiusM * coreRadiusM; // m^2
  const instantEMF = -coreArea * instantdBdt; // Volts

  // E-field at r = 80 mm (sample observer radius)
  const sampleRadiusM = 0.08;
  const sampleEField = - (coreRadiusM * coreRadiusM) / (2 * sampleRadiusM) * instantdBdt;

  const labels = {
    en: {
      title: 'Faraday’s Law: Induced Electric Vortex Field Simulator',
      subtitle: 'Analyze the differential field formulation ∇ × E = -∂B/∂t creating circulating electric force lines in free space',
      fluxSlider: 'Magnetic Flux Density Peak (B₀):',
      freqSlider: 'AC Excitation Frequency (f):',
      coreSlider: 'Magnetic Core Radius (a):',
      play: 'Play Simulation',
      pause: 'Pause Simulation',
      reset: 'Reset Default',
      bFieldLabel: 'Instantaneous Core Flux Density B(t):',
      dBdtLabel: 'Rate of Flux Change (∂B/∂t):',
      emfLabel: 'Induced Circulation EMF (∮ E · dl):',
      eFieldLabel: 'Vortex Electric Field E at r=80mm:',
      lenzNoteTitle: 'Maxwell-Faraday Field Principle (∇ × E = -∂B/∂t)',
      lenzNoteDesc: 'Faraday’s induction law is fundamentally an electromagnetic field equation: wherever magnetic flux changes in time (∂B/∂t ≠ 0), a circulating, non-conservative electric field E is induced everywhere in space—even in complete vacuum without physical metal wires! If a conductive loop is introduced, this vortex field drives free electrons to produce induced current according to Lenz’s law.'
    },
    hi: {
      title: 'फैराडे का नियम: प्रेरित विद्युत भंवर क्षेत्र सिमुलेटर',
      subtitle: 'अवकल समीकरण ∇ × E = -∂B/∂t द्वारा अंतरिक्ष में उत्पन्न चक्रीय विद्युत बल रेखाओं का अध्ययन करें',
      fluxSlider: 'चुंबकीय फ्लक्स घनत्व शिखर (B₀):',
      freqSlider: 'प्रत्यावर्ती आवृत्ति (f):',
      coreSlider: 'चुंबकीय क्रोड त्रिज्या (a):',
      play: 'चालू करें',
      pause: 'रोकें',
      reset: 'रीसेट',
      bFieldLabel: 'तात्कालिक क्रोड फ्लक्स B(t):',
      dBdtLabel: 'फ्लक्स परिवर्तन दर (∂B/∂t):',
      emfLabel: 'प्रेरित परिसंचरण ईएमएफ (∮ E · dl):',
      eFieldLabel: 'भंवर विद्युत क्षेत्र E (r=80mm पर):',
      lenzNoteTitle: 'मैक्सवेल-फैराडे क्षेत्र सिद्धांत (∇ × E = -∂B/∂t)',
      lenzNoteDesc: 'समय के साथ बदलते चुंबकीय फ्लक्स के चारों ओर अंतरिक्ष में एक बंद चक्राकार (भंवर) विद्युत क्षेत्र E स्वतः उत्पन्न होता है, भले ही वहां कोई धातु का तार न हो। यदि चालक रखा जाए तो यही प्रेरित धारा उत्पन्न करता है।'
    },
    bn: {
      title: 'ফ্যারাডের সূত্র: আবিষ্ট ঘূর্ণি তড়িৎ ক্ষেত্র সিমুলেটর',
      subtitle: 'ডিফারেনশিয়াল ক্ষেত্র সমীকরণ ∇ × E = -∂B/∂t দ্বারা শূন্যস্থানে উৎপন্ন ঘূর্ণায়মান তড়িৎ বলরেখা পর্যবেক্ষণ করো',
      fluxSlider: 'চৌম্বক ফ্লাক্স শীর্ষ মান (B₀):',
      freqSlider: 'কম্পাঙ্ক (f):',
      coreSlider: 'চৌম্বক মজ্জার ব্যাসার্ধ (a):',
      play: 'চালু করুন',
      pause: 'বিরতি',
      reset: 'রিসেট',
      bFieldLabel: 'তাৎক্ষণিক ফ্লাক্স ঘনত্ব B(t):',
      dBdtLabel: 'ফ্লাক্স পরিবর্তনের হার (∂B/∂t):',
      emfLabel: 'আবিষ্ট লুপ ইএমএফ (∮ E · dl):',
      eFieldLabel: 'ঘূর্ণি তড়িৎ ক্ষেত্র E (r=80mm এ):',
      lenzNoteTitle: 'ম্যাক্সওয়েল-ফ্যারাডে ক্ষেত্র তত্ত্ব (∇ × E = -∂B/∂t)',
      lenzNoteDesc: 'স্থানটিতে কোনো তার না থাকলেও, পরিবর্তনশীল চৌম্বক ক্ষেত্র শূন্যস্থানের যেকোনো বিন্দুতে একটি অসর্বজনীন ঘূর্ণায়মান তড়িৎ ক্ষেত্র E তৈরি করে। লেঞ্জের সূত্রানুসারে এই ক্ষেত্রটি সর্বদা ফ্লাক্স পরিবর্তনের বিরোধিতা করে।'
    }
  }[currentLanguage] || {
    title: 'Faraday’s Law: Induced Electric Vortex Field Simulator',
    subtitle: 'Analyze the differential field formulation ∇ × E = -∂B/∂t',
    fluxSlider: 'Magnetic Flux Density Peak (B₀):',
    freqSlider: 'AC Excitation Frequency (f):',
    coreSlider: 'Magnetic Core Radius (a):',
    play: 'Play Simulation',
    pause: 'Pause Simulation',
    reset: 'Reset Default',
    bFieldLabel: 'Core Flux Density B(t):',
    dBdtLabel: 'Rate of Flux Change (∂B/∂t):',
    emfLabel: 'Induced Circulation EMF:',
    eFieldLabel: 'Vortex Electric Field E:',
    lenzNoteTitle: 'Maxwell-Faraday Field Principle (∇ × E = -∂B/∂t)',
    lenzNoteDesc: 'Changing magnetic flux creates non-conservative circulating electric field everywhere in space.'
  };

  const handleReset = () => {
    setIsPlaying(true);
    setFluxPeakB0(1.5);
    setFrequencyHz(1.0);
    setCoreRadiusMm(45);
    setAnimTime(0);
  };

  // Rotation and arrow direction for vortex E-field
  // Lenz law: when dB/dt > 0, E-field circulates clockwise; when dB/dt < 0, counter-clockwise
  const isClockwise = instantdBdt > 0;
  const eFieldMagnitudeRatio = Math.min(1, Math.abs(instantdBdt) / (fluxPeakB0 * 2 * Math.PI * 2.5));

  return (
    <div
      className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 text-white shadow-xl max-w-4xl mx-auto"
      id="simulation-faraday-law-field"
      role="region"
      aria-label="Faraday's Law Field Induction Simulation"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-sky-950/80 border border-sky-700/50 text-sky-400">
            <Zap className="w-5 h-5" />
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
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label={isPlaying ? labels.pause : labels.play}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
            aria-label={labels.reset}
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>{labels.reset}</span>
          </button>
        </div>
      </div>

      {/* Main Visualizer Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* SVG Canvas */}
        <div className="lg:col-span-2 bg-slate-950 rounded-xl border border-slate-800 p-3 flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]">
          <svg
            viewBox="0 0 460 300"
            className="w-full h-auto max-h-[320px]"
            role="img"
            aria-label="Faraday induction circulating electric vortex field diagram"
          >
            <defs>
              <marker id="vortex-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#38bdf8" />
              </marker>
            </defs>

            {/* Dark background */}
            <rect width="460" height="300" fill="#030712" />

            {/* Central Magnetic Flux Core */}
            {/* Color shifts between cyan (B > 0 pointing out) and orange/pink (B < 0 pointing in) */}
            <circle
              cx="230"
              cy="150"
              r={coreRadiusMm}
              fill={instantB >= 0 ? '#0284c7' : '#e11d48'}
              fillOpacity={0.15 + 0.45 * Math.abs(instantB) / fluxPeakB0}
              stroke={instantB >= 0 ? '#38bdf8' : '#fb7185'}
              strokeWidth="2.5"
            />
            <text x="230" y="145" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
              B(t) = {instantB.toFixed(2)} T
            </text>
            <text x="230" y="160" fill={instantB >= 0 ? '#38bdf8' : '#fb7185'} fontSize="10" fontFamily="monospace" textAnchor="middle">
              {instantB >= 0 ? '⊙ Flux Out' : '⊗ Flux In'}
            </text>

            {/* Circulating Concentric Electric Field Vortex Lines in Free Space */}
            {[coreRadiusMm + 20, coreRadiusMm + 45, coreRadiusMm + 70].map((ringRadius, idx) => {
              const rotationOffset = (animTime * 60 * (isClockwise ? 1 : -1)) % 360;

              return (
                <g key={idx}>
                  {/* Concentric circle */}
                  <circle
                    cx="230"
                    cy="150"
                    r={ringRadius}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="1.6"
                    strokeDasharray="6 4"
                    opacity={0.4 + 0.5 * eFieldMagnitudeRatio}
                  />

                  {/* 4 Direction arrows along the ring */}
                  {[0, 90, 180, 270].map((baseAngle, aIdx) => {
                    const angleDeg = baseAngle + (isClockwise ? rotationOffset : -rotationOffset);
                    const angleRad = (angleDeg * Math.PI) / 180;
                    const px = 230 + ringRadius * Math.cos(angleRad);
                    const py = 150 + ringRadius * Math.sin(angleRad);

                    // Tangent vector direction
                    const tangentAngle = angleRad + (isClockwise ? Math.PI / 2 : -Math.PI / 2);
                    const tipX = px + 12 * Math.cos(tangentAngle);
                    const tipY = py + 12 * Math.sin(tangentAngle);

                    return (
                      <line
                        key={aIdx}
                        x1={px}
                        y1={py}
                        x2={tipX}
                        y2={tipY}
                        stroke="#38bdf8"
                        strokeWidth="2"
                        markerEnd="url(#vortex-arrow)"
                      />
                    );
                  })}
                </g>
              );
            })}

            {/* Top Badge: Differential Law */}
            <g transform="translate(15, 15)">
              <rect width="180" height="26" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="90" y="17" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                ∇ × E = -∂B/∂t
              </text>
            </g>

            {/* Bottom Status Legend */}
            <g transform="translate(15, 260)">
              <rect width="250" height="30" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <line x1="12" y1="15" x2="32" y2="15" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#vortex-arrow)" />
              <text x="38" y="19" fill="#38bdf8" fontSize="10" fontFamily="monospace">Induced E-Vortex (V/m)</text>
              <circle cx="170" cy="15" r="5" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
              <text x="180" y="19" fill="#94a3b8" fontSize="10" fontFamily="monospace">Core B(t)</text>
            </g>
          </svg>
        </div>

        {/* Real-time Field Telemetry */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-3.5 flex flex-col justify-between space-y-3">
          <div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-sky-400" />
              <span>Instantaneous Field Dynamics</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-sky-300">
                ∮ E · dl = -dΦ_B/dt
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                Core Area (A = πa²): <span className="text-white font-bold">{(coreArea * 1e4).toFixed(2)} cm²</span>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">{labels.dBdtLabel}</span>
                <span className="font-mono font-bold text-amber-400">
                  {instantdBdt.toFixed(2)} T/s
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">{labels.emfLabel}</span>
                <span className="font-mono font-bold text-emerald-400">
                  {(instantEMF * 1e3).toFixed(2)} mV
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">{labels.eFieldLabel}</span>
                <span className="font-mono font-bold text-cyan-400">
                  {(sampleEField * 1e3).toFixed(2)} mV/m
                </span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 flex items-start gap-2">
            <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span>
              Lenz’s law orientation: Circulating {isClockwise ? 'Clockwise' : 'Counter-Clockwise'} to counter flux change.
            </span>
          </div>
        </div>
      </div>

      {/* Sliders and Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
        {/* Peak B0 Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.fluxSlider}</span>
            <span className="font-mono font-bold text-sky-300">{fluxPeakB0.toFixed(1)} T</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3.0"
            step="0.1"
            value={fluxPeakB0}
            onChange={(e) => setFluxPeakB0(Number(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label={labels.fluxSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>0.2 T</span>
            <span>1.5 T</span>
            <span>3.0 T</span>
          </div>
        </div>

        {/* Frequency Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.freqSlider}</span>
            <span className="font-mono font-bold text-amber-300">{frequencyHz.toFixed(1)} Hz</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3.0"
            step="0.2"
            value={frequencyHz}
            onChange={(e) => setFrequencyHz(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label={labels.freqSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>0.2 Hz</span>
            <span>1.0 Hz</span>
            <span>3.0 Hz</span>
          </div>
        </div>

        {/* Core Radius Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.coreSlider}</span>
            <span className="font-mono font-bold text-emerald-300">{coreRadiusMm} mm</span>
          </div>
          <input
            type="range"
            min="25"
            max="60"
            step="5"
            value={coreRadiusMm}
            onChange={(e) => setCoreRadiusMm(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label={labels.coreSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>25 mm</span>
            <span>45 mm</span>
            <span>60 mm</span>
          </div>
        </div>
      </div>

      {/* Conceptual Explanation Box */}
      <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs leading-relaxed text-slate-300">
        <h4 className="font-bold text-sky-300 mb-1 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-sky-400" />
          <span>{labels.lenzNoteTitle}</span>
        </h4>
        <p>{labels.lenzNoteDesc}</p>
      </div>
    </div>
  );
};
