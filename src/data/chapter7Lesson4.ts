import { Lesson } from '../types';

export const LESSON_PARALLEL_PLATE_CAPACITOR: Lesson = {
  id: 'lsn-ch7-parallel-plate-capacitor',
  topicId: 'ch7-parallel-plate-capacitor',
  chapterId: 'ch-capacitors',
  order: 4,
  title: {
    en: 'Parallel Plate & Multi-Plate Capacitors',
    hi: 'समानांतर प्लेट एवं बहु-प्लेट संधारित्र',
    bn: 'সমান্তরাল পাত ও বহু-পাত ক্যাপাসিটর'
  },
  description: {
    en: 'Derivation of parallel plate capacitance (C = ε0·εr·A / d), composite dielectrics in series/parallel, and multi-plate interleaved capacitor formula.',
    hi: 'समानांतर प्लेट धारिता सूत्र (C = ε0·εr·A / d), मिश्रित परावैद्युत एवं बहु-प्लेट संधारित्र सूत्र।',
    bn: 'সমান্তরাল পাত ক্যাপাসিট্যান্সের প্রতিপাদন (C = ε0·εr·A / d), যৌগিক ডাই-ইলেকট্রিক ও মাল্টি-প্লেট ক্যাপাসিটরের সূত্র।'
  },
  easyExplanation: {
    en: 'Imagine two metal sheets placed parallel to each other with a thin insulating sheet in between. The larger the metal sheets and the closer they are placed together, the greater the number of charges they can attract and hold on their surfaces.',
    hi: 'कल्पना कीजिए कि दो धातु की चादरें एक-दूसरे के समानांतर रखी हैं और उनके बीच एक पतली कुचालक परत है। प्लेटों का क्षेत्रफल जितना बड़ा होगा और वे जितनी पास होंगी, वे उतना ही अधिक आवेश संचित कर पाएंगी।',
    bn: 'মনে করুন দুটি ধাতব পাত সমান্তরালভাবে পাশাপাশি রাখা এবং মাঝখানে একটি পাতলা অপরিবাহী স্তর রয়েছে। পাতের ক্ষেত্রফল যত বড় হবে এবং পাত দুটি যত কাছাকাছি থাকবে, তত বেশি আধান সেখানে জমা রাখা সম্ভব হবে।'
  },
  detailedExplanation: {
    en: `1. Structure of a Parallel Plate Capacitor:
A parallel plate capacitor consists of two identical parallel conducting plates of cross-sectional area A (m²), separated by a uniform distance d (m), containing a dielectric of permittivity ε = ε0 · εr.

2. Mathematical Derivation of Capacitance:
- Surface charge density on each plate: σ = Q / A [C/m²]
- Electric field intensity between uniform plates: E = σ / ε = Q / (ε · A)
- Potential difference between plates: V = E · d = (Q · d) / (ε · A)
- From definition C = Q / V:
C = (ε0 · εr · A) / d [Farads]

Factors Affecting Capacitance:
- Area (A): Capacitance is directly proportional to plate overlap area (C ∝ A).
- Distance (d): Capacitance is inversely proportional to separation (C ∝ 1/d).
- Dielectric (εr): Capacitance is directly proportional to relative permittivity (C ∝ εr).

3. Parallel Plate Capacitor with Composite Dielectric (Slabs in Series):
When multiple dielectric slabs of thicknesses d1, d2, d3 and relative permittivities εr1, εr2, εr3 are stacked between plates:
Total potential V = V1 + V2 + V3 = (Q/A) · [ (d1/ε1) + (d2/ε2) + (d3/ε3) ]
C_composite = (ε0 · A) / [ (d1/εr1) + (d2/εr2) + (d3/εr3) ]

4. Multi-Plate Interleaved Capacitor:
When n parallel plates are interleaved with alternate plates connected together to form a gang capacitor:
The total number of effective parallel-plate capacitor pairs formed is (n - 1).
C_multi = (n - 1) · (ε0 · εr · A) / d`,
    hi: `1. समानांतर प्लेट संधारित्र की संरचना:
इसमें क्षेत्रफल A वाली दो धातु की प्लेटें d दूरी पर एक-दूसरे के समानांतर रखी जाती हैं जिनके बीच परावैद्युत भरा होता है।

2. धारिता सूत्र का निगमन:
- पृष्ठ आवेश घनत्व σ = Q / A
- विद्युत क्षेत्र E = σ / ε = Q / (ε · A)
- विभवांतर V = E · d = (Q · d) / (ε · A)
- धारिता C = Q / V = (ε0 · εr · A) / d [फैराड]

3. बहु-प्लेट संधारित्र (Multi-Plate Capacitor):
यदि n प्लेटों को एकान्तर क्रम में जोड़कर संधारित्र बनाया जाए, तो कुल प्रभावी संधारित्रों की संख्या (n - 1) होती है:
C_total = (n - 1) · (ε0 · εr · A) / d.`,
    bn: `১. সমান্তরাল পাত ক্যাপাসিটরের গঠন:
এতে A ক্ষেত্রফলের দুটি পরিবাহী পাত d দূরত্বে সমান্তরালভাবে স্থাপিত থাকে এবং মাঝখানে ডাই-ইলেকট্রিক থাকে।

২. সমান্তরাল পাত ক্যাপাসিট্যান্সের প্রতিপাদন:
- আধানের তলমাত্রিক ঘনত্ব σ = Q / A
- তড়িৎ প্রাবল্য E = σ / ε = Q / (ε · A)
- পাতদ্বয়ের বিভব পার্থক্য V = E · d = (Q · d) / (ε · A)
- ক্যাপাসিট্যান্স C = Q / V = (ε0 · εr · A) / d [ফ্যারাড]

৩. বহু-পাত বিশিষ্ট ক্যাপাসিটর (Multi-Plate Capacitor):
যদি n সংখ্যক ধাতব পাতকে পর্যায়ক্রমে যুক্ত করে একটি ক্যাপাসিটর সেট তৈরি করা হয়, তবে কার্যকর ক্যাপাসিটরের সংখ্যা হয় (n - 1):
C_total = (n - 1) · (ε0 · εr · A) / d।`
  },
  formulas: [
    {
      expression: 'C = (ε0 · εr · A) / d',
      description: {
        en: 'Capacitance of a parallel plate capacitor in Farads',
        hi: 'समानांतर प्लेट संधारित्र की धारिता',
        bn: 'সমান্তরাল পাত ক্যাপাসিটরের ধারকত্ব'
      }
    },
    {
      expression: 'C_multi = (n - 1) · (ε0 · εr · A) / d',
      description: {
        en: 'Capacitance of n interleaved parallel plates',
        hi: 'n प्लेटों वाले संधारित्र की कुल धारिता',
        bn: 'n সংখ্যক পাত বিশিষ্ট মাল্টি-প্লেট ক্যাপাসিটরের মোট ক্যাপাসিট্যান্স'
      }
    }
  ],
  practicalApplications: [
    {
      en: 'Variable air-gang tuning capacitors in legacy AM/FM radio receivers',
      hi: 'रेडियो रिसीवर में फ्रीक्वेंसी ट्यूनिंग हेतु वेरिएबल गैंग कैपेसिटर',
      bn: 'রেডিও রিসিভারে ফ্রিকোয়েন্সি টিউনিংয়ের জন্য ভ্যারিয়েবল এয়ার-গ্যাং ক্যাপাসিটর'
    },
    {
      en: 'Multilayer ceramic chip capacitors (MLCC) with hundreds of interleaved micro-layers in smartphones',
      hi: 'स्मार्टफोन और कंप्यूटर बोर्ड में प्रयुक्त मल्टीलेयर सेरामिक चिप कैपेसिटर (MLCC)',
      bn: 'স্মার্টফোন ও মাদারবোর্ডে ব্যবহৃত ক্ষুদ্রাকৃতির মাল্টি-লেয়ার সিরামিক চিপ ক্যাপাসিটর (MLCC)'
    }
  ],
  importantPoints: {
    en: [
      'Halving the distance d doubles the capacitance (C ∝ 1/d)',
      'Doubling the plate surface area A doubles the capacitance (C ∝ A)',
      'For n interleaved plates, always use (n - 1) as the multiplier'
    ],
    hi: [
      'प्लेटों की दूरी d को आधा करने पर धारिता दोगुनी हो जाती है (C ∝ 1/d)',
      'प्लेट का क्षेत्रफल A दोगुना करने पर धारिता दोगुनी हो जाती है',
      'n बहु-प्लेट प्रणाली में सदैव (n - 1) प्रभावी घटक बनते हैं'
    ],
    bn: [
      'পাতদ্বয়ের দূরত্ব d অর্ধেক করলে ক্যাপাসিট্যান্স দ্বিগুণ হয় (C ∝ 1/d)',
      'পাতের ক্ষেত্রফল A দ্বিগুণ করলে ক্যাপাসিট্যান্স দ্বিগুণ হয়',
      'n সংখ্যক পাতের ইন্টারলিভড সেটে কার্যকর ক্যাপাসিটরের সংখ্যা (n - 1)'
    ]
  },
  commonMistakes: {
    en: [
      'Using plate area in cm² without converting to SI unit m² (multiply by 10⁻⁴)',
      'Multiplying by n instead of (n - 1) in multi-plate systems'
    ],
    hi: [
      'क्षेत्रफल को cm² से m² में बदले बिना गणना करना (10⁻⁴ से गुणा करें)',
      'बहु-प्लेट में (n - 1) के स्थान पर n से गुणा कर देना'
    ],
    bn: [
      'ক্ষেত্রফল cm² থেকে m²-তে রূপান্তর না করে সূত্রে বসানো (10⁻⁴ দিয়ে গুণ করতে হবে)',
      'মাল্টি-প্লেট ক্যাপাসিটরে (n - 1)-এর বদলে সরাসরি n দিয়ে গুণ করা'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch7-4-1',
      question: {
        en: 'A parallel plate air capacitor has a capacitance of 20 μF. If the distance between plates is reduced to half and the space is filled with dielectric of εr = 4, the new capacitance is:',
        hi: 'एक समानांतर प्लेट वायु संधारित्र की धारिता 20 μF है। यदि प्लेटों की दूरी आधी कर दी जाए और बीच में εr = 4 का परावैद्युत भर दिया जाए, तो नई धारिता होगी:',
        bn: 'একটি সমান্তরাল পাত বায়ু ক্যাপাসিটরের ধারকত্ব 20 μF। যদি পাতদ্বয়ের দূরত্ব অর্ধেক করা হয় এবং মাঝে εr = 4 ডাই-ইলেকট্রিক দেওয়া হয়, তবে নতুন ক্যাপাসিট্যান্স কত হবে?'
      },
      options: [
        { id: 'opt-a', text: { en: '40 μF', hi: '40 μF', bn: '40 μF' } },
        { id: 'opt-b', text: { en: '80 μF', hi: '80 μF', bn: '80 μF' } },
        { id: 'opt-c', text: { en: '160 μF', hi: '160 μF', bn: '160 μF' } },
        { id: 'opt-d', text: { en: '10 μF', hi: '10 μF', bn: '10 μF' } }
      ],
      correctOptionId: 'opt-c',
      explanation: {
        en: 'C_new = εr · C0 · (d_old / d_new) = 4 · 20 μF · (1 / 0.5) = 4 · 20 · 2 = 160 μF.',
        hi: 'C_new = εr × C0 × (d / d_new) = 4 × 20 × 2 = 160 μF।',
        bn: 'C_new = εr × C0 × (d_old / d_new) = 4 × 20 μF × 2 = 160 μF।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch7-4-1',
      question: {
        en: 'Calculate the capacitance of a parallel plate capacitor having plate area 0.04 m² separated by 1 mm of mica dielectric (εr = 6).',
        hi: '0.04 m² प्लेट क्षेत्रफल एवं 1 mm मोटाई वाले अभ्रक (εr = 6) युक्त समानांतर प्लेट संधारित्र की धारिता ज्ञात करें।',
        bn: '0.04 m² ক্ষেত্রফল ও 1 mm দূরত্বে থাকা মাইকা ডাই-ইলেকট্রিক (εr = 6) যুক্ত সমান্তরাল পাত ক্যাপাসিটরের ক্যাপাসিট্যান্স নির্ণয় করুন।'
      },
      hint: {
        en: 'Use C = (ε0 × εr × A) / d with ε0 = 8.854 × 10⁻¹² F/m.',
        hi: 'C = (ε0 × εr × A) / d सूत्र का प्रयोग करें।',
        bn: 'C = (ε0 × εr × A) / d সূত্র প্রয়োগ করুন।'
      },
      answerKey: {
        en: 'C = (8.854 × 10⁻¹² × 6 × 0.04) / 0.001 = 2.125 × 10⁻⁹ F = 2.125 nF (2125 pF).',
        hi: 'C = (8.854 × 10⁻¹² × 6 × 0.04) / 0.001 = 2.125 nF.',
        bn: 'C = (8.854 × 10⁻¹² × 6 × 0.04) / 0.001 = 2.125 nF (2125 pF)।'
      }
    }
  ]
};
