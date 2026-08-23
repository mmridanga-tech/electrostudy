import React, { useState, useId } from 'react';
import { RotateCcw, Activity, Zap, ArrowDownRight, Layers, ShieldCheck, Gauge, CheckCircle2 } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface PowerFactorCorrectionAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Power Factor & Power Factor Correction Simulator',
    subtitle: 'Simulate industrial Power Factor Correction (PFC) using shunt capacitor banks. Compare initial uncompensated and target corrected power triangles, reactive demand (Q1 vs Q2), line current reduction, and required capacitance.',
    activePowerLabel: 'Active Load Power P (kW)',
    initialPfLabel: 'Initial Uncorrected PF (cos φ₁)',
    targetPfLabel: 'Target Corrected PF (cos φ₂)',
    voltageLabel: 'Supply Voltage V_rms (V)',
    frequencyLabel: 'Supply Frequency f (Hz)',
    reset: 'Reset Defaults',

    // Live Comparison Columns
    beforeTitle: 'Before Correction (Uncompensated)',
    afterTitle: 'After Correction (Compensated)',
    compensationTitle: 'Capacitor Bank Sizing & Savings',

    phiMetric: 'Phase Angle (φ)',
    qMetric: 'Reactive Power (Q)',
    sMetric: 'Apparent Power (S)',
    iMetric: 'Line Current (I)',
    qcMetric: 'Required Compensation (Qc)',
    cMetric: 'Required Shunt Capacitance (C)',
    currentDropMetric: 'Line Current Reduction',
    lossReductionMetric: 'I²R Cable Loss Reduction',

    triangleOverlayTitle: 'Before vs. After Power Triangles Overlay',
    currentComparisonTitle: 'Current Demand & Cable Relief Gauge',
    industrialExplanationTitle: 'Industrial Benefits of Power Factor Correction',
    industrialExplanationText: 'Adding shunt capacitors delivers local reactive power (Qc = Q1 - Q2), freeing transmission lines and transformers from carrying circulating reactive current. This drops apparent power S, cuts line current from I1 to I2, drastically reduces I²R distribution losses, prevents low-PF tariff penalties, and releases substation capacity without reducing active motor shaft power P.',

    formulaTitle: 'Power Factor Correction Governing Equations',
    formulaText: 'Q₁ = P · tan φ₁  |  Q₂ = P · tan φ₂  |  Qc = Q₁ - Q₂ = P(tan φ₁ - tan φ₂)  |  C = Qc / (2πfV²)  |  I₁ = S₁ / V  |  I₂ = S₂ / V  |  ΔI = I₁ - I₂'
  },
  hi: {
    title: 'पावर फैक्टर एवं पावर फैक्टर सुधार सिम्युलेटर',
    subtitle: 'शंट कैपेसिटर बैंक का उपयोग करके औद्योगिक पावर फैक्टर सुधार (PFC) का अनुकरण करें। प्रारंभिक और सुधारे गए पावर त्रिभुज, रिएक्टिव मांग (Q1 बनाम Q2), लाइन धारा में कमी और आवश्यक धारिता की तुलना करें।',
    activePowerLabel: 'सक्रिय लोड पावर P (kW)',
    initialPfLabel: 'प्रारंभिक पावर फैक्टर (cos φ₁)',
    targetPfLabel: 'लक्षित सुधरा पावर फैक्टर (cos φ₂)',
    voltageLabel: 'सप्लाई वोल्टेज V_rms (V)',
    frequencyLabel: 'सप्लाई आवृत्ति f (Hz)',
    reset: 'डिफ़ॉल्ट रीसेट',

    // Live Comparison Columns
    beforeTitle: 'सुधार से पहले (असंशोधित)',
    afterTitle: 'सुधार के बाद (संशोधित)',
    compensationTitle: 'कैपेसिटर बैंक रेटिंग एवं बचत',

    phiMetric: 'फेज कोण (φ)',
    qMetric: 'प्रतिक्रियाशील शक्ति (Q)',
    sMetric: 'आभासी शक्ति (S)',
    iMetric: 'लाइन धारा (I)',
    qcMetric: 'आवश्यक मुआवजा शक्ति (Qc)',
    cMetric: 'आवश्यक शंट धारिता (C)',
    currentDropMetric: 'लाइन धारा में कमी',
    lossReductionMetric: 'I²R केबल हानि में कमी',

    triangleOverlayTitle: 'सुधार से पहले एवं बाद का संयुक्त पावर त्रिभुज',
    currentComparisonTitle: 'धारा मांग एवं केबल राहत गेज',
    industrialExplanationTitle: 'पावर फैक्टर सुधार के औद्योगिक लाभ',
    industrialExplanationText: 'शंट कैपेसिटर स्थानीय रूप से रिएक्टिव शक्ति (Qc = Q1 - Q2) की आपूर्ति करते हैं, जिससे ट्रांसमिशन लाइनों और ट्रांसफार्मरों को अनावश्यक रिएक्टिव धारा वहन नहीं करनी पड़ती। इससे लाइन धारा घटती है, I²R हानियाँ कम होती हैं, बिजली बिल में पेनल्टी से बचाव होता है और सिस्टम क्षमता बढ़ती है।',

    formulaTitle: 'पावर फैक्टर सुधार के मुख्य सूत्र',
    formulaText: 'Q₁ = P · tan φ₁  |  Q₂ = P · tan φ₂  |  Qc = Q₁ - Q₂ = P(tan φ₁ - tan φ₂)  |  C = Qc / (2πfV²)  |  I₁ = S₁ / V  |  I₂ = S₂ / V'
  },
  bn: {
    title: 'পাওয়ার ফ্যাক্টর ও পাওয়ার ফ্যাক্টর কারেকশন সিমুলেটর',
    subtitle: 'শান্ট ক্যাপাসিটর ব্যাংক ব্যবহার করে ইন্ডাস্ট্রিয়াল পাওয়ার ফ্যাক্টর কারেকশন (PFC) এর সিমুলেশন। প্রাথমিক ও সংশোধিত পাওয়ার ত্রিভুজ, রিঅ্যাক্টিভ চাহিদা (Q1 বনাম Q2), লাইন কারেন্ট হ্রাস এবং প্রয়োজনীয় ক্যাপাসিট্যান্সের তুলনা করুন।',
    activePowerLabel: 'অ্যাক্টিভ লোড পাওয়ার P (kW)',
    initialPfLabel: 'প্রাথমিক পাওয়ার ফ্যাক্টর (cos φ₁)',
    targetPfLabel: 'কাঙ্ক্ষিত সংশোধিত PF (cos φ₂)',
    voltageLabel: 'সাপ্লাই ভোল্টেজ V_rms (V)',
    frequencyLabel: 'সাপ্লাই কম্পাঙ্ক f (Hz)',
    reset: 'ডিফল্ট রিসেট',

    // Live Comparison Columns
    beforeTitle: 'সংশোধনের পূর্বে (অসংশোধিত)',
    afterTitle: 'সংশোধনের পরে (সংশোধিত)',
    compensationTitle: 'ক্যাপাসিটর ব্যাংক সাইজিং ও সাশ্রয়',

    phiMetric: 'ফেজ কোণ (φ)',
    qMetric: 'রিঅ্যাক্টিভ ক্ষমতা (Q)',
    sMetric: 'অ্যাপারেন্ট ক্ষমতা (S)',
    iMetric: 'লাইন কারেন্ট (I)',
    qcMetric: 'প্রয়োজনীয় ক্ষতিপূরণ (Qc)',
    cMetric: 'প্রয়োজনীয় শান্ট ধারকত্ব (C)',
    currentDropMetric: 'লাইন কারেন্ট হ্রাস',
    lossReductionMetric: 'I²R তারের অপচয় হ্রাস',

    triangleOverlayTitle: 'সংশোধনের পূর্ব ও পরের যৌথ পাওয়ার ত্রিভুজ',
    currentComparisonTitle: 'কারেন্ট চাহিদা ও তারের ভারমুক্তি পরিমাপক',
    industrialExplanationTitle: 'পাওয়ার ফ্যাক্টর কারেকশনের শিল্প সুবিধা',
    industrialExplanationText: 'শান্ট ক্যাপাসিটর স্থানীয়ভাবে প্রয়োজনীয় রিঅ্যাক্টিভ পাওয়ার (Qc = Q1 - Q2) সরবরাহ করে, ফলে গ্রিড লাইন এবং ট্রান্সফরমার অতিরিক্ত রিঅ্যাক্টিভ কারেন্ট বহন থেকে মুক্ত হয়। এতে লাইন কারেন্ট হ্রাস পায়, I²R ক্ষতি নাটকীয়ভাবে কমে এবং বিদ্যুতের পেনাল্টি এড়ানো যায়।',

    formulaTitle: 'পাওয়ার ফ্যাক্টর কারেকশনের মূল সূত্রাবলী',
    formulaText: 'Q₁ = P · tan φ₁  |  Q₂ = P · tan φ₂  |  Qc = Q₁ - Q₂ = P(tan φ₁ - tan φ₂)  |  C = Qc / (2πfV²)  |  I₁ = S₁ / V  |  I₂ = S₂ / V'
  }
};

