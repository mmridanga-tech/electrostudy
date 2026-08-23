import React, { useState, useEffect, useId } from 'react';
import { RotateCcw, Zap, Compass, Play, Pause, Layers, HelpCircle, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ThreePhaseStarDeltaAnimationProps {
  currentLanguage: Language;
}

type ConnectionType = 'star' | 'delta';
type PowerFactorType = 'lagging' | 'leading' | 'unity';

const TRANSLATIONS = {
  en: {
    title: 'Three-Phase Star (Y) & Delta (Δ) Interactive Lab',
    subtitle: 'Explore the definitive Line-to-Phase voltage and current relationships in balanced 3-phase Star and Delta configurations with live rotating phasor geometry, circuit topology, and total power calculation.',
    connTypeLabel: 'Connection Topology',
    starLabel: 'Star (Wye, Y) System',
    deltaLabel: 'Delta (Mesh, Δ) System',
    lineVoltageLabel: 'Line Voltage V_L (V)',
    phaseZLabel: 'Phase Impedance Z_ph (Ω)',
    pfLabel: 'Load Power Factor (cos φ)',
    pfTypeLabel: 'Power Factor Characteristic',
    pfLagging: 'Lagging (Inductive Load)',
    pfLeading: 'Leading (Capacitive Load)',
    pfUnity: 'Unity (Pure Resistive)',
    resetBtn: 'Reset Defaults',

    // Topology Details
    topologyTitle: 'Circuit Topology & Current Paths',
    sourceLabel: '3-Phase AC Source (400 V / 50 Hz)',
    neutralWire: 'Neutral Conductor (N)',
    neutralCurrent: 'Neutral Current I_N = 0 A (Balanced)',
    lineCurrents: 'Line Currents: I_R, I_Y, I_B',
    phaseCurrents: 'Phase Currents: I_RN, I_YN, I_BN (Star) / I_RY, I_YB, I_BR (Delta)',
    
    // Live Parameters
    liveMetricsTitle: 'Live System Quantities',
    lineVoltage: 'Line Voltage (V_L)',
    phaseVoltage: 'Phase Voltage (V_ph)',
    lineCurrent: 'Line Current (I_L)',
    phaseCurrent: 'Phase Current (I_ph)',
    activePower: 'Active Power (P)',
    reactivePower: 'Reactive Power (Q)',
    apparentPower: 'Apparent Power (S)',
    powerFactor: 'Power Factor (PF)',
    voltageRatio: 'Voltage Ratio V_L / V_ph',
    currentRatio: 'Current Ratio I_L / I_ph',

    // Phasor Geometry
    phasorTitle: 'Phasor Geometry & Vector Relationships',
    phasorNoticeStar: 'Star (Y): Line Voltage V_RY = V_R - V_Y = √3 · V_ph ∠30°. Line current equals phase current (I_L = I_ph).',
    phasorNoticeDelta: 'Delta (Δ): Line Current I_R = I_RY - I_BR = √3 · I_ph ∠-30°. Line voltage equals phase voltage (V_L = V_ph).',
    animatePhasor: 'Animate Phasors',
    pausePhasor: 'Freeze Phasors',

    // Comparison Table
    compTitle: 'Comprehensive Star vs. Delta Comparison',
    paramHeader: 'Parameter / Feature',
    starHeader: 'Star (Wye, Y) Connection',
    deltaHeader: 'Delta (Mesh, Δ) Connection',
    vRel: 'Voltage Relationship',
    iRel: 'Current Relationship',
    neutralAvail: 'Neutral Conductor Availability',
    neutralYes: 'Available (Provides 4-wire system: 3 Lines + Neutral)',
    neutralNo: 'Not Available (3-wire system only)',
    insulationReq: 'Winding Insulation Requirement',
    insulationStar: 'Lower (V_ph = V_L / √3 = 57.7% of line voltage)',
    insulationDelta: 'Higher (V_ph = V_L = 100% of line voltage)',
    starterApp: 'Motor Starting Application',
    starterDesc: 'Draws 1/3 starting current & torque when connected in Star during start-up',
    starterDeltaDesc: 'Switched to Delta for 100% rated full-load torque during normal running',

    // Unbalanced Load Note
    unbalancedTitle: 'Balanced vs. Unbalanced Three-Phase Loads',
    unbalancedText: 'In a balanced 4-wire Star system, the three phase currents are equal in magnitude and separated by 120°, making the return neutral current strictly zero: I_N = -(I_R + I_Y + I_B) = 0 A. In an unbalanced load (where phase impedances Z_R ≠ Z_Y ≠ Z_B), a non-zero neutral current flows, preventing phase voltages from distorting and maintaining balanced line-to-neutral terminal voltages.',

    formulaBanner: 'Universal 3-Phase Power Formulas (Valid for BOTH Star and Delta): P = √3 · V_L · I_L · cos φ = 3 · V_ph · I_ph · cos φ  |  S = √3 · V_L · I_L'
  },
  hi: {
    title: 'थ्री-फेज स्टार (Y) एवं डेल्टा (Δ) इंटरैक्टिव लैब',
    subtitle: 'संतुलित 3-फेज स्टार एवं डेल्टा परिपथों में लाइन तथा फेज वोल्टेज व धाराओं के संबंधों का लाइव फेजर आरेख, सर्किट टोपोलॉजी एवं कुल शक्ति के साथ अन्वेषण करें।',
    connTypeLabel: 'कनेक्शन टोपोलॉजी',
    starLabel: 'स्टार (Wye, Y) प्रणाली',
    deltaLabel: 'डेल्टा (Mesh, Δ) प्रणाली',
    lineVoltageLabel: 'लाइन वोल्टेज V_L (V)',
    phaseZLabel: 'फेज प्रतिबाधा Z_ph (Ω)',
    pfLabel: 'लोड पावर फैक्टर (cos φ)',
    pfTypeLabel: 'पावर फैक्टर विशेषता',
    pfLagging: 'लैगिंग (प्रेरणिक भार)',
    pfLeading: 'लीडिंग (धारिता भार)',
    pfUnity: 'इकाई (शुद्ध प्रतिरोधक)',
    resetBtn: 'डिफ़ॉल्ट रीसेट',

    topologyTitle: 'परिपथ टोपोलॉजी एवं धारा मार्ग',
    sourceLabel: '3-फेज एसी स्रोत (400 V / 50 Hz)',
    neutralWire: 'न्यूट्रल चालक (N)',
    neutralCurrent: 'न्यूट्रल धारा I_N = 0 A (संतुलित भार)',
    lineCurrents: 'लाइन धाराएं: I_R, I_Y, I_B',
    phaseCurrents: 'फेज धाराएं: I_RN, I_YN, I_BN (स्टार) / I_RY, I_YB, I_BR (डेल्टा)',

    liveMetricsTitle: 'लाइव सिस्टम राशियाँ',
    lineVoltage: 'लाइन वोल्टेज (V_L)',
    phaseVoltage: 'फेज वोल्टेज (V_ph)',
    lineCurrent: 'लाइन धारा (I_L)',
    phaseCurrent: 'फेज धारा (I_ph)',
    activePower: 'सक्रिय शक्ति (P)',
    reactivePower: 'प्रतिक्रियाशील शक्ति (Q)',
    apparentPower: 'आभासी शक्ति (S)',
    powerFactor: 'पावर फैक्टर (PF)',
    voltageRatio: 'वोल्टेज अनुपात V_L / V_ph',
    currentRatio: 'धारा अनुपात I_L / I_ph',

    phasorTitle: 'फेजर ज्यामिति एवं सदिश संबंध',
    phasorNoticeStar: 'स्टार (Y): लाइन वोल्टेज V_RY = V_R - V_Y = √3 · V_ph ∠30°। लाइन धारा, फेज धारा के बराबर होती है (I_L = I_ph)।',
    phasorNoticeDelta: 'डेल्टा (Δ): लाइन धारा I_R = I_RY - I_BR = √3 · I_ph ∠-30°। लाइन वोल्टेज, फेज वोल्टेज के बराबर होता है (V_L = V_ph)।',
    animatePhasor: 'फेजर एनिमेट करें',
    pausePhasor: 'फेजर स्थिर करें',

    compTitle: 'स्टार बनाम डेल्टा विस्तृत तुलना',
    paramHeader: 'प्राचल / विशेषता',
    starHeader: 'स्टार (Wye, Y) संयोजन',
    deltaHeader: 'डेल्टा (Mesh, Δ) संयोजन',
    vRel: 'वोल्टेज संबंध',
    iRel: 'धारा संबंध',
    neutralAvail: 'न्यूट्रल तार की उपलब्धता',
    neutralYes: 'उपलब्ध (4-वायर प्रणाली: 3 लाइन + 1 न्यूट्रल)',
    neutralNo: 'अनुपलब्ध (केवल 3-वायर प्रणाली)',
    insulationReq: 'वाइंडिंग इंसुलेशन की आवश्यकता',
    insulationStar: 'कम (V_ph = V_L / √3 = लाइन वोल्टेज का 57.7%)',
    insulationDelta: 'अधिक (V_ph = V_L = लाइन वोल्टेज का 100%)',
    starterApp: 'मोटर स्टार्टिंग अनुप्रयोग',
    starterDesc: 'स्टार में स्टार्ट करते समय स्टार्टिंग करंट और टॉर्क 1/3 (33%) हो जाता है',
    starterDeltaDesc: 'सामान्य परिचालन में 100% रेटेड टॉर्क के लिए डेल्टा में बदला जाता है',

    unbalancedTitle: 'संतुलित बनाम असंतुलित 3-फेज भार',
    unbalancedText: 'संतुलित 4-तार स्टार प्रणाली में तीनों धाराओं का योग शून्य होता है, अतः न्यूट्रल में शून्य धारा बहती है: I_N = -(I_R + I_Y + I_B) = 0 A। असंतुलित भार (Z_R ≠ Z_Y ≠ Z_B) होने पर न्यूट्रल तार से असंतुलित धारा प्रवाहित होती है, जिससे सभी फेजों पर वोल्टेज संतुलित बना रहता है।',

    formulaBanner: 'सार्वभौमिक 3-फेज शक्ति सूत्र (स्टार एवं डेल्टा दोनों के लिए मान्य): P = √3 · V_L · I_L · cos φ = 3 · V_ph · I_ph · cos φ  |  S = √3 · V_L · I_L'
  },
  bn: {
    title: 'থ্রি-ফেজ স্টার (Y) ও ডেল্টা (Δ) ইন্টারঅ্যাক্টিভ ল্যাব',
    subtitle: 'সুষম ৩-ফেজ স্টার ও ডেল্টা সংযোগে লাইন ও ফেজ ভোল্টেজ এবং কারেন্টের গাণিতিক সম্পর্ক, লাইভ ফেজর ডায়াগ্রাম এবং মোট পাওয়ার হিসাব পর্যবেক্ষণ করুন।',
    connTypeLabel: 'কানেকশন টপোলজি',
    starLabel: 'স্টার (Wye, Y) সিস্টেম',
    deltaLabel: 'ডেল্টা (Mesh, Δ) সিস্টেম',
    lineVoltageLabel: 'লাইন ভোল্টেজ V_L (V)',
    phaseZLabel: 'ফেজ ইম্পিডেন্স Z_ph (Ω)',
    pfLabel: 'লোড পাওয়ার ফ্যাক্টর (cos φ)',
    pfTypeLabel: 'পাওয়ার ফ্যাক্টর বৈশিষ্ট্য',
    pfLagging: 'ল্যাগিং (ইনডাক্টিভ লোড)',
    pfLeading: 'লিডিং (ক্যাপাসিটিভ লোড)',
    pfUnity: 'ইউনিটি (বিশুদ্ধ রোধক)',
    resetBtn: 'ডিফল্ট রিসেট',

    topologyTitle: 'সার্কিট টপোলজি ও কারেন্ট প্রবাহ',
    sourceLabel: '৩-ফেজ এসি সোর্স (৪০০ V / ৫০ Hz)',
    neutralWire: 'নিউট্রাল তার (N)',
    neutralCurrent: 'নিউট্রাল কারেন্ট I_N = ০ A (সুষম লোডে)',
    lineCurrents: 'লাইন কারেন্ট: I_R, I_Y, I_B',
    phaseCurrents: 'ফেজ কারেন্ট: I_RN, I_YN, I_BN (স্টার) / I_RY, I_YB, I_BR (ডেল্টা)',

    liveMetricsTitle: 'লাইভ সিস্টেম পরিমাপ',
    lineVoltage: 'লাইন ভোল্টেজ (V_L)',
    phaseVoltage: 'ফেজ ভোল্টেজ (V_ph)',
    lineCurrent: 'লাইন কারেন্ট (I_L)',
    phaseCurrent: 'ফেজ কারেন্ট (I_ph)',
    activePower: 'সক্রিয় ক্ষমতা (P)',
    reactivePower: 'রিঅ্যাক্টিভ ক্ষমতা (Q)',
    apparentPower: 'অ্যাপারেন্ট ক্ষমতা (S)',
    powerFactor: 'পাওয়ার ফ্যাক্টর (PF)',
    voltageRatio: 'ভোল্টেজ অনুপাত V_L / V_ph',
    currentRatio: 'কারেন্ট অনুপাত I_L / I_ph',

    phasorTitle: 'ফেজর জ্যামিতি ও ভেক্টর সম্পর্ক',
    phasorNoticeStar: 'স্টার (Y): লাইন ভোল্টেজ V_RY = V_R - V_Y = √৩ · V_ph ∠৩০°। লাইন কারেন্ট ফেজ কারেন্টের সমান (I_L = I_ph)।',
    phasorNoticeDelta: 'ডেল্টা (Δ): লাইন কারেন্ট I_R = I_RY - I_BR = √৩ · I_ph ∠-৩০°। লাইন ভোল্টেজ ফেজ ভোল্টেজের সমান (V_L = V_ph)।',
    animatePhasor: 'ফেজর অ্যানিমেট করুন',
    pausePhasor: 'ফেজর স্থির রাখুন',

    compTitle: 'স্টার বনাম ডেল্টা বিস্তারিত তুলনা',
    paramHeader: 'প্যারামিটার / বৈশিষ্ট্য',
    starHeader: 'স্টার (Wye, Y) সংযোগ',
    deltaHeader: 'ডেল্টা (Mesh, Δ) সংযোগ',
    vRel: 'ভোল্টেজ সম্পর্ক',
    iRel: 'কারেন্ট সম্পর্ক',
    neutralAvail: 'নিউট্রাল তারের প্রাপ্যতা',
    neutralYes: 'উপলব্ধ (৪-ওয়্যার ব্যবস্থা: ৩ লাইন + ১ নিউট্রাল)',
    neutralNo: 'অনুপলব্ধ (কেবল ৩-ওয়্যার ব্যবস্থা)',
    insulationReq: 'উইন্ডিং ইনসুলেশন প্রয়োজনীয়তা',
    insulationStar: 'কম (V_ph = V_L / √৩ = লাইন ভোল্টেজের ৫৭.৭%)',
    insulationDelta: 'বেশি (V_ph = V_L = লাইন ভোল্টেজের ১০০%)',
    starterApp: 'মোটর স্টার্টিং প্রয়োগ',
    starterDesc: 'স্টারে মোটর চালু করলে স্টার্টিং কারেন্ট ও টর্ক ১/৩ (৩৩%) এ নেমে আসে',
    starterDeltaDesc: 'স্বাভাবিক গতিতে ১০০% টর্কের জন্য ডেল্টায় পরিবর্তন করা হয়',

    unbalancedTitle: 'সুষম বনাম অসুষম ৩-ফেজ লোড',
    unbalancedText: 'সুষম ৪-ওয়্যার স্টার সিস্টেমে তিনটি ফেজের কারেন্টের ভেক্টর যোগফল শূন্য হয়: I_N = -(I_R + I_Y + I_B) = ০ A। অসুষম লোডে (Z_R ≠ Z_Y ≠ Z_B) নিউট্রাল তার দিয়ে কারেন্ট প্রবাহিত হয়, যা প্রতিটি ফেজে সঠিক টার্মিনাল ভোল্টেজ বজায় রাখে।',

    formulaBanner: 'সার্বজনীন ৩-ফেজ পাওয়ার সূত্র (স্টার ও ডেল্টা উভয়ের জন্য প্রযোজ্য): P = √৩ · V_L · I_L · cos φ = ৩ · V_ph · I_ph · cos φ  |  S = √৩ · V_L · I_L'
  }
};

export const ThreePhaseStarDeltaAnimation: React.FC<ThreePhaseStarDeltaAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  const [connection, setConnection] = useState<ConnectionType>('star');
  const [lineVoltage, setLineVoltage] = useState<number>(400); // V
  const [phaseZ, setPhaseZ] = useState<number>(20); // Ω
  const [powerFactor, setPowerFactor] = useState<number>(0.85);
  const [pfType, setPfType] = useState<PowerFactorType>('lagging');
  const [isRotating, setIsRotating] = useState<boolean>(!isReducedMotion);
  const [rotAngle, setRotAngle] = useState<number>(0);

  const connStarId = useId();
  const connDeltaId = useId();

  // Animation Loop for Phasor Rotation
  useEffect(() => {
    if (!isRotating || isReducedMotion) return;
    const interval = setInterval(() => {
      setRotAngle((prev) => (prev + 1.5) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isRotating, isReducedMotion]);

  // Derived Electrical Quantities
  const sqrt3 = Math.sqrt(3);
  
  let phaseVoltage = 0;
  let phaseCurrent = 0;
  let lineCurrent = 0;

  if (connection === 'star') {
    // Star: VL = √3 · Vph => Vph = VL / √3, IL = Iph = Vph / Zph
    phaseVoltage = lineVoltage / sqrt3;
    phaseCurrent = phaseVoltage / phaseZ;
    lineCurrent = phaseCurrent;
  } else {
    // Delta: VL = Vph => Vph = VL, Iph = Vph / Zph, IL = √3 · Iph
    phaseVoltage = lineVoltage;
    phaseCurrent = phaseVoltage / phaseZ;
    lineCurrent = sqrt3 * phaseCurrent;
  }

  // Active, Reactive, Apparent Power
  // P = √3 · VL · IL · cos φ = 3 · Vph · Iph · cos φ
  const activePower = sqrt3 * lineVoltage * lineCurrent * powerFactor; // W
  const activePowerKW = activePower / 1000;

  // phi angle
  const phiRad = Math.acos(Math.min(Math.max(powerFactor, 0), 1));
  const sinPhi = Math.sin(phiRad);
  const reactivePower = sqrt3 * lineVoltage * lineCurrent * sinPhi * (pfType === 'leading' ? -1 : 1); // VAR
  const reactivePowerKVAR = reactivePower / 1000;

  const apparentPower = sqrt3 * lineVoltage * lineCurrent; // VA
  const apparentPowerKVA = apparentPower / 1000;

  const handleReset = () => {
    setConnection('star');
    setLineVoltage(400);
    setPhaseZ(20);
    setPowerFactor(0.85);
    setPfType('lagging');
    setRotAngle(0);
    setIsRotating(!isReducedMotion);
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      calloutTitle={t.unbalancedTitle}
      calloutText={t.unbalancedText}
      formulaText={t.formulaBanner}
    >
      <div className="space-y-6">
        {/* Connection Mode Selection & Main Sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 bg-slate-900/90 rounded-xl border border-slate-800 text-slate-100 shadow-md">
          {/* Connection Mode Selector */}
          <div className="lg:col-span-12 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-slate-300">{t.connTypeLabel}:</span>
              <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800" role="group" aria-label={t.connTypeLabel}>
                <button
                  id={connStarId}
                  type="button"
                  aria-pressed={connection === 'star'}
                  onClick={() => setConnection('star')}
                  className={`px-4 py-2 text-sm font-bold rounded-md transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                    connection === 'star'
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span className="font-mono text-base">Y</span>
                  <span>{t.starLabel}</span>
                </button>
                <button
                  id={connDeltaId}
                  type="button"
                  aria-pressed={connection === 'delta'}
                  onClick={() => setConnection('delta')}
                  className={`px-4 py-2 text-sm font-bold rounded-md transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                    connection === 'delta'
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span className="font-mono text-base">Δ</span>
                  <span>{t.deltaLabel}</span>
                </button>
              </div>
            </div>

            {/* Animation Toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsRotating(!isRotating)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400"
                aria-label={isRotating ? t.pausePhasor : t.animatePhasor}
              >
                {isRotating ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{isRotating ? t.pausePhasor : t.animatePhasor}</span>
              </button>
            </div>
          </div>

          {/* Sliders */}
          <div className="lg:col-span-4 space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label htmlFor="input-line-voltage" className="font-medium text-slate-300">
                {t.lineVoltageLabel}
              </label>
              <span className="font-mono font-bold text-sky-400">{lineVoltage} V</span>
            </div>
            <input
              id="input-line-voltage"
              type="range"
              min={100}
              max={690}
              step={10}
              value={lineVoltage}
              onChange={(e) => setLineVoltage(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>100 V</span>
              <span>400 V (Std Line)</span>
              <span>690 V</span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label htmlFor="input-phase-z" className="font-medium text-slate-300">
                {t.phaseZLabel}
              </label>
              <span className="font-mono font-bold text-emerald-400">{phaseZ.toFixed(1)} Ω</span>
            </div>
            <input
              id="input-phase-z"
              type="range"
              min={5}
              max={100}
              step={1}
              value={phaseZ}
              onChange={(e) => setPhaseZ(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>5 Ω</span>
              <span>20 Ω</span>
              <span>100 Ω</span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label htmlFor="input-pf" className="font-medium text-slate-300">
                {t.pfLabel}
              </label>
              <span className="font-mono font-bold text-amber-400">
                {powerFactor.toFixed(2)} ({pfType})
              </span>
            </div>
            <input
              id="input-pf"
              type="range"
              min={0.2}
              max={1.0}
              step={0.01}
              value={powerFactor}
              onChange={(e) => {
                const val = Number(e.target.value);
                setPowerFactor(val);
                if (val === 1.0) setPfType('unity');
                else if (pfType === 'unity') setPfType('lagging');
              }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <div className="flex justify-between items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setPfType('lagging')}
                className={`text-[10px] px-2 py-0.5 rounded font-semibold transition-colors ${
                  pfType === 'lagging' ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Lagging
              </button>
              <button
                type="button"
                onClick={() => { setPowerFactor(1.0); setPfType('unity'); }}
                className={`text-[10px] px-2 py-0.5 rounded font-semibold transition-colors ${
                  pfType === 'unity' ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/50' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Unity (1.0)
              </button>
              <button
                type="button"
                onClick={() => setPfType('leading')}
                className={`text-[10px] px-2 py-0.5 rounded font-semibold transition-colors ${
                  pfType === 'leading' ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-500/50' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                Leading
              </button>
            </div>
          </div>
        </div>

        {/* Live Metrics Dashboard */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          <div className="p-3.5 bg-slate-900/90 rounded-xl border border-sky-900/40 text-center">
            <span className="text-[11px] font-medium text-slate-400 block">{t.lineVoltage}</span>
            <span className="text-lg font-mono font-bold text-sky-400 mt-1 block">{lineVoltage.toFixed(1)} V</span>
            <span className="text-[10px] text-slate-500 font-mono">V_L (Line-Line)</span>
          </div>

          <div className="p-3.5 bg-slate-900/90 rounded-xl border border-indigo-900/40 text-center">
            <span className="text-[11px] font-medium text-slate-400 block">{t.phaseVoltage}</span>
            <span className="text-lg font-mono font-bold text-indigo-300 mt-1 block">{phaseVoltage.toFixed(1)} V</span>
            <span className="text-[10px] text-indigo-400 font-mono">
              {connection === 'star' ? 'V_L / √3 (57.7%)' : 'V_L (100%)'}
            </span>
          </div>

          <div className="p-3.5 bg-slate-900/90 rounded-xl border border-emerald-900/40 text-center">
            <span className="text-[11px] font-medium text-slate-400 block">{t.lineCurrent}</span>
            <span className="text-lg font-mono font-bold text-emerald-400 mt-1 block">{lineCurrent.toFixed(2)} A</span>
            <span className="text-[10px] text-slate-500 font-mono">I_L (Line wire)</span>
          </div>

          <div className="p-3.5 bg-slate-900/90 rounded-xl border border-teal-900/40 text-center">
            <span className="text-[11px] font-medium text-slate-400 block">{t.phaseCurrent}</span>
            <span className="text-lg font-mono font-bold text-teal-300 mt-1 block">{phaseCurrent.toFixed(2)} A</span>
            <span className="text-[10px] text-teal-400 font-mono">
              {connection === 'star' ? 'I_L (100%)' : 'I_L / √3 (57.7%)'}
            </span>
          </div>

          <div className="p-3.5 bg-slate-900/90 rounded-xl border border-amber-900/40 text-center">
            <span className="text-[11px] font-medium text-slate-400 block">{t.activePower}</span>
            <span className="text-lg font-mono font-bold text-amber-400 mt-1 block">{activePowerKW.toFixed(2)} kW</span>
            <span className="text-[10px] text-amber-300 font-mono">P = √3·V_L·I_L·cosφ</span>
          </div>

          <div className="p-3.5 bg-slate-900/90 rounded-xl border border-purple-900/40 text-center">
            <span className="text-[11px] font-medium text-slate-400 block">{t.apparentPower}</span>
            <span className="text-lg font-mono font-bold text-purple-300 mt-1 block">{apparentPowerKVA.toFixed(2)} kVA</span>
            <span className="text-[10px] text-purple-400 font-mono">S = √3·V_L·I_L</span>
          </div>
        </div>

        {/* Visual Dual-Panel: Left = Circuit Diagram Topology, Right = Phasor Vector Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Circuit Schematic Topology */}
          <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                {t.topologyTitle} — {connection === 'star' ? 'STAR (Y)' : 'DELTA (Δ)'}
              </span>
              <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-mono font-semibold ${
                connection === 'star' ? 'bg-sky-950 text-sky-300 border border-sky-800' : 'bg-amber-950 text-amber-300 border border-amber-800'
              }`}>
                {connection === 'star' ? '4-Wire (3Φ + N)' : '3-Wire (3Φ Mesh)'}
              </span>
            </div>

            <div className="w-full flex items-center justify-center py-2">
              {connection === 'star' ? (
                /* STAR CIRCUIT SVG */
                <svg viewBox="0 0 460 260" className="w-full h-auto max-h-64 select-none">
                  {/* Background Grid Accent */}
                  <defs>
                    <pattern id="grid-star" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="460" height="260" fill="#090d16" rx="8" />
                  <rect width="460" height="260" fill="url(#grid-star)" rx="8" />

                  {/* 3 Lines Coming from Left */}
                  {/* Line R (Red) */}
                  <path d="M 20 50 L 140 50 L 260 50 L 330 90" fill="none" stroke="#ef4444" strokeWidth="2.5" />
                  {/* Line Y (Yellow) */}
                  <path d="M 20 130 L 140 130 L 260 130 L 330 150" fill="none" stroke="#eab308" strokeWidth="2.5" />
                  {/* Line B (Blue) */}
                  <path d="M 20 210 L 140 210 L 260 210 L 330 210" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                  {/* Neutral Line (White/Slate) */}
                  <path d="M 20 170 L 140 170 L 260 170 L 380 150" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />

                  {/* Line Labels Left */}
                  <circle cx="20" cy="50" r="10" fill="#ef4444" />
                  <text x="20" y="54" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">R</text>

                  <circle cx="20" cy="130" r="10" fill="#eab308" />
                  <text x="20" y="134" textAnchor="middle" fill="#000000" fontSize="10" fontWeight="bold">Y</text>

                  <circle cx="20" cy="210" r="10" fill="#3b82f6" />
                  <text x="20" y="214" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">B</text>

                  <circle cx="20" cy="170" r="8" fill="#475569" />
                  <text x="20" y="173" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">N</text>

                  {/* Line Voltage Indicator (R to Y) */}
                  <line x1="80" y1="52" x2="80" y2="128" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow)" />
                  <rect x="52" y="80" width="56" height="18" rx="3" fill="#0284c7" />
                  <text x="80" y="93" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace">
                    V_L={lineVoltage}V
                  </text>

                  {/* Star Load on Right */}
                  {/* Star Center Neutral Node */}
                  <circle cx="380" cy="150" r="7" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                  <text x="395" y="154" fill="#ffffff" fontSize="11" fontWeight="bold">N</text>

                  {/* Branch R */}
                  <line x1="330" y1="90" x2="380" y2="150" stroke="#ef4444" strokeWidth="2.5" />
                  <rect x="340" y="100" width="30" height="18" rx="3" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
                  <text x="355" y="113" textAnchor="middle" fill="#fca5a5" fontSize="8" fontWeight="bold">Z_R</text>

                  {/* Branch Y */}
                  <line x1="330" y1="150" x2="380" y2="150" stroke="#eab308" strokeWidth="2.5" />
                  <rect x="335" y="141" width="30" height="18" rx="3" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
                  <text x="350" y="154" textAnchor="middle" fill="#fef08a" fontSize="8" fontWeight="bold">Z_Y</text>

                  {/* Branch B */}
                  <line x1="330" y1="210" x2="380" y2="150" stroke="#3b82f6" strokeWidth="2.5" />
                  <rect x="340" y="180" width="30" height="18" rx="3" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
                  <text x="355" y="193" textAnchor="middle" fill="#bfdbfe" fontSize="8" fontWeight="bold">Z_B</text>

                  {/* Phase Voltage Annotation (R to N) */}
                  <text x="310" y="80" textAnchor="end" fill="#f87171" fontSize="9" fontWeight="bold" fontFamily="monospace">
                    V_ph = {phaseVoltage.toFixed(0)}V
                  </text>
                  <text x="310" y="235" textAnchor="end" fill="#60a5fa" fontSize="9" fontWeight="bold" fontFamily="monospace">
                    I_L = I_ph = {lineCurrent.toFixed(1)}A
                  </text>

                  {/* Neutral Note */}
                  <text x="230" y="248" textAnchor="middle" fill="#94a3b8" fontSize="9" fontStyle="italic">
                    Balanced 4-Wire Star: Neutral Current I_N = 0 A
                  </text>
                </svg>
              ) : (
                /* DELTA CIRCUIT SVG */
                <svg viewBox="0 0 460 260" className="w-full h-auto max-h-64 select-none">
                  <defs>
                    <pattern id="grid-delta" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="460" height="260" fill="#090d16" rx="8" />
                  <rect width="460" height="260" fill="url(#grid-delta)" rx="8" />

                  {/* 3 Lines Coming from Left */}
                  {/* Line R */}
                  <path d="M 20 50 L 140 50 L 260 50 L 360 60" fill="none" stroke="#ef4444" strokeWidth="2.5" />
                  {/* Line Y */}
                  <path d="M 20 140 L 140 140 L 260 140 L 410 200" fill="none" stroke="#eab308" strokeWidth="2.5" />
                  {/* Line B */}
                  <path d="M 20 220 L 140 220 L 260 220 L 310 200" fill="none" stroke="#3b82f6" strokeWidth="2.5" />

                  {/* Line Labels Left */}
                  <circle cx="20" cy="50" r="10" fill="#ef4444" />
                  <text x="20" y="54" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">R</text>

                  <circle cx="20" cy="140" r="10" fill="#eab308" />
                  <text x="20" y="144" textAnchor="middle" fill="#000000" fontSize="10" fontWeight="bold">Y</text>

                  <circle cx="20" cy="220" r="10" fill="#3b82f6" />
                  <text x="20" y="224" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">B</text>

                  {/* Line Voltage Indicator (R to Y) */}
                  <line x1="80" y1="52" x2="80" y2="138" stroke="#f59e0b" strokeWidth="1.5" />
                  <rect x="52" y="85" width="56" height="18" rx="3" fill="#d97706" />
                  <text x="80" y="98" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold" fontFamily="monospace">
                    V_L={lineVoltage}V
                  </text>

                  {/* Delta Triangle Nodes on Right */}
                  {/* Node R at (360, 60), Node Y at (410, 200), Node B at (310, 200) */}
                  {/* Branch RY */}
                  <line x1="360" y1="60" x2="410" y2="200" stroke="#f59e0b" strokeWidth="2.5" />
                  <rect x="375" y="120" width="30" height="18" rx="3" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
                  <text x="390" y="133" textAnchor="middle" fill="#fef08a" fontSize="8" fontWeight="bold">Z_RY</text>

                  {/* Branch YB */}
                  <line x1="410" y1="200" x2="310" y2="200" stroke="#10b981" strokeWidth="2.5" />
                  <rect x="345" y="191" width="30" height="18" rx="3" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
                  <text x="360" y="204" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontWeight="bold">Z_YB</text>

                  {/* Branch BR */}
                  <line x1="310" y1="200" x2="360" y2="60" stroke="#8b5cf6" strokeWidth="2.5" />
                  <rect x="315" y="120" width="30" height="18" rx="3" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5" />
                  <text x="330" y="133" textAnchor="middle" fill="#ddd6fe" fontSize="8" fontWeight="bold">Z_BR</text>

                  {/* Delta Corner Dots */}
                  <circle cx="360" cy="60" r="5" fill="#ef4444" />
                  <circle cx="410" cy="200" r="5" fill="#eab308" />
                  <circle cx="310" cy="200" r="5" fill="#3b82f6" />

                  {/* Delta Annotations */}
                  <text x="360" y="45" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="bold" fontFamily="monospace">
                    V_ph = V_L = {lineVoltage}V
                  </text>
                  <text x="210" y="248" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold" fontFamily="monospace">
                    I_ph = {phaseCurrent.toFixed(1)}A  |  I_L = √3·I_ph = {lineCurrent.toFixed(1)}A
                  </text>
                </svg>
              )}
            </div>

            <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800 text-xs font-mono text-center">
              {connection === 'star' ? (
                <span className="text-sky-300">
                  STAR LAW: <strong className="text-white">V_L = √3 · V_ph</strong> ({lineVoltage}V = 1.732 × {phaseVoltage.toFixed(1)}V) &nbsp;|&nbsp; <strong className="text-white">I_L = I_ph</strong> ({lineCurrent.toFixed(2)}A)
                </span>
              ) : (
                <span className="text-amber-300">
                  DELTA LAW: <strong className="text-white">V_L = V_ph</strong> ({lineVoltage}V) &nbsp;|&nbsp; <strong className="text-white">I_L = √3 · I_ph</strong> ({lineCurrent.toFixed(2)}A = 1.732 × {phaseCurrent.toFixed(2)}A)
                </span>
              )}
            </div>
          </div>

          {/* Right: Dynamic Phasor Geometry Visualizer */}
          <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2 border-b border-slate-800 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Compass className="w-4 h-4 text-sky-400" />
                {t.phasorTitle}
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                θ = {rotAngle.toFixed(0)}°
              </span>
            </div>

            {/* SVG Phasor Constellation */}
            <div className="w-full flex items-center justify-center py-1">
              <svg viewBox="-140 -140 280 280" className="w-64 h-64 select-none">
                {/* Background Concentric Circles & Crosshair */}
                <circle cx="0" cy="0" r="120" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="0" cy="0" r="80" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="0" cy="0" r="40" fill="none" stroke="#1e293b" strokeWidth="1" />
                <line x1="-130" y1="0" x2="130" y2="0" stroke="#334155" strokeWidth="0.8" />
                <line x1="0" y1="-130" x2="0" y2="130" stroke="#334155" strokeWidth="0.8" />

                {/* Rotating Group */}
                <g transform={`rotate(${rotAngle})`}>
                  {/* Reference Phase Vectors (120 deg apart) */}
                  {/* Phase R (0 deg) */}
                  <line x1="0" y1="0" x2="70" y2="0" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrow)" />
                  <circle cx="70" cy="0" r="3.5" fill="#ef4444" />
                  <text x="82" y="4" fill="#f87171" fontSize="10" fontWeight="bold" fontFamily="monospace">V_R</text>

                  {/* Phase Y (-120 deg / +240 deg) */}
                  {/* cos(120) = -0.5, sin(120) = 0.866 (SVG down is +y, so -120 deg has y = -sin(-120) = +0.866) */}
                  <line x1="0" y1="0" x2="-35" y2="60.6" stroke="#eab308" strokeWidth="2.5" />
                  <circle cx="-35" cy="60.6" r="3.5" fill="#eab308" />
                  <text x="-48" y="74" fill="#facc15" fontSize="10" fontWeight="bold" fontFamily="monospace">V_Y</text>

                  {/* Phase B (-240 deg / +120 deg) */}
                  <line x1="0" y1="0" x2="-35" y2="-60.6" stroke="#3b82f6" strokeWidth="2.5" />
                  <circle cx="-35" cy="-60.6" r="3.5" fill="#3b82f6" />
                  <text x="-48" y="-68" fill="#60a5fa" fontSize="10" fontWeight="bold" fontFamily="monospace">V_B</text>

                  {/* If STAR: Show Line Voltage V_RY = V_R - V_Y */}
                  {connection === 'star' ? (
                    <>
                      {/* -V_Y helper vector */}
                      <line x1="0" y1="0" x2="35" y2="-60.6" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 2" />
                      <text x="42" y="-65" fill="#94a3b8" fontSize="8" fontFamily="monospace">-V_Y</text>

                      {/* Parallelogram dashed lines */}
                      <line x1="70" y1="0" x2="105" y2="-60.6" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2 2" />
                      <line x1="35" y1="-60.6" x2="105" y2="-60.6" stroke="#38bdf8" strokeWidth="0.8" strokeDasharray="2 2" />

                      {/* Resultant Line Voltage Vector V_RY at +30° (magnitude = 70 * √3 = 121.2) */}
                      {/* Angle is -30° in SVG coords => x = 121.2 * cos(30) = 105, y = -121.2 * sin(30) = -60.6 */}
                      <line x1="0" y1="0" x2="105" y2="-60.6" stroke="#38bdf8" strokeWidth="3" />
                      <circle cx="105" cy="-60.6" r="4" fill="#38bdf8" />
                      <text x="114" y="-65" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
                        V_RY (√3·V_ph ∠30°)
                      </text>
                    </>
                  ) : (
                    /* If DELTA: Show Line Current I_R = I_RY - I_BR */
                    <>
                      {/* Branch Currents I_RY, I_YB, I_BR */}
                      {/* I_RY lags V_RY by load angle phi */}
                      <line x1="0" y1="0" x2="60" y2="0" stroke="#f59e0b" strokeWidth="2" />
                      {/* -I_BR helper vector */}
                      <line x1="0" y1="0" x2="30" y2="52" stroke="#64748b" strokeWidth="1.2" strokeDasharray="3 2" />
                      <text x="35" y="62" fill="#94a3b8" fontSize="8" fontFamily="monospace">-I_BR</text>

                      {/* Resultant Line Current I_R (magnitude = 60 * √3 = 104) at -30 deg */}
                      <line x1="0" y1="0" x2="90" y2="52" stroke="#10b981" strokeWidth="3" />
                      <circle cx="90" cy="52" r="4" fill="#10b981" />
                      <text x="96" y="60" fill="#34d399" fontSize="10" fontWeight="bold" fontFamily="monospace">
                        I_R (√3·I_ph ∠-30°)
                      </text>
                    </>
                  )}
                </g>
              </svg>
            </div>

            <p className="text-[11px] text-slate-300 bg-slate-900/70 p-2.5 rounded-lg border border-slate-800 text-center leading-relaxed">
              {connection === 'star' ? t.phasorNoticeStar : t.phasorNoticeDelta}
            </p>
          </div>
        </div>

        {/* Detailed Star vs Delta Comparison Table */}
        <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-5 shadow-sm overflow-hidden">
          <h4 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            {t.compTitle}
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/70">
                  <th className="py-2.5 px-3 font-semibold text-slate-300">{t.paramHeader}</th>
                  <th className="py-2.5 px-3 font-semibold text-sky-400">{t.starHeader}</th>
                  <th className="py-2.5 px-3 font-semibold text-amber-400">{t.deltaHeader}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2 px-3 text-slate-300 font-sans font-medium">{t.vRel}</td>
                  <td className="py-2 px-3 text-sky-300 font-bold">V_L = √3 · V_ph &nbsp;(V_ph = V_L / 1.732)</td>
                  <td className="py-2 px-3 text-amber-300 font-bold">V_L = V_ph &nbsp;(100% full line voltage)</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2 px-3 text-slate-300 font-sans font-medium">{t.iRel}</td>
                  <td className="py-2 px-3 text-sky-300 font-bold">I_L = I_ph &nbsp;(Equal)</td>
                  <td className="py-2 px-3 text-amber-300 font-bold">I_L = √3 · I_ph &nbsp;(I_ph = I_L / 1.732)</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2 px-3 text-slate-300 font-sans font-medium">{t.neutralAvail}</td>
                  <td className="py-2 px-3 text-slate-300 font-sans">{t.neutralYes}</td>
                  <td className="py-2 px-3 text-slate-300 font-sans">{t.neutralNo}</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2 px-3 text-slate-300 font-sans font-medium">{t.insulationReq}</td>
                  <td className="py-2 px-3 text-slate-300 font-sans">{t.insulationStar}</td>
                  <td className="py-2 px-3 text-slate-300 font-sans">{t.insulationDelta}</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-2 px-3 text-slate-300 font-sans font-medium">{t.starterApp}</td>
                  <td className="py-2 px-3 text-slate-300 font-sans">{t.starterDesc}</td>
                  <td className="py-2 px-3 text-slate-300 font-sans">{t.starterDeltaDesc}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
