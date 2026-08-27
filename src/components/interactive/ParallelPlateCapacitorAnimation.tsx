import React, { useState, useId } from 'react';
import { Layers, Zap, Gauge, Sparkles, AlertTriangle, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ParallelPlateCapacitorAnimationProps {
  currentLanguage: Language;
}

const DIELECTRIC_MATERIALS = [
  { id: 'vacuum', nameEn: 'Vacuum', nameHi: 'निर्वात (Vacuum)', nameBn: 'শূন্যস্থান (Vacuum)', er: 1.0, strength: 3000 },
  { id: 'air', nameEn: 'Air (1 atm)', nameHi: 'वायु (Air)', nameBn: 'বায়ু (Air)', er: 1.0006, strength: 3000 },
  { id: 'paper', nameEn: 'Paper (Waxed)', nameHi: 'मोमयुक्त कागज (Paper)', nameBn: 'ওয়াক্সড পেপার (Paper)', er: 3.5, strength: 16000 },
  { id: 'mylar', nameEn: 'Mylar (Polyester)', nameHi: 'माइलर (Mylar Film)', nameBn: 'মাইলার পলিয়েস্টার', er: 3.1, strength: 24000 },
  { id: 'mica', nameEn: 'Mica Sheet', nameHi: 'अभ्रक (Mica)', nameBn: 'মাইকা পাত (Mica)', er: 6.0, strength: 40000 },
  { id: 'glass', nameEn: 'Pyrex Glass', nameHi: 'पाइरेक्स ग्लास (Glass)', nameBn: 'পাইরেক্স গ্লাস (Glass)', er: 5.6, strength: 14000 },
  { id: 'oil', nameEn: 'Transformer Oil', nameHi: 'ट्रांसफार्मर तेल (Oil)', nameBn: 'ট্রান্সফরমার তেল (Oil)', er: 2.2, strength: 12000 },
  { id: 'ceramic', nameEn: 'High-K Ceramic (BaTiO3)', nameHi: 'सिरेमिक (High-K Ceramic)', nameBn: 'হাই-K সিরামিক (Ceramic)', er: 1200.0, strength: 10000 }
];

const TRANSLATIONS = {
  en: {
    title: 'Parallel Plate Capacitor & Dielectric Physics Lab',
    subtitle: 'Interactively adjust plate area, separation distance, dielectric material, and applied voltage. Visualize electric field density, dielectric dipole polarization, stored electrostatic charge, and dielectric breakdown thresholds in real-time.',
    plateAreaLabel: 'Plate Area A (cm²)',
    plateDistanceLabel: 'Separation Distance d (mm)',
    appliedVoltageLabel: 'Applied DC Voltage V (Volts)',
    dielectricSelectLabel: 'Dielectric Material (Relative Permittivity εr)',
    capacitanceMetric: 'Capacitance (C)',
    chargeMetric: 'Stored Charge (Q)',
    energyMetric: 'Stored Energy (E)',
    fieldMetric: 'Electric Field (E = V/d)',
    breakdownMarginMetric: 'Dielectric Safety Status',
    breakdownWarning: 'DIELECTRIC BREAKDOWN! Arc discharge hazard!',
    normalStatus: 'Safe Operating Region',
    reset: 'Reset Defaults',
    plateVisualTitle: 'Physical Electrostatic Plate & Dipole Polarization View',
    topPlateLabel: 'Positive Plate (+Q)',
    bottomPlateLabel: 'Negative Plate (-Q)',
    dipoleLabel: 'Polarized Dielectric Dipoles',
    fringeFieldLabel: 'Fringe Field Lines',
    formulaTitle: 'Governing Electrostatic Equations',
    formulaText: 'C = (ε₀ · εr · A) / d  |  Q = C · V  |  E_field = V / d  |  U = ½ · C · V²  |  ε₀ = 8.854 × 10⁻¹² F/m'
  },
  hi: {
    title: 'समानांतर प्लेट संधारित्र एवं परावैद्युत प्रयोगशाला',
    subtitle: 'प्लेट क्षेत्रफल, बीच की दूरी, परावैद्युत माध्यम और लागू वोल्टेज को बदलकर धारिता, संचित आवेश, विद्युत क्षेत्र एवं ऊर्जा का सजीव अनुकरण देखें।',
    plateAreaLabel: 'प्लेट क्षेत्रफल A (cm²)',
    plateDistanceLabel: 'प्लेटों के बीच दूरी d (mm)',
    appliedVoltageLabel: 'लागू डीसी वोल्टेज V (Volts)',
    dielectricSelectLabel: 'परावैद्युत पदार्थ (सापेक्ष पारगम्यता εr)',
    capacitanceMetric: 'धारिता (C)',
    chargeMetric: 'संचित आवेश (Q)',
    energyMetric: 'संचित ऊर्जा (E)',
    fieldMetric: 'विद्युत क्षेत्र (E = V/d)',
    breakdownMarginMetric: 'डाइइलेक्ट्रिक सुरक्षा स्थिति',
    breakdownWarning: 'डाइइलेक्ट्रिक ब्रेकडाउन! स्पार्क/आर्क का खतरा!',
    normalStatus: 'सुरक्षित प्रचालन क्षेत्र',
    reset: 'डिफ़ॉल्ट रीसेट',
    plateVisualTitle: 'प्लेट बनावट एवं डाइइलेक्ट्रिक ध्रुवण दृश्य',
    topPlateLabel: 'धनात्मक प्लेट (+Q)',
    bottomPlateLabel: 'ऋणात्मक प्लेट (-Q)',
    dipoleLabel: 'ध्रुवित डाइइलेक्ट्रिक द्विध्रुव',
    fringeFieldLabel: 'फ्रिंज विद्युत क्षेत्र रेखाएं',
    formulaTitle: 'मुख्य स्थिरवैद्युत समीकरण',
    formulaText: 'C = (ε₀ · εr · A) / d  |  Q = C · V  |  E = V / d  |  U = ½ · C · V²  |  ε₀ = 8.854 × 10⁻¹² F/m'
  },
  bn: {
    title: 'সমান্তরাল পাত ধারক ও ডাই-ইলেকট্রিক ল্যাব',
    subtitle: 'পাত দুটির ক্ষেত্রফল, মধ্যবর্তী দূরত্ব, ডাই-ইলেকট্রিক মাধ্যম এবং ভোল্টেজ পরিবর্তন করে ধারকত্ব, সঞ্চিত চার্জ, তড়িৎ ক্ষেত্র ও শক্তির পরিবর্তন পর্যবেক্ষণ করুন।',
    plateAreaLabel: 'পাতের ক্ষেত্রফল A (cm²)',
    plateDistanceLabel: 'পাতের মধ্যবর্তী দূরত্ব d (mm)',
    appliedVoltageLabel: 'প্রযুক্ত ডিসি ভোল্টেজ V (Volts)',
    dielectricSelectLabel: 'ডাই-ইলেকট্রিক উপাদান (আপেক্ষিক প্রবেশ্যতা εr)',
    capacitanceMetric: 'ধারকত্ব (C)',
    chargeMetric: 'সঞ্চিত চার্জ (Q)',
    energyMetric: 'সঞ্চিত শক্তি (E)',
    fieldMetric: 'তড়িৎ ক্ষেত্র প্রাবল্য (E = V/d)',
    breakdownMarginMetric: 'ডাই-ইলেকট্রিক নিরাপত্তা অবস্থা',
    breakdownWarning: 'ডাই-ইলেকট্রিক ব্রেকডাউন! স্পার্কের ঝুঁকি!',
    normalStatus: 'নিরাপদ অপারেটিং জোন',
    reset: 'ডিফল্ট রিসেট',
    plateVisualTitle: 'সমান্তরাল পাত ও ডাই-ইলেকট্রিক পোলারাইজেশন দৃশ্য',
    topPlateLabel: 'ধনাত্মক পাত (+Q)',
    bottomPlateLabel: 'ঋণাত্মক পাত (-Q)',
    dipoleLabel: 'পোলারাইজড ডাই-ইলেকট্রিক ডাইপোল',
    fringeFieldLabel: 'ফ্রিন্জিং তড়িৎ ক্ষেত্র রেখা',
    formulaTitle: 'স্থিরতড়িৎ সমীকরণসমূহ',
    formulaText: 'C = (ε₀ · εr · A) / d  |  Q = C · V  |  E = V / d  |  U = ½ · C · V²  |  ε₀ = ৮.৮৫৪ × ১০⁻¹² F/m'
  }
};

const EPSILON_0 = 8.8541878128e-12; // F/m

export const ParallelPlateCapacitorAnimation: React.FC<ParallelPlateCapacitorAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const areaId = useId();
  const distId = useId();
  const voltId = useId();
  const matId = useId();
  const prefersReducedMotion = useReducedMotion();

  // State
  const [areaCm2, setAreaCm2] = useState<number>(100); // 100 cm² = 0.01 m²
  const [distanceMm, setDistanceMm] = useState<number>(2.0); // 2.0 mm = 0.002 m
  const [voltage, setVoltage] = useState<number>(100); // 100 V
  const [selectedMatId, setSelectedMatId] = useState<string>('mylar');

  const selectedMaterial = DIELECTRIC_MATERIALS.find(m => m.id === selectedMatId) || DIELECTRIC_MATERIALS[0];

  // Mathematical Calculations
  const areaM2 = (areaCm2 * 1e-4);
  const distanceM = (distanceMm * 1e-3);
  const capacitanceF = (EPSILON_0 * selectedMaterial.er * areaM2) / distanceM;
  const chargeC = capacitanceF * voltage;
  const energyJ = 0.5 * capacitanceF * Math.pow(voltage, 2);
  const electricFieldVperM = distanceM > 0 ? voltage / distanceM : 0;
  const electricFieldKVperMm = electricFieldVperM / 1e6; // V/mm / 1000 = kV/mm

  // Breakdown Threshold check (material dielectric strength in V/mm)
  const breakdownThresholdV = selectedMaterial.strength * distanceMm;
  const isBreakdown = voltage >= breakdownThresholdV;

  // Formatting helpers
  const formatCapacitance = (c: number) => {
    if (c >= 1e-6) return `${(c * 1e6).toFixed(2)} µF`;
    if (c >= 1e-9) return `${(c * 1e9).toFixed(2)} nF`;
    return `${(c * 1e12).toFixed(2)} pF`;
  };

  const formatCharge = (q: number) => {
    if (q >= 1e-6) return `${(q * 1e6).toFixed(2)} µC`;
    if (q >= 1e-9) return `${(q * 1e9).toFixed(2)} nC`;
    return `${(q * 1e12).toFixed(2)} pC`;
  };

  const formatEnergy = (u: number) => {
    if (u >= 1) return `${u.toFixed(3)} J`;
    if (u >= 1e-3) return `${(u * 1e3).toFixed(3)} mJ`;
    return `${(u * 1e6).toFixed(2)} µJ`;
  };

  const handleReset = () => {
    setAreaCm2(100);
    setDistanceMm(2.0);
    setVoltage(100);
    setSelectedMatId('mylar');
  };

  // Visual scaling
  const visualPlateWidth = Math.min(320, Math.max(160, 160 + (areaCm2 / 500) * 160));
  const visualGap = Math.min(100, Math.max(30, (distanceMm / 10) * 90 + 20));
  const dipoleCount = Math.min(12, Math.max(4, Math.floor(visualPlateWidth / 26)));

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      formulaText={t.formulaText}
    >
      {/* Control Sliders & Material Select */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
        {/* Area Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={areaId} className="text-slate-300 font-semibold">{t.plateAreaLabel}</label>
            <span className="font-mono text-cyan-400 font-bold">{areaCm2} cm²</span>
          </div>
          <input
            id={areaId}
            type="range"
            min="10"
            max="500"
            step="10"
            value={areaCm2}
            onChange={(e) => setAreaCm2(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>10 cm²</span>
            <span>500 cm²</span>
          </div>
        </div>

        {/* Distance Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={distId} className="text-slate-300 font-semibold">{t.plateDistanceLabel}</label>
            <span className="font-mono text-emerald-400 font-bold">{distanceMm.toFixed(1)} mm</span>
          </div>
          <input
            id={distId}
            type="range"
            min="0.2"
            max="10.0"
            step="0.1"
            value={distanceMm}
            onChange={(e) => setDistanceMm(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>0.2 mm</span>
            <span>10.0 mm</span>
          </div>
        </div>

        {/* Voltage Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={voltId} className="text-slate-300 font-semibold">{t.appliedVoltageLabel}</label>
            <span className="font-mono text-amber-400 font-bold">{voltage} V</span>
          </div>
          <input
            id={voltId}
            type="range"
            min="0"
            max="1000"
            step="10"
            value={voltage}
            onChange={(e) => setVoltage(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>0 V</span>
            <span>1000 V</span>
          </div>
        </div>

        {/* Dielectric Dropdown */}
        <div className="space-y-1.5">
          <label htmlFor={matId} className="text-xs text-slate-300 font-semibold block">{t.dielectricSelectLabel}</label>
          <select
            id={matId}
            value={selectedMatId}
            onChange={(e) => setSelectedMatId(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 text-xs text-cyan-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-cyan-400 font-sans"
          >
            {DIELECTRIC_MATERIALS.map((mat) => (
              <option key={mat.id} value={mat.id}>
                {currentLanguage === 'hi' ? mat.nameHi : currentLanguage === 'bn' ? mat.nameBn : mat.nameEn} (εr = {mat.er})
              </option>
            ))}
          </select>
          <div className="text-[10px] text-slate-400 font-mono flex justify-between">
            <span>εr: <strong className="text-cyan-300">{selectedMaterial.er}</strong></span>
            <span>E_max: {selectedMaterial.strength / 1000} kV/mm</span>
          </div>
        </div>
      </div>

      {/* Real-Time Measured Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <div className="bg-slate-950 p-3 rounded-xl border border-cyan-900/60 shadow-sm">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.capacitanceMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-cyan-300">
            {formatCapacitance(capacitanceF)}
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-emerald-900/60 shadow-sm">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.chargeMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-emerald-300">
            {formatCharge(chargeC)}
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-amber-900/60 shadow-sm">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.energyMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-amber-300">
            {formatEnergy(energyJ)}
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/60 shadow-sm">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
            <Gauge className="w-3.5 h-3.5 text-purple-400" />
            <span>{t.fieldMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-purple-300">
            {electricFieldKVperMm.toFixed(2)} kV/mm
          </div>
        </div>

        <div className={`col-span-2 sm:col-span-1 p-3 rounded-xl border shadow-sm ${
          isBreakdown
            ? 'bg-red-950/70 border-red-600 animate-pulse text-red-300'
            : 'bg-slate-950 border-slate-800 text-emerald-400'
        }`}>
          <div className="flex items-center gap-1.5 text-xs font-medium mb-1">
            {isBreakdown ? <AlertTriangle className="w-3.5 h-3.5 text-red-400" /> : <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{t.breakdownMarginMetric}</span>
          </div>
          <div className="text-xs sm:text-sm font-bold font-mono">
            {isBreakdown ? t.breakdownWarning : `${t.normalStatus} (${((voltage / breakdownThresholdV) * 100).toFixed(0)}% Stress)`}
          </div>
        </div>
      </div>

      {/* Interactive Graphic: Parallel Plate & Dipole Polarization */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-cyan-400" />
            {t.plateVisualTitle}
          </h4>
          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400"></span>+ Plate</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-400"></span>- Plate</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400"></span>Dipoles</span>
          </div>
        </div>

        <div className="w-full flex justify-center items-center py-4 overflow-x-auto">
          <svg
            viewBox="0 0 500 240"
            className="w-full max-w-xl h-auto select-none"
            aria-label="Parallel Plate Capacitor Simulation Visualization"
          >
            {/* Background Grid */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
              </pattern>
              <linearGradient id="dielectricGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#311042" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#ef4444" />
              </linearGradient>
            </defs>

            <rect x="10" y="10" width="480" height="220" fill="url(#grid)" rx="8" />

            {/* Connecting Wires */}
            <line x1="250" y1="18" x2="250" y2="40" stroke="#f59e0b" strokeWidth="3" />
            <line x1="250" y1={40 + 12 + visualGap + 12} x2="250" y2="225" stroke="#38bdf8" strokeWidth="3" />
            <circle cx="250" cy="18" r="4" fill="#f59e0b" />
            <circle cx="250" cy="225" r="4" fill="#38bdf8" />
            <text x="260" y="24" fill="#f59e0b" fontSize="10" fontWeight="bold">V+ (+{voltage}V)</text>
            <text x="260" y="228" fill="#38bdf8" fontSize="10" fontWeight="bold">0V (GND)</text>

            {/* Top Plate (Positive) */}
            <g transform={`translate(${250 - visualPlateWidth / 2}, 40)`}>
              <rect
                x="0"
                y="0"
                width={visualPlateWidth}
                height="12"
                rx="3"
                fill="#dc2626"
                stroke="#f87171"
                strokeWidth="1.5"
              />
              {/* Positive Charges on Plate */}
              {Array.from({ length: dipoleCount }).map((_, i) => (
                <text
                  key={`top-plus-${i}`}
                  x={(visualPlateWidth / (dipoleCount + 1)) * (i + 1)}
                  y="9"
                  fill="#ffffff"
                  fontSize="9"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  +
                </text>
              ))}
            </g>

            {/* Dielectric Medium Slab */}
            <g transform={`translate(${250 - visualPlateWidth / 2}, 52)`}>
              <rect
                x="0"
                y="0"
                width={visualPlateWidth}
                height={visualGap}
                fill="url(#dielectricGrad)"
                stroke="#6366f1"
                strokeWidth="1"
                strokeDasharray="4 2"
                rx="2"
              />
              <text
                x={visualPlateWidth / 2}
                y={visualGap / 2 + 3}
                fill="#a5b4fc"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
                opacity="0.85"
              >
                {selectedMaterial.nameEn} (εr = {selectedMaterial.er})
              </text>

              {/* Polarized Dipoles inside Dielectric */}
              {voltage > 0 && Array.from({ length: dipoleCount }).map((_, i) => {
                const cx = (visualPlateWidth / (dipoleCount + 1)) * (i + 1);
                const cy = visualGap / 2;
                return (
                  <g key={`dipole-${i}`}>
                    {/* Electric Field lines */}
                    <line
                      x1={cx}
                      y1="2"
                      x2={cx}
                      y2={visualGap - 2}
                      stroke="#818cf8"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      opacity={Math.min(1, 0.3 + (voltage / 1000) * 0.7)}
                    />
                    {/* Small Dipole Ellipse */}
                    {visualGap > 35 && (
                      <g transform={`translate(${cx}, ${cy})`}>
                        <ellipse cx="0" cy="0" rx="6" ry="10" fill="#4338ca" stroke="#c7d2fe" strokeWidth="0.8" />
                        <text x="0" y="-3" fill="#93c5fd" fontSize="7" fontWeight="bold" textAnchor="middle">-</text>
                        <text x="0" y="7" fill="#fca5a5" fontSize="7" fontWeight="bold" textAnchor="middle">+</text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Dielectric Breakdown Spark Animation */}
              {isBreakdown && (
                <path
                  d={`M ${visualPlateWidth * 0.3} 0 L ${visualPlateWidth * 0.35} ${visualGap * 0.3} L ${visualPlateWidth * 0.28} ${visualGap * 0.6} L ${visualPlateWidth * 0.32} ${visualGap}
                     M ${visualPlateWidth * 0.7} 0 L ${visualPlateWidth * 0.65} ${visualGap * 0.4} L ${visualPlateWidth * 0.72} ${visualGap * 0.7} L ${visualPlateWidth * 0.68} ${visualGap}`}
                  stroke="url(#sparkGrad)"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse"
                />
              )}
            </g>

            {/* Bottom Plate (Negative) */}
            <g transform={`translate(${250 - visualPlateWidth / 2}, ${52 + visualGap})`}>
              <rect
                x="0"
                y="0"
                width={visualPlateWidth}
                height="12"
                rx="3"
                fill="#2563eb"
                stroke="#60a5fa"
                strokeWidth="1.5"
              />
              {/* Negative Charges on Plate */}
              {Array.from({ length: dipoleCount }).map((_, i) => (
                <text
                  key={`bot-minus-${i}`}
                  x={(visualPlateWidth / (dipoleCount + 1)) * (i + 1)}
                  y="9"
                  fill="#ffffff"
                  fontSize="11"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  -
                </text>
              ))}
            </g>

            {/* Dimension Indicators */}
            {/* Distance d label */}
            <g transform={`translate(${250 + visualPlateWidth / 2 + 15}, 52)`}>
              <line x1="0" y1="0" x2="0" y2={visualGap} stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)" />
              <line x1="-5" y1="0" x2="5" y2="0" stroke="#94a3b8" strokeWidth="1" />
              <line x1="-5" y1={visualGap} x2="5" y2={visualGap} stroke="#94a3b8" strokeWidth="1" />
              <text x="8" y={visualGap / 2 + 4} fill="#38bdf8" fontSize="10" fontFamily="monospace">
                d = {distanceMm.toFixed(1)} mm
              </text>
            </g>

            {/* Plate Area A label */}
            <g transform={`translate(250, 28)`}>
              <text x="0" y="0" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="monospace">
                Plate Area A = {areaCm2} cm² ({t.topPlateLabel})
              </text>
            </g>
          </svg>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
