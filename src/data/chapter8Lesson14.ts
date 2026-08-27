import { Lesson } from '../types';

export const LESSON_QUALITY_FACTOR_CHOKES: Lesson = {
  id: 'lsn-ch8-quality-factor-chokes',
  topicId: 'ch8-quality-factor-chokes',
  chapterId: 'ch-inductors',
  order: 14,
  title: {
    en: 'Quality Factor (Q), Self-Resonant Frequency (SRF) & Chokes',
    hi: 'क्वालिटी फैक्टर (Q), स्व-अनुनाद आवृत्ति (SRF) एवं चोक',
    bn: 'কোয়ালিটি ফ্যাক্টর (Q), সেলফ-রেজোন্যান্ট ফ্রিকোয়েন্সি (SRF) ও চোক'
  },
  description: {
    en: 'Definition and calculation of Inductor Quality Factor Q = ωL / R_eff, parasitic equivalent circuit (ESR, parallel inter-winding capacitance C_p), Self-Resonant Frequency (SRF = 1 / 2π√(L·C_p)), RF chokes vs power line filtering chokes, and common-mode chokes.',
    hi: 'इंडक्टर क्वालिटी फैक्टर Q = ωL / R_eff, परजीवी घटक (ESR, इंटर-वाइंडिंग कैपेसिटेंस C_p), स्व-अनुनाद आवृत्ति (SRF), आरएफ चोक एवं कॉमन-मोड चोक।',
    bn: 'ইন্ডাক্টরের কোয়ালিটি ফ্যাক্টর Q = ωL / R_eff, প্যারাসিটিক সমতুল্য বর্তনী (ESR, সমান্তরাল ধারকত্ব C_p), সেলফ-রেজোন্যান্ট ফ্রিকোয়েন্সি (SRF), RF চোক ও কমন-মোড ফিল্টার চোক।'
  },
  easyExplanation: {
    en: 'No real-world inductor is 100% pure! Every coil has copper wire resistance and tiny microscopic stray capacitance between adjacent wire turns. The Quality Factor (Q) tells you how close your inductor is to being an ideal energy storage component, while the Self-Resonant Frequency (SRF) is the maximum speed limit above which the inductor stops behaving like a coil and turns into a capacitor!',
    hi: 'कोई भी वास्तविक इंडक्टर 100% शुद्ध नहीं होता! हर कुंडली में तार का प्रतिरोध और फेरों के बीच सूक्ष्म परजीवी कैपेसिटेंस (C_p) होता है। क्वालिटी फैक्टर (Q) यह बताता है कि इंडक्टर कितना शुद्ध है, और स्व-अनुनाद आवृत्ति (SRF) वह अधिकतम सीमा है जिसके ऊपर इंडक्टर कैपेसिटर की तरह काम करने लगता है!',
    bn: 'বাস্তবের কোনো ইন্ডাক্টর শতভাগ বিশুদ্ধ নয়! তারের নিজস্ব রোধ এবং পাশাপাশি প্যাঁচের মধ্যে ক্ষুদ্র পরজীবী ক্যাপাসিট্যান্স (C_p) থাকে। কোয়ালিটি ফ্যাক্টর (Q) নির্দেশ করে ইন্ডাক্টরটি কতটা উৎকৃষ্ট, আর সেলফ-রেজোন্যান্ট ফ্রিকোয়েন্সি (SRF) হলো সেই সর্বোচ্চ ফ্রিকোয়েন্সি যার পর ইন্ডাক্টর আর কয়েল থাকে না, ক্যাপাসিটরে পরিণত হয়!'
  },
  detailedExplanation: {
    en: `1. Definition of Quality Factor (Q-Factor):
The Quality Factor (Q) of an inductor is the dimensionless figure of merit defined as the ratio of its inductive reactance (energy stored) to its effective series resistance (energy dissipated as heat):
Q = (Reactive Power) / (Active Power Dissipated) = (ω · L) / R_eff = (2 · π · f · L) / R_eff
- Higher Q (e.g., Q > 50 to 200) means sharp resonance, low signal loss, and high selectivity in tuned filters and radio transmitters.
- R_eff includes DC copper resistance, AC skin effect resistance, and core hysteresis/eddy current loss resistances.

2. Real-World Inductor Equivalent Circuit:
A real inductor consists of:
1. Ideal Inductance (L)
2. Equivalent Series Resistance (ESR or R_eff)
3. Parasitic Inter-Winding Capacitance (C_p or C_s) in parallel across the terminals (caused by dielectric insulation between closely spaced adjacent turns).

3. Self-Resonant Frequency (SRF):
At low frequencies, inductive reactance dominates (X_L ≫ X_C).
As frequency rises, capacitive reactance decreases until X_L = X_C at the Self-Resonant Frequency (SRF):
f_SRF = 1 / ( 2 · π · √(L · C_p) ) [Hz]
- At f = f_SRF: The inductor acts as a high-impedance parallel resonant circuit (impedance is purely resistive: Z ≈ R_parallel).
- Above f_SRF (f > f_SRF): The parasitic capacitance C_p dominates completely! The component exhibits CAPACITIVE behavior (impedance drops with frequency).
- Engineering Rule of Thumb: Always operate inductors at frequencies below 0.1 to 0.2 × f_SRF.

4. RF Chokes vs Power Chokes:
- RF Chokes (RFC): Air-core or ferrite-bead inductors designed to pass DC bias while offering immense impedance (X_L ≫ 1 kΩ) to block high-frequency radio noise.
- Common-Mode Chokes (CMC): Dual coupled windings wound with identical polarity on a single toroidal core. They present zero impedance to differential load currents while presenting immense series impedance to unwanted common-mode EMI noise.`,
    hi: `1. क्वालिटी फैक्टर (Q-Factor):
Q = (ω · L) / R_eff = (2 · π · f · L) / R_eff
उच्च Q मान कम ऊर्जा क्षय और बेहतर ट्यूनिंग को दर्शाता है।

2. स्व-अनुनाद आवृत्ति (SRF):
फेरों के बीच परजीवी धारिता C_p के कारण:
f_SRF = 1 / (2 · π · √(L · C_p)) [Hz]
SRF से अधिक आवृत्ति पर इंडक्टर कैपेसिटर की तरह काम करने लगता है!

3. चोक (Chokes):
- RF चोक: रेडियो फ्रीक्वेंसी शोर को रोकने एवं DC को गुजरने देने वाला इंडक्टर।
- कॉमन-मोड चोक (CMC): EMI शोर को दबाने के लिए दोनों तारों पर लिपटी विशेष टॉरॉइडल कुंडली।`,
    bn: `১. কোয়ালিটি ফ্যাক্টর (Q-Factor):
Q = (ω · L) / R_eff = (2 · π · f · L) / R_eff
উচ্চ Q মান কম অপচয় এবং নিখুঁত টিউনিং নিশ্চিত করে।

২. সেলফ-রেজোন্যান্ট ফ্রিকোয়েন্সি (SRF):
প্যাঁচের মধ্যকার পরজীবী ক্যাপাসিট্যান্স C_p এর কারণে:
f_SRF = 1 / (2 · π · √(L · C_p)) [Hz]
SRF এর চেয়ে বেশি ফ্রিকোয়েন্সিতে ইন্ডাক্টরটি ক্যাপাসিটরের মতো আচরণ শুরু করে!

৩. চোক (Chokes):
- RF চোক: উচ্চ ফ্রিকোয়েন্সি নয়েজ আটকে ডিসি প্রবাহিত হতে দেয়।
- কমন-মোড চোক (CMC): ইলেক্ট্রোম্যাগনেটিক নয়েজ (EMI) ফিল্টার করতে ব্যবহৃত বিশেষ দ্বিমুখী কয়েল।`
  },
  formulas: [
    {
      expression: 'Q = \\frac{\\omega L}{R_{eff}} = \\frac{2\\pi f L}{R_{eff}}',
      description: {
        en: 'Inductor Quality factor formula',
        hi: 'इंडक्टर क्वालिटी फैक्टर (Q) सूत्र',
        bn: 'ইন্ডাক্টরের কোয়ালিটি ফ্যাক্টর সমীকরণ'
      }
    },
    {
      expression: 'f_{SRF} = \\frac{1}{2\\pi \\sqrt{L \\cdot C_p}}',
      description: {
        en: 'Self-Resonant Frequency (SRF) due to parasitic capacitance',
        hi: 'परजीवी धारिता के कारण स्व-अनुनाद आवृत्ति',
        bn: 'পরজীবী ক্যাপাসিট্যান্সের কারণে সেলফ-রেজোন্যান্ট ফ্রিকোয়েন্সি'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A 100 μH RF inductor has an effective series resistance of 3.14 Ω at 1.0 MHz, and a parasitic turn-to-turn capacitance of 2.5 pF. Calculate: (a) Quality factor Q at 1.0 MHz, and (b) Self-Resonant Frequency (f_SRF).',
        hi: '100 μH के RF इंडक्टर का 1.0 MHz पर ESR = 3.14 Ω एवं परजीवी धारिता Cp = 2.5 pF है। (a) 1 MHz पर Q-फैक्टर, एवं (b) SRF ज्ञात करें।',
        bn: '১.০ MHz এ একটি ১০০ μH RF ইন্ডাক্টরের কার্যকর রোধ ৩.১৪ Ω এবং পরজীবী ধারকত্ব ২.৫ pF। নির্ণয় করো: (a) ১.০ MHz এ Q-ফ্যাক্টর এবং (b) সেলফ-রেজোন্যান্ট ফ্রিকোয়েন্সি (SRF)।'
      },
      solution: {
        en: `Given:
L = 100 μH = 100 × 10⁻⁶ H
R_eff = 3.14 Ω at f = 1.0 MHz = 10⁶ Hz
C_p = 2.5 pF = 2.5 × 10⁻¹² F

(a) Calculate Q-Factor at 1 MHz:
X_L = 2 · π · f · L = 2 × 3.14159 × 10⁶ × (100 × 10⁻⁶) = 628.32 Ω
Q = X_L / R_eff = 628.32 Ω / 3.14 Ω = 200.1 (High-Q inductor!).

(b) Calculate Self-Resonant Frequency (f_SRF):
L · C_p = (100 × 10⁻⁶) × (2.5 × 10⁻¹²) = 2.5 × 10⁻¹⁶
√(L · C_p) = √(2.5 × 10⁻¹⁶) = 1.5811 × 10⁻⁸
f_SRF = 1 / (2 · π · 1.5811 × 10⁻⁸) = 1 / (9.9346 × 10⁻⁸) = 10,065,800 Hz ≈ 10.07 MHz.`,
        hi: `(a) X_L = 2π × 10⁶ × 100×10⁻⁶ = 628.3 Ω
Q = 628.3 / 3.14 = 200.1
(b) f_SRF = 1 / (2π √(100×10⁻⁶ × 2.5×10⁻¹²)) = 10.07 MHz।`,
        bn: `(a) X_L = ২π × ১০⁶ × ১০০×১০⁻⁶ = ৬২৮.৩ Ω
Q = ৬২৮.৩ / ৩.১৪ = ২০০.১
(b) f_SRF = ১ / (২π √(১০০×১০⁻⁶ × ২.৫×১০⁻¹২)) = ১০.০৭ MHz।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'What happens to the electrical behavior of an inductor when operated at frequencies above its Self-Resonant Frequency (f > f_SRF)?',
        hi: 'जब किसी इंडक्टर को उसकी स्व-अनुनाद आवृत्ति (f > SRF) से अधिक आवृत्ति पर संचालित किया जाता है, तो उसका विद्युत व्यवहार कैसा हो जाता है?',
        bn: 'সেলফ-রেজোন্যান্ট ফ্রিকোয়েন্সির চেয়ে বেশি ফ্রিকোয়েন্সিতে (f > SRF) পরিচালিত হলে একটি ইন্ডাক্টরের বৈদ্যুতিক আচরণ কেমন হয়?'
      },
      options: {
        en: ['It behaves as an ideal pure resistor', 'It becomes capacitive (impedance decreases as frequency increases)', 'Its inductance increases to infinity', 'It acts as an open circuit with zero current'],
        hi: ['यह शुद्ध प्रतिरोधक बन जाता है', 'यह कैपेसिटिव व्यवहार करने लगता है (आवृत्ति बढ़ने पर प्रतिबाधा घटती है)', 'प्रेरकत्व अनंत हो जाता है', 'शून्य धारा वाला खुला परिपथ बन जाता है'],
        bn: ['এটি বিশুদ্ধ রোধে পরিণত হয়', 'এটি ক্যাপাসিটর হিসেবে আচরণ করে (ফ্রিকোয়েন্সি বৃদ্ধির সাথে ইম্পিড্যান্স কমে)', 'ইন্ডাক্ট্যান্স অসীম হয়ে যায়', 'ওপেন সার্কিট হয়ে যায়']
      },
      correctAnswer: 1,
      explanation: {
        en: 'Above SRF, the parasitic parallel inter-winding capacitance C_p has lower impedance than the inductance, causing the component to behave capacitively.',
        hi: 'SRF से ऊपर परजीवी धारिता Cp का प्रभाव अधिक हो जाता है, जिससे घटक कैपेसिटिव व्यवहार करने लगता है।',
        bn: 'SRF এর উপরে সমান্তরাল পরজীবী ক্যাপাসিট্যান্স Cp এর ইম্পিড্যান্স কমে যাওয়ায় উপাদানটি ক্যাপাসিটিভ হিসেবে কাজ করে।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Self-Resonant Frequency (SRF)',
        hi: 'स्व-अनुनाद आवृत्ति (SRF)',
        bn: 'সেলফ-রেজোন্যান্ট ফ্রিকোয়েন্সি (SRF)'
      },
      definition: {
        en: 'f_SRF = 1 / (2π√(LC_p)). The frequency at which coil inductance resonates with stray parasitic capacitance.',
        hi: 'वह आवृत्ति जिस पर कुंडली का प्रेरकत्व उसकी परजीवी धारिता के साथ अनुनाद करता है।',
        bn: 'যে ফ্রিকোয়েন্সিতে কয়েলের ইন্ডাক্ট্যান্স তার নিজস্ব পরজীবী ক্যাপাসিট্যান্সের সাথে রেজোন্যান্স সৃষ্টি করে।'
      }
    }
  ]
};
