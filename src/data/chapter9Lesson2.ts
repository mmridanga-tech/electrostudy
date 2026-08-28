import { Lesson } from '../types';

export const LESSON_MMF_RELUCTANCE_PERMEABILITY: Lesson = {
  id: 'lsn-ch9-mmf-reluctance-permeability',
  topicId: 'tp-mmf',
  chapterId: 'ch-magnetic-circuits',
  order: 3,
  title: {
    en: 'MMF, Reluctance, Permeance & Magnetic Ohm’s Law',
    hi: 'एमएमएफ (MMF), रिलक्टेंस, पर्मिएंस एवं चुंबकीय ओम का नियम',
    bn: 'এমএমএফ (MMF), রিলাকট্যান্স, পারমিয়েন্স ও চৌম্বক ওহমের সূত্র'
  },
  description: {
    en: 'Magnetomotive Force (MMF = N·I in Ampere-turns), Magnetic Reluctance (S = l / (µ·A)), Magnetic Ohm’s Law (MMF = Φ · S), and comparison with electric circuits.',
    hi: 'चुंबकीय वाहक बल (MMF = N·I एम्पीयर-टर्न), चुंबकीय रिलक्टेंस (S = l / (µ·A)), चुंबकीय ओम का नियम (MMF = Φ · S) एवं विद्युत परिपथ से तुलना।',
    bn: 'ম্যাগনেটোমোটিভ ফোর্স (MMF = N·I), চৌম্বক রিলাকট্যান্স (S = l / (µ·A)), চৌম্বক ওহমের সূত্র (MMF = Φ · S) এবং বৈদ্যুতিক সার্কিটের সাথে তুলনা।'
  },
  easyExplanation: {
    en: 'In an electric circuit, Voltage (EMF) pushes Current (I) through Resistance (R). In a magnetic circuit, Magnetomotive Force (MMF = N·I) pushes Magnetic Flux (Φ) through Reluctance (S). The formula is identical: MMF = Φ × S (Magnetic Ohm\'s Law)!',
    hi: 'विद्युत परिपथ में वोल्टेज (EMF) प्रतिरोध (R) के विरुद्ध धारा (I) चलाता है। चुंबकीय परिपथ में MMF (N·I) रिलक्टेंस (S) के विरुद्ध चुंबकीय फ्लक्स (Φ) प्रवाहित करता है। यह बिल्कुल ओम के नियम जैसा है: MMF = Φ × S!',
    bn: 'বৈদ্যুতিক সার্কিটে ভোল্টেজ (EMF) যেমন রোধের (R) বিপরীতে কারেন্ট (I) চালায়, ঠিক তেমনি চৌম্বক সার্কিটে ম্যাগনেটোমোটিভ ফোর্স (MMF = N·I) রিলাকট্যান্সের (S) বিপরীতে চৌম্বক ফ্লাক্স (Φ) তৈরি করে। এটি চুম্বকীয় ওহমের সূত্র: MMF = Φ × S!'
  },
  detailedExplanation: {
    en: `1. Magnetomotive Force (MMF or F):
- The driving magnetic pressure created by an electric current passing through a multi-turn coil.
- Formula: MMF = N · I
  (where N = number of turns of the coil, I = current in Amperes).
- SI Unit: Ampere-turns (AT) or simply Ampere (A).

2. Magnetic Reluctance (S or R_m):
- The opposition offered by a magnetic material or path to the establishment of magnetic flux.
- Formula: S = l / (µ · A) = l / (µ_0 · µ_r · A)
  (where l = mean length of magnetic path in meters, A = cross-sectional area in m², µ = absolute permeability = µ_0 · µ_r).
- SI Unit: Ampere-turns per Weber (AT/Wb) or Henry⁻¹ (1/H).

3. Permeance (Λ or P):
- The reciprocal of reluctance; measures the ease with which magnetic flux passes.
- Formula: Λ = 1 / S = (µ · A) / l
- SI Unit: Henry (H) or Weber per Ampere-turn (Wb/AT).

4. Magnetic Ohm’s Law (Hopkinson's Law):
- Φ = MMF / S   <=>   MMF = Φ · S
- Compare with Ohm's Law in Electricity: I = EMF / R   <=>   V = I · R.

5. Solved Practical Problem:
A toroidal iron ring has a mean circumference of 0.5 m and a cross-sectional area of 10 cm² (0.001 m²). Relative permeability µ_r = 1000. It is wound with 500 turns carrying a current of 2 A.
- Step 1: MMF = N · I = 500 × 2 = 1000 AT.
- Step 2: Reluctance S = l / (µ_0 · µ_r · A)
  S = 0.5 / (4π × 10^-7 × 1000 × 0.001) = 0.5 / (1.2566 × 10^-6) = 397,887 AT/Wb.
- Step 3: Magnetic Flux Φ = MMF / S = 1000 / 397,887 = 0.00251 Wb = 2.51 mWb.
- Step 4: Flux Density B = Φ / A = 0.00251 / 0.001 = 2.51 Tesla.`,
    hi: `1. चुंबकीय वाहक बल (MMF):
- सूत्र: MMF = N × I (एम्पीयर-टर्न, AT)।
- चुंबकीय फ्लक्स उत्पन्न करने वाला बल।

2. रिलक्टेंस (S):
- सूत्र: S = l / (µ₀ × µᵣ × A) (AT/Wb या H⁻¹)।
- फ्लक्स के मार्ग में चुंबकीय विरोध।

3. चुंबकीय ओम का नियम (हॉपकिंसन का नियम):
- Φ = MMF / S या MMF = Φ × S।`,
    bn: `১. ম্যাগনেটোমোটিভ ফোর্স (MMF):
- কয়েলের মধ্য দিয়ে কারেন্ট প্রবাহিত হলে যে চৌম্বক চাপ বা চালিকাশক্তি সৃষ্টি হয় তাকে MMF বলে।
- সূত্র: MMF = N · I (একক: অ্যাম্পিয়ার-টার্ন বা AT)।

২. রিলাকট্যান্স (S - Reluctance):
- চৌম্বক ফ্লাক্স প্রবাহে কোনো উপাদান যে বাধা প্রদান করে তাকে রিলাকট্যান্স বলে।
- সূত্র: S = l / (µ · A) = l / (µ₀ · µᵣ · A) (একক: AT/Wb বা 1/H)।

৩. চুম্বকীয় ওহমের সূত্র (Hopkinson's Law):
- Φ = MMF / S  অথবা  MMF = Φ · S
- বৈদ্যুতিক সার্কিটের সাথে মিল: V = I · R এর অনুরূপ MMF = Φ · S।`
  },
  formulas: [
    {
      expression: 'MMF = N · I',
      description: {
        en: 'Magnetomotive Force in Ampere-turns (AT)',
        hi: 'चुंबकीय वाहक बल (Ampere-turns, AT)',
        bn: 'ম্যাগনেটোমোটিভ ফোর্স (অ্যাম্পিয়ার-টার্ন, AT)'
      }
    },
    {
      expression: 'S = l / (μ0 · μr · A)',
      description: {
        en: 'Reluctance of magnetic path (AT/Wb)',
        hi: 'चुंबकीय रिलक्टेंस (AT/Wb)',
        bn: 'চৌম্বক পথের রিলাকট্যান্স (AT/Wb)'
      }
    },
    {
      expression: 'Φ = MMF / S = (N · I) / S',
      description: {
        en: 'Hopkinson\'s Law (Magnetic Ohm\'s Law)',
        hi: 'हॉपकिंसन का नियम (चुंबकीय ओम नियम)',
        bn: 'হপকিনসনের সূত্র (চৌম্বক ওহমের সূত্র)'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A coil of 600 turns carries a current of 1.5 A. Find the MMF produced.',
        hi: '600 फेरों वाली कॉइल में 1.5 A की धारा बहती है। उत्पन्न MMF का मान ज्ञात करें।',
        bn: '৬০০ প্যাঁচের একটি কয়েলে ১.৫ অ্যাম্পিয়ার কারেন্ট চললে উৎপন্ন MMF কত হবে?'
      },
      solution: {
        en: 'MMF = N × I = 600 × 1.5 A = 900 AT (Ampere-turns).',
        hi: 'MMF = 600 × 1.5 = 900 AT।',
        bn: 'MMF = ৬০০ × ১.৫ = ৯০০ AT (অ্যাম্পিয়ার-টার্ন)।'
      }
    }
  ]
};
