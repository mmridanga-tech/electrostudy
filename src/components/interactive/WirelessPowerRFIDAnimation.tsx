import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Play, Pause, RotateCcw, Radio, Zap, BatteryCharging, Shield, Info, CheckCircle2 } from 'lucide-react';
import { Language } from '../../types';

interface WirelessPowerRFIDAnimationProps {
  currentLanguage: Language;
}

type OperationMode = 'QI_POWER' | 'PASSIVE_RFID';

export const WirelessPowerRFIDAnimation: React.FC<WirelessPowerRFIDAnimationProps> = ({
  currentLanguage
}) => {
  const [mode, setMode] = useState<OperationMode>('QI_POWER');
  const [distanceMm, setDistanceMm] = useState<number>(10); // 2 mm to 45 mm
  const [misalignmentMm, setMisalignmentMm] = useState<number>(0); // 0 mm to 30 mm
  const [frequencyKhz, setFrequencyKhz] = useState<number>(125); // Qi ~125 kHz or RFID 13.56 MHz
  const [isTransmitting, setIsTransmitting] = useState<boolean>(true);
  const [acPhase, setAcPhase] = useState<number>(0);
  const [rfidTagModulating, setRfidTagModulating] = useState<boolean>(false);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Coupling coefficient k calculation:
  // k decreases rapidly with distance: k(d, delta_x) approx k0 / (1 + (d/r0)^3 + (delta_x/r0)^2 )
  const coilRadiusMm = 25; // 25 mm radius coils
  const couplingK = useMemo(() => {
    const distNorm = distanceMm / coilRadiusMm;
    const alignNorm = misalignmentMm / coilRadiusMm;
    const k0 = 0.85; // perfect co-axial contact coupling
    const k = k0 / (1 + Math.pow(distNorm, 2.8) + Math.pow(alignNorm, 2.2));
    return Math.max(0.01, Math.min(0.85, k));
  }, [distanceMm, misalignmentMm]);

  // Electrical resonant circuit parameters:
  // Tx Inductance L1 = 12 uH, Rx Inductance L2 = 12 uH
  // Quality factors Q1 = Q2 = 60
  // Mutual Inductance M = k * sqrt(L1 * L2)
  const mutualInductanceUh = useMemo(() => {
    const L1 = 12; // uH
    const L2 = 12; // uH
    return couplingK * Math.sqrt(L1 * L2);
  }, [couplingK]);

  // Resonant efficiency: eta approx (k^2 * Q1 * Q2) / ( (1 + sqrt(1 + k^2 * Q1 * Q2))^2 )
  const efficiencyPercent = useMemo(() => {
    if (!isTransmitting) return 0;
    const Q1 = mode === 'QI_POWER' ? 65 : 40;
    const Q2 = mode === 'QI_POWER' ? 65 : 35;
    const FOM = Math.pow(couplingK, 2) * Q1 * Q2; // Figure of Merit
    const theoreticalEta = FOM / Math.pow(1 + Math.sqrt(1 + FOM), 2);
    // Real-world circuit driver & rectifier loss penalty
    const realEta = theoreticalEta * 0.92 * 100;
    return Math.max(2, Math.min(92, realEta));
  }, [couplingK, isTransmitting, mode]);

  // Received Voltage & Power:
  const inputPowerWatts = mode === 'QI_POWER' ? 15.0 : 0.5; // 15W Qi phone charger vs 500mW RFID reader
  const receivedPowerWatts = useMemo(() => {
    if (!isTransmitting) return 0;
    return (inputPowerWatts * efficiencyPercent) / 100;
  }, [inputPowerWatts, efficiencyPercent, isTransmitting]);

  const receivedVoltageV = useMemo(() => {
    if (!isTransmitting) return 0;
    // V_rx approx proportional to M * omega * I_tx * resonance_gain
    const baseVoltage = mode === 'QI_POWER' ? 12.0 : 3.3;
    const v = baseVoltage * (couplingK / 0.7) * (efficiencyPercent / 80);
    return Math.max(0, Math.min(baseVoltage * 1.5, v));
  }, [couplingK, efficiencyPercent, isTransmitting, mode]);

  // RFID Tag activation threshold (minimum ~1.2 V needed to wake up passive RFID EEPROM chip)
  const isTagPowered = receivedVoltageV >= 1.2;

  // Animation cycle
  useEffect(() => {
    const animate = (time: number) => {
      if (lastTimeRef.current !== null) {
        const dt = (time - lastTimeRef.current) / 1000;
        if (isTransmitting) {
          setAcPhase((prev) => (prev + dt * 8) % (2 * Math.PI));
          if (mode === 'PASSIVE_RFID' && isTagPowered) {
            // Modulate load every 0.4s to simulate digital backscatter data transmission
            setRfidTagModulating(Math.sin(time / 200) > 0);
          } else {
            setRfidTagModulating(false);
          }
        }
      }
      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      lastTimeRef.current = null;
    };
  }, [isTransmitting, mode, isTagPowered]);

  const labels = {
    en: {
      title: 'Wireless Power Transfer & RFID Inductive Coupling Simulator',
      subtitle: 'Analyze mutual inductance (M), coupling coefficient (k), alignment sensitivity, and load modulation',
      modeLabel: 'Operational Architecture:',
      qiMode: 'Resonant Inductive WPT (Qi Standard)',
      rfidMode: 'Passive RFID / NFC (Load Modulation Backscatter)',
      distance: 'Coil Separation Gap (Distance d):',
      misalignment: 'Lateral Radial Offset (Δx):',
      frequency: 'Operating Carrier Frequency (f):',
      couplingCoeff: 'Coupling Coefficient (k):',
      mutualInductance: 'Mutual Inductance (M):',
      rxPower: 'Received Power at Load (P_rx):',
      efficiency: 'System End-to-End Efficiency (η):',
      rxVoltage: 'Induced Load Voltage (V_rx):',
      tagStatus: 'Passive Tag Energy Harvester:',
      powered: 'Tag IC Active (Transmitting UID Data via Backscatter)',
      unpowered: 'Insufficient RF Energy (Tag Inactive)',
      txState: 'Transmitter RF Carrier:',
      start: 'Energize Tx Coil',
      stop: 'De-energize Tx Coil',
      reset: 'Reset Geometry (d = 10 mm)',
      modelNote: 'Educational Simulation Model: Electromagnetic coupling and efficiency values represent calibrated lumped-element approximations for conceptual training.',
      backscatterActive: 'Backscatter Load Modulation: Tag transistor shunting coil resistance reflects UID bit stream to reader!'
    },
    hi: {
      title: 'वायरलेस पावर ट्रांसफर एवं RFID प्रेरक युग्मन सिमुलेटर',
      subtitle: 'पारस्परिक प्रेरकत्व (M), युग्मन गुणांक (k), संरेखण संवेदनशीलता एवं बैकस्कैटर का विश्लेषण',
      modeLabel: 'प्रचालन प्रणाली:',
      qiMode: 'अनुनादी प्रेरण WPT (क्यूई मानक - Qi)',
      rfidMode: 'पैसिव RFID / NFC (लोड मॉड्यूलेशन बैकस्कैटर)',
      distance: 'कुंडलियों के बीच दूरी (d):',
      misalignment: 'पार्श्व विस्थापन (Δx):',
      frequency: 'प्रचालन आवृत्ति (f):',
      couplingCoeff: 'युग्मन गुणांक (k):',
      mutualInductance: 'पारस्परिक प्रेरकत्व (M):',
      rxPower: 'लोड पर प्राप्त शक्ति (P_rx):',
      efficiency: 'कुल प्रणाली दक्षता (η):',
      rxVoltage: 'प्रेरित वोल्टेज (V_rx):',
      tagStatus: 'पैसिव टैग ऊर्जा स्थिति:',
      powered: 'टैग IC सक्रिय (डेटा वापस भेज रहा है)',
      unpowered: 'अपर्याप्त ऊर्जा (टैग निष्क्रिय)',
      txState: 'ट्रांसमीटर आरएफ कैरियर:',
      start: 'ट्रांसमीटर चालू करें',
      stop: 'ट्रांसमीटर बंद करें',
      reset: 'डिफ़ॉल्ट दूरी (10 mm)',
      modelNote: 'शैक्षणिक सिमुलेशन मॉडल: युग्मन एवं दक्षता मान शैक्षणिक अवधारणा के लिए हैं।',
      backscatterActive: 'बैकस्कैटर लोड मॉड्यूलेशन: टैग ट्रांजिस्टर लोड बदलकर रीडर को डेटा भेज रहा है!'
    },
    bn: {
      title: 'ওয়্যারলেস পাওয়ার ট্রান্সফার ও আরএফআইডি আবেশ সংযোগ সিমুলেটর',
      subtitle: 'পারস্পরিক আবেশাঙ্ক (M), কাপলিং গুণাঙ্ক (k), দূরত্ব সংবেদনশীলতা ও ব্যাকস্ক্যাটার বিশ্লেষণ',
      modeLabel: 'কার্যপদ্ধতি নির্বাচন:',
      qiMode: 'রেজোন্যান্ট ইন্ডাক্টিভ WPT (Qi চার্জিং)',
      rfidMode: 'প্যাসিভ RFID / NFC (লোড মডুলেশন ব্যাকস্ক্যাটার)',
      distance: 'কয়েলদ্বয়ের মধ্যবর্তী দূরত্ব (d):',
      misalignment: 'পার্শ্বীয় স্থানচ্যুতি (Δx):',
      frequency: 'অপারেটিং কম্পাঙ্ক (f):',
      couplingCoeff: 'কাপলিং সহগ (k):',
      mutualInductance: 'পারস্পরিক আবেশাঙ্ক (M):',
      rxPower: 'রিসিভারে প্রাপ্ত ক্ষমতা (P_rx):',
      efficiency: 'সার্বিক কর্মদক্ষতা (η):',
      rxVoltage: 'আবিষ্ট ভোল্টেজ (V_rx):',
      tagStatus: 'প্যাসিভ ট্যাগের শক্তি অবস্থা:',
      powered: 'ট্যাগ চিপ সক্রিয় (ব্যাকস্ক্যাটার ডেটা পাঠাচ্ছে)',
      unpowered: 'অপর্যাপ্ত শক্তি (ট্যাগ নিষ্ক্রিয়)',
      txState: 'ট্রান্সমিটার আরএফ সিগন্যাল:',
      start: 'ট্রান্সমিটার চালু করুন',
      stop: 'ট্রান্সমিটার বন্ধ করুন',
      reset: 'প্রারম্ভিক দূরত্ব (১০ mm)',
      modelNote: 'শিক্ষামূলক সিমুলেশন মডেল: কাপলিং ও দক্ষতার মান তাত্ত্বিক উপলব্ধির জন্য গঠিত।',
      backscatterActive: 'ব্যাকস্ক্যাটার লোড মডুলেশন: ট্যাগ ট্রানজিস্টর লোড রোধ পরিবর্তন করে রিডারে ডেটা পাঠাচ্ছে!'
    }
  }[currentLanguage];

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-6 border border-slate-700 shadow-xl">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-sky-400 flex items-center gap-2">
            <Radio className="w-6 h-6 text-sky-400 animate-pulse" />
            {labels.title}
          </h2>
          <p className="text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsTransmitting(!isTransmitting)}
            className={`px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
              isTransmitting
                ? 'bg-amber-600 hover:bg-amber-700 text-white focus:ring-amber-500'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-500'
            }`}
            aria-label={isTransmitting ? labels.stop : labels.start}
          >
            {isTransmitting ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isTransmitting ? labels.stop : labels.start}
          </button>
          <button
            onClick={() => {
              setDistanceMm(10);
              setMisalignmentMm(0);
              setIsTransmitting(true);
            }}
            className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 transition-colors focus:ring-2 focus:ring-sky-400"
            aria-label={labels.reset}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mode Switch Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => {
            setMode('QI_POWER');
            setFrequencyKhz(125);
          }}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors flex items-center gap-2 ${
            mode === 'QI_POWER'
              ? 'bg-sky-600 border-sky-400 text-white shadow-lg'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Zap className="w-4 h-4" />
          {labels.qiMode}
        </button>
        <button
          onClick={() => {
            setMode('PASSIVE_RFID');
            setFrequencyKhz(13560); // 13.56 MHz HF RFID
          }}
          className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold border transition-colors flex items-center gap-2 ${
            mode === 'PASSIVE_RFID'
              ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <Radio className="w-4 h-4" />
          {labels.rfidMode}
        </button>
      </div>

      {/* Main Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Left: Interactive Coil Geometry & Magnetic Flux Field */}
        <div className="lg:col-span-7 bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center relative min-h-[380px]">
          {/* Active Mode Badge */}
          <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur border border-slate-700 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                isTransmitting ? 'bg-sky-400 animate-ping' : 'bg-slate-500'
              }`}
            />
            <span className="font-mono text-slate-200 font-semibold">
              k = {couplingK.toFixed(3)} | M = {mutualInductanceUh.toFixed(2)} µH
            </span>
          </div>

          <svg viewBox="0 0 500 320" className="w-full max-w-lg h-auto">
            <defs>
              <linearGradient id="txCoilGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="50%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <linearGradient id="rxCoilGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="50%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
            </defs>

            {/* Base Coordinate System: Transmitter at fixed Y = 220, Receiver at Y = 220 - (distanceMm * 3.2), X offset by misalignmentMm * 2.8 */}
            {(() => {
              const txY = 220;
              const rxY = Math.max(70, txY - distanceMm * 3.5);
              const rxX = 250 + misalignmentMm * 3.2;

              return (
                <g>
                  {/* Magnetic Flux Lines between Tx and Rx */}
                  {isTransmitting && (
                    <g
                      stroke="#38bdf8"
                      strokeWidth={Math.max(1, couplingK * 4)}
                      strokeDasharray="5 3"
                      fill="none"
                      opacity={0.25 + couplingK * 0.65}
                    >
                      {/* Central flux corridor */}
                      <path
                        d={`M 200 ${txY} C 200 ${(txY + rxY) / 2}, ${rxX - 50} ${(txY + rxY) / 2}, ${rxX - 50} ${rxY}`}
                      />
                      <path
                        d={`M 250 ${txY} L ${rxX} ${rxY}`}
                        stroke="#7dd3fc"
                        strokeWidth={Math.max(1.5, couplingK * 5)}
                      />
                      <path
                        d={`M 300 ${txY} C 300 ${(txY + rxY) / 2}, ${rxX + 50} ${(txY + rxY) / 2}, ${rxX + 50} ${rxY}`}
                      />
                      {/* Outer looping fringing flux */}
                      <path
                        d={`M 150 ${txY} C 120 ${(txY + rxY) / 2}, ${rxX - 90} ${(txY + rxY) / 2}, ${rxX - 70} ${rxY}`}
                        stroke="#0284c7"
                        strokeWidth="1"
                        opacity="0.4"
                      />
                      <path
                        d={`M 350 ${txY} C 380 ${(txY + rxY) / 2}, ${rxX + 90} ${(txY + rxY) / 2}, ${rxX + 70} ${rxY}`}
                        stroke="#0284c7"
                        strokeWidth="1"
                        opacity="0.4"
                      />
                    </g>
                  )}

                  {/* TRANSMITTER COIL (Tx - Bottom) */}
                  <g transform={`translate(250, ${txY})`}>
                    {/* Ferrite Shield / Ground Plate */}
                    <rect x="-105" y="10" width="210" height="8" rx="3" fill="#1e293b" stroke="#334155" />
                    <text x="0" y="32" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">
                      PRIMARY TRANSMITTER COIL (Tx)
                    </text>
                    <text x="0" y="44" fill="#64748b" fontSize="8" textAnchor="middle">
                      Inverter Driver @ {frequencyKhz < 1000 ? `${frequencyKhz} kHz` : `${(frequencyKhz / 1000).toFixed(2)} MHz`}
                    </text>

                    {/* Planar Spiral Turns (cross-section) */}
                    {[-90, -75, -60, -45, 45, 60, 75, 90].map((xOff, i) => (
                      <circle
                        key={i}
                        cx={xOff}
                        cy="0"
                        r="7"
                        fill="url(#txCoilGrad)"
                        stroke="#0284c7"
                        strokeWidth="1.5"
                      />
                    ))}
                    {/* Winding core center */}
                    <rect x="-35" y="-3" width="70" height="6" rx="2" fill="#0f172a" stroke="#334155" />
                  </g>

                  {/* RECEIVER COIL / RFID TAG (Rx - Top, dynamic position) */}
                  <g transform={`translate(${rxX}, ${rxY})`}>
                    {/* Ferrite Backing or Tag Substrate */}
                    <rect
                      x="-85"
                      y="-16"
                      width="170"
                      height="7"
                      rx="2"
                      fill={mode === 'QI_POWER' ? '#1e293b' : '#064e3b'}
                      stroke={mode === 'QI_POWER' ? '#334155' : '#059669'}
                    />

                    {/* Rx Coil Turns */}
                    {[-70, -55, -40, 40, 55, 70].map((xOff, i) => (
                      <circle
                        key={i}
                        cx={xOff}
                        cy="0"
                        r="6"
                        fill="url(#rxCoilGrad)"
                        stroke="#059669"
                        strokeWidth="1.5"
                      />
                    ))}

                    <text x="0" y="-24" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">
                      {mode === 'QI_POWER' ? 'SECONDARY RECEIVER COIL (Rx)' : 'PASSIVE RFID / NFC TRANSPONDER'}
                    </text>

                    {/* Load Representation: Phone Battery or RFID Chip */}
                    {mode === 'QI_POWER' ? (
                      <g transform="translate(0, -60)">
                        <rect x="-45" y="0" width="90" height="24" rx="4" fill="#0f172a" stroke="#34d399" strokeWidth="1.5" />
                        <BatteryCharging className="w-4 h-4 text-emerald-400 inline" x="-38" y="4" />
                        <text x="5" y="16" fill="#34d399" fontSize="9" fontWeight="bold">
                          {efficiencyPercent > 20 ? 'FAST CHARGE' : 'WEAK LINK'}
                        </text>
                      </g>
                    ) : (
                      <g transform="translate(0, -60)">
                        <rect
                          x="-55"
                          y="0"
                          width="110"
                          height="26"
                          rx="4"
                          fill={isTagPowered ? '#064e3b' : '#3f1d1d'}
                          stroke={isTagPowered ? '#10b981' : '#ef4444'}
                          strokeWidth="1.5"
                        />
                        <text x="0" y="16" fill={isTagPowered ? '#6ee7b7' : '#fca5a5'} fontSize="8.5" fontWeight="bold" textAnchor="middle">
                          {isTagPowered ? (rfidTagModulating ? 'MODULATING (1)' : 'MODULATING (0)') : 'TAG POWER LOW'}
                        </text>
                      </g>
                    )}
                  </g>

                  {/* Distance (Gap d) Dimension Line */}
                  <line x1="60" y1={txY} x2="60" y2={rxY} stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                  <polygon points={`57,${txY} 63,${txY} 60,${txY + 6}`} fill="#f59e0b" />
                  <polygon points={`57,${rxY} 63,${rxY} 60,${rxY - 6}`} fill="#f59e0b" />
                  <text x="50" y={(txY + rxY) / 2} fill="#f59e0b" fontSize="9.5" fontWeight="bold" textAnchor="end">
                    Gap d = {distanceMm} mm
                  </text>

                  {/* Misalignment (Offset Δx) Dimension Line */}
                  {misalignmentMm > 0 && (
                    <g>
                      <line x1="250" y1="30" x2={rxX} y2="30" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 2" />
                      <text x={(250 + rxX) / 2} y="22" fill="#c084fc" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                        Δx = {misalignmentMm} mm
                      </text>
                    </g>
                  )}
                </g>
              );
            })()}
          </svg>

          {/* Model Disclaimer Notice */}
          <div className="w-full mt-3 p-2 bg-slate-900 border border-slate-700/60 rounded text-center">
            <p className="text-[11px] text-amber-300/90 font-mono">
              <Info className="w-3.5 h-3.5 inline mr-1 text-amber-400" />
              {labels.modelNote}
            </p>
          </div>
        </div>

        {/* Right: Real-time Telemetry & Controls */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Main Gauges */}
          <div className="bg-slate-800/90 p-4 rounded-xl border border-slate-700">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              <span>{labels.efficiency}</span>
              <span className="font-mono text-emerald-400">{efficiencyPercent.toFixed(1)}%</span>
            </div>
            {/* Efficiency Progress bar */}
            <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-700">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  efficiencyPercent > 60 ? 'bg-emerald-500' : efficiencyPercent > 30 ? 'bg-amber-500' : 'bg-red-500'
                }`}
                style={{ width: `${efficiencyPercent}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{labels.couplingCoeff}</span>
                <span className="text-base font-bold font-mono text-sky-400">k = {couplingK.toFixed(3)}</span>
              </div>
              <div className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{labels.rxPower}</span>
                <span className="text-base font-bold font-mono text-emerald-400">
                  {receivedPowerWatts.toFixed(2)} W
                </span>
              </div>
            </div>

            {/* Tag State Notification Banner */}
            {mode === 'PASSIVE_RFID' && (
              <div
                className={`mt-3 p-2.5 rounded-lg border text-xs flex items-center gap-2 ${
                  isTagPowered
                    ? 'bg-emerald-950/70 border-emerald-600 text-emerald-200'
                    : 'bg-red-950/70 border-red-700 text-red-200'
                }`}
              >
                {isTagPowered ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{labels.powered}</span>
                  </>
                ) : (
                  <>
                    <Shield className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{labels.unpowered}</span>
                  </>
                )}
              </div>
            )}
            {mode === 'PASSIVE_RFID' && isTagPowered && (
              <p className="text-[10px] text-emerald-400 font-mono mt-1.5 px-1">
                {labels.backscatterActive}
              </p>
            )}
          </div>

          {/* Sliders and Controls */}
          <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700 space-y-4">
            {/* Separation Gap Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">{labels.distance}</span>
                <span className="font-mono text-amber-400">{distanceMm} mm</span>
              </div>
              <input
                type="range"
                min="2"
                max="45"
                step="1"
                value={distanceMm}
                onChange={(e) => setDistanceMm(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label={labels.distance}
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
                <span>2 mm (Contact)</span>
                <span>20 mm (Medium)</span>
                <span>45 mm (Near Zero Link)</span>
              </div>
            </div>

            {/* Lateral Misalignment Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span className="text-slate-300">{labels.misalignment}</span>
                <span className="font-mono text-purple-400">{misalignmentMm} mm</span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                step="1"
                value={misalignmentMm}
                onChange={(e) => setMisalignmentMm(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                aria-label={labels.misalignment}
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
                <span>0 mm (Coaxial)</span>
                <span>15 mm (Half Radius)</span>
                <span>30 mm (Off-Center)</span>
              </div>
            </div>

            {/* Frequency Display */}
            <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-700/80 flex items-center justify-between text-xs">
              <span className="text-slate-400">{labels.frequency}</span>
              <span className="font-mono font-bold text-sky-300">
                {frequencyKhz < 1000 ? `${frequencyKhz} kHz (Qi standard)` : `${(frequencyKhz / 1000).toFixed(2)} MHz (NFC/ISO 14443)`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
