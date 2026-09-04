import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const ACSuperpositionMaxPowerAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const labelId = useId();
  const [activeTab, setActiveTab] = useState<'superposition' | 'maxPower'>('maxPower');

  // Thevenin Source for Max Power
  const [vth, setVth] = useState<number>(100);
  const [rth, setRth] = useState<number>(20);
  const [xth, setXth] = useState<number>(15); // +j15 inductive

  // Load impedance
  const [rl, setRl] = useState<number>(20);
  const [xl, setXl] = useState<number>(-15);

  // Superposition state: Two AC sources V1 and V2 feeding a bridge/T network
  const [v1Mag, setV1Mag] = useState<number>(120);
  const [v1Phase, setV1Phase] = useState<number>(0);
  const [v2Mag, setV2Mag] = useState<number>(80);
  const [v2Phase, setV2Phase] = useState<number>(60);
  const [supSourceSelect, setSupSourceSelect] = useState<'both' | 'v1Only' | 'v2Only'>('both');

  // Max power transfer calculations
  // Complex load ZL = RL + j XL
  // Z_total = (Rth + RL) + j(Xth + XL)
  const denom = (rth + rl) ** 2 + (xth + xl) ** 2 || 1e-6;
  const ilMag = vth / Math.sqrt(denom);
  const pLoad = ilMag * ilMag * rl;
  const pMaxConjugate = (vth * vth) / (4 * rth); // ZL = Zth* => RL = Rth, XL = -Xth
  const pMaxResistiveOnly = (vth * vth * Math.sqrt(rth * rth + xth * xth)) / (2 * (rth * Math.sqrt(rth * rth + xth * xth) + rth * rth + xth * xth));

  // Conjugate match helper
  const handleSetConjugate = () => {
    setRl(rth);
    setXl(-xth);
  };

  // Superposition calculations:
  // Circuit: Node with source 1 (branch 1: R1=10, X1=10), source 2 (branch 2: R2=15, X2=-10), load branch (R3=20, X3=0)
  // V1 = v1Mag angle v1Phase, V2 = v2Mag angle v2Phase
  // By nodal analysis at load node:
  // Y1 = 1 / (10 + j10) = (10 - j10) / 200 = 0.05 - j0.05
  // Y2 = 1 / (15 - j10) = (15 + j10) / 325 = 0.04615 + j0.03077
  // YL = 1 / (20 + j0) = 0.05
  // Y_sum = Y1 + Y2 + YL = (0.05 + 0.04615 + 0.05) + j(-0.05 + 0.03077) = 0.14615 - j0.01923
  // Contribution from V1 alone: I_sc1 = V1 * Y1, V_node1 = I_sc1 / Y_sum
  // Contribution from V2 alone: I_sc2 = V2 * Y2, V_node2 = I_sc2 / Y_sum
  const v1Rad = (v1Phase * Math.PI) / 180;
  const v1R = v1Mag * Math.cos(v1Rad);
  const v1I = v1Mag * Math.sin(v1Rad);

  const v2Rad = (v2Phase * Math.PI) / 180;
  const v2R = v2Mag * Math.cos(v2Rad);
  const v2I = v2Mag * Math.sin(v2Rad);

  const y1R = 0.05;
  const y1I = -0.05;
  const y2R = 0.04615;
  const y2I = 0.03077;
  const ySumR = 0.14615;
  const ySumI = -0.01923;
  const ySumMagSq = ySumR * ySumR + ySumI * ySumI;

  // I_sc1 = V1 * Y1
  const isc1R = v1R * y1R - v1I * y1I;
  const isc1I = v1R * y1I + v1I * y1R;
  // V_node1 = I_sc1 / Y_sum
  const vn1R = (isc1R * ySumR + isc1I * ySumI) / ySumMagSq;
  const vn1I = (isc1I * ySumR - isc1R * ySumI) / ySumMagSq;
  const vn1Mag = Math.sqrt(vn1R * vn1R + vn1I * vn1I);
  const vn1Ang = (Math.atan2(vn1I, vn1R) * 180) / Math.PI;

  // I_sc2 = V2 * Y2
  const isc2R = v2R * y2R - v2I * y2I;
  const isc2I = v2R * y2I + v2I * y2R;
  // V_node2 = I_sc2 / Y_sum
  const vn2R = (isc2R * ySumR + isc2I * ySumI) / ySumMagSq;
  const vn2I = (isc2I * ySumR - isc2R * ySumI) / ySumMagSq;
  const vn2Mag = Math.sqrt(vn2R * vn2R + vn2I * vn2I);
  const vn2Ang = (Math.atan2(vn2I, vn2R) * 180) / Math.PI;

  // Net V_node = V_node1 + V_node2
  const vnNetR = vn1R + vn2R;
  const vnNetI = vn1I + vn2I;
  const vnNetMag = Math.sqrt(vnNetR * vnNetR + vnNetI * vnNetI);
  const vnNetAng = (Math.atan2(vnNetI, vnNetR) * 180) / Math.PI;

  // Render values based on selection
  const displayVNodeMag = supSourceSelect === 'v1Only' ? vn1Mag : supSourceSelect === 'v2Only' ? vn2Mag : vnNetMag;
  const displayVNodeAng = supSourceSelect === 'v1Only' ? vn1Ang : supSourceSelect === 'v2Only' ? vn2Ang : vnNetAng;
  const displayILMag = displayVNodeMag / 20; // RL = 20 ohm

  const t = {
    title: {
      en: 'AC Superposition & Complex Maximum Power Transfer',
      hi: 'एसी अध्यारोपण एवं सम्मिश्र अधिकतम शक्ति स्थानांतरण',
      bn: 'এসি উপরিপাত ও জটিল সর্বোচ্চ ক্ষমতা স্থানান্তর'
    },
    subtitle: {
      en: 'Explore phasor superposition with multiple AC sources and prove conjugate matching Z_L = Z_th*',
      hi: 'अनेक एसी स्रोतों के साथ फेजर अध्यारोपण की जांच करें एवं संयुग्मी मिलान Z_L = Z_th* सिद्ध करें',
      bn: 'একাধিক এসি উৎসের সাথে ফেজর উপরিপাত পর্যবেক্ষণ করুন ও অনুবন্ধী ম্যাচিং Z_L = Z_th* প্রমাণ করুন'
    },
    tabSuperposition: { en: 'AC Phasor Superposition', hi: 'एसी फेजर अध्यारोपण', bn: 'এসি ফেজর উপরিপাত' },
    tabMaxPower: { en: 'Conjugate Max Power Transfer', hi: 'संयुग्मी अधिकतम शक्ति', bn: 'অনুবন্ধী সর্বোচ্চ ক্ষমতা' },
    conjugateBtn: { en: 'Snap to Conjugate Match (ZL = Zth*)', hi: 'संयुग्मी मिलान पर सेट करें (ZL = Zth*)', bn: 'অনুবন্ধী ম্যাচিংয়ে সেট করুন (ZL = Zth*)' },
    maxPowerObserved: { en: 'Transferred Power P_L', hi: 'हस्तांतरित शक्ति P_L', bn: 'স্থানান্তরিত ক্ষমতা P_L' },
    theoreticalMax: { en: 'Theoretical Max P_max', hi: 'सैद्धांतिक अधिकतम P_max', bn: 'তাত্ত্বিক সর্বোচ্চ P_max' },
    efficiency: { en: 'Transfer Efficiency η', hi: 'दक्षता η', bn: 'দক্ষতা η' }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header with Mode Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Interactive AC Theorems</span>
          </div>
          <h3 id={labelId} className="text-xl font-bold text-white mt-1">
            {t.title[lang]}
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800 self-start">
          <button
            onClick={() => setActiveTab('maxPower')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === 'maxPower'
                ? 'bg-cyan-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tabMaxPower[lang]}
          </button>
          <button
            onClick={() => setActiveTab('superposition')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === 'superposition'
                ? 'bg-cyan-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.tabSuperposition[lang]}
          </button>
        </div>
      </div>

      {activeTab === 'maxPower' ? (
        <div className="space-y-6">
          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
              <span className="font-semibold text-cyan-300 block">Thevenin Source |V_th|</span>
              <div className="flex justify-between">
                <span>V_th (RMS):</span>
                <span className="font-mono text-cyan-400">{vth} V</span>
              </div>
              <input
                type="range"
                min="20"
                max="240"
                value={vth}
                onChange={(e) => setVth(Number(e.target.value))}
                aria-label="Vth magnitude in Volts"
                className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
              />
            </div>

            <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
              <span className="font-semibold text-emerald-300 block">Thevenin Z_th = R_th + jX_th</span>
              <div className="flex justify-between">
                <span>R_th: {rth} Ω</span>
                <span>X_th: {xth >= 0 ? `+j${xth}` : `-j${Math.abs(xth)}`} Ω</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="range"
                  min="5"
                  max="60"
                  value={rth}
                  onChange={(e) => setRth(Number(e.target.value))}
                  aria-label="Thevenin resistance Rth"
                  className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
                <input
                  type="range"
                  min="-40"
                  max="40"
                  value={xth}
                  onChange={(e) => setXth(Number(e.target.value))}
                  aria-label="Thevenin reactance Xth"
                  className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
              <span className="font-semibold text-purple-300 block">Adjust Load Z_L = R_L + jX_L</span>
              <div className="flex justify-between">
                <span>R_L: {rl} Ω</span>
                <span>X_L: {xl >= 0 ? `+j${xl}` : `-j${Math.abs(xl)}`} Ω</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="range"
                  min="1"
                  max="80"
                  value={rl}
                  onChange={(e) => setRl(Number(e.target.value))}
                  aria-label="Load resistance RL"
                  className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
                <input
                  type="range"
                  min="-50"
                  max="50"
                  value={xl}
                  onChange={(e) => setXl(Number(e.target.value))}
                  aria-label="Load reactance XL"
                  className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>
            </div>

            <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 flex flex-col justify-between">
              <span className="font-semibold text-amber-300 block">Conjugate Match Action</span>
              <button
                onClick={handleSetConjugate}
                className="w-full py-2 px-3 bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/50 text-amber-200 rounded-lg font-bold transition text-xs flex items-center justify-center gap-1"
              >
                ⚡ {t.conjugateBtn[lang]}
              </button>
              <div className="text-[10px] text-slate-400 text-center">
                Matches Z_L = {rth} {xth >= 0 ? `- j${xth}` : `+ j${Math.abs(xth)}`} Ω
              </div>
            </div>
          </div>

          {/* Interactive Power Curve SVG */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
              <span>Real Power Delivered P_L vs Load Resistance R_L (with X_L = {xl} Ω)</span>
              <span className="font-mono text-cyan-400">
                P_L = {pLoad.toFixed(2)} W ({((pLoad / (pMaxConjugate || 1)) * 100).toFixed(1)}% of P_max)
              </span>
            </div>
            <svg viewBox="0 0 700 200" className="w-full h-auto text-slate-400 select-none">
              {/* Grid Lines */}
              <line x1="50" y1="20" x2="50" y2="160" stroke="#334155" strokeWidth="2" />
              <line x1="50" y1="160" x2="680" y2="160" stroke="#334155" strokeWidth="2" />
              <text x="680" y="175" textAnchor="end" fill="#94a3b8" fontSize="10">R_L (Ω)</text>
              <text x="40" y="20" textAnchor="end" fill="#94a3b8" fontSize="10">P_L (W)</text>

              {/* Theoretical Max Power Line */}
              {(() => {
                const yMax = 160 - (pMaxConjugate / (pMaxConjugate * 1.2 || 1)) * 130;
                return (
                  <g>
                    <line x1="50" y1={yMax} x2="680" y2={yMax} stroke="#f59e0b" strokeDasharray="4 4" strokeWidth="1.5" />
                    <text x="670" y={yMax - 5} textAnchor="end" fill="#fbbf24" fontSize="10" fontWeight="bold">
                      P_max = {pMaxConjugate.toFixed(1)} W (Conjugate Match)
                    </text>
                  </g>
                );
              })()}

              {/* Power Curve for current XL across RL from 1 to 80 */}
              {(() => {
                const points: string[] = [];
                const scaleY = 130 / (pMaxConjugate * 1.2 || 1);
                for (let r = 1; r <= 80; r += 1) {
                  const d = (rth + r) ** 2 + (xth + xl) ** 2 || 1;
                  const p = ((vth * vth) / d) * r;
                  const x = 50 + ((r - 1) / 79) * 620;
                  const y = 160 - p * scaleY;
                  points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
                }
                return (
                  <polyline
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="3"
                    points={points.join(' ')}
                  />
                );
              })()}

              {/* Current operating point marker */}
              {(() => {
                const scaleY = 130 / (pMaxConjugate * 1.2 || 1);
                const curX = 50 + ((rl - 1) / 79) * 620;
                const curY = 160 - pLoad * scaleY;
                const isMatched = Math.abs(rl - rth) < 0.5 && Math.abs(xl + xth) < 0.5;
                return (
                  <g>
                    <circle cx={curX} cy={curY} r={isMatched ? 7 : 5} fill={isMatched ? '#10b981' : '#c084fc'} stroke="#ffffff" strokeWidth="2" />
                    <line x1={curX} y1={curY} x2={curX} y2="160" stroke="#c084fc" strokeDasharray="2 2" />
                    <text x={curX} y={curY - 10} textAnchor="middle" fill={isMatched ? '#34d399' : '#e9d5ff'} fontSize="11" fontWeight="bold">
                      {isMatched ? 'MATCHED!' : `${pLoad.toFixed(1)} W`}
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Results Comparison Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="bg-slate-950 p-3 rounded-lg border border-cyan-500/30">
              <span className="text-slate-400 block">{t.maxPowerObserved[lang]}:</span>
              <span className="text-lg font-bold text-cyan-300">{pLoad.toFixed(2)} W</span>
              <div className="text-[11px] text-slate-400 mt-1">
                I_L = {ilMag.toFixed(2)} A | V_L = {(ilMag * Math.sqrt(rl * rl + xl * xl)).toFixed(2)} V
              </div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-amber-500/30">
              <span className="text-slate-400 block">{t.theoreticalMax[lang]}:</span>
              <span className="text-lg font-bold text-amber-300">{pMaxConjugate.toFixed(2)} W</span>
              <div className="text-[11px] text-slate-400 mt-1">
                Requires Z_L = {rth} - j({xth}) Ω
              </div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-emerald-500/30">
              <span className="text-slate-400 block">{t.efficiency[lang]}:</span>
              <span className="text-lg font-bold text-emerald-300">
                {((rl / (rth + rl || 1)) * 100).toFixed(1)}%
              </span>
              <div className="text-[11px] text-slate-400 mt-1">
                At maximum power transfer: η = 50.0%
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Superposition Tab */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* Source 1 Controls */}
            <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
              <span className="font-semibold text-cyan-300 block">AC Source 1 (V₁)</span>
              <div className="flex justify-between">
                <span>Magnitude |V₁|:</span>
                <span className="font-mono text-cyan-400">{v1Mag} V</span>
              </div>
              <input
                type="range"
                min="0"
                max="240"
                value={v1Mag}
                onChange={(e) => setV1Mag(Number(e.target.value))}
                aria-label="V1 magnitude"
                className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
              />
              <div className="flex justify-between">
                <span>Phase ∠V₁:</span>
                <span className="font-mono text-cyan-400">{v1Phase}°</span>
              </div>
              <input
                type="range"
                min="-180"
                max="180"
                step="5"
                value={v1Phase}
                onChange={(e) => setV1Phase(Number(e.target.value))}
                aria-label="V1 phase"
                className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
              />
            </div>

            {/* Source 2 Controls */}
            <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
              <span className="font-semibold text-amber-300 block">AC Source 2 (V₂)</span>
              <div className="flex justify-between">
                <span>Magnitude |V₂|:</span>
                <span className="font-mono text-amber-400">{v2Mag} V</span>
              </div>
              <input
                type="range"
                min="0"
                max="240"
                value={v2Mag}
                onChange={(e) => setV2Mag(Number(e.target.value))}
                aria-label="V2 magnitude"
                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
              />
              <div className="flex justify-between">
                <span>Phase ∠V₂:</span>
                <span className="font-mono text-amber-400">{v2Phase}°</span>
              </div>
              <input
                type="range"
                min="-180"
                max="180"
                step="5"
                value={v2Phase}
                onChange={(e) => setV2Phase(Number(e.target.value))}
                aria-label="V2 phase"
                className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
              />
            </div>

            {/* Superposition Switcher */}
            <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2 flex flex-col justify-between">
              <span className="font-semibold text-purple-300 block">Superposition State</span>
              <div className="space-y-1.5">
                <button
                  onClick={() => setSupSourceSelect('both')}
                  className={`w-full py-1.5 px-3 rounded text-left transition font-semibold ${
                    supSourceSelect === 'both' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  Both Sources Active (V₁ + V₂)
                </button>
                <button
                  onClick={() => setSupSourceSelect('v1Only')}
                  className={`w-full py-1.5 px-3 rounded text-left transition font-semibold ${
                    supSourceSelect === 'v1Only' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  V₁ Only (V₂ Deactivated / Shorted)
                </button>
                <button
                  onClick={() => setSupSourceSelect('v2Only')}
                  className={`w-full py-1.5 px-3 rounded text-left transition font-semibold ${
                    supSourceSelect === 'v2Only' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  V₂ Only (V₁ Deactivated / Shorted)
                </button>
              </div>
            </div>
          </div>

          {/* Schematic Diagram of Superposition Circuit */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <svg viewBox="0 0 700 170" className="w-full h-auto text-slate-300 select-none">
              {/* Wires */}
              <path d="M 60 90 L 60 50 L 170 50" stroke="#64748b" strokeWidth="2" fill="none" />
              <path d="M 230 50 L 350 50" stroke="#64748b" strokeWidth="2" fill="none" />
              <path d="M 470 50 L 350 50" stroke="#64748b" strokeWidth="2" fill="none" />
              <path d="M 530 50 L 640 50 L 640 90" stroke="#64748b" strokeWidth="2" fill="none" />
              <path d="M 350 50 L 350 75" stroke="#64748b" strokeWidth="2" fill="none" />
              <path d="M 350 125 L 350 150 L 60 150 L 60 110" stroke="#64748b" strokeWidth="2" fill="none" />
              <path d="M 350 150 L 640 150 L 640 110" stroke="#64748b" strokeWidth="2" fill="none" />

              {/* Source 1 (or short) */}
              {supSourceSelect === 'v2Only' ? (
                <line x1="60" y1="90" x2="60" y2="110" stroke="#38bdf8" strokeWidth="3" strokeDasharray="3 3" />
              ) : (
                <g>
                  <circle cx="60" cy="100" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                  <path d="M 55 100 Q 58 95 60 100 T 65 100" stroke="#38bdf8" strokeWidth="2" fill="none" />
                </g>
              )}
              <text x="60" y="125" textAnchor="middle" fill="#38bdf8" fontSize="10">
                {supSourceSelect === 'v2Only' ? 'V₁ Shorted' : 'V₁ ∠θ₁'}
              </text>

              {/* Branch 1 Z1 */}
              <rect x="170" y="40" width="60" height="20" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" rx="3" />
              <text x="200" y="54" textAnchor="middle" fill="#38bdf8" fontSize="10">10+j10Ω</text>

              {/* Center Node */}
              <circle cx="350" cy="50" r="4" fill="#a855f7" />
              <text x="350" y="40" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="bold">Node V_L</text>

              {/* Load Branch */}
              <rect x="330" y="75" width="40" height="50" fill="#2e1065" stroke="#c084fc" strokeWidth="2" rx="3" />
              <text x="350" y="98" textAnchor="middle" fill="#e9d5ff" fontSize="10" fontWeight="bold">R_L</text>
              <text x="350" y="112" textAnchor="middle" fill="#c084fc" fontSize="9">20 Ω</text>

              {/* Branch 2 Z2 */}
              <rect x="470" y="40" width="60" height="20" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" rx="3" />
              <text x="500" y="54" textAnchor="middle" fill="#fbbf24" fontSize="10">15-j10Ω</text>

              {/* Source 2 (or short) */}
              {supSourceSelect === 'v1Only' ? (
                <line x1="640" y1="90" x2="640" y2="110" stroke="#f59e0b" strokeWidth="3" strokeDasharray="3 3" />
              ) : (
                <g>
                  <circle cx="640" cy="100" r="12" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M 635 100 Q 638 95 640 100 T 645 100" stroke="#f59e0b" strokeWidth="2" fill="none" />
                </g>
              )}
              <text x="640" y="125" textAnchor="middle" fill="#fbbf24" fontSize="10">
                {supSourceSelect === 'v1Only' ? 'V₂ Shorted' : 'V₂ ∠θ₂'}
              </text>
            </svg>
          </div>

          {/* Superposition Phasor Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="bg-slate-950 p-3 rounded-lg border border-cyan-500/30">
              <span className="text-cyan-400 font-bold block">Contribution from V₁ alone:</span>
              <div className="mt-1 text-slate-200">
                V_node⁽¹⁾ = {vn1Mag.toFixed(2)} V ∠ {vn1Ang.toFixed(1)}°
              </div>
              <div className="text-slate-400">
                I_L⁽¹⁾ = {(vn1Mag / 20).toFixed(3)} A ∠ {vn1Ang.toFixed(1)}°
              </div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-amber-500/30">
              <span className="text-amber-400 font-bold block">Contribution from V₂ alone:</span>
              <div className="mt-1 text-slate-200">
                V_node⁽²⁾ = {vn2Mag.toFixed(2)} V ∠ {vn2Ang.toFixed(1)}°
              </div>
              <div className="text-slate-400">
                I_L⁽²⁾ = {(vn2Mag / 20).toFixed(3)} A ∠ {vn2Ang.toFixed(1)}°
              </div>
            </div>
            <div className="bg-slate-950 p-3 rounded-lg border border-purple-500/30">
              <span className="text-purple-400 font-bold block">Vector Phasor Sum (Total):</span>
              <div className="mt-1 text-purple-300 font-bold">
                V_node = {displayVNodeMag.toFixed(2)} V ∠ {displayVNodeAng.toFixed(1)}°
              </div>
              <div className="text-slate-400">
                I_L = {displayILMag.toFixed(3)} A ∠ {displayVNodeAng.toFixed(1)}°
              </div>
              <div className="text-emerald-400 font-bold mt-1">
                P_L = {(displayILMag * displayILMag * 20).toFixed(2)} W
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
