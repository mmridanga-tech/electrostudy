import React, { useState, useEffect } from 'react';
import { Activity, Play, RotateCcw, AlertTriangle, CheckCircle2, Zap, Flame, ShieldAlert, Sliders } from 'lucide-react';

interface DCGeneratorCharacteristicsAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

export const DCGeneratorCharacteristicsAnimation: React.FC<DCGeneratorCharacteristicsAnimationProps> = ({ language = 'en' }) => {
  const [speedRpm, setSpeedRpm] = useState<number>(1200);
  const [fieldResistance, setFieldResistance] = useState<number>(75);
  const [residualVoltage, setResidualVoltage] = useState<number>(8); // Volts
  const [fieldPolarity, setFieldPolarity] = useState<'normal' | 'reversed'>('normal');
  const [activeTab, setActiveTab] = useState<'buildup' | 'load-curves'>('buildup');
  const [buildUpStep, setBuildUpStep] = useState<number>(0);
  const [isBuildingUp, setIsBuildingUp] = useState<boolean>(false);
  const [flashedMessage, setFlashedMessage] = useState<string | null>(null);

  // Rated speed benchmark
  const ratedSpeed = 1200;
  // Critical resistance at rated speed: slope of air-gap line
  // At 1200 RPM, airgap line is approx 100 V per 1.0 A => 100 Ω
  const baseRc = 100;
  const criticalResistance = baseRc * (speedRpm / ratedSpeed);
  const criticalSpeed = (ratedSpeed * fieldResistance) / baseRc;

  // Build up outcome status
  const hasResidual = residualVoltage > 0.5;
  const isPolarityCorrect = fieldPolarity === 'normal';
  const isResistanceOk = fieldResistance < criticalResistance;
  const isSpeedOk = speedRpm >= criticalSpeed;

  const canBuildUp = hasResidual && isPolarityCorrect && isResistanceOk && isSpeedOk;

  // Calculate steady-state built up voltage
  // OCC formula approximation: E0(If) = (speedRpm / ratedSpeed) * (residualVoltage + (220 * If) / (1.0 + 0.5 * If))
  // Solve for intersection with V = If * Rf:
  // If * Rf = (speed / 1200) * (E_res + 220*If / (1 + 0.5*If))
  let steadyVoltage = residualVoltage;
  let steadyIf = 0;

  if (canBuildUp) {
    // Numerical root search for If in [0, 4]
    for (let testIf = 0.05; testIf <= 4.0; testIf += 0.01) {
      const occEmf = (speedRpm / ratedSpeed) * (residualVoltage + (220 * testIf) / (1.0 + 0.5 * testIf));
      const vLine = testIf * fieldResistance;
      if (Math.abs(occEmf - vLine) < 1.0) {
        steadyIf = testIf;
        steadyVoltage = occEmf;
      }
    }
  } else {
    steadyVoltage = hasResidual && isPolarityCorrect ? residualVoltage : 0;
    steadyIf = steadyVoltage / fieldResistance;
  }

  // Step-by-step build-up animation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isBuildingUp) {
      if (buildUpStep < 6) {
        timer = setTimeout(() => {
          setBuildUpStep((prev) => prev + 1);
        }, 600);
      } else {
        setIsBuildingUp(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isBuildingUp, buildUpStep]);

  const handleStartBuildUp = () => {
    setBuildUpStep(1);
    setIsBuildingUp(true);
  };

  const handleFlashField = () => {
    setResidualVoltage(10);
    setFieldPolarity('normal');
    setFlashedMessage('Field Flashed Successfully! 10V residual magnetism restored.');
    setTimeout(() => setFlashedMessage(null), 4000);
  };

  const labels = {
    en: {
      title: 'DC Generator Characteristics & Voltage Build-Up Simulator',
      subtitle: 'Simulate the Open Circuit Characteristic (OCC), self-excitation build-up feedback loop, critical resistance Rc, and critical speed Nc.',
      tabBuildUp: 'OCC & Voltage Build-Up',
      tabLoadCurves: 'External Load Curves (V vs IL)',
      speed: 'Rotational Speed (N)',
      fieldResistance: 'Field Resistance (Rf)',
      residualVolt: 'Residual Voltage (Eres)',
      polarity: 'Field Polarity',
      normalPol: 'Correct (Aiding)',
      reversedPol: 'Reversed (Opposing)',
      flashField: 'Flash Field (DC Battery Pulse)',
      startSim: 'Simulate Build-Up',
      reset: 'Reset Defaults',
      critRes: 'Critical Field Resistance (Rc)',
      critSpeed: 'Critical Speed (Nc)',
      builtUpVolt: 'No-Load Built-Up Voltage',
      fieldCurr: 'Steady Field Current (If)',
      statusSuccess: 'Successful Voltage Build-Up: Machine stabilized at operating point P.',
      statusFailRc: 'FAILURE TO BUILD UP: Field resistance Rf exceeds critical resistance Rc (Rf > Rc)!',
      statusFailNc: 'FAILURE TO BUILD UP: Speed N is below critical speed Nc (N < Nc)!',
      statusFailPol: 'FAILURE TO BUILD UP: Field polarity is reversed! Flux cancels residual magnetism.',
      statusFailRes: 'FAILURE TO BUILD UP: Zero residual magnetism in pole iron cores. Click "Flash Field" to re-energize domains.',
      occLegend: 'OCC Curve (E0 vs If)',
      airgapLegend: 'Air-Gap Line (Rc Tangent)',
      rfLegend: 'Field Resistance Line (V = If · Rf)',
      operatingPoint: 'Operating Point P (V_NL)'
    },
    hi: {
      title: 'डीसी जनरेटर विशेषताएँ एवं वोल्टेज निर्माण सिमुलेटर',
      subtitle: 'ओपन सर्किट विशेषता (OCC), सेल्फ-एक्साइटेशन सोपान, क्रांतिक प्रतिरोध Rc एवं क्रांतिक गति Nc का लाइव परीक्षण करें।',
      tabBuildUp: 'OCC एवं वोल्टेज बिल्ड-अप',
      tabLoadCurves: 'बाह्य लोड विशेषताएँ (V बनाम IL)',
      speed: 'घूर्णन गति (N)',
      fieldResistance: 'फील्ड प्रतिरोध (Rf)',
      residualVolt: 'अवशिष्ट वोल्टेज (Eres)',
      polarity: 'फील्ड ध्रुवता',
      normalPol: 'सही (सहयोगी)',
      reversedPol: 'उलटी (विरोधी)',
      flashField: 'फील्ड फ्लैशिंग (DC बैटरी पल्स)',
      startSim: 'बिल्ड-अप सिमुलेट करें',
      reset: 'डिफ़ॉल्ट रीसेट',
      critRes: 'क्रांतिक फील्ड प्रतिरोध (Rc)',
      critSpeed: 'क्रांतिक गति (Nc)',
      builtUpVolt: 'निर्मित नो-लोड वोल्टेज',
      fieldCurr: 'स्थिर फील्ड धारा (If)',
      statusSuccess: 'सफल वोल्टेज निर्माण: जनरेटर प्रचालन बिंदु P पर स्थिर हो गया है।',
      statusFailRc: 'विफलता: फील्ड प्रतिरोध Rf क्रांतिक मान Rc से अधिक है (Rf > Rc)!',
      statusFailNc: 'विफलता: गति N क्रांतिक गति Nc से कम है (N < Nc)!',
      statusFailPol: 'विफलता: फील्ड ध्रुवता उलटी है! फ्लक्स अवशिष्ट चुंबकत्व को नष्ट कर रहा है।',
      statusFailRes: 'विफलता: पोल्स में शून्य अवशिष्ट चुंबकत्व है। "फील्ड फ्लैशिंग" बटन दबाएं।',
      occLegend: 'OCC वक्र (E0 बनाम If)',
      airgapLegend: 'एयर-गैप रेखा (Rc स्पर्शक)',
      rfLegend: 'फील्ड प्रतिरोध रेखा (V = If · Rf)',
      operatingPoint: 'ऑपरेटिंग बिंदु P (V_NL)'
    },
    bn: {
      title: 'ডিসি জেনারেটর বৈশিষ্ট্য ও ভোল্টেজ বিল্ড-আপ সিমুলেটর',
      subtitle: 'ওপেন সার্কিট বৈশিষ্ট্য (OCC), সেলফ-এক্সাইটেশন প্রক্রিয়া, সংকট রোধ Rc এবং সংকট গতি Nc সিমুলেট করুন।',
      tabBuildUp: 'OCC ও ভোল্টেজ বিল্ড-আপ',
      tabLoadCurves: 'বাহ্যিক লোড কার্ভ (V বনাম IL)',
      speed: 'ঘূর্ণন গতি (N)',
      fieldResistance: 'ফিল্ড রোধ (Rf)',
      residualVolt: 'অবশিষ্ট ভোল্টেজ (Eres)',
      polarity: 'ফিল্ড পোলারিটি',
      normalPol: 'সঠিক (সহায়ক)',
      reversedPol: 'বিপরীত (বিরোধী)',
      flashField: 'ফিল্ড ফ্ল্যাশিং (ডিসি ব্যাটারি পালস)',
      startSim: 'বিল্ড-আপ শুরু করুন',
      reset: 'রিসেট ডিফল্ট',
      critRes: 'সংকট ফিল্ড রোধ (Rc)',
      critSpeed: 'সংকট গতি (Nc)',
      builtUpVolt: 'উৎপন্ন নো-লোড ভোল্টেজ',
      fieldCurr: 'স্থির ফিল্ড কারেন্ট (If)',
      statusSuccess: 'সফল ভোল্টেজ বিল্ড-আপ: মেশিনটি অপারেটিং পয়েন্ট P-তে স্থিতিশীল হয়েছে।',
      statusFailRc: 'ব্যর্থতা: ফিল্ড রোধ Rf সংকট রোধ Rc অপেক্ষা বেশি (Rf > Rc)!',
      statusFailNc: 'ব্যর্থতা: গতি N সংকট গতি Nc অপেক্ষা কম (N < Nc)!',
      statusFailPol: 'ব্যর্থতা: ফিল্ড পোলারিটি উল্টো! ফ্লাক্স অবশিষ্ট চৌম্বকত্ব ধ্বংস করছে।',
      statusFailRes: 'ব্যর্থতা: অবশিষ্ট চৌম্বকত্ব শূন্য। "ফিল্ড ফ্ল্যাশিং" এ ক্লিক করুন।',
      occLegend: 'OCC কার্ভ (E0 বনাম If)',
      airgapLegend: 'এয়ার-গ্যাপ লাইন (Rc স্পর্শক)',
      rfLegend: 'ফিল্ড রোধ রেখা (V = If · Rf)',
      operatingPoint: 'অপারেটিং বিন্দু P (V_NL)'
    }
  }[language];

  // SVG coordinate mappings for OCC
  // x-axis: If from 0 to 3.5 A -> mapped to 60 to 460 px (scale: 1A = 114 px)
  // y-axis: E0 from 0 to 260 V -> mapped to 280 to 30 px (scale: 1V = -0.96 px)
  const mapX = (curIf: number) => 60 + curIf * 110;
  const mapY = (volts: number) => 280 - volts * 0.92;

  // Generate OCC path
  const occPoints: string[] = [];
  for (let i = 0; i <= 3.5; i += 0.2) {
    const e = (speedRpm / ratedSpeed) * (residualVoltage + (220 * i) / (1.0 + 0.5 * i));
    occPoints.push(`${mapX(i)},${mapY(e)}`);
  }
  const occPathD = `M ${occPoints.join(' L ')}`;

  // Generate Air-gap / Critical Resistance line
  const airgapEndIf = 2.4;
  const airgapEndV = airgapEndIf * criticalResistance;
  const airgapPathD = `M ${mapX(0)},${mapY(residualVoltage)} L ${mapX(airgapEndIf)},${mapY(airgapEndV)}`;

  // Generate Field Resistance line (V = If * Rf)
  const rfEndIf = 3.2;
  const rfEndV = rfEndIf * fieldResistance;
  const rfPathD = `M ${mapX(0)},${mapY(0)} L ${mapX(rfEndIf)},${mapY(rfEndV)}`;

  // Staircase steps for build-up animation
  const steps = [
    { ifVal: 0, vVal: residualVoltage },
    { ifVal: residualVoltage / fieldResistance, vVal: residualVoltage },
    { ifVal: residualVoltage / fieldResistance, vVal: (speedRpm / ratedSpeed) * (residualVoltage + (220 * (residualVoltage / fieldResistance)) / (1.0 + 0.5 * (residualVoltage / fieldResistance))) },
    { ifVal: 0.6, vVal: 80 },
    { ifVal: 1.2, vVal: 135 },
    { ifVal: 1.8, vVal: 180 },
    { ifVal: steadyIf, vVal: steadyVoltage }
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 md:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-emerald-400" />
            <h3 className="text-lg md:text-xl font-bold text-slate-100">{labels.title}</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handleStartBuildUp}
            disabled={isBuildingUp}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5" />
            {labels.startSim}
          </button>
          <button
            onClick={handleFlashField}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
          >
            <Flame className="w-3.5 h-3.5" />
            {labels.flashField}
          </button>
          <button
            onClick={() => {
              setSpeedRpm(1200);
              setFieldResistance(75);
              setResidualVoltage(8);
              setFieldPolarity('normal');
              setBuildUpStep(0);
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {labels.reset}
          </button>
        </div>
      </div>

      {/* Flashed notification banner */}
      {flashedMessage && (
        <div className="bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs px-4 py-2 rounded-lg flex items-center gap-2 animate-pulse">
          <Zap className="w-4 h-4 text-amber-400" />
          {flashedMessage}
        </div>
      )}

      {/* Mode Switch Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveTab('buildup')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'buildup'
              ? 'bg-emerald-500 text-slate-950 font-bold'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          {labels.tabBuildUp}
        </button>
        <button
          onClick={() => setActiveTab('load-curves')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'load-curves'
              ? 'bg-emerald-500 text-slate-950 font-bold'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          {labels.tabLoadCurves}
        </button>
      </div>

      {/* Main Grid: Interactive Graph + Sliders */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: SVG Characteristic Curve (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
          {activeTab === 'buildup' ? (
            <svg viewBox="0 0 500 320" className="w-full h-auto max-h-[300px]" aria-label="DC Generator OCC & Build-Up Curve">
              {/* Axes */}
              <line x1="60" y1="280" x2="470" y2="280" stroke="#64748b" strokeWidth="2" />
              <line x1="60" y1="280" x2="60" y2="20" stroke="#64748b" strokeWidth="2" />

              {/* Grid Lines */}
              {[50, 100, 150, 200, 250].map((v) => (
                <g key={`ygrid-${v}`}>
                  <line x1="60" y1={mapY(v)} x2="470" y2={mapY(v)} stroke="#334155" strokeWidth="0.8" strokeDasharray="3,3" />
                  <text x="50" y={mapY(v) + 4} textAnchor="end" fill="#64748b" fontSize="9" fontFamily="monospace">
                    {v}V
                  </text>
                </g>
              ))}

              {[0.5, 1.0, 1.5, 2.0, 2.5, 3.0].map((curr) => (
                <g key={`xgrid-${curr}`}>
                  <line x1={mapX(curr)} y1="280" x2={mapX(curr)} y2="20" stroke="#334155" strokeWidth="0.8" strokeDasharray="3,3" />
                  <text x={mapX(curr)} y="295" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
                    {curr}A
                  </text>
                </g>
              ))}

              {/* OCC Curve Path */}
              <path d={occPathD} fill="none" stroke="#10b981" strokeWidth="3" />

              {/* Air-gap / Critical Resistance Tangent Line */}
              <path d={airgapPathD} fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,4" />

              {/* Field Resistance Operating Line */}
              <path d={rfPathD} fill="none" stroke="#38bdf8" strokeWidth="2.5" />

              {/* Residual Voltage Intercept Point */}
              <circle cx={mapX(0)} cy={mapY(residualVoltage)} r="4" fill="#f43f5e" />
              <text x={mapX(0) + 8} y={mapY(residualVoltage) - 4} fill="#f43f5e" fontSize="9" fontWeight="bold">
                Eres = {residualVoltage}V
              </text>

              {/* Operating Point P (Intersection) */}
              {canBuildUp && steadyVoltage > 30 && (
                <g>
                  <circle cx={mapX(steadyIf)} cy={mapY(steadyVoltage)} r="6" fill="#fbbf24" stroke="#78350f" strokeWidth="2" />
                  <line x1={mapX(steadyIf)} y1={mapY(steadyVoltage)} x2={mapX(steadyIf)} y2="280" stroke="#fbbf24" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1={mapX(steadyIf)} y1={mapY(steadyVoltage)} x2="60" y2={mapY(steadyVoltage)} stroke="#fbbf24" strokeWidth="1" strokeDasharray="2,2" />
                  <text x={mapX(steadyIf) + 8} y={mapY(steadyVoltage) - 6} fill="#fbbf24" fontSize="10" fontWeight="bold">
                    P ({steadyVoltage.toFixed(0)}V, {steadyIf.toFixed(2)}A)
                  </text>
                </g>
              )}

              {/* Animated Staircase for Build-Up */}
              {buildUpStep > 0 && canBuildUp && (
                <g>
                  {steps.slice(0, buildUpStep).map((st, sIdx) => {
                    if (sIdx === 0) return null;
                    const prevSt = steps[sIdx - 1];
                    return (
                      <g key={`step-${sIdx}`}>
                        {/* Horizontal segment to field line */}
                        <line
                          x1={mapX(prevSt.ifVal)}
                          y1={mapY(prevSt.vVal)}
                          x2={mapX(st.ifVal)}
                          y2={mapY(prevSt.vVal)}
                          stroke="#eab308"
                          strokeWidth="2"
                        />
                        {/* Vertical segment to OCC */}
                        <line
                          x1={mapX(st.ifVal)}
                          y1={mapY(prevSt.vVal)}
                          x2={mapX(st.ifVal)}
                          y2={mapY(st.vVal)}
                          stroke="#eab308"
                          strokeWidth="2"
                        />
                      </g>
                    );
                  })}
                </g>
              )}

              {/* Axis Labels */}
              <text x="470" y="305" textAnchor="end" fill="#94a3b8" fontSize="10" fontWeight="bold">Field Current If (A) →</text>
              <text x="70" y="18" fill="#94a3b8" fontSize="10" fontWeight="bold">↑ Induced EMF E0 / Terminal Voltage V (Volts)</text>
            </svg>
          ) : (
            /* External Load Characteristics Comparison Curves */
            <svg viewBox="0 0 500 320" className="w-full h-auto max-h-[300px]" aria-label="DC Generator External Load Curves">
              {/* Axes */}
              <line x1="60" y1="280" x2="470" y2="280" stroke="#64748b" strokeWidth="2" />
              <line x1="60" y1="280" x2="60" y2="20" stroke="#64748b" strokeWidth="2" />

              {/* Rated No-Load Voltage Dashed Reference Line */}
              <line x1="60" y1="120" x2="470" y2="120" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,4" />
              <text x="65" y="114" fill="#94a3b8" fontSize="9">Rated V_NL (220V)</text>

              {/* Over-compounded: rises with load */}
              <path d="M 60 120 Q 250 80 440 95" fill="none" stroke="#10b981" strokeWidth="3" />
              <text x="445" y="95" fill="#10b981" fontSize="9" fontWeight="bold">Over-Compounded</text>

              {/* Flat-compounded: stays near 220V */}
              <path d="M 60 120 Q 250 115 440 120" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
              <text x="445" y="122" fill="#38bdf8" fontSize="9" fontWeight="bold">Flat-Compounded</text>

              {/* Under-compounded / Shunt: moderate droop */}
              <path d="M 60 120 Q 250 140 440 160" fill="none" stroke="#fbbf24" strokeWidth="2.5" />
              <text x="445" y="162" fill="#fbbf24" fontSize="9" fontWeight="bold">DC Shunt Generator</text>

              {/* Series Generator: starts low, rises sharply, then droops */}
              <path d="M 60 260 Q 200 60 400 130" fill="none" stroke="#a855f7" strokeWidth="2.5" />
              <text x="405" y="132" fill="#a855f7" fontSize="9" fontWeight="bold">Series Gen</text>

              {/* Differential Compounded: sharp steep plunge */}
              <path d="M 60 120 Q 180 220 280 275" fill="none" stroke="#f43f5e" strokeWidth="3" />
              <text x="285" y="275" fill="#f43f5e" fontSize="9" fontWeight="bold">Differential (Welding)</text>

              {/* Axis labels */}
              <text x="470" y="305" textAnchor="end" fill="#94a3b8" fontSize="10" fontWeight="bold">Load Current IL (A) →</text>
              <text x="70" y="18" fill="#94a3b8" fontSize="10" fontWeight="bold">↑ Terminal Voltage V (Volts)</text>
            </svg>
          )}

          {/* Graph Legend */}
          <div className="w-full mt-2 grid grid-cols-3 gap-2 bg-slate-900 border border-slate-800 rounded-lg p-2 text-[10px] text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-400">
              <span className="w-3 h-0.5 bg-emerald-400 inline-block" />
              <span>{labels.occLegend}</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-amber-400">
              <span className="w-3 h-0.5 bg-amber-400 border-t border-dashed border-amber-400 inline-block" />
              <span>{labels.airgapLegend}</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-sky-400">
              <span className="w-3 h-0.5 bg-sky-400 inline-block" />
              <span>{labels.rfLegend}</span>
            </div>
          </div>
        </div>

        {/* Right: Telemetry & Interactive Sliders (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Main Status / Diagnostic Card */}
          <div
            className={`border-2 rounded-xl p-4 shadow-lg transition-all ${
              canBuildUp
                ? 'bg-emerald-950/30 border-emerald-500/50'
                : 'bg-rose-950/30 border-rose-500/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                {labels.builtUpVolt}
              </span>
              {canBuildUp ? (
                <span className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Healthy
                </span>
              ) : (
                <span className="flex items-center gap-1 text-rose-400 text-xs font-bold">
                  <ShieldAlert className="w-4 h-4" /> Build-Up Failed
                </span>
              )}
            </div>

            <div className="text-3xl md:text-4xl font-extrabold font-mono my-1 text-slate-100">
              {steadyVoltage.toFixed(1)} <span className="text-lg text-slate-400">V</span>
            </div>

            {/* Diagnostic Message */}
            <div className="text-xs mt-2 text-slate-300">
              {canBuildUp && labels.statusSuccess}
              {!hasResidual && labels.statusFailRes}
              {hasResidual && !isPolarityCorrect && labels.statusFailPol}
              {hasResidual && isPolarityCorrect && !isResistanceOk && labels.statusFailRc}
              {hasResidual && isPolarityCorrect && isResistanceOk && !isSpeedOk && labels.statusFailNc}
            </div>
          </div>

          {/* Critical Parameters Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg p-2.5">
              <div className="text-slate-400">{labels.critRes}</div>
              <div className="text-base font-bold text-amber-400 font-mono">Rc = {criticalResistance.toFixed(1)} Ω</div>
              <div className="text-[10px] text-slate-500">Must have Rf &lt; Rc</div>
            </div>
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg p-2.5">
              <div className="text-slate-400">{labels.critSpeed}</div>
              <div className="text-base font-bold text-sky-400 font-mono">Nc = {criticalSpeed.toFixed(0)} RPM</div>
              <div className="text-[10px] text-slate-500">Must have N &gt; Nc</div>
            </div>
          </div>

          {/* Interactive Sliders */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
            {/* Speed Slider */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.speed}</span>
                <span className="font-mono text-emerald-400 font-bold">{speedRpm} RPM</span>
              </div>
              <input
                type="range"
                min="400"
                max="2000"
                step="50"
                value={speedRpm}
                onChange={(e) => setSpeedRpm(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Field Resistance Slider */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.fieldResistance}</span>
                <span className="font-mono text-sky-400 font-bold">{fieldResistance} Ω</span>
              </div>
              <input
                type="range"
                min="40"
                max="160"
                step="5"
                value={fieldResistance}
                onChange={(e) => setFieldResistance(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>

            {/* Residual Voltage Slider */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.residualVolt}</span>
                <span className="font-mono text-rose-400 font-bold">{residualVoltage} V</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="1"
                value={residualVoltage}
                onChange={(e) => setResidualVoltage(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
            </div>

            {/* Polarity Switch */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">{labels.polarity}</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setFieldPolarity('normal')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                    fieldPolarity === 'normal'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {labels.normalPol}
                </button>
                <button
                  onClick={() => setFieldPolarity('reversed')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                    fieldPolarity === 'reversed'
                      ? 'bg-rose-500 text-white font-bold'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {labels.reversedPol}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
