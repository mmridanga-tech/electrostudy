import React, { useState, useMemo } from 'react';
import { Sliders, RotateCcw, Info, Magnet, Layers } from 'lucide-react';
import { Language } from '../../types';

interface AmpereCircuitalLawAnimationProps {
  currentLanguage: Language;
}

type ModeType = 'wire' | 'solenoid';

export const AmpereCircuitalLawAnimation: React.FC<AmpereCircuitalLawAnimationProps> = ({
  currentLanguage
}) => {
  const [mode, setMode] = useState<ModeType>('wire');
  const [currentI, setCurrentI] = useState<number>(10); // in Amperes
  const [loopRadiusMm, setLoopRadiusMm] = useState<number>(50); // in mm
  const [relativeMu, setRelativeMu] = useState<number>(1); // 1 = air/free space, 500 = iron core
  const [showBField, setShowBField] = useState<boolean>(true);
  const [showHField, setShowHField] = useState<boolean>(true);

  // Constants
  const mu0 = 4 * Math.PI * 1e-7;

  // Numerical Calculations
  const calcData = useMemo(() => {
    const rMeters = loopRadiusMm * 1e-3;
    const iEnc = currentI;

    if (mode === 'wire') {
      // For straight wire:
      // Contour integral: ∮ H · dl = H · (2πr) = I_enc => H = I / (2πr)
      const H = iEnc / (2 * Math.PI * rMeters); // A/m
      const B = mu0 * relativeMu * H; // Tesla
      const circulationH = H * (2 * Math.PI * rMeters); // exactly I_enc = currentI
      const circulationB = mu0 * relativeMu * iEnc; // μ * I_enc

      return {
        H,
        B,
        circulationH,
        circulationB,
        contourLength: 2 * Math.PI * rMeters,
        hFormula: 'H = I_enc / (2πr)',
        bFormula: 'B = μ₀μ_r·H = μ₀μ_r·I_enc / (2πr)'
      };
    } else {
      // For long solenoid: n = 1000 turns/m
      const nTurnsPerM = 1000;
      const H = nTurnsPerM * currentI;
      const B = mu0 * relativeMu * H;
      const circulationH = H * 0.1; // over 10 cm segment
      const circulationB = B * 0.1;

      return {
        H,
        B,
        circulationH,
        circulationB,
        contourLength: 0.1,
        hFormula: 'H = n · I (inside ideal core)',
        bFormula: 'B = μ₀μ_r · n · I'
      };
    }
  }, [mode, currentI, loopRadiusMm, relativeMu]);

  const labels = {
    en: {
      title: "Ampère's Circuital Law & Magnetic Circulation",
      subtitle: 'Analyze the closed contour line integral ∮ H · dl = I_enclosed and Stokes’ curl theorem ∇ × H = J',
      wireTab: '1. Single Straight Conductor',
      solenoidTab: '2. Multi-turn Solenoid Coil',
      currentSlider: 'Conductor Current (I_enc):',
      radiusSlider: 'Amperian Loop Radius (r):',
      coreMedium: 'Core Medium Permeability (μ_r):',
      airCore: 'Air / Vacuum (μ_r = 1)',
      ironCore: 'Ferromagnetic Iron Core (μ_r = 500)',
      reset: 'Reset Default Values',
      circulationHLabel: 'Contour Circulation of H (∮ H · dl):',
      circulationBLabel: 'Contour Circulation of B (∮ B · dl):',
      hVsBTitle: 'Key Distinction: ∮ H · dl vs ∮ B · dl',
      hVsBDesc: 'According to Ampère’s Law, the closed line integral of Magnetic Field Intensity H is ALWAYS exactly equal to the enclosed macroscopic conduction current: ∮ H · dl = I_enc, regardless of medium! In contrast, ∮ B · dl = μ₀μ_r·I_enc, which is amplified 500-fold if the Amperian contour traverses a ferromagnetic core.'
    },
    hi: {
      title: 'एम्पीयर का परिपथीय नियम एवं चुंबकीय परिसंचरण',
      subtitle: 'बंद समोच्च रेखा समाकल ∮ H · dl = I_enclosed एवं कर्ल समीकरण ∇ × H = J का विश्लेषण करें',
      wireTab: '1. सीधा चालक तार',
      solenoidTab: '2. परिनालिका कुण्डली (Solenoid)',
      currentSlider: 'चालक धारा (I_enc):',
      radiusSlider: 'एम्पीयर लूप त्रिज्या (r):',
      coreMedium: 'माध्यम पारगम्यता (μ_r):',
      airCore: 'वायु / निर्वात (μ_r = 1)',
      ironCore: 'लौह क्रोड (μ_r = 500)',
      reset: 'रीसेट करें',
      circulationHLabel: 'H का समोच्च परिसंचरण (∮ H · dl):',
      circulationBLabel: 'B का समोच्च परिसंचरण (∮ B · dl):',
      hVsBTitle: 'मुख्य अंतर: ∮ H · dl बनाम ∮ B · dl',
      hVsBDesc: 'एम्पीयर के नियमानुसार चुंबकीय क्षेत्र तीव्रता H का बंद रेखा समाकल सदैव परिबद्ध चालन धारा के बराबर होता है: ∮ H · dl = I_enc, माध्यम चाहे जो हो! जबकि ∮ B · dl = μ·I_enc माध्यम की पारगम्यता पर निर्भर करता है।'
    },
    bn: {
      title: 'অ্যাম্পিয়ারের সার্কিটাল সূত্র ও চৌম্বক আবর্তন',
      subtitle: 'বদ্ধ কনট্যুর রেখা সমাকলন ∮ H · dl = I_enclosed এবং কার্ল সম্পর্ক ∇ × H = J পর্যবেক্ষণ করো',
      wireTab: '১. সোজা পরিবাহী তার',
      solenoidTab: '২. সলিনয়েড কুণ্ডলী',
      currentSlider: 'পরিবাহী কারেন্ট (I_enc):',
      radiusSlider: 'অ্যাম্পিয়ার লুপের ব্যাসার্ধ (r):',
      coreMedium: 'মাধ্যমের চৌম্বক প্রবেশ্যতা (μ_r):',
      airCore: 'বায়ু মাধ্যম (μ_r = ১)',
      ironCore: 'লোহার মজ্জা (μ_r = ৫০০)',
      reset: 'রিসেট',
      circulationHLabel: 'H-এর রেখা সমাকলন (∮ H · dl):',
      circulationBLabel: 'B-এর রেখা সমাকলন (∮ B · dl):',
      hVsBTitle: 'মৌলিক পার্থক্য: ∮ H · dl বনাম ∮ B · dl',
      hVsBDesc: 'অ্যাম্পিয়ারের সূত্রানুসারে চৌম্বক ক্ষেত্র তীব্রতা H-এর বদ্ধ রেখা সমাকলন সর্বদা আবদ্ধ পরিবাহী কারেন্টের সমান: ∮ H · dl = I_enc (মাধ্যমের ওপর নির্ভর করে না)। কিন্তু ∮ B · dl = μ₀μ_r·I_enc মাধ্যমের আপেক্ষিক প্রবেশ্যতার ওপর নির্ভরশীল।'
    }
  }[currentLanguage] || {
    title: "Ampère's Circuital Law & Magnetic Circulation",
    subtitle: 'Analyze the closed contour line integral ∮ H · dl = I_enclosed',
    wireTab: '1. Single Straight Conductor',
    solenoidTab: '2. Multi-turn Solenoid Coil',
    currentSlider: 'Conductor Current (I_enc):',
    radiusSlider: 'Amperian Loop Radius (r):',
    coreMedium: 'Core Medium Permeability (μ_r):',
    airCore: 'Air / Vacuum (μ_r = 1)',
    ironCore: 'Iron Core (μ_r = 500)',
    reset: 'Reset Default',
    circulationHLabel: 'Contour Circulation of H:',
    circulationBLabel: 'Contour Circulation of B:',
    hVsBTitle: 'Key Distinction: ∮ H · dl vs ∮ B · dl',
    hVsBDesc: '∮ H · dl = I_enc holds universally, whereas ∮ B · dl = μ·I_enc depends on core material.'
  };

  const handleReset = () => {
    setMode('wire');
    setCurrentI(10);
    setLoopRadiusMm(50);
    setRelativeMu(1);
    setShowBField(true);
    setShowHField(true);
  };

  return (
    <div
      className="bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 text-white shadow-xl max-w-4xl mx-auto"
      id="simulation-ampere-circuital-law"
      role="region"
      aria-label="Ampere's Circuital Law Simulation"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-amber-950/80 border border-amber-700/50 text-amber-400">
            <Magnet className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">{labels.title}</h3>
            <p className="text-xs text-slate-400">{labels.subtitle}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="self-start sm:self-auto px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label={labels.reset}
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
          <span>{labels.reset}</span>
        </button>
      </div>

      {/* Mode Switcher */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          type="button"
          onClick={() => setMode('wire')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
            mode === 'wire'
              ? 'bg-amber-950/80 border-amber-500 text-amber-200'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <span>{labels.wireTab}</span>
        </button>
        <button
          type="button"
          onClick={() => setMode('solenoid')}
          className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border transition-all ${
            mode === 'solenoid'
              ? 'bg-amber-950/80 border-amber-500 text-amber-200'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <span>{labels.solenoidTab}</span>
        </button>
      </div>

      {/* Main Simulation Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* SVG Canvas */}
        <div className="lg:col-span-2 bg-slate-950 rounded-xl border border-slate-800 p-3 flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]">
          <svg
            viewBox="0 0 460 300"
            className="w-full h-auto max-h-[320px]"
            role="img"
            aria-label="Ampere circuital law and Amperian loop diagram"
          >
            <defs>
              <marker id="ampere-arrow-h" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" />
              </marker>
              <marker id="ampere-arrow-dl" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#10b981" />
              </marker>
            </defs>

            {/* Background */}
            <rect width="460" height="300" fill="#030712" />

            {mode === 'wire' ? (
              <g>
                {/* Core Medium Backdrop if Iron */}
                {relativeMu > 1 && (
                  <circle cx="230" cy="150" r="120" fill="#78350f" fillOpacity="0.15" stroke="#92400e" strokeDasharray="3 3" />
                )}

                {/* Circular Amperian Loop (dashed yellow circle) */}
                <circle
                  cx="230"
                  cy="150"
                  r={loopRadiusMm}
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeDasharray="5 3"
                />
                <text
                  x={230 + loopRadiusMm + 8}
                  y="145"
                  fill="#f59e0b"
                  fontSize="11"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  Amperian Loop (r = {loopRadiusMm} mm)
                </text>

                {/* Central Conductor Cross Section */}
                <circle cx="230" cy="150" r="20" fill="#334155" stroke="#f59e0b" strokeWidth="2.5" />
                {/* Dot in center indicating current out of page */}
                <circle cx="230" cy="150" r="5" fill="#f59e0b" />
                <text x="230" y="185" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">
                  I = {currentI} A (⊙ Out)
                </text>

                {/* Tangential Vectors along Amperian contour dl & H */}
                {[0, 90, 180, 270].map((deg, idx) => {
                  const rad = (deg * Math.PI) / 180;
                  // Position on the loop
                  const px = 230 + loopRadiusMm * Math.cos(rad);
                  const py = 150 + loopRadiusMm * Math.sin(rad);

                  // Tangential direction (counter-clockwise for current pointing out)
                  const tangentAngle = rad + Math.PI / 2;
                  const vecLen = 28;
                  const vx = px + vecLen * Math.cos(tangentAngle);
                  const vy = py + vecLen * Math.sin(tangentAngle);

                  return (
                    <g key={idx}>
                      {/* Tangential H vector */}
                      {showHField && (
                        <line
                          x1={px}
                          y1={py}
                          x2={vx}
                          y2={vy}
                          stroke="#f59e0b"
                          strokeWidth="2.5"
                          markerEnd="url(#ampere-arrow-h)"
                        />
                      )}
                      {/* Line element dl */}
                      <line
                        x1={px}
                        y1={py}
                        x2={px + 14 * Math.cos(tangentAngle)}
                        y2={py + 14 * Math.sin(tangentAngle)}
                        stroke="#10b981"
                        strokeWidth="2"
                        markerEnd="url(#ampere-arrow-dl)"
                      />
                    </g>
                  );
                })}
              </g>
            ) : (
              // Solenoid Mode
              <g>
                {/* Solenoid core box */}
                <rect x="60" y="80" width="340" height="140" fill={relativeMu > 1 ? '#78350f' : '#1e293b'} fillOpacity="0.3" stroke="#475569" strokeWidth="2" rx="8" />

                {/* Coil turn dots */}
                {[90, 130, 170, 210, 250, 290, 330, 370].map((xPos, idx) => (
                  <g key={idx}>
                    {/* Top turn (⊙ Current out) */}
                    <circle cx={xPos} cy="80" r="8" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
                    <circle cx={xPos} cy="80" r="2.5" fill="#f59e0b" />
                    {/* Bottom turn (⊗ Current in) */}
                    <circle cx={xPos} cy="220" r="8" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
                    <line x1={xPos - 4} y1="216" x2={xPos + 4} y2="224" stroke="#f59e0b" strokeWidth="1.5" />
                    <line x1={xPos + 4} y1="216" x2={xPos - 4} y2="224" stroke="#f59e0b" strokeWidth="1.5" />
                  </g>
                ))}

                {/* Uniform internal H/B field lines */}
                {[115, 150, 185].map((yPos, idx) => (
                  <line
                    key={idx}
                    x1="80"
                    y1={yPos}
                    x2="380"
                    y2={yPos}
                    stroke="#f59e0b"
                    strokeWidth={relativeMu > 1 ? '3' : '2'}
                    markerEnd="url(#ampere-arrow-h)"
                  />
                ))}

                {/* Rectangular Amperian Loop inside solenoid */}
                <rect
                  x="140"
                  y="120"
                  width="180"
                  height="60"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <text x="230" y="112" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">
                  Rectangular Amperian Contour (∮ H · dl = N·I)
                </text>
              </g>
            )}

            {/* In-canvas Legend */}
            <g transform="translate(15, 260)">
              <rect width="230" height="30" rx="5" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <line x1="12" y1="15" x2="32" y2="15" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#ampere-arrow-h)" />
              <text x="38" y="19" fill="#f59e0b" fontSize="10" fontFamily="monospace">H Field</text>
              <line x1="125" y1="15" x2="145" y2="15" stroke="#10b981" strokeWidth="2" markerEnd="url(#ampere-arrow-dl)" />
              <text x="152" y="19" fill="#10b981" fontSize="10" fontFamily="monospace">dl (Contour)</text>
            </g>
          </svg>
        </div>

        {/* Real-time Circulation Readout */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-3.5 flex flex-col justify-between space-y-3">
          <div>
            <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>Ampère Contour Metrics</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-amber-300">
                ∮ H · dl = I_enclosed
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                Enclosed Conduction Current: <span className="text-white font-bold">{currentI} A</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                Contour Perimeter (2πr): <span className="text-white font-bold">{calcData.contourLength.toFixed(3)} m</span>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">∮ H · dl (Circulation):</span>
                <span className="font-mono font-bold text-amber-400">
                  {calcData.circulationH.toFixed(2)} A
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">Field Intensity H(r):</span>
                <span className="font-mono font-bold text-sky-400">
                  {calcData.H.toFixed(1)} A/m
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-mono">Flux Density B(r):</span>
                <span className="font-mono font-bold text-pink-400">
                  {(calcData.B * 1e3).toFixed(2)} mT
                </span>
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-300 flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              {relativeMu > 1
                ? 'High-μ iron multiplies B by 500× without altering driving H-field circulation.'
                : 'Free space vacuum: B = μ₀·H.'}
            </span>
          </div>
        </div>
      </div>

      {/* Parameter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800">
        {/* Current Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.currentSlider}</span>
            <span className="font-mono font-bold text-amber-300">{currentI} A</span>
          </div>
          <input
            type="range"
            min="1"
            max="40"
            step="1"
            value={currentI}
            onChange={(e) => setCurrentI(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            aria-label={labels.currentSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>1 A</span>
            <span>20 A</span>
            <span>40 A</span>
          </div>
        </div>

        {/* Amperian Loop Radius Slider (Wire Mode) */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-300 font-semibold">{labels.radiusSlider}</span>
            <span className="font-mono font-bold text-emerald-300">{loopRadiusMm} mm</span>
          </div>
          <input
            type="range"
            min="25"
            max="90"
            step="5"
            disabled={mode === 'solenoid'}
            value={loopRadiusMm}
            onChange={(e) => setLoopRadiusMm(Number(e.target.value))}
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg disabled:opacity-40"
            aria-label={labels.radiusSlider}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>25 mm</span>
            <span>50 mm</span>
            <span>90 mm</span>
          </div>
        </div>

        {/* Medium Selection */}
        <div>
          <label htmlFor="core-select" className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-amber-400" />
            <span>{labels.coreMedium}</span>
          </label>
          <select
            id="core-select"
            value={relativeMu}
            onChange={(e) => setRelativeMu(Number(e.target.value))}
            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value={1}>{labels.airCore}</option>
            <option value={500}>{labels.ironCore}</option>
          </select>
        </div>
      </div>

      {/* Conceptual Explanation Box */}
      <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs leading-relaxed text-slate-300">
        <h4 className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-amber-400" />
          <span>{labels.hVsBTitle}</span>
        </h4>
        <p>{labels.hVsBDesc}</p>
      </div>
    </div>
  );
};
