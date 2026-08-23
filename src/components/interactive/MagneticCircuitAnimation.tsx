import React, { useState, useId } from 'react';
import { Magnet, RotateCcw, Activity, Info, Gauge, Sliders, Layers, Sparkles } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface MagneticCircuitAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'Magnetic Circuit & Air-Gap Reluctance Simulator',
    subtitle: 'Explore the fundamental governing laws of magnetic circuits: MMF, reluctance, permeability, and air-gap effect on total core flux and flux density.',
    turnsLabel: 'Coil Turns (N)',
    currentLabel: 'Exciting Current (I)',
    coreLengthLabel: 'Mean Core Path Length (l_c)',
    areaLabel: 'Core Cross-Section Area (A)',
    relPermLabel: 'Relative Permeability (μ_r)',
    airGapLabel: 'Air-Gap Length (l_g)',
    liveMetrics: 'Magnetic Circuit Live Metrics',
    mmfLabel: 'Magnetomotive Force (MMF = N·I)',
    totalReluctance: 'Total Reluctance (ℜ_tot)',
    coreReluctance: 'Core Reluctance (ℜ_c)',
    airGapReluctance: 'Air Gap Reluctance (ℜ_g)',
    magneticFlux: 'Total Magnetic Flux (Φ = F/ℜ)',
    fluxDensity: 'Flux Density (B = Φ/A)',
    fieldIntensityCore: 'Core Field Intensity (H_c)',
    fieldIntensityGap: 'Air-Gap Field Intensity (H_g)',
    formulaTitle: "Magnetic Ohm's Law & Core Relations",
    formulaSummary: 'MMF F = N·I (A·t), Total Reluctance ℜ = ℜ_c + ℜ_g = l_c/(μ₀μ_r A) + l_g/(μ₀A). Even a tiny millimeter air gap introduces enormous reluctance due to μ_r = 1 in air.',
    formulaText: 'Φ = F / ℜ_total   |   F = N · I   |   ℜ = l / (μ · A)   |   B = Φ / A',
    reset: 'Reset Defaults',
    coilExcitation: 'Excitation Coil',
    ferroCore: 'Laminated Steel Core (μ_r =',
    airGapRegion: 'Air Gap (l_g =',
    fluxLoop: 'Magnetic Flux Lines (Φ)',
    airGapWarning: 'Notice: Air gap accounts for the majority of total MMF drop despite its microscopic length!',
    analogyTitle: 'Electrical vs Magnetic Analogy',
    analogyEMF: 'EMF (V) ↔ MMF (F = NI)',
    analogyCurrent: 'Current (I) ↔ Flux (Φ)',
    analogyResistance: 'Resistance (R = l/σA) ↔ Reluctance (ℜ = l/μA)'
  },
  hi: {
    title: 'चुंबकीय परिपथ एवं एयर-गैप रिलक्टेंस सिम्युलेटर',
    subtitle: 'चुंबकीय परिपथ के मूलभूत नियमों का अन्वेषण करें: चुंबकवाहक बल (MMF), रिलक्टेंस, पारगम्यता और कुल फ्लक्स पर एयर-गैप का प्रभाव।',
    turnsLabel: 'कॉइल टर्न्स (N)',
    currentLabel: 'उत्तेजक धारा (I)',
    coreLengthLabel: 'कोर की औसत लंबाई (l_c)',
    areaLabel: 'क्रॉस-सेक्शनल क्षेत्रफल (A)',
    relPermLabel: 'आपेक्षिक पारगम्यता (μ_r)',
    airGapLabel: 'एयर-गैप लंबाई (l_g)',
    liveMetrics: 'चुंबकीय परिपथ लाइव मेट्रिक्स',
    mmfLabel: 'चुंबकवाहक बल (MMF = N·I)',
    totalReluctance: 'कुल रिलक्टेंस (ℜ_tot)',
    coreReluctance: 'कोर रिलक्टेंस (ℜ_c)',
    airGapReluctance: 'एयर-गैप रिलक्टेंस (ℜ_g)',
    magneticFlux: 'कुल चुंबकीय फ्लक्स (Φ = F/ℜ)',
    fluxDensity: 'फ्लक्स घनत्व (B = Φ/A)',
    fieldIntensityCore: 'कोर क्षेत्र तीव्रता (H_c)',
    fieldIntensityGap: 'एयर-गैप क्षेत्र तीव्रता (H_g)',
    formulaTitle: 'चुंबकीय ओम का नियम एवं संबंध',
    formulaSummary: 'MMF F = N·I (A·t), कुल रिलक्टेंस ℜ = ℜ_c + ℜ_g। हवा में μ_r = 1 होने के कारण एक छोटा मिलीमीटर एयर-गैप भी अत्यधिक रिलक्टेंस जोड़ता है।',
    formulaText: 'Φ = F / ℜ_total   |   F = N · I   |   ℜ = l / (μ · A)   |   B = Φ / A',
    reset: 'डिफ़ॉल्ट रीसेट',
    coilExcitation: 'उत्तेजना कॉइल',
    ferroCore: 'सिलिकॉन स्टील कोर (μ_r =',
    airGapRegion: 'एयर गैप (l_g =',
    fluxLoop: 'चुंबकीय फ्लक्स रेखाएं (Φ)',
    airGapWarning: 'ध्यान दें: बहुत छोटी लंबाई के बावजूद अधिकांश MMF एयर-गैप में खर्च होता है!',
    analogyTitle: 'विद्युत बनाम चुंबकीय सादृश्य',
    analogyEMF: 'EMF (V) ↔ MMF (F = NI)',
    analogyCurrent: 'धारा (I) ↔ फ्लक्स (Φ)',
    analogyResistance: 'प्रतिरोध (R = l/σA) ↔ रिलक्टेंस (ℜ = l/μA)'
  },
  bn: {
    title: 'ম্যাগনেটিক সার্কিট ও এয়ার-গ্যাপ রিলাক্ট্যান্স সিমুলেটর',
    subtitle: 'ম্যাগনেটিক সার্কিটের মৌলিক সূত্রসমূহ পর্যবেক্ষণ করুন: MMF, রিলাক্ট্যান্স, পারমিএবিলিটি এবং মোট ফ্লাক্সের ওপর এয়ার-গ্যাপের প্রভাব।',
    turnsLabel: 'কয়েল প্যাঁচ সংখ্যা (N)',
    currentLabel: 'উত্তেজক কারেন্ট (I)',
    coreLengthLabel: 'কোরের গড় দৈর্ঘ্য (l_c)',
    areaLabel: 'প্রস্থচ্ছেদের ক্ষেত্রফল (A)',
    relPermLabel: 'আপেক্ষিক প্রবেশ্যতা (μ_r)',
    airGapLabel: 'এয়ার-গ্যাপের দৈর্ঘ্য (l_g)',
    liveMetrics: 'ম্যাগনেটিক সার্কিট লাইভ পরিমাপ',
    mmfLabel: 'ম্যাগনেটোমোটিভ ফোর্স (MMF = N·I)',
    totalReluctance: 'মোট রিলাক্ট্যান্স (ℜ_tot)',
    coreReluctance: 'কোর রিলাক্ট্যান্স (ℜ_c)',
    airGapReluctance: 'এয়ার-গ্যাপ রিলাক্ট্যান্স (ℜ_g)',
    magneticFlux: 'মোট চৌম্বক ফ্লাক্স (Φ = F/ℜ)',
    fluxDensity: 'ফ্লাক্স ঘনত্ব (B = Φ/A)',
    fieldIntensityCore: 'কোর ফিল্ড তীব্রতা (H_c)',
    fieldIntensityGap: 'এয়ার-গ্যাপ ফিল্ড তীব্রতা (H_g)',
    formulaTitle: 'ম্যাগনেটিক ওহমের সূত্র ও সম্পর্ক',
    formulaSummary: 'MMF F = N·I (A·t), মোট রিলাক্ট্যান্স ℜ = ℜ_c + ℜ_g। বায়ুতে μ_r = ১ হওয়ায় সামান্য মিলিমিটার এয়ার-গ্যাপও অত্যন্ত উচ্চ রিলাক্ট্যান্স তৈরি করে।',
    formulaText: 'Φ = F / ℜ_total   |   F = N · I   |   ℜ = l / (μ · A)   |   B = Φ / A',
    reset: 'ডিফল্ট রিসেট',
    coilExcitation: 'উত্তেজনা কয়েল',
    ferroCore: 'সিলিকন স্টিল কোর (μ_r =',
    airGapRegion: 'এয়ার গ্যাপ (l_g =',
    fluxLoop: 'চৌম্বক ফ্লাক্স প্রবাহ রেখা (Φ)',
    airGapWarning: 'লক্ষণীয়: অতি ক্ষুদ্র দৈর্ঘ্য সত্ত্বেও মোট MMF-এর সিংহভাগ এয়ার-গ্যাপেই খরচ হয়!',
    analogyTitle: 'তড়িৎ ও চৌম্বক সার্কিটের তুলনা',
    analogyEMF: 'EMF (V) ↔ MMF (F = NI)',
    analogyCurrent: 'কারেন্ট (I) ↔ ফ্লাক্স (Φ)',
    analogyResistance: 'রোধ (R = l/σA) ↔ রিলাক্ট্যান্স (ℜ = l/μA)'
  }
};

