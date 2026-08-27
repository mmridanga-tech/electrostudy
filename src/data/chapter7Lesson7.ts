import { Lesson } from '../types';

export const LESSON_CAPACITORS_IN_PARALLEL: Lesson = {
  id: 'lsn-ch7-capacitors-in-parallel',
  topicId: 'ch7-capacitors-in-parallel',
  chapterId: 'ch-capacitors',
  order: 7,
  title: {
    en: 'Capacitors in Parallel Connection & Charge Distribution',
    hi: 'समानांतर क्रम में संधारित्र एवं आवेश वितरण',
    bn: 'প্যারালালে ক্যাপাসিটর সংযোগ ও আধান বিভাজন'
  },
  description: {
    en: 'Parallel equivalent capacitance (C_eq = C1 + C2 + ... + Cn), identical voltage across all branches, charge distribution formula, and capacitance boosting.',
    hi: 'समानांतर तुल्य धारिता सूत्र (C_eq = C1 + C2 + ...), सभी शाखाओं पर समान वोल्टेज, आवेश वितरण एवं धारिता संवर्धन।',
    bn: 'প্যারালাল তুল্য ক্যাপাসিট্যান্স (C_eq = C1 + C2 + ...), সকল শাখায় সমান ভোল্টেজ, আধান বিভাজন ও ক্যাপাসিট্যান্স বৃদ্ধি।'
  },
  easyExplanation: {
    en: 'Connecting capacitors in parallel is like putting water tanks side by side and connecting their bottoms. Their surface areas add together, allowing them to hold much more total charge at the exact same voltage level.',
    hi: 'कैपेसिटरों को समानांतर में जोड़ना कई पानी के टैंकों को एक साथ जोड़ने जैसा है। उनका कुल क्षेत्रफल जुड़ जाता है जिससे वे समान वोल्टेज पर बहुत अधिक आवेश संचित कर सकते हैं।',
    bn: 'ক্যাপাসিটরকে সমান্তরালে যুক্ত করা মানে একাধিক পানির ট্যাঙ্ক পাশাপাশি রেখে পাইপ দিয়ে যুক্ত করার মতো। তাদের মোট তল বা ক্ষেত্রফল বৃদ্ধি পায়, ফলে একই ভোল্টেজ লেভেলে তারা অনেক বেশি আধান জমা রাখতে পারে।'
  },
  detailedExplanation: {
    en: `1. Parallel Connection Rules:
When n capacitors are connected in parallel across a common voltage source V:
- Voltage Equality: The exact same voltage V appears across the terminals of every parallel capacitor:
V_total = V1 = V2 = V3 = ... = Vn = V
- Charge Addition: The total charge supplied by the source is the sum of the charges accumulated on each individual capacitor:
Q_total = Q1 + Q2 + Q3 + ... + Qn

2. Derivation of Equivalent Parallel Capacitance (C_eq):
Since Q = C · V:
Q_total = (C1 · V) + (C2 · V) + (C3 · V) + ... + (Cn · V)
(C_eq · V) = V · (C1 + C2 + C3 + ... + Cn)
Dividing both sides by V:
C_eq = C1 + C2 + C3 + ... + Cn

For n identical capacitors each of value C:
C_eq = n · C

3. Direct Charge Division Rule:
The charge distributed to each parallel branch is directly proportional to its capacitance:
Q1 = Q_total · [ C1 / (C1 + C2 + ... + Cn) ]
Q2 = Q_total · [ C2 / (C1 + C2 + ... + Cn) ]
Note: The LARGEST capacitor in a parallel bank stores the GREATEST charge!

4. Voltage Rating of Parallel Bank:
The maximum safe voltage rating of a parallel group is strictly limited by the LOWEST voltage-rated capacitor in the group:
V_max = min(V_rated1, V_rated2, ..., V_ratedn).`,
    hi: `1. समानांतर संयोजन के नियम:
- समान वोल्टेज: प्रत्येक संधारित्र पर समान वोल्टेज V होता है (V1 = V2 = V).
- आवेशों का योग: कुल आवेश सभी शाखाओं के आवेशों का योग होता है (Q = Q1 + Q2 + ... + Qn).

2. तुल्य समानांतर धारिता:
C_eq = C1 + C2 + C3 + ... + Cn
n समान संधारित्रों के लिए: C_eq = n · C.

3. आवेश विभाजन नियम:
Q1 = Q_total · [ C1 / (C1 + C2) ]
Q2 = Q_total · [ C2 / (C1 + C2) ]
समानांतर में सबसे बड़ा कैपेसिटर सबसे अधिक आवेश संचित करता है।

4. अधिकतम सुरक्षित वोल्टेज:
समानांतर बैंक का वोल्टेज समूह में सबसे कम वोल्टेज रेटिंग वाले कैपेसिटर द्वारा सीमित होता है।`,
    bn: `১. প্যারালাল সংযোগের মূল বৈশিষ্ট্য:
- সমান ভোল্টেজ: প্রতিটি ক্যাপাসিটরের দুই প্রান্তে একই ভোল্টেজ V বজায় থাকে (V1 = V2 = V)।
- মোট আধান: উৎস থেকে সরবরাহকৃত মোট চার্জ হলো প্রতিটি ক্যাপাসিটরের চার্জের যোগফল (Q = Q1 + Q2 + ... + Qn)।

২. তুল্য প্যারালাল ক্যাপাসিট্যান্স:
C_eq = C1 + C2 + C3 + ... + Cn
n সংখ্যক সমমানের ক্যাপাসিটরের জন্য: C_eq = n · C।

৩. আধান বিভাজন নীতি:
Q1 = Q_total · [ C1 / (C1 + C2) ]
Q2 = Q_total · [ C2 / (C1 + C2) ]
প্যারালালে যার ক্যাপাসিট্যান্স সবচেয়ে বেশি, সে সবচেয়ে বেশি আধান ধারণ করে।

৪. সর্বোচ্চ নিরাপদ ভোল্টেজ:
প্যারালাল গ্রুপের সর্বোচ্চ ভোল্টেজ রেটিং গ্রুপটির সর্বনিম্ন রেটেড ক্যাপাসিটরের সমান।`
  },
  formulas: [
    {
      expression: 'C_eq = C1 + C2 + ... + Cn',
      description: {
        en: 'Direct sum formula for parallel connected capacitors',
        hi: 'समानांतर क्रम में संधारित्रों का प्रत्यक्ष योग सूत्र',
        bn: 'প্যারালালে যুক্ত ক্যাপাসিটরের সরাসরি যোগফল সূত্র'
      }
    },
    {
      expression: 'Q1 = Q_total · [ C1 / C_eq ]',
      description: {
        en: 'Charge stored in capacitor C1 connected in parallel',
        hi: 'समानांतर में जुड़े C1 संधारित्र पर संचित आवेश',
        bn: 'প্যারালালে যুক্ত C1 ক্যাপাসিটরে সঞ্চিত চার্জ'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Power factor correction (PFC) capacitor banks in factories to boost VAR capacity',
      hi: 'कारखानों में पावर फैक्टर सुधारने हेतु कैपेसिटर बैंक जोड़ना',
      bn: 'শিল্প-কারখানায় পাওয়ার ফ্যাক্টর বৃদ্ধির জন্য প্যারালাল ক্যাপাসিটর ব্যাংক ব্যবহার'
    },
    {
      en: 'Power supply bulk decoupling (placing 100μF electrolytic in parallel with 0.1μF ceramic for wideband noise suppression)',
      hi: 'शोर दमन हेतु 100μF इलेक्ट्रोलाइटिक एवं 0.1μF सेरामिक का समानांतर उपयोग',
      bn: 'নয়েজ ফিল্টার করতে ১০০μF ইলেক্ট্রোলাইটিক ও ০.১μF সিরামিক ক্যাপাসিটরের প্যারালাল ডিকাপলিং'
    }
  ],
  importantPoints: {
    en: [
      'Equivalent parallel capacitance is ALWAYS GREATER than the largest individual capacitor in the group',
      'Never exceed the voltage rating of the weakest capacitor in a parallel bank',
      'Parallel capacitors provide a low-impedance path for high-frequency ripples'
    ],
    hi: [
      'तुल्य समानांतर धारिता हमेशा समूह के सबसे बड़े कैपेसिटर से भी अधिक होती है',
      'समानांतर बैंक में सबसे कमजोर कैपेसिटर की वोल्टेज रेटिंग से अधिक वोल्टेज न लगाएं',
      'समानांतर कैपेसिटर उच्च आवृत्ति रिपल के लिए कम प्रतिबाधा पथ प्रदान करते हैं'
    ],
    bn: [
      'প্যারালাল সংযোগের তুল্য ক্যাপাসিট্যান্স গ্রুপের বৃহত্তম ক্যাপাসিটরের চেয়েও সর্বদা বেশি হয়',
      'প্যারালাল ব্যাংকে সবচেয়ে দুর্বল ক্যাপাসিটরের নির্ধারিত ভোল্টেজের বেশি দেওয়া যাবে না',
      'প্যারালাল ক্যাপাসিটর উচ্চ ফ্রিকোয়েন্সির নয়েজ ফিল্টারিংয়ের জন্য চমৎকার বাইপাস পথ প্রদান করে'
    ]
  },
  commonMistakes: {
    en: [
      'Applying the parallel resistor reciprocal formula to capacitors; capacitors in parallel add directly!',
      'Assuming each parallel branch has a different voltage; voltage across all parallel branches is IDENTICAL'
    ],
    hi: [
      'कैपेसिटर पर समानांतर प्रतिरोधक का व्युत्क्रम सूत्र लगाना; समानांतर में कैपेसिटर सीधे जुड़ते हैं',
      'यह सोचना कि समानांतर में अलग-अलग वोल्टेज होगा; सभी पर वोल्टेज समान होता है'
    ],
    bn: [
      'রেজিস্টরের মতো বিপরীতানুপাতিক সূত্রে যাওয়া; ক্যাপাসিটর প্যারালালে সরাসরি যোগ হয়',
      'ভিন্ন ভোল্টেজ ড্রপ মনে করা; প্যারালাল সকল শাখায় ভোল্টেজ ঠিক সমান থাকে'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-7-1',
      question: {
        en: 'Four capacitors of 25 μF each are connected in parallel. The equivalent capacitance of the bank is:',
        hi: 'प्रत्येक 25 μF के चार संधारित्र समानांतर में जुड़े हैं। बैंक की तुल्य धारिता होगी:',
        bn: 'প্রতিটি 25 μF মানের চারটি ক্যাপাসিটর সমান্তরালে যুক্ত। সার্কিটের মোট ক্যাপাসিট্যান্স কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '6.25 μF', hi: '6.25 μF', bn: '6.25 μF' } },
        { id: 'opt-b', text: { en: '100 μF', hi: '100 μF', bn: '100 μF' } },
        { id: 'opt-c', text: { en: '50 μF', hi: '50 μF', bn: '50 μF' } },
        { id: 'opt-d', text: { en: '25 μF', hi: '25 μF', bn: '25 μF' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'C_eq = n · C = 4 · 25 μF = 100 μF.',
        hi: 'C_eq = 4 × 25 = 100 μF।',
        bn: 'C_eq = ৪ × ২৫ μF = ১০০ μF।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-7-1',
      question: {
        en: 'Two capacitors C1 = 40 μF and C2 = 60 μF are connected in parallel across a 120 V DC source. Calculate the total charge supplied by the source and the charge on C1.',
        hi: 'C1 = 40 μF एवं C2 = 60 μF के दो संधारित्र 120 V DC स्रोत के साथ समानांतर में जुड़े हैं। कुल आवेश तथा C1 पर आवेश की गणना करें।',
        bn: 'C1 = 40 μF এবং C2 = 60 μF এর দুটি ক্যাপাসিটর 120 V ডিসি উৎসে সমান্তরালে যুক্ত। মোট চার্জ এবং C1-এ সঞ্চিত চার্জ কত?'
      },
      hint: {
        en: 'C_eq = C1 + C2 = 100 μF. Then use Q_total = C_eq × V and Q1 = C1 × V.',
        hi: 'C_eq = 40 + 60 = 100 μF। फिर Q = C × V का प्रयोग करें।',
        bn: 'C_eq = ৪০ + ৬০ = ১০০ μF। এরপর Q = C × V সূত্র ব্যবহার করুন।'
      },
      answerKey: {
        en: 'Q_total = 100 μF × 120 V = 12,000 μC = 12 mC (0.012 C). Charge on C1: Q1 = 40 μF × 120 V = 4,800 μC = 4.8 mC.',
        hi: 'Q_total = 100 × 120 = 12 mC; Q1 = 40 × 120 = 4.8 mC.',
        bn: 'মোট চার্জ Q_total = ১০০ μF × ১২০ V = ১২ mC (0.012 C); C1-এ চার্জ Q1 = ৪০ μF × ১২০ V = ৪.৮ mC।'
      }
    }
  ]
};
