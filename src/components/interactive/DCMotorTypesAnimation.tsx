import React, { useState } from 'react';
import { Layers, RotateCcw, Activity, AlertTriangle, CheckCircle2, Sliders, Info, Zap } from 'lucide-react';

interface DCMotorTypesAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

export type MotorTypeKey = 'shunt' | 'series' | 'cumulative' | 'differential';

export const DCMotorTypesAnimation: React.FC<DCMotorTypesAnimationProps> = ({ language = 'en' }) => {
  const [selectedType, setSelectedType] = useState<MotorTypeKey>('shunt');
  const [armatureCurrent, setArmatureCurrent] = useState<number>(40); // Ia in Amps (5 - 100A)
  const [supplyVoltage, setSupplyVoltage] = useState<number>(230); // Volts
  const [activeTab, setActiveTab] = useState<'speedTorque' | 'torqueCurrent' | 'speedCurrent'>('speedTorque');

  // Base machine constants
  const noLoadSpeedRpm = 1500;
  const Ra = 0.25; // Armature resistance
  const Rse = 0.15; // Series field resistance

  // Calculate speed and torque based on motor physics
  // Safe Ia
  const safeIa = Math.max(1, armatureCurrent);
  const safeV = Math.max(100, supplyVoltage);

  let fluxFactor = 1.0;
  let currentSpeed = 1500;
  let developedTorque = 50;
  let speedRegulationPercent = 0;
  let dangerWarning = false;

  switch (selectedType) {
    case 'shunt': {
      // Shunt: Flux is virtually constant. Speed drops slightly due to Ia*Ra drop.
      // Eb = V - Ia*Ra
      const Eb = safeV - safeIa * Ra;
      fluxFactor = 1.0;
      currentSpeed = Math.max(100, (Eb / safeV) * noLoadSpeedRpm);
      developedTorque = 1.2 * fluxFactor * safeIa; // T ∝ Ia
      speedRegulationPercent = ((noLoadSpeedRpm - currentSpeed) / currentSpeed) * 100;
      break;
    }
    case 'series': {
      // Series: Flux ∝ Ia (below saturation). At very low Ia, speed races to dangerous levels.
      // Flux factor increases with Ia, saturating at heavy currents
      fluxFactor = Math.min(2.5, 0.2 + (safeIa / 30));
      const Eb = safeV - safeIa * (Ra + Rse);
      // N ∝ Eb / Phi. If Ia is tiny (< 10A), speed becomes extremely high!
      currentSpeed = Math.max(150, (Eb / (fluxFactor * safeV)) * 1400);
      // T ∝ Phi * Ia = Ia^2 (before full saturation)
      developedTorque = 1.1 * fluxFactor * safeIa;
      if (safeIa < 12) {
        dangerWarning = true;
      }
      speedRegulationPercent = 85; // Very high regulation / variable speed
      break;
    }
    case 'cumulative': {
      // Cumulative Compound: Shunt flux + Series flux aiding
      fluxFactor = 1.0 + 0.015 * safeIa;
      const Eb = safeV - safeIa * (Ra + Rse);
      currentSpeed = Math.max(200, (Eb / (fluxFactor * safeV)) * noLoadSpeedRpm);
      developedTorque = 1.15 * fluxFactor * safeIa;
      speedRegulationPercent = ((noLoadSpeedRpm - currentSpeed) / currentSpeed) * 100;
      break;
    }
    case 'differential': {
      // Differential Compound: Shunt flux - Series flux opposing
      fluxFactor = Math.max(0.3, 1.0 - 0.012 * safeIa);
      const Eb = safeV - safeIa * (Ra + Rse);
      // Speed increases or stays flat with load, prone to instability!
      currentSpeed = (Eb / (fluxFactor * safeV)) * noLoadSpeedRpm;
      developedTorque = 0.95 * fluxFactor * safeIa;
      speedRegulationPercent = ((noLoadSpeedRpm - currentSpeed) / currentSpeed) * 100;
      break;
    }
  }

  const handleReset = () => {
    setSelectedType('shunt');
    setArmatureCurrent(40);
    setSupplyVoltage(230);
    setActiveTab('speedTorque');
  };

  const labels = {
    en: {
      title: 'DC Motor Types & Characteristic Curves Visualizer',
      subtitle: 'Compare Shunt, Series, Cumulative Compound, and Differential Compound DC motors, analyze Speed vs Torque (N-T) and Torque vs Current (T-Ia) curves.',
      reset: 'Reset Defaults',
      typeShunt: 'DC Shunt Motor',
      typeSeries: 'DC Series Motor',
      typeCumulative: 'Cumulative Compound',
      typeDifferential: 'Differential Compound',
      tabSpeedTorque: 'Speed vs Torque (N - T)',
      tabTorqueCurrent: 'Torque vs Current (T - Ia)',
      tabSpeedCurrent: 'Speed vs Current (N - Ia)',
      armCurrent: 'Armature / Load Current (Ia)',
      supplyVoltage: 'Supply Voltage (V)',
      speedBadge: 'Operating Speed (N)',
      torqueBadge: 'Developed Torque (Ta)',
      regulationBadge: 'Speed Regulation',
      fluxFactorBadge: 'Net Field Flux Factor (Φ)',
      seriesDanger: 'DANGER: Low Load Runway! Series motors must NEVER be started at no-load, as N reaches destructive runaway speeds (N → ∞)!',
      shuntHealthy: 'Constant-Speed Drive: Self-regulating field provides small 4–8% speed droop from no-load to full-load.',
      cumulativeHealthy: 'Stable High-Torque Drive: Series field boosts starting torque while shunt field safely caps maximum no-load speed.',
      diffWarning: 'Unstable Motor: Opposing series field causes speed to rise with load, leading to hunting and magnetic instability.',
      applicationsTitle: 'Primary Industrial Applications'
    },
    hi: {
      title: 'डीसी मोटरों के प्रकार एवं विशेषता वक्र विज़ुअलाइज़र',
      subtitle: 'शंट, सीरीज, संचयी यौगिक (Cumulative) एवं विभेदी यौगिक (Differential) मोटरों की तुलना करें तथा गति-टॉर्क (N-T) व टॉर्क-करेंट (T-Ia) वक्रों का विश्लेषण करें।',
      reset: 'डिफ़ॉल्ट रीसेट',
      typeShunt: 'डीसी शंट मोटर',
      typeSeries: 'डीसी सीरीज मोटर',
      typeCumulative: 'कम्युलेटिव कंपाउंड मोटर',
      typeDifferential: 'डिफरेंशियल कंपाउंड मोटर',
      tabSpeedTorque: 'गति बनाम टॉर्क (N - T)',
      tabTorqueCurrent: 'टॉर्क बनाम करंट (T - Ia)',
      tabSpeedCurrent: 'गति बनाम करंट (N - Ia)',
      armCurrent: 'आर्मेचर / लोड धारा (Ia)',
      supplyVoltage: 'सप्लाई वोल्टेज (V)',
      speedBadge: 'प्रचालन गति (N)',
      torqueBadge: 'विकसित टॉर्क (Ta)',
      regulationBadge: 'गति नियमन (Speed Reg)',
      fluxFactorBadge: 'कुल फील्ड फ्लक्स गुणक (Φ)',
      seriesDanger: 'खतरा: नो-लोड पर खतरनाक गति! सीरीज मोटर को कभी भी बिना भार के स्टार्ट नहीं करना चाहिए क्योंकि गति अत्यधिक बढ़ जाती है (N → ∞)!',
      shuntHealthy: 'स्थिर-गति ड्राइव: स्थिर फील्ड के कारण नो-लोड से फुल-लोड तक गति केवल 4-8% घटती है।',
      cumulativeHealthy: 'उच्च प्रारंभिक टॉर्क: सीरीज फील्ड स्टार्टिंग टॉर्क बढ़ाता है और शंट फील्ड नो-लोड पर गति को नियंत्रित रखता है।',
      diffWarning: 'अस्थिर मोटर: विरोधी सीरीज फील्ड के कारण लोड बढ़ने पर गति बढ़ती है, जिससे अस्थिरता उत्पन्न होती है।',
      applicationsTitle: 'प्रमुख औद्योगिक अनुप्रयोग'
    },
    bn: {
      title: 'ডিসি মোটরের প্রকারভেদ ও বৈশিষ্ট্যমূলক রেখাচিত্র',
      subtitle: 'সান্ট, সিরিজ, কিউমুলেটিভ কম্পাউন্ড এবং ডিফারেনশিয়াল কম্পাউন্ড মোটরের তুলনামূলক বিশ্লেষণ এবং গতি-টর্ক (N-T) ও টর্ক-কারেন্ট (T-Ia) কার্ভ নিরীক্ষণ।',
      reset: 'রিসেট ডিফল্ট',
      typeShunt: 'ডিসি সান্ট মোটর',
      typeSeries: 'ডিসি সিরিজ মোটর',
      typeCumulative: 'কিউমুলেটিভ কম্পাউন্ড',
      typeDifferential: 'ডিফারেনশিয়াল কম্পাউন্ড',
      tabSpeedTorque: 'গতি বনাম টর্ক (N - T)',
      tabTorqueCurrent: 'টর্ক বনাম কারেন্ট (T - Ia)',
      tabSpeedCurrent: 'গতি বনাম কারেন্ট (N - Ia)',
      armCurrent: 'আর্মেচার / লোড কারেন্ট (Ia)',
      supplyVoltage: 'সরবরাহ ভোল্টেজ (V)',
      speedBadge: 'বর্তমান গতি (N)',
      torqueBadge: 'উৎপন্ন টর্ক (Ta)',
      regulationBadge: 'গতি নিয়ন্ত্রণ (Speed Reg)',
      fluxFactorBadge: 'নেট ফিল্ড ফ্লাক্স ফ্যাক্টর (Φ)',
      seriesDanger: 'বিপদ: নো-লোডে মারাত্মক অতিরিক্ত গতি! ডিসি সিরিজ মোটর কখনো লোড ছাড়া চালানো যাবে না (N → ∞)!',
      shuntHealthy: 'ধ্রুব-গতি ড্রাইভ: নো-লোড থেকে ফুল-লোড পর্যন্ত গতি প্রায় অপরিবর্তিত থাকে (৪-৮% হ্রাস)।',
      cumulativeHealthy: 'উচ্চ প্রারম্ভিক টর্ক: সিরিজ ফিল্ড শুরুর টর্ক বাড়ায় এবং সান্ট ফিল্ড সর্বোচ্চ গতি নিরাপদ রাখে।',
      diffWarning: 'অস্থিতিশীল মোটর: বিপরীত সিরিজ ফিল্ডের কারণে লোড বাড়লে গতি বৃদ্ধি পায় যা বিপজ্জনক।',
      applicationsTitle: 'প্রধান শিল্প প্রয়োগ'
    }
  }[language];

  // App descriptions
  const apps = {
    shunt: {
      en: 'Lathes, centrifugal pumps, machine tools, blowers, woodworking machinery, weaving machines.',
      hi: 'लेथ मशीन, सेंट्रीफ्यूगल पंप, मशीन टूल्स, ब्लोअर, लकड़ी का काम करने वाली मशीनें।',
      bn: 'লেথ মেশিন, সেন্ট্রিফিউগাল পাম্প, মেশিন টুলস, ব্লোয়ার, টেক্সটাইল মেশিন।'
    },
    series: {
      en: 'Electric locomotives, urban trains/trams, cranes, hoists, trolley buses, heavy winches.',
      hi: 'इलेक्ट्रिक लोकोमोटिव (रेलवे), क्रेन, होइस्ट, लिफ्ट, ट्रॉली बसें, भारी भारोत्तोलक।',
      bn: 'বৈদ্যুতিক ট্রেন, ক্রেন, হয়েস্ট, লিফট, ভারী উত্তোলন যন্ত্রপাতি।'
    },
    cumulative: {
      en: 'Punching presses, shears, heavy rolling mills, elevators, conveyors with pulsating loads.',
      hi: 'पंचिंग प्रेस, रोलिंग मिल, भारी प्रेस मशीनें, एलिवेटर, भारी कन्वेयर बेल्ट।',
      bn: 'পাঞ্চিং প্রেস, রোলিং মিল, শেয়ারিং মেশিন, লিফট/এলিভেটর, ভারী কনভেয়র।'
    },
    differential: {
      en: 'Rarely used in practice due to poor stability and dangerous speed escalation on overload.',
      hi: 'व्यावहारिक रूप से बहुत कम उपयोग, क्योंकि ओवरलोड पर गति बढ़ने से अस्थिरता आती है।',
      bn: 'অস্থিতিশীলতার কারণে শিল্পক্ষেত্রে ব্যবহার খুবই সীমিত ও বিরল।'
    }
  }[selectedType][language];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 md:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-6 h-6 text-sky-400" />
            <h3 className="text-lg md:text-xl font-bold text-slate-100">{labels.title}</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>
        <button
          onClick={handleReset}
          aria-label={labels.reset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors w-fit"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {labels.reset}
        </button>
      </div>

      {/* Motor Type Selector Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <button
          onClick={() => setSelectedType('shunt')}
          aria-pressed={selectedType === 'shunt'}
          className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
            selectedType === 'shunt'
              ? 'bg-sky-600/30 border-sky-400 text-sky-200 shadow-md ring-1 ring-sky-400'
              : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
          }`}
        >
          {labels.typeShunt}
        </button>
        <button
          onClick={() => setSelectedType('series')}
          aria-pressed={selectedType === 'series'}
          className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
            selectedType === 'series'
              ? 'bg-amber-600/30 border-amber-400 text-amber-200 shadow-md ring-1 ring-amber-400'
              : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
          }`}
        >
          {labels.typeSeries}
        </button>
        <button
          onClick={() => setSelectedType('cumulative')}
          aria-pressed={selectedType === 'cumulative'}
          className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
            selectedType === 'cumulative'
              ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 shadow-md ring-1 ring-emerald-400'
              : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
          }`}
        >
          {labels.typeCumulative}
        </button>
        <button
          onClick={() => setSelectedType('differential')}
          aria-pressed={selectedType === 'differential'}
          className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
            selectedType === 'differential'
              ? 'bg-rose-600/30 border-rose-400 text-rose-200 shadow-md ring-1 ring-rose-400'
              : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
          }`}
        >
          {labels.typeDifferential}
        </button>
      </div>

      {/* Main Grid: Characteristic Graphs + Topology & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Dynamic Characteristic Curve SVG Graph (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-xl p-4 flex flex-col space-y-3">
          {/* Curve Selector Pills */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5 text-[11px]">
              <button
                onClick={() => setActiveTab('speedTorque')}
                className={`px-2.5 py-1 rounded-md font-bold transition-colors ${
                  activeTab === 'speedTorque' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                N vs T
              </button>
              <button
                onClick={() => setActiveTab('torqueCurrent')}
                className={`px-2.5 py-1 rounded-md font-bold transition-colors ${
                  activeTab === 'torqueCurrent' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                T vs Ia
              </button>
              <button
                onClick={() => setActiveTab('speedCurrent')}
                className={`px-2.5 py-1 rounded-md font-bold transition-colors ${
                  activeTab === 'speedCurrent' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                N vs Ia
              </button>
            </div>
            <span className="text-xs font-mono text-slate-400">Operating: {safeIa}A | {currentSpeed.toFixed(0)} RPM</span>
          </div>

          {/* SVG Graph Canvas */}
          <div className="w-full overflow-hidden bg-slate-900/60 rounded-lg p-2 border border-slate-800">
            <svg viewBox="0 0 460 250" className="w-full h-auto max-h-[240px]" aria-label="DC Motor Characteristic Curves">
              {/* Grid Lines */}
              <g stroke="#334155" strokeWidth="0.8" strokeDasharray="3,3">
                <line x1="60" y1="40" x2="420" y2="40" />
                <line x1="60" y1="80" x2="420" y2="80" />
                <line x1="60" y1="120" x2="420" y2="120" />
                <line x1="60" y1="160" x2="420" y2="160" />
                <line x1="60" y1="200" x2="420" y2="200" />
                
                <line x1="132" y1="20" x2="132" y2="200" />
                <line x1="204" y1="20" x2="204" y2="200" />
                <line x1="276" y1="20" x2="276" y2="200" />
                <line x1="348" y1="20" x2="348" y2="200" />
                <line x1="420" y1="20" x2="420" y2="200" />
              </g>

              {/* Main Axes */}
              <line x1="60" y1="20" x2="60" y2="200" stroke="#94a3b8" strokeWidth="2" />
              <line x1="60" y1="200" x2="430" y2="200" stroke="#94a3b8" strokeWidth="2" />

              {/* Axis Arrows */}
              <polygon points="60,15 56,22 64,22" fill="#94a3b8" />
              <polygon points="435,200 427,196 427,204" fill="#94a3b8" />

              {/* Axis Labels based on active tab */}
              {activeTab === 'speedTorque' && (
                <>
                  <text x="35" y="30" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Speed N (RPM)</text>
                  <text x="380" y="222" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">Torque T (N·m) →</text>
                  
                  {/* Shunt Curve (Blue): nearly flat, droops slightly */}
                  <path d="M 60 70 Q 240 85 410 105" fill="none" stroke="#38bdf8" strokeWidth={selectedType === 'shunt' ? 3.5 : 1.5} opacity={selectedType === 'shunt' ? 1 : 0.35} />
                  
                  {/* Series Curve (Amber): Hyperbolic / Drooping sharply */}
                  <path d="M 75 35 Q 120 130 410 175" fill="none" stroke="#fbbf24" strokeWidth={selectedType === 'series' ? 3.5 : 1.5} opacity={selectedType === 'series' ? 1 : 0.35} />
                  
                  {/* Cumulative Curve (Emerald): Intermediate droop */}
                  <path d="M 60 70 Q 240 110 410 135" fill="none" stroke="#34d399" strokeWidth={selectedType === 'cumulative' ? 3.5 : 1.5} opacity={selectedType === 'cumulative' ? 1 : 0.35} />
                  
                  {/* Differential Curve (Rose): Speed slightly rises with load */}
                  <path d="M 60 70 Q 240 55 410 45" fill="none" stroke="#fb7185" strokeWidth={selectedType === 'differential' ? 3.5 : 1.5} opacity={selectedType === 'differential' ? 1 : 0.35} />
                </>
              )}

              {activeTab === 'torqueCurrent' && (
                <>
                  <text x="35" y="30" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">Torque T (N·m)</text>
                  <text x="380" y="222" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Armature Current Ia (A) →</text>
                  
                  {/* Shunt Curve (Blue): Straight line T ∝ Ia */}
                  <path d="M 60 200 L 410 80" fill="none" stroke="#38bdf8" strokeWidth={selectedType === 'shunt' ? 3.5 : 1.5} opacity={selectedType === 'shunt' ? 1 : 0.35} />
                  
                  {/* Series Curve (Amber): Parabola T ∝ Ia^2 initially, then straightens */}
                  <path d="M 60 200 Q 200 180 410 40" fill="none" stroke="#fbbf24" strokeWidth={selectedType === 'series' ? 3.5 : 1.5} opacity={selectedType === 'series' ? 1 : 0.35} />
                  
                  {/* Cumulative Curve (Emerald): Slightly above shunt */}
                  <path d="M 60 200 Q 220 150 410 60" fill="none" stroke="#34d399" strokeWidth={selectedType === 'cumulative' ? 3.5 : 1.5} opacity={selectedType === 'cumulative' ? 1 : 0.35} />
                  
                  {/* Differential Curve (Rose): Below shunt */}
                  <path d="M 60 200 L 410 115" fill="none" stroke="#fb7185" strokeWidth={selectedType === 'differential' ? 3.5 : 1.5} opacity={selectedType === 'differential' ? 1 : 0.35} />
                </>
              )}

              {activeTab === 'speedCurrent' && (
                <>
                  <text x="35" y="30" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Speed N (RPM)</text>
                  <text x="380" y="222" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">Armature Current Ia (A) →</text>
                  
                  {/* Shunt Curve (Blue) */}
                  <path d="M 60 70 L 410 95" fill="none" stroke="#38bdf8" strokeWidth={selectedType === 'shunt' ? 3.5 : 1.5} opacity={selectedType === 'shunt' ? 1 : 0.35} />
                  
                  {/* Series Curve (Amber) */}
                  <path d="M 75 35 Q 120 130 410 170" fill="none" stroke="#fbbf24" strokeWidth={selectedType === 'series' ? 3.5 : 1.5} opacity={selectedType === 'series' ? 1 : 0.35} />
                  
                  {/* Cumulative Curve (Emerald) */}
                  <path d="M 60 70 Q 240 105 410 130" fill="none" stroke="#34d399" strokeWidth={selectedType === 'cumulative' ? 3.5 : 1.5} opacity={selectedType === 'cumulative' ? 1 : 0.35} />
                  
                  {/* Differential Curve (Rose) */}
                  <path d="M 60 70 Q 240 55 410 45" fill="none" stroke="#fb7185" strokeWidth={selectedType === 'differential' ? 3.5 : 1.5} opacity={selectedType === 'differential' ? 1 : 0.35} />
                </>
              )}

              {/* Operating Point Marker */}
              {(() => {
                const currentFraction = (safeIa - 5) / 95;
                const plotX = 60 + currentFraction * 340;
                let plotY = 90;
                if (activeTab === 'speedTorque') {
                  plotY = selectedType === 'shunt' ? 70 + currentFraction * 35
                    : selectedType === 'series' ? Math.max(35, 175 - Math.sqrt(1 - currentFraction) * 140)
                    : selectedType === 'cumulative' ? 70 + currentFraction * 65
                    : 70 - currentFraction * 25;
                } else if (activeTab === 'torqueCurrent') {
                  plotY = selectedType === 'shunt' ? 200 - currentFraction * 120
                    : selectedType === 'series' ? 200 - Math.pow(currentFraction, 1.4) * 160
                    : selectedType === 'cumulative' ? 200 - Math.pow(currentFraction, 1.2) * 140
                    : 200 - currentFraction * 85;
                } else {
                  plotY = selectedType === 'shunt' ? 70 + currentFraction * 25
                    : selectedType === 'series' ? Math.max(35, 170 - Math.sqrt(1 - currentFraction) * 135)
                    : selectedType === 'cumulative' ? 70 + currentFraction * 60
                    : 70 - currentFraction * 25;
                }

                return (
                  <g transform={`translate(${plotX}, ${plotY})`}>
                    <circle cx="0" cy="0" r="7" fill="#ffffff" stroke="#e11d48" strokeWidth="2.5" />
                    <circle cx="0" cy="0" r="3" fill="#e11d48" />
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Curve Color Legend */}
          <div className="flex flex-wrap items-center justify-between text-[10px] text-slate-400 px-1">
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block" /> Shunt (Constant Flux)</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Series (T ∝ Ia²)</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" /> Cumulative (Aiding Series)</span>
            <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" /> Differential (Opposing)</span>
          </div>

          {/* Educational Note */}
          <div className="text-[10px] text-slate-500 italic">
            * Curves represent normalized conceptual characteristics per standard electrical engineering textbooks (Theraja, Bimbhra).
          </div>
        </div>

        {/* Right: Telemetry, Advice & Sliders (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Safety / Operational Status Card */}
          {dangerWarning ? (
            <div className="bg-rose-950/60 border-2 border-rose-500/80 rounded-xl p-3.5 text-rose-200 text-xs shadow-lg space-y-1.5 animate-pulse">
              <div className="flex items-center gap-2 font-bold text-rose-400 text-sm">
                <AlertTriangle className="w-5 h-5" />
                <span>Excessive No-Load Speed (Runaway)</span>
              </div>
              <p className="text-[11px] leading-relaxed">{labels.seriesDanger}</p>
            </div>
          ) : selectedType === 'shunt' ? (
            <div className="bg-sky-950/40 border border-sky-500/40 rounded-xl p-3.5 text-sky-200 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-sky-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Constant Speed Profile</span>
              </div>
              <p className="text-[11px] text-slate-300">{labels.shuntHealthy}</p>
            </div>
          ) : selectedType === 'cumulative' ? (
            <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3.5 text-emerald-200 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Heavy Duty Starting Profile</span>
              </div>
              <p className="text-[11px] text-slate-300">{labels.cumulativeHealthy}</p>
            </div>
          ) : (
            <div className="bg-rose-950/40 border border-rose-500/40 rounded-xl p-3.5 text-rose-200 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-rose-400">
                <AlertTriangle className="w-4 h-4" />
                <span>Unstable Magnetic Opposing Field</span>
              </div>
              <p className="text-[11px] text-slate-300">{labels.diffWarning}</p>
            </div>
          )}

          {/* Telemetry Metrics */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3">
              <div className="text-slate-400 font-semibold">{labels.speedBadge}</div>
              <div className="text-2xl font-extrabold text-sky-400 font-mono my-0.5">
                {currentSpeed.toFixed(0)} <span className="text-xs text-slate-400">RPM</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono">N = (Eb / Φ) · k</div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3">
              <div className="text-slate-400 font-semibold">{labels.torqueBadge}</div>
              <div className="text-2xl font-extrabold text-amber-400 font-mono my-0.5">
                {developedTorque.toFixed(1)} <span className="text-xs text-slate-400">N·m</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono">Ta = kt · Φ · Ia</div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3">
              <div className="text-slate-400 font-semibold">{labels.fluxFactorBadge}</div>
              <div className="text-xl font-bold text-emerald-400 font-mono my-0.5">
                {fluxFactor.toFixed(2)} × Φ₀
              </div>
              <div className="text-[10px] text-slate-500">Net Field Strength</div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3">
              <div className="text-slate-400 font-semibold">{labels.regulationBadge}</div>
              <div className="text-xl font-bold text-indigo-400 font-mono my-0.5">
                {Math.abs(speedRegulationPercent).toFixed(1)}%
              </div>
              <div className="text-[10px] text-slate-500">(N_NL - N_FL)/N_FL</div>
            </div>
          </div>

          {/* Interactive Sliders */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <Sliders className="w-4 h-4 text-sky-400" />
              <span>Load Controls</span>
            </div>

            {/* Armature Current */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.armCurrent}</span>
                <span className="font-mono text-emerald-400 font-bold">{armatureCurrent} A</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="2"
                value={armatureCurrent}
                aria-label={labels.armCurrent}
                onChange={(e) => setArmatureCurrent(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Supply Voltage */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.supplyVoltage}</span>
                <span className="font-mono text-sky-400 font-bold">{supplyVoltage} V</span>
              </div>
              <input
                type="range"
                min="180"
                max="440"
                step="10"
                value={supplyVoltage}
                aria-label={labels.supplyVoltage}
                onChange={(e) => setSupplyVoltage(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>
          </div>

          {/* Industrial Applications Card */}
          <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 text-xs space-y-1">
            <div className="text-slate-300 font-bold flex items-center gap-1.5 text-[11px]">
              <Info className="w-3.5 h-3.5 text-sky-400" />
              <span>{labels.applicationsTitle}</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">{apps}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
