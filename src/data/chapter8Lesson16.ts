import { Lesson } from '../types';

export const LESSON_INDUCTOR_COLOR_NUMERICAL_CODES: Lesson = {
  id: 'lsn-ch8-inductor-color-numerical-codes',
  topicId: 'ch8-inductor-color-numerical-codes',
  chapterId: 'ch-inductors',
  order: 16,
  title: {
    en: 'Inductor EIA Color Codes, SMD Marking Codes & Ratings',
    hi: 'इंडक्टर कलर कोड, SMD मार्किंग कोड एवं रेटिंग प्रणाली',
    bn: 'ইন্ডাক্টর কালার কোড, SMD মার্কিং কোড ও রেটিং পদ্ধতি'
  },
  description: {
    en: 'EIA 4-band and 5-band color coding standard for axial leaded inductors (base unit in microhenries μH), 3-digit and 4-digit SMD numerical codes (e.g., 4R7 = 4.7 μH, 101 = 100 μH, R47 = 0.47 μH), tolerance letter codes (J=±5%, K=±10%, M=±20%), saturation current (I_sat), and temperature rise current (I_rms).',
    hi: 'अक्षीय इंडक्टरों के लिए EIA 4-बैंड कलर कोड (मूल इकाई माइक्रोहेनरी μH), 3-अंकीय SMD कोड (4R7 = 4.7 μH, 101 = 100 μH), सहिष्णुता कोड (J=±5%, K=±10%), संतृप्ति धारा (I_sat) एवं तापमान वृद्धि धारा (I_rms)।',
    bn: 'অ্যাক্সিয়াল ইন্ডাক্টরের EIA কালার কোড (মূল একক মাইক্রোহেনরি μH), ৩-সংখ্যার SMD কোড (4R7 = 4.7 μH, 101 = 100 μH), টলারেন্স অক্ষর (J=±5%, K=±10%), স্যাচুরেশন কারেন্ট (I_sat) ও রেটেড কারেন্ট (I_rms)।'
  },
  easyExplanation: {
    en: 'Axial inductors often look identical to resistors—except their body is usually light green or cyan, and their base unit is microhenries (μH) instead of ohms! SMD power inductors are marked with clear codes like "4R7" (meaning 4.7 μH) or "220" (meaning 22 μH). Always check both the inductance value and its Saturation Current rating (I_sat) to avoid core burnout!',
    hi: 'अक्षीय इंडक्टर देखने में प्रतिरोधकों (Resistors) जैसे ही दिखते हैं—परंतु इनका रंग अक्सर हल्का हरा या नीला होता है और इनका मूल मात्रक माइक्रोहेनरी (μH) होता है! SMD इंडक्टरों पर "4R7" (4.7 μH) या "220" (22 μH) जैसे कोड छपे होते हैं।',
    bn: 'অ্যাক্সিয়াল ইন্ডাক্টর দেখতে হুবহু রেজিস্টরের মতো হলেও এদের বডি সাধারণত হালকা সবুজ বা আকাশি হয় এবং মূল হিসাব মাইক্রোহেনরি (μH) তে হয়! এসএমডি কয়েলে "4R7" (৪.৭ μH) বা "২২০" (২২ μH) কোড লেখা থাকে। কোর যাতে স্যাচুরেট না হয় সেজন্য সর্বদা স্যাচুরেশন কারেন্ট (I_sat) লক্ষ্য রাখতে হয়!'
  },
  detailedExplanation: {
    en: `1. EIA 4-Band Color Code System for Axial Inductors:
Standard base unit for color-coded inductors is always MICROHENRIES (μH):
- Band 1: 1st Significant Digit (0 - 9)
- Band 2: 2nd Significant Digit (0 - 9)
- Band 3: Multiplier (10^n) (Gold = ×0.1, Silver = ×0.01)
- Band 4: Tolerance (Silver = ±10%, Gold = ±5%, Black = ±20%)
A wider double-width silver band at the start indicates military spec.

Color Values:
Black = 0, Brown = 1, Red = 2, Orange = 3, Yellow = 4,
Green = 5, Blue = 6, Violet = 7, Gray = 8, White = 9.

Examples:
- [Yellow - Violet - Brown - Gold] = 4 - 7 - ×10¹ = 470 μH ±5%.
- [Brown - Black - Red - Silver] = 1 - 0 - ×10² = 1,000 μH = 1.0 mH ±10%.
- [Red - Red - Gold - Gold] = 2 - 2 - ×0.1 = 2.2 μH ±5%.

2. SMD Numerical Marking Codes:
- 3-Digit Code (Standard EIA):
  First 2 digits are significant figures; 3rd digit is the number of zeros (in μH).
  "100" = 10 × 10⁰ = 10 μH
  "101" = 10 × 10¹ = 100 μH
  "472" = 47 × 10² = 4,700 μH = 4.7 mH
- The "R" Decimal Point Code:
  The letter "R" represents a decimal point for values under 10 μH.
  "R47" or "0R47" = 0.47 μH
  "4R7" = 4.7 μH
  "6R8" = 6.8 μH

3. Standard Tolerance Letter Codes:
- F = ±1%
- G = ±2%
- J = ±5%
- K = ±10%
- M = ±20%
Example: "100K" = 10 μH ±10%.

4. Critical Inductor Datasheet Ratings:
1. Nominal Inductance (L_0): Measured at a specified test frequency (e.g., 100 kHz, 0.1 V).
2. DC Resistance (DCR): Copper winding resistance at 25°C. Lower DCR = higher efficiency.
3. Saturation Current (I_sat): The DC bias current at which inductance drops by 10% to 30% due to core magnetic saturation.
4. Temperature Rise Current (I_rms / I_heat): The continuous DC or RMS current that produces a 40°C temperature rise over ambient due to I²R copper losses.
Engineering Safety Rule: Never allow peak operating current to exceed the lower of I_sat and I_rms!`,
    hi: `1. इंडक्टर 4-बैंड कलर कोड (मूल मात्रक = μH):
- बैंड 1: प्रथम अंक
- बैंड 2: द्वितीय अंक
- बैंड 3: गुणक (10^n) (गोल्ड = ×0.1)
- बैंड 4: सहिष्णुता (गोल्ड = ±5%, सिल्वर = ±10%)
उदाहरण: [पीला - बैंगनी - भूरा - गोल्ड] = 47 × 10 = 470 μH ±5%।

2. SMD कोड:
- "4R7" = 4.7 μH
- "101" = 100 μH
- "R22" = 0.22 μH

3. महत्वपूर्ण रेटिंग:
- DCR: कुंडली का DC प्रतिरोध।
- I_sat (संतृप्ति धारा): वह धारा जहाँ इंडक्टेंस 30% गिर जाता है।
- I_rms: सुरक्षित तापमान वृद्धि वाली धारा।`,
    bn: `১. অ্যাক্সিয়াল কালার কোড (মূল একক = μH):
- ব্যান্ড ১: ১ম সংখ্যা
- ব্যান্ড ২: ২য় সংখ্যা
- ব্যান্ড ৩: গুণক (10^n) (গোল্ড = ×০.১)
- ব্যান্ড ৪: টলারেন্স (গোল্ড = ±৫%, সিলভার = ±১০%)
উদাহরণ: [হলুদ - বেগুনি - বাদামি - সোনালি] = ৪৭ × ১০ = ৪৭০ μH ±৫%।

২. SMD কোড:
- "4R7" = ৪.৭ μH
- "101" = ১০০ μH
- "R22" = ০.২২ μH

৩. গুরুত্বপূর্ণ রেটিং:
- DCR: ওয়াইন্ডিংয়ের নিজস্ব ডিসি রোধ।
- I_sat: যে কারেন্টে কোর স্যাচুরেট হয়ে ইন্ডাক্ট্যান্স ৩০% কমে যায়।
- I_rms: নিরাপদ তাপমাত্রায় সর্বোচ্চ অবিচ্ছিন্ন কারেন্ট।`
  },
  formulas: [
    {
      expression: 'L = (\\text{Digit 1} \\times 10 + \\text{Digit 2}) \\times 10^{\\text{Multiplier}} \\; [\\mu\\text{H}]',
      description: {
        en: 'Inductor color code and 3-digit calculation formula in microhenries',
        hi: 'माइक्रोहेनरी में इंडक्टर मान गणना सूत्र',
        bn: 'মাইক্রোহেনরিতে ইন্ডাক্টর মান হিসাব সমীকরণ'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'Decode the following inductors: (a) An axial inductor with color bands [Red - Violet - Orange - Silver], and (b) An SMD power inductor labeled "6R8M".',
        hi: 'निम्न इंडक्टरों का मान ज्ञात करें: (a) कलर बैंड [लाल - बैंगनी - नारंगी - सिल्वर], एवं (b) SMD कोड "6R8M"।',
        bn: 'নিম্নোক্ত ইন্ডাক্টরগুলোর মান নির্ণয় করো: (a) কালার ব্যান্ড [লাল - বেগুনি - কমলা - সিলভার] এবং (b) SMD কোড "6R8M"।'
      },
      solution: {
        en: `(a) Axial Color Code:
- Band 1 (Red) = 2
- Band 2 (Violet) = 7
- Band 3 (Orange) = Multiplier × 10³ = × 1,000
- Band 4 (Silver) = ±10% Tolerance
Value = 27 × 1,000 μH = 27,000 μH = 27.0 mH ±10%.

(b) SMD Marking Code "6R8M":
- "6R8" = The letter 'R' indicates decimal point = 6.8 μH
- Letter "M" = ±20% Tolerance
Value = 6.8 μH ±20%.`,
        hi: `(a) [लाल (2) - बैंगनी (7) - नारंगी (10³)] = 27,000 μH = 27 mH ±10%
(b) "6R8M" = 6.8 μH, सहिष्णुता M = ±20%।`,
        bn: `(a) [লাল (২) - বেগুনি (৭) - কমলা (১০³)] = ২৭,০০০ μH = ২৭ mH ±১০%
(b) "6R8M" = ৬.৮ μH, টলারেন্স M = ±২০%।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'What is the inductance value of an SMD power inductor marked with the code "221K"?',
        hi: 'SMD कोड "221K" वाले पावर इंडक्टर का प्रेरकत्व मान क्या है?',
        bn: '"221K" চিহ্নিত একটি SMD পাওয়ার ইন্ডাক্টরের মান কত?'
      },
      options: {
        en: ['22.1 μH ±10%', '220 μH ±10%', '2.21 mH ±5%', '22 μH ±20%'],
        hi: ['22.1 μH ±10%', '220 μH ±10%', '2.21 mH ±5%', '22 μH ±20%'],
        bn: ['২২.১ μH ±১০%', '২২০ μH ±১০%', '২.২১ mH ±৫%', '২২ μH ±২০%']
      },
      correctAnswer: 1,
      explanation: {
        en: '"221" means 22 × 10¹ = 220 μH. The suffix "K" indicates ±10% tolerance.',
        hi: '"221" का अर्थ है 22 × 10¹ = 220 μH, और "K" का अर्थ है ±10% सहिष्णुता।',
        bn: '"221" মানে ২২ × ১০¹ = ২২০ μH এবং "K" নির্দেশ করে ±১০% টলারেন্স।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Saturation Current (I_sat)',
        hi: 'संतृप्ति धारा (I_sat)',
        bn: 'স্যাচুরেশন কারেন্ট (I_sat)'
      },
      definition: {
        en: 'The DC current level at which the magnetic core saturates, causing inductance to drop sharply by 10% to 30%.',
        hi: 'वह DC धारा जिस पर चुंबकीय कोर संतृप्त हो जाता है और प्रेरकत्व 10% से 30% गिर जाता है।',
        bn: 'যে ডিসি কারেন্টে চৌম্বক কোর স্যাচুরেট হয় এবং ইন্ডাক্ট্যান্স ১০% থেকে ৩০% পর্যন্ত হ্রাস পায়।'
      }
    }
  ]
};
