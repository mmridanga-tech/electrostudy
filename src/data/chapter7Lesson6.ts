import { Lesson } from '../types';

export const LESSON_CAPACITORS_IN_SERIES: Lesson = {
  id: 'lsn-ch7-capacitors-in-series',
  topicId: 'ch7-capacitors-in-series',
  chapterId: 'ch-capacitors',
  order: 6,
  title: {
    en: 'Capacitors in Series Connection & Voltage Division',
    hi: 'श्रेणी क्रम में संधारित्र एवं वोल्टेज विभाजन',
    bn: 'সিরিজে ক্যাপাসিটর সংযোগ ও ভোল্টেজ বিভাজন'
  },
  description: {
    en: 'Equivalent capacitance for series combinations (1/C_eq = 1/C1 + 1/C2 + ...), identical charge on each capacitor, and inverse voltage divider rule.',
    hi: 'श्रेणी संयोजन हेतु तुल्य धारिता सूत्र (1/C_eq = 1/C1 + 1/C2 + ...), समान आवेश एवं व्युत्क्रम वोल्टेज विभाजन नियम।',
    bn: 'সিরিজ সংযোগের তুল্য ক্যাপাসিট্যান্স (1/C_eq = 1/C1 + 1/C2 + ...), সমান আধান ও বিপরীতমুখী ভোল্টেজ বিভাজন নীতি।'
  },
  easyExplanation: {
    en: 'Connecting capacitors in series is like increasing the distance between the two end plates. The total capacitance decreases, but the combined string can withstand a much higher overall working voltage.',
    hi: 'कैपेसिटरों को श्रेणी में जोड़ना प्लेटों के बीच की दूरी बढ़ाने जैसा है। कुल धारिता कम हो जाती है, लेकिन यह संयोजन बहुत अधिक वोल्टेज सहन कर सकता है।',
    bn: 'ক্যাপাসিটরকে সিরিজে যুক্ত করা মানে পাতদ্বয়ের মধ্যবর্তী দূরত্ব বাড়ানোর মতো। এর ফলে মোট ক্যাপাসিট্যান্স হ্রাস পায়, কিন্তু সমগ্র সার্কিটটি অনেক বেশি উচ্চ ভোল্টেজ সহ্য করতে পারে।'
  },
  detailedExplanation: {
    en: `1. Series Connection Rules:
When n capacitors are connected in series end-to-end across a DC voltage source V:
- Charge Equality: The exact same charge Q accumulates on every capacitor plate due to electrostatic induction:
Q_total = Q1 = Q2 = Q3 = ... = Qn = Q
- Voltage Division: The total applied voltage V is the sum of the individual voltage drops across each capacitor:
V = V1 + V2 + V3 + ... + Vn

2. Derivation of Equivalent Series Capacitance (C_eq):
Since V = Q / C:
V = (Q / C1) + (Q / C2) + (Q / C3) + ... + (Q / Cn)
(Q / C_eq) = Q · [ (1/C1) + (1/C2) + (1/C3) + ... + (1/Cn) ]
Dividing by Q yields the fundamental reciprocal law:
(1 / C_eq) = (1 / C1) + (1 / C2) + (1 / C3) + ... + (1 / Cn)

For two capacitors in series:
C_eq = (C1 · C2) / (C1 + C2) (Product over Sum)

For n identical capacitors each of capacitance C:
C_eq = C / n

3. Inverse Voltage Divider Rule:
The voltage drops are INVERSELY proportional to capacitance values:
V1 = V · [ C2 / (C1 + C2) ]
V2 = V · [ C1 / (C1 + C2) ]
Important Note: The SMALLEST capacitor in a series chain has the LARGEST voltage drop across it!

4. Voltage Rating of Series Chain:
Total safe working voltage V_total = V_rated1 + V_rated2 (assuming proper voltage-balancing resistors are connected).`,
    hi: `1. श्रेणी संयोजन के नियम:
- समान आवेश: प्रत्येक संधारित्र पर समान आवेश Q संचित होता है (Q1 = Q2 = Q).
- वोल्टेज योग: कुल वोल्टेज अलग-अलग वोल्टेज ड्रॉप का योग होता है (V = V1 + V2).

2. तुल्य धारिता (C_eq):
1 / C_eq = 1/C1 + 1/C2 + ... + 1/Cn
दो संधारित्रों के लिए: C_eq = (C1 · C2) / (C1 + C2)
समान धारिता C के n संधारित्रों के लिए: C_eq = C / n

3. व्युत्क्रम वोल्टेज विभाजन नियम:
V1 = V · [ C2 / (C1 + C2) ]
V2 = V · [ C1 / (C1 + C2) ]
नोट: श्रेणी में सबसे छोटे कैपेसिटर पर सबसे अधिक वोल्टेज ड्रॉप होता है!`,
    bn: `১. সিরিজ সংযোগের মূল সূত্র:
- সমান আধান: স্থিরতড়িৎ আবেশের কারণে প্রতিটি ক্যাপাসিটরে একই আধান জমা হয় (Q1 = Q2 = Q)।
- ভোল্টেজের সমষ্টি: মোট ভোল্টেজ প্রতিটি ক্যাপাসিটরের ভোল্টেজ ড্রপের যোগফল (V = V1 + V2)।

২. তুল্য ক্যাপাসিট্যান্স (C_eq):
১ / C_eq = ১/C1 + ১/C2 + ... + ১/Cn
দুটি ক্যাপাসিটরের জন্য: C_eq = (C1 · C2) / (C1 + C2)
n সংখ্যক সমমানের (C) ক্যাপাসিটরের জন্য: C_eq = C / n

৩. বিপরীতমুখী ভোল্টেজ বিভাজন নীতি:
V1 = V · [ C2 / (C1 + C2) ]
V2 = V · [ C1 / (C1 + C2) ]
বিশেষ সতর্কতা: সিরিজে সবচেয়ে ছোট ক্যাপাসিটরের আড়াআড়িতে সবচেয়ে বেশি ভোল্টেজ ড্রপ হয়!`
  },
  formulas: [
    {
      expression: '1 / C_eq = 1/C1 + 1/C2 + ... + 1/Cn',
      description: {
        en: 'Reciprocal formula for series capacitors',
        hi: 'श्रेणी क्रम में संधारित्रों का व्युत्क्रम सूत्र',
        bn: 'সিরিজে ক্যাপাসিটরের বিপরীতানুপাতিক সূত্র'
      }
    },
    {
      expression: 'C_eq = (C1 · C2) / (C1 + C2)',
      description: {
        en: 'Product over sum for two series capacitors',
        hi: 'दो श्रेणी संधारित्रों के लिए गुणनफल/योग सूत्र',
        bn: 'দুটি সিরিজ ক্যাপাসিটরের জন্য গুণফল/যোগফল সূত্র'
      }
    },
    {
      expression: 'V1 = V · [ C2 / (C1 + C2) ]',
      description: {
        en: 'Capacitive voltage divider formula for C1',
        hi: 'C1 पर वोल्टेज ड्रॉप का विभाजन सूत्र',
        bn: 'C1 এর আড়াআড়িতে ক্যাপাসিটিভ ভোল্টেজ ডিভাইডার সূত্র'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'High-voltage DC power supply voltage doubling and smoothing ladders (Cockcroft-Walton)',
      hi: 'हाई-वोल्टेज डीसी पावर सप्लाई में वोल्टेज मल्टीप्लायर लेडर',
      bn: 'উচ্চ ভোল্টেজ ডিসি জেনারেটরে ভোল্টেজ মাল্টিপ্লায়ার ল্যাডার সার্কিট'
    },
    {
      en: 'Capacitive Voltage Transformers (CVT) used in high-voltage substations (132kV/400kV) for metering',
      hi: '132kV/400kV सबस्टेशन में वोल्टेज मापन हेतु कैपेसिटिव वोल्टेज ट्रांसफॉर्मर (CVT)',
      bn: '১৩২kV/৪০০kV গ্রিড সাবস্টেশনে ভোল্টেজ পরিমাপের জন্য ক্যাপাসিটিভ ভোল্টেজ ট্রান্সফরমার (CVT)'
    }
  ],
  importantPoints: {
    en: [
      'Equivalent series capacitance is ALWAYS LESS than the smallest individual capacitor in the string',
      'The smallest capacitance experiences the greatest voltage stress and is most prone to dielectric breakdown',
      'To prevent unequal voltage sharing due to leakage currents, high-value equalizing resistors are wired in parallel'
    ],
    hi: [
      'तुल्य श्रेणी धारिता हमेशा श्रृंखला के सबसे छोटे कैपेसिटर से भी कम होती है',
      'सबसे छोटा कैपेसिटर सबसे अधिक वोल्टेज तनाव झेलता है और उसके खराब होने का खतरा सबसे ज्यादा होता है',
      'लीकेज करंट के कारण वोल्टेज असंतुलन रोकने के लिए समानांतर में बैलेंसिंग प्रतिरोधक जोड़े जाते हैं'
    ],
    bn: [
      'সিরিজ সংযোগের তুল্য ক্যাপাসিট্যান্স সর্বদা সবচেয়ে ক্ষুদ্রতম ক্যাপাসিটরের চেয়েও কম হয়',
      'সবচেয়ে কম মানের ক্যাপাসিটরটি সবচেয়ে বেশি ভোল্টেজ চাপ সহ্য করে এবং নষ্ট হওয়ার ঝুঁকিতে থাকে',
      'লিকেজ কারেন্টের কারণে ভোল্টেজের ভারসাম্যহীনতা রোধে ক্যাপাসিটরের সাথে ব্যালেন্সিং রেজিস্টর সমান্তরালে যুক্ত করা হয়'
    ]
  },
  commonMistakes: {
    en: [
      'Applying resistor series formula (C1 + C2) to capacitors; series capacitors add as reciprocals!',
      'Assuming the larger capacitor drops more voltage; in series, the smaller capacitor drops the higher voltage'
    ],
    hi: [
      'प्रतिरोधक वाले श्रेणी सूत्र (C1 + C2) को कैपेसिटर में लगाना; कैपेसिटर श्रेणी में व्युत्क्रम जुड़ते हैं',
      'यह सोचना कि बड़े कैपेसिटर पर अधिक वोल्टेज आएगा; श्रेणी में छोटे कैपेसिटर पर अधिक वोल्टेज आता है'
    ],
    bn: [
      'রেজিস্টরের মতো সরাসরি (C1 + C2) যোগ করা; ক্যাপাসিটর সিরিজে বিপরীতানুপাতিক নিয়মে যুক্ত হয়',
      'মনে করা বড় ক্যাপাসিটরে বেশি ভোল্টেজ ড্রপ হবে; মূলত ছোট ক্যাপাসিটরে বেশি ভোল্টেজ ড্রপ হয়'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-6-1',
      question: {
        en: 'Two capacitors of 3 μF and 6 μF are connected in series across a 180 V DC supply. The voltage drop across the 3 μF capacitor is:',
        hi: '3 μF और 6 μF के दो संधारित्र 180 V DC स्रोत के साथ श्रेणी में जुड़े हैं। 3 μF संधारित्र पर वोल्टेज ड्रॉप होगा:',
        bn: '3 μF ও 6 μF এর দুটি ক্যাপাসিটর 180 V ডিসি লাইনে সিরিজে যুক্ত। 3 μF ক্যাপাসিটরের আড়াআড়িতে ভোল্টেজ ড্রপ কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '60 V', hi: '60 V', bn: '60 V' } },
        { id: 'opt-b', text: { en: '120 V', hi: '120 V', bn: '120 V' } },
        { id: 'opt-c', text: { en: '90 V', hi: '90 V', bn: '90 V' } },
        { id: 'opt-d', text: { en: '180 V', hi: '180 V', bn: '180 V' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'V1 = V · [ C2 / (C1 + C2) ] = 180 · [ 6 / (3 + 6) ] = 180 · (6 / 9) = 120 V.',
        hi: 'V_3μF = 180 × [ 6 / (3 + 6) ] = 180 × (6/9) = 120 V।',
        bn: 'V_3μF = 180 × [ 6 / (3 + 6) ] = 180 × (6/9) = 120 V।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-6-1',
      question: {
        en: 'Three capacitors of 10 μF, 20 μF, and 30 μF are connected in series. Find the equivalent capacitance of the combination.',
        hi: '10 μF, 20 μF और 30 μF के तीन संधारित्र श्रेणी में जुड़े हैं। संयोजन की तुल्य धारिता ज्ञात करें।',
        bn: '10 μF, 20 μF এবং 30 μF এর তিনটি ক্যাপাসিটর সিরিজে যুক্ত। সার্কিটের তুল্য ক্যাপাসিট্যান্স কত?'
      },
      hint: {
        en: 'Use 1/C_eq = 1/10 + 1/20 + 1/30 = (6 + 3 + 2)/60.',
        hi: '1/C_eq = 1/10 + 1/20 + 1/30 = 11/60 सूत्र का उपयोग करें।',
        bn: '1/C_eq = 1/10 + 1/20 + 1/30 = 11/60 সমীকরণ সমাধান করুন।'
      },
      answerKey: {
        en: '1/C_eq = 11/60 μF⁻¹ => C_eq = 60 / 11 ≈ 5.455 μF.',
        hi: 'C_eq = 60 / 11 = 5.455 μF.',
        bn: 'C_eq = ৬০ / ১১ ≈ 5.455 μF।'
      }
    }
  ]
};
