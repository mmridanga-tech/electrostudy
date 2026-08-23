import React, { useState } from 'react';
import { Language } from '../../types';
import { GitFork, AlertTriangle, ShieldCheck, Zap, Activity, CheckCircle2 } from 'lucide-react';

interface TransformerParallelOperationAnimationProps {
  language?: Language;
}

export const TransformerParallelOperationAnimation: React.FC<TransformerParallelOperationAnimationProps> = ({
  language = 'en'
}) => {
  // Simulator Mode
  const [activeTab, setActiveTab] = useState<'loadSharing' | 'circulating' | 'reversePolarity'>('loadSharing');

  // Load Sharing Parameters
  const [ratingA, setRatingA] = useState<number>(100); // kVA
  const [ratingB, setRatingB] = useState<number>(200); // kVA
  const [zpuA, setZpuA] = useState<number>(0.04); // 4% p.u.
  const [zpuB, setZpuB] = useState<number>(0.04); // 4% p.u. (can adjust to 5% to show mismatch)
  const [totalLoad, setTotalLoad] = useState<number>(250); // kVA
  const [loadPf, setLoadPf] = useState<number>(0.85);

  // Circulating Current Parameters
  const [ea, setEa] = useState<number>(405); // Volts
  const [eb, setEb] = useState<number>(400); // Volts
  const [ra, setRa] = useState<number>(0.003); // Ω
  const [xa, setXa] = useState<number>(0.015); // Ω
  const [rb, setRb] = useState<number>(0.003); // Ω
  const [xb, setXb] = useState<number>(0.015); // Ω

  // Reverse Polarity Trip State
  const [breakerTripped, setBreakerTripped] = useState<boolean>(false);

  // Translations
  const t = {
    en: {
      title: 'Transformer Parallel Operation & Load Sharing Simulator',
      subtitle: 'Analyze kVA branch load division, impedance matching, circulating currents, and safety interlocks',
      tabSharing: 'kVA Load Sharing',
      tabCirc: 'Circulating Current',
      tabPolarity: 'Reverse Polarity Fault',
      totalDemand: 'Total Combined Demand:',
      pfLabel: 'Load Power Factor (cosΦ):',
      unitA: 'Transformer A (Unit A)',
      unitB: 'Transformer B (Unit B)',
      ratingLabel: 'Rated Capacity:',
      zpuLabel: 'Per-Unit Impedance (Zpu):',
      sharedKva: 'Shared kVA:',
      thermalLoad: 'Thermal Capacity Loading:',
      safeStatus: 'SAFE (Within Limits)',
      overloadStatus: 'OVERLOADED (Winding Thermal Warning!)',
      maxBankCap: 'Maximum Safe Bank Output without Overloading Any Unit:',
      // Circulating tab
      circDesc: 'A voltage ratio mismatch (EA ≠ EB) creates a continuous internal circulating current Ic flowing across the secondary windings even under no load.',
      eaLabel: 'Secondary Voltage A (EA):',
      ebLabel: 'Secondary Voltage B (EB):',
      circCurrent: 'No-Load Circulating Current (Ic):',
      circPowerLoss: 'Internal Ohmic Power Wastage (Ic²·Rloop):',
      // Polarity tab
      polDesc: 'Demonstrates what happens if secondary polarity is reversed during parallel connection (H1-H2 connected to X2-X1).',
      tripTitle: 'CATASTROPHIC SHORT-CIRCUIT DETECTED!',
      tripDesc: 'Instantaneous secondary loop fault current reached ~12.5 kA (12x rated). High-speed differential protection relay tripped circuit breakers in 15 ms to prevent transformer explosion.',
      resetBreaker: 'Reset Circuit Breakers'
    },
    hi: {
      title: 'ट्रांसफॉर्मर समानांतर संचालन एवं लोड शेयरिंग सिमुलेटर',
      subtitle: 'kVA लोड विभाजन, प्रतिबाधा मिलान, परिसंचारी धारा एवं सुरक्षा इंटरलॉक का सजीव विश्लेषण',
      tabSharing: 'kVA लोड शेयरिंग',
      tabCirc: 'परिसंचारी धारा (Circulating Current)',
      tabPolarity: 'विपरीत पोलैरिटी फॉल्ट',
      totalDemand: 'कुल संयुक्त लोड:',
      pfLabel: 'लोड पावर फैक्टर:',
      unitA: 'ट्रांसफॉर्मर A (यूनिट A)',
      unitB: 'ट्रांसफॉर्मर B (यूनिट B)',
      ratingLabel: 'रेटेड क्षमता:',
      zpuLabel: 'p.u. प्रतिबाधा (Zpu):',
      sharedKva: 'साझा kVA:',
      thermalLoad: 'थर्मल लोड प्रतिशत:',
      safeStatus: 'सुरक्षित (सीमा के भीतर)',
      overloadStatus: 'ओवरलोड (थर्मल वार्निंग!)',
      maxBankCap: 'बिना किसी यूनिट को ओवरलोड किए बैंक की अधिकतम सुरक्षित क्षमता:',
      circDesc: 'वोल्टेज अनुपात में थोड़ा सा अंतर (EA ≠ EB) होने पर नो-लोड पर भी आंतरिक परिसंचारी धारा बहती है।',
      eaLabel: 'सेकेंडरी वोल्टेज A (EA):',
      ebLabel: 'सेकेंडरी वोल्टेज B (EB):',
      circCurrent: 'नो-लोड परिसंचारी धारा (Ic):',
      circPowerLoss: 'आंतरिक अतिरिक्त पावर लॉस:',
      polDesc: 'समानांतर जोड़ते समय विपरीत पोलैरिटी जोड़ने का घातक प्रभाव।',
      tripTitle: 'विनाशकारी शॉर्ट सर्किट फॉल्ट!',
      tripDesc: 'शॉर्ट-सर्किट करंट 12.5 kA (फुल-लोड का 12 गुना) पहुँचा। ट्रांसफॉर्मर को जलने से बचाने हेतु सबस्टेशन ब्रेकर 15 ms में ट्रिप हुआ।',
      resetBreaker: 'सर्किट ब्रेकर रीसेट करें'
    },
    bn: {
      title: 'ট্রান্সফর্মার সমান্তরাল সংযোগ ও লোড শেয়ারিং সিমুলেটর',
      subtitle: 'kVA লোড বণ্টন, ইম্পিড্যান্স ম্যাচিং, সার্কুলেটিং কারেন্ট ও সুরক্ষা ব্যবস্থার বিশ্লেষণ',
      tabSharing: 'kVA লোড শেয়ারিং',
      tabCirc: 'সার্কুলেটিং কারেন্ট',
      tabPolarity: 'বিপরীত পোলারিটি ফল্ট',
      totalDemand: 'মোট লোড চাহিদা:',
      pfLabel: 'পাওয়ার ফ্যাক্টর:',
      unitA: 'ট্রান্সফরমার A (ইউনিট A)',
      unitB: 'ট্রান্সফরমার B (ইউনিট B)',
      ratingLabel: 'রেটেড ক্ষমতা:',
      zpuLabel: 'পার-ইউনিট ইম্পিড্যান্স (Zpu):',
      sharedKva: 'বণ্টনকৃত kVA:',
      thermalLoad: 'থার্মাল লোডিং শতাংশ:',
      safeStatus: 'নিরাপদ (সীমার মধ্যে)',
      overloadStatus: 'ওভারলোড (অতিরিক্ত তাপ ঝুঁকি!)',
      maxBankCap: 'ওভারলোড ছাড়া ব্যাংকের সর্বোচ্চ নিরাপদ আউটপুট ক্ষমতা:',
      circDesc: 'ভোল্টেজ অনুপাতে সামান্য অমিল (EA ≠ EB) থাকলে নো-লোডেও ক্ষতিকর সার্কুলেটিং কারেন্ট প্রবাহিত হয়।',
      eaLabel: 'সেকেন্ডারি ভোল্টেজ A (EA):',
      ebLabel: 'সেকেন্ডারি ভোল্টেজ B (EB):',
      circCurrent: 'নো-লোড সার্কুলেটিং কারেন্ট (Ic):',
      circPowerLoss: 'অভ্যন্তরীণ তাপ অপচয়:',
      polDesc: 'বিপরীত পোলারিটিতে সমান্তরাল সংযোগের বিধ্বংসী প্রভাব।',
      tripTitle: 'মারাত্মক শর্ট সার্কিট ফল্ট!',
      tripDesc: 'শর্ট-সার্কিট কারেন্ট ১২.৫ kA-এ পৌঁছায় ট্রান্সফরমার রক্ষা করতে প্রোটেকশন রিলে ১৫ মিলি-সেকেন্ডে সার্কিট ব্রেকার ট্রিপ করেছে।',
      resetBreaker: 'সার্কিট ব্রেকার রিসেট করুন'
    }
  }[language] || {
    title: 'Transformer Parallel Operation Simulator',
    subtitle: 'Simulate load sharing and parallel operation',
    tabSharing: 'Load Sharing',
    tabCirc: 'Circulating Current',
    tabPolarity: 'Reverse Polarity',
    totalDemand: 'Total Demand:',
    pfLabel: 'Power Factor:',
    unitA: 'Transformer A',
    unitB: 'Transformer B',
    ratingLabel: 'Rating:',
    zpuLabel: 'Zpu:',
    sharedKva: 'Shared kVA:',
    thermalLoad: 'Loading %:',
    safeStatus: 'SAFE',
    overloadStatus: 'OVERLOADED',
    maxBankCap: 'Max Safe Bank Output:',
    circDesc: 'Circulating Current Analysis',
    eaLabel: 'EA:',
    ebLabel: 'EB:',
    circCurrent: 'Ic:',
    circPowerLoss: 'Power Loss:',
    polDesc: 'Reverse Polarity Test',
    tripTitle: 'FAULT DETECTED',
    tripDesc: 'Breaker tripped on high fault current',
    resetBreaker: 'Reset Breakers'
  };

  // Load sharing calculations
  const capRatioA = ratingA / zpuA;
  const capRatioB = ratingB / zpuB;
  const sumCapRatios = capRatioA + capRatioB;

  const sharedKvaA = totalLoad * (capRatioA / sumCapRatios);
  const sharedKvaB = totalLoad * (capRatioB / sumCapRatios);

  const percentLoadA = (sharedKvaA / ratingA) * 100;
  const percentLoadB = (sharedKvaB / ratingB) * 100;

  const isOverloadedA = percentLoadA > 100.5;
  const isOverloadedB = percentLoadB > 100.5;

  // Maximum safe bank capacity
  const maxSafeLoadBasedOnA = ratingA * (sumCapRatios / capRatioA);
  const maxSafeLoadBasedOnB = ratingB * (sumCapRatios / capRatioB);
  const maxSafeBankCapacity = Math.min(maxSafeLoadBasedOnA, maxSafeLoadBasedOnB);

  // Circulating current calculations
  const rLoop = ra + rb;
  const xLoop = xa + xb;
  const zLoopMag = Math.sqrt(rLoop * rLoop + xLoop * xLoop);
  const deltaE = Math.abs(ea - eb);
  const icMag = zLoopMag > 0 ? deltaE / zLoopMag : 0;
  const icPowerLoss = icMag * icMag * rLoop;

  return (
    <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 text-white space-y-6 shadow-xl font-sans">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
            <GitFork className="w-4 h-4 text-cyan-400" />
            <span>{t.title}</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {t.subtitle}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab('loadSharing')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'loadSharing' ? 'bg-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.tabSharing}
          </button>
          <button
            onClick={() => setActiveTab('circulating')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'circulating' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.tabCirc}
          </button>
          <button
            onClick={() => setActiveTab('reversePolarity')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'reversePolarity' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.tabPolarity}
          </button>
        </div>
      </div>

      {/* TAB 1: KVA LOAD SHARING */}
      {activeTab === 'loadSharing' && (
        <div className="space-y-6">
          {/* Global Demand Slider */}
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-300 font-bold uppercase">{t.totalDemand}</span>
              <span className="text-base font-bold text-cyan-400">{totalLoad} kVA at {loadPf.toFixed(2)} pf</span>
            </div>
            <input
              type="range"
              min="50"
              max={ratingA + ratingB + 50}
              step="5"
              value={totalLoad}
              onChange={(e) => setTotalLoad(parseFloat(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>50 kVA</span>
              <span>Nominal Bank Rating: {ratingA + ratingB} kVA</span>
              <span>{ratingA + ratingB + 50} kVA</span>
            </div>
          </div>

          {/* Unit Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
            
            {/* Transformer A Card */}
            <div className={`p-4 rounded-xl border transition-all ${
              isOverloadedA ? 'bg-rose-950/40 border-rose-600 shadow-lg shadow-rose-950/50' : 'bg-slate-900/80 border-slate-800'
            } space-y-3`}>
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-cyan-400 uppercase">{t.unitA}</span>
                {isOverloadedA ? (
                  <span className="text-[10px] bg-rose-600 text-white px-2 py-0.5 rounded font-bold animate-pulse">
                    {t.overloadStatus}
                  </span>
                ) : (
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                    {t.safeStatus}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">{t.ratingLabel}</span>
                  <span className="font-bold text-white">{ratingA} kVA</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">{t.zpuLabel}</span>
                  <span className="font-bold text-cyan-300">{(zpuA * 100).toFixed(1)}%</span>
                </div>
              </div>

              {/* Slider for Zpu A */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Adjust Zpu,A:</span>
                  <span className="text-cyan-400 font-bold">{(zpuA * 100).toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.02"
                  max="0.08"
                  step="0.005"
                  value={zpuA}
                  onChange={(e) => setZpuA(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              {/* Loading Results */}
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t.sharedKva}</span>
                  <span className="text-base font-bold text-cyan-400">{sharedKvaA.toFixed(2)} kVA</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">{t.thermalLoad}</span>
                    <span className={`font-bold ${isOverloadedA ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {percentLoadA.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isOverloadedA ? 'bg-rose-500' : 'bg-gradient-to-r from-cyan-500 to-emerald-400'
                      }`}
                      style={{ width: `${Math.min(100, percentLoadA)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Transformer B Card */}
            <div className={`p-4 rounded-xl border transition-all ${
              isOverloadedB ? 'bg-rose-950/40 border-rose-600 shadow-lg shadow-rose-950/50' : 'bg-slate-900/80 border-slate-800'
            } space-y-3`}>
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-amber-400 uppercase">{t.unitB}</span>
                {isOverloadedB ? (
                  <span className="text-[10px] bg-rose-600 text-white px-2 py-0.5 rounded font-bold animate-pulse">
                    {t.overloadStatus}
                  </span>
                ) : (
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                    {t.safeStatus}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">{t.ratingLabel}</span>
                  <span className="font-bold text-white">{ratingB} kVA</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">{t.zpuLabel}</span>
                  <span className="font-bold text-amber-300">{(zpuB * 100).toFixed(1)}%</span>
                </div>
              </div>

              {/* Slider for Zpu B */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Adjust Zpu,B:</span>
                  <span className="text-amber-400 font-bold">{(zpuB * 100).toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.02"
                  max="0.08"
                  step="0.005"
                  value={zpuB}
                  onChange={(e) => setZpuB(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              {/* Loading Results */}
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{t.sharedKva}</span>
                  <span className="text-base font-bold text-amber-400">{sharedKvaB.toFixed(2)} kVA</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-400">{t.thermalLoad}</span>
                    <span className={`font-bold ${isOverloadedB ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {percentLoadB.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isOverloadedB ? 'bg-rose-500' : 'bg-gradient-to-r from-amber-500 to-emerald-400'
                      }`}
                      style={{ width: `${Math.min(100, percentLoadB)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Max Safe Capacity Banner */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <div className="space-y-0.5">
              <span className="text-slate-400 block">{t.maxBankCap}</span>
              <span className="text-base font-bold text-emerald-400">
                {maxSafeBankCapacity.toFixed(1)} kVA (out of combined {ratingA + ratingB} kVA rating)
              </span>
            </div>
            {Math.abs(zpuA - zpuB) > 0.001 && (
              <div className="text-[11px] text-amber-400 bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-800">
                ⚠️ Unequal per-unit impedances cause bank derating!
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: CIRCULATING CURRENT */}
      {activeTab === 'circulating' && (
        <div className="space-y-6 font-mono text-xs">
          <div className="p-3 bg-amber-950/40 rounded-xl border border-amber-800/60 text-amber-200">
            {t.circDesc}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Voltage Controls */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                Secondary No-Load Voltage Setting
              </span>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-300">{t.eaLabel}</span>
                  <span className="text-cyan-400 font-bold">{ea} V</span>
                </div>
                <input
                  type="range"
                  min="390"
                  max="420"
                  step="1"
                  value={ea}
                  onChange={(e) => setEa(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-300">{t.ebLabel}</span>
                  <span className="text-amber-400 font-bold">{eb} V</span>
                </div>
                <input
                  type="range"
                  min="390"
                  max="420"
                  step="1"
                  value={eb}
                  onChange={(e) => setEb(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-1.5 bg-slate-700 rounded-lg"
                />
              </div>

              <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800">
                <span>Voltage Difference (ΔE):</span>
                <span className="text-rose-400 font-bold">{deltaE} V ({((deltaE / 400) * 100).toFixed(2)}%)</span>
              </div>
            </div>

            {/* Results Display */}
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-4 flex flex-col justify-between">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block border-b border-slate-800 pb-2">
                Internal Circulating Current & Loss
              </span>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase block">{t.circCurrent}</span>
                  <span className="text-lg font-bold text-rose-400">{icMag.toFixed(1)} A</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                  <span className="text-[10px] text-slate-400 uppercase block">{t.circPowerLoss}</span>
                  <span className="text-lg font-bold text-amber-400">{icPowerLoss.toFixed(1)} W</span>
                </div>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                Loop Impedance Zloop = (Ra + Rb) + j(Xa + Xb) = {rLoop.toFixed(3)} + j{xLoop.toFixed(3)} Ω (|Z| = {zLoopMag.toFixed(4)} Ω).
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: REVERSE POLARITY SIMULATION */}
      {activeTab === 'reversePolarity' && (
        <div className="space-y-6 font-mono text-xs">
          <div className="p-3 bg-rose-950/40 rounded-xl border border-rose-800/60 text-rose-200">
            {t.polDesc}
          </div>

          <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 text-center space-y-4">
            {!breakerTripped ? (
              <div className="space-y-4">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 max-w-md mx-auto space-y-2">
                  <span className="text-slate-400 text-xs block">Simulate Closing Bus Tie Switch with Reversed Polarity:</span>
                  <button
                    onClick={() => setBreakerTripped(true)}
                    className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-lg shadow-lg shadow-rose-900/40 transition-all text-xs uppercase tracking-wider"
                  >
                    ⚡ Close Switch in Reverse Polarity (Dead Short)
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-rose-950/80 rounded-xl border-2 border-rose-500 max-w-lg mx-auto space-y-3">
                <div className="flex items-center justify-center gap-2 text-rose-400 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5 text-rose-400 animate-bounce" />
                  <span>{t.tripTitle}</span>
                </div>
                <p className="text-slate-300 text-xs text-left leading-relaxed">
                  {t.tripDesc}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setBreakerTripped(false)}
                    className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold rounded-lg border border-cyan-800 transition-all text-xs"
                  >
                    🔄 {t.resetBreaker}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
