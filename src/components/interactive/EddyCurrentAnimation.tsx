import React, { useState, useMemo } from 'react';
import { Layers, Zap, Flame, Sliders, ShieldCheck, RefreshCw, AlertTriangle } from 'lucide-react';
import { Language } from '../../types';

interface EddyCurrentAnimationProps {
  currentLanguage: Language;
}

export const EddyCurrentAnimation: React.FC<EddyCurrentAnimationProps> = ({ currentLanguage }) => {
  const [coreType, setCoreType] = useState<'SOLID' | 'LAMINATED'>('SOLID');
  const [frequencyHz, setFrequencyHz] = useState<number>(50);
  const [fluxDensityT, setFluxDensityT] = useState<number>(1.2);
  const [laminationThicknessMm, setLaminationThicknessMm] = useState<number>(0.35); // mm
  const [resistivityMicroOhmM, setResistivityMicroOhmM] = useState<number>(0.5); // μΩ·m (CRGO steel ~0.5)

  // Calculations
  // P_e = K_e * f^2 * B_m^2 * t^2 * V / rho
  // For solid core: effective thickness t is the full thickness of core, e.g. 50 mm
  const solidThicknessMm = 50.0;
  const effectiveThicknessMm = coreType === 'SOLID' ? solidThicknessMm : laminationThicknessMm;

  // Normalized volumetric loss W/kg ~ k * (f * B_m * t)^2 / rho
  const specificLossWPerKg = useMemo(() => {
    const t_m = effectiveThicknessMm * 1e-3;
    const f = frequencyHz;
    const B = fluxDensityT;
    const rho = resistivityMicroOhmM * 1e-6;
    // Classical eddy loss formula: P_e = (pi^2 * f^2 * B_m^2 * t^2) / (6 * rho * density)
    const density = 7650; // kg/m^3 for electrical steel
    const loss = (Math.PI * Math.PI * f * f * B * B * t_m * t_m) / (6 * rho * density);
    return Math.min(loss, 9999);
  }, [effectiveThicknessMm, frequencyHz, fluxDensityT, resistivityMicroOhmM]);

  // Comparison ratio: Solid vs Laminated loss
  const lossRatio = useMemo(() => {
    const t_ratio = solidThicknessMm / laminationThicknessMm;
    return Math.round(t_ratio * t_ratio);
  }, [laminationThicknessMm]);

  // Heating level (0 - 100%)
  const heatLevel = useMemo(() => {
    if (coreType === 'SOLID') {
      return Math.min(100, Math.round((specificLossWPerKg / 150) * 100));
    } else {
      return Math.min(100, Math.max(5, Math.round((specificLossWPerKg / 5) * 40)));
    }
  }, [coreType, specificLossWPerKg]);

  const labels = {
    en: {
      title: 'Eddy Currents & Core Loss Mechanism Simulator',
      subtitle: 'Analyze induced circulating currents, Joule heat dissipation, and the effect of laminations',
      coreStructure: 'Core Construction',
      solidCore: 'Solid Iron Core (Unlaminated)',
      laminatedCore: 'Laminated Electrical Steel Core',
      frequency: 'AC Supply Frequency (f)',
      fluxDensity: 'Peak Core Magnetic Flux Density (B_m)',
      laminationThick: 'Lamination Sheet Thickness (t)',
      resistivity: 'Core Material Resistivity (ρ)',
      lossFormula: 'Classical Eddy Current Loss Equation:',
      specificLoss: 'Specific Eddy Current Loss:',
      reductionFactor: 'Eddy Loss Reduction Ratio (Solid / Laminated):',
      heatDissipation: 'Thermal Hotspot & Core Temperature Rise:',
      solidWarning: 'CRITICAL: In a solid core, circulating loops enclose large magnetic flux, inducing massive internal currents and catastrophic I²R core heating!',
      laminatedSuccess: 'OPTIMAL: Thin insulated laminations split current loops into tiny paths. Loss scales with t², reducing eddy heat by over 99%!'
    },
    hi: {
      title: 'भंवर धाराएं एवं कोर हानि तंत्र सिमुलेटर',
      subtitle: 'प्रेरित चक्रीय धाराओं, जूल तापन एवं लैमिनेशन के प्रभाव का विश्लेषण करें',
      coreStructure: 'कोर निर्माण संरचना',
      solidCore: 'ठोस लौह कोर (अ-पटलित)',
      laminatedCore: 'पटलित विद्युत इस्पात कोर (Laminated)',
      frequency: 'एसी आपूर्ति आवृत्ति (f)',
      fluxDensity: 'शिखर चुंबकीय फ्लक्स घनत्व (B_m)',
      laminationThick: 'पटलिका की मोटाई (t)',
      resistivity: 'कोर पदार्थ की प्रतिरोधकता (ρ)',
      lossFormula: 'पारंपरिक भंवर धारा हानि समीकरण:',
      specificLoss: 'विशिष्ट भंवर धारा हानि:',
      reductionFactor: 'हानि न्यूनीकरण अनुपात (ठोस / पटलित):',
      heatDissipation: 'तापीय हॉटस्पॉट एवं कोर तापमान वृद्धि:',
      solidWarning: 'चेतावनी: ठोस कोर में बड़े लूप भारी चुंबकीय फ्लक्स को घेरते हैं, जिससे अत्यधिक आंतरिक धारा एवं विनाशकारी कोर तापन होता है!',
      laminatedSuccess: 'इष्टतम: वार्निश युक्त पतली पत्तियां धाराओं को छोटे लूप में सीमित करती हैं। हानि t² के अनुपात में घटती है (99% से अधिक बचत)!'
    },
    bn: {
      title: 'ঘূর্ণি বা এডি কারেন্ট ও কোর অপচয় সিমুলেটর',
      subtitle: 'আবিষ্ট ঘূর্ণি কারেন্ট, জুল তাপ ক্ষয় এবং ল্যামিনেশনের প্রভাব বিশ্লেষণ করো',
      coreStructure: 'কোরের গঠন কাঠামো',
      solidCore: 'সলিড আয়রন কোর (আন-ল্যামিনেটেড)',
      laminatedCore: 'ল্যামিনেটেড ইলেকট্রিক্যাল স্টিল কোর',
      frequency: 'এসি সাপ্লাই কম্পাঙ্ক (f)',
      fluxDensity: 'সর্বোচ্চ চৌম্বক ফ্লাক্স ঘনত্ব (B_m)',
      laminationThick: 'ল্যামিনেশন পাতের পুরুত্ব (t)',
      resistivity: 'কোর উপাদানের রোধাঙ্ক (ρ)',
      lossFormula: 'ক্লাসিক্যাল এডি কারেন্ট অপচয় সমীকরণ:',
      specificLoss: 'নির্দিষ্ট এডি কারেন্ট লস:',
      reductionFactor: 'অপচয় হ্রাস অনুপাত (সলিড / ল্যামিনেটেড):',
      heatDissipation: 'তাপীয় হটস্পট ও কোরের তাপমাত্রা বৃদ্ধি:',
      solidWarning: 'সতর্কতা: সলিড কোরে বিশাল লুপ প্রচুর ফ্লাক্স ঘিরে ফেলে, যার ফলে মারাত্মক অভ্যন্তরীণ কারেন্ট এবং অতিরিক্ত তাপ সৃষ্টি হয়!',
      laminatedSuccess: 'অনুকূল: পাতলা ইনসুলেটেড ল্যামিনেশন কারেন্ট পথকে অতি ক্ষুদ্র করে দেয়। লস t² হারে কমে ৯৯% এরও বেশি অপচয় রোধ করে!'
    }
  }[currentLanguage];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div>
          <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400" />
            {labels.title}
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">{labels.subtitle}</p>
        </div>
        <button
          onClick={() => {
            setCoreType('LAMINATED');
            setFrequencyHz(50);
            setFluxDensityT(1.2);
            setLaminationThicknessMm(0.35);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg border border-slate-700 transition"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      {/* Core Selector Toggle */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <button
          onClick={() => setCoreType('SOLID')}
          className={`py-2.5 px-3 rounded-lg border text-sm font-semibold flex items-center justify-center gap-2 transition ${
            coreType === 'SOLID'
              ? 'bg-red-950/70 border-red-500 text-red-300 shadow-md shadow-red-950/50'
              : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
          }`}
        >
          <AlertTriangle className="w-4 h-4 text-red-400" />
          {labels.solidCore}
        </button>

        <button
          onClick={() => setCoreType('LAMINATED')}
          className={`py-2.5 px-3 rounded-lg border text-sm font-semibold flex items-center justify-center gap-2 transition ${
            coreType === 'LAMINATED'
              ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950/50'
              : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
          }`}
        >
          <Layers className="w-4 h-4 text-emerald-400" />
          {labels.laminatedCore}
        </button>
      </div>

      {/* Visualization Canvas */}
      <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 mb-5 relative overflow-hidden">
        <svg viewBox="0 0 700 280" className="w-full h-64 select-none">
          <defs>
            <radialGradient id="heatGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity={coreType === 'SOLID' ? 0.75 : 0.15} />
              <stop offset="70%" stopColor="#f59e0b" stopOpacity={coreType === 'SOLID' ? 0.4 : 0.05} />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
            <marker id="arrow-eddy" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#f59e0b" />
            </marker>
          </defs>

          {/* Magnetic Core Background */}
          <rect x="50" y="30" width="600" height="220" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="2" />

          {/* Alternating AC Magnetic Flux Lines passing perpendicular through core (cross markers) */}
          <g opacity="0.35">
            {[90, 150, 210, 270, 330, 390, 450, 510, 570, 610].map((x) =>
              [60, 110, 160, 210].map((y) => (
                <g key={`flux-${x}-${y}`}>
                  <circle cx={x} cy={y} r="7" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                  <path d={`M ${x - 4} ${y - 4} L ${x + 4} ${y + 4} M ${x - 4} ${y + 4} L ${x + 4} ${y - 4}`} stroke="#38bdf8" strokeWidth="1.5" />
                </g>
              ))
            )}
          </g>

          {coreType === 'SOLID' ? (
            /* SOLID CORE VISUALIZATION: Huge circulating loops & intense thermal hotspot */
            <g>
              {/* Thermal Heatmap Glow */}
              <circle cx="350" cy="140" r="110" fill="url(#heatGlow)" />

              {/* Concentric Giant Eddy Loops */}
              <ellipse cx="350" cy="140" rx="220" ry="85" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="8 6" className="animate-pulse" />
              <ellipse cx="350" cy="140" rx="160" ry="60" fill="none" stroke="#f97316" strokeWidth="2.5" strokeDasharray="6 4" />
              <ellipse cx="350" cy="140" rx="100" ry="38" fill="none" stroke="#facc15" strokeWidth="2" strokeDasharray="5 3" />
              <ellipse cx="350" cy="140" rx="45" ry="18" fill="none" stroke="#ffffff" strokeWidth="1.5" />

              {/* Loop Direction Arrows */}
              <path d="M 350 55 L 365 55" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow-eddy)" />
              <path d="M 350 225 L 335 225" stroke="#ef4444" strokeWidth="3" markerEnd="url(#arrow-eddy)" />

              <text x="350" y="135" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">
                Massive Circulating Loops (i = e / R_loop)
              </text>
              <text x="350" y="155" fill="#fca5a5" fontSize="11" textAnchor="middle">
                Enclosing Huge Cross-Sectional Area A → Large Induced EMF → High I²R Heat
              </text>

              <rect x="70" y="45" width="130" height="28" rx="4" fill="#7f1d1d" stroke="#ef4444" />
              <text x="135" y="63" fill="#fecaca" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                THICKNESS t = 50 mm
              </text>
            </g>
          ) : (
            /* LAMINATED CORE VISUALIZATION: Multiple thin strips with individual microscopic eddy currents */
            <g>
              {/* Lamination Slices */}
              {[60, 115, 170, 225, 280, 335, 390, 445, 500, 555, 610].map((lx, i) => (
                <g key={`lam-${i}`}>
                  {/* Lamination Sheet */}
                  <rect x={lx} y="35" width="45" height="210" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
                  
                  {/* Thin Insulation Layer (varnish/oxide) */}
                  <line x1={lx + 47} y1="35" x2={lx + 47} y2="245" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3 3" />

                  {/* Micro Eddy Loop constrained within single lamination */}
                  <ellipse cx={lx + 22.5} cy="90" rx="16" ry="32" fill="none" stroke="#34d399" strokeWidth="1.2" strokeDasharray="3 2" />
                  <ellipse cx={lx + 22.5} cy="180" rx="16" ry="32" fill="none" stroke="#34d399" strokeWidth="1.2" strokeDasharray="3 2" />
                </g>
              ))}

              {/* Varnish Insulation Callout */}
              <rect x="180" y="10" width="340" height="22" rx="4" fill="#020617" stroke="#ec4899" />
              <text x="350" y="25" fill="#f472b6" fontSize="10" fontWeight="bold" textAnchor="middle">
                Insulating Varnish / Oxide Layers (Break Electrical Continuity Across Core)
              </text>

              <rect x="230" y="240" width="240" height="24" rx="4" fill="#064e3b" stroke="#10b981" />
              <text x="350" y="256" fill="#a7f3d0" fontSize="10.5" fontWeight="bold" textAnchor="middle">
                Restricted Loop Area → Loss ∝ t² (t = {laminationThicknessMm} mm)
              </text>
            </g>
          )}

          {/* Magnetic Flux Legend */}
          <g transform="translate(60, 252)">
            <circle cx="0" cy="0" r="6" fill="none" stroke="#38bdf8" strokeWidth="1.2" />
            <path d="M -3 -3 L 3 3 M -3 3 L 3 -3" stroke="#38bdf8" strokeWidth="1.2" />
            <text x="12" y="3.5" fill="#94a3b8" fontSize="9.5">Alternating Magnetic Flux Φ(t) ⊥ Plane</text>
          </g>
        </svg>

        {/* Dynamic Status Banner */}
        <div
          className={`mt-2 p-2.5 rounded-lg border text-xs font-medium ${
            coreType === 'SOLID'
              ? 'bg-red-950/80 border-red-800 text-red-200'
              : 'bg-emerald-950/80 border-emerald-800 text-emerald-200'
          }`}
        >
          {coreType === 'SOLID' ? labels.solidWarning : labels.laminatedSuccess}
        </div>
      </div>

      {/* Control Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800 mb-5">
        {/* Frequency Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400 flex items-center gap-1">
              <Sliders className="w-3.5 h-3.5 text-sky-400" />
              {labels.frequency}
            </span>
            <span className="font-mono font-bold text-sky-400">{frequencyHz} Hz</span>
          </div>
          <input
            type="range"
            min="10"
            max="400"
            step="5"
            value={frequencyHz}
            onChange={(e) => setFrequencyHz(Number(e.target.value))}
            className="w-full accent-sky-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>50 Hz (Mains)</span>
            <span>400 Hz (Aviation)</span>
          </div>
        </div>

        {/* Peak Flux Density Slider */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              {labels.fluxDensity}
            </span>
            <span className="font-mono font-bold text-amber-400">{fluxDensityT.toFixed(2)} T</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="1.8"
            step="0.05"
            value={fluxDensityT}
            onChange={(e) => setFluxDensityT(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>0.2 T (Linear)</span>
            <span>1.8 T (Saturation)</span>
          </div>
        </div>

        {/* Lamination Thickness Slider (Active only if laminated) */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              {labels.laminationThick}
            </span>
            <span className="font-mono font-bold text-emerald-400">
              {coreType === 'SOLID' ? '50.0 mm (Solid)' : `${laminationThicknessMm.toFixed(2)} mm`}
            </span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1.0"
            step="0.05"
            disabled={coreType === 'SOLID'}
            value={laminationThicknessMm}
            onChange={(e) => setLaminationThicknessMm(Number(e.target.value))}
            className={`w-full h-1.5 bg-slate-800 rounded-lg ${
              coreType === 'SOLID' ? 'opacity-40 cursor-not-allowed' : 'accent-emerald-500 cursor-pointer'
            }`}
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>0.10 mm (High freq)</span>
            <span>0.35 mm (CRGO Standard)</span>
            <span>0.50 mm</span>
          </div>
        </div>

        {/* Material Resistivity */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              {labels.resistivity}
            </span>
            <span className="font-mono font-bold text-purple-400">{resistivityMicroOhmM.toFixed(2)} μΩ·m</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="2.0"
            step="0.1"
            value={resistivityMicroOhmM}
            onChange={(e) => setResistivityMicroOhmM(Number(e.target.value))}
            className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>0.1 (Pure Iron)</span>
            <span>0.5 (Silicon Steel)</span>
            <span>1.0+ (Amorphous Alloy)</span>
          </div>
        </div>
      </div>

      {/* Quantitative Meters & Formula Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Specific Loss Card */}
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex flex-col justify-between">
          <span className="text-[11px] text-slate-400 font-semibold">{labels.specificLoss}</span>
          <div className="my-2">
            <span
              className={`text-2xl font-bold font-mono ${
                coreType === 'SOLID' ? 'text-red-400' : 'text-emerald-400'
              }`}
            >
              {specificLossWPerKg.toFixed(2)}
            </span>
            <span className="text-xs text-slate-400 ml-1.5">W/kg</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">P_e ∝ f² · B_m² · t² / ρ</span>
        </div>

        {/* Reduction Ratio Card */}
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex flex-col justify-between">
          <span className="text-[11px] text-slate-400 font-semibold">{labels.reductionFactor}</span>
          <div className="my-2">
            <span className="text-2xl font-bold font-mono text-cyan-400">{lossRatio.toLocaleString()} : 1</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-medium">
            {(100 - (1 / lossRatio) * 100).toFixed(3)}% Loss Eliminated
          </span>
        </div>

        {/* Thermal Bar */}
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex flex-col justify-between">
          <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
            <span>{labels.heatDissipation}</span>
            <span className="font-mono text-amber-400">{heatLevel}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-3 my-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                coreType === 'SOLID' ? 'bg-gradient-to-r from-amber-500 to-red-600' : 'bg-emerald-500'
              }`}
              style={{ width: `${heatLevel}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-500">
            {coreType === 'SOLID' ? 'Severe core burnout danger' : 'Safe thermal steady-state'}
          </span>
        </div>
      </div>
    </div>
  );
};
