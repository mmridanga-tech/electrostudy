import React, { useState, useId } from 'react';
import { Sliders, Activity, Radio, Filter, Gauge, Info } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface RCFilterFrequencyResponseAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'RC Filter Frequency Response & Bode Plot Lab',
    subtitle: 'Explore passive RC Low-Pass Filter (LPF) and High-Pass Filter (HPF) circuits. Adjust resistance, capacitance, and signal frequency to analyze cutoff frequency (fc), gain in decibels (dB), capacitive reactance (Xc), and phase shift in real-time.',
    filterLPF: 'Low-Pass Filter (LPF)',
    filterHPF: 'High-Pass Filter (HPF)',
    resistanceLabel: 'Filter Resistor R (kΩ)',
    capacitanceLabel: 'Filter Capacitor C (nF)',
    frequencyLabel: 'Input Signal Frequency f (Hz)',
    inputVoltageLabel: 'Input Amplitude Vin (V_peak)',
    cutoffMetric: 'Cutoff Frequency (fc)',
    reactanceMetric: 'Capacitive Reactance (Xc)',
    gainMetric: 'Output Voltage & Gain',
    gainDbMetric: 'Decibel Gain (dB)',
    phaseMetric: 'Phase Shift (φ)',
    bodePlotTitle: 'Interactive Logarithmic Frequency Response (Bode Plot)',
    oscilloscopeTitle: 'Input Vin(t) vs Output Vout(t) Waveforms',
    passbandRegion: 'Passband (Minimal Attenuation)',
    stopbandRegion: 'Stopband (Rolloff -20 dB/decade)',
    reset: 'Reset Defaults',
    formulaTitle: 'RC Filter Governing Equations',
    formulaLPFText: 'fc = 1 / (2π · R · C)  |  Xc = 1 / (2π · f · C)  |  LPF: Vout = Vin / √(1 + (f/fc)²)  |  φ = -arctan(f/fc)',
    formulaHPFText: 'fc = 1 / (2π · R · C)  |  Xc = 1 / (2π · f · C)  |  HPF: Vout = Vin · (f/fc) / √(1 + (f/fc)²)  |  φ = 90° - arctan(f/fc)'
  },
  hi: {
    title: 'आरसी फिल्टर आवृत्ति अनुक्रिया एवं बोडे प्लॉट लैब',
    subtitle: 'आरसी लो-पास (LPF) एवं हाई-पास (HPF) फिल्टर की आवृत्ति अनुक्रिया का अध्ययन करें। कटऑफ आवृत्ति (fc), डेसिबल गेन (dB), प्रतिघात (Xc) और कलांतर (Phase Shift) का सजीव ग्राफ देखें।',
    filterLPF: 'लो-पास फिल्टर (LPF)',
    filterHPF: 'हाई-पास फिल्टर (HPF)',
    resistanceLabel: 'फिल्टर प्रतिरोध R (kΩ)',
    capacitanceLabel: 'फिल्टर धारिता C (nF)',
    frequencyLabel: 'इनपुट सिग्नल आवृत्ति f (Hz)',
    inputVoltageLabel: 'इनपुट आयाम Vin (V_peak)',
    cutoffMetric: 'कटऑफ आवृत्ति (fc)',
    reactanceMetric: 'धारितीय प्रतिघात (Xc)',
    gainMetric: 'आउटपुट वोल्टेज एवं गेन',
    gainDbMetric: 'डेसिबल गेन (dB)',
    phaseMetric: 'कलांतर (Phase Shift φ)',
    bodePlotTitle: 'लघुगणकीय आवृत्ति अनुक्रिया वक्र (Bode Plot)',
    oscilloscopeTitle: 'इनपुट Vin(t) बनाम आउटपुट Vout(t) तरंगरुप',
    passbandRegion: 'पासबैंड (न्यूनतम क्षीणन)',
    stopbandRegion: 'स्टॉपबैंड (-20 dB/decade रोलऑफ)',
    reset: 'डिफ़ॉल्ट रीसेट',
    formulaTitle: 'आरसी फिल्टर के मुख्य समीकरण',
    formulaLPFText: 'fc = 1 / (2π · R · C)  |  Xc = 1 / (2π · f · C)  |  LPF: Vout = Vin / √(1 + (f/fc)²)  |  φ = -arctan(f/fc)',
    formulaHPFText: 'fc = 1 / (2π · R · C)  |  Xc = 1 / (2π · f · C)  |  HPF: Vout = Vin · (f/fc) / √(1 + (f/fc)²)  |  φ = 90° - arctan(f/fc)'
  },
  bn: {
    title: 'আরসি ফিল্টার কম্পাঙ্ক রেসপন্স ও বোড প্লট ল্যাব',
    subtitle: 'প্যাসিভ আরসি লো-পাস (LPF) ও হাই-পাস (HPF) ফিল্টারের কম্পাঙ্ক রেসপন্স অনুসন্ধান করুন। কাট-অফ কম্পাঙ্ক (fc), ডেসিবেল গেইন (dB), ক্যাপাসিটিভ রিঅ্যাক্ট্যান্স (Xc) এবং ফেজ শিফট লাইভ পর্যবেক্ষণ করুন।',
    filterLPF: 'লো-পাস ফিল্টার (LPF)',
    filterHPF: 'হাই-পাস ফিল্টার (HPF)',
    resistanceLabel: 'ফিল্টার রোধ R (kΩ)',
    capacitanceLabel: 'ফিল্টার ক্যাপাসিটর C (nF)',
    frequencyLabel: 'ইনপুট সিগন্যাল কম্পাঙ্ক f (Hz)',
    inputVoltageLabel: 'ইনপুট বিস্তার Vin (V_peak)',
    cutoffMetric: 'কাট-অফ কম্পাঙ্ক (fc)',
    reactanceMetric: 'ক্যাপাসিটিভ রিঅ্যাক্ট্যান্স (Xc)',
    gainMetric: 'আউটপুট ভোল্টেজ ও গেইন',
    gainDbMetric: 'ডেসিবেল গেইন (dB)',
    phaseMetric: 'ফেজ শিফট (φ)',
    bodePlotTitle: 'লগারিদমিক ফ্রিকোয়েন্সি রেসপন্স (Bode Plot)',
    oscilloscopeTitle: 'ইনপুট Vin(t) বনাম আউটপুট Vout(t) ওয়েভফর্ম',
    passbandRegion: 'পাসব্যান্ড (সর্বনিম্ন অপচয়)',
    stopbandRegion: 'স্টপব্যান্ড (-২০ dB/decade রোল-অফ)',
    reset: 'ডিফল্ট রিসেট',
    formulaTitle: 'আরসি ফিল্টার সমীকরণসমূহ',
    formulaLPFText: 'fc = 1 / (2π · R · C)  |  Xc = 1 / (2π · f · C)  |  LPF: Vout = Vin / √(1 + (f/fc)²)  |  φ = -arctan(f/fc)',
    formulaHPFText: 'fc = 1 / (2π · R · C)  |  Xc = 1 / (2π · f · C)  |  HPF: Vout = Vin · (f/fc) / √(1 + (f/fc)²)  |  φ = ৯০° - arctan(f/fc)'
  }
};

