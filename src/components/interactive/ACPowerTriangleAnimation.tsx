import React, { useState, useId } from 'react';
import { RotateCcw, Activity, Zap, Compass, Triangle, Layers, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ACPowerTriangleAnimationProps {
  currentLanguage: Language;
}

type LoadType = 'resistive' | 'inductive' | 'capacitive';

const TRANSLATIONS = {
  en: {
    title: 'AC Power: Active, Reactive & Apparent Power Simulator',
    subtitle: 'Interact with sinusoidal AC power dynamics. Vary Voltage, Current, and Power Factor across Resistive, Inductive, and Capacitive loads to visualize the Power Triangle, Complex Power, and phase displacement.',
    voltageLabel: 'RMS Voltage V (V)',
    currentLabel: 'RMS Current I (A)',
    pfLabel: 'Power Factor (cos φ)',
    loadTypeLabel: 'Load Impedance Characteristic',
    resistiveBtn: 'Pure Resistive (PF = 1.0)',
    inductiveBtn: 'Inductive Load (Lagging)',
    capacitiveBtn: 'Capacitive Load (Leading)',
    reset: 'Reset Defaults',

    // Live Metrics
    activePower: 'Active / Real Power (P)',
    reactivePower: 'Reactive Power (Q)',
    apparentPower: 'Apparent Power (S)',
    powerFactor: 'Power Factor (PF)',
    phaseAngle: 'Phase Angle (φ)',
    complexPower: 'Complex Power (S)',

    // Descriptions
    powerTriangleTitle: 'Power Triangle Geometry',
    phasorTitle: 'Voltage & Current Phasor Relationship',
    physicsTitle: 'Physics & Energy Flow Analysis',

    resistiveSummary: 'Unity Power Factor (φ = 0°): Voltage and current are in phase. All supplied electrical energy is converted into real work or heat (P = S, Q = 0 VAR). No reactive oscillation with magnetic/dielectric fields.',
    inductiveSummary: 'Lagging Power Factor (φ > 0°): Current lags voltage. Inductor stores energy in magnetic field during first quarter cycle and returns it during next quarter. Reactive power is positive (Q > 0 VAR absorbed by inductive field).',
    capacitiveSummary: 'Leading Power Factor (φ < 0°): Current leads voltage. Capacitor stores energy in electrostatic field and releases it back. Reactive power is negative by IEEE/IEC convention (Q < 0 VAR delivered to system).',

    formulaTitle: 'Governing AC Power Equations',
    formulaText: 'S = V · I (VA)  |  P = V · I · cos φ = S · cos φ (W)  |  Q = V · I · sin φ = S · sin φ (VAR)  |  |S| = √(P² + Q²)  |  S = P + jQ  |  PF = P / S = cos φ'
  },
  hi: {
    title: 'एसी पावर: सक्रिय, प्रतिक्रियाशील एवं आभासी शक्ति सिम्युलेटर',
    subtitle: 'साइनसॉइडल एसी पावर गतिशीलता का अन्वेषण करें। प्रतिरोधक, प्रेरक और संधारित्र भार पर वोल्टेज, धारा और पावर फैक्टर बदलकर पावर त्रिभुज, सम्मिश्र शक्ति और फेज विस्थापन को देखें।',
    voltageLabel: 'RMS वोल्टेज V (V)',
    currentLabel: 'RMS धारा I (A)',
    pfLabel: 'पावर फैक्टर (cos φ)',
    loadTypeLabel: 'भार प्रतिबाधा विशेषता',
    resistiveBtn: 'शुद्ध प्रतिरोधक (PF = 1.0)',
    inductiveBtn: 'इंडक्टिव भार (लैगिंग)',
    capacitiveBtn: 'कैपेसिटिव भार (लीडिंग)',
    reset: 'डिफ़ॉल्ट रीसेट',

    // Live Metrics
    activePower: 'सक्रिय / वास्तविक शक्ति (P)',
    reactivePower: 'प्रतिक्रियाशील शक्ति (Q)',
    apparentPower: 'आभासी शक्ति (S)',
    powerFactor: 'पावर फैक्टर (PF)',
    phaseAngle: 'फेज कोण (φ)',
    complexPower: 'सम्मिश्र शक्ति (S)',

    // Descriptions
    powerTriangleTitle: 'पावर त्रिभुज ज्यामिति',
    phasorTitle: 'वोल्टेज एवं धारा फेजर संबंध',
    physicsTitle: 'भौतिकी एवं ऊर्जा प्रवाह विश्लेषण',

    resistiveSummary: 'यूनिटी पावर फैक्टर (φ = 0°): वोल्टेज और धारा समान फेज में हैं। आपूर्ति की गई समस्त विद्युत ऊर्जा उपयोगी कार्य या ऊष्मा में परिवर्तित होती है (P = S, Q = 0 VAR)।',
    inductiveSummary: 'लैगिंग पावर फैक्टर (φ > 0°): धारा वोल्टेज से पिछड़ती है। इंडक्टर चुंबकीय क्षेत्र में ऊर्जा संचित और मुक्त करता है। रिएक्टिव पावर धनात्मक होती है (Q > 0 VAR)।',
    capacitiveSummary: 'लीडिंग पावर फैक्टर (φ < 0°): धारा वोल्टेज से आगे रहती है। कैपेसिटर विद्युत स्थैतिक क्षेत्र में ऊर्जा का आदान-प्रदान करता है (Q < 0 VAR)।',

    formulaTitle: 'एसी शक्ति के मुख्य समीकरण',
    formulaText: 'S = V · I (VA)  |  P = V · I · cos φ (W)  |  Q = V · I · sin φ (VAR)  |  |S| = √(P² + Q²)  |  S = P + jQ  |  PF = P / S = cos φ'
  },
  bn: {
    title: 'এসি পাওয়ার: সক্রিয়, রিঅ্যাক্টিভ ও অ্যাপারেন্ট পাওয়ার সিমুলেটর',
    subtitle: 'সাইন তরঙ্গীয় এসি পাওয়ারের গতিশীলতা বিশ্লেষণ করুন। রোধক, আবেশক ও ধারক লোডের জন্য ভোল্টেজ, কারেন্ট ও পাওয়ার ফ্যাক্টর পরিবর্তন করে পাওয়ার ত্রিভুজ, জটিল শক্তি ও ফেজ পার্থক্য পর্যবেক্ষণ করুন।',
    voltageLabel: 'RMS ভোল্টেজ V (V)',
    currentLabel: 'RMS কারেন্ট I (A)',
    pfLabel: 'পাওয়ার ফ্যাক্টর (cos φ)',
    loadTypeLabel: 'লোড ইম্পিড্যান্স বৈশিষ্ট্য',
    resistiveBtn: 'বিশুদ্ধ রোধক (PF = ১.০)',
    inductiveBtn: 'ইন্ডাক্টিভ লোড (ল্যাগিং)',
    capacitiveBtn: 'ক্যাপাসিটিভ লোড (লিডিং)',
    reset: 'ডিফল্ট রিসেট',

    // Live Metrics
    activePower: 'অ্যাক্টিভ / বাস্তব ক্ষমতা (P)',
    reactivePower: 'রিঅ্যাক্টিভ ক্ষমতা (Q)',
    apparentPower: 'অ্যাপারেন্ট / আপাত ক্ষমতা (S)',
    powerFactor: 'পাওয়ার ফ্যাক্টর (PF)',
    phaseAngle: 'ফেজ কোণ (φ)',
    complexPower: 'কমপ্লেক্স পাওয়ার (S)',

    // Descriptions
    powerTriangleTitle: 'পাওয়ার ত্রিভুজ জ্যামিতি',
    phasorTitle: 'ভোল্টেজ ও কারেন্ট ফেজার সম্পর্ক',
    physicsTitle: 'পদার্থবিজ্ঞান ও শক্তি প্রবাহ বিশ্লেষণ',

    resistiveSummary: 'ইউনিটি পাওয়ার ফ্যাক্টর (φ = ০°): ভোল্টেজ ও কারেন্ট একই ফেজে থাকে। সরবরাহকৃত সমস্ত শক্তি সরাসরি দরকারী কাজ বা তাপে রূপান্তরিত হয় (P = S, Q = ০ VAR)।',
    inductiveSummary: 'ল্যাগিং পাওয়ার ফ্যাক্টর (φ > ০°): কারেন্ট ভোল্টেজ থেকে পিছিয়ে থাকে। ইন্ডাক্টর চুম্বক ক্ষেত্রে শক্তি সঞ্চয় ও বিনিময় করে (Q > ০ VAR ধনাত্মক)।',
    capacitiveSummary: 'লিডিং পাওয়ার ফ্যাক্টর (φ < ০°): কারেন্ট ভোল্টেজ থেকে এগিয়ে থাকে। ক্যাপাসিটর ইলেকট্রোস্ট্যাটিক ক্ষেত্রে শক্তি বিনিময় করে (Q < ০ VAR ঋণাত্মক)।',

    formulaTitle: 'এসি পাওয়ারের মূল সমীকরণসমূহ',
    formulaText: 'S = V · I (VA)  |  P = V · I · cos φ (W)  |  Q = V · I · sin φ (VAR)  |  |S| = √(P² + Q²)  |  S = P + jQ  |  PF = P / S = cos φ'
  }
};

export const ACPowerTriangleAnimation: React.FC<ACPowerTriangleAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage];
  const prefersReducedMotion = useReducedMotion();

  // Control States
  const [voltage, setVoltage] = useState<number>(230); // Volts RMS
  const [current, setCurrent] = useState<number>(10);   // Amperes RMS
  const [loadType, setLoadType] = useState<LoadType>('inductive');
  const [rawPf, setRawPf] = useState<number>(0.80);

  const voltageInputId = useId();
  const currentInputId = useId();
  const pfInputId = useId();

  // Active Effective PF and Angle
  const effectivePf = loadType === 'resistive' ? 1.0 : Math.max(0.05, Math.min(0.999, rawPf));
  const phiRad = Math.acos(effectivePf);
  const phiDeg = (phiRad * 180) / Math.PI;

  // Power Calculations
  const apparentPowerS = voltage * current; // VA
  const activePowerP = apparentPowerS * effectivePf; // W
  const sinPhi = Math.sin(phiRad);
  const reactivePowerMagnitude = apparentPowerS * sinPhi; // VAR
  
  // Signed Q based on load type
  const signedQ = loadType === 'resistive' ? 0 : loadType === 'inductive' ? reactivePowerMagnitude : -reactivePowerMagnitude;

  // Reset Handler
  const handleReset = () => {
    setVoltage(230);
    setCurrent(10);
    setLoadType('inductive');
    setRawPf(0.80);
  };

  // SVG Dimension Constants for Power Triangle
  // Triangle base width mapped to P, height to Q
  const triangleWidth = 260;
  const scale = triangleWidth / Math.max(1, apparentPowerS);
  const pPx = Math.max(20, Math.min(260, activePowerP * scale));
  const qPx = Math.min(180, reactivePowerMagnitude * scale);

  const originX = 60;
  const originY = loadType === 'capacitive' ? 50 : 180;
  const cornerX = originX + pPx;
  const cornerY = originY;
  const tipX = cornerX;
  const tipY = loadType === 'capacitive' ? originY + qPx : originY - qPx;

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
      {/* Interactive Controls Section */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 mb-6 text-slate-100 shadow-md">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
          <Activity className="w-5 h-5 text-cyan-400" />
          <h3 className="font-semibold text-cyan-200 text-sm tracking-wide uppercase">
            {currentLanguage === 'en' ? 'Interactive AC Power Parameters' : currentLanguage === 'hi' ? 'इंटरैक्टिव एसी पावर पैरामीटर' : 'ইন্টারেক্টিভ এসি পাওয়ার প্যারামিটার'}
          </h3>
        </div>

        {/* Load Type Selector */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            {t.loadTypeLabel}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setLoadType('resistive')}
              aria-pressed={loadType === 'resistive'}
              className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all border ${
                loadType === 'resistive'
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-sm'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.resistiveBtn}
            </button>
            <button
              type="button"
              onClick={() => setLoadType('inductive')}
              aria-pressed={loadType === 'inductive'}
              className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all border ${
                loadType === 'inductive'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.inductiveBtn}
            </button>
            <button
              type="button"
              onClick={() => setLoadType('capacitive')}
              aria-pressed={loadType === 'capacitive'}
              className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all border ${
                loadType === 'capacitive'
                  ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-sm'
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {t.capacitiveBtn}
            </button>
          </div>
        </div>

        {/* Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Voltage Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor={voltageInputId} className="text-xs font-semibold text-slate-300">
                {t.voltageLabel}
              </label>
              <span className="text-xs font-mono font-bold text-cyan-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                {voltage} V
              </span>
            </div>
            <input
              id={voltageInputId}
              type="range"
              min="50"
              max="480"
              step="5"
              value={voltage}
              onChange={(e) => setVoltage(parseFloat(e.target.value))}
              aria-label={t.voltageLabel}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>50 V</span>
              <span>230 V</span>
              <span>480 V</span>
            </div>
          </div>

          {/* Current Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor={currentInputId} className="text-xs font-semibold text-slate-300">
                {t.currentLabel}
              </label>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                {current.toFixed(1)} A
              </span>
            </div>
            <input
              id={currentInputId}
              type="range"
              min="1"
              max="50"
              step="0.5"
              value={current}
              onChange={(e) => setCurrent(parseFloat(e.target.value))}
              aria-label={t.currentLabel}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>1.0 A</span>
              <span>10.0 A</span>
              <span>50.0 A</span>
            </div>
          </div>

          {/* Power Factor Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor={pfInputId} className="text-xs font-semibold text-slate-300">
                {t.pfLabel}
              </label>
              <span className="text-xs font-mono font-bold text-amber-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                {effectivePf.toFixed(2)} {loadType === 'inductive' ? 'Lag' : loadType === 'capacitive' ? 'Lead' : 'Unity'}
              </span>
            </div>
            <input
              id={pfInputId}
              type="range"
              min="0.10"
              max="0.99"
              step="0.01"
              disabled={loadType === 'resistive'}
              value={rawPf}
              onChange={(e) => setRawPf(parseFloat(e.target.value))}
              aria-label={t.pfLabel}
              className={`w-full h-2 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                loadType === 'resistive' ? 'bg-slate-800 opacity-50 cursor-not-allowed' : 'bg-slate-700'
              }`}
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>0.10 (Poor)</span>
              <span>0.80 (Standard)</span>
              <span>1.00 (Ideal)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Calculated Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {/* Active Power P */}
        <div className="bg-slate-900 border border-emerald-500/30 rounded-xl p-3 text-center shadow-sm">
          <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1">
            {t.activePower}
          </div>
          <div className="text-lg font-mono font-extrabold text-emerald-300">
            {activePowerP >= 1000 ? `${(activePowerP / 1000).toFixed(2)} kW` : `${activePowerP.toFixed(1)} W`}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">P = VI cos φ</div>
        </div>

        {/* Reactive Power Q */}
        <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-3 text-center shadow-sm">
          <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-1">
            {t.reactivePower}
          </div>
          <div className={`text-lg font-mono font-extrabold ${loadType === 'capacitive' ? 'text-purple-300' : 'text-cyan-300'}`}>
            {Math.abs(signedQ) >= 1000
              ? `${(signedQ / 1000).toFixed(2)} kVAR`
              : `${signedQ.toFixed(1)} VAR`}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">Q = VI sin φ</div>
        </div>

        {/* Apparent Power S */}
        <div className="bg-slate-900 border border-amber-500/30 rounded-xl p-3 text-center shadow-sm">
          <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1">
            {t.apparentPower}
          </div>
          <div className="text-lg font-mono font-extrabold text-amber-300">
            {apparentPowerS >= 1000 ? `${(apparentPowerS / 1000).toFixed(2)} kVA` : `${apparentPowerS.toFixed(1)} VA`}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">S = V · I</div>
        </div>

        {/* Power Factor PF */}
        <div className="bg-slate-900 border border-blue-500/30 rounded-xl p-3 text-center shadow-sm">
          <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mb-1">
            {t.powerFactor}
          </div>
          <div className="text-lg font-mono font-extrabold text-blue-300">
            {effectivePf.toFixed(3)}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">
            {loadType === 'inductive' ? 'Lagging' : loadType === 'capacitive' ? 'Leading' : 'Unity'}
          </div>
        </div>

        {/* Phase Angle Phi */}
        <div className="bg-slate-900 border border-indigo-500/30 rounded-xl p-3 text-center shadow-sm">
          <div className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider mb-1">
            {t.phaseAngle}
          </div>
          <div className="text-lg font-mono font-extrabold text-indigo-300">
            {loadType === 'capacitive' ? `-${phiDeg.toFixed(1)}°` : `${phiDeg.toFixed(1)}°`}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">φ = cos⁻¹(PF)</div>
        </div>

        {/* Complex Power S = P + jQ */}
        <div className="bg-slate-900 border border-rose-500/30 rounded-xl p-3 text-center shadow-sm">
          <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1">
            {t.complexPower}
          </div>
          <div className="text-xs font-mono font-bold text-rose-300 truncate mt-1">
            {activePowerP.toFixed(0)} {signedQ >= 0 ? `+ j${signedQ.toFixed(0)}` : `- j${Math.abs(signedQ).toFixed(0)}`}
          </div>
          <div className="text-[10px] font-mono text-slate-400 mt-0.5">S = P + jQ (VA)</div>
        </div>
      </div>

      {/* Visual Diagrams: Power Triangle & Phasor Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        {/* Visual 1: Power Triangle */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2 w-full pb-2 border-b border-slate-800">
            <Triangle className="w-4 h-4 text-amber-400" />
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              {t.powerTriangleTitle} ({loadType === 'inductive' ? 'Lagging: Q > 0' : loadType === 'capacitive' ? 'Leading: Q < 0' : 'Resistive: Q = 0'})
            </h4>
          </div>

          <svg viewBox="0 0 380 230" className="w-full max-w-sm h-52 my-1" aria-label="Interactive Power Triangle">
            <defs>
              <marker id="arrow-emerald" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#10b981" />
              </marker>
              <marker id="arrow-cyan" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#06b6d4" />
              </marker>
              <marker id="arrow-purple" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#a855f7" />
              </marker>
              <marker id="arrow-amber" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L7,3 z" fill="#f59e0b" />
              </marker>
            </defs>

            {/* Grid & Axis References */}
            <line x1="30" y1={originY} x2="350" y2={originY} stroke="#334155" strokeDasharray="3,3" strokeWidth="1" />
            <text x="350" y={originY - 6} textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">+Real Axis (W)</text>

            {loadType !== 'resistive' && (
              <>
                {/* Shaded Power Triangle Area */}
                <polygon
                  points={`${originX},${originY} ${cornerX},${cornerY} ${tipX},${tipY}`}
                  fill={loadType === 'inductive' ? 'rgba(6, 182, 212, 0.12)' : 'rgba(168, 85, 247, 0.12)'}
                  stroke="none"
                />

                {/* Right-angle marker at corner */}
                <path
                  d={
                    loadType === 'inductive'
                      ? `M ${cornerX - 12} ${cornerY} L ${cornerX - 12} ${cornerY - 12} L ${cornerX} ${cornerY - 12}`
                      : `M ${cornerX - 12} ${cornerY} L ${cornerX - 12} ${cornerY + 12} L ${cornerX} ${cornerY + 12}`
                  }
                  fill="none"
                  stroke="#475569"
                  strokeWidth="1.5"
                />

                {/* Phase Angle Arc φ */}
                <path
                  d={
                    loadType === 'inductive'
                      ? `M ${originX + 35} ${originY} A 35 35 0 0 0 ${originX + 35 * Math.cos(phiRad)} ${originY - 35 * Math.sin(phiRad)}`
                      : `M ${originX + 35} ${originY} A 35 35 0 0 1 ${originX + 35 * Math.cos(phiRad)} ${originY + 35 * Math.sin(phiRad)}`
                  }
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                />
                <text
                  x={originX + 45}
                  y={loadType === 'inductive' ? originY - 10 : originY + 16}
                  fill="#fbbf24"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  φ = {phiDeg.toFixed(1)}°
                </text>
              </>
            )}

            {/* Base Vector: Active Power P (Emerald) */}
            <line
              x1={originX}
              y1={originY}
              x2={cornerX}
              y2={cornerY}
              stroke="#10b981"
              strokeWidth="3.5"
              markerEnd="url(#arrow-emerald)"
            />
            <text
              x={originX + pPx / 2}
              y={loadType === 'capacitive' ? originY - 10 : originY + 18}
              textAnchor="middle"
              fill="#34d399"
              fontSize="11"
              fontWeight="bold"
              fontFamily="monospace"
            >
              P = {activePowerP.toFixed(0)} W
            </text>

            {/* Vertical Vector: Reactive Power Q */}
            {loadType !== 'resistive' && (
              <>
                <line
                  x1={cornerX}
                  y1={cornerY}
                  x2={tipX}
                  y2={tipY}
                  stroke={loadType === 'inductive' ? '#06b6d4' : '#a855f7'}
                  strokeWidth="3.5"
                  markerEnd={loadType === 'inductive' ? 'url(#arrow-cyan)' : 'url(#arrow-purple)'}
                />
                <text
                  x={tipX + 10}
                  y={(cornerY + tipY) / 2 + 4}
                  textAnchor="start"
                  fill={loadType === 'inductive' ? '#38bdf8' : '#c084fc'}
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  {loadType === 'inductive' ? `+Q = ${signedQ.toFixed(0)} VAR` : `-Q = ${Math.abs(signedQ).toFixed(0)} VAR`}
                </text>
              </>
            )}

            {/* Hypotenuse Vector: Apparent Power S (Amber) */}
            <line
              x1={originX}
              y1={originY}
              x2={tipX}
              y2={tipY}
              stroke="#f59e0b"
              strokeWidth="3"
              strokeDasharray={loadType === 'resistive' ? 'none' : '4,2'}
              markerEnd="url(#arrow-amber)"
            />
            {loadType !== 'resistive' && (
              <text
                x={(originX + tipX) / 2 - 14}
                y={(originY + tipY) / 2 + (loadType === 'inductive' ? -10 : 16)}
                textAnchor="end"
                fill="#fbbf24"
                fontSize="11"
                fontWeight="bold"
                fontFamily="monospace"
              >
                S = {apparentPowerS.toFixed(0)} VA
              </text>
            )}
          </svg>
          <div className="w-full text-center text-xs font-mono text-slate-400 mt-1">
            cos φ = P / S = {(activePowerP / apparentPowerS).toFixed(2)} | sin φ = |Q| / S = {(reactivePowerMagnitude / apparentPowerS).toFixed(2)}
          </div>
        </div>

        {/* Visual 2: Phasor Diagram */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2 w-full pb-2 border-b border-slate-800">
            <Compass className="w-4 h-4 text-cyan-400" />
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              {t.phasorTitle}
            </h4>
          </div>

          <svg viewBox="0 0 320 230" className="w-full max-w-sm h-52 my-1" aria-label="Voltage and Current Phasor Diagram">
            {/* Coordinate Axis */}
            <line x1="30" y1="115" x2="290" y2="115" stroke="#334155" strokeWidth="1.5" />
            <line x1="140" y1="20" x2="140" y2="210" stroke="#334155" strokeWidth="1.5" />
            <circle cx="140" cy="115" r="85" fill="none" stroke="#1e293b" strokeDasharray="3,3" />

            {/* Reference Voltage Phasor V (at 0 deg on horizontal axis) */}
            <line x1="140" y1="115" x2="255" y2="115" stroke="#38bdf8" strokeWidth="3.5" markerEnd="url(#arrow-cyan)" />
            <text x="260" y="110" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="monospace">
              V ({voltage}V ∠0°)
            </text>

            {/* Current Phasor I at angle -φ (inductive) or +φ (capacitive) */}
            {(() => {
              const phasorLen = 75;
              const angleSign = loadType === 'inductive' ? 1 : loadType === 'capacitive' ? -1 : 0;
              const currentX = 140 + phasorLen * Math.cos(phiRad);
              const currentY = 115 + angleSign * phasorLen * Math.sin(phiRad);
              return (
                <>
                  <line
                    x1="140"
                    y1="115"
                    x2={currentX}
                    y2={currentY}
                    stroke="#10b981"
                    strokeWidth="3.5"
                    markerEnd="url(#arrow-emerald)"
                  />
                  <text
                    x={currentX + 8}
                    y={currentY + (angleSign >= 0 ? 12 : -6)}
                    fill="#34d399"
                    fontSize="11"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    I ({current}A ∠{angleSign > 0 ? `-${phiDeg.toFixed(0)}°` : angleSign < 0 ? `+${phiDeg.toFixed(0)}°` : '0°'})
                  </text>

                  {/* Arc indicating angle between V and I */}
                  {loadType !== 'resistive' && (
                    <path
                      d={
                        loadType === 'inductive'
                          ? `M 175 115 A 35 35 0 0 1 ${140 + 35 * Math.cos(phiRad)} ${115 + 35 * Math.sin(phiRad)}`
                          : `M 175 115 A 35 35 0 0 0 ${140 + 35 * Math.cos(phiRad)} ${115 - 35 * Math.sin(phiRad)}`
                      }
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                    />
                  )}
                </>
              );
            })()}

            {/* Labels */}
            <text x="145" y="32" fill="#64748b" fontSize="9" fontFamily="monospace">+j (Imag)</text>
            <text x="145" y="205" fill="#64748b" fontSize="9" fontFamily="monospace">-j (Imag)</text>
          </svg>
          <div className="w-full text-center text-xs font-mono text-slate-400 mt-1">
            {loadType === 'inductive'
              ? 'Current I lags Voltage V by φ (Inductive Load absorbs +Q)'
              : loadType === 'capacitive'
              ? 'Current I leads Voltage V by φ (Capacitive Load delivers Q / absorbs -Q)'
              : 'Current I in phase with Voltage V (Pure Resistive, φ = 0°)'}
          </div>
        </div>
      </div>

      {/* Physics / Energy Flow Explanation Callout */}
      <div className="bg-slate-900/80 border-l-4 border-cyan-500 rounded-r-xl p-4 text-slate-200">
        <div className="flex items-center gap-2 mb-1.5 font-bold text-cyan-300 text-sm">
          <Zap className="w-4 h-4 text-cyan-400" />
          {t.physicsTitle}
        </div>
        <p className="text-xs leading-relaxed text-slate-300">
          {loadType === 'resistive'
            ? t.resistiveSummary
            : loadType === 'inductive'
            ? t.inductiveSummary
            : t.capacitiveSummary}
        </p>
      </div>
    </InteractiveSimulationCard>
  );
};
