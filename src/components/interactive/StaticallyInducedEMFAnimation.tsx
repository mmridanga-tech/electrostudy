import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Activity, Layers, ArrowLeftRight, Check, Info, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';

interface StaticallyInducedEMFAnimationProps {
  currentLanguage: Language;
}

export const StaticallyInducedEMFAnimation: React.FC<StaticallyInducedEMFAnimationProps> = ({ currentLanguage }) => {
  // Parameters
  const [fluxMax, setFluxMax] = useState<number>(0.05); // Webers (Wb)
  const [frequency, setFrequency] = useState<number>(50); // Hz
  const [turns, setTurns] = useState<number>(200); // Turns
  const [activeTab, setActiveTab] = useState<'simulation' | 'comparison'>('simulation');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [timeVal, setTimeVal] = useState<number>(0);

  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());

  // Calculations
  const omega = 2 * Math.PI * frequency;
  const currentFlux = fluxMax * Math.sin(omega * timeVal);
  const dPhiDt = fluxMax * omega * Math.cos(omega * timeVal);
  // e = -N * dPhi/dt
  const inducedEMF = -turns * dPhiDt;
  const peakEMF = turns * omega * fluxMax;
  const rmsEMF = peakEMF / Math.SQRT2;

  // Animation Loop
  useEffect(() => {
    const updateTime = (now: number) => {
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (isPlaying) {
        setTimeVal((prev) => (prev + dt * 0.2) % 100); // Scaled time for visual clarity
      }
      animFrameRef.current = requestAnimationFrame(updateTime);
    };

    lastTimeRef.current = performance.now();
    animFrameRef.current = requestAnimationFrame(updateTime);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  const labels = {
    en: {
      title: 'Statically Induced EMF & Transformer Action Simulator',
      subtitle: 'Stationary coil with time-varying magnetic flux linkages (e = -N · dΦ/dt)',
      tabSimulation: 'Transformer & Waveform Simulation',
      tabComparison: 'Dynamic vs Static EMF Comparison',
      fluxAmp: 'Peak Flux (Φ_max)',
      frequency: 'Supply Frequency (f)',
      turns: 'Coil Turns (N)',
      liveFlux: 'Instantaneous Flux Φ(t)',
      liveDphiDt: 'Rate of Change dΦ/dt',
      liveEMF: 'Induced EMF e(t)',
      peakEMF: 'Peak Induced EMF (E_m)',
      rmsEMF: 'RMS Induced EMF (E_rms)',
      play: 'Play Simulation',
      pause: 'Pause Simulation',
      reset: 'Reset Defaults',
      lenzNote: "The negative sign (Lenz's Law) shifts the induced EMF phase by 90° behind the flux waveform.",
      core: 'Laminated Magnetic Core',
      primaryCoil: 'Primary Coil (Excitation)',
      secondaryCoil: 'Secondary Coil (Induced EMF)',
      comparisonTitle: 'Detailed Technical Distinction: Dynamic vs Static Induction',
      paramCol: 'Feature / Parameter',
      dynamicCol: 'Dynamically (Motional) Induced EMF',
      staticCol: 'Statically Induced EMF',
    },
    hi: {
      title: 'स्थैतिक रूप से प्रेरित ईएमएफ एवं ट्रांसफॉर्मर क्रिया सिमुलेटर',
      subtitle: 'समय के साथ बदलते चुंबकीय फ्लक्स से स्थिर कुंडली में उत्पन्न ईएमएफ (e = -N · dΦ/dt)',
      tabSimulation: 'ट्रांसफॉर्मर एवं तरंगरूप सिमुलेशन',
      tabComparison: 'गतिक बनाम स्थैतिक ईएमएफ तुलना',
      fluxAmp: 'अधिकतम फ्लक्स (Φ_max)',
      frequency: 'आवृत्ति (f)',
      turns: 'कुंडली फेरे (N)',
      liveFlux: 'तात्कालिक फ्लक्स Φ(t)',
      liveDphiDt: 'फ्लक्स परिवर्तन दर dΦ/dt',
      liveEMF: 'प्रेरित ईएमएफ e(t)',
      peakEMF: 'शिखर ईएमएफ (E_m)',
      rmsEMF: 'आरएमएस ईएमएफ (E_rms)',
      play: 'चलाएं',
      pause: 'रोकें',
      reset: 'रीसेट',
      lenzNote: 'ऋणात्मक चिह्न (लेंज का नियम) प्रेरित ईएमएफ को फ्लक्स से 90° पीछे (पश्चगामी) कर देता है।',
      core: 'पटलित चुंबकीय क्रोड (Core)',
      primaryCoil: 'प्राथमिक कुंडली (उत्तेजन)',
      secondaryCoil: 'द्वितीयक कुंडली (प्रेरित EMF)',
      comparisonTitle: 'तकनीकी अंतर: गतिक बनाम स्थैतिक प्रेरण',
      paramCol: 'विशेषता / मापदंड',
      dynamicCol: 'गतिक रूप से प्रेरित ईएमएफ',
      staticCol: 'स्थैतिक रूप से प्रेरित ईएमएफ',
    },
    bn: {
      title: 'স্থিতিশীলভাবে আবিষ্ট ইএমএফ ও ট্রান্সফরমার ক্রিয়া সিমুলেটর',
      subtitle: 'পরিবর্তনশীল ফ্লাক্স দ্বারা স্থির কয়েলে আবিষ্ট ভোল্টেজ (e = -N · dΦ/dt)',
      tabSimulation: 'ট্রান্সফরমার ও ওয়েভফর্ম সিমুলেশন',
      tabComparison: 'গতিশীল বনাম স্থিতিশীল ইএমএফ তুলনা',
      fluxAmp: 'সর্বোচ্চ ফ্লাক্স (Φ_max)',
      frequency: 'ফ্রিকোয়েন্সি (f)',
      turns: 'কয়েল প্যাঁচ সংখ্যা (N)',
      liveFlux: 'তাৎক্ষণিক ফ্লাক্স Φ(t)',
      liveDphiDt: 'ফ্লাক্স পরিবর্তনের হার dΦ/dt',
      liveEMF: 'আবিষ্ট ইএমএফ e(t)',
      peakEMF: 'পিক ইএমএফ (E_m)',
      rmsEMF: 'আরএমএস ইএমএফ (E_rms)',
      play: 'প্লে করুন',
      pause: 'পজ করুন',
      reset: 'রিসেট',
      lenzNote: 'ঋণাত্মক চিহ্ন (লেনজের সূত্র) ফ্লাক্সের পরিবর্তনের সাপেক্ষে আবিষ্ট ইএমএফকে ৯০° পিছিয়ে রাখে।',
      core: 'লেমিনেটেড ম্যাগনেটিক কোর',
      primaryCoil: 'প্রাইমারি কয়েল (উত্তেজক)',
      secondaryCoil: 'সেকেন্ডারি কয়েল (আবিষ্ট EMF)',
      comparisonTitle: 'প্রকৌশলগত পার্থক্য: গতিশীল বনাম স্থিতিশীল আবেশ',
      paramCol: 'বৈশিষ্ট্য / প্যারামিটার',
      dynamicCol: 'গতিশীলভাবে আবিষ্ট ইএমএফ',
      staticCol: 'স্থিতিশীলভাবে আবিষ্ট ইএমএফ',
    }
  }[currentLanguage];

  // Generate waveform points
  const pointsCount = 120;
  const waveWidth = 340;
  const waveHeight = 90;
  const waveYMid = 55;

  let fluxPath = '';
  let emfPath = '';

  for (let i = 0; i < pointsCount; i++) {
    const frac = i / (pointsCount - 1);
    const x = 30 + frac * waveWidth;
    const t = timeVal + frac * (1 / frequency) * 2; // 2 complete periods
    const valFlux = Math.sin(2 * Math.PI * frequency * t);
    const valEMF = -Math.cos(2 * Math.PI * frequency * t); // derivative with - sign

    const yFlux = waveYMid - valFlux * (waveHeight * 0.4);
    const yEMF = waveYMid - valEMF * (waveHeight * 0.4);

    if (i === 0) {
      fluxPath = `M ${x} ${yFlux}`;
      emfPath = `M ${x} ${yEMF}`;
    } else {
      fluxPath += ` L ${x} ${yFlux}`;
      emfPath += ` L ${x} ${yEMF}`;
    }
  }

  // Core flux animation opacity and intensity
  const fluxIntensity = Math.abs(currentFlux / fluxMax);

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 text-slate-100 shadow-2xl">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-cyan-400 animate-pulse" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-100">{labels.title}</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          {/* Tab Navigation */}
          <div className="flex bg-slate-900 rounded-lg p-1 border border-slate-800">
            <button
              onClick={() => setActiveTab('simulation')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                activeTab === 'simulation'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {labels.tabSimulation}
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                activeTab === 'comparison'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {labels.tabComparison}
            </button>
          </div>

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
          </button>

          <button
            onClick={() => {
              setFluxMax(0.05);
              setFrequency(50);
              setTurns(200);
            }}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
            title={labels.reset}
            aria-label={labels.reset}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {activeTab === 'simulation' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Visual Transformer Core & Stationary Coils */}
          <div className="lg:col-span-6 bg-slate-900/80 rounded-xl border border-slate-800 p-4 flex flex-col items-center justify-center">
            <svg viewBox="0 0 360 250" className="w-full h-auto max-h-[260px]">
              <defs>
                <linearGradient id="ironCoreGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
              </defs>

              {/* Laminated Magnetic Iron Core Rectangle */}
              <rect x="40" y="30" width="280" height="190" rx="12" fill="url(#ironCoreGrad)" stroke="#64748b" strokeWidth="2" />
              <rect x="95" y="75" width="170" height="100" rx="6" fill="#090d16" stroke="#475569" strokeWidth="2" />

              {/* Animated Magnetic Flux Lines in the Core */}
              <rect
                x="68"
                y="52"
                width="224"
                height="146"
                rx="8"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
                strokeDasharray="8 6"
                opacity={0.3 + fluxIntensity * 0.7}
                className="transition-opacity duration-75"
              />
              <text x="180" y="130" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                Φ(t) = {(currentFlux * 1000).toFixed(1)} mWb
              </text>
              <text x="180" y="145" fill="#94a3b8" fontSize="9" textAnchor="middle">
                {labels.core}
              </text>

              {/* Primary Coil (Left Limb) */}
              <g transform="translate(35, 75)">
                {[0, 15, 30, 45, 60, 75, 90].map((yOff, idx) => (
                  <rect key={idx} x="0" y={yOff} width="65" height="9" rx="3" fill="#b45309" stroke="#f59e0b" strokeWidth="1" />
                ))}
                <text x="32" y="115" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">
                  {labels.primaryCoil}
                </text>
              </g>

              {/* Secondary Coil (Right Limb) - Stationarily Linking Flux */}
              <g transform="translate(260, 75)">
                {[0, 15, 30, 45, 60, 75, 90].map((yOff, idx) => (
                  <rect key={idx} x="0" y={yOff} width="65" height="9" rx="3" fill="#047857" stroke="#34d399" strokeWidth="1" />
                ))}
                <text x="32" y="115" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">
                  {labels.secondaryCoil}
                </text>
                <text x="32" y="128" fill="#cbd5e1" fontSize="9" textAnchor="middle">
                  N = {turns} turns
                </text>
              </g>

              {/* Induced Voltage Meter at Secondary */}
              <circle cx="292" cy="225" r="14" fill="#0f172a" stroke="#34d399" strokeWidth="2" />
              <text x="292" y="229" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">V</text>
            </svg>

            <div className="w-full mt-2 p-2 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300">
              <span className="text-amber-400 font-bold">No Physical Motion: </span>
              {labels.lenzNote}
            </div>
          </div>

          {/* Live Waveforms: Flux Φ(t) vs Induced EMF e(t) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  Waveforms: Φ(t) vs e(t) = -N·dΦ/dt
                </span>
                <div className="flex items-center gap-3 text-[11px] font-mono">
                  <span className="text-cyan-400 font-bold">― Flux Φ</span>
                  <span className="text-emerald-400 font-bold">― EMF e</span>
                </div>
              </div>

              {/* Real-time Oscilloscope SVG */}
              <svg viewBox="0 0 380 120" className="w-full h-auto bg-slate-950 rounded-lg border border-slate-800">
                {/* Grid lines */}
                <line x1="30" y1={waveYMid} x2="370" y2={waveYMid} stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="200" y1="10" x2="200" y2="110" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

                {/* Plot Paths */}
                <path d={fluxPath} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                <path d={emfPath} fill="none" stroke="#34d399" strokeWidth="2.5" />

                {/* Vertical Cursor at Current Time */}
                <circle cx="30" cy={waveYMid - (currentFlux / fluxMax) * (waveHeight * 0.4)} r="4" fill="#38bdf8" />
                <circle cx="30" cy={waveYMid - (inducedEMF / peakEMF) * (waveHeight * 0.4)} r="4" fill="#34d399" />
              </svg>

              {/* Digital Readouts */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block font-mono">{labels.liveFlux}</span>
                  <span className="text-sm font-bold font-mono text-cyan-400">
                    {(currentFlux * 1000).toFixed(1)} <span className="text-[10px]">mWb</span>
                  </span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block font-mono">{labels.liveDphiDt}</span>
                  <span className="text-sm font-bold font-mono text-amber-400">
                    {dPhiDt.toFixed(2)} <span className="text-[10px]">Wb/s</span>
                  </span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block font-mono">{labels.liveEMF}</span>
                  <span className="text-sm font-bold font-mono text-emerald-400">
                    {inducedEMF.toFixed(1)} <span className="text-[10px]">V</span>
                  </span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
                  <span className="text-[10px] text-slate-400 block font-mono">{labels.rmsEMF}</span>
                  <span className="text-sm font-bold font-mono text-purple-400">
                    {rmsEMF.toFixed(1)} <span className="text-[10px]">V</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Live Formula Callout */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 p-3 flex flex-col gap-1">
              <span className="text-xs font-mono font-bold text-cyan-400">Transformer Induced EMF Equation:</span>
              <span className="text-sm font-mono font-bold text-slate-100">
                E_rms = 4.44 · f · N · Φ_max = 4.44 × {frequency} × {turns} × {fluxMax} = {(4.44 * frequency * turns * fluxMax).toFixed(1)} V
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* Dynamic vs Static Comparison Table */
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 overflow-x-auto">
          <h4 className="text-base font-bold text-cyan-400 mb-3 flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5" />
            {labels.comparisonTitle}
          </h4>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-950">
                <th className="p-2.5 text-slate-300 font-bold">{labels.paramCol}</th>
                <th className="p-2.5 text-amber-400 font-bold">{labels.dynamicCol}</th>
                <th className="p-2.5 text-cyan-400 font-bold">{labels.staticCol}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-mono">
              <tr>
                <td className="p-2.5 font-bold text-slate-200">Physical Motion</td>
                <td className="p-2.5 text-slate-300">Conductor physically moves through magnetic field (velocity v)</td>
                <td className="p-2.5 text-slate-300">Conductor and magnetic core are completely stationary</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-slate-200">Magnetic Field</td>
                <td className="p-2.5 text-slate-300">Typically static / constant in time (DC or permanent magnet)</td>
                <td className="p-2.5 text-slate-300">Time-varying alternating field: Φ(t) = Φ_m sin(ωt)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-slate-200">Core Equation</td>
                <td className="p-2.5 text-amber-300 font-bold">e = B · l · v · sin(θ)</td>
                <td className="p-2.5 text-cyan-300 font-bold">e = -N · (dΦ / dt)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-slate-200">Direction Rule</td>
                <td className="p-2.5 text-slate-300">Fleming's Right-Hand Rule (v × B)</td>
                <td className="p-2.5 text-slate-300">Lenz's Law (opposes flux change rate)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-slate-200">Energy Conversion</td>
                <td className="p-2.5 text-slate-300">Mechanical Energy → Electrical Energy</td>
                <td className="p-2.5 text-slate-300">Electrical Energy (Level 1) → Electrical Energy (Level 2)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold text-slate-200">Primary Examples</td>
                <td className="p-2.5 text-slate-300">DC Generators, AC Alternators, eddy current speed sensors</td>
                <td className="p-2.5 text-slate-300">Power Transformers, Induction Coils, Inductor Chokes</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Control Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-800">
        {/* Peak Flux Slider */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="flux-slider" className="text-xs font-medium text-slate-300">{labels.fluxAmp}</label>
            <span className="text-xs font-bold font-mono text-cyan-400">{(fluxMax * 1000).toFixed(0)} mWb</span>
          </div>
          <input
            id="flux-slider"
            type="range"
            min="0.01"
            max="0.2"
            step="0.01"
            value={fluxMax}
            onChange={(e) => setFluxMax(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            aria-label={labels.fluxAmp}
          />
        </div>

        {/* Frequency Slider */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="freq-slider" className="text-xs font-medium text-slate-300">{labels.frequency}</label>
            <span className="text-xs font-bold font-mono text-amber-400">{frequency} Hz</span>
          </div>
          <input
            id="freq-slider"
            type="range"
            min="10"
            max="100"
            step="5"
            value={frequency}
            onChange={(e) => setFrequency(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
            aria-label={labels.frequency}
          />
        </div>

        {/* Turns Slider */}
        <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="turns-slider" className="text-xs font-medium text-slate-300">{labels.turns}</label>
            <span className="text-xs font-bold font-mono text-emerald-400">{turns} turns</span>
          </div>
          <input
            id="turns-slider"
            type="range"
            min="50"
            max="1000"
            step="50"
            value={turns}
            onChange={(e) => setTurns(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            aria-label={labels.turns}
          />
        </div>
      </div>
    </div>
  );
};
