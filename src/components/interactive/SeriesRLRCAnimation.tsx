import React, { useState, useId } from 'react';
import { Sliders, RotateCcw, Activity, Zap, Compass, ArrowRightLeft, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface SeriesRLRCAnimationProps {
  currentLanguage: Language;
}

type CircuitMode = 'RL' | 'RC';

const TRANSLATIONS = {
  en: {
    title: 'Series RL and RC Circuits Laboratory',
    subtitle: 'Interactively explore series RL and RC AC circuits. Observe how inductance causes current to lag and capacitance causes current to lead, while calculating real-time impedance, power factor, and power components.',
    modeRL: 'Series RL Circuit (Inductive)',
    modeRC: 'Series RC Circuit (Capacitive)',
    voltageLabel: 'Supply Voltage V_rms (V)',
    resistanceLabel: 'Resistance R (Ω)',
    inductanceLabel: 'Inductance L (mH)',
    capacitanceLabel: 'Capacitance C (µF)',
    frequencyLabel: 'AC Frequency f (Hz)',
    reset: 'Reset Defaults',
    
    // Metrics
    metricReactance: 'Reactance',
    metricImpedance: 'Impedance Magnitude |Z|',
    metricPhaseAngle: 'Phase Angle φ',
    metricCurrent: 'Circuit Current I_rms',
    metricPowerFactor: 'Power Factor (cos φ)',
    metricActivePower: 'Active Power P (W)',
    metricReactivePower: 'Reactive Power Q (VAR)',
    metricApparentPower: 'Apparent Power S (VA)',
    metricVR: 'Resistor Voltage V_R',
    metricVX: 'Reactive Voltage Drop',

    lagging: 'Lagging (Current lags Voltage)',
    leading: 'Leading (Current leads Voltage)',
    
    // Sections
    schematicTitle: 'Circuit Schematic & Voltage Distribution',
    waveformsTitle: 'Instantaneous Waveforms: v(t) and i(t)',
    phasorTitle: 'Phasor Diagram & Voltage Triangle',
    impedanceTriangleTitle: 'Impedance Triangle (R, X, |Z|)',
    
    legendVoltage: 'Supply Voltage v(t)',
    legendCurrent: 'Circuit Current i(t)',
    legendVR: 'Resistor Voltage Drop v_R(t)',
    legendReactiveV: 'Reactive Component Drop',
    
    summaryTitle: 'Key Mathematical Relationships',
    summaryRL: 'For Series RL: Z = R + jXL  |  XL = 2πfL  |  |Z| = √(R² + XL²)  |  φ = tan⁻¹(XL / R) > 0  |  Current lags supply voltage by φ  |  PF = R / |Z| (Lagging)',
    summaryRC: 'For Series RC: Z = R - jXC  |  XC = 1/(2πfC)  |  |Z| = √(R² + XC²)  |  φ = -tan⁻¹(XC / R) < 0  |  Current leads supply voltage by |φ|  |  PF = R / |Z| (Leading)'
  },
  hi: {
    title: 'सीरीज RL एवं RC परिपथ प्रयोगशाला',
    subtitle: 'सीरीज RL और RC एसी परिपथों का अंतःक्रियात्मक अन्वेषण करें। देखें कि कैसे प्रेरकत्व धारा को पश्चगामी (लैग) और धारिता अग्रगामी (लीड) बनाती है, साथ ही प्रतिबाधा, पावर फैक्टर और शक्ति घटकों की वास्तविक समय गणना करें।',
    modeRL: 'सीरीज RL परिपथ (इंडक्टिव)',
    modeRC: 'सीरीज RC परिपथ (कैपेसिटिव)',
    voltageLabel: 'सप्लाई वोल्टेज V_rms (V)',
    resistanceLabel: 'प्रतिरोध R (Ω)',
    inductanceLabel: 'प्रेरकत्व L (mH)',
    capacitanceLabel: 'धारिता C (µF)',
    frequencyLabel: 'एसी आवृत्ति f (Hz)',
    reset: 'डिफ़ॉल्ट रीसेट',
    
    // Metrics
    metricReactance: 'रिएक्टेंस',
    metricImpedance: 'प्रतिबाधा परिमाण |Z|',
    metricPhaseAngle: 'फेज कोण φ',
    metricCurrent: 'परिपथ धारा I_rms',
    metricPowerFactor: 'पावर फैक्टर (cos φ)',
    metricActivePower: 'सक्रिय शक्ति P (W)',
    metricReactivePower: 'प्रतिक्रियाशील शक्ति Q (VAR)',
    metricApparentPower: 'आभासी शक्ति S (VA)',
    metricVR: 'प्रतिरोधक वोल्टेज V_R',
    metricVX: 'रिएक्टिव वोल्टेज पात',

    lagging: 'पश्चगामी (धारा वोल्टेज से लैग करती है)',
    leading: 'अग्रगामी (धारा वोल्टेज से लीड करती है)',
    
    // Sections
    schematicTitle: 'परिपथ योजनाबद्ध आरेख एवं वोल्टेज वितरण',
    waveformsTitle: 'तात्कालिक तरंगरूप: v(t) एवं i(t)',
    phasorTitle: 'फेजर आरेख एवं वोल्टेज त्रिभुज',
    impedanceTriangleTitle: 'प्रतिबाधा त्रिभुज (R, X, |Z|)',
    
    legendVoltage: 'सप्लाई वोल्टेज v(t)',
    legendCurrent: 'परिपथ धारा i(t)',
    legendVR: 'प्रतिरोधक वोल्टेज v_R(t)',
    legendReactiveV: 'रिएक्टिव घटक पात',
    
    summaryTitle: 'प्रमुख गणितीय संबंध',
    summaryRL: 'सीरीज RL हेतु: Z = R + jXL  |  XL = 2πfL  |  |Z| = √(R² + XL²)  |  φ = tan⁻¹(XL / R) > 0  |  धारा वोल्टेज से φ कोण से लैग करती है  |  PF = R / |Z| (Lagging)',
    summaryRC: 'सीरीज RC हेतु: Z = R - jXC  |  XC = 1/(2πfC)  |  |Z| = √(R² + XC²)  |  φ = -tan⁻¹(XC / R) < 0  |  धारा वोल्टेज से |φ| कोण से लीड करती है  |  PF = R / |Z| (Leading)'
  },
  bn: {
    title: 'সিরিজ RL ও RC সার্কিট ল্যাবরেটরি',
    subtitle: 'সিরিজ RL এবং RC এসি সার্কিটের ইন্টারেক্টিভ বিশ্লেষণ। ইন্ডাকট্যান্স কীভাবে কারেন্টকে পশ্চাৎপদ (ল্যাগ) এবং ক্যাপাসিট্যান্স কীভাবে অগ্রবর্তী (লিড) করে তা নিরীক্ষণ করুন, এবং ইম্পিড্যান্স, পাওয়ার ফ্যাক্টর ও পাওয়ারের রিয়েল-টাইম হিসাব দেখুন।',
    modeRL: 'সিরিজ RL সার্কিট (ইন্ডাক্টিভ)',
    modeRC: 'সিরিজ RC সার্কিট (ক্যাপাসিটিভ)',
    voltageLabel: 'সাপ্লাই ভোল্টেজ V_rms (V)',
    resistanceLabel: 'রোধ R (Ω)',
    inductanceLabel: 'ইন্ডাকট্যান্স L (mH)',
    capacitanceLabel: 'ক্যাপাসিট্যান্স C (µF)',
    frequencyLabel: 'এসি কম্পাঙ্ক f (Hz)',
    reset: 'ডিফল্ট রিসেট',
    
    // Metrics
    metricReactance: 'রিঅ্যাকট্যান্স',
    metricImpedance: 'ইম্পিড্যান্সের মান |Z|',
    metricPhaseAngle: 'ফেজ কোণ φ',
    metricCurrent: 'সার্কিট কারেন্ট I_rms',
    metricPowerFactor: 'পাওয়ার ফ্যাক্টর (cos φ)',
    metricActivePower: 'সক্রিয় ক্ষমতা P (W)',
    metricReactivePower: 'প্রতিক্রিয়াশীল ক্ষমতা Q (VAR)',
    metricApparentPower: 'আপাত ক্ষমতা S (VA)',
    metricVR: 'রোধের ভোল্টেজ V_R',
    metricVX: 'রিঅ্যাক্টিভ ভোল্টেজ ড্রপ',

    lagging: 'পশ্চাৎপদ (কারেন্ট ভোল্টেজ থেকে ল্যাগ করে)',
    leading: 'অগ্রগামী (কারেন্ট ভোল্টেজ থেকে লিড করে)',
    
    // Sections
    schematicTitle: 'সার্কিট ডায়াগ্রাম ও ভোল্টেজ বণ্টন',
    waveformsTitle: 'তাৎক্ষণিক তরঙ্গরূপ: v(t) ও i(t)',
    phasorTitle: 'ফেজর ডায়াগ্রাম ও ভোল্টেজ ত্রিভুজ',
    impedanceTriangleTitle: 'ইম্পিড্যান্স ত্রিভুজ (R, X, |Z|)',
    
    legendVoltage: 'সাপ্লাই ভোল্টেজ v(t)',
    legendCurrent: 'সার্কিট কারেন্ট i(t)',
    legendVR: 'রোধক ভোল্টেজ ড্রপ v_R(t)',
    legendReactiveV: 'রিঅ্যাক্টিভ ড্রপ',
    
    summaryTitle: 'মূল গাণিতিক সূত্রাবলী',
    summaryRL: 'সিরিজ RL এর জন্য: Z = R + jXL  |  XL = 2πfL  |  |Z| = √(R² + XL²)  |  φ = tan⁻¹(XL / R) > 0  |  কারেন্ট ভোল্টেজ থেকে φ কোণে ল্যাগ করে  |  PF = R / |Z| (Lagging)',
    summaryRC: 'সিরিজ RC এর জন্য: Z = R - jXC  |  XC = 1/(2πfC)  |  |Z| = √(R² + XC²)  |  φ = -tan⁻¹(XC / R) < 0  |  কারেন্ট ভোল্টেজ থেকে |φ| কোণে লিড করে  |  PF = R / |Z| (Leading)'
  }
};

export const SeriesRLRCAnimation: React.FC<SeriesRLRCAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const prefersReducedMotion = useReducedMotion();
  const baseId = useId();

  // State
  const [mode, setMode] = useState<CircuitMode>('RL');
  const [voltage, setVoltage] = useState<number>(230); // V rms
  const [resistance, setResistance] = useState<number>(30); // Ohms
  const [inductance, setInductance] = useState<number>(100); // mH (0.1 H)
  const [capacitance, setCapacitance] = useState<number>(80); // µF (80e-6 F)
  const [frequency, setFrequency] = useState<number>(50); // Hz

  const handleReset = () => {
    setVoltage(230);
    setResistance(30);
    setInductance(100);
    setCapacitance(80);
    setFrequency(50);
  };

  // Safe Mathematical Calculations
  const omega = 2 * Math.PI * Math.max(0.1, frequency);
  const L_H = Math.max(0.001, inductance) / 1000;
  const C_F = Math.max(0.1, capacitance) * 1e-6;
  const R = Math.max(0.1, resistance);
  const V = Math.max(1, voltage);

  let X = 0; // Reactance
  let phaseAngleDeg = 0; // degrees: positive for RL (lagging current), negative for RC (leading current)
  let isLagging = true;

  if (mode === 'RL') {
    X = omega * L_H; // XL = 2πfL
    phaseAngleDeg = Math.atan2(X, R) * (180 / Math.PI);
    isLagging = true;
  } else {
    X = 1 / (omega * C_F); // XC = 1 / (2πfC)
    phaseAngleDeg = -Math.atan2(X, R) * (180 / Math.PI);
    isLagging = false;
  }

  const Z_mag = Math.sqrt(R * R + X * X);
  const I_rms = Z_mag > 0 ? V / Z_mag : 0;
  const powerFactor = Z_mag > 0 ? R / Z_mag : 1;
  const activePower = I_rms * I_rms * R; // P = I²R
  const reactivePower = I_rms * I_rms * X; // Q = I²X
  const apparentPower = V * I_rms; // S = VI
  const VR_rms = I_rms * R;
  const VX_rms = I_rms * X;

  // Waveform SVG constants
  const svgWidth = 560;
  const svgHeight = 220;
  const midY = svgHeight / 2;
  const amplitudeV = 70;
  const amplitudeI = Math.min(65, (I_rms / Math.max(1, (V / 10))) * 60 + 20);

  // Generate sine wave points
  const wavePointsV: string[] = [];
  const wavePointsI: string[] = [];
  const wavePointsVR: string[] = [];
  const numPoints = 120;
  const phaseRad = (phaseAngleDeg * Math.PI) / 180;

  for (let i = 0; i <= numPoints; i++) {
    const x = (i / numPoints) * svgWidth;
    const theta = (i / numPoints) * 4 * Math.PI; // 2 full cycles
    // Supply voltage v(t) = Vm sin(wt)
    const yV = midY - amplitudeV * Math.sin(theta);
    // Current i(t) = Im sin(wt - phaseRad)
    const yI = midY - amplitudeI * Math.sin(theta - phaseRad);
    // Resistor voltage vR(t) is in phase with i(t)
    const yVR = midY - (amplitudeV * (VR_rms / V)) * Math.sin(theta - phaseRad);

    wavePointsV.push(`${x.toFixed(1)},${yV.toFixed(1)}`);
    wavePointsI.push(`${x.toFixed(1)},${yI.toFixed(1)}`);
    wavePointsVR.push(`${x.toFixed(1)},${yVR.toFixed(1)}`);
  }

  // Phasor Diagram Coordinates (Origin at center 140, 110)
  const phasorCx = 130;
  const phasorCy = 110;
  const phasorScale = 85 / Math.max(1, V);

  // Current phasor along angle -phaseRad relative to Voltage (or V at angle 0)
  // Let supply voltage V be along the positive x-axis (0°)
  const vEndX = phasorCx + V * phasorScale;
  const vEndY = phasorCy;

  // In phase with current: VR vector along angle -phaseRad
  const vrEndX = phasorCx + (VR_rms * phasorScale) * Math.cos(-phaseRad);
  const vrEndY = phasorCy - (VR_rms * phasorScale) * Math.sin(-phaseRad);

  // Reactive voltage vector (VL is +90° ahead of I, VC is -90° behind I)
  // Since VR is at angle -phaseRad:
  // VL is at angle (-phaseRad + π/2)
  // VC is at angle (-phaseRad - π/2)
  const vReactiveAngle = mode === 'RL' ? -phaseRad + Math.PI / 2 : -phaseRad - Math.PI / 2;
  const vReactEndX = vrEndX + (VX_rms * phasorScale) * Math.cos(vReactiveAngle);
  const vReactEndY = vrEndY - (VX_rms * phasorScale) * Math.sin(vReactiveAngle);

  // Current phasor (normalized for display)
  const iDisplayLen = 65;
  const iEndX = phasorCx + iDisplayLen * Math.cos(-phaseRad);
  const iEndY = phasorCy - iDisplayLen * Math.sin(-phaseRad);

  return (
    <InteractiveSimulationCard
      title={t.title}
      subtitle={t.subtitle}
      badgeText={mode === 'RL' ? 'Series RL' : 'Series RC'}
    >
      <div className="space-y-6">
        {/* Mode Selector */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-100 dark:bg-slate-800/90 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Select Circuit:
            </span>
            <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-900 rounded-lg">
              <button
                type="button"
                id={`${baseId}-mode-rl`}
                onClick={() => setMode('RL')}
                aria-pressed={mode === 'RL'}
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                  mode === 'RL'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-amber-600'
                }`}
              >
                {t.modeRL}
              </button>
              <button
                type="button"
                id={`${baseId}-mode-rc`}
                onClick={() => setMode('RC')}
                aria-pressed={mode === 'RC'}
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                  mode === 'RC'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:text-cyan-600'
                }`}
              >
                {t.modeRC}
              </button>
            </div>
          </div>

          <button
            type="button"
            id={`${baseId}-reset-btn`}
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 rounded-lg border border-slate-300 dark:border-slate-600 transition-colors shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {t.reset}
          </button>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
              {mode === 'RL' ? 'Inductive Reactance XL' : 'Capacitive Reactance XC'}
            </span>
            <div className="text-lg font-extrabold text-indigo-600 dark:text-indigo-400 mt-0.5">
              {X.toFixed(2)} <span className="text-xs font-medium">Ω</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">
              {mode === 'RL' ? 'XL = 2πfL' : 'XC = 1/(2πfC)'}
            </span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
              {t.metricImpedance}
            </span>
            <div className="text-lg font-extrabold text-blue-600 dark:text-blue-400 mt-0.5">
              {Z_mag.toFixed(2)} <span className="text-xs font-medium">Ω</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">
              |Z| = √(R² + {mode === 'RL' ? 'XL²' : 'XC²'})
            </span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
              {t.metricCurrent}
            </span>
            <div className="text-lg font-extrabold text-emerald-600 dark:text-emerald-400 mt-0.5">
              {I_rms.toFixed(2)} <span className="text-xs font-medium">A</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">
              I = V / |Z|
            </span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
              {t.metricPowerFactor}
            </span>
            <div className="text-lg font-extrabold text-amber-600 dark:text-amber-400 mt-0.5">
              {powerFactor.toFixed(3)}
            </div>
            <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 block mt-0.5">
              {isLagging ? 'Lagging (RL)' : 'Leading (RC)'} (φ = {Math.abs(phaseAngleDeg).toFixed(1)}°)
            </span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
              {t.metricActivePower}
            </span>
            <div className="text-base font-bold text-slate-800 dark:text-slate-100 mt-0.5">
              {activePower.toFixed(1)} <span className="text-xs font-medium">W</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">P = VI cos φ = I²R</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
              {t.metricReactivePower}
            </span>
            <div className="text-base font-bold text-purple-600 dark:text-purple-400 mt-0.5">
              {reactivePower.toFixed(1)} <span className="text-xs font-medium">VAR</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">Q = VI sin |φ| = I²X</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
              {t.metricApparentPower}
            </span>
            <div className="text-base font-bold text-cyan-600 dark:text-cyan-400 mt-0.5">
              {apparentPower.toFixed(1)} <span className="text-xs font-medium">VA</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">S = V · I = √(P² + Q²)</span>
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
              Voltage Drops (V_R & {mode === 'RL' ? 'V_L' : 'V_C'})
            </span>
            <div className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
              V_R: {VR_rms.toFixed(1)}V | {mode === 'RL' ? 'V_L' : 'V_C'}: {VX_rms.toFixed(1)}V
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">√(V_R² + V_X²) = {Math.sqrt(VR_rms * VR_rms + VX_rms * VX_rms).toFixed(1)}V</span>
          </div>
        </div>

        {/* Visualizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Circuit Schematic & Phasor Diagram */}
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-white space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                {t.phasorTitle} & Schematic
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                Z = {R.toFixed(1)} {mode === 'RL' ? '+' : '-'} j{X.toFixed(1)} Ω
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {/* Circuit Schematic SVG */}
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 flex flex-col items-center">
                <span className="text-[10px] font-semibold text-slate-400 mb-1">
                  Series {mode} Schematic
                </span>
                <svg viewBox="0 0 200 130" className="w-full h-28" aria-label={`Series ${mode} Circuit Schematic`}>
                  {/* Outer wire loop */}
                  <rect x="20" y="25" width="160" height="80" rx="8" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="none" />
                  
                  {/* AC Source symbol on left */}
                  <circle cx="20" cy="65" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                  <path d="M 12 65 Q 16 57 20 65 T 28 65" fill="none" stroke="#38bdf8" strokeWidth="2" />
                  <text x="20" y="93" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">~ {V}V</text>
                  
                  {/* Resistor on top wire */}
                  <rect x="55" y="19" width="36" height="12" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" rx="2" />
                  <text x="73" y="15" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">R={R}Ω</text>
                  <text x="73" y="28" textAnchor="middle" fill="#ffffff" fontSize="8">VR={VR_rms.toFixed(0)}V</text>
                  
                  {/* Inductor or Capacitor on top/right */}
                  {mode === 'RL' ? (
                    <g>
                      {/* Inductor coil loops */}
                      <path d="M 115 25 Q 120 15 125 25 Q 130 15 135 25 Q 140 15 145 25" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                      <text x="130" y="15" textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold">L={inductance}mH</text>
                      <text x="130" y="38" textAnchor="middle" fill="#e9d5ff" fontSize="8">VL={VX_rms.toFixed(0)}V</text>
                    </g>
                  ) : (
                    <g>
                      {/* Capacitor parallel plates */}
                      <line x1="124" y1="16" x2="124" y2="34" stroke="#06b6d4" strokeWidth="3" />
                      <line x1="132" y1="16" x2="132" y2="34" stroke="#06b6d4" strokeWidth="3" />
                      <text x="128" y="13" textAnchor="middle" fill="#22d3ee" fontSize="9" fontWeight="bold">C={capacitance}µF</text>
                      <text x="128" y="44" textAnchor="middle" fill="#a5f3fc" fontSize="8">VC={VX_rms.toFixed(0)}V</text>
                    </g>
                  )}

                  {/* Current flow indicator */}
                  <path d="M 75 105 L 125 105" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                  <polygon points="128,105 122,101 122,109" fill="#10b981" />
                  <text x="100" y="120" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">I = {I_rms.toFixed(2)} A</text>
                </svg>
              </div>

              {/* Phasor Diagram SVG */}
              <div className="bg-slate-950 p-2 rounded-lg border border-slate-800 flex flex-col items-center">
                <span className="text-[10px] font-semibold text-slate-400 mb-1">
                  Voltage & Current Phasors
                </span>
                <svg viewBox="0 0 240 180" className="w-full h-36" aria-label="Phasor diagram">
                  {/* Coordinate Axes */}
                  <line x1="20" y1="90" x2="220" y2="90" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="120" y1="10" x2="120" y2="170" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                  
                  {/* Origin */}
                  <circle cx="120" cy="90" r="3" fill="#94a3b8" />
                  <text x="112" y="103" fill="#64748b" fontSize="8">0</text>

                  {/* Current vector I along (0 deg or reference) - Let's place I on horizontal axis */}
                  {/* VR is in phase with I (along horizontal +x) */}
                  <line x1="120" y1="90" x2="190" y2="90" stroke="#f59e0b" strokeWidth="2.5" />
                  <polygon points="194,90 187,86 187,94" fill="#f59e0b" />
                  <text x="175" y="82" fill="#fbbf24" fontSize="9" fontWeight="bold">V_R</text>

                  {/* Reactive Voltage vector: +90 deg (up) for VL, -90 deg (down) for VC */}
                  {mode === 'RL' ? (
                    <g>
                      {/* VL along vertical upwards */}
                      <line x1="190" y1="90" x2="190" y2="35" stroke="#a855f7" strokeWidth="2.5" />
                      <polygon points="190,30 186,37 194,37" fill="#a855f7" />
                      <text x="198" y="55" fill="#c084fc" fontSize="9" fontWeight="bold">+j V_L</text>
                      
                      {/* Resultant Supply Voltage V_S */}
                      <line x1="120" y1="90" x2="190" y2="35" stroke="#38bdf8" strokeWidth="3" />
                      <polygon points="194,32 185,35 189,43" fill="#38bdf8" />
                      <text x="145" y="55" fill="#38bdf8" fontSize="10" fontWeight="bold">V_S ({V}V)</text>

                      {/* Phase angle arc φ */}
                      <path d="M 150 90 A 30 30 0 0 0 144 70" fill="none" stroke="#fbbf24" strokeWidth="1.5" />
                      <text x="156" y="80" fill="#fbbf24" fontSize="9" fontWeight="bold">+φ ({phaseAngleDeg.toFixed(1)}°)</text>
                      <text x="120" y="165" textAnchor="middle" fill="#34d399" fontSize="9">Current I lags V_S by φ</text>
                    </g>
                  ) : (
                    <g>
                      {/* VC along vertical downwards */}
                      <line x1="190" y1="90" x2="190" y2="145" stroke="#06b6d4" strokeWidth="2.5" />
                      <polygon points="190,150 186,143 194,143" fill="#06b6d4" />
                      <text x="198" y="130" fill="#22d3ee" fontSize="9" fontWeight="bold">-j V_C</text>
                      
                      {/* Resultant Supply Voltage V_S */}
                      <line x1="120" y1="90" x2="190" y2="145" stroke="#38bdf8" strokeWidth="3" />
                      <polygon points="194,148 189,137 185,145" fill="#38bdf8" />
                      <text x="145" y="130" fill="#38bdf8" fontSize="10" fontWeight="bold">V_S ({V}V)</text>

                      {/* Phase angle arc φ */}
                      <path d="M 150 90 A 30 30 0 0 1 144 110" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                      <text x="156" y="105" fill="#22d3ee" fontSize="9" fontWeight="bold">-φ ({Math.abs(phaseAngleDeg).toFixed(1)}°)</text>
                      <text x="120" y="165" textAnchor="middle" fill="#34d399" fontSize="9">Current I leads V_S by |φ|</text>
                    </g>
                  )}
                </svg>
              </div>
            </div>
          </div>

          {/* Waveforms & Phase Relationship */}
          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-white space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                {t.waveformsTitle}
              </span>
              <span className="text-[11px] font-medium text-slate-300">
                f = {frequency} Hz (T = {(1000/frequency).toFixed(1)} ms)
              </span>
            </div>

            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-40" aria-label="AC Voltage and Current Waveforms">
                {/* Center Baseline */}
                <line x1="0" y1={midY} x2={svgWidth} y2={midY} stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Voltage Waveform v(t) */}
                <polyline
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  points={wavePointsV.join(' ')}
                />

                {/* Current Waveform i(t) */}
                <polyline
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeDasharray={prefersReducedMotion ? 'none' : 'none'}
                  points={wavePointsI.join(' ')}
                />

                {/* Resistor Voltage Drop v_R(t) */}
                <polyline
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                  strokeDasharray="2 2"
                  points={wavePointsVR.join(' ')}
                />

                {/* Phase shift visual marker */}
                <text x="20" y="25" fill="#38bdf8" fontSize="11" fontWeight="bold">
                  v(t) = V_m sin(ωt)
                </text>
                <text x="200" y="25" fill="#10b981" fontSize="11" fontWeight="bold">
                  i(t) = I_m sin(ωt {mode === 'RL' ? '-' : '+'} {Math.abs(phaseAngleDeg).toFixed(1)}°)
                </text>
              </svg>

              {/* Waveform Legend */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs mt-2 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-3 h-0.5 bg-cyan-400 rounded-full" />
                  {t.legendVoltage}
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-3 h-0.5 bg-emerald-400 rounded-full" />
                  {t.legendCurrent}
                </span>
                <span className="flex items-center gap-1.5 text-amber-400">
                  <span className="w-3 h-0.5 bg-amber-400 rounded-full border-t border-dashed" />
                  {t.legendVR}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Controls Panel (Hidden in Print) */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4 print:hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
            <Sliders className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Interactive Parameter Adjustments</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Voltage Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <label htmlFor={`${baseId}-voltage-input`}>{t.voltageLabel}</label>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">{voltage} V</span>
              </div>
              <input
                id={`${baseId}-voltage-input`}
                type="range"
                min="20"
                max="400"
                step="5"
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                aria-label={t.voltageLabel}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />
            </div>

            {/* Resistance Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <label htmlFor={`${baseId}-resistance-input`}>{t.resistanceLabel}</label>
                <span className="font-bold text-amber-600 dark:text-amber-400">{resistance} Ω</span>
              </div>
              <input
                id={`${baseId}-resistance-input`}
                type="range"
                min="5"
                max="200"
                step="5"
                value={resistance}
                onChange={(e) => setResistance(Number(e.target.value))}
                aria-label={t.resistanceLabel}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>

            {/* Inductance or Capacitance Slider based on mode */}
            {mode === 'RL' ? (
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                  <label htmlFor={`${baseId}-inductance-input`}>{t.inductanceLabel}</label>
                  <span className="font-bold text-purple-600 dark:text-purple-400">{inductance} mH</span>
                </div>
                <input
                  id={`${baseId}-inductance-input`}
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={inductance}
                  onChange={(e) => setInductance(Number(e.target.value))}
                  aria-label={t.inductanceLabel}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                  <label htmlFor={`${baseId}-capacitance-input`}>{t.capacitanceLabel}</label>
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">{capacitance} µF</span>
                </div>
                <input
                  id={`${baseId}-capacitance-input`}
                  type="range"
                  min="5"
                  max="300"
                  step="5"
                  value={capacitance}
                  onChange={(e) => setCapacitance(Number(e.target.value))}
                  aria-label={t.capacitanceLabel}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
              </div>
            )}

            {/* Frequency Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                <label htmlFor={`${baseId}-frequency-input`}>{t.frequencyLabel}</label>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">{frequency} Hz</span>
              </div>
              <input
                id={`${baseId}-frequency-input`}
                type="range"
                min="10"
                max="200"
                step="5"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                aria-label={t.frequencyLabel}
                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>
          </div>
        </div>

        {/* Summary Equations Card */}
        <div className="p-3 bg-slate-100 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900 dark:text-white block mb-0.5">{t.summaryTitle}</span>
            <p className="font-mono text-[11px] leading-relaxed">
              {mode === 'RL' ? t.summaryRL : t.summaryRC}
            </p>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
