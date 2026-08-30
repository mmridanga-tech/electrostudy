import { Lesson } from '../types';

export const LESSON_MAGNETIC_CIRCUITS: Lesson = {
  id: 'lsn-ch6-magnetic-circuits',
  topicId: 'ch6-magnetic-circuits',
  chapterId: 'ch-electrical-machines',
  order: 10,
  title: {
    en: 'Magnetic Circuits & Electromagnetic Principles',
    hi: 'चुंबकीय परिपथ एवं विद्युतचुंबकीय सिद्धांत',
    bn: 'ম্যাগনেটিক সার্কিট ও তড়িচ্চুম্বকীয় মূলনীতি'
  },
  description: {
    en: 'Magnetic flux, MMF, reluctance, permeability, series magnetic circuits with air gaps, and Faraday/Lenz electromagnetic laws.',
    hi: 'चुंबकीय फ्लक्स, MMF, रिलक्टेंस, पारगम्यता, एयर-गैप युक्त चुंबकीय परिपथ एवं फैराडे/लेन्ज़ के विद्युतचुंबकीय नियम।',
    bn: 'চৌম্বক ফ্লাক্স, MMF, রিলাক্ট্যান্স, প্রবেশ্যতা, এয়ার-গ্যাপযুক্ত ম্যাগনেটিক সার্কিট এবং ফ্যারাডে ও লেনজের তড়িচ্চুম্বকীয় সূত্র।'
  },
  easyExplanation: {
    en: 'A magnetic circuit is a closed path followed by magnetic flux lines. Just as an electromotive force (EMF) drives electric current through electrical resistance in an electric circuit, a magnetomotive force (MMF = N·I) drives magnetic flux (Φ) through magnetic reluctance (ℜ) in a magnetic circuit.',
    hi: 'चुंबकीय परिपथ वह बंद मार्ग है जिसमें चुंबकीय फ्लक्स रेखाएँ प्रवाहित होती हैं। जैसे विद्युत परिपथ में वोल्टेज (EMF) प्रतिरोध के विरुद्ध धारा प्रवाहित करता है, वैसे ही चुंबकीय परिपथ में चुंबकवाहक बल (MMF = N·I) रिलक्टेंस के विरुद्ध चुंबकीय फ्लक्स (Φ) प्रवाहित करता है।',
    bn: 'ম্যাগনেটিক সার্কিট হলো চৌম্বক ফ্লাক্স প্রবাহের একটি সম্পূর্ণ আবদ্ধ পথ। যেমন তড়িৎ বর্তনীতে EMF রোধের মধ্য দিয়ে কারেন্ট প্রবাহিত করে, তেমনি ম্যাগনেটিক সার্কিটে ম্যাগনেটোমোটিভ ফোর্স (MMF = N·I) রিলাক্ট্যান্সের মধ্য দিয়ে চৌম্বক ফ্লাক্স (Φ) প্রবাহিত করে।'
  },
  detailedExplanation: {
    en: `1. Definition of a Magnetic Circuit:
A magnetic circuit is the closed path or trajectory along which magnetic flux lines (Φ) circulate, typically formed using high-permeability ferromagnetic materials like laminated silicon steel or cast iron.

2. Fundamental Magnetic Quantities:
- Magnetic Flux (Φ): The total number of magnetic lines of force passing through a surface, measured in Webers (Wb). 1 Wb = 10⁸ Maxwells (lines).
- Magnetic Flux Density (B): Magnetic flux per unit area perpendicular to flux direction: B = Φ / A [Tesla (T) or Wb/m²].
- Magnetomotive Force (MMF, ℱ): The magnetic potential difference that establishes flux in a magnetic circuit, produced by a current I flowing through a coil of N turns: ℱ = N · I [Ampere-turns (A·t) or A].
- Magnetic Reluctance (ℜ): The opposition offered by a magnetic material or air gap to the establishment of magnetic flux: ℜ = l / (μ · A) = l / (μ₀ · μ_r · A) [A·t/Wb or H⁻¹].
- Magnetic Permeability (μ): The ability of a medium to conduct magnetic flux: μ = μ₀ · μ_r [Henry/meter, H/m].
  * μ₀ = 4π × 10⁻⁷ H/m ≈ 1.2566 × 10⁻⁶ H/m (Permeability of free space/air).
  * μ_r = Relative permeability (dimensionless; ~1 for air, 1000 to 5000 for silicon steel).
- Magnetic Field Intensity / Magnetizing Force (H): The MMF per unit path length: H = ℱ / l = (N · I) / l = B / μ [Ampere-turns/meter, A·t/m or A/m].

3. Ohm's Law for Magnetic Circuits:
Analogue to V = I · R:
Magnetic Flux Φ = MMF / Total Reluctance = ℱ / ℜ_tot = (N · I) / ℜ_tot

4. Electrical vs. Magnetic Circuit Analogy:
- Driving Potential: Electromotive Force (EMF, Volts) ↔ Magnetomotive Force (MMF, Ampere-turns).
- Flow Quantity: Electric Current (I = V/R, Amperes) ↔ Magnetic Flux (Φ = ℱ/ℜ, Webers).
- Opposition: Resistance (R = ρl/A = l/σA, Ω) ↔ Reluctance (ℜ = l/μA, A·t/Wb).
- Conductivity: Electrical Conductivity (σ, S/m) ↔ Magnetic Permeability (μ, H/m).
- Density: Current Density (J = I/A, A/m²) ↔ Flux Density (B = Φ/A, Tesla).
- Field Intensity: Electric Field (E = V/l, V/m) ↔ Magnetic Field Intensity (H = ℱ/l, A/m).

5. Series Magnetic Circuits & Air Gaps:
In practical machines (motors, generators), rotating parts require a physical mechanical air gap.
Because μ_r for air is exactly 1, the reluctance of even a 1 mm air gap can exceed that of a 1-meter steel core:
ℜ_total = ℜ_core + ℜ_gap = [ l_core / (μ₀ · μ_r · A_core) ] + [ l_gap / (μ₀ · A_gap) ]
Total MMF required: ℱ_total = H_core · l_core + H_gap · l_gap.

6. Fringing & Magnetic Leakage:
- Magnetic Leakage: Not all flux produced links the intended useful path; some leaks through surrounding air (Leakage coefficient λ = Total Flux / Useful Flux > 1).
- Fringing Effect: At an air gap, magnetic lines repel each other and bulge outward, effectively increasing the cross-sectional area of the gap (A_gap > A_core), slightly reducing gap flux density B_gap.

7. Faraday's Law & Lenz's Law:
- Faraday's Law: The magnitude of induced EMF in a coil is directly proportional to the rate of change of magnetic flux linkages: e = -N (dΦ / dt).
- Lenz's Law: The direction of the induced EMF is always such as to oppose the change in magnetic flux that produced it (indicated by the negative sign).

8. Directional Rules:
- Fleming's Right-Hand Rule (Generators): Thumb = Motion of conductor, Forefinger = Magnetic Field (N to S), Middle finger = Induced EMF/Current direction.
- Fleming's Left-Hand Rule (Motors): Thumb = Thrust/Force direction, Forefinger = Magnetic Field, Middle finger = Input Current direction.`,
    hi: `1. चुंबकीय परिपथ की परिभाषा:
चुंबकीय परिपथ वह बंद मार्ग है जिसके अनुदिश चुंबकीय फ्लक्स (Φ) प्रवाहित होता है, जो आमतौर पर सिलिकॉन स्टील जैसे उच्च पारगम्यता वाले पदार्थों से बना होता है।

2. मूलभूत चुंबकीय राशियाँ:
- चुंबकीय फ्लक्स (Φ): किसी सतह से गुजरने वाली कुल बल रेखाएं, मात्रक वेबर (Wb)।
- फ्लक्स घनत्व (B): प्रति एकांक क्षेत्रफल फ्लक्स, B = Φ / A [टेस्ला (T)]।
- चुंबकवाहक बल (MMF, ℱ): फ्लक्स स्थापित करने वाला बल, ℱ = N · I [एम्पीयर-टर्न (A·t)]।
- रिलक्टेंस (ℜ): चुंबकीय फ्लक्स के मार्ग में विरोध, ℜ = l / (μ₀·μ_r·A) [A·t/Wb]।
- पारगम्यता (μ): माध्यम की चुंबकीय चालकता, μ = μ₀ · μ_r (μ₀ = 4π × 10⁻⁷ H/m)।
- चुंबकीय क्षेत्र तीव्रता (H): प्रति एकांक लंबाई MMF, H = (N·I) / l = B / μ [A/m]।

3. चुंबकीय ओम का नियम:
फ्लक्स Φ = MMF / कुल रिलक्टेंस = (N · I) / ℜ_tot।

4. विद्युत एवं चुंबकीय परिपथ में समानता:
- EMF (V) ↔ MMF (ℱ = NI)
- धारा (I) ↔ फ्लक्स (Φ)
- प्रतिरोध (R = l/σA) ↔ रिलक्टेंस (ℜ = l/μA)
- चालकता (σ) ↔ पारगम्यता (μ)

5. एयर-गैप का प्रभाव:
हवा की आपेक्षिक पारगम्यता μ_r = 1 होने के कारण, 1 मिमी का छोटा एयर-गैप भी कुल परिपथ के अधिकांश MMF की खपत करता है।
ℜ_tot = ℜ_core + ℜ_gap।

6. फैराडे एवं लेन्ज़ का नियम:
- फैराडे का नियम: e = -N (dΦ / dt)।
- लेन्ज़ का नियम: प्रेरित EMF सदैव उस कारण का विरोध करता है जिससे वह उत्पन्न हुआ है।

7. फ्लेमिंग के नियम:
- दाएँ हाथ का नियम (Right-Hand Rule): जनरेटर में प्रेरित धारा की दिशा।
- बाएँ हाथ का नियम (Left-Hand Rule): मोटर में लगने वाले बल की दिशा।`,
    bn: `১. ম্যাগনেটিক সার্কিট কী?
ম্যাগনেটিক সার্কিট হলো এমন একটি আবদ্ধ পথ যার মধ্য দিয়ে চৌম্বক ফ্লাক্স (Φ) প্রবাহিত হয়। এটি সাধারণত সিলিকন স্টিলের মতো উচ্চ প্রবেশ্যতাবিশিষ্ট চৌম্বক পদার্থ দিয়ে গঠিত হয়।

২. মৌলিক চৌম্বকীয় রাশিসমূহ:
- চৌম্বক ফ্লাক্স (Φ): মোট বলরেখার সংখ্যা, একক ওয়েবার (Wb)।
- ফ্লাক্স ঘনত্ব (B): প্রতি একক ক্ষেত্রফলে ফ্লাক্স, B = Φ / A [টেসলা (T)]।
- ম্যাগনেটোমোটিভ ফোর্স (MMF, ℱ): ফ্লাক্স সৃষ্টিকারী চৌম্বক বিভব, ℱ = N · I [অ্যাম্পিয়ার-প্যাঁচ (A·t)]।
- রিলাক্ট্যান্স (ℜ): ফ্লাক্স প্রবাহে বাধা, ℜ = l / (μ₀·μ_r·A) [A·t/Wb]।
- চৌম্বক প্রবেশ্যতা (μ): মাধ্যমটির ফ্লাক্স পরিবহনের ক্ষমতা, μ = μ₀ · μ_r (μ₀ = ৪π × ১০⁻⁷ H/m)।
- ফিল্ড তীব্রতা (H): প্রতি একক দৈর্ঘ্যে MMF, H = (N·I) / l = B / μ [A/m]।

৩. ম্যাগনেটিক ওহমের সূত্র:
ফ্লাক্স Φ = MMF / মোট রিলাক্ট্যান্স = (N · I) / ℜ_tot।

৪. তড়িৎ ও চৌম্বক সার্কিটের তুলনা:
- EMF (V) ↔ MMF (ℱ = NI)
- কারেন্ট (I) ↔ ফ্লাক্স (Φ)
- রোধ (R = l/σA) ↔ রিলাক্ট্যান্স (ℜ = l/μA)
- পরিবাহিতা (σ) ↔ প্রবেশ্যতা (μ)

৫. এয়ার-গ্যাপের প্রভাব:
বায়ুর μ_r = ১ হওয়ায় অতি ক্ষুদ্র এয়ার-গ্যাপও সার্কিটের মোট রিলাক্ট্যান্স বহুগুণ বাড়িয়ে দেয়।

৬. ফ্যারাডে ও লেনজের সূত্র:
- ফ্যারাডের সূত্র: e = -N (dΦ / dt)।
- লেনজের সূত্র: আবিষ্ট EMF সর্বদা তার উৎপত্তির কারণকে বাধা দেয়।

৭. ফ্লেমিংয়ের নিয়মাবলী:
- ডান হাত নিয়ম (Right-Hand Rule): জেনারেটরে আবিষ্ট EMF-এর দিক।
- বাম হাত নিয়ম (Left-Hand Rule): মোটরে প্রযুক্ত যান্ত্রিক বলের দিক।`
  },
  formulas: [
    {
      symbol: 'Φ',
      expression: '\\Phi = \\frac{\\mathcal{F}}{\\mathcal{R}} = \\frac{N \\cdot I}{\\mathcal{R}_{\\text{total}}}',
      description: {
        en: "Ohm's Law for Magnetic Circuits (Flux Φ in Webers, MMF in A·t, Reluctance ℜ in A·t/Wb)",
        hi: 'चुंबकीय परिपथ के लिए ओम का नियम (फ्लक्स Φ वेबर में)',
        bn: 'ম্যাগনেটিক সার্কিটের ওহমের সূত্র (ফ্লাক্স Φ ওয়েবারে)'
      }
    },
    {
      symbol: 'ℜ',
      expression: '\\mathcal{R} = \\frac{l}{\\mu A} = \\frac{l}{\\mu_0 \\mu_r A}',
      description: {
        en: 'Reluctance of a magnetic path (l in meters, A in m², μ₀ = 4π×10⁻⁷ H/m)',
        hi: 'चुंबकीय पथ का रिलक्टेंस (l मीटर में, A वर्ग मीटर में)',
        bn: 'চৌম্বক পথের রিলাক্ট্যান্স (l মিটারে, A বর্গমিটারে)'
      }
    },
    {
      symbol: 'B',
      expression: 'B = \\frac{\\Phi}{A} = \\mu H = \\mu_0 \\mu_r H',
      description: {
        en: 'Magnetic Flux Density (Tesla or Wb/m²)',
        hi: 'चुंबकीय फ्लक्स घनत्व (टेस्ला या Wb/m²)',
        bn: 'চৌম্বক ফ্লাক্স ঘনত্ব (টেসলা)'
      }
    },
    {
      symbol: 'H',
      expression: 'H = \\frac{\\mathcal{F}}{l} = \\frac{N \\cdot I}{l}',
      description: {
        en: 'Magnetic Field Intensity / Magnetizing Force (Ampere-turns per meter, A/m)',
        hi: 'चुंबकीय क्षेत्र तीव्रता (A/m में)',
        bn: 'চৌম্বক ক্ষেত্রের তীব্রতা (A/m এককে)'
      }
    },
    {
      symbol: 'e',
      expression: 'e = -N \\frac{d\\Phi}{dt}',
      description: {
        en: "Faraday's Law of Electromagnetic Induction with Lenz's Law",
        hi: 'फैराडे का विद्युतचुंबकीय प्रेरण नियम एवं लेन्ज़ का नियम',
        bn: 'লেনজের নিয়মসহ ফ্যারাডের তড়িচ্চুম্বকীয় আবেশের সূত্র'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-magnetic-circuit',
      title: {
        en: 'Magnetic Circuit with Air Gap & Electrical Equivalent Analogy',
        hi: 'एयर-गैप युक्त चुंबकीय परिपथ एवं विद्युत समतुल्य सादृश्य',
        bn: 'এয়ার-গ্যাপযুক্ত ম্যাগনেটিক সার্কিট ও বৈদ্যুতিক সমতুল্য রূপ'
      },
      caption: {
        en: 'Series magnetic circuit with excitation coil, ferromagnetic core, air gap, and corresponding lumped reluctance circuit.',
        hi: 'उत्तेजना कॉइल, लौहचुंबकीय कोर, एयर-गैप और संबंधित रिलक्टेंस परिपथ को दर्शाने वाला आरेख।',
        bn: 'উত্তেজনা কয়েল, ফেরোম্যাগনেটিক কোর, এয়ার-গ্যাপ এবং সংশ্লিষ্ট রিলাক্ট্যান্স সমতুল্য সার্কিট ডায়াগ্রাম।'
      },
      svgType: 'magnetic-circuit'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch6-mag-reluctance',
      problem: {
        en: 'A mild-steel ring has a mean circumference length of l = 0.5 m and a uniform circular cross-sectional area of A = 10 cm² (0.001 m²). The relative permeability of the steel is μ_r = 1200. Calculate the magnetic reluctance (ℜ) of the ring in A·t/Wb.',
        hi: 'एक माइल्ड स्टील रिंग की औसत परिधि लंबाई l = 0.5 m और एकसमान क्रॉस-सेक्शनल क्षेत्रफल A = 10 cm² है। स्टील की आपेक्षिक पारगम्यता μ_r = 1200 है। रिंग के चुंबकीय रिलक्टेंस (ℜ) की गणना करें।',
        bn: 'একটি মাইল্ড স্টিল রিংয়ের গড় পরিধি l = ০.৫ m এবং সুষম প্রস্থচ্ছেদের ক্ষেত্রফল A = ১০ cm²। স্টিলের আপেক্ষিক প্রবেশ্যতা μ_r = ১২০০ হলে রিংটির রিলাক্ট্যান্স (ℜ) A·t/Wb এককে নির্ণয় করুন।'
      },
      solution: {
        en: `Given:
- Mean core length l = 0.5 m
- Cross-sectional area A = 10 cm² = 10 × 10⁻⁴ m² = 0.001 m²
- Relative permeability μ_r = 1200
- Permeability of free space μ₀ = 4π × 10⁻⁷ H/m ≈ 1.25664 × 10⁻⁶ H/m

Formula:
Reluctance ℜ = l / (μ₀ · μ_r · A)

Substitution:
ℜ = 0.5 / (4π × 10⁻⁷ × 1200 × 0.001)
ℜ = 0.5 / (1.50796 × 10⁻⁶)

Calculation:
ℜ = 331,572.8 A·t/Wb = 3.316 × 10⁵ A·t/Wb (or 331.6 kA·t/Wb)

Final Answer:
Magnetic Reluctance ℜ = 3.316 × 10⁵ A·t/Wb.`,
        hi: `दिया गया है:
- कोर लंबाई l = 0.5 m
- क्षेत्रफल A = 10 cm² = 0.001 m²
- μ_r = 1200, μ₀ = 4π × 10⁻⁷ H/m

सूत्र:
ℜ = l / (μ₀ · μ_r · A)

मान रखने पर:
ℜ = 0.5 / (4π × 10⁻⁷ × 1200 × 0.001) = 0.5 / (1.508 × 10⁻⁶) = 331,573 A·t/Wb

उत्तर:
रिलक्टेंस ℜ = 3.316 × 10⁵ A·t/Wb (331.6 kA·t/Wb)।`,
        bn: `প্রদত্ত:
- দৈর্ঘ্য l = ০.৫ m
- ক্ষেত্রফল A = ১০ cm² = ০.০০১ m²
- μ_r = ১২০০, μ₀ = ৪π × ১০⁻⁷ H/m

সূত্র:
ℜ = l / (μ₀ · μ_r · A)

মান বসিয়ে:
ℜ = ০.৫ / (৪π × ১০⁻⁷ × ১২০০ × ০.০০১) = ৩,৩১,৫৭৩ A·t/Wb

উত্তর:
রিলাক্ট্যান্স ℜ = ৩.৩১৬ × ১০⁵ A·t/Wb (৩৩১.৬ kA·t/Wb)।`
      },
      givenValues: {
        'Mean Length (l)': '0.5 m',
        'Cross-Section Area (A)': '10 cm² (0.001 m²)',
        'Relative Permeability (μ_r)': '1200'
      },
      finalAnswer: {
        en: 'Reluctance ℜ = 3.316 × 10⁵ A·t/Wb (331.6 kA·t/Wb)',
        hi: 'रिलक्टेंस ℜ = 3.316 × 10⁵ A·t/Wb (331.6 kA·t/Wb)',
        bn: 'রিলাক্ট্যান্স ℜ = ৩.৩১৬ × ১০⁵ A·t/Wb (৩৩১.৬ kA·t/Wb)'
      }
    },
    {
      id: 'ex-ch6-mag-flux',
      problem: {
        en: 'A magnetic core with total reluctance ℜ = 2.5 × 10⁵ A·t/Wb is energized by a coil consisting of N = 400 turns carrying a direct current of I = 2.5 A. Calculate: (a) Magnetomotive force (MMF), (b) Total magnetic flux (Φ) in mWb, and (c) Flux density (B) if core area is A = 20 cm².',
        hi: 'एक चुंबकीय कोर जिसका कुल रिलक्टेंस ℜ = 2.5 × 10⁵ A·t/Wb है, N = 400 टर्न और I = 2.5 A धारा वाली कॉइल से उत्तेजित किया जाता है। ज्ञात करें: (a) चुंबकवाहक बल (MMF), (b) कुल फ्लक्स (Φ) mWb में, और (c) फ्लक्स घनत्व (B) यदि क्षेत्रफल A = 20 cm² है।',
        bn: 'একটি চৌম্বক কোর যার মোট রিলাক্ট্যান্স ℜ = ২.৫ × ১০⁵ A·t/Wb, N = ৪০০ প্যাঁচ ও I = ২.৫ A কারেন্টবাহী কয়েল দ্বারা চালিত। নির্ণয় করুন: (a) MMF, (b) মোট ফ্লাক্স (Φ) mWb তে, এবং (c) ফ্লাক্স ঘনত্ব (B) যদি কোরের ক্ষেত্রফল A = ২০ cm² হয়।'
      },
      solution: {
        en: `Given:
- Total Reluctance ℜ = 2.5 × 10⁵ A·t/Wb
- Turns N = 400
- Current I = 2.5 A
- Core Cross-Section Area A = 20 cm² = 20 × 10⁻⁴ m² = 0.002 m²

Formulae:
1. MMF ℱ = N · I
2. Flux Φ = ℱ / ℜ
3. Flux Density B = Φ / A

Substitution & Calculation:
(a) MMF ℱ = 400 × 2.5 = 1000 A·t (Ampere-turns)
(b) Flux Φ = 1000 / (2.5 × 10⁵) = 0.004 Wb = 4.0 mWb (4.0 × 10⁻³ Wb)
(c) Flux Density B = 0.004 / 0.002 = 2.0 Tesla (T)

Final Answer:
- MMF = 1000 A·t
- Flux Φ = 4.0 mWb
- Flux Density B = 2.0 T`,
        hi: `दिया गया है:
- रिलक्टेंस ℜ = 2.5 × 10⁵ A·t/Wb
- टर्न्स N = 400, धारा I = 2.5 A
- क्षेत्रफल A = 0.002 m²

गणना:
(a) MMF ℱ = 400 × 2.5 = 1000 A·t
(b) फ्लक्स Φ = 1000 / (2.5 × 10⁵) = 4.0 mWb
(c) फ्लक्स घनत्व B = 0.004 / 0.002 = 2.0 T

उत्तर:
MMF = 1000 A·t, फ्लक्स = 4.0 mWb, B = 2.0 T।`,
        bn: `প্রদত্ত:
- রিলাক্ট্যান্স ℜ = ২.৫ × ১০⁵ A·t/Wb
- প্যাঁচ N = ৪০০, কারেন্ট I = ২.৫ A
- ক্ষেত্রফল A = ০.০০২ m²

হিসাব:
(a) MMF ℱ = ৪০০ × ২.৫ = ১০০০ A·t
(b) ফ্লাক্স Φ = ১০০০ / (২.৫ × ১০⁵) = ৪.০ mWb
(c) ফ্লাক্স ঘনত্ব B = ০.০০৪ / ০.০০২ = ২.০ T

উত্তর:
MMF = ১০০০ A·t, ফ্লাক্স = ৪.০ mWb, B = ২.০ T।`
      },
      givenValues: {
        'Reluctance (ℜ)': '2.5 × 10⁵ A·t/Wb',
        'Turns (N)': '400',
        'Current (I)': '2.5 A',
        'Area (A)': '20 cm² (0.002 m²)'
      },
      finalAnswer: {
        en: 'MMF = 1000 A·t, Flux Φ = 4.0 mWb, Flux Density B = 2.0 T',
        hi: 'MMF = 1000 A·t, फ्लक्स Φ = 4.0 mWb, फ्लक्स घनत्व B = 2.0 T',
        bn: 'MMF = ১০০০ A·t, ফ্লাক্স Φ = ৪.০ mWb, ফ্লাক্স ঘনত্ব B = ২.০ T'
      }
    },
    {
      id: 'ex-ch6-airgap-analysis',
      problem: {
        en: 'A magnetic circuit consists of a cast-steel core of mean length l_c = 0.8 m (μ_r = 1600) and an air gap of length l_g = 2.0 mm (0.002 m). The core cross-sectional area is uniformly A = 25 cm² (0.0025 m²). Calculate: (a) Core reluctance ℜ_c, (b) Air gap reluctance ℜ_g, (c) Total reluctance ℜ_total, and (d) Percentage of total reluctance contributed by the 2 mm air gap.',
        hi: 'एक चुंबकीय परिपथ में औसत लंबाई l_c = 0.8 m (μ_r = 1600) का कास्ट स्टील कोर और l_g = 2.0 mm का एयर-गैप है। कोर का क्षेत्रफल A = 25 cm² है। गणना करें: (a) कोर रिलक्टेंस ℜ_c, (b) एयर-गैप रिलक्टेंस ℜ_g, (c) कुल रिलक्टेंस ℜ_total, और (d) 2 mm एयर-गैप का प्रतिशत योगदान।',
        bn: 'একটি ম্যাগনেটিক সার্কিটে গড় দৈর্ঘ্য l_c = ০.৮ m (μ_r = ১৬০০) বিশিষ্ট স্টিল কোর এবং l_g = ২.০ mm এয়ার-গ্যাপ রয়েছে। প্রস্থচ্ছেদের ক্ষেত্রফল A = ২৫ cm²। নির্ণয় করুন: (a) কোর রিলাক্ট্যান্স ℜ_c, (b) এয়ার-গ্যাপ রিলাক্ট্যান্স ℜ_g, (c) মোট রিলাক্ট্যান্স ℜ_total, এবং (d) ২ mm এয়ার-গ্যাপের শতকরা অবদান।'
      },
      solution: {
        en: `Given:
- Core length l_c = 0.8 m, μ_r = 1600
- Air-gap length l_g = 0.002 m (μ_r = 1.0)
- Area A = 25 cm² = 0.0025 m²
- μ₀ = 4π × 10⁻⁷ H/m

Formulae:
1. ℜ_c = l_c / (μ₀ · μ_r · A)
2. ℜ_g = l_g / (μ₀ · 1.0 · A)
3. ℜ_total = ℜ_c + ℜ_g
4. % Gap Reluctance = (ℜ_g / ℜ_total) × 100%

Substitution & Calculation:
(a) Core Reluctance:
    ℜ_c = 0.8 / (4π × 10⁻⁷ × 1600 × 0.0025)
    ℜ_c = 0.8 / (5.0265 × 10⁻⁶) = 159,155 A·t/Wb (1.592 × 10⁵ A·t/Wb)

(b) Air Gap Reluctance:
    ℜ_g = 0.002 / (4π × 10⁻⁷ × 1.0 × 0.0025)
    ℜ_g = 0.002 / (3.14159 × 10⁻⁹) = 636,620 A·t/Wb (6.366 × 10⁵ A·t/Wb)

(c) Total Reluctance:
    ℜ_total = 159,155 + 636,620 = 795,775 A·t/Wb (7.958 × 10⁵ A·t/Wb)

(d) Air Gap Percentage:
    % Gap = (636,620 / 795,775) × 100% = 80.0%

Final Answer:
- ℜ_c = 1.592 × 10⁵ A·t/Wb
- ℜ_g = 6.366 × 10⁵ A·t/Wb
- ℜ_total = 7.958 × 10⁵ A·t/Wb
- Air Gap Contribution = 80.0% of total circuit reluctance!`,
        hi: `दिया गया है:
- l_c = 0.8 m, μ_r = 1600, l_g = 0.002 m, A = 0.0025 m²

गणना:
(a) ℜ_c = 0.8 / (4π × 10⁻⁷ × 1600 × 0.0025) = 159,155 A·t/Wb
(b) ℜ_g = 0.002 / (4π × 10⁻⁷ × 1 × 0.0025) = 636,620 A·t/Wb
(c) ℜ_total = 159,155 + 636,620 = 795,775 A·t/Wb
(d) एयर-गैप का हिस्सा = (636,620 / 795,775) × 100 = 80.0%

उत्तर:
ℜ_total = 7.958 × 10⁵ A·t/Wb, एयर-गैप का हिस्सा = 80.0%।`,
        bn: `প্রদত্ত:
- l_c = ০.৮ m, μ_r = ১৬০০, l_g = ০.০০২ m, A = ০.০০২৫ m²

হিসাব:
(a) ℜ_c = ০.৮ / (৪π × ১০⁻⁷ × ১৬০০ × ০.০০২৫) = ১,৫৯,১৫৫ A·t/Wb
(b) ℜ_g = ০.০০২ / (৪π × ১০⁻⁷ × ১ × ০.০০২৫) = ৬,৩৬,৬২০ A·t/Wb
(c) ℜ_total = ১,৫৯,১৫৫ + ৬,৩৬,৬২০ = ৭,৯৫,৭৭৫ A·t/Wb
(d) এয়ার-গ্যাপের শতকরা অবদান = (৬,৩৬,৬২০ / ৭,৯৫,৭৭৫) × ১০০ = ৮০.০%

উত্তর:
মোট রিলাক্ট্যান্স = ৭.৯৫৮ × ১০⁵ A·t/Wb, এয়ার-গ্যাপের অবদান = ৮০.০%।`
      },
      givenValues: {
        'Core Length (l_c)': '0.8 m',
        'Air Gap (l_g)': '2.0 mm (0.002 m)',
        'Core Area (A)': '25 cm² (0.0025 m²)',
        'Relative Permeability (μ_r)': '1600'
      },
      finalAnswer: {
        en: 'ℜ_total = 7.958 × 10⁵ A·t/Wb, Air Gap Accounts for 80.0% of Reluctance',
        hi: 'ℜ_total = 7.958 × 10⁵ A·t/Wb, एयर-गैप का योगदान 80.0% है',
        bn: 'ℜ_total = ৭.৯৫৮ × ১০⁵ A·t/Wb, এয়ার-গ্যাপের অবদান ৮০.০%'
      }
    },
    {
      id: 'ex-ch6-faraday-induction',
      problem: {
        en: 'A stationary coil having N = 500 turns is linked by a magnetic flux that increases uniformly from Φ₁ = 0.2 mWb to Φ₂ = 1.4 mWb in a time interval of Δt = 0.05 seconds. Calculate the magnitude of the average electromotive force (EMF) induced across the coil terminals.',
        hi: 'N = 500 टर्न वाली एक कॉइल में चुंबकीय फ्लक्स Δt = 0.05 सेकंड में Φ₁ = 0.2 mWb से बढ़कर Φ₂ = 1.4 mWb हो जाता है। कॉइल के टर्मिनलों पर उत्पन्न औसत प्रेरित विद्युतवाहक बल (EMF) का परिमाण ज्ञात करें।',
        bn: 'N = ৫০০ প্যাঁচযুক্ত একটি কয়েলে চৌম্বক ফ্লাক্স Δt = ০.০৫ সেকেন্ডে Φ₁ = ০.২ mWb থেকে সুষমভাবে বৃদ্ধি পেয়ে Φ₂ = ১.৪ mWb হয়। কয়েলে আবিষ্ট গড় তড়িচ্চালক বলের (EMF) মান নির্ণয় করুন।'
      },
      solution: {
        en: `Given:
- Number of turns N = 500
- Initial flux Φ₁ = 0.2 mWb = 0.2 × 10⁻³ Wb
- Final flux Φ₂ = 1.4 mWb = 1.4 × 10⁻³ Wb
- Time interval Δt = 0.05 s

Formula:
Faraday's Induced EMF |e| = N · (ΔΦ / Δt) = N · |Φ₂ - Φ₁| / Δt

Substitution:
ΔΦ = (1.4 - 0.2) × 10⁻³ Wb = 1.2 × 10⁻³ Wb
|e| = 500 × (1.2 × 10⁻³ / 0.05)

Calculation:
|e| = 500 × 0.024 = 12.0 Volts

Final Answer:
Induced EMF |e| = 12.0 V.`,
        hi: `दिया गया है:
- N = 500, Φ₁ = 0.2 mWb, Φ₂ = 1.4 mWb, Δt = 0.05 s

सूत्र:
|e| = N · (ΔΦ / Δt)

मान रखने पर:
ΔΦ = 1.2 × 10⁻³ Wb
|e| = 500 × (1.2 × 10⁻³ / 0.05) = 12.0 V

उत्तर:
प्रेरित EMF |e| = 12.0 V।`,
        bn: `প্রদত্ত:
- N = ৫০০, Φ₁ = ০.২ mWb, Φ₂ = ১.৪ mWb, Δt = ০.০৫ s

সূত্র:
|e| = N · (ΔΦ / Δt)

মান বসিয়ে:
ΔΦ = ১.২ × ১০⁻³ Wb
|e| = ৫০০ × (১.২ × ১০⁻³ / ০.০৫) = ১২.০ V

উত্তর:
আবিষ্ট EMF |e| = ১২.০ V।`
      },
      givenValues: {
        'Turns (N)': '500',
        'Initial Flux (Φ₁)': '0.2 mWb',
        'Final Flux (Φ₂)': '1.4 mWb',
        'Time Interval (Δt)': '0.05 s'
      },
      finalAnswer: {
        en: 'Induced EMF |e| = 12.0 Volts',
        hi: 'प्रेरित EMF |e| = 12.0 V',
        bn: 'আবিষ্ট EMF |e| = ১২.০ V'
      }
    },
    {
      id: 'ex-ch6-fleming-force',
      problem: {
        en: 'A straight copper conductor of active length L = 0.35 m carries an electric current of I = 40 A perpendicular (θ = 90°) to a uniform magnetic field with flux density B = 1.2 Tesla. Calculate: (a) The Lorentz mechanical force (F) exerted on the conductor, and (b) The mechanical power developed if the conductor moves at a velocity of v = 15 m/s in the direction of the force.',
        hi: 'सक्रिय लंबाई L = 0.35 m का एक सीधा तांबे का चालक B = 1.2 टेस्ला के एकसमान चुंबकीय क्षेत्र के लंबवत (θ = 90°) I = 40 A की धारा वहन करता है। गणना करें: (a) चालक पर लगने वाला लोरेंट्ज़ यांत्रिक बल (F), और (b) यदि चालक बल की दिशा में v = 15 m/s के वेग से गति करता है तो विकसित यांत्रिक शक्ति।',
        bn: 'সক্রিয় দৈর্ঘ্য L = ০.৩৫ m বিশিষ্ট একটি কপার পরিবাহী B = ১.২ টেসলা সুষম চৌম্বক ক্ষেত্রের সাথে লম্বভাবে (θ = ৯০°) I = ৪০ A কারেন্ট বহন করে। নির্ণয় করুন: (a) পরিবাহীর ওপর প্রযুক্ত লরেন্টজ বল (F), এবং (b) পরিবাহীটি বলের অভিমুখে v = ১৫ m/s বেগে গতিশীল হলে উৎপন্ন যান্ত্রিক ক্ষমতা।'
      },
      solution: {
        en: `Given:
- Active Conductor Length L = 0.35 m
- Electric Current I = 40 A
- Flux Density B = 1.2 T
- Angle θ = 90° (sin 90° = 1.0)
- Velocity v = 15 m/s

Formulae:
1. Lorentz Force F = B · I · L · sin(θ)
2. Mechanical Power P = Force × Velocity = F · v

Substitution & Calculation:
(a) Force F = 1.2 × 40 × 0.35 × 1.0 = 16.80 Newtons (N)
(b) Mechanical Power P = 16.80 N × 15 m/s = 252.0 Watts (W)

Final Answer:
- Lorentz Force F = 16.8 N
- Mechanical Power = 252 W`,
        hi: `दिया गया है:
- L = 0.35 m, I = 40 A, B = 1.2 T, θ = 90°, v = 15 m/s

सूत्र:
1. F = B · I · L · sin(θ)
2. P = F · v

गणना:
(a) F = 1.2 × 40 × 0.35 × 1 = 16.80 N
(b) P = 16.80 × 15 = 252.0 W

उत्तर:
बल F = 16.8 N, यांत्रिक शक्ति = 252 W।`,
        bn: `প্রদত্ত:
- L = ০.৩৫ m, I = ৪০ A, B = ১.২ T, θ = ৯০°, v = ১৫ m/s

সূত্র:
১. F = B · I · L · sin(θ)
২. P = F · v

হিসাব:
(a) বল F = ১.২ × ৪০ × ০.৩৫ × ১ = ১৬.৮০ N
(b) ক্ষমতা P = ১৬.৮০ × ১৫ = ২৫২.০ W

উত্তর:
প্রযুক্ত বল F = ১৬.৮ N, যান্ত্রিক ক্ষমতা = ২৫২ W।`
      },
      givenValues: {
        'Conductor Length (L)': '0.35 m',
        'Current (I)': '40 A',
        'Flux Density (B)': '1.2 T',
        'Velocity (v)': '15 m/s'
      },
      finalAnswer: {
        en: 'Lorentz Force F = 16.8 N, Developed Power P = 252 W',
        hi: 'लोरेंट्ज़ बल F = 16.8 N, विकसित शक्ति P = 252 W',
        bn: 'লরেন্টজ বল F = ১৬.৮ N, উৎপন্ন ক্ষমতা P = ২৫২ W'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Electromagnetic Relays & Solenoid Actuators: High MMF coils creating magnetic flux across air gaps to pull armatures and close electrical contacts.',
      'Electric Machine Magnetic Cores: Designing stator and rotor iron paths in motors and generators with optimized air-gap clearances (0.25 mm to 2 mm).',
      'Transformer Core Design: Closed laminated silicon steel cores without air gaps to minimize exciting current and maximize magnetic coupling.',
      'Induction Heating & Magnetic Braking: Generating intense alternating magnetic flux to induce eddy currents for metal melting or eddy current retarders in heavy trains.'
    ],
    hi: [
      'विद्युतचुंबकीय रिले एवं सोलेनॉइड: उच्च MMF कॉइल जो एयर-गैप में फ्लक्स बनाकर संपर्कों को जोड़ती हैं।',
      'विद्युत मशीन कोर डिजाइन: मोटरों एवं जनरेटरों में अनुकूलित एयर-गैप (0.25 mm से 2 mm) के साथ स्टेटर और रोटर कोर का निर्माण।',
      'ट्रांसफॉर्मर कोर: न्यूनतम मैग्नेटाइजिंग धारा के लिए बिना एयर-गैप वाला बंद लैमिनेटेड सिलिकॉन स्टील कोर।',
      'इंडक्शन हीटिंग एवं मैग्नेटिक ब्रेकिंग: धातुओं को पिघलाने या ट्रेनों में ब्रेकिंग हेतु भंवर धाराएं उत्पन्न करना।'
    ],
    bn: [
      'ইলেক্ট্রোম্যাগনেটিক রিলে ও সোলেনয়েড: উচ্চ MMF কয়েল যা এয়ার-গ্যাপে ফ্লাক্স তৈরি করে কন্টাক্ট বন্ধ করে।',
      'ইলেকট্রিক্যাল মেশিনের কোর ডিজাইন: মোটর ও জেনারেটরে সুনির্দিষ্ট এয়ার-গ্যাপসহ (০.২৫ mm থেকে ২ mm) স্টেটোর-রোটোর নকশা।',
      'ট্রান্সফরমার কোর ডিজাইন: এয়ার-গ্যাপবিহীন ল্যামিনেটেড সিলিকন স্টিল কোর যা কাপলিং বৃদ্ধি করে।',
      'ইন্ডাকশন হিটিং ও ম্যাগনেটিক ব্রেকিং: ট্রেনে এডি কারেন্ট ব্রেক এবং ধাতু গলানোর জন্য তীব্র পরিবর্তনশীল চৌম্বক ফ্লাক্স।'
    ]
  },
  importantPoints: {
    en: [
      'Reluctance opposes magnetic flux just as electrical resistance opposes current flow (ℜ = l / μA).',
      'Air has a relative permeability of μ_r = 1, making even a tiny air gap the dominant reluctance in an iron-cored magnetic circuit.',
      'Magnetomotive Force (MMF = N·I) is the driving potential that establishes flux in magnetic circuits.',
      'Faraday’s law of induction states that induced EMF equals the rate of change of flux linkages (e = -N dΦ/dt).',
      'Lenz’s law ensures conservation of energy by dictating that induced current opposes the flux change causing it.'
    ],
    hi: [
      'रिलक्टेंस चुंबकीय फ्लक्स का विरोध करता है जैसे प्रतिरोध धारा का विरोध करता है (ℜ = l / μA)।',
      'हवा की आपेक्षिक पारगम्यता μ_r = 1 होती है, जिससे छोटा एयर-गैप भी कुल रिलक्टेंस का मुख्य भाग बन जाता है।',
      'चुंबकवाहक बल (MMF = N·I) वह प्रेरक विभव है जो परिपथ में फ्लक्स स्थापित करता है।',
      'फैराडे के नियमानुसार प्रेरित EMF फ्लक्स परिवर्तन की दर के समानुपाती होता है (e = -N dΦ/dt)।',
      'लेन्ज़ का नियम सुनिश्चित करता है कि प्रेरित धारा उस कारण का विरोध करती है जिससे वह उत्पन्न हुई है।'
    ],
    bn: [
      'রিলাক্ট্যান্স চৌম্বক ফ্লাক্স প্রবাহে বাধা দেয় ঠিক যেমন রোধ তড়িৎ প্রবাহে বাধা দেয় (ℜ = l / μA)।',
      'বায়ুর আপেক্ষিক প্রবেশ্যতা μ_r = ১ হওয়ায় ক্ষুদ্র এয়ার-গ্যাপও মোট রিলাক্ট্যান্সের সিংহভাগ ধারণ করে।',
      'ম্যাগনেটোমোটিভ ফোর্স (MMF = N·I) হলো চৌম্বক বর্তনীতে ফ্লাক্স তৈরির চালিকাশক্তি।',
      'ফ্যারাডের সূত্রানুযায়ী আবিষ্ট EMF ফ্লাক্স পরিবর্তনের হারের সমানুপাতিক (e = -N dΦ/dt)।',
      'লেনজের সূত্র শক্তির সংরক্ষণশীলতা বজায় রেখে আবিষ্ট কারেন্টের দিক নির্ধারণ করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Assuming air gap reluctance is negligible: In reality, a 1 mm air gap often accounts for 80% to 90% of total circuit reluctance.',
      'Confusing magnetic flux Φ (Webers) with magnetic flux density B (Tesla): B = Φ / A.',
      'Forgetting μ₀ in reluctance calculations: ℜ = l / (μ₀ · μ_r · A), where μ₀ = 4π × 10⁻⁷ H/m.',
      'Confusing Fleming’s Left-Hand Rule (Motors: Thrust/Current) with Right-Hand Rule (Generators: Induced EMF).'
    ],
    hi: [
      'एयर-गैप के रिलक्टेंस को नगण्य मानना: वास्तव में 1 मिमी का गैप कुल रिलक्टेंस का 80% से 90% हिस्सा लेता है।',
      'फ्लक्स Φ (वेबर) और फ्लक्स घनत्व B (टेस्ला) में अंतर न समझना: B = Φ / A।',
      'रिलक्टेंस गणना में μ₀ (4π × 10⁻⁷) को भूल जाना: ℜ = l / (μ₀ · μ_r · A)।',
      'फ्लेमिंग के बाएँ हाथ (मोटर) और दाएँ हाथ (जनरेटर) के नियमों में भ्रमित होना।'
    ],
    bn: [
      'এয়ার-গ্যাপের রিলাক্ট্যান্সকে তুচ্ছ ভাবা: বাস্তবে ১ মিলিমিটার গ্যাপ মোট রিলাক্ট্যান্সের ৮০% থেকে ৯০% হতে পারে।',
      'ফ্লাক্স Φ (ওয়েবার) এবং ফ্লাক্স ঘনত্ব B (টেসলা) গুলিয়ে ফেলা: B = Φ / A।',
      'হিসাবের সময় μ₀ (৪π × ১০⁻⁷) বাদ দেওয়া: ℜ = l / (μ₀ · μ_r · A)।',
      'ফ্লেমিংয়ের বাম হাত (মোটর) এবং ডান হাত (জেনারেটর) নিয়ম গুলিয়ে ফেলা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch6-l2-1',
      question: {
        en: 'In an electrical-to-magnetic circuit analogy, which magnetic parameter directly corresponds to Electrical Resistance (R)?',
        hi: 'विद्युत-चुंबकीय परिपथ सादृश्य में, कौन सा चुंबकीय पैरामीटर सीधे विद्युत प्रतिरोध (R) के अनुरूप होता है?',
        bn: 'তড়িৎ ও চৌম্বক বর্তনীর তুলনায় কোন চৌম্বকীয় রাশিটি বৈদ্যুতিক রোধের (R) অনুরূপ?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Magnetic Reluctance (ℜ = l / μA)',
            hi: 'चुंबकीय रिलक्टेंस (ℜ = l / μA)',
            bn: 'চৌম্বক রিলাক্ট্যান্স (ℜ = l / μA)'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Magnetic Permeability (μ)',
            hi: 'चुंबकीय पारगम्यता (μ)',
            bn: 'চৌম্বক প্রবেশ্যতা (μ)'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Magnetomotive Force (MMF = NI)',
            hi: 'चुंबकवाहक बल (MMF = NI)',
            bn: 'ম্যাগনেটোমোটিভ ফোর্স (MMF = NI)'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Magnetic Flux Density (B)',
            hi: 'चुंबकीय फ्लक्स घनत्व (B)',
            bn: 'চৌম্বক ফ্লাক্স ঘনত্ব (B)'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Magnetic reluctance ℜ = l/(μA) opposes the establishment of magnetic flux (Φ = ℱ/ℜ) in exact mathematical correspondence to electrical resistance R = l/(σA) opposing current flow (I = V/R).',
        hi: 'चुंबकीय रिलक्टेंस ℜ = l/(μA) चुंबकीय फ्लक्स का विरोध करता है, जो सीधे विद्युत प्रतिरोध R = l/(σA) के समतुल्य है।',
        bn: 'চৌম্বক রিলাক্ট্যান্স ℜ = l/(μA) ফ্লাক্স প্রবাহে বাধা দেয়, যা হুবহু বৈদ্যুতিক রোধ R = l/(σA) এর অনুরূপ।'
      }
    },
    {
      id: 'mcq-ch6-l2-2',
      question: {
        en: 'If a small air gap is cut into a continuous ferromagnetic iron ring of constant cross-section, what happens to the total reluctance of the magnetic circuit?',
        hi: 'यदि एकसमान क्रॉस-सेक्शन के लौह रिंग में एक छोटा एयर-गैप काट दिया जाए, तो परिपथ के कुल रिलक्टेंस पर क्या प्रभाव पड़ेगा?',
        bn: 'যদি সুষম প্রস্থচ্ছেদের একটি আয়রন রিংয়ে একটি ছোট এয়ার-গ্যাপ তৈরি করা হয়, তবে ম্যাগনেটিক সার্কিটের মোট রিলাক্ট্যান্সের কী ঘটবে?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Total reluctance increases dramatically because relative permeability of air is only μ_r = 1.',
            hi: 'कुल रिलक्टेंस अत्यधिक बढ़ जाता है क्योंकि हवा की आपेक्षिक पारगम्यता केवल μ_r = 1 होती है।',
            bn: 'মোট রিলাক্ট্যান্স নাটকীয়ভাবে বৃদ্ধি পায় কারণ বায়ুর আপেক্ষিক প্রবেশ্যতা মাত্র μ_r = ১।'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Total reluctance decreases because air offers zero resistance to magnetic fields.',
            hi: 'कुल रिलक्टेंस घट जाता है क्योंकि हवा चुंबकीय क्षेत्र को शून्य प्रतिरोध देती है।',
            bn: 'মোট রিলাক্ট্যান্স হ্রাস পায় কারণ বাতাস চৌম্বক ক্ষেত্রে কোনো বাধা দেয় না।'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Total reluctance remains unchanged because the total perimeter is constant.',
            hi: 'कुल रिलक्टेंस अपरिवर्तित रहता है क्योंकि कुल परिधि स्थिर रहती है।',
            bn: 'মোট রিলাক্ট্যান্স অপরিবর্তিত থাকে কারণ সামগ্রিক পরিধি স্থির থাকে।'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Total flux becomes infinite due to fringing effects.',
            hi: 'फ्रिंजिंग प्रभाव के कारण कुल फ्लक्स अनंत हो जाता है।',
            bn: 'ফ্রিঞ্জিং প্রভাবের কারণে মোট ফ্লাক্স অসীম হয়ে যায়।'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Air has μ_r = 1 compared to thousands for silicon steel. Hence, air gap reluctance ℜ_g = l_g / (μ₀ A) is added in series, drastically elevating total circuit reluctance.',
        hi: 'हवा के लिए μ_r = 1 होता है जबकि स्टील के लिए यह हजारों में होता है। अतः श्रेणी में एयर-गैप रिलक्टेंस जुड़ने से कुल रिलक्टेंस बहुत बढ़ जाता है।',
        bn: 'বায়ুতে μ_r = ১ হওয়ায় এয়ার-গ্যাপের উচ্চ রিলাক্ট্যান্স সিরিজে যুক্ত হয়ে সামগ্রিক রিলাক্ট্যান্স বহুগুণ বাড়িয়ে দেয়।'
      }
    },
    {
      id: 'mcq-ch6-l2-3',
      question: {
        en: 'According to Fleming’s Left-Hand Rule for electric motors, what does the middle finger represent when thumb and forefinger are extended mutually at 90°?',
        hi: 'विद्युत मोटरों के लिए फ्लेमिंग के बाएँ हाथ के नियम के अनुसार, जब अंगूठा और तर्जनी 90° पर फैलाई जाती हैं तो मध्यमा (बीच की उंगली) क्या दर्शाती है?',
        bn: 'বৈদ্যুতিক মোটরের জন্য ফ্লেমিংয়ের বাম হাত নিয়ম অনুযায়ী মধ্যমা আঙুল কী নির্দেশ করে?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Direction of electric current flowing through the conductor',
            hi: 'चालक में बहने वाली विद्युत धारा की दिशा',
            bn: 'পরিবাহীতে প্রবাহিত তড়িৎ কারেন্টের দিক'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Direction of the magnetic field from North to South',
            hi: 'उत्तर से दक्षिण चुंबकीय क्षेत्र की दिशा',
            bn: 'উত্তর থেকে দক্ষিণ চৌম্বক ক্ষেত্রের দিক'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Direction of mechanical force / physical thrust on the conductor',
            hi: 'चालक पर लगने वाले यांत्रिक बल / थ्रस्ट की दिशा',
            bn: 'পরিবাহীর ওপর প্রযুক্ত যান্ত্রিক বলের দিক'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Direction of core eddy currents',
            hi: 'कोर एडी धाराओं की दिशा',
            bn: 'কোর এডি কারেন্টের দিক'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: "In Fleming's Left-Hand Rule: Forefinger = Field (B), Middle finger = Current (I), Thumb = Thrust / Force (F). (Remember: FBI).",
        hi: 'फ्लेमिंग के बाएँ हाथ के नियम में: तर्जनी = चुंबकीय क्षेत्र (B), मध्यमा = धारा (I), अंगूठा = बल (F)।',
        bn: 'ফ্লেমিংয়ের বাম হস্ত নিয়মে: তর্জনী = ফিল্ড (B), মধ্যমা = কারেন্ট (I), বৃদ্ধাঙ্গুলি = প্রযুক্ত বল (F)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch6-l2-1',
      question: {
        en: 'Explain the practical engineering concept of "Magnetic Fringing" at an air gap and how it influences the calculated value of flux density (B_gap) in electrical machines.',
        hi: 'एयर-गैप पर "मैग्नेटिक फ्रिंजिंग" की व्यावहारिक इंजीनियरिंग अवधारणा को समझाइए और यह विद्युत मशीनों में फ्लक्स घनत्व (B_gap) को कैसे प्रभावित करती है।',
        bn: 'এয়ার-গ্যাপে "ম্যাগনেটিক ফ্রিঞ্জিং" এর বাস্তব প্রকৌশলগত তাৎপর্য ব্যাখ্যা করুন এবং এটি কীভাবে ফ্লাক্স ঘনত্ব (B_gap) পরিমাপে প্রভাব ফেলে।'
      },
      hint: {
        en: 'Think about mutual magnetic line repulsion when crossing non-magnetic air boundaries and the effective cross-sectional area.',
        hi: 'गैर-चुंबकीय वायु सीमा को पार करते समय चुंबकीय रेखाओं के आपसी प्रतिकर्षण और प्रभावी क्रॉस-सेक्शनल क्षेत्रफल के बारे में सोचें।',
        bn: 'বায়ুতে চৌম্বক বলরেখার পারস্পরিক বিকর্ষণ এবং কার্যকরী প্রস্থচ্ছেদের ক্ষেত্রফল বৃদ্ধির কথা চিন্তা করুন।'
      },
      answerKey: {
        en: 'When magnetic flux lines cross an air gap from iron pole faces, lines of force repel each other and bulge outwards into the surrounding air. This phenomenon is called "fringing". Fringing increases the effective cross-sectional area of the air gap (A_gap > A_core). As a result, for a given flux Φ, the actual flux density in the gap B_gap = Φ / A_gap is slightly reduced compared to the core.',
        hi: 'जब चुंबकीय फ्लक्स रेखाएं लोहे के पोल से हवा के गैप को पार करती हैं, तो वे एक-दूसरे को प्रतिकर्षित करती हैं और बाहर की ओर फैल जाती हैं। इसे फ्रिंजिंग कहते हैं। इससे एयर-गैप का प्रभावी क्षेत्रफल बढ़ जाता है, जिससे वास्तविक फ्लक्स घनत्व B_gap थोड़ा कम हो जाता है।',
        bn: 'আয়রন পোল থেকে এয়ার-গ্যাপে প্রবেশের সময় চৌম্বক বলরেখাগুলো পরস্পরকে বিকর্ষণ করে বাইরের দিকে ছড়িয়ে পড়ে, একে ফ্রিঞ্জিং বলে। এর ফলে এয়ার-গ্যাপের কার্যকরী ক্ষেত্রফল বৃদ্ধি পায় এবং কার্যকর ফ্লাক্স ঘনত্ব B_gap কিছুটা হ্রাস পায়।'
      }
    },
    {
      id: 'pq-ch6-l2-2',
      question: {
        en: 'A magnetic core requires an excitation MMF of 1200 A·t to establish rated flux. If the excitation coil is wound with N = 600 turns of copper wire having a total DC electrical resistance of R = 4.0 Ω, calculate the minimum DC voltage supply required to energize the coil.',
        hi: 'एक चुंबकीय कोर को रेटेड फ्लक्स स्थापित करने के लिए 1200 A·t के MMF की आवश्यकता होती है। यदि कॉइल N = 600 टर्न और 4.0 Ω प्रतिरोध की है, तो आवश्यक न्यूनतम DC वोल्टेज ज्ञात करें।',
        bn: 'একটি ম্যাগনেটিক কোরে রেটেড ফ্লাক্স তৈরির জন্য ১২০০ A·t MMF প্রয়োজন। কয়েলে N = ৬০০ প্যাঁচ এবং রোধ R = ৪.০ Ω হলে কয়েলটিকে চালিত করতে প্রয়োজনীয় ন্যূনতম DC ভোল্টেজ নির্ণয় করুন।'
      },
      hint: {
        en: 'First compute required current I = MMF / N. Then use Ohm’s law V = I · R.',
        hi: 'पहले आवश्यक धारा I = MMF / N ज्ञात करें। फिर ओम के नियम V = I · R का प्रयोग करें।',
        bn: 'প্রথমে প্রয়োজনীয় কারেন্ট I = MMF / N বের করুন। তারপর ওহমের সূত্র V = I · R প্রয়োগ করুন।'
      },
      answerKey: {
        en: 'Required exciting current I = MMF / N = 1200 A·t / 600 turns = 2.0 Amperes (A).\nRequired DC terminal voltage V = I · R = 2.0 A × 4.0 Ω = 8.0 Volts (DC).',
        hi: 'आवश्यक उत्तेजक धारा I = MMF / N = 1200 / 600 = 2.0 A।\nआवश्यक DC वोल्टेज V = I · R = 2.0 × 4.0 = 8.0 V।',
        bn: 'প্রয়োজনীয় এক্সাইটেশন কারেন্ট I = MMF / N = ১২০০ / ৬০০ = ২.০ A।\nপ্রয়োজনীয় DC সাপ্লাই ভোল্টেজ V = I · R = ২.০ × ৪.০ = ৮.০ V।'
      }
    }
  ]
};
