import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Network, Zap, Activity, Sliders, ArrowRight, Gauge, Info } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const PowerFlowPVQAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const idPrefix = useId();

  // Inputs
  const [v1Mag, setV1Mag] = useState<number>(1.05);       // p.u. (Bus 1 voltage)
  const [v2Mag, setV2Mag] = useState<number>(0.98);       // p.u. (Bus 2 voltage)
  const [deltaDeg, setDeltaDeg] = useState<number>(18);   // degrees (δ1 - δ2)
  const [lineX, setLineX] = useState<number>(0.20);       // p.u. reactance

  // Angle in radians
  const deltaRad = (deltaDeg * Math.PI) / 180;

  // Power flow equations (lossless line assumption R = 0):
  // P12 = (|V1| * |V2| / X) * sin(delta)
  // Q12 = (|V1|^2 / X) - (|V1| * |V2| / X) * cos(delta)
  // P21 = -P12
  // Q21 = (|V2|^2 / X) - (|V1| * |V2| / X) * cos(delta)
  const pMax = (v1Mag * v2Mag) / (lineX || 0.01);
  const p12 = pMax * Math.sin(deltaRad);
  const q12 = (Math.pow(v1Mag, 2) / lineX) - pMax * Math.cos(deltaRad);
  const q21 = (Math.pow(v2Mag, 2) / lineX) - pMax * Math.cos(deltaRad);

  // Approximate Decoupled Sensitivities:
  // dP / d(delta) ≈ |V1||V2|/X * cos(delta)
  // dQ / d|V| ≈ (2|V| - |V2|cos(delta)) / X
  const dP_dDelta = pMax * Math.cos(deltaRad);
  const dQ_dV = (2 * v1Mag - v2Mag * Math.cos(deltaRad)) / lineX;

  const t = {
    en: {
      title: 'Power Flow: P–Q–V–δ Relationship & Bus Decoupling Engine',
      subtitle: 'Understand why Active Power couples to Phase Angle (P–δ) while Reactive Power couples to Voltage Magnitude (Q–V)',
      controlsTitle: 'Two-Bus Transmission Link Parameters',
      v1Label: 'Bus 1 Voltage Magnitude (|V1|):',
      v2Label: 'Bus 2 Voltage Magnitude (|V2|):',
      deltaLabel: 'Power Angle Difference (δ = δ1 - δ2):',
      xLabel: 'Line Series Reactance (X_12):',
      transferTitle: 'Power Transfer Capabilities',
      pMaxLabel: 'Steady-State Stability Limit (P_max):',
      p12Label: 'Active Power Transferred (P12):',
      q12Label: 'Reactive Power Sent from Bus 1 (Q12):',
      q21Label: 'Reactive Power Received at Bus 2 (-Q21):',
      decoupledTitle: 'Decoupled Power Flow Principles',
      decoupledP: 'P–δ Strong Coupling: Real power transfer depends primarily on angle difference sin(δ).',
      decoupledQ: 'Q–V Strong Coupling: Reactive power flows from the higher voltage bus to the lower voltage bus.',
      busTypesTitle: 'Power System Bus Classification Types',
      slackBus: 'Slack / Swing Bus: |V| and δ are fixed as grid reference. P and Q absorb grid imbalances.',
      pvBus: 'PV / Generator Bus: Active power P and |V| are scheduled via governor and AVR.',
      pqBus: 'PQ / Load Bus: Active and reactive consumer demands (P, Q) are fixed; |V| and δ vary.'
    },
    hi: {
      title: 'शक्ति प्रवाह: P–Q–V–δ संबंध एवं बस डिकपलिंग इंजन',
      subtitle: 'समझें कि सक्रिय शक्ति फेज कोण (P–δ) से और प्रतिघाती शक्ति वोल्टेज परिमाण (Q–V) से क्यों जुड़ी होती है',
      controlsTitle: 'टू-बस पारेषण लिंक पैरामीटर',
      v1Label: 'बस 1 वोल्टेज परिमाण (|V1|):',
      v2Label: 'बस 2 वोल्टेज परिमाण (|V2|):',
      deltaLabel: 'पावर कोण अंतर (δ = δ1 - δ2):',
      xLabel: 'लाइन सीरीज प्रतिघात (X_12):',
      transferTitle: 'शक्ति अंतरण क्षमता एवं प्रवाह',
      pMaxLabel: 'स्थिर-अवस्था स्थिरता सीमा (P_max):',
      p12Label: 'प्रेषित सक्रिय शक्ति (P12):',
      q12Label: 'बस 1 से प्रेषित प्रतिघाती शक्ति (Q12):',
      q21Label: 'बस 2 पर प्राप्त प्रतिघाती शक्ति (-Q21):',
      decoupledTitle: 'डिकपल्ड पावर फ्लो सिद्धांत',
      decoupledP: 'P–δ मजबूत युग्मन: वास्तविक शक्ति प्रवाह मुख्य रूप से कोण अंतर sin(δ) पर निर्भर करता है।',
      decoupledQ: 'Q–V मजबूत युग्मन: प्रतिघाती शक्ति उच्च वोल्टेज बस से निम्न वोल्टेज बस की ओर बहती है।',
      busTypesTitle: 'पावर सिस्टम बस वर्गीकरण',
      slackBus: 'स्लैक / स्विंग बस: |V| और δ संदर्भ के रूप में तय होते हैं। P और Q असंतुलन को सोखते हैं।',
      pvBus: 'PV / जनरेटर बस: सक्रिय शक्ति P और |V| गवर्नर और AVR द्वारा नियंत्रित होते हैं।',
      pqBus: 'PQ / लोड बस: उपभोक्ता मांग (P, Q) निश्चित होती है; |V| और δ की गणना की जाती है।'
    },
    bn: {
      title: 'পাওয়ার ফ্লো: P–Q–V–δ সম্পর্ক ও বাস ডিকপলিং ইঞ্জিন',
      subtitle: 'অ্যাক্টিভ পাওয়ার কেন ফেজ কোণ (P–δ) এবং রিঅ্যাক্টিভ পাওয়ার কেন ভোল্টেজ মান (Q–V) দ্বারা নিয়ন্ত্রিত হয় তা জানুন',
      controlsTitle: 'টু-বাস ট্রান্সমিশন লিংক প্যারামিটার',
      v1Label: 'বাস ১ ভোল্টেজ মান (|V1|):',
      v2Label: 'বাস ২ ভোল্টেজ মান (|V2|):',
      deltaLabel: 'পাওয়ার অ্যাঙ্গেল পার্থক্য (δ = δ1 - δ2):',
      xLabel: 'লাইন সিরিজ রিঅ্যাক্ট্যান্স (X_12):',
      transferTitle: 'পাওয়ার ট্রান্সফার ক্ষমতা ও প্রবাহ',
      pMaxLabel: 'স্টেডি-স্টেট স্ট্যাবিলিটি সীমা (P_max):',
      p12Label: 'স্থানান্তরিত সক্রিয় শক্তি (P12):',
      q12Label: 'বাস ১ থেকে প্রেরিত রিঅ্যাক্টিভ শক্তি (Q12):',
      q21Label: 'বাস ২ তে গৃহীত রিঅ্যাক্টিভ শক্তি (-Q21):',
      decoupledTitle: 'ডিকপল্ড পাওয়ার ফ্লো মূলনীতি',
      decoupledP: 'P–δ দৃঢ় বন্ধন: রিয়েল পাওয়ার প্রবাহ মূলত ফেজ কোণ পার্থক্য sin(δ) এর ওপর নির্ভর করে।',
      decoupledQ: 'Q–V দৃঢ় বন্ধন: রিঅ্যাক্টিভ পাওয়ার উচ্চ ভোল্টেজ বাস থেকে নিম্ন ভোল্টেজ বাসে প্রবাহিত হয়।',
      busTypesTitle: 'পাওয়ার সিস্টেম বাস শ্রেণিবিন্যাস',
      slackBus: 'স্ল্যাক / সুইং বাস: |V| ও δ স্থির রেফারেন্স। P ও Q গ্রিড ভারসাম্য রক্ষা করে।',
      pvBus: 'PV / জেনারেটর বাস: অ্যাক্টিভ পাওয়ার P ও |V| পূর্বনির্ধারিত; Q ও δ নির্ণয় করা হয়।',
      pqBus: 'PQ / লোড বাস: গ্রাহক চাহিদা (P, Q) নির্দিষ্ট; |V| ও δ গণনা করা হয়।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Network className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-bold text-purple-400">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-full text-xs font-mono font-semibold">
          P-δ & Q-V Decoupling
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Sliders */}
        <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-4">
          <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" /> {t.controlsTitle}
          </h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-v1`}>{t.v1Label}</label>
              <span className="font-mono text-sky-400 font-bold">{v1Mag.toFixed(2)} p.u.</span>
            </div>
            <input
              id={`${idPrefix}-v1`}
              type="range"
              min="0.90"
              max="1.15"
              step="0.01"
              value={v1Mag}
              onChange={(e) => setV1Mag(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-v2`}>{t.v2Label}</label>
              <span className="font-mono text-amber-400 font-bold">{v2Mag.toFixed(2)} p.u.</span>
            </div>
            <input
              id={`${idPrefix}-v2`}
              type="range"
              min="0.85"
              max="1.15"
              step="0.01"
              value={v2Mag}
              onChange={(e) => setV2Mag(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-delta`}>{t.deltaLabel}</label>
              <span className="font-mono text-purple-400 font-bold">{deltaDeg}° ({deltaRad.toFixed(3)} rad)</span>
            </div>
            <input
              id={`${idPrefix}-delta`}
              type="range"
              min="-60"
              max="60"
              step="1"
              value={deltaDeg}
              onChange={(e) => setDeltaDeg(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-linex`}>{t.xLabel}</label>
              <span className="font-mono text-emerald-400 font-bold">j{lineX.toFixed(2)} p.u.</span>
            </div>
            <input
              id={`${idPrefix}-linex`}
              type="range"
              min="0.05"
              max="0.50"
              step="0.01"
              value={lineX}
              onChange={(e) => setLineX(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>

          {/* Decoupling Insights */}
          <div className="p-3 bg-slate-900 border border-slate-800 rounded text-xs space-y-1.5">
            <div className="text-purple-300 font-semibold flex items-center gap-1">
              <Info className="w-3.5 h-3.5" /> {t.decoupledTitle}
            </div>
            <p className="text-slate-300">• {t.decoupledP}</p>
            <p className="text-slate-300">• {t.decoupledQ}</p>
          </div>
        </div>

        {/* Right: Transfer Results & Visual Power Angle Curve */}
        <div className="space-y-4">
          {/* Power Angle Curve SVG */}
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <div className="text-xs font-semibold text-slate-400 mb-1 flex justify-between">
              <span>P–δ Power-Angle Operating Curve</span>
              <span className="font-mono text-purple-400 font-bold">P = {p12.toFixed(2)} p.u.</span>
            </div>
            <svg viewBox="0 0 340 100" className="w-full h-24">
              {/* Axes */}
              <line x1="20" y1="50" x2="320" y2="50" stroke="#475569" strokeWidth="1" />
              <line x1="170" y1="10" x2="170" y2="90" stroke="#475569" strokeWidth="1" />
              <text x="315" y="62" fill="#64748b" fontSize="6.5">δ</text>
              <text x="175" y="16" fill="#64748b" fontSize="6.5">P</text>

              {/* Sine Curve: from -90° (x=50) to +90° (x=290). deltaDeg=-60 to +60 */}
              {/* Center is x=170 (0°), y=50. Max P (90°) at x=290, y=15. Min P (-90°) at x=50, y=85 */}
              <path
                d="M 50 85 Q 110 85 170 50 Q 230 15 290 15"
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
              />

              {/* Current operating point marker */}
              {(() => {
                // map deltaDeg from -90 to +90 -> x from 50 to 290 (1.33 px per deg)
                const opX = 170 + (deltaDeg / 90) * 120;
                // map p12 / pMax -> y = 50 - (p12/pMax)*35
                const opY = 50 - (Math.sin(deltaRad)) * 35;
                return (
                  <>
                    <circle cx={opX} cy={opY} r="4" fill="#ec4899" />
                    <line x1={opX} y1="50" x2={opX} y2={opY} stroke="#ec4899" strokeWidth="1" strokeDasharray="2,2" />
                    <text x={opX + 5} y={opY - 4} fill="#f472b6" fontSize="7" fontWeight="bold">
                      ({deltaDeg}°, {p12.toFixed(2)} pu)
                    </text>
                  </>
                );
              })()}
            </svg>
          </div>

          {/* Results Card */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-4 rounded-xl border border-purple-500/30 space-y-2 text-xs">
            <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5" /> {t.transferTitle}
            </h4>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.pMaxLabel}</span>
              <span className="font-mono text-purple-300 font-bold">{pMax.toFixed(3)} p.u.</span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.p12Label}</span>
              <span className="font-mono text-emerald-400 font-bold text-sm">
                {p12.toFixed(3)} p.u. ({(p12 * 100).toFixed(1)} MW)
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.q12Label}</span>
              <span className="font-mono text-sky-300 font-bold">
                {q12.toFixed(3)} p.u. ({(q12 * 100).toFixed(1)} MVAR)
              </span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-slate-400">{t.q21Label}</span>
              <span className="font-mono text-amber-300 font-bold">
                {(-q21).toFixed(3)} p.u. ({((-q21) * 100).toFixed(1)} MVAR)
              </span>
            </div>
          </div>

          {/* Bus Classification Card */}
          <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 text-xs space-y-1">
            <div className="font-semibold text-slate-300 mb-1">{t.busTypesTitle}</div>
            <p className="text-slate-400"><strong className="text-sky-400">1.</strong> {t.slackBus}</p>
            <p className="text-slate-400"><strong className="text-amber-400">2.</strong> {t.pvBus}</p>
            <p className="text-slate-400"><strong className="text-pink-400">3.</strong> {t.pqBus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
