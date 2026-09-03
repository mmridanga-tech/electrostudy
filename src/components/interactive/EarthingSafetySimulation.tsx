import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Info, RefreshCw } from 'lucide-react';
import { Language } from '../../types';

interface EarthingSafetySimulationProps {
  currentLanguage: Language;
}

export const EarthingSafetySimulation: React.FC<EarthingSafetySimulationProps> = ({ currentLanguage }) => {
  // Soil type and resistivity (in Ohm-meters)
  const soilTypes = [
    { id: 'marshy', nameEn: 'Marshy / Peat Soil', nameHi: 'दलदली मिट्टी', nameBn: 'জলাভূমি মাটি', rho: 15 },
    { id: 'clay', nameEn: 'Clay / Loam Soil', nameHi: 'दोमट / चिकनी मिट्टी', nameBn: 'দোআঁশ / এঁটেল মাটি', rho: 40 },
    { id: 'sandy', nameEn: 'Sandy / Gravel Ground', nameHi: 'रेतीली जमीन', nameBn: 'বেলে / কাঁকরযুক্ত মাটি', rho: 200 },
    { id: 'rocky', nameEn: 'Rocky / Dry Mountain', nameHi: 'पथरीली / शुष्क चट्टान', nameBn: 'পাথুরে / শুষ্ক পর্বত', rho: 1200 },
  ];

  const [selectedSoil, setSelectedSoil] = useState<string>('clay');
  const [electrodeLength, setElectrodeLength] = useState<number>(3.0); // meters
  const [electrodeDiameter, setElectrodeDiameter] = useState<number>(25); // mm
  const [systemType, setSystemType] = useState<'TT' | 'TN-S' | 'TN-C-S'>('TN-S');
  const [hasEarthing, setHasEarthing] = useState<boolean>(true);
  const [isFaultActive, setIsFaultActive] = useState<boolean>(true);

  const currentSoilObj = soilTypes.find(s => s.id === selectedSoil) || soilTypes[1];
  const rho = currentSoilObj.rho;

  // Pipe/Rod electrode resistance calculation:
  // R_e = (rho / (2 * pi * L)) * ln(4L / d)
  const L = electrodeLength;
  const d = electrodeDiameter / 1000; // convert mm to meters
  const calculatedRe = Math.round(((rho / (2 * Math.PI * L)) * Math.log((4 * L) / d)) * 10) / 10;
  
  // Effective earth resistance (if earthing disconnected, R_e is practically infinite ~ 50,000 ohms)
  const Re = hasEarthing ? Math.max(0.5, calculatedRe) : 50000;

  // Supply voltage
  const V_phase = 230; // Volts
  // Source transformer neutral resistance
  const Rn = systemType === 'TT' ? 5.0 : 0.05; // ohms

  // Earth fault loop impedance
  const Zs = systemType === 'TT' ? (Re + Rn + 0.3) : (0.15 + (hasEarthing ? 0.1 : 50000));
  const faultCurrent = isFaultActive ? Math.round((V_phase / Zs) * 10) / 10 : 0;

  // Touch voltage on metallic enclosure during fault
  // In TT: V_touch = I_fault * Re
  // In TN-S: V_touch = I_fault * R_PE = 230 * (R_PE / (R_ph + R_PE)) ~ 115 V for identical conductors during the few ms before trip
  // Without earthing: V_touch = V_phase (full 230V!)
  let touchVoltage = 0;
  if (isFaultActive) {
    if (!hasEarthing) {
      touchVoltage = V_phase;
    } else if (systemType === 'TT') {
      touchVoltage = Math.round((faultCurrent * Re) * 10) / 10;
      if (touchVoltage > V_phase) touchVoltage = V_phase;
    } else {
      touchVoltage = Math.round((V_phase * 0.45) * 10) / 10; // ~103 V
    }
  }

  // Is touch voltage safe (< 50 V AC per IEC 60364-4-41)
  const isSafe = touchVoltage <= 50;

  const t = {
    en: {
      title: 'Grounding & Earthing Systems Analysis Simulator',
      subtitle: 'Analyze soil resistivity, electrode dissipation resistance, fault loop impedance, and touch voltage safety limits (IS 3043 / IEC 60364)',
      systemHeading: 'Earthing Configuration (IEC 60364):',
      soilHeading: 'Soil Resistivity (ρ):',
      electrodeLen: 'Electrode Length (L):',
      electrodeDia: 'Electrode Diameter (d):',
      faultToggle: 'Appliance Insulation Fault:',
      earthToggle: 'Protective Conductor (PE) Connected:',
      metricsTitle: 'Grounding & Fault Metrics',
      earthResistance: 'Electrode Earth Resistance (Re):',
      faultLoopImp: 'Fault Loop Impedance (Zs):',
      faultCurrent: 'Prospective Fault Current (If):',
      touchVoltage: 'Prospective Touch Voltage (Vt):',
      safeNotice: 'SAFE TOUCH VOLTAGE: Vt ≤ 50 V AC within standard permissible threshold.',
      dangerNotice: 'LETHAL HAZARD: Vt > 50 V AC! Dangerous shock hazard without immediate automatic disconnection.',
      reset: 'Reset Defaults'
    },
    hi: {
      title: 'अर्थिंग (भू-संपर्कन) प्रणाली विश्लेषण सिम्युलेटर',
      subtitle: 'मिट्टी की प्रतिरोधकता, इलेक्ट्रोड प्रतिरोध, फॉल्ट लूप प्रतिबाधा और स्पर्श वोल्टेज सुरक्षा (IS 3043 / IEC 60364)',
      systemHeading: 'अर्थिंग विन्यास (IEC 60364):',
      soilHeading: 'मिट्टी की प्रतिरोधकता (ρ):',
      electrodeLen: 'इलेक्ट्रोड लंबाई (L):',
      electrodeDia: 'इलेक्ट्रोड व्यास (d):',
      faultToggle: 'उपकरण इन्सुलेशन विफलता:',
      earthToggle: 'सुरक्षात्मक अर्थिंग (PE) जुड़ी हुई:',
      metricsTitle: 'अर्थिंग एवं फॉल्ट मेट्रिक्स',
      earthResistance: 'इलेक्ट्रोड अर्थ प्रतिरोध (Re):',
      faultLoopImp: 'फॉल्ट लूप प्रतिबाधा (Zs):',
      faultCurrent: 'संभावित फॉल्ट धारा (If):',
      touchVoltage: 'संभावित स्पर्श वोल्टेज (Vt):',
      safeNotice: 'सुरक्षित स्पर्श वोल्टेज: Vt ≤ 50 V AC मानक सुरक्षित सीमा के भीतर।',
      dangerNotice: 'घातक खतरा: Vt > 50 V AC! तत्काल ट्रिपिंग के बिना प्राणघातक झटका।',
      reset: 'रीसेट करें'
    },
    bn: {
      title: 'আর্থিং ও গ্রাউন্ডিং সিস্টেম বিশ্লেষণ সিমুলেটর',
      subtitle: 'মাটির রোধকতা, ইলেকট্রোড ডিসিপেশন রোধ, ফল্ট লুপ প্রতিবন্ধকতা এবং স্পর্শ ভোল্টেজ নিরাপত্তা (IS 3043 / IEC 60364)',
      systemHeading: 'আর্থিং ব্যবস্থা (IEC 60364):',
      soilHeading: 'মাটির রোধকতা (ρ):',
      electrodeLen: 'ইলেকট্রোড দৈর্ঘ্য (L):',
      electrodeDia: 'ইলেকট্রোড ব্যাস (d):',
      faultToggle: 'যন্ত্রপাতির ইনসুলেশন ত্রুটি:',
      earthToggle: 'প্রতিরক্ষামূলক আর্থিং (PE) সংযুক্ত:',
      metricsTitle: 'আর্থিং ও ফল্ট পরিমাপ',
      earthResistance: 'ইলেকট্রোড আর্থ রোধ (Re):',
      faultLoopImp: 'ফল্ট লুপ প্রতিবন্ধকতা (Zs):',
      faultCurrent: 'ফল্ট কারেন্ট (If):',
      touchVoltage: 'স্পর্শ ভোল্টেজ (Vt):',
      safeNotice: 'নিরাপদ স্পর্শ ভোল্টেজ: Vt ≤ ৫০ V AC অনুমোদিত সীমার মধ্যে।',
      dangerNotice: 'মারাত্মক বিপদ: Vt > ৫০ V AC! দ্রুত স্বয়ংক্রিয় ট্রিপিং ছাড়া প্রাণঘাতী শকের ঝুঁকি।',
      reset: 'রিসেট করুন'
    }
  }[currentLanguage];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl text-slate-100 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">{t.title}</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <button
          onClick={() => {
            setSelectedSoil('clay');
            setElectrodeLength(3.0);
            setElectrodeDiameter(25);
            setSystemType('TN-S');
            setHasEarthing(true);
            setIsFaultActive(true);
          }}
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition-colors border border-slate-700 w-fit"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>{t.reset}</span>
        </button>
      </div>

      {/* Interactive Controls & Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Schematic SVG cross-section (5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center">
          <svg viewBox="0 0 280 280" className="w-full h-64">
            {/* Sky / Surface Line */}
            <rect x="0" y="0" width="280" height="120" fill="#090d16" />
            {/* Ground / Soil Layer */}
            <rect x="0" y="120" width="280" height="160" fill="#1e1810" stroke="#332415" strokeWidth="1" />
            <line x1="0" y1="120" x2="280" y2="120" stroke="#78350f" strokeWidth="3" />
            <text x="10" y="135" fill="#a16207" fontSize="9" fontWeight="bold">Soil: {currentSoilObj.nameEn} (ρ={rho} Ω·m)</text>

            {/* Electrical Appliance (Washing Machine / Motor Metallic Enclosure) */}
            <g transform="translate(30, 45)">
              <rect x="0" y="0" width="80" height="75" rx="4" fill="#1e293b" stroke={touchVoltage > 50 ? '#ef4444' : '#38bdf8'} strokeWidth="2.5" />
              <text x="40" y="20" fill="#cbd5e1" fontSize="9" fontWeight="bold" textAnchor="middle">Metal Body</text>
              <circle cx="40" cy="45" r="16" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
              <text x="40" y="48" fill="#94a3b8" fontSize="8" textAnchor="middle">Motor</text>
              
              {/* Internal Phase Wire & Fault */}
              <line x1="-20" y1="35" x2="25" y2="35" stroke="#ef4444" strokeWidth="2.5" />
              <text x="-25" y="32" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="end">Phase (L)</text>
              {isFaultActive && (
                <g>
                  {/* Fault short circuit to frame */}
                  <line x1="25" y1="35" x2="0" y2="35" stroke="#f59e0b" strokeWidth="3" strokeDasharray="3 2" />
                  <text x="12" y="30" fill="#f59e0b" fontSize="10" fontWeight="bold">⚡</text>
                </g>
              )}
            </g>

            {/* Earth Wire (PE) going from appliance to Earth Electrode */}
            {hasEarthing ? (
              <path
                d="M 110,105 L 180,105 L 180,125"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray={isFaultActive ? '4 2' : 'none'}
              />
            ) : (
              <g>
                <path d="M 110,105 L 140,105" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="2 2" />
                <text x="150" y="108" fill="#ef4444" fontSize="10" fontWeight="bold">✕ Disconnected</text>
              </g>
            )}

            {/* Earth Pit & Electrode */}
            <g transform="translate(180, 120)">
              {/* Pit Backfill (Charcoal / Bentonite) */}
              <rect x="-16" y="0" width="32" height={Math.min(140, L * 30)} fill="#292524" stroke="#44403c" strokeWidth="1" />
              
              {/* Metallic Earth Rod */}
              <rect x="-4" y="0" width="8" height={Math.min(145, L * 32)} fill="#d97706" stroke="#b45309" strokeWidth="1" rx="2" />
              <text x="16" y="50" fill="#fbbf24" fontSize="8" fontWeight="mono">Re = {Re} Ω</text>
              
              {/* Equipotential Hemispherical Voltage Shells */}
              {isFaultActive && hasEarthing && (
                <g opacity="0.4">
                  <ellipse cx="0" cy="0" rx="40" ry="25" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
                  <ellipse cx="0" cy="0" rx="70" ry="45" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
                  <ellipse cx="0" cy="0" rx="95" ry="60" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 3" />
                </g>
              )}
            </g>

            {/* Human Hand Touching Metallic Enclosure */}
            <g transform="translate(118, 55)">
              <circle cx="15" cy="10" r="7" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
              <path d="M 15,17 L 15,45 L 8,65" fill="none" stroke="#94a3b8" strokeWidth="3" />
              <path d="M 15,45 L 22,65" fill="none" stroke="#94a3b8" strokeWidth="3" />
              {/* Arm touching appliance */}
              <path d="M 15,25 L -8,45" fill="none" stroke={touchVoltage > 50 ? '#ef4444' : '#10b981'} strokeWidth="3" />
              
              {/* Touch Voltage Tag */}
              <rect x="-10" y="70" width="50" height="18" rx="3" fill="#020617" stroke={touchVoltage > 50 ? '#ef4444' : '#10b981'} strokeWidth="1" />
              <text x="15" y="82" fill={touchVoltage > 50 ? '#ef4444' : '#34d399'} fontSize="8" fontWeight="bold" textAnchor="middle">
                Vt = {touchVoltage}V
              </text>
            </g>
          </svg>
          <div className="text-[11px] font-mono text-center text-slate-400 mt-1">
            System: <span className="text-cyan-400 font-bold">{systemType}</span> | Formula: <span className="text-amber-300">Re = (ρ/2πL)·ln(4L/d)</span>
          </div>
        </div>

        {/* Controls Column (7 cols) */}
        <div className="lg:col-span-7 space-y-4 text-xs">
          {/* System Selection */}
          <div>
            <label className="font-semibold text-slate-300 block mb-1.5">{t.systemHeading}</label>
            <div className="grid grid-cols-3 gap-2">
              {(['TT', 'TN-S', 'TN-C-S'] as const).map(sys => (
                <button
                  key={sys}
                  onClick={() => setSystemType(sys)}
                  className={`py-2 px-2.5 rounded-lg border text-left transition-all ${
                    systemType === sys
                      ? 'bg-cyan-950/60 border-cyan-500 text-cyan-300 font-bold shadow'
                      : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  <div className="text-xs">{sys} Earthing</div>
                  <div className="text-[10px] text-slate-400 font-normal">
                    {sys === 'TT' ? 'Independent Consumer Earth' : sys === 'TN-S' ? 'Separate Protective Earth (PE)' : 'Combined PEN to Consumer'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Soil Resistivity Selector */}
          <div>
            <label className="font-semibold text-slate-300 block mb-1.5">{t.soilHeading}</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {soilTypes.map(st => (
                <button
                  key={st.id}
                  onClick={() => setSelectedSoil(st.id)}
                  className={`p-2 rounded-lg border text-left transition-all ${
                    selectedSoil === st.id
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                      : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  <div className="text-xs truncate">{st.nameEn}</div>
                  <div className="text-[10px] text-slate-400 font-mono">ρ = {st.rho} Ω·m</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sliders: Length and Diameter */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span className="text-slate-300">{t.electrodeLen}</span>
                <span className="text-amber-400 font-mono">{electrodeLength.toFixed(1)} m</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="6.0"
                step="0.5"
                value={electrodeLength}
                onChange={e => setElectrodeLength(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold mb-1">
                <span className="text-slate-300">{t.electrodeDia}</span>
                <span className="text-amber-400 font-mono">{electrodeDiameter} mm</span>
              </div>
              <input
                type="range"
                min="12"
                max="50"
                step="1"
                value={electrodeDiameter}
                onChange={e => setElectrodeDiameter(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>
          </div>

          {/* Fault & PE Toggles */}
          <div className="flex flex-wrap gap-4 pt-2 border-t border-slate-800">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isFaultActive}
                onChange={e => setIsFaultActive(e.target.checked)}
                className="w-4 h-4 rounded text-amber-500 bg-slate-800 border-slate-700 focus:ring-0"
              />
              <span className="text-slate-200">{t.faultToggle}</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={hasEarthing}
                onChange={e => setHasEarthing(e.target.checked)}
                className="w-4 h-4 rounded text-emerald-500 bg-slate-800 border-slate-700 focus:ring-0"
              />
              <span className="text-slate-200">{t.earthToggle}</span>
            </label>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-slate-400 text-xs">{t.earthResistance}</div>
          <div className={`text-base font-bold font-mono mt-1 ${Re <= 5 ? 'text-emerald-400' : Re <= 25 ? 'text-yellow-400' : 'text-red-400'}`}>
            {hasEarthing ? `${Re} Ω` : '∞ (Broken)'}
          </div>
          <div className="text-[10px] text-slate-500">IS 3043 target &lt; 5 Ω</div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-slate-400 text-xs">{t.faultLoopImp}</div>
          <div className="text-base font-bold font-mono text-cyan-300 mt-1">
            {Zs > 1000 ? '> 1 kΩ' : `${Zs.toFixed(2)} Ω`}
          </div>
          <div className="text-[10px] text-slate-500">Zs = Ze + (R1 + R2)</div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-slate-400 text-xs">{t.faultCurrent}</div>
          <div className="text-base font-bold font-mono text-amber-400 mt-1">
            {faultCurrent} A
          </div>
          <div className="text-[10px] text-slate-500">If = Uo / Zs</div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-slate-400 text-xs">{t.touchVoltage}</div>
          <div className={`text-base font-bold font-mono mt-1 ${isSafe ? 'text-emerald-400' : 'text-red-400'}`}>
            {touchVoltage} V
          </div>
          <div className="text-[10px] text-slate-500">Safe limit: ≤ 50 V</div>
        </div>
      </div>

      {/* Touch Voltage Status Banner */}
      <div className={`p-4 rounded-xl border flex items-center space-x-3 ${isSafe ? 'bg-emerald-950/30 border-emerald-500/50' : 'bg-red-950/40 border-red-500/50'}`}>
        {isSafe ? (
          <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
        ) : (
          <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 animate-bounce" />
        )}
        <div className="text-xs">
          <div className={`font-bold ${isSafe ? 'text-emerald-300' : 'text-red-300'}`}>
            {isSafe ? t.safeNotice : t.dangerNotice}
          </div>
          <div className="text-slate-300 mt-0.5">
            {hasEarthing
              ? systemType === 'TT'
                ? 'In TT systems, RCD protection (30 mA) is mandatory because Re (earth resistance) limits fault current below MCB magnetic trip thresholds.'
                : 'In TN systems, low fault loop impedance ensures high fault current, tripping MCB within 0.4s to clear touch potential.'
              : 'DANGER: Without a protective bonding conductor (PE), the entire metal chassis floats at live phase voltage (230 V), presenting a lethal electrocution path through anyone touching it!'}
          </div>
        </div>
      </div>
    </div>
  );
};
