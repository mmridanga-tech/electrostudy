import React, { useState } from 'react';
import { Language } from '../../types';
import { RotateCcw, Sliders, Zap, Award, Info } from 'lucide-react';

interface Props {
  currentLanguage: Language;
}

const LABELS = {
  en: {
    title: 'Maximum Power Transfer Theorem Interactive Graph',
    subtitle: 'Demonstrating that maximum power is transferred to the load when load resistance (RL) equals the Thevenin internal resistance (Rth) of the driving source network.',
    controls: 'Thevenin Network & Load Sliders',
    vthLabel: 'Thevenin Voltage (Vth)',
    rthLabel: 'Thevenin Internal Resistance (Rth)',
    rlLabel: 'Load Resistance (RL)',
    metrics: 'Live Power & Efficiency Metrics',
    loadCurrent: 'Load Current (IL)',
    loadVoltage: 'Load Voltage (VL)',
    loadPower: 'Load Power (PL)',
    maxPowerPotential: 'Maximum Possible Power (Pmax)',
    efficiency: 'Electrical Efficiency (η)',
    efficiencyWarningTitle: 'Power vs Efficiency Engineering Trade-off',
    efficiencyWarningText: 'At maximum power transfer (RL = Rth), efficiency is exactly 50%. Half the total power is lost inside internal source resistance Rth. High-voltage power distribution systems operate at RL >> Rth to maximize efficiency (>90%), whereas communication/audio systems maximize signal power transfer.',
    graphTitle: 'Load Power (PL) & Efficiency (η) vs Load Resistance (RL)',
    reset: 'Reset Defaults',
    maxPowerPointLabel: 'Max Power Point (RL = Rth, η = 50%)',
    currentPointLabel: 'Selected Operating Point'
  },
  hi: {
    title: 'अधिकतम शक्ति हस्तांतरण प्रमेय इंटरएक्टिव ग्राफ',
    subtitle: 'यह प्रदर्शित करना कि भार को अधिकतम शक्ति तब स्थानांतरित होती है जब भार प्रतिरोध (RL) स्रोत नेटवर्क के थेवेनिन आंतरिक प्रतिरोध (Rth) के बराबर होता है।',
    controls: 'थेवेनिन नेटवर्क एवं लोड स्लाइडर',
    vthLabel: 'थेवेनिन वोल्टेज (Vth)',
    rthLabel: 'थेवेनिन आंतरिक प्रतिरोध (Rth)',
    rlLabel: 'भार प्रतिरोध (RL)',
    metrics: 'लाइव शक्ति एवं दक्षता माप',
    loadCurrent: 'लोड धारा (IL)',
    loadVoltage: 'लोड वोल्टेज (VL)',
    loadPower: 'लोड शक्ति (PL)',
    maxPowerPotential: 'अधिकतम संभव शक्ति (Pmax)',
    efficiency: 'विद्युत दक्षता (η)',
    efficiencyWarningTitle: 'शक्ति बनाम दक्षता इंजीनियरिंग समझौता',
    efficiencyWarningText: 'अधिकतम शक्ति हस्तांतरण (RL = Rth) पर, दक्षता ठीक 50% होती है। आधी शक्ति आंतरिक प्रतिरोध Rth में नष्ट हो जाती है। पावर ग्रिड प्रणाली दक्षता (>90%) के लिए RL >> Rth पर काम करती हैं।',
    reset: 'रीसेट करें',
    graphTitle: 'लोड शक्ति (PL) एवं दक्षता (η) बनाम लोड प्रतिरोध (RL)',
    maxPowerPointLabel: 'अधिकतम शक्ति बिंदु (RL = Rth, η = 50%)',
    currentPointLabel: 'वर्तमान बिंदु'
  },
  bn: {
    title: 'সর্বোচ্চ পাওয়ার ট্রান্সফার উপপাদ্য ইন্টারেক্টিভ গ্রাফ',
    subtitle: 'প্রমাণ যে লোডে সর্বোচ্চ পাওয়ার স্থানান্তরিত হয় যখন লোড রেজিস্ট্যান্স (RL) সোর্স নেটওয়ার্কের থেভেনিন ইন্টারনাল রেজিস্ট্যান্স (Rth) এর সমান হয়।',
    controls: 'থেভেনিন নেটওয়ার্ক ও লোড স্লাইডারসমূহ',
    vthLabel: 'থেভেনিন ভোল্টেজ (Vth)',
    rthLabel: 'থেভেনিন ইন্টারনাল রেজিস্ট্যান্স (Rth)',
    rlLabel: 'লোড রেজিস্ট্যান্স (RL)',
    metrics: 'লাইব পাওয়ার ও এফিসিয়েন্সি মানসমূহ',
    loadCurrent: 'লোড কারেন্ট (IL)',
    loadVoltage: 'লোড ভোল্টেজ (VL)',
    loadPower: 'লোড পাওয়ার (PL)',
    maxPowerPotential: 'সর্বোচ্চ সম্ভাব্য পাওয়ার (Pmax)',
    efficiency: 'বৈদ্যুতিক দক্ষতা (η)',
    efficiencyWarningTitle: 'পাওয়ার বনাম এফিসিয়েন্সি ইঞ্জিনিয়ারিং তুলনা',
    efficiencyWarningText: 'সর্বোচ্চ পাওয়ার ট্রান্সফারে (RL = Rth) এফিসিয়েন্সি ঠিক ৫০% হয়। মোট শক্তির অর্ধেক সোর্সের অভ্যন্তরীণ Rth এ অপচয় হয়। পাওয়ার সিস্টেমে দক্ষতা বাড়াতে (>৯০%) RL >> Rth রাখা হয়।',
    reset: 'রিসেট করুন',
    graphTitle: 'লোড পাওয়ার (PL) এবং দক্ষতা (η) বনাম লোড রেজিস্ট্যান্স (RL)',
    maxPowerPointLabel: 'ম্যাক্স পাওয়ার পয়েন্ট (RL = Rth, η = ৫০%)',
    currentPointLabel: 'বর্তমান অপারেটিং পয়েন্ট'
  }
};

