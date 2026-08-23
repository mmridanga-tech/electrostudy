import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RotateCcw, Play, Pause, Activity, Zap, Compass, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface SinusoidalWaveformAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Phasor Generation of Sinusoidal Waveform',
    subtitle: 'Observe how a vector (phasor) rotating counterclockwise at angular velocity ω generates a pure sinusoidal time-domain waveform.',
    amplitudeLabel: 'Peak Amplitude (Vm)',
    frequencyLabel: 'Frequency (f)',
    phaseLabel: 'Initial Phase Angle (φ)',
    play: 'Play Rotation',
    pause: 'Pause Rotation',
    reset: 'Reset Default',
    timeScrubber: 'Instantaneous Angle θ(t)',
    phasorDomain: 'Phasor Domain (Rotating Vector)',
    timeDomain: 'Time Domain v(t) = Vm · sin(ωt + φ)',
    instantaneousVal: 'Instantaneous v(t)',
    totalAngle: 'Total Phase Angle θ',
    angularVelocity: 'Angular Speed ω',
    phasorNotation: 'Polar Phasor V',
    verticalProjection: 'Vertical Projection (Sine Component)',
    realAxis: '+Real / Reference',
    imagAxis: '+Imaginary / Sine',
    formulaCalloutTitle: 'Phasor-to-Time Relationship',
    formulaCalloutText: 'The vertical projection of a radius vector of length Vm rotating counterclockwise at uniform speed ω = 2πf equals the instantaneous sinusoidal voltage: v(t) = Vm · sin(ωt + φ).',
    formulaText: 'v(t) = Im[Vm · e^(j(ωt + φ))] = Vm · sin(ωt + φ)   |   ω = 2πf'
  },
  hi: {
    title: 'साइनसॉइडल वेवफॉर्म की फेजर उत्पत्ति',
    subtitle: 'देखें कि कैसे कोणीय वेग ω से वामावर्त (एंटी-क्लॉकवाइज) घूमने वाला सदिश (फेजर) एक शुद्ध साइनसॉइडल समय-डोमेन वेवफॉर्म उत्पन्न करता है।',
    amplitudeLabel: 'शिखर आयाम (Vm)',
    frequencyLabel: 'आवृत्ति (f)',
    phaseLabel: 'प्रारंभिक फेज कोण (φ)',
    play: 'घूर्णन चलाएं',
    pause: 'घूर्णन रोकें',
    reset: 'डिफ़ॉल्ट रीसेट',
    timeScrubber: 'तात्कालिक कोण θ(t)',
    phasorDomain: 'फेजर डोमेन (घूर्णन वेक्टर)',
    timeDomain: 'टाइम डोमेन v(t) = Vm · sin(ωt + φ)',
    instantaneousVal: 'तात्कालिक मान v(t)',
    totalAngle: 'कुल फेज कोण θ',
    angularVelocity: 'कोणीय गति ω',
    phasorNotation: 'ध्रुवीय फेजर V',
    verticalProjection: 'लंबवत प्रक्षेप (साइन घटक)',
    realAxis: '+वास्तविक / संदर्भ अक्ष',
    imagAxis: '+काल्पनिक / साइन अक्ष',
    formulaCalloutTitle: 'फेजर और समय संबंध',
    formulaCalloutText: 'समान गति ω = 2πf पर घूमने वाले Vm लंबाई के वेक्टर का लंबवत प्रक्षेप तात्कालिक साइनसॉइडल वोल्टेज के बराबर होता है: v(t) = Vm · sin(ωt + φ)।',
    formulaText: 'v(t) = Im[Vm · e^(j(ωt + φ))] = Vm · sin(ωt + φ)   |   ω = 2πf'
  },
  bn: {
    title: 'সাইনুসয়েডাল ওয়েভফর্মের ফেজর উৎপত্তি',
    subtitle: 'ঘড়ির কাঁটার বিপরীতে কৌণিক বেগ ω তে ঘূর্ণায়মান ভেক্টর (ফেজর) কীভাবে একটি বিশুদ্ধ সাইনুসয়েডাল ওয়েভফর্ম তৈরি করে তা প্রত্যক্ষ করুন।',
    amplitudeLabel: 'পিক অ্যাম্প্লিটিউড (Vm)',
    frequencyLabel: 'ফ্রিকোয়েন্সি (f)',
    phaseLabel: 'প্রাথমিক ফেজ কোণ (φ)',
    play: 'ঘূর্ণন শুরু করুন',
    pause: 'ঘূর্ণন থামান',
    reset: 'ডিফল্ট রিসেট',
    timeScrubber: 'তাৎক্ষণিক কোণ θ(t)',
    phasorDomain: 'ফেজর ডোমেন (ঘূর্ণায়মান ভেক্টর)',
    timeDomain: 'টাইম ডোমেন v(t) = Vm · sin(ωt + φ)',
    instantaneousVal: 'তাৎক্ষণিক মান v(t)',
    totalAngle: 'মোট ফেজ কোণ θ',
    angularVelocity: 'কৌণিক গতিবেগ ω',
    phasorNotation: 'পোলার ফেজর V',
    verticalProjection: 'উল্লম্ব প্রক্ষেপণ (সাইন রূপ)',
    realAxis: '+বাস্তব / রেফারেন্স অক্ষ',
    imagAxis: '+কাল্পনিক / সাইন অক্ষ',
    formulaCalloutTitle: 'ফেজর ও সময়ের গাণিতিক সম্পর্ক',
    formulaCalloutText: 'ω = 2πf কৌণিক বেগে ঘূর্ণায়মান Vm দৈর্ঘ্যের ব্যাসার্ধ ভেক্টরের উল্লম্ব প্রক্ষেপণ তাৎক্ষণিক সাইনুসয়েডাল ভোল্টেজ নির্ধারণ করে: v(t) = Vm · sin(ωt + φ)।',
    formulaText: 'v(t) = Im[Vm · e^(j(ωt + φ))] = Vm · sin(ωt + φ)   |   ω = 2πf'
  }
};

