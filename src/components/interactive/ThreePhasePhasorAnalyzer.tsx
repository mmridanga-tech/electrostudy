import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Activity, Compass, Zap, Layers, RefreshCw } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const ThreePhasePhasorAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Inputs
  const [lineVoltage, setLineVoltage] = useState<number>(415); // Volts
  const [lineCurrent, setLineCurrent] = useState<number>(50); // Amperes
  const [powerFactor, setPowerFactor] = useState<number>(0.85);
  const [isLagging, setIsLagging] = useState<boolean>(true);
  const [isPositiveSeq, setIsPositiveSeq] = useState<boolean>(true); // ABC vs ACB
  const [connectionType, setConnectionType] = useState<'star' | 'delta'>('star');

  // Mathematical Relationships
  const phiRad = Math.acos(Math.min(1, Math.max(0, powerFactor)));
  const phiDeg = (phiRad * 180) / Math.PI * (isLagging ? -1 : 1);

  // Star vs Delta values
  const phaseVoltage = connectionType === 'star' ? lineVoltage / Math.sqrt(3) : lineVoltage;
  const phaseCurrent = connectionType === 'star' ? lineCurrent : lineCurrent / Math.sqrt(3);

  // Total 3-phase Powers
  const activePowerKw = (Math.sqrt(3) * lineVoltage * lineCurrent * powerFactor) / 1000;
  const reactivePowerKvar = (Math.sqrt(3) * lineVoltage * lineCurrent * Math.sin(phiRad)) / 1000;
  const apparentPowerKva = (Math.sqrt(3) * lineVoltage * lineCurrent) / 1000;

  // Phasor Angles (degrees)
  // Positive sequence (ABC): Va=0, Vb=-120, Vc=+120 (or 240)
  // Negative sequence (ACB): Va=0, Vc=-120, Vb=+120
  const angVa = 0;
  const angVb = isPositiveSeq ? -120 : 120;
  const angVc = isPositiveSeq ? 120 : -120;

  // Current phasors relative to their respective phase voltages:
  const angIa = angVa + phiDeg;
  const angIb = angVb + phiDeg;
  const angIc = angVc + phiDeg;

  // SVG coordinate calculations for phasor wheel
  const center = 140;
  const vScale = 90 / 450; // max line voltage ~450V maps to 90px
  const iScale = 85 / 120; // current scaling

  const rVa = Math.min(100, Math.max(30, phaseVoltage * vScale));
  const rIa = Math.min(95, Math.max(25, lineCurrent * iScale));

  const degToRad = (deg: number) => (deg * Math.PI) / 180;

  // Voltage endpoints
  const vAx = center + rVa * Math.cos(degToRad(angVa));
  const vAy = center - rVa * Math.sin(degToRad(angVa));
  const vBx = center + rVa * Math.cos(degToRad(angVb));
  const vBy = center - rVa * Math.sin(degToRad(angVb));
  const vCx = center + rVa * Math.cos(degToRad(angVc));
  const vCy = center - rVa * Math.sin(degToRad(angVc));

  // Current endpoints
  const iAx = center + rIa * Math.cos(degToRad(angIa));
  const iAy = center - rIa * Math.sin(degToRad(angIa));
  const iBx = center + rIa * Math.cos(degToRad(angIb));
  const iBy = center - rIa * Math.sin(degToRad(angIb));
  const iCx = center + rIa * Math.cos(degToRad(angIc));
  const iCy = center - rIa * Math.sin(degToRad(angIc));

  // Localized texts
  const t = {
    en: {
      title: 'Advanced Three-Phase Phasor & Power Analyzer',
      subtitle: 'Interactive Phasor Geometry, √3 Transformations & Complex Power Triangle',
      vLine: 'Line Voltage (VL)',
      iLine: 'Line Current (IL)',
      pf: 'Displacement Power Factor (cos φ)',
      loadNature: 'Load Reactive Nature',
      lagging: 'Lagging (Inductive)',
      leading: 'Leading (Capacitive)',
      seq: 'Phase Sequence',
      posSeq: 'Positive (A - B - C)',
      negSeq: 'Negative (A - C - B)',
      conn: 'Winding Connection',
      star: 'Star (Y)',
      delta: 'Delta (Δ)',
      phasorDiagram: 'Dynamic Three-Phase Phasor Diagram',
      powerTriangle: 'Three-Phase Complex Power Metrics',
      activePower: 'Active Power (P)',
      reactivePower: 'Reactive Power (Q)',
      apparentPower: 'Apparent Power (S)',
      phaseAngle: 'Phase Angle (φ)',
      vPhase: 'Phase Voltage (Vph)',
      iPhase: 'Phase Current (Iph)',
      relationships: 'Transformation Equations',
      starRelation: 'Star: VL = √3 · Vph, IL = Iph (Neutral present)',
      deltaRelation: 'Delta: VL = Vph, IL = √3 · Iph (No neutral)'
    },
    hi: {
      title: 'उन्नत थ्री-फेज फेजर एवं शक्ति विश्लेषक',
      subtitle: 'इंटरएक्टिव फेजर ज्यामिति, √3 रूपांतरण एवं जटिल शक्ति त्रिभुज',
      vLine: 'लाइन वोल्टेज (VL)',
      iLine: 'लाइन करंट (IL)',
      pf: 'पावर फैक्टर (cos φ)',
      loadNature: 'लोड की प्रकृति',
      lagging: 'लैगिंग (प्रेरकीय)',
      leading: 'लीडिंग (धारिता)',
      seq: 'फेज अनुक्रम',
      posSeq: 'पॉजिटिव (A - B - C)',
      negSeq: 'नेगेटिव (A - C - B)',
      conn: 'वाइंडिंग कनेक्शन',
      star: 'स्टार (Y)',
      delta: 'डेल्टा (Δ)',
      phasorDiagram: 'गतिशील थ्री-फेज फेजर आरेख',
      powerTriangle: 'थ्री-फेज पावर मेट्रिक्स',
      activePower: 'सक्रिय शक्ति (P)',
      reactivePower: 'रिएक्टिव शक्ति (Q)',
      apparentPower: 'आभासी शक्ति (S)',
      phaseAngle: 'फेज कोण (φ)',
      vPhase: 'फेज वोल्टेज (Vph)',
      iPhase: 'फेज करंट (Iph)',
      relationships: 'रूपांतरण समीकरण',
      starRelation: 'स्टार: VL = √3 · Vph, IL = Iph (न्यूट्रल उपलब्ध)',
      deltaRelation: 'डेल्टा: VL = Vph, IL = √3 · Iph (न्यूट्रल नहीं)'
    },
    bn: {
      title: 'উন্নত থ্রি-ফেজ ফেজর ও পাওয়ার বিশ্লেষক',
      subtitle: 'ইন্টারঅ্যাক্টিভ ফেজর জ্যামিতি, √৩ রূপান্তর ও জটিল পাওয়ার ত্রিভুজ',
      vLine: 'লাইন ভোল্টেজ (VL)',
      iLine: 'লাইন কারেন্ট (IL)',
      pf: 'পাওয়ার ফ্যাক্টর (cos φ)',
      loadNature: 'লোডের প্রকৃতি',
      lagging: 'ল্যাগিং (ইন্ডাক্টিভ)',
      leading: 'লিডিং (ক্যাপাসিটিভ)',
      seq: 'ফেজ অনুক্রম',
      posSeq: 'পজিটিভ (A - B - C)',
      negSeq: 'নেগেটিভ (A - C - B)',
      conn: 'কানেকশন ধরন',
      star: 'স্টার (Y)',
      delta: 'ডেল্টা (Δ)',
      phasorDiagram: 'ডায়নামিক থ্রি-ফেজ ফেজর ডায়াগ্রাম',
      powerTriangle: 'থ্রি-ফেজ পাওয়ার মেট্রিক্স',
      activePower: 'সক্রিয় ক্ষমতা (P)',
      reactivePower: 'রিঅ্যাক্টিভ ক্ষমতা (Q)',
      apparentPower: 'আপাত ক্ষমতা (S)',
      phaseAngle: 'দশা কোণ (φ)',
      vPhase: 'ফেজ ভোল্টেজ (Vph)',
      iPhase: 'ফেজ কারেন্ট (Iph)',
      relationships: 'রূপান্তর সমীকরণ',
      starRelation: 'স্টার: VL = √৩ · Vph, IL = Iph (নিউট্রাল বিদ্যমান)',
      deltaRelation: 'ডেল্টা: VL = Vph, IL = √৩ · Iph (নিউট্রাল নেই)'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 max-w-5xl mx-auto shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
          <Compass className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">{t.title}</h3>
          <p className="text-xs text-slate-400">{t.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
          {/* Line Voltage */}
          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-slate-300">{t.vLine}</span>
              <span className="font-mono text-cyan-400 font-bold">{lineVoltage} V</span>
            </div>
            <input
              id={`${controlId}-vl`}
              type="range"
              min="200"
              max="690"
              step="5"
              value={lineVoltage}
              onChange={(e) => setLineVoltage(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 h-2 rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
              <span>200V</span>
              <span>415V</span>
              <span>690V</span>
            </div>
          </div>

          {/* Line Current */}
          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-slate-300">{t.iLine}</span>
              <span className="font-mono text-amber-400 font-bold">{lineCurrent} A</span>
            </div>
            <input
              id={`${controlId}-il`}
              type="range"
              min="5"
              max="200"
              step="5"
              value={lineCurrent}
              onChange={(e) => setLineCurrent(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-2 rounded cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-0.5">
              <span>5A</span>
              <span>50A</span>
              <span>200A</span>
            </div>
          </div>

          {/* Power Factor */}
          <div>
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              <span className="text-slate-300">{t.pf}</span>
              <span className="font-mono text-emerald-400 font-bold">
                {powerFactor.toFixed(2)} ({isLagging ? 'Lag' : 'Lead'})
              </span>
            </div>
            <input
              id={`${controlId}-pf`}
              type="range"
              min="0.1"
              max="1.0"
              step="0.02"
              value={powerFactor}
              onChange={(e) => setPowerFactor(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 h-2 rounded cursor-pointer"
            />
          </div>

          {/* Lagging vs Leading */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={() => setIsLagging(true)}
              className={`py-1.5 px-2.5 rounded text-xs font-medium border transition-colors ${
                isLagging
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.lagging}
            </button>
            <button
              type="button"
              onClick={() => setIsLagging(false)}
              className={`py-1.5 px-2.5 rounded text-xs font-medium border transition-colors ${
                !isLagging
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.leading}
            </button>
          </div>

          {/* Connection Type */}
          <div className="pt-2 border-t border-slate-800">
            <label className="text-xs text-slate-400 block mb-1.5 font-medium">{t.conn}</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setConnectionType('star')}
                className={`py-1.5 px-3 rounded text-xs font-medium border flex items-center justify-center gap-1.5 ${
                  connectionType === 'star'
                    ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                {t.star}
              </button>
              <button
                type="button"
                onClick={() => setConnectionType('delta')}
                className={`py-1.5 px-3 rounded text-xs font-medium border flex items-center justify-center gap-1.5 ${
                  connectionType === 'delta'
                    ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                {t.delta}
              </button>
            </div>
          </div>

          {/* Phase Sequence */}
          <div className="pt-2 border-t border-slate-800">
            <label className="text-xs text-slate-400 block mb-1.5 font-medium">{t.seq}</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setIsPositiveSeq(true)}
                className={`py-1.5 px-2 rounded text-xs font-medium border flex items-center justify-center gap-1 ${
                  isPositiveSeq
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                {t.posSeq}
              </button>
              <button
                type="button"
                onClick={() => setIsPositiveSeq(false)}
                className={`py-1.5 px-2 rounded text-xs font-medium border flex items-center justify-center gap-1 ${
                  !isPositiveSeq
                    ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                {t.negSeq}
              </button>
            </div>
          </div>
        </div>

        {/* Display Column */}
        <div className="lg:col-span-7 space-y-4">
          {/* Phasor SVG Canvas */}
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex flex-col items-center">
            <div className="w-full flex justify-between items-center text-xs text-slate-400 px-2 mb-2 font-mono">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-2.5 h-0.5 bg-cyan-400 inline-block"></span> Voltages (Va, Vb, Vc)
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2.5 h-0.5 bg-amber-400 inline-block"></span> Currents (Ia, Ib, Ic)
              </span>
              <span className="text-slate-400">φ = {Math.abs(phiDeg).toFixed(1)}°</span>
            </div>

            <svg viewBox="0 0 280 280" className="w-64 h-64">
              {/* Polar Grid circles */}
              <circle cx={center} cy={center} r="40" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />
              <circle cx={center} cy={center} r="80" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="2,2" />
              <circle cx={center} cy={center} r="115" fill="none" stroke="#1e293b" strokeWidth="1" />

              {/* Axes */}
              <line x1={center - 120} y1={center} x2={center + 120} y2={center} stroke="#334155" strokeWidth="1" />
              <line x1={center} y1={center - 120} x2={center} y2={center + 120} stroke="#334155" strokeWidth="1" />

              {/* Angle arc for Phase A */}
              <path
                d={`M ${center + 30} ${center} A 30 30 0 0 ${isLagging ? 1 : 0} ${center + 30 * Math.cos(degToRad(angIa))} ${center - 30 * Math.sin(degToRad(angIa))}`}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="1.5"
              />

              {/* Voltage Phasors (Cyan / Blue / Sky) */}
              {/* Va */}
              <line x1={center} y1={center} x2={vAx} y2={vAy} stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
              <polygon points={`${vAx},${vAy} ${vAx - 6},${vAy - 3} ${vAx - 6},${vAy + 3}`} fill="#38bdf8" />
              <text x={vAx + 8} y={vAy + 4} fill="#38bdf8" fontSize="10" fontWeight="bold">Va (0°)</text>

              {/* Vb */}
              <line x1={center} y1={center} x2={vBx} y2={vBy} stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
              <polygon points={`${vBx},${vBy} ${vBx + 3},${vBy - 6} ${vBx + 7},${vBy}`} fill="#60a5fa" />
              <text x={vBx + (isPositiveSeq ? -24 : 8)} y={vBy + (isPositiveSeq ? 12 : -8)} fill="#60a5fa" fontSize="10" fontWeight="bold">
                Vb ({angVb}°)
              </text>

              {/* Vc */}
              <line x1={center} y1={center} x2={vCx} y2={vCy} stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
              <polygon points={`${vCx},${vCy} ${vCx + 3},${vCy + 6} ${vCx + 7},${vCy}`} fill="#818cf8" />
              <text x={vCx + (isPositiveSeq ? -24 : 8)} y={vCy + (isPositiveSeq ? -8 : 12)} fill="#818cf8" fontSize="10" fontWeight="bold">
                Vc ({angVc}°)
              </text>

              {/* Current Phasors (Amber / Orange / Yellow) */}
              {/* Ia */}
              <line x1={center} y1={center} x2={iAx} y2={iAy} stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2" />
              <circle cx={iAx} cy={iAy} r="3" fill="#f59e0b" />
              <text x={iAx + 6} y={iAy + (isLagging ? 12 : -6)} fill="#fbbf24" fontSize="9" fontWeight="bold">Ia</text>

              {/* Ib */}
              <line x1={center} y1={center} x2={iBx} y2={iBy} stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2" />
              <circle cx={iBx} cy={iBy} r="3" fill="#f59e0b" />
              <text x={iBx - 16} y={iBy + (isPositiveSeq ? 4 : -4)} fill="#fbbf24" fontSize="9" fontWeight="bold">Ib</text>

              {/* Ic */}
              <line x1={center} y1={center} x2={iCx} y2={iCy} stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2" />
              <circle cx={iCx} cy={iCy} r="3" fill="#f59e0b" />
              <text x={iCx - 16} y={iCy + (isPositiveSeq ? -4 : 4)} fill="#fbbf24" fontSize="9" fontWeight="bold">Ic</text>

              {/* Center Origin */}
              <circle cx={center} cy={center} r="3.5" fill="#f8fafc" />
              <text x={center - 10} y={center - 6} fill="#64748b" fontSize="8">N</text>
            </svg>
          </div>

          {/* Power Metrics Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">{t.activePower}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold font-mono text-emerald-400">{activePowerKw.toFixed(1)}</span>
                <span className="text-xs text-slate-500 font-mono">kW</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">√3·VL·IL·cosφ</span>
            </div>

            <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">{t.reactivePower}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold font-mono text-amber-400">{reactivePowerKvar.toFixed(1)}</span>
                <span className="text-xs text-slate-500 font-mono">kVAR</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">√3·VL·IL·sinφ</span>
            </div>

            <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">{t.apparentPower}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold font-mono text-cyan-400">{apparentPowerKva.toFixed(1)}</span>
                <span className="text-xs text-slate-500 font-mono">kVA</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">√3·VL·IL</span>
            </div>
          </div>

          {/* Transformations & Relationships */}
          <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold mb-1.5">
              <Activity className="w-3.5 h-3.5" />
              <span>{t.relationships}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-slate-300 font-mono text-[11px]">
              <div>{t.vPhase}: <span className="text-cyan-300 font-bold">{phaseVoltage.toFixed(1)} V</span></div>
              <div>{t.iPhase}: <span className="text-amber-300 font-bold">{phaseCurrent.toFixed(1)} A</span></div>
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5">
              {connectionType === 'star' ? t.starRelation : t.deltaRelation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
