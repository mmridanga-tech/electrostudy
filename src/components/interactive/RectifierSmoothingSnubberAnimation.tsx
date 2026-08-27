import React, { useState, useId } from 'react';
import { Waves, Zap, Activity, Gauge, Sliders, ShieldAlert } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface RectifierSmoothingSnubberAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'DC Power Supply Filter Smoothing & Snubber Lab',
    subtitle: 'Simulate AC to DC full-wave rectifier ripple smoothing filters and snubber protection circuits. Adjust filter capacitance, load DC current, and frequency to inspect peak-to-peak ripple voltage (Vr) and ripple factor.',
    capacitanceLabel: 'Smoothing Filter Capacitor C (µF)',
    loadCurrentLabel: 'DC Load Current Idc (mA)',
    acFrequencyLabel: 'Mains Supply Frequency f (Hz)',
    peakVoltageLabel: 'AC Peak Voltage Vm (Volts)',
    rippleMetric: 'Peak-to-Peak Ripple Vr (V_pp)',
    dcVoltageMetric: 'Average DC Output Vdc (V)',
    rippleFactorMetric: 'Ripple Factor (γ)',
    conductionAngleMetric: 'Diode Conduction Angle',
    waveformTitle: 'Rectified Unfiltered vs. Capacitor Filtered DC Waveform',
    reset: 'Reset Defaults',
    formulaTitle: 'Capacitor Smoothing Filter Equations',
    formulaText: 'Vr(pp) = Idc / (2 · f · C)  |  Vdc = Vm - (Vr / 2)  |  Ripple Factor γ = Vr(rms) / Vdc = 1 / (4√3 · f · R_L · C)'
  },
  hi: {
    title: 'डीसी पावर सप्लाई फिल्टर स्मूथिंग एवं स्नबर प्रयोगशाला',
    subtitle: 'फुल-वेव रेक्टिफायर रिपल स्मूथिंग फिल्टर का अनुकरण करें। फिल्टर धारिता, लोड धारा एवं आवृत्ति बदलकर पीक-टू-पीक रिपल वोल्टेज (Vr), डीसी आउटपुट एवं रिपल फैक्टर का विश्लेषण करें।',
    capacitanceLabel: 'स्मूथिंग फिल्टर धारिता C (µF)',
    loadCurrentLabel: 'डीसी लोड धारा Idc (mA)',
    acFrequencyLabel: 'मेन्स एसी आवृत्ति f (Hz)',
    peakVoltageLabel: 'एसी पीक वोल्टेज Vm (Volts)',
    rippleMetric: 'पीक-टू-पीक रिपल Vr (V_pp)',
    dcVoltageMetric: 'औसत डीसी आउटपुट Vdc (V)',
    rippleFactorMetric: 'रिपल फैक्टर (γ)',
    conductionAngleMetric: 'डायोड चालन कोण (Conduction)',
    waveformTitle: 'अपरिशोधित बनाम कैपेसिटर द्वारा स्मूथ किया गया डीसी तरंगरुप',
    reset: 'डिफ़ॉल्ट रीसेट',
    formulaTitle: 'कैपेसिटर फिल्टर के मुख्य सूत्र',
    formulaText: 'Vr(pp) = Idc / (2 · f · C)  |  Vdc = Vm - (Vr / 2)  |  रिपल फैक्टर γ = 1 / (4√3 · f · R_L · C)'
  },
  bn: {
    title: 'ডিসি পাওয়ার সাপ্লাই ফিল্টার স্মুদিং ও স্নাবার ল্যাব',
    subtitle: 'ফুল-ওয়েভ রেকটিফায়ারের রিপল ফিল্টারিং ও স্মুদিং সিমুলেশন করুন। ফিল্টার ক্যাপাসিট্যান্স, লোড কারেন্ট এবং ফ্রিকোয়েন্সি পরিবর্তন করে পিক-টু-পিক রিপল ভোল্টেজ (Vr) ও রিপল ফ্যাক্টর বিশ্লেষণ করুন।',
    capacitanceLabel: 'স্মুদিং ফিল্টার ক্যাপাসিট্যান্স C (µF)',
    loadCurrentLabel: 'ডিসি লোড কারেন্ট Idc (mA)',
    acFrequencyLabel: 'মেইনস এসি কম্পাঙ্ক f (Hz)',
    peakVoltageLabel: 'এসি পিক ভোল্টেজ Vm (Volts)',
    rippleMetric: 'পিক-টু-পিক রিপল Vr (V_pp)',
    dcVoltageMetric: 'গড় ডিসি আউটপুট Vdc (V)',
    rippleFactorMetric: 'রিপল ফ্যাক্টর (γ)',
    conductionAngleMetric: 'ডায়োড কন্ডাকশন কোণ',
    waveformTitle: 'রেকটিফাইড পালসেটিং বনাম ক্যাপাসিটর ফিল্টারড ডিসি ওয়েভফর্ম',
    reset: 'ডিফল্ট রিসেট',
    formulaTitle: 'ফিল্টার ক্যাপাসিটর সমীকরণসমূহ',
    formulaText: 'Vr(pp) = Idc / (2 · f · C)  |  Vdc = Vm - (Vr / 2)  |  রিপল ফ্যাক্টর γ = ১ / (৪√৩ · f · R_L · C)'
  }
};

