import { Lesson } from '../types';

export const LESSON_INDUCTANCE_CAPACITANCE: Lesson = {
  id: 'lsn-ch3-inductance-capacitance',
  topicId: 'ch3-inductance-capacitance',
  order: 15,
  title: {
    en: 'Inductance & Capacitance Measurement',
    hi: 'प्रेरकत्व एवं धारिता मापन (Inductance & Capacitance Measurement)',
    bn: 'ইনডাক্ট্যান্স ও ক্যাপাসিট্যান্স পরিমাপ (Inductance & Capacitance Measurement)'
  },
  easyExplanation: {
    en: 'Inductors (L) and Capacitors (C) store energy in magnetic and electric fields respectively. In AC circuits, they offer frequency-dependent opposition called reactance ($X_L$ and $X_C$). AC bridges (like Maxwell and Schering bridges) and modern LCR meters measure L and C with high accuracy!',
    hi: 'इंडक्टर (L) और कैपेसिटर (C) क्रमशः चुंबकीय और विद्युत क्षेत्रों में ऊर्जा जमा करते हैं। एसी परिपथों में, वे आवृत्ति पर निर्भर विरोध की पेशकश करते हैं जिसे रिएक्टेंस ($X_L$ और $X_C$) कहा जाता है। एसी ब्रिज और आधुनिक LCR मीटर उच्च सटीकता के साथ L और C को मापते हैं!',
    bn: 'ইনডাক্টর (L) ম্যাগনেটিক ফিল্ডে এবং ক্যাপাসিটর (C) ইলেকট্রিক ফিল্ডে শক্তি জমা রাখে। এসি সার্কিটে এগুলো ফ্রিকোয়েন্সি নির্ভর বাধা বা রিঅ্যাকট্যান্স ($X_L$ ও $X_C$) প্রদান করে। এসি ব্রিজ ও আধুনিক LCR মিটার অত্যন্ত নিখুঁতভাবে L ও C এর মান মেপে দেয়!'
  },
  detailedExplanation: {
    en: 'Inductance and capacitance are fundamental reactive components in AC electrical engineering.\n\n1. Reactance & Impedance Principles:\n   • Inductive Reactance: $X_L = 2\\pi f L\\,\\Omega$ (increases linearly with frequency $f$).\n   • Capacitive Reactance: $X_C = \\frac{1}{2\\pi f C}\\,\\Omega$ (decreases inversely with frequency $f$).\n   • SI Units:\n     - Inductance $L$: Henry (H), millihenry ($1\\text{ mH} = 10^{-3}\\text{ H}$), microhenry ($1\\ \\mu\\text{H} = 10^{-6}\\text{ H}$).\n     - Capacitance $C$: Farad (F), microfarad ($1\\ \\mu\\text{F} = 10^{-6}\\text{ F}$), nanofarad ($1\\text{ nF} = 10^{-9}\\text{ F}$), picofarad ($1\\text{ pF} = 10^{-12}\\text{ F}$).\n\n2. AC Bridge Balance Principle:\n   • Powered by AC oscillator source ($V_s\\angle 0^\\circ$). Null detector is an AC vibration galvanometer or headphones.\n   • Four complex impedance arms $Z_1, Z_2, Z_3, Z_4$.\n   • Balance condition: $Z_1 Z_4 = Z_2 Z_3 \\implies |Z_1||Z_4| = |Z_2||Z_3|$ and $(\\theta_1 + \\theta_4) = (\\theta_2 + \\theta_3)$.\n\n3. Inductance Measurement Bridges:\n   a) Maxwell Bridge: Measures medium-Q coils ($1 < Q < 10$) by comparing coil inductance $L_x$ with a standard capacitor $C_4$.\n      - $L_x = R_2 R_3 C_4$ and $R_x = \\frac{R_2 R_3}{R_4}$.\n   b) Hay Bridge: Best for high-Q coils ($Q > 10$). Standard capacitor $C_4$ is connected in series with $R_4$.\n      - $L_x = \\frac{R_2 R_3 C_4}{1 + (1/Q^2)}$ where $Q = \\omega L_x / R_x$.\n   c) Anderson Bridge: Highly accurate measurement of inductance using a fixed standard capacitor $C$.\n\n4. Capacitance Measurement Bridges:\n   a) Schering Bridge: Standard bridge for measuring capacitance $C_x$ and dielectric loss / dissipation factor $\\tan \\delta = \\omega R_x C_x$.\n      - $C_x = C_2 \\left(\\frac{R_4}{R_3}\\right)$ and $R_x = R_3 \\left(\\frac{C_4}{C_2}\\right)$.\n   b) Wien Bridge: Measures capacitance and source frequency $f$.\n\n5. Modern LCR Meter:\n   Digital instruments applying auto-balancing AC bridge or phase-sensitive I-V vector techniques to display L, C, R, Q (Quality factor), and D (Dissipation factor) directly on LCD screens.',
    hi: 'प्रेरकत्व और धारिता मापन सिद्धांत:\n\n1. रिएक्टेंस सूत्र:\n   • प्रेरकत्व रिएक्टेंस: $X_L = 2\\pi f L\\,\\Omega$।\n   • धारिता रिएक्टेंस: $X_C = \\frac{1}{2\\pi f C}\\,\\Omega$।\n\n2. एसी ब्रिज संतुलन नियम: $Z_1 Z_4 = Z_2 Z_3$।\n\n3. इंडक्टेंस माप ब्रिज:\n   a) मैक्सवेल ब्रिज: माध्यम Q कॉइल ($1 < Q < 10$) हेतु ($L_x = R_2 R_3 C_4$)।\n   b) हे ब्रिज (Hay Bridge): उच्च Q कॉइल ($Q > 10$) हेतु।\n\n4. कैपेसिटेंस माप ब्रिज:\n   a) शेरिंग ब्रिज (Schering Bridge): कैपेसिटेंस $C_x$ और इंसुलेशन परावैद्युत हानि (Dissipation factor $\\tan \\delta$) मापने हेतु।\n\n5. LCR मीटर: सीधे एल, सी, आर, Q-फैक्टर प्रदर्शित करता है।',
    bn: 'ইনডাক্ট্যান্স ও ক্যাপাসিট্যান্স পরিমাপের মূলনীতি:\n\n১. রিঅ্যাকট্যান্স সমীকরণ:\n   • ইনডাক্টিভ রিঅ্যাকট্যান্স: $X_L = 2\\pi f L\\,\\Omega$।\n   • ক্যাপাসিটিভ রিঅ্যাকট্যান্স: $X_C = \\frac{1}{2\\pi f C}\\,\\Omega$।\n\n২. এসি ব্রিজের সাম্যাবস্থা: $Z_1 Z_4 = Z_2 Z_3$।\n\n৩. ইনডাক্ট্যান্স পরিমাপক ব্রিজ:\n   ক) ম্যাক্সওয়েল ব্রিজ: মাঝারি Q কয়েল মাপতে ($L_x = R_2 R_3 C_4$)।\n   খ) হে ব্রিজ (Hay Bridge): উচ্চ Q কয়েলের জন্য ($Q > ১০$)।\n\n৪. ক্যাপাসিট্যান্স পরিমাপক ব্রিজ:\n   ক) শেরিং ব্রিজ (Schering Bridge): ক্যাপাসিট্যান্স ও ডাইইলেকট্রিক লস factor ($\x5Ctan \\delta$) মাপার স্ট্যান্ডার্ড পদ্ধতি।\n\n৫. LCR মিটার: ডিজিটাল স্ক্রিনে সরাসরি L, C, R ও Q-মান প্রদর্শন করে।'
  },
  formulas: [
    {
      symbol: 'X_L',
      expression: 'X_L = 2\\pi f L',
      description: {
        en: 'Inductive Reactance (Ω) = 2 × π × Frequency f × Inductance L',
        hi: 'प्रेरकत्व रिएक्टेंस (Ω) = 2 × π × आवृत्ति f × प्रेरकत्व L',
        bn: 'ইনডাক্টিভ রিঅ্যাকট্যান্স (Ω) = ২ × π × ফ্রিকোয়েন্সি f × ইনডাক্ট্যান্স L'
      }
    },
    {
      symbol: 'X_C',
      expression: 'X_C = \\frac{1}{2\\pi f C}',
      description: {
        en: 'Capacitive Reactance (Ω) = 1 / (2 × π × Frequency f × Capacitance C)',
        hi: 'धारिता रिएक्टेंस (Ω) = 1 / (2 × π × आवृत्ति f × धारिता C)',
        bn: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স (Ω) = ১ / (২ × π × ফ্রিকোয়েন্সি f × ক্যাপাসিট্যান্স C)'
      }
    },
    {
      symbol: 'L_x(\\text{Maxwell})',
      expression: 'L_x = R_2 R_3 C_4 \\quad \\text{and} \\quad R_x = \\frac{R_2 R_3}{R_4}',
      description: {
        en: 'Maxwell Bridge Inductance formula using standard capacitor C4',
        hi: 'मानक कैपेसिटर C4 का उपयोग करने वाला मैक्सवेल ब्रिज इंडक्टेंस सूत्र',
        bn: 'স্ট্যান্ডার্ড ক্যাপাসিটর C4 এর সাপেক্ষে ম্যাক্সওয়েল ব্রিজের ইনডাক্ট্যান্স সূত্র'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-lc-meter-bridge',
      title: {
        en: 'General Impedance AC Bridge and Maxwell Bridge Diagram',
        hi: 'सामान्य प्रतिबाधा एसी ब्रिज और मैक्सवेल ब्रिज आरेख',
        bn: 'সাধারণ এসি ইমপিডেন্স ব্রিজ ও ম্যাক্সওয়েল ব্রিজ ডায়াগ্রাম'
      },
      caption: {
        en: 'AC excitation source feeding 4 complex impedance arms with AC null detector.',
        hi: 'एसी नल डिटेक्टर के साथ 4 जटिल प्रतिबाधा भुजाओं को फीड करने वाला एसी स्रोत।',
        bn: 'এসি সোর্স ও এসি নাল ডিটেক্টরসহ ৪-বাহুর ইমপিডেন্স ব্রিজ সার্কিট।'
      },
      svgType: 'lc-meter-bridge'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-lc-1',
      problem: {
        en: 'An AC circuit operates at frequency $f = 50\\text{ Hz}$. It contains an inductor $L = 100\\text{ mH}$ and a capacitor $C = 10\\ \\mu\\text{F}$. Calculate:\n1) Inductive Reactance ($X_L$)\n2) Capacitive Reactance ($X_C$)\n3) The resonant frequency ($f_r$) at which $X_L = X_C$.',
        hi: 'एक एसी सर्किट आवृत्ति $f = 50\\text{ Hz}$ पर काम करता है। इसमें एक इंडक्टर $L = 100\\text{ mH}$ और एक कैपेसिटर $C = 10\\ \\mu\\text{F}$ है। गणना करें:\n1) प्रेरकत्व रिएक्टेंस ($X_L$)\n2) धारिता रिएक्टेंस ($X_C$)\n3) अनुनादी आवृत्ति ($f_r$) जिस पर $X_L = X_C$।',
        bn: 'একটি এসি সার্কিটে $f = ৫০\\text{ Hz}$, $L = ১০০\\text{ mH}$ এবং $C = ১০\\ \\mu\\text{F}$। বের করো:\n১) ইনডাক্টিভ রিঅ্যাকট্যান্স ($X_L$)\n২) ক্যাপাসিটিভ রিঅ্যাকট্যান্স ($X_C$)\n৩) রেজোন্যান্ট ফ্রিকোয়েন্সি ($f_r$) যেখানে $X_L = X_C$।'
      },
      givenValues: {
        'f': '50 Hz',
        'L': '100 mH = 0.1 H',
        'C': '10 μF = 10⁻⁵ F'
      },
      solution: {
        en: '1) $X_L = 2\\pi f L = 2 \\times 3.1416 \\times 50 \\times 0.1 = 31.416\\,\\Omega$.\n2) $X_C = \\frac{1}{2\\pi f C} = \\frac{1}{2 \\times 3.1416 \\times 50 \\times 10^{-5}} = \\frac{1}{0.0031416} = 318.31\\,\\Omega$.\n3) $f_r = \\frac{1}{2\\pi \\sqrt{L C}} = \\frac{1}{2 \\times 3.1416 \\times \\sqrt{0.1 \\times 10^{-5}}} = \\frac{1}{6.2832 \\times 10^{-3}} = 159.15\\text{ Hz}$.',
        hi: '1) $X_L = 2 \\times 3.1416 \\times 50 \\times 0.1 = 31.42\\,\\Omega$।\n2) $X_C = \\frac{1}{2 \\times 3.1416 \\times 50 \\times 10^{-5}} = 318.31\\,\\Omega$।\n3) $f_r = \\frac{1}{2\\pi \\sqrt{0.1 \\times 10^{-5}}} = 159.15\\text{ Hz}$।',
        bn: '১) $X_L = ২ \\times ৩.১৪১৬ \\times ৫০ \\times ০.১ = ৩১.৪২\\,\\Omega$।\n২) $X_C = \\frac{১}{২ \\times ৩.১৪১৬ \\times ৫০ \\times ১০^{-৫}} = ৩১৮.৩১\\,\\Omega$।\n৩) $f_r = \\frac{১}{২\\pi \\sqrt{০.১ \\times ১০^{-৫}}} = ১৫৯.১৫\\text{ Hz}$।'
      },
      finalAnswer: {
        en: 'XL = 31.42 Ω, XC = 318.31 Ω, fr = 159.15 Hz',
        hi: 'XL = 31.42 Ω, XC = 318.31 Ω, fr = 159.15 Hz',
        bn: 'XL = ৩১.৪২ Ω, XC = ৩১৮.৩১ Ω, fr = ১৫৯.১৫ Hz'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Schering bridges in high-voltage testing labs to measure dielectric loss in power cable insulation.',
      'LCR meters in automated electronics assembly lines for component grading and quality inspection.',
      'Maxwell & Hay bridges in filter inductor design and transformer manufacturing.'
    ],
    hi: [
      'पावर केबल इंसुलेशन में परावैद्युत हानि मापने के लिए उच्च वोल्टेज परीक्षण प्रयोगशालाओं में शेरिंग ब्रिज।',
      'घटक ग्रेडिंग और गुणवत्ता निरीक्षण के लिए स्वचालित इलेक्ट्रॉनिक्स असेंबली लाइनों में LCR मीटर।',
      'फिल्टर इंडक्टर डिजाइन और ट्रांसफार्मर निर्माण में मैक्सवेल व हे ब्रिज।'
    ],
    bn: [
      'পাওয়ার ক্যাবলের ডাইইলেকট্রিক লস টেস্ট করতে হাই-ভোল্টেজ ল্যাবে শেরিং ব্রিজের ব্যবহার।',
      'ইলেকট্রনিক্স কারখানায় যন্ত্রাংশের মান যাচাই করতে ডিজিটাল LCR মিটারের ব্যবহার।',
      'ফিল্টার কয়েল ও ট্রান্সফরমার কারখানায় ইনডাক্ট্যান্স মাপতে ম্যাক্সওয়েল ও হে ব্রিজ।'
    ]
  },
  importantPoints: {
    en: [
      'AC bridges use AC source excitation and complex impedance balance equation: $Z_1 Z_4 = Z_2 Z_3$.',
      'Inductive reactance $X_L = 2\\pi f L$ increases with frequency; Capacitive reactance $X_C = 1/(2\\pi f C)$ decreases.',
      'Maxwell Bridge measures medium-Q coils ($1 < Q < 10$). Formula: $L_x = R_2 R_3 C_4$.',
      'Hay Bridge is preferred for high-Q coils ($Q > 10$).',
      'Schering Bridge measures unknown capacitance $C_x$ and dielectric dissipation factor $\\tan \\delta$.',
      'Digital LCR Meters display L, C, R, Q, D automatically using auto-balancing vector circuits.'
    ],
    hi: [
      'एसी ब्रिज एसी स्रोत और जटिल प्रतिबाधा संतुलन समीकरण का उपयोग करते हैं: $Z_1 Z_4 = Z_2 Z_3$।',
      'इंडक्टिव रिएक्टेंस $X_L = 2\\pi f L$ बढ़ता है; कैपेसिटिव रिएक्टेंस $X_C = 1/(2\\pi f C)$ घटता है।',
      'मैक्सवेल ब्रिज मध्यम-Q कॉइल ($1 < Q < 10$) को मापता है। $L_x = R_2 R_3 C_4$।',
      'हे ब्रिज (Hay Bridge) उच्च-Q कॉइल ($Q > 10$) के लिए उपयुक्त है।',
      'शेरिंग ब्रिज कैपेसिटेंस $C_x$ और इंसुलेशन डाइइलेक्ट्रिक लॉस ($\x5Ctan \\delta$) मापता है।'
    ],
    bn: [
      'এসি ব্রিজ এসি সাপ্লাই ও ইমপিডেন্স সমীকরণ $Z_1 Z_4 = Z_2 Z_3$ মেনে চলে।',
      'ইনডাক্টিভ রিঅ্যাকট্যান্স $X_L = 2\\pi f L$ ফ্রিকোয়েন্সি বাড়লে বাড়ে; ক্যাপাসিটিভ রিঅ্যাকট্যান্স $X_C$ কমে।',
      'মাঝারি Q-কয়েলের জন্য ম্যাক্সওয়েল ব্রিজ ($L_x = R_2 R_3 C_4$) এবং উচ্চ Q-কয়েলের জন্য হে ব্রিজ।',
      'শেরিং ব্রিজ ক্যাপাসিট্যান্স $C_x$ ও ডাইইলেকট্রিক লস ফেক্টর $\x5Ctan \\delta$ মেপে থাকে।'
    ]
  },
  commonMistakes: {
    en: [
      'Using DC power sources for AC bridges: Inductors act as short circuits and capacitors act as open circuits under DC, making bridge balance impossible!',
      'Using Maxwell Bridge for high-Q coils ($Q > 10$): It requires unreasonably large standard variable resistors.',
      'Confusing dissipation factor $D = \\tan \\delta$ with Quality factor $Q$: They are reciprocals ($D = 1/Q$).'
    ],
    hi: [
      'एसी ब्रिज के लिए डीसी पावर स्रोतों का उपयोग करना: इंडक्टर डीसी में शॉर्ट परिपथ और कैपेसिटर ओपन परिपथ की तरह काम करते हैं, जिससे ब्रिज संतुलन असंभव हो जाता है!',
      'उच्च-Q कॉइल ($Q > 10$) के लिए मैक्सवेल ब्रिज का उपयोग करना।',
      'डिसिपेशन फैक्टर $D = \\tan \\delta$ को क्वालिटी फैक्टर $Q$ के साथ भ्रमित करना: वे एक दूसरे के व्युत्क्रम हैं ($D = 1/Q$)।'
    ],
    bn: [
      'এসি ব্রিজে ডিসি পাওয়ার সাপ্লাই দেওয়া: ডিবি সিগন্যালে ক্যাপাসিটর ওপেন ও ইনডাক্টর শর্ট হয়ে যায়, ফলে ব্রিজ ব্যালেন্স হয় না!',
      'উচ্চ Q-কয়েলের ($Q > ১০$) ক্ষেত্রে ম্যাক্সওয়েল ব্রিজ ব্যবহার করা।',
      'ডিসিপেশন ফ্যাক্টর $D$ ও কোয়ালিটি ফ্যাক্টর $Q$ গুলিয়ে ফেলা: এরা একে অপরের বিপরীত ($D = ১/Q$)।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-lc-1',
      question: {
        en: 'Which AC bridge is used to measure capacitance and dielectric loss factor (tan δ) of high-voltage insulation?',
        hi: 'उच्च-वोल्टेज इंसुलेशन के कैपेसिटेंस और डाइइलेक्ट्रिक लॉस फैक्टर (tan δ) को मापने के लिए किस एसी ब्रिज का उपयोग किया जाता है?',
        bn: 'উচ্চ ভোল্টেজ ইনসুলেশনের ক্যাপাসিট্যান্স ও ডাইইলেকট্রিক লস ফ্যাক্টর (tan δ) মাপতে কোন এসি ব্রিজ ব্যবহৃত হয়?'
      },
      options: [
        { id: 'a', text: { en: 'Maxwell Bridge', hi: 'मैक्सवेल ब्रिज', bn: 'ম্যাক্সওয়েল ব্রিজ' } },
        { id: 'b', text: { en: 'Schering Bridge', hi: 'शेरिंग ब्रिज (Schering Bridge)', bn: 'শেরিং ব্রিজ (Schering Bridge)' } },
        { id: 'c', text: { en: 'Wheatstone Bridge', hi: 'व्हीटस्टोन ब्रिज', bn: 'হুইটস্টোন ব্রিজ' } },
        { id: 'd', text: { en: 'Kelvin Bridge', hi: 'केल्विन ब्रिज', bn: 'কেলভিন ব্রিজ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Schering bridge is the standard AC bridge for high-voltage capacitance and dielectric loss angle (tan δ) measurement.',
        hi: 'शेरिंग ब्रिज उच्च-वोल्टेज कैपेसिटेंस और डाइइलेक्ट्रिक लॉस एंगल (tan δ) माप के लिए मानक एसी ब्रिज है।',
        bn: 'শেরিং ব্রিজ হলো হাই-ভোল্টেজ ক্যাপাসিট্যান্স ও ডাইইলেকট্রিক লস জানার স্ট্যান্ডার্ড উপায়।'
      }
    },
    {
      id: 'mcq-ch3-lc-2',
      question: {
        en: 'In a Maxwell bridge, coil inductance Lx is calculated using which formula?',
        hi: 'मैक्सवेल ब्रिज में, कॉइल इंडक्टेंस Lx की गणना किस सूत्र से की जाती है?',
        bn: 'ম্যাক্সওয়েল ব্রিজে কয়েল ইনডাক্ট্যান্স Lx কোন সূত্র দ্বারা নির্ধারিত হয়?'
      },
      options: [
        { id: 'a', text: { en: 'Lx = R2 · R3 · C4', hi: 'Lx = R2 · R3 · C4', bn: 'Lx = R2 · R3 · C4' } },
        { id: 'b', text: { en: 'Lx = (R2 · R3) / C4', hi: 'Lx = (R2 · R3) / C4', bn: 'Lx = (R2 · R3) / C4' } },
        { id: 'c', text: { en: 'Lx = C4 / (R2 · R3)', hi: 'Lx = C4 / (R2 · R3)', bn: 'Lx = C4 / (R2 · R3)' } },
        { id: 'd', text: { en: 'Lx = 2π f R2 R3 C4', hi: 'Lx = 2π f R2 R3 C4', bn: 'Lx = 2π f R2 R3 C4' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Under Maxwell bridge balance, Lx = R2 · R3 · C4, independent of frequency f.',
        hi: 'मैक्सवेल ब्रिज संतुलन में, Lx = R2 · R3 · C4, जो आवृत्ति f से स्वतंत्र है।',
        bn: 'ম্যাক্সওয়েল ব্রিজের সাম্যাবস্থায়, Lx = R2 · R3 · C4, যা ফ্রিকোয়েন্সির ওপর নির্ভর করে না।'
      }
    },
    {
      id: 'mcq-ch3-lc-3',
      question: {
        en: 'What happens to the inductive reactance XL of a coil if the AC supply frequency is doubled?',
        hi: 'यदि एसी आपूर्ति आवृत्ति दोगुनी कर दी जाए तो कॉइल के इंडक्टिव रिएक्टेंस XL का क्या होता है?',
        bn: 'এসি সরবরাহ ফ্রিকোয়েন্সি দ্বিগুণ করা হলে কয়েলের ইনডাক্টিভ রিঅ্যাকট্যান্স XL এর কী ঘটবে?'
      },
      options: [
        { id: 'a', text: { en: 'Halved', hi: 'आधा हो जाता है', bn: 'অর্ধেক হবে' } },
        { id: 'b', text: { en: 'Doubled', hi: 'दोगुना हो जाता है', bn: 'দ্বিগুণ হবে' } },
        { id: 'c', text: { en: 'Remains unchanged', hi: 'अपरिवर्तित रहता है', bn: 'একই থাকবে' } },
        { id: 'd', text: { en: 'Becomes zero', hi: 'शून्य हो जाता है', bn: 'শূন্য হবে' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Since XL = 2πfL, XL is directly proportional to frequency f. Doubling f doubles XL.',
        hi: 'चूंकि XL = 2πfL, XL आवृत्ति f के सीधे आनुपातिक है। f दोगुना करने पर XL दोगुना हो जाता है।',
        bn: 'যেহেতু XL = 2πfL, ফ্রিকোয়েন্সি দ্বিগুণ হলে রিঅ্যাকট্যান্স দ্বিগুণ হয়ে যাবে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-lc-1',
      question: {
        en: 'State the general balance condition for an AC bridge. Draw the schematic circuit of a Maxwell Bridge and derive the expression for unknown inductance.',
        hi: 'एसी ब्रिज के लिए सामान्य संतुलन स्थिति बताएं। मैक्सवेल ब्रिज का सर्किट आरेख बनाएं और अज्ञात इंडक्टेंस के लिए व्यंजक व्युत्पन्न करें।',
        bn: 'এসি ব্রিজের সাধারণ সাম্যাবস্থার শর্ত লেখো। ম্যাক্সওয়েল ব্রিজের সার্কিট অঙ্কন করো এবং অজানা ইনডাক্ট্যান্সের রাশিমালা প্রতিপাদন করো।'
      },
      hint: {
        en: 'General condition: $Z_1 Z_4 = Z_2 Z_3$. Substitute $Z_1 = R_x + j\\omega L_x$ and $Z_4 = R_4 || (1/j\\omega C_4)$. Equate real and imaginary parts.',
        hi: 'सामान्य स्थिति: $Z_1 Z_4 = Z_2 Z_3$। वास्तविक और काल्पनिक भागों को बराबर करें।',
        bn: 'সাধারণ শর্ত: $Z_1 Z_4 = Z_2 Z_3$। বাস্তব ও কাল্পনিক অংশ সমান ধরে সমীকরণ করো।'
      },
      answerKey: {
        en: '1) General AC Balance Condition: Detector current $I_D = 0 \\implies Z_1 Z_4 = Z_2 Z_3$ in complex phasor notation.\n2) Maxwell Bridge Setup: Arm 1 contains unknown coil ($Z_1 = R_x + j\\omega L_x$), Arm 2 contains pure resistor $R_2$, Arm 3 contains pure resistor $R_3$, Arm 4 contains parallel $R_4$ and $C_4$ ($Y_4 = \\frac{1}{R_4} + j\\omega C_4$).\n3) Substituting into $Z_1 = Z_2 Z_3 Y_4$:\n   $R_x + j\\omega L_x = R_2 R_3 \\left( \\frac{1}{R_4} + j\\omega C_4 \\right) = \\frac{R_2 R_3}{R_4} + j\\omega R_2 R_3 C_4$.\n4) Equating real and imaginary parts separately:\n   Real part: $R_x = \\frac{R_2 R_3}{R_4}$\n   Imaginary part: $L_x = R_2 R_3 C_4$.',
        hi: '1) सामान्य स्थिति: $Z_1 Z_4 = Z_2 Z_3$।\n2) संरचना: $Z_1 = R_x + j\\omega L_x$, $Z_2 = R_2$, $Z_3 = R_3$, $Y_4 = 1/R_4 + j\\omega C_4$।\n3) $R_x + j\\omega L_x = \\frac{R_2 R_3}{R_4} + j\\omega R_2 R_3 C_4$।\n4) तुलना करने पर: $R_x = \\frac{R_2 R_3}{R_4}$ और $L_x = R_2 R_3 C_4$।',
        bn: '১) সাধারণ শর্ত: $Z_1 Z_4 = Z_2 Z_3$।\n২) ম্যাক্সওয়েল কাঠামো: $Z_1 = R_x + j\\omega L_x$, $Z_2 = R_2$, $Z_3 = R_3$, $Y_4 = ১/R_4 + j\\omega C_4$।\n৩) মান বসিয়ে পাই: $R_x + j\\omega L_x = \\frac{R_2 R_3}{R_4} + j\\omega R_2 R_3 C_4$।\n৪) বাস্তব ও কাল্পনিক অংশ আলাদা করে: $R_x = \\frac{R_2 R_3}{R_4}$ এবং $L_x = R_2 R_3 C_4$।'
      }
    },
    {
      id: 'pq-ch3-lc-2',
      question: {
        en: 'Explain why Maxwell bridge is unsuitable for measuring high-Q coils (Q > 10) and explain how Hay bridge overcomes this problem.',
        hi: 'समझाएं कि उच्च-Q कॉइल (Q > 10) को मापने के लिए मैक्सवेल ब्रिज अनुपयुक्त क्यों है और हे ब्रिज (Hay bridge) इस समस्या को कैसे दूर करता है।',
        bn: 'উচ্চ Q-কয়েল (Q > ১০) পরিমাপে ম্যাক্সওয়েল ব্রিজ কেন অনুপযোগী এবং হে ব্রিজ (Hay bridge) কীভাবে এই সমস্যার সমাধান করে তা ব্যাখ্যা করো।'
      },
      hint: {
        en: 'In Maxwell bridge, $R_4 = Q \\cdot \\omega L_x$. High Q requires impractical megohm $R_4$. In Hay bridge, $R_4$ is in series with $C_4$.',
        hi: 'मैक्सवेल ब्रिज में $R_4 = Q \\cdot \\omega L_x$। उच्च Q के लिए अत्यधिक बड़े $R_4$ की आवश्यकता होती है।',
        bn: 'ম্যাক্সওয়েল ব্রিজে $R_4 = Q \\cdot \\omega L_x$। ফলে বিশাল মানের $R_4$ লাগে।'
      },
      answerKey: {
        en: '1) Maxwell Bridge Limitation: For Maxwell bridge, $Q = \\frac{\\omega L_x}{R_x} = \\omega R_4 C_4 \\implies R_4 = \\frac{Q}{\\omega C_4}$. For high-Q coils ($Q > 10$), $R_4$ must be extremely large (tens of Megohms). Variable resistors of such high values are inaccurate and unstable.\n2) Hay Bridge Solution: Connects variable resistor $R_4$ in SERIES with capacitor $C_4$ in Arm 4 instead of parallel. Here $Q = \\frac{1}{\\omega R_4 C_4} \\implies R_4 = \\frac{1}{\\omega Q C_4}$. Thus, for high Q ($Q > 10$), $R_4$ becomes very SMALL, making it easily realizable and highly accurate.',
        hi: '1) मैक्सवेल की सीमा: $Q = \\omega R_4 C_4 \\implies R_4 = Q / (\\omega C_4)$। उच्च Q ($Q > 10$) के लिए $R_4$ अत्यधिक बड़ा (मोगोहम) होना चाहिए, जो व्यावहारिक नहीं है।\n2) हे ब्रिज समाधान: $R_4$ को कैपेसिटर $C_4$ के साथ समानांतर के बजाय श्रृंखला में जोड़ता है। यहाँ $R_4 = 1 / (\\omega Q C_4)$, इसलिए उच्च Q के लिए $R_4$ का मान बहुत छोटा और आसानी से समायोज्य हो जाता है।',
        bn: '১) ম্যাক্সওয়েল ব্রিজের সীমাবদ্ধতা: $Q = \\omega R_4 C_4 \\implies R_4 = Q / (\\omega C_4)$। Q এর মান বেশি হলে $R_4$ এর মান মেগাওহম লেভেলে চলে যায় যা বাস্তবায়ন করা কঠিন।\n২) হে ব্রিজের সমাধান: এটি $R_4$ কে $C_4$ এর সমান্তরালে না রেখে শ্রেণিতে যুক্ত করে। এর ফলে $R_4 = ১ / (\\omega Q C_4)$ হয়, যা উচ্চ Q এর জন্য ছোট এবং সহজে ব্যালেন্স করা যায়।'
      }
    }
  ]
};

export const LESSON_INSTRUMENT_TRANSFORMERS: Lesson = {
  id: 'lsn-ch3-instrument-transformers',
  topicId: 'ch3-instrument-transformers',
  order: 16,
  title: {
    en: 'Instrument Transformers',
    hi: 'इन्स्ट्रूमेंट ट्रांसफॉर्मर (Instrument Transformers)',
    bn: 'ইন্সট্রুমেন্ট ট্রান্সফরমার (Instrument Transformers)'
  },
  easyExplanation: {
    en: 'Instrument Transformers adapt high AC voltages and currents down to safe, standardized values (110 V and 5 A / 1 A) for ordinary ammeters, voltmeters, and protective relays. Current Transformers (CT) step down high current, while Potential Transformers (PT) step down high voltage, keeping human operators safe from high-voltage hazards!',
    hi: 'इन्स्ट्रूमेंट ट्रांसफॉर्मर साधारण अमीटर, वोल्टमीटर और रिले के लिए उच्च एसी वोल्टेज और धाराओं को सुरक्षित, मानकीकृत मान (110 V और 5 A/1 A) में बदलते हैं। करंट ट्रांसफॉर्मर (CT) धारा घटाता है, जबकि पोटेंशियल ट्रांसफॉर्मर (PT) वोल्टेज घटाता है, जिससे कर्मचारी सुरक्षित रहते हैं!',
    bn: 'ইন্সট্রুমেন্ট ট্রান্সফরমার হলো এমন বিশেষ ট্রান্সফরমার যা বিশাল উচ্চ ভোল্টেজ ও কারেন্টকে নিরাপদ স্ট্যান্ডার্ড মান (১১০ V ও ৫ A/১ A) নামিয়ে এনে সাধারণ মিটার ও রিলেকে সংকেত দেয় এবং অপাটেরদের জীবন সুরক্ষিত রাখে!'
  },
  detailedExplanation: {
    en: 'In high-voltage AC power transmission systems (e.g. 11 kV, 132 kV, 400 kV), connecting ammeters, voltmeters, or wattmeters directly is impossible due to massive insulation requirements and fatal safety risks.\n\n1. Current Transformer (CT):\n   • Purpose: Steps down high primary AC current ($I_p = 100\\text{ A} - 5000\\text{ A}$) to standardized secondary current ($I_s = 5\\text{ A}$ or $1\\text{ A}$).\n   • Construction: Primary winding consists of very few turns (often a single bar conductor) of thick cross-section in SERIES with the power line. Secondary winding consists of many turns of fine wire connected across low-impedance ammeter/wattmeter current coils.\n   • Nominal Current Ratio: $K_i = \\frac{I_{p,rated}}{I_{s,rated}} \\approx \\frac{N_s}{N_p}$.\n   \n   • CRITICAL SAFETY WARNING (Secondary Open Circuit Hazard):\n     - The secondary of a CT MUST NEVER BE OPEN-CIRCUITED while primary current is flowing!\n     - Why? Under normal operation, secondary current produces opposing MMF ($N_s I_s$) which neutralizes ~99% of primary MMF ($N_p I_p$), leaving only a tiny magnetizing flux in the core.\n     - If secondary is opened ($I_s = 0$), opposing MMF drops to zero! The entire heavy primary current becomes magnetizing current, producing enormous flux density in the core. This induces lethal high voltages ($> 1000\\text{ V}$) across open secondary terminals, risking operator electrocution, breakdown of winding insulation, and severe iron core overheating due to hysteresis/eddy losses.\n\n2. Potential Transformer (PT / VT):\n   • Purpose: Steps down high primary AC voltage ($V_p = 11\\text{ kV} - 400\\text{ kV}$) to standardized secondary voltage ($V_s = 110\\text{ V}$ or $110/\\sqrt{3}\\text{ V}$).\n   • Construction: Connected in PARALLEL across line. Primary winding has a very large number of fine wire turns; secondary winding has few turns.\n   • Nominal Voltage Ratio: $K_v = \\frac{V_{p,rated}}{V_{s,rated}} \\approx \\frac{N_p}{N_s}$.\n\n3. Instrument Transformer Errors:\n   • Ratio Error: Percentage difference between actual transformation ratio and nominal nameplate ratio.\n   • Phase Angle Error: Phase angle shift between reversed secondary vector and primary vector, affecting AC power calculations ($P = V I \\cos \\phi$).',
    hi: 'इन्स्ट्रूमेंट ट्रांसफॉर्मर (CT एवं PT) सिद्धांत एवं सुरक्षा:\n\n1. करंट ट्रांसफॉर्मर (CT):\n   • प्राथमिक वाइंडिंग भारी धारा रेखा के श्रेणीक्रम (Series) में जुड़ी होती है ($N_p$ कम)।\n   • द्वितीयक वाइंडिंग 5 A या 1 A अमीटर से जुड़ी होती है ($N_s$ अधिक)।\n   • अनुपात: $K_i = \\frac{I_p}{I_s} \\approx \\frac{N_s}{N_p}$।\n   • अति-महत्वपूर्ण सुरक्षा चेतावनी: प्राइमरी में धारा बहने के दौरान CT के सेकेंडरी को कभी भी खुला (Open Circuit) न छोड़ें! सेकेंडरी खुलने पर opposing MMF शून्य हो जाता है, जिससे कोर में विशाल फ्लक्स उत्पन्न होता है और सेकेंडरी टर्मिनलों पर जानलेवा उच्च वोल्टेज (>1000 V) उत्पन्न होता है!\n\n2. पोटेंशियल ट्रांसफॉर्मर (PT):\n   • लाइनों के समांतर (Parallel) जुड़ा होता है ($11\\text{ kV} \\to 110\\text{ V}$)।\n   • अनुपात: $K_v = \\frac{V_p}{V_s} \\approx \\frac{N_p}{N_s}$।',
    bn: 'ইন্সট্রুমেন্ট ট্রান্সফরমারের (CT ও PT) গঠন ও সুরক্ষা নির্দেশিকা:\n\n১. কারেন্ট ট্রান্সফরমার (CT):\n   • প্রাইমারি কয়েল লোড লাইনের শ্রেণিতে (Series) যুক্ত থাকে ($N_p$ ১ বা ২ প্যাঁচ)।\n   • সেকেন্ডারি কয়েল ৫ A বা ১ A মিটারে যুক্ত থাকে ($N_s$ অনেক প্যাঁচ)।\n   • অনুপাত: $K_i = \\frac{I_p}{I_s} \\approx \\frac{N_s}{N_p}$।\n   • জরুরি সুরক্ষা সতর্কবার্তা: কারেন্ট চলাকালীন CT-এর সেকেন্ডারি কখনোই খোলা (Open) রাখা যাবে না! সেকেন্ডারি খোলা হলে বিপরীতমুখী MMF থাকে না, ফলে কোরে প্রচণ্ড ফ্লক্স জমে সেকেন্ডারিতে বিপজ্জনক উচ্চ ভোল্টেজ (>১০০০ V) তৈরি হয়ে প্রাণহানি ও আগুন ঘটতে পারে!\n\n২. পটেনশিয়াল ট্রান্সফরমার (PT):\n   • হাই ভোল্টেজ লাইনের সমান্তরালে (Parallel) যুক্ত থাকে ($১১\\text{ kV} \\to ১১০\\text{ V}$)।\n   • অনুপাত: $K_v = \\frac{V_p}{V_s} \\approx \\frac{N_p}{N_s}$।'
  },
  formulas: [
    {
      symbol: 'K_i',
      expression: 'K_i = \\frac{I_p}{I_s} \\approx \\frac{N_s}{N_p}',
      description: {
        en: 'CT Transformation Ratio = Primary Current / Secondary Current = Secondary Turns / Primary Turns',
        hi: 'CT परिवर्तन अनुपात = प्राथमिक धारा / द्वितीयक धारा = द्वितीयक मोड़े / प्राथमिक मोड़े',
        bn: 'CT রূপান্তর অনুপাত = প্রাইমারি কারেন্ট / সেকেন্ডারি কারেন্ট = সেকেন্ডারি প্যাঁচ / প্রাইমারি প্যাঁচ'
      }
    },
    {
      symbol: 'K_v',
      expression: 'K_v = \\frac{V_p}{V_s} \\approx \\frac{N_p}{N_s}',
      description: {
        en: 'PT Transformation Ratio = Primary Voltage / Secondary Voltage = Primary Turns / Secondary Turns',
        hi: 'PT परिवर्तन अनुपात = प्राथमिक वोल्टेज / द्वितीयक वोल्टेज = प्राथमिक मोड़े / द्वितीयक मोड़े',
        bn: 'PT রূপান্তর অনুপাত = প্রাইমারি ভোল্টেজ / সেকেন্ডারি ভোল্টেজ = প্রাইমারি প্যাঁচ / সেকেন্ডারি প্যাঁচ'
      }
    },
    {
      symbol: 'P_{true}',
      expression: 'P_{true} = W_{measured} \\times K_i \\times K_v',
      description: {
        en: 'True High-Voltage AC Power = Wattmeter Reading × CT Ratio Ki × PT Ratio Kv',
        hi: 'वास्तविक उच्च-वोल्टेज एसी शक्ति = वाटमीटर पाठ्यांक × CT अनुपात Ki × PT अनुपात Kv',
        bn: 'প্রকৃত পাওয়ার = ওয়াটমিটারের পাঠ × CT অনুপাত Ki × PT অনুপাত Kv'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-instrument-ct-pt',
      title: {
        en: 'Connection Diagram of CT and PT with Wattmeter on High Voltage Line',
        hi: 'उच्च वोल्टेज लाइन पर वाटमीटर के साथ CT और PT का कनेक्शन आरेख',
        bn: 'হাই ভোল্টেজ লাইনে ওয়াটমিটারের সাথে CT ও PT এর কানেকশন ডায়াগ্রাম'
      },
      caption: {
        en: 'CT connected in series and PT connected in parallel feeding low-voltage measuring instruments.',
        hi: 'श्रृंखला में जुड़ा CT और समांतर में जुड़ा PT कम-वोल्टेज मापने वाले उपकरणों को फीड करते हैं।',
        bn: 'শ্রেণিতে কানেক্টেড CT এবং সমান্তরালে কানেক্টেড PT দিয়ে নিরাপদ পরিমাপ।'
      },
      svgType: 'instrument-ct-pt'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-it-1',
      problem: {
        en: 'A 3-phase high voltage line operates at $11\\text{ kV}$. Electric power is measured using a $100/5\\text{ A}$ Current Transformer (CT) and an $11000/110\\text{ V}$ Potential Transformer (PT) connected to a standard single-phase wattmeter. The wattmeter indicates a reading of $320\\text{ W}$. Calculate:\n1) Current Transformer ratio ($K_i$)\n2) Potential Transformer ratio ($K_v$)\n3) True power in the line represented by this wattmeter reading.',
        hi: 'एक 3-फेज उच्च वोल्टेज लाइन $11\\text{ kV}$ पर काम करती है। विद्युत शक्ति को $100/5\\text{ A}$ करंट ट्रांसफॉर्मर (CT) और $11000/110\\text{ V}$ पोटेंशियल ट्रांसफॉर्मर (PT) का उपयोग करके मापा जाता है। वाटमीटर $320\\text{ W}$ पाठ्यांक दिखाता है। गणना करें:\n1) CT अनुपात ($K_i$)\n2) PT अनुपात ($K_v$)\n3) वाटमीटर पाठ्यांक द्वारा दर्शाई गई लाइन में वास्तविक शक्ति।',
        bn: 'একটি ১১ kV লাইনে ক্ষমতা মাপার জন্য একটি ১০০/৫ A কারেন্ট ট্রান্সফরমার (CT) এবং একটি ১১০০০/১১০ V পটেনশিয়াল ট্রান্সফরমার (PT) ওয়াটমিটারের সাথে যুক্ত। ওয়াটমিটারের পাঠ ৩২০ W। বের করো:\n১) CT রূপান্তর অনুপাত ($K_i$)\n২) PT রূপান্তর অনুপাত ($K_v$)\n৩) লাইনটির প্রকৃত পাওয়ার।'
      },
      givenValues: {
        'CT Rating': '100/5 A',
        'PT Rating': '11000/110 V',
        'Wattmeter Reading': '320 W'
      },
      solution: {
        en: '1) $K_i = \\frac{100\\text{ A}}{5\\text{ A}} = 20$.\n2) $K_v = \\frac{11000\\text{ V}}{110\\text{ V}} = 100$.\n3) Overall Multiplication Factor $MF = K_i \\times K_v = 20 \\times 100 = 2000$.\n   True Line Power $P_{true} = W_{measured} \\times MF = 320\\text{ W} \\times 2000 = 640,000\\text{ W} = 640\\text{ kW}$.',
        hi: '1) $K_i = 100 / 5 = 20$।\n2) $K_v = 11000 / 110 = 100$।\n3) $MF = 20 \\times 100 = 2000$।\n   वास्तविक शक्ति = $320 \\times 2000 = 640,000\\text{ W} = 640\\text{ kW}$।',
        bn: '১) $K_i = ১০০ / ৫ = ২০$।\n২) $K_v = ১১০০০ / ১১০ = ১০০$।\n৩) গুণন ফ্যাক্টর $MF = ২০ \\times ১০০ = ২০০০$।\n   প্রকৃত পাওয়ার = ৩২০ W \\times ২০০০ = ৬৪০,০০০ W = ৬৪০ kW।'
      },
      finalAnswer: {
        en: 'Ki = 20, Kv = 100, True Power = 640 kW',
        hi: 'Ki = 20, Kv = 100, वास्तविक शक्ति = 640 kW',
        bn: 'Ki = ২০, Kv = ১০০, প্রকৃত পাওয়ার = ৬৪০ kW'
      }
    }
  ],
  practicalApplications: {
    en: [
      'High-voltage electrical grid substations (66kV - 765kV) for energy metering and revenue billing.',
      'Protective relaying schemes (overcurrent, differential, distance relays) to isolate grid faults.',
      'Industrial motor control centers for safe monitoring of heavy motor currents.'
    ],
    hi: [
      'ऊर्जा मापन और राजस्व बिलिंग के लिए उच्च-वोल्टेज ग्रिड सबस्टेशन (66kV - 765kV)।',
      'ग्रिड दोषों को अलग करने के लिए सुरक्षात्मक रिले योजनाएं (ओवरकरंट, डिफरेंशियल रिले)।',
      'भारी मोटर धाराओं की सुरक्षित निगरानी के लिए औद्योगिक मोटर नियंत्रण केंद्र।'
    ],
    bn: [
      'পাওয়ার সাবস্টেশনে (৬৬kV - ৭৬৫kV) বিদ্যুৎ সাশ্রয় ও রাজস্ব বিলিং মিটারিংয়ে।',
      'সার্কিট ব্রেকার ট্রিপিং ও পাওয়ার সিস্টেমে প্রোটেকশন রিলে চালাতে।',
      'শিল্প কারখানার বড় মোটরের কারেন্ট নিরাপদে মনিটর করতে।'
    ]
  },
  importantPoints: {
    en: [
      'Instrument transformers isolate measuring meters from lethal high voltages and extend AC measuring range.',
      'CT secondary is rated 5 A or 1 A; PT secondary is rated 110 V.',
      'CT primary is connected in SERIES with line; PT primary is connected in PARALLEL across line.',
      'NEVER open-circuit CT secondary while primary is energized! High flux creates lethal voltage (>1000V).',
      'CT secondary terminals should always be shorted before removing connected meters.',
      'Overall Wattmeter multiplication factor $MF = K_i \\times K_v$.'
    ],
    hi: [
      'इन्स्ट्रूमेंट ट्रांसफॉर्मर मापक मीटरों को उच्च वोल्टेज से अलग करते हैं और सीमा बढ़ाते हैं।',
      'CT सेकेंडरी 5 A या 1 A रेटेड है; PT सेकेंडरी 110 V रेटेड है।',
      'CT प्राइमरी लाइन के साथ श्रेणीक्रम में जुड़ी होती है; PT प्राइमरी लाइन के पार समांतर में जुड़ी होती है।',
      'प्राइमरी में धारा प्रवाहित होने पर कभी भी CT सेकेंडरी को खुला न छोड़ें! घातक उच्च वोल्टेज पैदा होता है।',
      'मीटर हटाने से पहले CT सेकेंडरी टर्मिनलों को हमेशा शॉर्ट किया जाना चाहिए।'
    ],
    bn: [
      'ইন্সট্রুমেন্ট ট্রান্সফরমার ব্যবহারকারীদের নিরাপদ রাখে এবং মিটারের রেন্জ বাড়ায়।',
      'CT এর সেকেন্ডারি ৫ A বা ১ A এবং PT এর সেকেন্ডারি ১১০ V স্ট্যান্ডার্ড।',
      'CT লাইনের শ্রেণিতে এবং PT সমান্তরালে যুক্ত থাকে।',
      'কখনোই কারেন্ট চলাকালীন CT সেকেন্ডারি ওপেন করা যাবে না (১০০০V এর বেশি বিপজ্জনক ভোল্টেজ তৈরি হয়)!',
      'মিটার খোলার আগে অবশ্যই CT এর সেকেন্ডারি দুটি তার দিয়ে শর্ট করে দিতে হবে।'
    ]
  },
  commonMistakes: {
    en: [
      'Opening CT secondary circuit while line is energized: Causes core saturation and lethal voltage induction across open terminals.',
      'Connecting CT primary in parallel across high-voltage lines like a PT: Acts as a dead short circuit, destroying the CT instantly!',
      'Forgetting to multiply panel meter readings by CT and PT turns ratios ($MF = K_i \\times K_v$).'
    ],
    hi: [
      'लाइन चालू रहने के दौरान CT सेकेंडरी परिपथ खोलना: कोर संतृप्ति और खुले टर्मिनलों पर घातक वोल्टेज उत्पन्न करता है।',
      'PT की तरह उच्च-वोल्टेज लाइनों के पार समांतर में CT प्राइमरी कनेक्ट करना: यह एक शॉर्ट सर्किट की तरह काम करता है, जो CT को तुरंत नष्ट कर देता है!',
      'पैनल मीटर पाठ्यांक को CT और PT अनुपात से गुणा करना भूल जाना।'
    ],
    bn: [
      'লাইন চালু থাকা অবস্থায় CT এর সেকেন্ডারি খোলা রাখা: কোরে অতি-ফ্লক্স জমে প্রাণঘাতী ভোল্টেজ তৈরি হয়।',
      'PT এর মতো ভুল করে CT কে লাইনের সমান্তরালে লাগিয়ে দেওয়া: এতে শর্ট সার্কিট হয়ে CT সাথে সাথে জ্বলে ছাই হয়ে যাবে!',
      'প্যানেল মিটারের পাঠকে CT ও PT এর অনুপাত দিয়ে গুণ করতে ভুলে যাওয়া।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-it-1',
      question: {
        en: 'Why must the secondary winding of an energized Current Transformer (CT) NEVER be left open-circuited?',
        hi: 'ऊर्जावान करंट ट्रांसफॉर्मर (CT) की द्वितीयक वाइंडिंग को कभी भी खुला क्यों नहीं छोड़ना चाहिए?',
        bn: 'চলন্ত কারেন্ট ট্রান্সফরমারের (CT) সেকেন্ডারি ক্যানো কখোনোই খোলা (Open) রাখা যাবে না?'
      },
      options: [
        { id: 'a', text: { en: 'Core flux drops to zero', hi: 'कोर फ्लक्स शून्य हो जाता है', bn: 'কোর ফ্লক্স শূন্যে নেমে যায়' } },
        { id: 'b', text: { en: 'Dangerous high voltage is induced across secondary terminals', hi: 'द्वितीयक टर्मिनलों पर खतरनाक उच्च वोल्टेज प्रेरित होता है', bn: 'সেকেন্ডারি টার্মিনালে বিপজ্জনক উচ্চ ভোল্টেজ তৈরি হয়' } },
        { id: 'c', text: { en: 'Primary current drops to zero', hi: 'प्राथमिक धारा शून्य हो जाती है', bn: 'প্রাইমারি কারেন্ট শূন্য হয়ে যায়' } },
        { id: 'd', text: { en: 'Ammeter burns out instantly', hi: 'अमीटर तुरंत जल जाता है', bn: 'অ্যামিটার সাথে সাথে পুড়ে যায়' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Without opposing secondary MMF, full primary current magnetizes core, causing massive flux density and inducing dangerous high voltage (>1000V) across open secondary terminals.',
        hi: 'विरोधी द्वितीयक MMF के बिना, पूर्ण प्राथमिक धारा कोर को चुंबकित करती है, जिससे खुले टर्मिनलों पर खतरनाक उच्च वोल्टेज (>1000V) उत्पन्न होता है।',
        bn: 'সেকেন্ডারি MMF না থাকায় কোরে মাত্রাতিরিক্ত ফ্লক্স জমে খোলা সেকেন্ডারি টার্মিনালে ১০০০V এর বেশি বিপজ্জনক ভোল্টেজ তৈরি হয়।'
      }
    },
    {
      id: 'mcq-ch3-it-2',
      question: {
        en: 'What is the standard secondary rated voltage for a Potential Transformer (PT)?',
        hi: 'पोटेंशियल ट्रांसफॉर्मर (PT) के लिए मानक द्वितीयक रेटेड वोल्टेज क्या है?',
        bn: 'পটেনশিয়াল ট্রান্সফরমারের (PT) স্ট্যান্ডার্ড সেকেন্ডারি ভোল্টেজ কত?'
      },
      options: [
        { id: 'a', text: { en: '5 V', hi: '5 V', bn: '৫ V' } },
        { id: 'b', text: { en: '110 V', hi: '110 V', bn: '১১০ V' } },
        { id: 'c', text: { en: '230 V', hi: '230 V', bn: '২৩০ V' } },
        { id: 'd', text: { en: '440 V', hi: '440 V', bn: '৪৪০ V' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Potential Transformers standard secondary output is designed for 110 V AC across secondary terminals.',
        hi: 'पोटेंशियल ट्रांसफॉर्मर मानक द्वितीयक आउटपुट द्वितीयक टर्मिनलों पर 110 V AC के लिए डिज़ाइन किया गया है।',
        bn: 'পটেনশিয়াল ট্রান্সফরমারের সেকেন্ডারি সাইডের মান বিশ্বব্যাপী ১১০ V এ নির্ধারিত।'
      }
    },
    {
      id: 'mcq-ch3-it-3',
      question: {
        en: 'How is a Current Transformer (CT) primary winding connected in an electrical power line?',
        hi: 'एक विद्युत पावर लाइन में करंट ट्रांसफॉर्मर (CT) प्राथमिक वाइंडिंग कैसे जुड़ी होती है?',
        bn: 'ইলেকট্রিক্যাল পাওয়ার লাইনে কারেন্ট ট্রান্সফরমারের (CT) প্রাইমারি কয়েল কীভাবে যুক্ত থাকে?'
      },
      options: [
        { id: 'a', text: { en: 'In Parallel across load', hi: 'लोड के पार समांतर में', bn: 'লোডের সমান্তরালে' } },
        { id: 'b', text: { en: 'In Series with load line', hi: 'लोड लाइन के साथ श्रेणीक्रम में', bn: 'লোড লাইনের শ্রেণিতে (Series)' } },
        { id: 'c', text: { en: 'To line neutral wire only', hi: 'केवल लाइन न्यूट्रल तार से', bn: 'শুধু নিউট্রাল তারে' } },
        { id: 'd', text: { en: 'To ground earth pit directly', hi: 'सीधे अर्थ पिट में', bn: 'মাটিতে সরাসরি' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'CT primary winding carries full line load current, so it is connected in SERIES with the power line.',
        hi: 'CT प्राथमिक वाइंडिंग में पूर्ण लाइन लोड धारा बहती है, इसलिए यह पावर लाइन के साथ श्रेणीक्रम (SERIES) में जुड़ी होती है।',
        bn: 'CT প্রাইমারি লাইনের পুরো লোড কারেন্ট বহন করে, তাই এটি লাইনের শ্রেণিতে (Series) যুক্ত থাকে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-it-1',
      question: {
        en: 'Compare Current Transformer (CT) and Potential Transformer (PT) regarding connection, turns ratio, and secondary loading requirements.',
        hi: 'कनेक्शन, टर्न अनुपात और द्वितीयक लोडिंग आवश्यकताओं के संबंध में करंट ट्रांसफॉर्मर (CT) और पोटेंशियल ट्रांसफॉर्मर (PT) की तुलना करें।',
        bn: 'কানেকশন, প্যাঁচের অনুপাত এবং সেকেন্ডারি লোডের ভিত্তিতে কারেন্ট ট্রান্সফরমার (CT) ও পটেনশিয়াল ট্রান্সফরমারের (PT) তুলনা করো।'
      },
      hint: {
        en: 'CT: Series connection, $N_s > N_p$, secondary shorted/low impedance. PT: Parallel connection, $N_p > N_s$, secondary open/high impedance.',
        hi: 'CT: श्रेणी कनेक्शन, $N_s > N_p$, सेकेंडरी शॉर्ट। PT: समांतर कनेक्शन, $N_p > N_s$, सेकेंडरी ओपन।',
        bn: 'CT: শ্রেণিতে যুক্ত, $N_s > N_p$। PT: সমান্তরালে যুক্ত, $N_p > N_s$।'
      },
      answerKey: {
        en: '1) Connection: CT primary is connected in SERIES with power line; PT primary is connected in PARALLEL across power lines.\n2) Winding Turns Ratio: CT has few thick primary turns and many fine secondary turns ($N_s > N_p$, step-up voltage, step-down current); PT has many fine primary turns and few secondary turns ($N_p > N_s$, step-down voltage).\n3) Secondary Rating & Load: CT secondary rated 5 A or 1 A operates under near short-circuit conditions (low impedance ammeter load); PT secondary rated 110 V operates under near open-circuit conditions (high impedance voltmeter load).\n4) Safety: CT secondary must NEVER be open-circuited; PT secondary must NEVER be short-circuited.',
        hi: '1) कनेक्शन: CT प्राइमरी श्रेणीक्रम में जुड़ी होती है; PT प्राइमरी समांतर में जुड़ी होती है।\n2) टर्न अनुपात: CT में $N_s > N_p$ होता है (धारा कम करता है); PT में $N_p > N_s$ होता है (वोल्टेज कम करता है)।\n3) द्वितीयक लोड: CT सेकेंडरी 5 A शॉर्ट परिपथ के निकट चलती है; PT सेकेंडरी 110 V ओपन परिपथ के निकट चलती है।\n4) सुरक्षा: CT सेकेंडरी कभी खुली नहीं होनी चाहिए; PT सेकेंडरी कभी शॉर्ट नहीं होनी चाहिए।',
        bn: '১) কানেকশন: CT প্রাইমারি লাইনের শ্রেণিতে; PT প্রাইমারি সমান্তরালে যুক্ত থাকে।\n২) প্যাঁচ সংখ্যা: CT এর $N_s > N_p$ (কারেন্ট কমায়); PT এর $N_p > N_s$ (ভোল্টেজ কমায়)।\n৩) সেকেন্ডারি লোড: CT সেকেন্ডারি ৫ A বা ১ A প্রাই শর্ট সার্কিটে চলে; PT সেকেন্ডারি ১১০ V ওপেন সার্কিটে চলে।\n৪) সুরক্ষা বিধি: CT সেকেন্ডারি কখনো ওপেন রাখা যাবে না; PT সেকেন্ডারি কখনো শর্ট করা যাবে না।'
      }
    },
    {
      id: 'pq-ch3-it-2',
      question: {
        en: 'Explain in detail the physical and electromagnetic reasons why opening the secondary circuit of a Current Transformer is highly dangerous.',
        hi: 'विस्तार से बताएं कि करंट ट्रांसफॉर्मर के द्वितीयक परिपथ को खोलना अत्यधिक खतरनाक क्यों है।',
        bn: 'কারেন্ট ট্রান্সফরমারের সেকেন্ডারি সার্কিট খুলে দেওয়া কেন অত্যন্ত বিপজ্জনক তা তাত্ত্বিক ও তড়িৎ-চুম্বকীয় দৃষ্টিকোণ থেকে ব্যাখ্যা করো।'
      },
      hint: {
        en: 'Explain MMF cancellation: $N_p I_p - N_s I_s = \\text{Magnetizing MMF}$. When $I_s = 0$, full primary MMF saturates core, inducing huge $V_s = -N_s \\frac{d\\Phi}{dt}$.',
        hi: 'MMF रद्दीकरण की व्याख्या करें। जब $I_s = 0$ हो, तो पूर्ण प्राथमिक MMF कोर को संतृप्त करता है जिससे विशाल $V_s$ प्रेरित होता है।',
        bn: 'MMF ব্যালেন্সের কথা উল্লেখ করো। $I_s = 0$ হলে সম্পূর্ণ প্রাইমারি MMF কোরে অতি-ফ্লক্স তৈরি করে।'
      },
      answerKey: {
        en: '1) MMF Balance in Normal CT: Under normal closed conditions, secondary current $I_s$ produces secondary MMF ($N_s I_s$) opposing primary MMF ($N_p I_p$). Net magnetizing MMF is very small: $N_p I_p - N_s I_s = MMF_{mag} \\approx 1\\%$, resulting in small core flux $\\Phi$.\n2) Effect of Opening Secondary ($I_s = 0$):\n   - Opposing secondary MMF drops to zero instantly.\n   - Primary current $I_p$ is determined strictly by external power line load and does NOT decrease when secondary opens.\n   - Entire 100% primary MMF ($N_p I_p$) acts as magnetizing MMF, saturating the iron core.\n3) Consequence:\n   - Extremely high rate of flux change $\\frac{d\\Phi}{dt}$ produces lethal high voltage peak ($> 1000\\text{ V} - 5000\\text{ V}$) across open secondary terminals.\n   - Risks fatal electric shock to operators, breakdown of winding insulation, and massive core overheating due to high hysteresis and eddy losses.',
        hi: '1) सामान्य स्थिति में MMF संतुलन: $N_p I_p - N_s I_s = MMF_{mag}$ (बहुत छोटा)। कोर में फ्लक्स $\\Phi$ कम रहता है।\n2) सेकेंडरी खोलने का प्रभाव ($I_s = 0$):\n   - विरोधी सेकेंडरी MMF शून्य हो जाता है।\n   - संपूर्ण प्राथमिक MMF ($N_p I_p$) कोर को चुंबकित करता है, जिससे कोर संतृप्त हो जाता है।\n3) परिणाम: फ्लक्स परिवर्तन की दर $\\frac{d\\Phi}{dt}$ बहुत अधिक हो जाती है, जिससे टर्मिनलों पर जानलेवा उच्च वोल्टेज (>1000V) प्रेरित होता है, जो कर्मचारियों के जीवन के लिए खतरनाक है और ट्रांसफॉर्मर को नष्ट कर सकता है।',
        bn: '১) স্বাভাবিক অবস্থায় MMF সমতা: সেকেন্ডারি কারেন্ট $I_s$ কোরে বিপরীত MMF ($N_s I_s$) তৈরি করে প্রাইমারি MMF কে প্রশমিত করে। ফলে কোরে ফ্লক্স খুব কম থাকে।\n২) সেকেন্ডারি ওপেন করার প্রভাব ($I_s = 0$):\n   - বিপরীতমুখী MMF মুহূর্তে শূন্যে নেমে যায়।\n   - লাইনের পুরো প্রাইমারি MMF ($N_p I_p$) কোরে বিশাল ফ্লক্স জমা করে কোর স্যাচুরেট করে দেয়।\n৩) পরিণতি: ফ্লক্স পরিবর্তনের হার $\\frac{d\\Phi}{dt}$ আকাশচুম্বী হওয়ায় সেকেন্ডারিতে ১০০০V - ৫০০০V পর্যন্ত প্রাণঘাতী ভোল্টেজ তৈরি হয়ে অপারেটর মারা যেতে পারে এবং ট্রান্সফরমার পুড়ে যেতে পারে।'
      }
    }
  ]
};

export const LESSON_FREQUENCY_PHASE: Lesson = {
  id: 'lsn-ch3-frequency-phase',
  topicId: 'ch3-frequency-phase',
  order: 17,
  title: {
    en: 'Measurement of Frequency & Phase',
    hi: 'आवृत्ति एवं फेज़ मापन (Measurement of Frequency & Phase)',
    bn: 'ফ্রিকোয়েন্সি ও ফেজ পরিমাপ (Measurement of Frequency & Phase)'
  },
  easyExplanation: {
    en: 'Frequency ($f$) tells us how many complete AC waveform cycles occur per second (measured in Hertz, Hz). Phase angle ($\phi$) measures the time difference or alignment between two AC signals (like voltage and current). They are measured using Wien bridges, oscilloscopes (Lissajous patterns), or digital counter circuits!',
    hi: 'आवृत्ति ($f$) हमें बताती है कि प्रति सेकंड कितने पूर्ण एसी वेवफॉर्म चक्र होते हैं (हर्ट्ज़, Hz में मापा जाता है)। फेज़ कोण ($\phi$) दो एसी संकेतों (जैसे वोल्टेज और धारा) के बीच समय अंतर या संरेखण को मापता है। उन्हें विएन ब्रिज, ऑसिलोस्कोप या डिजिटल काउंटर सर्किट का उपयोग करके मापा जाता है!',
    bn: 'ফ্রিকোয়েন্সি ($f$) আমাদের জানায় প্রতি সেকেন্ডে কতগুলো এসি ওয়েভ সম্পন্ন হচ্ছে (একক Hz)। আর ফেজ কোণ ($\phi$) দুটি এসি সিগন্যালের (যেমন ভোল্টেজ ও কারেন্ট) সময়ের ব্যবধান প্রকাশ করে। ভিয়েন ব্রিজ, অসিলোস্কোপের লিসাজুস প্যাটার্ন ও ডিজিটাল কাউন্টার দিয়ে এগুলো মাপা হয়!'
  },
  detailedExplanation: {
    en: 'Frequency and phase relationship measurements are fundamental for AC power systems, generators, and communication systems.\n\n1. Fundamental Definitions:\n   • Frequency ($f$): Number of cycles per second. $f = \\frac{1}{T}$ Hz.\n   • Time Period ($T$): Time duration of 1 complete cycle. At $50\\text{ Hz}$, $T = \\frac{1}{50} = 20\\text{ ms}$.\n   • Phase Angle Difference ($\\phi$):\n     - In-Phase: $\\phi = 0^\\circ$ (Voltage and current reach positive peaks together).\n     - Leading: Current reaches peak before voltage (capacitive loads).\n     - Lagging: Current reaches peak after voltage (inductive loads).\n     - Out-of-Phase / Anti-Phase: $\\phi = 180^\\circ$.\n\n2. Frequency Measurement Methods:\n   a) Wien Bridge Frequency Meter:\n      - Consists of two frequency-sensitive arms (series $R_1 C_1$ and parallel $R_2 C_2$) and two ratio arm resistors ($R_3, R_4 = 2 R_3$).\n      - Balance condition: $f = \\frac{1}{2\\pi \\sqrt{R_1 R_2 C_1 C_2}}$.\n      - When $R_1 = R_2 = R$ and $C_1 = C_2 = C$, the formula simplifies to:\n        $$f = \\frac{1}{2\\pi R C}$$\n   b) Digital Frequency Counter:\n      - Uses zero-crossing detector to turn input AC wave into pulses, gating a high-precision crystal clock counter over a 1-second interval.\n\n3. Phase Measurement via CRO (Lissajous Patterns):\n   • Connect Signal 1 ($V_1 \\sin \\omega t$) to Vertical Y-input and Signal 2 ($V_2 \\sin (\\omega t + \\phi)$) to Horizontal X-input (Time-base OFF).\n   • Display shows an ellipse on screen.\n   • Measure $Y_{intercept}$ (Y-axis crossing where $X=0$) and $Y_{max}$ (maximum vertical height).\n   • Phase shift angle: $\\sin \\phi = \\frac{Y_{intercept}}{Y_{max}} \\implies \\phi = \\sin^{-1} \\left( \\frac{Y_1}{Y_2} \\right)$.\n   • Special Patterns:\n     - Straight Line (slope +1): $\\phi = 0^\\circ$ or $360^\\circ$ (In-phase).\n     - Perfect Circle: $\\phi = 90^\\circ$ or $270^\\circ$ ($V_1 = V_2$).\n     - Straight Line (slope -1): $\\phi = 180^\\circ$ (Anti-phase).',
    hi: 'आवृत्ति एवं फेज़ कोण मापन सिद्धांत:\n\n1. परिभाषाएँ: $f = 1/T$ हर्ट्ज़। मानक ग्रिड $50\\text{ Hz} \\implies T = 20\\text{ ms}$।\n\n2. विएन ब्रिज (Wien Bridge) आवृत्ति मापन:\n   जब $R_1 = R_2 = R$ और $C_1 = C_2 = C$:\n   $$f = \\frac{1}{2\\pi R C}$$\n\n3. CRO द्वारा लिसामॉस पैटर्न (Lissajous Pattern) फेज़ मापन:\n   • Y-अक्ष और X-अक्ष पर दोनों सिग्नल लागू करें।\n   • फेज़ कोण: $\\sin \\phi = \\frac{Y_1}{Y_2} \\implies \\phi = \\sin^{-1}\\left(\\frac{Y_1}{Y_2}\\right)$।\n   • $\\phi = 0^\\circ$: सीधी रेखा (धनात्मक ढलान)।\n   • $\\phi = 90^\\circ$: पूर्ण वृत्त (जब $V_1 = V_2$)।\n   • $\\phi = 180^\\circ$: सीधी रेखा (ऋणात्मक ढलान)।',
    bn: 'ফ্রিকোয়েন্সি ও ফেজ কোণ পরিমাপের মূলনীতি:\n\n১. সাধারণ সংজ্ঞা: $f = ১/T$ Hz। স্ট্যান্ডার্ড গ্রিডে $৫০\\text{ Hz} \\implies T = ২০\\text{ ms}$।\n\n২. ভিয়েন ব্রিজ (Wien Bridge) ফ্রিকোয়েন্সি মিটারের সূত্র:\n   যখন $R_1 = R_2 = R$ এবং $C_1 = C_2 = C$:\n   $$f = \\frac{১}{২\\pi R C}$$\n\n৩. সিআরও তে লিসাজুস প্যাটার্ন (Lissajous Pattern) দিয়ে ফেজ নির্ণয়:\n   • X ও Y প্লেটে সিগন্যাল দুটি দিলে স্ক্রিনে উপবৃত্ত (Ellipse) তৈরি হয়।\n   • ফেজ কোণ: $\\sin \\phi = \\frac{Y_1}{Y_2} \\implies \\phi = \\sin^{-1}\\left(\\frac{Y_1}{Y_2}\\right)$।\n   • $\\phi = 0^\\circ$: সরলরেখা (পজিটিভ স্লোপ)।\n   • $\\phi = 90^\\circ$: নিখুঁত বৃত্ত ($V_1 = V_2$ হলে)।\n   • $\\phi = 180^\\circ$: বিপরীতমুখী সরলরেখা।'
  },
  formulas: [
    {
      symbol: 'f',
      expression: 'f = \\frac{1}{2\\pi R C}',
      description: {
        en: 'Wien Bridge Frequency equation when R1=R2=R and C1=C2=C',
        hi: 'विएन ब्रिज आवृत्ति समीकरण जब R1=R2=R और C1=C2=C',
        bn: 'ভিয়েন ব্রিজ ফ্রিকোয়েন্সি সমীকরণ যখন R1=R2=R এবং C1=C2=C'
      }
    },
    {
      symbol: '\\sin \\phi',
      expression: '\\sin \\phi = \\frac{Y_1}{Y_2}',
      description: {
        en: 'Phase angle calculation from CRO Lissajous pattern (Y1 = Y intercept, Y2 = max Y height)',
        hi: 'CRO लिसामॉस पैटर्न से फेज़ कोण की गणना (Y1 = Y-अक्ष काट बिंदु, Y2 = अधिकतम Y ऊंचाई)',
        bn: 'সিআরও লিসাজুস প্যাটার্ন থেকে ফেজ কোণ নির্ণয় (Y1 = Y-অক্ষের ছেদবিন্দু, Y2 = সর্বোচ্চ Y উচ্চতা)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-frequency-phase-wave',
      title: {
        en: 'Wien Bridge Circuit & Lissajous Phase Shift Patterns on CRO',
        hi: 'विएन ब्रिज सर्किट और CRO पर लिसामॉस फेज़ शिफ्ट पैटर्न',
        bn: 'ভিয়েন ব্রিজ সার্কিট ও সিআরও স্ক্রিনে লিসাজুস ফেজ শিফট প্যাটার্ন'
      },
      caption: {
        en: 'Showing 0° line, 90° circle, and 180° line Lissajous patterns alongside Wien bridge frequency balance.',
        hi: 'विएन ब्रिज संतुलन के साथ 0° रेखा, 90° वृत्त और 180° रेखा पैटर्न दर्शाते हुए।',
        bn: '০° সরলরেখা, ৯০° বৃত্ত ও ১৮০° রেখার লিসাজুস প্যাটার্ন এবং ভিয়েন ব্রিজ।'
      },
      svgType: 'frequency-phase-wave'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-fp-1',
      problem: {
        en: 'In a Wien bridge frequency measuring circuit, the frequency selecting arms have equal resistors $R_1 = R_2 = 10\\text{ k}\\Omega$ and equal capacitors $C_1 = C_2 = 0.0159\\ \\mu\\text{F}$. Calculate:\n1) Frequency of the AC supply source at bridge balance.\n2) On a CRO screen displaying Lissajous pattern, the Y-intercept is $y_1 = 3\\text{ div}$ and maximum Y-deflection is $y_2 = 6\\text{ div}$. Calculate phase difference angle $\\phi$.',
        hi: 'एक विएन ब्रिज आवृत्ति मापने वाले परिपथ में, समान प्रतिरोधक $R_1 = R_2 = 10\\text{ k}\\Omega$ और समान कैपेसिटर $C_1 = C_2 = 0.0159\\ \\mu\\text{F}$ हैं। गणना करें:\n1) ब्रिज संतुलन पर एसी आपूर्ति स्रोत की आवृत्ति।\n2) लिसामॉस पैटर्न प्रदर्शित करने वाली CRO स्क्रीन पर, Y-काट $y_1 = 3\\text{ div}$ और अधिकतम Y-विक्षेप $y_2 = 6\\text{ div}$ है। फेज़ अंतर कोण $\\phi$ की गणना करें।',
        bn: 'একটি ভিয়েন ব্রিজ ফ্রিকোয়েন্সি মিটার সার্কিটে $R_1 = R_2 = ১০\\text{ k}\\Omega$ এবং $C_1 = C_2 = ০.০১৫৯\\ \\mu\\text{F}$। বের করো:\n১) ব্রিজের সাম্যাবস্থায় এসি ফ্রিকোয়েন্সি কত?\n২) সিআরও স্ক্রিনে লিসাজুস প্যাটার্নে $y_1 = ৩\\text{ div}$ এবং $y_2 = ৬\\text{ div}$ হলে ফেজ পার্থক্য angle $\\phi$ কত?'
      },
      givenValues: {
        'R': '10 kΩ = 10,000 Ω',
        'C': '0.0159 μF = 1.59 × 10⁻⁸ F',
        'y1': '3 div',
        'y2': '6 div'
      },
      solution: {
        en: '1) $f = \\frac{1}{2\\pi R C} = \\frac{1}{2 \\times 3.1416 \\times 10000 \\times (1.59 \\times 10^{-8})} = \\frac{1}{9.99 \\times 10^{-4}} \\approx 1000\\text{ Hz} = 1\\text{ kHz}$.\n2) $\\sin \\phi = \\frac{y_1}{y_2} = \\frac{3}{6} = 0.5$.\n   Phase Angle $\\phi = \\sin^{-1}(0.5) = 30^\\circ$.',
        hi: '1) $f = \\frac{1}{2\\pi \\times 10000 \\times 1.59 \\times 10^{-8}} = \\frac{1}{0.001} = 1000\\text{ Hz} = 1\\text{ kHz}$।\n2) $\\sin \\phi = \\frac{3}{6} = 0.5 \\implies \\phi = 30^\\circ$।',
        bn: '১) $f = \\frac{১}{২\\pi \\times ১০০০০ \\times ১.৫৯ \\times ১০^{-৮}} = \x5Cfrac{১}{০.০০১} = ১০০০\\text{ Hz} = ১\\text{ kHz}$।\n২) $\\sin \\phi = \\frac{৩}{৬} = ০.৫ \\implies \\phi = ৩০^\circ$।'
      },
      finalAnswer: {
        en: 'Frequency f = 1 kHz, Phase Angle ϕ = 30°',
        hi: 'आवृत्ति f = 1 kHz, फेज़ कोण ϕ = 30°',
        bn: 'ফ্রিকোয়েন্সি f = ১ kHz, ফেজ কোণ ϕ = ৩০°'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Monitoring 50 Hz grid power frequency stability in electrical power dispatch control centers.',
      'Phase angle measurements in 3-phase synchronization of alternators before paralleling to the grid.',
      'Audio signal generators and tone testing in acoustic systems.'
    ],
    hi: [
      'इलेक्ट्रिकल पावर डिस्पैच कंट्रोल सेंटरों में 50 हर्ट्ज़ ग्रिड पावर फ़्रीक्वेंसी स्थिरता की निगरानी।',
      'ग्रिड में समानांतर करने से पहले अल्टरनेटर के 3-फेज सिंक में फेज़ कोण माप।',
      'ध्वनि प्रणालियों में ऑडियो सिग्नल जनरेटर और टोन परीक्षण।'
    ],
    bn: [
      'ন্যাশনাল গ্রিডে ৫০ Hz ফ্রিকোয়েন্সির স্থায়িত্ব মনিটর করতে।',
      'পাওয়ার প্ল্যান্টে একাধিক জেনারেটর বা আল্টারনেটরকে গ্রিডে সিনক্রোনাইজ করতে।',
      'সাউন্ড সিস্টেমে অডিও ফ্রিকোয়েন্সি টিউনিং ও ফেজ এলাইনমেন্ট চেক করতে।'
    ]
  },
  importantPoints: {
    en: [
      'Frequency $f = 1/T$ (Hz). Standard power grid frequency is 50 Hz in India/UK, 60 Hz in US.',
      'Wien Bridge measures frequency using $f = 1 / (2\\pi R C)$ when $R_1=R_2=R$ and $C_1=C_2=C$.',
      'Phase angle $\\phi$ represents phase shift between two AC sinusoidal waveforms.',
      'Lissajous patterns on CRO determine phase shift: $\\sin \\phi = y_1 / y_2$.',
      'Straight line with positive slope = 0° in-phase; Circle = 90° phase shift; Straight line with negative slope = 180° anti-phase.',
      'Digital frequency counters use crystal clocks and zero-crossing pulse counting for high precision.'
    ],
    hi: [
      'आवृत्ति $f = 1/T$ (हर्ट्ज़)। मानक पावर ग्रिड आवृत्ति भारत/यूके में 50 Hz, यूएस में 60 Hz है।',
      'विएन ब्रिज $f = 1 / (2\\pi R C)$ का उपयोग करके आवृत्ति मापता है।',
      'CRO पर लिसामॉस पैटर्न फेज़ शिफ्ट निर्धारित करते हैं: $\\sin \\phi = y_1 / y_2$।',
      'धनात्मक ढलान वाली सीधी रेखा = 0° (इन-फेज़); वृत्त = 90° फेज़ शिफ्ट; ऋणात्मक ढलान वाली रेखा = 180°।',
      'डिजिटल फ़्रीक्वेंसी काउंटर उच्च सटीकता के लिए क्रिस्टल क्लॉक का उपयोग करते हैं।'
    ],
    bn: [
      'ফ্রিকোয়েন্সি $f = ১/T$ Hz। ভারত ও বাংলাদেশে গ্রিড ফ্রিকোয়েন্সি ৫০ Hz (পর্যায়কাল ২০ ms)।',
      'ভিয়েন ব্রিজে ফ্রিকোয়েন্সি নির্ণয়ের সূত্র: $f = ১ / (২\\pi R C)$।',
      'সিআরও স্ক্রিনে লিসাজুস প্যাটার্ন দেখে ফেজ বের করার সূত্র: $\\sin \\phi = y_1 / y_2$।',
      'পজিটিভ স্লোপ সরলরেখা = ০° ফেজ; বৃত্ত = ৯০° ফেজ; নেগেটিভ স্লোপ সরলরেখা = ১৮০° ফেজ।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing time period ($T$ in seconds) with frequency ($f$ in Hz): $f = 1/T$.',
      'Measuring phase shift using Lissajous pattern with Time-Base ON: Time-base sweep generator MUST be switched OFF (X-Y Mode ON).',
      'Misreading $y_1$ (Y-intercept) and $y_2$ (maximum Y height) on the CRO grid screen.'
    ],
    hi: [
      'समय अवधि ($T$ सेकंड में) को आवृत्ति ($f$ हर्ट्ज़ में) के साथ भ्रमित करना: $f = 1/T$।',
      'टाइम-बेस ऑन के साथ लिसामॉस पैटर्न का उपयोग करके फेज़ शिफ्ट मापना: टाइम-बेस को बंद (X-Y मोड ऑन) किया जाना चाहिए।',
      'CRO ग्रिड स्क्रीन पर $y_1$ (Y-काट) और $y_2$ (अधिकतम Y ऊंचाई) को गलत पढ़ना।'
    ],
    bn: [
      'পর্যায়কাল ($T$) ও ফ্রিকোয়েন্সি ($f$) গুলিয়ে ফেলা: ফ্রিকোয়েন্সি হলো ১ কে পর্যায়কাল দিয়ে ভাগ।',
      'টাইম-বেস অন রেখে সিআরও তে লিসাজুস প্যাটার্ন তৈরি করার চেষ্টা করা: লিসাজুস প্যাটার্নের জন্য টাইম বেস বন্ধ করে X-Y মোড অন রাখতে হয়।',
      'সিআরও স্কেলে $y_1$ (Y-অক্ষের ছেদ) এবং $y_2$ (সর্বোচ্চ বিস্তার) সঠিকভাবে না মেপে ভুল ফেজ বের করা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-fp-1',
      question: {
        en: 'Which AC bridge is primarily used as a frequency measuring bridge?',
        hi: 'मुख्य रूप से किस एसी ब्रिज का उपयोग आवृत्ति मापने वाले ब्रिज के रूप में किया जाता है?',
        bn: 'প্রধানত কোন এসি ব্রিজটি ফ্রিকোয়েন্সি পরিমাপক ব্রিজ হিসেবে ব্যবহৃত হয়?'
      },
      options: [
        { id: 'a', text: { en: 'Maxwell Bridge', hi: 'मैक्सवेल ब्रिज', bn: 'ম্যাক্সওয়েল ব্রিজ' } },
        { id: 'b', text: { en: 'Wien Bridge', hi: 'विएन ब्रिज (Wien Bridge)', bn: 'ভিয়েন ব্রিজ (Wien Bridge)' } },
        { id: 'c', text: { en: 'Schering Bridge', hi: 'शेरिंग ब्रिज', bn: 'শেরিং ব্রিজ' } },
        { id: 'd', text: { en: 'Kelvin Bridge', hi: 'केल्विन ब्रिज', bn: 'কেলভিন ব্রিজ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Wien bridge balance condition depends directly on source frequency f = 1 / (2π R C), making it ideal for frequency measurement.',
        hi: 'विएन ब्रिज संतुलन स्थिति सीधे स्रोत आवृत्ति f = 1 / (2π R C) पर निर्भर करती है, जो इसे आवृत्ति माप के लिए आदर्श बनाती है।',
        bn: 'ভিয়েন ব্রিজের সাম্যাবস্থার শর্ত সরাসরি সোর্স ফ্রিকোয়েন্সির উপর নির্ভর করে, তাই এটি ফ্রিকোয়েন্সি মাপতে সেরা।'
      }
    },
    {
      id: 'mcq-ch3-fp-2',
      question: {
        en: 'When two equal voltage sine waves with 90° phase shift are applied to the X and Y plates of a CRO, what Lissajous pattern appears on the screen?',
        hi: 'जब 90° फेज़ शिफ्ट वाली दो समान वोल्टेज साइन तरंगें CRO की X और Y प्लेटों पर लागू होती हैं, तो स्क्रीन पर कौन सा लिसामॉस पैटर्न दिखाई देता है?',
        bn: 'যখন ৯০° ফেজ পার্থক্যের দুটি সমান ভোল্টেজ সাইন ওয়েভ সিআরও এর X ও Y প্লেটে প্রয়োগ করা হয়, তখন স্ক্রিনে কী ধরণের লিসাজুস প্যাটার্ন ফুটে ওঠে?'
      },
      options: [
        { id: 'a', text: { en: 'Straight line with positive 45° slope', hi: '45° धनात्मक ढलान वाली सीधी रेखा', bn: '৪৫° পজিটিভ স্লোপযুক্ত সরলরেখা' } },
        { id: 'b', text: { en: 'Perfect Circle', hi: 'पूर्ण वृत्त (Perfect Circle)', bn: 'নিখুঁত বৃত্ত (Perfect Circle)' } },
        { id: 'c', text: { en: 'Parabola', hi: 'परवलय', bn: 'প্যারাবোলা' } },
        { id: 'd', text: { en: 'Horizontal line', hi: 'क्षैतिज रेखा', bn: 'হরিজন্টাল লাইন' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Equal amplitude sine waves ($V_x = V_m \\sin \\omega t, V_y = V_m \\cos \\omega t$) satisfy $x^2 + y^2 = V_m^2$, producing a perfect circle.',
        hi: 'समान आयाम वाली साइन तरंगें $x^2 + y^2 = V_m^2$ को संतुष्ट करती हैं, जिससे एक पूर्ण वृत्त बनता है।',
        bn: 'সমান বিস্তারের সাইন ওয়েভদ্বয় $x^2 + y^2 = V_m^2$ সমীকরণ সিদ্ধ করে স্ক্রিনে একটি বৃত্ত তৈরি করে।'
      }
    },
    {
      id: 'mcq-ch3-fp-3',
      question: {
        en: 'What is the time period T of a standard 50 Hz power grid AC signal?',
        hi: 'एक मानक 50 Hz पावर ग्रिड एसी सिग्नल की समय अवधि T क्या है?',
        bn: 'একটি স্ট্যান্ডার্ড ৫০ Hz পাওয়ার গ্রিড এসি সিগন্যালের পর্যায়কাল T কত?'
      },
      options: [
        { id: 'a', text: { en: '10 ms', hi: '10 ms', bn: '১০ ms' } },
        { id: 'b', text: { en: '20 ms', hi: '20 ms', bn: '২০ ms' } },
        { id: 'c', text: { en: '50 ms', hi: '50 ms', bn: '৫০ ms' } },
        { id: 'd', text: { en: '100 ms', hi: '100 ms', bn: '১০০ ms' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'T = 1 / f = 1 / 50 Hz = 0.020 seconds = 20 milliseconds.',
        hi: 'T = 1 / f = 1 / 50 हर्ट्ज़ = 0.020 सेकंड = 20 मिलीसेकंड।',
        bn: 'T = ১ / f = ১ / ৫০ Hz = ০.০২০ সেকেন্ড = ২০ মিলিসেকেন্ড।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-fp-1',
      question: {
        en: 'Describe how Lissajous patterns on a CRO screen are used to measure the phase difference between two sinusoidal electrical signals.',
        hi: 'वर्णन करें कि दो साइनसोइडल विद्युत संकेतों के बीच फेज़ अंतर को मापने के लिए CRO स्क्रीन पर लिसामॉस पैटर्न का उपयोग कैसे किया जाता है।',
        bn: 'সিআরও স্ক্রিনে লিসাজুস প্যাটার্ন ব্যবহার করে কীভাবে দুটি সাইনসোইডাল সিগন্যালের ফেজ পার্থক্য নির্ণয় করা হয় তা ব্যাখ্যা করো।'
      },
      hint: {
        en: 'Explain X-Y mode setup, measuring Y-intercept $y_1$ and max height $y_2$, formula $\\sin \\phi = y_1/y_2$.',
        hi: 'X-Y मोड सेटअप, Y-काट $y_1$ और अधिकतम ऊंचाई $y_2$ मापने, सूत्र $\\sin \\phi = y_1/y_2$ की व्याख्या करें।',
        bn: 'X-Y মোড অন করে Y-অক্ষের ছেদবিন্দু $y_1$ এবং সর্বোচ্চ বিস্তার $y_2$ মেপে $\\sin \\phi = y_1/y_2$ ব্যবহারের কথা বলো।'
      },
      answerKey: {
        en: '1) CRO Setup: Turn OFF horizontal internal time-base sweep generator. Switch CRO to X-Y Mode. Feed Reference Signal $v_1(t) = V_1 \\sin(\\omega t)$ into X-channel and Test Signal $v_2(t) = V_2 \\sin(\\omega t + \\phi)$ into Y-channel.\n2) Pattern Formation: Electron beam traces an ellipse on screen.\n3) Measurement Procedure:\n   • Measure $y_1$: The Y-axis intercept height where the trace crosses the vertical center axis ($x=0$).\n   • Measure $y_2$: The maximum peak vertical height of the ellipse.\n4) Mathematical Calculation: $\\sin \\phi = \\frac{y_1}{y_2} \\implies \\phi = \\sin^{-1} \\left( \\frac{y_1}{y_2} \\right)$.\n5) Special cases: Straight line with positive slope = 0°; Circle = 90°; Straight line with negative slope = 180°.',
        hi: '1) CRO सेटअप: टाइम-बेस को बंद करें और X-Y मोड चालू करें। संदर्भ सिग्नल को X-चैनल में और परीक्षण सिग्नल को Y-चैनल में दें।\n2) पैटर्न: बीम स्क्रीन पर एक अंडाकार (Ellipse) बनाती है।\n3) माप: $y_1$ (Y-काट) और $y_2$ (अधिकतम Y ऊंचाई) मापें।\n4) सूत्र: $\\sin \\phi = \\frac{y_1}{y_2} \\implies \\phi = \\sin^{-1}\\left(\\frac{y_1}{y_2}\\right)$।',
        bn: '১) সিআরও সেটিং: টাইম বেস বন্ধ করে X-Y মোড চালু করো। রেফারেন্স সিগন্যাল X-প্লেটে এবং টেস্ট সিগন্যাল Y-প্লেটে দাও।\n২) চিত্র: বিম স্ক্রিনে একটি উপবৃত্ত (Ellipse) ফুটিয়ে তোলে।\n৩) পরিমাপ প্রণালী: Y-অক্ষের ছেদবিন্দু $y_1$ এবং সর্বোচ্চ উচ্চতা $y_2$ মেপে নাও।\n৪) ফেজ সমীকরণ: $\\sin \\phi = \\frac{y_1}{y_2} \\implies \\phi = \\sin^{-1}\\left(\\frac{y_1}{y_2}\\right)$।'
      }
    },
    {
      id: 'pq-ch3-fp-2',
      question: {
        en: 'Draw the circuit diagram of a Wien Bridge frequency meter and derive its frequency balance formula f = 1 / (2π R C).',
        hi: 'विएन ब्रिज आवृत्ति मीटर का सर्किट आरेख बनाएं और इसके आवृत्ति संतुलन सूत्र f = 1 / (2π R C) को व्युत्पन्न करें।',
        bn: 'একটি ভিয়েন ব্রিজ ফ্রিকোয়েন্সি মিটারের সার্কিট আঁকো এবং এর সাম্যাবস্থার ফ্রিকোয়েন্সি সূত্র f = ১ / (২π R C) প্রতিপাদন করো।'
      },
      hint: {
        en: 'Set $Z_1 = R_1 + 1/j\\omega C_1$ (series) and $Z_2 = R_2 || (1/j\\omega C_2)$ (parallel). Equate ratio $Z_1/Z_2 = R_3/R_4 = 2$.',
        hi: 'श्रेणीक्रम $Z_1$ और समांतर $Z_2$ सेट करें। अनुपात $Z_1/Z_2 = R_3/R_4 = 2$ बराबर करें।',
        bn: 'শ্রেণি $Z_1$ ও সমান্তরাল $Z_2$ ধরে $Z_1/Z_2 = R_3/R_4 = ২$ সমীকরণ প্রমাণ করো।'
      },
      answerKey: {
        en: '1) Wien Bridge Arms: Arm 1 has series $R_1, C_1$ ($Z_1 = R_1 + \\frac{1}{j\\omega C_1}$). Arm 2 has parallel $R_2, C_2$ ($Y_2 = \\frac{1}{R_2} + j\\omega C_2$). Arm 3 & 4 contain pure resistors $R_3, R_4$.\n2) Balance Equation: $Z_1 Z_4 = Z_2 Z_3 \\implies Z_1 Y_2 = \\frac{R_3}{R_4}$.\n   $$\\left( R_1 + \\frac{1}{j\\omega C_1} \\right) \\left( \\frac{1}{R_2} + j\\omega C_2 \\right) = \\frac{R_3}{R_4}$$\n   $$\\left( \\frac{R_1}{R_2} + \\frac{C_2}{C_1} \\right) + j \\left( \\omega R_1 C_2 - \\frac{1}{\\omega R_2 C_1} \\right) = \\frac{R_3}{R_4}$$\n3) Equating imaginary part to zero:\n   $$\\omega R_1 C_2 - \\frac{1}{\\omega R_2 C_1} = 0 \\implies \\omega^2 = \\frac{1}{R_1 R_2 C_1 C_2} \\implies f = \\frac{1}{2\\pi \\sqrt{R_1 R_2 C_1 C_2}}$$\n4) When $R_1 = R_2 = R$ and $C_1 = C_2 = C$:\n   $$f = \\frac{1}{2\\pi R C}$$',
        hi: '1) संरचना: श्रेणी $R_1, C_1$, समांतर $R_2, C_2$, और $R_3, R_4$।\n2) संतुलन: $(R_1 + 1/j\\omega C_1)(1/R_2 + j\\omega C_2) = R_3/R_4$।\n3) काल्पनिक भाग शून्य करने पर: $\\omega R_1 C_2 - 1/(\\omega R_2 C_1) = 0 \\implies \\omega^2 = 1/(R_1 R_2 C_1 C_2)$।\n4) जब $R_1=R_2=R$ और $C_1=C_2=C$: $f = \\frac{1}{2\\pi R C}$।',
        bn: '১) কাঠামোগত বাহুসমূহ: শ্রেণিতে $R_1, C_1$, সমান্তরালে $R_2, C_2$ এবং ওহমিক $R_3, R_4$।\n২) সাম্যাবস্থা: $(R_1 + ১/j\\omega C_1)(১/R_2 + j\\omega C_2) = R_3/R_4$।\n৩) কাল্পনিক অংশ শূন্য ধরে: $\\omega R_1 C_2 - ১/(\\omega R_2 C_1) = 0 \\implies \\omega^2 = ১/(R_1 R_2 C_1 C_2)$।\n৪) $R_1=R_2=R$ এবং $C_1=C_2=C$ বসিয়ে পাই: $f = \\frac{১}{২\\pi R C}$।'
      }
    }
  ]
};

export const CHAPTER_3_LESSONS_PART4: Record<string, Lesson> = {
  'ch3-inductance-capacitance': LESSON_INDUCTANCE_CAPACITANCE,
  'ch3-instrument-transformers': LESSON_INSTRUMENT_TRANSFORMERS,
  'ch3-frequency-phase': LESSON_FREQUENCY_PHASE
};
