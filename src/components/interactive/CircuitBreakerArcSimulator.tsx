import React, { useState } from 'react';
import { Language } from '../../types';
import { Sliders, RotateCcw, ShieldCheck, Zap, AlertTriangle, CheckCircle2, Flame, Info } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const CircuitBreakerArcSimulator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [breakerType, setBreakerType] = useState<'sf6' | 'vcb' | 'air_blast'>('sf6');
  const [shortCircuitCurrentKA, setShortCircuitCurrentKA] = useState<number>(31.5); // kA
  const [naturalFreqKHz, setNaturalFreqKHz] = useState<number>(8.5); // kHz (determines RRRV)
  const [systemVoltageKV, setSystemVoltageKV] = useState<number>(132); // kV line-to-line
  const [sf6PressureBar, setSf6PressureBar] = useState<number>(6.0); // bar for SF6 or gap for VCB

  // Peak recovery voltage Vm = sqrt(2/3) * V_LL * First-pole factor (typically 1.5)
  const vmPeakKV = Math.sqrt(2 / 3) * systemVoltageKV * 1.5; // kV peak
  const omegaN = 2 * Math.PI * naturalFreqKHz * 1000; // rad/sec
  const rrrvPeakKVMs = (vmPeakKV * omegaN) / 1000000; // kV/microsecond

  // Dielectric recovery slope capability (kV/microsecond)
  let dielectricRecoveryRateKVMs = 0;
  if (breakerType === 'sf6') {
    dielectricRecoveryRateKVMs = 3.5 * (sf6PressureBar / 5.0);
  } else if (breakerType === 'vcb') {
    dielectricRecoveryRateKVMs = 4.8 * (sf6PressureBar / 5.0); // fast recovery for diffuse vacuum arc
  } else {
    dielectricRecoveryRateKVMs = 1.8 * (sf6PressureBar / 5.0); // Air blast
  }

  // Interruption success check: Dielectric strength must rise faster than TRV / RRRV
  const isInterrupted = dielectricRecoveryRateKVMs > rrrvPeakKVMs;

  // Making capacity (IEC 62271-100: 2.55 * I_breaking for 50 Hz systems)
  const makingCurrentPeakKA = 2.55 * shortCircuitCurrentKA;

  // Generate TRV and Dielectric curves
  // Time from 0 to 50 microseconds
  const plotPointsTRV: string[] = [];
  const plotPointsDielectric: string[] = [];
  const plotW = 460;
  const plotH = 160;
  const maxT = 60; // microseconds
  const maxV = vmPeakKV * 2.2;

  for (let t = 0; t <= maxT; t += 1.0) {
    const x = (t / maxT) * plotW;
    
    // TRV: e_trv(t) = Vm * (1 - cos(omega_n * t)) * exp(-t / damping)
    const damping = 30; // microseconds
    const vTrv = vmPeakKV * (1 - Math.cos((2 * Math.PI * naturalFreqKHz * t) / 1000)) * Math.exp(-t / damping);
    const yTrv = plotH - (vTrv / maxV) * plotH;
    plotPointsTRV.push(`${x.toFixed(1)},${Math.max(0, yTrv).toFixed(1)}`);

    // Dielectric recovery strength line
    const vDiel = dielectricRecoveryRateKVMs * t * 15; // scaled for visibility
    const yDiel = plotH - (vDiel / maxV) * plotH;
    plotPointsDielectric.push(`${x.toFixed(1)},${Math.max(0, yDiel).toFixed(1)}`);
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">
              {lang === 'en' && 'Circuit Breaker Arc Interruption & TRV / RRRV Simulator'}
              {lang === 'hi' && 'सर्किट ब्रेकर आर्क शमन एवं टीआरवी / आरआरआरवी सिमुलेटर'}
              {lang === 'bn' && 'সার্কিট ব্রেকার আর্ক নির্বাপণ ও TRV / RRRV সিমুলেটর'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'en' && 'Analyze current zero arc extinction, Transient Recovery Voltage (TRV), RRRV race, and dielectric restrike phenomena.'}
            {lang === 'hi' && 'करंट ज़ीरो आर्क शमन, क्षणिक पुनर्प्राप्ति वोल्टेज (TRV) और डाइइलेक्ट्रिक रीस्ट्राइक का विश्लेषण करें।'}
            {lang === 'bn' && 'কারেন্ট জিরো আর্ক নির্বাপণ, ট্রানজিয়েন্ট রিকভারি ভোল্টেজ (TRV) এবং ডাই-ইলেকট্রিক রিস্ট্রাইক বিশ্লেষণ করুন।'}
          </p>
        </div>
        <button
          onClick={() => {
            setBreakerType('sf6');
            setShortCircuitCurrentKA(31.5);
            setNaturalFreqKHz(8.5);
            setSystemVoltageKV(132);
            setSf6PressureBar(6.0);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'Reset' : lang === 'hi' ? 'रीसेट' : 'রিসেট'}</span>
        </button>
      </div>

      {/* Technology Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {[
          { id: 'sf6', name: 'SF6 Auto-Puffer Breaker', desc: '132 kV – 765 kV EHV/UHV Grid Standard' },
          { id: 'vcb', name: 'Vacuum Circuit Breaker (VCB)', desc: '11 kV – 33 kV Distribution & Industrial' },
          { id: 'air_blast', name: 'Air Blast Circuit Breaker', desc: 'Legacy High-Velocity Compressed Air' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setBreakerType(item.id as any)}
            className={`p-3 rounded-lg text-left border transition-all ${
              breakerType === item.id
                ? 'bg-amber-950/80 border-amber-500 text-white shadow-lg'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-850'
            }`}
          >
            <div className="text-xs font-bold text-amber-300">{item.name}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">{item.desc}</div>
          </button>
        ))}
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {/* Short Circuit Breaking Current */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Rated Breaking Current (Isc)' : lang === 'hi' ? 'रेटेड ब्रेकिंग धारा (Isc)' : 'রেটেড ব্রেকিং কারেন্ট (Isc)'}
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400">{shortCircuitCurrentKA} kA rms</span>
          </div>
          <input
            type="range"
            min="10"
            max="63"
            step="0.5"
            value={shortCircuitCurrentKA}
            onChange={(e) => setShortCircuitCurrentKA(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>10 kA</span>
            <span>31.5 kA (Grid)</span>
            <span>63 kA (Heavy)</span>
          </div>
        </div>

        {/* System Voltage */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'System Rated Voltage (V_LL)' : lang === 'hi' ? 'सिस्टम वोल्टेज (V_LL)' : 'সিস্টেম ভোল্টেজ (V_LL)'}
            </span>
            <span className="text-xs font-mono font-bold text-amber-400">{systemVoltageKV} kV</span>
          </div>
          <input
            type="range"
            min="33"
            max="400"
            step="1"
            value={systemVoltageKV}
            onChange={(e) => setSystemVoltageKV(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>33 kV</span>
            <span>132 kV</span>
            <span>400 kV</span>
          </div>
        </div>

        {/* Transient Natural Frequency fn */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Bus Natural Frequency (fn)' : lang === 'hi' ? 'स्वाभाविक आवृत्ति (fn)' : 'স্বাভাবিক ফ্রিকোয়েন্সি (fn)'}
            </span>
            <span className="text-xs font-mono font-bold text-rose-400">{naturalFreqKHz.toFixed(1)} kHz</span>
          </div>
          <input
            type="range"
            min="2"
            max="25"
            step="0.5"
            value={naturalFreqKHz}
            onChange={(e) => setNaturalFreqKHz(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>2 kHz (Slow)</span>
            <span>10 kHz (Bus Fault)</span>
            <span>25 kHz (Short-line)</span>
          </div>
        </div>
      </div>

      {/* TRV vs Dielectric Recovery Oscilloscope */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-slate-200">
            {lang === 'en' ? 'Slepian / Cassie-Mayr Race: Transient Recovery Voltage (TRV) vs. Dielectric Recovery' : lang === 'hi' ? 'टीआरवी बनाम डाइइलेक्ट्रिक रिकवरी रेस' : 'TRV বনাম ডাই-ইলেকট্রিক রিকভারি রেস'}
          </span>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-rose-400">
              <span className="w-3.5 h-1 bg-rose-500 inline-block rounded"></span>
              TRV Stress Curve (kV)
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-3.5 h-1 bg-emerald-400 inline-block rounded"></span>
              Dielectric Strength (kV)
            </span>
          </div>
        </div>

        <svg viewBox="0 0 460 160" className="w-full h-48 bg-slate-900 rounded-lg">
          {/* Baseline */}
          <line x1="0" y1="160" x2="460" y2="160" stroke="#334155" strokeWidth="2" />
          <line x1="0" y1="80" x2="460" y2="80" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />

          {/* Time axis ticks */}
          <text x="5" y="152" fill="#64748b" fontSize="7" fontMono="true">t = 0 (Current Zero)</text>
          <text x="230" y="152" fill="#64748b" fontSize="7" fontMono="true">30 μs</text>
          <text x="420" y="152" fill="#64748b" fontSize="7" fontMono="true">60 μs</text>

          {/* TRV Voltage Curve */}
          <path d={`M ${plotPointsTRV.join(' L ')}`} fill="none" stroke="#f43f5e" strokeWidth="2.5" />

          {/* Dielectric Recovery Curve */}
          <path d={`M ${plotPointsDielectric.join(' L ')}`} fill="none" stroke="#34d399" strokeWidth="2.5" strokeDasharray={isInterrupted ? 'none' : '3,3'} />

          {/* Restrike Annotation if Failed */}
          {!isInterrupted && (
            <g transform="translate(180, 50)">
              <rect x="0" y="0" width="160" height="24" rx="3" fill="#4c0519" stroke="#be123c" />
              <text x="80" y="16" fill="#fecdd3" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                ARC RESTRIKE / RE-IGNITION!
              </text>
            </g>
          )}
          {isInterrupted && (
            <g transform="translate(240, 50)">
              <rect x="0" y="0" width="170" height="24" rx="3" fill="#064e3b" stroke="#059669" />
              <text x="85" y="16" fill="#a7f3d0" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                ARC EXTINCTION SUCCESSFUL
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Breaker Ratings & Capability Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Peak TRV Voltage */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Peak TRV (e_trv,max)' : lang === 'hi' ? 'अधिकतम टीआरवी (Vm)' : 'সর্বোচ্চ টিআরভি (Vm)'}
          </span>
          <div className="text-xl font-bold font-mono text-cyan-400">
            {(vmPeakKV * 2.0).toFixed(0)} kV peak
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            First-pole-to-clear factor: 1.5
          </span>
        </div>

        {/* Rate of Rise of Recovery Voltage (RRRV) */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Rate of Rise (RRRV)' : lang === 'hi' ? 'आरआरआरवी (RRRV)' : 'আরআরআরভি (RRRV)'}
          </span>
          <div className={`text-xl font-bold font-mono ${isInterrupted ? 'text-amber-400' : 'text-rose-400'}`}>
            {rrrvPeakKVMs.toFixed(2)} kV/μs
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            fn = {naturalFreqKHz} kHz
          </span>
        </div>

        {/* Rated Making Current */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Rated Making Current' : lang === 'hi' ? 'मेकिंग क्षमता' : 'রেটেড মেকিং কারেন্ট'}
          </span>
          <div className="text-xl font-bold font-mono text-indigo-400">
            {makingCurrentPeakKA.toFixed(1)} kA peak
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            IEC 62271-100: 2.55 × I_breaking
          </span>
        </div>

        {/* Interruption Verdict */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Arc Clearance Result' : lang === 'hi' ? 'आर्क शमन परिणाम' : 'আর্ক ক্লিয়ারেন্স ফলাফল'}
          </span>
          <div className="flex items-center gap-2 mt-1">
            {isInterrupted ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-emerald-400">
                  {lang === 'en' ? 'SUCCESSFUL CLEARANCE' : lang === 'hi' ? 'सफल आर्क शमन' : 'সফল আর্ক নির্বাপণ'}
                </span>
              </>
            ) : (
              <>
                <Flame className="w-5 h-5 text-rose-400 shrink-0 animate-bounce" />
                <span className="text-xs font-bold text-rose-400">
                  {lang === 'en' ? 'DIELECTRIC RESTRIKE' : lang === 'hi' ? 'डाइइलेक्ट्रिक रीस्ट्राइक' : 'ডাই-ইলেকট্রিক রিস্ট্রাইক'}
                </span>
              </>
            )}
          </div>
          <p className="text-[10px] text-slate-500 mt-1">
            {isInterrupted
              ? 'Dielectric strength outpaced TRV; circuit cleanly opened at current zero.'
              : 'TRV exceeded contact gap recovery rate, causing arc re-ignition and thermal breakdown!'}
          </p>
        </div>
      </div>

      {/* Engineering Rule */}
      <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-amber-300">
            {lang === 'en' ? 'The Short-Line Fault (SLF) Paradox in Circuit Breaker Duty: ' : lang === 'hi' ? 'शॉर्ट-लाइन फॉल्ट (SLF) विरोधाभास: ' : 'শর্ট-লাইন ফল্ট (SLF) সমস্যা: '}
          </span>
          {lang === 'en' && 'Counterintuitively, the most severe interrupting duty for an EHV circuit breaker is not a 100% terminal fault, but a Short-Line Fault (SLF) occurring 1 to 3 km away from the substation bus (90% fault duty). High-frequency triangular traveling wave reflections bounce between the breaker terminals and the fault point, generating an extreme RRRV of 8 to 12 kV/μs within the first 1-2 microseconds after current zero, challenging the thermal dielectric recovery of SF6 puffer interrupters.'}
          {lang === 'hi' && 'ईएचवी सर्किट ब्रेकर के लिए सबसे गंभीर ड्यूटी टर्मिनल फॉल्ट नहीं, बल्कि 1 से 3 किमी दूर होने वाला शॉर्ट-लाइन फॉल्ट (SLF) है। उच्च आवृत्ति वाली तरंगें 8 से 12 kV/μs का अत्यंत उच्च RRRV उत्पन्न करती हैं, जिससे थर्मल रीस्ट्राइक का जोखिम बढ़ जाता है।'}
          {lang === 'bn' && 'EHV সার্কিট ব্রেকারের জন্য সবচেয়ে মারাত্মক অবস্থা টার্মিনাল ফল্ট নয়, বরং ১-৩ কিমি দূরে ঘটা শর্ট-লাইন ফল্ট (SLF)। উচ্চ ফ্রিকোয়েন্সির ট্রাভেলিং ওয়েভ রিফ্লেকশনের কারণে প্রথম ১-২ মাইক্রোসেকেন্ডে ৮-১২ kV/μs এর ভয়াবহ RRRV তৈরি হয় যা থার্মাল রিস্ট্রাইক সৃষ্টি করতে পারে।'}
        </div>
      </div>
    </div>
  );
};