export const SinusoidalWaveformAnimation: React.FC<SinusoidalWaveformAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  // State
  const [amplitude, setAmplitude] = useState<number>(100); // Normalized Volts (0 to 150)
  const [frequency, setFrequency] = useState<number>(50); // Hz
  const [phaseDeg, setPhaseDeg] = useState<number>(0); // Deg
  const [isPlaying, setIsPlaying] = useState<boolean>(!isReducedMotion);
  const [currentAngleDeg, setCurrentAngleDeg] = useState<number>(0); // 0 to 360

  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Derived calculations
  const angularSpeedRad = 2 * Math.PI * frequency;
  const totalPhaseDeg = (currentAngleDeg + phaseDeg) % 360;
  const totalPhaseRad = (totalPhaseDeg * Math.PI) / 180;
  const instantaneousVal = amplitude * Math.sin(totalPhaseRad);

  // Animation Loop
  useEffect(() => {
    if (isReducedMotion) {
      setIsPlaying(false);
      return;
    }

    const animate = (timestamp: number) => {
      if (lastTimeRef.current !== 0 && isPlaying) {
        const deltaSec = (timestamp - lastTimeRef.current) / 1000;
        // Moderate rotation speed: 60 deg/sec
        setCurrentAngleDeg((prev) => (prev + deltaSec * 90) % 360);
      }
      lastTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPlaying, isReducedMotion]);

  const handleReset = () => {
    setAmplitude(100);
    setFrequency(50);
    setPhaseDeg(0);
    setCurrentAngleDeg(0);
    setIsPlaying(!isReducedMotion);
  };

  // SVG Geometry
  const svgWidth = 780;
  const svgHeight = 280;

  // Phasor Circle Pane (Left)
  const circleCenterX = 130;
  const circleCenterY = 140;
  const maxVisualRadius = 90;
  const visualRadius = (amplitude / 150) * maxVisualRadius;

  // Phasor Vector Tip Coordinates (Standard Cartesian: angle 0 is +X axis, CCW rotation)
  // In SVG, Y increases downwards, so Y_svg = CenterY - R*sin(angle)
  const vectorTipX = circleCenterX + visualRadius * Math.cos(totalPhaseRad);
  const vectorTipY = circleCenterY - visualRadius * Math.sin(totalPhaseRad);

  // Waveform Pane (Right)
  const waveStartX = 290;
  const waveEndX = svgWidth - 30;
  const waveWidth = waveEndX - waveStartX;
  const waveCenterY = circleCenterY;

  // Generate Sine wave for 1 full 360 degree cycle
  const numSteps = 120;
  let wavePath = '';
  for (let i = 0; i <= numSteps; i++) {
    const angleFrac = i / numSteps;
    const angRad = angleFrac * 2 * Math.PI + (phaseDeg * Math.PI) / 180;
    const x = waveStartX + angleFrac * waveWidth;
    const y = waveCenterY - visualRadius * Math.sin(angRad);
    if (i === 0) wavePath += `M ${x.toFixed(2)} ${y.toFixed(2)}`;
    else wavePath += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }

  // Current marker position on waveform
  const markerFrac = currentAngleDeg / 360;
  const markerX = waveStartX + markerFrac * waveWidth;
  const markerY = waveCenterY - visualRadius * Math.sin(totalPhaseRad);

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={t.formulaCalloutTitle}
      calloutText={t.formulaCalloutText}
      formulaText={t.formulaText}
    >
      <div className="space-y-6">
        {/* Top Control Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          {/* Amplitude Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                {t.amplitudeLabel}
              </span>
              <span className="text-amber-400 font-bold px-2 py-0.5 bg-amber-950/60 border border-amber-800/60 rounded">
                {amplitude} V
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="150"
              step="10"
              value={amplitude}
              onChange={(e) => setAmplitude(Number(e.target.value))}
              aria-label={t.amplitudeLabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>30 V</span>
              <span>100 V (Nominal)</span>
              <span>150 V</span>
            </div>
          </div>

          {/* Frequency Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                {t.frequencyLabel}
              </span>
              <span className="text-cyan-400 font-bold px-2 py-0.5 bg-cyan-950/60 border border-cyan-800/60 rounded">
                {frequency} Hz
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="10"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              aria-label={t.frequencyLabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>10 Hz</span>
              <span>50 Hz</span>
              <span>100 Hz</span>
            </div>
          </div>

          {/* Initial Phase Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-purple-400" />
                {t.phaseLabel}
              </span>
              <span className="text-purple-400 font-bold px-2 py-0.5 bg-purple-950/60 border border-purple-800/60 rounded">
                {phaseDeg > 0 ? `+${phaseDeg}` : phaseDeg}°
              </span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              step="15"
              value={phaseDeg}
              onChange={(e) => setPhaseDeg(Number(e.target.value))}
              aria-label={t.phaseLabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>-180°</span>
              <span>0° (In Phase)</span>
              <span>+180°</span>
            </div>
          </div>
        </div>

        {/* Live Mathematical Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block truncate">
              {t.angularVelocity}
            </span>
            <span className="text-sm font-bold font-mono text-cyan-300">
              {angularSpeedRad.toFixed(1)} rad/s
            </span>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block truncate">
              {t.totalAngle}
            </span>
            <span className="text-sm font-bold font-mono text-purple-300">
              {totalPhaseDeg.toFixed(1)}° ({totalPhaseRad.toFixed(2)} rad)
            </span>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-lg border border-amber-850 text-center bg-amber-950/20">
            <span className="text-[10px] uppercase font-mono text-amber-300 block truncate font-semibold">
              {t.phasorNotation}
            </span>
            <span className="text-sm font-bold font-mono text-amber-200">
              {amplitude}V ∠ {phaseDeg}°
            </span>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-lg border border-cyan-800 text-center bg-cyan-950/30">
            <span className="text-[10px] uppercase font-mono text-cyan-300 block truncate font-semibold">
              {t.instantaneousVal}
            </span>
            <span className="text-sm font-bold font-mono text-cyan-200">
              {instantaneousVal >= 0 ? `+${instantaneousVal.toFixed(1)}` : instantaneousVal.toFixed(1)} V
            </span>
          </div>
        </div>

        {/* Dynamic Dual-View SVG Visualization */}
        <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 overflow-x-auto shadow-inner">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-auto max-w-full select-none"
            aria-label="Phasor Rotation and Sinusoidal Waveform Projection"
            role="img"
          >
            <defs>
              <marker
                id="arrowCyan"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
              </marker>
              <marker
                id="arrowAmber"
                viewBox="0 0 10 10"
                refX="7"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
              </marker>
            </defs>

            {/* Left Pane: Phasor Circle Background */}
            <g id="phasor-pane">
              <text x={circleCenterX} y="22" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                {t.phasorDomain}
              </text>

              {/* Reference Circle */}
              <circle
                cx={circleCenterX}
                cy={circleCenterY}
                r={visualRadius}
                fill="none"
                stroke="#1e293b"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />

              {/* Polar Cross Axes */}
              <line x1={circleCenterX - 105} y1={circleCenterY} x2={circleCenterX + 105} y2={circleCenterY} stroke="#334155" strokeWidth="1.2" markerEnd="url(#arrowCyan)" />
              <line x1={circleCenterX} y1={circleCenterY + 105} x2={circleCenterX} y2={circleCenterY - 105} stroke="#334155" strokeWidth="1.2" markerEnd="url(#arrowCyan)" />

              <text x={circleCenterX + 108} y={circleCenterY + 14} fill="#64748b" fontSize="9" fontFamily="monospace">
                +Real (0°)
              </text>
              <text x={circleCenterX} y={circleCenterY - 110} fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">
                +Imag (90°)
              </text>

              {/* Phase angle arc */}
              <path
                d={`M ${circleCenterX + 24} ${circleCenterY} A 24 24 0 0 0 ${circleCenterX + 24 * Math.cos(totalPhaseRad)} ${circleCenterY - 24 * Math.sin(totalPhaseRad)}`}
                fill="none"
                stroke="#c084fc"
                strokeWidth="1.5"
              />
              <text
                x={circleCenterX + 32 * Math.cos(totalPhaseRad / 2)}
                y={circleCenterY - 32 * Math.sin(totalPhaseRad / 2)}
                fill="#c084fc"
                fontSize="9"
                fontFamily="monospace"
                fontWeight="bold"
              >
                θ
              </text>

              {/* Rotating Phasor Vector */}
              <line
                x1={circleCenterX}
                y1={circleCenterY}
                x2={vectorTipX}
                y2={vectorTipY}
                stroke="#fbbf24"
                strokeWidth="2.5"
                markerEnd="url(#arrowAmber)"
              />

              {/* Vector tip dot */}
              <circle cx={vectorTipX} cy={vectorTipY} r="4.5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />

              {/* Vertical projection on imaginary axis */}
              <line
                x1={circleCenterX}
                y1={circleCenterY}
                x2={circleCenterX}
                y2={vectorTipY}
                stroke="#f43f5e"
                strokeWidth="2"
              />
              <circle cx={circleCenterX} cy={vectorTipY} r="3" fill="#f43f5e" />
            </g>

            {/* Dynamic Connecting Projection Line from Phasor Tip to Waveform Instantaneous Point */}
            <line
              x1={vectorTipX}
              y1={vectorTipY}
              x2={markerX}
              y2={markerY}
              stroke="#f43f5e"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              opacity="0.85"
            />

            {/* Right Pane: Sinusoidal Time-Domain Waveform */}
            <g id="waveform-pane">
              <text x={(waveStartX + waveEndX) / 2} y="22" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                {t.timeDomain}
              </text>

              {/* X & Y Axis */}
              <line x1={waveStartX} y1={waveCenterY} x2={waveEndX} y2={waveCenterY} stroke="#475569" strokeWidth="1.5" />
              <line x1={waveStartX} y1={waveCenterY - 105} x2={waveStartX} y2={waveCenterY + 105} stroke="#475569" strokeWidth="1.5" />

              {/* Axis Grid Ticks */}
              <text x={waveStartX - 8} y={waveCenterY - visualRadius + 4} fill="#fbbf24" fontSize="10" textAnchor="end" fontFamily="monospace" fontWeight="bold">
                +{amplitude}V
              </text>
              <text x={waveStartX - 8} y={waveCenterY + 4} fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="monospace">
                0V
              </text>
              <text x={waveStartX - 8} y={waveCenterY + visualRadius + 4} fill="#fbbf24" fontSize="10" textAnchor="end" fontFamily="monospace" fontWeight="bold">
                -{amplitude}V
              </text>

              {/* Time axis degree marks */}
              <text x={waveStartX} y={waveCenterY + 18} fill="#64748b" fontSize="10" fontFamily="monospace">
                0°
              </text>
              <text x={waveStartX + 0.25 * waveWidth} y={waveCenterY + 18} fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="monospace">
                90° (π/2)
              </text>
              <text x={waveStartX + 0.5 * waveWidth} y={waveCenterY + 18} fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="monospace">
                180° (π)
              </text>
              <text x={waveStartX + 0.75 * waveWidth} y={waveCenterY + 18} fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="monospace">
                270° (3π/2)
              </text>
              <text x={waveEndX} y={waveCenterY + 18} fill="#38bdf8" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                360° (2π)
              </text>

              {/* Vertical division gridlines */}
              <line x1={waveStartX + 0.25 * waveWidth} y1={waveCenterY - 95} x2={waveStartX + 0.25 * waveWidth} y2={waveCenterY + 95} stroke="#1e293b" strokeDasharray="3 3" />
              <line x1={waveStartX + 0.5 * waveWidth} y1={waveCenterY - 95} x2={waveStartX + 0.5 * waveWidth} y2={waveCenterY + 95} stroke="#1e293b" strokeDasharray="3 3" />
              <line x1={waveStartX + 0.75 * waveWidth} y1={waveCenterY - 95} x2={waveStartX + 0.75 * waveWidth} y2={waveCenterY + 95} stroke="#1e293b" strokeDasharray="3 3" />
              <line x1={waveEndX} y1={waveCenterY - 95} x2={waveEndX} y2={waveCenterY + 95} stroke="#0ea5e9" strokeDasharray="4 2" strokeWidth="1.5" />

              {/* Sine Wave Curve */}
              <path d={wavePath} fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />

              {/* Instantaneous Tracking Point on Waveform */}
              <line x1={markerX} y1={waveCenterY - 95} x2={markerX} y2={waveCenterY + 95} stroke="#f43f5e" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx={markerX} cy={markerY} r="5" fill="#f43f5e" stroke="#ffffff" strokeWidth="2" />

              {/* Floating Instantaneous Badge */}
              <rect
                x={Math.min(markerX + 8, waveEndX - 100)}
                y={Math.max(markerY - 24, 40)}
                width="96"
                height="20"
                rx="4"
                fill="#0f172a"
                stroke="#f43f5e"
                strokeWidth="1"
              />
              <text
                x={Math.min(markerX + 13, waveEndX - 95)}
                y={Math.max(markerY - 10, 54)}
                fill="#fecdd3"
                fontSize="9.5"
                fontFamily="monospace"
                fontWeight="bold"
              >
                v={instantaneousVal >= 0 ? `+${instantaneousVal.toFixed(1)}` : instantaneousVal.toFixed(1)}V
              </text>
            </g>
          </svg>
        </div>

        {/* Bottom Playback & Angle Scrubber Controls (hidden during print) */}
        <div className="print:hidden flex flex-wrap items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? t.pause : t.play}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-md shadow-cyan-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? t.pause : t.play}</span>
            </button>

            <button
              onClick={handleReset}
              aria-label={t.reset}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono font-medium transition-colors flex items-center gap-1.5 border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.reset}</span>
            </button>
          </div>

          {/* Angle Scrubber */}
          <div className="flex items-center gap-3 flex-1 min-w-[200px] max-w-md">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1 whitespace-nowrap">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              {t.timeScrubber}:
            </span>
            <input
              type="range"
              min="0"
              max="360"
              step="5"
              value={currentAngleDeg}
              onChange={(e) => {
                setIsPlaying(false);
                setCurrentAngleDeg(Number(e.target.value));
              }}
              aria-label={t.timeScrubber}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            />
            <span className="text-xs font-mono text-cyan-300 font-bold min-w-[45px] text-right">
              {currentAngleDeg.toFixed(0)}°
            </span>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
