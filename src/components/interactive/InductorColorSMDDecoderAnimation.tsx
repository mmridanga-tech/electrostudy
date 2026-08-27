import React, { useState } from 'react';
import { Language } from '../../types';
import { Palette, CheckCircle2, Hash, Zap } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const InductorColorSMDDecoderAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [band1, setBand1] = useState<number>(4); // Yellow (4)
  const [band2, setBand2] = useState<number>(7); // Violet (7)
  const [multiplier, setMultiplier] = useState<number>(1); // Brown (x10^1 = x10) => 470 μH
  const [tolerance, setTolerance] = useState<number>(10); // Silver (±10%)

  const [smdCode, setSmdCode] = useState<string>('4R7');

  // Color values
  const digitColors = [
    { name: 'Black', val: 0, bg: '#000000', text: '#ffffff' },
    { name: 'Brown', val: 1, bg: '#8B4513', text: '#ffffff' },
    { name: 'Red', val: 2, bg: '#EF4444', text: '#ffffff' },
    { name: 'Orange', val: 3, bg: '#F97316', text: '#ffffff' },
    { name: 'Yellow', val: 4, bg: '#EAB308', text: '#000000' },
    { name: 'Green', val: 5, bg: '#22C55E', text: '#000000' },
    { name: 'Blue', val: 6, bg: '#3B82F6', text: '#ffffff' },
    { name: 'Violet', val: 7, bg: '#A855F7', text: '#ffffff' },
    { name: 'Gray', val: 8, bg: '#6B7280', text: '#ffffff' },
    { name: 'White', val: 9, bg: '#F3F4F6', text: '#000000' },
  ];

  const multiplierColors = [
    { name: 'Black (×1)', val: 0, factor: 1, bg: '#000000', text: '#ffffff' },
    { name: 'Brown (×10)', val: 1, factor: 10, bg: '#8B4513', text: '#ffffff' },
    { name: 'Red (×100)', val: 2, factor: 100, bg: '#EF4444', text: '#ffffff' },
    { name: 'Orange (×1k)', val: 3, factor: 1000, bg: '#F97316', text: '#ffffff' },
    { name: 'Gold (×0.1)', val: -1, factor: 0.1, bg: '#D4AF37', text: '#000000' },
    { name: 'Silver (×0.01)', val: -2, factor: 0.01, bg: '#C0C0C0', text: '#000000' },
  ];

  const toleranceColors = [
    { name: 'Black (±20%)', tol: 20, bg: '#000000', text: '#ffffff' },
    { name: 'Silver (±10%)', tol: 10, bg: '#C0C0C0', text: '#000000' },
    { name: 'Gold (±5%)', tol: 5, bg: '#D4AF37', text: '#000000' },
    { name: 'Brown (±1%)', tol: 1, bg: '#8B4513', text: '#ffffff' },
  ];

  // Axial value calculation (Standard Inductor Base Unit = Microhenries μH)
  const multObj = multiplierColors.find(m => m.val === multiplier) || multiplierColors[0];
  const valueMicroHenries = (band1 * 10 + band2) * multObj.factor;

  const formatInductance = (uH: number) => {
    if (uH >= 1000) {
      return `${(uH / 1000).toFixed(2)} mH (${uH.toLocaleString()} μH)`;
    }
    return `${uH.toFixed(2)} μH`;
  };

  // Decode SMD Code
  const decodeSMD = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean.includes('R')) {
      return `${parseFloat(clean.replace('R', '.'))} μH`;
    }
    if (clean.length === 3 && !isNaN(Number(clean))) {
      const d1 = parseInt(clean[0]);
      const d2 = parseInt(clean[1]);
      const exp = parseInt(clean[2]);
      const uH = (d1 * 10 + d2) * Math.pow(10, exp);
      return formatInductance(uH);
    }
    return 'Invalid Code';
  };

  const t = {
    title: {
      en: 'Inductor EIA Color Band & SMD Code Decoder',
      hi: 'इंडक्टर कलर कोड एवं SMD मार्किंग डिकोडर',
      bn: 'ইন্ডাক্টর কালার কোড ও SMD মার্কিং ডিকোডার'
    },
    band1Label: { en: '1st Digit', hi: 'पहला अंक', bn: '১ম অঙ্ক' },
    band2Label: { en: '2nd Digit', hi: 'दूसरा अंक', bn: '২য় অঙ্ক' },
    multLabel: { en: 'Multiplier (μH)', hi: 'गुणक (μH)', bn: 'গুণক (μH)' },
    tolLabel: { en: 'Tolerance', hi: 'सहनशीलता (टॉलरेंस)', bn: 'টলারেন্স' },
    calculatedVal: { en: 'Decoded Inductance:', hi: 'डिकोड किया गया प्रेरकत्व:', bn: 'ডিকোডকৃত ইন্ডাক্ট্যান্স:' },
    smdTitle: { en: 'SMD Power Inductor Marking Decoder', hi: 'SMD पावर इंडक्टर मार्किंग ডिकोडर', bn: 'SMD পাওয়ার ইন্ডাক্টর মার্কিং ডিকোডার' }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Palette className="w-6 h-6 text-amber-400" />
          <h3 className="font-bold text-lg text-slate-100">{t.title[lang]}</h3>
        </div>
      </div>

      {/* Visual Axial Inductor Graphic */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-lg p-4 h-48 flex items-center justify-center overflow-hidden mb-5">
        <svg className="w-full h-full max-w-md" viewBox="0 0 400 160">
          {/* Wire Leads */}
          <line x1="20" y1="80" x2="110" y2="80" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
          <line x1="290" y1="80" x2="380" y2="80" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />

          {/* Inductor Body (Coated Green/Cyan or Tan) */}
          <rect x="110" y="45" width="180" height="70" rx="20" fill="#065f46" stroke="#047857" strokeWidth="3" />

          {/* Color Bands */}
          {/* Band 1 */}
          <rect x="145" y="45" width="14" height="70" fill={digitColors[band1].bg} />
          {/* Band 2 */}
          <rect x="175" y="45" width="14" height="70" fill={digitColors[band2].bg} />
          {/* Multiplier */}
          <rect x="205" y="45" width="14" height="70" fill={multObj.bg} />
          {/* Tolerance (spaced further) */}
          <rect x="245" y="45" width="14" height="70" fill={toleranceColors.find(tc => tc.tol === tolerance)?.bg || '#D4AF37'} />
        </svg>
      </div>

      {/* Result Display Banner */}
      <div className="bg-slate-800/90 border border-slate-700 rounded-lg p-4 mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs text-slate-400 block">{t.calculatedVal[lang]}</span>
          <span className="text-2xl font-black text-amber-400 tracking-wide">
            {formatInductance(valueMicroHenries)}
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs text-slate-400 block">{t.tolLabel[lang]}</span>
          <span className="text-lg font-bold text-sky-400">±{tolerance}%</span>
        </div>
      </div>

      {/* Color Selection Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {/* Band 1 */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.band1Label[lang]}</label>
          <select
            value={band1}
            onChange={e => setBand1(parseInt(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-amber-500"
          >
            {digitColors.map(c => (
              <option key={c.val} value={c.val}>
                {c.val} - {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Band 2 */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.band2Label[lang]}</label>
          <select
            value={band2}
            onChange={e => setBand2(parseInt(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-amber-500"
          >
            {digitColors.map(c => (
              <option key={c.val} value={c.val}>
                {c.val} - {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Multiplier */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.multLabel[lang]}</label>
          <select
            value={multiplier}
            onChange={e => setMultiplier(parseInt(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-amber-500"
          >
            {multiplierColors.map(m => (
              <option key={m.val} value={m.val}>
                {m.name}
              </option>
            ))}
          </select>
        </div>

        {/* Tolerance */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">{t.tolLabel[lang]}</label>
          <select
            value={tolerance}
            onChange={e => setTolerance(parseInt(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-amber-500"
          >
            {toleranceColors.map(tc => (
              <option key={tc.tol} value={tc.tol}>
                {tc.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* SMD Inductor Decoder Section */}
      <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <Hash className="w-5 h-5 text-sky-400" />
          <h4 className="font-bold text-sm text-slate-200">{t.smdTitle[lang]}</h4>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-300">Enter Code (e.g. 4R7, 100, 221, 102):</span>
            <input
              type="text"
              value={smdCode}
              onChange={e => setSmdCode(e.target.value.toUpperCase())}
              maxLength={4}
              className="bg-slate-900 border border-slate-600 rounded px-3 py-1 text-sm font-mono font-bold text-amber-400 w-24 text-center"
            />
          </div>
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded border border-slate-700">
            <span className="text-xs text-slate-400">Decoded:</span>
            <span className="text-sm font-bold text-emerald-400">{decodeSMD(smdCode)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
