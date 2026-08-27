import { Lesson } from '../types';

export const LESSON_RC_CHARGING_TRANSIENT: Lesson = {
  id: 'lsn-ch7-rc-charging-transient',
  topicId: 'ch7-rc-charging-transient',
  chapterId: 'ch-capacitors',
  order: 9,
  title: {
    en: 'RC Circuit Charging Transient & Time Constant (τ = R·C)',
    hi: 'RC परिपथ चार्जिंग क्षणिक एवं समय स्थिरांक (τ = R·C)',
    bn: 'RC সার্কিট চার্জিং ট্রানজিয়েন্ট ও টাইম কনস্ট্যান্ট (τ = R·C)'
  },
  description: {
    en: 'Differential equation analysis of series RC charging, time constant τ = RC, exponential voltage rise v(t) = V(1 - e^(-t/τ)), and current decay i(t) = (V/R)e^(-t/τ).',
    hi: 'सीरीज RC चार्जिंग का अवकल समीकरण, समय स्थिरांक τ = RC, वोल्टेज वृद्धि v(t) = V(1 - e^(-t/τ)) एवं धारा क्षय।',
    bn: 'সিরিজ RC চার্জিং ডিফারেনশিয়াল সমীকরণ, টাইম কনস্ট্যান্ট τ = RC, সূচকীয় ভোল্টেজ বৃদ্ধি v(t) = V(1 - e^(-t/τ)) ও কারেন্ট হ্রাস।'
  },
  easyExplanation: {
    en: 'When you open a valve to fill an empty pressure tank through a narrow pipe, air rushes in very fast at first, and then slows down as the tank fills up. In an RC circuit, the capacitor charges rapidly in the first moments, and as its voltage builds up to fight the battery, the charging current gradually dies down to zero.',
    hi: 'जब आप एक पतले पाइप से खाली टंकी भरते हैं, तो शुरुआत में पानी तेजी से जाता है और टंकी भरने पर धीमा हो जाता है। RC परिपथ में कैपेसिटर शुरू में तेजी से चार्ज होता है और उसका वोल्टेज बढ़ने पर धारा धीरे-धीरे शून्य हो जाती है।',
    bn: 'একটি সরু পাইপ দিয়ে খালি ট্যাঙ্কে পানি ঢাললে শুরুতে খুব দ্রুত পানি প্রবেশ করে এবং ট্যাঙ্ক পূর্ণ হতে থাকলে গতি কমে আসে। RC সার্কিটেও শুরুতে ক্যাপাসিটর খুব দ্রুত চার্জ হয় এবং এর ভোল্টেজ যত বাড়ে, চার্জিং কারেন্ট তত কমে অবশেষে শূন্য হয়ে যায়।'
  },
  detailedExplanation: {
    en: `1. Series RC Charging Circuit:
Consider an initially uncharged capacitor C in series with a resistor R connected to a constant DC source V at switch closure t = 0.
Applying Kirchhoff's Voltage Law (KVL) around the loop for t ≥ 0:
V = v_R(t) + v_C(t)
V = R · i(t) + v_C(t)
Since i(t) = C · (dv_C / dt):
V = R · C · (dv_C / dt) + v_C(t)
This is a first-order linear differential equation.

2. Derivation of Voltage and Current Transient Equations:
Rearranging and integrating:
(dv_C) / (V - v_C) = dt / (R · C)
Integrating with initial condition v_C(0) = 0:
-ln(V - v_C) = (t / RC) + k => v_C(t) = V · (1 - e^(-t / RC))

Capacitor Charging Voltage:
v_C(t) = V · (1 - e^(-t / τ)) [Volts]

Capacitor Charging Current:
i(t) = (V / R) · e^(-t / τ) = I_max · e^(-t / τ) [Amperes]

Resistor Voltage:
v_R(t) = V · e^(-t / τ) [Volts]

3. Time Constant (τ = R · C):
The time constant τ (Tau) is defined as the time required for the capacitor voltage to rise to 63.2% (1 - 1/e) of its final steady-state value V:
τ = R · C [Seconds]
Where R is in Ohms (Ω) and C is in Farads (F).

Charging Milestones:
- At t = 1τ: v_C = 63.2% of V (i drops to 36.8%)
- At t = 2τ: v_C = 86.5% of V
- At t = 3τ: v_C = 95.0% of V
- At t = 4τ: v_C = 98.2% of V
- At t = 5τ: v_C = 99.3% of V (Practically considered fully charged in engineering!)`,
    hi: `1. सीरीज RC चार्जिंग परिपथ:
KVL समीकरण: V = R · i(t) + v_C(t) = R · C · (dv_C/dt) + v_C(t)

2. क्षणिक समीकरण:
- संधारित्र वोल्टेज: v_C(t) = V · (1 - e^(-t / τ))
- चार्जिंग धारा: i(t) = (V / R) · e^(-t / τ)

3. समय स्थिरांक (Time Constant, τ):
τ = R · C [सेकंड]
यह वह समय है जिसमें संधारित्र का वोल्टेज अपने अधिकतम मान के 63.2% तक पहुंच जाता है।
- 1τ = 63.2% चार्ज
- 2τ = 86.5% चार्ज
- 3τ = 95.0% चार्ज
- 5τ = 99.3% (इंजीनियरिंग में पूर्ण चार्ज माना जाता है)।`,
    bn: `১. সিরিজ RC চার্জিং সার্কিট:
KVL সমীকরণ: V = R · i(t) + v_C(t) = R · C · (dv_C/dt) + v_C(t)

২. ক্ষণস্থায়ী সমীকরণসমূহ:
- ক্যাপাসিটর ভোল্টেজ: v_C(t) = V · (1 - e^(-t / τ))
- চার্জিং কারেন্ট: i(t) = (V / R) · e^(-t / τ)

৩. টাইম কনস্ট্যান্ট (Time Constant, τ):
τ = R · C [সেকেন্ড]
টাইম কনস্ট্যান্ট হলো সেই সময় যাতে ক্যাপাসিটর ভোল্টেজ তার চূড়ান্ত মানের ৬৩.২% (63.2%) অর্জন করে।
- 1τ সময়ে: ৬৩.২% চার্জ
- 3τ সময়ে: ৯৫.০% চার্জ
- 5τ সময়ে: ৯৯.৩% চার্জ (প্রকৌশলে ৫τ সময়কে সম্পূর্ণ চার্জ হিসেবে ধরা হয়)।`
  },
  formulas: [
    {
      expression: 'τ = R · C',
      description: {
        en: 'RC circuit time constant in seconds (Ohms × Farads)',
        hi: 'RC परिपथ का समय स्थिरांक (सेकंड में)',
        bn: 'RC সার্কিটের টাইম কনস্ট্যান্ট (সেকেন্ড এককে)'
      }
    },
    {
      expression: 'v_C(t) = V · (1 - e^(-t / τ))',
      description: {
        en: 'Instantaneous charging voltage across capacitor',
        hi: 'संधारित्र पर तात्कालिक चार्जिंग वोल्टेज',
        bn: 'ক্যাপাসিটরের তাৎক্ষণিক চার্জিং ভোল্টেজ'
      }
    },
    {
      expression: 'i(t) = (V / R) · e^(-t / τ)',
      description: {
        en: 'Instantaneous charging current decay',
        hi: 'तात्कालिक चार्जिंग धारा क्षय',
        bn: 'তাৎক্ষণিক চার্জিং কারেন্ট হ্রাস'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Electronic timers, monostable multivibrators, and power-on reset (POR) circuits in microchips',
      hi: 'माइक्रोचिप्स में इलेक्ट्रॉनिक टाइमर और पावर-ऑन रीसेट (POR) परिपथ',
      bn: 'মাইক্রোপ্রসেসরে পাওয়ার-অন রিসেট (POR) এবং ইলেকট্রনিক টাইমার সার্কিট'
    },
    {
      en: 'Switch debouncing circuits to eliminate mechanical key bounce in keyboards and microcontrollers',
      hi: 'कीबोर्ड में स्विच बाउंस रोकने हेतु डीबाउंसिंग फिल्टर',
      bn: 'কিবোর্ড সুইচের মেকানিক্যাল বাউন্স দূরীকরণে RC ডিবাইন্সিং সার্কিট'
    }
  ],
  importantPoints: {
    en: [
      'At the instant switch is closed (t = 0), uncharged capacitor acts as a SHORT CIRCUIT (v_C = 0, i_max = V/R)',
      'After steady state (t ≥ 5τ), capacitor acts as an OPEN CIRCUIT (v_C = V, i = 0)',
      '1 Time Constant (1τ) always corresponds to 63.2% voltage growth from initial to final value'
    ],
    hi: [
      'स्विच ऑन करते ही (t = 0) कैपेसिटर शॉर्ट सर्किट की तरह कार्य करता है (i = V/R, v_C = 0)',
      'स्थिर अवस्था में (t ≥ 5τ) कैपेसिटर ओपन सर्किट बन जाता है (v_C = V, i = 0)',
      '1 टाइम कांस्टेंट में वोल्टेज सदैव 63.2% बढ़ता है'
    ],
    bn: [
      'সুইচ অন করার মুহূর্তে (t = 0) ক্যাপাসিটর শর্ট সার্কিট হিসেবে কাজ করে (i = V/R, v_C = 0)',
      'স্থির অবস্থায় (t ≥ 5τ) ক্যাপাসিটর ওপেন সার্কিট হিসেবে কাজ করে (v_C = V, i = 0)',
      '১টি টাইম কনস্ট্যান্ট (1τ) সময়ে ক্যাপাসিটর সর্বদা ৬৩.২% চার্জ পূর্ণ করে'
    ]
  },
  commonMistakes: {
    en: [
      'Thinking a capacitor is fully charged in 1 time constant (1τ is only 63.2%, 5τ is required for 99.3%)',
      'Confusing charging voltage formula 1 - e^(-t/τ) with current formula e^(-t/τ)'
    ],
    hi: [
      'यह सोचना कि 1 टाइम कांस्टेंट में कैपेसिटर 100% चार्ज हो जाता है (1τ में केवल 63.2% होता है, पूर्ण चार्ज 5τ में होता है)',
      'वोल्टेज सूत्र (1 - e^-t/τ) और धारा सूत्र (e^-t/τ) में भ्रमित होना'
    ],
    bn: [
      'মনে করা যে ১ টাইম কনস্ট্যান্টেই ক্যাপাসিটর পুরোপুরি চার্জ হয় (১τ তে মাত্র ৬৩.২% হয়, ৯৯.৩% হতে ৫τ লাগে)',
      'ভোল্টেজ সূত্র (1 - e^-t/τ) এবং কারেন্ট সূত্র (e^-t/τ)-এর মধ্যে গোলমাল করা'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-9-1',
      question: {
        en: 'A 10 kΩ resistor is connected in series with a 100 μF capacitor across a 24 V DC source. The time constant of the circuit is:',
        hi: 'एक 10 kΩ प्रतिरोधक 100 μF कैपेसिटर के साथ 24 V DC स्रोत से जुड़ा है। परिपथ का समय स्थिरांक है:',
        bn: 'একটি ১০ kΩ রোধ এবং ১০০ μF ক্যাপাসিটর ২৪ V ডিসি উৎসের সাথে সিরিজে যুক্ত। সার্কিটের টাইম কনস্ট্যান্ট কত?'
      },
      options: [
        { id: 'opt-a', text: { en: '1 millisecond', hi: '1 मिलीसेकंड', bn: '১ মিলি সেকেন্ড' } },
        { id: 'opt-b', text: { en: '1 second', hi: '1 सेकंड', bn: '১ সেকেন্ড' } },
        { id: 'opt-c', text: { en: '10 seconds', hi: '10 सेकंड', bn: '১০ সেকেন্ড' } },
        { id: 'opt-d', text: { en: '0.1 second', hi: '0.1 सेकंड', bn: '০.১ সেকেন্ড' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'τ = R · C = (10 × 10³ Ω) · (100 × 10⁻⁶ F) = 1.0 Second.',
        hi: 'τ = 10,000 × (100 × 10⁻⁶) = 1.0 सेकंड।',
        bn: 'τ = R · C = (১০,০০০ ওহম) × (১০০ × 10⁻⁶ ফ্যারাড) = ১.০ সেকেন্ড।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-9-1',
      question: {
        en: 'In an RC series circuit with R = 50 kΩ and C = 20 μF connected to a 100 V DC battery, calculate: (a) Time constant τ, (b) Initial charging current at t = 0, (c) Capacitor voltage after 1 second.',
        hi: 'R = 50 kΩ एवं C = 20 μF वाले RC परिपथ को 100 V DC स्रोत से जोड़ने पर गणना करें: (a) समय स्थिरांक τ, (b) t = 0 पर प्रारंभिक धारा, (c) 1 सेकंड बाद कैपेसिटर वोल्टेज।',
        bn: 'R = ৫০ kΩ এবং C = ২০ μF বিশিষ্ট একটি RC সার্কিট ১০০ V ডিসি ব্যাটারির সাথে যুক্ত হলে নির্ণয় করুন: (a) টাইম কনস্ট্যান্ট τ, (b) t = 0 তে প্রারম্ভিক কারেন্ট, (c) ১ সেকেন্ড পর ক্যাপাসিটর ভোল্টেজ।'
      },
      hint: {
        en: 'τ = RC = 1s. Then at t = 1s = 1τ, v_C = 63.2% of 100V.',
        hi: 'τ = RC = 1 सेकंड। t = 1s पर v_C = 63.2% ऑफ 100V।',
        bn: 'τ = RC = ১ সেকেন্ড। t = ১ সেকেন্ড সময়ে v_C = ১০০ ভোল্টের ৬৩.২%।'
      },
      answerKey: {
        en: '(a) τ = 50,000 Ω × 20 × 10⁻⁶ F = 1.0 s. (b) I_0 = V/R = 100 V / 50,000 Ω = 2 mA. (c) v_C(1s) = 100 × (1 - e⁻¹) = 100 × 0.6321 = 63.21 V.',
        hi: '(a) τ = 1.0 s, (b) I_0 = 2 mA, (c) v_C(1s) = 63.21 V.',
        bn: '(a) τ = ১.০ সেকেন্ড, (b) প্রারম্ভিক কারেন্ট I_0 = ২ mA, (c) ১ সেকেন্ড পর ভোল্টেজ = ৬৩.২১ V।'
      }
    }
  ]
};