export const RectifierSmoothingSnubberAnimation: React.FC<RectifierSmoothingSnubberAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const capId = useId();
  const currentId = useId();
  const freqId = useId();
  const voltId = useId();

  // State
  const [capacitanceUf, setCapacitanceUf] = useState<number>(470); // 470 µF
  const [loadCurrentMa, setLoadCurrentMa] = useState<number>(200); // 200 mA
  const [frequencyHz, setFrequencyHz] = useState<number>(50); // 50 Hz (100 Hz ripple in full wave)
  const [peakVoltageVm, setPeakVoltageVm] = useState<number>(18); // 18 V peak

  // Mathematical Calculations
  const cFarads = capacitanceUf * 1e-6;
  const loadAmps = loadCurrentMa * 1e-3;
  const rippleFreqHz = 2 * frequencyHz; // 100 Hz for 50Hz full-wave

  // Vr(pp) = Idc / (2 * f * C)
  const vr_pp = Math.min(peakVoltageVm * 0.9, (loadAmps / (rippleFreqHz * cFarads)));
  const vdc = Math.max(0, peakVoltageVm - vr_pp / 2);
  const vr_rms = vr_pp / (2 * Math.sqrt(3));
  const rippleFactor = vdc > 0 ? (vr_rms / vdc) * 100 : 0; // in %

  // Diode conduction angle approx
  const condAngleDeg = Math.acos(Math.max(0, Math.min(1, 1 - vr_pp / peakVoltageVm))) * (180 / Math.PI);

  const handleReset = () => {
    setCapacitanceUf(470);
    setLoadCurrentMa(200);
    setFrequencyHz(50);
    setPeakVoltageVm(18);
  };

  // Waveform SVG points (2 full AC cycles = 4 full-wave pulses)
  const plotW = 440;
  const plotH = 130;
  const padLeft = 45;
  const padTop = 15;

  const rawWavePoints: string[] = [];
  const filteredWavePoints: string[] = [];
  const numSteps = 120;

  for (let i = 0; i <= numSteps; i++) {
    const frac = i / numSteps;
    const x = padLeft + frac * plotW;
    const angle = frac * 4 * Math.PI; // 4 half cycles
    const rawVal = Math.abs(Math.sin(angle)) * peakVoltageVm;

    // Filtered capacitor discharge ramp
    // The capacitor charges at peak and discharges linearly: V(t) = Vm - (Vr * phase_within_pulse)
    const pulseFrac = (angle % Math.PI) / Math.PI;
    let filteredVal = 0;
    if (rawVal >= peakVoltageVm - vr_pp * pulseFrac) {
      filteredVal = rawVal;
    } else {
      filteredVal = peakVoltageVm - vr_pp * pulseFrac;
    }

    const yRaw = padTop + plotH - (rawVal / (peakVoltageVm * 1.15)) * plotH;
    const yFilt = padTop + plotH - (filteredVal / (peakVoltageVm * 1.15)) * plotH;

    rawWavePoints.push(`${x.toFixed(1)},${yRaw.toFixed(1)}`);
    filteredWavePoints.push(`${x.toFixed(1)},${yFilt.toFixed(1)}`);
  }

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      formulaText={t.formulaText}
    >
      {/* Parameter Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={capId} className="text-slate-300 font-semibold">{t.capacitanceLabel}</label>
            <span className="font-mono text-cyan-400 font-bold">{capacitanceUf} µF</span>
          </div>
          <input
            id={capId}
            type="range"
            min="50"
            max="4700"
            step="50"
            value={capacitanceUf}
            onChange={(e) => setCapacitanceUf(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={currentId} className="text-slate-300 font-semibold">{t.loadCurrentLabel}</label>
            <span className="font-mono text-emerald-400 font-bold">{loadCurrentMa} mA</span>
          </div>
          <input
            id={currentId}
            type="range"
            min="10"
            max="1000"
            step="10"
            value={loadCurrentMa}
            onChange={(e) => setLoadCurrentMa(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={freqId} className="text-slate-300 font-semibold">{t.acFrequencyLabel}</label>
            <span className="font-mono text-amber-400 font-bold">{frequencyHz} Hz</span>
          </div>
          <input
            id={freqId}
            type="range"
            min="50"
            max="400"
            step="10"
            value={frequencyHz}
            onChange={(e) => setFrequencyHz(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={voltId} className="text-slate-300 font-semibold">{t.peakVoltageLabel}</label>
            <span className="font-mono text-purple-400 font-bold">{peakVoltageVm} V</span>
          </div>
          <input
            id={voltId}
            type="range"
            min="5"
            max="50"
            step="1"
            value={peakVoltageVm}
            onChange={(e) => setPeakVoltageVm(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
          />
        </div>
      </div>

      {/* Real-time Filter Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-950 p-3 rounded-xl border border-cyan-900/60 shadow-sm">
          <div className="text-xs text-slate-400 font-medium mb-1">{t.rippleMetric}</div>
          <div className="text-base sm:text-lg font-bold font-mono text-cyan-300">
            {vr_pp.toFixed(2)} V
          </div>
          <div className="text-[10px] text-slate-400">Peak-to-Peak</div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-emerald-900/60 shadow-sm">
          <div className="text-xs text-slate-400 font-medium mb-1">{t.dcVoltageMetric}</div>
          <div className="text-base sm:text-lg font-bold font-mono text-emerald-300">
            {vdc.toFixed(2)} V
          </div>
          <div className="text-[10px] text-slate-400">Vm - Vr/2</div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-amber-900/60 shadow-sm">
          <div className="text-xs text-slate-400 font-medium mb-1">{t.rippleFactorMetric}</div>
          <div className={`text-base sm:text-lg font-bold font-mono ${rippleFactor < 5 ? 'text-emerald-400' : rippleFactor < 15 ? 'text-amber-400' : 'text-rose-400'}`}>
            {rippleFactor.toFixed(2)}%
          </div>
          <div className="text-[10px] text-slate-400">
            {rippleFactor < 5 ? 'High Quality (<5%)' : 'Needs more filtering'}
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/60 shadow-sm">
          <div className="text-xs text-slate-400 font-medium mb-1">{t.conductionAngleMetric}</div>
          <div className="text-base sm:text-lg font-bold font-mono text-purple-300">
            {condAngleDeg.toFixed(1)}°
          </div>
          <div className="text-[10px] text-slate-400">Diode duty pulse</div>
        </div>
      </div>

      {/* Full-Wave Rectified vs Filtered Waveform */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Waves className="w-4 h-4 text-cyan-400" />
            {t.waveformTitle}
          </h4>
          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-3">
            <span className="flex items-center gap-1"><span className="w-2.5 h-0.5 bg-slate-500 inline-block"></span>Raw Rectified</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-0.5 bg-cyan-400 inline-block"></span>Capacitor Smoothed</span>
          </div>
        </div>

        <div className="w-full flex justify-center py-2 overflow-x-auto">
          <svg viewBox="0 0 500 170" className="w-full max-w-2xl h-auto select-none bg-slate-900/90 rounded-lg border border-slate-800">
            {/* Grid */}
            <line x1={padLeft} y1={padTop} x2={padLeft} y2={padTop + plotH} stroke="#475569" strokeWidth="1.5" />
            <line x1={padLeft} y1={padTop + plotH} x2={padLeft + plotW} y2={padTop + plotH} stroke="#475569" strokeWidth="1.5" />

            <text x={padLeft - 6} y={padTop + 6} fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">{peakVoltageVm}V</text>
            <text x={padLeft - 6} y={padTop + plotH} fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="monospace">0V</text>

            {/* Average DC Line */}
            <line
              x1={padLeft}
              y1={padTop + plotH - (vdc / (peakVoltageVm * 1.15)) * plotH}
              x2={padLeft + plotW}
              y2={padTop + plotH - (vdc / (peakVoltageVm * 1.15)) * plotH}
              stroke="#fbbf24"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <text
              x={padLeft + plotW - 10}
              y={padTop + plotH - (vdc / (peakVoltageVm * 1.15)) * plotH - 6}
              fill="#fbbf24"
              fontSize="9"
              fontWeight="bold"
              fontFamily="monospace"
              textAnchor="end"
            >
              Vdc = {vdc.toFixed(1)}V
            </text>

            {/* Raw Rectified Pulses (Gray Dashed) */}
            <polyline points={rawWavePoints.join(' ')} fill="none" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Smoothed DC Output (Cyan Solid) */}
            <polyline points={filteredWavePoints.join(' ')} fill="none" stroke="#06b6d4" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
