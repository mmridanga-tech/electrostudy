import { Lesson } from '../types';

export const LESSON_SYMMETRICAL_COMPONENTS: Lesson = {
  id: 'lsn-ch14-symmetrical-components',
  topicId: 'tp-three-phase-sequence-components',
  chapterId: 'ch-three-phase',
  order: 2,
  title: {
    en: 'Symmetrical Components & Sequence Networks',
    hi: 'सममित घटक एवं अनुक्रम नेटवर्क',
    bn: 'সিমেট্রিক্যাল কম্পোনেন্টস ও সিকোয়েন্স নেটওয়ার্ক'
  },
  description: {
    en: 'Master Charles LeGeyt Fortescue\'s groundbreaking 1918 theorem. Deconstruct any unbalanced three-phase set of phasors into three balanced, decoupled symmetrical components: Positive-sequence (forward-rotating), Negative-sequence (counter-rotating), and Zero-sequence (stationary in-phase). Master the complex operator a (1∠120°), sequence transformation matrices, and electrical motor overheating under negative-sequence currents.',
    hi: 'चार्ल्स लेगेट फोर्टेस्क्यू के 1918 के ऐतिहासिक प्रमेय का अध्ययन करें। किसी भी असंतुलित थ्री-फेज फेजर प्रणाली को तीन संतुलित घटकों में विभाजित करें: धनात्मक अनुक्रम (आगे घूमने वाला), ऋणात्मक अनुक्रम (उल्टी दिशा में घूमने वाला), और शून्य अनुक्रम (समान कला में)। सम्मिश्र ऑपरेटर a (1∠120°), रूपांतरण मैट्रिक्स और ऋणात्मक अनुक्रम से मोटरों में होने वाली अत्यधिक हीटिंग को समझें।',
    bn: 'চার্লস লেগেইট ফোর্টেস্কিউর ১৯১৮ সালের ঐতিহাসিক উপপাদ্যটি আয়ত্ত করুন। যেকোনো ভারসাম্যহীন থ্রি-ফেজ ভেক্টর সেটকে তিনটি প্রতিসম উপাদানে বিভক্ত করুন: পজিটিভ সিকোয়েন্স (সম্মুখ ঘূর্ণনশীল), নেগেটিভ সিকোয়েন্স (বিপরীত ঘূর্ণনশীল) এবং জিরো সিকোয়েন্স (সম-দশা)। জটিল অপারেটর a (1∠120°), সিকোয়েন্স ম্যাট্রিক্স এবং নেগেটিভ সিকোয়েন্স কারেন্টের কারণে মোটরের অতিরিক্ত উত্তপ্ত হওয়া বিশদভাবে জানুন।'
  },
  estimatedMinutes: 50,
  easyExplanation: {
    en: 'When a three-phase power system suffers an imbalance—such as a single broken wire or unequal single-phase loads—the phase voltages and currents become uneven and lopsided. Calculating currents in such messy networks used to be nearly impossible until Dr. Fortescue discovered a mathematical breakthrough in 1918: ANY lopsided three-phase system can be broken down into three simple, perfectly balanced systems added together! System 1 (Positive) rotates forward, driving your motors normally. System 2 (Negative) rotates backward, acting like a brake and violently cooking the rotor iron. System 3 (Zero) doesn\'t rotate at all; all three phases pulse together in unison and return through the neutral wire or earth ground.',
    hi: 'जब किसी 3-फेज सिस्टम में असंतुलन आ जाता है (जैसे एक तार टूटना या अलग-अलग लोड), तो वोल्टेज और करंट टेढ़े-मेढ़े हो जाते हैं। 1918 में डॉ. फोर्टेस्क्यू ने सिद्ध किया कि किसी भी असंतुलित प्रणाली को तीन सरल संतुलित प्रणालियों के योग के रूप में लिखा जा सकता है: 1. पॉजिटिव अनुक्रम (जो आगे घूमता है और मोटर चलाता है), 2. नेगेटिव अनुक्रम (जो उल्टी दिशा में घूमकर मोटर में ब्रेक लगाता है और उसे गर्म करता है), और 3. जीरो अनुक्रम (जो बिल्कुल नहीं घूमता, बल्कि तीनों तारों में एक साथ स्पंदित होकर न्यूट्रल से बहता है)।',
    bn: 'যখন থ্রি-ফেজ সিস্টেমে ভারসাম্য নষ্ট হয় (যেমন একটি ফেজ বিচ্ছিন্ন হওয়া বা অসমান লোড), তখন ফেজরগুলি অসম হয়ে পড়ে। ১৯১৮ সালে ড. ফোর্টেস্কিউ প্রমাণ করেন যে যেকোনো ভারসাম্যহীন সিস্টেমকে তিনটি সুষম প্রতিসম সিস্টেমের যোগফল হিসেবে প্রকাশ করা যায়: ১. পজিটিভ সিকোয়েন্স (যা স্বাভাবিকভাবে সামনের দিকে ঘুরে মোটর চালায়), ২. নেগেটিভ সিকোয়েন্স (যা উল্টো দিকে ঘুরে মোটরে ব্রেক সৃষ্টি করে ও রটারকে মারাত্মকভাবে গরম করে), এবং ৩. জিরো সিকোয়েন্স (যা ঘোরে না, বরং তিনটি ফেজে একসাথে স্পন্দিত হয়ে নিউট্রাল বা মাটি দিয়ে প্রবাহিত হয়)।'
  },
  detailedExplanation: {
    en: 'Fortescue\'s Theorem (1918) states that any coplanar set of N unbalanced phasors can be uniquely resolved into N symmetrical sets of balanced phasors.\n\n1. The Complex Phase-Shift Operator \'a\':\n   The unit phasor operator \'a\' produces a counter-clockwise spatial rotation of 120° (2π/3 radians):\n   • a = 1 ∠120° = e^(j 2π/3) = -0.5 + j(√3/2) ≈ -0.5 + j0.8660\n   • a² = 1 ∠240° = 1 ∠-120° = -0.5 - j(√3/2) ≈ -0.5 - j0.8660\n   • a³ = 1 ∠360° = 1 ∠0° = 1.0 + j0.0\n   Fundamental Identity: 1 + a + a² = 0.\n\n2. The Three Sequence Components (for Phase A Reference):\n   • Positive-Sequence (Subscript 1): Three phasors of equal magnitude, displaced by 120°, with phase sequence ABC: [Va1, Vb1, Vc1] = [Va1, a²·Va1, a·Va1].\n   • Negative-Sequence (Subscript 2): Three phasors of equal magnitude, displaced by 120°, with reverse phase sequence ACB: [Va2, Vb2, Vc2] = [Va2, a·Va2, a²·Va2].\n   • Zero-Sequence (Subscript 0): Three phasors of identical magnitude and identical phase angle (zero displacement): [Va0, Vb0, Vc0] = [Va0, Va0, Va0].\n\n3. Sequence Synthesis Equations:\n   By superposition, the actual phase voltages are the sums of the sequence components:\n   • Va = Va0 + Va1 + Va2\n   • Vb = Vb0 + Vb1 + Vb2 = Va0 + a²·Va1 + a·Va2\n   • Vc = Vc0 + Vc1 + Vc2 = Va0 + a·Va1 + a²·Va2\n\n4. Sequence Analysis (Decomposition Matrix):\n   Inverting the transformation matrix [A] yields:\n   • Va0 = (1/3) · (Va + Vb + Vc)\n   • Va1 = (1/3) · (Va + a·Vb + a²·Vc)\n   • Va2 = (1/3) · (Va + a²·Vb + a·Vc)\n\n5. Physical Manifestations in Power Apparatus:\n   • Zero-Sequence Currents (Ia0): Because Ia0 = Ib0 = Ic0, the total neutral current in a 4-wire system is In = Ia + Ib + Ic = 3·Ia0. In a 3-wire ungrounded system, In must be 0, meaning zero-sequence currents cannot flow (Ia0 = 0)!\n   • Negative-Sequence Harm: In AC motors, negative-sequence currents produce a flux rotating backwards at synchronous speed relative to the stator. Relative to the rotor spinning forward at (1-s)ωs, this negative flux sweeps past rotor bars at (2 - s)ωs ≈ 2f (100 Hz at 50 Hz line). This double-frequency induction causes severe skin-effect resistive heating in the rotor iron and bars, rapidly destroying insulation. ANSI/NEMA MG-1 limits voltage unbalance factor (VUF = |V2/V1|) to under 1% to 2% for safe motor operation.',
    hi: 'फोर्टेस्क्यू प्रमेय (1918): किसी भी असंतुलित 3-फेज प्रणाली को तीन सममितीय घटकों में तोड़ा जा सकता है:\n\n1. ऑपरेटर a: a = 1 ∠120° = -0.5 + j0.866। सर्वसमिका: 1 + a + a² = 0।\n2. तीन अनुक्रम घटक:\n   • धनात्मक (1): समान मान, 120° अंतर, ABC क्रम (Va1, a²Va1, aVa1)\n   • ऋणात्मक (2): समान मान, 120° अंतर, ACB क्रम (Va2, aVa2, a²Va2)\n   • शून्य (0): समान मान और एक ही कला कोण (Va0, Va0, Va0)\n3. विश्लेषण सूत्र:\n   • Va0 = (1/3)(Va + Vb + Vc)\n   • Va1 = (1/3)(Va + a·Vb + a²·Vc)\n   • Va2 = (1/3)(Va + a²·Vb + a·Vc)\n4. भौतिक महत्व: न्यूट्रल धारा In = 3·Ia0 होती है। 3-तार प्रणाली में शून्य अनुक्रम धारा नहीं बह सकती। ऋणात्मक अनुक्रम धारा मोटर के रोटर में 2f (100 Hz) की उच्च आवृत्ति धाराएं उत्पन्न करती है, जिससे रोटर अत्यधिक गर्म हो जाता है।',
    bn: 'ফোর্টেস্কিউর উপপাদ্য (১৯১৮): যেকোনো ভারসাম্যহীন ৩-ফেজ ভেক্টর সেটকে তিনটি প্রতিসম সেটে রূপান্তর করা যায়:\n\n১. অপারেটর a: a = 1 ∠120° = -0.5 + j0.866। সূত্র: 1 + a + a² = 0।\n২. তিনটি সিকোয়েন্স উপাদান:\n   • পজিটিভ (১): সমান মান, ১২০° ব্যবধান, ABC ক্রম (Va1, a²Va1, aVa1)\n   • নেগেটিভ (২): সমান মান, ১২০° ব্যবধান, ACB ক্রম (Va2, aVa2, a²Va2)\n   • জিরো (০): সমান মান এবং একই দশা (Va0, Va0, Va0)\n৩. গাণিতিক বিশ্লেষণ:\n   • Va0 = (1/3)(Va + Vb + Vc)\n   • Va1 = (1/3)(Va + a·Vb + a²·Vc)\n   • Va2 = (1/3)(Va + a²·Vb + a·Vc)\n৪. গুরুত্ব: নিউট্রাল কারেন্ট In = 3·Ia0। ৩-তার সিস্টেমে জিরো সিকোয়েন্স কারেন্ট বইতে পারে না। নেগেটিভ সিকোয়েন্স রটারে দ্বিগুণ ফ্রিকোয়েন্সির (2f = ১০০ Hz) কারেন্ট তৈরি করে অতিরিক্ত তাপ সৃষ্টি করে।'
  },
  formulas: [
    {
      id: 'f-operator-a',
      symbol: 'a',
      expression: 'a = 1 \\angle 120^\\circ = -0.5 + j\\frac{\\sqrt{3}}{2}, \\quad 1 + a + a^2 = 0',
      title: {
        en: 'Complex 120° Phase-Shift Operator',
        hi: 'सम्मिश्र 120° फेज-शिफ्ट ऑपरेटर a',
        bn: 'জটিল ১২০° ফেজ-শিফট অপারেটর a'
      },
      description: {
        en: 'Defines the unit complex vector operator that rotates any phasor by 120 degrees counter-clockwise.',
        hi: 'इकाई सदिश ऑपरेटर जो किसी भी फेजर को वामावर्त 120 डिग्री घुमा देता है।',
        bn: 'একক জটিল ভেক্টর অপারেটর যা যেকোনো ভেক্টরকে ঘড়ির কাঁটার বিপরীতে ১২০ ডিগ্রি আবর্তন করায়।'
      },
      variables: [
        { symbol: 'a', name: { en: 'Fortescue operator 1∠120°', hi: 'फोर्टेस्क्यू ऑपरेटर 1∠120°', bn: 'ফোর্টেস্কিউ অপারেটর 1∠120°' } },
        { symbol: 'a^2', name: { en: 'Operator squared: 1∠240° = 1∠-120°', hi: 'ऑपरेटर वर्ग: 1∠240°', bn: 'অপারেটর বর্গ: 1∠240°' } }
      ]
    },
    {
      id: 'f-fortescue-analysis',
      symbol: '[V_{012}]',
      expression: '\\begin{bmatrix} V_0 \\\\ V_1 \\\\ V_2 \\end{bmatrix} = \\frac{1}{3} \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & a & a^2 \\\\ 1 & a^2 & a \\end{bmatrix} \\begin{bmatrix} V_a \\\\ V_b \\\\ V_c \\end{bmatrix}',
      title: {
        en: 'Fortescue Symmetrical Decomposition Matrix',
        hi: 'फोर्टेस्क्यू सममितीय अपघटन मैट्रिक्स',
        bn: 'ফোর্টেস্কিউ প্রতিসম রূপান্তর ম্যাট্রিক্স'
      },
      description: {
        en: 'Transforms three arbitrary unbalanced phase phasors into independent zero, positive, and negative sequence components.',
        hi: 'तीन असंतुलित फेजरों को शून्य, धनात्मक और ऋणात्मक घटकों में रूपांतरित करता है।',
        bn: 'যেকোনো তিনটি ভারসাম্যহীন ফেজরকে স্বাধীন জিরো, পজিটিভ ও নেগেটিভ উপাদানে রূপান্তরিত করে।'
      },
      variables: [
        { symbol: 'V_0', name: { en: 'Zero-sequence component phasor', hi: 'शून्य-अनुक्रम घटक फेजर', bn: 'জিরো-সিকোয়েন্স উপাদান ফেজর' } },
        { symbol: 'V_1', name: { en: 'Positive-sequence component phasor', hi: 'धनात्मक-अनुक्रम घटक फेजर', bn: 'পজিটিভ-সিকোয়েন্স উপাদান ফেজর' } },
        { symbol: 'V_2', name: { en: 'Negative-sequence component phasor', hi: 'ऋणात्मक-अनुक्रम घटक फेजर', bn: 'নেগেটিভ-সিকোয়েন্স উপাদান ফেজর' } }
      ]
    },
    {
      id: 'f-neutral-current-zero-sequence',
      symbol: 'I_n',
      expression: 'I_n = I_a + I_b + I_c = 3 \\cdot I_{a0}',
      title: {
        en: 'Neutral Conductor Current from Zero Sequence',
        hi: 'शून्य अनुक्रम से न्यूट्रल धारा',
        bn: 'জিরো সিকোয়েন্স থেকে নিউট্রাল কারেন্ট'
      },
      description: {
        en: 'Demonstrates that the current returning through the neutral conductor is exactly three times the zero-sequence phase current.',
        hi: 'सिद्ध करता है कि न्यूट्रल चालक में लौटने वाली धारा शून्य-अनुक्रम धारा का ठीक 3 गुना होती है।',
        bn: 'প্রমাণ করে যে নিউট্রাল তার দিয়ে প্রবাহিত রিটার্ন কারেন্ট জিরো-সিকোয়েন্স ফেজ কারেন্টের ঠিক তিন গুণ।'
      },
      variables: [
        { symbol: 'I_n', name: { en: 'Total neutral return current (Amperes)', hi: 'कुल न्यूट्रल वापसी धारा (एम्पीयर)', bn: 'মোট নিউট্রাল কারেন্ট (অ্যাম্পিয়ার)' } },
        { symbol: 'I_{a0}', name: { en: 'Zero-sequence current component (Amperes)', hi: 'शून्य-अनुक्रम धारा घटक (एम्पीयर)', bn: 'জিরো-সিকোয়েন্স কারেন্ট উপাদান (অ্যাম্পিয়ার)' } }
      ]
    }
  ],
  diagrams: [
    {
      id: 'diag-ch14-symmetrical-components',
      title: {
        en: 'Decomposition of Unbalanced System into Positive, Negative & Zero Sequences',
        hi: 'असंतुलित प्रणाली का धनात्मक, ऋणात्मक एवं शून्य अनुक्रमों में अपघटन',
        bn: 'ভারসাম্যহীন সিস্টেমের পজিটিভ, নেগেটিভ ও জিরো সিকোয়েন্সে রূপান্তর'
      },
      caption: {
        en: 'Interactive vector representation showing an unbalanced set of phase voltages resolved into its three constituent balanced Fortescue sequence sets.',
        hi: 'असंतुलित वोल्टेज फेजरों का उनके तीन संतुलित फोर्टेस्क्यू घटकों में सदिश विश्लेषण।',
        bn: 'ভারসাম্যহীন ফেজর সেটের তিনটি প্রতিসম ফোর্টেস্কিউ উপাদানে বিভাজনের ভেক্টর চিত্র।'
      },
      svgType: 'sch-ch14-symmetrical-components'
    }
  ],
  sections: [
    {
      id: 'sec-ch14-voltage-unbalance-factor',
      title: {
        en: 'Voltage Unbalance Factor (VUF) & Motor Derating (IEC 60034-1)',
        hi: 'वोल्टेज असंतुलन कारक (VUF) एवं मोटर डी-रेटिंग',
        bn: 'ভোল্টেজ ভারসাম্যহীনতা গুণক (VUF) ও মোটর ডি-রেটিং'
      },
      content: {
        en: 'In industrial distribution systems, voltage unbalance is quantified by the true Symmetrical Component definition:\n\nVUF (%) = (|V_2| / |V_1|) · 100%\n\nwhere V_2 is the negative-sequence voltage magnitude and V_1 is the positive-sequence voltage magnitude.\n\nNegative-sequence voltages produce backward-rotating stator fields. Because the induction motor rotor is rotating forward at slip s ≈ 0.02 to 0.05, the effective slip seen by the negative-sequence field is s_neg = (2 - s) ≈ 1.96. At this huge slip, the rotor equivalent impedance is dominated almost entirely by the low locked-rotor resistance and leakage reactance (Z_neg ≈ Z_locked_rotor ≈ 0.15 · Z_full_load). Consequently, even a small 3% negative-sequence voltage injects a disproportionately massive 20% to 25% negative-sequence current into the motor! This produces excessive I²R heating, hot-spot thermal breakdown of slot insulation, and requires steep motor derating per IEC 60034-1 and NEMA MG-1 standards.',
        hi: 'औद्योगिक संयंत्रों में वोल्टेज असंतुलन को VUF (%) = (|V2| / |V1|) · 100% द्वारा मापा जाता है। ऋणात्मक अनुक्रम वोल्टेज मोटर में उल्टी दिशा में घूमने वाला फ्लक्स बनाते हैं। रोटर के लिए इसका स्लिप s_neg = 2 - s ≈ 1.95 होता है, जिससे मोटर की प्रतिबाधा बहुत कम (लॉक्ड-रोटर स्थिति) हो जाती है। केवल 3% वोल्टेज असंतुलन भी 20-25% ऋणात्मक अनुक्रम धारा प्रवाहित कर देता है, जिससे मोटर जल सकती है।',
        bn: 'শিল্প বিতরণ ব্যবস্থায় ভোল্টেজ ভারসাম্যহীনতা VUF (%) = (|V2| / |V1|) · 100% দ্বারা নির্ধারিত হয়। নেগেটিভ সিকোয়েন্স ভোল্টেজ মোটরে বিপরীতমুখী চৌম্বক ক্ষেত্র তৈরি করে। রটারের সাপেক্ষে এর কার্যকর স্লিপ s_neg = 2 - s ≈ 1.95 হওয়ায় মোটরটি লকড-রটার অবস্থার মতো আচরণ করে। মাত্র ৩% নেগেটিভ সিকোয়েন্স ভোল্টেজের কারণে মোটরে ২০-২৫% নেগেটিভ সিকোয়েন্স কারেন্ট ঢুকে পড়ে, ফলে রটার মাত্রাতিরিক্ত উত্তপ্ত হয়ে পুড়ে যেতে পারে।'
      }
    }
  ],
  workedExamples: [
    {
      id: 'we-ch14-l02-01',
      title: {
        en: 'Computing Symmetrical Components for an Unbalanced Set of Currents',
        hi: 'असंतुलित धाराओं के सममितीय घटकों की गणना',
        bn: 'ভারসাম্যহীন কারেন্ট সেটের প্রতিসম উপাদান গণনা'
      },
      problem: {
        en: 'In an unbalanced 3-phase 4-wire system, the measured line currents are:\nIa = 100 ∠0° A\nIb = 100 ∠-120° A\nIc = 0 ∠0° A (Phase C open circuit)\nDetermine the zero-sequence current Ia0, positive-sequence current Ia1, and negative-sequence current Ia2.',
        hi: 'एक असंतुलित 4-तार प्रणाली में मापी गई धाराएं हैं: Ia = 100 ∠0° A, Ib = 100 ∠-120° A, Ic = 0 A। शून्य, धनात्मक और ऋणात्मक अनुक्रम धाराओं की गणना करें।',
        bn: 'একটি ভারসাম্যহীন ৪-তার সিস্টেমে পরিমাপকৃত কারেন্ট: Ia = 100 ∠0° A, Ib = 100 ∠-120° A, Ic = 0 A। জিরো, পজিটিভ ও নেগেটিভ সিকোয়েন্স কারেন্ট নির্ণয় করুন।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Convert currents into rectangular coordinates:\nIa = 100 + j0 A\nIb = 100·(-0.5 - j0.866) = -50 - j86.6 A\nIc = 0 + j0 A.',
            hi: 'धाराओं को आयताकार रूप में बदलें: Ia = 100 + j0, Ib = -50 - j86.6, Ic = 0।',
            bn: 'কারেন্টগুলি কার্তেসীয় রূপে রূপান্তর করুন: Ia = 100 + j0, Ib = -50 - j86.6, Ic = 0।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Calculate Zero-Sequence Component Ia0:\nIa0 = (1/3) · (Ia + Ib + Ic) = (1/3) · (100 - 50 - j86.6 + 0) = (1/3) · (50 - j86.6) = 16.67 - j28.87 A = 33.33 ∠-60° A.',
            hi: 'शून्य अनुक्रम Ia0 निकालें: Ia0 = (1/3)(Ia + Ib + Ic) = 33.33 ∠-60° A।',
            bn: 'জিরো সিকোয়েন্স Ia0 নির্ণয়: Ia0 = (1/3)(Ia + Ib + Ic) = 33.33 ∠-60° A।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Calculate Positive-Sequence Component Ia1:\nIa1 = (1/3) · (Ia + a·Ib + a²·Ic)\nNote that a·Ib = (1 ∠120°) · (100 ∠-120°) = 100 ∠0° = 100 + j0 A. Since Ic = 0, a²·Ic = 0.\nTherefore: Ia1 = (1/3) · (100 + 100 + 0) = 200 / 3 = 66.67 ∠0° A.',
            hi: 'धनात्मक अनुक्रम Ia1 निकालें: a·Ib = 100 ∠0° = 100। अतः Ia1 = (1/3)(100 + 100 + 0) = 66.67 ∠0° A।',
            bn: 'পজিটিভ সিকোয়েন্স Ia1 নির্ণয়: a·Ib = 100 ∠0° = 100। অতএব Ia1 = (1/3)(100 + 100 + 0) = 66.67 ∠0° A।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Calculate Negative-Sequence Component Ia2:\nIa2 = (1/3) · (Ia + a²·Ib + a·Ic)\nNote that a²·Ib = (1 ∠240°) · (100 ∠-120°) = 100 ∠120° = -50 + j86.6 A.\nIa2 = (1/3) · (100 + (-50 + j86.6) + 0) = (1/3) · (50 + j86.6) = 16.67 + j28.87 A = 33.33 ∠+60° A.',
            hi: 'ऋणात्मक अनुक्रम Ia2 निकालें: a²·Ib = 100 ∠120° = -50 + j86.6। अतः Ia2 = (1/3)(50 + j86.6) = 33.33 ∠+60° A।',
            bn: 'নেগেটিভ সিকোয়েন্স Ia2 নির্ণয়: a²·Ib = 100 ∠120° = -50 + j86.6। অতএব Ia2 = (1/3)(50 + j86.6) = 33.33 ∠+60° A।'
          }
        },
        {
          stepNumber: 5,
          description: {
            en: 'Verification: Check Ia = Ia0 + Ia1 + Ia2 = (16.67 - j28.87) + 66.67 + (16.67 + j28.87) = 100.01 + j0 A = 100 ∠0° A. Exact match!',
            hi: 'सत्यापन: Ia = Ia0 + Ia1 + Ia2 = 100 + j0 A। बिल्कुल सही!',
            bn: 'যাচাইকরণ: Ia = Ia0 + Ia1 + Ia2 = 100 + j0 A। নিখুঁত মিল!'
          }
        }
      ]
    },
    {
      id: 'we-ch14-l02-02',
      title: {
        en: 'Sequence Voltage Decomposition & Voltage Unbalance Factor (VUF) Calculation',
        hi: 'सीक्वेंस वोल्टेज अपघटन एवं वोल्टेज असंतुलन कारक (VUF) गणना',
        bn: 'সিকোয়েন্স ভোল্টেজ বিশ্লেষণ ও ভোল্টেজ ভারসাম্যহীনতা ফ্যাক্টর (VUF) হিসাব'
      },
      problem: {
        en: 'An industrial distribution feeder has unbalanced line-to-neutral voltages: Va = 230 ∠0° V, Vb = 220 ∠-125° V, and Vc = 210 ∠115° V. Calculate: (a) Zero-sequence voltage Va0, (b) Positive-sequence voltage Va1, (c) Negative-sequence voltage Va2, and (d) The Voltage Unbalance Factor (VUF = |Va2| / |Va1| × 100%) under IEC/NEMA standards.',
        hi: 'एक औद्योगिक फीडर पर असंतुलित वोल्टेज हैं: Va = 230 ∠0° V, Vb = 220 ∠-125° V, Vc = 210 ∠115° V। ज्ञात करें: (a) Va0, (b) Va1, (c) Va2, और (d) VUF = (|Va2| / |Va1|) × 100%।',
        bn: 'একটি শিল্প ফিডারে অসম ভোল্টেজ রয়েছে: Va = 230 ∠0° V, Vb = 220 ∠-125° V, Vc = 210 ∠115° V। নির্ণয় করুন: (a) Va0, (b) Va1, (c) Va2, এবং (d) VUF = (|Va2| / |Va1|) × 100%।'
      },
      solutionSteps: [
        {
          stepNumber: 1,
          description: {
            en: 'Convert phase voltages to rectangular coordinates:\nVa = 230 + j0 V\nVb = 220·cos(-125°) + j220·sin(-125°) = -126.19 - j180.21 V\nVc = 210·cos(115°) + j210·sin(115°) = -88.75 + j190.32 V.',
            hi: 'वोल्टेज को रेक्टेंगुलर रूप में लिखें: Va = 230 + j0, Vb = -126.19 - j180.21, Vc = -88.75 + j190.32 V।',
            bn: 'ভোল্টেজগুলি কার্তেসীয় রূপে রূপান্তর: Va = 230 + j0, Vb = -126.19 - j180.21, Vc = -88.75 + j190.32 V।'
          }
        },
        {
          stepNumber: 2,
          description: {
            en: 'Compute Zero-Sequence Voltage: Va0 = (1/3)·(Va + Vb + Vc) = (1/3)·[(230 - 126.19 - 88.75) + j(0 - 180.21 + 190.32)] = (1/3)·(15.06 + j10.11) = 5.02 + j3.37 V = 6.05 ∠33.9° V.',
            hi: 'जीरो सीक्वेंस Va0: Va0 = (1/3)·(15.06 + j10.11) = 5.02 + j3.37 V = 6.05 ∠33.9° V।',
            bn: 'জিরো সিকোয়েন্স Va0: Va0 = (1/3)·(15.06 + j10.11) = 5.02 + j3.37 V = 6.05 ∠33.9° V।'
          }
        },
        {
          stepNumber: 3,
          description: {
            en: 'Compute Positive-Sequence Voltage: Va1 = (1/3)·(Va + a·Vb + a²·Vc).\na·Vb = (1 ∠120°)·(220 ∠-125°) = 220 ∠-5° = 219.16 - j19.18 V.\na²·Vc = (1 ∠240°)·(210 ∠115°) = 210 ∠355° = 209.20 - j18.30 V.\nSum: Va + a·Vb + a²·Vc = 230 + (219.16 - j19.18) + (209.20 - j18.30) = 658.36 - j37.48 V.\nVa1 = (658.36 - j37.48) / 3 = 219.45 - j12.49 V = 219.8 ∠-3.26° V.',
            hi: 'पॉजिटिव सीक्वेंस Va1 = 219.45 - j12.49 V = 219.8 ∠-3.26° V।',
            bn: 'পজিটিভ সিকোয়েন্স Va1 = 219.45 - j12.49 V = 219.8 ∠-3.26° V।'
          }
        },
        {
          stepNumber: 4,
          description: {
            en: 'Compute Negative-Sequence Voltage: Va2 = (1/3)·(Va + a²·Vb + a·Vc).\na²·Vb = (1 ∠240°)·(220 ∠-125°) = 220 ∠115° = -92.98 + j199.39 V.\na·Vc = (1 ∠120°)·(210 ∠115°) = 210 ∠235° = -120.45 - j172.02 V.\nSum = 230 + (-92.98 + j199.39) + (-120.45 - j172.02) = 16.57 + j27.37 V.\nVa2 = (16.57 + j27.37) / 3 = 5.52 + j9.12 V = 10.66 ∠58.8° V.',
            hi: 'नेगेटिव सीक्वेंस Va2 = 5.52 + j9.12 V = 10.66 ∠58.8° V।',
            bn: 'নেগেটিভ সিকোয়েন্স Va2 = 5.52 + j9.12 V = 10.66 ∠58.8° V।'
          }
        },
        {
          stepNumber: 5,
          description: {
            en: 'Compute Voltage Unbalance Factor (VUF): VUF = (|Va2| / |Va1|) × 100% = (10.66 / 219.8) × 100% = 4.85%. Because VUF exceeds 1.0%, motors operating on this feeder will require severe thermal derating under NEMA MG-1 standards to avoid rotor winding failure.',
            hi: 'VUF की गणना: VUF = (10.66 / 219.8) × 100% = 4.85%। चूंकि यह 1% से अधिक है, अतः मोटर को गर्म होने से बचाने के लिए डीरेट करना होगा।',
            bn: 'VUF গণনা: VUF = (10.66 / 219.8) × 100% = 4.85%। যেহেতু এটি ১% অতিক্রম করেছে, NEMA MG-1 নিয়ম অনুযায়ী মোটর ডিরেটিং বাধ্যতামূলক।'
          }
        }
      ]
    }
  ],
  importantPoints: {
    en: [
      'The complex operator a = 1 ∠120° satisfies a² = 1 ∠240°, a³ = 1 ∠0° = 1, and 1 + a + a² = 0.',
      'Positive sequence phasors rotate forward (ABC), negative sequence rotate in reverse (ACB), and zero sequence are in-phase identical phasors.',
      'Zero sequence currents cannot flow in a 3-phase 3-wire ungrounded system because there is no neutral or ground return path (Ia0 = 0).',
      'Negative-sequence voltage causes severe double-frequency (2f) rotor eddy current heating in induction motors, requiring strict VUF limits.'
    ],
    hi: [
      'ऑपरेटर a = 1 ∠120° सर्वसमिका 1 + a + a² = 0 को संतुष्ट करता है।',
      'धनात्मक अनुक्रम आगे (ABC), ऋणात्मक अनुक्रम पीछे (ACB) घूमता है, और शून्य अनुक्रम समान कला में होता है।',
      '3-तार अनग्राउंडेड सिस्टम में न्यूट्रल पाथ न होने के कारण शून्य अनुक्रम धारा नहीं बह सकती (Ia0 = 0)।',
      'ऋणात्मक अनुक्रम वोल्टेज मोटर में 2f आवृत्ति की भंवर धाराएं बनाकर रोटर को अत्यधिक गर्म कर देता है।'
    ],
    bn: [
      'অপারেটর a = 1 ∠120° এর ক্ষেত্রে a² = 1 ∠240° এবং 1 + a + a² = 0 হয়।',
      'পজিটিভ সিকোয়েন্স সামনের দিকে (ABC), নেগেটিভ সিকোয়েন্স পেছনের দিকে (ACB) ঘোরে এবং জিরো সিকোয়েন্স সম-দশায় থাকে।',
      '৩-তার আনগ্রাউন্ডেড সিস্টেমে নিউট্রাল রিটার্ন পথ না থাকায় জিরো সিকোয়েন্স কারেন্ট বইতে পারে না (Ia0 = 0)।',
      'নেগেটিভ সিকোয়েন্স ভোল্টেজ মোটরে দ্বিগুণ ফ্রিকোয়েন্সির (2f) এডি কারেন্ট তৈরি করে মারাত্মক গরম সৃষ্টি করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Confusing a and a². Remember: a = 1∠120° = -0.5 + j0.866, whereas a² = 1∠240° = -0.5 - j0.866.',
      'Mistake: Assuming neutral current equals zero sequence current. Correction: Neutral current is THREE times zero sequence current: In = 3·Ia0.',
      'Mistake: Believing negative sequence voltage is "negative in sign". Correction: Negative sequence refers strictly to reverse phase rotation (ACB instead of ABC), not polarity or sign.'
    ],
    hi: [
      'त्रुटि: a और a² में भ्रमित होना। सुधार: a = 1∠120° (-0.5 + j0.866) और a² = 1∠240° (-0.5 - j0.866) होता है।',
      'त्रुटि: न्यूट्रल धारा को Ia0 के बराबर समझना। सुधार: न्यूट्रल धारा In = 3·Ia0 होती है।',
      'त्रुटि: ऋणात्मक अनुक्रम का अर्थ ऋणात्मक संकेत समझना। सुधार: यह विपरीत दिशा में घूर्णन (ACB) को दर्शाता है, ध्रुवीयता को नहीं।'
    ],
    bn: [
      'ভুল: a এবং a² এর মধ্যে গুলিয়ে ফেলা। সংশোধন: a = 1∠120° (-0.5 + j0.866) এবং a² = 1∠240° (-0.5 - j0.866)।',
      'ভুল: নিউট্রাল কারেন্টকে Ia0 এর সমান মনে করা। সংশোধন: নিউট্রাল কারেন্ট সর্বদা In = 3·Ia0 হয়।',
      'ভুল: নেগেটিভ সিকোয়েন্সকে ঋণাত্মক চিহ্নযুক্ত ভাবা। সংশোধন: নেগেটিভ সিকোয়েন্স মূলত বিপরীত ফেজ ঘূর্ণন নির্দেশ করে (ACB), কোনো ঋণাত্মক মান নয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Fortescue transformation decouples complex asymmetrical three-phase networks into three independent single-phase sequence networks.',
      'Positive sequence powers the load, negative sequence produces braking and rotor destruction, zero sequence circulates in the neutral/ground path.',
      'Protection relays use negative-sequence overcurrent elements (ANSI 46) to guard generators and motors against unbalance.'
    ],
    hi: [
      'फोर्टेस्क्यू रूपांतरण जटिल असंतुलित नेटवर्कों को तीन स्वतंत्र एकल-फेज अनुक्रम नेटवर्कों में बदल देता है।',
      'धनात्मक अनुक्रम उपयोगी शक्ति देता है, ऋणात्मक अनुक्रम ब्रेकिंग और रोटर क्षति करता है, शून्य अनुक्रम न्यूट्रल में बहता है।',
      'सुरक्षा रिले असंतुलन से जनरेटर और मोटर की सुरक्षा के लिए नेगेटिव-सीक्वेंस ओवरकरंट (ANSI 46) का उपयोग करते हैं।'
    ],
    bn: [
      'ফোর্টেস্কিউ রূপান্তর জটিল ভারসাম্যহীন নেটওয়ার্ককে তিনটি স্বাধীন একক-ফেজ নেটওয়ার্কে বিভক্ত করে সহজ সমাধান দেয়।',
      'পজিটিভ সিকোয়েন্স দরকারী কাজ করে, নেগেটিভ সিকোয়েন্স ব্রেক ও ক্ষতি করে এবং জিরো সিকোয়েন্স নিউট্রাল দিয়ে প্রবাহিত হয়।',
      'মোটর ও জেনারেটর রক্ষায় নেগেটিভ সিকোয়েন্স ওভারকারেন্ট রিলে (ANSI 46) অপরিহার্য।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch14-l02-01',
      question: {
        en: 'A three-phase 3-wire ungrounded system has phase voltages Va = 230 ∠0° V, Vb = 230 ∠-120° V, and Vc = 230 ∠120° V. Compute its zero, positive, and negative sequence voltage components.',
        hi: 'एक संतुलित 3-तार प्रणाली के वोल्टेज Va = 230 ∠0° V, Vb = 230 ∠-120° V, Vc = 230 ∠120° V हैं। इसके शून्य, धनात्मक एवं ऋणात्मक अनुक्रम घटक ज्ञात करें।',
        bn: 'একটি সুষম ৩-তার সিস্টেমে ভোল্টেজ Va = 230 ∠0° V, Vb = 230 ∠-120° V, Vc = 230 ∠120° V। এর জিরো, পজিটিভ ও নেগেটিভ সিকোয়েন্স উপাদান বের করুন।'
      },
      hint: {
        en: 'For a perfectly balanced set of positive sequence, V0 = 0, V1 = Va = 230 ∠0° V, and V2 = 0.',
        hi: 'पूर्णतः संतुलित धनात्मक सेट के लिए V0 = 0, V1 = 230 ∠0° V, और V2 = 0 होगा।',
        bn: 'একটি নিখুঁত সুষম পজিটিভ সিকোয়েন্সের জন্য V0 = 0, V1 = 230 ∠0° V এবং V2 = 0 হয়।'
      }
    },
    {
      id: 'pq-ch14-l02-02',
      question: {
        en: 'Why do induction motor manufacturers recommend derating a motor when the supply voltage unbalance factor (VUF) exceeds 1%?',
        hi: 'आपूर्ति वोल्टेज असंतुलन कारक (VUF) 1% से अधिक होने पर मोटर निर्माताओं द्वारा मोटर को डी-रेट करने की सलाह क्यों दी जाती है?',
        bn: 'সরবরাহ ভোল্টেজ ভারসাম্যহীনতা গুণক (VUF) ১% ছাড়িয়ে গেলে মোটর নির্মাতারা কেন মোটর ডি-রেট করার পরামর্শ দেন?'
      },
      hint: {
        en: 'Consider the low negative-sequence impedance and the double-frequency eddy current heating induced in the rotor iron.',
        hi: 'कम ऋणात्मक-अनुक्रम प्रतिबाधा और रोटर में उत्पन्न 2f आवृत्ति की भंवर धाराओं के तापीय प्रभाव पर विचार करें।',
        bn: 'কম নেগেটিভ সিকোয়েন্স ইম্পিডেন্স এবং রটারে উৎপন্ন দ্বিগুণ ফ্রিকোয়েন্সির এডি কারেন্ট তাপীয় ক্ষয় বিবেচনা করুন।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch14-l02-01',
      question: {
        en: 'What is the mathematical value of the complex operator (1 + a + a²) in symmetrical component analysis?',
        hi: 'सममितीय घटक विश्लेषण में सम्मिश्र ऑपरेटर व्यंजक (1 + a + a²) का मान क्या होता है?',
        bn: 'প্রতিসম উপাদান বিশ্লেষণে জটিল রাশি (1 + a + a²) এর গাণিতিক মান কত?'
      },
      options: [
        { en: '1.0 ∠0°', hi: '1.0 ∠0°', bn: '১.০ ∠০°' },
        { en: '0 (Zero identically)', hi: '0 (पूर्णतः शून्य)', bn: '০ (সম্পূর্ণ শূন্য)' },
        { en: '3.0 ∠120°', hi: '3.0 ∠120°', bn: '৩.০ ∠১২০°' },
        { en: 'j√3', hi: 'j√3', bn: 'j√3' }
      ],
      correctAnswer: 1,
      explanation: {
        en: '1 + a + a² = 1 + (-0.5 + j√3/2) + (-0.5 - j√3/2) = (1 - 0.5 - 0.5) + j(√3/2 - √3/2) = 0 + j0 = 0.',
        hi: '1 + a + a² = 1 + (-0.5 + j√3/2) + (-0.5 - j√3/2) = 0 + j0 = 0 होता है।',
        bn: '1 + a + a² = ১ + (-০.৫ + j√৩/২) + (-০.৫ - j√৩/২) = ০ + j০ = ০।'
      }
    },
    {
      id: 'mcq-ch14-l02-02',
      question: {
        en: 'In terms of zero-sequence current Ia0, what is the total current flowing through the neutral conductor In of a 4-wire system?',
        hi: 'शून्य-अनुक्रम धारा Ia0 के संदर्भ में, 4-तार प्रणाली के न्यूट्रल चालक में बहने वाली कुल धारा In कितनी होती है?',
        bn: 'জিরো-সিকোয়েন্স কারেন্ট Ia0 এর ভিত্তিতে, ৪-তার সিস্টেমের নিউট্রাল তার দিয়ে প্রবাহিত মোট কারেন্ট In কত?'
      },
      options: [
        { en: 'In = Ia0', hi: 'In = Ia0', bn: 'In = Ia0' },
        { en: 'In = √3 · Ia0', hi: 'In = √3 · Ia0', bn: 'In = √3 · Ia0' },
        { en: 'In = 3 · Ia0', hi: 'In = 3 · Ia0', bn: 'In = 3 · Ia0' },
        { en: 'In = Ia0 / 3', hi: 'In = Ia0 / 3', bn: 'In = Ia0 / 3' }
      ],
      correctAnswer: 2,
      explanation: {
        en: 'Because zero sequence currents are in phase in all three lines (Ia0 = Ib0 = Ic0), the total neutral current is In = Ia + Ib + Ic = Ia0 + Ib0 + Ic0 = 3·Ia0.',
        hi: 'चूंकि तीनों फेजों में शून्य अनुक्रम धाराएं समान कला में होती हैं (Ia0 = Ib0 = Ic0), अतः In = 3·Ia0 होती है।',
        bn: 'যেহেতু তিনটি ফেজেই জিরো সিকোয়েন্স কারেন্ট সম-দশায় থাকে (Ia0 = Ib0 = Ic0), তাই নিউট্রাল কারেন্ট In = 3·Ia0 হয়।'
      }
    },
    {
      id: 'mcq-ch14-l02-03',
      question: {
        en: 'Why is the zero-sequence current guaranteed to be zero in any balanced or unbalanced 3-phase 3-wire ungrounded system?',
        hi: 'किसी भी 3-फेज 3-तार अनग्राउंडेड प्रणाली में शून्य-अनुक्रम धारा का शून्य होना क्यों सुनिश्चित होता है?',
        bn: 'যেকোনো ৩-ফেজ ৩-তার আনগ্রাউন্ডেড সিস্টেমে জিরো-সিকোয়েন্স কারেন্ট শূন্য হওয়া নিশ্চিত কেন?'
      },
      options: [
        { en: 'Because there is no fourth wire (neutral or earth) to provide a complete return path for zero-sequence currents', hi: 'क्योंकि शून्य-अनुक्रम धारा के लिए वापसी पथ प्रदान करने वाला कोई चौथा तार (न्यूट्रल या अर्थ) नहीं होता', bn: 'কারণ জিরো-সিকোয়েন্স কারেন্টের রিটার্ন পথ হিসেবে কোনো চতুর্থ তার (নিউট্রাল বা মাটি) থাকে না' },
        { en: 'Because 3-wire transformers absorb all zero-sequence voltages', hi: 'क्योंकि ट्रांसफार्मर सभी शून्य-अनुक्रम वोल्टेज सोख लेते हैं', bn: 'কারণ ট্রান্সফরমার সমস্ত জিরো সিকোয়েন্স ভোল্টেজ শোষণ করে' },
        { en: 'Because the operator a cancels zero sequence currents automatically', hi: 'क्योंकि ऑपरेटर a शून्य अनुक्रम को स्वतः रद्द कर देता है', bn: 'কারণ অপারেটর a স্বয়ংক্রিয়ভাবে জিরো সিকোয়েন্স বাতিল করে' },
        { en: 'Because negative-sequence currents overpower and extinguish zero-sequence currents', hi: 'क्योंकि ऋणात्मक अनुक्रम धारा शून्य अनुक्रम को समाप्त कर देती है', bn: 'কারণ নেগেটিভ সিকোয়েন্স কারেন্ট জিরো সিকোয়েন্সকে থামিয়ে দেয়' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'By KCL, in a 3-wire system Ia + Ib + Ic = 0. Since Ia0 = (1/3)(Ia + Ib + Ic), Ia0 must be identically 0 A because no return path exists.',
        hi: '3-तार प्रणाली में KCL से Ia + Ib + Ic = 0 होता है। चूंकि Ia0 = (1/3)(Ia + Ib + Ic), अतः वापसी मार्ग न होने से Ia0 सदैव 0 A होगा।',
        bn: '৩-তার সিস্টেমে KCL অনুযায়ী Ia + Ib + Ic = ০। যেহেতু Ia0 = (1/3)(Ia + Ib + Ic), তাই কোনো রিটার্ন পথ না থাকায় Ia0 নিশ্চিতভাবে ০ A হয়।'
      }
    },
    {
      id: 'mcq-ch14-l02-04',
      question: {
        en: 'What frequency currents are induced in the rotor bars of an induction motor running at 50 Hz when supplied with negative-sequence voltage?',
        hi: '50 Hz पर चल रही इंडक्शन मोटर में ऋणात्मक-अनुक्रम वोल्टेज दिए जाने पर रोटर बार्स में किस आवृत्ति की धाराएं प्रेरित होती हैं?',
        bn: '৫০ Hz সরবরাহে চলমান একটি ইন্ডাকশন মোটরে নেগেটিভ-সিকোয়েন্স ভোল্টেজ প্রয়োগ করলে রটার বারে কত ফ্রিকোয়েন্সির কারেন্ট আবিষ্ট হয়?'
      },
      options: [
        { en: 'Near DC (approximately 1 to 2 Hz)', hi: 'लगभग डीसी (1 से 2 Hz)', bn: 'প্রায় ডিসি (১ থেকে ২ Hz)' },
        { en: 'Exactly 50 Hz', hi: 'ठीक 50 Hz', bn: 'ঠিক ৫০ Hz' },
        { en: 'Approximately double line frequency: (2 - s) · f ≈ 100 Hz', hi: 'लगभग दोगुनी लाइन आवृत्ति: (2 - s) · f ≈ 100 Hz', bn: 'প্রায় দ্বিগুণ লাইন ফ্রিকোয়েন্সি: (2 - s) · f ≈ ১০০ Hz' },
        { en: 'Triple line frequency (150 Hz)', hi: 'तीन गुनी लाइन आवृत्ति (150 Hz)', bn: 'তিন গুণ লাইন ফ্রিকোয়েন্সি (১৫০ Hz)' }
      ],
      correctAnswer: 2,
      explanation: {
        en: 'Because negative-sequence magnetic flux rotates backwards at synchronous speed while the rotor spins forwards at (1-s)ωs, the relative speed is (2 - s)ωs ≈ 2f = 100 Hz at 50 Hz.',
        hi: 'ऋणात्मक फ्लक्स उल्टी दिशा में घूमता है जबकि रोटर आगे घूमता है, जिससे सापेक्ष गति (2 - s)fs ≈ 2f = 100 Hz होती है।',
        bn: 'যেহেতু নেগেটিভ সিকোয়েন্স ফ্লাক্স বিপরীত দিকে ঘোরে এবং রটার সামনের দিকে ঘোরে, তাই আপেক্ষিক গতি (2 - s)fs ≈ 2f = ১০০ Hz হয়।'
      }
    },
    {
      id: 'mcq-ch14-l02-05',
      question: {
        en: 'How is the true Voltage Unbalance Factor (VUF) defined according to international power quality standards?',
        hi: 'अंतर्राष्ट्रीय पावर क्वालिटी मानकों के अनुसार वास्तविक वोल्टेज असंतुलन कारक (VUF) को कैसे परिभाषित किया जाता है?',
        bn: 'আন্তর্জাতিক পাওয়ার কোয়ালিটি স্ট্যান্ডার্ড অনুসারে ভোল্টেজ ভারসাম্যহীনতা গুণক (VUF) কীভাবে সংজ্ঞায়িত করা হয়?'
      },
      options: [
        { en: 'VUF = (|V2| / |V1|) · 100% (Ratio of Negative to Positive Sequence Voltage)', hi: 'VUF = (|V2| / |V1|) · 100% (ऋणात्मक से धनात्मक अनुक्रम वोल्टेज का अनुपात)', bn: 'VUF = (|V2| / |V1|) · 100% (নেগেটিভ ও পজিটিভ সিকোয়েন্স ভোল্টেজের অনুপাত)' },
        { en: 'VUF = (|V0| / |V2|) · 100%', hi: 'VUF = (|V0| / |V2|) · 100%', bn: 'VUF = (|V0| / |V2|) · 100%' },
        { en: 'VUF = (Max Line Voltage - Min Line Voltage) / 415 V', hi: 'VUF = (अधिकतम वोल्टेज - न्यूनतम वोल्टेज) / 415 V', bn: 'VUF = (সর্বোচ্চ ভোল্টেজ - সর্বনিম্ন ভোল্টেজ) / ৪১৫ V' },
        { en: 'VUF = (|V1| / |V2|) · 100%', hi: 'VUF = (|V1| / |V2|) · 100%', bn: 'VUF = (|V1| / |V2|) · 100%' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'IEC and IEEE true definition of VUF is the ratio of the negative sequence voltage component magnitude to the positive sequence voltage component magnitude, expressed as a percentage.',
        hi: 'IEC और IEEE मानक के अनुसार VUF = (|V2| / |V1|) · 100% होता है।',
        bn: 'IEC ও IEEE স্ট্যান্ডার্ড অনুযায়ী VUF হলো পজিটিভ সিকোয়েন্স ভোল্টেজের সাপেক্ষে নেগেটিভ সিকোয়েন্স ভোল্টেজের শতকরা অনুপাত: (|V2| / |V1|) · 100%।'
      }
    },
    {
      id: 'mcq-ch14-l02-06',
      question: {
        en: 'Which ANSI device number represents the negative-sequence overcurrent protection relay used to protect rotating machines against phase unbalance?',
        hi: 'फेज असंतुलन के विरुद्ध घूर्णन मशीनों की सुरक्षा के लिए कौन सा ANSI रिले उपकरण नंबर ऋणात्मक-अनुक्रम ओवरकरंट रिले को दर्शाता है?',
        bn: 'কোন ANSI ডিভাইস নম্বরটি ফেজ ভারসাম্যহীনতার বিরুদ্ধে মোটর ও জেনারেটর রক্ষাকারী নেগেটিভ-সিকোয়েন্স ওভারকারেন্ট রিলেকে নির্দেশ করে?'
      },
      options: [
        { en: 'ANSI 50', hi: 'ANSI 50', bn: 'ANSI 50' },
        { en: 'ANSI 46', hi: 'ANSI 46', bn: 'ANSI 46' },
        { en: 'ANSI 59', hi: 'ANSI 59', bn: 'ANSI 59' },
        { en: 'ANSI 87', hi: 'ANSI 87', bn: 'ANSI 87' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'ANSI device number 46 is universally designated for Reverse-phase or Phase-Balance Current Relays (Negative-Sequence Overcurrent Protection).',
        hi: 'ANSI 46 को रिवर्स-फेज या फेज-बैलेंस धारा रिले (ऋणात्मक-अनुक्रम ओवरकरंट संरक्षण) के लिए नामित किया गया है।',
        bn: 'ANSI 46 ডিভাইস নম্বরটি নেগেটিভ-সিকোয়েন্স ওভারকারেন্ট প্রোটেকশন রিলের জন্য আন্তর্জাতিকভাবে নির্ধারিত।'
      }
    },
    {
      id: 'mcq-ch14-l02-07',
      question: {
        en: 'If a balanced set of three-phase voltages has positive sequence ABC, what is its negative-sequence component V2?',
        hi: 'यदि 3-फेज वोल्टेज का एक संतुलित सेट धनात्मक अनुक्रम ABC रखता है, तो इसका ऋणात्मक-अनुक्रम घटक V2 क्या होगा?',
        bn: 'যদি থ্রি-ফেজ ভোল্টেজের একটি সুষম সেট পজিটিভ সিকোয়েন্স ABC যুক্ত হয়, তবে এর নেগেটিভ-সিকোয়েন্স উপাদান V2 কত হবে?'
      },
      options: [
        { en: 'Equal to V1 in magnitude but shifted by 180°', hi: 'मान में V1 के बराबर लेकिन 180° विस्थापित', bn: 'মানের দিক থেকে V1 এর সমান কিন্তু ১৮০° স্থানচ্যুত' },
        { en: '0 V (Zero Volts)', hi: '0 V (शून्य वोल्ट)', bn: '০ V (শূন্য ভোল্ট)' },
        { en: 'Equal to √3 · V1', hi: '√3 · V1 के बराबर', bn: '√3 · V1 এর সমান' },
        { en: 'Equal to V1 / 3', hi: 'V1 / 3 के बराबर', bn: 'V1 / 3 এর সমান' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'In any perfectly balanced system with normal ABC phase sequence, the negative-sequence (V2) and zero-sequence (V0) components are both identically zero.',
        hi: 'पूर्णतः संतुलित धनात्मक अनुक्रम प्रणाली में ऋणात्मक घटक (V2) और शून्य घटक (V0) दोनों शून्य होते हैं।',
        bn: 'স্বাভাবিক ABC সিকোয়েন্সের যেকোনো নিখুঁত সুষম সিস্টেমে নেগেটিভ সিকোয়েন্স (V2) এবং জিরো সিকোয়েন্স (V0) উভয়ই শূন্য হয়।'
      }
    },
    {
      id: 'mcq-ch14-l02-08',
      question: {
        en: 'What is the value of operator a raised to the fourth power (a⁴)?',
        hi: 'ऑपरेटर a की चतुर्थ घात (a⁴) का मान क्या होगा?',
        bn: 'অপারেটর a এর চতুর্থ ঘাত (a⁴) এর মান কত?'
      },
      options: [
        { en: 'a⁴ = a² = 1 ∠240°', hi: 'a⁴ = a² = 1 ∠240°', bn: 'a⁴ = a² = 1 ∠240°' },
        { en: 'a⁴ = a = 1 ∠120°', hi: 'a⁴ = a = 1 ∠120°', bn: 'a⁴ = a = 1 ∠120°' },
        { en: 'a⁴ = 1 ∠0°', hi: 'a⁴ = 1 ∠0°', bn: 'a⁴ = 1 ∠0°' },
        { en: 'a⁴ = -1', hi: 'a⁴ = -1', bn: 'a⁴ = -1' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Since a³ = 1 ∠360° = 1, we have a⁴ = a³ · a = 1 · a = a = 1 ∠120°.',
        hi: 'चूंकि a³ = 1 होता है, अतः a⁴ = a³ · a = 1 · a = a = 1 ∠120°।',
        bn: 'যেহেতু a³ = ১, তাই a⁴ = a³ · a = ১ · a = a = 1 ∠120°।'
      }
    }
  ]
};

export const LESSON_SYMMETRICAL_COMPONENTS_FORTESCUE = LESSON_SYMMETRICAL_COMPONENTS;
