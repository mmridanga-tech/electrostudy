import React, { useState } from 'react';
import { Language } from '../../types';
import { Activity, AlertTriangle, CheckCircle2, RotateCcw, Sliders, Zap, Info } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const CTSaturationAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  // Input states
  const [primaryFaultCurrentKA, setPrimaryFaultCurrentKA] = useState<number>(25); // kA
  const [ctPrimaryRated, setCtPrimaryRated] = useState<number>(1200); // A
  const [ctSecondaryRated, setCtSecondaryRated] = useState<number>(5); // 1A or 5A
  const [rCt, setRCt] = useState<number>(1.2); // Ohms internal CT secondary resistance
  const [rLeadBurden, setRLeadBurden] = useState<number>(2.5); // Ohms (Lead wire + Relay burden)
  const [xrRatio, setXrRatio] = useState<number>(15); // DC offset time constant factor
  const [vkKneePoint, setVkKneePoint] = useState<number>(350); // Volts (Class PS / PX knee point)

  // Calculations
  const ctRatio = ctPrimaryRated / ctSecondaryRated; // e.g. 1200/5 = 240
  const secondaryFaultCurrentA = (primaryFaultCurrentKA * 1000) / ctRatio; // Amperes
  const totalSecondaryBurdenZ = rCt + rLeadBurden; // Ohms
  
  // Steady-state required secondary voltage
  const vSecondarySteadyState = secondaryFaultCurrentA * totalSecondaryBurdenZ;
  
  // Transient required voltage with DC offset multiplier (1 + X/R)
  const vSecondaryPeakTransient = vSecondarySteadyState * (1 + xrRatio / 5); // approximate saturation demand
  
  // Saturation ratio
  const saturationFactor = vSecondaryPeakTransient / vkKneePoint;
  const isSaturated = saturationFactor > 1.0;
  const saturationSeverity = saturationFactor > 2.5 ? 'critical' : saturationFactor > 1.0 ? 'moderate' : 'safe';

  // Waveform points generator
  const generateWaveforms = () => {
    const pointsPrimary: string[] = [];
    const pointsSecondary: string[] = [];
    const width = 480;
    const height = 160;
    const midY = height / 2;
    const numPoints = 100;

    for (let i = 0; i <= numPoints; i++) {
      const t = (i / numPoints) * (4 * Math.PI); // 2 full cycles
      const x = (i / numPoints) * width;
      
      // DC decaying offset
      const dcDecay = Math.exp(-i / (numPoints * 0.4)) * (xrRatio / 20);
      const idealSine = Math.sin(t) + dcDecay;
      
      const yPrimary = midY - idealSine * 40;
      pointsPrimary.push(`${x},${yPrimary}`);

      // Saturated secondary with severe clipping and distortion when saturationFactor > 1
      let satSine = idealSine;
      if (isSaturated) {
        const clipThreshold = 1.0 / saturationFactor;
        if (satSine > clipThreshold) {
          satSine = clipThreshold + (satSine - clipThreshold) * 0.15; // flat iron saturation
        } else if (satSine < -clipThreshold) {
          satSine = -clipThreshold + (satSine + clipThreshold) * 0.15;
        }
      }
      const ySecondary = midY - satSine * 40;
      pointsSecondary.push(`${x},${ySecondary}`);
    }

    return {
      primaryPath: `M ${pointsPrimary.join(' L ')}`,
      secondaryPath: `M ${pointsSecondary.join(' L ')}`
    };
  };

  const waveforms = generateWaveforms();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">
              {lang === 'en' && 'Current Transformer (CT) Burden & Saturation Analyzer'}
              {lang === 'hi' && 'करंट ट्रांसफार्मर (CT) बर्डन एवं संतृप्ति (Saturation) विश्लेषक'}
              {lang === 'bn' && 'কারেন্ট ট্রান্সফরমার (CT) বার্ডেন ও স্যাচুরেশন অ্যানালাইজার'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'en' && 'Analyze CT Knee-Point Voltage (Vk), total secondary burden, DC offset X/R ratio, and waveform distortion.'}
            {lang === 'hi' && 'सीटी नी-पॉइंट वोल्टेज (Vk), द्वितीयक बर्डन, डीसी ऑफसेट और तरंगरूप विरूपण का विश्लेषण करें।'}
            {lang === 'bn' && 'সিটি নী-পয়েন্ট ভোল্টেজ (Vk), সেকেন্ডারি বার্ডেন, ডিসি অফসেট এবং ওয়েভফর্ম বিকৃতি বিশ্লেষণ করুন।'}
          </p>
        </div>
        <button
          onClick={() => {
            setPrimaryFaultCurrentKA(25);
            setCtPrimaryRated(1200);
            setCtSecondaryRated(5);
            setRCt(1.2);
            setRLeadBurden(2.5);
            setXrRatio(15);
            setVkKneePoint(350);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'Reset Defaults' : lang === 'hi' ? 'डिफ़ॉल्ट रीसेट' : 'ডিফল্ট রিসেট'}</span>
        </button>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {/* Fault Current */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Primary Fault Current (If)' : lang === 'hi' ? 'प्राथमिक फॉल्ट धारा (If)' : 'প্রাইমারি ফল্ট কারেন্ট (If)'}
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400">{primaryFaultCurrentKA} kA</span>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={primaryFaultCurrentKA}
            onChange={(e) => setPrimaryFaultCurrentKA(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>5 kA</span>
            <span>25 kA</span>
            <span>50 kA</span>
          </div>
        </div>

        {/* Knee-Point Voltage Vk */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Knee-Point Voltage (Vk)' : lang === 'hi' ? 'नी-पॉइंट वोल्टेज (Vk)' : 'নী-পয়েন্ট ভোল্টেজ (Vk)'}
            </span>
            <span className="text-xs font-mono font-bold text-emerald-400">{vkKneePoint} V</span>
          </div>
          <input
            type="range"
            min="100"
            max="800"
            step="25"
            value={vkKneePoint}
            onChange={(e) => setVkKneePoint(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>100 V (Weak)</span>
            <span>400 V</span>
            <span>800 V (Heavy PS)</span>
          </div>
        </div>

        {/* Lead + Relay Burden R_b */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'External Burden (R_lead + R_relay)' : lang === 'hi' ? 'बाह्य बर्डन (R_lead + R_relay)' : 'এক্সটার্নাল বার্ডেন (R_lead + R_relay)'}
            </span>
            <span className="text-xs font-mono font-bold text-amber-400">{rLeadBurden.toFixed(1)} Ω</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="8.0"
            step="0.2"
            value={rLeadBurden}
            onChange={(e) => setRLeadBurden(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>0.2 Ω</span>
            <span>4.0 Ω</span>
            <span>8.0 Ω</span>
          </div>
        </div>

        {/* CT Internal Resistance r_ct */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'CT Internal Winding Resistance (Rct)' : lang === 'hi' ? 'सीटी आंतरिक प्रतिरोध (Rct)' : 'সিটি ওয়াইন্ডিং রোধ (Rct)'}
            </span>
            <span className="text-xs font-mono font-bold text-indigo-400">{rCt.toFixed(1)} Ω</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="4.0"
            step="0.1"
            value={rCt}
            onChange={(e) => setRCt(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>0.2 Ω</span>
            <span>2.0 Ω</span>
            <span>4.0 Ω</span>
          </div>
        </div>

        {/* X/R System Ratio */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Grid X/R Ratio (DC Offset)' : lang === 'hi' ? 'ग्रिड X/R अनुपात (DC ऑफसेट)' : 'গ্রিড X/R অনুপাত (ডিসি অফসেট)'}
            </span>
            <span className="text-xs font-mono font-bold text-rose-400">{xrRatio}</span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={xrRatio}
            onChange={(e) => setXrRatio(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>1 (Pure R)</span>
            <span>15 (Substation)</span>
            <span>30 (Gen Terminals)</span>
          </div>
        </div>

        {/* CT Ratio Selector */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs font-semibold text-slate-300 block mb-2">
            {lang === 'en' ? 'CT Rated Ratio' : lang === 'hi' ? 'सीटी रेटेड अनुपात' : 'সিটি রেটেড অনুপাত'}
          </span>
          <div className="grid grid-cols-3 gap-2">
            {[600, 1200, 2000].map((ratio) => (
              <button
                key={ratio}
                onClick={() => setCtPrimaryRated(ratio)}
                className={`py-1.5 text-xs font-bold rounded transition-colors ${
                  ctPrimaryRated === ratio ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {ratio}/{ctSecondaryRated}A
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Waveform Visualization: Primary vs Secondary Saturation */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-slate-200">
              {lang === 'en' ? 'Oscillogram: Primary Reflected Current vs. Secondary Measured Current' : lang === 'hi' ? 'ऑसिलोग्राम: प्राथमिक परावर्तित धारा बनाम द्वितीयक मापी गई धारा' : 'অসিলোগ্রাম: প্রাইমারি রিফ্লেক্টেড কারেন্ট বনাম সেকেন্ডারি পরিমাপকৃত কারেন্ট'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1 text-cyan-400">
              <span className="w-3 h-0.5 bg-cyan-400 inline-block"></span>
              {lang === 'en' ? 'Ideal / Primary' : lang === 'hi' ? 'आदर्श धारा' : 'আদর্শ কারেন্ট'}
            </span>
            <span className="flex items-center gap-1 text-rose-400">
              <span className="w-3 h-0.5 bg-rose-400 inline-block"></span>
              {lang === 'en' ? 'Secondary (Distorted)' : lang === 'hi' ? 'द्वितीयक (विरूपित)' : 'সেকেন্ডারি (বিকৃত)'}
            </span>
          </div>
        </div>

        <svg viewBox="0 0 500 160" className="w-full h-44 bg-slate-900 rounded-lg">
          {/* Zero Axis */}
          <line x1="0" y1="80" x2="500" y2="80" stroke="#334155" strokeWidth="1" strokeDasharray="4,4" />
          
          {/* Grid lines */}
          <line x1="125" y1="0" x2="125" y2="160" stroke="#1e293b" strokeWidth="1" />
          <line x1="250" y1="0" x2="250" y2="160" stroke="#1e293b" strokeWidth="1" />
          <line x1="375" y1="0" x2="375" y2="160" stroke="#1e293b" strokeWidth="1" />

          {/* Primary Waveform */}
          <path d={waveforms.primaryPath} fill="none" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.6" />

          {/* Saturated Secondary Waveform */}
          <path d={waveforms.secondaryPath} fill="none" stroke={isSaturated ? '#f43f5e' : '#34d399'} strokeWidth="2.5" />

          {/* Saturation Annotation */}
          {isSaturated && (
            <g transform="translate(60, 25)">
              <rect x="0" y="0" width="160" height="22" rx="3" fill="#4c0519" stroke="#be123c" />
              <text x="80" y="14" fill="#fecdd3" fontSize="8" fontWeight="bold" textAnchor="middle">
                CORE SATURATION &amp; MISSING FLUX
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Numerical Engineering Diagnostic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Secondary Fault Current */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Secondary Current (Is)' : lang === 'hi' ? 'द्वितीयक धारा (Is)' : 'সেকেন্ডারি কারেন্ট (Is)'}
          </span>
          <div className="text-xl font-bold font-mono text-cyan-400">
            {secondaryFaultCurrentA.toFixed(1)} A
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            ratio = {ctRatio}:1 (In = {ctSecondaryRated}A)
          </span>
        </div>

        {/* Total Burden Z */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Total Loop Burden (Zsec)' : lang === 'hi' ? 'कुल बर्डन (Zsec)' : 'মোট লুপ বার্ডেন (Zsec)'}
          </span>
          <div className="text-xl font-bold font-mono text-amber-400">
            {totalSecondaryBurdenZ.toFixed(2)} Ω
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            Rct ({rCt}Ω) + Rburden ({rLeadBurden}Ω)
          </span>
        </div>

        {/* Required Excitation Voltage */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Req. Voltage (Vs,peak)' : lang === 'hi' ? 'आवश्यक वोल्टेज (Vs)' : 'প্রয়োজনীয় ভোল্টেজ (Vs)'}
          </span>
          <div className={`text-xl font-bold font-mono ${isSaturated ? 'text-rose-400' : 'text-emerald-400'}`}>
            {vSecondaryPeakTransient.toFixed(0)} V
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            Available Vk = {vkKneePoint} V
          </span>
        </div>

        {/* Saturation Factor Status */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Saturation Factor (Vs/Vk)' : lang === 'hi' ? 'संतृप्ति कारक (Vs/Vk)' : 'স্যাচুরেশন ফ্যাক্টর (Vs/Vk)'}
          </span>
          <div className={`text-xl font-bold font-mono ${isSaturated ? 'text-rose-400' : 'text-emerald-400'}`}>
            {saturationFactor.toFixed(2)}
          </div>
          <span className={`text-[10px] font-bold ${
            saturationSeverity === 'critical' ? 'text-rose-400' : saturationSeverity === 'moderate' ? 'text-amber-400' : 'text-emerald-400'
          }`}>
            {saturationSeverity === 'critical'
              ? (lang === 'en' ? 'CRITICAL SATURATION' : lang === 'hi' ? 'गंभीर संतृप्ति' : 'মারাত্মক স্যাচুরেশন')
              : saturationSeverity === 'moderate'
              ? (lang === 'en' ? 'BORDERLINE SATURATING' : lang === 'hi' ? 'संतृप्त सीमा' : 'বর্ডারলাইন স্যাচুরেশন')
              : (lang === 'en' ? 'LINEAR (SAFE OPERATION)' : lang === 'hi' ? 'रैखिक (सुरक्षित)' : 'লিনিয়ার (নিরাপদ)')}
          </span>
        </div>
      </div>

      {/* Engineering Rule Callout */}
      <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
        <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-cyan-300">
            {lang === 'en' ? 'IEEE C37.110 & IEC 61869-2 CT Sizing Criterion: ' : lang === 'hi' ? 'आईईईई C37.110 एवं आईईसी 61869-2 सीटी साइज़िंग मानदंड: ' : 'IEEE C37.110 এবং IEC 61869-2 সিটি সাইজিং মানদণ্ড: '}
          </span>
          {lang === 'en' && 'To prevent severe CT saturation during close-in asymmetrical faults with maximum DC offset, the knee-point voltage must satisfy: Vk ≥ 2 · If,max / N · (Rct + Rlead + Rrelay) · (1 + X/R). If Vk is undersized, the secondary current collapses, causing differential relays to see a false spill current and trip on external through-faults, or causing distance relays to underreach.'}
          {lang === 'hi' && 'अधिकतम डीसी ऑफसेट वाले असममित फॉल्ट के दौरान सीटी संतृप्ति को रोकने के लिए, नी-पॉइंट वोल्टेज Vk ≥ 2 · If,max / N · (Rct + Rlead + Rrelay) · (1 + X/R) होना चाहिए।'}
          {lang === 'bn' && 'সর্বোচ্চ ডিসি অফসেটসহ তীব্র ফল্টে সিটি স্যাচুরেশন রোধ করতে নী-পয়েন্ট ভোল্টেজ Vk ≥ 2 · If,max / N · (Rct + Rlead + Rrelay) · (1 + X/R) হতে হবে। অন্যথায় ডিফারেন্সিয়াল রিলে ফলস স্পিল কারেন্ট পেয়ে বহিরাগত ফল্টে ভুলবশত ট্রিপ করবে।'}
        </div>
      </div>
    </div>
  );
};
