import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Scale, Zap, AlertTriangle, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const CTPTMeteringCalculator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // CT Parameters
  const [ctPrimary, setCtPrimary] = useState<number>(400); // 400 A
  const [ctSecondary, setCtSecondary] = useState<number>(5);  // 5 A or 1 A

  // PT / VT Parameters
  const [ptPrimary, setPtPrimary] = useState<number>(11000); // 11 kV (11000 V)
  const [ptSecondary, setPtSecondary] = useState<number>(110);  // 110 V

  // Secondary Meter Readings (measured on secondary terminals)
  const [meterCurrent, setMeterCurrent] = useState<number>(3.5); // A (secondary)
  const [meterVoltage, setMeterVoltage] = useState<number>(110); // V (secondary)
  const [meterKw, setMeterKw] = useState<number>(0.55); // kW (secondary meter scale)

  // Safety switch: CT secondary loop state
  const [isCtSecondaryOpen, setIsCtSecondaryOpen] = useState<boolean>(false);

  // Calculations
  const ctRatio = ctPrimary / ctSecondary;
  const ptRatio = ptPrimary / ptSecondary;
  const overallMf = ctRatio * ptRatio;

  // Actual Primary quantities
  const actualPrimaryCurrent = meterCurrent * ctRatio;
  const actualPrimaryVoltage = meterVoltage * ptRatio;
  const actualPrimaryKw = meterKw * overallMf;
  const actualPrimaryMva = (Math.sqrt(3) * actualPrimaryVoltage * actualPrimaryCurrent) / 1000000;

  const t = {
    en: {
      title: 'CT, PT/VT & Industrial Metering Multiplication Calculator',
      subtitle: 'Instrument Transformer Scaling, Overall MF Calculation & High-Voltage CT Secondary Safety',
      ctSection: 'Current Transformer (CT) Rating',
      ptSection: 'Potential Transformer (PT/VT) Rating',
      meterSection: 'Multifunction Meter (Secondary Scale Input)',
      primaryCurrent: 'CT Primary Rating (A)',
      secondaryCurrent: 'CT Secondary Rating (A)',
      primaryVoltage: 'PT Primary Rating (V)',
      secondaryVoltage: 'PT Secondary Rating (V)',
      meterI: 'Secondary Current Reading (A)',
      meterV: 'Secondary Voltage Reading (V)',
      meterP: 'Secondary Active Power Reading (kW)',
      ratiosHeading: 'Instrument Transformer Scaling Multipliers',
      ctMultiplier: 'CT Multiplier (CTR)',
      ptMultiplier: 'PT Multiplier (PTR)',
      overallMultiplier: 'Overall Meter Factor (MF = CTR × PTR)',
      actualPrimaryValues: 'True Primary High-Voltage System Values',
      actualI: 'Actual Primary Line Current',
      actualV: 'Actual Primary Line Voltage',
      actualP: 'Actual Primary Active Power (kW)',
      actualS: 'Actual Primary Apparent Power',
      ctSafetyState: 'CT Secondary Loop Integrity Test',
      closedSafe: 'Normal Operating State: Burden Connected (Ammeter in series)',
      openHazard: 'HAZARDOUS: CT Secondary Open-Circuited Under Load!',
      ctOpenWarning: 'LETHAL SHOCK & EXPLOSION HAZARD! With the secondary open, counter-MMF vanishes. All primary current becomes magnetizing current, saturating the iron core. Rapidly collapsing flux induces thousands of volts across open secondary terminals, causing dielectric puncture and lethal arc-flash.'
    },
    hi: {
      title: 'CT, PT/VT एवं औद्योगिक मीटरिंग मल्टीप्लायर कैलकुलेटर',
      subtitle: 'इंस्ट्रूमेंट ट्रांसफार्मर स्केलिंग, समग्र MF गणना एवं हाई-वोल्टेज CT सेकेंडरी सुरक्षा',
      ctSection: 'करंट ट्रांसफार्मर (CT) रेटिंग',
      ptSection: 'पोटेंशियल ट्रांसफार्मर (PT/VT) रेटिंग',
      meterSection: 'मल्टीफंक्शन मीटर (सेकेंडरी स्केल पाठ्यांक)',
      primaryCurrent: 'CT प्राइमरी रेटिंग (A)',
      secondaryCurrent: 'CT सेकेंडरी रेटिंग (A)',
      primaryVoltage: 'PT प्राइमरी रेटिंग (V)',
      secondaryVoltage: 'PT सेकेंडरी रेटिंग (V)',
      meterI: 'सेकेंडरी करंट पाठ्यांक (A)',
      meterV: 'सेकेंडरी वोल्टेज पाठ्यांक (V)',
      meterP: 'सेकेंडरी सक्रिय शक्ति पाठ्यांक (kW)',
      ratiosHeading: 'ट्रांसफार्मर स्केलिंग गुणक',
      ctMultiplier: 'CT गुणक (CTR)',
      ptMultiplier: 'PT गुणक (PTR)',
      overallMultiplier: 'समग्र मीटर गुणक (MF = CTR × PTR)',
      actualPrimaryValues: 'वास्तविक प्राइमरी हाई-वोल्टेज प्रणाली मान',
      actualI: 'वास्तविक प्राइमरी लाइन धारा',
      actualV: 'वास्तविक प्राइमरी लाइन वोल्टेज',
      actualP: 'वास्तविक प्राइमरी सक्रिय शक्ति (kW)',
      actualS: 'वास्तविक प्राइमरी आभासी शक्ति',
      ctSafetyState: 'CT सेकेंडरी लूप अखंडता परीक्षण',
      closedSafe: 'सामान्य परिचालन स्थिति: बर्डन जुड़ा हुआ है',
      openHazard: 'अत्यंत खतरनाक: लोड के दौरान CT सेकेंडरी ओपन!',
      ctOpenWarning: 'घातक विद्युत झटका एवं विस्फोट का खतरा! सेकेंडरी ओपन होने पर काउंटर-MMF शून्य हो जाता है। पूरा प्राइमरी करंट कोर को संतृप्त करता है, जिससे सेकेंडरी टर्मिनलों पर कई हजार वोल्ट का जानलेवा स्पाइक उत्पन्न होता है।'
    },
    bn: {
      title: 'CT, PT/VT ও শিল্প মিটারিং মাল্টিপ্লায়ার ক্যালকুলেটর',
      subtitle: 'ইন্সট্রুমেন্ট ট্রান্সফরমার স্কেলিং, সার্বিক MF নির্ণয় ও উচ্চ-ভোল্টেজ CT সেকেন্ডারি নিরাপত্তা',
      ctSection: 'কারেন্ট ট্রান্সফরমার (CT) রেটিং',
      ptSection: 'পটেনশিয়াল ট্রান্সফরমার (PT/VT) রেটিং',
      meterSection: 'মাল্টিফাংশন মিটার (সেকেন্ডারি পাঠ)',
      primaryCurrent: 'CT প্রাইমারি রেটিং (A)',
      secondaryCurrent: 'CT সেকেন্ডারি রেটিং (A)',
      primaryVoltage: 'PT প্রাইমারি রেটিং (V)',
      secondaryVoltage: 'PT সেকেন্ডারি রেটিং (V)',
      meterI: 'সেকেন্ডারি কারেন্ট পাঠ (A)',
      meterV: 'সেকেন্ডারি ভোল্টেজ পাঠ (V)',
      meterP: 'সেকেন্ডারি সক্রিয় ক্ষমতা পাঠ (kW)',
      ratiosHeading: 'ইন্সট্রুমেন্ট ট্রান্সফরমার অনুপাত',
      ctMultiplier: 'CT মাল্টিপ্লায়ার (CTR)',
      ptMultiplier: 'PT মাল্টিপ্লায়ার (PTR)',
      overallMultiplier: 'সামগ্রিক মিটার ফ্যাক্টর (MF = CTR × PTR)',
      actualPrimaryValues: 'প্রকৃত প্রাইমারি উচ্চ-ভোল্টেজ সিস্টেম মান',
      actualI: 'প্রকৃত প্রাইমারি লাইন কারেন্ট',
      actualV: 'প্রকৃত প্রাইমারি লাইন ভোল্টেজ',
      actualP: 'প্রকৃত প্রাইমারি সক্রিয় ক্ষমতা (kW)',
      actualS: 'প্রকৃত প্রাইমারি আপাত ক্ষমতা',
      ctSafetyState: 'CT সেকেন্ডারি লুপ নিরাপত্তা পরীক্ষা',
      closedSafe: 'স্বাভাবিক অবস্থা: সেকেন্ডারি বার্থ সংযুক্ত',
      openHazard: 'মারাত্মক বিপজ্জনক: লোড অবস্থায় CT সেকেন্ডারি ওপেন!',
      ctOpenWarning: 'মারাত্মক বিদ্যুৎস্পৃষ্ট ও বিস্ফোরণের ঝুঁকি! সেকেন্ডারি ওপেন হলে বিপরীত MMF লোপ পায়। সমস্ত প্রাইমারি কারেন্ট কোরকে স্যাচুরেট করে সেকেন্ডারিতে কয়েক হাজার ভোল্টের প্রাণঘাতী স্পাইক তৈরি করে।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 max-w-5xl mx-auto shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20">
          <Scale className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">{t.title}</h3>
          <p className="text-xs text-slate-400">{t.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Inputs */}
        <div className="lg:col-span-6 space-y-4 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
          {/* CT Config */}
          <div className="p-3 bg-slate-900 rounded border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-amber-400 block uppercase tracking-wider">{t.ctSection}</span>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">{t.primaryCurrent}</label>
                <select
                  id={`${controlId}-ctpri`}
                  value={ctPrimary}
                  onChange={(e) => setCtPrimary(Number(e.target.value))}
                  className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded px-2.5 py-1.5 text-xs font-mono"
                >
                  <option value={100}>100 A</option>
                  <option value={200}>200 A</option>
                  <option value={400}>400 A</option>
                  <option value={600}>600 A</option>
                  <option value={800}>800 A</option>
                  <option value={1000}>1000 A</option>
                  <option value={1200}>1200 A</option>
                  <option value={2000}>2000 A</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">{t.secondaryCurrent}</label>
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setCtSecondary(5)}
                    className={`py-1.5 rounded text-xs font-mono font-bold border transition-colors ${
                      ctSecondary === 5
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    5 A
                  </button>
                  <button
                    type="button"
                    onClick={() => setCtSecondary(1)}
                    className={`py-1.5 rounded text-xs font-mono font-bold border transition-colors ${
                      ctSecondary === 1
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    1 A
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* PT Config */}
          <div className="p-3 bg-slate-900 rounded border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-cyan-400 block uppercase tracking-wider">{t.ptSection}</span>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">{t.primaryVoltage}</label>
                <select
                  id={`${controlId}-ptpri`}
                  value={ptPrimary}
                  onChange={(e) => setPtPrimary(Number(e.target.value))}
                  className="w-full bg-slate-800 text-slate-200 border border-slate-700 rounded px-2.5 py-1.5 text-xs font-mono"
                >
                  <option value={415}>415 V (LV)</option>
                  <option value={3300}>3.3 kV (3300 V)</option>
                  <option value={6600}>6.6 kV (6600 V)</option>
                  <option value={11000}>11 kV (11,000 V)</option>
                  <option value={22000}>22 kV (22,000 V)</option>
                  <option value={33000}>33 kV (33,000 V)</option>
                  <option value={66000}>66 kV (66,000 V)</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">{t.secondaryVoltage}</label>
                <div className="grid grid-cols-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setPtSecondary(110)}
                    className={`py-1.5 rounded text-xs font-mono font-bold border transition-colors ${
                      ptSecondary === 110
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    110 V
                  </button>
                  <button
                    type="button"
                    onClick={() => setPtSecondary(230)}
                    className={`py-1.5 rounded text-xs font-mono font-bold border transition-colors ${
                      ptSecondary === 230
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    230 V
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Meter Readings */}
          <div className="p-3 bg-slate-900 rounded border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider">{t.meterSection}</span>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">{t.meterI}</span>
                  <span className="font-mono text-emerald-300 font-bold">{meterCurrent.toFixed(2)} A</span>
                </div>
                <input
                  id={`${controlId}-meteri`}
                  type="range"
                  min="0.5"
                  max={ctSecondary * 1.2}
                  step="0.05"
                  value={meterCurrent}
                  onChange={(e) => setMeterCurrent(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 h-1 rounded cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">{t.meterP}</span>
                  <span className="font-mono text-emerald-300 font-bold">{meterKw.toFixed(2)} kW</span>
                </div>
                <input
                  id={`${controlId}-meterp`}
                  type="range"
                  min="0.05"
                  max="1.5"
                  step="0.01"
                  value={meterKw}
                  onChange={(e) => setMeterKw(Number(e.target.value))}
                  className="w-full accent-emerald-500 bg-slate-800 h-1 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* CT Safety Simulation Toggle */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setIsCtSecondaryOpen(!isCtSecondaryOpen)}
              className={`w-full p-2.5 rounded border text-xs font-medium flex items-center justify-between transition-colors ${
                isCtSecondaryOpen
                  ? 'bg-rose-950 border-rose-600 text-rose-200 animate-pulse'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                {isCtSecondaryOpen ? <ShieldAlert className="w-4 h-4 text-rose-400" /> : <CheckCircle className="w-4 h-4 text-emerald-400" />}
                <span>{isCtSecondaryOpen ? t.openHazard : t.closedSafe}</span>
              </div>
              <span className="font-mono text-[10px] uppercase underline">
                {isCtSecondaryOpen ? 'CLOSE LOOP' : 'TEST OPEN FAULT'}
              </span>
            </button>
          </div>
        </div>

        {/* Right Output Dashboard */}
        <div className="lg:col-span-6 space-y-4">
          {/* Multiplier Metrics */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-slate-950 p-3 rounded-lg border border-amber-900/40 text-center">
              <span className="text-[10px] text-amber-400 font-semibold block">{t.ctMultiplier}</span>
              <div className="text-xl font-bold font-mono text-amber-300">{ctRatio.toFixed(1)}</div>
              <span className="text-[10px] text-slate-500 font-mono">{ctPrimary}/{ctSecondary}A</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-cyan-900/40 text-center">
              <span className="text-[10px] text-cyan-400 font-semibold block">{t.ptMultiplier}</span>
              <div className="text-xl font-bold font-mono text-cyan-300">{ptRatio.toFixed(1)}</div>
              <span className="text-[10px] text-slate-500 font-mono">{ptPrimary}/{ptSecondary}V</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-emerald-900/40 text-center">
              <span className="text-[10px] text-emerald-400 font-semibold block">Overall MF</span>
              <div className="text-xl font-bold font-mono text-emerald-300">{overallMf.toLocaleString()}</div>
              <span className="text-[10px] text-slate-500 font-mono">CTR × PTR</span>
            </div>
          </div>

          {/* Actual Primary Power & Quantities */}
          <div className="bg-slate-950/90 p-4 rounded-lg border border-slate-800 space-y-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">{t.actualPrimaryValues}</span>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{t.actualI}</span>
                <div className="text-lg font-bold font-mono text-amber-400">
                  {actualPrimaryCurrent.toFixed(1)} <span className="text-xs font-normal text-slate-500">A</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">{meterCurrent.toFixed(2)}A × {ctRatio}</span>
              </div>

              <div className="p-2.5 bg-slate-900 rounded border border-slate-800">
                <span className="text-[10px] text-slate-400 block">{t.actualV}</span>
                <div className="text-lg font-bold font-mono text-cyan-400">
                  {(actualPrimaryVoltage / 1000).toFixed(2)} <span className="text-xs font-normal text-slate-500">kV</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">{meterVoltage}V × {ptRatio}</span>
              </div>
            </div>

            <div className="p-3 bg-emerald-950/30 rounded-lg border border-emerald-800/50 flex justify-between items-center">
              <div>
                <span className="text-xs text-emerald-400 font-semibold block">{t.actualP}</span>
                <span className="text-[11px] text-slate-400 font-mono">Meter Reading ({meterKw} kW) × MF ({overallMf})</span>
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-300">
                {actualPrimaryKw.toFixed(1)} <span className="text-xs font-normal text-slate-400">kW</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 flex justify-between font-mono px-1">
              <span>High-Voltage Apparent Power:</span>
              <span className="text-slate-200 font-bold">{actualPrimaryMva.toFixed(2)} MVA</span>
            </div>
          </div>

          {/* CT Safety Alert Box */}
          {isCtSecondaryOpen && (
            <div className="p-3.5 bg-rose-950/70 border border-rose-600 rounded-lg text-rose-200 text-xs flex items-start gap-2.5 shadow-lg">
              <ShieldAlert className="w-6 h-6 shrink-0 text-rose-400 mt-0.5" />
              <div>
                <span className="font-bold text-rose-100 block mb-1">CRITICAL ELECTRICAL SAFETY VIOLATION</span>
                <p className="leading-relaxed">{t.ctOpenWarning}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
