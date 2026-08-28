import { Lesson } from '../types';

export const LESSON_MAGNETIC_MATERIALS_BH_CURVE: Lesson = {
  id: 'lsn-ch9-magnetic-materials',
  topicId: 'tp-magnetic-materials',
  chapterId: 'ch-magnetic-circuits',
  order: 10,
  title: {
    en: 'Magnetic Materials, B-H Curve, Hysteresis & Core Losses',
    hi: 'चुंबकीय पदार्थ, B-H वक्र, हिस्टैरिसीस लूप एवं कोर हानियां',
    bn: 'চৌম্বকীয় পদার্থসমূহ, B-H কার্ভ, হিস্টেরেসিস লুপ ও কোর লস'
  },
  description: {
    en: 'Classification into Diamagnetic, Paramagnetic, Ferromagnetic, and Ferrimagnetic materials, complete B-H magnetization curve, magnetic saturation, residual flux (Retentivity), coercive force (Coercivity), Steinmetz Hysteresis Loss formula, and Eddy Current Losses.',
    hi: 'डायमैग्नेटिक, पैरामैग्नेटिक और फेरोमैग्नेटिक पदार्थों का वर्गीकरण, संपूर्ण B-H वक्र, चुंबकीय संतृप्ति, अवशेष चुंबकत्व (Retentivity), निग्राहिता (Coercivity), हिस्टैरिसीस एवं भंवर धारा हानि।',
    bn: 'ডায়াম্যাগনেটিক, প্যারাম্যাগনেটিক ও ফেরোম্যাগনেটিক পদার্থের শ্রেণিবিভাগ, পূর্ণাঙ্গ B-H কার্ভ, ম্যাগনেটিক স্যাচুরেশন, রিটেন্টিভিটি, কোয়ার্সিভিটি, হিস্টেরেসিস লস ও এডি কারেন্ট লস।'
  },
  easyExplanation: {
    en: 'When you magnetize an iron core with an AC current, the atomic magnetic domains flip back and forth. The B-H curve shows that the core resists demagnetization—leaving behind residual magnetism (Retentivity). The energy lost in overcoming this resistance during every AC cycle turns into heat, called Hysteresis Loss!',
    hi: 'जब लोहे के कोर को AC धारा से चुंबकित किया जाता है, तो आंतरिक चुंबकीय डोमेन आगे-पीछे घूमते हैं। B-H वक्र दिखाता है कि कोर में कुछ चुंबकत्व बच जाता है (अवशेष चुंबकत्व)। इसे हटाने में हर चक्र में ऊर्जा ऊष्मा के रूप में नष्ट होती है, जिसे हिस्टैरिसीस हानि कहते हैं!',
    bn: 'এসি কারেন্ট দিয়ে যখন একটি আয়রন কোরকে চুম্বকিত করা হয়, তখন তার ভেতরে থাকা পারমাণবিক চৌম্বক ডোমেইনগুলো বারবার দিক পরিবর্তন করে। B-H কার্ভ দেখায় যে কোরটি সহজে পুরোপুরি অচুম্বকিত হতে চায় না এবং কিছুটা অবশিষ্ট চুম্বকত্ব (Retentivity) ধরে রাখে। প্রতি চক্রে এই বাধা অতিক্রম করতে যে শক্তি তাপে রূপান্তরিত হয়, তাকেই হিস্টেরেসিস লস বলে!'
  },
  detailedExplanation: {
    en: `1. Classification of Magnetic Materials:
- **Diamagnetic:** $\\mu_r < 1$ (e.g. Copper, Silver, Bismuth, Water). Weakly repelled by magnetic fields.
- **Paramagnetic:** $\\mu_r > 1$ (e.g. Aluminum, Platinum, Titanium). Weakly attracted by magnetic fields.
- **Ferromagnetic:** $\\mu_r \\gg 1$ ($10^2$ to $10^5$) (e.g. Iron, Cobalt, Nickel, Silicon Steel). Strongly attracted; retain magnetism; possess magnetic domains.
- **Ferrimagnetic (Ferrites):** High permeability with very high electrical resistivity, minimizing high-frequency eddy currents.

2. The B-H Magnetization Curve & Hysteresis Loop:
- As magnetizing force $H$ increases from zero, flux density $B$ follows a non-linear S-curve:
  - **Initial Region:** Domain boundaries shift reversibly.
  - **Steep Linear Region:** Fast domain rotation with high differential permeability ($dB/dH$).
  - **Knee & Saturation ($B_{\\text{sat}}$):** All magnetic domains align fully with the external field ($B$ levels off at $1.5 \\sim 2.0\\text{ T}$).
- When $H$ is reduced to zero, $B$ does NOT drop to zero:
  - **Remanence / Retentivity ($B_r$):** The residual flux density remaining in the core when $H = 0$.
  - **Coercive Force / Coercivity ($H_c$):** The reverse magnetizing force required to reduce the residual flux density to zero.

3. Magnetic Core Losses:

**A. Hysteresis Loss ($P_h$):**
- Area enclosed by the B-H hysteresis loop represents the energy lost per unit volume per cycle ($J/m^3$).
- Given by **Steinmetz's Empirical Equation:**
  $$P_h = \\eta \\cdot B_{\\text{max}}^{1.6} \\cdot f \\cdot V\\text{ (Watts)}$$
  *(where $\\eta$ is Steinmetz coefficient, $f$ is frequency in Hz, $V$ is core volume in $m^3$).*

**B. Eddy Current Loss ($P_e$):**
- Alternating magnetic flux induces circulating currents (eddy currents) inside the conductive iron core:
  $$P_e = K_e \\cdot B_{\\text{max}}^2 \\cdot f^2 \\cdot t^2 \\cdot V\\text{ (Watts)}$$
  *(where $t$ is the thickness of core laminations).*
- **Mitigation:** Making the core from thin insulated laminations ($0.35\\text{ mm} \\sim 0.5\\text{ mm}$) and adding $3\\% \\sim 4.5\\%$ silicon increases resistivity, reducing eddy currents drastically!`,
    hi: `1. पदार्थों का वर्गीकरण:
- डायमैग्नेटिक (µᵣ < 1), पैरामैग्नेटिक (µᵣ > 1), फेरोमैग्नेटिक (µᵣ >> 1)।

2. B-H वक्र एवं हिस्टैरिसीस लूप:
- अवशिष्ट चुंबकत्व (Retentivity Br): H = 0 पर बचा हुआ फ्लक्स घनत्व।
- निग्राहिता (Coercivity Hc): फ्लक्स को शून्य करने के लिए आवश्यक विपरीत H।

3. कोर हानियां:
- हिस्टैरिसीस हानि: Ph = η · B_max^1.6 · f · V
- भंवर धारा हानि: Pe = Ke · B_max^2 · f^2 · t^2 · V
- उपाय: कोर को पतली लैमिनेशन (0.35 mm) में बनाना।`,
    bn: `১. চৌম্বক পদার্থের শ্রেণিবিভাগ:
- ডায়াম্যাগনেটিক: $\\mu_r < 1$ (যেমন: তামা, বিসমাথ, পানি)।
- প্যারাম্যাগনেটিক: $\\mu_r > 1$ (যেমন: অ্যালুমিনিয়াম, প্ল্যাটিনাম)।
- ফেরোম্যাগনেটিক: $\\mu_r \\gg 1$ (যেমন: লোহা, নিকেল, কোবাল্ট, সিলিকন স্টিল)।

২. B-H কার্ভ ও হিস্টেরেসিস লুপ:
- স্যাচুরেশন ($B_{sat}$): কোরের ডোমেইনগুলো পুরোপুরি বিন্যস্ত হওয়া।
- রিটেন্টিভিটি ($B_r$): $H=0$ অবস্থায় কোরে অবশিষ্ট ফ্লাক্স ঘনত্ব।
- কোয়ার্সিভিটি ($H_c$): অবশিষ্ট চুম্বকত্ব দূর করতে প্রযুক্ত বিপরীত চৌম্বক তীব্রতা।

৩. কোরের শক্তিক্ষয় (Core Losses):
- হিস্টেরেসিস লস: $P_h = \\eta B_{max}^{1.6} f V$
- এডি কারেন্ট লস: $P_e = K_e B_{max}^2 f^2 t^2 V$
- সমাধান: কোরে পাতলা ল্যামিনেশন ($0.35$ মিমি) ও সিলিকন স্টিল ব্যবহার করা।`
  },
  formulas: [
    {
      expression: 'P_h = η · B_max^1.6 · f · V',
      description: {
        en: 'Steinmetz’s Hysteresis Loss formula (Watts)',
        hi: 'स्टीनमेट्ज़ हिस्टैरिसीस हानि सूत्र',
        bn: 'স্টেইনমেটজের হিস্টেরেসিস লস সূত্র (ওয়াট)'
      }
    },
    {
      expression: 'P_e = K_e · B_max^2 · f^2 · t^2 · V',
      description: {
        en: 'Eddy Current Loss formula showing dependency on lamination thickness squared (t²)',
        hi: 'भंवर धारा हानि सूत्र (लैमिनेशन मोटाई t² पर निर्भर)',
        bn: 'এডি কারেন্ট লস সূত্র (ল্যামিনেশনের পুরুত্ব t² এর সমানুপাতিক)'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'If transformer core lamination thickness is reduced by half (t/2), by what factor is the eddy current loss reduced?',
        hi: 'यदि ट्रांसफॉर्मर कोर लैमिनेशन की मोटाई आधी (t/2) कर दी जाए, तो भंवर धारा हानि कितने गुना कम हो जाएगी?',
        bn: 'ট্রান্সফরমার কোরের ল্যামিনেশনের পুরুত্ব অর্ধেক (t/2) করা হলে এডি কারেন্ট লস কতগুণ কমে যাবে?'
      },
      solution: {
        en: 'Since Pe ∝ t², new loss = (1/2)² × Pe = (1/4) Pe. The eddy current loss is reduced to 25% (4 times lower)!',
        hi: 'चूंकि Pe ∝ t², इसलिए नई हानि = (1/2)² = 1/4 (4 गुना कमी)।',
        bn: 'যেহেতু Pe ∝ t², তাই নতুন লস = (১/২)² = ১/৪ Pe। অর্থাৎ এডি কারেন্ট লস ৭৫% কমে ১/৪ অংশে নেমে আসবে!'
      }
    }
  ]
};