export const PowerFactorCorrectionAnimation: React.FC<PowerFactorCorrectionAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage];
  const prefersReducedMotion = useReducedMotion();

  // Control States
  const [loadP_kW, setLoadP_kW] = useState<number>(50); // kW
  const [initialPf, setInitialPf] = useState<number>(0.70); // Lagging
  const [targetPf, setTargetPf] = useState<number>(0.95);  // Lagging
  const [voltage, setVoltage] = useState<number>(400);    // V RMS
  const [frequency, setFrequency] = useState<number>(50); // Hz

  const pInputId = useId();
  const pf1InputId = useId();
  const pf2InputId = useId();
  const vInputId = useId();
  const fInputId = useId();

  // Sanitized Inputs to prevent math anomalies
  const validInitialPf = Math.max(0.30, Math.min(0.95, initialPf));
  const validTargetPf = Math.max(validInitialPf, Math.min(1.0, targetPf));
  const P_W = loadP_kW * 1000; // Watts

  // Angle calculations
  const phi1_rad = Math.acos(validInitialPf);
  const phi1_deg = (phi1_rad * 180) / Math.PI;

  const phi2_rad = Math.acos(validTargetPf);
  const phi2_deg = (phi2_rad * 180) / Math.PI;

  // Initial Parameters (Before)
  const S1_VA = P_W / validInitialPf; // VA
  const S1_kVA = S1_VA / 1000;
  const Q1_VAR = P_W * Math.tan(phi1_rad); // VAR
  const Q1_kVAR = Q1_VAR / 1000;
  const I1_A = S1_VA / Math.max(1, voltage); // Amperes (Single-phase basis or 1-ph equivalent)

  // Corrected Parameters (After)
  const S2_VA = P_W / validTargetPf; // VA
  const S2_kVA = S2_VA / 1000;
  const Q2_VAR = P_W * Math.tan(phi2_rad); // VAR
  const Q2_kVAR = Q2_VAR / 1000;
  const I2_A = S2_VA / Math.max(1, voltage); // Amperes

  // Compensation Parameters
  const Qc_VAR = Math.max(0, Q1_VAR - Q2_VAR);
  const Qc_kVAR = Qc_VAR / 1000;

  // Single-phase shunt capacitance required C = Qc / (2 * pi * f * V^2)
  const omega = 2 * Math.PI * frequency;
  const C_Farads = voltage > 0 && frequency > 0 ? Qc_VAR / (omega * voltage * voltage) : 0;
  const C_microFarads = C_Farads * 1e6; // µF

  // Current and Loss Reductions
  const currentReduction_A = Math.max(0, I1_A - I2_A);
  const currentReduction_percent = I1_A > 0 ? (currentReduction_A / I1_A) * 100 : 0;
  
  // Power loss reduction is proportional to (I1^2 - I2^2) / I1^2 = 1 - (I2/I1)^2
  const lossReduction_percent = I1_A > 0 ? (1 - Math.pow(I2_A / I1_A, 2)) * 100 : 0;

  // Reset Handler
  const handleReset = () => {
    setLoadP_kW(50);
    setInitialPf(0.70);
    setTargetPf(0.95);
    setVoltage(400);
    setFrequency(50);
  };

  // SVG Geometry for Power Triangles Overlay
  const originX = 45;
  const originY = 200;
  const maxBaseWidth = 240;
  const scale = maxBaseWidth / Math.max(1, loadP_kW);
  const basePx = loadP_kW * scale;
  
  const cornerX = originX + basePx;
  const cornerY = originY;

  // Height scaling
  const heightScale = 140 / Math.max(1, Q1_kVAR);
  const q1Px = Math.min(160, Q1_kVAR * heightScale);
  const q2Px = Math.min(160, Q2_kVAR * heightScale);

  const tip1X = cornerX;
  const tip1Y = originY - q1Px;

  const tip2X = cornerX;
  const tip2Y = originY - q2Px;

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
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
          <Activity className="w-5 h-5 text-cyan-400" />
          <h3 className="font-semibold text-cyan-200 text-sm tracking-wide uppercase">
            {currentLanguage === 'en' ? 'PFC Simulation Parameters' : currentLanguage === 'hi' ? 'PFC सिमुलेशन पैरामीटर' : 'PFC সিমুলেশন প্যারামিটার'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Active Power Slider */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={pInputId} className="text-xs font-semibold text-slate-300">
                {t.activePowerLabel}
              </label>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                {loadP_kW} kW
              </span>
            </div>
            <input
              id={pInputId}
              type="range"
              min="5"
              max="150"
              step="5"
              value={loadP_kW}
              onChange={(e) => setLoadP_kW(parseFloat(e.target.value))}
              aria-label={t.activePowerLabel}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Initial PF Slider */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={pf1InputId} className="text-xs font-semibold text-slate-300">
                {t.initialPfLabel}
              </label>
              <span className="text-xs font-mono font-bold text-rose-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                {validInitialPf.toFixed(2)}
              </span>
            </div>
            <input
              id={pf1InputId}
              type="range"
              min="0.40"
              max="0.90"
              step="0.02"
              value={initialPf}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setInitialPf(val);
                if (val > targetPf) setTargetPf(Math.min(1.0, val + 0.05));
              }}
              aria-label={t.initialPfLabel}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
          </div>

          {/* Target PF Slider */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={pf2InputId} className="text-xs font-semibold text-slate-300">
                {t.targetPfLabel}
              </label>
              <span className="text-xs font-mono font-bold text-cyan-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                {validTargetPf.toFixed(2)}
              </span>
            </div>
            <input
              id={pf2InputId}
              type="range"
              min={Math.min(0.90, validInitialPf + 0.02)}
              max="1.00"
              step="0.01"
              value={validTargetPf}
              onChange={(e) => setTargetPf(parseFloat(e.target.value))}
              aria-label={t.targetPfLabel}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Voltage */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={vInputId} className="text-xs font-semibold text-slate-300">
                {t.voltageLabel}
              </label>
              <span className="text-xs font-mono font-bold text-amber-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
                {voltage} V
              </span>
            </div>
            <input
              id={vInputId}
              type="range"
              min="200"
              max="500"
              step="10"
              value={voltage}
              onChange={(e) => setVoltage(parseFloat(e.target.value))}
              aria-label={t.voltageLabel}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Frequency Toggle */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              {t.frequencyLabel}
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setFrequency(50)}
                aria-pressed={frequency === 50}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all border ${
                  frequency === 50
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                }`}
              >
                50 Hz (Standard)
              </button>
              <button
                type="button"
                onClick={() => setFrequency(60)}
                aria-pressed={frequency === 60}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all border ${
                  frequency === 60
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                }`}
              >
                60 Hz
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Before / After / Savings Metrics Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Column 1: Before Correction */}
        <div className="bg-slate-900 border border-rose-500/30 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-rose-500/20">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
            <h4 className="text-xs font-bold text-rose-300 uppercase tracking-wider">
              {t.beforeTitle}
            </h4>
          </div>
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.phiMetric}:</span>
              <span className="font-mono font-bold text-rose-300">{phi1_deg.toFixed(1)}°</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.qMetric}:</span>
              <span className="font-mono font-bold text-rose-300">{Q1_kVAR.toFixed(2)} kVAR</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.sMetric}:</span>
              <span className="font-mono font-bold text-rose-300">{S1_kVA.toFixed(2)} kVA</span>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-slate-800">
              <span className="text-slate-300 font-semibold">{t.iMetric}:</span>
              <span className="font-mono font-extrabold text-rose-400 text-sm">{I1_A.toFixed(1)} A</span>
            </div>
          </div>
        </div>

        {/* Column 2: After Correction */}
        <div className="bg-slate-900 border border-cyan-500/30 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-cyan-500/20">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block"></span>
            <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
              {t.afterTitle}
            </h4>
          </div>
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.phiMetric}:</span>
              <span className="font-mono font-bold text-cyan-300">{phi2_deg.toFixed(1)}°</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.qMetric}:</span>
              <span className="font-mono font-bold text-cyan-300">{Q2_kVAR.toFixed(2)} kVAR</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.sMetric}:</span>
              <span className="font-mono font-bold text-cyan-300">{S2_kVA.toFixed(2)} kVA</span>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-slate-800">
              <span className="text-slate-300 font-semibold">{t.iMetric}:</span>
              <span className="font-mono font-extrabold text-cyan-300 text-sm">{I2_A.toFixed(1)} A</span>
            </div>
          </div>
        </div>

        {/* Column 3: Compensation & Savings */}
        <div className="bg-slate-900 border border-emerald-500/30 rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-emerald-500/20">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
              {t.compensationTitle}
            </h4>
          </div>
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.qcMetric}:</span>
              <span className="font-mono font-extrabold text-emerald-400">{Qc_kVAR.toFixed(2)} kVAR</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.cMetric}:</span>
              <span className="font-mono font-bold text-emerald-300">{C_microFarads.toFixed(1)} µF</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-400">{t.currentDropMetric}:</span>
              <span className="font-mono font-bold text-cyan-300">-{currentReduction_percent.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between items-center pt-1 border-t border-slate-800">
              <span className="text-slate-300 font-semibold">{t.lossReductionMetric}:</span>
              <span className="font-mono font-extrabold text-emerald-300 text-sm">-{lossReduction_percent.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Diagrams: Overlay Triangles and Current Gauge */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        {/* Overlay Power Triangles */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2 w-full pb-2 border-b border-slate-800">
            <Layers className="w-4 h-4 text-cyan-400" />
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              {t.triangleOverlayTitle}
            </h4>
          </div>

          <svg viewBox="0 0 380 230" className="w-full max-w-sm h-52 my-1" aria-label="Power Triangle Correction Overlay">
            <defs>
              <marker id="arr-em" markerWidth="7" markerHeight="7" refX="4" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#10b981" />
              </marker>
              <marker id="arr-rose" markerWidth="7" markerHeight="7" refX="4" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f43f5e" />
              </marker>
              <marker id="arr-cyan" markerWidth="7" markerHeight="7" refX="4" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#06b6d4" />
              </marker>
              <marker id="arr-amber" markerWidth="7" markerHeight="7" refX="4" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#f59e0b" />
              </marker>
            </defs>

            {/* Baseline Real Axis */}
            <line x1="20" y1={originY} x2="360" y2={originY} stroke="#334155" strokeWidth="1" strokeDasharray="3,3" />

            {/* Triangle 1 Fill (Before - Rose Tint) */}
            <polygon
              points={`${originX},${originY} ${cornerX},${cornerY} ${tip1X},${tip1Y}`}
              fill="rgba(244, 63, 94, 0.10)"
            />

            {/* Triangle 2 Fill (After - Cyan Tint) */}
            <polygon
              points={`${originX},${originY} ${cornerX},${cornerY} ${tip2X},${tip2Y}`}
              fill="rgba(6, 182, 212, 0.18)"
            />

            {/* Active Power Base Vector P (Emerald) */}
            <line
              x1={originX}
              y1={originY}
              x2={cornerX}
              y2={cornerY}
              stroke="#10b981"
              strokeWidth="3.5"
              markerEnd="url(#arr-em)"
            />
            <text x={originX + basePx / 2} y={originY + 16} textAnchor="middle" fill="#34d399" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
              P = {loadP_kW} kW (Constant)
            </text>

            {/* Initial Apparent Power Hypotenuse S1 (Rose) */}
            <line
              x1={originX}
              y1={originY}
              x2={tip1X}
              y2={tip1Y}
              stroke="#f43f5e"
              strokeWidth="2.5"
              strokeDasharray="4,2"
              markerEnd="url(#arr-rose)"
            />
            <text x={originX + basePx / 2 - 12} y={(originY + tip1Y) / 2 - 4} fill="#fb7185" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
              S₁ = {S1_kVA.toFixed(1)} kVA
            </text>

            {/* Corrected Apparent Power Hypotenuse S2 (Cyan) */}
            <line
              x1={originX}
              y1={originY}
              x2={tip2X}
              y2={tip2Y}
              stroke="#06b6d4"
              strokeWidth="3"
              markerEnd="url(#arr-cyan)"
            />
            <text x={originX + basePx / 2 + 10} y={(originY + tip2Y) / 2 + 12} fill="#38bdf8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
              S₂ = {S2_kVA.toFixed(1)} kVA
            </text>

            {/* Vertical Q1 vector (full height) */}
            <line
              x1={cornerX}
              y1={cornerY}
              x2={tip2X}
              y2={tip2Y}
              stroke="#06b6d4"
              strokeWidth="3"
            />
            <text x={tip2X + 6} y={(cornerY + tip2Y) / 2 + 4} fill="#38bdf8" fontSize="9.5" fontWeight="bold" fontFamily="monospace">
              Q₂ = {Q2_kVAR.toFixed(1)}
            </text>

            {/* Compensation Qc vector (from tip1 down to tip2) */}
            <line
              x1={cornerX + 18}
              y1={tip1Y}
              x2={cornerX + 18}
              y2={tip2Y}
              stroke="#10b981"
              strokeWidth="3"
              markerEnd="url(#arr-em)"
            />
            <text x={cornerX + 24} y={(tip1Y + tip2Y) / 2 + 4} fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace">
              Qc = {Qc_kVAR.toFixed(1)} kVAR
            </text>

            {/* Phase Angle Arcs */}
            <path
              d={`M ${originX + 35} ${originY} A 35 35 0 0 0 ${originX + 35 * Math.cos(phi1_rad)} ${originY - 35 * Math.sin(phi1_rad)}`}
              fill="none"
              stroke="#f43f5e"
              strokeWidth="1.5"
            />
            <path
              d={`M ${originX + 25} ${originY} A 25 25 0 0 0 ${originX + 25 * Math.cos(phi2_rad)} ${originY - 25 * Math.sin(phi2_rad)}`}
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2"
            />
          </svg>

          <div className="w-full text-center text-xs font-mono text-slate-400 mt-1">
            Qc = Q₁ - Q₂ = {Q1_kVAR.toFixed(1)} - {Q2_kVAR.toFixed(1)} = {Qc_kVAR.toFixed(1)} kVAR
          </div>
        </div>

        {/* Current Demand and Cable Relief Gauge */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800">
              <Gauge className="w-4 h-4 text-emerald-400" />
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                {t.currentComparisonTitle}
              </h4>
            </div>

            {/* Current Bars */}
            <div className="space-y-4 my-2">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-rose-400">I₁ (Uncompensated at {validInitialPf.toFixed(2)} PF)</span>
                  <span className="font-mono text-rose-300">{I1_A.toFixed(1)} A (100%)</span>
                </div>
                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-cyan-400">I₂ (Compensated at {validTargetPf.toFixed(2)} PF)</span>
                  <span className="font-mono text-cyan-300">{I2_A.toFixed(1)} A ({(100 - currentReduction_percent).toFixed(1)}%)</span>
                </div>
                <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                  <div
                    className="h-full bg-cyan-400 rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(10, 100 - currentReduction_percent)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Savings Callout Box */}
            <div className="grid grid-cols-2 gap-3 mt-4 bg-slate-900 border border-slate-800 p-3 rounded-lg text-center">
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Line Current Saved</div>
                <div className="text-base font-extrabold font-mono text-cyan-300">
                  {currentReduction_A.toFixed(1)} A
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-400">Line I²R Loss Drop</div>
                <div className="text-base font-extrabold font-mono text-emerald-300">
                  {lossReduction_percent.toFixed(1)} %
                </div>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 italic mt-3 text-center">
            *Active useful shaft power remains constant at {loadP_kW} kW while electrical line strain drops significantly.
          </p>
        </div>
      </div>

      {/* Industrial Benefits Explanation Box */}
      <div className="bg-slate-900/80 border-l-4 border-emerald-500 rounded-r-xl p-4 text-slate-200">
        <div className="flex items-center gap-2 mb-1.5 font-bold text-emerald-300 text-sm">
          <Zap className="w-4 h-4 text-emerald-400" />
          {t.industrialExplanationTitle}
        </div>
        <p className="text-xs leading-relaxed text-slate-300">
          {t.industrialExplanationText}
        </p>
      </div>
    </InteractiveSimulationCard>
  );
};
