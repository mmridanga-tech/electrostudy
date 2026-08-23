import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Zap, Sliders, Info, ShieldAlert } from 'lucide-react';

interface DCGeneratorEMFAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

export const DCGeneratorEMFAnimation: React.FC<DCGeneratorEMFAnimationProps> = ({ language = 'en' }) => {
  const [poles, setPoles] = useState<number>(4);
  const [fluxWb, setFluxWb] = useState<number>(0.025); // 25 mWb
  const [conductorsZ, setConductorsZ] = useState<number>(360);
  const [speedRpm, setSpeedRpm] = useState<number>(1200);
  const [windingType, setWindingType] = useState<'lap' | 'wave'>('lap');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [rotationAngle, setRotationAngle] = useState<number>(0);

  // Parallel paths
  const parallelPathsA = windingType === 'lap' ? poles : 2;

  // Generated EMF
  const generatedEMF = (poles * fluxWb * conductorsZ * speedRpm) / (60 * parallelPathsA);
  const fluxCutPerRev = poles * fluxWb;
  const timePerRev = speedRpm > 0 ? 60 / speedRpm : 0;
  const avgEmfPerConductor = timePerRev > 0 ? fluxCutPerRev / timePerRev : 0;
  const conductorsInSeriesPerPath = conductorsZ / parallelPathsA;

  // Animation frame loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (isPlaying) {
        // Rotation speed in deg/sec = (speedRpm / 60) * 360 = speedRpm * 6
        // Scale down slightly for visual clarity
        const speedScale = 0.15;
        setRotationAngle((prev) => (prev + speedRpm * 6 * speedScale * deltaTime) % 360);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, speedRpm]);

  const labels = {
    en: {
      title: 'Interactive DC Generator EMF Equation & Physical Simulator',
      subtitle: 'Adjust poles, magnetic flux, conductor count, speed, and winding type to explore induced EMF physics.',
      poles: 'Number of Poles (P)',
      flux: 'Flux per Pole (Φ)',
      conductors: 'Total Conductors (Z)',
      speed: 'Armature Speed (N)',
      winding: 'Winding Type',
      lap: 'Lap Winding (A = P)',
      wave: 'Wave Winding (A = 2)',
      parallelPaths: 'Parallel Paths (A)',
      generatedEmf: 'Generated EMF (Eg)',
      emfPerCond: 'Avg EMF / Conductor',
      condPerPath: 'Conductors in Series / Path',
      timeRev: 'Time for 1 Revolution (dt)',
      fluxCut: 'Flux Cut in 1 Rev (dΦ)',
      derivationTitle: 'Step-by-Step Mathematical Derivation',
      step1: '1. Flux cut per conductor in one revolution = dΦ = P · Φ Weber',
      step2: '2. Time taken for one revolution = dt = 60 / N seconds',
      step3: '3. Average EMF induced in 1 conductor = e_avg = dΦ / dt = (P · Φ · N) / 60 Volts',
      step4: '4. Number of conductors in series per path = Z / A',
      step5: '5. Total Generated EMF: Eg = (Z / A) · e_avg = (P · Φ · Z · N) / (60 · A)',
      presetTitle: 'Quick Presets',
      preset1: '4-Pole 240V Lap Dynamo',
      preset2: '2-Pole High-Speed 600V Wave',
      preset3: '6-Pole Heavy-Duty Industrial',
      reset: 'Reset Defaults',
      legendNorth: 'N Pole (Flux Source)',
      legendSouth: 'S Pole (Flux Sink)',
      legendForce: 'Velocity / Rotation (v)',
      legendFlux: 'Magnetic Field (B)',
      legendEmf: 'Induced Current / EMF (e)'
    },
    hi: {
      title: 'इंटरएक्टिव डीसी जनरेटर EMF समीकरण एवं भौतिक सिमुलेटर',
      subtitle: 'ध्रुवों, फ्लक्स, चालकों की संख्या, गति एवं वाइंडिंग प्रकार बदलकर प्रेरित EMF का अध्ययन करें।',
      poles: 'ध्रुवों की संख्या (P)',
      flux: 'प्रति ध्रुव फ्लक्स (Φ)',
      conductors: 'कुल चालक (Z)',
      speed: 'आर्मेचर गति (N)',
      winding: 'वाइंडिंग प्रकार',
      lap: 'लैप वाइंडिंग (A = P)',
      wave: 'वेव वाइंडिंग (A = 2)',
      parallelPaths: 'समानांतर पथ (A)',
      generatedEmf: 'उत्पन्न EMF (Eg)',
      emfPerCond: 'औसत EMF / चालक',
      condPerPath: 'श्रेणी चालक प्रति पथ',
      timeRev: '1 चक्कर का समय (dt)',
      fluxCut: '1 चक्कर में कटा फ्लक्स (dΦ)',
      derivationTitle: 'चरणबद्ध गणितीय निगमन',
      step1: '1. एक चक्कर में प्रति चालक द्वारा काटा गया फ्लक्स = dΦ = P · Φ वेबर',
      step2: '2. एक चक्कर में लगा समय = dt = 60 / N सेकंड',
      step3: '3. 1 चालक में प्रेरित औसत EMF = e_avg = dΦ / dt = (P · Φ · N) / 60 वोल्ट',
      step4: '4. प्रत्येक पथ में श्रेणीबद्ध चालकों की संख्या = Z / A',
      step5: '5. कुल उत्पन्न EMF: Eg = (Z / A) · e_avg = (P · Φ · Z · N) / (60 · A)',
      presetTitle: 'त्वरित प्रीसेट',
      preset1: '4-पोल 240V लैप डायनेमो',
      preset2: '2-पोल हाई-स्पीड 600V वेव',
      preset3: '6-पोल हेवी-ड्यूटी इंडस्ट्रियल',
      reset: 'डिफ़ॉल्ट रीसेट',
      legendNorth: 'N ध्रुव (फ्लक्स स्रोत)',
      legendSouth: 'S ध्रुव (फ्लक्स सिंक)',
      legendForce: 'वेग / घूर्णन (v)',
      legendFlux: 'चुंबकीय क्षेत्र (B)',
      legendEmf: 'प्रेरित धारा / EMF (e)'
    },
    bn: {
      title: 'ইন্টারেক্টিভ ডিসি জেনারেটর EMF সমীকরণ ও সিমুলেটর',
      subtitle: 'পোল সংখ্যা, চৌম্বক ফ্লাক্স, কন্ডাক্টর সংখ্যা, গতি এবং ওয়াইন্ডিং পরিবর্তন করে উৎপন্ন EMF পর্যবেক্ষণ করুন।',
      poles: 'পোল সংখ্যা (P)',
      flux: 'প্রতি পোলে ফ্লাক্স (Φ)',
      conductors: 'মোট কন্ডাক্টর (Z)',
      speed: 'আর্মেচার গতি (N)',
      winding: 'ওয়াইন্ডিং টাইপ',
      lap: 'ল্যাপ ওয়াইন্ডিং (A = P)',
      wave: 'ওয়েভ ওয়াইন্ডিং (A = 2)',
      parallelPaths: 'সমান্তরাল পথ (A)',
      generatedEmf: 'উৎপন্ন EMF (Eg)',
      emfPerCond: 'গড় EMF / কন্ডাক্টর',
      condPerPath: 'প্রতি পথে সিরিজে কন্ডাক্টর',
      timeRev: '১ ঘূর্ণনের সময় (dt)',
      fluxCut: '১ ঘূর্ণনে কাটা ফ্লাক্স (dΦ)',
      derivationTitle: 'ধাপে ধাপে গাণিতিক প্রতিপাদন',
      step1: '১. এক ঘূর্ণনে একটি কন্ডাক্টর দ্বারা কর্তিত ফ্লাক্স = dΦ = P · Φ ওয়েবার',
      step2: '২. একটি সম্পূর্ণ ঘূর্ণনের সময় = dt = ৬০ / N সেকেন্ড',
      step3: '৩. ১টি কন্ডাক্টরে আবিষ্ট গড় EMF = e_avg = dΦ / dt = (P · Φ · N) / ৬০ ভোল্ট',
      step4: '৪. প্রতি সমান্তরাল পথে সিরিজে কন্ডাক্টর সংখ্যা = Z / A',
      step5: '৫. মোট উৎপন্ন EMF: Eg = (Z / A) · e_avg = (P · Φ · Z · N) / (৬০ · A)',
      presetTitle: 'কুইক প্রিসেট',
      preset1: '৪-পোল ২৪০V ল্যাপ ডায়নামো',
      preset2: '২-পোল হাই-স্পিড ৬০০V ওয়েভ',
      preset3: '৬-পোল হেভি-ডিউটি ইন্ডাস্ট্রিয়াল',
      reset: 'রিসেট ডিফল্ট',
      legendNorth: 'N পোল (ফ্লাক্স উৎস)',
      legendSouth: 'S পোল (ফ্লাক্স গ্রাহক)',
      legendForce: 'গতিবেগ / ঘূর্ণন (v)',
      legendFlux: 'চৌম্বক ক্ষেত্র (B)',
      legendEmf: 'আবিষ্ট কারেন্ট / EMF (e)'
    }
  }[language];

  const applyPreset = (p: number, phi: number, z: number, n: number, w: 'lap' | 'wave') => {
    setPoles(p);
    setFluxWb(phi);
    setConductorsZ(z);
    setSpeedRpm(n);
    setWindingType(w);
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 md:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-400 animate-pulse" />
            <h3 className="text-lg md:text-xl font-bold text-slate-100">{labels.title}</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs md:text-sm transition-colors"
            aria-label={isPlaying ? 'Pause generator rotation' : 'Start generator rotation'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? 'Pause' : 'Rotate'}
          </button>
          <button
            onClick={() => applyPreset(4, 0.025, 360, 1200, 'lap')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs md:text-sm transition-colors"
            aria-label="Reset simulation to default parameters"
          >
            <RotateCcw className="w-4 h-4" />
            {labels.reset}
          </button>
        </div>
      </div>

      {/* Main Grid: Visual Canvas + Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Dynamic SVG Rotating Machine & Fleming Diagram (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 500 380" className="w-full h-auto max-h-[360px]" aria-label="DC Generator EMF Rotating Machine Cross-section">
            <defs>
              <linearGradient id="statorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="rotorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <radialGradient id="poleNorthGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#b91c1c" />
              </radialGradient>
              <radialGradient id="poleSouthGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </radialGradient>
              <marker id="fluxArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8" opacity="0.8" />
              </marker>
              <marker id="forceArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#eab308" />
              </marker>
            </defs>

            {/* Outer Stator Ring (Yoke) */}
            <circle cx="250" cy="190" r="160" fill="url(#statorGrad)" stroke="#475569" strokeWidth="4" />
            <circle cx="250" cy="190" r="125" fill="#090d16" stroke="#334155" strokeWidth="2" />

            {/* Stator Magnetic Poles based on P count */}
            {Array.from({ length: poles }).map((_, idx) => {
              const angleDeg = (idx * 360) / poles;
              const angleRad = (angleDeg * Math.PI) / 180;
              const isNorth = idx % 2 === 0;
              const poleR = 125;
              const px = 250 + Math.cos(angleRad) * poleR;
              const py = 190 + Math.sin(angleRad) * poleR;

              return (
                <g key={`pole-${idx}`} transform={`rotate(${angleDeg} 250 190)`}>
                  {/* Pole Shoe */}
                  <path
                    d="M 230 70 L 270 70 L 275 105 C 265 110 235 110 225 105 Z"
                    fill={isNorth ? 'url(#poleNorthGrad)' : 'url(#poleSouthGrad)'}
                    stroke="#0f172a"
                    strokeWidth="1.5"
                  />
                  {/* Pole Label */}
                  <text
                    x="250"
                    y="95"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="13"
                    fontWeight="bold"
                    fontFamily="sans-serif"
                  >
                    {isNorth ? 'N' : 'S'}
                  </text>
                </g>
              );
            })}

            {/* Magnetic Flux Lines (N to S) */}
            {poles === 2 && (
              <g opacity="0.65">
                <path d="M 250 105 L 250 275" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#fluxArrow)" />
                <path d="M 235 105 Q 210 190 235 275" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,4" fill="none" markerEnd="url(#fluxArrow)" />
                <path d="M 265 105 Q 290 190 265 275" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4,4" fill="none" markerEnd="url(#fluxArrow)" />
              </g>
            )}

            {poles >= 4 && (
              <g opacity="0.5">
                <circle cx="250" cy="190" r="92" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,4" fill="none" />
                <circle cx="250" cy="190" r="76" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3,5" fill="none" />
              </g>
            )}

            {/* Rotating Rotor (Armature) Assembly */}
            <g transform={`rotate(${rotationAngle} 250 190)`}>
              {/* Rotor Laminated Core */}
              <circle cx="250" cy="190" r="68" fill="url(#rotorGrad)" stroke="#0369a1" strokeWidth="2" />

              {/* Armature Slots & Conductors */}
              {Array.from({ length: 16 }).map((_, cIdx) => {
                const cAngle = (cIdx * 360) / 16;
                const cRad = (cAngle * Math.PI) / 180;
                const cx = 250 + Math.cos(cRad) * 58;
                const cy = 190 + Math.sin(cRad) * 58;
                // Alternate dot/cross based on relative pole position
                const globalAngle = (cAngle + rotationAngle) % 360;
                const isInNorthInfluence = Math.sin((globalAngle * poles * Math.PI) / 360) > 0;

                return (
                  <g key={`cond-${cIdx}`}>
                    <circle cx={cx} cy={cy} r="4.5" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
                    {isInNorthInfluence ? (
                      <circle cx={cx} cy={cy} r="1.5" fill="#0f172a" />
                    ) : (
                      <path d={`M ${cx - 2} ${cy - 2} L ${cx + 2} ${cy + 2} M ${cx - 2} ${cy + 2} L ${cx + 2} ${cy - 2}`} stroke="#0f172a" strokeWidth="1" />
                    )}
                  </g>
                );
              })}

              {/* Shaft & Commutator Segments */}
              <circle cx="250" cy="190" r="28" fill="#475569" stroke="#334155" strokeWidth="2" />
              <circle cx="250" cy="190" r="14" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
              <line x1="250" y1="162" x2="250" y2="218" stroke="#1e293b" strokeWidth="2" />
              <line x1="222" y1="190" x2="278" y2="190" stroke="#1e293b" strokeWidth="2" />
            </g>

            {/* Stationary Carbon Brushes */}
            <rect x="242" y="152" width="16" height="10" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1" rx="1" />
            <rect x="242" y="218" width="16" height="10" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1" rx="1" />
            <text x="264" y="160" fill="#38bdf8" fontSize="10" fontWeight="bold">+</text>
            <text x="264" y="226" fill="#f43f5e" fontSize="10" fontWeight="bold">-</text>

            {/* Rotation Direction Indicator */}
            <path
              d="M 290 190 A 40 40 0 0 1 250 230"
              fill="none"
              stroke="#eab308"
              strokeWidth="2.5"
              markerEnd="url(#forceArrow)"
            />
            <text x="310" y="225" fill="#eab308" fontSize="11" fontWeight="bold">
              {speedRpm} RPM
            </text>
          </svg>

          {/* Fleming Right Hand Rule Summary Bar */}
          <div className="w-full mt-3 grid grid-cols-3 gap-2 bg-slate-900 border border-slate-800 rounded-lg p-2 text-center text-xs">
            <div className="flex items-center justify-center gap-1 text-amber-400">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span>Thumb: Motion (v)</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-sky-400">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" />
              <span>Forefinger: Flux (B)</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-emerald-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span>Middle: Induced EMF (e)</span>
            </div>
          </div>
        </div>

        {/* Right: Real-time Output & Interactive Sliders (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Main Output Box */}
          <div className="bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border-2 border-amber-500/40 rounded-xl p-4 text-center shadow-lg">
            <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
              {labels.generatedEmf}
            </span>
            <div className="text-3xl md:text-4xl font-extrabold text-amber-300 font-mono my-1">
              {generatedEMF.toFixed(2)} <span className="text-lg text-slate-300">V</span>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Eg = ({poles} × {fluxWb} × {conductorsZ} × {speedRpm}) / (60 × {parallelPathsA})
            </div>
          </div>

          {/* Secondary Telemetry Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg p-2.5">
              <div className="text-slate-400">{labels.parallelPaths}</div>
              <div className="text-base font-bold text-sky-400 font-mono">A = {parallelPathsA}</div>
              <div className="text-[10px] text-slate-500">{windingType === 'lap' ? 'A = P (Lap)' : 'A = 2 (Wave)'}</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg p-2.5">
              <div className="text-slate-400">{labels.emfPerCond}</div>
              <div className="text-base font-bold text-emerald-400 font-mono">{avgEmfPerConductor.toFixed(3)} V</div>
              <div className="text-[10px] text-slate-500">e_avg = dΦ / dt</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg p-2.5">
              <div className="text-slate-400">{labels.condPerPath}</div>
              <div className="text-base font-bold text-purple-400 font-mono">{conductorsInSeriesPerPath.toFixed(0)}</div>
              <div className="text-[10px] text-slate-500">Z / A conductors</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg p-2.5">
              <div className="text-slate-400">{labels.timeRev}</div>
              <div className="text-base font-bold text-amber-400 font-mono">{(timePerRev * 1000).toFixed(1)} ms</div>
              <div className="text-[10px] text-slate-500">dt = 60 / N</div>
            </div>
          </div>

          {/* Interactive Sliders & Controls */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3.5">
            {/* Winding Toggle */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">{labels.winding}</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setWindingType('lap')}
                  className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                    windingType === 'lap'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {labels.lap}
                </button>
                <button
                  onClick={() => setWindingType('wave')}
                  className={`py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                    windingType === 'wave'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {labels.wave}
                </button>
              </div>
            </div>

            {/* Poles Slider */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.poles}</span>
                <span className="font-mono text-amber-400 font-bold">{poles} Poles</span>
              </div>
              <input
                type="range"
                min="2"
                max="8"
                step="2"
                value={poles}
                onChange={(e) => setPoles(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                aria-label="Poles slider"
              />
            </div>

            {/* Flux Slider */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.flux}</span>
                <span className="font-mono text-amber-400 font-bold">{(fluxWb * 1000).toFixed(1)} mWb ({fluxWb} Wb)</span>
              </div>
              <input
                type="range"
                min="0.005"
                max="0.08"
                step="0.005"
                value={fluxWb}
                onChange={(e) => setFluxWb(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                aria-label="Flux per pole slider"
              />
            </div>

            {/* Conductors Z */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.conductors}</span>
                <span className="font-mono text-amber-400 font-bold">{conductorsZ}</span>
              </div>
              <input
                type="range"
                min="60"
                max="720"
                step="20"
                value={conductorsZ}
                onChange={(e) => setConductorsZ(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                aria-label="Total conductors slider"
              />
            </div>

            {/* Speed N */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.speed}</span>
                <span className="font-mono text-amber-400 font-bold">{speedRpm} RPM</span>
              </div>
              <input
                type="range"
                min="300"
                max="3000"
                step="50"
                value={speedRpm}
                onChange={(e) => setSpeedRpm(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                aria-label="Rotational speed slider"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3">
        <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5 text-amber-400" />
          {labels.presetTitle}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            onClick={() => applyPreset(4, 0.025, 480, 1200, 'lap')}
            className="px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs text-left transition-colors"
          >
            <div className="font-semibold text-amber-300">{labels.preset1}</div>
            <div className="text-[10px] text-slate-400">P=4, Φ=25mWb, Z=480, 1200RPM, Lap</div>
          </button>
          <button
            onClick={() => applyPreset(2, 0.02, 300, 3000, 'wave')}
            className="px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs text-left transition-colors"
          >
            <div className="font-semibold text-sky-300">{labels.preset2}</div>
            <div className="text-[10px] text-slate-400">P=2, Φ=20mWb, Z=300, 3000RPM, Wave</div>
          </button>
          <button
            onClick={() => applyPreset(6, 0.045, 600, 750, 'lap')}
            className="px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-xs text-left transition-colors"
          >
            <div className="font-semibold text-emerald-300">{labels.preset3}</div>
            <div className="text-[10px] text-slate-400">P=6, Φ=45mWb, Z=600, 750RPM, Lap</div>
          </button>
        </div>
      </div>

      {/* Step-by-Step Derivation Breakdown */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-2">
        <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
          <Info className="w-4 h-4" />
          {labels.derivationTitle}
        </div>
        <div className="space-y-1.5 text-xs text-slate-300 font-mono">
          <div className="p-2 bg-slate-900 rounded border border-slate-800/60">{labels.step1}</div>
          <div className="p-2 bg-slate-900 rounded border border-slate-800/60">{labels.step2}</div>
          <div className="p-2 bg-slate-900 rounded border border-slate-800/60">{labels.step3}</div>
          <div className="p-2 bg-slate-900 rounded border border-slate-800/60">{labels.step4}</div>
          <div className="p-2 bg-amber-500/10 rounded border border-amber-500/30 text-amber-300 font-bold">{labels.step5}</div>
        </div>
      </div>
    </div>
  );
};
