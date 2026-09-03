import React, { useState, useMemo } from 'react';
import { Sliders, Zap, Compass, Layers, Info, RotateCcw } from 'lucide-react';
import { Language } from '../../types';

interface ElectromagneticFieldFundamentalsAnimationProps {
  currentLanguage: Language;
}

type FieldMode = 'electric' | 'magnetic';
type MediumType = 'vacuum' | 'dielectric' | 'ferrite';

export const ElectromagneticFieldFundamentalsAnimation: React.FC<ElectromagneticFieldFundamentalsAnimationProps> = ({
  currentLanguage
}) => {
  const [fieldMode, setFieldMode] = useState<FieldMode>('electric');
  const [medium, setMedium] = useState<MediumType>('dielectric');
  const [sourceMagnitude, setSourceMagnitude] = useState<number>(5); // Charge in nC or Current in A
  const [showFluxVectors, setShowFluxVectors] = useState<boolean>(true);
  const [showFieldVectors, setShowFieldVectors] = useState<boolean>(true);
  const [dipoleConfig, setDipoleConfig] = useState<'monopole' | 'dipole'>('dipole');

  // Constitutive medium parameters
  const mediumProperties = useMemo(() => {
    switch (medium) {
      case 'vacuum':
        return {
          name: 'Free Space (Vacuum / Air)',
          epsR: 1.0,
          muR: 1.0,
          desc: 'ε = ε₀ (8.854 × 10⁻¹² F/m), μ = μ₀ (4π × 10⁻⁷ H/m). No polarization P or magnetization M.'
        };
      case 'dielectric':
        return {
          name: 'High-K Dielectric Material',
          epsR: 5.0,
          muR: 1.0,
          desc: 'ε = 5ε₀. Atomic electric dipoles align (P > 0), opposing E-field and shielding free charge. D remains constant!'
        };
      case 'ferrite':
        return {
          name: 'Ferromagnetic / Ferrite Core',
          epsR: 1.0,
          muR: 250.0,
          desc: 'μ = 250μ₀. Microscopic electron spin magnetic domains align (M >> 0), drastically amplifying B-field for the same H!'
        };
      default:
        return { name: 'Vacuum', epsR: 1.0, muR: 1.0, desc: '' };
    }
  }, [medium]);

  // Derived field values at nominal r = 10 cm (scaled for UI clarity)
  const nominalRadius = 0.1; // 10 cm
  const eps0 = 8.854e-12;
  const mu0 = 4 * Math.PI * 1e-7;

  // For electric mode:
  // D = Q / (4*pi*r^2) [depends purely on free charge Q]
  // E = D / (eps0 * epsR) [reduced inside dielectric by bound polarization charges]
  const chargeQ = sourceMagnitude * 1e-9; // nC -> C
  const calcD = chargeQ / (4 * Math.PI * nominalRadius * nominalRadius); // C/m^2
  const calcE = calcD / (eps0 * mediumProperties.epsR); // V/m

  // For magnetic mode (long wire):
  // H = I / (2*pi*r) [depends purely on free conduction current I]
  // B = mu0 * muR * H [multiplied by core relative permeability]
  const currentI = sourceMagnitude; // A
  const calcH = currentI / (2 * Math.PI * nominalRadius); // A/m
  const calcB = mu0 * mediumProperties.muR * calcH; // Tesla

  const labels = {
    en: {
      title: 'Electromagnetic Field Fundamentals: E, D, B & H Explorer',
      subtitle: 'Analyze the physical difference between Force Field Intensity (E, H) and Flux Densities (D, B) across materials',
      modeElectric: 'Electric Fields: E & D',
      modeMagnetic: 'Magnetic Fields: B & H',
      mediumLabel: 'Constitutive Medium:',
      sourceElectric: 'Source Free Charge (Q):',
      sourceMagnetic: 'Source Conduction Current (I):',
      toggleField: 'Show Intensity Field Vectors (E / H)',
      toggleFlux: 'Show Flux Density Vectors (D / B)',
      configLabel: 'Charge / Field Geometry:',
      monopole: 'Point Source',
      dipole: 'Dipole Pair (+ / -)',
      reset: 'Reset Default Values',
      evsdTitle: 'Fundamental Distinction: E vs D',
      evsdDesc: 'Electric Flux Density D (Coulomb/m²) is governed solely by free charges (∇·D = ρ_v) and passes unaltered through materials. Electric Field E (Volt/m) measures the actual physical force on a test charge; inside a dielectric, bound molecular dipoles align to create polarization P, reducing E by a factor of ε_r.',
      bvshTitle: 'Fundamental Distinction: B vs H',
      bvshDesc: 'Magnetic Field Intensity H (Ampere/m) is governed purely by external conduction currents (∇×H = J_f). Magnetic Flux Density B (Tesla) represents the actual physical Lorentz force experienced by moving charges; inside ferromagnetic materials, magnetic domain alignment (M) amplifies B by thousands of times for the same driving H.'
    },
    hi: {
      title: 'विद्युत-चुंबकीय क्षेत्र मूल सिद्धांत: E, D, B एवं H अन्वेषक',
      subtitle: 'पदार्थों में बल क्षेत्र तीव्रता (E, H) एवं फ्लक्स घनत्व (D, B) के भौतिक अंतर का अध्ययन करें',
      modeElectric: 'विद्युत क्षेत्र: E एवं D',
      modeMagnetic: 'चुंबकीय क्षेत्र: B एवं H',
      mediumLabel: 'माध्यम गुण (परमिटिविटी / पारगम्यता):',
      sourceElectric: 'मुक्त आवेश परिमाण (Q):',
      sourceMagnetic: 'चालन धारा परिमाण (I):',
      toggleField: 'तीव्रता सदिश दिखाएं (E / H)',
      toggleFlux: 'फ्लक्स घनत्व सदिश दिखाएं (D / B)',
      configLabel: 'ज्यामिति प्रकार:',
      monopole: 'बिंदु स्रोत',
      dipole: 'द्विध्रुव युगल (+ / -)',
      reset: 'डिफ़ॉल्ट रीसेट करें',
      evsdTitle: 'मूल अंतर: E बनाम D',
      evsdDesc: 'विद्युत फ्लक्स घनत्व D केवल मुक्त आवेशों द्वारा निर्धारित होता है (∇·D = ρ)। विद्युत क्षेत्र E आवेश पर लगने वाले वास्तविक बल का मापन है, जो परावैद्युत ध्रुवीकरण P के कारण घट जाता है (E = D / ε)।',
      bvshTitle: 'मूल अंतर: B बनाम H',
      bvshDesc: 'चुंबकीय क्षेत्र तीव्रता H केवल बाह्य चालन धारा पर निर्भर करती है (∇×H = J)। चुंबकीय फ्लक्स घनत्व B वास्तविक लोरेंट्ज़ बल को व्यक्त करता है, जो लौहचुंबकीय माध्यम में प्रवर्धित हो जाता है (B = μH)।'
    },
    bn: {
      title: 'তড়িৎ-চৌম্বকীয় ক্ষেত্র মৌলিক তত্ত্ব: E, D, B এবং H এক্সপ্লোরার',
      subtitle: 'পদার্থের মধ্য দিয়ে বল ক্ষেত্র তীব্রতা (E, H) ও ফ্লাক্স ঘনত্ব (D, B)-এর ভৌত পার্থক্য পর্যবেক্ষণ করো',
      modeElectric: 'তড়িৎ ক্ষেত্র: E ও D',
      modeMagnetic: 'চৌম্বক ক্ষেত্র: B ও H',
      mediumLabel: 'পদার্থের মাধ্যম বৈশিষ্ট্য:',
      sourceElectric: 'মুক্ত আধানের মান (Q):',
      sourceMagnetic: 'পরিবহন তড়িৎপ্রবাহের মান (I):',
      toggleField: 'তীব্রতা ভেক্টর প্রদর্শন (E / H)',
      toggleFlux: 'ফ্লাক্স ঘনত্ব ভেক্টর প্রদর্শন (D / B)',
      configLabel: 'কনফিগারেশন:',
      monopole: 'একক বিন্দু উৎস',
      dipole: 'দ্বিমেরু জোড়া (+ / -)',
      reset: 'রিসেট করুন',
      evsdTitle: 'মৌলিক পার্থক্য: E বনাম D',
      evsdDesc: 'তড়িৎ ফ্লাক্স ঘনত্ব D (C/m²) শুধুমাত্র মুক্ত আধান দ্বারা নির্ধারিত হয় (∇·D = ρ)। অপরদিকে তড়িৎ ক্ষেত্র E (V/m) একটি পরীক্ষামূলক আধানের ওপর কার্যকর প্রকৃত বল; ডাই-ইলেকট্রিক পোলারাইজেশনের কারণে মাধ্যমে E হ্রাস পায়।',
      bvshTitle: 'মৌলিক পার্থক্য: B বনাম H',
      bvshDesc: 'চৌম্বক ক্ষেত্র তীব্রতা H (A/m) শুধুমাত্র বাহ্যিক পরিবাহী কারেন্টের উপর নির্ভর করে (∇×H = J)। চৌম্বক ফ্লাক্স ঘনত্ব B (Tesla) প্রকৃত লোরেন্টজ বল প্রকাশ করে, যা ফেরোম্যাগনেটিক মাধ্যমে ডোমেইন বিন্যাসের ফলে বহুগুণ বৃদ্ধি পায়।'
    }
  }[currentLanguage] || {
    title: 'Electromagnetic Field Fundamentals: E, D, B & H Explorer',
    subtitle: 'Analyze the physical difference between Force Field Intensity (E, H) and Flux Densities (D, B) across materials',
    modeElectric: 'Electric Fields: E & D',
    modeMagnetic: 'Magnetic Fields: B & H',
    mediumLabel: 'Constitutive Medium:',
    sourceElectric: 'Source Free Charge (Q):',
    sourceMagnetic: 'Source Conduction Current (I):',
    toggleField: 'Show Intensity Field Vectors (E / H)',
    toggleFlux: 'Show Flux Density Vectors (D / B)',
    configLabel: 'Charge / Field Geometry:',
    monopole: 'Point Source',
    dipole: 'Dipole Pair (+ / -)',
    reset: 'Reset Default Values',
    evsdTitle: 'Fundamental Distinction: E vs D',
    evsdDesc: 'Electric Flux Density D is governed solely by free charges. Electric Field E measures actual force and is reduced by dielectric polarization.',
    bvshTitle: 'Fundamental Distinction: B vs H',
    bvshDesc: 'Magnetic Field Intensity H is governed by conduction currents. Magnetic Flux Density B represents the actual Lorentz force density.'
  };

  const handleReset = () => {
    setFieldMode('electric');
    setMedium('dielectric');
    setSourceMagnitude(5);
    setShowFieldVectors(true);
    setShowFluxVectors(true);
    setDipoleConfig('dipole');
  };

  return (
    <div 
      className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 text-white shadow-xl max-w-4xl mx-auto"
      id="simulation-em-field-fundamentals"
      role="region"
      aria-label="Electromagnetic Field Fundamentals Simulation"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-700/50 text-cyan-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">{labels.title}</h3>
            <p className="text-xs text-slate-400">{labels.subtitle}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="self-start sm:self-auto px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label={labels.reset}
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
          <span>{labels.reset}</span>
        </button>
      </div>

      {/* Field Mode Selector Tabs */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          type="button"
          onClick={() => setFieldMode('electric')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
            fieldMode === 'electric'
              ? 'bg-cyan-950/70 border-cyan-500 text-cyan-200 shadow-md shadow-cyan-950/40'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
          aria-pressed={fieldMode === 'electric'}
        >
          <Zap className="w-4 h-4 text-cyan-400" />
          <span>{labels.modeElectric}</span>
        </button>
        <button
          type="button"
          onClick={() => setFieldMode('magnetic')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
            fieldMode === 'magnetic'
              ? 'bg-amber-950/70 border-amber-500 text-amber-200 shadow-md shadow-amber-950/40'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
          aria-pressed={fieldMode === 'magnetic'}
        >
          <Compass className="w-4 h-4 text-amber-400" />
          <span>{labels.modeMagnetic}</span>
        </button>
      </div>

      {/* Main Interactive Stage & Readout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* SVG Vector Field Canvas */}
        <div className="lg:col-span-2 bg-slate-950 rounded-xl border border-slate-800 p-3 flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]">
          <svg
            viewBox="0 0 460 300"
            className="w-full h-auto max-h-[320px]"
            role="img"
            aria-label="Electromagnetic vector field visualization"
          >
            <defs>
              {/* Arrowheads */}
              <marker id="arrow-e" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#38bdf8" />
              </marker>
              <marker id="arrow-d" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#06b6d4" />
              </marker>
              <marker id="arrow-h" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
              </marker>
              <marker id="arrow-b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#ec4899" />
              </marker>
              <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
              </pattern>
            </defs>

            {/* Grid background */}
            <rect width="460" height="300" fill="url(#grid-pattern)" />

            {/* Dielectric / Ferrite medium boundary visualization if active */}
            {medium !== 'vacuum' && (
              <g opacity="0.18">
                <rect
                  x="80"
                  y="40"
                  width="300"
                  height="220"
                  rx="12"
                  fill={medium === 'dielectric' ? '#0284c7' : '#d97706'}
                  stroke={medium === 'dielectric' ? '#38bdf8' : '#f59e0b'}
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <text
                  x="90"
                  y="60"
                  fill={medium === 'dielectric' ? '#38bdf8' : '#f59e0b'}
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {mediumProperties.name} (ε_r={mediumProperties.epsR}, μ_r={mediumProperties.muR})
                </text>
              </g>
            )}

            {fieldMode === 'electric' ? (
              // Electric field vectors and charges
              <g>
                {dipoleConfig === 'monopole' ? (
                  // Monopole radial lines
                  <g>
                    {/* Source Point Charge +Q */}
                    <circle cx="230" cy="150" r="16" fill="#ef4444" stroke="#fca5a5" strokeWidth="2" />
                    <text x="230" y="154" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">
                      +Q
                    </text>

                    {/* Radial vector rays */}
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => {
                      const rad = (angle * Math.PI) / 180;
                      const rInner = 28;
                      const rMid = 70;
                      const rOuter = 115;
                      const x1 = 230 + rInner * Math.cos(rad);
                      const y1 = 150 + rInner * Math.sin(rad);
                      const xMid = 230 + rMid * Math.cos(rad);
                      const yMid = 150 + rMid * Math.sin(rad);
                      const x2 = 230 + rOuter * Math.cos(rad);
                      const y2 = 150 + rOuter * Math.sin(rad);

                      return (
                        <g key={idx}>
                          {showFluxVectors && (
                            // D vector (solid cyan)
                            <line
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke="#06b6d4"
                              strokeWidth="2"
                              markerEnd="url(#arrow-d)"
                              strokeDasharray="none"
                            />
                          )}
                          {showFieldVectors && (
                            // E vector (dashed sky blue, shortened by dielectric)
                            <line
                              x1={x1 + 3}
                              y1={y1 + 3}
                              x2={xMid}
                              y2={yMid}
                              stroke="#38bdf8"
                              strokeWidth="2.5"
                              markerEnd="url(#arrow-e)"
                              strokeDasharray={medium === 'dielectric' ? '3 2' : 'none'}
                            />
                          )}
                        </g>
                      );
                    })}
                  </g>
                ) : (
                  // Dipole field lines
                  <g>
                    {/* +Q Source */}
                    <circle cx="160" cy="150" r="16" fill="#ef4444" stroke="#fca5a5" strokeWidth="2" />
                    <text x="160" y="154" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">+Q</text>
                    {/* -Q Sink */}
                    <circle cx="300" cy="150" r="16" fill="#3b82f6" stroke="#93c5fd" strokeWidth="2" />
                    <text x="300" y="154" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">-Q</text>

                    {/* Central connecting field line */}
                    {showFluxVectors && (
                      <line x1="178" y1="150" x2="280" y2="150" stroke="#06b6d4" strokeWidth="2" markerEnd="url(#arrow-d)" />
                    )}

                    {/* Curved dipole arches */}
                    {[-70, -40, 40, 70].map((curvature, idx) => {
                      const dPath = `M 172 ${150 + (curvature > 0 ? 8 : -8)} Q 230 ${150 + curvature * 1.5} 288 ${150 + (curvature > 0 ? 8 : -8)}`;
                      return (
                        <g key={idx}>
                          {showFluxVectors && (
                            <path d={dPath} fill="none" stroke="#06b6d4" strokeWidth="1.8" />
                          )}
                          {showFieldVectors && (
                            <path
                              d={dPath}
                              fill="none"
                              stroke="#38bdf8"
                              strokeWidth="2"
                              strokeDasharray={medium === 'dielectric' ? '4 3' : 'none'}
                            />
                          )}
                        </g>
                      );
                    })}
                  </g>
                )}
              </g>
            ) : (
              // Magnetic field vectors: Straight conductor with circulating B & H rings
              <g>
                {/* Conductor cross-section (Current I coming OUT of page or into) */}
                <circle cx="230" cy="150" r="22" fill="#334155" stroke="#f59e0b" strokeWidth="3" />
                <circle cx="230" cy="150" r="6" fill="#f59e0b" />
                <text x="230" y="185" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">
                  Current I = {sourceMagnitude} A (⊙ Out of page)
                </text>

                {/* Circulating concentric loops */}
                {[50, 85, 120].map((radius, idx) => (
                  <g key={idx}>
                    {/* Ring path */}
                    <circle
                      cx="230"
                      cy="150"
                      r={radius}
                      fill="none"
                      stroke={medium === 'ferrite' ? '#ec4899' : '#f59e0b'}
                      strokeWidth={showFluxVectors && medium === 'ferrite' ? '3' : '1.5'}
                      strokeDasharray={idx === 1 ? '4 2' : 'none'}
                      opacity="0.8"
                    />
                    {/* Direction arrows on top and bottom of circle */}
                    {showFluxVectors && (
                      <path
                        d={`M ${230} ${150 - radius} L ${224} ${150 - radius - 4} M ${230} ${150 - radius} L ${224} ${150 - radius + 4}`}
                        stroke="#f59e0b"
                        strokeWidth="2"
                      />
                    )}
                  </g>
                ))}
              </g>
            )}

            {/* In-canvas Vector Legend */}
            <g transform="translate(15, 255)">
              <rect width="210" height="36" rx="6" fill="#0f172a" fillOpacity="0.9" stroke="#334155" strokeWidth="1" />
              {fieldMode === 'electric' ? (
                <>
                  <line x1="12" y1="18" x2="35" y2="18" stroke="#38bdf8" strokeWidth="2.5" />
                  <text x="42" y="22" fill="#38bdf8" fontSize="10" fontFamily="monospace">E = D / ε (V/m)</text>
                  <line x1="115" y1="18" x2="138" y2="18" stroke="#06b6d4" strokeWidth="2" strokeDasharray="3 2" />
                  <text x="145" y="22" fill="#06b6d4" fontSize="10" fontFamily="monospace">D = ε₀ε_r E</text>
                </>
              ) : (
                <>
                  <line x1="12" y1="18" x2="35" y2="18" stroke="#f59e0b" strokeWidth="2" />
                  <text x="42" y="22" fill="#f59e0b" fontSize="10" fontFamily="monospace">H = I/2πr (A/m)</text>
                  <line x1="120" y1="18" x2="143" y2="18" stroke="#ec4899" strokeWidth="3" />
                  <text x="150" y="22" fill="#ec4899" fontSize="10" fontFamily="monospace">B = μ₀μ_r H</text>
                </>
              )}
            </g>
          </svg>
        </div>

        {/* Real-Time Parameter Telemetry Panel */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-3.5 flex flex-col justify-between space-y-3">
          <div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Calculated Quantities (r = 10 cm)</span>
            </div>

            {fieldMode === 'electric' ? (
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Electric Flux Density (D):</span>
                    <span className="font-bold text-cyan-300 font-mono">{(calcD * 1e9).toFixed(2)} nC/m²</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Invariable with medium; governed solely by free charge Q.</p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Electric Field Intensity (E):</span>
                    <span className="font-bold text-sky-400 font-mono">{(calcE / 1000).toFixed(2)} kV/m</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Reduced by factor ε_r = {mediumProperties.epsR} due to bound polarization charges.
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-[11px] font-mono text-cyan-200">
                  Constitutive Law: D = ε₀ε_r·E = ε₀·E + P
                </div>
              </div>
            ) : (
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Magnetic Field Intensity (H):</span>
                    <span className="font-bold text-amber-300 font-mono">{calcH.toFixed(2)} A/m</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">Determined solely by conduction current I; independent of core material.</p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono">Magnetic Flux Density (B):</span>
                    <span className="font-bold text-pink-400 font-mono">{(calcB * 1e3).toFixed(2)} mT</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1">
                    Amplified by relative permeability μ_r = {mediumProperties.muR} (domain alignment).
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-800/40 text-[11px] font-mono text-amber-200">
                  Constitutive Law: B = μ₀μ_r·H = μ₀·(H + M)
                </div>
              </div>
            )}
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>{mediumProperties.desc}</span>
          </div>
        </div>
      </div>

      {/* Interactive Controls & Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
        {/* Medium Selection */}
        <div>
          <label htmlFor="medium-select" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>{labels.mediumLabel}</span>
          </label>
          <select
            id="medium-select"
            value={medium}
            onChange={(e) => setMedium(e.target.value as MediumType)}
            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="vacuum">Vacuum / Air (ε_r=1, μ_r=1)</option>
            <option value="dielectric">Dielectric Medium (ε_r=5, μ_r=1)</option>
            <option value="ferrite">Ferromagnetic Core (ε_r=1, μ_r=250)</option>
          </select>
        </div>

        {/* Source Magnitude Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">
              {fieldMode === 'electric' ? labels.sourceElectric : labels.sourceMagnetic}
            </span>
            <span className="font-mono font-bold text-cyan-300">
              {sourceMagnitude} {fieldMode === 'electric' ? 'nC' : 'A'}
            </span>
          </div>
          <input
            type="range"
            id="source-slider"
            min="1"
            max="20"
            step="1"
            value={sourceMagnitude}
            onChange={(e) => setSourceMagnitude(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label={fieldMode === 'electric' ? labels.sourceElectric : labels.sourceMagnetic}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>1 {fieldMode === 'electric' ? 'nC' : 'A'}</span>
            <span>10</span>
            <span>20 {fieldMode === 'electric' ? 'nC' : 'A'}</span>
          </div>
        </div>

        {/* Geometry & Visibility Toggles */}
        <div className="flex flex-col justify-between">
          <div className="text-xs font-semibold text-slate-300 mb-1">
            {labels.configLabel}
          </div>
          <div className="flex flex-wrap gap-2">
            {fieldMode === 'electric' ? (
              <>
                <button
                  type="button"
                  onClick={() => setDipoleConfig('monopole')}
                  className={`px-2.5 py-1 rounded text-xs border ${
                    dipoleConfig === 'monopole'
                      ? 'bg-cyan-950 border-cyan-500 text-cyan-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {labels.monopole}
                </button>
                <button
                  type="button"
                  onClick={() => setDipoleConfig('dipole')}
                  className={`px-2.5 py-1 rounded text-xs border ${
                    dipoleConfig === 'dipole'
                      ? 'bg-cyan-950 border-cyan-500 text-cyan-300'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {labels.dipole}
                </button>
              </>
            ) : (
              <span className="text-xs text-slate-400 font-mono">Ampere Loop Around Conductor</span>
            )}
          </div>
          <div className="flex items-center gap-3 mt-2">
            <label className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={showFieldVectors}
                onChange={(e) => setShowFieldVectors(e.target.checked)}
                className="accent-cyan-500 rounded"
              />
              <span>{fieldMode === 'electric' ? 'E-Vector' : 'H-Vector'}</span>
            </label>
            <label className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={showFluxVectors}
                onChange={(e) => setShowFluxVectors(e.target.checked)}
                className="accent-pink-500 rounded"
              />
              <span>{fieldMode === 'electric' ? 'D-Flux' : 'B-Flux'}</span>
            </label>
          </div>
        </div>
      </div>

      {/* Conceptual Summary Banner */}
      <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs leading-relaxed text-slate-300">
        <h4 className="font-bold text-cyan-300 mb-1 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-cyan-400" />
          <span>{fieldMode === 'electric' ? labels.evsdTitle : labels.bvshTitle}</span>
        </h4>
        <p>{fieldMode === 'electric' ? labels.evsdDesc : labels.bvshDesc}</p>
      </div>
    </div>
  );
};
