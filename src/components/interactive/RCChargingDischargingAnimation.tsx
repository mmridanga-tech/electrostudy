import React, { useState, useEffect, useRef, useId } from 'react';
import { Play, Pause, RotateCcw, Activity, Zap, Gauge, ArrowRight, Layers, Clock } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface RCChargingDischargingAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'RC Circuit Transient (Charging & Discharging) Lab',
    subtitle: 'Simulate real-time charging and discharging transients of an RC series circuit. Observe exponential voltage growth and decay, current surge, and time constant (τ = R · C) behavior on an animated oscilloscope display.',
    chargeMode: 'Charging State (Switch to Vs)',
    dischargeMode: 'Discharging State (Switch to Ground)',
    resistanceLabel: 'Series Resistance R (kΩ)',
    capacitanceLabel: 'Capacitance C (µF)',
    supplyVoltageLabel: 'Supply Voltage Vs (Volts)',
    timeConstantMetric: 'Time Constant (τ = R · C)',
    instantVoltageMetric: 'Capacitor Voltage vc(t)',
    instantCurrentMetric: 'Transient Current i(t)',
    energyMetric: 'Instant Energy E(t)',
    play: 'Run Transient',
    pause: 'Pause',
    reset: 'Reset t = 0',
    oscilloscopeTitle: 'Live Dual-Trace Transient Oscilloscope [vc(t) & i(t)]',
    timeProgress: 'Elapsed Time t:',
    tauMarkersTitle: 'Standard Time Constant Benchmarks',
    chargingEquation: 'vc(t) = Vs(1 - e^(-t/τ))  |  i(t) = (Vs/R) · e^(-t/τ)',
    dischargingEquation: 'vc(t) = V₀ · e^(-t/τ)  |  i(t) = -(V₀/R) · e^(-t/τ)',
    formulaTitle: 'RC Transient Mathematical Physics',
    formulaText: 'τ = R · C  |  At 1τ: 63.2% Charged / 36.8% Remaining  |  At 5τ: 99.3% Steady-State'
  },
  hi: {
    title: 'आरसी परिपथ ट्रांजिएंट (आवेशन एवं विसर्जन) प्रयोगशाला',
    subtitle: 'आरसी परिपथ में कैपेसिटर के चार्जिंग एवं डिस्चार्जिंग ट्रांजिएंट का सजीव अनुकरण देखें। समय नियतांक (τ = RC), चरघातांकी वोल्टेज वक्र और धारा उछाल को ऑसिलोस्कोप पर मापें।',
    chargeMode: 'चार्जिंग अवस्था (सप्लाई Vs से जुड़ा)',
    dischargeMode: 'डिस्चार्जिंग अवस्था (ग्राउंड से जुड़ा)',
    resistanceLabel: 'श्रेणी प्रतिरोध R (kΩ)',
    capacitanceLabel: 'धारिता C (µF)',
    supplyVoltageLabel: 'सप्लाई वोल्टेज Vs (Volts)',
    timeConstantMetric: 'समय नियतांक (τ = R · C)',
    instantVoltageMetric: 'तात्कालिक वोल्टेज vc(t)',
    instantCurrentMetric: 'तात्कालिक धारा i(t)',
    energyMetric: 'संचित ऊर्जा E(t)',
    play: 'चलाएं (Run)',
    pause: 'रोकें (Pause)',
    reset: 'रीसेट (t = 0)',
    oscilloscopeTitle: 'लाइव डुअल-ट्रेस ट्रांजिएंट ऑसिलोस्कोप [vc(t) एवं i(t)]',
    timeProgress: 'बीता हुआ समय t:',
    tauMarkersTitle: 'मानक समय नियतांक (Time Constant) बिंदु',
    chargingEquation: 'vc(t) = Vs(1 - e^(-t/τ))  |  i(t) = (Vs/R) · e^(-t/τ)',
    dischargingEquation: 'vc(t) = V₀ · e^(-t/τ)  |  i(t) = -(V₀/R) · e^(-t/τ)',
    formulaTitle: 'आरसी ट्रांजिएंट के गणितीय सूत्र',
    formulaText: 'τ = R · C  |  1τ पर: 63.2% चार्ज / 36.8% शेष  |  5τ पर: 99.3% पूर्ण स्थिर अवस्था'
  },
  bn: {
    title: 'আরসি বর্তনী ট্রানজিয়েন্ট (চার্জিং ও ডিসচার্জিং) ল্যাব',
    subtitle: 'আরসি সার্কিটে ক্যাপাসিটরের চার্জিং ও ডিসচার্জিং এর এক্সপোনেনশিয়াল রেসপন্স সিমুলেশন করুন। টাইম কনস্ট্যান্ট (τ = RC), ভোল্টেজ কার্ভ ও পিক কারেন্ট অসিলোস্কোপে পর্যবেক্ষণ করুন।',
    chargeMode: 'চার্জিং অবস্থা (Vs সাপ্লাই)',
    dischargeMode: 'ডিসচার্জিং অবস্থা (গ্রাউন্ড সংযোগ)',
    resistanceLabel: 'সিরিজ রোধ R (kΩ)',
    capacitanceLabel: 'ক্যাপাসিট্যান্স C (µF)',
    supplyVoltageLabel: 'সাপ্লাই ভোল্টেজ Vs (Volts)',
    timeConstantMetric: 'টাইম কনস্ট্যান্ট (τ = R · C)',
    instantVoltageMetric: 'তাৎক্ষণিক ভোল্টেজ vc(t)',
    instantCurrentMetric: 'তাৎক্ষণিক কারেন্ট i(t)',
    energyMetric: 'সঞ্চিত শক্তি E(t)',
    play: 'চালু করুন',
    pause: 'বিরতি',
    reset: 'রিসেট (t = 0)',
    oscilloscopeTitle: 'লাইভ ডুয়াল-ট্রেস অসিলোস্কোপ [vc(t) ও i(t)]',
    timeProgress: 'অতিবাহিত সময় t:',
    tauMarkersTitle: 'স্ট্যান্ডার্ড টাইম কনস্ট্যান্ট মানসমূহ',
    chargingEquation: 'vc(t) = Vs(1 - e^(-t/τ))  |  i(t) = (Vs/R) · e^(-t/τ)',
    dischargingEquation: 'vc(t) = V₀ · e^(-t/τ)  |  i(t) = -(V₀/R) · e^(-t/τ)',
    formulaTitle: 'আরসি ট্রানজিয়েন্ট সূত্রাবলী',
    formulaText: 'τ = R · C  |  ১τ তে: ৬৩.২% চার্জ / ৩৬.৮% অবশিষ্ট  |  ৫τ তে: ৯৯.৩% স্টেডি-স্টেট'
  }
};

