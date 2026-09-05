import { Lesson } from '../types';

export const LESSON_SYMMETRICAL_FAULT: Lesson = {
  id: 'lsn-ch16-symmetrical-fault-analysis',
  topicId: 'tp-ch16-symmetrical-fault-analysis',
  chapterId: 'ch-advanced-power-system-analysis',
  order: 8,
  title: {
    en: 'Symmetrical Fault Analysis: Thevenin Reactance, Subtransient Currents & Breaker Sizing',
    hi: 'सममित फॉल्ट विश्लेषण: थेवेनिन प्रतिघात, सबट्रांजिएंट धाराएँ एवं ब्रेकर साइजिंग',
    bn: 'প্রতিসম ফল্ট বিশ্লেষণ: থেভেনিন রিঅ্যাক্ট্যান্স, সাব-ট্রানজিয়েন্ট কারেন্ট ও ব্রেকার সাইজিং'
  },
  description: {
    en: 'Analysis of balanced three-phase short circuits: internal synchronous machine modeling (subtransient X\'\'_d, transient X\'_d, steady-state X_d reactances), DC offset decay, Thevenin equivalent impedance at the fault point, and circuit breaker momentary and interrupting MVA ratings.',
    hi: 'संतुलित थ्री-फेज शॉर्ट सर्किट का विश्लेषण: आंतरिक सिंक्रोनस मशीन मॉडलिंग (सबट्रांजिएंट X\'\'_d, ट्रांजिएंट X\'_d, स्टेडी-स्टेट X_d प्रतिघात), DC ऑफसेट क्षय, फॉल्ट बिंदु पर थेवेनिन समतुल्य प्रतिबाधा, तथा सर्किट ब्रेकर की मोमेंटरी और इंटरप्टिंग MVA रेटिंग।',
    bn: 'ভারসাম্যপূর্ণ থ্রি-ফেজ শর্ট সার্কিট বিশ্লেষণ: সিঙ্ক্রোনাস মেশিনের অভ্যন্তরীণ মডেলিং (সাব-ট্রানজিয়েন্ট X\'\'_d, ট্রানজিয়েন্ট X\'_d ও স্টেডি-স্টেট X_d রিঅ্যাক্ট্যান্স), ডিসি অফসেট ক্ষয়, ফল্ট বিন্দুতে থেভেনিন ইম্পিডেন্স এবং সার্কিট ব্রেকারের মোমেন্টারি ও ইন্টারাপ্টিং MVA রেটিং নির্ধারণ।'
  },
  estimatedMinutes: 44,
  easyExplanation: {
    en: 'A three-phase symmetrical fault occurs when all three power conductors short together or to ground simultaneously. Although it is the rarest type of grid short circuit (accounting for only ~5% of all occurrences), it is almost always the most violent and catastrophic. It unleashes the highest short-circuit currents and subjects substation busbars to immense electromagnetic forces (thousands of kilograms of mechanical shock). When a fault occurs near a spinning power generator, the short-circuit current changes through three distinct phases: during the first few cycles (0 to 100 ms), the current is huge because of the generator\'s damper windings (subtransient reactance X"d); over the next half-second, it decays as rotor field fluxes redistribute (transient reactance X\'d); and finally, it settles to a sustained steady-state level (synchronous reactance Xd). Switchgear engineers must accurately calculate these currents to specify the making and breaking capacities of high-voltage SF6 and vacuum circuit breakers!',
    hi: 'थ्री-फेज सममित फॉल्ट तब होता है जब तीनों फेज आपस में या जमीन से एक साथ शॉर्ट हो जाते हैं। यद्यपि यह केवल 5% मामलों में होता है, लेकिन यह सबसे विनाशकारी होता है क्योंकि इसमें सर्वाधिक धारा बहती है। जब जनरेटर के पास फॉल्ट होता है, तो धारा तीन चरणों से गुजरती है: पहले कुछ चक्रों (0-100 ms) में यह डैम्पर वाइंडिंग के कारण अत्यधिक विशाल (सबट्रांजिएंट) होती है; फिर यह घटती है (ट्रांजिएंट); और अंत में स्थिर हो जाती है (स्टेडी-स्टेट)। सबस्टेशन इंजीनियर सर्किट ब्रेकर की इंटरप्टिंग क्षमता तय करने के लिए इन धाराओं की सटीक गणना करते हैं!',
    bn: 'থ্রি-ফেজ প্রতিসম ফল্ট ঘটে যখন তিনটি ফেজ একসাথে একে অপরের সাথে বা মাটির সাথে শর্ট হয়। এটি মাত্র ৫% ক্ষেত্রে ঘটলেও সিস্টেমের জন্য সবচেয়ে ধ্বংসাত্মক কারণ এতে সর্বোচ্চ ফল্ট কারেন্ট প্রবাহিত হয়। জেনারেটরের কাছে ফল্ট হলে কারেন্ট তিনটি পর্যায় অতিক্রম করে: প্রথম কয়েক সাইকেলে ড্যাম্পার ওয়াইন্ডিংয়ের প্রভাবে কারেন্ট থাকে সর্বোচ্চ (সাব-ট্রানজিয়েন্ট); পরবর্তী আধ সেকেন্ডে তা হ্রাস পায় (ট্রানজিয়েন্ট); এবং শেষে একটি নির্দিষ্ট মানে স্থির হয় (স্টেডি-স্টেট)। সার্কিট ব্রেকারের সঠিক আকার নির্ধারণে এই হিসাব অত্যন্ত জরুরি!'
  },
  detailedExplanation: {
    en: 'Symmetrical fault calculations assume the network remains balanced; hence, a single-phase positive-sequence equivalent circuit represents all three phases accurately:\n\n1. Synchronous Generator Behavior During a Terminal Short Circuit:\nWhen a sudden three-phase bolted short circuit strikes a synchronous alternator, the fault current contains two components: an AC symmetrical component and a decaying unidirectional DC offset component.\n• The AC symmetrical component undergoes three distinct time domains:\n  a) Subtransient Period (0 to ~100 ms, 1-5 cycles): Dominated by damper winding flux changes. Modeled by subtransient reactance X"d (typically 0.10 to 0.25 pu). Defines peak mechanical stress and breaker momentary rating.\n  b) Transient Period (100 ms to ~1.0 s): Damper currents die out; governed by rotor main field winding time constant T\'d. Modeled by transient reactance X\'d (typically 0.20 to 0.40 pu).\n  c) Steady-State Period (> 1.0 s): Armature reaction establishes full demagnetization. Modeled by synchronous reactance Xd (typically 1.0 to 2.5 pu).\n\n2. Thevenin Equivalent at the Fault Point:\nFor any fault at bus k, the entire complex grid is replaced by its Thevenin equivalent:\n• Thevenin Voltage: V_th = V_k(0) (pre-fault voltage at bus k, typically 1.0 ∠0° pu).\n• Thevenin Impedance: Z_th = Z_kk (the k-th diagonal element of the bus impedance matrix Z_bus, formed with generator subtransient reactances X"d included).\n• Symmetrical Subtransient Fault Current:\nI"_f = V_k(0) / Z_th = V_k(0) / (R_th + jX"_th) ≈ V_k(0) / (jX"_th)\n\n3. DC Offset and Asymmetrical Peak Current:\nDepending on the voltage wave angle at the instant of fault inception, a DC offset current is induced to satisfy Faraday’s law (current in an inductor cannot change instantaneously):\ni_f(t) = sqrt(2) * I"_f * [ cos(omega*t - alpha) - cos(alpha) * e^(-t / T_dc) ]\nwhere T_dc = L_th / R_th = X_th / (omega * R_th) is the DC decay time constant.\n• Maximum Momentary Peak Current (t ≈ 1/2 cycle = 10 ms at 50 Hz):\nI_peak = 1.6 * sqrt(2) * I"_f to 1.8 * sqrt(2) * I"_f.\n\n4. Circuit Breaker Selection & Rating Rules (IEC 60909 / IEEE C37):\n• Momentary / Making Rating (Closing against fault): Governed by subtransient peak current with maximum DC offset at 0.5 cycles: I_make = 2.55 * I"_f,sym (IEC) or 2.7 * I"_f,sym.\n• Interrupting / Breaking Capacity: Determined by the symmetrical AC current remaining when the breaker contacts part (typically 3 to 5 cycles, 60-100 ms after inception), multiplied by a DC asymmetry factor (e.g., 1.1 to 1.2).\n• Fault Symmetrical MVA: S_sc = sqrt(3) * V_LL * I"_f = (S_base) / X"_th,pu.',
    hi: 'सममित फॉल्ट गणना में धनात्मक-अनुक्रम (positive-sequence) नेटवर्क का उपयोग किया जाता है:\n\n1. सिंक्रोनस मशीन का व्यवहार:\n• सबट्रांजिएंट काल (0-100 ms): डैम्पर वाइंडिंग के कारण X"d बहुत कम होता है, अतः करंट अत्यधिक विशाल होता है।\n• ट्रांजिएंट काल (100 ms - 1 s): X\'d द्वारा नियंत्रित।\n• स्टेडी-स्टेट काल (> 1 s): आर्मेचर रिएक्शन के कारण Xd सबसे बड़ा होता है, अतः करंट न्यूनतम होता है।\n\n2. थेवेनिन विधि:\nफॉल्ट धारा I"_f = V_k(0) / Z_th ≈ 1.0 / (jX"_th)।\n\n3. DC ऑफसेट और पीक करंट:\nइंडक्टर में करंट अचानक नहीं बदल सकता, इसलिए एक DC ऑफसेट उत्पन्न होता है जो T_dc = X/R पर क्षय होता है।\nअधिकतम पीक करंट = 2.55 से 2.7 * I"_f।\n\n4. सर्किट ब्रेकर रेटिंग:\nमेकिंग करंट = 2.55 * I"_f\nइंटरप्टिंग MVA = S_base / X"_th,pu।',
    bn: 'প্রতিসম ফল্ট বিশ্লেষণে পজিটিভ-সিকোয়েন্স নেটওয়ার্ক ব্যবহার করা হয়:\n\n১. সিঙ্ক্রোনাস জেনারেটরের আচরণ:\n• সাব-ট্রানজিয়েন্ট সময়কাল (০-১০০ ms): ড্যাম্পার ওয়াইন্ডিংয়ের প্রভাবে X"d খুব কম হওয়ায় কারেন্ট সর্বাধিক হয়।\n• ট্রানজিয়েন্ট সময়কাল (১০০ ms - ১ s): ফিল্ড ওয়াইন্ডিং ও X\'d দ্বারা নিয়ন্ত্রিত।\n• স্টেডি-স্টেট সময়কাল (> ১ s): আর্মেচার প্রতিক্রিয়ায় Xd বৃদ্ধি পায় এবং কারেন্ট কমে যায়।\n\n২. থেভেনিন পদ্ধতি:\nফল্ট কারেন্ট I"_f = V_k(০) / Z_th ≈ ১.০ / (jX"_th)।\n\n৩. ডিসি অফসেট ও পিক কারেন্ট:\nকারেন্টের আকস্মিক পরিবর্তন রোধে ডিসি অফসেট সৃষ্টি হয় যা T_dc = X/R হারে হ্রাস পায়। পিক মেকিং কারেন্ট = ২.৫৫ * I"_f।\n\n৪. সার্কিট ব্রেকার রেটিং:\nমেকিং কারেন্ট = ২.৫৫ * I"_f\nশর্ট-সার্কিট MVA = S_base / X"_th,pu।'
  },
  formulas: [
    {
      id: 'f-ch16-subtransient-fault-current',
      symbol: 'I\'\'_f',
      expression: 'I\'\'_f = \\frac{V_{th}}{Z\'\'_{th}} \\approx \\frac{V_f(0)}{j X\'\'_{th}} \\quad \\text{[pu]}',
      title: {
        en: 'Subtransient Symmetrical Fault Current',
        hi: 'सबट्रांजिएंट सममित फॉल्ट धारा सूत्र',
        bn: 'সাব-ট্রানজিয়েন্ট প্রতিসম ফল্ট কারেন্ট সূত্র'
      },
      description: {
        en: 'Calculates the initial AC symmetrical root-mean-square (RMS) short-circuit current using Thevenin subtransient reactance X"th.',
        hi: 'थेवेनिन सबट्रांजिएंट प्रतिघात X"th का उपयोग करके प्रारंभिक AC सममित RMS शॉर्ट-सर्किट धारा ज्ञात करता है।',
        bn: 'থেভেনিন সাব-ট্রানজিয়েন্ট রিঅ্যাক্ট্যান্স X"th ব্যবহার করে প্রাথমিক এসি প্রতিসম আরএমএস ফল্ট কারেন্ট নির্ণয় করে।'
      },
      variables: [
        { symbol: 'I\'\'_f', name: { en: 'Initial symmetrical subtransient fault current (pu or A)', hi: 'सबट्रांजिएंट फॉल्ट धारा (pu या A)', bn: 'সাব-ট্রানজিয়েন্ট ফল্ট কারেন্ট (pu বা A)' } },
        { symbol: 'V_f(0)', name: { en: 'Pre-fault phase voltage at fault bus (typically 1.0 pu)', hi: 'फॉल्ट से पहले बस वोल्टेज (pu)', bn: 'ফল্ট পূর্ববর্তী ভোল্টেজ (pu)' } },
        { symbol: 'X\'\'_{th}', name: { en: 'Thevenin equivalent subtransient reactance seen from fault (pu)', hi: 'थेवेनिन सबट्रांजिएंट प्रतिघात (pu)', bn: 'থেভেনিন সাব-ট্রানজিয়েন্ট রিঅ্যাক্ট্যান্স (pu)' } }
      ]
    },
    {
      id: 'f-ch16-breaker-making-capacity',
      symbol: 'I_{make}',
      expression: 'I_{make} = 2.55 \\cdot I\'\'_{f,sym} \\quad \\text{(IEC 60909 at 50 Hz)}',
      title: {
        en: 'Circuit Breaker Making (Momentary Peak) Current Rating',
        hi: 'सर्किट ब्रेकर मेकिंग (मोमेंटरी पीक) धारा रेटिंग',
        bn: 'সার্কিট ব্রেকার মেকিং (মোমেন্টারি পিক) কারেন্ট রেটিং'
      },
      description: {
        en: 'Specifies the maximum instantaneous asymmetrical peak current that a circuit breaker must mechanically withstand when closing onto a bolted short circuit.',
        hi: 'अधिकतम तात्कालिक असममित शिखर धारा जिसे एक सर्किट ब्रेकर को बंद होते समय यांत्रिक रूप से सहन करना चाहिए।',
        bn: 'সর্বোচ্চ তাৎক্ষণিক পিক কারেন্ট যা শর্ট সার্কিটের ওপর বন্ধ হওয়ার সময় একটি ব্রেকারকে যান্ত্রিকভাবে সহ্য করতে হয়।'
      },
      variables: [
        { symbol: 'I_{make}', name: { en: 'Breaker peak making current (kA peak)', hi: 'ब्रेकर पीक मेकिंग धारा (kA)', bn: 'ব্রেকার পিক মেকিং কারেন্ট (kA)' } },
        { symbol: 'I\'\'_{f,sym}', name: { en: 'Symmetrical subtransient RMS fault current (kA RMS)', hi: 'सममित सबट्रांजिएंट RMS धारा (kA)', bn: 'প্রতিসম সাব-ট্রানজিয়েন্ট আরএমএস কারেন্ট (kA)' } }
      ]
    },
    {
      id: 'f-ch16-short-circuit-mva',
      symbol: 'S_{sc}',
      expression: 'S_{sc} = \\sqrt{3} \\cdot V_{LL,rated} \\cdot I\'\'_f = \\frac{S_{base}}{X\'\'_{th,pu}} \\quad \\text{[MVA]}',
      title: {
        en: 'Short-Circuit Fault Level (Fault MVA)',
        hi: 'शॉर्ट-सर्किट फॉल्ट स्तर (फॉल्ट MVA)',
        bn: 'শর্ট-সার্কিট ফল্ট লেভেল (ফল্ট MVA)'
      },
      description: {
        en: 'Measures the electrical fault strength of a substation bus, directly dictating the interrupting capacity of connected switchgear.',
        hi: 'सबस्टेशन बस की फॉल्ट क्षमता का पैमाना, जो जुड़े स्विचगियर की इंटरप्टिंग क्षमता निर्धारित करता है।',
        bn: 'সাবস্টেশন বাসের ফল্ট সক্ষমতার পরিমাপ, যা সংযুক্ত সুইচগিয়ারের ইন্টারাপ্টিং ক্ষমতা নির্ধারণ করে।'
      },
      variables: [
        { symbol: 'S_{sc}', name: { en: 'Short-circuit fault MVA', hi: 'शॉर्ट-सर्किट फॉल्ट MVA', bn: 'শর্ট-সার্কিট ফল্ট MVA' } },
        { symbol: 'S_{base}', name: { en: 'Three-phase system base MVA', hi: 'सिस्टम बेस MVA', bn: 'সিস্টেম বেস MVA' } },
        { symbol: 'X\'\'_{th,pu}', name: { en: 'Per-unit Thevenin subtransient reactance', hi: 'प्रति-इकाई थेवेनिन सबट्रांजिएंट प्रतिघात', bn: 'পার-ইউনিট থেভেনিন সাব-ট্রানজিয়েন্ট রিঅ্যাক্ট্যান্স' } }
      ]
    }
  ],
  sections: [
    {
      id: 'sec-ch16-l08-breaker-physics',
      title: {
        en: 'Circuit Breaker Contact Parting Dynamics & Arc Quenching',
        hi: 'सर्किट ब्रेकर संपर्क पृथक्करण गतिकी एवं आर्क शमन',
        bn: 'সার্কিট ব্রেকার কন্টাক্ট বিচ্ছিন্নকরণ ও আর্ক নির্বাপণ'
      },
      content: {
        en: 'When protective relays detect an overcurrent condition, a trip coil is energized, opening the breaker contacts within 2 to 5 cycles (40 to 100 ms). During this contact separation, two competing physical quantities dictate whether the circuit will safely clear or explode:\n\n1. Transient Recovery Voltage (TRV):\nAs the AC current approaches a natural current zero, an arc forms in the quenching medium (SF6 gas, vacuum, or air). At the exact instant of arc extinction at current zero, the high-frequency voltage transient appearing across the parting contacts is the TRV. If the Rate of Rise of Recovery Voltage (RRRV) exceeds the dielectric recovery rate of the ionized gas, the arc reignites, failing the interruption.\n\n2. DC Component Decay and Asymmetry:\nThe interrupting capacity required by a circuit breaker is not purely symmetrical. Because the DC offset takes 50 to 150 ms to decay (depending on the substation X/R ratio), the breaker contacts part while significant DC current still flows. Breakers are tested and certified according to IEC 62271-100 to interrupt an asymmetrical current I_sc,asym = sqrt(I_sym² + I_dc²).\n\n3. Busbar Mechanical Electrodynamic Stresses:\nThe mechanical force between parallel busbars during a short circuit is proportional to the square of the instantaneous peak current: F = (mu_0 / 2*pi) * (i_peak² / d). Because I_make can reach 2.55 times the symmetrical RMS current, the mechanical forces can exceed tens of kilonewtons, requiring rigid post insulators and reinforced steel support structures.',
        hi: 'जब रिले ट्रिप का आदेश देता है, तो ब्रेकर संपर्क 2 से 5 चक्रों में अलग होते हैं। इस समय बनने वाले आर्क को SF6 गैस या वैक्यूम द्वारा बुझाया जाता है। करंट शून्य होने पर संपर्कों के पार उत्पन्न होने वाले ट्रांजिएंट रिकवरी वोल्टेज (TRV) को डाईइलेक्ट्रिक ताकत से कम होना चाहिए। इसके अतिरिक्त, फॉल्ट के पहले आधे चक्र में लगने वाला बल धारा के वर्ग (I_peak²) के समानुपाती होता है, जिसके लिए मजबूत बसबार की आवश्यकता होती है।',
        bn: 'রিলে ট্রিপ সংকেত দিলে ব্রেকার কন্টাক্ট ২ থেকে ৫ সাইকেলে বিচ্ছিন্ন হয়। কারেন্ট শূন্য হওয়ার মুহূর্তে কন্টাক্টের দুই প্রান্তে ট্রানজিয়েন্ট রিকভারি ভোল্টেজ (TRV) তৈরি হয়। SF6 বা ভ্যাকুয়ামের ডাইইলেক্ট্রিক শক্তি TRV এর চেয়ে বেশি না হলে আর্ক পুনরায় জ্বলে ওঠে। ফল্টের প্রথম সাইকেলে বিপুল মেকিং কারেন্টের কারণে বাসবারে প্রচণ্ড যান্ত্রিক বল (I_peak²) সৃষ্টি হয়।'
      },
      schematicId: 'sch-ch16-symmetrical-fault'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch16-l08-01',
      problem: {
        en: 'A synchronous generator rated 100 MVA, 11 kV has a subtransient reactance X"d = 0.15 pu. It is connected through a step-up transformer rated 100 MVA, 11/132 kV with leakage reactance X_t = 0.10 pu to a 132 kV transmission line having a series reactance of X_line = 0.25 pu on a 100 MVA base. A bolted three-phase short circuit occurs at the receiving end of the transmission line. Assuming pre-fault voltage is 1.0 pu and pre-fault load current is zero, calculate:\n(a) The Thevenin subtransient reactance at the fault point.\n(b) The subtransient fault current in per unit and in physical Amperes.\n(c) The fault level in MVA.',
        hi: 'एक 100 MVA, 11 kV जनरेटर का सबट्रांजिएंट प्रतिघात X"d = 0.15 pu है। यह 100 MVA, 11/132 kV ट्रांसफार्मर (X_t = 0.10 pu) और 132 kV लाइन (X_line = 0.25 pu) के माध्यम से जुड़ा है। लाइन के अंत में एक थ्री-फेज शॉर्ट सर्किट होता है। V_pre = 1.0 pu मानते हुए गणना कीजिए:\n(a) फॉल्ट बिंदु पर थेवेनिन सबट्रांजिएंट प्रतिघात\n(b) pu और एम्पीयर में सबट्रांजिएंट फॉल्ट धारा\n(c) फॉल्ट MVA।',
        bn: 'একটি ১০০ MVA, ১১ kV জেনারেটরের X"d = ০.১৫ pu। এটি ১০০ MVA, ১১/১৩২ kV ট্রান্সফরমার (X_t = ০.১০ pu) এবং ১৩২ kV লাইনের (X_line = ০.২৫ pu) সাথে সংযুক্ত। লাইনের শেষ প্রান্তে একটি থ্রি-ফেজ ফল্ট ঘটলে নির্ণয় করুন:\n(a) ফল্ট বিন্দুতে থেভেনিন সাব-ট্রানজিয়েন্ট রিঅ্যাক্ট্যান্স\n(b) pu এবং অ্যাম্পিয়ারে ফল্ট কারেন্ট\n(c) ফল্ট MVA।'
      },
      solution: {
        en: 'Given System (All on 100 MVA base):\n• Generator: X"d = 0.15 pu\n• Transformer: X_t = 0.10 pu\n• Line: X_line = 0.25 pu\n• Base Voltage at fault point: V_base = 132 kV\n• Pre-fault voltage: V_f(0) = 1.0 ∠0° pu\n\nStep 1: Calculate Total Thevenin Subtransient Reactance X"th:\nSince the components are in series between the internal generator EMF and the fault point:\nX"th = X"d + X_t + X_line = 0.15 + 0.10 + 0.25 = 0.50 pu\nZ"th = j0.50 pu\n\nStep 2: Calculate Subtransient Fault Current in Per Unit:\nI"_f = V_f(0) / Z"th = (1.0 ∠0°) / (j0.50) = -j2.00 pu  ==>  |I"_f| = 2.00 pu\n\nStep 3: Calculate Base Current on the 132 kV Side:\nI_base = S_base / (sqrt(3) * V_base,LL) = (100 * 10^6) / (sqrt(3) * 132,000) = 100,000 / 228.63 = 437.39 A\n\nStep 4: Calculate Actual Subtransient Fault Current in Amperes:\nI"_f,actual = |I"_f,pu| * I_base = 2.00 * 437.39 A = 874.78 A\n\nStep 5: Calculate Fault Level in MVA:\nS_sc = S_base / X"th,pu = 100 MVA / 0.50 = 200.0 MVA\n(Or: S_sc = sqrt(3) * 132 kV * 0.87478 kA = 199.99 MVA ≈ 200 MVA).',
        hi: 'चरण 1: X"th = 0.15 + 0.10 + 0.25 = 0.50 pu\nचरण 2: I"_f = 1.0 / (j0.50) = 2.0 pu\nचरण 3: I_base = 100e6 / (sqrt(3) * 132000) = 437.39 A\nचरण 4: I"_f = 2.0 * 437.39 = 874.78 A\nचरण 5: फॉल्ट MVA = 100 / 0.50 = 200 MVA।',
        bn: 'ধাপ ১: X"th = ০.১৫ + ০.১০ + ০.২৫ = ০.৫০ pu\nধাপ ২: I"_f = ১.০ / ০.৫০ = ২.০ pu\nধাপ ৩: I_base = ১০০e৬ / (sqrt(৩) * ১৩২০০০) = ৪৩৭.৩৯ A\nধাপ ৪: I"_f = ২.০ * ৪৩৭.৩৯ = ৮৭৪.৭৮ A\nধাপ ৫: ফল্ট MVA = ১০০ / ০.৫০ = ২০০ MVA।'
      },
      givenValues: { 'S_base': '100 MVA', 'V_base': '132 kV', 'X"d': '0.15 pu', 'X_t': '0.10 pu', 'X_line': '0.25 pu' },
      finalAnswer: {
        en: 'X"th = 0.50 pu, |I"f| = 2.0 pu (874.8 A), Fault Level = 200 MVA',
        hi: 'X"th = 0.50 pu, |I"f| = 2.0 pu (874.8 A), फॉल्ट स्तर = 200 MVA',
        bn: 'X"th = ০.৫০ pu, |I"f| = ২.০ pu (৮৭৪.৮ A), ফল্ট লেভেল = ২০০ MVA'
      }
    },
    {
      id: 'ex-ch16-l08-02',
      problem: {
        en: 'For the system in Example 1 where the symmetrical subtransient fault current is I"_f,sym = 874.8 A at 132 kV, determine:\n(a) The minimum circuit breaker making current (momentary peak) according to IEC 60909 (using peak factor 2.55).\n(b) The minimum symmetrical interrupting rating of the breaker in kA and MVA.',
        hi: 'उदाहरण 1 के उसी सिस्टम के लिए जहां 132 kV पर सममित सबट्रांजिएंट धारा 874.8 A है, ज्ञात कीजिए:\n(a) IEC 60909 के अनुसार न्यूनतम सर्किट ब्रेकर मेकिंग धारा (पीक फैक्टर 2.55 का उपयोग करते हुए)\n(b) kA और MVA में ब्रेकर की न्यूनतम सममित इंटरप्टिंग रेटिंग।',
        bn: 'উদাহরণ ১ এর সিস্টেমের জন্য (১৩২ kV বাসে প্রতিসম কারেন্ট ৮৭৪.৮ A):\n(a) IEC ৬০৯০৯ অনুসারে ব্রেকারের পিক মেকিং কারেন্ট নির্ণয় করুন (ফ্যাক্টর ২.৫৫ ব্যবহার করে)।\n(b) kA এবং MVA এককে ব্রেকারের ইন্টারাপ্টিং রেটিং কত হতে হবে?'
      },
      solution: {
        en: 'Given:\n• Symmetrical Subtransient Fault Current: I"_f,sym = 874.78 A = 0.8748 kA RMS\n• Nominal Line Voltage: V_LL = 132 kV\n\nStep 1: Calculate Minimum Breaker Peak Making Current:\nAccording to IEC 60909, the peak making current handles the worst-case DC offset at the first half-cycle peak:\nI_make = 2.55 * I"_f,sym = 2.55 * 874.78 A = 2,230.7 A = 2.231 kA peak\n\nStep 2: Calculate Symmetrical Interrupting Current Rating:\nAt breaker contact parting time (typically 3 cycles / 60 ms), subtransient currents have transitioned toward transient values. Conservatively specifying the subtransient level:\nI_interrupt = 0.8748 kA RMS\n\nStep 3: Calculate Interrupting Capacity MVA:\nInterrupting MVA = sqrt(3) * V_LL * I_interrupt = sqrt(3) * 132 kV * 0.8748 kA = 200.0 MVA.',
        hi: 'चरण 1: मेकिंग करंट I_make = 2.55 * I"_f = 2.55 * 0.8748 kA = 2.231 kA peak\nचरण 2: इंटरप्टिंग धारा = 0.8748 kA RMS\nचरण 3: इंटरप्टिंग MVA = sqrt(3) * 132 * 0.8748 = 200 MVA।',
        bn: 'ধাপ ১: মেকিং কারেন্ট I_make = ২.৫৫ * ০.৮৭৪৮ kA = ২.২৩১ kA peak\nধাপ ২: ইন্টারাপ্টিং কারেন্ট = ০.৮৭৪৮ kA RMS\nধাপ ৩: ইন্টারাপ্টিং MVA = sqrt(৩) * ১৩২ * ০.৮৭৪৮ = ২০০ MVA।'
      },
      givenValues: { 'I"_f,sym': '874.8 A', 'V_LL': '132 kV', 'Making Factor': '2.55' },
      finalAnswer: {
        en: 'Breaker Making Current = 2.231 kA peak, Interrupting Rating = 0.875 kA (200 MVA)',
        hi: 'ब्रेकर मेकिंग करंट = 2.231 kA peak, इंटरप्टिंग रेटिंग = 0.875 kA (200 MVA)',
        bn: 'ব্রেকার মেকিং কারেন্ট = ২.২৩১ kA peak, ইন্টারাপ্টিং রেটিং = ০.৮৭৫ kA (২০০ MVA)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Substation design and equipment procurement: sizing the interrupting MVA of SF6 circuit breakers.',
      'Selecting fault-current limiters (series reactors) to prevent exceeding switchgear interrupting limits in expanding grids.',
      'Designing station grounding grids to safely dissipate subtransient fault currents without hazardous step or touch potentials.'
    ],
    hi: [
      'सबस्टेशन डिजाइन: SF6 सर्किट ब्रेकर की इंटरप्टिंग MVA क्षमता का चयन।',
      'स्विचगियर की क्षमता से अधिक करंट को रोकने हेतु सीरीज रिएक्टर (फॉल्ट करंट लिमिटर) का चयन।',
      'स्टेप और टच पोटेंशियल से सुरक्षा के लिए सबस्टेशन अर्थिंग मैट का डिजाइन।'
    ],
    bn: [
      'সাবস্টেশন নকশাকরণ ও SF6 সার্কিট ব্রেকারের ইন্টারাপ্টিং MVA নির্ধারণ।',
      'সুইচগিয়ারের সহ্যসীমা রক্ষায় ফল্ট-কারেন্ট লিমিটিং সিরিজ রিঅ্যাক্টর স্থাপন।',
      'সাবস্টেশন আর্থিং গ্রিড ডিজাইন যাতে ফল্ট কারেন্ট নিরাপদে মাটিতে যেতে পারে।'
    ]
  },
  importantPoints: {
    en: [
      'Three-phase bolted short circuits generate maximum fault MVA and govern circuit breaker ratings.',
      'Generator reactances change over time: X"d (subtransient) < X\'d (transient) < Xd (synchronous).',
      'The initial fault current has a decaying DC offset that increases the peak momentary current by up to 2.55 to 2.7 times.',
      'Short-circuit MVA is simply base MVA divided by per-unit Thevenin reactance (S_sc = S_base / X"th).'
    ],
    hi: [
      'थ्री-फेज शॉर्ट सर्किट अधिकतम फॉल्ट MVA उत्पन्न करते हैं और सर्किट ब्रेकर की रेटिंग तय करते हैं।',
      'जनरेटर प्रतिघात समय के साथ बदलते हैं: X"d < X\'d < Xd।',
      'प्रारंभिक फॉल्ट धारा में DC ऑफसेट होता है जो पीक करंट को 2.55 से 2.7 गुना तक बढ़ा देता है।',
      'शॉर्ट-सर्किट MVA = S_base / X"th होता है।'
    ],
    bn: [
      'থ্রি-ফেজ শর্ট সার্কিটে সর্বোচ্চ ফল্ট MVA তৈরি হয় যা সার্কিট ব্রেকারের মান নির্ধারণ করে।',
      'জেনারেটর রিঅ্যাক্ট্যান্স সময়ের সাথে পরিবর্তিত হয়: X"d < X\'d < Xd।',
      'ফল্ট কারেন্টে ক্ষয়িষ্ণু ডিসি অফসেট থাকে যা পিক কারেন্টকে ২.৫৫ থেকে ২.৭ গুণ পর্যন্ত বাড়িয়ে দেয়।',
      'শর্ট-সার্কিট MVA = S_base / X"th।'
    ]
  },
  commonMistakes: {
    en: [
      'Using synchronous reactance Xd instead of subtransient reactance X"d when sizing circuit breakers.',
      'Forgetting to multiply the symmetrical RMS current by the 2.55 factor when specifying breaker peak making capacity.',
      'Neglecting the effect of pre-fault operating voltage (e.g., using 1.0 pu when the pre-fault bus is energized at 1.05 pu).'
    ],
    hi: [
      'सर्किट ब्रेकर का आकार तय करते समय सबट्रांजिएंट X"d के स्थान पर स्टेडी-स्टेट Xd का उपयोग करना।',
      'मेकिंग क्षमता निकालते समय 2.55 के पीक गुणक को भूल जाना।',
      'फॉल्ट से पहले के वास्तविक वोल्टेज (जैसे 1.05 pu) की उपेक्षा करना।'
    ],
    bn: [
      'ব্রেকার সাইজিংয়ে সাব-ট্রানজিয়েন্ট X"d এর বদলে স্টেডি-স্টেট Xd ব্যবহার করা।',
      'মেকিং ক্যাপাসিটি নির্ণয়ে ২.৫৫ পিক ফ্যাক্টর গুণ করতে ভুলে যাওয়া।',
      'ফল্ট পূর্ববর্তী প্রকৃত ভোল্টেজকে বিবেচনা না করা।'
    ]
  },
  keyTakeaways: {
    en: [
      'Symmetrical three-phase faults determine the maximum mechanical and thermal stress on power equipment.',
      'The subtransient period dictates momentary making ratings, while the transient period dictates interrupting ratings.',
      'Thevenin impedance at the fault bus provides the single most important parameter for short-circuit studies.'
    ],
    hi: [
      'सममित थ्री-फेज फॉल्ट उपकरणों पर अधिकतम यांत्रिक और तापीय तनाव निर्धारित करते हैं।',
      'सबट्रांजिएंट काल मेकिंग रेटिंग तय करता है, जबकि ट्रांजिएंट काल इंटरप्टिंग रेटिंग तय करता है।',
      'फॉल्ट बस पर थेवेनिन प्रतिघात शॉर्ट-सर्किट गणना का सबसे महत्वपूर्ण पैरामीटर है।'
    ],
    bn: [
      'থ্রি-ফেজ প্রতিসম ফল্ট গ্রিড যন্ত্রপাতির সর্বোচ্চ যান্ত্রিক ও তাপীয় সহনশীলতা নির্ধারণ করে।',
      'সাব-ট্রানজিয়েন্ট পর্যায় মেকিং রেটিং এবং ট্রানজিয়েন্ট পর্যায় ইন্টারাপ্টিং রেটিং নিয়ন্ত্রণ করে।',
      'ফল্ট বাসের থেভেনিন রিঅ্যাক্ট্যান্স শর্ট-সার্কিট বিশ্লেষণের প্রধানতম ভিত্তি।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch16-l08-01',
      question: {
        en: 'Which reactance of a synchronous alternator is the smallest in magnitude and governs the initial cycle of fault current?',
        hi: 'सिंक्रोनस अल्टरनेटर का कौन सा प्रतिघात परिमाण में सबसे छोटा होता है और फॉल्ट धारा के पहले चक्र को नियंत्रित करता है?',
        bn: 'সিঙ্ক্রোনাস জেনারেটরের কোন রিঅ্যাক্ট্যান্সটির মান সবচেয়ে কম এবং যা ফল্ট কারেন্টের প্রথম সাইকেল নিয়ন্ত্রণ করে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Subtransient reactance (X"d)', hi: 'सबट्रांजिएंट प्रतिघात (X"d)', bn: 'সাব-ট্রানজিয়েন্ট রিঅ্যাক্ট্যান্স (X"d)' } },
        { id: 'opt-2', text: { en: 'Transient reactance (X\'d)', hi: 'ट्रांजिएंट प्रतिघात (X\'d)', bn: 'ট্রানজিয়েন্ট রিঅ্যাক্ট্যান্স (X\'d)' } },
        { id: 'opt-3', text: { en: 'Synchronous steady-state reactance (Xd)', hi: 'सिंक्रोनस स्टेडी-स्टेट प्रतिघात (Xd)', bn: 'স্টেডি-স্টেট সিঙ্ক্রোনাস রিঅ্যাক্ট্যান্স (Xd)' } },
        { id: 'opt-4', text: { en: 'Zero-sequence reactance (X0)', hi: 'शून्य-अनुक्रम प्रतिघात (X0)', bn: 'জিরো-সিকোয়েন্স রিঅ্যাক্ট্যান্স (X0)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Subtransient reactance X"d is the smallest reactance (X"d < X\'d < Xd) because damper windings trap magnetic flux immediately upon fault inception, leading to the highest initial current.',
        hi: 'डैम्पर वाइंडिंग के कारण X"d सबसे छोटा होता है (X"d < X\'d < Xd), जिससे पहले कुछ चक्रों में धारा सबसे अधिक होती है।',
        bn: 'ড্যাম্পার ওয়াইন্ডিংয়ের কারণে X"d সবচেয়ে কম হয় (X"d < X\'d < Xd), ফলে প্রথম কয়েক সাইকেলে সর্বোচ্চ কারেন্ট পাওয়া যায়।'
      }
    },
    {
      id: 'mcq-ch16-l08-02',
      question: {
        en: 'What causes the DC offset current component during a sudden short circuit on an AC power system?',
        hi: 'AC पावर सिस्टम में अचानक शॉर्ट सर्किट के दौरान DC ऑफसेट धारा घटक का क्या कारण है?',
        bn: 'এসি পাওয়ার সিস্টেমে আকস্মিক শর্ট সার্কিটের সময় ডিসি অফসেট কারেন্ট সৃষ্টির কারণ কী?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Inductive energy storage prevents instantaneous change in current (satisfying i(0-) = i(0+))', hi: 'प्रेरणिक ऊर्जा भंडारण धारा में तात्कालिक परिवर्तन को रोकता है (i(0-) = i(0+) को संतुष्ट करता है)', bn: 'ইন্ডাকট্যান্সের কারণে কারেন্ট তাৎক্ষণিকভাবে পরিবর্তিত হতে পারে না (i(0-) = i(0+) শর্ত রক্ষার্থে)' } },
        { id: 'opt-2', text: { en: 'High resistance of overhead transmission lines', hi: 'पारेषण लाइनों का उच्च प्रतिरोध', bn: 'সঞ্চালন লাইনের উচ্চ রোধ' } },
        { id: 'opt-3', text: { en: 'Direct lightning strike entering the generator', hi: 'जनरेटर पर सीधा आकाशीय बिजली गिरना', bn: 'জেনারেটরে সরাসরি বজ্রপাত' } },
        { id: 'opt-4', text: { en: 'Earth gravitational pulling on electrons', hi: 'इलेक्ट्रॉनों पर पृथ्वी का गुरुत्वाकर्षण खिंचाव', bn: 'ইলেকট্রনের ওপর মাধ্যাকর্ষণ বল' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Because an inductor cannot permit a discontinuity in magnetic flux or current, a transient DC offset is created whose initial magnitude exactly cancels the instantaneous AC value at t = 0.',
        hi: 'प्रेरक में धारा अचानक नहीं बदल सकती, इसलिए शून्य समय पर धारा को संतुलित करने के लिए DC ऑफसेट उत्पन्न होता है।',
        bn: 'ইন্ডাক্টরে কারেন্টের তাৎক্ষণিক পরিবর্তন অসম্ভব হওয়ায় t = ০ তে মান সমন্বয় করতে ক্ষণস্থায়ী ডিসি অফসেট তৈরি হয়।'
      }
    },
    {
      id: 'mcq-ch16-l08-03',
      question: {
        en: 'Under IEC 60909 standards at 50 Hz, what multiplier is applied to the symmetrical subtransient RMS current to obtain the peak making current of a circuit breaker?',
        hi: '50 Hz पर IEC 60909 मानकों के तहत, सर्किट ब्रेकर की पीक मेकिंग धारा प्राप्त करने के लिए सममित सबट्रांजिएंट RMS धारा पर कौन सा गुणक लगाया जाता है?',
        bn: '৫০ Hz এ IEC ৬০৯০৯ মানদণ্ড অনুসারে সার্কিট ব্রেকারের পিক মেকিং কারেন্ট পেতে আরএমএস ফল্ট কারেন্টের সাথে কত গুণক প্রয়োগ করা হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: '2.55', hi: '2.55', bn: '২.৫৫' } },
        { id: 'opt-2', text: { en: '1.414', hi: '1.414', bn: '১.৪১৪' } },
        { id: 'opt-3', text: { en: '1.00', hi: '1.00', bn: '১.০০' } },
        { id: 'opt-4', text: { en: '3.14', hi: '3.14', bn: '৩.১৪' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'For standard X/R ratios at 50 Hz, the peak asymmetrical current at t = 10 ms (first peak) reaches sqrt(2) * 1.8 ≈ 2.55 times the symmetrical RMS value.',
        hi: '50 Hz पर 10 ms (पहले शिखर) पर अधिकतम असममित धारा RMS मान का लगभग 2.55 गुना हो जाती है।',
        bn: '৫০ Hz এ প্রথম ১০ ms এ সর্বোচ্চ পিক কারেন্ট আরএমএস মানের প্রায় ২.৫৫ গুণ পর্যন্ত বৃদ্ধি পায়।'
      }
    },
    {
      id: 'mcq-ch16-l08-04',
      question: {
        en: 'A 400 V substation bus has a Thevenin equivalent reactance of 0.05 pu on a 10 MVA base. What is the short-circuit fault MVA at this bus?',
        hi: '10 MVA बेस पर 400 V सबस्टेशन बस का थेवेनिन प्रतिघात 0.05 pu है। इस बस पर शॉर्ट-सर्किट फॉल्ट MVA क्या है?',
        bn: '১০ MVA বেসে ৪০০ V সাবস্টেশন বাসের থেভেনিন রিঅ্যাক্ট্যান্স ০.০৫ pu হলে ফল্ট MVA কত?'
      },
      options: [
        { id: 'opt-1', text: { en: '200 MVA', hi: '200 MVA', bn: '২০০ MVA' } },
        { id: 'opt-2', text: { en: '50 MVA', hi: '50 MVA', bn: '৫০ MVA' } },
        { id: 'opt-3', text: { en: '500 MVA', hi: '500 MVA', bn: '৫০০ MVA' } },
        { id: 'opt-4', text: { en: '0.5 MVA', hi: '0.5 MVA', bn: '০.৫ MVA' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'S_sc = S_base / X_th,pu = 10 MVA / 0.05 = 200 MVA.',
        hi: 'S_sc = S_base / X_th = 10 / 0.05 = 200 MVA।',
        bn: 'S_sc = S_base / X_th = ১০ / ০.০৫ = ২০০ MVA।'
      }
    },
    {
      id: 'mcq-ch16-l08-05',
      question: {
        en: 'Why does the symmetrical AC component of generator short-circuit current decay from subtransient to transient and finally to steady-state?',
        hi: 'जनरेटर शॉर्ट-सर्किट धारा का सममित AC घटक सबट्रांजिएंट से ट्रांजिएंट और अंततः स्टेडी-स्टेट में क्यों क्षय होता है?',
        bn: 'জেনারেটরের শর্ট-সার্কিট কারেন্টের এসি উপাদান কেন সাব-ট্রানজিয়েন্ট থেকে ট্রানজিয়েন্ট এবং অবশেষে স্টেডি-স্টেটে নেমে আসে?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Demagnetizing armature reaction slowly counteracts rotor flux linkages, reducing the effective internal EMF', hi: 'विचुंबकित करने वाला आर्मेचर रिएक्शन रोटर फ्लक्स लिंकेज का विरोध करता है, जिससे प्रभावी आंतरिक EMF कम हो जाता है', bn: 'ডিম্যাগনেটাইজিং আর্মেচার প্রতিক্রিয়া রটার ফ্লাক্স হ্রাস করে অভ্যন্তরীণ EMF কমিয়ে দেয়' } },
        { id: 'opt-2', text: { en: 'The turbine steam valves close completely in 1 millisecond', hi: 'टरबाइन स्टीम वाल्व 1 मिलीसेकंड में पूरी तरह बंद हो जाते हैं', bn: 'টারবাইনের ভালভ ১ মিলি সেকেন্ডে বন্ধ হয়ে যায়' } },
        { id: 'opt-3', text: { en: 'The stator copper melts immediately', hi: 'स्टेटर का तांबा तुरंत पिघल जाता है', bn: 'স্টেটর কয়েল তৎক্ষণাৎ গলে যায়' } },
        { id: 'opt-4', text: { en: 'Transformer oil boils away', hi: 'ट्रांसफार्मर का तेल उबलकर उड़ जाता है', bn: 'ট্রান্সফরমার তেল বাষ্পীভূত হয়' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The highly lagging fault current produces a strong demagnetizing armature reaction that penetrates the rotor, progressively reducing flux linkages over the rotor time constants T"d and T\'d.',
        hi: 'लैगिंग फॉल्ट करंट आर्मेचर रिएक्शन उत्पन्न करता है जो रोटर फ्लक्स को कम करता है, जिससे करंट समय के साथ घटता है।',
        bn: 'ল্যাগিং ফল্ট কারেন্ট শক্তিশালী ডিম্যাগনেটাইজিং আর্মেচার প্রতিক্রিয়া সৃষ্টি করে যা সময়ের সাথে ফ্লাক্স ও কারেন্ট কমিয়ে দেয়।'
      }
    },
    {
      id: 'mcq-ch16-l08-06',
      question: {
        en: 'What is the time constant governing the decay of the DC offset current during an electrical short circuit?',
        hi: 'विद्युत शॉर्ट सर्किट के दौरान DC ऑफसेट धारा के क्षय को नियंत्रित करने वाला समय स्थिरांक क्या है?',
        bn: 'শর্ট সার্কিটের সময় ডিসি অফসেট কারেন্টের ক্ষয় নিয়ন্ত্রণকারী টাইম কনস্ট্যান্ট কোনটি?'
      },
      options: [
        { id: 'opt-1', text: { en: 'T_dc = L_th / R_th = X_th / (omega * R_th)', hi: 'T_dc = L_th / R_th = X_th / (omega * R_th)', bn: 'T_dc = L_th / R_th = X_th / (omega * R_th)' } },
        { id: 'opt-2', text: { en: 'T_dc = R_th / L_th', hi: 'T_dc = R_th / L_th', bn: 'T_dc = R_th / L_th' } },
        { id: 'opt-3', text: { en: 'T_dc = sqrt(L_th * C_th)', hi: 'T_dc = sqrt(L_th * C_th)', bn: 'T_dc = sqrt(L_th * C_th)' } },
        { id: 'opt-4', text: { en: 'T_dc = 1 / (omega * L_th)', hi: 'T_dc = 1 / (omega * L_th)', bn: 'T_dc = ১ / (omega * L_th)' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'The DC offset decays exponentially with time constant T_dc = L / R. In power system terms, this equals X / (omega * R).',
        hi: 'DC ऑफसेट समय स्थिरांक T_dc = L/R = X/(omega*R) के अनुसार तेजी से क्षय होता है।',
        bn: 'ডিসি অফসেটের ক্ষয় হার নির্ধারিত হয় T_dc = L/R = X/(omega*R) টাইম কনস্ট্যান্ট দ্বারা।'
      }
    },
    {
      id: 'mcq-ch16-l08-07',
      question: {
        en: 'Which physical phenomenon during circuit breaker arc interruption is responsible for arc reignition if contact dielectric recovery is too slow?',
        hi: 'सर्किट ब्रेकर आर्क रुकावट के दौरान कौन सी भौतिक घटना आर्क के पुनः प्रज्वलन के लिए जिम्मेदार है यदि संपर्क डाईइलेक्ट्रिक रिकवरी बहुत धीमी है?',
        bn: 'সার্কিট ব্রেকারে আর্ক নির্বাপণের সময় কন্টাক্টের ডাইইলেক্ট্রিক পুনরুদ্ধার মন্থর হলে কোন ভৌত ঘটনার কারণে আর্ক পুনরায় প্রজ্জ্বলিত হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Transient Recovery Voltage (TRV)', hi: 'ट्रांजिएंट रिकवरी वोल्टेज (TRV)', bn: 'ট্রানজিয়েন্ট রিকভারি ভোল্টেজ (TRV)' } },
        { id: 'opt-2', text: { en: 'Corona discharge', hi: 'कोरोना डिस्चार्ज', bn: 'করোনা নিঃসরণ' } },
        { id: 'opt-3', text: { en: 'Skin effect', hi: 'त्वचा प्रभाव (Skin effect)', bn: 'স্কিন ইফেক্ট' } },
        { id: 'opt-4', text: { en: 'Ferranti voltage rise', hi: 'फेरांटी वोल्टेज वृद्धि', bn: 'ফেরান্টি ভোল্টেজ বৃদ্ধি' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'At current zero, the high-frequency Transient Recovery Voltage (TRV) stresses the parting contacts. If the TRV exceeds the gap dielectric strength, the arc restrikes.',
        hi: 'करंट शून्य होने पर उत्पन्न TRV संपर्कों पर अत्यधिक तनाव डालता है। यदि यह परावैद्युत सामर्थ्य से अधिक हो तो आर्क पुनः प्रज्वलित हो जाता है।',
        bn: 'কারেন্ট শূন্যের মুহূর্তে উচ্চ কম্পাঙ্কের TRV সৃষ্টি হয়। ফাঁকা স্থানের ডাইইলেক্ট্রিক শক্তি TRV এর চেয়ে কম হলে আর্ক আবার জ্বলে ওঠে।'
      }
    },
    {
      id: 'mcq-ch16-l08-08',
      question: {
        en: 'What percentage of all real-world transmission power system faults are symmetrical three-phase short circuits?',
        hi: 'वास्तविक दुनिया के पारेषण पावर सिस्टम में कितने प्रतिशत फॉल्ट सममित थ्री-फेज शॉर्ट सर्किट होते हैं?',
        bn: 'বাস্তব পাওয়ার সঞ্চালন সিস্টেমে মোট ফল্টের কত শতাংশ প্রতিসম থ্রি-ফেজ শর্ট সার্কিট হয়?'
      },
      options: [
        { id: 'opt-1', text: { en: 'Approximately 5%', hi: 'लगभग 5%', bn: 'প্রায় ৫%' } },
        { id: 'opt-2', text: { en: 'Approximately 70%', hi: 'लगभग 70%', bn: 'প্রায় ৭০%' } },
        { id: 'opt-3', text: { en: 'Approximately 95%', hi: 'लगभग 95%', bn: 'প্রায় ৯৫%' } },
        { id: 'opt-4', text: { en: 'Exactly 50%', hi: 'ठीक 50%', bn: 'ঠিক ৫০%' } }
      ],
      correctOptionId: 'opt-1',
      explanation: {
        en: 'Single line-to-ground (SLG) faults make up ~70% of faults, whereas symmetrical 3-phase faults account for only ~5% (though they represent the most severe case).',
        hi: 'सिंगल लाइन-टू-ग्राउंड फॉल्ट लगभग 70% होते हैं, जबकि सममित 3-फेज फॉल्ट केवल लगभग 5% होते हैं (यद्यपि वे सबसे गंभीर होते हैं)।',
        bn: 'একক লাইন-টু-গ্রাউন্ড ফল্ট প্রায় ৭০% হয়, যেখানে থ্রি-ফেজ প্রতিসম ফল্ট ঘটে মাত্র প্রায় ৫% ক্ষেত্রে (যদিও এটি সবচেয়ে মারাত্মক)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch16-l08-01',
      question: {
        en: 'A 33 kV substation bus has a short-circuit capacity of 750 MVA. What is the symmetrical fault current in kA?',
        hi: 'एक 33 kV सबस्टेशन बस की शॉर्ट-सर्किट क्षमता 750 MVA है। kA में सममित फॉल्ट धारा क्या है?',
        bn: 'একটি ৩৩ kV সাবস্টেশন বাসের শর্ট-সার্কিট ক্ষমতা ৭৫০ MVA। kA এককে প্রতিসম ফল্ট কারেন্ট কত?'
      },
      hint: {
        en: 'I_sc = S_sc / (sqrt(3) * V_LL) = 750 / (sqrt(3) * 33) = 750 / 57.158 = 13.12 kA.',
        hi: 'I_sc = 750 / (sqrt(3) * 33) = 13.12 kA।',
        bn: 'I_sc = ৭৫০ / (sqrt(৩) * ৩৩) = ১৩.১২ kA।'
      }
    }
  ]
};
