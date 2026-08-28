import { Lesson } from '../types';

export const LESSON_SERIES_MAGNETIC_CIRCUIT: Lesson = {
  id: 'lsn-ch9-series-magnetic-circuit',
  topicId: 'tp-series-magnetic-circuit',
  chapterId: 'ch-magnetic-circuits',
  order: 9,
  title: {
    en: 'Series Magnetic Circuits, Composite Paths & Air Gaps',
    hi: 'श्रेणी चुंबकीय परिपथ, संयुक्त कोर एवं एयर गैप गणना',
    bn: 'সিরিজ চৌম্বক বর্তনী, যৌগিক কোর ও এয়ার গ্যাপ সমাধান'
  },
  description: {
    en: 'Analysis of composite series magnetic circuits with different materials, air-gap effects, fringing flux phenomenon, leakage coefficient, and step-by-step design calculation.',
    hi: 'विभिन्न पदार्थों के संयुक्त श्रेणी चुंबकीय परिपथ, एयर गैप का प्रभाव, फ्रिंजिंग फ्लक्स प्रभाव, लीकेज गुणांक एवं चरणबद्ध गणना।',
    bn: 'বিভিন্ন উপাদানের সমন্বয়ে গঠিত সিরিজ চৌম্বক বর্তনী, এয়ার গ্যাপের প্রভাব, ফ্রিঞ্জিং ফ্লাক্স, লিকেজ গুণক এবং ধাপে ধাপে গাণিতিক সমাধান।'
  },
  easyExplanation: {
    en: 'Just as resistors in series add up ($R_{total} = R_1 + R_2$), magnetic reluctances in series also add up ($S_{total} = S_{iron} + S_{gap}$). Even a tiny 1 mm air gap can create more reluctance than 50 cm of solid iron because air has a relative permeability of only 1!',
    hi: 'जैसे श्रेणी में प्रतिरोध जुड़ते हैं ($R_{total} = R_1 + R_2$), वैसे ही चुंबकीय रिलक्टेंस भी जुड़ते हैं ($S_{total} = S_{iron} + S_{gap}$)। एक छोटा 1 मिमी का एयर गैप भी 50 सेमी लोहे से अधिक रिलक्टेंस पैदा कर सकता है क्योंकि हवा का µᵣ केवल 1 होता है!',
    bn: 'সিরিজ বৈদ্যুতিক বর্তনীতে যেমন রোধগুলো যোগ হয় ($R_{total} = R_1 + R_2$), তেমনি সিরিজ চৌম্বক বর্তনীতেও মোট রিলাকট্যান্স যোগ হয় ($S_{total} = S_{iron} + S_{gap}$)। মাত্র ১ মিমি এয়ার গ্যাপও ৫০ সেমি লোহার চেয়ে বেশি বাধা সৃষ্টি করতে পারে কারণ বাতাসের আপেক্ষিক প্রবেশ্যতা মাত্র ১!'
  },
  detailedExplanation: {
    en: `1. Composite Series Magnetic Circuit:
- When a magnetic path consists of multiple sections with different lengths ($l_1, l_2$), different cross-sectional areas ($A_1, A_2$), or different permeabilities ($\mu_{r1}, \mu_{r2}$):
  $$S_{\text{total}} = S_1 + S_2 + S_3 + \dots = \sum_{k=1}^n \frac{l_k}{\mu_0 \mu_{rk} A_k}$$

2. Total MMF Required (Magnetic KVL):
- The total MMF needed to establish a working flux $\Phi$ through the series loop:
  $$MMF_{\text{total}} = N \cdot I = \Phi \cdot S_{\text{total}} = H_1 l_1 + H_2 l_2 + \dots + H_{\text{gap}} l_{\text{gap}}$$

3. Practical Air-Gap Phenomena:
- **A. High Reluctance:** Air has $\mu_r = 1$, whereas iron has $\mu_r = 1000 \sim 5000$. Hence, an air gap requires the largest share of total MMF.
- **B. Fringing Effect:** Near the edges of the air gap, magnetic flux lines repel each other and bulge outward into the surrounding space.
  - Effective gap area increases: $A_{\text{gap}} = (w + l_g)(h + l_g)$.
  - Consequently, actual flux density in the gap is slightly lower than inside the iron core.
- **C. Magnetic Leakage & Leakage Coefficient ($\lambda$):**
  $$\lambda = \frac{\text{Total Flux Produced by Coil } (\Phi_{\text{total}})}{\text{Useful Working Flux in Gap } (\Phi_{\text{useful}})} \approx 1.1 \text{ to } 1.3$$

4. Step-by-Step Solved Problem:
An iron ring with mean length $l_{\text{iron}} = 0.5\text{ m}$, area $A = 0.001\text{ m}^2$, and $\mu_r = 2000$ has a cut air gap of $l_g = 1\text{ mm} = 0.001\text{ m}$. We require a flux $\Phi = 1.2\text{ mWb} = 0.0012\text{ Wb}$.
- Step 1: Flux density $B = \Phi / A = 0.0012 / 0.001 = 1.2\text{ Tesla}$.
- Step 2: $H_{\text{iron}} = \frac{B}{\mu_0 \mu_r} = \frac{1.2}{4\pi \times 10^{-7} \times 2000} = 477.46\text{ AT/m}$.
  $MMF_{\text{iron}} = H_{\text{iron}} \times l_{\text{iron}} = 477.46 \times 0.5 = 238.73\text{ AT}$.
- Step 3: $H_{\text{gap}} = \frac{B}{\mu_0} = \frac{1.2}{4\pi \times 10^{-7}} = 954,929.6\text{ AT/m}$.
  $MMF_{\text{gap}} = H_{\text{gap}} \times l_g = 954,929.6 \times 0.001 = 954.93\text{ AT}$.
- Step 4: Total $MMF = 238.73 + 954.93 = 1193.66\text{ AT}$.
  *(Notice: The 1 mm air gap takes 80% of the total coil effort!)*`,
    hi: `1. संयुक्त श्रेणी परिपथ:
- कुल रिलक्टेंस S_total = S_iron + S_gap
- कुल MMF = H_iron · l_iron + H_gap · l_gap

2. फ्रिंजिंग प्रभाव (Fringing Effect):
- एयर गैप के किनारों पर फ्लक्स रेखाएं बाहर की ओर फैलती हैं जिससे प्रभावी क्षेत्रफल बढ़ जाता है।

3. लीकेज गुणांक (λ):
- λ = कुल फ्लक्स / उपयोगी फ्लक्स (सामान्यतः 1.1 - 1.25)।`,
    bn: `১. সিরিজ ম্যাগনেটিক সার্কিট:
- মোট রিলাকট্যান্স: $S_{total} = S_{core} + S_{gap} = \\frac{l_{core}}{\\mu_0 \\mu_r A} + \\frac{l_g}{\\mu_0 A}$
- মোট প্রয়োজনীয় MMF: $MMF = H_{core} l_{core} + H_g l_g$

২. ফ্রিঞ্জিং প্রভাব (Fringing Effect):
- এয়ার গ্যাপের প্রান্তে চৌম্বক বলরেখাগুলো পরস্পরের বিকর্ষণে বাইরের দিকে প্রসারিত বা স্ফীত হয়। এতে গ্যাপের কার্যকর ক্ষেত্রফল কিছুটা বৃদ্ধি পায়।

৩. লিকেজ গুণক ($\\lambda$):
- $\\lambda = \\frac{\\text{উৎপন্ন মোট ফ্লাক্স}}{\\text{কার্যকর কাজের ফ্লাক্স}}$`
  },
  formulas: [
    {
      expression: 'S_total = Σ [ l_k / (μ₀ · μ_rk · A_k) ]',
      description: {
        en: 'Total reluctance of series composite magnetic circuit',
        hi: 'श्रेणी परिपथ का कुल रिलक्टेंस',
        bn: 'সিরিজ চৌম্বক বর্তনীর মোট রিলাকট্যান্স'
      }
    },
    {
      expression: 'MMF_total = N · I = H₁·l₁ + H₂·l₂ + ... + H_g·l_g',
      description: {
        en: 'Magnetic KVL: Total MMF equals sum of individual magnetic potential drops',
        hi: 'कुल आवश्यक MMF सूत्र',
        bn: 'মোট প্রয়োজনীয় MMF সূত্র (চৌম্বকীয় KVL)'
      }
    }
  ],
  workedExamples: [
    {
      problem: {
        en: 'A magnetic core requires 300 AT for the iron section and 700 AT for the air gap. Find total MMF and current if the coil has 500 turns.',
        hi: 'एक चुंबकीय कोर में लोहे के लिए 300 AT और एयर गैप के लिए 700 AT चाहिए। यदि कॉइल में 500 फेरे हैं, तो कुल MMF और धारा ज्ञात करें।',
        bn: 'একটি চৌম্বক কোরের লোহার অংশের জন্য ৩০০ AT এবং এয়ার গ্যাপের জন্য ৭০০ AT প্রয়োজন। কয়েলে ৫০০ প্যাঁচ থাকলে মোট MMF এবং কারেন্ট কত?'
      },
      solution: {
        en: 'Total MMF = 300 + 700 = 1000 AT. Current I = MMF / N = 1000 / 500 = 2.0 Amperes.',
        hi: 'कुल MMF = 1000 AT. धारा I = 1000 / 500 = 2.0 A।',
        bn: 'মোট MMF = ৩০০ + ৭০০ = ১০০০ AT। কারেন্ট I = ১০০০ / ৫০০ = ২.০ অ্যাম্পিয়ার।'
      }
    }
  ]
};
