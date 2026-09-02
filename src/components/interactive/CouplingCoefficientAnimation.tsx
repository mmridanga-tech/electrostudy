import React, { useState, useMemo } from 'react';
import { Layers, Zap, Info, ShieldCheck, Sliders, CheckCircle2, RefreshCw } from 'lucide-react';
import { Language } from '../../types';

interface CouplingCoefficientAnimationProps {
  currentLanguage: Language;
}

type CoreMaterial = 'AIR' | 'FERRITE' | 'SILICON_STEEL';
type WindingGeometry = 'CONCENTRIC' | 'INTERLEAVED' | 'SIDE_BY_SIDE' | 'SEPARATE_SOLENOIDS';

export const CouplingCoefficientAnimation: React.FC<CouplingCoefficientAnimationProps> = ({ currentLanguage }) => {
  // Configurable Parameters
  const [k, setK] = useState<number>(0.95);
  const [separationMm, setSeparationMm] = useState<number>(10);
  const [n1, setN1] = useState<number>(300);
  const [n2, setN2] = useState<number>(300);
  const [coreType, setCoreType] = useState<CoreMaterial>('SILICON_STEEL');
  const [windingGeometry, setWindingGeometry] = useState<WindingGeometry>('CONCENTRIC');
  const [primaryCurrent, setPrimaryCurrent] = useState<number>(5.0); // Amperes

  // Core Relative Permeability μ_r
  const mu_r = useMemo(() => {
    switch (coreType) {
      case 'AIR': return 1;
      case 'FERRITE': return 800;
      case 'SILICON_STEEL': return 4000;
      default: return 4000;
    }
  }, [coreType]);

  // Nominal Inductances (approximate proportional scale)
  const l1 = useMemo(() => {
    return (mu_r * 4e-7 * Math.PI * (n1 * n1) * 0.002) / 0.15; // Henries
  }, [mu_r, n1]);

  const l2 = useMemo(() => {
    return (mu_r * 4e-7 * Math.PI * (n2 * n2) * 0.002) / 0.15; // Henries
  }, [mu_r, n2]);

  // Total Flux Produced by Primary Coil 1: Φ_total = L1 * I1 / N1 (in milliWebers)
  const phi_total_mWb = (l1 * primaryCurrent * 1000) / n1;
  const phi_mutual_mWb = k * phi_total_mWb;
  const phi_leakage_mWb = (1 - k) * phi_total_mWb;

  // Mutual Inductance M = k * sqrt(L1 * L2)
  const mutualInductanceM = k * Math.sqrt(l1 * l2);

  // Leakage Inductance L_leakage = (1 - k) * L1
  const leakageInductanceL1 = (1 - k) * l1;

  // Presets handler
  const applyPreset = (presetK: number, presetCore: CoreMaterial, presetGeom: WindingGeometry, dist: number) => {
    setK(presetK);
    setCoreType(presetCore);
    setWindingGeometry(presetGeom);
    setSeparationMm(dist);
  };

  const labels = {
    en: {
      title: 'Coefficient of Coupling (k) & Magnetic Leakage Flux Simulator',
      subtitle: 'Analyze shared mutual flux (Φ_m) vs leakage flux (Φ_l) across coil geometries and core materials',
      presetsTitle: 'Standard Engineering Coupling Presets',
      idealPreset: 'k = 1.00 (Ideal Toroid / Zero Leakage)',
      powerPreset: 'k = 0.95–0.99 (Power Transformer / Interleaved)',
      motorPreset: 'k = 0.80 (Induction Motor / Air Gap)',
      wirelessPreset: 'k = 0.50 (Wireless Qi Charging / Air Core)',
      couplingCoeff: 'Coupling Coefficient (k)',
      separation: 'Coil Separation Distance (d)',
      coreMaterial: 'Core Material & Permeability (μ_r)',
      windingConfig: 'Winding Arrangement',
      concentric: 'Concentric / Coaxial',
      interleaved: 'Interleaved Sandwich',
      sideBySide: 'Side-by-Side on Limbs',
      separateSolenoids: 'Separate Air Solenoids',
      totalFlux: 'Total Primary Flux (Φ₁_total)',
      mutualFlux: 'Mutual Shared Flux (Φ₁₂ / Φ_m)',
      leakageFlux: 'Leakage Flux (Φ_leakage)',
      mutualInductance: 'Mutual Inductance (M = k√L₁L₂)',
      leakageInductance: 'Leakage Inductance (L_l)',
      couplingPercentage: 'Coupling Quality',
      leakagePercentage: 'Magnetic Leakage'
    },
    hi: {
      title: 'युग्मन गुणांक (k) एवं चुंबकीय क्षरण फ्लक्स सिमुलेटर',
      subtitle: 'साझा पारस्परिक फ्लक्स (Φ_m) एवं क्षरण फ्लक्स (Φ_l) का विभिन्न कोर पदार्थों व कुंडली ज्यामिति में विश्लेषण',
      presetsTitle: 'मानक इंजीनियरिंग युग्मन प्रीसेट्स',
      idealPreset: 'k = 1.00 (आदर्श टोरोइड / शून्य क्षरण)',
      powerPreset: 'k = 0.95–0.99 (पावर ट्रांसफॉर्मर / इंटरलीव्ड)',
      motorPreset: 'k = 0.80 (प्रेरण मोटर / एयर गैप)',
      wirelessPreset: 'k = 0.50 (वायरलेस चार्जिंग / वायु कोर)',
      couplingCoeff: 'युग्मन गुणांक (k)',
      separation: 'कुंडलियों के बीच दूरी (d)',
      coreMaterial: 'कोर पदार्थ एवं चुंबकशीलता (μ_r)',
      windingConfig: 'कुंडली व्यवस्था',
      concentric: 'सकेंद्री (Concentric)',
      interleaved: 'सैंडविच (Interleaved)',
      sideBySide: 'कोर भुजाओं पर पास-पास',
      separateSolenoids: 'अलग-अलग वायु परिनालिका',
      totalFlux: 'कुल प्राथमिक फ्लक्स (Φ₁_total)',
      mutualFlux: 'पारस्परिक साझा फ्लक्स (Φ_m)',
      leakageFlux: 'क्षरण फ्लक्स (Φ_leakage)',
      mutualInductance: 'अन्योन्य प्रेरकत्व (M)',
      leakageInductance: 'क्षरण प्रेरकत्व (L_l)',
      couplingPercentage: 'युग्मन दक्षता',
      leakagePercentage: 'चुंबकीय क्षरण'
    },
    bn: {
      title: 'কাপলিং গুণাঙ্ক (k) ও চৌম্বক লিকেজ ফ্লাক্স সিমুলেটর',
      subtitle: 'যৌথ ফ্লাক্স (Φ_m) ও লিকেজ ফ্লাক্স (Φ_l)-এর বিস্তারিত মিথস্ক্রিয়া এবং প্রকৌশল বিশ্লেষণ',
      presetsTitle: 'প্রমিত ইঞ্জিনিয়ারিং কাপলিং প্রিসেট',
      idealPreset: 'k = ১.০০ (আদর্শ টরয়েড / শূন্য লিকেজ)',
      powerPreset: 'k = ০.৯৫–০.৯৯ (পাওয়ার ট্রান্সফরমার / ইন্টারলিভড)',
      motorPreset: 'k = ০.৮০ (ইন্ডাকশন মোটর / এয়ার গ্যাপ)',
      wirelessPreset: 'k = ০.৫০ (ওয়্যারলেস চার্জিং / এয়ার কোর)',
      couplingCoeff: 'কাপলিং গুণাঙ্ক (k)',
      separation: 'কয়েল দূরত্ব (d)',
      coreMaterial: 'কোর উপাদান ও ভেদ্যতা (μ_r)',
      windingConfig: 'কয়েল স্থাপন কৌশল',
      concentric: 'কনসেন্ট্রিক / সহ-অক্ষীয়',
      interleaved: 'স্যান্ডউইচ ইন্টারলিভড',
      sideBySide: 'কোর বাহুতে পাশাপাশি',
      separateSolenoids: 'স্বতন্ত্র এয়ার সোলেনয়েড',
      totalFlux: 'মোট প্রাইমারি ফ্লাক্স (Φ₁_total)',
      mutualFlux: 'যৌথ পারস্পরিক ফ্লাক্স (Φ_m)',
      leakageFlux: 'লিকেজ ফ্লাক্স (Φ_leakage)',
      mutualInductance: 'পারস্পরিক আবেশাঙ্ক (M)',
      leakageInductance: 'লিকেজ আবেশাঙ্ক (L_l)',
      couplingPercentage: 'কাপলিং মান',
      leakagePercentage: 'চৌম্বক লিকেজ'
    }
  };

  const t = labels[currentLanguage] || labels.en;

  return (
    <div className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-4 md:p-6 shadow-2xl text-slate-100 font-sans my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-700/70 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <Layers className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold tracking-tight text-white">{t.title}</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
      </div>

      {/* Preset Buttons Grid */}
      <div className="mt-4 bg-slate-950 p-3 rounded-xl border border-slate-800">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
          {t.presetsTitle}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <button
            type="button"
            onClick={() => applyPreset(1.0, 'SILICON_STEEL', 'INTERLEAVED', 0)}
            aria-pressed={k === 1.0}
            className={`px-3 py-2 rounded-lg text-xs font-medium border text-left transition-all ${
              k === 1.0
                ? 'bg-cyan-950/70 border-cyan-500 text-cyan-300 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-white flex items-center justify-between">
              k = 1.00 (Ideal)
              {k === 1.0 && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
            </div>
            <span className="text-[10px] text-slate-400">Zero Leakage • Toroidal</span>
          </button>

          <button
            type="button"
            onClick={() => applyPreset(0.98, 'SILICON_STEEL', 'CONCENTRIC', 5)}
            aria-pressed={k >= 0.95 && k < 1.0}
            className={`px-3 py-2 rounded-lg text-xs font-medium border text-left transition-all ${
              k >= 0.95 && k < 1.0
                ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-white flex items-center justify-between">
              k = 0.98 (Power Xfmr)
              {k >= 0.95 && k < 1.0 && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
            </div>
            <span className="text-[10px] text-slate-400">2% Leakage • Concentric</span>
          </button>

          <button
            type="button"
            onClick={() => applyPreset(0.80, 'FERRITE', 'SIDE_BY_SIDE', 25)}
            aria-pressed={k >= 0.75 && k < 0.90}
            className={`px-3 py-2 rounded-lg text-xs font-medium border text-left transition-all ${
              k >= 0.75 && k < 0.90
                ? 'bg-amber-950/70 border-amber-500 text-amber-300 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-white flex items-center justify-between">
              k = 0.80 (Motor Air-Gap)
              {k >= 0.75 && k < 0.90 && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
            </div>
            <span className="text-[10px] text-slate-400">20% Leakage • Gapped Core</span>
          </button>

          <button
            type="button"
            onClick={() => applyPreset(0.50, 'AIR', 'SEPARATE_SOLENOIDS', 60)}
            aria-pressed={k <= 0.60}
            className={`px-3 py-2 rounded-lg text-xs font-medium border text-left transition-all ${
              k <= 0.60
                ? 'bg-purple-950/70 border-purple-500 text-purple-300 shadow-sm'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <div className="font-bold text-white flex items-center justify-between">
              k = 0.50 (Wireless Qi)
              {k <= 0.60 && <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />}
            </div>
            <span className="text-[10px] text-slate-400">50% Leakage • Air Solenoids</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Visual Simulation & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left Column: Visual Magnetic Core & Leakage Flux Graphic */}
        <div className="lg:col-span-7 bg-slate-950/90 rounded-xl border border-slate-800 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <span className="text-xs font-semibold text-slate-300">
              Flux Distribution: Mutual ({ (k * 100).toFixed(1) }%) vs Leakage ({ ((1 - k) * 100).toFixed(1) }%)
            </span>
            <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
              k = {k.toFixed(3)}
            </span>
          </div>

          {/* SVG Canvas for Flux Visualization */}
          <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-slate-950 rounded-lg overflow-hidden border border-slate-800/60">
            <svg viewBox="0 0 700 360" className="w-full h-full">
              <defs>
                <marker id="mGreen" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 z" fill="#10b981" />
                </marker>
                <marker id="mRed" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 z" fill="#ef4444" />
                </marker>
              </defs>

              {/* Ferromagnetic Core / Air Path */}
              {coreType !== 'AIR' ? (
                <g>
                  {/* Iron Core Rect */}
                  <rect x="120" y="80" width="460" height="200" rx="14" fill="#1e293b" stroke="#475569" strokeWidth="3" />
                  <rect x="210" y="130" width="280" height="100" rx="8" fill="#020617" stroke="#334155" strokeWidth="2" />
                  <text x="350" y="70" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">
                    {coreType === 'SILICON_STEEL' ? 'Laminated Silicon Steel Core (μ_r = 4000)' : 'Ferrite Core (μ_r = 800)'}
                  </text>
                </g>
              ) : (
                <g>
                  {/* Air Core / Solenoid Tube Boundary */}
                  <rect x="120" y="110" width="460" height="140" rx="6" fill="#0b0f19" stroke="#334155" strokeWidth="1.5" strokeDasharray="6 4" />
                  <text x="350" y="95" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">
                    Air Medium / Non-Magnetic Core (μ_r = 1)
                  </text>
                </g>
              )}

              {/* MUTUAL FLUX LINES (Green): Link both Coil 1 and Coil 2 */}
              <g opacity={Math.max(0.2, k)}>
                <path
                  d="M 165 105 L 535 105 C 555 105 555 255 535 255 L 165 255 C 145 255 145 105 165 105 Z"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth={Math.max(1.5, 4.5 * k)}
                />
                <path
                  d="M 150 92 L 550 92 C 570 92 570 268 550 268 L 150 268 C 130 268 130 92 150 92 Z"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth={Math.max(1, 3 * k)}
                  strokeDasharray="10 5"
                />
                <text x="350" y="175" fill="#34d399" fontSize="13" fontWeight="bold" textAnchor="middle">
                  Mutual Flux (Φ_m = {(phi_mutual_mWb).toFixed(2)} mWb)
                </text>
              </g>

              {/* LEAKAGE FLUX LOOPS (Red): Loop back through air without linking other coil */}
              <g opacity={Math.max(0.1, 1 - k)}>
                {/* Primary Leakage Loop Top */}
                <path
                  d="M 185 105 C 230 20, 100 20, 140 105"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth={Math.max(1, 4 * (1 - k))}
                  strokeDasharray="5 3"
                />
                {/* Primary Leakage Loop Bottom */}
                <path
                  d="M 185 255 C 230 340, 100 340, 140 255"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth={Math.max(1, 4 * (1 - k))}
                  strokeDasharray="5 3"
                />
                <text x="160" y="45" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">
                  Φ_leakage 1 ({(phi_leakage_mWb * 0.5).toFixed(2)} mWb)
                </text>

                {/* Secondary Leakage Loop Top */}
                <path
                  d="M 515 105 C 560 20, 430 20, 470 105"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth={Math.max(1, 4 * (1 - k))}
                  strokeDasharray="5 3"
                />
                <text x="500" y="45" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">
                  Φ_leakage 2
                </text>
              </g>

              {/* Coil 1 (Primary) */}
              <g transform="translate(165, 180)">
                {[-50, -30, -10, 10, 30, 50].map((yOff, idx) => (
                  <g key={`c1-${idx}`}>
                    <path
                      d={`M -20 ${yOff - 6} C -35 ${yOff}, -35 ${yOff + 12}, -20 ${yOff + 6}`}
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M -20 ${yOff + 6} L 20 ${yOff - 6}`}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="4"
                    />
                  </g>
                ))}
                <text x="-30" y="0" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="end">Coil 1</text>
                <text x="-30" y="16" fill="#94a3b8" fontSize="10" textAnchor="end">N₁={n1}</text>
              </g>

              {/* Coil 2 (Secondary) */}
              <g transform="translate(535, 180)">
                {[-50, -30, -10, 10, 30, 50].map((yOff, idx) => (
                  <g key={`c2-${idx}`}>
                    <path
                      d={`M -20 ${yOff - 6} C -35 ${yOff}, -35 ${yOff + 12}, -20 ${yOff + 6}`}
                      fill="none"
                      stroke="#d97706"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M -20 ${yOff + 6} L 20 ${yOff - 6}`}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="4"
                    />
                  </g>
                ))}
                <text x="30" y="0" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="start">Coil 2</text>
                <text x="30" y="16" fill="#94a3b8" fontSize="10" textAnchor="start">N₂={n2}</text>
              </g>

              {/* Bottom Equation Banner in SVG */}
              <rect x="140" y="305" width="420" height="32" rx="6" fill="#020617" stroke="#1e293b" />
              <text x="350" y="326" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                k = M / √(L₁ · L₂) = {(k).toFixed(3)}  |  Φ_total = Φ_mutual + Φ_leakage
              </text>
            </svg>
          </div>

          {/* Flux Ratio Progress Visualizer */}
          <div className="mt-4 pt-3 border-t border-slate-800">
            <div className="flex justify-between text-xs mb-1 font-semibold">
              <span className="text-emerald-400">Mutual Coupled Flux: {(k * 100).toFixed(1)}%</span>
              <span className="text-rose-400">Leakage Flux: {((1 - k) * 100).toFixed(1)}%</span>
            </div>
            <div className="w-full h-3 bg-rose-950/60 rounded-full overflow-hidden flex border border-slate-700">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                style={{ width: `${k * 100}%` }}
              />
              <div
                className="h-full bg-gradient-to-r from-rose-500 to-red-600 transition-all duration-300"
                style={{ width: `${(1 - k) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Parameters & Live Calculations */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Controls Card */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
              <Sliders className="w-4 h-4 text-cyan-400" />
              Coupling Adjustments
            </div>

            {/* Slider for k directly */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-300 font-medium">{t.couplingCoeff} (k)</span>
                <span className="font-mono text-cyan-400 font-bold">{k.toFixed(3)}</span>
              </div>
              <input
                type="range"
                min="0.10"
                max="1.00"
                step="0.01"
                value={k}
                onChange={(e) => setK(parseFloat(e.target.value))}
                aria-label={t.couplingCoeff}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            {/* Core Selection */}
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5">
                {t.coreMaterial}
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                <button
                  type="button"
                  onClick={() => setCoreType('SILICON_STEEL')}
                  aria-pressed={coreType === 'SILICON_STEEL'}
                  className={`py-1.5 px-2 rounded text-[11px] font-bold border transition-all text-center ${
                    coreType === 'SILICON_STEEL'
                      ? 'bg-cyan-900/40 text-cyan-300 border-cyan-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  Silicon Steel
                </button>
                <button
                  type="button"
                  onClick={() => setCoreType('FERRITE')}
                  aria-pressed={coreType === 'FERRITE'}
                  className={`py-1.5 px-2 rounded text-[11px] font-bold border transition-all text-center ${
                    coreType === 'FERRITE'
                      ? 'bg-emerald-900/40 text-emerald-300 border-emerald-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  Ferrite Core
                </button>
                <button
                  type="button"
                  onClick={() => setCoreType('AIR')}
                  aria-pressed={coreType === 'AIR'}
                  className={`py-1.5 px-2 rounded text-[11px] font-bold border transition-all text-center ${
                    coreType === 'AIR'
                      ? 'bg-purple-900/40 text-purple-300 border-purple-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  Air Core
                </button>
              </div>
            </div>

            {/* Winding Configuration */}
            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5">
                {t.windingConfig}
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => { setWindingGeometry('CONCENTRIC'); setK(0.98); }}
                  aria-pressed={windingGeometry === 'CONCENTRIC'}
                  className={`py-1.5 px-2 rounded text-[11px] font-medium border transition-all text-left ${
                    windingGeometry === 'CONCENTRIC'
                      ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {t.concentric}
                </button>
                <button
                  type="button"
                  onClick={() => { setWindingGeometry('INTERLEAVED'); setK(0.995); }}
                  aria-pressed={windingGeometry === 'INTERLEAVED'}
                  className={`py-1.5 px-2 rounded text-[11px] font-medium border transition-all text-left ${
                    windingGeometry === 'INTERLEAVED'
                      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500'
                      : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {t.interleaved}
                </button>
              </div>
            </div>

            {/* Coil Turns Controls */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[11px] text-slate-400 block mb-1">Primary N₁</span>
                <input
                  type="number"
                  min="50"
                  max="2000"
                  step="50"
                  value={n1}
                  onChange={(e) => setN1(parseInt(e.target.value) || 100)}
                  aria-label="Primary turns N1"
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white font-mono"
                />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block mb-1">Secondary N₂</span>
                <input
                  type="number"
                  min="50"
                  max="2000"
                  step="50"
                  value={n2}
                  onChange={(e) => setN2(parseInt(e.target.value) || 100)}
                  aria-label="Secondary turns N2"
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>

          {/* Mathematical Results Display */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Calculated Magnetic Parameters
            </h4>
            <div className="space-y-1.5 text-xs font-mono text-slate-300">
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">{t.mutualInductance}:</span>
                <span className="font-bold text-emerald-400">{mutualInductanceM.toFixed(4)} H</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">{t.leakageInductance}:</span>
                <span className="font-bold text-rose-400">{leakageInductanceL1.toFixed(4)} H</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800">
                <span className="text-slate-400">{t.mutualFlux}:</span>
                <span className="font-bold text-cyan-400">{phi_mutual_mWb.toFixed(3)} mWb</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">{t.leakageFlux}:</span>
                <span className="font-bold text-amber-400">{phi_leakage_mWb.toFixed(3)} mWb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
