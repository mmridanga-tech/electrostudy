import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Calculator, ArrowRightLeft, Layers, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const PerUnitSystemCalculator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const idPrefix = useId();

  // Primary Base Inputs
  const [sBaseMva, setSBaseMva] = useState<number>(100); // MVA
  const [vBaseKv, setVBaseKv] = useState<number>(132);   // kV (Line-to-Line)

  // Equipment Actual / Given Rating
  const [calcMode, setCalcMode] = useState<'actualToPu' | 'baseChange'>('baseChange');

  // Mode 1: Actual to PU
  const [actualOhm, setActualOhm] = useState<number>(25);

  // Mode 2: Base Change
  const [zOldPu, setZOldPu] = useState<number>(0.12);     // 12%
  const [sOldMva, setSOldMva] = useState<number>(50);     // 50 MVA
  const [vOldKv, setVOldKv] = useState<number>(132);      // 132 kV
  const [sNewMva, setSNewMva] = useState<number>(100);    // 100 MVA
  const [vNewKv, setVNewKv] = useState<number>(132);      // 132 kV

  // Base Calculations for 3-Phase Systems:
  // S_base_3ph = S_base_MVA * 10^6
  // V_base_LL = V_base_kV * 10^3
  // I_base = S_base_3ph / (sqrt(3) * V_base_LL) = (S_base_MVA * 1000) / (sqrt(3) * V_base_kV)
  // Z_base = (V_base_LL)^2 / S_base_3ph = (V_base_kV)^2 / S_base_MVA
  const zBase = (vBaseKv * vBaseKv) / (sBaseMva || 1);
  const iBase = (sBaseMva * 1000) / (Math.sqrt(3) * (vBaseKv || 1));

  // Actual to PU
  const computedPuFromOhm = actualOhm / (zBase || 1);

  // Base Change formula:
  // Z_pu_new = Z_pu_old * (S_base_new / S_base_old) * (V_base_old / V_base_new)^2
  const zNewPu = zOldPu * ((sNewMva || 1) / (sOldMva || 1)) * Math.pow((vOldKv || 1) / (vNewKv || 1), 2);
  const zNewPercent = zNewPu * 100;

  // Localized Strings
  const t = {
    en: {
      title: 'Per-Unit (p.u.) System & Base Quantity Calculator',
      subtitle: 'Standardize multi-voltage grid components onto a unified mathematical base',
      calcModeLabel: 'Calculation Mode',
      modeBaseChange: 'Transformer/Generator Base Change',
      modeActualToPu: 'Physical Ohms to Per-Unit Conversion',
      baseQuantities: 'System Base Quantities (3-Phase)',
      sBase: 'Base Power (S_base)',
      vBase: 'Base Voltage (V_base, Line-to-Line)',
      derivedBases: 'Calculated System Base Values',
      zBaseLabel: 'Base Impedance (Z_base = V_base² / S_base):',
      iBaseLabel: 'Base Current (I_base = S_base / (√3 · V_base)):',
      baseChangeInputs: 'Equipment Nameplate & Base Conversion Parameters',
      zOldLabel: 'Nameplate Impedance (Z_old, p.u.):',
      sOldLabel: 'Equipment Rated Power (S_old):',
      vOldLabel: 'Equipment Rated Voltage (V_old):',
      sNewLabel: 'New System Base Power (S_new):',
      vNewLabel: 'New System Base Voltage (V_new):',
      actualOhmLabel: 'Actual Physical Impedance (Z_actual):',
      resultsTitle: 'Normalized Per-Unit Results',
      convertedZ: 'Converted Impedance (Z_new):',
      formulaUsed: 'Governing Per-Unit Conversion Equation:',
      formulaText: 'Z_{pu,new} = Z_{pu,old} \\times \\left(\\frac{S_{base,new}}{S_{base,old}}\\right) \\times \\left(\\frac{V_{base,old}}{V_{base,new}}\\right)^2',
      insightsTitle: 'Engineering Rules of Thumb',
      insight1: 'In modern power systems, standard system-wide S_base is typically chosen as 100 MVA or 1000 MVA.',
      insight2: 'Base voltage across an ideal transformer must strictly equal the transformer turns ratio: V_base2 = V_base1 × (N2 / N1).',
      insight3: 'When base voltages match nominal equipment ratings, Z_pu scales linearly with S_base.'
    },
    hi: {
      title: 'प्रति-इकाई (Per-Unit) प्रणाली एवं आधार राशि कैलकुलेटर',
      subtitle: 'विभिन्न वोल्टेज स्तरों वाले पावर ग्रिड घटकों को एक एकीकृत आधार पर मानकीकृत करें',
      calcModeLabel: 'गणना मोड',
      modeBaseChange: 'ट्रांसफॉर्मर/जनरेटर आधार परिवर्तन (Base Change)',
      modeActualToPu: 'वास्तविक ओम (Ω) से प्रति-इकाई (p.u.) रूपांतरण',
      baseQuantities: 'सिस्टम आधार राशियाँ (3-फेज)',
      sBase: 'आधार शक्ति (S_base)',
      vBase: 'आधार वोल्टेज (V_base, लाइन-टू-लाइन)',
      derivedBases: 'व्युत्पन्न आधार मान (Calculated Bases)',
      zBaseLabel: 'आधार प्रतिबाधा (Z_base = V_base² / S_base):',
      iBaseLabel: 'आधार धारा (I_base = S_base / (√3 · V_base)):',
      baseChangeInputs: 'उपकरण रेटिंग एवं आधार परिवर्तन इनपुट',
      zOldLabel: 'पुराना प्रतिबाधा (Z_old, p.u.):',
      sOldLabel: 'रेटेड शक्ति (S_old):',
      vOldLabel: 'रेटेड वोल्टेज (V_old):',
      sNewLabel: 'नया सिस्टम आधार शक्ति (S_new):',
      vNewLabel: 'नया सिस्टम आधार वोल्टेज (V_new):',
      actualOhmLabel: 'वास्तविक भौतिक प्रतिबाधा (Z_actual):',
      resultsTitle: 'गणना किए गए प्रति-इकाई परिणाम',
      convertedZ: 'रूपांतरित प्रतिबाधा (Z_new):',
      formulaUsed: 'आधार परिवर्तन का मुख्य समीकरण:',
      formulaText: 'Z_{pu,new} = Z_{pu,old} × (S_{new} / S_{old}) × (V_{old} / V_{new})²',
      insightsTitle: 'इंजीनियरिंग नियम एवं व्यावहारिक टिप्स',
      insight1: 'पावर सिस्टम विश्लेषण में मानक आधार शक्ति आमतौर पर 100 MVA या 1000 MVA चुनी जाती है।',
      insight2: 'ट्रांसफॉर्मर के पार आधार वोल्टेज हमेशा ट्रांसफॉर्मर टर्न्स अनुपात के अनुसार बदलना चाहिए।',
      insight3: 'जब वोल्टेज आधार समान रहते हैं, तो p.u. प्रतिबाधा सीधे MVA आधार के अनुपात में बढ़ती है।'
    },
    bn: {
      title: 'প্রতি-একক (Per-Unit) সিস্টেম ও বেস রাশি ক্যালকুলেটর',
      subtitle: 'বিভিন্ন ভোল্টেজ স্তরের গ্রিড উপাদানসমূহকে একটি অভিন্ন গাণিতিক ভিত্তিতে রূপান্তর করুন',
      calcModeLabel: 'হিসাব মোড',
      modeBaseChange: 'ট্রান্সফরমার/জেনারেটর বেস পরিবর্তন (Base Change)',
      modeActualToPu: 'বাস্তব ওহম (Ω) থেকে পার-ইউনিট রূপান্তর',
      baseQuantities: 'সিস্টেম বেস রাশি (৩-ফেজ)',
      sBase: 'বেস পাওয়ার (S_base)',
      vBase: 'বেস ভোল্টেজ (V_base, লাইন-টু-লাইন)',
      derivedBases: 'গণনাকৃত বেস মান',
      zBaseLabel: 'বেস ইম্পিডেন্স (Z_base = V_base² / S_base):',
      iBaseLabel: 'বেস কারেন্ট (I_base = S_base / (√3 · V_base)):',
      baseChangeInputs: 'যন্ত্রের নেমপ্লেট রেটিং ও বেস পরিবর্তন ইনপুট',
      zOldLabel: 'নেমপ্লেট ইম্পিডেন্স (Z_old, p.u.):',
      sOldLabel: 'যন্ত্রের রেটেড পাওয়ার (S_old):',
      vOldLabel: 'যন্ত্রের রেটেড ভোল্টেজ (V_old):',
      sNewLabel: 'নতুন সিস্টেম বেস পাওয়ার (S_new):',
      vNewLabel: 'নতুন সিস্টেম বেস ভোল্টেজ (V_new):',
      actualOhmLabel: 'বাস্তব ফিজিক্যাল ইম্পিডেন্স (Z_actual):',
      resultsTitle: 'পার-ইউনিট ফলাফল',
      convertedZ: 'রূপান্তরিত ইম্পিডেন্স (Z_new):',
      formulaUsed: 'বেস রূপান্তর সমীকরণ:',
      formulaText: 'Z_{pu,new} = Z_{pu,old} × (S_{new} / S_{old}) × (V_{old} / V_{new})²',
      insightsTitle: 'ইঞ্জিনিয়ারিং পর্যবেক্ষণ ও ব্যবহারিক টিপস',
      insight1: 'পাওয়ার সিস্টেম নেটওয়ার্ক বিশ্লেষণে স্ট্যান্ডার্ড বেস পাওয়ার সাধারণত ১০০ MVA নেওয়া হয়।',
      insight2: 'ট্রান্সফরমারের উভয় পাশের বেস ভোল্টেজ অবশ্যই টার্ন রেশিও অনুযায়ী পরিবর্তিত হতে হবে।',
      insight3: 'ভোল্টেজ বেস অপরিবর্তিত থাকলে পার-ইউনিট ইম্পিডেন্স সরাসরি MVA বেসের অনুপাতে বৃদ্ধি পায়।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-sky-400" />
            <h3 className="text-xl font-bold text-sky-400">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/30 rounded-full text-xs font-mono font-semibold">
          IEEE / IEC Grid Standard
        </span>
      </div>

      {/* Mode Switcher */}
      <div className="mb-6">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          {t.calcModeLabel}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setCalcMode('baseChange')}
            className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium text-sm transition-all ${
              calcMode === 'baseChange'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
            }`}
          >
            <ArrowRightLeft className="w-4 h-4" />
            {t.modeBaseChange}
          </button>
          <button
            type="button"
            onClick={() => setCalcMode('actualToPu')}
            className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium text-sm transition-all ${
              calcMode === 'actualToPu'
                ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
            }`}
          >
            <Layers className="w-4 h-4" />
            {t.modeActualToPu}
          </button>
        </div>
      </div>

      {/* Grid Inputs & Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Inputs */}
        <div className="space-y-4">
          {calcMode === 'baseChange' ? (
            <div className="bg-slate-950/60 p-4 rounded-lg border border-slate-800 space-y-3">
              <h4 className="text-sm font-semibold text-amber-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> {t.baseChangeInputs}
              </h4>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <label htmlFor={`${idPrefix}-zold`}>{t.zOldLabel}</label>
                  <span className="font-mono text-sky-400 font-bold">{zOldPu} p.u. ({(zOldPu * 100).toFixed(1)}%)</span>
                </div>
                <input
                  id={`${idPrefix}-zold`}
                  type="range"
                  min="0.01"
                  max="0.50"
                  step="0.01"
                  value={zOldPu}
                  onChange={(e) => setZOldPu(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label htmlFor={`${idPrefix}-sold`} className="block text-xs text-slate-400 mb-1">{t.sOldLabel}</label>
                  <div className="relative">
                    <input
                      id={`${idPrefix}-sold`}
                      type="number"
                      min="1"
                      max="2000"
                      value={sOldMva}
                      onChange={(e) => setSOldMva(Math.max(1, parseFloat(e.target.value) || 1))}
                      className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-white font-mono"
                    />
                    <span className="absolute right-2.5 top-1.5 text-xs text-slate-500 font-mono">MVA</span>
                  </div>
                </div>

                <div>
                  <label htmlFor={`${idPrefix}-vold`} className="block text-xs text-slate-400 mb-1">{t.vOldLabel}</label>
                  <div className="relative">
                    <input
                      id={`${idPrefix}-vold`}
                      type="number"
                      min="0.4"
                      max="1200"
                      value={vOldKv}
                      onChange={(e) => setVOldKv(Math.max(0.1, parseFloat(e.target.value) || 1))}
                      className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-white font-mono"
                    />
                    <span className="absolute right-2.5 top-1.5 text-xs text-slate-500 font-mono">kV</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
                <div>
                  <label htmlFor={`${idPrefix}-snew`} className="block text-xs text-slate-400 mb-1">{t.sNewLabel}</label>
                  <div className="relative">
                    <input
                      id={`${idPrefix}-snew`}
                      type="number"
                      min="1"
                      max="5000"
                      value={sNewMva}
                      onChange={(e) => setSNewMva(Math.max(1, parseFloat(e.target.value) || 1))}
                      className="w-full bg-slate-900 border border-sky-500/50 rounded px-2.5 py-1.5 text-sm text-white font-mono"
                    />
                    <span className="absolute right-2.5 top-1.5 text-xs text-slate-500 font-mono">MVA</span>
                  </div>
                </div>

                <div>
                  <label htmlFor={`${idPrefix}-vnew`} className="block text-xs text-slate-400 mb-1">{t.vNewLabel}</label>
                  <div className="relative">
                    <input
                      id={`${idPrefix}-vnew`}
                      type="number"
                      min="0.4"
                      max="1200"
                      value={vNewKv}
                      onChange={(e) => setVNewKv(Math.max(0.1, parseFloat(e.target.value) || 1))}
                      className="w-full bg-slate-900 border border-sky-500/50 rounded px-2.5 py-1.5 text-sm text-white font-mono"
                    />
                    <span className="absolute right-2.5 top-1.5 text-xs text-slate-500 font-mono">kV</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-slate-950/60 p-4 rounded-lg border border-slate-800 space-y-4">
              <h4 className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> {t.baseQuantities}
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor={`${idPrefix}-sbase`} className="block text-xs text-slate-400 mb-1">{t.sBase}</label>
                  <div className="relative">
                    <input
                      id={`${idPrefix}-sbase`}
                      type="number"
                      min="1"
                      max="2000"
                      value={sBaseMva}
                      onChange={(e) => setSBaseMva(Math.max(1, parseFloat(e.target.value) || 1))}
                      className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-white font-mono"
                    />
                    <span className="absolute right-2.5 top-1.5 text-xs text-slate-500 font-mono">MVA</span>
                  </div>
                </div>

                <div>
                  <label htmlFor={`${idPrefix}-vbase`} className="block text-xs text-slate-400 mb-1">{t.vBase}</label>
                  <div className="relative">
                    <input
                      id={`${idPrefix}-vbase`}
                      type="number"
                      min="0.4"
                      max="1200"
                      value={vBaseKv}
                      onChange={(e) => setVBaseKv(Math.max(0.1, parseFloat(e.target.value) || 1))}
                      className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-white font-mono"
                    />
                    <span className="absolute right-2.5 top-1.5 text-xs text-slate-500 font-mono">kV</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <label htmlFor={`${idPrefix}-actohm`}>{t.actualOhmLabel}</label>
                  <span className="font-mono text-emerald-400 font-bold">{actualOhm} Ω</span>
                </div>
                <input
                  id={`${idPrefix}-actohm`}
                  type="range"
                  min="0.5"
                  max="200"
                  step="0.5"
                  value={actualOhm}
                  onChange={(e) => setActualOhm(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              {/* Derived Bases Display */}
              <div className="bg-slate-900/90 rounded p-3 text-xs space-y-1.5 border border-slate-800">
                <div className="text-slate-400 font-semibold">{t.derivedBases}</div>
                <div className="flex justify-between font-mono">
                  <span className="text-slate-400">Z_base:</span>
                  <span className="text-sky-300 font-bold">{zBase.toFixed(2)} Ω</span>
                </div>
                <div className="flex justify-between font-mono">
                  <span className="text-slate-400">I_base:</span>
                  <span className="text-sky-300 font-bold">{iBase.toFixed(1)} A</span>
                </div>
              </div>
            </div>
          )}

          {/* Theoretical Formula Box */}
          <div className="p-3 bg-slate-950/40 border border-slate-800/80 rounded text-xs text-slate-400">
            <div className="font-semibold text-slate-300 mb-1 flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
              {t.formulaUsed}
            </div>
            <div className="font-mono text-sky-300 bg-slate-900/80 p-2 rounded text-center my-1.5 overflow-x-auto text-xs">
              {calcMode === 'baseChange'
                ? 'Z_pu(new) = Z_pu(old) × (S_base_new / S_base_old) × (V_base_old / V_base_new)²'
                : 'Z_pu = Z_actual(Ω) / Z_base(Ω) = Z_actual × S_base(MVA) / V_base(kV)²'}
            </div>
          </div>
        </div>

        {/* Right Column: Output & Visualization */}
        <div className="flex flex-col justify-between space-y-4">
          {/* Big Metric Display */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 p-5 rounded-xl text-center flex flex-col justify-center items-center relative overflow-hidden">
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              {t.resultsTitle}
            </div>

            {calcMode === 'baseChange' ? (
              <>
                <div className="text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                  {zNewPu.toFixed(4)} <span className="text-xl text-sky-300">p.u.</span>
                </div>
                <div className="text-sm font-mono text-slate-300 mt-1">
                  ({zNewPercent.toFixed(2)}% on {sNewMva} MVA, {vNewKv} kV base)
                </div>
                <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs text-slate-300">
                  <span>Scaling ratio:</span>
                  <span className="font-mono text-amber-300 font-bold">
                    {(zNewPu / (zOldPu || 1)).toFixed(3)}× original
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  {computedPuFromOhm.toFixed(4)} <span className="text-xl text-emerald-300">p.u.</span>
                </div>
                <div className="text-sm font-mono text-slate-300 mt-1">
                  ({(computedPuFromOhm * 100).toFixed(2)}% on {sBaseMva} MVA, {vBaseKv} kV base)
                </div>
                <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-xs text-slate-300">
                  <span>Actual value:</span>
                  <span className="font-mono text-emerald-300 font-bold">{actualOhm} Ω</span>
                </div>
              </>
            )}
          </div>

          {/* Interactive Multi-Zone Single-Line Schematic */}
          <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
            <div className="text-xs font-semibold text-slate-400 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Multi-Voltage System Normalization Scheme
            </div>
            <div className="relative border border-slate-800 rounded p-2.5 bg-slate-900/60">
              <svg viewBox="0 0 380 90" className="w-full h-24">
                {/* Gen Bus */}
                <line x1="20" y1="45" x2="60" y2="45" stroke="#38bdf8" strokeWidth="2.5" />
                <circle cx="20" cy="45" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                <text x="20" y="49" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">G1</text>
                <text x="20" y="68" fill="#94a3b8" fontSize="7" textAnchor="middle">11 kV</text>

                {/* Transformer 1 */}
                <circle cx="75" cy="45" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <circle cx="88" cy="45" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <text x="81" y="24" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">T1 (11/132kV)</text>

                {/* Transmission Line */}
                <line x1="102" y1="45" x2="230" y2="45" stroke="#10b981" strokeWidth="2.5" strokeDasharray="3,2" />
                <text x="166" y="38" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">132 kV Grid Line</text>
                <text x="166" y="58" fill="#6ee7b7" fontSize="7" fontFamily="monospace" textAnchor="middle">
                  Z_pu = {(calcMode === 'baseChange' ? zNewPu : computedPuFromOhm).toFixed(3)}
                </text>

                {/* Transformer 2 */}
                <circle cx="245" cy="45" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <circle cx="258" cy="45" r="10" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <text x="251" y="24" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">T2 (132/33kV)</text>

                {/* Load Bus */}
                <line x1="272" y1="45" x2="310" y2="45" stroke="#ec4899" strokeWidth="2.5" />
                <polygon points="310,40 330,45 310,50" fill="#ec4899" />
                <text x="345" y="48" fill="#ec4899" fontSize="8" fontWeight="bold">LOAD</text>
                <text x="320" y="68" fill="#94a3b8" fontSize="7" textAnchor="middle">33 kV</text>
              </svg>
            </div>
          </div>

          {/* Quick Insights */}
          <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-1">
            <div className="text-amber-400 font-semibold mb-1 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" /> {t.insightsTitle}
            </div>
            <p>• {t.insight1}</p>
            <p>• {t.insight2}</p>
            <p>• {t.insight3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
