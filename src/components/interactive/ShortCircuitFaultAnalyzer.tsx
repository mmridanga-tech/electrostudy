import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { ShieldAlert, Zap, AlertTriangle, Activity, Sliders, Layers } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const ShortCircuitFaultAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const idPrefix = useId();

  // Inputs
  const [faultType, setFaultType] = useState<'3ph' | 'slg' | 'll' | 'dlg'>('slg');
  const [vBaseKv, setVBaseKv] = useState<number>(33);       // kV Base Line-to-Line
  const [sBaseMva, setSBaseMva] = useState<number>(100);    // MVA Base
  const [prefaultVpu, setPrefaultVpu] = useState<number>(1.00); // 1.0 p.u.

  // Thevenin Sequence Impedances in p.u.
  const [z1Pu, setZ1Pu] = useState<number>(0.15); // Positive sequence reactance (X1)
  const [z2Pu, setZ2Pu] = useState<number>(0.15); // Negative sequence reactance (X2 ≈ X1 for static network)
  const [z0Pu, setZ0Pu] = useState<number>(0.35); // Zero sequence reactance (X0)
  const [zfPu, setZfPu] = useState<number>(0.00); // Fault impedance (Zf)

  // Base Current in kA: I_base = S_base_MVA / (sqrt(3) * V_base_kV)
  const iBaseKa = sBaseMva / (Math.sqrt(3) * (vBaseKv || 1));

  // Sequence Currents calculation (in p.u.)
  let ia1Pu = 0;
  let ia2Pu = 0;
  let ia0Pu = 0;
  let ifaultPu = 0;

  const ea = prefaultVpu;

  if (faultType === '3ph') {
    // 3-Phase Symmetrical Fault
    ia1Pu = ea / (z1Pu + zfPu || 0.001);
    ia2Pu = 0;
    ia0Pu = 0;
    ifaultPu = ia1Pu;
  } else if (faultType === 'slg') {
    // Single Line-to-Ground (SLG): Networks in Series
    const totalZ = z1Pu + z2Pu + z0Pu + 3 * zfPu;
    ia1Pu = ea / (totalZ || 0.001);
    ia2Pu = ia1Pu;
    ia0Pu = ia1Pu;
    ifaultPu = 3 * ia0Pu; // If = Ia = Ia1 + Ia2 + Ia0 = 3*Ia0
  } else if (faultType === 'll') {
    // Line-to-Line (L-L): Positive and Negative in parallel-opposed
    const totalZ = z1Pu + z2Pu + zfPu;
    ia1Pu = ea / (totalZ || 0.001);
    ia2Pu = -ia1Pu;
    ia0Pu = 0;
    ifaultPu = Math.sqrt(3) * ia1Pu; // If = Ib = -Ic = -j*sqrt(3)*Ia1
  } else if (faultType === 'dlg') {
    // Double Line-to-Ground (D-L-G): Networks in parallel
    const parallelBranch = (z2Pu * (z0Pu + 3 * zfPu)) / (z2Pu + z0Pu + 3 * zfPu || 0.001);
    ia1Pu = ea / (z1Pu + parallelBranch || 0.001);
    ia2Pu = -ia1Pu * ((z0Pu + 3 * zfPu) / (z2Pu + z0Pu + 3 * zfPu || 0.001));
    ia0Pu = -ia1Pu * (z2Pu / (z2Pu + z0Pu + 3 * zfPu || 0.001));
    ifaultPu = 3 * Math.abs(ia0Pu); // Ground return current Ig = 3*Ia0
  }

  // Fault Current in kA
  const ifaultKa = ifaultPu * iBaseKa;

  // Short-Circuit MVA = sqrt(3) * V_base_kV * I_fault_kA = S_base_MVA * I_fault_pu
  const faultMva = sBaseMva * ifaultPu;

  // Recommended Circuit Breaker Breaking Capacity (standard kA rating with 20% margin)
  const minBreakerKa = ifaultKa * 1.25;
  const standardBreakerRatings = [13.1, 16.0, 20.0, 25.0, 31.5, 40.0, 50.0, 63.0];
  const selectedBreakerRating = standardBreakerRatings.find((r) => r >= minBreakerKa) || 63.0;

  const t = {
    en: {
      title: 'Three-Phase & Asymmetrical Short-Circuit Analyzer',
      subtitle: 'Calculate symmetrical and unsymmetrical fault currents, sequence networks, and circuit-breaker breaking duties',
      faultSelect: 'Fault Geometry & Type',
      type3Ph: 'Three-Phase Symmetrical (L-L-L-G)',
      typeSLG: 'Single Line-to-Ground (SLG)',
      typeLL: 'Line-to-Line (L-L)',
      typeDLG: 'Double Line-to-Ground (D-L-G)',
      seqImpedances: 'Thévenin Sequence Impedances (p.u.)',
      z1Label: 'Positive Sequence (Z1 = X1):',
      z2Label: 'Negative Sequence (Z2 = X2):',
      z0Label: 'Zero Sequence (Z0 = X0):',
      zfLabel: 'Fault Arc Impedance (Zf):',
      baseRatings: 'System Base Quantities',
      vBaseLabel: 'Base Voltage (kV LL):',
      sBaseLabel: 'Base Power (MVA):',
      resultsTitle: 'Short-Circuit Fault Duties & Currents',
      ifPuLabel: 'Fault Current in Per-Unit (I_f, p.u.):',
      ifKaLabel: 'Symmetrical RMS Fault Current (I_f):',
      faultMvaLabel: 'Short-Circuit Fault Level (MVA):',
      cbTitle: 'Circuit Breaker Interrupting Rating Selection',
      minDutyLabel: 'Required Interrupting Duty (+25% safety factor):',
      selectedCbLabel: 'Standard IEC 62271 Breaker Rating:',
      seqTopologyTitle: 'Sequence Network Interconnection'
    },
    hi: {
      title: 'थ्री-फेज एवं असममित शॉर्ट-सर्किट विश्लेषक',
      subtitle: 'सममित और असममित फॉल्ट धाराओं, सीक्वेंस नेटवर्क और सर्किट ब्रेकर क्षमता की गणना करें',
      faultSelect: 'फॉल्ट प्रकार का चयन',
      type3Ph: 'थ्री-फेज सममित (3-Phase Symmetrical)',
      typeSLG: 'सिंगल लाइन-टू-ग्राउंड (SLG)',
      typeLL: 'लाइन-टू-लाइन (L-L)',
      typeDLG: 'डबल लाइन-टू-ग्राउंड (D-L-G)',
      seqImpedances: 'थेवेनिन सीक्वेंस प्रतिबाधा (p.u.)',
      z1Label: 'धनात्मक अनुक्रम (Z1 = X1):',
      z2Label: 'ऋणात्मक अनुक्रम (Z2 = X2):',
      z0Label: 'शून्य अनुक्रम (Z0 = X0):',
      zfLabel: 'फॉल्ट आर्क प्रतिबाधा (Zf):',
      baseRatings: 'सिस्टम आधार राशियाँ',
      vBaseLabel: 'आधार वोल्टेज (kV LL):',
      sBaseLabel: 'आधार शक्ति (MVA):',
      resultsTitle: 'शॉर्ट-सर्किट फॉल्ट ड्यूटी एवं धाराएँ',
      ifPuLabel: 'प्रति-इकाई फॉल्ट धारा (I_f, p.u.):',
      ifKaLabel: 'सममित RMS फॉल्ट धारा (I_f):',
      faultMvaLabel: 'शॉर्ट-सर्किट MVA स्तर:',
      cbTitle: 'सर्किट ब्रेकर इंटरप्टिंग रेटिंग चयन',
      minDutyLabel: 'आवश्यक ब्रेकिंग क्षमता (+25% सुरक्षा मार्जिन):',
      selectedCbLabel: 'मानक IEC 62271 ब्रेकर रेटिंग:',
      seqTopologyTitle: 'सीक्वेंस नेटवर्क संयोजन'
    },
    bn: {
      title: 'থ্রি-ফেজ ও অপ্রতিসম শর্ট-সার্কিট অ্যানালাইজার',
      subtitle: 'প্রতিসম ও অপ্রতিসম ফল্ট কারেন্ট, সিকোয়েন্স নেটওয়ার্ক এবং সার্কিট ব্রেকার ব্রেকিং ক্যাপাসিটি নির্ণয় করুন',
      faultSelect: 'ফল্ট ধরন নির্বাচন',
      type3Ph: 'থ্রি-ফেজ প্রতিসম ফল্ট (3-Phase)',
      typeSLG: 'সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG)',
      typeLL: 'লাইন-টু-লাইন (L-L)',
      typeDLG: 'ডাবল লাইন-টু-গ্রাউন্ড (D-L-G)',
      seqImpedances: 'থেভেনিন সিকোয়েন্স ইম্পিডেন্স (p.u.)',
      z1Label: 'পজিটিভ সিকোয়েন্স (Z1 = X1):',
      z2Label: 'নেগেটিভ সিকোয়েন্স (Z2 = X2):',
      z0Label: 'জিরো সিকোয়েন্স (Z0 = X0):',
      zfLabel: 'ফল্ট আর্ক ইম্পিডেন্স (Zf):',
      baseRatings: 'সিস্টেম বেস রাশি',
      vBaseLabel: 'বেস ভোল্টেজ (kV LL):',
      sBaseLabel: 'বেস পাওয়ার (MVA):',
      resultsTitle: 'শর্ট-সার্কিট ফল্ট লেভেল ও কারেন্ট',
      ifPuLabel: 'পার-ইউনিট ফল্ট কারেন্ট (I_f, p.u.):',
      ifKaLabel: 'প্রতিসম RMS ফল্ট কারেন্ট (I_f):',
      faultMvaLabel: 'শর্ট-সার্কিট ফল্ট MVA:',
      cbTitle: 'সার্কিট ব্রেকার ইন্টারাপ্টিং রেটিং নির্বাচন',
      minDutyLabel: 'প্রয়োজনীয় ব্রেকিং ক্ষমতা (+২৫% সুরক্ষা মার্জিন):',
      selectedCbLabel: 'স্ট্যান্ডার্ড IEC 62271 ব্রেকার রেটিং:',
      seqTopologyTitle: 'সিকোয়েন্স নেটওয়ার্ক ইন্টারসংযোগ'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-rose-500" />
            <h3 className="text-xl font-bold text-rose-400">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <span className="px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/30 rounded-full text-xs font-mono font-semibold">
          IEC 60909 Fault Analysis
        </span>
      </div>

      {/* Fault Type Selection Buttons */}
      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          {t.faultSelect}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: '3ph', label: t.type3Ph },
            { id: 'slg', label: t.typeSLG },
            { id: 'll', label: t.typeLL },
            { id: 'dlg', label: t.typeDLG }
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setFaultType(item.id as any)}
              className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all ${
                faultType === item.id
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Sequence Network Parameters */}
        <div className="space-y-4">
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-3">
            <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5" /> {t.seqImpedances}
            </h4>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <label htmlFor={`${idPrefix}-z1`}>{t.z1Label}</label>
                <span className="font-mono text-sky-400 font-bold">j{z1Pu.toFixed(2)} p.u.</span>
              </div>
              <input
                id={`${idPrefix}-z1`}
                type="range"
                min="0.05"
                max="0.40"
                step="0.01"
                value={z1Pu}
                onChange={(e) => setZ1Pu(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <label htmlFor={`${idPrefix}-z2`}>{t.z2Label}</label>
                <span className="font-mono text-amber-400 font-bold">j{z2Pu.toFixed(2)} p.u.</span>
              </div>
              <input
                id={`${idPrefix}-z2`}
                type="range"
                min="0.05"
                max="0.40"
                step="0.01"
                value={z2Pu}
                onChange={(e) => setZ2Pu(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <label htmlFor={`${idPrefix}-z0`}>{t.z0Label}</label>
                <span className="font-mono text-pink-400 font-bold">j{z0Pu.toFixed(2)} p.u.</span>
              </div>
              <input
                id={`${idPrefix}-z0`}
                type="range"
                min="0.10"
                max="0.80"
                step="0.02"
                value={z0Pu}
                onChange={(e) => setZ0Pu(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-400"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <label htmlFor={`${idPrefix}-zf`}>{t.zfLabel}</label>
                <span className="font-mono text-emerald-400 font-bold">{zfPu.toFixed(2)} p.u. (Solid = 0)</span>
              </div>
              <input
                id={`${idPrefix}-zf`}
                type="range"
                min="0.00"
                max="0.20"
                step="0.01"
                value={zfPu}
                onChange={(e) => setZfPu(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>
          </div>

          {/* Base Quantities Inputs */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              {t.baseRatings}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor={`${idPrefix}-vbase`} className="block text-xs text-slate-400 mb-1">{t.vBaseLabel}</label>
                <select
                  id={`${idPrefix}-vbase`}
                  value={vBaseKv}
                  onChange={(e) => setVBaseKv(parseFloat(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2 py-1.5 text-xs text-white font-mono"
                >
                  <option value="11">11 kV (Distribution)</option>
                  <option value="33">33 kV (Sub-Transmission)</option>
                  <option value="132">132 kV (Transmission)</option>
                  <option value="220">220 kV (Bulk Grid)</option>
                  <option value="400">400 kV (EHV Supergrid)</option>
                </select>
              </div>
              <div>
                <label htmlFor={`${idPrefix}-sbase`} className="block text-xs text-slate-400 mb-1">{t.sBaseLabel}</label>
                <input
                  id={`${idPrefix}-sbase`}
                  type="number"
                  min="10"
                  max="1000"
                  value={sBaseMva}
                  onChange={(e) => setSBaseMva(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Results & Circuit Breaker Sizing */}
        <div className="space-y-4">
          {/* Fault Calculation Display */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-4 rounded-xl border border-rose-500/30 space-y-2.5 text-xs">
            <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> {t.resultsTitle}
            </h4>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.ifPuLabel}</span>
              <span className="font-mono text-amber-300 font-bold text-sm">
                {ifaultPu.toFixed(3)} p.u.
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.ifKaLabel}</span>
              <span className="font-mono text-rose-400 font-extrabold text-base">
                {ifaultKa.toFixed(2)} kA (RMS)
              </span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-slate-400">{t.faultMvaLabel}</span>
              <span className="font-mono text-sky-300 font-bold text-base">
                {faultMva.toFixed(1)} MVA
              </span>
            </div>
          </div>

          {/* Breaker Selection Card */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-2 text-xs">
            <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5" /> {t.cbTitle}
            </h4>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.minDutyLabel}</span>
              <span className="font-mono text-amber-300 font-bold">{minBreakerKa.toFixed(2)} kA</span>
            </div>

            <div className="flex justify-between py-1.5 bg-emerald-950/20 px-2 rounded border border-emerald-500/30">
              <span className="text-emerald-300 font-semibold">{t.selectedCbLabel}</span>
              <span className="font-mono text-emerald-400 font-extrabold text-sm">
                {selectedBreakerRating.toFixed(1)} kA
              </span>
            </div>

            <div className="text-[11px] text-slate-400 pt-1">
              Sequence connection topology:{' '}
              <strong className="text-white">
                {faultType === '3ph' && 'Positive sequence isolated network (Ia = Ea / Z1)'}
                {faultType === 'slg' && 'Series interconnection: Z1 + Z2 + Z0 in series (3·Ia0)'}
                {faultType === 'll' && 'Parallel-opposed: Z1 || Z2 in parallel with zero-sequence open'}
                {faultType === 'dlg' && 'Parallel-common: Z1 in series with (Z2 || (Z0 + 3Zf))'}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
