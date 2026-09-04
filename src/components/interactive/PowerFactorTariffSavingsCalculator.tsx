import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Calculator, DollarSign, TrendingDown, Zap, ShieldCheck, Clock } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const PowerFactorTariffSavingsCalculator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Inputs
  const [loadKw, setLoadKw] = useState<number>(450);
  const [initialPf, setInitialPf] = useState<number>(0.74);
  const [targetPf, setTargetPf] = useState<number>(0.98);
  const [voltage, setVoltage] = useState<number>(415); // Volts
  const [operatingHours, setOperatingHours] = useState<number>(450); // Hours/month
  const [demandTariffRate, setDemandTariffRate] = useState<number>(14); // $ per kVA per month
  const [penaltyThresholdPf, setPenaltyThresholdPf] = useState<number>(0.90);
  const [penaltyRatePerPoint, setPenaltyRatePerPoint] = useState<number>(0.5); // % bill surcharge per 0.01 below threshold
  const [capexPerKvar, setCapexPerKvar] = useState<number>(38); // $ per kVAR installed

  // Calculations
  const phi1 = Math.acos(initialPf);
  const phi2 = Math.acos(targetPf);

  const initialKva = loadKw / initialPf;
  const targetKva = loadKw / targetPf;
  const kvaReduction = Math.max(0, initialKva - targetKva);

  const initialKvar = loadKw * Math.tan(phi1);
  const targetKvar = loadKw * Math.tan(phi2);
  const requiredKvar = Math.max(0, initialKvar - targetKvar);

  // Currents
  const currentInitial = (initialKva * 1000) / (Math.sqrt(3) * voltage);
  const currentCorrected = (targetKva * 1000) / (Math.sqrt(3) * voltage);
  const currentReductionA = Math.max(0, currentInitial - currentCorrected);
  const currentReductionPct = initialKva > 0 ? (currentReductionA / currentInitial) * 100 : 0;

  // Feeder loss reduction % = (1 - (I_2 / I_1)^2) * 100
  const lossReductionPct = initialPf > 0 ? (1 - Math.pow(initialPf / targetPf, 2)) * 100 : 0;

  // Monthly Financials
  const monthlyDemandSavings = kvaReduction * demandTariffRate;
  
  // Low PF Penalty (if initial PF < threshold)
  let penaltyMonthly = 0;
  if (initialPf < penaltyThresholdPf) {
    const pointsBelow = Math.round((penaltyThresholdPf - initialPf) * 100);
    // Base monthly demand bill approx
    const baseDemandBill = initialKva * demandTariffRate;
    penaltyMonthly = (baseDemandBill * (pointsBelow * penaltyRatePerPoint)) / 100;
  }

  const totalMonthlySavings = monthlyDemandSavings + penaltyMonthly;
  const annualSavings = totalMonthlySavings * 12;

  // Capital Investment & Payback
  const capitalInvestment = requiredKvar * capexPerKvar;
  const paybackMonths = annualSavings > 0 ? (capitalInvestment / annualSavings) * 12 : 0;
  const roiPct = capitalInvestment > 0 ? (annualSavings / capitalInvestment) * 100 : 0;

  // Localized headers
  const textContent = {
    en: {
      title: 'Power Factor & Maximum Demand Tariff Calculator',
      subtitle: 'Dynamic Industrial Utility Bill Savings & Payback Engine',
      loadInputs: 'Load & Tariff Parameters',
      kwLoad: 'Active Load (P)',
      initPf: 'Initial Power Factor',
      targetPf: 'Target Power Factor',
      volt: 'Three-Phase Line Voltage',
      opHours: 'Operating Hours / Month',
      demandRate: 'Maximum Demand Charge ($/kVA/mo)',
      penaltyLabel: 'Penalty Threshold PF',
      capexLabel: 'Capacitor System Cost ($/kVAR)',
      kpiSummary: 'Tariff & Electrical Payback Summary',
      demandRed: 'kVA Demand Reduction',
      currentRed: 'Feeder Current Reduction',
      annSavings: 'Total Annual Savings',
      payback: 'Simple Payback Period',
      invCost: 'CapEx Investment',
      roi: 'Annual ROI',
      elecTitle: 'Electrical Power Flow Breakdown',
      initDemand: 'Initial Demand (S₁)',
      targetDemand: 'Compensated Demand (S₂)',
      reqKvar: 'Required Capacitor Rating (Qc)',
      initCurrent: 'Initial Line Current (I₁)',
      compCurrent: 'Compensated Current (I₂)',
      i2rSavings: 'Feeder I²R Loss Reduction',
      econTitle: 'Monthly & Annual Tariff Benefits',
      demandSavingsMo: 'Monthly Demand Charge Savings',
      penaltyAvoidedMo: 'Avoided Utility Low-PF Penalty',
      totalAnnual: 'Combined Annual Financial Gain',
      recommendation: 'Engineering Economic Assessment'
    },
    hi: {
      title: 'पावर फैक्टर एवं अधिकतम मांग टैरिफ कैलकुलेटर',
      subtitle: 'औद्योगिक बिजली बिल बचत एवं पेबैक विश्लेषण इंजन',
      loadInputs: 'लोड एवं टैरिफ पैरामीटर',
      kwLoad: 'सक्रिय भार (P)',
      initPf: 'प्रारंभिक पावर फैक्टर',
      targetPf: 'लक्षित पावर फैक्टर',
      volt: 'थ्री-फेज लाइन वोल्टेज',
      opHours: 'कार्य घंटे / माह',
      demandRate: 'अधिकतम मांग दर ($/kVA/माह)',
      penaltyLabel: 'जुर्माना थ्रेशोल्ड PF',
      capexLabel: 'कैपेसिटर बैंक लागत ($/kVAR)',
      kpiSummary: 'टैरिफ एवं वित्तीय सारांश',
      demandRed: 'kVA मांग में कमी',
      currentRed: 'फीडर धारा में कमी',
      annSavings: 'कुल वार्षिक बचत',
      payback: 'साधारण पेबैक अवधि',
      invCost: 'पूंजीगत निवेश (CapEx)',
      roi: 'वार्षिक ROI',
      elecTitle: 'विद्युत शक्ति प्रवाह विवरण',
      initDemand: 'प्रारंभिक मांग (S₁)',
      targetDemand: 'सुधारी गई मांग (S₂)',
      reqKvar: 'आवश्यक कैपेसिटर क्षमता (Qc)',
      initCurrent: 'प्रारंभिक लाइन धारा (I₁)',
      compCurrent: 'सुधारी गई धारा (I₂)',
      i2rSavings: 'फीडर I²R हानि में कमी',
      econTitle: 'मासिक एवं वार्षिक टैरिफ लाभ',
      demandSavingsMo: 'मासिक मांग शुल्क बचत',
      penaltyAvoidedMo: 'बचाया गया पावर फैक्टर जुर्माना',
      totalAnnual: 'कुल वार्षिक वित्तीय लाभ',
      recommendation: 'इंजीनियरिंग आर्थिक मूल्यांकन'
    },
    bn: {
      title: 'পাওয়ার ফ্যাক্টর ও সর্বোচ্চ চাহিদা ট্যারিফ ক্যালকুলেটর',
      subtitle: 'শিল্প বিদ্যুৎ বিল সাশ্রয় ও পেব্যাক মূল্যায়ন ইঞ্জিন',
      loadInputs: 'লোড ও ট্যারিফ প্যারামিটার',
      kwLoad: 'সক্রিয় লোড (P)',
      initPf: 'প্রাথমিক পাওয়ার ফ্যাক্টর',
      targetPf: 'টার্গেট পাওয়ার ফ্যাক্টর',
      volt: 'থ্রি-ফেজ লাইন ভোল্টেজ',
      opHours: 'অপারেটিং সময় / মাস',
      demandRate: 'সর্বোচ্চ চাহিদা চার্জ ($/kVA/মাস)',
      penaltyLabel: 'জরিমানা থ্রেশহোল্ড PF',
      capexLabel: 'ক্যাপাসিটর ব্যাংক খরচ ($/kVAR)',
      kpiSummary: 'ট্যারিফ ও আর্থিক সারসংক্ষেপ',
      demandRed: 'kVA চাহিদা হ্রাস',
      currentRed: 'ফিডার বিদ্যুৎপ্রবাহ হ্রাস',
      annSavings: 'মোট বার্ষিক সাশ্রয়',
      payback: 'পেব্যাক সময়কাল',
      invCost: 'মূলধনী বিনিয়োগ (CapEx)',
      roi: 'বার্ষিক ROI',
      elecTitle: 'বৈদ্যুতিক পাওয়ার প্রবাহ বিশ্লেষণ',
      initDemand: 'প্রাথমিক চাহিদা (S₁)',
      targetDemand: 'সংশোধিত চাহিদা (S₂)',
      reqKvar: 'প্রয়োজনীয় ক্যাপাসিটর রেটিং (Qc)',
      initCurrent: 'প্রাথমিক লাইন কারেন্ট (I₁)',
      compCurrent: 'সংশোধিত লাইন কারেন্ট (I₂)',
      i2rSavings: 'ফিডার I²R অপচয় হ্রাস',
      econTitle: 'মাসিক ও বার্ষিক ট্যারিফ সুবিধা',
      demandSavingsMo: 'মাসিক চাহিদা চার্জ সাশ্রয়',
      penaltyAvoidedMo: 'এড়ানো পাওয়ার ফ্যাক্টর জরিমানা',
      totalAnnual: 'মোট বার্ষিক আর্থিক লাভ',
      recommendation: 'ইঞ্জিনিয়ারিং অর্থনৈতিক মূল্যায়ন'
    }
  }[lang];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-cyan-400 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-cyan-400" />
            {textContent.title}
          </h3>
          <p className="text-xs text-slate-400">{textContent.subtitle}</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-mono font-semibold">
          Two-Part kVA Billing Mode
        </span>
      </div>

      {/* Main Grid: Controls vs Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Input Controls */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-500" />
            {textContent.loadInputs}
          </h4>

          {/* Active Load (kW) */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <label htmlFor={`${controlId}-kw`} className="text-slate-300">{textContent.kwLoad}:</label>
              <span className="font-mono font-bold text-cyan-300">{loadKw} kW</span>
            </div>
            <input
              id={`${controlId}-kw`}
              type="range"
              min="50"
              max="2000"
              step="25"
              value={loadKw}
              onChange={(e) => setLoadKw(Number(e.target.value))}
              className="w-full accent-cyan-500 h-1.5 bg-slate-800 rounded cursor-pointer"
            />
          </div>

          {/* Initial PF */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <label htmlFor={`${controlId}-initpf`} className="text-slate-300">{textContent.initPf}:</label>
              <span className="font-mono font-bold text-amber-400">{initialPf.toFixed(2)} Lag</span>
            </div>
            <input
              id={`${controlId}-initpf`}
              type="range"
              min="0.55"
              max="0.92"
              step="0.01"
              value={initialPf}
              onChange={(e) => setInitialPf(Number(e.target.value))}
              className="w-full accent-amber-500 h-1.5 bg-slate-800 rounded cursor-pointer"
            />
          </div>

          {/* Target PF */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <label htmlFor={`${controlId}-targetpf`} className="text-slate-300">{textContent.targetPf}:</label>
              <span className="font-mono font-bold text-emerald-400">{targetPf.toFixed(2)} Lag</span>
            </div>
            <input
              id={`${controlId}-targetpf`}
              type="range"
              min={Math.min(0.95, initialPf + 0.02)}
              max="0.99"
              step="0.01"
              value={targetPf}
              onChange={(e) => setTargetPf(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1.5 bg-slate-800 rounded cursor-pointer"
            />
          </div>

          {/* Line Voltage */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="space-y-1">
              <label htmlFor={`${controlId}-volt`} className="text-xs text-slate-300">{textContent.volt}:</label>
              <select
                id={`${controlId}-volt`}
                value={voltage}
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded p-1.5 text-slate-200 font-mono"
              >
                <option value={400}>400 V</option>
                <option value={415}>415 V</option>
                <option value={480}>480 V</option>
                <option value={690}>690 V</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor={`${controlId}-demandrate`} className="text-xs text-slate-300">{textContent.demandRate}:</label>
              <input
                id={`${controlId}-demandrate`}
                type="number"
                min="5"
                max="50"
                value={demandTariffRate}
                onChange={(e) => setDemandTariffRate(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded p-1.5 text-slate-200 font-mono"
              />
            </div>
          </div>

          {/* Economic Parameters */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="space-y-1">
              <label htmlFor={`${controlId}-penalty`} className="text-xs text-slate-300">{textContent.penaltyLabel}:</label>
              <input
                id={`${controlId}-penalty`}
                type="number"
                step="0.01"
                min="0.80"
                max="0.95"
                value={penaltyThresholdPf}
                onChange={(e) => setPenaltyThresholdPf(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded p-1.5 text-slate-200 font-mono"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor={`${controlId}-capex`} className="text-xs text-slate-300">{textContent.capexLabel}:</label>
              <input
                id={`${controlId}-capex`}
                type="number"
                min="20"
                max="100"
                value={capexPerKvar}
                onChange={(e) => setCapexPerKvar(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded p-1.5 text-slate-200 font-mono"
              />
            </div>
          </div>
        </div>

        {/* Right: Key Performance Indicators & Detailed Math */}
        <div className="lg:col-span-7 space-y-4">
          {/* Top 4 KPI Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">{textContent.demandRed}</span>
              <span className="text-lg font-bold font-mono text-cyan-400">-{kvaReduction.toFixed(1)}</span>
              <span className="text-[10px] text-slate-500 block">kVA</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">{textContent.currentRed}</span>
              <span className="text-lg font-bold font-mono text-emerald-400">-{currentReductionPct.toFixed(1)}%</span>
              <span className="text-[10px] text-slate-500 block">({currentReductionA.toFixed(0)} A less)</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">{textContent.annSavings}</span>
              <span className="text-lg font-bold font-mono text-amber-400">${Math.round(annualSavings).toLocaleString()}</span>
              <span className="text-[10px] text-slate-500 block">/ year</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">{textContent.payback}</span>
              <span className="text-lg font-bold font-mono text-emerald-300">{paybackMonths.toFixed(1)}</span>
              <span className="text-[10px] text-slate-500 block">Months (ROI: {roiPct.toFixed(0)}%)</span>
            </div>
          </div>

          {/* Technical and Economic Tables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Electrical Column */}
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2 text-xs">
              <h5 className="font-bold text-cyan-400 flex items-center gap-1.5 border-b border-slate-800 pb-1">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                {textContent.elecTitle}
              </h5>
              <div className="space-y-1.5 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">{textContent.initDemand}:</span>
                  <span className="text-amber-400 font-bold">{initialKva.toFixed(1)} kVA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{textContent.targetDemand}:</span>
                  <span className="text-emerald-400 font-bold">{targetKva.toFixed(1)} kVA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{textContent.reqKvar}:</span>
                  <span className="text-cyan-300 font-bold">{requiredKvar.toFixed(1)} kVAR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{textContent.initCurrent}:</span>
                  <span className="text-slate-300">{currentInitial.toFixed(1)} A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{textContent.compCurrent}:</span>
                  <span className="text-emerald-300 font-bold">{currentCorrected.toFixed(1)} A</span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-1">
                  <span className="text-slate-400">{textContent.i2rSavings}:</span>
                  <span className="text-emerald-400 font-bold">{lossReductionPct.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            {/* Economic Column */}
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2 text-xs">
              <h5 className="font-bold text-amber-400 flex items-center gap-1.5 border-b border-slate-800 pb-1">
                <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                {textContent.econTitle}
              </h5>
              <div className="space-y-1.5 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">{textContent.demandSavingsMo}:</span>
                  <span className="text-emerald-400 font-bold">${Math.round(monthlyDemandSavings).toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{textContent.penaltyAvoidedMo}:</span>
                  <span className="text-amber-300 font-bold">${Math.round(penaltyMonthly).toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{textContent.invCost}:</span>
                  <span className="text-slate-300 font-bold">${Math.round(capitalInvestment).toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-1">
                  <span className="text-slate-400">{textContent.totalAnnual}:</span>
                  <span className="text-emerald-400 font-bold">${Math.round(annualSavings).toLocaleString()}/yr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{textContent.payback}:</span>
                  <span className="text-cyan-300 font-bold">{paybackMonths.toFixed(1)} Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{textContent.roi}:</span>
                  <span className="text-emerald-300 font-bold">{roiPct.toFixed(0)}% per year</span>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment Banner */}
          <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/80 text-xs text-emerald-200 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-emerald-300 mb-0.5">{textContent.recommendation}:</strong>
              <span>
                Installing a <strong>{Math.ceil(requiredKvar / 25) * 25} kVAR</strong> automatic capacitor bank cuts billed demand by <strong>{kvaReduction.toFixed(1)} kVA</strong>. The project yields a <strong>{paybackMonths.toFixed(1)}-month payback</strong> with <strong>${Math.round(annualSavings).toLocaleString()}</strong> in annual ongoing cost savings while freeing up <strong>{(initialKva - targetKva).toFixed(1)} kVA</strong> of existing transformer headroom.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
