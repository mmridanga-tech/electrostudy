import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle2, Lock, Sliders, Info, Eye, Layers } from 'lucide-react';
import { Language } from '../../types';

interface SafeWorkingPracticesSimulationProps {
  currentLanguage: Language;
}

export const SafeWorkingPracticesSimulation: React.FC<SafeWorkingPracticesSimulationProps> = ({ currentLanguage }) => {
  // Mode selection: 'boundaries' | 'hierarchy' | 'ptw'
  const [activeTab, setActiveTab] = useState<'boundaries' | 'hierarchy' | 'ptw'>('boundaries');

  // Boundaries simulator state
  const [systemVoltageKv, setSystemVoltageKv] = useState<number>(0.415); // kV
  const [faultCurrentKa, setFaultCurrentKa] = useState<number>(20); // kA
  const [clearingTimeSec, setClearingTimeSec] = useState<number>(0.1); // s

  // Hierarchy of controls state
  const [selectedControl, setSelectedControl] = useState<number>(1); // 1 = Elimination to 5 = PPE

  // PTW checklist state
  const [ptwSteps, setPtwSteps] = useState({
    isolation: false,
    loto: false,
    testedDead: false,
    grounded: false,
    briefing: false
  });

  // Calculate NFPA 70E boundary estimations:
  // Arc flash boundary distance (Lee formula approx in inches and converted to meters)
  // D_B = sqrt(2.655e4 * V_kV * I_kA * t_s) in inches
  const productTerm = 26550 * systemVoltageKv * faultCurrentKa * clearingTimeSec;
  const afbInches = Math.round(Math.sqrt(Math.max(1, productTerm)));
  const afbMeters = Math.round((afbInches * 0.0254) * 100) / 100;

  // NFPA 70E Limited Approach Boundary (LAB) for movable/fixed exposed conductor
  let labMeters = 1.0;
  let rabMeters = 0.3;
  if (systemVoltageKv <= 0.05) {
    labMeters = 0.0;
    rabMeters = 0.0;
  } else if (systemVoltageKv <= 0.75) {
    labMeters = 1.0; // 3 ft 6 in
    rabMeters = 0.3; // 1 ft
  } else if (systemVoltageKv <= 15) {
    labMeters = 1.5; // 5 ft
    rabMeters = 0.7; // 2 ft 2 in
  } else if (systemVoltageKv <= 36) {
    labMeters = 1.8; // 6 ft
    rabMeters = 0.8;
  } else {
    labMeters = 3.0;
    rabMeters = 1.5;
  }

  const ptwAllApproved = ptwSteps.isolation && ptwSteps.loto && ptwSteps.testedDead && ptwSteps.grounded && ptwSteps.briefing;

  const controlDetails = [
    {
      level: 1,
      name: { en: 'Elimination (Level 1)', hi: 'उन्मूलन (स्तर 1)', bn: 'নির্মূল বা অপসারণ (স্তর ১)' },
      riskReduction: '100%',
      desc: {
        en: 'De-energize the circuit completely, verify zero voltage, and lock out. The hazard no longer exists.',
        hi: 'सर्किट को पूरी तरह बंद करें, शून्य वोल्टेज जांचें और ताला लगाएं। खतरा पूरी तरह समाप्त हो जाता है।',
        bn: 'সার্কিট সম্পূর্ণ বিচ্ছিন্ন করে শূন্য ভোল্টেজ যাচাই ও লকআউট করা। বিপদ পুরোপুরি নিশ্চিহ্ন।'
      },
      color: 'text-emerald-400',
      bg: 'bg-emerald-950/40',
      border: 'border-emerald-500/50'
    },
    {
      level: 2,
      name: { en: 'Substitution (Level 2)', hi: 'प्रतिस्थापन (स्तर 2)', bn: 'প্রতিস্থাপন (স্তর ২)' },
      riskReduction: '85%',
      desc: {
        en: 'Replace hazardous 230 V AC control circuits with 24 V DC Safety Extra Low Voltage (SELV).',
        hi: 'खतरनाक 230 V नियंत्रण तारों को सुरक्षित 24 V DC (SELV) से बदलें।',
        bn: 'ঝুঁকিপূর্ণ ২৩০ V কন্ট্রোল লাইনের বদলে নিরাপদ ২৪ V ডিসি (SELV) ব্যবহার করা।'
      },
      color: 'text-teal-400',
      bg: 'bg-teal-950/40',
      border: 'border-teal-500/50'
    },
    {
      level: 3,
      name: { en: 'Engineering Controls (Level 3)', hi: 'इंजीनियरिंग नियंत्रण (स्तर 3)', bn: 'ইঞ্জিনিয়ারিং নিয়ন্ত্রণ (স্তর ৩)' },
      riskReduction: '70%',
      desc: {
        en: 'Install touch-safe IP2X shrouds, door-interlock switches, and ultra-fast optical arc-flash relays (< 10 ms).',
        hi: 'टच-सेफ IP2X कवर, इंटरलॉकिंग दरवाजे और अल्ट्रा-फास्ट ऑप्टिकल आर्क रिले (< 10 ms) लगाएं।',
        bn: 'স্পর্শ-সুরক্ষিত IP2X কভার, ইন্টারলকিং ডোর সুইচ এবং অতিদ্রুত অপটিক্যাল আর্ক ডিটেকশন রিলে স্থাপন।'
      },
      color: 'text-amber-400',
      bg: 'bg-amber-950/40',
      border: 'border-amber-500/50'
    },
    {
      level: 4,
      name: { en: 'Administrative Controls (Level 4)', hi: 'प्रशासनिक नियंत्रण (स्तर 4)', bn: 'প্রশাসনিক নিয়ন্ত্রণ (স্তর ৪)' },
      riskReduction: '45%',
      desc: {
        en: 'Mandate formal Permit to Work (PTW), Job Hazard Analysis (JHA), One-Hand Rule, and Buddy System.',
        hi: 'परमिट टू वर्क (PTW), खतरा विश्लेषण (JHA), एक-हाथ का नियम और बडी सिस्टम अनिवार्य करें।',
        bn: 'পারমিট টু ওয়ার্ক (PTW), কাজের ঝুঁকি বিশ্লেষণ (JHA), এক-হাত নিয়ম এবং উদ্ধারকারী সঙ্গী নিশ্চিতকরণ।'
      },
      color: 'text-orange-400',
      bg: 'bg-orange-950/40',
      border: 'border-orange-500/50'
    },
    {
      level: 5,
      name: { en: 'Personal Protective Equipment (Level 5)', hi: 'व्यक्तिगत सुरक्षा उपकरण (स्तर 5)', bn: 'ব্যক্তিগত সুরক্ষাসামগ্রী (স্তর ৫)' },
      riskReduction: '20%',
      desc: {
        en: 'Arc flash suit, rubber insulating gloves with leather protectors. Last line of defense; does not eliminate hazard.',
        hi: 'आर्क सूट और इंसुलेटेड दस्ताने। सुरक्षा की अंतिम ढाल; यह खतरे को नहीं मिटाता।',
        bn: 'আর্ক ফ্ল্যাশ স্যুট ও ইনসুলেটেড গ্লাভস। সুরক্ষার শেষ প্রতিরক্ষা; এটি বিপদ দূর করে না কেবল আঘাতের তীব্রতা কমায়।'
      },
      color: 'text-rose-400',
      bg: 'bg-rose-950/40',
      border: 'border-rose-500/50'
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">
              {currentLanguage === 'hi' ? 'सुरक्षित कार्य अभ्यास एवं दूरी सिम्युलेटर' : currentLanguage === 'bn' ? 'নিরাপদ কাজের নিয়মাবলী ও দূরত্ব সিমুলেটর' : 'Safe Working Practices & Boundary Simulator'}
            </h3>
            <p className="text-xs text-slate-400">
              {currentLanguage === 'hi' ? 'NFPA 70E सुरक्षा सीमाएं, नियंत्रण पदानुक्रम एवं परमिट-टू-वर्क सिस्टम' : currentLanguage === 'bn' ? 'NFPA 70E নিরাপদ দূরত্বের সীমানা, স্তরবিন্যাস ও পারমিট-টু-ওয়ার্ক যাচাইকরণ' : 'NFPA 70E approach boundaries, hierarchy of controls, and PTW verification'}
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setActiveTab('boundaries')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'boundaries' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            {currentLanguage === 'hi' ? 'दूरी सीमाएँ (Boundaries)' : currentLanguage === 'bn' ? 'দূরত্ব সীমানা' : 'NFPA 70E Boundaries'}
          </button>
          <button
            onClick={() => setActiveTab('hierarchy')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'hierarchy' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            {currentLanguage === 'hi' ? 'नियंत्रण पदानुक्रम' : currentLanguage === 'bn' ? 'সুরক্ষার স্তরবিন্যাস' : 'Hierarchy of Controls'}
          </button>
          <button
            onClick={() => setActiveTab('ptw')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'ptw' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            {currentLanguage === 'hi' ? 'परमिट टू वर्क (PTW)' : currentLanguage === 'bn' ? 'পারমিট টু ওয়ার্ক' : 'Permit to Work (PTW)'}
          </button>
        </div>
      </div>

      {/* Tab 1: Boundaries Simulator */}
      {activeTab === 'boundaries' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
              <label className="text-xs font-medium text-slate-300 block mb-1">
                {currentLanguage === 'hi' ? 'सिस्टम वोल्टेज (kV)' : currentLanguage === 'bn' ? 'লাইন ভোল্টেজ (kV)' : 'System Voltage (kV)'}
              </label>
              <div className="flex items-center justify-between text-sm font-semibold text-indigo-400 mb-2">
                <span>{systemVoltageKv} kV ({Math.round(systemVoltageKv * 1000)} V)</span>
              </div>
              <input
                type="range"
                min="0.23"
                max="33"
                step="0.05"
                value={systemVoltageKv}
                onChange={(e) => setSystemVoltageKv(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>0.23 kV (230V)</span>
                <span>11 kV</span>
                <span>33 kV</span>
              </div>
            </div>

            <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
              <label className="text-xs font-medium text-slate-300 block mb-1">
                {currentLanguage === 'hi' ? 'फॉल्ट करंट (kA)' : currentLanguage === 'bn' ? 'ফল্ট কারেন্ট (kA)' : 'Bolted Fault Current (kA)'}
              </label>
              <div className="flex items-center justify-between text-sm font-semibold text-amber-400 mb-2">
                <span>{faultCurrentKa} kA</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={faultCurrentKa}
                onChange={(e) => setFaultCurrentKa(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>5 kA</span>
                <span>25 kA</span>
                <span>50 kA</span>
              </div>
            </div>

            <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
              <label className="text-xs font-medium text-slate-300 block mb-1">
                {currentLanguage === 'hi' ? 'आर्क कटिंग समय (सेकंड)' : currentLanguage === 'bn' ? 'ব্রেকার ট্রিপের সময় (s)' : 'Clearing Time (seconds)'}
              </label>
              <div className="flex items-center justify-between text-sm font-semibold text-rose-400 mb-2">
                <span>{clearingTimeSec} s ({Math.round(clearingTimeSec * 1000)} ms)</span>
              </div>
              <input
                type="range"
                min="0.03"
                max="0.5"
                step="0.01"
                value={clearingTimeSec}
                onChange={(e) => setClearingTimeSec(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>0.03s (Fast Relay)</span>
                <span>0.2s</span>
                <span>0.5s (Slow)</span>
              </div>
            </div>
          </div>

          {/* Visual Boundary Display */}
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col items-center">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4 text-center">
              {currentLanguage === 'hi' ? 'NFPA 70E दृष्टिकोण सीमाएं (Approach Boundaries Visualization)' : currentLanguage === 'bn' ? 'NFPA 70E নিরাপদ দূরত্বের বাস্তব রূপ' : 'NFPA 70E Approach Boundaries Concentric Zones'}
            </h4>

            {/* Concentric Circle Map */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Arc Flash Boundary (Outer) */}
              <div
                className="absolute rounded-full border-2 border-dashed border-rose-500/70 bg-rose-950/20 flex items-start justify-center pt-2 transition-all duration-300"
                style={{ width: '100%', height: '100%' }}
              >
                <span className="text-[10px] font-bold text-rose-400 bg-slate-900/90 px-2 py-0.5 rounded border border-rose-500/40">
                  {currentLanguage === 'hi' ? `आर्क फ्लैश सीमा: ${afbMeters} m` : currentLanguage === 'bn' ? `আর্ক ফ্ল্যাশ সীমানা: ${afbMeters} m` : `Arc Flash Boundary: ${afbMeters} m (${afbInches}")`}
                </span>
              </div>

              {/* Limited Approach Boundary (Middle) */}
              <div
                className="absolute rounded-full border-2 border-amber-500/80 bg-amber-950/25 flex items-start justify-center pt-2 transition-all duration-300"
                style={{ width: '68%', height: '68%' }}
              >
                <span className="text-[10px] font-bold text-amber-300 bg-slate-900/90 px-2 py-0.5 rounded border border-amber-500/40">
                  {currentLanguage === 'hi' ? `लिमिटेड सीमा: ${labMeters} m` : currentLanguage === 'bn' ? `লিমিটেড বাউন্ডারি: ${labMeters} m` : `Limited Approach: ${labMeters} m`}
                </span>
              </div>

              {/* Restricted Approach Boundary (Inner) */}
              <div
                className="absolute rounded-full border-2 border-red-500 bg-red-950/40 flex items-start justify-center pt-2 transition-all duration-300"
                style={{ width: '38%', height: '38%' }}
              >
                <span className="text-[10px] font-bold text-red-300 bg-slate-900/90 px-1.5 py-0.5 rounded border border-red-500/40">
                  {currentLanguage === 'hi' ? `प्रतिबंधित: ${rabMeters} m` : currentLanguage === 'bn' ? `রেস্ট্রিক্টেড: ${rabMeters} m` : `Restricted: ${rabMeters} m`}
                </span>
              </div>

              {/* Conductor Center */}
              <div className="z-10 w-12 h-12 rounded-full bg-amber-500 text-slate-950 font-black flex flex-col items-center justify-center shadow-lg shadow-amber-500/50 animate-pulse text-[10px]">
                <span>BUS</span>
                <span className="text-[8px]">{Math.round(systemVoltageKv * 1000)}V</span>
              </div>
            </div>

            {/* Boundary explanation cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-5">
              <div className="bg-slate-900/90 p-3 rounded-lg border border-rose-500/30">
                <div className="text-xs font-bold text-rose-400 mb-1">
                  1. Arc Flash Boundary ({afbMeters} m)
                </div>
                <p className="text-[11px] text-slate-400">
                  {currentLanguage === 'hi' ? 'आपतित ऊर्जा 1.2 cal/cm² तक गिरती है। इसके अंदर सभी को प्रमाणित आर्क सूट पहनना अनिवार्य है।' : currentLanguage === 'bn' ? 'বিকিরিত তাপ ১.২ cal/cm² এ পৌঁছায়। এর ভেতরে প্রবেশকারী সকলের আর্ক স্যুট পরা বাধ্যতামূলক।' : 'Threshold where thermal blast drops to 1.2 cal/cm². Arc-rated PPE is mandatory inside.'}
                </p>
              </div>

              <div className="bg-slate-900/90 p-3 rounded-lg border border-amber-500/30">
                <div className="text-xs font-bold text-amber-300 mb-1">
                  2. Limited Approach ({labMeters} m)
                </div>
                <p className="text-[11px] text-slate-400">
                  {currentLanguage === 'hi' ? 'अप्रशिक्षित व्यक्तियों के प्रवेश की अंतिम रेखा। बिना अनुभवी एस्कॉर्ट के अंदर जाना प्रतिबंधित है।' : currentLanguage === 'bn' ? 'অনভিজ্ঞ ব্যক্তিদের জন্য শেষ সীমারেখা। দক্ষ প্রকৌশলীর সার্বক্ষণিক পাহারা ছাড়া প্রবেশ নিষিদ্ধ।' : 'Shock boundary for unqualified persons. Crossing requires continuous escort by qualified personnel.'}
                </p>
              </div>

              <div className="bg-slate-900/90 p-3 rounded-lg border border-red-500/30">
                <div className="text-xs font-bold text-red-400 mb-1">
                  3. Restricted Approach ({rabMeters} m)
                </div>
                <p className="text-[11px] text-slate-400">
                  {currentLanguage === 'hi' ? 'अत्यधिक झटका जोखिम। केवल प्रमाणित इलेक्ट्रीशियन रेटेड दस्ताने और 1000 V टूल्स के साथ प्रवेश कर सकते हैं।' : currentLanguage === 'bn' ? 'চরম শকের ঝুঁকি। কেবল সনদপ্রাপ্ত প্রকৌশলী উপযুক্ত ইনসুলেটিং গ্লাভস ও টুলস নিয়ে প্রবেশ করতে পারেন।' : 'Direct shock hazard. Only qualified electricians with rated insulating gloves and tools may cross.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Hierarchy of Controls */}
      {activeTab === 'hierarchy' && (
        <div className="space-y-4">
          <div className="text-xs text-slate-300 bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            {currentLanguage === 'hi'
              ? 'नियंत्रण के पदानुक्रम (ISO 45001) के अनुसार सुरक्षा उपायों का क्रम देखें। स्तर 1 सबसे प्रभावी है जबकि स्तर 5 (पीपीई) सबसे कम प्रभावी है।'
              : currentLanguage === 'bn'
              ? 'সুরক্ষার স্তরবিন্যাসে (ISO 45001) প্রতিটি ধাপ নির্বাচন করে তার কার্যকারিতা ও ঝুঁকি কমানোর শতকরা হার পর্যবেক্ষণ করুন।'
              : 'Select any level of the ISO 45001 Hierarchy of Controls to inspect its engineering effectiveness and risk reduction value.'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            {controlDetails.map((ctrl) => (
              <button
                key={ctrl.level}
                onClick={() => setSelectedControl(ctrl.level)}
                className={`p-3 rounded-lg text-left transition-all border ${selectedControl === ctrl.level ? `${ctrl.border} ${ctrl.bg} ring-2 ring-indigo-500/40` : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Level {ctrl.level}</span>
                  <span className={`text-xs font-bold ${ctrl.color}`}>{ctrl.riskReduction}</span>
                </div>
                <div className="text-xs font-semibold text-white truncate">
                  {ctrl.name[currentLanguage]}
                </div>
              </button>
            ))}
          </div>

          {/* Active Level Card */}
          {(() => {
            const active = controlDetails[selectedControl - 1];
            return (
              <div className={`p-5 rounded-xl border ${active.border} ${active.bg}`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`text-base font-bold ${active.color}`}>
                    {active.name[currentLanguage]}
                  </h4>
                  <span className="text-xs font-semibold bg-slate-900 px-3 py-1 rounded-full border border-slate-700 text-slate-200">
                    {currentLanguage === 'hi' ? `जोखिम में कमी: ${active.riskReduction}` : currentLanguage === 'bn' ? `ঝুঁকি হ্রাস: ${active.riskReduction}` : `Risk Reduction: ${active.riskReduction}`}
                  </span>
                </div>
                <p className="text-sm text-slate-200 leading-relaxed mb-4">
                  {active.desc[currentLanguage]}
                </p>
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <Info className="w-4 h-4 text-indigo-400" />
                  {selectedControl === 1 && (
                    <span>
                      {currentLanguage === 'hi' ? 'उन्मूलन नियम: काम शुरू करने से पहले सर्किट को हमेशा डी-एनर्जाइज और लॉक करें।' : currentLanguage === 'bn' ? 'নির্মূল নীতি: কাজ শুরুর আগে সর্বদা বিদ্যুৎ সম্পূর্ণ বিচ্ছিন্ন ও লকআউট করুন।' : 'Elimination rule: Always de-energize and lockout before applying tools.'}
                    </span>
                  )}
                  {selectedControl === 5 && (
                    <span>
                      {currentLanguage === 'hi' ? 'पीपीई नियम: पीपीई कभी भी खतरे को समाप्त नहीं करता; यह केवल विस्फोट होने पर जीवन बचाता है।' : currentLanguage === 'bn' ? 'পিপিই নীতি: ব্যক্তিগত সুরক্ষা সরঞ্জাম বিপদ দূর করে না; এটি কেবলমাত্র শেষ প্রতিরোধ।' : 'PPE principle: PPE never stops or removes an explosion; it is strictly a damage-mitigation shield.'}
                    </span>
                  )}
                  {selectedControl > 1 && selectedControl < 5 && (
                    <span>
                      {currentLanguage === 'hi' ? 'इंजीनियरिंग और प्रशासनिक नियंत्रण इंसानी गलतियों से होने वाले जोखिम को भारी मात्रा में घटाते हैं।' : currentLanguage === 'bn' ? 'ইঞ্জিনিয়ারিং ও প্রশাসনিক নিয়ন্ত্রণ মানুষের ভুলের ঝুঁকি উল্লেখযোগ্য হারে কমায়।' : 'Intermediate layers eliminate or isolate the live hazard prior to manual contact.'}
                    </span>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Tab 3: Permit to Work Checklist */}
      {activeTab === 'ptw' && (
        <div className="space-y-4">
          <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700 text-xs text-slate-300">
            {currentLanguage === 'hi'
              ? 'परमिट टू वर्क (PTW) एक कानूनी अनुबंध है। पैनल खोलने से पहले सभी 5 सुरक्षा शर्तों की पुष्टि करें:'
              : currentLanguage === 'bn'
              ? 'পারমিট টু ওয়ার্ক (PTW) একটি আইনগত নিরাপত্তা চুক্তি। কাজ শুরুর পূর্বে ৫টি বাধ্যতামূলক শর্ত নিশ্চিত করুন:'
              : 'The Permit to Work (PTW) is a statutory safety contract. Verify all 5 safety requirements to authorize work:'}
          </div>

          <div className="space-y-2">
            {[
              {
                key: 'isolation' as const,
                title: { en: '1. Upstream Isolation Disconnected', hi: '1. अपस्ट्रीम आइसोलेशन डिस्कनेक्ट किया गया', bn: '১. আপস্ট্রিম আইসোলেটর বা ব্রেকার বন্ধ করা হয়েছে' },
                desc: { en: 'Air circuit breaker racked out or MCC switch visibly isolated.', hi: 'सर्किट ब्रेकर रैक-आउट या स्विच साफ अलग किया गया।', bn: 'সার্কিট ব্রেকার র্যাক-আউট করে সম্পূর্ণ বিচ্ছিন্ন করা।' }
              },
              {
                key: 'loto' as const,
                title: { en: '2. Lockout / Tagout (LOTO) Padlocks Applied', hi: '2. LOTO ताले और खतरे के टैग लगाए गए', bn: '২. লকআউট/ট্যাগআউট (LOTO) তালা ও ট্যাগ লাগানো হয়েছে' },
                desc: { en: 'Red safety padlocks attached to switch handle with unique keys held by workers.', hi: 'स्विच हैंडल पर व्यक्तिगत ताले लगाए गए जिनकी चाबी केवल काम करने वाले के पास है।', bn: 'সুইচ হ্যান্ডেলে সেফটি প্যাডলক লাগানো এবং চাবি কর্মীর কাছে সংরক্ষিত।' }
              },
              {
                key: 'testedDead' as const,
                title: { en: '3. Tested Dead with Certified Voltmeter (Live-Dead-Live)', hi: '3. प्रमाणित मीटर से शून्य वोल्टेज की पुष्टि (Live-Dead-Live)', bn: '৩. লাইভ-ডেড-লাইভ পদ্ধতিতে শূন্য ভোল্টেজ যাচাই সম্পন্ন' }
              },
              {
                key: 'grounded' as const,
                title: { en: '4. Portable Earthing Leads Clamped', hi: '4. पोर्टेबल अर्थिंग क्लैंप लगाए गए', bn: '৪. পোর্টেবল আর্থিং রড দিয়ে ফেজ কন্ডাক্টর গ্রাউন্ডেড' }
              },
              {
                key: 'briefing' as const,
                title: { en: '5. Toolbox Talk (TBT) Briefing & Standby Buddy Assigned', hi: '5. टूलबॉक्स टॉक (TBT) सुरक्षा ब्रीफिंग एवं बडी नियुक्त', bn: '৫. প্রি-জব সেফটি ব্রিফিং এবং রেস্কিউ হুকধারী সহকারী নিযুক্ত' }
              }
            ].map((step) => (
              <label
                key={step.key}
                className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition ${ptwSteps[step.key] ? 'bg-indigo-950/40 border-indigo-500/60 text-white' : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800'}`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={ptwSteps[step.key]}
                    onChange={(e) => setPtwSteps({ ...ptwSteps, [step.key]: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-600 bg-slate-900"
                  />
                  <span className="text-xs font-semibold text-slate-200">
                    {step.title[currentLanguage]}
                  </span>
                </div>
                {ptwSteps[step.key] ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Lock className="w-4 h-4 text-slate-600" />
                )}
              </label>
            ))}
          </div>

          {/* Authorization Status */}
          <div className={`p-4 rounded-xl border flex items-center justify-between transition-all ${ptwAllApproved ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200' : 'bg-rose-950/40 border-rose-500/60 text-rose-200'}`}>
            <div className="flex items-center gap-3">
              {ptwAllApproved ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              ) : (
                <AlertTriangle className="w-6 h-6 text-rose-400 shrink-0" />
              )}
              <div>
                <div className="font-bold text-sm">
                  {ptwAllApproved
                    ? (currentLanguage === 'hi' ? 'परमिट स्वीकृत: काम शुरू करने की अनुमति है' : currentLanguage === 'bn' ? 'পারমিট অনুমোদিত: কাজ শুরুর ছাড়পত্র প্রদান করা হলো' : 'PERMIT AUTHORIZED: Safe to Proceed with Work')
                    : (currentLanguage === 'hi' ? 'परमिट अस्वीकृत: काम शुरू करना गैरकानूनी और जानलेवा है' : currentLanguage === 'bn' ? 'পারমিট অমীমাংসিত: কাজ শুরু করা আইনত দণ্ডনীয় ও ঝুঁকিপূর্ণ' : 'PERMIT BLOCKED: Work Strictly Prohibited')}
                </div>
                <div className="text-xs opacity-80">
                  {ptwAllApproved
                    ? (currentLanguage === 'hi' ? 'सभी 5 सुरक्षा नियम प्रमाणित किए गए हैं। पैनल शून्य वोल्टेज पर है।' : currentLanguage === 'bn' ? 'সকল ৫টি সুরক্ষা শর্ত যাচাই করা হয়েছে। লাইন সম্পূর্ণ নিরাপদ।' : 'All 5 statutory isolation checkpoints verified. De-energization complete.')
                    : (currentLanguage === 'hi' ? 'जब तक सभी 5 चेकबॉक्स टिक न हों, कोई भी टूल पैनल को नहीं छू सकता।' : currentLanguage === 'bn' ? 'সকল শর্ত পূরণ না হওয়া পর্যন্ত প্যানেল স্পর্শ করা সম্পূর্ণ নিষিদ্ধ।' : 'Must check off all 5 safety requirements to certify permit.')}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
