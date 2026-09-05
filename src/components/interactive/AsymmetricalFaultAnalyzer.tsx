import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Zap, ShieldAlert, Cpu, GitCommit, Sliders, CheckCircle2 } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const AsymmetricalFaultAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Inputs
  const [faultType, setFaultType] = useState<'slg' | 'll' | 'llg' | '3p'>('slg');
  const [systemVoltageKv, setSystemVoltageKv] = useState<number>(11); // 11 kV line
  const [x1, setX1] = useState<number>(1.2); // Positive sequence reactance (Ohms)
  const [x2, setX2] = useState<number>(1.2); // Negative sequence reactance (Ohms)
  const [x0, setX0] = useState<number>(3.6); // Zero sequence reactance (Ohms)
  const [rf, setRf] = useState<number>(0);   // Fault resistance (Ohms)

  // Prefault phase-to-neutral voltage Ea
  const Ea = (systemVoltageKv * 1000) / Math.sqrt(3);

  // Fault Current Calculations
  let ia0 = 0;
  let ia1 = 0;
  let ia2 = 0;
  let ifaultA = 0;
  let ifaultB = 0;
  let ifaultC = 0;
  let ig = 0; // Ground return current

  if (faultType === 'slg') {
    // Single Line-to-Ground on Phase A:
    // Sequence networks connected in SERIES: Z_total = Z1 + Z2 + Z0 + 3*Zf
    const denR = 3 * rf;
    const denX = x1 + x2 + x0;
    const denMag = Math.sqrt(denR * denR + denX * denX);
    ia1 = Ea / denMag;
    ia2 = ia1;
    ia0 = ia1;
    ifaultA = 3 * ia0;
    ifaultB = 0;
    ifaultC = 0;
    ig = ifaultA;
  } else if (faultType === 'll') {
    // Line-to-Line between Phases B and C:
    // Sequence networks Z1 and Z2 in PARALLEL opposition, Z0 isolated:
    // Ia0 = 0, Ia1 = -Ia2 = Ea / (Z1 + Z2 + Zf)
    const denR = rf;
    const denX = x1 + x2;
    const denMag = Math.sqrt(denR * denR + denX * denX);
    ia1 = Ea / denMag;
    ia2 = ia1;
    ia0 = 0;
    ifaultA = 0;
    ifaultB = Math.sqrt(3) * ia1;
    ifaultC = ifaultB;
    ig = 0;
  } else if (faultType === 'llg') {
    // Double Line-to-Ground on Phases B & C to ground:
    // Z1 in series with (Z2 parallel (Z0 + 3*Zf))
    const z0effR = 3 * rf;
    const z0effX = x0;
    // Z2 || (Z0 + 3Zf)
    const numR = -x2 * z0effX;
    const numI = x2 * z0effR;
    const denParR = z0effR;
    const denParX = x2 + z0effX;
    const denParMagSq = denParR * denParR + denParX * denParX;
    const zparR = (numR * denParR + numI * denParX) / denParMagSq;
    const zparX = (numI * denParR - numR * denParX) / denParMagSq;

    const ztotR = zparR;
    const ztotX = x1 + zparX;
    const ztotMag = Math.sqrt(ztotR * ztotR + ztotX * ztotX);
    ia1 = Ea / ztotMag;

    // Current division
    const z0PlusZ2Mag = Math.sqrt(z0effR * z0effR + (x2 + x0) * (x2 + x0));
    ia2 = (ia1 * Math.sqrt(z0effR * z0effR + z0effX * z0effX)) / z0PlusZ2Mag;
    ia0 = (ia1 * x2) / z0PlusZ2Mag;

    ifaultA = 0;
    ifaultB = Math.sqrt(ia1 * ia1 + ia2 * ia2 + ia0 * ia0); // approximation
    ifaultC = ifaultB;
    ig = 3 * ia0;
  } else {
    // 3-Phase Symmetrical Fault (LLL):
    // Only positive sequence network exists
    const denMag = Math.sqrt(rf * rf + x1 * x1);
    ia1 = Ea / denMag;
    ia2 = 0;
    ia0 = 0;
    ifaultA = ia1;
    ifaultB = ia1;
    ifaultC = ia1;
    ig = 0;
  }

  // Short-Circuit Capacity (MVA)
  const maxPhaseFaultKa = Math.max(ifaultA, ifaultB, ifaultC) / 1000;
  const faultMva = Math.sqrt(3) * systemVoltageKv * maxPhaseFaultKa;

  const t = {
    en: {
      title: 'Asymmetrical Fault & Sequence Interconnection Analyzer',
      subtitle: 'Symmetrical Components Fault Synthesis: SLG, LL, LLG & 3-Phase Symmetrical Duties',
      faultSelect: 'Fault Classification',
      slg: 'Single Line-to-Ground (SLG)',
      ll: 'Line-to-Line (L-L)',
      llg: 'Double Line-to-Ground (L-L-G)',
      threePhase: 'Three-Phase Balanced (L-L-L)',
      systemHeading: 'Grid & Sequence Impedances',
      systemVolt: 'Nominal Bus Voltage (kV)',
      posReactance: 'Positive Sequence Reactance (X₁)',
      negReactance: 'Negative Sequence Reactance (X₂)',
      zeroReactance: 'Zero Sequence Reactance (X₀)',
      faultRes: 'Fault Arc / Earth Resistance (Rf)',
      resultsHeading: 'Short-Circuit Duty & Sequence Components',
      ia1Label: 'Positive Sequence Current (I₁)',
      ia2Label: 'Negative Sequence Current (I₂)',
      ia0Label: 'Zero Sequence Current (I₀)',
      igLabel: 'Ground Return Fault Current (Ig = 3·I₀)',
      phaseFaults: 'Phase Conductor Fault Currents',
      mvaDuty: 'Circuit Breaker Short-Circuit Duty',
      networkTopology: 'Sequence Network Interconnection Topology',
      topoSlg: 'Series Connection: Network 1, Network 2, and Network 0 are connected in series aiding.',
      topoLl: 'Parallel Opposed: Network 1 and Network 2 connected in parallel opposition. Network 0 isolated.',
      topoLlg: 'Parallel Common: Network 1 connected in series with the parallel combination of Network 2 and Network 0.',
      topo3p: 'Single-Network: Only Positive Sequence (Network 1) carries fault current. I₂ = 0, I₀ = 0.'
    },
    hi: {
      title: 'असममितीय फॉल्ट एवं अनुक्रम संयोजन विश्लेषक',
      subtitle: 'सममितीय घटक फॉल्ट विश्लेषण: SLG, LL, LLG एवं 3-फेज संतुलित शॉर्ट-सर्किट क्षमता',
      faultSelect: 'फॉल्ट प्रकार चयन',
      slg: 'सिंगल लाइन-टू-ग्राउंड (SLG)',
      ll: 'लाइन-टू-लाइन (L-L)',
      llg: 'डबल लाइन-टू-ग्राउंड (L-L-G)',
      threePhase: 'थ्री-फेज संतुलित (L-L-L)',
      systemHeading: 'ग्रिड एवं अनुक्रम प्रतिघात',
      systemVolt: 'बस वोल्टेज (kV)',
      posReactance: 'पॉजिटिव अनुक्रम प्रतिघात (X₁)',
      negReactance: 'नेगेटिव अनुक्रम प्रतिघात (X₂)',
      zeroReactance: 'जीरो अनुक्रम प्रतिघात (X₀)',
      faultRes: 'फॉल्ट प्रतिरोध (Rf)',
      resultsHeading: 'शॉर्ट-सर्किट क्षमता एवं अनुक्रम घटक',
      ia1Label: 'पॉजिटिव अनुक्रम धारा (I₁)',
      ia2Label: 'नेगेटिव अनुक्रम धारा (I₂)',
      ia0Label: 'जीरो अनुक्रम धारा (I₀)',
      igLabel: 'ग्राउंड रिटर्न फॉल्ट धारा (Ig = 3·I₀)',
      phaseFaults: 'फेज कंडक्टर फॉल्ट धाराएं',
      mvaDuty: 'सर्किट ब्रेकर ब्रेकिंग क्षमता',
      networkTopology: 'अनुक्रम नेटवर्क संयोजन टोपोलॉजी',
      topoSlg: 'श्रेणी संयोजन: नेटवर्क 1, नेटवर्क 2 एवं नेटवर्क 0 तीनों श्रेणी में जुड़े होते हैं।',
      topoLl: 'समानांतर विपरीत: नेटवर्क 1 और नेटवर्क 2 समानांतर में विपरीत ध्रुवता से जुड़े होते हैं। नेटवर्क 0 अलग रहता है।',
      topoLlg: 'समानांतर उभयनिष्ठ: नेटवर्क 1 के साथ नेटवर्क 2 और नेटवर्क 0 का समानांतर संयोजन श्रेणी में होता है।',
      topo3p: 'एकल नेटवर्क: केवल पॉजिटिव नेटवर्क 1 में धारा बहती है। I₂ = 0, I₀ = 0।'
    },
    bn: {
      title: 'অসমমিতিক ফল্ট ও সিকোয়েন্স সংযোগ বিশ্লেষক',
      subtitle: 'সিমেট্রিক্যাল কম্পোনেন্টস ফল্ট বিশ্লেষণ: SLG, LL, LLG ও ৩-ফেজ শর্ট-সার্কিট ডিউটি',
      faultSelect: 'ফল্ট শ্রেণি নির্বাচন',
      slg: 'সিঙ্গেল লাইন-টু-গ্রাউন্ড (SLG)',
      ll: 'লাইন-টু-লাইন (L-L)',
      llg: 'ডাবল লাইন-টু-গ্রাউন্ড (L-L-G)',
      threePhase: 'থ্রি-ফেজ ব্যালেন্সড (L-L-L)',
      systemHeading: 'গ্রিড ও সিকোয়েন্স রিঅ্যাক্ট্যান্স',
      systemVolt: 'বাস ভোল্টেজ (kV)',
      posReactance: 'পজিটিভ সিকোয়েন্স রিঅ্যাক্ট্যান্স (X₁)',
      negReactance: 'নেগেটিভ সিকোয়েন্স রিঅ্যাক্ট্যান্স (X₂)',
      zeroReactance: 'জিরো সিকোয়েন্স রিঅ্যাক্ট্যান্স (X₀)',
      faultRes: 'ফল্ট আর্ক রেজিস্ট্যান্স (Rf)',
      resultsHeading: 'শর্ট-সার্কিট ক্ষমতা ও সিকোয়েন্স কারেন্ট',
      ia1Label: 'পজিটিভ সিকোয়েন্স কারেন্ট (I₁)',
      ia2Label: 'নেগেটিভ সিকোয়েন্স কারেন্ট (I₂)',
      ia0Label: 'জিরো সিকোয়েন্স কারেন্ট (I₀)',
      igLabel: 'গ্রাউন্ড ফল্ট কারেন্ট (Ig = ৩·I₀)',
      phaseFaults: 'ফেজ পরিবাহী ফল্ট কারেন্ট',
      mvaDuty: 'সার্কিট ব্রেকার ব্রেকিং ক্যাপাসিটি',
      networkTopology: 'সিকোয়েন্স নেটওয়ার্ক সংযোগ আর্কিটেকচার',
      topoSlg: 'সিরিজ সংযোগ: নেটওয়ার্ক ১, নেটওয়ার্ক ২ ও নেটওয়ার্ক ০ সিরিজে যুক্ত থাকে।',
      topoLl: 'সমান্তরাল বিপরীত: নেটওয়ার্ক ১ ও ২ বিপরীতে সমান্তরালে যুক্ত। নেটওয়ার্ক ০ বিচ্ছিন্ন।',
      topoLlg: 'সমান্তরাল যৌথ: নেটওয়ার্ক ১ এর সাথে নেটওয়ার্ক ২ ও ০ এর সমান্তরাল শাখা সিরিজে যুক্ত।',
      topo3p: 'একক নেটওয়ার্ক: শুধু পজিটিভ নেটওয়ার্কে কারেন্ট প্রবাহিত হয়। I₂ = ০, I₀ = ০।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 max-w-5xl mx-auto shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="p-2.5 bg-rose-500/10 text-rose-400 rounded-lg border border-rose-500/20">
          <Zap className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">{t.title}</h3>
          <p className="text-xs text-slate-400">{t.subtitle}</p>
        </div>
      </div>

      {/* Fault Selector Tabs */}
      <div className="mb-5 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
        <div className="text-xs text-slate-400 font-medium mb-2">{t.faultSelect}</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            type="button"
            onClick={() => setFaultType('slg')}
            className={`py-2 px-2 rounded text-xs font-semibold border transition-colors ${
              faultType === 'slg'
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.slg}
          </button>
          <button
            type="button"
            onClick={() => setFaultType('ll')}
            className={`py-2 px-2 rounded text-xs font-semibold border transition-colors ${
              faultType === 'll'
                ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.ll}
          </button>
          <button
            type="button"
            onClick={() => setFaultType('llg')}
            className={`py-2 px-2 rounded text-xs font-semibold border transition-colors ${
              faultType === 'llg'
                ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.llg}
          </button>
          <button
            type="button"
            onClick={() => setFaultType('3p')}
            className={`py-2 px-2 rounded text-xs font-semibold border transition-colors ${
              faultType === '3p'
                ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.threePhase}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Impedance Controls */}
        <div className="lg:col-span-5 space-y-3 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.systemHeading}</div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.systemVolt}</span>
              <span className="font-mono text-cyan-400 font-bold">{systemVoltageKv} kV</span>
            </div>
            <input
              id={`${controlId}-volt`}
              type="range"
              min="3.3"
              max="33"
              step="1.1"
              value={systemVoltageKv}
              onChange={(e) => setSystemVoltageKv(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 h-1 rounded cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.posReactance}</span>
              <span className="font-mono text-emerald-400 font-bold">{x1.toFixed(2)} Ω</span>
            </div>
            <input
              id={`${controlId}-x1`}
              type="range"
              min="0.2"
              max="5.0"
              step="0.1"
              value={x1}
              onChange={(e) => {
                const val = Number(e.target.value);
                setX1(val);
                setX2(val); // In static equipment X2 = X1
              }}
              className="w-full accent-emerald-500 bg-slate-800 h-1 rounded cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.zeroReactance}</span>
              <span className="font-mono text-purple-400 font-bold">{x0.toFixed(2)} Ω</span>
            </div>
            <input
              id={`${controlId}-x0`}
              type="range"
              min="0.5"
              max="15.0"
              step="0.2"
              value={x0}
              onChange={(e) => setX0(Number(e.target.value))}
              className="w-full accent-purple-500 bg-slate-800 h-1 rounded cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.faultRes}</span>
              <span className="font-mono text-amber-400 font-bold">{rf.toFixed(2)} Ω</span>
            </div>
            <input
              id={`${controlId}-rf`}
              type="range"
              min="0"
              max="5"
              step="0.25"
              value={rf}
              onChange={(e) => setRf(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 rounded cursor-pointer"
            />
          </div>

          {/* Topology info */}
          <div className="p-3 bg-slate-900 rounded border border-slate-800 text-[11px] text-slate-300 space-y-1">
            <span className="text-indigo-400 font-bold block">{t.networkTopology}</span>
            <p className="text-slate-400 leading-relaxed">
              {faultType === 'slg' && t.topoSlg}
              {faultType === 'll' && t.topoLl}
              {faultType === 'llg' && t.topoLlg}
              {faultType === '3p' && t.topo3p}
            </p>
          </div>
        </div>

        {/* Results & Breaker Sizing */}
        <div className="lg:col-span-7 space-y-4">
          {/* CB Short Circuit Duty Hero */}
          <div className="bg-slate-950 p-4 rounded-lg border border-rose-900/50 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">{t.mvaDuty}</span>
              <div className="text-2xl font-bold font-mono text-rose-400">
                {faultMva.toFixed(1)} <span className="text-sm font-normal text-slate-400">MVA</span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">Maximum Fault Current: {maxPhaseFaultKa.toFixed(2)} kA</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">{t.igLabel}</span>
              <div className="text-xl font-bold font-mono text-amber-400">
                {(ig / 1000).toFixed(2)} <span className="text-sm font-normal text-slate-500">kA</span>
              </div>
            </div>
          </div>

          {/* Sequence Currents Breakdown */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-slate-950 p-3 rounded-lg border border-emerald-900/40 text-center">
              <span className="text-[10px] text-emerald-400 font-semibold block">{t.ia1Label}</span>
              <div className="text-base font-bold font-mono text-emerald-300">{(ia1 / 1000).toFixed(2)} kA</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-rose-900/40 text-center">
              <span className="text-[10px] text-rose-400 font-semibold block">{t.ia2Label}</span>
              <div className="text-base font-bold font-mono text-rose-300">{(ia2 / 1000).toFixed(2)} kA</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-purple-900/40 text-center">
              <span className="text-[10px] text-purple-400 font-semibold block">{t.ia0Label}</span>
              <div className="text-base font-bold font-mono text-purple-300">{(ia0 / 1000).toFixed(2)} kA</div>
            </div>
          </div>

          {/* Actual Conductor Fault Currents */}
          <div className="bg-slate-950/90 p-3.5 rounded-lg border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">{t.phaseFaults}</span>
            <div className="grid grid-cols-3 gap-2 text-center font-mono">
              <div className="p-2 bg-slate-900 rounded border border-red-900/40">
                <span className="text-[10px] text-red-400 block font-bold">Phase A (Ia)</span>
                <span className="text-sm font-bold text-slate-200">{(ifaultA / 1000).toFixed(2)} kA</span>
              </div>
              <div className="p-2 bg-slate-900 rounded border border-yellow-900/40">
                <span className="text-[10px] text-yellow-400 block font-bold">Phase B (Ib)</span>
                <span className="text-sm font-bold text-slate-200">{(ifaultB / 1000).toFixed(2)} kA</span>
              </div>
              <div className="p-2 bg-slate-900 rounded border border-blue-900/40">
                <span className="text-[10px] text-blue-400 block font-bold">Phase C (Ic)</span>
                <span className="text-sm font-bold text-slate-200">{(ifaultC / 1000).toFixed(2)} kA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
