import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Network, Activity, Eye, ShieldCheck, Cpu } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const SingleLinePowerSystemModeler: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const idPrefix = useId();

  // Model parameters (in p.u. on 100 MVA base)
  const [xGen, setXGen] = useState<number>(0.15);      // Generator subtransient reactance X"d
  const [xT1, setXT1] = useState<number>(0.10);        // T1 Step-up transformer
  const [xLine, setXLine] = useState<number>(0.25);    // Transmission Line
  const [xT2, setXT2] = useState<number>(0.08);        // T2 Step-down transformer
  const [pLoad, setPLoad] = useState<number>(0.80);    // Load Active Power in p.u.
  const [qLoad, setQLoad] = useState<number>(0.30);    // Load Reactive Power in p.u.

  // View mode
  const [viewMode, setViewMode] = useState<'sld' | 'reactance' | 'admittance'>('sld');

  // Total series Thévenin reactance from generator neutral to load bus
  const totalXSeries = xGen + xT1 + xLine + xT2;
  const loadKva = Math.sqrt(pLoad * pLoad + qLoad * qLoad);
  const loadPf = pLoad / (loadKva || 1);

  // Approximate voltage drop: ΔV_pu ≈ P·R + Q·X ≈ Q·X (assuming R ≈ 0)
  const vGen = 1.05; // p.u. terminal voltage
  const approxVDrop = qLoad * totalXSeries;
  const vLoadEstimated = Math.max(0.70, vGen - approxVDrop);

  // 4-Bus Admittance Matrix Elements (simplified lossless line where Y_ij = -j / X_ij)
  const b12 = -1 / (xT1 || 0.01);
  const b23 = -1 / (xLine || 0.01);
  const b34 = -1 / (xT2 || 0.01);

  const t = {
    en: {
      title: 'Single-Line Diagram (SLD) & Reactance Network Modeler',
      subtitle: 'Transform complex 3-phase physical plant layouts into normalized positive-sequence reactance models',
      viewSLD: 'Physical Single-Line View',
      viewReactance: 'Per-Unit Reactance Diagram',
      viewAdmittance: 'Bus Admittance (Y_bus) View',
      parametersTitle: 'System Component Parameters (p.u. on 100 MVA Base)',
      genLabel: 'Generator Subtransient Reactance (X"d):',
      t1Label: 'T1 Step-Up Transformer (X_T1):',
      lineLabel: 'Transmission Line Series Reactance (X_line):',
      t2Label: 'T2 Step-Down Transformer (X_T2):',
      loadPLabel: 'Load Active Power (P_load, p.u.):',
      loadQLabel: 'Load Reactive Power (Q_load, p.u.):',
      modelSummary: 'Network Synthesis & Transfer Reactance',
      totalX: 'Total Transfer Reactance (X_th):',
      loadPfLabel: 'Load Operating Power Factor:',
      estVLoad: 'Estimated Load Bus Voltage (V4):',
      captionSLD: 'Standard IEC 60617 Single-Line Diagram showing circuit breakers, busbars, and instrument transformers.',
      captionReactance: 'Positive-sequence per-unit reactance diagram ready for load-flow and short-circuit solver engines.',
      captionAdmittance: 'Sparse Bus Admittance Matrix [Y_bus] showing mutual and self susceptances.'
    },
    hi: {
      title: 'सिंगल-लाइन आरेख (SLD) एवं प्रतिघात नेटवर्क मॉडलर',
      subtitle: 'जटिल 3-फेज भौतिक पावर प्लांट लेआउट को मानक पॉजिटिव-सीक्वेंस प्रतिघात मॉडल में रूपांतरित करें',
      viewSLD: 'भौतिक सिंगल-लाइन दृश्य (SLD)',
      viewReactance: 'प्रति-इकाई प्रतिघात आरेख (Reactance Diagram)',
      viewAdmittance: 'बस प्रवेश्यता (Y_bus) दृश्य',
      parametersTitle: 'सिस्टम घटक पैरामीटर (100 MVA आधार पर p.u.)',
      genLabel: 'जनरेटर सबट्रांजिएंट प्रतिघात (X"d):',
      t1Label: 'T1 स्टेप-अप ट्रांसफॉर्मर (X_T1):',
      lineLabel: 'पारेषण लाइन सीरीज प्रतिघात (X_line):',
      t2Label: 'T2 स्टेप-डाउन ट्रांसफॉर्मर (X_T2):',
      loadPLabel: 'लोड सक्रिय शक्ति (P_load, p.u.):',
      loadQLabel: 'लोड प्रतिघाती शक्ति (Q_load, p.u.):',
      modelSummary: 'नेटवर्क संश्लेषण एवं थेवेनिन प्रतिघात',
      totalX: 'कुल ट्रांसफर प्रतिघात (X_th):',
      loadPfLabel: 'लोड पावर फैक्टर:',
      estVLoad: 'अनुमानित लोड बस वोल्टेज (V4):',
      captionSLD: 'मानक IEC 60617 सिंगल-लाइन आरेख जिसमें सर्किट ब्रेकर, बसबार और ट्रांसफॉर्मर शामिल हैं।',
      captionReactance: 'लोड-फ्लो एवं फॉल्ट विश्लेषण हेतु तैयार पॉजिटिव-सीक्वेंस प्रतिघात आरेख।',
      captionAdmittance: 'स्पार्स बस एडमिटेंस मैट्रिक्स [Y_bus] जो सेल्फ और म्युचुअल ससेप्टेंस दर्शाती है।'
    },
    bn: {
      title: 'সিঙ্গেল-লাইন ডায়াগ্রাম (SLD) ও রিঅ্যাক্ট্যান্স নেটওয়ার্ক মডেলিং',
      subtitle: 'জটিল ৩-ফেজ ফিজিক্যাল লেআউটকে স্ট্যান্ডার্ড পজিটিভ-সিকোয়েন্স পার-ইউনিট মডেলে রূপান্তর করুন',
      viewSLD: 'ফিজিক্যাল সিঙ্গেল-লাইন ভিউ',
      viewReactance: 'পার-ইউনিট রিঅ্যাক্ট্যান্স ডায়াগ্রাম',
      viewAdmittance: 'বাস অ্যাডমিট্যান্স (Y_bus) ভিউ',
      parametersTitle: 'সিস্টেম কম্পোনেন্ট প্যারামিটার (১০০ MVA বেসে p.u.)',
      genLabel: 'জেনারেটর সাবট্রানজিয়েন্ট রিঅ্যাক্ট্যান্স (X"d):',
      t1Label: 'T1 স্টেপ-আপ ট্রান্সফরমার (X_T1):',
      lineLabel: 'ট্রান্সমিশন লাইন সিরিজ রিঅ্যাক্ট্যান্স (X_line):',
      t2Label: 'T2 স্টেপ-ডাউন ট্রান্সফরমার (X_T2):',
      loadPLabel: 'লোড অ্যাক্টিভ পাওয়ার (P_load, p.u.):',
      loadQLabel: 'লোড রিঅ্যাক্টিভ পাওয়ার (Q_load, p.u.):',
      modelSummary: 'নেটওয়ার্ক থ্রি-ফেজ সমন্বয় ও মোট রিঅ্যাক্ট্যান্স',
      totalX: 'মোট ট্রান্সফার রিঅ্যাক্ট্যান্স (X_th):',
      loadPfLabel: 'লোড অপারেটিং পাওয়ার ফ্যাক্টর:',
      estVLoad: 'আনুমানিক লোড বাস ভোল্টেজ (V4):',
      captionSLD: 'স্ট্যান্ডার্ড IEC 60617 সিঙ্গেল-লাইন ডায়াগ্রাম যেখানে সার্কিট ব্রেকার, বাসবার ও ট্রান্সফরমার দৃশ্যমান।',
      captionReactance: 'লোড-ফ্লো ও ফল্ট বিশ্লেষণের জন্য পজিটিভ-সিকোয়েন্স পার-ইউনিট রিঅ্যাক্ট্যান্স মডেল।',
      captionAdmittance: 'স্পার্স বাস অ্যাডমিট্যান্স ম্যাট্রিক্স [Y_bus] যেখানে সেলফ ও মিউচুয়াল সাসিপট্যান্স রয়েছে।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Network className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold text-amber-400">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full text-xs font-mono font-semibold">
          Bus Network Engine
        </span>
      </div>

      {/* View Switcher Tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          type="button"
          onClick={() => setViewMode('sld')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
            viewMode === 'sld'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          {t.viewSLD}
        </button>
        <button
          type="button"
          onClick={() => setViewMode('reactance')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
            viewMode === 'reactance'
              ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          {t.viewReactance}
        </button>
        <button
          type="button"
          onClick={() => setViewMode('admittance')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
            viewMode === 'admittance'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          {t.viewAdmittance}
        </button>
      </div>

      {/* Main Diagram Stage */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mb-6">
        {viewMode === 'sld' && (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 540 140" className="w-full h-36">
              {/* Generator G1 */}
              <circle cx="35" cy="70" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="35" y="74" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">G1</text>
              <text x="35" y="102" fill="#94a3b8" fontSize="7.5" textAnchor="middle">11 kV / 100MVA</text>

              {/* CB1 */}
              <line x1="53" y1="70" x2="75" y2="70" stroke="#38bdf8" strokeWidth="2" />
              <rect x="75" y="63" width="14" height="14" rx="2" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
              <text x="82" y="73" fill="#ef4444" fontSize="6.5" fontWeight="bold" textAnchor="middle">CB</text>

              {/* Bus 1 */}
              <line x1="100" y1="35" x2="100" y2="105" stroke="#f59e0b" strokeWidth="3.5" />
              <text x="100" y="28" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">BUS 1</text>

              {/* T1 Step-Up */}
              <line x1="100" y1="70" x2="130" y2="70" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="142" cy="70" r="12" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <circle cx="156" cy="70" r="12" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <text x="149" y="48" fill="#f59e0b" fontSize="7.5" fontWeight="bold" textAnchor="middle">T1 (11/132kV)</text>

              {/* Bus 2 */}
              <line x1="185" y1="35" x2="185" y2="105" stroke="#f59e0b" strokeWidth="3.5" />
              <text x="185" y="28" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">BUS 2</text>

              {/* Transmission Line */}
              <line x1="185" y1="70" x2="330" y2="70" stroke="#10b981" strokeWidth="2.5" strokeDasharray="4,2" />
              <text x="257" y="62" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">132 kV Grid Line</text>
              <text x="257" y="84" fill="#6ee7b7" fontSize="7" textAnchor="middle">X = {xLine.toFixed(2)} p.u.</text>

              {/* Bus 3 */}
              <line x1="330" y1="35" x2="330" y2="105" stroke="#f59e0b" strokeWidth="3.5" />
              <text x="330" y="28" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">BUS 3</text>

              {/* T2 Step-Down */}
              <line x1="330" y1="70" x2="360" y2="70" stroke="#94a3b8" strokeWidth="2" />
              <circle cx="372" cy="70" r="12" fill="none" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="386" cy="70" r="12" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <text x="379" y="48" fill="#f59e0b" fontSize="7.5" fontWeight="bold" textAnchor="middle">T2 (132/33kV)</text>

              {/* Bus 4 */}
              <line x1="415" y1="35" x2="415" y2="105" stroke="#f59e0b" strokeWidth="3.5" />
              <text x="415" y="28" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">BUS 4</text>

              {/* Load Arrow */}
              <line x1="415" y1="70" x2="465" y2="70" stroke="#ec4899" strokeWidth="2" />
              <polygon points="465,64 485,70 465,76" fill="#ec4899" />
              <text x="495" y="73" fill="#ec4899" fontSize="8" fontWeight="bold">LOAD</text>
              <text x="495" y="85" fill="#f472b6" fontSize="7">{pLoad} + j{qLoad} p.u.</text>
            </svg>
            <p className="text-xs text-slate-400 mt-2 text-center">{t.captionSLD}</p>
          </div>
        )}

        {viewMode === 'reactance' && (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 540 140" className="w-full h-36">
              {/* Reference Neutral Bus */}
              <line x1="30" y1="120" x2="490" y2="120" stroke="#64748b" strokeWidth="2" />
              <text x="260" y="133" fill="#94a3b8" fontSize="8" textAnchor="middle">Zero-Potential Reference Neutral Bus</text>

              {/* Generator EMF Source */}
              <circle cx="50" cy="80" r="12" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
              <text x="50" y="84" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Eg</text>
              <line x1="50" y1="92" x2="50" y2="120" stroke="#64748b" strokeWidth="1.5" />
              <line x1="50" y1="68" x2="50" y2="40" stroke="#38bdf8" strokeWidth="2" />

              {/* X_gen Inductor */}
              <rect x="70" y="32" width="30" height="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" rx="2" />
              <text x="85" y="43" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">j{xGen}</text>
              <line x1="50" y1="40" x2="70" y2="40" stroke="#38bdf8" strokeWidth="2" />
              <line x1="100" y1="40" x2="130" y2="40" stroke="#f59e0b" strokeWidth="2" />

              {/* Bus 1 Dot */}
              <circle cx="130" cy="40" r="4" fill="#f59e0b" />
              <text x="130" y="28" fill="#f59e0b" fontSize="7.5" fontWeight="bold" textAnchor="middle">B1</text>

              {/* X_T1 Inductor */}
              <rect x="150" y="32" width="30" height="16" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" rx="2" />
              <text x="165" y="43" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">j{xT1}</text>
              <line x1="130" y1="40" x2="150" y2="40" stroke="#f59e0b" strokeWidth="2" />
              <line x1="180" y1="40" x2="210" y2="40" stroke="#f59e0b" strokeWidth="2" />

              {/* Bus 2 Dot */}
              <circle cx="210" cy="40" r="4" fill="#f59e0b" />
              <text x="210" y="28" fill="#f59e0b" fontSize="7.5" fontWeight="bold" textAnchor="middle">B2</text>

              {/* X_line Inductor */}
              <rect x="235" y="32" width="35" height="16" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" rx="2" />
              <text x="252" y="43" fill="#10b981" fontSize="7" fontWeight="bold" textAnchor="middle">j{xLine}</text>
              <line x1="210" y1="40" x2="235" y2="40" stroke="#10b981" strokeWidth="2" />
              <line x1="270" y1="40" x2="295" y2="40" stroke="#10b981" strokeWidth="2" />

              {/* Bus 3 Dot */}
              <circle cx="295" cy="40" r="4" fill="#f59e0b" />
              <text x="295" y="28" fill="#f59e0b" fontSize="7.5" fontWeight="bold" textAnchor="middle">B3</text>

              {/* X_T2 Inductor */}
              <rect x="320" y="32" width="30" height="16" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" rx="2" />
              <text x="335" y="43" fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="middle">j{xT2}</text>
              <line x1="295" y1="40" x2="320" y2="40" stroke="#f59e0b" strokeWidth="2" />
              <line x1="350" y1="40" x2="380" y2="40" stroke="#f59e0b" strokeWidth="2" />

              {/* Bus 4 Dot */}
              <circle cx="380" cy="40" r="4" fill="#f59e0b" />
              <text x="380" y="28" fill="#f59e0b" fontSize="7.5" fontWeight="bold" textAnchor="middle">B4</text>

              {/* Load Impedance Block */}
              <rect x="405" y="32" width="35" height="16" fill="#1e293b" stroke="#ec4899" strokeWidth="1.5" rx="2" />
              <text x="422" y="43" fill="#ec4899" fontSize="7" fontWeight="bold" textAnchor="middle">Z_L</text>
              <line x1="380" y1="40" x2="405" y2="40" stroke="#ec4899" strokeWidth="2" />
              <line x1="440" y1="40" x2="470" y2="40" stroke="#ec4899" strokeWidth="2" />
              <line x1="470" y1="40" x2="470" y2="120" stroke="#64748b" strokeWidth="1.5" />
            </svg>
            <p className="text-xs text-slate-400 mt-2 text-center">{t.captionReactance}</p>
          </div>
        )}

        {viewMode === 'admittance' && (
          <div className="p-2 text-xs font-mono">
            <div className="text-emerald-400 font-bold mb-2">Bus Admittance Matrix [Y_bus] (Lossless approximation in p.u.):</div>
            <div className="bg-slate-900 border border-slate-800 rounded p-3 overflow-x-auto text-slate-300">
              <pre>
{`[Y_bus] = 
[  -j${(-b12).toFixed(2)}    +j${(-b12).toFixed(2)}          0               0       ] (Bus 1)
[  +j${(-b12).toFixed(2)}   -j${(-b12 - b23).toFixed(2)}   +j${(-b23).toFixed(2)}          0       ] (Bus 2)
[       0          +j${(-b23).toFixed(2)}   -j${(-b23 - b34).toFixed(2)}   +j${(-b34).toFixed(2)}  ] (Bus 3)
[       0                 0          +j${(-b34).toFixed(2)}    -j${(-b34).toFixed(2)}  ] (Bus 4)`}
              </pre>
            </div>
            <p className="text-slate-400 mt-2 text-center">{t.captionAdmittance}</p>
          </div>
        )}
      </div>

      {/* Component Parameters & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-3">
          <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" /> {t.parametersTitle}
          </h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-xgen`}>{t.genLabel}</label>
              <span className="font-mono text-sky-400 font-bold">j{xGen.toFixed(2)} p.u.</span>
            </div>
            <input
              id={`${idPrefix}-xgen`}
              type="range"
              min="0.05"
              max="0.40"
              step="0.01"
              value={xGen}
              onChange={(e) => setXGen(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-xt1`}>{t.t1Label}</label>
              <span className="font-mono text-amber-400 font-bold">j{xT1.toFixed(2)} p.u.</span>
            </div>
            <input
              id={`${idPrefix}-xt1`}
              type="range"
              min="0.04"
              max="0.20"
              step="0.01"
              value={xT1}
              onChange={(e) => setXT1(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-xline`}>{t.lineLabel}</label>
              <span className="font-mono text-emerald-400 font-bold">j{xLine.toFixed(2)} p.u.</span>
            </div>
            <input
              id={`${idPrefix}-xline`}
              type="range"
              min="0.05"
              max="0.60"
              step="0.01"
              value={xLine}
              onChange={(e) => setXLine(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-xt2`}>{t.t2Label}</label>
              <span className="font-mono text-amber-400 font-bold">j{xT2.toFixed(2)} p.u.</span>
            </div>
            <input
              id={`${idPrefix}-xt2`}
              type="range"
              min="0.04"
              max="0.20"
              step="0.01"
              value={xT2}
              onChange={(e) => setXT2(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
          </div>
        </div>

        {/* Right: Load & Results */}
        <div className="space-y-4">
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-3">
            <h4 className="text-xs font-semibold text-pink-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Bus 4 Load Parameters
            </h4>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <label htmlFor={`${idPrefix}-pload`}>{t.loadPLabel}</label>
                <span className="font-mono text-pink-400 font-bold">{pLoad.toFixed(2)} p.u. ({(pLoad * 100).toFixed(0)} MW)</span>
              </div>
              <input
                id={`${idPrefix}-pload`}
                type="range"
                min="0.10"
                max="1.50"
                step="0.05"
                value={pLoad}
                onChange={(e) => setPLoad(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-400"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <label htmlFor={`${idPrefix}-qload`}>{t.loadQLabel}</label>
                <span className="font-mono text-pink-400 font-bold">{qLoad.toFixed(2)} p.u. ({(qLoad * 100).toFixed(0)} MVAR)</span>
              </div>
              <input
                id={`${idPrefix}-qload`}
                type="range"
                min="0.00"
                max="0.80"
                step="0.05"
                value={qLoad}
                onChange={(e) => setQLoad(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-pink-400"
              />
            </div>
          </div>

          {/* Computed Summary */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              {t.modelSummary}
            </div>

            <div className="flex justify-between text-sm py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.totalX}</span>
              <span className="font-mono font-bold text-amber-300">j{totalXSeries.toFixed(3)} p.u.</span>
            </div>

            <div className="flex justify-between text-sm py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.loadPfLabel}</span>
              <span className="font-mono font-bold text-sky-300">{loadPf.toFixed(3)} lagging</span>
            </div>

            <div className="flex justify-between text-sm py-1">
              <span className="text-slate-400">{t.estVLoad}</span>
              <span className={`font-mono font-bold text-base ${vLoadEstimated >= 0.95 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {vLoadEstimated.toFixed(3)} p.u. ({(vLoadEstimated * 33).toFixed(1)} kV)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
