import React, { useState } from 'react';
import { Language } from '../../types';
import { Zap, Gauge, Sliders, Info, CheckCircle2, TrendingUp } from 'lucide-react';

interface TransformerLossEfficiencyAnimationProps {
  language?: Language;
}

export const TransformerLossEfficiencyAnimation: React.FC<TransformerLossEfficiencyAnimationProps> = ({
  language = 'en'
}) => {
  // State
  const [kvaRating, setKvaRating] = useState<number>(50); // kVA
  const [loadFraction, setLoadFraction] = useState<number>(0.8); // 80% load
  const [powerFactor, setPowerFactor] = useState<number>(0.85);
  const [pfType, setPfType] = useState<'lagging' | 'unity' | 'leading'>('lagging');
  const [coreLoss, setCoreLoss] = useState<number>(450); // W
  const [fullLoadCuLoss, setFullLoadCuLoss] = useState<number>(1200); // W
  const [r02, setR02] = useState<number>(0.04); // Ω
  const [x02, setX02] = useState<number>(0.12); // Ω
  const [v2Nominal] = useState<number>(240); // V

  // Translations
  const t = {
    en: {
      title: 'Interactive Transformer Losses, Efficiency & Voltage Regulation Simulator',
      subtitle: 'Analyze power flow, loss partitioning, maximum efficiency condition, and terminal voltage regulation in real time',
      rating: 'Rated Capacity',
      loadPercent: 'Load Level (x)',
      pf: 'Power Factor (cosΦ)',
      pfType: 'PF Nature',
      lag: 'Lagging (Inductive)',
      uni: 'Unity (Resistive)',
      lead: 'Leading (Capacitive)',
      coreLossLabel: 'Iron/Core Loss (P_core)',
      cuLossLabel: 'Full-Load Copper Loss (P_cu(FL))',
      r02Label: 'R02 (Sec. Resistance)',
      x02Label: 'X02 (Sec. Reactance)',
      powerFlow: 'Real-Time Power Flow Partitioning',
      inputPower: 'Input Power (Pin)',
      coreLossCard: 'Core Loss (P_core = Ph + Pe)',
      cuLossCard: 'Copper Loss (x²·P_cu(FL))',
      outputPower: 'Active Output (Pout)',
      efficiencyTitle: 'Calculated Commercial Efficiency (η)',
      maxEffTitle: 'Maximum Efficiency Condition',
      maxEffAt: 'Max Efficiency Occurs at',
      maxEffVal: 'Peak Efficiency at 1.0 PF',
      vrTitle: 'Secondary Voltage Regulation',
      terminalV: 'Full-Load Terminal Voltage',
      vrPercent: 'Percentage Voltage Regulation (%VR)',
      vrStatusDrop: 'Voltage Drop (Inductive Load)',
      vrStatusZero: 'Zero Voltage Regulation (Perfect Regulation)',
      vrStatusRise: 'Voltage Rise (Ferranti/Capacitive Effect)',
      lossEqualNote: 'Peak efficiency occurs when Variable Copper Loss = Constant Iron Loss (Pcu = Pcore).'
    },
    hi: {
      title: 'ट्रांसफॉर्मर हानियाँ, दक्षता एवं वोल्टेज रेगुलेशन सिमुलेटर',
      subtitle: 'पावर फ्लो, हानि विभाजन, अधिकतम दक्षता की स्थिति तथा टर्मिनल वोल्टेज रेगुलेशन का सजीव विश्लेषण',
      rating: 'रेटेड क्षमता',
      loadPercent: 'लोड स्तर (x)',
      pf: 'पावर फैक्टर (cosΦ)',
      pfType: 'पावर फैक्टर प्रकृति',
      lag: 'लैगिंग (प्रेरणिक)',
      uni: 'यूनिटी (प्रतिरोधी)',
      lead: 'लीडिंग (धारिता)',
      coreLossLabel: 'लौह/कोर हानि (P_core)',
      cuLossLabel: 'फुल-लोड कॉपर हानि (P_cu(FL))',
      r02Label: 'R02 (सेकेंडरी प्रतिरोध)',
      x02Label: 'X02 (सेकेंडरी रिएक्टेंस)',
      powerFlow: 'सजीव पावर फ्लो विभाजन',
      inputPower: 'इनपुट पावर (Pin)',
      coreLossCard: 'कोर हानि (P_core = Ph + Pe)',
      cuLossCard: 'कॉपर हानि (x²·P_cu)',
      outputPower: 'आउटपुट पावर (Pout)',
      efficiencyTitle: 'गणना की गई ट्रांसफॉर्मर दक्षता (η)',
      maxEffTitle: 'अधिकतम दक्षता की स्थिति',
      maxEffAt: 'अधिकतम दक्षता लोड',
      maxEffVal: 'यूनिटी pf पर शिखर दक्षता',
      vrTitle: 'सेकेंडरी वोल्टेज रेगुलेशन',
      terminalV: 'लोड टर्मिनल वोल्टेज',
      vrPercent: 'प्रतिशत वोल्टेज रेगुलेशन (%VR)',
      vrStatusDrop: 'वोल्टेज ड्रॉप (लैगिंग लोड)',
      vrStatusZero: 'शून्य रेगुलेशन (आदर्श विनियमन)',
      vrStatusRise: 'वोल्टेज वृद्धि (कैपेसिटिव प्रभाव)',
      lossEqualNote: 'अधिकतम दक्षता तब मिलती है जब कॉपर हानि = कोर हानि (Pcu = Pcore)।'
    },
    bn: {
      title: 'ট্রান্সফর্মার অপচয়, কর্মদক্ষতা ও ভোল্টেজ রেগুলেশন সিমুলেটর',
      subtitle: 'পাওয়ার ফ্লো, অপচয় বিভাজন, সর্বোচ্চ দক্ষতার শর্ত এবং ভোল্টেজ রেগুলেশনের লাইভ বিশ্লেষণ',
      rating: 'রেটেড ক্ষমতা',
      loadPercent: 'লোড স্তর (x)',
      pf: 'পাওয়ার ফ্যাক্টর (cosΦ)',
      pfType: 'পাওয়ার ফ্যাক্টর ধরন',
      lag: 'ল্যাগিং (ইন্ডাক্টিভ)',
      uni: 'ইউনিটি (রেজিস্ট্রিভ)',
      lead: 'লিডিং (ক্যাপাসিটিভ)',
      coreLossLabel: 'আয়রন/কোর লস (P_core)',
      cuLossLabel: 'ফুল-লোড কপার লস (P_cu(FL))',
      r02Label: 'R02 (সেকেন্ডারি রোধ)',
      x02Label: 'X02 (সেকেন্ডারি রিঅ্যাক্ট্যান্স)',
      powerFlow: 'লাইভ পাওয়ার ফ্লো বিভাজন',
      inputPower: 'ইনপুট ক্ষমতা (Pin)',
      coreLossCard: 'কোর লস (P_core = Ph + Pe)',
      cuLossCard: 'কপার লস (x²·P_cu)',
      outputPower: 'আউটপুট ক্ষমতা (Pout)',
      efficiencyTitle: 'গণনাকৃত কর্মদক্ষতা (η)',
      maxEffTitle: 'সর্বোচ্চ কর্মদক্ষতার শর্ত',
      maxEffAt: 'সর্বোচ্চ দক্ষতা লোড',
      maxEffVal: '১.০ pf-এ সর্বোচ্চ দক্ষতা',
      vrTitle: 'সেকেন্ডারি ভোল্টেজ রেগুলেশন',
      terminalV: 'টার্মিনাল ভোল্টেজ',
      vrPercent: 'শতকরা ভোল্টেজ রেগুলেশন (%VR)',
      vrStatusDrop: 'ভোল্টেজ হ্রাস (ল্যাগিং লোড)',
      vrStatusZero: 'শূন্য রেগুলেশন (আদর্শ সমন্বয়)',
      vrStatusRise: 'ভোল্টেজ বৃদ্ধি (ক্যাপাসিটিভ প্রভাব)',
      lossEqualNote: 'সর্বোচ্চ দক্ষতা অর্জিত হয় যখন কপার লস = স্থির আয়রন লস (Pcu = Pcore)।'
    }
  }[language] || {
    title: 'Transformer Loss & Efficiency Simulator',
    subtitle: 'Simulate power flow and efficiency',
    rating: 'Rated Capacity',
    loadPercent: 'Load Level (x)',
    pf: 'Power Factor',
    pfType: 'PF Nature',
    lag: 'Lagging',
    uni: 'Unity',
    lead: 'Leading',
    coreLossLabel: 'Core Loss',
    cuLossLabel: 'Full-Load Copper Loss',
    r02Label: 'R02',
    x02Label: 'X02',
    powerFlow: 'Power Flow',
    inputPower: 'Input Power',
    coreLossCard: 'Core Loss',
    cuLossCard: 'Copper Loss',
    outputPower: 'Output Power',
    efficiencyTitle: 'Efficiency',
    maxEffTitle: 'Maximum Efficiency',
    maxEffAt: 'Max Efficiency Load',
    maxEffVal: 'Peak Efficiency',
    vrTitle: 'Voltage Regulation',
    terminalV: 'Terminal Voltage',
    vrPercent: '%VR',
    vrStatusDrop: 'Voltage Drop',
    vrStatusZero: 'Zero Regulation',
    vrStatusRise: 'Voltage Rise',
    lossEqualNote: 'Pcu = Pcore for max efficiency'
  };

  // Calculations
  const effectivePf = pfType === 'unity' ? 1.0 : powerFactor;
  const sinPhi = Math.sqrt(Math.max(0, 1 - effectivePf * effectivePf));
  
  // Power calculations
  const apparentPowerOutput = loadFraction * kvaRating * 1000; // VA
  const activePowerOutput = apparentPowerOutput * effectivePf; // W
  const currentCuLoss = Math.pow(loadFraction, 2) * fullLoadCuLoss; // W
  const currentCoreLoss = coreLoss; // W
  const totalLoss = currentCoreLoss + currentCuLoss; // W
  const inputPower = activePowerOutput + totalLoss; // W
  const efficiency = inputPower > 0 ? (activePowerOutput / inputPower) * 100 : 0;

  // Max efficiency calculations
  const xMax = Math.sqrt(coreLoss / fullLoadCuLoss);
  const kvaAtMaxEff = kvaRating * xMax;
  const maxEffOutput = kvaAtMaxEff * 1000 * 1.0;
  const maxEffLoss = 2 * coreLoss;
  const maxEfficiencyAtUnity = (maxEffOutput / (maxEffOutput + maxEffLoss)) * 100;

  // Voltage regulation calculations
  const i2Rated = (kvaRating * 1000) / v2Nominal;
  const i2Actual = loadFraction * i2Rated;
  let voltageDrop = 0;
  if (pfType === 'lagging') {
    voltageDrop = i2Actual * (r02 * effectivePf + x02 * sinPhi);
  } else if (pfType === 'leading') {
    voltageDrop = i2Actual * (r02 * effectivePf - x02 * sinPhi);
  } else {
    voltageDrop = i2Actual * r02 * 1.0;
  }
  const voltageRegulationPercent = (voltageDrop / v2Nominal) * 100;
  const terminalVoltage = v2Nominal - voltageDrop;

  // Efficiency curve points for SVG graphing
  const curvePoints: { x: number; eff: number; cu: number }[] = [];
  for (let step = 0; step <= 25; step++) {
    const xVal = step * 0.05; // 0 to 1.25
    const outW = xVal * kvaRating * 1000 * effectivePf;
    const cuW = Math.pow(xVal, 2) * fullLoadCuLoss;
    const inW = outW + coreLoss + cuW;
    const eff = inW > 0 ? (outW / inW) * 100 : 0;
    curvePoints.push({ x: xVal, eff, cu: cuW });
  }

  return (
    <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 text-white space-y-6 shadow-xl font-sans">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span>{t.title}</span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          {t.subtitle}
        </p>
      </div>

      {/* Control Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs">
        
        {/* Slider 1: Load Fraction x */}
        <div className="space-y-1.5">
          <div className="flex justify-between font-mono font-semibold">
            <span className="text-slate-300">{t.loadPercent}:</span>
            <span className="text-cyan-400 font-bold">{(loadFraction * 100).toFixed(0)}% ({(loadFraction * kvaRating).toFixed(1)} kVA)</span>
          </div>
          <input
            type="range"
            min="0.1"
            max="1.25"
            step="0.05"
            value={loadFraction}
            onChange={(e) => setLoadFraction(parseFloat(e.target.value))}
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>10% (Light)</span>
            <span>100% (Full)</span>
            <span>125% (Overload)</span>
          </div>
        </div>

        {/* Slider 2: Power Factor & Type */}
        <div className="space-y-1.5">
          <div className="flex justify-between font-mono font-semibold">
            <span className="text-slate-300">{t.pf}:</span>
            <span className="text-amber-400 font-bold">{effectivePf.toFixed(2)} ({pfType})</span>
          </div>
          <input
            type="range"
            min="0.4"
            max="1.0"
            step="0.05"
            disabled={pfType === 'unity'}
            value={powerFactor}
            onChange={(e) => setPowerFactor(parseFloat(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg disabled:opacity-40"
          />
          <div className="flex gap-1 pt-1">
            <button
              onClick={() => setPfType('lagging')}
              className={`flex-1 py-1 rounded text-[10px] font-bold ${
                pfType === 'lagging' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Lag (+)
            </button>
            <button
              onClick={() => setPfType('unity')}
              className={`flex-1 py-1 rounded text-[10px] font-bold ${
                pfType === 'unity' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Unity
            </button>
            <button
              onClick={() => setPfType('leading')}
              className={`flex-1 py-1 rounded text-[10px] font-bold ${
                pfType === 'leading' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Lead (-)
            </button>
          </div>
        </div>

        {/* Slider 3: Core Loss P_core */}
        <div className="space-y-1.5">
          <div className="flex justify-between font-mono font-semibold">
            <span className="text-slate-300">{t.coreLossLabel}:</span>
            <span className="text-rose-400 font-bold">{coreLoss} W</span>
          </div>
          <input
            type="range"
            min="150"
            max="1000"
            step="50"
            value={coreLoss}
            onChange={(e) => setCoreLoss(parseFloat(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>150 W (CRGO)</span>
            <span>1000 W</span>
          </div>
        </div>

        {/* Slider 4: Full-Load Copper Loss */}
        <div className="space-y-1.5">
          <div className="flex justify-between font-mono font-semibold">
            <span className="text-slate-300">{t.cuLossLabel}:</span>
            <span className="text-orange-400 font-bold">{fullLoadCuLoss} W</span>
          </div>
          <input
            type="range"
            min="400"
            max="3000"
            step="50"
            value={fullLoadCuLoss}
            onChange={(e) => setFullLoadCuLoss(parseFloat(e.target.value))}
            className="w-full accent-orange-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
          <div className="flex justify-between text-[10px] text-slate-500 font-mono">
            <span>400 W</span>
            <span>3000 W</span>
          </div>
        </div>

      </div>

      {/* Main Visuals: Power Flow Sankey + Live Efficiency Curve */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Power Flow Sankey Architecture (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider">
              {t.powerFlow}
            </span>
            <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
              Pin = Pout + Ploss
            </span>
          </div>

          {/* Sankey Flow Bars */}
          <div className="space-y-3 font-mono text-xs">
            {/* Input Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300">
                <span>{t.inputPower}</span>
                <span className="text-cyan-300 font-bold">{(inputPower / 1000).toFixed(3)} kW (100%)</span>
              </div>
              <div className="w-full bg-slate-800 h-5 rounded-md overflow-hidden p-0.5 border border-slate-700">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 h-full rounded transition-all duration-300" style={{ width: '100%' }} />
              </div>
            </div>

            {/* Downward Branch: Losses */}
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex justify-between text-slate-400 text-[11px] font-bold">
                <span>TOTAL LOSSES ({(totalLoss / 1000).toFixed(3)} kW)</span>
                <span className="text-rose-400">{((totalLoss / inputPower) * 100).toFixed(2)}% of Pin</span>
              </div>

              {/* Core Loss Sub-bar */}
              <div className="space-y-0.5">
                <div className="flex justify-between text-[10px] text-rose-300">
                  <span>{t.coreLossCard} [Constant]</span>
                  <span className="font-bold">{coreLoss.toFixed(0)} W</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded overflow-hidden">
                  <div 
                    className="bg-rose-500 h-full transition-all duration-300" 
                    style={{ width: `${Math.min(100, (coreLoss / totalLoss) * 100)}%` }} 
                  />
                </div>
              </div>

              {/* Copper Loss Sub-bar */}
              <div className="space-y-0.5">
                <div className="flex justify-between text-[10px] text-orange-300">
                  <span>{t.cuLossCard} [Variable (x²)]</span>
                  <span className="font-bold">{currentCuLoss.toFixed(1)} W</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded overflow-hidden">
                  <div 
                    className="bg-orange-500 h-full transition-all duration-300" 
                    style={{ width: `${Math.min(100, (currentCuLoss / totalLoss) * 100)}%` }} 
                  />
                </div>
              </div>
            </div>

            {/* Output Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300">
                <span>{t.outputPower}</span>
                <span className="text-emerald-400 font-bold">{(activePowerOutput / 1000).toFixed(3)} kW ({efficiency.toFixed(2)}%)</span>
              </div>
              <div className="w-full bg-slate-800 h-5 rounded-md overflow-hidden p-0.5 border border-slate-700">
                <div 
                  className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded transition-all duration-300" 
                  style={{ width: `${Math.min(100, efficiency)}%` }} 
                />
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-start gap-2">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>{t.lossEqualNote}</span>
          </div>
        </div>

        {/* Right: Live Efficiency Curve Graph (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold font-mono text-cyan-400 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4" />
              <span>Efficiency vs. Fractional Load Curve (η vs. x)</span>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800">
              Current η = {efficiency.toFixed(2)}%
            </span>
          </div>

          {/* SVG Graph */}
          <div className="w-full bg-slate-950 rounded-lg p-2 border border-slate-800">
            <svg viewBox="0 0 440 200" className="w-full h-48">
              {/* Grid Lines */}
              <line x1="40" y1="20" x2="420" y2="20" stroke="#1e293b" strokeDasharray="3,3" />
              <line x1="40" y1="60" x2="420" y2="60" stroke="#1e293b" strokeDasharray="3,3" />
              <line x1="40" y1="100" x2="420" y2="100" stroke="#1e293b" strokeDasharray="3,3" />
              <line x1="40" y1="140" x2="420" y2="140" stroke="#1e293b" strokeDasharray="3,3" />
              <line x1="40" y1="170" x2="420" y2="170" stroke="#334155" strokeWidth="1.5" />
              <line x1="40" y1="15" x2="40" y2="170" stroke="#334155" strokeWidth="1.5" />

              {/* Y Axis Labels */}
              <text x="32" y="24" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">100%</text>
              <text x="32" y="64" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">95%</text>
              <text x="32" y="104" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">90%</text>
              <text x="32" y="144" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">80%</text>
              <text x="32" y="174" textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">0%</text>

              {/* X Axis Labels */}
              <text x="40" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">0</text>
              <text x="116" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">0.25</text>
              <text x="192" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">0.50</text>
              <text x="268" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">0.75</text>
              <text x="344" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">1.0 FL</text>
              <text x="420" y="185" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">1.25</text>

              {/* Efficiency Curve Path */}
              {(() => {
                const mapX = (xVal: number) => 40 + (xVal / 1.25) * 380;
                const mapY = (effVal: number) => {
                  if (effVal < 80) return 170 - (effVal / 80) * 30;
                  return 140 - ((effVal - 80) / 20) * 120;
                };

                let pathD = `M ${mapX(curvePoints[0].x)} ${mapY(curvePoints[0].eff)}`;
                for (let i = 1; i < curvePoints.length; i++) {
                  pathD += ` L ${mapX(curvePoints[i].x)} ${mapY(curvePoints[i].eff)}`;
                }

                // Current operating point coordinates
                const curX = mapX(loadFraction);
                const curY = mapY(efficiency);

                // Peak Max efficiency coordinates
                const peakX = mapX(Math.min(1.25, xMax));
                const peakOutW = xMax * kvaRating * 1000 * effectivePf;
                const peakInW = peakOutW + 2 * coreLoss;
                const peakEff = (peakOutW / peakInW) * 100;
                const peakY = mapY(peakEff);

                return (
                  <g>
                    {/* Area under curve */}
                    <path
                      d={`${pathD} L ${mapX(1.25)} 170 L 40 170 Z`}
                      fill="url(#effGradient)"
                      opacity="0.25"
                    />
                    {/* Line path */}
                    <path d={pathD} fill="none" stroke="#10b981" strokeWidth="3" />

                    {/* Peak Efficiency Marker Line */}
                    {xMax <= 1.25 && (
                      <g>
                        <line x1={peakX} y1={peakY} x2={peakX} y2="170" stroke="#fbbf24" strokeDasharray="3,3" strokeWidth="1.5" />
                        <circle cx={peakX} cy={peakY} r="5" fill="#fbbf24" stroke="#78350f" strokeWidth="1.5" />
                        <text x={peakX} y={peakY - 9} textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">
                          η_max ({peakEff.toFixed(1)}%)
                        </text>
                      </g>
                    )}

                    {/* Current Operating Point Marker */}
                    <line x1={curX} y1={curY} x2={curX} y2="170" stroke="#38bdf8" strokeDasharray="2,2" strokeWidth="1.5" />
                    <circle cx={curX} cy={curY} r="6" fill="#38bdf8" stroke="#0369a1" strokeWidth="2" />
                    <text x={curX} y={Math.max(25, curY - 10)} textAnchor="middle" fill="#38bdf8" fontSize="9.5" fontWeight="bold">
                      Current ({efficiency.toFixed(1)}%)
                    </text>
                  </g>
                );
              })()}

              <defs>
                <linearGradient id="effGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Peak Efficiency Box */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/80">
              <span className="text-[10px] text-amber-300 uppercase block font-bold">{t.maxEffAt}</span>
              <span className="text-sm font-bold text-amber-400">
                x = {xMax.toFixed(3)} ({(xMax * 100).toFixed(1)}% / {kvaAtMaxEff.toFixed(1)} kVA)
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/80">
              <span className="text-[10px] text-emerald-300 uppercase block font-bold">{t.maxEffVal}</span>
              <span className="text-sm font-bold text-emerald-400">
                η_max = {maxEfficiencyAtUnity.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Voltage Regulation Section */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3 font-mono">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
            <Gauge className="w-4 h-4" />
            <span>{t.vrTitle}</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Status:</span>
            {voltageRegulationPercent > 0.05 ? (
              <span className="text-amber-400 font-bold bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                {t.vrStatusDrop}
              </span>
            ) : voltageRegulationPercent < -0.05 ? (
              <span className="text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                {t.vrStatusRise}
              </span>
            ) : (
              <span className="text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                {t.vrStatusZero}
              </span>
            )}
          </div>
        </div>

        {/* Meters Display */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase block">No-Load Voltage (V2_NL)</span>
            <span className="text-base font-bold text-white">{v2Nominal.toFixed(1)} V</span>
          </div>

          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase block">{t.terminalV} (V2_FL)</span>
            <span className={`text-base font-bold ${terminalVoltage < v2Nominal ? 'text-amber-400' : 'text-emerald-400'}`}>
              {terminalVoltage.toFixed(2)} V
            </span>
          </div>

          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase block">{t.vrPercent}</span>
            <span className={`text-base font-bold ${voltageRegulationPercent >= 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
              {voltageRegulationPercent >= 0 ? `+${voltageRegulationPercent.toFixed(2)}%` : `${voltageRegulationPercent.toFixed(2)}%`}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
};
