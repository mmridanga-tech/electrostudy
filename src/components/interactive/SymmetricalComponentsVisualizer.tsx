import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Layers, Activity, AlertTriangle, CheckCircle2, RotateCw } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

interface Complex {
  r: number;
  i: number;
}

const add = (c1: Complex, c2: Complex): Complex => ({ r: c1.r + c2.r, i: c1.i + c2.i });
const scale = (c: Complex, s: number): Complex => ({ r: c.r * s, i: c.i * s });
const mult = (c1: Complex, c2: Complex): Complex => ({
  r: c1.r * c2.r - c1.i * c2.i,
  i: c1.r * c2.i + c1.i * c2.r
});
const fromPolar = (mag: number, deg: number): Complex => {
  const rad = (deg * Math.PI) / 180;
  return { r: mag * Math.cos(rad), i: mag * Math.sin(rad) };
};
const toMag = (c: Complex): number => Math.sqrt(c.r * c.r + c.i * c.i);
const toDeg = (c: Complex): number => {
  const deg = (Math.atan2(c.i, c.r) * 180) / Math.PI;
  return deg < 0 ? deg + 360 : deg;
};

// Fortescue operator a = 1 angle 120 deg
const a: Complex = { r: -0.5, i: Math.sqrt(3) / 2 };
const a2: Complex = { r: -0.5, i: -Math.sqrt(3) / 2 };

