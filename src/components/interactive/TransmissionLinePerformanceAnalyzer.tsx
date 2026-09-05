import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Gauge, Zap, TrendingUp, AlertTriangle, ToggleLeft, ToggleRight, Sliders } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const TransmissionLinePerformanceAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const idPrefix = useId();

  // Inputs
  const [lineLengthKm, setLineLengthKm] = useState<number>(300);       // km (long line to observe Ferranti)
  const [loadPercent, setLoadPercent] = useState<number>(10);          // % loading (0 = no-load, 100 = rated)
  const [pf, setPf] = useState<number>(0.90);                          // Power Factor
  const [pfType, setPfType] = useState<'lagging' | 'leading' | 'unity'>('lagging');
  const [shuntReactorEnabled, setShuntReactorEnabled] = useState<boolean>(false);
  const [reactorMvar, setReactorMvar] = useState<number>(60);          // MVAR

  // Rated line parameters (400 kV class)
  const vRatedKv = 400; // kV LL
  const pRatedMw = 600; // MW rated
  const vsKv = 400;     // Sending-end voltage held at 1.0 p.u.

  // Line distributed physics
  const lPerKm = 1.0e-3;   // 1.0 mH/km
  const cPerKm = 11.5e-9;  // 11.5 nF/km
  const rPerKm = 0.03;     // Ω/km
  const omega = 2 * Math.PI * 50;

  const beta = omega * Math.sqrt(lPerKm * cPerKm); // rad/km
  const zc = Math.sqrt(lPerKm / cPerKm);          // ~295 Ω surge impedance

  // Actual receiving power
  const prMw = (loadPercent / 100) * pRatedMw;
  const effectivePf = pfType === 'unity' ? 1.0 : pf;
  const phi = Math.acos(Math.min(1, Math.max(0, effectivePf)));
  const qrSign = pfType === 'lagging' ? 1 : pfType === 'leading' ? -1 : 0;
  const qrMvarLoad = prMw > 0 ? prMw * Math.tan(phi) * qrSign : 0;

  // Net reactive demand at receiving bus (after shunt reactor if enabled)
  const qrMvarNet = qrMvarLoad + (shuntReactorEnabled ? reactorMvar : 0);

  // Receiving voltage estimation using hyperbolic line equations:
  // At no-load without reactor: V_R_NL = V_S / cos(beta * l)
  const betaL = beta * lineLengthKm;
  const ferrantiFactor = 1 / Math.cos(betaL);
  const vrNoLoadUncompensated = vsKv * ferrantiFactor;

  // Voltage drop with load: ΔV ≈ (P·R + Q·X) / V_R
  const xTotal = omega * lPerKm * lineLengthKm;
  const rTotal = rPerKm * lineLengthKm;

  // With reactor compensation effect
  const compensationOffsetKv = shuntReactorEnabled ? (reactorMvar * xTotal) / vsKv : 0;

  // Actual Receiving Voltage
  let vrKvActual = vsKv * ferrantiFactor - (prMw * rTotal + qrMvarNet * xTotal) / vsKv;
  vrKvActual = Math.max(250, Math.min(550, vrKvActual));

  const vrPu = vrKvActual / vRatedKv;
  const vRegulationPercent = ((vsKv - vrKvActual) / vrKvActual) * 100;

  // Power loss & efficiency
  const irAmp = prMw > 0 ? (prMw * 1e6) / (Math.sqrt(3) * (vrKvActual * 1000) * effectivePf) : 0;
  const pLossMw = (3 * Math.pow(irAmp, 2) * rTotal) / 1e6;
  const psMw = prMw + pLossMw;
  const efficiency = prMw > 0 ? Math.min(100, Math.max(0, (prMw / psMw) * 100)) : 0;

  // Ferranti alert
  const isFerrantiActive = vrKvActual > vsKv;

  const t = {
    en: {
      title: 'Transmission-Line Performance, Regulation & Ferranti Analyzer',
      subtitle: 'Simulate light-load overvoltages, power factor regulation swings, and inductive shunt compensation',
      controlsTitle: 'Line Loading & Compensation Controls',
      lineLenLabel: 'Line Length (km):',
      loadingLabel: 'Line Loading (% of 600 MW Rated):',
      pfLabel: 'Operating Power Factor:',
      pfTypeLabel: 'Power Factor Characteristic:',
      lagging: 'Lagging (Inductive)',
      leading: 'Leading (Capacitive)',
      unity: 'Unity (1.0)',
      reactorToggle: 'Receiving-End Shunt Reactor Compensation:',
      reactorMvarLabel: 'Reactor Rating (MVAR):',
      resultsTitle: 'Performance & Voltage Quality Metrics',
      vrLabel: 'Receiving-End Voltage (V_R):',
      vRegLabel: 'Voltage Regulation (VR%):',
      effLabel: 'Transmission Efficiency (η%):',
      pLossLabel: 'Total Series Conductor Losses:',
      ferrantiWarningTitle: 'Ferranti Effect Detected!',
      ferrantiWarningText: 'Receiving voltage exceeds sending-end voltage due to line-charging capacitance flowing through series line inductance at light loading.',
      compensatedText: 'Shunt reactor absorbs excess capacitive charging VARs, restoring receiving-end voltage to safe nominal limits.'
    },
    hi: {
      title: 'पारेषण लाइन कार्यप्रदर्शन, नियमन एवं फेरांटी विश्लेषक',
      subtitle: 'हल्के लोड पर ओवरवोल्टेज, पावर फैक्टर प्रभाव एवं शंट रिएक्टर क्षतिपूर्ति का अनुकरण करें',
      controlsTitle: 'लाइन लोडिंग एवं क्षतिपूर्ति नियंत्रण',
      lineLenLabel: 'लाइन की लंबाई (किमी):',
      loadingLabel: 'लाइन लोडिंग (600 MW रेटेड का %):',
      pfLabel: 'ऑपरेटिंग पावर फैक्टर:',
      pfTypeLabel: 'पावर फैक्टर विशेषता:',
      lagging: 'लैगिंग (प्रेरणिक)',
      leading: 'लीडिंग (धारिता)',
      unity: 'यूनिटी (1.0)',
      reactorToggle: 'शंट रिएक्टर कम्पेन्सेशन चालू/बंद:',
      reactorMvarLabel: 'रिएक्टर रेटिंग (MVAR):',
      resultsTitle: 'कार्यप्रदर्शन एवं वोल्टेज गुणवत्ता मेट्रिक्स',
      vrLabel: 'प्राप्तिकर्ता सिरा वोल्टेज (V_R):',
      vRegLabel: 'वोल्टेज नियमन (VR%):',
      effLabel: 'पारेषण दक्षता (η%):',
      pLossLabel: 'कुल सीरीज कंडक्टर हानियाँ:',
      ferrantiWarningTitle: 'फेरांटी प्रभाव (Ferranti Effect) सक्रिय!',
      ferrantiWarningText: 'हल्के लोड पर लाइन की चार्जिंग धारिता के कारण प्राप्तिकर्ता सिरे का वोल्टेज प्रेषण सिरे से अधिक हो गया है।',
      compensatedText: 'शंट रिएक्टर अतिरिक्त कैपेसिटिव VARs को अवशोषित करके वोल्टेज को सामान्य सीमा में बनाए रखता है।'
    },
    bn: {
      title: 'ট্রান্সমিশন লাইন কর্মক্ষমতা, রেগুলেশন ও ফেরান্টি অ্যানালাইজার',
      subtitle: 'হালকা লোডে অতিরিক্ত ভোল্টেজ বৃদ্ধি (ফেরান্টি প্রভাব) ও শান্ট রিঅ্যাক্টর ক্ষতিপূরণ বিশ্লেষণ করুন',
      controlsTitle: 'লাইন লোডিং ও কমপেনসেশন নিয়ন্ত্রণ',
      lineLenLabel: 'লাইনের দৈর্ঘ্য (কিমি):',
      loadingLabel: 'লাইন লোডিং (৬০০ MW রেটেডের %):',
      pfLabel: 'অপারেটিং পাওয়ার ফ্যাক্টর:',
      pfTypeLabel: 'পাওয়ার ফ্যাক্টর বৈশিষ্ট্য:',
      lagging: 'ল্যাগিং (ইনডাক্টিভ)',
      leading: 'লিডিং (ক্যাপাসিটিভ)',
      unity: 'ইউনিটি (১.০)',
      reactorToggle: 'শান্ট রিঅ্যাক্টর ক্ষতিপূরণ চালু/বন্ধ:',
      reactorMvarLabel: 'রিঅ্যাক্টর রেটিং (MVAR):',
      resultsTitle: 'কর্মক্ষমতা ও ভোল্টেজ গুণমান ফলাফল',
      vrLabel: 'রিসিভিং-এন্ড ভোল্টেজ (V_R):',
      vRegLabel: 'ভোল্টেজ রেগুলেশন (VR%):',
      effLabel: 'ট্রান্সমিশন দক্ষতা (η%):',
      pLossLabel: 'মোট কন্ডাক্টর পাওয়ার লস:',
      ferrantiWarningTitle: 'ফেরান্টি ইফেক্ট ধরা পড়েছে!',
      ferrantiWarningText: 'হালকা লোডে লাইনের চার্জিং ক্যাপাসিট্যান্সের কারণে রিসিভিং-এন্ড ভোল্টেজ সেন্ডিং ভোল্টেজকেও ছাড়িয়ে গেছে।',
      compensatedText: 'শান্ট রিঅ্যাক্টর অতিরিক্ত চার্জিং VAR গ্রহণ করে ভোল্টেজ নিরাপদ স্তরে নিয়ন্ত্রণ করে।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-rose-400" />
            <h3 className="text-xl font-bold text-rose-400">{t.title}</h3>
          </div>
          <p className="text-sm text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <span className="px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/30 rounded-full text-xs font-mono font-semibold">
          Grid Stability & Ferranti
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Controls */}
        <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-4">
          <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5" /> {t.controlsTitle}
          </h4>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-len`}>{t.lineLenLabel}</label>
              <span className="font-mono text-sky-400 font-bold">{lineLengthKm} km</span>
            </div>
            <input
              id={`${idPrefix}-len`}
              type="range"
              min="80"
              max="500"
              step="10"
              value={lineLengthKm}
              onChange={(e) => setLineLengthKm(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1">
              <label htmlFor={`${idPrefix}-loading`}>{t.loadingLabel}</label>
              <span className="font-mono text-rose-400 font-bold">{loadPercent}% ({prMw.toFixed(0)} MW)</span>
            </div>
            <input
              id={`${idPrefix}-loading`}
              type="range"
              min="0"
              max="120"
              step="5"
              value={loadPercent}
              onChange={(e) => setLoadPercent(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-400"
            />
          </div>

          {/* PF Controls */}
          <div>
            <label className="block text-xs text-slate-400 mb-1.5">{t.pfTypeLabel}</label>
            <div className="grid grid-cols-3 gap-2 mb-2">
              {(['lagging', 'unity', 'leading'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setPfType(type)}
                  className={`py-1.5 text-xs font-semibold rounded ${
                    pfType === type
                      ? 'bg-rose-600 text-white shadow'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {t[type]}
                </button>
              ))}
            </div>

            {pfType !== 'unity' && (
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <label htmlFor={`${idPrefix}-pfval`}>{t.pfLabel}</label>
                  <span className="font-mono text-amber-400 font-bold">{pf.toFixed(2)}</span>
                </div>
                <input
                  id={`${idPrefix}-pfval`}
                  type="range"
                  min="0.70"
                  max="0.99"
                  step="0.01"
                  value={pf}
                  onChange={(e) => setPf(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>
            )}
          </div>

          {/* Shunt Reactor Toggle */}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300 font-semibold">{t.reactorToggle}</span>
              <button
                type="button"
                onClick={() => setShuntReactorEnabled(!shuntReactorEnabled)}
                className={`flex items-center gap-1 px-3 py-1 rounded text-xs font-bold transition-all ${
                  shuntReactorEnabled
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {shuntReactorEnabled ? 'Compensated' : 'Offline'}
              </button>
            </div>

            {shuntReactorEnabled && (
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <label htmlFor={`${idPrefix}-reactormvar`}>{t.reactorMvarLabel}</label>
                  <span className="font-mono text-emerald-400 font-bold">{reactorMvar} MVAR</span>
                </div>
                <input
                  id={`${idPrefix}-reactormvar`}
                  type="range"
                  min="20"
                  max="120"
                  step="10"
                  value={reactorMvar}
                  onChange={(e) => setReactorMvar(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right: Results & Diagram */}
        <div className="space-y-4">
          {/* Ferranti Alert Banner */}
          {isFerrantiActive ? (
            <div className="bg-amber-950/40 border border-amber-500/40 rounded-xl p-3.5 text-xs text-amber-200 flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-amber-300">{t.ferrantiWarningTitle}</div>
                <p className="mt-1 text-slate-300 leading-relaxed">
                  {t.ferrantiWarningText}
                </p>
                {!shuntReactorEnabled && (
                  <p className="mt-1.5 text-emerald-400 font-medium">
                    Tip: Enable Shunt Reactor compensation to suppress this overvoltage.
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-3 text-xs text-emerald-200">
              {shuntReactorEnabled ? t.compensatedText : 'Voltage is within safe operational limits.'}
            </div>
          )}

          {/* Voltage Profile SVG Display */}
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
            <div className="text-xs font-semibold text-slate-400 mb-2">
              Voltage Profile Along Transmission Line (kV)
            </div>
            <svg viewBox="0 0 360 110" className="w-full h-24">
              {/* Reference Grid lines */}
              <line x1="40" y1="20" x2="330" y2="20" stroke="#334155" strokeDasharray="2,2" />
              <line x1="40" y1="55" x2="330" y2="55" stroke="#334155" strokeDasharray="2,2" />
              <line x1="40" y1="90" x2="330" y2="90" stroke="#334155" strokeDasharray="2,2" />

              <text x="35" y="23" fill="#64748b" fontSize="6.5" textAnchor="end">440kV</text>
              <text x="35" y="58" fill="#64748b" fontSize="6.5" textAnchor="end">400kV</text>
              <text x="35" y="93" fill="#64748b" fontSize="6.5" textAnchor="end">360kV</text>

              {/* Voltage line from Sending (x=40, y=55) to Receiving (x=330, y mapped) */}
              {/* y-mapping: 400kV -> y=55; 440kV -> y=20 (1kV = -0.875 px) */}
              {(() => {
                const yr = 55 - (vrKvActual - 400) * 0.875;
                const clampedYr = Math.max(10, Math.min(100, yr));
                return (
                  <>
                    <path
                      d={`M 40 55 Q 185 ${55 - (vrKvActual > vsKv ? (vrKvActual - vsKv) * 0.5 : 0)} 330 ${clampedYr}`}
                      fill="none"
                      stroke={vrKvActual > 420 ? '#f59e0b' : vrKvActual < 380 ? '#f43f5e' : '#10b981'}
                      strokeWidth="2.5"
                    />
                    <circle cx="40" cy="55" r="4" fill="#38bdf8" />
                    <circle cx="330" cy={clampedYr} r="4" fill="#f59e0b" />
                    <text x="40" y="70" fill="#38bdf8" fontSize="7" fontWeight="bold">Vs = 400kV</text>
                    <text x="330" y={clampedYr - 8} fill="#f59e0b" fontSize="7" fontWeight="bold" textAnchor="end">
                      Vr = {vrKvActual.toFixed(1)}kV
                    </text>
                  </>
                );
              })()}
            </svg>
          </div>

          {/* Performance Metrics Card */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5" /> {t.resultsTitle}
            </h4>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.vrLabel}</span>
              <span className="font-mono text-amber-300 font-bold text-sm">
                {vrKvActual.toFixed(2)} kV ({vrPu.toFixed(3)} p.u.)
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.vRegLabel}</span>
              <span className={`font-mono font-bold text-sm ${Math.abs(vRegulationPercent) < 5 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {vRegulationPercent.toFixed(2)}% {vRegulationPercent < 0 ? '(Negative = Overvoltage)' : ''}
              </span>
            </div>

            <div className="flex justify-between py-1 border-b border-slate-800">
              <span className="text-slate-400">{t.pLossLabel}</span>
              <span className="font-mono text-orange-400 font-bold">{pLossMw.toFixed(2)} MW</span>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-slate-400">{t.effLabel}</span>
              <span className="font-mono text-emerald-400 font-bold text-base">
                {prMw > 0 ? `${efficiency.toFixed(2)}%` : 'N/A (No Load)'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
