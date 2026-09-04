import React, { useState } from 'react';
import { ShieldCheck, AlertOctagon, Check, Wind, AlertTriangle, ShieldAlert, Award, FileText } from 'lucide-react';
import { Language } from '../../types';

interface BasicPPESimulationProps {
  currentLanguage: Language;
}

export const BasicPPESimulation: React.FC<BasicPPESimulationProps> = ({ currentLanguage }) => {
  const [activeTab, setActiveTab] = useState<'gloves' | 'airtest' | 'arcflash'>('gloves');

  // Glove Class selector
  const [gloveClass, setGloveClass] = useState<number>(0); // 00, 0, 1, 2, 3, 4

  // Air test state
  const [isInflated, setIsInflated] = useState<boolean>(false);
  const [hasPinhole, setHasPinhole] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<'idle' | 'pass' | 'fail'>('idle');

  // Arc flash energy calculator
  const [incidentEnergy, setIncidentEnergy] = useState<number>(7.5); // cal/cm²

  // Glove specifications table
  const gloveSpecs = [
    {
      classId: -1, // Class 00
      name: 'Class 00',
      tagColor: 'bg-amber-100 text-amber-900 border-amber-300',
      tagText: { en: 'Beige Tag', hi: 'बेज टैग', bn: 'বেইজ ট্যাগ' },
      maxAcVoltage: '500 V AC',
      maxDcVoltage: '750 V DC',
      proofTest: '2,500 V AC',
      leatherClearance: '13 mm (0.5 in)',
      recommendedFor: {
        en: '230 V single phase, control panels, residential service meters',
        hi: '230 V सिंगल फेज, कंट्रोल पैनल, आवासीय मीटर',
        bn: '২৩০ V সিঙ্গেল ফেজ, কন্ট্রোল প্যানেল, আবাসিক সার্ভিস মিটার'
      }
    },
    {
      classId: 0, // Class 0
      name: 'Class 0',
      tagColor: 'bg-red-600 text-white border-red-400',
      tagText: { en: 'Red Tag', hi: 'लाल टैग', bn: 'লাল ট্যাগ' },
      maxAcVoltage: '1,000 V AC',
      maxDcVoltage: '1,500 V DC',
      proofTest: '5,000 V AC',
      leatherClearance: '13 mm (0.5 in)',
      recommendedFor: {
        en: '415 V 3-phase industrial switchboards, motor control centers (MCC)',
        hi: '415 V थ्री-फेज औद्योगिक पैनल, मोटर कंट्रोल सेंटर (MCC)',
        bn: '৪১৫ V থ্রি-ফেজ শিল্প সুইচবোর্ড, মোটর কন্ট্রোল সেন্টার'
      }
    },
    {
      classId: 1, // Class 1
      name: 'Class 1',
      tagColor: 'bg-white text-slate-900 border-slate-300',
      tagText: { en: 'White Tag', hi: 'सफेद टैग', bn: 'সাদা ট্যাগ' },
      maxAcVoltage: '7,500 V AC',
      maxDcVoltage: '11,250 V DC',
      proofTest: '10,000 V AC',
      leatherClearance: '25 mm (1.0 in)',
      recommendedFor: {
        en: '3.3 kV & 6.6 kV industrial distribution motors and feeders',
        hi: '3.3 kV और 6.6 kV औद्योगिक मोटर और फीडर लाइनें',
        bn: '৩.৩ kV ও ৬.৬ kV শিল্প মোটর এবং অভ্যন্তরীণ বিদ্যুৎ পরিবাহী'
      }
    },
    {
      classId: 2, // Class 2
      name: 'Class 2',
      tagColor: 'bg-yellow-400 text-slate-950 border-yellow-500',
      tagText: { en: 'Yellow Tag', hi: 'पीला टैग', bn: 'হলুদ ট্যাগ' },
      maxAcVoltage: '17,000 V AC',
      maxDcVoltage: '25,500 V DC',
      proofTest: '20,000 V AC',
      leatherClearance: '51 mm (2.0 in)',
      recommendedFor: {
        en: '11 kV substations, distribution transformers, vacuum circuit breakers',
        hi: '11 kV सबस्टेशन, वितरण ट्रांसफार्मर, वैक्यूम सर्किट ब्रेकर',
        bn: '১১ kV সাবস্টেশন, ডিস্ট্রিবিউশন ট্রান্সফরমার ও ভ্যাকুয়াম ব্রেকার'
      }
    },
    {
      classId: 3, // Class 3
      name: 'Class 3',
      tagColor: 'bg-emerald-500 text-white border-emerald-400',
      tagText: { en: 'Green Tag', hi: 'हरा टैग', bn: 'সবুজ ট্যাগ' },
      maxAcVoltage: '26,500 V AC',
      maxDcVoltage: '39,750 V DC',
      proofTest: '30,000 V AC',
      leatherClearance: '76 mm (3.0 in)',
      recommendedFor: {
        en: '22 kV lines and industrial plant incoming substations',
        hi: '22 kV लाइनें और बड़े संयंत्रों के इनकमिंग सबस्टेशन',
        bn: '২২ kV লাইন ও বৃহৎ কারখানার ইনকামিং সুইচইয়ার্ড'
      }
    },
    {
      classId: 4, // Class 4
      name: 'Class 4',
      tagColor: 'bg-orange-500 text-white border-orange-400',
      tagText: { en: 'Orange Tag', hi: 'नारंगी टैग', bn: 'কমলা ট্যাগ' },
      maxAcVoltage: '36,000 V AC',
      maxDcVoltage: '54,000 V DC',
      proofTest: '40,000 V AC',
      leatherClearance: '102 mm (4.0 in)',
      recommendedFor: {
        en: '33 kV primary distribution lines, switchyards, and gantry bays',
        hi: '33 kV प्राथमिक वितरण लाइनें और स्विचयार्ड गैंट्री',
        bn: '৩৩ kV প্রাইমারি ডিস্ট্রিবিউশন গ্রিড ও সুইচইয়ার্ড বে'
      }
    }
  ];

  const selectedSpec = gloveSpecs.find((g) => g.classId === gloveClass) || gloveSpecs[1];

  // Perform air test
  const handlePerformAirTest = () => {
    setIsInflated(true);
    setTimeout(() => {
      if (hasPinhole) {
        setTestResult('fail');
      } else {
        setTestResult('pass');
      }
    }, 600);
  };

  // Determine Arc Flash Category based on incident energy
  let arcCategory = 1;
  let arcSuitType = 'Category 1';
  let arcColor = 'text-sky-400';
  let arcBorder = 'border-sky-500/50';
  let arcBg = 'bg-sky-950/30';
  let arcGearList: { en: string[]; hi: string[]; bn: string[] } = { en: [], hi: [], bn: [] };

  if (incidentEnergy <= 4.0) {
    arcCategory = 1;
    arcSuitType = 'Category 1 (Min 4 cal/cm²)';
    arcColor = 'text-sky-400';
    arcBorder = 'border-sky-500/50';
    arcBg = 'bg-sky-950/30';
    arcGearList = {
      en: ['Arc-rated long sleeve shirt and pants (min 4 cal/cm²)', 'Arc face shield or arc hood', 'Class E hard hat', 'Safety glasses with side shields', 'Leather footwear', 'Class 00/0 rubber gloves with leather protectors'],
      hi: ['आर्क-रेटेड लंबी आस्तीन की शर्ट और पैंट (न्यूनतम 4 cal/cm²)', 'आर्क फेस शील्ड', 'क्लास E हेलमेट', 'साइड शील्ड वाले सुरक्षा चश्मे', 'चमड़े के जूते', 'लेदर कवर सहित रबर के दस्ताने'],
      bn: ['আর্ক-রেটেড ফুলহাতা শার্ট ও প্যান্ট (ন্যূনতম ৪ cal/cm²)', 'আর্ক ফেস শিল্ড', 'ক্লাস E সেফটি হেলমেট', 'সুরক্ষা চশমা', 'চামড়ার জুতো', 'লেদার প্রোটেক্টরসহ রবার গ্লাভস']
    };
  } else if (incidentEnergy <= 8.0) {
    arcCategory = 2;
    arcSuitType = 'Category 2 (Min 8 cal/cm²)';
    arcColor = 'text-emerald-400';
    arcBorder = 'border-emerald-500/50';
    arcBg = 'bg-emerald-950/30';
    arcGearList = {
      en: ['Arc-rated coverall or shirt & pants (min 8 cal/cm²)', 'Arc-rated face shield with chin cup AND 8 cal balaclava (sock hood)', 'Class E 20kV hard hat', 'Hearing protection (ear canal inserts)', 'Heavy duty leather boots', 'Class 0 rubber gloves + leather protectors'],
      hi: ['आर्क-रेटेड कवरऑल (न्यूनतम 8 cal/cm²)', 'चिन कप वाली आर्क फेस शील्ड और 8 cal बालाक्लावा हुड', 'क्लास E 20kV हेलमेट', 'ईयर प्लग (कान की सुरक्षा)', 'मजबूत चमड़े के सेफ्टी जूते', 'क्लास 0 रबर दस्ताने + लेदर कवर'],
      bn: ['আর্ক কভারঅল বা পোশাক (ন্যূনতম ৮ cal/cm²)', 'চিবুক ঢাকা আর্ক শিল্ড এবং ৮ cal বালাক্লাভা হুড', 'ক্লাস E ২০ kV হেলমেট', 'কানের সুরক্ষামূলক প্লাগ', 'মজবুত চামড়ার বুট', 'ক্লাস ০ রবার গ্লাভস + লেদার প্রোটেক্টর']
    };
  } else if (incidentEnergy <= 25.0) {
    arcCategory = 3;
    arcSuitType = 'Category 3 (Min 25 cal/cm²)';
    arcColor = 'text-amber-400';
    arcBorder = 'border-amber-500/50';
    arcBg = 'bg-amber-950/30';
    arcGearList = {
      en: ['25 cal/cm² Arc Flash Suit jacket and bib overalls', 'Full 25 cal Arc Flash Hood with face window', 'Class E hard hat worn under hood', 'Hearing protection (earplugs)', 'ASTM F2413 EH dielectric footwear', 'Class 1/2 rubber gloves with leather protectors'],
      hi: ['25 cal/cm² आर्क फ्लैश सूट जैकेट और बिब पैंट', 'पूरा 25 cal आर्क फ्लैश हुड (विंडो सहित)', 'हुड के नीचे क्लास E हेलमेट', 'ईयर प्लग (ध्वनि सुरक्षा)', 'ASTM F2413 EH डाइइलेक्ट्रिक जूते', 'क्लास 1/2 रबर दस्ताने + लेदर कवर'],
      bn: ['২৫ cal/cm² আর্ক ফ্ল্যাশ স্যুট জ্যাকেট ও প্যান্ট', 'পূর্ণাঙ্গ ২৫ cal আর্ক ফ্ল্যাশ স্পেস-হুড', 'হুডের ভেতর পরা ক্লাস E হেলমেট', 'কানের সুরক্ষামূলক প্লাগ', 'ASTM F2413 EH ডাইইলেক্ট্রিক জুতো', 'ক্লাস ১/২ রবার গ্লাভস + লেদার কভার']
    };
  } else if (incidentEnergy <= 40.0) {
    arcCategory = 4;
    arcSuitType = 'Category 4 (Min 40 cal/cm²)';
    arcColor = 'text-orange-400';
    arcBorder = 'border-orange-500/50';
    arcBg = 'bg-orange-950/30';
    arcGearList = {
      en: ['Multi-layer 40 cal/cm² Arc Flash Suit', '40 cal/cm² Arc Flash Hood with fresh-air ventilation system', 'Class E hard hat and safety glasses inside hood', 'Heavy-duty hearing protectors', 'Dielectric overshoes and EH boots', 'Rated insulating rubber gloves with long leather gauntlets'],
      hi: ['मल्टी-लेयर 40 cal/cm² पूरा आर्क फ्लैश सूट', 'ताजा हवा वेंटिलेशन युक्त 40 cal हुड', 'हुड के अंदर क्लास E हेलमेट और चश्मा', 'कान के विशेष मफ', 'डाइइलेक्ट्रिक जूते', 'रेटेड रबर दस्ताने लंबे लेदर कवर के साथ'],
      bn: ['বহুস্তরীয় ৪০ cal/cm² আর্ক ফ্ল্যাশ স্পেস-স্যুট', 'তাজা বাতাস সরবরাহকারী ফ্যানযুক্ত ৪০ cal আর্ক হুড', 'হুডের ভেতর ক্লাস E হেলমেট ও চশমা', 'ভারী শব্দের সুরক্ষামূলক ইয়ারমাফ', 'ডাইইলেক্ট্রিক বুট', 'রেটেড ইনসুলেটিং গ্লাভস ও লম্বা চামড়ার কভার']
    };
  } else {
    arcCategory = 5;
    arcSuitType = 'DANGER: > 40 cal/cm² (NO PPE PERMITTED)';
    arcColor = 'text-rose-500';
    arcBorder = 'border-rose-500';
    arcBg = 'bg-rose-950/50';
    arcGearList = {
      en: ['ENERGIZED WORK STRICTLY FORBIDDEN BY NFPA 70E', 'Incident energy exceeds the physical rating of any commercial arc suit', 'Blast pressure wave (> 100 kPa) and shrapnel will cause fatal internal trauma', 'MANDATORY ACTION: De-energize and isolate upstream breaker before opening!'],
      hi: ['NFPA 70E द्वारा लाइव काम पूरी तरह प्रतिबंधित', 'ऊर्जा किसी भी व्यावसायिक सूट की क्षमता से अधिक है', 'विस्फोटक वायु दबाव (100 kPa) और उड़ते टुकड़े जान ले लेंगे', 'अनिवार्य कदम: पैनल खोलने से पहले अपस्ट्रीम ब्रेकर बंद करें!'],
      bn: ['NFPA 70E অনুসারে লাইন সচল রেখে কাজ সম্পূর্ণ নিষিদ্ধ', 'বিকিরিত শক্তি পৃথিবীর যেকোনো বাণিজ্যিক স্যুটের ধারণক্ষমতার অতীত', 'বিস্ফোরণ ও ভয়াবহ বায়ুচাপ (১০০ kPa) অভ্যন্তরীণ অঙ্গ ছিন্নভিন্ন করে দেবে', 'বাধ্যতামূলক পদক্ষেপ: প্যানেল খোলার আগে মেইন সুইচ অফ করুন!']
    };
  }

  return (
    <div className="bg-slate-900 border border-slate-700/80 rounded-xl p-5 text-slate-100 shadow-2xl my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">
              {currentLanguage === 'hi' ? 'विद्युत पीपीई चयन एवं वायु परीक्षण सिम्युलेटर' : currentLanguage === 'bn' ? 'বৈদ্যুতিক সুরক্ষাসামগ্রী (PPE) ও এয়ার টেস্ট সিমুলেটর' : 'Electrical PPE & Daily Air-Test Simulator'}
            </h3>
            <p className="text-xs text-slate-400">
              {currentLanguage === 'hi' ? 'ASTM D120 दस्ताने वर्ग, NFPA 70E आर्क फ्लैश श्रेणियाँ एवं दैनिक वायु परीक्षण' : currentLanguage === 'bn' ? 'ASTM D120 গ্লাভস শ্রেণি, NFPA 70E ক্যাটাগরি ও দৈনিক এয়ার টেস্ট' : 'ASTM D120 glove classes, NFPA 70E arc flash categories, and daily inspection'}
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => setActiveTab('gloves')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'gloves' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            {currentLanguage === 'hi' ? 'दस्ताने वर्ग (Glove Classes)' : currentLanguage === 'bn' ? 'গ্লাভস শ্রেণি' : 'Glove Classes (ASTM D120)'}
          </button>
          <button
            onClick={() => setActiveTab('airtest')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'airtest' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            {currentLanguage === 'hi' ? 'दैनिक एयर टेस्ट' : currentLanguage === 'bn' ? 'দৈনিক এয়ার টেস্ট' : 'Daily Air Test'}
          </button>
          <button
            onClick={() => setActiveTab('arcflash')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'arcflash' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            {currentLanguage === 'hi' ? 'आर्क फ्लैश सूट (NFPA 70E)' : currentLanguage === 'bn' ? 'আর্ক ফ্ল্যাশ স্যুট' : 'Arc Flash Suite (NFPA 70E)'}
          </button>
        </div>
      </div>

      {/* Tab 1: ASTM D120 Glove Classes */}
      {activeTab === 'gloves' && (
        <div className="space-y-5">
          <div className="text-xs text-slate-300 bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            {currentLanguage === 'hi'
              ? 'ASTM D120 / IEC 60903 के अनुसार इंसुलेटिंग रबर दस्ताने की क्लास चुनें। वोल्टेज रेटिंग, प्रूफ टेस्ट और चमड़े के कफ के बीच आवश्यक सुरक्षित अंतर देखें:'
              : currentLanguage === 'bn'
              ? 'ASTM D120 অনুসারে ইনসুলেটিং রবার গ্লাভসের শ্রেণি নির্বাচন করুন। ভোল্টেজ রেটিং এবং লেদার কভারের বাধ্যতামূলক ক্লিয়ারেন্স গ্যাপ পর্যবেক্ষণ করুন:'
              : 'Select an ASTM D120 / IEC 60903 voltage class to inspect dielectric ratings and mandatory leather protector clearance gap:'}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {gloveSpecs.map((spec) => (
              <button
                key={spec.name}
                onClick={() => setGloveClass(spec.classId)}
                className={`p-3 rounded-lg text-center transition border ${gloveClass === spec.classId ? 'bg-emerald-950/50 border-emerald-500 ring-2 ring-emerald-500/40 text-white' : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:bg-slate-800'}`}
              >
                <div className="text-xs font-bold mb-1 text-slate-200">{spec.name}</div>
                <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded border inline-block ${spec.tagColor}`}>
                  {spec.tagText[currentLanguage]}
                </div>
                <div className="text-[11px] font-semibold text-emerald-400 mt-2">
                  {spec.maxAcVoltage}
                </div>
              </button>
            ))}
          </div>

          {/* Glove Details Card */}
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-2.5 py-1 rounded border ${selectedSpec.tagColor}`}>
                  {selectedSpec.name} ({selectedSpec.tagText[currentLanguage]})
                </span>
                <span className="text-xs text-slate-400">
                  ASTM D120 / IEC 60903 Certified
                </span>
              </div>
              <div className="text-xs font-semibold text-emerald-400">
                {currentLanguage === 'hi' ? `प्रूफ टेस्ट: ${selectedSpec.proofTest}` : currentLanguage === 'bn' ? `প্রুফ টেস্ট: ${selectedSpec.proofTest}` : `Factory Proof Test: ${selectedSpec.proofTest}`}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-slate-900/90 p-3.5 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-semibold mb-1">
                  {currentLanguage === 'hi' ? 'अधिकतम AC वर्किंग वोल्टेज' : currentLanguage === 'bn' ? 'সর্বোচ্চ AC কাজের ভোল্টেজ' : 'Max Rated AC Voltage'}
                </div>
                <div className="text-lg font-bold text-emerald-400">{selectedSpec.maxAcVoltage}</div>
                <div className="text-[11px] text-slate-500 mt-1">DC: {selectedSpec.maxDcVoltage}</div>
              </div>

              <div className="bg-slate-900/90 p-3.5 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-semibold mb-1">
                  {currentLanguage === 'hi' ? 'लेदर प्रोटेक्टर कफ गैप (Clearance)' : currentLanguage === 'bn' ? 'লেদার কভারের ক্লিয়ারেন্স গ্যাপ' : 'Leather Cuff Clearance Gap'}
                </div>
                <div className="text-lg font-bold text-amber-400">{selectedSpec.leatherClearance}</div>
                <div className="text-[11px] text-slate-500 mt-1">
                  {currentLanguage === 'hi' ? 'चमड़े के ऊपर से करंट कूदने से रोकता है' : currentLanguage === 'bn' ? 'ফ্ল্যাশওভার প্রতিরোধে বাধ্যতামূলক' : 'Prevents electrical flashover across leather'}
                </div>
              </div>

              <div className="bg-slate-900/90 p-3.5 rounded-lg border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-semibold mb-1">
                  {currentLanguage === 'hi' ? 'लैब री-टेस्ट आवृत्ति' : currentLanguage === 'bn' ? 'ল্যাব রি-টেস্টের সময়কাল' : 'Mandatory Lab Re-Test Cycle'}
                </div>
                <div className="text-lg font-bold text-indigo-400">Every 6 Months</div>
                <div className="text-[11px] text-slate-500 mt-1">OSHA 1910.137 / ASTM F496</div>
              </div>
            </div>

            <div className="text-xs bg-slate-900/80 p-3 rounded-lg border border-slate-800">
              <span className="font-semibold text-slate-300">
                {currentLanguage === 'hi' ? 'अनुशंसित अनुप्रयोग: ' : currentLanguage === 'bn' ? 'প্রস্তাবিত প্রয়োগক্ষেত্র: ' : 'Recommended Application: '}
              </span>
              <span className="text-slate-400">{selectedSpec.recommendedFor[currentLanguage]}</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Daily Air Test Simulator */}
      {activeTab === 'airtest' && (
        <div className="space-y-5">
          <div className="text-xs text-slate-300 bg-slate-800/80 p-3 rounded-lg border border-slate-700">
            {currentLanguage === 'hi'
              ? 'दैनिक फील्ड एयर टेस्ट: काम शुरू करने से पहले कफ को रोल करके हवा भरें और सुनें कि कहीं से हवा तो नहीं निकल रही। सूक्ष्म छेद भी जानलेवा झटका दे सकता है!'
              : currentLanguage === 'bn'
              ? 'দৈনিক এয়ার টেস্ট: কাজের আগে গ্লাভসের কব্জি গুটিয়ে ভেতরে বাতাস আটকে রাখুন। একটি সূক্ষ্ম পিনহোলও মারাত্মক বিদ্যুৎস্পৃষ্টের কারণ হতে পারে!'
              : 'Daily Field Air Test: Roll the cuff tightly toward the fingers to pressurize the glove. Listen and check for micro-punctures before every shift!'}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Simulation controls */}
            <div className="space-y-4 bg-slate-800/60 p-4 rounded-xl border border-slate-700">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {currentLanguage === 'hi' ? 'परीक्षण नियंत्रण' : currentLanguage === 'bn' ? 'পরীক্ষা নিয়ন্ত্রণ' : 'Inspection Controls'}
              </h4>

              <div className="flex items-center justify-between p-3 bg-slate-900/80 rounded-lg border border-slate-700">
                <span className="text-xs text-slate-300 font-medium">
                  {currentLanguage === 'hi' ? 'दस्ताने में सूक्ष्म छिद्र (Pinhole) सिमुलेट करें:' : currentLanguage === 'bn' ? 'গ্লাভসে সূক্ষ্ম ছিদ্র (Pinhole) যুক্ত করুন:' : 'Simulate Microscopic Pinhole Flaw:'}
                </span>
                <button
                  onClick={() => {
                    setHasPinhole(!hasPinhole);
                    setTestResult('idle');
                    setIsInflated(false);
                  }}
                  className={`px-3 py-1 rounded text-xs font-bold transition ${hasPinhole ? 'bg-rose-600 text-white' : 'bg-slate-700 text-slate-300'}`}
                >
                  {hasPinhole ? 'Pinhole Present' : 'Intact Glove'}
                </button>
              </div>

              <button
                onClick={handlePerformAirTest}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                <Wind className="w-4 h-4" />
                {currentLanguage === 'hi' ? 'कफ रोल करें और हवा भरें (Inflate Glove)' : currentLanguage === 'bn' ? 'বাতাস ফুলিয়ে পরীক্ষা করুন (Inflate Glove)' : 'Roll Cuff & Trap Air (Inflate Glove)'}
              </button>

              <div className="text-[11px] text-slate-400 leading-relaxed">
                {currentLanguage === 'hi'
                  ? 'निर्देश: कफ को 3-4 बार मोड़ें। यदि दस्ताना फूलने के बाद कड़ा रहता है, तो वह ठीक है। यदि हवा रिसने की सीटी सुनाई दे, तो दस्ताने को तुरंत नष्ट कर दें।'
                  : currentLanguage === 'bn'
                  ? 'নির্দেশনা: কফ ৩-৪ বার পেঁচিয়ে বাতাস আটকান। বাতাস ধরে রাখলে গ্লাভস নিরাপদ; হিসহিস শব্দে বাতাস বের হলে তা সাথে সাথে বর্জনীয়।'
                  : 'OSHA Instruction: Roll cuff 3-4 times. If pressure holds tight, the glove passes. If any air leak or hiss is detected near the ear/cheek, destroy the glove immediately.'}
              </div>
            </div>

            {/* Visual feedback */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col items-center justify-center min-h-[220px]">
              {testResult === 'idle' && (
                <div className="text-center text-slate-500 space-y-2">
                  <Wind className="w-10 h-10 mx-auto opacity-40 animate-pulse" />
                  <p className="text-xs">
                    {currentLanguage === 'hi' ? 'एयर टेस्ट शुरू करने के लिए बटन दबाएं' : currentLanguage === 'bn' ? 'এয়ার টেস্ট শুরু করতে বোতামটি চাপুন' : 'Click the button above to pressurize the glove'}
                  </p>
                </div>
              )}

              {testResult === 'pass' && (
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/60 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-bold text-emerald-400">
                    {currentLanguage === 'hi' ? 'परीक्षण सफल: दस्ताना वायुरोधी है (PASSED)' : currentLanguage === 'bn' ? 'পরীক্ষা সফল: কোনো ছিদ্র নেই (PASSED)' : 'AIR TEST PASSED: Dielectric Membrane Sound'}
                  </div>
                  <p className="text-xs text-slate-400 max-w-xs">
                    {currentLanguage === 'hi' ? 'कोई रिसाव नहीं मिला। चमड़े के कवर के साथ काम करने के लिए सुरक्षित।' : currentLanguage === 'bn' ? 'কোনো বাতাস বের হয়নি। লেদার কভারসহ ব্যবহারে সম্পূর্ণ নিরাপদ।' : 'Glove holds pressure firmly with zero air escape. Ready for leather protectors.'}
                  </p>
                </div>
              )}

              {testResult === 'fail' && (
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-rose-950/60 border-2 border-rose-500 flex items-center justify-center mx-auto text-rose-500 animate-pulse">
                    <AlertOctagon className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-bold text-rose-400">
                    {currentLanguage === 'hi' ? 'परीक्षण विफल: सूक्ष्म रिसाव मिला (CONDEMNED!)' : currentLanguage === 'bn' ? 'পরীক্ষা ব্যর্থ: ছিদ্র দিয়ে বাতাস বের হচ্ছে (CONDEMNED!)' : 'AIR TEST FAILED: Microscopic Leak Detected!'}
                  </div>
                  <p className="text-xs text-rose-300 max-w-xs">
                    {currentLanguage === 'hi' ? 'दस्ताने में छेद है! इसे तुरंत काटें, नष्ट करें और फेंक दें। काम में न लाएं!' : currentLanguage === 'bn' ? 'গ্লাভসে ক্ষতিকর ছিদ্র আছে! এটি অবিলম্বে কেটে নষ্ট ও বর্জন করুন।' : 'Pinhole detected. Do NOT repair with tape. Must be immediately cut and destroyed.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: NFPA 70E Arc Flash Suite Matcher */}
      {activeTab === 'arcflash' && (
        <div className="space-y-5">
          <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-300">
                {currentLanguage === 'hi' ? 'पैनल में आपतित तापीय ऊर्जा (Incident Energy in cal/cm²)' : currentLanguage === 'bn' ? 'হিসাবকৃত বিকিরিত তাপ শক্তি (cal/cm²)' : 'Calculated Incident Thermal Energy (cal/cm²)'}
              </label>
              <span className="text-sm font-bold text-indigo-400">{incidentEnergy} cal/cm²</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              step="0.5"
              value={incidentEnergy}
              onChange={(e) => setIncidentEnergy(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>1 cal (Cat 1)</span>
              <span>8 cal (Cat 2)</span>
              <span>25 cal (Cat 3)</span>
              <span>40 cal (Cat 4)</span>
              <span className="text-rose-400">&gt;40 cal (Danger)</span>
            </div>
          </div>

          {/* Matched PPE Category Card */}
          <div className={`p-5 rounded-xl border ${arcBorder} ${arcBg} transition-all`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  {currentLanguage === 'hi' ? 'आवश्यक NFPA 70E श्रेणी' : currentLanguage === 'bn' ? 'প্রয়োজনীয় NFPA 70E শ্রেণি' : 'Required NFPA 70E Category'}
                </span>
                <h4 className={`text-base font-bold ${arcColor}`}>{arcSuitType}</h4>
              </div>
              <div className="text-xs font-semibold bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 text-slate-300">
                E = {incidentEnergy} cal/cm²
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                {currentLanguage === 'hi' ? 'अनिवार्य पीपीई किट चेकलिस्ट:' : currentLanguage === 'bn' ? 'বাধ্যতামূলক পিপিই সামগ্রীর তালিকা:' : 'Mandatory Protective Equipment Checklist:'}
              </div>
              {arcGearList[currentLanguage].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  {incidentEnergy <= 40 ? (
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {incidentEnergy > 40 && (
              <div className="mt-4 p-3 bg-rose-950/80 border border-rose-500/60 rounded-lg text-rose-200 text-xs">
                <strong>{currentLanguage === 'hi' ? 'महत्वपूर्ण चेतावनी: ' : currentLanguage === 'bn' ? 'সতর্কবার্তা: ' : 'Critical Warning: '}</strong>
                {currentLanguage === 'hi'
                  ? '40 cal/cm² से ऊपर कोई भी व्यावसायिक सूट नहीं बनाया जाता क्योंकि थर्मल ऊर्जा के साथ उत्पन्न भयानक शॉक वेव अंगों को तोड़ देती है। बिजली बंद किए बिना काम नहीं हो सकता!'
                  : currentLanguage === 'bn'
                  ? '৪০ cal/cm² এর বেশি তীব্রতার জন্য কোনো স্যুট নেই কারণ বিকিরিত তাপের সাথে সৃষ্ট প্রচণ্ড বায়বীয় ধাক্কা মানুষকে ছুড়ে ফেলে অঙ্গপ্রত্যঙ্গ ভেঙে দেয়। লাইন অফ করা বাধ্যতামূলক!'
                  : 'Arc flash blasts exceeding 40 cal/cm² produce fatal pressure sound waves (> 165 dB) and shrapnel that crush lungs regardless of fabric rating. Upstream de-energization is mandatory.'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
