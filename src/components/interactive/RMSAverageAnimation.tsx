import React, { useState } from 'react';
import { Sliders, RotateCcw, Activity, Zap, Flame, CheckCircle2, Award } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';

interface RMSAverageAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'RMS & Average Values Comparative Visualizer',
    subtitle: 'Compare Peak (Vm), Effective Heating Value (Vrms), and Half-Cycle Average (Vavg) on a pure sinusoidal waveform.',
    peakSlider: 'Peak Voltage Amplitude (Vm)',
    frequencySlider: 'Frequency (f)',
    reset: 'Reset Standard 230V Grid',
    peakMetric: 'Peak Value (Vm)',
    rmsMetric: 'RMS / Effective Value (Vrms = Vm/√2)',
    halfAvgMetric: 'Half-Cycle Average (Vavg = 2Vm/π)',
    fullAvgMetric: 'Full-Cycle Average (Symmetrical)',
    formFactorMetric: 'Form Factor (Kf = Vrms / Vavg)',
    peakFactorMetric: 'Peak Factor (Kp = Vm / Vrms)',
    heatingEffectTitle: 'Joule Heating Equivalence Principle',
    heatingEffectText: 'An AC voltage of Vrms produces the exact same average thermal power (I²R / V²/R) in a pure resistor as a constant DC voltage of the same numerical value.',
    formulaCalloutTitle: 'Standard Sinusoidal Ratios',
    formulaCalloutText: 'For a pure sinusoidal alternating wave: Vrms = 0.7071 · Vm, Vavg(half) = 0.6366 · Vm, Form Factor = 1.1107, Peak Factor = 1.4142.',
    formulaText: 'Vrms = Vm / √2 ≈ 0.707 Vm   |   Vavg = 2Vm / π ≈ 0.637 Vm   |   Kf = 1.11   |   Kp = 1.414',
    rmsLineLabel: 'RMS Effective Level (0.707 Vm)',
    halfAvgLineLabel: 'Half-Cycle Average (0.637 Vm)',
    peakLineLabel: 'Peak Value (+Vm)',
    zeroLineLabel: 'Full-Cycle Symmetrical Average (0 V)'
  },
  hi: {
    title: 'RMS एवं औसत मान तुलनात्मक विज़ुअलाइज़र',
    subtitle: 'एक शुद्ध साइनसॉइडल वेवफॉर्म पर शिखर मान (Vm), प्रभावी तापीय मान (Vrms), और अर्ध-चक्र औसत (Vavg) की तुलना करें।',
    peakSlider: 'शिखर वोल्टेज आयाम (Vm)',
    frequencySlider: 'आवृत्ति (f)',
    reset: 'मानक 230V ग्रिड रीसेट',
    peakMetric: 'शिखर मान (Vm)',
    rmsMetric: 'RMS / प्रभावी मान (Vrms = Vm/√2)',
    halfAvgMetric: 'अर्ध-चक्र औसत (Vavg = 2Vm/π)',
    fullAvgMetric: 'पूर्ण-चक्र औसत (सममित)',
    formFactorMetric: 'फॉर्म फैक्टर (Kf = Vrms / Vavg)',
    peakFactorMetric: 'शिखर फैक्टर (Kp = Vm / Vrms)',
    heatingEffectTitle: 'जूल तापन समतुल्यता सिद्धांत',
    heatingEffectText: 'Vrms का AC वोल्टेज एक शुद्ध प्रतिरोधक में ठीक उतना ही औसत तापीय प्रभाव (I²R / V²/R) उत्पन्न करता है जितना कि समान मान का स्थिर DC वोल्टेज।',
    formulaCalloutTitle: 'मानक साइनसॉइडल अनुपात',
    formulaCalloutText: 'शुद्ध साइनसॉइडल तरंग के लिए: Vrms = 0.7071 · Vm, Vavg(अर्ध) = 0.6366 · Vm, फॉर्म फैक्टर = 1.1107, पीक फैक्टर = 1.4142।',
    formulaText: 'Vrms = Vm / √2 ≈ 0.707 Vm   |   Vavg = 2Vm / π ≈ 0.637 Vm   |   Kf = 1.11   |   Kp = 1.414',
    rmsLineLabel: 'RMS प्रभावी स्तर (0.707 Vm)',
    halfAvgLineLabel: 'अर्ध-चक्र औसत स्तर (0.637 Vm)',
    peakLineLabel: 'शिखर मान (+Vm)',
    zeroLineLabel: 'पूर्ण-चक्र सममित औसत (0 V)'
  },
  bn: {
    title: 'RMS ও গড় মানের তুলনামূলক ভিজ্যুয়ালাইজার',
    subtitle: 'বিশুদ্ধ সাইনুসয়েডাল তরঙ্গে পিক মান (Vm), কার্যকর তাপীয় মান (Vrms), এবং অর্ধ-চক্র গড় (Vavg) এর তুলনা করুন।',
    peakSlider: 'পিক ভোল্টেজ অ্যাম্প্লিটিউড (Vm)',
    frequencySlider: 'ফ্রিকোয়েন্সি (f)',
    reset: 'স্ট্যান্ডার্ড ২৩০V গ্রিড রিসেট',
    peakMetric: 'পিক মান (Vm)',
    rmsMetric: 'RMS / কার্যকর মান (Vrms = Vm/√2)',
    halfAvgMetric: 'অর্ধ-চক্র গড় মান (Vavg = 2Vm/π)',
    fullAvgMetric: 'পূর্ণ-চক্র গড় মান (প্রতিসম)',
    formFactorMetric: 'ফর্ম ফ্যাক্টর (Kf = Vrms / Vavg)',
    peakFactorMetric: 'পিক ফ্যাক্টর (Kp = Vm / Vrms)',
    heatingEffectTitle: 'জুল তাপীয় সমতুল্যতা নীতি',
    heatingEffectText: 'একটি Vrms মানের এসি ভোল্টেজ কোনো রোধে ঠিক একই পরিমাণ গড় তাপীয় শক্তি (I²R / V²/R) উৎপন্ন করে যা একই মানের ডিসি ভোল্টেজ তৈরি করে।',
    formulaCalloutTitle: 'সাইনুসয়েডাল অনুপাত',
    formulaCalloutText: 'বিশুদ্ধ সাইনুসয়েডাল তরঙ্গের জন্য: Vrms = 0.7071 · Vm, Vavg(অর্ধ) = 0.6366 · Vm, ফর্ম ফ্যাক্টর = 1.1107, পিক ফ্যাক্টর = 1.4142।',
    formulaText: 'Vrms = Vm / √2 ≈ 0.707 Vm   |   Vavg = 2Vm / π ≈ 0.637 Vm   |   Kf = 1.11   |   Kp = 1.414',
    rmsLineLabel: 'RMS কার্যকর মাত্রা (0.707 Vm)',
    halfAvgLineLabel: 'অর্ধ-চক্র গড় মাত্রা (0.637 Vm)',
    peakLineLabel: 'পিক মান (+Vm)',
    zeroLineLabel: 'পূর্ণ-চক্র প্রতিসম গড় (0 V)'
  }
};

