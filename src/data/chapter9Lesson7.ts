import { Lesson } from '../types';

export const LESSON_AMPERES_LAW: Lesson = {
  id: 'lsn-ch9-amperes-law',
  topicId: 'tp-amperes-law',
  chapterId: 'ch-magnetic-circuits',
  order: 7,
  title: {
    en: 'Ampère’s Circuital Law & Work Law',
    hi: 'एम्पीयर का परिपथीय नियम एवं कार्य नियम',
    bn: 'অ্যাম্পিয়ারের সার্কিটাল সূত্র ও প্রয়োগ'
  },
  description: {
    en: 'Ampère’s Circuital Law ∮ H · dl = ΣI = N·I, application to straight conductors, solenoids, toroids, and boundary conditions in magnetic circuits.',
    hi: 'एम्पीयर का परिपथीय नियम ∮ H · dl = ΣI = N·I, सीधे चालक, परिनालिका, टोरोइड एवं चुंबकीय परिपथ में अनुप्रयोग।',
    bn: 'অ্যাম্পিয়ারের সার্কিটাল সূত্র ∮ H · dl = ΣI = N·I, সোজা পরিবাহী, সলিনয়েড ও টোরয়েডে এর প্রয়োগ এবং চৌম্বক বর্তনীর সীমাবদ্ধতা।'
  },
  easyExplanation: {
    en: 'Ampère’s Law states that if you travel in any closed loop around a current-carrying wire, the total magnetic force accumulated along your path (∮ H · dl) is exactly equal to the total electric current passing through that loop!',
    hi: 'एम्पीयर का नियम कहता है कि यदि आप धारावाही चालक के चारों ओर किसी बंद लूप में घूमें, तो पूरे मार्ग में कुल चुंबकीय तीव्रता का योग (∮ H · dl) उस लूप से गुजरने वाली कुल धारा के बराबर होता है!',
    bn: 'অ্যাম্পিয়ারের সূত্রানুসারে, কোনো তড়িৎবাহী তারের চারপাশের যেকোনো বদ্ধ লুপ ধরে ভ্রমণ করলে, মোট সংগৃহীত চৌম্বক তীব্রতার সমাকলন (∮ H · dl) ঐ লুপের ভেতর দিয়ে অতিক্রান্ত মোট তড়িৎ প্রবাহের সমান হয়!'
  },
  detailedExplanation: {
    en: `1. Statement of Ampère’s Circuital Law:
- The line integral of the magnetic field intensity ($H$) around any closed path or loop (Amperian loop) is equal to the total net electric current enclosed by that path:
  $$\\oint H \\cdot dl = \\sum I_{\\text{enclosed}} = N \\cdot I$$
  where:
  - $\\oint$ denotes integration around a closed loop
  - $dl$ is an infinitesimal length vector along the path
  - $N \\cdot I$ is the total Ampere-turns enclosed

2. Key Applications of Ampère's Law:

**A. Magnetic Field of a Long Straight Conductor:**
- Take a circular Amperian loop of radius $r$ centered on the wire:
  $$\\oint H \\cdot dl = H (2\\pi r) = I \\implies H = \\frac{I}{2\\pi r}$$
  $$B = \\mu_0 H = \\frac{\\mu_0 I}{2\\pi r}$$

**B. Magnetic Field Inside an Ideal Long Solenoid:**
- For a solenoid of length $l$ and $N$ turns:
  $$H = \\frac{N \\cdot I}{l} = n \\cdot I \\implies B = \\mu_0 n I$$
  (where $n = N/l$ is turns per unit length).

**C. Magnetic Field Inside a Toroid:**
- For a toroid of mean radius $R$:
  $$H (2\\pi R) = N I \\implies H = \\frac{N I}{2\\pi R}$$

3. Analogy with Kirchhoff’s Voltage Law (KVL):
- Ampère's circuital law in magnetic circuits is the direct magnetic equivalent of KVL in electric circuits:
  $$\\sum MMF_{\\text{sources}} - \\sum (H_k \\cdot l_k) = 0 \\iff \\sum EMF - \\sum (I \\cdot R_k) = 0$$`,
    hi: `1. एम्पीयर का परिपथीय नियम:
- किसी बंद लूप के चारों ओर ∮ H · dl = N · I (कुल घिरी हुई धारा)।

2. मुख्य सूत्र:
- सीधे तार से r दूरी पर: B = (µ₀ I) / (2π r)
- परिनालिका के अंदर: B = µ₀ n I = µ₀ (N/l) I
- टोरोइड के अंदर: B = (µ₀ N I) / (2π R)।`,
    bn: `১. অ্যাম্পিয়ারের সার্কিটাল সূত্র:
- কোনো বদ্ধ পথ বরাবর চৌম্বক তীব্রতা $H$-এর রৈখিক সমাকলন ঐ পথ দ্বারা আবদ্ধ মোট তড়িৎ প্রবাহের সমান:
  $$\\oint H \\cdot dl = N \\cdot I$$

২. ব্যবহারিক ক্ষেত্রসমূহ:
- দীর্ঘ সোজা তারের জন্য: $B = \\frac{\\mu_0 I}{2\\pi r}$
- সলিনয়েডের অভ্যন্তরে: $B = \\mu_0 \\frac{N}{l} I$
- টোরয়েডের অভ্যন্তরে: $B = \\frac{\\mu_0 N I}{2\\pi R}$

৩. কার্শফের ভোল্টেজ সূত্র (KVL)-এর সাথে তুলনা:
- যেমন বৈদ্যুতিক সার্কিটে $\\sum V = 0$, তেমনি চৌম্বক সার্কিটে $\\sum \\text{MMF} = \\sum (H_k l_k)$।`
  },
  formulas: [
    {
      expression: '∮ H · dl = ΣI_enclosed = N · I',
      description: {
        en: 'Ampère’s Circuital Law in integral form',
        hi: 'एम्पीयर का परिपथीय नियम',
        bn: 'অ্যাম্পিয়ারের সার্কিটাল সূত্রের সমাকলিত রূপ'
      }
    },
    {
      expression: 'B = (μ₀ · I) / (2π · r)',
      description: {
        en: 'Magnetic field at distance r from a long straight wire',
        hi: 'सीधे तार से r दूरी पर चुंबकीय क्षेत्र B',
        bn: 'সোজা তার থেকে r দূরত্বে চৌম্বক ক্ষেত্র B'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'Find the magnetic flux density B at a radial distance of 5 cm (0.05 m) from a straight wire carrying 20 A.',
        hi: '20 A धारा वाले सीधे तार से 5 सेमी (0.05 मीटर) दूरी पर चुंबकीय फ्लक्स घनत्व B ज्ञात करें।',
        bn: '২০ অ্যাম্পিয়ার কারেন্টবাহী একটি সোজা তার থেকে ৫ সেমি (০.০৫ মি) দূরত্বে চৌম্বক ফ্লাক্স ঘনত্ব B কত?'
      },
      solution: {
        en: 'B = (μ₀ · I) / (2π · r) = (4π × 10⁻⁷ × 20) / (2π × 0.05) = (2 × 10⁻⁷ × 20) / 0.05 = 80 µT (0.08 mT).',
        hi: 'B = (4π × 10⁻⁷ × 20) / (2π × 0.05) = 80 µT।',
        bn: 'B = (৪π × ১০⁻⁷ × ২০) / (২π × ০.০৫) = ৮০ µT (০.০৮ mT বা ০.৮ গাউস)।'
      }
    }
  ]
};
