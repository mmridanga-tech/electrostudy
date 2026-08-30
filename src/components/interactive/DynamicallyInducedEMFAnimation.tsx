import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Zap, Compass, ArrowRight, Gauge, Check, Info } from 'lucide-react';
import { Language } from '../../types';

interface DynamicallyInducedEMFAnimationProps {
  currentLanguage: Language;
}

export const DynamicallyInducedEMFAnimation: React.FC<DynamicallyInducedEMFAnimationProps> = ({ currentLanguage }) => {
  // Simulator state
  const [bField, setBField] = useState<number>(1.2); // Tesla (T)
  const [length, setLength] = useState<number>(0.5); // meters (m)
  const [velocity, setVelocity] = useState<number>(10.0); // m/s
  const [theta, setTheta] = useState<number>(90); // degrees
  const [isCircuitClosed, setIsCircuitClosed] = useState<boolean>(true);
  const [loadResistance, setLoadResistance] = useState<number>(5.0); // Ohms
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [conductorPos, setConductorPos] = useState<number>(0.2); // 0.0 to 1.0 along rails

  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());

  // Mathematical calculations
  const thetaRad = (theta * Math.PI) / 180;
  const sinTheta = Math.sin(thetaRad);
  // e = B * l * v * sin(theta)
  const inducedEMF = bField * length * velocity * sinTheta;
  const inducedCurrent = isCircuitClosed && loadResistance > 0 ? inducedEMF / loadResistance : 0;
  const powerDissipated = isCircuitClosed ? inducedCurrent * inducedEMF : 0;
  const opposingLorentzForce = isCircuitClosed ? bField * inducedCurrent * length * sinTheta : 0;

  // Animation Loop
  useEffect(() => {
    const updateMotion = (now: number) => {
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (isPlaying) {
        setConductorPos((prev) => {
          // Speed scaled for smooth visualization
          const speedFactor = (velocity / 20) * 0.4;
          let next = prev + speedFactor * dt;
          if (next > 0.85) next = 0.15; // Loop back
          return next;
        });
      }
      animFrameRef.current = requestAnimationFrame(updateMotion);
    };

    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(updateMotion);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, velocity]);

  const labels = {
    en: {
      title: 'Dynamically Induced (Motional) EMF Simulator',
      subtitle: 'Conductor moving across magnetic flux cutting field lines (e = B · l · v · sin θ)',
      magneticField: 'Magnetic Flux Density (B)',
      length: 'Conductor Active Length (l)',
      velocity: 'Conductor Velocity (v)',
      angle: 'Cutting Angle (θ)',
      circuitState: 'Circuit Loop State',
      closed: 'Closed Circuit (Current flows)',
      open: 'Open Circuit (Terminal EMF only)',
      loadRes: 'Load Resistance (R)',
      emfReading: 'Induced Motional EMF (e)',
      currentReading: 'Induced Loop Current (i)',
      powerReading: 'Electric Power (P = e·i)',
      lorentzForce: 'Opposing Lorentz Force (F = B·I·l)',
      presets: 'Angle Presets (θ)',
      play: 'Play Motion',
      pause: 'Pause Motion',
      reset: 'Reset Default',
      maxEMF: 'Peak EMF (θ = 90°)',
      zeroEMF: 'Zero EMF (Parallel motion θ = 0° / 180°)',
      flemingsTip: "Fleming's Right-Hand Rule: Motion (Thumb) ↑, Field (Index) →, Induced Current (Middle) ⊙ into page.",
      chargeSeparation: 'Charge Separation: Lorentz force pushes free electrons to bottom terminal, leaving top positive.',
      conductor: 'Moving Conductor Rod',
      magneticPoles: 'Magnetic Poles (N → S Field)',
      galvanometer: 'Galvanometer / Voltmeter',
    },
    hi: {
      title: 'गतिक रूप से प्रेरित ईएमएफ (Motional EMF) सिमुलेटर',
      subtitle: 'चुंबकीय फ्लक्स रेखाओं को काटते हुए गतिमान चालक (e = B · l · v · sin θ)',
      magneticField: 'चुंबकीय फ्लक्स घनत्व (B)',
      length: 'चालक की सक्रिय लंबाई (l)',
      velocity: 'चालक का वेग (v)',
      angle: 'कर्तन कोण (θ)',
      circuitState: 'परिपथ लूप स्थिति',
      closed: 'बंद परिपथ (धारा प्रवाहित)',
      open: 'खुला परिपथ (केवल टर्मिनल EMF)',
      loadRes: 'लोड प्रतिरोध (R)',
      emfReading: 'प्रेरित गतिक EMF (e)',
      currentReading: 'प्रेरित परिपथ धारा (i)',
      powerReading: 'विद्युत शक्ति (P = e·i)',
      lorentzForce: 'विरोधी लोरेंट्ज़ बल (F = B·I·l)',
      presets: 'कोण प्रीसेट (θ)',
      play: 'गति चलाएं',
      pause: 'रोकें',
      reset: 'रीसेट',
      maxEMF: 'अधिकतम EMF (θ = 90°)',
      zeroEMF: 'शून्य EMF (समानांतर गति θ = 0° / 180°)',
      flemingsTip: 'फ्लेमिंग का दायां हाथ नियम: गति (अंगूठा) ↑, क्षेत्र (तर्जनी) →, प्रेरित धारा (मध्यमा) ⊙ अंदर।',
      chargeSeparation: 'आवेश पृथक्करण: लोरेंट्ज़ बल मुक्त इलेक्ट्रॉनों को नीचे की ओर धकेलता है।',
      conductor: 'गतिमान चालक छड़',
      magneticPoles: 'चुंबकीय ध्रुव (N → S)',
      galvanometer: 'गैल्वेनोमीटर / वोल्टमीटर',
    },
    bn: {
      title: 'গতিশীলভাবে আবিষ্ট ইএমএফ (Motional EMF) সিমুলেটর',
      subtitle: 'চৌম্বক ফ্লাক্স কর্তনকারী গতিশীল পরিবাহী দণ্ড (e = B · l · v · sin θ)',
      magneticField: 'চৌম্বক ফ্লাক্স ঘনত্ব (B)',
      length: 'পরিবাহীর সক্রিয় দৈর্ঘ্য (l)',
      velocity: 'পরিবাহীর বেগ (v)',
      angle: 'কর্তন কোণ (θ)',
      circuitState: 'বর্তনী লুপ অবস্থা',
      closed: 'বদ্ধ বর্তনী (কারেন্ট প্রবাহিত)',
      open: 'উন্মুক্ত বর্তনী (শুধু টার্মিনাল EMF)',
      loadRes: 'লোড রোধ (R)',
      emfReading: 'আবিষ্ট মোশনাল EMF (e)',
      currentReading: 'আবিষ্ট লুপ কারেন্ট (i)',
      powerReading: 'বৈদ্যুতিক ক্ষমতা (P = e·i)',
      lorentzForce: 'বিপরীত লোরেন্টজ বল (F = B·I·l)',
      presets: 'কোণ প্রিসেট (θ)',
      play: 'প্লে করুন',
      pause: 'পজ করুন',
      reset: 'রিসেট',
      maxEMF: 'সর্বোচ্চ EMF (θ = 90°)',
      zeroEMF: 'শূন্য EMF (সমান্তরাল গতি θ = 0° / 180°)',
      flemingsTip: 'ফ্লেমিংয়ের ডানহস্ত নিয়ম: গতি (বৃদ্ধাঙ্গুলি) ↑, ক্ষেত্র (তর্জনী) →, আবিষ্ট কারেন্ট (মধ্যমা) ⊙ ভেতরে।',
      chargeSeparation: 'চার্জ পৃথকীকরণ: লোরেন্টজ বল মুক্ত ইলেকট্রনকে নিচের টার্মিনালে জমায়, উপরের টার্মিনাল ধনাত্মক হয়।',
      conductor: 'গতিশীল পরিবাহী দণ্ড',
      magneticPoles: 'চৌম্বক মেরু (N → S)',
      galvanometer: 'গ্যালভানোমিটার / ভোল্টমিটার',
    }
  }[currentLanguage];

  // Visual SVG Rail Coordinates
  const railXStart = 80;
  const railXEnd = 440;
  const rodX = railXStart + conductorPos * (railXEnd - railXStart);
  const railTopY = 60;
  const railBottomY = 180;

  // Meter needle deflection angle (-70 deg to +70 deg)
  const maxMeterEMF = 25.0; // Volts scale
  const needleAngle = Math.max(-70, Math.min(70, (inducedEMF / maxMeterEMF) * 70));

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 text-slate-100 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-400 animate-pulse" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-100">{labels.title}</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              isPlaying
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
            }`}
            aria-label={isPlaying ? labels.pause : labels.play}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? labels.pause : labels.play}</span>
          </button>

          <button
            onClick={() => {
              setBField(1.2);
              setLength(0.5);
              setVelocity(10.0);
              setTheta(90);
              setIsCircuitClosed(true);
              setLoadResistance(5.0);
            }}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
            title={labels.reset}
            aria-label={labels.reset}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Visual Animation Viewport */}
        <div className="lg:col-span-8 bg-slate-900/80 rounded-xl border border-slate-800 p-4 flex flex-col items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 520 250" className="w-full h-auto max-h-[300px]">
            <defs>
              {/* Magnetic field dot/cross pattern */}
              <pattern id="bFieldCrossPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="7" fill="none" stroke="#0284c7" strokeWidth="1" opacity="0.4" />
                <line x1="10" y1="10" x2="20" y2="20" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
                <line x1="20" y1="10" x2="10" y2="20" stroke="#38bdf8" strokeWidth="1.5" opacity="0.6" />
              </pattern>
              {/* Markers */}
              <marker id="dynVecV" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#f59e0b" />
              </marker>
              <marker id="dynVecI" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M 0 0 L 5 3 L 0 6 z" fill="#10b981" />
              </marker>
            </defs>

            {/* Magnetic Field Region (Inward Magnetic Field - Crosses) */}
            <rect x="50" y="40" width="420" height="160" rx="8" fill="#032b43" opacity="0.3" />
            <rect x="50" y="40" width="420" height="160" rx="8" fill="url(#bFieldCrossPattern)" />
            <text x="65" y="32" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
              Uniform Magnetic Field B = {bField.toFixed(2)} T (⊗ Inward into Page)
            </text>

            {/* Conducting U-Rails */}
            {/* Top Rail */}
            <line x1="70" y1={railTopY} x2="450" y2={railTopY} stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
            {/* Bottom Rail */}
            <line x1="70" y1={railBottomY} x2="450" y2={railBottomY} stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
            {/* Left Bridge (Connecting Rails through Load Resistor/Meter) */}
            <line x1="70" y1={railTopY} x2="70" y2="100" stroke="#94a3b8" strokeWidth="5" />
            <line x1="70" y1="140" x2="70" y2={railBottomY} stroke="#94a3b8" strokeWidth="5" />

            {/* Switch & Load Resistor on Left Arm */}
            <g transform="translate(70, 120)">
              {/* Load resistor box */}
              <rect x="-14" y="-18" width="28" height="36" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
              <text x="0" y="4" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">
                R={loadResistance}Ω
              </text>
              {/* Switch graphic */}
              {isCircuitClosed ? (
                <line x1="0" y1="-28" x2="0" y2="-18" stroke="#10b981" strokeWidth="3" />
              ) : (
                <line x1="0" y1="-28" x2="10" y2="-18" stroke="#ef4444" strokeWidth="3" strokeDasharray="2 2" />
              )}
            </g>

            {/* Moving Conductor Rod */}
            <g transform={`translate(${rodX}, 0)`}>
              {/* Glow filter under rod */}
              <line x1="0" y1={railTopY - 10} x2="0" y2={railBottomY + 10} stroke="#f59e0b" strokeWidth="12" opacity="0.3" strokeLinecap="round" />
              {/* Conductor Bar */}
              <line x1="0" y1={railTopY - 8} x2="0" y2={railBottomY + 8} stroke="#e2e8f0" strokeWidth="6" strokeLinecap="round" />

              {/* Polarity markers on moving rod */}
              <circle cx="0" cy={railTopY - 4} r="8" fill="#ef4444" />
              <text x="0" y="-1" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">+</text>

              <circle cx="0" cy={railBottomY + 4} r="8" fill="#3b82f6" />
              <text x="0" y="7" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">-</text>

              {/* Velocity Vector (v) with angle theta */}
              {(() => {
                const vecLen = Math.min(50, 20 + velocity * 1.8);
                const vx = vecLen * Math.sin(thetaRad);
                const vy = -vecLen * Math.cos(thetaRad);
                return (
                  <g>
                    <line x1="0" y1="120" x2={vx} y2={120 + vy} stroke="#f59e0b" strokeWidth="3" markerEnd="url(#dynVecV)" />
                    <text x={vx + 6} y={120 + vy} fill="#f59e0b" fontSize="10" fontWeight="bold">
                      v ({velocity} m/s)
                    </text>
                  </g>
                );
              })()}

              {/* Length indicator label */}
              <text x="-12" y="120" fill="#cbd5e1" fontSize="9" fontWeight="bold" textAnchor="end">
                l = {length}m
              </text>
            </g>

            {/* Current Flow Dots on Circuit Rails if closed */}
            {isCircuitClosed && inducedCurrent > 0.01 && (
              <g>
                {/* Arrow along top rail moving left */}
                <line x1={rodX - 20} y1={railTopY} x2={rodX - 45} y2={railTopY} stroke="#10b981" strokeWidth="2.5" markerEnd="url(#dynVecI)" />
                {/* Arrow along bottom rail moving right */}
                <line x1="120" y1={railBottomY} x2="145" y2={railBottomY} stroke="#10b981" strokeWidth="2.5" markerEnd="url(#dynVecI)" />
                {/* Upward in conductor rod */}
                <line x1={rodX} y1="150" x2={rodX} y2="90" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#dynVecI)" />
                <text x={rodX + 8} y="95" fill="#10b981" fontSize="9" fontWeight="bold">
                  i = {inducedCurrent.toFixed(2)}A
                </text>
              </g>
            )}

            {/* Live Formula Banner at bottom */}
            <rect x="50" y="210" width="420" height="30" rx="6" fill="#0f172a" stroke="#334155" />
            <text x="260" y="230" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
              e = B · l · v · sin(θ) = {bField.toFixed(1)} × {length.toFixed(1)} × {velocity.toFixed(1)} × sin({theta}°) = {inducedEMF.toFixed(3)} V
            </text>
          </svg>

          {/* Quick Explanation Footer */}
          <div className="w-full mt-2 p-2.5 rounded-lg bg-slate-950/90 border border-slate-800 text-[11px] text-slate-300 flex items-start gap-2">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-cyan-300">{labels.flemingsTip}</p>
              <p className="text-slate-400 mt-0.5">{labels.chargeSeparation}</p>
            </div>
          </div>
        </div>

        {/* Live Gauges & Digital Readouts */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Voltmeter Gauge Graphic */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-2">
              <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5">
                <Gauge className="w-4 h-4 text-cyan-400" />
                {labels.galvanometer}
              </span>
              <span className="text-xs font-mono font-bold text-cyan-400">
                0 – 25V Scale
              </span>
            </div>

            {/* Analog Meter SVG */}
            <svg viewBox="0 0 200 110" className="w-44 h-24">
              <path d="M 20 95 A 80 80 0 0 1 180 95" fill="none" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
              <path d="M 20 95 A 80 80 0 0 1 180 95" fill="none" stroke="#0284c7" strokeWidth="4" strokeDasharray="3 4" />
              {/* Needle pivot */}
              <circle cx="100" cy="95" r="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              {/* Needle */}
              <line
                x1="100"
                y1="95"
                x2="100"
                y2="28"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
                transform={`rotate(${needleAngle}, 100, 95)`}
                className="transition-transform duration-100"
              />
              <text x="25" y="105" fill="#94a3b8" fontSize="9" fontWeight="bold">0V</text>
              <text x="100" y="20" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">12.5V</text>
              <text x="175" y="105" fill="#94a3b8" fontSize="9" fontWeight="bold">25V</text>
            </svg>

            {/* Big Digital Readouts */}
            <div className="grid grid-cols-2 gap-2 w-full mt-2">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">{labels.emfReading}</span>
                <span className="text-lg font-bold font-mono text-cyan-400">
                  {inducedEMF.toFixed(3)} <span className="text-xs">V</span>
                </span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">{labels.currentReading}</span>
                <span className={`text-lg font-bold font-mono ${isCircuitClosed ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {isCircuitClosed ? inducedCurrent.toFixed(3) : '0.000'} <span className="text-xs">A</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full mt-2">
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">{labels.powerReading}</span>
                <span className="text-sm font-bold font-mono text-amber-400">
                  {powerDissipated.toFixed(3)} <span className="text-[10px]">W</span>
                </span>
              </div>
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 text-center">
                <span className="text-[10px] text-slate-400 block font-mono">{labels.lorentzForce}</span>
                <span className="text-sm font-bold font-mono text-purple-400">
                  {opposingLorentzForce.toFixed(3)} <span className="text-[10px]">N</span>
                </span>
              </div>
            </div>
          </div>

          {/* Angle Presets */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-3">
            <span className="text-xs font-mono font-bold text-slate-400 block mb-2">{labels.presets}</span>
            <div className="grid grid-cols-4 gap-1.5">
              {[0, 45, 90, 180].map((ang) => (
                <button
                  key={ang}
                  onClick={() => setTheta(ang)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold font-mono transition-all ${
                    theta === ang
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {ang}°
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-800">
        {/* Magnetic Flux Density B */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="b-slider" className="text-xs font-medium text-slate-300">{labels.magneticField}</label>
            <span className="text-xs font-bold font-mono text-cyan-400">{bField.toFixed(2)} T</span>
          </div>
          <input
            id="b-slider"
            type="range"
            min="0.1"
            max="2.5"
            step="0.1"
            value={bField}
            onChange={(e) => setBField(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            aria-label={labels.magneticField}
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>0.1 T</span>
            <span>2.5 T</span>
          </div>
        </div>

        {/* Conductor Active Length l */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="l-slider" className="text-xs font-medium text-slate-300">{labels.length}</label>
            <span className="text-xs font-bold font-mono text-amber-400">{length.toFixed(2)} m</span>
          </div>
          <input
            id="l-slider"
            type="range"
            min="0.1"
            max="2.0"
            step="0.05"
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
            aria-label={labels.length}
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>0.1 m</span>
            <span>2.0 m</span>
          </div>
        </div>

        {/* Velocity v */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="v-slider" className="text-xs font-medium text-slate-300">{labels.velocity}</label>
            <span className="text-xs font-bold font-mono text-emerald-400">{velocity.toFixed(1)} m/s</span>
          </div>
          <input
            id="v-slider"
            type="range"
            min="0.0"
            max="25.0"
            step="0.5"
            value={velocity}
            onChange={(e) => setVelocity(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            aria-label={labels.velocity}
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
            <span>0 m/s</span>
            <span>25 m/s</span>
          </div>
        </div>

        {/* Angle Slider theta & Circuit Switch */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="theta-slider" className="text-xs font-medium text-slate-300">{labels.angle}</label>
              <span className="text-xs font-bold font-mono text-purple-400">{theta}° (sin={sinTheta.toFixed(2)})</span>
            </div>
            <input
              id="theta-slider"
              type="range"
              min="0"
              max="180"
              step="1"
              value={theta}
              onChange={(e) => setTheta(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
              aria-label={labels.angle}
            />
          </div>

          <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-800">
            <span className="text-[11px] text-slate-400">{labels.circuitState}</span>
            <button
              onClick={() => setIsCircuitClosed(!isCircuitClosed)}
              className={`px-2.5 py-1 rounded text-xs font-bold font-mono transition-colors ${
                isCircuitClosed
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-red-500/20 text-red-300 border border-red-500/40'
              }`}
              aria-pressed={isCircuitClosed}
            >
              {isCircuitClosed ? labels.closed : labels.open}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
