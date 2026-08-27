import { Lesson } from '../types';

export const LESSON_CAPACITANCE_FUNDAMENTALS: Lesson = {
  id: 'lsn-ch7-capacitance-fundamentals',
  topicId: 'ch7-capacitance-fundamentals',
  chapterId: 'ch-capacitors',
  order: 2,
  title: {
    en: 'Capacitance Concept, Definition & Working Principle',
    hi: 'धारिता (कैपेसिटेंस) की संकल्पना एवं कार्य सिद्धांत',
    bn: 'ক্যাপাসিট্যান্সের মূল ধারণা, সংজ্ঞা ও কার্যপ্রণালী'
  },
  description: {
    en: 'Definition of capacitance, Farad unit, charge-voltage relationship (Q = C·V), current-voltage relation (i = C·dv/dt), and electrostatic energy storage.',
    hi: 'कैपेसिटेंस की परिभाषा, फैराड इकाई, आवेश-वोल्टेज संबंध (Q = C·V), धारा-वोल्टेज संबंध (i = C·dv/dt) एवं ऊर्जा संचयन।',
    bn: 'ক্যাপাসিট্যান্সের সংজ্ঞা, ফ্যারাড একক, আধান-ভোল্টেজ সমীকরণ (Q = C·V), কারেন্ট-ভোল্টেজ সম্পর্ক (i = C·dv/dt) ও শক্তি সঞ্চয়।'
  },
  easyExplanation: {
    en: 'A capacitor acts like a small rechargeable electrostatic tank. Just as a water tank stores water when water pressure is applied, a capacitor stores electric charge on its metal plates when an electric voltage (pressure) is applied across it.',
    hi: 'कैपेसिटर एक छोटे रिचार्जेबल स्थिरवैद्युत टैंक की तरह कार्य करता है। जैसे पानी का टैंक दबाव से पानी संचित करता है, वैसे ही कैपेसिटर वोल्टेज लगाने पर अपनी धातु की प्लेटों पर विद्युत आवेश संचित करता है।',
    bn: 'ক্যাপাসিটর হলো একটি ক্ষুদ্র রিচার্জেবল স্থিরবৈদ্যুতিক ট্যাঙ্কের মতো। যেমন পানির চাপ প্রয়োগ করলে জলের ট্যাঙ্কে জল জমা হয়, তেমনই ক্যাপাসিটরের দুই প্রান্তে ভোল্টেজ প্রয়োগ করলে এর ধাতব প্লেটে তড়িৎ আধান জমা হয়।'
  },
  detailedExplanation: {
    en: `1. Definition of Capacitance (C):
Capacitance is the electrostatic property of a capacitor (or pair of conductors) to store electric charge per unit potential difference established between them:
C = Q / V [Farads, F]
Where:
- Q = Charge stored on each plate in Coulombs (C)
- V = Potential difference between plates in Volts (V)
- C = Capacitance in Farads (F)

2. The Farad (F) Unit:
A capacitor has a capacitance of 1 Farad if a charge of 1 Coulomb creates a potential difference of 1 Volt across its terminals:
1 Farad = 1 Coulomb / 1 Volt = 1 C/V.
Because 1 Farad is an exceptionally large unit for electronics, common subdivisions are:
- Microfarad (μF) = 10⁻⁶ F
- Nanofarad (nF) = 10⁻⁹ F
- Picofarad (pF) = 10⁻¹² F (often called 'puff' in legacy radio engineering)

3. Dynamic Current-Voltage Equation:
Electric current is the rate of flow of charge (i = dq/dt). Differentiating Q = C·V with respect to time:
i(t) = C · (dv / dt)
Key physical consequences of this relationship:
- If voltage is constant (DC steady state), dv/dt = 0, meaning i = 0 (Capacitor blocks steady DC!).
- Voltage across a capacitor CANNOT change instantaneously; an instantaneous jump in voltage would require infinite charging current (i = ∞), which is physically impossible.

4. Charging Mechanism:
When connected to a DC source, free electrons are pulled from the positive plate and deposited onto the negative plate by the battery EMF, establishing an internal electric field (E) in the dielectric until the capacitor voltage equals the source voltage (V_c = V_s).`,
    hi: `1. कैपेसिटेंस (धारिता) की परिभाषा:
किसी संधारित्र द्वारा प्रति इकाई विभवांतर पर विद्युत आवेश संचित करने की क्षमता को उसकी धारिता (C) कहते हैं:
C = Q / V [फैराड, F]

2. फैराड इकाई (Farad Unit):
यदि 1 वोल्ट का विभवांतर उत्पन्न करने के लिए 1 कूलॉम आवेश की आवश्यकता हो, तो संधारित्र की धारिता 1 फैराड होती है।
व्यावहारिक इकाइयां:
- 1 μF = 10⁻⁶ F (माइक्रोफैराड)
- 1 nF = 10⁻⁹ F (नैनोफैराड)
- 1 pF = 10⁻¹² F (पिकोफैराड)

3. गतिशील धारा-वोल्टेज संबंध (Dynamic i-v Relation):
i(t) = C · (dv / dt)
- स्थिर DC अवस्था में dv/dt = 0 होता है, अतः संधारित्र DC को ब्लॉक करता है (ओपन सर्किट की तरह)।
- संधारित्र के आर-पार वोल्टेज में अचानक (तात्कालिक) परिवर्तन संभव नहीं है, क्योंकि इसके लिए अनंत धारा (i = ∞) की आवश्यकता होगी।`,
    bn: `১. ক্যাপাসিট্যান্সের (ধারকত্ব) সংজ্ঞা:
কোনো পরিবাহী বা ক্যাপাসিটরের প্রতি একক বিভব পার্থক্যের জন্য যে পরিমাণ তড়িৎ আধান সঞ্চিত হতে পারে তাকে তার ক্যাপাসিট্যান্স (C) বলে:
C = Q / V [ফ্যারাড, F]

২. ফ্যারাড একক (Farad Unit):
কোনো পরিবাহীতে ১ ভোল্ট বিভব পার্থক্য তৈরি করতে যদি ১ কুলম্ব আধানের প্রয়োজন হয়, তবে তার ক্যাপাসিট্যান্স ১ ফ্যারাড:
১ ফ্যারাড = ১ কুলম্ব / ১ ভোল্ট।
ব্যবহারিক এককসমূহ:
- ১ μF (মাইক্রোফ্যারাড) = 10⁻⁶ F
- ১ nF (ন্যানোফ্যারাড) = 10⁻⁹ F
- ১ pF (পিকোফ্যারাড) = 10⁻¹² F

৩. কারেন্ট-ভোল্টেজ গতিশীল সমীকরণ:
i(t) = C · (dv / dt)
- স্থির DC অবস্থায় dv/dt = 0 হওয়ায় ক্যাপাসিটরের মধ্য দিয়ে কোনো কারেন্ট প্রবাহিত হয় না (DC ব্লক করে)।
- ক্যাপাসিটরের আড়াআড়ি ভোল্টেজ তাৎক্ষণিকভাবে হঠাৎ পরিবর্তিত হতে পারে না, কারণ এতে অসীম কারেন্টের প্রয়োজন হবে।`
  },
  formulas: [
    {
      expression: 'C = Q / V',
      description: {
        en: 'Fundamental capacitance definition in Farads',
        hi: 'फैराड में मूलभूत धारिता परिभाषा',
        bn: 'ক্যাপাসিট্যান্সের মূল সংজ্ঞা'
      }
    },
    {
      expression: 'i(t) = C · (dv / dt)',
      description: {
        en: 'Instantaneous capacitor current related to rate of voltage change',
        hi: 'वोल्टेज परिवर्तन दर के सापेक्ष तात्कालिक धारा',
        bn: 'ভোল্টেজ পরিবর্তনের হারের সাথে তাৎক্ষণিক কারেন্ট'
      }
    },
    {
      expression: 'v(t) = (1 / C) · ∫ i(t) dt + v(0)',
      description: {
        en: 'Capacitor voltage as integral of current over time',
        hi: 'समय के सापेक्ष धारा के समाकलन के रूप में वोल्टेज',
        bn: 'কারেন্টের ইন্টিগ্রেশনের মাধ্যমে ক্যাপাসিটর ভোল্টেজ'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Smoothing ripples from rectified DC in power supply units',
      'Coupling AC audio signals between amplifier stages while blocking DC bias',
      'Oscillator timing and clock generation circuits in microcontrollers (555 Timer, RC clocks)'
    ],
    hi: [
      'पावर सप्लाई में रेक्टिफायर आउटपुट से रिपल को स्मूथ करना',
      'डीसी बायस को रोकते हुए एम्पलीफायर चरणों के बीच एसी ऑडियो सिग्नल पास करना',
      'माइक्रोकंट्रोलर एवं 555 टाइमर में क्लॉक और दोलन उत्पन्न करना'
    ],
    bn: [
      'পাওয়ার সাপ্লাইতে রেকটিফায়ার আউটপুটের রিপল ফিল্টার করা',
      'ডিসি ভোল্টেজ ব্লক করে কেবল এসি অডিও সংকেত পরবর্তী স্টেজে পাঠানো',
      '৫৫৫ টাইমার ও মাইক্রোকন্ট্রোলারে টাইমিং ও অসিলেটর ফ্রিকোয়েন্সি তৈরি'
    ]
  },
  importantPoints: {
    en: [
      'A fully charged capacitor acts as an OPEN CIRCUIT to steady DC',
      'An uncharged capacitor acts as a SHORT CIRCUIT at the very instant of switch closure (t = 0+)',
      'The energy in a capacitor is stored in the electrostatic field established inside the dielectric material'
    ],
    hi: [
      'पूर्ण आवेशित कैपेसिटर स्थिर डीसी के लिए ओपन सर्किट (Open Circuit) की भांति कार्य करता है',
      'स्विच ऑन करते ही (t = 0+) एक अनावेशित कैपेसिटर शॉर्ट सर्किट की तरह व्यवहार करता है',
      'कैपेसिटर में ऊर्जा डाइइलेक्ट्रिक माध्यम के अंदर स्थिरवैद्युत क्षेत्र के रूप में संचित होती है'
    ],
    bn: [
      'সম্পূর্ণ চার্জ হওয়া ক্যাপাসিটর স্থির ডিসি (DC)-র জন্য ওপেন সার্কিট হিসেবে কাজ করে',
      'সুইচ অন করার প্রথম মুহূর্তে (t = 0+) একটি ডিসচার্জড ক্যাপাসিটর শর্ট সার্কিটের মতো আচরণ করে',
      'ক্যাপাসিটরে শক্তি ডাই-ইলেকট্রিক মাধ্যমের স্থিরতড়িৎ ক্ষেত্রে সঞ্চিত থাকে'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming current flows physically through the dielectric; it is a displacement current caused by charge accumulation',
      'Believing a capacitor holds a net charge; total net charge of a capacitor is always ZERO (+Q on one plate, -Q on the other)'
    ],
    hi: [
      'यह मानना कि धारा डाइइलेक्ट्रिक के आर-पार बहती है; वास्तव में यह प्लेटों पर आवेश संचयन के कारण विस्थापन धारा है',
      'यह सोचना कि कैपेसिटर पर शुद्ध आवेश होता है; पूरे कैपेसिटर का कुल शुद्ध आवेश सदैव शून्य होता है (+Q और -Q)'
    ],
    bn: [
      'মনে করা যে কারেন্ট ডাই-ইলেকট্রিকের ভেতর দিয়ে প্রবাহিত হয়; এটি মূলত প্লেটে আধান জমার কারণে সৃষ্ট ডিসপ্লেসমেন্ট কারেন্ট',
      'ক্যাপাসিটরে নিট চার্জ আছে মনে করা; একটি ক্যাপাসিটরের মোট নিট আধান সর্বদা শূন্য (+Q ও -Q)'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-2-1',
      question: {
        en: 'A 50 μF capacitor is connected across a constant 100 V DC source. After reaching steady state, the current drawn is:',
        hi: 'एक 50 μF का संधारित्र 100 V के स्थिर DC स्रोत से जुड़ा है। स्थिर अवस्था प्राप्त होने के बाद प्रवाहित धारा होगी:',
        bn: 'একটি 50 μF ক্যাপাসিটর 100 V ডিসি উৎসের সাথে যুক্ত। স্থির অবস্থায় (Steady State) সার্কিটের কারেন্ট কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '5 A', hi: '5 A', bn: '5 A' } },
        { id: 'opt-b', text: { en: '0 A', hi: '0 A', bn: '0 A' } },
        { id: 'opt-c', text: { en: '0.5 A', hi: '0.5 A', bn: '0.5 A' } },
        { id: 'opt-d', text: { en: 'Infinite', hi: 'अनंत', bn: 'অসীম' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'In DC steady state, voltage is constant (dv/dt = 0), so i = C(dv/dt) = 0 A. The capacitor acts as an open circuit.',
        hi: 'स्थिर DC अवस्था में dv/dt = 0 होता है, अतः i = C(dv/dt) = 0 A। संधारित्र ओपन सर्किट बन जाता है।',
        bn: 'স্থির ডিসিতে ভোল্টেজ ধ্রুবক থাকায় dv/dt = 0, ফলে i = C(dv/dt) = 0 A। ক্যাপাসিটর ওপেন সার্কিটের মতো আচরণ করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-2-1',
      question: {
        en: 'Calculate the charge stored on a 220 μF capacitor charged to a potential difference of 50 V.',
        hi: '50 V विभवांतर तक आवेशित 220 μF संधारित्र पर संचित आवेश की गणना करें।',
        bn: '50 V বিভব পার্থক্যে চার্জ করা একটি 220 μF ক্যাপাসিটরে মোট কত চার্জ সঞ্চিত হবে?'
      },
      hint: {
        en: 'Use Q = C × V, remembering 1 μF = 10⁻⁶ F.',
        hi: 'Q = C × V का प्रयोग करें (1 μF = 10⁻⁶ F)।',
        bn: 'Q = C × V সূত্র ব্যবহার করুন (1 μF = 10⁻⁶ F)।'
      },
      answerKey: {
        en: 'Q = 220 × 10⁻⁶ F × 50 V = 0.011 Coulombs (11 mC).',
        hi: 'Q = 220 × 10⁻⁶ × 50 = 0.011 C (11 mC).',
        bn: 'Q = 220 × 10⁻⁶ F × 50 V = 0.011 কুলম্ব (11 mC)।'
      }
    }
  ]
};
