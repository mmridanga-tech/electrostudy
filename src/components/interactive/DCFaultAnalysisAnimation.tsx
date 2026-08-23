import React, { useState } from 'react';
import { Language } from '../../types';
import { RotateCcw, AlertTriangle, CheckCircle2, ShieldAlert, Activity, Search, Gauge } from 'lucide-react';

interface Props {
  currentLanguage: Language;
}

type FaultType = 'normal' | 'open_r2' | 'short_r2' | 'high_res_r3' | 'supply_failure';
type MeterMode = 'voltmeter' | 'ammeter' | 'ohmmeter';

const LABELS = {
  en: {
    title: 'DC Network Fault Analysis & Bridge Diagnostic Simulator',
    subtitle: 'Simulating controlled DC network faults (open circuits, short circuits, high-resistance connections) and Wheatstone bridge balance analysis.',
    selectFault: 'Select Simulated Network Fault Condition',
    normal: 'Normal Operation (Balanced Bridge)',
    open_r2: 'Open-Circuit Fault (Branch R2 Open)',
    short_r2: 'Short-Circuit Fault (Branch R2 Shorted)',
    high_res_r3: 'High-Resistance Fault (R3 Contact Oxidation)',
    supply_failure: 'Power Supply Failure (Vs = 0 V)',
    measurementMode: 'Select Diagnostic Meter Mode',
    voltmeterMode: 'Voltmeter (Voltage Test across Nodes)',
    ammeterMode: 'Ammeter (Current Flow in Branches)',
    ohmmeterMode: 'Ohmmeter (De-energized Resistance Test)',
    liveMeasurements: 'Diagnostic Meter Readings & Troubleshooting Analysis',
    expectedVal: 'Nominal (Expected) Reading',
    observedVal: 'Observed Reading',
    deviation: 'Measurement Deviation / Status',
    bridgeBalance: 'Wheatstone Bridge Balance Assessment',
    ratio12: 'Arm 1 Ratio (R1 / R2)',
    ratio34: 'Arm 2 Ratio (R3 / R4)',
    detectorCurrent: 'Galvanometer Detector Current (ID)',
    bridgeStatusBalanced: 'BRIDGE BALANCED (R1/R2 = R3/R4, ID = 0.00 mA)',
    bridgeStatusUnbalanced: 'BRIDGE UNBALANCED (R1/R2 ≠ R3/R4, ID ≠ 0.00 mA)',
    faultDiagnosisTitle: 'Engineering Diagnostic Report',
    rulesTitle: 'Safe DC Network Troubleshooting Sequence',
    rulesText: '1. Verify power supply presence first. 2. Measure node voltages against reference ground. 3. Isolate suspected branches before measuring resistance with an ohmmeter on DE-ENERGIZED circuits only. Never apply ohmmeter to live voltage!',
    reset: 'Reset Diagnostic'
  },
  hi: {
    title: 'डीसी नेटवर्क फॉल्ट विश्लेषण एवं ब्रिज डायग्नोस्टिक सिम्युलेटर',
    subtitle: 'नियंत्रित डीसी नेटवर्क फॉल्ट (ओपन सर्किट, शॉर्ट सर्किट, उच्च प्रतिरोध संपर्क) और व्हीटस्टोन ब्रिज संतुलन का डायग्नोस्टिक प्रदर्शन।',
    selectFault: 'सिम्युलेटेड परिपथ फॉल्ट स्थिति चुनें',
    normal: 'सामान्य संचालन (संतुलित ब्रिज)',
    open_r2: 'ओपन-सर्किट फॉल्ट (शाखा R2 ओपन)',
    short_r2: 'शॉर्ट-सर्किट फॉल्ट (शाखा R2 शॉर्ट)',
    high_res_r3: 'उच्च-प्रतिरोध फॉल्ट (R3 संपर्क ऑक्सीकरण)',
    supply_failure: 'पावर सप्लाई विफलता (Vs = 0 V)',
    measurementMode: 'डायग्नोस्टिक मीटर मोड चुनें',
    voltmeterMode: 'वोल्टमीटर (नोड वोल्टेज परीक्षण)',
    ammeterMode: 'अमीटर (शाखा धारा परीक्षण)',
    ohmmeterMode: 'ओहममीटर (डी-एनर्जाइज्ड प्रतिरोध परीक्षण)',
    liveMeasurements: 'डायग्नोस्टिक मीटर रीअडिंग एवं ट्रबलशूटिंग',
    expectedVal: 'मानक (अपेक्षित) मान',
    observedVal: 'वास्तविक (प्रेक्षित) मान',
    deviation: 'माप विचलन / स्थिति',
    bridgeBalance: 'व्हीटस्टोन ब्रिज संतुलन मूल्यांकन',
    ratio12: 'भुजा 1 अनुपात (R1 / R2)',
    ratio34: 'भुजा 2 अनुपात (R3 / R4)',
    detectorCurrent: 'गैल्वेनोमीटर डिटेक्टर धारा (ID)',
    bridgeStatusBalanced: 'ब्रिज संतुलित (R1/R2 = R3/R4, ID = 0.00 mA)',
    bridgeStatusUnbalanced: 'ब्रिज असंतुलित (R1/R2 ≠ R3/R4, ID ≠ 0.00 mA)',
    faultDiagnosisTitle: 'इंजीनियरिंग डायग्नोस्टिक रिपोर्ट',
    rulesTitle: 'सुरक्षित डीसी परिपथ ट्रबलशूटिंग अनुक्रम',
    rulesText: '1. सबसे पहले पावर सप्लाई उपस्थिति की जांच करें। 2. नोड वोल्टेज मापें। 3. ओहममीटर से प्रतिरोध मापने से पहले परिपथ को पूरी तरह से बंद (De-energized) करें। कभी भी लाइव परिपथ पर ओहममीटर न लगाएं!',
    reset: 'रीसेट करें'
  },
  bn: {
    title: 'ডিসি নেটওয়ার্ক ফল্ট অ্যানালিসিস ও ব্রিজ ডায়াগনস্টিক সিমুলেটর',
    subtitle: 'ডিসি সার্কিট ফল্ট (ওপেন সার্কিট, শর্ট সার্কিট, হাই-রেজিস্ট্যান্স সংযোগ) এবং হুইটস্টোন ব্রিজ সাম্যাবস্থা ডায়াগনোসিস।',
    selectFault: 'সার্কিট ফল্ট কন্ডিশন নির্বাচন করুন',
    normal: 'স্বাভাবিক কার্যক্রম (সাম্য অবস্থায় ব্রিজ)',
    open_r2: 'ওপেন-সার্কিট ফল্ট (ব্রাঞ্চ R2 ওপেন)',
    short_r2: 'শর্ট-সার্কিট ফল্ট (ব্রাঞ্চ R2 শর্ট)',
    high_res_r3: 'হাই-রেজিস্ট্যান্স ফল্ট (R3 কন্টাক্ট ক্ষয়/জারণ)',
    supply_failure: 'পাওয়ার সাপ্লাই ব্যর্থতা (Vs = 0 V)',
    measurementMode: 'ডায়াগনস্টিক মিটার মোড',
    voltmeterMode: 'ভোল্টমিটার (নোড ভোল্টেজ টেস্ট)',
    ammeterMode: 'অ্যামিটার (ব্রাঞ্চ কারেন্ট টেস্ট)',
    ohmmeterMode: 'ওহমমিটার (পাওয়ার বন্ধ রেখে রেজিস্ট্যান্স টেস্ট)',
    liveMeasurements: 'লাইভ মিটার রিডিং ও ডায়াগনস্টিক তথ্য',
    expectedVal: 'প্রত্যাশিত (স্বাভাবিক) মান',
    observedVal: 'পর্যবেক্ষিত (বাস্তব) মান',
    deviation: 'পরিমাপ বিচ্যুতি / স্থিতি',
    bridgeBalance: 'হুইটস্টোন ব্রিজ সাম্যাবস্থা মূল্যায়ন',
    ratio12: 'বাহু ১ অনুপাত (R1 / R2)',
    ratio34: 'বাহু ২ অনুপাত (R3 / R4)',
    detectorCurrent: 'গ্যালভানোমিটার ডিটেক্টর কারেন্ট (ID)',
    bridgeStatusBalanced: 'ব্রিজ সাম্য অবস্থায় (R1/R2 = R3/R4, ID = 0.00 mA)',
    bridgeStatusUnbalanced: 'ব্রিজ অসাম্য অবস্থায় (R1/R2 ≠ R3/R4, ID ≠ 0.00 mA)',
    faultDiagnosisTitle: 'ইঞ্জিনিয়ারিং ডায়াগনস্টিক রিপোর্ট',
    rulesTitle: 'নিরাপদ ডিসি নেটওয়ার্ক ট্রাবলশুটিং পদ্ধতি',
    rulesText: '১. প্রথমে সোর্স ভোল্টেজ নিশ্চিত করুন। ২. নোড ভোল্টেজ পরীক্ষা করুন। ৩. ওহমমিটার দিয়ে রেজিস্ট্যান্স পরিমাপের আগে অবশ্যই সার্কিট বন্ধ (De-energized) করুন। কখনোই চালু সার্কিটে ওহমমিটার ব্যবহার করবেন না!',
    reset: 'রিসেট করুন'
  }
};

