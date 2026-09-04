import { Lesson } from '../types';

export const LESSON_PFC_COMMISSIONING_TROUBLESHOOTING: Lesson = {
  id: 'lsn-ch13-pfc-commissioning-troubleshooting',
  topicId: 'tp-pfc-commissioning-troubleshooting',
  chapterId: 'ch-power-factor',
  order: 9,
  title: {
    en: 'Commissioning, Field Testing & APFC Troubleshooting',
    hi: 'कमिशनिंग, फील्ड टेस्टिंग एवं APFC ट्रबलशूटिंग',
    bn: 'কমিশনিং, ফিল্ড টেস্টিং ও APFC ট্রাবলশুটিং'
  },
  description: {
    en: 'Gain expert mastery of field commissioning, pre-energization testing, and diagnostic troubleshooting for Automatic Power Factor Correction (APFC) panels. Learn Current Transformer (CT) polarity and phasing rules, C/k sensitivity threshold programming, discharge resistor dissipation testing, capacitor-duty contactor operation, hunting prevention, and root-cause analysis for bulging cans, blown fuses, and resonance.',
    hi: 'स्वचालित पावर फैक्टर सुधार (APFC) पैनलों के फील्ड कमिशनिंग, प्री-एनर्जाइजेशन परीक्षण और नैदानिक ट्रबलशूटिंग में विशेषज्ञता हासिल करें। करंट ट्रांसफॉर्मर (CT) पोलरिटी एवं फेजिंग नियम, C/k संवेदनशीलता थ्रेशोल्ड प्रोग्रामिंग, डिस्चार्ज रेसिस्टर परीक्षण, कैपेसिटर-ड्यूटी कॉन्टैक्टर संचालन, हंटिंग रोकथाम और कैपेसिटर फूलने एवं फ्यूज उड़ने के मूल कारणों का विश्लेषण सीखें।',
    bn: 'অটোমেটিক পাওয়ার ফ্যাক্টর কারেকশন (APFC) প্যানেলের ফিল্ড কমিশনিং, প্রি-এনার্জাইজেশন টেস্ট এবং ডায়াগনস্টিক ট্রাবলশুটিংয়ে দক্ষতা অর্জন করুন। কারেন্ট ট্রান্সফরমার (CT) পোলারিটি ও ফেজিং নিয়মাবলী, C/k সেনসিটিভিটি থ্রেশহোল্ড প্রোগ্রামিং, ডিসচার্জ রেজিস্টর কার্যকারিতা পরীক্ষা, ক্যাপাসিটর-ডিউটি কন্ট্যাক্টর অপারেশন, হান্টিং প্রতিরোধ এবং ক্যাপাসিটর ফুলে যাওয়া ও ফিউজ কাটার কারণ বিশ্লেষণ শিখুন।'
  },
  estimatedMinutes: 55,
  easyExplanation: {
    en: 'Setting up an APFC panel isn’t just about plugging it in; if wired incorrectly, it can hunt wildly, blow fuses, or even explode! During commissioning, electrical engineers verify five critical steps: (1) The sensing Current Transformer (CT) must be installed on the main incoming line upstream of the capacitors so it can actually "see" the correction. (2) The CT polarity (P1 to P2) and reference voltage phases must match perfectly, or the controller will think power is flowing backwards. (3) The C/k threshold must be programmed accurately so the relay knows how much current a single capacitor step draws, preventing constant on/off clicking (hunting). (4) Discharge resistors must drain trapped voltage below 50V within 60 seconds so capacitors don’t re-engage when charged. (5) Panel cooling fans must work properly because capacitors run hot and fail quickly when overheated.',
    hi: 'APFC पैनल लगाना केवल प्लग लगाने जैसा नहीं है; यदि गलत वायरिंग हो जाए तो यह तेजी से ऑन-ऑफ (हंटिंग) करने लगता है, फ्यूज उड़ा सकता है या फट भी सकता है! कमिशनिंग के दौरान इंजीनियर 5 मुख्य बातों की जांच करते हैं: (1) सेंसिंग करंट ट्रांसफार्मर (CT) को कैपेसिटर से पहले मेन लाइन पर लगाया जाना चाहिए ताकि वह सुधार को देख सके। (2) CT की पोलरिटी (P1 से P2) और वोल्टेज के फेज एकदम सही होने चाहिए, नहीं तो कंट्रोलर समझेगा कि बिजली उल्टी बह रही है। (3) C/k थ्रेशोल्ड सही सेट होना चाहिए ताकि रिले को पता हो कि एक स्टेप कितना करंट लेता है, जिससे हंटिंग न हो। (4) डिस्चार्ज रेसिस्टर्स को 60 सेकंड में वोल्टेज 50V से कम करना चाहिए ताकि चार्ज कैपेसिटर दोबारा न जुड़े। (5) पैनल के पंखे सही काम करने चाहिए क्योंकि गर्मी कैपेसिटर की सबसे बड़ी दुश्मन है।',
    bn: 'APFC প্যানেল স্থাপন করা শুধু তার জোড়ার মতো সহজ নয়; ভুল সংযোগ হলে এটি অনবরত অন-অফ (হান্টিং) করবে, ফিউজ পুড়িয়ে দেবে কিংবা বিস্ফোরিত হতে পারে! কমিশনিংয়ের সময় প্রকৌশলীরা ৫টি প্রধান বিষয় নিশ্চিত করেন: (১) সেন্সিং কারেন্ট ট্রান্সফরমার (CT) অবশ্যই ক্যাপাসিটর সংযোগের পূর্বে মেইন ইনকামিং লাইনে থাকতে হবে যাতে এটি ক্যাপাসিটরের কাজ দেখতে পায়। (২) CT পোলারিটি (P1 থেকে P2) ও ভোল্টেজ রেফারেন্স ফেজ সঠিকভাবে মেলাতে হবে, অন্যথায় কন্ট্রোলার মনে করবে বিদ্যুৎ উল্টো দিকে প্রবাহিত হচ্ছে। (৩) C/k সেনসিটিভিটি সঠিকভাবে প্রোগ্রাম করতে হবে যাতে কন্ট্রোলার জানে প্রতিটি ধাপ কত কারেন্ট নেয় এবং হান্টিং রোধ হয়। (৪) ডিসচার্জ রেজিস্টর ৬০ সেকেন্ডের মধ্যে ভোল্টেজ ৫০V-এর নিচে নামিয়ে আনবে যাতে চার্জ অবস্থায় পুনরায় চালু হয়ে স্পার্ক না করে। (৫) প্যানেলের কুলিং ফ্যান ঠিকঠাক চলতে হবে কারণ অতিরিক্ত তাপে ক্যাপাসিটর দ্রুত নষ্ট হয়ে যায়।'
  },
  detailedExplanation: {
    en: 'Field commissioning and systematic troubleshooting of Automatic Power Factor Correction systems require rigorous electrical discipline:\n\n1. Sensing CT Location, Polarity & Phasing Protocol:\n- The Current Transformer (CT) MUST be located on the primary incoming supply busbar UPSTREAM of both the plant load and the capacitor bank incomer.\n  * Fatal Error: If the CT is downstream of the capacitor tap-off, the CT only measures plant load and never sees the capacitor current; the controller will energize all stages until overcompensation trips the breaker.\n- Polarity Alignment: Primary P1 (K) faces utility grid; P2 (L) faces plant load. Secondary S1 (k) and S2 (l) wire to controller CT terminals.\n  * Symptom of Reversed CT: Active power reads negative (kW < 0), generating a pseudo "generating mode" or erroneous 0.00 PF reading.\n- Voltage-Current Phase Angle Verification:\n  * Microprocessor controllers compare one line current against one or two line voltages. For example, if CT is on Phase L1 (R), sensing voltage must be wired to L2-L3 (Y-B) for standard 90° quadrature reference, or L1-N for 0° reference. Phase swapping results in completely wrong PF calculation.\n\n2. C/k Factor Calculation & Hunting Prevention:\nThe C/k threshold represents the secondary current magnitude of the smallest capacitor step:\n  C/k = (Q_step · 1000) / (√3 · V_L · CT_ratio · 5) [for 5A CT secondary],\nwhere CT_ratio = I_prim / I_sec.\n- If programmed C/k is too low: Controller hunts (cycles on and off rapidly) because switching ON a step overshoots the target threshold, immediately forcing the relay to turn it OFF.\n- If programmed C/k is too high: Controller becomes insensitive and fails to engage steps for moderate reactive demand.\n- Deadband & Hysteresis Rule: The disconnect threshold (switch-off) must exceed the connect threshold (switch-on) by at least 1.15 to 1.25 times the kVAR rating of the smallest stage.\n\n3. Discharge Resistor Safety & Reconnection Delay:\nCapacitors store peak line voltage (V_peak = √2 · V_rms = √2 · 415V = 587 V_DC) when disconnected.\n- Safety Standard (IEC 60831): Discharge resistors permanently connected across terminals MUST discharge the residual voltage to below 50V within 60 seconds (or 180 seconds for larger banks).\n- Reconnection Timer: The APFC controller reconnection delay timer must be set to at least t_delay ≥ 60 seconds to 120 seconds. Reconnecting a charged capacitor in phase opposition produces instantaneous inrush voltages up to 2.0 · V_peak (1,174V) and currents exceeding 150 · I_n, causing violent contactor welding or dielectric puncture.\n\n4. Diagnostic Troubleshooting Matrix:\n- Symptom: Low PF despite all steps ON ➔ Defective contactor coils, blown internal HRC fuses, or severely aged capacitor elements with loss of capacitance (measure phase capacitance in μF).\n- Symptom: Bulging capacitor cans ➔ Internal overpressure switch actuated due to continuous harmonic overcurrent (THD_I > 25%) or ambient panel temperature > 55°C. Immediate replacement mandatory.\n- Symptom: High voltage rise at night ➔ APFC controller hunting or failure to switch off steps during plant shutdown (Ferranti effect ΔV ≈ Q_c · X_tx / V_L). Configure minimum load cutoff threshold.',
    hi: 'APFC कमिशनिंग एवं फील्ड ट्रबलशूटिंग:\n\n1. CT की स्थिति एवं पोलरिटी नियम:\n- CT हमेशा मेन इनकमिंग बसबार पर कैपेसिटर और लोड दोनों के अपस्ट्रीम होना चाहिए।\n- यदि CT कैपेसिटर के बाद लगा है, तो कंट्रोलर कैपेसिटर करंट को नहीं देख पाएगा और सभी स्टेप चालू कर देगा।\n- P1 ग्रिड की ओर और P2 लोड की ओर होना चाहिए। S1 और S2 उलटे जुड़ने पर कंट्रोलर नेगेटिव पावर दिखाता है।\n- फेज मिलान: CT फेज और वोल्टेज सेंसिंग फेज में निर्माता के अनुसार सही कोणीय संबंध होना चाहिए।\n\n2. C/k फैक्टर एवं हंटिंग रोकथाम:\nC/k सबसे छोटे स्टेप का सेकंडरी करंट होता है: C/k = (Q_step · 1000) / (√3 · V_L · CT_ratio · 5)।\n- बहुत कम C/k: रिले तेजी से ऑन-ऑफ (हंटिंग) करती है जिससे कॉन्टैक्टर जल जाते हैं।\n- डेडबैंड सबसे छोटे स्टेप के kVAR से 15-25% अधिक होना चाहिए।\n\n3. डिस्चार्ज रेसिस्टर एवं रिकनेक्शन डिले:\n- IEC 60831 नियम: बंद होने के 60 सेकंड के भीतर वोल्टेज 50V से नीचे गिरना चाहिए।\n- रिकनेक्शन डिले टाइमर हमेशा न्यूनतम 60 से 120 सेकंड पर सेट होना चाहिए। चार्ज कैपेसिटर को दोबारा जोड़ने से 2 गुना वोल्टेज और 150 गुना करंट पैदा होता है जो कॉन्टैक्टर को वेल्ड कर देता है।\n\n4. प्रमुख समस्याएं:\n- कैपेसिटर फूलना (Bulging): अत्यधिक हार्मोनिक्स (THD_I > 25%) या 55°C से अधिक तापमान। तुरंत बदलें।\n- रात में वोल्टेज बढ़ना: लोड कम होने पर कैपेसिटर बंद न होना। नो-लोड कटऑफ चालू करें।',
    bn: 'APFC কমিশনিং ও ফিল্ড ট্রাবলশুটিংয়ের খুঁটিনাটি:\n\n১. CT এর অবস্থান ও পোলারিটি যাচাই:\n- CT অবশ্যই ক্যাপাসিটর ব্যাংক সংযোগের পূর্বে প্রধান ইনকামিং লাইনে স্থাপন করতে হবে।\n- CT যদি ক্যাপাসিটরের পরে থাকে, তবে রিলে ক্যাপাসিটর কারেন্ট দেখতে পাবে না এবং ওভারকম্পেনসেশন ঘটাবে।\n- P1 গ্রিডের দিকে ও P2 লোডের দিকে থাকবে। S1/S2 উল্টো লাগানো হলে অ্যাক্টিভ পাওয়ার নেগেটিভ দেখাবে।\n- রেফারেন্স ভোল্টেজ ফেজ ও CT ফেজ ম্যানুয়াল অনুযায়ী হুবহু মেলাতে হবে।\n\n২. C/k ফ্যাক্টর ও হান্টিং নিরসন:\nC/k ফ্যাক্টর ক্ষুদ্রতম ক্যাপাসিটর ধাপের সেকেন্ডারি কারেন্ট নির্দেশ করে: C/k = (Q_step · ১০০০) / (√৩ · V_L · CT_ratio · ৫)।\n- C/k কম হলে রিলে দ্রুত অন-অফ (হান্টিং) করে কন্ট্যাক্টর পুড়িয়ে দেয়।\n- ডেডব্যান্ড ন্যূনতম ধাপের চেয়ে ১৫-২৫% বেশি রাখতে হবে।\n\n৩. ডিসচার্জ রেজিস্টর ও রিকনেকশন বিলম্ব:\n- IEC 60831 অনুসারে বন্ধের ৬০ সেকেন্ডের মধ্যে ভোল্টেজ ৫০V-এর নিচে নামতে হবে।\n- রিকনেকশন বিলম্ব টাইমার ন্যূনতম ৬০-১২০ সেকেন্ডে রাখতে হবে। চার্জিত ক্যাপাসিটর সরাসরি অন করলে ১,০০০V+ ওভারভোল্টেজ ও ১৫০ গুণ কারেন্ট উৎপন্ন হয়।\n\n৪. মূল ত্রুটি ও প্রতিকার:\n- ক্যান ফুলে যাওয়া (Bulging): উচ্চ হারমোনিক্স কারেন্ট বা অতিরিক্ত তাপমাত্রা। অবিলম্বে পরিবর্তন আবশ্যক।\n- রাতে ভোল্টেজ বৃদ্ধি: হালকা লোডে ক্যাপাসিটর চালু থাকা। নো-লোড কাটঅফ সক্রিয় করুন।'
  },
  formulas: [
    {
      id: 'f-ck-ratio',
      symbol: 'C/k',
      expression: 'C/k = \\frac{Q_{\\text{step}} \\times 1000}{\\sqrt{3} \\times V_L \\times \\left(\\frac{I_{\\text{prim}}}{I_{\\text{sec}}}\\right) \\times I_{\\text{sec}}} = \\frac{Q_{\\text{step}} \\times 1000}{\\sqrt{3} \\times V_L \\times I_{\\text{prim}}}',
      title: {
        en: 'APFC Controller C/k Sensitivity Threshold',
        hi: 'APFC कंट्रोलर C/k संवेदनशीलता थ्रेशोल्ड',
        bn: 'APFC কন্ট্রোলার C/k সেনসিটিভিটি থ্রেশহোল্ড সমীকরণ'
      },
      description: {
        en: 'Calculates the controller sensitivity setting (C/k ratio) representing the secondary current drawn by the smallest switched capacitor bank step.',
        hi: 'कंट्रोलर संवेदनशीलता सेटिंग (C/k अनुपात) की गणना करता है जो सबसे छोटे कैपेसिटर स्टेप द्वारा खींचे गए सेकंडरी करंट को दर्शाता है।',
        bn: 'কন্ট্রোলারের সংবেদনশীলতা সেটিং (C/k অনুপাত) হিসাব করে যা ক্ষুদ্রতম ক্যাপাসিটর ধাপের সেকেন্ডারি কারেন্ট নির্দেশ করে।'
      },
      variables: [
        { symbol: 'C/k', name: { en: 'Controller sensitivity factor (Amperes)', hi: 'कंट्रोलर संवेदनशीलता गुणांक (A)', bn: 'কন্ট্রোলার সেনসিটিভিটি ফ্যাক্টর (A)' } },
        { symbol: 'Q_{\\text{step}}', name: { en: 'Reactive power of smallest capacitor stage (kVAR)', hi: 'सबसे छोटे कैपेसिटर स्टेप की क्षमता (kVAR)', bn: 'ক্ষুদ্রতম ক্যাপাসিটর ধাপের মান (kVAR)' } },
        { symbol: 'V_L', name: { en: 'Nominal phase-to-phase line voltage (V)', hi: 'लाइन वोल्टेज (V)', bn: 'লাইন ভোল্টেজ (V)' } },
        { symbol: 'I_{\\text{prim}}', name: { en: 'Primary current rating of sensing CT (A)', hi: 'CT की प्राइमरी करंट रेटिंग (A)', bn: 'সেন্সিং CT-এর প্রাইমারি কারেন্ট (A)' } }
      ]
    },
    {
      id: 'f-capacitor-nominal-current',
      symbol: 'I_n',
      expression: 'I_n = \\frac{Q_{\\text{step}} \\times 1000}{\\sqrt{3} \\times V_L}',
      title: {
        en: 'Capacitor Step Nominal Current & HRC Fuse Sizing',
        hi: 'कैपेसिटर स्टेप नॉमिनल करंट एवं HRC फ्यूज साइज़िंग',
        bn: 'ক্যাপাসিটর ধাপের নমিনাল কারেন্ট ও HRC ফিউজ নির্ধারণ'
      },
      description: {
        en: 'Determines the continuous nominal current of a three-phase capacitor bank step. Branch fuses must be sized at 1.65 to 1.80 times In to accommodate harmonics and inrush.',
        hi: 'तीन-फेज कैपेसिटर स्टेप के नॉमिनल करंट की गणना करता है। हार्मोनिक्स और इनरश को संभालने के लिए फ्यूज 1.65 से 1.80 गुना I_n पर चुना जाना चाहिए।',
        bn: 'তিন-ফেজ ক্যাপাসিটর ধাপের স্বাভাবিক কারেন্ট নির্ণয়। হারমোনিক্স ও ইনরাশ কারেন্ট সামলাতে ফিউজ রেটিং ১.৬৫ থেকে ১.৮০ গুণ I_n হতে হবে।'
      },
      variables: [
        { symbol: 'I_n', name: { en: 'Continuous nominal current (A)', hi: 'नॉमिनल करंट (A)', bn: 'স্বাভাবিক নামমাত্র কারেন্ট (A)' } },
        { symbol: 'Q_{\\text{step}}', name: { en: 'Capacitor stage rating (kVAR)', hi: 'स्टेप रेटिंग (kVAR)', bn: 'ধাপের রেটিং (kVAR)' } },
        { symbol: 'I_{\\text{fuse}}', name: { en: 'HRC branch fuse rating = (1.65 to 1.80) · I_n (A)', hi: 'HRC फ्यूज रेटिंग (A)', bn: 'HRC ফিউজ রেটিং (A)' } }
      ]
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch13-l09-01',
      title: {
        en: 'Example 1: C/k Sensitivity Threshold Calculation & CT Selection',
        hi: 'उदाहरण 1: C/k संवेदनशीलता थ्रेशोल्ड गणना एवं CT चयन',
        bn: 'উদাহরণ ১: C/k সেনসিটিভিটি থ্রেশহোল্ড হিসাব ও CT নির্বাচন'
      },
      problem: {
        en: 'An APFC panel is installed on a 415V, 3-phase, 50 Hz system. The main incomer is equipped with a 1200/5A sensing Current Transformer. The capacitor bank is configured with steps of 25 kVAR, 50 kVAR, 50 kVAR, and 100 kVAR (smallest step Q_step = 25 kVAR). (a) Calculate the theoretical C/k sensitivity threshold to program into the APFC relay. (b) What will happen if the commissioning technician mistakenly sets C/k to 0.05 A? (c) Calculate the nominal current I_n of the 25 kVAR step and the recommended HRC fuse rating.',
        hi: '415V, 3-फेज, 50 Hz सिस्टम पर एक APFC पैनल स्थापित है। मेन इनकमर पर 1200/5A का CT लगा है। कैपेसिटर बैंक में 25 kVAR, 50 kVAR, 50 kVAR और 100 kVAR के स्टेप हैं (सबसे छोटा स्टेप 25 kVAR है)। (a) APFC रिले में प्रोग्राम करने हेतु सैद्धांतिक C/k थ्रेशोल्ड की गणना करें। (b) यदि तकनीशियन गलती से C/k को 0.05 A सेट कर दे तो क्या होगा? (c) 25 kVAR स्टेप के नॉमिनल करंट I_n और अनुशंसित HRC फ्यूज रेटिंग की गणना करें।',
        bn: 'একটি ৪১৫V, ৩-ফেজ, ৫০ Hz সিস্টেমে APFC প্যানেল যুক্ত। ইনকামারে ১২০০/৫A সেন্সিং CT ইনস্টল করা আছে। ক্যাপাসিটর ব্যাংকের ধাপগুলো হলো ২৫ kVAR, ৫০ kVAR, ৫০ kVAR ও ১০০ kVAR (ক্ষুদ্রতম ধাপ ২৫ kVAR)। (a) APFC রিলেতে প্রোগ্রাম করার জন্য তাত্ত্বিক C/k সেনসিটিভিটি থ্রেশহোল্ড হিসাব করুন। (b) টেকনিশিয়ান ভুল করে C/k = ০.০৫ A সেট করলে কী ঘটবে? (c) ২৫ kVAR ধাপের নমিনাল কারেন্ট I_n ও HRC ফিউজ রেটিং নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Calculate the nominal line current drawn by the smallest 25 kVAR step:\n  I_n(25 kVAR) = (25 · 1000) / (√3 · 415) = 25,000 / 718.8 = 34.78 A.\n\nStep 2: Calculate the secondary current seen by the 1200/5A CT:\n  CT Ratio = 1200 / 5 = 240.\n  I_secondary = I_n / CT Ratio = 34.78 / 240 = 0.1449 A.\n\nStep 3: Determine recommended C/k setting:\n  In APFC practice, C/k is typically set to approximately 65% to 70% of the smallest step secondary current to ensure positive detection without nuisance hunting:\n  C/k = 0.67 · 0.1449 A = 0.097 A ➔ Program C/k ≈ 0.10 A.\n\nStep 4: Analyze setting C/k = 0.05 A:\n  Setting C/k = 0.05 A makes the controller excessively sensitive. A small 12 kVAR load fluctuation will exceed 0.05 A secondary, causing the relay to switch ON the 25 kVAR step. The resulting overcorrection will immediately trigger the switch-off logic, causing rapid, destructive HUNTING (cycling every 30 seconds).\n\nStep 5: HRC Fuse Sizing for the 25 kVAR step:\n  Standard rule: I_fuse = 1.65 to 1.80 · I_n.\n  I_fuse_min = 1.65 · 34.78 A = 57.4 A.\n  I_fuse_max = 1.80 · 34.78 A = 62.6 A.\n  Select standard 63A gG/gL motor/capacitor-rated HRC fuses for all 3 phases.',
        hi: 'चरण 1: 25 kVAR स्टेप का नॉमिनल करंट: I_n = 25,000 / (√3 · 415) = 34.78 A।\n\nचरण 2: 1200/5A CT की सेकंडरी करंट: CT अनुपात = 240।\nI_secondary = 34.78 / 240 = 0.145 A।\n\nचरण 3: अनुशंसित C/k सेटिंग: C/k = 0.67 · 0.145 A ≈ 0.10 A प्रोग्राम करें।\n\nचरण 4: C/k = 0.05 A सेट करने का परिणाम: अत्यधिक संवेदनशीलता के कारण रिले हंटिंग (बार-बार ऑन-ऑफ) करने लगेगी, जिससे कॉन्टैक्टर खराब हो जाएंगे।\n\nचरण 5: फ्यूज साइज़िंग: I_fuse = 1.65 · 34.78 = 57.4 A। मानक 63A HRC फ्यूज चुनें।',
        bn: 'ধাপ ১: ২৫ kVAR ধাপের কারেন্ট: I_n = ২৫,০০০ / (√৩ · ৪১৫) = ৩৪.৭৮ A।\n\nধাপ ২: ১২০০/৫A CT-এর সেকেন্ডারি কারেন্ট: CT অনুপাত = ২৪০।\nI_secondary = ৩৪.৭৮ / ২৪০ = ০.১৪৫ A।\n\nধাপ ৩: C/k সেটিং: C/k = ০.৬৭ · ০.১৪৫ A ≈ ০.১০ A প্রোগ্রাম করুন।\n\nধাপ ৪: C/k = ০.০৫ A হলে ক্ষতিকর প্রভাব: অতিরিক্ত সংবেদনশীলতার কারণে রিলে অনবরত অন-অফ (হান্টিং) করবে এবং কন্ট্যাক্টর পুড়ে যাবে।\n\nধাপ ৫: ফিউজ সাইজিং: I_fuse = ১.৬৫ · ৩৪.৭৮ = ৫৭.৪ A। স্ট্যান্ডার্ড ৬৩A HRC ফিউজ নির্বাচন করুন।'
      }
    },
    {
      id: 'ex-ch13-l09-02',
      title: {
        en: 'Example 2: Discharge Resistor Sizing & Residual Voltage Compliance',
        hi: 'उदाहरण 2: डिस्चार्ज रेसिस्टर साइज़िंग एवं अवशिष्ट वोल्टेज अनुपालन',
        bn: 'উদাহরণ ২: ডিসচার্জ রেজিস্টর সাইজিং ও অবশিষ্ট ভোল্টেজ কমপ্লায়েন্স'
      },
      problem: {
        en: 'A 50 kVAR, 415V, 50 Hz delta-connected capacitor bank step operates at line-to-line peak voltage V_peak = √2 · 415 = 587 V. According to IEC 60831, the residual voltage must discharge from V_peak to below V_safe = 50 V within t = 60 seconds after disconnection. (a) Calculate the capacitance per phase C_delta in μF. (b) Find the maximum allowable discharge resistance R_dis per phase in kΩ. (c) Calculate the continuous active power dissipated as heat in the three discharge resistors during normal operation.',
        hi: '415V, 50 Hz डेल्टा-कनेक्टेड 50 kVAR कैपेसिटर स्टेप V_peak = √2 · 415 = 587 V के पीक वोल्टेज पर काम करता है। IEC 60831 के अनुसार, डिस्कनेक्शन के t = 60 सेकंड में अवशिष्ट वोल्टेज 50V से कम होना चाहिए। (a) μF में प्रति फेज कैपेसिटेंस C_delta ज्ञात करें। (b) kΩ में प्रति फेज अधिकतम अनुमेय डिस्चार्ज प्रतिरोध R_dis ज्ञात करें। (c) सामान्य संचालन के दौरान तीनों डिस्चार्ज रेसिस्टर्स में ऊष्मा के रूप में नष्ट होने वाली कुल सक्रिय शक्ति ज्ञात करें।',
        bn: 'একটি ৫০ kVAR, ৪১৫V, ৫০ Hz ডেল্টা-সংযুক্ত ক্যাপাসিটর ধাপ V_peak = √২ · ৪১৫ = ৫৮৭ V পিক ভোল্টেজে পরিচালিত হয়। IEC 60831 অনুযায়ী সংযোগ বিচ্ছিন্ন করার t = ৬০ সেকেন্ডের মধ্যে অবশিষ্ট ভোল্টেজ V_safe = ৫০ V এর নিচে নামতে হবে। (a) প্রতি ফেজে ক্যাপাসিট্যান্স C_delta (μF) হিসাব করুন। (b) প্রতি ফেজে অনুমোদিত সর্বোচ্চ ডিসচার্জ রেজিস্ট্যান্স R_dis (kΩ) নির্ণয় করুন। (c) সাধারণ পরিচালনাকালে তিনটি ডিসচার্জ রেজিস্টরে মোট তাপীয় অপচয় (W) কত হবে?'
      },
      solution: {
        en: 'Step 1: Calculate phase capacitance C_delta for delta connection:\n  Q_phase = 50,000 / 3 = 16,667 VAR.\n  C_delta = Q_phase / (2 · π · f · V_L²) = 16,667 / (2 · π · 50 · 415²) = 16,667 / 54,106,000 = 308.05 μF per phase.\n\nStep 2: Capacitive RC discharge equation:\n  V(t) = V_peak · e^(-t / (R_dis · C_delta)).\n  Rearranging for R_dis:\n  ln(V_safe / V_peak) = -t / (R_dis · C_delta)\n  R_dis ≤ t / [C_delta · ln(V_peak / V_safe)].\n  V_peak / V_safe = 587 / 50 = 11.74.\n  ln(11.74) = 2.463.\n  R_dis ≤ 60 / [308.05 · 10⁻⁶ · 2.463] = 60 / 0.0007587 = 79,082 Ω ≈ 79.1 kΩ.\n  A standard 68 kΩ or 75 kΩ heavy-duty ceramic wirewound resistor meets code.\n\nStep 3: Continuous active power dissipation in discharge resistors:\n  Using standard R = 75 kΩ:\n  P_resistor_1 = V_L² / R = 415² / 75,000 = 172,225 / 75,000 = 2.30 W per phase.\n  Total 3-phase heat dissipation = 3 · 2.30 W = 6.90 W.\n  (Easily dissipated by panel natural convection; negligible impact on plant efficiency).',
        hi: 'चरण 1: डेल्टा कैपेसिटेंस: C_delta = 16,667 / (2 · π · 50 · 415²) = 308 μF प्रति फेज।\n\nचरण 2: डिस्चार्ज समीकरण: R_dis ≤ t / [C · ln(587 / 50)] = 60 / [308 · 10⁻⁶ · 2.463] = 79.1 kΩ। 75 kΩ का मानक रेसिस्टर चुनें।\n\nचरण 3: सामान्य संचालन में ऊष्मा हानि: P = 3 · (415² / 75,000) = 6.90 W (नगण्य ऊर्जा खपत)।',
        bn: 'ধাপ ১: ডেল্টা ক্যাপাসিট্যান্স: C_delta = ১৬,৬৬৭ / (২ · π · ৫০ · ৪১৫²) = ৩০৮ μF প্রতি ফেজে।\n\nধাপ ২: ডিসচার্জ সমীকরণ: R_dis ≤ ৬০ / [৩০৮ · ১০⁻⁶ · ln(৫৮৭/৫০)] = ৭৯.১ kΩ। মানক ৭৫ kΩ রেজিস্টর ব্যবহার করুন।\n\nধাপ ৩: সার্বক্ষণিক অপচয়: P = ৩ · (৪১৫² / ৭৫,০০০) = ৬.৯০ W (খুবই সামান্য তাপ)।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation Transformer Incomer CT Polarity Commissioning: Field engineers perform secondary injection and phase angle checks between line voltage and CT current using a dual-channel meter to guarantee correct 4-quadrant reactive power sensing.',
      'Harmonic Hotspot Infrared Thermography Audits: Periodic thermal imaging inspections of capacitor cans, series detuned reactors, and lug connections detect dielectric degradation and harmonic overheating before case rupture occurs.'
    ],
    hi: [
      'सबस्टेशन ट्रांसफार्मर इनकमर CT पोलरिटी कमिशनिंग: फील्ड इंजीनियर फेज एंगल मीटर का उपयोग करके लाइन वोल्टेज और CT करंट के बीच फेज कोण की जांच करते हैं ताकि सही 4-क्वाड्रेंट सेंसिंग सुनिश्चित हो सके।',
      'हार्मोनिक हॉटस्पॉट इन्फ्रारेड थर्मोग्राफी ऑडिट: कैपेसिटर कैन, रिएक्टर और केबल कनेक्शनों का नियमित इन्फ्रारेड थर्मल निरीक्षण आंतरिक खराबी और हार्मोनिक हीटिंग को फटने से पहले ही पकड़ लेता है।'
    ],
    bn: [
      'সাবস্টেশন ট্রান্সফরমার ইনকামার CT পোলারিটি কমিশনিং: ইঞ্জিনিয়াররা ফেজ অ্যাঙ্গেল মিটার দিয়ে ভোল্টেজ ও CT কারেন্টের মধ্যকার কোণ পরীক্ষা করেন যাতে সঠিক ৪-কোয়াড্র্যান্ট রিঅ্যাক্টিভ পাওয়ার শনাক্ত করা নিশ্চিত হয়।',
      'হারমোনিক হটস্পট ইনফ্রারেড থার্মোগ্রাফি নিরীক্ষা: ক্যাপাসিটর ক্যান, রিঅ্যাক্টর ও টার্মিনালগুলোর নিয়মিত ইনফ্রারেড থার্মাল ইমেজিং অভ্যন্তরীণ অবক্ষয় ও অতিরিক্ত তাপ শনাক্ত করে বিস্ফোরণ থেকে রক্ষা করে।'
    ]
  },
  importantPoints: {
    en: [
      'Never open-circuit an energized Current Transformer secondary! An open CT produces lethal kilovolt spikes across S1-S2. Always short CT terminals before disconnecting cables.',
      'The APFC controller sensing CT MUST be installed on the incoming bus UPSTREAM of the capacitor bank connection. If installed downstream, the controller is blind to capacitor current.',
      'Capacitor-duty contactors with early-make auxiliary damping resistors are MANDATORY to suppress peak inrush currents from exceeding 100x nominal current.'
    ],
    hi: [
      'चालू करंट ट्रांसफॉर्मर (CT) की सेकंडरी को कभी भी खुला न छोड़ें! ओपन CT घातक किलोवोल्ट स्पाइक्स पैदा करता है। हमेशा अलग करने से पहले CT शॉर्ट करें।',
      'APFC सेंसिंग CT हमेशा कैपेसिटर कनेक्शन के अपस्ट्रीम इनकमिंग लाइन पर होना चाहिए। डाउनस्ट्रीम लगाने पर कंट्रोलर कैपेसिटर करंट नहीं देख पाता।',
      'इनरश करंट को नॉमिनल करंट के 100 गुना से अधिक होने से रोकने के लिए डैम्पिंग रेसिस्टर युक्त कैपेसिटर-ड्यूटी कॉन्टैक्टर अनिवार्य हैं।'
    ],
    bn: [
      'চালু অবস্থায় কারেন্ট ট্রান্সফরমার (CT) এর সেকেন্ডারি কখনোই খোলা রাখবেন না! এটি মারাত্মক কিলোভোল্ট স্পাইক তৈরি করে। তার খোলার আগে সর্বদা টার্মিনাল শর্ট করুন।',
      'APFC সেন্সিং CT অবশ্যই ক্যাপাসিটর সংযোগের পূর্বে মেইন লাইনে আপস্ট্রিমে থাকতে হবে। ডাউনস্ট্রিমে থাকলে কন্ট্রোলার ক্যাপাসিটর কারেন্ট বুঝতে পারে না।',
      'ইনরাশ কারেন্ট ১০০ গুণ ছাড়িয়ে যাওয়া রোধ করতে ড্যাম্পিং রেজিস্টরযুক্ত বিশেষ ক্যাপাসিটর-ডিউটি কন্ট্যাক্টর ব্যবহার বাধ্যতামূলক।'
    ]
  },
  commonMistakes: {
    en: [
      'Wiring CT polarity backwards (S1/S2 reversed), which causes active power to read negative and confuses the controller into locking out all stages.',
      'Setting the controller reconnection delay timer to less than 45 seconds. Energizing a charged capacitor causes devastating contactor welding and dielectric puncture.'
    ],
    hi: [
      'CT पोलरिटी उल्टी जोड़ना (S1/S2 उलटे), जिससे सक्रिय शक्ति ऋणात्मक दिखाई देती है और कंट्रोलर सभी स्टेप्स को लॉक कर देता है।',
      'रिकनेक्शन डिले टाइमर को 45 सेकंड से कम सेट करना। चार्ज कैपेसिटर को जोड़ने से कॉन्टैक्टर वेल्ड हो जाते हैं और कैपेसिटर पंचर हो जाता है।'
    ],
    bn: [
      'CT পোলারিটি উল্টো লাগানো (S1/S2 বিপরীত সংযোগ), যার ফলে অ্যাক্টিভ পাওয়ার নেগেটিভ দেখায় এবং কন্ট্রোলার লক হয়ে যায়।',
      'রিকনেকশন বিলম্ব ৪৫ সেকেন্ডের কম রাখা। চার্জিত ক্যাপাসিটর সংযুক্ত করলে কন্ট্যাক্টর পুড়ে আটকে যায় ও ক্যাপাসিটর নষ্ট হয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Accurate C/k threshold programming and generous deadband hysteresis prevent controller hunting and protect contactors from premature mechanical burnout.',
      'Discharge resistors discharging to <50V within 60 seconds are vital for both human safety and equipment protection during repeated switching cycles.'
    ],
    hi: [
      'सटीक C/k थ्रेशोल्ड और पर्याप्त डेडबैंड रिले हंटिंग को रोकते हैं और कॉन्टैक्टरों को जलने से बचाते हैं।',
      '60 सेकंड में वोल्टेज <50V तक डिस्चार्ज करने वाले रेसिस्टर मानव सुरक्षा और बार-बार स्विचिंग के दौरान उपकरणों की सुरक्षा के लिए अत्यंत महत्वपूर्ण हैं।'
    ],
    bn: [
      'সঠিক C/k থ্রেশহোল্ড প্রোগ্রামিং ও উপযুক্ত ডেডব্যান্ড কন্ট্রোলারের হান্টিং রোধ করে এবং কন্ট্যাক্টরগুলোকে অকাল ধ্বংসের হাত থেকে রক্ষা করে।',
      '৬০ সেকেন্ডের মধ্যে ভোল্টেজ ৫০V-এর নিচে নামিয়ে আনা ডিসচার্জ রেজিস্টর মানুষের নিরাপত্তা এবং সুইচিং চক্রে যন্ত্র সুরক্ষার জন্য অপরিহার্য।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch13-l09-01',
      question: {
        en: 'An APFC panel on a 415V system has a smallest capacitor stage of 50 kVAR and a 1600/5A sensing CT. What is the theoretical C/k sensitivity ratio?',
        hi: '415V सिस्टम पर एक APFC पैनल में 50 kVAR का सबसे छोटा स्टेप और 1600/5A का CT लगा है। सैद्धांतिक C/k अनुपात क्या है?',
        bn: 'একটি ৪১৫V সিস্টেমে ৫০ kVAR ক্ষুদ্রতম ধাপের APFC প্যানেল এবং ১৬০০/৫A সেন্সিং CT আছে। তাত্ত্বিক C/k সেনসিটিভিটি কত?'
      },
      hint: {
        en: 'I_n = 50,000 / (√3 · 415) = 69.56 A. CT Ratio = 1600 / 5 = 320. Secondary current = 69.56 / 320 = 0.217 A. Recommended C/k ≈ 0.67 · 0.217 = 0.145 A (program 0.15 A).',
        hi: 'I_n = 50,000 / (√3 · 415) = 69.56 A; CT अनुपात = 320। सेकंडरी करंट = 69.56 / 320 = 0.217 A। अनुशंसित C/k = 0.67 · 0.217 ≈ 0.15 A।',
        bn: 'I_n = ৫০,০০০ / (√৩ · ৪১৫) = ৬৯.৫৬ A; CT অনুপাত = ৩২০। সেকেন্ডারি কারেন্ট = ৬৯.৫৬ / ৩২০ = ০.২১৭ A। C/k সেটিং ≈ ০.১৫ A।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch13-l09-01',
      question: {
        en: 'Where MUST the sensing Current Transformer (CT) of an APFC panel be installed in the electrical single-line diagram?',
        hi: 'APFC पैनल का सेंसिंग करंट ट्रांसफार्मर (CT) सिंगल-लाइन आरेख में कहाँ स्थापित किया जाना चाहिए?',
        bn: 'একটি APFC প্যানেলের সেন্সিং কারেন্ট ট্রান্সফরমার (CT) সিঙ্গেল-লাইন ডায়াগ্রামে কোথায় স্থাপন করা বাধ্যতামূলক?'
      },
      options: [
        { en: 'On the main incoming supply feeder UPSTREAM of both plant loads and the capacitor bank connection', hi: 'प्लांट लोड और कैपेसिटर बैंक दोनों के अपस्ट्रीम मेन इनकमिंग फीडर पर', bn: 'প্ল্যান্ট লোড এবং ক্যাপাসিটর ব্যাংক উভয়ের আপস্ট্রিমে মেইন ইনকামিং লাইনে' },
        { en: 'Directly inside one of the capacitor delta branch loops', hi: 'कैपेसिटर डेल्टा ब्रांच लूप के अंदर', bn: 'যেকোনো একটি ক্যাপাসিটর ডেল্টা ব্রাঞ্চ লুপের ভেতরে' },
        { en: 'On the neutral-to-ground earth electrode bonding cable', hi: 'न्यूट्रल-टू-ग्राउंड अर्थ इलेक्ट्रोड बॉन्डिंग केबल पर', bn: 'নিউট্রাল-টু-গ্রাউন্ড আর্থিং কেবলের ওপর' },
        { en: 'Downstream of the smallest induction motor only', hi: 'केवल सबसे छोटी इंडक्शन मोटर के डाउनस्ट्रीम', bn: 'শুধুমাত্র ক্ষুদ্রতম মোটরের ডাউনস্ট্রিমে' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'The sensing CT must see the combined net current of the plant load AND the capacitor bank. If placed downstream of the capacitor tap-off, it cannot sense the reactive current supplied by the capacitors, causing the controller to keep switching on stages blindly.',
        hi: 'सेंसिंग CT को लोड और कैपेसिटर दोनों का कुल करंट देखना चाहिए। कैपेसिटर के बाद लगाने पर यह कैपेसिटर करंट को नहीं देख पाता और रिले लगातार स्टेप चालू करती रहती है।',
        bn: 'সেন্সিং CT-কে অবশ্যই লোড ও ক্যাপাসিটর উভয়ের সম্মিলিত কারেন্ট মাপতে হবে। ক্যাপাসিটরের পরে বসালে এটি ক্যাপাসিটরের কারেন্ট দেখতে পারে না এবং ক্রমাগত সব ধাপ অন করতে থাকে।'
      }
    },
    {
      id: 'mcq-ch13-l09-02',
      question: {
        en: 'What occurs if the APFC sensing CT secondary leads (S1 and S2) are wired in reverse polarity?',
        hi: 'यदि APFC सेंसिंग CT के सेकंडरी तार (S1 और S2) उल्टी पोलरिटी में जुड़ जाएं तो क्या होगा?',
        bn: 'APFC সেন্সিং CT-এর সেকেন্ডারি তার দুটি (S1 ও S2) বিপরীত পোলারিটিতে সংযুক্ত হলে কী ঘটবে?'
      },
      options: [
        { en: 'The controller detects active power as negative (export/generation mode), displays erroneous PF, and fails to switch steps in auto mode', hi: 'कंट्रोलर सक्रिय शक्ति को ऋणात्मक (जनरेशन मोड) समझता है, गलत PF दिखाता है और ऑटो मोड में काम नहीं करता', bn: 'কন্ট্রোলার সক্রিয় শক্তিকে নেগেটিভ (বিদ্যুৎ উৎপাদন মোড) মনে করে, ভুল PF প্রদর্শন করে এবং অটো মোডে কাজ করতে ব্যর্থ হয়' },
        { en: 'The main substation transformer immediately explodes', hi: 'मेन सबस्टेशन ट्रांसफार्मर तुरंत फट जाता है', bn: 'মেইন সাবস্টেশন ট্রান্সফরমার তাৎক্ষণিকভাবে বিস্ফোরিত হয়' },
        { en: 'The capacitor dielectric fluid turns into pure distilled water', hi: 'कैपेसिटर का तेल शुद्ध आसुत जल में बदल जाता है', bn: 'ক্যাপাসিটরের ডাই-ইলেকট্রিক তেল বিশুদ্ধ পানিতে পরিণত হয়' },
        { en: 'All factory electric motors reverse their direction of rotation', hi: 'फैक्ट्री की सभी मोटरों के घूमने की दिशा उल्टी हो जाती है', bn: 'কারখানার সব মোটরের ঘূর্ণনের দিক উল্টো হয়ে যায়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Reversing S1/S2 introduces a 180° phase inversion. Active power P = V · I · cos(θ) becomes negative, making the controller assume power is being exported to the grid, disabling normal power factor correction logic.',
        hi: 'S1/S2 उलटने से 180° का फेज अंतर आता है। सक्रिय शक्ति ऋणात्मक हो जाती है और कंट्रोलर समझता है कि बिजली ग्रिड को बेची जा रही है, जिससे APFC काम करना बंद कर देता है।',
        bn: 'S1/S2 উল্টো হলে ১৮০° ফেজ বিপর্যয় ঘটে। অ্যাক্টিভ শক্তি ঋণাত্মক দেখায়, ফলে কন্ট্রোলার মনে করে গ্রিডে বিদ্যুৎ পাঠানো হচ্ছে এবং ক্ষতিপূরণ ব্যবস্থা অচল হয়ে পড়ে।'
      }
    },
    {
      id: 'mcq-ch13-l09-03',
      question: {
        en: 'What is the primary operational cause of "APFC Hunting" (rapid, continuous cycling ON and OFF of capacitor stages)?',
        hi: 'APFC हंटिंग (कैपेसिटर स्टेप्स का तेजी से बार-बार ऑन और ऑफ होना) का मुख्य कारण क्या है?',
        bn: 'APFC হান্টিং (ক্যাপাসিটর ধাপগুলোর দ্রুত ও অনবরত অন-অফ হওয়া)-এর মূল কারণ কী?'
      },
      options: [
        { en: 'C/k threshold programmed too low, or controller deadband smaller than the kVAR rating of the smallest stage', hi: 'C/k थ्रेशोल्ड बहुत कम सेट होना, या डेडबैंड सबसे छोटे स्टेप के kVAR से छोटा होना', bn: 'C/k থ্রেশহোল্ড খুব কম সেট করা, অথবা কন্ট্রোলার ডেডব্যান্ড ক্ষুদ্রতম ধাপের kVAR-এর চেয়ে ছোট হওয়া' },
        { en: 'Supply frequency rising from 50 Hz to 50.02 Hz', hi: 'सप्लाई फ्रीक्वेंसी का 50 Hz से बढ़कर 50.02 Hz होना', bn: 'বিদ্যুৎ ফ্রিকোয়েন্সি ৫০ Hz থেকে ৫০.০২ Hz হওয়া' },
        { en: 'Panel ambient temperature dropping below 20°C', hi: 'पैनल का तापमान 20°C से नीचे गिरना', bn: 'প্যানেলের তাপমাত্রা ২০°C-এর নিচে নামা' },
        { en: 'Lightning striking an overhead transmission tower 50 km away', hi: '50 किमी दूर किसी टावर पर बिजली गिरना', bn: '৫০ কিমি দূরে কোথাও বজ্রপাত হওয়া' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Hunting occurs when engaging a stage overcompensates beyond the switch-off deadband, prompting an immediate trip. The resulting deficit then triggers an immediate re-engage. Widening the deadband and recalibrating C/k eliminates hunting.',
        hi: 'हंटिंग तब होती है जब एक स्टेप चालू होने पर सिस्टम तुरंत डेडबैंड से बाहर निकल जाता है और बंद हो जाता है, फिर तुरंत ऑन हो जाता है। C/k और डेडबैंड बढ़ाकर इसे रोका जाता है।',
        bn: 'হান্টিং ঘটে যখন কোনো ধাপ অন করলে তা সুইচ-অফ ডেডব্যান্ড অতিক্রম করে এবং সাথে সাথে অফ হয়ে যায়, আবার ঘাটতি তৈরি হলে পুনরায় অন হয়। ডেডব্যান্ড বাড়িয়ে এটি দূর করা হয়।'
      }
    },
    {
      id: 'mcq-ch13-l09-04',
      question: {
        en: 'Under international standard IEC 60831, discharge resistors must reduce the residual terminal voltage of a de-energized capacitor to below what threshold within 60 seconds?',
        hi: 'अंतरराष्ट्रीय मानक IEC 60831 के तहत, डिस्चार्ज रेसिस्टर्स को कैपेसिटर बंद होने के 60 सेकंड के भीतर अवशिष्ट टर्मिनल वोल्टेज को किस सीमा से नीचे लाना चाहिए?',
        bn: 'আন্তর্জাতিক মানক IEC 60831 অনুযায়ী, ডিসচার্জ রেজিস্টর সংযোগ বিচ্ছিন্ন করার ৬০ সেকেন্ডের মধ্যে ক্যাপাসিটরের অবশিষ্ট ভোল্টেজ কোন সীমার নিচে নামাতে বাধ্য?'
      },
      options: [
        { en: '50 Volts', hi: '50 वोल्ट', bn: '৫০ ভোল্ট' },
        { en: '230 Volts', hi: '230 वोल्ट', bn: '২৩০ ভোল্ট' },
        { en: '0.00 Volts (absolute zero)', hi: '0.00 वोल्ट (शून्य)', bn: '০.০০ ভোল্ট (একদম শূন্য)' },
        { en: '300 Volts', hi: '300 वोल्ट', bn: '৩০০ ভোল্ট' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'IEC 60831 mandates that shunt power capacitors must discharge to 50V or less within 60 seconds (or 180 seconds for ratings > 600V) to prevent electric shock to technicians and catastrophic out-of-phase reclosing.',
        hi: 'IEC 60831 के अनुसार तकनीशियनों को झटके से बचाने और दोबारा जुड़ने पर स्पार्किंग रोकने के लिए 60 सेकंड में वोल्टेज 50V या उससे कम होना अनिवार्य है।',
        bn: 'IEC 60831 অনুযায়ী কর্মীদের শক খাওয়া থেকে বাঁচাতে এবং ভুল ফেজে পুনরায় সংযোগের বিস্ফোরণ রোধে ৬০ সেকেন্ডের মধ্যে ভোল্টেজ ৫০V বা তার নিচে নামানো বাধ্যতামূলক।'
      }
    },
    {
      id: 'mcq-ch13-l09-05',
      question: {
        en: 'Why do specialized "Capacitor-Duty Contactors" feature early-make auxiliary contacts with damping resistor wire loops?',
        hi: 'विशेष "कैपेसिटर-ड्यूटी कॉन्टैक्टर" में डैम्पिंग रेसिस्टर लूप वाले अर्ली-मेक ऑक्सिलरी संपर्क क्यों होते हैं?',
        bn: 'বিশেষ "ক্যাপাসিটর-ডিউটি কন্ট্যাক্টর"-এ ড্যাম্পিং রেজিস্টর লুপসহ আর্লি-মেক সহায়ক কন্ট্যাক্ট কেন থাকে?'
      },
      options: [
        { en: 'To safely suppress and limit violent initial inrush currents (which can exceed 100x I_n) before the main power contacts close', hi: 'मुख्य संपर्कों के बंद होने से पहले अत्यधिक इनरश करंट (जो 100 गुना I_n से अधिक हो सकता है) को सुरक्षित रूप से दबाने हेतु', bn: 'মেইন কন্ট্যাক্ট যুক্ত হওয়ার পূর্বে ভয়াবহ ইনরাশ কারেন্ট (যা ১০০ গুণ I_n ছাড়িয়ে যেতে পারে) নিরাপদে সীমিত করার জন্য' },
        { en: 'To convert excess active kilowatt power into heat to warm the control panel in winter', hi: 'सर्दियों में पैनल को गर्म करने के लिए अतिरिक्त किलोवाट बिजली को गर्मी में बदलने हेतु', bn: 'শীতকালে প্যানেল গরম করার জন্য' },
        { en: 'To measure insulation resistance during each switching operation', hi: 'प्रत्येक स्विचिंग ऑपरेशन के दौरान इन्सुलेशन प्रतिरोध मापने के लिए', bn: 'প্রতিটি অপারেশনে ইনসুলেশন রেজিস্ট্যান্স মাপার জন্য' },
        { en: 'To prevent lightning from striking the factory roof', hi: 'फैक्ट्री की छत पर बिजली गिरने से रोकने के लिए', bn: 'কারখানার ছাদে বজ্রপাত রোধের জন্য' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Uncharged capacitors represent a momentary short circuit upon connection, drawing inrush currents up to 100 to 200 times nominal current. Early-make damping resistors insert series resistance for 2-5 milliseconds, dissipating the surge before main contacts seat.',
        hi: 'डिस्चार्ज कैपेसिटर स्विचिंग के समय शॉर्ट सर्किट की तरह व्यवहार करता है और 100-200 गुना करंट लेता है। अर्ली-मेक रेसिस्टर 2-5 मिलीसेकंड के लिए करंट को सीमित करते हैं।',
        bn: 'ক্যাপাসিটর অন করার মুহূর্তে শর্ট সার্কিটের মতো আচরণ করে এবং ১০০-২০০ গুণ ইনরাশ কারেন্ট টানে। আর্লি-মেক রেজিস্টর ২-৫ মিলিসেকেন্ডের জন্য এই তীব্র কারেন্ট কমিয়ে কন্ট্যাক্টর রক্ষা করে।'
      }
    },
    {
      id: 'mcq-ch13-l09-06',
      question: {
        en: 'What is the standard sizing factor for HRC fuses protecting a 3-phase capacitor branch circuit?',
        hi: '3-फेज कैपेसिटर ब्रांच सर्किट की सुरक्षा करने वाले HRC फ्यूज के लिए मानक साइज़िंग गुणांक क्या है?',
        bn: '৩-ফেজ ক্যাপাসিটর ব্রাঞ্চ সার্কিট সুরক্ষায় ব্যবহৃত HRC ফিউজের মানক সাইজিং ফ্যাক্টর কত?'
      },
      options: [
        { en: '1.65 to 1.80 times nominal capacitor current (I_n)', hi: 'नॉमिनल कैपेसिटर करंट (I_n) का 1.65 से 1.80 गुना', bn: 'ক্যাপাসিটরের স্বাভাবিক কারেন্টের (I_n) ১.৬৫ থেকে ১.৮০ গুণ' },
        { en: 'Exactly 1.00 times nominal current', hi: 'नॉमिनल करंट का ठीक 1.00 गुना', bn: 'ঠিক স্বাভাবিক কারেন্টের ১.০০ গুণ' },
        { en: '5.0 to 10.0 times nominal current', hi: 'नॉमिनल करंट का 5.0 से 10.0 गुना', bn: 'স্বাভাবিক কারেন্টের ৫.০ থেকে ১০.০ গুণ' },
        { en: '0.50 times nominal current', hi: 'नॉमिनल करंट का 0.50 गुना', bn: 'স্বাভাবিক কারেন্টের ০.৫০ গুণ' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Standards (IEC 60831 / IS 13340) recommend sizing branch HRC fuses at 1.65x to 1.80x I_n to accommodate the permissible continuous 1.30x current overload (due to voltage tolerance and harmonic currents) plus capacitor capacitance tolerance (+10% to +15%).',
        hi: 'मानक (IEC 60831) वोल्टेज टॉलरेंस, हार्मोनिक्स (1.30x) और कैपेसिटेंस टॉलरेंस (+10%) को संभालने के लिए HRC फ्यूज 1.65 से 1.80 गुना I_n पर चुनने की सलाह देते हैं।',
        bn: 'IEC 60831 মানক অনুসারে ভোল্টেজ ওঠানামা, হারমোনিক কারেন্ট (১.৩০ গুণ) এবং ক্যাপাসিট্যান্স টলারেন্স (+১০%) বিবেচনা করে ফিউজ ১.৬৫ থেকে ১.৮০ গুণ I_n নির্ধারণ করা হয়।'
      }
    },
    {
      id: 'mcq-ch13-l09-07',
      question: {
        en: 'During a physical inspection of an APFC panel, a technician observes that three cylindrical capacitor cans are visibly bulged at the top seam. What is the mandatory engineering action?',
        hi: 'APFC पैनल के भौतिक निरीक्षण के दौरान, तकनीशियन देखता है कि तीन कैपेसिटर कैन ऊपर से फूले हुए (bulged) हैं। अनिवार्य इंजीनियरिंग कार्रवाई क्या है?',
        bn: 'APFC প্যানেল পরিদর্শনের সময় দেখা গেল তিনটি সিলিন্ডার ক্যাপাসিটরের ওপরের ঢাকনা স্পষ্টভাবে ফুলে গেছে (bulged)। প্রকৌশলগত আবশ্যকীয় পদক্ষেপ কী?'
      },
      options: [
        { en: 'De-energize, lock out, and IMMEDIATELY REPLACE the bulged capacitors; their internal overpressure safety disconnectors have actuated and they cannot be reset', hi: 'बिजली बंद करें और तुरंत फूले हुए कैपेसिटर बदलें; उनका आंतरिक ओवरप्रेशर डिस्कनेक्टर सक्रिय हो चुका है और वे दोबारा ठीक नहीं हो सकते', bn: 'বিদ্যুৎ বিচ্ছিন্ন করে অবিলম্বে ফুলে যাওয়া ক্যাপাসিটরগুলো পরিবর্তন করুন; ভেতরের ওভারপ্রেশার সেফটি মেকানিজম কেটে গেছে এবং এটি আর ঠিক করা সম্ভব নয়' },
        { en: 'Hammer the bulged metal tops flat and re-energize', hi: 'हथौड़े से पीटकर ढक्कन सीधा करें और दोबारा चालू करें', bn: 'হাতুড়ি দিয়ে পিটিয়ে ঢাকনা সোজা করে আবার চালু করুন' },
        { en: 'Add more engine motor oil into the vent holes', hi: 'वेंट होल में और इंजन ऑयल भरें', bn: 'ছিদ্র দিয়ে ভেতরে আরও মোটর তেল ঢালুন' },
        { en: 'Ignore it because bulging increases surface area and improves cooling', hi: 'इसे अनदेखा करें क्योंकि फूलने से सतह का क्षेत्रफल बढ़ता है और कूलिंग सुधरती है', bn: 'উপেক্ষা করুন কারণ ফুলে গেলে ক্ষেত্রফল বাড়ে এবং ভালো ঠান্ডা হয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Modern self-healing capacitors feature internal tear-off overpressure disconnectors. When internal gas pressure expands the top lid, the internal connections tear open to prevent violent explosion. A bulged can is permanently disconnected internally and must be replaced immediately.',
        hi: 'आधुनिक कैपेसिटर में आंतरिक ओवरप्रेशर डिस्कनेक्टर होता है। गैस का दबाव बढ़ने पर ढक्कन फूल जाता है और आंतरिक तार टूट जाते हैं ताकि विस्फोट न हो। ऐसा कैपेसिटर पूरी तरह खराब हो चुका होता है और इसे तुरंत बदलना चाहिए।',
        bn: 'আধুনিক ক্যাপাসিটরে অভ্যন্তরীণ ওভারপ্রেশার ডিসকানেক্টর থাকে। অতিরিক্ত গ্যাস জমলে বিস্ফোরণ রোধে ঢাকনা ফুলে ওঠে এবং সংযোগ বিচ্ছিন্ন হয়ে যায়। ফুলে যাওয়া ক্যাপাসিটর অকেজো এবং অবিলম্বে প্রতিস্থাপনীয়।'
      }
    },
    {
      id: 'mcq-ch13-l09-08',
      question: {
        en: 'Why must the APFC controller reconnection delay timer be programmed for at least 60 to 120 seconds?',
        hi: 'APFC कंट्रोलर का रिकनेक्शन डिले टाइमर कम से कम 60 से 120 सेकंड पर प्रोग्राम क्यों किया जाना चाहिए?',
        bn: 'APFC কন্ট্রোলারের রিকনেকশন বিলম্ব টাইমার ন্যূনতম ৬০ থেকে ১২০ সেকেন্ডে প্রোগ্রাম করা কেন আবশ্যক?'
      },
      options: [
        { en: 'To ensure the internal discharge resistors have dissipated residual voltage below 50V before the contactor can reclose', hi: 'ताकि यह सुनिश्चित हो सके कि कॉन्टैक्टर दोबारा जुड़ने से पहले डिस्चार्ज रेसिस्टर्स ने वोल्टेज 50V से कम कर दिया है', bn: 'যাতে কন্ট্যাক্টর পুনরায় চালু হওয়ার পূর্বে ডিসচার্জ রেজিস্টরগুলো অবশিষ্ট ভোল্টেজ ৫০V-এর নিচে নামিয়ে আনতে পারে' },
        { en: 'To allow the factory workers to take a scheduled tea break', hi: 'ताकि कर्मचारी चाय ब्रेक ले सकें', bn: 'যাতে কর্মীরা চা পানের বিরতি নিতে পারে' },
        { en: 'Because the microprocessor crystal oscillator runs at 1 Hz', hi: 'क्योंकि माइक्रोप्रोसेसर केवल 1 Hz पर चलता है', bn: 'কারণ মাইক্রোপ্রসেসরের গতি মাত্র ১ হার্টজ' },
        { en: 'To synchronize the grid frequency with solar sunspots', hi: 'सौर ऊर्जा से ग्रिड फ्रीक्वेंसी मिलाने के लिए', bn: 'সৌর ঝড়ের সাথে গ্রিড মেলানোর জন্য' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Reclosing into a capacitor carrying trapped charge in phase opposition subjects the system to twice the peak system voltage (over 1,150V on a 415V network), drawing extreme transient currents that cause contactor contact welding and explosion.',
        hi: 'चार्ज कैपेसिटर को विपरीत फेज में जोड़ने पर वोल्टेज दोगुना (1,150V+) हो जाता है, जिससे भारी करंट बहता है और कॉन्टैक्टर वेल्ड हो जाते हैं या कैपेसिटर फट जाता है।',
        bn: 'চার্জিত ক্যাপাসিটর বিপরীত ফেজে চালু করলে সিস্টেমের ভোল্টেজ দ্বিগুণেরও বেশি (১,১৫০V+) হয়ে যায়, যা বিধ্বংসী কারেন্ট তৈরি করে কন্ট্যাক্টর ওয়েল্ড বা বিস্ফোরণ ঘটায়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch13-pfc-commissioning',
      title: {
        en: 'APFC Panel Field Commissioning & Safety Testing Schematic',
        hi: 'APFC पैनल फील्ड कमिशनिंग एवं सुरक्षा परीक्षण आरेख',
        bn: 'APFC প্যানেল ফিল্ড কমিশনিং ও সুরক্ষা পরীক্ষণ স্কিম্যাটিক'
      },
      caption: {
        en: 'Complete commissioning wiring diagram showing incoming CT placement, polarity orientation (P1/P2, S1/S2), capacitor-duty contactors with inrush damping loops, detuning reactors, and discharge resistor verification.',
        hi: 'इनकमिंग CT स्थिति, पोलरिटी ओरिएंटेशन (P1/P2, S1/S2), इनरश डैम्पिंग लूप युक्त कॉन्टैक्टर, डिट्यूनिंग रिएक्टर और डिस्चार्ज रेसिस्टर को दर्शाने वाला कमिशनिंग वायरिंग आरेख।',
        bn: 'ইনকামিং CT অবস্থান, পোলারিটি বিন্যাস (P1/P2, S1/S2), ইনরাশ ড্যাম্পিং লুপযুক্ত কন্ট্যাক্টর, ডিটিউনিং রিঅ্যাক্টর এবং ডিসচার্জ রেজিস্টর প্রদর্শনকারী সম্পূর্ণ কমিশনিং ওয়্যারিং ডায়াগ্রাম।'
      },
      svgType: 'circuit-ch13-pfc-commissioning'
    }
  ]
};
