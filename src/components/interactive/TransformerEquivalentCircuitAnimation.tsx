import React, { useState } from 'react';
import { RotateCcw, Zap, Compass, Table, Sliders, CheckCircle2, ChevronRight } from 'lucide-react';

interface TransformerEquivalentCircuitAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

type ModelMode = 'exact' | 'approximate';
type ReferenceSide = 'primary-referred' | 'secondary-referred';
type PowerFactorType = 'lagging' | 'unity' | 'leading';

export const TransformerEquivalentCircuitAnimation: React.FC<TransformerEquivalentCircuitAnimationProps> = ({
  language = 'en'
}) => {
  const [modelMode, setModelMode] = useState<ModelMode>('exact');
  const [refSide, setRefSide] = useState<ReferenceSide>('primary-referred');
  const [powerFactorType, setPowerFactorType] = useState<PowerFactorType>('lagging');
  const [powerFactorVal, setPowerFactorVal] = useState<number>(0.8); // cos(θ)

  // Primary side parameters
  const [R1, setR1] = useState<number>(0.4); // Ohms
  const [X1, setX1] = useState<number>(1.2); // Ohms
  const [Rc, setRc] = useState<number>(1200); // Ohms (Core loss)
  const [Xm, setXm] = useState<number>(500); // Ohms (Magnetizing)

  // Secondary side parameters
  const [R2, setR2] = useState<number>(0.025); // Ohms
  const [X2, setX2] = useState<number>(0.075); // Ohms

  // Turns ratio a = N1 / N2
  const [turnsRatioA, setTurnsRatioA] = useState<number>(4.0); // e.g. 4:1 step-down
  const [loadResistanceRL, setLoadResistanceRL] = useState<number>(8.0); // Ohms
  const [supplyVoltageV1, setSupplyVoltageV1] = useState<number>(230); // Volts

  const handleReset = () => {
    setModelMode('exact');
    setRefSide('primary-referred');
    setPowerFactorType('lagging');
    setPowerFactorVal(0.8);
    setR1(0.4);
    setX1(1.2);
    setRc(1200);
    setXm(500);
    setR2(0.025);
    setX2(0.075);
    setTurnsRatioA(4.0);
    setLoadResistanceRL(8.0);
    setSupplyVoltageV1(230);
  };

  // Safe Math Computations
  const a = Math.max(0.1, turnsRatioA);
  const a2 = a * a;
  const safeV1 = Math.max(1, supplyVoltageV1);

  // Primary Referred Values
  const R2_prime = R2 * a2;
  const X2_prime = X2 * a2;
  const Req1 = R1 + R2_prime;
  const Xeq1 = X1 + X2_prime;
  const Zeq1 = Math.sqrt(Req1 * Req1 + Xeq1 * Xeq1);

  // Secondary Referred Values
  const R1_prime = R1 / a2;
  const X1_prime = X1 / a2;
  const Req2 = R1_prime + R2;
  const Xeq2 = X1_prime + X2;
  const Zeq2 = Math.sqrt(Req2 * Req2 + Xeq2 * Xeq2);

  // Shunt Core Branch Calculations
  const Ic = safeV1 / Math.max(1, Rc);
  const Im = safeV1 / Math.max(1, Xm);
  const I0 = Math.sqrt(Ic * Ic + Im * Im);
  const noLoadAngleDeg = (Math.atan2(Im, Ic) * 180) / Math.PI;

  // Load calculations
  const thetaRad = Math.acos(Math.min(1, Math.max(0.1, powerFactorVal)));
  const thetaDeg = (thetaRad * 180) / Math.PI;
  const sinTheta = Math.sin(thetaRad);

  // Approximate referred load current
  const referredLoadZ = Math.max(1, loadResistanceRL * a2);
  const I2_prime = safeV1 / (referredLoadZ + Zeq1);
  const I2 = I2_prime * a;

  // Voltage drops and regulation
  const deltaV_primary =
    powerFactorType === 'lagging'
      ? I2_prime * (Req1 * powerFactorVal + Xeq1 * sinTheta)
      : powerFactorType === 'leading'
      ? I2_prime * (Req1 * powerFactorVal - Xeq1 * sinTheta)
      : I2_prime * Req1;

  const V2_prime = Math.max(0, safeV1 - deltaV_primary);
  const V2_actual = V2_prime / a;
  const voltageRegPercent = V2_prime > 0 ? (deltaV_primary / V2_prime) * 100 : 0;

  const t = {
    title: {
      en: 'Interactive Transformer Equivalent Circuit & Phasor Analyzer',
      hi: 'इंटरैक्टिव ट्रांसफॉर्मर समतुल्य परिपथ एवं फेजर विश्लेषक',
      bn: 'ইন্টারেক্টিভ ট্রান্সফরমার ইকুইভ্যালেন্ট সার্কিট ও ফেজর বিশ্লেষক'
    },
    exactModel: { en: 'Exact Model', hi: 'सटीक मॉडल', bn: 'নির্ভুল মডেল' },
    approxModel: { en: 'Approximate Model', hi: 'अनुमानित मॉडल', bn: 'আনুমানিক মডেল' },
    priRef: { en: 'Primary Referred (Side 1)', hi: 'प्राइमरी संदर्भित (साइड 1)', bn: 'প্রাইমারি রেফার্ড (সাইড ১)' },
    secRef: { en: 'Secondary Referred (Side 2)', hi: 'सेकेंडरी संदर्भित (साइड 2)', bn: 'সেকেন্ডারি রেফার্ড (সাইড ২)' },
    lagging: { en: 'Lagging (Inductive)', hi: 'लैगिंग (प्रेरणिक)', bn: 'ল্যাগিং (ইনডাক্টিভ)' },
    unity: { en: 'Unity (Resistive)', hi: 'यूनिटी (प्रतिरोधक)', bn: 'ইউনিটি (রেজিস্ট্যান্স)' },
    leading: { en: 'Leading (Capacitive)', hi: 'लीडिंग (धारितीय)', bn: 'লিডিং (ক্যাপাসিটিভ)' },
    reset: { en: 'Reset Defaults', hi: 'रीसेट करें', bn: 'রিসেট করুন' },
    r1Label: { en: 'Primary Resistance R1', hi: 'प्राइमरी प्रतिरोध R1', bn: 'প্রাইমারি রোধ R1' },
    x1Label: { en: 'Primary Leakage X1', hi: 'प्राइमरी लीकेज X1', bn: 'প্রাইমারি লিকেজ X1' },
    r2Label: { en: 'Secondary Resistance R2', hi: 'सेकेंडरी प्रतिरोध R2', bn: 'সেকেন্ডারি রোধ R2' },
    x2Label: { en: 'Secondary Leakage X2', hi: 'सेकेंडरी लीकेज X2', bn: 'সেকেন্ডারি লিকেজ X2' },
    rcLabel: { en: 'Core Loss Rc', hi: 'कोर लॉस Rc', bn: 'কোর লস Rc' },
    xmLabel: { en: 'Magnetizing Xm', hi: 'मैग्नेटाइजिंग Xm', bn: 'ম্যাগনেটাইজিং Xm' },
    turnsLabel: { en: 'Turns Ratio a = N1/N2', hi: 'टर्न्स अनुपात a = N1/N2', bn: 'টার্ন অনুপাত a = N1/N2' },
    pfLabel: { en: 'Load Power Factor cos(θ)', hi: 'लोड पावर फैक्टर cos(θ)', bn: 'লোড পাওয়ার ফ্যাক্টর cos(θ)' }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl my-6">
      {/* Header & Modes */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
              {t.title[language]}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Zeq = Req + jXeq — Impedance Scaling: <span className="font-mono text-cyan-400">R2' = a²·R2, X2' = a²·X2</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-2">
          {/* Model Type */}
          <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setModelMode('exact')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                modelMode === 'exact' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={modelMode === 'exact'}
            >
              {t.exactModel[language]}
            </button>
            <button
              onClick={() => setModelMode('approximate')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                modelMode === 'approximate' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={modelMode === 'approximate'}
            >
              {t.approxModel[language]}
            </button>
          </div>

          {/* Reference Side */}
          <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setRefSide('primary-referred')}
              className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                refSide === 'primary-referred' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={refSide === 'primary-referred'}
            >
              {t.priRef[language]}
            </button>
            <button
              onClick={() => setRefSide('secondary-referred')}
              className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                refSide === 'secondary-referred' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={refSide === 'secondary-referred'}
            >
              {t.secRef[language]}
            </button>
          </div>

          {/* Power Factor Selector */}
          <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setPowerFactorType('lagging')}
              className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                powerFactorType === 'lagging' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={powerFactorType === 'lagging'}
            >
              {t.lagging[language]}
            </button>
            <button
              onClick={() => setPowerFactorType('unity')}
              className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                powerFactorType === 'unity' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={powerFactorType === 'unity'}
            >
              {t.unity[language]}
            </button>
            <button
              onClick={() => setPowerFactorType('leading')}
              className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
                powerFactorType === 'leading' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
              aria-pressed={powerFactorType === 'leading'}
            >
              {t.leading[language]}
            </button>
          </div>

          <button
            onClick={handleReset}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors"
            title={t.reset[language]}
            aria-label={t.reset[language]}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Diagram Area: Equivalent Circuit Schematic & Phasor Diagram */}
      <div className="my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Circuit Schematic */}
        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="text-xs font-mono text-cyan-400 font-bold mb-2 flex items-center justify-between">
            <span>
              {refSide === 'primary-referred' ? 'Primary-Referred Circuit (1st Side)' : 'Secondary-Referred Circuit (2nd Side)'} —{' '}
              {modelMode === 'exact' ? 'Exact T-Model' : 'Approximate Simplified Model'}
            </span>
            <span className="text-slate-400 font-normal">V1 = {supplyVoltageV1} V</span>
          </div>

          {/* SVG Schematic Render */}
          <svg viewBox="0 0 540 220" className="w-full h-auto max-h-[220px]">
            {/* Input Rails */}
            <circle cx="25" cy="45" r="4" fill="#38bdf8" />
            <circle cx="25" cy="175" r="4" fill="#38bdf8" />
            <text x="25" y="115" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
              {refSide === 'primary-referred' ? 'V1' : "V1'"}
            </text>

            <path d="M 25 45 L 65 45" stroke="#38bdf8" strokeWidth="2" />
            <path d="M 25 175 L 515 175" stroke="#64748b" strokeWidth="2" />

            {/* Primary Series Elements */}
            {/* R1 */}
            <g transform="translate(65, 45)">
              <rect x="0" y="-10" width="30" height="20" rx="3" fill="#1e293b" stroke="#fbbf24" strokeWidth="1.5" />
              <text x="15" y="-14" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">
                {refSide === 'primary-referred' ? `R1 (${R1}Ω)` : `R1' (${R1_prime.toFixed(3)}Ω)`}
              </text>
            </g>

            {/* X1 */}
            <g transform="translate(105, 45)">
              <path d="M 0 0 L 8 0 C 12 -12, 20 -12, 24 0 C 28 -12, 36 -12, 40 0 L 48 0" stroke="#38bdf8" strokeWidth="2" fill="none" />
              <text x="24" y="-14" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">
                {refSide === 'primary-referred' ? `jX1 (${X1}Ω)` : `jX1' (${X1_prime.toFixed(3)}Ω)`}
              </text>
            </g>

            {/* Shunt Branch Placement */}
            {/* If Exact: Shunt is in middle. If Approx: Shunt is at input terminals */}
            {modelMode === 'exact' ? (
              <g transform="translate(160, 45)">
                <circle cx="15" cy="0" r="3.5" fill="#fff" />
                <circle cx="15" cy="130" r="3.5" fill="#fff" />
                <path d="M 0 0 L 15 0 L 15 20" stroke="#38bdf8" strokeWidth="2" />
                <path d="M 15 110 L 15 130" stroke="#38bdf8" strokeWidth="2" />

                {/* Rc */}
                <rect x="-10" y="20" width="20" height="40" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                <text x="0" y="44" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">
                  Rc
                </text>
                <text x="0" y="70" textAnchor="middle" fill="#f59e0b" fontSize="7.5">
                  {Rc}Ω
                </text>

                {/* Xm */}
                <path d="M 35 20 C 45 25, 45 35, 35 40 C 45 45, 45 55, 35 60" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
                <text x="45" y="44" fill="#38bdf8" fontSize="8" fontWeight="bold">
                  jXm
                </text>
                <text x="45" y="70" fill="#38bdf8" fontSize="7.5">
                  {Xm}Ω
                </text>

                {/* Joins */}
                <path d="M 0 20 L -10 20 L 0 20 L 35 20" stroke="#94a3b8" strokeWidth="1" />
                <path d="M 0 60 L 15 60 L 15 110" stroke="#94a3b8" strokeWidth="1" />
                <path d="M 35 60 L 15 60" stroke="#94a3b8" strokeWidth="1" />

                <text x="15" y="122" textAnchor="middle" fill="#c084fc" fontSize="8" fontWeight="bold">
                  I0={I0.toFixed(2)}A
                </text>
              </g>
            ) : (
              /* Approximate Shunt at Input */
              <g transform="translate(45, 45)">
                <circle cx="5" cy="0" r="3.5" fill="#fff" />
                <circle cx="5" cy="130" r="3.5" fill="#fff" />
                <path d="M 5 0 L 5 20" stroke="#38bdf8" strokeWidth="1.5" />
                <path d="M 5 110 L 5 130" stroke="#38bdf8" strokeWidth="1.5" />

                <rect x="-8" y="20" width="14" height="35" rx="2" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
                <text x="-1" y="40" textAnchor="middle" fill="#f59e0b" fontSize="7">
                  Rc
                </text>
                <path d="M 18 20 C 26 25, 26 35, 18 40 C 26 45, 26 55, 18 55" stroke="#38bdf8" strokeWidth="1" fill="none" />
                <text x="24" y="40" fill="#38bdf8" fontSize="7">
                  Xm
                </text>

                <path d="M -8 20 L 18 20" stroke="#94a3b8" strokeWidth="1" />
                <path d="M -1 55 L 5 55 L 5 110" stroke="#94a3b8" strokeWidth="1" />
                <path d="M 18 55 L 5 55" stroke="#94a3b8" strokeWidth="1" />
              </g>
            )}

            {/* Secondary Series Elements */}
            {/* R2' */}
            <g transform="translate(250, 45)">
              <path d="M -70 0 L 0 0" stroke="#38bdf8" strokeWidth="2" />
              <rect x="0" y="-10" width="35" height="20" rx="3" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
              <text x="17" y="-14" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">
                {refSide === 'primary-referred' ? `R2' (${R2_prime.toFixed(2)}Ω)` : `R2 (${R2}Ω)`}
              </text>
            </g>

            {/* X2' */}
            <g transform="translate(295, 45)">
              <path d="M 0 0 L 8 0 C 12 -12, 20 -12, 24 0 C 28 -12, 36 -12, 40 0 L 48 0" stroke="#10b981" strokeWidth="2" fill="none" />
              <text x="24" y="-14" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">
                {refSide === 'primary-referred' ? `jX2' (${X2_prime.toFixed(2)}Ω)` : `jX2 (${X2}Ω)`}
              </text>
            </g>

            {/* Load Terminals and ZL */}
            <path d="M 345 45 L 430 45" stroke="#38bdf8" strokeWidth="2" />
            <g transform="translate(430, 45)">
              <rect x="0" y="15" width="30" height="100" rx="4" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
              <text x="15" y="60" textAnchor="middle" fill="#c084fc" fontSize="9" fontWeight="bold">
                {refSide === 'primary-referred' ? `ZL'` : `ZL`}
              </text>
              <text x="15" y="75" textAnchor="middle" fill="#94a3b8" fontSize="8">
                {refSide === 'primary-referred' ? `${referredLoadZ.toFixed(1)}Ω` : `${loadResistanceRL}Ω`}
              </text>
              <path d="M 15 0 L 15 15" stroke="#38bdf8" strokeWidth="2" />
              <path d="M 15 115 L 15 130" stroke="#64748b" strokeWidth="2" />
            </g>

            <circle cx="490" cy="45" r="4" fill="#c084fc" />
            <circle cx="490" cy="175" r="4" fill="#c084fc" />
            <text x="500" y="115" fill="#c084fc" fontSize="10" fontWeight="bold">
              {refSide === 'primary-referred' ? `V2' ≈ ${V2_prime.toFixed(1)}V` : `V2 ≈ ${V2_actual.toFixed(1)}V`}
            </text>

            {/* Parameter Banner */}
            <rect x="25" y="190" width="490" height="22" rx="4" fill="#090d16" stroke="#334155" />
            <text x="270" y="205" textAnchor="middle" fill="#38bdf8" fontSize="9" fontFamily="monospace">
              Req = {(refSide === 'primary-referred' ? Req1 : Req2).toFixed(3)} Ω | Xeq ={' '}
              {(refSide === 'primary-referred' ? Xeq1 : Xeq2).toFixed(3)} Ω | |Zeq| ={' '}
              {(refSide === 'primary-referred' ? Zeq1 : Zeq2).toFixed(3)} Ω
            </text>
          </svg>
        </div>

        {/* Right: Phasor Diagram Visualization */}
        <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="text-xs font-mono text-emerald-400 font-bold mb-2 flex items-center justify-between">
            <span>
              Phasor Diagram ({powerFactorType.toUpperCase()} PF = {powerFactorVal.toFixed(2)})
            </span>
            <span className="text-slate-400 font-normal">θ = {thetaDeg.toFixed(1)}°</span>
          </div>

          {/* SVG Phasor Polar Display */}
          <svg viewBox="0 0 320 200" className="w-full h-auto max-h-[200px]">
            <defs>
              <marker id="arrowCyan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#38bdf8" />
              </marker>
              <marker id="arrowEmerald" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#10b981" />
              </marker>
              <marker id="arrowAmber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#fbbf24" />
              </marker>
              <marker id="arrowPurple" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <polygon points="0 0, 6 3, 0 6" fill="#c084fc" />
              </marker>
            </defs>

            {/* Origin (0,0) mapped to (30, 160) */}
            {/* Reference V2' Vector along horizontal */}
            <line x1="30" y1="150" x2="190" y2="150" stroke="#c084fc" strokeWidth="2.5" markerEnd="url(#arrowPurple)" />
            <text x="195" y="154" fill="#c084fc" fontSize="9" fontWeight="bold">
              V2'
            </text>

            {/* Current I2' Vector */}
            {powerFactorType === 'lagging' ? (
              <line x1="30" y1="150" x2="110" y2="180" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowEmerald)" />
            ) : powerFactorType === 'leading' ? (
              <line x1="30" y1="150" x2="110" y2="120" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowEmerald)" />
            ) : (
              <line x1="30" y1="150" x2="120" y2="150" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowEmerald)" />
            )}
            <text x="115" y={powerFactorType === 'lagging' ? 190 : 120} fill="#10b981" fontSize="9" fontWeight="bold">
              I2'
            </text>

            {/* IR Drop (Parallel to I2') */}
            {powerFactorType === 'lagging' ? (
              <g>
                {/* I2'Req drop */}
                <line x1="190" y1="150" x2="225" y2="140" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowAmber)" />
                <text x="210" y="132" fill="#fbbf24" fontSize="8">
                  I2'Req
                </text>
                {/* jI2'Xeq drop perpendicular (up-left) */}
                <line x1="225" y1="140" x2="215" y2="70" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowCyan)" />
                <text x="235" y="95" fill="#38bdf8" fontSize="8">
                  jI2'Xeq
                </text>
                {/* Resultant V1 Vector */}
                <line x1="30" y1="150" x2="215" y2="70" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="5 3" markerEnd="url(#arrowCyan)" />
                <text x="120" y="95" fill="#ffffff" fontSize="10" fontWeight="bold">
                  V1
                </text>
              </g>
            ) : powerFactorType === 'leading' ? (
              <g>
                {/* I2'Req drop (up-right) */}
                <line x1="190" y1="150" x2="220" y2="135" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowAmber)" />
                {/* jI2'Xeq drop perpendicular (down-right) */}
                <line x1="220" y1="135" x2="245" y2="175" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowCyan)" />
                {/* Resultant V1 */}
                <line x1="30" y1="150" x2="245" y2="175" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="5 3" markerEnd="url(#arrowCyan)" />
                <text x="135" y="175" fill="#ffffff" fontSize="10" fontWeight="bold">
                  V1
                </text>
              </g>
            ) : (
              /* Unity PF */
              <g>
                <line x1="190" y1="150" x2="230" y2="150" stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowAmber)" />
                <line x1="230" y1="150" x2="230" y2="90" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrowCyan)" />
                <line x1="30" y1="150" x2="230" y2="90" stroke="#ffffff" strokeWidth="2.5" strokeDasharray="5 3" markerEnd="url(#arrowCyan)" />
                <text x="125" y="110" fill="#ffffff" fontSize="10" fontWeight="bold">
                  V1
                </text>
              </g>
            )}

            {/* Formula note */}
            <text x="30" y="30" fill="#94a3b8" fontSize="8.5" fontFamily="monospace">
              V1 = V2' + I2'(Req + jXeq)
            </text>
          </svg>

          {/* Voltage Regulation Telemetry */}
          <div className="mt-2 p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-400">Voltage Regulation:</span>{' '}
              <strong className="text-cyan-300 font-mono">{voltageRegPercent.toFixed(2)}%</strong>
            </div>
            <div>
              <span className="text-slate-400">I2' Current:</span>{' '}
              <strong className="text-emerald-300 font-mono">{I2_prime.toFixed(2)} A</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Control Sliders Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-xs">
        {/* Turns Ratio a */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300 font-medium">
            <label htmlFor="eq-turns">{t.turnsLabel[language]}</label>
            <span className="font-mono text-cyan-400 font-bold">{turnsRatioA.toFixed(2)}</span>
          </div>
          <input
            id="eq-turns"
            type="range"
            min="1"
            max="10"
            step="0.5"
            value={turnsRatioA}
            onChange={(e) => setTurnsRatioA(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            aria-label={t.turnsLabel[language]}
          />
        </div>

        {/* Primary Resistance R1 */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300 font-medium">
            <label htmlFor="eq-r1">{t.r1Label[language]}</label>
            <span className="font-mono text-amber-400 font-bold">{R1.toFixed(2)} Ω</span>
          </div>
          <input
            id="eq-r1"
            type="range"
            min="0.05"
            max="2.0"
            step="0.05"
            value={R1}
            onChange={(e) => setR1(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            aria-label={t.r1Label[language]}
          />
        </div>

        {/* Primary Leakage X1 */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300 font-medium">
            <label htmlFor="eq-x1">{t.x1Label[language]}</label>
            <span className="font-mono text-blue-400 font-bold">{X1.toFixed(2)} Ω</span>
          </div>
          <input
            id="eq-x1"
            type="range"
            min="0.1"
            max="5.0"
            step="0.1"
            value={X1}
            onChange={(e) => setX1(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            aria-label={t.x1Label[language]}
          />
        </div>

        {/* Load Power Factor cos(θ) */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300 font-medium">
            <label htmlFor="eq-pf">{t.pfLabel[language]}</label>
            <span className="font-mono text-emerald-400 font-bold">{powerFactorVal.toFixed(2)}</span>
          </div>
          <input
            id="eq-pf"
            type="range"
            min="0.2"
            max="1.0"
            step="0.05"
            value={powerFactorVal}
            onChange={(e) => setPowerFactorVal(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            aria-label={t.pfLabel[language]}
          />
        </div>
      </div>
    </div>
  );
};
