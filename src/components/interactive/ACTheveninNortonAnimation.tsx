import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const ACTheveninNortonAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const labelId = useId();

  // Source parameters: Vs = V_mag angle V_phase
  const [vsMag, setVsMag] = useState<number>(100);
  const [vsPhase, setVsPhase] = useState<number>(0);

  // Source/Internal impedance Z1 = R1 + jX1
  const [r1, setR1] = useState<number>(10);
  const [x1, setX1] = useState<number>(20); // inductive reactance

  // Shunt branch impedance Z2 = R2 + jX2
  const [r2, setR2] = useState<number>(30);
  const [x2, setX2] = useState<number>(-15); // capacitive reactance

  // Load impedance ZL = RL + jXL
  const [rl, setRl] = useState<number>(25);
  const [xl, setXl] = useState<number>(10);

  // Complex arithmetic helpers
  // Z1 = (r1, x1), Z2 = (r2, x2)
  // Z1 + Z2 = (r1 + r2, x1 + x2)
  const rSum = r1 + r2;
  const xSum = x1 + x2;
  const magSumSq = rSum * rSum + xSum * xSum || 1e-6;

  // Z1 * Z2 = (r1*r2 - x1*x2) + j(r1*x2 + r2*x1)
  const prodReal = r1 * r2 - x1 * x2;
  const prodImag = r1 * x2 + r2 * x1;

  // Zth = (Z1 * Z2) / (Z1 + Z2)
  const zthReal = (prodReal * rSum + prodImag * xSum) / magSumSq;
  const zthImag = (prodImag * rSum - prodReal * xSum) / magSumSq;
  const zthMag = Math.sqrt(zthReal * zthReal + zthImag * zthImag);
  const zthAngRad = Math.atan2(zthImag, zthReal);
  const zthAngDeg = (zthAngRad * 180) / Math.PI;

  // Vs in rectangular: vsReal = vsMag * cos(vsPhase), vsImag = vsMag * sin(vsPhase)
  const vsRad = (vsPhase * Math.PI) / 180;
  const vsReal = vsMag * Math.cos(vsRad);
  const vsImag = vsMag * Math.sin(vsRad);

  // Vth = Vs * Z2 / (Z1 + Z2)
  // Vs * Z2
  const vsZ2Real = vsReal * r2 - vsImag * x2;
  const vsZ2Imag = vsReal * x2 + vsImag * r2;
  const vthReal = (vsZ2Real * rSum + vsZ2Imag * xSum) / magSumSq;
  const vthImag = (vsZ2Imag * rSum - vsZ2Real * xSum) / magSumSq;
  const vthMag = Math.sqrt(vthReal * vthReal + vthImag * vthImag);
  const vthAngDeg = (Math.atan2(vthImag, vthReal) * 180) / Math.PI;

  // Norton Current In = Vth / Zth = Vs / Z1
  // Z1 mag sq
  const z1MagSq = r1 * r1 + x1 * x1 || 1e-6;
  const inReal = (vsReal * r1 + vsImag * x1) / z1MagSq;
  const inImag = (vsImag * r1 - vsReal * x1) / z1MagSq;
  const inMag = Math.sqrt(inReal * inReal + inImag * inImag);
  const inAngDeg = (Math.atan2(inImag, inReal) * 180) / Math.PI;

  // Load Current IL = Vth / (Zth + ZL)
  const zTotalR = zthReal + rl;
  const zTotalX = zthImag + xl;
  const zTotalMagSq = zTotalR * zTotalR + zTotalX * zTotalX || 1e-6;
  const ilReal = (vthReal * zTotalR + vthImag * zTotalX) / zTotalMagSq;
  const ilImag = (vthImag * zTotalR - vthReal * zTotalX) / zTotalMagSq;
  const ilMag = Math.sqrt(ilReal * ilReal + ilImag * ilImag);
  const ilAngDeg = (Math.atan2(ilImag, ilReal) * 180) / Math.PI;

  // Load Voltage VL = IL * ZL
  const vlReal = ilReal * rl - ilImag * xl;
  const vlImag = ilReal * xl + ilImag * rl;
  const vlMag = Math.sqrt(vlReal * vlReal + vlImag * vlImag);
  const vlAngDeg = (Math.atan2(vlImag, vlReal) * 180) / Math.PI;

  // Load Complex Power S_L = V_L * I_L* = (vlReal + j*vlImag) * (ilReal - j*ilImag)
  const pLoad = vlReal * ilReal + vlImag * ilImag; // Real power (W)
  const qLoad = vlImag * ilReal - vlReal * ilImag; // Reactive power (VAR)
  const sLoadMag = Math.sqrt(pLoad * pLoad + qLoad * qLoad);

  const t = {
    title: {
      en: 'Phasor Domain AC Thevenin & Norton Equivalent Calculator',
      hi: 'फेजर डोमेन एसी थेवेनिन एवं नॉर्टन तुल्य परिपथ गणक',
      bn: 'ফেজর ডোমেন এসি থেভেনিন ও নর্টন সমতুল্য বর্তনী ক্যালকুলেটর'
    },
    subtitle: {
      en: 'Compute open-circuit voltage phasor V_th, complex impedance Z_th, Norton current I_N, and complex load transfer',
      hi: 'ओपन-सर्किट वोल्टेज फेजर V_th, सम्मिश्र प्रतिबाधा Z_th, नॉर्टन धारा I_N एवं लोड शक्ति की गणना करें',
      bn: 'ওপেন-সার্কিট ভোল্টেজ ফেজর V_th, জটিল প্রতিবাধা Z_th, নর্টন কারেন্ট I_N ও লোড পাওয়ার গণনা করুন'
    },
    sourceParams: { en: 'Source Parameters (Vs)', hi: 'स्रोत प्राचल (Vs)', bn: 'উৎস প্যারামিটার (Vs)' },
    branchZ1: { en: 'Series Branch Z₁ (R₁ + jX₁)', hi: 'श्रेणी शाखा Z₁ (R₁ + jX₁)', bn: 'শ্রেণি শাখা Z₁ (R₁ + jX₁)' },
    branchZ2: { en: 'Shunt Branch Z₂ (R₂ + jX₂)', hi: 'शंट शाखा Z₂ (R₂ + jX₂)', bn: 'শান্ট শাখা Z₂ (R₂ + jX₂)' },
    loadZL: { en: 'Load Impedance Z_L (R_L + jX_L)', hi: 'लोड प्रतिबाधा Z_L (R_L + jX_L)', bn: 'লোড প্রতিবাধা Z_L (R_L + jX_L)' },
    theveninEquiv: { en: 'Thevenin Equivalent (Phasor)', hi: 'थेवेनिन तुल्य परिपथ (फेजर)', bn: 'থেভেনিন সমতুল্য বর্তনী (ফেজর)' },
    nortonEquiv: { en: 'Norton Equivalent (Phasor)', hi: 'नॉर्टन तुल्य परिपथ (फेजर)', bn: 'নর্টন সমতুল্য বর্তনী (ফেজর)' },
    loadResults: { en: 'Load Response & Power', hi: 'लोड प्रतिक्रिया एवं शक्ति', bn: 'লোড প্রতিক্রিয়া ও ক্ষমতা' },
    mag: { en: 'Magnitude', hi: 'परिमाण', bn: 'মান' },
    phase: { en: 'Phase Angle', hi: 'कला कोण', bn: 'দশা কোণ' },
    realP: { en: 'Real Power P', hi: 'सक्रिय शक्ति P', bn: 'সক্রিয় ক্ষমতা P' },
    reactiveQ: { en: 'Reactive Power Q', hi: 'प्रतिक्रियाशील शक्ति Q', bn: 'প্রতিক্রিয়াশীল ক্ষমতা Q' },
    apparentS: { en: 'Apparent Power S', hi: 'आभासी शक्ति S', bn: 'আপাত ক্ষমতা S' }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Interactive Phasor Analyzer</span>
        </div>
        <h3 id={labelId} className="text-xl font-bold text-white mt-1">
          {t.title[lang]}
        </h3>
        <p className="text-sm text-slate-400 mt-1">
          {t.subtitle[lang]}
        </p>
      </div>

      {/* Control Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Source Vs */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-cyan-300 block">{t.sourceParams[lang]}</span>
          <div>
            <div className="flex justify-between">
              <span>|Vs|:</span>
              <span className="font-mono text-cyan-400">{vsMag} V_rms</span>
            </div>
            <input
              type="range"
              min="10"
              max="240"
              value={vsMag}
              onChange={(e) => setVsMag(Number(e.target.value))}
              aria-label="Vs magnitude in Volts RMS"
              className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <span>∠Vs:</span>
              <span className="font-mono text-cyan-400">{vsPhase}°</span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              step="5"
              value={vsPhase}
              onChange={(e) => setVsPhase(Number(e.target.value))}
              aria-label="Vs phase angle in degrees"
              className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
          </div>
        </div>

        {/* Series Branch Z1 */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-emerald-300 block">{t.branchZ1[lang]}</span>
          <div>
            <div className="flex justify-between">
              <span>R₁:</span>
              <span className="font-mono text-emerald-400">{r1} Ω</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={r1}
              onChange={(e) => setR1(Number(e.target.value))}
              aria-label="R1 resistance in Ohms"
              className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <span>X₁:</span>
              <span className="font-mono text-emerald-400">{x1 >= 0 ? `+j${x1}` : `-j${Math.abs(x1)}`} Ω</span>
            </div>
            <input
              type="range"
              min="-50"
              max="100"
              value={x1}
              onChange={(e) => setX1(Number(e.target.value))}
              aria-label="X1 reactance in Ohms"
              className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
          </div>
        </div>

        {/* Shunt Branch Z2 */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-amber-300 block">{t.branchZ2[lang]}</span>
          <div>
            <div className="flex justify-between">
              <span>R₂:</span>
              <span className="font-mono text-amber-400">{r2} Ω</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={r2}
              onChange={(e) => setR2(Number(e.target.value))}
              aria-label="R2 resistance in Ohms"
              className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <span>X₂:</span>
              <span className="font-mono text-amber-400">{x2 >= 0 ? `+j${x2}` : `-j${Math.abs(x2)}`} Ω</span>
            </div>
            <input
              type="range"
              min="-100"
              max="50"
              value={x2}
              onChange={(e) => setX2(Number(e.target.value))}
              aria-label="X2 reactance in Ohms"
              className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
          </div>
        </div>

        {/* Load ZL */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-purple-300 block">{t.loadZL[lang]}</span>
          <div>
            <div className="flex justify-between">
              <span>R_L:</span>
              <span className="font-mono text-purple-400">{rl} Ω</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={rl}
              onChange={(e) => setRl(Number(e.target.value))}
              aria-label="Load resistance RL in Ohms"
              className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
          </div>
          <div>
            <div className="flex justify-between">
              <span>X_L:</span>
              <span className="font-mono text-purple-400">{xl >= 0 ? `+j${xl}` : `-j${Math.abs(xl)}`} Ω</span>
            </div>
            <input
              type="range"
              min="-80"
              max="80"
              value={xl}
              onChange={(e) => setXl(Number(e.target.value))}
              aria-label="Load reactance XL in Ohms"
              className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Schematic Diagram */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
        <svg viewBox="0 0 760 210" className="w-full h-auto text-slate-300 select-none">
          {/* Background Grid Accent */}
          <defs>
            <pattern id="grid-ch12-l01" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="#1e293b" />
            </pattern>
            <marker id="arrow-ch12-l01" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
            </marker>
          </defs>
          <rect width="760" height="210" fill="url(#grid-ch12-l01)" rx="8" />

          {/* Left: Original Circuit */}
          <g transform="translate(10, 10)">
            <text x="140" y="20" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">Original AC Network</text>
            {/* Wires */}
            <path d="M 30 110 L 30 60 L 90 60" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M 170 60 L 230 60 L 230 80" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M 230 140 L 230 170 L 30 170 L 30 130" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M 230 60 L 290 60" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M 230 170 L 290 170" stroke="#64748b" strokeWidth="2" fill="none" />

            {/* Source Vs */}
            <circle cx="30" cy="120" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 24 120 Q 27 114 30 120 T 36 120" stroke="#38bdf8" strokeWidth="2" fill="none" />
            <text x="30" y="146" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">Vs</text>

            {/* Series Z1 box */}
            <rect x="90" y="48" width="80" height="24" fill="#1e293b" stroke="#34d399" strokeWidth="2" rx="3" />
            <text x="130" y="64" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">
              Z₁ ({r1}{x1 >= 0 ? `+j${x1}` : `-j${Math.abs(x1)}`}Ω)
            </text>

            {/* Shunt Z2 box */}
            <rect x="195" y="80" width="70" height="60" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" rx="3" />
            <text x="230" y="105" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">Z₂</text>
            <text x="230" y="122" textAnchor="middle" fill="#fcd34d" fontSize="9" fontFamily="monospace">
              {r2}{x2 >= 0 ? `+j${x2}` : `-j${Math.abs(x2)}`}Ω
            </text>

            {/* Terminals A and B */}
            <circle cx="290" cy="60" r="4" fill="#38bdf8" />
            <text x="290" y="50" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">A</text>
            <circle cx="290" cy="170" r="4" fill="#38bdf8" />
            <text x="290" y="188" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">B</text>
          </g>

          {/* Divider */}
          <line x1="330" y1="25" x2="330" y2="185" stroke="#334155" strokeDasharray="4 4" strokeWidth="2" />

          {/* Right: Thevenin Equivalent with Load ZL */}
          <g transform="translate(350, 10)">
            <text x="180" y="20" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">AC Thevenin Equivalent & Load</text>

            {/* Wires */}
            <path d="M 30 110 L 30 60 L 80 60" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M 180 60 L 260 60 L 260 80" stroke="#64748b" strokeWidth="2" fill="none" />
            <path d="M 260 140 L 260 170 L 30 170 L 30 130" stroke="#64748b" strokeWidth="2" fill="none" />

            {/* Vth Source */}
            <circle cx="30" cy="120" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 24 120 Q 27 114 30 120 T 36 120" stroke="#38bdf8" strokeWidth="2" fill="none" />
            <text x="30" y="146" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">V_th</text>

            {/* Zth Impedance */}
            <rect x="80" y="48" width="100" height="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" rx="3" />
            <text x="130" y="64" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">
              Z_th ({zthReal.toFixed(1)}{zthImag >= 0 ? `+j${zthImag.toFixed(1)}` : `-j${Math.abs(zthImag).toFixed(1)}`}Ω)
            </text>

            {/* Terminals A & B */}
            <circle cx="210" cy="60" r="3" fill="#cbd5e1" />
            <text x="210" y="50" textAnchor="middle" fill="#cbd5e1" fontSize="10">A</text>
            <circle cx="210" cy="170" r="3" fill="#cbd5e1" />
            <text x="210" y="186" textAnchor="middle" fill="#cbd5e1" fontSize="10">B</text>

            {/* Current Arrow IL */}
            <line x1="225" y1="60" x2="245" y2="60" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-ch12-l01)" />
            <text x="235" y="50" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">I_L</text>

            {/* Load ZL */}
            <rect x="230" y="80" width="60" height="60" fill="#2e1065" stroke="#c084fc" strokeWidth="2" rx="3" />
            <text x="260" y="105" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="bold">Z_L</text>
            <text x="260" y="122" textAnchor="middle" fill="#e9d5ff" fontSize="9" fontFamily="monospace">
              {rl}{xl >= 0 ? `+j${xl}` : `-j${Math.abs(xl)}`}Ω
            </text>
          </g>
        </svg>
      </div>

      {/* Numerical Results Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        {/* Thevenin Equivalent */}
        <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-2">
          <div className="text-cyan-400 font-bold uppercase tracking-wider text-xs border-b border-cyan-900/50 pb-1">
            {t.theveninEquiv[lang]}
          </div>
          <div className="space-y-1 pt-1">
            <div className="text-slate-400">V_th (Polar):</div>
            <div className="text-cyan-300 font-bold text-sm">
              {vthMag.toFixed(2)} V ∠ {vthAngDeg.toFixed(1)}°
            </div>
            <div className="text-slate-400">V_th (Rectangular):</div>
            <div className="text-slate-200">
              ({vthReal.toFixed(2)} {vthImag >= 0 ? '+' : '-'} j{Math.abs(vthImag).toFixed(2)}) V
            </div>
            <div className="text-slate-400 pt-1">Z_th:</div>
            <div className="text-emerald-300 font-bold">
              {zthReal.toFixed(2)} {zthImag >= 0 ? '+' : '-'} j{Math.abs(zthImag).toFixed(2)} Ω
            </div>
            <div className="text-slate-400">|Z_th| ∠ θ:</div>
            <div className="text-emerald-200">
              {zthMag.toFixed(2)} Ω ∠ {zthAngDeg.toFixed(1)}°
            </div>
          </div>
        </div>

        {/* Norton Equivalent */}
        <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-2">
          <div className="text-amber-400 font-bold uppercase tracking-wider text-xs border-b border-amber-900/50 pb-1">
            {t.nortonEquiv[lang]}
          </div>
          <div className="space-y-1 pt-1">
            <div className="text-slate-400">I_N (Polar):</div>
            <div className="text-amber-300 font-bold text-sm">
              {inMag.toFixed(3)} A ∠ {inAngDeg.toFixed(1)}°
            </div>
            <div className="text-slate-400">I_N (Rectangular):</div>
            <div className="text-slate-200">
              ({inReal.toFixed(3)} {inImag >= 0 ? '+' : '-'} j{Math.abs(inImag).toFixed(3)}) A
            </div>
            <div className="text-slate-400 pt-1">Z_N (= Z_th):</div>
            <div className="text-amber-200">
              {zthReal.toFixed(2)} {zthImag >= 0 ? '+' : '-'} j{Math.abs(zthImag).toFixed(2)} Ω
            </div>
            <div className="text-slate-400">Norton Admittance Y_N:</div>
            <div className="text-slate-300">
              {(1 / zthMag).toFixed(4)} S ∠ {(-zthAngDeg).toFixed(1)}°
            </div>
          </div>
        </div>

        {/* Load Currents & Power */}
        <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/30 space-y-2">
          <div className="text-purple-400 font-bold uppercase tracking-wider text-xs border-b border-purple-900/50 pb-1">
            {t.loadResults[lang]}
          </div>
          <div className="space-y-1 pt-1">
            <div className="text-slate-400">Load Current I_L:</div>
            <div className="text-purple-300 font-bold text-sm">
              {ilMag.toFixed(3)} A ∠ {ilAngDeg.toFixed(1)}°
            </div>
            <div className="text-slate-400">Load Voltage V_L:</div>
            <div className="text-purple-200">
              {vlMag.toFixed(2)} V ∠ {vlAngDeg.toFixed(1)}°
            </div>
            <div className="text-slate-400 pt-1">{t.realP[lang]}:</div>
            <div className="text-emerald-400 font-bold">{pLoad.toFixed(2)} W</div>
            <div className="text-slate-400">{t.reactiveQ[lang]}:</div>
            <div className="text-amber-300">{qLoad.toFixed(2)} VAR ({qLoad >= 0 ? 'Inductive' : 'Capacitive'})</div>
            <div className="text-slate-400">{t.apparentS[lang]}:</div>
            <div className="text-cyan-300">{sLoadMag.toFixed(2)} VA</div>
          </div>
        </div>
      </div>
    </div>
  );
};
