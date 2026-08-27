import { Lesson } from '../types';

export const LESSON_RL_TRANSIENT_GROWTH_DECAY: Lesson = {
  id: 'lsn-ch8-rl-transient-growth-decay',
  topicId: 'ch8-rl-transient-growth-decay',
  chapterId: 'ch-inductors',
  order: 11,
  title: {
    en: 'RL Circuit Transients, Current Growth, Decay & Time Constant (τ = L/R)',
    hi: 'RL परिपथ क्षणिक अवस्था, धारा वृद्धि, ह्रास एवं समय स्थिरांक (τ = L/R)',
    bn: 'RL সার্কিট ট্রানজিয়েন্ট, কারেন্ট বৃদ্ধি, হ্রাস ও টাইম কনস্ট্যান্ট (τ = L/R)'
  },
  description: {
    en: 'First-order RL series differential equation, transient growth of current i(t) = I_0(1 - e^(-t/τ)), transient decay of current i(t) = I_0 e^(-t/τ), time constant definition (τ = L/R), inductor voltage waveform v_L(t), and 5τ steady-state rule.',
    hi: 'प्रथम-कोटि RL अवकल समीकरण, धारा की वृद्धि i(t) = I_0(1 - e^(-t/τ)), धारा का ह्रास i(t) = I_0 e^(-t/τ), समय स्थिरांक τ = L/R, इंडक्टर वोल्टेज तरंग रूप एवं 5τ स्थायी अवस्था नियम।',
    bn: 'ফার্স্ট-অর্ডার RL ডিফারেনশিয়াল সমীকরণ, কারেন্ট বৃদ্ধি i(t) = I_0(1 - e^(-t/τ)), কারেন্ট হ্রাস i(t) = I_0 e^(-t/τ), টাইম কনস্ট্যান্ট τ = L/R, ইন্ডাক্টর ভোল্টেজ রেখাচিত্র ও 5τ নিয়ম।'
  },
  easyExplanation: {
    en: 'When you turn on a switch connected to an inductor and resistor, the current cannot jump instantly because the inductor pushes back with a back-EMF. Instead, current grows smoothly along a curved exponential path. The time constant τ = L/R dictates how fast or slow this buildup happens—reaching 99.3% in 5 time constants (5τ)!',
    hi: 'जब आप एक इंडक्टर और रेसिस्टर से जुड़े स्विच को ऑन करते हैं, तो धारा तुरंत अधिकतम नहीं हो सकती क्योंकि इंडक्टर बैक-EMF द्वारा इसका विरोध करता है। धारा धीरे-धीरे एक वक्राकार रूप में बढ़ती है। समय स्थिरांक τ = L/R यह तय करता है कि यह वृद्धि कितनी तेज होगी—5 समय स्थिरांक (5τ) में धारा 99.3% तक पहुँच जाती है!',
    bn: 'ইন্ডাক্টর ও রোধযুক্ত কোনো সার্কিটে সুইচ অন করলে কারেন্ট মুহূর্তের মধ্যে সর্বোচ্চ মানে পৌঁছাতে পারে না, কারণ ব্যাক-EMF একে বাধা দেয়। কারেন্ট সূচকীয় (exponential) বক্ররেখা বরাবর ধীরে ধীরে বৃদ্ধি পায়। টাইম কনস্ট্যান্ট τ = L/R নির্ধারণ করে এই প্রক্রিয়াটি কত দ্রুত ঘটবে—5τ সময়ে কারেন্ট ৯৯.৩% পৌঁছে যায়!'
  },
  detailedExplanation: {
    en: `1. Growth / Buildup of Current in Series RL Circuit:
Consider a series circuit with DC voltage source V, switch, resistor R, and inductor L.
Applying Kirchhoff's Voltage Law (KVL) at t ≥ 0:
V = v_R(t) + v_L(t) = R · i(t) + L · (di / dt)

Solving this first-order linear ordinary differential equation with initial condition i(0⁻) = 0:
i(t) = I_0 · [ 1 - e^(-t / τ) ] = (V / R) · [ 1 - e^(-t · R / L) ] [Amperes]

Inductor Terminal Voltage:
v_L(t) = L · (di / dt) = V · e^(-t / τ) [Volts]
- At t = 0⁺: Inductor acts as an OPEN CIRCUIT (i = 0, v_L = V).
- At t = ∞: Inductor acts as a SHORT CIRCUIT (i = V/R, v_L = 0 V).

2. The RL Time Constant (τ = L / R):
The time constant τ is the time required for the current to reach (1 - 1/e) ≈ 63.2% of its final steady-state value (I_0 = V/R):
τ = L / R [seconds]
- At t = 1τ: i(t) = 63.2% of I_0
- At t = 2τ: i(t) = 86.5% of I_0
- At t = 3τ: i(t) = 95.0% of I_0
- At t = 4τ: i(t) = 98.2% of I_0
- At t = 5τ: i(t) = 99.3% of I_0 (Considered full steady state in engineering).

3. Decay / Discharge of Current in Series RL Circuit:
When the DC source is disconnected and the energized inductor discharges its stored energy through resistor R:
0 = R · i(t) + L · (di / dt)
With initial current i(0) = I_0 = V/R:
i(t) = I_0 · e^(-t / τ) = (V / R) · e^(-t · R / L) [Amperes]

Inductor Voltage during decay:
v_L(t) = -V · e^(-t / τ) (Polarity reverses to maintain current flow!).
- At t = 1τ: Current drops to 36.8% of I_0.
- At t = 5τ: Current drops to under 0.7% (fully de-energized).`,
    hi: `1. RL परिपथ में धारा की वृद्धि (Current Growth):
i(t) = I₀ · [1 - e^(-t/τ)] = (V/R) · [1 - e^(-t·R/L)]
- t = 0 पर: इंडक्टर खुला परिपथ (Open Circuit) की तरह व्यवहार करता है (i = 0, v_L = V)।
- t = ∞ पर: इंडक्टर शॉर्ट सर्किट (Short Circuit) की तरह व्यवहार करता है (i = V/R, v_L = 0)।

2. समय स्थिरांक (Time Constant, τ):
τ = L / R [सेकंड]
- 1τ समय में: धारा 63.2% तक बढ़ती है।
- 5τ समय में: धारा 99.3% (पूर्ण स्थायी अवस्था) पर पहुँच जाती है।

3. धारा का ह्रास (Current Decay):
i(t) = I₀ · e^(-t/τ)
1τ में धारा घटकर 36.8% रह जाती है।`,
    bn: `১. RL সার্কিটে কারেন্টের বৃদ্ধি (Current Growth):
i(t) = I₀ · [1 - e^(-t/τ)] = (V/R) · [1 - e^(-t·R/L)]
- t = ০ মুহূর্তে: ইন্ডাক্টর ওপেন সার্কিট হিসেবে আচরণ করে (i = ০, v_L = V)।
- t = ∞ মুহূর্তে: ইন্ডাক্টর শর্ট সার্কিট হিসেবে আচরণ করে (i = V/R, v_L = ০)।

২. টাইম কনস্ট্যান্ট (Time Constant, τ):
τ = L / R [সেকেন্ড]
- ১τ সময়ে: কারেন্ট ৬৩.২% এ পৌঁছায়।
- ৫τ সময়ে: কারেন্ট ৯৯.৩% (সম্পূর্ণ স্টেডি স্টেট) এ পৌঁছায়।

৩. কারেন্টের হ্রাস (Current Decay):
i(t) = I₀ · e^(-t/τ)
১τ সময়ে কারেন্ট কমে মূল মানের ৩৬.৮% এ নেমে আসে।`
  },
  formulas: [
    {
      expression: 'i(t) = \\frac{V}{R} \\cdot (1 - e^{-t/\\tau})',
      description: {
        en: 'Current growth in series RL DC circuit',
        hi: 'RL परिपथ में धारा की वृद्धि समीकरण',
        bn: 'সিরিজ RL ডিসি সার্কিটে কারেন্ট বৃদ্ধির সমীকরণ'
      }
    },
    {
      expression: 'i(t) = I_0 \\cdot e^{-t/\\tau}',
      description: {
        en: 'Current decay in series RL circuit',
        hi: 'RL परिपथ में धारा के ह्रास की समीकरण',
        bn: 'সিরিজ RL সার্কিটে কারেন্ট হ্রাসের সমীকরণ'
      }
    },
    {
      expression: '\\tau = \\frac{L}{R}',
      description: {
        en: 'Time constant of an RL inductive circuit in seconds',
        hi: 'RL परिपथ का समय स्थिरांक (सेकंड में)',
        bn: 'RL সার্কিটের টাইম কনস্ট্যান্ট (সেকেন্ডে)'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A 2.5 Henry inductor with winding resistance 50 Ω is connected across a 100 V DC power supply at t = 0. Calculate: (a) Time constant τ, (b) Final steady-state current I_0, (c) Current at t = 50 ms, and (d) Time taken to reach 99% of final current.',
        hi: '2.5 H का इंडक्टर (प्रतिरोध 50 Ω) t = 0 पर 100 V DC से जोड़ा जाता है। ज्ञात करें: (a) समय स्थिरांक τ, (b) स्थायी धारा I_0, (c) t = 50 ms पर धारा, एवं (d) 99% तक पहुँचने का समय।',
        bn: '৫০ Ω রোধ বিশিষ্ট একটি ২.৫ H ইন্ডাক্টরকে t = ০ মুহূর্তে ১০০ V ডিসি উৎসের সাথে যুক্ত করা হলো। নির্ণয় করো: (a) টাইম কনস্ট্যান্ট τ, (b) চূড়ান্ত কারেন্ট I_0, (c) t = ৫০ ms এ কারেন্ট এবং (d) ৯৯% কারেন্টে পৌঁছাতে প্রয়োজনীয় সময়।'
      },
      solution: {
        en: `Given:
L = 2.5 H, R = 50 Ω, V = 100 V

(a) Time constant τ:
τ = L / R = 2.5 / 50 = 0.050 seconds = 50 milliseconds (ms).

(b) Final steady-state current I_0:
I_0 = V / R = 100 V / 50 Ω = 2.00 Amperes.

(c) Current at t = 50 ms (which is exactly t = 1τ):
i(1τ) = I_0 · (1 - e⁻¹) = 2.00 × (1 - 0.3679) = 2.00 × 0.6321 = 1.264 A.

(d) Time to reach 99% of final current:
0.99 = 1 - e^(-t/τ)  ==>  e^(-t/τ) = 0.01
-t/τ = ln(0.01) = -4.605
t = 4.605 × τ = 4.605 × 50 ms = 230.25 ms (approx 4.6τ to 5τ).`,
        hi: `(a) τ = L/R = 2.5 / 50 = 0.05 s = 50 ms
(b) I_0 = 100 / 50 = 2.00 A
(c) t = 1τ पर i = 2.00 × 0.632 = 1.264 A
(d) t = 4.605 × 50 ms = 230.25 ms।`,
        bn: `(a) τ = L/R = ২.৫ / ৫০ = ০.০৫ সেকেন্ড = ৫০ ms
(b) I_0 = ১০০ / ৫০ = ২.০০ A
(c) t = ১τ এ i = ২.০০ × ০.৬৩২ = ১.২৬৪ A
(d) t = ৪.৬০৫ × ৫০ ms = ২৩০.২৫ ms।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'At the exact instant a DC voltage switch is closed (t = 0⁺) across an unenergized series RL circuit, what is the initial current through the inductor?',
        hi: 'एक अनारक्षित श्रेणी RL परिपथ में DC स्विच बंद करने के ठीक क्षण (t = 0⁺) पर इंडक्टर से बहने वाली प्रारंभिक धारा क्या होती है?',
        bn: 'একটি সিরিজ RL ডিসি সার্কিটে সুইচ অন করার ঠিক প্রথম মুহূর্তে (t = 0⁺) ইন্ডাক্টরের মধ্য দিয়ে প্রবাহিত কারেন্ট কত?'
      },
      options: {
        en: ['Zero (0 Amperes)', 'Maximum (V / R)', 'Infinity (Short circuit surge)', 'V / L'],
        hi: ['शून्य (0 A)', 'अधिकतम (V / R)', 'अनंत', 'V / L'],
        bn: ['শূন্য (০ অ্যাম্পিয়ার)', 'সর্বোচ্চ (V / R)', 'অসীম', 'V / L']
      },
      correctAnswer: 0,
      explanation: {
        en: 'Because current through an inductor cannot change instantaneously (i(0⁺) = i(0⁻) = 0), the inductor behaves as an open circuit with zero current.',
        hi: 'इंडक्टर में धारा अचानक नहीं बदल सकती (i(0⁺) = 0), इसलिए यह खुले परिपथ (Open circuit) की तरह शून्य धारा प्रदर्शित करता है।',
        bn: 'ইন্ডাক্টরের কারেন্ট তাৎক্ষণিকভাবে পরিবর্তিত হতে পারে না (i(0⁺) = ০), তাই শুরুতে এটি ওপেন সার্কিট হিসেবে শূন্য কারেন্ট নির্দেশ করে।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'RL Time Constant (τ)',
        hi: 'RL समय स्थिरांक (τ)',
        bn: 'RL টাইম কনস্ট্যান্ট (τ)'
      },
      definition: {
        en: 'τ = L / R (seconds). The time required for inductor current to rise to 63.2% of its maximum steady-state value.',
        hi: 'τ = L / R (सेकंड)। इंडक्टर धारा के अपने अधिकतम मान के 63.2% तक पहुँचने में लगा समय।',
        bn: 'τ = L / R (সেকেন্ড)। ইন্ডাক্টরের কারেন্ট সর্বোচ্চ মানের ৬৩.২% এ পৌঁছাতে প্রয়োজনীয় সময়।'
      }
    }
  ]
};
