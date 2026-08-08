import React, { useState } from 'react';
import { Layers, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';

interface SIUnitsAnimationProps {
  currentLanguage: Language;
}

interface UnitInfo {
  id: string;
  quantity: { en: string; hi: string; bn: string };
  unitName: { en: string; hi: string; bn: string };
  symbol: string;
  definition: { en: string; hi: string; bn: string };
  formula: string;
  baseValName: string;
}

const SI_UNITS_DATA: UnitInfo[] = [
  {
    id: 'voltage',
    quantity: { en: 'Electric Voltage / Potential Difference', hi: 'विद्युत वोल्टेज / विभवांतर', bn: 'তড়িৎ ভোল্টেজ / বিভব পার্থক্য' },
    unitName: { en: 'Volt', hi: 'वोल्ट', bn: 'ভোল্ট' },
    symbol: 'V',
    definition: { en: 'Work done per unit charge (1 V = 1 Joule per Coulomb)', hi: 'प्रति इकाई आवेश किया गया कार्य (1 V = 1 जूल/कूलॉम)', bn: 'প্রতি একক আধান স্থানান্তরে কৃত কাজ (1 V = 1 জুল/কুলম্ব)' },
    formula: 'V = W / Q = I × R',
    baseValName: 'Volts (V)',
  },
  {
    id: 'current',
    quantity: { en: 'Electric Current', hi: 'विद्युत धारा', bn: 'তড়িৎ প্রবাহ' },
    unitName: { en: 'Ampere', hi: 'एम्पीयर', bn: 'অ্যাম্পিয়ার' },
    symbol: 'A',
    definition: { en: 'Rate of electric charge flow (1 A = 1 Coulomb per second)', hi: 'विद्युत आवेश के प्रवाह की दर (1 A = 1 कूलॉम/सेकंड)', bn: 'তড়িৎ আধানের প্রবাহের হার (1 A = 1 কুলম্ব/সেকেন্ড)' },
    formula: 'I = Q / t = V / R',
    baseValName: 'Amperes (A)',
  },
  {
    id: 'resistance',
    quantity: { en: 'Electrical Resistance', hi: 'विद्युत प्रतिरोध', bn: 'তড়িৎ রোধ' },
    unitName: { en: 'Ohm', hi: 'ओम', bn: 'ওহম' },
    symbol: 'Ω',
    definition: { en: 'Opposition to electron flow (1 Ω = 1 Volt per Ampere)', hi: 'इलेक्ट्रॉन प्रवाह का विरोध (1 Ω = 1 वोल्ट/एम्पीयर)', bn: 'ইলেকট্রন প্রবাহের বাধা (1 Ω = 1 ভোল্ট/অ্যাম্পিয়ার)' },
    formula: 'R = V / I = ρ·L / A',
    baseValName: 'Ohms (Ω)',
  },
  {
    id: 'power',
    quantity: { en: 'Electrical Power', hi: 'विद्युत शक्ति', bn: 'তড়িৎ ক্ষমতা' },
    unitName: { en: 'Watt', hi: 'वाट', bn: 'ওয়াট' },
    symbol: 'W',
    definition: { en: 'Rate of electrical energy transfer (1 W = 1 Joule per second)', hi: 'विद्युत ऊर्जा के स्थानांतरण की दर (1 W = 1 जूल/सेकंड)', bn: 'তড়িৎ শক্তি রূপান্তরের হার (1 W = 1 জুল/সেকেন্ড)' },
    formula: 'P = V × I = I²R = V²/R',
    baseValName: 'Watts (W)',
  },
  {
    id: 'energy',
    quantity: { en: 'Electrical Energy', hi: 'विद्युत ऊर्जा', bn: 'তড়িৎ শক্তি' },
    unitName: { en: 'Joule / Watt-hour', hi: 'जूल / वाट-घंटा', bn: 'জুল / ওয়াট-ঘণ্টা' },
    symbol: 'J / Wh',
    definition: { en: 'Total work performed over time (1 kWh = 3.6 MJ)', hi: 'समय के साथ कुल किया गया कार्य (1 kWh = 3.6 MJ)', bn: 'সময়ের সাথে মোট কৃত কাজ (1 kWh = 3.6 MJ)' },
    formula: 'E = P × t = V × I × t',
    baseValName: 'Joules (J)',
  },
  {
    id: 'charge',
    quantity: { en: 'Electric Charge', hi: 'विद्युत आवेश', bn: 'তড়িৎ আধান' },
    unitName: { en: 'Coulomb', hi: 'कूलॉम', bn: 'কুলম্ব' },
    symbol: 'C',
    definition: { en: 'Total charge quantity (1 C = 6.242 × 10¹⁸ electrons)', hi: 'कुल आवेश मात्रा (1 C = 6.242 × 10¹⁸ इलेक्ट्रॉन)', bn: 'মোট আধানের পরিমাণ (1 C = 6.242 × 10¹⁸ ইলেকট্রন)' },
    formula: 'Q = I × t = n × e',
    baseValName: 'Coulombs (C)',
  },
  {
    id: 'conductance',
    quantity: { en: 'Electrical Conductance', hi: 'विद्युत चालकता', bn: 'তড়িৎ পরিবাহিতা' },
    unitName: { en: 'Siemens', hi: 'सीमेंस', bn: 'সিমেন্স' },
    symbol: 'S',
    definition: { en: 'Reciprocal of resistance (1 S = 1 / 1 Ω)', hi: 'प्रतिरोध का व्युत्क्रम (1 S = 1 / 1 Ω)', bn: 'রোধের বিপরীত (1 S = 1 / 1 Ω)' },
    formula: 'G = 1 / R = I / V',
    baseValName: 'Siemens (S)',
  },
];

const TRANSLATIONS = {
  en: {
    title: 'Interactive SI Units & Metric Prefix Converter',
    subtitle: 'Explore SI electrical units and convert between micro (μ), milli (m), base, kilo (k), and mega (M) prefixes.',
    selectUnit: 'Select Electrical SI Unit',
    prefixConverter: 'Live Metric Prefix Conversion Table',
    baseVal: 'Enter Base Value',
    calloutTitle: 'SI Units System Standards',
    calloutText: 'The International System of Units (SI) standardizes engineering calculations. Standard metric prefixes scale base units by powers of 10: micro (10⁻⁶), milli (10⁻³), kilo (10³), and mega (10⁶).',
    formulaText: '1 kU = 1,000 U   |   1 mU = 0.001 U   |   1 μU = 0.000001 U',
  },
  hi: {
    title: 'इंटरैक्टिव एसआई (SI) मात्रक एवं गुणक परिवर्तक',
    subtitle: 'विद्युत एसआई मात्रकों का अन्वेषण करें तथा माइक्रोन (μ), मिली (m), मूल मान, किलो (k), और मेगा (M) में परिवर्तन करें।',
    selectUnit: 'विद्युत एसआई मात्रक चुनें',
    prefixConverter: 'लाइव गुणक रूपांतरण तालिका',
    baseVal: 'मूल मान दर्ज करें',
    calloutTitle: 'एसआई मात्रक प्रणाली मानक',
    calloutText: 'अंतर्राष्ट्रीय मात्रक प्रणाली (SI) इंजीनियरिंग गणनाओं को मानकीकृत करती है। मानक मीट्रिक गुणक मूल मात्रकों को 10 की घातों से स्केल करते हैं: माइक्रो (10⁻⁶), मिली (10⁻³), किलो (10³), और मेगा (10⁶)।',
    formulaText: '1 kU = 1,000 U   |   1 mU = 0.001 U   |   1 μU = 0.000001 U',
  },
  bn: {
    title: 'ইন্টারঅ্যাক্টিভ এসআই (SI) একক ও রূপান্তরক',
    subtitle: 'তড়িৎ এসআই এককগুলো দেখুন এবং মাইক্রো (μ), মিলি (m), মূল একক, কিলো (k), ও মেগা (M) তে রূপান্তর করুন।',
    selectUnit: 'তড়িৎ এসআই একক নির্বাচন করুন',
    prefixConverter: 'লাইভ প্রিফিক্স রূপান্তর টেবিল',
    baseVal: 'মূল মান টাইপ করুন',
    calloutTitle: 'এসআই একক ব্যবস্থার মানদণ্ড',
    calloutText: 'আন্তর্জাতিক একক পদ্ধতি (SI) প্রকৌশল গণনাকে মানক করে। মানক মেট্রিক উপসর্গগুলো ১০ এর ঘাত দ্বারা মূল একককে স্কেল করে: মাইক্রো (১০⁻⁶), মিলি (১০⁻³), কিলো (১০³), এবং মেগা (১০⁶)।',
    formulaText: '1 kU = 1,000 U   |   1 mU = 0.001 U   |   1 μU = 0.000001 U',
  }
};

export const SIUnitsAnimation: React.FC<SIUnitsAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [selectedUnitId, setSelectedUnitId] = useState<string>('voltage');
  const [baseValue, setBaseValue] = useState<number>(1000);

  const selectedUnit = SI_UNITS_DATA.find(u => u.id === selectedUnitId) || SI_UNITS_DATA[0];

  const handleReset = () => {
    setSelectedUnitId('voltage');
    setBaseValue(1000);
  };

  const microVal = baseValue * 1e6;
  const milliVal = baseValue * 1e3;
  const kiloVal = baseValue / 1e3;
  const megaVal = baseValue / 1e6;

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      calloutTitle={t.calloutTitle}
      calloutText={t.calloutText}
      formulaText={t.formulaText}
    >
      <div className="space-y-5">
        {/* Unit Selector Grid Cards */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider">{t.selectUnit}:</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {SI_UNITS_DATA.map((unit) => {
              const isSelected = unit.id === selectedUnitId;
              const nameText = unit.unitName[currentLanguage] || unit.unitName.en;
              return (
                <button
                  key={unit.id}
                  onClick={() => setSelectedUnitId(unit.id)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    isSelected
                      ? 'bg-cyan-950 border-cyan-400 text-white font-bold shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                  aria-label={`Select ${nameText} unit`}
                >
                  <div className="text-lg font-bold font-mono text-cyan-300">{unit.symbol}</div>
                  <div className="text-[11px] font-medium truncate">{nameText}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Unit Details Box */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <div className="text-xs text-slate-400 font-mono uppercase">Quantity & Symbol</div>
            <div className="text-base font-bold text-cyan-300">
              {selectedUnit.quantity[currentLanguage] || selectedUnit.quantity.en} ({selectedUnit.symbol})
            </div>
            <div className="text-xs text-slate-300">
              <strong>SI Unit:</strong> {selectedUnit.unitName[currentLanguage] || selectedUnit.unitName.en} ({selectedUnit.symbol})
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              {selectedUnit.definition[currentLanguage] || selectedUnit.definition.en}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
            <div className="text-xs font-mono font-bold text-amber-400">Core Mathematical Formula:</div>
            <div className="text-lg font-mono font-extrabold text-amber-300">{selectedUnit.formula}</div>
          </div>
        </div>

        {/* Prefix Converter Input & Interactive Conversion Cards */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 print-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-cyan-400 font-mono uppercase">{t.prefixConverter}</span>
            <div className="flex items-center gap-2">
              <label className="text-xs text-slate-300 font-mono">{t.baseVal}:</label>
              <input
                type="number"
                value={baseValue}
                onChange={(e) => setBaseValue(Number(e.target.value) || 0)}
                className="w-28 px-2 py-1 rounded bg-slate-900 border border-cyan-700 font-mono text-xs text-cyan-300 font-bold focus:outline-none"
                aria-label="Base value conversion input"
              />
              <span className="text-xs font-mono text-cyan-300">{selectedUnit.symbol}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-mono">
            {/* Micro */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">Micro (μ = 10⁻⁶)</div>
              <div className="text-sm font-bold text-cyan-300">{microVal.toLocaleString()} μ{selectedUnit.symbol}</div>
            </div>

            {/* Milli */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">Milli (m = 10⁻³)</div>
              <div className="text-sm font-bold text-emerald-300">{milliVal.toLocaleString()} m{selectedUnit.symbol}</div>
            </div>

            {/* Kilo */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">Kilo (k = 10³)</div>
              <div className="text-sm font-bold text-amber-300">{kiloVal.toLocaleString()} k{selectedUnit.symbol}</div>
            </div>

            {/* Mega */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[10px] text-slate-400">Mega (M = 10⁶)</div>
              <div className="text-sm font-bold text-rose-400">{megaVal.toLocaleString()} M{selectedUnit.symbol}</div>
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
