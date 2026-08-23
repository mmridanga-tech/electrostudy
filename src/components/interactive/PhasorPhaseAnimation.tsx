import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RotateCcw, Play, Pause, Activity, Zap, Compass, Clock, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface PhasorPhaseAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'AC Phase Difference & Dual Phasor Simulator',
    subtitle: 'Explore phase angles, leading/lagging relationships, and time shifts between two alternating sinusoidal quantities in both phasor and waveform domains.',
    presetsLabel: 'Preset Phase Shifts:',
    inPhase: 'In-Phase (0°)',
    quadLead: 'A Leads B by 90°',
    quadLag: 'A Lags B by 90°',
    antiPhase: 'Out of Phase (180°)',
    custom: 'Custom Phase',
    freqLabel: 'Frequency (f)',
    ampALabel: 'Amplitude A (VmA)',
    ampBLabel: 'Amplitude B (VmB)',
    phaseDiffLabel: 'Phase Angle φ (Wave A vs B)',
    play: 'Play Rotation',
    pause: 'Pause Rotation',
    reset: 'Reset Defaults',
    angleScrubber: 'Instantaneous Rotor Angle θ(t)',
    timeDifference: 'Time Difference (Δt = |φ| / 360° × T)',
    timePeriod: 'Period (T = 1/f)',
    relationshipStatus: 'Phase Relationship',
    aLeadsB: 'Waveform A LEADS Waveform B by',
    aLagsB: 'Waveform A LAGS Waveform B by',
    inPhaseText: 'Waveforms A and B are strictly IN-PHASE (φ = 0°)',
    antiPhaseText: 'Waveforms A and B are in ANTIPHASE (φ = 180°)',
    phasorDomain: 'Phasor Domain (CCW Rotating Vectors)',
    waveformDomain: 'Waveform Domain (Time-Series)',
    waveALabel: 'Wave A: vA(t) = VmA · sin(ωt + φ)',
    waveBLabel: 'Wave B: vB(t) = VmB · sin(ωt)',
    formulaCalloutTitle: 'Phase-to-Time Shift Formula',
    formulaCalloutText: 'Phase difference φ (in degrees) translates to physical time shift Δt via Δt = (|φ| / 360°) × T = |φ| / (2πf). The leading waveform reaches its peak earlier in time.',
    formulaText: 'φ = ω · Δt = 2πf · Δt   |   Δt = (φ / 360°) · T   |   vA(t) = VmA · sin(ωt + φ)'
  },
  hi: {
    title: 'एसी फेज अंतर एवं द्वि-फेजर सिम्युलेटर',
    subtitle: 'फेजर और वेवफॉर्म दोनों डोमेन में दो प्रत्यावर्ती राशियों के बीच फेज कोण, लीडिंग/लैगिंग संबंध एवं समय अंतराल का अन्वेषण करें।',
    presetsLabel: 'प्रीसेट फेज शिफ्ट:',
    inPhase: 'इन-फेज (0°)',
    quadLead: 'A, B से 90° आगे (लीड)',
    quadLag: 'A, B से 90° पीछे (लैग)',
    antiPhase: 'विपरीत फेज (180°)',
    custom: 'कस्टम फेज',
    freqLabel: 'आवृत्ति (f)',
    ampALabel: 'आयाम A (VmA)',
    ampBLabel: 'आयाम B (VmB)',
    phaseDiffLabel: 'फेज कोण φ (A बनाम B)',
    play: 'घूर्णन चलाएं',
    pause: 'घूर्णन रोकें',
    reset: 'डिफ़ॉल्ट रीसेट',
    angleScrubber: 'तात्कालिक रोटर कोण θ(t)',
    timeDifference: 'समय अंतर (Δt = |φ| / 360° × T)',
    timePeriod: 'आवर्तकाल (T = 1/f)',
    relationshipStatus: 'फेज संबंध',
    aLeadsB: 'वेवफॉर्म A, वेवफॉर्म B से आगे (LEADS) है:',
    aLagsB: 'वेवफॉर्म A, वेवफॉर्म B से पीछे (LAGS) है:',
    inPhaseText: 'वेवफॉर्म A एवं B पूर्णतः समान फेज (IN-PHASE) में हैं (φ = 0°)',
    antiPhaseText: 'वेवफॉर्म A एवं B विपरीत फेज (180°) में हैं',
    phasorDomain: 'फेजर डोमेन (वामावर्त घूर्णन वेक्टर)',
    waveformDomain: 'वेवफॉर्म डोमेन (समय-श्रृंखला)',
    waveALabel: 'वेव A: vA(t) = VmA · sin(ωt + φ)',
    waveBLabel: 'वेव B: vB(t) = VmB · sin(ωt)',
    formulaCalloutTitle: 'फेज एवं समय संबंध सूत्र',
    formulaCalloutText: 'फेज अंतर φ (डिग्री में) समय अंतर Δt से संबंधित है: Δt = (|φ| / 360°) × T = |φ| / (2πf)। लीड करने वाली तरंग समय में पहले अपने शिखर पर पहुँचती है।',
    formulaText: 'φ = ω · Δt = 2πf · Δt   |   Δt = (φ / 360°) · T   |   vA(t) = VmA · sin(ωt + φ)'
  },
  bn: {
    title: 'এসি ফেজ পার্থক্য ও দ্বৈত-ফেজর সিমুলেটর',
    subtitle: 'ফেজর এবং ওয়েভফর্ম উভয় ক্ষেত্রে দুটি অল্টারনেটিং তরঙ্গের মধ্যকার ফেজ কোণ, লিডিং/ল্যাগিং সম্পর্ক এবং সময়ের পার্থক্য পর্যবেক্ষণ করুন।',
    presetsLabel: 'প্রিসেট ফেজ শিফট:',
    inPhase: 'ইন-ফেজ (0°)',
    quadLead: 'A, B অপেক্ষা 90° এগিয়ে (Lead)',
    quadLag: 'A, B অপেক্ষা 90° পিছিয়ে (Lag)',
    antiPhase: 'বিপরীত ফেজ (180°)',
    custom: 'কাস্টম ফেজ',
    freqLabel: 'ফ্রিকোয়েন্সি (f)',
    ampALabel: 'অ্যাম্প্লিটিউড A (VmA)',
    ampBLabel: 'অ্যাম্প্লিটিউড B (VmB)',
    phaseDiffLabel: 'ফেজ কোণ φ (A বনাম B)',
    play: 'ঘূর্ণন চালান',
    pause: 'ঘূর্ণন থামান',
    reset: 'ডিফল্ট রিসেট',
    angleScrubber: 'তাৎক্ষণিক রোটর কোণ θ(t)',
    timeDifference: 'সময়ের পার্থক্য (Δt = |φ| / 360° × T)',
    timePeriod: 'পর্যায়কাল (T = 1/f)',
    relationshipStatus: 'ফেজ সম্পর্ক',
    aLeadsB: 'ওয়েভফর্ম A, ওয়েভফর্ম B অপেক্ষা এগিয়ে (LEADS):',
    aLagsB: 'ওয়েভফর্ম A, ওয়েভফর্ম B অপেক্ষা পিছিয়ে (LAGS):',
    inPhaseText: 'ওয়েভফর্ম A এবং B সম্পূর্ণ ইন-ফেজে রয়েছে (φ = 0°)',
    antiPhaseText: 'ওয়েভফর্ম A এবং B বিপরীত ফেজে (180°) রয়েছে',
    phasorDomain: 'ফেজর ডোমেন (ঘূর্ণায়মান ভেক্টর)',
    waveformDomain: 'ওয়েভফর্ম ডোমেন (টাইম সিরিজ)',
    waveALabel: 'ওয়েভ A: vA(t) = VmA · sin(ωt + φ)',
    waveBLabel: 'ওয়েভ B: vB(t) = VmB · sin(ωt)',
    formulaCalloutTitle: 'ফেজ ও সময়ের গাণিতিক সম্পর্ক',
    formulaCalloutText: 'ফেজ পার্থক্য φ সময় পার্থক্য Δt এর সাথে সম্পর্কিত: Δt = (|φ| / 360°) × T = |φ| / (2πf)। লিডিং তরঙ্গ সময়ের দিক থেকে আগে পিক মানে পৌঁছায়।',
    formulaText: 'φ = ω · Δt = 2πf · Δt   |   Δt = (φ / 360°) · T   |   vA(t) = VmA · sin(ωt + φ)'
  }
};

