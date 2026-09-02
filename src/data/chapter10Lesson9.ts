import { Lesson } from '../types';

export const LESSON_TRANSFORMER_EMF_EQUATION: Lesson = {
  id: 'lsn-ch10-transformer-emf-equation',
  topicId: 'ch10-transformer-emf-equation',
  chapterId: 'ch-em-induction',
  order: 9,
  title: {
    en: 'Transformer EMF Equation & Ideal Transformer',
    hi: 'ट्रांसफॉर्मर ईएमएफ समीकरण एवं आदर्श ट्रांसफॉर्मर',
    bn: 'ট্রান্সফরমার ইএমএফ সমীকরণ ও আদর্শ ট্রান্সফরমার'
  },
  description: {
    en: 'Complete mathematical derivation of the Universal Transformer EMF Equation (E = 4.44 · f · N · Φ_m) and foundational ideal transformer theory. Explores the physical origin of the 4.44 constant (4 × Form Factor 1.11), EMF-per-turn equality (E₁/N₁ = E₂/N₂), transformation ratio (K = N₂/N₁ = V₂/V₁ = I₁/I₂), ideal machine axioms (zero resistance, zero leakage, infinite permeability, zero core losses), Step-Up vs Step-Down topologies, 100% power conservation (V₁I₁ = V₂I₂), and reflected load impedance transformation (Z_in = (N₁/N₂)² · Z_L).',
    hi: 'सार्वत्रिक ट्रांसफॉर्मर ईएमएफ समीकरण (E = 4.44 · f · N · Φ_m) का संपूर्ण गणितीय निगमन एवं आदर्श ट्रांसफॉर्मर सिद्धांत। 4.44 नियतांक की उत्पत्ति (4 × फॉर्म फैक्टर 1.11), प्रति फेरा समान ईएमएफ (E₁/N₁ = E₂/N₂), रूपांतरण अनुपात (K = N₂/N₁ = V₂/V₁ = I₁/I₂), आदर्श ट्रांसफॉर्मर की मान्यताएं, स्टेप-अप व स्टेप-डाउन प्रकार, 100% शक्ति संरक्षण (V₁I₁ = V₂I₂) तथा परावर्तित प्रतिबाधा रूपांतरण।',
    bn: 'সার্বজনীন ট্রান্সফরমার ইএমএফ সমীকরণ (E = ৪.৪৪ · f · N · Φ_m) প্রতিপাদন এবং আদর্শ ট্রান্সফরমার তত্ত্বের বিশদ বিশ্লেষণ। ৪.৪৪ ধ্রুবকের উৎপত্তি (৪ × ফর্ম ফ্যাক্টর ১.১১), প্রতি পাকে সমান ইএমএফ (E₁/N₁ = E₂/N₂), রূপান্তর অনুপাত (K = N₂/N₁ = V₂/V₁ = I₁/I₂), আদর্শ মেশিনের শর্তাবলী, স্টেপ-আপ ও স্টেপ-ডাউন শ্রেণিবিভাগ, ১০০% শক্তি সংরক্ষণ নীতি (V₁I₁ = V₂I₂) এবং প্রতিফলিত লোড প্রতিবন্ধকতা রূপান্তর।'
  },
  estimatedMinutes: 40,
  easyExplanation: {
    en: "A transformer is an electrical gearbox! Just like a bicycle gear lets you trade pedaling speed for climbing power without creating or destroying energy, a transformer lets you trade voltage for current without losing power. When you feed AC voltage into the primary coil, the laminated iron core channels a pulsating magnetic wave back and forth 50 or 60 times every second. This wave cuts through the secondary coil, generating an exact voltage dictated by the turn ratio: if the secondary has 4 times more wire loops than the primary, it delivers 4 times the voltage (with 1/4th the current)! The universal equation E = 4.44 · f · N · Φ_m proves that every single loop of wire in both coils experiences the exact same induced voltage.",
    hi: 'ट्रांसफॉर्मर बिजली का "गियरबॉक्स" है! जिस तरह साइकिल का गियर ऊर्जा बदले बिना गति और ताकत के बीच संतुलन बनाता है, उसी तरह ट्रांसफॉर्मर बिना बिजली नष्ट किए वोल्टेज और करंट के बीच संतुलन बनाता है। जब आप प्राथमिक कुंडली में एसी वोल्टेज देते हैं, तो लोहे का कोर प्रति सेकंड 50 या 60 बार चुंबकीय तरंगों को आगे-पीछे घुमाता है। यह तरंग द्वितीयक कुंडली को काटती है। यदि द्वितीयक में फेरों की संख्या प्राथमिक से 4 गुना अधिक है, तो वोल्टेज भी 4 गुना बढ़ जाएगा (और करंट 1/4 रह जाएगा)! सूत्र E = 4.44 · f · N · Φ_m साबित करता है कि दोनों कुंडलियों के प्रत्येक फेरे में एक समान वोल्टेज पैदा होता है।',
    bn: 'ট্রান্সফরমার হলো বিদ্যুতের "গিয়ারবক্স"! ঠিক যেভাবে সাইকেলের গিয়ার নতুন শক্তি তৈরি না করেই গতি ও বলের মধ্যে সমন্বয় করে, তেমনি ট্রান্সফরমার কোনো শক্তি অপচয় না করেই ভোল্টেজ ও কারেন্টের মধ্যে রূপান্তর ঘটায়। যখন প্রাইমারি কয়েলে এসি ভোল্টেজ দেওয়া হয়, তখন লেমিনেটেড আয়রন কোর প্রতি সেকেন্ডে ৫০ বা ৬০ বার চৌম্বক তরঙ্গ তৈরি করে। এই চৌম্বক তরঙ্গ সেকেন্ডারি কয়েলকে ছেদ করে। সেকেন্ডারিতে পাকসংখ্যা প্রাইমারির চেয়ে ৪ গুণ বেশি হলে ভোল্টেজও ৪ গুণ বৃদ্ধি পায় (এবং কারেন্ট ১/৪ ভাগ হয়ে যায়)! E = ৪.৪৪ · f · N · Φ_m সমীকরণ প্রমাণ করে যে প্রতিটি পাকে সমপরিমাণ ভোল্টেজ উৎপন্ন হয়।'
  },
  detailedExplanation: {
    en: `1. Physical Construction & Operating Principle:
A static single-phase transformer consists of:
- Primary Winding (N₁ turns): Connected to the alternating AC voltage supply source v₁(t) = V₁m · sin(ωt).
- Secondary Winding (N₂ turns): Connected to the electrical load impedance Z_L.
- Laminated Silicon-Steel Core: Provides a continuous, high-permeability (μ_r ≈ 4000) low-reluctance magnetic path linking both windings with near-zero leakage.

2. Derivation of the Universal Transformer EMF Equation:
Let the alternating magnetic flux in the core vary sinusoidally with time:
    \\Phi(t) = \\Phi_m \\cdot \\sin(\\omega t) = \\Phi_m \\cdot \\sin(2\\pi f t)
where Φ_m is the maximum peak core flux in Webers and f is the supply frequency in Hertz.

By Faraday's Law of Electromagnetic Induction, the instantaneous EMF induced in the Primary Winding is:
    e₁(t) = - N₁ · \\frac{d\\Phi(t)}{dt} = - N₁ · \\frac{d}{dt}\\left(\\Phi_m \\sin(\\omega t)\\right)
    e₁(t) = - N₁ · \\omega · \\Phi_m · \\cos(\\omega t)
Using trigonometry -cos(θ) = sin(θ - π/2):
    e₁(t) = N₁ · (2\\pi f) · \\Phi_m · \\sin\\left(\\omega t - \\frac{\\pi}{2}\\right)

The maximum (peak) value of primary induced EMF is:
    E_{1m} = 2\\pi f N₁ \\Phi_m
To find the Root Mean Square (RMS) value of a sinusoidal wave:
    E₁ = \\frac{E_{1m}}{\\sqrt{2}} = \\frac{2\\pi}{\\sqrt{2}} · f · N₁ · \\Phi_m = \\sqrt{2}\\pi · f · N₁ · \\Phi_m
Since √2 · π = 1.41421 · 3.14159 ≈ 4.44288:
    E₁ = 4.44 · f · N₁ · \\Phi_m  \\quad \\text{[Volts RMS]}

Similarly, the RMS EMF induced in the Secondary Winding is:
    E₂ = 4.44 · f · N₂ · \\Phi_m  \\quad \\text{[Volts RMS]}

3. Physical Meaning of the Constant 4.44:
In one full cycle (period T = 1/f), the core flux changes from -Φ_m to +Φ_m in half a period (T/2 = 1/(2f)).
- Average rate of change of flux:
    \\text{Average } \\frac{d\\Phi}{dt} = \\frac{2\\Phi_m}{1/(2f)} = 4 · f · \\Phi_m
- Average induced EMF per turn: E_{avg} / N = 4 · f · \\Phi_m.
- For a pure sine wave, Form Factor (k_f) = RMS Value / Average Value = (π / (2√2)) ≈ 1.11.
- Therefore:
    \\text{RMS EMF } E = \\text{Form Factor} \\times E_{avg} = 1.11 \\times (4 · f · N · \\Phi_m) = 4.44 · f · N · \\Phi_m.

4. Equality of Induced EMF Per Turn:
Dividing E₁ by N₁ and E₂ by N₂:
    \\frac{E₁}{N₁} = \\frac{E₂}{N₂} = 4.44 · f · \\Phi_m  \\quad \\text{[Volts per turn]}
This fundamental rule states that EVERY single loop of conductor in a transformer experiences the exact same induced voltage.

5. Voltage & Current Transformation Ratio (K):
    K = \\frac{E₂}{E₁} = \\frac{V₂}{V₁} = \\frac{N₂}{N₁} = \\frac{I₁}{I₂}
- Step-Up Transformer: N₂ > N₁ ==> K > 1 ==> V₂ > V₁, I₂ < I₁
- Step-Down Transformer: N₂ < N₁ ==> K < 1 ==> V₂ < V₁, I₂ > I₁
- 1:1 Isolation Transformer: N₂ = N₁ ==> K = 1 ==> V₂ = V₁, I₂ = I₁

6. Ideal Transformer Axioms & Power Conservation:
An ideal transformer is a theoretical benchmark possessing:
1. Zero Winding Resistance (R₁ = 0, R₂ = 0 ==> no I²R copper heating loss).
2. Zero Leakage Flux (k = 1.0 ==> all flux confined in core).
3. Infinite Core Permeability (μ_r -> ∞ ==> zero magnetizing current needed).
4. Zero Core Losses (P_hysteresis = 0, P_eddy = 0).
- Total Power Conservation (100% Efficiency):
    S₁ = V₁ · I₁ = V₂ · I₂ = S₂  \\quad \\text{[VA]}
- Reflected Impedance Transformation:
    Z_{in} = \\frac{V₁}{I₁} = \\frac{V₂ / K}{K · I₂} = \\frac{1}{K²} · \\frac{V₂}{I₂} = \\left(\\frac{N₁}{N₂}\\right)^2 · Z_L`,
    hi: `1. ट्रांसफॉर्मर की संरचना एवं कार्य सिद्धांत:
एकल-फेज ट्रांसफॉर्मर में प्राथमिक वाइंडिंग (N₁ फेरे), द्वितीयक वाइंडिंग (N₂ फेरे) एवं पटलित सिलिकॉन स्टील कोर (Laminated Steel Core) होते हैं।

2. सार्वत्रिक ईएमएफ समीकरण का निगमन:
माना कोर में प्रत्यावर्ती फ्लक्स: Φ(t) = Φ_m sin(ωt)
फैराडे के नियम से:
    e₁(t) = - N₁ · \\frac{d\\Phi}{dt} = N₁ · (2\\pi f) · \\Phi_m · \\sin\\left(\\omega t - \\frac{\\pi}{2}\\right)
शिखर मान: E_{1m} = 2π f N₁ Φ_m
RMS मान:
    E₁ = \\frac{E_{1m}}{\\sqrt{2}} = \\sqrt{2}\\pi · f · N₁ · \\Phi_m = 4.44 · f · N₁ · \\Phi_m  [वोल्ट RMS]
इसी प्रकार द्वितीयक हेतु:
    E₂ = 4.44 · f · N₂ · \\Phi_m  [वोल्ट RMS]

3. 4.44 नियतांक की उत्पत्ति:
- औसत ईएमएफ = 4 · f · N · Φ_m
- ज्यावक्रीय तरंग हेतु फॉर्म फैक्टर = 1.11
- RMS ईएमएफ = 1.11 × (4 · f · N · Φ_m) = 4.44 · f · N · Φ_m

4. प्रति फेरा ईएमएफ की समानता:
    \\frac{E₁}{N₁} = \\frac{E₂}{N₂} = 4.44 · f · \\Phi_m  [वोल्ट प्रति फेरा]

5. रूपांतरण अनुपात (Transformation Ratio K):
    K = \\frac{E₂}{E₁} = \\frac{V₂}{V₁} = \\frac{N₂}{N₁} = \\frac{I₁}{I₂}
- स्टेप-अप: N₂ > N₁ (K > 1, वोल्टेज बढ़ता है, धारा घटती है)
- स्टेप-डाउन: N₂ < N₁ (K < 1, वोल्टेज घटता है, धारा बढ़ती है)

6. आदर्श ट्रांसफॉर्मर एवं ऊर्जा संरक्षण:
- 100% दक्षता: V₁ · I₁ = V₂ · I₂
- परावर्तित प्रतिबाधा: Z_in = (N₁ / N₂)² · Z_L`,
    bn: `১. গঠন ও কার্যপ্রণালী:
একটি সিঙ্গেল-ফেজ ট্রান্সফরমারে প্রাইমারি ওয়াইন্ডিং (N₁ পাক), সেকেন্ডারি ওয়াইন্ডিং (N₂ পাক) এবং লেমিনেটেড সিলিকন স্টিল কোর থাকে।

২. সার্বজনীন ট্রান্সফরমার ইএমএফ সমীকরণ প্রতিপাদন:
ধরি কোরে সাইনোসয়ডাল ফ্লাক্স: Φ(t) = Φ_m sin(ωt)
ফ্যারাডের সূত্রানুসারে:
    e₁(t) = - N₁ · \\frac{d\\Phi}{dt} = N₁ · (২\\pi f) · \\Phi_m · \\sin\\left(\\omega t - \\frac{\\pi}{২}\\right)
শীর্ষ মান: E_{1m} = ২π f N₁ Φ_m
RMS মান:
    E₁ = \\frac{E_{1m}}{\\sqrt{২}} = ৪.৪৪ · f · N₁ · \\Phi_m  [ভোল্ট RMS]
অনুরূপভাবে সেকেন্ডারির জন্য:
    E₂ = ৪.৪৪ · f · N₂ · \\Phi_m  [ভোল্ট RMS]

৩. ৪.৪৪ ধ্রুবকের ভৌত ব্যাখ্যা:
- গড় ইএমএফ = ৪ · f · N · Φ_m
- সাইন তরঙ্গের ফর্ম ফ্যাক্টর = ১.১১
- RMS ইএমএফ = ১.১১ × (৪ · f · N · Φ_m) = ৪.৪৪ · f · N · Φ_m

৪. প্রতি পাকে সমান ইএমএফ:
    \\frac{E₁}{N₁} = \\frac{E₂}{N₂} = ৪.৪৪ · f · \\Phi_m  [ভোল্ট প্রতি পাক]

৫. রূপান্তর অনুপাত (K):
    K = \\frac{E₂}{E₁} = \\frac{V₂}{V₁} = \\frac{N₂}{N₁} = \\frac{I₁}{I₂}
- স্টেপ-আপ: N₂ > N₁ (ভোল্টেজ বাড়ে, কারেন্ট কমে)
- স্টেপ-ডাউন: N₂ < N₁ (ভোল্টেজ কমে, কারেন্ট বাড়ে)

৬. শক্তি সংরক্ষণ ও প্রতিবন্ধকতা রূপান্তর:
- ১০০% দক্ষতা: V₁ · I₁ = V₂ · I₂
- প্রতিফলিত প্রতিবন্ধকতা: Z_in = (N₁ / N₂)² · Z_L`
  },
  formulas: [
    {
      id: 'f-ch10-transformer-emf',
      symbol: 'E',
      expression: 'E₁ = 4.44 · f · N₁ · Φ_m,   E₂ = 4.44 · f · N₂ · Φ_m',
      title: {
        en: 'Universal Transformer EMF Equation',
        hi: 'सार्वत्रिक ट्रांसफॉर्मर ईएमएफ समीकरण',
        bn: 'সার্বজনীন ট্রান্সফরমার ইএমএফ সমীকরণ'
      },
      description: {
        en: 'RMS induced voltage where f is frequency in Hz, N is turns, and Φ_m is peak core flux in Webers.',
        hi: 'RMS प्रेरित वोल्टेज जहां f आवृत्ति (Hz), N फेरे एवं Φ_m अधिकतम कोर फ्लक्स (वेबर) है।',
        bn: 'RMS আবিষ্ট ভোল্টেজ যেখানে f কম্পাঙ্ক (Hz), N পাকসংখ্যা এবং Φ_m সর্বোচ্চ কোর ফ্লাক্স (ওয়েবার)।'
      },
      variables: [
        { symbol: 'E', name: { en: 'RMS Induced EMF (V)', hi: 'RMS प्रेरित ईएमएफ (V)', bn: 'RMS আবিষ্ট ইএমএফ (V)' } },
        { symbol: 'f', name: { en: 'AC Frequency (Hz)', hi: 'एसी आवृत्ति (Hz)', bn: 'এসি কম্পাঙ্ক (Hz)' } },
        { symbol: 'N', name: { en: 'Number of turns in winding', hi: 'वाइंडिंग के फेरे', bn: 'ওয়াইন্ডিংয়ের পাকসংখ্যা' } },
        { symbol: 'Φ_m', name: { en: 'Peak magnetic flux (Wb)', hi: 'अधिकतम चुंबकीय फ्लक्स (Wb)', bn: 'সর্বোচ্চ চৌম্বক ফ্লাক্স (Wb)' } }
      ]
    },
    {
      id: 'f-ch10-flux-density-core',
      symbol: 'Φ_m',
      expression: 'Φ_m = B_m · A_i',
      title: {
        en: 'Peak Magnetic Flux from Core Area and Flux Density',
        hi: 'कोर क्षेत्रफल एवं फ्लक्स घनत्व से अधिकतम फ्लक्स',
        bn: 'কোর ক্ষেত্রফল ও ফ্লাক্স ঘনত্ব থেকে সর্বোচ্চ ফ্লাক্স'
      },
      description: {
        en: 'Maximum magnetic flux equals peak flux density B_m (Tesla) multiplied by net iron cross-sectional area A_i (m²).',
        hi: 'अधिकतम चुंबकीय फ्लक्स = शीर्ष फ्लक्स घनत्व B_m × शुद्ध लौह अनुप्रस्थ काट क्षेत्रफल A_i।',
        bn: 'সর্বোচ্চ চৌম্বক ফ্লাক্স = শীর্ষ ফ্লাক্স ঘনত্ব B_m × নেট আয়রন প্রস্থচ্ছেদের ক্ষেত্রফল A_i।'
      },
      variables: [
        { symbol: 'B_m', name: { en: 'Peak core flux density (Tesla)', hi: 'अधिकतम फ्लक्स घनत्व (Tesla)', bn: 'সর্বোচ্চ ফ্লাক্স ঘনত্ব (টেসলা)' } },
        { symbol: 'A_i', name: { en: 'Net iron core area (m²)', hi: 'शुद्ध लौह कोर क्षेत्रफल (m²)', bn: 'নেট আয়রন কোর ক্ষেত্রফল (m²)' } }
      ]
    },
    {
      id: 'f-ch10-transformation-ratio',
      symbol: 'K',
      expression: 'K = V₂ / V₁ = E₂ / E₁ = N₂ / N₁ = I₁ / I₂',
      title: {
        en: 'Ideal Voltage, Current & Turns Ratio Relations',
        hi: 'आदर्श वोल्टेज, धारा एवं फेरा अनुपात संबंध',
        bn: 'আদর্শ ভোল্টেজ, কারেন্ট ও পাক অনুপাত সম্পর্ক'
      },
      description: {
        en: 'Voltage scales directly with turn count while current scales inversely to conserve apparent power.',
        hi: 'वोल्टेज फेरों के समानुपाती एवं धारा फेरों के व्युत्क्रमानुपाती होती है ताकि शक्ति संरक्षित रहे।',
        bn: 'ভোল্টেজ পাকসংখ্যার সমানুপাতিক এবং কারেন্ট ব্যস্তানুপাতিকভাবে পরিবর্তিত হয়ে শক্তি অক্ষুণ্ণ রাখে।'
      },
      variables: [
        { symbol: 'K', name: { en: 'Transformation ratio', hi: 'रूपांतरण अनुपात', bn: 'রূপান্তর অনুপাত' } }
      ]
    },
    {
      id: 'f-ch10-reflected-impedance',
      symbol: 'Z_in',
      expression: 'Z_in = (N₁ / N₂)² · Z_L = Z_L / K²',
      title: {
        en: 'Reflected Load Impedance',
        hi: 'परावर्तित लोड प्रतिबाधा',
        bn: 'প্রতিফলিত লোড প্রতিবন্ধকতা'
      },
      description: {
        en: 'Impedance connected across the secondary reflected into the primary circuit scaled by the square of turns ratio.',
        hi: 'द्वितीयक से जुड़ी लोड प्रतिबाधा जो प्राथमिक में फेरा अनुपात के वर्ग के रूप में परावर्तित होती है।',
        bn: 'সেকেন্ডারিতে যুক্ত লোড প্রতিবন্ধকতা যা প্রাইমারি সার্কিটে পাক অনুপাতের বর্গ হিসেবে প্রতিফলিত হয়।'
      },
      variables: [
        { symbol: 'Z_L', name: { en: 'Secondary load impedance (Ω)', hi: 'द्वितीयक लोड प्रतिबाधा (Ω)', bn: 'সেকেন্ডারি লোড প্রতিবন্ধকতা (Ω)' } }
      ]
    }
  ],
  solvedExamples: [
    {
      problem: {
        en: 'A 2300 V / 230 V, 50 Hz single-phase step-down transformer has a core cross-sectional area of 0.04 m² and a maximum core flux density B_m = 1.25 Tesla. Determine: (a) The peak magnetic flux Φ_m in the core, (b) The number of primary turns N₁, and (c) The number of secondary turns N₂.',
        hi: 'एक 2300 V / 230 V, 50 Hz एकल-फेज स्टेप-डाउन ट्रांसफॉर्मर का कोर क्षेत्रफल 0.04 m² एवं अधिकतम फ्लक्स घनत्व B_m = 1.25 T है। ज्ञात कीजिए: (a) कोर में अधिकतम फ्लक्स Φ_m, (b) प्राथमिक फेरों की संख्या N₁, तथा (c) द्वितीयक फेरों की संख्या N₂।',
        bn: 'একটি ২৩০০ V / ২৩০ V, ৫০ Hz সিঙ্গেল-ফেজ স্টেপ-ডাউন ট্রান্সফরমারের কোর ক্ষেত্রফল ০.০৪ m² এবং সর্বোচ্চ ফ্লাক্স ঘনত্ব B_m = ১.২৫ T। নির্ণয় কর: (a) কোরের সর্বোচ্চ ফ্লাক্স Φ_m, (b) প্রাইমারি পাকসংখ্যা N₁, এবং (c) সেকেন্ডারি পাকসংখ্যা N₂।'
      },
      givenValues: {
        en: 'Primary RMS Voltage V₁ = 2300 V, Secondary RMS Voltage V₂ = 230 V, Frequency f = 50 Hz, Area A = 0.04 m², B_m = 1.25 T',
        hi: 'V₁ = 2300 V, V₂ = 230 V, f = 50 Hz, A = 0.04 m², B_m = 1.25 T',
        bn: 'V₁ = ২৩০০ V, V₂ = ২৩০ V, f = ৫০ Hz, A = ০.০৪ m², B_m = ১.২৫ T'
      },
      solution: {
        en: `1. Calculate peak magnetic flux:
   Φ_m = B_m · A = 1.25 T · 0.04 m² = 0.05 Wb (50 mWb)
2. Calculate primary turns using E₁ = 4.44 · f · N₁ · Φ_m:
   N₁ = E₁ / (4.44 · f · Φ_m) = 2300 / (4.44 · 50 · 0.05) = 2300 / 11.10 = 207.2 ≈ 207 turns
3. Calculate secondary turns using E₂ = 4.44 · f · N₂ · Φ_m:
   N₂ = E₂ / (4.44 · f · Φ_m) = 230 / (4.44 · 50 · 0.05) = 230 / 11.10 = 20.72 ≈ 21 turns
   (Alternatively N₂ = N₁ · (V₂/V₁) = 207 · (230/2300) = 20.7 ≈ 21 turns)`,
        hi: `1. अधिकतम फ्लक्स की गणना:
   Φ_m = B_m · A = 1.25 × 0.04 = 0.05 वेबर (50 mWb)
2. प्राथमिक फेरों N₁ की गणना:
   N₁ = 2300 / (4.44 × 50 × 0.05) = 2300 / 11.10 ≈ 207 फेरे
3. द्वितीयक फेरों N₂ की गणना:
   N₂ = 230 / (4.44 × 50 × 0.05) = 230 / 11.10 ≈ 21 फेरे`,
        bn: `১. সর্বোচ্চ চৌম্বক ফ্লাক্স নির্ণয়:
   Φ_m = B_m · A = ১.২৫ × ০.০৪ = ০.০৫ ওয়েবার (৫০ mWb)
২. প্রাইমারি পাকসংখ্যা N₁ নির্ণয়:
   N₁ = ২৩০০ / (৪.৪৪ × ৫০ × ০.০৫) = ২৩০০ / ১১.১০ ≈ ২০৭ পাক
৩. সেকেন্ডারি পাকসংখ্যা N₂ নির্ণয়:
   N₂ = ২৩০ / (৪.৪৪ × ৫০ × ০.০৫) = ২৩০ / ১১.১০ ≈ ২১ পাক`
      },
      finalAnswer: {
        en: 'Φ_m = 0.05 Wb (50 mWb); Primary N₁ = 207 turns; Secondary N₂ = 21 turns',
        hi: 'Φ_m = 0.05 Wb; प्राथमिक N₁ = 207 फेरे; द्वितीयक N₂ = 21 फेरे',
        bn: 'Φ_m = ০.০৫ Wb; প্রাইমারি N₁ = ২০৭ পাক; সেকেন্ডারি N₂ = ২১ পাক'
      }
    },
    {
      problem: {
        en: 'An ideal 10 kVA, 2400 V / 240 V, 50 Hz transformer supplies a resistive load of 6 Ω on the secondary. Calculate: (a) Full-load secondary current I₂, (b) Primary current I₁, and (c) Apparent power S.',
        hi: 'एक आदर्श 10 kVA, 2400 V / 240 V, 50 Hz ट्रांसफॉर्मर द्वितीयक पर 6 Ω का लोड चलाता है। ज्ञात कीजिए: (a) द्वितीयक धारा I₂, (b) प्राथमिक धारा I₁, तथा (c) स्पष्ट शक्ति S।',
        bn: 'একটি আদর্শ ১০ kVA, ২৪০০ V / ২৪০ V, ৫০ Hz ট্রান্সফরমার সেকেন্ডারিতে ৬ Ω লোড চালায়। নির্ণয় কর: (a) সেকেন্ডারি কারেন্ট I₂, (b) প্রাইমারি কারেন্ট I₁, এবং (c) আপাত শক্তি S।'
      },
      givenValues: {
        en: 'V₁ = 2400 V, V₂ = 240 V, R_L = 6 Ω',
        hi: 'V₁ = 2400 V, V₂ = 240 V, R_L = 6 Ω',
        bn: 'V₁ = ২৪০০ V, V₂ = ২৪০ V, R_L = ৬ Ω'
      },
      solution: {
        en: `1. Calculate secondary current:
   I₂ = V₂ / R_L = 240 V / 6 Ω = 40 A
2. Calculate transformation ratio K = V₂/V₁ = 240 / 2400 = 0.10
3. Calculate primary current:
   I₁ = K · I₂ = 0.10 · 40 A = 4.0 A
4. Calculate apparent power:
   S = V₁ · I₁ = 2400 V · 4 A = 9600 VA = 9.6 kVA (Check: V₂ · I₂ = 240 · 40 = 9600 VA)`,
        hi: `1. द्वितीयक धारा: I₂ = 240 V / 6 Ω = 40 A
2. रूपांतरण अनुपात K = 240 / 2400 = 0.10
3. प्राथमिक धारा: I₁ = 0.10 × 40 A = 4.0 A
4. स्पष्ट शक्ति: S = 2400 × 4 = 9600 VA = 9.6 kVA`,
        bn: `১. সেকেন্ডারি কারেন্ট: I₂ = ২৪০ V / ৬ Ω = ৪০ A
২. রূপান্তর অনুপাত K = ২৪০ / ২৪০০ = ০.১০
৩. প্রাইমারি কারেন্ট: I₁ = ০.১০ × ৪০ A = ৪.০ A
৪. আপাত শক্তি: S = ২৪০০ × ৪ = ৯৬০০ VA = ৯.৬ kVA`
      },
      finalAnswer: {
        en: 'I₂ = 40 A, I₁ = 4.0 A, Apparent Power S = 9.6 kVA',
        hi: 'I₂ = 40 A, I₁ = 4.0 A, स्पष्ट शक्ति S = 9.6 kVA',
        bn: 'I₂ = ৪০ A, I₁ = ৪.০ A, আপাত শক্তি S = ৯.৬ kVA'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Grid Transmission Substation Step-Up Transformers: Boosts generator terminal voltage from 11 kV to 400 kV to minimize I²R transmission losses.',
      'Galvanic Isolation Transformers: Provides 1:1 voltage transfer ratio to isolate patient monitors and operating theater equipment from ground shocks.'
    ],
    hi: [
      'ग्रिड सबस्टेशन स्टेप-अप ट्रांसफॉर्मर: जनरेटर वोल्टेज को 11 kV से 400 kV तक बढ़ाकर लंबी दूरी के संचरण तारों में तापीय हानि को न्यूनतम करना।',
      'गैल्वेनिक आइसोलेशन ट्रांसफॉर्मर: 1:1 अनुपात पर चिकित्सा उपकरणों को ग्राउंड फॉल्ट झटकों से सुरक्षित रखने हेतु भौतिक पृथक्करण।'
    ],
    bn: [
      'গ্রিড সাবস্টেশন স্টেপ-আপ ট্রান্সফরমার: উৎপাদন কেন্দ্রের ১১ kV ভোল্টেজকে ৪০০ kV তে বৃদ্ধি করে সঞ্চালন লাইনে অপচয় সর্বনিম্ন রাখা।',
      'গ্যালভানিক আইসোলেশন ট্রান্সফরমার: ১:১ অনুপাতে সংবেদনশীল চিকিৎসা যন্ত্রপাতিকে গ্রাউন্ড শক ঝুঁকি থেকে নিরাপদ রাখা।'
    ]
  },
  importantPoints: {
    en: [
      'A transformer functions on AC only! If connected to DC, dΦ/dt = 0, back-EMF is zero, and the winding burns out due to low resistance (I = V/R).',
      'Frequency remains strictly unchanged across a transformer (f₁ = f₂). A transformer changes voltage and current, NEVER frequency.',
      'EMF per turn is identical in both windings (E₁/N₁ = E₂/N₂ = 4.44 · f · Φ_m).'
    ],
    hi: [
      'ट्रांसफॉर्मर केवल AC पर कार्य करता है! DC जोड़ने पर dΦ/dt = 0 होने से बैक-ईएमएफ शून्य हो जाता है और वाइंडिंग जल जाती है।',
      'ट्रांसफॉर्मर में आवृत्ति सदैव अपरिवर्तित रहती है (f₁ = f₂)। ट्रांसफॉर्मर वोल्टेज व करंट बदलता है, आवृत्ति कभी नहीं।',
      'दोनों वाइंडिंग में प्रति फेरा ईएमएफ बिल्कुल समान होता है (E₁/N₁ = E₂/N₂ = 4.44 · f · Φ_m)।'
    ],
    bn: [
      'ট্রান্সফরমার কেবল AC তে কাজ করে! ডিসি কারেন্টে dΦ/dt = ০ হওয়ায় ব্যাক-ইএমএফ থাকে না এবং ওয়াইন্ডিং পুড়ে যায়।',
      'ট্রান্সফরমারে কম্পাঙ্ক কঠোরভাবে অপরিবর্তিত থাকে (f₁ = f₂)। ট্রান্সফরমার ভোল্টেজ ও কারেন্ট পরিবর্তন করে, কম্পাঙ্ক নয়।',
      'উভয় ওয়াইন্ডিংয়ে প্রতি পাকে আবিষ্ট ইএমএফ পুরোপুরি সমান থাকে (E₁/N₁ = E₂/N₂ = ৪.৪৪ · f · Φ_m)।'
    ]
  },
  commonMistakes: {
    en: [
      'Using peak voltage instead of RMS in the formula: The 4.44 factor specifically converts peak core flux Φ_m directly into RMS induced voltage.'
    ],
    hi: [
      'सूत्र में RMS के स्थान पर शिखर वोल्टेज का प्रयोग करना: 4.44 गुणक अधिकतम फ्लक्स Φ_m को सीधे RMS वोल्टेज में बदलता है।'
    ],
    bn: [
      'সূত্রে RMS-এর বদলে শীর্ষ ভোল্টেজ ব্যবহার করা: ৪.৪৪ ফ্যাক্টরটি মূলত সর্বোচ্চ ফ্লাক্স Φ_m কে সরাসরি RMS ভোল্টেজে রূপান্তর করে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch10-t1',
      question: {
        en: 'The constant 4.44 in the Transformer EMF equation E = 4.44 · f · N · Φ_m arises from:',
        hi: 'ट्रांसफॉर्मर ईएमएफ समीकरण E = 4.44 · f · N · Φ_m में 4.44 नियतांक की उत्पत्ति होती है:',
        bn: 'ট্রান্সফরমার ইএমএফ সমীকরণ E = ৪.৪৪ · f · N · Φ_m এ ৪.৪৪ ধ্রুবকটি আসে:'
      },
      options: [
        { id: 'opt-1', text: { en: '4 × Form Factor (4 × 1.11)', hi: '4 × फॉर्म फैक्टर (4 × 1.11)', bn: '৪ × ফর্ম ফ্যাক্টর (৪ × ১.১১)' } },
        { id: 'opt-2', text: { en: '2 × π', hi: '2 × π', bn: '২ × π' } },
        { id: 'opt-3', text: { en: '√2 × 2', hi: '√2 × 2', bn: '√২ × ২' } },
        { id: 'opt-4', text: { en: '4 × Crest Factor (4 × 1.414)', hi: '4 × क्रेस्ट फैक्टर (4 × 1.414)', bn: '৪ × ক্রেস্ট ফ্যাক্টর (৪ × ১.৪১৪)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The factor 4.44 equals 4 multiplied by the sinusoidal Form Factor (1.11), converting average EMF to RMS EMF.',
        hi: '4.44 का मान 4 को ज्यावक्रीय फॉर्म फैक्टर (1.11) से गुणा करने पर प्राप्त होता है, जो औसत ईएमएफ को RMS में बदलता है।',
        bn: '৪.৪৪ মূলত ৪ কে সাইন তরঙ্গের ফর্ম ফ্যাক্টর (১.১১) দিয়ে গুণ করে গড় ইএমএফকে RMS এ রূপান্তর করার ফলে আসে।'
      }
    },
    {
      id: 'mcq-ch10-t2',
      question: {
        en: 'In an ideal transformer, the ratio of primary to secondary current (I₁/I₂) is equal to:',
        hi: 'एक आदर्श ट्रांसफॉर्मर में प्राथमिक एवं द्वितीयक धारा का अनुपात (I₁/I₂) किसके बराबर होता है?',
        bn: 'একটি আদর্শ ট্রান্সফরমারে প্রাইমারি ও সেকেন্ডারি কারেন্টের অনুপাত (I₁/I₂) কার সমান?'
      },
      options: [
        { id: 'opt-1', text: { en: 'N₁ / N₂', hi: 'N₁ / N₂', bn: 'N₁ / N₂' } },
        { id: 'opt-2', text: { en: 'N₂ / N₁', hi: 'N₂ / N₁', bn: 'N₂ / N₁' } },
        { id: 'opt-3', text: { en: '(N₂ / N₁)² ', hi: '(N₂ / N₁)² ', bn: '(N₂ / N₁)² ' } },
        { id: 'opt-4', text: { en: '√(N₁ / N₂)', hi: '√(N₁ / N₂)', bn: '√(N₁ / N₂)' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'From ampere-turn balance N₁I₁ = N₂I₂, the current ratio I₁/I₂ = N₂/N₁.',
        hi: 'एम्पीयर-टर्न संतुलन N₁I₁ = N₂I₂ से, धारा अनुपात I₁/I₂ = N₂/N₁ होता है।',
        bn: 'অ্যাম্পিয়ার-টার্ন সমতা N₁I₁ = N₂I₂ থেকে, কারেন্ট অনুপাত I₁/I₂ = N₂/N₁ হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch10-t1',
      question: {
        en: 'A 50 kVA, 4400 V / 220 V, 50 Hz single-phase transformer has 60 secondary turns. Calculate: (a) Primary turns N₁, (b) Primary and secondary full-load currents, and (c) Maximum magnetic core flux Φ_m.',
        hi: 'एक 50 kVA, 4400 V / 220 V, 50 Hz ट्रांसफॉर्मर में 60 द्वितीयक फेरे हैं। ज्ञात कीजिए: (a) प्राथमिक फेरे N₁, (b) पूर्ण-लोड धाराएं, तथा (c) अधिकतम कोर फ्लक्स Φ_m।',
        bn: 'একটি ৫০ kVA, ৪৪০০ V / ২২০ V, ৫০ Hz ট্রান্সফরমারে ৬০টি সেকেন্ডারি পাক রয়েছে। নির্ণয় কর: (a) প্রাইমারি পাকসংখ্যা N₁, (b) ফুল-লোড কারেন্টসমূহ, এবং (c) সর্বোচ্চ কোর ফ্লাক্স Φ_m।'
      }
    }
  ]
};
