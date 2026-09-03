import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Compass, Activity, Info, Zap } from 'lucide-react';
import { Language } from '../../types';

interface WavePolarizationAnimationProps {
  currentLanguage: Language;
}

export const WavePolarizationAnimation: React.FC<WavePolarizationAnimationProps> = ({ currentLanguage }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [exAmplitude, setExAmplitude] = useState<number>(1.0);
  const [eyAmplitude, setEyAmplitude] = useState<number>(1.0);
  const [phaseDiffDeg, setPhaseDiffDeg] = useState<number>(90); // Phase delta (Ey relative to Ex)
  const [frequency, setFrequency] = useState<number>(1.0); // Relative angular speed
  const [animTime, setAnimTime] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;
        if (isPlaying) {
          setAnimTime((prev) => prev + dt * frequency * 2 * Math.PI);
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
  }, [isPlaying, frequency]);

  const deltaRad = (phaseDiffDeg * Math.PI) / 180;
  const sinDelta = Math.sin(deltaRad);
  const cosDelta = Math.cos(deltaRad);

  // Classification logic
  let polarizationState = 'Elliptical';
  let senseOfRotation = 'Linear';
  if (Math.abs(sinDelta) < 0.05 || exAmplitude < 0.05 || eyAmplitude < 0.05) {
    polarizationState = 'Linear';
    senseOfRotation = 'None (In-phase oscillation)';
  } else if (Math.abs(exAmplitude - eyAmplitude) < 0.05 && (Math.abs(phaseDiffDeg - 90) < 5 || Math.abs(phaseDiffDeg - 270) < 5)) {
    polarizationState = 'Circular';
    senseOfRotation = sinDelta > 0 ? 'Right-Hand Circular (RHCP)' : 'Left-Hand Circular (LHCP)';
  } else {
    polarizationState = 'Elliptical';
    senseOfRotation = sinDelta > 0 ? 'Right-Hand Elliptical (RHEP)' : 'Left-Hand Elliptical (LHEP)';
  }

  // Instantaneous tip at z = 0
  const curEx = exAmplitude * Math.cos(animTime);
  const curEy = eyAmplitude * Math.cos(animTime + deltaRad);
  const curETotal = Math.sqrt(curEx * curEx + curEy * curEy);

  // Stokes parameters
  const S0 = exAmplitude * exAmplitude + eyAmplitude * eyAmplitude;
  const S1 = exAmplitude * exAmplitude - eyAmplitude * eyAmplitude;
  const S2 = 2 * exAmplitude * eyAmplitude * cosDelta;
  const S3 = 2 * exAmplitude * eyAmplitude * sinDelta;
  const axialRatio = (S0 > 0 && Math.abs(S3) > 1e-4) ? Math.min(10, (S0 + Math.sqrt(S1 * S1 + S2 * S2)) / Math.max(0.01, Math.abs(S3))).toFixed(2) : '1.00 (Linear: ∞)';

  const allLabels = {
    en: {
      title: 'Electromagnetic Wave Polarization Simulator',
      subtitle: 'Analyze Linear, Circular (RHCP/LHCP) & Elliptical Polarization vector trajectories and Stokes parameters',
      exLabel: 'Horizontal Component (E_0x):',
      eyLabel: 'Vertical Component (E_0y):',
      phaseLabel: 'Phase Difference (δ = ϕ_y - ϕ_x):',
      speedLabel: 'Wave Speed:',
      presets: 'Preset Modes:',
      linearHoriz: 'Linear (H)',
      linearVert: 'Linear (V)',
      linear45: 'Linear (45°)',
      rhcp: 'RHCP (δ = 90°)',
      lhcp: 'LHCP (δ = 270°)',
      elliptical: 'Elliptical',
      state: 'Polarization State:',
      rotationSense: 'Rotation Sense:',
      eMag: '|E(t)| Instantaneous:',
      stokesTitle: 'Stokes Vector (Normalized):',
      reset: 'Reset',
      play: 'Play',
      pause: 'Pause'
    },
    hi: {
      title: 'विद्युत चुंबकीय तरंग ध्रुवण सिम्युलेटर',
      subtitle: 'रैखिक, वृत्तीय (RHCP/LHCP) एवं दीर्घवृत्तीय ध्रुवण सदिश प्रक्षेपवक्र तथा स्टोक्स मापदंडों का विश्लेषण',
      exLabel: 'क्षैतिज घटक (E_0x):',
      eyLabel: 'ऊर्ध्वाधर घटक (E_0y):',
      phaseLabel: 'कलांतर (δ = ϕ_y - ϕ_x):',
      speedLabel: 'तरंग गति:',
      presets: 'पूर्व निर्धारित मोड:',
      linearHoriz: 'रैखिक (क्षैतिज)',
      linearVert: 'रैखिक (ऊर्ध्वाधर)',
      linear45: 'रैखिक (45°)',
      rhcp: 'दक्षिणावर्ती वृत्तीय (RHCP)',
      lhcp: 'वामावर्ती वृत्तीय (LHCP)',
      elliptical: 'दीर्घवृत्तीय',
      state: 'ध्रुवण अवस्था:',
      rotationSense: 'घूर्णन दिशा:',
      eMag: '|E(t)| तात्क्षणिक मान:',
      stokesTitle: 'स्टोक्स सदिश:',
      reset: 'रीसेट',
      play: 'प्ले',
      pause: 'रोकें'
    },
    bn: {
      title: 'তড়িৎচৌম্বকীয় তরঙ্গ পোলারাইজেশন সিমুলেটর',
      subtitle: 'রৈখিক, বৃত্তীয় (RHCP/LHCP) ও উপবৃত্তীয় পোলারাইজেশন ভেক্টর গতিপথ এবং স্টোকস প্যারামিটার বিশ্লেষণ',
      exLabel: 'অনুভূমিক উপাদান (E_0x):',
      eyLabel: 'উল্লম্ব উপাদান (E_0y):',
      phaseLabel: 'দশা পার্থক্য (δ = ϕ_y - ϕ_x):',
      speedLabel: 'তরঙ্গ গতি:',
      presets: 'প্রিসেট মোড:',
      linearHoriz: 'রৈখিক (অনুভূমিক)',
      linearVert: 'রৈখিক (উল্লম্ব)',
      linear45: 'রৈখিক (৪৫°)',
      rhcp: 'ডান-ঘূর্ণী বৃত্তীয় (RHCP)',
      lhcp: 'বাম-ঘূর্ণী বৃত্তীয় (LHCP)',
      elliptical: 'উপবৃত্তীয়',
      state: 'পোলারাইজেশন অবস্থা:',
      rotationSense: 'ঘূর্ণন দিক:',
      eMag: '|E(t)| তাত্ক্ষণিক মান:',
      stokesTitle: 'স্টোকস ভেক্টর:',
      reset: 'রিসেট',
      play: 'চালান',
      pause: 'থামান'
    }
  };
  const labels = allLabels[currentLanguage] || allLabels.en;

  // Generate Lissajous ellipse path points
  const ellipsePoints: string[] = [];
  const numSteps = 72;
  const scale = 75;
  for (let i = 0; i <= numSteps; i++) {
    const t = (i / numSteps) * 2 * Math.PI;
    const px = 150 + scale * exAmplitude * Math.cos(t);
    const py = 150 - scale * eyAmplitude * Math.cos(t + deltaRad);
    ellipsePoints.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  const ellipsePathD = `M ${ellipsePoints.join(' L ')}`;

  // 3D perspective points along z-axis
  const perspective3DPoints: { x: number; y: number; z: number; ex: number; ey: number }[] = [];
  const zSteps = 30;
  for (let i = 0; i < zSteps; i++) {
    const zNorm = i / (zSteps - 1);
    const zPhase = zNorm * 4 * Math.PI;
    const effTime = animTime - zPhase;
    const fEx = exAmplitude * Math.cos(effTime);
    const fEy = eyAmplitude * Math.cos(effTime + deltaRad);
    // Project to 2D
    const screenX = 330 + zNorm * 260;
    const screenY = 150 - fEy * 45 + zNorm * 10;
    perspective3DPoints.push({ x: screenX, y: screenY, z: zNorm, ex: fEx, ey: fEy });
  }

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-sky-400" />
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
              setExAmplitude(1.0);
              setEyAmplitude(1.0);
              setPhaseDiffDeg(90);
              setFrequency(1.0);
              setAnimTime(0);
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {labels.reset}
          </button>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs font-semibold text-slate-400">{labels.presets}</span>
        <button
          onClick={() => { setExAmplitude(1.2); setEyAmplitude(0.0); setPhaseDiffDeg(0); }}
          className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-sky-300 font-mono border border-slate-700"
        >
          {labels.linearHoriz}
        </button>
        <button
          onClick={() => { setExAmplitude(0.0); setEyAmplitude(1.2); setPhaseDiffDeg(0); }}
          className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-sky-300 font-mono border border-slate-700"
        >
          {labels.linearVert}
        </button>
        <button
          onClick={() => { setExAmplitude(1.0); setEyAmplitude(1.0); setPhaseDiffDeg(0); }}
          className="px-2.5 py-1 text-xs rounded bg-slate-800 hover:bg-slate-700 text-sky-300 font-mono border border-slate-700"
        >
          {labels.linear45}
        </button>
        <button
          onClick={() => { setExAmplitude(1.0); setEyAmplitude(1.0); setPhaseDiffDeg(90); }}
          className="px-2.5 py-1 text-xs rounded bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 font-mono border border-amber-600/40"
        >
          {labels.rhcp}
        </button>
        <button
          onClick={() => { setExAmplitude(1.0); setEyAmplitude(1.0); setPhaseDiffDeg(270); }}
          className="px-2.5 py-1 text-xs rounded bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 font-mono border border-emerald-600/40"
        >
          {labels.lhcp}
        </button>
        <button
          onClick={() => { setExAmplitude(1.2); setEyAmplitude(0.6); setPhaseDiffDeg(45); }}
          className="px-2.5 py-1 text-xs rounded bg-purple-950/60 hover:bg-purple-900/80 text-purple-300 font-mono border border-purple-600/40"
        >
          {labels.elliptical}
        </button>
      </div>

      {/* Main SVG Visualization */}
      <div className="w-full bg-slate-950 rounded-xl border border-slate-800 overflow-hidden mb-5">
        <svg viewBox="0 0 650 300" className="w-full h-auto">
          {/* Left: Transverse Plane (Frontal View at z = 0) */}
          <g>
            <rect x="15" y="15" width="270" height="270" rx="8" fill="#030712" stroke="#1f2937" />
            <text x="150" y="35" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
              Transverse View (x-y Plane, looking toward +z)
            </text>

            {/* Grid & Axes */}
            <circle cx="150" cy="150" r="75" fill="none" stroke="#1e293b" strokeDasharray="3 3" />
            <circle cx="150" cy="150" r="37.5" fill="none" stroke="#1e293b" strokeDasharray="2 2" />
            <line x1="40" y1="150" x2="260" y2="150" stroke="#334155" strokeWidth="1.5" />
            <line x1="150" y1="40" x2="150" y2="260" stroke="#334155" strokeWidth="1.5" />
            <text x="255" y="145" fill="#94a3b8" fontSize="9" fontWeight="bold">+x</text>
            <text x="155" y="48" fill="#94a3b8" fontSize="9" fontWeight="bold">+y</text>

            {/* Ellipse trajectory */}
            <path d={ellipsePathD} fill="none" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.85" />

            {/* Instantaneous Vector E(t) */}
            <line
              x1="150"
              y1="150"
              x2={150 + scale * curEx}
              y2={150 - scale * curEy}
              stroke="#f59e0b"
              strokeWidth="2.8"
            />
            <circle
              cx={150 + scale * curEx}
              cy={150 - scale * curEy}
              r="4.5"
              fill="#f59e0b"
              stroke="#ffffff"
              strokeWidth="1.5"
            />

            {/* Horizontal and Vertical component projections */}
            <line
              x1="150"
              y1="150"
              x2={150 + scale * curEx}
              y2="150"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
            <line
              x1="150"
              y1="150"
              x2="150"
              y2={150 - scale * curEy}
              stroke="#34d399"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />

            {/* Legend inside box */}
            <text x="25" y="270" fill="#f59e0b" fontSize="9" fontWeight="bold">E(t)</text>
            <text x="60" y="270" fill="#38bdf8" fontSize="9">E_x(t)</text>
            <text x="110" y="270" fill="#34d399" fontSize="9">E_y(t)</text>
          </g>

          {/* Right: 3D Traveling Wave Projection */}
          <g>
            <rect x="300" y="15" width="335" height="270" rx="8" fill="#030712" stroke="#1f2937" />
            <text x="468" y="35" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
              3D Spatial Vector Waveform along +z
            </text>

            {/* Propagation Axis */}
            <line x1="330" y1="150" x2="615" y2="150" stroke="#475569" strokeWidth="1.5" />
            <polygon points="620,150 612,146 612,154" fill="#475569" />
            <text x="615" y="165" fill="#94a3b8" fontSize="9" fontWeight="bold">+z (Wave Propagation)</text>

            {/* 3D Wave vectors along z */}
            {perspective3DPoints.map((pt, idx) => {
              if (idx % 2 !== 0) return null;
              const vecEndX = pt.x + pt.ex * 15;
              const vecEndY = 150 - pt.ey * 45;
              return (
                <g key={idx}>
                  <line
                    x1={pt.x}
                    y1="150"
                    x2={vecEndX}
                    y2={vecEndY}
                    stroke={idx === 0 ? '#f59e0b' : '#38bdf8'}
                    strokeWidth={idx === 0 ? 2.5 : 1.2}
                    strokeOpacity={0.8}
                  />
                  <circle cx={vecEndX} cy={vecEndY} r={idx === 0 ? 3.5 : 1.8} fill={idx === 0 ? '#f59e0b' : '#38bdf8'} />
                </g>
              );
            })}

            {/* Wavefront helical connecting spline */}
            <path
              d={`M ${perspective3DPoints.map((p) => `${(p.x + p.ex * 15).toFixed(1)},${(150 - p.ey * 45).toFixed(1)}`).join(' L ')}`}
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2"
              strokeDasharray={polarizationState === 'Linear' ? 'none' : '4 2'}
            />

            {/* Status Banner */}
            <rect x="315" y="225" width="305" height="50" rx="6" fill="#0f172a" stroke="#334155" />
            <text x="325" y="243" fill="#facc15" fontSize="10" fontWeight="bold">
              {labels.state} <tspan fill="#38bdf8">{polarizationState}</tspan> ({senseOfRotation})
            </text>
            <text x="325" y="260" fill="#94a3b8" fontSize="9">
              Axial Ratio (AR): <tspan fill="#ffffff" fontWeight="bold">{axialRatio}</tspan> | δ = {phaseDiffDeg}° ({((phaseDiffDeg * Math.PI) / 180).toFixed(2)} rad)
            </text>
          </g>
        </svg>
      </div>

      {/* Control Sliders & Real-Time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Controls */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3.5">
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.exLabel}</span>
              <span className="text-sky-400 font-mono">{exAmplitude.toFixed(2)} V/m</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="1.5"
              step="0.05"
              value={exAmplitude}
              onChange={(e) => setExAmplitude(parseFloat(e.target.value))}
              className="w-full accent-sky-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.eyLabel}</span>
              <span className="text-emerald-400 font-mono">{eyAmplitude.toFixed(2)} V/m</span>
            </div>
            <input
              type="range"
              min="0.0"
              max="1.5"
              step="0.05"
              value={eyAmplitude}
              onChange={(e) => setEyAmplitude(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.phaseLabel}</span>
              <span className="text-amber-400 font-mono">{phaseDiffDeg}° ({((phaseDiffDeg * Math.PI) / 180).toFixed(2)} rad)</span>
            </div>
            <input
              type="range"
              min="0"
              max="360"
              step="5"
              value={phaseDiffDeg}
              onChange={(e) => setPhaseDiffDeg(parseInt(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{labels.speedLabel}</span>
              <span className="text-purple-400 font-mono">{frequency.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="2.5"
              step="0.1"
              value={frequency}
              onChange={(e) => setFrequency(parseFloat(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Real-time Math & Stokes Vector Panel */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 mb-3">
              <Activity className="w-4 h-4" />
              <span>{labels.stokesTitle}</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-3">
              <div className="bg-slate-900 p-2 rounded border border-slate-800">
                <span className="text-slate-400">S₀ (Total Intensity):</span>
                <p className="text-amber-300 font-bold">{S0.toFixed(3)}</p>
              </div>
              <div className="bg-slate-900 p-2 rounded border border-slate-800">
                <span className="text-slate-400">S₁ (H - V Preference):</span>
                <p className="text-sky-300 font-bold">{S1.toFixed(3)}</p>
              </div>
              <div className="bg-slate-900 p-2 rounded border border-slate-800">
                <span className="text-slate-400">S₂ (±45° Preference):</span>
                <p className="text-emerald-300 font-bold">{S2.toFixed(3)}</p>
              </div>
              <div className="bg-slate-900 p-2 rounded border border-slate-800">
                <span className="text-slate-400">S₃ (Circular Chirality):</span>
                <p className="text-purple-300 font-bold">{S3.toFixed(3)}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 text-xs">
            <div className="flex justify-between items-center mb-1">
              <span className="text-slate-400">{labels.eMag}</span>
              <span className="text-amber-400 font-mono font-bold">{curETotal.toFixed(3)} V/m</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span>Polarization Matching:</span>
              <span className="text-cyan-300 font-semibold">{polarizationState === 'Circular' ? 'Cross-Polar Isolation > 20 dB' : 'Standard Alignment'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