export const PhasorPhaseAnimation: React.FC<PhasorPhaseAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  // State
  const [frequency, setFrequency] = useState<number>(50); // Hz
  const [ampA, setAmpA] = useState<number>(100); // Volts
  const [ampB, setAmpB] = useState<number>(75); // Volts
  const [phaseDiffDeg, setPhaseDiffDeg] = useState<number>(45); // Wave A relative to Wave B (-180 to +180)
  const [isPlaying, setIsPlaying] = useState<boolean>(!isReducedMotion);
  const [currentBaseAngleDeg, setCurrentBaseAngleDeg] = useState<number>(0); // 0 to 360 deg

  const requestRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Derived Calculations
  const timePeriodMs = 1000 / (frequency || 50);
  const absPhaseDiff = Math.abs(phaseDiffDeg);
  const timeDiffMs = (absPhaseDiff / 360) * timePeriodMs;

  // Instantaneous Angles
  // Wave B is reference: theta_B = baseAngle
  // Wave A is: theta_A = baseAngle + phaseDiffDeg
  const thetaBDeg = ((currentBaseAngleDeg % 360) + 360) % 360;
  const thetaADeg = (((currentBaseAngleDeg + phaseDiffDeg) % 360) + 360) % 360;

  const thetaBRad = (thetaBDeg * Math.PI) / 180;
  const thetaARad = (thetaADeg * Math.PI) / 180;

  const instValB = ampB * Math.sin(thetaBRad);
  const instValA = ampA * Math.sin(thetaARad);

  // Animation Loop
  useEffect(() => {
    if (isReducedMotion) {
      setIsPlaying(false);
      return;
    }

    const animate = (timestamp: number) => {
      if (lastTimeRef.current !== 0 && isPlaying) {
        const deltaSec = (timestamp - lastTimeRef.current) / 1000;
        setCurrentBaseAngleDeg((prev) => (prev + deltaSec * 90) % 360);
      }
      lastTimeRef.current = timestamp;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPlaying, isReducedMotion]);

  const handleReset = () => {
    setFrequency(50);
    setAmpA(100);
    setAmpB(75);
    setPhaseDiffDeg(45);
    setCurrentBaseAngleDeg(0);
    setIsPlaying(!isReducedMotion);
  };

  // SVG Geometry Settings
  const svgWidth = 820;
  const svgHeight = 290;

  // Phasor Pane Geometry (Left)
  const circleCenterX = 130;
  const circleCenterY = 145;
  const maxRadiusPx = 80;
  const radiusA = (ampA / 120) * maxRadiusPx;
  const radiusB = (ampB / 120) * maxRadiusPx;

  // Vector coordinates
  // standard Cartesian CCW: X = cx + r*cos(th), Y = cy - r*sin(th)
  const tipAX = circleCenterX + radiusA * Math.cos(thetaARad);
  const tipAY = circleCenterY - radiusA * Math.sin(thetaARad);

  const tipBX = circleCenterX + radiusB * Math.cos(thetaBRad);
  const tipBY = circleCenterY - radiusB * Math.sin(thetaBRad);

  // Waveform Pane Geometry (Right)
  const waveStartX = 290;
  const waveEndX = svgWidth - 30;
  const waveWidth = waveEndX - waveStartX;
  const waveCenterY = circleCenterY;

  // Generate continuous sine waves for 1 full 360° period
  const numSteps = 120;
  let wavePathA = '';
  let wavePathB = '';

  for (let i = 0; i <= numSteps; i++) {
    const frac = i / numSteps;
    const angRadB = frac * 2 * Math.PI;
    const angRadA = frac * 2 * Math.PI + (phaseDiffDeg * Math.PI) / 180;
    const x = waveStartX + frac * waveWidth;
    const yA = waveCenterY - (ampA / 120) * maxRadiusPx * Math.sin(angRadA);
    const yB = waveCenterY - (ampB / 120) * maxRadiusPx * Math.sin(angRadB);

    if (i === 0) {
      wavePathA += `M ${x.toFixed(2)} ${yA.toFixed(2)}`;
      wavePathB += `M ${x.toFixed(2)} ${yB.toFixed(2)}`;
    } else {
      wavePathA += ` L ${x.toFixed(2)} ${yA.toFixed(2)}`;
      wavePathB += ` L ${x.toFixed(2)} ${yB.toFixed(2)}`;
    }
  }

  // Current Instantaneous Positions on Waveforms
  const markerFrac = thetaBDeg / 360;
  const markerX = waveStartX + markerFrac * waveWidth;
  const markerYA = waveCenterY - (instValA / 120) * maxRadiusPx;
  const markerYB = waveCenterY - (instValB / 120) * maxRadiusPx;

  // Relationship description string
  let relationshipText = '';
  if (phaseDiffDeg === 0) {
    relationshipText = t.inPhaseText;
  } else if (Math.abs(phaseDiffDeg) === 180) {
    relationshipText = t.antiPhaseText;
  } else if (phaseDiffDeg > 0) {
    relationshipText = `${t.aLeadsB} ${phaseDiffDeg}° (Δt = ${timeDiffMs.toFixed(2)} ms)`;
  } else {
    relationshipText = `${t.aLagsB} ${absPhaseDiff}° (Δt = ${timeDiffMs.toFixed(2)} ms)`;
  }

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
        {/* Preset Mode Selector Buttons */}
        <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              {t.presetsLabel}
            </span>
            <span className="text-xs font-mono text-cyan-300 font-bold px-2 py-0.5 bg-cyan-950/60 border border-cyan-800 rounded">
              φ = {phaseDiffDeg > 0 ? `+${phaseDiffDeg}` : phaseDiffDeg}°
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={() => setPhaseDiffDeg(0)}
              aria-pressed={phaseDiffDeg === 0}
              aria-label={t.inPhase}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all text-center border ${
                phaseDiffDeg === 0
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 shadow-sm shadow-cyan-950'
                  : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
              }`}
            >
              {t.inPhase}
            </button>

            <button
              onClick={() => setPhaseDiffDeg(90)}
              aria-pressed={phaseDiffDeg === 90}
              aria-label={t.quadLead}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all text-center border ${
                phaseDiffDeg === 90
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 shadow-sm shadow-cyan-950'
                  : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
              }`}
            >
              {t.quadLead}
            </button>

            <button
              onClick={() => setPhaseDiffDeg(-90)}
              aria-pressed={phaseDiffDeg === -90}
              aria-label={t.quadLag}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all text-center border ${
                phaseDiffDeg === -90
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 shadow-sm shadow-cyan-950'
                  : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
              }`}
            >
              {t.quadLag}
            </button>

            <button
              onClick={() => setPhaseDiffDeg(180)}
              aria-pressed={phaseDiffDeg === 180 || phaseDiffDeg === -180}
              aria-label={t.antiPhase}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all text-center border ${
                Math.abs(phaseDiffDeg) === 180
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 shadow-sm shadow-cyan-950'
                  : 'bg-slate-800 hover:bg-slate-750 text-slate-300 border-slate-700'
              }`}
            >
              {t.antiPhase}
            </button>
          </div>
        </div>

        {/* Top Control Sliders Dashboard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          {/* Phase Angle φ Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300 font-semibold">{t.phaseDiffLabel}</span>
              <span className="text-cyan-400 font-bold px-1.5 py-0.5 bg-cyan-950 border border-cyan-800 rounded">
                {phaseDiffDeg > 0 ? `+${phaseDiffDeg}` : phaseDiffDeg}°
              </span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              step="5"
              value={phaseDiffDeg}
              onChange={(e) => setPhaseDiffDeg(Number(e.target.value))}
              aria-label={t.phaseDiffLabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>-180° (Lag)</span>
              <span>0°</span>
              <span>+180° (Lead)</span>
            </div>
          </div>

          {/* Amplitude A Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-cyan-300 font-semibold">{t.ampALabel}</span>
              <span className="text-cyan-400 font-bold px-1.5 py-0.5 bg-cyan-950 border border-cyan-800 rounded">
                {ampA} V
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="120"
              step="5"
              value={ampA}
              onChange={(e) => setAmpA(Number(e.target.value))}
              aria-label={t.ampALabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>30 V</span>
              <span>100 V</span>
              <span>120 V</span>
            </div>
          </div>

          {/* Amplitude B Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-amber-300 font-semibold">{t.ampBLabel}</span>
              <span className="text-amber-400 font-bold px-1.5 py-0.5 bg-amber-950 border border-amber-800 rounded">
                {ampB} V
              </span>
            </div>
            <input
              type="range"
              min="30"
              max="120"
              step="5"
              value={ampB}
              onChange={(e) => setAmpB(Number(e.target.value))}
              aria-label={t.ampBLabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>30 V</span>
              <span>75 V</span>
              <span>120 V</span>
            </div>
          </div>

          {/* Frequency Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300 font-semibold">{t.freqLabel}</span>
              <span className="text-purple-400 font-bold px-1.5 py-0.5 bg-purple-950 border border-purple-800 rounded">
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
              aria-label={t.freqLabel}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>10 Hz</span>
              <span>50 Hz</span>
              <span>100 Hz</span>
            </div>
          </div>
        </div>

        {/* Live Mathematical Metric Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">{t.relationshipStatus}</span>
            <span className="text-xs font-bold font-mono text-cyan-300 mt-1 block">
              {relationshipText}
            </span>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">{t.timeDifference}</span>
            <span className="text-sm font-bold font-mono text-amber-300 mt-1 block">
              Δt = {timeDiffMs.toFixed(2)} ms
            </span>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block">{t.timePeriod}</span>
            <span className="text-sm font-bold font-mono text-purple-300 mt-1 block">
              T = {timePeriodMs.toFixed(1)} ms (f = {frequency} Hz)
            </span>
          </div>
        </div>

        {/* Interactive Dual-View SVG Diagram */}
        <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 overflow-x-auto shadow-inner">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-auto max-w-full select-none"
            aria-label="Phasor and Dual Waveform Phase Simulation Graph"
            role="img"
          >
            <defs>
              <marker id="arrowCyanPhase" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#22d3ee" />
              </marker>
              <marker id="arrowAmberPhase" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
              </marker>
            </defs>

            {/* Left Pane: Phasor Diagram */}
            <g id="phasor-plane">
              <text x={circleCenterX} y="22" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                {t.phasorDomain}
              </text>

              {/* Reference Circle A & B */}
              <circle cx={circleCenterX} cy={circleCenterY} r={radiusA} fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx={circleCenterX} cy={circleCenterY} r={radiusB} fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

              {/* Polar Cross Axes */}
              <line x1={circleCenterX - 105} y1={circleCenterY} x2={circleCenterX + 105} y2={circleCenterY} stroke="#334155" strokeWidth="1.2" />
              <line x1={circleCenterX} y1={circleCenterY + 105} x2={circleCenterX} y2={circleCenterY - 105} stroke="#334155" strokeWidth="1.2" />

              <text x={circleCenterX + 106} y={circleCenterY + 12} fill="#64748b" fontSize="8.5" fontFamily="monospace">
                0° Ref
              </text>
              <text x={circleCenterX} y={circleCenterY - 108} fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="monospace">
                90°
              </text>

              {/* Phasor B (Reference vector in Amber) */}
              <line x1={circleCenterX} y1={circleCenterY} x2={tipBX} y2={tipBY} stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#arrowAmberPhase)" />
              <circle cx={tipBX} cy={tipBY} r="4" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
              <text x={tipBX + 8} y={tipBY + 4} fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">
                VB
              </text>

              {/* Phasor A (Phase shifted vector in Cyan) */}
              <line x1={circleCenterX} y1={circleCenterY} x2={tipAX} y2={tipAY} stroke="#22d3ee" strokeWidth="2.5" markerEnd="url(#arrowCyanPhase)" />
              <circle cx={tipAX} cy={tipAY} r="4" fill="#22d3ee" stroke="#ffffff" strokeWidth="1.5" />
              <text x={tipAX + 8} y={tipAY - 4} fill="#22d3ee" fontSize="10" fontFamily="monospace" fontWeight="bold">
                VA
              </text>

              {/* Phase difference arc between VA and VB */}
              {phaseDiffDeg !== 0 && (
                <text x={circleCenterX} y={circleCenterY + 80} fill="#c084fc" fontSize="9.5" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                  ∠(VA, VB) = {phaseDiffDeg > 0 ? `+${phaseDiffDeg}` : phaseDiffDeg}°
                </text>
              )}
            </g>

            {/* Projection Connection Lines to Waveforms */}
            <line x1={tipAX} y1={tipAY} x2={markerX} y2={markerYA} stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1={tipBX} y1={tipBY} x2={markerX} y2={markerYB} stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

            {/* Right Pane: Waveform Diagram */}
            <g id="waveform-plane">
              <text x={(waveStartX + waveEndX) / 2} y="22" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
                {t.waveformDomain}
              </text>

              {/* Center Line and Y Axis */}
              <line x1={waveStartX} y1={waveCenterY} x2={waveEndX} y2={waveCenterY} stroke="#475569" strokeWidth="1.5" />
              <line x1={waveStartX} y1={waveCenterY - 100} x2={waveStartX} y2={waveCenterY + 100} stroke="#475569" strokeWidth="1.5" />

              {/* Degree markers */}
              <text x={waveStartX} y={waveCenterY + 16} fill="#64748b" fontSize="9.5" fontFamily="monospace">0°</text>
              <text x={waveStartX + 0.25 * waveWidth} y={waveCenterY + 16} fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="monospace">90°</text>
              <text x={waveStartX + 0.5 * waveWidth} y={waveCenterY + 16} fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="monospace">180°</text>
              <text x={waveStartX + 0.75 * waveWidth} y={waveCenterY + 16} fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="monospace">270°</text>
              <text x={waveEndX} y={waveCenterY + 16} fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="monospace">360°</text>

              {/* Waveform B Curve (Amber) */}
              <path d={wavePathB} fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 2" />

              {/* Waveform A Curve (Cyan) */}
              <path d={wavePathA} fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />

              {/* Instantaneous Marker Line */}
              <line x1={markerX} y1={waveCenterY - 95} x2={markerX} y2={waveCenterY + 95} stroke="#f43f5e" strokeWidth="1.2" strokeDasharray="2 2" />
              <circle cx={markerX} cy={markerYA} r="5" fill="#22d3ee" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx={markerX} cy={markerYB} r="4.5" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />

              {/* Legends */}
              <g transform={`translate(${waveStartX + 10}, ${svgHeight - 25})`}>
                <rect x="0" y="0" width="12" height="4" fill="#22d3ee" rx="1" />
                <text x="18" y="5" fill="#22d3ee" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                  vA(t) = {instValA >= 0 ? `+${instValA.toFixed(1)}` : instValA.toFixed(1)}V (VmA={ampA}V)
                </text>

                <rect x="220" y="0" width="12" height="4" fill="#fbbf24" rx="1" />
                <text x="238" y="5" fill="#fbbf24" fontSize="9.5" fontFamily="monospace" fontWeight="bold">
                  vB(t) = {instValB >= 0 ? `+${instValB.toFixed(1)}` : instValB.toFixed(1)}V (VmB={ampB}V, Ref)
                </text>
              </g>
            </g>
          </svg>
        </div>

        {/* Bottom Interactive Playback & Angle Controls (hidden in print) */}
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
              {t.angleScrubber}:
            </span>
            <input
              type="range"
              min="0"
              max="360"
              step="5"
              value={currentBaseAngleDeg}
              onChange={(e) => {
                setIsPlaying(false);
                setCurrentBaseAngleDeg(Number(e.target.value));
              }}
              aria-label={t.angleScrubber}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            />
            <span className="text-xs font-mono text-cyan-300 font-bold min-w-[45px] text-right">
              {currentBaseAngleDeg.toFixed(0)}°
            </span>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
