import { Lesson } from '../types';

export const LESSON_CAPACITORS_IN_AC_CIRCUITS: Lesson = {
  id: 'lsn-ch7-capacitors-in-ac-circuits',
  topicId: 'ch7-capacitors-in-ac-circuits',
  chapterId: 'ch-capacitors',
  order: 14,
  title: {
    en: 'Capacitors in AC Circuits, Phase Relationship & Capacitive Reactance',
    hi: 'एसी परिपथ में संधारित्र, फेज़ संबंध एवं धारितीय प्रतिघात (Xc)',
    bn: 'এসি সার্কিটে ক্যাপাসিটর, ফেজ সম্পর্ক ও ক্যাপাসিটিভ রিঅ্যাকট্যান্স (Xc)'
  },
  description: {
    en: 'Capacitive reactance formula Xc = 1/(2πfC), 90-degree current lead phase angle, instantaneous & average AC power, and frequency response curves.',
    hi: 'धारितीय प्रतिघात सूत्र Xc = 1/(2πfC), धारा का 90° अग्रगामी फेज़ कोण, औसत शक्ति एवं आवृत्ति प्रतिक्रिया।',
    bn: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স Xc = ১/(২πfC), কারেন্ট ৯০° এগিয়ে থাকার ফেজ সম্পর্ক, গড় শক্তি ও ফ্রিকোয়েন্সি প্রতিক্রিয়া।'
  },
  easyExplanation: {
    en: 'In an AC circuit, the voltage constantly reverses direction. Because the capacitor continuously charges and discharges back and forth, current flows back and forth non-stop. The capacitor opposes this AC flow with an AC resistance called "Capacitive Reactance" (Xc). Higher frequencies make it easier for AC to pass!',
    hi: 'एसी परिपथ में वोल्टेज लगातार दिशा बदलता है। कैपेसिटर के बार-बार चार्ज और डिस्चार्ज होने से परिपथ में लगातार धारा बहती रहती है। कैपेसिटर द्वारा एसी धारा के मार्ग में डाले गए विरोध को "कैपेसिटिव रिएक्टेंस" (Xc) कहते हैं। उच्च आवृत्ति पर इसका विरोध कम होता जाता है।',
    bn: 'এসি সার্কিটে ভোল্টেজ প্রতিনিয়ত দিক পরিবর্তন করে। ক্যাপাসিটর ক্রমাগত চার্জ ও ডিসচার্জ হতে থাকায় বর্তনীতে অনবরত এসি কারেন্ট প্রবাহিত হয়। ক্যাপাসিটর এসি প্রবাহের বিরুদ্ধে যে বাধা সৃষ্টি করে তাকে "ক্যাপাসিটিভ রিঅ্যাকট্যান্স" (Xc) বলে। ফ্রিকোয়েন্সি যত বাড়ে, ক্যাপাসিটরের বাধা তত কমে যায়।'
  },
  detailedExplanation: {
    en: `1. Pure Capacitive AC Circuit:
Let an alternating sinusoidal voltage be applied across a pure capacitor C:
v(t) = V_m · sin(ωt)
The instantaneous current is:
i(t) = C · (dv / dt) = C · d[V_m · sin(ωt)] / dt = ω · C · V_m · cos(ωt)
Using trigonometric identity cos(θ) = sin(θ + 90°):
i(t) = I_m · sin(ωt + 90°) = I_m · sin(ωt + π/2)
Where I_m = ω · C · V_m = V_m / [ 1 / (ω · C) ].

2. Phase Angle Relationship:
In a purely capacitive AC circuit:
- The alternating CURRENT LEADS the applied VOLTAGE by exactly 90 degrees (π/2 radians).
- Memory acronym "CIVIL": In a **C**apacitor, **I** (current) leads **V** (voltage).

3. Capacitive Reactance (Xc):
Capacitive reactance is the opposition offered by a capacitor to the flow of alternating current:
X_c = 1 / (ω · C) = 1 / (2 · π · f · C) [Ohms, Ω]
Where:
- f = AC supply frequency in Hertz (Hz)
- C = Capacitance in Farads (F)
- ω = Angular frequency in rad/s (2πf)

Frequency Characteristics:
- At DC (f = 0 Hz): X_c = 1 / 0 = ∞ (Infinite impedance => Capacitors block DC!).
- At very high frequency (f → ∞): X_c → 0 Ω (Acts almost like an AC short circuit => High frequencies pass easily!).

4. AC Power in Pure Capacitor:
- Instantaneous Power: p(t) = v(t) · i(t) = V_m · sin(ωt) · I_m · cos(ωt) = ½ · V_m · I_m · sin(2ωt)
- Average Active Real Power (P):
P_avg = V_rms · I_rms · cos(90°) = 0 Watts!
A pure capacitor consumes ZERO average real power; it continuously takes energy from the source during one quarter-cycle and returns 100% of it during the next quarter-cycle (pure reactive power, Q = V · I VARs leading).`,
    hi: `1. शुद्ध कैपेसिटिव एसी परिपथ:
v(t) = V_m · sin(ωt)
i(t) = I_m · sin(ωt + 90°)
- शुद्ध कैपेसिटर में धारा वोल्टेज से 90° (π/2) आगे (Lead) चलती है।

2. धारितीय प्रतिघात (Capacitive Reactance, Xc):
X_c = 1 / (2 · π · f · C) [ओम, Ω]
- DC हेतु (f = 0): X_c = ∞ (कैपेसिटर DC को ब्लॉक करता है)।
- उच्च आवृत्ति हेतु: X_c बहुत कम होता है (AC आसानी से गुजरता है)।

3. औसत शक्ति (Average Power):
P_avg = V_rms · I_rms · cos(90°) = 0 वाट।
शुद्ध कैपेसिटर वास्तविक शक्ति का उपभोग नहीं करता (शून्य वाट)।`,
    bn: `১. বিশুদ্ধ ক্যাপাসিটিভ এসি সার্কিট:
v(t) = V_m · sin(ωt)
i(t) = I_m · sin(ωt + ৯০°)
- বিশুদ্ধ ক্যাপাসিটরে কারেন্ট ভোল্টেজের চেয়ে ৯০° (π/২ রেডিয়ান) এগিয়ে (Lead) থাকে।

২. ক্যাপাসিটিভ রিঅ্যাকট্যান্স (Xc):
X_c = ১ / (২ · π · f · C) [ওহম, Ω]
- ডিসির জন্য (f = 0): X_c = অসীম (ডিসি সম্পূর্ণ ব্লক করে)।
- উচ্চ ফ্রিকোয়েন্সিতে: X_c শূন্যের কাছাকাছি (এসি সংকেত সহজে পাস করে)।

৩. গড় সক্রিয় শক্তি:
P_avg = V_rms · I_rms · cos(৯০°) = ০ ওয়াট।
বিশুদ্ধ ক্যাপাসিটর কোনো কার্যকর ওয়াট শক্তি অপচয় করে না।`
  },
  formulas: [
    {
      expression: 'X_c = 1 / (2 · π · f · C)',
      description: {
        en: 'Capacitive reactance formula in Ohms',
        hi: 'धारितीय प्रतिघात (Xc) सूत्र ओम में',
        bn: 'ক্যাপাসিটিভ রিঅ্যাকট্যান্স (Xc) সূত্র ওহম এককে'
      }
    },
    {
      expression: 'I_rms = V_rms / X_c = 2 · π · f · C · V_rms',
      description: {
        en: 'RMS AC current drawn by a pure capacitor',
        hi: 'कैपेसिटर द्वारा ली जाने वाली RMS एसी धारा',
        bn: 'ক্যাপাসিটর দ্বারা গৃহীত RMS এসি কারেন্ট'
      }
    },
    {
      expression: 'Q_c = V_rms · I_rms = (V_rms)² / X_c = 2 · π · f · C · (V_rms)²',
      description: {
        en: 'Reactive power supplied by capacitor in VAR',
        hi: 'कैपेसिटर द्वारा आपूर्ति की गई रिएक्टिव पावर (VAR)',
        bn: 'ক্যাপাসিটর দ্বারা সরবরাহকৃত রিঅ্যাক্টিভ পাওয়ার (VAR)'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Transformerless capacitive power supplies for low-power LED bulbs and IoT sensors',
      hi: 'एलईडी बल्बों में ट्रांसफॉर्मर-रहित कैपेसिटिव पावर सप्लाई',
      bn: 'এলইডি বাল্ব ও ছোট ইলেকট্রনিক্সে ট্রান্সফরমারবিহীন ক্যাপাসিটিভ পাওয়ার সাপ্লাই'
    },
    {
      en: 'High-pass audio filters and tone control crossover networks in loudspeakers',
      hi: 'लाउडस्पीकर में हाई-पास ऑडियो फिल्टर और ट्वीटर सुरक्षा',
      bn: 'স্পিকারে উচ্চ ফ্রিকোয়েন্সির অডিও সিগন্যাল টুইটারে পাঠানোর হাই-পাস ফিল্টার'
    }
  ],
  importantPoints: {
    en: [
      'In a capacitor, AC current leads voltage by 90° (Power Factor = 0 Leading)',
      'Capacitive reactance Xc is inversely proportional to frequency (f) and capacitance (C)',
      'Average active power consumption of a pure capacitor is ZERO Watts'
    ],
    hi: [
      'कैपेसिटर में करंट वोल्टेज से 90° आगे चलता है (पावर फैक्टर = 0 लीडिंग)',
      'Xc आवृत्ति और धारिता दोनों के व्युत्क्रमानुपाती होता है',
      'शुद्ध कैपेसिटर की औसत वास्तविक शक्ति खपत शून्य वाट होती है'
    ],
    bn: [
      'ক্যাপাসিটরে এসি কারেন্ট ভোল্টেজের চেয়ে ৯০° অগ্রবর্তী থাকে (পাওয়ার ফ্যাক্টর = ০ লিডিং)',
      'ক্যাপাসিটিভ রিঅ্যাকট্যান্স Xc ফ্রিকোয়েন্সি ও ক্যাপাসিট্যান্সের ব্যস্তানুপাতিক',
      'বিশুদ্ধ ক্যাপাসিটরের গড় কার্যকর শক্তি অপচয় সর্বদা শূন্য ওয়াট'
    ]
  },
  commonMistakes: {
    en: [
      'Thinking a capacitor dissipates heat in ideal AC calculations; power loss is strictly zero because cos(90°) = 0',
      'Confusing Xc formula 1/(2πfC) with XL formula 2πfL'
    ],
    hi: [
      'यह सोचना कि आदर्श कैपेसिटर एसी में वाट शक्ति खर्च करता है (cos 90° = 0 होने से P = 0 होता है)',
      'Xc सूत्र 1/(2πfC) और XL सूत्र (2πfL) में भ्रमित होना'
    ],
    bn: [
      'মনে করা ক্যাপাসিটর এসি লাইনে শক্তি অপচয় করে (cos ৯০° = ০ হওয়ায় P = ০)',
      'Xc এর সূত্র ১/(২πfC) এবং XL এর সূত্র ২πfL-কে গুলিয়ে ফেলা'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-14-1',
      question: {
        en: 'If the frequency of an AC power line is doubled from 50 Hz to 100 Hz, the capacitive reactance (Xc) of a connected capacitor will:',
        hi: 'यदि एसी लाइन की आवृत्ति 50 Hz से बढ़ाकर 100 Hz (दोगुनी) कर दी जाए, तो कैपेसिटिव रिएक्टेंस (Xc):',
        bn: 'যদি এসি লাইনের ফ্রিকোয়েন্সি ৫০ Hz থেকে দ্বিগুণ করে ১০০ Hz করা হয়, তবে ক্যাপাসিটিভ রিঅ্যাকট্যান্স (Xc) কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Double', hi: 'दोगुना हो जाएगा', bn: 'দ্বিগুণ হবে' } },
        { id: 'opt-b', text: { en: 'Halve (decrease to 50%)', hi: 'आधा हो जाएगा', bn: 'অর্ধেক (৫০%) হবে' } },
        { id: 'opt-c', text: { en: 'Quadruple', hi: '4 गुना हो जाएगा', bn: '৪ গুণ হবে' } },
        { id: 'opt-d', text: { en: 'Remain unchanged', hi: 'अपरिवर्तित रहेगा', bn: 'অপরিবর্তিত থাকবে' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Since Xc = 1 / (2πfC), capacitive reactance is inversely proportional to frequency (Xc ∝ 1/f). Doubling frequency cuts Xc in half.',
        hi: 'चूंकि Xc ∝ 1/f होता है, इसलिए आवृत्ति दोगुनी करने पर प्रतिघात आधा (50%) रह जाता है।',
        bn: 'যেহেতু Xc ∝ ১/f, তাই ফ্রিকোয়েন্সি দ্বিগুণ করলে ক্যাপাসিটিভ রিঅ্যাকট্যান্স অর্ধেক হয়ে যাবে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-14-1',
      question: {
        en: 'A 20 μF capacitor is connected across a 230 V, 50 Hz single-phase AC mains supply. Calculate: (a) Capacitive reactance Xc, (b) RMS current drawn from the line, (c) Reactive power Q in kVAR.',
        hi: '230 V, 50 Hz सप्लाई पर जुड़े 20 μF कैपेसिटर हेतु ज्ञात करें: (a) Xc, (b) RMS धारा, (c) kVAR में रिएक्टिव पावर।',
        bn: '২৩০ V, ৫০ Hz সিঙ্গেল ফেজ লাইনে যুক্ত একটি ২০ μF ক্যাপাসিটরের: (a) Xc, (b) RMS কারেন্ট, (c) kVAR এককে রিঅ্যাক্টিভ পাওয়ার নির্ণয় করুন।'
      },
      hint: {
        en: 'Xc = 1 / (2 · π · 50 · 20×10⁻⁶) = 1 / (0.006283) ≈ 159.15 Ω.',
        hi: 'Xc = 1 / (2π × 50 × 20×10⁻⁶) = 159.15 Ω। फिर I = V / Xc।',
        bn: 'Xc = ১ / (২π × ৫০ × ২০×10⁻⁶) = ১৫৯.১৫ Ω। এরপর I = V / Xc হিসাব করুন।'
      },
      answerKey: {
        en: '(a) Xc = 159.15 Ω. (b) I_rms = 230 V / 159.15 Ω = 1.445 A. (c) Q = 230 V × 1.445 A = 332.4 VAR = 0.332 kVAR (leading).',
        hi: '(a) Xc = 159.15 Ω, (b) I = 1.445 A, (c) Q = 0.332 kVAR।',
        bn: '(a) Xc = ১৫৯.১৫ Ω, (b) I = ১.৪৪৫ A, (c) Q = ৩৩২.৪ VAR = ০.৩৩২ kVAR (লিডিং)।'
      }
    }
  ]
};
