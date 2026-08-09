import { Lesson } from '../types';

export const LESSON_THERMAL_INSTRUMENTS: Lesson = {
  id: 'lsn-ch3-thermal-instruments',
  topicId: 'ch3-thermal-instruments',
  order: 7,
  title: {
    en: 'Thermal Instruments',
    hi: 'तापीय उपकरण (Thermal Instruments)',
    bn: 'থার্মাল বা তাপীয় যন্ত্র (Thermal Instruments)'
  },
  easyExplanation: {
    en: 'Thermal instruments measure electrical current or voltage by converting electrical energy into heat energy using Joule\'s Heating ($H = I^2 R t$). Because heat generated depends on current squared ($I^2$), these meters naturally measure the True RMS value of both AC and DC signals, making them extremely useful for high-frequency radio signals!',
    hi: 'तापीय उपकरण जूल के तापन नियम ($H = I^2 R t$) का उपयोग करके विद्युत ऊर्जा को ऊष्मा ऊर्जा में बदलकर करंट या वोल्टेज मापते हैं। चूंकि उत्पन्न ऊष्मा धारा के वर्ग ($I^2$) पर निर्भर करती है, इसलिए ये मीटर AC और DC दोनों का True RMS मान मापते हैं और रेडियो फ्रीक्वेंसी (RF) सिग्नल मापने के लिए बेहतरीन हैं!',
    bn: 'থার্মাল বা তাপীয় যন্ত্র জুুলের তাপীয় নীতি ($H = I^2 R t$) ব্যবহার করে বিদ্যুৎ শক্তিকে তাপে রূপান্তরিত করে কারেন্ট বা ভোল্টেজ পরিমাপ করে। উৎপন্ন তাপ কারেন্টের বর্গের ($I^2$) ওপর নির্ভর করায় এগুলো এসি ও ডিসি উভয় সরবরাহের ট্রু আরএমএস (True RMS) মান নিখুঁতভাবে মাপে!'
  },
  detailedExplanation: {
    en: 'Thermal instruments operate on the heating effect of electric current. They are primarily classified into two types:\n\n1. Hot-Wire Instruments:\n   • Construction: A fine platinum-silver or platinum-iridium wire is stretched between two fixed terminals. A second phosphor-bronze wire is tied to its midpoint and pulled taut by a silk thread wound over a pulley connected to the pointer and spring control.\n   • Working: Current passing through the main wire heats it, causing linear thermal expansion (sag). The phosphor-bronze wire takes up the sag, rotating the pulley and deflecting the pointer.\n   • Deflection: Sag $\delta \propto \Delta T \propto I^2_{rms}$. Hence deflection $\theta \propto I^2_{rms}$ (Square law / Non-linear scale).\n\n2. Thermocouple Instruments:\n   • Construction: Consists of a heating element (heater wire) carrying the current and a thermocouple junction (e.g., Copper-Constantan or Iron-Constantan) thermo-electrically coupled to it.\n   • Working: Current heats the heater wire. The thermocouple converts the temperature rise $\Delta T$ into a DC thermo-EMF ($E_{thermo} \propto \Delta T \propto I^2_{rms}$) based on the Seebeck Effect. This DC voltage is measured by a sensitive PMMC meter.\n\nKey Engineering Features:\n• Frequency Range: Thermocouple instruments function accurately from DC up to Very High Radio Frequencies (50 MHz+).\n• Waveform Independence: Measures True RMS regardless of harmonic distortion or non-sinusoidal waveforms.\n• Damping: Air friction damping or inherent thermal lag.\n• Disadvantages: High power consumption, slow response (thermal inertia), low overload capacity (wire burns out easily), and non-linear scale.',
    hi: 'तापीय उपकरण धारा के तापीय प्रभाव पर कार्य करते हैं। इन्हें दो मुख्य प्रकारों में वर्गीकृत किया जाता है:\n\n1. हॉट-वायर उपकरण (Hot-Wire Instruments):\n   • संरचना: प्लैटिनम-इरिडियम तार दो सिरों के बीच तना होता है। इसके मध्य बिंदु से फॉस्फोर-ब्रॉन्ज तार जुड़ा होता है जो सिल्क धागे से जुड़ा होता है।\n   • कार्यप्रणाली: धारा प्रवाहित होने पर तार गर्म होकर फैलता है (Sag)। इस फैलाव से पुली घूमती है और पॉइंटर विक्षेपित होता है।\n   • विक्षेप: फैलाव $\delta \propto I^2_{rms}$। अतः विक्षेप $\theta \propto I^2_{rms}$ (गैर-समान पैमाना)।\n\n2. थर्मोकपल उपकरण (Thermocouple Instruments):\n   • संरचना: एक हीटर वायर और उससे जुड़ा थर्मोकपल जंक्शन (जैसे कॉपर-कॉन्स्टेंटन)।\n   • कार्यप्रणाली: धारा से हीटर गर्म होता है। सीबेक प्रभाव (Seebeck Effect) के कारण थर्मोकपल DC वोल्टेज ($E \propto I^2_{rms}$) उत्पन्न करता है जिसे PMMC मीटर मापता है।\n\nमुख्य विशेषताएं:\n• उच्च आवृत्ति सीमा: 50 MHz+ रेडियो फ्रीक्वेंसी तक सटीक मापन।\n• तरंग-रूप स्वतंत्रता: तरंग के आकार पर निर्भर किए बिना True RMS मापन।\n• सीमाएं: धीमी प्रतिक्रिया (Thermal inertia), ओवरलोड सहन करने की कम क्षमता, और अधिक शक्ति खपत।',
    bn: 'থার্মাল ইনস্ট্রুমেন্ট কারেন্টের তাপীয় ক্রিয়ার ওপর ভিত্তি করে কাজ করে। এগুলো প্রধানত দুই প্রকার:\n\n১. হট-ওয়্যার ইনস্ট্রুমেন্ট:\n   • গঠন: প্লাটিনাম-ইরিডিয়াম তার দুটি প্রান্তের মাঝে টানা থাকে। এর মাঝখান থেকে ফসফর-ব্রোঞ্জ তার ও রেশমি সুতা দিয়ে পুুলির সাথে কাঁটা যুক্ত থাকে।\n   • কার্যনীতি: কারেন্ট গেলে তারটি উত্তপ্ত হয়ে প্রসারিত হয় (Sag)। এই প্রসারণের ফলে পুলি ঘুরে কাঁটাকে সরায়।\n   • বিচ্যুতি: প্রসারণ $\delta \propto I^2_{rms}$, ফলে কাঁটার সরণ $\theta \propto I^2_{rms}$ (অরৈখিক স্কেল)।\n\n২. থার্মোকাপল ইনস্ট্রুমেন্ট:\n   • গঠন: একটি হিটার ওয়্যার এবং তার সাথে যুক্ত থার্মোকাপল জংশন।\n   • কার্যনীতি: কারেন্ট হিটারকে উত্তপ্ত করলে সিবেক ক্রিয়ার (Seebeck Effect) ফলে থার্মোকাপলে ডিসি ভোল্টেজ ($E \propto I^2_{rms}$) তৈরি হয় যা একটি পিএমএমসি মিটার মাপে।\n\nপ্রধান প্রকৌশল বৈশিষ্ট্য:\n• ফ্রিকোয়েন্সি সীমা: ৫০ মেগাহার্টজ (50 MHz+) রেডিও ফ্রিকোয়েন্সি পর্যন্ত অত্যন্ত নির্ভুল।\n• ট্রু আরএমএস মান: যেকোনো এসি বা ডিসির ট্রু আরএমএস মান মাপে।\n• সীমাবদ্ধতা: উচ্চ পাওয়ার খরচ, ধীর প্রতিক্রিয়া (Thermal inertia), কম ওভারলোড সহ্যক্ষমতা।'
  },
  formulas: [
    {
      symbol: 'H',
      expression: 'H = I^2 R t',
      description: {
        en: 'Joule Heat Energy (H) in Joules = Current squared (I²) × Resistance (R) × Time (t)',
        hi: 'जूल ऊष्मा (H) जूल में = धारा का वर्ग (I²) × प्रतिरोध (R) × समय (t)',
        bn: 'জুুল তাপ শক্তি (H) জুুলে = কারেন্টের বর্গ (I²) × রেজিস্ট্যান্স (R) × সময় (t)'
      }
    },
    {
      symbol: 'E_{thermo}',
      expression: 'E_{thermo} = k \\cdot \\Delta T \\propto I_{rms}^2',
      description: {
        en: 'Thermo-EMF (E) = Constant (k) × Temperature difference (ΔT) proportional to I²_rms',
        hi: 'थर्मो-ईएमएफ (E) = नियतांक (k) × तापांतर (ΔT) जो I²_rms के समानुपाती है',
        bn: 'থার্মো-ইএমএফ (E) = ধ্রুবক (k) × তাপমাত্রার পার্থক্য (ΔT) যা I²_rms এর সমানুপাতিক'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-thermal-instrument',
      title: {
        en: 'Thermocouple Type Thermal Instrument Circuit',
        hi: 'थर्मोकपल प्रकार का तापीय उपकरण परिपथ',
        bn: 'থার্মোকাপল টাইপ থার্মাল ইনস্ট্রুমেন্টের সার্কিট চিত্র'
      },
      caption: {
        en: 'RF/AC current heats the heater wire; thermocouple generates DC Thermo-EMF measured by a calibrated PMMC instrument.',
        hi: 'RF/AC धारा हीटर को गर्म करती है; थर्मोकपल DC थर्मो-ईएमएफ उत्पन्न करता है जिसे PMMC मीटर मापता है।',
        bn: 'আরএফ/এসি কারেন্ট হিটারকে উত্তপ্ত করে; থার্মোকাপল উৎপন্ন ডিসি ইএমএফ পিএমএমসি দ্বারা পরিমাপ করে।'
      },
      svgType: 'instrument-thermal'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-thermal-1',
      problem: {
        en: 'A thermocouple instrument gives a full-scale deflection of 10 mA DC. Calculate the current required to produce half-scale deflection (50% scale deflection).',
        hi: 'एक थर्मोकपल उपकरण 10 mA DC पर पूर्ण-पैमाना विक्षेप (Full Scale Deflection) देता है। आधे पैमाने (50% विक्षेप) को उत्पन्न करने के लिए आवश्यक धारा की गणना करें।',
        bn: 'একটি থার্মোকাপল মিটার ১০ mA DC কারেন্টে পূর্ণ স্কেল বিচ্যুতি দেয়। ৫০% বিচ্যুতি বা অর্ধেক স্কেল পাঠের জন্য কত কারেন্ট লাগবে তা বের করো।'
      },
      givenValues: {
        'Full Scale Current (I_FSD)': '10 mA = 0.01 A',
        'Full Scale Deflection (θ1)': '100%',
        'Target Deflection (θ2)': '50%'
      },
      solution: {
        en: 'For thermal instruments, deflection θ is proportional to current squared (I²):\nθ ∝ I²  ⟹  (θ2 / θ1) = (I2 / I1)²\n0.5 = (I2 / 10 mA)²\nI2² = 0.5 × (10)² = 50\nI2 = √50 ≈ 7.07 mA.',
        hi: 'तापीय उपकरणों के लिए, विक्षेप θ धारा के वर्ग (I²) के समानुपाती होता है:\nθ ∝ I²  ⟹  (θ2 / θ1) = (I2 / I1)²\n0.5 = (I2 / 10 mA)²\nI2² = 0.5 × 100 = 50\nI2 = √50 ≈ 7.07 mA.',
        bn: 'থার্মাল মিটারে বিচ্যুতি θ কারেন্টের বর্গের (I²) সমানুপাতিক:\nθ ∝ I²  ⟹  (θ2 / θ1) = (I2 / I1)²\n০.৫ = (I2 / ১০ mA)²\nI2² = ০.৫ × ১০০ = ৫০\nI2 = √৫০ ≈ ৭.০৭ mA।'
      },
      finalAnswer: {
        en: 'Required Current = 7.07 mA',
        hi: 'आवश्यक धारा = 7.07 mA',
        bn: 'প্রয়োজনীয় কারেন্ট = ৭.০৭ mA'
      }
    }
  ],
  practicalApplications: {
    en: [
      'RF Current Measurement: Transmitters, antenna feeder lines, and radio frequency communication circuits.',
      'True RMS Measurement: Distorted AC waveforms with high crest factors.',
      'Calibration standard for high-frequency AC ammeters.'
    ],
    hi: [
      'RF धारा मापन: ट्रांसमीटर, एंटीना फीडर लाइन और रेडियो फ्रीक्वेंसी संचार परिपथ।',
      'True RMS मापन: उच्च क्रैस्ट फैक्टर वाले विकृत AC वेवफॉर्म।',
      'उच्च-आवृत्ति वाले AC अमीटर के लिए कैलिब्रेशन मानक।'
    ],
    bn: [
      'আরএফ কারেন্ট পরিমাপ: রেডিও ট্রান্সমিটার, অ্যান্টিনা লাইন ও আরএফ যোগাযোগ সার্কিট।',
      'ট্রু আরএমএস মান নির্ণয়: উচ্চ ক্র্যাস্ট ফ্যাক্টর যুক্ত এসি সংকেত।',
      'উচ্চ-ফ্রিকোয়েন্সি এসি অ্যামিটারের সঠিকতা যাচাই বা ক্যালিব্রেশন মানক।'
    ]
  },
  importantPoints: {
    en: [
      'Thermal instruments measure True RMS values of AC and DC.',
      'Operating Principle: Joule Heating ($H = I^2 R t$) or Seebeck Effect.',
      'Thermocouple instruments are ideal for High Frequency / RF applications (up to 50 MHz).',
      'Scale is Non-linear (Square Law: $\\theta \\propto I^2$).',
      'Major limitation: Low thermal overload capacity (heater wire burns easily).'
    ],
    hi: [
      'तापीय उपकरण AC और DC दोनों के True RMS मान मापते हैं।',
      'कार्य सिद्धांत: जूल तापन ($H = I^2 R t$) या सीबेक प्रभाव।',
      'थर्मोकपल उपकरण रेडियो फ्रीक्वेंसी (RF) अनुप्रयोगों (50 MHz तक) के लिए उत्कृष्ट हैं।',
      'पैमाना अरैखिक (वर्ग नियम: $\\theta \\propto I^2$) होता है।',
      'मुख्य सीमा: ओवरलोड सहन करने की बहुत कम क्षमता।'
    ],
    bn: [
      'থার্মাল মিটার এসি ও ডিসি উভয়েরই ট্রু আরএমএস (True RMS) মান মাপে।',
      'কার্যনীতি: জুুল হিটিং ($H = I^2 R t$) বা সিবেক প্রভাব।',
      'থার্মোকাপল মিটার রেডিও ফ্রিকোয়েন্সি (৫০ MHz পর্যন্ত) কাজের জন্য সেরা।',
      'স্কেল অরৈখিক বা বর্গীয় नियमों মেনে চলে ($\\theta \\propto I^2$)।',
      'প্রধান সীমাবদ্ধতা: কম তাপীয় ওভারলোড সহ্যক্ষমতা।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Hot-Wire with PMMC: PMMC measures average DC, while Hot-wire measures True RMS AC/DC.',
      'Assuming linear scale: Thermal instrument deflection follows square law ($\theta \propto I^2$), creating a cramped scale at low values.',
      'Subjecting heater wire to sudden overcurrent, causing immediate heater burnout.'
    ],
    hi: [
      'हॉट-वायर को PMMC समझना: PMMC औसत DC मापता है, जबकि हॉट-वायर True RMS AC/DC मापता है।',
      'पैमाने को रैखिक समझना: तापीय विक्षेप वर्ग नियम ($\theta \propto I^2$) का पालन करता है।',
      'हीटर वायर को अचानक ओवरकरंट देना, जिससे हीटर तुरंत जल जाता है।'
    ],
    bn: [
      'হট-ওয়্যারকে পিএমএমসি ভাবা: পিএমএমসি গড় ডিসি মাপে, আর থার্মাল ট্রু আরএমএস এসি/ডিসি মাপে।',
      'স্কেলকে রৈখিক ভাবা: থার্মাল মিটারের বিচ্যুতি বর্গ নিয়ম ($\\theta \\propto I^2$) মেনে অসুষম হয়।',
      'হিটার ওয়্যারে অতিরিক্ত কারেন্ট দেওয়া, ফলে তারটি পুড়ে নষ্ট হয়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-th-1',
      question: {
        en: 'Which instrument is most suitable for measuring radio frequency (RF) AC currents up to 50 MHz?',
        hi: '50 MHz तक की रेडियो फ्रीक्वेंसी (RF) AC धाराओं को मापने के लिए कौन सा उपकरण सबसे उपयुक्त है?',
        bn: '৫০ মেগাহার্টজ পর্যন্ত রেডিও ফ্রিকোয়েন্সি (RF) কারেন্ট পরিমাপের জন্য কোনটি সবচেয়ে উপযোগী?'
      },
      options: [
        { id: 'a', text: { en: 'PMMC Ammeter', hi: 'PMMC अमीटर', bn: 'পিএমএমসি অ্যামিটার' } },
        { id: 'b', text: { en: 'Moving Iron Ammeter', hi: 'मूविंग आयरन अमीटर', bn: 'মুভিং আয়রন অ্যামিটার' } },
        { id: 'c', text: { en: 'Thermocouple Instrument', hi: 'थर्मोकपल उपकरण', bn: 'থার্মোকাপল ইনস্ট্রুমেন্ট' } },
        { id: 'd', text: { en: 'Induction Ammeter', hi: 'इंडक्शन अमीटर', bn: 'ইন্ডাকশন অ্যামিটার' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'Thermocouple instruments have very low parasitic inductance and capacitance, making them ideal for RF current measurements up to 50 MHz.',
        hi: 'थर्मोकपल उपकरणों में परजीवी प्रेरकत्व और धारिता बहुत कम होती है, जिससे वे 50 MHz तक की RF धारा मापने के लिए आदर्श हैं।',
        bn: 'থার্মোকাপল মিটারে পরজীবী ইন্ডাকট্যান্স ও ক্যাপাসিট্যান্স না থাকায় এটি ৫০ মেগাহার্টজ পর্যন্ত আরএফ কারেন্ট নিখুঁত মাপে।'
      }
    },
    {
      id: 'mcq-ch3-th-2',
      question: {
        en: 'The deflecting torque in a hot-wire instrument is proportional to:',
        hi: 'हॉट-वायर उपकरण में विक्षेपक टॉर्क किसके समानुपाती होता है?',
        bn: 'হট-ওয়্যার ইনস্ট্রুমেন্টে ডিফ্লেক্টিং টর্ক কিসের সমানুপাতিক?'
      },
      options: [
        { id: 'a', text: { en: 'Current (I)', hi: 'धारा (I)', bn: 'কারেন্ট (I)' } },
        { id: 'b', text: { en: 'Current squared (I²)', hi: 'धारा का वर्ग (I²)', bn: 'কারেন্টের বর্গ (I²)' } },
        { id: 'c', text: { en: 'Square root of current (√I)', hi: 'धारा का वर्गमूल (√I)', bn: 'কারেন্টের বর্গমূল (√I)' } },
        { id: 'd', text: { en: 'Frequency (f)', hi: 'आवृत्ति (f)', bn: 'ফ্রিকোয়েন্সি (f)' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Joule heat generated is H = I² R t. The thermal expansion (sag) and pointer deflection are directly proportional to I².',
        hi: 'उत्पन्न जूल ऊष्मा H = I² R t होती है। तापीय प्रसार (sag) और विक्षेप सीधे I² के समानुपाती होते हैं।',
        bn: 'উৎপন্ন তাপ H = I² R t। প্রসারণ ও কাঁটার সরণ সরাসরি কারেন্টের বর্গের (I²) সমানুপাতিক।'
      }
    },
    {
      id: 'mcq-ch3-th-3',
      question: {
        en: 'Which thermo-electric effect is utilized in thermocouple instruments?',
        hi: 'थर्मोकपल उपकरणों में किस थर्मो-इलेक्ट्रिक प्रभाव का उपयोग किया जाता है?',
        bn: 'থার্মোকাপল যন্ত্রে কোন তাপ-বিদ্যুৎ ক্রিয়া ব্যবহার করা হয়?'
      },
      options: [
        { id: 'a', text: { en: 'Seebeck Effect', hi: 'सीबेक प्रभाव', bn: 'সিবেক প্রভাব (Seebeck Effect)' } },
        { id: 'b', text: { en: 'Hall Effect', hi: 'हॉल प्रभाव', bn: 'হল প্রভাব (Hall Effect)' } },
        { id: 'c', text: { en: 'Piezoelectric Effect', hi: 'पीजोइलेक्ट्रिक प्रभाव', bn: 'পিজোইলেকট্রিক প্রভাব' } },
        { id: 'd', text: { en: 'Faraday Effect', hi: 'फैराडे प्रभाव', bn: 'ফ্যারাডে প্রভাব' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'The Seebeck effect states that a temperature difference between two dissimilar conductor junctions generates a proportional DC thermo-EMF.',
        hi: 'सीबेक प्रभाव के अनुसार, दो असमान चालकों के जंक्शनों के बीच तापांतर से आनुपातिक DC थर्मो-ईएमएफ उत्पन्न होता है।',
        bn: 'সিবেক প্রভাব অনুসারে, দুটি ভিন্ন পরিবাহীর সংযোগস্থলে তাপমাত্রার পার্থক্য ডিসি ইএমএফ তৈরি করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-th-1',
      question: {
        en: 'Explain the working principle and construction of a Thermocouple-type instrument. Mention its key advantage over PMMC and MI instruments.',
        hi: 'थर्मोकपल-प्रकार के उपकरण की कार्यप्रणाली एवं संरचना समझाएं। PMMC और MI उपकरणों की तुलना में इसका मुख्य लाभ बताएं।',
        bn: 'থার্মোকাপল টাইপ যন্ত্রের গঠন ও কার্যপ্রণালী ব্যাখ্যা করো। পিএমএমসি ও এমআই যন্ত্রের তুলনায় এর প্রধান সুবিধা উল্লেখ করো।'
      },
      hint: {
        en: 'Focus on Seebeck effect, heater wire, DC voltage generation, and radio frequency (RF) capabilities.',
        hi: 'सीबेक प्रभाव, हीटर वायर, DC वोल्टेज उत्पादन और रेडियो फ्रीक्वेंसी (RF) क्षमता पर ध्यान केंद्रित करें।',
        bn: 'সিবেক প্রভাব, হিটার তার, ডিসি ইএমএফ তৈরি এবং আরএফ ফ্রিকোয়েন্সি ব্যবহারের সুবিধা লক্ষ্য করো।'
      },
      answerKey: {
        en: '1) Construction: Heater wire carrying current + Thermocouple junction (dissimilar metals) + PMMC meter.\n2) Principle: Current heats the wire; Seebeck effect creates DC EMF $E \\propto I^2_{rms}$; PMMC measures EMF.\n3) Advantage: Measures True RMS from DC up to High Radio Frequencies (50 MHz) where PMMC and MI fail due to inductive reactance.',
        hi: '1) संरचना: धारा ले जाने वाला हीटर वायर + थर्मोकपल जंक्शन + PMMC मीटर।\n2) सिद्धांत: धारा हीटर को गर्म करती है; सीबेक प्रभाव से DC ईएमएफ $E \\propto I^2_{rms}$ बनता है; PMMC इसे मापता है।\n3) लाभ: DC से लेकर 50 MHz की उच्च रेडियो फ्रीक्वेंसी तक True RMS मापता है।',
        bn: '১) গঠন: হিটার ওয়্যার + থার্মোকাপল জংশন + পিএমএমসি মিটার।\n২) কার্যনীতি: কারেন্টে হিটার উত্তপ্ত হয়; সিবেক ক্রিয়ায় ডিসি ইএমএফ $E \\propto I^2_{rms}$ তৈরি হয় যা পিএমএমসি মাপে।\n৩) সুবিধা: এসি ও ডিসির ট্রু আরএমএস মান ৫০ MHz ফ্রিকোয়েন্সি পর্যন্ত অত্যন্ত নির্ভুলভাবে মাপে।'
      }
    },
    {
      id: 'pq-ch3-th-2',
      question: {
        en: 'State two main advantages and two main limitations of thermal measuring instruments.',
        hi: 'तापीय मापन उपकरणों के दो मुख्य लाभ और दो मुख्य सीमाएं बताएं।',
        bn: 'থার্মাল পরিমাপক যন্ত্রের দুটি সুবিধা ও দুটি সীমাবদ্ধতা উল্লেখ করো।'
      },
      hint: {
        en: 'Think about True RMS, frequency response versus thermal inertia and overload capacity.',
        hi: 'True RMS, फ्रीक्वेंसी रिस्पॉन्स बनाम थर्मल इनर्शिया और ओवरलोड क्षमता पर विचार करें।',
        bn: 'ট্রু আরএমএস, ফ্রিকোয়েন্সি রেঞ্জ এবং ধীর গতির প্রতিক্রিয়া ও ওভারলোড ধারণক্ষমতার কথা ভাবো।'
      },
      answerKey: {
        en: 'Advantages:\n1) True RMS measurement independent of waveform.\n2) Outstanding high-frequency capability (RF up to 50 MHz).\n\nLimitations:\n1) High power consumption.\n2) Very low overload capacity (heater wire burns quickly on overcurrent).',
        hi: 'लाभ:\n1) तरंग-रूप से स्वतंत्र True RMS मापन।\n2) 50 MHz तक उत्कृष्ट उच्च-आवृत्ति क्षमता।\n\nसीमाएं:\n1) उच्च शक्ति खपत।\n2) बहुत कम ओवरलोड क्षमता (ओवरकरंट पर हीटर जल्दी जल जाता है)।',
        bn: 'সুবিধা:\n১) যেকোনো ওয়েভফর্মের জন্য ট্রু আরএমএস মান মাপে।\n২) ৫০ MHz পর্যন্ত রেডিও ফ্রিকোয়েন্সিতে দারুণ কাজ করে।\n\nসীমাবদ্ধতা:\n১) প্রচুর ক্ষমতা (Power) অপচয় হয়।\n২) অত্যন্ত কম ওভারলোড সহ্যক্ষমতা (তার কেটে যায়)।'
      }
    }
  ]
};

export const LESSON_AMMETER_VOLTMETER: Lesson = {
  id: 'lsn-ch3-ammeter-voltmeter',
  topicId: 'ch3-ammeter-voltmeter',
  order: 8,
  title: {
    en: 'Ammeter & Voltmeter',
    hi: 'अमीटर एवं वोल्टमीटर (Ammeter & Voltmeter)',
    bn: 'অ্যামিটার ও ভোল্টমিটার (Ammeter & Voltmeter)'
  },
  easyExplanation: {
    en: 'An Ammeter measures electric current and must be connected in SERIES so all current flows through it. It requires near-zero internal resistance so it does not block current! A Voltmeter measures potential difference and must be connected in PARALLEL across a circuit element. It requires near-infinite internal resistance so it does not steal current!',
    hi: 'अमीटर विद्युत धारा मापता है और इसे श्रेणीक्रम (SERIES) में जोड़ा जाना चाहिए ताकि पूरी धारा इसमें से गुजरे। इसका आंतरिक प्रतिरोध शून्य के पास होना चाहिए! वोल्टमीटर विभवांतर मापता है और इसे समांतर क्रम (PARALLEL) में जोड़ा जाता है। इसका आंतरिक प्रतिरोध अनंत के पास होना चाहिए ताकि यह धारा न चुराए!',
    bn: 'অ্যামিটার কারেন্ট মাপে এবং এটি শ্রেণিতে (SERIES) যুক্ত করতে হয় যাতে সব কারেন্ট এর ভেতর দিয়ে যায়। এর অভ্যন্তরীণ রেজিস্ট্যান্স শূন্যের কাছাকাছি হতে হয়! ভোল্টমিটার বিভব পার্থক্য মাপে এবং এটি সমান্তরালে (PARALLEL) যুক্ত করতে হয়। এর অভ্যন্তরীণ রেজিস্ট্যান্স অসীমের কাছাকাছি হতে হয়!'
  },
  detailedExplanation: {
    en: 'Ammeters and Voltmeters are the most fundamental instruments in electrical measurements. Understanding their proper connection, range extension, and loading errors is critical for electrical engineers.\n\n1. Ammeters:\n   • Connection: Always connected in SERIES with the load.\n   • Ideal Internal Resistance: $R_a = 0\\ \\Omega$.\n   • Practical Ammeter: Very small resistance ($R_a \\approx 0.01 - 1\\ \\Omega$).\n   • Range Extension (Shunt Resistor): A low resistance shunt ($R_{sh}$) is connected in PARALLEL with the basic PMMC meter movement ($R_m$).\n   • Shunt Formula: $R_{sh} = \\frac{R_m}{m - 1}$, where Multiplying Factor $m = \\frac{I}{I_m}$.\n   • Shunt Material: Manganin (low temperature coefficient of resistance).\n\n2. Voltmeters:\n   • Connection: Always connected in PARALLEL across the component.\n   • Ideal Internal Resistance: $R_v = \\infty\\ \\Omega$.\n   • Practical Voltmeter: High internal resistance ($R_v \\approx 100\\text{ k}\\Omega - 10\\text{ M}\\Omega$).\n   • Voltmeter Sensitivity ($S$): $S = \\frac{1}{I_{fsd}}\\ (\\Omega/\\text{V})$. Total resistance $R_v = S \\times V_{range}$.\n   • Range Extension (Multiplier Resistor): A high non-inductive resistance ($R_s$) is connected in SERIES with the meter movement ($R_m$).\n   • Multiplier Formula: $R_s = R_m (m - 1)$, where Multiplying Factor $m = \\frac{V}{V_m}$.\n\n3. Loading Effects:\n   • Voltmeter Loading Error: Connecting a low-sensitivity voltmeter across a high-resistance circuit draws current, reducing the parallel equivalent resistance and causing the meter to read LESS than the true voltage.\n   • Ammeter Loading Error: Adding an ammeter introduces series resistance $R_a$, slightly reducing circuit current.',
    hi: 'अमीटर और वोल्टमीटर विद्युत मापन के सबसे मौलिक उपकरण हैं।:\n\n1. अमीटर (Ammeter):\n   • संयोजन: श्रेणीक्रम (SERIES) में।\n   • आदर्श आंतरिक प्रतिरोध: $R_a = 0\\ \\Omega$।\n   • रेंज विस्तार (Shunt): बेसिक मीटर के समांतर क्रम में कम मान का शंट प्रतिरोध ($R_{sh}$) जोड़ा जाता है।\n   • शंट सूत्र: $R_{sh} = \\frac{R_m}{m - 1}$, जहाँ $m = \\frac{I}{I_m}$।\n   • पदार्थ: मैंगनिन (कम तापमान गुणांक)।\n\n2. वोल्टमीटर (Voltmeter):\n   • संयोजन: समांतर क्रम (PARALLEL) में।\n   • आदर्श आंतरिक प्रतिरोध: $R_v = \\infty\\ \\Omega$।\n   • संवेदनशीलता ($S$): $S = \\frac{1}{I_{fsd}}\\ (\\Omega/\\text{V})$।\n   • रेंज विस्तार (Multiplier): बेसिक मीटर के श्रेणीक्रम में उच्च मान का प्रतिरोध ($R_s$) जोड़ा जाता है।\n   • मल्टिप्लायर सूत्र: $R_s = R_m (m - 1)$, जहाँ $m = \\frac{V}{V_m}$।\n\n3. लोडिंग प्रभाव (Loading Effects):\n   • वोल्टमीटर लोडिंग त्रुटि: उच्च प्रतिरोध परिपथ में कम संवेदनशीलता वाला वोल्टमीटर जोड़ने पर परिपथ का प्रतिरोध घट जाता है और वोल्टमीटर वास्तविक से कम वोल्टेज दर्शाता है।',
    bn: 'অ্যামিটার ও ভোল্টমিটার বৈদ্যুতিক পরিমাপের মূল দুটি যন্ত্র।\n\n১. অ্যামিটার:\n   • সংযোগ: লোডের সাথে শ্রেণিতে (SERIES)।\n   • আদর্শ রেজিস্ট্যান্স: $R_a = 0\\ \\Omega$।\n   • রেঞ্জ বাড়ানো (Shunt): বেসিক মিটারের সমান্তরালে কম মানের শান্ট রেজিস্ট্যান্স ($R_{sh}$) যুক্ত করতে হয়।\n   • শান্ট সূত্র: $R_{sh} = \\frac{R_m}{m - 1}$, যেখানে মাল্টিপ্লাইং ফ্যাক্টর $m = \\frac{I}{I_m}$।\n\n২. ভোল্টমিটার:\n   • সংযোগ: উপাদানের সাথে সমান্তরালে (PARALLEL)।\n   • আদর্শ রেজিস্ট্যান্স: $R_v = \\infty\\ \\Omega$।\n   • সংবেদনশীলতা ($S$): $S = \\frac{1}{I_{fsd}}\\ (\\Omega/\\text{V})$।\n   • রেঞ্জ বাড়ানো (Multiplier): বেসিক মিটারের সাথে শ্রেণিতে উচ্চ মানের মাল্টিপ্লায়ার রেজিস্ট্যান্স ($R_s$) যুক্ত হয়।\n   • মাল্টিপ্লায়ার সূত্র: $R_s = R_m (m - 1)$, যেখানে $m = \\frac{V}{V_m}$।\n\n৩. লোডিং ইফেক্ট:\n   • ভোল্টমিটার লোডিং ত্রুটি: উচ্চ রেজিস্ট্যান্স সার্কিটে কম সেন্সিটিভিটির ভোল্টমিটার সমান্তরালে যুক্ত করলে ভোল্টমিটার কিছু কারেন্ট টেনে নেয়, ফলে প্রকৃত ভোল্টেজের চেয়ে কম পাঠ দেয়।'
  },
  formulas: [
    {
      symbol: 'R_{sh}',
      expression: 'R_{sh} = \\frac{R_m}{m - 1}, \\quad m = \\frac{I}{I_m}',
      description: {
        en: 'Ammeter Shunt Resistance (R_sh) = Meter resistance (R_m) / (Multiplying factor m - 1)',
        hi: 'अमीटर शंट प्रतिरोध (R_sh) = मीटर प्रतिरोध (R_m) / (मल्टिप्लायर m - 1)',
        bn: 'অ্যামিটার শান্ট রেজিস্ট্যান্স (R_sh) = মিটার রেজিস্ট্যান্স (R_m) / (গুণক ফ্যাক্টর m - 1)'
      }
    },
    {
      symbol: 'R_s',
      expression: 'R_s = R_m (m - 1), \\quad m = \\frac{V}{V_m}',
      description: {
        en: 'Voltmeter Multiplier Resistance (R_s) = Meter resistance (R_m) × (Multiplying factor m - 1)',
        hi: 'वोल्टमीटर मल्टिप्लायर प्रतिरोध (R_s) = मीटर प्रतिरोध (R_m) × (मल्टिप्लायर m - 1)',
        bn: 'ভোল্টমিটার মাল্টিপ্লায়ার রেজিস্ট্যান্স (R_s) = মিটার রেজিস্ট্যান্স (R_m) × (গুণক ফ্যাক্টর m - 1)'
      }
    },
    {
      symbol: 'S',
      expression: 'S = \\frac{1}{I_{fsd}} \\quad (\\Omega/\\text{V})',
      description: {
        en: 'Voltmeter Sensitivity (S) = Reciprocal of full-scale deflection current (I_fsd)',
        hi: 'वोल्टमीटर संवेदनशीलता (S) = पूर्ण-पैमाना धारा (I_fsd) का व्युत्क्रम',
        bn: 'ভোল্টমিটার সংবেদনশীলতা (S) = পূর্ণ স্কেল কারেন্টের (I_fsd) বিপরীত'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-ammeter-voltmeter-connection',
      title: {
        en: 'Ammeter and Voltmeter Circuit Connection',
        hi: 'अमीटर एवं वोल्टमीटर का परिपथ संयोजन',
        bn: 'অ্যামিটার ও ভোল্টমিটারের সার্কিট সংযোগ চিত্র'
      },
      caption: {
        en: 'Ammeter connected in series with load; Voltmeter connected in parallel across load.',
        hi: 'अमीटर लोड के साथ श्रेणीक्रम में; वोल्टमीटर लोड के समांतर क्रम में जुड़ा है।',
        bn: 'অ্যামিটার লোডের সাথে শ্রেণিতে; ভোল্টমিটার লোডের সমান্তরালে যুক্ত।'
      },
      svgType: 'instrument-ammeter-voltmeter'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-av-1',
      problem: {
        en: 'A PMMC meter movement has an internal resistance of 50 Ω and gives a full-scale deflection with 1 mA current. Calculate:\n1) Shunt resistance required to extend its range to 10 A ammeter.\n2) Multiplier resistance required to convert it into a 100 V voltmeter.',
        hi: 'एक PMMC मीटर मूवमेंट का आंतरिक प्रतिरोध 50 Ω है और यह 1 mA धारा पर पूर्ण-पैमाना विक्षेप देता है। गणना करें:\n1) इसे 10 A अमीटर बनाने के लिए शंट प्रतिरोध।\n2) इसे 100 V वोल्टमीटर बनाने के लिए मल्टिप्लायर प्रतिरोध।',
        bn: 'একটি পিএমএমসি মিটারের অভ্যন্তরীণ রেজিস্ট্যান্স ৫০ Ω এবং ১ mA কারেন্টে পূর্ণ স্কেল বিচ্যুতি দেয়। হিসাব করো:\n১) ১০ A অ্যামিটারে রূপান্তরের জন্য প্রয়োজনীয় শান্ট রেজিস্ট্যান্স।\n২) ১০০ V ভোল্টমিটারে রূপান্তরের জন্য প্রয়োজনীয় মাল্টিপ্লায়ার রেজিস্ট্যান্স।'
      },
      givenValues: {
        'Meter Resistance (Rm)': '50 Ω',
        'Full Scale Current (Im)': '1 mA = 0.001 A',
        'Target Ammeter Current (I)': '10 A',
        'Target Voltmeter Voltage (V)': '100 V'
      },
      solution: {
        en: '1) Ammeter Range Extension:\n   Multiplying factor m = I / Im = 10 A / 0.001 A = 10,000.\n   Shunt Resistance Rsh = Rm / (m - 1) = 50 / (10,000 - 1) = 50 / 9999 ≈ 0.0050005 Ω (5 mΩ).\n\n2) Voltmeter Range Extension:\n   Voltage across meter movement Vm = Im × Rm = 0.001 A × 50 Ω = 0.05 V.\n   Multiplying factor m = V / Vm = 100 V / 0.05 V = 2000.\n   Multiplier Resistance Rs = Rm × (m - 1) = 50 × (2000 - 1) = 50 × 1999 = 99,950 Ω (99.95 kΩ).',
        hi: '1) अमीटर रेंज विस्तार:\n   मल्टिप्लायर m = I / Im = 10 / 0.001 = 10,000।\n   शंट प्रतिरोध Rsh = Rm / (m - 1) = 50 / 9999 ≈ 0.0050005 Ω (5 mΩ)।\n\n2) वोल्टमीटर रेंज विस्तार:\n   मीटर का वोल्टेज Vm = Im × Rm = 0.001 × 50 = 0.05 V।\n   मल्टिप्लायर m = V / Vm = 100 / 0.05 = 2000।\n   मल्टिप्लायर प्रतिरोध Rs = Rm × (m - 1) = 50 × 1999 = 99,950 Ω (99.95 kΩ)।',
        bn: '১) অ্যামিটার রেঞ্জ বৃদ্ধি:\n   গুণক m = I / Im = ১০ / ০.০০১ = ১০,০০০।\n   শান্ট রেজিস্ট্যান্স Rsh = Rm / (m - ১) = ৫০ / ৯৯৯৯ ≈ ০.০০৫ Ω (৫ mΩ)।\n\n২) ভোল্টমিটার রেঞ্জ বৃদ্ধি:\n   মিটারের ভোল্টেজ Vm = Im × Rm = ০.০০১ × ৫০ = ০.০৫ V।\n   গুণক m = V / Vm = ১০০ / ০.০৫ = ২০০০।\n   মাল্টিপ্লায়ার রেজিস্ট্যান্স Rs = Rm × (m - ১) = ৫০ × ১৯৯৯ = ৯৯,৯৫০ Ω (৯৯.৯৫ kΩ)।'
      },
      finalAnswer: {
        en: 'Rsh = 5.0005 mΩ, Rs = 99.95 kΩ',
        hi: 'Rsh = 5.0005 mΩ, Rs = 99.95 kΩ',
        bn: 'Rsh = ৫.০০০৫ mΩ, Rs = ৯৯.৯৫ kΩ'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Panel meters on distribution switchboards measuring feeder current and busbar voltage.',
      'Bench multimeters in electronics laboratories.',
      'Current sensing in industrial motor control drives.'
    ],
    hi: [
      'वितरण स्विचबोर्ड पर पैनल मीटर जो फीडर करंट और बसबार वोल्टेज मापते हैं।',
      'इलेक्ट्रॉनिक्स प्रयोगशालाओं में बेंच मल्टीमीटर।',
      'औद्योगिक मोटर कंट्रोल ड्राइव में धारा सेंसर।'
    ],
    bn: [
      'সুইচবোর্ডের প্যানেল মিটার যা বাসবার ভোল্টেজ ও ফিডার কারেন্ট মাপে।',
      'ইলেকট্রনিক্স ল্যাবরেটরিতে ব্যবহৃত ডেঙ্ক বা বেঞ্চ মাল্টিমিটার।',
      'মোটর ড্রাইভ সার্কিটে কারেন্ট পরিমাপ ও মনিটরিং।'
    ]
  },
  importantPoints: {
    en: [
      'Ammeter = Low internal resistance ($R_a \\approx 0$), connected in SERIES.',
      'Voltmeter = High internal resistance ($R_v \\approx \\infty$), connected in PARALLEL.',
      'Shunt resistor $R_{sh} = \\frac{R_m}{m - 1}$ is connected in PARALLEL to make an Ammeter.',
      'Multiplier resistor $R_s = R_m (m - 1)$ is connected in SERIES to make a Voltmeter.',
      'Voltmeter Sensitivity $S = \\frac{1}{I_{fsd}}\\ (\\Omega/\\text{V})$. Higher sensitivity means less loading error!'
    ],
    hi: [
      'अमीटर = कम आंतरिक प्रतिरोध ($R_a \\approx 0$), श्रेणीक्रम (SERIES) में जुड़ा।',
      'वोल्टमीटर = उच्च आंतरिक प्रतिरोध ($R_v \\approx \\infty$), समांतर क्रम (PARALLEL) में जुड़ा।',
      'अमीटर बनाने के लिए शंट $R_{sh} = \\frac{R_m}{m - 1}$ समांतर क्रम में जुड़ता है।',
      'वोल्टमीटर बनाने के लिए मल्टिप्लायर $R_s = R_m (m - 1)$ श्रेणीक्रम में जुड़ता है।',
      'वोल्टमीटर संवेदनशीलता $S = \\frac{1}{I_{fsd}}\\ (\\Omega/\\text{V})$। अधिक संवेदनशीलता का अर्थ है कम लोडिंग त्रुटि!'
    ],
    bn: [
      'অ্যামিটার = অতি কম রেজিস্ট্যান্স ($R_a \\approx 0$), শ্রেণিতে (SERIES) যুক্ত।',
      'ভোল্টমিটার = অতি উচ্চ রেজিস্ট্যান্স ($R_v \\approx \\infty$), সমান্তরালে (PARALLEL) যুক্ত।',
      'অ্যামিটারের জন্য শান্ট $R_{sh} = \\frac{R_m}{m - 1}$ সমান্তরালে যুক্ত হয়।',
      'ভোল্টমিটারের জন্য মাল্টিপ্লায়ার $R_s = R_m (m - 1)$ শ্রেণিতে যুক্ত হয়।',
      'ভোল্টমিটার সেন্সিটিভিটি $S = \\frac{1}{I_{fsd}}\\ (\\Omega/\\text{V})$। সেন্সিটিভিটি বেশি হলে লোডিং ত্রুটি কম হয়!'
    ]
  },
  commonMistakes: {
    en: [
      'Connecting an ammeter in parallel across a voltage source: This causes a short circuit, blowing the meter fuse or damaging the movement!',
      'Connecting a voltmeter in series with a load: High resistance blocks current, preventing the load from operating.',
      'Swapping shunt and multiplier formulas: Remember shunt is PARALLEL (divide by m-1), multiplier is SERIES (multiply by m-1).'
    ],
    hi: [
      'अमीटर को वोल्टेज स्रोत के समांतर जोड़ना: इससे शॉर्ट सर्किट होता है, फ्यूज उड़ जाता है या मीटर जल जाता है!',
      'वोल्टमीटर को श्रेणीक्रम में जोड़ना: उच्च प्रतिरोध धारा को रोक देता है, जिससे लोड चालू नहीं होता।',
      'शंट और मल्टिप्लायर के सूत्रों को बदलना: याद रखें शंट समांतर (m-1 से भाग) और मल्टिप्लायर श्रेणी (m-1 से गुणा) होता है।'
    ],
    bn: [
      'অ্যামিটারকে সমান্তরালে ভোল্টেজ সোর্সে যুক্ত করা: শর্ট সার্কিট হয়ে ফিউজ পুড়ে যায় বা মিটার নষ্ট হয়!',
      'ভোল্টমিটারকে লোডের সাথে শ্রেণিতে যুক্ত করা: উচ্চ রেজিস্ট্যান্সের কারণে সার্কিটে কারেন্ট বন্ধ হয়ে যায়।',
      'শান্ট ও মাল্টিপ্লায়ারের সূত্র গুলিয়ে ফেলা: মনে রেখো শান্ট সমান্তরালে (ভাগ) আর মাল্টিপ্লায়ার শ্রেণিতে (গুণ)।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-av-1',
      question: {
        en: 'What happens if an ammeter is accidentally connected in parallel across a 230 V AC supply?',
        hi: 'यदि एक अमीटर गलती से 230 V AC सप्लाई के समांतर जोड़ दिया जाए तो क्या होगा?',
        bn: 'একটি অ্যামিটার ভুলবশত ২৩০ V এসি সাপ্লাইয়ের সমান্তরালে যুক্ত করলে কী ঘটবে?'
      },
      options: [
        { id: 'a', text: { en: 'It will measure current normally', hi: 'यह सामान्य रूप से धारा मापेगा', bn: 'এটি স্বাভাবিক কারেন্ট মাপবে' } },
        { id: 'b', text: { en: 'Very heavy short-circuit current flows, blowing fuse or damaging meter', hi: 'अत्यधिक शॉर्ट-सर्किट धारा बहेगी, फ्यूज उड़ जाएगा या मीटर जल जाएगा', bn: 'প্রচুর শর্ট-সার্কিট কারেন্ট যাবে, ফিউজ পুড়ে যাবে বা মিটার নষ্ট হবে' } },
        { id: 'c', text: { en: 'It acts as an open circuit', hi: 'यह ओपन सर्किट की तरह कार्य करता है', bn: 'এটি ওপেন সার্কিট হিসেবে থাকবে' } },
        { id: 'd', text: { en: 'The reading will be zero', hi: 'पाठ्यांक शून्य होगा', bn: 'পাঠ শূন্য দেখাবে' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Ammeters have very low internal resistance (~0.01 Ω). Parallel connection across supply draws huge short-circuit current (I = V/R), causing instant fuse blowout or coil burnout.',
        hi: 'अमीटर का आंतरिक प्रतिरोध बहुत कम (~0.01 Ω) होता है। समांतर जोड़ने पर विशाल शॉर्ट-सर्किट धारा बहती है।',
        bn: 'অ্যামিটারের রেজিস্ট্যান্স খুব কম (~০.০১ Ω)। সমান্তরালে যুক্ত করলে বিশাল শর্ট-সার্কিট কারেন্ট প্রবাহিত হয়।'
      }
    },
    {
      id: 'mcq-ch3-av-2',
      question: {
        en: 'To extend the range of a DC ammeter, we connect:',
        hi: 'DC अमीटर की सीमा (Range) बढ़ाने के लिए हम क्या जोड़ते हैं?',
        bn: 'ডিসি অ্যামিটারের রেঞ্জ বাড়াতে কী যুক্ত করা হয়?'
      },
      options: [
        { id: 'a', text: { en: 'High resistance in series', hi: 'श्रेणीक्रम में उच्च प्रतिरोध', bn: 'শ্রেণিতে উচ্চ রেজিস্ট্যান্স' } },
        { id: 'b', text: { en: 'Low resistance in parallel (Shunt)', hi: 'समांतर क्रम में निम्न प्रतिरोध (शंट)', bn: 'সমান্তরালে নিম্ন রেজিস্ট্যান্স (শান্ট)' } },
        { id: 'c', text: { en: 'High inductance in series', hi: 'श्रेणीक्रम में उच्च प्रेरकत्व', bn: 'শ্রেণিতে উচ্চ ইন্ডাকট্যান্স' } },
        { id: 'd', text: { en: 'Capacitor in parallel', hi: 'समांतर क्रम में संधारित्र', bn: 'সমান্তরালে ক্যাপাসিটর' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'A low resistance shunt resistor ($R_{sh} = R_m / (m - 1)$) in parallel bypasses most of the line current around the delicate meter movement.',
        hi: 'समांतर क्रम में जुड़ा निम्न प्रतिरोध शंट ($R_{sh} = R_m / (m - 1)$) अधिकांश धारा को मीटर के बगल से बाईपास कर देता है।',
        bn: 'সমান্তরালে যুক্ত নিম্ন মানের শান্ট রেজিস্ট্যান্স ($R_{sh} = R_m / (m - 1)$) সিংহভাগ কারেন্ট মিটারকে না ছুঁয়ে বাইপাস করে।'
      }
    },
    {
      id: 'mcq-ch3-av-3',
      question: {
        en: 'A voltmeter with sensitivity of 10 kΩ/V is set to 100 V range. Its total internal resistance is:',
        hi: '10 kΩ/V संवेदनशीलता वाला एक वोल्टमीटर 100 V रेंज पर सेट है। इसका कुल आंतरिक प्रतिरोध क्या है?',
        bn: '১০ kΩ/V সেন্সিটিভিটির একটি ভোল্টমিটার ১০০ V রেঞ্জে রাখা আছে। এর মোট অভ্যন্তরীণ রেজিস্ট্যান্স কত?'
      },
      options: [
        { id: 'a', text: { en: '10 kΩ', hi: '10 kΩ', bn: '১০ kΩ' } },
        { id: 'b', text: { en: '100 kΩ', hi: '100 kΩ', bn: '১০০ kΩ' } },
        { id: 'c', text: { en: '1000 kΩ (1 MΩ)', hi: '1000 kΩ (1 MΩ)', bn: '১০০০ kΩ (১ MΩ)' } },
        { id: 'd', text: { en: '10 MΩ', hi: '10 MΩ', bn: '১০ MΩ' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'Total internal resistance $R_v = S \\times V_{range} = 10\\text{ k}\\Omega/\\text{V} \\times 100\\text{ V} = 1000\\text{ k}\\Omega = 1\\text{ M}\\Omega$.',
        hi: 'कुल आंतरिक प्रतिरोध $R_v = S \\times V_{range} = 10\\text{ k}\\Omega/\\text{V} \\times 100\\text{ V} = 1000\\text{ k}\\Omega = 1\\text{ M}\\Omega$।',
        bn: 'মোট অভ্যন্তরীণ রেজিস্ট্যান্স $R_v = S \\times V_{range} = ১০\\text{ k}\\Omega/\\text{V} \\times ১০০\\text{ V} = ১০০০\\text{ k}\\Omega = ১\\text{ M}\\Omega$।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-av-1',
      question: {
        en: 'Explain why an ideal ammeter should have zero internal resistance and an ideal voltmeter should have infinite internal resistance.',
        hi: 'समझाएं कि एक आदर्श अमीटर का आंतरिक प्रतिरोध शून्य और एक आदर्श वोल्टमीटर का आंतरिक प्रतिरोध अनंत क्यों होना चाहिए।',
        bn: 'ব্যাখ্যা করো কেন একটি আদর্শ অ্যামিটারের অভ্যন্তরীণ রেজিস্ট্যান্স শূন্য এবং আদর্শ ভোল্টমিটারের অভ্যন্তরীণ রেজিস্ট্যান্স অসীম হওয়া উচিত।'
      },
      hint: {
        en: 'Consider series loading for ammeter ($V_{drop} = I \\cdot R_a$) and parallel current division for voltmeter ($I_{drawn} = V / R_v$).',
        hi: 'अमीटर के श्रेणीक्रम लोडिंग ($V_{drop} = I \\cdot R_a$) और वोल्टमीटर के समांतर करंट विभाजन ($I_{drawn} = V / R_v$) पर विचार करें।',
        bn: 'অ্যামিটারের ভোল্টেজ ড্রপ এবং ভোল্টমিটার কতটুকু কারেন্ট টেনে নেয় তার ওপর চিন্তা করো।'
      },
      answerKey: {
        en: '1) Ammeter (Series): $R_a = 0$ prevents voltage drop $I \\cdot R_a$ across the meter, ensuring original circuit current remains unchanged.\n2) Voltmeter (Parallel): $R_v = \\infty$ draws zero current ($I_v = V / \\infty = 0$), preventing loading error and leaving original circuit currents intact.',
        hi: '1) अमीटर (श्रेणी): $R_a = 0$ मीटर पर वोल्टेज ड्रॉप $I \\cdot R_a$ को रोकता है जिससे परिपथ की धारा नहीं बदलती।\n2) वोल्टमीटर (समांतर): $R_v = \\infty$ मीटर द्वारा धारा खींचने ($I_v = 0$) को रोकता है जिससे परिपथ की धाराएं प्रभावित नहीं होतीं।',
        bn: '১) অ্যামিটার (শ্রেণি): $R_a = 0$ হলে মিটারে কোনো ভোল্টেজ ড্রপ হয় না, ফলে সার্কিটের আসল কারেন্ট অপরিবর্তित থাকে।\n২) ভোল্টমিটার (সমান্তরাল): $R_v = \\infty$ হলে ভোল্টমিটার সার্কিট থেকে বাড়তি কারেন্ট টানে না, ফলে ভোল্টেজ পাঠ একদম সঠিক থাকে।'
      }
    },
    {
      id: 'pq-ch3-av-2',
      question: {
        en: 'Define Voltmeter Sensitivity. What is its unit and why is high sensitivity desirable?',
        hi: 'वोल्टमीटर संवेदनशीलता की परिभाषा दें। इसकी इकाई क्या है और उच्च संवेदनशीलता क्यों वांछनीय है?',
        bn: 'ভোল্টমিটার সংवेदनশীলতার সংজ্ঞা দাও। এর একক কী এবং উচ্চ সংवेदनশীলতা কেন পছন্দনীয়?'
      },
      hint: {
        en: 'Sensitivity $S = 1/I_{fsd}$ in $\\Omega/\\text{V}$. Higher $S$ means higher total meter resistance.',
        hi: 'संवेदनशीलता $S = 1/I_{fsd}$ ($\\Omega/\\text{V}$)। अधिक $S$ का अर्थ उच्च कुल मीटर प्रतिरोध है।',
        bn: 'সেন্সিটিভিটি $S = ১/I_{fsd}$ (একক $\\Omega/\\text{V}$)। সেন্সিটিভিটি বেশি হলে মিটারের রেজিস্ট্যান্স বেশি হয়।'
      },
      answerKey: {
        en: '1) Definition: Voltmeter sensitivity ($S$) is the reciprocal of the full-scale deflection current ($I_{fsd}$). Formula: $S = \\frac{1}{I_{fsd}}$.\n2) Unit: Ohms per Volt ($\\Omega/\\text{V}$).\n3) Importance: Higher sensitivity means the meter has higher total resistance ($R_v = S \\times V_{range}$), drawing negligible current from the circuit and minimizing voltmeter loading error in high-resistance circuits.',
        hi: '1) परिभाषा: वोल्टमीटर संवेदनशीलता ($S$) पूर्ण-पैमाना धारा ($I_{fsd}$) का व्युत्क्रम है। $S = \\frac{1}{I_{fsd}}$।\n2) इकाई: ओहम प्रति वोल्ट ($\\Omega/\\text{V}$)।\n3) महत्व: उच्च संवेदनशीलता का अर्थ है अधिक कुल प्रतिरोध, जिससे लोडिंग त्रुटि बहुत कम होती है।',
        bn: '১) সংজ্ঞা: পূর্ণ স্কেল কারেন্টের ($I_{fsd}$) বিপরীত মানকে সেন্সিটিভিটি বলে। $S = \\frac{1}{I_{fsd}}$।\n২) একক: ওহম প্রতি ভোল্ট ($\\Omega/\\text{V}$)।\n৩) গুরুত্ব: সেন্সিটিভিটি বেশি হলে মিটারের রেজিস্ট্যান্স বেশি হয়, ফলে সার্কিট থেকে কারেন্ট না টেনে লোডিং ত্রুটি দূর করে।'
      }
    }
  ]
};

export const LESSON_DIGITAL_INSTRUMENTS: Lesson = {
  id: 'lsn-ch3-digital-instruments',
  topicId: 'ch3-digital-instruments',
  order: 11,
  title: {
    en: 'Digital Measuring Instruments',
    hi: 'डिजिटल मापन यंत्र (Digital Measuring Instruments)',
    bn: 'ডিজিটাল পরিমাপক যন্ত্র (Digital Measuring Instruments)'
  },
  easyExplanation: {
    en: 'Digital Measuring Instruments (like Digital Multimeters and Digital Voltmeters) convert continuous analog signals into discrete numerical values displayed on an LCD or LED screen. They use Analog-to-Digital Converters (ADCs) to achieve extreme accuracy, high input impedance (>10 MΩ), no parallax error, and automatic polarity and range selection!',
    hi: 'डिजिटल मापन उपकरण (जैसे डिजिटल मल्टीमीटर और डिजिटल वोल्टमीटर) निरंतर एनालॉग संकेतों को एलसीडी या एलईडी स्क्रीन पर प्रदर्शित होने वाले डिजिटल मानों में बदलते हैं। वे अत्यधिक सटीकता, उच्च इनपुट प्रतिरोध (>10 MΩ), शून्य लंबन त्रुटि (Parallax Error) और स्वचालित रेंज चयन प्राप्त करने के लिए एनालॉग-टू-डिजिटल कन्वर्टर्स (ADCs) का उपयोग करते हैं!',
    bn: 'ডিজিটাল পরিমাপক যন্ত্র (যেমন ডিজিটাল মাল্টিমিটার ও ডিজিটাল ভোল্টমিটার) এনালগ সিগন্যালকে ডিজিটাল সংখ্যার মান হিসেবে এলসিডি বা এলইডি পর্দায় দেখায়। অত্যন্ত নিখুঁত পাঠ, উচ্চ ইনপুট রেজিস্ট্যান্স (>10 MΩ), প্যারালাক্স ত্রুটিহীনতা ও অটো-রেঞ্জ সুবিধার জন্য এতে এনালগ-টু-ডিজিটাল কনভার্টার (ADC) ব্যবহার করা হয়!'
  },
  detailedExplanation: {
    en: 'Digital instruments have largely replaced conventional analog pointer meters in modern electrical engineering testing.\n\n1. Core Architecture of a Digital Voltmeter (DVM):\n   Analog Input Signal -> Attenuator / Amplifier -> Analog-to-Digital Converter (ADC) -> Counter & Latch Logic -> Digital Display Driver -> LCD / LED Screen.\n\n2. Key Types of ADC Architectures:\n   a) Dual-Slope Integrating ADC:\n      • Working: Input voltage charges an integrator capacitor for a fixed time $T_1$. Then a reference voltage $-V_{ref}$ discharges the capacitor to zero in time $T_2$.\n      • Equation: $V_{in} = V_{ref} \\times \\frac{T_2}{T_1}$.\n      • Advantage: Extremely high accuracy, excellent noise rejection (cancels line frequency noise 50/60 Hz), ideal for DMMs.\n   b) Successive Approximation Register (SAR) ADC:\n      • Working: Uses a binary search algorithm (MSB to LSB) via a DAC and comparator to quickly converge on the input voltage.\n      • Advantage: Very fast conversion speed, suitable for data acquisition systems.\n   c) Flash (Direct Conversion) ADC:\n      • Working: Uses $2^N - 1$ comparators to convert analog signal instantly in one clock cycle.\n      • Advantage: Ultra-fast (Gigasamples/sec), used in high-speed digital oscilloscopes.\n\n3. Display Resolution & Digits Notation:\n   • $3\\frac{1}{2}$ Digit Display: 3 full digits (0 to 9) and 1 half digit (0 or 1). Max reading: $1999$. Total counts: 2000. Least Count = Full Range / 2000.\n   • $4\\frac{1}{2}$ Digit Display: Max reading: $19999$. Total counts: 20,000.\n\n4. Advantages over Analog Meters:\n   • High Input Impedance ($> 10\\text{ M}\\Omega$): Eliminates loading errors.\n   • No Parallax / Reading Error: Clear numerical display.\n   • Auto-ranging, Auto-zeroing, Auto-polarity identification.',
    hi: 'डिजिटल उपकरणों की वास्तुकला एवं प्रकार:\n\n1. डिजिटल वोल्टमीटर (DVM) की मूल संरचना:\n   एनालॉग इनपुट -> एटेन्यूएटर/एम्पलीफायर -> एनालॉग-टू-डिजिटल कन्वर्टर (ADC) -> काउंटर -> एलसीडी/एलईडी डिस्प्ले।\n\n2. ADC के मुख्य प्रकार:\n   a) डुअल-स्लोप इंटीग्रेटिंग ADC (Dual-Slope Integrating ADC):\n      • कार्यप्रणाली: इनपुट वोल्टेज निश्चित समय $T_1$ के लिए कैपेसिटर को चार्ज करता है। फिर संदर्भ वोल्टेज $-V_{ref}$ समय $T_2$ में इसे डिस्चार्ज करता है।\n      • सूत्र: $V_{in} = V_{ref} \\times \\frac{T_2}{T_1}$।\n      • लाभ: उच्च सटीकता, शोर (50 Hz Noise) को खारिज करने में उत्कृष्ट।\n   b) सक्सेसिव एप्रोक्सीमेशन (SAR) ADC: बाइनरी खोज एल्गोरिदम, तेज गति।\n   c) फ्लैश (Flash) ADC: अति-तेज रूपांतरण, डिजिटल ऑसिलोस्कोप में प्रयुक्त।\n\n3. डिस्प्ले रेजोल्यूशन ($3\\frac{1}{2}$ डिजिट):\n   • $3\\frac{1}{2}$ डिजिट डिस्प्ले: 3 पूर्ण अंक (0-9) और 1 आधा अंक (0 या 1)। अधिकतम पाठ्यांक: $1999$ (कुल 2000 काउंट्स)।',
    bn: 'ডিজিটাল পরিমাপক যন্ত্রের মূল গঠন ও কার্যাবলি:\n\n১. ডিজিটাল ভোল্টমিটারের (DVM) গঠন:\n   এনালগ ইনপুট -> সিগন্যাল কন্ডিশনিং -> এনালগ-টু-ডিজিটাল কনভার্টার (ADC) -> ডিজিটাল কাউন্টার -> ডিসপ্লে স্ক্রিন।\n\n২. ব্যবহৃত প্রধান এডিবি (ADC) প্রযুক্তি:\n   ক) ডুয়াল-সলোপ ইন্টিগ্রেটিং ADC:\n      • পদ্ধতি: ইনপুট ভোল্টেজ নির্দিষ্ট সময় $T_1$ ধরে ক্যাপাসিটর চার্জ করে। তারপর রেফারেন্স ভোল্টেজ $-V_{ref}$ প্রয়োগ করে $T_2$ সময়ে ডিসচার্জ করা হয়।\n      • সমীকরণ: $V_{in} = V_{ref} \\times \\frac{T_2}{T_1}$।\n      • সুবিধা: উচ্চ নিখুঁততা ও নয়েজ কমানোর চমৎকার ক্ষমতা।\n   খ) সাকসেসিভ অ্যাপ্রক্সিমেশন (SAR) ADC: দ্রুত বাইনারি সার্চ алгоритম।\n   গ) ফ্ল্যাশ (Flash) ADC: ১ ক্লক সাইকেলে রূপান্তর, অসিলোস্কোপে ব্যবহৃত।\n\n৩. ডিসপ্লে ডিজিট ধারণা ($3\\frac{1}{2}$ ডিজিট):\n   • $3\\frac{1}{2}$ ডিজিট ডিসপ্লে: ৩ টি পুরো অঙ্ক (০-৯) এবং ১ টি হাফ ডিজিট (০ বা ১)। সর্বোচ্চ মান: $১৯৯৯$ (মোট ২০০০ কাউন্ট)।'
  },
  formulas: [
    {
      symbol: 'V_{in}',
      expression: 'V_{in} = V_{ref} \\times \\frac{T_2}{T_1}',
      description: {
        en: 'Dual-Slope ADC Input Voltage = Reference Voltage × (Discharge time T2 / Charge time T1)',
        hi: 'डुअल-स्लोप ADC इनपुट वोल्टेज = संदर्भ वोल्टेज × (डिस्चार्ज समय T2 / चार्ज समय T1)',
        bn: 'ডুয়াল-সলোপ ADC ইনপুট ভোল্টেজ = রেফারেন্স ভোল্টেজ × (ডিসচার্জ সময় T2 / চার্জ সময় T1)'
      }
    },
    {
      symbol: '\\text{Resolution}',
      expression: '\\text{Resolution} = \\frac{1}{10^N} = \\frac{\\text{Full Scale Range}}{\\text{Total Counts}}',
      description: {
        en: 'Resolution of Digital Display = 1 / Total Counts (e.g. 1 / 2000 for 3.5 digit meter)',
        hi: 'डिजिटल डिस्प्ले का रेजोल्यूशन = 1 / कुल काउंट्स (जैसे 3.5 डिजिट के लिए 1 / 2000)',
        bn: 'ডিজিটাল ডিসপ্লের রেজোলিউশন = ১ / মোট কাউন্টস (যেমন ৩.৫ ডিজিটের ক্ষেত্রে ১ / ২০০০)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-digital-dvm-block',
      title: {
        en: 'Block Diagram of a Dual-Slope Digital Voltmeter (DVM)',
        hi: 'डुअल-स्लोप डिजिटल वोल्टमीटर (DVM) का ब्लॉक आरेख',
        bn: 'ডুয়াল-সলোপ ডিজিটাল ভোল্টমিটারের ব্লক চিত্র'
      },
      caption: {
        en: 'Signal conditioning -> Integrator & Comparator -> Gate Logic & Counter -> Digital Display.',
        hi: 'सिग्नल कंडीशनिंग -> इंटीग्रेटर एवं कंपैरेटर -> गेट लॉजिक एवं काउंटर -> डिजिटल डिस्प्ले।',
        bn: 'সিগন্যাল কন্ডিশনিং -> ইন্টিগ্রেটর ও কম্পারেটর -> কাউন্টার -> ডিজিটাল ডিসপ্লে।'
      },
      svgType: 'instrument-digital-dvm'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-dm-1',
      problem: {
        en: 'A $3\\frac{1}{2}$ digit digital multimeter is used to measure voltage on a 200 V range. Calculate:\n1) Maximum readable voltage display on this range.\n2) Resolution (least count) of the meter on this 200 V range.',
        hi: 'एक $3\\frac{1}{2}$ डिजिट डिजिटल मल्टीमीटर का उपयोग 200 V रेंज पर वोल्टेज मापने के लिए किया जाता है। गणना करें:\n1) इस रेंज पर अधिकतम पठनीय वोल्टेज प्रदर्शन।\n2) इस 200 V रेंज पर मीटर का रेजोल्यूशन (अल्पतमांक)।',
        bn: 'একটি $3\\frac{1}{2}$ ডিজিটের ডিজিটাল মাল্টিমিটার ২০০ V রেঞ্জে ভোল্টেজ পরিমাপ করছে। বের করো:\n১) এই রেঞ্জে ডিসপ্লেতে প্রদর্শিত সর্বোচ্চ মান।\n২) ২০০ V রেঞ্জে মিটারটির রেজোলিউশন বা লঘিষ্ঠ গণনা।'
      },
      givenValues: {
        'Display Digits': '3.5 digits (Max Count = 1999)',
        'Full Scale Range': '200 V'
      },
      solution: {
        en: '1) A 3½ digit display has 3 full digits (0 to 9) and 1 half digit (0 or 1).\n   Maximum display reading on 200 V range = 199.9 V.\n\n2) Total number of counts = 2000 (from 0000 to 1999).\n   Resolution = Full Scale Range / Total Counts = 200 V / 2000 = 0.1 V (100 mV).',
        hi: '1) $3\\frac{1}{2}$ डिजिट डिस्प्ले में 3 पूर्ण अंक और 1 आधा अंक (0 या 1) होता है।\n   200 V रेंज पर अधिकतम डिस्प्ले पाठ्यांक = 199.9 V।\n\n2) कुल काउंट्स = 2000।\n   रेजोल्यूशन = 200 V / 2000 = 0.1 V (100 mV)।',
        bn: '১) ৩.৫ ডিজিট মিটারে ৩ টি পূর্ণ ডিজিট ও ১ টি হাফ ডিজিট (০ বা ১) থাকে।\n   ২০০ V রেঞ্জে সর্বোচ্চ প্রদর্শন মান = ১৯৯.৯ V।\n\n২) মোট কাউন্টস সংখ্যা = ২০০০।\n   রেজোলিউশন = ২০০ V / ২০০০ = ০.১ V (১০০ mV)।'
      },
      finalAnswer: {
        en: 'Max Display = 199.9 V, Resolution = 0.1 V (100 mV)',
        hi: 'अधिकतम डिस्प्ले = 199.9 V, रेजोल्यूशन = 0.1 V (100 mV)',
        bn: 'সর্বোচ্চ পাঠ = ১৯৯.৯ V, রেজোলিউশন = ০.১ V (১০০ mV)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Digital Multimeters (DMMs) for troubleshooting electronic circuit boards and power supplies.',
      'Data acquisition systems (DAQ) in automated factory testing.',
      'Digital panel meters in solar inverters and battery management systems (BMS).'
    ],
    hi: [
      'इलेक्ट्रॉनिक सर्किट बोर्ड और पावर सप्लाई की ट्रबलशूटिंग के लिए डिजिटल मल्टीमीटर।',
      'स्वचालित कारखाने परीक्षण में डेटा अधिग्रहण प्रणाली (DAQ)।',
      'सोलर इनवर्टर और बैटरी प्रबंधन प्रणाली (BMS) में डिजिटल पैनल मीटर।'
    ],
    bn: [
      'ইলেকট্রনিক্স সার্কিট বোর্ড ও পাওয়ার সাপ্লাই ট্রাবলশুটিংয়ে ডিজিটাল মাল্টিমিটার।',
      'স্বয়ংক্রিয় কারখানার পরীক্ষায় ডাটা এক্যুইজিশন সিস্টেম (DAQ)।',
      'সোলার ইনভার্টার ও ব্যাটারি ম্যানেজমেন্ট সিস্টেমে (BMS) প্যানেল মিটার।'
    ]
  },
  importantPoints: {
    en: [
      'Digital instruments use ADCs to convert analog voltage into digital digits.',
      'Dual-Slope ADC is most popular in DMMs due to high accuracy and 50 Hz line noise rejection.',
      'Input impedance of digital voltmeters is extremely high ($> 10\\text{ M}\\Omega$), giving ZERO loading error.',
      '$3\\frac{1}{2}$ digit display = 2000 counts (0 to 1999).',
      '$4\\frac{1}{2}$ digit display = 20,000 counts (0 to 19999).',
      'Flash ADC is the fastest ADC, used in Digital Storage Oscilloscopes (DSOs).'
    ],
    hi: [
      'डिजिटल उपकरण एनालॉग सिग्नल को डिजिटल अंकों में बदलने के लिए ADC का उपयोग करते हैं।',
      'उच्च सटीकता और 50 Hz शोर दमन के कारण डुअल-स्लोप ADC DMM में सबसे लोकप्रिय है।',
      'डिजिटल वोल्टमीटर का इनपुट प्रतिरोध अत्यधिक उच्च ($> 10\\text{ M}\\Omega$) होता है, जिससे शून्य लोडिंग त्रुटि होती है।',
      '$3\\frac{1}{2}$ डिजिट डिस्प्ले = 2000 काउंट्स (0 से 1999)।',
      'फ्लैश (Flash) ADC सबसे तेज ADC है जिसका उपयोग DSO में किया जाता है।'
    ],
    bn: [
      'ডিজিটাল মিটার এডিবি (ADC) ব্যবহার করে এনালগ মানকে ডিসপ্লেতে রূপান্তর করে।',
      'উচ্চ নিখুঁততা ও নয়েজ বাতিলের কারণে ডুয়াল-সলোপ ADC মাল্টিমিটারে সেরা।',
      'ডিজিটাল ভোল্টমিটারের ইনপুট রেজিস্ট্যান্স অতি উচ্চ ($> 10\\text{ M}\\Omega$), ফলে লোডিং ত্রুটি হয় না।',
      '৩.৫ ডিজিট ডিসপ্লে = ২০০০ কাউন্টস (০ থেকে ১৯৯৯)।',
      'ফ্ল্যাশ (Flash) ADC সবচেয়ে দ্রুতগতির, যা ডিজিটাল অসিলোস্কোপে ব্যবহার করা হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Misinterpreting 3.5 digit resolution: The "half" digit only displays 0 or 1 (it cannot display digits 2 through 9).',
      'Assuming all DMMs measure True RMS: Basic DMMs measure average value and scale by 1.11 for sine waves only. Only True RMS DMMs measure distorted waveforms accurately!',
      'Measuring resistance on a live powered circuit, which burns the internal DMM fuse.'
    ],
    hi: [
      '3.5 डिजिट रेजोल्यूशन का गलत अर्थ निकालना: "आधा" अंक केवल 0 या 1 प्रदर्शित करता है।',
      'यह मानना कि सभी DMM True RMS मापते हैं: बुनियादी DMM केवल साइन तरंगों के लिए औसत मान मापते हैं। केवल True RMS DMM विकृत तरंगों को सटीक रूप से मापते हैं!',
      'लाइव संचालित परिपथ पर प्रतिरोध मापना, जिससे DMM का फ्यूज उड़ जाता है।'
    ],
    bn: [
      '৩.৫ ডিজিট রেজোলিউশন ভুল বোঝা: "হাফ" ডিজিট কেবল ০ বা ১ দেখাতে পারে।',
      'সব মাল্টিমিটার ট্রু আরএমএস মাপে ভেবে ভুল করা: সাধারণ মাল্টিমিটার শুধু সাইন ওয়েভের গড় মান মাপে। কেবল ট্রু আরএমএস মাল্টিমিটার যেকোনো ওয়েভফর্ম নিখুঁত মাপে।',
      'পাওয়ার চালু থাকা অবস্থায় রেজিস্ট্যান্স মাপা, যার ফলে মিটারের ভেতর ফিউজ পুড়ে যায়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-dm-1',
      question: {
        en: 'Which type of ADC is widely used in high-precision Digital Multimeters due to its excellent line-frequency noise rejection?',
        hi: 'उत्कृष्ट लाइन-आवृत्ति शोर अस्वीकृति के कारण उच्च-सटीकता वाले डिजिटल मल्टीमीटर में किस प्रकार का ADC व्यापक रूप से उपयोग किया जाता है?',
        bn: 'উচ্চ নিখুঁততা ও ফ্রিকোয়েন্সি নয়েজ বাধার সুবিধার জন্য ডিজিটাল মাল্টিমিটারে কোন ADC ব্যাপকভাবে ব্যবহৃত হয়?'
      },
      options: [
        { id: 'a', text: { en: 'Flash ADC', hi: 'फ्लैश ADC', bn: 'ফ্ল্যাশ ADC' } },
        { id: 'b', text: { en: 'Successive Approximation ADC', hi: 'सक्सेसिव एप्रोक्सीमेशन ADC', bn: 'সাকসেসিভ অ্যাপ্রক্সিমেশন ADC' } },
        { id: 'c', text: { en: 'Dual-Slope Integrating ADC', hi: 'डुअल-स्लोप इंटीग्रेटिंग ADC', bn: 'ডুয়াল-সলোপ ইন্টিগ্রেটিং ADC' } },
        { id: 'd', text: { en: 'Counter type ADC', hi: 'काउंटर प्रकार ADC', bn: 'কাউন্টার টাইপ ADC' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'Dual-Slope Integrating ADC integrates signal over fixed clock cycles, making its reading immune to 50 Hz / 60 Hz power line noise ripples.',
        hi: 'डुअल-स्लोप ADC निश्चित क्लॉक साइकिल में एकीकृत करता है, जिससे इसका पाठ्यांक 50 Hz/60 Hz शोर रिपल्स से अप्रभावित रहता है।',
        bn: 'ডুয়াল-সলোপ ইন্টিগ্রেটিং ADC নির্দিষ্ট সময়ের ইন্টিগ্রেশনের মাধ্যমে ৫০ Hz পাওয়ার লাইনের নয়েজ দূর করে।'
      }
    },
    {
      id: 'mcq-ch3-dm-2',
      question: {
        en: 'What is the maximum display reading on a 3½ digit digital voltmeter?',
        hi: '3½ डिजिट वाले डिजिटल वोल्टमीटर पर अधिकतम प्रदर्शन पाठ्यांक क्या है?',
        bn: '৩½ ডিজিটের একটি ডিজিটাল ভোল্টমিটারে প্রদর্শিত সর্বোচ্চ মান কত?'
      },
      options: [
        { id: 'a', text: { en: '999', hi: '999', bn: '৯৯৯' } },
        { id: 'b', text: { en: '1999', hi: '1999', bn: '১৯৯৯' } },
        { id: 'c', text: { en: '3999', hi: '3999', bn: '৩৯৯৯' } },
        { id: 'd', text: { en: '9999', hi: '9999', bn: '৯৯৯৯' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'In a 3½ digit display, 3 digits range from 0 to 9, and the most significant "half" digit can only be 0 or 1. Hence max display is 1999.',
        hi: '3½ डिजिट डिस्प्ले में 3 अंक 0 से 9 और पहला "आधा" अंक केवल 0 या 1 हो सकता है। इसलिए अधिकतम पाठ्यांक 1999 है।',
        bn: '৩½ ডিজিট ডিসপ্লেতে ৩ টি পুরো ডিজিট (০-৯) এবং ১ টি হাফ ডিজিট (০ বা ১) থাকে। তাই সর্বোচ্চ পাঠ ১৯৯৯।'
      }
    },
    {
      id: 'mcq-ch3-dm-3',
      question: {
        en: 'The typical input impedance of a modern digital voltmeter is:',
        hi: 'एक आधुनिक डिजिटल वोल्टमीटर का विशिष्ट इनपुट प्रतिरोध कितना होता है?',
        bn: 'একটি আধুনিক ডিজিটাল ভোল্টমিটারের সাধারণ ইনপুট রেজিস্ট্যান্স কত?'
      },
      options: [
        { id: 'a', text: { en: '10 Ω', hi: '10 Ω', bn: '১০ Ω' } },
        { id: 'b', text: { en: '1 kΩ', hi: '1 kΩ', bn: '১ kΩ' } },
        { id: 'c', text: { en: '100 kΩ', hi: '100 kΩ', bn: '১০০ kΩ' } },
        { id: 'd', text: { en: '10 MΩ or higher', hi: '10 MΩ या अधिक', bn: '১০ MΩ বা তার বেশি' } }
      ],
      correctOptionId: 'd',
      explanation: {
        en: 'FET/Op-amp buffer inputs provide very high input impedance (10 MΩ to 10 GΩ), eliminating loading effects during measurements.',
        hi: 'FET/Op-amp बफर इनपुट अत्यधिक उच्च इनपुट प्रतिरोध (10 MΩ से 10 GΩ) प्रदान करते हैं, जिससे लोडिंग प्रभाव समाप्त हो जाता है।',
        bn: 'ইনপুটে থাকা বাফার সার্কিটের দরুন এর রেজিস্ট্যান্স অতি উচ্চ (১০ MΩ বা বেশি) হয়, ফলে লোডিং ত্রুটি শূন্য হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-dm-1',
      question: {
        en: 'Draw the block diagram of a Dual-Slope Integrating Digital Voltmeter (DVM) and explain its working principle.',
        hi: 'डुअल-स्लोप इंटीग्रेटिंग डिजिटल वोल्टमीटर (DVM) का ब्लॉक आरेख बनाएं और इसके कार्य सिद्धांत की व्याख्या करें।',
        bn: 'ডুয়াল-সলোপ ইন্টিগ্রেটিং ডিজিটাল ভোল্টমিটারের (DVM) ব্লক ডায়াগ্রাম আঁকো এবং এর কার্যনীতি বর্ণনা করো।'
      },
      hint: {
        en: 'Describe fixed charging phase $T_1$ with $V_{in}$ and variable discharging phase $T_2$ with reference voltage $-V_{ref}$.',
        hi: '$V_{in}$ के साथ निश्चित चार्जिंग चरण $T_1$ और संदर्भ वोल्टेज $-V_{ref}$ के साथ परिवर्तनशील डिस्चार्जिंग चरण $T_2$ का वर्णन करें।',
        bn: 'চার্জিং সময় $T_1$ এবং ডিসচার্জিং সময় $T_2$ এর মাধ্যমে $V_{in} = V_{ref} \\times (T_2/T_1)$ প্রমাণ করো।'
      },
      answerKey: {
        en: '1) Charging Phase: Input voltage $V_{in}$ is applied to integrator for fixed clock count $N_1$ (time $T_1$). Peak capacitor voltage $V_{peak} = -\\frac{V_{in} T_1}{RC}$.\n2) Discharging Phase: Reference voltage $-V_{ref}$ is switched to integrator. Capacitor discharges to zero in variable time $T_2$ (clock count $N_2$).\n3) Derivation: $V_{peak} = \\frac{V_{ref} T_2}{RC} \\implies V_{in} T_1 = V_{ref} T_2 \\implies V_{in} = V_{ref} \\times \\frac{T_2}{T_1} = V_{ref} \\times \\frac{N_2}{N_1}$.\n4) Since $V_{ref}$ and $N_1$ are constants, counter reading $N_2$ directly represents $V_{in}$.',
        hi: '1) चार्जिंग चरण: $V_{in}$ निश्चित समय $T_1$ के लिए इंटीग्रेटर पर लगाया जाता है। $V_{peak} = -\\frac{V_{in} T_1}{RC}$।\n2) डिस्चार्जिंग चरण: $-V_{ref}$ लगाया जाता है और कैपेसिटर समय $T_2$ (काउंट $N_2$) में शून्य हो जाता है।\n3) व्युत्पत्ति: $V_{in} = V_{ref} \\times \\frac{T_2}{T_1} = V_{ref} \\times \\frac{N_2}{N_1}$।\n4) काउंटर काउंट $N_2$ सीधे $V_{in}$ का मान दर्शाता है।',
        bn: '১) চার্জিং ধাপ: $V_{in}$ নির্দিষ্ট সময় $T_1$ ধরে সমন্বয়কারীর (Integrator) ওপর কাজ করে। $V_{peak} = -\\frac{V_{in} T_1}{RC}$।\n২) ডিসচার্জিং ধাপ: বিপরীত ভোল্টেজ $-V_{ref}$ দিয়ে $T_2$ সময়ে ডিসচার্জ করা হয়।\n৩) সূত্র: $V_{in} = V_{ref} \\times \\frac{T_2}{T_1} = V_{ref} \\times \\frac{N_2}{N_1}$।\n৪) কাউন্ট $N_2$ সরাসরি ভোল্টেজ $V_{in}$ নির্দেশ করে।'
      }
    },
    {
      id: 'pq-ch3-dm-2',
      question: {
        en: 'Explain what is meant by $3\\frac{1}{2}$ digit and $4\\frac{1}{2}$ digit display in digital multimeters. Calculate the resolution for a $4\\frac{1}{2}$ digit meter on its 10 V range.',
        hi: 'डिजिटल मल्टीमीटर में $3\\frac{1}{2}$ डिजिट और $4\\frac{1}{2}$ डिजिट डिस्प्ले से क्या तात्पर्य है? इसकी 10 V रेंज पर $4\\frac{1}{2}$ डिजिट मीटर के रेजोल्यूशन की गणना करें।',
        bn: 'ডিজিটাল মাল্টিমিটারে $৩\\frac{1}{2}$ ডিজিট এবং $৪\\frac{1}{2}$ ডিজিট ডিসপ্লে বলতে কী বোঝায়? ১০ V রেঞ্জে একটি $৪\\frac{1}{2}$ ডিজিট মিটারের রেজোলিউশন বের করো।'
      },
      hint: {
        en: '$4\\frac{1}{2}$ digits = 20,000 counts (0 to 19999). Resolution = Full scale range / 20,000.',
        hi: '$4\\frac{1}{2}$ डिजिट = 20,000 काउंट्स (0 से 19999)। रेजोल्यूशन = पूर्ण पैमाना / 20,000।',
        bn: '৪.৫ ডিজিট = ২০,০০০ কাউন্টস (০ থেকে ১৯৯৯৯)। রেজোলিউশন = ১০ V / ২০,০০০।'
      },
      answerKey: {
        en: '1) Meaning: The fractional "½" digit indicates that the most significant digit can only display 0 or 1. A $3\\frac{1}{2}$ digit meter displays up to 1999 (2000 counts), while a $4\\frac{1}{2}$ digit meter displays up to 19999 (20,000 counts).\n2) Resolution Calculation:\n   On 10 V range, total counts = 20,000.\n   Resolution = $\\frac{\\text{Range}}{\\text{Total Counts}} = \\frac{10\\text{ V}}{20,000} = 0.0005\\text{ V} = 0.5\\text{ mV}$.',
        hi: '1) अर्थ: "½" डिजिट का अर्थ है कि पहला अंक केवल 0 या 1 हो सकता है। $3\\frac{1}{2}$ डिजिट मीटर 1999 तक और $4\\frac{1}{2}$ डिजिट मीटर 19999 तक दर्शाता है।\n2) गणना:\n   10 V रेंज पर कुल काउंट्स = 20,000।\n   रेजोल्यूशन = $\\frac{10\\text{ V}}{20,000} = 0.0005\\text{ V} = 0.5\\text{ mV}$।',
        bn: '১) তাৎপর্য: "½" ডিজিট মানে প্রথম ঘরে কেবল ০ বা ১ বসতে পারে। ৩.৫ ডিজিট মিটারে ২০০০ কাউন্টস (১৯৯৯) এবং ৪.৫ ডিজিটে ২০,০০০ কাউন্টস (১৯৯৯৯) প্রদর্শন মান পাওয়া যায়।\n২) হিসাব:\n   ১০ V রেঞ্জে মোট কাউন্টস = ২০,০০০।\n   রেজোলিউশন = $\\frac{১০\\text{ V}}{২০,০০০} = ০.০০০৫\\text{ V} = ০.৫\\text{ mV}$।'
      }
    }
  ]
};


export const LESSON_ENERGY_MEASUREMENT: Lesson = {
  id: 'lsn-ch3-energy-measurement',
  topicId: 'ch3-energy-measurement',
  order: 10,
  title: {
    en: 'Energy Measurement',
    hi: 'ऊर्जा मापन (Energy Measurement)',
    bn: 'এনার্জি বা শক্তি পরিমাপ (Energy Measurement)'
  },
  easyExplanation: {
    en: 'An Energy Meter (kWh meter / Electricity meter) measures total electrical energy consumed over a period of time. Unlike a wattmeter that measures power at a single moment, an energy meter integrates power over time ($E = \\int P \\cdot dt$). One kilowatt-hour (1 kWh or 1 Unit) represents 1000 watts of power used continuously for 1 hour!',
    hi: 'एनर्जी मीटर (kWh मीटर / बिजली मीटर) समय के साथ खपत की गई कुल विद्युत ऊर्जा मापता है। वाटमीटर के विपरीत जो एक पल में शक्ति मापता है, ऊर्जा मीटर समय के साथ शक्ति का एकीकरण (Integration) करता है ($E = \\int P \\cdot dt$)। एक किलोवाट-घंटा (1 kWh या 1 यूनिट) 1 घंटे तक लगातार उपयोग की गई 1000 वाट शक्ति का प्रतिनिधित्व करता है!',
    bn: 'এনার্জি মিটার (kWh মিটার বা বিদ্যুৎ মিটার) সময়কালে ব্যবহৃত মোট বিদ্যুৎ শক্তি মাপে। ওয়াটমিটার যেখানে কোনো নির্দিষ্ট মুহূর্তের ক্ষমতা মাপে, এনার্জি মিটার সময়ের সাপেক্ষে ক্ষমতার ইন্টিগ্রেশন ($E = \\int P \\cdot dt$) করে। ১ কিলোওয়াট-ঘণ্টা (1 kWh বা ১ ইউনিট) বলতে বোঝায় ১০০০ ওয়াট ক্ষমতা টানা ১ ঘণ্টা ধরে ব্যবহার করা!'
  },
  detailedExplanation: {
    en: 'Single-Phase Induction Type Energy Meters are integrating instruments widely used for AC energy billing.\n\n1. Constructional Details:\n   • Driving System: Consists of two electromagnets:\n     a) Series Magnet (Current Coil): Wound with thick wire, connected in SERIES with load, carries load current $I$. Produces magnetic flux $\\Phi_s \\propto I$.\n     b) Shunt Magnet (Voltage/Pressure Coil): Wound with fine wire, connected across supply voltage $V$, highly inductive to create a flux $\\Phi_p \\propto V$ lagging voltage by $90^\\circ$ (achieved using copper shading bands / lag coils).\n   • Moving System: A lightweight aluminum disc mounted on a vertical spindle positioned in the air gap between series and shunt magnets.\n   • Braking System: A C-shaped Permanent Magnet placed near the edge of the aluminum disc. As the disc rotates, eddy currents are induced in it, producing a braking torque $T_b \\propto N$ (speed of disc).\n   • Counting / Registering Mechanism: Gear train connected to spindle that records disc revolutions in kilowatt-hours (kWh).\n\n2. Principle of Operation:\n   • Deflecting Torque: Eddy currents induced in the aluminum disc by $\\Phi_p$ and $\\Phi_s$ interact with the magnetic fields to produce $T_d \\propto V I \\cos \\phi = Active Power P$.\n   • Steady State Condition: Deflecting torque $T_d$ equals braking torque $T_b$.\n   • Since $T_b \\propto N$ and $T_d \\propto P$, speed $N \\propto P$.\n   • Total Revolutions = $\\int N \\cdot dt \\propto \\int P \\cdot dt = Energy (kWh)$.\n\n3. Key Terminology & Meter Constant:\n   • Meter Constant ($K$): Number of disc revolutions per kWh ($K = \\frac{\\text{Revolutions}}{\\text{kWh}}$).\n   • Creeping Error: Slow continuous rotation of disc under no-load condition (only voltage applied). Prevented by drilling two diametrically opposite holes/slots in the aluminum disc.\n   • Adjustments: Lag adjustment (phase angle), Friction adjustment, Brake magnet adjustment (speed adjustment).',
    hi: 'सिंगल-फेज इंडक्शन टाइप एनर्जी मीटर बिलिंग के लिए उपयोग किए जाने वाले इंटीग्रेटिंग उपकरण हैं।:\n\n1. संरचनात्मक विवरण:\n   • ड्राइविंग सिस्टम: दो इलेक्ट्रोमैग्नेट (सीरीज मैग्नेट - करंट कॉइल; शंट मैग्नेट - वोल्टेज कॉइल)।\n   • मूविंग सिस्टम: हल्का एल्युमिनियम डिस्क जो सीरीज और शंट मैग्नेट के बीच घूमता है।\n   • ब्रेकिंग सिस्टम: स्थाई सी-आकार का चुंबक। भंवर धाराओं के कारण ब्रेकिंग टॉर्क $T_b \\propto N$ (घूर्णन गति) उत्पन्न होता है।\n   • काउंटिंग मैकेनिज्म: गियर ट्रेन जो डिस्क के चक्करों को kWh में रिकॉर्ड करती है।\n\n2. कार्य सिद्धांत:\n   • विक्षेपक टॉर्क $T_d \\propto V I \\cos \\phi = P$ (सक्रिय शक्ति)।\n   • ब्रेकिंग टॉर्क $T_b \\propto N$ (गति)।\n   • साम्यावस्था पर: गति $N \\propto P$ ⟹ कुल चक्कर = $\\int N dt \\propto \\int P dt = \\text{ऊर्जा (kWh)}$।\n\n3. महत्वपूर्ण शब्दावली एवं मीटर नियतांक ($K$):\n   • मीटर नियतांक ($K$): प्रति kWh डिस्क के चक्करों की संख्या ($K = \\frac{\\text{चक्कर}}{\\text{kWh}}$)।\n   • क्रीपिंग त्रुटि (Creeping Error): बिना किसी लोड के (केवल वोल्टेज पर) डिस्क का धीरे-धीरे लगातार घूमना। इसे डिस्क में दो विपरीत छेद करके रोका जाता है।',
    bn: 'সিঙ্গেল-ফেজ ইন্ডাকশন টাইপ এনার্জি মিটার হলো ইন্টিগ্রেটিং প্রকৃতির যন্ত্র।\n\n১. গঠনমূলক বিবরণ:\n   • ড্রাইভিং সিস্টেম: দুটি তড়িৎ-চুম্বক (সিরিজ ম্যাগনেট - কারেন্ট কয়েল; শান্ট ম্যাগনেট - ভোল্টেজ কয়েল)।\n   • মুভিং সিস্টেম: সিরিজের ও শান্ট ম্যাগনেটের ফাঁকে একটি হালকা অ্যালুমিনিয়াম ডিস্ক থাকে।\n   • ব্রেকিং সিস্টেম: অ্যালুমিনিয়াম ডিস্কের এক প্রান্তে থাকা C-আকৃতির স্থায়ী চুম্বক। এটি এডি কারেন্টের মাধ্যমে ব্রেকিং টর্ক $T_b \\propto N$ (ঘূর্ণন গতি) তৈরি করে।\n   • রেজিস্টারিং মেকানিজম: স্পিন্ডলের সাথে যুক্ত গিয়ার যা ঘূর্ণন সংখ্যাকে kWh এককে রেকর্ড করে।\n\n২. কার্যনীতি:\n   • ডিফ্লেক্টিং টর্ক $T_d \\propto V I \\cos \\phi = P$ (এক্টিভ পাওয়ার)।\n   • ব্রেকিং টর্ক $T_b \\propto N$ (ঘূর্ণন গতি)।\n   • সাম্যাবস্থায়: ঘূর্ণন গতি $N \\propto P$ ⟹ মোট ঘূর্ণন = $\\int N dt \\propto \\int P dt = \\text{শক্তি (kWh)}$।\n\n৩. মিটার কনস্ট্যান্ট ও ক্রিপিং ত্রুটি:\n   • মিটার কনস্ট্যান্ট ($K$): প্রতি kWh এ ডিস্কের ঘূর্ণন সংখ্যা ($K = \\frac{\\text{ঘূর্ণন}}{\\text{kWh}}$)।\n   • ক্রিপিং ত্রুটি (Creeping Error): লোড ছাড়া (কেবল ভোল্টেজে) ডিস্কের ধীরে ধীরে অনবরত ঘোরা। ডিস্কের দুই প্রান্তে দুটি ছিদ্র করে এটি বন্ধ করা হয়।'
  },
  formulas: [
    {
      symbol: 'E',
      expression: 'E = \\int_0^t P \\cdot dt = \\frac{V \\cdot I \\cdot \\cos \\phi \\cdot t}{1000} \\quad (\\text{kWh})',
      description: {
        en: 'Electrical Energy (E) in kWh = Active Power (kW) × Time (hours)',
        hi: 'विद्युत ऊर्जा (E) kWh में = सक्रिय शक्ति (kW) × समय (घंटे)',
        bn: 'বিদ্যুৎ শক্তি (E) kWh এককে = এক্টিভ পাওয়ার (kW) × সময় (ঘণ্টা)'
      }
    },
    {
      symbol: 'K',
      expression: 'K = \\frac{\\text{Number of Revolutions}}{\\text{Energy in kWh}}',
      description: {
        en: 'Meter Constant (K) in Rev/kWh = Total Revolutions / Energy consumed in kWh',
        hi: 'मीटर नियतांक (K) चक्कर/kWh में = कुल चक्कर / kWh में खपत ऊर्जा',
        bn: 'মিটার কনস্ট্যান্ট (K) Rev/kWh এককে = মোট ঘূর্ণন সংখ্যা / kWh এ ব্যবহৃত শক্তি'
      }
    },
    {
      symbol: '\\% \\text{Error}',
      expression: '\\% \\text{Error} = \\frac{\\text{Recorded Revolutions} - \\text{Actual Revolutions}}{\\text{Actual Revolutions}} \\times 100',
      description: {
        en: 'Percentage Meter Error = (Recorded Revs - Actual Revs) / Actual Revs × 100',
        hi: 'प्रतिशत मीटर त्रुटि = (दर्ज चक्कर - वास्तविक चक्कर) / वास्तविक चक्कर × 100',
        bn: 'শতকরা মিটার ত্রুটি = (রেকর্ডকৃত ঘূর্ণন - প্রকৃত ঘূর্ণন) / প্রকৃত ঘূর্ণন × ১০০'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-induction-energy-meter',
      title: {
        en: 'Single-Phase Induction Energy Meter Internal Diagram',
        hi: 'सिंगल-फेज इंडक्शन ऊर्जा मीटर आंतरिक आरेख',
        bn: 'সিঙ্গেল-ফেজ ইন্ডাকশন এনার্জি মিটারের অভ্যন্তরীণ চিত্র'
      },
      caption: {
        en: 'Series magnet (CC), Shunt magnet (VC), Rotating aluminum disc, and Brake magnet arrangement.',
        hi: 'सीरीज मैग्नेट (CC), शंट मैग्नेट (VC), घूर्णन एल्युमिनियम डिस्क, और ब्रेक मैग्नेट व्यवस्था।',
        bn: 'সিরিজ ম্যাগনেট, শান্ট ম্যাগনেট, অ্যালুমিনিয়াম ডিস্ক এবং ব্রেক ম্যাগনেটের বিন্যাস।'
      },
      svgType: 'instrument-energy-meter'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-em-1',
      problem: {
        en: 'An energy meter has a meter constant of 600 revolutions/kWh. When tested with a load drawing 20 A at 230 V and 0.8 power factor lagging for 1 hour, the disc makes 2300 revolutions. Calculate:\n1) True energy consumed in kWh.\n2) Expected revolutions.\n3) Percentage error of the energy meter.',
        hi: 'एक ऊर्जा मीटर का मीटर नियतांक 600 चक्कर/kWh है। 230 V पर 20 A तथा 0.8 लैगिंग पावर फैक्टर वाले लोड के साथ 1 घंटे तक परीक्षण करने पर डिस्क 2300 चक्कर लगाती है। गणना करें:\n1) वास्तविक खपत ऊर्जा (kWh)।\n2) अपेक्षित चक्कर।\n3) ऊर्जा मीटर की प्रतिशत त्रुटि।',
        bn: 'একটি এনার্জি মিটারের কনস্ট্যান্ট ৬০০ Rev/kWh। ২৩০ V সাপ্লাইয়ে ২০ A কারেন্ট ও ০.৮ ল্যাগিং পাওয়ার ফ্যাক্টরে ১ ঘণ্টা চালালে ডিস্কটি ২৩০০ টি ঘূর্ণন সম্পন্ন করে। বের করো:\n১) ব্যবহৃত প্রকৃত শক্তি (kWh)।\n২) কাঙ্ক্ষিত ঘূর্ণন সংখ্যা।\n৩) মিটারের শতকরা ত্রুটি।'
      },
      givenValues: {
        'Meter Constant (K)': '600 Rev/kWh',
        'Voltage (V)': '230 V',
        'Current (I)': '20 A',
        'Power Factor (cos φ)': '0.8',
        'Time (t)': '1 hour',
        'Recorded Revolutions': '2300 revs'
      },
      solution: {
        en: '1) Active Power P = V × I × cos φ / 1000 = (230 × 20 × 0.8) / 1000 = 3.68 kW.\n   True Energy consumed E = P × t = 3.68 kW × 1 hour = 3.68 kWh.\n\n2) Expected Revolutions = Meter Constant K × True Energy = 600 rev/kWh × 3.68 kWh = 2208 revolutions.\n\n3) Percentage Error = [(Recorded Revs - Expected Revs) / Expected Revs] × 100\n   % Error = [(2300 - 2208) / 2208] × 100 = (92 / 2208) × 100 ≈ +4.167% (Meter runs FAST).',
        hi: '1) सक्रिय शक्ति P = (230 × 20 × 0.8) / 1000 = 3.68 kW।\n   वास्तविक ऊर्जा E = 3.68 kW × 1 h = 3.68 kWh।\n\n2) अपेक्षित चक्कर = 600 × 3.68 = 2208 चक्कर।\n\n3) प्रतिशत त्रुटि = [(2300 - 2208) / 2208] × 100 = +4.167% (मीटर तेज चल रहा है)।',
        bn: '১) এক্টিভ পাওয়ার P = (২৩০ × ২০ × ০.৮) / ১০০০ = ৩.৬৮ kW।\n   প্রকৃত শক্তি E = ৩.৬৮ kW × ১ h = ৩.৬৮ kWh।\n\n২) কাঙ্ক্ষিত ঘূর্ণন সংখ্যা = ৬০০ × ৩.৬৮ = ২২০৮ টি।\n\n৩) শতকরা ত্রুটি = [(২৩০০ - ২২০৮) / ২২০৮] × ১০০ = +৪.১৬৭% (মিটারটি দ্রুত ঘুরছে)।'
      },
      finalAnswer: {
        en: 'True Energy = 3.68 kWh, Expected Revs = 2208, % Error = +4.167% (Fast)',
        hi: 'वास्तविक ऊर्जा = 3.68 kWh, अपेक्षित चक्कर = 2208, % त्रुटि = +4.167% (तेज)',
        bn: 'প্রকৃত শক্তি = ৩.৬৮ kWh, কাঙ্ক্ষিত ঘূর্ণন = ২২০৮, % ত্রুটি = +৪.১৬৭% (দ্রুত)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Residential and commercial electricity revenue billing.',
      'Sub-metering in apartment complexes and industrial factories.',
      'Smart grid electronic energy meters (AMI/AMR systems).'
    ],
    hi: [
      'आवासीय और वाणिज्यिक बिजली राजस्व बिलिंग।',
      'अपार्टमेंट परिसरों और औद्योगिक कारखानों में सब-मीटरिंग।',
      'स्मार्ट ग्रिड इलेक्ट्रॉनिक ऊर्जा मीटर (AMI/AMR प्रणाली)।'
    ],
    bn: [
      'বাসাবাড়ি ও বাণিজ্যিক প্রতিষ্ঠানে বিদ্যুতের বিল তৈরিতে ব্যবহার।',
      'ফ্ল্যাট অ্যাপার্টমেন্ট ও কারখানায় সাব-মিটারিং।',
      'স্মার্ট গ্রিড ডিজিটাল বা ইলেকট্রনিক এনার্জি মিটার (AMI/AMR)।'
    ]
  },
  importantPoints: {
    en: [
      'Energy meter is an INTEGRATING type instrument measuring kilowatt-hours (kWh).',
      '1 kWh = 1 Board of Trade Unit (BOTU) = $3.6 \\times 10^6$ Joules.',
      'Current Coil is connected in SERIES; Voltage Coil is connected in PARALLEL.',
      'Brake magnet generates eddy currents to produce braking torque $T_b \\propto N$.',
      'Creeping is no-load rotation prevented by drilling two anti-creeping holes on the disc.',
      'Moving the brake magnet towards the spindle INCREASES speed; moving it outwards DECREASES speed.'
    ],
    hi: [
      'ऊर्जा मीटर एक इंटीग्रेटिंग (इंटीग्रेशन) प्रकार का उपकरण है जो kWh मापता है।',
      '1 kWh = 1 बोर्ड ऑफ ट्रेड यूनिट = $3.6 \\times 10^6$ जूल।',
      'करंट कॉइल श्रेणीक्रम में; वोल्टेज कॉइल समांतर क्रम में जुड़ती है।',
      'ब्रेक चुंबक ब्रेकिंग टॉर्क $T_b \\propto N$ उत्पन्न करने के लिए भंवर धाराएं बनाता है।',
      'क्रीपिंग बिना लोड के घूर्णन है जिसे रोकने के लिए डिस्क पर दो छेद किए जाते हैं।',
      'ब्रेक चुंबक को स्पिंडल के पास ले जाने पर गति बढ़ती है; दूर ले जाने पर गति घटती है।'
    ],
    bn: [
      'এনার্জি মিটার হলো একটি ইন্টিগ্রেটিং (Integrating) টাইপ যন্ত্র যা kWh মাপে।',
      '১ kWh = ১ ইউনিট = $৩.৬ \\times ১০^৬$ জুুল।',
      'কারেন্ট কয়েল শ্রেণিতে এবং ভোল্টেজ কয়েল সমান্তরালে যুক্ত থাকে।',
      'ব্রেক ম্যাগনেট এডি কারেন্ট উৎপন্ন করে ব্রেকিং টর্ক $T_b \\propto N$ তৈরি করে।',
      'ক্রিপিং হলো নো-লোড অবস্থায় ঘোরা, যা ডিস্কে দুটি বিপরীত ছিদ্র করে বন্ধ করা হয়।',
      'ব্রেক ম্যাগনেট কেন্দ্রের দিকে আনলে গতি বাড়ে, অক্ষ থেকে বাইরে নিলে গতি কমে।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Wattmeter with Energy Meter: Wattmeter measures instantaneous power (kW), Energy meter measures total energy (kWh).',
      'Incorrect calculation of meter error: Remember % Error = (Recorded - Actual) / Actual × 100.',
      'Misunderstanding creep prevention: Creeping is caused by over-compensation for friction or excessive supply voltage under NO LOAD.'
    ],
    hi: [
      'वाटमीटर और ऊर्जा मीटर में भ्रम: वाटमीटर तात्कालिक शक्ति (kW) मापता है, ऊर्जा मीटर कुल ऊर्जा (kWh) मापता है।',
      'मीटर त्रुटि की गलत गणना: याद रखें % त्रुटि = (दर्ज - वास्तविक) / वास्तविक × 100।',
      'क्रीपिंग का गलत अर्थ: क्रीपिंग नो-लोड पर घर्षण की अत्यधिक भरपाई या उच्च वोल्टेज के कारण होती है।'
    ],
    bn: [
      'ওয়াটমিটার ও এনার্জি মিটারের পার্থক্য না বোঝা: ওয়াটমিটার মাপে ক্ষমতা (kW), এনার্জি মিটার মাপে মোট কাজ বা শক্তি (kWh)।',
      'ত্রুটির শতকরা হার উল্টো বের করা: মনে রেখো % ত্রুটি = (রেকর্ডকৃত - প্রকৃত) / প্রকৃত × ১০০।',
      'ক্রিপিং এর কারণ ভুল বোঝা: নো-লোড অবস্থায় ঘর্ষণ ক্ষতিপূরণ বেশি হলে ক্রিপিং ঘটে।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-em-1',
      question: {
        en: 'The aluminum disc of an induction energy meter rotates continuously under no-load condition when voltage is applied. This defect is called:',
        hi: 'वोल्टेज लागू होने पर बिना किसी लोड के इंडक्शन ऊर्जा मीटर की एल्युमिनियम डिस्क लगातार घूमती है। इस दोष को क्या कहते हैं?',
        bn: 'নো-লোড অবস্থায় কেবল ভোল্টেজ থাকলে অ্যালুমিনিয়াম ডিস্কের অনবরত ঘোরাকে কী ত্রুটি বলে?'
      },
      options: [
        { id: 'a', text: { en: 'Friction error', hi: 'घर्षण त्रुटि', bn: 'ঘর্ষণ ত্রুটি' } },
        { id: 'b', text: { en: 'Creeping', hi: 'क्रीपिंग (Creeping)', bn: 'ক্রিপিং (Creeping)' } },
        { id: 'c', text: { en: 'Phase error', hi: 'फेज त्रुटि', bn: 'ফেজ ত্রুটি' } },
        { id: 'd', text: { en: 'Temperature error', hi: 'तापमान त्रुटि', bn: 'तापमान त्रुटि' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Creeping is the slow rotation of the aluminum disc when the potential coil is energized but no load current flows in the current coil.',
        hi: 'क्रीपिंग तब होती है जब केवल पोटेंशियल कॉइल में वोल्टेज हो लेकिन करंट कॉइल में कोई धारा न बह रही हो।',
        bn: 'কারেন্ট কয়েলে কোনো কারেন্ট না থাকলেও ভোল্টেজ কয়েলের উত্তেজনার দরুন ডিস্কের ধীরে ঘোরাকে ক্রিপিং বলে।'
      }
    },
    {
      id: 'mcq-ch3-em-2',
      question: {
        en: 'Creeping in a single-phase energy meter is prevented by:',
        hi: 'सिंगल-फेज ऊर्जा मीटर में क्रीपिंग को कैसे रोका जाता है?',
        bn: 'সিঙ্গেল-ফেজ এনার্জি মিটারে ক্রিপিং রোধ করার উপায় কী?'
      },
      options: [
        { id: 'a', text: { en: 'Increasing the strength of the brake magnet', hi: 'ब्रेक चुंबक की ताकत बढ़ाकर', bn: 'ব্রেক ম্যাগনেটের শক্তি বাড়িয়ে' } },
        { id: 'b', text: { en: 'Drilling two diametrically opposite holes in the aluminum disc', hi: 'एल्युमिनियम डिस्क में दो विपरीत छेद करके', bn: 'অ্যালুমিনিয়াম ডিস্কে দুটি বিপরীত ছিদ্র করে' } },
        { id: 'c', text: { en: 'Removing the voltage coil shading band', hi: 'वोल्टेज कॉइल शेडिंग बैंड हटाकर', bn: 'ভোল্টেজ কয়েলের শেডিং ব্যান্ড খুলে' } },
        { id: 'd', text: { en: 'Connecting a capacitor in parallel', hi: 'समांतर क्रम में संधारित्र जोड़कर', bn: 'সমান্তরালে ক্যাপাসিটর যুক্ত করে' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Two diametrically opposite holes increase magnetic reluctance under no-load, distorting the flux path and stopping disc rotation under the shunt magnet.',
        hi: 'दो विपरीत छेद नो-लोड पर चुंबकीय अनिच्छा (Reluctance) बढ़ाकर डिस्क को घूमने से रोकते हैं।',
        bn: 'ডিস্কের দুই বিপরীত ছিদ্র নো-লোড অবস্থায় চৌম্বক বাধা (Reluctance) বাড়িয়ে ডিস্ককে থামিয়ে দেয়।'
      }
    },
    {
      id: 'mcq-ch3-em-3',
      question: {
        en: '1 Kilowatt-hour (1 kWh) of electrical energy is equal to how many Joules?',
        hi: '1 किलोवाट-घंटा (1 kWh) विद्युत ऊर्जा कितने जूल के बराबर होती है?',
        bn: '১ কিলোওয়াট-ঘণ্টা (1 kWh) বিদ্যুৎ শক্তি কত জুুলের সমান?'
      },
      options: [
        { id: 'a', text: { en: '1,000 Joules', hi: '1,000 जूल', bn: '১,০০০ জুুল' } },
        { id: 'b', text: { en: '360,000 Joules', hi: '360,000 जूल', bn: '৩৬০,০০০ জুুল' } },
        { id: 'c', text: { en: '3,600,000 Joules (3.6 MJ)', hi: '3,600,000 जूल (3.6 MJ)', bn: '৩,৬০০,০০০ জুুল (৩.৬ MJ)' } },
        { id: 'd', text: { en: '36,000,000 Joules', hi: '36,000,000 जूल', bn: '৩৬,০০০,০০০ জুুল' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: '1 kWh = 1000 Watts × 3600 seconds = 3,600,000 Joules = 3.6 Megajoules (MJ).',
        hi: '1 kWh = 1000 वाट × 3600 सेकंड = 3,600,000 जूल = 3.6 MJ।',
        bn: '১ kWh = ১০‌০০ ওয়াট × ৩৬০০ সেকেন্ড = ৩,৬০০,০০০ জুুল = ৩.৬ MJ।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-em-1',
      question: {
        en: 'Explain the working principle of a single-phase induction energy meter. What is the function of the brake magnet?',
        hi: 'सिंगल-फेज इंडक्शन ऊर्जा मीटर के कार्य सिद्धांत की व्याख्या करें। ब्रेक चुंबक का क्या कार्य है?',
        bn: 'সিঙ্গেল-ফেজ ইন্ডাকশন এনার্জি মিটারের কার্যনীতি ব্যাখ্যা করো। ব্রেক ম্যাগনেটের কাজ কী?'
      },
      hint: {
        en: 'Mention driving torque $T_d \\propto P$, braking torque $T_b \\propto N$, and steady state condition $N \\propto P$.',
        hi: 'ड्राइविंग टॉर्क $T_d \\propto P$, ब्रेकिंग टॉर्क $T_b \\propto N$, और साम्यावस्था $N \\propto P$ का उल्लेख करें।',
        bn: 'ড্রাইভিং টর্ক, এডি কারেন্ট দ্বারা তৈরি ব্রেকিং টর্ক এবং ডিস্কের গতির সমীকরণের কথা উল্লেখ করো।'
      },
      answerKey: {
        en: '1) Principle: Shunt and Series electromagnets induce eddy currents in an aluminum disc. Their interaction creates driving torque $T_d \\propto V I \\cos \\phi = P$.\n2) Brake Magnet Function: As the disc rotates through the C-shaped permanent brake magnet field, eddy currents are induced in the disc, generating a opposing braking torque $T_b \\propto N$ (speed).\n3) At equilibrium, $T_d = T_b \\implies N \\propto P$. Hence total revolutions $\\int N dt \\propto \\int P dt = \\text{Energy (kWh)}$.',
        hi: '1) सिद्धांत: शंट और सीरीज इलेक्ट्रोमैग्नेट डिस्क में भंवर धाराएं प्रेरित करते हैं। उनका इंटरैक्शन ड्राइविंग टॉर्क $T_d \\propto P$ उत्पन्न करता है।\n2) ब्रेक चुंबक का कार्य: जब डिस्क ब्रेक चुंबक के क्षेत्र में घूमती है, तो इसमें भंवर धाराएं बनती हैं जो विरोधी ब्रेकिंग टॉर्क $T_b \\propto N$ उत्पन्न करती हैं।\n3) साम्यावस्था पर $N \\propto P$, जिससे डिस्क के कुल चक्कर खपत की गई ऊर्जा (kWh) के आनुपातिक होते हैं।',
        bn: '১) কার্যনীতি: শান্ট ও সিরিজ ম্যাগনেট অ্যালুমিনিয়াম ডিস্কে এডি কারেন্ট তৈরি করে ড্রাইভিং টর্ক $T_d \\propto P$ উৎপন্ন করে।\n২) ব্রেক ম্যাগনেটের কাজ: ডিস্কটি C-আকৃতির স্থায়ী চুম্বকের মাঝে ঘুরলে এডি কারেন্ট উৎপন্ন হয়ে গতির বিপরীত ব্রেকিং টর্ক $T_b \\propto N$ তৈরি করে।\n৩) ফলে সাম্যাবস্থায় গতি $N \\propto P$ এবং মোট ঘূর্ণন ব্যবহৃত শক্তির (kWh) সমানুপাতিক হয়।'
      }
    },
    {
      id: 'pq-ch3-em-2',
      question: {
        en: 'What is Creeping in energy meters? Describe its causes and how it is eliminated.',
        hi: 'ऊर्जा मीटरों में क्रीपिंग (Creeping) क्या है? इसके कारणों का वर्णन करें और इसे कैसे समाप्त किया जाता है।',
        bn: 'এনার্জি মিটারে ক্রিপিং (Creeping) কী? এর কারণ ও এটি কীভাবে দূর করা যায় তা লেখো।'
      },
      hint: {
        en: 'No-load disc rotation due to friction over-compensation or over-voltage; prevented by anti-creeping holes.',
        hi: 'घर्षण की अधिक भरपाई या अधिक वोल्टेज के कारण नो-लोड डिस्क घूर्णन; एंटी-क्रीपिंग छेद द्वारा रोका जाता है।',
        bn: 'নো-লোড অবস্থায় ডিস্কের সলো ঘোরা; ডিস্কে দুটি বিপরীত ছিদ্র করে এটি সমাধান করা হয়।'
      },
      answerKey: {
        en: '1) Creeping: Slow, continuous rotation of the aluminum disc under NO-LOAD condition when only voltage is applied to the potential coil.\n2) Causes: Over-compensation for friction (excessive shading loop adjustment), over-voltage, or stray magnetic fields.\n3) Elimination: Drilling two small diametrically opposite holes in the aluminum disc. Under no load, when a hole comes under the shunt magnet pole, the distortion in flux path breaks disc rotation and stops creeping.',
        hi: '1) क्रीपिंग: नो-लोड स्थिति में केवल वोल्टेज होने पर डिस्क का धीरे-धीरे घूमना।\n2) कारण: घर्षण की अत्यधिक भरपाई (शेडिंग लूप का अधिक एडजस्टमेंट), ओवर-वोल्टेज, या बाहरी चुंबकीय क्षेत्र।\n3) निवारण: एल्युमिनियम डिस्क में दो विपरीत छेद करना। जब छेद पोल के नीचे आता है, तो फ्लक्स मार्ग में परिवर्तन घूर्णन को रोक देता है।',
        bn: '১) ক্রিপিং: কারেন্ট কয়েলে কারেন্ট না থাকলেও কেবল ভোল্টেজ প্রয়োগের ফলে ডিস্কের ধীরে ধীরে ঘোরা।\n২) কারণ: ঘর্ষণ ক্ষতিপূরণ বেশি হওয়া, उच्च ভোল্টেজ বা বাইরের চুম্বক ক্ষেত্রের প্রভাব।\n৩) প্রতিকার: ডিস্কের দুই প্রান্তে দুটি ছোট ছিদ্র করা। ছিদ্র পোল-এর নিচে এলে ফ্লাক্সের পথ বিঘ্নিত হয়ে ডিস্ক থমকে দাঁড়ায়।'
      }
    }
  ]
};
export const LESSON_WATTMETER_POWER: Lesson = {
  id: 'lsn-ch3-wattmeter-power',
  topicId: 'ch3-wattmeter-power',
  order: 9,
  title: {
    en: 'Wattmeter & Power Measurement',
    hi: 'वाटमीटर एवं शक्ति मापन (Wattmeter & Power Measurement)',
    bn: 'ওয়াটमीटर ও পাওয়ার পরিমাপ (Wattmeter & Power Measurement)'
  },
  easyExplanation: {
    en: 'A Wattmeter measures Active Electrical Power ($P = V I \\cos \\phi$) in watts. It contains two coils: a Current Coil (CC) connected in series with the load to measure current, and a Pressure Coil (PC) connected in parallel across the load to measure voltage. Their combined magnetic interaction turns the pointer to indicate true power!',
    hi: 'वाटमीटर सक्रिय विद्युत शक्ति ($P = V I \\cos \\phi$) वाट में मापता है। इसमें दो कॉइल होती हैं: करंट कॉइल (CC) जो धारा मापने के लिए लोड के श्रेणीक्रम में जुड़ती है, और प्रेशर कॉइल (PC) जो वोल्टेज मापने के लिए लोड के समांतर क्रम में जुड़ती है। दोनों का प्रभाव पॉइंटर को घुमाकर वास्तविक शक्ति दर्शाता है!',
    bn: 'ওয়াটমিটার এসি বা ডিসি সার্কিটের এক্টিভ পাওয়ার ($P = V I \\cos \\phi$) ওয়াটে মাপে। এতে দুটি কয়েল থাকে: কারেন্ট কয়েল (CC) যা কারেন্ট মাপতে লোডের সাথে শ্রেণিতে যুক্ত থাকে, এবং প্রেসার কয়েল (PC) যা ভোল্টেজ মাপতে সমান্তরালে যুক্ত থাকে। দুটি কয়েলের পারস্পরিক ক্রিয়া কাঁটাকে ঘুরিয়ে সঠিক পাওয়ার নির্দেশ করে!'
  },
  detailedExplanation: {
    en: 'Power in single-phase and three-phase AC circuits is measured using Electrodynamometer Wattmeters and special multi-wattmeter methods.\n\n1. Electrodynamometer Wattmeter Construction:\n   • Current Coil (CC): Fixed coil split into two coaxial halves, wound with thick wire, connected in SERIES with the load (low resistance).\n   • Pressure Coil (PC) / Potential Coil: Moving coil mounted on spindle, wound with fine wire, connected in PARALLEL across the load in series with a high non-inductive resistance ($R_p$).\n   • Torque Equation: Deflecting torque $T_d \\propto i_c \\cdot i_p$. Average Torque $T_{d,avg} = K \\cdot V I \\cos \\phi = K \\cdot P$ (Active Power).\n   • Scale: Perfectly Linear because $T_c = k \\cdot \\theta \\implies \\theta \\propto P$.\n\n2. Three-Phase Power Measurement (Two-Wattmeter Method):\n   • Applicable to 3-phase 3-wire star or delta connected balanced or unbalanced loads.\n   • Total Active Power: $P_{total} = W_1 + W_2$.\n   • Individual Readings: $W_1 = V_L I_L \\cos(30^\\circ - \\phi)$, $W_2 = V_L I_L \\cos(30^\\circ + \\phi)$.\n   • Power Factor Formula: $\\tan \\phi = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2} \\implies \\cos \\phi = \\cos(\\arctan(\\dots))$.\n   • Special Cases:\n     a) Unity Power Factor ($\\cos \\phi = 1, \\phi = 0^\\circ$): $W_1 = W_2 = 0.866 V_L I_L$.\n     b) Power Factor = 0.5 ($\\phi = 60^\\circ$): $W_1 = V_L I_L, W_2 = 0$ (one wattmeter reads zero).\n     c) Power Factor < 0.5 ($\\phi > 60^\\circ$): $W_2$ gives a negative deflection (must reverse CC or PC connections to read, then subtract $W_2$).\n     d) Zero Power Factor ($\\cos \\phi = 0, \\phi = 90^\\circ$): $W_1 = -W_2$, $P_{total} = 0$.\n\n3. Errors in Wattmeters:\n   • Pressure Coil Inductance Error: Causes wattmeter to read higher at lagging power factor.\n   • Pressure Coil Capacitance Error: Causes wattmeter to read lower at lagging power factor.\n   • Connection Errors: CC connected before PC measures load power + PC copper loss; CC connected after PC measures load power + CC copper loss.',
    hi: '1. इलेक्ट्रोडायनेमोमीटर वाटमीटर की संरचना:\n   • करंट कॉइल (CC): फिक्स्ड कॉइल, मोटे तार की, लोड के श्रेणीक्रम (SERIES) में जुड़ती है।\n   • प्रेशर कॉइल (PC): मूविंग कॉइल, पतले तार की, लोड के समांतर (PARALLEL) में उच्च गैर-प्रेरक प्रतिरोध ($R_p$) के साथ जुड़ती है।\n   • टॉर्क समीकरण: औसत टॉर्क $T_{d,avg} \\propto V I \\cos \\phi = P$ (सक्रिय शक्ति)।\n   • पैमाना: पूर्णतः रैखिक (Linear) क्योंकि $\\theta \\propto P$।\n\n2. 3-फेज शक्ति मापन (टू-वाटमीटर विधि - Two-Wattmeter Method):\n   • स्टार या डेल्टा संतुलित/असंतुलित लोड के लिए उपयुक्त।\n   • कुल शक्ति: $P_{total} = W_1 + W_2$।\n   • पाठ्यांक: $W_1 = V_L I_L \\cos(30^\\circ - \\phi)$, $W_2 = V_L I_L \\cos(30^\\circ + \\phi)$।\n   • पावर फैक्टर सूत्र: $\\tan \\phi = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}$।\n   • विशेष स्थितियाँ:\n     a) $\\cos \\phi = 1$: $W_1 = W_2$ दोनों बराबर।\n     b) $\\cos \\phi = 0.5$: $W_2 = 0$ एक वाटमीटर शून्य दर्शाता है।\n     c) $\\cos \\phi < 0.5$: $W_2$ ऋणात्मक (रिवर्स) विक्षेप देता है।\n\n3. वाटमीटर में त्रुटियाँ: प्रेशर कॉइल का प्रेरकत्व (Inductance) लैगिंग पावर फैक्टर पर अधिक पाठ्यांक दर्शाता है।',
    bn: '১. ইলেক্ট্রোডায়নামোমিটার ওয়াটমিটারের গঠন:\n   • কারেন্ট কয়েল (CC): মোটা তারের ফিক্সড কয়েল, লোডের সাথে শ্রেণিতে যুক্ত।\n   • প্রেসার কয়েল (PC): সরু তারের মুভিং কয়েল, লোডের সাথে সমান্তরালে উচ্চ রেজিস্ট্যান্স ($R_p$) সহ যুক্ত।\n   • টর্ক সমীকরণ: গড় টর্ক $T_{d,avg} \\propto V I \\cos \\phi = P$ (এক্টিভ পাওয়ার)।\n   • স্কেল: সম্পূর্ণ রৈখিক (Linear) কারণ $\\theta \\propto P$।\n\n২. ৩-ফেজ পাওয়ার পরিমাপ (টু-ওয়াটमीटर পদ্ধতি):\n   • স্টার বা ডেল্টা ৩-ওয়্যার সার্কিটে সুষম বা বিষম লোডে প্রযোজ্য।\n   • মোট পাওয়ার: $P_{total} = W_1 + W_2$।\n   • পাঠ: $W_1 = V_L I_L \\cos(30^\\circ - \\phi)$, $W_2 = V_L I_L \\cos(30^\\circ + \\phi)$।\n   • পাওয়ার ফ্যাক্টর সূত্র: $\\tan \\phi = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}$।\n   • বিশেষ ক্ষেত্রসমূহ:\n     ক) পাওয়ার ফ্যাক্টর ১.০ হলে: $W_1 = W_2$ (উভয় মিটার সমান)।\n     খ) পাওয়ার ফ্যাক্টর ০.৫ হলে: $W_2 = 0$ (একটি মিটার ০ দেখায়)।\n     গ) পাওয়ার ফ্যাক্টর ০.৫ এর কম হলে: $W_2$ ঋণাত্মক বিচ্যুতি দেয় (কয়েল উল্টে পাঠ বিয়োগ করতে হয়)।'
  },
  formulas: [
    {
      symbol: 'P',
      expression: 'P = V I \\cos \\phi',
      description: {
        en: 'Active Power (P) in Watts = Voltage (V) × Current (I) × Power Factor (cos φ)',
        hi: 'सक्रिय शक्ति (P) वाट में = वोल्टेज (V) × धारा (I) × पावर फैक्टर (cos φ)',
        bn: 'এক্টিভ পাওয়ার (P) ওয়াটে = ভোল্টেজ (V) × কারেন্ট (I) × পাওয়ার ফ্যাক্টর (cos φ)'
      }
    },
    {
      symbol: 'P_{3\\phi}',
      expression: 'P_{3\\phi} = W_1 + W_2 = \\sqrt{3} V_L I_L \\cos \\phi',
      description: {
        en: 'Total 3-Phase Active Power = Sum of Two Wattmeter readings (W1 + W2)',
        hi: 'कुल 3-फेज सक्रिय शक्ति = दोनों वाटमीटर पाठ्यांकों का योग (W1 + W2)',
        bn: 'মোট ৩-ফেজ এক্টিভ পাওয়ার = টু-ওয়াটমিটারের পাঠের যোগফল (W1 + W2)'
      }
    },
    {
      symbol: '\\tan \\phi',
      expression: '\\tan \\phi = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}',
      description: {
        en: 'Power Factor Angle Tangent (tan φ) = √3 × (W1 - W2) / (W1 + W2)',
        hi: 'पावर फैक्टर कोण टेंगेंट (tan φ) = √3 × (W1 - W2) / (W1 + W2)',
        bn: 'পাওয়ার ফ্যাক্টর কোণের ট্যানজেন্ট (tan φ) = √3 × (W1 - W2) / (W1 + W2)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-wattmeter-two-method',
      title: {
        en: 'Two-Wattmeter Method for 3-Phase Power Measurement',
        hi: '3-फेज शक्ति मापन की टू-वाटमीटर विधि',
        bn: '৩-ফেজ পাওয়ার পরিমাপের টু-ওয়াটমিটার পদ্ধতির চিত্র'
      },
      caption: {
        en: 'W1 connected between R line and B line; W2 connected between Y line and B line.',
        hi: 'W1 आर और बी लाइन के बीच; W2 वाई और बी लाइन के बीच जुड़ा है।',
        bn: 'W1 যুক্ত R ও B লাইনে; W2 যুক্ত Y ও B লাইনে।'
      },
      svgType: 'instrument-wattmeter'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-wm-1',
      problem: {
        en: 'Two wattmeters connected to measure power in a 3-phase balanced system read 5 kW and 1 kW respectively. Calculate:\n1) Total active power supplied.\n2) Power factor of the load.',
        hi: 'एक 3-फेज संतुलित प्रणाली में शक्ति मापने के लिए जुड़े दो वाटमीटर क्रमशः 5 kW और 1 kW पढ़ते हैं। गणना करें:\n1) आपूर्ति की गई कुल सक्रिय शक्ति।\n2) लोड का पावर फैक्टर।',
        bn: 'একটি ৩-ফেজ সুষম লোডে দুটি ওয়াটমিটার যথাক্রমে ৫ kW এবং ১ kW পাঠ দেয়। বের করো:\n১) মোট এক্টিভ পাওয়ার।\n২) লোডের পাওয়ার ফ্যাক্টর।'
      },
      givenValues: {
        'Wattmeter 1 (W1)': '5 kW = 5000 W',
        'Wattmeter 2 (W2)': '1 kW = 1000 W'
      },
      solution: {
        en: '1) Total Power P = W1 + W2 = 5 kW + 1 kW = 6 kW.\n\n2) Power Factor Angle φ:\n   tan φ = √3 × (W1 - W2) / (W1 + W2)\n   tan φ = 1.732 × (5 - 1) / (5 + 1) = 1.732 × 4 / 6 = 1.1547.\n   φ = arctan(1.1547) ≈ 49.11°.\n   Power Factor = cos(49.11°) ≈ 0.655 lagging.',
        hi: '1) कुल शक्ति P = W1 + W2 = 5 + 1 = 6 kW।\n\n2) पावर फैक्टर कोण φ:\n   tan φ = √3 × (5 - 1) / (5 + 1) = 1.732 × 4 / 6 = 1.1547।\n   φ = arctan(1.1547) ≈ 49.11°।\n   पावर फैक्टर = cos(49.11°) ≈ 0.655 लैगिंग।',
        bn: '১) মোট পাওয়ার P = W1 + W2 = ৫ + ১ = ৬ kW।\n\n২) পাওয়ার ফ্যাক্টর কোণ φ:\n   tan φ = √৩ × (৫ - ১) / (৫ + ১) = ১.৭৩২ × ৪ / ৬ = ১.১৫৪৭।\n   φ = arctan(১.১৫৪৭) ≈ ৪৯.১১°।\n   পাওয়ার ফ্যাক্টর = cos(৪৯.১১°) ≈ ০.৬৫৫ ল্যাগিং।'
      },
      finalAnswer: {
        en: 'Total Power = 6 kW, Power Factor = 0.655 lagging',
        hi: 'कुल शक्ति = 6 kW, पावर फैक्टर = 0.655 लैगिंग',
        bn: 'মোট পাওয়ার = ৬ kW, পাওয়ার ফ্যাক্টর = ০.৬৫৫ ল্যাগিং'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Industrial plant power consumption monitoring.',
      'Efficiency testing of 3-phase induction motors and transformers.',
      'Power quality audits and energy management systems.'
    ],
    hi: [
      'औद्योगिक संयंत्र की बिजली खपत की निगरानी।',
      '3-फेज प्रेरण मोटर और ट्रांसफॉर्मर का दक्षता परीक्षण।',
      'पावर क्वालिटी ऑडिट और ऊर्जा प्रबंधन प्रणाली।'
    ],
    bn: [
      'শিল্পকারখানায় বিদ্যুৎ ব্যবহারের হিসাব মনিটরিং।',
      '৩-ফেজ মোটর ও ট্রান্সফরমারের দক্ষতা (Efficiency) পরীক্ষা।',
      'পাওয়ার কোয়ালিটি নিরীক্ষা ও এনার্জি ম্যানেজমেন্ট।'
    ]
  },
  importantPoints: {
    en: [
      'Wattmeter measures Active Power ($P = V I \\cos \\phi$) in Watts.',
      'Current Coil (CC) = Low resistance, connected in SERIES.',
      'Pressure Coil (PC) = High resistance, connected in PARALLEL.',
      'Two-Wattmeter method works for both balanced & unbalanced 3-wire 3-phase loads.',
      'When power factor = 0.5 ($\phi = 60^\circ$), one wattmeter reads ZERO ($W_2 = 0$).',
      'When power factor < 0.5 ($\phi > 60^\circ$), one wattmeter reads NEGATIVE (reverse connections).'
    ],
    hi: [
      'वाटमीटर वाट में सक्रिय शक्ति ($P = V I \\cos \\phi$) मापता है।',
      'करंट कॉइल (CC) = कम प्रतिरोध, श्रेणीक्रम (SERIES) में जुड़ी।',
      'प्रेशर कॉइल (PC) = उच्च प्रतिरोध, समांतर क्रम (PARALLEL) में जुड़ी।',
      'टू-वाटमीटर विधि 3-फेज 3-तार संतुलित और असंतुलित दोनों लोड के लिए काम करती है।',
      'जब पावर फैक्टर = 0.5 ($\phi = 60^\circ$) होता है, तो एक वाटमीटर शून्य ($W_2 = 0$) पढ़ता है।',
      'जब पावर फैक्टर < 0.5 होता है, तो एक वाटमीटर ऋणात्मक (रिवर्स) पाठ्यांक देता है।'
    ],
    bn: [
      'ওয়াটমিটার ওয়াটে এক্টিভ পাওয়ার ($P = V I \\cos \\phi$) মাপে।',
      'কারেন্ট কয়েল (CC) = কম রেজিস্ট্যান্স, শ্রেণিতে (SERIES) যুক্ত।',
      'প্রেসার কয়েল (PC) = উচ্চ রেজিস্ট্যান্স, সমান্তরালে (PARALLEL) যুক্ত।',
      'টু-ওয়াটমিটার পদ্ধতি ৩-ফেজ সুষম ও বিষম উভয় লোডেই প্রযোজ্য।',
      'পাওয়ার ফ্যাক্টর ০.৫ হলে একটি ওয়াটমিটার শূন্য পাঠ দেয় ($W_2 = 0$)।',
      'পাওয়ার ফ্যাক্টর ০.৫ এর কম হলে একটি ওয়াটমিটার উল্টো (ঋণাত্মক) পাঠ দেয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Connecting CC in parallel across line: Low resistance causes immediate dead short circuit!',
      'Ignoring negative reading of W2 at low power factors: You must subtract W2 from W1 ($P = W1 - W2$), not add them as absolute values.',
      'Confusing active power ($W_1 + W_2$) with reactive power ($Q = \\sqrt{3}(W_1 - W_2)$).'
    ],
    hi: [
      'CC को लाइन के समांतर जोड़ना: कम प्रतिरोध से तुरंत डेड शॉर्ट सर्किट हो जाएगा!',
      'कम पावर फैक्टर पर W2 के ऋणात्मक मान की उपेक्षा करना: आपको $P = W1 - W2$ करना होगा, न कि जोड़ना।',
      'सक्रिय शक्ति ($W_1 + W_2$) को प्रतिक्रियाशील शक्ति ($Q = \\sqrt{3}(W_1 - W_2)$) से मिलाना।'
    ],
    bn: [
      'CC কে সমান্তরালে যুক্ত করা: কম রেজিস্ট্যান্সের কারণে ডেড শর্ট সার্কিট হয়ে যাবে!',
      'কম পাওয়ার ফ্যাক্টরে W2 এর ঋণাত্মক পাঠ উপেক্ষা করা: দুটি যোগ না করে $P = W1 - W2$ বিয়োগ করতে হয়।',
      'এক্টিভ পাওয়ার ($W_1 + W_2$) ও রিএক্টিভ পাওয়ারের ($Q = \\sqrt{3}(W_1 - W_2)$) মধ্যে গুলিয়ে ফেলা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-wm-1',
      question: {
        en: 'In a 3-phase power measurement using the two-wattmeter method, one wattmeter reads zero when the load power factor is:',
        hi: 'टू-वाटमीटर विधि का उपयोग करके 3-फेज शक्ति मापन में, लोड पावर फैक्टर कितना होने पर एक वाटमीटर शून्य पढ़ता है?',
        bn: 'টু-ওয়াটমিটার পদ্ধতিতে ৩-ফেজ পাওয়ার মাপার সময় লোডের পাওয়ার ফ্যাক্টর কত হলে একটি ওয়াটমিটার শূন্য দেখায়?'
      },
      options: [
        { id: 'a', text: { en: '1.0 (Unity)', hi: '1.0 (इकाई)', bn: '১.০ (ইউনিটি)' } },
        { id: 'b', text: { en: '0.866', hi: '0.866', bn: '০.৮৬৬' } },
        { id: 'c', text: { en: '0.5', hi: '0.5', bn: '০.৫' } },
        { id: 'd', text: { en: '0.0 (Zero)', hi: '0.0 (शून्य)', bn: '০.০ (জিরো)' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'When PF = 0.5, φ = 60°. Wattmeter W2 = V L I L cos(30° + 60°) = V L I L cos(90°) = 0.',
        hi: 'जब PF = 0.5, φ = 60°। W2 = V L I L cos(30° + 60°) = cos(90°) = 0।',
        bn: 'পাওয়ার ফ্যাক্টর ০.৫ হলে φ = ৬০°। W2 = V L I L cos(৩০° + ৬০°) = cos(৯০°) = ০।'
      }
    },
    {
      id: 'mcq-ch3-wm-2',
      question: {
        en: 'The pressure coil of an electrodynamometer wattmeter should be:',
        hi: 'इलेक्ट्रोडायनेमोमीटर वाटमीटर की प्रेशर कॉइल कैसी होनी चाहिए?',
        bn: 'ইলেক্ট্রোডায়নামোমিটার ওয়াটমিটারের প্রেসার কয়েল কেমন হওয়া উচিত?'
      },
      options: [
        { id: 'a', text: { en: 'Highly inductive', hi: 'अत्यधिक प्रेरक', bn: 'উচ্চ ইন্ডাক্টিভ' } },
        { id: 'b', text: { en: 'Highly capacitive', hi: 'अत्यधिक धारितीय', bn: 'উচ্চ ক্যাপাসিটিভ' } },
        { id: 'c', text: { en: 'Purely resistive (non-inductive)', hi: 'विशुद्ध प्रतिरोधी (गैर-प्रेरक)', bn: 'বিশুদ্ধ রেজিস্ট্রেভ (নন-ইন্ডাক্টিভ)' } },
        { id: 'd', text: { en: 'Low resistance thick wire', hi: 'कम प्रतिरोध वाला मोटा तार', bn: 'কম রেজিস্ট্যান্সের মোটা তার' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'To ensure the pressure coil current is exactly in phase with the supply voltage (i_p = v/R_p), the PC circuit must be purely non-inductive.',
        hi: 'यह सुनिश्चित करने के लिए कि प्रेशर कॉइल करंट वोल्टेज के साथ ठीक फेज में रहे, PC परिपथ विशुद्ध गैर-प्रेरक होना चाहिए।',
        bn: 'প্রেসার কয়েলের কারেন্ট যেন ভোল্টেজের সাথে ঠিক সমফেজে থাকে, তাই পিসি সার্কিট সম্পূর্ণ নন-ইন্ডাক্টিভ হতে হয়।'
      }
    },
    {
      id: 'mcq-ch3-wm-3',
      question: {
        en: 'Reactive power in a 3-phase balanced circuit measured using two wattmeter readings is given by:',
        hi: 'टू-वाटमीटर पाठ्यांकों का उपयोग करके 3-फेज संतुलित परिपथ में प्रतिक्रियाशील शक्ति (Reactive Power) किससे दी जाती है?',
        bn: 'টু-ওয়াটমিটারের পাঠ দিয়ে ৩-ফেজ সুষম সার্কিটে রিএক্টিভ পাওয়ার (Reactive Power) নির্ণয়ের সূত্র কোনটি?'
      },
      options: [
        { id: 'a', text: { en: 'W1 + W2', hi: 'W1 + W2', bn: 'W1 + W2' } },
        { id: 'b', text: { en: 'W1 - W2', hi: 'W1 - W2', bn: 'W1 - W2' } },
        { id: 'c', text: { en: '√3 (W1 - W2)', hi: '√3 (W1 - W2)', bn: '√3 (W1 - W2)' } },
        { id: 'd', text: { en: '(W1 + W2) / √3', hi: '(W1 + W2) / √3', bn: '(W1 + W2) / √3' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'Since W1 - W2 = V L I L sin φ, total 3-phase reactive power Q = √3 V L I L sin φ = √3 (W1 - W2).',
        hi: 'चूँकि W1 - W2 = V L I L sin φ, कुल 3-फेज प्रतिक्रियाशील शक्ति Q = √3 (W1 - W2)।',
        bn: 'যেহেতু W1 - W2 = V L I L sin φ, তাই মোট ৩-ফেজ রিএক্টিভ পাওয়ার Q = √3 (W1 - W2)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-wm-1',
      question: {
        en: 'Derive the expression for total active power and power factor angle φ using the Two-Wattmeter method for a balanced 3-phase star-connected load.',
        hi: 'संतुलित 3-फेज स्टार-संयोजित लोड के लिए टू-वाटमीटर विधि द्वारा कुल सक्रिय शक्ति एवं पावर फैक्टर कोण φ का व्यंजक व्युत्पन्न करें।',
        bn: 'স্টার সংযোগের ৩-ফেজ সুষম লোডের জন্য টু-ওয়াটমিটার পদ্ধতিতে মোট এক্টিভ পাওয়ার ও পাওয়ার ফ্যাক্টর কোণের (φ) সূত্রটি প্রতিপাদন করো।'
      },
      hint: {
        en: 'Write expressions for $W_1 = V_L I_L \\cos(30^\\circ - \\phi)$ and $W_2 = V_L I_L \\cos(30^\\circ + \\phi)$, then compute $W_1 + W_2$ and $W_1 - W_2$.',
        hi: '$W_1 = V_L I_L \\cos(30^\\circ - \\phi)$ और $W_2 = V_L I_L \\cos(30^\\circ + \\phi)$ लिखें, फिर योग और अंतर ज्ञात करें।',
        bn: '$W_1$ ও $W_2$ এর সূত্র লিখে তাদের যোগফল ও বিয়োগফলের অনুপাত বের করো।'
      },
      answerKey: {
        en: '1) $W_1 = V_L I_L \\cos(30^\\circ - \\phi)$, $W_2 = V_L I_L \\cos(30^\\circ + \\phi)$.\n2) Sum: $W_1 + W_2 = V_L I_L [\\cos(30^\\circ-\\phi) + \\cos(30^\\circ+\\phi)] = 2 V_L I_L \\cos 30^\\circ \\cos \\phi = \\sqrt{3} V_L I_L \\cos \\phi = P_{3\\phi}$.\n3) Difference: $W_1 - W_2 = V_L I_L [\\cos(30^\\circ-\\phi) - \\cos(30^\\circ+\\phi)] = 2 V_L I_L \\sin 30^\\circ \\sin \\phi = V_L I_L \\sin \\phi$.\n4) Ratio: $\\frac{W_1 - W_2}{W_1 + W_2} = \\frac{\\sin \\phi}{\\sqrt{3} \\cos \\phi} = \\frac{\\tan \\phi}{\\sqrt{3}} \\implies \\tan \\phi = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}$.',
        hi: '1) $W_1 = V_L I_L \\cos(30^\\circ - \\phi)$, $W_2 = V_L I_L \\cos(30^\\circ + \\phi)$।\n2) योग: $W_1 + W_2 = \\sqrt{3} V_L I_L \\cos \\phi = P_{3\\phi}$।\n3) अंतर: $W_1 - W_2 = V_L I_L \\sin \\phi$।\n4) अनुपात: $\\tan \\phi = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}$।',
        bn: '১) $W_1 = V_L I_L \\cos(30^\\circ - \\phi)$, $W_2 = V_L I_L \\cos(30^\\circ + \\phi)।\n২) যোগফল: $W_1 + W_2 = \\sqrt{3} V_L I_L \\cos \\phi = P_{3\\phi}$।\n৩) বিয়োগফল: $W_1 - W_2 = V_L I_L \\sin \\phi$।\n৪) অনুপাত: $\\tan \\phi = \\sqrt{3} \\frac{W_1 - W_2}{W_1 + W_2}$।'
      }
    },
    {
      id: 'pq-ch3-wm-2',
      question: {
        en: 'Explain why one wattmeter gives a negative reading when the load power factor falls below 0.5 in the two-wattmeter method, and how to record the correct reading.',
        hi: 'समझाएं कि टू-वाटमीटर विधि में जब लोड पावर फैक्टर 0.5 से कम हो जाता है तो एक वाटमीटर ऋणात्मक पाठ्यांक क्यों देता है, और सही पाठ्यांक कैसे दर्ज करें।',
        bn: 'ব্যাখ্যা করো কেন টু-ওয়াটমিটার পদ্ধতিতে লোডের পাওয়ার ফ্যাক্টর ০.৫ এর কম হলে একটি ওয়াটমিটার ঋণাত্মক পাঠ দেয় এবং সঠিক পাঠ কীভাবে রেকর্ড করতে হয়।'
      },
      hint: {
        en: 'Check the angle $(30^\circ + \phi)$ when $\phi > 60^\circ$ ($\cos \phi < 0.5$). Cosine becomes negative!',
        hi: 'जब $\phi > 60^\circ$ ($\cos \phi < 0.5$) हो तो कोण $(30^\circ + \phi)$ जांचें। कोसाइन ऋणात्मक हो जाता है!',
        bn: 'যখন $\phi > ৬০^\circ$ হয়, তখন $(৩০^\circ + \phi)$ কোণের মান ৯০° ছাড়িয়ে যায়, ফলে cosine এর মান ঋণাত্মক হয়।'
      },
      answerKey: {
        en: '1) Reason: When power factor < 0.5, phase angle $\\phi > 60^\\circ$. Hence $(30^\\circ + \\phi) > 90^\\circ$. Since $\\cos(\\text{angle} > 90^\\circ)$ is negative, $W_2 = V_L I_L \\cos(30^\\circ + \\phi)$ becomes negative and pointer attempts to deflect below zero.\n2) Solution: Reverse the connections of either the Current Coil (CC) or Pressure Coil (PC) to bring the deflection on scale. Record this reading as negative ($ -W_2 $), and calculate total active power as $P = W_1 - W_2$.',
        hi: '1) कारण: जब पावर फैक्टर < 0.5 होता है, तो कोण $\\phi > 60^\\circ$ होता है। अतः $(30^\\circ + \\phi) > 90^\\circ$ हो जाता है। चूँकि $\\cos(> 90^\\circ)$ ऋणात्मक होता है, इसलिए $W_2$ ऋणात्मक हो जाता है।\n2) समाधान: CC या PC में से किसी एक के कनेक्शन रिवर्स करें। इस पाठ्यांक को ऋणात्मक ($ -W_2 $) मानें और कुल शक्ति $P = W_1 - W_2$ के रूप में निकालें।',
        bn: '১) কারণ: পাওয়ার ফ্যাক্টর ০.৫ এর কম হলে $\\phi > ৬০^\circ$ হয়। ফলে $(৩০^\circ + \\phi) > ৯০^\circ$ হওয়ায় $\\cos(> ৯০^\circ)$ মান ঋণাত্মক আসে এবং $W_2$ এর মান ঋণাত্মক দেখায়।\n২) সমাধান: কারেন্ট কয়েল বা প্রেসার কয়েলের যেকোনো একটির প্রান্ত উল্টে দিয়ে কাঁটাকে সোজা সরাতে হয়। এই পাঠকে ঋণাত্মক ধরে মোট পাওয়ার $P = W_1 - W_2$ হিসেবে হিসাব করা হয়।'
      }
    }
  ]
};

export const CHAPTER_3_LESSONS_PART2: Record<string, Lesson> = {
  "ch3-thermal-instruments": LESSON_THERMAL_INSTRUMENTS,
  "ch3-ammeter-voltmeter": LESSON_AMMETER_VOLTMETER,
  "ch3-digital-instruments": LESSON_DIGITAL_INSTRUMENTS,
  "ch3-energy-measurement": LESSON_ENERGY_MEASUREMENT,
  "ch3-wattmeter-power": LESSON_WATTMETER_POWER,
};
