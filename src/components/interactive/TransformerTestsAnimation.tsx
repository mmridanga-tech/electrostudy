import React, { useState } from 'react';
import { Language } from '../../types';
import { Activity, Gauge, Cpu, Compass, Layers, CheckCircle2 } from 'lucide-react';

interface TransformerTestsAnimationProps {
  language?: Language;
}

export const TransformerTestsAnimation: React.FC<TransformerTestsAnimationProps> = ({
  language = 'en'
}) => {
  const [activeTest, setActiveTest] = useState<'oc' | 'sc' | 'sumpner' | 'polarity'>('oc');

  // OC Test State
  const [ocVoltage, setOcVoltage] = useState<number>(230); // Rated LV Volts
  const [ocCurrent, setOcCurrent] = useState<number>(2.4); // Amps
  const [ocPower, setOcPower] = useState<number>(110); // Watts (LPF)

  // SC Test State
  const [scVoltage, setScVoltage] = useState<number>(48); // Volts on HV side (~5% of 1000V)
  const [scCurrent, setScCurrent] = useState<number>(10.0); // Rated HV Amps
  const [scPower, setScPower] = useState<number>(280); // Watts

  // Sumpner Test State
  const [sumpnerMainsPower, setSumpnerMainsPower] = useState<number>(220); // 2 * Pcore
  const [sumpnerAuxPower, setSumpnerAuxPower] = useState<number>(560); // 2 * Pcu

  // Polarity Test State
  const [polarityMode, setPolarityMode] = useState<'subtractive' | 'additive'>('subtractive');
  const [primaryTestVoltage, setPrimaryTestVoltage] = useState<number>(120);
  const [secondaryInducedVoltage] = useState<number>(24);

  // Translations
  const t = {
    en: {
      title: 'Interactive Transformer Laboratory Testing Simulator',
      subtitle: 'Simulate Open-Circuit, Short-Circuit, Sumpner\'s Back-to-Back, and Polarity tests with live parameter extraction',
      tabOC: 'Open-Circuit (OC) Test',
      tabSC: 'Short-Circuit (SC) Test',
      tabSumpner: 'Sumpner\'s Test',
      tabPolarity: 'Polarity Test',
      // OC strings
      ocDesc: 'Conducted on the Low Voltage (LV) side with the High Voltage (HV) side open-circuited. Measures constant Core / Iron Loss (P_core) and shunt branch parameters.',
      v0Label: 'Applied LV Voltage (V0):',
      i0Label: 'No-Load Current (I0):',
      w0Label: 'Core Loss Wattmeter (W0):',
      pf0: 'No-Load Power Factor (cosΦ0):',
      iw: 'Core Loss Current (Iw):',
      im: 'Magnetizing Current (Im):',
      rc: 'Core Loss Resistance (Rc,LV):',
      xm: 'Magnetizing Reactance (Xm,LV):',
      // SC strings
      scDesc: 'Conducted on the High Voltage (HV) side with the Low Voltage (LV) side solidly short-circuited. Measures Full-Load Copper Loss and equivalent series impedance.',
      vscLabel: 'Applied SC Voltage (Vsc):',
      iscLabel: 'Rated HV Current (Isc):',
      wscLabel: 'Full-Load Cu Loss Wattmeter (Wsc):',
      zeq: 'Equivalent Impedance (Zeq,HV):',
      req: 'Equivalent Resistance (Req,HV):',
      xeq: 'Leakage Reactance (Xeq,HV):',
      pfsc: 'Short-Circuit Power Factor (cosΦsc):',
      // Sumpner strings
      sumpnerDesc: 'Regenerative back-to-back thermal test using two identical transformers. Primaries parallel, secondaries in series opposition.',
      mainsWattmeter: 'Mains Wattmeter (2 × P_core):',
      auxWattmeter: 'Auxiliary Wattmeter (2 × P_cu):',
      singleCoreLoss: 'Iron Loss per Transformer:',
      singleCuLoss: 'Full-Load Copper Loss per Transformer:',
      sumpnerBenefit: 'Both units reach full thermal equilibrium consuming only internal loss power!',
      // Polarity strings
      polarityDesc: 'Determines the relative instantaneous phase and terminal markings (H1-H2 vs X1-X2) for safe parallel and 3-phase banking.',
      subtractive: 'Subtractive Polarity (V3 = V1 - V2)',
      additive: 'Additive Polarity (V3 = V1 + V2)',
      v3Reading: 'Measured Terminal Voltage (V3):',
      polarityStatusSub: 'Subtractive Polarity: H1 in phase with X1. Standard for power transformers.',
      polarityStatusAdd: 'Additive Polarity: H1 in phase with X2. Standard for small distribution units.'
    },
    hi: {
      title: 'ट्रांसफॉर्मर प्रयोगशाला परीक्षण सिमुलेटर',
      subtitle: 'ओपन-सर्किट, शॉर्ट-सर्किट, संपटनर एवं पोलैरिटी टेस्ट का सजीव सिमुलेशन एवं पैरामीटर गणना',
      tabOC: 'ओपन-सर्किट (OC) टेस्ट',
      tabSC: 'शॉर्ट-सर्किट (SC) टेस्ट',
      tabSumpner: 'संपटनर टेस्ट',
      tabPolarity: 'पोलैरिटी टेस्ट',
      ocDesc: 'LV साइड पर रेटेड वोल्टेज पर किया जाता है, HV साइड खुली रहती है। यह स्थिर कोर हानि एवं शंट पैरामीटर मापता है।',
      v0Label: 'आरोपित वोल्टेज (V0):',
      i0Label: 'नो-लोड करंट (I0):',
      w0Label: 'कोर लॉस वाटमीटर (W0):',
      pf0: 'नो-लोड पावर फैक्टर (cosΦ0):',
      iw: 'कोर लॉस धारा (Iw):',
      im: 'मैग्नेटाइजिंग धारा (Im):',
      rc: 'कोर प्रतिरोध (Rc):',
      xm: 'मैग्नेटाइजिंग रिएक्टेंस (Xm):',
      scDesc: 'HV साइड पर रेटेड करंट पर किया जाता है, LV साइड शॉर्ट रहती है। यह फुल-लोड कॉपर लॉस और समतुल्य प्रतिबाधा मापता है।',
      vscLabel: 'शॉर्ट-सर्किट वोल्टेज (Vsc):',
      iscLabel: 'रेटेड HV करंट (Isc):',
      wscLabel: 'कॉपर लॉस वाटमीटर (Wsc):',
      zeq: 'समतुल्य प्रतिबाधा (Zeq):',
      req: 'समतुल्य प्रतिरोध (Req):',
      xeq: 'लीकेज रिएक्टेंस (Xeq):',
      pfsc: 'शॉर्ट-सर्किट पावर फैक्टर:',
      sumpnerDesc: 'दो समरूप ट्रांसफॉर्मरों का हीट रन टेस्ट। प्राइमरी समानांतर तथा सेकेंडरी सीरीज अपोजिशन में।',
      mainsWattmeter: 'मुख्य वाटमीटर (2 × Pcore):',
      auxWattmeter: 'सहायक वाटमीटर (2 × Pcu):',
      singleCoreLoss: 'प्रत्येक की कोर हानि:',
      singleCuLoss: 'प्रत्येक की फुल-लोड कॉपर हानि:',
      sumpnerBenefit: 'बिना बिजली बर्बाद किए दोनों ट्रांसफॉर्मरों का पूर्ण थर्मल टेस्ट!',
      polarityDesc: 'समानांतर संचालन हेतु सिरों की सही ध्रुवता (H1-X1) का निर्धारण।',
      subtractive: 'सब्ट्रैक्टिव पोलैरिटी (V3 = V1 - V2)',
      additive: 'एडिटिव पोलैरिटी (V3 = V1 + V2)',
      v3Reading: 'मापा गया वोल्टेज (V3):',
      polarityStatusSub: 'सब्ट्रैक्टिव: H1 और X1 समान कला में हैं (मानक पावर ट्रांसफॉर्मर)।',
      polarityStatusAdd: 'एडिटिव: H1 और X2 समान कला में हैं।'
    },
    bn: {
      title: 'ট্রান্সফর্মার ল্যাবরেটরি টেস্ট সিমুলেটর',
      subtitle: 'ওপেন-সার্কিট, শর্ট-সার্কিট, স্যাম্পনার্স ও পোলারিটি টেস্টের লাইভ সিমুলেশন ও প্যারামিটার নির্ণয়',
      tabOC: 'ওপেন-সার্কিট (OC) টেস্ট',
      tabSC: 'শॉर्ट-সার্কিট (SC) টেস্ট',
      tabSumpner: 'স্যাম্পনার্স টেস্ট',
      tabPolarity: 'পোলারিটি টেস্ট',
      ocDesc: 'LV প্রান্তে রেটেড ভোল্টেজে পরিচালিত হয়, HV প্রান্ত খোলা থাকে। এটি স্থির কোর লস ও শান্ট প্যারামিটার মাপে।',
      v0Label: 'প্রয়োগকৃত ভোল্টেজ (V0):',
      i0Label: 'নো-লোড কারেন্ট (I0):',
      w0Label: 'কোর লস ওয়াটমিটার (W0):',
      pf0: 'নো-লোড পাওয়ার ফ্যাক্টর (cosΦ0):',
      iw: 'কোর লস কারেন্ট (Iw):',
      im: 'ম্যাগনেটাইজিং কারেন্ট (Im):',
      rc: 'কোর রেজিস্ট্যান্স (Rc):',
      xm: 'ম্যাগনেটাইজিং রিঅ্যাক্ট্যান্স (Xm):',
      scDesc: 'HV প্রান্তে রেটেড কারেন্টে পরিচালিত হয়, LV প্রান্ত শর্ট থাকে। এটি ফুল-লোড কপার লস ও সিরিজ ইম্পিড্যান্স মাপে।',
      vscLabel: 'শর্ট-সার্কিট ভোল্টেজ (Vsc):',
      iscLabel: 'রেটেড HV কারেন্ট (Isc):',
      wscLabel: 'কপার লস ওয়াটমিটার (Wsc):',
      zeq: 'তুল্য ইম্পিড্যান্স (Zeq):',
      req: 'তুল্য রেজিস্ট্যান্স (Req):',
      xeq: 'লিকেজ রিঅ্যাক্ট্যান্স (Xeq):',
      pfsc: 'শর্ট-সার্কিট পাওয়ার ফ্যাক্টর:',
      sumpnerDesc: 'দুটি অভিন্ন ট্রান্সফরমারের রিজেনারেটিভ হিট রান টেস্ট।',
      mainsWattmeter: 'প্রধান ওয়াটমিটার (২ × Pcore):',
      auxWattmeter: 'সহকারী ওয়াটমিটার (২ × Pcu):',
      singleCoreLoss: 'প্রতিটির কোর লস:',
      singleCuLoss: 'প্রতিটির কপার লস:',
      sumpnerBenefit: 'শক্তি অপচয় ছাড়া উভয় ট্রান্সফর্মারের পূর্ণ তাপমাত্রা বৃদ্ধি পরীক্ষা!',
      polarityDesc: 'প্যারালাল সংযোগের জন্য টার্মিনালের সঠিক পোলারিটি নির্ধারণ।',
      subtractive: 'সাবট্র্যাক্টিভ পোলারিটি (V3 = V1 - V2)',
      additive: 'অ্যাডিটিভ পোলারিটি (V3 = V1 + V2)',
      v3Reading: 'পরিমাপকৃত ভোল্টেজ (V3):',
      polarityStatusSub: 'সাবট্র্যাক্টিভ: H1 ও X1 সমদশা (স্ট্যান্ডার্ড)।',
      polarityStatusAdd: 'অ্যাডিটিভ: H1 ও X2 সমদশা।'
    }
  }[language] || {
    title: 'Transformer Testing Simulator',
    subtitle: 'Simulate standard transformer tests',
    tabOC: 'OC Test',
    tabSC: 'SC Test',
    tabSumpner: 'Sumpner Test',
    tabPolarity: 'Polarity Test',
    ocDesc: 'Open Circuit Test',
    v0Label: 'V0',
    i0Label: 'I0',
    w0Label: 'W0',
    pf0: 'cosΦ0',
    iw: 'Iw',
    im: 'Im',
    rc: 'Rc',
    xm: 'Xm',
    scDesc: 'Short Circuit Test',
    vscLabel: 'Vsc',
    iscLabel: 'Isc',
    wscLabel: 'Wsc',
    zeq: 'Zeq',
    req: 'Req',
    xeq: 'Xeq',
    pfsc: 'cosΦsc',
    sumpnerDesc: 'Sumpner Test',
    mainsWattmeter: 'Mains W1',
    auxWattmeter: 'Aux W2',
    singleCoreLoss: 'Core Loss',
    singleCuLoss: 'Copper Loss',
    sumpnerBenefit: 'Regenerative testing',
    polarityDesc: 'Polarity Test',
    subtractive: 'Subtractive',
    additive: 'Additive',
    v3Reading: 'V3',
    polarityStatusSub: 'Subtractive Polarity',
    polarityStatusAdd: 'Additive Polarity'
  };

  // OC Calculations
  const cosPhi0 = Math.min(1.0, ocPower / (ocVoltage * ocCurrent));
  const sinPhi0 = Math.sqrt(Math.max(0, 1 - cosPhi0 * cosPhi0));
  const iw = ocCurrent * cosPhi0;
  const im = ocCurrent * sinPhi0;
  const rc = iw > 0 ? ocVoltage / iw : 0;
  const xm = im > 0 ? ocVoltage / im : 0;

  // SC Calculations
  const zeq = scCurrent > 0 ? scVoltage / scCurrent : 0;
  const req = scCurrent > 0 ? scPower / (scCurrent * scCurrent) : 0;
  const xeq = Math.sqrt(Math.max(0, zeq * zeq - req * req));
  const cosPhiSc = zeq > 0 ? req / zeq : 0;

  // Polarity Calculations
  const v3Polarity = polarityMode === 'subtractive' 
    ? primaryTestVoltage - secondaryInducedVoltage 
    : primaryTestVoltage + secondaryInducedVoltage;

  return (
    <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 text-white space-y-6 shadow-xl font-sans">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>{t.title}</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {t.subtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTest('oc')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTest === 'oc' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            OC Test
          </button>
          <button
            onClick={() => setActiveTest('sc')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTest === 'sc' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            SC Test
          </button>
          <button
            onClick={() => setActiveTest('sumpner')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTest === 'sumpner' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Sumpner's
          </button>
          <button
            onClick={() => setActiveTest('polarity')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTest === 'polarity' ? 'bg-purple-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Polarity
          </button>
        </div>
      </div>

      {/* TAB 1: OPEN CIRCUIT (OC) TEST */}
      {activeTest === 'oc' && (
        <div className="space-y-6">
          <div className="p-3 bg-cyan-950/40 rounded-xl border border-cyan-800/60 text-xs text-cyan-200">
            {t.ocDesc}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Controls */}
            <div className="lg:col-span-5 bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-4 text-xs font-mono">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                Laboratory Meter Readings
              </span>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-300">{t.v0Label}</span>
                  <span className="text-cyan-400 font-bold">{ocVoltage} V (Rated LV)</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="250"
                  step="1"
                  value={ocVoltage}
                  onChange={(e) => setOcVoltage(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-300">{t.i0Label}</span>
                  <span className="text-cyan-400 font-bold">{ocCurrent.toFixed(2)} A (2-5% of FL)</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="5.0"
                  step="0.1"
                  value={ocCurrent}
                  onChange={(e) => setOcCurrent(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-300">{t.w0Label}</span>
                  <span className="text-rose-400 font-bold">{ocPower} W (LPF Wattmeter)</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="250"
                  step="5"
                  value={ocPower}
                  onChange={(e) => setOcPower(parseFloat(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                Wattmeter reading represents pure <strong className="text-rose-400">Core Loss P_core</strong>. Primary no-load I0²R loss is negligible.
              </div>
            </div>

            {/* Extracted Shunt Parameters */}
            <div className="lg:col-span-7 bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4 font-mono">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                Calculated Shunt Magnetizing Parameters (LV Side)
              </span>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{t.pf0}</span>
                  <span className="text-base font-bold text-amber-400">{cosPhi0.toFixed(4)} lag</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{t.iw}</span>
                  <span className="text-base font-bold text-cyan-400">{iw.toFixed(3)} A</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{t.im}</span>
                  <span className="text-base font-bold text-cyan-400">{im.toFixed(3)} A</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{t.rc}</span>
                  <span className="text-base font-bold text-emerald-400">{rc.toFixed(2)} Ω</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 col-span-2">
                  <span className="text-[10px] text-slate-400 block">{t.xm}</span>
                  <span className="text-base font-bold text-emerald-400">{xm.toFixed(2)} Ω</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-cyan-950/40 border border-cyan-800/60 text-xs text-cyan-300">
                Formula check: Rc = V0² / W0 = {ocVoltage}² / {ocPower} = {rc.toFixed(1)} Ω; Xm = V0 / Im = {xm.toFixed(1)} Ω.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SHORT CIRCUIT (SC) TEST */}
      {activeTest === 'sc' && (
        <div className="space-y-6">
          <div className="p-3 bg-amber-950/40 rounded-xl border border-amber-800/60 text-xs text-amber-200">
            {t.scDesc}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Controls */}
            <div className="lg:col-span-5 bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-4 text-xs font-mono">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                Laboratory Meter Readings (HV Side)
              </span>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-300">{t.vscLabel}</span>
                  <span className="text-amber-400 font-bold">{scVoltage} V (~5% of V_rated)</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="2"
                  value={scVoltage}
                  onChange={(e) => setScVoltage(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-300">{t.iscLabel}</span>
                  <span className="text-amber-400 font-bold">{scCurrent.toFixed(1)} A (Rated FL)</span>
                </div>
                <input
                  type="range"
                  min="5.0"
                  max="20.0"
                  step="0.5"
                  value={scCurrent}
                  onChange={(e) => setScCurrent(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-300">{t.wscLabel}</span>
                  <span className="text-orange-400 font-bold">{scPower} W</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="600"
                  step="10"
                  value={scPower}
                  onChange={(e) => setScPower(parseFloat(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                Wattmeter reading represents total <strong className="text-orange-400">Full-Load Copper Loss P_cu(FL)</strong>. Core loss at 5% Vsc is completely negligible.
              </div>
            </div>

            {/* Extracted Series Parameters */}
            <div className="lg:col-span-7 bg-slate-900/80 p-4 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4 font-mono">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                Calculated Series Equivalent Parameters (HV Side)
              </span>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{t.zeq}</span>
                  <span className="text-base font-bold text-cyan-400">{zeq.toFixed(3)} Ω</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{t.req}</span>
                  <span className="text-base font-bold text-emerald-400">{req.toFixed(3)} Ω</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{t.xeq}</span>
                  <span className="text-base font-bold text-emerald-400">{xeq.toFixed(3)} Ω</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">{t.pfsc}</span>
                  <span className="text-base font-bold text-amber-400">{cosPhiSc.toFixed(4)} lag</span>
                </div>
              </div>

              <div className="p-2.5 rounded bg-amber-950/40 border border-amber-800/60 text-xs text-amber-300">
                Formula check: Zeq = Vsc / Isc = {zeq.toFixed(2)} Ω; Req = Wsc / Isc² = {req.toFixed(2)} Ω; Xeq = √(Zeq² - Req²) = {xeq.toFixed(2)} Ω.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SUMPNER'S TEST */}
      {activeTest === 'sumpner' && (
        <div className="space-y-6 font-mono">
          <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-800/60 text-xs text-emerald-200">
            {t.sumpnerDesc}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Input Controls */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                Sumpner Test Wattmeter Readings
              </span>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-300">{t.mainsWattmeter}</span>
                  <span className="text-rose-400 font-bold">{sumpnerMainsPower} W</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="500"
                  step="10"
                  value={sumpnerMainsPower}
                  onChange={(e) => setSumpnerMainsPower(parseFloat(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-300">{t.auxWattmeter}</span>
                  <span className="text-orange-400 font-bold">{sumpnerAuxPower} W</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="1200"
                  step="20"
                  value={sumpnerAuxPower}
                  onChange={(e) => setSumpnerAuxPower(parseFloat(e.target.value))}
                  className="w-full accent-orange-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>
            </div>

            {/* Individual Unit Loss Partitioning */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                Individual Unit Losses (T_A and T_B)
              </span>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.singleCoreLoss}</span>
                <span className="text-base font-bold text-rose-400">{(sumpnerMainsPower / 2).toFixed(1)} W</span>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-400">{t.singleCuLoss}</span>
                <span className="text-base font-bold text-orange-400">{(sumpnerAuxPower / 2).toFixed(1)} W</span>
              </div>

              <div className="p-2.5 rounded bg-emerald-950/60 border border-emerald-800 text-[11px] text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{t.sumpnerBenefit} Total grid draw = {(sumpnerMainsPower + sumpnerAuxPower)} W only.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: POLARITY TEST */}
      {activeTest === 'polarity' && (
        <div className="space-y-6 font-mono">
          <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-800/60 text-xs text-purple-200">
            {t.polarityDesc}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Polarity Switch & Inputs */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-4">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                Polarity Jumper Configuration
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => setPolarityMode('subtractive')}
                  className={`flex-1 py-2 rounded-lg font-bold text-xs ${
                    polarityMode === 'subtractive' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {t.subtractive}
                </button>
                <button
                  onClick={() => setPolarityMode('additive')}
                  className={`flex-1 py-2 rounded-lg font-bold text-xs ${
                    polarityMode === 'additive' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {t.additive}
                </button>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-300">Primary Applied Voltage (V1):</span>
                  <span className="text-purple-400 font-bold">{primaryTestVoltage} V</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="240"
                  step="10"
                  value={primaryTestVoltage}
                  onChange={(e) => setPrimaryTestVoltage(parseFloat(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              <div className="flex justify-between text-slate-400 text-xs">
                <span>Secondary Induced Voltage (V2):</span>
                <span className="text-cyan-400 font-bold">{secondaryInducedVoltage} V</span>
              </div>
            </div>

            {/* Meter Reading Result */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-4 flex flex-col justify-between">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                Voltmeter V3 Reading across Terminals
              </span>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-1">
                <span className="text-[10px] text-slate-400 uppercase block">{t.v3Reading}</span>
                <span className="text-2xl font-bold text-cyan-400">{v3Polarity.toFixed(1)} V</span>
                <span className="text-xs text-slate-400 block">
                  {polarityMode === 'subtractive' ? `${primaryTestVoltage} V - ${secondaryInducedVoltage} V` : `${primaryTestVoltage} V + ${secondaryInducedVoltage} V`}
                </span>
              </div>

              <div className="p-3 bg-purple-950/40 rounded-lg border border-purple-800 text-xs text-purple-300">
                {polarityMode === 'subtractive' ? t.polarityStatusSub : t.polarityStatusAdd}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
