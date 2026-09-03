import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Play, Pause, RotateCcw, Info, Activity, Compass, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../../types';

interface ElectromagneticWavePropagationAnimationProps {
  currentLanguage: Language;
}

export const ElectromagneticWavePropagationAnimation: React.FC<ElectromagneticWavePropagationAnimationProps> = ({
  currentLanguage
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [frequencyMhz, setFrequencyMhz] = useState<number>(100); // 100 MHz
  const [amplitudeE0, setAmplitudeE0] = useState<number>(10); // V/m
  const [direction, setDirection] = useState<'+x' | '-x'>('+x');
  const [mediumEpsR, setMediumEpsR] = useState<number>(1.0); // 1.0 = vacuum, 4.0 = glass/dielectric
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

  // Physical calculations
  // c0 = 3e8 m/s
  // v = c0 / sqrt(epsR)
  // lambda = v / f
  // eta = eta0 / sqrt(epsR) where eta0 = 376.73 Ohm
  // H0 = E0 / eta
  // Poynting peak S0 = E0 * H0 = E0^2 / eta
  const c0 = 2.99792458e8; // m/s
  const eta0 = 376.73; // Ohms
  const vWave = c0 / Math.sqrt(mediumEpsR);
  const freqHz = frequencyMhz * 1e6;
  const wavelengthM = vWave / freqHz;
  const etaMedium = eta0 / Math.sqrt(mediumEpsR);
  const amplitudeH0 = amplitudeE0 / etaMedium;
  const poyntingS0 = amplitudeE0 * amplitudeH0; // W/m^2

  const labels = {
    en: {
      title: 'Uniform Plane Electromagnetic Wave & Poynting Vector Simulator',
      subtitle: 'Analyze 3D transverse TEM propagation, E ⟂ H ⟂ S orthogonality, phase velocity v = 1/√(με), and wave impedance η',
      freqSlider: 'Wave Frequency (f):',
      ampSlider: 'Electric Field Amplitude (E₀):',
      mediumLabel: 'Medium Dielectric (ε_r):',
      directionLabel: 'Propagation Direction (k):',
      play: 'Play Simulation',
      pause: 'Pause Simulation',
      reset: 'Reset Default',
      velLabel: 'Phase Velocity (v = c / √ε_r):',
      wavelengthLabel: 'Wavelength (λ = v / f):',
      etaLabel: 'Intrinsic Impedance (η = √(μ/ε)):',
      hAmpLabel: 'Magnetic Amplitude (H₀ = E₀ / η):',
      poyntingLabel: 'Peak Poynting Vector (S = E × H):',
      temPrincipleTitle: 'Transverse Electromagnetic (TEM) Mode & Poynting Vector',
      temPrincipleDesc: 'In an isotropic lossless medium, uniform plane waves are strictly Transverse Electromagnetic (TEM): the electric vector E and magnetic vector H are mutually orthogonal (E ⟂ H), and both oscillate completely perpendicular to the direction of propagation k. The instantaneous power flow is given by the Poynting vector S = E × H, pointing in the exact direction of energy transport.'
    },
    hi: {
      title: 'समतल विद्युत-चुंबकीय तरंग एवं पॉइन्टिंग सदिश सिमुलेटर',
      subtitle: 'त्रिविमीय अनुप्रस्थ (TEM) संचरण, E ⟂ H ⟂ S लंबकोणीयता, तरंग वेग v = 1/√(με) एवं प्रतिबाधा η का अध्ययन करें',
      freqSlider: 'तरंग आवृत्ति (f):',
      ampSlider: 'विद्युत क्षेत्र आयाम (E₀):',
      mediumLabel: 'माध्यम परावैद्युतांक (ε_r):',
      directionLabel: 'संचरण दिशा (k):',
      play: 'चालू करें',
      pause: 'रोकें',
      reset: 'रीसेट',
      velLabel: 'तरंग वेग (v = c / √ε_r):',
      wavelengthLabel: 'तरंगदैर्घ्य (λ = v / f):',
      etaLabel: 'आंतरिक प्रतिबाधा (η = √(μ/ε)):',
      hAmpLabel: 'चुंबकीय आयाम (H₀ = E₀ / η):',
      poyntingLabel: 'शिखर पॉइन्टिंग सदिश (S = E × H):',
      temPrincipleTitle: 'अनुप्रस्थ विद्युत-चुंबकीय (TEM) मोड एवं पॉइन्टिंग सदिश',
      temPrincipleDesc: 'समतल विद्युत-चुंबकीय तरंग में विद्युत क्षेत्र E एवं चुंबकीय क्षेत्र H परस्पर लंबवत होते हैं तथा दोनों ही संचरण दिशा k के भी लंबवत होते हैं। ऊर्जा प्रवाह घनत्व पॉइन्टिंग सदिश S = E × H द्वारा दिया जाता है, जो तरंग की दिशा में निर्देशित होता है।'
    },
    bn: {
      title: 'ইউনিফর্ম প্লেন তড়িচ্চুম্বকীয় তরঙ্গ ও পয়েন্টিং ভেক্টর সিমুলেটর',
      subtitle: 'ত্রিমাত্রিক অনুপ্রস্থ (TEM) তরঙ্গের গতি, E ⟂ H ⟂ S লম্বতা, তরঙ্গ বেগ v = 1/√(με) এবং চরিত্রগত প্রতিবন্ধকতা η পর্যবেক্ষণ করো',
      freqSlider: 'কম্পাঙ্ক (f):',
      ampSlider: 'তড়িৎ ক্ষেত্র বিস্তার (E₀):',
      mediumLabel: 'ডাই-ইলেকট্রিক ধ্রুবক (ε_r):',
      directionLabel: 'তরঙ্গ অভিমুখ (k):',
      play: 'চালু করুন',
      pause: 'বিরতি',
      reset: 'রিসেট',
      velLabel: 'তরঙ্গ বেগ (v = c / √ε_r):',
      wavelengthLabel: 'তরঙ্গদৈর্ঘ্য (λ = v / f):',
      etaLabel: 'অভ্যন্তরীণ প্রতিবন্ধকতা (η):',
      hAmpLabel: 'চৌম্বক বিস্তার (H₀ = E₀ / η):',
      poyntingLabel: 'শীর্ষ পয়েন্টিং ভেক্টর (S = E × H):',
      temPrincipleTitle: 'ট্রান্সভার্স ইলেকট্রোম্যাগনেটিক (TEM) মোড ও পয়েন্টিং ভেক্টর',
      temPrincipleDesc: 'সমজাতীয় মাধ্যমে প্লেন ওয়েভ সম্পূর্ণরূপে অনুপ্রস্থ (TEM): E এবং H পরস্পর সমকোণে থাকে এবং উভয়ই তরঙ্গের গতির অভিমুখের সাথে লম্ব। শক্তির প্রবাহ দিক পয়েন্টিং ভেক্টর S = E × H দ্বারা নির্ধারিত হয়।'
    }
  }[currentLanguage] || {
    title: 'Uniform Plane Electromagnetic Wave & Poynting Vector Simulator',
    subtitle: 'Analyze 3D transverse TEM propagation and Poynting vector S = E × H',
    freqSlider: 'Wave Frequency (f):',
    ampSlider: 'Electric Field Amplitude (E₀):',
    mediumLabel: 'Medium Dielectric (ε_r):',
    directionLabel: 'Propagation Direction (k):',
    play: 'Play Simulation',
    pause: 'Pause Simulation',
    reset: 'Reset Default',
    velLabel: 'Phase Velocity:',
    wavelengthLabel: 'Wavelength:',
    etaLabel: 'Intrinsic Impedance:',
    hAmpLabel: 'Magnetic Amplitude:',
    poyntingLabel: 'Poynting Vector (S = E × H):',
    temPrincipleTitle: 'Transverse Electromagnetic (TEM) Mode',
    temPrincipleDesc: 'E and H are mutually perpendicular and orthogonal to propagation direction.'
  };

  const handleReset = () => {
    setIsPlaying(true);
    setFrequencyMhz(100);
    setAmplitudeE0(10);
    setDirection('+x');
    setMediumEpsR(1.0);
    setAnimTime(0);
  };

  // 3D Isometric projection calculations for SVG
  // X axis (propagation) runs from left to right along x: (originX + s * stepX, originY)
  // Y axis (Electric Field E) runs vertically UP / DOWN
  // Z axis (Magnetic Field H) runs obliquely into / out of screen (depth projection)
  // E(x, t) = E0 * cos(k*x - omega*t) along y
  // H(x, t) = H0 * cos(k*x - omega*t) along z
  const numSamplePoints = 28;
  const originX = 50;
  const originY = 150;
  const spanX = 360;
  const stepX = spanX / numSamplePoints;

  const kPhaseSign = direction === '+x' ? -1 : 1;
  const wavePhaseSpeed = 2.0; // scaled visual oscillation speed
  const waveSpatialPeriods = 2.0; // 2 complete spatial wavelengths along canvas

  return (
    <div
      className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 text-white shadow-xl max-w-4xl mx-auto"
      id="simulation-em-wave-propagation"
      role="region"
      aria-label="Electromagnetic Wave Propagation Simulation"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-pink-950/80 border border-pink-700/50 text-pink-400">
            <Compass className="w-5 h-5" />
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
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label={isPlaying ? labels.pause : labels.play}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500"
            aria-label={labels.reset}
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>{labels.reset}</span>
          </button>
        </div>
      </div>

      {/* Main 3D Wave Propagation Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* SVG 3D Canvas */}
        <div className="lg:col-span-2 bg-slate-950 rounded-xl border border-slate-800 p-3 flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]">
          <svg
            viewBox="0 0 460 300"
            className="w-full h-auto max-h-[320px]"
            role="img"
            aria-label="3D uniform plane wave showing orthogonal E and H sinusoids"
          >
            <defs>
              <marker id="wave-arrow-e" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#38bdf8" />
              </marker>
              <marker id="wave-arrow-h" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
                <path d="M0,0 L5,2.5 L0,5 Z" fill="#ec4899" />
              </marker>
              <marker id="wave-arrow-prop" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 Z" fill="#10b981" />
              </marker>
            </defs>

            {/* Dark background */}
            <rect width="460" height="300" fill="#030712" />

            {/* 3D Coordinate Reference Axes */}
            {/* Main Propagation Axis X (Center Horizontal) */}
            <line x1="30" y1={originY} x2="430" y2={originY} stroke="#475569" strokeWidth="2" />
            <line
              x1={direction === '+x' ? 410 : 50}
              y1={originY}
              x2={direction === '+x' ? 435 : 25}
              y2={originY}
              stroke="#10b981"
              strokeWidth="3"
              markerEnd="url(#wave-arrow-prop)"
            />
            <text x="435" y={originY - 8} fill="#10b981" fontSize="11" fontWeight="bold" fontFamily="monospace">
              +X (k, S)
            </text>

            {/* Vertical Y-axis (Electric Field E) */}
            <line x1={originX} y1="35" x2={originX} y2="265" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x={originX + 6} y="45" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
              +Y (E-Field)
            </text>

            {/* Oblique Z-axis (Magnetic Field H) */}
            <line x1="20" y1="180" x2="80" y2="120" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="75" y="115" fill="#ec4899" fontSize="11" fontWeight="bold" fontFamily="monospace">
              +Z (H-Field)
            </text>

            {/* Sinusoidal Wave Ribs (Transverse E and H vectors) */}
            {Array.from({ length: numSamplePoints + 1 }).map((_, idx) => {
              const xPos = originX + idx * stepX;
              const normalizedX = idx / numSamplePoints;
              // Spatial phase: k * x - omega * t
              const spatialAngle = normalizedX * 2 * Math.PI * waveSpatialPeriods;
              const temporalPhase = animTime * wavePhaseSpeed * 2 * Math.PI;
              const phase = spatialAngle * (direction === '+x' ? 1 : -1) - temporalPhase;

              // Normalized amplitude
              const sinVal = Math.sin(phase);
              // E field height (vertical along Y)
              const eHeight = -sinVal * 55; // 55 px peak
              // H field oblique offset (along isometric Z: dx = +0.7 * val, dy = +0.5 * val)
              const hMagnitude = sinVal * 42;
              const hDx = hMagnitude * 0.7;
              const hDy = hMagnitude * 0.5;

              return (
                <g key={idx}>
                  {/* Vertical E-vector (Sky Blue) */}
                  {Math.abs(sinVal) > 0.08 && (
                    <line
                      x1={xPos}
                      y1={originY}
                      x2={xPos}
                      y2={originY + eHeight}
                      stroke="#38bdf8"
                      strokeWidth="1.8"
                      markerEnd="url(#wave-arrow-e)"
                      opacity="0.85"
                    />
                  )}

                  {/* Oblique H-vector (Pink) */}
                  {Math.abs(sinVal) > 0.08 && (
                    <line
                      x1={xPos}
                      y1={originY}
                      x2={xPos + hDx}
                      y2={originY + hDy}
                      stroke="#ec4899"
                      strokeWidth="1.8"
                      markerEnd="url(#wave-arrow-h)"
                      opacity="0.85"
                    />
                  )}
                </g>
              );
            })}

            {/* Continuous Envelope Curves for E and H */}
            <path
              d={Array.from({ length: numSamplePoints + 1 })
                .map((_, idx) => {
                  const xPos = originX + idx * stepX;
                  const normalizedX = idx / numSamplePoints;
                  const spatialAngle = normalizedX * 2 * Math.PI * waveSpatialPeriods;
                  const temporalPhase = animTime * wavePhaseSpeed * 2 * Math.PI;
                  const phase = spatialAngle * (direction === '+x' ? 1 : -1) - temporalPhase;
                  const yVal = originY - Math.sin(phase) * 55;
                  return `${idx === 0 ? 'M' : 'L'} ${xPos} ${yVal}`;
                })
                .join(' ')}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.5"
            />

            <path
              d={Array.from({ length: numSamplePoints + 1 })
                .map((_, idx) => {
                  const xPos = originX + idx * stepX;
                  const normalizedX = idx / numSamplePoints;
                  const spatialAngle = normalizedX * 2 * Math.PI * waveSpatialPeriods;
                  const temporalPhase = animTime * wavePhaseSpeed * 2 * Math.PI;
                  const phase = spatialAngle * (direction === '+x' ? 1 : -1) - temporalPhase;
                  const sinVal = Math.sin(phase);
                  const hDx = sinVal * 42 * 0.7;
                  const hDy = sinVal * 42 * 0.5;
                  return `${idx === 0 ? 'M' : 'L'} ${xPos + hDx} ${originY + hDy}`;
                })
                .join(' ')}
              fill="none"
              stroke="#ec4899"
              strokeWidth="2.5"
              strokeDasharray="4 2"
            />

            {/* In-canvas Vector Direction Legend */}
            <g transform="translate(15, 260)">
              <rect width="250" height="30" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <line x1="12" y1="15" x2="30" y2="15" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#wave-arrow-e)" />
              <text x="36" y="19" fill="#38bdf8" fontSize="10" fontFamily="monospace">E (y-axis)</text>
              <line x1="100" y1="15" x2="118" y2="15" stroke="#ec4899" strokeWidth="2.5" markerEnd="url(#wave-arrow-h)" />
              <text x="124" y="19" fill="#ec4899" fontSize="10" fontFamily="monospace">H (z-axis)</text>
              <line x1="185" y1="15" x2="205" y2="15" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#wave-arrow-prop)" />
              <text x="212" y="19" fill="#10b981" fontSize="10" fontFamily="monospace">S (x-axis)</text>
            </g>
          </svg>
        </div>

        {/* Real-time Wave Metrics Readout */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-3.5 flex flex-col justify-between space-y-3">
          <div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-pink-400" />
              <span>Wave Mechanics & Impedance</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-pink-300">
                S = E × H (W/m²)
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {labels.velLabel} <span className="text-white font-bold">{(vWave / 1e6).toFixed(1)} × 10⁶ m/s</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                {labels.wavelengthLabel} <span className="text-white font-bold">{wavelengthM.toFixed(2)} m</span>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">{labels.etaLabel}</span>
                <span className="font-mono font-bold text-amber-400">
                  {etaMedium.toFixed(1)} Ω
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">{labels.hAmpLabel}</span>
                <span className="font-mono font-bold text-pink-400">
                  {(amplitudeH0 * 1e3).toFixed(2)} mA/m
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">{labels.poyntingLabel}</span>
                <span className="font-mono font-bold text-emerald-400">
                  {(poyntingS0 * 1e3).toFixed(2)} mW/m²
                </span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 flex items-start gap-2">
            <Info className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
            <span>
              Orthogonal Triad: E (y) × H (z) = S (x). Energy flows along +x with zero dispersion in lossless media.
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
        {/* Frequency Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.freqSlider}</span>
            <span className="font-mono font-bold text-sky-300">{frequencyMhz} MHz</span>
          </div>
          <input
            type="range"
            min="20"
            max="300"
            step="10"
            value={frequencyMhz}
            onChange={(e) => setFrequencyMhz(Number(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label={labels.freqSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>20 MHz</span>
            <span>150</span>
            <span>300 MHz</span>
          </div>
        </div>

        {/* Amplitude Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.ampSlider}</span>
            <span className="font-mono font-bold text-pink-300">{amplitudeE0} V/m</span>
          </div>
          <input
            type="range"
            min="2"
            max="25"
            step="1"
            value={amplitudeE0}
            onChange={(e) => setAmplitudeE0(Number(e.target.value))}
            className="w-full accent-pink-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label={labels.ampSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>2 V/m</span>
            <span>12 V/m</span>
            <span>25 V/m</span>
          </div>
        </div>

        {/* Medium Selection */}
        <div>
          <label htmlFor="medium-select" className="block text-xs font-semibold text-slate-300 mb-1 flex items-center justify-between">
            <span>{labels.mediumLabel}</span>
            <span className="font-mono font-bold text-amber-300">{mediumEpsR.toFixed(1)}</span>
          </label>
          <select
            id="medium-select"
            value={mediumEpsR}
            onChange={(e) => setMediumEpsR(Number(e.target.value))}
            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value={1.0}>Vacuum (ε_r = 1.0, c = 3e8 m/s)</option>
            <option value={2.25}>Polyethylene (ε_r = 2.25)</option>
            <option value={4.0}>Glass / Dielectric (ε_r = 4.0, v = c/2)</option>
            <option value={9.0}>Alumina Ceramic (ε_r = 9.0, v = c/3)</option>
          </select>
        </div>

        {/* Propagation Direction Toggle */}
        <div className="flex flex-col justify-between">
          <div className="text-xs font-semibold text-slate-300 mb-1">
            {labels.directionLabel}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setDirection('+x')}
              className={`py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 border transition-all ${
                direction === '+x'
                  ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>Forward (+X)</span>
            </button>
            <button
              type="button"
              onClick={() => setDirection('-x')}
              className={`py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 border transition-all ${
                direction === '-x'
                  ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Reverse (-X)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Conceptual Explanation Box */}
      <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs leading-relaxed text-slate-300">
        <h4 className="font-bold text-pink-300 mb-1 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-pink-400" />
          <span>{labels.temPrincipleTitle}</span>
        </h4>
        <p>{labels.temPrincipleDesc}</p>
      </div>
    </div>
  );
};