const MU_0 = 4 * Math.PI * 1e-7; // H/m (Permeability of free space)

export const MagneticCircuitAnimation: React.FC<MagneticCircuitAnimationProps> = ({
  currentLanguage
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  // State parameters
  const [turnsN, setTurnsN] = useState<number>(500); // 50 to 2000
  const [currentI, setCurrentI] = useState<number>(2.0); // 0.1 to 10 A
  const [coreLengthM, setCoreLengthM] = useState<number>(0.6); // 0.2 to 2.0 m
  const [areaCm2, setAreaCm2] = useState<number>(25); // 5 to 100 cm^2
  const [muR, setMuR] = useState<number>(2000); // 200 to 5000
  const [airGapMm, setAirGapMm] = useState<number>(1.0); // 0.0 to 5.0 mm

  // HTML IDs for accessible form controls
  const turnsId = useId();
  const currentId = useId();
  const coreLengthId = useId();
  const areaId = useId();
  const muRId = useId();
  const airGapId = useId();

  // Safety sanitization
  const safeN = Math.max(10, isNaN(turnsN) ? 500 : turnsN);
  const safeI = Math.max(0.01, isNaN(currentI) ? 2.0 : currentI);
  const safeLc = Math.max(0.05, isNaN(coreLengthM) ? 0.6 : coreLengthM);
  const safeAreaM2 = Math.max(1e-5, (isNaN(areaCm2) ? 25 : areaCm2) * 1e-4);
  const safeMuR = Math.max(10, isNaN(muR) ? 2000 : muR);
  const safeLgM = Math.max(0, (isNaN(airGapMm) ? 1.0 : airGapMm) * 1e-3);

  // Exact Mathematical Derivations
  const mmf = safeN * safeI; // A-turns (A)
  const reluctanceCore = safeLc / (MU_0 * safeMuR * safeAreaM2); // A-t / Wb
  const reluctanceGap = safeLgM > 0 ? safeLgM / (MU_0 * 1.0 * safeAreaM2) : 0; // A-t / Wb
  const totalReluctance = reluctanceCore + reluctanceGap; // A-t / Wb

  // Magnetic Flux
  const fluxWb = mmf / Math.max(1, totalReluctance); // Wb
  const fluxMilliWb = fluxWb * 1000; // mWb

  // Flux Density (B = Φ / A)
  const fluxDensityT = fluxWb / safeAreaM2; // Tesla (T)

  // Field Intensity (H = B / μ)
  const hCore = fluxDensityT / (MU_0 * safeMuR); // A/m
  const hGap = fluxDensityT / MU_0; // A/m

  // Ratio of MMF consumed in air gap
  const gapMmfDrop = safeLgM > 0 ? (reluctanceGap / totalReluctance) * 100 : 0;

  const handleReset = () => {
    setTurnsN(500);
    setCurrentI(2.0);
    setCoreLengthM(0.6);
    setAreaCm2(25);
    setMuR(2000);
    setAirGapMm(1.0);
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={t.formulaTitle}
      calloutText={t.formulaSummary}
      formulaText={t.formulaText}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-3.5 bg-slate-950/70 p-4 rounded-xl border border-slate-800/80">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              Parameters
            </span>
            <span className="text-xs font-mono font-bold text-cyan-300">
              MMF: {mmf.toFixed(0)} A·t
            </span>
          </div>

          {/* Coil Turns & Current */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label htmlFor={turnsId} className="text-slate-300 font-semibold">{t.turnsLabel}</label>
                <span className="font-mono text-cyan-300 font-bold">{safeN}</span>
              </div>
              <input
                id={turnsId}
                type="range"
                min="100"
                max="1500"
                step="50"
                value={safeN}
                onChange={(e) => setTurnsN(parseInt(e.target.value, 10))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label htmlFor={currentId} className="text-slate-300 font-semibold">{t.currentLabel}</label>
                <span className="font-mono text-cyan-300 font-bold">{safeI.toFixed(1)} A</span>
              </div>
              <input
                id={currentId}
                type="range"
                min="0.2"
                max="8.0"
                step="0.2"
                value={safeI}
                onChange={(e) => setCurrentI(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          </div>

          {/* Core Length & Cross Section Area */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label htmlFor={coreLengthId} className="text-slate-300 font-semibold">{t.coreLengthLabel}</label>
                <span className="font-mono text-emerald-300 font-bold">{safeLc.toFixed(2)} m</span>
              </div>
              <input
                id={coreLengthId}
                type="range"
                min="0.2"
                max="1.5"
                step="0.05"
                value={safeLc}
                onChange={(e) => setCoreLengthM(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label htmlFor={areaId} className="text-slate-300 font-semibold">{t.areaLabel}</label>
                <span className="font-mono text-emerald-300 font-bold">{areaCm2} cm²</span>
              </div>
              <input
                id={areaId}
                type="range"
                min="5"
                max="60"
                step="1"
                value={areaCm2}
                onChange={(e) => setAreaCm2(parseInt(e.target.value, 10))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>
          </div>

          {/* Relative Permeability & Air Gap Length */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label htmlFor={muRId} className="text-slate-300 font-semibold">{t.relPermLabel}</label>
                <span className="font-mono text-purple-300 font-bold">{safeMuR}</span>
              </div>
              <input
                id={muRId}
                type="range"
                min="500"
                max="4000"
                step="100"
                value={safeMuR}
                onChange={(e) => setMuR(parseInt(e.target.value, 10))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <label htmlFor={airGapId} className="text-slate-300 font-semibold">{t.airGapLabel}</label>
                <span className="font-mono text-amber-300 font-bold">{airGapMm.toFixed(1)} mm</span>
              </div>
              <input
                id={airGapId}
                type="range"
                min="0.0"
                max="4.0"
                step="0.1"
                value={airGapMm}
                onChange={(e) => setAirGapMm(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>
          </div>

          {/* Live Calculated Metric Cards */}
          <div className="pt-2 border-t border-slate-800 space-y-2 text-xs font-mono">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{t.magneticFlux}</span>
                <span className="text-sm font-bold text-cyan-300">{fluxMilliWb.toFixed(3)} mWb</span>
              </div>
              <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{t.fluxDensity}</span>
                <span className="text-sm font-bold text-emerald-300">{fluxDensityT.toFixed(3)} T</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{t.coreReluctance}</span>
                <span className="text-xs font-bold text-purple-300">{(reluctanceCore / 1e3).toFixed(1)} kA·t/Wb</span>
              </div>
              <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{t.airGapReluctance}</span>
                <span className="text-xs font-bold text-amber-300">{(reluctanceGap / 1e3).toFixed(1)} kA·t/Wb</span>
              </div>
            </div>

            {/* Gap MMF percentage callout */}
            <div className="p-2 bg-amber-950/40 rounded-lg border border-amber-900/60 text-[11px] text-amber-200">
              ⚡ Air Gap MMF Drop:{' '}
              <strong className="text-amber-300 font-bold">{gapMmfDrop.toFixed(1)}%</strong> of total {mmf.toFixed(0)} A·t
            </div>
          </div>
        </div>

        {/* Visual Magnetic Core Simulation */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 relative">
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Magnet className="w-4 h-4 text-cyan-400" />
                Magnetic Circuit Schematic with Air-Gap
              </span>
              <span className="text-cyan-300 font-bold">B = {fluxDensityT.toFixed(3)} Tesla</span>
            </div>

            {/* Core Diagram SVG */}
            <div className="w-full flex items-center justify-center">
              <svg viewBox="0 0 460 280" className="w-full h-auto max-h-64">
                <defs>
                  <linearGradient id="coreSteelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                  <marker id="fluxArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
                    <polygon points="0 0, 6 3, 0 6" fill="#38bdf8" />
                  </marker>
                </defs>

                {/* Outer Core Frame */}
                <rect x="50" y="30" width="360" height="220" rx="14" fill="url(#coreSteelGrad)" stroke="#475569" strokeWidth="4" />

                {/* Inner Core Window Hole */}
                <rect x="130" y="80" width="200" height="120" rx="8" fill="#020617" stroke="#334155" strokeWidth="3" />

                {/* Air Gap Cutout on Right Limb */}
                {safeLgM > 0 && (
                  <g transform="translate(328, 125)">
                    <rect
                      x="0"
                      y="0"
                      width="84"
                      height={Math.min(30, Math.max(6, airGapMm * 6))}
                      fill="#020617"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeDasharray="3 2"
                    />
                    <text x="42" y="-4" textAnchor="middle" fill="#fcd34d" fontSize="9" fontWeight="bold">
                      Air Gap ({airGapMm.toFixed(1)} mm)
                    </text>
                  </g>
                )}

                {/* Left Limb Coil (Excitation Windings) */}
                <g transform="translate(42, 65)">
                  {/* Copper Turns Loops */}
                  {[0, 18, 36, 54, 72, 90, 108, 126].map((offsetY, idx) => (
                    <g key={idx}>
                      <rect x="0" y={offsetY} width="16" height="12" rx="3" fill="#b45309" stroke="#f59e0b" strokeWidth="1.5" />
                      <rect x="74" y={offsetY} width="16" height="12" rx="3" fill="#b45309" stroke="#f59e0b" strokeWidth="1.5" />
                      <line x1="8" y1={offsetY + 6} x2="82" y2={offsetY + 12} stroke="#f59e0b" strokeWidth="2.5" />
                    </g>
                  ))}
                  {/* Current In/Out Indicators */}
                  <text x="-8" y="10" fill="#38bdf8" fontSize="10" fontWeight="bold">I_in</text>
                  <text x="-8" y="145" fill="#38bdf8" fontSize="10" fontWeight="bold">I_out</text>
                </g>

                {/* Magnetic Flux Path (Continuous loop inside core) */}
                <rect
                  x="90"
                  y="55"
                  width="280"
                  height="170"
                  rx="10"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  strokeDasharray={isReducedMotion ? 'none' : '8 6'}
                  className={isReducedMotion ? '' : 'animate-pulse'}
                />

                {/* Flux Direction Arrows */}
                <path d="M 220 55 L 240 55" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#fluxArrow)" />
                <path d="M 370 70 L 370 90" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#fluxArrow)" />
                <path d="M 240 225 L 220 225" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#fluxArrow)" />
                <path d="M 90 200 L 90 180" stroke="#38bdf8" strokeWidth="3" markerEnd="url(#fluxArrow)" />

                {/* Diagram Labels */}
                <text x="230" y="130" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="bold">
                  {t.ferroCore} {safeMuR})
                </text>
                <text x="230" y="148" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="monospace">
                  Φ = {fluxMilliWb.toFixed(3)} mWb
                </text>
                <text x="230" y="165" textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="monospace">
                  B = {fluxDensityT.toFixed(3)} T
                </text>
              </svg>
            </div>

            {/* Bottom Educational Callout */}
            <div className="mt-3 p-2.5 bg-slate-900/90 rounded-lg border border-slate-800 text-[11px] text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-amber-300 mb-1">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                {t.analogyTitle}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[10px] text-slate-400">
                <span>{t.analogyEMF}</span>
                <span>{t.analogyCurrent}</span>
                <span>{t.analogyResistance}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
