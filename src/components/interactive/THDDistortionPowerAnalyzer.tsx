import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const THDDistortionPowerAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Operating parameters
  const [voltage, setVoltage] = useState<number>(230); // V (RMS fundamental)
  const [i1, setI1] = useState<number>(20.0); // A fundamental
  const [i3, setI3] = useState<number>(8.0); // A 3rd harmonic (triplen)
  const [i5, setI5] = useState<number>(5.0); // A 5th harmonic
  const [i7, setI7] = useState<number>(3.0); // A 7th harmonic
  const [i9, setI9] = useState<number>(1.5); // A 9th harmonic (triplen)
  const [i11, setI11] = useState<number>(1.0); // A 11th harmonic

  // Fundamental Displacement Power Factor
  const [dpf, setDpf] = useState<number>(0.85); // cos(phi1) lagging

  // Presets
  const applyPreset = (type: 'linear' | 'vfd' | 'smps' | 'arc') => {
    if (type === 'linear') {
      setI1(20.0);
      setI3(0);
      setI5(0);
      setI7(0);
      setI9(0);
      setI11(0);
      setDpf(0.92);
    } else if (type === 'smps') {
      // Switched-mode power supply / LED drivers (rich in 3rd & 5th)
      setI1(15.0);
      setI3(12.0);
      setI5(8.0);
      setI7(4.5);
      setI9(2.5);
      setI11(1.2);
      setDpf(0.95);
    } else if (type === 'vfd') {
      // 6-pulse VFD (5th, 7th dominant, no triplens in 3-wire)
      setI1(25.0);
      setI3(0.5);
      setI5(7.5);
      setI7(4.2);
      setI9(0.2);
      setI11(2.0);
      setDpf(0.82);
    } else if (type === 'arc') {
      // Arc furnace / welder
      setI1(30.0);
      setI3(9.0);
      setI5(6.0);
      setI7(4.0);
      setI9(2.0);
      setI11(1.5);
      setDpf(0.70);
    }
  };

  // Calculations
  const harmonicCurrentSq = i3 * i3 + i5 * i5 + i7 * i7 + i9 * i9 + i11 * i11;
  const harmonicRmsCurrent = Math.sqrt(harmonicCurrentSq);
  const totalRmsCurrent = Math.sqrt(i1 * i1 + harmonicCurrentSq);

  // Current THD (%)
  const thdi = i1 > 0 ? (harmonicRmsCurrent / i1) * 100 : 0;

  // Distortion Factor (nu)
  const distortionFactor = totalRmsCurrent > 0 ? i1 / totalRmsCurrent : 0;

  // True Power Factor = DPF * DistortionFactor
  const truePf = dpf * distortionFactor;

  // Powers
  // Active Power P = V1 * I1 * DPF (W)
  const activePowerP = voltage * i1 * dpf;

  // Apparent Power S = V1 * Irms (VA)
  const apparentPowerS = voltage * totalRmsCurrent;

  // Fundamental Reactive Power Q1 = V1 * I1 * sin(phi1) (VAR)
  const sinPhi1 = Math.sqrt(Math.max(0, 1 - dpf * dpf));
  const reactivePowerQ = voltage * i1 * sinPhi1;

  // Distortion Power D = V1 * harmonicRmsCurrent = sqrt(S^2 - P^2 - Q^2) (VAD)
  const distortionPowerD = voltage * harmonicRmsCurrent;

  // Neutral Current in 3-phase 4-wire with balanced triplen harmonics: In ≈ 3 * sqrt(i3^2 + i9^2)
  const triplenRms = Math.sqrt(i3 * i3 + i9 * i9);
  const neutralCurrent = 3 * triplenRms;
  const neutralOverloadRatio = i1 > 0 ? neutralCurrent / totalRmsCurrent : 0;

  // Maximum current bar scale
  const maxCurrent = Math.max(i1, 30);

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-2xl text-slate-100 my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            <h3 className="text-lg font-bold text-white tracking-wide">
              {lang === 'hi' ? 'THD एवं विकृति शक्ति (Distortion Power) विश्लेषक' : lang === 'bn' ? 'THD ও ডিস্টরশন পাওয়ার বিশ্লেষক' : 'THD & Distortion Power Analyzer'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {lang === 'hi'
              ? 'अ-रैखिक लोड, हार्मोनिक करंट स्पेक्ट्रम, बुडियानु विकृति शक्ति (D), एवं न्यूट्रल करंट ओवरलोड का परीक्षण करें'
              : lang === 'bn'
              ? 'নন-লিনিয়ার লোড, হারমোনিক স্পেকট্রাম, বুডিয়ানু ডিস্টরশন পাওয়ার (D) ও নিউট্রাল ওভারলোডের অনুকরণ'
              : 'Simulate non-linear loads, harmonic current spectra, Budeanu distortion power (D), and 3-phase neutral conductor sizing'}
          </p>
        </div>

        {/* Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-slate-400 mr-1">{lang === 'hi' ? 'लोड प्रकार:' : lang === 'bn' ? 'লোড ধরন:' : 'Load Types:'}</span>
          <button
            id={`${controlId}-btn-linear`}
            onClick={() => applyPreset('linear')}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 transition-colors"
          >
            {lang === 'hi' ? 'रैखिक भार' : lang === 'bn' ? 'লিনিয়ার লোড' : 'Linear (R-L)'}
          </button>
          <button
            id={`${controlId}-btn-smps`}
            onClick={() => applyPreset('smps')}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition-colors"
          >
            {lang === 'hi' ? 'SMPS / LED' : lang === 'bn' ? 'SMPS / LED' : 'SMPS / LED'}
          </button>
          <button
            id={`${controlId}-btn-vfd`}
            onClick={() => applyPreset('vfd')}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition-colors"
          >
            {lang === 'hi' ? '6-पल्स VFD' : lang === 'bn' ? '৬-পালস VFD' : '6-Pulse VFD'}
          </button>
          <button
            id={`${controlId}-btn-arc`}
            onClick={() => applyPreset('arc')}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-rose-300 border border-slate-700 transition-colors"
          >
            {lang === 'hi' ? 'आर्क फर्नेस' : lang === 'bn' ? 'আর্ক ফার্নেস' : 'Arc Welder'}
          </button>
        </div>
      </div>

      {/* Main KPI Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className={`p-3 rounded-xl border text-center ${thdi > 20 ? 'bg-rose-950/40 border-rose-500/50' : 'bg-slate-950 border-amber-500/30'}`}>
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'करंट THD (THD_i)' : lang === 'bn' ? 'কারেন্ট THD (THD_i)' : 'Current THD (THD_i)'}
          </span>
          <span className={`text-2xl font-black ${thdi > 20 ? 'text-rose-400' : 'text-amber-300'}`}>
            {thdi.toFixed(1)}%
          </span>
          <span className="text-[10px] text-slate-400 block mt-0.5">
            {thdi < 5 ? 'IEEE-519 Pass' : thdi < 20 ? 'Moderate Dist.' : 'Severe Dist.'}
          </span>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-cyan-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'सत्य शक्ति गुणांक (PF_true)' : lang === 'bn' ? 'প্রকৃত পাওয়ার ফ্যাক্টর' : 'True Power Factor (PF)'}
          </span>
          <span className="text-2xl font-black text-cyan-300">{truePf.toFixed(3)}</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">
            DPF ({dpf.toFixed(2)}) × ν ({distortionFactor.toFixed(2)})
          </span>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-purple-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'विकृति शक्ति D (Budeanu)' : lang === 'bn' ? 'ডিস্টরশন পাওয়ার D' : 'Distortion Power (D)'}
          </span>
          <span className="text-2xl font-black text-purple-300">{(distortionPowerD / 1000).toFixed(2)}</span>
          <span className="text-xs text-slate-400 ml-1">kVAD</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">Harmonic non-working</span>
        </div>

        <div className={`p-3 rounded-xl border text-center ${neutralOverloadRatio > 1.0 ? 'bg-red-950/40 border-red-500/60' : 'bg-slate-950 border-emerald-500/30'}`}>
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'न्यूट्रल करंट (I_N in 3φ)' : lang === 'bn' ? 'নিউট্রাল কারেন্ট (I_N)' : '3φ Neutral Current (I_N)'}
          </span>
          <span className={`text-2xl font-black ${neutralOverloadRatio > 1.0 ? 'text-red-400' : 'text-emerald-300'}`}>
            {neutralCurrent.toFixed(1)} A
          </span>
          <span className="text-[10px] text-slate-400 block mt-0.5">
            {neutralOverloadRatio > 1.0 ? '⚠️ OVERLOAD (I_N > I_line)' : 'Safe (I_N < I_line)'}
          </span>
        </div>
      </div>

      {/* Harmonic Spectrum Bar Chart */}
      <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 mb-6">
        <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
          <span className="font-bold text-slate-300 uppercase tracking-wider">
            {lang === 'hi' ? 'हार्मोनिक करंट स्पेक्ट्रम (Harmonic Spectrum Analysis)' : lang === 'bn' ? 'হারমোনিক কারেন্ট স্পেকট্রাম' : 'Harmonic Current Spectrum'}
          </span>
          <span className="text-[11px] text-cyan-400">
            Total I_rms = {totalRmsCurrent.toFixed(2)} A (Fundamental I₁ = {i1.toFixed(1)} A)
          </span>
        </div>

        {/* Bar container */}
        <div className="space-y-2">
          {[
            { label: 'Fundamental (50 Hz)', val: i1, color: 'bg-blue-500', pct: 100 },
            { label: '3rd Harmonic (150 Hz) - Triplen', val: i3, color: 'bg-amber-500', pct: (i3 / i1) * 100 },
            { label: '5th Harmonic (250 Hz)', val: i5, color: 'bg-emerald-500', pct: (i5 / i1) * 100 },
            { label: '7th Harmonic (350 Hz)', val: i7, color: 'bg-teal-500', pct: (i7 / i1) * 100 },
            { label: '9th Harmonic (450 Hz) - Triplen', val: i9, color: 'bg-purple-500', pct: (i9 / i1) * 100 },
            { label: '11th Harmonic (550 Hz)', val: i11, color: 'bg-rose-500', pct: (i11 / i1) * 100 }
          ].map((bar, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs">
              <span className="w-48 text-slate-300 font-mono text-[11px] truncate">{bar.label}:</span>
              <div className="flex-1 bg-slate-900 rounded-full h-4 overflow-hidden border border-slate-800 relative">
                <div
                  className={`h-full ${bar.color} transition-all duration-200 rounded-full`}
                  style={{ width: `${Math.min(100, (bar.val / maxCurrent) * 100)}%` }}
                ></div>
              </div>
              <span className="w-16 text-right font-bold text-slate-200">{bar.val.toFixed(1)} A</span>
              <span className="w-14 text-right text-[10px] text-slate-400 font-mono">
                {idx === 0 ? '100%' : `${bar.pct.toFixed(1)}%`}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Power Decomposition Breakdown */}
      <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 border-b border-slate-800 pb-2">
          {lang === 'hi' ? 'बुडियानु 4-शक्ति वियोजन (Budeanu 4-Power Decomposition: S² = P² + Q² + D²)' : lang === 'bn' ? 'বুডিয়ানু ৪-ক্ষমতা বিভাজন (S² = P² + Q² + D²)' : 'Budeanu Orthogonal Power Components: S² = P² + Q² + D²'}
        </h4>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-900 p-2.5 rounded-lg border border-blue-900/50">
            <span className="text-blue-400 font-semibold block">Active Power (P)</span>
            <span className="text-lg font-black text-white">{(activePowerP / 1000).toFixed(2)} kW</span>
            <span className="text-[10px] text-slate-400 block">Useful Work Output</span>
          </div>

          <div className="bg-slate-900 p-2.5 rounded-lg border border-teal-900/50">
            <span className="text-teal-400 font-semibold block">Reactive Power (Q₁)</span>
            <span className="text-lg font-black text-white">{(reactivePowerQ / 1000).toFixed(2)} kVAR</span>
            <span className="text-[10px] text-slate-400 block">Fundamental Magnetizing</span>
          </div>

          <div className="bg-slate-900 p-2.5 rounded-lg border border-purple-900/50">
            <span className="text-purple-400 font-semibold block">Distortion Power (D)</span>
            <span className="text-lg font-black text-white">{(distortionPowerD / 1000).toFixed(2)} kVAD</span>
            <span className="text-[10px] text-slate-400 block">Harmonic Heating Only</span>
          </div>

          <div className="bg-slate-900 p-2.5 rounded-lg border border-amber-900/50">
            <span className="text-amber-400 font-semibold block">Apparent Power (S)</span>
            <span className="text-lg font-black text-white">{(apparentPowerS / 1000).toFixed(2)} kVA</span>
            <span className="text-[10px] text-slate-400 block">Total Grid Loading</span>
          </div>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
          {lang === 'hi' ? 'परिपथ एवं भार प्राचल (Parameters Adjustment)' : lang === 'bn' ? 'বর্তনী ও লোড প্যারামিটার' : 'Circuit & Nonlinear Load Parameters'}
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {/* Voltage */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor={`${controlId}-volt`} className="text-slate-300">RMS Voltage (V):</label>
              <span className="font-bold text-cyan-300">{voltage} V</span>
            </div>
            <input
              id={`${controlId}-volt`}
              type="range"
              min="100"
              max="415"
              step="5"
              value={voltage}
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="w-full accent-cyan-500"
              aria-label="RMS Voltage"
            />
          </div>

          {/* Fundamental Current I1 */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor={`${controlId}-i1`} className="text-slate-300">Fundamental I₁:</label>
              <span className="font-bold text-blue-300">{i1.toFixed(1)} A</span>
            </div>
            <input
              id={`${controlId}-i1`}
              type="range"
              min="5"
              max="50"
              step="1"
              value={i1}
              onChange={(e) => setI1(Number(e.target.value))}
              className="w-full accent-blue-500"
              aria-label="Fundamental Current"
            />
          </div>

          {/* DPF cos(phi1) */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor={`${controlId}-dpf`} className="text-slate-300">Displacement PF (cos φ₁):</label>
              <span className="font-bold text-emerald-300">{dpf.toFixed(2)}</span>
            </div>
            <input
              id={`${controlId}-dpf`}
              type="range"
              min="0.4"
              max="1.0"
              step="0.01"
              value={dpf}
              onChange={(e) => setDpf(Number(e.target.value))}
              className="w-full accent-emerald-500"
              aria-label="Displacement Power Factor"
            />
          </div>

          {/* 3rd Harmonic I3 */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor={`${controlId}-i3`} className="text-slate-300">3rd Harmonic (I₃):</label>
              <span className="font-bold text-amber-300">{i3.toFixed(1)} A</span>
            </div>
            <input
              id={`${controlId}-i3`}
              type="range"
              min="0"
              max="25"
              step="0.5"
              value={i3}
              onChange={(e) => setI3(Number(e.target.value))}
              className="w-full accent-amber-500"
              aria-label="3rd Harmonic Current"
            />
          </div>

          {/* 5th Harmonic I5 */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor={`${controlId}-i5`} className="text-slate-300">5th Harmonic (I₅):</label>
              <span className="font-bold text-emerald-300">{i5.toFixed(1)} A</span>
            </div>
            <input
              id={`${controlId}-i5`}
              type="range"
              min="0"
              max="20"
              step="0.5"
              value={i5}
              onChange={(e) => setI5(Number(e.target.value))}
              className="w-full accent-emerald-500"
              aria-label="5th Harmonic Current"
            />
          </div>

          {/* 7th Harmonic I7 */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor={`${controlId}-i7`} className="text-slate-300">7th Harmonic (I₇):</label>
              <span className="font-bold text-teal-300">{i7.toFixed(1)} A</span>
            </div>
            <input
              id={`${controlId}-i7`}
              type="range"
              min="0"
              max="15"
              step="0.5"
              value={i7}
              onChange={(e) => setI7(Number(e.target.value))}
              className="w-full accent-teal-500"
              aria-label="7th Harmonic Current"
            />
          </div>

          {/* 9th Harmonic I9 */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor={`${controlId}-i9`} className="text-slate-300">9th Harmonic (I₉):</label>
              <span className="font-bold text-purple-300">{i9.toFixed(1)} A</span>
            </div>
            <input
              id={`${controlId}-i9`}
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={i9}
              onChange={(e) => setI9(Number(e.target.value))}
              className="w-full accent-purple-500"
              aria-label="9th Harmonic Current"
            />
          </div>

          {/* 11th Harmonic I11 */}
          <div className="space-y-1">
            <div className="flex justify-between">
              <label htmlFor={`${controlId}-i11`} className="text-slate-300">11th Harmonic (I₁₁):</label>
              <span className="font-bold text-rose-300">{i11.toFixed(1)} A</span>
            </div>
            <input
              id={`${controlId}-i11`}
              type="range"
              min="0"
              max="8"
              step="0.2"
              value={i11}
              onChange={(e) => setI11(Number(e.target.value))}
              className="w-full accent-rose-500"
              aria-label="11th Harmonic Current"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
