import { Lesson } from '../types';

export const LESSON_CAPACITOR_RATINGS_CODES: Lesson = {
  id: 'lsn-ch7-capacitor-ratings-codes',
  topicId: 'ch7-capacitor-ratings-codes',
  chapterId: 'ch-capacitors',
  order: 12,
  title: {
    en: 'Capacitor Ratings, Voltage Limits & EIA Color/Numerical Codes',
    hi: 'कैपेसिटर रेटिंग, वोल्टेज सीमाएं एवं EIA 3-अंकीय कोड प्रणाली',
    bn: 'ক্যাপাসিটর রেটিং, ভোল্টেজ লিমিট ও ৩-সংখ্যার কোড পদ্ধতি'
  },
  description: {
    en: '3-digit EIA numerical code decoding (e.g., 104 = 100nF), tolerance letter codes (J, K, M), working voltage (WVDC / VAC), ripple current rating, and temperature coefficients (C0G/NP0, X7R, Y5V).',
    hi: '3-अंकीय EIA कोड (उदा. 104 = 100nF), टॉलरेंस कोड (J, K, M), वर्किंग वोल्टेज (WVDC), रिपल करंट एवं तापमान गुणांक।',
    bn: '৩-সংখ্যার EIA কোড পাঠোদ্ধার (যেমন ১০৪ = ১০০nF), টলারেন্স লেটার কোড (J, K, M), কার্যকরী ভোল্টেজ রেটিং ও তাপমাত্রা সহগ।'
  },
  easyExplanation: {
    en: 'Tiny ceramic and film capacitors are too small to print long numbers on. Instead, manufacturers print a 3-digit shorthand code like "104" where the first two digits are numbers and the third digit is the number of zeroes in picofarads (10 + four zeroes = 100,000 pF = 100 nF = 0.1 μF).',
    hi: 'छोटे कैपेसिटर पर पूरा मान लिखना संभव नहीं होता। इसलिए "104" जैसा 3-अंकीय कोड लिखा जाता है, जहां पहले 2 अंक संख्या और तीसरा अंक पिकोफैराड में शून्यों की संख्या दर्शाता है (104 = 100,000 pF = 0.1 μF)।',
    bn: 'ক্ষুদ্র সিরামিক ক্যাপাসিটরে সরাসরি মান লেখার জায়গা না থাকায় ৩ অঙ্কের কোড (যেমন "১০৪") লেখা হয়। প্রথম দুটি সংখ্যা মান নির্দেশ করে এবং তৃতীয় সংখ্যাটি পিকোফ্যারাড এককে শূন্যের সংখ্যা নির্দেশ করে (10 + চারটি শূন্য = 100,000 pF = 0.1 μF)।'
  },
  detailedExplanation: {
    en: `1. The 3-Digit EIA Marking System (Standard for Ceramic & Film):
In the standard 3-digit system:
- 1st digit: First significant digit
- 2nd digit: Second significant digit
- 3rd digit: Multiplier (power of 10 in PICOFARADS, 10^n pF)

Common Decoding Examples:
- "101" = 10 × 10¹ pF = 100 pF (0.1 nF)
- "102" = 10 × 10² pF = 1,000 pF = 1 nF = 0.001 μF
- "103" = 10 × 10³ pF = 10,000 pF = 10 nF = 0.01 μF
- "104" = 10 × 10⁴ pF = 100,000 pF = 100 nF = 0.1 μF (Most common decoupling value in digital ICs!)
- "105" = 10 × 10⁵ pF = 1,000,000 pF = 1,000 nF = 1.0 μF
- "473" = 47 × 10³ pF = 47,000 pF = 47 nF = 0.047 μF
- "224" = 22 × 10⁴ pF = 220,000 pF = 220 nF = 0.22 μF

If the third digit is '0':
- "470" = 47 × 10⁰ pF = 47 pF.
Decimal notation:
- "4R7" = 4.7 pF ('R' represents decimal point in pF).

2. Tolerance Letter Codes (Appended after 3 digits, e.g., 104K):
- B: ±0.1 pF (precision)
- C: ±0.25 pF
- D: ±0.5 pF
- F: ±1%
- G: ±2%
- J: ±5% (Gold standard for precision film/C0G)
- K: ±10% (Standard industrial film / X7R)
- M: ±20% (Standard electrolytic / ceramic)
- Z: +80% / -20% (Low-cost bypass Y5V ceramics)

3. Key Nameplate Specifications:
- Working Voltage DC (WVDC): Maximum continuous DC voltage safe for operation at 85°C.
- AC Voltage Rating (VAC): Safe continuous RMS AC voltage (usually MUCH lower than DC rating due to dielectric heating).
- Ripple Current Rating (I_rms): Maximum continuous AC ripple current an electrolytic can dissipate without internal electrolyte boiling.
- Temperature Dielectric Classes:
  * C0G / NP0: Ultra-stable (0 ± 30 ppm/°C drift, -55°C to +125°C).
  * X7R: High capacitance density (±15% capacitance variation over -55°C to +125°C).
  * Y5V: Low cost, poor stability (+22% to -82% capacitance swing over -30°C to +85°C).`,
    hi: `1. 3-अंकीय EIA कोडिंग प्रणाली:
- पहला व दूसरा अंक: मान
- तीसरा अंक: 10 की घात (पिकोफैराड में)
उदाहरण:
- 102 = 1,000 pF = 1 nF
- 103 = 10,000 pF = 10 nF
- 104 = 100,000 pF = 100 nF = 0.1 μF
- 473 = 47,000 pF = 47 nF

2. टॉलरेंस कोड (Tolerance Codes):
- J = ±5%
- K = ±10%
- M = ±20%
- Z = +80% / -20%

3. महत्वपूर्ण रेटिंग:
- WVDC: सुरक्षित अधिकतम DC वोल्टेज।
- C0G/NP0: तापमान स्थिर।
- X7R: ±15% मध्यम विचलन।`,
    bn: `১. ৩-সংখ্যার EIA কোডিং পদ্ধতি:
- ১ম ও ২য় সংখ্যা: মূল মান
- ৩য় সংখ্যা: পিকোফ্যারাডে (pF) ১০ এর গুণক বা শূন্যের সংখ্যা
উদাহরণ:
- ১০২ = ১,০০০ pF = ১ nF
- ১০৩ = ১০,০০০ pF = ১০ nF
- ১০৪ = ১০০,০০০ pF = ১০০ nF = ০.১ μF
- ৪৭৩ = ৪৭,০০০ pF = ৪৭ nF

২. টলারেন্স কোড:
- J = ±৫% (নিখুঁত)
- K = ±১০% (সাধারণ শিল্পমান)
- M = ±২০% (ইলেক্ট্রোলাইটিক)
- Z = +৮০% / -২০%

৩. প্রয়োজনীয় রেটিং:
- WVDC: সর্বোচ্চ নিরাপদ ডিসি ভোল্টেজ।
- C0G/NP0: তাপমাত্রার সাথে মান পরিবর্তন হয় না।
- X7R: ±১৫% সহনীয় পরিবর্তন।`
  },
  formulas: [
    {
      expression: 'Capacitance = (Digit 1 & 2) × 10^(Digit 3) [pF]',
      description: {
        en: 'General EIA 3-digit capacitor code decoding formula in picofarads',
        hi: 'पिकोफैराड में 3-अंकीय कोड डिकोडिंग सूत्र',
        bn: 'পিকোফ্যারাড এককে ৩-সংখ্যার ক্যাপাসিটর কোড ডিকোড সূত্র'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Reading SMD component reels and through-hole capacitors during PCB assembly and quality testing',
      hi: 'पीसीबी असेंबली और टेस्टिंग के दौरान एसएमडी कैपेसिटर कोड पढ़ना',
      bn: 'পিসিবি সার্কিট বোর্ড তৈরি ও টেস্টিংয়ের সময় ক্যাপাসিটর কোড যাচাই'
    },
    {
      en: 'Selecting X7R vs C0G capacitors for timing-critical oscillators vs generic DC power supply filtering',
      hi: 'सटीक टाइमिंग ऑसिलेटर हेतु C0G एवं पावर फिल्टर हेतु X7R कैपेसिटर चुनना',
      bn: 'টাইমিং অসিলেটরে C0G এবং সাধারণ ফিল্টারে X7R ক্যাপাসিটর নির্বাচন'
    }
  ],
  importantPoints: {
    en: [
      '"104K" indicates 100,000 pF (0.1 μF) with ±10% tolerance',
      'Always operate electrolytic capacitors with at least a 20% to 30% voltage derating margin below WVDC for longevity',
      'C0G / NP0 ceramics have near-zero temperature drift and no DC bias voltage loss'
    ],
    hi: [
      '"104K" का अर्थ 100 nF (0.1 μF) तथा ±10% टॉलरेंस है',
      'लंबी उम्र के लिए इलेक्ट्रोलाइटिक कैपेसिटर को हमेशा उनके रेटेड वोल्टेज से 20-30% कम पर चलाएं',
      'C0G/NP0 में तापमान के साथ मान नहीं बदलता'
    ],
    bn: [
      '"104K" মানে ১০০ nF (০.১ μF) এবং ±১০% টলারেন্স',
      'দীর্ঘ স্থায়িত্বের জন্য ইলেক্ট্রোলাইটিক ক্যাপাসিটরকে এর সর্বোচ্চ রেটেড ভোল্টেজের চেয়ে ২০-৩০% কম ভোল্টেজে চালানো উচিত',
      'C0G/NP0 ক্যাপাসিটরে তাপমাত্রার কারণে ক্যাপাসিট্যান্স পরিবর্তন হয় না'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing "104" (100 nF) with 104 pF; the last digit is a multiplier, not a direct unit!',
      'Ignoring capacitor AC RMS voltage derating when using DC-rated capacitors on AC lines'
    ],
    hi: [
      '"104" को 104 pF समझना; तीसरा अंक शून्य की संख्या (घात) है, सीधा मान नहीं',
      'एसी लाइन में डीसी रेटेड कैपेसिटर लगाते समय एसी वोल्टेज डीरेटिंग की उपेक्षा करना'
    ],
    bn: [
      '"১০৪" কে ১০৪ pF মনে করা; শেষের ৪ হলো ৪টি শূন্য (100,000 pF = 0.1 μF)',
      'এসি সার্কিটে ব্যবহারের সময় ডিসি রেটেড ভোল্টেজের চেয়ে এসি সীমা অনেক কম হয় তা ভুলে যাওয়া'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-12-1',
      question: {
        en: 'A ceramic disc capacitor is marked with the code "223J". Its capacitance and tolerance are:',
        hi: 'एक सेरामिक डिस्क कैपेसिटर पर "223J" कोड अंकित है। इसकी धारिता एवं टॉलरेंस है:',
        bn: 'একটি সিরামিক ডিস্ক ক্যাপাসিটরে "223J" লেখা আছে। এর ক্যাপাসিট্যান্স ও টলারেন্স কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '223 pF, ±5%', hi: '223 pF, ±5%', bn: '২২৩ pF, ±৫%' } },
        { id: 'opt-b', text: { en: '22 nF (0.022 μF), ±5%', hi: '22 nF (0.022 μF), ±5%', bn: '২২ nF (০.০২২ μF), ±৫%' } },
        { id: 'opt-c', text: { en: '2.2 nF, ±10%', hi: '2.2 nF, ±10%', bn: '২.২ nF, ±১০%' } },
        { id: 'opt-d', text: { en: '220 nF, ±20%', hi: '220 nF, ±20%', bn: '২২০ nF, ±২০%' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: '"223" = 22 × 10³ pF = 22,000 pF = 22 nF = 0.022 μF. The letter "J" represents ±5% tolerance.',
        hi: '"223" = 22 × 1000 pF = 22 nF = 0.022 μF। अक्षर "J" का अर्थ ±5% टॉलरेंस है।',
        bn: '"২২৩" = ২২ × ১০³ pF = ২২,০০০ pF = ২২ nF = ০.০২২ μF। এবং "J" অক্ষরটি ±৫% টলারেন্স নির্দেশ করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-12-1',
      question: {
        en: 'Decode the following capacitor markings into nano-farads (nF) and micro-farads (μF): (a) 472K, (b) 105M, (c) 333J.',
        hi: 'निम्नलिखित कैपेसिटर कोड को nF और μF में बदलें: (a) 472K, (b) 105M, (c) 333J।',
        bn: 'নিচের ক্যাপাসিটর কোডগুলোকে nF এবং μF এ রূপান্তর করুন: (a) 472K, (b) 105M, (c) 333J।'
      },
      hint: {
        en: 'Use Digit 1 & 2 × 10^(Digit 3) in pF, then divide by 1,000 for nF and 1,000,000 for μF.',
        hi: 'pF मान निकालें, फिर 1,000 से भाग देकर nF और 1,000,000 से भाग देकर μF निकालें।',
        bn: 'প্রথমে pF মান বের করুন, এরপর ১০০০ দিয়ে ভাগ করে nF এবং ১০,০০,০০০ দিয়ে ভাগ করে μF পান।'
      },
      answerKey: {
        en: '(a) 472K = 47 × 10² pF = 4,700 pF = 4.7 nF = 0.0047 μF (±10%). (b) 105M = 10 × 10⁵ pF = 1,000,000 pF = 1,000 nF = 1.0 μF (±20%). (c) 333J = 33 × 10³ pF = 33,000 pF = 33 nF = 0.033 μF (±5%).',
        hi: '(a) 4.7 nF (0.0047 μF), ±10%. (b) 1.0 μF (1000 nF), ±20%. (c) 33 nF (0.033 μF), ±5%.',
        bn: '(a) ৪.৭ nF (০.০০৪৭ μF), ±১০%। (b) ১.০ μF (১০০০ nF), ±২০%। (c) ৩৩ nF (০.০৩৩ μF), ±৫%।'
      }
    }
  ]
};
