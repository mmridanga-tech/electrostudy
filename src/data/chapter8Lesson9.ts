import { Lesson } from '../types';

export const LESSON_INDUCTORS_IN_SERIES_PARALLEL: Lesson = {
  id: 'lsn-ch8-inductors-in-series-parallel',
  topicId: 'ch8-inductors-in-series-parallel',
  chapterId: 'ch-inductors',
  order: 9,
  title: {
    en: 'Inductors in Series & Parallel (With & Without Mutual Inductance)',
    hi: 'श्रेणी एवं समानांतर क्रम में इंडक्टर (पारस्परिक प्रेरकत्व सहित एवं रहित)',
    bn: 'সিরিজ ও প্যারালালে ইন্ডাক্টর (মিউচুয়াল আবেশ সহ ও ব্যতীত)'
  },
  description: {
    en: 'Equivalent inductance derivation for series and parallel uncoupled inductors, and coupled inductors in series-aiding (L_eq = L1 + L2 + 2M), series-opposing (L_eq = L1 + L2 - 2M), parallel-aiding, and parallel-opposing configurations.',
    hi: 'अयुग्मित इंडक्टरों के श्रेणी एवं समानांतर संयोजन का तुल्य प्रेरकत्व, तथा पारस्परिक युग्मन सहित श्रेणी-सहायक (L1+L2+2M), श्रेणी-विरोधी (L1+L2-2M) एवं समानांतर संयोजन सूत्र।',
    bn: 'মুক্ত ইন্ডাক্টরের সিরিজ ও প্যারালাল তুল্য ইন্ডাক্ট্যান্স সমীকরণ, এবং মিউচুয়াল কাপলিং সহ সিরিজ-সহায়ক (L1+L2+2M), সিরিজ-বিরোধী (L1+L2-2M) ও প্যারালাল সমীকরণ।'
  },
  easyExplanation: {
    en: 'Just like resistors, connecting inductors in series increases total inductance, while connecting them in parallel decreases total inductance. But watch out! If the coils are physically close together, their magnetic fields can either help each other (+2M) or fight each other (-2M), drastically changing the result.',
    hi: 'प्रतिरोधों की तरह ही, इंडक्टरों को श्रेणी (Series) में जोड़ने पर कुल प्रेरकत्व बढ़ता है और समानांतर (Parallel) में जोड़ने पर घटता है। लेकिन यदि दोनों कुंडलियां पास हों, तो उनके चुंबकीय क्षेत्र या तो एक-दूसरे की मदद करते हैं (+2M) या विरोध करते हैं (-2M)!',
    bn: 'রোধের মতোই, ইন্ডাক্টর সিরিজে যুক্ত করলে মোট ইন্ডাক্ট্যান্স বাড়ে এবং প্যারালালে যুক্ত করলে কমে। তবে কয়েল দুটি কাছাকাছি থাকলে তাদের চৌম্বক ক্ষেত্র একে অপরকে সাহায্য (+2M) অথবা বাধা (-2M) প্রদান করে মোট মান সম্পূর্ণ পরিবর্তন করে দেয়।'
  },
  detailedExplanation: {
    en: `1. Uncoupled Inductors in Series (k = 0, M = 0):
When n inductors are connected in series with no mutual magnetic coupling:
L_eq = L₁ + L₂ + L₃ + ... + L_n [Henry]
Same current i(t) flows through all series inductors; total voltage drop is:
v_total(t) = v₁ + v₂ + ... = (L₁ + L₂ + ...)(di/dt)

2. Coupled Inductors in Series:
When two magnetically coupled coils (self-inductances L₁ and L₂, mutual inductance M) are connected in series:
A. Series-Aiding Connection (Cumulative / In-Phase):
- Currents enter both dotted terminals. Fluxes assist each other.
- Total voltage: v = L₁(di/dt) + M(di/dt) + L₂(di/dt) + M(di/dt)
- Equivalent Inductance:
  L_aiding = L₁ + L₂ + 2M

B. Series-Opposing Connection (Differential / Out-of-Phase):
- Current enters the dotted terminal of coil 1 and leaves the dotted terminal of coil 2. Fluxes oppose each other.
- Equivalent Inductance:
  L_opposing = L₁ + L₂ - 2M

C. Experimental Measurement of Mutual Inductance (M):
By measuring L_aiding and L_opposing on an LCR bridge:
M = (L_aiding - L_opposing) / 4

3. Uncoupled Inductors in Parallel (k = 0, M = 0):
When n inductors are connected in parallel across the same terminal voltage:
1 / L_eq = 1/L₁ + 1/L₂ + ... + 1/L_n
For two uncoupled inductors:
L_eq = (L₁ · L₂) / (L₁ + L₂)

4. Coupled Inductors in Parallel:
- Parallel-Aiding (Fluxes assist):
  L_eq = (L₁ · L₂ - M²) / (L₁ + L₂ - 2M)
- Parallel-Opposing (Fluxes oppose):
  L_eq = (L₁ · L₂ - M²) / (L₁ + L₂ + 2M)`,
    hi: `1. अयुग्मित इंडक्टर (M = 0):
- श्रेणी क्रम: L_eq = L1 + L2 + L3 + ...
- समानांतर क्रम: L_eq = (L1 · L2) / (L1 + L2)

2. चुंबकीय रूप से युग्मित श्रेणी इंडक्टर:
- श्रेणी-सहायक (Series Aiding): L_eq = L1 + L2 + 2M
- श्रेणी-विरोधी (Series Opposing): L_eq = L1 + L2 - 2M
- पारस्परिक प्रेरकत्व मापने की प्रयोगशाला विधि: M = (L_aiding - L_opposing) / 4।`,
    bn: `১. কাপলিংবিহীন ইন্ডাক্টর (M = ০):
- সিরিজ সংযোগ: L_eq = L1 + L2 + L3 + ...
- প্যারালাল সংযোগ: L_eq = (L1 · L2) / (L1 + L2)

২. কাপল্ড কয়েলের সিরিজ সংযোগ:
- সিরিজ-সহায়ক (Series Aiding): L_eq = L1 + L2 + 2M
- সিরিজ-বিরোধী (Series Opposing): L_eq = L1 + L2 - 2M
- মিউচুয়াল ইন্ডাক্ট্যান্স নির্ণয়ের ল্যাব পদ্ধতি: M = (L_aiding - L_opposing) / ৪।`
  },
  formulas: [
    {
      expression: 'L_{aiding} = L_1 + L_2 + 2M',
      description: {
        en: 'Equivalent inductance of two series-aiding coupled coils',
        hi: 'श्रेणी-सहायक युग्मित कुंडलियों का तुल्य प्रेरकत्व',
        bn: 'সিরিজ-সহায়ক কাপল্ড কয়েলের তুল্য ইন্ডাক্ট্যান্স'
      }
    },
    {
      expression: 'L_{opposing} = L_1 + L_2 - 2M',
      description: {
        en: 'Equivalent inductance of two series-opposing coupled coils',
        hi: 'श्रेणी-विरोधी युग्मित कुंडलियों का तुल्य प्रेरकत्व',
        bn: 'সিরিজ-বিরোধী কাপল্ড কয়েলের তুল্য ইন্ডাক্ট্যান্স'
      }
    },
    {
      expression: 'M = \\frac{L_{aiding} - L_{opposing}}{4}',
      description: {
        en: 'Experimental determination of mutual inductance',
        hi: 'पारस्परिक प्रेरकत्व निर्धारण का प्रयोगात्मक सूत्र',
        bn: 'মিউচুয়াল ইন্ডাক্ট্যান্স নির্ণয়ের ব্যবহারিক সূত্র'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'Two coils connected in series-aiding have an equivalent inductance of 480 mH. When connected in series-opposing, their equivalent inductance is 160 mH. If self-inductance L1 is 180 mH, calculate: (a) Mutual inductance M, (b) Self-inductance L2, and (c) Coupling coefficient k.',
        hi: 'श्रेणी-सहायक में जुड़ी दो कुंडलियों का तुल्य प्रेरकत्व 480 mH है। श्रेणी-विरोधी में यह 160 mH है। यदि L1 = 180 mH है, तो ज्ञात करें: (a) M, (b) L2, एवं (c) k।',
        bn: 'দুটি কয়েল সিরিজ-সহায়ক অবস্থায় যুক্ত থাকলে তুল্য ইন্ডাক্ট্যান্স ৪৮০ mH এবং সিরিজ-বিরোধী অবস্থায় ১৬০ mH হয়। যদি L1 = ১৮০ mH হয়, তবে নির্ণয় করো: (a) M, (b) L2 এবং (c) k।'
      },
      solution: {
        en: `Given:
L_aiding = 480 mH
L_opposing = 160 mH
L1 = 180 mH

Step 1: Calculate Mutual Inductance M:
M = (L_aiding - L_opposing) / 4 = (480 - 160) / 4 = 320 / 4 = 80 mH

Step 2: Calculate Self-Inductance L2:
Since L_aiding = L1 + L2 + 2M:
480 = 180 + L2 + 2(80) = 180 + L2 + 160 = 340 + L2
L2 = 480 - 340 = 140 mH

Step 3: Calculate Coupling Coefficient k:
k = M / √(L1 · L2) = 80 / √(180 × 140) = 80 / √(25,200) = 80 / 158.745 = 0.504.`,
        hi: `(a) M = (480 - 160) / 4 = 80 mH
(b) 480 = 180 + L2 + 2(80) => L2 = 140 mH
(c) k = 80 / √(180 × 140) = 0.504।`,
        bn: `(a) M = (৪৮০ - ১৬০) / ৪ = ৮০ mH
(b) ৪৮০ = ১৮০ + L2 + ২(৮০) => L2 = ১৪০ mH
(c) k = ৮০ / √(১৮০ × ১৪০) = ০.৫০৪।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'Two identical 100 mH inductors with unity coupling (k = 1.0, M = 100 mH) are connected in series-opposing. What is the total equivalent inductance?',
        hi: 'आदर्श युग्मन (k = 1, M = 100 mH) वाले दो समान 100 mH इंडक्टर श्रेणी-विरोधी में जुड़े हैं। कुल तुल्य प्रेरकत्व क्या होगा?',
        bn: '১০০% কাপলিং (k = ১, M = ১০০ mH) যুক্ত দুটি অভিন্ন ১০০ mH ইন্ডাক্টর সিরিজ-বিরোধী অবস্থায় সংযুক্ত। মোট তুল্য ইন্ডাক্ট্যান্স কত?'
      },
      options: {
        en: ['0 mH', '100 mH', '200 mH', '400 mH'],
        hi: ['0 mH', '100 mH', '200 mH', '400 mH'],
        bn: ['০ mH', '১০০ mH', '২০০ mH', '৪০০ mH']
      },
      correctAnswer: 0,
      explanation: {
        en: 'L_opposing = L1 + L2 - 2M = 100 + 100 - 2(100) = 0 mH. The two magnetic fields completely cancel each other out!',
        hi: 'L_opposing = 100 + 100 - 2(100) = 0 mH। दोनों चुंबकीय क्षेत्र एक-दूसरे को पूरी तरह समाप्त कर देते हैं!',
        bn: 'L_opposing = ১০০ + ১০০ - ২(১০০) = ০ mH। দুটি চৌম্বক ক্ষেত্র একে অপরকে সম্পূর্ণ নিষ্ক্রিয় করে দেয়!'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Series-Aiding Inductance',
        hi: 'श्रेणी-सहायक प्रेरकत्व',
        bn: 'সিরিজ-সহায়ক ইন্ডাক্ট্যান্স'
      },
      definition: {
        en: 'L_eq = L1 + L2 + 2M. Total inductance when magnetic fluxes reinforce each other.',
        hi: 'L_eq = L1 + L2 + 2M। जब दोनों कुंडलियों के चुंबकीय फ्लक्स एक-दूसरे का समर्थन करते हैं।',
        bn: 'L_eq = L1 + L2 + 2M। যখন উভয় কয়েলের চৌম্বক ফ্লাক্স একে অপরকে শক্তিশালী করে।'
      }
    }
  ]
};
