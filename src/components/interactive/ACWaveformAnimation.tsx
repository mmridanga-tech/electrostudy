import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RotateCcw, Play, Pause, Activity, Zap, Clock, Compass } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ACWaveformAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'AC Waveform & Periodic Characteristics Simulator',
    subtitle: 'Interactively explore the mathematical relationships governing alternating voltage: amplitude, frequency, time period, and instantaneous values.',
    frequencyLabel: 'Frequency (f)',
    amplitudeLabel: 'Peak Amplitude (Vm)',
    phaseLabel: 'Initial Phase (φ)',
    play: 'Play Animation',
    pause: 'Pause Animation',
    reset: 'Reset Default',
    timeScrubber: 'Instantaneous Time Cursor (t)',
    liveMetrics: 'Live Waveform Metrics',
    timePeriod: 'Time Period (T = 1/f)',
    angularFreq: 'Angular Frequency (ω = 2πf)',
    peakVoltage: 'Peak Voltage (Vm)',
    peakToPeak: 'Peak-to-Peak Voltage (Vp-p = 2Vm)',
    instantaneousVal: 'Instantaneous Voltage v(t)',
    currentAngle: 'Instantaneous Phase Angle θ',
    positiveHalf: 'Positive Half-Cycle (0 to T/2)',
    negativeHalf: 'Negative Half-Cycle (T/2 to T)',
    zeroCrossing: 'Zero Crossing',
    positivePeak: 'Positive Peak (+Vm)',
    negativePeak: 'Negative Peak (-Vm)',
    cycleLabel: '1 Full Cycle (T)',
    formulaCalloutTitle: 'Governing Sinusoidal Equation',
    formulaCalloutText: 'v(t) = Vm · sin(ωt + φ) = Vm · sin(2πf · t + φ). At any instant t, the generated voltage depends harmonically on the angular position of the rotating conductor.',
    formulaText: 'v(t) = Vm · sin(2πf · t + φ)   |   T = 1 / f   |   ω = 2πf'
  },
  hi: {
    title: 'एसी वेवफॉर्म एवं आवधिक विशेषताएँ सिम्युलेटर',
    subtitle: 'प्रत्यावर्ती वोल्टेज को नियंत्रित करने वाले गणितीय संबंधों का अन्वेषण करें: आयाम, आवृत्ति, आवर्तकाल एवं तात्कालिक मान।',
    frequencyLabel: 'आवृत्ति (f)',
    amplitudeLabel: 'शिखर आयाम (Vm)',
    phaseLabel: 'प्रारंभिक फेज (φ)',
    play: 'एनिमेशन चलाएं',
    pause: 'एनिमेशन रोकें',
    reset: 'डिफ़ॉल्ट रीसेट',
    timeScrubber: 'तात्कालिक समय कर्सर (t)',
    liveMetrics: 'लाइव वेवफॉर्म मेट्रिक्स',
    timePeriod: 'आवर्तकाल (T = 1/f)',
    angularFreq: 'कोणीय आवृत्ति (ω = 2πf)',
    peakVoltage: 'शिखर वोल्टेज (Vm)',
    peakToPeak: 'शिखर-से-शिखर वोल्टेज (Vp-p = 2Vm)',
    instantaneousVal: 'तात्कालिक वोल्टेज v(t)',
    currentAngle: 'तात्कालिक फेज कोण θ',
    positiveHalf: 'धनात्मक अर्ध-चक्र (0 से T/2)',
    negativeHalf: 'ऋणात्मक अर्ध-चक्र (T/2 से T)',
    zeroCrossing: 'शून्य क्रॉसिंग',
    positivePeak: 'धनात्मक शिखर (+Vm)',
    negativePeak: 'ऋणात्मक शिखर (-Vm)',
    cycleLabel: '1 पूर्ण चक्र (T)',
    formulaCalloutTitle: 'साइनसॉइडल समीकरण',
    formulaCalloutText: 'v(t) = Vm · sin(ωt + φ) = Vm · sin(2πf · t + φ)। किसी भी क्षण t पर, उत्पन्न वोल्टेज चालक की कोणीय स्थिति पर निर्भर करता है।',
    formulaText: 'v(t) = Vm · sin(2πf · t + φ)   |   T = 1 / f   |   ω = 2πf'
  },
  bn: {
    title: 'এসি ওয়েভফর্ম ও পর্যায়ক্রমিক বৈশিষ্ট্য সিমুলেটর',
    subtitle: 'অল্টারনেটিং ভোল্টেজের গাণিতিক সম্পর্ক পর্যবেক্ষণ করুন: অ্যাম্প্লিটিউড, ফ্রিকোয়েন্সি, পর্যায়কাল ও তাৎক্ষণিক মান।',
    frequencyLabel: 'ফ্রিকোয়েন্সি (f)',
    amplitudeLabel: 'পিক অ্যাম্প্লিটিউড (Vm)',
    phaseLabel: 'প্রাথমিক ফেজ (φ)',
    play: 'অ্যানিমেশন চালু করুন',
    pause: 'অ্যানিমেশন থামান',
    reset: 'ডিফল্ট রিসেট',
    timeScrubber: 'তাৎক্ষণিক সময় কার্সার (t)',
    liveMetrics: 'লাইভ ওয়েভফর্ম পরিমাপ',
    timePeriod: 'পর্যায়কাল (T = 1/f)',
    angularFreq: 'কৌণিক কম্পাঙ্ক (ω = 2πf)',
    peakVoltage: 'পিক ভোল্টেজ (Vm)',
    peakToPeak: 'পিক-টু-পিক ভোল্টেজ (Vp-p = 2Vm)',
    instantaneousVal: 'তাৎক্ষণিক ভোল্টেজ v(t)',
    currentAngle: 'তাৎক্ষণিক ফেজ কোণ θ',
    positiveHalf: 'পজিটিভ অর্ধ-চক্র (0 থেকে T/2)',
    negativeHalf: 'নেগেটিভ অর্ধ-চক্র (T/2 থেকে T)',
    zeroCrossing: 'জিরো ক্রসিং',
    positivePeak: 'পজিটিভ পিক (+Vm)',
    negativePeak: 'নেগেটিভ পিক (-Vm)',
    cycleLabel: '১ পূর্ণ চক্র (T)',
    formulaCalloutTitle: 'সাইনুসয়েডাল সমীকরণ',
    formulaCalloutText: 'v(t) = Vm · sin(ωt + φ) = Vm · sin(2πf · t + φ)। যেকোনো মুহূর্ত t-তে উৎপন্ন ভোল্টেজ ঘূর্ণায়মান পরিবাহীর কৌণিক অবস্থানের ওপর নির্ভর করে।',
    formulaText: 'v(t) = Vm · sin(2πf · t + φ)   |   T = 1 / f   |   ω = 2πf'
  }
};