export const RCFilterFrequencyResponseAnimation: React.FC<RCFilterFrequencyResponseAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const resId = useId();
  const capId = useId();
  const freqId = useId();
  const voltId = useId();

  // State
  const [filterType, setFilterType] = useState<'lpf' | 'hpf'>('lpf');
  const [resistanceK, setResistanceK] = useState<number>(10); // 10 kΩ
  const [capacitanceNf, setCapacitanceNf] = useState<number>(100); // 100 nF = 0.1 µF
  const [frequencyHz, setFrequencyHz] = useState<number>(159); // ~159 Hz
  const [vinPeak, setVinPeak] = useState<number>(5.0); // 5 V peak

  // Calculations
  const rOhms = resistanceK * 1e3;
  const cFarads = capacitanceNf * 1e-9;
  const cutoffFreqHz = 1 / (2 * Math.PI * rOhms * cFarads);
  const xcOhms = 1 / (2 * Math.PI * frequencyHz * cFarads);

  // Ratio f / fc
  const ratio = frequencyHz / cutoffFreqHz;

  let gainLinear = 0;
  let phaseDeg = 0;

  if (filterType === 'lpf') {
    gainLinear = 1 / Math.sqrt(1 + Math.pow(ratio, 2));
    phaseDeg = -(Math.atan(ratio) * 180) / Math.PI;
  } else {
    gainLinear = ratio / Math.sqrt(1 + Math.pow(ratio, 2));
    phaseDeg = 90 - (Math.atan(ratio) * 180) / Math.PI;
  }

  const voutPeak = vinPeak * gainLinear;
  const gainDb = 20 * Math.log10(Math.max(1e-4, gainLinear));

  const handleReset = () => {
    setFilterType('lpf');
    setResistanceK(10);
    setCapacitanceNf(100);
    setFrequencyHz(159);
    setVinPeak(5.0);
  };

  // Bode Plot Data Generation (Log scale from 1 Hz to 100 kHz)
  const fMinLog = 0; // 10^0 = 1 Hz
  const fMaxLog = 5; // 10^5 = 100 kHz
  const plotW = 420;
  const plotH = 140;
  const plotPadLeft = 45;
  const plotPadTop = 15;

  const bodePoints: string[] = [];
  const numBodeSteps = 100;

  for (let i = 0; i <= numBodeSteps; i++) {
    const logF = fMinLog + (i / numBodeSteps) * (fMaxLog - fMinLog);
    const fVal = Math.pow(10, logF);
    const rVal = fVal / cutoffFreqHz;

    let gLin = 0;
    if (filterType === 'lpf') {
      gLin = 1 / Math.sqrt(1 + Math.pow(rVal, 2));
    } else {
      gLin = rVal / Math.sqrt(1 + Math.pow(rVal, 2));
    }
    const gDb = 20 * Math.log10(Math.max(1e-4, gLin)); // 0 dB to -40 dB range
    const clampedDb = Math.max(-40, Math.min(0, gDb));

    const x = plotPadLeft + (i / numBodeSteps) * plotW;
    const y = plotPadTop + (Math.abs(clampedDb) / 40) * plotH;

    bodePoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }

  // Operating point on Bode plot
  const currentLogF = Math.log10(Math.max(1, frequencyHz));
  const opX = plotPadLeft + ((currentLogF - fMinLog) / (fMaxLog - fMinLog)) * plotW;
  const opY = plotPadTop + (Math.abs(Math.max(-40, Math.min(0, gainDb))) / 40) * plotH;

  // Cutoff point on Bode plot
  const cutoffLogF = Math.log10(Math.max(1, cutoffFreqHz));
  const fcX = plotPadLeft + ((cutoffLogF - fMinLog) / (fMaxLog - fMinLog)) * plotW;
  const fcY = plotPadTop + (3 / 40) * plotH; // -3dB point

  // Waveform visualization points
  const waveW = 420;
  const waveH = 100;
  const inWavePoints: string[] = [];
  const outWavePoints: string[] = [];
  const phaseRad = (phaseDeg * Math.PI) / 180;

  for (let i = 0; i <= 80; i++) {
    const x = plotPadLeft + (i / 80) * waveW;
    const angle = (i / 80) * 4 * Math.PI; // 2 full cycles
    const yIn = 15 + waveH / 2 - Math.sin(angle) * (waveH / 2.5);
    const yOut = 15 + waveH / 2 - Math.sin(angle + phaseRad) * (waveH / 2.5) * gainLinear;
    inWavePoints.push(`${x.toFixed(1)},${yIn.toFixed(1)}`);
    outWavePoints.push(`${x.toFixed(1)},${yOut.toFixed(1)}`);
  }

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      formulaText={filterType === 'lpf' ? t.formulaLPFText : t.formulaHPFText}
      extraHeaderActions={
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setFilterType('lpf')}
            className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
              filterType === 'lpf'
                ? 'bg-cyan-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.filterLPF}
          </button>
          <button
            onClick={() => setFilterType('hpf')}
            className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
              filterType === 'hpf'
                ? 'bg-purple-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.filterHPF}
          </button>
        </div>
      }
    >
      {/* Parameter Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={resId} className="text-slate-300 font-semibold">{t.resistanceLabel}</label>
            <span className="font-mono text-cyan-400 font-bold">{resistanceK} kΩ</span>
          </div>
          <input
            id={resId}
            type="range"
            min="1"
            max="100"
            step="1"
            value={resistanceK}
            onChange={(e) => setResistanceK(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={capId} className="text-slate-300 font-semibold">{t.capacitanceLabel}</label>
            <span className="font-mono text-emerald-400 font-bold">{capacitanceNf} nF</span>
          </div>
          <input
            id={capId}
            type="range"
            min="1"
            max="1000"
            step="5"
            value={capacitanceNf}
            onChange={(e) => setCapacitanceNf(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={freqId} className="text-slate-300 font-semibold">{t.frequencyLabel}</label>
            <span className="font-mono text-amber-400 font-bold">
              {frequencyHz < 1000 ? `${frequencyHz} Hz` : `${(frequencyHz / 1000).toFixed(2)} kHz`}
            </span>
          </div>
          <input
            id={freqId}
            type="range"
            min="10"
            max="20000"
            step="10"
            value={frequencyHz}
            onChange={(e) => setFrequencyHz(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={voltId} className="text-slate-300 font-semibold">{t.inputVoltageLabel}</label>
            <span className="font-mono text-purple-400 font-bold">{vinPeak.toFixed(1)} V</span>
          </div>
          <input
            id={voltId}
            type="range"
            min="1.0"
            max="10.0"
            step="0.5"
            value={vinPeak}
            onChange={(e) => setVinPeak(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
          />
        </div>
      </div>

      {/* Real-time Computed Filter Performance Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <div className="bg-slate-950 p-3 rounded-xl border border-cyan-900/60 shadow-sm">
          <div className="text-xs text-slate-400 font-medium mb-1">{t.cutoffMetric}</div>
          <div className="text-base sm:text-lg font-bold font-mono text-cyan-300">
            {cutoffFreqHz < 1000 ? `${cutoffFreqHz.toFixed(1)} Hz` : `${(cutoffFreqHz / 1000).toFixed(2)} kHz`}
          </div>
          <div className="text-[10px] text-slate-400">R = Xc at this freq</div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-emerald-900/60 shadow-sm">
          <div className="text-xs text-slate-400 font-medium mb-1">{t.reactanceMetric}</div>
          <div className="text-base sm:text-lg font-bold font-mono text-emerald-300">
            {xcOhms < 1000 ? `${xcOhms.toFixed(1)} Ω` : `${(xcOhms / 1000).toFixed(2)} kΩ`}
          </div>
          <div className="text-[10px] text-slate-400">At f = {frequencyHz} Hz</div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-amber-900/60 shadow-sm">
          <div className="text-xs text-slate-400 font-medium mb-1">{t.gainMetric}</div>
          <div className="text-base sm:text-lg font-bold font-mono text-amber-300">
            {voutPeak.toFixed(2)} V <span className="text-xs font-normal text-slate-400">({(gainLinear * 100).toFixed(1)}%)</span>
          </div>
          <div className="text-[10px] text-slate-400">Vin = {vinPeak.toFixed(1)} V</div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/60 shadow-sm">
          <div className="text-xs text-slate-400 font-medium mb-1">{t.gainDbMetric}</div>
          <div className={`text-base sm:text-lg font-bold font-mono ${gainDb >= -3 ? 'text-emerald-400' : 'text-purple-300'}`}>
            {gainDb.toFixed(2)} dB
          </div>
          <div className="text-[10px] text-slate-400">
            {gainDb >= -3 ? t.passbandRegion : t.stopbandRegion}
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-blue-900/60 shadow-sm col-span-2 sm:col-span-1">
          <div className="text-xs text-slate-400 font-medium mb-1">{t.phaseMetric}</div>
          <div className="text-base sm:text-lg font-bold font-mono text-blue-300">
            {phaseDeg.toFixed(1)}°
          </div>
          <div className="text-[10px] text-slate-400">
            {filterType === 'lpf' ? 'Lags input signal' : 'Leads input signal'}
          </div>
        </div>
      </div>

      {/* Interactive Bode Frequency Response Plot */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Filter className="w-4 h-4 text-cyan-400" />
            {t.bodePlotTitle}
          </h4>
          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400"></span>Magnitude Curve</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-pink-400"></span>fc (-3dB)</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400"></span>Current Op Point</span>
          </div>
        </div>

        <div className="w-full flex justify-center py-2 overflow-x-auto">
          <svg viewBox="0 0 490 180" className="w-full max-w-2xl h-auto select-none bg-slate-900/90 rounded-lg border border-slate-800">
            {/* Horizontal dB Grid lines */}
            {[0, -10, -20, -30, -40].map((db) => {
              const y = plotPadTop + (Math.abs(db) / 40) * plotH;
              return (
                <g key={`db-${db}`}>
                  <line x1={plotPadLeft} y1={y} x2={plotPadLeft + plotW} y2={y} stroke="#1e293b" strokeWidth="0.8" />
                  <text x={plotPadLeft - 6} y={y + 3} fill="#64748b" fontSize="9" textAnchor="end" fontFamily="monospace">{db}dB</text>
                </g>
              );
            })}

            {/* Vertical Frequency Decade lines: 1Hz, 10Hz, 100Hz, 1kHz, 10kHz, 100kHz */}
            {[0, 1, 2, 3, 4, 5].map((dec) => {
              const x = plotPadLeft + (dec / 5) * plotW;
              const label = dec === 0 ? '1Hz' : dec === 1 ? '10Hz' : dec === 2 ? '100Hz' : dec === 3 ? '1kHz' : dec === 4 ? '10kHz' : '100k';
              return (
                <g key={`dec-${dec}`}>
                  <line x1={x} y1={plotPadTop} x2={x} y2={plotPadTop + plotH} stroke="#1e293b" strokeWidth="0.8" />
                  <text x={x} y={plotPadTop + plotH + 14} fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="monospace">{label}</text>
                </g>
              );
            })}

            {/* -3dB Cutoff Reference Line */}
            <line
              x1={plotPadLeft}
              y1={plotPadTop + (3 / 40) * plotH}
              x2={plotPadLeft + plotW}
              y2={plotPadTop + (3 / 40) * plotH}
              stroke="#f472b6"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            {/* Bode Curve Polyline */}
            <polyline
              points={bodePoints.join(' ')}
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2.5"
            />

            {/* Cutoff Frequency marker */}
            {fcX >= plotPadLeft && fcX <= plotPadLeft + plotW && (
              <g transform={`translate(${fcX}, ${fcY})`}>
                <circle cx="0" cy="0" r="4" fill="#f472b6" />
                <line x1="0" y1="0" x2="0" y2={plotH - (3 / 40) * plotH} stroke="#f472b6" strokeWidth="1" strokeDasharray="2 2" />
                <text x="5" y="-5" fill="#f472b6" fontSize="9" fontWeight="bold" fontFamily="monospace">
                  fc = {cutoffFreqHz < 1000 ? `${cutoffFreqHz.toFixed(0)}Hz` : `${(cutoffFreqHz / 1000).toFixed(1)}kHz`} (-3dB)
                </text>
              </g>
            )}

            {/* Current Operating Frequency marker */}
            {opX >= plotPadLeft && opX <= plotPadLeft + plotW && (
              <g transform={`translate(${opX}, ${opY})`}>
                <circle cx="0" cy="0" r="5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                <text x="6" y={opY > 50 ? -6 : 14} fill="#fbbf24" fontSize="9" fontWeight="bold" fontFamily="monospace">
                  {frequencyHz < 1000 ? `${frequencyHz}Hz` : `${(frequencyHz / 1000).toFixed(2)}kHz`} ({gainDb.toFixed(1)}dB)
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* Input vs Output Waveform Oscilloscope */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold text-slate-300">
          <span className="flex items-center gap-1.5 uppercase tracking-wider">
            <Activity className="w-4 h-4 text-emerald-400" />
            {t.oscilloscopeTitle}
          </span>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span className="text-cyan-400">Vin = {vinPeak.toFixed(1)}V</span>
            <span className="text-emerald-400">Vout = {voutPeak.toFixed(2)}V (φ = {phaseDeg.toFixed(0)}°)</span>
          </div>
        </div>

        <div className="w-full flex justify-center py-1 overflow-x-auto">
          <svg viewBox="0 0 490 130" className="w-full max-w-2xl h-auto select-none bg-slate-900/90 rounded-lg border border-slate-800">
            {/* Center line */}
            <line x1={plotPadLeft} y1="65" x2={plotPadLeft + waveW} y2="65" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
            {/* Vin Waveform (Cyan) */}
            <polyline points={inWavePoints.join(' ')} fill="none" stroke="#06b6d4" strokeWidth="2" opacity="0.6" />
            {/* Vout Waveform (Emerald) */}
            <polyline points={outWavePoints.join(' ')} fill="none" stroke="#10b981" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