export const DCFaultAnalysisAnimation: React.FC<Props> = ({ currentLanguage }) => {
  const t = LABELS[currentLanguage] || LABELS.en;

  const [fault, setFault] = useState<FaultType>('normal');
  const [meterMode, setMeterMode] = useState<MeterMode>('voltmeter');

  // Base parameters for Wheatstone Bridge
  // R1 = 10 Ω, R2 = 20 Ω -> Ratio = 0.5
  // R3 = 10 Ω, R4 = 20 Ω -> Ratio = 0.5
  // Nominal Vs = 24 V
  const nominalVs = 24;
  const r1 = 10;
  const r2Nominal = 20;
  const r3Nominal = 10;
  const r4 = 20;

  // Actual values under selected fault
  let vs = nominalVs;
  let r2 = r2Nominal;
  let r3 = r3Nominal;

  if (fault === 'open_r2') {
    r2 = 1e6; // ~Open
  } else if (fault === 'short_r2') {
    r2 = 0.001; // ~Short
  } else if (fault === 'high_res_r3') {
    r3 = 100; // High resistance contact
  } else if (fault === 'supply_failure') {
    vs = 0;
  }

  // Calculations
  const ratio12 = r1 / r2;
  const ratio34 = r3 / r4;
  const isBalanced = Math.abs(ratio12 - ratio34) < 0.001 && vs > 0;

  // Node voltages
  // Node C (between R1 and R2): V_C = Vs * [R2 / (R1 + R2)]
  // Node D (between R3 and R4): V_D = Vs * [R4 / (R3 + R4)]
  const vC = vs > 0 ? vs * (r2 / (r1 + r2)) : 0;
  const vD = vs > 0 ? vs * (r4 / (r3 + r4)) : 0;
  const vBridgeDiff = vC - vD;
  const detectorCurrent = vs > 0 ? (vBridgeDiff / 50) * 1000 : 0; // mA assuming 50 ohm detector

  // Readings based on meter mode
  let expText = '';
  let obsText = '';
  let devStatus = '';
  let devColor = '';
  let diagReport = '';

  if (meterMode === 'voltmeter') {
    expText = 'Node C Voltage = 16.00 V, Node D Voltage = 16.00 V (VCD = 0.00 V)';
    obsText = `Node C = ${vC.toFixed(2)} V, Node D = ${vD.toFixed(2)} V (VCD = ${Math.abs(vBridgeDiff).toFixed(2)} V)`;
    if (fault === 'normal') {
      devStatus = 'Nominal Voltage Match (0V Diff)';
      devColor = 'text-emerald-400';
      diagReport = 'All branch voltages normal. Bridge is balanced with zero detector voltage.';
    } else if (fault === 'open_r2') {
      devStatus = 'ABNORMAL: Node C Voltage pulled to Vs (24V)';
      devColor = 'text-rose-400';
      diagReport = 'FAULT CONFIRMED: Branch R2 is OPEN. Zero current through R2 causes Node C to rise to supply rail voltage 24V.';
    } else if (fault === 'short_r2') {
      devStatus = 'ABNORMAL: Node C Voltage pulled to Ground (0V)';
      devColor = 'text-rose-400';
      diagReport = 'FAULT CONFIRMED: Branch R2 is SHORTED to ground. Node C is 0V and excessive current flows through R1.';
    } else if (fault === 'high_res_r3') {
      devStatus = 'ABNORMAL: Node D Voltage dropped to 4.00V';
      devColor = 'text-amber-400';
      diagReport = 'FAULT CONFIRMED: High-resistance connection in R3 (100 Ω). Causes excessive voltage drop across R3, pulling Node D down.';
    } else {
      devStatus = 'CRITICAL: Supply Voltage 0V';
      devColor = 'text-rose-500';
      diagReport = 'FAULT CONFIRMED: Main power supply failed or circuit breaker tripped. Supply voltage Vs = 0V.';
    }
  } else if (meterMode === 'ammeter') {
    expText = 'Branch 1-2 Current = 0.80 A, Branch 3-4 Current = 0.80 A';
    const i12 = vs > 0 ? vs / (r1 + r2) : 0;
    const i34 = vs > 0 ? vs / (r3 + r4) : 0;
    obsText = `Branch 1-2 = ${i12.toFixed(3)} A, Branch 3-4 = ${i34.toFixed(3)} A`;
    if (fault === 'normal') {
      devStatus = 'Nominal Branch Currents Match';
      devColor = 'text-emerald-400';
      diagReport = 'Current distribution is symmetrical across both parallel arms.';
    } else if (fault === 'open_r2') {
      devStatus = 'ABNORMAL: Branch 1-2 Current = 0.00 A';
      devColor = 'text-rose-400';
      diagReport = 'Zero current in Arm 1 indicates open circuit in R1 or R2.';
    } else if (fault === 'short_r2') {
      devStatus = 'HIGH CURRENT: Branch 1-2 Current = 2.40 A (3x Normal)';
      devColor = 'text-rose-400';
      diagReport = 'High arm current indicates zero resistance short-circuit in branch R2.';
    } else if (fault === 'high_res_r3') {
      devStatus = 'ABNORMAL: Branch 3-4 Current reduced to 0.20 A';
      devColor = 'text-amber-400';
      diagReport = 'Reduced current in Arm 2 indicates high resistance in R3 branch.';
    } else {
      devStatus = 'CRITICAL: All Branch Currents 0.00 A';
      devColor = 'text-rose-500';
      diagReport = 'Zero total current due to dead power supply.';
    }
  } else {
    expText = 'De-energized Arm Resistance: R1+R2 = 30.0 Ω, R3+R4 = 30.0 Ω';
    obsText = `R1+R2 = ${r2 > 1e5 ? '∞' : (r1 + r2).toFixed(1)} Ω, R3+R4 = ${(r3 + r4).toFixed(1)} Ω`;
    if (fault === 'normal') {
      devStatus = 'Nominal Resistance Match';
      devColor = 'text-emerald-400';
      diagReport = 'Component resistance values match specification.';
    } else if (fault === 'open_r2') {
      devStatus = 'OPEN CIRCUIT: Arm 1 Resistance = ∞ Ω';
      devColor = 'text-rose-400';
      diagReport = 'Infinite resistance reading confirms physical open circuit in R2.';
    } else if (fault === 'short_r2') {
      devStatus = 'SHORT CIRCUIT: Arm 1 Resistance = 10.0 Ω (Only R1)';
      devColor = 'text-rose-400';
      diagReport = 'Arm 1 resistance reduced to R1 alone, confirming R2 short circuit.';
    } else if (fault === 'high_res_r3') {
      devStatus = 'HIGH RESISTANCE: Arm 2 Resistance = 120.0 Ω';
      devColor = 'text-amber-400';
      diagReport = 'Elevated resistance confirms contact oxidation/corrosion in R3.';
    } else {
      devStatus = 'RESISTANCE OK (Circuit De-energized)';
      devColor = 'text-sky-400';
      diagReport = 'Resistance measurements are valid when supply is turned off.';
    }
  }

  const handleReset = () => {
    setFault('normal');
    setMeterMode('voltmeter');
  };

  return (
    <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 text-white space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
            <Activity className="w-4 h-4" />
            <span>Chapter 4 • Lesson 17 Troubleshooting Model</span>
          </div>
          <h3 className="text-xl font-bold font-display text-white">{t.title}</h3>
          <p className="text-xs text-slate-400 mt-0.5">{t.subtitle}</p>
        </div>

        <button
          onClick={handleReset}
          aria-label={t.reset}
          className="print:hidden px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono font-medium transition-colors motion-reduce:transition-none flex items-center gap-1.5 self-start sm:self-auto border border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.reset}</span>
        </button>
      </div>

      {/* Fault Selector */}
      <div className="print:hidden space-y-2">
        <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
          <span>{t.selectFault}</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {[
            { id: 'normal', label: t.normal, color: 'hover:border-emerald-500' },
            { id: 'open_r2', label: t.open_r2, color: 'hover:border-rose-500' },
            { id: 'short_r2', label: t.short_r2, color: 'hover:border-rose-500' },
            { id: 'high_res_r3', label: t.high_res_r3, color: 'hover:border-amber-500' },
            { id: 'supply_failure', label: t.supply_failure, color: 'hover:border-rose-500' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFault(f.id as FaultType)}
              aria-label={f.label}
              aria-pressed={fault === f.id}
              className={`p-2.5 rounded-xl text-xs font-mono font-bold text-left transition-all motion-reduce:transition-none border focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                fault === f.id
                  ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500 shadow-md shadow-cyan-950'
                  : 'bg-slate-950 text-slate-400 border-slate-800 ' + f.color
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Meter Mode Selector */}
      <div className="print:hidden space-y-2">
        <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
          <Gauge className="w-3.5 h-3.5 text-cyan-400" />
          <span>{t.measurementMode}</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { id: 'voltmeter', label: t.voltmeterMode },
            { id: 'ammeter', label: t.ammeterMode },
            { id: 'ohmmeter', label: t.ohmmeterMode }
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setMeterMode(m.id as MeterMode)}
              aria-label={m.label}
              aria-pressed={meterMode === m.id}
              className={`p-2.5 rounded-xl text-xs font-mono font-bold transition-all motion-reduce:transition-none border flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                meterMode === m.id
                  ? 'bg-indigo-950/80 text-indigo-300 border-indigo-500 shadow-md'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Schematic Diagram */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 uppercase">
          <span>Wheatstone Bridge Circuit Schematic</span>
          <span className={`px-2 py-0.5 rounded text-[10px] ${isBalanced ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-rose-950 text-rose-300 border border-rose-800'}`}>
            {isBalanced ? 'BALANCED' : 'UNBALANCED / FAULT'}
          </span>
        </div>

        <svg viewBox="0 0 360 200" className="w-full h-auto text-slate-200">
          {/* Bridge Diamond */}
          {/* Top node A (24V), Bottom node B (0V), Left C, Right D */}
          <path d="M 180 20 L 100 90 L 180 160 L 260 90 Z" fill="none" stroke="currentColor" strokeWidth="2" />

          {/* Galvanometer Detector line C to D */}
          <path d="M 100 90 L 260 90" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="180" cy="90" r="14" fill="#0f172a" stroke="#22d3ee" strokeWidth="2" />
          <text x="180" y="94" textAnchor="middle" fill="#22d3ee" fontSize="10" fontWeight="bold">G</text>

          {/* Supply Connections */}
          <path d="M 40 90 L 40 20 L 180 20" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M 40 90 L 40 160 L 180 160" fill="none" stroke="currentColor" strokeWidth="2" />

          {/* Voltage Source */}
          <circle cx="40" cy="90" r="16" fill="#0f172a" stroke={vs > 0 ? "#38bdf8" : "#ef4444"} strokeWidth="2" />
          <text x="40" y="94" textAnchor="middle" fill={vs > 0 ? "#38bdf8" : "#ef4444"} fontSize="10" fontWeight="bold">
            {vs > 0 ? `${vs}V` : '0V'}
          </text>

          {/* Resistors R1, R2, R3, R4 */}
          {/* R1 (Top Left) */}
          <rect x="125" y="42" width="28" height="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" transform="rotate(-40 139 49)" />
          <text x="120" y="38" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">R1=10Ω</text>

          {/* R2 (Bottom Left) */}
          <rect x="125" y="118" width="28" height="14" fill="#0f172a" stroke={fault === 'open_r2' || fault === 'short_r2' ? "#ef4444" : "#f59e0b"} strokeWidth="1.5" transform="rotate(40 139 125)" />
          <text x="115" y="145" textAnchor="middle" fill={fault === 'open_r2' || fault === 'short_r2' ? "#f87171" : "#fbbf24"} fontSize="9" fontWeight="bold">
            R2={r2 > 1e5 ? 'OPEN' : r2 < 0.1 ? 'SHORT' : `${r2}Ω`}
          </text>

          {/* R3 (Top Right) */}
          <rect x="205" y="42" width="28" height="14" fill="#0f172a" stroke={fault === 'high_res_r3' ? "#f59e0b" : "#f59e0b"} strokeWidth="1.5" transform="rotate(40 219 49)" />
          <text x="240" y="38" textAnchor="middle" fill={fault === 'high_res_r3' ? "#f59e0b" : "#fbbf24"} fontSize="9" fontWeight="bold">
            R3={r3}Ω {fault === 'high_res_r3' && '(HIGH)'}
          </text>

          {/* R4 (Bottom Right) */}
          <rect x="205" y="118" width="28" height="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" transform="rotate(-40 219 125)" />
          <text x="245" y="145" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">R4=20Ω</text>

          {/* Node Labels */}
          <circle cx="180" cy="20" r="4" fill="#38bdf8" />
          <text x="180" y="12" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">A (Vs)</text>
          <circle cx="180" cy="160" r="4" fill="#38bdf8" />
          <text x="180" y="175" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">B (GND)</text>
          <circle cx="100" cy="90" r="4" fill="#a855f7" />
          <text x="85" y="94" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">C</text>
          <circle cx="260" cy="90" r="4" fill="#a855f7" />
          <text x="275" y="94" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">D</text>
        </svg>
      </div>

      {/* Live Measurement Results Box */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
          <Gauge className="w-4 h-4 text-cyan-400" />
          <span>{t.liveMeasurements}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-slate-400 text-[10px]">{t.expectedVal}</div>
            <div className="text-slate-200 font-bold mt-1">{expText}</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-slate-400 text-[10px]">{t.observedVal}</div>
            <div className="text-cyan-300 font-bold mt-1">{obsText}</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="text-slate-400 text-[10px]">{t.deviation}</div>
            <div className={`font-bold mt-1 ${devColor}`}>{devStatus}</div>
          </div>
        </div>

        {/* Bridge Balance Summary */}
        <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1.5 text-xs font-mono">
          <div className="text-slate-400 font-bold uppercase text-[10px]">{t.bridgeBalance}</div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>{t.ratio12}: <strong className="text-amber-400">{ratio12 > 1000 ? '∞' : ratio12.toFixed(3)}</strong></span>
            <span>{t.ratio34}: <strong className="text-amber-400">{ratio34.toFixed(3)}</strong></span>
            <span>{t.detectorCurrent}: <strong className="text-cyan-400">{detectorCurrent.toFixed(2)} mA</strong></span>
          </div>

          <div className={`mt-2 p-2 rounded text-[11px] font-bold flex items-center gap-2 ${
            isBalanced ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800' : 'bg-amber-950/60 text-amber-300 border border-amber-800'
          }`}>
            {isBalanced ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> : <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />}
            <span>{isBalanced ? t.bridgeStatusBalanced : t.bridgeStatusUnbalanced}</span>
          </div>
        </div>
      </div>

      {/* Engineering Diagnostic Report */}
      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 text-xs">
        <div className="font-bold font-display text-white flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4 text-cyan-400" />
          <span>{t.faultDiagnosisTitle}</span>
        </div>
        <p className="text-slate-300 font-mono leading-relaxed bg-slate-900 p-3 rounded-lg border border-slate-800">
          {diagReport}
        </p>
      </div>

      {/* Safety Sequence */}
      <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 text-xs text-slate-400 space-y-1">
        <div className="font-bold text-amber-400 font-mono text-[11px] uppercase tracking-wider">{t.rulesTitle}</div>
        <p className="leading-relaxed">{t.rulesText}</p>
      </div>
    </div>
  );
};
