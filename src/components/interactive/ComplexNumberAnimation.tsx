import React, { useState } from 'react';
import { Sliders, RotateCcw, ArrowRightLeft, Plus, Minus, X, Divide, Compass, Zap, HelpCircle } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard, useReducedMotion } from './InteractiveSimulationCard';

interface ComplexNumberAnimationProps {
  currentLanguage: Language;
}

type OperationType = 'add' | 'sub' | 'mul' | 'div';

const TRANSLATIONS = {
  en: {
    title: 'AC Complex Impedance & Phasor Algebra Tool',
    subtitle: 'Interactively convert between Rectangular (a + jb) and Polar (|Z| ∠ θ) forms, perform complex arithmetic operations, and visualize vectors on the Argand plane.',
    calculatorMode: 'Mode:',
    singleMode: '1. Single Number & Polar Conversion',
    arithmeticMode: '2. Complex Arithmetic (Z1 & Z2)',
    realPart: 'Real Part (Resistance R or a)',
    imagPart: 'Imaginary Part (Reactance X or b)',
    magnitude: 'Magnitude |Z|',
    phaseAngle: 'Phase Angle θ',
    rectangularForm: 'Rectangular Form (a + jb)',
    polarForm: 'Polar Form (|Z| ∠ θ)',
    complexConjugate: 'Conjugate (Z*)',
    quadrant: 'Quadrant',
    quad1: 'Quadrant I (Inductive, +R, +jX)',
    quad2: 'Quadrant II (-R, +jX)',
    quad3: 'Quadrant III (-R, -jX)',
    quad4: 'Quadrant IV (Capacitive, +R, -jX)',
    pureReal: 'Pure Resistance (θ = 0°)',
    pureImagPos: 'Pure Inductive Reactance (θ = +90°)',
    pureImagNeg: 'Pure Capacitive Reactance (θ = -90°)',
    origin: 'Origin (0 + j0)',
    operation: 'Arithmetic Operation:',
    add: 'Addition (Z1 + Z2)',
    sub: 'Subtraction (Z1 - Z2)',
    mul: 'Multiplication (Z1 × Z2)',
    div: 'Division (Z1 / Z2)',
    swap: 'Swap Z1 ↔ Z2',
    reset: 'Reset Defaults',
    calcResult: 'Resulting Complex Vector (Z_res):',
    divByZeroError: 'Cannot divide by zero magnitude (|Z2| = 0). Please enter a non-zero denominator.',
    complexPlane: 'Complex Plane (Argand Diagram)',
    realAxis: '+Real / R Axis',
    imagAxis: '+Imaginary / +jX Axis',
    formulaCalloutTitle: 'Governing Complex Transformation',
    formulaCalloutText: 'Rectangular: Z = a + jb. Polar: Z = |Z| ∠ θ where |Z| = √(a² + b²) and θ = tan⁻¹(b/a). Multiplication adds angles; division subtracts angles.',
    formulaText: '|Z| = √(a² + b²)   |   θ = tan⁻¹(b/a)   |   a = |Z|·cosθ, b = |Z|·sinθ'
  },
  hi: {
    title: 'एसी सम्मिश्र प्रतिबाधा एवं फेजर बीजगणित टूल',
    subtitle: 'आयताकार (a + jb) और ध्रुवीय (|Z| ∠ θ) रूपों के बीच रूपांतरण करें, सम्मिश्र अंकगणित करें और अर्गैंड तल पर वेक्टर देखें।',
    calculatorMode: 'मोड:',
    singleMode: '1. एकल संख्या एवं ध्रुवीय रूपांतरण',
    arithmeticMode: '2. सम्मिश्र अंकगणित (Z1 एवं Z2)',
    realPart: 'वास्तविक भाग (प्रतिरोध R या a)',
    imagPart: 'काल्पनिक भाग (प्रतिघात X या b)',
    magnitude: 'परिमाण |Z|',
    phaseAngle: 'फेज कोण θ',
    rectangularForm: 'आयताकार रूप (a + jb)',
    polarForm: 'ध्रुवीय रूप (|Z| ∠ θ)',
    complexConjugate: 'संयुग्मी (Z*)',
    quadrant: 'चतुर्थांश',
    quad1: 'चतुर्थांश I (प्रेरणिक, +R, +jX)',
    quad2: 'चतुर्थांश II (-R, +jX)',
    quad3: 'चतुर्थांश III (-R, -jX)',
    quad4: 'चतुर्थांश IV (धारितीय, +R, -jX)',
    pureReal: 'शुद्ध प्रतिरोध (θ = 0°)',
    pureImagPos: 'शुद्ध प्रेरणिक प्रतिघात (θ = +90°)',
    pureImagNeg: 'शुद्ध धारितीय प्रतिघात (θ = -90°)',
    origin: 'मूल बिंदु (0 + j0)',
    operation: 'अंकगणितीय संक्रिया:',
    add: 'योग (Z1 + Z2)',
    sub: 'घटाव (Z1 - Z2)',
    mul: 'गुणा (Z1 × Z2)',
    div: 'भाग (Z1 / Z2)',
    swap: 'अदला-बदली Z1 ↔ Z2',
    reset: 'डिफ़ॉल्ट रीसेट',
    calcResult: 'परिणामी सम्मिश्र वेक्टर (Z_res):',
    divByZeroError: 'शून्य परिमाण (|Z2| = 0) से भाग नहीं दिया जा सकता। कृपया एक अशून्य हर दर्ज करें।',
    complexPlane: 'सम्मिश्र तल (अर्गैंड आरेख)',
    realAxis: '+वास्तविक / R अक्ष',
    imagAxis: '+काल्पनिक / +jX अक्ष',
    formulaCalloutTitle: 'सम्मिश्र रूपांतरण सूत्र',
    formulaCalloutText: 'आयताकार: Z = a + jb। ध्रुवीय: Z = |Z| ∠ θ जहाँ |Z| = √(a² + b²) एवं θ = tan⁻¹(b/a)। गुणा में कोण जुड़ते हैं और भाग में घटते हैं।',
    formulaText: '|Z| = √(a² + b²)   |   θ = tan⁻¹(b/a)   |   a = |Z|·cosθ, b = |Z|·sinθ'
  },
  bn: {
    title: 'এসি জটিল সংখ্যা ইম্পিডেন্স ও ফেজর অ্যালজেব্রা টুল',
    subtitle: 'রেকট্যাঙ্গুলার (a + jb) এবং পোলার (|Z| ∠ θ) রূপের মধ্যে রূপান্তর করুন, জটিল গাণিতিক অপারেশন সমাধান করুন এবং আর্গান্ড প্লেনে ভেক্টর প্রদর্শন করুন।',
    calculatorMode: 'মোড:',
    singleMode: '১. একক সংখ্যা ও পোলার রূপান্তর',
    arithmeticMode: '২. জটিল গাণিতিক হিসাব (Z1 ও Z2)',
    realPart: 'বাস্তব অংশ (রোধ R বা a)',
    imagPart: 'কাল্পনিক অংশ (রিয়্যাক্ট্যান্স X বা b)',
    magnitude: 'মান |Z|',
    phaseAngle: 'ফেজ কোণ θ',
    rectangularForm: 'রেকট্যাঙ্গুলার রূপ (a + jb)',
    polarForm: 'পোলার রূপ (|Z| ∠ θ)',
    complexConjugate: 'অনুবন্ধী (Z*)',
    quadrant: 'চতুর্ভাগ',
    quad1: 'চতুর্ভাগ I (ইনডাক্টিভ, +R, +jX)',
    quad2: 'চতুর্ভাগ II (-R, +jX)',
    quad3: 'চতুর্ভাগ III (-R, -jX)',
    quad4: 'চতুর্ভাগ IV (ক্যাপাসিটিভ, +R, -jX)',
    pureReal: 'বিশুদ্ধ রোধ (θ = 0°)',
    pureImagPos: 'বিশুদ্ধ ইনডাক্টিভ রিয়্যাক্ট্যান্স (θ = +90°)',
    pureImagNeg: 'বিশুদ্ধ ক্যাপাসিটিভ রিয়্যাক্ট্যান্স (θ = -90°)',
    origin: 'মূলবিন্দু (0 + j0)',
    operation: 'গাণিতিক অপারেশন:',
    add: 'যোগ (Z1 + Z2)',
    sub: 'বিয়োগ (Z1 - Z2)',
    mul: 'গুণ (Z1 × Z2)',
    div: 'ভাগ (Z1 / Z2)',
    swap: 'অদলবদল Z1 ↔ Z2',
    reset: 'ডিফল্ট রিসেট',
    calcResult: 'ফলাফল জটিল ভেক্টর (Z_res):',
    divByZeroError: 'শূন্য মান (|Z2| = 0) দিয়ে ভাগ করা অসম্ভব। দয়া করে একটি অশূন্য হর নির্ধারণ করুন।',
    complexPlane: 'জটিল তল (আর্গান্ড চিত্র)',
    realAxis: '+বাস্তব / R অক্ষ',
    imagAxis: '+কাল্পনিক / +jX অক্ষ',
    formulaCalloutTitle: 'জটিল সংখ্যার রূপান্তর সূত্র',
    formulaCalloutText: 'রেকট্যাঙ্গুলার: Z = a + jb। পোলার: Z = |Z| ∠ θ যেখানে |Z| = √(a² + b²) এবং θ = tan⁻¹(b/a)। গুণে কোণ যোগ হয় এবং ভাগে কোণ বিয়োগ হয়।',
    formulaText: '|Z| = √(a² + b²)   |   θ = tan⁻¹(b/a)   |   a = |Z|·cosθ, b = |Z|·sinθ'
  }
};

