import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const NonSinusoidalHarmonicsVisualizer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // DC offset and Harmonic amplitudes (peak values in Volts)
  const [vdc, setVdc] = useState<number>(0);
  const [v1, setV1] = useState<number>(100);
  const [v3, setV3] = useState<number>(33.3);
  const [v5, setV5] = useState<number>(20.0);
  const [v7, setV7] = useState<number>(14.3);

  // Phase angles in degrees
  const [theta1, setTheta1] = useState<number>(0);
  const [theta3, setTheta3] = useState<number>(0);
  const [theta5, setTheta5] = useState<number>(0);
  const [theta7, setTheta7] = useState<number>(0);

  // Visibility toggles
  const [showFundamental, setShowFundamental] = useState<boolean>(true);
  const [showHarmonics, setShowHarmonics] = useState<boolean>(true);

  // Presets
  const applyPreset = (type: 'sine' | 'square' | 'triangle' | 'rectifier') => {
    if (type === 'sine') {
      setVdc(0);
      setV1(100);
      setV3(0);
      setV5(0);
      setV7(0);
      setTheta1(0);
      setTheta3(0);
      setTheta5(0);
      setTheta7(0);
    } else if (type === 'square') {
      setVdc(0);
      setV1(100);
      setV3(33.3);
      setV5(20.0);
      setV7(14.3);
      setTheta1(0);
      setTheta3(0);
      setTheta5(0);
      setTheta7(0);
    } else if (type === 'triangle') {
      setVdc(0);
      setV1(100);
      setV3(11.1);
      setV5(4.0);
      setV7(2.0);
      setTheta1(0);
      setTheta3(180);
      setTheta5(0);
      setTheta7(180);
    } else if (type === 'rectifier') {
      setVdc(63.6);
      setV1(100);
      setV3(42.4);
      setV5(8.5);
      setV7(3.6);
      setTheta1(0);
      setTheta3(180);
      setTheta5(180);
      setTheta7(180);
    }
  };

  // Convert degrees to radians
  const r1 = (theta1 * Math.PI) / 180;
  const r3 = (theta3 * Math.PI) / 180;
  const r5 = (theta5 * Math.PI) / 180;
  const r7 = (theta7 * Math.PI) / 180;

  // Discrete sampling for waveform display and exact metric integration
  const samples = 200;
  const waveformPoints: { t: number; vTotal: number; v1: number; v3: number; v5: number; v7: number }[] = [];
  let peakVal = 0;
  let absSum = 0;

  for (let i = 0; i <= samples; i++) {
    const fraction = i / samples; // 0 to 1 over 1 cycle (2*pi)
    const wt = fraction * 2 * Math.PI;

    const val1 = v1 * Math.sin(wt + r1);
    const val3 = v3 * Math.sin(3 * wt + r3);
    const val5 = v5 * Math.sin(5 * wt + r5);
    const val7 = v7 * Math.sin(7 * wt + r7);
    const total = vdc + val1 + val3 + val5 + val7;

    waveformPoints.push({ t: fraction, vTotal: total, v1: val1, v3: val3, v5: val5, v7: val7 });

    if (Math.abs(total) > peakVal) {
      peakVal = Math.abs(total);
    }
    absSum += Math.abs(total);
  }

  // Exact Parseval RMS calculation: Vrms = sqrt(Vdc^2 + (V1^2 + V3^2 + V5^2 + V7^2)/2)
  const v1Rms = v1 / Math.SQRT2;
  const v3Rms = v3 / Math.SQRT2;
  const v5Rms = v5 / Math.SQRT2;
  const v7Rms = v7 / Math.SQRT2;
  const totalRms = Math.sqrt(vdc * vdc + (v1 * v1 + v3 * v3 + v5 * v5 + v7 * v7) / 2);

  // Average of absolute rectified value
  const avgVal = absSum / (samples + 1);

  // Form factor & Crest factor
  const formFactor = avgVal > 0.001 ? totalRms / avgVal : 0;
  const crestFactor = totalRms > 0.001 ? peakVal / totalRms : 0;

  // Total Harmonic Distortion of Voltage
  const harmonicRms = Math.sqrt((v3 * v3 + v5 * v5 + v7 * v7) / 2);
  const thdPercent = v1Rms > 0.001 ? (harmonicRms / v1Rms) * 100 : 0;

  // SVG coordinate transformation
  const svgWidth = 640;
  const svgHeight = 260;
  const centerY = svgHeight / 2;
  const maxScale = Math.max(160, peakVal * 1.25);
  const scaleY = (svgHeight / 2 - 20) / maxScale;

  const totalPath = waveformPoints
    .map((p, idx) => {
      const x = (p.t * (svgWidth - 60)) + 40;
      const y = centerY - p.vTotal * scaleY;
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const v1Path = waveformPoints
    .map((p, idx) => {
      const x = (p.t * (svgWidth - 60)) + 40;
      const y = centerY - p.v1 * scaleY;
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const v3Path = waveformPoints
    .map((p, idx) => {
      const x = (p.t * (svgWidth - 60)) + 40;
      const y = centerY - p.v3 * scaleY;
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const v5Path = waveformPoints
    .map((p, idx) => {
      const x = (p.t * (svgWidth - 60)) + 40;
      const y = centerY - p.v5 * scaleY;
      return `${idx === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-5 shadow-2xl text-slate-100 my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <h3 className="text-lg font-bold text-white tracking-wide">
              {lang === 'hi' ? 'अ-ज्यावक्रीय तरंगरूप एवं हार्मोनिक्स संश्लेषण' : lang === 'bn' ? 'নন-সাইনুসয়েডাল তরঙ্গ ও হারমোনিক্স সংশ্লেষণ' : 'Non-Sinusoidal Waveform & Harmonics Synthesizer'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {lang === 'hi'
              ? 'फूरियर श्रेणी के घटक जोड़कर परिणामी तरंगरूप, RMS, एवं फॉर्म फैक्टर का लाइव विश्लेषण करें'
              : lang === 'bn'
              ? 'ফুরিয়ার সিরিজের উপাদান যুক্ত করে লব্ধি তরঙ্গ, RMS ও ফর্ম ফ্যাক্টরের লাইভ বিশ্লেষণ করুন'
              : 'Synthesize complex periodic waves via Fourier harmonics and analyze true RMS, form factor, and peak distortion'}
          </p>
        </div>

        {/* Presets */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs text-slate-400 mr-1">{lang === 'hi' ? 'प्रीसेट:' : lang === 'bn' ? 'প্রিসেট:' : 'Presets:'}</span>
          <button
            id={`${controlId}-btn-sine`}
            onClick={() => applyPreset('sine')}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition-colors"
          >
            {lang === 'hi' ? 'शुद्ध ज्या' : lang === 'bn' ? 'বিশুদ্ধ সাইন' : 'Pure Sine'}
          </button>
          <button
            id={`${controlId}-btn-square`}
            onClick={() => applyPreset('square')}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition-colors"
          >
            {lang === 'hi' ? 'वर्ग तरंग' : lang === 'bn' ? 'বর্গ তরঙ্গ' : 'Square Wave'}
          </button>
          <button
            id={`${controlId}-btn-triangle`}
            onClick={() => applyPreset('triangle')}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 transition-colors"
          >
            {lang === 'hi' ? 'त्रिभुज तरंग' : lang === 'bn' ? 'ত্রিভুজ তরঙ্গ' : 'Triangular'}
          </button>
          <button
            id={`${controlId}-btn-rectifier`}
            onClick={() => applyPreset('rectifier')}
            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-purple-300 border border-slate-700 transition-colors"
          >
            {lang === 'hi' ? 'दिष्टकारी' : lang === 'bn' ? 'রেকটিফায়ার' : 'Rectifier'}
          </button>
        </div>
      </div>

      {/* Interactive Waveform Display (SVG) */}
      <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 relative overflow-hidden mb-6">
        <div className="flex items-center justify-between text-xs text-slate-400 px-2 pb-2 border-b border-slate-900">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-cyan-300">
              <span className="w-3 h-1 bg-cyan-400 rounded-full inline-block"></span>
              {lang === 'hi' ? 'परिणामी तरंग v(t)' : lang === 'bn' ? 'লব্ধি তরঙ্গ v(t)' : 'Composite Wave v(t)'}
            </span>
            {showFundamental && (
              <span className="flex items-center gap-1.5 text-blue-400">
                <span className="w-3 h-0.5 bg-blue-400 inline-block border-t border-dashed"></span>
                v₁ (Fundamental)
              </span>
            )}
            {showHarmonics && (
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-3 h-0.5 bg-amber-400 inline-block"></span>
                v₃, v₅
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-300">
              <input
                type="checkbox"
                checked={showFundamental}
                onChange={(e) => setShowFundamental(e.target.checked)}
                className="rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-0"
              />
              {lang === 'hi' ? 'मूल तरंग' : lang === 'bn' ? 'মৌলিক তরঙ্গ' : 'Fundamental'}
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-300">
              <input
                type="checkbox"
                checked={showHarmonics}
                onChange={(e) => setShowHarmonics(e.target.checked)}
                className="rounded border-slate-700 bg-slate-800 text-amber-500 focus:ring-0"
              />
              {lang === 'hi' ? 'हार्मोनिक्स' : lang === 'bn' ? 'হারমোনিক্স' : 'Harmonics'}
            </label>
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto min-w-[500px]" aria-label="Fourier Waveform Synthesis Plot">
            {/* Grid Lines */}
            <line x1="40" y1={centerY} x2={svgWidth - 20} y2={centerY} stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="40" y1="20" x2="40" y2={svgHeight - 20} stroke="#334155" strokeWidth="1.5" />
            <line x1={(svgWidth - 60) / 2 + 40} y1="20" x2={(svgWidth - 60) / 2 + 40} y2={svgHeight - 20} stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
            <line x1={svgWidth - 20} y1="20" x2={svgWidth - 20} y2={svgHeight - 20} stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />

            {/* Voltage Level Marks */}
            <text x="32" y={centerY + 4} fill="#64748b" fontSize="10" textAnchor="end">0V</text>
            <text x="32" y={centerY - 100 * scaleY + 4} fill="#64748b" fontSize="10" textAnchor="end">+100V</text>
            <text x="32" y={centerY + 100 * scaleY + 4} fill="#64748b" fontSize="10" textAnchor="end">-100V</text>

            {/* Time Axis Labels */}
            <text x="40" y={svgHeight - 6} fill="#64748b" fontSize="10" textAnchor="middle">0</text>
            <text x={(svgWidth - 60) / 2 + 40} y={svgHeight - 6} fill="#64748b" fontSize="10" textAnchor="middle">π (10 ms)</text>
            <text x={svgWidth - 20} y={svgHeight - 6} fill="#64748b" fontSize="10" textAnchor="middle">2π (20 ms)</text>

            {/* Harmonic Waveforms */}
            {showFundamental && (
              <path d={v1Path} fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6" />
            )}
            {showHarmonics && v3 > 0 && (
              <path d={v3Path} fill="none" stroke="#f59e0b" strokeWidth="1.2" opacity="0.5" />
            )}
            {showHarmonics && v5 > 0 && (
              <path d={v5Path} fill="none" stroke="#10b981" strokeWidth="1.2" opacity="0.4" />
            )}

            {/* DC Offset Level */}
            {vdc !== 0 && (
              <line
                x1="40"
                y1={centerY - vdc * scaleY}
                x2={svgWidth - 20}
                y2={centerY - vdc * scaleY}
                stroke="#a855f7"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />
            )}

            {/* Composite Waveform (Total) */}
            <path d={totalPath} fill="none" stroke="#22d3ee" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Calculated Real-time Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        <div className="bg-slate-950 p-3 rounded-xl border border-cyan-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'सत्य RMS मान' : lang === 'bn' ? 'প্রকৃত RMS মান' : 'True RMS Voltage'}
          </span>
          <span className="text-xl font-black text-cyan-300">{totalRms.toFixed(2)}</span>
          <span className="text-xs text-slate-400 ml-1">V</span>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-blue-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'मूल घटक (V₁,rms)' : lang === 'bn' ? 'মৌলিক RMS (V₁)' : 'Fundamental RMS'}
          </span>
          <span className="text-xl font-black text-blue-300">{v1Rms.toFixed(2)}</span>
          <span className="text-xs text-slate-400 ml-1">V</span>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-amber-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'शिखर मान (V_peak)' : lang === 'bn' ? 'পিক ভোল্টেজ' : 'Peak Voltage'}
          </span>
          <span className="text-xl font-black text-amber-300">{peakVal.toFixed(1)}</span>
          <span className="text-xs text-slate-400 ml-1">V</span>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-purple-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'औसत मान (V_avg)' : lang === 'bn' ? 'গড় মান (V_avg)' : 'Average Value'}
          </span>
          <span className="text-xl font-black text-purple-300">{avgVal.toFixed(2)}</span>
          <span className="text-xs text-slate-400 ml-1">V</span>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-emerald-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'फॉर्म फैक्टर (k_f)' : lang === 'bn' ? 'ফর্ম ফ্যাক্টর (k_f)' : 'Form Factor (k_f)'}
          </span>
          <span className="text-xl font-black text-emerald-300">{formFactor.toFixed(3)}</span>
          <span className="text-[10px] text-slate-400 block">{formFactor === 1.11 ? 'Pure Sine' : 'Sine=1.11'}</span>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-rose-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">
            {lang === 'hi' ? 'कुल विरूपण (THD)' : lang === 'bn' ? 'টোটাল THD' : 'Voltage THD'}
          </span>
          <span className="text-xl font-black text-rose-400">{thdPercent.toFixed(1)}%</span>
          <span className="text-[10px] text-slate-400 block">{thdPercent > 5 ? 'High Distortion' : 'Grid Compliant'}</span>
        </div>
      </div>

      {/* Sliders: Fourier Harmonic Coefficients */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
          {lang === 'hi' ? 'फूरियर घटक नियंत्रण (Harmonic Amplitude & Phase)' : lang === 'bn' ? 'ফুরিয়ার কম্পোনেন্ট নিয়ন্ত্রণ' : 'Fourier Harmonic Component Controls'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Fundamental V1 */}
          <div className="space-y-1 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs">
              <label htmlFor={`${controlId}-v1`} className="text-blue-300 font-semibold">
                Fundamental (V₁): {v1} V (Peak)
              </label>
              <span className="text-slate-400">Phase: {theta1}°</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                id={`${controlId}-v1`}
                type="range"
                min="0"
                max="150"
                step="1"
                value={v1}
                onChange={(e) => setV1(Number(e.target.value))}
                className="w-full accent-blue-500"
                aria-label="Fundamental Amplitude"
              />
              <input
                id={`${controlId}-theta1`}
                type="range"
                min="-180"
                max="180"
                step="15"
                value={theta1}
                onChange={(e) => setTheta1(Number(e.target.value))}
                className="w-full accent-blue-400"
                aria-label="Fundamental Phase"
              />
            </div>
          </div>

          {/* 3rd Harmonic V3 */}
          <div className="space-y-1 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs">
              <label htmlFor={`${controlId}-v3`} className="text-amber-300 font-semibold">
                3rd Harmonic (V₃, 150 Hz): {v3} V
              </label>
              <span className="text-slate-400">Phase: {theta3}°</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                id={`${controlId}-v3`}
                type="range"
                min="0"
                max="100"
                step="0.5"
                value={v3}
                onChange={(e) => setV3(Number(e.target.value))}
                className="w-full accent-amber-500"
                aria-label="3rd Harmonic Amplitude"
              />
              <input
                id={`${controlId}-theta3`}
                type="range"
                min="-180"
                max="180"
                step="15"
                value={theta3}
                onChange={(e) => setTheta3(Number(e.target.value))}
                className="w-full accent-amber-400"
                aria-label="3rd Harmonic Phase"
              />
            </div>
          </div>

          {/* 5th Harmonic V5 */}
          <div className="space-y-1 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs">
              <label htmlFor={`${controlId}-v5`} className="text-emerald-300 font-semibold">
                5th Harmonic (V₅, 250 Hz): {v5} V
              </label>
              <span className="text-slate-400">Phase: {theta5}°</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                id={`${controlId}-v5`}
                type="range"
                min="0"
                max="60"
                step="0.5"
                value={v5}
                onChange={(e) => setV5(Number(e.target.value))}
                className="w-full accent-emerald-500"
                aria-label="5th Harmonic Amplitude"
              />
              <input
                id={`${controlId}-theta5`}
                type="range"
                min="-180"
                max="180"
                step="15"
                value={theta5}
                onChange={(e) => setTheta5(Number(e.target.value))}
                className="w-full accent-emerald-400"
                aria-label="5th Harmonic Phase"
              />
            </div>
          </div>

          {/* 7th Harmonic V7 & DC Offset */}
          <div className="space-y-1 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
            <div className="flex justify-between text-xs">
              <label htmlFor={`${controlId}-v7`} className="text-purple-300 font-semibold">
                7th Harmonic (V₇, 350 Hz): {v7} V
              </label>
              <span className="text-slate-400">DC Offset: {vdc} V</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                id={`${controlId}-v7`}
                type="range"
                min="0"
                max="40"
                step="0.5"
                value={v7}
                onChange={(e) => setV7(Number(e.target.value))}
                className="w-full accent-purple-500"
                aria-label="7th Harmonic Amplitude"
              />
              <input
                id={`${controlId}-vdc`}
                type="range"
                min="0"
                max="100"
                step="1"
                value={vdc}
                onChange={(e) => setVdc(Number(e.target.value))}
                className="w-full accent-purple-400"
                aria-label="DC Offset Voltage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
