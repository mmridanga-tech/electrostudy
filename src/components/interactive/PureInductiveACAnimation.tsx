import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RotateCcw, Play, Pause, Activity, Zap, Compass, ShieldCheck, ArrowRight, Magnet } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface PureInductiveACAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Pure Inductive AC Circuit Simulator',
    subtitle: 'Explore inductive reactance XL = 2πfL, the exact 90° lagging current relationship, zero average active power (P = 0), and reactive magnetic energy storage and return.',
    vRmsLabel: 'RMS Voltage (Vrms)',
    indLabel: 'Inductance (L)',
    freqLabel: 'Frequency (f)',
    play: 'Play Animation',
    pause: 'Pause Animation',
    reset: 'Reset Defaults',
    scrubber: 'Rotor Angle θ = ωt',
    vrmsMetric: 'RMS Voltage Vrms',
    irmsMetric: 'RMS Current Irms',
    reactanceMetric: 'Inductive Reactance XL',
    reactivePowerMetric: 'Reactive Power Q (+VAR)',
    activePowerMetric: 'Active Power P (W)',
    powerFactor: 'Power Factor (cos φ)',
    phaseAngle: 'Phase Angle (φ)',
    lagStatus: 'Current Lags Voltage by 90° (φ = -90°)',
    schematicTitle: 'Circuit Schematic (AC Source & Pure Inductor)',
    waveformsTitle: 'Live Oscilloscope: v(t), i(t) & Instantaneous Power p(t)',
    freqResponseTitle: 'Frequency Response: XL = 2πfL (Linear Proportionality)',
    legendVoltage: 'Voltage v(t) = Vm · sin(ωt)',
    legendCurrent: 'Current i(t) = Im · sin(ωt - 90°)',
    legendPower: 'Power p(t) = v(t) · i(t) [Avg = 0]',
    legendEnergy: 'Stored Energy W(t) = ½ L i(t)²',
    energyFlowTitle: 'Magnetic Energy Dynamics',
    energyStorageNote: 'Energy Storage & Return: During quarters where v(t) and i(t) have the same sign (p > 0), energy is transferred from the source to build the magnetic field. When signs oppose (p < 0), the magnetic field collapses and returns 100% of the energy back to the AC source.',
    pureLagNote: 'Exact 90° Phase Lag: By Faraday/Lenz’s law, induced back-EMF opposes current change: v(t) = L (di/dt). Integrating gives i(t) = -Im cos(ωt) = Im sin(ωt - 90°). Current peaks exactly a quarter-cycle (T/4) after voltage.',
    zeroPowerNote: 'Zero Active Power (P = 0): Because the positive power loop (storing) equals the negative power loop (returning), the net average power dissipated as heat in an ideal inductor is strictly zero: P = V · I · cos(-90°) = 0 W.',
    formulaCalloutTitle: 'Governing Inductive Equations',
    formulaCalloutText: 'XL = 2πfL (Ω)  |  ZL = +jXL = XL ∠ +90°  |  Irms = Vrms / XL  |  cos(90°) = 0.0 (Zero Lag)  |  Q = Vrms · Irms (VAR, Lagging)  |  P = 0 W',
    formulaText: 'XL = 2πfL   |   ZL = +jXL   |   I = V / XL   |   φ = -90° (Lagging)   |   P = 0 W   |   Q = V·I > 0'
  },
  hi: {
    title: 'शुद्ध इंडक्टिव एसी परिपथ सिम्युलेटर',
    subtitle: 'इंडक्टिव रिएक्टेंस XL = 2πfL, धारा का वोल्टेज से ठीक 90° लैग (पिछड़ना), शून्य औसत सक्रिय शक्ति (P = 0) एवं चुंबकीय ऊर्जा भंडारण व वापसी का सजीव अध्ययन करें।',
    vRmsLabel: 'RMS वोल्टेज (Vrms)',
    indLabel: 'प्रेरकत्व (L)',
    freqLabel: 'आवृत्ति (f)',
    play: 'एनीमेशन चलाएं',
    pause: 'एनीमेशन रोकें',
    reset: 'डिफ़ॉल्ट रीसेट',
    scrubber: 'रोटर कोण θ = ωt',
    vrmsMetric: 'RMS वोल्टेज Vrms',
    irmsMetric: 'RMS धारा Irms',
    reactanceMetric: 'इंडक्टिव रिएक्टेंस XL',
    reactivePowerMetric: 'रिएक्टिव शक्ति Q (+VAR)',
    activePowerMetric: 'सक्रिय शक्ति P (W)',
    powerFactor: 'पावर फैक्टर (cos φ)',
    phaseAngle: 'फेज कोण (φ)',
    lagStatus: 'धारा वोल्टेज से 90° लैग करती है (φ = -90°)',
    schematicTitle: 'परिपथ आरेख (एसी स्रोत एवं शुद्ध प्रेरक)',
    waveformsTitle: 'लाइव ऑसिलोस्कोप: v(t), i(t) एवं तात्कालिक शक्ति p(t)',
    freqResponseTitle: 'आवृत्ति अनुक्रिया: XL = 2πfL (रैखिक समानुपात)',
    legendVoltage: 'वोल्टेज v(t) = Vm · sin(ωt)',
    legendCurrent: 'धारा i(t) = Im · sin(ωt - 90°)',
    legendPower: 'शक्ति p(t) = v(t) · i(t) [औसत = 0]',
    legendEnergy: 'संचित ऊर्जा W(t) = ½ L i(t)²',
    energyFlowTitle: 'चुंबकीय ऊर्जा गतिशीलता',
    energyStorageNote: 'ऊर्जा भंडारण एवं वापसी: जब v(t) और i(t) समान चिन्ह के होते हैं (p > 0), स्रोत से ऊर्जा चुंबकीय क्षेत्र में संचित होती है। जब चिन्ह विपरीत होते हैं (p < 0), चुंबकीय क्षेत्र समाप्त होकर ऊर्जा स्रोत को वापस लौटा देता है।',
    pureLagNote: 'सटीक 90° फेज लैग: फैराडे/लेन्ज के नियमानुसार, v(t) = L (di/dt)। समाकलन करने पर i(t) = Im sin(ωt - 90°) प्राप्त होता है। धारा वोल्टेज से एक-चौथाई चक्र (T/4) बाद शिखर पर पहुँचती है।',
    zeroPowerNote: 'शून्य सक्रिय शक्ति (P = 0): चूँकि धनात्मक लूप (ऊर्जा लेना) ऋणात्मक लूप (ऊर्जा लौटाना) के पूर्णतः बराबर है, अतः आदर्श प्रेरक में शुद्ध सक्रिय शक्ति P = V · I · cos(90°) = 0 W होती है।',
    formulaCalloutTitle: 'इंडक्टिव परिपथ के मूल सूत्र',
    formulaCalloutText: 'XL = 2πfL (Ω)  |  ZL = +jXL = XL ∠ +90°  |  Irms = Vrms / XL  |  cos(90°) = 0.0 (शून्य लैगिंग)  |  Q = Vrms · Irms (VAR, लैगिंग)  |  P = 0 W',
    formulaText: 'XL = 2πfL   |   ZL = +jXL   |   I = V / XL   |   φ = -90° (लैगिंग)   |   P = 0 W   |   Q = V·I > 0'
  },
  bn: {
    title: 'বিশুদ্ধ ইন্ডাক্টিভ এসি বর্তনী সিমুলেটর',
    subtitle: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL = 2πfL, কারেন্টের ভোল্টেজের তুলনায় ঠিক ৯০° ল্যাগিং আচরণ, শূন্য গড় সক্রিয় ক্ষমতা (P = ০) এবং চৌম্বকীয় শক্তি সঞ্চয় ও প্রত্যাবর্তনের গতিশীল অনুকরণ।',
    vRmsLabel: 'RMS ভোল্টেজ (Vrms)',
    indLabel: 'ইন্ডাকট্যান্স (L)',
    freqLabel: 'কম্পাঙ্ক (f)',
    play: 'অ্যানিমেশন চালান',
    pause: 'অ্যানিমেশন থামান',
    reset: 'ডিফল্ট রিসেট',
    scrubber: 'রোটর কোণ θ = ωt',
    vrmsMetric: 'RMS ভোল্টেজ Vrms',
    irmsMetric: 'RMS কারেন্ট Irms',
    reactanceMetric: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্স XL',
    reactivePowerMetric: 'রিঅ্যাক্টিভ ক্ষমতা Q (+VAR)',
    activePowerMetric: 'সক্রিয় ক্ষমতা P (W)',
    powerFactor: 'পাওয়ার ফ্যাক্টর (cos φ)',
    phaseAngle: 'ফেজ কোণ (φ)',
    lagStatus: 'কারেন্ট ভোল্টেজের চেয়ে ৯০° পিছিয়ে (ল্যাগিং, φ = -৯০°)',
    schematicTitle: 'সার্কিট ডায়াগ্রাম (এসি উৎস ও বিশুদ্ধ ইন্ডাক্টর)',
    waveformsTitle: 'লাইভ অসিলোস্কোপ: v(t), i(t) এবং তাৎক্ষণিক ক্ষমতা p(t)',
    freqResponseTitle: 'ফ্রিকোয়েন্সি রেসপন্স: XL = 2πfL (রৈখিক সমানুপাতিক)',
    legendVoltage: 'ভোল্টেজ v(t) = Vm · sin(ωt)',
    legendCurrent: 'কারেন্ট i(t) = Im · sin(ωt - ৯০°)',
    legendPower: 'পাওয়ার p(t) = v(t) · i(t) [গড় = ০]',
    legendEnergy: 'সঞ্চিত শক্তি W(t) = ½ L i(t)²',
    energyFlowTitle: 'চৌম্বকীয় শক্তি আদান-প্রদান',
    energyStorageNote: 'শক্তি সঞ্চয় ও প্রত্যাবর্তন: যখন v(t) ও i(t) এর দিক একই হয় (p > ০), তখন উৎস থেকে শক্তি নিয়ে চৌম্বক ক্ষেত্র তৈরি হয়। বিপরীত চিহ্নে (p < ০), চৌম্বক ক্ষেত্র ভেঙে গিয়ে ১০০% শক্তি উৎসে ফেরত যায়।',
    pureLagNote: 'নিখুঁত ৯০° ফেজ ল্যাগ: ফ্যারাডে ও লেঞ্জের সূত্রে v(t) = L (di/dt)। সমাকলন করলে i(t) = Im sin(ωt - ৯০°) পাওয়া যায়। কারেন্ট ভোল্টেজের এক চতুর্থাংশ চক্র (T/4) পরে শীর্ষমানে পৌঁছায়।',
    zeroPowerNote: 'শূন্য সক্রিয় ক্ষমতা (P = ০): ধনাত্মক চক্রে সঞ্চিত শক্তি ঋণাত্মক চক্রে সম্পূর্ণ ফিরে আসার কারণে বিশুদ্ধ ইন্ডাক্টরে কোনো তাপীয় অপচয় হয় না: P = V · I · cos(৯০°) = ০ W।',
    formulaCalloutTitle: 'বিশুদ্ধ ইন্ডাক্টিভ এসি সূত্রসমূহ',
    formulaCalloutText: 'XL = 2πfL (Ω)  |  ZL = +jXL = XL ∠ +৯০°  |  Irms = Vrms / XL  |  cos(৯০°) = ০.০ (ল্যাগিং)  |  Q = Vrms · Irms (VAR)  |  P = ০ W',
    formulaText: 'XL = 2πfL   |   ZL = +jXL   |   I = V / XL   |   φ = -৯০° (ল্যাগিং)   |   P = ০ W   |   Q = V·I > ০'
  }
};

