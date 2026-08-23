import React, { useState, useEffect } from 'react';
import { RotateCw, Play, Square, RotateCcw, Activity, AlertTriangle, CheckCircle2, Zap, Sliders, ShieldAlert } from 'lucide-react';

interface DCMotorTorqueAnimationProps {
  language?: 'en' | 'hi' | 'bn';
}

export const DCMotorTorqueAnimation: React.FC<DCMotorTorqueAnimationProps> = ({ language = 'en' }) => {
  const [motorMode, setMotorMode] = useState<'running' | 'starting'>('running');
  const [supplyVoltage, setSupplyVoltage] = useState<number>(220); // Volts
  const [armatureResistance, setArmatureResistance] = useState<number>(0.4); // Ohms
  const [fieldFluxWb, setFieldFluxWb] = useState<number>(0.025); // Weber
  const [speedRpm, setSpeedRpm] = useState<number>(1200); // RPM
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  // Machine structural constants: 4 poles, 600 conductors, Wave winding A = 2
  const poles = 4;
  const conductors = 600;
  const parallelPaths = 2; // Wave winding
  // Back EMF constant: k_e = (P * Z) / (60 * A) = (4 * 600) / (60 * 2) = 20
  const ke = (poles * conductors) / (60 * parallelPaths);
  // Torque constant: k_t = (P * Z) / (2 * pi * A) = (4 * 600) / (2 * pi * 2) = 190.986
  const kt = (poles * conductors) / (2 * Math.PI * parallelPaths);

  // Safe parameters
  const safeV = Math.max(50, supplyVoltage);
  const safeRa = Math.max(0.05, armatureResistance);
  const safeFlux = Math.max(0.005, fieldFluxWb);

  // Calculate based on Mode
  let currentSpeed = motorMode === 'starting' ? 0 : Math.max(0, speedRpm);
  let backEmf = 0;
  let armatureCurrent = 0;

  if (motorMode === 'starting') {
    backEmf = 0;
    // Massive starting current without starter resistance
    armatureCurrent = safeV / safeRa;
  } else {
    // In running mode: Eb = ke * Phi * N
    // Calculate theoretical Eb from speed & flux
    const rawEb = ke * safeFlux * currentSpeed;
    // Eb must be slightly below V in motor mode (Eb < V)
    backEmf = Math.min(safeV - 2, Math.max(0, rawEb));
    armatureCurrent = Math.max(0.1, (safeV - backEmf) / safeRa);
  }

  // Angular velocity omega = (2 * pi * N) / 60
  const omega = (2 * Math.PI * currentSpeed) / 60;
  // Electromagnetic developed torque: T = kt * Phi * Ia
  const torqueNm = kt * safeFlux * armatureCurrent;
  // Developed mechanical power: Pdev = Eb * Ia = T * omega
  const developedPowerW = backEmf * armatureCurrent;
  const electricalInputW = safeV * armatureCurrent;

  // Animation frame for rotor rotation
  useEffect(() => {
    let animationId: number;
    if (isRotating && motorMode === 'running' && currentSpeed > 0) {
      const step = () => {
        setRotationAngle((prev) => (prev + (currentSpeed / 60) * 6) % 360);
        animationId = requestAnimationFrame(step);
      };
      animationId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animationId);
  }, [isRotating, motorMode, currentSpeed]);

  const handleReset = () => {
    setMotorMode('running');
    setSupplyVoltage(220);
    setArmatureResistance(0.4);
    setFieldFluxWb(0.025);
    setSpeedRpm(1200);
    setIsRotating(true);
  };

  const labels = {
    en: {
      title: 'DC Motor Operating Principle, Back EMF & Torque Simulator',
      subtitle: 'Simulate Lorentz electromagnetic force, Fleming’s Left-Hand Rule, self-governing Back EMF (Eb = V - IaRa), starting inrush surge, and developed torque (T ∝ Φ Ia).',
      reset: 'Reset Defaults',
      modeRunning: 'Running Mode (Normal)',
      modeStarting: 'Starting Condition (N = 0)',
      supplyVoltage: 'Supply Voltage (V)',
      armResistance: 'Armature Resistance (Ra)',
      fieldFlux: 'Magnetic Flux per Pole (Φ)',
      speed: 'Rotor Speed (N)',
      backEmf: 'Back EMF (Eb)',
      armCurrent: 'Armature Current (Ia)',
      torque: 'Developed Torque (Ta)',
      powerDev: 'Gross Mechanical Power (Pdev)',
      powerIn: 'Electrical Input Power (Pin)',
      startWarning: 'CRITICAL WARNING: High Starting Inrush Current! Without starter resistance, Ia = V/Ra is 10–25× rated current!',
      runningHealthy: 'Equilibrium Operating State: Back EMF stabilizes speed and limits armature current.',
      lorentzTitle: 'Fleming’s Left-Hand Rule & Lorentz Force',
      flemingThumb: 'Thumb: Motion / Force (F)',
      flemingFore: 'First Finger: Field (B)',
      flemingCenter: 'Second Finger: Current (I)'
    },
    hi: {
      title: 'डीसी मोटर कार्य सिद्धांत, बैक EMF एवं टॉर्क सिमुलेटर',
      subtitle: 'लोरेंट्ज़ बल, फ्लेमिंग के बाएं हाथ का नियम, बैक EMF (Eb = V - IaRa) का स्व-नियंत्रण, स्टार्टिंग करंट सर्ज एवं विकसित टॉर्क (T ∝ Φ Ia) का सजीव सिमुलेशन।',
      reset: 'डिफ़ॉल्ट रीसेट',
      modeRunning: 'सामान्य प्रचालन (Running)',
      modeStarting: 'स्टार्टिंग अवस्था (N = 0)',
      supplyVoltage: 'सप्लाई वोल्टेज (V)',
      armResistance: 'आर्मेचर प्रतिरोध (Ra)',
      fieldFlux: 'प्रति पोल फ्लक्स (Φ)',
      speed: 'रोटर गति (N)',
      backEmf: 'बैक EMF (Eb)',
      armCurrent: 'आर्मेचर धारा (Ia)',
      torque: 'विकसित टॉर्क (Ta)',
      powerDev: 'उत्पन्न यांत्रिक शक्ति (Pdev)',
      powerIn: 'विद्युत इनपुट शक्ति (Pin)',
      startWarning: 'गंभीर चेतावनी: अत्यधिक स्टार्टिंग करंट! स्टार्टर के बिना Ia = V/Ra सामान्य से 10-25 गुना अधिक होता है!',
      runningHealthy: 'संतुलित प्रचालन: बैक EMF गति को स्थिर रखता है और करंट को नियंत्रित करता है।',
      lorentzTitle: 'फ्लेमिंग का बायां हाथ नियम एवं लोरेंट्ज़ बल',
      flemingThumb: 'अंगूठा: बल / गति (F)',
      flemingFore: 'तर्जनी: चुंबकीय क्षेत्र (B)',
      flemingCenter: 'मध्यमा: विद्युत धारा (I)'
    },
    bn: {
      title: 'ডিসি মোটরের কার্যপ্রণালী, ব্যাক EMF ও টর্ক সিমুলেটর',
      subtitle: 'লরেন্টজ বল, ফ্লেমিংয়ের বাম হস্ত নিয়ম, ব্যাক EMF (Eb = V - IaRa) এর স্বয়ংক্রিয় নিয়ন্ত্রণ ব্যবস্থা, স্টার্টিং কারেন্ট সার্জ এবং টর্ক (T ∝ Φ Ia) সিমুলেশন।',
      reset: 'রিসেট ডিফল্ট',
      modeRunning: 'চলমান অবস্থা (Running)',
      modeStarting: 'স্টার্টিং অবস্থা (N = 0)',
      supplyVoltage: 'সরবরাহ ভোল্টেজ (V)',
      armResistance: 'আর্মেচার রোধ (Ra)',
      fieldFlux: 'প্রতি পোলে ফ্লাক্স (Φ)',
      speed: 'রোটর গতি (N)',
      backEmf: 'ব্যাক EMF (Eb)',
      armCurrent: 'আর্মেচার কারেন্ট (Ia)',
      torque: 'উৎপন্ন টর্ক (Ta)',
      powerDev: 'রূপান্তরিত যান্ত্রিক শক্তি (Pdev)',
      powerIn: 'বৈদ্যুতিক ইনপুট শক্তি (Pin)',
      startWarning: 'জরুরি সতর্কতা: বিপজ্জনক স্টার্টিং কারেন্ট! স্টার্টার ছাড়া Ia = V/Ra স্বাভাবিকের চেয়ে ১০-২৫ গুণ বেশি!',
      runningHealthy: 'স্থিতিশীল অবস্থা: ব্যাক EMF রোটরের গতি নিয়ন্ত্রণ করে এবং আর্মেচার কারেন্ট সীমিত রাখে।',
      lorentzTitle: 'ফ্লেমিংয়ের বাম হস্ত নিয়ম ও লরেন্টজ বল',
      flemingThumb: 'বৃদ্ধাঙ্গুলি: বল / ঘূর্ণন (F)',
      flemingFore: 'তর্জনী: চৌম্বক ক্ষেত্র (B)',
      flemingCenter: 'মধ্যমা: তড়িৎ প্রবাহ (I)'
    }
  }[language];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 md:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <RotateCw className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg md:text-xl font-bold text-slate-100">{labels.title}</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-400 mt-1">{labels.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Mode Switchers */}
          <button
            onClick={() => setMotorMode('running')}
            aria-pressed={motorMode === 'running'}
            aria-label={labels.modeRunning}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              motorMode === 'running'
                ? 'bg-emerald-500 text-slate-950 shadow-md'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {labels.modeRunning}
          </button>
          <button
            onClick={() => setMotorMode('starting')}
            aria-pressed={motorMode === 'starting'}
            aria-label={labels.modeStarting}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              motorMode === 'starting'
                ? 'bg-rose-500 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {labels.modeStarting}
          </button>
          <button
            onClick={handleReset}
            aria-label={labels.reset}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Grid: Motor Cross-Section Animation + Sliders & Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: SVG Motor Rotating Cross Section (7 Cols) */}
        <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="font-bold text-slate-300">DC Motor Stator & Armature Interaction</span>
            <span className="font-mono text-amber-400 font-bold">{currentSpeed} RPM | {torqueNm.toFixed(1)} N·m</span>
          </div>

          <svg viewBox="0 0 460 300" className="w-full h-auto max-h-[290px]" aria-label="DC Motor Working Principle Schematic">
            {/* Magnetic Pole - North (Left) */}
            <path d="M 30 50 L 110 50 C 130 90 130 210 110 250 L 30 250 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="2.5" />
            <text x="70" y="158" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold">N</text>
            <text x="70" y="180" textAnchor="middle" fill="#fca5a5" fontSize="9" fontWeight="bold">North Pole</text>

            {/* Magnetic Pole - South (Right) */}
            <path d="M 430 50 L 350 50 C 330 90 330 210 350 250 L 430 250 Z" fill="#2563eb" stroke="#1d4ed8" strokeWidth="2.5" />
            <text x="390" y="158" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold">S</text>
            <text x="390" y="180" textAnchor="middle" fill="#bfdbfe" fontSize="9" fontWeight="bold">South Pole</text>

            {/* Magnetic Flux Lines (N -> S) */}
            <g stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.65">
              <line x1="125" y1="80" x2="335" y2="80" />
              <line x1="130" y1="115" x2="330" y2="115" />
              <line x1="130" y1="150" x2="330" y2="150" />
              <line x1="130" y1="185" x2="330" y2="185" />
              <line x1="125" y1="220" x2="335" y2="220" />
            </g>
            <text x="230" y="35" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Main Field Flux Φ (Left to Right)</text>

            {/* Rotating Armature Group */}
            <g transform={`translate(230, 150) rotate(${rotationAngle})`}>
              {/* Armature Iron Rotor Core */}
              <circle cx="0" cy="0" r="70" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
              <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
              <text x="0" y="4" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontWeight="bold" transform={`rotate(${-rotationAngle})`}>Shaft</text>

              {/* Conductor Slots on Periphery */}
              {/* Top Conductor (Current Out of Page • ) */}
              <circle cx="0" cy="-52" r="11" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
              <circle cx="0" cy="-52" r="3" fill="#0f172a" />
              
              {/* Bottom Conductor (Current Into Page ⊗ ) */}
              <circle cx="0" cy="52" r="11" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />
              <line x1="-5" y1="47" x2="5" y2="57" stroke="#0f172a" strokeWidth="2" />
              <line x1="5" y1="47" x2="-5" y2="57" stroke="#0f172a" strokeWidth="2" />

              {/* Force Vectors according to Fleming's Left Hand Rule */}
              {/* Top Conductor: Force Upward/Left */}
              <line x1="0" y1="-52" x2="-35" y2="-52" stroke="#10b981" strokeWidth="3" />
              <polygon points="-35,-57 -47,-52 -35,-47" fill="#10b981" />
              
              {/* Bottom Conductor: Force Downward/Right */}
              <line x1="0" y1="52" x2="35" y2="52" stroke="#10b981" strokeWidth="3" />
              <polygon points="35,47 47,52 35,57" fill="#10b981" />
            </g>

            {/* Static Torque & Rotation Arrows */}
            <g transform="translate(230, 150)">
              <path d="M -50 -55 A 75 75 0 0 1 50 -55" fill="none" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="4,2" />
              <polygon points="50,-60 60,-55 50,-50" fill="#fbbf24" />
              <text x="0" y="-82" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">Torque Direction (CCW)</text>
            </g>

            {/* Rule badge bottom */}
            <g transform="translate(230, 282)">
              <rect x="-140" y="-12" width="280" height="24" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fill="#94a3b8" fontSize="10">
                Lorentz Force: <tspan fill="#10b981" fontWeight="bold">F = B · I · L</tspan> | Torque: <tspan fill="#fbbf24" fontWeight="bold">T = k · Φ · Ia</tspan>
              </text>
            </g>
          </svg>

          {/* Quick Fleming's Rule Legend */}
          <div className="w-full mt-2 bg-slate-900/90 border border-slate-800 rounded-lg p-2 flex items-center justify-around text-[10px]">
            <span className="text-emerald-400 font-bold">{labels.flemingThumb}</span>
            <span className="text-sky-400 font-bold">{labels.flemingFore}</span>
            <span className="text-amber-400 font-bold">{labels.flemingCenter}</span>
          </div>
        </div>

        {/* Right: Telemetry & Interactive Sliders (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Status Alert Banner */}
          {motorMode === 'starting' ? (
            <div className="bg-rose-950/60 border-2 border-rose-500/80 rounded-xl p-3.5 text-rose-200 text-xs shadow-lg space-y-1.5 animate-pulse">
              <div className="flex items-center gap-2 font-bold text-rose-400 text-sm">
                <ShieldAlert className="w-5 h-5" />
                <span>Zero Back EMF Condition (Eb = 0)</span>
              </div>
              <p className="text-[11px] leading-relaxed">{labels.startWarning}</p>
              <div className="font-mono text-base font-extrabold text-white pt-1">
                I_start = V / Ra = {safeV} / {safeRa.toFixed(2)} = <span className="text-rose-400">{armatureCurrent.toFixed(1)} A</span>
              </div>
            </div>
          ) : (
            <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-xl p-3.5 text-emerald-200 text-xs space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Self-Regulating Back EMF Governor</span>
              </div>
              <p className="text-[11px] text-slate-300">{labels.runningHealthy}</p>
              <div className="font-mono text-xs text-emerald-300 font-semibold pt-0.5">
                Eb = {backEmf.toFixed(1)} V | Ia = (V - Eb)/Ra = {armatureCurrent.toFixed(1)} A
              </div>
            </div>
          )}

          {/* Key Electrical & Mechanical Telemetry Cards */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {/* Back EMF Card */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3">
              <div className="text-slate-400 font-semibold">{labels.backEmf}</div>
              <div className="text-2xl font-extrabold text-sky-400 font-mono my-0.5">
                {backEmf.toFixed(1)} <span className="text-xs text-slate-400">V</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono">Eb = V - Ia·Ra</div>
            </div>

            {/* Armature Current Card */}
            <div className={`border rounded-xl p-3 ${
              motorMode === 'starting' ? 'bg-rose-950/40 border-rose-500/60' : 'bg-slate-800/80 border-slate-700/60'
            }`}>
              <div className="text-slate-400 font-semibold">{labels.armCurrent}</div>
              <div className={`text-2xl font-extrabold font-mono my-0.5 ${
                motorMode === 'starting' ? 'text-rose-400' : 'text-emerald-400'
              }`}>
                {armatureCurrent.toFixed(1)} <span className="text-xs text-slate-400">A</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono">Ia = (V - Eb)/Ra</div>
            </div>

            {/* Developed Torque Card */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3">
              <div className="text-slate-400 font-semibold">{labels.torque}</div>
              <div className="text-2xl font-extrabold text-amber-400 font-mono my-0.5">
                {torqueNm.toFixed(1)} <span className="text-xs text-slate-400">N·m</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono">Ta = (Eb·Ia)/ω</div>
            </div>

            {/* Mechanical Power Card */}
            <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3">
              <div className="text-slate-400 font-semibold">{labels.powerDev}</div>
              <div className="text-2xl font-extrabold text-indigo-400 font-mono my-0.5">
                {(developedPowerW / 1000).toFixed(2)} <span className="text-xs text-slate-400">kW</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono">Pdev = Ta · ω</div>
            </div>
          </div>

          {/* Interactive Sliders */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>Input Controls</span>
            </div>

            {/* Supply Voltage */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.supplyVoltage}</span>
                <span className="font-mono text-sky-400 font-bold">{supplyVoltage} V</span>
              </div>
              <input
                type="range"
                min="100"
                max="400"
                step="10"
                value={supplyVoltage}
                aria-label={labels.supplyVoltage}
                onChange={(e) => setSupplyVoltage(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
              />
            </div>

            {/* Armature Resistance */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.armResistance}</span>
                <span className="font-mono text-amber-400 font-bold">{armatureResistance} Ω</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.5"
                step="0.05"
                value={armatureResistance}
                aria-label={labels.armResistance}
                onChange={(e) => setArmatureResistance(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Field Flux */}
            <div>
              <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                <span>{labels.fieldFlux}</span>
                <span className="font-mono text-emerald-400 font-bold">{(fieldFluxWb * 1000).toFixed(1)} mWb</span>
              </div>
              <input
                type="range"
                min="0.010"
                max="0.050"
                step="0.002"
                value={fieldFluxWb}
                aria-label={labels.fieldFlux}
                onChange={(e) => setFieldFluxWb(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Speed Slider (Enabled only in running mode) */}
            {motorMode === 'running' && (
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                  <span>{labels.speed}</span>
                  <span className="font-mono text-indigo-400 font-bold">{speedRpm} RPM</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="2000"
                  step="50"
                  value={speedRpm}
                  aria-label={labels.speed}
                  onChange={(e) => setSpeedRpm(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
