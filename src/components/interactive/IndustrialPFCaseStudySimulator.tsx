import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

type SolutionMode = 'uncompensated' | 'bare-apfc' | 'detuned-apfc' | 'hybrid-ahf';

export const IndustrialPFCaseStudySimulator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Plant parameters
  const [plantKw, setPlantKw] = useState<number>(600); // 600 kW load
  const [initialPf, setInitialPf] = useState<number>(0.72);
  const [targetPf, setTargetPf] = useState<number>(0.98);
  const [vfdSharePct, setVfdSharePct] = useState<number>(35); // 35% non-linear load
  const [solution, setSolution] = useState<SolutionMode>('detuned-apfc');

  // Calculations
  const trafoKva = 1000;
  const lineVoltage = 415; // V

  const phi1 = Math.acos(initialPf);
  const q1 = plantKw * Math.tan(phi1);
  const s1 = plantKw / initialPf;
  const i1 = (s1 * 1000) / (Math.sqrt(3) * lineVoltage);

  const phi2 = Math.acos(targetPf);
  const q2Target = plantKw * Math.tan(phi2);
  const requiredQc = Math.max(0, q1 - q2Target);

  // Behavior under different solution modes
  let compensatedPf = initialPf;
  let sFinal = s1;
  let iFinal = i1;
  let thdI = (vfdSharePct * 0.85); // % current THD
  let thdV = 2.0 + (thdI * 0.2); // baseline voltage THD
  let resonanceRisk = 'None';
  let penaltyApplied = true;

  if (solution === 'uncompensated') {
    compensatedPf = initialPf;
    sFinal = s1;
    iFinal = i1;
    penaltyApplied = true;
    resonanceRisk = 'None (No capacitors installed)';
  } else if (solution === 'bare-apfc') {
    compensatedPf = targetPf;
    sFinal = plantKw / targetPf;
    iFinal = (sFinal * 1000) / (Math.sqrt(3) * lineVoltage);
    penaltyApplied = false;
    // Bare capacitor resonates with transformer at 6th-7th harmonic!
    if (vfdSharePct >= 20) {
      thdI = thdI * 2.8; // harmonic amplification
      thdV = 9.5; // exceeds IEEE 519 5% limit!
      resonanceRisk = 'CRITICAL PARALLEL RESONANCE (5th/7th Harmonic Overheating!)';
    } else {
      resonanceRisk = 'Elevated harmonic distortion';
    }
  } else if (solution === 'detuned-apfc') {
    compensatedPf = targetPf;
    sFinal = plantKw / targetPf;
    iFinal = (sFinal * 1000) / (Math.sqrt(3) * lineVoltage);
    penaltyApplied = false;
    thdV = 3.8; // within IEEE 519 5% limit
    resonanceRisk = 'Protected (7% Detuned Reactor, fr = 189 Hz)';
  } else {
    // hybrid-ahf: APFC + Active Harmonic Filter
    compensatedPf = 0.99;
    sFinal = plantKw / 0.99;
    iFinal = (sFinal * 1000) / (Math.sqrt(3) * lineVoltage);
    thdI = 3.2; // AHF filters harmonics below 5%
    thdV = 1.8;
    penaltyApplied = false;
    resonanceRisk = 'Optimized (Zero Resonance, Full Harmonics Cancellation)';
  }

  // Released capacity
  const releasedTrafoKva = Math.max(0, s1 - sFinal);
  const availableExpansionKw = releasedTrafoKva * targetPf;

  // True power factor calculation: PF_true = DPF * (1 / sqrt(1 + THD_I^2))
  const distortionFactor = 1 / Math.sqrt(1 + Math.pow(thdI / 100, 2));
  const truePf = compensatedPf * distortionFactor;

  // Financial metrics (annual approximation)
  // Utility penalty: typical $15 / kVA demand charge above base + low PF surcharge
  const annualPenaltySavings = penaltyApplied ? 0 : 28500;
  const annualLossSavings = solution === 'uncompensated' ? 0 : 8400;
  const totalAnnualSavings = annualPenaltySavings + annualLossSavings;

  const t = {
    title: {
      en: 'Industrial Power Quality & Compensation Case Study Simulator',
      hi: 'औद्योगिक पावर क्वालिटी एवं क्षतिपूर्ति केस स्टडी सिम्युलेटर',
      bn: 'শিল্প কারখানা পাওয়ার কোয়ালিটি ও ক্ষতিপূরণ কেস স্টাডি সিমুলেটর'
    },
    subtitle: {
      en: '1000 kVA manufacturing substation: solve low power factor penalties, release transformer capacity, and prevent harmonic resonance.',
      hi: '1000 kVA विनिर्माण सबस्टेशन: कम पावर फैक्टर जुर्माना समाप्त करें, ट्रांसफार्मर क्षमता मुक्त करें और हार्मोनिक अनुनाद रोकें।',
      bn: '১০০০ kVA সাবস্টেশন: কম পাওয়ার ফ্যাক্টর জরিমানা বন্ধ করুন, ট্রান্সফরমার ক্ষমতা মুক্ত করুন ও হারমোনিক রেজোন্যান্স প্রতিরোধ করুন।'
    },
    plantLoad: { en: 'Plant Active Power (kW)', hi: 'संयंत्र सक्रिय शक्ति (kW)', bn: 'প্ল্যান্ট অ্যাক্টিভ পাওয়ার (kW)' },
    vfdShare: { en: 'VFD / Non-Linear Load Share', hi: 'VFD / अरैखिक लोड अनुपात', bn: 'VFD / নন-লিনিয়ার লোডের অনুপাত' },
    solMode: { en: 'Power Factor Correction Architecture', hi: 'पावर फैक्टर सुधार वास्तुकला', bn: 'পাওয়ার ফ্যাক্টর সংশোধন আর্কিটেকচার' },
    uncomp: { en: 'Uncompensated Baseline', hi: 'असुधारित आधार रेखा', bn: 'অসংশোধিত বেসলাইন' },
    bare: { en: 'Bare APFC (Standard Capacitors)', hi: 'मानक कैपेसिटर APFC (बिना रिएक्टर)', bn: 'স্ট্যান্ডার্ড ক্যাপাসিটর APFC (রিঅ্যাক্টরহীন)' },
    detuned: { en: '7% Detuned APFC Panel', hi: '7% डीट्यून्ड APFC पैनल', bn: '৭% ডিটিউনড APFC প্যানেল' },
    hybrid: { en: 'Hybrid (Detuned APFC + AHF)', hi: 'हाइब्रिड (APFC + एक्टिव फिल्टर)', bn: 'হাইব্রিড (APFC + অ্যাক্টিভ ফিল্টার)' },
    kpiTrafo: { en: 'Transformer Loading', hi: 'ट्रांसफार्मर लोडिंग', bn: 'ট্রান্সফরমার লোডিং' },
    kpiRelief: { en: 'Released Substation Capacity', hi: 'मुक्त सबस्टेशन क्षमता', bn: 'মুক্ত সাবস্টেশন ক্ষমতা' },
    kpiCurrent: { en: 'Mains Incomer Line Current', hi: 'मुख्य इनकमर लाइन धारा', bn: 'মেইন ইনকামার লাইন কারেন্ট' },
    kpiHarmonics: { en: 'Voltage THD (IEEE 519: <5%)', hi: 'वोल्टेज THD (IEEE 519: <5%)', bn: 'ভোল্টেজ THD (IEEE 519: <৫%)' }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="text-xl font-bold text-amber-400">{t.title[lang]}</h3>
        <p className="text-sm text-slate-400 mt-1">{t.subtitle[lang]}</p>
      </div>

      {/* Architecture Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <button
          type="button"
          onClick={() => setSolution('uncompensated')}
          className={`p-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
            solution === 'uncompensated'
              ? 'bg-rose-950/60 border-rose-500 text-rose-300 shadow-md ring-1 ring-rose-500/40'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          {t.uncomp[lang]}
        </button>
        <button
          type="button"
          onClick={() => setSolution('bare-apfc')}
          className={`p-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
            solution === 'bare-apfc'
              ? 'bg-amber-600/30 border-amber-500 text-amber-300 shadow-md ring-1 ring-amber-500/40'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          {t.bare[lang]}
        </button>
        <button
          type="button"
          onClick={() => setSolution('detuned-apfc')}
          className={`p-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
            solution === 'detuned-apfc'
              ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300 shadow-md ring-1 ring-emerald-500/40'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          {t.detuned[lang]}
        </button>
        <button
          type="button"
          onClick={() => setSolution('hybrid-ahf')}
          className={`p-2.5 rounded-lg text-xs font-semibold border transition-all text-center ${
            solution === 'hybrid-ahf'
              ? 'bg-cyan-600/30 border-cyan-500 text-cyan-300 shadow-md ring-1 ring-cyan-500/40'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          {t.hybrid[lang]}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Plant Controls */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950 p-5 rounded-lg border border-slate-800">
          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-plantkw`} className="text-emerald-400">{t.plantLoad[lang]}:</label>
              <span className="font-mono text-emerald-300 text-base">{plantKw} kW</span>
            </div>
            <input
              id={`${controlId}-plantkw`}
              type="range"
              min="300"
              max="800"
              step="25"
              value={plantKw}
              onChange={(e) => setPlantKw(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-initpf`} className="text-rose-400">Baseline Motor PF:</label>
              <span className="font-mono text-rose-300">{initialPf.toFixed(2)} Lag</span>
            </div>
            <input
              id={`${controlId}-initpf`}
              type="range"
              min="0.60"
              max="0.85"
              step="0.01"
              value={initialPf}
              onChange={(e) => setInitialPf(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-sm font-semibold mb-1">
              <label htmlFor={`${controlId}-vfd`} className="text-amber-400">{t.vfdShare[lang]}:</label>
              <span className="font-mono text-amber-300">{vfdSharePct}% Non-Linear</span>
            </div>
            <input
              id={`${controlId}-vfd`}
              type="range"
              min="10"
              max="60"
              step="5"
              value={vfdSharePct}
              onChange={(e) => setVfdSharePct(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Sizing Summary */}
          <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs space-y-1.5 font-mono">
            <div className="flex justify-between">
              <span className="text-slate-400">Required Bank Rating:</span>
              <span className="text-amber-300 font-bold">{requiredQc.toFixed(0)} kVAR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Standard APFC Step:</span>
              <span className="text-slate-200">50 kVAR × {Math.ceil(requiredQc / 50)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Resonance Status:</span>
              <span className={resonanceRisk.includes('CRITICAL') ? 'text-rose-400 font-bold animate-pulse' : 'text-emerald-400'}>
                {resonanceRisk.includes('CRITICAL') ? 'RESONANCE HAZARD!' : 'PROTECTED'}
              </span>
            </div>
          </div>
        </div>

        {/* Plant Engineering Dashboard */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {/* Transformer loading */}
            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>{t.kpiTrafo[lang]}</span>
                <span className="font-mono font-bold text-slate-200">{sFinal.toFixed(1)} / {trafoKva} kVA</span>
              </div>
              <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden mb-1">
                <div
                  className={`h-full transition-all duration-300 ${
                    sFinal > trafoKva * 0.9 ? 'bg-rose-500' : sFinal > trafoKva * 0.75 ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${Math.min(100, (sFinal / trafoKva) * 100)}%` }}
                />
              </div>
              <div className="text-[11px] text-slate-400 flex justify-between">
                <span>Loading: {((sFinal / trafoKva) * 100).toFixed(1)}%</span>
                <span className={sFinal > 800 ? 'text-rose-400 font-semibold' : 'text-emerald-400'}>
                  {sFinal > 800 ? 'Near Capacity' : 'Healthy Headroom'}
                </span>
              </div>
            </div>

            {/* Released capacity */}
            <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
              <div className="text-xs text-slate-400 mb-1">{t.kpiRelief[lang]}</div>
              <div className="text-xl font-mono font-bold text-emerald-400">
                +{releasedTrafoKva.toFixed(1)} kVA
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Enables +{availableExpansionKw.toFixed(0)} kW new plant expansion
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400 mb-0.5">{t.kpiCurrent[lang]}</div>
              <div className="text-lg font-mono font-bold text-cyan-400">{iFinal.toFixed(0)} A</div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Saved {Math.max(0, i1 - iFinal).toFixed(0)} A (-{i1 > 0 ? (((i1 - iFinal) / i1) * 100).toFixed(0) : 0}%)
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400 mb-0.5">True PF (cos φ × DF)</div>
              <div className={`text-lg font-mono font-bold ${truePf >= 0.95 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {truePf.toFixed(3)}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                DPF: {compensatedPf.toFixed(2)} | DF: {distortionFactor.toFixed(2)}
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <div className="text-[11px] text-slate-400 mb-0.5">{t.kpiHarmonics[lang]}</div>
              <div className={`text-lg font-mono font-bold ${thdV > 5.0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {thdV.toFixed(1)}%
              </div>
              <div className={`text-[10px] mt-0.5 ${thdV > 5.0 ? 'text-rose-400' : 'text-slate-500'}`}>
                {thdV > 5.0 ? 'Exceeds IEEE 519' : 'Compliant (<5%)'}
              </div>
            </div>
          </div>

          {/* Financial & Engineering Case Study Verdict */}
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-amber-400">Total Annual Savings (Tariff + Losses):</span>
              <span className="font-mono text-emerald-400 font-bold text-base">
                ${totalAnnualSavings.toLocaleString()} / year
              </span>
            </div>

            {solution === 'bare-apfc' && vfdSharePct >= 20 ? (
              <div className="text-rose-300 bg-rose-950/40 p-2.5 rounded border border-rose-800 text-[11px] leading-relaxed">
                <strong>ENGINEERING PITFALL DETECTED:</strong> Installing bare (un-detuned) capacitors in a facility with {vfdSharePct}% VFD non-linear load triggered severe parallel resonance at the 5th/7th harmonic. Current THD is amplified to {thdI.toFixed(0)}%, voltage distortion surged to {thdV.toFixed(1)}% (violating IEEE 519), causing nuisance tripping of sensitive electronics, capacitor swelling, and audible transformer buzzing.
              </div>
            ) : (
              <div className="text-slate-300 leading-relaxed text-[11px]">
                {solution === 'detuned-apfc' && (
                  <span>
                    <strong>Optimal Industrial Solution:</strong> 7% detuned reactors shift branch resonance to 189 Hz. The APFC panel delivers {requiredQc.toFixed(0)} kVAR of fundamental compensation while suppressing harmonic magnification, protecting capacitor cells and reducing transformer loading from {s1.toFixed(0)} kVA to {sFinal.toFixed(0)} kVA.
                  </span>
                )}
                {solution === 'hybrid-ahf' && (
                  <span>
                    <strong>State-of-the-Art Hybrid Setup:</strong> Detuned APFC steps provide economical fundamental reactive bulk compensation, while the parallel Active Harmonic Filter (AHF) injects precise anti-phase harmonic currents, dropping THD_V down to {thdV.toFixed(1)}% and achieving near unity True PF ({truePf.toFixed(3)}).
                  </span>
                )}
                {solution === 'uncompensated' && (
                  <span className="text-rose-300">
                    Operating uncompensated subjects the plant to heavy utility low-PF surcharges (${annualPenaltySavings.toLocaleString()}/yr) and wastes {releasedTrafoKva.toFixed(0)} kVA of transformer thermal capacity.
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
