import React, { useState, useEffect, useRef } from 'react';
import { Sliders, RotateCcw, Play, Pause, Activity, Zap, Compass, ShieldCheck, BatteryCharging } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface PureCapacitiveACAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Pure Capacitive AC Circuit Simulator',
    subtitle: 'Examine capacitive reactance XC = 1/(2πfC), the exact 90° leading current relationship, zero average active power (P = 0), and electrostatic energy charge/discharge cycles.',
    vRmsLabel: 'RMS Voltage (Vrms)',
    capLabel: 'Capacitance (C)',
    freqLabel: 'Frequency (f)',
    play: 'Play Animation',
    pause: 'Pause Animation',
    reset: 'Reset Defaults',
    scrubber: 'Rotor Angle θ = ωt',
    vrmsMetric: 'RMS Voltage Vrms',
    irmsMetric: 'RMS Current Irms',
    reactanceMetric: 'Capacitive Reactance XC',
    reactivePowerMetric: 'Reactive Power Q (-VAR)',
    activePowerMetric: 'Active Power P (W)',
    powerFactor: 'Power Factor (cos φ)',
    phaseAngle: 'Phase Angle (φ)',
    leadStatus: 'Current Leads Voltage by 90° (φ = +90°)',
    schematicTitle: 'Circuit Schematic (AC Source & Pure Capacitor)',
    waveformsTitle: 'Live Oscilloscope: v(t), i(t) & Instantaneous Power p(t)',
    freqResponseTitle: 'Frequency Response: XC = 1/(2πfC) (Inverse Hyperbola)',
    legendVoltage: 'Voltage v(t) = Vm · sin(ωt)',
    legendCurrent: 'Current i(t) = Im · sin(ωt + 90°)',
    legendPower: 'Power p(t) = v(t) · i(t) [Avg = 0]',
    legendEnergy: 'Stored Energy W(t) = ½ C v(t)²',
    energyFlowTitle: 'Electrostatic Energy Dynamics',
    energyStorageNote: 'Energy Storage & Return: When v(t) and i(t) have the same sign (p > 0), electrostatic charge accumulates on the capacitor plates and energy is stored. When signs oppose (p < 0), the capacitor discharges and returns 100% of stored energy back to the AC source.',
    pureLeadNote: 'Exact 90° Phase Lead: Current is the time derivative of electric charge: i(t) = C (dv/dt) = ωC Vm cos(ωt) = Im sin(ωt + 90°). Current reaches its positive peak a quarter-cycle (T/4) ahead of voltage.',
    zeroPowerNote: 'Zero Active Power (P = 0): Because energy taken during charging equals energy returned during discharging, net active thermal power dissipation is strictly zero: P = V · I · cos(+90°) = 0 W.',
    formulaCalloutTitle: 'Governing Capacitive Equations',
    formulaCalloutText: 'XC = 1 / (2πfC) (Ω)  |  ZC = -jXC = XC ∠ -90°  |  Irms = Vrms / XC  |  cos(+90°) = 0.0 (Zero Lead)  |  |Q| = Vrms · Irms (Leading VAR)  |  P = 0 W',
    formulaText: 'XC = 1 / (2πfC)   |   ZC = -jXC   |   I = V / XC   |   φ = +90° (Leading)   |   P = 0 W   |   Q < 0'
  },
  hi: {
    title: 'शुद्ध कैपेसिटिव एसी परिपथ सिम्युलेटर',
    subtitle: 'कैपेसिटिव रिएक्टेंस XC = 1/(2πfC), धारा का वोल्टेज से ठीक 90° लीड (आगे रहना), शून्य औसत सक्रिय शक्ति (P = 0) एवं स्थिरवैद्युत ऊर्जा संचय व विसर्जन का अध्ययन करें।',
    vRmsLabel: 'RMS वोल्टेज (Vrms)',
    capLabel: 'धारिता (C)',
    freqLabel: 'आवृत्ति (f)',
    play: 'एनीमेशन चलाएं',
    pause: 'एनीमेशन रोकें',
    reset: 'डिफ़ॉल्ट रीसेट',
    scrubber: 'रोटर कोण θ = ωt',
    vrmsMetric: 'RMS वोल्टेज Vrms',
    irmsMetric: 'RMS धारा Irms',
    reactanceMetric: 'कैपेसिटिव रिएक्टेंस XC',
    reactivePowerMetric: 'रिएक्टिव शक्ति Q (-VAR)',
    activePowerMetric: 'सक्रिय शक्ति P (W)',
    powerFactor: 'पावर फैक्टर (cos φ)',
    phaseAngle: 'फेज कोण (φ)',
    leadStatus: 'धारा वोल्टेज से 90° लीड करती है (φ = +90°)',
    schematicTitle: 'परिपथ आरेख (एसी स्रोत एवं शुद्ध संधारित्र)',
    waveformsTitle: 'लाइव ऑसिलोस्कोप: v(t), i(t) एवं तात्कालिक शक्ति p(t)',
    freqResponseTitle: 'आवृत्ति अनुक्रिया: XC = 1/(2πfC) (व्युत्क्रमानुपाती वक्र)',
    legendVoltage: 'वोल्टेज v(t) = Vm · sin(ωt)',
    legendCurrent: 'धारा i(t) = Im · sin(ωt + 90°)',
    legendPower: 'शक्ति p(t) = v(t) · i(t) [औसत = 0]',
    legendEnergy: 'संचित ऊर्जा W(t) = ½ C v(t)²',
    energyFlowTitle: 'स्थिरवैद्युत ऊर्जा चक्र',
    energyStorageNote: 'ऊर्जा संचय एवं वापसी: जब v(t) और i(t) समान चिन्ह के होते हैं (p > 0), संधारित्र प्लेटों पर आवेश संचित होता है। जब चिन्ह विपरीत होते हैं (p < 0), संधारित्र विसर्जित होकर ऊर्जा स्रोत को वापस लौटा देता है।',
    pureLeadNote: 'सटीक 90° फेज लीड: धारा आवेश परिवर्तन की दर है: i(t) = C (dv/dt) = Im sin(ωt + 90°)। धारा वोल्टेज से एक-चौथाई चक्र (T/4) पहले शिखर मान प्राप्त कर लेती है।',
    zeroPowerNote: 'शून्य सक्रिय शक्ति (P = 0): चार्जिंग के दौरान ली गई ऊर्जा डिस्चार्जिंग में पूरी लौट जाने के कारण, शुद्ध संधारित्र में सक्रिय शक्ति का क्षय P = V · I · cos(90°) = 0 W होता है।',
    formulaCalloutTitle: 'कैपेसिटिव परिपथ के मूल सूत्र',
    formulaCalloutText: 'XC = 1 / (2πfC) (Ω)  |  ZC = -jXC = XC ∠ -90°  |  Irms = Vrms / XC  |  cos(+90°) = 0.0 (शून्य लीडिंग)  |  |Q| = Vrms · Irms (VAR, लीडिंग)  |  P = 0 W',
    formulaText: 'XC = 1 / (2πfC)   |   ZC = -jXC   |   I = V / XC   |   φ = +90° (लीडिंग)   |   P = 0 W   |   Q < 0'
  },
  bn: {
    title: 'বিশুদ্ধ ক্যাপাসিটিভ এসি বর্তনী সিমুলেটর',
    subtitle: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC = 1/(2πfC), কারেন্টের ভোল্টেজের তুলনায় ঠিক ৯০° লিডিং আচরণ, শূন্য গড় সক্রিয় ক্ষমতা (P = ০) এবং স্থিরবৈদ্যুতিক শক্তি চার্জ/ডিসচার্জ প্রক্রিয়া।',
    vRmsLabel: 'RMS ভোল্টেজ (Vrms)',
    capLabel: 'ধারকত্ব বা ক্যাপাসিট্যান্স (C)',
    freqLabel: 'কম্পাঙ্ক (f)',
    play: 'অ্যানিমেশন চালান',
    pause: 'অ্যানিমেশন থামান',
    reset: 'ডিফল্ট রিসেট',
    scrubber: 'রোটর কোণ θ = ωt',
    vrmsMetric: 'RMS ভোল্টেজ Vrms',
    irmsMetric: 'RMS কারেন্ট Irms',
    reactanceMetric: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স XC',
    reactivePowerMetric: 'রিঅ্যাক্টিভ ক্ষমতা Q (-VAR)',
    activePowerMetric: 'সক্রিয় ক্ষমতা P (W)',
    powerFactor: 'পাওয়ার ফ্যাক্টর (cos φ)',
    phaseAngle: 'ফেজ কোণ (φ)',
    leadStatus: 'কারেন্ট ভোল্টেজের চেয়ে ৯০° এগিয়ে (লিডিং, φ = +৯০°)',
    schematicTitle: 'সার্কিট ডায়াগ্রাম (এসি উৎস ও বিশুদ্ধ ক্যাপাসিটর)',
    waveformsTitle: 'লাইভ অসিলোস্কোপ: v(t), i(t) এবং তাৎক্ষণিক ক্ষমতা p(t)',
    freqResponseTitle: 'ফ্রিকোয়েন্সি রেসপন্স: XC = 1/(2πfC) (ব্যস্তানুপাতিক হাইপারবোলা)',
    legendVoltage: 'ভোল্টেজ v(t) = Vm · sin(ωt)',
    legendCurrent: 'কারেন্ট i(t) = Im · sin(ωt + ৯০°)',
    legendPower: 'পাওয়ার p(t) = v(t) · i(t) [গড় = ০]',
    legendEnergy: 'সঞ্চিত শক্তি W(t) = ½ C v(t)²',
    energyFlowTitle: 'স্থিরবৈদ্যুতিক শক্তি চক্র',
    energyStorageNote: 'শক্তি সঞ্চয় ও প্রত্যাবর্তন: যখন v(t) ও i(t) এর দিক একই হয় (p > ০), ক্যাপাসিটর প্লেটে চার্জ সঞ্চিত হয়। বিপরীত চিহ্নে (p < ০), ক্যাপাসিটর ডিসচার্জ হয়ে সঞ্চিত শক্তি উৎসে সম্পূর্ণ ফেরত দেয়।',
    pureLeadNote: 'নিখুঁত ৯০° ফেজ লিড: কারেন্ট হলো চার্জের পরিবর্তনের হার: i(t) = C (dv/dt) = Im sin(ωt + ৯০°)। কারেন্ট ভোল্টেজের এক চতুর্থাংশ চক্র (T/4) পূর্বেই শীর্ষে পৌঁছায়।',
    zeroPowerNote: 'শূন্য সক্রিয় ক্ষমতা (P = ০): চার্জিংয়ে গৃহীত শক্তি ডিসচার্জিংয়ে সম্পূর্ণ ফেরত আসায় বিশুদ্ধ ক্যাপাসিটরে কোনো তাপীয় অপচয় হয় না: P = V · I · cos(৯০°) = ০ W।',
    formulaCalloutTitle: 'বিশুদ্ধ ক্যাপাসিটিভ এসি সূত্রসমূহ',
    formulaCalloutText: 'XC = 1 / (2πfC) (Ω)  |  ZC = -jXC = XC ∠ -৯০°  |  Irms = Vrms / XC  |  cos(+৯০°) = ০.০ (লিডিং)  |  |Q| = Vrms · Irms (VAR)  |  P = ০ W',
    formulaText: 'XC = 1 / (2πfC)   |   ZC = -jXC   |   I = V / XC   |   φ = +৯০° (লিডিং)   |   P = ০ W   |   Q < ০'
  }
};

