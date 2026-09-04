import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Cpu, ShieldAlert, CheckCircle2, TrendingDown, DollarSign, Activity, Zap, Layers } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const IndustrialPFCDesignCapstone: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Primary Engineering Parameters
  const [loadKw, setLoadKw] = useState<number>(650);
  const [initialPf, setInitialPf] = useState<number>(0.72);
  const [targetPf, setTargetPf] = useState<number>(0.98);
  const [lineVoltage, setLineVoltage] = useState<number>(415); // V
  const [trafoRatingKva, setTrafoRatingKva] = useState<number>(1000); // kVA
  const [trafoZPct, setTrafoZPct] = useState<number>(5.5); // % impedance
  const [opHoursPerYear, setOpHoursPerYear] = useState<number>(6000);
  const [stepSizeKvar, setStepSizeKvar] = useState<number>(50); // Step granularity
  const [harmonicLevel, setHarmonicLevel] = useState<'clean' | 'moderate' | 'heavy'>('moderate');
  const [demandChargePerKva, setDemandChargePerKva] = useState<number>(15); // $/kVA/month

  // Calculations
  const phi1 = Math.acos(initialPf);
  const phi2 = Math.acos(targetPf);

  const initialKva = loadKw / initialPf;
  const initialKvar = loadKw * Math.tan(phi1);

  const targetKva = loadKw / targetPf;
  const targetKvar = loadKw * Math.tan(phi2);

  const rawQcRequired = Math.max(0, initialKvar - targetKvar);
  // Sized to nearest integer multiple of selected step size
  const totalSteps = Math.ceil(rawQcRequired / stepSizeKvar);
  const installedBankKvar = totalSteps * stepSizeKvar;

  // Actual effective compensated values with installed bank
  const finalKvar = Math.max(0, initialKvar - installedBankKvar);
  const finalKva = Math.sqrt(Math.pow(loadKw, 2) + Math.pow(finalKvar, 2));
  const finalPf = loadKw / finalKva;

  // Currents
  const currentInitial = (initialKva * 1000) / (Math.sqrt(3) * lineVoltage);
  const currentFinal = (finalKva * 1000) / (Math.sqrt(3) * lineVoltage);
  const deltaCurrent = Math.max(0, currentInitial - currentFinal);
  const currentReductionPct = (deltaCurrent / currentInitial) * 100;

  // Transformer Loading & Headroom
  const initialTrafoLoadingPct = (initialKva / trafoRatingKva) * 100;
  const finalTrafoLoadingPct = (finalKva / trafoRatingKva) * 100;
  const trafoKvaReleased = initialKva - finalKva;
  const trafoSpareKwAvailable = trafoKvaReleased * targetPf;

  // Short Circuit Capacity & Harmonic Resonance
  // S_sc = S_trafo / (%Z / 100)
  const shortCircuitMva = (trafoRatingKva / 1000) / (trafoZPct / 100);
  const shortCircuitKva = shortCircuitMva * 1000;
  const hResonance = installedBankKvar > 0 ? Math.sqrt(shortCircuitKva / installedBankKvar) : 0;

  // Harmonic & Reactor Engineering Rules
  let reactorRecommendation = 'None Required (Standard 415V Capacitors)';
  let reactorType = '0% (Standard)';
  let capVoltageRating = '415V standard';
  let resonanceAlert = false;

  if (harmonicLevel === 'clean') {
    if (hResonance >= 4.5 && hResonance <= 5.5) {
      resonanceAlert = true;
      reactorRecommendation = 'Notice: Parallel resonance near 5th harmonic. Consider 5.67% detuning.';
    } else {
      reactorRecommendation = 'Standard APFC panel safe; THD_I is low (<10%).';
    }
  } else if (harmonicLevel === 'moderate') {
    reactorRecommendation = 'MANDATORY: 7% Detuned Reactors (Tuning frequency = 189 Hz). Use 480V/525V rated capacitor cells.';
    reactorType = '7% Series Detuned';
    capVoltageRating = '480V or 525V heavy-duty';
    if (hResonance >= 4.6 && hResonance <= 5.4) resonanceAlert = true;
  } else {
    // Heavy nonlinear load
    reactorRecommendation = 'MANDATORY: 7% or 14% Detuned APFC + Hybrid Active Harmonic Filter (AHF) to comply with IEEE 519.';
    reactorType = '14% Series Detuned + Active Filter';
    capVoltageRating = '525V reinforced heavy-duty';
    resonanceAlert = true;
  }

  // Financials
  const monthlyDemandSavings = (initialKva - finalKva) * demandChargePerKva;
  const annualDemandSavings = monthlyDemandSavings * 12;
  const capexPerKvar = harmonicLevel === 'clean' ? 35 : harmonicLevel === 'moderate' ? 55 : 85;
  const totalCapex = installedBankKvar * capexPerKvar;
  const paybackMonths = annualDemandSavings > 0 ? (totalCapex / annualDemandSavings) * 12 : 0;

  // Localized texts
  const t = {
    en: {
      title: 'Complete Industrial Power Factor Correction Design Capstone',
      subtitle: 'End-to-End APFC Sizing, Transformer Headroom, Harmonic Resonance & ROI Engine',
      configTitle: '1. Industrial Plant Input Parameters',
      resultsTitle: '2. Sized Capacitor Bank & System Impacts',
      kwLoad: 'Active Plant Load (P)',
      initPf: 'Existing Power Factor (cos φ₁)',
      targetPf: 'Target Design Power Factor (cos φ₂)',
      voltage: 'Secondary Distribution Voltage',
      trafoRating: 'Substation Transformer Rating',
      stepGranularity: 'Capacitor Step Granularity',
      harmonics: 'Nonlinear Load / Harmonic Environment',
      clean: 'Clean (<10% VFDs / linear loads)',
      moderate: 'Moderate (15–30% VFDs / rectifiers)',
      heavy: 'Heavy (>35% VFDs / induction heaters)',
      bankSummary: 'Capacitor Bank Specification',
      installedBank: 'Installed Bank Rating',
      stepsConfig: 'Step Configuration',
      compPf: 'Achieved Operating PF',
      trafoImpacts: 'Substation Transformer & Feeder Release',
      initialTrafoLoad: 'Initial Trafo Loading',
      finalTrafoLoad: 'Corrected Trafo Loading',
      releasedHeadroom: 'Released Trafo Headroom',
      feederCurrent: 'Current & Loss Reduction',
      currentBefore: 'Feeder Current Before',
      currentAfter: 'Feeder Current After',
      lossReduction: 'Feeder I²R Loss Drop',
      resonanceTitle: '3. Harmonics, Resonance & Reactor Selection',
      resOrder: 'Natural Parallel Resonant Order (h_res)',
      reactorDesign: 'Detuning Reactor Specification',
      capVoltage: 'Required Capacitor Voltage Rating',
      economicsTitle: '4. Industrial Project Economic Payback',
      annualSavings: 'Estimated Annual Demand Savings',
      capex: 'Estimated Total Installed CapEx',
      payback: 'Estimated Payback Period',
      recTitle: 'Final Engineering Recommendation'
    },
    hi: {
      title: 'पूर्ण औद्योगिक पावर फैक्टर सुधार डिजाइन कैपस्टोन',
      subtitle: 'APFC साइज़िंग, ट्रांसफार्मर क्षमता रिकवरी, हार्मोनिक रेजोनेंस एवं ROI इंजन',
      configTitle: '1. औद्योगिक प्लांट इनपुट पैरामीटर',
      resultsTitle: '2. कैपेसिटर बैंक साइज़िंग एवं सिस्टम प्रभाव',
      kwLoad: 'प्लांट का सक्रिय भार (P)',
      initPf: 'मौजूदा पावर फैक्टर (cos φ₁)',
      targetPf: 'लक्षित पावर फैक्टर (cos φ₂)',
      voltage: 'वितरण वोल्टेज (L-L)',
      trafoRating: 'सबस्टेशन ट्रांसफार्मर रेटिंग',
      stepGranularity: 'कैपेसिटर स्टेप का आकार',
      harmonics: 'हार्मोनिक परिवेश / नॉन-लीनियर लोड',
      clean: 'स्वच्छ (<10% VFDs / लीनियर लोड)',
      moderate: 'मध्यम (15–30% VFDs / रेक्टिफायर)',
      heavy: 'अत्यधिक (>35% VFDs / इंडक्शन हीटर)',
      bankSummary: 'कैपेसिटर बैंक विनिर्देश',
      installedBank: 'स्थापित बैंक क्षमता',
      stepsConfig: 'स्टेप विन्यास (Configuration)',
      compPf: 'प्राप्त वास्तविक PF',
      trafoImpacts: 'सबस्टेशन ट्रांसफार्मर एवं फीडर रिलीज',
      initialTrafoLoad: 'प्रारंभिक ट्रांसफार्मर लोडिंग',
      finalTrafoLoad: 'सुधारी गई ट्रांसफार्मर लोडिंग',
      releasedHeadroom: 'मुक्त हुई ट्रांसफार्मर क्षमता',
      feederCurrent: 'धारा एवं ऊर्जा हानि में कमी',
      currentBefore: 'पहले का फीडर करंट',
      currentAfter: 'बाद का फीडर करंट',
      lossReduction: 'फीडर I²R हानि में कमी',
      resonanceTitle: '3. हार्मोनिक्स, रेजोनेंस एवं रिएक्टर चयन',
      resOrder: 'प्राकृतिक समानांतर रेजोनेंट ऑर्डर (h_res)',
      reactorDesign: 'डिट्यूनिंग रिएक्टर विनिर्देश',
      capVoltage: 'आवश्यक कैपेसिटर वोल्टेज रेटिंग',
      economicsTitle: '4. औद्योगिक परियोजना आर्थिक पेबैक',
      annualSavings: 'अनुमानित वार्षिक मांग बचत',
      capex: 'अनुमानित कुल स्थापित लागत',
      payback: 'अनुमानित पेबैक अवधि',
      recTitle: 'अंतिम इंजीनियरिंग अनुशंसा'
    },
    bn: {
      title: 'সম্পূর্ণ শিল্প পাওয়ার ফ্যাক্টর সংশোধন নকশা ক্যাপস্টোন',
      subtitle: 'APFC সাইজিং, ট্রান্সফরমার ক্যাপাসিটি রিকভারি, হারমোনিক রেজোন্যান্স ও ROI ইঞ্জিন',
      configTitle: '১. শিল্প প্ল্যান্ট ইনপুট প্যারামিটার',
      resultsTitle: '২. ক্যাপাসিটর ব্যাংক সাইজিং ও সিস্টেমের প্রভাব',
      kwLoad: 'প্ল্যান্টের সক্রিয় লোড (P)',
      initPf: 'বিদ্যমান পাওয়ার ফ্যাক্টর (cos φ₁)',
      targetPf: 'টার্গেট পাওয়ার ফ্যাক্টর (cos φ₂)',
      voltage: 'বিতরণ ভোল্টেজ (L-L)',
      trafoRating: 'সাবস্টেশন ট্রান্সফরমার রেটিং',
      stepGranularity: 'ক্যাপাসিটর ধাপের আকার',
      harmonics: 'হারমোনিক পরিবেশ / নন-লিনিয়ার লোড',
      clean: 'পরিষ্কার (<১০% VFDs / লিনিয়ার লোড)',
      moderate: 'মাঝারি (১৫–৩০% VFDs / রেকটিফায়ার)',
      heavy: 'উচ্চ (>৩৫% VFDs / ইন্ডাকশন হিটার)',
      bankSummary: 'ক্যাপাসিটর ব্যাংক স্পেসিফিকেশন',
      installedBank: 'ইনস্টলকৃত ব্যাংক রেটিং',
      stepsConfig: 'ধাপ বিন্যাস (Configuration)',
      compPf: 'অর্জিত বাস্তব PF',
      trafoImpacts: 'সাবস্টেশন ট্রান্সফরমার ও ফিডার রিলিজ',
      initialTrafoLoad: 'প্রাথমিক ট্রান্সফরমার লোডিং',
      finalTrafoLoad: 'সংশোধিত ট্রান্সফরমার লোডিং',
      releasedHeadroom: 'মুক্ত ট্রান্সফরমার ক্ষমতা',
      feederCurrent: 'বিদ্যুৎপ্রবাহ ও অপচয় হ্রাস',
      currentBefore: 'আগের ফিডার কারেন্ট',
      currentAfter: 'পরের ফিডার কারেন্ট',
      lossReduction: 'ফিডার I²R অপচয় হ্রাস',
      resonanceTitle: '৩. হারমোনিক্স, রেজোন্যান্স ও রিঅ্যাক্টর নির্বাচন',
      resOrder: 'প্যারালাল রেজোন্যান্ট অর্ডার (h_res)',
      reactorDesign: 'ডিটিউনিং রিঅ্যাক্টর স্পেসিফিকেশন',
      capVoltage: 'প্রয়োজনীয় ক্যাপাসিটর ভোল্টেজ রেটিং',
      economicsTitle: '৪. শিল্প প্রকল্পের অর্থনৈতিক পেব্যাক',
      annualSavings: 'আনুমানিক বার্ষিক চাহিদা সাশ্রয়',
      capex: 'আনুমানিক মোট প্রকল্প ব্যয়',
      payback: 'আনুমানিক পেব্যাক সময়কাল',
      recTitle: 'চূড়ান্ত ইঞ্জিনিয়ারিং সুপারিশ'
    }
  }[lang];

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-cyan-400 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            {t.title}
          </h3>
          <p className="text-xs text-slate-400">{t.subtitle}</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-mono font-semibold">
          Capstone Final Standard IEEE 519 / IEC 61921
        </span>
      </div>

      {/* Grid: Inputs vs Outputs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Inputs (5 cols) */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2 border-b border-slate-800 pb-2">
            <Zap className="w-4 h-4 text-cyan-400" />
            {t.configTitle}
          </h4>

          {/* Plant Active Load */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <label htmlFor={`${controlId}-kw`} className="text-slate-300">{t.kwLoad}:</label>
              <span className="font-mono font-bold text-cyan-300">{loadKw} kW</span>
            </div>
            <input
              id={`${controlId}-kw`}
              type="range"
              min="100"
              max="1800"
              step="25"
              value={loadKw}
              onChange={(e) => setLoadKw(Number(e.target.value))}
              className="w-full accent-cyan-500 h-1.5 bg-slate-800 rounded cursor-pointer"
            />
          </div>

          {/* Initial PF */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <label htmlFor={`${controlId}-initpf`} className="text-slate-300">{t.initPf}:</label>
              <span className="font-mono font-bold text-amber-400">{initialPf.toFixed(2)} Lag</span>
            </div>
            <input
              id={`${controlId}-initpf`}
              type="range"
              min="0.60"
              max="0.88"
              step="0.01"
              value={initialPf}
              onChange={(e) => setInitialPf(Number(e.target.value))}
              className="w-full accent-amber-500 h-1.5 bg-slate-800 rounded cursor-pointer"
            />
          </div>

          {/* Target PF */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <label htmlFor={`${controlId}-targetpf`} className="text-slate-300">{t.targetPf}:</label>
              <span className="font-mono font-bold text-emerald-400">{targetPf.toFixed(2)} Lag</span>
            </div>
            <input
              id={`${controlId}-targetpf`}
              type="range"
              min={Math.max(0.92, initialPf + 0.05)}
              max="0.99"
              step="0.01"
              value={targetPf}
              onChange={(e) => setTargetPf(Number(e.target.value))}
              className="w-full accent-emerald-500 h-1.5 bg-slate-800 rounded cursor-pointer"
            />
          </div>

          {/* Transformer Rating & Voltage */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="space-y-1">
              <label htmlFor={`${controlId}-trafo`} className="text-xs text-slate-300">{t.trafoRating}:</label>
              <select
                id={`${controlId}-trafo`}
                value={trafoRatingKva}
                onChange={(e) => setTrafoRatingKva(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded p-1.5 text-slate-200 font-mono"
              >
                <option value={500}>500 kVA</option>
                <option value={750}>750 kVA</option>
                <option value={1000}>1000 kVA</option>
                <option value={1500}>1500 kVA</option>
                <option value={2000}>2000 kVA</option>
                <option value={2500}>2500 kVA</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor={`${controlId}-stepsize`} className="text-xs text-slate-300">{t.stepGranularity}:</label>
              <select
                id={`${controlId}-stepsize`}
                value={stepSizeKvar}
                onChange={(e) => setStepSizeKvar(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 text-xs rounded p-1.5 text-slate-200 font-mono"
              >
                <option value={25}>25 kVAR Steps</option>
                <option value={50}>50 kVAR Steps</option>
                <option value={75}>75 kVAR Steps</option>
                <option value={100}>100 kVAR Steps</option>
              </select>
            </div>
          </div>

          {/* Harmonics & Non-linear Loads */}
          <div className="space-y-1 pt-1">
            <label htmlFor={`${controlId}-harmonics`} className="text-xs text-slate-300 block">{t.harmonics}:</label>
            <select
              id={`${controlId}-harmonics`}
              value={harmonicLevel}
              onChange={(e) => setHarmonicLevel(e.target.value as any)}
              className="w-full bg-slate-900 border border-slate-700 text-xs rounded p-1.5 text-slate-200"
            >
              <option value="clean">{t.clean}</option>
              <option value="moderate">{t.moderate}</option>
              <option value="heavy">{t.heavy}</option>
            </select>
          </div>
        </div>

        {/* Right Output Panels (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Top Sizing Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">{t.installedBank}</span>
              <span className="text-lg font-bold font-mono text-cyan-400">{installedBankKvar}</span>
              <span className="text-[10px] text-slate-500 block">kVAR ({totalSteps} steps)</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">{t.compPf}</span>
              <span className="text-lg font-bold font-mono text-emerald-400">{finalPf.toFixed(2)}</span>
              <span className="text-[10px] text-slate-500 block">Lagging</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">{t.releasedHeadroom}</span>
              <span className="text-lg font-bold font-mono text-amber-400">+{trafoKvaReleased.toFixed(0)}</span>
              <span className="text-[10px] text-slate-500 block">kVA freed</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">{t.payback}</span>
              <span className="text-lg font-bold font-mono text-emerald-300">{paybackMonths.toFixed(1)}</span>
              <span className="text-[10px] text-slate-500 block">Months</span>
            </div>
          </div>

          {/* Transformer & Feeder Electrical Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Trafo Box */}
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2 text-xs">
              <h5 className="font-bold text-cyan-400 flex items-center gap-1.5 border-b border-slate-800 pb-1">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                {t.trafoImpacts}
              </h5>
              <div className="space-y-1.5 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.initialTrafoLoad}:</span>
                  <span className={`font-bold ${initialTrafoLoadingPct > 95 ? 'text-red-400' : 'text-amber-400'}`}>
                    {initialKva.toFixed(0)} kVA ({initialTrafoLoadingPct.toFixed(1)}%)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.finalTrafoLoad}:</span>
                  <span className="text-emerald-400 font-bold">
                    {finalKva.toFixed(0)} kVA ({finalTrafoLoadingPct.toFixed(1)}%)
                  </span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-1">
                  <span className="text-slate-400">{t.releasedHeadroom}:</span>
                  <span className="text-cyan-300 font-bold">+{trafoKvaReleased.toFixed(0)} kVA (enables +{trafoSpareKwAvailable.toFixed(0)} kW load)</span>
                </div>
              </div>
            </div>

            {/* Feeder Current & Loss Box */}
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2 text-xs">
              <h5 className="font-bold text-amber-400 flex items-center gap-1.5 border-b border-slate-800 pb-1">
                <TrendingDown className="w-3.5 h-3.5 text-amber-400" />
                {t.feederCurrent}
              </h5>
              <div className="space-y-1.5 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.currentBefore}:</span>
                  <span className="text-slate-300">{currentInitial.toFixed(0)} A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{t.currentAfter}:</span>
                  <span className="text-emerald-400 font-bold">{currentFinal.toFixed(0)} A</span>
                </div>
                <div className="flex justify-between border-t border-slate-800 pt-1">
                  <span className="text-slate-400">{t.lossReduction}:</span>
                  <span className="text-emerald-400 font-bold">-{currentReductionPct.toFixed(1)}% Line Current</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resonance & Detuning Reactor Specification */}
          <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 space-y-2 text-xs">
            <h5 className="font-bold text-emerald-400 flex items-center gap-1.5 border-b border-slate-800 pb-1">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              {t.resonanceTitle}
            </h5>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between font-mono">
                <span className="text-slate-400">{t.resOrder}:</span>
                <span className={`font-bold ${resonanceAlert ? 'text-red-400' : 'text-cyan-300'}`}>
                  h_res = {hResonance.toFixed(2)} ({hResonance > 0 ? (hResonance * 50).toFixed(0) + ' Hz' : 'N/A'})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{t.reactorDesign}:</span>
                <span className="font-semibold text-amber-300">{reactorType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{t.capVoltage}:</span>
                <span className="font-mono text-emerald-300 font-bold">{capVoltageRating}</span>
              </div>
            </div>
          </div>

          {/* Capstone Recommendation Banner */}
          <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-800/80 text-xs text-cyan-200 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-cyan-300 mb-0.5">{t.recTitle}:</strong>
              <span>
                Install a <strong>{installedBankKvar} kVAR</strong> microprocessor-controlled APFC panel organized in <strong>{totalSteps} steps of {stepSizeKvar} kVAR</strong>. {reactorRecommendation} Project CapEx of <strong>${totalCapex.toLocaleString()}</strong> delivers <strong>${Math.round(annualDemandSavings).toLocaleString()}</strong> in annual tariff reduction with a rapid <strong>{paybackMonths.toFixed(1)}-month payback</strong> while freeing <strong>{trafoKvaReleased.toFixed(0)} kVA</strong> of transformer capacity.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
