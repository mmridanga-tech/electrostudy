import React, { useState, useMemo } from 'react';
import { Sliders, Shield, RotateCcw, Info, Eye, Disc } from 'lucide-react';
import { Language } from '../../types';

interface GaussLawFieldFluxAnimationProps {
  currentLanguage: Language;
}

type SymmetryType = 'spherical' | 'cylindrical' | 'magnetic';

export const GaussLawFieldFluxAnimation: React.FC<GaussLawFieldFluxAnimationProps> = ({
  currentLanguage
}) => {
  const [symmetry, setSymmetry] = useState<SymmetryType>('spherical');
  const [enclosedChargeQ, setEnclosedChargeQ] = useState<number>(4); // in nC
  const [surfaceRadius, setSurfaceRadius] = useState<number>(65); // pixels
  const [showFluxVectors, setShowFluxVectors] = useState<boolean>(true);
  const [showSurfaceNormals, setShowSurfaceNormals] = useState<boolean>(true);

  // Constants
  const eps0 = 8.854e-12; // F/m

  // Numerical Calculations
  const calcData = useMemo(() => {
    if (symmetry === 'magnetic') {
      return {
        qEnc: 0,
        fluxOut: 12.5,
        fluxIn: 12.5,
        netFlux: 0.0,
        unit: 'Wb (Weber)',
        lawName: '∮ B · dA = 0',
        note: 'Continuous closed solenoidal flux lines; every line exiting enters back. Net magnetic flux is strictly 0.'
      };
    }

    const q = enclosedChargeQ * 1e-9; // Coulombs
    // Net electric flux through any closed surface enclosing Q is Q / eps0
    const netElectricFlux = q / eps0; // N·m^2/C or V·m

    return {
      qEnc: enclosedChargeQ,
      fluxOut: enclosedChargeQ > 0 ? netElectricFlux : 0,
      fluxIn: enclosedChargeQ < 0 ? Math.abs(netElectricFlux) : 0,
      netFlux: netElectricFlux,
      unit: 'V·m (N·m²/C)',
      lawName: '∯ E · dA = Q_enc / ε₀',
      note: 'Total flux penetrating closed Gaussian surface depends ONLY on net enclosed charge, independent of surface radius or shape!'
    };
  }, [symmetry, enclosedChargeQ]);

  const labels = {
    en: {
      title: "Gauss's Law for Electrostatics & Magnetostatics",
      subtitle: "Visualize electric flux divergence ∯ E · dA = Q_enc / ε₀ versus non-divergence of magnetic flux ∯ B · dA = 0",
      sphericalTab: '1. Spherical Symmetry',
      cylindricalTab: '2. Cylindrical Symmetry',
      magneticTab: '3. Magnetic Non-Divergence (No Monopoles)',
      chargeSlider: 'Enclosed Free Charge (Q_enc):',
      radiusSlider: 'Gaussian Surface Radius (r):',
      reset: 'Reset Default',
      fluxOut: 'Outward Flux (Φ_out):',
      fluxIn: 'Inward Flux (Φ_in):',
      netFlux: 'Net Enclosed Flux (Φ_net):',
      magneticNoticeTitle: 'Zero Magnetic Monopoles (∇ · B = 0)',
      magneticNoticeDesc: 'In classical Maxwell electrodynamics, isolated magnetic charges (monopoles) do not exist. Magnetic field lines always form closed continuous loops without beginning or end. Thus, the total magnetic flux passing through ANY closed surface is identically zero (∯ B · dA = 0).',
      gaussElecTitle: "Gauss's Law of Electrostatics",
      gaussElecDesc: "The total electric flux penetrating an arbitrary closed Gaussian surface is directly proportional to the total net charge enclosed inside it: Φ_E = ∯ E · dA = Q_enc / ε₀. If Q_enc is doubled, total flux doubles, regardless of the radius or geometry of the surface."
    },
    hi: {
      title: 'गाउस का नियम: स्थिरवैद्युतिकी एवं चुंबकत्व',
      subtitle: 'विद्युत फ्लक्स अपसरण ∯ E · dA = Q_enc / ε₀ तथा चुंबकीय फ्लक्स गैर-अपसरण ∯ B · dA = 0 का दृश्य विश्लेषण',
      sphericalTab: '1. गोलीय सममिति',
      cylindricalTab: '2. बेलनाकार सममिति',
      magneticTab: '3. चुंबकीय अ-अपसरण (एकल ध्रुव अनुपस्थिति)',
      chargeSlider: 'परिबद्ध आवेश (Q_enc):',
      radiusSlider: 'गाउसीय पृष्ठ त्रिज्या (r):',
      reset: 'रीसेट करें',
      fluxOut: 'बहिर्मुखी फ्लक्स (Φ_out):',
      fluxIn: 'अंतर्मुखी फ्लक्स (Φ_in):',
      netFlux: 'कुल परिणामी फ्लक्स (Φ_net):',
      magneticNoticeTitle: 'चुंबकीय एकल ध्रुवों का अभाव (∇ · B = 0)',
      magneticNoticeDesc: 'शास्त्रीय विद्युत-चुंबकत्व में स्वतंत्र चुंबकीय एकल ध्रुव अस्तित्वहीन हैं। चुंबकीय क्षेत्र रेखाएं सतत बंद लूप बनाती हैं। अतः किसी भी बंद पृष्ठ से गुजरने वाला कुल चुंबकीय फ्लक्स सदैव शून्य होता है (∯ B · dA = 0)।',
      gaussElecTitle: 'स्थिरवैद्युतिकी का गाउस नियम',
      gaussElecDesc: 'किसी भी बंद गाउसीय पृष्ठ से निकलने वाला कुल विद्युत फ्लक्स उसके भीतर परिबद्ध कुल नेट आवेश के समानुपाती होता है: Φ_E = Q_enc / ε₀।'
    },
    bn: {
      title: 'স্থির-তড়িৎ ও চুম্বকত্বের গাউসের সূত্র সিমুলেটর',
      subtitle: 'তড়িৎ ফ্লাক্স ডাইভারজেন্স ∯ E · dA = Q_enc / ε₀ বনাম চৌম্বক ফ্লাক্সের শূন্য ডাইভারজেন্স ∯ B · dA = 0 পর্যবেক্ষণ করো',
      sphericalTab: '১. গোলীয় প্রতিসাম্য',
      cylindricalTab: '২. চোঙাকৃতি প্রতিসাম্য',
      magneticTab: '৩. চৌম্বক শূন্য ডাইভারজেন্স (মনোপোলহীন)',
      chargeSlider: 'আবদ্ধ আধানের মান (Q_enc):',
      radiusSlider: 'গাউসীয় তলের ব্যাসার্ধ (r):',
      reset: 'রিসেট',
      fluxOut: 'বহির্মুখী ফ্লাক্স (Φ_out):',
      fluxIn: 'অন্তর্মুখী ফ্লাক্স (Φ_in):',
      netFlux: 'নেট ফ্লাক্স (Φ_net):',
      magneticNoticeTitle: 'চৌম্বক একক মেরুর অনুপস্থিতি (∇ · B = 0)',
      magneticNoticeDesc: 'চিরায়ত তড়িচ্চুম্বকীয় তত্ত্বে বিচ্ছিন্ন একক চৌম্বক মেরুর (Magnetic Monopole) কোনো অস্তিত্ব নেই। চৌম্বক বলরেখা সর্বদা অবিচ্ছিন্ন বদ্ধ লুপ তৈরি করে। ফলে যেকোনো বদ্ধ তলের মধ্য দিয়ে মোট অতিক্রান্ত চৌম্বক ফ্লাক্স সর্বদা শূন্য (∯ B · dA = 0)।',
      gaussElecTitle: 'তড়িৎবিজ্ঞানে গাউসের সূত্র',
      gaussElecDesc: 'যেকোনো বদ্ধ গাউসীয় তলের মধ্য দিয়ে নির্গত মোট তড়িৎ ফ্লাক্সের মান তলটির ভেতরে আবদ্ধ মোট আধানের সমানুপাতিক: Φ_E = Q_enc / ε₀।'
    }
  }[currentLanguage] || {
    title: "Gauss's Law for Electrostatics & Magnetostatics",
    subtitle: "Visualize electric flux divergence versus non-divergence of magnetic flux",
    sphericalTab: '1. Spherical Symmetry',
    cylindricalTab: '2. Cylindrical Symmetry',
    magneticTab: '3. Magnetic Non-Divergence',
    chargeSlider: 'Enclosed Free Charge (Q_enc):',
    radiusSlider: 'Gaussian Surface Radius (r):',
    reset: 'Reset Default',
    fluxOut: 'Outward Flux (Φ_out):',
    fluxIn: 'Inward Flux (Φ_in):',
    netFlux: 'Net Enclosed Flux (Φ_net):',
    magneticNoticeTitle: 'Zero Magnetic Monopoles (∇ · B = 0)',
    magneticNoticeDesc: 'Isolated magnetic monopoles do not exist. Magnetic field lines always form closed loops.',
    gaussElecTitle: "Gauss's Law of Electrostatics",
    gaussElecDesc: 'The total electric flux penetrating an arbitrary closed Gaussian surface is Q_enc / ε₀.'
  };

  const handleReset = () => {
    setSymmetry('spherical');
    setEnclosedChargeQ(4);
    setSurfaceRadius(65);
    setShowFluxVectors(true);
    setShowSurfaceNormals(true);
  };

  return (
    <div
      className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 text-white shadow-xl max-w-4xl mx-auto"
      id="simulation-gauss-law"
      role="region"
      aria-label="Gauss's Law Field and Flux Simulation"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-700/50 text-emerald-400">
            <Disc className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">{labels.title}</h3>
            <p className="text-xs text-slate-400">{labels.subtitle}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="self-start sm:self-auto px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-label={labels.reset}
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
          <span>{labels.reset}</span>
        </button>
      </div>

      {/* Symmetry / Law Selection Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
        <button
          type="button"
          onClick={() => setSymmetry('spherical')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
            symmetry === 'spherical'
              ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <span>{labels.sphericalTab}</span>
        </button>
        <button
          type="button"
          onClick={() => setSymmetry('cylindrical')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
            symmetry === 'cylindrical'
              ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <span>{labels.cylindricalTab}</span>
        </button>
        <button
          type="button"
          onClick={() => setSymmetry('magnetic')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
            symmetry === 'magnetic'
              ? 'bg-purple-950/80 border-purple-500 text-purple-200'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <span>{labels.magneticTab}</span>
        </button>
      </div>

      {/* Main Visualizer Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* SVG Gaussian Canvas */}
        <div className="lg:col-span-2 bg-slate-950 rounded-xl border border-slate-800 p-3 flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]">
          <svg
            viewBox="0 0 460 300"
            className="w-full h-auto max-h-[320px]"
            role="img"
            aria-label="Gauss law electric and magnetic flux diagram"
          >
            <defs>
              <marker id="gauss-arrow-out" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#38bdf8" />
              </marker>
              <marker id="gauss-arrow-normal" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#10b981" />
              </marker>
              <marker id="gauss-arrow-mag" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#c084fc" />
              </marker>
            </defs>

            {/* Grid */}
            <rect width="460" height="300" fill="#030712" />

            {symmetry === 'spherical' && (
              <g>
                {/* Gaussian Closed Spherical Surface (dashed circle) */}
                <circle
                  cx="230"
                  cy="150"
                  r={surfaceRadius}
                  fill="#0284c7"
                  fillOpacity="0.08"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="5 3"
                />
                <text
                  x={230 + surfaceRadius + 8}
                  y="145"
                  fill="#38bdf8"
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  Gaussian Surface (r = {surfaceRadius} mm)
                </text>

                {/* Central Point Charge */}
                <circle
                  cx="230"
                  cy="150"
                  r="18"
                  fill={enclosedChargeQ >= 0 ? '#ef4444' : '#3b82f6'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="230" y="155" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
                  {enclosedChargeQ > 0 ? `+${enclosedChargeQ}nC` : `${enclosedChargeQ}nC`}
                </text>

                {/* Radial Electric Flux Lines penetrating the surface */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, idx) => {
                  const rad = (deg * Math.PI) / 180;
                  const inner = 22;
                  const outer = surfaceRadius + 35;
                  const isPositive = enclosedChargeQ >= 0;

                  const xStart = 230 + (isPositive ? inner : outer) * Math.cos(rad);
                  const yStart = 150 + (isPositive ? inner : outer) * Math.sin(rad);
                  const xEnd = 230 + (isPositive ? outer : inner) * Math.cos(rad);
                  const yEnd = 150 + (isPositive ? outer : inner) * Math.sin(rad);

                  // Intersection point with surface
                  const xSurf = 230 + surfaceRadius * Math.cos(rad);
                  const ySurf = 150 + surfaceRadius * Math.sin(rad);

                  return (
                    <g key={idx}>
                      {showFluxVectors && (
                        <line
                          x1={xStart}
                          y1={yStart}
                          x2={xEnd}
                          y2={yEnd}
                          stroke="#38bdf8"
                          strokeWidth="1.8"
                          markerEnd="url(#gauss-arrow-out)"
                        />
                      )}
                      {showSurfaceNormals && (
                        // Local area normal dA vector pointing outwards
                        <line
                          x1={xSurf}
                          y1={ySurf}
                          x2={xSurf + 18 * Math.cos(rad)}
                          y2={ySurf + 18 * Math.sin(rad)}
                          stroke="#10b981"
                          strokeWidth="2"
                          markerEnd="url(#gauss-arrow-normal)"
                        />
                      )}
                    </g>
                  );
                })}
              </g>
            )}

            {symmetry === 'cylindrical' && (
              <g>
                {/* Central line charge */}
                <line x1="230" y1="30" x2="230" y2="270" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
                <text x="240" y="50" fill="#f59e0b" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  Uniform Line Charge ρ_L = +{enclosedChargeQ} nC/m
                </text>

                {/* Cylindrical Gaussian Can */}
                <ellipse
                  cx="230"
                  cy="70"
                  rx={surfaceRadius}
                  ry="20"
                  fill="#0284c7"
                  fillOpacity="0.08"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <ellipse
                  cx="230"
                  cy="230"
                  rx={surfaceRadius}
                  ry="20"
                  fill="#0284c7"
                  fillOpacity="0.08"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <line
                  x1={230 - surfaceRadius}
                  y1="70"
                  x2={230 - surfaceRadius}
                  y2="230"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <line
                  x1={230 + surfaceRadius}
                  y1="70"
                  x2={230 + surfaceRadius}
                  y2="230"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />

                {/* Radial E-vectors emerging sideways (flat endcaps have E ⟂ dA => flux = 0!) */}
                {[110, 150, 190].map((yLevel, i) => (
                  <g key={i}>
                    {/* Left ray */}
                    <line
                      x1="220"
                      y1={yLevel}
                      x2={230 - surfaceRadius - 30}
                      y2={yLevel}
                      stroke="#38bdf8"
                      strokeWidth="2"
                      markerEnd="url(#gauss-arrow-out)"
                    />
                    {/* Right ray */}
                    <line
                      x1="240"
                      y1={yLevel}
                      x2={230 + surfaceRadius + 30}
                      y2={yLevel}
                      stroke="#38bdf8"
                      strokeWidth="2"
                      markerEnd="url(#gauss-arrow-out)"
                    />
                  </g>
                ))}
                <text x="230" y="275" fill="#94a3b8" fontSize="10" textAnchor="middle">
                  Endcap Flux = 0 (E ⟂ dA); Curved Side Flux = E·(2πrL) = Q_enc / ε₀
                </text>
              </g>
            )}

            {symmetry === 'magnetic' && (
              <g>
                {/* Closed Gaussian Surface */}
                <ellipse
                  cx="230"
                  cy="150"
                  rx="110"
                  ry="95"
                  fill="#7c3aed"
                  fillOpacity="0.07"
                  stroke="#c084fc"
                  strokeWidth="2"
                  strokeDasharray="5 3"
                />
                <text x="230" y="45" fill="#c084fc" fontSize="11" fontWeight="bold" textAnchor="middle">
                  Closed Gaussian Surface: Net Magnetic Flux ∮ B · dA ≡ 0
                </text>

                {/* Magnetic Dipole (Bar Magnet) completely inside */}
                <rect x="180" y="132" width="50" height="36" fill="#ef4444" rx="3" />
                <text x="205" y="155" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">N</text>
                <rect x="230" y="132" width="50" height="36" fill="#3b82f6" rx="3" />
                <text x="255" y="155" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">S</text>

                {/* Closed Magnetic Loops: exiting North (+ flux) and entering South (- flux) */}
                {[-55, -30, 30, 55].map((arch, idx) => (
                  <g key={idx}>
                    <path
                      d={`M 195 132 C 150 ${132 + arch * 2.2}, 150 ${168 + arch * 2.2}, 265 168`}
                      fill="none"
                      stroke="#c084fc"
                      strokeWidth="2"
                    />
                    <path
                      d={`M 155 ${150 + arch} L 158 ${150 + arch - 4} M 155 ${150 + arch} L 158 ${150 + arch + 4}`}
                      stroke="#c084fc"
                      strokeWidth="2"
                    />
                  </g>
                ))}

                {/* Annotations */}
                <text x="120" y="115" fill="#ef4444" fontSize="10" fontWeight="bold">
                  +Φ (Exiting N)
                </text>
                <text x="320" y="115" fill="#3b82f6" fontSize="10" fontWeight="bold">
                  -Φ (Entering S)
                </text>
              </g>
            )}

            {/* Bottom Status Legend */}
            <g transform="translate(15, 260)">
              <rect width="210" height="30" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <line x1="12" y1="15" x2="30" y2="15" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#gauss-arrow-out)" />
              <text x="38" y="19" fill="#38bdf8" fontSize="10" fontFamily="monospace">E-Field Flux</text>
              <line x1="115" y1="15" x2="133" y2="15" stroke="#10b981" strokeWidth="2" markerEnd="url(#gauss-arrow-normal)" />
              <text x="140" y="19" fill="#10b981" fontSize="10" fontFamily="monospace">dA (Normal)</text>
            </g>
          </svg>
        </div>

        {/* Real-time Flux Telemetry & Equation Box */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-3.5 flex flex-col justify-between space-y-3">
          <div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Integral Law Evaluation</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-cyan-300">{calcData.lawName}</div>
              <div className="text-[11px] text-slate-400 font-mono">
                Enclosed Source: <span className="text-white font-bold">{calcData.qEnc} nC</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                Surface Radius r: <span className="text-white font-bold">{surfaceRadius} mm</span>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">{labels.netFlux}</span>
                <span className="font-mono font-bold text-emerald-400">
                  {symmetry === 'magnetic' ? '0.00' : (calcData.netFlux).toExponential(3)} {calcData.unit}
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">Field Strength |E(r)|:</span>
                <span className="font-mono font-bold text-cyan-400">
                  {symmetry === 'magnetic' ? 'N/A' : (
                    symmetry === 'spherical'
                      ? `${((calcData.qEnc * 1e-9) / (4 * Math.PI * eps0 * Math.pow(surfaceRadius * 1e-3, 2))).toFixed(1)} V/m`
                      : `${((calcData.qEnc * 1e-9) / (2 * Math.PI * eps0 * (surfaceRadius * 1e-3))).toFixed(1)} V/m`
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 flex items-start gap-2">
            <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>{calcData.note}</span>
          </div>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
        {/* Enclosed Charge Slider (Disabled in Magnetic Mode) */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.chargeSlider}</span>
            <span className="font-mono font-bold text-cyan-300">
              {symmetry === 'magnetic' ? '0 (No isolated magnetic monopoles)' : `${enclosedChargeQ} nC`}
            </span>
          </div>
          <input
            type="range"
            min="-10"
            max="10"
            step="1"
            disabled={symmetry === 'magnetic'}
            value={enclosedChargeQ}
            onChange={(e) => setEnclosedChargeQ(Number(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg disabled:opacity-40"
            aria-label={labels.chargeSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>-10 nC</span>
            <span>0 nC (Neutral)</span>
            <span>+10 nC</span>
          </div>
        </div>

        {/* Surface Radius Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.radiusSlider}</span>
            <span className="font-mono font-bold text-emerald-300">{surfaceRadius} mm</span>
          </div>
          <input
            type="range"
            min="40"
            max="95"
            step="5"
            value={surfaceRadius}
            onChange={(e) => setSurfaceRadius(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label={labels.radiusSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>40 mm (Tight)</span>
            <span>65 mm</span>
            <span>95 mm (Expanded)</span>
          </div>
        </div>
      </div>

      {/* Conceptual Explanation Box */}
      <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs leading-relaxed text-slate-300">
        <h4 className="font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-emerald-400" />
          <span>{symmetry === 'magnetic' ? labels.magneticNoticeTitle : labels.gaussElecTitle}</span>
        </h4>
        <p>{symmetry === 'magnetic' ? labels.magneticNoticeDesc : labels.gaussElecDesc}</p>
      </div>
    </div>
  );
};
