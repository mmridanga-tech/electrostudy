import React, { useState } from 'react';
import { Sliders, BatteryCharging, ShieldAlert } from 'lucide-react';
import { Language } from '../../types';
import { InteractiveSimulationCard } from './InteractiveSimulationCard';

interface EmfAnimationProps {
  currentLanguage: Language;
}

const TRANSLATIONS = {
  en: {
    title: 'EMF, Terminal Voltage & Internal Resistance',
    subtitle: 'Understand the difference between source Electromotive Force (E) and actual Terminal Voltage (V_terminal) under load.',
    emfLabel: 'Source EMF (E)',
    internalR: 'Internal Resistance (r)',
    loadR: 'External Load (R)',
    terminalVoltage: 'Terminal Voltage (V_term)',
    current: 'Circuit Current (I)',
    internalLoss: 'Internal Voltage Drop (I·r)',
    chemicalConversion: 'Chemical Energy → Electrical Energy',
    calloutTitle: 'EMF vs Terminal Voltage',
    calloutText: 'Electromotive Force (E) is the total energy supplied by a source per unit charge on open circuit. Under load, internal resistance (r) causes an internal voltage drop (I·r), resulting in a lower Terminal Voltage (V_term = E - I·r).',
    formulaText: 'I = E / (R + r)   ⇒   V_{terminal} = E - I·r',
  },
  hi: {
    title: 'विद्युत वाहक बल (EMF), टर्मिनल वोल्टेज एवं आंतरिक प्रतिरोध',
    subtitle: 'लोड के तहत स्रोत के विद्युत वाहक बल (E) और वास्तविक टर्मिनल वोल्टेज (V_terminal) के बीच अंतर को समझें।',
    emfLabel: 'स्रोत विद्युत वाहक बल (E)',
    internalR: 'आंतरिक प्रतिरोध (r)',
    loadR: 'बाहरी लोड प्रतिरोध (R)',
    terminalVoltage: 'टर्मिनल वोल्टेज (V_term)',
    current: 'परिपथ धारा (I)',
    internalLoss: 'आंतरिक वोल्टेज हानि (I·r)',
    chemicalConversion: 'रासायनिक ऊर्जा → विद्युत ऊर्जा',
    calloutTitle: 'EMF बनाम टर्मिनल वोल्टेज',
    calloutText: 'विद्युत वाहक बल (E) खुले परिपथ पर प्रति इकाई आवेश स्रोत द्वारा दी गई कुल ऊर्जा है। लोड के तहत, आंतरिक प्रतिरोध (r) के कारण आंतरिक वोल्टेज हानि (I·r) होती है, जिससे टर्मिनल वोल्टेज घट जाता है (V_term = E - I·r)।',
    formulaText: 'I = E / (R + r)   ⇒   V_{terminal} = E - I·r',
  },
  bn: {
    title: 'বিদ্যুৎ চালক বল (EMF), টার্মিনাল ভোল্টেজ ও অভ্যন্তরীণ রোধ',
    subtitle: 'লোড অবস্থায় উৎসের বিদ্যুৎ চালক বল (E) এবং প্রকৃত টার্মিনাল ভোল্টেজের (V_terminal) পার্থক্য বুঝুন।',
    emfLabel: 'উৎস EMF (E)',
    internalR: 'অভ্যন্তরীণ রোধ (r)',
    loadR: 'বহিঃস্থ লোড (R)',
    terminalVoltage: 'টার্মিনাল ভোল্টেজ (V_term)',
    current: 'সার্কিট কারেন্ট (I)',
    internalLoss: 'অভ্যন্তরীণ ভোল্টেজ ড্রপ (I·r)',
    chemicalConversion: 'রাসায়নিক শক্তি → তড়িৎ শক্তি',
    calloutTitle: 'EMF বনাম টার্মিনাল ভোল্টেজ',
    calloutText: 'বিদ্যুৎ চালক বল (E) হলো মুক্ত বর্তনীতে উৎস দ্বারা প্রতি একক আধানকে দেওয়া মোট শক্তি। লোড যুক্ত থাকলে, অভ্যন্তরীণ রোধের (r) কারণে কিছু ভোল্টেজ অপচয় (I·r) হয়, ফলে টার্মিনাল ভোল্টেজ কমে যায় (V_term = E - I·r)।',
    formulaText: 'I = E / (R + r)   ⇒   V_{terminal} = E - I·r',
  }
};

