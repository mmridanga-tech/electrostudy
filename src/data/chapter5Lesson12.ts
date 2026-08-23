import { Lesson } from '../types';

export const LESSON_AC_IMPEDANCE_ADMITTANCE: Lesson = {
  id: 'lsn-ch5-ac-impedance-admittance',
  topicId: 'ch5-ac-impedance-admittance',
  chapterId: 'ch-alternating-current',
  order: 12,
  title: {
    en: 'AC Impedance and Admittance',
    hi: 'एसी प्रतिबाधा एवं प्रवेश्यता',
    bn: 'এসি ইম্পিড্যান্স ও অ্যাডমিট্যান্স'
  },
  description: {
    en: 'Master the dual mathematical frameworks of AC circuit analysis: Impedance (Z = R + jX) for series configurations and Admittance (Y = G + jB) for parallel configurations, including conductance, susceptance, complex conversions, and parallel resonance.',
    hi: 'एसी परिपथ विश्लेषण के दोहरे गणितीय ढाँचों में निपुणता: सीरीज विन्यास हेतु प्रतिबाधा (Z = R + jX) तथा समानांतर विन्यास हेतु प्रवेश्यता (Y = G + jB), चालकता (G), प्रवेष्यता (B), सम्मिश्र रूपांतरण एवं समानांतर अनुनाद।',
    bn: 'এসি সার্কিট বিশ্লেষণের দ্বৈত গাণিতিক কাঠামোর সম্পূর্ণ আয়ত্ত: সিরিজ সংযোগের জন্য ইম্পিড্যান্স (Z = R + jX) এবং সমান্তরাল সংযোগের জন্য অ্যাডমিট্যান্স (Y = G + jB), পরিবাহিতা (G), সাসিপ্ট্যান্স (B), জটিল রূপান্তর ও সমান্তরাল রেজোন্যান্স।'
  },
  easyExplanation: {
    en: 'Just as Resistance (R) has an inverse called Conductance (G = 1/R), AC Impedance (Z, total opposition) has an inverse called Admittance (Y = 1/Z, ease of current flow). Admittance consists of Conductance G (in-phase flow) and Susceptance B (reactive flow), measured in Siemens (S). Admittances simply add together in parallel circuits (Y_total = Y1 + Y2 + ...), making parallel AC calculations simple and intuitive.',
    hi: 'जैसे प्रतिरोध (R) का व्युत्क्रम चालकता (G = 1/R) होता है, वैसे ही एसी प्रतिबाधा (Z, कुल विरोध) का व्युत्क्रम प्रवेश्यता (Admittance Y = 1/Z, धारा प्रवाह की सुगमता) होता है। प्रवेश्यता में चालकता G और ससेप्टेंस B होते हैं, जिनका मात्रक सीमेंस (Siemens, S) है। समानांतर परिपथों में सभी शाखाओं की प्रवेश्यता सीधे जुड़ जाती है (Y_total = Y1 + Y2), जिससे समानांतर गणना अत्यंत सरल हो जाती है।',
    bn: 'যেভাবে রোধের (R) বিপরীত পরিবাহিতা (G = 1/R), তেমনি এসি ইম্পিড্যান্সের (Z) বিপরীত হলো অ্যাডমিট্যান্স (Y = 1/Z, কারেন্ট প্রবাহের সুবিধা)। অ্যাডমিট্যান্স গঠিত হয় পরিবাহিতা G এবং সাসিপ্ট্যান্স B দ্বারা, যার একক সিমেন্স (S)। সমান্তরাল সার্কিটে সকল শাখার অ্যাডমিট্যান্স সরাসরি যোগ হয় (Y_total = Y1 + Y2), ফলে সমান্তরাল এসি সার্কিটের হিসাব অত্যন্ত সহজ হয়।'
  },
  detailedExplanation: {
    en: '1. Impedance (Z) Representation:\nImpedance Z (measured in Ohms, Ω) is the total complex opposition offered by a network to alternating current:\n- Rectangular Form: Z = R + jX\n  * Real part: Resistance R (Ω) ≥ 0\n  * Imaginary part: Reactance X (Ω) (XL > 0 for inductive, XC < 0 for capacitive)\n- Polar Form: Z = |Z| ∠ θz\n  * Magnitude: |Z| = √(R² + X²)\n  * Angle: θz = tan⁻¹(X / R)\n\n2. Admittance (Y) Representation:\nAdmittance Y (measured in Siemens, S or mhos ℧) represents the total ease with which alternating current flows through a network:\n- Defined as the exact complex reciprocal of impedance: Y = 1 / Z\n- Rectangular Form: Y = G + jB\n  * Real part: Conductance G (Siemens, S)\n  * Imaginary part: Susceptance B (Siemens, S)\n- Polar Form: Y = |Y| ∠ θy\n  * Magnitude: |Y| = 1 / |Z| = √(G² + B²)\n  * Angle: θy = -θz = tan⁻¹(B / G)\n\n3. Mathematical Conversions Between Z and Y:\nStarting from Y = 1 / Z = 1 / (R + jX):\nMultiply numerator and denominator by the complex conjugate (R - jX):\nY = (R - jX) / (R² + X²) = [ R / (R² + X²) ] - j [ X / (R² + X²) ]\nTherefore:\n- Conductance: G = R / (R² + X²) = R / |Z|²\n- Susceptance: B = -X / (R² + X²) = -X / |Z|²\n\nStarting from Z = 1 / Y = 1 / (G + jB):\nMultiply by conjugate (G - jB):\nZ = (G - jB) / (G² + B²) = [ G / (G² + B²) ] - j [ B / (G² + B²) ]\nTherefore:\n- Resistance: R = G / (G² + B²) = G / |Y|²\n- Reactance: X = -B / (G² + B²) = -B / |Y|²\n\n4. Susceptance Sign Convention:\n- Inductive Reactance (XL > 0) produces Inductive Susceptance: BL = -1 / XL (Negative imaginary part, lags voltage).\n- Capacitive Reactance (XC = -1/(ωC)) produces Capacitive Susceptance: BC = +ωC = +1 / |XC| (Positive imaginary part, leads voltage).\n- Net Susceptance: B = BC - BL = ωC - (1 / ωL).\n\n5. Parallel Circuit Simplification Using Admittance:\nIn parallel networks with multiple parallel branches:\n- Total Admittance: Y_total = Y1 + Y2 + Y3 + ... + Yn\n- Total Conductance: G_total = G1 + G2 + ... + Gn\n- Total Susceptance: B_total = B1 + B2 + ... + Bn\n- Total Current: I_total = V · Y_total = V √(G_total² + B_total²)\n- Power Factor: cos θ = G_total / |Y_total|.\n\n6. Parallel Resonance (Anti-Resonance):\n- Occurs when net susceptance B_total = 0 (BC = BL).\n- Admittance is minimum: Y0 = G.\n- Impedance is maximum: Z0 = 1 / G = L / (C · R) (Dynamic Resistance Rd).\n- Total supply line current is minimum: I0 = V · G = V / Rd (Rejector Circuit).\n- High circulating currents oscillate between inductive and capacitive branches (Current Magnification).',
    hi: '1. प्रतिबाधा (Impedance, Z):\n- Z = R + jX = |Z| ∠ θz (मात्रक: Ohms, Ω)\n- |Z| = √(R² + X²), θz = tan⁻¹(X / R)\n\n2. प्रवेश्यता (Admittance, Y):\n- Y = 1 / Z = G + jB = |Y| ∠ θy (मात्रक: Siemens, S)\n- G = चालकता (Conductance), B = ससेप्टेंस (Susceptance)\n- |Y| = √(G² + B²), θy = -θz = tan⁻¹(B / G)\n\n3. Z और Y के बीच रूपांतरण:\n- G = R / (R² + X²) = R / |Z|²\n- B = -X / (R² + X²) = -X / |Z|²\n- R = G / (G² + B²)\n- X = -B / (G² + B²)\n\n4. ससेप्टेंस के चिन्ह:\n- इंडक्टिव ससेप्टेंस BL ऋणात्मक होता है (BL = -1 / XL)।\n- कैपेसिटिव ससेप्टेंस BC धनात्मक होता है (BC = +ωC)।\n\n5. समानांतर परिपथ में अनुप्रयोग:\n- Y_total = Y1 + Y2 + ... + Yn\n- G_total = G1 + G2, B_total = B1 + B2\n- कुल धारा: I = V · Y_total\n\n6. समानांतर अनुनाद:\n- जब B_total = 0 हो, प्रवेश्यता न्यूनतम (Y = G) और प्रतिबाधा अधिकतम (Z = L / (CR)) होती है।\n- लाइन धारा न्यूनतम होती है (रिजेक्टर परिपथ)।',
    bn: '১. ইম্পিড্যান্স (Z):\n- Z = R + jX = |Z| ∠ θz (একক: Ohms, Ω)\n- |Z| = √(R² + X²), θz = tan⁻¹(X / R)\n\n২. অ্যাডমিট্যান্স (Y):\n- Y = 1 / Z = G + jB = |Y| ∠ θy (একক: Siemens, S)\n- G = কন্ডাক্ট্যান্স (পরিবাহিতা), B = সাসিপ্ট্যান্স\n- |Y| = √(G² + B²), θy = -θz\n\n৩. গাণিতিক রূপান্তর:\n- G = R / (R² + X²) = R / |Z|²\n- B = -X / (R² + X²) = -X / |Z|²\n- R = G / (G² + B²)\n- X = -B / (G² + B²)\n\n৪. সাসিপ্ট্যান্সের চিহ্ন:\n- ইন্ডাক্টিভ সাসিপ্ট্যান্স BL ঋণাত্মক (BL = -1 / XL)।\n- ক্যাপাসিটিভ সাসিপ্ট্যান্স BC ধনাত্মক (BC = +ωC)।\n\n৫. সমান্তরাল সার্কিটে অ্যাডমিট্যান্স:\n- Y_total = Y1 + Y2 + ... + Yn\n- মোট কারেন্ট: I = V · Y_total\n\n৬. সমান্তরাল রেজোন্যান্স:\n- যখন B_total = ০ হয়, অ্যাডমিট্যান্স সর্বনিম্ন (Y = G) এবং ইম্পিড্যান্স সর্বোচ্চ (Z = L / (CR)) হয়।\n- লাইন কারেন্ট সর্বনিম্ন হয় (রিজেক্টর সার্কিট)।'
  },
  formulas: [
    {
      symbol: 'Y',
      expression: 'Y = 1 / Z = G + jB',
      description: {
        en: 'Complex Admittance (Siemens, S)',
        hi: 'सम्मिश्र प्रवेश्यता (Siemens, S)',
        bn: 'জটিল অ্যাডমিট্যান্স (Siemens, S)'
      }
    },
    {
      symbol: 'G',
      expression: 'G = R / (R² + X²) = R / |Z|²',
      description: {
        en: 'Conductance in terms of R and X (Siemens, S)',
        hi: 'R और X के पदों में चालकता (Siemens, S)',
        bn: 'R ও X এর প্রেক্ষিতে পরিবাহিতা (Siemens, S)'
      }
    },
    {
      symbol: 'B',
      expression: 'B = -X / (R² + X²) = -X / |Z|²',
      description: {
        en: 'Susceptance in terms of R and X (Siemens, S)',
        hi: 'R और X के पदों में ससेप्टेंस (Siemens, S)',
        bn: 'R ও X এর প্রেক্ষিতে সাসিপ্ট্যান্স (Siemens, S)'
      }
    },
    {
      symbol: '|Y|',
      expression: '|Y| = √(G² + B²) = 1 / |Z|',
      description: {
        en: 'Admittance Magnitude (Siemens, S)',
        hi: 'प्रवेश्यता परिमाण (Siemens, S)',
        bn: 'অ্যাডমিট্যান্স মান (Siemens, S)'
      }
    },
    {
      symbol: 'R',
      expression: 'R = G / (G² + B²) = G / |Y|²',
      description: {
        en: 'Equivalent Series Resistance from G and B (Ω)',
        hi: 'G और B से तुल्य सीरीज प्रतिरोध (Ω)',
        bn: 'G ও B থেকে সমতুল্য সিরিজ রোধ (Ω)'
      }
    },
    {
      symbol: 'X',
      expression: 'X = -B / (G² + B²) = -B / |Y|²',
      description: {
        en: 'Equivalent Series Reactance from G and B (Ω)',
        hi: 'G और B से तुल्य सीरीज रिएक्टेंस (Ω)',
        bn: 'G ও B থেকে সমতুল্য সিরিজ রিঅ্যাকট্যান্স (Ω)'
      }
    },
    {
      symbol: 'Y_par',
      expression: 'Y_total = Y1 + Y2 + ... + Yn',
      description: {
        en: 'Total Parallel Circuit Admittance',
        hi: 'कुल समानांतर परिपथ प्रवेश्यता',
        bn: 'মোট সমান্তরাল সার্কিট অ্যাডমিট্যান্স'
      }
    },
    {
      symbol: 'Rd',
      expression: 'Rd = L / (C · R)',
      description: {
        en: 'Dynamic Resistance at Parallel Resonance (Ω)',
        hi: 'समानांतर अनुनाद पर गतिशील प्रतिरोध (Dynamic Resistance, Ω)',
        bn: 'সমান্তরাল রেজোন্যান্সে ডায়নামিক রোধ (Ω)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Power System AC Load Flow Analysis: Transmission network bus admittance matrices [Y_bus] for multi-bus grid stability simulations.',
      'Industrial Plant Power Factor Correction: Direct addition of capacitive susceptance (+jBC) in parallel to cancel inductive lagging susceptance (-jBL).',
      'Parallel Resonant LC Tank Circuits in Class-C RF power transmitters to provide high load impedance and eliminate unwanted harmonics.',
      'Smith Chart and RF Microwave Impedance Matching using shunt stubs with known susceptance.'
    ],
    hi: [
      'पावर सिस्टम लोड फ्लो विश्लेषण: ग्रिड स्थिरता गणना हेतु बस प्रवेश्यता मैट्रिक्स [Y_bus]।',
      'औद्योगिक पावर फैक्टर सुधार: इंडक्टिव ससेप्टेंस (-jBL) को काटने के लिए समानांतर में कैपेसिटिव ससेप्टेंस (+jBC) जोड़ना।',
      'क्लास-C आरएफ ट्रांसमीटरों में समानांतर अनुनादी LC टैंक परिपथ।',
      'स्मिथ चार्ट और आरएफ माइक्रोवेव इम्पीडेंस मैचिंग।'
    ],
    bn: [
      'পাওয়ার সিস্টেম লোড ফ্লো বিশ্লেষণ: গ্রিড হিসাবের জন্য বাস অ্যাডমিট্যান্স ম্যাট্রিক্স [Y_bus]।',
      'শিল্প কারখানায় পাওয়ার ফ্যাক্টর উন্নয়ন: সমান্তরালে ধারকীয় সাসিপ্ট্যান্স (+jBC) যুক্ত করে ইন্ডাক্টিভ সাসিপ্ট্যান্স বাতিল করা।',
      'ক্লাস-C রেডিও ট্রান্সমিটারে সমান্তরাল রেজোন্যান্ট LC ট্যাঙ্ক সার্কিট।',
      'স্মিথ চার্ট ও আরএফ মাইক্রোওয়েভ ইম্পিড্যান্স ম্যাচিং ব্যবস্থা।'
    ]
  },
  importantPoints: {
    en: [
      'Admittance Y is the complex inverse of Impedance: Y = 1 / Z. Units are Siemens (S).',
      'Conductance G is NOT simply 1/R when reactance X is present! G = R / (R² + X²). G = 1/R only if X = 0.',
      'Susceptance B is NOT simply 1/X! B = -X / (R² + X²). Notice the negative sign.',
      'Inductive susceptance is NEGATIVE (-jBL = -j / XL); Capacitive susceptance is POSITIVE (+jBC = +j ωC).',
      'In parallel AC circuits, admittances add algebraically by components: G_total = ΣG, B_total = ΣB, Y_total = G_total + jB_total.',
      'Parallel resonance gives MINIMUM current (I0 = V/Rd) and MAXIMUM impedance (Rd = L/CR), contrasting with series resonance.'
    ],
    hi: [
      'प्रवेश्यता Y प्रतिबाधा का सम्मिश्र व्युत्क्रम है: Y = 1 / Z (मात्रक: Siemens, S)।',
      'जब रिएक्टेंस X उपस्थित हो, तो चालकता G केवल 1/R नहीं होती! G = R / (R² + X²) होती है।',
      'ससेप्टेंस B केवल 1/X नहीं होती! B = -X / (R² + X²) होती है (ऋणात्मक चिन्ह ध्यान दें)।',
      'इंडक्टिव ससेप्टेंस ऋणात्मक (-jBL) और कैपेसिटिव ससेप्टेंस धनात्मक (+jBC) होता है।',
      'समानांतर एसी परिपथों में प्रवेश्यताएँ सीधे जुड़ती हैं: Y_total = Y1 + Y2 + ...',
      'समानांतर अनुनाद पर धारा न्यूनतम (I = V/Rd) तथा प्रतिबाधा अधिकतम (Rd = L/CR) होती है।'
    ],
    bn: [
      'অ্যাডমিট্যান্স Y হলো ইম্পিড্যান্সের বিপরীত: Y = 1 / Z (একক: Siemens, S)।',
      'রিঅ্যাকট্যান্স X থাকলে পরিবাহিতা কেবল 1/R হয় না! G = R / (R² + X²)।',
      'সাসিপ্ট্যান্স কেবল 1/X নয়! B = -X / (R² + X²) (ঋণাত্মক চিহ্ন লক্ষণীয়)।',
      'ইন্ডাক্টিভ সাসিপ্ট্যান্স ঋণাত্মক (-jBL) এবং ক্যাপাসিটিভ সাসিপ্ট্যান্স ধনাত্মক (+jBC)।',
      'সমান্তরাল এসি সার্কিটে অ্যাডমিট্যান্স সরাসরি যোগ হয়: Y_total = Y1 + Y2 + ...',
      'সমান্তরাল রেজোন্যান্সে লাইন কারেন্ট সর্বনিম্ন (I = V/Rd) এবং ইম্পিড্যান্স সর্বোচ্চ (Rd = L/CR) হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Writing G = 1/R and B = 1/X for an AC branch with both R and X. Correction: G = R/(R² + X²) and B = -X/(R² + X²).',
      'Mistake: Assuming inductive susceptance is positive because inductive reactance is positive. Correction: BL = -1/XL (inductive current lags, hence -j).',
      'Mistake: Confusing parallel resonance (minimum current, maximum impedance) with series resonance (maximum current, minimum impedance).',
      'Mistake: Adding impedances directly in parallel: 1/Z_total = 1/Z1 + 1/Z2 requires complex division, whereas converting to Y1 + Y2 is much simpler.'
    ],
    hi: [
      'गलती: R और X वाली शाखा के लिए G = 1/R और B = 1/X लिखना। सुधार: सही सूत्र G = R/(R²+X²) और B = -X/(R²+X²) हैं।',
      'गलती: इंडक्टिव ससेप्टेंस को धनात्मक मानना। सुधार: इंडक्टिव धारा वोल्टेज से लैग करती है, अतः BL = -1/XL (ऋणात्मक)।',
      'गलती: समानांतर अनुनाद और सीरीज अनुनाद के व्यवहार में भ्रमित होना।',
      'गलती: समानांतर में सीधे Z1 || Z2 की जटिल गणना; Y1 + Y2 में बदलना बहुत सरल है।'
    ],
    bn: [
      'ভুল: R এবং X যুক্ত শাখায় G = 1/R এবং B = 1/X লেখা। সংশোধন: সঠিক রূপান্তর হলো G = R/(R²+X²) এবং B = -X/(R²+X²)।',
      'ভুল: ইন্ডাক্টিভ সাসিপ্ট্যান্সকে ধনাত্মক মনে করা। সংশোধন: ইন্ডাক্টিভ কারেন্ট ল্যাগ করায় BL = -1/XL (ঋণাত্মক)।',
      'ভুল: সমান্তরাল রেজোন্যান্স ও সিরিজ রেজোন্যান্সের মধ্যে বিভ্রান্ত হওয়া।',
      'ভুল: সমান্তরাল সার্কিটে জটিল ভগ্নাংশের যোগ; অ্যাডমিট্যান্স (Y1 + Y2) ব্যবহার করলে হিসাব অত্যন্ত দ্রুত হয়।'
    ]
  },
  solvedExamples: [
    {
      id: 'ex-ch5-l12-1',
      problem: {
        en: 'An AC branch has an impedance of Z = 6 + j8 Ω. Determine: (a) Conductance G, (b) Susceptance B, (c) Admittance Y in rectangular and polar forms, and (d) Verify that |Y| = 1 / |Z|.',
        hi: 'एक एसी शाखा की प्रतिबाधा Z = 6 + j8 Ω है। ज्ञात करें: (a) चालकता G, (b) ससेप्टेंस B, (c) आयताकार एवं ध्रुवीय रूपों में प्रवेश्यता Y, एवं (d) सत्यापित करें कि |Y| = 1 / |Z|।',
        bn: 'একটি এসি শাখার ইম্পিড্যান্স Z = ৬ + j৮ Ω। নির্ণয় করুন: (a) কন্ডাক্ট্যান্স G, (b) সাসিপ্ট্যান্স B, (c) আয়তাকার ও পোলার রূপে অ্যাডমিট্যান্স Y, এবং (d) যাচাই করুন |Y| = 1 / |Z|।'
      },
      solution: {
        en: 'Given:\n- R = 6 Ω, X = +8 Ω (Inductive)\n\n1. Impedance Magnitude and Angle:\n|Z| = √(6² + 8²) = √(36 + 64) = √100 = 10.00 Ω\nθz = tan⁻¹(8 / 6) = 53.13°\nZ = 10.00 ∠ 53.13° Ω\n\n2. Conductance (G):\nG = R / |Z|² = 6 / 10² = 6 / 100 = 0.060 S (or 60 mS)\n\n3. Susceptance (B):\nB = -X / |Z|² = -8 / 10² = -8 / 100 = -0.080 S (or -80 mS, inductive)\n\n4. Complex Admittance:\nRectangular Form: Y = G + jB = 0.060 - j0.080 S\nPolar Form: |Y| = √(0.060² + (-0.080)²) = √(0.0036 + 0.0064) = √0.0100 = 0.100 S\nθy = tan⁻¹(-0.080 / 0.060) = -53.13°\nY = 0.100 ∠ -53.13° S\n\n5. Verification:\n|Y| = 1 / |Z| = 1 / 10.00 = 0.100 S (Matches perfectly!)\nθy = -θz = -53.13° (Verified!)',
        hi: 'दिया गया है:\n- R = 6 Ω, X = +8 Ω, |Z| = 10.00 Ω, θz = 53.13°\n\n1. चालकता: G = 6 / 100 = 0.060 S\n2. ससेप्टेंस: B = -8 / 100 = -0.080 S\n3. प्रवेश्यता: Y = 0.060 - j0.080 S = 0.100 ∠ -53.13° S\n4. सत्यापन: |Y| = 1 / |Z| = 1 / 10 = 0.100 S',
        bn: 'প্রদত্ত:\n- R = ৬ Ω, X = +৮ Ω, |Z| = ১০.০০ Ω, θz = ৫৩.১৩°\n\n১. কন্ডাক্ট্যান্স: G = ৬ / ১০০ = ০.০৬০ S\n২. সাসিপ্ট্যান্স: B = -৮ / ১০০ = -০.০৮০ S\n৩. অ্যাডমিট্যান্স: Y = ০.০৬০ - j০.০৮০ S = ০.১০০ ∠ -৫৩.১৩° S\n৪. যাচাই: |Y| = ১ / ১০ = ০.১০০ S'
      },
      givenValues: {
        'R': '6 Ω',
        'X': '8 Ω'
      },
      finalAnswer: {
        en: 'G = 0.060 S, B = -0.080 S (inductive), Y = 0.060 - j0.080 S = 0.100 ∠ -53.13° S',
        hi: 'G = 0.060 S, B = -0.080 S (इंडक्टिव), Y = 0.060 - j0.080 S = 0.100 ∠ -53.13° S',
        bn: 'G = ০.০৬০ S, B = -০.০৮০ S (ইন্ডাক্টিভ), Y = ০.০৬০ - j০.০৮০ S = ০.১০০ ∠ -৫৩.১৩° S'
      }
    },
    {
      id: 'ex-ch5-l12-2',
      problem: {
        en: 'Two parallel branches are connected across a 200 V, 50 Hz AC supply. Branch 1 has Z1 = 4 + j3 Ω. Branch 2 has Z2 = 6 - j8 Ω. Using the admittance method, calculate: (a) Admittance of Branch 1 (Y1), (b) Admittance of Branch 2 (Y2), (c) Total circuit admittance (Y_total), (d) Total supply current I_total, and (e) Overall circuit power factor.',
        hi: 'दो समानांतर शाखाएँ 200 V, 50 Hz एसी आपूर्ति से जुड़ी हैं। शाखा 1 की Z1 = 4 + j3 Ω तथा शाखा 2 की Z2 = 6 - j8 Ω है। प्रवेश्यता विधि द्वारा गणना करें: (a) Y1, (b) Y2, (c) कुल Y_total, (d) कुल धारा I_total, एवं (e) समग्र पावर फैक्टर।',
        bn: 'দুটি সমান্তরাল শাখা ২০০ V, ৫০ Hz এসি উৎসের সাথে যুক্ত। শাখা ১ এর Z1 = ৪ + j৩ Ω এবং শাখা ২ এর Z2 = ৬ - j৮ Ω। অ্যাডমিট্যান্স পদ্ধতিতে নির্ণয় করুন: (a) Y1, (b) Y2, (c) মোট Y_total, (d) মোট কারেন্ট I_total, এবং (e) সামগ্রিক পাওয়ার ফ্যাক্টর।'
      },
      solution: {
        en: '1. Branch 1 Admittance (Y1):\n|Z1|² = 4² + 3² = 25\nG1 = 4 / 25 = 0.160 S\nB1 = -3 / 25 = -0.120 S\nY1 = 0.160 - j0.120 S\n\n2. Branch 2 Admittance (Y2):\n|Z2|² = 6² + (-8)² = 100\nG2 = 6 / 100 = 0.060 S\nB2 = -(-8) / 100 = +0.080 S\nY2 = 0.060 + j0.080 S\n\n3. Total Admittance (Y_total):\nG_total = G1 + G2 = 0.160 + 0.060 = 0.220 S\nB_total = B1 + B2 = -0.120 + 0.080 = -0.040 S\nY_total = 0.220 - j0.040 S\n|Y_total| = √(0.220² + (-0.040)²) = √(0.0484 + 0.0016) = √0.0500 = 0.2236 S\nPhase Angle θy = tan⁻¹(-0.040 / 0.220) = -10.30°\n\n4. Total Current:\nI_total = V · |Y_total| = 200 × 0.2236 = 44.72 A\nBecause θy = -10.30°, current lags voltage by 10.30° (Inductive circuit overall).\n\n5. Overall Power Factor:\nPF = cos(10.30°) = G_total / |Y_total| = 0.220 / 0.2236 = 0.984 (Lagging)',
        hi: '1. Y1 = 0.160 - j0.120 S\n2. Y2 = 0.060 + j0.080 S\n3. Y_total = 0.220 - j0.040 S, |Y_total| = 0.2236 S, θy = -10.30°\n4. कुल धारा I = 200 × 0.2236 = 44.72 A\n5. समग्र पावर फैक्टर = 0.220 / 0.2236 = 0.984 (पश्चगामी / Lagging)',
        bn: '১. Y1 = ০.১৬০ - j০.১২০ S\n২. Y2 = ০.০৬০ + j০.০৮০ S\n৩. Y_total = ০.২২০ - j০.০৪০ S, |Y_total| = ০.২২৩৬ S, θy = -১০.৩০°\n৪. মোট কারেন্ট I = ২০০ × ০.২২৩৬ = ৪৪.৭২ A\n৫. পাওয়ার ফ্যাক্টর = ০.২২০ / ০.২২৩৬ = ০.৯৮৪ (ল্যাগিং)'
      },
      givenValues: {
        'Z1': '4 + j3 Ω',
        'Z2': '6 - j8 Ω',
        'V': '200 V'
      },
      finalAnswer: {
        en: 'Y1 = 0.160 - j0.120 S, Y2 = 0.060 + j0.080 S, Y_total = 0.220 - j0.040 S, I_total = 44.72 A, PF = 0.984 (lagging)',
        hi: 'Y1 = 0.160 - j0.120 S, Y2 = 0.060 + j0.080 S, Y_total = 0.220 - j0.040 S, I_total = 44.72 A, PF = 0.984 (पश्चगामी)',
        bn: 'Y1 = ০.১৬০ - j০.১২০ S, Y2 = ০.০৬০ + j০.০৮০ S, Y_total = ০.২২০ - j০.০৪০ S, I_total = ৪৪.৭২ A, PF = ০.৯৮৪ (ল্যাগিং)'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch5-l12-1',
      question: {
        en: 'The SI unit of Admittance (Y), Conductance (G), and Susceptance (B) is:',
        hi: 'प्रवेश्यता (Y), चालकता (G) और ससेप्टेंस (B) का SI मात्रक है:',
        bn: 'অ্যাডমিট্যান্স (Y), কন্ডাক্ট্যান্স (G) এবং সাসিপ্ট্যান্স (B) এর SI একক হলো:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Ohm (Ω)', hi: 'ओम (Ω)', bn: 'ওহম (Ω)' } },
        { id: 'opt-b', text: { en: 'Siemens (S)', hi: 'सीमेंस (Siemens, S)', bn: 'সিমেন্স (S)' } },
        { id: 'opt-c', text: { en: 'Henry (H)', hi: 'हेनरी (H)', bn: 'হেনরি (H)' } },
        { id: 'opt-d', text: { en: 'Farad (F)', hi: 'फैराड (F)', bn: 'ফ্যারাড (F)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'Admittance Y, conductance G, and susceptance B are all reciprocal opposition quantities and are measured in Siemens (symbol S, historically mho ℧).',
        hi: 'प्रवेश्यता Y, चालकता G और ससेप्टेंस B सभी का SI मात्रक सीमेंस (Siemens, S) होता है।',
        bn: 'অ্যাডমিট্যান্স Y, কন্ডাক্ট্যান্স G এবং সাসিপ্ট্যান্স B সবারই SI একক হলো সিমেন্স (Siemens, S)।'
      }
    },
    {
      id: 'mcq-ch5-l12-2',
      question: {
        en: 'If an AC branch has impedance Z = R + jX, what is the exact formula for its conductance G?',
        hi: 'यदि किसी एसी शाखा की प्रतिबाधा Z = R + jX है, तो उसकी चालकता G का सही सूत्र क्या है?',
        bn: 'যদি একটি এসি শাখার ইম্পিড্যান্স Z = R + jX হয়, তবে এর কন্ডাক্ট্যান্স G এর সঠিক সূত্র কোনটি?'
      },
      options: [
        { id: 'opt-a', text: { en: 'G = 1 / R', hi: 'G = 1 / R', bn: 'G = 1 / R' } },
        { id: 'opt-b', text: { en: 'G = R / (R² + X²)', hi: 'G = R / (R² + X²)', bn: 'G = R / (R² + X²)' } },
        { id: 'opt-c', text: { en: 'G = X / (R² + X²)', hi: 'G = X / (R² + X²)', bn: 'G = X / (R² + X²)' } },
        { id: 'opt-d', text: { en: 'G = √(R² + X²)', hi: 'G = √(R² + X²)', bn: 'G = √(R² + X²)' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'From Y = 1 / (R + jX) = (R - jX) / (R² + X²), the real part is Conductance G = R / (R² + X²). Writing G = 1/R is only valid in pure DC or purely resistive circuits without reactance.',
        hi: 'Y = 1 / (R + jX) = (R - jX) / (R² + X²) से वास्तविक भाग चालकता G = R / (R² + X²) प्राप्त होता है। G = 1/R केवल बिना रिएक्टेंस वाले शुद्ध प्रतिरोधी परिपथ में सही होता है।',
        bn: 'Y = 1 / (R + jX) = (R - jX) / (R² + X²) থেকে বাস্তব অংশ কন্ডাক্ট্যান্স G = R / (R² + X²)। G = 1/R কেবল রিঅ্যাকট্যান্সহীন বিশুদ্ধ রোধের ক্ষেত্রে প্রযোজ্য।'
      }
    },
    {
      id: 'mcq-ch5-l12-3',
      question: {
        en: 'In a parallel AC circuit at resonance (parallel resonance), the total line current is:',
        hi: 'समानांतर अनुनाद (Parallel Resonance) की स्थिति में कुल लाइन धारा होती है:',
        bn: 'সমান্তরাল রেজোন্যান্সের অবস্থায় মোট লাইন কারেন্ট হয়:'
      },
      options: [
        { id: 'opt-a', text: { en: 'Maximum', hi: 'अधिकतम', bn: 'সর্বোচ্চ' } },
        { id: 'opt-b', text: { en: 'Minimum', hi: 'न्यूनतम', bn: 'সর্বনিম্ন' } },
        { id: 'opt-c', text: { en: 'Zero', hi: 'शून्य', bn: 'শূন্য' } },
        { id: 'opt-d', text: { en: 'Infinite', hi: 'अनंत', bn: 'অসীম' } }
      ],
      correctOptionId: 'opt-b',
      explanation: {
        en: 'At parallel resonance, net susceptance B = 0, meaning admittance is minimum (Y = G) and impedance is maximum (Dynamic Resistance Rd = L / (CR)). Thus, the total supply line current drawn is MINIMUM (Rejector circuit).',
        hi: 'समानांतर अनुनाद पर कुल ससेप्टेंस B = 0 होता है, जिससे प्रवेश्यता न्यूनतम (Y = G) और प्रतिबाधा अधिकतम (Rd = L/CR) हो जाती है। अतः कुल लाइन धारा न्यूनतम होती है।',
        bn: 'সমান্তরাল রেজোন্যান্সে নেট সাসিপ্ট্যান্স B = ০ হওয়ায় অ্যাডমিট্যান্স সর্বনিম্ন (Y = G) এবং ইম্পিড্যান্স সর্বোচ্চ (Rd = L/CR) হয়। ফলে মোট লাইন কারেন্ট সর্বনিম্ন হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch5-l12-1',
      question: {
        en: 'An admittance is given as Y = 0.08 + j0.06 S. Determine: (a) Magnitude |Y| and phase angle θy, (b) Equivalent series resistance R, (c) Equivalent series reactance X and its nature (inductive or capacitive), and (d) Total equivalent series impedance Z.',
        hi: 'एक प्रवेश्यता Y = 0.08 + j0.06 S दी गई है। ज्ञात करें: (a) परिमाण |Y| एवं कोण θy, (b) तुल्य श्रेणी प्रतिरोध R, (c) तुल्य श्रेणी रिएक्टेंस X एवं उसकी प्रकृति, एवं (d) कुल तुल्य श्रेणी प्रतिबाधा Z।',
        bn: 'একটি অ্যাডমিট্যান্স Y = ০.০৮ + j০.০৬ S দেওয়া আছে। নির্ণয় করুন: (a) মান |Y| ও কোণ θy, (b) সমতুল্য সিরিজ রোধ R, (c) সমতুল্য সিরিজ রিঅ্যাকট্যান্স X ও তার প্রকৃতি, এবং (d) মোট সমতুল্য সিরিজ ইম্পিড্যান্স Z।'
      },
      hint: {
        en: '|Y|² = 0.08² + 0.06² = 0.0064 + 0.0036 = 0.0100. |Y| = 0.10 S. R = G / |Y|² = 0.08 / 0.01 = 8 Ω. X = -B / |Y|² = -0.06 / 0.01 = -6 Ω (Capacitive, XC = 6 Ω). Z = 8 - j6 Ω = 10 ∠ -36.87° Ω.',
        hi: '|Y| = 0.10 S, R = 8 Ω, X = -6 Ω (Capacitive), Z = 8 - j6 Ω = 10 ∠ -36.87° Ω।',
        bn: '|Y| = ০.১০ S, R = ৮ Ω, X = -৬ Ω (ক্যাপাসিটিভ), Z = ৮ - j৬ Ω = ১০ ∠ -৩৬.৮৭° Ω।'
      },
      answerKey: {
        en: '(a) |Y| = √(0.08² + 0.06²) = √0.0100 = 0.100 S. θy = tan⁻¹(0.06 / 0.08) = +36.87°.\n(b) Equivalent Series Resistance R = G / |Y|² = 0.08 / 0.0100 = 8.00 Ω.\n(c) Equivalent Series Reactance X = -B / |Y|² = -0.06 / 0.0100 = -6.00 Ω (Capacitive reactance XC = 6.00 Ω).\n(d) Total Series Impedance Z = R + jX = 8.00 - j6.00 Ω = 10.00 ∠ -36.87° Ω.',
        hi: '(a) |Y| = 0.100 S, θy = +36.87°।\n(b) तुल्य श्रेणी प्रतिरोध R = 8.00 Ω।\n(c) तुल्य श्रेणी रिएक्टेंस X = -6.00 Ω (कैपेसिटिव, XC = 6.00 Ω)।\n(d) कुल श्रेणी प्रतिबाधा Z = 8.00 - j6.00 Ω = 10.00 ∠ -36.87° Ω।',
        bn: '(a) |Y| = ০.১০০ S, θy = +৩৬.৮৭°।\n(b) সমতুল্য সিরিজ রোধ R = ৮.০০ Ω।\n(c) সমতুল্য সিরিজ রিঅ্যাকট্যান্স X = -৬.০০ Ω (ক্যাপাসিটিভ, XC = ৬.০০ Ω)।\n(d) মোট সিরিজ ইম্পিড্যান্স Z = ৮.০০ - j৬.০০ Ω = ১০.০০ ∠ -৩৬.৮৭° Ω।'
      }
    }
  ]
};
