import React, { useState } from 'react';
import { Language } from '../../types';
import { Sliders, RotateCcw, ShieldCheck, ShieldAlert, CheckCircle2, Zap, Info } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const DifferentialProtectionSimulator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [faultType, setFaultType] = useState<'external' | 'internal'>('external');
  const [throughCurrentA, setThroughCurrentA] = useState<number>(3500); // Through current (A)
  const [internalFaultCurrentA, setInternalFaultCurrentA] = useState<number>(2000); // Internal infeed (A)
  const [ctMismatchPct, setCtMismatchPct] = useState<number>(5); // CT ratio mismatch %
  const [ctSaturationSpillPct, setCtSaturationSpillPct] = useState<number>(10); // Saturation spill %
  const [slope1Pct, setSlope1Pct] = useState<number>(25); // Slope K1 % (e.g. 25%)
  const [slope2Pct, setSlope2Pct] = useState<number>(65); // Slope K2 % (e.g. 65%)
  const [basePickupA, setBasePickupA] = useState<number>(0.3); // p.u. or Amperes secondary (say 300A primary equivalent)

  // CT secondary nominal = 5A, referred to primary for simplicity
  // External Fault:
  // I1 = throughCurrentA
  // I2 = -throughCurrentA * (1 - (ctMismatchPct + (throughCurrentA > 4000 ? ctSaturationSpillPct : 0))/100)
  // Internal Fault:
  // I1 = throughCurrentA, I2 = -internalFaultCurrentA (both feed into the fault)

  let i1 = throughCurrentA;
  let i2 = 0;
  let iOp = 0;
  let iRes = 0;

  if (faultType === 'external') {
    const errorFrac = (ctMismatchPct + (throughCurrentA > 3000 ? (throughCurrentA / 8000) * ctSaturationSpillPct : 0)) / 100;
    i2 = throughCurrentA * (1 - errorFrac);
    iOp = Math.abs(i1 - i2);
    iRes = (Math.abs(i1) + Math.abs(i2)) / 2;
  } else {
    // Both sides feed the internal fault
    i1 = throughCurrentA;
    i2 = internalFaultCurrentA;
    iOp = Math.abs(i1 + i2); // Fault current vector sum
    iRes = (Math.abs(i1) + Math.abs(i2)) / 2;
  }

  // Dual Slope Characteristic Threshold
  const kneePointIRes = 3000; // Knee point between Slope 1 and Slope 2
  const minPickup = 300; // Base pickup
  let thresholdIop = 0;

  if (iRes <= kneePointIRes) {
    thresholdIop = minPickup + (slope1Pct / 100) * iRes;
  } else {
    thresholdIop = minPickup + (slope1Pct / 100) * kneePointIRes + (slope2Pct / 100) * (iRes - kneePointIRes);
  }

  const willTrip = iOp > thresholdIop;

  // Plot scaling: Max Ires = 10,000A, Max Iop = 8,000A
  const plotW = 460;
  const plotH = 180;
  const scaleX = plotW / 10000;
  const scaleY = plotH / 8000;

  const kneeX = kneePointIRes * scaleX;
  const kneeY = plotH - (minPickup + (slope1Pct / 100) * kneePointIRes) * scaleY;
  const endY = plotH - (minPickup + (slope1Pct / 100) * kneePointIRes + (slope2Pct / 100) * (10000 - kneePointIRes)) * scaleY;

  const currentPointX = Math.min(iRes * scaleX, plotW);
  const currentPointY = Math.max(plotH - iOp * scaleY, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">
              {lang === 'en' && 'Biased Percentage Differential Relay (87) Simulator'}
              {lang === 'hi' && 'प्रतिशत बायस्ड डिफरेंशियल रिले (87) सिमुलेटर'}
              {lang === 'bn' && 'বায়াসড পারসেন্টেজ ডিফারেন্সিয়াল রিলে (87) সিমুলেটর'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'en' && 'Dual-slope operating characteristic: verify restraint against external through-faults with CT saturation vs. internal trip.'}
            {lang === 'hi' && 'द्वि-ढलान विशेषता: सीटी संतृप्ति के साथ बाह्य फॉल्ट पर स्थिरता और आंतरिक फॉल्ट पर त्वरित ट्रिप का परीक्षण करें।'}
            {lang === 'bn' && 'ডুয়াল-স্লোপ বৈশিষ্ট্য: সিটি স্যাচুরেশনসহ বহিরাগত ফল্টে রিলে রিস্ট্রেন এবং অভ্যন্তরীণ ফল্টে ট্রিপ যাচাই করুন।'}
          </p>
        </div>
        <button
          onClick={() => {
            setFaultType('external');
            setThroughCurrentA(3500);
            setInternalFaultCurrentA(2000);
            setCtMismatchPct(5);
            setCtSaturationSpillPct(10);
            setSlope1Pct(25);
            setSlope2Pct(65);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'Reset' : lang === 'hi' ? 'रीसेट' : 'রিসেট'}</span>
        </button>
      </div>

      {/* Fault Condition Selector Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setFaultType('external')}
          className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 border transition-all ${
            faultType === 'external'
              ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-lg shadow-emerald-950/50'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{lang === 'en' ? 'Simulate External Through-Fault (Out of Zone)' : lang === 'hi' ? 'बाह्य थ्रू-फॉल्ट सिमुलेट करें (क्षेत्र से बाहर)' : 'বহিরাগত থ্রু-ফল্ট সিমুলেট করুন (জোনের বাইরে)'}</span>
        </button>

        <button
          onClick={() => setFaultType('internal')}
          className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 border transition-all ${
            faultType === 'internal'
              ? 'bg-rose-950/80 border-rose-500 text-rose-300 shadow-lg shadow-rose-950/50'
              : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
          }`}
        >
          <Zap className="w-4 h-4 text-rose-400" />
          <span>{lang === 'en' ? 'Simulate Internal Winding / Bus Fault (In Zone)' : lang === 'hi' ? 'आंतरिक वाइंडिंग/बस फॉल्ट सिमुलेट करें' : 'অভ্যন্তরীণ ওয়াইন্ডিং/বাস ফল্ট সিমুলেট করুন'}</span>
        </button>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {/* Through Current */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Through Current / Primary Grid Infeed' : lang === 'hi' ? 'थ्रू करंट / प्राथमिक ग्रिड इनफीड' : 'থ্রু কারেন্ট / প্রাইমারি গ্রিড ইনফিড'}
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400">{throughCurrentA} A</span>
          </div>
          <input
            type="range"
            min="500"
            max="9000"
            step="100"
            value={throughCurrentA}
            onChange={(e) => setThroughCurrentA(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        {/* CT Mismatch % */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'CT Ratio & Tap Mismatch Error' : lang === 'hi' ? 'सीटी अनुपात एवं टैप त्रुटि' : 'সিটি অনুপাত ও ট্যাপ ত্রুটি'}
            </span>
            <span className="text-xs font-mono font-bold text-amber-400">{ctMismatchPct}%</span>
          </div>
          <input
            type="range"
            min="1"
            max="15"
            step="1"
            value={ctMismatchPct}
            onChange={(e) => setCtMismatchPct(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
        </div>

        {/* CT Saturation Spill % */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Heavy Fault CT Saturation Spill' : lang === 'hi' ? 'भारी फॉल्ट सीटी संतृप्ति स्पिल' : 'তীব্র ফল্টে সিটি স্যাচুরেশন স্পিল'}
            </span>
            <span className="text-xs font-mono font-bold text-rose-400">{ctSaturationSpillPct}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="30"
            step="1"
            value={ctSaturationSpillPct}
            onChange={(e) => setCtSaturationSpillPct(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-400"
          />
        </div>

        {/* Slope 1 */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Slope K1 (Low Current Sensitivity)' : lang === 'hi' ? 'ढलान K1 (निम्न धारा संवेदनशीलता)' : 'স্লোপ K1 (নিম্ন কারেন্ট সংবেদনশীলতা)'}
            </span>
            <span className="text-xs font-mono font-bold text-indigo-400">{slope1Pct}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="40"
            step="1"
            value={slope1Pct}
            onChange={(e) => setSlope1Pct(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
          />
        </div>

        {/* Slope 2 */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Slope K2 (High Fault Stability)' : lang === 'hi' ? 'ढलान K2 (उच्च फॉल्ट स्थिरता)' : 'স্লোপ K2 (উচ্চ ফল্ট স্থায়িত্ব)'}
            </span>
            <span className="text-xs font-mono font-bold text-indigo-400">{slope2Pct}%</span>
          </div>
          <input
            type="range"
            min="40"
            max="90"
            step="1"
            value={slope2Pct}
            onChange={(e) => setSlope2Pct(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
          />
        </div>

        {/* Internal Infeed when in internal mode */}
        {faultType === 'internal' && (
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-rose-300">
                {lang === 'en' ? 'Remote End Infeed (I2)' : lang === 'hi' ? 'रिमोट एंड इनफीड (I2)' : 'রিমোট এন্ড ইনফিড (I2)'}
              </span>
              <span className="text-xs font-mono font-bold text-rose-400">{internalFaultCurrentA} A</span>
            </div>
            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={internalFaultCurrentA}
              onChange={(e) => setInternalFaultCurrentA(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-400"
            />
          </div>
        )}
      </div>

      {/* Dual Slope Characteristic Graph */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-slate-200">
            {lang === 'en' ? 'Dual-Slope Differential Characteristic Plane (Iop vs. Ires)' : lang === 'hi' ? 'द्वि-ढलान डिफरेंशियल विशेषता तल (Iop बनाम Ires)' : 'ডুয়াল-স্লোপ ডিফারেন্সিয়াল বৈশিষ্ট্য তল (Iop বনাম Ires)'}
          </span>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-rose-400 font-bold">TRIP ZONE (Above Curve)</span>
            <span className="text-emerald-400 font-bold">RESTRAIN ZONE (Below Curve)</span>
          </div>
        </div>

        <svg viewBox="0 0 460 180" className="w-full h-52 bg-slate-900 rounded-lg">
          {/* Trip Zone Fill */}
          <polygon
            points={`0,0 460,0 460,${endY} ${kneeX},${kneeY} 0,${plotH - minPickup * scaleY}`}
            fill="#f43f5e"
            fillOpacity="0.1"
          />

          {/* Restrain Zone Fill */}
          <polygon
            points={`0,${plotH} 460,${plotH} 460,${endY} ${kneeX},${kneeY} 0,${plotH - minPickup * scaleY}`}
            fill="#10b981"
            fillOpacity="0.1"
          />

          {/* Grid */}
          <line x1="0" y1={plotH / 2} x2="460" y2={plotH / 2} stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
          <line x1={plotW / 2} y1="0" x2={plotW / 2} y2={plotH} stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
          <line x1={kneeX} y1="0" x2={kneeX} y2={plotH} stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />

          {/* Labels */}
          <text x={kneeX + 4} y="20" fill="#94a3b8" fontSize="8" fontMono="true">Knee: 3 kA</text>
          <text x="360" y="40" fill="#f87171" fontSize="9" fontWeight="bold">TRIP REGION</text>
          <text x="330" y="160" fill="#34d399" fontSize="9" fontWeight="bold">RESTRAINT REGION</text>

          {/* Dual Slope Curve Boundary */}
          <polyline
            points={`0,${plotH - minPickup * scaleY} ${kneeX},${kneeY} 460,${endY}`}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="3"
          />

          {/* Operating Point */}
          <circle
            cx={currentPointX}
            cy={currentPointY}
            r="7"
            fill={willTrip ? '#ef4444' : '#10b981'}
            stroke="#ffffff"
            strokeWidth="2"
            className="animate-pulse"
          />
          <text
            x={currentPointX + 12}
            y={currentPointY + 4}
            fill={willTrip ? '#f87171' : '#34d399'}
            fontSize="9"
            fontWeight="bold"
          >
            Operating Point ({iRes.toFixed(0)}A, {iOp.toFixed(0)}A)
          </text>
        </svg>
      </div>

      {/* Numerical Metrics and Verdict */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Operating Current Iop */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Operating Current (Iop = |I1 - I2|)' : lang === 'hi' ? 'ऑपरेटिंग धारा (Iop)' : 'অপারেটিং কারেন্ট (Iop)'}
          </span>
          <div className="text-xl font-bold font-mono text-cyan-400">
            {iOp.toFixed(0)} A
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            Spill / differential current
          </span>
        </div>

        {/* Restraining Current Ires */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Restraining Current (Ires)' : lang === 'hi' ? 'रीस्ट्रेनिंग धारा (Ires)' : 'রিস্ট্রেনিং কারেন্ট (Ires)'}
          </span>
          <div className="text-xl font-bold font-mono text-amber-400">
            {iRes.toFixed(0)} A
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            Average through current
          </span>
        </div>

        {/* Dynamic Trip Threshold */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Required Trip Threshold' : lang === 'hi' ? 'आवश्यक ट्रिप थ्रेशोल्ड' : 'প্রয়োজনীয় ট্রিপ থ্রেশহোল্ড'}
          </span>
          <div className="text-xl font-bold font-mono text-indigo-400">
            {thresholdIop.toFixed(0)} A
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            Current slope boundary
          </span>
        </div>

        {/* Relay Verdict */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? '87 Relay Decision' : lang === 'hi' ? '87 रिले निर्णय' : '৮৭ রিলে সিদ্ধান্ত'}
          </span>
          <div className="flex items-center gap-2 mt-1">
            {willTrip ? (
              <>
                <Zap className="w-5 h-5 text-rose-400 shrink-0 animate-bounce" />
                <span className="text-sm font-bold text-rose-400">
                  {lang === 'en' ? 'TRIP COMMAND ISSUED' : lang === 'hi' ? 'ट्रिप कमांड जारी' : 'ট্রিপ কমান্ড জারি'}
                </span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-bold text-emerald-400">
                  {lang === 'en' ? 'STABLE (RESTRAINED)' : lang === 'hi' ? 'स्थिर (रीस्ट्रेन्ड)' : 'স্থির (রিস্ট্রেনড)'}
                </span>
              </>
            )}
          </div>
          <p className="text-[10px] text-slate-500 mt-1">
            {willTrip
              ? (faultType === 'internal' ? 'Desirable: internal fault cleared!' : 'MALOPERATION: external through-fault tripped!')
              : (faultType === 'external' ? 'Desirable: external fault restrained!' : 'FAILURE TO TRIP: internal fault undetected!')}
          </p>
        </div>
      </div>

      {/* Engineering Note */}
      <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
        <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-emerald-300">
            {lang === 'en' ? 'Why Dual Slope (K1 and K2) is Essential: ' : lang === 'hi' ? 'द्वि-ढलान (K1 एवं K2) क्यों आवश्यक है: ' : 'ডুয়াল-স্লোপ (K1 ও K2) কেন আবশ্যক: '}
          </span>
          {lang === 'en' && 'At normal load currents, CTs operate in their linear magnetic region where ratio errors are small (1-5%), allowing a sensitive Slope 1 (20-30%) to detect high-resistance winding faults. However, during external through-faults of 20-40 kA, severe unequal CT saturation produces massive false spill currents. Slope 2 (60-80%) dynamically elevates the trip threshold at high through-currents, preventing catastrophic false trips.'}
          {lang === 'hi' && 'सामान्य लोड पर सीटी रैखिक क्षेत्र में काम करते हैं जहां त्रुटियां कम (1-5%) होती हैं, जिससे संवेदनशील ढलान 1 (20-30%) आंतरिक वाइंडिंग दोषों को पकड़ लेता है। लेकिन बाहरी भारी फॉल्ट पर सीटी संतृप्ति के कारण ढलान 2 (60-80%) ट्रिप सीमा को ऊंचा कर देता है, जिससे गलत ट्रिपिंग रुक जाती है।'}
          {lang === 'bn' && 'স্বাভাবিক লোডে সিটি লিনিয়ার অঞ্চলে থাকে এবং ত্রুটি কম (১-৫%) হওয়ায় স্লোপ ১ (২০-৩০%) দ্বারা সংবেদনশীলভাবে অভ্যন্তরীণ ফল্ট ধরা পড়ে। কিন্তু বিশাল এক্সটার্নাল ফল্টে তীব্র সিটি স্যাচুরেশনের কারণে ফলস স্পিল কারেন্ট দেখা দেয়। তখন স্লোপ ২ (৬০-৮০%) ট্রিপ থ্রেশহোল্ড বাড়িয়ে ভুল ট্রিপ হওয়া পুরোপুরি ঠেকায়।'}
        </div>
      </div>
    </div>
  );
};
