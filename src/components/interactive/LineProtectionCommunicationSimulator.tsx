import React, { useState } from 'react';
import { Language } from '../../types';
import { Sliders, RotateCcw, ShieldCheck, Zap, Radio, CheckCircle2, AlertTriangle, Info, ArrowRightLeft } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const LineProtectionCommunicationSimulator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [scheme, setScheme] = useState<'POTT' | 'PUTT' | 'DCB' | '87L' | 'None'>('POTT');
  const [faultLocationPct, setFaultLocationPct] = useState<number>(88); // 88% is near Substation B (End Zone for Substation A!)
  const [channelStatus, setChannelStatus] = useState<'healthy' | 'failed' | 'high_latency'>('healthy');

  // Transmission line distance boundaries:
  // End A Zone 1: 0% to 80% (Local Z1)
  // End A Zone 2: 0% to 120% (Local Z2, covers 80% to 100% with delay)
  // End B Zone 1: 20% to 100% (reverse perspective, i.e., 80% reach from B)
  // End B Zone 2: 0% to 100%

  const isLocalZ1A = faultLocationPct <= 80;
  const isLocalZ1B = faultLocationPct >= 20;

  // Channel latency
  const channelLatencyMs = channelStatus === 'healthy' ? 6 : channelStatus === 'high_latency' ? 45 : 9999;

  // Tripping Times calculation
  let tripTimeA = 350; // default Zone 2 stepped
  let tripTimeB = 350; // default Zone 2 stepped
  let mechanismA = 'Zone 2 Stepped Time Delay';
  let mechanismB = 'Zone 2 Stepped Time Delay';

  if (scheme === 'None' || channelStatus === 'failed') {
    // Stepped distance only
    tripTimeA = isLocalZ1A ? 20 : 350;
    tripTimeB = isLocalZ1B ? 20 : 350;
    mechanismA = isLocalZ1A ? 'Zone 1 Direct Instantaneous' : 'Zone 2 Stepped Delay (Fallback)';
    mechanismB = isLocalZ1B ? 'Zone 1 Direct Instantaneous' : 'Zone 2 Stepped Delay (Fallback)';
  } else if (scheme === '87L') {
    // Line Current Differential via OPGW Fiber
    tripTimeA = 15 + channelLatencyMs;
    tripTimeB = 15 + channelLatencyMs;
    mechanismA = '87L Optical Current Differential';
    mechanismB = '87L Optical Current Differential';
  } else if (scheme === 'POTT') {
    // Permissive Overreaching Transfer Trip
    // Both ends detect forward fault in overreaching Zone 2, exchange permissive signals
    const forwardA = faultLocationPct <= 120;
    const forwardB = faultLocationPct >= 0;
    if (forwardA && forwardB) {
      tripTimeA = Math.min(isLocalZ1A ? 20 : (20 + channelLatencyMs), 350);
      tripTimeB = Math.min(isLocalZ1B ? 20 : (20 + channelLatencyMs), 350);
      mechanismA = isLocalZ1A ? 'Zone 1 Direct' : 'POTT Permissive Carrier Accelerated';
      mechanismB = isLocalZ1B ? 'Zone 1 Direct' : 'POTT Permissive Carrier Accelerated';
    }
  } else if (scheme === 'PUTT') {
    // Permissive Underreaching Transfer Trip
    // End seeing Zone 1 sends permissive signal to accelerate opposite end
    const permFromA = isLocalZ1A;
    const permFromB = isLocalZ1B;
    tripTimeA = isLocalZ1A ? 20 : (permFromB ? 20 + channelLatencyMs : 350);
    tripTimeB = isLocalZ1B ? 20 : (permFromA ? 20 + channelLatencyMs : 350);
    mechanismA = isLocalZ1A ? 'Zone 1 Direct' : (permFromB ? 'PUTT Accelerated Trip' : 'Zone 2 Stepped');
    mechanismB = isLocalZ1B ? 'Zone 1 Direct' : (permFromA ? 'PUTT Accelerated Trip' : 'Zone 2 Stepped');
  } else if (scheme === 'DCB') {
    // Directional Comparison Blocking
    // End seeing reverse fault sends a BLOCK signal to opposite end
    // For internal fault, neither sends block -> trip in ~30 ms
    tripTimeA = 25;
    tripTimeB = 25;
    mechanismA = 'DCB Unblocked High-Speed Trip';
    mechanismB = 'DCB Unblocked High-Speed Trip';
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Radio className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">
              {lang === 'en' && 'Pilot & Communication-Assisted Transmission Protection'}
              {lang === 'hi' && 'पायलट एवं संचार-सहायता प्राप्त पारेषण सुरक्षा सिमुलेटर'}
              {lang === 'bn' && 'পাইলট ও কমিউনিকেশন-সহায়তাপ্রাপ্ত ট্রান্সমিশন সুরক্ষা সিমুলেটর'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'en' && 'Compare POTT, PUTT, DCB, and 87L Optical Line Differential in eliminating end-zone 350 ms stepped delays.'}
            {lang === 'hi' && 'पीओटीटी, पीयूटीटी, डीसीबी और 87L लाइन डिफरेंशियल द्वारा 350ms की देरी को समाप्त करने का सिमुलेशन।'}
            {lang === 'bn' && 'POTT, PUTT, DCB এবং 87L অপটিক্যাল লাইন ডিফারেন্সিয়াল দ্বারা ৩৫০ms এন্ড-জোন বিলম্ব দূর করার কার্যকারিতা তুলনা করুন।'}
          </p>
        </div>
        <button
          onClick={() => {
            setScheme('POTT');
            setFaultLocationPct(88);
            setChannelStatus('healthy');
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'Reset Settings' : lang === 'hi' ? 'रीसेट' : 'রিসেট'}</span>
        </button>
      </div>

      {/* Scheme Selector */}
      <div className="mb-6">
        <label className="text-xs font-semibold text-slate-300 block mb-2">
          {lang === 'en' ? 'Select Communication-Assisted Pilot Protection Scheme:' : lang === 'hi' ? 'पायलट सुरक्षा योजना चुनें:' : 'পাইলট সুরক্ষা স্কিম নির্বাচন করুন:'}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {[
            { id: 'POTT', label: 'POTT (Permissive Overreach)' },
            { id: 'PUTT', label: 'PUTT (Permissive Underreach)' },
            { id: 'DCB', label: 'DCB (Directional Blocking)' },
            { id: '87L', label: '87L (Line Current Diff)' },
            { id: 'None', label: 'None (Stepped Distance Only)' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setScheme(item.id as any)}
              className={`py-2 px-2.5 text-xs font-bold rounded-lg border transition-all ${
                scheme === item.id
                  ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-850'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Fault Location Slider */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Fault Location on 400 kV Transmission Line' : lang === 'hi' ? 'लाइन पर फॉल्ट की स्थिति' : 'লাইনে ফল্টের অবস্থান'}
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400">{faultLocationPct}% from Terminal A</span>
          </div>
          <input
            type="range"
            min="5"
            max="95"
            step="1"
            value={faultLocationPct}
            onChange={(e) => setFaultLocationPct(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>Terminal A (0%)</span>
            <span>Middle (50%)</span>
            <span>Critical End-Zone (88%)</span>
            <span>Terminal B (100%)</span>
          </div>
        </div>

        {/* Communication Channel Health */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs font-semibold text-slate-300 block mb-2">
            {lang === 'en' ? 'Telecom Channel Condition (Fiber OPGW / Carrier)' : lang === 'hi' ? 'संचार चैनल स्थिति' : 'কমিউনিকেশন চ্যানেল অবস্থা'}
          </span>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'healthy', label: 'Healthy (6 ms)', color: 'emerald' },
              { id: 'high_latency', label: 'Laggy (45 ms)', color: 'amber' },
              { id: 'failed', label: 'Channel Failed', color: 'rose' }
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setChannelStatus(st.id as any)}
                className={`py-1.5 text-xs font-bold rounded transition-colors ${
                  channelStatus === st.id
                    ? st.id === 'healthy' ? 'bg-emerald-600 text-white' : st.id === 'high_latency' ? 'bg-amber-600 text-white' : 'bg-rose-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Transmission Line & Communication Pilot Schematic */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6 flex flex-col items-center">
        <svg viewBox="0 0 620 180" className="w-full max-w-2xl h-48">
          {/* Substation A Bus */}
          <line x1="50" y1="40" x2="50" y2="140" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
          <text x="50" y="30" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Substation A</text>

          {/* Breaker A */}
          <rect x="70" y="80" width="22" height="20" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="81" y="94" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">CB-A</text>

          {/* Substation B Bus */}
          <line x1="570" y1="40" x2="570" y2="140" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
          <text x="570" y="30" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">Substation B</text>

          {/* Breaker B */}
          <rect x="528" y="80" width="22" height="20" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="539" y="94" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle">CB-B</text>

          {/* High Voltage Transmission Line Conductor */}
          <line x1="92" y1="90" x2="528" y2="90" stroke="#34d399" strokeWidth="3" />
          <text x="310" y="82" fill="#6ee7b7" fontSize="8" fontWeight="bold" textAnchor="middle">
            400 kV Transmission Line (150 km)
          </text>

          {/* Zone 1 Reach Boundaries */}
          {/* Zone 1 from A (80% reach) */}
          <line x1="92" y1="102" x2="92 + 348" y2="102" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x="260" y="112" fill="#38bdf8" fontSize="7">Substation A Zone 1 (80% Reach)</text>

          {/* Zone 1 from B (reaches down to 20%) */}
          <line x1="528 - 348" y1="116" x2="528" y2="116" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x="350" y="125" fill="#f59e0b" fontSize="7">Substation B Zone 1 (80% Reach)</text>

          {/* OPGW Fiber Communication Channel */}
          <line
            x1="81"
            y1="145"
            x2="539"
            y2="145"
            stroke={channelStatus === 'healthy' ? '#06b6d4' : channelStatus === 'high_latency' ? '#f59e0b' : '#ef4444'}
            strokeWidth="2"
            strokeDasharray="4,4"
          />
          <text x="310" y="158" fill={channelStatus === 'healthy' ? '#06b6d4' : channelStatus === 'high_latency' ? '#f59e0b' : '#ef4444'} fontSize="8" fontWeight="bold" textAnchor="middle">
            {channelStatus === 'healthy'
              ? 'Optical Fiber Ground Wire (OPGW) High-Speed Channel (6 ms)'
              : channelStatus === 'high_latency'
              ? 'Channel Congested (45 ms Teleprotection Latency)'
              : 'COMMUNICATION CHANNEL FAILED (Fallback to Zone 2)'}
          </text>

          {/* Moving Signal Arrows on Pilot Line if healthy */}
          {channelStatus !== 'failed' && (
            <g transform="translate(310, 145)">
              <circle cx="-15" cy="0" r="3" fill="#38bdf8" />
              <circle cx="15" cy="0" r="3" fill="#f59e0b" />
            </g>
          )}

          {/* Fault Location Marker */}
          <g transform={`translate(${92 + (faultLocationPct / 100) * (528 - 92)}, 90)`}>
            <polygon points="0,-14 6,-3 14,-3 7,3 10,14 0,7 -10,14 -7,3 -14,-3 -6,-3" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
            <text x="0" y="24" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">
              FAULT ({faultLocationPct}%)
            </text>
          </g>
        </svg>
      </div>

      {/* Clearing Time Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Terminal A Performance */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-cyan-400">Substation A Breaker Clearing</span>
            <Zap className={`w-4 h-4 ${tripTimeA < 50 ? 'text-emerald-400' : 'text-rose-400'}`} />
          </div>
          <div className={`text-2xl font-bold font-mono ${tripTimeA < 50 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {tripTimeA} ms
          </div>
          <p className="text-xs text-slate-400 mt-1 font-mono">
            {mechanismA}
          </p>
          <span className="text-[10px] text-slate-500 mt-1 block">
            {tripTimeA < 50 ? 'Simultaneous high-speed tripping' : 'Vulnerable to 350 ms thermal damage!'}
          </span>
        </div>

        {/* Terminal B Performance */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-amber-400">Substation B Breaker Clearing</span>
            <Zap className={`w-4 h-4 ${tripTimeB < 50 ? 'text-emerald-400' : 'text-rose-400'}`} />
          </div>
          <div className={`text-2xl font-bold font-mono ${tripTimeB < 50 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {tripTimeB} ms
          </div>
          <p className="text-xs text-slate-400 mt-1 font-mono">
            {mechanismB}
          </p>
          <span className="text-[10px] text-slate-500 mt-1 block">
            {tripTimeB < 50 ? 'Simultaneous high-speed tripping' : 'Slow Zone 2 stepped clearance'}
          </span>
        </div>

        {/* Grid Stability Verdict */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'System Transient Stability Verdict' : lang === 'hi' ? 'ग्रिड स्थिरता परिणाम' : 'গ্রিড ট্রানজিয়েন্ট স্থায়িত্ব'}
          </span>
          <div className="flex items-center gap-2 mt-1">
            {Math.max(tripTimeA, tripTimeB) < 60 ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-emerald-400">
                  {lang === 'en' ? 'HIGH-SPEED CRITICAL CLEARANCE' : lang === 'hi' ? 'उच्च गति सुरक्षित क्लीयरेंस' : 'উচ্চ গতির নিরাপদ ক্লিয়ারেন্স'}
                </span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <span className="text-xs font-bold text-rose-400">
                  {lang === 'en' ? 'TRANSIENT INSTABILITY HAZARD' : lang === 'hi' ? 'अस्थिरता का भारी खतरा' : 'ট্রানজিয়েন্ট অস্থিরতার ঝুঁকি'}
                </span>
              </>
            )}
          </div>
          <p className="text-[10px] text-slate-500 mt-1">
            {Math.max(tripTimeA, tripTimeB) < 60
              ? 'Fault isolated in < 3 cycles at both ends; generator synchronism preserved!'
              : 'Delayed clearing at one end exceeds Critical Clearing Time (CCT ~ 100 ms) risking system blackout!'}
          </p>
        </div>
      </div>

      {/* Engineering Rule */}
      <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
        <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-cyan-300">
            {lang === 'en' ? 'The Critical Need for Pilot Schemes in EHV/UHV Grids: ' : lang === 'hi' ? 'ईएचवी ग्रिड में पायलट स्कीम की आवश्यकता: ' : 'EHV গ্রিডে পাইলট স্কিমের গুরুত্ব: '}
          </span>
          {lang === 'en' && 'For an 88% fault, Terminal B sees it in Zone 1 (0 ms), but Terminal A sees it in Zone 2. Without pilot teleprotection, Terminal A waits 350 ms before opening. In modern interconnected 400/765 kV grids, allowing fault current to persist for 350 ms drives generator rotor angles past their transient stability limit, causing widespread synchronous collapse. POTT and 87L ensure simultaneous isolation at both terminals in < 25-30 ms.'}
          {lang === 'hi' && '88% फॉल्ट पर टर्मिनल बी इसे ज़ोन 1 में तुरंत देखता है, लेकिन टर्मिनल ए इसे ज़ोन 2 में 350ms बाद देखता है। बिना पायलट स्कीम के 350ms तक फॉल्ट रहने से जनरेटर रोटर एंगल अस्थिर हो जाता है और ग्रिड ब्लैकआउट हो सकता है।'}
          {lang === 'bn' && '৮৮% ফল্টে টার্মিনাল বি সাথে সাথে (জোন ১) দেখে, কিন্তু টার্মিনাল এ ৩৫০ms অপেক্ষা করে (জোন ২)। পাইলট স্কিম ছাড়া ৩৫০ms ধরে ফল্ট চললে অল্টারনেটরের সিঙ্ক্রোনিজম নষ্ট হয়ে গ্রিড ব্ল্যাকআউট হতে পারে। পাইলট স্কিম উভয় প্রান্তে ২০-৩০ms এ ত্রুটি বিচ্ছিন্ন করে।'}
        </div>
      </div>
    </div>
  );
};
