import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const ReflectedImpedanceTNetworkAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const labelId = useId();

  // Primary coil parameters
  const [r1, setR1] = useState<number>(5);
  const [l1, setL1] = useState<number>(25); // mH

  // Secondary coil parameters
  const [r2, setR2] = useState<number>(8);
  const [l2, setL2] = useState<number>(40); // mH

  // Mutual coupling
  const [k, setK] = useState<number>(0.7);
  const [freq, setFreq] = useState<number>(100); // Hz

  // Load connected to secondary
  const [rl, setRl] = useState<number>(50); // ohm
  const [xl, setXl] = useState<number>(-30); // ohm (capacitive or inductive)

  // Calculations
  const omega = 2 * Math.PI * freq;
  const xl1 = omega * (l1 * 1e-3);
  const xl2 = omega * (l2 * 1e-3);
  const m = k * Math.sqrt(l1 * l2); // mH
  const xm = omega * (m * 1e-3); // ohm

  // Total secondary loop impedance Z22 = (R2 + RL) + j(XL2 + XL)
  const r22 = r2 + rl;
  const x22 = xl2 + xl;
  const z22MagSq = r22 * r22 + x22 * x22 || 1e-6;

  // Reflected impedance Z_ref = (omega * M)^2 / Z22 = (X_M)^2 * (r22 - j*x22) / |Z22|^2
  const zrefReal = (xm * xm * r22) / z22MagSq;
  const zrefImag = -(xm * xm * x22) / z22MagSq; // Note negative sign: secondary inductance reflects as capacitive, capacitance reflects as inductive!
  const zrefMag = Math.sqrt(zrefReal * zrefReal + zrefImag * zrefImag);

  // Total Input Impedance seen from primary: Zin = Z11 + Zref = (R1 + ZrefReal) + j(XL1 + ZrefImag)
  const zinReal = r1 + zrefReal;
  const zinImag = xl1 + zrefImag;
  const zinMag = Math.sqrt(zinReal * zinReal + zinImag * zinImag);
  const zinAngDeg = (Math.atan2(zinImag, zinReal) * 180) / Math.PI;

  // Equivalent T-network parameters:
  // Branch A (Series Primary): Za = (R1 + j*omega*L1) - j*omega*M = R1 + j*omega*(L1 - M)
  const zaReal = r1;
  const zaImag = xl1 - xm;
  // Branch B (Series Secondary): Zb = (R2 + j*omega*L2) - j*omega*M = R2 + j*omega*(L2 - M)
  const zbReal = r2;
  const zbImag = xl2 - xm;
  // Branch C (Shunt Mutual): Zc = j*omega*M
  const zcReal = 0;
  const zcImag = xm;

  const t = {
    title: {
      en: 'Reflected Impedance & Conductively Coupled Equivalent T-Network',
      hi: 'परावर्तित प्रतिबाधा एवं चालक रूप से युग्मित तुल्य टी-नेटवर्क',
      bn: 'প্রতিফলিত প্রতিবাধা ও পরিবাহীভাবে সংযুক্ত সমতুল্য টি-নেটওয়ার্ক'
    },
    subtitle: {
      en: 'Observe how secondary load reflects into the primary winding: Z_ref = (ωM)² / Z₂₂ and synthesize equivalent T-models',
      hi: 'देखें कि द्वितीयक लोड प्राथमिक वाइंडिंग में कैसे परावर्तित होता है: Z_ref = (ωM)² / Z₂₂ एवं तुल्य T-मॉडल बनाएं',
      bn: 'লক্ষ্য করুন কীভাবে দ্বিতীয়ক লোড প্রাথমিক কুণ্ডলীতে প্রতিফলিত হয়: Z_ref = (ωM)² / Z₂₂ এবং সমতুল্য টি-মডেল বিশ্লেষণ করুন'
    },
    primary: { en: 'Primary Winding (Z₁)', hi: 'प्राथमिक वाइंडिंग (Z₁)', bn: 'প্রাথমিক কুণ্ডলী (Z₁)' },
    secondary: { en: 'Secondary Winding (Z₂)', hi: 'द्वितीयक वाइंडिंग (Z₂)', bn: 'দ্বিতীয়ক কুণ্ডলী (Z₂)' },
    load: { en: 'Secondary Load (Z_L)', hi: 'द्वितीयक लोड (Z_L)', bn: 'দ্বিতীয়ক লোড (Z_L)' },
    coupling: { en: 'Coupling & Frequency', hi: 'युग्मन एवं आवृत्ति', bn: 'যুগ্মন ও কম্পাঙ্ক' }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Transformer & Coupled Network Theory</span>
        </div>
        <h3 id={labelId} className="text-xl font-bold text-white mt-1">
          {t.title[lang]}
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          {t.subtitle[lang]}
        </p>
      </div>

      {/* Control Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Primary */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-cyan-300 block">{t.primary[lang]}</span>
          <div className="flex justify-between">
            <span>R₁: {r1} Ω</span>
            <span>L₁: {l1} mH</span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={r1}
            onChange={(e) => setR1(Number(e.target.value))}
            aria-label="Primary resistance R1"
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <input
            type="range"
            min="5"
            max="100"
            value={l1}
            onChange={(e) => setL1(Number(e.target.value))}
            aria-label="Primary inductance L1"
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>

        {/* Secondary */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-emerald-300 block">{t.secondary[lang]}</span>
          <div className="flex justify-between">
            <span>R₂: {r2} Ω</span>
            <span>L₂: {l2} mH</span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            value={r2}
            onChange={(e) => setR2(Number(e.target.value))}
            aria-label="Secondary resistance R2"
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <input
            type="range"
            min="5"
            max="100"
            value={l2}
            onChange={(e) => setL2(Number(e.target.value))}
            aria-label="Secondary inductance L2"
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>

        {/* Secondary Load */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-purple-300 block">{t.load[lang]}</span>
          <div className="flex justify-between">
            <span>R_L: {rl} Ω</span>
            <span>X_L: {xl >= 0 ? `+j${xl}` : `-j${Math.abs(xl)}`} Ω</span>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            value={rl}
            onChange={(e) => setRl(Number(e.target.value))}
            aria-label="Load resistance RL"
            className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <input
            type="range"
            min="-80"
            max="80"
            value={xl}
            onChange={(e) => setXl(Number(e.target.value))}
            aria-label="Load reactance XL"
            className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>

        {/* Coupling & Frequency */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-amber-300 block">{t.coupling[lang]}</span>
          <div className="flex justify-between">
            <span>Coupling k: {k.toFixed(2)}</span>
            <span>Freq: {freq} Hz</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="0.99"
            step="0.05"
            value={k}
            onChange={(e) => setK(Number(e.target.value))}
            aria-label="Coupling coefficient k"
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <input
            type="range"
            min="20"
            max="500"
            step="10"
            value={freq}
            onChange={(e) => setFreq(Number(e.target.value))}
            aria-label="AC Frequency in Hertz"
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>
      </div>

      {/* Schematic Diagram: Coupled vs Equivalent T */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
        <svg viewBox="0 0 760 210" className="w-full h-auto text-slate-300 select-none">
          {/* Left: Coupled Transformer Model */}
          <g transform="translate(10, 10)">
            <text x="160" y="18" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
              Coupled Circuit with Mutual Reactance X_M = {xm.toFixed(1)}Ω
            </text>

            {/* Input Terminals */}
            <line x1="20" y1="50" x2="80" y2="50" stroke="#38bdf8" strokeWidth="2" />
            <line x1="20" y1="160" x2="80" y2="160" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="20" cy="50" r="3" fill="#38bdf8" />
            <circle cx="20" cy="160" r="3" fill="#38bdf8" />
            <text x="10" y="54" fill="#38bdf8" fontSize="10">1</text>
            <text x="10" y="164" fill="#38bdf8" fontSize="10">1'</text>

            {/* Primary Coil L1 */}
            <path d="M 80 50 L 80 80" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 80 80 Q 95 85 80 90 Q 95 95 80 100 Q 95 105 80 110 Q 95 115 80 120 Q 95 125 80 130" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
            <path d="M 80 130 L 80 160" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="95" cy="75" r="4" fill="#38bdf8" /> {/* Dot 1 */}
            <text x="55" y="105" fill="#38bdf8" fontSize="10">L₁</text>

            {/* Core Lines */}
            <line x1="125" y1="70" x2="125" y2="140" stroke="#64748b" strokeWidth="2" />
            <line x1="135" y1="70" x2="135" y2="140" stroke="#64748b" strokeWidth="2" />
            <text x="130" y="60" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">M</text>

            {/* Secondary Coil L2 */}
            <path d="M 180 50 L 180 80" stroke="#10b981" strokeWidth="2" />
            <path d="M 180 80 Q 165 85 180 90 Q 165 95 180 100 Q 165 105 180 110 Q 165 115 180 120 Q 165 125 180 130" stroke="#10b981" strokeWidth="2.5" fill="none" />
            <path d="M 180 130 L 180 160" stroke="#10b981" strokeWidth="2" />
            <circle cx="165" cy="75" r="4" fill="#10b981" /> {/* Dot 2 */}
            <text x="195" y="105" fill="#10b981" fontSize="10">L₂</text>

            {/* Connect to Load ZL */}
            <line x1="180" y1="50" x2="250" y2="50" stroke="#10b981" strokeWidth="2" />
            <line x1="180" y1="160" x2="250" y2="160" stroke="#10b981" strokeWidth="2" />
            <rect x="235" y="75" width="50" height="60" fill="#2e1065" stroke="#c084fc" strokeWidth="2" rx="3" />
            <text x="260" y="100" textAnchor="middle" fill="#e9d5ff" fontSize="10" fontWeight="bold">Z_L</text>
            <text x="260" y="115" textAnchor="middle" fill="#c084fc" fontSize="9">{rl}Ω</text>
            <line x1="260" y1="50" x2="260" y2="75" stroke="#10b981" strokeWidth="2" />
            <line x1="260" y1="135" x2="260" y2="160" stroke="#10b981" strokeWidth="2" />
          </g>

          {/* Divider */}
          <line x1="330" y1="20" x2="330" y2="190" stroke="#334155" strokeDasharray="4 4" strokeWidth="2" />

          {/* Right: Equivalent Conductive T-Network */}
          <g transform="translate(360, 10)">
            <text x="180" y="18" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
              Conductively Equivalent T-Network
            </text>

            {/* Input wire */}
            <line x1="20" y1="70" x2="60" y2="70" stroke="#64748b" strokeWidth="2" />
            {/* Branch A */}
            <rect x="60" y="58" width="80" height="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" rx="3" />
            <text x="100" y="74" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">
              Z_A (L₁-M)
            </text>

            {/* Center Node */}
            <line x1="140" y1="70" x2="200" y2="70" stroke="#64748b" strokeWidth="2" />
            <circle cx="170" cy="70" r="3" fill="#fbbf24" />

            {/* Shunt Branch C (Mutual M) */}
            <line x1="170" y1="70" x2="170" y2="100" stroke="#64748b" strokeWidth="2" />
            <rect x="145" y="100" width="50" height="35" fill="#1e293b" stroke="#fbbf24" strokeWidth="1.5" rx="3" />
            <text x="170" y="118" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">Z_C</text>
            <text x="170" y="130" textAnchor="middle" fill="#fde047" fontSize="8">jX_M</text>
            <line x1="170" y1="135" x2="170" y2="165" stroke="#64748b" strokeWidth="2" />

            {/* Branch B */}
            <rect x="200" y="58" width="80" height="24" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" rx="3" />
            <text x="240" y="74" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">
              Z_B (L₂-M)
            </text>

            {/* Output to Load ZL */}
            <line x1="280" y1="70" x2="330" y2="70" stroke="#64748b" strokeWidth="2" />
            <line x1="330" y1="70" x2="330" y2="95" stroke="#64748b" strokeWidth="2" />
            <rect x="310" y="95" width="40" height="40" fill="#2e1065" stroke="#c084fc" strokeWidth="1.5" rx="3" />
            <text x="330" y="118" textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold">Z_L</text>
            <line x1="330" y1="135" x2="330" y2="165" stroke="#64748b" strokeWidth="2" />

            {/* Bottom ground rail */}
            <line x1="20" y1="165" x2="330" y2="165" stroke="#64748b" strokeWidth="2" />
          </g>
        </svg>
      </div>

      {/* Mathematical Synthesis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/30 space-y-2">
          <div className="text-cyan-400 font-bold uppercase tracking-wider text-xs border-b border-cyan-900/50 pb-1">
            Reflected Impedance (Z_ref)
          </div>
          <div className="space-y-1 pt-1">
            <div className="text-slate-400">Formula: (ωM)² / Z₂₂</div>
            <div>Secondary Z₂₂: {r22.toFixed(1)} {x22 >= 0 ? '+' : '-'} j{Math.abs(x22).toFixed(1)} Ω</div>
            <div className="text-cyan-300 font-bold text-sm">
              Z_ref = {zrefReal.toFixed(2)} {zrefImag >= 0 ? '+' : '-'} j{Math.abs(zrefImag).toFixed(2)} Ω
            </div>
            <div className="text-slate-400 text-[10px] pt-1">
              Notice: Secondary reactance ({x22.toFixed(1)}Ω) reflects as {zrefImag >= 0 ? 'INDUCTIVE (+j)' : 'CAPACITIVE (-j)'} with inverted sign!
            </div>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 space-y-2">
          <div className="text-emerald-400 font-bold uppercase tracking-wider text-xs border-b border-emerald-900/50 pb-1">
            Total Input Impedance (Z_in)
          </div>
          <div className="space-y-1 pt-1">
            <div className="text-slate-400">Z_in = Z₁₁ + Z_ref</div>
            <div>Z₁₁ (Primary): {r1} + j{xl1.toFixed(1)} Ω</div>
            <div className="text-emerald-300 font-bold text-sm">
              Z_in = {zinReal.toFixed(2)} {zinImag >= 0 ? '+' : '-'} j{Math.abs(zinImag).toFixed(2)} Ω
            </div>
            <div className="text-slate-300">
              |Z_in| = {zinMag.toFixed(2)} Ω ∠ {zinAngDeg.toFixed(1)}°
            </div>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/30 space-y-2">
          <div className="text-amber-400 font-bold uppercase tracking-wider text-xs border-b border-amber-900/50 pb-1">
            Equivalent T-Branches
          </div>
          <div className="space-y-1 pt-1 text-[11px]">
            <div>Z_A = Z₁ - Z_M: <span className="text-cyan-300 font-bold">{zaReal} {zaImag >= 0 ? '+' : '-'} j{Math.abs(zaImag).toFixed(1)} Ω</span></div>
            <div>Z_B = Z₂ - Z_M: <span className="text-emerald-300 font-bold">{zbReal} {zbImag >= 0 ? '+' : '-'} j{Math.abs(zbImag).toFixed(1)} Ω</span></div>
            <div>Z_C = Z_M: <span className="text-amber-300 font-bold">j{zcImag.toFixed(1)} Ω</span></div>
            <div className="text-slate-400 text-[10px] pt-1">
              Valid for common ground without isolation requirement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
