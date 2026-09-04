import React, { useState, useEffect, useRef } from 'react';
import { Heart, Zap, AlertTriangle, CheckCircle2, ShieldAlert, Activity, RefreshCw, Volume2 } from 'lucide-react';
import { Language } from '../../types';

interface FirstResponseAccidentSimulationProps {
  currentLanguage: Language;
}

export const FirstResponseAccidentSimulation: React.FC<FirstResponseAccidentSimulationProps> = ({ currentLanguage }) => {
  const [activeTab, setActiveTab] = useState<'separation' | 'steppotential' | 'cpr'>('separation');

  // Module 1: Separation scenario
  const [separationChoice, setSeparationChoice] = useState<string | null>(null);

  // Module 2: Step potential simulator
  const [soilResistivity, setSoilResistivity] = useState<number>(100); // Ω·m
  const [faultCurrent, setFaultCurrent] = useState<number>(400); // Amps
  const [distanceMeters, setDistanceMeters] = useState<number>(2.5); // meters from fallen wire
  const [strideMode, setStrideMode] = useState<'walk' | 'shuffle'>('walk');

  // Module 3: CPR & AED simulator
  const [compressionsCount, setCompressionsCount] = useState<number>(0);
  const [cprState, setCprState] = useState<'idle' | 'compressing' | 'aed_analyzing' | 'shock_delivered' | 'recovered'>('idle');
  const [cprStartTime, setCprStartTime] = useState<number | null>(null);
  const [compressionTimestamps, setCompressionTimestamps] = useState<number[]>([]);
  const [currentBpm, setCurrentBpm] = useState<number>(0);

  // Step potential calculation:
  // V_step = (rho * I / (2 * pi)) * (1/r - 1/(r + s))
  const strideDistance = strideMode === 'walk' ? 0.8 : 0.0;
  const factor = (soilResistivity * faultCurrent) / (2 * Math.PI);
  let stepVoltage = 0;
  if (strideDistance > 0) {
    stepVoltage = Math.round(factor * (1 / distanceMeters - 1 / (distanceMeters + strideDistance)));
  } else {
    stepVoltage = 0;
  }

  // Handle compression clicks
  const handleChestCompression = () => {
    const now = Date.now();
    if (cprState === 'idle') {
      setCprState('compressing');
      setCprStartTime(now);
    }

    setCompressionsCount((prev) => prev + 1);
    const updated = [...compressionTimestamps.slice(-5), now];
    setCompressionTimestamps(updated);

    if (updated.length >= 2) {
      const timeDiffSec = (updated[updated.length - 1] - updated[0]) / 1000;
      const count = updated.length - 1;
      const calculatedBpm = Math.round((count / timeDiffSec) * 60);
      setCurrentBpm(calculatedBpm);
    }
  };

  // Handle AED analysis and shock
  const handleDeployAed = () => {
    setCprState('aed_analyzing');
    setTimeout(() => {
      setCprState('shock_delivered');
      setTimeout(() => {
        setCprState('recovered');
      }, 1500);
    }, 2500);
  };

  const handleResetCpr = () => {
    setCompressionsCount(0);
    setCprState('idle');
    setCprStartTime(null);
    setCompressionTimestamps([]);
    setCurrentBpm(0);
  };

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">
              {currentLanguage === 'hi' ? 'विद्युत दुर्घटना आपातकालीन प्राथमिक प्रतिक्रिया सिम्युलेटर' : currentLanguage === 'bn' ? 'বৈদ্যুতিক দুর্ঘটনায় জরুরি উদ্ধার ও সিপিআর সিমুলেটর' : 'Electrical Accident First Response & CPR Simulator'}
            </h3>
            <p className="text-xs text-slate-400">
              {currentLanguage === 'hi' ? 'पीड़ित को अलग करना, स्टेप पोटेंशियल शफल एवं सीपीआर/AED जीवनरक्षक प्रशिक्षण' : currentLanguage === 'bn' ? 'ভুক্তভোগীকে আলাদা করা, স্টেপ পটেনশিয়াল নিষ্ক্রমণ এবং সিপিআর/AED জীবনরক্ষা' : 'Victim separation, step potential evasion, and CPR/AED resuscitation protocol'}
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setActiveTab('separation')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'separation' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            {currentLanguage === 'hi' ? 'पीड़ित को अलग करना' : currentLanguage === 'bn' ? 'উদ্ধার ও বিচ্ছিন্নকরণ' : '1. Victim Separation'}
          </button>
          <button
            onClick={() => setActiveTab('steppotential')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'steppotential' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            {currentLanguage === 'hi' ? 'स्टेप पोटेंशियल व शफल' : currentLanguage === 'bn' ? 'স্টেপ পটেনশিয়াল ও হাঁটার কৌশল' : '2. Step Potential Evacuation'}
          </button>
          <button
            onClick={() => setActiveTab('cpr')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'cpr' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            {currentLanguage === 'hi' ? 'सीपीआर एवं AED' : currentLanguage === 'bn' ? 'সিপিআর ও এইডি' : '3. CPR & AED Protocol'}
          </button>
        </div>
      </div>

      {/* Tab 1: Victim Separation Module */}
      {activeTab === 'separation' && (
        <div className="space-y-5">
          <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700 text-xs text-slate-300">
            <strong>{currentLanguage === 'hi' ? 'आपातकालीन परिदृश्य: ' : currentLanguage === 'bn' ? 'জরুরি পরিস্থিতি: ' : 'Emergency Scenario: '}</strong>
            {currentLanguage === 'hi'
              ? 'एक तकनीशियन 415 V लाइव बसबार से चिपक गया है और मांसपेशियां अकड़ जाने के कारण तार नहीं छोड़ पा रहा है। आप क्या करेंगे?'
              : currentLanguage === 'bn'
              ? 'একজন সহকর্মী ৪১৫ V সচল বাসের সাথে আটকে গেছেন এবং মাংসপেশির তীব্র সংকোচনের কারণে হাত সরাতে পারছেন না। আপনি কী পদক্ষেপ নেবেন?'
              : 'A coworker has come into contact with an energized 415 V busbar and is frozen by tetanic muscle contraction. Choose your immediate response action:'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                id: 'bare_hands',
                title: { en: 'A. Grab coworker bare-handed & pull', hi: 'A. नंगे हाथों से पकड़कर पीछे खींचें', bn: 'A. খালি হাতে জড়িয়ে ধরে টেনে আনুন' },
                isCorrect: false,
                desc: { en: 'Rushing in without tools to pull them free.', hi: 'बिना किसी टूल के सीधे हाथ से खींचना।', bn: 'কোনো সরঞ্জাম ছাড়া খালি হাতে স্পর্শ করা।' }
              },
              {
                id: 'water',
                title: { en: 'B. Throw bucket of water on panel', hi: 'B. पैनल पर पानी की बाल्टी फेंकें', bn: 'B. প্যানেলে এক বালতি জল ঢালুন' },
                isCorrect: false,
                desc: { en: 'Dousing the electrical panel with water to cool it.', hi: 'पैनल को ठंडा करने के लिए पानी डालना।', bn: 'আগুন নেভাতে প্যানেলে জল নিক্ষেপ।' }
              },
              {
                id: 'breaker',
                title: { en: 'C. Hit Main Circuit Breaker / E-Stop', hi: 'C. मुख्य ब्रेकर / इमरजेंसी स्टॉप बटन दबाएं', bn: 'C. মেইন সুইচ বা ইমার্জেন্সি স্টপ বন্ধ করুন' },
                isCorrect: true,
                desc: { en: 'Immediately de-energize the incoming electrical supply at the isolator.', hi: 'आइसोलेटर से बिजली की मुख्य सप्लाई तुरंत काटें।', bn: 'তাত্ক্ষণিকভাবে মূল বিদ্যুৎ সংযোগ বিচ্ছিন্ন করুন।' }
              },
              {
                id: 'rescue_hook',
                title: { en: 'D. Use Insulated Rescue Hook (Crook)', hi: 'D. इंसुलेटेड फाइबरग्लास रेस्क्यू हुक का उपयोग करें', bn: 'D. ইনসুলেটেড ফাইবারগ্লাস রেস্কিউ হুক ব্যবহার' },
                isCorrect: true,
                desc: { en: 'Hook around the victim’s waist/belt with dielectric pole.', hi: 'डाइइलेक्ट्रिक पोल से पीड़ित की कमर/बेल्ट को खींचें।', bn: 'ইনসুলেটেড দণ্ড দিয়ে কোমরের বেল্ট ধরে টানুন।' }
              }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setSeparationChoice(option.id)}
                className={`p-3.5 rounded-xl border text-left transition ${separationChoice === option.id ? 'border-rose-500 bg-slate-800 ring-2 ring-rose-500/40' : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'}`}
              >
                <div className="font-bold text-xs text-white mb-1">{option.title[currentLanguage]}</div>
                <div className="text-[11px] text-slate-400">{option.desc[currentLanguage]}</div>
              </button>
            ))}
          </div>

          {/* Separation Feedback Result */}
          {separationChoice && (
            <div className={`p-4 rounded-xl border transition-all ${separationChoice === 'bare_hands' || separationChoice === 'water' ? 'bg-rose-950/60 border-rose-500 text-rose-200' : 'bg-emerald-950/60 border-emerald-500 text-emerald-200'}`}>
              {separationChoice === 'bare_hands' && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-rose-400">
                    <AlertTriangle className="w-5 h-5" />
                    {currentLanguage === 'hi' ? 'घातक भूल! द्वितीयक करंट से बचाने वाला भी चिपक गया!' : currentLanguage === 'bn' ? 'মারাত্মক ভুল! উদ্ধারকারীও বিদ্যুৎস্পৃষ্ট হয়ে মারা গেলেন!' : 'FATAL ERROR! Rescuer Electrocuted!'}
                  </div>
                  <p className="text-xs">
                    {currentLanguage === 'hi'
                      ? 'पीड़ित के शरीर में करंट बह रहा था। नंगे हाथों से छूते ही आप भी सर्किट का हिस्सा बन गए और दोनों व्यक्तियों की जान चली गई! हमेशा पहले बिजली काटें।'
                      : currentLanguage === 'bn'
                      ? 'ভুক্তভোগীর দেহ বিদ্যুতায়িত ছিল। খালি হাতে ধরায় কারেন্ট সরাসরি উদ্ধারকারীর দেহে প্রবেশ করেছে এবং উভয় ব্যক্তি ঘটনাস্থলে প্রাণ হারিয়েছেন!'
                      : 'The victim is electrified! Touching them with bare hands completes a path to ground through YOUR heart, incapacitating you and creating two fatalities.'}
                  </p>
                </div>
              )}

              {separationChoice === 'water' && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-rose-400">
                    <AlertTriangle className="w-5 h-5" />
                    {currentLanguage === 'hi' ? 'भयानक विस्फोट और आग लग गई!' : currentLanguage === 'bn' ? 'ভয়াবহ বিস্ফোরণ ও শর্ট সার্কিট!' : 'CATASTROPHIC ARC FLASHOVER!'}
                  </div>
                  <p className="text-xs">
                    {currentLanguage === 'hi'
                      ? 'पानी बिजली का सुचालक है। पानी डालते ही भारी शॉर्ट सर्किट और आग का गोला बन गया, जिससे सभी लोग गंभीर रूप से झुलस गए!'
                      : currentLanguage === 'bn'
                      ? 'জল বিদ্যুৎ পরিবাহী। প্যানেলে জল ঢালায় তাৎক্ষণিক প্রচণ্ড বিস্ফোরণ ও শর্ট সার্কিট হয়ে উপস্থিত সকলে মারাত্মকভাবে পুড়ে গেলেন!'
                      : 'Tap water conducts electricity! Water stream caused an instant bolted phase-to-phase flashover and massive explosive arc blast.'}
                  </p>
                </div>
              )}

              {(separationChoice === 'breaker' || separationChoice === 'rescue_hook') && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-400">
                    <CheckCircle2 className="w-5 h-5" />
                    {currentLanguage === 'hi' ? 'सफल बचाव! पीड़ित को सुरक्षित अलग किया गया!' : currentLanguage === 'bn' ? 'সফল উদ্ধার! ভুক্তভোগীকে নিরাপদে মুক্ত করা হয়েছে!' : 'SUCCESSFUL RESCUE! Life-Saving Protocol Executed!'}
                  </div>
                  <p className="text-xs">
                    {currentLanguage === 'hi'
                      ? 'आपने अपनी जान को खतरे में डाले बिना बिजली काट दी / इंसुलेटेड हुक से पीड़ित को अलग किया। अब तुरंत सांस जांचें और आवश्यकता पड़ने पर सीपीआर शुरू करें!'
                      : currentLanguage === 'bn'
                      ? 'আপনি নিজের নিরাপত্তা বজায় রেখে সফলভাবে সংযোগ বিচ্ছিন্ন বা হুক প্রয়োগ করেছেন। অবিলম্বে শ্বাস পর্যবেক্ষণ করে সিপিআর ও অ্যাম্বুলেন্স নিশ্চিত করুন।'
                      : 'You followed standard life-saving engineering protocol! The circuit is dead or victim pulled free with dielectric insulation. Proceed immediately to DRSABCD check.'}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Step Potential & Evacuation Module */}
      {activeTab === 'steppotential' && (
        <div className="space-y-5">
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300">
            {currentLanguage === 'hi'
              ? 'जमीन पर गिरे हाई-वोल्टेज तार के पास जमीन में गोल छल्लों की तरह वोल्टेज फैलता है। सामान्य डग भरने से पैरों के बीच खतरनाक "स्टेप पोटेंशियल" बनता है। शफल तकनीक से यह शून्य हो जाता है:'
              : currentLanguage === 'bn'
              ? 'মাটিতে ছেঁড়া তার পড়লে মাটিতে বৃত্তাকার ভোল্টেজ ঢাল তৈরি হয়। পা ফাঁক করে হাঁটলে দুই পায়ের মাঝে মারাত্মক স্টেপ পটেনশিয়াল তৈরি হয়। পা ঘষে চলার কৌশল (Shuffle) এটি শূন্য করে দেয়:'
              : 'Concentric voltage gradients radiating from a grounded high-voltage wire create lethal Step Potential across separated feet. Switching to the safety shuffle eliminates it:'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700">
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                {currentLanguage === 'hi' ? 'मिट्टी की प्रतिरोधकता (ρ in Ω·m)' : currentLanguage === 'bn' ? 'মাটির আপেক্ষিক রোধ (Ω·m)' : 'Soil Resistivity (ρ in Ω·m)'}
              </label>
              <div className="text-xs font-bold text-amber-400 mb-2">{soilResistivity} Ω·m</div>
              <input
                type="range"
                min="30"
                max="500"
                step="10"
                value={soilResistivity}
                onChange={(e) => setSoilResistivity(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>30 (Wet Clay)</span>
                <span>100 (Damp)</span>
                <span>500 (Gravel)</span>
              </div>
            </div>

            <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700">
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                {currentLanguage === 'hi' ? 'फॉल्ट करंट (Amperes)' : currentLanguage === 'bn' ? 'ফল্ট কারেন্ট (A)' : 'Ground Fault Current (A)'}
              </label>
              <div className="text-xs font-bold text-rose-400 mb-2">{faultCurrent} A</div>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={faultCurrent}
                onChange={(e) => setFaultCurrent(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>100 A</span>
                <span>500 A</span>
                <span>1000 A</span>
              </div>
            </div>

            <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700">
              <label className="text-xs font-semibold text-slate-300 block mb-1">
                {currentLanguage === 'hi' ? 'तार से दूरी (मीटर)' : currentLanguage === 'bn' ? 'তার থেকে দূরত্ব (মিটার)' : 'Distance from Wire (meters)'}
              </label>
              <div className="text-xs font-bold text-indigo-400 mb-2">{distanceMeters} m</div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={distanceMeters}
                onChange={(e) => setDistanceMeters(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>1.0 m (Danger)</span>
                <span>5.0 m</span>
                <span>10 m (Safe)</span>
              </div>
            </div>
          </div>

          {/* Stride Mode Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-300">
                {currentLanguage === 'hi' ? 'चलने की तकनीक चुनें:' : currentLanguage === 'bn' ? 'হাঁটার পদ্ধতি নির্বাচন:' : 'Evacuation Stride Technique:'}
              </span>
              <div className="flex bg-slate-800 p-1 rounded-lg border border-slate-700">
                <button
                  onClick={() => setStrideMode('walk')}
                  className={`px-3 py-1 text-xs font-bold rounded transition ${strideMode === 'walk' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  {currentLanguage === 'hi' ? 'सामान्य डग (Stride = 0.8m)' : currentLanguage === 'bn' ? 'স্বাভাবিক পদক্ষেপ (০.৮ মি)' : 'Normal Walking (s = 0.8 m)'}
                </button>
                <button
                  onClick={() => setStrideMode('shuffle')}
                  className={`px-3 py-1 text-xs font-bold rounded transition ${strideMode === 'shuffle' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  {currentLanguage === 'hi' ? 'सेफ्टी शफल (Stride = 0m)' : currentLanguage === 'bn' ? 'সেফটি শফল (০ মি)' : 'Safety Shuffle (s = 0 m)'}
                </button>
              </div>
            </div>

            {/* Calculated Step Voltage Output */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">
                {currentLanguage === 'hi' ? 'पैरों के बीच वोल्टेज:' : currentLanguage === 'bn' ? 'দুই পায়ের মাঝে ভোল্টেজ:' : 'Step Potential (V_step):'}
              </span>
              <span className={`text-xl font-black px-3 py-1 rounded-lg border ${stepVoltage > 50 ? 'bg-rose-950 text-rose-400 border-rose-500 animate-pulse' : 'bg-emerald-950 text-emerald-400 border-emerald-500'}`}>
                {stepVoltage} Volts
              </span>
            </div>
          </div>

          <div className={`p-4 rounded-xl border text-xs ${stepVoltage > 50 ? 'bg-rose-950/40 border-rose-500/50 text-rose-200' : 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'}`}>
            {stepVoltage > 50 ? (
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <strong>{currentLanguage === 'hi' ? 'जानलेवा झटका! ' : currentLanguage === 'bn' ? 'প্রাণঘাতী বিপদ! ' : 'LETHAL STEP VOLTAGE HAZARD! '}</strong>
                  {currentLanguage === 'hi'
                    ? `आपके दोनों पैरों के बीच ${stepVoltage} V का वोल्टेज अंतर है! इससे पैरों और कमर के रास्ते जानलेवा करंट बहेगा और दिल की धड़कन रुक जाएगी। तुरंत पैरों को सटाकर शफल करें!`
                    : currentLanguage === 'bn'
                    ? `দুই পায়ের মাঝে ${stepVoltage} ভোল্টের মারাত্মক বিভব পার্থক্য তৈরি হয়েছে! এটি দেহ দিয়ে প্রাণঘাতী বিদ্যুৎ প্রবাহিত করবে। অবিলম্বে পা জোড়া লাগিয়ে শফল করুন!`
                    : `A voltage of ${stepVoltage} V bridges your legs! At body resistance of 1,000 Ω, this injects ${(stepVoltage / 1000).toFixed(1)} A through your pelvis, inducing fatal ventricular fibrillation. Switch to Safety Shuffle immediately!`}
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong>{currentLanguage === 'hi' ? 'पूर्णतः सुरक्षित! ' : currentLanguage === 'bn' ? 'সম্পূর্ণ নিরাপদ! ' : 'ZERO STEP POTENTIAL DIFFERENCE! '}</strong>
                  {currentLanguage === 'hi'
                    ? 'दोनों पैरों को आपस में सटाकर रखने से पैरों के बीच कोई वोल्टेज अंतर (0 V) नहीं बनता। जब तक आप 10 मीटर दूर न चले जाएं, पैर उठाए बिना घिसटते रहें।'
                    : currentLanguage === 'bn'
                    ? 'পা জোড়া রাখায় দুই পায়ের মাঝে কোনো বিভব পার্থক্য নেই (০ V)। কমপক্ষে ১০ মিটার দূরে না যাওয়া পর্যন্ত পা মাটি থেকে না তুলে জুতো ঘষে চলুন।'
                    : 'Because feet are held tightly together without stride spacing (s = 0), potential difference between contact points is 0 Volts! Continue shuffling until at least 10 meters (33 ft) away.'}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: CPR & AED Resuscitation Trainer */}
      {activeTab === 'cpr' && (
        <div className="space-y-5">
          <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700 text-xs text-slate-300">
            {currentLanguage === 'hi'
              ? 'कार्डियक अरेस्ट प्रशिक्षण: बिजली के झटके से बेहोश व्यक्ति के लिए 100-120 प्रति मिनट की गति से सीने को दबाएं (30 कम्प्रेशन : 2 सांस)। फिर AED लगाकर शॉक दें:'
              : currentLanguage === 'bn'
              ? 'সিপিআর ও এইডি প্রশিক্ষণ: অজ্ঞান ব্যক্তির বুকের মাঝখানে ১০০-১২০ গতিতে শক্তভাবে চাপ দিন (৩০ চাপ : ২ শ্বাস)। এরপর এইডি মেশিন চালু করে বিদ্যুৎ শক দিন:'
              : 'CPR & AED Resuscitation Trainer: Deliver high-quality chest compressions at 100-120 bpm (30:2 ratio), then deploy the Automated External Defibrillator (AED):'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Compression Action Box */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-4">
              <div className="text-center">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                  {currentLanguage === 'hi' ? 'कम्प्रेशन काउंटर' : currentLanguage === 'bn' ? 'বুক চাপার গণনা' : 'Compression Counter'}
                </span>
                <div className="text-4xl font-black text-white">{compressionsCount}</div>
                <div className="text-xs text-indigo-400 font-semibold mt-1">
                  {currentBpm > 0 ? `${currentBpm} BPM (Target: 100-120 BPM)` : 'Press button to begin'}
                </div>
              </div>

              {/* Push Button */}
              <button
                onClick={handleChestCompression}
                disabled={cprState === 'aed_analyzing' || cprState === 'recovered'}
                className="w-36 h-36 rounded-full bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-black text-xs flex flex-col items-center justify-center gap-2 shadow-2xl shadow-rose-600/50 border-4 border-rose-400/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Heart className="w-8 h-8 animate-pulse" />
                <span>PUSH CHEST</span>
                <span className="text-[9px] font-normal opacity-80">5-6 cm Depth</span>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={handleResetCpr}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs rounded border border-slate-700 flex items-center gap-1.5 transition"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Reset
                </button>
              </div>
            </div>

            {/* AED & Cardiac Status Box */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-indigo-400" />
                    <span className="text-xs font-bold text-slate-200">
                      {currentLanguage === 'hi' ? 'ईसीजी हृदय ताल (Cardiac Rhythm)' : currentLanguage === 'bn' ? 'ইসিজি হৃৎস্পন্দন' : 'Cardiac Monitor (ECG)'}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${cprState === 'recovered' ? 'bg-emerald-950 text-emerald-400 border border-emerald-500' : 'bg-rose-950 text-rose-400 border border-rose-500'}`}>
                    {cprState === 'recovered' ? 'Normal Sinus Rhythm' : 'Ventricular Fibrillation (VF)'}
                  </span>
                </div>

                <div className="text-xs text-slate-400 space-y-2 mb-4">
                  <p>
                    {currentLanguage === 'hi'
                      ? 'बिजली के झटके ने दिल की ताल को वेंट्रिकुलर फिब्रिलेशन (VF) में डाल दिया है। रक्त पंप नहीं हो रहा है। सीपीआर मस्तिष्क को जीवित रखता है, जबकि AED दिल को पुनः व्यवस्थित करता है।'
                      : currentLanguage === 'bn'
                      ? 'ইলেকট্রিক শকের ফলে হৃদপিণ্ডে ভেন্ট্রিকুলার ফিব্রিলেশন (VF) ঘটেছে। রক্ত চলাচল বন্ধ। সিপিআর মস্তিষ্ক সচল রাখে এবং এইডি স্বাভাবিক স্পন্দন ফিরিয়ে আনে।'
                      : 'Electric shock has triggered Ventricular Fibrillation (VF). Compressions circulate oxygenated blood to the brain while defibrillation resets the heart.'}
                  </p>
                </div>
              </div>

              {/* AED Action Area */}
              <div className="space-y-3">
                {cprState !== 'recovered' ? (
                  <button
                    onClick={handleDeployAed}
                    disabled={compressionsCount < 5 || cprState === 'aed_analyzing'}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-lg shadow-amber-500/30 transition flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Zap className="w-4 h-4" />
                    {cprState === 'aed_analyzing'
                      ? (currentLanguage === 'hi' ? 'ताल का विश्लेषण जारी... दूर हटें!' : currentLanguage === 'bn' ? 'বিশ্লেষণ চলছে... স্পর্শ করবেন না!' : 'Analyzing Rhythm... Stand Clear!')
                      : (currentLanguage === 'hi' ? 'AED पैड लगाएं एवं शॉक दें' : currentLanguage === 'bn' ? 'এইডি প্যাড সংযুক্ত ও শক প্রয়োগ' : 'Deploy AED & Deliver Defibrillation Shock')}
                  </button>
                ) : (
                  <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-200 text-xs text-center font-bold flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    {currentLanguage === 'hi'
                      ? 'सफलतापूर्वक पुनर्जीवित! सामान्य नब्ज बहाल हो गई है!'
                      : currentLanguage === 'bn'
                      ? 'সফল পুনরুজ্জীবন! স্বাভাবিক হৃৎস্পন্দন ফিরে এসেছে!'
                      : 'RESUSCITATION SUCCESSFUL! Normal Sinus Rhythm Restored!'}
                  </div>
                )}
                {compressionsCount < 5 && cprState !== 'recovered' && (
                  <div className="text-[10px] text-slate-500 text-center">
                    {currentLanguage === 'hi' ? 'AED सक्षम करने के लिए कम से कम 5 कम्प्रेशन करें' : currentLanguage === 'bn' ? 'এইডি সক্রিয় করতে কমপক্ষে ৫ বার বুক চাপুন' : 'Deliver at least 5 chest compressions to unlock AED'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
