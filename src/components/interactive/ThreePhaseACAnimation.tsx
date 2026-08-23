import React, { useState, useEffect, useId } from 'react';
import { RotateCcw, Activity, Zap, Compass, Play, Pause, Layers, HelpCircle, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ThreePhaseACAnimationProps {
  currentLanguage: Language;
}

type PhaseSequence = 'ABC' | 'ACB';
type ConnectionMode = 'star' | 'delta';
type PowerLoadType = 'inductive' | 'capacitive' | 'resistive';

const TRANSLATIONS = {
  en: {
    title: 'Three-Phase AC Systems & Power Simulator',
    subtitle: 'Explore balanced 3-phase AC waveforms with 120° electrical displacement. Test ABC / ACB phase sequence rotation, compare Star (Wye) and Delta (Mesh) relationships, and calculate total 3-phase Active, Reactive, and Apparent Power.',
    voltageLabel: 'Phase Voltage V_ph (V)',
    freqLabel: 'Frequency f (Hz)',
    seqLabel: 'Phase Sequence',
    seqAbc: 'ABC Sequence (Standard / Positive)',
    seqAcb: 'ACB Sequence (Reverse / Negative)',
    connLabel: 'Connection Topology Preview',
    starBtn: 'Star (Wye, Y) System',
    deltaBtn: 'Delta (Mesh, Δ) System',
    reset: 'Reset Defaults',

    // Waveform & Phasor Legend
    waveformTitle: 'Balanced 3-Phase Sinusoidal Waveforms (120° Apart)',
    phasorWheelTitle: '120° Phasor Rotor & Spatial Displacement',
    phaseA: 'Phase A (Red)',
    phaseB: 'Phase B (Yellow)',
    phaseC: 'Phase C (Blue)',

    // System Metrics
    vphMetric: 'Phase Voltage V_ph',
    vlMetric: 'Line-to-Line Voltage V_L',
    displacementMetric: 'Phase Displacement',
    angFreqMetric: 'Angular Velocity (ω)',

    // Power Calculator Section
    calcTitle: 'Balanced Three-Phase Power Calculator',
    calcVlLabel: 'Line Voltage V_L (V)',
    calcIlLabel: 'Line Current I_L (A)',
    calcPfLabel: 'Load Power Factor (cos φ)',
    loadTypeLabel: 'Load Type',
    activePowerP: 'Total 3-Phase Active Power (P)',
    reactivePowerQ: 'Total 3-Phase Reactive Power (Q)',
    apparentPowerS: 'Total 3-Phase Apparent Power (S)',
    phaseVCalc: 'Phase Voltage V_ph',
    phaseICalc: 'Phase Current I_ph',

    // Physics Explanation
    physicsTitle: 'Why 3-Phase Transmission Dominates the World',
    physicsText: 'A balanced 3-phase system delivers continuous, instantaneous constant power (no 100Hz/120Hz power pulsations like single-phase), produces a smooth rotating magnetic field in AC induction motors without starter switches, requires 25% less conductor copper weight than equivalent single-phase transmission, and provides dual voltage levels (e.g. 230V phase-to-neutral / 400V line-to-line in Star).',

    formulaTitle: 'Key Three-Phase AC Equations',
    formulaText: 'Star: V_L = √3 · V_ph, I_L = I_ph  |  Delta: V_L = V_ph, I_L = √3 · I_ph  |  P = √3 · V_L · I_L · cos φ = 3 · V_ph · I_ph · cos φ  |  Q = √3 · V_L · I_L · sin φ  |  S = √3 · V_L · I_L'
  },
  hi: {
    title: 'थ्री-फेज एसी सिस्टम एवं पावर सिम्युलेटर',
    subtitle: '120° विद्युतीय विस्थापन के साथ संतुलित 3-फेज एसी तरंगरूपों का अन्वेषण करें। ABC/ACB फेज अनुक्रम का परीक्षण करें, स्टार (Y) और डेल्टा (Δ) संबंधों की तुलना करें और कुल 3-फेज सक्रिय, प्रतिक्रियाशील एवं आभासी शक्ति की गणना करें।',
    voltageLabel: 'फेज वोल्टेज V_ph (V)',
    freqLabel: 'आवृत्ति f (Hz)',
    seqLabel: 'फेज अनुक्रम (Phase Sequence)',
    seqAbc: 'ABC अनुक्रम (मानक / धनात्मक)',
    seqAcb: 'ACB अनुक्रम (विपरीत / ऋणात्मक)',
    connLabel: 'कनेक्शन टोपोलॉजी पूर्वावलोकन',
    starBtn: 'स्टार (Wye, Y) प्रणाली',
    deltaBtn: 'डेल्टा (Mesh, Δ) प्रणाली',
    reset: 'डिफ़ॉल्ट रीसेट',

    // Waveform & Phasor Legend
    waveformTitle: 'संतुलित 3-फेज साइनसॉइडल तरंगरूप (120° विस्थापन)',
    phasorWheelTitle: '120° फेजर रोटर एवं स्थानिक विस्थापन',
    phaseA: 'फेज A (लाल)',
    phaseB: 'फेज B (पीला)',
    phaseC: 'फेज C (नीला)',

    // System Metrics
    vphMetric: 'फेज वोल्टेज V_ph',
    vlMetric: 'लाइन-टू-लाइन वोल्टेज V_L',
    displacementMetric: 'फेज विस्थापन',
    angFreqMetric: 'कोणीय वेग (ω)',

    // Power Calculator Section
    calcTitle: 'संतुलित थ्री-फेज शक्ति कैलकुलेटर',
    calcVlLabel: 'लाइन वोल्टेज V_L (V)',
    calcIlLabel: 'लाइन धारा I_L (A)',
    calcPfLabel: 'लोड पावर फैक्टर (cos φ)',
    loadTypeLabel: 'लोड प्रकार',
    activePowerP: 'कुल 3-फेज सक्रिय शक्ति (P)',
    reactivePowerQ: 'कुल 3-फेज प्रतिक्रियाशील शक्ति (Q)',
    apparentPowerS: 'कुल 3-फेज आभासी शक्ति (S)',
    phaseVCalc: 'फेज वोल्टेज V_ph',
    phaseICalc: 'फेज धारा I_ph',

    // Physics Explanation
    physicsTitle: 'थ्री-फेज सिस्टम क्यों सर्वश्रेष्ठ है?',
    physicsText: 'संतुलित 3-फेज सिस्टम निरंतर स्थिर शक्ति प्रदान करता है (सिंगल-फेज की तरह शून्य नहीं होती), मोटरों में स्वतः घूमने वाला चुंबकीय क्षेत्र (RMF) बनाता है, समान शक्ति पारेषण के लिए 25% कम तांबे की आवश्यकता होती है और स्टार में दोहरे वोल्टेज (230V/400V) उपलब्ध कराता है।',

    formulaTitle: 'थ्री-फेज एसी के प्रमुख सूत्र',
    formulaText: 'स्टार: V_L = √3 · V_ph, I_L = I_ph  |  डेल्टा: V_L = V_ph, I_L = √3 · I_ph  |  P = √3 · V_L · I_L · cos φ  |  Q = √3 · V_L · I_L · sin φ  |  S = √3 · V_L · I_L'
  },
  bn: {
    title: 'থ্রি-ফেজ এসি সিস্টেম ও পাওয়ার সিমুলেটর',
    subtitle: '১২০° বৈদ্যুতিক ব্যবধানে বিন্যস্ত ভারসাম্যপূর্ণ ৩-ফেজ সাইন তরঙ্গের গতিপ্রকৃতি বিশ্লেষণ করুন। ABC / ACB ফেজ সিকোয়েন্স পরীক্ষা করুন, স্টার (Y) ও ডেল্টা (Δ) তুলনা করুন এবং মোট ৩-ফেজ অ্যাক্টিভ, রিঅ্যাক্টিভ ও অ্যাপারেন্ট ক্ষমতা নির্ণয় করুন।',
    voltageLabel: 'ফেজ ভোল্টেজ V_ph (V)',
    freqLabel: 'কম্পাঙ্ক f (Hz)',
    seqLabel: 'ফেজ সিকোয়েন্স',
    seqAbc: 'ABC সিকোয়েন্স (মানক / ধনাত্মক)',
    seqAcb: 'ACB সিকোয়েন্স (বিপরীত / ঋণাত্মক)',
    connLabel: 'সংযোগ টপোলজি প্রিভিউ',
    starBtn: 'স্টার (Wye, Y) সিস্টেম',
    deltaBtn: 'ডেল্টা (Mesh, Δ) সিস্টেম',
    reset: 'ডিফল্ট রিসেট',

    // Waveform & Phasor Legend
    waveformTitle: 'ভারসাম্যপূর্ণ ৩-ফেজ সাইনুসয়েডাল ওয়েভফর্ম (১২০° ব্যবধান)',
    phasorWheelTitle: '১২০° ফেজার রোটর ও স্থানিক অবস্থান',
    phaseA: 'ফেজ A (লাল)',
    phaseB: 'ফেজ B (হলুদ)',
    phaseC: 'ফেজ C (নীল)',

    // System Metrics
    vphMetric: 'ফেজ ভোল্টেজ V_ph',
    vlMetric: 'লাইন ভোল্টেজ V_L',
    displacementMetric: 'ফেজ ব্যবধান',
    angFreqMetric: 'কৌণিক বেগ (ω)',

    // Power Calculator Section
    calcTitle: 'ভারসাম্যপূর্ণ থ্রি-ফেজ পাওয়ার ক্যালকুলেটর',
    calcVlLabel: 'লাইন ভোল্টেজ V_L (V)',
    calcIlLabel: 'লাইন কারেন্ট I_L (A)',
    calcPfLabel: 'লোড পাওয়ার ফ্যাক্টর (cos φ)',
    loadTypeLabel: 'লোডের ধরণ',
    activePowerP: 'মোট ৩-ফেজ অ্যাক্টিভ ক্ষমতা (P)',
    reactivePowerQ: 'মোট ৩-ফেজ রিঅ্যাক্টিভ ক্ষমতা (Q)',
    apparentPowerS: 'মোট ৩-ফেজ অ্যাপারেন্ট ক্ষমতা (S)',
    phaseVCalc: 'ফেজ ভোল্টেজ V_ph',
    phaseICalc: 'ফেজ কারেন্ট I_ph',

    // Physics Explanation
    physicsTitle: 'কেন ৩-ফেজ এসি সিস্টেম বিশ্বজুড়ে ব্যবহৃত হয়?',
    physicsText: 'ভারসাম্যপূর্ণ ৩-ফেজ সিস্টেম সবসময় নিরবচ্ছিন্ন স্থির শক্তি প্রদান করে, ইন্ডাকশন মোটরে স্বয়ংক্রিয় ঘূর্ণায়মান চৌম্বক ক্ষেত্র (RMF) সৃষ্টি করে, একক ফেজের চেয়ে ২৫% কম তামার তার প্রয়োজন হয় এবং স্টারে দুটি ভোল্টেজ লেভেল (২৩০V ফেজ / ৪০০V লাইন) প্রদান করে।',

    formulaTitle: '৩-ফেজ এসির মূল সূত্রাবলী',
    formulaText: 'স্টার: V_L = √3 · V_ph, I_L = I_ph  |  ডেল্টা: V_L = V_ph, I_L = √3 · I_ph  |  P = √3 · V_L · I_L · cos φ  |  Q = √3 · V_L · I_L · sin φ  |  S = √3 · V_L · I_L'
  }
};

export const ThreePhaseACAnimation: React.FC<ThreePhaseACAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage];
  const prefersReducedMotion = useReducedMotion();

  // Primary Control States
  const [phaseVoltage, setPhaseVoltage] = useState<number>(230); // Volts RMS
  const [frequency, setFrequency] = useState<number>(50); // Hz
  const [phaseSequence, setPhaseSequence] = useState<PhaseSequence>('ABC');
  const [connectionMode, setConnectionMode] = useState<ConnectionMode>('star');
  const [isPlaying, setIsPlaying] = useState<boolean>(!prefersReducedMotion);
  const [timeOffset, setTimeOffset] = useState<number>(0);

  // Power Calculator States
  const [calcVl, setCalcVl] = useState<number>(400); // V Line
  const [calcIl, setCalcIl] = useState<number>(25);  // A Line
  const [calcPf, setCalcPf] = useState<number>(0.85); // cos phi
  const [calcLoadType, setCalcLoadType] = useState<PowerLoadType>('inductive');

  const vphInputId = useId();
  const freqInputId = useId();
  const calcVlInputId = useId();
  const calcIlInputId = useId();
  const calcPfInputId = useId();

  // Animation Loop
  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return;
    let animationFrameId: number;
    const animate = () => {
      setTimeOffset((prev) => (prev + 0.05) % (2 * Math.PI));
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, prefersReducedMotion]);

  // Derived Theoretical Metrics
  const sqrt3 = Math.sqrt(3);
  const lineVoltageStar = phaseVoltage * sqrt3; // VL = √3 Vph
  const omega = 2 * Math.PI * frequency;

  // Power Calculations
  const totalS_VA = sqrt3 * calcVl * calcIl; // VA
  const totalS_kVA = totalS_VA / 1000;
  const totalP_W = totalS_VA * calcPf; // W
  const totalP_kW = totalP_W / 1000;
  const sinPhi = Math.sqrt(Math.max(0, 1 - calcPf * calcPf));
  const totalQ_VAR_mag = totalS_VA * sinPhi;
  const totalQ_kVAR = (calcLoadType === 'capacitive' ? -totalQ_VAR_mag : calcLoadType === 'inductive' ? totalQ_VAR_mag : 0) / 1000;

  // Phase voltages and currents under active connection mode
  const calcVph = connectionMode === 'star' ? calcVl / sqrt3 : calcVl;
  const calcIph = connectionMode === 'star' ? calcIl : calcIl / sqrt3;

  // Reset Handler
  const handleReset = () => {
    setPhaseVoltage(230);
    setFrequency(50);
    setPhaseSequence('ABC');
    setConnectionMode('star');
    setCalcVl(400);
    setCalcIl(25);
    setCalcPf(0.85);
    setCalcLoadType('inductive');
  };

  // Waveform SVG Path Generator
  const width = 440;
  const height = 180;
  const centerY = height / 2;
  const amplitude = 65;

  const generateWaveformPath = (phaseShiftDeg: number) => {
    const shiftRad = (phaseShiftDeg * Math.PI) / 180;
    const points: string[] = [];
    const step = 4;
    for (let x = 0; x <= width; x += step) {
      // 2 full cycles mapped across width
      const angle = (x / width) * 4 * Math.PI + timeOffset + shiftRad;
      const y = centerY - amplitude * Math.sin(angle);
      points.push(`${x === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    return points.join(' ');
  };

  // Phase Angles based on sequence
  // ABC: A=0, B=-120, C=-240 (+120)
  // ACB: A=0, B=+120, C=-120
  const angleA = 0;
  const angleB = phaseSequence === 'ABC' ? -120 : 120;
  const angleC = phaseSequence === 'ABC' ? 120 : -120;

  const pathA = generateWaveformPath(angleA);
  const pathB = generateWaveformPath(angleB);
  const pathC = generateWaveformPath(angleC);

  // Phasor Wheel Angles (with live animation rotation)
  const rotorAngleRad = timeOffset;
  const radA = -rotorAngleRad;
  const radB = -rotorAngleRad + (angleB * Math.PI) / 180;
  const radC = -rotorAngleRad + (angleC * Math.PI) / 180;

  const phasorRadius = 60;
  const phasorCenterX = 100;
  const phasorCenterY = 100;

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={t.formulaTitle}
      calloutText={t.formulaText}
    >
      {/* Interactive Controls Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 mb-6 text-slate-100 shadow-md">
        <div className="flex flex-wrap justify-between items-center gap-2 mb-4 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            <h3 className="font-semibold text-cyan-200 text-sm tracking-wide uppercase">
              {currentLanguage === 'en' ? 'Three-Phase Generator & Waveform Parameters' : currentLanguage === 'hi' ? 'थ्री-फेज जनरेटर एवं वेवफॉर्म पैरामीटर' : 'থ্রি-ফেজ জেনারেটর ও ওয়েভফর্ম প্যারামিটার'}
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded text-xs font-semibold border border-slate-700 transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? (currentLanguage === 'en' ? 'Pause Waveforms' : currentLanguage === 'hi' ? 'रोकें' : 'পজ') : (currentLanguage === 'en' ? 'Play Waveforms' : currentLanguage === 'hi' ? 'चलाएँ' : 'প্লে')}
          </button>
        </div>

        {/* Phase Sequence & Connection Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              {t.seqLabel}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPhaseSequence('ABC')}
                aria-pressed={phaseSequence === 'ABC'}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                  phaseSequence === 'ABC'
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {t.seqAbc}
              </button>
              <button
                type="button"
                onClick={() => setPhaseSequence('ACB')}
                aria-pressed={phaseSequence === 'ACB'}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                  phaseSequence === 'ACB'
                    ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-sm'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {t.seqAcb}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              {t.connLabel}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setConnectionMode('star')}
                aria-pressed={connectionMode === 'star'}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                  connectionMode === 'star'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-sm'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {t.starBtn} (V_L = √3 V_ph)
              </button>
              <button
                type="button"
                onClick={() => setConnectionMode('delta')}
                aria-pressed={connectionMode === 'delta'}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                  connectionMode === 'delta'
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-sm'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {t.deltaBtn} (I_L = √3 I_ph)
              </button>
            </div>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={vphInputId} className="text-xs font-semibold text-slate-300">
                {t.voltageLabel}
              </label>
              <span className="text-xs font-mono font-bold text-cyan-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                {phaseVoltage} V (V_L = {lineVoltageStar.toFixed(1)} V)
              </span>
            </div>
            <input
              id={vphInputId}
              type="range"
              min="100"
              max="400"
              step="5"
              value={phaseVoltage}
              onChange={(e) => setPhaseVoltage(parseFloat(e.target.value))}
              aria-label={t.voltageLabel}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={freqInputId} className="text-xs font-semibold text-slate-300">
                {t.freqLabel}
              </label>
              <span className="text-xs font-mono font-bold text-amber-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                {frequency} Hz (ω = {omega.toFixed(1)} rad/s)
              </span>
            </div>
            <input
              id={freqInputId}
              type="range"
              min="20"
              max="100"
              step="5"
              value={frequency}
              onChange={(e) => setFrequency(parseFloat(e.target.value))}
              aria-label={t.freqLabel}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Metrics Summary Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            {t.vphMetric}
          </div>
          <div className="text-base font-mono font-bold text-cyan-300">{phaseVoltage} V rms</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            {t.vlMetric} ({connectionMode === 'star' ? 'Star √3' : 'Delta ='})
          </div>
          <div className="text-base font-mono font-bold text-amber-300">
            {connectionMode === 'star' ? `${lineVoltageStar.toFixed(1)} V` : `${phaseVoltage} V`}
          </div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            {t.displacementMetric}
          </div>
          <div className="text-base font-mono font-bold text-emerald-300">120° (2π/3 rad)</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
          <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            Phase Sequence
          </div>
          <div className="text-base font-mono font-bold text-purple-300">{phaseSequence}</div>
        </div>
      </div>

      {/* Visual Diagrams: 3-Phase Waveforms & Phasor Rotor */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        {/* Visual 1: Waveforms (Span 2 cols on lg) */}
        <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap justify-between items-center gap-2 mb-2 pb-2 border-b border-slate-800">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                {t.waveformTitle}
              </h4>
              <div className="flex gap-3 text-xs font-mono">
                <span className="flex items-center gap-1 text-rose-400 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span> V_A (0°)
                </span>
                <span className="flex items-center gap-1 text-amber-400 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span> V_B ({angleB}°)
                </span>
                <span className="flex items-center gap-1 text-blue-400 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span> V_C ({angleC}°)
                </span>
              </div>
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-44 my-1" aria-label="Three-Phase Waveform Graph">
              {/* Zero Reference Line */}
              <line x1="0" y1={centerY} x2={width} y2={centerY} stroke="#334155" strokeWidth="1.5" strokeDasharray="4,3" />
              <text x={width - 5} y={centerY - 6} textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">0 V (Neutral)</text>

              {/* Waveform Paths */}
              <path d={pathA} fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" />
              <path d={pathB} fill="none" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
              <path d={pathC} fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="text-[11px] font-mono text-slate-400 text-center">
            v_a(t) + v_b(t) + v_c(t) = 0 V (Instantaneous sum at any moment in a balanced system is always ZERO)
          </div>
        </div>

        {/* Visual 2: Phasor Wheel */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-between">
          <div className="w-full pb-2 border-b border-slate-800">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider text-center">
              {t.phasorWheelTitle}
            </h4>
          </div>

          <svg viewBox="0 0 200 200" className="w-44 h-44 my-2" aria-label="120 Degree Phasor Diagram">
            <defs>
              <marker id="ph-arr-r" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f43f5e" />
              </marker>
              <marker id="ph-arr-y" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#facc15" />
              </marker>
              <marker id="ph-arr-b" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#3b82f6" />
              </marker>
            </defs>

            {/* Circle boundary */}
            <circle cx={phasorCenterX} cy={phasorCenterY} r={phasorRadius} fill="none" stroke="#1e293b" strokeDasharray="3,3" />
            
            {/* Center Origin Dot */}
            <circle cx={phasorCenterX} cy={phasorCenterY} r="3" fill="#94a3b8" />

            {/* Phase A Vector (Red) */}
            <line
              x1={phasorCenterX}
              y1={phasorCenterY}
              x2={phasorCenterX + phasorRadius * Math.cos(radA)}
              y2={phasorCenterY + phasorRadius * Math.sin(radA)}
              stroke="#f43f5e"
              strokeWidth="3"
              markerEnd="url(#ph-arr-r)"
            />
            <text
              x={phasorCenterX + (phasorRadius + 14) * Math.cos(radA)}
              y={phasorCenterY + (phasorRadius + 14) * Math.sin(radA) + 4}
              textAnchor="middle"
              fill="#f43f5e"
              fontSize="10"
              fontWeight="bold"
              fontFamily="monospace"
            >
              V_A
            </text>

            {/* Phase B Vector (Yellow) */}
            <line
              x1={phasorCenterX}
              y1={phasorCenterY}
              x2={phasorCenterX + phasorRadius * Math.cos(radB)}
              y2={phasorCenterY + phasorRadius * Math.sin(radB)}
              stroke="#facc15"
              strokeWidth="3"
              markerEnd="url(#ph-arr-y)"
            />
            <text
              x={phasorCenterX + (phasorRadius + 14) * Math.cos(radB)}
              y={phasorCenterY + (phasorRadius + 14) * Math.sin(radB) + 4}
              textAnchor="middle"
              fill="#facc15"
              fontSize="10"
              fontWeight="bold"
              fontFamily="monospace"
            >
              V_B
            </text>

            {/* Phase C Vector (Blue) */}
            <line
              x1={phasorCenterX}
              y1={phasorCenterY}
              x2={phasorCenterX + phasorRadius * Math.cos(radC)}
              y2={phasorCenterY + phasorRadius * Math.sin(radC)}
              stroke="#3b82f6"
              strokeWidth="3"
              markerEnd="url(#ph-arr-b)"
            />
            <text
              x={phasorCenterX + (phasorRadius + 14) * Math.cos(radC)}
              y={phasorCenterY + (phasorRadius + 14) * Math.sin(radC) + 4}
              textAnchor="middle"
              fill="#3b82f6"
              fontSize="10"
              fontWeight="bold"
              fontFamily="monospace"
            >
              V_C
            </text>
          </svg>

          <div className="text-[10px] font-mono text-cyan-300 text-center">
            {phaseSequence === 'ABC' ? 'Clockwise rotation: A → B → C' : 'Reverse rotation: A → C → B'}
          </div>
        </div>
      </div>

      {/* Balanced Three-Phase Power Calculator */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
          <Zap className="w-5 h-5 text-amber-400" />
          <h3 className="font-semibold text-amber-200 text-sm tracking-wide uppercase">
            {t.calcTitle}
          </h3>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-5">
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={calcVlInputId} className="text-xs font-semibold text-slate-300">
                {t.calcVlLabel}
              </label>
              <span className="text-xs font-mono font-bold text-amber-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                {calcVl} V
              </span>
            </div>
            <input
              id={calcVlInputId}
              type="range"
              min="200"
              max="690"
              step="10"
              value={calcVl}
              onChange={(e) => setCalcVl(parseFloat(e.target.value))}
              aria-label={t.calcVlLabel}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={calcIlInputId} className="text-xs font-semibold text-slate-300">
                {t.calcIlLabel}
              </label>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                {calcIl} A
              </span>
            </div>
            <input
              id={calcIlInputId}
              type="range"
              min="1"
              max="100"
              step="1"
              value={calcIl}
              onChange={(e) => setCalcIl(parseFloat(e.target.value))}
              aria-label={t.calcIlLabel}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={calcPfInputId} className="text-xs font-semibold text-slate-300">
                {t.calcPfLabel}
              </label>
              <span className="text-xs font-mono font-bold text-cyan-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                {calcPf.toFixed(2)}
              </span>
            </div>
            <input
              id={calcPfInputId}
              type="range"
              min="0.10"
              max="1.00"
              step="0.02"
              value={calcPf}
              onChange={(e) => setCalcPf(parseFloat(e.target.value))}
              aria-label={t.calcPfLabel}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {t.loadTypeLabel}
            </label>
            <div className="grid grid-cols-3 gap-1">
              <button
                type="button"
                onClick={() => setCalcLoadType('inductive')}
                aria-pressed={calcLoadType === 'inductive'}
                className={`py-1.5 px-1 text-[11px] font-bold rounded border ${
                  calcLoadType === 'inductive' ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                Lag (Ind)
              </button>
              <button
                type="button"
                onClick={() => setCalcLoadType('resistive')}
                aria-pressed={calcLoadType === 'resistive'}
                className={`py-1.5 px-1 text-[11px] font-bold rounded border ${
                  calcLoadType === 'resistive' ? 'bg-amber-500/20 border-amber-400 text-amber-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                Unity
              </button>
              <button
                type="button"
                onClick={() => setCalcLoadType('capacitive')}
                aria-pressed={calcLoadType === 'capacitive'}
                className={`py-1.5 px-1 text-[11px] font-bold rounded border ${
                  calcLoadType === 'capacitive' ? 'bg-purple-500/20 border-purple-400 text-purple-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                Lead (Cap)
              </button>
            </div>
          </div>
        </div>

        {/* Calculated Results Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="bg-slate-950 border border-emerald-500/30 p-3 rounded-lg text-center">
            <div className="text-[10px] text-emerald-400 uppercase font-semibold">{t.activePowerP}</div>
            <div className="text-base font-extrabold font-mono text-emerald-300 mt-1">{totalP_kW.toFixed(2)} kW</div>
            <div className="text-[10px] font-mono text-slate-400">P = √3 V_L I_L cosφ</div>
          </div>

          <div className="bg-slate-950 border border-cyan-500/30 p-3 rounded-lg text-center">
            <div className="text-[10px] text-cyan-400 uppercase font-semibold">{t.reactivePowerQ}</div>
            <div className="text-base font-extrabold font-mono text-cyan-300 mt-1">{totalQ_kVAR.toFixed(2)} kVAR</div>
            <div className="text-[10px] font-mono text-slate-400">Q = √3 V_L I_L sinφ</div>
          </div>

          <div className="bg-slate-950 border border-amber-500/30 p-3 rounded-lg text-center">
            <div className="text-[10px] text-amber-400 uppercase font-semibold">{t.apparentPowerS}</div>
            <div className="text-base font-extrabold font-mono text-amber-300 mt-1">{totalS_kVA.toFixed(2)} kVA</div>
            <div className="text-[10px] font-mono text-slate-400">S = √3 V_L I_L</div>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg text-center">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">{t.phaseVCalc} ({connectionMode})</div>
            <div className="text-base font-extrabold font-mono text-indigo-300 mt-1">{calcVph.toFixed(1)} V</div>
            <div className="text-[10px] font-mono text-slate-400">{connectionMode === 'star' ? 'V_ph = V_L / √3' : 'V_ph = V_L'}</div>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg text-center">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">{t.phaseICalc} ({connectionMode})</div>
            <div className="text-base font-extrabold font-mono text-rose-300 mt-1">{calcIph.toFixed(1)} A</div>
            <div className="text-[10px] font-mono text-slate-400">{connectionMode === 'star' ? 'I_ph = I_L' : 'I_ph = I_L / √3'}</div>
          </div>
        </div>
      </div>

      {/* Physics Callout Box */}
      <div className="bg-slate-900/80 border-l-4 border-amber-500 rounded-r-xl p-4 text-slate-200">
        <div className="flex items-center gap-2 mb-1.5 font-bold text-amber-300 text-sm">
          <Zap className="w-4 h-4 text-amber-400" />
          {t.physicsTitle}
        </div>
        <p className="text-xs leading-relaxed text-slate-300">
          {t.physicsText}
        </p>
      </div>
    </InteractiveSimulationCard>
  );
};
