import React, { useState } from 'react';
import { Layers, Check, Zap, Eye, CircuitBoard } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';

interface ElectricalSymbolsAnimationProps {
  currentLanguage: Language;
}

interface SymbolItem {
  id: string;
  name: { en: string; hi: string; bn: string };
  category: { en: string; hi: string; bn: string };
  functionDesc: { en: string; hi: string; bn: string };
  application: { en: string; hi: string; bn: string };
  svgPath: React.ReactNode;
}

const SYMBOLS_DATA: SymbolItem[] = [
  {
    id: 'cell',
    name: { en: 'Single Cell', hi: 'एकल सेल', bn: 'একক সেল' },
    category: { en: 'Energy Source', hi: 'ऊर्जा स्रोत', bn: 'শক্তি উৎস' },
    functionDesc: { en: 'Provides direct current (DC) electrical potential.', hi: 'दिशानिर्दिष्ट धारा (DC) विद्युत विभव प्रदान करता है।', bn: 'একমুখী প্রবাহ (DC) তড়িৎ বিভব প্রদান করে।' },
    application: { en: 'Flashlights, portable electronic instruments.', hi: 'टॉर्च, पोर्टेबल इलेक्ट्रॉनिक उपकरण।', bn: 'টর্চ, পোর্টেবল ইলেকট্রনিক যন্ত্র।' },
    svgPath: (
      <g stroke="#38bdf8" strokeWidth="2" fill="none">
        <line x1="10" y1="25" x2="35" y2="25" />
        <line x1="35" y1="10" x2="35" y2="40" strokeWidth="3" />
        <line x1="45" y1="18" x2="45" y2="32" strokeWidth="1.5" />
        <line x1="45" y1="25" x2="70" y2="25" />
        <text x="32" y="8" fill="#ef4444" fontSize="10" fontWeight="bold">+</text>
        <text x="47" y="8" fill="#3b82f6" fontSize="10" fontWeight="bold">-</text>
      </g>
    )
  },
  {
    id: 'battery',
    name: { en: 'DC Battery', hi: 'डीसी बैटरी', bn: 'ডিসি ব্যাটারি' },
    category: { en: 'Energy Source', hi: 'ऊर्जा स्रोत', bn: 'শক্তি উৎস' },
    functionDesc: { en: 'Combination of cells connected in series to provide higher DC voltage.', hi: 'उच्च DC वोल्टेज प्रदान करने के लिए श्रेणी में जुड़े सेलों का संयोजन।', bn: 'উচ্চতর DC ভোল্টেজ দিতে শ্রেণীতে যুক্ত সেলগুলোর সমবায়।' },
    application: { en: 'Automobiles, UPS backup, solar storage batteries.', hi: 'ऑटोमोबाइल, यूपीएस बैकअप, सोलर स्टोरेज बैटरी।', bn: 'গাড়ি, ইউপিএস ব্যাকআপ, সোলার স্টোরেজ ব্যাটারি।' },
    svgPath: (
      <g stroke="#38bdf8" strokeWidth="2" fill="none">
        <line x1="5" y1="25" x2="25" y2="25" />
        <line x1="25" y1="10" x2="25" y2="40" strokeWidth="3" />
        <line x1="33" y1="18" x2="33" y2="32" />
        <line x1="45" y1="10" x2="45" y2="40" strokeWidth="3" />
        <line x1="53" y1="18" x2="53" y2="32" />
        <line x1="53" y1="25" x2="75" y2="25" />
      </g>
    )
  },
  {
    id: 'resistor',
    name: { en: 'Fixed Resistor', hi: 'स्थिर प्रतिरोधक', bn: 'নির্দিষ্ট রোধ' },
    category: { en: 'Passive Component', hi: 'पैसिव घटक', bn: 'প্যাসিভ উপাদান' },
    functionDesc: { en: 'Limits electric current flow and drops voltage in circuits.', hi: 'विद्युत धारा के प्रवाह को सीमित करता है और वोल्टेज घटाता है।', bn: 'তড়িৎ প্রবাহ সীমিত করে এবং ভোল্টেজ হ্রাস করে।' },
    application: { en: 'Current limiting, bias networks, voltage dividers.', hi: 'धारा सीमित करना, बायस नेटवर्क, वोल्टेज डिवाइडर।', bn: 'কারেন্ট নিয়ন্ত্রণ, বায়াস নেটওয়ার্ক, ভোল্টেজ ডিভাইডার।' },
    svgPath: (
      <g stroke="#10b981" strokeWidth="2" fill="none">
        <line x1="5" y1="25" x2="20" y2="25" />
        <path d="M 20 25 L 25 15 L 33 35 L 41 15 L 49 35 L 57 15 L 62 25" />
        <line x1="62" y1="25" x2="75" y2="25" />
      </g>
    )
  },
  {
    id: 'switch',
    name: { en: 'SPST Switch', hi: 'SPST स्विच', bn: 'SPST সুইচ' },
    category: { en: 'Control Element', hi: 'नियंत्रण तत्व', bn: 'নিয়ন্ত্রণ উপাদান' },
    functionDesc: { en: 'Opens or closes an electrical circuit path.', hi: 'विद्युत परिपथ पथ को खोलता या बंद करता है।', bn: 'তড়িৎ সার্কিট সংযোগ খোলে বা বন্ধ করে।' },
    application: { en: 'Lighting switches, main power disconnects.', hi: 'लाइटिंग स्विच, मुख्य बिजली कट-ऑफ।', bn: 'লাইটিং সুইচ, মেইন পাওয়ার ডিসকানেক্ট।' },
    svgPath: (
      <g stroke="#f59e0b" strokeWidth="2" fill="none">
        <circle cx="20" cy="25" r="3" fill="#f59e0b" />
        <circle cx="60" cy="25" r="3" fill="#f59e0b" />
        <line x1="5" y1="25" x2="17" y2="25" />
        <line x1="20" y1="25" x2="55" y2="10" />
        <line x1="63" y1="25" x2="75" y2="25" />
      </g>
    )
  },
  {
    id: 'lamp',
    name: { en: 'Incandescent Lamp', hi: 'इंसांडिसेंट लैंप', bn: 'ইনক্যান্ডিসেন্ট ল্যাম্প' },
    category: { en: 'Load / Indicator', hi: 'लोड / संकेतक', bn: 'লোড / নির্দেশক' },
    functionDesc: { en: 'Converts electrical energy into visible light energy.', hi: 'विद्युत ऊर्जा को दृश्य प्रकाश ऊर्जा में परिवर्तित करता है।', bn: 'তড়িৎ শক্তিকে আলো শক্তিতে রূপান্তর করে।' },
    application: { en: 'Illumination, panel indicator lights.', hi: 'प्रकाश व्यवस्था, पैनल संकेतक लाइट।', bn: 'আলোকসজ্জা, প্যানেল ইন্ডিকেটর লাইট।' },
    svgPath: (
      <g stroke="#f59e0b" strokeWidth="2" fill="none">
        <line x1="5" y1="25" x2="25" y2="25" />
        <circle cx="40" cy="25" r="15" />
        <path d="M 30 15 L 50 35 M 30 35 L 50 15" />
        <line x1="55" y1="25" x2="75" y2="25" />
      </g>
    )
  },
  {
    id: 'motor',
    name: { en: 'DC Motor', hi: 'डीसी मोटर', bn: 'ডিসি মোটর' },
    category: { en: 'Electromechanical Load', hi: 'इलेक्ट्रोमैकेनिकल लोड', bn: 'ইলেক্ট্রোমেকানিক্যাল লোড' },
    functionDesc: { en: 'Converts electrical energy into rotating mechanical motion.', hi: 'विद्युत ऊर्जा को घूर्णन यांत्रिक गति में परिवर्तित करता है।', bn: 'তড়িৎ শক্তিকে ঘূর্ণন যান্ত্রিক গতিতে রূপান্তর করে।' },
    application: { en: 'Electric fans, pumps, electric vehicles, robotics.', hi: 'विद्युत पंखे, पंप, इलेक्ट्रिक वाहन, रोबोटिक्स।', bn: 'ইলেকট্রিক ফ্যান, পাম্প, ইলেকট্রিক গাড়ি, রোবোটিক্স।' },
    svgPath: (
      <g stroke="#38bdf8" strokeWidth="2" fill="none">
        <line x1="5" y1="25" x2="25" y2="25" />
        <circle cx="40" cy="25" r="15" />
        <text x="40" y="30" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold" stroke="none">M</text>
        <line x1="55" y1="25" x2="75" y2="25" />
      </g>
    )
  },
  {
    id: 'ammeter',
    name: { en: 'Ammeter', hi: 'अमीटर', bn: 'অ্যামিটার' },
    category: { en: 'Measuring Instrument', hi: 'मापन उपकरण', bn: 'পরিমাপক যন্ত্র' },
    functionDesc: { en: 'Measures electric current flowing in series through a branch.', hi: 'शाखा से श्रेणी में बहने वाली विद्युत धारा को मापता है।', bn: 'শ্রেণীতে যুক্ত হয়ে কারেন্ট পরিমাপ করে।' },
    application: { en: 'Panel meters, diagnostic equipment.', hi: 'पैनल मीटर, नैदानिक उपकरण।', bn: 'প্যানেল মিটার, ডায়াগনস্টিক সরঞ্জাম।' },
    svgPath: (
      <g stroke="#f59e0b" strokeWidth="2" fill="none">
        <line x1="5" y1="25" x2="25" y2="25" />
        <circle cx="40" cy="25" r="15" />
        <text x="40" y="30" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold" stroke="none">A</text>
        <line x1="55" y1="25" x2="75" y2="25" />
      </g>
    )
  },
  {
    id: 'voltmeter',
    name: { en: 'Voltmeter', hi: 'वोल्टमीटर', bn: 'ভোল্টমিটার' },
    category: { en: 'Measuring Instrument', hi: 'मापन उपकरण', bn: 'পরিমাপক যন্ত্র' },
    functionDesc: { en: 'Measures electrical potential difference connected in parallel.', hi: 'समांतर में जुड़कर विद्युत विभवांतर को मापता है।', bn: 'সমান্তরালে যুক্ত হয়ে ভোল্টেজ পরিমাপ করে।' },
    application: { en: 'Voltage monitors, battery testers.', hi: 'वोल्टेज मॉनिटर, बैटरी टेस्टर।', bn: 'ভোল্টেজ মনিটর, ব্যাটারি টেস্টার।' },
    svgPath: (
      <g stroke="#38bdf8" strokeWidth="2" fill="none">
        <line x1="5" y1="25" x2="25" y2="25" />
        <circle cx="40" cy="25" r="15" />
        <text x="40" y="30" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold" stroke="none">V</text>
        <line x1="55" y1="25" x2="75" y2="25" />
      </g>
    )
  },
  {
    id: 'ground',
    name: { en: 'Earth Ground', hi: 'अर्थ ग्राउंड', bn: 'আর্থ গ্রাউন্ড' },
    category: { en: 'Reference / Safety', hi: 'संदर्भ / सुरक्षा', bn: 'রেফারেন্স / সুরক্ষা' },
    functionDesc: { en: 'Provides zero-potential reference point and fault path.', hi: 'शून्य-विभव संदर्भ बिंदु और दोष पथ प्रदान करता है।', bn: 'শূন্য-বিভব রেফারেন্স বিন্দু ও ত্রুটি সুরক্ষা দেয়।' },
    application: { en: 'Chassis earthing, lightning protection.', hi: 'चेसिस अर्थिंग, तड़ित चालक।', bn: 'বডি আর্থিং, বজ্রপাত সুরক্ষা।' },
    svgPath: (
      <g stroke="#10b981" strokeWidth="2" fill="none">
        <line x1="40" y1="5" x2="40" y2="25" />
        <line x1="20" y1="25" x2="60" y2="25" strokeWidth="3" />
        <line x1="28" y1="33" x2="52" y2="33" strokeWidth="2" />
        <line x1="34" y1="41" x2="46" y2="41" strokeWidth="1.5" />
      </g>
    )
  },
  {
    id: 'fuse',
    name: { en: 'Safety Fuse', hi: 'सुरक्षा फ्यूज', bn: 'নিরাপত্তা ফিউজ' },
    category: { en: 'Protection Device', hi: 'सुरक्षा उपकरण', bn: 'সুরক্ষা ডিভাইস' },
    functionDesc: { en: 'Melts and disconnects circuit during overcurrent or short circuit.', hi: 'अत्यधिक धारा या शॉर्ट सर्किट के दौरान पिघलकर परिपथ को काटता है।', bn: 'অতিরিক্ত কারেন্ট বা শর্ট সার্কিটে গলে সার্কিট বিচ্ছিন্ন করে।' },
    application: { en: 'Distribution boards, domestic appliances.', hi: 'वितरण बोर्ड, घरेलू उपकरण।', bn: 'ডিস্ট্রিবিউশন বোর্ড, গৃহস্থালী যন্ত্রপাতি।' },
    svgPath: (
      <g stroke="#ef4444" strokeWidth="2" fill="none">
        <line x1="5" y1="25" x2="75" y2="25" />
        <rect x="20" y="15" width="40" height="20" fill="#1e293b" />
      </g>
    )
  },
  {
    id: 'capacitor',
    name: { en: 'Capacitor', hi: 'कैपेसिटर (संधारित्र)', bn: 'ক্যাপাসিটর (ধারক)' },
    category: { en: 'Energy Storage', hi: 'ऊर्जा भंडारण', bn: 'শক্তি সঞ্চয়' },
    functionDesc: { en: 'Stores electrical energy in an electrostatic field between plates.', hi: 'प्लेटों के बीच एक इलेक्ट्रोस्टैटिक क्षेत्र में विद्युत ऊर्जा का भंडारण करता है।', bn: 'প্লেটদ্বয়ের মাঝে স্থিরতড়িৎ ক্ষেত্রে শক্তি সঞ্চয় করে।' },
    application: { en: 'Filtering, power factor correction, motor starters.', hi: 'फ़िल्टरिंग, पावर फैक्टर सुधार, मोटर स्टार्टर।', bn: 'ফিল্টারিং, পাওয়ার ফ্যাক্টর উন্নয়ন, মোটর স্টার্টার।' },
    svgPath: (
      <g stroke="#38bdf8" strokeWidth="2" fill="none">
        <line x1="5" y1="25" x2="33" y2="25" />
        <line x1="33" y1="10" x2="33" y2="40" strokeWidth="3" />
        <line x1="47" y1="10" x2="47" y2="40" strokeWidth="3" />
        <line x1="47" y1="25" x2="75" y2="25" />
      </g>
    )
  },
  {
    id: 'inductor',
    name: { en: 'Inductor Coil', hi: 'इंडक्टर कॉइल (प्रेरक)', bn: 'ইন্ডাকটর কয়েল' },
    category: { en: 'Energy Storage', hi: 'ऊर्जा भंडारण', bn: 'শক্তি সঞ্চয়' },
    functionDesc: { en: 'Stores electrical energy in a magnetic field when current flows.', hi: 'धारा प्रवाहित होने पर चुंबकीय क्षेत्र में विद्युत ऊर्जा का भंडारण करता है।', bn: 'কারেন্ট প্রবাহিত হলে চৌম্বক ক্ষেত্রে শক্তি সঞ্চয় করে।' },
    application: { en: 'Chokes, transformers, LC filters, relay coils.', hi: 'चोक, ट्रांसफार्मर, एलसी फ़िल्टर, रिले कॉइल।', bn: 'চোক, ট্রান্সফরমার, এলসি ফিল্টার, রিলে কয়েল।' },
    svgPath: (
      <g stroke="#f59e0b" strokeWidth="2" fill="none">
        <line x1="5" y1="25" x2="15" y2="25" />
        <path d="M 15 25 A 6 6 0 0 1 27 25 A 6 6 0 0 1 39 25 A 6 6 0 0 1 51 25 A 6 6 0 0 1 63 25" />
        <line x1="63" y1="25" x2="75" y2="25" />
      </g>
    )
  }
];

