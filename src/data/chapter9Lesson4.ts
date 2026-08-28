import { Lesson } from '../types';

export const LESSON_RELUCTANCE_PERMEANCE: Lesson = {
  id: 'lsn-ch9-reluctance-permeance',
  topicId: 'tp-reluctance',
  chapterId: 'ch-magnetic-circuits',
  order: 4,
  title: {
    en: 'Magnetic Reluctance (S) & Permeance (Λ)',
    hi: 'चुंबकीय रिलक्टेंस (S) एवं पर्मिएंस (Λ)',
    bn: 'চৌম্বক রিলাকট্যান্স (S) এবং পারমিয়েন্স (Λ)'
  },
  description: {
    en: 'In-depth study of magnetic reluctance S = l / (µ₀µᵣA) in AT/Wb, permeance Λ = 1/S in Henry, factors affecting reluctance, and comparison with electrical resistance.',
    hi: 'चुंबकीय रिलक्टेंस S = l / (µ₀µᵣA) (AT/Wb), पर्मिएंस Λ = 1/S (हेनरी), रिलक्टेंस को प्रभावित करने वाले कारक एवं विद्युत प्रतिरोध से तुलना।',
    bn: 'চৌম্বক রিলাকট্যান্স S = l / (µ₀µᵣA) (AT/Wb), পারমিয়েন্স Λ = 1/S (হেনরি), রিলাকট্যান্স নিয়ন্ত্রণকারী উপাদান এবং বৈদ্যুতিক রোধের সাথে তুলনা।'
  },
  easyExplanation: {
    en: 'Reluctance is the magnetic equivalent of electrical resistance. It represents how strongly a material resists the creation of magnetic flux lines. Permeance is the exact opposite (like conductance)—it measures how easily magnetic flux flows through a path!',
    hi: 'रिलक्टेंस विद्युत प्रतिरोध का चुंबकीय समतुल्य है। यह दर्शाता है कि कोई पदार्थ चुंबकीय फ्लक्स बनने का कितना विरोध करता है। पर्मिएंस इसका ठीक उल्टा (चालकता जैसा) है—यह बताता है कि फ्लक्स कितनी आसानी से गुजर सकता है!',
    bn: 'রিলাকট্যান্স হলো বৈদ্যুতিক রোধের চৌম্বকীয় রূপ। কোনো উপাদান চৌম্বক বলরেখা তৈরিতে কতটা বাধা দেয় তা রিলাকট্যান্স প্রকাশ করে। আর পারমিয়েন্স হলো এর বিপরীত (পরিবাহিতার মতো)—যা প্রকাশ করে চৌম্বক ফ্লাক্স কত সহজে প্রবাহিত হতে পারে!'
  },
  detailedExplanation: {
    en: `1. Definition of Reluctance (S or $\\mathcal{R}$):
- Magnetic reluctance is the property of a magnetic circuit that opposes the passage of magnetic flux lines through it.
- Mathematical Formula:
  $$S = \\frac{l}{\\mu \\cdot A} = \\frac{l}{\\mu_0 \\mu_r A}$$
  where:
  - $l$ = mean length of the magnetic path in meters (m)
  - $A$ = cross-sectional area of magnetic core in square meters ($m^2$)
  - $\\mu_0$ = permeability of free space = $4\\pi \\times 10^{-7}$ H/m
  - $\\mu_r$ = relative permeability of core material (dimensionless)
- SI Unit: Ampere-turns per Weber (AT/Wb) or $Henry^{-1}$ ($1/H$).

2. Factors Affecting Reluctance:
- **Length of Magnetic Path ($l$):** Directly proportional ($S \\propto l$). A longer magnetic core has greater reluctance.
- **Cross-Sectional Area ($A$):** Inversely proportional ($S \\propto 1/A$). A thicker core offers a wider path, reducing reluctance.
- **Relative Permeability ($\\mu_r$):** Inversely proportional ($S \\propto 1/\\mu_r$). High-permeability materials like silicon steel or permalloy drastically reduce reluctance.

3. Definition of Permeance ($\\Lambda$ or $\\mathcal{P}$):
- The reciprocal or inverse of magnetic reluctance; analogous to electrical conductance ($G = 1/R$).
- Formula:
  $$\\Lambda = \\frac{1}{S} = \\frac{\\mu_0 \\mu_r A}{l}$$
- SI Unit: Henry (H) or Webers per Ampere-turn (Wb/AT).

4. Solved Problem:
An iron ring has a mean length of 0.8 m and a cross-sectional area of 12 cm² ($12 \\times 10^{-4} m^2$). If $\\mu_r = 1200$, calculate the reluctance and permeance:
- $S = \\frac{0.8}{(4\\pi \\times 10^{-7}) \\times 1200 \\times (12 \\times 10^{-4})} = \\frac{0.8}{1.8095 \\times 10^{-6}} = 442,111\\text{ AT/Wb}$.
- $\\Lambda = \\frac{1}{S} = 2.26 \\times 10^{-6}\\text{ H} = 2.26\\text{ }\\mu\\text{H}$.`,
    hi: `1. रिलक्टेंस (S):
- सूत्र: S = l / (µ₀ µᵣ A) (मात्रक: AT/Wb या H⁻¹)।
- यह फ्लक्स प्रवाह के विरोध का माप है।

2. पर्मिएंस (Λ):
- सूत्र: Λ = 1 / S = (µ₀ µᵣ A) / l (मात्रक: हेनरी, H)।

3. उदाहरण:
l = 0.8 m, A = 0.0012 m², µᵣ = 1200
S = 442,111 AT/Wb, Λ = 2.26 µH।`,
    bn: `১. রিলাকট্যান্স (S - Reluctance):
- সংজ্ঞা: চৌম্বক বর্তনীতে চৌম্বক ফ্লাক্স সৃষ্টিতে যে বাধা অনুভূত হয় তাকে রিলাকট্যান্স বলে।
- গাণিতিক সূত্র:
  $$S = \\frac{l}{\\mu_0 \\mu_r A}$$
- একক: অ্যাম্পিয়ার-টার্ন পার ওয়েবার (AT/Wb) বা হেনরি$^{-1}$ ($H^{-1}$)।

২. রিলাকট্যান্সের নির্ভরতা:
- কোরের দৈর্ঘ্য $l$-এর সমানুপাতিক।
- কোরের প্রস্থচ্ছেদের ক্ষেত্রফল $A$-এর ব্যস্তানুপাতিক।
- উপাদানের প্রবেশ্যতা $\\mu_r$-এর ব্যস্তানুপাতিক।

৩. পারমিয়েন্স ($\\Lambda$ - Permeance):
- রিলাকট্যান্সের বিপরীত রাশিকে পারমিয়েন্স বলে ($\\Lambda = 1/S$)।
- একক: হেনরি (H) বা Wb/AT।`
  },
  formulas: [
    {
      expression: 'S = l / (μ₀ · μᵣ · A)',
      description: {
        en: 'Reluctance in Ampere-turns per Weber (AT/Wb)',
        hi: 'रिलक्टेंस सूत्र (AT/Wb)',
        bn: 'রিলাকট্যান্স নির্ণয়ের সূত্র (AT/Wb)'
      }
    },
    {
      expression: 'Λ = 1 / S = (μ₀ · μᵣ · A) / l',
      description: {
        en: 'Permeance in Henry (H) or Wb/AT',
        hi: 'पर्मिएंस सूत्र (Henry)',
        bn: 'পারমিয়েন্স নির্ণয়ের সূত্র (Henry বা Wb/AT)'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'Calculate the reluctance of an air gap of length 2 mm (0.002 m) and area 0.0025 m².',
        hi: '2 मिमी लंबाई और 0.0025 m² क्षेत्रफल वाले एयर गैप का रिलक्टेंस ज्ञात करें।',
        bn: '২ মিমি (০.০০২ মি) দৈর্ঘ্যের এবং ০.০০২৫ m² ক্ষেত্রফলের একটি এয়ার গ্যাপের রিলাকট্যান্স নির্ণয় করুন।'
      },
      solution: {
        en: 'For air, μr = 1. S = 0.002 / (4π × 10⁻⁷ × 1 × 0.0025) = 0.002 / (3.1416 × 10⁻⁹) = 636,620 AT/Wb.',
        hi: 'S = 0.002 / (4π × 10⁻⁷ × 1 × 0.0025) = 636,620 AT/Wb।',
        bn: 'বাতাসের জন্য μr = ১। S = ০.০০২ / (৪π × ১০⁻⁷ × ১ × ০.০০২৫) = ৬৩৬,৬২০ AT/Wb।'
      }
    }
  ]
};
