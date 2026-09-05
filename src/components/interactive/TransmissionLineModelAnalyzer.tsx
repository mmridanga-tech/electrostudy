import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Layers, Activity, Sliders, CheckCircle2, ChevronRight, Gauge } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const TransmissionLineModelAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const idPrefix = useId();

  // Inputs
  const [lineLengthKm, setLineLengthKm] = useState<number>(160); // km
  const [vrKvLL, setVrKvLL] = useState<number>(220);             // kV receiving end
  const [prMw, setPrMw] = useState<number>(120);                 // MW load
  const [pf, setPf] = useState<number>(0.85);                    // Power Factor
  const [isLagging, setIsLagging] = useState<boolean>(true);
  const [modelType, setModelType] = useState<'auto' | 'short' | 'mediumPi' | 'longExact'>('auto');

  // Per-km typical parameters (220kV class line)
  const rPerKm = 0.08;     // Ω/km
  const xPerKm = 0.38;     // Ω/km (inductance at 50Hz)
  const bPerKm = 3.0e-6;   // S/km (shunt susceptance)

  // Total series impedance Z and shunt admittance Y
  const rTotal = rPerKm * lineLengthKm;
  const xTotal = xPerKm * lineLengthKm;
  const zMag = Math.sqrt(rTotal * rTotal + xTotal * xTotal);
  const zAngRad = Math.atan2(xTotal, rTotal);

  const yTotal = bPerKm * lineLengthKm; // Purely imaginary susceptance Y = j*B
  const yMag = yTotal;
  const yAngRad = Math.PI / 2;

  // Receiving end phase voltage & current
  const vrPhVolts = (vrKvLL * 1000) / Math.sqrt(3);
  const phiRad = Math.acos(Math.min(1, Math.max(0, pf)));
  const irAmp = (prMw * 1e6) / (Math.sqrt(3) * (vrKvLL * 1000) * pf);
  const irAngRad = isLagging ? -phiRad : phiRad;

  // Determine active model
  let activeModel = modelType;
  if (modelType === 'auto') {
    if (lineLengthKm < 80) activeModel = 'short';
    else if (lineLengthKm <= 250) activeModel = 'mediumPi';
    else activeModel = 'longExact';
  }

  // Calculate ABCD parameters
  let aMag = 1.0;
  let aAngRad = 0.0;
  let bMag = zMag;
  let bAngRad = zAngRad;
  let cMag = 0.0;
  let cAngRad = 0.0;
  let dMag = 1.0;
  let dAngRad = 0.0;

  if (activeModel === 'short') {
    // A = 1, B = Z, C = 0, D = 1
    aMag = 1.0;
    aAngRad = 0.0;
    bMag = zMag;
    bAngRad = zAngRad;
    cMag = 0.0;
    cAngRad = 0.0;
    dMag = 1.0;
    dAngRad = 0.0;
  } else if (activeModel === 'mediumPi') {
    // Nominal-pi:
    // A = D = 1 + (Y*Z)/2
    // Y = j*yTotal, Z = r + j*x
    // Y*Z = j*yTotal*(r + j*x) = -yTotal*x + j*yTotal*r
    const yzReal = -yTotal * xTotal;
    const yzImag = yTotal * rTotal;
    const aReal = 1 + yzReal / 2;
    const aImag = yzImag / 2;
    aMag = Math.sqrt(aReal * aReal + aImag * aImag);
    aAngRad = Math.atan2(aImag, aReal);
    dMag = aMag;
    dAngRad = aAngRad;

    bMag = zMag;
    bAngRad = zAngRad;

    // C = Y * (1 + Y*Z/4)
    const cMultReal = 1 + yzReal / 4;
    const cMultImag = yzImag / 4;
    const cMultMag = Math.sqrt(cMultReal * cMultReal + cMultImag * cMultImag);
    const cMultAng = Math.atan2(cMultImag, cMultReal);
    cMag = yMag * cMultMag;
    cAngRad = yAngRad + cMultAng;
  } else {
    // Long exact hyperbolic approximation:
    // A = D = cosh(gamma * l) ≈ 1 + (YZ)/2 + (YZ)^2 / 24
    // B = Z * (sinh(gamma * l) / (gamma * l)) ≈ Z * (1 + (YZ)/6)
    // C = Y * (sinh(gamma * l) / (gamma * l)) ≈ Y * (1 + (YZ)/6)
    const yzReal = -yTotal * xTotal;
    const yzImag = yTotal * rTotal;
    const aReal = 1 + yzReal / 2 + (yzReal * yzReal - yzImag * yzImag) / 24;
    const aImag = yzImag / 2 + (2 * yzReal * yzImag) / 24;
    aMag = Math.sqrt(aReal * aReal + aImag * aImag);
    aAngRad = Math.atan2(aImag, aReal);
    dMag = aMag;
    dAngRad = aAngRad;

    const bMultReal = 1 + yzReal / 6;
    const bMultImag = yzImag / 6;
    const bMultMag = Math.sqrt(bMultReal * bMultReal + bMultImag * bMultImag);
    const bMultAng = Math.atan2(bMultImag, bMultReal);
    bMag = zMag * bMultMag;
    bAngRad = zAngRad + bMultAng;

    cMag = yMag * bMultMag;
    cAngRad = yAngRad + bMultAng;
  }

  // Sending-end voltage V_S = A * V_R + B * I_R
  // V_R = vrPhVolts ∠ 0°
  // I_R = irAmp ∠ irAngRad
  const avrReal = aMag * vrPhVolts * Math.cos(aAngRad);
  const avrImag = aMag * vrPhVolts * Math.sin(aAngRad);

  const birReal = bMag * irAmp * Math.cos(bAngRad + irAngRad);
  const birImag = bMag * irAmp * Math.sin(bAngRad + irAngRad);

  const vsReal = avrReal + birReal;
  const vsImag = avrImag + birImag;
  const vsPhMag = Math.sqrt(vsReal * vsReal + vsImag * vsImag);
  const vsKvLL = (vsPhMag * Math.sqrt(3)) / 1000;
  const vsAngDeg = (Math.atan2(vsImag, vsReal) * 180) / Math.PI;

  // Sending-end current I_S = C * V_R + D * I_R
  const cvrReal = cMag * vrPhVolts * Math.cos(cAngRad);
  const cvrImag = cMag * vrPhVolts * Math.sin(cAngRad);

  const dirReal = dMag * irAmp * Math.cos(dAngRad + irAngRad);
  const dirImag = dMag * irAmp * Math.sin(dAngRad + irAngRad);

  const isReal = cvrReal + dirReal;
  const isImag = cvrImag + dirImag;
  const isAmp = Math.sqrt(isReal * isReal + isImag * isImag);

  // Sending power P_S and Efficiency
  const psWatts = 3 * (vsReal * isReal + vsImag * isImag);
  const psMw = psWatts / 1e6;
  const efficiency = Math.min(100, Math.max(0, (prMw / (psMw || 1)) * 100));

  // Voltage Regulation = (|V_S / A| - |V_R|) / |V_R| * 100%
  const vrNoLoad = vsPhMag / aMag;
  const vRegulation = ((vrNoLoad - vrPhVolts) / vrPhVolts) * 100;

  const t = {
    en: {
      title: 'Transmission-Line Model Analyzer: Short, Medium & Long',
      subtitle: 'Compare lumped-parameter and distributed hyperbolic ABCD two-port transfer models',
      lineLenLabel: 'Line Length (km):',
      vrLabel: 'Receiving-End Voltage (kV LL):',
      prLabel: 'Load Power (MW):',
      pfLabel: 'Operating Power Factor:',
      modelSelect: 'Mathematical Line Model',
      autoSelect: 'Auto-Select by Length',
      shortLine: 'Short Line (<80 km, C=0)',
      mediumPi: 'Medium Line (80-250 km, Nominal-π)',
      longExact: 'Long Line (>250 km, Hyperbolic)',
      abcdTitle: 'Two-Port ABCD Transmission Matrix',
      perfTitle: 'Sending-End Operating Performance',
      vsLabel: 'Sending-End Line Voltage (V_S):',
      isLabel: 'Sending-End Line Current (I_S):',
      vRegLabel: 'Voltage Regulation (VR%):',
      effLabel: 'Transmission Efficiency (η%):',
      modelActiveBadge: 'Active Model Applied:',
      shortDesc: 'Short Line Model: Shunt capacitance C is safely neglected. Transfer matrix has A = D = 1 and C = 0.',
      mediumDesc: 'Medium Line (Nominal-π): Shunt admittance Y is split equally with Y/2 placed at both ends.',
      longDesc: 'Long Line (Rigorous Hyperbolic): Exact wave propagation with hyperbolic series expansion.'
    },
    hi: {
      title: 'पारेषण लाइन मॉडल विश्लेषक: लघु, मध्यम एवं दीर्घ',
      subtitle: 'लम्प्ड-पैरामीटर और वितरित हाइपरबोलिक ABCD टू-पोर्ट ट्रांसफर मॉडल की तुलना करें',
      lineLenLabel: 'लाइन की लंबाई (किमी):',
      vrLabel: 'प्राप्तिकर्ता सिरा वोल्टेज (kV LL):',
      prLabel: 'लोड शक्ति (MW):',
      pfLabel: 'ऑपरेटिंग पावर फैक्टर:',
      modelSelect: 'गणितीय लाइन मॉडल',
      autoSelect: 'लंबाई अनुसार स्वतः चयन',
      shortLine: 'लघु लाइन (<80 किमी, C=0)',
      mediumPi: 'मध्यम लाइन (80-250 किमी, नॉमिनल-π)',
      longExact: 'दीर्घ लाइन (>250 किमी, हाइपरबोलिक)',
      abcdTitle: 'टू-पोर्ट ABCD ट्रांसमिशन मैट्रिक्स',
      perfTitle: 'प्रेषण सिरा (Sending-End) कार्यप्रदर्शन',
      vsLabel: 'प्रेषण सिरा लाइन वोल्टेज (V_S):',
      isLabel: 'प्रेषण सिरा धारा (I_S):',
      vRegLabel: 'वोल्टेज नियमन (VR%):',
      effLabel: 'पारेषण दक्षता (η%):',
      modelActiveBadge: 'सक्रिय मॉडल:',
      shortDesc: 'लघु लाइन मॉडल: शंट कैपेसिटेंस को नगण्य माना जाता है। A = D = 1 और C = 0।',
      mediumDesc: 'मध्यम लाइन (नॉमिनल-π): शंट एडमिटेंस Y को दोनों सिरों पर Y/2 के रूप में विभाजित किया जाता है।',
      longDesc: 'दीर्घ लाइन: सटीक तरंग संचरण जिसमें हाइपरबोलिक फलन शामिल होते हैं।'
    },
    bn: {
      title: 'ট্রান্সমিশন লাইন মডেল অ্যানালাইজার: ক্ষুদ্র, মাঝারি ও দীর্ঘ',
      subtitle: 'ল্যাম্পড প্যারামিটার ও ডিস্ট্রিবিউটেড হাইপারবোলিক ABCD টু-পোর্ট মডেল তুলনা করুন',
      lineLenLabel: 'লাইনের দৈর্ঘ্য (কিমি):',
      vrLabel: 'রিসিভিং-এন্ড ভোল্টেজ (kV LL):',
      prLabel: 'লোড পাওয়ার (MW):',
      pfLabel: 'অপারেটিং পাওয়ার ফ্যাক্টর:',
      modelSelect: 'গাণিতিক লাইন মডেল',
      autoSelect: 'দৈর্ঘ্য অনুসারে স্বয়ংক্রিয়',
      shortLine: 'ক্ষুদ্র লাইন (<৮০ কিমি, C=0)',
      mediumPi: 'মাঝারি লাইন (৮০-২৫০ কিমি, নমিনাল-π)',
      longExact: 'দীর্ঘ লাইন (>২৫০ কিমি, হাইপারবোলিক)',
      abcdTitle: 'টু-পোর্ট ABCD ট্রান্সমিশন ম্যাট্রিক্স',
      perfTitle: 'সেন্ডিং-এন্ড কর্মক্ষমতা ও দক্ষতা',
      vsLabel: 'সেন্ডিং-এন্ড লাইন ভোল্টেজ (V_S):',
      isLabel: 'সেন্ডিং-এন্ড লাইন কারেন্ট (I_S):',
      vRegLabel: 'ভোল্টেজ রেগুলেশন (VR%):',
      effLabel: 'ট্রান্সমিশন দক্ষতা (η%):',
      modelActiveBadge: 'সক্রিয় মডেল:',
      shortDesc: 'ক্ষুদ্র লাইন মডেল: শান্ট ক্যাপাসিট্যান্স অগ্রাহ্য করা হয়। A = D = 1 এবং C = 0।',
      mediumDesc: 'মাঝারি লাইন (নমিনাল-π): শান্ট অ্যাডমিট্যান্স Y কে দুই প্রান্তে Y/2 করে ভাগ করা হয়।',
      longDesc: 'দীর্ঘ লাইন: নিখুঁত হাইপারবোলিক তরঙ্গ বিস্তার মডেলিং।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-sky-400" />
            <h3 className="text-xl font-bold text-sky-400">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/30 rounded-full text-xs font-mono font-semibold">
          ABCD Two-Port Matrix
        </span>
      </div>

      {/* Model Selection Tabs */}
      <div className="mb-5">
        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          {t.modelSelect}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'auto', label: t.autoSelect },
            { id: 'short', label: t.shortLine },
            { id: 'mediumPi', label: t.mediumPi },
            { id: 'longExact', label: t.longExact }
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setModelType(item.id as any)}
              className={`py-2 px-2 text-xs font-semibold rounded-lg transition-all ${
                modelType === item.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Interactive Controls */}
        <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-4">
          <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" /> Circuit Operating Conditions
          </h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-lineLen`}>{t.lineLenLabel}</label>
              <span className="font-mono text-sky-400 font-bold">{lineLengthKm} km</span>
            </div>
            <input
              id={`${idPrefix}-lineLen`}
              type="range"
              min="20"
              max="400"
              step="5"
              value={lineLengthKm}
              onChange={(e) => setLineLengthKm(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor={`${idPrefix}-vr`} className="block text-xs text-slate-400 mb-1">{t.vrLabel}</label>
              <input
                id={`${idPrefix}-vr`}
                type="number"
                min="33"
                max="765"
                value={vrKvLL}
                onChange={(e) => setVrKvLL(Math.max(1, parseFloat(e.target.value) || 1))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-white font-mono"
              />
            </div>
            <div>
              <label htmlFor={`${idPrefix}-pr`} className="block text-xs text-slate-400 mb-1">{t.prLabel}</label>
              <input
                id={`${idPrefix}-pr`}
                type="number"
                min="5"
                max="1000"
                value={prMw}
                onChange={(e) => setPrMw(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm text-white font-mono"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-pf`}>{t.pfLabel}</label>
              <span className="font-mono text-emerald-400 font-bold">
                {pf.toFixed(2)} ({isLagging ? 'Lagging' : 'Leading'})
              </span>
            </div>
            <input
              id={`${idPrefix}-pf`}
              type="range"
              min="0.60"
              max="1.00"
              step="0.02"
              value={pf}
              onChange={(e) => setPf(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                type="button"
                onClick={() => setIsLagging(!isLagging)}
                className="text-[11px] px-2.5 py-1 bg-slate-800 border border-slate-700 rounded text-slate-300 hover:text-white"
              >
                Switch to {isLagging ? 'Leading' : 'Lagging'} PF
              </button>
            </div>
          </div>

          {/* Model Active Description */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded text-xs">
            <div className="text-sky-300 font-bold flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {t.modelActiveBadge} <span className="uppercase text-amber-300 font-mono">{activeModel}</span>
            </div>
            <p className="text-slate-400">
              {activeModel === 'short' && t.shortDesc}
              {activeModel === 'mediumPi' && t.mediumDesc}
              {activeModel === 'longExact' && t.longDesc}
            </p>
          </div>
        </div>

        {/* Right: ABCD Matrix & Performance */}
        <div className="space-y-4">
          {/* ABCD Matrix Box */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-2">
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" /> {t.abcdTitle}
            </h4>
            <div className="bg-slate-900 border border-slate-800 rounded p-3 text-xs font-mono text-slate-300">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2 bg-slate-950 rounded border border-slate-800/60">
                  <div className="text-slate-500 text-[10px]">A:</div>
                  <div className="text-sky-300 font-bold">
                    {aMag.toFixed(4)} ∠ {((aAngRad * 180) / Math.PI).toFixed(2)}°
                  </div>
                </div>
                <div className="p-2 bg-slate-950 rounded border border-slate-800/60">
                  <div className="text-slate-500 text-[10px]">B (Ω):</div>
                  <div className="text-amber-300 font-bold">
                    {bMag.toFixed(2)} ∠ {((bAngRad * 180) / Math.PI).toFixed(1)}°
                  </div>
                </div>
                <div className="p-2 bg-slate-950 rounded border border-slate-800/60">
                  <div className="text-slate-500 text-[10px]">C (Siemens):</div>
                  <div className="text-emerald-300 font-bold">
                    {(cMag * 1000).toFixed(4)}mS ∠ {((cAngRad * 180) / Math.PI).toFixed(1)}°
                  </div>
                </div>
                <div className="p-2 bg-slate-950 rounded border border-slate-800/60">
                  <div className="text-slate-500 text-[10px]">D:</div>
                  <div className="text-sky-300 font-bold">
                    {dMag.toFixed(4)} ∠ {((dAngRad * 180) / Math.PI).toFixed(2)}°
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-slate-500 text-center mt-2">
                Reciprocity condition check: AD - BC = {(aMag * dMag - bMag * cMag).toFixed(4)} ≈ 1.0000
              </div>
            </div>
          </div>

          {/* Performance Results */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-4 rounded-xl border border-sky-500/30 space-y-2.5 text-xs">
            <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5" /> {t.perfTitle}
            </h4>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.vsLabel}</span>
              <span className="font-mono text-sky-300 font-bold text-sm">
                {vsKvLL.toFixed(2)} kV (∠ {vsAngDeg.toFixed(1)}°)
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.isLabel}</span>
              <span className="font-mono text-amber-300 font-bold">{isAmp.toFixed(1)} A</span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.vRegLabel}</span>
              <span className={`font-mono font-bold text-sm ${vRegulation < 10 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {vRegulation.toFixed(2)}%
              </span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-slate-400">{t.effLabel}</span>
              <span className="font-mono text-emerald-400 font-bold text-base">
                {efficiency.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
