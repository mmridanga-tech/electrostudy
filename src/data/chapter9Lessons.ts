import { Lesson } from '../types';
import { LESSON_MMF_RELUCTANCE_PERMEABILITY } from './chapter9Lesson2';
import { LESSON_MAGNETIC_VS_ELECTRIC } from './chapter9Lesson3';
import { LESSON_RELUCTANCE_PERMEANCE } from './chapter9Lesson4';
import { LESSON_PERMEABILITY } from './chapter9Lesson5';
import { LESSON_MAGNETIC_FIELD_STRENGTH } from './chapter9Lesson6';
import { LESSON_AMPERES_LAW } from './chapter9Lesson7';
import { LESSON_SERIES_MAGNETIC_CIRCUIT } from './chapter9Lesson9';
import { LESSON_MAGNETIC_MATERIALS_BH_CURVE } from './chapter9Lesson10';

export const LESSON_MAGNETIC_FLUX_DENSITY: Lesson = {
  id: 'lsn-ch9-magnetic-flux-density',
  topicId: 'tp-magnetic-flux',
  chapterId: 'ch-magnetic-circuits',
  order: 1,
  title: {
    en: 'Magnetic Flux (Φ) & Magnetic Flux Density (B)',
    hi: 'चुंबकीय फ्लक्स (Φ) एवं चुंबकीय फ्लक्स घनत्व (B)',
    bn: 'চুম্বকীয় ফ্লাক্স (Φ) এবং ফ্লাক্স ঘনত্ব (B)'
  },
  description: {
    en: 'Fundamental definitions of magnetic lines of force, Total Magnetic Flux (Φ in Webers) and Magnetic Flux Density (B = Φ/A in Tesla / Wb/m²), vector area relationships, and practical calculation examples.',
    hi: 'चुंबकीय बल रेखाओं, कुल चुंबकीय फ्लक्स (Φ, वेबर में) और चुंबकीय फ्लक्स घनत्व (B = Φ/A, टेस्ला में) की मूलभूत परिभाषाएं, क्षेत्रफल सदिश संबंध एवं संख्यात्मक उदाहरण।',
    bn: 'চৌম্বক বলরেখার মৌলিক ধারণা, মোট চৌম্বক ফ্লাক্স (Φ, ওয়েবারে) এবং চৌম্বক ফ্লাক্স ঘনত্ব (B = Φ/A, টেসলা বা Wb/m²-এ), ক্ষেত্রফল ভেক্টর ও গাণিতিক উদাহরণ।'
  },
  easyExplanation: {
    en: 'Think of magnetic flux (Φ) as the total number of invisible magnetic field lines passing through a region, measured in Webers (Wb). Flux density (B) is how tightly packed those lines are in a 1 square meter area, measured in Tesla (T). High flux density means a stronger, more concentrated magnetic pull!',
    hi: 'चुंबकीय फ्लक्स (Φ) को किसी क्षेत्र से गुजरने वाली कुल चुंबकीय रेखाओं की संख्या समझें (मात्रक: वेबर, Wb)। फ्लक्स घनत्व (B) यह बताता है कि 1 वर्ग मीटर क्षेत्र में ये रेखाएं कितनी घनी हैं (मात्रक: टेस्ला, T)। अधिक फ्लक्स घनत्व का अर्थ है अधिक शक्तिशाली चुंबक!',
    bn: 'চৌম্বক ফ্লাক্স (Φ) হলো কোনো ক্ষেত্রের মধ্য দিয়ে অতিক্রমকারী মোট অদৃশ্য চৌম্বক বলরেখার সংখ্যা, যা ওয়েবার (Wb) এককে মাপা হয়। আর ফ্লাক্স ঘনত্ব (B) নির্দেশ করে প্রতি ১ বর্গমিটার জায়গায় এই রেখাগুলো কতটা ঘন সন্নিবিষ্ট (একক: টেসলা, T)। ফ্লাক্স ঘনত্ব যত বেশি, চুম্বকত্ব তত বেশি শক্তিশালী!'
  },
  detailedExplanation: {
    en: `1. Magnetic Flux (Φ):
- Definition: The total magnetic field or number of magnetic field lines passing perpendicular through a given surface.
- SI Unit: Weber (Wb). 1 Weber = 10^8 Maxwell (CGS unit) = 1 Volt·second (V·s).
- Symbol: Greek letter Phi (Φ).

2. Magnetic Flux Density (B):
- Definition: The amount of magnetic flux passing perpendicular through a unit surface area.
- Formula: B = Φ / A
- In vector form for surface inclined at angle θ: Φ = B · A · cos(θ) = ∫ B · dA
- SI Unit: Tesla (T) = 1 Weber / m² (Wb/m²).
- CGS Unit: Gauss (G). 1 Tesla = 10,000 Gauss (10^4 G).

3. Real-world Values of Flux Density (B):
- Earth's magnetic field: ~30 to 60 µT (0.3 to 0.6 Gauss).
- Typical refrigerator magnet: ~5 mT to 10 mT (50 to 100 Gauss).
- Neodymium permanent magnet: 1.0 to 1.4 Tesla.
- Electric motor / Transformer iron core operating limit: 1.2 to 1.8 Tesla (before core saturation).
- Medical MRI scanner: 1.5 to 3.0 Tesla (superconducting electromagnets).

4. Solved Example:
A transformer core has a cross-sectional area of 25 cm² (0.0025 m²). If the total magnetic flux in the core is 3.5 mWb (0.0035 Wb), calculate the flux density B:
B = Φ / A = 0.0035 Wb / 0.0025 m² = 1.4 Tesla (Wb/m²).`,
    hi: `1. चुंबकीय फ्लक्स (Φ):
- परिभाषा: किसी बंद सतह या क्षेत्रफल से लंबवत गुजरने वाली कुल चुंबकीय रेखाएं।
- SI मात्रक: वेबर (Weber, Wb)। 1 Wb = 10^8 मैक्सवेल = 1 वोल्ट-सेकंड।

2. चुंबकीय फ्लक्स घनत्व (B):
- परिभाषा: एकांक क्षेत्रफल (1 m²) से लंबवत गुजरने वाला फ्लक्स।
- सूत्र: B = Φ / A (टेस्ला, T = Wb/m²)।
- 1 टेस्ला = 10,000 गॉस (Gauss)।

3. ट्रांसफार्मर कोर उदाहरण:
क्षेत्रफल A = 25 cm² = 0.0025 m², फ्लक्स Φ = 3.5 mWb = 0.0035 Wb
B = 0.0035 / 0.0025 = 1.4 T।`,
    bn: `১. চুম্বকীয় ফ্লাক্স (Φ - Magnetic Flux):
- সংজ্ঞা: কোনো নির্দিষ্ট তলের মধ্য দিয়ে লম্বভাবে অতিক্রান্ত মোট চৌম্বক বলরেখার সমষ্টিকে চৌম্বক ফ্লাক্স বলে।
- এসআই একক (SI Unit): ওয়েবার (Weber, Wb)। ১ ওয়েবার = ১০^৮ ম্যাক্সওয়েল (CGS) = ১ ভোল্ট-সেকেন্ড (V·s)।

২. চুম্বকীয় ফ্লাক্স ঘনত্ব (B - Flux Density):
- সংজ্ঞা: কোনো চৌম্বক ক্ষেত্রের প্রতি একক লম্ব ক্ষেত্রফলের মধ্য দিয়ে প্রবাহিত চৌম্বক ফ্লাক্সের পরিমাণকে ফ্লাক্স ঘনত্ব বলে।
- সূত্র: B = Φ / A (এখানে Φ = ফ্লাক্স এবং A = ক্ষেত্রফল)।
- এসআই একক: টেসলা (Tesla, T) অথবা Wb/m²।
- ১ টেসলা (1 T) = ১০,০০০ গাউস (Gauss, G)।

৩. বাস্তব উদাহরণ ও মান:
- পৃথিবীর চৌম্বক ক্ষেত্র: প্রায় ৫০ মাইক্রোটয়সলা (µT)।
- ট্রান্সফরমার বা মোটরের কোর: ১.২ থেকে ১.৮ টেসলা।
- চিকিৎসাক্ষেত্রে MRI মেশিন: ১.৫ থেকে ৩.০ টেসলা।`
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
      expression: 'Φ = B · A · cos(θ)',
      description: {
        en: 'Total magnetic flux through an inclined surface area',
        hi: 'झुकी हुई सतह से गुजरने वाला कुल फ्लक्स',
        bn: 'কৌণিক তলের মধ্য দিয়ে অতিক্রান্ত মোট ফ্লাক্স'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A coil cross-section of 0.004 m² is subjected to a uniform field of 1.5 Tesla. Calculate total flux Φ.',
        hi: '0.004 m² क्षेत्रफल वाली कॉइल 1.5 टेस्ला के एकसमान चुंबकीय क्षेत्र में रखी है। कुल फ्लक्स Φ ज्ञात कीजिए।',
        bn: '০.০০৪ m² ক্ষেত্রফলের একটি কয়েল ১.৫ টেসলা সুষম চৌম্বক ক্ষেত্রে স্থাপিত হলে মোট ফ্লাক্স Φ নির্ণয় করুন।'
      },
      solution: {
        en: 'Φ = B × A = 1.5 T × 0.004 m² = 0.006 Wb = 6.0 mWb.',
        hi: 'Φ = B × A = 1.5 × 0.004 = 0.006 Wb (6.0 mWb)।',
        bn: 'Φ = B × A = ১.৫ × ০.০০৪ = ০.০০৬ Wb (৬.০ mWb)।'
      }
    }
  ]
};

