import React, { useState } from 'react';
import { Language } from '../../types';
import { Activity, Zap, Play, Pause, Layers } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const HysteresisBHCurveAnimation: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [material, setMaterial] = useState<'silicon-steel' | 'ferrite' | 'hard-steel'>('silicon-steel');
  const [H_peak, setHPeak] = useState<number>(400); // Magnetizing force A/m
  const [frequency, setFrequency] = useState<number>(50); // Hz

  // Material parameters
  const matParams = {
    'silicon-steel': {
      name: { en: 'Silicon Steel (Transformer Core)', hi: 'सिलिकॉन स्टील (ट्रांसफॉर्मर कोर)', bn: 'সিলিকন স্টিল (ট্রান্সফরমার কোর)' },
      B_sat: 1.6, // Tesla
      B_r: 1.2,   // Remanence
      H_c: 40,    // Coercivity (A/m) - narrow loop
      steinmetz_eta: 1.5,
    },
    'ferrite': {
      name: { en: 'MnZn Power Ferrite (High Frequency)', hi: 'MnZn पावर फेराइट', bn: 'MnZn পাওয়ার ফেরাইট' },
      B_sat: 0.45,
      B_r: 0.25,
      H_c: 15,
      steinmetz_eta: 0.8,
    },
    'hard-steel': {
      name: { en: 'Hard Carbon Steel (Permanent Magnet)', hi: 'हार्ड कार्बन स्टील (स्थायी चुंबক)', bn: 'হার্ড কার্বন স্টিল (স্থায়ী চুম্বক)' },
      B_sat: 1.2,
      B_r: 0.9,
      H_c: 250, // Wide loop
      steinmetz_eta: 4.0,
    }
  };

  const currentMat = matParams[material];
  const B_operating = Math.min(currentMat.B_sat, (H_peak / 300) * currentMat.B_sat);
  // Steinmetz core loss P_h = η * f * B_max^1.6 (W/kg approx)
  const hysteresisLoss = currentMat.steinmetz_eta * (frequency / 50) * Math.pow(B_operating, 1.6);

  // Generate B-H Loop SVG Path
  const generateBHPath = () => {
    const cx = 200;
    const cy = 110;
    const scaleX = 140 / 500;
    const scaleY = 80 / currentMat.B_sat;

    const bSat = currentMat.B_sat * scaleY;
    const br = currentMat.B_r * scaleY;
    const hc = currentMat.H_c * scaleX;
    const hMax = H_peak * scaleX;

    // S-curve loop points
    return `M ${cx + hMax} ${cy - bSat}
      Q ${cx + hMax * 0.3} ${cy - bSat * 0.95}, ${cx} ${cy - br}
      Q ${cx - hc * 0.6} ${cy - br * 0.6}, ${cx - hc} ${cy}
      Q ${cx - hc * 1.4} ${cy + br * 0.5}, ${cx - hMax} ${cy + bSat}
      Q ${cx - hMax * 0.3} ${cy + bSat * 0.95}, ${cx} ${cy + br}
      Q ${cx + hc * 0.6} ${cy + br * 0.6}, ${cx + hc} ${cy}
      Q ${cx + hc * 1.4} ${cy - br * 0.5}, ${cx + hMax} ${cy - bSat} Z`;
  };

  const t = {
    title: {
      en: 'Magnetic Hysteresis (B-H Curve) & Core Loss Simulator',
      hi: 'चुंबकीय हिस्टैरिसीस (B-H वक्र) एवं कोर हानि सिम्युलेटर',
      bn: 'চৌম্বক হিস্টেরেসিস (B-H কার্ভ) ও কোর লস সিমুলেটর'
    },
    materialLabel: {
      en: 'Magnetic Material:',
      hi: 'चुंबकीय पदार्थ:',
      bn: 'চৌম্বক উপাদান:'
    },
    retentivity: {
      en: 'Remanence / Retentivity (B_r):',
      hi: 'अवशिष्ट चुंबकत्व (B_r):',
      bn: 'অবশিষ্ট চুম্বকত্ব (B_r):'
    },
    coercivity: {
      en: 'Coercive Force (H_c):',
      hi: 'निग्रह बल (H_c):',
      bn: 'কোয়ারসিভ বল (H_c):'
    },
    coreLoss: {
      en: 'Hysteresis Loss (P_h):',
      hi: 'हिस्टैरिसीस हानि (P_h):',
      bn: 'হিস্টেরেসিস অপচয় (P_h):'
    },
    satDensity: {
      en: 'Saturation Flux (B_sat):',
      hi: 'संतृप्ति फ्लक्स (B_sat):',
      bn: 'স্যাচুরেশন ফ্লাক্স (B_sat):'
    },
    loopAreaNote: {
      en: 'Loop Area = Energy lost as heat per AC cycle per unit volume (∮ H dB). Silicon steel has a very narrow loop for minimal heat dissipation!',
      hi: 'लूप क्षेत्रफल = प्रति एसी चक्र ऊष्मा के रूप में नष्ट ऊर्जा (∮ H dB)। सिलिकॉन स्टील में न्यूनतम ताप हानि के लिए बहुत संकीर्ण लूप होता है!',
      bn: 'লুপের ক্ষেত্রফল = প্রতি এসি চক্রে তাপ আকারে অপচয় হওয়া শক্তি (∮ H dB)। সিলিকন স্টিলের লুপ অতি সংকীর্ণ হওয়ায় কোর লস সবচেয়ে কম হয়!'
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 text-white shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-6 h-6 text-amber-400" />
          <h3 className="font-bold text-lg text-slate-100">{t.title[lang]}</h3>
        </div>
      </div>

      {/* Material Selector Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
        {(['silicon-steel', 'ferrite', 'hard-steel'] as const).map(mat => (
          <button
            key={mat}
            onClick={() => setMaterial(mat)}
            className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all text-left ${
              material === mat
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-md'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {matParams[mat].name[lang]}
          </button>
        ))}
      </div>

      {/* Main Visual B-H Graph Canvas */}
      <div className="relative bg-slate-950 border border-slate-800 rounded-lg p-4 h-64 flex items-center justify-center overflow-hidden mb-4">
        <svg className="w-full h-full" viewBox="0 0 400 220">
          {/* Coordinate Axes */}
          <line x1="40" y1="110" x2="360" y2="110" stroke="#475569" strokeWidth="1.5" />
          <line x1="200" y1="20" x2="200" y2="200" stroke="#475569" strokeWidth="1.5" />

          {/* Axis Labels */}
          <text x="365" y="114" fill="#38bdf8" fontSize="11" fontWeight="bold">
            +H (A/m)
          </text>
          <text x="15" y="114" fill="#94a3b8" fontSize="11">
            -H
          </text>
          <text x="205" y="24" fill="#f59e0b" fontSize="11" fontWeight="bold">
            +B (Tesla)
          </text>
          <text x="205" y="200" fill="#94a3b8" fontSize="11">
            -B
          </text>

          {/* Hysteresis Loop Path */}
          <path
            d={generateBHPath()}
            fill={material === 'hard-steel' ? 'rgba(239, 68, 68, 0.25)' : 'rgba(245, 158, 11, 0.25)'}
            stroke={material === 'hard-steel' ? '#ef4444' : '#f59e0b'}
            strokeWidth="2.5"
          />

          {/* Key Point Annotations */}
          {/* Retentivity Point Br on +Y axis */}
          <circle cx="200" cy={110 - currentMat.B_r * (80 / currentMat.B_sat)} r="4" fill="#10b981" />
          <text
            x="210"
            y={110 - currentMat.B_r * (80 / currentMat.B_sat) + 4}
            fill="#10b981"
            fontSize="10"
            fontWeight="bold"
          >
            B_r ({currentMat.B_r}T)
          </text>

          {/* Coercivity Point Hc on -X axis */}
          <circle cx={200 - currentMat.H_c * (140 / 500)} cy="110" r="4" fill="#ef4444" />
          <text
            x={190 - currentMat.H_c * (140 / 500)}
            y="125"
            fill="#ef4444"
            fontSize="10"
            fontWeight="bold"
            textAnchor="end"
          >
            -H_c ({currentMat.H_c}A/m)
          </text>

          {/* Saturation Point Bsat */}
          <circle cx={200 + H_peak * (140 / 500)} cy={110 - currentMat.B_sat * (80 / currentMat.B_sat)} r="4" fill="#38bdf8" />
          <text
            x={205 + H_peak * (140 / 500)}
            y={105 - currentMat.B_sat * (80 / currentMat.B_sat)}
            fill="#38bdf8"
            fontSize="10"
            fontWeight="bold"
          >
            B_sat
          </text>
        </svg>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-slate-800/80 p-3 rounded-lg border border-slate-700 mb-4">
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{t.satDensity[lang]}</span>
          <span className="text-base font-bold text-sky-400">
            {currentMat.B_sat.toFixed(2)} <span className="text-xs font-normal">Tesla</span>
          </span>
        </div>
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{t.retentivity[lang]}</span>
          <span className="text-base font-bold text-emerald-400">
            {currentMat.B_r.toFixed(2)} <span className="text-xs font-normal">Tesla</span>
          </span>
        </div>
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{t.coercivity[lang]}</span>
          <span className="text-base font-bold text-rose-400">
            {currentMat.H_c} <span className="text-xs font-normal">A/m</span>
          </span>
        </div>
        <div className="p-2 bg-slate-900/60 rounded border border-slate-700/60">
          <span className="text-xs text-slate-400 block">{t.coreLoss[lang]}</span>
          <span className="text-base font-bold text-amber-400">
            {hysteresisLoss.toFixed(2)} <span className="text-xs font-normal">W/kg</span>
          </span>
        </div>
      </div>

      {/* Educational Note */}
      <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 text-xs text-slate-300 mb-4 leading-relaxed">
        {t.loopAreaNote[lang]}
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700">
        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
            <span>Peak Magnetizing Force (H_peak):</span>
            <span className="text-sky-400">{H_peak} A/m</span>
          </div>
          <input
            type="range"
            min="100"
            max="600"
            step="20"
            value={H_peak}
            onChange={e => setHPeak(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
            <span>AC Frequency (f):</span>
            <span className="text-amber-400">{frequency} Hz</span>
          </div>
          <input
            type="range"
            min="10"
            max="400"
            step="10"
            value={frequency}
            onChange={e => setFrequency(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
        </div>
      </div>
    </div>
  );
};