export const EmfAnimation: React.FC<EmfAnimationProps> = ({ currentLanguage }) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;

  const [emfVal, setEmfVal] = useState<number>(12); // 1 to 24 V
  const [internalR, setInternalR] = useState<number>(2); // 0 to 10 Ω
  const [loadR, setLoadR] = useState<number>(10); // 1 to 50 Ω

  const current = emfVal / (loadR + internalR);
  const vInternal = current * internalR;
  const vTerminal = emfVal - vInternal;

  const handleReset = () => {
    setEmfVal(12);
    setInternalR(2);
    setLoadR(10);
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
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Diagram Canvas */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            <span>Battery Model with Internal Resistance</span>
            <span className="text-amber-400 font-bold font-mono">V_term = {vTerminal.toFixed(2)} V</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center relative min-h-[220px]">
            <svg viewBox="0 0 340 200" className="w-full max-w-md h-52 select-none">
              {/* Outer Circuit Line */}
              <rect x="40" y="30" width="260" height="140" rx="10" fill="none" stroke="#334155" strokeWidth="4" />

              {/* Dotted Battery Box (Includes ideal source E + internal resistance r) */}
              <rect x="25" y="55" width="130" height="90" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" rx="6" />
              <text x="90" y="70" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold" fontFamily="monospace">
                Real Battery Source
              </text>

              {/* Ideal EMF Cell inside battery */}
              <g transform="translate(55, 100)">
                <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
                <text x="0" y="4" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  E={emfVal}V
                </text>
              </g>

              {/* Internal Resistance r inside battery */}
              <g transform="translate(115, 100)">
                <rect x="-18" y="-10" width="36" height="20" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" rx="3" />
                <text x="0" y="3" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="bold" fontFamily="monospace">
                  r={internalR}Ω
                </text>
              </g>

              {/* External Load R */}
              <g transform="translate(290, 100)">
                <rect x="-14" y="-25" width="28" height="50" fill="#1e293b" stroke="#10b981" strokeWidth="2" rx="4" />
                <text x="0" y="4" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold" fontFamily="monospace">
                  R={loadR}Ω
                </text>
                <text x="24" y="4" textAnchor="start" fill="#34d399" fontSize="10" fontWeight="bold">Load</text>
              </g>

              {/* Terminal Terminals (A and B) */}
              <circle cx="155" cy="30" r="4" fill="#f59e0b" />
              <text x="155" y="22" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Term A (+)</text>

              <circle cx="155" cy="170" r="4" fill="#3b82f6" />
              <text x="155" y="185" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">Term B (-)</text>

              {/* Chemical Energy Arrow inside battery */}
              <text x="90" y="132" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="sans-serif">
                {t.chemicalConversion}
              </text>
            </svg>

            {/* Readouts */}
            <div className="grid grid-cols-4 gap-1.5 w-full mt-2 text-center text-xs">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Ideal EMF (E)</div>
                <div className="text-xs font-bold text-cyan-300 font-mono">{emfVal} V</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Current (I)</div>
                <div className="text-xs font-bold text-amber-300 font-mono">{current.toFixed(2)} A</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Internal Drop (I·r)</div>
                <div className="text-xs font-bold text-rose-400 font-mono">{vInternal.toFixed(2)} V</div>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="text-[9px] text-slate-400 font-mono">Terminal (V_term)</div>
                <div className="text-xs font-bold text-emerald-300 font-mono">{vTerminal.toFixed(2)} V</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 print-hidden">
            {/* EMF Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-cyan-300">
                <span>{t.emfLabel}</span>
                <span className="font-mono">{emfVal} V</span>
              </div>
              <input
                type="range"
                min={1}
                max={24}
                value={emfVal}
                onChange={(e) => setEmfVal(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                aria-label="EMF slider"
              />
            </div>

            {/* Internal Resistance r Slider */}
            <div className="space-y-1 border-t border-slate-800/80 pt-2">
              <div className="flex justify-between text-xs font-bold text-rose-400">
                <span>{t.internalR}</span>
                <span className="font-mono">{internalR} Ω</span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                step={0.5}
                value={internalR}
                onChange={(e) => setInternalR(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                aria-label="Internal resistance slider"
              />
            </div>

            {/* External Load R Slider */}
            <div className="space-y-1 border-t border-slate-800/80 pt-2">
              <div className="flex justify-between text-xs font-bold text-emerald-300">
                <span>{t.loadR}</span>
                <span className="font-mono">{loadR} Ω</span>
              </div>
              <input
                type="range"
                min={1}
                max={50}
                value={loadR}
                onChange={(e) => setLoadR(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                aria-label="Load resistance slider"
              />
            </div>
          </div>
        </div>
      </div>
    </InteractiveSimulationCard>
  );
};
