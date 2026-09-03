import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Activity, Radio, Compass, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { Language } from '../../types';

interface WaveguidesCutoffDispersionAnimationProps {
  currentLanguage: Language;
}

export const WaveguidesCutoffDispersionAnimation: React.FC<WaveguidesCutoffDispersionAnimationProps> = ({ currentLanguage }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [broadDimensionCm, setBroadDimensionCm] = useState<number>(2.286); // WR-90 broad wall a in cm
  const [narrowDimensionCm, setNarrowDimensionCm] = useState<number>(1.016); // WR-90 narrow wall b in cm
  const [mode, setMode] = useState<'TE10' | 'TE20' | 'TE01' | 'TM11'>('TE10');
  const [frequencyGhz, setFrequencyGhz] = useState<number>(10.0); // 10 GHz
  const [animTime, setAnimTime] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;
        if (isPlaying) {
          setAnimTime((prev) => prev + dt * 4);
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

  // Mode indices (m, n)
  const modeIndices: Record<string, [number, number]> = {
    TE10: [1, 0],
    TE20: [2, 0],
    TE01: [0, 1],
    TM11: [1, 1]
  };

  const [m, n] = modeIndices[mode] || [1, 0];
  const c = 2.99792458e8; // m/s
  const aM = broadDimensionCm / 100;
  const bM = narrowDimensionCm / 100;

  // Cutoff frequency: fc = (c / 2) * sqrt((m/a)^2 + (n/b)^2)
  const fcTermA = m > 0 ? (m / aM) : 0;
  const fcTermB = n > 0 ? (n / bM) : 0;
  const fcHz = (c / 2) * Math.sqrt(fcTermA * fcTermA + fcTermB * fcTermB);
  const fcGhz = fcHz / 1e9;

  const fHz = frequencyGhz * 1e9;
  const isPropagating = fHz > fcHz;
  const cutoffRatio = fcGhz / frequencyGhz;

  // Free space wavelength
  const lambda0M = c / fHz;
  const lambda0Cm = lambda0M * 100;

  // Guide parameters
  let lambdaGCm = 0;
  let vpRatio = 0;
  let vgRatio = 0;
  let etaGuide = 0;
  const eta0 = 376.73;

  if (isPropagating) {
    const rootFactor = Math.sqrt(1 - cutoffRatio * cutoffRatio);
    lambdaGCm = lambda0Cm / rootFactor;
    vpRatio = 1 / rootFactor; // vp = c / rootFactor
    vgRatio = rootFactor;     // vg = c * rootFactor
    etaGuide = eta0 / rootFactor; // for TE mode
  }

  // Bounce angle: theta = arcsin(fc / f)
  const bounceAngleDeg = isPropagating ? (Math.asin(cutoffRatio) * 180 / Math.PI) : 90;

  const allLabels = {
    en: {
      title: 'Rectangular Waveguide Cutoff & Dispersion Simulator',
      subtitle: 'Analyze modal cutoff frequencies f_c, guide wavelength λ_g, phase velocity v_p > c, and group velocity v_g < c',
      modeLabel: 'Propagating Mode:',
      broadLabel: 'Broad Wall (a):',
      freqLabel: 'Operating Frequency (f):',
      wr90Preset: 'WR-90 X-Band Preset (8.2–12.4 GHz)',
      wr62Preset: 'WR-62 Ku-Band Preset (12.4–18 GHz)',
      statusProp: 'PROPAGATING MODE (f > f_c)',
      statusCutoff: 'EVANESCENT CUTOFF (f < f_c)',
      fcLabel: 'Cutoff Frequency (f_c):',
      lambdaGLabel: 'Guide Wavelength (λ_g):',
      vpLabel: 'Phase Velocity (v_p):',
      vgLabel: 'Group Velocity (v_g):',
      bounceLabel: 'Wave Zig-Zag Angle (θ):',
      etaGuideLabel: 'Waveguide Impedance (Z_TE):',
      reset: 'Reset',
      play: 'Play',
      pause: 'Pause'
    },
    hi: {
      title: 'आयताकार वेवगाइड कटऑफ एवं विक्षेपण सिम्युलेटर',
      subtitle: 'मोडल कटऑफ आवृत्तियां f_c, गाइड तरंगदैर्ध्य λ_g, कला वेग v_p > c एवं समूह वेग v_g < c का विश्लेषण',
      modeLabel: 'संचरण मोड:',
      broadLabel: 'चौड़ी दीवार (a):',
      freqLabel: 'परिचालन आवृत्ति (f):',
      wr90Preset: 'WR-90 X-बैंड प्रीसेट (8.2–12.4 GHz)',
      wr62Preset: 'WR-62 Ku-बैंड प्रीसेट (12.4–18 GHz)',
      statusProp: 'संचरण मोड (f > f_c)',
      statusCutoff: 'क्षीण कटऑफ (f < f_c)',
      fcLabel: 'कटऑफ आवृत्ति (f_c):',
      lambdaGLabel: 'गाइड तरंगदैर्ध्य (λ_g):',
      vpLabel: 'कला वेग (v_p):',
      vgLabel: 'समूह वेग (v_g):',
      bounceLabel: 'तरंग परावर्तन कोण (θ):',
      etaGuideLabel: 'वेवगाइड प्रतिबाधा (Z_TE):',
      reset: 'रीसेट',
      play: 'प्ले',
      pause: 'रोकें'
    },
    bn: {
      title: 'আয়তাকার ওয়েভগাইড কাটঅফ ও বিচ্ছুরণ সিমুলেটর',
      subtitle: 'মোডাল কাটঅফ কম্পাঙ্ক f_c, গাইড তরঙ্গদৈর্ঘ্য λ_g, দশা বেগ v_p > c এবং গ্রুপ বেগ v_g < c বিশ্লেষণ',
      modeLabel: 'সঞ্চালন মোড:',
      broadLabel: 'প্রশস্ত প্রাচীর (a):',
      freqLabel: 'অপারেটিং কম্পাঙ্ক (f):',
      wr90Preset: 'WR-90 X-ব্যান্ড প্রিসেট',
      wr62Preset: 'WR-62 Ku-ব্যান্ড প্রিসেট',
      statusProp: 'সঞ্চালনশীল মোড (f > f_c)',
      statusCutoff: 'কাটঅফ মোড (f < f_c)',
      fcLabel: 'কাটঅফ কম্পাঙ্ক (f_c):',
      lambdaGLabel: 'গাইড তরঙ্গদৈর্ঘ্য (λ_g):',
      vpLabel: 'দশা বেগ (v_p):',
      vgLabel: 'গ্রুপ বেগ (v_g):',
      bounceLabel: 'জিগ-জ্যাগ কোণ (θ):',
      etaGuideLabel: 'ওয়েভগাইড প্রতিবাধা (Z_TE):',
      reset: 'রিসেট',
      play: 'চালান',
      pause: 'থামান'
    }
  };
  const labels = allLabels[currentLanguage] || allLabels.en;

  // Visual wave path along guide (longitudinal side view from x = 40 to 600)
  const longitudinalPointsTop: string[] = [];
  const longitudinalPointsBottom: string[] = [];
  const guideVisualYTop = 60;
  const guideVisualYBottom = 160;

  // Longitudinal traveling waveform inside guide
  const wavePoints: string[] = [];
  const kGuide = isPropagating ? (2 * Math.PI / (Math.max(1, lambdaGCm) * 12)) : 0;
  const alphaAtten = !isPropagating ? (0.02 * (fcGhz - frequencyGhz)) : 0;

  for (let x = 40; x <= 600; x += 4) {
    const dist = x - 40;
    let amp = 35;
    let phase = 0;
    if (isPropagating) {
      phase = animTime - dist * kGuide;
    } else {
      amp = 35 * Math.exp(-dist * alphaAtten);
      phase = animTime;
    }
    const waveY = 110 - amp * Math.cos(phase);
    wavePoints.push(`${x},${waveY.toFixed(1)}`);
  }

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Radio className="w-6 h-6 text-sky-400" />
            <h3 className="text-lg font-bold text-sky-400">{labels.title}</h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">{labels.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-semibold transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? labels.pause : labels.play}
          </button>
          <button
            onClick={() => {
              setBroadDimensionCm(2.286);
              setNarrowDimensionCm(1.016);
              setMode('TE10');
              setFrequencyGhz(10.0);
              setAnimTime(0);
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {labels.reset}
          </button>
        </div>
      </div>

      {/* Preset Buttons & Mode Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-semibold text-slate-400">{labels.modeLabel}</span>
        {(['TE10', 'TE20', 'TE01', 'TM11'] as const).map((mKey) => (
          <button
            key={mKey}
            onClick={() => setMode(mKey)}
            className={`px-3 py-1 text-xs rounded font-mono font-bold transition-colors ${
              mode === mKey ? 'bg-sky-600 text-white shadow' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {mKey}
          </button>
        ))}

        <div className="h-4 w-px bg-slate-700 mx-1" />

        <button
          onClick={() => { setBroadDimensionCm(2.286); setNarrowDimensionCm(1.016); setFrequencyGhz(10.0); }}
          className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-amber-300 font-mono border border-slate-700"
        >
          {labels.wr90Preset}
        </button>
        <button
          onClick={() => { setBroadDimensionCm(1.58); setNarrowDimensionCm(0.79); setFrequencyGhz(15.0); }}
          className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-emerald-300 font-mono border border-slate-700"
        >
          {labels.wr62Preset}
        </button>
      </div>

      {/* SVG Waveguide Animation */}
      <div className="w-full bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-5">
        <svg viewBox="0 0 650 300" className="w-full h-auto">
          {/* Status Badge */}
          <g transform="translate(30, 20)">
            {isPropagating ? (
              <g>
                <rect x="0" y="0" width="220" height="24" rx="4" fill="#065f46" stroke="#10b981" />
                <text x="110" y="16" textAnchor="middle" fill="#ecfdf5" fontSize="10" fontWeight="bold">
                  ✓ {labels.statusProp}
                </text>
              </g>
            ) : (
              <g>
                <rect x="0" y="0" width="220" height="24" rx="4" fill="#7f1d1d" stroke="#ef4444" />
                <text x="110" y="16" textAnchor="middle" fill="#fee2e2" fontSize="10" fontWeight="bold">
                  ✕ {labels.statusCutoff}
                </text>
              </g>
            )}
          </g>

          <text x="620" y="36" textAnchor="end" fill="#facc15" fontSize="11" fontWeight="bold">
            f_c({mode}) = {fcGhz.toFixed(2)} GHz | f = {frequencyGhz.toFixed(1)} GHz
          </text>

          {/* Longitudinal Side View of Hollow Metal Waveguide */}
          <g transform="translate(0, 30)">
            {/* Top Metallic Conducting Wall */}
            <rect x="35" y="50" width="575" height="12" fill="#334155" stroke="#64748b" />
            {/* Bottom Metallic Conducting Wall */}
            <rect x="35" y="160" width="575" height="12" fill="#334155" stroke="#64748b" />

            {/* Interior Hollow Space */}
            <rect x="35" y="62" width="575" height="98" fill="#030712" />

            {/* Centerline */}
            <line x1="35" y1="111" x2="610" y2="111" stroke="#1e293b" strokeDasharray="3 3" />

            {/* Bouncing Zig-Zag Plane Waves in Propagating Mode */}
            {isPropagating && (
              <g stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 2" strokeOpacity="0.4">
                <line x1="50" y1="62" x2="150" y2="160" />
                <line x1="150" y1="160" x2="250" y2="62" />
                <line x1="250" y1="62" x2="350" y2="160" />
                <line x1="350" y1="160" x2="450" y2="62" />
                <line x1="450" y1="62" x2="550" y2="160" />
              </g>
            )}

            {/* Longitudinal E-Field Waveform */}
            <path
              d={`M ${wavePoints.join(' L ')}`}
              fill="none"
              stroke={isPropagating ? '#38bdf8' : '#ef4444'}
              strokeWidth="2.5"
            />

            {/* Vertical E-field vectors along waveguide */}
            {isPropagating ? (
              [80, 160, 240, 320, 400, 480, 560].map((xPos, idx) => {
                const dist = xPos - 40;
                const phase = animTime - dist * kGuide;
                const eMag = 40 * Math.cos(phase);
                return (
                  <g key={idx}>
                    <line
                      x1={xPos}
                      y1={111}
                      x2={xPos}
                      y2={111 - eMag}
                      stroke="#f59e0b"
                      strokeWidth="2"
                    />
                    <polygon
                      points={`${xPos},${111 - eMag} ${xPos - 3},${111 - eMag + (eMag > 0 ? 5 : -5)} ${xPos + 3},${111 - eMag + (eMag > 0 ? 5 : -5)}`}
                      fill="#f59e0b"
                    />
                  </g>
                );
              })
            ) : (
              <text x="320" y="115" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">
                Wave decays exponentially (No Power Transmission)
              </text>
            )}

            {/* Wall labels */}
            <text x="40" y="44" fill="#94a3b8" fontSize="9" fontWeight="bold">Perfect Electric Conductor (PEC) Top Wall</text>
            <text x="40" y="185" fill="#94a3b8" fontSize="9" fontWeight="bold">Hollow Air-Filled Core (a = {broadDimensionCm.toFixed(2)} cm)</text>
          </g>

          {/* Bottom Waveguide Dispersion Relationship Bar */}
          <g transform="translate(35, 245)">
            <rect x="0" y="0" width="575" height="38" rx="4" fill="#0f172a" stroke="#1e293b" />
            <text x="287" y="17" textAnchor="middle" fill="#38bdf8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
              Dispersion: β = (ω/c)√(1 - (f_c/f)²) | Phase Velocity: v_p · v_g = c² | Guide λ_g = λ₀ / √(1 - (f_c/f)²)
            </text>
            <text x="287" y="30" textAnchor="middle" fill="#facc15" fontSize="8.5" fontFamily="monospace">
              {isPropagating
                ? `λ_g = ${lambdaGCm.toFixed(2)} cm (Free space λ₀ = ${lambda0Cm.toFixed(2)} cm) | v_p = ${vpRatio.toFixed(2)} c | v_g = ${vgRatio.toFixed(2)} c`
                : `Cutoff Exceeded: Wave is reactive with imaginary propagation constant jβ ⟶ -α`}
            </text>
          </g>
        </svg>
      </div>

      {/* Sliders & Computed Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Controls */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3.5">
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.freqLabel}</span>
              <span className="text-sky-400 font-mono font-bold">{frequencyGhz.toFixed(2)} GHz</span>
            </div>
            <input
              type="range"
              min="4.0"
              max="20.0"
              step="0.1"
              value={frequencyGhz}
              onChange={(e) => setFrequencyGhz(parseFloat(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.broadLabel}</span>
              <span className="text-amber-400 font-mono font-bold">{broadDimensionCm.toFixed(3)} cm</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="5.0"
              step="0.05"
              value={broadDimensionCm}
              onChange={(e) => setBroadDimensionCm(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Real-time Math & Velocities */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-2">
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400">{labels.fcLabel}</span>
              <p className="text-amber-300 font-bold text-sm">{fcGhz.toFixed(2)} GHz</p>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400">{labels.lambdaGLabel}</span>
              <p className="text-sky-300 font-bold text-sm">{isPropagating ? `${lambdaGCm.toFixed(2)} cm` : 'Cutoff (∞)'}</p>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400">{labels.vpLabel}</span>
              <p className="text-emerald-300 font-bold text-sm">{isPropagating ? `${vpRatio.toFixed(3)} c (> c)` : '0'}</p>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400">{labels.vgLabel}</span>
              <p className="text-purple-300 font-bold text-sm">{isPropagating ? `${vgRatio.toFixed(3)} c (< c)` : '0'}</p>
            </div>
          </div>

          <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 text-xs">
            <div className="flex justify-between items-center mb-1 text-slate-300">
              <span>Waveguide Impedance ({labels.etaGuideLabel}):</span>
              <span className="font-mono text-cyan-300 font-bold">{isPropagating ? `${etaGuide.toFixed(1)} Ω` : 'Imaginary (Reactive)'}</span>
            </div>
            <div className="flex justify-between items-center text-slate-400 text-[11px]">
              <span>Zig-zag Bounce Angle:</span>
              <span className="font-mono text-amber-300 font-semibold">{isPropagating ? `${bounceAngleDeg.toFixed(1)}° to normal` : '90° (Standing Wave)'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