const TRANSLATIONS = {
  en: {
    title: 'Interactive Electrical Symbols Explorer',
    subtitle: 'Click any electrical schematic symbol to inspect its standard IEEE/IEC representation, function, and applications.',
    symbolLibrary: 'Electrical Schematic Symbol Board',
    buildCircuitTab: 'Build Educational Circuit Mode',
    selectedDetails: 'Selected Component Specification',
    selectSource: 'Select Source:',
    selectControl: 'Select Control:',
    selectLoad: 'Select Load:',
    compiledSchematic: 'Compiled Schematic Preview',
    calloutTitle: 'Schematic Symbol Standards',
    calloutText: 'Electrical schematics use standardized graphical symbols (IEEE / IEC 60617) to represent components concisely and unambiguously regardless of language.',
    formulaText: 'Standardized Electrical Diagrams Enable Global Technical Communication',
  },
  hi: {
    title: 'इंटरैक्टिव विद्युत प्रतीक (Electrical Symbols) बोर्ड',
    subtitle: 'मानक IEEE/IEC प्रतीक, कार्य और अनुप्रयोगों का निरीक्षण करने के लिए किसी भी प्रतीक पर क्लिक करें।',
    symbolLibrary: 'विद्युत आरेख प्रतीक बोर्ड',
    buildCircuitTab: 'शैक्षिक परिपथ बनाएं मोड',
    selectedDetails: 'चयनित घटक विशिष्टता',
    selectSource: 'स्रोत चुनें:',
    selectControl: 'नियंत्रण चुनें:',
    selectLoad: 'लोड चुनें:',
    compiledSchematic: 'संकलित आरेख पूर्वावलोकन',
    calloutTitle: 'आरेख प्रतीक मानक',
    calloutText: 'विद्युत आरेख बिना किसी भाषा बाधा के स्पष्ट रूप से घटकों को दर्शाने के लिए मानकीकृत प्रतीकों (IEEE / IEC 60617) का उपयोग करते हैं।',
    formulaText: 'मानकीकृत विद्युत आरेख वैश्विक तकनीकी संचार को सक्षम बनाते हैं',
  },
  bn: {
    title: 'ইন্টারঅ্যাক্টিভ তড়িৎ প্রতীক (Electrical Symbols) বোর্ড',
    subtitle: 'মানক IEEE/IEC প্রতীক, কাজ এবং ব্যবহারের ক্ষেত্রসমূহ দেখতে যেকোনো প্রতীকে ক্লিক করুন।',
    symbolLibrary: 'তড়িৎ স্কিম্যাটিক প্রতীক বোর্ড',
    buildCircuitTab: 'শিক্ষা মূলক সার্কিট তৈরি মোড',
    selectedDetails: 'নির্বাচিত উপাদানের বিবরণ',
    selectSource: 'উৎস নির্বাচন করুন:',
    selectControl: 'নিয়ন্ত্রণ নির্বাচন করুন:',
    selectLoad: 'লোড নির্বাচন করুন:',
    compiledSchematic: 'সংকলিত সার্কিট প্রিভিউ',
    calloutTitle: 'স্কিম্যাটিক প্রতীক মানদণ্ড',
    calloutText: 'তড়িৎ আলেখ্য বৈশ্বিক স্ট্যান্ডার্ড প্রতীক (IEEE / IEC 60617) ব্যবহার করে ভাষা নির্বিশেষে সার্কিট সহজ ও নিখুঁত করে তোলে।',
    formulaText: 'মানক তড়িৎ ডায়াগ্রাম বৈশ্বিক প্রযুক্তিগত যোগাযোগ সহজতর করে',
  }
};