export const ACWaveformAnimation: React.FC<ACWaveformAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  // State
  const [frequency, setFrequency] = useState<number>(50); // Hz (Standard Indian / European grid)
  const [amplitude, setAmplitude] = useState<number>(325); // Volts Peak (corresponds to ~230V RMS)
  const [phaseDeg, setPhaseDeg] = useState<number>(0); // Degrees
  const [isPlaying, setIsPlaying] = useState<boolean>(!isReducedMotion);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(0); // Elapsed time in seconds

  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Derived calculations
  const timePeriodSec = 1 / (frequency || 1); // T = 1 / f (s)
  const timePeriodMs = timePeriodSec * 1000; // T (ms)
  const angularFreqRad = 2 * Math.PI * frequency; // ω = 2πf (rad/s)
  const peakToPeak = 2 * amplitude; // Vp-p = 2Vm
  const phaseRad = (phaseDeg * Math.PI) / 180;

  // Normalized instantaneous time within 2 displayed cycles
  const displayDurationSec = 2 * timePeriodSec;
  const normalizedTimeSec = currentTimeSec % displayDurationSec;
  const totalPhaseRad = angularFreqRad * normalizedTimeSec + phaseRad;
  const instantaneousVoltage = amplitude * Math.sin(totalPhaseRad);
  const currentAngleDeg = (((totalPhaseRad * 180) / Math.PI) % 360 + 360) % 360;

  // Animation Loop
  useEffect(() => {
    if (isReducedMotion) {
      setIsPlaying(false);
      return;
    }

    const animate = (timestamp: number) => {
      if (lastTimeRef.current !== 0 && isPlaying) {
        const deltaSec = (timestamp - lastTimeRef.current) / 1000;
        // Slow down visual animation by factor of 0.2 so 50Hz is clearly educational
        setCurrentTimeSec((prev) => prev + deltaSec * 0.15);
      }
      lastTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPlaying, isReducedMotion]);

  const handleReset = () => {
    setFrequency(50);
    setAmplitude(325);
    setPhaseDeg(0);
    setCurrentTimeSec(0);
    setIsPlaying(!isReducedMotion);
  };

  // SVG Geometry Constants
  const svgWidth = 720;
  const svgHeight = 280;
  const paddingLeft = 60;
  const paddingRight = 40;
  const paddingTop = 30;
  const paddingBottom = 40;
  const plotWidth = svgWidth - paddingLeft - paddingRight;
  const plotHeight = svgHeight - paddingTop - paddingBottom;
  const centerY = paddingTop + plotHeight / 2;

  // Generate Sine Wave Path for 2 full cycles
  const numPoints = 240;
  let wavePath = '';
  const points: { x: number; y: number; tSec: number; vVal: number }[] = [];

  for (let i = 0; i <= numPoints; i++) {
    const frac = i / numPoints;
    const tSec = frac * displayDurationSec;
    const vVal = amplitude * Math.sin(angularFreqRad * tSec + phaseRad);
    const x = paddingLeft + frac * plotWidth;
    // Map +amplitude to paddingTop, -amplitude to (paddingTop + plotHeight)
    const y = centerY - (vVal / (amplitude || 1)) * (plotHeight / 2 - 10);
    points.push({ x, y, tSec, vVal });

    if (i === 0) {
      wavePath += `M ${x.toFixed(2)} ${y.toFixed(2)}`;
    } else {
      wavePath += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
  }

  // Calculate current cursor position on SVG
  const cursorFrac = normalizedTimeSec / displayDurationSec;
  const cursorX = paddingLeft + cursorFrac * plotWidth;
  const cursorY = centerY - (instantaneousVoltage / (amplitude || 1)) * (plotHeight / 2 - 10);

  // Positions for 1 cycle markers
  const oneCycleX = paddingLeft + (timePeriodSec / displayDurationSec) * plotWidth;
  const halfCycleX = paddingLeft + ((timePeriodSec * 0.5) / displayDurationSec) * plotWidth;

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
          {/* Frequency Control */}
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
              step="5"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              aria-label={t.frequencyLabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>10 Hz</span>
              <span>50 Hz (Grid)</span>
              <span>100 Hz</span>
            </div>
          </div>

          {/* Peak Amplitude Control */}
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
              min="50"
              max="400"
              step="25"
              value={amplitude}
              onChange={(e) => setAmplitude(Number(e.target.value))}
              aria-label={t.amplitudeLabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>50 V</span>
              <span>325 V (230V RMS)</span>
              <span>400 V</span>
            </div>
          </div>

          {/* Phase Angle Control */}
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
              <span>0° (In-Phase)</span>
              <span>+180°</span>
            </div>
          </div>
        </div>

        {/* Live Mathematical Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block truncate">
              {t.timePeriod}
            </span>
            <span className="text-sm font-bold font-mono text-cyan-300">
              {timePeriodMs.toFixed(2)} ms
            </span>
          </div>

          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block truncate">
              {t.angularFreq}
            </span>
            <span className="text-sm font-bold font-mono text-cyan-300">
              {angularFreqRad.toFixed(1)} rad/s
            </span>
          </div>

          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block truncate">
              {t.peakVoltage}
            </span>
            <span className="text-sm font-bold font-mono text-amber-300">
              +{amplitude} V
            </span>
          </div>

          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block truncate">
              {t.peakToPeak}
            </span>
            <span className="text-sm font-bold font-mono text-amber-400">
              {peakToPeak} V
            </span>
          </div>

          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-cyan-800/80 text-center bg-cyan-950/30">
            <span className="text-[10px] uppercase font-mono text-cyan-300 block truncate font-semibold">
              {t.instantaneousVal}
            </span>
            <span className="text-sm font-bold font-mono text-cyan-200">
              {instantaneousVoltage >= 0 ? `+${instantaneousVoltage.toFixed(1)}` : instantaneousVoltage.toFixed(1)} V
            </span>
          </div>

          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-purple-800/80 text-center bg-purple-950/30">
            <span className="text-[10px] uppercase font-mono text-purple-300 block truncate font-semibold">
              {t.currentAngle}
            </span>
            <span className="text-sm font-bold font-mono text-purple-200">
              {currentAngleDeg.toFixed(1)}°
            </span>
          </div>
        </div>

        {/* Interactive Waveform SVG Canvas */}
        <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 overflow-x-auto shadow-inner">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-auto max-w-full select-none"
            aria-label="Interactive AC Sine Waveform Graph"
            role="img"
          >
            <defs>
              <linearGradient id="positiveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.02" />
              </linearGradient>
              <linearGradient id="negativeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.02" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.25" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid Lines */}
            <g stroke="#1e293b" strokeDasharray="3 3" strokeWidth="1">
              {/* Horizontal grid lines for +Vm, 0, -Vm */}
              <line x1={paddingLeft} y1={paddingTop + 10} x2={svgWidth - paddingRight} y2={paddingTop + 10} />
              <line x1={paddingLeft} y1={centerY} x2={svgWidth - paddingRight} y2={centerY} stroke="#475569" strokeDasharray="none" strokeWidth="1.5" />
              <line x1={paddingLeft} y1={paddingTop + plotHeight - 10} x2={svgWidth - paddingRight} y2={paddingTop + plotHeight - 10} />

              {/* Vertical time grid ticks */}
              <line x1={halfCycleX} y1={paddingTop} x2={halfCycleX} y2={paddingTop + plotHeight} />
              <line x1={oneCycleX} y1={paddingTop} x2={oneCycleX} y2={paddingTop + plotHeight} stroke="#0ea5e9" strokeDasharray="4 2" strokeWidth="1.5" />
            </g>

            {/* Voltage Y-Axis Labels */}
            <text x={paddingLeft - 8} y={paddingTop + 14} fill="#fbbf24" fontSize="11" textAnchor="end" fontFamily="monospace" fontWeight="bold">
              +{amplitude}V
            </text>
            <text x={paddingLeft - 8} y={centerY + 4} fill="#94a3b8" fontSize="11" textAnchor="end" fontFamily="monospace">
              0V
            </text>
            <text x={paddingLeft - 8} y={paddingTop + plotHeight - 6} fill="#fbbf24" fontSize="11" textAnchor="end" fontFamily="monospace" fontWeight="bold">
              -{amplitude}V
            </text>

            {/* Time X-Axis Labels */}
            <text x={paddingLeft} y={centerY + 16} fill="#64748b" fontSize="10" fontFamily="monospace">
              t=0
            </text>
            <text x={halfCycleX} y={centerY + 16} fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="monospace">
              T/2 ({(timePeriodMs / 2).toFixed(1)}ms)
            </text>
            <text x={oneCycleX} y={centerY + 16} fill="#38bdf8" fontSize="10" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
              T ({timePeriodMs.toFixed(1)}ms)
            </text>
            <text x={svgWidth - paddingRight} y={centerY + 16} fill="#64748b" fontSize="10" textAnchor="end" fontFamily="monospace">
              2T ({(2 * timePeriodMs).toFixed(1)}ms)
            </text>

            {/* One Cycle Period Dimension Indicator */}
            <g stroke="#38bdf8" strokeWidth="1.2">
              <line x1={paddingLeft} y1={paddingTop - 12} x2={oneCycleX} y2={paddingTop - 12} />
              <line x1={paddingLeft} y1={paddingTop - 16} x2={paddingLeft} y2={paddingTop - 8} />
              <line x1={oneCycleX} y1={paddingTop - 16} x2={oneCycleX} y2={paddingTop - 8} />
            </g>
            <text
              x={(paddingLeft + oneCycleX) / 2}
              y={paddingTop - 16}
              fill="#38bdf8"
              fontSize="10"
              textAnchor="middle"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {t.cycleLabel} (T = {timePeriodMs.toFixed(2)} ms)
            </text>

            {/* Peak-to-Peak Height Dimension Indicator */}
            <g stroke="#fbbf24" strokeWidth="1.2">
              <line x1={svgWidth - paddingRight + 12} y1={paddingTop + 10} x2={svgWidth - paddingRight + 12} y2={paddingTop + plotHeight - 10} />
              <line x1={svgWidth - paddingRight + 8} y1={paddingTop + 10} x2={svgWidth - paddingRight + 16} y2={paddingTop + 10} />
              <line x1={svgWidth - paddingRight + 8} y1={paddingTop + plotHeight - 10} x2={svgWidth - paddingRight + 16} y2={paddingTop + plotHeight - 10} />
            </g>
            <text
              x={svgWidth - paddingRight + 18}
              y={centerY + 3}
              fill="#fbbf24"
              fontSize="10"
              fontFamily="monospace"
              fontWeight="bold"
            >
              Vp-p = {peakToPeak}V
            </text>

            {/* Continuous Sine Wave Curve */}
            <path
              d={wavePath}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
            />

            {/* Instantaneous Animated Cursor Point */}
            <g>
              {/* Vertical tracking line */}
              <line
                x1={cursorX}
                y1={paddingTop}
                x2={cursorX}
                y2={paddingTop + plotHeight}
                stroke="#f43f5e"
                strokeWidth="1.5"
                strokeDasharray="2 2"
                opacity="0.8"
              />
              {/* Horizontal line to Y axis */}
              <line
                x1={paddingLeft}
                y1={cursorY}
                x2={cursorX}
                y2={cursorY}
                stroke="#f43f5e"
                strokeWidth="1"
                strokeDasharray="2 2"
                opacity="0.6"
              />
              {/* Glowing instantaneous marker dot */}
              <circle cx={cursorX} cy={cursorY} r="6" fill="#f43f5e" stroke="#ffffff" strokeWidth="2" />
              <circle cx={cursorX} cy={cursorY} r="10" fill="none" stroke="#f43f5e" strokeWidth="1" opacity="0.5" />

              {/* Cursor Floating Badge */}
              <rect
                x={Math.min(cursorX + 8, svgWidth - paddingRight - 110)}
                y={Math.max(cursorY - 26, paddingTop + 4)}
                width="104"
                height="22"
                rx="4"
                fill="#0f172a"
                stroke="#f43f5e"
                strokeWidth="1"
              />
              <text
                x={Math.min(cursorX + 14, svgWidth - paddingRight - 104)}
                y={Math.max(cursorY - 11, paddingTop + 19)}
                fill="#fecdd3"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
              >
                v(t) = {instantaneousVoltage >= 0 ? `+${instantaneousVoltage.toFixed(1)}` : instantaneousVoltage.toFixed(1)}V
              </text>
            </g>
          </svg>
        </div>

        {/* Bottom Playback & Time Controls (hidden during print) */}
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

          {/* Time Scrubber */}
          <div className="flex items-center gap-3 flex-1 min-w-[200px] max-w-md">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              {t.timeScrubber}:
            </span>
            <input
              type="range"
              min="0"
              max={displayDurationSec}
              step={displayDurationSec / 200}
              value={normalizedTimeSec}
              onChange={(e) => {
                setIsPlaying(false);
                setCurrentTimeSec(Number(e.target.value));
              }}
              aria-label={t.timeScrubber}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            />
            <span className="text-xs font-mono text-cyan-300 font-bold min-w-[55px] text-right">
              {(normalizedTimeSec * 1000).toFixed(1)} ms
            </span>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