export const PureInductiveACAnimation: React.FC<PureInductiveACAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  // Circuit Parameters
  const [vRms, setVRms] = useState<number>(230); // Volts RMS
  const [inductanceMh, setInductanceMh] = useState<number>(100); // mH (0.1 H)
  const [freq, setFreq] = useState<number>(50); // Hz

  // Animation State
  const [isPlaying, setIsPlaying] = useState<boolean>(!isReducedMotion);
  const [angleDeg, setAngleDeg] = useState<number>(0);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const animationRef = useRef<number | null>(null);

  // Derived Calculations
  const inductanceH = Math.max(0.001, inductanceMh / 1000);
  const safeFreq = Math.max(5, freq);
  const xl = 2 * Math.PI * safeFreq * inductanceH; // XL in Ohms
  const vPeak = Math.SQRT2 * vRms;
  const iRms = xl > 0 ? vRms / xl : 0;
  const iPeak = Math.SQRT2 * iRms;
  const reactivePowerVar = vRms * iRms; // Q = V * I (all reactive)
  const activePowerW = 0; // Ideal inductor has zero active power
  const maxStoredEnergyJ = 0.5 * inductanceH * (iPeak * iPeak);

  // Instantaneous angle
  const angleRad = (angleDeg * Math.PI) / 180;
  const instV = vPeak * Math.sin(angleRad);
  // Current lags voltage by 90° (pi/2)
  const instI = iPeak * Math.sin(angleRad - Math.PI / 2);
  const instP = instV * instI; // p(t) = - (Vm*Im/2) * sin(2*wt)
  const instEnergy = 0.5 * inductanceH * (instI * instI);

  // Animation loop
  useEffect(() => {
    if (isReducedMotion) {
      setIsPlaying(false);
      return;
    }

    let lastTimestamp = performance.now();
    const animate = (timestamp: number) => {
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (isPlaying) {
        // Rotate in degrees per second proportional to frequency
        const step = safeFreq * 360 * delta * 0.25 * speedMultiplier;
        setAngleDeg((prev) => (prev + step) % 360);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, safeFreq, speedMultiplier, isReducedMotion]);

  const handleReset = () => {
    setVRms(230);
    setInductanceMh(100);
    setFreq(50);
    setAngleDeg(0);
    setSpeedMultiplier(1);
    setIsPlaying(!isReducedMotion);
  };

  // Waveform SVG Dimensions
  const waveWidth = 520;
  const waveHeight = 160;
  const centerY = waveHeight / 2;
  const cycles = 2;

  // Build SVG path strings for 2 full cycles (720°)
  const numPoints = 120;
  let vPathD = '';
  let iPathD = '';
  let pPathD = '';
  let zeroLineD = `M 40 ${centerY} L ${waveWidth - 20} ${centerY}`;

  const vScale = centerY * 0.75;
  const iScale = centerY * 0.75;
  const pScale = centerY * 0.75;

  for (let i = 0; i <= numPoints; i++) {
    const frac = i / numPoints;
    const x = 40 + frac * (waveWidth - 60);
    const theta = frac * cycles * 2 * Math.PI;

    // Voltage waveform: sin(theta)
    const yV = centerY - Math.sin(theta) * vScale;
    // Current waveform: sin(theta - pi/2) = -cos(theta) (Lags by 90°)
    const yI = centerY - Math.sin(theta - Math.PI / 2) * iScale;
    // Instantaneous power: sin(theta) * sin(theta - pi/2) = -0.5 * sin(2*theta)
    const yP = centerY - (Math.sin(theta) * Math.sin(theta - Math.PI / 2)) * 2 * pScale;

    if (i === 0) {
      vPathD = `M ${x} ${yV}`;
      iPathD = `M ${x} ${yI}`;
      pPathD = `M ${x} ${yP}`;
    } else {
      vPathD += ` L ${x} ${yV}`;
      iPathD += ` L ${x} ${yI}`;
      pPathD += ` L ${x} ${yP}`;
    }
  }

  // Active cursor on waveform matching current angleDeg
  const cursorFrac = ((angleDeg % 360) / 360) / cycles; // normalized in 0..0.5
  const cursorX = 40 + (cursorFrac * 2) * (waveWidth - 60);
  const cursorV_Y = centerY - Math.sin(angleRad) * vScale;
  const cursorI_Y = centerY - Math.sin(angleRad - Math.PI / 2) * iScale;

  // Phasor circle parameters
  const phasorRadius = 55;
  const phasorCenterX = 85;
  const phasorCenterY = 85;

  // Phasor components
  const vPhasorX = phasorCenterX + phasorRadius * Math.cos(angleRad);
  const vPhasorY = phasorCenterY - phasorRadius * Math.sin(angleRad);

  const iPhasorX = phasorCenterX + (phasorRadius * 0.8) * Math.cos(angleRad - Math.PI / 2);
  const iPhasorY = phasorCenterY - (phasorRadius * 0.8) * Math.sin(angleRad - Math.PI / 2);

  // Frequency response line chart: XL vs f (from 0 to 200 Hz)
  const frWidth = 260;
  const frHeight = 130;
  const maxF = 200;
  const maxXL_Chart = 2 * Math.PI * maxF * inductanceH;
  const currentF_X = 35 + (safeFreq / maxF) * (frWidth - 55);
  const currentXL_Y = (frHeight - 25) - (xl / maxXL_Chart) * (frHeight - 45);

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
        {/* TOP CONTROLS & METRICS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Controls Column */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <Sliders className="w-4 h-4" /> Circuit Parameters
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-1 bg-slate-800/80 rounded"
                aria-label="Reset simulation parameters"
              >
                <RotateCcw className="w-3 h-3" /> {t.reset}
              </button>
            </div>

            {/* Slider 1: RMS Voltage */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <label htmlFor="inductor-vrms-slider" className="text-slate-300 font-semibold">{t.vRmsLabel}</label>
                <span className="text-cyan-400 font-bold">{vRms} V</span>
              </div>
              <input
                id="inductor-vrms-slider"
                type="range"
                min="20"
                max="300"
                step="5"
                value={vRms}
                onChange={(e) => setVRms(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Set RMS Voltage"
              />
            </div>

            {/* Slider 2: Inductance (mH) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <label htmlFor="inductor-l-slider" className="text-slate-300 font-semibold">{t.indLabel}</label>
                <span className="text-emerald-400 font-bold">{inductanceMh} mH ({inductanceH.toFixed(3)} H)</span>
              </div>
              <input
                id="inductor-l-slider"
                type="range"
                min="10"
                max="500"
                step="10"
                value={inductanceMh}
                onChange={(e) => setInductanceMh(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                aria-label="Set Inductance in millihenries"
              />
            </div>

            {/* Slider 3: Frequency (Hz) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <label htmlFor="inductor-freq-slider" className="text-slate-300 font-semibold">{t.freqLabel}</label>
                <span className="text-amber-400 font-bold">{freq} Hz</span>
              </div>
              <input
                id="inductor-freq-slider"
                type="range"
                min="10"
                max="200"
                step="5"
                value={freq}
                onChange={(e) => setFreq(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label="Set Frequency in Hertz"
              />
            </div>

            {/* Scrubber and Animation Controls */}
            <div className="pt-2 border-t border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">{t.scrubber}:</span>
                <span className="text-xs font-mono text-purple-400 font-bold">{Math.round(angleDeg)}° ({((angleDeg * Math.PI) / 180).toFixed(2)} rad)</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                step="1"
                value={Math.round(angleDeg)}
                onChange={(e) => {
                  setIsPlaying(false);
                  setAngleDeg(Number(e.target.value));
                }}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
                aria-label="Adjust rotor angle manually"
              />

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                    isPlaying
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                  }`}
                  aria-label={isPlaying ? t.pause : t.play}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  {isPlaying ? t.pause : t.play}
                </button>

                <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
                  {[0.5, 1, 2].map((spd) => (
                    <button
                      key={spd}
                      type="button"
                      onClick={() => setSpeedMultiplier(spd)}
                      className={`px-2 py-1 text-[10px] font-mono font-bold rounded transition-colors ${
                        speedMultiplier === spd ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Live Calculated Metrics Cards (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {/* Metric 1: XL */}
            <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.reactanceMetric}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-emerald-400">{xl.toFixed(2)}</span>
                <span className="text-xs text-slate-400 ml-1">Ω</span>
              </div>
              <span className="text-[10px] text-emerald-300/80 font-mono">XL = 2π × {freq} × {inductanceH.toFixed(3)}</span>
            </div>

            {/* Metric 2: Irms */}
            <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.irmsMetric}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-cyan-400">{iRms.toFixed(2)}</span>
                <span className="text-xs text-slate-400 ml-1">A</span>
              </div>
              <span className="text-[10px] text-cyan-300/80 font-mono">Irms = Vrms / XL ({vRms} / {xl.toFixed(1)})</span>
            </div>

            {/* Metric 3: Reactive Power Q */}
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.reactivePowerMetric}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-amber-400">{reactivePowerVar.toFixed(1)}</span>
                <span className="text-xs text-slate-400 ml-1">VAR</span>
              </div>
              <span className="text-[10px] text-amber-300/80 font-mono">Q = V · I (Pure Lagging)</span>
            </div>

            {/* Metric 4: Active Power P */}
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.activePowerMetric}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-slate-200">0.00</span>
                <span className="text-xs text-slate-400 ml-1">W</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">P = V · I · cos(90°) = 0</span>
            </div>

            {/* Metric 5: Power Factor */}
            <div className="bg-slate-900/90 border border-purple-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.powerFactor}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-purple-400">0.00</span>
                <span className="text-xs text-purple-300 ml-1 font-bold">Lag</span>
              </div>
              <span className="text-[10px] text-purple-300/80 font-mono">cos(-90°) = 0.0 (Zero PF)</span>
            </div>

            {/* Metric 6: Phase Angle */}
            <div className="bg-slate-900/90 border border-rose-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.phaseAngle}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-rose-400">-90.0°</span>
                <span className="text-xs text-slate-400 ml-1">(-π/2)</span>
              </div>
              <span className="text-[10px] text-rose-300/80 font-mono">i(t) lags v(t) by 90°</span>
            </div>
          </div>
        </div>

        {/* MIDDLE ROW: CIRCUIT SCHEMATIC + PHASOR + FREQUENCY RESPONSE GRAPH */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Schematic Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-between">
            <span className="text-xs font-bold text-slate-300 self-start mb-2 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" /> {t.schematicTitle}
            </span>
            <svg viewBox="0 0 240 140" className="w-full max-w-[220px] h-32">
              {/* Circuit Loop */}
              <rect x="30" y="20" width="180" height="95" rx="6" fill="none" stroke="#475569" strokeWidth="2.5" />
              
              {/* AC Source */}
              <g transform="translate(30, 67)">
                <circle cx="0" cy="0" r="16" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
                <path d="M -8 0 Q -4 -7 0 0 Q 4 7 8 0" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <text x="-22" y="4" textAnchor="end" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="monospace">{vRms}V</text>
              </g>

              {/* Pure Inductor Coil */}
              <g transform="translate(210, 42)">
                <path d="M 0 0 C 14 -3 14 12 0 12 C 14 9 14 24 0 24 C 14 21 14 36 0 36 C 14 33 14 48 0 48" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                <text x="24" y="26" textAnchor="start" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace">L={inductanceMh}mH</text>
                <text x="24" y="38" textAnchor="start" fill="#10b981" fontSize="8.5" fontFamily="monospace">XL={xl.toFixed(1)}Ω</text>
              </g>

              {/* Current Flow Arrow */}
              <g transform="translate(120, 20)">
                <line x1="-15" y1="0" x2="15" y2="0" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-ind)" />
                <text x="0" y="-6" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold" fontFamily="monospace">i(t) = {iRms.toFixed(1)}A</text>
              </g>

              {/* Magnetic field flux rings around inductor */}
              <ellipse cx="210" cy="67" rx="22" ry="32" fill="none" stroke="#34d399" strokeWidth="1" strokeDasharray="3 3" opacity={Math.abs(instI) / (iPeak || 1)} />
            </svg>
            <div className="w-full text-center text-[10px] font-mono text-emerald-400 bg-emerald-950/40 py-1 rounded border border-emerald-800/40">
              ZL = +j {xl.toFixed(1)} Ω = {xl.toFixed(1)} ∠ +90° Ω
            </div>
          </div>

          {/* Phasor Diagram Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-between">
            <div className="w-full flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-purple-400" /> Phasor Wheel (ω = {Math.round(2 * Math.PI * safeFreq)} rad/s)
              </span>
              <span className="text-[10px] font-mono text-rose-400 font-bold">-90° Lag</span>
            </div>

            <svg viewBox="0 0 170 170" className="w-40 h-40">
              {/* Axes */}
              <line x1="15" y1={phasorCenterY} x2="155" y2={phasorCenterY} stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1={phasorCenterX} y1="15" x2={phasorCenterX} y2="155" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx={phasorCenterX} cy={phasorCenterY} r={phasorRadius} fill="none" stroke="#1e293b" strokeWidth="1.5" />

              {/* Rotation Direction Arrow CCW */}
              <path d="M 135 70 A 55 55 0 0 0 100 35" fill="none" stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#arrow-ccw)" />
              <text x="138" y="55" fill="#c084fc" fontSize="9" fontWeight="bold" fontFamily="monospace">ω (CCW)</text>

              {/* Voltage Phasor (Cyan) */}
              <line
                x1={phasorCenterX}
                y1={phasorCenterY}
                x2={vPhasorX}
                y2={vPhasorY}
                stroke="#38bdf8"
                strokeWidth="3"
                markerEnd="url(#arrow-v)"
              />
              <circle cx={vPhasorX} cy={vPhasorY} r="3" fill="#38bdf8" />
              <text x={vPhasorX + 4} y={vPhasorY - 4} fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">V</text>

              {/* Current Phasor (Lagging by 90°, Amber) */}
              <line
                x1={phasorCenterX}
                y1={phasorCenterY}
                x2={iPhasorX}
                y2={iPhasorY}
                stroke="#fbbf24"
                strokeWidth="3"
                markerEnd="url(#arrow-i)"
              />
              <circle cx={iPhasorX} cy={iPhasorY} r="3" fill="#fbbf24" />
              <text x={iPhasorX + 4} y={iPhasorY + 12} fill="#fbbf24" fontSize="10" fontWeight="bold" fontFamily="monospace">I (Lag 90°)</text>

              {/* 90° Right Angle Arc */}
              <path
                d={`M ${phasorCenterX + 16 * Math.cos(angleRad)} ${phasorCenterY - 16 * Math.sin(angleRad)} L ${phasorCenterX + 16 * Math.cos(angleRad) + 16 * Math.cos(angleRad - Math.PI / 2)} ${phasorCenterY - 16 * Math.sin(angleRad) - 16 * Math.sin(angleRad - Math.PI / 2)} L ${phasorCenterX + 16 * Math.cos(angleRad - Math.PI / 2)} ${phasorCenterY - 16 * Math.sin(angleRad - Math.PI / 2)}`}
                fill="none"
                stroke="#ef4444"
                strokeWidth="1.5"
              />
            </svg>

            <span className="text-[10px] font-mono text-slate-400">Current vector I is 90° clockwise behind V</span>
          </div>

          {/* Frequency Response Graph: XL = 2πfL */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-between">
            <div className="w-full flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" /> {t.freqResponseTitle}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">XL ∝ f</span>
            </div>

            <svg viewBox={`0 0 ${frWidth} ${frHeight}`} className="w-full h-32">
              {/* Axes */}
              <line x1="35" y1={frHeight - 25} x2={frWidth - 10} y2={frHeight - 25} stroke="#475569" strokeWidth="1.5" />
              <line x1="35" y1="15" x2="35" y2={frHeight - 25} stroke="#475569" strokeWidth="1.5" />
              
              {/* Labels */}
              <text x={frWidth - 12} y={frHeight - 12} textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">f (Hz)</text>
              <text x="30" y="15" textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">XL (Ω)</text>
              <text x="35" y={frHeight - 12} textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">0</text>
              <text x={frWidth - 25} y={frHeight - 12} textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">200</text>

              {/* Linear Line XL = 2*pi*f*L */}
              <line
                x1="35"
                y1={frHeight - 25}
                x2={frWidth - 20}
                y2="20"
                stroke="#10b981"
                strokeWidth="2.5"
              />

              {/* Operating Point Marker */}
              <line x1={currentF_X} y1={frHeight - 25} x2={currentF_X} y2={currentXL_Y} stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="35" y1={currentXL_Y} x2={currentF_X} y2={currentXL_Y} stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx={currentF_X} cy={currentXL_Y} r="4.5" fill="#fbbf24" stroke="#0f172a" strokeWidth="1.5" />
              
              <text x={Math.min(currentF_X + 6, frWidth - 70)} y={Math.max(currentXL_Y - 4, 25)} fill="#fbbf24" fontSize="8" fontWeight="bold" fontFamily="monospace">
                ({freq}Hz, {xl.toFixed(1)}Ω)
              </text>
            </svg>

            <span className="text-[10px] font-mono text-slate-400">Doubling frequency strictly doubles inductive reactance</span>
          </div>
        </div>

        {/* BOTTOM: LIVE OSCILLOSCOPE WAVEFORMS */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
            <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" /> {t.waveformsTitle}
            </span>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <span className="text-cyan-400 flex items-center gap-1">
                <span className="w-3 h-0.5 bg-cyan-400 inline-block"></span> {t.legendVoltage}
              </span>
              <span className="text-amber-400 flex items-center gap-1">
                <span className="w-3 h-0.5 bg-amber-400 inline-block"></span> {t.legendCurrent}
              </span>
              <span className="text-purple-400 flex items-center gap-1">
                <span className="w-3 h-0.5 bg-purple-400 inline-block"></span> {t.legendPower}
              </span>
            </div>
          </div>

          {/* SVG Canvas for Waveforms */}
          <div className="w-full overflow-x-auto">
            <svg viewBox={`0 0 ${waveWidth} ${waveHeight}`} className="w-full min-w-[480px] h-44">
              {/* Grid Lines */}
              <path d={zeroLineD} stroke="#334155" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2={waveHeight - 20} stroke="#334155" strokeWidth="1.5" />
              
              {/* Quarter-cycle markers (90°, 180°, 270°, 360°) */}
              {[90, 180, 270, 360, 450, 540, 630, 720].map((deg) => {
                const frac = deg / (cycles * 360);
                const x = 40 + frac * (waveWidth - 60);
                return (
                  <g key={deg}>
                    <line x1={x} y1="20" x2={x} y2={waveHeight - 20} stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                    <text x={x} y={waveHeight - 6} textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">
                      {deg}°
                    </text>
                  </g>
                );
              })}

              {/* Instantaneous Power Waveform p(t) (Purple) */}
              <path d={pPathD} fill="none" stroke="#c084fc" strokeWidth="1.8" strokeDasharray="3 2" opacity="0.85" />

              {/* Current Waveform i(t) (Amber, Lags by 90°) */}
              <path d={iPathD} fill="none" stroke="#fbbf24" strokeWidth="2.5" />

              {/* Voltage Waveform v(t) (Cyan, Reference 0°) */}
              <path d={vPathD} fill="none" stroke="#38bdf8" strokeWidth="2.5" />

              {/* Time Cursor */}
              <line x1={cursorX} y1="15" x2={cursorX} y2={waveHeight - 20} stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx={cursorX} cy={cursorV_Y} r="4" fill="#38bdf8" stroke="#0f172a" strokeWidth="1.5" />
              <circle cx={cursorX} cy={cursorI_Y} r="4" fill="#fbbf24" stroke="#0f172a" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Educational Callout on Energy and Power Exchange */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-slate-300 space-y-1">
              <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> {t.pureLagNote}
              </span>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                {t.energyStorageNote}
              </p>
            </div>

            <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-slate-300 space-y-1">
              <span className="font-bold text-purple-300 flex items-center gap-1.5">
                <Magnet className="w-3.5 h-3.5" /> {t.zeroPowerNote}
              </span>
              <div className="text-[11px] font-mono text-emerald-400 flex justify-between pt-1 border-t border-slate-800">
                <span>Peak Stored Energy W_max = ½LI_m²:</span>
                <span className="font-bold">{(maxStoredEnergyJ * 1000).toFixed(2)} mJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
