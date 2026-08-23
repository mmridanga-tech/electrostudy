import React, { useState } from 'react';
import { RotateCcw, Activity, Sliders, Info, Zap, Gauge, TrendingUp, Cpu } from 'lucide-react';

interface DCMotorSpeedControlAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

export type ControlMethod = 'field' | 'armature_rheostat' | 'ward_leonard';

export const DCMotorSpeedControlAnimation: React.FC<DCMotorSpeedControlAnimationProps> = ({ language = 'en' }) => {
  const [method, setMethod] = useState<ControlMethod>('field');
  const [fieldFluxRatio, setFieldFluxRatio] = useState<number>(1.0); // 0.4 to 1.0 (Flux weakening)
  const [armatureExternalRes, setArmatureExternalRes] = useState<number>(0.0); // 0.0 to 6.0 Ohms
  const [terminalVoltage, setTerminalVoltage] = useState<number>(230); // 0 to 250 Volts (Ward Leonard)
  const [loadTorque, setLoadTorque] = useState<number>(35); // N*m (10 to 60 N*m)

  // Motor Base Parameters
  const baseVoltage = 230; // V
  const baseSpeed = 1200; // RPM
  const baseRa = 0.35; // Ohms
  const ratedIa = 40; // A
  const Kt = 1.0; // Torque constant (T = Kt * Phi * Ia)
  const Ke = (baseVoltage - ratedIa * baseRa) / (1.0 * baseSpeed); // ~0.180 V/RPM at rated flux

  // Compute Operating Conditions based on selected method
  let effectiveFlux = 1.0;
  let effectiveVoltage = baseVoltage;
  let effectiveArmatureRes = baseRa;

  if (method === 'field') {
    effectiveFlux = Math.max(0.4, fieldFluxRatio);
    effectiveVoltage = baseVoltage;
    effectiveArmatureRes = baseRa;
  } else if (method === 'armature_rheostat') {
    effectiveFlux = 1.0;
    effectiveVoltage = baseVoltage;
    effectiveArmatureRes = baseRa + armatureExternalRes;
  } else if (method === 'ward_leonard') {
    effectiveFlux = fieldFluxRatio; // can also do field weakening above base speed!
    effectiveVoltage = terminalVoltage;
    effectiveArmatureRes = baseRa;
  }

  // Under steady state: Motor Torque Ta = Load Torque TL
  // Ta = Kt * Phi * Ia => Ia = TL / (Kt * Phi)
  const armatureCurrent = Math.max(1, loadTorque / (Kt * effectiveFlux));
  const backEmf = Math.max(0, effectiveVoltage - armatureCurrent * effectiveArmatureRes);

  // Speed N = Eb / (Ke * Phi)
  const currentSpeedRpm = effectiveFlux > 0.05 ? Math.max(0, backEmf / (Ke * effectiveFlux)) : 0;
  const angularVelocity = (2 * Math.PI * currentSpeedRpm) / 60;
  const mechanicalPowerWatts = loadTorque * angularVelocity;
  const electricalInputWatts = effectiveVoltage * armatureCurrent;
  const rheostatLossWatts = (effectiveArmatureRes - baseRa) * armatureCurrent * armatureCurrent;
  const electricalEfficiency = electricalInputWatts > 10 ? Math.min(96, Math.max(10, ((mechanicalPowerWatts) / electricalInputWatts) * 100)) : 0;

  const handleReset = () => {
    setMethod('field');
    setFieldFluxRatio(1.0);
    setArmatureExternalRes(0.0);
    setTerminalVoltage(230);
    setLoadTorque(35);
  };

  const labels = {
    en: {
      title: 'DC Motor Speed Control & Operating Regimes Laboratory',
      subtitle: 'Analyze Field Flux Weakening (above base speed), Armature Rheostat Resistance (below base speed), and Ward-Leonard Armature Voltage Control.',
      reset: 'Reset Defaults',
      methodField: 'Field Control (Flux Weakening)',
      methodArmRheo: 'Armature Rheostat Control',
      methodWardLeonard: 'Armature Voltage (Ward-Leonard)',
      fluxSlider: 'Magnetic Field Flux (Φ / Φ_rated)',
      rheoSlider: 'External Armature Resistance (R_ext)',
      voltSlider: 'Applied Armature Voltage (V)',
      loadSlider: 'Mechanical Load Torque (T_L)',
      speedBadge: 'Rotational Speed (N)',
      backEmfBadge: 'Back EMF (Eb)',
      iaBadge: 'Armature Current (Ia)',
      powerBadge: 'Shaft Power (P_mech)',
      effBadge: 'Operating Efficiency (η)',
      regimeConstTorque: 'Constant Torque Operating Region (Below Base Speed: 0 to 1200 RPM)',
      regimeConstPower: 'Constant Power Operating Region (Above Base Speed: 1200 to 2400 RPM)',
      rheostatLossAlert: 'High Energy Dissipation Loss in Series Rheostat: ',
      curveTitle: 'Live Speed vs Torque Characteristic Curve'
    },
    hi: {
      title: 'डीसी मोटर गति नियंत्रण एवं प्रचालन क्षेत्र प्रयोगशाला',
      subtitle: 'फील्ड फ्लक्स दुर्बलीकरण (बेस गति से ऊपर), आर्मेचर रियोस्टैट प्रतिरोध (बेस गति से नीचे) एवं वार्ड-लियोनार्ड वोल्टेज नियंत्रण का लाइव विश्लेषण।',
      reset: 'डिफ़ॉल्ट रीसेट',
      methodField: 'फील्ड नियंत्रण (फ्लक्स दुर्बलीकरण)',
      methodArmRheo: 'आर्मेचर रियोस्टैट नियंत्रण',
      methodWardLeonard: 'आर्मेचर वोल्टेज (वार्ड-लियोनार्ड)',
      fluxSlider: 'चुंबकीय फील्ड फ्लक्स (Φ / Φ_rated)',
      rheoSlider: 'बाहरी आर्मेचर प्रतिरोध (R_ext)',
      voltSlider: 'लागू आर्मेचर वोल्टेज (V)',
      loadSlider: 'यांत्रिक लोड टॉर्क (T_L)',
      speedBadge: 'घूर्णन गति (N)',
      backEmfBadge: 'बैक EMF (Eb)',
      iaBadge: 'आर्मेचर धारा (Ia)',
      powerBadge: 'शाफ्ट शक्ति (P_mech)',
      effBadge: 'प्रचालन दक्षता (η)',
      regimeConstTorque: 'स्थिर टॉर्क प्रचालन क्षेत्र (बेस गति से नीचे: 0 से 1200 RPM)',
      regimeConstPower: 'स्थिर शक्ति प्रचालन क्षेत्र (बेस गति से ऊपर: 1200 से 2400 RPM)',
      rheostatLossAlert: 'रियोस्टैट में भारी ऊर्जा हानि: ',
      curveTitle: 'लाइव गति बनाम टॉर्क विशेषता वक्र'
    },
    bn: {
      title: 'ডিসি মোটর গতি নিয়ন্ত্রণ ও কার্যসীমা ল্যাবরেটরি',
      subtitle: 'ফিল্ড ফ্লাক্স দুর্বলকরণ (বেস গতির উপরে), আর্মেচার রিহোস্ট্যাট (বেস গতির নিচে) এবং ওয়ার্ড-লিওনার্ড ভোল্টেজ নিয়ন্ত্রণের বাস্তব সিমুলেশন।',
      reset: 'রিসেট করুন',
      methodField: 'ফিল্ড নিয়ন্ত্রণ (ফ্লাক্স দুর্বলকরণ)',
      methodArmRheo: 'আর্মেচার রিহোস্ট্যাট নিয়ন্ত্রণ',
      methodWardLeonard: 'আর্মেচার ভোল্টেজ (ওয়ার্ড-লিওনার্ড)',
      fluxSlider: 'চৌম্বক ফিল্ড ফ্লাক্স (Φ / Φ_rated)',
      rheoSlider: 'বহিঃস্থ আর্মেচার রোধ (R_ext)',
      voltSlider: 'প্রয়োগকৃত আর্মেচার ভোল্টেজ (V)',
      loadSlider: 'যান্ত্রিক লোড টর্ক (T_L)',
      speedBadge: 'ঘূর্ণন গতি (N)',
      backEmfBadge: 'ব্যাক EMF (Eb)',
      iaBadge: 'আর্মেচার কারেন্ট (Ia)',
      powerBadge: 'শ্যাফট ক্ষমতা (P_mech)',
      effBadge: 'কার্যকর দক্ষতা (η)',
      regimeConstTorque: 'ধ্রুবক টর্ক অঞ্চল (বেস গতির নিচে: ০ থেকে ১২০০ RPM)',
      regimeConstPower: 'ধ্রুবক পাওয়ার অঞ্চল (বেস গতির উপরে: ১২০০ থেকে ২৪০০ RPM)',
      rheostatLossAlert: 'সিরিজ রিহোস্ট্যাটে উচ্চ শক্তি অপচয়: ',
      curveTitle: 'লাইভ গতি বনাম টর্ক বৈশিষ্ট্য লেখচিত্র'
    }
  };

  const t = labels[language] || labels.en;

  // Compute operating point coordinate on graph
  // Graph bounds: X (Torque) 0 to 60 N*m -> SVG X: 50 to 260; Y (Speed) 0 to 2500 RPM -> SVG Y: 180 to 30
  const graphX = 50 + (loadTorque / 60) * 210;
  const graphY = 180 - (Math.min(2500, currentSpeedRpm) / 2500) * 150;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 shadow-xl max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20">
              <Gauge className="w-5 h-5" />
            </span>
            <h3 className="text-xl font-bold text-white tracking-wide">{t.title}</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-2xl">{t.subtitle}</p>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition self-start md:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {t.reset}
        </button>
      </div>

      {/* Control Method Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-950 p-1.5 rounded-lg border border-slate-800">
        <button
          onClick={() => {
            setMethod('field');
            setArmatureExternalRes(0);
            setTerminalVoltage(230);
          }}
          className={`py-2 px-3 rounded-md text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            method === 'field'
              ? 'bg-cyan-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-pressed={method === 'field'}
        >
          <TrendingUp className="w-4 h-4" />
          {t.methodField}
        </button>
        <button
          onClick={() => {
            setMethod('armature_rheostat');
            setFieldFluxRatio(1.0);
            setTerminalVoltage(230);
          }}
          className={`py-2 px-3 rounded-md text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            method === 'armature_rheostat'
              ? 'bg-cyan-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-pressed={method === 'armature_rheostat'}
        >
          <Sliders className="w-4 h-4" />
          {t.methodArmRheo}
        </button>
        <button
          onClick={() => {
            setMethod('ward_leonard');
            setArmatureExternalRes(0);
          }}
          className={`py-2 px-3 rounded-md text-xs font-bold transition flex items-center justify-center gap-1.5 ${
            method === 'ward_leonard'
              ? 'bg-cyan-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
          aria-pressed={method === 'ward_leonard'}
        >
          <Cpu className="w-4 h-4" />
          {t.methodWardLeonard}
        </button>
      </div>

      {/* Operating Regime Indicator */}
      <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 flex items-center justify-between text-xs font-semibold">
        <span className="text-slate-400">Current Operating Mode:</span>
        <span className={`px-2.5 py-1 rounded font-bold ${
          currentSpeedRpm > baseSpeed
            ? 'bg-indigo-900/60 text-indigo-300 border border-indigo-500/40'
            : 'bg-emerald-900/60 text-emerald-300 border border-emerald-500/40'
        }`}>
          {currentSpeedRpm > baseSpeed ? t.regimeConstPower : t.regimeConstTorque}
        </span>
      </div>

      {/* Main Grid: Visual Graph Stage & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG Graph & Schematic Display (7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-xl p-4 border border-slate-800 flex flex-col items-center justify-center">
          <div className="w-full flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
            <span className="text-cyan-400 font-bold">{t.curveTitle}</span>
            <span className="text-amber-400 font-bold">N = {Math.round(currentSpeedRpm)} RPM</span>
          </div>

          <svg viewBox="0 0 320 220" className="w-full h-auto max-h-[260px]" aria-label="DC Motor Speed Torque Curve Graph">
            {/* Graph Background Grids */}
            <rect x="50" y="25" width="230" height="155" fill="#090d16" stroke="#334155" strokeWidth="1.5" rx="4" />
            
            {/* Grid lines */}
            <line x1="50" y1="65" x2="280" y2="65" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="50" y1="105" x2="280" y2="105" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="50" y1="145" x2="280" y2="145" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
            
            <line x1="125" y1="25" x2="125" y2="180" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="200" y1="25" x2="200" y2="180" stroke="#1e293b" strokeWidth="1" strokeDasharray="3,3" />

            {/* Base Speed Line (1200 RPM -> y=108) */}
            <line x1="50" y1="108" x2="280" y2="108" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="282" y="111" fill="#64748b" fontSize="7.5" fontFamily="monospace">N_base (1200)</text>

            {/* Y-Axis (Speed RPM) Labels */}
            <text x="45" y="32" textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">2400</text>
            <text x="45" y="70" textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">1800</text>
            <text x="45" y="112" textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">1200</text>
            <text x="45" y="148" textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">600</text>
            <text x="45" y="182" textAnchor="end" fill="#94a3b8" fontSize="8" fontFamily="monospace">0</text>

            {/* X-Axis (Torque N*m) Labels */}
            <text x="50" y="195" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">0</text>
            <text x="125" y="195" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">20</text>
            <text x="200" y="195" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">40</text>
            <text x="275" y="195" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">60</text>
            <text x="165" y="210" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">Torque T (N·m) →</text>

            {/* Characteristic Curve based on active method */}
            {method === 'field' && (
              <path
                d={`M 50 ${180 - ( (baseVoltage / (Ke * effectiveFlux)) / 2500 ) * 150} L 280 ${180 - ( ((baseVoltage - (60 / effectiveFlux) * baseRa) / (Ke * effectiveFlux)) / 2500 ) * 150}`}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
              />
            )}
            {method === 'armature_rheostat' && (
              <path
                d={`M 50 108 L 280 ${180 - ( ((baseVoltage - 60 * effectiveArmatureRes) / (Ke * 1.0)) / 2500 ) * 150}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="3"
              />
            )}
            {method === 'ward_leonard' && (
              <path
                d={`M 50 ${180 - ( (effectiveVoltage / (Ke * effectiveFlux)) / 2500 ) * 150} L 280 ${180 - ( ((effectiveVoltage - 60 * baseRa) / (Ke * effectiveFlux)) / 2500 ) * 150}`}
                fill="none"
                stroke="#34d399"
                strokeWidth="3"
              />
            )}

            {/* Operating Point Target Circle */}
            <circle cx={graphX} cy={graphY} r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
            <text x={graphX + 10} y={graphY - 4} fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="monospace">
              ({loadTorque} Nm, {Math.round(currentSpeedRpm)} RPM)
            </text>
          </svg>

          {/* Rheostat Power Loss Alert for Method 2 */}
          {method === 'armature_rheostat' && armatureExternalRes > 0 && (
            <div className="w-full mt-2 p-2 bg-amber-950/60 border border-amber-500/40 rounded text-amber-300 text-[11px] flex items-center justify-between font-mono">
              <span>{t.rheostatLossAlert}</span>
              <span className="font-bold text-amber-400">{(rheostatLossWatts / 1000).toFixed(2)} kW Heat</span>
            </div>
          )}
        </div>

        {/* Sliders & Parameters Dashboard (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.speedBadge}</span>
              <span className="text-xl font-bold font-mono text-cyan-400">{Math.round(currentSpeedRpm)} RPM</span>
            </div>

            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.backEmfBadge}</span>
              <span className="text-xl font-bold font-mono text-emerald-400">{backEmf.toFixed(1)} V</span>
            </div>

            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.iaBadge}</span>
              <span className="text-xl font-bold font-mono text-amber-400">{armatureCurrent.toFixed(1)} A</span>
            </div>

            <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 font-medium block">{t.powerBadge}</span>
              <span className="text-xl font-bold font-mono text-indigo-400">{(mechanicalPowerWatts / 1000).toFixed(2)} kW</span>
            </div>
          </div>

          {/* Interactive Sliders based on selected method */}
          <div className="p-3.5 bg-slate-950 rounded-lg border border-slate-800 space-y-3">
            {/* Method 1: Field Flux Slider */}
            {method === 'field' && (
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">{t.fluxSlider}</span>
                  <span className="text-cyan-400 font-mono font-bold">{(fieldFluxRatio * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.45"
                  max="1.0"
                  step="0.05"
                  value={fieldFluxRatio}
                  onChange={(e) => setFieldFluxRatio(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer"
                  aria-label="Field Flux Ratio"
                />
                <span className="text-[10px] text-slate-500 block">Weaker flux reduces magnetic drag, accelerating rotor up to 2.2× base speed.</span>
              </div>
            )}

            {/* Method 2: Armature Rheostat Slider */}
            {method === 'armature_rheostat' && (
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">{t.rheoSlider}</span>
                  <span className="text-amber-400 font-mono font-bold">{armatureExternalRes.toFixed(1)} Ω</span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="5.0"
                  step="0.25"
                  value={armatureExternalRes}
                  onChange={(e) => setArmatureExternalRes(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                  aria-label="External Armature Resistance"
                />
                <span className="text-[10px] text-slate-500 block">Adds series I·R voltage drop, reducing rotor speed below 1200 RPM.</span>
              </div>
            )}

            {/* Method 3: Ward-Leonard Voltage Slider */}
            {method === 'ward_leonard' && (
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">{t.voltSlider}</span>
                  <span className="text-emerald-400 font-mono font-bold">{terminalVoltage} V</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="250"
                  step="5"
                  value={terminalVoltage}
                  onChange={(e) => setTerminalVoltage(parseInt(e.target.value, 10))}
                  className="w-full accent-emerald-500 cursor-pointer"
                  aria-label="Ward-Leonard Terminal Voltage"
                />
                <span className="text-[10px] text-slate-500 block">Smooth stepless generator output voltage adjustment from 0 to 250 V.</span>
              </div>
            )}

            {/* Common Load Torque Slider */}
            <div className="space-y-1 pt-2 border-t border-slate-800">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-300">{t.loadSlider}</span>
                <span className="text-rose-400 font-mono font-bold">{loadTorque} N·m</span>
              </div>
              <input
                type="range"
                min="10"
                max="55"
                step="5"
                value={loadTorque}
                onChange={(e) => setLoadTorque(parseInt(e.target.value, 10))}
                className="w-full accent-rose-500 cursor-pointer"
                aria-label="Mechanical Load Torque"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
