import { Lesson } from '../types';

export const LESSON_ENERGY_STORED_MAGNETIC_FIELD: Lesson = {
  id: 'lsn-ch8-energy-stored-magnetic-field',
  topicId: 'ch8-energy-stored-magnetic-field',
  chapterId: 'ch-inductors',
  order: 10,
  title: {
    en: 'Energy Stored in an Inductor & Magnetic Energy Density',
    hi: 'इंडक्टर में संचित ऊर्जा एवं चुंबकीय ऊर्जा घनत्व',
    bn: 'ইন্ডাক্টরে সঞ্চিত শক্তি ও চৌম্বক শক্তি ঘনত্ব'
  },
  description: {
    en: 'Mathematical derivation of magnetic potential energy stored in a current-carrying inductor (W = 1/2 L I²), magnetic energy density per unit volume (w_m = B² / 2μ = 1/2 μ H²), comparison with capacitor electrostatic storage.',
    hi: 'धारावाही इंडक्टर में संचित चुंबकीय स्थितिज ऊर्जा (W = 1/2 L I²) का निगमन, चुंबकीय ऊर्जा घनत्व (w_m = B² / 2μ), तथा संधारित्र की स्थिरवैद्युत ऊर्जा से तुलना।',
    bn: 'তড়িৎবাহী ইন্ডাক্টরে সঞ্চিত চৌম্বক বিভব শক্তি (W = 1/2 L I²) সমীকরণ প্রতিপাদন, একক আয়তনে চৌম্বক শক্তি ঘনত্ব (w_m = B² / 2μ) ও ক্যাপাসিটরের সাথে তুলনা।'
  },
  easyExplanation: {
    en: 'While a capacitor stores energy in an invisible electric field between its plates (W = 1/2 C V²), an inductor stores energy in the invisible magnetic field surrounding its wire turns (W = 1/2 L I²). When current flows, the magnetic field expands and packs in energy; when current stops, the field collapses and releases all that energy back into the circuit!',
    hi: 'जैसे कैपेसिटर अपनी प्लेटों के बीच विद्युत क्षेत्र में ऊर्जा संचित करता है (1/2 C V²), वैसे ही एक इंडक्टर अपने चारों ओर चुंबकीय क्षेत्र में ऊर्जा संचित करता है (W = 1/2 L I²)। जब धारा बहती है तो ऊर्जा चुंबकीय क्षेत्र में भर जाती है, और धारा रुकने पर यह ऊर्जा वापस परिपथ में लौट आती है!',
    bn: 'ক্যাপাসিটর যেমন তার দুই পাতের মধ্যকার তড়িৎ ক্ষেত্রে শক্তি জমা রাখে (1/2 C V²), তেমনই একটি ইন্ডাক্টর তার তারের চারপাশের চৌম্বক ক্ষেত্রে শক্তি সঞ্চয় করে (W = 1/2 L I²)। কারেন্ট চলার সময় চৌম্বক ক্ষেত্রে শক্তি পূর্ণ হয় এবং কারেন্ট বন্ধ হলে সেই শক্তি সার্কিটে ফিরে আসে!'
  },
  detailedExplanation: {
    en: `1. Derivation of Energy Stored in an Inductor (W):
When current i(t) in an inductor of inductance L rises from 0 to final steady value I:
- Induced Back EMF: e = L (di / dt)
- Instantaneous Power delivered to magnetic field:
  p(t) = v(t) · i(t) = L · (di / dt) · i
- Total Work done / Energy Stored (W):
  W = ∫₀^I p(t) dt = ∫₀^I L · i · di = L · [i² / 2]₀^I
  W = ½ · L · I² [Joules]

2. Magnetic Energy Density (w_m):
Magnetic energy density is the amount of magnetic energy stored per unit volume (J/m³) in the magnetic core medium:
w_m = W / Volume = (½ · L · I²) / (A · l)
Substituting L = (μ · N² · A) / l and I = (H · l) / N:
w_m = ½ · μ · H² = ½ · B · H = B² / (2 · μ) [Joules/m³]

3. Comparison: Inductor (Magnetic) vs Capacitor (Electrostatic):
- Inductor:
  Energy stored in Magnetic Field: W_m = ½ · L · I²
  Energy Density: w_m = B² / (2 · μ) [J/m³]
  Opposes changes in Current (i).
- Capacitor:
  Energy stored in Electric Field: W_e = ½ · C · V²
  Energy Density: w_e = ½ · ε · E² [J/m³]
  Opposes changes in Voltage (v).

4. Conservation and Release of Magnetic Energy:
Unlike resistors which permanently dissipate energy as heat (I²R), an ideal inductor never consumes energy over a full AC cycle; it continuously stores energy during one quarter-cycle and returns it during the next.`,
    hi: `1. इंडक्टर में संचित ऊर्जा का निगमन:
dW = p · dt = (L · di/dt · i) · dt = L · i · di
W = ∫₀^I L · i · di = 1/2 · L · I² [जूल]

2. चुंबकीय ऊर्जा घनत्व (Magnetic Energy Density, w_m):
प्रति एकांक आयतन में संचित ऊर्जा:
w_m = B² / (2 · μ) = 1/2 · μ · H² [J/m³]

3. इंडक्टर बनाम कैपेसिटर ऊर्जा तुलना:
- इंडक्टर: W = 1/2 · L · I² (चुंबकीय क्षेत्र)
- कैपेसिटर: W = 1/2 · C · V² (विद्युत क्षेत्र)।`,
    bn: `১. ইন্ডাক্টরে সঞ্চিত শক্তির সমীকরণ প্রতিপাদন:
dW = p · dt = L · i · di
W = ∫₀^I L · i · di = 1/2 · L · I² [জুল]

২. চৌম্বক শক্তি ঘনত্ব (Magnetic Energy Density, w_m):
একক আয়তনে সঞ্চিত শক্তি:
w_m = B² / (2 · μ) = 1/2 · μ · H² [J/m³]

৩. ইন্ডাক্টর বনাম ক্যাপাসিটর তুলনা:
- ইন্ডাক্টর: W = 1/2 · L · I² (চৌম্বক ক্ষেত্রে সঞ্চিত)
- ক্যাপাসিটর: W = 1/2 · C · V² (তড়িৎ ক্ষেত্রে সঞ্চিত)।`
  },
  formulas: [
    {
      expression: 'W = \\frac{1}{2} \\cdot L \\cdot I^2',
      description: {
        en: 'Total magnetic potential energy stored in an inductor',
        hi: 'इंडक्टर में संचित कुल चुंबकीय स्थितिज ऊर्जा',
        bn: 'ইন্ডাক্টরে সঞ্চিত মোট চৌম্বক বিভব শক্তি'
      }
    },
    {
      expression: 'w_m = \\frac{B^2}{2\\mu} = \\frac{1}{2} \\mu H^2',
      description: {
        en: 'Magnetic energy density per unit volume (J/m³)',
        hi: 'प्रति एकांक आयतन चुंबकीय ऊर्जा घनत्व',
        bn: 'একক আয়তনে চৌম্বক শক্তি ঘনত্ব'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A 250 mH filter choke inductor carries a steady direct current of 6.0 Amperes. (a) Calculate the total magnetic energy stored in the choke. (b) If the current is doubled to 12.0 A, what is the new stored energy?',
        hi: '250 mH का एक फिल्टर चोक इंडक्टर 6.0 A की दिष्ट धारा वहन करता है। (a) संचित कुल ऊर्जा ज्ञात करें। (b) धारा 12.0 A करने पर नई संचित ऊर्जा क्या होगी?',
        bn: '২৫০ mH বিশিষ্ট একটি ফিল্টার চোক ইন্ডাক্টরের মধ্য দিয়ে ৬.০ অ্যাম্পিয়ার স্থির ডিসি কারেন্ট প্রবাহিত হচ্ছে। (a) কোরে সঞ্চিত মোট শক্তি নির্ণয় করো। (b) কারেন্ট দ্বিগুণ করে ১২.০ A করলে নতুন শক্তি কত হবে?'
      },
      solution: {
        en: `Given:
L = 250 mH = 0.250 H
I = 6.0 A

(a) Calculate stored energy at 6 A:
W = ½ · L · I² = 0.5 × 0.250 H × (6.0 A)²
W = 0.125 × 36 = 4.50 Joules.

(b) When current is doubled (I = 12 A):
Since W ∝ I², doubling the current quadruples (4x) the stored energy!
W_new = 4.50 J × 4 = 18.00 Joules.
Verification: W = 0.5 × 0.250 × 12² = 0.125 × 144 = 18.00 Joules.`,
        hi: `(a) W = 1/2 · L · I² = 0.5 × 0.25 × 6² = 4.50 जूल
(b) W ∝ I² होने से धारा दोगुनी करने पर ऊर्जा 4 गुना हो जाएगी:
W_new = 4.50 × 4 = 18.00 जूल।`,
        bn: `(a) W = 1/2 · L · I² = ০.৫ × ০.২৫ × ৬² = ৪.৫০ জুল
(b) যেহেতু W ∝ I², কারেন্ট দ্বিগুণ করলে সঞ্চিত শক্তি ৪ গুণ বৃদ্ধি পাবে:
W_new = ৪.৫০ × ৪ = ১৮.০০ জুল।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'In an ideal inductor carrying constant DC current, where is the electrical energy stored?',
        hi: 'स्थिर DC धारा वहन करने वाले आदर्श इंडक्टर में विद्युत ऊर्जा कहाँ संचित होती है?',
        bn: 'স্থির ডিসি কারেন্ট বহনকারী একটি আদর্শ ইন্ডাক্টরে শক্তি কোথায় সঞ্চিত থাকে?'
      },
      options: {
        en: ['In the electrostatic field between wire turns', 'In the magnetic field created by the current', 'In the heat of the copper wire', 'In the voltage drop across the terminals'],
        hi: ['तार के फेरों के बीच विद्युत क्षेत्र में', 'धारा द्वारा निर्मित चुंबकीय क्षेत्र में', 'तांबे के तार की गर्मी में', 'टर्मिनल वोल्टेज में'],
        bn: ['তারের মধ্যকার তড়িৎ ক্ষেত্রে', 'কারেন্ট দ্বারা সৃষ্ট চৌম্বক ক্ষেত্রে', 'তামার তারের তাপে', 'টার্মিনাল ভোল্টেজে']
      },
      correctAnswer: 1,
      explanation: {
        en: 'An inductor stores energy in the surrounding magnetic field (W = 1/2 L I²).',
        hi: 'इंडक्टर अपने चारों ओर चुंबकीय क्षेत्र में ऊर्जा संचित करता है (W = 1/2 L I²)।',
        bn: 'ইন্ডাক্টর তার চারপাশের চৌম্বক ক্ষেত্রে শক্তি সঞ্চয় করে (W = 1/2 L I²)।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Inductor Stored Energy',
        hi: 'इंडक्टर संचित ऊर्जा',
        bn: 'ইন্ডাক্টরে সঞ্চিত শক্তি'
      },
      definition: {
        en: 'W = 1/2 L I² (Joules). Magnetic potential energy stored in the magnetic field created by coil current.',
        hi: 'W = 1/2 L I² (जूल)। कुंडली की धारा द्वारा निर्मित चुंबकीय क्षेत्र में संचित ऊर्जा।',
        bn: 'W = 1/2 L I² (জুল)। কয়েলের কারেন্ট দ্বারা সৃষ্ট চৌম্বক ক্ষেত্রে সঞ্চিত মোট শক্তি।'
      }
    }
  ]
};