export const SymmetricalComponentsVisualizer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Phase Voltages Magnitudes and Angles
  const [magA, setMagA] = useState<number>(230);
  const [angA, setAngA] = useState<number>(0);
  const [magB, setMagB] = useState<number>(200);
  const [angB, setAngB] = useState<number>(230); // ~ -130 deg
  const [magC, setMagC] = useState<number>(245);
  const [angC, setAngC] = useState<number>(115); // ~ +115 deg

  // Presets
  const applyPreset = (type: 'balanced' | 'slg' | 'll' | 'broken') => {
    if (type === 'balanced') {
      setMagA(230); setAngA(0);
      setMagB(230); setAngB(240);
      setMagC(230); setAngC(120);
    } else if (type === 'slg') {
      // Phase A sagged to ground
      setMagA(45); setAngA(0);
      setMagB(230); setAngB(240);
      setMagC(230); setAngC(120);
    } else if (type === 'll') {
      // Line to line unbalance (B & C depressed)
      setMagA(230); setAngA(0);
      setMagB(140); setAngB(210);
      setMagC(140); setAngC(150);
    } else if (type === 'broken') {
      // Phase A open
      setMagA(0); setAngA(0);
      setMagB(230); setMagB(240);
      setMagC(230); setAngC(120);
    }
  };

  // Convert inputs to complex
  const Va = fromPolar(magA, angA);
  const Vb = fromPolar(magB, angB);
  const Vc = fromPolar(magC, angC);

  // Fortescue sequence components:
  // V0 = 1/3 (Va + Vb + Vc)
  // V1 = 1/3 (Va + a*Vb + a^2*Vc)
  // V2 = 1/3 (Va + a^2*Vb + a*Vc)
  const sum0 = add(add(Va, Vb), Vc);
  const V0 = scale(sum0, 1 / 3);

  const sum1 = add(add(Va, mult(a, Vb)), mult(a2, Vc));
  const V1 = scale(sum1, 1 / 3);

  const sum2 = add(add(Va, mult(a2, Vb)), mult(a, Vc));
  const V2 = scale(sum2, 1 / 3);

  const magV0 = toMag(V0);
  const degV0 = toDeg(V0);
  const magV1 = toMag(V1);
  const degV1 = toDeg(V1);
  const magV2 = toMag(V2);
  const degV2 = toDeg(V2);

  // Negative sequence unbalance ratio (IEC / IEEE standard definition)
  const unbalanceRatio = magV1 > 0 ? (magV2 / magV1) * 100 : 0;
  const zeroSeqRatio = magV1 > 0 ? (magV0 / magV1) * 100 : 0;

  // Localized strings
  const t = {
    en: {
      title: 'Symmetrical Components & Sequence Networks Visualizer',
      subtitle: 'Fortescue Transformation: Decoupling Unbalanced 3-Phase Quantities into [V₀, V₁, V₂]',
      presets: 'System Condition Presets',
      balanced: 'Balanced (V₂=0, V₀=0)',
      slgFault: 'Single-Phase Dip (SLG)',
      llFault: 'Phase-Phase Sag',
      brokenPhase: 'Open Conductor',
      phaseVoltages: 'Phase-Domain Phasors [Va, Vb, Vc]',
      mag: 'Magnitude',
      ang: 'Angle',
      sequenceComponents: 'Sequence-Domain Quantities',
      posSeq: 'Positive Sequence (V₁)',
      posSeqSub: 'Balanced ABC rotation, creates forward torque',
      negSeq: 'Negative Sequence (V₂)',
      negSeqSub: 'Counter-rotating ACB, creates severe rotor heating',
      zeroSeq: 'Zero Sequence (V₀)',
      zeroSeqSub: 'In-phase stationary, returns exclusively via neutral/earth',
      unbalanceIndex: 'Voltage Unbalance Factor (VUF = |V₂| / |V₁|)',
      zeroIndex: 'Zero Sequence Ratio (|V₀| / |V₁|)',
      nemaWarning: 'VUF exceeds 2% limit! Derating of induction motors required (NEMA MG-1).',
      healthyNotice: 'Balanced system: Negative and zero sequence components are virtually zero.'
    },
    hi: {
      title: 'सममितीय घटक एवं अनुक्रम नेटवर्क विश्लेषक',
      subtitle: 'फोर्टेस्क्यू रूपांतरण: असंतुलित 3-फेज राशियों का [V₀, V₁, V₂] में विघटन',
      presets: 'प्रणाली स्थिति प्रीसेट',
      balanced: 'संतुलित (V₂=0, V₀=0)',
      slgFault: 'सिंगल-फेज डिप (SLG)',
      llFault: 'फेज-फेज वोल्टेज गिरावट',
      brokenPhase: 'ओपन कंडक्टर (फेज हानि)',
      phaseVoltages: 'फेज राशियाँ [Va, Vb, Vc]',
      mag: 'परिमाण',
      ang: 'कोण',
      sequenceComponents: 'अनुक्रम घटक',
      posSeq: 'पॉजिटिव अनुक्रम (V₁)',
      posSeqSub: 'संतुलित ABC घूर्णन, मुख्य टॉर्क उत्पन्न करता है',
      negSeq: 'नेगेटिव अनुक्रम (V₂)',
      negSeqSub: 'विपरीत ACB घूर्णन, मोटर में गंभीर हीटिंग पैदा करता है',
      zeroSeq: 'जीरो अनुक्रम (V₀)',
      zeroSeqSub: 'समान कला, केवल न्यूट्रल/अर्थ पाथ से बहता है',
      unbalanceIndex: 'वोल्टेज असंतुलन कारक (VUF = |V₂| / |V₁|)',
      zeroIndex: 'जीरो अनुक्रम अनुपात (|V₀| / |V₁|)',
      nemaWarning: 'VUF 2% से अधिक है! मोटरों की रेटिंग घटाना आवश्यक है (NEMA मानक)।',
      healthyNotice: 'संतुलित प्रणाली: नेगेटिव एवं जीरो अनुक्रम घटक शून्य के करीब हैं।'
    },
    bn: {
      title: 'সিমেট্রিক্যাল উপাদান ও সিকোয়েন্স নেটওয়ার্ক বিশ্লেষক',
      subtitle: 'ফোরটেস্কু রূপান্তর: ভারসাম্যহীন ৩-ফেজ ভোল্টেজকে [V₀, V₁, V₂]-এ রূপান্তর',
      presets: 'সিস্টেম প্রিসেট',
      balanced: 'ব্যালেন্সড (V₂=০, V₀=০)',
      slgFault: 'সিঙ্গেল-ফেজ ড্রপ (SLG)',
      llFault: 'ফেজ-ফেজ স্যাগ',
      brokenPhase: 'ওপেন ফেজ (পরিবাহী বিচ্ছিন্ন)',
      phaseVoltages: 'ফেজ পরিমাপ [Va, Vb, Vc]',
      mag: 'মান',
      ang: 'কোণ',
      sequenceComponents: 'সিকোয়েন্স উপাদানসমূহ',
      posSeq: 'পজিটিভ সিকোয়েন্স (V₁)',
      posSeqSub: 'ভারসাম্যপূর্ণ ABC ঘূর্ণন, কার্যকরী টর্ক তৈরি করে',
      negSeq: 'নেগেটিভ সিকোয়েন্স (V₂)',
      negSeqSub: 'বিপরীতমুখী ACB ঘূর্ণন, মোটরে মারাত্মক উত্তাপ সৃষ্টি করে',
      zeroSeq: 'জিরো সিকোয়েন্স (V₀)',
      zeroSeqSub: 'অভিন্ন দশা, শুধুমাত্র নিউট্রাল বা আর্থ দিয়ে প্রবাহিত হয়',
      unbalanceIndex: 'ভোল্টেজ ভারসাম্যহীনতা অনুপাত (VUF = |V₂| / |V₁|)',
      zeroIndex: 'জিরো সিকোয়েন্স অনুপাত (|V₀| / |V₁|)',
      nemaWarning: 'VUF ২% এর বেশি! মোটরের কার্যক্ষমতা কমানো (ডি-রেটিং) আবশ্যক।',
      healthyNotice: 'ভারসাম্যপূর্ণ সিস্টেম: নেগেটিভ ও জিরো সিকোয়েন্স উপাদান প্রায় শূন্য।'
    }
  }[lang];

  // SVG parameters
  const center = 110;
  const scaleV = 80 / 300;
  const degToRad = (d: number) => (d * Math.PI) / 180;

  const toSvgCoords = (mag: number, deg: number) => {
    const r = Math.min(95, mag * scaleV);
    const rad = degToRad(deg);
    return {
      x: center + r * Math.cos(rad),
      y: center - r * Math.sin(rad)
    };
  };

  const pVa = toSvgCoords(magA, angA);
  const pVb = toSvgCoords(magB, angB);
  const pVc = toSvgCoords(magC, angC);

  const pV0 = toSvgCoords(magV0, degV0);
  const pV1 = toSvgCoords(magV1, degV1);
  const pV2 = toSvgCoords(magV2, degV2);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 max-w-5xl mx-auto shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-lg border border-indigo-500/20">
          <Layers className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">{t.title}</h3>
          <p className="text-xs text-slate-400">{t.subtitle}</p>
        </div>
      </div>

      {/* Presets Row */}
      <div className="mb-5 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
        <div className="text-xs text-slate-400 font-medium mb-2">{t.presets}</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <button
            type="button"
            onClick={() => applyPreset('balanced')}
            className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded text-xs font-medium text-center transition-colors"
          >
            {t.balanced}
          </button>
          <button
            type="button"
            onClick={() => applyPreset('slg')}
            className="py-1.5 px-2 bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 border border-amber-800/50 rounded text-xs font-medium text-center transition-colors"
          >
            {t.slgFault}
          </button>
          <button
            type="button"
            onClick={() => applyPreset('ll')}
            className="py-1.5 px-2 bg-rose-950/40 hover:bg-rose-900/50 text-rose-300 border border-rose-800/50 rounded text-xs font-medium text-center transition-colors"
          >
            {t.llFault}
          </button>
          <button
            type="button"
            onClick={() => applyPreset('broken')}
            className="py-1.5 px-2 bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 border border-purple-800/50 rounded text-xs font-medium text-center transition-colors"
          >
            {t.brokenPhase}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.phaseVoltages}</div>

          {/* Va */}
          <div className="space-y-1.5 border-l-2 border-red-500 pl-3">
            <div className="flex justify-between text-xs">
              <span className="text-red-400 font-semibold">Phase A (Va)</span>
              <span className="font-mono text-red-300">{magA}V ∠ {angA}°</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                id={`${controlId}-maga`}
                type="range"
                min="0"
                max="280"
                value={magA}
                onChange={(e) => setMagA(Number(e.target.value))}
                className="accent-red-500 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
              <input
                id={`${controlId}-anga`}
                type="range"
                min="0"
                max="359"
                value={angA}
                onChange={(e) => setAngA(Number(e.target.value))}
                className="accent-red-500 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Vb */}
          <div className="space-y-1.5 border-l-2 border-yellow-500 pl-3">
            <div className="flex justify-between text-xs">
              <span className="text-yellow-400 font-semibold">Phase B (Vb)</span>
              <span className="font-mono text-yellow-300">{magB}V ∠ {angB}°</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                id={`${controlId}-magb`}
                type="range"
                min="0"
                max="280"
                value={magB}
                onChange={(e) => setMagB(Number(e.target.value))}
                className="accent-yellow-500 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
              <input
                id={`${controlId}-angb`}
                type="range"
                min="0"
                max="359"
                value={angB}
                onChange={(e) => setAngB(Number(e.target.value))}
                className="accent-yellow-500 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Vc */}
          <div className="space-y-1.5 border-l-2 border-blue-500 pl-3">
            <div className="flex justify-between text-xs">
              <span className="text-blue-400 font-semibold">Phase C (Vc)</span>
              <span className="font-mono text-blue-300">{magC}V ∠ {angC}°</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <input
                id={`${controlId}-magc`}
                type="range"
                min="0"
                max="280"
                value={magC}
                onChange={(e) => setMagC(Number(e.target.value))}
                className="accent-blue-500 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
              <input
                id={`${controlId}-angc`}
                type="range"
                min="0"
                max="359"
                value={angC}
                onChange={(e) => setAngC(Number(e.target.value))}
                className="accent-blue-500 bg-slate-800 h-1.5 rounded cursor-pointer"
              />
            </div>
          </div>

          {/* Mathematical Matrix Representation */}
          <div className="p-3 bg-slate-900 rounded border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
            <div className="text-indigo-400 font-bold">Fortescue Synthesis Matrix:</div>
            <div>[V₀] = ⅓ (Va + Vb + Vc)</div>
            <div>[V₁] = ⅓ (Va + a·Vb + a²·Vc)</div>
            <div>[V₂] = ⅓ (Va + a²·Vb + a·Vc)</div>
            <div className="text-slate-500 text-[10px] pt-1">where a = 1∠120° = -0.5 + j0.866</div>
          </div>
        </div>

        {/* Output & SVG Column */}
        <div className="lg:col-span-7 space-y-4">
          {/* Visualizers Comparison: Phase Domain vs Sequence Domain */}
          <div className="grid grid-cols-2 gap-3">
            {/* Phase Phasors */}
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex flex-col items-center">
              <span className="text-[11px] font-mono text-slate-400 mb-1">Unbalanced Phase Phasors</span>
              <svg viewBox="0 0 220 220" className="w-44 h-44">
                <circle cx={center} cy={center} r="30" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2" />
                <circle cx={center} cy={center} r="65" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2" />
                <circle cx={center} cy={center} r="95" fill="none" stroke="#334155" strokeWidth="1" />
                <line x1={center - 100} y1={center} x2={center + 100} y2={center} stroke="#1e293b" strokeWidth="1" />
                <line x1={center} y1={center - 100} x2={center} y2={center + 100} stroke="#1e293b" strokeWidth="1" />

                {/* Va */}
                <line x1={center} y1={center} x2={pVa.x} y2={pVa.y} stroke="#ef4444" strokeWidth="2.5" />
                <circle cx={pVa.x} cy={pVa.y} r="3" fill="#ef4444" />
                <text x={pVa.x + 5} y={pVa.y} fill="#ef4444" fontSize="9" fontWeight="bold">Va</text>

                {/* Vb */}
                <line x1={center} y1={center} x2={pVb.x} y2={pVb.y} stroke="#eab308" strokeWidth="2.5" />
                <circle cx={pVb.x} cy={pVb.y} r="3" fill="#eab308" />
                <text x={pVb.x - 14} y={pVb.y + 6} fill="#eab308" fontSize="9" fontWeight="bold">Vb</text>

                {/* Vc */}
                <line x1={center} y1={center} x2={pVc.x} y2={pVc.y} stroke="#3b82f6" strokeWidth="2.5" />
                <circle cx={pVc.x} cy={pVc.y} r="3" fill="#3b82f6" />
                <text x={pVc.x - 14} y={pVc.y - 4} fill="#3b82f6" fontSize="9" fontWeight="bold">Vc</text>

                <circle cx={center} cy={center} r="2.5" fill="#f8fafc" />
              </svg>
            </div>

            {/* Sequence Phasors */}
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex flex-col items-center">
              <span className="text-[11px] font-mono text-slate-400 mb-1">Decoupled Sequence [V₀, V₁, V₂]</span>
              <svg viewBox="0 0 220 220" className="w-44 h-44">
                <circle cx={center} cy={center} r="30" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2" />
                <circle cx={center} cy={center} r="65" fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2" />
                <circle cx={center} cy={center} r="95" fill="none" stroke="#334155" strokeWidth="1" />
                <line x1={center - 100} y1={center} x2={center + 100} y2={center} stroke="#1e293b" strokeWidth="1" />
                <line x1={center} y1={center - 100} x2={center} y2={center + 100} stroke="#1e293b" strokeWidth="1" />

                {/* V1 (Positive - Emerald) */}
                <line x1={center} y1={center} x2={pV1.x} y2={pV1.y} stroke="#10b981" strokeWidth="2.5" />
                <circle cx={pV1.x} cy={pV1.y} r="3" fill="#10b981" />
                <text x={pV1.x + 5} y={pV1.y - 4} fill="#10b981" fontSize="9" fontWeight="bold">V₁ (+)</text>

                {/* V2 (Negative - Rose) */}
                <line x1={center} y1={center} x2={pV2.x} y2={pV2.y} stroke="#f43f5e" strokeWidth="2" strokeDasharray="3,2" />
                <circle cx={pV2.x} cy={pV2.y} r="3" fill="#f43f5e" />
                <text x={pV2.x + 5} y={pV2.y + 10} fill="#f43f5e" fontSize="9" fontWeight="bold">V₂ (-)</text>

                {/* V0 (Zero - Violet) */}
                <line x1={center} y1={center} x2={pV0.x} y2={pV0.y} stroke="#a855f7" strokeWidth="2" strokeDasharray="2,2" />
                <circle cx={pV0.x} cy={pV0.y} r="3" fill="#a855f7" />
                <text x={pV0.x - 18} y={pV0.y + 4} fill="#a855f7" fontSize="9" fontWeight="bold">V₀ (0)</text>

                <circle cx={center} cy={center} r="2.5" fill="#f8fafc" />
              </svg>
            </div>
          </div>

          {/* Sequence Components Data Cards */}
          <div className="grid grid-cols-3 gap-2.5">
            {/* V1 */}
            <div className="bg-slate-950/80 p-2.5 rounded-lg border border-emerald-900/40">
              <span className="text-[10px] text-emerald-400 font-semibold block">{t.posSeq}</span>
              <div className="text-base font-bold font-mono text-emerald-300">
                {magV1.toFixed(1)} <span className="text-xs font-normal">V</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">∠ {degV1.toFixed(1)}°</div>
              <div className="text-[9px] text-slate-500 mt-1 line-clamp-1">{t.posSeqSub}</div>
            </div>

            {/* V2 */}
            <div className="bg-slate-950/80 p-2.5 rounded-lg border border-rose-900/40">
              <span className="text-[10px] text-rose-400 font-semibold block">{t.negSeq}</span>
              <div className="text-base font-bold font-mono text-rose-300">
                {magV2.toFixed(1)} <span className="text-xs font-normal">V</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">∠ {degV2.toFixed(1)}°</div>
              <div className="text-[9px] text-slate-500 mt-1 line-clamp-1">{t.negSeqSub}</div>
            </div>

            {/* V0 */}
            <div className="bg-slate-950/80 p-2.5 rounded-lg border border-purple-900/40">
              <span className="text-[10px] text-purple-400 font-semibold block">{t.zeroSeq}</span>
              <div className="text-base font-bold font-mono text-purple-300">
                {magV0.toFixed(1)} <span className="text-xs font-normal">V</span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">∠ {degV0.toFixed(1)}°</div>
              <div className="text-[9px] text-slate-500 mt-1 line-clamp-1">{t.zeroSeqSub}</div>
            </div>
          </div>

          {/* Status & Unbalance Indices */}
          <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300">{t.unbalanceIndex}</span>
              <span className={`font-mono font-bold text-sm ${unbalanceRatio > 2.0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {unbalanceRatio.toFixed(2)} %
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-300">{t.zeroIndex}</span>
              <span className="font-mono text-purple-400 font-semibold text-xs">
                {zeroSeqRatio.toFixed(2)} %
              </span>
            </div>

            {unbalanceRatio > 2.0 ? (
              <div className="flex items-center gap-2 p-2 bg-rose-950/40 border border-rose-800/50 rounded text-rose-300 text-[11px]">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{t.nemaWarning}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 p-2 bg-emerald-950/30 border border-emerald-800/40 rounded text-emerald-300 text-[11px]">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{t.healthyNotice}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
