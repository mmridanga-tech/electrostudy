import { Lesson } from '../types';

export const LESSON_INDUCTORS_IN_AC_CIRCUITS: Lesson = {
  id: 'lsn-ch8-inductors-in-ac-circuits',
  topicId: 'ch8-inductors-in-ac-circuits',
  chapterId: 'ch-inductors',
  order: 13,
  title: {
    en: 'Inductors in AC Circuits: Reactance (X_L), Phasors & Reactive Power (Q_L)',
    hi: 'प्रत्यावर्ती (AC) परिपथ में इंडक्टर: प्रतिघात (X_L), फेज़र एवं रिएक्टिव पावर',
    bn: 'এসি সার্কিটে ইন্ডাক্টর: রিঅ্যাকট্যান্স (X_L), ফেজর ও রিঅ্যাক্টিভ পাওয়ার (Q_L)'
  },
  description: {
    en: 'Sinusoidal AC response of pure inductors, inductive reactance derivation (X_L = 2π f L = ω L), 90-degree voltage-current phase relationship (ELI rule: Voltage leads Current by 90°), instantaneous power waveform, and inductive reactive power (Q_L = V·I = I²·X_L in VAR).',
    hi: 'शुद्ध इंडक्टर में ज्यावक्रीय एसी व्यवहार, इंडक्टिव प्रतिघात (X_L = 2π f L), 90 डिग्री का फेज़ संबंध (ELI नियम: वोल्टेज धारा से 90° आगे रहता है), तात्कालिक शक्ति तरंग एवं रिएक्टिव पावर (VAR)।',
    bn: 'বিশুদ্ধ ইন্ডাক্টরে সাইনুসয়ডাল এসি আচরণ, ইন্ডাক্টিভ রিঅ্যাকট্যান্স (X_L = 2π f L), ৯০° ফেজ সম্পর্ক (ELI নিয়ম: ভোল্টেজ কারেন্টের চেয়ে ৯০° এগিয়ে থাকে), তাৎক্ষণিক ক্ষমতা ও রিঅ্যাক্টিভ পাওয়ার (VAR)।'
  },
  easyExplanation: {
    en: 'When AC current flows through an inductor, the constantly reversing current causes continuous magnetic back-EMF that resists current flow. This AC resistance is called Inductive Reactance (X_L). In an AC inductor, voltage peaks first and current lags behind by a quarter of a cycle (90 degrees).',
    hi: 'जब एसी धारा इंडक्टर से बहती है, तो लगातार बदलती धारा के कारण बैक-EMF उत्पन्न होता है जो धारा के प्रवाह का विरोध करता है। एसी में इस प्रतिरोध को इंडक्टिव प्रतिघात (X_L = 2πfL) कहते हैं। इंडक्टर में वोल्टेज धारा से 90 डिग्री आगे चलता है!',
    bn: 'ইন্ডাক্টরের মধ্য দিয়ে এসি কারেন্ট চলার সময় অনবরত দিক পরিবর্তনের ফলে ব্যাক-EMF সৃষ্টি হয় যা কারেন্ট প্রবাহকে বাধা দেয়। এসিতে এই বাধাকে ইন্ডাক্টিভ রিঅ্যাকট্যান্স (X_L = 2πfL) বলে। ইন্ডাক্টরে ভোল্টেজ কারেন্টের চেয়ে ৯০ ডিগ্রি অগ্রগামী (Lead) থাকে!'
  },
  detailedExplanation: {
    en: `1. Mathematical Derivation of Inductive Reactance (X_L):
Let the AC sinusoidal current flowing through an ideal inductor L be:
i(t) = I_m · sin(ωt)
The instantaneous voltage across the inductor is:
v_L(t) = L · (di / dt) = L · [d/dt (I_m · sin(ωt))] = L · I_m · ω · cos(ωt)
Using the trigonometric identity cos(ωt) = sin(ωt + 90°):
v_L(t) = V_m · sin(ωt + 90°)
Where peak voltage: V_m = ω · L · I_m = 2 · π · f · L · I_m.

2. Inductive Reactance (X_L):
Inductive reactance is the opposition offered by an inductor to the flow of sinusoidal alternating current:
X_L = V_rms / I_rms = ω · L = 2 · π · f · L [Ohms (Ω)]
- Direct proportionality: X_L ∝ f (At DC, f = 0 -> X_L = 0 Ω, inductor is a short circuit. At very high RF frequencies, X_L becomes immense, blocking AC).

3. Phase Relationship (The "ELI" Rule):
In a purely inductive AC circuit:
- The terminal voltage leads the current by exactly 90° (π/2 radians).
- Equivalently, the current lags the voltage by 90°.
- Mnemonic ELI: In an Inductor (L), Voltage (E) comes before Current (I).

4. Instantaneous Power and Average Real Power (P):
p(t) = v(t) · i(t) = [V_m · cos(ωt)] · [I_m · sin(ωt)] = ½ · V_m · I_m · sin(2ωt)
- Frequency of power oscillations is twice the supply frequency (2f).
- The average real active power consumed over a complete cycle is identically ZERO:
  P = V_rms · I_rms · cos(90°) = 0 Watts!

5. Inductive Reactive Power (Q_L):
The rate at which energy surges back and forth between the power source and the inductor's magnetic field is called Reactive Power:
Q_L = V_rms · I_rms · sin(90°) = I² · X_L = V² / X_L [Volt-Amperes Reactive (VAR)]`,
    hi: `1. इंडक्टिव प्रतिघात (Inductive Reactance, X_L):
X_L = 2 · π · f · L = ω · L [ओम (Ω)]
- DC के लिए (f = 0): X_L = 0 Ω (शॉर्ट सर्किट)।
- उच्च आवृत्ति पर: X_L बहुत अधिक हो जाता है।

2. फेज़ संबंध (Phase Relationship):
शुद्ध इंडक्टर में वोल्टेज धारा से 90° आगे (Lead) रहता है, या धारा 90° पीछे (Lag) रहती है।

3. शक्ति गणना:
- औसत सक्रिय शक्ति (Real Power): P = V · I · cos(90°) = 0 वाट।
- रिएक्टिव पावर (Reactive Power): Q_L = V · I = I² · X_L [VAR]।`,
    bn: `১. ইন্ডাক্টিভ রিঅ্যাকট্যান্স (Inductive Reactance, X_L):
X_L = 2 · π · f · L = ω · L [ওহম (Ω)]
- ডিসির জন্য (f = ০): X_L = ০ Ω (শর্ট সার্কিট)।
- উচ্চ ফ্রিকোয়েন্সিতে: X_L অনেক বৃদ্ধি পায়।

২. ফেজ সম্পর্ক (Phase Relationship):
বিশুদ্ধ ইন্ডাক্টরে ভোল্টেজ কারেন্টের চেয়ে ৯০° অগ্রগামী (Lead) থাকে, অর্থাৎ কারেন্ট ৯০° পিছিয়ে (Lag) থাকে।

৩. ক্ষমতা হিসাব:
- গড় সক্রিয় ক্ষমতা (Active Power): P = V · I · cos(৯০°) = ০ ওয়াট।
- রিঅ্যাক্টিভ পাওয়ার (Reactive Power): Q_L = V · I = I² · X_L [VAR]।`
  },
  formulas: [
    {
      expression: 'X_L = 2\\pi f L = \\omega L',
      description: {
        en: 'Inductive reactance formula in Ohms (Ω)',
        hi: 'इंडक्टिव प्रतिघात का सूत्र (ओम में)',
        bn: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্সের সমীকরণ (ওহমে)'
      }
    },
    {
      expression: 'Q_L = V_{rms} \\cdot I_{rms} = I_{rms}^2 \\cdot X_L',
      description: {
        en: 'Inductive reactive power in VAR',
        hi: 'इंडक्टिव रिएक्टिव पावर (VAR में)',
        bn: 'ইন্ডাক্টিভ রিঅ্যাক্টিভ পাওয়ার (VAR এককে)'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A 50 mH ideal inductor is connected across a 230 V, 50 Hz AC single-phase supply. Calculate: (a) Inductive reactance X_L, (b) RMS current drawn I_rms, (c) Peak current I_max, and (d) Reactive power Q_L in VAR.',
        hi: '50 mH का इंडक्टर 230 V, 50 Hz एसी सप्लाई से जुड़ा है। ज्ञात करें: (a) X_L, (b) I_rms, (c) I_max, एवं (d) Q_L (VAR में)।',
        bn: 'একটি ৫০ mH ইন্ডাক্টর ২৩০ V, ৫০ Hz এসি সিঙ্গেল ফেজ লাইনের সাথে যুক্ত। নির্ণয় করো: (a) X_L, (b) I_rms, (c) I_max এবং (d) রিঅ্যাক্টিভ পাওয়ার Q_L (VAR)।'
      },
      solution: {
        en: `Given:
L = 50 mH = 0.050 H
V_rms = 230 V
f = 50 Hz

(a) Inductive Reactance X_L:
X_L = 2 · π · f · L = 2 × 3.14159 × 50 × 0.050 = 15.708 Ω.

(b) RMS Current I_rms:
I_rms = V_rms / X_L = 230 V / 15.708 Ω = 14.64 Amperes.

(c) Peak Current I_max:
I_max = √2 · I_rms = 1.4142 × 14.64 A = 20.71 Amperes.

(d) Reactive Power Q_L:
Q_L = V_rms · I_rms = 230 V × 14.64 A = 3,367.2 VAR (3.367 kVAR).`,
        hi: `(a) X_L = 2π × 50 × 0.05 = 15.71 Ω
(b) I_rms = 230 / 15.71 = 14.64 A
(c) I_max = √2 × 14.64 = 20.71 A
(d) Q_L = 230 × 14.64 = 3367.2 VAR = 3.37 kVAR।`,
        bn: `(a) X_L = ২π × ৫০ × ০.০৫ = ১৫.৭১ Ω
(b) I_rms = ২৩০ / ১৫.৭১ = ১৪.৬৪ A
(c) I_max = √২ × ১৪.৬৪ = ২০.৭১ A
(d) Q_L = ২৩০ × ১৪.৬৪ = ৩৩৬৭.২ VAR = ৩.৩৭ kVAR।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'If the supply frequency of an AC power line is doubled (from 50 Hz to 100 Hz), what happens to the inductive reactance X_L of an inductor?',
        hi: 'यदि एसी लाइन की आवृत्ति दोगुनी (50 Hz से 100 Hz) कर दी जाए, तो इंडक्टिव प्रतिघात X_L पर क्या प्रभाव पड़ेगा?',
        bn: 'যদি এসি লাইনের ফ্রিকোয়েন্সি দ্বিগুণ (৫০ Hz থেকে ১০০ Hz) করা হয়, তবে ইন্ডাক্টরের রিঅ্যাকট্যান্স X_L কেমন পরিবর্তিত হবে?'
      },
      options: {
        en: ['It doubles (2x)', 'It is halved (0.5x)', 'It remains unchanged', 'It becomes 4 times'],
        hi: ['दोगुना हो जाएगा (2x)', 'आधा हो जाएगा (0.5x)', 'अपरिवर्तित रहेगा', 'चार गुना हो जाएगा'],
        bn: ['দ্বিগুণ হবে (২x)', 'অর্ধেক হবে (০.৫x)', 'অপরিবর্তিত থাকবে', '৪ গুণ হবে']
      },
      correctAnswer: 0,
      explanation: {
        en: 'Since X_L = 2π f L, inductive reactance is directly proportional to frequency. Doubling frequency doubles X_L.',
        hi: 'चूँकि X_L = 2π f L, प्रतिघात आवृत्ति के सीधे समानुपाती होता है। आवृत्ति दोगुनी होने पर X_L भी दोगुना हो जाता है।',
        bn: 'যেহেতু X_L = 2π f L, রিঅ্যাকট্যান্স ফ্রিকোয়েন্সির সমানুপাতিক। ফ্রিকোয়েন্সি দ্বিগুণ হলে X_L ও দ্বিগুণ হয়।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Inductive Reactance (X_L)',
        hi: 'इंडक्टिव प्रतिघात (X_L)',
        bn: 'ইন্ডাক্টিভ রিঅ্যাকট্যান্স (X_L)'
      },
      definition: {
        en: 'X_L = 2π f L (Ohms). The opposition presented by an inductor to sinusoidal alternating current.',
        hi: 'X_L = 2π f L (ओम)। इंडक्टर द्वारा प्रत्यावर्ती धारा के प्रवाह में प्रस्तुत किया गया प्रतिघात।',
        bn: 'X_L = 2π f L (ওহম)। অল্টারনেটিং কারেন্টের বিরুদ্ধে ইন্ডাক্টরের প্রতিরোধমূলক বাধা।'
      }
    }
  ]
};