export const RCChargingDischargingAnimation: React.FC<RCChargingDischargingAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const resId = useId();
  const capId = useId();
  const voltId = useId();
  const prefersReducedMotion = useReducedMotion();

  // State
  const [circuitMode, setCircuitMode] = useState<'charging' | 'discharging'>('charging');
  const [resistanceK, setResistanceK] = useState<number>(10); // 10 kΩ
  const [capacitanceUf, setCapacitanceUf] = useState<number>(100); // 100 µF
  const [supplyVoltage, setSupplyVoltage] = useState<number>(12); // 12 V
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [elapsedTime, setElapsedTime] = useState<number>(0); // in seconds

  // Calculations
  const rOhms = resistanceK * 1e3;
  const cFarads = capacitanceUf * 1e-6;
  const tauSeconds = rOhms * cFarads; // tau = R * C in seconds
  const maxTimeWindow = tauSeconds * 6; // Display up to 6 tau

  // Animation frame loop
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsPlaying(false);
      return;
    }

    if (!isPlaying) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      lastTimeRef.current = null;
      return;
    }

    const step = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const dt = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setElapsedTime(prev => {
        const next = prev + dt * 1.0; // 1.0x real time rate
        if (next >= maxTimeWindow) {
          return maxTimeWindow; // halt at max
        }
        return next;
      });

      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPlaying, maxTimeWindow, prefersReducedMotion]);

  // Instantaneous math values at current elapsed time
  let instantVc = 0;
  let instantI_mA = 0;

  if (circuitMode === 'charging') {
    instantVc = supplyVoltage * (1 - Math.exp(-elapsedTime / tauSeconds));
    const currentA = (supplyVoltage / rOhms) * Math.exp(-elapsedTime / tauSeconds);
    instantI_mA = currentA * 1e3;
  } else {
    instantVc = supplyVoltage * Math.exp(-elapsedTime / tauSeconds);
    const currentA = (supplyVoltage / rOhms) * Math.exp(-elapsedTime / tauSeconds);
    instantI_mA = -currentA * 1e3; // negative indicating discharge direction
  }

  const instantEnergy_mJ = 0.5 * cFarads * Math.pow(instantVc, 2) * 1e3;

  const handleModeChange = (mode: 'charging' | 'discharging') => {
    setCircuitMode(mode);
    setElapsedTime(0);
    lastTimeRef.current = null;
    setIsPlaying(true);
  };

  const handleReset = () => {
    setElapsedTime(0);
    lastTimeRef.current = null;
    setIsPlaying(true);
  };

  const handleFullReset = () => {
    setCircuitMode('charging');
    setResistanceK(10);
    setCapacitanceUf(100);
    setSupplyVoltage(12);
    setElapsedTime(0);
    lastTimeRef.current = null;
    setIsPlaying(true);
  };

  // Generate SVG curve points for Oscilloscope (0 to 6 tau)
  const svgWidth = 460;
  const svgHeight = 160;
  const paddingLeft = 45;
  const paddingBottom = 25;
  const graphW = svgWidth - paddingLeft - 15;
  const graphH = svgHeight - paddingBottom - 15;

  const numPoints = 80;
  const vcPoints: string[] = [];
  const iPoints: string[] = [];

  for (let i = 0; i <= numPoints; i++) {
    const tVal = (i / numPoints) * maxTimeWindow;
    const x = paddingLeft + (tVal / maxTimeWindow) * graphW;

    let vVal = 0;
    let iVal = 0;
    if (circuitMode === 'charging') {
      vVal = supplyVoltage * (1 - Math.exp(-tVal / tauSeconds));
      iVal = (supplyVoltage / rOhms) * Math.exp(-tVal / tauSeconds) * 1e3; // mA
    } else {
      vVal = supplyVoltage * Math.exp(-tVal / tauSeconds);
      iVal = (supplyVoltage / rOhms) * Math.exp(-tVal / tauSeconds) * 1e3;
    }

    const yV = 15 + graphH - (vVal / supplyVoltage) * graphH;
    const maxI_mA = (supplyVoltage / rOhms) * 1e3;
    const yI = 15 + graphH - (iVal / maxI_mA) * graphH;

    vcPoints.push(`${x.toFixed(1)},${yV.toFixed(1)}`);
    iPoints.push(`${x.toFixed(1)},${yI.toFixed(1)}`);
  }

  const currentX = paddingLeft + Math.min(graphW, (elapsedTime / maxTimeWindow) * graphW);
  const currentY_V = 15 + graphH - (instantVc / supplyVoltage) * graphH;

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleFullReset}
      resetLabel={t.reset}
      formulaText={circuitMode === 'charging' ? t.chargingEquation : t.dischargingEquation}
      extraHeaderActions={
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => handleModeChange('charging')}
            className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
              circuitMode === 'charging'
                ? 'bg-cyan-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.chargeMode}
          </button>
          <button
            onClick={() => handleModeChange('discharging')}
            className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
              circuitMode === 'discharging'
                ? 'bg-amber-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {t.dischargeMode}
          </button>
        </div>
      }
    >
      {/* Parameter Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
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
            onChange={(e) => {
              setResistanceK(Number(e.target.value));
              setElapsedTime(0);
            }}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={capId} className="text-slate-300 font-semibold">{t.capacitanceLabel}</label>
            <span className="font-mono text-emerald-400 font-bold">{capacitanceUf} µF</span>
          </div>
          <input
            id={capId}
            type="range"
            min="10"
            max="1000"
            step="10"
            value={capacitanceUf}
            onChange={(e) => {
              setCapacitanceUf(Number(e.target.value));
              setElapsedTime(0);
            }}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <label htmlFor={voltId} className="text-slate-300 font-semibold">{t.supplyVoltageLabel}</label>
            <span className="font-mono text-amber-400 font-bold">{supplyVoltage} V</span>
          </div>
          <input
            id={voltId}
            type="range"
            min="1"
            max="48"
            step="1"
            value={supplyVoltage}
            onChange={(e) => {
              setSupplyVoltage(Number(e.target.value));
              setElapsedTime(0);
            }}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
        </div>
      </div>

      {/* Live Measurement Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/60 shadow-sm">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-1">
            <Clock className="w-3.5 h-3.5 text-purple-400" />
            <span>{t.timeConstantMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-purple-300">
            {tauSeconds < 1 ? `${(tauSeconds * 1e3).toFixed(1)} ms` : `${tauSeconds.toFixed(2)} s`}
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-cyan-900/60 shadow-sm">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-1">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.instantVoltageMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-cyan-300">
            {instantVc.toFixed(2)} V
          </div>
          <div className="text-[10px] text-slate-400">
            {((instantVc / supplyVoltage) * 100).toFixed(1)}% of Vs
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-emerald-900/60 shadow-sm">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-1">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.instantCurrentMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-emerald-300">
            {Math.abs(instantI_mA).toFixed(3)} mA
          </div>
          <div className="text-[10px] text-slate-400">
            Peak: {((supplyVoltage / rOhms) * 1e3).toFixed(2)} mA
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-xl border border-amber-900/60 shadow-sm">
          <div className="flex items-center gap-1 text-xs text-slate-400 font-medium mb-1">
            <Gauge className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.energyMetric}</span>
          </div>
          <div className="text-base sm:text-lg font-bold font-mono text-amber-300">
            {instantEnergy_mJ.toFixed(2)} mJ
          </div>
          <div className="text-[10px] text-slate-400">
            Max: {(0.5 * cFarads * Math.pow(supplyVoltage, 2) * 1e3).toFixed(2)} mJ
          </div>
        </div>
      </div>

      {/* Dual Trace Oscilloscope Display */}
      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-cyan-400" />
              {t.oscilloscopeTitle}
            </h4>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="flex items-center gap-1 text-cyan-400">
                <span className="w-2.5 h-0.5 bg-cyan-400 inline-block"></span> vc(t)
              </span>
              <span className="flex items-center gap-1 text-emerald-400">
                <span className="w-2.5 h-0.5 bg-emerald-400 inline-block"></span> i(t)
              </span>
            </div>
          </div>

          {/* Time and Run Controls */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-300 bg-slate-900 px-2 py-1 rounded border border-slate-800">
              {t.timeProgress} <strong className="text-cyan-300 font-bold">{elapsedTime.toFixed(2)}s</strong> / {(elapsedTime / tauSeconds).toFixed(1)}τ
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 bg-cyan-950 hover:bg-cyan-900 border border-cyan-800 text-cyan-300 rounded-lg text-xs flex items-center gap-1"
              title={isPlaying ? t.pause : t.play}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handleReset}
              className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-xs"
              title={t.reset}
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* SVG Oscilloscope Screen */}
        <div className="w-full flex justify-center py-2 overflow-x-auto">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full max-w-2xl h-auto select-none bg-slate-900/90 rounded-lg border border-slate-800">
            {/* Grid Lines */}
            <defs>
              <pattern id="oscGrid" width="40" height="20" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.6" strokeDasharray="1 2" />
              </pattern>
            </defs>
            <rect x={paddingLeft} y="15" width={graphW} height={graphH} fill="url(#oscGrid)" />

            {/* Axes */}
            <line x1={paddingLeft} y1="15" x2={paddingLeft} y2={15 + graphH} stroke="#475569" strokeWidth="1.5" />
            <line x1={paddingLeft} y1={15 + graphH} x2={paddingLeft + graphW} y2={15 + graphH} stroke="#475569" strokeWidth="1.5" />

            {/* Tau Markers on X-Axis */}
            {[1, 2, 3, 4, 5].map((k) => {
              const xPos = paddingLeft + ((k * tauSeconds) / maxTimeWindow) * graphW;
              return (
                <g key={`tau-${k}`}>
                  <line x1={xPos} y1="15" x2={xPos} y2={15 + graphH} stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                  <text x={xPos} y={15 + graphH + 14} fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="monospace">
                    {k}τ
                  </text>
                </g>
              );
            })}

            {/* Y-Axis Labels */}
            <text x={paddingLeft - 6} y="20" fill="#38bdf8" fontSize="9" textAnchor="end" fontFamily="monospace">{supplyVoltage}V</text>
            <text x={paddingLeft - 6} y={15 + graphH / 2} fill="#38bdf8" fontSize="9" textAnchor="end" fontFamily="monospace">{(supplyVoltage / 2).toFixed(1)}V</text>
            <text x={paddingLeft - 6} y={15 + graphH} fill="#38bdf8" fontSize="9" textAnchor="end" fontFamily="monospace">0V</text>

            {/* Full Theoretical Transient Curves */}
            {/* Voltage Curve */}
            <polyline
              points={vcPoints.join(' ')}
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2.5"
              opacity="0.9"
            />
            {/* Current Curve */}
            <polyline
              points={iPoints.join(' ')}
              fill="none"
              stroke="#10b981"
              strokeWidth="1.8"
              strokeDasharray="4 2"
              opacity="0.8"
            />

            {/* Real-time Cursor & Sweep Position */}
            <line
              x1={currentX}
              y1="15"
              x2={currentX}
              y2={15 + graphH}
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="2 2"
            />
            <circle cx={currentX} cy={currentY_V} r="4.5" fill="#f59e0b" stroke="#ffffff" strokeWidth="1" />

            {/* 1τ and 5τ milestone markers */}
            <g transform={`translate(${paddingLeft + (tauSeconds / maxTimeWindow) * graphW}, ${circuitMode === 'charging' ? 15 + graphH * (1 - 0.632) : 15 + graphH * (1 - 0.368)})`}>
              <circle cx="0" cy="0" r="3" fill="#ec4899" />
              <text x="5" y="-3" fill="#f472b6" fontSize="8" fontWeight="bold">
                1τ ({circuitMode === 'charging' ? '63.2%' : '36.8%'})
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Tau Benchmark Breakdown Table */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono">
        <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
          <div className="text-purple-400 font-bold">1τ ({(tauSeconds * 1).toFixed(2)}s)</div>
          <div className="text-slate-300">{circuitMode === 'charging' ? '63.2% (vc)' : '36.8% (vc)'}</div>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
          <div className="text-purple-400 font-bold">2τ ({(tauSeconds * 2).toFixed(2)}s)</div>
          <div className="text-slate-300">{circuitMode === 'charging' ? '86.5% (vc)' : '13.5% (vc)'}</div>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
          <div className="text-purple-400 font-bold">3τ ({(tauSeconds * 3).toFixed(2)}s)</div>
          <div className="text-slate-300">{circuitMode === 'charging' ? '95.0% (vc)' : '5.0% (vc)'}</div>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center">
          <div className="text-purple-400 font-bold">4τ ({(tauSeconds * 4).toFixed(2)}s)</div>
          <div className="text-slate-300">{circuitMode === 'charging' ? '98.2% (vc)' : '1.8% (vc)'}</div>
        </div>
        <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center col-span-2 sm:col-span-1">
          <div className="text-emerald-400 font-bold">5τ ({(tauSeconds * 5).toFixed(2)}s)</div>
          <div className="text-emerald-300 font-bold">{circuitMode === 'charging' ? '99.3% (Steady)' : '0.7% (Empty)'}</div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
