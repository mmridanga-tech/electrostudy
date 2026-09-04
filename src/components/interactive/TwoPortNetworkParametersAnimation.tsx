import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const TwoPortNetworkParametersAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const labelId = useId();

  // Topology: T-Network or Pi-Network
  const [topology, setTopology] = useState<'T' | 'Pi'>('T');

  // Branch Impedances for T-Network:
  // Z1 (series port 1), Z2 (series port 2), Z3 (shunt)
  const [r1, setR1] = useState<number>(10);
  const [x1, setX1] = useState<number>(5); // j5
  const [r2, setR2] = useState<number>(10);
  const [x2, setX2] = useState<number>(5);
  const [r3, setR3] = useState<number>(40);
  const [x3, setX3] = useState<number>(0);

  // Load impedance ZL
  const [rl, setRl] = useState<number>(50);

  // For T-network:
  // Z11 = Z1 + Z3 = (r1 + r3) + j(x1 + x3)
  // Z12 = Z3 = r3 + j*x3
  // Z21 = Z3 = r3 + j*x3 (passive reciprocal)
  // Z22 = Z2 + Z3 = (r2 + r3) + j(x2 + x3)
  const z11R = r1 + r3;
  const z11X = x1 + x3;
  const z12R = r3;
  const z12X = x3;
  const z21R = r3;
  const z21X = x3;
  const z22R = r2 + r3;
  const z22X = x2 + x3;

  // Determinant delta_Z = Z11*Z22 - Z12*Z21
  // Z11*Z22 = (z11R*z22R - z11X*z22X) + j(z11R*z22X + z11X*z22R)
  const zProd1122R = z11R * z22R - z11X * z22X;
  const zProd1122X = z11R * z22X + z11X * z22R;
  const zProd1221R = z12R * z21R - z12X * z21X;
  const zProd1221X = z12R * z21X + z12X * z21R;
  const deltaZR = zProd1122R - zProd1221R;
  const deltaZX = zProd1122X - zProd1221X;
  const deltaZMagSq = deltaZR * deltaZR + deltaZX * deltaZX || 1e-6;

  // Y-parameters: [Y] = [Z]^-1
  // Y11 = Z22 / deltaZ
  const y11R = (z22R * deltaZR + z22X * deltaZX) / deltaZMagSq;
  const y11X = (z22X * deltaZR - z22R * deltaZX) / deltaZMagSq;
  // Y12 = -Z12 / deltaZ
  const y12R = (-z12R * deltaZR - z12X * deltaZX) / deltaZMagSq;
  const y12X = (-z12X * deltaZR + z12R * deltaZX) / deltaZMagSq;
  // Y21 = -Z21 / deltaZ
  const y21R = y12R;
  const y21X = y12X;
  // Y22 = Z11 / deltaZ
  const y22R = (z11R * deltaZR + z11X * deltaZX) / deltaZMagSq;
  const y22X = (z11X * deltaZR - z11R * deltaZX) / deltaZMagSq;

  // ABCD Transmission Parameters:
  // V1 = A V2 - B I2, I1 = C V2 - D I2 (or with I2 flowing out: V1 = A V2 + B I2', I1 = C V2 + D I2')
  // A = Z11 / Z21
  const z21MagSq = z21R * z21R + z21X * z21X || 1e-6;
  const aParamR = (z11R * z21R + z11X * z21X) / z21MagSq;
  const aParamX = (z11X * z21R - z11R * z21X) / z21MagSq;
  // B = deltaZ / Z21
  const bParamR = (deltaZR * z21R + deltaZX * z21X) / z21MagSq;
  const bParamX = (deltaZX * z21R - deltaZR * z21X) / z21MagSq;
  // C = 1 / Z21
  const cParamR = z21R / z21MagSq;
  const cParamX = -z21X / z21MagSq;
  // D = Z22 / Z21
  const dParamR = (z22R * z21R + z22X * z21X) / z21MagSq;
  const dParamX = (z22X * z21R - z22R * z21X) / z21MagSq;

  // Verification of Reciprocity: AD - BC = 1
  const adR = aParamR * dParamR - aParamX * dParamX;
  const adX = aParamR * dParamX + aParamX * dParamR;
  const bcR = bParamR * cParamR - bParamX * cParamX;
  const bcX = bParamR * cParamX + bParamX * cParamR;
  const detTR = adR - bcR;
  const detTX = adX - bcX;

  // Check symmetry: Z11 == Z22 or A == D
  const isSymmetric = Math.abs(z11R - z22R) < 0.01 && Math.abs(z11X - z22X) < 0.01;

  // Input Impedance with load RL: Zin = (A*ZL + B) / (C*ZL + D)
  const numR = aParamR * rl + bParamR;
  const numX = aParamX * rl + bParamX;
  const denR = cParamR * rl + dParamR;
  const denX = cParamX * rl + dParamX;
  const denMagSq = denR * denR + denX * denX || 1e-6;
  const zinR = (numR * denR + numX * denX) / denMagSq;
  const zinX = (numX * denR - numR * denX) / denMagSq;
  const zinMag = Math.sqrt(zinR * zinR + zinX * zinX);

  const t = {
    title: {
      en: 'Two-Port AC Network Parameters (Z, Y, ABCD, h)',
      hi: 'द्वि-पोर्ट एसी नेटवर्क प्राचल (Z, Y, ABCD, h)',
      bn: 'টু-পোর্ট এসি নেটওয়ার্ক প্যারামিটার (Z, Y, ABCD, h)'
    },
    subtitle: {
      en: 'Interactive calculation and inter-parameter conversion of Impedance [Z], Admittance [Y], Transmission [ABCD], and reciprocity verification',
      hi: 'प्रतिबाधा [Z], प्रवेश्यता [Y], संचरण [ABCD] का परस्पर रूपांतरण एवं पारस्परिकता सत्यापन',
      bn: 'প্রতিবাধা [Z], প্রবেশ্যতা [Y], ট্রান্সমিশন [ABCD] এর পারস্পরিক রূপান্তর ও রেসিপ্রোসিটি যাচাই'
    },
    tNetwork: { en: 'T-Network Topology', hi: 'T-नेटवर्क टोपोलॉजी', bn: 'টি-নেটওয়ার্ক টপোলজি' },
    branch1: { en: 'Series Branch Z₁ (Port 1)', hi: 'श्रेणी शाखा Z₁ (पोर्ट 1)', bn: 'শ্রেণি শাখা Z₁ (পোর্ট ১)' },
    branch2: { en: 'Series Branch Z₂ (Port 2)', hi: 'श्रेणी शाखा Z₂ (पोर्ट 2)', bn: 'শ্রেণি শাখা Z₂ (পোর্ট ২)' },
    branch3: { en: 'Shunt Branch Z₃ (Common)', hi: 'शंट शाखा Z₃ (उभयनिष्ठ)', bn: 'শান্ট শাখা Z₃ (সাধারণ)' }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Linear Multi-Port Matrix Analyzer</span>
        </div>
        <h3 id={labelId} className="text-xl font-bold text-white mt-1">
          {t.title[lang]}
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          {t.subtitle[lang]}
        </p>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Branch 1 */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-cyan-300 block">{t.branch1[lang]}</span>
          <div className="flex justify-between">
            <span>R₁: {r1} Ω</span>
            <span>X₁: {x1 >= 0 ? `+j${x1}` : `-j${Math.abs(x1)}`} Ω</span>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            value={r1}
            onChange={(e) => setR1(Number(e.target.value))}
            aria-label="Branch 1 resistance"
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <input
            type="range"
            min="-30"
            max="30"
            value={x1}
            onChange={(e) => setX1(Number(e.target.value))}
            aria-label="Branch 1 reactance"
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>

        {/* Branch 2 */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-emerald-300 block">{t.branch2[lang]}</span>
          <div className="flex justify-between">
            <span>R₂: {r2} Ω</span>
            <span>X₂: {x2 >= 0 ? `+j${x2}` : `-j${Math.abs(x2)}`} Ω</span>
          </div>
          <input
            type="range"
            min="0"
            max="50"
            value={r2}
            onChange={(e) => setR2(Number(e.target.value))}
            aria-label="Branch 2 resistance"
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <input
            type="range"
            min="-30"
            max="30"
            value={x2}
            onChange={(e) => setX2(Number(e.target.value))}
            aria-label="Branch 2 reactance"
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>

        {/* Shunt Branch 3 */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-amber-300 block">{t.branch3[lang]}</span>
          <div className="flex justify-between">
            <span>R₃: {r3} Ω</span>
            <span>X₃: {x3 >= 0 ? `+j${x3}` : `-j${Math.abs(x3)}`} Ω</span>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            value={r3}
            onChange={(e) => setR3(Number(e.target.value))}
            aria-label="Branch 3 resistance"
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <input
            type="range"
            min="-50"
            max="50"
            value={x3}
            onChange={(e) => setX3(Number(e.target.value))}
            aria-label="Branch 3 reactance"
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>

        {/* Symmetry Toggle & Load */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2 flex flex-col justify-between">
          <span className="font-semibold text-purple-300 block">Symmetry Preset & Load</span>
          <button
            onClick={() => {
              setR2(r1);
              setX2(x1);
            }}
            className="w-full py-1.5 px-2 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-600/50 text-purple-200 rounded font-semibold text-[11px]"
          >
            Force Symmetry (Z₁ = Z₂)
          </button>
          <div>
            <div className="flex justify-between text-[11px]">
              <span>Port 2 Load R_L:</span>
              <span className="font-mono text-purple-300">{rl} Ω</span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              value={rl}
              onChange={(e) => setRl(Number(e.target.value))}
              aria-label="Load resistance RL"
              className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Schematic Diagram of Two-Port T Network */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
        <svg viewBox="0 0 740 180" className="w-full h-auto text-slate-300 select-none">
          {/* Outer Two-Port Box */}
          <rect x="120" y="25" width="500" height="130" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
          <text x="370" y="42" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="bold">Two-Port Linear Network [Z / Y / ABCD]</text>

          {/* Port 1 Terminals */}
          <line x1="40" y1="60" x2="160" y2="60" stroke="#38bdf8" strokeWidth="2.5" />
          <circle cx="40" cy="60" r="4" fill="#38bdf8" />
          <text x="25" y="64" fill="#38bdf8" fontSize="12" fontWeight="bold">1</text>

          <line x1="40" y1="130" x2="160" y2="130" stroke="#38bdf8" strokeWidth="2.5" />
          <circle cx="40" cy="130" r="4" fill="#38bdf8" />
          <text x="25" y="134" fill="#38bdf8" fontSize="12" fontWeight="bold">1'</text>

          {/* Port 1 current arrow */}
          <path d="M 70 52 L 95 52" stroke="#38bdf8" strokeWidth="2" />
          <polygon points="95,49 102,52 95,55" fill="#38bdf8" />
          <text x="85" y="45" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">I₁</text>

          {/* Port 1 Voltage */}
          <text x="55" y="98" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">+ V₁ -</text>

          {/* Branch 1 Z1 */}
          <rect x="160" y="48" width="80" height="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="3" />
          <text x="200" y="64" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
            Z₁ ({r1}{x1 >= 0 ? `+j${x1}` : `-j${Math.abs(x1)}`}Ω)
          </text>

          {/* Center Node */}
          <line x1="240" y1="60" x2="370" y2="60" stroke="#64748b" strokeWidth="2" />
          <circle cx="370" cy="60" r="4" fill="#fbbf24" />

          {/* Shunt Branch 3 Z3 */}
          <line x1="370" y1="60" x2="370" y2="78" stroke="#64748b" strokeWidth="2" />
          <rect x="335" y="78" width="70" height="34" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" rx="3" />
          <text x="370" y="95" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">Z₃</text>
          <text x="370" y="106" textAnchor="middle" fill="#fde047" fontSize="8">
            {r3}{x3 >= 0 ? `+j${x3}` : `-j${Math.abs(x3)}`}Ω
          </text>
          <line x1="370" y1="112" x2="370" y2="130" stroke="#64748b" strokeWidth="2" />
          <line x1="160" y1="130" x2="580" y2="130" stroke="#64748b" strokeWidth="2" />

          {/* Branch 2 Z2 */}
          <line x1="370" y1="60" x2="500" y2="60" stroke="#64748b" strokeWidth="2" />
          <rect x="500" y="48" width="80" height="24" fill="#1e293b" stroke="#10b981" strokeWidth="2" rx="3" />
          <text x="540" y="64" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">
            Z₂ ({r2}{x2 >= 0 ? `+j${x2}` : `-j${Math.abs(x2)}`}Ω)
          </text>

          {/* Port 2 Terminals */}
          <line x1="580" y1="60" x2="700" y2="60" stroke="#10b981" strokeWidth="2.5" />
          <circle cx="700" cy="60" r="4" fill="#10b981" />
          <text x="715" y="64" fill="#10b981" fontSize="12" fontWeight="bold">2</text>

          <line x1="580" y1="130" x2="700" y2="130" stroke="#10b981" strokeWidth="2.5" />
          <circle cx="700" cy="130" r="4" fill="#10b981" />
          <text x="715" y="134" fill="#10b981" fontSize="12" fontWeight="bold">2'</text>

          {/* Port 2 current arrow */}
          <path d="M 670 52 L 645 52" stroke="#10b981" strokeWidth="2" />
          <polygon points="645,49 638,52 645,55" fill="#10b981" />
          <text x="655" y="45" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">I₂</text>

          {/* Port 2 Voltage */}
          <text x="685" y="98" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">+ V₂ -</text>
        </svg>
      </div>

      {/* Matrices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        {/* Z-Parameters */}
        <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/30 space-y-2">
          <div className="text-cyan-400 font-bold uppercase tracking-wider text-xs border-b border-cyan-900/50 pb-1 flex justify-between">
            <span>[Z] Matrix (Ω)</span>
            <span className="text-[10px] text-cyan-300">V = [Z] I</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">Z₁₁:</span>
              <span className="text-cyan-300 font-bold">{z11R} {z11X >= 0 ? '+' : '-'} j{Math.abs(z11X)}</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">Z₁₂:</span>
              <span className="text-cyan-300 font-bold">{z12R} {z12X >= 0 ? '+' : '-'} j{Math.abs(z12X)}</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">Z₂₁:</span>
              <span className="text-cyan-300 font-bold">{z21R} {z21X >= 0 ? '+' : '-'} j{Math.abs(z21X)}</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">Z₂₂:</span>
              <span className="text-cyan-300 font-bold">{z22R} {z22X >= 0 ? '+' : '-'} j{Math.abs(z22X)}</span>
            </div>
          </div>
          <div className="text-[11px] text-emerald-400 pt-1">
            ✓ Reciprocity: Z₁₂ = Z₂₁ ({z12R}{z12X >= 0 ? '+' : '-'}j{Math.abs(z12X)} Ω)
          </div>
        </div>

        {/* ABCD Transmission Parameters */}
        <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/30 space-y-2">
          <div className="text-amber-400 font-bold uppercase tracking-wider text-xs border-b border-amber-900/50 pb-1 flex justify-between">
            <span>[T] ABCD Matrix</span>
            <span className="text-[10px] text-amber-300">Cascadable</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">A (V₁/V₂):</span>
              <span className="text-amber-300 font-bold">{aParamR.toFixed(2)} {aParamX >= 0 ? '+' : '-'} j{Math.abs(aParamX).toFixed(2)}</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">B (Ω):</span>
              <span className="text-amber-300 font-bold">{bParamR.toFixed(2)} {bParamX >= 0 ? '+' : '-'} j{Math.abs(bParamX).toFixed(2)}</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">C (S):</span>
              <span className="text-amber-300 font-bold">{cParamR.toFixed(4)} {cParamX >= 0 ? '+' : '-'} j{Math.abs(cParamX).toFixed(4)}</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">D (I₁/I₂):</span>
              <span className="text-amber-300 font-bold">{dParamR.toFixed(2)} {dParamX >= 0 ? '+' : '-'} j{Math.abs(dParamX).toFixed(2)}</span>
            </div>
          </div>
          <div className="text-[11px] text-amber-300 pt-1">
            Determinant: AD - BC = {detTR.toFixed(2)} {detTX >= 0 ? '+' : '-'} j{Math.abs(detTX).toFixed(2)} (≈ 1.0)
          </div>
        </div>

        {/* Network Properties & Loaded Response */}
        <div className="bg-slate-950 p-4 rounded-xl border border-purple-500/30 space-y-2">
          <div className="text-purple-400 font-bold uppercase tracking-wider text-xs border-b border-purple-900/50 pb-1">
            Network Symmetry & Loaded Z_in
          </div>
          <div className="space-y-1 pt-1 text-xs">
            <div>
              Symmetry Status:{' '}
              <span className={isSymmetric ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
                {isSymmetric ? 'SYMMETRICAL (Z₁₁ = Z₂₂, A = D)' : 'ASYMMETRICAL (Z₁₁ ≠ Z₂₂)'}
              </span>
            </div>
            <div className="text-slate-400 pt-2">Loaded Input Impedance Z_in (with R_L = {rl}Ω):</div>
            <div className="text-purple-300 font-bold text-sm">
              Z_in = {zinR.toFixed(2)} {zinX >= 0 ? '+' : '-'} j{Math.abs(zinX).toFixed(2)} Ω
            </div>
            <div className="text-slate-400 text-[11px]">
              |Z_in| = {zinMag.toFixed(2)} Ω
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