export const ComplexNumberAnimation: React.FC<ComplexNumberAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isReducedMotion = useReducedMotion();

  // Mode: single conversion vs arithmetic
  const [activeTab, setActiveTab] = useState<'single' | 'arithmetic'>('single');

  // Single Complex Number Inputs
  const [realA, setRealA] = useState<number>(4); // e.g. 4 Ω
  const [imagA, setImagA] = useState<number>(3); // e.g. 3 Ω (yielding 5 ∠ 36.87°)

  // Secondary Number for Arithmetic mode
  const [realB, setRealB] = useState<number>(2);
  const [imagB, setImagB] = useState<number>(-2);
  const [operation, setOperation] = useState<OperationType>('add');

  // Mathematical Helper Functions
  const toPolar = (r: number, i: number) => {
    const mag = Math.hypot(r, i);
    const rad = Math.atan2(i, r);
    const deg = (rad * 180) / Math.PI;
    return { mag, rad, deg };
  };

  const polarA = toPolar(realA, imagA);
  const polarB = toPolar(realB, imagB);

  // Determine Quadrant Description
  const getQuadrantDesc = (r: number, i: number) => {
    if (r === 0 && i === 0) return t.origin;
    if (r > 0 && i === 0) return t.pureReal;
    if (r === 0 && i > 0) return t.pureImagPos;
    if (r === 0 && i < 0) return t.pureImagNeg;
    if (r > 0 && i > 0) return t.quad1;
    if (r < 0 && i > 0) return t.quad2;
    if (r < 0 && i < 0) return t.quad3;
    return t.quad4;
  };

  // Perform Arithmetic Operation
  let resReal = 0;
  let resImag = 0;
  let isDivError = false;

  if (activeTab === 'arithmetic') {
    if (operation === 'add') {
      resReal = realA + realB;
      resImag = imagA + imagB;
    } else if (operation === 'sub') {
      resReal = realA - realB;
      resImag = imagA - imagB;
    } else if (operation === 'mul') {
      // (a1*a2 - b1*b2) + j(a1*b2 + a2*b1)
      resReal = realA * realB - imagA * imagB;
      resImag = realA * imagB + realB * imagA;
    } else if (operation === 'div') {
      const denom = realB * realB + imagB * imagB;
      if (denom === 0) {
        isDivError = true;
      } else {
        resReal = (realA * realB + imagA * imagB) / denom;
        resImag = (imagA * realB - realA * imagB) / denom;
      }
    }
  }

  const polarRes = toPolar(resReal, resImag);

  const handleReset = () => {
    setRealA(4);
    setImagA(3);
    setRealB(2);
    setImagB(-2);
    setOperation('add');
    setActiveTab('single');
  };

  const handleSwap = () => {
    const tempR = realA;
    const tempI = imagA;
    setRealA(realB);
    setImagA(imagB);
    setRealB(tempR);
    setImagB(tempI);
  };

  // Complex Plane SVG Geometry
  const svgWidth = 480;
  const svgHeight = 280;
  const cx = svgWidth / 2;
  const cy = svgHeight / 2;
  const scale = 18; // 18 px per unit

  // Coordinates mapping
  const toSvgX = (r: number) => cx + r * scale;
  const toSvgY = (i: number) => cy - i * scale;

  const tipAX = toSvgX(realA);
  const tipAY = toSvgY(imagA);

  const tipBX = toSvgX(realB);
  const tipBY = toSvgY(imagB);

  const tipResX = toSvgX(resReal);
  const tipResY = toSvgY(resImag);

  return (
    <InteractiveSimulationCard
      currentLanguage={currentLanguage}
      title={t.title}
      subtitle={t.subtitle}
      onReset={handleReset}
      resetLabel={t.reset}
      calloutTitle={t.formulaCalloutTitle}
      calloutText={t.formulaCalloutText}
      formulaText={t.formulaText}
    >
      <div className="space-y-6">
        {/* Mode Selector Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
          <span className="text-xs font-mono text-slate-400 font-semibold">{t.calculatorMode}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('single')}
              aria-pressed={activeTab === 'single'}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'single'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950 font-bold'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {t.singleMode}
            </button>
            <button
              onClick={() => setActiveTab('arithmetic')}
              aria-pressed={activeTab === 'arithmetic'}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'arithmetic'
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950 font-bold'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {t.arithmeticMode}
            </button>
          </div>
        </div>

        {/* Input Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column: Number Input Form & Operations */}
          <div className="space-y-4">
            {/* Input Box for Z1 / Primary Complex Number */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-cyan-900/60 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-xs font-mono font-bold text-cyan-300">
                  {activeTab === 'arithmetic' ? 'Complex Vector Z₁:' : 'Complex Vector Z:'}
                </span>
                <span className="text-xs font-mono text-cyan-400 font-bold px-2 py-0.5 bg-cyan-950 border border-cyan-800 rounded">
                  {realA} {imagA >= 0 ? `+ j${imagA}` : `- j${Math.abs(imagA)}`}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Real Input */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>{t.realPart}</span>
                    <span className="text-white font-bold">{realA}</span>
                  </div>
                  <input
                    type="range"
                    min="-10"
                    max="10"
                    step="1"
                    value={realA}
                    onChange={(e) => setRealA(Number(e.target.value))}
                    aria-label={`${t.realPart} for Z1`}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  />
                </div>

                {/* Imaginary Input */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>{t.imagPart}</span>
                    <span className="text-white font-bold">{imagA >= 0 ? `+${imagA}` : imagA}</span>
                  </div>
                  <input
                    type="range"
                    min="-10"
                    max="10"
                    step="1"
                    value={imagA}
                    onChange={(e) => setImagA(Number(e.target.value))}
                    aria-label={`${t.imagPart} for Z1`}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* Arithmetic Controls (Z2 and Operator) */}
            {activeTab === 'arithmetic' && (
              <div className="bg-slate-900/80 p-4 rounded-xl border border-amber-900/60 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-300">
                    Complex Vector Z₂:
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleSwap}
                      aria-label={t.swap}
                      className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-mono flex items-center gap-1 border border-slate-700"
                    >
                      <ArrowRightLeft className="w-3 h-3" />
                      <span>{t.swap}</span>
                    </button>
                    <span className="text-xs font-mono text-amber-400 font-bold px-2 py-0.5 bg-amber-950 border border-amber-800 rounded">
                      {realB} {imagB >= 0 ? `+ j${imagB}` : `- j${Math.abs(imagB)}`}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Real Input Z2 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                      <span>{t.realPart}</span>
                      <span className="text-white font-bold">{realB}</span>
                    </div>
                    <input
                      type="range"
                      min="-10"
                      max="10"
                      step="1"
                      value={realB}
                      onChange={(e) => setRealB(Number(e.target.value))}
                      aria-label={`${t.realPart} for Z2`}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    />
                  </div>

                  {/* Imaginary Input Z2 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                      <span>{t.imagPart}</span>
                      <span className="text-white font-bold">{imagB >= 0 ? `+${imagB}` : imagB}</span>
                    </div>
                    <input
                      type="range"
                      min="-10"
                      max="10"
                      step="1"
                      value={imagB}
                      onChange={(e) => setImagB(Number(e.target.value))}
                      aria-label={`${t.imagPart} for Z2`}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    />
                  </div>
                </div>

                {/* Operation Selector Buttons */}
                <div className="pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 block mb-2">{t.operation}</span>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      onClick={() => setOperation('add')}
                      aria-pressed={operation === 'add'}
                      aria-label={t.add}
                      className={`p-1.5 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1 border ${
                        operation === 'add' ? 'bg-cyan-600 text-white border-cyan-500' : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Z₁+Z₂</span>
                    </button>

                    <button
                      onClick={() => setOperation('sub')}
                      aria-pressed={operation === 'sub'}
                      aria-label={t.sub}
                      className={`p-1.5 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1 border ${
                        operation === 'sub' ? 'bg-cyan-600 text-white border-cyan-500' : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      <Minus className="w-3.5 h-3.5" />
                      <span>Z₁-Z₂</span>
                    </button>

                    <button
                      onClick={() => setOperation('mul')}
                      aria-pressed={operation === 'mul'}
                      aria-label={t.mul}
                      className={`p-1.5 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1 border ${
                        operation === 'mul' ? 'bg-cyan-600 text-white border-cyan-500' : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      <X className="w-3.5 h-3.5" />
                      <span>Z₁×Z₂</span>
                    </button>

                    <button
                      onClick={() => setOperation('div')}
                      aria-pressed={operation === 'div'}
                      aria-label={t.div}
                      className={`p-1.5 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1 border ${
                        operation === 'div' ? 'bg-cyan-600 text-white border-cyan-500' : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}
                    >
                      <Divide className="w-3.5 h-3.5" />
                      <span>Z₁/Z₂</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Arithmetic Result Card or Single Polar Form Card */}
            {activeTab === 'single' ? (
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-slate-300 block border-b border-slate-800 pb-1.5">
                  Vector Metric Breakdown:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="bg-slate-950 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px] uppercase">{t.magnitude}</span>
                    <span className="text-amber-300 font-bold">{polarA.mag.toFixed(3)}</span>
                  </div>

                  <div className="bg-slate-950 p-2 rounded border border-slate-800">
                    <span className="text-slate-400 block text-[10px] uppercase">{t.phaseAngle}</span>
                    <span className="text-purple-300 font-bold">{polarA.deg.toFixed(2)}° ({polarA.rad.toFixed(3)} rad)</span>
                  </div>

                  <div className="bg-slate-950 p-2 rounded border border-slate-800 col-span-2">
                    <span className="text-slate-400 block text-[10px] uppercase">{t.polarForm}</span>
                    <span className="text-emerald-300 font-bold text-sm">
                      {polarA.mag.toFixed(2)} ∠ {polarA.deg.toFixed(2)}°
                    </span>
                  </div>

                  <div className="bg-slate-950 p-2 rounded border border-slate-800 col-span-2 flex justify-between items-center">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">{t.complexConjugate}</span>
                      <span className="text-cyan-300 font-bold">
                        Z* = {realA} {imagA >= 0 ? `- j${imagA}` : `+ j${Math.abs(imagA)}`} ({polarA.mag.toFixed(2)} ∠ {-polarA.deg.toFixed(2)}°)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-cyan-300/80 bg-cyan-950/30 p-2 rounded border border-cyan-900/50">
                  {getQuadrantDesc(realA, imagA)}
                </div>
              </div>
            ) : (
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-slate-300 block border-b border-slate-800 pb-1.5">
                  {t.calcResult}
                </span>

                {isDivError ? (
                  <div className="bg-rose-950/40 border border-rose-800 text-rose-300 p-3 rounded-lg text-xs font-mono">
                    {t.divByZeroError}
                  </div>
                ) : (
                  <div className="space-y-2 text-xs font-mono">
                    <div className="bg-slate-950 p-2.5 rounded border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">{t.rectangularForm}:</span>
                      <span className="text-cyan-300 font-bold text-sm">
                        {resReal.toFixed(2)} {resImag >= 0 ? `+ j${resImag.toFixed(2)}` : `- j${Math.abs(resImag).toFixed(2)}`}
                      </span>
                    </div>

                    <div className="bg-slate-950 p-2.5 rounded border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">{t.polarForm}:</span>
                      <span className="text-emerald-300 font-bold text-sm">
                        {polarRes.mag.toFixed(2)} ∠ {polarRes.deg.toFixed(2)}°
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Interactive Argand Diagram / Complex Plane SVG */}
          <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 shadow-inner flex flex-col items-center">
            <span className="text-xs font-mono font-bold text-slate-400 mb-2">{t.complexPlane}</span>
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto max-w-md select-none"
              aria-label="Argand Complex Plane Diagram"
              role="img"
            >
              <defs>
                <marker id="arrowCyanZ" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#22d3ee" />
                </marker>
                <marker id="arrowAmberZ" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#fbbf24" />
                </marker>
                <marker id="arrowPurpleZ" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#c084fc" />
                </marker>
              </defs>

              {/* Grid Background */}
              <g stroke="#1e293b" strokeWidth="1" strokeDasharray="2 2">
                {[-8, -6, -4, -2, 2, 4, 6, 8].map((val) => (
                  <React.Fragment key={val}>
                    <line x1={toSvgX(val)} y1="10" x2={toSvgX(val)} y2={svgHeight - 10} />
                    <line x1="10" y1={toSvgY(val)} x2={svgWidth - 10} y2={toSvgY(val)} />
                  </React.Fragment>
                ))}
              </g>

              {/* Real (X) & Imaginary (Y) Main Axes */}
              <line x1="15" y1={cy} x2={svgWidth - 15} y2={cy} stroke="#475569" strokeWidth="2" />
              <line x1={cx} y1={svgHeight - 15} x2={cx} y2="15" stroke="#475569" strokeWidth="2" />

              {/* Axis Labels */}
              <text x={svgWidth - 20} y={cy + 14} fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="monospace" fontWeight="bold">
                +Real (R)
              </text>
              <text x="25" y={cy + 14} fill="#64748b" fontSize="9" fontFamily="monospace">
                -Real
              </text>
              <text x={cx + 8} y="22" fill="#94a3b8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                +j (Reactance)
              </text>
              <text x={cx + 8} y={svgHeight - 20} fill="#64748b" fontSize="9" fontFamily="monospace">
                -j
              </text>

              {/* Origin dot */}
              <circle cx={cx} cy={cy} r="3" fill="#64748b" />

              {/* Secondary Vector Z2 (in arithmetic mode) */}
              {activeTab === 'arithmetic' && (
                <g>
                  {/* Projections for Z2 */}
                  <line x1={cx} y1={tipBY} x2={tipBX} y2={tipBY} stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
                  <line x1={tipBX} y1={cy} x2={tipBX} y2={tipBY} stroke="#fbbf24" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />

                  {/* Vector Arrow Z2 */}
                  <line x1={cx} y1={cy} x2={tipBX} y2={tipBY} stroke="#fbbf24" strokeWidth="2" markerEnd="url(#arrowAmberZ)" />
                  <circle cx={tipBX} cy={tipBY} r="4" fill="#fbbf24" />
                  <text x={tipBX + 6} y={tipBY - 4} fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    Z₂
                  </text>
                </g>
              )}

              {/* Primary Vector Z1 */}
              <g>
                {/* Projections for Z1 */}
                <line x1={cx} y1={tipAY} x2={tipAX} y2={tipAY} stroke="#22d3ee" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                <line x1={tipAX} y1={cy} x2={tipAX} y2={tipAY} stroke="#22d3ee" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

                {/* Vector Arrow Z1 */}
                <line x1={cx} y1={cy} x2={tipAX} y2={tipAY} stroke="#22d3ee" strokeWidth="2.5" markerEnd="url(#arrowCyanZ)" />
                <circle cx={tipAX} cy={tipAY} r="4.5" fill="#22d3ee" stroke="#ffffff" strokeWidth="1.5" />
                <text x={tipAX + 6} y={tipAY - 4} fill="#22d3ee" fontSize="11" fontFamily="monospace" fontWeight="bold">
                  {activeTab === 'arithmetic' ? 'Z₁' : 'Z'}
                </text>
              </g>

              {/* Resulting Vector Z_res in arithmetic mode */}
              {activeTab === 'arithmetic' && !isDivError && (
                <g>
                  <line x1={cx} y1={cy} x2={tipResX} y2={tipResY} stroke="#c084fc" strokeWidth="2.5" strokeDasharray="4 2" markerEnd="url(#arrowPurpleZ)" />
                  <circle cx={tipResX} cy={tipResY} r="4" fill="#c084fc" stroke="#ffffff" strokeWidth="1.5" />
                  <text x={tipResX + 6} y={tipResY - 4} fill="#c084fc" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                    Z_res
                  </text>
                </g>
              )}
            </svg>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
