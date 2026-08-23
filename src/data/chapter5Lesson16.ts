import { Lesson } from '../types';

export const LESSON_AC_POWER: Lesson = {
  id: 'lsn-ch5-ac-power',
  topicId: 'ch5-ac-power',
  chapterId: 'ch-alternating-current',
  order: 16,
  title: {
    en: 'AC Power: Active, Reactive & Apparent Power',
    hi: 'एसी पावर: सक्रिय, प्रतिक्रियाशील एवं प्रत्यक्ष शक्ति',
    bn: 'এসি পাওয়ার: অ্যাক্টিভ, রিঅ্যাক্টিভ ও অ্যাপারেন্ট পাওয়ার'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'In an AC circuit, the total power delivered by the source is called Apparent Power (S in VA). Part of it is consumed to do actual useful work like lighting or heating—this is Active/Real Power (P in Watts). The remaining oscillating portion sustains magnetic or electric fields in inductors and capacitors—this is Reactive Power (Q in VAR). The Power Triangle geometrically links these three through the Power Factor (cos φ).',
    hi: 'एसी परिपथ में स्रोत द्वारा दी जाने वाली कुल शक्ति को आभासी शक्ति (S, मात्रक VA) कहते हैं। इसका वह भाग जो वास्तविक उपयोगी कार्य (जैसे रोशनी या ऊष्मा) में खर्च होता है, सक्रिय/वास्तविक शक्ति (P, मात्रक Watts) कहलाता है। शेष दोलन करने वाला भाग जो इंडक्टर या कैपेसिटर में चुंबकीय/विद्युत क्षेत्र बनाए रखता है, प्रतिक्रियाशील शक्ति (Q, मात्रक VAR) कहलाता है। पावर त्रिभुज इन तीनों को पावर फैक्टर (cos φ) के माध्यम से जोड़ता है।',
    bn: 'একটি এসি সার্কিটে উৎস থেকে সরবরাহকৃত মোট শক্তিকে অ্যাপারেন্ট পাওয়ার (S, একক VA) বলে। এর যে অংশটি দরকারী কাজ যেমন আলো বা তাপে রূপান্তরিত হয় তাকে অ্যাক্টিভ বা রিয়েল পাওয়ার (P, একক Watts) বলে। অবশিষ্ট অংশ যা ইন্ডাক্টর বা ক্যাপাসিটরের চৌম্বক/বৈদ্যুতিক ক্ষেত্র তৈরিতে ব্যবহৃত হয় তাকে রিঅ্যাক্টিভ পাওয়ার (Q, একক VAR) বলে। পাওয়ার ত্রিভুজ এদেরকে পাওয়ার ফ্যাক্টরের (cos φ) মাধ্যমে সম্পর্কযুক্ত করে।'
  },
  detailedExplanation: {
    en: `1. Instantaneous Power in AC Circuits:
When a sinusoidal voltage v(t) = Vm·sin(ωt) is applied to an impedance Z∠φ, the resulting current is i(t) = Im·sin(ωt - φ).
The instantaneous power p(t) = v(t) · i(t) = Vm·Im·sin(ωt)·sin(ωt - φ)
Using the trigonometric identity 2·sin(A)·sin(B) = cos(A - B) - cos(A + B):
p(t) = (Vm·Im / 2) · [cos φ - cos(2ωt - φ)]
p(t) = V·I·cos φ · [1 - cos(2ωt)] + V·I·sin φ · sin(2ωt)
where V = Vm / √2 and I = Im / √2 are RMS values.

2. Decomposition of AC Power:
- Constant / Average Component (Active Power):
  P = V · I · cos φ  (Watts, W or kW)
  This represents the irreversible net unidirectional rate of energy conversion into mechanical work, heat, or light.
- Double-Frequency Fluctuating Component (Reactive Power):
  Q = V · I · sin φ  (Volt-Amperes Reactive, VAR or kVAR)
  This represents the peak rate of energy surging back and forth between the source and reactive storage elements (magnetic field in inductors, electric field in capacitors) with net zero average work per cycle.

3. Apparent Power (S):
The total product of RMS voltage and RMS current without regard to phase angle:
S = V · I  (Volt-Amperes, VA or kVA)
It dictates the rating of electrical apparatus (generators, transformers, cables, switchgear) because equipment is thermal-limited by current (I²R heating) and insulation-limited by voltage (dielectric breakdown), regardless of power factor.

4. The Power Triangle:
For an inductive load (lagging current, φ > 0):
- Base (Horizontal, Real Axis): Active Power P = S·cos φ (W)
- Perpendicular (Vertical Upwards, +j): Inductive Reactive Power QL = S·sin φ (VAR)
- Hypotenuse: Apparent Power S = √(P² + Q²) (VA)
For a capacitive load (leading current, φ < 0):
- Perpendicular is directed downwards (-j): Capacitive Reactive Power QC = -S·sin φ (VAR)

5. Complex Power (S):
In phasor notation using voltage phasor V and conjugate of current phasor I*:
S = V · I* = P + jQ
Magnitude: |S| = √(P² + Q²)
Phase Angle: φ = tan⁻¹(Q / P)
Power Factor: PF = cos φ = P / |S|`,
    hi: `1. एसी परिपथ में तात्कालिक शक्ति (Instantaneous Power):
जब साइनसॉइडल वोल्टेज v(t) = Vm·sin(ωt) किसी प्रतिबाधा पर लगाया जाता है और धारा i(t) = Im·sin(ωt - φ) बहती है:
p(t) = v(t) · i(t) = V·I·cos φ · [1 - cos(2ωt)] + V·I·sin φ · sin(2ωt)
जहाँ V और I क्रमशः RMS वोल्टेज और RMS धारा हैं।

2. शक्ति का विभाजन:
- सक्रिय/वास्तविक शक्ति (Active Power, P):
  P = V · I · cos φ (वाट, W या kW)
  यह वह शक्ति है जो वास्तव में उपयोगी यांत्रिक कार्य, प्रकाश या ऊष्मा में परिवर्तित होती है।
- प्रतिक्रियाशील शक्ति (Reactive Power, Q):
  Q = V · I · sin φ (VAR या kVAR)
  यह वह शक्ति है जो स्रोत और इंडक्टर/कैपेसिटर के बीच प्रति चक्र दोलन करती है, इसका औसत मान शून्य होता है।

3. आभासी शक्ति (Apparent Power, S):
RMS वोल्टेज और RMS धारा का सीधा गुणनफल:
S = V · I (VA या kVA)
ट्रांसफार्मर, जनरेटर और केबलों की रेटिंग हमेशा kVA/MVA में दी जाती है क्योंकि ताप हानि धारा और वोल्टेज पर निर्भर करती है।

4. पावर त्रिभुज (Power Triangle):
- आधार (Base): सक्रिय शक्ति P (W)
- लंब (Perpendicular): प्रतिक्रियाशील शक्ति Q (VAR)
- कर्ण (Hypotenuse): आभासी शक्ति S (VA)
संबंध: S² = P² + Q²

5. सम्मिश्र शक्ति (Complex Power, S):
फेजर रूप में: S = V · I* = P + jQ
जहाँ P वास्तविक भाग है और Q काल्पनिक भाग है।`,
    bn: `১. এসি সার্কিটে তাৎক্ষণিক ক্ষমতা (Instantaneous Power):
ভোল্টেজ v(t) = Vm·sin(ωt) এবং কারেন্ট i(t) = Im·sin(ωt - φ) হলে তাৎক্ষণিক ক্ষমতা:
p(t) = v(t) · i(t) = V·I·cos φ · [1 - cos(2ωt)] + V·I·sin φ · sin(2ωt)
যেখানে V ও I হলো RMS মান।

২. এসি পাওয়ারের উপাদানসমূহ:
- অ্যাক্টিভ পাওয়ার (Active Power, P):
  P = V · I · cos φ (ওয়াট, W বা kW)
  এটি দরকারী কাজে (তাপ, আলো, যান্ত্রিক ঘূর্ণন) রূপান্তরিত শক্তি।
- রিঅ্যাক্টিভ পাওয়ার (Reactive Power, Q):
  Q = V · I · sin φ (VAR বা kVAR)
  এটি ইন্ডাক্টর বা ক্যাপাসিটরের চৌম্বক/স্থির-বৈদ্যুতিক ক্ষেত্র বজায় রাখতে উৎস ও লোডের মাঝে আদান-প্রদান হয়।
- অ্যাপারেন্ট পাওয়ার (Apparent Power, S):
  S = V · I (VA বা kVA)
  এটি ট্রান্সফরমার ও জেনারেটরের রেটিং নির্ধারণ করে।

৩. পাওয়ার ত্রিভুজ (Power Triangle):
- ভূমি: অ্যাক্টিভ পাওয়ার P (W)
- লম্ব: রিঅ্যাক্টিভ পাওয়ার Q (VAR)
- অতিভুজ: অ্যাপারেন্ট পাওয়ার S (VA)
সমীকরণ: S² = P² + Q² এবং cos φ = P / S

৪. কমপ্লেক্স পাওয়ার (Complex Power, S):
S = V · I* = P + jQ (VA)`
  },
  sections: [
    {
      id: 'sec-instantaneous-power',
      title: {
        en: 'Instantaneous Power & Physical Derivation',
        hi: 'तात्कालिक शक्ति एवं भौतिक व्युत्पत्ति',
        bn: 'তাৎক্ষণিক ক্ষমতা ও গাণিতিক প্রতিপাদন'
      },
      content: {
        en: 'Instantaneous power p(t) oscillates at twice the line frequency (2f = 100 Hz in a 50 Hz system). The term V·I·cos φ represents the constant unidirectional flow of usable energy, while the second harmonic term V·I·sin φ · sin(2ωt) surges energy alternately in and out of the magnetic/electrostatic storage fields.',
        hi: 'तात्कालिक शक्ति p(t) लाइन आवृत्ति के दोगुने (50 Hz प्रणाली में 100 Hz) पर दोलन करती है। V·I·cos φ पद निरंतर उपयोगी ऊर्जा प्रवाह को दर्शाता है, जबकि दूसरा पद प्रति सेकंड 100 बार चुंबकीय/विद्युत क्षेत्र में ऊर्जा का आदान-प्रदान करता है।',
        bn: 'তাৎক্ষণিক ক্ষমতা p(t) মেইন ফ্রিকোয়েন্সির দ্বিগুণ হারে (৫০ Hz সিস্টেমে ১০০ Hz) ওঠানামা করে। V·I·cos φ অংশটি সার্বক্ষণিক দরকারী শক্তি নির্দেশ করে এবং V·I·sin φ·sin(2ωt) অংশটি রিঅ্যাক্টিভ ক্ষেত্রের শক্তি বিনিময় বোঝায়।'
      },
      schematicId: 'circuit-ac-power-triangle',
      keyEquations: [
        'p(t) = V \\cdot I \\cdot \\cos\\phi [1 - \\cos(2\\omega t)] + V \\cdot I \\cdot \\sin\\phi \\cdot \\sin(2\\omega t)',
        'P_{avg} = V \\cdot I \\cdot \\cos\\phi',
        'p_{fluct}(t) = -V \\cdot I \\cdot \\cos(\\phi) \\cdot \\cos(2\\omega t) + V \\cdot I \\cdot \\sin(\\phi) \\cdot \\sin(2\\omega t)'
      ]
    },
    {
      id: 'sec-power-triangle-geometry',
      title: {
        en: 'The Power Triangle & Vector Relationships',
        hi: 'पावर त्रिभुज एवं सदिश संबंध',
        bn: 'পাওয়ার ত্রিভুজ ও ভেক্টর সম্পর্ক'
      },
      content: {
        en: 'Multiplying the sides of the Impedance Triangle (R, X, Z) by I² directly yields the Power Triangle: Base = I²R = P (W), Perpendicular = I²X = Q (VAR), Hypotenuse = I²Z = S (VA). In complex polar form: S = P + jQ = |S|∠φ = V·I*.',
        hi: 'प्रतिबाधा त्रिभुज (R, X, Z) की भुजाओं को I² से गुणा करने पर सीधे पावर त्रिभुज प्राप्त होता है: आधार = I²R = P (W), लंब = I²X = Q (VAR), कर्ण = I²Z = S (VA)। सम्मिश्र रूप: S = P + jQ = |S|∠φ।',
        bn: 'ইম্পিড্যান্স ত্রিভুজের (R, X, Z) বাহুগুলোকে I² দ্বারা গুণ করলে সরাসরি পাওয়ার ত্রিভুজ পাওয়া যায়: ভূমি = I²R = P (W), লম্ব = I²X = Q (VAR), অতিভুজ = I²Z = S (VA)। জটিল রূপ: S = P + jQ = |S|∠φ।'
      },
      schematicId: 'circuit-ac-power-triangle',
      keyEquations: [
        'S = \\sqrt{P^2 + Q^2}',
        'P = S \\cdot \\cos\\phi = V \\cdot I \\cdot \\cos\\phi',
        'Q = S \\cdot \\sin\\phi = V \\cdot I \\cdot \\sin\\phi',
        '\\tan\\phi = \\frac{Q}{P}',
        '\\mathbf{S} = \\mathbf{V} \\cdot \\mathbf{I}^* = P + jQ'
      ]
    }
  ],
  formulas: [
    {
      symbol: 'P',
      expression: 'P = V \\cdot I \\cdot \\cos\\phi = I^2 \\cdot R',
      description: {
        en: 'Active / Real Power in Watts (W) or Kilowatts (kW)',
        hi: 'सक्रिय / वास्तविक शक्ति (वाट या किलोवाट में)',
        bn: 'অ্যাক্টিভ / বাস্তব ক্ষমতা (ওয়াট বা কিলোওয়াটে)'
      },
      variables: [
        { symbol: 'V', name: { en: 'RMS Supply Voltage (V)', hi: 'RMS सप्लाई वोल्टेज (V)', bn: 'RMS সাপ্লাই ভোল্টেজ (V)' } },
        { symbol: 'I', name: { en: 'RMS Circuit Current (A)', hi: 'RMS परिपथ धारा (A)', bn: 'RMS সার্কিট কারেন্ট (A)' } },
        { symbol: 'cos φ', name: { en: 'Circuit Power Factor', hi: 'परिपथ पावर फैक्टर', bn: 'সার্কিট পাওয়ার ফ্যাক্টর' } }
      ]
    },
    {
      symbol: 'Q',
      expression: 'Q = V \\cdot I \\cdot \\sin\\phi = I^2 \\cdot X',
      description: {
        en: 'Reactive Power in Volt-Amperes Reactive (VAR) or kVAR',
        hi: 'प्रतिक्रियाशील शक्ति (VAR या kVAR में)',
        bn: 'রিঅ্যাক্টিভ ক্ষমতা (VAR বা kVAR-এ)'
      }
    },
    {
      symbol: 'S',
      expression: 'S = V \\cdot I = I^2 \\cdot Z = \\sqrt{P^2 + Q^2}',
      description: {
        en: 'Apparent Power in Volt-Amperes (VA) or Kilovolt-Amperes (kVA)',
        hi: 'आभासी शक्ति (VA या kVA में)',
        bn: 'অ্যাপারেন্ট ক্ষমতা (VA বা kVA-তে)'
      }
    },
    {
      symbol: 'PF',
      expression: 'PF = \\cos\\phi = \\frac{P}{S} = \\frac{R}{Z}',
      description: {
        en: 'Power Factor (dimensionless ratio, 0 to 1)',
        hi: 'पावर फैक्टर (अनुपात, 0 से 1)',
        bn: 'পাওয়ার ফ্যাক্টর (অনুপাত, ০ থেকে ১)'
      }
    },
    {
      symbol: 'S_complex',
      expression: '\\mathbf{S} = \\mathbf{V} \\cdot \\mathbf{I}^* = P + jQ',
      description: {
        en: 'Complex Power phasor equation (VA)',
        hi: 'सम्मिश्र शक्ति फेजर समीकरण (VA)',
        bn: 'কমপ্লেক্স পাওয়ার ফেজার সমীকরণ (VA)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ac-power-triangle',
      title: {
        en: 'The AC Power Triangle Geometry',
        hi: 'एसी पावर त्रिभुज ज्यामिति',
        bn: 'এসি পাওয়ার ত্রিভুজ জ্যামিতি'
      },
      caption: {
        en: 'Geometric relationship among Active Power (P in W), Reactive Power (Q in VAR), Apparent Power (S in VA), and Phase Angle φ.',
        hi: 'सक्रिय शक्ति (P), प्रतिक्रियाशील शक्ति (Q), आभासी शक्ति (S) और कला कोण φ के बीच ज्यामितीय संबंध।',
        bn: 'অ্যাক্টিভ পাওয়ার (P), রিঅ্যাক্টিভ পাওয়ার (Q), অ্যাপারেন্ট পাওয়ার (S) ও ফেজ কোণ φ-এর জ্যামিতিক সম্পর্ক।'
      },
      svgType: 'circuit-ac-power-triangle'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-16-1',
      problem: {
        en: 'A 230 V, 50 Hz AC supply is connected across an inductive load of impedance Z = (12 + j16) Ω. Calculate: (a) RMS Current I, (b) Power Factor cos φ, (c) Active Power P, (d) Reactive Power Q, (e) Apparent Power S, and (f) Complex Power S.',
        hi: '230 V, 50 Hz एसी सप्लाई Z = (12 + j16) Ω वाले इंडक्टिव भार से जुड़ी है। गणना करें: (a) धारा I, (b) पावर फैक्टर cos φ, (c) सक्रिय शक्ति P, (d) प्रतिक्रियाशील शक्ति Q, (e) आभासी शक्ति S, और (f) सम्मिश्र शक्ति S।',
        bn: 'একটি ২৩০ V, ৫০ Hz এসি উৎসের সাথে Z = (১২ + j১৬) Ω বিশিষ্ট লোড যুক্ত। নির্ণয় কর: (a) কারেন্ট I, (b) পাওয়ার ফ্যাক্টর cos φ, (c) অ্যাক্টিভ পাওয়ার P, (d) রিঅ্যাক্টিভ পাওয়ার Q, (e) অ্যাপারেন্ট পাওয়ার S, এবং (f) কমপ্লেক্স পাওয়ার S।'
      },
      givenValues: {
        'V': '230 V ∠0°',
        'Z': '12 + j16 Ω = 20 ∠53.13° Ω',
        'f': '50 Hz'
      },
      solution: {
        en: `Step 1: Calculate Impedance Magnitude |Z| and Angle φ:
|Z| = √(12² + 16²) = √(144 + 256) = √400 = 20 Ω.
Phase angle φ = tan⁻¹(16 / 12) = 53.13°.

Step 2: Calculate Circuit Current I:
I = V / |Z| = 230 / 20 = 11.5 A.
Current phasor: I = 11.5 ∠-53.13° A (current lags voltage).

Step 3: Calculate Power Factor:
PF = cos(53.13°) = 12 / 20 = 0.60 Lagging.

Step 4: Calculate Active Power P:
P = V · I · cos φ = 230 × 11.5 × 0.60 = 1587 W = 1.587 kW.
(Verification: P = I²R = 11.5² × 12 = 132.25 × 12 = 1587 W).

Step 5: Calculate Reactive Power Q:
sin φ = 16 / 20 = 0.80.
Q = V · I · sin φ = 230 × 11.5 × 0.80 = 2116 VAR = 2.116 kVAR (Inductive, absorbed).
(Verification: Q = I²X = 11.5² × 16 = 132.25 × 16 = 2116 VAR).

Step 6: Calculate Apparent Power S:
S = V · I = 230 × 11.5 = 2645 VA = 2.645 kVA.
(Verification: S = √(P² + Q²) = √(1587² + 2116²) = √(2518569 + 4477456) = √6996025 = 2645 VA).

Step 7: Complex Power:
S = P + jQ = 1587 + j2116 VA = 2645 ∠53.13° VA.`,
        hi: `चरण 1: प्रतिबाधा परिमाण एवं कोण:
|Z| = √(12² + 16²) = 20 Ω, φ = 53.13°।
चरण 2: परिपथ धारा I = 230 / 20 = 11.5 A (Lagging)।
चरण 3: पावर फैक्टर = cos(53.13°) = 0.60 Lagging।
चरण 4: सक्रिय शक्ति P = V·I·cos φ = 230 × 11.5 × 0.60 = 1587 W।
चरण 5: प्रतिक्रियाशील शक्ति Q = V·I·sin φ = 230 × 11.5 × 0.80 = 2116 VAR।
चरण 6: आभासी शक्ति S = V·I = 230 × 11.5 = 2645 VA।
चरण 7: सम्मिश्र शक्ति S = 1587 + j2116 VA।`,
        bn: `ধাপ ১: ইম্পিড্যান্স |Z| = ২০ Ω, φ = ৫৩.১৩°।
ধাপ ২: কারেন্ট I = ২৩০ / ২০ = ১১.৫ A।
ধাপ ৩: পাওয়ার ফ্যাক্টর cos φ = ০.৬০ (ল্যাগিং)।
ধাপ ৪: অ্যাক্টিভ পাওয়ার P = ২৩০ × ১১.৫ × ০.৬০ = ১৫৮৭ W।
ধাপ ৫: রিঅ্যাক্টিভ পাওয়ার Q = ২৩০ × ১১.৫ × ০.৮০ = ২১১৬ VAR।
ধাপ ৬: অ্যাপারেন্ট পাওয়ার S = ২৩০ × ১১.৫ = ২৬৪৫ VA।
ধাপ ৭: কমপ্লেক্স পাওয়ার S = ১৫৮৭ + j২১১৬ VA।`
      },
      finalAnswer: {
        en: 'I = 11.5 A, PF = 0.60 Lag, P = 1.587 kW, Q = 2.116 kVAR, S = 2.645 kVA, S = (1587 + j2116) VA.',
        hi: 'I = 11.5 A, PF = 0.60 Lag, P = 1.587 kW, Q = 2.116 kVAR, S = 2.645 kVA, S = (1587 + j2116) VA।',
        bn: 'I = ১১.৫ A, PF = ০.৬০ ল্যাগিং, P = ১.৫৮৭ kW, Q = ২.১১৬ kVAR, S = ২.৬৪৫ kVA, S = (১৫৮৭ + j২১১৬) VA।'
      }
    },
    {
      id: 'ex-16-2',
      problem: {
        en: 'An industrial factory draws an apparent power of 500 kVA at 400 V with a lagging power factor of 0.75. Determine: (a) Active power consumed, (b) Reactive power drawn from the grid, (c) Full load current drawn by the plant.',
        hi: 'एक औद्योगिक कारखाना 400 V पर 0.75 लैगिंग पावर फैक्टर के साथ 500 kVA आभासी शक्ति लेता है। ज्ञात करें: (a) सक्रिय शक्ति, (b) ग्रिड से ली गई प्रतिक्रियाशील शक्ति, (c) कारखाने द्वारा ली गई कुल धारा।',
        bn: 'একটি শিল্প কারখানা ৪০০ V-এ ০.৭৫ ল্যাগিং পাওয়ার ফ্যাক্টরে ৫০০ kVA আপাত ক্ষমতা গ্রহণ করে। নির্ণয় কর: (a) ব্যবহৃত সক্রিয় ক্ষমতা, (b) গ্রিড থেকে গৃহীত রিঅ্যাক্টিভ ক্ষমতা, (c) মোট কারেন্ট।'
      },
      givenValues: {
        'S': '500 kVA = 500,000 VA',
        'V': '400 V',
        'cos φ': '0.75 Lagging'
      },
      solution: {
        en: `Step 1: Calculate Active Power P:
P = S · cos φ = 500 × 0.75 = 375 kW.

Step 2: Calculate Reactive Power Q:
Phase angle φ = cos⁻¹(0.75) = 41.41°.
sin φ = sin(41.41°) = √(1 - 0.75²) = √(1 - 0.5625) = √0.4375 = 0.6614.
Q = S · sin φ = 500 × 0.6614 = 330.72 kVAR.
(Check: √(P² + Q²) = √(375² + 330.72²) = √(140625 + 109375.7) = √250000.7 ≈ 500 kVA).

Step 3: Calculate Line Current (Single-phase equivalent / 1-ph basis):
I = S / V = 500,000 / 400 = 1250 A.`,
        hi: `चरण 1: सक्रिय शक्ति P = S · cos φ = 500 × 0.75 = 375 kW।
चरण 2: sin φ = √(1 - 0.75²) = 0.6614।
Q = S · sin φ = 500 × 0.6614 = 330.72 kVAR।
चरण 3: धारा I = 500,000 / 400 = 1250 A।`,
        bn: `ধাপ ১: অ্যাক্টিভ পাওয়ার P = ৫০০ × ০.৭৫ = ৩৭৫ kW।
ধাপ ২: sin φ = ০.৬৬১৪, Q = ৫০০ × ০.৬৬১৪ = ৩৩০.৭২ kVAR।
ধাপ ৩: কারেন্ট I = ৫০০,০০০ / ৪০০ = ১২৫০ A।`
      },
      finalAnswer: {
        en: 'Active Power P = 375 kW, Reactive Power Q = 330.72 kVAR, Line Current I = 1250 A.',
        hi: 'P = 375 kW, Q = 330.72 kVAR, I = 1250 A।',
        bn: 'P = ৩৭৫ kW, Q = ৩৩০.৭২ kVAR, I = ১২৫০ A।'
      }
    },
    {
      id: 'ex-16-3',
      problem: {
        en: 'A single-phase motor consumes 2.4 kW of active power and 1.8 kVAR of inductive reactive power when connected to a 240 V, 50 Hz supply. Find: (a) Apparent power S, (b) Power factor, (c) Motor current I, (d) Impedance of the motor.',
        hi: 'एक सिंगल-फेज मोटर 240 V, 50 Hz सप्लाई से 2.4 kW सक्रिय शक्ति और 1.8 kVAR इंडक्टिव रिएक्टिव शक्ति लेती है। ज्ञात करें: (a) आभासी शक्ति S, (b) पावर फैक्टर, (c) मोटर धारा I, (d) मोटर की प्रतिबाधा।',
        bn: 'একটি সিঙ্গেল ফেজ মোটর ২৪০ V, ৫০ Hz সাপ্লাই থেকে ২.৪ kW অ্যাক্টিভ পাওয়ার ও ১.৮ kVAR রিঅ্যাক্টিভ পাওয়ার টানে। নির্ণয় কর: (a) অ্যাপারেন্ট পাওয়ার S, (b) পাওয়ার ফ্যাক্টর, (c) কারেন্ট I, (d) ইম্পিড্যান্স Z।'
      },
      givenValues: {
        'P': '2.4 kW = 2400 W',
        'Q': '1.8 kVAR = 1800 VAR',
        'V': '240 V'
      },
      solution: {
        en: `Step 1: Calculate Apparent Power S:
S = √(P² + Q²) = √(2400² + 1800²) = √(5760000 + 3240000) = √9000000 = 3000 VA = 3.0 kVA.

Step 2: Calculate Power Factor:
PF = cos φ = P / S = 2400 / 3000 = 0.80 Lagging.

Step 3: Calculate Motor Current I:
I = S / V = 3000 / 240 = 12.5 A.

Step 4: Calculate Motor Impedance Z:
|Z| = V / I = 240 / 12.5 = 19.2 Ω.
R = P / I² = 2400 / 12.5² = 2400 / 156.25 = 15.36 Ω.
X = Q / I² = 1800 / 156.25 = 11.52 Ω.
Z = (15.36 + j11.52) Ω = 19.2 ∠36.87° Ω.`,
        hi: `चरण 1: आभासी शक्ति S = √(2400² + 1800²) = 3000 VA = 3.0 kVA।
चरण 2: पावर फैक्टर cos φ = P / S = 2400 / 3000 = 0.80 Lagging।
चरण 3: धारा I = S / V = 3000 / 240 = 12.5 A।
चरण 4: प्रतिबाधा Z = 240 / 12.5 = 19.2 Ω (Z = 15.36 + j11.52 Ω)।`,
        bn: `ধাপ ১: অ্যাপারেন্ট পাওয়ার S = √(২৪০০² + ১৮০০²) = ৩০০০ VA = ৩.০ kVA।
ধাপ ২: পাওয়ার ফ্যাক্টর cos φ = ২৪০০ / ৩০০০ = ০.৮০ (ল্যাগিং)।
ধাপ ৩: কারেন্ট I = ৩০০০ / ২৪০ = ১২.৫ A।
ধাপ ৪: ইম্পিড্যান্স Z = ২৪০ / ১২.৫ = ১৯.২ Ω (১৫.৩৬ + j১১.৫২ Ω)।`
      },
      finalAnswer: {
        en: 'S = 3.0 kVA, PF = 0.80 Lagging, I = 12.5 A, Z = (15.36 + j11.52) Ω = 19.2 ∠36.87° Ω.',
        hi: 'S = 3.0 kVA, PF = 0.80 Lag, I = 12.5 A, Z = 19.2 ∠36.87° Ω।',
        bn: 'S = ৩.০ kVA, PF = ০.৮০ ল্যাগিং, I = ১২.৫ A, Z = ১৯.২ ∠৩৬.৮৭° Ω।'
      }
    },
    {
      id: 'ex-16-4',
      problem: {
        en: 'A capacitive load connected to a 200 V, 50 Hz AC line takes a current of 5 A leading the voltage by 60°. Calculate: (a) Active power P, (b) Reactive power Q, (c) Apparent power S, (d) Complex power S.',
        hi: '200 V, 50 Hz एसी लाइन से जुड़ा कैपेसिटिव लोड 5 A की धारा लेता है जो वोल्टेज से 60° आगे (लीड) है। गणना करें: (a) सक्रिय शक्ति P, (b) प्रतिक्रियाशील शक्ति Q, (c) आभासी शक्ति S, (d) सम्मिश्र शक्ति S।',
        bn: 'একটি ২০০ V, ৫০ Hz এসি লাইনে সংযুক্ত ক্যাপাসিটিভ লোড ৫ A কারেন্ট গ্রহণ করে যা ভোল্টেজ থেকে ৬০° এগিয়ে (লিডিং)। নির্ণয় কর: (a) P, (b) Q, (c) S, (d) জটিল ক্ষমতা S।'
      },
      givenValues: {
        'V': '200 V ∠0°',
        'I': '5 A ∠+60°',
        'φ': '-60° (leading)'
      },
      solution: {
        en: `Step 1: Calculate Apparent Power S:
S = V · I = 200 × 5 = 1000 VA = 1.0 kVA.

Step 2: Calculate Active Power P:
P = V · I · cos(60°) = 200 × 5 × 0.50 = 500 W.

Step 3: Calculate Reactive Power Q:
Q = V · I · sin(-60°) = 200 × 5 × (-0.866) = -866 VAR = -0.866 kVAR (Leading, capacitive delivers reactive power).

Step 4: Complex Power S:
S = V · I* = (200 ∠0°) × (5 ∠-60°) = 1000 ∠-60° VA = 500 - j866 VA.`,
        hi: `चरण 1: आभासी शक्ति S = 200 × 5 = 1000 VA = 1.0 kVA।
चरण 2: सक्रिय शक्ति P = 200 × 5 × cos(60°) = 500 W।
चरण 3: प्रतिक्रियाशील शक्ति Q = 200 × 5 × (-sin 60°) = -866 VAR (Leading)।
चरण 4: सम्मिश्र शक्ति S = 500 - j866 VA = 1000 ∠-60° VA।`,
        bn: `ধাপ ১: অ্যাপারেন্ট পাওয়ার S = ২০০ × ৫ = ১০০০ VA।
ধাপ ২: অ্যাক্টিভ পাওয়ার P = ২০০ × ৫ × cos(৬০°) = ৫০০ W।
ধাপ ৩: রিঅ্যাক্টিভ পাওয়ার Q = ২০০ × ৫ × (-sin ৬০°) = -৮৬৬ VAR (লিডিং)।
ধাপ ৪: কমপ্লেক্স পাওয়ার S = ৫০০ - j৮৬৬ VA।`
      },
      finalAnswer: {
        en: 'P = 500 W, Q = -866 VAR (Leading), S = 1000 VA, S = (500 - j866) VA.',
        hi: 'P = 500 W, Q = -866 VAR (Leading), S = 1000 VA, S = (500 - j866) VA।',
        bn: 'P = ৫০০ W, Q = -৮৬৬ VAR (লিডিং), S = ১০০০ VA, S = (৫০০ - j৮৬৬) VA।'
      }
    },
    {
      id: 'ex-16-5',
      problem: {
        en: 'A 230 V, 50 Hz substation feeder supplies two parallel loads: Load 1 draws 10 kW at 0.8 lagging PF; Load 2 draws 15 kW at 0.6 lagging PF. Find: (a) Total active power P_total, (b) Total reactive power Q_total, (c) Total apparent power S_total, (d) Combined overall power factor, (e) Total feeder current I_total.',
        hi: '230 V, 50 Hz सबस्टेशन फीडर दो समानांतर भारों को आपूर्ति करता है: लोड 1 0.8 लैगिंग PF पर 10 kW लेता है; लोड 2 0.6 लैगिंग PF पर 15 kW लेता है। ज्ञात करें: (a) कुल सक्रिय शक्ति, (b) कुल प्रतिक्रियाशील शक्ति, (c) कुल आभासी शक्ति, (d) कुल पावर फैक्टर, (e) कुल फीडर धारा।',
        bn: 'একটি ২৩০ V, ৫০ Hz ফিডার দুটি সমান্তরাল লোড সরবরাহ করে: লোড ১ ০.৮ ল্যাগিং PF-এ ১০ kW; লোড ২ ০.৬ ল্যাগিং PF-এ ১৫ kW। নির্ণয় কর: (a) মোট P, (b) মোট Q, (c) মোট S, (d) সমন্বিত PF, (e) মোট কারেন্ট।'
      },
      givenValues: {
        'V': '230 V',
        'Load 1': 'P1 = 10 kW, cos φ1 = 0.8 lag (tan φ1 = 0.75)',
        'Load 2': 'P2 = 15 kW, cos φ2 = 0.6 lag (tan φ2 = 1.333)'
      },
      solution: {
        en: `Step 1: Calculate Reactive Powers of individual loads:
For Load 1: Q1 = P1 · tan φ1 = 10 × tan(cos⁻¹ 0.8) = 10 × (0.6 / 0.8) = 7.5 kVAR.
For Load 2: Q2 = P2 · tan φ2 = 15 × tan(cos⁻¹ 0.6) = 15 × (0.8 / 0.6) = 20.0 kVAR.

Step 2: Total Active and Reactive Power:
P_total = P1 + P2 = 10 + 15 = 25.0 kW.
Q_total = Q1 + Q2 = 7.5 + 20.0 = 27.5 kVAR.

Step 3: Total Apparent Power S_total:
S_total = √(P_total² + Q_total²) = √(25² + 27.5²) = √(625 + 756.25) = √1381.25 = 37.165 kVA = 37,165 VA.

Step 4: Overall Combined Power Factor:
PF_total = P_total / S_total = 25.0 / 37.165 = 0.6727 Lagging.

Step 5: Total Feeder Current:
I_total = S_total / V = 37,165 / 230 = 161.59 A.`,
        hi: `चरण 1: Q1 = 10 × 0.75 = 7.5 kVAR, Q2 = 15 × 1.333 = 20.0 kVAR।
चरण 2: P_total = 10 + 15 = 25.0 kW; Q_total = 7.5 + 20.0 = 27.5 kVAR।
चरण 3: S_total = √(25² + 27.5²) = 37.165 kVA।
चरण 4: कुल PF = 25.0 / 37.165 = 0.6727 Lagging।
चरण 5: कुल धारा I_total = 37,165 / 230 = 161.59 A।`,
        bn: `ধাপ ১: Q1 = ৭.৫ kVAR, Q2 = ২০.০ kVAR।
ধাপ ২: P_মোট = ২৫.০ kW, Q_মোট = ২৭.৫ kVAR।
ধাপ ৩: S_মোট = √(২৫² + ২৭.৫²) = ৩৭.১৬৫ kVA।
ধাপ ৪: সার্বিক PF = ২৫ / ৩৭.১৬৫ = ০.৬৭২৭ (ল্যাগিং)।
ধাপ ৫: মোট কারেন্ট I_মোট = ৩৭,১৬৫ / ২৩০ = ১৬১.৫৯ A।`
      },
      finalAnswer: {
        en: 'P_total = 25.0 kW, Q_total = 27.5 kVAR, S_total = 37.165 kVA, Overall PF = 0.673 Lagging, I_total = 161.6 A.',
        hi: 'P_total = 25.0 kW, Q_total = 27.5 kVAR, S_total = 37.165 kVA, PF = 0.673 Lag, I = 161.6 A।',
        bn: 'P_মোট = ২৫.০ kW, Q_মোট = ২৭.৫ kVAR, S_মোট = ৩৭.১৬৫ kVA, সার্বিক PF = ০.৬৭৩ ল্যাগিং, I = ১৬১.৬ A।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Sizing Electrical Substations & Transformers: Transformers and generators are rated in kVA/MVA rather than kW because total copper thermal loss depends on current (S/V) irrespective of active work.',
      'Industrial Tariff Billing: Utilities install tri-vector energy meters measuring kWh (Active energy), kVARh (Reactive energy), and kVAh (Apparent energy) to impose financial penalties on low power factor users.',
      'Transmission Grid Stability: Managing reactive power flow (Q) via FACTS devices and capacitor banks is vital for maintaining voltage profiles across long-distance high-voltage AC lines.',
      'UPS and Inverter Sizing: Commercial inverter ratings must satisfy both the active load requirement (W) and the apparent surge demand (VA) of non-linear and inductive computer/motor loads.'
    ],
    hi: [
      'ट्रांसफार्मर एवं सबस्टेशन का आकार निर्धारण: ट्रांसफार्मर kVA/MVA में रेट किए जाते हैं क्योंकि केबल और वाइंडिंग हीटिंग कुल धारा (S/V) पर निर्भर करती है।',
      'औद्योगिक बिजली बिलिंग: बिजली कंपनियाँ kWh, kVARh और kVAh मीटर लगाकर कम पावर फैक्टर वाले उपभोक्ताओं पर जुर्माना लगाती हैं।',
      'ट्रांसमिशन ग्रिड स्थिरता: ग्रिड में वोल्टेज स्तर बनाए रखने के लिए रिएक्टिव पावर (Q) का प्रबंधन अति आवश्यक है।',
      'यूपीएस एवं इन्वर्टर रेटिंग: कंप्यूटर और मोटरों के लोड के लिए सक्रिय शक्ति (W) और आभासी शक्ति (VA) दोनों का मिलान जरूरी है।'
    ],
    bn: [
      'ট্রান্সফরমার ও সাবস্টেশন রেটিং: ট্রান্সফরমার এবং জেনারেটর kVA/MVA-তে রেট করা হয় কারণ এর অভ্যন্তরীণ তাপীয় ক্ষয় মোট কারেন্টের (S/V) ওপর নির্ভরশীল।',
      'শিল্প বিদ্যুৎ বিলিং: ট্রাই-ভেক্টর মিটারিংয়ের মাধ্যমে kWh ও kVARh পরিমাপ করে কম পাওয়ার ফ্যাক্টরের কারখানাকে পেনাল্টি ধার্য করা হয়।',
      'গ্রিড ভোল্টেজ নিয়ন্ত্রণ: দীর্ঘ সঞ্চালন লাইনে ভোল্টেজ ঠিক রাখতে রিঅ্যাক্টিভ পাওয়ার (Q) নিয়ন্ত্রণ অপরিহার্য।',
      'ইউপিএস ও ইনভার্টার নির্বাচন: সক্রিয় লোড (W) এবং আপাত চাহিদা (VA) উভয় হিসাব করে ইনভার্টার নির্বাচন করতে হয়।'
    ]
  },
  importantPoints: {
    en: [
      'Active Power P = VI cos φ is always non-negative for passive loads and represents irreversible real energy consumption.',
      'Reactive Power Q = VI sin φ has zero net energy conversion per complete cycle; it merely oscillates at double frequency between source and load.',
      'Apparent Power S = VI is always greater than or equal to Active Power (S ≥ P). S equals P only when PF = 1.0 (pure resistive circuit).',
      'The relationship S² = P² + Q² is strictly valid for linear sinusoidal steady-state AC circuits.',
      'In complex notation, S = V·I* ensures inductive reactive power is positive (+jQ) and capacitive reactive power is negative (-jQ).'
    ],
    hi: [
      'सक्रिय शक्ति P = VI cos φ हमेशा उपयोगी वास्तविक ऊर्जा खपत दर्शाती है।',
      'प्रतिक्रियाशील शक्ति Q = VI sin φ का शुद्ध औसत कार्य प्रति चक्र शून्य होता है।',
      'आभासी शक्ति S = VI हमेशा सक्रिय शक्ति से बड़ी या बराबर होती है (S ≥ P)।',
      'S² = P² + Q² का संबंध रैखिक साइनसॉइडल एसी परिपथों में हमेशा सत्य होता है।',
      'सम्मिश्र शक्ति सूत्र S = V·I* में इंडक्टिव Q धनात्मक (+j) और कैपेसिटिव Q ऋणात्मक (-j) होता है।'
    ],
    bn: [
      'অ্যাক্টিভ পাওয়ার P = VI cos φ সর্বদা দরকারী শক্তি রূপান্তর প্রকাশ করে।',
      'রিঅ্যাক্টিভ পাওয়ার Q = VI sin φ-এর নিট কাজ প্রতি সাইকেলে শূন্য।',
      'অ্যাপারেন্ট পাওয়ার S সর্বদা অ্যাক্টিভ পাওয়ারের সমান বা বড় (S ≥ P)।',
      'পাওয়ার ত্রিভুজের সূত্র: S² = P² + Q²।',
      'জটিল রূপে S = V·I* ব্যবহারের ফলে ইন্ডাক্টিভ রিঅ্যাক্টিভ পাওয়ার ধনাত্মক (+jQ) হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing units: Stating Active power in VA or Apparent power in Watts. Always use W/kW for P, VAR/kVAR for Q, and VA/kVA for S.',
      'Algebraic addition of powers: Adding S1 + S2 directly for parallel loads instead of adding active powers (P1 + P2) and reactive powers (Q1 + Q2) orthogonally.',
      'Forgetting the complex conjugate: Calculating complex power as S = V·I instead of S = V·I*, which gives the wrong sign for reactive power.',
      'Assuming high apparent power means high useful output: High kVA with low PF draws huge current but produces very little useful mechanical work.'
    ],
    hi: [
      'इकाइयों में भ्रम: P को VA में या S को Watts में लिखना। हमेशा P के लिए Watts, Q के लिए VAR और S के लिए VA का प्रयोग करें।',
      'समानांतर भारों में सीधे S1 + S2 जोड़ना: हमेशा पहले कुल P और कुल Q जोड़ें, फिर S = √(P² + Q²) निकालें।',
      'सम्मिश्र शक्ति में कंजुगेट भूलना: S = V·I लिखने से Q का चिन्ह उल्टा हो जाता है, सही सूत्र S = V·I* है।',
      'उच्च kVA को उच्च उपयोगी कार्य समझना: कम PF पर उच्च kVA केवल तारों में भारी करंट बहाता है।'
    ],
    bn: [
      'এককের ভুল: P-এর একক VA বা S-এর একক Watts লেখা। সর্বদা P-এর জন্য W, Q-এর জন্য VAR এবং S-এর জন্য VA ব্যবহার করুন।',
      'সমান্তরাল লোডে সরাসরি S1 + S2 যোগ করা: সর্বদা পৃথকভাবে মোট P ও মোট Q যোগ করে তারপর S = √(P² + Q²) নির্ণয় করতে হবে।',
      'কমপ্লেক্স কনজুগেট ভুলে যাওয়া: S = V·I নয়, বরং S = V·I* ব্যবহার করতে হবে।',
      'উচ্চ kVA মানেই বেশি কাজ ভাবা: কম PF-এ উচ্চ kVA কেবল লাইনে অপ্রয়োজনীয় কারেন্ট অপচয় ঘটায়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-16-1',
      question: {
        en: 'What is the unit of Apparent Power (S) in an AC circuit?',
        hi: 'एसी परिपथ में आभासी शक्ति (S) का मात्रक क्या है?',
        bn: 'এসি সার্কিটে অ্যাপারেন্ট পাওয়ারের (S) একক কী?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Watts (W)', hi: 'वाट (W)', bn: 'ওয়াট (W)' } },
        { id: 'opt-b', text: { en: 'Volt-Amperes Reactive (VAR)', hi: 'वोल्ट-एम्पीयर रिएक्टिव (VAR)', bn: 'ভোল্ট-অ্যাম্পিয়ার রিঅ্যাক্টিভ (VAR)' } },
        { id: 'opt-c', text: { en: 'Volt-Amperes (VA)', hi: 'वोल्ट-एम्पीयर (VA)', bn: 'ভোল্ট-অ্যাম্পিয়ার (VA)' } },
        { id: 'opt-d', text: { en: 'Joules (J)', hi: 'जूल (J)', bn: 'জুল (J)' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'Apparent Power is the simple product of RMS Voltage and RMS Current (S = V·I) and is measured in Volt-Amperes (VA or kVA).',
        hi: 'आभासी शक्ति RMS वोल्टेज और RMS धारा का गुणनफल (S = V·I) है और इसे वोल्ट-एम्पीयर (VA या kVA) में मापा जाता है।',
        bn: 'অ্যাপারেন্ট পাওয়ার হলো RMS ভোল্টেজ ও RMS কারেন্টের গুণফল (S = V·I) এবং এর একক হলো ভোল্ট-অ্যাম্পিয়ার (VA)।'
      }
    },
    {
      id: 'mcq-16-2',
      question: {
        en: 'In a purely inductive AC circuit, what is the value of Active Power P?',
        hi: 'एक शुद्ध इंडक्टिव एसी परिपथ में सक्रिय शक्ति P का मान क्या होता है?',
        bn: 'একটি বিশুদ্ধ ইন্ডাক্টিভ এসি সার্কিটে অ্যাক্টিভ পাওয়ার P-এর মান কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'V · I', hi: 'V · I', bn: 'V · I' } },
        { id: 'opt-b', text: { en: '0 Watts', hi: '0 वाट', bn: '০ ওয়াট' } },
        { id: 'opt-c', text: { en: 'V · I / 2', hi: 'V · I / 2', bn: 'V · I / ২' } },
        { id: 'opt-d', text: { en: 'Infinity', hi: 'अनंत', bn: 'অসীম' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'In a pure inductor, the current lags voltage by φ = 90°. Since cos(90°) = 0, Active Power P = V·I·cos(90°) = 0 W.',
        hi: 'शुद्ध इंडक्टर में धारा वोल्टेज से 90° लैग करती है। cos(90°) = 0 होने के कारण सक्रिय शक्ति P = 0 W होती है।',
        bn: 'বিশুদ্ধ ইন্ডাক্টরে ফেজ কোণ ৯০° হওয়ায় cos(৯০°) = ০, ফলে অ্যাক্টিভ পাওয়ার P = ০ ওয়াট।'
      }
    },
    {
      id: 'mcq-16-3',
      question: {
        en: 'Which formula correctly expresses the geometric relationship in the Power Triangle?',
        hi: 'पावर त्रिभुज में कौन सा सूत्र ज्यामितीय संबंध को सही ढंग से व्यक्त करता है?',
        bn: 'পাওয়ার ত্রিভুজে কোন সূত্রটি সঠিক জ্যামিতিক সম্পর্ক প্রকাশ করে?'
      },
      options: [
        { id: 'opt-a', text: { en: 'S = P + Q', hi: 'S = P + Q', bn: 'S = P + Q' } },
        { id: 'opt-b', text: { en: 'S² = P² + Q²', hi: 'S² = P² + Q²', bn: 'S² = P² + Q²' } },
        { id: 'opt-c', text: { en: 'P² = S² + Q²', hi: 'P² = S² + Q²', bn: 'P² = S² + Q²' } },
        { id: 'opt-d', text: { en: 'Q² = S² + P²', hi: 'Q² = S² + P²', bn: 'Q² = S² + P²' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'By the Pythagorean theorem applied to the Power Triangle, Hypotenuse² = Base² + Perpendicular², so S² = P² + Q².',
        hi: 'पाइथागोरस प्रमेय के अनुसार कर्ण² = आधार² + लंब², अतः S² = P² + Q²।',
        bn: 'পিথাগোরাসের উপপাদ্য অনুযায়ী অতিভুজ² = ভূমি² + লম্ব², অর্থাৎ S² = P² + Q²।'
      }
    },
    {
      id: 'mcq-16-4',
      question: {
        en: 'Why are transformers rated in kVA instead of kW?',
        hi: 'ट्रांसफार्मर की रेटिंग kW के बजाय kVA में क्यों दी जाती है?',
        bn: 'ট্রান্সফরমারের রেটিং kW-এর পরিবর্তে kVA-তে কেন দেওয়া হয়?'
      },
      options: [
        { id: 'opt-a', text: { en: 'Because copper loss depends on current (I) and iron loss depends on voltage (V), independent of load power factor', hi: 'क्योंकि कॉपर लॉस धारा पर और आयरन लॉस वोल्टेज पर निर्भर करता है, लोड के पावर फैक्टर से स्वतंत्र होकर', bn: 'কারণ কপার লস কারেন্টের এবং আয়রন লস ভোল্টেজের ওপর নির্ভরশীল, লোড পাওয়ার ফ্যাক্টরের ওপর নয়' } },
        { id: 'opt-b', text: { en: 'Because transformers cannot handle active power', hi: 'क्योंकि ट्रांसफार्मर सक्रिय शक्ति वहन नहीं कर सकते', bn: 'কারণ ট্রান্সফরমার অ্যাক্টিভ পাওয়ার বহন করতে পারে না' } },
        { id: 'opt-c', text: { en: 'Because kVA is always smaller than kW', hi: 'क्योंकि kVA हमेशा kW से छोटा होता है', bn: 'কারণ kVA সর্বদা kW থেকে ছোট' } },
        { id: 'opt-d', text: { en: 'Due to historical convention only', hi: 'केवल ऐतिहासिक परंपरा के कारण', bn: 'কেবলমাত্র ঐতিহাসিক রীতির কারণে' } }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Transformer heating losses depend entirely on V (dielectric/core loss) and I (I²R copper loss). The manufacturer does not know the power factor of the load that will be connected.',
        hi: 'ट्रांसफार्मर की कुल हानियाँ वोल्टेज (कोर लॉस) और धारा (कॉपर लॉस) पर निर्भर करती हैं। निर्माता को पहले से जुड़े लोड के पावर फैक्टर का ज्ञान नहीं होता।',
        bn: 'ট্রান্সফরমারের মোট অপচয় ভোল্টেজ ও কারেন্টের ওপর নির্ভর করে, যা লোডের পাওয়ার ফ্যাক্টরের ওপর নির্ভরশীল নয়।'
      }
    },
    {
      id: 'mcq-16-5',
      question: {
        en: 'If a circuit has P = 800 W and Q = 600 VAR, what is the Apparent Power S and Power Factor cos φ?',
        hi: 'यदि किसी परिपथ में P = 800 W और Q = 600 VAR है, तो आभासी शक्ति S और पावर फैक्टर क्या होगा?',
        bn: 'যদি একটি সার্কিটে P = ৮০০ W এবং Q = ৬০০ VAR হয়, তবে অ্যাপারেন্ট পাওয়ার S এবং পাওয়ার ফ্যাক্টর কত?'
      },
      options: [
        { id: 'opt-a', text: { en: 'S = 1400 VA, PF = 0.57', hi: 'S = 1400 VA, PF = 0.57', bn: 'S = ১৪০০ VA, PF = ০.৫৭' } },
        { id: 'opt-b', text: { en: 'S = 1000 VA, PF = 0.80', hi: 'S = 1000 VA, PF = 0.80', bn: 'S = ১০০০ VA, PF = ০.৮০' } },
        { id: 'opt-c', text: { en: 'S = 1000 VA, PF = 0.60', hi: 'S = 1000 VA, PF = 0.60', bn: 'S = ১০০০ VA, PF = ০.৬০' } },
        { id: 'opt-d', text: { en: 'S = 480 VA, PF = 1.00', hi: 'S = 480 VA, PF = 1.00', bn: 'S = ৪৮০ VA, PF = ১.০০' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'S = √(800² + 600²) = √(640000 + 360000) = √1000000 = 1000 VA. Power factor = P / S = 800 / 1000 = 0.80.',
        hi: 'S = √(800² + 600²) = 1000 VA। पावर फैक्टर = 800 / 1000 = 0.80।',
        bn: 'S = √(৮০০² + ৬০০²) = ১০০০ VA। পাওয়ার ফ্যাক্টর = ৮০০ / ১০০০ = ০.৮০।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'prac-16-1',
      question: {
        en: 'A 240 V, 50 Hz single-phase AC circuit takes a current of 20 A at a lagging power factor of 0.707. Calculate: (a) Active Power P, (b) Reactive Power Q, (c) Apparent Power S, (d) Circuit resistance R and reactance X.',
        hi: '240 V, 50 Hz एकल-फेज एसी परिपथ 0.707 लैगिंग पावर फैक्टर पर 20 A धारा लेता है। गणना करें: (a) सक्रिय शक्ति P, (b) प्रतिक्रियाशील शक्ति Q, (c) आभासी शक्ति S, (d) परिपथ प्रतिरोध R एवं रिएक्टेंस X।',
        bn: 'একটি ২৪০ V, ৫০ Hz সিঙ্গেল ফেজ এসি সার্কিট ০.৭০৭ ল্যাগিং পাওয়ার ফ্যাক্টরে ২০ A কারেন্ট নেয়। নির্ণয় কর: (a) P, (b) Q, (c) S, (d) রোধ R ও রিঅ্যাকট্যান্স X।'
      },
      hint: {
        en: 'Use S = V·I, P = S·cos φ, Q = S·sin φ, R = P/I², and X = Q/I².',
        hi: 'S = V·I, P = S·cos φ, Q = S·sin φ, R = P/I², और X = Q/I² का उपयोग करें।',
        bn: 'S = V·I, P = S·cos φ, Q = S·sin φ, R = P/I², এবং X = Q/I² সূত্র ব্যবহার করুন।'
      },
      answerKey: {
        en: '(a) S = 240 × 20 = 4800 VA = 4.8 kVA.\n(b) P = 4800 × 0.707 = 3393.6 W = 3.394 kW.\n(c) φ = cos⁻¹(0.707) = 45°, sin 45° = 0.707. Q = 4800 × 0.707 = 3393.6 VAR = 3.394 kVAR.\n(d) R = P / I² = 3393.6 / 400 = 8.484 Ω; X = Q / I² = 3393.6 / 400 = 8.484 Ω.',
        hi: '(a) S = 4.8 kVA। (b) P = 3.394 kW। (c) Q = 3.394 kVAR। (d) R = 8.484 Ω, X = 8.484 Ω।',
        bn: '(a) S = ৪.৮ kVA। (b) P = ৩.৩৯৪ kW। (c) Q = ৩.৩৯৪ kVAR। (d) R = ৮.৪৮৪ Ω, X = ৮.৪৮৪ Ω।'
      }
    },
    {
      id: 'prac-16-2',
      question: {
        en: 'A coil having a resistance of 10 Ω and an inductance of 0.05 H is connected across a 230 V, 50 Hz AC supply. Find: (a) The inductive reactance XL, (b) Total impedance Z, (c) Current I, (d) Active power P, (e) Reactive power Q, (f) Apparent power S.',
        hi: '10 Ω प्रतिरोध और 0.05 H प्रेरकत्व वाली एक कुंडली 230 V, 50 Hz एसी सप्लाई से जुड़ी है। ज्ञात करें: (a) XL, (b) Z, (c) I, (d) P, (e) Q, (f) S।',
        bn: '১০ Ω রোধ ও ০.০৫ H ইন্ডাকট্যান্স বিশিষ্ট একটি কয়েল ২৩০ V, ৫০ Hz উৎসের সাথে যুক্ত। নির্ণয় কর: (a) XL, (b) Z, (c) I, (d) P, (e) Q, (f) S।'
      },
      hint: {
        en: 'XL = 2πfL = 2 × π × 50 × 0.05 = 15.71 Ω. Z = √(R² + XL²).',
        hi: 'XL = 2πfL = 15.71 Ω। Z = √(10² + 15.71²)।',
        bn: 'XL = ২πfL = ১৫.৭১ Ω। Z = √(১০² + ১৫.৭১²)।'
      },
      answerKey: {
        en: '(a) XL = 2 × 3.1416 × 50 × 0.05 = 15.708 Ω.\n(b) |Z| = √(10² + 15.708²) = √(100 + 246.74) = √346.74 = 18.62 Ω.\n(c) I = 230 / 18.62 = 12.35 A.\n(d) Active Power P = I²R = (12.35)² × 10 = 152.52 × 10 = 1525.2 W = 1.525 kW.\n(e) Reactive Power Q = I²XL = 152.52 × 15.708 = 2395.8 VAR = 2.396 kVAR.\n(f) Apparent Power S = V · I = 230 × 12.35 = 2840.5 VA = 2.841 kVA.',
        hi: '(a) XL = 15.708 Ω। (b) Z = 18.62 Ω। (c) I = 12.35 A। (d) P = 1.525 kW। (e) Q = 2.396 kVAR। (f) S = 2.841 kVA।',
        bn: '(a) XL = ১৫.৭০৮ Ω। (b) Z = ১৮.৬২ Ω। (c) I = ১২.৩৫ A। (d) P = ১.৫২৫ kW। (e) Q = ২.৩৯৬ kVAR। (f) S = ২.৮৪১ kVA।'
      }
    }
  ]
};
