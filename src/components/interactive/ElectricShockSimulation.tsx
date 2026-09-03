import React, { useState } from 'react';
import { Zap, Heart, AlertTriangle, ShieldCheck, Activity, RotateCcw } from 'lucide-react';
import { Language } from '../../types';

interface ElectricShockSimulationProps {
  currentLanguage: Language;
}

export const ElectricShockSimulation: React.FC<ElectricShockSimulationProps> = ({ currentLanguage }) => {
  const [voltage, setVoltage] = useState<number>(230); // Volts
  const [skinCondition, setSkinCondition] = useState<'dry' | 'damp' | 'wet' | 'submerged'>('dry');
  const [pathway, setPathway] = useState<'hand_to_hand' | 'hand_to_foot' | 'chest_to_back'>('hand_to_foot');
  const [contactDurationMs, setContactDurationMs] = useState<number>(500);

  // Skin resistance based on environmental condition
  const skinResistances = {
    dry: 50000,       // 50 kΩ
    damp: 8000,       // 8 kΩ
    wet: 1200,        // 1.2 kΩ
    submerged: 500    // 0.5 kΩ
  };

  // Internal body resistance approx 500 Ω
  const internalResistance = 500;

  // Pathway factor (IEC 60479-1 heart current factor F)
  const pathwayFactors = {
    hand_to_hand: { name: 'Hand-to-Hand', factor: 0.4, pathR: 1.0 },
    hand_to_foot: { name: 'Left Hand to Feet', factor: 1.0, pathR: 1.0 },
    chest_to_back: { name: 'Chest to Back', factor: 1.5, pathR: 0.7 }
  };

  const currentPathway = pathwayFactors[pathway];
  const effectiveSkinR = skinResistances[skinCondition];
  const totalBodyImpedance = Math.round((effectiveSkinR + internalResistance) * currentPathway.pathR);
  
  // Body current in milliamperes
  const currentMa = Math.round((voltage / totalBodyImpedance) * 1000 * 10) / 10;
  
  // Heart current equivalent
  const heartCurrentMa = Math.round(currentMa * currentPathway.factor * 10) / 10;

  // IEC 60479-1 Zones:
  // Zone 1: Ib < 0.5 mA (Imperceptible)
  // Zone 2: 0.5 mA <= Ib < 10 mA (Perception to let-go threshold)
  // Zone 3: 10 mA <= Ib < 50 mA (Tetanic muscle contraction, cannot let go)
  // Zone 4: Ib >= 50 mA (Ventricular fibrillation risk)
  let zone = 'Zone 1';
  let zoneColor = 'text-emerald-400';
  let zoneBorder = 'border-emerald-500/50';
  let zoneBg = 'bg-emerald-950/30';
  let effectEn = 'Imperceptible. No physiological reaction.';
  let effectHi = 'अगोचर। कोई शारीरिक प्रभाव नहीं।';
  let effectBn = 'অনুভূতিহীন। কোনো শারীরিক প্রভাব নেই।';

  if (currentMa >= 0.5 && currentMa < 5) {
    zone = 'Zone 2 (Mild)';
    zoneColor = 'text-sky-400';
    zoneBorder = 'border-sky-500/50';
    zoneBg = 'bg-sky-950/30';
    effectEn = 'Threshold of perception. Slight tingling sensation. Involuntary withdrawal reflex.';
    effectHi = 'संवेदना की सीमा। हल्की झनझनाहट। अनैच्छिक रूप से हाथ पीछे खींचना।';
    effectBn = 'অনুভূতির সূচনা। মৃদু ঝিমঝিম অনুভূতি। অনৈচ্ছিক হাত সরিয়ে নেওয়ার প্রবণতা।';
  } else if (currentMa >= 5 && currentMa < 10) {
    zone = 'Zone 2 (Strong)';
    zoneColor = 'text-yellow-400';
    zoneBorder = 'border-yellow-500/50';
    zoneBg = 'bg-yellow-950/30';
    effectEn = 'Painful sensation. Muscular control maintained. Safe release possible.';
    effectHi = 'दर्दनाक झटका। मांसपेशियों पर नियंत्रण बना रहता है। सुरक्षित रूप से हाथ छुड़ाना संभव।';
    effectBn = 'বেদনাদায়ক শক। পেশীর নিয়ন্ত্রণ বজায় থাকে। নিরাপদে হাত ছাড়ানো সম্ভব।';
  } else if (currentMa >= 10 && currentMa < 30) {
    zone = 'Zone 3 (Let-go Exceeded)';
    zoneColor = 'text-amber-500';
    zoneBorder = 'border-amber-500/50';
    zoneBg = 'bg-amber-950/40';
    effectEn = 'Tetanic muscle contraction ("Cannot Let Go" threshold). Breathing difficulty. High pain.';
    effectHi = 'मांसपेशियों का ऐंठन ("हाथ न छुड़ा पाना" की स्थिति)। सांस लेने में कठिनाई। तीव्र दर्द।';
    effectBn = 'পেশীর তীব্র সংকোচন ("হাত ছাড়াতে না পারা" অবস্থা)। শ্বাসকষ্ট ও তীব্র যন্ত্রণা।';
  } else if (currentMa >= 30 && currentMa < 50) {
    zone = 'Zone 3 (Severe)';
    zoneColor = 'text-orange-500';
    zoneBorder = 'border-orange-500/50';
    zoneBg = 'bg-orange-950/40';
    effectEn = 'Severe muscular spasm. Reversible heart arrhythmias. Heavy asphyxia if prolonged.';
    effectHi = 'गंभीर मांसपेशियों में ऐंठन। हृदय गति में असंतुलन। लंबे समय तक रहने पर दम घुटना।';
    effectBn = 'মারাত্মক পেশী আক্ষেপ। হৃদস্পন্দনে অনিয়ম। দীর্ঘস্থায়ী হলে শ্বাসরোধের ঝুঁকি।';
  } else if (currentMa >= 50) {
    zone = 'Zone 4 (Lethal)';
    zoneColor = 'text-red-500';
    zoneBorder = 'border-red-500/50';
    zoneBg = 'bg-red-950/50';
    effectEn = 'CRITICAL: Ventricular Fibrillation probability > 50%. Cardiac arrest within seconds. Severe internal burns.';
    effectHi = 'अति-गंभीर: वेंट्रिकुलर फाइब्रिलेशन की संभावना > 50%। कुछ ही सेकंड में हृदय गति रुकना। गंभीर आंतरिक जलन।';
    effectBn = 'মারাত্মক বিপজ্জনক: ভেন্ট্রিকুলার ফিব্রিলেশনের সম্ভাবনা > ৫০%। কয়েক সেকেন্ডে হৃদযন্ত্রের ক্রিয়া বন্ধ হওয়া। তীব্র অভ্যন্তরীণ দগ্ধ।';
  }

  const t = {
    en: {
      title: 'Human Body Electric Shock & IEC 60479-1 Physiological Simulator',
      subtitle: 'Analyze the interaction between contact voltage, skin impedance, current pathway, and cardiac ventricular fibrillation',
      voltageLabel: 'Touch Voltage (V):',
      skinLabel: 'Skin Contact Condition:',
      pathLabel: 'Shock Current Pathway:',
      durationLabel: 'Duration (ms):',
      calcHeader: 'Electrical & Physiological Metrics',
      totalZ: 'Total Body Impedance (Zb):',
      shockCurrent: 'Shock Current (Ib):',
      heartCurrent: 'Effective Heart Current:',
      safetyZone: 'IEC 60479-1 Physiological Zone:',
      effectTitle: 'Physiological Effect:',
      presetDry: 'Normal Dry Touch (230 V)',
      presetWet: 'Wet / Bathroom Touch (230 V)',
      presetLowV: 'Safety Extra-Low Voltage (24 V)',
      presetIndustrial: '3-Phase Industrial Fault (415 V)',
      reset: 'Reset Defaults'
    },
    hi: {
      title: 'मानव शरीर विद्युत झटका एवं IEC 60479-1 शारीरिक प्रभाव सिम्युलेटर',
      subtitle: 'स्पर्श वोल्टेज, त्वचा प्रतिबाधा, धारा मार्ग और हृदय फाइब्रिलेशन के बीच संबंध का विश्लेषण',
      voltageLabel: 'टच वोल्टेज (V):',
      skinLabel: 'त्वचा संपर्क की स्थिति:',
      pathLabel: 'करंट का मार्ग:',
      durationLabel: 'अवधि (ms):',
      calcHeader: 'विद्युत एवं शारीरिक मेट्रिक्स',
      totalZ: 'शरीर की कुल प्रतिबाधा (Zb):',
      shockCurrent: 'शॉक धारा (Ib):',
      heartCurrent: 'हृदय पर प्रभावी धारा:',
      safetyZone: 'IEC 60479-1 सुरक्षा क्षेत्र:',
      effectTitle: 'शारीरिक प्रभाव:',
      presetDry: 'सामान्य सूखी त्वचा (230 V)',
      presetWet: 'गीली स्थिति / बाथरूम (230 V)',
      presetLowV: 'अतिरिक्त सुरक्षित निम्न वोल्टेज (24 V)',
      presetIndustrial: '3-फेज औद्योगिक फॉल्ट (415 V)',
      reset: 'रीसेट करें'
    },
    bn: {
      title: 'মানব শরীর বিদ্যুৎ শক ও IEC 60479-1 শারীরবৃত্তীয় প্রভাব সিমুলেটর',
      subtitle: 'স্পর্শ ভোল্টেজ, ত্বকের প্রতিবন্ধকতা, প্রবাহ পথ এবং হৃদযন্ত্রের ফিব্রিলেশনের বিশ্লেষণ',
      voltageLabel: 'স্পর্শ ভোল্টেজ (V):',
      skinLabel: 'ত্বকের স্পর্শ অবস্থা:',
      pathLabel: 'শক কারেন্টের পথ:',
      durationLabel: 'সময়কাল (ms):',
      calcHeader: 'বৈদ্যুতিক ও শারীরিক পরিমাপ',
      totalZ: 'শরীরের মোট প্রতিবন্ধকতা (Zb):',
      shockCurrent: 'শক কারেন্ট (Ib):',
      heartCurrent: 'হৃদযন্ত্রে কার্যকর কারেন্ট:',
      safetyZone: 'IEC 60479-1 সুরক্ষা অঞ্চল:',
      effectTitle: 'শারীরবৃত্তীয় প্রভাব:',
      presetDry: 'সাধারণ শুষ্ক স্পর্শ (২৩০ V)',
      presetWet: 'ভেজা অবস্থা / বাথরুম (২৩০ V)',
      presetLowV: 'নিরাপদ অতিরিক্ত নিম্ন ভোল্টেজ (২৪ V)',
      presetIndustrial: '৩-ফেজ শিল্প কারখানা ফল্ট (৪১৫ V)',
      reset: 'রিসেট করুন'
    }
  }[currentLanguage];

  const currentEffect = currentLanguage === 'hi' ? effectHi : currentLanguage === 'bn' ? effectBn : effectEn;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-2xl text-slate-100 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">{t.title}</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">{t.subtitle}</p>
        </div>
        <button
          onClick={() => {
            setVoltage(230);
            setSkinCondition('dry');
            setPathway('hand_to_foot');
            setContactDurationMs(500);
          }}
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded-lg transition-colors border border-slate-700 w-fit"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.reset}</span>
        </button>
      </div>

      {/* Preset Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={() => { setVoltage(230); setSkinCondition('dry'); setPathway('hand_to_foot'); }}
          className="px-2.5 py-2 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left transition-colors"
        >
          <div className="font-semibold text-slate-200">{t.presetDry}</div>
          <div className="text-[10px] text-slate-400">Zb ≈ 50.5 kΩ | Safe let-go</div>
        </button>
        <button
          onClick={() => { setVoltage(230); setSkinCondition('wet'); setPathway('hand_to_foot'); }}
          className="px-2.5 py-2 text-xs rounded-lg bg-red-950/40 hover:bg-red-900/50 border border-red-800/60 text-left transition-colors"
        >
          <div className="font-semibold text-red-300">{t.presetWet}</div>
          <div className="text-[10px] text-red-400 font-bold">Zb ≈ 1.7 kΩ | LETHAL!</div>
        </button>
        <button
          onClick={() => { setVoltage(24); setSkinCondition('damp'); setPathway('hand_to_hand'); }}
          className="px-2.5 py-2 text-xs rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 text-left transition-colors"
        >
          <div className="font-semibold text-emerald-300">{t.presetLowV}</div>
          <div className="text-[10px] text-emerald-400">SELV &lt; 50 V | Safe</div>
        </button>
        <button
          onClick={() => { setVoltage(415); setSkinCondition('damp'); setPathway('hand_to_foot'); }}
          className="px-2.5 py-2 text-xs rounded-lg bg-amber-950/40 hover:bg-amber-900/50 border border-amber-800/60 text-left transition-colors"
        >
          <div className="font-semibold text-amber-300">{t.presetIndustrial}</div>
          <div className="text-[10px] text-amber-400">415 V AC | Violent shock</div>
        </button>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Visual Human SVG Diagram (5 Cols) */}
        <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
          <svg viewBox="0 0 240 320" className="w-full h-64 max-w-[220px]">
            {/* Ambient Danger Glow */}
            {currentMa >= 50 && (
              <circle cx="120" cy="130" r="80" fill="#dc2626" fillOpacity="0.15" className="animate-pulse" />
            )}

            {/* Human Silhouette */}
            {/* Head */}
            <circle cx="120" cy="40" r="22" fill="#1e293b" stroke="#475569" strokeWidth="2" />
            {/* Neck */}
            <rect x="114" y="62" width="12" height="12" fill="#1e293b" />
            {/* Torso */}
            <path d="M 85,74 L 155,74 L 145,175 L 95,175 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" />
            {/* Left Arm (Reaching up to Live Wire) */}
            <path d="M 85,74 L 40,95 L 25,65" fill="none" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
            {/* Right Arm */}
            <path d="M 155,74 L 195,115 L 205,150" fill="none" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
            {/* Left Leg */}
            <path d="M 105,175 L 100,240 L 95,300" fill="none" stroke="#475569" strokeWidth="10" strokeLinecap="round" />
            {/* Right Leg */}
            <path d="M 135,175 L 140,240 L 145,300" fill="none" stroke="#475569" strokeWidth="10" strokeLinecap="round" />

            {/* Live Terminal Touch at Hand (25, 65) */}
            <circle cx="25" cy="65" r="7" fill="#dc2626" stroke="#fca5a5" strokeWidth="2" />
            <text x="25" y="50" fill="#ef4444" fontSize="9" fontWeight="bold" textAnchor="middle">{voltage}V</text>

            {/* Ground / Earth at Feet (95, 300) & (145, 300) */}
            <line x1="75" y1="305" x2="165" y2="305" stroke="#10b981" strokeWidth="3" />
            <line x1="90" y1="310" x2="150" y2="310" stroke="#10b981" strokeWidth="2" />
            <line x1="105" y1="315" x2="135" y2="315" stroke="#10b981" strokeWidth="1" />
            <text x="120" y="325" fill="#34d399" fontSize="8" textAnchor="middle">Earth Ground (0 V)</text>

            {/* Glowing Current Path */}
            {currentMa > 0.5 && (
              <g className={currentMa >= 30 ? 'animate-pulse' : ''}>
                {pathway === 'hand_to_foot' && (
                  <path
                    d="M 25,65 L 40,95 L 85,74 L 115,120 L 145,175 L 140,240 L 145,300"
                    fill="none"
                    stroke={currentMa >= 50 ? '#ef4444' : currentMa >= 10 ? '#f59e0b' : '#38bdf8'}
                    strokeWidth={Math.min(6, Math.max(2, currentMa / 20))}
                    strokeDasharray="4 2"
                  />
                )}
                {pathway === 'hand_to_hand' && (
                  <path
                    d="M 25,65 L 40,95 L 85,74 L 120,90 L 155,74 L 195,115 L 205,150"
                    fill="none"
                    stroke={currentMa >= 50 ? '#ef4444' : currentMa >= 10 ? '#f59e0b' : '#38bdf8'}
                    strokeWidth={Math.min(6, Math.max(2, currentMa / 20))}
                    strokeDasharray="4 2"
                  />
                )}
                {pathway === 'chest_to_back' && (
                  <path
                    d="M 25,65 L 85,74 L 120,110 L 130,135"
                    fill="none"
                    stroke={currentMa >= 50 ? '#ef4444' : currentMa >= 10 ? '#f59e0b' : '#38bdf8'}
                    strokeWidth={Math.min(6, Math.max(2, currentMa / 20))}
                    strokeDasharray="4 2"
                  />
                )}
              </g>
            )}

            {/* Heart Location (approx 125, 115) */}
            <g transform="translate(125, 115)">
              <circle cx="0" cy="0" r="12" fill={currentMa >= 50 ? '#450a0a' : '#0f172a'} stroke={currentMa >= 50 ? '#ef4444' : '#f43f5e'} strokeWidth="1.5" />
              <text x="0" y="4" fill={currentMa >= 50 ? '#ef4444' : '#f43f5e'} fontSize="11" textAnchor="middle">
                {currentMa >= 50 ? '⚡' : '♥'}
              </text>
            </g>
          </svg>

          {/* Current Banner below avatar */}
          <div className="mt-2 text-center">
            <div className="text-xs text-slate-400 font-mono">Calculated Shock Current</div>
            <div className={`text-2xl font-black font-mono ${currentMa >= 50 ? 'text-red-400' : currentMa >= 10 ? 'text-amber-400' : 'text-emerald-400'}`}>
              {currentMa} mA
            </div>
          </div>
        </div>

        {/* Controls Column (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Voltage Slider */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{t.voltageLabel}</span>
              <span className="text-amber-400 font-mono font-bold">{voltage} V AC</span>
            </div>
            <input
              type="range"
              min="12"
              max="600"
              step="1"
              value={voltage}
              onChange={(e) => setVoltage(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
              <span>12 V (SELV)</span>
              <span>50 V (Safety Limit)</span>
              <span>230 V (Mains)</span>
              <span>415 V</span>
              <span>600 V</span>
            </div>
          </div>

          {/* Skin Condition Selector */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.skinLabel}</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs">
              {(['dry', 'damp', 'wet', 'submerged'] as const).map((cond) => (
                <button
                  key={cond}
                  onClick={() => setSkinCondition(cond)}
                  className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                    skinCondition === cond
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                      : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  <div className="capitalize">{cond}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{skinResistances[cond].toLocaleString()} Ω</div>
                </button>
              ))}
            </div>
          </div>

          {/* Shock Current Pathway */}
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1.5">{t.pathLabel}</label>
            <div className="grid grid-cols-3 gap-1.5 text-xs">
              {(['hand_to_hand', 'hand_to_foot', 'chest_to_back'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPathway(p)}
                  className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                    pathway === p
                      ? 'bg-blue-500/20 border-blue-500 text-blue-300 font-bold'
                      : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:border-slate-600'
                  }`}
                >
                  <div>{pathwayFactors[p].name}</div>
                  <div className="text-[10px] text-slate-400 font-mono">Heart factor: {pathwayFactors[p].factor}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Duration Slider */}
          <div>
            <div className="flex justify-between text-xs font-semibold mb-1">
              <span className="text-slate-300">{t.durationLabel}</span>
              <span className="text-cyan-400 font-mono font-bold">{contactDurationMs} ms</span>
            </div>
            <input
              type="range"
              min="10"
              max="2000"
              step="10"
              value={contactDurationMs}
              onChange={(e) => setContactDurationMs(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* Numerical Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-slate-400 text-xs">{t.totalZ}</div>
          <div className="text-lg font-bold font-mono text-cyan-300 mt-1">
            {totalBodyImpedance.toLocaleString()} Ω
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            R_skin ({effectiveSkinR.toLocaleString()}Ω) + R_int (500Ω)
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-slate-400 text-xs">{t.shockCurrent}</div>
          <div className={`text-lg font-bold font-mono mt-1 ${currentMa >= 50 ? 'text-red-400' : currentMa >= 10 ? 'text-amber-400' : 'text-emerald-400'}`}>
            {currentMa} mA
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            Ohm's law: I = V / Zb
          </div>
        </div>

        <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div className="text-slate-400 text-xs">{t.heartCurrent}</div>
          <div className="text-lg font-bold font-mono text-rose-400 mt-1">
            {heartCurrentMa} mA
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            I_heart = I_b × Heart Factor ({currentPathway.factor})
          </div>
        </div>
      </div>

      {/* Physiological Effect & Safety Zone Banner */}
      <div className={`p-4 rounded-xl border ${zoneBg} ${zoneBorder} space-y-2`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {currentMa >= 50 ? (
              <AlertTriangle className="w-5 h-5 text-red-400 animate-bounce" />
            ) : currentMa >= 10 ? (
              <Activity className="w-5 h-5 text-amber-400" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            )}
            <span className={`font-bold text-sm ${zoneColor}`}>
              {t.safetyZone} {zone}
            </span>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900/60 border border-slate-700 text-slate-300">
            {currentMa < 30 ? 'Non-Fibrillating' : 'High Fibrillation Risk'}
          </span>
        </div>
        <p className="text-xs text-slate-200 leading-relaxed font-sans">
          {currentEffect}
        </p>
      </div>
    </div>
  );
};
