import React, { useState } from 'react';
import { Language } from '../../types';
import { Wrench, AlertCircle, CheckCircle2, RefreshCw, Cpu, Zap, Activity, HelpCircle } from 'lucide-react';

interface Props {
  currentLanguage?: Language;
  language?: Language;
}

export type FaultId =
  | 'normal'
  | 'negative_power'
  | 'wrong_pf_crossphase'
  | 'kw_too_low'
  | 'wrong_ct_ratio'
  | 'blown_pt_fuse'
  | 'ct_primary_reversed'
  | 'high_demand_surge'
  | 'excessive_neutral';

export const IndustrialMeteringTroubleshooter: React.FC<Props> = ({ currentLanguage, language }) => {
  const lang = currentLanguage || language || 'en';

  const [activeFault, setActiveFault] = useState<FaultId>('negative_power');
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'meter' | 'wiring' | 'case_study'>('meter');

  // Baseline System Ratings
  const nominalVLN = 240; // 240V L-N (415V L-L)
  const nominalI = 250;   // 250A per phase
  const nominalPF = 0.88; // lagging

  // Normal Benchmark values:
  // P = 3 * 240 * 250 * 0.88 = 158.4 kW
  // S = 3 * 240 * 250 = 180 kVA
  // Q = 180 * sin(acos(0.88)) = 85.5 kVAR

  // Calculate Meter Readings based on Active Fault and Fixed status
  const getMeterReadings = () => {
    if (isFixed || activeFault === 'normal') {
      return {
        vA: 240.2, vB: 239.8, vC: 240.0,
        iA: 250.0, iB: 248.5, iC: 251.2,
        kw: 158.4, kvar: 85.5, kva: 180.0,
        pf: 0.880, pfSign: 'lag',
        inCurr: 4.2,
        ctProgrammed: '400/5A (MF=80)',
        ptRatio: '415/110V',
        status: 'NORMAL'
      };
    }

    switch (activeFault) {
      case 'negative_power':
        // CT Secondary S1/S2 reversed on Phase A: Phase A active power is negative!
        // Pa = -52.8 kW, Pb = 52.8 kW, Pc = 52.8 kW -> Total P = 52.8 kW instead of 158.4 kW
        return {
          vA: 240.0, vB: 240.0, vC: 240.0,
          iA: 250.0, iB: 250.0, iC: 250.0,
          kw: 52.8, kvar: 85.5, kva: 180.0,
          pf: 0.293, pfSign: 'lead / err',
          inCurr: 4.0,
          ctProgrammed: '400/5A (MF=80)',
          ptRatio: '415/110V',
          status: 'ERR: REVERSED POLARITY'
        };

      case 'wrong_pf_crossphase':
        // Cross-phased PT wiring: Meter receives Ia with Vb (shifted by 120°).
        // Phase angle reads ~148° lag instead of 28°, yielding near -0.85 PF on that phase
        return {
          vA: 240.0, vB: 240.0, vC: 240.0,
          iA: 250.0, iB: 250.0, iC: 250.0,
          kw: -26.5, kvar: 165.0, kva: 180.0,
          pf: -0.147, pfSign: 'invalid',
          inCurr: 4.0,
          ctProgrammed: '400/5A (MF=80)',
          ptRatio: '415/110V',
          status: 'ERR: PHASE ANGLE MISMATCH'
        };

      case 'kw_too_low':
        // Meter internal register configured for 200/5A CT instead of actual 400/5A installed
        return {
          vA: 240.0, vB: 240.0, vC: 240.0,
          iA: 125.0, iB: 125.0, iC: 125.0, // reads half current
          kw: 79.2, kvar: 42.8, kva: 90.0,
          pf: 0.880, pfSign: 'lag',
          inCurr: 2.1,
          ctProgrammed: '200/5A (MF=40) [WRONG!]',
          ptRatio: '415/110V',
          status: 'ERR: RATIO MISCONFIGURATION'
        };

      case 'wrong_ct_ratio':
        // Multiplier set to 1.0 (raw secondary) instead of MF = 80
        return {
          vA: 240.0, vB: 240.0, vC: 240.0,
          iA: 3.12, iB: 3.12, iC: 3.12,
          kw: 1.98, kvar: 1.07, kva: 2.25,
          pf: 0.880, pfSign: 'lag',
          inCurr: 0.05,
          ctProgrammed: 'MF=1.0 (Raw Secondary)',
          ptRatio: '415/110V',
          status: 'ERR: MULTIPLIER NOT APPLIED'
        };

      case 'blown_pt_fuse':
        // Phase B PT primary fuse blown: V_B drops to ~0V (or capacitive ghost ~18V)
        return {
          vA: 240.0, vB: 14.5, vC: 240.0,
          iA: 250.0, iB: 250.0, iC: 250.0,
          kw: 108.2, kvar: 58.0, kva: 126.0,
          pf: 0.858, pfSign: 'lag',
          inCurr: 4.0,
          ctProgrammed: '400/5A (MF=80)',
          ptRatio: '415/110V',
          status: 'ERR: PT PHASE B LOSS'
        };

      case 'ct_primary_reversed':
        // CT on Phase C mounted backward on primary copper bus (P2 facing source instead of P1)
        return {
          vA: 240.0, vB: 240.0, vC: 240.0,
          iA: 250.0, iB: 250.0, iC: 250.0,
          kw: 52.8, kvar: 85.5, kva: 180.0,
          pf: 0.293, pfSign: 'lead / err',
          inCurr: 4.0,
          ctProgrammed: '400/5A (MF=80)',
          ptRatio: '415/110V',
          status: 'ERR: PRIMARY CT REVERSED'
        };

      case 'high_demand_surge':
        // Uncompensated heavy startup: APFC tripped offline, power factor drops to 0.65, kVA demand spikes!
        return {
          vA: 232.0, vB: 230.5, vC: 231.0,
          iA: 420.0, iB: 418.0, iC: 422.0,
          kw: 188.0, kvar: 219.0, kva: 288.5,
          pf: 0.651, pfSign: 'poor lag',
          inCurr: 8.5,
          ctProgrammed: '400/5A (MF=80)',
          ptRatio: '415/110V',
          status: 'ALERT: PEAK DEMAND SPIKE'
        };

      case 'excessive_neutral':
        // Extreme 3rd harmonic from LED/SMPS loads + single-phase load unbalance
        return {
          vA: 238.0, vB: 241.0, vC: 236.0,
          iA: 220.0, iB: 260.0, iC: 270.0,
          kw: 165.0, kvar: 90.0, kva: 188.0,
          pf: 0.875, pfSign: 'lag',
          inCurr: 295.0, // Neutral current GREATER than phase current!
          ctProgrammed: '400/5A (MF=80)',
          ptRatio: '415/110V',
          status: 'DANGER: NEUTRAL OVERLOAD'
        };
    }
  };

  const meter = getMeterReadings();

  // Multilingual content
  const t = {
    en: {
      title: 'Industrial Three-Phase Measurement, Metering & Troubleshooting',
      subtitle: 'Diagnose real-world electrical metering errors, wiring polarity reversals, ratio mismatches, and power quality anomalies.',
      tabMeter: 'Live MFM Meter Display',
      tabWiring: 'Panel Wiring & Terminal Inspection',
      tabCases: 'Guided Industrial Case Studies',
      scenariosTitle: 'Select Industrial Metering Fault Scenario:',
      f1: '1. Negative Power Reading (Phase A)',
      f2: '2. PF & Power Angle Inversion (Cross-Phasing)',
      f3: '3. Measured kW 50% Too Low',
      f4: '4. CT Ratio Multiplier Unconfigured',
      f5: '5. Phase Voltage Loss (Blown PT Fuse)',
      f6: '6. Primary CT Installed Backwards',
      f7: '7. Unexpected Peak kVA Demand Surge',
      f8: '8. Excessive Neutral Conductor Current',
      norm: 'Normal Benchmark Condition',
      fixBtn: 'Apply Corrective Action',
      resetBtn: 'Restore Fault Condition',
      fixedBadge: 'FAULT RECTIFIED',
      activeBadge: 'FAULT ACTIVE',
      mReadings: 'Multifunction Revenue Meter (MFM)',
      voltage: 'Phase Voltages (L-N)',
      current: 'Line Currents',
      powers: 'Power & Energy Registers',
      diagnostics: 'Diagnostic Root Cause & Physical Rectification',
      case1Title: 'Case Study 1: Newly Commissioned Commercial Substation Reads 1/3 of Expected Power',
      case1Desc: 'Symptom: A 500 kVA feeder with heavy induction motor load is energized. The energy meter displays only 53 kW instead of the expected 158 kW, and power factor shows 0.29 leading despite pure inductive loading.\nRoot Cause Analysis: Phase A CT secondary wires (S1 and S2) were reversed during installation into the meter terminal block. Phase A active power integrated as negative (-52.8 kW) while Phase B and C integrated as positive (+52.8 kW each), yielding 52.8 kW net.\nCorrective Action: Short the Phase A CT secondary test block, swap S1 and S2 leads, remove the shorting clip, and verify all 3 power vectors point forward.',
      case2Title: 'Case Study 2: High Maximum Demand (MD) Penalty on Industrial Utility Bill',
      case2Desc: 'Symptom: Factory receives an exorbitant utility bill with a ₹1,20,000 maximum demand penalty. Production output was normal.\nRoot Cause Analysis: An uncompensated 150 kW compressor started simultaneously with the central chiller while the APFC capacitor bank controller was stuck in MANUAL mode with capacitors switched OFF. Power factor plummeted to 0.65 lagging, causing kVA demand to surge from 180 kVA to 288 kVA.\nCorrective Action: Reprogram the APFC controller with automatic stage switching and fast-acting contactors, and interlock compressor startup timers to stagger inrush demand.'
    },
    hi: {
      title: 'औद्योगिक थ्री-फेज मापन, मीटरिंग एवं समस्या निवारण (Troubleshooting)',
      subtitle: 'वास्तविक मीटरिंग त्रुटियों, वायरिंग पोलरिटी उत्क्रमण, CT अनुपात बेमेल और असामान्य पावर फैक्टर का निदान करें।',
      tabMeter: 'लाइव MFM मीटर डिस्प्ले',
      tabWiring: 'पैनल वायरिंग एवं टर्मिनल निरीक्षण',
      tabCases: 'औद्योगिक केस स्टडीज',
      scenariosTitle: 'औद्योगिक मीटरिंग दोष परिदृश्य चुनें:',
      f1: '1. नकारात्मक शक्ति पठन (फेज A)',
      f2: '2. गलत PF एवं फेज क्रॉस-वायरिंग',
      f3: '3. मापा गया kW 50% कम है',
      f4: '4. CT गुणक (Multiplier) सेट नहीं है',
      f5: '5. वोल्टेज हानि (PT फ्यूज उड़ना)',
      f6: '6. प्राथमिक CT उल्टा स्थापित',
      f7: '7. अप्रत्याशित अधिकतम मांग (kVA Demand) वृद्धि',
      f8: '8. अत्यधिक न्यूट्रल धारा संकट',
      norm: 'सामान्य बेंचमार्क स्थिति',
      fixBtn: 'सुधार कार्रवाई लागू करें',
      resetBtn: 'दोष स्थिति पुनः सक्रिय करें',
      fixedBadge: 'दोष सुधारा गया',
      activeBadge: 'दोष सक्रिय',
      mReadings: 'मल्टीफंक्शन रेवेन्यू मीटर (MFM)',
      voltage: 'फेज वोल्टेज (L-N)',
      current: 'लाइन धारा',
      powers: 'शक्ति एवं ऊर्जा रजिस्टर',
      diagnostics: 'नैदानिक मूल कारण एवं निवारक कार्रवाई',
      case1Title: 'केस स्टडी 1: नए सबस्टेशन में अपेक्षित शक्ति का 1/3 भाग ही प्रदर्शित होना',
      case1Desc: 'लक्षण: भारी इंडक्शन मोटर लोड होने के बावजूद मीटर 158 kW के स्थान पर केवल 53 kW और PF 0.29 लीडिंग दिखाता है।\nमूल कारण: फेज A CT के S1 और S2 तार मीटर टर्मिनल पर उल्टे जुड़े थे, जिससे फेज A की शक्ति ऋणात्मक (-52.8 kW) जुड़ रही थी।\nसुधार: CT टेस्ट ब्लॉक को शॉर्ट करें, S1 और S2 तारों को पलटें और शॉर्टिंग हटाएं।',
      case2Title: 'केस स्टडी 2: औद्योगिक बिल पर भारी मैक्सिमम डिमांड (MD) जुर्माना',
      case2Desc: 'लक्षण: कारखाने को अप्रत्याशित रूप से भारी मांग अधिभार का सामना करना पड़ा।\nमूल कारण: APFC पैनल मैनुअल मोड पर बंद था। मोटर चालू होने पर PF 0.65 तक गिर गया, जिससे kVA मांग 180 से बढ़कर 288 kVA हो गई।\nसुधार: APFC को ऑटो मोड में रीसेट करें और मोटरों के एक साथ चालू होने पर टाइमर इंटरलॉक लगाएं।'
    },
    bn: {
      title: 'শিল্প থ্রি-ফেজ পরিমাপ, মিটারিং ও ত্রুটি নিবারণ (Troubleshooting)',
      subtitle: 'বাস্তব মিটারিং ত্রুটি, ওয়্যারিং পোলারিটি রিভার্সাল, CT রেশিও অমিল এবং পাওয়ার ফ্যাক্টর সমস্যার ডায়াগনস্টিকস।',
      tabMeter: 'লাইভ MFM মিটার ডিসপ্লে',
      tabWiring: 'প্যানেল ওয়্যারিং ও টার্মিনাল পর্যবেক্ষণ',
      tabCases: 'ব্যবহারিক শিল্প কেস স্টাডি',
      scenariosTitle: 'মিটারিং ত্রুটি পরিস্থিতি নির্বাচন করুন:',
      f1: '১. নেতিবাচক পাওয়ার রিডিং (ফেজ A)',
      f2: '২. ভুল PF ও ফেজ ক্রস-ওয়্যারিং',
      f3: '৩. পরিমাপকৃত kW ৫০% কম',
      f4: '৪. CT মাল্টিপ্লায়ার সেট করা হয়নি',
      f5: '৫. ফেজ ভোল্টেজ হ্রাস (PT ফিউজ নষ্ট)',
      f6: '৬. প্রাইমারি CT উল্টোভাবে লাগানো',
      f7: '৭. অপ্রত্যাশিত সর্বোচ্চ ডিমান্ড (kVA) বৃদ্ধি',
      f8: '৮. অতিরিক্ত নিউট্রাল কারেন্ট ঝুঁকি',
      norm: 'স্বাভাবিক বেঞ্চমার্ক অবস্থা',
      fixBtn: 'সংশোধন প্রয়োগ করুন',
      resetBtn: 'ত্রুটি পুনরায় সক্রিয় করুন',
      fixedBadge: 'ত্রুটি সংশোধিত',
      activeBadge: 'ত্রুটি সক্রিয়',
      mReadings: 'মাল্টিফাংশন রেভিনিউ মিটার (MFM)',
      voltage: 'ফেজ ভোল্টেজ (L-N)',
      current: 'লাইন কারেন্ট',
      powers: 'পাওয়ার ও এনার্জি রেজিস্টার',
      diagnostics: 'মূল কারণ ও বাস্তব সমাধান',
      case1Title: 'কেস স্টাডি ১: সাবস্টেশনে প্রত্যাশিত পাওয়ারের ১/৩ ভাগ রিডিং',
      case1Desc: 'লক্ষণ: মোটর লোড থাকা সত্ত্বেও মিটার ১৫৮ kW এর বদলে মাত্র ৫৩ kW দেখাচ্ছে এবং PF দেখাচ্ছে ০.২৯ লিডিং।\nমূল কারণ: ফেজ A CT এর সেকেন্ডারি S1 এবং S2 টার্মিনাল উল্টো যুক্ত ছিল, ফলে ফেজ A এর পাওয়ার নেতিবাচক (-৫২.৮ kW) হিসাবে যোগ হচ্ছিল।\nসমাধান: CT টেস্ট ব্লকে শর্ট করে S1 ও S2 তার অদলবদল করুন।',
      case2Title: 'কেস স্টাডি ২: শিল্প বিদ্যুৎ বিলে বিপুল ম্যাক্সিমাম ডিমান্ড (MD) জরিমানা',
      case2Desc: 'লক্ষণ: স্বাভাবিক উৎপাদনের পরেও বিলে অতিরিক্ত ডিমান্ড চার্জ এসেছে।\nমূল কারণ: APFC প্যানেল বন্ধ থাকায় কম্প্রেসার শুরুর সময় PF ০.৬৫ এ নেমে যায়, যার ফলে kVA ডিমান্ড ১৮০ থেকে বেড়ে ২৮৮ kVA হয়।\nসমাধান: APFC স্বয়ংক্রিয় মোডে চালু রাখা এবং মোটর স্টার্ট টাইমার স্ট্যাগার করা।'
    }
  }[lang];

  return (
    <div id="industrial-metering-troubleshooter" className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 md:p-6 text-slate-100 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-3">
        <div>
          <div className="flex items-center gap-2 text-amber-400 mb-1">
            <Wrench className="w-5 h-5" />
            <h3 className="text-lg font-bold font-display">{t.title}</h3>
          </div>
          <p className="text-xs md:text-sm text-slate-400">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold font-mono border ${
            isFixed || activeFault === 'normal'
              ? 'bg-emerald-950 text-emerald-300 border-emerald-700'
              : 'bg-rose-950 text-rose-300 border-rose-700 animate-pulse'
          }`}>
            {isFixed || activeFault === 'normal' ? t.fixedBadge : t.activeBadge}
          </span>
        </div>
      </div>

      {/* Fault Scenario Selector */}
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {t.scenariosTitle}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
          {[
            { id: 'negative_power' as FaultId, label: t.f1 },
            { id: 'wrong_pf_crossphase' as FaultId, label: t.f2 },
            { id: 'kw_too_low' as FaultId, label: t.f3 },
            { id: 'wrong_ct_ratio' as FaultId, label: t.f4 },
            { id: 'blown_pt_fuse' as FaultId, label: t.f5 },
            { id: 'ct_primary_reversed' as FaultId, label: t.f6 },
            { id: 'high_demand_surge' as FaultId, label: t.f7 },
            { id: 'excessive_neutral' as FaultId, label: t.f8 },
          ].map((item) => (
            <button
              key={item.id}
              id={`metering-fault-${item.id}`}
              onClick={() => { setActiveFault(item.id); setIsFixed(false); }}
              className={`p-2.5 rounded-lg font-medium text-left transition-all border ${
                activeFault === item.id
                  ? 'bg-amber-950/70 border-amber-500 text-amber-200 shadow-md ring-1 ring-amber-500/50'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex justify-end pt-1">
          <button
            id="btn-metering-normal"
            onClick={() => { setActiveFault('normal'); setIsFixed(true); }}
            className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all ${
              activeFault === 'normal'
                ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            {t.norm}
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-800 text-xs font-semibold gap-4">
        <button
          onClick={() => setActiveTab('meter')}
          className={`pb-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'meter' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Cpu className="w-4 h-4" />
          {t.tabMeter}
        </button>
        <button
          onClick={() => setActiveTab('wiring')}
          className={`pb-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'wiring' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Activity className="w-4 h-4" />
          {t.tabWiring}
        </button>
        <button
          onClick={() => setActiveTab('case_study')}
          className={`pb-2 transition-all flex items-center gap-1.5 ${
            activeTab === 'case_study' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          {t.tabCases}
        </button>
      </div>

      {/* TAB 1: LIVE METER DISPLAY */}
      {activeTab === 'meter' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
            {/* Meter Top Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.mReadings}</span>
                <div className="text-sm font-mono text-cyan-400 font-bold">SCHNEIDER / ABB ION-SERIES EMULATOR</div>
              </div>
              <div className="text-right">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  meter.status === 'NORMAL' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-rose-950 text-rose-400 border border-rose-800'
                }`}>
                  {meter.status}
                </span>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">{meter.ctProgrammed}</div>
              </div>
            </div>

            {/* Meter 3-Column Register Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
              {/* Column 1: Voltages */}
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 space-y-2">
                <div className="text-xs text-slate-400 font-sans font-bold border-b border-slate-800 pb-1 flex justify-between">
                  <span>{t.voltage}</span>
                  <span className="text-[10px] text-cyan-400">V_rms</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-rose-400 font-bold">V_A:</span>
                  <span className="text-slate-100">{meter.vA.toFixed(1)} V</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-amber-400 font-bold">V_B:</span>
                  <span className={meter.vB < 50 ? 'text-rose-500 font-bold animate-pulse' : 'text-slate-100'}>
                    {meter.vB.toFixed(1)} V
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-400 font-bold">V_C:</span>
                  <span className="text-slate-100">{meter.vC.toFixed(1)} V</span>
                </div>
                <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-800/60 flex justify-between font-sans">
                  <span>PT Ratio:</span>
                  <span className="font-mono text-slate-400">{meter.ptRatio}</span>
                </div>
              </div>

              {/* Column 2: Currents */}
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 space-y-2">
                <div className="text-xs text-slate-400 font-sans font-bold border-b border-slate-800 pb-1 flex justify-between">
                  <span>{t.current}</span>
                  <span className="text-[10px] text-emerald-400">I_rms</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-rose-400 font-bold">I_A:</span>
                  <span className="text-slate-100">{meter.iA.toFixed(1)} A</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-amber-400 font-bold">I_B:</span>
                  <span className="text-slate-100">{meter.iB.toFixed(1)} A</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-blue-400 font-bold">I_C:</span>
                  <span className="text-slate-100">{meter.iC.toFixed(1)} A</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-1 border-t border-slate-800/60">
                  <span className="text-slate-400 font-sans font-bold text-xs">Neutral (In):</span>
                  <span className={meter.inCurr > 200 ? 'text-rose-400 font-bold animate-pulse' : 'text-cyan-300'}>
                    {meter.inCurr.toFixed(1)} A
                  </span>
                </div>
              </div>

              {/* Column 3: Active, Reactive & Apparent Power */}
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 space-y-2">
                <div className="text-xs text-slate-400 font-sans font-bold border-b border-slate-800 pb-1 flex justify-between">
                  <span>{t.powers}</span>
                  <span className="text-[10px] text-amber-400">Total Σ</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-emerald-400 font-bold">Active kW:</span>
                  <span className={meter.kw < 60 ? 'text-rose-400 font-bold' : 'text-slate-100'}>
                    {meter.kw.toFixed(1)} kW
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-amber-400 font-bold">Reactive:</span>
                  <span className="text-slate-100">{meter.kvar.toFixed(1)} kVAR</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-cyan-400 font-bold">Apparent:</span>
                  <span className="text-slate-100">{meter.kva.toFixed(1)} kVA</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-1 border-t border-slate-800/60">
                  <span className="text-slate-400 font-sans font-bold text-xs">Power Factor:</span>
                  <span className={`font-bold ${meter.pf < 0.7 || meter.pfSign.includes('err') ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {meter.pf.toFixed(3)} ({meter.pfSign})
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button: Fix / Reset */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-slate-950/60 p-4 rounded-xl border border-slate-800 gap-3">
            <div className="text-xs text-slate-300">
              {isFixed || activeFault === 'normal'
                ? '✓ The metering circuit is functioning correctly with nominal scaling, polarity, and phase alignment.'
                : '⚠ An active metering defect is distorting revenue and demand measurements.'}
            </div>
            <button
              id="btn-apply-metering-fix"
              onClick={() => setIsFixed(!isFixed)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                isFixed
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30'
              }`}
            >
              {isFixed ? <RefreshCw className="w-3.5 h-3.5" /> : <Wrench className="w-3.5 h-3.5" />}
              {isFixed ? t.resetBtn : t.fixBtn}
            </button>
          </div>
        </div>
      )}

      {/* TAB 2: WIRING & TERMINAL INSPECTION */}
      {activeTab === 'wiring' && (
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 text-xs">
          <div className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-2">
            Panel Terminals, CT Polarity &amp; Voltage Sensing Verification
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2 font-mono">
              <div className="text-slate-300 font-sans font-bold text-xs flex items-center justify-between">
                <span>CT Secondary Terminal Block (Shorting Links)</span>
                <span className="text-[10px] text-cyan-400">Class 0.2S</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/60 pb-1">
                <span className="text-rose-400">Phase A (S1 / S2):</span>
                <span className={activeFault === 'negative_power' && !isFixed ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                  {activeFault === 'negative_power' && !isFixed ? 'REVERSED (S2 ➔ S1)' : 'CORRECT (S1 ➔ S1, S2 ➔ S2)'}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800/60 pb-1">
                <span className="text-amber-400">Phase B (S1 / S2):</span>
                <span className="text-emerald-400">CORRECT</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/60 pb-1">
                <span className="text-blue-400">Phase C (S1 / S2):</span>
                <span className={activeFault === 'ct_primary_reversed' && !isFixed ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                  {activeFault === 'ct_primary_reversed' && !isFixed ? 'REVERSED PRIMARY ORIENTATION (P2 ➔ Source)' : 'CORRECT'}
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400">Safety Ground (S2):</span>
                <span className="text-emerald-400">TIED TO COMMON GROUND</span>
              </div>
            </div>

            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2 font-mono">
              <div className="text-slate-300 font-sans font-bold text-xs flex items-center justify-between">
                <span>Potential Transformer (PT) &amp; Voltage Sensing</span>
                <span className="text-[10px] text-amber-400">Fuses &amp; Phase Mapping</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/60 pb-1">
                <span className="text-rose-400">V_A Sensing Lead:</span>
                <span className={activeFault === 'wrong_pf_crossphase' && !isFixed ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                  {activeFault === 'wrong_pf_crossphase' && !isFixed ? 'CROSS-PHASED (Fed to V_B input)' : 'CORRECT'}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800/60 pb-1">
                <span className="text-amber-400">V_B Sensing Lead / Fuse:</span>
                <span className={activeFault === 'blown_pt_fuse' && !isFixed ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                  {activeFault === 'blown_pt_fuse' && !isFixed ? 'OPEN / BLOWN 2A PT FUSE' : 'HEALTHY (240V)'}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800/60 pb-1">
                <span className="text-blue-400">V_C Sensing Lead:</span>
                <span className="text-emerald-400">HEALTHY (240V)</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400">Neutral Reference:</span>
                <span className="text-emerald-400">SOLID NEUTRAL BOND</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GUIDED CASE STUDIES */}
      {activeTab === 'case_study' && (
        <div className="space-y-4">
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              {t.case1Title}
            </h4>
            <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">
              {t.case1Desc}
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              {t.case2Title}
            </h4>
            <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">
              {t.case2Desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
