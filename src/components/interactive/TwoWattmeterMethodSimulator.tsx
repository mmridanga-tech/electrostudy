import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Gauge, Calculator, AlertCircle, ArrowRightLeft, Zap } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const TwoWattmeterMethodSimulator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Inputs
  const [lineVoltage, setLineVoltage] = useState<number>(415); // V
  const [lineCurrent, setLineCurrent] = useState<number>(40);  // A
  const [powerFactor, setPowerFactor] = useState<number>(0.50);
  const [isLagging, setIsLagging] = useState<boolean>(true);

  // Phase angle
  const phiRad = Math.acos(Math.min(1, Math.max(0, powerFactor)));
  const phiDeg = (phiRad * 180) / Math.PI;
  const effectivePhiDeg = isLagging ? phiDeg : -phiDeg;
  const effectivePhiRad = (effectivePhiDeg * Math.PI) / 180;

  // Two-Wattmeter formula for 3-wire system with wattmeters on Phase 1 and Phase 2, common to Phase 3:
  // W1 = VL * IL * cos(30° - φ)
  // W2 = VL * IL * cos(30° + φ)
  const deg30 = (30 * Math.PI) / 180;
  const w1Watts = lineVoltage * lineCurrent * Math.cos(deg30 - effectivePhiRad);
  const w2Watts = lineVoltage * lineCurrent * Math.cos(deg30 + effectivePhiRad);

  const w1Kw = w1Watts / 1000;
  const w2Kw = w2Watts / 1000;

  // Total active & reactive power
  const totalKw = w1Kw + w2Kw;
  const totalKvar = Math.sqrt(3) * (w1Kw - w2Kw);
  const totalKva = Math.sqrt(totalKw * totalKw + totalKvar * totalKvar);

  // Back-calculated PF from wattmeter readings:
  // tan(φ) = √3 * (W1 - W2) / (W1 + W2)
  let calculatedPf = 1.0;
  if (Math.abs(w1Kw + w2Kw) > 0.001) {
    const tanPhi = Math.abs(Math.sqrt(3) * (w1Kw - w2Kw) / (w1Kw + w2Kw));
    calculatedPf = 1 / Math.sqrt(1 + tanPhi * tanPhi);
  }

  // Wattmeter reversal alert
  const hasNegativeReading = w1Kw < 0 || w2Kw < 0;

  // Localized texts
  const t = {
    en: {
      title: 'Two-Wattmeter Method Three-Phase Power Simulator',
      subtitle: 'Blondel\'s Theorem for 3-Wire Systems: Active Power, Reactive VARs & Sign Reversals at Low PF',
      inputs: 'Circuit Test Parameters',
      vl: 'Line Voltage (VL)',
      il: 'Line Current (IL)',
      pf: 'Operating Power Factor (cos φ)',
      lagging: 'Lagging Load (Inductive)',
      leading: 'Leading Load (Capacitive)',
      meterReadings: 'Wattmeter Observations',
      meter1: 'Wattmeter 1 (W₁)',
      meter2: 'Wattmeter 2 (W₂)',
      totalPower: 'Total Three-Phase Real Power (P = W₁ + W₂)',
      reactivePower: 'Reactive Power (Q = √3 [W₁ - W₂])',
      apparentPower: 'Total Apparent Power (S)',
      recalcPf: 'Calculated Power Factor from W₁ & W₂',
      meterReversalWarning: 'Negative Deflection Alert: At PF < 0.5 (φ > 60°), one wattmeter deflects backward. In field practice, reverse its potential coil connections and record the reading as negative.',
      zeroNotice: 'At PF = 0.50 (φ = 60°), W₂ reads exactly zero, and W₁ measures the entirety of three-phase power.',
      unityNotice: 'At PF = 1.00 (φ = 0°), both wattmeters register identical positive readings (W₁ = W₂).'
    },
    hi: {
      title: 'टू-वाटमीटर विधि थ्री-फेज शक्ति सिम्युलेटर',
      subtitle: '3-वायर सिस्टम के लिए ब्लोन्डेल प्रमेय: सक्रिय शक्ति, रिएक्टिव VARs एवं निम्न PF पर ऋणात्मक पाठ्यांक',
      inputs: 'सर्किट टेस्ट पैरामीटर',
      vl: 'लाइन वोल्टेज (VL)',
      il: 'लाइन करंट (IL)',
      pf: 'पावर फैक्टर (cos φ)',
      lagging: 'लैगिंग लोड (प्रेरकीय)',
      leading: 'लीडिंग लोड (धारिता)',
      meterReadings: 'वाटमीटर पाठ्यांक',
      meter1: 'वाटमीटर 1 (W₁)',
      meter2: 'वाटमीटर 2 (W₂)',
      totalPower: 'कुल थ्री-फेज सक्रिय शक्ति (P = W₁ + W₂)',
      reactivePower: 'रिएक्टिव शक्ति (Q = √3 [W₁ - W₂])',
      apparentPower: 'कुल आभासी शक्ति (S)',
      recalcPf: 'W₁ व W₂ से परिकलित पावर फैक्टर',
      meterReversalWarning: 'ऋणात्मक विक्षेप चेतावनी: PF < 0.5 (φ > 60°) पर एक वाटमीटर उल्टा विक्षेप देता है। फील्ड में पोटेंशियल कॉइल के तार पलटकर पाठ्यांक को ऋणात्मक (-) दर्ज करें।',
      zeroNotice: 'PF = 0.50 (φ = 60°) पर, W₂ शून्य पाठ्यांक देता है तथा W₁ पूरी थ्री-फेज शक्ति मापता है।',
      unityNotice: 'PF = 1.00 (φ = 0°) पर, दोनों वाटमीटर एक समान धनात्मक पाठ्यांक देते हैं (W₁ = W₂)।'
    },
    bn: {
      title: 'টু-ওয়াটমিটার পদ্ধতি থ্রি-ফেজ পাওয়ার সিমুলেটর',
      subtitle: '৩-তার সিস্টেমের জন্য ব্লন্ডেল তত্ত্ব: সক্রিয় ক্ষমতা, রিঅ্যাক্টিভ VARs ও নিম্ন PF-এ ঋণাত্মক পাঠ',
      inputs: 'সার্কিট টেস্ট প্যারামিটার',
      vl: 'লাইন ভোল্টেজ (VL)',
      il: 'লাইন কারেন্ট (IL)',
      pf: 'পাওয়ার ফ্যাক্টর (cos φ)',
      lagging: 'ল্যাগিং লোড (ইন্ডাক্টিভ)',
      leading: 'লিডিং লোড (ক্যাপাসিটিভ)',
      meterReadings: 'ওয়াটমিটার পর্যবেক্ষণ',
      meter1: 'ওয়াটমিটার ১ (W₁)',
      meter2: 'ওয়াটমিটার ২ (W₂)',
      totalPower: 'মোট থ্রি-ফেজ সক্রিয় ক্ষমতা (P = W₁ + W₂)',
      reactivePower: 'রিঅ্যাক্টিভ ক্ষমতা (Q = √৩ [W₁ - W₂])',
      apparentPower: 'মোট আপাত ক্ষমতা (S)',
      recalcPf: 'W₁ ও W₂ থেকে নির্ণীত পাওয়ার ফ্যাক্টর',
      meterReversalWarning: 'ঋণাত্মক বিক্ষেপ সতর্কতা: PF < ০.৫ (φ > ৬০°) হলে একটি ওয়াটমিটার বিপরীত দিকে ঘুরে। ফিল্ডে এর পটেনশিয়াল কয়েল সংযোগ উল্টে দিয়ে মানটি ঋণাত্মক হিসেবে যোগ করতে হয়।',
      zeroNotice: 'PF = ০.৫০ (φ = ৬০°) হলে, W₂ ঠিক শূন্য দেখায় এবং W₁ সম্পূর্ণ থ্রি-ফেজ পাওয়ার পরিমাপ করে।',
      unityNotice: 'PF = ১.০০ (φ = ০°) হলে, দুটি ওয়াটমিটারই সমান ধনাত্মক মান দেখায় (W₁ = W₂)।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 max-w-5xl mx-auto shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
          <Gauge className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">{t.title}</h3>
          <p className="text-xs text-slate-400">{t.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls */}
        <div className="lg:col-span-5 space-y-4 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.inputs}</div>

          {/* Line Voltage */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.vl}</span>
              <span className="font-mono text-cyan-400 font-bold">{lineVoltage} V</span>
            </div>
            <input
              id={`${controlId}-vl`}
              type="range"
              min="200"
              max="480"
              step="5"
              value={lineVoltage}
              onChange={(e) => setLineVoltage(Number(e.target.value))}
              className="w-full accent-cyan-500 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
          </div>

          {/* Line Current */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.il}</span>
              <span className="font-mono text-amber-400 font-bold">{lineCurrent} A</span>
            </div>
            <input
              id={`${controlId}-il`}
              type="range"
              min="5"
              max="150"
              step="5"
              value={lineCurrent}
              onChange={(e) => setLineCurrent(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
          </div>

          {/* Power Factor Slider */}
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300">{t.pf}</span>
              <span className="font-mono text-emerald-400 font-bold">
                {powerFactor.toFixed(2)} (φ = {phiDeg.toFixed(1)}°)
              </span>
            </div>
            <input
              id={`${controlId}-pf`}
              type="range"
              min="0.0"
              max="1.0"
              step="0.02"
              value={powerFactor}
              onChange={(e) => setPowerFactor(Number(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-800 h-1.5 rounded cursor-pointer"
            />
          </div>

          {/* Lagging vs Leading */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setIsLagging(true)}
              className={`py-1.5 px-2 rounded text-xs font-medium border transition-colors ${
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
              className={`py-1.5 px-2 rounded text-xs font-medium border transition-colors ${
                !isLagging
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                  : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.leading}
            </button>
          </div>

          {/* Quick Benchmark buttons */}
          <div className="pt-2 border-t border-slate-800 space-y-1">
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block">Key Analytical Benchmarks</span>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => { setPowerFactor(1.0); setIsLagging(true); }}
                className="p-1.5 bg-slate-900 hover:bg-slate-800 text-[11px] rounded border border-slate-800 text-slate-300"
              >
                PF = 1.0 (W₁=W₂)
              </button>
              <button
                type="button"
                onClick={() => { setPowerFactor(0.5); setIsLagging(true); }}
                className="p-1.5 bg-slate-900 hover:bg-slate-800 text-[11px] rounded border border-slate-800 text-amber-300"
              >
                PF = 0.5 (W₂=0)
              </button>
              <button
                type="button"
                onClick={() => { setPowerFactor(0.2); setIsLagging(true); }}
                className="p-1.5 bg-slate-900 hover:bg-slate-800 text-[11px] rounded border border-slate-800 text-rose-300"
              >
                PF = 0.2 (W₂ &lt; 0)
              </button>
            </div>
          </div>
        </div>

        {/* Display */}
        <div className="lg:col-span-7 space-y-4">
          {/* Wattmeters Double Dial Display */}
          <div className="grid grid-cols-2 gap-3">
            {/* W1 */}
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col items-center justify-center">
              <span className="text-xs text-slate-400 font-semibold mb-1">{t.meter1}</span>
              <div className="text-2xl font-mono font-bold text-emerald-400">
                {w1Kw.toFixed(2)} <span className="text-sm font-normal text-slate-500">kW</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono mt-1">VL·IL·cos(30° - φ)</span>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all"
                  style={{ width: `${Math.min(100, Math.max(0, (w1Kw / (lineVoltage * lineCurrent / 500)) * 100))}%` }}
                />
              </div>
            </div>

            {/* W2 */}
            <div className={`p-4 rounded-lg border flex flex-col items-center justify-center transition-colors ${
              w2Kw < 0
                ? 'bg-rose-950/40 border-rose-800/80 text-rose-300'
                : 'bg-slate-950 border-slate-800 text-slate-300'
            }`}>
              <span className="text-xs font-semibold mb-1">{t.meter2}</span>
              <div className={`text-2xl font-mono font-bold ${w2Kw < 0 ? 'text-rose-400' : 'text-cyan-400'}`}>
                {w2Kw.toFixed(2)} <span className="text-sm font-normal text-slate-500">kW</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono mt-1">VL·IL·cos(30° + φ)</span>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${w2Kw < 0 ? 'bg-rose-500' : 'bg-cyan-500'}`}
                  style={{ width: `${Math.min(100, Math.max(0, (Math.abs(w2Kw) / (lineVoltage * lineCurrent / 500)) * 100))}%` }}
                />
              </div>
            </div>
          </div>

          {/* Power Synthesis Card */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Total P (W₁ + W₂)</span>
              <div className="text-lg font-bold font-mono text-emerald-400">
                {totalKw.toFixed(2)} <span className="text-xs font-normal text-slate-500">kW</span>
              </div>
            </div>

            <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Total Q (√3 [W₁-W₂])</span>
              <div className="text-lg font-bold font-mono text-amber-400">
                {totalKvar.toFixed(2)} <span className="text-xs font-normal text-slate-500">kVAR</span>
              </div>
            </div>

            <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">Back-Calculated PF</span>
              <div className="text-lg font-bold font-mono text-cyan-400">
                {calculatedPf.toFixed(3)}
              </div>
            </div>
          </div>

          {/* Explanatory Banners */}
          {hasNegativeReading ? (
            <div className="p-3 bg-rose-950/50 border border-rose-800/80 rounded-lg text-rose-300 text-xs flex items-start gap-2.5">
              <ArrowRightLeft className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
              <div>
                <span className="font-bold block text-rose-200">Reversal Condition Active!</span>
                {t.meterReversalWarning}
              </div>
            </div>
          ) : Math.abs(powerFactor - 0.5) < 0.02 ? (
            <div className="p-3 bg-amber-950/40 border border-amber-800/60 rounded-lg text-amber-300 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 shrink-0 text-amber-400" />
              <span>{t.zeroNotice}</span>
            </div>
          ) : powerFactor >= 0.98 ? (
            <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-lg text-emerald-300 text-xs flex items-center gap-2.5">
              <Zap className="w-5 h-5 shrink-0 text-emerald-400" />
              <span>{t.unityNotice}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