export const CHAPTER_9_LESSONS: Record<string, Lesson> = {
  'tp-magnetic-flux': LESSON_MAGNETIC_FLUX_DENSITY,
  'tp-flux-density': LESSON_MAGNETIC_FLUX_DENSITY,
  'tp-mmf': LESSON_MMF_RELUCTANCE_PERMEABILITY,
  'tp-reluctance': LESSON_RELUCTANCE_PERMEANCE,
  'tp-permeability': LESSON_PERMEABILITY,
  'tp-magnetic-field-strength': LESSON_MAGNETIC_FIELD_STRENGTH,
  'tp-amperes-law': LESSON_AMPERES_LAW,
  'tp-mag-vs-elec-circuit': LESSON_MAGNETIC_VS_ELECTRIC,
  'tp-series-magnetic-circuit': LESSON_SERIES_MAGNETIC_CIRCUIT,
  'tp-magnetic-materials': LESSON_MAGNETIC_MATERIALS_BH_CURVE,
  'ch9-magnetic-flux': LESSON_MAGNETIC_FLUX_DENSITY,
  'ch9-magnetic-circuits': LESSON_MAGNETIC_FLUX_DENSITY
};

export {
  LESSON_MMF_RELUCTANCE_PERMEABILITY,
  LESSON_MAGNETIC_VS_ELECTRIC,
  LESSON_RELUCTANCE_PERMEANCE,
  LESSON_PERMEABILITY,
  LESSON_MAGNETIC_FIELD_STRENGTH,
  LESSON_AMPERES_LAW,
  LESSON_SERIES_MAGNETIC_CIRCUIT,
  LESSON_MAGNETIC_MATERIALS_BH_CURVE
};
