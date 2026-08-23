import { Lesson } from '../types';

export const LESSON_TRANSFORMER_FUNDAMENTALS: Lesson = {
  id: 'lsn-ch6-transformer-fundamentals',
  topicId: 'ch6-transformer-fundamentals',
  chapterId: 'ch-electrical-machines',
  order: 13,
  title: {
    en: 'Transformer Fundamentals, Construction & EMF Equation',
    hi: 'ट्रांसफॉर्मर के मूल सिद्धांत, संरचना एवं EMF समीकरण',
    bn: 'ট্রান্সফর্মারের মৌলিক ধারণা, গঠন ও EMF সমীকরণ'
  },
  description: {
    en: 'Deep-dive into static electrical energy transfer: Faraday\'s law of mutual induction, laminated silicon steel magnetic core, primary/secondary windings, step-up/step-down transformation ratio, complete mathematical derivation of the RMS EMF equation (E = 4.44·f·N·Φm), EMF per turn relationship, and rigorous engineering calculations.',
    hi: 'स्थैतिक विद्युत ऊर्जा स्थानांतरण का गहन अध्ययन: फैराडे का पारस्परिक प्रेरण नियम, लैमिनेटेड सिलिकॉन स्टील कोर, प्राइमरी व सेकेंडरी वाइंडिंग, स्टेप-अप व स्टेप-डाउन रूपांतरण अनुपात, RMS EMF समीकरण (E = 4.44·f·N·Φm) का गणितीय निगमन, प्रति टर्न EMF संबंध और विस्तृत इंजीनियरिंग संख्यात्मक प्रश्न।',
    bn: 'স্থির বৈদ্যুতিক শক্তি স্থানান্তরের বিস্তারিত আলোচনা: ফ্যারাডের পারস্পরিক আবেশ নীতি, লেমিনেটেড সিলিকন স্টিল কোর, প্রাইমারি ও সেকেন্ডারি ওয়াইন্ডিং, স্টেপ-আপ ও স্টেপ-ডাউন রূপান্তর অনুপাত, RMS EMF সমীকরণ (E = 4.44·f·N·Φm) প্রতিপাদন, প্রতি টার্নে EMF এবং গাণিতিক সমস্যার বিশদ সমাধান।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'A transformer is a stationary (static) electrical machine with zero moving parts that transfers alternating electrical power from one circuit to another at the exact same frequency while changing voltage and current levels. When AC voltage is connected to the primary coil, it creates an alternating magnetic flux in the laminated iron core. This changing flux travels through the magnetic core and cuts the secondary coil, inducing an AC voltage in it through Faraday\'s Law of Mutual Induction. If the secondary coil has more turns than the primary (N2 > N1), the voltage is stepped up; if it has fewer turns (N2 < N1), the voltage is stepped down. Because no energy is created, stepping up the voltage causes the current to decrease by the same proportion (V1·I1 ≈ V2·I2).',
    hi: 'ट्रांसफॉर्मर एक स्थिर (static) विद्युत मशीन है जिसमें कोई घूमने वाला भाग नहीं होता। यह समान आवृत्ति (frequency) पर विद्युत ऊर्जा को एक परिपथ से दूसरे परिपथ में स्थानांतरित करता है और आवश्यकतानुसार वोल्टेज व धारा के स्तर को बदलता है। जब प्राइमरी वाइंडिंग में AC वोल्टेज दिया जाता है, तो लोहे की लैमिनेटेड कोर में बदलता हुआ चुंबकीय फ्लक्स बनता है। यह फ्लक्स सेकेंडरी वाइंडिंग से लिंक होकर फैराडे के म्यूचुअल इंडक्शन नियम से उसमें वोल्टेज पैदा करता है। यदि सेकेंडरी में अधिक फेरे (turns) हैं तो वोल्टेज बढ़ जाता है (स्टेप-अप), और यदि कम फेरे हैं तो वोल्टेज घट जाता है (स्टेप-डाउन)। चूँकि शक्ति नियत रहती है, वोल्टेज बढ़ने पर धारा उसी अनुपात में घट जाती है।',
    bn: 'ট্রান্সফরমার হলো একটি স্থির (static) বৈদ্যুতিক যন্ত্র যাতে কোনো ঘূর্ণায়মান অংশ থাকে না। এটি একই কম্পাঙ্কে (frequency) এক বর্তনী থেকে অন্য বর্তনীতে বৈদ্যুতিক শক্তি স্থানান্তর করে এবং ভোল্টেজ ও কারেন্টের মাত্রা পরিবর্তন করে। প্রাইমারি ওয়াইন্ডিংয়ে এসি ভোল্টেজ দিলে কোরের মধ্যে পরিবর্তনশীল চৌম্বক ফ্লাক্স তৈরি হয়। এই ফ্লাক্স সেকেন্ডারি কয়েলকে ছেদ করে ফ্যারাডের পারস্পরিক আবেশ (Mutual Induction) নিয়মানুসারে ভোল্টেজ আবিষ্ট করে। সেকেন্ডারিতে প্যাঁচ বা টার্ন বেশি থাকলে ভোল্টেজ বৃদ্ধি পায় (স্টেপ-আপ), আর টার্ন কম থাকলে ভোল্টেজ হ্রাস পায় (স্টেপ-ডাউন)। শক্তি অপরিবর্তিত থাকায় ভোল্টেজ বাড়লে কারেন্ট একই অনুপাতে হ্রাস পায়।'
  },
  detailedExplanation: {
    en: `1. Transformer Working Principle & Physical Nature:
- A transformer is a static electromagnetic device with no moving parts, resulting in remarkably high operating efficiency (typically 95% to 99%) due to the total absence of mechanical friction and windage losses.
- Operating Mechanism: Operates purely on Faraday's Law of Mutual Electromagnetic Induction and Lenz's Law.
- Power & Frequency Invariance:
  * Frequency Invariance: f1 = f2 (The frequency of the induced secondary voltage is strictly identical to the input supply frequency).
  * Apparent Power Invariance: In an ideal lossless transformer, Input Apparent Power = Output Apparent Power (S1 = S2, or V1·I1 = V2·I2).

2. Core Structural Elements & Windings:
- Magnetic Core: Constructed of high-permeability, cold-rolled grain-oriented (CRGO) silicon steel laminations (0.27 mm to 0.35 mm thick) coated with insulating varnish to minimize eddy current and hysteresis losses.
- Primary Winding: Connected to the electrical AC supply source; draws magnetizing current and sets up mutual core flux.
- Secondary Winding: Connected to the electrical load; delivers electrical power induced by mutual flux linkage.

3. Detailed Mathematical Derivation of Transformer EMF Equation:
Let:
- N1 = Number of turns in primary winding
- N2 = Number of turns in secondary winding
- Φm = Maximum (peak) core magnetic flux in Webers (Wb)
- Bm = Maximum core flux density in Tesla (Wb/m²)
- Ai = Net iron cross-sectional area of core in m² (Φm = Bm · Ai)
- f = Supply frequency in Hertz (Hz)

Derivation:
1. The alternating magnetic flux in the core is sinusoidal:
   Φ(t) = Φm · sin(ωt) = Φm · sin(2πf·t)

2. By Faraday's Law of Electromagnetic Induction, the instantaneous induced EMF in a coil of N turns is:
   e(t) = -N · (dΦ/dt) = -N · d/dt [Φm · sin(2πf·t)]
   e(t) = -N · Φm · 2πf · cos(2πf·t) = 2πf · N · Φm · sin(2πf·t - 90°)

3. The maximum (peak) instantaneous value of induced EMF is:
   Em = 2πf · N · Φm

4. For a pure sinusoidal waveform, the Root-Mean-Square (RMS) value is:
   E_rms = Em / √2 = (2π / √2) · f · N · Φm
   Since 2π / √2 = (2 · 3.14159265) / 1.41421356 = 4.44288... ≈ 4.44

5. Primary and Secondary RMS Induced EMFs:
   E1 = 4.44 · f · N1 · Φm = 4.44 · f · N1 · Bm · Ai
   E2 = 4.44 · f · N2 · Φm = 4.44 · f · N2 · Bm · Ai

6. EMF Per Turn Concept:
   E1 / N1 = E2 / N2 = 4.44 · f · Φm
   The induced voltage per turn is identical in both windings.

4. Voltage Transformation Ratio (K):
- K = E2 / E1 = N2 / N1 = V2 / V1 = I1 / I2
- Turns Ratio a = 1 / K = N1 / N2 = E1 / E2 = V1 / V2 = I2 / I1
- Classification:
  * Step-Up Transformer: N2 > N1 (K > 1), V2 > V1, I2 < I1
  * Step-Down Transformer: N2 < N1 (K < 1), V2 < V1, I2 > I1
  * 1:1 Isolation Transformer: N2 = N1 (K = 1), V2 = V1, used for safety isolation and common-mode noise suppression.`,
    hi: `1. ट्रांसफॉर्मर का कार्य सिद्धांत:
- ट्रांसफॉर्मर एक स्थैतिक (static) विद्युत उपकरण है जिसमें कोई घूमने वाला भाग नहीं होता, जिससे इसकी दक्षता 95% से 99% तक होती है।
- यह फैराडे के म्यूचुअल इंडक्शन और लेन्ज के नियम पर कार्य करता है।
- आवृत्ति हमेशा स्थिर रहती है (f1 = f2) तथा शक्ति अपरिवर्तित रहती है (V1·I1 ≈ V2·I2)।

2. मुख्य संरचनात्मक घटक:
- चुंबकीय कोर: सिलिकॉन स्टील (CRGO) की पतली पत्तियों (0.35 mm) को वार्निश से लैमिनेट करके बनाई जाती है ताकि भंवर धारा हानि (Eddy Current Loss) कम हो।
- प्राइमरी वाइंडिंग: AC स्रोत से जुड़ी होती है और कोर में फ्लक्स उत्पन्न करती है।
- सेकेंडरी वाइंडिंग: लोड से जुड़ी होती है और प्रेरित EMF द्वारा शक्ति प्रदान करती है।

3. ट्रांसफॉर्मर EMF समीकरण का निगमन:
- कोर में साइन तरंग फ्लक्स: Φ(t) = Φm · sin(2πf·t)
- फैराडे नियम से तात्कालिक EMF: e(t) = -N·(dΦ/dt) = 2πf·N·Φm·sin(2πf·t - 90°)
- अधिकतम EMF: Em = 2πf·N·Φm
- RMS EMF: E = Em / √2 = (2π / √2)·f·N·Φm = 4.44·f·N·Φm
- प्राइमरी EMF: E1 = 4.44·f·N1·Φm
- सेकेंडरी EMF: E2 = 4.44·f·N2·Φm
- प्रति टर्न EMF: E1/N1 = E2/N2 = 4.44·f·Φm

4. रूपांतरण अनुपात (K):
- K = E2/E1 = N2/N1 = V2/V1 = I1/I2
- स्टेप-अप: N2 > N1 (K > 1, वोल्टेज बढ़ता है, धारा घटती है)
- स्टेप-डाउन: N2 < N1 (K < 1, वोल्टेज घटता है, धारा बढ़ती है)`,
    bn: `১. ট্রান্সফর্মারের কার্যপ্রণালী ও নীতি:
- ট্রান্সফরমার একটি স্থির ইলেক্ট্রোম্যাগনেটিক যন্ত্র যাতে কোনো ঘূর্ণায়মান যন্ত্রাংশ নেই, ফলে ঘর্ষণহীন হওয়ায় এর দক্ষতা ৯৫% থেকে ৯৯% পর্যন্ত হয়।
- এটি ফ্যারাডের পারস্পরিক আবেশ (Mutual Induction) এবং লেঞ্জের সূত্রে পরিচালিত হয়।
- কম্পাঙ্ক অপরিবর্তিত থাকে (f1 = f2) এবং শক্তি সংরক্ষিত থাকে (V1·I1 ≈ V2·I2)।

২. মূল গাঠনিক উপাদানসমূহ:
- ম্যাগনেটিক কোর: হিস্টেরেসিস ও এডি কারেন্ট লস কমাতে উচ্চ প্রবেশ্যতার সিলিকন স্টিল (CRGO) লেমিনেশন দিয়ে তৈরি।
- প্রাইমারি ওয়াইন্ডিং: এসি সাপ্লাইয়ের সাথে যুক্ত থাকে এবং কোরে ফ্লাক্স তৈরি করে।
- সেকেন্ডারি ওয়াইন্ডিং: লোডের সাথে যুক্ত থাকে এবং আবিষ্ট EMF লোডে শক্তি প্রদান করে।

৩. EMF সমীকরণ প্রতিপাদন:
- সাইনোসয়েডাল ফ্লাক্স: Φ(t) = Φm · sin(2πf·t)
- ফ্যারাডের সূত্রে তাৎক্ষণিক EMF: e(t) = -N·(dΦ/dt) = 2πf·N·Φm·sin(2πf·t - 90°)
- শীর্ষ EMF: Em = 2πf·N·Φm
- RMS EMF: E = Em / √2 = (2π / √2)·f·N·Φm = ৪.৪৪·f·N·Φm
- প্রাইমারি EMF: E1 = ৪.৪৪·f·N1·Φm
- সেকেন্ডারি EMF: E2 = ৪.৪৪·f·N2·Φm
- প্রতি টার্নে EMF: E1/N1 = E2/N2 = ৪.৪৪·f·Φm

৪. রূপান্তর অনুপাত (K):
- K = E2/E1 = N2/N1 = V2/V1 = I1/I2
- স্টেপ-আপ: N2 > N1 (K > 1, ভোল্টেজ বৃদ্ধি পায়, কারেন্ট হ্রাস পায়)
- স্টেপ-ডাউন: N2 < N1 (K < 1, ভোল্টেজ হ্রাস পায়, কারেন্ট বৃদ্ধি পায়)`
  },
  formulas: [
    {
      id: 'f-trans-emf-primary',
      symbol: 'E1',
      expression: 'E1 = 4.44 · f · N1 · Φm',
      formula: 'E_1 = 4.44 \\cdot f \\cdot N_1 \\cdot \\Phi_m = 4.44 \\cdot f \\cdot N_1 \\cdot B_m \\cdot A_i',
      title: {
        en: 'Primary RMS Induced EMF',
        hi: 'प्राइमरी RMS प्रेरित EMF',
        bn: 'প্রাইমারি RMS আবিষ্ট EMF'
      },
      description: {
        en: 'RMS induced voltage in the primary winding where f is frequency in Hz, N1 is turns, and Φm is peak flux in Webers.',
        hi: 'प्राइमरी वाइंडिंग में प्रेरित RMS वोल्टेज जहाँ f आवृत्ति, N1 टर्न्स और Φm अधिकतम कोर फ्लक्स है।',
        bn: 'প্রাইমারি ওয়াইন্ডিংয়ে আবিষ্ট RMS ভোল্টেজ যেখানে f কম্পাঙ্ক, N1 টার্ন এবং Φm সর্বোচ্চ ফ্লাক্স।'
      }
    },
    {
      id: 'f-trans-emf-secondary',
      symbol: 'E2',
      expression: 'E2 = 4.44 · f · N2 · Φm',
      formula: 'E_2 = 4.44 \\cdot f \\cdot N_2 \\cdot \\Phi_m = 4.44 \\cdot f \\cdot N_2 \\cdot B_m \\cdot A_i',
      title: {
        en: 'Secondary RMS Induced EMF',
        hi: 'सेकेंडरी RMS प्रेरित EMF',
        bn: 'সেকেন্ডারি RMS আবিষ্ট EMF'
      },
      description: {
        en: 'RMS induced voltage in the secondary winding proportional to secondary turns N2.',
        hi: 'सेकेंडरी वाइंडिंग में प्रेरित RMS वोल्टेज जो सेकेंडरी टर्न्स N2 के समानुपाती होता है।',
        bn: 'সেকেন্ডারি ওয়াইন্ডিংয়ে আবিষ্ট RMS ভোল্টেজ যা সেকেন্ডারি টার্ন N2-এর সমানুপাতিক।'
      }
    },
    {
      id: 'f-trans-emf-per-turn',
      symbol: 'E/N',
      expression: 'E1 / N1 = E2 / N2 = 4.44 · f · Φm',
      formula: '\\frac{E_1}{N_1} = \\frac{E_2}{N_2} = 4.44 \\cdot f \\cdot \\Phi_m',
      title: {
        en: 'EMF Per Turn Relationship',
        hi: 'प्रति टर्न EMF संबंध',
        bn: 'প্রতি টার্নে আবিষ্ট EMF সম্পর্ক'
      },
      description: {
        en: 'The induced voltage per single turn is identically equal across both primary and secondary windings.',
        hi: 'प्राइमरी और सेकेंडरी दोनों वाइंडिंग में प्रति सिंगल टर्न प्रेरित वोल्टेज पूरी तरह समान होता है।',
        bn: 'প্রাইমারি ও সেকেন্ডারি উভয় ওয়াইন্ডিংয়ে প্রতি একক টার্নে আবিষ্ট ভোল্টেজ হুবহু সমান।'
      }
    },
    {
      id: 'f-trans-transformation-ratio',
      symbol: 'K',
      expression: 'K = V2/V1 = N2/N1 = I1/I2',
      formula: 'K = \\frac{V_2}{V_1} = \\frac{E_2}{E_1} = \\frac{N_2}{N_1} = \\frac{I_1}{I_2}',
      title: {
        en: 'Transformation Ratio (K) & Current Inversion',
        hi: 'रूपांतरण अनुपात (K) एवं धारा व्युत्क्रम',
        bn: 'রূপান্তর অনুপাত (K) ও কারেন্ট বিপরীত সম্পর্ক'
      },
      description: {
        en: 'Voltage ratio is directly proportional to turns ratio; current ratio is inversely proportional to turns ratio.',
        hi: 'वोल्टेज अनुपात टर्न्स के समानुपाती होता है, जबकि धारा अनुपात टर्न्स के व्युत्क्रमानुपाती होता है।',
        bn: 'ভোল্টেজ অনুপাত টার্ন সংখ্যার সমানুপাতিক এবং কারেন্ট অনুপাত টার্ন সংখ্যার ব্যস্তানুপাতিক।'
      }
    },
    {
      id: 'f-trans-peak-flux',
      symbol: 'Φm',
      expression: 'Φm = Bm · Ai',
      formula: '\\Phi_m = B_m \\cdot A_i',
      title: {
        en: 'Maximum Core Magnetic Flux',
        hi: 'अधिकतम चुंबकीय फ्लक्स',
        bn: 'সর্বোচ্চ চৌম্বক ফ্লাক্স'
      },
      description: {
        en: 'Peak mutual flux equals maximum peak flux density (Bm in Tesla) multiplied by net ferromagnetic core cross-sectional area (Ai in m²).',
        hi: 'अधिकतम फ्लक्स बराबर अधिकतम फ्लक्स घनत्व (Bm) गुणा कोर का प्रभावी क्षेत्रफल (Ai)।',
        bn: 'সর্বোচ্চ ফ্লাক্স সমান সর্বোচ্চ ফ্লাক্স ঘনত্ব (Bm) গুণিতক কোরের কার্যকরী ক্ষেত্রফল (Ai)।'
      }
    }
  ],
  solvedExamples: [
    {
      id: 'ex-trans-emf-1',
      problem: {
        en: 'A 50 kVA, 4400/220 V, 50 Hz single-phase transformer has a core cross-sectional area of 120 cm² and peak flux density Bm = 1.25 Tesla. Calculate: 1) Number of primary turns N1, 2) Number of secondary turns N2, 3) Full-load primary and secondary currents I1 and I2, 4) Induced EMF per turn.',
        hi: 'एक 50 kVA, 4400/220 V, 50 Hz सिंगल-फेज ट्रांसफॉर्मर का कोर क्षेत्रफल 120 cm² और Bm = 1.25 T है। ज्ञात कीजिए: 1) N1, 2) N2, 3) I1 एवं I2, 4) प्रति टर्न EMF।',
        bn: 'একটি ৫০ kVA, ৪৪০০/২২০ V, ৫০ Hz ট্রান্সফর্মারের কোরের ক্ষেত্রফল ১২০ cm² এবং Bm = ১.২৫ T। নির্ণয় করো: ১) N1, ২) N2, ৩) I1 ও I2, ৪) প্রতি টার্নে EMF।'
      },
      givenValues: {
        'S (Rating)': '50 kVA = 50,000 VA',
        'V1 (Primary)': '4400 V',
        'V2 (Secondary)': '220 V',
        'f (Frequency)': '50 Hz',
        'Ai (Core Area)': '120 cm² = 0.012 m²',
        'Bm (Peak Flux Density)': '1.25 Tesla'
      },
      solution: {
        en: '1) Peak core flux Φm = Bm × Ai = 1.25 × 0.012 = 0.015 Wb.\n2) Using EMF formula E1 = 4.44 · f · N1 · Φm:\n   N1 = 4400 / (4.44 × 50 × 0.015) = 4400 / 3.33 = 1321.32 ≈ 1321 turns.\n3) Using transformation ratio N2 = N1 × (V2 / V1):\n   N2 = 1321 × (220 / 4400) = 1321 / 20 = 66.05 ≈ 66 turns.\n4) Full-load primary current I1 = S / V1 = 50,000 / 4400 = 11.36 A.\n5) Full-load secondary current I2 = S / V2 = 50,000 / 220 = 227.27 A.\n6) EMF per turn = E1 / N1 = 4400 / 1321 = 3.33 V/turn (or 4.44 × 50 × 0.015 = 3.33 V/turn).',
        hi: '1) Φm = 1.25 × 0.012 = 0.015 Wb।\n2) N1 = 4400 / (4.44 × 50 × 0.015) = 1321 टर्न।\n3) N2 = 1321 × (220 / 4400) = 66 टर्न।\n4) I1 = 50000 / 4400 = 11.36 A।\n5) I2 = 50000 / 220 = 227.27 A।\n6) प्रति टर्न EMF = 3.33 V/टर्न।',
        bn: '১) Φm = ১.২৫ × ০.০১২ = ০.০১৫ Wb।\n২) N1 = ৪৪০০ / (৪.৪৪ × ৫০ × ০.০১৫) = ১৩২১টি টার্ন।\n৩) N2 = ১৩২১ × (২২০ / ৪৪০০) = ৬৬টি টার্ন।\n৪) I1 = ৫০০০০ / ৪৪০০ = ১১.৩৬ A।\n৫) I2 = ৫০০০০ / ২২০ = ২২৭.২৭ A।\n৬) প্রতি টার্নে EMF = ৩.৩৩ V/টার্ন।'
      },
      finalAnswer: {
        en: 'N1 = 1321 turns, N2 = 66 turns, I1 = 11.36 A, I2 = 227.27 A, EMF per turn = 3.33 V/turn',
        hi: 'N1 = 1321 टर्न, N2 = 66 टर्न, I1 = 11.36 A, I2 = 227.27 A, प्रति टर्न EMF = 3.33 V/टर्न',
        bn: 'N1 = ১৩২১টি টার্ন, N2 = ৬৬টি টার্ন, I1 = ১১.৩৬ A, I2 = ২২৭.২৭ A, প্রতি টার্নে EMF = ৩.৩৩ V/টার্ন'
      }
    },
    {
      id: 'ex-trans-emf-2',
      problem: {
        en: 'A 2200/220 V, 50 Hz single-phase transformer has 40 secondary turns. Calculate: 1) Number of primary turns N1, 2) Peak core magnetic flux Φm, 3) If net core area is 200 cm², find the maximum flux density Bm.',
        hi: 'एक 2200/220 V, 50 Hz ट्रांसफॉर्मर में 40 सेकेंडरी टर्न हैं। ज्ञात कीजिए: 1) N1, 2) Φm, 3) यदि क्षेत्रफल 200 cm² है तो Bm।',
        bn: 'একটি ২২০০/২২০ V, ৫০ Hz ট্রান্সফর্মারের সেকেন্ডারি টার্ন ৪০টি। নির্ণয় করো: ১) N1, ২) Φm, ৩) কোরের ক্ষেত্রফল ২০০ cm² হলে Bm।'
      },
      givenValues: {
        'V1': '2200 V',
        'V2': '220 V',
        'N2': '40 turns',
        'f': '50 Hz',
        'Ai': '200 cm² = 0.02 m²'
      },
      solution: {
        en: '1) N1 = N2 × (V1 / V2) = 40 × (2200 / 220) = 40 × 10 = 400 turns.\n2) Using E2 = 4.44 · f · N2 · Φm:\n   Φm = 220 / (4.44 × 50 × 40) = 220 / 8880 = 0.02477 Wb = 24.77 mWb.\n3) Maximum flux density Bm = Φm / Ai = 0.02477 / 0.02 = 1.2387 Tesla ≈ 1.24 T.',
        hi: '1) N1 = 40 × 10 = 400 टर्न।\n2) Φm = 220 / (4.44 × 50 × 40) = 0.02477 Wb (24.77 mWb)।\n3) Bm = 0.02477 / 0.02 = 1.24 Tesla।',
        bn: '১) N1 = ৪০ × ১০ = ৪০০টি টার্ন।\n২) Φm = ২২০ / (৪.৪৪ × ৫০ × ৪০) = ০.০২৪৭৭ Wb (২৪.৭৭ mWb)।\n৩) Bm = ০.০২৪৭৭ / ০.০২ = ১.২৪ Tesla।'
      },
      finalAnswer: {
        en: 'N1 = 400 turns, Φm = 24.77 mWb, Bm = 1.24 Tesla',
        hi: 'N1 = 400 टर्न, Φm = 24.77 mWb, Bm = 1.24 Tesla',
        bn: 'N1 = ৪০০টি টার্ন, Φm = ২৪.৭৭ mWb, Bm = ১.২৪ Tesla'
      }
    }
  ],
  practicalApplications: {
    en: [
      'High-Voltage AC Transmission: Stepping up generator voltage (11 kV to 400 kV/765 kV) at power stations to minimize I²R line losses across long distances.',
      'Substation Distribution: Stepping down transmission voltage (400 kV to 33 kV to 11 kV to 415 V/230 V) for safe residential and industrial consumer usage.',
      'Galvanic Safety Isolation: 1:1 isolation transformers in medical operation theaters and electronic testing labs to protect against electric shocks and earth ground loops.',
      'Impedance Matching in Audio & Telecommunications: Maximizing signal power transfer between high-impedance amplifiers and low-impedance speakers.'
    ],
    hi: [
      'हाई-वोल्टेज AC ट्रांसमिशन: लंबी दूरी में I²R लाइन हानियों को कम करने के लिए पावर स्टेशनों पर 11 kV को 400 kV/765 kV में स्टेप-अप करना।',
      'सबस्टेशन वितरण: सुरक्षित उपयोग के लिए वोल्टेज को 400 kV से 33 kV, 11 kV और अंत में 415 V/230 V में स्टेप-डाउन करना।',
      'गैल्वेनिक सुरक्षा आइसोलेशन: मेडिकल ओटी एवं परीक्षण प्रयोगशालाओं में बिजली के झटके से सुरक्षा हेतु 1:1 आइसोलेशन ट्रांसफॉर्मर।',
      'ऑडियो एवं दूरसंचार में प्रतिबाधा मिलान (Impedance Matching): अधिकतम सिग्नल पावर ट्रांसफर सुनिश्चित करना।'
    ],
    bn: [
      'উচ্চ ভোল্টেজ এসি সঞ্চালন: দূরবর্তী স্থানে লাইনের কপার লস কমাতে বিদ্যুৎ কেন্দ্রে ১১ kV থেকে ৪০০ kV/৭৬৫ kV-তে স্টেপ-আপ করা।',
      'সাবস্টেশন বিতরণ: নিরাপদ ব্যবহারের জন্য সঞ্চালন ভোল্টেজ ৪০০ kV থেকে ৩৩ kV, ১১ kV এবং পরবর্তীতে ৪১৫ V/২৩০ V-এ রূপান্তর।',
      'গ্যালভানিক আইসোলেশন ও নিরাপত্তা: মেডিকেল অপারেশন থিয়েটার ও ল্যাবে বৈদ্যুতিক শক রোধে ১:১ আইসোলেশন ট্রান্সফরমার।',
      'ইম্পিড্যান্স ম্যাচিং: অডিও ও টেলিযোগাযোগ ব্যবস্থায় সর্বোচ্চ সংকেত ক্ষমতা স্থানান্তর নিশ্চিত করা।'
    ]
  },
  importantPoints: {
    en: [
      'A transformer is a static electromagnetic device with zero moving parts; hence it has no mechanical friction or windage loss and achieves 95–99% efficiency.',
      'Transformers NEVER convert electrical energy into mechanical energy, nor do they generate electricity; they purely transfer AC power between voltage levels.',
      'The frequency of the alternating current remains strictly unchanged between primary and secondary (f1 = f2).',
      'The RMS induced EMF constant 4.44 arises from (2π / √2) for pure sinusoidal alternating magnetic flux.',
      'The induced EMF per single turn is identically equal in both primary and secondary windings (E1/N1 = E2/N2 = 4.44·f·Φm).'
    ],
    hi: [
      'ट्रांसफॉर्मर एक स्थिर विद्युत उपकरण है जिसमें कोई घूमने वाला भाग नहीं होता, अतः इसकी दक्षता 95–99% तक होती है।',
      'ट्रांसफॉर्मर कभी भी विद्युत ऊर्जा को यांत्रिक ऊर्जा में नहीं बदलता और न ही बिजली उत्पन्न करता है; यह केवल वोल्टेज स्तर को बदलता है।',
      'प्राइमरी और सेकेंडरी के बीच आवृत्ति (Frequency) हमेशा समान रहती है (f1 = f2)।',
      'RMS EMF सूत्र में 4.44 का मान साइन तरंग फ्लक्स के लिए (2π / √2) से आता है।',
      'प्राइमरी और सेकेंडरी दोनों में प्रति टर्न प्रेरित EMF पूरी तरह समान होता है (E1/N1 = E2/N2 = 4.44·f·Φm)।'
    ],
    bn: [
      'ট্রান্সফরমার একটি স্থির বৈদ্যুতিক যন্ত্র যাতে কোনো ঘূর্ণায়মান অংশ নেই; তাই ঘর্ষণহীন হওয়ায় এর দক্ষতা ৯৫–৯৯% পর্যন্ত হয়।',
      'ট্রান্সফরমার কখনোই বৈদ্যুতিক শক্তিকে যান্ত্রিক শক্তিতে রূপান্তরিত করে না বা বিদ্যুৎ উৎপাদন করে না; এটি কেবল ভোল্টেজের মাত্রা পরিবর্তন করে।',
      'প্রাইমারি ও সেকেন্ডারির মধ্যে কম্পাঙ্ক (Frequency) সর্বদা অপরিবর্তিত থাকে (f1 = f2)।',
      'RMS EMF সূত্রে ৪.৪৪ ধ্রুবকটি সাইনুসয়েডাল ফ্লাক্সের জন্য (2π / √2) থেকে আসে।',
      'প্রাইমারি ও সেকেন্ডারি উভয় ওয়াইন্ডিংয়ে প্রতি টার্নে আবিষ্ট EMF সমান হয় (E1/N1 = E2/N2 = ৪.৪৪·f·Φm)।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistaking a transformer for an electromechanical energy converter: it is a stationary electromagnetic device with zero mechanical output.',
      'Assuming that stepping up voltage increases total power: by the law of conservation of energy, stepping up voltage causes a proportional reduction in current (V1·I1 = V2·I2).',
      'Believing a transformer can operate on steady DC: with steady DC, dΦ/dt = 0, inducing zero back-EMF and burning out the low-resistance primary winding.',
      'Confusing peak flux Φm with peak flux density Bm: Φm = Bm · Ai in Webers, whereas Bm is in Tesla (Wb/m²).'
    ],
    hi: [
      'ट्रांसफॉर्मर को इलेक्ट्रोमैकेनिकल मशीन समझना: इसमें कोई यांत्रिक आउटपुट नहीं होता।',
      'यह सोचना कि वोल्टेज बढ़ाने से पावर बढ़ जाती है: ऊर्जा संरक्षण नियम के अनुसार वोल्टेज बढ़ने पर धारा घटती है (V1·I1 = V2·I2)।',
      'DC सप्लाई पर ट्रांसफॉर्मर चलाने की कोशिश करना: DC में dΦ/dt = 0 होने से कोई बैक-EMF नहीं बनता और वाइंडिंग जल जाती है।',
      'फ्लक्स Φm और फ्लक्स घनत्व Bm में भ्रमित होना: Φm = Bm · Ai (वेबर) होता है जबकि Bm टेस्ला में होता है।'
    ],
    bn: [
      'ট্রান্সফরমারকে ঘূর্ণায়মান ইলেক্ট্রোমেকানিক্যাল যন্ত্র মনে করা: এতে কোনো যান্ত্রিক ঘূর্ণন বা আউটপুট নেই।',
      'মনে করা যে ভোল্টেজ বাড়লে মোট ক্ষমতা বাড়ে: শক্তির নিত্যতা সূত্র অনুসারে ভোল্টেজ বাড়লে কারেন্ট সমানুপাতিক হারে হ্রাস পায়।',
      'স্থির ডিসি সরবরাহে ট্রান্সফরমার চালানো: ডিসিতে dΦ/dt = 0 হওয়ায় কোনো ব্যাক-EMF তৈরি হয় না এবং ওয়াইন্ডিং পুড়ে যায়।',
      'ফ্লাক্স Φm এবং ফ্লাক্স ঘনত্ব Bm গুলিয়ে ফেলা: Φm = Bm · Ai (ওয়েবার) এবং Bm হলো টেসলা।'
    ]
  },
  mcqs: [
    {
      id: 'ch6-l13-mcq1',
      question: {
        en: 'In the transformer RMS induced EMF equation E = 4.44 · f · N · Φm, what is the exact mathematical origin of the constant 4.44?',
        hi: 'ट्रांसफॉर्मर RMS प्रेरित EMF समीकरण E = 4.44 · f · N · Φm में स्थिरांक 4.44 की सटीक गणितीय उत्पत्ति क्या है?',
        bn: 'ট্রান্সফর্মারের RMS আবিষ্ট EMF সমীকরণ E = ৪.৪৪ · f · N · Φm-এ ৪.৪৪ ধ্রুবকটির সঠিক গাণিতিক উৎস কী?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'It equals 2π / √2, derived from peak angular frequency 2π divided by the sine-wave RMS factor √2',
            hi: 'यह 2π / √2 के बराबर है, जो पीक कोणीय घटक 2π और RMS घटक √2 का अनुपात है',
            bn: 'এটি 2π / √2-এর সমান, যা সাইনুসয়েডাল শীর্ষ কোণীয় গুণক 2π এবং RMS গুণক √2-এর অনুপাত'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'It represents the empirical form factor of standard mineral transformer oil',
            hi: 'यह ट्रांसफॉर्मर तेल का प्रायोगिक फॉर्म फैक्टर है',
            bn: 'এটি ট্রান্সফরমার তেলের একটি পরীক্ষামূলক ফর্ম ফ্যাক্টর'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'It is 4 times the frequency divided by the core volume',
            hi: 'यह आवृत्ति के 4 गुना को कोर आयतन से विभाजित करने पर मिलता है',
            bn: 'এটি কম্পাঙ্কের ৪ গুণকে কোরের আয়তন দিয়ে ভাগ করার ফল'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'It is the peak-to-peak conversion constant for square wave excitation',
            hi: 'यह स्क्वायर वेव का पीक-टू-पीक रूपांतरण स्थिरांक है',
            bn: 'এটি স্কয়ার ওয়েভের শীর্ষ মান রূপান্তর ধ্রুবক'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Peak EMF is Em = 2π·f·N·Φm. The RMS value for a pure sinusoid is E_rms = Em / √2 = (2π / √2)·f·N·Φm. Since 2π / √2 = (2 · 3.14159) / 1.41421 = 4.44288... ≈ 4.44.',
        hi: 'पीक EMF Em = 2π·f·N·Φm होता है। साइन वेव के लिए RMS मान E_rms = Em / √2 = (2π / √2)·f·N·Φm = 4.44·f·N·Φm होता है।',
        bn: 'শীর্ষ EMF Em = 2π·f·N·Φm। সাইন তরঙ্গের জন্য RMS মান E_rms = Em / √2 = (2π / √2)·f·N·Φm = ৪.৪৪·f·N·Φm।'
      }
    },
    {
      id: 'ch6-l13-mcq2',
      question: {
        en: 'What is the phase relationship between the mutual magnetic flux Φ(t) in the core and the induced EMF e(t) in the windings of an ideal transformer?',
        hi: 'एक आदर्श ट्रांसफॉर्मर में कोर के म्यूचुअल चुंबकीय फ्लक्स Φ(t) और वाइंडिंग में प्रेरित EMF e(t) के बीच क्या कला (phase) संबंध होता है?',
        bn: 'একটি আদর্শ ট্রান্সফর্মারের কোরের মিউচুয়াল ফ্লাক্স Φ(t) এবং ওয়াইন্ডিংয়ে আবিষ্ট EMF e(t)-এর মধ্যে দশা (phase) সম্পর্ক কী?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'The induced EMF lags the mutual core flux by 90 electrical degrees',
            hi: 'प्रेरित EMF कोर फ्लक्स से 90° पीछे (lag) रहता है',
            bn: 'আবিষ্ট EMF কোরের চৌম্বক ফ্লাক্স থেকে ৯০° দশায় পিছিয়ে (lag) থাকে'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'The induced EMF leads the mutual core flux by 90 electrical degrees',
            hi: 'प्रेरित EMF कोर फ्लक्स से 90° आगे (lead) रहता है',
            bn: 'আবিষ্ট EMF কোরের চৌম্বক ফ্লাক্স থেকে ৯০° দশায় এগিয়ে (lead) থাকে'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'The induced EMF and core flux are strictly in phase (0° phase difference)',
            hi: 'प्रेरित EMF और कोर फ्लक्स पूरी तरह समान कला (0°) में होते हैं',
            bn: 'আবিষ্ট EMF এবং কোর ফ্লাক্স হুবহু একই দশায় (০°) অবস্থান করে'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'The induced EMF is in exact phase opposition (180° phase difference) to core flux',
            hi: 'प्रेरित EMF कोर फ्लक्स के बिल्कुल विपरीत (180°) होता है',
            bn: 'আবিষ্ট EMF কোর ফ্লাক্সের ঠিক বিপরীত দশায় (১৮০°) থাকে'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Since Φ(t) = Φm·sin(ωt), by Faraday’s law e = -N(dΦ/dt) = -N·ω·Φm·cos(ωt) = N·ω·Φm·sin(ωt - 90°). Thus, induced EMF lags mutual flux by 90° (π/2 radians).',
        hi: 'चूँकि Φ(t) = Φm·sin(ωt) है, फैराडे नियम से e = -N(dΦ/dt) = N·ω·Φm·sin(ωt - 90°) प्राप्त होता है, जो दर्शाता है कि EMF फ्लक्स से 90° पीछे है।',
        bn: 'যেহেতু Φ(t) = Φm·sin(ωt), ফ্যারাডের সূত্রে e = -N(dΦ/dt) = N·ω·Φm·sin(ωt - 90°) পাওয়া যায়, যা প্রমাণ করে আবিষ্ট EMF ফ্লাক্স থেকে ৯০° পিছিয়ে থাকে।'
      }
    },
    {
      id: 'ch6-l13-mcq3',
      question: {
        en: 'Under the ideal transformer approximation, if a transformer steps up the line voltage by a factor of 4 (V2 = 4·V1), what happens to the secondary current I2 compared to primary current I1?',
        hi: 'आदर्श ट्रांसफॉर्मर के अनुमान के तहत, यदि ट्रांसफॉर्मर वोल्टेज को 4 गुना बढ़ा देता है (V2 = 4·V1), तो प्राइमरी धारा I1 की तुलना में सेकेंडरी धारा I2 का क्या होगा?',
        bn: 'আদর্শ ট্রান্সফর্মার বিবেচনায়, যদি একটি ট্রান্সফরমার ভোল্টেজ ৪ গুণ বৃদ্ধি করে (V2 = 4·V1), তবে প্রাইমারি কারেন্ট I1-এর তুলনায় সেকেন্ডারি কারেন্ট I2 কেমন হবে?'
      },
      options: [
        {
          id: 'opt-a',
          text: {
            en: 'Secondary current decreases to one-fourth of primary current (I2 = I1 / 4)',
            hi: 'सेकेंडरी धारा घटकर प्राइमरी धारा की एक-चौथाई (I2 = I1 / 4) हो जाती है',
            bn: 'সেকেন্ডারি কারেন্ট কমে প্রাইমারি কারেন্টের এক-চতুর্থাংশ (I2 = I1 / 4) হবে'
          }
        },
        {
          id: 'opt-b',
          text: {
            en: 'Secondary current increases to four times the primary current (I2 = 4·I1)',
            hi: 'सेकेंडरी धारा बढ़कर प्राइमरी धारा की चार गुना (I2 = 4·I1) हो जाती है',
            bn: 'সেকেন্ডারি কারেন্ট বেড়ে প্রাইমারি কারেন্টের চার গুণ (I2 = 4·I1) হবে'
          }
        },
        {
          id: 'opt-c',
          text: {
            en: 'Secondary current remains identical to primary current (I2 = I1)',
            hi: 'सेकेंडरी धारा प्राइमरी धारा के समान (I2 = I1) बनी रहती है',
            bn: 'সেকেন্ডারি কারেন্ট প্রাইমারি কারেন্টের সমান (I2 = I1) থাকবে'
          }
        },
        {
          id: 'opt-d',
          text: {
            en: 'Secondary current drops to zero because of high step-up impedance',
            hi: 'उच्च प्रतिबाधा के कारण सेकेंडरी धारा शून्य हो जाती है',
            bn: 'উচ্চ প্রতিবন্ধকতার কারণে সেকেন্ডারি কারেন্ট শূন্য হয়ে যাবে'
          }
        }
      ],
      correctOptionId: 'opt-a',
      explanation: {
        en: 'Because an ideal transformer conserves apparent power (V1·I1 = V2·I2), stepping up the voltage by a factor of 4 forces the secondary current to decrease by a factor of 4 (I2 = I1 / 4). Power in equals power out.',
        hi: 'चूँकि आदर्श ट्रांसफॉर्मर में शक्ति संरक्षित रहती है (V1·I1 = V2·I2), वोल्टेज 4 गुना बढ़ने पर धारा घटकर एक-चौथाई (I2 = I1 / 4) रह जाती है।',
        bn: 'যেহেতু আদর্শ ট্রান্সফরমারে আপাত ক্ষমতা অপরিবর্তিত থাকে (V1·I1 = V2·I2), ভোল্টেজ ৪ গুণ বৃদ্ধি পেলে কারেন্ট ৪ গুণ হ্রাস পায় (I2 = I1 / 4)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'ch6-l13-pq1',
      question: {
        en: 'Derive the EMF equation of a single-phase transformer step-by-step from Faraday’s Law of Electromagnetic Induction. Clearly explain why the RMS formula contains the numerical constant 4.44 and state the physical significance of the EMF per turn.',
        hi: 'फैराडे के विद्युत चुम्बकीय प्रेरण नियम से सिंगल-फेज ट्रांसफॉर्मर के EMF समीकरण का चरणबद्ध निगमन कीजिए। स्पष्ट कीजिए कि RMS सूत्र में 4.44 स्थिरांक क्यों आता है और प्रति टर्न EMF का भौतिक महत्व क्या है।',
        bn: 'ফ্যারাডের তড়িচ্চুম্বকীয় আবেশের সূত্র থেকে ধাপে ধাপে সিঙ্গেল-ফেজ ট্রান্সফর্মারের EMF সমীকরণটি প্রতিপাদন করো। RMS সূত্রে ৪.৪৪ ধ্রুবকটি কীভাবে আসে তা ব্যাখ্যা করো এবং প্রতি টার্নে আবিষ্ট EMF-এর তাৎপর্য উল্লেখ করো।'
      },
      hint: {
        en: 'Start with sinusoidal flux Φ(t) = Φm·sin(ωt), take the derivative e = -N(dΦ/dt), find peak Em = 2πf·N·Φm, and divide by √2.',
        hi: 'Φ(t) = Φm·sin(ωt) से शुरू करें, अवकलन e = -N(dΦ/dt) लें, पीक मान Em = 2πf·N·Φm ज्ञात करें और फिर √2 से भाग दें।',
        bn: 'Φ(t) = Φm·sin(ωt) দিয়ে শুরু করো, ব্যবকলন e = -N(dΦ/dt) নাও, শীর্ষ মান Em = 2πf·N·Φm বের করে √2 দিয়ে ভাগ করো।'
      },
      answerKey: {
        en: '1) Φ(t) = Φm·sin(2πf·t). 2) By Faraday’s law, e = -N(dΦ/dt) = -N·2πf·Φm·cos(2πf·t) = 2πf·N·Φm·sin(2πf·t - 90°). 3) Peak EMF Em = 2πf·N·Φm. 4) RMS EMF E = Em / √2 = (2π / √2)·f·N·Φm = 4.44288·f·N·Φm ≈ 4.44·f·N·Φm. 5) E1/N1 = E2/N2 = 4.44·f·Φm, meaning every single turn in both primary and secondary links the same flux and produces identical voltage.',
        hi: '1) Φ(t) = Φm·sin(2πf·t)। 2) फैराडे नियम: e = -N(dΦ/dt) = 2πf·N·Φm·sin(2πf·t - 90°)। 3) पीक EMF Em = 2πf·N·Φm। 4) RMS EMF E = Em / √2 = (2π / √2)·f·N·Φm = 4.44·f·N·Φm। 5) E1/N1 = E2/N2 = 4.44·f·Φm, यानी प्राइमरी और सेकेंडरी के प्रत्येक टर्न में समान वोल्टेज उत्पन्न होता है।',
        bn: '১) Φ(t) = Φm·sin(2πf·t)। ২) ফ্যারাডের সূত্র: e = -N(dΦ/dt) = 2πf·N·Φm·sin(2πf·t - 90°)। ৩) শীর্ষ EMF Em = 2πf·N·Φm। ৪) RMS EMF E = Em / √2 = (2π / √2)·f·N·Φm = ৪.৪৪·f·N·Φm। ৫) E1/N1 = E2/N2 = ৪.৪৪·f·Φm, যার অর্থ প্রতিটি একক টার্নে সমান ভোল্টেজ আবিষ্ট হয়।'
      }
    },
    {
      id: 'ch6-l13-pq2',
      question: {
        en: 'A 50 kVA, 4400/220 V, 50 Hz single-phase transformer has a core cross-sectional area of 120 cm² and a peak flux density of 1.25 Tesla. Calculate: 1) Number of primary turns N1, 2) Number of secondary turns N2, 3) Full-load primary and secondary rated currents I1 and I2.',
        hi: 'एक 50 kVA, 4400/220 V, 50 Hz सिंगल-फेज ट्रांसफॉर्मर का कोर क्षेत्रफल 120 cm² और अधिकतम फ्लक्स घनत्व 1.25 T है। ज्ञात कीजिए: 1) प्राइमरी टर्न N1, 2) सेकेंडरी टर्न N2, 3) फुल-लोड प्राइमरी व सेकेंडरी रेटेड धाराएँ I1 और I2।',
        bn: 'একটি ৫০ kVA, ৪৪০০/২২০ V, ৫০ Hz সিঙ্গেল-ফেজ ট্রান্সফর্মারের কোরের ক্ষেত্রফল ১২০ cm² এবং সর্বোচ্চ ফ্লাক্স ঘনত্ব ১.২৫ Tesla। নির্ণয় করো: ১) প্রাইমারি টার্ন N1, ২) সেকেন্ডারি টার্ন N2, ৩) ফুল-লোড প্রাইমারি ও সেকেন্ডারি রেটেড কারেন্ট I1 ও I2।'
      },
      hint: {
        en: 'Calculate Φm = Bm · A = 1.25 × 0.012 m² = 0.015 Wb. Then use N1 = E1 / (4.44·f·Φm) and I = S / V.',
        hi: 'Φm = Bm · A = 1.25 × 0.012 = 0.015 Wb निकालें। फिर N1 = E1 / (4.44·f·Φm) और I = S / V का प्रयोग करें।',
        bn: 'প্রথমে Φm = Bm · A = ১.২৫ × ০.০১২ = ০.০১৫ Wb বের করো। তারপর N1 = E1 / (৪.৪৪·f·Φm) এবং I = S / V ব্যবহার করো।'
      },
      answerKey: {
        en: '1) Φm = 1.25 × (120 × 10⁻⁴) = 0.015 Wb. 2) N1 = 4400 / (4.44 × 50 × 0.015) = 4400 / 3.33 = 1321.32 ≈ 1321 turns. 3) N2 = 220 / (4.44 × 50 × 0.015) = 220 / 3.33 = 66.06 ≈ 66 turns. 4) I1 = 50000 / 4400 = 11.36 A. 5) I2 = 50000 / 220 = 227.27 A.',
        hi: '1) Φm = 0.015 Wb। 2) N1 = 1321 टर्न। 3) N2 = 66 टर्न। 4) I1 = 11.36 A। 5) I2 = 227.27 A।',
        bn: '১) Φm = ০.০১৫ Wb। ২) N1 = ১৩২১টি টার্ন। ৩) N2 = ৬৬টি টার্ন। ৪) I1 = ১১.৩৬ A। ৫) I2 = ২২৭.২৭ A।'
      }
    }
  ]
};
