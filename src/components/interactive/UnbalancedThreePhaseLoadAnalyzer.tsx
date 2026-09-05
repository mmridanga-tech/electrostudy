import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Network, AlertOctagon, CheckCircle, Zap, ShieldAlert } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

interface Complex {
  r: number;
  i: number;
}

const add = (a: Complex, b: Complex): Complex => ({ r: a.r + b.r, i: a.i + b.i });
const sub = (a: Complex, b: Complex): Complex => ({ r: a.r - b.r, i: a.i - b.i });
const mult = (a: Complex, b: Complex): Complex => ({
  r: a.r * b.r - a.i * b.i,
  i: a.r * b.i + a.i * b.r
});
const div = (a: Complex, b: Complex): Complex => {
  const den = b.r * b.r + b.i * b.i;
  return {
    r: (a.r * b.r + a.i * b.i) / den,
    i: (a.i * b.r - a.r * b.i) / den
  };
};
const mag = (c: Complex): number => Math.sqrt(c.r * c.r + c.i * c.i);

export const UnbalancedThreePhaseLoadAnalyzer: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Source Line Voltage
  const [lineVoltage, setLineVoltage] = useState<number>(415);
  const [hasNeutral, setHasNeutral] = useState<boolean>(true); // 4-wire vs 3-wire floating neutral

  // Phase Impedances (R + jX)
  const [ra, setRa] = useState<number>(10);
  const [xa, setXa] = useState<number>(5);
  const [rb, setRb] = useState<number>(20);
  const [xb, setXb] = useState<number>(10);
  const [rc, setRc] = useState<number>(15);
  const [xc, setXc] = useState<number>(0);

  // Supply phase voltages (ideal balanced source w.r.t source neutral N)
  const vPh = lineVoltage / Math.sqrt(3);
  const Van: Complex = { r: vPh, i: 0 };
  const Vbn: Complex = { r: -0.5 * vPh, i: -(Math.sqrt(3) / 2) * vPh };
  const Vcn: Complex = { r: -0.5 * vPh, i: (Math.sqrt(3) / 2) * vPh };

  // Load Impedances
  const Za: Complex = { r: ra, i: xa };
  const Zb: Complex = { r: rb, i: xb };
  const Zc: Complex = { r: rc, i: xc };

  // Admittances Y = 1/Z
  const one: Complex = { r: 1, i: 0 };
  const Ya = div(one, Za);
  const Yb = div(one, Zb);
  const Yc = div(one, Zc);

  let Vn_shift: Complex = { r: 0, i: 0 };
  let VloadA: Complex = Van;
  let VloadB: Complex = Vbn;
  let VloadC: Complex = Vcn;

  if (!hasNeutral) {
    // Millman's Theorem for floating neutral N'
    // V_N'N = (Van*Ya + Vbn*Yb + Vcn*Yc) / (Ya + Yb + Yc)
    const num = add(add(mult(Van, Ya), mult(Vbn, Yb)), mult(Vcn, Yc));
    const den = add(add(Ya, Yb), Yc);
    Vn_shift = div(num, den);

    VloadA = sub(Van, Vn_shift);
    VloadB = sub(Vbn, Vn_shift);
    VloadC = sub(Vcn, Vn_shift);
  }

  // Currents
  const Ia = mult(VloadA, Ya);
  const Ib = mult(VloadB, Yb);
  const Ic = mult(VloadC, Yc);

  // Neutral current In = Ia + Ib + Ic (flowing back to source N if connected)
  const In = hasNeutral ? add(add(Ia, Ib), Ic) : { r: 0, i: 0 };

  const magIa = mag(Ia);
  const magIb = mag(Ib);
  const magIc = mag(Ic);
  const magIn = mag(In);

  const magVa = mag(VloadA);
  const magVb = mag(VloadB);
  const magVc = mag(VloadC);
  const magVshift = mag(Vn_shift);

  // Powers per phase
  const Pa = magVa * magIa * (Za.r / mag(Za)) / 1000;
  const Pb = magVb * magIb * (Zb.r / mag(Zb)) / 1000;
  const Pc = magVc * magIc * (Zc.r / mag(Zc)) / 1000;
  const Ptotal = Pa + Pb + Pc;

  // Imbalance Metric
  const avgI = (magIa + magIb + magIc) / 3;
  const maxDiffI = Math.max(Math.abs(magIa - avgI), Math.abs(magIb - avgI), Math.abs(magIc - avgI));
  const currentUnbalancePct = avgI > 0 ? (maxDiffI / avgI) * 100 : 0;

  // Overvoltage warning threshold (e.g. >253V for nominal 240V system)
  const maxV = Math.max(magVa, magVb, magVc);
  const hasOvervoltage = !hasNeutral && maxV > 255;

  const t = {
    en: {
      title: 'Unbalanced Three-Phase Loads & Neutral Displacement Analyzer',
      subtitle: 'Millman Analysis: Impact of Unequal Phase Impedances on 4-Wire vs 3-Wire Floating Systems',
      sourceSettings: 'Source & Topology',
      vLine: 'Supply Line Voltage (VL)',
      neutralMode: 'Neutral Conductor State',
      solidNeutral: '4-Wire (Solid Neutral)',
      floatingNeutral: '3-Wire (Floating Neutral N\')',
      phaseImpedances: 'Phase Load Impedances (Z = R + jX)',
      neutralShift: 'Neutral Displacement Voltage (VN\'N)',
      voltagesAcrossLoads: 'Load Phase Voltages',
      phaseCurrents: 'Phase Currents & Neutral Flow',
      inWarning: 'Excessive Neutral Return Current detected!',
      floatWarning: 'Dangerous Neutral Shift! Phase overvoltage will destroy connected equipment.',
      safeNotice: 'Nominal phase voltages maintained across all three phases.'
    },
    hi: {
      title: 'असंतुलित थ्री-फेज भार एवं न्यूट्रल विस्थापन विश्लेषक',
      subtitle: 'मिलमैन विश्लेषण: 4-वायर बनाम 3-वायर फ्लोटिंग सिस्टम पर असमान प्रतिबाधा का प्रभाव',
      sourceSettings: 'स्रोत एवं टोपोलॉजी',
      vLine: 'सप्लाई लाइन वोल्टेज (VL)',
      neutralMode: 'न्यूट्रल कंडक्टर स्थिति',
      solidNeutral: '4-वायर (सॉलिड न्यूट्रल)',
      floatingNeutral: '3-वायर (फ्लोटिंग न्यूट्रल N\')',
      phaseImpedances: 'फेज लोड प्रतिबाधा (Z = R + jX)',
      neutralShift: 'न्यूट्रल विस्थापन वोल्टेज (VN\'N)',
      voltagesAcrossLoads: 'लोड पर फेज वोल्टेज',
      phaseCurrents: 'फेज धाराएँ एवं न्यूट्रल प्रवाह',
      inWarning: 'अत्यधिक न्यूट्रल धारा प्रवाहित हो रही है!',
      floatWarning: 'खतरनाक न्यूट्रल विस्थापन! उच्च वोल्टेज उपकरणों को नष्ट कर सकता है।',
      safeNotice: 'सभी तीनों फेजों पर सामान्य वोल्टेज स्तर बना हुआ है।'
    },
    bn: {
      title: 'ভারসাম্যহীন থ্রি-ফেজ লোড ও নিউট্রাল স্থানান্তর বিশ্লেষক',
      subtitle: 'মিলম্যান বিশ্লেষণ: ৪-তার বনাম ৩-তার ভাসমান নিউট্রাল সিস্টেমে অসমান লোডের প্রভাব',
      sourceSettings: 'উৎস ও সংযোগ টপোলজি',
      vLine: 'সরবরাহ লাইন ভোল্টেজ (VL)',
      neutralMode: 'নিউট্রাল পরিবাহীর অবস্থা',
      solidNeutral: '৪-তার (দৃঢ় নিউট্রাল সংযোগ)',
      floatingNeutral: '৩-তার (ভাসমান নিউট্রাল N\')',
      phaseImpedances: 'ফেজ লোড প্রতিবন্ধকতা (Z = R + jX)',
      neutralShift: 'নিউট্রাল স্থানান্তর ভোল্টেজ (VN\'N)',
      voltagesAcrossLoads: 'লোডে কার্যকর ফেজ ভোল্টেজ',
      phaseCurrents: 'ফেজ কারেন্ট ও নিউট্রাল প্রবাহ',
      inWarning: 'অতিরিক্ত নিউট্রাল কারেন্ট প্রবাহিত হচ্ছে!',
      floatWarning: 'মারাত্মক নিউট্রাল শিফট! উচ্চ ভোল্টেজ যন্ত্রপাতি নষ্ট করবে।',
      safeNotice: 'তিনটি ফেজেই সুষম ভোল্টেজ বজায় রয়েছে।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 max-w-5xl mx-auto shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/20">
          <Network className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">{t.title}</h3>
          <p className="text-xs text-slate-400">{t.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.sourceSettings}</div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.vLine}</span>
              <span className="font-mono text-cyan-400 font-bold">{lineVoltage} V</span>
            </div>
            <input
              id={`${controlId}-vl`}
              type="range"
              min="380"
              max="480"
              value={lineVoltage}
              onChange={(e) => setLineVoltage(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
          </div>

          {/* Neutral Connection Toggle */}
          <div>
            <label className="text-xs text-slate-400 block mb-1.5 font-medium">{t.neutralMode}</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setHasNeutral(true)}
                className={`py-2 px-2.5 rounded text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                  hasNeutral
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <CheckCircle className="w-3.5 h-3.5" />
                {t.solidNeutral}
              </button>
              <button
                type="button"
                onClick={() => setHasNeutral(false)}
                className={`py-2 px-2.5 rounded text-xs font-medium border flex items-center justify-center gap-1.5 transition-colors ${
                  !hasNeutral
                    ? 'bg-rose-500/20 border-rose-500/50 text-rose-300'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <AlertOctagon className="w-3.5 h-3.5" />
                {t.floatingNeutral}
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">{t.phaseImpedances}</div>

            {/* Za */}
            <div className="space-y-1 bg-slate-900/60 p-2 rounded border border-slate-800 mb-2">
              <div className="flex justify-between text-xs">
                <span className="text-red-400 font-semibold">Phase A Load (Za)</span>
                <span className="font-mono text-slate-300">{ra} + j{xa} Ω ({mag(Za).toFixed(1)}Ω)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  id={`${controlId}-ra`}
                  type="range"
                  min="2"
                  max="40"
                  value={ra}
                  onChange={(e) => setRa(Number(e.target.value))}
                  className="accent-red-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
                <input
                  id={`${controlId}-xa`}
                  type="range"
                  min="0"
                  max="30"
                  value={xa}
                  onChange={(e) => setXa(Number(e.target.value))}
                  className="accent-red-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* Zb */}
            <div className="space-y-1 bg-slate-900/60 p-2 rounded border border-slate-800 mb-2">
              <div className="flex justify-between text-xs">
                <span className="text-yellow-400 font-semibold">Phase B Load (Zb)</span>
                <span className="font-mono text-slate-300">{rb} + j{xb} Ω ({mag(Zb).toFixed(1)}Ω)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  id={`${controlId}-rb`}
                  type="range"
                  min="2"
                  max="40"
                  value={rb}
                  onChange={(e) => setRb(Number(e.target.value))}
                  className="accent-yellow-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
                <input
                  id={`${controlId}-xb`}
                  type="range"
                  min="0"
                  max="30"
                  value={xb}
                  onChange={(e) => setXb(Number(e.target.value))}
                  className="accent-yellow-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* Zc */}
            <div className="space-y-1 bg-slate-900/60 p-2 rounded border border-slate-800">
              <div className="flex justify-between text-xs">
                <span className="text-blue-400 font-semibold">Phase C Load (Zc)</span>
                <span className="font-mono text-slate-300">{rc} + j{xc} Ω ({mag(Zc).toFixed(1)}Ω)</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  id={`${controlId}-rc`}
                  type="range"
                  min="2"
                  max="40"
                  value={rc}
                  onChange={(e) => setRc(Number(e.target.value))}
                  className="accent-blue-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
                <input
                  id={`${controlId}-xc`}
                  type="range"
                  min="0"
                  max="30"
                  value={xc}
                  onChange={(e) => setXc(Number(e.target.value))}
                  className="accent-blue-500 bg-slate-800 h-1.5 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results & Analysis Column */}
        <div className="lg:col-span-7 space-y-4">
          {/* Neutral Shift Hero */}
          <div className={`p-3.5 rounded-lg border flex items-center justify-between ${
            !hasNeutral && magVshift > 15
              ? 'bg-rose-950/40 border-rose-800/60 text-rose-200'
              : 'bg-slate-950/80 border-slate-800 text-slate-200'
          }`}>
            <div>
              <span className="text-xs text-slate-400 block font-medium">{t.neutralShift}</span>
              <div className="text-xl font-bold font-mono text-amber-400">
                {magVshift.toFixed(1)} <span className="text-sm font-normal text-slate-400">V</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block font-medium">Neutral Current (In)</span>
              <div className="text-xl font-bold font-mono text-cyan-400">
                {magIn.toFixed(1)} <span className="text-sm font-normal text-slate-400">A</span>
              </div>
            </div>
          </div>

          {/* Phase Voltages & Currents Grid */}
          <div className="grid grid-cols-3 gap-3">
            {/* Phase A */}
            <div className="bg-slate-950/90 p-3 rounded-lg border border-red-900/40">
              <div className="text-xs text-red-400 font-bold mb-1">Phase A</div>
              <div className="text-sm font-mono text-slate-200">
                V: <span className={`font-bold ${magVa > 255 ? 'text-rose-400' : 'text-slate-100'}`}>{magVa.toFixed(1)} V</span>
              </div>
              <div className="text-sm font-mono text-slate-200">
                I: <span className="text-amber-300 font-bold">{magIa.toFixed(1)} A</span>
              </div>
              <div className="text-xs font-mono text-slate-400 mt-1">
                P: {Pa.toFixed(2)} kW
              </div>
            </div>

            {/* Phase B */}
            <div className="bg-slate-950/90 p-3 rounded-lg border border-yellow-900/40">
              <div className="text-xs text-yellow-400 font-bold mb-1">Phase B</div>
              <div className="text-sm font-mono text-slate-200">
                V: <span className={`font-bold ${magVb > 255 ? 'text-rose-400' : 'text-slate-100'}`}>{magVb.toFixed(1)} V</span>
              </div>
              <div className="text-sm font-mono text-slate-200">
                I: <span className="text-amber-300 font-bold">{magIb.toFixed(1)} A</span>
              </div>
              <div className="text-xs font-mono text-slate-400 mt-1">
                P: {Pb.toFixed(2)} kW
              </div>
            </div>

            {/* Phase C */}
            <div className="bg-slate-950/90 p-3 rounded-lg border border-blue-900/40">
              <div className="text-xs text-blue-400 font-bold mb-1">Phase C</div>
              <div className="text-sm font-mono text-slate-200">
                V: <span className={`font-bold ${magVc > 255 ? 'text-rose-400' : 'text-slate-100'}`}>{magVc.toFixed(1)} V</span>
              </div>
              <div className="text-sm font-mono text-slate-200">
                I: <span className="text-amber-300 font-bold">{magIc.toFixed(1)} A</span>
              </div>
              <div className="text-xs font-mono text-slate-400 mt-1">
                P: {Pc.toFixed(2)} kW
              </div>
            </div>
          </div>

          {/* System Aggregates */}
          <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-400 block mb-0.5">Total Real Power (P_total)</span>
              <span className="font-mono text-emerald-400 font-bold text-base">{Ptotal.toFixed(2)} kW</span>
            </div>
            <div>
              <span className="text-slate-400 block mb-0.5">Current Imbalance % (NEMA)</span>
              <span className={`font-mono font-bold text-base ${currentUnbalancePct > 10 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {currentUnbalancePct.toFixed(1)} %
              </span>
            </div>
          </div>

          {/* Diagnostic Warnings */}
          {hasOvervoltage ? (
            <div className="flex items-start gap-2.5 p-3 bg-rose-950/50 border border-rose-800/80 rounded-lg text-rose-300 text-xs">
              <ShieldAlert className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
              <div>
                <span className="font-bold block text-rose-200">Critical Overvoltage Hazard!</span>
                {t.floatWarning}
              </div>
            </div>
          ) : hasNeutral && magIn > 20 ? (
            <div className="flex items-start gap-2.5 p-3 bg-amber-950/40 border border-amber-800/60 rounded-lg text-amber-300 text-xs">
              <AlertOctagon className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
              <div>
                <span className="font-bold block text-amber-200">High Neutral Return Current</span>
                {t.inWarning} Neutral conductor sizing must match or exceed phase conductors to prevent thermal failure.
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2.5 p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-lg text-emerald-300 text-xs">
              <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{t.safeNotice}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
