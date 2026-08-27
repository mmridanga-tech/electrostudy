import { Lesson } from '../types';

export const LESSON_TYPES_OF_INDUCTORS: Lesson = {
  id: 'lsn-ch8-types-of-inductors',
  topicId: 'ch8-types-of-inductors',
  chapterId: 'ch-inductors',
  order: 15,
  title: {
    en: 'Types of Inductors: Construction, Cores & Selection Guide',
    hi: 'इंडक्टर के प्रकार: संरचना, कोर एवं चयन गाइड',
    bn: 'ইন্ডাক্টরের প্রকারভেদ: গঠন, কোর ও নির্বাচন গাইড'
  },
  description: {
    en: 'Comprehensive classification of inductors: Air-core, iron-core, ferrite-core (drum, toroid, pot core), laminated core, molded SMD power inductors, multilayer ceramic chip inductors, planar inductors, and variable/slug-tuned inductors.',
    hi: 'इंडक्टरों का संपूर्ण वर्गीकरण: वायु-कोर, लौह-कोर, फेराइट-कोर (ड्रम, टॉरॉइड, पॉट), लेमिनेटेड कोर, एसएमडी पावर इंडक्टर, मल्टीलेयर चिप इंडक्टर एवं ट्यून करने योग्य इंडक्टर।',
    bn: 'ইন্ডাক্টরের পূর্ণাঙ্গ শ্রেণিবিন্যাস: এয়ার-কোর, আয়রন-কোর, ফেরাইট-কোর (ড্রাম, টরয়েড, পট), লেমিনেটেড কোর, এসএমডি পাওয়ার ইন্ডাক্টর, মাল্টিলেয়ার সিরামিক চিপ ও টিউনযোগ্য ইন্ডাক্টর।'
  },
  easyExplanation: {
    en: 'Inductors come in an incredible variety of shapes and sizes depending on their application! Air-core inductors never saturate but need lots of space for high frequencies; ferrite toroids pack large inductance into tiny spaces with zero magnetic leakage; and microscopic SMD chips are soldered right onto your smartphone motherboard.',
    hi: 'इंडक्टर विभिन्न आकारों और प्रकारों में आते हैं! वायु-कोर इंडक्टर कभी संतृप्त नहीं होते और उच्च आवृत्तियों (RF) के लिए आदर्श होते हैं; फेराइट टॉरॉइड बिना किसी चुंबकीय रिसाव के छोटी जगह में बड़ा प्रेरकत्व देते हैं; और सूक्ष्म SMD चिप्स सीधे स्मार्टफोन मदरबोर्ड पर लगाए जाते हैं।',
    bn: 'প্রয়োগভেদে ইন্ডাক্টর নানা আকার ও উপাদানে তৈরি হয়! এয়ার-কোর ইন্ডাক্টর কখনোই স্যাচুরেট হয় না এবং RF ফ্রিকোয়েন্সিতে শ্রেষ্ঠ; ফেরাইট টরয়েড কোনো চৌম্বক লিকেজ ছাড়াই ক্ষুদ্র স্থানে উচ্চ ইন্ডাক্ট্যান্স দেয়; এবং ক্ষুদ্রাতিক্ষুদ্র SMD চিপ সরাসরি স্মার্টফোনের মাদারবোর্ডে সোল্ডার করা থাকে।'
  },
  detailedExplanation: {
    en: `1. Classification by Core Material & Construction:

A. Air-Core Inductors (Solenoids & Flat Spirals):
- Core: Non-magnetic former (plastic, ceramic, or self-supporting air coil).
- Advantages: Zero core losses, perfectly linear B-H response, ZERO magnetic saturation regardless of current.
- Disadvantages: Very low inductance per turn (μr = 1), physically bulky, emits stray magnetic fields.
- Applications: High-frequency RF transmitters, VHF/UHF tuning, crossover networks.

B. Iron-Core & Laminated Steel Inductors:
- Core: Silicon electrical steel sheets (0.27 - 0.5 mm) laminated to reduce eddy currents.
- Advantages: Extremely high saturation flux density (B_sat ≈ 1.6 to 2.0 T), high energy storage at low 50/60 Hz mains frequency.
- Applications: Fluorescent ballasts, audio filter chokes, power substation reactors.

C. Ferrite-Core Inductors (Ceramic Ferromagnetic):
- Core: Manganese-Zinc (MnZn) for < 2 MHz, Nickel-Zinc (NiZn) for > 2 MHz to 100 MHz.
- Advantages: High magnetic permeability (μr = 500 to 15,000) combined with immense electrical resistivity (ρ > 10⁶ Ω·m), virtually eliminating eddy current losses.
- Geometries:
  1. Toroidal (Donut): Closed magnetic loop, zero air gap, minimal EMI stray radiation.
  2. Drum / Bobbin Core: Cost-effective for power supplies (often shielded with ferrite collar).
  3. Pot Core / E-Core / Planar: Fully enclosed magnetic shield for DC-DC SMPS converters.

D. Molded SMD Shielded Power Inductors:
- Core: Carbonyl powder / alloy metal powder pressed around copper coils under extreme pressure.
- Features: Soft saturation characteristics, ultra-low DCR (Direct Current Resistance), magnetically shielded against cross-talk.
- Applications: Buck converters in motherboards, laptops, GPUs, automotive ECUs.

E. Multilayer Ceramic Chip Inductors:
- Microscopic monolithic ceramic sintered components in 0402, 0603, 0805 packages.
- Ideal for GHz-range RF impedance matching, Bluetooth, Wi-Fi 6, and 5G cellular antennas.

F. Variable / Slug-Tuned Inductors:
- A threaded ferrite or brass tuning slug is screwed into the coil center to adjust inductance by ±20% to ±50%.`,
    hi: `1. इंडक्टरों का प्रमुख वर्गीकरण:
- एयर-कोर (Air-Core): शून्य कोर हानि, कभी संतृप्त नहीं होता, RF ट्रांसमीटर में उपयोगी।
- लेमिनेटेड आयरन कोर: 50/60 Hz एसी मेन लाइन चोक, उच्च संतृप्ति (2.0 T)।
- फेराइट टॉरॉइड (Toroid): बंद चुंबकीय पथ, कोई चुंबकीय रिसाव नहीं, उच्च दक्षता।
- शील्डेड SMD पावर इंडक्टर: कंप्यूटर, मदरबोर्ड एवं मोबाइल चार्जर में उच्च धारा SMPS के लिए।
- वेरिएबल इंडक्टर: स्क्रू द्वारा फेराइट कोर को अंदर-बाहर करके मान बदलने योग्य।`,
    bn: `১. ইন্ডাক্টরের প্রধান প্রকারভেদ:
- এয়ার-কোর: শূন্য কোর লস, কখনোই স্যাচুরেট হয় না, RF ট্রান্সমিটারে ব্যবহৃত।
- লেমিনেটেড আয়রন কোর: ৫০/৬০ Hz মেইনস ফিল্টার ও চোক, উচ্চ স্যাচুরেশন (২.০ T)।
- ফেরাইট টরয়েড (Toroid): সম্পূর্ণ আবদ্ধ চৌম্বক পথ, কোনো EMI লিকেজ নেই।
- শিল্ডেড SMD পাওয়ার ইন্ডাক্টর: কম্পিউটার মাদারবোর্ড, ল্যাপটপ ও মোবাইল চার্জার SMPS সার্কিটে।
- ভেরিয়েবল ইন্ডাক্টর: স্ক্রু ঘুরিয়ে কোর সমন্বয় করে ইন্ডাক্ট্যান্স পরিবর্তনযোগ্য।`
  },
  formulas: [
    {
      expression: 'L_{air} = \\frac{\\mu_0 N^2 A}{l}',
      description: {
        en: 'Inductance of air-core solenoid (μr = 1)',
        hi: 'वायु-कोर परिनालिका का प्रेरकत्व (μr = 1)',
        bn: 'এয়ার-কোর সলিনয়েডের ইন্ডাক্ট্যান্স (μr = ১)'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'Compare an air-core inductor with a MnZn ferrite toroidal inductor having identical turns N = 50, length l = 4 cm, and area A = 1.0 cm². Given μr = 2,500 for the ferrite, calculate the inductance for both.',
        hi: 'समान फेरे N = 50, l = 4 cm एवं A = 1.0 cm² वाले एयर-कोर एवं फेराइट (μr = 2500) टॉरॉइड इंडक्टर के प्रेरकत्व की तुलना करें।',
        bn: 'একই পাকসংখ্যা N = ৫০, দৈর্ঘ্য l = ৪ cm এবং ক্ষেত্রফল A = ১.০ cm² বিশিষ্ট একটি এয়ার-কোর ও ফেরাইট (μr = ২৫০০) টরয়েডাল ইন্ডাক্টরের ইন্ডাক্ট্যান্স তুলনা করো।'
      },
      solution: {
        en: `Given:
N = 50, l = 0.04 m, A = 1.0 × 10⁻⁴ m²
μ0 = 4π × 10⁻⁷ H/m

1. Air-Core Inductor (μr = 1):
L_air = (μ0 · 1 · N² · A) / l
L_air = (4π × 10⁻⁷ × 1 × 2500 × 10⁻⁴) / 0.04
L_air = (3.1416 × 10⁻⁷) / 0.04 = 7.854 × 10⁻⁶ H = 7.85 μH.

2. Ferrite-Core Toroidal Inductor (μr = 2,500):
L_ferrite = μr · L_air = 2,500 × 7.854 μH = 19,635 μH = 19.64 mH!
(The ferrite core multiplies inductance by 2,500 times in the exact same physical size!).`,
        hi: `1. एयर कोर: L = (4π × 10⁻⁷ × 2500 × 10⁻⁴) / 0.04 = 7.85 μH
2. फेराइट कोर: L = 2500 × 7.85 μH = 19.64 mH (2,500 गुना अधिक!)।`,
        bn: `১. এয়ার কোর: L = (৪π × ১০⁻⁷ × ২৫০০ × ১০⁻⁴) / ০.০৪ = ৭.৮৫ μH
২. ফেরাইট কোর: L = ২৫০০ × ৭.৮৫ μH = ১৯.৬৪ mH (২৫০০ গুণ বেশি!)।`
      }
    }
  ],
  quiz: [
    {
      question: {
        en: 'Why are toroidal (donut-shaped) ferrite cores preferred for high-performance switched-mode power supplies (SMPS)?',
        hi: 'उच्च दक्षता वाली SMPS पावर सप्लाई के लिए टॉरॉइडल (डोनट के आकार वाले) फेराइट कोर को प्राथमिकता क्यों दी जाती है?',
        bn: 'উচ্চ দক্ষতার SMPS পাওয়ার সাপ্লাইয়ের জন্য কেন টরয়েডাল (ডোনাট আকৃতির) ফেরাইট কোর সবচেয়ে বেশি ব্যবহৃত হয়?'
      },
      options: {
        en: ['Because they have zero resistance', 'Because the closed circular magnetic path contains virtually all magnetic flux with near-zero EMI radiation', 'Because they work only on pure DC', 'Because they are made of solid steel'],
        hi: ['क्योंकि उनका प्रतिरोध शून्य होता है', 'क्योंकि बंद वृत्ताकार चुंबकीय पथ लगभग शून्य EMI रिसाव के साथ सारा फ्लक्स बांधकर रखता है', 'क्योंकि वे केवल शुद्ध DC पर काम करते हैं', 'क्योंकि वे ठोस स्टील के बने होते हैं'],
        bn: ['কারণ এদের রোধ শূন্য', 'কারণ আবদ্ধ বৃত্তাকার পথ চৌম্বক ফ্লাক্স আটকে রেখে ইলেক্ট্রোম্যাগনেটিক লিকেজ (EMI) প্রায় শূন্য রাখে', 'কারণ এরা শুধু ডিসিতে কাজ করে', 'কারণ এরা নিরেট ইস্পাত দ্বারা নির্মিত']
      },
      correctAnswer: 1,
      explanation: {
        en: 'Toroidal cores form a continuous closed magnetic loop without air gaps or exposed pole ends, preventing stray magnetic fields from interfering with neighboring sensitive electronics.',
        hi: 'टॉरॉइडल कोर एक सतत बंद चुंबकीय लूप बनाते हैं, जिससे चुंबकीय क्षेत्र बाहर नहीं लीक होता और आस-पास के सर्किट में शोर नहीं होता।',
        bn: 'টরয়েডাল কোর একটি সম্পূর্ণ আবদ্ধ পথ তৈরি করে যার ফলে কোনো চৌম্বক লিকেজ হয় না এবং পাশের সার্কিটে কোনো নয়েজ সৃষ্টি হয় না।'
      }
    }
  ],
  flashcards: [
    {
      term: {
        en: 'Toroidal Inductor',
        hi: 'टॉरॉइडल इंडक्टर',
        bn: 'টরয়েডাল ইন্ডাক্টর'
      },
      definition: {
        en: 'A donut-shaped inductor offering maximum permeability and minimum electromagnetic radiation due to its closed continuous magnetic loop.',
        hi: 'डोनट के आकार का इंडक्टर जो बंद चुंबकीय पथ के कारण न्यूनतम EMI रिसाव प्रदान करता है।',
        bn: 'ডোনাট আকৃতির ইন্ডাক্টর যা আবদ্ধ চৌম্বক পথের কারণে সর্বনিম্ন EMI বিকিরণ ও সর্বোচ্চ কার্যকারিতা দেয়।'
      }
    }
  ]
};
