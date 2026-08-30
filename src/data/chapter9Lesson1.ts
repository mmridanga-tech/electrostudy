import { Lesson } from '../types';

export const LESSON_MAGNETIC_FLUX: Lesson = {
  id: 'lsn-ch9-magnetic-flux',
  topicId: 'tp-magnetic-flux',
  chapterId: 'ch-magnetic-circuits',
  order: 1,
  title: {
    en: 'Magnetic Flux (Φ)',
    hi: 'चुंबकीय फ्लक्स (Φ)',
    bn: 'চৌম্বক ফ্লাক্স (Φ)'
  },
  description: {
    en: 'Fundamental concepts of magnetic lines of force, total magnetic flux (Φ in Webers), surface integral of magnetic induction, Weber to Maxwell conversion, and key properties of magnetic flux lines.',
    hi: 'चुंबकीय बल रेखाओं के मूलभूत सिद्धांत, कुल चुंबकीय फ्लक्स (Φ, वेबर में), चुंबकीय प्रेरण का पृष्ठीय समाकलन, वेबर से मैक्सवेल रूपांतरण एवं चुंबकीय फ्लक्स रेखाओं के मुख्य गुणधर्म।',
    bn: 'চৌম্বক বলরেখার মৌলিক ধারণা, মোট চৌম্বক ফ্লাক্স (Φ, ওয়েবারে), চৌম্বক আবেশের তল সমাকলন, ওয়েবার থেকে ম্যাক্সওয়েল রূপান্তর ও চৌম্বক বলরেখার প্রধান বৈশিষ্ট্য।'
  },
  easyExplanation: {
    en: 'Think of magnetic flux (Φ) as the total count of invisible magnetic field lines passing through a given area, measured in Webers (Wb). 1 Weber equals 100 million (10⁸) magnetic lines of force. It measures the total amount of magnetism passing through a surface!',
    hi: 'चुंबकीय फ्लक्स (Φ) को किसी दिए गए क्षेत्रफल से गुजरने वाली कुल अदृश्य चुंबकीय बल रेखाओं की संख्या समझें, जिसे वेबर (Wb) में मापा जाता है। 1 वेबर का अर्थ 10 करोड़ (10⁸) चुंबकीय रेखाएं हैं। यह किसी सतह से गुजरने वाले कुल चुंबकत्व को दर्शाता है!',
    bn: 'চৌম্বক ফ্লাক্স (Φ) হলো কোনো নির্দিষ্ট ক্ষেত্রফলের মধ্য দিয়ে অতিক্রান্ত মোট অদৃশ্য চৌম্বক বলরেখার সংখ্যা, যা ওয়েবার (Wb) এককে পরিমাপ করা হয়। ১ ওয়েবার মানে ১০ কোটি (১০⁸) চৌম্বক বলরেখা। এটি কোনো তলের মধ্য দিয়ে প্রবাহিত মোট চুম্বকত্বের পরিমাণ নির্দেশ করে!'
  },
  detailedExplanation: {
    en: `1. Magnetic Flux (Φ):
- Definition: The total number of magnetic lines of force passing perpendicular through a given surface in a magnetic field.
- SI Unit: Weber (Wb). 1 Weber = 1 Volt·second (V·s) = 1 Joule/Ampere (J/A).
- CGS Unit: Maxwell (Mx) or magnetic line.
- Conversion: 1 Weber = 10⁸ Maxwells (100 million lines of force).
- Symbol: Greek letter Phi (Φ).

2. Mathematical Formulation:
- For a uniform magnetic field: Φ = B · A · cos(θ) = B · A
  (where B = magnetic flux density in Tesla, A = surface area in m², θ = angle between magnetic field vector and the normal to the surface).
- In calculus notation for non-uniform fields: Φ = ∬ B · dA.

3. Fundamental Properties of Magnetic Flux Lines:
- Continuous Loops: Magnetic lines of force always form continuous, closed loops (Gauss's Law for Magnetism: ∮ B · dA = 0; isolated magnetic monopoles do not exist).
- Direction: Emerge from the North pole and enter the South pole in the external space; travel from South to North inside the magnet material.
- Mutual Repulsion: Parallel lines having the same direction repel each other laterally.
- Tension: They behave like stretched elastic cords under tension along their length.
- Non-intersecting: Two magnetic field lines can never cross each other because at any given point, the magnetic field vector has only one unique direction.

4. Solved Example:
A circular coil of radius 10 cm (0.1 m) is oriented in a uniform magnetic field of 0.5 Tesla. The normal to the plane of the coil makes an angle of 60° with the magnetic field lines. Calculate the total magnetic flux passing through the coil:
- Area A = π · r² = π · (0.1)² = 0.031416 m².
- Flux Φ = B · A · cos(60°) = 0.5 T × 0.031416 m² × 0.5 = 0.007854 Wb = 7.854 mWb.`,
    hi: `1. चुंबकीय फ्लक्स (Φ):
- परिभाषा: किसी चुंबकीय क्षेत्र में स्थित किसी सतह से लंबवत गुजरने वाली कुल चुंबकीय बल रेखाओं की संख्या।
- SI मात्रक: वेबर (Weber, Wb)। 1 Wb = 1 वोल्ट·सेकंड (V·s)।
- CGS मात्रक: मैक्सवेल (Maxwell, Mx)। 1 वेबर = 10⁸ मैक्सवेल (10 करोड़ रेखाएं)।

2. गणितीय सूत्र:
- समरूप चुंबकीय क्षेत्र के लिए: Φ = B · A · cos(θ)
  (जहाँ B = फ्लक्स घनत्व, A = क्षेत्रफल, θ = तल के अभिलंब और चुंबकीय क्षेत्र के बीच का कोण)।

3. चुंबकीय बल रेखाओं के गुण:
- बंद लूप: चुंबकीय रेखाएं सदैव बंद लूप बनाती हैं (गाउस का चुंबकत्व नियम: ∮ B · dA = 0)।
- दिशा: बाह्य रूप से उत्तरी ध्रुव से दक्षिणी ध्रुव की ओर तथा चुंबक के अंदर दक्षिण से उत्तर की ओर।
- कभी एक-दूसरे को नहीं काटतीं।

4. हल किया गया उदाहरण:
10 cm त्रिज्या वाली वृत्ताकार कुंडली (A = 0.0314 m²) 0.5 T के क्षेत्र में 60° कोण पर रखी है:
Φ = B · A · cos(60°) = 0.5 × 0.0314 × 0.5 = 7.854 mWb।`,
    bn: `১. চুম্বকীয় ফ্লাক্স (Φ - Magnetic Flux):
- সংজ্ঞা: কোনো চৌম্বক ক্ষেত্রে অবস্থিত কোনো তলের মধ্য দিয়ে লম্বভাবে অতিক্রান্ত মোট চৌম্বক বলরেখার সমষ্টিকে চৌম্বক ফ্লাক্স বলে।
- এসআই একক: ওয়েবার (Weber, Wb)। ১ ওয়েবার = ১ ভোল্ট·সেকেন্ড (V·s)।
- সিজিএস একক: ম্যাক্সওয়েল (Maxwell, Mx)। ১ ওয়েবার = ১০⁸ ম্যাক্সওয়েল (১০ কোটি বলরেখা)।

২. গাণিতিক সূত্র:
- সুষম চৌম্বক ক্ষেত্রে: Φ = B · A · cos(θ)
  (এখানে B = ফ্লাক্স ঘনত্ব, A = তলের ক্ষেত্রফল, θ = অভিলম্ব ভেক্টরের সাথে কোণ)।

৩. চৌম্বক বলরেখার বৈশিষ্ট্য:
- বদ্ধ লুপ গঠন করে (∮ B · dA = 0, একক মেরুর অস্তিত্ব নেই)।
- বাইরে উত্তর মেরু থেকে দক্ষিণ মেরুতে এবং চুম্বকের অভ্যন্তরে দক্ষিণ থেকে উত্তরে গমন করে।
- কখনো পরস্পরকে ছেদ করে না।

৪. গাণিতিক সমাধান:
১০ সেমি ব্যাসার্ধের কয়েল (A = ০.০৩১৪ m²) ০.৫ টেসলা চৌম্বক ক্ষেত্রে ৬০° কোণে থাকলে:
Φ = B · A · cos(60°) = ০.৫ × ০.০৩১৪ × ০.৫ = ৭.৮৫৪ mWb।`
  },
  formulas: [
    {
      expression: 'Φ = B · A · cos(θ)',
      description: {
        en: 'Magnetic flux through a surface area A inclined at angle θ to field normal',
        hi: 'अभिलंब से θ कोण पर झुकी सतह A से गुजरने वाला चुंबकीय फ्लक्स',
        bn: 'অভিলম্বের সাথে θ কোণে আনত তলের মধ্য দিয়ে প্রবাহিত চৌম্বক ফ্লাক্স'
      }
    },
    {
      expression: '1 Wb = 10^8 Maxwell = 1 V·s',
      description: {
        en: 'Unit equivalence of 1 Weber in CGS units and electrical units',
        hi: '1 वेबर की CGS मात्रक एवं विद्युत मात्रक में समानता',
        bn: 'সিজিএস এবং বৈদ্যুতিক এককে ১ ওয়েবারের সমতুল্য মান'
      }
    },
    {
      expression: '∮ B · dA = 0',
      description: {
        en: 'Gauss\'s Law for Magnetism (conservation of magnetic flux, no isolated poles)',
        hi: 'गाउस का चुंबकत्व नियम (चुंबकीय फ्लक्स का संरक्षण, कोई एकल ध्रुव नहीं)',
        bn: 'চুম্বকত্বের জন্য গাউসের সূত্র (চৌম্বক ফ্লাক্সের নিত্যতা, একক মেরু অসম্ভব)'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A rectangular surface of dimensions 20 cm × 25 cm is placed in a uniform magnetic field of 0.8 Tesla. The plane of the surface makes an angle of 30° with the direction of the magnetic field. Calculate the total magnetic flux passing through the surface.',
        hi: '20 cm × 25 cm आयाम वाली एक आयताकार सतह 0.8 टेस्ला के एकसमान चुंबकीय क्षेत्र में रखी है। सतह का तल चुंबकीय क्षेत्र की दिशा के साथ 30° का कोण बनाता है। सतह से गुजरने वाले कुल चुंबकीय फ्लक्स की गणना कीजिए।',
        bn: '২০ সেমি × ২৫ সেমি পরিমাপের একটি আয়তাকার তল ০.৮ টেসলা সুষম চৌম্বক ক্ষেত্রে স্থাপিত। তলটি চৌম্বক ক্ষেত্রের অভিমুখের সাথে ৩০° কোণ তৈরি করে। তলটির মধ্য দিয়ে অতিক্রান্ত মোট চৌম্বক ফ্লাক্স নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Calculate Surface Area: A = 0.20 m × 0.25 m = 0.05 m².\nStep 2: Find angle θ between the normal to the surface and magnetic field: θ = 90° - 30° = 60°.\nStep 3: Calculate flux: Φ = B × A × cos(θ) = 0.8 T × 0.05 m² × cos(60°) = 0.8 × 0.05 × 0.5 = 0.020 Wb = 20 mWb.',
        hi: 'चरण 1: क्षेत्रफल A = 0.20 m × 0.25 m = 0.05 m²।\nचरण 2: अभिलंब और चुंबकीय क्षेत्र के बीच कोण: θ = 90° - 30° = 60°।\nचरण 3: फ्लक्स Φ = B × A × cos(60°) = 0.8 × 0.05 × 0.5 = 0.02 Wb = 20 mWb।',
        bn: 'ধাপ ১: ক্ষেত্রফল A = ০.২০ m × ০.২৫ m = ০.০৫ m²।\nধাপ ২: তলের অভিলম্ব ও চৌম্বক ক্ষেত্রের অন্তর্ভুক্ত কোণ: θ = ৯০° - ৩০° = ৬০°।\nধাপ ৩: মোট ফ্লাক্স Φ = B × A × cos(60°) = ০.৮ × ০.০৫ × ০.৫ = ০.০২ Wb = ২০ mWb।'
      }
    },
    {
      problem: {
        en: 'A magnetic flux of 4.5 mWb passes perpendicularly through a core of cross-sectional area 30 cm². Express the magnetic flux in Maxwells (CGS units).',
        hi: '30 cm² अनुप्रस्थ काट वाले कोर से 4.5 mWb का चुंबकीय फ्लक्स लंबवत गुजरता है। इस चुंबकीय फ्लक्स को मैक्सवेल (CGS मात्रक) में व्यक्त कीजिए।',
        bn: '৩০ cm² প্রস্থচ্ছেদের একটি কোরের মধ্য দিয়ে ৪.৫ mWb চৌম্বক ফ্লাক্স লম্বভাবে অতিক্রম করে। এই চৌম্বক ফ্লাক্সকে ম্যাক্সওয়েলে (সিজিএস এককে) প্রকাশ করুন।'
      },
      solution: {
        en: 'Given: Φ = 4.5 mWb = 4.5 × 10⁻³ Wb.\nConversion: 1 Wb = 10⁸ Maxwell.\nΦ = 4.5 × 10⁻³ × 10⁸ = 4.5 × 10⁵ Maxwell = 450,000 Maxwell.',
        hi: 'दिया है: Φ = 4.5 mWb = 4.5 × 10⁻³ Wb।\nरूपांतरण: 1 Wb = 10⁸ मैक्सवेल।\nΦ = 4.5 × 10⁻³ × 10⁸ = 450,000 मैक्सवेल।',
        bn: 'দেওয়া আছে: Φ = ৪.৫ mWb = ৪.৫ × ১০⁻³ Wb।\nরূপান্তর: ১ Wb = ১০⁸ Maxwell।\nΦ = ৪.৫ × ১০⁻³ × ১০⁸ = ৪,৫০,০০০ Maxwell।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch9-l1-1',
      question: {
        en: 'What is the SI unit of magnetic flux (Φ)?',
        hi: 'चुंबकीय फ्लक्स (Φ) का SI मात्रक क्या है?',
        bn: 'চৌম্বক ফ্লাক্সের (Φ) এসআই একক কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Tesla (T)', hi: 'टेस्ला (T)', bn: 'টেসলা (T)' } },
        { id: 'opt-2', text: { en: 'Weber (Wb)', hi: 'वेबर (Wb)', bn: 'ওয়েবার (Wb)' } },
        { id: 'opt-3', text: { en: 'Henry (H)', hi: 'हेनरी (H)', bn: 'হেনরি (H)' } },
        { id: 'opt-4', text: { en: 'Ampere-turn (AT)', hi: 'एम्पीयर-टर्न (AT)', bn: 'অ্যাম্পিয়ার-টার্ন (AT)' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'The SI unit of magnetic flux is Weber (Wb), named in honour of Wilhelm Eduard Weber. 1 Wb = 1 V·s = 10⁸ Maxwell.',
        hi: 'चुंबकीय फ्लक्स का SI मात्रक वेबर (Wb) है। 1 Wb = 1 V·s = 10⁸ मैक्सवेल।',
        bn: 'চৌম্বক ফ্লাক্সের এসআই একক হলো ওয়েবার (Wb)। ১ Wb = ১ V·s = ১০⁸ ম্যাক্সওয়েল।'
      }
    },
    {
      id: 'mcq-ch9-l1-2',
      question: {
        en: 'How many Maxwells (CGS units) equal 1 Weber of magnetic flux?',
        hi: '1 वेबर चुंबकीय फ्लक्स कितने मैक्सवेल (CGS मात्रक) के बराबर होता है?',
        bn: '১ ওয়েবার চৌম্বক ফ্লাক্স সমান কত ম্যাক্সওয়েল (সিজিএস একক)?'
      },
      options: [
        { id: 'opt-1', text: { en: '10⁴ Maxwells', hi: '10⁴ मैक्सवेल', bn: '১০⁴ ম্যাক্সওয়েল' } },
        { id: 'opt-2', text: { en: '10⁶ Maxwells', hi: '10⁶ मैक्सवेल', bn: '১০⁶ ম্যাক্সওয়েল' } },
        { id: 'opt-3', text: { en: '10⁸ Maxwells', hi: '10⁸ मैक्सवेल', bn: '১০⁸ ম্যাক্সওয়েল' } },
        { id: 'opt-4', text: { en: '10¹⁰ Maxwells', hi: '10¹⁰ मैक्सवेल', bn: '১০¹⁰ ম্যাক্সওয়েল' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: '1 Weber is defined as exactly 10⁸ (100 million) CGS magnetic lines of force (Maxwells).',
        hi: '1 वेबर ठीक 10⁸ (10 करोड़) CGS चुंबकीय बल रेखाओं (मैक्सवेल) के बराबर होता है।',
        bn: '১ ওয়েবার ঠিক ১০⁸ (১০ কোটি) সিজিএস চৌম্বক বলরেখার (ম্যাক্সওয়েল) সমান।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch9-l1-1',
      question: {
        en: 'A magnetic field of 1.2 Tesla passes through a flat square surface of side 15 cm placed perpendicular to the field. Calculate the total magnetic flux in milliWebers (mWb).',
        hi: '1.2 टेस्ला का चुंबकीय क्षेत्र 15 cm भुजा वाली एक सपाट वर्गाकार सतह से लंबवत गुजरता है। कुल चुंबकीय फ्लक्स मिलीवेबर (mWb) में ज्ञात कीजिए।',
        bn: '১.২ টেসলা চৌম্বক ক্ষেত্র ১৫ সেমি বাহুবিশিষ্ট একটি বর্গাকার তলের মধ্য দিয়ে লম্বভাবে অতিক্রম করে। মোট চৌম্বক ফ্লাক্স মিলিওয়েবারে (mWb) নির্ণয় করুন।'
      },
      hint: {
        en: 'Area A = (0.15 m)² = 0.0225 m². Φ = B × A.',
        hi: 'क्षेत्रफल A = (0.15)² = 0.0225 m²। Φ = B × A।',
        bn: 'ক্ষেত্রফল A = (০.১৫)² = ০.০২২৫ m²। Φ = B × A।'
      },
      answerKey: {
        en: 'Φ = 1.2 T × 0.0225 m² = 0.027 Wb = 27 mWb.',
        hi: 'Φ = 1.2 × 0.0225 = 0.027 Wb = 27 mWb।',
        bn: 'Φ = ১.২ × ০.০২২৫ = ০.০২৭ Wb = ২৭ mWb।'
      }
    }
  ]
};

export const LESSON_FLUX_DENSITY: Lesson = {
  id: 'lsn-ch9-flux-density',
  topicId: 'tp-flux-density',
  chapterId: 'ch-magnetic-circuits',
  order: 2,
  title: {
    en: 'Magnetic Flux Density (B)',
    hi: 'चुंबकीय फ्लक्स घनत्व (B)',
    bn: 'চৌম্বক ফ্লাক্স ঘনত্ব (B)'
  },
  description: {
    en: 'Definition and engineering significance of Magnetic Flux Density (B = Φ / A in Tesla or Wb/m²), Tesla to Gauss conversion (1 T = 10,000 G), operating flux densities in transformers and rotating machines, and magnetic saturation limits.',
    hi: 'चुंबकीय फ्लक्स घनत्व (B = Φ / A, टेस्ला या Wb/m² में) की परिभाषा एवं इंजीनियरिंग महत्व, टेस्ला से गॉस रूपांतरण (1 T = 10,000 Gauss), ट्रांसफार्मर और घूर्णन मशीनों में कार्यशील फ्लक्स घनत्व तथा चुंबकीय संतृप्ति सीमाएं।',
    bn: 'চৌম্বক ফ্লাক্স ঘনত্বের (B = Φ / A, টেসলা বা Wb/m²-এ) সংজ্ঞা ও ইঞ্জিনিয়ারিং গুরুত্ব, টেসলা থেকে গাউস রূপান্তর (১ T = ১০,০০০ Gauss), ট্রান্সফরমার ও ঘূর্ণনশীল মেশিনের কার্যকর ফ্লাক্স ঘনত্ব এবং চৌম্বক স্যাচুরেশন সীমা।'
  },
  easyExplanation: {
    en: 'While magnetic flux is the total number of lines, Magnetic Flux Density (B) measures how tightly packed or concentrated those lines are in a 1 square meter cross-section (B = Φ / A), measured in Tesla (T). High flux density means a dense, powerful magnetic field capable of exerting large mechanical forces and high induced voltages!',
    hi: 'जहाँ चुंबकीय फ्लक्स कुल चुंबकीय रेखाओं की संख्या है, वहीं चुंबकीय फ्लक्स घनत्व (B) यह दर्शाता है कि 1 वर्ग मीटर क्षेत्र में ये रेखाएं कितनी घनी हैं (B = Φ / A), जिसे टेस्ला (T) में मापा जाता है। उच्च फ्लक्स घनत्व का अर्थ है अत्यधिक सघन एवं शक्तिशाली चुंबकीय क्षेत्र!',
    bn: 'চৌম্বক ফ্লাক্স হলো মোট বলরেখার সংখ্যা, আর ফ্লাক্স ঘনত্ব (B) পরিমাপ করে প্রতি ১ বর্গমিটার ক্ষেত্রফলে সেই রেখাগুলো কতটা ঘন সন্নিবিষ্ট (B = Φ / A), যার একক টেসলা (T)। উচ্চ ফ্লাক্স ঘনত্ব মানে অত্যন্ত শক্তিশালী ও নিবিড় চৌম্বক ক্ষেত্র যা প্রবল বল ও ভোল্টেজ উৎপন্ন করতে সক্ষম!'
  },
  detailedExplanation: {
    en: `1. Magnetic Flux Density (B):
- Definition: The magnetic flux passing perpendicularly through a unit cross-sectional area. It is also known as Magnetic Induction or Magnetic Field Density.
- Mathematical Formula: B = Φ / A
  (where Φ = magnetic flux in Webers, A = cross-sectional area in square meters perpendicular to flux).
- Vector Form: B = dΦ / dA_⊥.

2. Units and Conversions:
- SI Unit: Tesla (T) = 1 Weber / m² (Wb/m²). Named after Nikola Tesla.
- CGS Unit: Gauss (G). 1 Gauss = 1 Maxwell / cm² = 10⁻⁴ Tesla.
- Practical Conversion: 1 Tesla (T) = 10,000 Gauss (10⁴ G).

3. Practical Flux Densities in Engineering Applications:
- Earth's magnetic field: ~30 to 60 µT (0.3 to 0.6 Gauss).
- Ferrite permanent magnet: ~0.2 to 0.4 Tesla (2,000 to 4,000 Gauss).
- Neodymium (NdFeB) high-energy magnet: 1.0 to 1.4 Tesla.
- Silicon Steel transformer core (nominal operating point): 1.2 to 1.6 Tesla.
- CRGO (Cold Rolled Grain Oriented) transformer steel saturation: 1.8 to 2.0 Tesla.
- Medical MRI superconducting coils: 1.5 to 3.0 Tesla (up to 7.0 T in research).

4. Physical Importance in Electrical Machines:
- Induced EMF (Faraday's Law): e = B · l · v · sin(θ). A higher flux density B reduces the physical dimensions (size and weight) of generators and motors for a given power rating.
- Electromagnetic Force (Lorentz / Laplace): F = B · I · L · sin(θ). Torque in motors is directly proportional to B.
- Core Saturation: Operating above the knee point of the B-H curve causes excessive magnetizing current, core loss, and heating.

5. Solved Step-by-Step Example:
A laminated transformer iron core leg has a square cross-section of 8 cm × 8 cm (0.08 m × 0.08 m). The stacking factor of the laminations is 0.95 (due to insulating varnish). If the core carries a total peak magnetic flux of 7.6 mWb (0.0076 Wb), calculate the actual flux density in the iron core:
- Gross core area A_gross = 0.08 m × 0.08 m = 0.0064 m² (64 cm²).
- Net effective iron area A_net = A_gross × Stacking Factor = 0.0064 × 0.95 = 0.00608 m².
- Flux Density B = Φ / A_net = 0.0076 Wb / 0.00608 m² = 1.25 Tesla (12,500 Gauss).`,
    hi: `1. चुंबकीय फ्लक्स घनत्व (B):
- परिभाषा: किसी चुंबकीय क्षेत्र में एकांक अनुप्रस्थ काट क्षेत्रफल (1 m²) से लंबवत गुजरने वाला चुंबकीय फ्लक्स।
- सूत्र: B = Φ / A (वेबर/मी² या टेस्ला, T)।

2. मात्रक एवं रूपांतरण:
- SI मात्रक: टेस्ला (Tesla, T) = 1 Wb/m²।
- CGS मात्रक: गॉस (Gauss, G)।
- संबंध: 1 टेस्ला = 10,000 गॉस (10⁴ G)।

3. व्यावहारिक मान:
- पृथ्वी का चुंबकीय क्षेत्र: ~50 µT (0.5 G)।
- ट्रांसफॉर्मर कोर (सिलिकॉन स्टील): 1.2 से 1.6 T।
- नियोडिमियम चुंबक: 1.2 से 1.4 T।
- MRI मशीन: 1.5 से 3.0 T।

4. हल किया गया उदाहरण:
क्षेत्रफल A = 0.08 m × 0.08 m = 0.0064 m² (नेट आयरन A = 0.00608 m²), फ्लक्स Φ = 7.6 mWb:
B = 0.0076 / 0.00608 = 1.25 Tesla (12,500 Gauss)।`,
    bn: `১. চুম্বকীয় ফ্লাক্স ঘনত্ব (B - Flux Density):
- সংজ্ঞা: কোনো চৌম্বক ক্ষেত্রের প্রতি একক লম্ব ক্ষেত্রফলের মধ্য দিয়ে প্রবাহিত চৌম্বক ফ্লাক্সের পরিমাণকে ফ্লাক্স ঘনত্ব বলে।
- সূত্র: B = Φ / A (টেসলা বা Wb/m²)।

২. একক এবং রূপান্তর:
- এসআই একক: টেসলা (Tesla, T) = ১ Wb/m²।
- সিজিএস একক: গাউস (Gauss, G)।
- সম্পর্ক: ১ টেসলা (1 T) = ১০,০০০ গাউস (10⁴ Gauss)।

৩. ব্যবহারিক ক্ষেত্রে মান:
- পৃথিবীর চৌম্বক ক্ষেত্র: প্রায় ৫০ মাইক্রোটয়সলা (µT)।
- ট্রান্সফরমারের সিলিকন স্টিল কোর: ১.২ থেকে ১.৬ টেসলা।
- চিকিৎসাক্ষেত্রে MRI স্ক্যানার: ১.৫ থেকে ৩.০ টেসলা।

৪. উদাহরণ সমাধান:
কোর ক্ষেত্রফল A_net = ০.০০৬০৮ m², ফ্লাক্স Φ = ৭.৬ mWb:
B = ০.০০৭৬ / ০.০০৬০৮ = ১.২৫ টেসলা (১২,৫০০ গাউস)।`
  },
  formulas: [
    {
      expression: 'B = Φ / A',
      description: {
        en: 'Magnetic flux density in Tesla (Wb/m²)',
        hi: 'चुंबकीय फ्लक्स घनत्व (टेस्ला, Wb/m²)',
        bn: 'চৌম্বক ফ্লাক্স ঘনত্ব (টেসলা বা Wb/m²)'
      }
    },
    {
      expression: '1 Tesla = 1 Wb/m² = 10,000 Gauss',
      description: {
        en: 'Relationship between Tesla (SI) and Gauss (CGS)',
        hi: 'टेस्ला (SI) और गॉस (CGS) के बीच संबंध',
        bn: 'টেসলা (এসআই) এবং গাউস (সিজিএস)-এর মধ্যকার সম্পর্ক'
      }
    },
    {
      expression: 'F = B · I · L · sin(θ)',
      description: {
        en: 'Electromagnetic Lorentz force on current-carrying conductor in magnetic field B',
        hi: 'चुंबकीय क्षेत्र B में धारावाही चालक पर लॉरेंट्ज बल',
        bn: 'চৌম্বক ক্ষেত্র B-এ তড়িৎবাহী পরিবাহীর উপর লরেন্টজ বল'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A magnetic core with a cross-sectional area of 25 cm² carries a total magnetic flux of 3.5 mWb. Calculate the magnetic flux density B in both Tesla and Gauss.',
        hi: '25 cm² अनुप्रस्थ काट वाले एक चुंबकीय कोर में कुल 3.5 mWb का चुंबकीय फ्लक्स प्रवाहित होता है। चुंबकीय फ्लक्स घनत्व B की गणना टेस्ला और गॉस दोनों में कीजिए।',
        bn: '২৫ cm² প্রস্থচ্ছেদের একটি চৌম্বক কোরে মোট ৩.৫ mWb চৌম্বক ফ্লাক্স প্রবাহিত হয়। টেসলা এবং গাউস উভয় এককে চৌম্বক ফ্লাক্স ঘনত্ব B নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Convert area to m²: A = 25 cm² = 25 × 10⁻⁴ m² = 0.0025 m².\nStep 2: Convert flux to Webers: Φ = 3.5 mWb = 0.0035 Wb.\nStep 3: Calculate B in Tesla: B = Φ / A = 0.0035 Wb / 0.0025 m² = 1.4 Tesla.\nStep 4: Convert to Gauss: B = 1.4 × 10,000 = 14,000 Gauss.',
        hi: 'चरण 1: क्षेत्रफल A = 25 cm² = 0.0025 m²।\nचरण 2: फ्लक्स Φ = 3.5 mWb = 0.0035 Wb।\nचरण 3: B (टेस्ला में) = 0.0035 / 0.0025 = 1.4 Tesla।\nचरण 4: B (गॉस में) = 1.4 × 10,000 = 14,000 Gauss।',
        bn: 'ধাপ ১: ক্ষেত্রফল A = ২৫ cm² = ০.০০২৫ m²।\nধাপ ২: ফ্লাক্স Φ = ৩.৫ mWb = ০.০০৩৫ Wb।\nধাপ ৩: B (টেসলাতে) = ০.০০৩৫ / ০.০০২৫ = ১.৪ টেসলা।\nধাপ ৪: B (গাউসে) = ১.৪ × ১০,০০০ = ১৪,০০০ গাউস।'
      }
    },
    {
      problem: {
        en: 'An electromagnet pole face is circular with a diameter of 6 cm. If the working flux density is 1.6 Tesla, find the total magnetic flux Φ produced by the pole.',
        hi: 'एक विद्युत चुंबक का पोल फलक 6 cm व्यास वाला वृत्ताकार है। यदि कार्यशील फ्लक्स घनत्व 1.6 टेस्ला है, तो पोल द्वारा उत्पन्न कुल चुंबकीय फ्लक्स Φ ज्ञात कीजिए।',
        bn: 'একটি তড়িচ্চুম্বকের মেরু প্রান্ত ৬ সেমি ব্যাসের বৃত্তাকার। কার্যকর ফ্লাক্স ঘনত্ব ১.৬ টেসলা হলে, মেরু দ্বারা উৎপন্ন মোট চৌম্বক ফ্লাক্স Φ নির্ণয় করুন।'
      },
      solution: {
        en: 'Step 1: Radius r = d / 2 = 6 cm / 2 = 3 cm = 0.03 m.\nStep 2: Pole area A = π · r² = π · (0.03)² = 0.002827 m².\nStep 3: Total flux Φ = B × A = 1.6 T × 0.002827 m² = 0.004524 Wb = 4.524 mWb.',
        hi: 'चरण 1: त्रिज्या r = 3 cm = 0.03 m।\nचरण 2: क्षेत्रफल A = π × (0.03)² = 0.002827 m²।\nचरण 3: फ्लक्स Φ = B × A = 1.6 × 0.002827 = 0.004524 Wb = 4.524 mWb।',
        bn: 'ধাপ ১: ব্যাসার্ধ r = ৩ সেমি = ০.০৩ m।\nধাপ ২: ক্ষেত্রফল A = π × (০.০৩)² = ০.০০২৮২৭ m²।\nধাপ ৩: মোট ফ্লাক্স Φ = B × A = ১.৬ × ০.০০২৮২৭ = ০.০০৪৫২৪ Wb = ৪.৫২৪ mWb।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch9-l2-1',
      question: {
        en: '1 Tesla of magnetic flux density is equal to how many Gauss?',
        hi: '1 टेस्ला चुंबकीय फ्लक्स घनत्व कितने गॉस के बराबर होता है?',
        bn: '১ টেসলা চৌম্বক ফ্লাক্স ঘনত্ব কত গাউসের সমান?'
      },
      options: [
        { id: 'opt-1', text: { en: '100 Gauss', hi: '100 गॉस', bn: '১০০ গাউস' } },
        { id: 'opt-2', text: { en: '1,000 Gauss', hi: '1,000 गॉस', bn: '১,০০০ গাউস' } },
        { id: 'opt-3', text: { en: '10,000 Gauss', hi: '10,000 गॉस', bn: '১০,০০০ গাউস' } },
        { id: 'opt-4', text: { en: '100,000 Gauss', hi: '100,000 गॉस', bn: '১০০,০০০ গাউস' } }
      ],
      correctOptionId: 'opt-3',
      explanation: {
        en: '1 Tesla = 1 Wb/m² = 10⁴ Gauss (10,000 Gauss).',
        hi: '1 टेस्ला = 1 Wb/m² = 10,000 गॉस।',
        bn: '১ টেসলা = ১ Wb/m² = ১০,০০০ গাউস।'
      }
    },
    {
      id: 'mcq-ch9-l2-2',
      question: {
        en: 'What is the typical operating magnetic flux density (B) in modern power transformer silicon steel cores before saturation occurs?',
        hi: 'संतृप्ति (Saturation) से पहले आधुनिक पावर ट्रांसफॉर्मर सिलिकॉन स्टील कोर में विशिष्ट कार्यशील चुंबकीय फ्लक्स घनत्व (B) कितना होता है?',
        bn: 'স্যাচুরেশন ঘটার পূর্বে আধুনিক পাওয়ার ট্রান্সফরমারের সিলিকন স্টিল কোরে সাধারণ কার্যকর চৌম্বক ফ্লাক্স ঘনত্ব (B) কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '0.05 to 0.1 Tesla', hi: '0.05 से 0.1 टेस्ला', bn: '০.০৫ থেকে ০.১ টেসলা' } },
        { id: 'opt-2', text: { en: '1.2 to 1.6 Tesla', hi: '1.2 से 1.6 टेस्ला', bn: '১.২ থেকে ১.৬ টেসলা' } },
        { id: 'opt-3', text: { en: '5.0 to 7.5 Tesla', hi: '5.0 से 7.5 टेस्ला', bn: '৫.০ থেকে ৭.৫ টেসলা' } },
        { id: 'opt-4', text: { en: '15 to 20 Tesla', hi: '15 से 20 टेस्ला', bn: '১৫ থেকে ২০ টেসলা' } }
      ],
      correctOptionId: 'opt-2',
      explanation: {
        en: 'Modern transformer cores made of cold-rolled grain-oriented (CRGO) silicon steel typically operate around 1.2 to 1.6 Tesla to achieve high efficiency while avoiding saturation (which occurs near 1.8–2.0 T).',
        hi: 'सीआरजीओ (CRGO) सिलिकॉन स्टील से बने आधुनिक ट्रांसफार्मर कोर संतृप्ति से बचने के लिए सामान्यतः 1.2 से 1.6 टेस्ला पर कार्य करते हैं।',
        bn: 'সিআরজিও সিলিকন স্টিল নির্মিত আধুনিক ট্রান্সফরমার কোর স্যাচুরেশন এড়িয়ে উচ্চ দক্ষতা অর্জনের জন্য সাধারণত ১.২ থেকে ১.৬ টেসলা ফ্লাক্স ঘনত্বে কাজ করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch9-l2-1',
      question: {
        en: 'A magnetic circuit core has a cross-section of 40 cm². What is the magnetic flux density if the core carries 6.0 mWb of flux?',
        hi: 'एक चुंबकीय परिपथ कोर का अनुप्रस्थ काट 40 cm² है। यदि कोर में 6.0 mWb का फ्लक्स प्रवाहित होता है, तो चुंबकीय फ्लक्स घनत्व ज्ञात कीजिए।',
        bn: 'একটি চৌম্বক সার্কিটের কোরের প্রস্থচ্ছেদ ৪০ cm²। কোরে ৬.০ mWb ফ্লাক্স থাকলে চৌম্বক ফ্লাক্স ঘনত্ব কত হবে?'
      },
      hint: {
        en: 'Area A = 40 × 10⁻⁴ m² = 0.004 m². B = Φ / A.',
        hi: 'क्षेत्रफल A = 40 × 10⁻⁴ = 0.004 m²। B = Φ / A।',
        bn: 'ক্ষেত্রফল A = ৪০ × ১০⁻⁴ = ০.০০৪ m²। B = Φ / A।'
      },
      answerKey: {
        en: 'B = 0.006 Wb / 0.004 m² = 1.5 Tesla (15,000 Gauss).',
        hi: 'B = 0.006 / 0.004 = 1.5 Tesla (15,000 Gauss)।',
        bn: 'B = ০.০০৬ / ০.০০৪ = ১.৫ টেসলা (১৫,০০০ গাউস)।'
      }
    }
  ]
};
