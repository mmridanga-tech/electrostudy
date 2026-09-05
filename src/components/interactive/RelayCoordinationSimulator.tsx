import React, { useState } from 'react';
import { Language } from '../../types';
import { Sliders, RotateCcw, ShieldAlert, CheckCircle2, AlertTriangle, TrendingUp, Info } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const RelayCoordinationSimulator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  // Fault Current in Amperes (Primary)
  const [faultCurrentA, setFaultCurrentA] = useState<number>(4500);

  // Relay 2: Downstream (Feeder)
  const [ctRatioR2, setCtRatioR2] = useState<number>(200); // 200/5A
  const [pickupSettingR2, setPickupSettingR2] = useState<number>(1.0); // 100% = 200A
  const [tmsR2, setTmsR2] = useState<number>(0.12);

  // Relay 1: Upstream (Incomer / Transformer)
  const [ctRatioR1, setCtRatioR1] = useState<number>(800); // 800/5A
  const [pickupSettingR1, setPickupSettingR1] = useState<number>(1.2); // 120% = 960A
  const [tmsR1, setTmsR1] = useState<number>(0.28);

  // IEC Standard Inverse Formula: t = TMS * 0.14 / ((PSM)^0.02 - 1)
  const calculateOperatingTime = (faultI: number, ctRatio: number, pickup: number, tms: number): number | null => {
    const pickupCurrentA = (ctRatio) * pickup;
    if (faultI <= pickupCurrentA) return null; // Relay does not pick up
    const psm = faultI / pickupCurrentA;
    if (psm <= 1.0) return null;
    const denominator = Math.pow(psm, 0.02) - 1;
    if (denominator <= 0) return null;
    return (tms * 0.14) / denominator;
  };

  const t2 = calculateOperatingTime(faultCurrentA, ctRatioR2, pickupSettingR2, tmsR2);
  const t1 = calculateOperatingTime(faultCurrentA, ctRatioR1, pickupSettingR1, tmsR1);

  const gradingMargin = t1 !== null && t2 !== null ? t1 - t2 : null;
  const isCoordinated = gradingMargin !== null && gradingMargin >= 0.30;
  const isTooClose = gradingMargin !== null && gradingMargin > 0 && gradingMargin < 0.30;
  const isViolated = gradingMargin !== null && gradingMargin <= 0;

  // Generate SVG curve points for log-log TCC display
  // Currents from 500A to 15,000A
  const generateTccPath = (ctRatio: number, pickup: number, tms: number): string => {
    const points: string[] = [];
    const minI = 300;
    const maxI = 15000;
    const width = 500;
    const height = 180;

    for (let current = minI; current <= maxI; current += 250) {
      const time = calculateOperatingTime(current, ctRatio, pickup, tms);
      if (time !== null && time > 0.04 && time < 10) {
        // Log scales
        const x = ((Math.log10(current) - Math.log10(minI)) / (Math.log10(maxI) - Math.log10(minI))) * width;
        const y = height - ((Math.log10(time) - Math.log10(0.04)) / (Math.log10(10) - Math.log10(0.04))) * height;
        if (x >= 0 && x <= width && y >= 0 && y <= height) {
          points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
        }
      }
    }
    return points.length > 1 ? `M ${points.join(' L ')}` : '';
  };

  const pathR1 = generateTccPath(ctRatioR1, pickupSettingR1, tmsR1);
  const pathR2 = generateTccPath(ctRatioR2, pickupSettingR2, tmsR2);

  // Fault marker position
  const faultX = ((Math.log10(faultCurrentA) - Math.log10(300)) / (Math.log10(15000) - Math.log10(300))) * 500;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">
              {lang === 'en' && 'Overcurrent Relay Coordination & Grading Simulator'}
              {lang === 'hi' && 'अतिधारा रिले समन्वय एवं ग्रेडिंग सिमुलेटर'}
              {lang === 'bn' && 'ওভারকারেন্ট রিলে সমন্বয় ও গ্রেডিং সিমুলেটর'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'en' && 'Grade upstream and downstream relays using IEC Standard Inverse IDMT characteristics and verify the 0.3s discrimination margin.'}
            {lang === 'hi' && 'आईईसी स्टैंडर्ड इनवर्स विशेषता का उपयोग करके रिले ग्रेडिंग और 0.3s सुरक्षा मार्जिन की पुष्टि करें।'}
            {lang === 'bn' && 'আইইসি স্ট্যান্ডার্ড ইনভার্স বৈশিষ্ট্য এবং ০.৩ সেকেন্ড গ্রেডিং মার্জিন ব্যবহার করে আপস্ট্রিম ও ডাউনস্ট্রিম রিলে গ্রেড করুন।'}
          </p>
        </div>
        <button
          onClick={() => {
            setFaultCurrentA(4500);
            setTmsR2(0.12);
            setPickupSettingR2(1.0);
            setTmsR1(0.28);
            setPickupSettingR1(1.2);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'Reset Settings' : lang === 'hi' ? 'रीसेट' : 'রিসেট'}</span>
        </button>
      </div>

      {/* Control Sliders Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {/* Fault Current */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-rose-300">
              {lang === 'en' ? 'Simulated Fault Current (If)' : lang === 'hi' ? 'फॉल्ट धारा (If)' : 'ফল্ট কারেন্ট (If)'}
            </span>
            <span className="text-xs font-mono font-bold text-rose-400">{faultCurrentA} A</span>
          </div>
          <input
            type="range"
            min="1000"
            max="12000"
            step="100"
            value={faultCurrentA}
            onChange={(e) => setFaultCurrentA(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>1 kA</span>
            <span>6 kA</span>
            <span>12 kA</span>
          </div>
        </div>

        {/* Downstream Feeder Relay R2 Controls */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 border-l-4 border-l-cyan-500">
          <span className="text-xs font-bold text-cyan-400 block mb-2">
            {lang === 'en' ? 'Downstream Relay R2 (Feeder)' : lang === 'hi' ? 'डाउनस्ट्रीम रिले R2 (फीडर)' : 'ডাউনস্ট্রিম রিলে R2 (ফিডার)'}
          </span>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>TMS (R2):</span>
                <span className="font-mono text-cyan-300 font-bold">{tmsR2.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="0.5"
                step="0.01"
                value={tmsR2}
                onChange={(e) => setTmsR2(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Plug Setting:</span>
                <span className="font-mono text-cyan-300 font-bold">{pickupSettingR2 * 100}% ({ctRatioR2 * pickupSettingR2}A)</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2.0"
                step="0.1"
                value={pickupSettingR2}
                onChange={(e) => setPickupSettingR2(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>
          </div>
        </div>

        {/* Upstream Incomer Relay R1 Controls */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 border-l-4 border-l-amber-500">
          <span className="text-xs font-bold text-amber-400 block mb-2">
            {lang === 'en' ? 'Upstream Relay R1 (Incomer)' : lang === 'hi' ? 'अपस्ट्रीम रिले R1 (इनकमर)' : 'আপস্ট্রিম রিলে R1 (ইনকামার)'}
          </span>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>TMS (R1):</span>
                <span className="font-mono text-amber-300 font-bold">{tmsR1.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.8"
                step="0.01"
                value={tmsR1}
                onChange={(e) => setTmsR1(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs text-slate-300 mb-1">
                <span>Plug Setting:</span>
                <span className="font-mono text-amber-300 font-bold">{pickupSettingR1 * 100}% ({ctRatioR1 * pickupSettingR1}A)</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="2.5"
                step="0.1"
                value={pickupSettingR1}
                onChange={(e) => setPickupSettingR1(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Time-Current Characteristic (TCC) Plot */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
        <div className="flex flex-wrap justify-between items-center mb-3 gap-2">
          <span className="text-xs font-bold text-slate-200">
            {lang === 'en' ? 'Log-Log Time-Current Characteristic (TCC) Discrimination Curve' : lang === 'hi' ? 'लॉग-लॉग समय-धारा विशेषता (TCC) वक्र' : 'লগ-লগ টাইম-কারেন্ট বৈশিষ্ট্য (TCC) কার্ভ'}
          </span>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-3.5 h-1 bg-cyan-400 inline-block rounded"></span>
              R2 Downstream (Feeder)
            </span>
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-3.5 h-1 bg-amber-400 inline-block rounded"></span>
              R1 Upstream (Incomer)
            </span>
            <span className="flex items-center gap-1.5 text-rose-400">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block animate-ping"></span>
              Fault Point
            </span>
          </div>
        </div>

        <svg viewBox="0 0 500 180" className="w-full h-52 bg-slate-900 rounded-lg">
          {/* Grid lines */}
          <line x1="0" y1="45" x2="500" y2="45" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="0" y1="90" x2="500" y2="90" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="0" y1="135" x2="500" y2="135" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="125" y1="0" x2="125" y2="180" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="250" y1="0" x2="250" y2="180" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="375" y1="0" x2="375" y2="180" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />

          {/* Time Labels */}
          <text x="8" y="49" fill="#64748b" fontSize="8" fontMono="true">1.0 s</text>
          <text x="8" y="94" fill="#64748b" fontSize="8" fontMono="true">0.3 s</text>
          <text x="8" y="139" fill="#64748b" fontSize="8" fontMono="true">0.1 s</text>

          {/* Current Labels */}
          <text x="125" y="174" fill="#64748b" fontSize="8" textAnchor="middle" fontMono="true">1 kA</text>
          <text x="250" y="174" fill="#64748b" fontSize="8" textAnchor="middle" fontMono="true">3 kA</text>
          <text x="375" y="174" fill="#64748b" fontSize="8" textAnchor="middle" fontMono="true">8 kA</text>

          {/* Curves */}
          <path d={pathR1} fill="none" stroke="#f59e0b" strokeWidth="2.5" />
          <path d={pathR2} fill="none" stroke="#38bdf8" strokeWidth="2.5" />

          {/* Active Fault Line */}
          {faultX >= 0 && faultX <= 500 && (
            <line x1={faultX} y1="0" x2={faultX} y2="180" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4,4" />
          )}

          {/* Discrimination Margin Highlight at Fault */}
          {t1 !== null && t2 !== null && (
            <g transform={`translate(${faultX}, 0)`}>
              <line
                x1="0"
                y1={180 - ((Math.log10(t1) - Math.log10(0.04)) / (Math.log10(10) - Math.log10(0.04))) * 180}
                x2="0"
                y2={180 - ((Math.log10(t2) - Math.log10(0.04)) / (Math.log10(10) - Math.log10(0.04))) * 180}
                stroke={isCoordinated ? '#34d399' : '#f43f5e'}
                strokeWidth="4"
              />
              <circle
                cx="0"
                cy={180 - ((Math.log10(t2) - Math.log10(0.04)) / (Math.log10(10) - Math.log10(0.04))) * 180}
                r="4"
                fill="#38bdf8"
              />
              <circle
                cx="0"
                cy={180 - ((Math.log10(t1) - Math.log10(0.04)) / (Math.log10(10) - Math.log10(0.04))) * 180}
                r="4"
                fill="#f59e0b"
              />
            </g>
          )}
        </svg>
      </div>

      {/* Real-Time Coordination Assessment Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Downstream Relay R2 Time */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'R2 Feeder Trip Time (t2)' : lang === 'hi' ? 'R2 फीडर ट्रिप समय (t2)' : 'R2 ফিডার ট্রিপ সময় (t2)'}
          </span>
          <div className="text-xl font-bold font-mono text-cyan-400">
            {t2 !== null ? `${t2.toFixed(3)} s` : 'No Pickup'}
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            Primary isolation target
          </span>
        </div>

        {/* Upstream Relay R1 Time */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'R1 Incomer Trip Time (t1)' : lang === 'hi' ? 'R1 इनकमर ट्रिप समय (t1)' : 'R1 ইনকামার ট্রিপ সময় (t1)'}
          </span>
          <div className="text-xl font-bold font-mono text-amber-400">
            {t1 !== null ? `${t1.toFixed(3)} s` : 'No Pickup'}
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            Backup isolation target
          </span>
        </div>

        {/* Actual Grading Margin Δt */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Grading Margin (Δt = t1 - t2)' : lang === 'hi' ? 'ग्रेडिंग मार्जिन (Δt)' : 'গ্রেডিং মার্জিন (Δt)'}
          </span>
          <div className={`text-xl font-bold font-mono ${
            isCoordinated ? 'text-emerald-400' : isTooClose ? 'text-amber-400' : 'text-rose-400'
          }`}>
            {gradingMargin !== null ? `${gradingMargin.toFixed(3)} s` : 'N/A'}
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            Standard: 0.300 s – 0.400 s
          </span>
        </div>

        {/* Coordination Verdict */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Discrimination Verdict' : lang === 'hi' ? 'समन्वय परिणाम' : 'সমন্বয় ফলাফল'}
          </span>
          <div className="flex items-center gap-2 mt-1">
            {isCoordinated ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-emerald-400">
                  {lang === 'en' ? 'PERFECT SELECTIVITY' : lang === 'hi' ? 'उत्कृष्ट चयनात्मकता' : 'নিখুঁত সিলেক্টিভিটি'}
                </span>
              </>
            ) : isTooClose ? (
              <>
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs font-bold text-amber-400">
                  {lang === 'en' ? 'MARGIN TOO CLOSE' : lang === 'hi' ? 'मार्जिन अपर्याप्त' : 'মার্জিন অপ্রতুল'}
                </span>
              </>
            ) : (
              <>
                <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />
                <span className="text-xs font-bold text-rose-400">
                  {lang === 'en' ? 'SELECTIVITY VIOLATED' : lang === 'hi' ? 'समन्वय उल्लंघन' : 'সিলেক্টিভিটি লঙ্ঘিত'}
                </span>
              </>
            )}
          </div>
          <p className="text-[10px] text-slate-500 mt-1">
            {isCoordinated ? 'No nuisance upstream tripping' : 'Risk of tripping upstream transformer incomer!'}
          </p>
        </div>
      </div>

      {/* Engineering Grading Breakdown */}
      <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-amber-300">
            {lang === 'en' ? 'Grading Margin Components (0.3s Rule): ' : lang === 'hi' ? 'ग्रेडिंग मार्जिन के घटक (0.3s नियम): ' : 'গ্রেডিং মার্জিনের উপাদানসমূহ (০.৩ সেকেন্ড নিয়ম): '}
          </span>
          {lang === 'en' && 'The 0.3s margin between successive IDMT relays is derived from physical tolerances: (1) Circuit Breaker operating time: 80 ms (4-5 cycles); (2) Relay overshoot/inertia time: 50 ms; (3) CT ratio error and saturation allowance: 100 ms; (4) Safety engineering margin: 70 ms. Total Δt = 80 + 50 + 100 + 70 = 300 ms (0.3 seconds). With modern numerical relays, this can be safely compressed to 0.20s.'}
          {lang === 'hi' && 'क्रमिक आईडीएमटी रिले के बीच 0.3s मार्जिन भौतिक घटकों से आता है: (1) ब्रेकर ओपनिंग: 80ms; (2) रिले ओवरशूट: 50ms; (3) सीटी त्रुटि: 100ms; (4) सुरक्षा मार्जिन: 70ms। कुल = 300 ms। आधुनिक न्यूमेरिकल रिले में इसे 0.2s तक कम किया जा सकता है।'}
          {lang === 'bn' && 'ধারাবাহিক দুটি আইডিএমটি রিলের মধ্যে ০.৩ সেকেন্ড মার্জিন গঠিত হয়: (১) সার্কিট ব্রেকার খোলার সময়: ৮০ms; (২) রিলে ওভারশুট: ৫০ms; (৩) সিটি ত্রুটি ও স্যাচুরেশন: ১০০ms; (৪) সেফটি মার্জিন: ৭০ms। মোট = ৩০০ ms। আধুনিক নিউমেরিক্যাল রিলেতে এই সময় কমিয়ে ০.২ সেকেন্ড করা যায়।'}
        </div>
      </div>
    </div>
  );
};