export const PureCapacitiveACAnimation: React.FC<PureCapacitiveACAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  // Circuit Parameters
  const [vRms, setVRms] = useState<number>(230); // Volts RMS
  const [capacitanceUf, setCapacitanceUf] = useState<number>(50); // microfarads (50 uF)
  const [freq, setFreq] = useState<number>(50); // Hz

  // Animation State
  const [isPlaying, setIsPlaying] = useState<boolean>(!isReducedMotion);
  const [angleDeg, setAngleDeg] = useState<number>(0);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const animationRef = useRef<number | null>(null);

  // Safe Guard Calculations (prevent division by zero, NaN, or Infinity)
  const capacitanceF = Math.max(1e-7, capacitanceUf * 1e-6); // Min 0.1 uF
  const safeFreq = Math.max(5, freq); // Min 5 Hz
  const xc = 1 / (2 * Math.PI * safeFreq * capacitanceF); // XC in Ohms
  const vPeak = Math.SQRT2 * vRms;
  const iRms = xc > 0 ? vRms / xc : 0;
  const iPeak = Math.SQRT2 * iRms;
  const reactivePowerMagnitude = vRms * iRms; // |Q| in VAR
  const activePowerW = 0; // Ideal capacitor has zero active power
  const maxStoredEnergyJ = 0.5 * capacitanceF * (vPeak * vPeak);

  // Instantaneous angle
  const angleRad = (angleDeg * Math.PI) / 180;
  const instV = vPeak * Math.sin(angleRad);
  // Current leads voltage by 90° (+pi/2)
  const instI = iPeak * Math.sin(angleRad + Math.PI / 2);
  const instP = instV * instI; // p(t) = (Vm*Im/2) * sin(2*wt)
  const instEnergy = 0.5 * capacitanceF * (instV * instV);

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
    setCapacitanceUf(50);
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
    // Current waveform: sin(theta + pi/2) = cos(theta) (Leads by 90°)
    const yI = centerY - Math.sin(theta + Math.PI / 2) * iScale;
    // Instantaneous power: sin(theta) * sin(theta + pi/2) = 0.5 * sin(2*theta)
    const yP = centerY - (Math.sin(theta) * Math.sin(theta + Math.PI / 2)) * 2 * pScale;

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
  const cursorFrac = ((angleDeg % 360) / 360) / cycles;
  const cursorX = 40 + (cursorFrac * 2) * (waveWidth - 60);
  const cursorV_Y = centerY - Math.sin(angleRad) * vScale;
  const cursorI_Y = centerY - Math.sin(angleRad + Math.PI / 2) * iScale;

  // Phasor circle parameters
  const phasorRadius = 55;
  const phasorCenterX = 85;
  const phasorCenterY = 85;

  // Phasor components
  const vPhasorX = phasorCenterX + phasorRadius * Math.cos(angleRad);
  const vPhasorY = phasorCenterY - phasorRadius * Math.sin(angleRad);

  // Current leads by +90° (ahead in CCW rotation)
  const iPhasorX = phasorCenterX + (phasorRadius * 0.8) * Math.cos(angleRad + Math.PI / 2);
  const iPhasorY = phasorCenterY - (phasorRadius * 0.8) * Math.sin(angleRad + Math.PI / 2);

  // Frequency response curve: XC vs f (from 10 to 200 Hz)
  const frWidth = 260;
  const frHeight = 130;
  const minF = 10;
  const maxF = 200;
  const minXC_Chart = 1 / (2 * Math.PI * maxF * capacitanceF);
  const maxXC_Chart = 1 / (2 * Math.PI * minF * capacitanceF);

  // Build hyperbola curve path
  let xcCurveD = '';
  for (let fVal = minF; fVal <= maxF; fVal += 5) {
    const fFrac = (fVal - minF) / (maxF - minF);
    const chartX = 35 + fFrac * (frWidth - 55);
    const xcVal = 1 / (2 * Math.PI * fVal * capacitanceF);
    const normY = Math.min(1, Math.max(0, (xcVal - minXC_Chart) / (maxXC_Chart - minXC_Chart || 1)));
    const chartY = (frHeight - 25) - normY * (frHeight - 45);

    if (fVal === minF) {
      xcCurveD = `M ${chartX} ${chartY}`;
    } else {
      xcCurveD += ` L ${chartX} ${chartY}`;
    }
  }

  const currentF_Frac = Math.max(0, Math.min(1, (safeFreq - minF) / (maxF - minF)));
  const currentF_X = 35 + currentF_Frac * (frWidth - 55);
  const currentXC_NormY = Math.min(1, Math.max(0, (xc - minXC_Chart) / (maxXC_Chart - minXC_Chart || 1)));
  const currentXC_Y = (frHeight - 25) - currentXC_NormY * (frHeight - 45);

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
                <label htmlFor="cap-vrms-slider" className="text-slate-300 font-semibold">{t.vRmsLabel}</label>
                <span className="text-cyan-400 font-bold">{vRms} V</span>
              </div>
              <input
                id="cap-vrms-slider"
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

            {/* Slider 2: Capacitance (uF) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <label htmlFor="cap-c-slider" className="text-slate-300 font-semibold">{t.capLabel}</label>
                <span className="text-sky-400 font-bold">{capacitanceUf} µF</span>
              </div>
              <input
                id="cap-c-slider"
                type="range"
                min="5"
                max="200"
                step="5"
                value={capacitanceUf}
                onChange={(e) => setCapacitanceUf(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                aria-label="Set Capacitance in microfarads"
              />
            </div>

            {/* Slider 3: Frequency (Hz) */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-mono">
                <label htmlFor="cap-freq-slider" className="text-slate-300 font-semibold">{t.freqLabel}</label>
                <span className="text-amber-400 font-bold">{freq} Hz</span>
              </div>
              <input
                id="cap-freq-slider"
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
            {/* Metric 1: XC */}
            <div className="bg-slate-900/90 border border-sky-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.reactanceMetric}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-sky-400">{xc.toFixed(2)}</span>
                <span className="text-xs text-slate-400 ml-1">Ω</span>
              </div>
              <span className="text-[10px] text-sky-300/80 font-mono">XC = 1 / (2π × {freq} × {capacitanceUf}µF)</span>
            </div>

            {/* Metric 2: Irms */}
            <div className="bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.irmsMetric}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-cyan-400">{iRms.toFixed(2)}</span>
                <span className="text-xs text-slate-400 ml-1">A</span>
              </div>
              <span className="text-[10px] text-cyan-300/80 font-mono">Irms = Vrms / XC ({vRms} / {xc.toFixed(1)})</span>
            </div>

            {/* Metric 3: Reactive Power Q */}
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.reactivePowerMetric}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-amber-400">-{reactivePowerMagnitude.toFixed(1)}</span>
                <span className="text-xs text-slate-400 ml-1">VAR</span>
              </div>
              <span className="text-[10px] text-amber-300/80 font-mono">|Q| = V · I (Pure Leading)</span>
            </div>

            {/* Metric 4: Active Power P */}
            <div className="bg-slate-900/90 border border-slate-700/80 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.activePowerMetric}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-slate-200">0.00</span>
                <span className="text-xs text-slate-400 ml-1">W</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">P = V · I · cos(+90°) = 0</span>
            </div>

            {/* Metric 5: Power Factor */}
            <div className="bg-slate-900/90 border border-purple-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.powerFactor}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-purple-400">0.00</span>
                <span className="text-xs text-purple-300 ml-1 font-bold">Lead</span>
              </div>
              <span className="text-[10px] text-purple-300/80 font-mono">cos(+90°) = 0.0 (Zero PF)</span>
            </div>

            {/* Metric 6: Phase Angle */}
            <div className="bg-slate-900/90 border border-emerald-500/30 rounded-xl p-3 flex flex-col justify-between">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">{t.phaseAngle}</span>
              <div className="my-1">
                <span className="text-xl font-bold font-mono text-emerald-400">+90.0°</span>
                <span className="text-xs text-slate-400 ml-1">(+π/2)</span>
              </div>
              <span className="text-[10px] text-emerald-300/80 font-mono">i(t) leads v(t) by 90°</span>
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

              {/* Pure Capacitor Parallel Plates */}
              <g transform="translate(210, 67)">
                {/* Upper Lead */}
                <line x1="0" y1="-47" x2="0" y2="-12" stroke="#475569" strokeWidth="2.5" />
                {/* Plate 1 */}
                <line x1="-18" y1="-12" x2="18" y2="-12" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
                {/* Plate 2 */}
                <line x1="-18" y1="12" x2="18" y2="12" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" />
                {/* Lower Lead */}
                <line x1="0" y1="12" x2="0" y2="48" stroke="#475569" strokeWidth="2.5" />

                <text x="26" y="-4" textAnchor="start" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">C={capacitanceUf}µF</text>
                <text x="26" y="8" textAnchor="start" fill="#0284c7" fontSize="8.5" fontFamily="monospace">XC={xc.toFixed(1)}Ω</text>
              </g>

              {/* Current Flow Arrow */}
              <g transform="translate(120, 20)">
                <line x1="-15" y1="0" x2="15" y2="0" stroke="#fbbf24" strokeWidth="2.5" markerEnd="url(#arrow-cap)" />
                <text x="0" y="-6" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="monospace">i(t) = {iRms.toFixed(1)}A</text>
              </g>

              {/* Electric field lines between plates */}
              <g opacity={Math.abs(instV) / (vPeak || 1)}>
                <line x1="-10" y1="58" x2="-10" y2="76" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="0" y1="58" x2="0" y2="76" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="10" y1="58" x2="10" y2="76" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 2" />
              </g>
            </svg>
            <div className="w-full text-center text-[10px] font-mono text-sky-400 bg-sky-950/40 py-1 rounded border border-sky-800/40">
              ZC = -j {xc.toFixed(1)} Ω = {xc.toFixed(1)} ∠ -90° Ω
            </div>
          </div>

          {/* Phasor Diagram Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-between">
            <div className="w-full flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-purple-400" /> Phasor Wheel (ω = {Math.round(2 * Math.PI * safeFreq)} rad/s)
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">+90° Lead</span>
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
              <text x={vPhasorX + 4} y={vPhasorY + 12} fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">V</text>

              {/* Current Phasor (Leading by +90°, Amber) */}
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
              <text x={iPhasorX + 4} y={iPhasorY - 4} fill="#fbbf24" fontSize="10" fontWeight="bold" fontFamily="monospace">I (Lead 90°)</text>

              {/* 90° Right Angle Arc */}
              <path
                d={`M ${phasorCenterX + 16 * Math.cos(angleRad)} ${phasorCenterY - 16 * Math.sin(angleRad)} L ${phasorCenterX + 16 * Math.cos(angleRad) + 16 * Math.cos(angleRad + Math.PI / 2)} ${phasorCenterY - 16 * Math.sin(angleRad) - 16 * Math.sin(angleRad + Math.PI / 2)} L ${phasorCenterX + 16 * Math.cos(angleRad + Math.PI / 2)} ${phasorCenterY - 16 * Math.sin(angleRad + Math.PI / 2)}`}
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
              />
            </svg>

            <span className="text-[10px] font-mono text-slate-400">Current vector I rotates 90° ahead CCW of V</span>
          </div>

          {/* Frequency Response Graph: XC = 1/(2πfC) */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-between">
            <div className="w-full flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-sky-400" /> {t.freqResponseTitle}
              </span>
              <span className="text-[10px] font-mono text-sky-400 font-bold">XC ∝ 1/f</span>
            </div>

            <svg viewBox={`0 0 ${frWidth} ${frHeight}`} className="w-full h-32">
              {/* Axes */}
              <line x1="35" y1={frHeight - 25} x2={frWidth - 10} y2={frHeight - 25} stroke="#475569" strokeWidth="1.5" />
              <line x1="35" y1="15" x2="35" y2={frHeight - 25} stroke="#475569" strokeWidth="1.5" />
              
              {/* Labels */}
              <text x={frWidth - 12} y={frHeight - 12} textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">f (Hz)</text>
              <text x="30" y="15" textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">XC (Ω)</text>
              <text x="35" y={frHeight - 12} textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">10</text>
              <text x={frWidth - 25} y={frHeight - 12} textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">200</text>

              {/* Hyperbola Curve XC = 1 / (2*pi*f*C) */}
              <path d={xcCurveD} fill="none" stroke="#38bdf8" strokeWidth="2.5" />

              {/* Operating Point Marker */}
              <line x1={currentF_X} y1={frHeight - 25} x2={currentF_X} y2={currentXC_Y} stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="35" y1={currentXC_Y} x2={currentF_X} y2={currentXC_Y} stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 2" />
              <circle cx={currentF_X} cy={currentXC_Y} r="4.5" fill="#fbbf24" stroke="#0f172a" strokeWidth="1.5" />
              
              <text x={Math.min(currentF_X + 6, frWidth - 75)} y={Math.max(currentXC_Y - 4, 25)} fill="#fbbf24" fontSize="8" fontWeight="bold" fontFamily="monospace">
                ({freq}Hz, {xc.toFixed(1)}Ω)
              </text>
            </svg>

            <span className="text-[10px] font-mono text-slate-400">High frequency offers lower capacitive reactance</span>
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

              {/* Current Waveform i(t) (Amber, Leads by 90°) */}
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
                <ShieldCheck className="w-3.5 h-3.5" /> {t.pureLeadNote}
              </span>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                {t.energyStorageNote}
              </p>
            </div>

            <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-slate-300 space-y-1">
              <span className="font-bold text-purple-300 flex items-center gap-1.5">
                <BatteryCharging className="w-3.5 h-3.5" /> {t.zeroPowerNote}
              </span>
              <div className="text-[11px] font-mono text-sky-400 flex justify-between pt-1 border-t border-slate-800">
                <span>Peak Stored Energy W_max = ½CV_m²:</span>
                <span className="font-bold">{(maxStoredEnergyJ * 1000).toFixed(2)} mJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