export const ElectricalSymbolsAnimation: React.FC<ElectricalSymbolsAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [selectedId, setSelectedId] = useState<string>('battery');
  const [activeTab, setActiveTab] = useState<'board' | 'builder'>('board');

  // Builder mode states
  const [sourceType, setSourceType] = useState<'cell' | 'battery'>('battery');
  const [switchState, setSwitchState] = useState<boolean>(true);
  const [loadType, setLoadType] = useState<'lamp' | 'resistor' | 'motor'>('lamp');

  const selectedSymbol = SYMBOLS_DATA.find(s => s.id === selectedId) || SYMBOLS_DATA[0];

  const handleReset = () => {
    setSelectedId('battery');
    setSourceType('battery');
    setSwitchState(true);
    setLoadType('lamp');
  };

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      calloutTitle={t.calloutTitle}
      calloutText={t.calloutText}
      formulaText={t.formulaText}
      extraHeaderActions={
        <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab('board')}
            className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
              activeTab === 'board' ? 'bg-cyan-900 text-cyan-300' : 'text-slate-400'
            }`}
          >
            {t.symbolLibrary}
          </button>
          <button
            onClick={() => setActiveTab('builder')}
            className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
              activeTab === 'builder' ? 'bg-cyan-900 text-cyan-300' : 'text-slate-400'
            }`}
          >
            {t.buildCircuitTab}
          </button>
        </div>
      }
    >
      {activeTab === 'board' ? (
        <div className="space-y-5">
          {/* Symbols Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {SYMBOLS_DATA.map((sym) => {
              const isSelected = sym.id === selectedId;
              const nameText = sym.name[currentLanguage] || sym.name.en;
              return (
                <button
                  key={sym.id}
                  onClick={() => setSelectedId(sym.id)}
                  className={`p-3 rounded-xl border text-left flex flex-col items-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-lg'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                  aria-label={`Select ${nameText} symbol`}
                >
                  <svg viewBox="0 0 80 50" className="w-16 h-10 select-none">
                    {sym.svgPath}
                  </svg>
                  <span className="text-xs font-bold text-center">{nameText}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Symbol Detail Panel */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-3 flex flex-col items-center justify-center p-3 rounded-lg bg-slate-900 border border-slate-800">
              <svg viewBox="0 0 80 50" className="w-24 h-16 select-none">
                {selectedSymbol.svgPath}
              </svg>
              <span className="text-xs font-mono font-bold text-cyan-300 mt-1">
                {selectedSymbol.name[currentLanguage] || selectedSymbol.name.en}
              </span>
            </div>

            <div className="md:col-span-9 space-y-2 text-xs">
              <div>
                <span className="text-slate-400 font-mono">Category: </span>
                <span className="text-emerald-400 font-bold">{selectedSymbol.category[currentLanguage] || selectedSymbol.category.en}</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono">Function: </span>
                <span className="text-slate-200">{selectedSymbol.functionDesc[currentLanguage] || selectedSymbol.functionDesc.en}</span>
              </div>
              <div>
                <span className="text-slate-400 font-mono">Applications: </span>
                <span className="text-amber-300">{selectedSymbol.application[currentLanguage] || selectedSymbol.application.en}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Circuit Builder Tab */
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 print-hidden">
            {/* Source selector */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-cyan-300">{t.selectSource}</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setSourceType('cell')}
                  className={`flex-1 py-1 rounded text-xs font-bold border ${sourceType === 'cell' ? 'bg-cyan-900 border-cyan-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                >
                  Single Cell
                </button>
                <button
                  onClick={() => setSourceType('battery')}
                  className={`flex-1 py-1 rounded text-xs font-bold border ${sourceType === 'battery' ? 'bg-cyan-900 border-cyan-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                >
                  DC Battery
                </button>
              </div>
            </div>

            {/* Control switch state */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-amber-300">{t.selectControl}</span>
              <button
                onClick={() => setSwitchState(prev => !prev)}
                className={`w-full py-1 rounded text-xs font-bold border ${switchState ? 'bg-emerald-950 border-emerald-500 text-emerald-300' : 'bg-rose-950 border-rose-500 text-rose-300'}`}
              >
                Switch: {switchState ? 'CLOSED (ON)' : 'OPEN (OFF)'}
              </button>
            </div>

            {/* Load selector */}
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-emerald-300">{t.selectLoad}</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setLoadType('lamp')}
                  className={`flex-1 py-1 rounded text-xs font-bold border ${loadType === 'lamp' ? 'bg-emerald-900 border-emerald-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                >
                  Lamp
                </button>
                <button
                  onClick={() => setLoadType('resistor')}
                  className={`flex-1 py-1 rounded text-xs font-bold border ${loadType === 'resistor' ? 'bg-emerald-900 border-emerald-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                >
                  Resistor
                </button>
                <button
                  onClick={() => setLoadType('motor')}
                  className={`flex-1 py-1 rounded text-xs font-bold border ${loadType === 'motor' ? 'bg-emerald-900 border-emerald-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                >
                  Motor
                </button>
              </div>
            </div>
          </div>

          {/* Compiled Assembled Schematic Canvas */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative min-h-[200px]">
            <svg viewBox="0 0 340 180" className="w-full max-w-md h-48 select-none">
              <rect x="40" y="30" width="260" height="120" rx="8" fill="none" stroke={switchState ? '#34d399' : '#334155'} strokeWidth="4" />

              {/* Source on Left */}
              <g transform="translate(40, 90)">
                <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">
                  {sourceType === 'cell' ? 'Cell' : 'Bat'}
                </text>
              </g>

              {/* Switch on Top */}
              <g transform="translate(170, 30)">
                <circle cx="-15" cy="0" r="3" fill="#f59e0b" />
                <circle cx="15" cy="0" r="3" fill="#f59e0b" />
                <line x1="-15" y1="0" x2={switchState ? "15" : "10"} y2={switchState ? "0" : "-12"} stroke="#f59e0b" strokeWidth="2.5" />
                <text x="0" y="-10" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">
                  {switchState ? 'CLOSED' : 'OPEN'}
                </text>
              </g>

              {/* Load on Right */}
              <g transform="translate(300, 90)">
                <circle cx="0" cy="0" r="20" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">
                  {loadType.toUpperCase()}
                </text>
              </g>
            </svg>
            <span className="text-xs font-mono text-cyan-300">
              Circuit State: {switchState ? 'ACTIVE — CURRENT FLOWING' : 'OPEN — NO CURRENT'}
            </span>
          </div>
        </div>
      )}
    </InteractiveSimulationCard>
  );
};
