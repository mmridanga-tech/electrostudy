import React, { useState } from 'react';
import { Language } from '../../types';
import { 
  ShieldAlert, 
  ShieldCheck, 
  AlertTriangle, 
  Flame, 
  Activity, 
  Zap, 
  Droplet, 
  Wind, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

interface TransformerProtectionAnimationProps {
  language?: Language;
}

type FaultMode = 
  | 'normal'
  | 'overload'
  | 'externalFault'
  | 'internalWindingFault'
  | 'earthFault'
  | 'overtemperature'
  | 'lowOil'
  | 'coolingFailure'
  | 'surge';

export const TransformerProtectionAnimation: React.FC<TransformerProtectionAnimationProps> = ({
  language = 'en'
}) => {
  const [selectedFault, setSelectedFault] = useState<FaultMode>('normal');

  // Translations
  const t = {
    en: {
      title: 'Transformer Protection & Fault Diagnostic Simulator',
      subtitle: 'Interactive analysis of internal vs external faults, differential zones, Buchholz relays, and trip sequences',
      labelModes: 'Simulate Operating / Fault Condition:',
      modeNormal: 'Normal Healthy',
      modeOverload: 'Overload (140%)',
      modeExtFault: 'External (Through) Fault',
      modeIntFault: 'Internal Winding Fault',
      modeEarthFault: 'Internal Earth Fault',
      modeOvertemp: 'Overtemperature',
      modeLowOil: 'Low Oil Level',
      modeCoolingFail: 'Cooling System Failure',
      modeSurge: 'Lightning / Line Surge',
      resetBtn: 'Reset to Normal State',
      // Status card
      diagTitle: 'Protection Diagnostic & Relay Annunciation',
      statusLabel: 'Operating Status:',
      activeDevices: 'Activated Relays / Sensors:',
      tripState: 'Action / Interlock:',
      zoneStatus: 'Protected Zone Status:',
      explanation: 'Engineering Diagnostic Analysis:',
      // Relay names
      rDiff: '87T Biased Differential Relay',
      rBuchAlarm: '96 Buchholz Gas Alarm (Upper Float)',
      rBuchTrip: '96 Buchholz Oil Surge Trip (Lower Vane)',
      rOC: '50/51 Time-Overcurrent Relay',
      rEF: '51N / REF Restricted Earth Fault Relay',
      rWTI: '49 WTI/OTI Thermal Protection',
      rPRD: '63 Pressure Relief Device (PRD)',
      rMOG: 'Magnetic Oil Gauge (MOG) Low Level',
      rLA: 'Lightning / Surge Arrester (ZnO)',
      // States
      stateNormal: 'HEALTHY OPERATION',
      stateAlarm: 'ALARM ANNUNCIATION (Non-Tripping)',
      stateTrip: 'EMERGENCY TRIP INITIATED (CBs Opened)',
      zoneHealthy: 'Internal Zone Stable (Id ≈ 0)',
      zoneInternal: 'INTERNAL FAULT IN 87T ZONE (High Id)',
      zoneExternal: 'EXTERNAL (THROUGH) FAULT (Id = 0, Outside CTs)',
      // Educational disclaimer
      disclaimer: 'Educational Simulation Model: Demonstrates relay pickup logic and primary protection discrimination.'
    },
    hi: {
      title: 'ट्रांसफॉर्मर सुरक्षा एवं फॉल्ट डायग्नोस्टिक सिमुलेटर',
      subtitle: 'आंतरिक व बाह्य फॉल्ट, डिफरेंशियल ज़ोन, बुखोल्ज़ रिले एवं ट्रिप अनुक्रम का सजीव विश्लेषण',
      labelModes: 'ऑपरेटिंग / फॉल्ट स्थिति चुनें:',
      modeNormal: 'सामान्य (स्वस्थ)',
      modeOverload: 'ओवरलोड (140%)',
      modeExtFault: 'बाहरी (थ्रू) फॉल्ट',
      modeIntFault: 'आंतरिक वाइंडिंग फॉल्ट',
      modeEarthFault: 'आंतरिक अर्थ फॉल्ट',
      modeOvertemp: 'अत्यधिक तापमान (Overtemp)',
      modeLowOil: 'कम तेल स्तर (Low Oil)',
      modeCoolingFail: 'कूलिंग सिस्टम विफलता',
      modeSurge: 'तड़ित / लाइन सर्ज (Surge)',
      resetBtn: 'सामान्य स्थिति पर रीसेट करें',
      diagTitle: 'सुरक्षा डायग्नोस्टिक एवं रिले अलार्म संकेत',
      statusLabel: 'परिचालन स्थिति:',
      activeDevices: 'सक्रिय रिले / सेंसर:',
      tripState: 'सुरक्षा कार्रवाई:',
      zoneStatus: 'संरक्षित ज़ोन स्थिति:',
      explanation: 'इंजीनियरिंग डायग्नोस्टिक विवरण:',
      rDiff: '87T बायस्ड डिफरेंशियल रिले',
      rBuchAlarm: '96 बुखोल्ज़ गैस अलार्म (ऊपरी फ्लोट)',
      rBuchTrip: '96 बुखोल्ज़ ऑयल सर्ज ट्रिप (निचला वेन)',
      rOC: '50/51 टाइम-ओवरकरंट रिले',
      rEF: '51N / REF प्रतिबंधित अर्थ फॉल्ट रिले',
      rWTI: '49 WTI/OTI थर्मल सुरक्षा',
      rPRD: '63 प्रेशर रिलीफ डिवाइस (PRD)',
      rMOG: 'मैग्नेटिक ऑयल गेज (MOG) निम्न स्तर',
      rLA: 'सर्ज अरेस्टर (ZnO लाइटनिंग अरेस्टर)',
      stateNormal: 'सामान्य स्वस्थ संचालन',
      stateAlarm: 'चेतावनी अलार्म (गैर-ट्रिपिंग)',
      stateTrip: 'आपातकालीन ट्रिप (सर्किट ब्रेकर ओपन)',
      zoneHealthy: 'आंतरिक ज़ोन सुरक्षित (Id ≈ 0)',
      zoneInternal: '87T ज़ोन में आंतरिक फॉल्ट (उच्च Id)',
      zoneExternal: 'बाहरी थ्रू-फॉल्ट (CT के बाहर, Id = 0)',
      disclaimer: 'शैक्षणिक सिमुलेशन मॉडल: रिले पिकअप लॉजिक एवं सुरक्षा समन्वय का प्रदर्शन।'
    },
    bn: {
      title: 'ট্রান্সফর্মার প্রটেকশন ও ফল্ট ডায়াগনস্টিক সিমুলেটর',
      subtitle: 'অভ্যন্তরীণ বনাম বাহ্যিক ফল্ট, ডিফারেনশিয়াল জোন, বুকহলজ রিলে ও ট্রিপ প্রক্রিয়ার ইন্টারঅ্যাক্টিভ বিশ্লেষণ',
      labelModes: 'অপারেটিং বা ফল্ট অবস্থা নির্বাচন করুন:',
      modeNormal: 'স্বাভাবিক (সুস্থ)',
      modeOverload: 'ওভারলোড (১৪০%)',
      modeExtFault: 'বাহ্যিক (থ্রু) ফল্ট',
      modeIntFault: 'অভ্যন্তরীণ ওয়াইন্ডিং ফল্ট',
      modeEarthFault: 'অভ্যন্তরীণ আর্থ ফল্ট',
      modeOvertemp: 'অতিরিক্ত তাপমাত্রা',
      modeLowOil: 'তেলের নিম্ন স্তর (Low Oil)',
      modeCoolingFail: 'কুলিং সিস্টেম ফেইলিওর',
      modeSurge: 'বজ্রপাত / লাইন সার্জ (Surge)',
      resetBtn: 'স্বাভাবিক অবস্থায় রিসেট করুন',
      diagTitle: 'প্রটেকশন ডায়াগনস্টিক ও রিলে সংকেত',
      statusLabel: 'অপারেটিং স্ট্যাটাস:',
      activeDevices: 'সক্রিয় রিলে ও সেন্সর:',
      tripState: 'গৃহীত ব্যবস্থা:',
      zoneStatus: 'প্রটেকশন জোন অবস্থা:',
      explanation: 'প্রকৌশলগত ডায়াগনস্টিক বিশ্লেষণ:',
      rDiff: '87T বায়াসড ডিফারেনশিয়াল রিলে',
      rBuchAlarm: '96 বুকহলজ গ্যাস অ্যালার্ম (উপরের ফ্লোট)',
      rBuchTrip: '96 বুকহলজ তেল প্রবাহ ট্রিপ (নিচের ভেন)',
      rOC: '50/51 টাইম-ওভারকারেন্ট রিলে',
      rEF: '51N / REF রেস্ট্রিক্টেড আর্থ ফল্ট রিলে',
      rWTI: '49 WTI/OTI থার্মাল প্রটেকশন',
      rPRD: '63 প্রেসার রিলিফ ডিভাইস (PRD)',
      rMOG: 'ম্যাগনেটিক অয়েল গেজ (MOG) নিম্ন স্তর',
      rLA: 'সার্জ অ্যারেস্টার (ZnO)',
      stateNormal: 'স্বাভাবিক সুস্থ পরিচালনা',
      stateAlarm: 'সতর্কতা অ্যালার্ম (নন-ট্রিপিং)',
      stateTrip: 'জরুরি ট্রিপ (সার্কিট ব্রেকার বিচ্ছিন্ন)',
      zoneHealthy: 'অভ্যন্তরীণ জোন নিরাপদ (Id ≈ 0)',
      zoneInternal: '87T জোনের ভেতরে অভ্যন্তরীণ ফল্ট (উচ্চ Id)',
      zoneExternal: 'বাহ্যিক থ্রু ফল্ট (CT-এর বাইরে, Id = 0)',
      disclaimer: 'শিক্ষামূলক সিমুলেশন মডেল: রিলে পিকআপ লজিক ও প্রটেকশন সমন্বয় প্রদর্শনের জন্য।'
    }
  }[language] || {
    title: 'Transformer Protection Simulator',
    subtitle: 'Simulate protection schemes and fault diagnosis',
    labelModes: 'Select Mode:',
    modeNormal: 'Normal',
    modeOverload: 'Overload',
    modeExtFault: 'External Fault',
    modeIntFault: 'Internal Fault',
    modeEarthFault: 'Earth Fault',
    modeOvertemp: 'Overtemperature',
    modeLowOil: 'Low Oil',
    modeCoolingFail: 'Cooling Failure',
    modeSurge: 'Surge',
    resetBtn: 'Reset',
    diagTitle: 'Protection Diagnostic',
    statusLabel: 'Status:',
    activeDevices: 'Active Relays:',
    tripState: 'Action:',
    zoneStatus: 'Zone Status:',
    explanation: 'Analysis:',
    rDiff: '87T Differential Relay',
    rBuchAlarm: 'Buchholz Gas Alarm',
    rBuchTrip: 'Buchholz Surge Trip',
    rOC: '50/51 Overcurrent Relay',
    rEF: '51N Earth Fault Relay',
    rWTI: '49 WTI/OTI Thermal Relay',
    rPRD: '63 Pressure Relief Device',
    rMOG: 'MOG Low Oil Level',
    rLA: 'Surge Arrester',
    stateNormal: 'HEALTHY',
    stateAlarm: 'ALARM',
    stateTrip: 'TRIPPED',
    zoneHealthy: 'Zone Healthy',
    zoneInternal: 'Internal Fault in Zone',
    zoneExternal: 'External Fault',
    disclaimer: 'Educational Simulation'
  };

  // Fault details generator
  const getFaultDetails = (mode: FaultMode) => {
    switch (mode) {
      case 'normal':
        return {
          status: t.stateNormal,
          statusColor: 'text-emerald-400 border-emerald-500 bg-emerald-950/40',
          devices: ['All monitoring systems normal (OTI: 55°C, WTI: 68°C, MOG: Normal, Differential Id = 0.02 A)'],
          action: 'Normal power transmission. Secondary and primary circuit breakers CLOSED.',
          zone: t.zoneHealthy,
          zoneColor: 'text-emerald-400',
          desc: {
            en: 'The transformer is operating within nominal ratings. Primary current perfectly balances secondary current when scaled by turns ratio (I1_sec ≈ I2_sec). The differential current circulating in the 87T operating coil is near zero (only negligible magnetizing current). WTI and OTI temperature indicators remain well below alarm thresholds.',
            hi: 'ट्रांसफॉर्मर अपनी रेटेड क्षमता के भीतर सामान्य रूप से कार्य कर रहा है। प्राइमरी धारा और सेकेंडरी धारा अनुपात के अनुसार पूर्णतः संतुलित हैं। 87T डिफरेंशियल रिले में कोई असंतुलित धारा (Id ≈ 0) नहीं है। तेल और वाइंडिंग का तापमान सामान्य सीमा (55°C/68°C) में है।',
            bn: 'ট্রান্সফরমারটি তার নির্ধারিত রেটিংয়ের মধ্যে স্বাভাবিকভাবে কাজ করছে। প্রাইমারি ও সেকেন্ডারি কারেন্ট টার্ন অনুপাত অনুযায়ী সম্পূর্ণ ভারসাম্যপূর্ণ। 87T ডিফারেনশিয়াল রিলেতে কোনো ভারসাম্যহীন কারেন্ট নেই (Id ≈ 0)। তাপমাত্রা ও তেলের স্তর সম্পূর্ণ নিরাপদ।'
          }[language]
        };

      case 'overload':
        return {
          status: t.stateAlarm,
          statusColor: 'text-amber-400 border-amber-500 bg-amber-950/40',
          devices: [t.rWTI, t.rOC],
          action: 'Stage 1: Automatic cooling fans/pumps engage. Stage 2: Audible/visual SCADA alarm. Inverse-time overcurrent (51) countdown active.',
          zone: t.zoneHealthy,
          zoneColor: 'text-amber-400',
          desc: {
            en: 'Sustained load demand has reached 140% of rated capacity. Current magnitude has increased identically on both primary and secondary sides, keeping differential current Id = 0 (87T differential does NOT trip). WTI reaches 95°C, activating auxiliary cooling fans. If sustained, 51 time-overcurrent relay will trip the breaker before thermal insulation degradation occurs.',
            hi: 'लोड मांग 140% तक बढ़ गई है। प्राइमरी और सेकेंडरी दोनों तरफ करंट समान अनुपात में बढ़ा है, अतः डिफरेंशियल रिले (87T) ट्रिप नहीं होता (Id = 0)। वाइंडिंग तापमान 95°C पर पहुँचने से ऑटोमैटिक कूलिंग पंखे चालू हो जाते हैं और SCADA अलार्म बजता है।',
            bn: 'লোড চাহিদা ১৪০% এ পৌঁছেছে। প্রাইমারি ও সেকেন্ডারি উভয় পাশেই সমানুপাতিক কারেন্ট বৃদ্ধির কারণে ডিফারেনশিয়াল রিলে (87T) ট্রিপ করে না (Id = 0)। তাপমাত্রা ৯৫°C এ পৌঁছায় কুলিং ফ্যান চালু হয় এবং অ্যালার্ম সক্রিয় হয়।'
          }[language]
        };

      case 'externalFault':
        return {
          status: t.stateNormal + ' / ' + t.stateAlarm,
          statusColor: 'text-amber-400 border-amber-500 bg-amber-950/40',
          devices: [t.rOC + ' (Back-up protection picks up with time delay)'],
          action: 'Through-fault current passes through transformer. Downstream feeder breaker is expected to clear the fault within 100 ms.',
          zone: t.zoneExternal,
          zoneColor: 'text-amber-400',
          desc: {
            en: 'A heavy short-circuit occurred on an external outgoing distribution feeder outside the transformer CT protection zone. The fault current enters the primary and exits the secondary identically. Due to proper CT saturation bias (restraint coil), the 87T differential relay remains completely STABLE and does NOT trip. Back-up overcurrent relay 51 monitors the fault in case feeder protection fails.',
            hi: 'ट्रांसफॉर्मर के बाहर किसी आउटगोइंग फीडर पर शॉर्ट-सर्किट हुआ है (CT ज़ोन से बाहर)। फॉल्ट करंट ट्रांसफॉर्मर से होकर गुजरता है, अतः 87T डिफरेंशियल रिले स्थिर रहता है और ट्रिप नहीं करता। डाउनस्ट्रीम फीडर ब्रेकर को इसे तुरंत क्लियर करना चाहिए।',
            bn: 'ট্রান্সফরমার CT প্রটেকশন জোনের বাইরে কোনো ফিডারে শর্ট সার্কিট ঘটেছে। ফল্ট কারেন্ট ভেতর দিয়ে প্রবাহিত হলেও 87T ডিফারেনশিয়াল রিলে স্থিতিশীল থাকে এবং ট্রিপ করে না। ডাউনস্ট্রিম ফিডার ব্রেকার এটি বিচ্ছিন্ন করবে।'
          }[language]
        };

      case 'internalWindingFault':
        return {
          status: t.stateTrip,
          statusColor: 'text-rose-400 border-rose-500 bg-rose-950/50',
          devices: [t.rDiff, t.rBuchTrip, t.rPRD],
          action: 'INSTANTANEOUS EMERGENCY TRIP! Primary & Secondary Circuit Breakers open in <25 ms. Lockout relay (86) latched.',
          zone: t.zoneInternal,
          zoneColor: 'text-rose-400',
          desc: {
            en: 'Severe inter-turn insulation breakdown occurred inside the HV winding, generating localized arcing. Primary current surges while secondary output collapses, causing massive differential spill current (Id = |I1_sec - I2_sec| >> pickup). 87T differential relay trips in 15 ms. Intense localized arcing decomposes dielectric oil into hydrogen and acetylene gas, producing an oil shockwave that operates the Buchholz trip vane and PRD valve.',
            hi: 'HV वाइंडिंग के अंदर टर्न-टू-टर्न इंसुलेशन फेल होने से भयंकर आंतरिक आर्क उत्पन्न हुई। 87T डिफरेंशियल रिले ने केवल 15 मिली-सेकंड में दोनों सर्किट ब्रेकर ट्रिप कर दिए। आर्क से तेल में गैस और शॉकवेव बनने से बुखोल्ज़ ट्रिप वेन और PRD भी सक्रिय हो गए।',
            bn: 'HV ওয়াইন্ডিংয়ের ভেতরে তারের ইনসুলেশন নষ্ট হয়ে মারাত্মক অভ্যন্তরীণ শর্ট সার্কিট আর্ক তৈরি হয়েছে। 87T ডিফারেনশিয়াল রিলে ১৫ মিলি-সেকেন্ডে ট্রান্সফরমার বিচ্ছিন্ন করেছে। তেলের তীব্র চাপ ও গ্যাসে বুকহলজ ট্রিপ ভেন ও PRD সক্রিয় হয়েছে।'
          }[language]
        };

      case 'earthFault':
        return {
          status: t.stateTrip,
          statusColor: 'text-rose-400 border-rose-500 bg-rose-950/50',
          devices: [t.rEF, t.rDiff],
          action: 'INSTANTANEOUS TRIP! High-speed Restricted Earth Fault (REF 64R) and 87T initiate multi-phase breaker trip.',
          zone: t.zoneInternal,
          zoneColor: 'text-rose-400',
          desc: {
            en: 'Phase winding conductor flashed over to the grounded steel core/tank. Zero-sequence residual current flows through the neutral CT and phase CTs. The Restricted Earth Fault (REF) relay detects the unbalanced ground current and initiates high-speed tripping within 20 ms, protecting the core laminations from severe burning.',
            hi: 'फेज वाइंडिंग का चालक ग्राउंडेड कोर या टैंक से टकरा गया। न्यूट्रल CT और फेज CT के बीच शून्य-अनुक्रम करंट असंतुलन को Restricted Earth Fault (REF) रिले ने तुरंत पहचान कर 20 ms में ट्रिप कर दिया।',
            bn: 'ফেজ ওয়াইন্ডিং গ্রাউন্ডেড কোর বা ট্যাংকের সাথে শর্ট হয়েছে। নিউট্রাল ও ফেজ CT-এর মধ্যকার আনব্যালেন্স কারেন্ট শনাক্ত করে REF রিলে ২০ মিলি-সেকেন্ডে ট্রান্সফরমার ট্রিপ করে কোর সুরক্ষিত রাখে।'
          }[language]
        };

      case 'overtemperature':
        return {
          status: t.stateAlarm + ' → ' + t.stateTrip,
          statusColor: 'text-orange-400 border-orange-500 bg-orange-950/50',
          devices: [t.rWTI],
          action: 'Stage 1 (90°C): Forced cooling starts. Stage 2 (105°C): Warning alarm. Stage 3 (120°C): Breakers trip to prevent paper degradation.',
          zone: t.zoneHealthy,
          zoneColor: 'text-orange-400',
          desc: {
            en: 'Winding temperature has climbed beyond allowable insulation Class A limits due to high ambient heat or clogged radiator fins. Winding Temperature Indicator (WTI) simulates copper hot-spot using a thermal replica heater. Reaching 120°C triggers the trip contact to protect Kraft paper insulation from irreversible tensile loss and embrittlement.',
            hi: 'वाइंडिंग का तापमान सुरक्षित सीमा पार कर 120°C पहुँच गया है। WTI थर्मल सेंसर ने क्रमिक रूप से कूलिंग चालू की, अलार्म दिया और अंततः पेपर इंसुलेशन को जलने से बचाने के लिए ट्रिप कमांड जारी की।',
            bn: 'ওয়াইন্ডিং তাপমাত্রা ১২০°C অতিক্রম করেছে। WTI সেন্সর ক্রমান্বয়ে কুলিং চালু, অ্যালার্ম প্রদান এবং সবশেষে পেপার ইনসুলেশন রক্ষা করতে ট্রিপ কমান্ড পাঠায়।'
          }[language]
        };

      case 'lowOil':
        return {
          status: t.stateAlarm,
          statusColor: 'text-amber-400 border-amber-500 bg-amber-950/40',
          devices: [t.rMOG, t.rBuchAlarm],
          action: 'SCADA Alarm Annunciation: LOW OIL LEVEL. Maintenance team dispatched for gasket leak inspection.',
          zone: t.zoneHealthy,
          zoneColor: 'text-amber-400',
          desc: {
            en: 'External radiator valve leakage has lowered the oil level inside the conservator tank. The Magnetic Oil Gauge (MOG) float switch triggers a low-level alarm. If oil drops further into the Buchholz pipe chamber, the upper Buchholz float will drop and sound a secondary alarm before live winding tops become exposed to air.',
            hi: 'रेडिएटर वॉल्व से रिसाव के कारण कंज़र्वेटर टैंक में तेल का स्तर गिर गया है। MOG फ्लोट स्विच ने लो-ऑयल अलार्म जारी किया है ताकि वाइंडिंग हवा के संपर्क में आने से पहले इंजीनियर तेल टॉप-अप कर सकें।',
            bn: 'তেল লিক হওয়ার কারণে কনজারভেটর ট্যাংকে তেলের স্তর নেমে গেছে। MOG সেন্সর অ্যালার্ম দিয়েছে যাতে ওয়াইন্ডিং উন্মুক্ত হওয়ার আগেই প্রকৌশলীরা তেল রিফিল করতে পারেন।'
          }[language]
        };

      case 'coolingFailure':
        return {
          status: t.stateAlarm,
          statusColor: 'text-amber-400 border-amber-500 bg-amber-950/40',
          devices: ['Cooling Fan Motor Circuit Breaker Trip Alarm', t.rWTI],
          action: 'Automatic transfer to standby cooling bank. If standby unavailable, auto-derate transformer to 60% capacity (ONAN rating).',
          zone: t.zoneHealthy,
          zoneColor: 'text-amber-400',
          desc: {
            en: 'Auxiliary cooling fan group power supply tripped on thermal overload. The loss of forced airflow immediately degrades thermal dissipation. The control panel annunciates cooling failure and automatically initiates load shedding or switches to secondary fan banks to prevent core temperature escalation.',
            hi: 'कूलिंग फैन मोटर का MCB ट्रिप हो गया है। जबरन हवा रुकने से तापमान तेजी से बढ़ने लगता है। कंट्रोल सिस्टम ने तुरंत कूलिंग फेलियर अलार्म जारी कर स्टैंडबाय पंखे चालू करने का संकेत दिया।',
            bn: 'সহায়ক কুলিং ফ্যানের MCB ট্রিপ করেছে। কৃত্রিম বাতাস বন্ধ হওয়ায় কন্ট্রোল সিস্টেম অ্যালার্ম দিয়েছে এবং বিকল্প ফ্যান ব্যাংক চালু করার নির্দেশ দিয়েছে।'
          }[language]
        };

      case 'surge':
        return {
          status: t.stateNormal + ' (Protected)',
          statusColor: 'text-cyan-400 border-cyan-500 bg-cyan-950/40',
          devices: [t.rLA],
          action: 'Surge Arrester non-linear resistance drops instantaneously to milliohms, discharging 10 kA surge to earth in 8/20 µs.',
          zone: t.zoneHealthy,
          zoneColor: 'text-cyan-400',
          desc: {
            en: 'A high-voltage lightning impulse (150 kV peak) struck the incoming transmission overhead line. The Zinc Oxide (ZnO) Surge Arrester mounted right at the transformer HV bushing instantaneously transitioned into low-impedance conduction, safely clamping the transient overvoltage below the Basic Impulse Level (BIL) of the transformer insulation.',
            hi: 'ट्रांसफॉर्मर की लाइन पर आकाशीय बिजली (लाइटनिंग सर्ज) गिरी। बुशिंग के पास लगे जिंक ऑक्साइड (ZnO) सर्ज अरेस्टर ने कुछ माइक्रो-सेकंड में अत्यधिक वोल्टेज को ग्राउंड में डिस्चार्ज कर ट्रांसफॉर्मर इंसुलेशन को बचा लिया।',
            bn: 'লাইনটিতে মারাত্মক বজ্রপাত বা লাইটনিং সার্জ আঘাত করেছে। বুশিংয়ে অবস্থিত ZnO সার্জ অ্যারেস্টার সাথে সাথে অতিরিক্ত ভোল্টেজ মাটিতে প্রবাহিত করে ইনসুলেশনকে রক্ষা করেছে।'
          }[language]
        };
    }
  };

  const details = getFaultDetails(selectedFault);

  return (
    <div className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-6 text-white space-y-6 shadow-2xl font-sans">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
            <span>{t.title}</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            {t.subtitle}
          </p>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => setSelectedFault('normal')}
          aria-label={t.resetBtn}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 font-mono text-xs rounded-lg border border-slate-700 transition-all self-start sm:self-auto focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t.resetBtn}</span>
        </button>
      </div>

      {/* Fault Selector Grid */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-slate-400 font-bold block uppercase tracking-wider">
          {t.labelModes}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 font-mono text-xs">
          
          <button
            onClick={() => setSelectedFault('normal')}
            aria-pressed={selectedFault === 'normal'}
            aria-label={t.modeNormal}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-emerald-400 outline-none ${
              selectedFault === 'normal' 
                ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">{t.modeNormal}</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">Id ≈ 0 A</span>
          </button>

          <button
            onClick={() => setSelectedFault('overload')}
            aria-pressed={selectedFault === 'overload'}
            aria-label={t.modeOverload}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-amber-400 outline-none ${
              selectedFault === 'overload' 
                ? 'bg-amber-950/80 border-amber-500 text-amber-300 shadow-md shadow-amber-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">{t.modeOverload}</span>
              <Activity className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">WTI 95°C</span>
          </button>

          <button
            onClick={() => setSelectedFault('externalFault')}
            aria-pressed={selectedFault === 'externalFault'}
            aria-label={t.modeExtFault}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-amber-400 outline-none ${
              selectedFault === 'externalFault' 
                ? 'bg-amber-950/80 border-amber-500 text-amber-300 shadow-md shadow-amber-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">{t.modeExtFault}</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">Through Fault</span>
          </button>

          <button
            onClick={() => setSelectedFault('internalWindingFault')}
            aria-pressed={selectedFault === 'internalWindingFault'}
            aria-label={t.modeIntFault}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-rose-400 outline-none ${
              selectedFault === 'internalWindingFault' 
                ? 'bg-rose-950/80 border-rose-500 text-rose-300 shadow-md shadow-rose-950/50 animate-pulse' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">{t.modeIntFault}</span>
              <AlertTriangle className="w-4 h-4 text-rose-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">87T / Buchholz</span>
          </button>

          <button
            onClick={() => setSelectedFault('earthFault')}
            aria-pressed={selectedFault === 'earthFault'}
            aria-label={t.modeEarthFault}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-rose-400 outline-none ${
              selectedFault === 'earthFault' 
                ? 'bg-rose-950/80 border-rose-500 text-rose-300 shadow-md shadow-rose-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">{t.modeEarthFault}</span>
              <Flame className="w-4 h-4 text-rose-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">REF 64R Trip</span>
          </button>

          <button
            onClick={() => setSelectedFault('overtemperature')}
            aria-pressed={selectedFault === 'overtemperature'}
            aria-label={t.modeOvertemp}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-orange-400 outline-none ${
              selectedFault === 'overtemperature' 
                ? 'bg-orange-950/80 border-orange-500 text-orange-300 shadow-md shadow-orange-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">{t.modeOvertemp}</span>
              <Flame className="w-4 h-4 text-orange-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">120°C Trip</span>
          </button>

          <button
            onClick={() => setSelectedFault('lowOil')}
            aria-pressed={selectedFault === 'lowOil'}
            aria-label={t.modeLowOil}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-amber-400 outline-none ${
              selectedFault === 'lowOil' 
                ? 'bg-amber-950/80 border-amber-500 text-amber-300 shadow-md shadow-amber-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">{t.modeLowOil}</span>
              <Droplet className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">MOG Alarm</span>
          </button>

          <button
            onClick={() => setSelectedFault('coolingFailure')}
            aria-pressed={selectedFault === 'coolingFailure'}
            aria-label={t.modeCoolingFail}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-amber-400 outline-none ${
              selectedFault === 'coolingFailure' 
                ? 'bg-amber-950/80 border-amber-500 text-amber-300 shadow-md shadow-amber-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">{t.modeCoolingFail}</span>
              <Wind className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">Fan MCB Trip</span>
          </button>

          <button
            onClick={() => setSelectedFault('surge')}
            aria-pressed={selectedFault === 'surge'}
            aria-label={t.modeSurge}
            className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-cyan-400 outline-none col-span-2 sm:col-span-1 ${
              selectedFault === 'surge' 
                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300 shadow-md shadow-cyan-950/50' 
                : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-bold">{t.modeSurge}</span>
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
            <span className="text-[10px] text-slate-500 mt-1">ZnO Clamped</span>
          </button>

        </div>
      </div>

      {/* Visual Diagnostic Architecture Display */}
      <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-4 font-mono">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">{t.diagTitle}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${details.statusColor}`}>
            {details.status}
          </span>
        </div>

        {/* Diagnostic Metrics Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
            <span className="text-slate-400 font-bold uppercase block text-[10px]">{t.activeDevices}</span>
            <ul className="space-y-1">
              {details.devices.map((dev, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-amber-300 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>{dev}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2">
            <span className="text-slate-400 font-bold uppercase block text-[10px]">{t.tripState}</span>
            <p className="text-cyan-300 leading-relaxed font-semibold">
              {details.action}
            </p>
            <div className="pt-1 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
              <span className="text-slate-400">{t.zoneStatus}</span>
              <span className={`font-bold ${details.zoneColor}`}>{details.zone}</span>
            </div>
          </div>

        </div>

        {/* Detailed Engineering Explanation */}
        <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800/80 space-y-1">
          <span className="text-slate-400 text-[10px] font-bold uppercase block">{t.explanation}</span>
          <p className="text-xs text-slate-300 leading-relaxed">
            {details.desc}
          </p>
        </div>

        <div className="text-[10px] text-slate-500 text-center italic">
          {t.disclaimer}
        </div>
      </div>

    </div>
  );
};