export const RMSAverageAnimation: React.FC<RMSAverageAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  // State: Standard Indian/European single-phase 230V RMS corresponds to Vm = 230 * sqrt(2) ≈ 325.27 V
  const [peakVoltage, setPeakVoltage] = useState<number>(325.27);
  const [frequency, setFrequency] = useState<number>(50); // Hz

  // Mathematical Calculations
  const rmsVoltage = peakVoltage / Math.SQRT2; // Vm / √2
  const halfCycleAvg = (2 * peakVoltage) / Math.PI; // 2Vm / π
  const fullCycleAvg = 0; // Exactly 0 for symmetrical pure AC wave
  const formFactor = rmsVoltage / (halfCycleAvg || 1); // ~ 1.1107
  const peakFactor = peakVoltage / (rmsVoltage || 1); // ~ 1.4142
  const timePeriodMs = 1000 / (frequency || 50);

  const handleReset = () => {
    setPeakVoltage(325.27);
    setFrequency(50);
  };

  // SVG Plot Dimensions
  const svgWidth = 720;
  const svgHeight = 300;
  const paddingLeft = 65;
  const paddingRight = 40;
  const paddingTop = 35;
  const paddingBottom = 35;
  const plotWidth = svgWidth - paddingLeft - paddingRight;
  const plotHeight = svgHeight - paddingTop - paddingBottom;
  const centerY = paddingTop + plotHeight / 2;

  // Generate Waveform Path for 1 full cycle
  const numPoints = 180;
  let sinePath = '';
  let positiveAreaPath = `M ${paddingLeft} ${centerY}`;
  const halfWidth = plotWidth / 2;

  for (let i = 0; i <= numPoints; i++) {
    const frac = i / numPoints;
    const angRad = frac * 2 * Math.PI;
    const vVal = peakVoltage * Math.sin(angRad);
    const x = paddingLeft + frac * plotWidth;
    const y = centerY - (vVal / (peakVoltage || 1)) * (plotHeight / 2 - 10);

    if (i === 0) sinePath += `M ${x.toFixed(2)} ${y.toFixed(2)}`;
    else sinePath += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;

    // Build positive half cycle fill path
    if (frac <= 0.5) {
      positiveAreaPath += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
  }
  positiveAreaPath += ` L ${paddingLeft + halfWidth} ${centerY} Z`;

  // Calculated Y pixel positions for RMS and Average levels
  const rmsY = centerY - (rmsVoltage / (peakVoltage || 1)) * (plotHeight / 2 - 10);
  const avgY = centerY - (halfCycleAvg / (peakVoltage || 1)) * (plotHeight / 2 - 10);
  const peakY = paddingTop + 10;
  const negPeakY = paddingTop + plotHeight - 10;

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
          {/* Peak Amplitude Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                {t.peakSlider}
              </span>
              <span className="text-amber-400 font-bold px-2 py-0.5 bg-amber-950/60 border border-amber-800/60 rounded">
                {peakVoltage.toFixed(1)} V (RMS: {rmsVoltage.toFixed(1)} V)
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="400"
              step="5"
              value={peakVoltage}
              onChange={(e) => setPeakVoltage(Number(e.target.value))}
              aria-label={t.peakSlider}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>100 V</span>
              <span>325.3 V (230V Grid)</span>
              <span>400 V</span>
            </div>
          </div>

          {/* Frequency Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                {t.frequencySlider}
              </span>
              <span className="text-cyan-400 font-bold px-2 py-0.5 bg-cyan-950/60 border border-cyan-800/60 rounded">
                {frequency} Hz (T = {timePeriodMs.toFixed(1)} ms)
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              step="10"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              aria-label={t.frequencySlider}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>10 Hz</span>
              <span>50 Hz (Indian / UK Grid)</span>
              <span>100 Hz</span>
            </div>
          </div>
        </div>

        {/* Live Mathematical Metric Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {/* Peak Value */}
          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-amber-900/50 text-center bg-amber-950/20">
            <span className="text-[10px] uppercase font-mono text-amber-300 block truncate font-medium">
              {t.peakMetric}
            </span>
            <span className="text-sm font-bold font-mono text-amber-200">
              {peakVoltage.toFixed(1)} V
            </span>
          </div>

          {/* RMS Value */}
          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-yellow-700/80 text-center bg-yellow-950/30">
            <span className="text-[10px] uppercase font-mono text-yellow-300 block truncate font-bold">
              {t.rmsMetric}
            </span>
            <span className="text-sm font-bold font-mono text-yellow-100">
              {rmsVoltage.toFixed(1)} V
            </span>
          </div>

          {/* Half-Cycle Average */}
          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-emerald-800/80 text-center bg-emerald-950/20">
            <span className="text-[10px] uppercase font-mono text-emerald-300 block truncate font-medium">
              {t.halfAvgMetric}
            </span>
            <span className="text-sm font-bold font-mono text-emerald-200">
              {halfCycleAvg.toFixed(1)} V
            </span>
          </div>

          {/* Full-Cycle Average */}
          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-center">
            <span className="text-[10px] uppercase font-mono text-slate-400 block truncate">
              {t.fullAvgMetric}
            </span>
            <span className="text-sm font-bold font-mono text-slate-300">
              0.0 V
            </span>
          </div>

          {/* Form Factor */}
          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-cyan-800 text-center bg-cyan-950/20">
            <span className="text-[10px] uppercase font-mono text-cyan-300 block truncate font-medium">
              {t.formFactorMetric}
            </span>
            <span className="text-sm font-bold font-mono text-cyan-200">
              {formFactor.toFixed(2)}
            </span>
          </div>

          {/* Peak Factor */}
          <div className="bg-slate-900/80 p-2.5 rounded-lg border border-purple-800 text-center bg-purple-950/20">
            <span className="text-[10px] uppercase font-mono text-purple-300 block truncate font-medium">
              {t.peakFactorMetric}
            </span>
            <span className="text-sm font-bold font-mono text-purple-200">
              {peakFactor.toFixed(3)}
            </span>
          </div>
        </div>

        {/* Interactive Comparison SVG Graph */}
        <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 overflow-x-auto shadow-inner">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            className="w-full h-auto max-w-full select-none"
            aria-label="Comparative RMS and Average Value Graph"
            role="img"
          >
            <defs>
              <linearGradient id="positiveFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Zero and Grid Axes */}
            <line x1={paddingLeft} y1={centerY} x2={svgWidth - paddingRight} y2={centerY} stroke="#64748b" strokeWidth="1.5" />
            <line x1={paddingLeft} y1={paddingTop} x2={paddingLeft} y2={paddingTop + plotHeight} stroke="#64748b" strokeWidth="1.5" />

            {/* Positive Half-cycle shaded area */}
            <path d={positiveAreaPath} fill="url(#positiveFill)" />

            {/* Negative Half-cycle boundary line */}
            <line x1={paddingLeft + halfWidth} y1={paddingTop} x2={paddingLeft + halfWidth} y2={paddingTop + plotHeight} stroke="#334155" strokeDasharray="3 3" />
            <line x1={svgWidth - paddingRight} y1={paddingTop} x2={svgWidth - paddingRight} y2={paddingTop + plotHeight} stroke="#334155" strokeDasharray="3 3" />

            {/* Peak Reference Line (+Vm) */}
            <line x1={paddingLeft} y1={peakY} x2={svgWidth - paddingRight} y2={peakY} stroke="#fbbf24" strokeDasharray="4 2" strokeWidth="1.2" opacity="0.7" />
            <text x={paddingLeft - 8} y={peakY + 4} fill="#fbbf24" fontSize="10" textAnchor="end" fontFamily="monospace" fontWeight="bold">
              +{peakVoltage.toFixed(0)}V
            </text>
            <text x={svgWidth - paddingRight - 8} y={peakY - 6} fill="#fbbf24" fontSize="9.5" textAnchor="end" fontFamily="monospace" fontWeight="bold">
              {t.peakLineLabel}
            </text>

            {/* RMS Reference Level Line (Vrms = 0.707 Vm) */}
            <line x1={paddingLeft} y1={rmsY} x2={svgWidth - paddingRight} y2={rmsY} stroke="#facc15" strokeWidth="2" strokeDasharray="6 3" />
            <text x={paddingLeft - 8} y={rmsY + 4} fill="#facc15" fontSize="10" textAnchor="end" fontFamily="monospace" fontWeight="bold">
              {rmsVoltage.toFixed(0)}V
            </text>
            <text x={svgWidth - paddingRight - 8} y={rmsY - 6} fill="#facc15" fontSize="9.5" textAnchor="end" fontFamily="monospace" fontWeight="bold">
              {t.rmsLineLabel} = {rmsVoltage.toFixed(1)}V
            </text>

            {/* Half-Cycle Average Reference Line (Vavg = 0.637 Vm) */}
            <line x1={paddingLeft} y1={avgY} x2={svgWidth - paddingRight} y2={avgY} stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x={paddingLeft - 8} y={avgY + 4} fill="#10b981" fontSize="10" textAnchor="end" fontFamily="monospace" fontWeight="bold">
              {halfCycleAvg.toFixed(0)}V
            </text>
            <text x={svgWidth - paddingRight - 8} y={avgY + 14} fill="#10b981" fontSize="9.5" textAnchor="end" fontFamily="monospace" fontWeight="bold">
              {t.halfAvgLineLabel} = {halfCycleAvg.toFixed(1)}V
            </text>

            {/* Symmetrical 0V Full-Cycle Level */}
            <text x={paddingLeft - 8} y={centerY + 4} fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="monospace">
              0V
            </text>
            <text x={paddingLeft + halfWidth / 2} y={centerY + 16} fill="#38bdf8" fontSize="10" textAnchor="middle" fontFamily="monospace">
              Area (+A)
            </text>
            <text x={paddingLeft + (3 * halfWidth) / 2} y={centerY - 12} fill="#f43f5e" fontSize="10" textAnchor="middle" fontFamily="monospace">
              Area (-A) ⇒ Total Net Area = 0
            </text>

            {/* Negative Peak Reference Line (-Vm) */}
            <line x1={paddingLeft} y1={negPeakY} x2={svgWidth - paddingRight} y2={negPeakY} stroke="#fbbf24" strokeDasharray="4 2" strokeWidth="1.2" opacity="0.7" />
            <text x={paddingLeft - 8} y={negPeakY + 4} fill="#fbbf24" fontSize="10" textAnchor="end" fontFamily="monospace" fontWeight="bold">
              -{peakVoltage.toFixed(0)}V
            </text>

            {/* Sinusoidal Waveform Curve */}
            <path d={sinePath} fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />

            {/* Time / Cycle marks on X axis */}
            <text x={paddingLeft} y={paddingTop + plotHeight + 18} fill="#64748b" fontSize="10" fontFamily="monospace">
              t=0
            </text>
            <text x={paddingLeft + halfWidth} y={paddingTop + plotHeight + 18} fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="monospace">
              T/2 ({(timePeriodMs / 2).toFixed(1)}ms)
            </text>
            <text x={svgWidth - paddingRight} y={paddingTop + plotHeight + 18} fill="#38bdf8" fontSize="10" textAnchor="end" fontFamily="monospace" fontWeight="bold">
              1 Cycle: T ({timePeriodMs.toFixed(1)}ms)
            </text>
          </svg>
        </div>

        {/* Practical Heating Effect Callout Box */}
        <div className="bg-amber-950/20 border border-amber-800/40 rounded-xl p-4 flex items-start gap-3">
          <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 mt-0.5 flex-shrink-0">
            <Flame className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
              {t.heatingEffectTitle}
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.heatingEffectText}
            </p>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