export const MaximumPowerTransferAnimation: React.FC<Props> = ({ currentLanguage }) => {
  const t = LABELS[currentLanguage] || LABELS.en;

  const [vth, setVth] = useState<number>(24);
  const [rth, setRth] = useState<number>(10);
  const [rl, setRl] = useState<number>(10);

  // Live Electrical Calculations
  const safeRth = Math.max(1, rth);
  const safeRl = Math.max(0.5, rl);
  const il = vth / (safeRth + safeRl);
  const vl = il * safeRl;
  const pl = il * il * safeRl;
  const pmax = (vth * vth) / (4 * safeRth);
  const efficiency = (safeRl / (safeRth + safeRl)) * 100;

  const handleReset = () => {
    setVth(24);
    setRth(10);
    setRl(10);
  };

  // Generate Graph Points for SVG Plotting
  const maxRlGraph = Math.max(50, safeRth * 3);
  const pointsCount = 60;
  const graphPoints: { rlVal: number; plVal: number; effVal: number }[] = [];

  for (let i = 0; i <= pointsCount; i++) {
    const rVal = (i / pointsCount) * maxRlGraph;
    if (rVal === 0) continue;
    const currentI = vth / (safeRth + rVal);
    const powerVal = currentI * currentI * rVal;
    const effVal = (rVal / (safeRth + rVal)) * 100;
    graphPoints.push({ rlVal: rVal, plVal: powerVal, effVal });
  }

  // SVG Coordinates Mapping (Width: 500, Height: 200, Margins: X:40..460, Y:20..170)
  const svgWidth = 500;
  const svgHeight = 200;
  const padLeft = 45;
  const padRight = 35;
  const padTop = 20;
  const padBottom = 30;

  const plotW = svgWidth - padLeft - padRight;
  const plotH = svgHeight - padTop - padBottom;

  const maxPForPlot = Math.max(0.1, pmax * 1.15);

  const getX = (rVal: number) => padLeft + (rVal / maxRlGraph) * plotW;
  const getYPower = (pVal: number) => padTop + plotH - (pVal / maxPForPlot) * plotH;
  const getYEff = (effVal: number) => padTop + plotH - (effVal / 100) * plotH;

  const powerPolyline = graphPoints
    .map((pt) => `${getX(pt.rlVal).toFixed(1)},${getYPower(pt.plVal).toFixed(1)}`)
    .join(' ');

  const effPolyline = graphPoints
    .map((pt) => `${getX(pt.rlVal).toFixed(1)},${getYEff(pt.effVal).toFixed(1)}`)
    .join(' ');

  const activeX = getX(safeRl);
  const activeYPower = getYPower(pl);
  const maxPowerX = getX(safeRth);
  const maxPowerY = getYPower(pmax);

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-2xl p-4 sm:p-6 border border-slate-800 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-lg font-bold font-display text-emerald-400 flex items-center gap-2">
            <Zap className="w-5 h-5 text-emerald-400" />
            <span>{t.title}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>
        <button
          onClick={handleReset}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono font-bold transition-colors border border-slate-700 print-hidden"
          aria-label={t.reset}
        >
          <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
          <span>{t.reset}</span>
        </button>
      </div>

      {/* Interactive Power Curve SVG Plot */}
      <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <span className="text-emerald-400 font-bold">{t.graphTitle}</span>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
              <span className="w-3 h-0.5 bg-emerald-400 rounded-full" /> Load Power (PL)
            </span>
            <span className="inline-flex items-center gap-1 text-cyan-400 font-bold">
              <span className="w-3 h-0.5 bg-cyan-400 rounded-full" /> Efficiency (η)
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto">
            {/* Grid background lines */}
            <line x1={padLeft} y1={padTop} x2={padLeft} y2={padTop + plotH} stroke="#334155" strokeWidth="1.5" />
            <line x1={padLeft} y1={padTop + plotH} x2={padLeft + plotW} y2={padTop + plotH} stroke="#334155" strokeWidth="1.5" />

            {/* Dashed vertical line for RL = Rth (Max Power Point) */}
            <line
              x1={maxPowerX}
              y1={padTop}
              x2={maxPowerX}
              y2={padTop + plotH}
              stroke="#fbbf24"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Dashed line for current selected RL */}
            {safeRl !== safeRth && (
              <line
                x1={activeX}
                y1={padTop}
                x2={activeX}
                y2={padTop + plotH}
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
            )}

            {/* Efficiency Polyline (Cyan) */}
            <polyline fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 2" points={effPolyline} />

            {/* Power Curve Polyline (Emerald) */}
            <polyline fill="none" stroke="#34d399" strokeWidth="3" points={powerPolyline} />

            {/* Maximum Power Point Highlight Circle */}
            <circle cx={maxPowerX} cy={maxPowerY} r="6" fill="#fbbf24" stroke="#78350f" strokeWidth="2" />

            {/* Selected Operating Point Circle */}
            <circle cx={activeX} cy={activeYPower} r="5" fill="#38bdf8" stroke="#0369a1" strokeWidth="2" />

            {/* Axis Labels */}
            <text x={padLeft + plotW / 2} y={svgHeight - 5} textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              Load Resistance RL (Ω) → [Rth = {safeRth}Ω]
            </text>
            <text x={12} y={padTop + plotH / 2} textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="monospace" transform={`rotate(-90 12 ${padTop + plotH / 2})`}>
              Power (W)
            </text>
            <text x={svgWidth - 10} y={padTop + plotH / 2} textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace" transform={`rotate(90 ${svgWidth - 10} ${padTop + plotH / 2})`}>
              Efficiency (%)
            </text>

            {/* Annotations */}
            <text x={maxPowerX} y={padTop + 12} textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="monospace">
              RL = Rth ({safeRth}Ω)
            </text>
          </svg>
        </div>

        <div className="flex flex-wrap justify-between gap-2 text-xs font-mono pt-1 text-slate-300">
          <span className="text-amber-400 font-bold">
            Pmax = {pmax.toFixed(2)} W at RL = Rth ({safeRth}Ω)
          </span>
          <span className="text-cyan-400 font-bold">
            Current Operating Point: PL = {pl.toFixed(2)} W | η = {efficiency.toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Sliders for Vth, Rth, RL */}
      <div className="space-y-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800 print-hidden">
        <h4 className="text-xs font-bold text-slate-400 font-mono uppercase tracking-wider flex items-center gap-2">
          <Sliders className="w-4 h-4 text-emerald-400" />
          <span>{t.controls}</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-amber-400 font-bold">{t.vthLabel}:</span>
              <span className="text-white font-bold">{vth} V</span>
            </div>
            <input
              type="range"
              min="1"
              max="60"
              step="1"
              value={vth}
              onChange={(e) => setVth(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-emerald-400 font-bold">{t.rthLabel}:</span>
              <span className="text-white font-bold">{rth} Ω</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={rth}
              onChange={(e) => setRth(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-cyan-400 font-bold">{t.rlLabel}:</span>
              <span className="text-white font-bold">{rl} Ω</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={rl}
              onChange={(e) => setRl(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>
      </div>

      {/* Metrics Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <div className="text-[11px] font-mono text-slate-400">{t.loadCurrent}</div>
          <div className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">{il.toFixed(3)} A</div>
        </div>

        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <div className="text-[11px] font-mono text-slate-400">{t.loadVoltage}</div>
          <div className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">{vl.toFixed(2)} V</div>
        </div>

        <div className={`p-3 rounded-xl border transition-all ${
          Math.abs(safeRl - safeRth) < 0.1 ? 'bg-emerald-950/60 border-emerald-500/80' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="text-[11px] font-mono text-emerald-400">{t.loadPower}</div>
          <div className="text-sm sm:text-base font-bold font-mono text-emerald-300 mt-0.5">{pl.toFixed(2)} W</div>
        </div>

        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
          <div className="text-[11px] font-mono text-cyan-400">{t.efficiency}</div>
          <div className="text-sm sm:text-base font-bold font-mono text-cyan-300 mt-0.5">{efficiency.toFixed(1)}%</div>
        </div>
      </div>

      {/* Maximum Power Match Status Banner */}
      <div className={`p-4 rounded-xl border font-mono text-xs leading-relaxed ${
        Math.abs(safeRl - safeRth) < 0.1
          ? 'bg-emerald-950/40 border-emerald-500/80 text-emerald-300'
          : 'bg-slate-950 border-slate-800 text-slate-300'
      }`}>
        <div className="flex items-center gap-2 font-bold mb-1">
          <Award className="w-4 h-4 text-emerald-400" />
          <span>Condition Check: {safeRl === safeRth ? 'MATCHED (RL = Rth)' : 'UNMATCHED (RL ≠ Rth)'}</span>
        </div>
        <p>
          {safeRl === safeRth
            ? `Maximum power transfer achieved! PL = Pmax = ${pmax.toFixed(2)} W. Efficiency η = 50.0%.`
            : `Current RL (${rl}Ω) ≠ Rth (${rth}Ω). Adjust RL to ${rth}Ω to obtain maximum power Pmax = ${pmax.toFixed(2)} W.`}
        </p>
      </div>

      {/* Efficiency Tradeoff Explanation */}
      <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 space-y-1 text-xs">
        <div className="flex items-center gap-2 text-cyan-400 font-bold font-mono">
          <Info className="w-4 h-4 text-cyan-400" />
          <span>{t.efficiencyWarningTitle}</span>
        </div>
        <p className="text-slate-300 leading-relaxed">
          {t.efficiencyWarningText}
        </p>
      </div>
    </div>
  );
};
