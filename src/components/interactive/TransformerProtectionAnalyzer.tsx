import React, { useState } from 'react';
import { Language } from '../../types';
import { Sliders, RotateCcw, ShieldCheck, Zap, AlertTriangle, CheckCircle2, Flame, HelpCircle, Activity } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const TransformerProtectionAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [eventScenario, setEventScenario] = useState<'normal' | 'inrush' | 'internal_fault' | 'external_fault' | 'overflux' | 'incipient_gas'>('inrush');
  const [harmonicThresholdPct, setHarmonicThresholdPct] = useState<number>(15); // 15% standard 2nd harmonic block threshold
  const [vfRatio, setVfRatio] = useState<number>(1.05); // V/f ratio in p.u.

  // Scenario profiles
  const scenarios = {
    normal: {
      name: { en: 'Normal Rated Load', hi: 'सामान्य रेटेड लोड', bn: 'স্বাভাবিক রেটেড লোড' },
      iFundamental: 1.0,
      i2ndHarmonicPct: 1.2,
      i5thHarmonicPct: 0.8,
      diffSpillPu: 0.03,
      refSpillPu: 0.01,
      buchholzGas: false,
      desc: {
        en: 'Healthy operating condition. Differential spill current is near zero; 2nd harmonic is negligible.',
        hi: 'स्वस्थ संचालन स्थिति। डिफरेंशियल करंट लगभग शून्य है; दूसरा हार्मोनिक नगण्य है।',
        bn: 'সুস্থ অপারেটিং অবস্থা। ডিফারেন্সিয়াল কারেন্ট প্রায় শূন্য এবং দ্বিতীয় হারমোনিক নগণ্য।'
      }
    },
    inrush: {
      name: { en: 'Cold Transformer Energization (Magnetizing Inrush)', hi: 'कोल्ड ट्रांसफार्मर इनरश करेंट', bn: 'কোল্ড ট্রান্সফরমার ম্যাগনেটাইজিং ইনরাশ' },
      iFundamental: 6.5,
      i2ndHarmonicPct: 28.5,
      i5thHarmonicPct: 4.2,
      diffSpillPu: 4.8,
      refSpillPu: 0.05,
      buchholzGas: false,
      desc: {
        en: 'Core saturation during energization creates massive unipolar current with 28.5% 2nd harmonic. Harmonic blocking prevents false trip!',
        hi: 'ट्रांसफार्मर चालू करते समय भारी इनरश करंट में 28.5% दूसरा हार्मोनिक होता है। हार्मोनिक ब्लॉकिंग गलत ट्रिप को रोकता है!',
        bn: 'ট্রান্সফরমার চালুর সময় বিশাল ইনরাশ কারেন্টে ২৮.৫% দ্বিতীয় হারমোনিক থাকে। হারমোনিক ব্লকিং ভুল ট্রিপ আটকায়!'
      }
    },
    internal_fault: {
      name: { en: 'Internal Phase-to-Earth Winding Fault', hi: 'आंतरिक फेज-टू-अर्थ वाइंडिंग फॉल्ट', bn: 'অভ্যন্তরীণ ফেজ-টু-আর্থ ওয়াইন্ডিং ফল্ট' },
      iFundamental: 9.2,
      i2ndHarmonicPct: 3.8,
      i5thHarmonicPct: 1.1,
      diffSpillPu: 8.5,
      refSpillPu: 7.9,
      buchholzGas: true,
      desc: {
        en: 'Catastrophic internal arc fault. Low 2nd harmonic (< 4%). Both 87T Differential and REF trip instantaneously in < 25 ms!',
        hi: 'आंतरिक वाइंडिंग फॉल्ट। दूसरा हार्मोनिक बहुत कम (< 4%) है। 87T एवं REF रिले 25ms में तुरंत ट्रिप करते हैं!',
        bn: 'মারাত্মক অভ্যন্তরীণ ওয়াইন্ডিং ফল্ট। ২য় হারমোনিক খুব কম (< ৪%)। 87T ও REF রিলে ২৫ মিলিসেকেন্ডে ট্রিপ করে!'
      }
    },
    external_fault: {
      name: { en: 'Heavy External Bus Fault (Through Fault)', hi: 'बाह्य बस फॉल्ट (थ्रू फॉल्ट)', bn: 'বহিরাগত বাস ফল্ট (থ্রু ফল্ট)' },
      iFundamental: 8.0,
      i2ndHarmonicPct: 2.5,
      i5thHarmonicPct: 1.5,
      diffSpillPu: 0.25,
      refSpillPu: 0.02,
      buchholzGas: false,
      desc: {
        en: 'Through-fault outside zone. Restraining current stabilizes the biased differential relay; zero REF spill current.',
        hi: 'बाहरी फॉल्ट। रीस्ट्रेनिंग करंट रिले को स्थिर रखता है; शून्य आरईएफ करंट।',
        bn: 'জোনের বাইরে ফল্ট। রিস্ট্রেনিং কারেন্ট রিলেকে স্থির রাখে; কোনো আরইএফ স্পিল নেই।'
      }
    },
    overflux: {
      name: { en: 'Overfluxing Condition (V/f Exceeded)', hi: 'ओवरफ्लक्सिंग स्थिति (V/f अधिक)', bn: 'ওভারফ্লাক্সিং অবস্থা (V/f সীমা অতিক্রম)' },
      iFundamental: 1.4,
      i2ndHarmonicPct: 5.0,
      i5thHarmonicPct: 34.0,
      diffSpillPu: 0.45,
      refSpillPu: 0.02,
      buchholzGas: false,
      desc: {
        en: 'Overvoltage or underfrequency causes excessive core magnetic flux density (B > 1.9T). Dominant 5th harmonic detected by ANSI 24 relay.',
        hi: 'अत्यधिक वोल्टेज या कम आवृत्ति से कोर फ्लक्स सीमा पार हो जाती है। 5वां हार्मोनिक हावी होता है जिसे रिले 24 डिटेक्ट करता है।',
        bn: 'অতিরিক্ত ভোল্টেজ বা কম ফ্রিকোয়েন্সির কারণে কোর ফ্লাক্স বেড়ে যায়। ৫ম হারমোনিক প্রাধান্য পায় যা ANSI 24 রিলে সনাক্ত করে।'
      }
    },
    incipient_gas: {
      name: { en: 'Incipient Internal Fault (Buchholz Gas Stage)', hi: 'धीमा आंतरिक दोष (बुखोल्ज़ गैस स्टेज)', bn: 'ধীর অভ্যন্তরীণ ত্রুটি (বুখলৎজ গ্যাস স্টেজ)' },
      iFundamental: 1.05,
      i2ndHarmonicPct: 1.5,
      i5thHarmonicPct: 0.9,
      diffSpillPu: 0.04,
      refSpillPu: 0.02,
      buchholzGas: true,
      desc: {
        en: 'Partial discharge and oil overheating creates hydrogen/methane gas bubbles accumulating in Buchholz relay float chamber. Alarm triggered!',
        hi: 'वाइंडिंग का धीमा डिस्चार्ज गैस बुलबुले बनाता है। बुखोल्ज़ रिले अलार्म ट्रिगर होता है!',
        bn: 'ধীরগতির স্পার্কিং বা তেলের অতিরিক্ত তাপে গ্যাস বুদবুদ সৃষ্টি হয় এবং বুখলৎজ রিলে অ্যালার্ম বাজায়!'
      }
    }
  };

  const currentScen = scenarios[eventScenario];

  // Protection Decisions
  const isInrushBlocked = currentScen.i2ndHarmonicPct > harmonicThresholdPct;
  const isDiffTripped = currentScen.diffSpillPu > 0.4 && !isInrushBlocked;
  const isRefTripped = currentScen.refSpillPu > 0.3;
  const isOverfluxAlarm = vfRatio > 1.10 || eventScenario === 'overflux';
  const isBuchholzTripped = currentScen.buchholzGas && eventScenario === 'internal_fault';
  const isBuchholzAlarm = currentScen.buchholzGas && eventScenario === 'incipient_gas';

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-indigo-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">
              {lang === 'en' && 'Transformer Multi-Function Protection & Inrush Analyzer'}
              {lang === 'hi' && 'ट्रांसफार्मर बहु-कार्य सुरक्षा एवं इनरश विश्लेषक'}
              {lang === 'bn' && 'ট্রান্সফরমার মাল্টি-ফাংশন প্রোটেকশন ও ইনরাশ অ্যানালাইজার'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'en' && 'Analyze 87T Differential, Restricted Earth Fault (REF), 2nd Harmonic Inrush Restraint, Buchholz Gas, and Overfluxing (24).'}
            {lang === 'hi' && '87T डिफरेंशियल, आरईएफ, द्वितीय हार्मोनिक इनरश अवरोध, बुखोल्ज़ गैस और ओवरफ्लक्सिंग का विश्लेषण करें।'}
            {lang === 'bn' && '87T ডিফারেন্সিয়াল, রেসট্রিক্টেড আর্থ ফল্ট (REF), ২য় হারমোনিক ইনরাশ রিস্ট্রেইন্ট, বুখলৎজ গ্যাস ও ওভারফ্লাক্সিং বিশ্লেষণ করুন।'}
          </p>
        </div>
        <button
          onClick={() => {
            setEventScenario('inrush');
            setHarmonicThresholdPct(15);
            setVfRatio(1.05);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'Reset Scenario' : lang === 'hi' ? 'रीसेट' : 'রিসেট'}</span>
        </button>
      </div>

      {/* Scenario Selector Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {Object.entries(scenarios).map(([key, data]) => (
          <button
            key={key}
            onClick={() => setEventScenario(key as any)}
            className={`p-3 rounded-lg text-left border transition-all ${
              eventScenario === key
                ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-lg'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-slate-200'
            }`}
          >
            <div className="text-xs font-bold truncate mb-1">{data.name[lang]}</div>
            <div className="text-[10px] text-slate-500 line-clamp-1">{data.desc[lang]}</div>
          </button>
        ))}
      </div>

      {/* Interactive Controls Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? '2nd Harmonic Inrush Blocking Threshold' : lang === 'hi' ? 'द्वितीय हार्मोनिक ब्लॉकिंग सीमा' : '২য় হারমোনিক ব্লকিং থ্রেশহোল্ড'}
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400">{harmonicThresholdPct}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="25"
            step="1"
            value={harmonicThresholdPct}
            onChange={(e) => setHarmonicThresholdPct(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>10% (Ultra-sensitive)</span>
            <span>15% (IEEE Standard)</span>
            <span>25% (Relaxed)</span>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Core Overexcitation (V/f Ratio)' : lang === 'hi' ? 'कोर ओवरएक्साइटेशन (V/f अनुपात)' : 'কোর ওভারএক্সাইটেশন (V/f অনুপাত)'}
            </span>
            <span className="text-xs font-mono font-bold text-amber-400">{vfRatio.toFixed(2)} p.u.</span>
          </div>
          <input
            type="range"
            min="0.95"
            max="1.30"
            step="0.01"
            value={vfRatio}
            onChange={(e) => setVfRatio(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>1.0 p.u. (Nominal)</span>
            <span>1.10 p.u. (Alarm Limit)</span>
            <span>1.25 p.u. (Trip Limit)</span>
          </div>
        </div>
      </div>

      {/* Real-Time FFT Harmonic Spectrum Display */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-slate-200">
            {lang === 'en' ? 'Digital Relay Fast Fourier Transform (FFT) Harmonic Spectrum' : lang === 'hi' ? 'डिजिटल रिले एफएफटी हार्मोनिक स्पेक्ट्रम' : 'ডিজিটাল রিলে এফএফটি হারমোনিক স্পেকট্রাম'}
          </span>
          <span className="text-xs font-mono text-cyan-400">
            2nd Harmonic Ratio: <strong className="text-white">{currentScen.i2ndHarmonicPct.toFixed(1)}%</strong>
          </span>
        </div>

        <svg viewBox="0 0 460 140" className="w-full h-40 bg-slate-900 rounded-lg">
          {/* Baseline */}
          <line x1="30" y1="110" x2="440" y2="110" stroke="#334155" strokeWidth="1.5" />

          {/* Bar 1: 50 Hz Fundamental (100% normalized) */}
          <rect x="70" y="20" width="45" height="90" rx="3" fill="#38bdf8" />
          <text x="92" y="125" fill="#94a3b8" fontSize="8" textAnchor="middle" fontMono="true">50 Hz (1st)</text>
          <text x="92" y="15" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">100%</text>

          {/* Bar 2: 100 Hz 2nd Harmonic (Magnetizing Inrush Signature) */}
          <rect
            x="170"
            y={110 - (currentScen.i2ndHarmonicPct / 40) * 90}
            width="45"
            height={(currentScen.i2ndHarmonicPct / 40) * 90}
            rx="3"
            fill={isInrushBlocked ? '#a855f7' : '#64748b'}
          />
          <text x="192" y="125" fill="#94a3b8" fontSize="8" textAnchor="middle" fontMono="true">100 Hz (2nd)</text>
          <text x="192" y={105 - (currentScen.i2ndHarmonicPct / 40) * 90} fill="#c084fc" fontSize="8" fontWeight="bold" textAnchor="middle">
            {currentScen.i2ndHarmonicPct.toFixed(1)}%
          </text>

          {/* Threshold Line for 2nd Harmonic */}
          <line
            x1="150"
            y1={110 - (harmonicThresholdPct / 40) * 90}
            x2="235"
            y2={110 - (harmonicThresholdPct / 40) * 90}
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="3,3"
          />
          <text x="240" y={113 - (harmonicThresholdPct / 40) * 90} fill="#f87171" fontSize="7" fontMono="true">
            Block Limit ({harmonicThresholdPct}%)
          </text>

          {/* Bar 3: 150 Hz 3rd Harmonic */}
          <rect x="270" y="100" width="45" height="10" rx="3" fill="#475569" />
          <text x="292" y="125" fill="#94a3b8" fontSize="8" textAnchor="middle" fontMono="true">150 Hz (3rd)</text>
          <text x="292" y="95" fill="#64748b" fontSize="8" textAnchor="middle">4.2%</text>

          {/* Bar 4: 250 Hz 5th Harmonic (Overfluxing Signature) */}
          <rect
            x="370"
            y={110 - (currentScen.i5thHarmonicPct / 40) * 90}
            width="45"
            height={(currentScen.i5thHarmonicPct / 40) * 90}
            rx="3"
            fill={currentScen.i5thHarmonicPct > 20 ? '#f59e0b' : '#475569'}
          />
          <text x="392" y="125" fill="#94a3b8" fontSize="8" textAnchor="middle" fontMono="true">250 Hz (5th)</text>
          <text x="392" y={105 - (currentScen.i5thHarmonicPct / 40) * 90} fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">
            {currentScen.i5thHarmonicPct.toFixed(1)}%
          </text>
        </svg>
      </div>

      {/* Relay Function Activation Board */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* 87T Transformer Differential */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">87T Differential</span>
            <span className={`w-2.5 h-2.5 rounded-full ${isDiffTripped ? 'bg-rose-500 animate-pulse' : 'bg-slate-700'}`}></span>
          </div>
          <div className={`text-base font-bold ${isDiffTripped ? 'text-rose-400' : 'text-slate-400'}`}>
            {isDiffTripped ? 'TRIP' : 'RESTRAINED'}
          </div>
          <span className="text-[10px] text-slate-500 block mt-1">
            Spill: {currentScen.diffSpillPu.toFixed(2)} p.u.
          </span>
        </div>

        {/* 2nd Harmonic Inrush Inhibit */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">2nd Harmonic Block</span>
            <span className={`w-2.5 h-2.5 rounded-full ${isInrushBlocked ? 'bg-purple-500 animate-pulse' : 'bg-slate-700'}`}></span>
          </div>
          <div className={`text-base font-bold ${isInrushBlocked ? 'text-purple-300' : 'text-slate-400'}`}>
            {isInrushBlocked ? 'BLOCKED (ACTIVE)' : 'INACTIVE'}
          </div>
          <span className="text-[10px] text-slate-500 block mt-1">
            Ratio: {currentScen.i2ndHarmonicPct.toFixed(1)}% &gt; {harmonicThresholdPct}%
          </span>
        </div>

        {/* Restricted Earth Fault (REF) */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">64R REF Protection</span>
            <span className={`w-2.5 h-2.5 rounded-full ${isRefTripped ? 'bg-rose-500 animate-pulse' : 'bg-slate-700'}`}></span>
          </div>
          <div className={`text-base font-bold ${isRefTripped ? 'text-rose-400' : 'text-slate-400'}`}>
            {isRefTripped ? 'HIGH-SPEED TRIP' : 'STANDBY'}
          </div>
          <span className="text-[10px] text-slate-500 block mt-1">
            Neutral Spill: {currentScen.refSpillPu.toFixed(2)} p.u.
          </span>
        </div>

        {/* Buchholz Gas Relay */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">Buchholz (Gas)</span>
            <span className={`w-2.5 h-2.5 rounded-full ${isBuchholzTripped ? 'bg-rose-500 animate-pulse' : isBuchholzAlarm ? 'bg-amber-500 animate-pulse' : 'bg-slate-700'}`}></span>
          </div>
          <div className={`text-base font-bold ${isBuchholzTripped ? 'text-rose-400' : isBuchholzAlarm ? 'text-amber-400' : 'text-slate-400'}`}>
            {isBuchholzTripped ? 'TRIP (Surge Oil)' : isBuchholzAlarm ? 'ALARM (Gas Gas)' : 'NORMAL'}
          </div>
          <span className="text-[10px] text-slate-500 block mt-1">
            Mechanical float chamber
          </span>
        </div>
      </div>

      {/* Engineering Insight */}
      <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
        <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-indigo-300">
            {lang === 'en' ? 'Engineering Coordination between 87T, REF and Buchholz: ' : lang === 'hi' ? '87T, REF एवं बुखोल्ज़ के बीच समन्वय: ' : '87T, REF ও বুখলৎজের মধ্যে সমন্বয়: '}
          </span>
          {lang === 'en' && 'Transformer Differential (87T) covers high-current phase-to-phase and three-phase faults, but loses sensitivity near the neutral point (where fault driving voltage approaches zero). Restricted Earth Fault (REF / 64R) uses a dedicated neutral CT and high-impedance relay to protect up to 95% of the winding against earth faults in < 20 ms. The Buchholz relay is the only device capable of detecting mechanical incipient faults (loose core bolts, partial discharges, oil decomposition) before an electrical flashover occurs.'}
          {lang === 'hi' && 'डिफरेंशियल (87T) फेज-टू-फेज दोषों को कवर करता है, लेकिन न्यूट्रल के पास संवेदनशीलता खो देता है। रेस्ट्रिक्टेड अर्थ फॉल्ट (REF) न्यूट्रल सीटी के साथ वाइंडिंग के 95% हिस्से की रक्षा करता है। बुखोल्ज़ रिले विद्युत फ्लैशओवर से पहले यांत्रिक दोषों को पकड़ने वाला एकमात्र उपकरण है।'}
          {lang === 'bn' && 'ডিফারেন্সিয়াল রিলে (87T) ফেজ-টু-ফেজ ফল্ট রক্ষা করলেও নিউট্রালের কাছাকাছি সংবেদনশীলতা হারায়। রেস্ট্রিক্টেড আর্থ ফল্ট (REF) একটি নিউট্রাল সিটির সাহায্যে ওয়াইন্ডিংয়ের ৯৫% আর্থ ফল্ট রক্ষা করে। আর বুখলৎজ রিলে মেকানিক্যাল ও তেলের অভ্যন্তরীণ গ্যাস সনাক্তকারী একমাত্র রিলে।'}
        </div>
      </div>
    </div>
  );
};
