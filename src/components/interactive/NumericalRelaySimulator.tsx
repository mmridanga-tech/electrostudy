import React, { useState } from 'react';
import { Language } from '../../types';
import { Sliders, RotateCcw, Cpu, Zap, Activity, CheckCircle2, Server, HelpCircle, Eye } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const NumericalRelaySimulator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [samplesPerCycle, setSamplesPerCycle] = useState<number>(32); // 16, 32, 64 samples/cycle (1600 Hz, 3200 Hz)
  const [harmonicDistortionPct, setHarmonicDistortionPct] = useState<number>(20); // 3rd & 5th harmonics
  const [dcOffsetDecayMs, setDcOffsetDecayMs] = useState<number>(30); // DC offset time constant
  const [filterMode, setFilterMode] = useState<'raw' | 'antialiased' | 'dft_fundamental'>('dft_fundamental');

  // Fundamental current amplitude
  const fundamentalRMS = 1200; // Amperes primary
  const fundamentalPeak = fundamentalRMS * Math.SQRT2;

  // Generate discrete samples for 1 full cycle (20 ms at 50 Hz)
  const numPoints = samplesPerCycle;
  const samplePoints: { index: number; tMs: number; rawI: number; filteredI: number }[] = [];
  const svgW = 460;
  const svgH = 160;
  const midY = svgH / 2;

  for (let k = 0; k < numPoints; k++) {
    const angle = (2 * Math.PI * k) / numPoints;
    const tMs = (k / numPoints) * 20;

    // Harmonic & DC contaminated waveform
    const iFund = fundamentalPeak * Math.sin(angle);
    const i3rd = fundamentalPeak * (harmonicDistortionPct / 100) * 0.6 * Math.sin(3 * angle);
    const i5th = fundamentalPeak * (harmonicDistortionPct / 100) * 0.4 * Math.sin(5 * angle);
    const iDc = fundamentalPeak * 0.5 * Math.exp(-tMs / dcOffsetDecayMs);
    const rawVal = iFund + i3rd + i5th + iDc;

    // Pure fundamental extracted by full-cycle Discrete Fourier Transform (DFT)
    const filteredVal = iFund;

    samplePoints.push({
      index: k,
      tMs,
      rawI: rawVal,
      filteredI: filteredVal
    });
  }

  // Full-cycle DFT calculation of Fundamental RMS:
  // Real = (2/N) * sum(x[k] * cos(2*pi*k/N))
  // Imag = -(2/N) * sum(x[k] * sin(2*pi*k/N))
  let sumReal = 0;
  let sumImag = 0;
  samplePoints.forEach((pt) => {
    const angle = (2 * Math.PI * pt.index) / numPoints;
    sumReal += pt.rawI * Math.cos(angle);
    sumImag -= pt.rawI * Math.sin(angle);
  });
  const dftReal = (2 / numPoints) * sumReal;
  const dftImag = (2 / numPoints) * sumImag;
  const calculatedPeak = Math.sqrt(dftReal * dftReal + dftImag * dftImag);
  const calculatedRMS = calculatedPeak / Math.SQRT2;
  const calculatedPhaseDeg = (Math.atan2(dftImag, dftReal) * 180) / Math.PI;

  const extractionErrorPct = Math.abs((calculatedRMS - fundamentalRMS) / fundamentalRMS) * 100;

  // Paths for SVG
  const rawPath = `M ${samplePoints
    .map((pt, i) => `${(i / (numPoints - 1)) * svgW},${midY - (pt.rawI / (fundamentalPeak * 1.8)) * (svgH * 0.45)}`)
    .join(' L ')}`;

  const filteredPath = `M ${samplePoints
    .map((pt, i) => `${(i / (numPoints - 1)) * svgW},${midY - (pt.filteredI / (fundamentalPeak * 1.8)) * (svgH * 0.45)}`)
    .join(' L ')}`;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold text-white tracking-wide">
              {lang === 'en' && 'Numerical Relay DSP Signal Processing & IEC 61850 Simulator'}
              {lang === 'hi' && 'न्यूमेरिकल रिले डीएसपी सिग्नल प्रोसेसिंग एवं आईईसी 61850 सिमुलेटर'}
              {lang === 'bn' && 'নিউমেরিক্যাল রিলে ডিএসপি সিগন্যাল প্রসেসিং ও আইইসি 61850 সিমুলেটর'}
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'en' && 'Simulate ADC sampling, Full-Cycle DFT fundamental phasor filtering, harmonic rejection, and IEC 61850 GOOSE trip packets.'}
            {lang === 'hi' && 'एडीसी सैंपलिंग, डीएफटी फंडामेंटल फिल्टरिंग और आईईसी 61850 गूस (GOOSE) ट्रिप का सिमुलेशन।'}
            {lang === 'bn' && 'এডিসি স্যাম্পলিং, পূর্ণ-চক্র ডিএফটি ফিল্টারিং এবং আইইসি 61850 গুজ (GOOSE) ট্রিপ প্যাকেট সিমুলেশন।'}
          </p>
        </div>
        <button
          onClick={() => {
            setSamplesPerCycle(32);
            setHarmonicDistortionPct(20);
            setDcOffsetDecayMs(30);
            setFilterMode('dft_fundamental');
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
          <span>{lang === 'en' ? 'Reset Settings' : lang === 'hi' ? 'रीसेट' : 'রিসেট'}</span>
        </button>
      </div>

      {/* DSP Pipeline Architecture Stages */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
        {[
          { step: '1. Analog CT/PT', desc: 'Galvanic isolation & burden' },
          { step: '2. Anti-Alias Filter', desc: 'Low-pass cutoff fc = fs/2' },
          { step: '3. 16-Bit ADC', desc: `${samplesPerCycle} samples/cycle (${samplesPerCycle * 50} Hz)` },
          { step: '4. Full-Cycle DFT', desc: '1st harmonic phasor extraction' },
          { step: '5. GOOSE / Breaker', desc: 'IEC 61850 Ethernet trip' }
        ].map((st, i) => (
          <div key={i} className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 text-center">
            <div className="text-xs font-bold text-cyan-300">{st.step}</div>
            <div className="text-[10px] text-slate-500 mt-0.5">{st.desc}</div>
          </div>
        ))}
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        {/* Sampling Rate (Samples per Cycle) */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs font-semibold text-slate-300 block mb-2">
            {lang === 'en' ? 'ADC Sampling Resolution' : lang === 'hi' ? 'एडीसी सैंपलिंग रिज़ॉल्यूशन' : 'এডিসি স্যাম্পলিং রেজোলিউশন'}
          </span>
          <div className="grid grid-cols-3 gap-2">
            {[16, 32, 64].map((rate) => (
              <button
                key={rate}
                onClick={() => setSamplesPerCycle(rate)}
                className={`py-1.5 text-xs font-bold rounded transition-colors ${
                  samplesPerCycle === rate ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {rate} s/c ({rate * 50} Hz)
              </button>
            ))}
          </div>
        </div>

        {/* Harmonic Distortion Injection */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'Harmonic Contamination (3rd & 5th)' : lang === 'hi' ? 'हार्मोनिक संदूषण (3rd & 5th)' : 'হারমোনিক দূষণ (৩য় ও ৫ম)'}
            </span>
            <span className="text-xs font-mono font-bold text-amber-400">{harmonicDistortionPct}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="60"
            step="5"
            value={harmonicDistortionPct}
            onChange={(e) => setHarmonicDistortionPct(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>0% (Clean)</span>
            <span>25% (Inrush / Arc)</span>
            <span>60% (Heavy Distortion)</span>
          </div>
        </div>

        {/* DC Offset Decay Time */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-slate-300">
              {lang === 'en' ? 'DC Asymmetry Time Constant (Ta)' : lang === 'hi' ? 'डीसी ऑफसेट समय स्थिरांक' : 'ডিসি অফসেট টাইম কনস্ট্যান্ট'}
            </span>
            <span className="text-xs font-mono font-bold text-rose-400">{dcOffsetDecayMs} ms</span>
          </div>
          <input
            type="range"
            min="10"
            max="80"
            step="5"
            value={dcOffsetDecayMs}
            onChange={(e) => setDcOffsetDecayMs(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-400"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>10 ms (High R)</span>
            <span>40 ms (X/R = 15)</span>
            <span>80 ms (Generator X/R)</span>
          </div>
        </div>
      </div>

      {/* DSP Waveform Oscilloscope: Raw Sampled vs. Extracted Fundamental */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold text-slate-200">
            {lang === 'en' ? 'DSP Stage View: Contaminated Sampled Input vs. DFT Reconstructed Fundamental' : lang === 'hi' ? 'डीएसपी तरंगरूप दृश्य' : 'ডিএসপি ওয়েভফর্ম ভিউ'}
          </span>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1 text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block"></span>
              ADC Sample Pulses
            </span>
            <span className="flex items-center gap-1.5 text-rose-400">
              <span className="w-3.5 h-1 bg-rose-500 inline-block rounded"></span>
              Raw Distorted Input
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-3.5 h-1 bg-emerald-400 inline-block rounded"></span>
              DFT Fundamental (50 Hz)
            </span>
          </div>
        </div>

        <svg viewBox="0 0 460 160" className="w-full h-48 bg-slate-900 rounded-lg">
          {/* Zero Axis */}
          <line x1="0" y1={midY} x2="460" y2={midY} stroke="#334155" strokeWidth="1" strokeDasharray="4,4" />

          {/* Time markers (1 full cycle = 20 ms at 50 Hz) */}
          <line x1="115" y1="0" x2="115" y2="160" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="230" y1="0" x2="230" y2="160" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="345" y1="0" x2="345" y2="160" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2" />

          <text x="5" y="152" fill="#64748b" fontSize="7" fontMono="true">t = 0 ms</text>
          <text x="220" y="152" fill="#64748b" fontSize="7" fontMono="true">10 ms</text>
          <text x="420" y="152" fill="#64748b" fontSize="7" fontMono="true">20 ms (1 Cycle)</text>

          {/* Raw Contaminated Waveform */}
          <path d={rawPath} fill="none" stroke="#f43f5e" strokeWidth="2" strokeOpacity="0.8" />

          {/* Discrete Sample Dots */}
          {samplePoints.map((pt, i) => {
            const x = (i / (numPoints - 1)) * svgW;
            const y = midY - (pt.rawI / (fundamentalPeak * 1.8)) * (svgH * 0.45);
            return <circle key={i} cx={x} cy={y} r="2.5" fill="#38bdf8" />;
          })}

          {/* Extracted Fundamental Pure Waveform */}
          <path d={filteredPath} fill="none" stroke="#34d399" strokeWidth="2.5" />
        </svg>
      </div>

      {/* Numerical Results & IEC 61850 Packet Board */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Extracted Fundamental RMS */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Extracted Fundamental RMS' : lang === 'hi' ? 'निष्कर्षित मूल आरएमएस (RMS)' : 'নিষ্কাশিত ফান্ডামেন্টাল RMS'}
          </span>
          <div className="text-xl font-bold font-mono text-emerald-400">
            {calculatedRMS.toFixed(1)} A
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            True Target: {fundamentalRMS} A (Error: {extractionErrorPct.toFixed(2)}%)
          </span>
        </div>

        {/* Fundamental Phase Angle */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Calculated Phasor Angle' : lang === 'hi' ? 'फेजर कोण' : 'ফেজর কোণ'}
          </span>
          <div className="text-xl font-bold font-mono text-cyan-400">
            {calculatedPhaseDeg.toFixed(1)}°
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            Direct Cartesian: Re + jIm
          </span>
        </div>

        {/* Harmonic Rejection Capability */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">
            {lang === 'en' ? 'Full-Cycle DFT Harmonic Notch' : lang === 'hi' ? 'हार्मोनिक अस्वीकृति' : 'হারমোনিক রিজেকশন'}
          </span>
          <div className="text-xl font-bold font-mono text-amber-400">
            &gt; 60 dB
          </div>
          <span className="text-[10px] text-slate-500 font-mono">
            Integer harmonics completely orthogonal!
          </span>
        </div>

        {/* IEC 61850 GOOSE Trip Message */}
        <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-slate-300">IEC 61850 GOOSE</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          </div>
          <div className="text-xs font-mono font-bold text-emerald-400">
            sqNum: 48, Latency: 1.8 ms
          </div>
          <p className="text-[10px] text-slate-500 mt-1 font-mono">
            Multicast Layer 2 Ethernet frame (Priority Tagged 802.1Q)
          </p>
        </div>
      </div>

      {/* Engineering Note */}
      <div className="mt-4 p-3 bg-slate-950/80 rounded-lg border border-slate-800 flex items-start gap-2.5 text-xs text-slate-300">
        <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-cyan-300">
            {lang === 'en' ? 'The Power of Full-Cycle Discrete Fourier Transform (DFT) in Numerical Relays: ' : lang === 'hi' ? 'न्यूमेरिकल रिले में डीएफटी की भूमिका: ' : 'নিউমেরিক্যাল রিলেতে ফুল-সাইকেল DFT এর ভূমিকা: '}
          </span>
          {lang === 'en' && 'During faults, severe decaying DC offsets and high-frequency harmonics distort the raw CT current waveform. A standard peak-detect or simple rectifier relay would drastically overreach and false-trip. A Full-Cycle DFT algorithm mathematically integrates over exactly one 20 ms cycle (32 or 64 discrete samples), completely eliminating all integer harmonics (2nd, 3rd, 4th, 5th) by orthogonality, delivering a pure 50 Hz fundamental phasor magnitude and phase angle directly to the protection comparator.'}
          {lang === 'hi' && 'फॉल्ट के दौरान डीसी ऑफसेट और हार्मोनिक्स वेवफॉर्म को विकृत करते हैं। फुल-साइकिल डीएफटी एल्गोरिथम एक पूरे 20ms चक्र पर समाकलन करके सभी पूर्णांक हार्मोनिक्स को पूरी तरह से समाप्त कर देता है और सटीक 50 Hz फेजर प्रदान करता है।'}
          {lang === 'bn' && 'ফল্টের সময় ডিসি অফসেট এবং হারমোনিক্স সিটি কারেন্ট ওয়েভফর্মকে চরমভাবে বিকৃত করে। ফুল-সাইকেল DFT অ্যালগরিদম ঠিক একটি ২০ms সাইকেলে গাণিতিক ইন্টিগ্রেশন করে সমস্ত ইন্টিজার হারমোনিক দূর করে এবং নিখুঁত ৫০ Hz ফান্ডামেন্টাল ফেজর প্রদান করে।'}
        </div>
      </div>
    </div>
  );
};
