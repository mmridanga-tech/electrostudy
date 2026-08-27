import { Lesson } from '../types';

export const LESSON_MUTUAL_INDUCTANCE_COUPLING: Lesson = {
  id: 'lsn-ch8-mutual-inductance-coupling',
  topicId: 'ch8-mutual-inductance-coupling',
  chapterId: 'ch-inductors',
  order: 5,
  title: {
    en: 'Mutual Inductance (M), Coupling Factor (k) & Dot Convention',
    hi: 'पारस्परिक प्रेरकत्व (M), युग्मन गुणांक (k) एवं डॉट कन्वेंशन',
    bn: 'মিউচুয়াল ইন্ডাক্ট্যান্স (M), কাপলিং ফ্যাক্টর (k) ও ডট কনভেনশন'
  },
  description: {
    en: 'Concept of mutual inductance (M), mutually induced EMF (e2 = -M di1/dt), derivation of M = μ N1 N2 A / l, coefficient of coupling (k = M / √(L1·L2)), and dot convention rules for magnetic polarity.',
    hi: 'पारस्परिक प्रेरकत्व (M) की संकल्पना, पारस्परिक प्रेरित EMF (e2 = -M di1/dt), सूत्र M = μ N1 N2 A / l का निगमन, युग्मन गुणांक k = M / √(L1·L2) एवं डॉट कन्वेंशन नियम।',
    bn: 'পারস্পরিক আবেশের (M) ধারণা, মিউচুয়ালি আবিষ্ট EMF (e2 = -M di1/dt), M = μ N1 N2 A / l সমীকরণ প্রতিপাদন, কাপলিং গুণক k = M / √(L1·L2) এবং পোলারিটি নির্দেশক ডট কনভেনশন।'
  },
  easyExplanation: {
    en: 'When two coils are placed near each other, changing the current in Coil 1 creates a changing magnetic field that reaches into Coil 2 and induces a voltage in it! This wireless magnetic link is called Mutual Inductance, and it is the exact principle that powers all transformers and wireless phone chargers.',
    hi: 'जब दो कुंडलियों को एक-दूसरे के पास रखा जाता है, तो पहली कुंडली में धारा बदलने से उत्पन्न बदलता चुंबकीय क्षेत्र दूसरी कुंडली में वोल्टेज प्रेरित करता है! इस चुंबकीय लिंक को पारस्परिक प्रेरकत्व (Mutual Inductance) कहते हैं, और इसी सिद्धांत पर सभी ट्रांसफॉर्मर और वायरलेस चार्जर काम करते हैं।',
    bn: 'যখন দুটি কয়েল কাছাকাছি রাখা হয়, তখন ১ম কয়েলে কারেন্ট পরিবর্তিত হলে সৃষ্ট পরিবর্তনশীল চৌম্বক ক্ষেত্র ২য় কয়েলে প্রবেশ করে এবং তাতে ভোল্টেজ আবিষ্ট করে! এই চৌম্বক সংযোগকে মিউচুয়াল ইন্ডাক্ট্যান্স বলে, যার ভিত্তিতে সমস্ত ট্রান্সফরমার ও ওয়্যারলেস চার্জার কাজ করে।'
  },
  detailedExplanation: {
    en: `1. Concept of Mutual Inductance (M):
Mutual inductance is the property of a pair of magnetically coupled coils whereby a change of current in one coil induces an electromotive force in the other:
e₂ = -M · (di₁ / dt)  and  e₁ = -M · (di₂ / dt) [Volts]
By reciprocity theorem: M₁₂ = M₂₁ = M.

2. Mathematical Expression for Mutual Inductance:
If coil 1 has N₁ turns and coil 2 has N₂ turns sharing a common magnetic core of length l, cross-sectional area A, and permeability μ:
M = (N₂ · Φ₁₂) / I₁ = (μ · N₁ · N₂ · A) / l [Henry (H)]

3. Coefficient of Coupling (k):
The coefficient of magnetic coupling k represents the fraction of magnetic flux produced by coil 1 that successfully links with coil 2:
k = Φ₁₂ / Φ₁
Since L₁ = μ N₁² A / l and L₂ = μ N₂² A / l:
M = k · √(L₁ · L₂)
- Range: 0 ≤ k ≤ 1.
- Tight / Ideal Coupling (k ≈ 0.98 to 1.0): Iron-core transformers where almost all flux is shared.
- Loose Coupling (k < 0.5): Air-core radio frequency (RF) coils.
- Zero Coupling (k = 0): Coils perpendicular to each other or shielded.

4. The Dot Convention for Magnetic Polarity:
The dot convention is a standard schematic notation used to determine the relative polarity of mutually induced voltages:
- Rule 1: When current enters the dotted terminal of one coil, it produces an induced voltage at the other coil that is POSITIVE at its dotted terminal.
- Rule 2: When current leaves the dotted terminal of one coil, the induced voltage at the other coil is NEGATIVE at its dotted terminal.
- Aiding Flux (+M): Current enters both dotted terminals -> Fluxes add constructively (Φ_total = Φ₁ + Φ₂).
- Opposing Flux (-M): Current enters one dotted terminal and leaves the other -> Fluxes subtract (Φ_total = |Φ₁ - Φ₂|).`,
    hi: `1. पारस्परिक प्रेरकत्व (Mutual Inductance, M):
जब कुंडली 1 में धारा i1 बदलने पर कुंडली 2 में EMF प्रेरित होता है:
e2 = -M · (di1 / dt) [वोल्ट]

2. M का गणितीय सूत्र:
M = (μ0 · μr · N1 · N2 · A) / l [हेनरी]

3. युग्मन गुणांक (Coefficient of Coupling, k):
k = M / √(L1 · L2)
- 0 ≤ k ≤ 1
- k = 1: आदर्श युग्मन (Tight Coupling, लौह कोर ट्रांसफॉर्मर)
- k < 0.5: ढीला युग्मन (Loose Coupling, वायु कोर)।

4. डॉट कन्वेंशन (Dot Convention):
- जब धारा एक कुंडली के डॉट (•) सिरे में प्रवेश करती है, तो दूसरी कुंडली के डॉट सिरे पर धनात्मक (+) विभव प्रेरित होता है।
- यदि दोनों कुंडलियों में धारा डॉट में प्रवेश करे -> फ्लक्स जुड़ते हैं (Aiding)।
- यदि एक में प्रवेश और दूसरी में निकास हो -> फ्लक्स घटते हैं (Opposing)।`,
    bn: `১. মিউচুয়াল ইন্ডাক্ট্যান্স (M):
১ম কয়েলে কারেন্ট i1 এর পরিবর্তনের কারণে ২য় কয়েলে আবিষ্ট EMF:
e2 = -M · (di1 / dt) [ভোল্ট]

২. M এর সমীকরণ:
M = (μ0 · μr · N1 · N2 · A) / l [হেনরি]

৩. কাপলিং গুণক (Coefficient of Coupling, k):
k = M / √(L1 · L2)
- ০ ≤ k ≤ ১
- k ≈ ১: আদর্শ কাপলিং (Tight Coupling, আয়রন কোর ট্রান্সফরমার)
- k < ০.৫: শিথিল কাপলিং (Loose Coupling, এয়ার কোর RF কয়েল)।

৪. ডট কনভেনশন (Dot Convention):
- কারেন্ট একটি কয়েলের ডট (•) টার্মিনালে প্রবেশ করলে অপর কয়েলের ডট টার্মিনালে পজিটিভ (+) বিভব আবিষ্ট হয়।
- উভয় কয়েলের ডট প্রান্তে কারেন্ট ঢুকলে ফ্লাক্স যোগ হয় (Aiding)।
- একটির ডটে ঢুকলে এবং অপরটির ডট থেকে বের হলে ফ্লাক্স বিয়োগ হয় (Opposing)।`
  },
  formulas: [
    {
      expression: 'e₂ = -M · (di₁ / dt)',
      description: {
        en: 'Mutually induced EMF in second coil due to current change in first coil',
        hi: 'पहली कुंडली में धारा परिवर्तन के कारण दूसरी कुंडली में प्रेरित EMF',
        bn: '১ম কয়েলে কারেন্ট পরিবর্তনের কারণে ২য় কয়েলে আবিষ্ট EMF'
      }
    },
    {
      expression: 'M = k · √(L₁ · L₂)',
      description: {
        en: 'Mutual inductance in terms of self-inductances and coupling coefficient k',
        hi: 'स्व-प्रेरकत्वों एवं युग्मन गुणांक k के पदों में पारस्परिक प्रेरकत्व',
        bn: 'ইন্ডাক্ট্যান্স ও কাপলিং গুণক k এর মাধ্যমে মিউচুয়াল ইন্ডাক্ট্যান্স'
      }
    },
    {
      expression: 'M = (μ0 · μr · N₁ · N₂ · A) / l',
      description: {
        en: 'Mutual inductance of two coils wound on the same magnetic core',
        hi: 'समान कोर पर लिपटी दो कुंडलियों का पारस्परिक प्रेरकत्व',
        bn: 'একই কোরে জড়ানো দুটি কয়েলের মিউচুয়াল ইন্ডাক্ট্যান্স'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'Two magnetically coupled coils have self-inductances L1 = 120 mH and L2 = 270 mH. If the coefficient of coupling between them is k = 0.85, calculate the mutual inductance M.',
        hi: 'दो युग्मित कुंडलियों के स्व-प्रेरकत्व L1 = 120 mH एवं L2 = 270 mH हैं। यदि युग्मन गुणांक k = 0.85 है, तो पारस्परिक प्रेरकत्व M की गणना करें।',
        bn: 'দুটি চৌম্বকীয়ভাবে কাপল্ড কয়েলের সেলফ ইন্ডাক্ট্যান্স যথাক্রমে L1 = ১২০ mH এবং L2 = ২৭০ mH। এদের কাপলিং গুণক k = ০.৮৫ হলে মিউচুয়াল ইন্ডাক্ট্যান্স M নির্ণয় করো।'
      },
      solution: {
        en: `Given:
L1 = 120 mH = 0.120 H
L2 = 270 mH = 0.270 H
k = 0.85

Using the mutual inductance coupling formula:
M = k · √(L1 · L2)
M = 0.85 × √(0.120 × 0.270)
M = 0.85 × √(0.0324) = 0.85 × 0.180 H = 0.153 Henry = 153 mH.`,
        hi: `दिया गया: L1 = 120 mH, L2 = 270 mH, k = 0.85

सूत्र: M = k · √(L1 · L2)
M = 0.85 × √(120 × 270) = 0.85 × √(32400) = 0.85 × 180 = 153 mH.`,
        bn: `দেওয়া আছে: L1 = ১২০ mH, L2 = ২৭০ mH, k = ০.৮৫

সূত্র: M = k · √(L1 · L2)
M = ০.৮৫ × √(১২০ × ২৭০) = ০.৮৫ × ১৮০ = ১৫৩ mH।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'What is the maximum theoretical value for the magnetic coupling coefficient k between two coils?',
        hi: 'दो कुंडलियों के बीच चुंबकीय युग्मन गुणांक k का अधिकतम सैद्धांतिक मान क्या है?',
        bn: 'দুটি কয়েলের মধ্যে চৌম্বক কাপলিং গুণক k এর সর্বোচ্চ তাত্ত্বিক মান কত?'
      },
      options: {
        en: ['0.5', '1.0 (Unity)', '10.0', 'Infinity'],
        hi: ['0.5', '1.0 (इकाई)', '10.0', 'अनंत'],
        bn: ['০.৫', '১.০ (একক)', '১০.০', 'অসীম']
      },
      correctAnswer: 1,
      explanation: {
        en: 'The coupling coefficient k cannot exceed 1.0 (100%), which represents 100% ideal magnetic flux linkage with zero leakage.',
        hi: 'युग्मन गुणांक k कभी 1.0 (100%) से अधिक नहीं हो सकता, जो 100% आदर्श फ्लक्स लिंकेज को दर्शाता है।',
        bn: 'কাপলিং গুণক k কখনোই ১.০ (১০০%) এর বেশি হতে পারে না, যা শূন্য লিকেজ সহ শতভাগ চৌম্বক ফ্লাক্স লিংকেজ নির্দেশ করে।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Coupling Factor (k)',
        hi: 'युग्मन गुणांक (k)',
        bn: 'কাপলিং ফ্যাক্টর (k)'
      },
      definition: {
        en: 'k = M / √(L1 · L2). The ratio measuring how effectively magnetic flux links between two coils (0 ≤ k ≤ 1).',
        hi: 'k = M / √(L1 · L2)। दो कुंडलियों के बीच फ्लक्स लिंकेज की प्रभावशीलता का मापक (0 से 1)।',
        bn: 'k = M / √(L1 · L2)। দুটি কয়েলের মধ্যে চৌম্বক ফ্লাক্স শেয়ারিং এর অনুপাত (০ থেকে ১)।'
      }
    }
  ]
};
