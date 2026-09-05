import React, { useState, useId } from 'react';
import { Language } from '../../types';
import { Layers, Activity, AlertTriangle, CheckCircle2, ShieldCheck } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export const ThreeWattmeterMeasurementSimulator: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';
  const controlId = useId();

  // Phase Voltages (V)
  const [va, setVa] = useState<number>(230);
  const [vb, setVb] = useState<number>(230);
  const [vc, setVc] = useState<number>(230);

  // Phase Currents (A)
  const [ia, setIa] = useState<number>(35);
  const [ib, setIb] = useState<number>(20);
  const [ic, setIc] = useState<number>(50);

  // Phase Power Factors
  const [pfa, setPfa] = useState<number>(0.85);
  const [pfb, setPfb] = useState<number>(0.92);
  const [pfc, setPfc] = useState<number>(0.65);

  // Individual Phase Active Powers (W = V * I * PF)
  const w1Kw = (va * ia * pfa) / 1000;
  const w2Kw = (vb * ib * pfb) / 1000;
  const w3Kw = (vc * ic * pfc) / 1000;

  const totalKw = w1Kw + w2Kw + w3Kw;

  // Individual Phase Reactive Powers (Q = V * I * sin φ)
  const q1Kvar = (va * ia * Math.sin(Math.acos(Math.min(1, pfa)))) / 1000;
  const q2Kvar = (vb * ib * Math.sin(Math.acos(Math.min(1, pfb)))) / 1000;
  const q3Kvar = (vc * ic * Math.sin(Math.acos(Math.min(1, pfc)))) / 1000;

  const totalKvar = q1Kvar + q2Kvar + q3Kvar;

  // Apparent powers
  const s1Kva = (va * ia) / 1000;
  const s2Kva = (vb * ib) / 1000;
  const s3Kva = (vc * ic) / 1000;
  const totalKvaVector = Math.sqrt(totalKw * totalKw + totalKvar * totalKvar);

  const systemPf = totalKvaVector > 0 ? totalKw / totalKvaVector : 1.0;

  // Comparison: Why Two-Wattmeter Fails on 4-Wire Unbalanced Loads
  const hasNeutralCurrent = Math.abs(ia - ib) > 2 || Math.abs(ib - ic) > 2;

  const t = {
    en: {
      title: 'Three-Wattmeter Method & 4-Wire Industrial Power Analyzer',
      subtitle: 'Blondel\'s Theorem N-1 Rule: Independent Phase Power Measurement in Unbalanced Systems',
      phaseA: 'Phase A Parameters',
      phaseB: 'Phase B Parameters',
      phaseC: 'Phase C Parameters',
      volt: 'Phase Voltage (V)',
      curr: 'Phase Current (I)',
      pf: 'Displacement PF (cos φ)',
      meterReadings: 'Phase Wattmeter Observations',
      w1: 'Wattmeter 1 (Phase A)',
      w2: 'Wattmeter 2 (Phase B)',
      w3: 'Wattmeter 3 (Phase C)',
      totalPower: 'Total System Active Power (P_total = W₁ + W₂ + W₃)',
      totalReactive: 'Total System Reactive Power (Q_total)',
      apparentKva: 'Total System Apparent Power (S_total)',
      systemPf: 'Overall System Power Factor',
      blondelRule: 'Blondel Compliance Note',
      blondelText: 'For an N-wire electrical distribution system, exactly (N - 1) wattmeters are mathematically necessary and sufficient to measure total active power under ANY load condition (balanced or unbalanced). Hence a 4-wire network strictly requires 3 wattmeters (4 - 1 = 3). Attempting to use only 2 wattmeters on a 4-wire system with neutral current produces measurement error.'
    },
    hi: {
      title: 'थ्री-वाटमीटर विधि एवं 4-वायर औद्योगिक शक्ति विश्लेषक',
      subtitle: 'ब्लोन्डेल प्रमेय (N-1 नियम): असंतुलित प्रणालियों में स्वतंत्र फेज शक्ति मापन',
      phaseA: 'फेज A पैरामीटर',
      phaseB: 'फेज B पैरामीटर',
      phaseC: 'फेज C पैरामीटर',
      volt: 'फेज वोल्टेज (V)',
      curr: 'फेज करंट (I)',
      pf: 'पावर फैक्टर (cos φ)',
      meterReadings: 'फेज वाटमीटर पाठ्यांक',
      w1: 'वाटमीटर 1 (फेज A)',
      w2: 'वाटमीटर 2 (फेज B)',
      w3: 'वाटमीटर 3 (फेज C)',
      totalPower: 'कुल सक्रिय शक्ति (P_total = W₁ + W₂ + W₃)',
      totalReactive: 'कुल रिएक्टिव शक्ति (Q_total)',
      apparentKva: 'कुल आभासी शक्ति (S_total)',
      systemPf: 'समग्र प्रणाली पावर फैक्टर',
      blondelRule: 'ब्लोन्डेल अनुपालन नोट',
      blondelText: 'N-तार वाली प्रणाली में कुल शक्ति मापने के लिए ठीक (N - 1) वाटमीटर आवश्यक होते हैं। अतः 4-तार नेटवर्क में 3 वाटमीटर (4 - 1 = 3) अनिवार्य हैं। न्यूट्रल करंट बहने पर 2 वाटमीटर लगाने से गलत रीडिंग आती है।'
    },
    bn: {
      title: 'থ্রি-ওয়াটমিটার পদ্ধতি ও ৪-তার শিল্প পাওয়ার বিশ্লেষক',
      subtitle: 'ব্লন্ডেলের N-১ সূত্র: ভারসাম্যহীন সিস্টেমে প্রতিটি ফেজের স্বতন্ত্র ক্ষমতা পরিমাপ',
      phaseA: 'ফেজ A প্যারামিটার',
      phaseB: 'ফেজ B প্যারামিটার',
      phaseC: 'ফেজ C প্যারামিটার',
      volt: 'ফেজ ভোল্টেজ (V)',
      curr: 'ফেজ কারেন্ট (I)',
      pf: 'পাওয়ার ফ্যাক্টর (cos φ)',
      meterReadings: 'ওয়াটমিটার পর্যবেক্ষণ',
      w1: 'ওয়াটমিটার ১ (ফেজ A)',
      w2: 'ওয়াটমিটার ২ (ফেজ B)',
      w3: 'ওয়াটমিটার ৩ (ফেজ C)',
      totalPower: 'মোট সক্রিয় ক্ষমতা (P_total = W₁ + W₂ + W₃)',
      totalReactive: 'মোট রিঅ্যাক্টিভ ক্ষমতা (Q_total)',
      apparentKva: 'মোট আপাত ক্ষমতা (S_total)',
      systemPf: 'সামগ্রিক সিস্টেম পাওয়ার ফ্যাক্টর',
      blondelRule: 'ব্লন্ডেল তত্ত্বের নিয়ম',
      blondelText: 'যেকোনো N-তার বিশিষ্ট সিস্টেমে মোট শক্তি সঠিকভাবে মাপতে ন্যূনতম (N - ১) টি ওয়াটমিটার প্রয়োজন। সুতরাং ৪-তার সিস্টেমে অবশ্যই ৩টি ওয়াটমিটার (৪ - ১ = ৩) লাগবে। নিউট্রাল কারেন্ট থাকা অবস্থায় ২টি ওয়াটমিটার ব্যবহার করলে পরিমাপে মারাত্মক ভুল হয়।'
    }
  }[lang];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100 max-w-5xl mx-auto shadow-xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
        <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
          <Layers className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">{t.title}</h3>
          <p className="text-xs text-slate-400">{t.subtitle}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-3 bg-slate-950/60 p-4 rounded-lg border border-slate-800/80">
          {/* Phase A */}
          <div className="p-2.5 bg-slate-900 rounded border border-red-900/40 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-red-400 font-bold">{t.phaseA}</span>
              <span className="font-mono text-slate-300 text-[11px]">{va}V · {ia}A · PF {pfa.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[10px] text-slate-400 block">{t.curr}</span>
                <input
                  id={`${controlId}-ia`}
                  type="range"
                  min="5"
                  max="100"
                  value={ia}
                  onChange={(e) => setIa(Number(e.target.value))}
                  className="w-full accent-red-500 bg-slate-800 h-1 rounded"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">{t.pf}</span>
                <input
                  id={`${controlId}-pfa`}
                  type="range"
                  min="0.2"
                  max="1.0"
                  step="0.02"
                  value={pfa}
                  onChange={(e) => setPfa(Number(e.target.value))}
                  className="w-full accent-red-500 bg-slate-800 h-1 rounded"
                />
              </div>
            </div>
          </div>

          {/* Phase B */}
          <div className="p-2.5 bg-slate-900 rounded border border-yellow-900/40 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-yellow-400 font-bold">{t.phaseB}</span>
              <span className="font-mono text-slate-300 text-[11px]">{vb}V · {ib}A · PF {pfb.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[10px] text-slate-400 block">{t.curr}</span>
                <input
                  id={`${controlId}-ib`}
                  type="range"
                  min="5"
                  max="100"
                  value={ib}
                  onChange={(e) => setIb(Number(e.target.value))}
                  className="w-full accent-yellow-500 bg-slate-800 h-1 rounded"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">{t.pf}</span>
                <input
                  id={`${controlId}-pfb`}
                  type="range"
                  min="0.2"
                  max="1.0"
                  step="0.02"
                  value={pfb}
                  onChange={(e) => setPfb(Number(e.target.value))}
                  className="w-full accent-yellow-500 bg-slate-800 h-1 rounded"
                />
              </div>
            </div>
          </div>

          {/* Phase C */}
          <div className="p-2.5 bg-slate-900 rounded border border-blue-900/40 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-blue-400 font-bold">{t.phaseC}</span>
              <span className="font-mono text-slate-300 text-[11px]">{vc}V · {ic}A · PF {pfc.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-[10px] text-slate-400 block">{t.curr}</span>
                <input
                  id={`${controlId}-ic`}
                  type="range"
                  min="5"
                  max="100"
                  value={ic}
                  onChange={(e) => setIc(Number(e.target.value))}
                  className="w-full accent-blue-500 bg-slate-800 h-1 rounded"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block">{t.pf}</span>
                <input
                  id={`${controlId}-pfc`}
                  type="range"
                  min="0.2"
                  max="1.0"
                  step="0.02"
                  value={pfc}
                  onChange={(e) => setPfc(Number(e.target.value))}
                  className="w-full accent-blue-500 bg-slate-800 h-1 rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Display Column */}
        <div className="lg:col-span-6 space-y-4">
          {/* Individual Wattmeter Readings */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-slate-950 p-3 rounded-lg border border-red-900/40 text-center">
              <span className="text-[10px] text-red-400 font-bold block">{t.w1}</span>
              <div className="text-lg font-bold font-mono text-red-300">{w1Kw.toFixed(2)}</div>
              <span className="text-[10px] text-slate-500 font-mono">kW</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-yellow-900/40 text-center">
              <span className="text-[10px] text-yellow-400 font-bold block">{t.w2}</span>
              <div className="text-lg font-bold font-mono text-yellow-300">{w2Kw.toFixed(2)}</div>
              <span className="text-[10px] text-slate-500 font-mono">kW</span>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-blue-900/40 text-center">
              <span className="text-[10px] text-blue-400 font-bold block">{t.w3}</span>
              <div className="text-lg font-bold font-mono text-blue-300">{w3Kw.toFixed(2)}</div>
              <span className="text-[10px] text-slate-500 font-mono">kW</span>
            </div>
          </div>

          {/* Summation Card */}
          <div className="bg-slate-950/90 p-3.5 rounded-lg border border-slate-800 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400 font-medium">Total Three-Phase Real Power:</span>
              <span className="text-xl font-mono font-bold text-emerald-400">{totalKw.toFixed(2)} kW</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Total Reactive Power:</span>
              <span className="font-mono font-bold text-amber-400">{totalKvar.toFixed(2)} kVAR</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Total Apparent Power:</span>
              <span className="font-mono font-bold text-cyan-400">{totalKvaVector.toFixed(2)} kVA</span>
            </div>
            <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-800">
              <span className="text-slate-300 font-medium">{t.systemPf}:</span>
              <span className="font-mono font-bold text-slate-200">{systemPf.toFixed(3)}</span>
            </div>
          </div>

          {/* Blondel's Theorem Architecture Box */}
          <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg text-xs text-slate-300 space-y-1">
            <div className="flex items-center gap-1.5 text-indigo-400 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.blondelRule}</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {t.blondelText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
