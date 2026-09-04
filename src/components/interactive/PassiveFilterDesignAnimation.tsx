import React, { useState, useId } from 'react';
import { Language } from '../../types';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const PassiveFilterDesignAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const labelId = useId();

  // Filter Type: 'lpf' | 'hpf' | 'bpf' | 'notch'
  const [filterType, setFilterType] = useState<'lpf' | 'hpf' | 'bpf' | 'notch'>('lpf');

  // Component Values
  const [rVal, setRVal] = useState<number>(1000); // Ohms
  const [cValNano, setCValNano] = useState<number>(100); // nF
  const [lValMilli, setLValMilli] = useState<number>(10); // mH

  // Operating / Test Frequency (logarithmic range 10 Hz to 100 kHz)
  const [freqLog, setFreqLog] = useState<number>(3.2); // 10^3.2 ~= 1585 Hz
  const testFreq = Math.pow(10, freqLog);

  // Derived Values
  const cFarads = cValNano * 1e-9;
  const lHenries = lValMilli * 1e-3;

  // Cutoff / Center frequency
  let fCutoff = 0;
  let qFactor = 0;
  let bandwidth = 0;

  if (filterType === 'lpf' || filterType === 'hpf') {
    // fc = 1 / (2 * pi * R * C)
    fCutoff = 1 / (2 * Math.PI * rVal * cFarads);
  } else {
    // 2nd order RLC: f0 = 1 / (2 * pi * sqrt(L * C))
    fCutoff = 1 / (2 * Math.PI * Math.sqrt(lHenries * cFarads));
    const omega0 = 2 * Math.PI * fCutoff;
    // Series RLC: Q = omega0 * L / R
    qFactor = (omega0 * lHenries) / rVal || 0.1;
    bandwidth = fCutoff / qFactor;
  }

  // Transfer function H(f) computation at testFreq
  const omega = 2 * Math.PI * testFreq;
  let gainMag = 0;
  let phaseDeg = 0;

  if (filterType === 'lpf') {
    // H(s) = 1 / (1 + j * omega * R * C)
    const ratio = testFreq / (fCutoff || 1);
    gainMag = 1 / Math.sqrt(1 + ratio * ratio);
    phaseDeg = -(Math.atan(ratio) * 180) / Math.PI;
  } else if (filterType === 'hpf') {
    // H(s) = (j * omega * R * C) / (1 + j * omega * R * C)
    const ratio = testFreq / (fCutoff || 1);
    gainMag = ratio / Math.sqrt(1 + ratio * ratio);
    phaseDeg = 90 - (Math.atan(ratio) * 180) / Math.PI;
  } else if (filterType === 'bpf') {
    // Series RLC BPF across R: H(s) = R / (R + j(omega*L - 1/(omega*C)))
    const xl = omega * lHenries;
    const xc = 1 / (omega * cFarads || 1e-12);
    const xNet = xl - xc;
    gainMag = rVal / Math.sqrt(rVal * rVal + xNet * xNet);
    phaseDeg = -(Math.atan2(xNet, rVal) * 180) / Math.PI;
  } else {
    // Notch / Band-stop: across LC: H(s) = j(omega*L - 1/(omega*C)) / (R + j(omega*L - 1/(omega*C)))
    const xl = omega * lHenries;
    const xc = 1 / (omega * cFarads || 1e-12);
    const xNet = xl - xc;
    gainMag = Math.abs(xNet) / Math.sqrt(rVal * rVal + xNet * xNet);
    phaseDeg = (Math.atan2(xNet, 0) - Math.atan2(xNet, rVal)) * (180 / Math.PI);
  }

  const gainDb = 20 * Math.log10(gainMag || 1e-5);

  const t = {
    title: {
      en: 'Passive AC Filter Design & Frequency Response Simulator',
      hi: 'निष्क्रिय एसी फिल्टर डिजाइन एवं आवृत्ति अनुक्रिया सिमुलेटर',
      bn: 'প্যাসিভ এসি ফিল্টার ডিজাইন ও কম্পাঙ্ক প্রতিক্রিয়া সিমুলেটর'
    },
    subtitle: {
      en: 'Design 1st-order RC and 2nd-order RLC filters; analyze cutoff frequencies, -3 dB roll-off rates, and phase shifts',
      hi: 'प्रथम-क्रम RC एवं द्वितीय-क्रम RLC फिल्टर डिजाइन करें; कटऑफ आवृत्तियाँ, -3 dB रोल-ऑफ दरें एवं कला विस्थापन का विश्लेषण करें',
      bn: '১ম-ক্রম RC ও ২য়-ক্রম RLC ফিল্টার ডিজাইন করুন; কাটঅফ কম্পাঙ্ক, -৩ dB রোল-অফ হার ও দশা পরিবর্তন বিশ্লেষণ করুন'
    },
    lpf: { en: '1st-Order Low-Pass (RC)', hi: 'प्रथम-क्रम लो-पास (RC)', bn: '১ম-ক্রম লো-পাস (RC)' },
    hpf: { en: '1st-Order High-Pass (CR)', hi: 'प्रथम-क्रम हाई-पास (CR)', bn: '১ম-ক্রম হাই-পাস (CR)' },
    bpf: { en: '2nd-Order Band-Pass (RLC)', hi: 'द्वितीय-क्रम बैंड-पास (RLC)', bn: '২য়-ক্রম ব্যান্ড-পাস (RLC)' },
    notch: { en: '2nd-Order Notch (Band-Stop)', hi: 'द्वितीय-क्रम नॉच (बैंड-स्टॉप)', bn: '২য়-ক্রম নচ (ব্যান্ড-স্টপ)' }
  };

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header & Filter Selection */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Passive Filter Synthesis</span>
          </div>
          <h3 id={labelId} className="text-xl font-bold text-white mt-1">
            {t.title[lang]}
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            {t.subtitle[lang]}
          </p>
        </div>

        {/* Filter Type Pills */}
        <div className="flex flex-wrap gap-1 bg-slate-950 p-1.5 rounded-lg border border-slate-800">
          {(['lpf', 'hpf', 'bpf', 'notch'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded transition ${
                filterType === type ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              {type === 'lpf' && t.lpf[lang]}
              {type === 'hpf' && t.hpf[lang]}
              {type === 'bpf' && t.bpf[lang]}
              {type === 'notch' && t.notch[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        {/* Resistor R */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-cyan-300 block">Resistor (R)</span>
          <div className="flex justify-between">
            <span>R:</span>
            <span className="font-mono text-cyan-400">{rVal} Ω</span>
          </div>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={rVal}
            onChange={(e) => setRVal(Number(e.target.value))}
            aria-label="Resistance R in Ohms"
            className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>

        {/* Capacitor C */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-emerald-300 block">Capacitor (C)</span>
          <div className="flex justify-between">
            <span>C:</span>
            <span className="font-mono text-emerald-400">{cValNano} nF</span>
          </div>
          <input
            type="range"
            min="1"
            max="1000"
            step="5"
            value={cValNano}
            onChange={(e) => setCValNano(Number(e.target.value))}
            aria-label="Capacitance C in nanoFarads"
            className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>

        {/* Inductor L (for 2nd order) */}
        <div className={`bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2 ${
          filterType === 'lpf' || filterType === 'hpf' ? 'opacity-40' : ''
        }`}>
          <span className="font-semibold text-amber-300 block">Inductor (L) [2nd Order]</span>
          <div className="flex justify-between">
            <span>L:</span>
            <span className="font-mono text-amber-400">{lValMilli} mH</span>
          </div>
          <input
            type="range"
            min="1"
            max="200"
            value={lValMilli}
            disabled={filterType === 'lpf' || filterType === 'hpf'}
            onChange={(e) => setLValMilli(Number(e.target.value))}
            aria-label="Inductance L in milliHenries"
            className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>

        {/* Sweep Frequency */}
        <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-800 space-y-2">
          <span className="font-semibold text-purple-300 block">Test Frequency (f)</span>
          <div className="flex justify-between">
            <span>f:</span>
            <span className="font-mono text-purple-400">
              {testFreq >= 1000 ? `${(testFreq / 1000).toFixed(2)} kHz` : `${testFreq.toFixed(0)} Hz`}
            </span>
          </div>
          <input
            type="range"
            min="1" // 10 Hz
            max="5" // 100 kHz
            step="0.05"
            value={freqLog}
            onChange={(e) => setFreqLog(Number(e.target.value))}
            aria-label="Test frequency logarithmic slider"
            className="w-full accent-purple-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
          />
        </div>
      </div>

      {/* Real-time Frequency Response Curve SVG */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-slate-300">
            Magnitude Response |H(f)| [dB] vs Log Frequency (10 Hz – 100 kHz)
          </span>
          <span className="font-mono text-cyan-400">
            {filterType === 'bpf' || filterType === 'notch' ? `f₀ = ${fCutoff.toFixed(1)} Hz` : `f_c (-3dB) = ${fCutoff.toFixed(1)} Hz`}
          </span>
        </div>

        <svg viewBox="0 0 740 220" className="w-full h-auto text-slate-400 select-none">
          {/* Background Grid Lines (10 Hz, 100 Hz, 1 kHz, 10 kHz, 100 kHz) */}
          <line x1="60" y1="20" x2="60" y2="180" stroke="#334155" strokeWidth="2" />
          <line x1="60" y1="180" x2="700" y2="180" stroke="#334155" strokeWidth="2" />

          {/* Decades labels */}
          {[1, 2, 3, 4, 5].map((dec) => {
            const x = 60 + ((dec - 1) / 4) * 640;
            const label = dec === 1 ? '10Hz' : dec === 2 ? '100Hz' : dec === 3 ? '1kHz' : dec === 4 ? '10kHz' : '100kHz';
            return (
              <g key={dec}>
                <line x1={x} y1="20" x2={x} y2="180" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                <text x={x} y="195" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="monospace">{label}</text>
              </g>
            );
          })}

          {/* dB Level Lines (0 dB, -3 dB, -20 dB, -40 dB) */}
          {/* Y range: 0 dB at y=40, -40 dB at y=170 */}
          <line x1="60" y1="40" x2="700" y2="40" stroke="#334155" strokeWidth="1" />
          <text x="50" y="44" textAnchor="end" fill="#94a3b8" fontSize="10">0 dB</text>

          {/* -3 dB line */}
          <line x1="60" y1="50" x2="700" y2="50" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" />
          <text x="50" y="54" textAnchor="end" fill="#fbbf24" fontSize="9">-3 dB</text>

          <line x1="60" y1="105" x2="700" y2="105" stroke="#1e293b" strokeWidth="1" />
          <text x="50" y="109" textAnchor="end" fill="#64748b" fontSize="10">-20 dB</text>

          <line x1="60" y1="170" x2="700" y2="170" stroke="#1e293b" strokeWidth="1" />
          <text x="50" y="174" textAnchor="end" fill="#64748b" fontSize="10">-40 dB</text>

          {/* Plot Response Curve */}
          {(() => {
            const points: string[] = [];
            for (let d = 1; d <= 5; d += 0.04) {
              const f = Math.pow(10, d);
              const w = 2 * Math.PI * f;
              let g = 0;
              if (filterType === 'lpf') {
                const r = f / (fCutoff || 1);
                g = 1 / Math.sqrt(1 + r * r);
              } else if (filterType === 'hpf') {
                const r = f / (fCutoff || 1);
                g = r / Math.sqrt(1 + r * r);
              } else if (filterType === 'bpf') {
                const xl_ = w * lHenries;
                const xc_ = 1 / (w * cFarads || 1e-12);
                const xn = xl_ - xc_;
                g = rVal / Math.sqrt(rVal * rVal + xn * xn);
              } else {
                const xl_ = w * lHenries;
                const xc_ = 1 / (w * cFarads || 1e-12);
                const xn = xl_ - xc_;
                g = Math.abs(xn) / Math.sqrt(rVal * rVal + xn * xn);
              }
              const db = 20 * Math.log10(g || 1e-4);
              const clampedDb = Math.max(-45, Math.min(2, db));
              const x = 60 + ((d - 1) / 4) * 640;
              // Map 0 dB -> 40, -40 dB -> 170 => slope = 130 / 40 = 3.25 px/dB
              const y = 40 - clampedDb * 3.25;
              points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
            }
            return (
              <polyline
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
                points={points.join(' ')}
              />
            );
          })()}

          {/* Cursor Marker at current testFreq */}
          {(() => {
            const cursorX = 60 + ((freqLog - 1) / 4) * 640;
            const clampedDb = Math.max(-45, Math.min(2, gainDb));
            const cursorY = 40 - clampedDb * 3.25;
            return (
              <g>
                <line x1={cursorX} y1="20" x2={cursorX} y2="180" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx={cursorX} cy={cursorY} r="6" fill="#c084fc" stroke="#ffffff" strokeWidth="2" />
                <rect x={cursorX - 45} y={cursorY - 26} width="90" height="18" rx="4" fill="#1e1b4b" stroke="#a855f7" strokeWidth="1" />
                <text x={cursorX} y={cursorY - 14} textAnchor="middle" fill="#e9d5ff" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  {gainDb.toFixed(1)} dB | {phaseDeg.toFixed(0)}°
                </text>
              </g>
            );
          })()}
        </svg>
      </div>

      {/* Analysis Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
        <div className="bg-slate-950 p-3 rounded-lg border border-cyan-500/30">
          <span className="text-slate-400 block">Cutoff / Resonance (f_c):</span>
          <span className="text-base font-bold text-cyan-300">
            {fCutoff >= 1000 ? `${(fCutoff / 1000).toFixed(2)} kHz` : `${fCutoff.toFixed(1)} Hz`}
          </span>
          <div className="text-[10px] text-slate-400 mt-1">
            {filterType === 'lpf' || filterType === 'hpf' ? '1 / (2πRC)' : '1 / (2π√LC)'}
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-emerald-500/30">
          <span className="text-slate-400 block">Operating Gain |H(f)|:</span>
          <span className="text-base font-bold text-emerald-300">
            {gainDb.toFixed(2)} dB ({gainMag.toFixed(3)}x)
          </span>
          <div className="text-[10px] text-slate-400 mt-1">
            Attenuation: {(100 * (1 - gainMag)).toFixed(1)}%
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-amber-500/30">
          <span className="text-slate-400 block">Phase Angle ∠H(f):</span>
          <span className="text-base font-bold text-amber-300">
            {phaseDeg.toFixed(1)}°
          </span>
          <div className="text-[10px] text-slate-400 mt-1">
            {phaseDeg < 0 ? 'Lagging phase' : 'Leading phase'}
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-purple-500/30">
          <span className="text-slate-400 block">Asymptotic Roll-off:</span>
          <span className="text-base font-bold text-purple-300">
            {filterType === 'lpf' || filterType === 'hpf' ? '-20 dB/decade' : '-40 dB/decade (2nd order)'}
          </span>
          <div className="text-[10px] text-slate-400 mt-1">
            {filterType === 'bpf' ? `Q = ${qFactor.toFixed(2)}, BW = ${bandwidth.toFixed(0)}Hz` : 'Single pole RC'}
          </div>
        </div>
      </div>
    </div>
  );
};
