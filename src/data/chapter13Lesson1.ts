import { Lesson } from '../types';

export const LESSON_PF_ENGINEERING_FUNDAMENTALS: Lesson = {
  id: 'lsn-ch13-pf-engineering-fundamentals',
  topicId: 'tp-power-factor-intro',
  chapterId: 'ch-power-factor',
  order: 1,
  title: {
    en: 'Fundamentals of Power Factor & The Power Triangle',
    hi: 'पावर फैक्टर के मूल सिद्धांत एवं शक्ति त्रिभुज',
    bn: 'পাওয়ার ফ্যাক্টরের মূল ভিত্তি ও পাওয়ার ট্রায়াঙ্গেল'
  },
  description: {
    en: 'Explore the fundamental principles of alternating current power: Active Power (P in kW), Reactive Power (Q in kVAR), and Apparent Power (S in kVA). Master the Power Triangle, displacement power factor, lagging versus leading conditions, and the critical distinction between displacement and distortion power factor under modern non-linear loads.',
    hi: 'प्रत्यावर्ती धारा शक्ति के मौलिक सिद्धांतों का अन्वेषण करें: वास्तविक शक्ति (P, kW), प्रतिघाती शक्ति (Q, kVAR) और आभासी शक्ति (S, kVA)। शक्ति त्रिभुज, विस्थापन शक्ति गुणांक, लैगिंग बनाम लीडिंग स्थितियां और आधुनिक गैर-रैखिक भारों के तहत विस्थापन और विरूपण शक्ति गुणांक के अंतर को समझें।',
    bn: 'অল্টারনেটিং কারেন্ট ক্ষমতার মৌলিক নীতিগুলি অন্বেষণ করুন: সক্রিয় ক্ষমতা (P, kW), প্রতিক্রিয়াশীল ক্ষমতা (Q, kVAR) এবং আপাত ক্ষমতা (S, kVA)। পাওয়ার ট্রায়াঙ্গেল, স্থানচ্যুতি পাওয়ার ফ্যাক্টর, ল্যাগিং বনাম লিডিং অবস্থা এবং আধুনিক নন-লিনিয়ার লোডের অধীনে ডিসপ্লেসমেন্ট ও ডিস্টরশন পাওয়ার ফ্যাক্টরের মধ্যে পার্থক্য বিস্তারিতভাবে জানুন।'
  },
  estimatedMinutes: 45,
  easyExplanation: {
    en: 'Think of power factor using the classic soda mug analogy: The liquid soda does the real thirst-quenching work—that is Active Power (P, in kW). The foamy head at the top takes up mug space and is required to pour the soda, but provides no hydration—that is Reactive Power (Q, in kVAR), needed to maintain magnetic fields in motors and transformers. The total capacity of the mug you must hold and pay for is the Apparent Power (S, in kVA). Power factor is simply the ratio of useful liquid to the total volume: PF = P / S. A higher power factor means you get more productive work out of every kVA supplied by the electrical utility.',
    hi: 'पावर फैक्टर को सोडा मग के उदाहरण से समझें: मग में भरा वास्तविक सोडा जो प्यास बुझाता है, वह एक्टिव पावर (P, kW) है। ऊपर की झाग जो जगह घेरती है पर प्यास नहीं बुझाती, वह रिएक्टिव पावर (Q, kVAR) है, जिसकी आवश्यकता मोटरों व ट्रांसफार्मरों में चुंबकीय क्षेत्र बनाने के लिए होती है। पूरा मग जिसे आपको संभालना पड़ता है, वह आभासी शक्ति यानी एपैरेंट पावर (S, kVA) है। पावर फैक्टर उपयोगी तरल और कुल आयतन का अनुपात है: PF = P / S। उच्च पावर फैक्टर का अर्थ है ग्रिड से मिली प्रत्येक kVA का अधिकतम कार्य में उपयोग।',
    bn: 'পাওয়ার ফ্যাক্টরকে এক মগ সোডার সাথে তুলনা করা যেতে পারে: মগের আসল তরল অংশ যা তৃষ্ণা মেটায় তা হলো অ্যাক্টিভ পাওয়ার (P, kW)। উপরের ফেনা যা জায়গা দখল করে কিন্তু তৃষ্ণা মেটায় না তা হলো রিঅ্যাক্টিভ পাওয়ার (Q, kVAR), যা মোটর ও ট্রান্সফরমারের চৌম্বক ক্ষেত্র তৈরিতে প্রয়োজন। পুরো মগের ধারণক্ষমতা হলো অ্যাপারেন্ট পাওয়ার (S, kVA)। পাওয়ার ফ্যাক্টর হলো মোট আয়তনের কতটুকু দরকারী তরল তার অনুপাত: PF = P / S। উচ্চ পাওয়ার ফ্যাক্টরের অর্থ হলো গ্রিড থেকে সরবরাহকৃত প্রতিটি kVA এর সর্বোচ্চ ব্যবহার।'
  },
  detailedExplanation: {
    en: 'In sinusoidal AC electrical networks, power consists of three orthogonal components governed by the phase angle ϕ between the applied voltage phasor V and the resulting current phasor I:\n\n1. Active (Real) Power P: P = V_rms · I_rms · cos(ϕ) [Watts, kW, MW]. This represents the net time-averaged rate of irreversible energy transfer from electrical form into mechanical work, heat, or light.\n\n2. Reactive Power Q: Q = V_rms · I_rms · sin(ϕ) [Volt-Amperes Reactive, VAR, kVAR]. This represents the continuous oscillating energy exchange between the source and the electromagnetic field of inductors (positive/lagging VARs) or electrostatic field of capacitors (negative/leading VARs). It performs zero net work over a complete cycle but is physically necessary to sustain magnetic flux in inductive equipment.\n\n3. Apparent Power S: S = V_rms · I_rms = √(P² + Q²) [Volt-Amperes, kVA, MVA]. In complex phasor notation, complex power is S = V · I* = P + jQ, where I* is the complex conjugate of the current phasor.\n\n4. Displacement Power Factor (DPF): cos(ϕ) = P / S = P / √(P² + Q²). For pure sinusoids, PF = DPF. If current lags voltage (inductive loads like induction motors), ϕ > 0 and PF is lagging. If current leads voltage (capacitive loads or over-excited synchronous machines), ϕ < 0 and PF is leading.\n\n5. True Power Factor vs Displacement Power Factor: In modern distribution systems with non-linear loads (rectifiers, drives, switching power supplies), currents contain harmonic frequencies. True Power Factor is defined as PF_true = P_total / (V_rms · I_rms) = DPF · (1 / √(1 + THD_i²)), where THD_i is total harmonic current distortion. A system can have DPF ≈ 1.0 while having a significantly lower True PF due to harmonic distortion.',
    hi: 'ज्यावक्रीय एसी विद्युत नेटवर्क में शक्ति को वोल्टेज V और धारा I के बीच कलान्तर (फेज कोण ϕ) द्वारा परिभाषित किया जाता है:\n\n1. वास्तविक शक्ति (Active Power) P: P = V_rms · I_rms · cos(ϕ) [kW]। यह यांत्रिक कार्य, ऊष्मा या प्रकाश में परिवर्तित होने वाली वास्तविक ऊर्जा की दर है।\n2. प्रतिघाती शक्ति (Reactive Power) Q: Q = V_rms · I_rms · sin(ϕ) [kVAR]। यह प्रेरकों और संधारित्रों के विद्युत-चुंबकीय क्षेत्र में संचित और वापस लौटने वाली ऊर्जा है।\n3. आभासी शक्ति (Apparent Power) S: S = V_rms · I_rms = √(P² + Q²) [kVA]। सम्मिश्र रूप में S = P + jQ।\n4. विस्थापन शक्ति गुणांक: cos(ϕ) = P / S। प्रेरकीय भार में धारा वोल्टेज से पीछे रहती है (लैगिंग), जबकि धारिता भार में धारा आगे रहती है (लीडिंग)।\n5. हार्मोनिक विरूपण के तहत वास्तविक पावर फैक्टर: PF_true = DPF · (1 / √(1 + THD_i²))।',
    bn: 'সাইন ওয়েভ এসি নেটওয়ার্কে পাওয়ার তিনটি পরস্পর লম্ব উপাংশে বিভক্ত, যা ভোল্টেজ ও কারেন্টের মধ্যবর্তী দশা কোণ ϕ দ্বারা নিয়ন্ত্রিত:\n\n১. সক্রিয় ক্ষমতা (Active Power) P: P = V_rms · I_rms · cos(ϕ) [kW]। এটি কার্যকর যান্ত্রিক কাজ বা তাপে রূপান্তরিত হওয়া প্রকৃত শক্তি।\n২. প্রতিক্রিয়াশীল ক্ষমতা (Reactive Power) Q: Q = V_rms · I_rms · sin(ϕ) [kVAR]। এটি ইন্ডাক্টর বা ক্যাপাসিটরের চৌম্বক ও বৈদ্যুতিক ক্ষেত্রে শক্তি স্থানান্তরের হার।\n৩. আপাত ক্ষমতা (Apparent Power) S: S = V_rms · I_rms = √(P² + Q²) [kVA]। জটিল রাশিতে S = P + jQ।\n৪. পাওয়ার ফ্যাক্টর: cos(ϕ) = P / S। ইনডাক্টিভ লোডে কারেন্ট ভোল্টেজের পেছনে থাকে (ল্যাগিং) এবং ক্যাপাসিটিভ লোডে কারেন্ট এগিয়ে থাকে (লিডিং)।\n৫. আধুনিক নন-লিনিয়ার লোডের ক্ষেত্রে True PF = DPF · (1 / √(1 + THD_i²))।'
  },
  formulas: [
    {
      id: 'f-apparent-power',
      symbol: 'S',
      expression: 'S = \\sqrt{P^2 + Q^2} = V_{rms} \\cdot I_{rms}',
      title: {
        en: 'Apparent Power Equation',
        hi: 'आभासी शक्ति समीकरण',
        bn: 'আপাত ক্ষমতা সমীকরণ'
      },
      description: {
        en: 'Calculates apparent power from orthogonal active and reactive power components or from RMS line voltage and current.',
        hi: 'सक्रिय और प्रतिघाती शक्ति घटकों या RMS वोल्टेज और धारा से आभासी शक्ति की गणना करता है।',
        bn: 'সক্রিয় ও প্রতিক্রিয়াশীল ক্ষমতার ভেক্টর যোগফল বা RMS ভোল্টেজ ও কারেন্ট থেকে আপাত ক্ষমতা গণনা করে।'
      },
      variables: [
        { symbol: 'S', name: { en: 'Apparent Power (kVA)', hi: 'आभासी शक्ति (kVA)', bn: 'আপাত ক্ষমতা (kVA)' } },
        { symbol: 'P', name: { en: 'Active Real Power (kW)', hi: 'वास्तविक शक्ति (kW)', bn: 'সক্রিয় প্রকৃত ক্ষমতা (kW)' } },
        { symbol: 'Q', name: { en: 'Reactive Power (kVAR)', hi: 'प्रतिघाती शक्ति (kVAR)', bn: 'প্রতিক্রিয়াশীল ক্ষমতা (kVAR)' } }
      ]
    },
    {
      id: 'f-power-factor-ratio',
      symbol: 'PF',
      expression: 'PF = \\cos(\\phi) = \\frac{P}{S} = \\frac{P}{\\sqrt{P^2 + Q^2}}',
      title: {
        en: 'Displacement Power Factor (cos ϕ)',
        hi: 'विस्थापन शक्ति गुणांक (cos ϕ)',
        bn: 'ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর (cos ϕ)'
      },
      description: {
        en: 'The ratio of real active working power to the total apparent power flowing in the electrical system.',
        hi: 'विद्युत परिपथ में प्रवाहित होने वाली कुल आभासी शक्ति से वास्तविक कार्यकारी शक्ति का अनुपात।',
        bn: 'বৈদ্যুতিক সিস্টেমে প্রবাহিত মোট আপাত ক্ষমতার সাথে প্রকৃত কার্যকরী ক্ষমতার অনুপাত।'
      },
      variables: [
        { symbol: 'PF', name: { en: 'Power Factor (dimensionless, 0 to 1.0)', hi: 'पावर फैक्टर (विमाहीन, 0 से 1.0)', bn: 'পাওয়ার ফ্যাক্টর (এককহীন, ০ থেকে ১.০)' } },
        { symbol: '\\phi', name: { en: 'Phase angle between voltage and current (degrees)', hi: 'वोल्टेज और धारा के बीच फेज कोण (डिग्री)', bn: 'ভোল্টেজ ও কারেন্টের মধ্যবর্তী দশা কোণ (ডিগ্রি)' } }
      ]
    },
    {
      id: 'f-reactive-power-tan',
      symbol: 'Q',
      expression: 'Q = P \\cdot \\tan(\\phi)',
      title: {
        en: 'Reactive Power in terms of Active Power and Phase Angle',
        hi: 'वास्तविक शक्ति और फेज कोण के पदों में प्रतिघाती शक्ति',
        bn: 'সক্রিয় ক্ষমতা ও দশা কোণের মাধ্যমে প্রতিক্রিয়াশীল ক্ষমতা'
      },
      description: {
        en: 'Expresses reactive demand directly as a function of real power and the tangent of the load phase angle.',
        hi: 'प्रतिघाती मांग को वास्तविक शक्ति और फेज कोण के स्पर्शज्या (tan) के गुणनफल के रूप में व्यक्त करता है।',
        bn: 'প্রতিক্রিয়াশীল পাওয়ারকে সক্রিয় পাওয়ার এবং দশা কোণের ট্যানজেন্টের গুণফল হিসেবে প্রকাশ করে।'
      },
      variables: [
        { symbol: 'Q', name: { en: 'Reactive Power (kVAR)', hi: 'प्रतिघाती शक्ति (kVAR)', bn: 'প্রতিক্রিয়াশীল ক্ষমতা (kVAR)' } },
        { symbol: 'P', name: { en: 'Active Power (kW)', hi: 'वास्तविक शक्ति (kW)', bn: 'সক্রিয় ক্ষমতা (kW)' } },
        { symbol: '\\tan(\\phi)', name: { en: 'Tangent of phase angle (tan(arccos(PF)))', hi: 'फेज कोण का tan', bn: 'দশা কোণের tan' } }
      ]
    },
    {
      id: 'f-true-pf-thd',
      symbol: 'PF_{true}',
      expression: 'PF_{true} = PF_{disp} \\cdot \\frac{1}{\\sqrt{1 + THD_i^2}}',
      title: {
        en: 'True Power Factor with Harmonic Distortion',
        hi: 'हार्मोनिक विरूपण युक्त वास्तविक शक्ति गुणांक',
        bn: 'হারমোনিক ডিস্টরশন সহ ট্রু পাওয়ার ফ্যাক্টর'
      },
      description: {
        en: 'Relates total power factor to displacement power factor and total harmonic current distortion.',
        hi: 'कुल पावर फैक्टर को विस्थापन पावर फैक्टर तथा धारा के कुल हार्मोनिक विरूपण से जोड़ता है।',
        bn: 'মোট পাওয়ার ফ্যাক্টরের সাথে স্থানচ্যুতি পাওয়ার ফ্যাক্টর ও কারেন্ট হারমোনিক ডিস্টরশনের সম্পর্ক।'
      },
      variables: [
        { symbol: 'PF_{true}', name: { en: 'True Power Factor', hi: 'सत्य पावर फैक्टर', bn: 'প্রকৃত পাওয়ার ফ্যাক্টর' } },
        { symbol: 'PF_{disp}', name: { en: 'Displacement Power Factor (cos ϕ₁)', hi: 'विस्थापन पावर फैक्टर', bn: 'ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর' } },
        { symbol: 'THD_i', name: { en: 'Total Harmonic Current Distortion (per-unit)', hi: 'कुल हार्मोनिक धारा विरूपण (प्रति इकाई)', bn: 'মোট হারমোনিক কারেন্ট ডিস্টরশন (পার-ইউনিট)' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch13-l01-power-triangle',
      title: {
        en: 'Geometry and Physics of the Power Triangle',
        hi: 'शक्ति त्रिभुज की ज्यामिति एवं भौतिकी',
        bn: 'পাওয়ার ট্রায়াঙ্গেলের জ্যামিতি ও পদার্থবিজ্ঞান'
      },
      content: {
        en: 'The relationship between active, reactive, and apparent power can be geometrically represented as a right-angled triangle termed the Power Triangle:\n\n- The horizontal base represents Active Power P (in kW), aligned with the reference voltage phasor axis.\n- The vertical leg represents Reactive Power Q (in kVAR). For inductive loads, Q points upward (+j axis, lagging current). For capacitive loads, Q points downward (-j axis, leading current).\n- The hypotenuse represents Apparent Power S (in kVA).\n- The angle between the horizontal base P and the hypotenuse S is the phase angle ϕ.\n\nFrom right-angle trigonometry:\ncos(ϕ) = Adjacent / Hypotenuse = P / S\nsin(ϕ) = Opposite / Hypotenuse = Q / S\ntan(ϕ) = Opposite / Adjacent = Q / P\n\nWhen a factory operates at a low lagging power factor (e.g., cos ϕ = 0.65), the reactive power Q is very large relative to P (tan ϕ = 1.17, meaning Q = 1.17 · P). This forces the electrical utility transmission lines, transformers, switchgear, and customer service cables to carry excessive apparent current I = S / (√3 · V_L), resulting in elevated I²R thermal losses and severe terminal voltage drops.',
        hi: 'सक्रिय, प्रतिघाती और आभासी शक्ति के संबंध को एक समकोण त्रिभुज (पावर ट्रायंगल) द्वारा दर्शाया जाता है:\n\n- क्षैतिज आधार वास्तविक शक्ति P (kW) को दर्शाता है।\n- लंबवत भुजा प्रतिघाती शक्ति Q (kVAR) को दर्शाती है (प्रेरकीय भार के लिए ऊपर की ओर +j, संधारित्रीय भार के लिए नीचे की ओर -j)।\n- कर्ण आभासी शक्ति S (kVA) को दर्शाता है।\n- आधार और कर्ण के बीच का कोण ϕ (फेज कोण) कहलाता है।\n\nत्रिकोणमिति के अनुसार cos(ϕ) = P / S और Q = P · tan(ϕ)। जब कोई प्लांट 0.65 जैसे निम्न लैगिंग पावर फैक्टर पर चलता है, तो अतिरिक्त प्रतिघाती धारा के कारण केबलों और ट्रांसफार्मरों में I²R ऊष्मा हानि बढ़ जाती है तथा वोल्टेज में भारी गिरावट आती है।',
        bn: 'সক্রিয়, প্রতিক্রিয়াশীল এবং আপাত ক্ষমতার সম্পর্কটিকে সমকোণী ত্রিভুজ (পাওয়ার ট্রায়াঙ্গেল) দ্বারা উপস্থাপন করা হয়:\n\n- অনুভূমিক ভূমি সক্রিয় ক্ষমতা P (kW) নির্দেশ করে।\n- উল্লম্ব বাহু প্রতিক্রিয়াশীল ক্ষমতা Q (kVAR) নির্দেশ করে (ইন্ডাক্টিভ লোডের জন্য ওপরের দিকে +j, ক্যাপাসিটিভ লোডের জন্য নিচের দিকে -j)।\n- অতিভুজ আপাত ক্ষমতা S (kVA) নির্দেশ করে।\n- ভূমি ও অতিভুজের মধ্যবর্তী কোণ হলো দশা কোণ ϕ।\n\nত্রিকোণমিতি অনুযায়ী cos(ϕ) = P / S এবং Q = P · tan(ϕ)। যখন কোনো শিল্প কারখানা ০.৬৫ এর মতো কম ল্যাগিং পাওয়ার ফ্যাক্টরে চলে, তখন অতিরিক্ত কারেন্টের কারণে লাইনে I²R লস এবং ভোল্টেজ ড্রপ অনেক বেড়ে যায়।'
      }
    },
    {
      id: 'sec-ch13-l01-displacement-vs-distortion',
      title: {
        en: 'Displacement vs Distortion Power Factor',
        hi: 'विस्थापन बनाम विरूपण शक्ति गुणांक',
        bn: 'ডিসপ্লেসমেন্ট বনাম ডিস্টরশন পাওয়ার ফ্যাক্টর'
      },
      content: {
        en: 'In classical power systems with purely linear sinusoidal loads, the phase shift between the fundamental voltage and current waves entirely determines the power factor (Displacement PF = cos ϕ₁).\n\nHowever, modern industrial installations are dominated by non-linear electronic equipment: variable frequency drives (VFDs), uninterruptible power supplies (UPS), LED lighting drivers, and DC arc furnaces. These devices draw non-sinusoidal currents rich in odd harmonics (3rd, 5th, 7th, 11th, etc.).\n\nUnder harmonic distortion:\n1. Total Apparent Power S is expanded into three dimensions:\n   S = √(P² + Q₁² + D²)\n   where Q₁ is fundamental reactive power and D is Distortion Power (in kVA or kVAR) caused by harmonic frequencies.\n2. Fundamental Displacement PF: DPF = cos(ϕ₁)\n3. Distortion Factor: DF = I₁_rms / I_total_rms = 1 / √(1 + THD_i²)\n4. True Power Factor: PF_true = DPF · DF\n\nCrucial Engineering Insight: Traditional shunt capacitor banks only compensate fundamental reactive power Q₁. They CANNOT correct harmonic distortion power D. In fact, standard capacitors offer lower impedance at higher frequencies (X_c = 1/(2πfC)), drawing severe harmonic currents and risking destructive parallel resonance!',
        hi: 'शुद्ध ज्यावक्रीय परिपथों में पावर फैक्टर केवल मूल वोल्टेज और धारा तरंगों के बीच कलान्तर (Displacement PF = cos ϕ₁) पर निर्भर करता है।\n\nपरंतु आधुनिक उद्योगों में वेरिएबल फ्रीक्वेंसी ड्राइव (VFD), यूपीएस और रेक्टिफायर जैसे गैर-रैखिक भार धारा में 5वीं, 7वीं जैसी विषम हार्मोनिक्स पैदा करते हैं। इस स्थिति में कुल आभासी शक्ति S = √(P² + Q₁² + D²) होती है, जहाँ D विरूपण शक्ति (Distortion Power) है।\n\nसत्य पावर फैक्टर PF_true = DPF · (1 / √(1 + THD_i²)) होता है। सामान्य कैपेसिटर बैंक केवल DPF सुधार सकते हैं, हार्मोनिक विरूपण D को नहीं।',
        bn: 'বিশুদ্ধ সাইনুসয়েডাল সিস্টেমে পাওয়ার ফ্যাক্টর শুধুমাত্র মৌলিক ভোল্টেজ ও কারেন্টের দশা পার্থক্যের ওপর নির্ভর করে (DPF = cos ϕ₁)।\n\nকিন্তু ভিএফডি (VFD), ইউপিএস এবং রেকটিফায়ারের মতো নন-লিনিয়ার লোডের কারণে কারেন্টে উচ্চমাত্রার হারমোনিকস সৃষ্টি হয়। ফলে মোট আপাত ক্ষমতা S = √(P² + Q₁² + D²) রূপ নেয়, যেখানে D হলো ডিস্টরশন পাওয়ার।\n\nপ্রকৃত পাওয়ার ফ্যাক্টর PF_true = DPF · (1 / √(1 + THD_i²))। সাধারণ ক্যাপাসিটর ব্যাংক কেবল মৌলিক Q₁ ক্ষতিপূরণ করতে পারে, হারমোনিক ক্ষতি D সমাধান করতে পারে না।'
      }
    }
  ],
  examples: [
    {
      id: 'ex-ch13-l01-01',
      title: {
        en: 'Industrial Factory Power Triangle Analysis',
        hi: 'औद्योगिक कारखाने का शक्ति त्रिभुज विश्लेषण',
        bn: 'শিল্প কারখানার পাওয়ার ট্রায়াঙ্গেল বিশ্লেষণ'
      },
      problem: {
        en: 'A manufacturing facility is fed from a 415 V (line-to-line), 50 Hz, 3-phase supply. The total connected load is 360 kW at an operating power factor of 0.72 lagging. Calculate:\n1. The apparent power (S) in kVA.\n2. The reactive power (Q) in kVAR.\n3. The total line current drawn by the plant.\n4. The new apparent power and line current if the power factor is improved to 0.96 lagging while active load remains unchanged.',
        hi: 'एक विनिर्माण संयंत्र 415 V (लाइन-टू-लाइन), 50 Hz, 3-फेज आपूर्ति से जुड़ा है। कुल भार 0.72 लैगिंग पावर फैक्टर पर 360 kW है। गणना कीजिए:\n1. आभासी शक्ति (S) kVA में।\n2. प्रतिघाती शक्ति (Q) kVAR में।\n3. संयंत्र द्वारा ली जाने वाली कुल लाइन धारा।\n4. यदि सक्रिय भार स्थिर रखते हुए पावर फैक्टर को 0.96 लैगिंग तक सुधारा जाए, तो नया kVA और नई लाइन धारा क्या होगी?',
        bn: 'একটি উৎপাদন কারখানা ৪১৫ V, ৫০ Hz, ৩-ফেজ লাইনের সাথে যুক্ত। মোট লোড ০.৭২ ল্যাগিং পাওয়ার ফ্যাক্টরে ৩৬০ kW। নির্ণয় করুন:\n১. আপাত ক্ষমতা (S, kVA)।\n২. প্রতিক্রিয়াশীল ক্ষমতা (Q, kVAR)।\n৩. কারখানার মোট লাইন কারেন্ট।\n৪. সক্রিয় লোড অপরিবর্তিত রেখে পাওয়ার ফ্যাক্টর ০.৯৬ ল্যাগিং-এ উন্নীত করলে নতুন kVA এবং লাইন কারেন্ট কত হবে?'
      },
      solution: {
        en: 'Step 1: Calculate initial apparent power S₁:\nS₁ = P / cos(ϕ₁) = 360 kW / 0.72 = 500 kVA\n\nStep 2: Calculate initial reactive power Q₁:\nϕ₁ = arccos(0.72) = 43.94°\nQ₁ = P · tan(ϕ₁) = 360 · tan(43.94°) = 360 · 0.9636 = 346.9 kVAR\nAlternatively: Q₁ = √(S₁² - P²) = √(500² - 360²) = √(250,000 - 129,600) = √120,400 = 347.0 kVAR\n\nStep 3: Calculate initial line current I₁:\nI₁ = S₁ / (√3 · V_L) = 500,000 VA / (√3 · 415 V) = 500,000 / 718.8 = 695.6 A\n\nStep 4: Improved power factor condition (PF₂ = 0.96):\nS₂ = P / cos(ϕ₂) = 360 kW / 0.96 = 375 kVA\nI₂ = S₂ / (√3 · V_L) = 375,000 / (√3 · 415) = 375,000 / 718.8 = 521.7 A\n\nConclusion: Improving the power factor from 0.72 to 0.96 reduces plant apparent power demand from 500 kVA to 375 kVA (releasing 125 kVA of transformer headroom) and drops line current by 173.9 A (a 25% reduction), drastically lowering cable heating and eliminating utility penalty billing.',
        hi: 'चरण 1: प्रारंभिक आभासी शक्ति S₁:\nS₁ = 360 kW / 0.72 = 500 kVA\n\nचरण 2: प्रारंभिक प्रतिघाती शक्ति Q₁:\nϕ₁ = arccos(0.72) = 43.94°, tan(ϕ₁) = 0.9636\nQ₁ = 360 · 0.9636 = 346.9 kVAR\n\nचरण 3: प्रारंभिक लाइन धारा I₁:\nI₁ = 500,000 / (√3 · 415) = 695.6 A\n\nचरण 4: सुधारे गए पावर फैक्टर (0.96) पर:\nS₂ = 360 / 0.96 = 375 kVA\nI₂ = 375,000 / (√3 · 415) = 521.7 A\n\nनिष्कर्ष: पावर फैक्टर सुधारने से ट्रांसफार्मर पर भार 500 kVA से घटकर 375 kVA रह जाता है और लाइन धारा में 173.9 A (25%) की कमी आती है।',
        bn: 'ধাপ ১: প্রাথমিক আপাত ক্ষমতা S₁:\nS₁ = ৩৬০ kW / ০.৭২ = ৫০০ kVA\n\nধাপ ২: প্রাথমিক প্রতিক্রিয়াশীল ক্ষমতা Q₁:\nϕ₁ = arccos(০.৭২) = ৪৩.৯৪°, tan(ϕ₁) = ০.৯৬৩৬\nQ₁ = ৩৬০ · ০.৯৬৩৬ = ৩৪৬.৯ kVAR\n\nধাপ ৩: প্রাথমিক লাইন কারেন্ট I₁:\nI₁ = ৫০০,০০০ / (√৩ · ৪১৫) = ৬৯৫.৬ A\n\nধাপ ৪: ০.৯৬ পাওয়ার ফ্যাক্টরে:\nS₂ = ৩৬০ / ০.৯৬ = ৩৭৫ kVA\nI₂ = ৩৭৫,০০০ / (√৩ · ৪১৫) = ৫২১.৭ A\n\nফলাফল: পাওয়ার ফ্যাক্টর ০.৭২ থেকে ০.৯৬ এ উন্নীত করায় মোট আপাত ক্ষমতা ১২৫ kVA হ্রাস পায় এবং কারেন্ট ২৫% কমে গিয়ে লাইন লস অনেকাংশে কমে যায়।'
      }
    },
    {
      id: 'ex-ch13-l01-02',
      title: {
        en: 'True Power Factor Evaluation under Non-Linear Harmonic Load',
        hi: 'गैर-रैखिक हार्मोनिक भार के तहत सत्य शक्ति गुणांक का मूल्यांकन',
        bn: 'নন-লিনিয়ার হারমোনিক লোডের অধীনে ট্রু পাওয়ার ফ্যাক্টর নির্ণয়'
      },
      problem: {
        en: 'A data center server bank draws a fundamental current with a displacement power factor of DPF = 0.95 lagging. Due to non-linear power supplies, the total harmonic current distortion is measured as THD_i = 45% (0.45 per-unit). Calculate:\n1. The Distortion Factor (DF).\n2. The True Power Factor (PF_true).\n3. The error if an engineer erroneously assumes the displacement PF represents total performance.',
        hi: 'एक डेटा सेंटर सर्वर बैंक 0.95 लैगिंग के विस्थापन शक्ति गुणांक (DPF) पर धारा खींचता है। एसएमपीएस भार के कारण धारा का कुल हार्मोनिक विरूपण THD_i = 45% (0.45) मापा जाता है। गणना कीजिए:\n1. विरूपण गुणांक (Distortion Factor).\n2. सत्य पावर फैक्टर (PF_true).\n3. यदि कोई इंजीनियर केवल DPF को ही कुल पावर फैक्टर मान ले तो प्रतिशत त्रुटि क्या होगी?',
        bn: 'একটি ডেটা সেন্টারের সার্ভার ব্যাংক DPF = ০.৯৫ ল্যাগিং ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টরে বিদ্যুৎ গ্রহণ করে। নন-লিনিয়ার লোডের কারণে কারেন্ট THD_i = ৪৫% (০.৪৫) পরিমাপ করা হলো। নির্ণয় করুন:\n১. ডিস্টরশন ফ্যাক্টর (DF)।\n২. ট্রু পাওয়ার ফ্যাক্টর (PF_true)।\n৩. কোনো প্রকৌশলী যদি ভুলবশত DPF কেই আসল পাওয়ার ফ্যাক্টর মনে করেন তবে ভুলের পরিমাণ কত?'
      },
      solution: {
        en: 'Step 1: Calculate Distortion Factor (DF):\nDF = 1 / √(1 + THD_i²) = 1 / √(1 + 0.45²) = 1 / √(1 + 0.2025) = 1 / √1.2025 = 1 / 1.0966 = 0.9119\n\nStep 2: Calculate True Power Factor:\nPF_true = DPF · DF = 0.95 · 0.9119 = 0.8663 (or 0.87)\n\nStep 3: Evaluate assessment error:\nError = [(DPF - PF_true) / PF_true] · 100% = [(0.95 - 0.8663) / 0.8663] · 100% = +9.66%\n\nConclusion: Relying purely on fundamental displacement PF (0.95) misleads plant engineers into believing their system is energy-efficient. In reality, the true power factor is only 0.866, leading to 9.7% higher heating and premature cable/breaker aging due to harmonic currents.',
        hi: 'चरण 1: विरूपण गुणांक (Distortion Factor):\nDF = 1 / √(1 + 0.45²) = 1 / √1.2025 = 0.9119\n\nचरण 2: सत्य पावर फैक्टर:\nPF_true = DPF · DF = 0.95 · 0.9119 = 0.866 (86.6%)\n\nचरण 3: प्रतिशत त्रुटि:\nError = (0.95 - 0.866) / 0.866 · 100% = +9.7%\n\nनिष्कर्ष: केवल DPF (0.95) देखने पर सिस्टम कुशल लगता है, जबकि हार्मोनिक्स के कारण वास्तविक पावर फैक्टर केवल 0.866 है, जिससे केबल में अतिरिक्त ऊष्मा पैदा होती है।',
        bn: 'ধাপ ১: ডিস্টরশন ফ্যাক্টর (DF):\nDF = ১ / √(১ + ০.৪৫²) = ১ / √১.২০২৫ = ০.৯১১৯\n\nধাপ ২: ট্রু পাওয়ার ফ্যাক্টর:\nPF_true = ০.৯৫ · ০.৯১১৯ = ০.৮৬৬\n\nধাপ ৩: ভুলের শতাংশ:\nভুল = (০.৯৫ - ০.৮৬৬) / ০.৮৬৬ · ১০০% = +৯.৭%\n\nফলাফল: কেবল DPF (০.৯৫) দেখে সিস্টেমকে নিখুঁত মনে হলেও হারমোনিকসের কারণে আসল পাওয়ার ফ্যাক্টর মাত্র ০.৮৬৬, যা সিস্টেমে অপ্রয়োজনীয় তাপ ও অপচয় বৃদ্ধি করে।'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Industrial Tariff Penalty Avoidance: Electrical utilities globally levy severe financial penalties if industrial facilities operate below prescribed monthly average power factors (typically 0.90 or 0.95 lagging), and offer billing rebates for maintaining PF > 0.98.',
      'Substation Transformer Capacity Unlocking: Correcting plant power factor from 0.70 to 0.98 reduces kVA loading by ~28%, enabling factory expansion without buying expensive new distribution transformers or upgrading switchgear.',
      'Voltage Stabilization in Arc-Welding Facilities: Heavy cyclic inductive motor and welding operations cause deep voltage dips; reactive power compensation restores bus voltage stability.'
    ],
    hi: [
      'औद्योगिक टैरिफ पेनल्टी से बचाव: बिजली उपयोगिता कंपनियां कारखानों पर निर्धारित सीमा (आमतौर पर 0.90 या 0.95) से कम पावर फैक्टर होने पर भारी जुर्माना लगाती हैं और 0.98 से अधिक होने पर छूट देती हैं।',
      'सबस्टेशन ट्रांसफार्मर क्षमता को अनलॉक करना: पावर फैक्टर को 0.70 से 0.98 तक सुधारने से kVA मांग लगभग 28% घट जाती है, जिससे बिना नया ट्रांसफार्मर खरीदे अतिरिक्त मशीनें चलाई जा सकती हैं।',
      'वेल्डिंग संयंत्रों में वोल्टेज स्थिरीकरण: बड़े इंडक्शन मोटरों और वेल्डिंग के कारण होने वाले वोल्टेज ड्रॉप को रिएक्टिव पावर क्षतिपूर्ति द्वारा स्थिर किया जाता है।'
    ],
    bn: [
      'ইউটিলিটি পেনাল্টি রোধ: শিল্প গ্রাহকদের মাসিক গড় পাওয়ার ফ্যাক্টর নির্দিষ্ট সীমার (সাধারণত ০.৯০ বা ০.৯৫) নিচে নেমে গেলে বিদ্যুৎ সরবরাহকারী প্রতিষ্ঠান জরিমানা ধার্য করে এবং ০.৯৮ এর উপরে রিবেট প্রদান করে।',
      'ট্রান্সফরমার ক্যাপাসিটি আনলক করা: পাওয়ার ফ্যাক্টর ০.৭০ থেকে ০.৯৮-এ উন্নীত করলে kVA লোডিং প্রায় ২৮% হ্রাস পায়, ফলে নতুন ট্রান্সফরমার না কিনেও কারখানায় নতুন লোড যুক্ত করা সম্ভব হয়।',
      'ভোল্টেজ ড্রপ হ্রাস: ভারী মোটর ও আর্ক ওয়েল্ডিং লোডে রিঅ্যাক্টিভ পাওয়ার সাপ্লাই দিয়ে বাসবার ভোল্টেজ স্থির রাখা যায়।'
    ]
  },
  importantPoints: {
    en: [
      'Active power (P) produces real mechanical work and heat; reactive power (Q) sustains magnetic fields in inductive coils without consuming net energy over a cycle.',
      'Apparent power (S) is the vector sum of P and Q, meaning S = √(P² + Q²), NEVER the algebraic sum P + Q.',
      'Shunt capacitors supply leading reactive power (-jQ), cancelling out lagging inductive reactive power (+jQ) drawn by induction motors.'
    ],
    hi: [
      'एक्टिव पावर (P) वास्तविक यांत्रिक कार्य और ऊष्मा उत्पन्न करता है; रिएक्टिव पावर (Q) चक्र में बिना शुद्ध ऊर्जा खपत किए चुंबकीय क्षेत्र बनाए रखता है।',
      'एपैरेंट पावर (S), P और Q का सदिश योग S = √(P² + Q²) होता है, कभी भी बीजगणितीय योग P + Q नहीं।',
      'शंट कैपेसिटर लीडिंग रिएक्टिव पावर (-jQ) की आपूर्ति करते हैं, जो मोटरों द्वारा ली जाने वाली लैगिंग रिएक्टिव पावर (+jQ) को निरस्त कर देती है।'
    ],
    bn: [
      'অ্যাক্টিভ পাওয়ার (P) বাস্তব কাজ করে; রিঅ্যাক্টিভ পাওয়ার (Q) নেট শক্তি ব্যয় না করে চৌম্বক ক্ষেত্র বজায় রাখে।',
      'অ্যাপারেন্ট পাওয়ার (S) হলো P এবং Q এর ভেক্টর যোগফল: S = √(P² + Q²), কখনোই এদের সাধারণ বীজগণিতীয় যোগফল নয়।',
      'শান্ট ক্যাপাসিটর লিডিং রিঅ্যাক্টিভ পাওয়ার (-jQ) সরবরাহ করে মোটরের ল্যাগিং রিঅ্যাক্টিভ পাওয়ারকে (+jQ) প্রশমিত করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Mistake: Adding kW and kVAR algebraically (e.g., claiming 400 kW + 300 kVAR = 700 kVA). Correction: Active and reactive powers are 90 degrees out of phase; always compute vector sum: S = √(400² + 300²) = 500 kVA.',
      'Mistake: Assuming a power factor of 0.80 lagging means 80% of energy is lost as heat. Correction: A 0.80 PF means 80% of total apparent kVA capacity is converted into productive work, while reactive kVAR circulates back and forth without being converted to heat.'
    ],
    hi: [
      'त्रुटि: kW और kVAR को सीधे बीजगणितीय रूप से जोड़ना (उदा. 400 kW + 300 kVAR = 700 kVA मानना)। सुधार: ये परस्पर 90 डिग्री पर होते हैं, अतः S = √(400² + 300²) = 500 kVA होगा।',
      'त्रुटि: 0.80 पावर फैक्टर का अर्थ यह समझना कि 20% बिजली ऊष्मा बनकर नष्ट हो गई। सुधार: इसका अर्थ है कि आपूर्ति का 80% उपयोगी कार्य करता है, जबकि शेष प्रतिघाती शक्ति चुंबकीय क्षेत्र बनाती है।'
    ],
    bn: [
      'ভুল: kW এবং kVAR কে সাধারণ যোগ করা (যেমন ৪০০ kW + ৩০০ kVAR = ৭০০ kVA লেখা)। সংশোধন: এদের মধ্যবর্তী কোণ ৯০°, তাই ভেক্টর যোগফল S = √(৪০০² + ৩০০²) = ৫০০ kVA।',
      'ভুল: ০.৮০ পাওয়ার ফ্যাক্টরের অর্থ ২০% বিদ্যুৎ তাপে নষ্ট হয়ে যাওয়া মনে করা। সংশোধন: এর অর্থ মোট ক্ষমতার ৮০% দরকারী কাজে লাগে এবং বাকি অংশ ম্যাগনেটিক ফিল্ড তৈরিতে সঞ্চালিত হয়।'
    ]
  },
  keyTakeaways: {
    en: [
      'Power Factor (PF = P/S = cos ϕ) measures the electrical utilization efficiency of an AC power system.',
      'Inductive loads operate at a lagging power factor, drawing magnetization kVAR from the grid.',
      'Non-linear loads degrade True Power Factor through harmonic distortion, which cannot be cured by capacitors alone.'
    ],
    hi: [
      'पावर फैक्टर (PF = P/S = cos ϕ) एसी विद्युत प्रणाली की उपयोगिता दक्षता का माप है।',
      'प्रेरकीय भार लैगिंग पावर फैक्टर पर कार्य करते हैं और ग्रिड से चुंबकीय kVAR खींचते हैं।',
      'गैर-रैखिक भार हार्मोनिक विरूपण के माध्यम से वास्तविक पावर फैक्टर को कम करते हैं, जिसे केवल कैपेसिटर से ठीक नहीं किया जा सकता।'
    ],
    bn: [
      'পাওয়ার ফ্যাক্টর (PF = P/S = cos ϕ) হলো একটি এসি বৈদ্যুতিক ব্যবস্থার উপযোগিতা দক্ষতার পরিমাপক।',
      'ইন্ডাক্টিভ লোড ল্যাগিং পাওয়ার ফ্যাক্টরে চলে এবং গ্রিড থেকে ম্যাগনেটাইজিং kVAR গ্রহণ করে।',
      'নন-লিনিয়ার লোড হারমোনিকস তৈরি করে ট্রু পাওয়ার ফ্যাক্টর কমিয়ে দেয়, যা শুধু ক্যাপাসিটর দিয়ে দূর করা যায় না।'
    ]
  },
  practiceQuestions: [
    {
      id: 'pq-ch13-l01-01',
      question: {
        en: 'Explain why an industrial consumer with a 0.60 lagging power factor pays significantly higher electricity bills even if their kilowatt-hour (active energy) consumption is identical to a plant with a 0.95 power factor.',
        hi: 'स्पष्ट कीजिए कि 0.60 लैगिंग पावर फैक्टर वाला औद्योगिक उपभोक्ता समान kWh (सक्रिय ऊर्जा) खपत होने के बावजूद 0.95 पावर फैक्टर वाले प्लांट की तुलना में काफी अधिक बिजली बिल क्यों भरता है।',
        bn: 'ব্যাখ্যা করুন কেন ০.৬০ ল্যাগিং পাওয়ার ফ্যাক্টরের একটি শিল্প গ্রাহককে একই পরিমাণ kWh বিদ্যুৎ ব্যবহার করা সত্ত্বেও ০.৯৫ পাওয়ার ফ্যাক্টরের গ্রাহকের চেয়ে অনেক বেশি বিদ্যুৎ বিল দিতে হয়।'
      },
      hint: {
        en: 'Examine two-part utility billing tariffs involving maximum kVA demand charges, low-PF penalties, and increased line I²R losses.',
        hi: 'अधिकतम kVA मांग शुल्क, निम्न PF जुर्माना और लाइन I²R हानियों से संबंधित बिजली टैरिफ पर विचार करें।',
        bn: 'সর্বোচ্চ kVA ডিমান্ড চার্জ, লো-PF পেনাল্টি এবং বর্ধিত লাইনের I²R অপচয়ের প্রেক্ষিতে ইউটিলিটি ট্যারিফ বিবেচনা করুন।'
      }
    },
    {
      id: 'pq-ch13-l01-02',
      question: {
        en: 'Differentiate between displacement power factor and distortion power factor. Under what specific conditions are they equal?',
        hi: 'विस्थापन शक्ति गुणांक और विरूपण शक्ति गुणांक के बीच अंतर स्पष्ट कीजिए। वे किस विशिष्ट स्थिति में बराबर होते हैं?',
        bn: 'ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টর এবং ডিস্টরশন পাওয়ার ফ্যাক্টরের মধ্যে পার্থক্য নির্দেশ করুন। কোন নির্দিষ্ট অবস্থায় এরা সমান হয়?'
      },
      hint: {
        en: 'Recall the formula PF_true = DPF / √(1 + THD_i²). Consider the condition where THD_i = 0 (pure sinusoidal waveforms).',
        hi: 'सूत्र PF_true = DPF / √(1 + THD_i²) याद रखें और विचार करें कि जब THD_i = 0 (शुद्ध ज्यावक्रीय तरंग) हो तब क्या होगा।',
        bn: 'PF_true = DPF / √(১ + THD_i²) সূত্রটি স্মরণ করুন এবং বিবেচনা করুন যখন THD_i = ০ (বিশুদ্ধ সাইন ওয়েভ)।'
      }
    }
  ],
  mcqs: [
    {
      id: 'mcq-ch13-l01-01',
      question: {
        en: 'What does a power factor of 1.0 (unity) signify in an AC electrical network?',
        hi: 'एसी विद्युत नेटवर्क में 1.0 (यूनिटी) पावर फैक्टर क्या दर्शाता है?',
        bn: 'একটি এসি বৈদ্যুতিক নেটওয়ার্কে ১.০ (ইউনিটি) পাওয়ার ফ্যাক্টর কী নির্দেশ করে?'
      },
      options: [
        { en: 'Current and voltage waveforms are completely in-phase, and zero net reactive power is drawn', hi: 'धारा और वोल्टेज तरंगें पूर्णतः समान कला में हैं तथा शून्य प्रतिघाती शक्ति ली जा रही है', bn: 'কারেন্ট এবং ভোল্টেজ সম্পূর্ণ একই দশায় রয়েছে এবং কোনো প্রতিক্রিয়াশীল ক্ষমতা ব্যয় হচ্ছে না' },
        { en: 'The circuit is purely inductive with current lagging by 90 degrees', hi: 'परिपथ शुद्ध प्रेरकीय है जिसमें धारा 90 डिग्री पीछे है', bn: 'বর্তনটি বিশুদ্ধ ইন্ডাক্টিভ যেখানে কারেন্ট ৯০ ডিগ্রি পিছিয়ে রয়েছে' },
        { en: 'Apparent power is equal to zero while active power is maximum', hi: 'आभासी शक्ति शून्य है जबकि वास्तविक शक्ति अधिकतम है', bn: 'আপাত ক্ষমতা শূন্য এবং সক্রিয় ক্ষমতা সর্বোচ্চ' },
        { en: 'Active power equals reactive power at 45 degrees phase shift', hi: '45 डिग्री फेज शिफ्ट पर वास्तविक शक्ति प्रतिघाती शक्ति के बराबर है', bn: '৪৫ ডিগ্রি দশা পার্থক্যে সক্রিয় ক্ষমতা ও প্রতিক্রিয়াশীল ক্ষমতা সমান' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'At unity power factor (cos ϕ = 1.0), the phase angle ϕ = 0°. Voltage and current waveforms peak and cross zero simultaneously. Apparent power S equals active power P, and reactive power Q = 0.',
        hi: 'यूनिटी पावर फैक्टर पर cos ϕ = 1.0 और ϕ = 0° होता है। वोल्टेज और धारा एक साथ शून्य और शिखर पर पहुंचते हैं, जिससे S = P तथा Q = 0 होता है।',
        bn: 'ইউনিটি পাওয়ার ফ্যাক্টরে cos ϕ = ১.০ এবং ϕ = ০°। ভোল্টেজ ও কারেন্ট একসাথে ওঠানামা করে। এখানে S = P এবং রিঅ্যাক্টিভ পাওয়ার Q = ০।'
      }
    },
    {
      id: 'mcq-ch13-l01-02',
      question: {
        en: 'A single-phase load draws 8 kW of active power and 6 kVAR of inductive reactive power. What is its apparent power?',
        hi: 'एक सिंगल-फेज लोड 8 kW सक्रिय शक्ति और 6 kVAR प्रेरकीय प्रतिघाती शक्ति खींचता है। इसकी आभासी शक्ति क्या है?',
        bn: 'একটি সিঙ্গেল ফেজ লোড ৮ kW সক্রিয় ক্ষমতা এবং ৬ kVAR ইন্ডাক্টিভ প্রতিক্রিয়াশীল ক্ষমতা গ্রহণ করে। এর আপাত ক্ষমতা কত?'
      },
      options: [
        { en: '14.0 kVA', hi: '14.0 kVA', bn: '১৪.০ kVA' },
        { en: '10.0 kVA', hi: '10.0 kVA', bn: '১০.০ kVA' },
        { en: '2.0 kVA', hi: '2.0 kVA', bn: '২.০ kVA' },
        { en: '48.0 kVA', hi: '48.0 kVA', bn: '৪৮.০ kVA' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Apparent power S is the vector sum: S = √(P² + Q²) = √(8² + 6²) = √(64 + 36) = √100 = 10 kVA.',
        hi: 'आभासी शक्ति S = √(P² + Q²) = √(8² + 6²) = √100 = 10 kVA होती है।',
        bn: 'আপাত ক্ষমতা S = √(P² + Q²) = √(৮² + ৬²) = √১০০ = ১০ kVA।'
      }
    },
    {
      id: 'mcq-ch13-l01-03',
      question: {
        en: 'For the load in the previous question (8 kW and 6 kVAR), what is the operating power factor?',
        hi: 'उपरोक्त प्रश्न के भार (8 kW एवं 6 kVAR) के लिए कार्यकारी पावर फैक्टर क्या होगा?',
        bn: 'পূর্ববর্তী প্রশ্নের লোডের (৮ kW এবং ৬ kVAR) অপারেটিং পাওয়ার ফ্যাক্টর কত?'
      },
      options: [
        { en: '0.80 lagging', hi: '0.80 लैगिंग', bn: '০.৮০ ল্যাগিং' },
        { en: '0.60 leading', hi: '0.60 लीडिंग', bn: '০.৬০ লিডিং' },
        { en: '0.75 lagging', hi: '0.75 लैगिंग', bn: '০.৭৫ ল্যাগিং' },
        { en: '1.00 unity', hi: '1.00 यूनिटी', bn: '১.০০ ইউনিটি' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Power Factor = P / S = 8 kW / 10 kVA = 0.80. Because the reactive power is inductive, the current lags the voltage, giving 0.80 lagging.',
        hi: 'पावर फैक्टर = P / S = 8 / 10 = 0.80। चूंकि प्रतिघाती भार प्रेरकीय है, अतः यह 0.80 लैगिंग होगा।',
        bn: 'পাওয়ার ফ্যাক্টর = P / S = ৮ kW / ১০ kVA = ০.৮০। যেহেতু লোডটি ইন্ডাক্টিভ, তাই এটি ০.৮০ ল্যাগিং।'
      }
    },
    {
      id: 'mcq-ch13-l01-04',
      question: {
        en: 'Which physical component in an alternating current system requires reactive power to operate?',
        hi: 'एसी प्रणाली में किस घटक को कार्य करने के लिए प्रतिघाती शक्ति (रिएक्टिव पावर) की आवश्यकता होती है?',
        bn: 'একটি এসি সিস্টেমে কাজ করার জন্য কোন উপাদানটির প্রতিক্রিয়াশীল ক্ষমতা প্রয়োজন?'
      },
      options: [
        { en: 'Pure incandescent lighting tungsten filaments', hi: 'शुद्ध तापदीप्त टंगस्टन फिलामेंट लैंप', bn: 'বিশুদ্ধ ইনক্যান্ডিসেন্ট ফিলামেন্ট বাতি' },
        { en: 'Electric water heaters and resistive heating elements', hi: 'इलेक्ट्रिक वॉटर हीटर एवं प्रतिरोधक हीटिंग तत्व', bn: 'বৈদ্যুতিক ওয়াটার হিটার ও রেজিস্টিভ হিটার' },
        { en: 'Magnetic iron cores of induction motors and transformers', hi: 'इंडक्शन मोटरों और ट्रांसफार्मरों की चुंबकीय लोह कोर', bn: 'ইন্ডাকশন মোটর ও ট্রান্সফরমারের ম্যাগনেটিক আয়রন কোর' },
        { en: 'High-voltage DC (HVDC) smoothing resistors', hi: 'एचवीडीसी स्मूथिंग प्रतिरोधक', bn: 'এইচভিডিসি স্মুথিং রেজিস্টর' }
      ],
      correctAnswer: 2,
      explanation: {
        en: 'Inductive equipment like transformers, chokes, and induction motors rely on alternating magnetic fields to transfer energy. Sustaining this magnetizing flux requires reactive power (kVAR).',
        hi: 'ट्रांसफार्मर और इंडक्शन मोटरों जैसे प्रेरकीय उपकरणों को चुंबकीय फ्लक्स बनाए रखने के लिए रिएक्टिव पावर (kVAR) की आवश्यकता होती है।',
        bn: 'ট্রান্সফরমার ও ইন্ডাকশন মোটরে চৌম্বক ফ্লাক্স তৈরি ও বজায় রাখতে রিঅ্যাক্টিভ পাওয়ার (kVAR) প্রয়োজন হয়।'
      }
    },
    {
      id: 'mcq-ch13-l01-05',
      question: {
        en: 'If an industrial plant maintains constant active power P while its power factor degrades from 0.95 to 0.60, what happens to the transmission line current?',
        hi: 'यदि कोई औद्योगिक संयंत्र सक्रिय शक्ति P को स्थिर रखते हुए अपना पावर फैक्टर 0.95 से घटाकर 0.60 कर लेता है, तो ट्रांसमिशन लाइन धारा पर क्या प्रभाव पड़ेगा?',
        bn: 'যদি কোনো শিল্প কারখানা সক্রিয় শক্তি P স্থির রেখে পাওয়ার ফ্যাক্টর ০.৯৫ থেকে ০.৬০ এ নামিয়ে ফেলে, তবে সঞ্চালন লাইনের কারেন্টের কী হবে?'
      },
      options: [
        { en: 'Line current decreases by 37%', hi: 'लाइन धारा में 37% की कमी आएगी', bn: 'লাইন কারেন্ট ৩৭% হ্রাস পাবে' },
        { en: 'Line current remains completely unchanged', hi: 'लाइन धारा पूरी तरह अपरिवर्तित रहेगी', bn: 'লাইন কারেন্ট সম্পূর্ণ অপরিবর্তিত থাকবে' },
        { en: 'Line current increases by 58.3%, severely increasing I²R thermal losses', hi: 'लाइन धारा 58.3% बढ़ जाएगी, जिससे I²R ऊष्मा हानि अत्यधिक बढ़ जाएगी', bn: 'লাইন কারেন্ট ৫৮.৩% বৃদ্ধি পাবে এবং I²R তাপীয় ক্ষয় মারাত্মকভাবে বাড়বে' },
        { en: 'Line voltage doubles to compensate', hi: 'पूर्ति हेतु लाइन वोल्टेज दोगुना हो जाएगा', bn: 'ক্ষতিপূরণ হিসেবে লাইন ভোল্টেজ দ্বিগুণ হবে' }
      ],
      correctAnswer: 2,
      explanation: {
        en: 'Current is inversely proportional to power factor: I_new / I_old = PF_old / PF_new = 0.95 / 0.60 = 1.5833 (a 58.3% increase). Cable thermal losses scale with I², increasing losses by (1.5833)² = 2.51 times (a 151% increase in line losses)!',
        hi: 'धारा पावर फैक्टर के व्युत्क्रमानुपाती होती है: I_new = I_old · (0.95 / 0.60) = 1.583 · I_old (58.3% वृद्धि)। इसके कारण केबल हानियाँ 151% तक बढ़ जाती हैं।',
        bn: 'কারেন্ট পাওয়ার ফ্যাক্টরের ব্যস্তানুপাতিক: I_new = I_old · (০.৯৫ / ০.৬০) = ১.৫৮৩ গুণ (৫৮.৩% বৃদ্ধি)। এর ফলে লাইনে তারের তাপ অপচয় ১৫১% বৃদ্ধি পায়।'
      }
    },
    {
      id: 'mcq-ch13-l01-06',
      question: {
        en: 'What is the relationship between True Power Factor and Displacement Power Factor under 30% current THD?',
        hi: '30% धारा THD के तहत सत्य पावर फैक्टर और विस्थापन पावर फैक्टर के बीच क्या संबंध है?',
        bn: '৩০% কারেন্ট THD এর অধীনে ট্রু পাওয়ার ফ্যাক্টর এবং ডিসপ্লেসমেন্ট পাওয়ার ফ্যাক্টরের মধ্যে সম্পর্ক কী?'
      },
      options: [
        { en: 'True PF = Displacement PF', hi: 'सत्य PF = विस्थापन PF', bn: 'ট্রু PF = ডিসপ্লেসমেন্ট PF' },
        { en: 'True PF is approximately 4.2% lower than Displacement PF', hi: 'सत्य PF विस्थापन PF से लगभग 4.2% कम होता है', bn: 'ট্রু PF ডিসপ্লেসমেন্ট PF এর চেয়ে প্রায় ৪.২% কম' },
        { en: 'True PF is 30% higher than Displacement PF', hi: 'सत्य PF विस्थापन PF से 30% अधिक होता है', bn: 'ট্রু PF ডিসপ্লেসমেন্ট PF এর চেয়ে ৩০% বেশি' },
        { en: 'True PF equals zero under any harmonic presence', hi: 'किसी भी हार्मोनिक्स की उपस्थिति में सत्य PF शून्य हो जाता है', bn: 'যেকোনো হারমোনিকের উপস্থিতিতে ট্রু PF শূন্য হয়' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Distortion factor DF = 1 / √(1 + 0.30²) = 1 / √1.09 = 1 / 1.044 = 0.9578. Thus PF_true = DPF · 0.9578, which is ~4.2% lower than DPF.',
        hi: 'DF = 1 / √(1 + 0.30²) = 1 / 1.044 = 0.9578। अतः सत्य PF विस्थापन PF की तुलना में लगभग 4.2% कम होगा।',
        bn: 'DF = ১ / √(১ + ০.৩০²) = ১ / ১.০৪৪ = ০.৯৫৭৮। সুতরাং ট্রু PF ডিসপ্লেসমেন্ট PF এর তুলনায় প্রায় ৪.২% কম হবে।'
      }
    },
    {
      id: 'mcq-ch13-l01-07',
      question: {
        en: 'In complex AC notation, complex power S is represented as:',
        hi: 'सम्मिश्र एसी संकेतन में, सम्मिश्र शक्ति S को किस प्रकार दर्शाया जाता है?',
        bn: 'জটিল এসি রাশিতে, জটিল ক্ষমতা S কীভাবে প্রকাশিত হয়?'
      },
      options: [
        { en: 'S = V · I* = P + jQ', hi: 'S = V · I* = P + jQ', bn: 'S = V · I* = P + jQ' },
        { en: 'S = V / I = R + jX', hi: 'S = V / I = R + jX', bn: 'S = V / I = R + jX' },
        { en: 'S = V · I = P - jQ', hi: 'S = V · I = P - jQ', bn: 'S = V · I = P - jQ' },
        { en: 'S = V² · I²', hi: 'S = V² · I²', bn: 'S = V² · I²' }
      ],
      correctAnswer: 0,
      explanation: {
        en: 'Complex power is defined as the product of the voltage phasor and the complex conjugate of the current phasor: S = V · I* = P + jQ, where real part P is active power and imaginary part Q is reactive power.',
        hi: 'सम्मिश्र शक्ति को वोल्टेज फेजर और धारा फेजर के सम्मिश्र संयुग्मी के गुणनफल के रूप में परिभाषित किया जाता है: S = V · I* = P + jQ।',
        bn: 'জটিল ক্ষমতা হলো ভোল্টেজ ফেজর এবং কারেন্ট ফেজরের জটিল অনুবন্ধীর গুণফল: S = V · I* = P + jQ, যেখানে P হলো সক্রিয় ও Q হলো প্রতিক্রিয়াশীল ক্ষমতা।'
      }
    },
    {
      id: 'mcq-ch13-l01-08',
      question: {
        en: 'Which load condition produces a leading power factor where current leads terminal voltage?',
        hi: 'कौन सी लोड स्थिति एक लीडिंग पावर फैक्टर उत्पन्न करती है जिसमें धारा टर्मिनल वोल्टेज से आगे होती है?',
        bn: 'কোন ধরনের লোড অবস্থায় লিডিং পাওয়ার ফ্যাক্টর তৈরি হয় যেখানে কারেন্ট টার্মিনাল ভোল্টেজের চেয়ে এগিয়ে থাকে?'
      },
      options: [
        { en: 'Lightly loaded 3-phase induction motors', hi: 'हल्के भार पर चलने वाली 3-फेज इंडक्शन मोटरें', bn: 'হালকা লোডে চালিত ৩-ফেজ ইন্ডাকশন মোটর' },
        { en: 'Over-excited synchronous motors or parallel shunt capacitor banks', hi: 'अति-उत्तेजित (Over-excited) सिंक्रोनस मोटरें या शंट कैपेसिटर बैंक', bn: 'ওভার-এক্সাইটেড সিনক্রোনাস মোটর বা সমান্তরাল শান্ট ক্যাপাসিটর ব্যাংক' },
        { en: 'Fluorescent lamp magnetic ballasts', hi: 'फ्लोरोसेंट लैंप के चुंबकीय चोक (बैलास्ट)', bn: 'ফ্লুরোসেন্ট বাতির ম্যাগনেটিক ব্যালাস্ট' },
        { en: 'Step-down distribution transformers', hi: 'स्टेप-डाउन वितरण ट्रांसफार्मर', bn: 'স্টেপ-ডাউন ডিস্ট্রিবিউশন ট্রান্সফরমার' }
      ],
      correctAnswer: 1,
      explanation: {
        en: 'Over-excited synchronous motors and shunt capacitor banks inject leading reactive power into the system, causing the overall circuit current phasor to lead the voltage phasor (leading PF).',
        hi: 'अति-उत्तेजित सिंक्रोनस मोटरें और शंट कैपेसिटर बैंक सिस्टम में लीडिंग रिएक्टिव पावर की आपूर्ति करते हैं, जिससे धारा वोल्टेज से आगे निकल जाती है (लीडिंग PF)।',
        bn: 'ওভার-এক্সাইটেড সিনক্রোনাস মোটর এবং শান্ট ক্যাপাসিটর ব্যাংক সিস্টেমে লিডিং রিঅ্যাক্টিভ পাওয়ার সরবরাহ করে, যার ফলে কারেন্ট ভোল্টেজের অগ্রবর্তী হয়।'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ch13-pf-power-triangle',
      title: {
        en: 'Power Factor & The AC Power Triangle Schematic',
        hi: 'पावर फैक्टर एवं एसी शक्ति त्रिभुज आरेख',
        bn: 'পাওয়ার ফ্যাক্টর ও এসি পাওয়ার ট্রায়াঙ্গেল ডায়াগ্রাম'
      },
      caption: {
        en: 'Phasor power triangle showing active (P), reactive (Q), and apparent (S) power relationships and power factor cos(θ).',
        hi: 'सक्रिय (P), प्रतिघाती (Q), एवं आभासी (S) शक्ति संबंधों और पावर फैक्टर cos(θ) को दर्शाने वाला फेजर शक्ति त्रिभुज।',
        bn: 'সক্রিয় (P), প্রতিক্রিয়াশীল (Q), এবং আপাত (S) শক্তি সম্পর্ক এবং পাওয়ার ফ্যাক্টর cos(θ) নির্দেশকারী ফেজর পাওয়ার ট্রায়াঙ্গেল।'
      },
      svgType: 'circuit-ch13-pf-power-triangle'
    }
  ]
};
