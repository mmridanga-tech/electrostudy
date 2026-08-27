import { Lesson } from '../types';

export const LESSON_CAPACITOR_TESTING_SAFETY_CAPSTONE: Lesson = {
  id: 'lsn-ch7-capacitor-testing-safety-capstone',
  topicId: 'ch7-capacitor-testing-safety-capstone',
  chapterId: 'ch-capacitors',
  order: 20,
  title: {
    en: 'Capacitor Testing, Fault Diagnostics, Safety & Chapter 7 Capstone',
    hi: 'कैपेसिटर परीक्षण, फॉल्ट निदान, सुरक्षा एवं अध्याय 7 समापन',
    bn: 'ক্যাপাসিটর টেস্টিং, ত্রুটি নির্ণয়, নিরাপত্তা ও অধ্যায় ৭ সমাপনী'
  },
  description: {
    en: 'Testing capacitors using ESR meters, LCR bridges, and multimeters, visual fault symptoms (bulging, leakage), lethal stored energy safety, dielectric absorption memory, discharge procedures, and Chapter 7 comprehensive master revision.',
    hi: 'ESR मीटर, LCR ब्रिज एवं मल्टीमीटर द्वारा कैपेसिटर परीक्षण, दृश्य फॉल्ट लक्षण, घातक संचित ऊर्जा सुरक्षा, डाइइलेक्ट्रिक अवशोषण डिस्चार्ज प्रक्रिया एवं संपूर्ण अध्याय 7 मास्टर रिवीजन।',
    bn: 'ESR মিটার, LCR ব্রিজ ও মাল্টিমিটার দিয়ে ক্যাপাসিটর পরীক্ষা, শারীরিক ত্রুটি নির্ণয়, মারাত্মক সঞ্চিত শক্তির বিপদ, ডাই-ইলেকট্রিক মেমোরি ডিসচার্জ সুরক্ষা এবং অধ্যায় ৭ এর পূর্ণাঙ্গ মাস্টার রিভিশন।'
  },
  easyExplanation: {
    en: 'Capacitors can store lethal high-voltage energy long after power is switched off. Testing them requires checking three key health parameters: (1) Capacitance value (Farads), (2) Equivalent Series Resistance (ESR), and (3) DC leakage current. Always discharge capacitors safely through a power resistor before touching them, and beware of "dielectric absorption" where discharged capacitors spontaneously self-recharge!',
    hi: 'पावर बंद होने के काफी समय बाद भी कैपेसिटर जानलेवा हाई-वोल्टेज चार्ज स्टोर रख सकते हैं। इनके स्वास्थ्य की जांच तीन चीजों से होती है: (1) वास्तविक धारिता (Farad), (2) इंटरनल ESR (प्रतिरोध), और (3) लीकेज करंट। कैपेसिटर को छूने से पहले हमेशा उसे एक सुरक्षित डिस्चार्ज रेजिस्टर से डिस्चार्ज करें, और "डाइइलेक्ट्रिक एब्जॉर्प्शन" से सावधान रहें जिसमें कैपेसिटर डिस्चार्ज होने के बाद दोबारा अपने आप चार्ज हो जाता है!',
    bn: 'বিদ্যুৎ সংযোগ বন্ধ করার বহুক্ষণ পরেও ক্যাপাসিটর মারাত্মক প্রাণঘাতী হাই-ভোল্টেজ চার্জ ধরে রাখতে পারে। একটি ক্যাপাসিটর ভালো আছে কিনা তা ৩টি বিষয়ে যাচাই করা হয়: (১) সঠিক ক্যাপাসিট্যান্স মান, (২) অভ্যন্তরীণ ESR রোধ, এবং (৩) ডিসি লিকেজ কারেন্ট। ক্যাপাসিটরে হাত দেওয়ার আগে সবসময় রেজিস্টর যুক্ত ডিসচার্জ রড দিয়ে ডিসচার্জ করতে হয় এবং "ডাই-ইলেকট্রিক মেমোরি" থেকে সাবধান থাকতে হয় যা খালি করার পরেও নিজে নিজে আবার চার্জ হয়ে ওঠে!'
  },
  detailedExplanation: {
    en: `1. Physical & Visual Capacitor Failure Symptoms:
- Top Vent Bulging / Domed Top: Over-pressure relief vents on aluminum electrolytic cans expand when internal electrolyte boils due to over-voltage, excessive ripple current, or reverse polarity.
- Electrolyte Crust / Leakage: Brown/white corrosive residue around bottom rubber seals, eating away copper PCB traces.
- Ceramic Disc Cracking / Delamination: Caused by mechanical flexure stress or thermal shock during soldering.
- Tantalum Explosions: Tantalum capacitors short-circuit violently with fire upon slightest reverse voltage or transient spike.

2. Electrical Testing Methods for Capacitors:
A. Digital Multimeter (DMM) Capacitance Mode:
- Measures total capacitance C by timing charging ramps.
- Limitation: Tests at low DC/AC signals; cannot detect bad caps with normal capacitance but disastrously high ESR!
B. In-Circuit ESR Meter (The Gold Standard for Electronics Repair):
- Injects a small 100 kHz, 100 mV AC signal across the capacitor without desoldering.
- Good capacitor: ESR < 0.1 Ω to 1.0 Ω.
- Defective "dried-up" capacitor: ESR rises to 10 Ω - 50 Ω+, causing motherboard boot loops, flickering monitors, and SMPS power failures.
C. LCR Bridge Meter (Dissipation Factor D & Q):
- Measures Capacitance (C), Series ESR, Parallel Leakage Resistance (Rp), and Dissipation Factor (tan δ = ESR / Xc) across user-selected test frequencies (100 Hz, 1 kHz, 10 kHz, 100 kHz).
D. Analog Multimeter (Ohmmeter "Kick" Test):
- High-resistance range (Rx1k or Rx10k): Needle kicks toward 0 Ω immediately, then slowly returns toward infinity (∞).
- If needle stays at 0 Ω -> Shorted! If needle never moves -> Open-circuit! If needle settles at <100 kΩ -> High DC leakage!

3. Industrial High-Voltage Capacitor Safety Protocols:
A. Stored Energy Hazard:
- Energy E = ½ · C · V² Joules. A 1000 μF, 400 V capacitor holds 80 Joules (enough to deliver a lethal cardiac arrest shock).
- Substation capacitor banks store hundreds of thousands of Joules!
B. Safe Discharging Protocol:
- NEVER use a plain metal screwdriver to short capacitor terminals (causes violent arcs, vaporized metal plasma, and weld pits).
- Always use a dedicated Discharging Probe with a heavy ceramic wirewound power resistor (e.g., 100 Ω to 1 kΩ, 10W - 50W rated).
- Rule of thumb: Discharge for at least 5 Time Constants (5 · R_discharge · C) or minimum 5 minutes for HV power factor banks before touching.
C. Dielectric Absorption ("Dielectric Memory"):
- Dielectric dipoles that were deeply polarized do not relax instantly. If an HV capacitor is shorted for only a few seconds and left open, it can spontaneously recover 10% to 20% of its original charge within minutes!
- Safety Rule: Industrial capacitors must have permanent grounding straps or shorting jumpers attached across terminals during storage and maintenance!

4. Chapter 7 Master Summary & Complete Formula Index:
- Fundamental Capacitance: Q = C · V  <=>  C = Q / V [Farads]
- Parallel Plate: C = ε0 · εr · A / d [Farads]
- Multi-Plate Gang: C = (n - 1) · ε0 · εr · A / d
- Capacitors in Series: 1/C_eq = 1/C1 + 1/C2 + ... (Equivalent capacitance decreases; total voltage divides inversely)
- Capacitors in Parallel: C_eq = C1 + C2 + ... (Equivalent capacitance sums directly)
- Stored Electrostatic Energy: E = ½ · C · V² = ½ · Q · V = ½ · Q² / C [Joules]
- RC Time Constant: τ = R · C [seconds]
- Charging Transient: v(t) = V_s · (1 - e^(-t/τ)), i(t) = (V_s / R) · e^(-t/τ)
- Discharging Transient: v(t) = V_0 · e^(-t/τ), i(t) = -(V_0 / R) · e^(-t/τ)
- Capacitive Reactance: Xc = 1 / (2 · π · f · C) [Ohms, Ω] (Current leads voltage by 90°)
- RC Cut-off Frequency: fc = 1 / (2 · π · R · C) [Hz]
- Shunt Capacitor kVAR: Qc = P · [tan(φ1) - tan(φ2)] [kVAR]
- Full-Wave Ripple Voltage: Vr(p-p) = Idc / (2 · f · C) [Volts]
- Supercapacitor Usable Energy: E = ½ · C · (Vmax² - Vmin²) [Joules]`,
    hi: `1. कैपेसिटर फॉल्ट के लक्षण:
- ऊपरी वेंट का फूलना (Bulging Top): आंतरिक गैस के दबाव से इलेक्ट्रोलाइटिक कैपेसिटर ऊपर से फूल जाता है या फट जाता है।
- सूखा इलेक्ट्रोलाइट (Dried-up Cap): उम्र बढ़ने और गर्मी से अंदर का तरल सूख जाता है, जिससे ESR बहुत बढ़ जाता है।

2. परीक्षण विधियाँ:
- इन-सर्किट ESR मीटर: बिना बोर्ड से निकाले कैपेसिटर के आंतरिक प्रतिरोध की जांच करता है (अच्छा कैपेसिटर < 1 Ω)।
- एनालॉग मीटर किक टेस्ट: सुई 0 ओम की तरफ जाकर धीरे-धीरे अनंत (∞) की तरफ लौटती है।
- LCR ब्रिज: डिसिपेशन फैक्टर (tan δ) और सटीक कैपेसिटेंस मापता है।

3. सुरक्षा नियम (Safety Protocols):
- संचित ऊर्जा (E = ½CV²) जानलेवा हो सकती है। कभी भी स्क्रूड्राइवर से शॉर्ट न करें; हमेशा पावर रेजिस्टर वाले डिस्चार्ज प्रोब का उपयोग करें।
- डाइइलेक्ट्रिक मेमोरी (Dielectric Absorption): डिस्चार्ज करने के बाद भी कैपेसिटर 10-20% चार्ज अपने आप दोबारा बना लेता है। इसलिए रखरखाव के दौरान टर्मिनलों को आपस में शॉर्टिंग जम्पर से बांधकर रखें।`,
    bn: `১. ক্যাপাসিটর নষ্ট হওয়ার লক্ষণ:
- উপরের অংশ ফুলে যাওয়া (Bulging): অতিরিক্ত ভোল্টেজ বা তাপে ইলেক্ট্রোলাইট ফুটে গ্যাস জমে উপরের ক্রস-ভেন্ট ফুলে ওঠে।
- ইলেক্ট্রোলাইট লিকেজ: নিচে রাবারের দিক দিয়ে আঠালো বা সাদা ক্ষারীয় কেমিক্যাল বের হওয়া।
- হাই ESR: ক্যাপাসিটরের ভেতরের তরল শুকিয়ে রোধ (ESR) অস্বাভাবিক বৃদ্ধি পাওয়া।

২. টেস্টিং পদ্ধতি:
- ESR মিটার: মাদারবোর্ড থেকে না খুলেই ক্যাপাসিটরের আসল কর্মক্ষমতা পরীক্ষা করা যায় (ভালো ক্যাপাসিটরে ESR < ১ Ω)।
- অ্যানালগ মাল্টিমিটার কিক টেস্ট: কাঁটাটি দ্রুত শূন্যের দিকে গিয়ে আস্তে আস্তে অসীমের (∞) দিকে ফিরে আসে।
- LCR মিটার: নির্ভুল ক্যাপাসিট্যান্স, কোয়ালিটি ফ্যাক্টর ও লস অ্যাঙ্গেল পরিমাপ করে।

৩. ক্যাপাসিটর নিরাপত্তা বিধি:
- সঞ্চিত শক্তি (E = ½CV²) মারাত্মক শক দিতে পারে। স্ক্রুড্রাইভার দিয়ে কখনো শর্ট করবেন না; সবসময় ডিসচার্জিং রেজিস্টর রড ব্যবহার করুন।
- ডাই-ইলেকট্রিক মেমোরি: একবার ডিসচার্জ করার পরও ডাই-ইলেকট্রিকের বৈশিষ্ট্যের কারণে ক্যাপাসিটরে আবার স্বতঃস্ফূর্তভাবে চার্জ ফিরে আসতে পারে। তাই রক্ষণাবেক্ষণের সময় সবসময় শর্টিং ওয়্যার দিয়ে টার্মিনাল জোড়া রাখতে হয়।`
  },
  formulas: [
    {
      expression: 'E_{stored} = \\frac{1}{2} \\cdot C \\cdot V^2 \\quad \\text{[Joules]}',
      description: {
        en: 'Lethal stored electrical energy calculation in Joules',
        hi: 'घातक संचित विद्युत ऊर्जा गणना सूत्र (जूल में)',
        bn: 'ক্যাপাসিটরে সঞ্চিত মারাত্মক বৈদ্যুতিক শক্তি সমীকরণ (জুল এককে)'
      }
    },
    {
      expression: '\\tan(\\delta) = \\text{ESR} \\cdot \\omega \\cdot C = \\frac{\\text{ESR}}{X_c}',
      description: {
        en: 'Dielectric dissipation factor (Loss tangent) of a capacitor',
        hi: 'कैपेसिटर का डाइइलेक्ट्रिक डिसिपेशन फैक्टर (हानि स्पर्शरेखा)',
        bn: 'ক্যাপাসিটরের ডাই-ইলেকট্রিক ডিসিপেশন ফ্যাক্টর বা লস ট্যানজেন্ট'
      }
    },
    {
      expression: 't_{safe} \\ge 5 \\cdot R_{bleed} \\cdot C',
      description: {
        en: 'Minimum required discharge duration to reach <1% residual voltage',
        hi: 'सुरक्षित डिस्चार्ज समय (कम से कम 5 टाइम कांस्टेंट)',
        bn: 'নিরাপদ অবশিষ্ট ভোল্টেজে নামিয়ে আনার জন্য ন্যূনতম ডিসচার্জ সময়'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Switch-mode power supply (SMPS) diagnostic repairs in computer monitors, gaming consoles, and TV mainboards',
      hi: 'कंप्यूटर मदरबोर्ड, टीवी एवं गेमिंग कंसोल में SMPS रिपेयरिंग',
      bn: 'কম্পিউটার মাদারবোর্ড, টিভি ও পাওয়ার সাপ্লাইয়ের ক্ষতিগ্রস্ত ক্যাপাসিটর শনাক্তকরণ ও মেরামত'
    },
    {
      en: 'Substation high-voltage power factor capacitor bank preventive maintenance, infrared thermal scanning, and safety grounding',
      hi: 'सबस्टेशनों में एचवी कैपेसिटर बैंकों का थर्मल स्कैनिंग एवं सुरक्षा ग्राउंडिंग',
      bn: 'সাবস্টেশনে হাই-ভোল্টেজ ক্যাপাসিটর ব্যাংকের রক্ষণাবেক্ষণ ও শর্টিং রড সুরক্ষা'
    },
    {
      en: 'Defibrillator and laser energy storage capacitor health verification and leakage diagnostics',
      hi: 'मेडिकल डिफाइब्रिलेटर एवं लेजर मशीनों में हाई-एनर्जी कैपेसिटर टेस्टिंग',
      bn: 'মেডিকেল ডিফিব্রিলেটর ও লেজার যন্ত্রপাতির ক্যাপাসিটর পরীক্ষা'
    }
  ],
  importantPoints: {
    en: [
      'An ESR meter is the definitive diagnostic tool for testing capacitors in-circuit; multimeters often show good capacitance on bad caps',
      'Never short high-voltage capacitors with a metal screwdriver; always use an insulated resistor probe',
      'Capacitors exhibit dielectric absorption memory and can self-recharge to dangerous voltages if left open after discharge'
    ],
    hi: [
      'सर्किट में लगे कैपेसिटर की सही स्थिति जानने के लिए ESR मीटर सबसे उत्तम उपकरण है',
      'हाई-वोल्टेज कैपेसिटर को कभी भी पेचकस से शॉर्ट न करें; हमेशा इंसुलेटेड डिस्चार्ज प्रोब का प्रयोग करें',
      'डाइइलेक्ट्रिक अवशोषण के कारण डिस्चार्ज करने के बाद भी कैपेसिटर दोबारा खतरनाक वोल्टेज तक चार्ज हो सकता है'
    ],
    bn: [
      'সার্কিটে থাকা ক্যাপাসিটর পরীক্ষা করার জন্য ESR মিটার সবচেয়ে সেরা যন্ত্র; সাধারণ মাল্টিমিটারে ক্যাপাসিট্যান্স সঠিক দেখালেও ক্যাপাসিটর নষ্ট থাকতে পারে',
      'হাই-ভোল্টেজ ক্যাপাসিটরকে কখনো মেটাল স্ক্রুড্রাইভার দিয়ে শর্ট করবেন না; সবসময় রেজিস্টর যুক্ত ডিসচার্জ প্রব ব্যবহার করুন',
      'ডাই-ইলেকট্রিক মেমোরির কারণে ডিসচার্জের কিছুক্ষণ পর ক্যাপাসিটরে পুনরায় বিপজ্জনক চার্জ ফিরে আসতে পারে'
    ]
  },
  commonMistakes: {
    en: [
      'Touching high-voltage capacitors immediately after power-down without verifying zero volts with a multimeter',
      'Assuming a capacitor is healthy simply because a multimeter shows the correct nominal capacitance, overlooking high internal ESR'
    ],
    hi: [
      'पावर बंद करते ही बिना वोल्टेज जांचे हाई-वोल्टेज कैपेसिटर को हाथ लगाना',
      'यह मान लेना कि कैपेसिटेंस मान सही दिखने पर कैपेसिटर सही है (उच्च ESR को नजरअंदाज करना)'
    ],
    bn: [
      'পাওয়ার অফ করার সাথে সাথে মাল্টিমিটার দিয়ে ভোল্টেজ না মেপেই হাত দিয়ে ধরা',
      'শুধুমাত্র ক্যাপাসিট্যান্স মান সঠিক দেখেই ক্যাপাসিটর ভালো বলে ধরে নেওয়া এবং ভেতরের অতিরিক্ত ESR কে উপেক্ষা করা'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-20-1',
      question: {
        en: 'A technician tests a suspicious 1000 μF, 25 V electrolytic capacitor removed from a dead television SMPS power supply. A standard multimeter reads 980 μF (within 5%), but the TV fails to start. Testing with an ESR meter reveals an ESR of 22 Ω (normal is <0.08 Ω). What is the condition of the capacitor?',
        hi: 'एक तकनीशियन टीवी पावर सप्लाई के 1000 μF, 25 V कैपेसिटर की जांच करता है। मल्टीमीटर 980 μF दिखाता है, लेकिन ESR मीटर 22 Ω (सामान्य < 0.08 Ω) दिखाता है। कैपेसिटर की स्थिति क्या है?',
        bn: 'একটি নষ্ট টিভি পাওয়ার সাপ্লাই থেকে ১০০০ μF, ২৫ V ক্যাপাসিটর খুলে পরীক্ষা করা হলো। সাধারণ মিটারে ৯৮০ μF দেখাচ্ছে, কিন্তু ESR মিটারে ২২ Ω রোধ (স্বাভাবিক মান < ০.০৮ Ω) দেখাচ্ছে। ক্যাপাসিটরটির অবস্থা কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'The capacitor is in excellent working condition', hi: 'कैपेसिटर बिल्कुल सही स्थिति में है', bn: 'ক্যাপাসিটরটি একদম ভালো অবস্থায় আছে' } },
        { id: 'opt-b', text: { en: 'The capacitor is defective due to dried-out electrolyte causing high ESR, and must be replaced', hi: 'कैपेसिटर का इलेक्ट्रोलाइट सूख चुका है जिससे ESR बहुत बढ़ गया है, इसे बदलना आवश्यक है', bn: 'ইলেক্ট্রোলাইট শুকিয়ে যাওয়ার কারণে ক্যাপাসিটরের ESR অস্বাভাবিক বেড়ে গেছে, এটি নষ্ট এবং পরিবর্তন করতে হবে' } },
        { id: 'opt-c', text: { en: 'The capacitor has short-circuited completely', hi: 'कैपेसिटर पूरी तरह शॉर्ट हो चुका है', bn: 'ক্যাপাসিটরটি সম্পূর্ণ শর্ট সার্কিট হয়ে গেছে' } },
        { id: 'opt-d', text: { en: 'The capacitor has open-circuited', hi: 'कैपेसिटर ओपन-सर्किट हो चुका है', bn: 'ক্যাপাসিটরটি ওপেন সার্কিট হয়ে গেছে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'As electrolytic capacitors age and dry out, their ESR skyrockets while capacitance may remain roughly normal. The high ESR prevents ripple filtering and causes large voltage drops under load, crashing the SMPS.',
        hi: 'इलेक्ट्रोलाइट सूखने से ESR बहुत बढ़ जाता है जिससे रिपल वोल्टेज फिल्टर नहीं हो पाता और टीवी चालू नहीं हो पाता। इसे बदलना होगा।',
        bn: 'ইলেক্ট্রোলাইট শুকিয়ে গেলে ক্যাপাসিট্যান্স মান আপাতদৃষ্টিতে ঠিক থাকলেও অভ্যন্তরীণ ESR বহুগুণ বেড়ে যায়, ফলে পাওয়ার সাপ্লাই কাজ করতে ব্যর্থ হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-20-1',
      question: {
        en: 'A high-voltage energy storage capacitor of 500 μF is charged to 1000 V DC in an industrial pulse laser system. Calculate: (a) Total stored energy in Joules, (b) The value of discharge resistor needed to discharge the capacitor to under 1% safe voltage (under 10 V) in exactly 5 seconds, (c) Peak discharge power dissipated in the resistor at the initial moment of connection.',
        hi: '1000 V DC पर चार्ज किए गए 500 μF कैपेसिटर हेतु ज्ञात करें: (a) संचित ऊर्जा (जूल), (b) 5 सेकंड में <1% सुरक्षित वोल्टेज हेतु आवश्यक डिस्चार्ज प्रतिरोध R, (c) डिस्चार्ज के प्रारंभिक क्षण में अधिकतम पीक पावर।',
        bn: 'একটি শিল্প লেজার সিস্টেমে ৫০০ μF ক্যাপাসিটর ১০০০ V DC তে চার্জ করা আছে। নির্ণয় করুন: (a) মোট সঞ্চিত শক্তি (জুল), (b) ঠিক ৫ সেকেন্ডে নিরাপদ ভোল্টেজে (<১%) নামিয়ে আনতে প্রয়োজনীয় ডিসচার্জ রেজিস্টর R এর মান, (c) সংযোগের প্রাথমিক মুহূর্তে রেজিস্টরে সর্বোচ্চ পাওয়ার ক্ষয়।'
      },
      hint: {
        en: 'Energy E = ½ · C · V². To reach <1% (e^-5 ≈ 0.0067), time t = 5 · τ = 5 · R · C = 5 seconds. Peak power P_peak = V² / R.',
        hi: 'E = ½ × 500×10⁻⁶ × 1000²। t = 5 × R × C = 5 सेकंड => R = 1 / C। P_peak = 1000² / R।',
        bn: 'E = ½ × ৫০০×১০⁻⁶ × ১০০০²। t = ৫ × R × C = ৫ সেকেন্ড => R = ১ / C। P_peak = ১০০০² / R।'
      },
      answerKey: {
        en: '(a) E = ½ × (500×10⁻⁶ F) × (1000 V)² = ½ × 0.0005 × 1,000,000 = 250 Joules (a lethal energy level!). (b) For 5τ = 5 seconds: 5 · R · C = 5  ===>  R · (500×10⁻⁶) = 1  ===>  R = 1 / 0.0005 = 2,000 Ω (2 kΩ, power rated). (c) Peak instantaneous power = V² / R = (1000)² / 2000 = 1,000,000 / 2000 = 500 Watts.',
        hi: '(a) E = 250 जूल (घातक स्तर), (b) R = 2,000 Ω (2 kΩ), (c) प्रारंभिक पीक पावर = 500 वाट।',
        bn: '(a) E = ২৫০ জুল (মারাত্মক প্রাণঘাতী শক্তি), (b) R = ২,০০০ Ω (২ kΩ), (c) প্রাথমিক পিক পাওয়ার = ৫০০ ওয়াট।'
      }
    }
  ]
};
