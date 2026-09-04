import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const HarmonicResonanceAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Inputs
  const [trafoKva, setTrafoKva] = useState<number>(1000); // 1000 kVA transformer
  const [trafoZPercent, setTrafoZPercent] = useState<number>(5.5); // 5.5% impedance
  const [capKvar, setCapKvar] = useState<number>(300); // 300 kVAR capacitor bank
  const [detunePct, setDetunePct] = useState<number>(7); // 0 (bare), 5.67, 7, or 14%

  // Calculations
  const sScKva = (trafoKva * 100) / trafoZPercent; // Short circuit capacity
  // Bare parallel resonance order
  const bareResonanceOrder = Math.sqrt(sScKva / capKvar);
  const bareResonanceFreq = bareResonanceOrder * 50;

  // With detuning reactor p = X_L / X_C
  // Series resonance frequency of the LC branch: f_s = f_1 / sqrt(p)
  let branchSeriesFreq = 0;
  let isDetuned = detunePct > 0;
  if (isDetuned) {
    branchSeriesFreq = 50 / Math.sqrt(detunePct / 100);
  }

  // Resonance hazard evaluation
  // Check if bare resonant order is near 5th (4.6 to 5.4) or 7th (6.5 to 7.5) or 11th (10.5 to 11.5)
  let resonanceRisk = 'SAFE';
  let riskColor = 'text-emerald-400';
  if (!isDetuned) {
    if (Math.abs(bareResonanceOrder - 5) < 0.5) {
      resonanceRisk = 'CRITICAL 5th HARMONIC PARALLEL RESONANCE!';
      riskColor = 'text-rose-400';
    } else if (Math.abs(bareResonanceOrder - 7) < 0.5) {
      resonanceRisk = 'CRITICAL 7th HARMONIC PARALLEL RESONANCE!';
      riskColor = 'text-rose-400';
    } else if (Math.abs(bareResonanceOrder - 11) < 0.6) {
      resonanceRisk = 'ELEVATED 11th HARMONIC RESONANCE RISK';
      riskColor = 'text-amber-400';
    } else {
      resonanceRisk = 'MODERATE (Non-coincident order)';
      riskColor = 'text-sky-400';
    }
  } else {
    resonanceRisk = `SAFE — DETUNED (${detunePct}% Reactor)`;
    riskColor = 'text-emerald-400';
  }

  // SVG plot parameters: frequency from 50 Hz to 600 Hz
  const svgWidth = 460;
  const svgHeight = 220;
  const paddingX = 40;
  const paddingY = 25;
  const plotWidth = svgWidth - paddingX - 20;
  const plotHeight = svgHeight - paddingY - 30;

  // Generate curve points for bus impedance Z vs Frequency
  // Z_bus = Z_grid || Z_cap_branch
  // Z_grid(f) = j * (f/50) * X_trafo
  // Z_cap_branch(f) = j * (f/50)*X_L - j * (50/f)*X_C
  // For qualitative visual representation:
  const numPoints = 80;
  const fMin = 50;
  const fMax = 600;

  const points: { f: number; x: number; y: number }[] = [];
  for (let i = 0; i <= numPoints; i++) {
    const f = fMin + (i / numPoints) * (fMax - fMin);
    const x = paddingX + ((f - fMin) / (fMax - fMin)) * plotWidth;

    // Relative impedance calculation
    let zRel = 1;
    if (!isDetuned) {
      // Parallel tank peak at bareResonanceFreq
      const df = Math.abs(f - bareResonanceFreq);
      zRel = (1 / Math.sqrt(Math.pow(df / 25, 2) + 0.04)) * 1.5;
    } else {
      // With detuned reactor: series resonance at branchSeriesFreq where Z drops to zero, then becomes purely inductive
      // Parallel resonance is pushed below branchSeriesFreq (around 120-170Hz)
      const fParallel = branchSeriesFreq * 0.9;
      const dfP = Math.abs(f - fParallel);
      const peak = (1 / Math.sqrt(Math.pow(dfP / 25, 2) + 0.1)) * 1.2;
      const valley = Math.min(1, Math.abs(f - branchSeriesFreq) / 40);
      zRel = f < branchSeriesFreq ? peak : (f / 150) * valley + 0.5;
    }

    const clampedZ = Math.min(8, Math.max(0.2, zRel));
    const y = svgHeight - paddingY - (clampedZ / 8) * plotHeight;
    points.push({ f, x, y });
  }

  const pathD = points.reduce((acc, p, idx) => `${acc} ${idx === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`, '');

  const t = {
    title: {
      en: 'Harmonics, Capacitor Banks & Parallel Resonance Analyzer',
      hi: 'हार्मोनिक्स, कैपेसिटर बैंक एवं समानांतर अनुनाद विश्लेषक',
      bn: 'হারমোনিক্স, ক্যাপাসিটর ব্যাংক ও প্যারালাল রেজোন্যান্স বিশ্লেষক'
    },
    subtitle: {
      en: 'Visualize harmonic amplification, calculate parallel resonance order hr, and explore detuned reactor anti-resonance filtering.',
      hi: 'हार्मोनिक प्रवर्धन देखें, समानांतर अनुनाद क्रम hr की गणना करें और डीट्यून्ड रिएक्टर एंटी-अनुनाद फ़िल्टरिंग का अन्वेषण करें।',
      bn: 'হারমোনিক বিবর্ধন দেখুন, প্যারালাল রেজোন্যান্স ক্রম hr গণনা করুন এবং ডিটিউনড রিঅ্যাক্টর অ্যান্টি-রেজোন্যান্স ফিল্টারিং অন্বেষণ করুন।'
    },
    transformerRating: { en: 'Transformer Rating S_trafo (kVA)', hi: 'ट्रांसफार्मर रेटिंग S_trafo (kVA)', bn: 'ট্রান্সফরমার রেটিং S_trafo (kVA)' },
    trafoZ: { en: 'Transformer %Z', hi: 'ट्रांसफार्मर %Z', bn: 'ট্রান্সফরমার %Z' },
    bankRating: { en: 'Capacitor Bank Qc (kVAR)', hi: 'कैपेसिटर बैंक Qc (kVAR)', bn: 'ক্যাপাসিটর ব্যাংক Qc (kVAR)' },
    detuneReactor: { en: 'Series Detuning Reactor (p%)', hi: 'सीरीज डीट्यूनिंग रिएक्टर (p%)', bn: 'সিরিজ ডিটিউনিং রিঅ্যাক্টর (p%)' },
    bareHr: { en: 'Natural Parallel Resonant Order (hr)', hi: 'प्राकृतिक समानांतर अनुनाद क्रम (hr)', bn: 'প্রাকৃতিক প্যারালাল রেজোন্যান্ট ক্রম (hr)' },
    resonantFreq: { en: 'Parallel Resonant Frequency', hi: 'समानांतर अनुनाद आवृत्ति', bn: 'প্যারালাল রেজোন্যান্ট কম্পাঙ্ক' },
    seriesTuning: { en: 'Series Filter Resonant Tuning', hi: 'सीरीज फिल्टर अनुनाद ट्यूनिंग', bn: 'সিরিজ ফিল্টার রেজোন্যান্ট টিউনিং' },
    riskAssessment: { en: 'Resonance Risk Status', hi: 'अनुनाद जोखिम स्थिति', bn: 'রেজোন্যান্স ঝুঁকি অবস্থা' }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="text-xl font-bold text-amber-400">{t.title[lang]}</h3>
        <p className="text-sm text-slate-400 mt-1">{t.subtitle[lang]}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Inputs */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950 p-5 rounded-lg border border-slate-800">
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-trafo`} className="text-emerald-400">{t.transformerRating[lang]}:</label>
              <span className="font-mono text-emerald-300 text-base">{trafoKva} kVA</span>
            </div>
            <input
              id={`${controlId}-trafo`}
              type="range"
              min="500"
              max="2500"
              step="100"
              value={trafoKva}
              onChange={(e) => setTrafoKva(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-z`} className="text-slate-300">{t.trafoZ[lang]}:</label>
              <span className="font-mono text-slate-200">{trafoZPercent.toFixed(1)}%</span>
            </div>
            <input
              id={`${controlId}-z`}
              type="range"
              min="4.0"
              max="8.0"
              step="0.5"
              value={trafoZPercent}
              onChange={(e) => setTrafoZPercent(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-qc`} className="text-sky-400">{t.bankRating[lang]}:</label>
              <span className="font-mono text-sky-300 text-base">{capKvar} kVAR</span>
            </div>
            <input
              id={`${controlId}-qc`}
              type="range"
              min="50"
              max="800"
              step="25"
              value={capKvar}
              onChange={(e) => setCapKvar(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.detuneReactor[lang]}:</label>
            <div className="grid grid-cols-4 gap-1.5">
              {[
                { val: 0, label: '0% (Bare)' },
                { val: 5.67, label: '5.67% (210Hz)' },
                { val: 7, label: '7% (189Hz)' },
                { val: 14, label: '14% (134Hz)' }
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setDetunePct(item.val)}
                  className={`py-2 px-1 text-[11px] font-semibold rounded border transition-all text-center ${
                    detunePct === item.val
                      ? 'bg-amber-600/40 border-amber-500 text-amber-300 shadow-md font-bold'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs space-y-1.5 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-400">Short-Circuit MVA (S_sc):</span>
              <span className="text-slate-200">{(sScKva / 1000).toFixed(1)} MVA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">{t.bareHr[lang]}:</span>
              <span className="text-amber-400 font-bold">{bareResonanceOrder.toFixed(2)} ({bareResonanceFreq.toFixed(0)} Hz)</span>
            </div>
            {isDetuned && (
              <div className="flex justify-between text-emerald-400">
                <span>Series Tuning (f_s):</span>
                <span>{branchSeriesFreq.toFixed(0)} Hz</span>
              </div>
            )}
          </div>
        </div>

        {/* Graphical Plot & Analysis */}
        <div className="lg:col-span-7 space-y-4">
          {/* Impedance vs Frequency SVG */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Bus Impedance Z(f) vs Frequency &amp; Harmonic Lines
              </span>
              <span className={`text-xs font-bold font-mono px-2 py-0.5 rounded border ${riskColor} border-current/30`}>
                {resonanceRisk}
              </span>
            </div>

            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-48" role="img" aria-label="Impedance vs frequency plot">
              {/* Axes */}
              <line x1={paddingX} y1={svgHeight - paddingY} x2={svgWidth - 20} y2={svgHeight - paddingY} stroke="#334155" strokeWidth="1" />
              <line x1={paddingX} y1="20" x2={paddingX} y2={svgHeight - paddingY} stroke="#334155" strokeWidth="1" />

              {/* Harmonic Vertical Lines (5th = 250Hz, 7th = 350Hz, 11th = 550Hz) */}
              {[
                { f: 250, label: '5th (250Hz)' },
                { f: 350, label: '7th (350Hz)' },
                { f: 550, label: '11th (550Hz)' }
              ].map((h) => {
                const xH = paddingX + ((h.f - fMin) / (fMax - fMin)) * plotWidth;
                return (
                  <g key={h.f}>
                    <line x1={xH} y1="20" x2={xH} y2={svgHeight - paddingY} stroke="#dc2626" strokeDasharray="3 3" strokeWidth="1.2" opacity="0.6" />
                    <text x={xH} y={svgHeight - paddingY + 12} fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">
                      {h.label}
                    </text>
                  </g>
                );
              })}

              {/* 50Hz fundamental marker */}
              <text x={paddingX} y={svgHeight - paddingY + 12} fill="#64748b" fontSize="8" textAnchor="middle">50Hz</text>

              {/* Detuned series frequency vertical line */}
              {isDetuned && (
                <g>
                  {(() => {
                    const xS = paddingX + ((branchSeriesFreq - fMin) / (fMax - fMin)) * plotWidth;
                    return (
                      <>
                        <line x1={xS} y1="20" x2={xS} y2={svgHeight - paddingY} stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
                        <text x={xS} y="15" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">
                          fs = {branchSeriesFreq.toFixed(0)}Hz
                        </text>
                      </>
                    );
                  })()}
                </g>
              )}

              {/* Impedance Curve */}
              <path
                d={pathD}
                fill="none"
                stroke={isDetuned ? '#10b981' : '#f59e0b'}
                strokeWidth="2.8"
                strokeLinecap="round"
              />

              {/* Y axis label */}
              <text x="15" y="40" fill="#94a3b8" fontSize="8" transform="rotate(-90 15 40)" textAnchor="end">
                Bus Impedance Z (Ω)
              </text>
            </svg>
          </div>

          {/* Diagnostic Information */}
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs space-y-2">
            <div className="font-semibold text-amber-400">Engineering Resonance Dynamics:</div>
            <p className="text-slate-300 leading-relaxed">
              Standard shunt capacitor banks create a parallel resonant circuit with the upstream transformer inductance at{' '}
              <strong className="font-mono text-cyan-300">hr = √(S_sc / Qc) = {bareResonanceOrder.toFixed(2)}</strong> ({bareResonanceFreq.toFixed(0)} Hz). When this frequency aligns near the 5th (250 Hz) or 7th (350 Hz) harmonic injected by VFDs or rectifiers, the impedance spikes dramatically, amplifying harmonic currents by up to 10× and causing capacitor fuse blowouts, severe voltage distortion, and transformer overheating.
            </p>
            <div className="pt-2 border-t border-slate-800/80 text-slate-400">
              {isDetuned ? (
                <span className="text-emerald-300">
                  ✓ <strong>Detuned Reactor Applied:</strong> Adding a {detunePct}% series reactor tunes the branch resonance to {branchSeriesFreq.toFixed(0)} Hz, below the 5th harmonic (250 Hz). Above this frequency, the entire capacitor branch exhibits inductive behavior (X_L &gt; X_C), making parallel resonance physically impossible across all harmonic frequencies!
                </span>
              ) : (
                <span className="text-rose-300">
                  ⚠ <strong>Bare Capacitor Risk:</strong> Operating without detuning reactors leaves the system vulnerable to catastrophic parallel resonance. Adding 7% detuned reactors is mandatory in modern industrial facilities with &gt;15% non-linear load.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
