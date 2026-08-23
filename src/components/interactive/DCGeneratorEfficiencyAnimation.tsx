import React, { useState } from 'react';
import { Zap, RotateCcw, Activity, ArrowRight, Gauge, CheckCircle2, Sliders, ShieldAlert } from 'lucide-react';

interface DCGeneratorEfficiencyAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

export const DCGeneratorEfficiencyAnimation: React.FC<DCGeneratorEfficiencyAnimationProps> = ({ language = 'en' }) => {
  // Input parameters
  const [mechInputKw, setMechInputKw] = useState<number>(25); // Mechanical shaft input in kW
  const [armatureCurrent, setArmatureCurrent] = useState<number>(80); // Ia in Amperes
  const [armatureResistance, setArmatureResistance] = useState<number>(0.15); // Ra in Ohms
  const [fieldLossW, setFieldLossW] = useState<number>(450); // Shunt field loss in Watts
  const [coreLossW, setCoreLossW] = useState<number>(650); // Hysteresis + Eddy current in Watts
  const [mechLossW, setMechLossW] = useState<number>(500); // Friction + Windage in Watts
  const [brushDropV, setBrushDropV] = useState<number>(2.0); // Total brush voltage drop in Volts

  // Ensure safe numeric values
  const safeMechInputW = Math.max(1000, mechInputKw * 1000);
  const safeIa = Math.max(0.1, armatureCurrent);
  const safeRa = Math.max(0.01, armatureResistance);
  const safeFieldW = Math.max(0, fieldLossW);
  const safeCoreW = Math.max(0, coreLossW);
  const safeMechLossW = Math.max(0, mechLossW);
  const safeBrushDropV = Math.max(0, brushDropV);

  // Power calculations
  // 1. Mechanical Rotational Losses
  const totalRotationalLossW = safeMechLossW + safeCoreW;
  
  // 2. Gross Electromagnetic Converted Power
  const grossElecPowerW = Math.max(0, safeMechInputW - totalRotationalLossW);

  // 3. Electrical Copper & Brush Losses
  const armCopperLossW = Math.pow(safeIa, 2) * safeRa;
  const brushLossW = safeBrushDropV * safeIa;
  const totalElectricalLossW = armCopperLossW + safeFieldW + brushLossW;

  // 4. Terminal Electrical Output Power
  const terminalOutputW = Math.max(0, grossElecPowerW - totalElectricalLossW);
  const terminalOutputKw = terminalOutputW / 1000;

  // 5. Total Losses & Efficiency
  const totalLossesW = totalRotationalLossW + totalElectricalLossW;
  const efficiency = safeMechInputW > 0 ? Math.min(100, Math.max(0, (terminalOutputW / safeMechInputW) * 100)) : 0;

  // 6. Constant vs Variable Losses
  const constantLossesW = safeCoreW + safeMechLossW + safeFieldW;
  const variableLossesW = armCopperLossW + brushLossW;

  // 7. Maximum Efficiency Current Condition: Variable Copper Loss = Constant Loss
  // Ia_max = sqrt(P_constant / Ra)
  const currentAtMaxEff = Math.sqrt(constantLossesW / safeRa);
  const isNearMaxEff = Math.abs(safeIa - currentAtMaxEff) < 8;

  const handleReset = () => {
    setMechInputKw(25);
    setArmatureCurrent(80);
    setArmatureResistance(0.15);
    setFieldLossW(450);
    setCoreLossW(650);
    setMechLossW(500);
    setBrushDropV(2.0);
  };

  const labels = {
    en: {
      title: 'DC Generator Power Flow & Efficiency Simulator',
      subtitle: 'Analyze stage-by-stage energy conversion from mechanical shaft input to terminal electrical output, loss segregation, and maximum efficiency operating point.',
      reset: 'Reset Defaults',
      mechInput: 'Mechanical Input Power (Pin)',
      armCurrent: 'Armature Current (Ia)',
      armResistance: 'Armature Resistance (Ra)',
      fieldLoss: 'Shunt Field Loss (Psh)',
      coreLoss: 'Iron / Core Loss (Pcore)',
      mechLoss: 'Friction & Windage Loss (Pmech)',
      brushDrop: 'Brush Contact Drop (Vbrush)',
      stage1: '1. Mechanical Input (Shaft)',
      stage2: '2. Gross Converted (Eg · Ia)',
      stage3: '3. Terminal Output (V · IL)',
      lossesRot: 'Rotational Losses',
      lossesElec: 'Copper & Brush Losses',
      efficiencyBadge: 'Overall Commercial Efficiency (η)',
      constantLossesBadge: 'Constant Losses (Pc)',
      variableLossesBadge: 'Variable Losses (Pv)',
      maxEffPoint: 'Max Efficiency Condition',
      maxEffHelp: 'Max efficiency occurs when Variable Copper Loss (Ia²Ra) = Constant Losses (Pc).',
      maxEffCurrent: 'Optimum Current for Max η',
      balancedNote: 'Optimal Balance: Variable loss matches Constant loss within ±8A'
    },
    hi: {
      title: 'डीसी जनरेटर पावर फ्लो एवं दक्षता सिमुलेटर',
      subtitle: 'शाफ्ट यांत्रिक इनपुट से टर्मिनल विद्युत आउटपुट तक चरण-दर-चरण ऊर्जा रूपांतरण, हानियों का वर्गीकरण एवं अधिकतम दक्षता बिंदु का विश्लेषण करें।',
      reset: 'डिफ़ॉल्ट रीसेट',
      mechInput: 'यांत्रिक इनपुट शक्ति (Pin)',
      armCurrent: 'आर्मेचर धारा (Ia)',
      armResistance: 'आर्मेचर प्रतिरोध (Ra)',
      fieldLoss: 'शंट फील्ड हानि (Psh)',
      coreLoss: 'लौह / कोर हानि (Pcore)',
      mechLoss: 'घर्षण एवं विंडेज हानि (Pmech)',
      brushDrop: 'ब्रश वोल्टेज ड्रॉप (Vbrush)',
      stage1: '1. यांत्रिक इनपुट (शाफ्ट)',
      stage2: '2. कुल उत्पन्न शक्ति (Eg · Ia)',
      stage3: '3. टर्मिनल विद्युत आउटपुट (V · IL)',
      lossesRot: 'घूर्णन हानियाँ',
      lossesElec: 'कॉपर एवं ब्रश हानियाँ',
      efficiencyBadge: 'व्यावसायिक दक्षता (η)',
      constantLossesBadge: 'स्थिर हानियाँ (Pc)',
      variableLossesBadge: 'परिवर्तनीय हानियाँ (Pv)',
      maxEffPoint: 'अधिकतम दक्षता की शर्त',
      maxEffHelp: 'अधिकतम दक्षता तब होती है जब परिवर्तनीय कॉपर हानि (Ia²Ra) = स्थिर हानि (Pc) हो।',
      maxEffCurrent: 'अधिकतम η हेतु अनुकूलतम धारा',
      balancedNote: 'अनुकूलतम संतुलन: परिवर्तनीय हानि स्थिर हानि के लगभग बराबर है'
    },
    bn: {
      title: 'ডিসি জেনারেটর পাওয়ার ফ্লো ও কর্মদক্ষতা সিমুলেটর',
      subtitle: 'শ্যাফট যান্ত্রিক ইনপুট থেকে টার্মিনাল বৈদ্যুতিক আউটপুট পর্যন্ত শক্তি রূপান্তর, ক্ষতির বিভাজন এবং সর্বোচ্চ কর্মদক্ষতা বিন্দু বিশ্লেষণ করুন।',
      reset: 'রিসেট ডিফল্ট',
      mechInput: 'যান্ত্রিক ইনপুট ক্ষমতা (Pin)',
      armCurrent: 'আর্মেচার কারেন্ট (Ia)',
      armResistance: 'আর্মেচার রোধ (Ra)',
      fieldLoss: 'শান্ট ফিল্ড লস (Psh)',
      coreLoss: 'আয়রন / কোর লস (Pcore)',
      mechLoss: 'ঘর্ষণ ও উইন্ডেজ লস (Pmech)',
      brushDrop: 'ব্রাশ ভোল্টেজ ড্রপ (Vbrush)',
      stage1: '১. যান্ত্রিক ইনপুট (শ্যাফট)',
      stage2: '২. মোট রূপান্তরিত শক্তি (Eg · Ia)',
      stage3: '৩. টার্মিনাল বৈদ্যুতিক আউটপুট (V · IL)',
      lossesRot: 'ঘূর্ণনজনিত ক্ষতি',
      lossesElec: 'কপার ও ব্রাশজনিত ক্ষতি',
      efficiencyBadge: 'সামগ্রিক কর্মদক্ষতা (η)',
      constantLossesBadge: 'ধ্রুব ক্ষতি (Pc)',
      variableLossesBadge: 'পরিবর্তনশীল ক্ষতি (Pv)',
      maxEffPoint: 'সর্বোচ্চ দক্ষতার শর্ত',
      maxEffHelp: 'সর্বোচ্চ দক্ষতা অর্জিত হয় যখন পরিবর্তনশীল কপার ক্ষতি (Ia²Ra) = ধ্রুব ক্ষতি (Pc) হয়।',
      maxEffCurrent: 'সর্বোচ্চ η-এর জন্য অনুকূল কারেন্ট',
      balancedNote: 'অনুকূল ভারসাম্য: পরিবর্তনশীল ক্ষতি ও ধ্রুব ক্ষতি প্রায় সমান'
    }
  }[language];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 md:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg md:text-xl font-bold text-slate-100">{labels.title}</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>
        <button
          onClick={handleReset}
          aria-label={labels.reset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 w-fit"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {labels.reset}
        </button>
      </div>

      {/* Main Grid: Sankey Power Flow Visualization + Sliders & Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Power Flow Diagram (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-xl p-4 flex flex-col space-y-4">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
            <span>Sankey Energy Conversion Flow</span>
            <span className="text-emerald-400 font-mono">η = {efficiency.toFixed(2)}%</span>
          </div>

          {/* SVG Power Flow Flowchart */}
          <div className="w-full overflow-hidden">
            <svg viewBox="0 0 540 270" className="w-full h-auto max-h-[260px]" aria-label="DC Generator Power Flow Diagram">
              {/* Stage 1: Mechanical Input Block */}
              <g transform="translate(15, 30)">
                <rect x="0" y="0" width="130" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                <text x="65" y="24" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">Shaft Input</text>
                <text x="65" y="46" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace">
                  {(safeMechInputW / 1000).toFixed(2)} kW
                </text>
                <text x="65" y="60" textAnchor="middle" fill="#94a3b8" fontSize="8">Pin (Mechanical)</text>
              </g>

              {/* Arrow 1 */}
              <line x1="145" y1="65" x2="195" y2="65" stroke="#38bdf8" strokeWidth="3" strokeDasharray="4,2" />
              <polygon points="195,60 205,65 195,70" fill="#38bdf8" />

              {/* Rotational Losses Branch downward */}
              <path d="M 170 65 L 170 160" stroke="#f43f5e" strokeWidth="2.5" />
              <polygon points="166,160 170,170 174,160" fill="#f43f5e" />
              <rect x="110" y="170" width="120" height="60" rx="6" fill="#450a0a" stroke="#f43f5e" strokeWidth="1.5" />
              <text x="170" y="186" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="bold">Rotational Losses</text>
              <text x="170" y="202" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">
                {totalRotationalLossW.toFixed(0)} W
              </text>
              <text x="170" y="218" textAnchor="middle" fill="#fca5a5" fontSize="7.5">
                Core: {safeCoreW}W | Mech: {safeMechLossW}W
              </text>

              {/* Stage 2: Electromagnetic Converted Power */}
              <g transform="translate(205, 30)">
                <rect x="0" y="0" width="130" height="70" rx="8" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
                <text x="65" y="24" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">Electromagnetic</text>
                <text x="65" y="46" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="monospace">
                  {(grossElecPowerW / 1000).toFixed(2)} kW
                </text>
                <text x="65" y="60" textAnchor="middle" fill="#94a3b8" fontSize="8">Pdev = Eg · Ia</text>
              </g>

              {/* Arrow 2 */}
              <line x1="335" y1="65" x2="385" y2="65" stroke="#fbbf24" strokeWidth="3" strokeDasharray="4,2" />
              <polygon points="385,60 395,65 385,70" fill="#fbbf24" />

              {/* Copper Losses Branch downward */}
              <path d="M 360 65 L 360 160" stroke="#fb923c" strokeWidth="2.5" />
              <polygon points="356,160 360,170 364,160" fill="#fb923c" />
              <rect x="290" y="170" width="140" height="60" rx="6" fill="#431407" stroke="#fb923c" strokeWidth="1.5" />
              <text x="360" y="186" textAnchor="middle" fill="#fed7aa" fontSize="9" fontWeight="bold">Copper & Brush Losses</text>
              <text x="360" y="202" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">
                {totalElectricalLossW.toFixed(0)} W
              </text>
              <text x="360" y="218" textAnchor="middle" fill="#fed7aa" fontSize="7.5">
                Ia²Ra: {armCopperLossW.toFixed(0)}W | Fld: {safeFieldW}W
              </text>

              {/* Stage 3: Terminal Electrical Output */}
              <g transform="translate(395, 30)">
                <rect x="0" y="0" width="130" height="70" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2.5" />
                <text x="65" y="24" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontWeight="bold">Terminal Output</text>
                <text x="65" y="46" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" fontFamily="monospace">
                  {terminalOutputKw.toFixed(2)} kW
                </text>
                <text x="65" y="60" textAnchor="middle" fill="#a7f3d0" fontSize="8">Pout = V · IL</text>
              </g>
            </svg>
          </div>

          {/* Loss Breakdown Horizontal Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>Loss Segregation Distribution (Total Losses: {totalLossesW.toFixed(0)} W)</span>
              <span>{(totalLossesW / safeMechInputW * 100).toFixed(1)}% of Input</span>
            </div>
            <div className="h-3.5 bg-slate-800 rounded-full overflow-hidden flex" role="progressbar" aria-valuenow={efficiency} aria-valuemin={0} aria-valuemax={100}>
              {/* Output percentage */}
              <div
                style={{ width: `${Math.max(0, efficiency)}%` }}
                className="bg-emerald-500 h-full transition-all duration-300"
                title={`Useful Output: ${efficiency.toFixed(1)}%`}
              />
              {/* Armature Cu Loss */}
              <div
                style={{ width: `${(armCopperLossW / safeMechInputW) * 100}%` }}
                className="bg-amber-500 h-full transition-all duration-300"
                title={`Armature Cu: ${((armCopperLossW / safeMechInputW) * 100).toFixed(1)}%`}
              />
              {/* Field Loss */}
              <div
                style={{ width: `${(safeFieldW / safeMechInputW) * 100}%` }}
                className="bg-orange-500 h-full transition-all duration-300"
                title={`Field Cu: ${((safeFieldW / safeMechInputW) * 100).toFixed(1)}%`}
              />
              {/* Core Loss */}
              <div
                style={{ width: `${(safeCoreW / safeMechInputW) * 100}%` }}
                className="bg-rose-500 h-full transition-all duration-300"
                title={`Core Loss: ${((safeCoreW / safeMechInputW) * 100).toFixed(1)}%`}
              />
              {/* Mech Loss */}
              <div
                style={{ width: `${(safeMechLossW / safeMechInputW) * 100}%` }}
                className="bg-red-700 h-full transition-all duration-300"
                title={`Mech Loss: ${((safeMechLossW / safeMechInputW) * 100).toFixed(1)}%`}
              />
            </div>
            {/* Bar Legend */}
            <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-400 pt-1">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 inline-block" /> Output ({efficiency.toFixed(1)}%)</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-amber-500 inline-block" /> Armature Cu ({armCopperLossW.toFixed(0)}W)</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-orange-500 inline-block" /> Field Cu ({safeFieldW}W)</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-rose-500 inline-block" /> Core ({safeCoreW}W)</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-red-700 inline-block" /> Mech ({safeMechLossW}W)</span>
            </div>
          </div>
        </div>

        {/* Right: Telemetry & Interactive Sliders (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Main Efficiency Telemetry Card */}
          <div className="bg-emerald-950/40 border-2 border-emerald-500/50 rounded-xl p-4 shadow-lg space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-300">
                {labels.efficiencyBadge}
              </span>
              <Gauge className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-3xl md:text-4xl font-extrabold font-mono text-emerald-400">
              {efficiency.toFixed(2)}%
            </div>
            <div className="text-xs text-slate-300">
              Pout: <span className="font-mono font-bold text-white">{terminalOutputKw.toFixed(2)} kW</span> | Losses: <span className="font-mono font-bold text-rose-300">{totalLossesW.toFixed(0)} W</span>
            </div>
          </div>

          {/* Maximum Efficiency Check Card */}
          <div className={`border rounded-xl p-3 text-xs transition-colors ${
            isNearMaxEff ? 'bg-amber-950/40 border-amber-500/60 text-amber-200' : 'bg-slate-800/80 border-slate-700 text-slate-300'
          }`}>
            <div className="flex items-center justify-between font-bold mb-1">
              <span className="flex items-center gap-1.5">
                {isNearMaxEff ? <CheckCircle2 className="w-4 h-4 text-amber-400" /> : <Activity className="w-4 h-4 text-slate-400" />}
                {labels.maxEffPoint}
              </span>
              <span className="font-mono text-amber-400">Ia(max η) = {currentAtMaxEff.toFixed(1)} A</span>
            </div>
            <p className="text-[11px] text-slate-400">{labels.maxEffHelp}</p>
            <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-700/60">
              <div>
                <span className="text-slate-400">Constant (Pc): </span>
                <span className="font-mono font-bold text-sky-300">{constantLossesW.toFixed(0)} W</span>
              </div>
              <div>
                <span className="text-slate-400">Variable (Pv): </span>
                <span className="font-mono font-bold text-amber-300">{variableLossesW.toFixed(0)} W</span>
              </div>
            </div>
            {isNearMaxEff && (
              <div className="mt-1.5 text-[10px] text-amber-300 font-semibold">
                ✓ {labels.balancedNote}
              </div>
            )}
          </div>

          {/* Sliders Accordion Container */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <Sliders className="w-4 h-4 text-emerald-400" />
              <span>Machine Operating Parameters</span>
            </div>

            {/* Mech Input Power */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.mechInput}</span>
                <span className="font-mono text-sky-400 font-bold">{mechInputKw} kW</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={mechInputKw}
                aria-label={labels.mechInput}
                onChange={(e) => setMechInputKw(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>

            {/* Armature Current */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.armCurrent}</span>
                <span className="font-mono text-emerald-400 font-bold">{armatureCurrent} A</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="2"
                value={armatureCurrent}
                aria-label={labels.armCurrent}
                onChange={(e) => setArmatureCurrent(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Armature Resistance */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.armResistance}</span>
                <span className="font-mono text-amber-400 font-bold">{armatureResistance} Ω</span>
              </div>
              <input
                type="range"
                min="0.02"
                max="0.40"
                step="0.01"
                value={armatureResistance}
                aria-label={labels.armResistance}
                onChange={(e) => setArmatureResistance(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Core & Mechanical Loss Controls in 2 cols */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Pcore</span>
                  <span className="font-mono text-rose-400">{coreLossW} W</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="1500"
                  step="50"
                  value={coreLossW}
                  aria-label={labels.coreLoss}
                  onChange={(e) => setCoreLossW(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>
              <div>
                <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                  <span>Pmech</span>
                  <span className="font-mono text-red-400">{mechLossW} W</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="1200"
                  step="50"
                  value={mechLossW}
                  aria-label={labels.mechLoss}
                  onChange={(e) => setMechLossW(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
