import { Lesson } from '../types';

export const LESSON_CRO_OSCILLOSCOPE: Lesson = {
  id: 'lsn-ch3-cro-oscilloscope',
  topicId: 'ch3-cro-oscilloscope',
  order: 12,
  title: {
    en: 'CRO & Oscilloscope',
    hi: 'सीआरओ एवं ऑसिलोस्कोप (CRO & Oscilloscope)',
    bn: 'সিআরও ও অসিলোস্কোপ (CRO & Oscilloscope)'
  },
  easyExplanation: {
    en: 'A Cathode Ray Oscilloscope (CRO) is a versatile electronic instrument that draws a visual graph of electrical signals over time on a screen. It allows engineers to directly observe waveform shapes, measure peak-to-peak voltage, period, frequency, and phase shift!',
    hi: 'कैथोड रे ऑसिलोस्कोप (CRO) एक बहुमुखी इलेक्ट्रॉनिक उपकरण है जो स्क्रीन पर समय के साथ विद्युत संकेतों का एक दृश्य आरेख (ग्राफ) खींचता है। यह इंजीनियरों को तरंगों के आकार को सीधे देखने, पीक-टू-पीक वोल्टेज, समय अवधि, आवृत्ति और फेज़ शिफ्ट को मापने की अनुमति देता है!',
    bn: 'ক্যাথোড রে অসিলোস্কোপ (CRO) হলো এমন একটি অত্যন্ত ব্যবহারকারী-বান্ধব ইলেকট্রনিক যন্ত্র যা সময়ের সাথে বৈদ্যুতিক সিগন্যালের চিত্র বা ওয়েভফর্ম স্ক্রিনে ফুটিয়ে তোলে। এর মাধ্যমে তরঙ্গের আকৃতি, পিক-টু-পিক ভোল্টেজ, পর্যায়কাল, ফ্রিকোয়েন্সি ও ফেজ পরিবর্তন সরাসরি মাপা যায়!'
  },
  detailedExplanation: {
    en: 'The Cathode Ray Oscilloscope (CRO) is an extremely fast X-Y plotter displaying voltage (vertical Y-axis) against time (horizontal X-axis).\n\n1. Core Functional Blocks of a CRO:\n   a) Cathode Ray Tube (CRT):\n      • Electron Gun: Heats cathode to emit electrons via thermionic emission, accelerated by high positive voltage anodes.\n      • Deflection Systems: Vertical deflection plates (Y-axis) deflect beam according to input voltage signal; Horizontal deflection plates (X-axis) deflect beam according to time base sweep voltage.\n      • Fluorescent Screen: Coated with phosphor (e.g. Zinc Orthosilicate), emitting visible light spot when struck by high-velocity electrons.\n   b) Vertical Amplifier & Attenuator: Scales input voltage signal to suit screen height via Volt/div control.\n   c) Delay Line: Delays vertical signal slightly (~200 ns) so time-base sweep generator can synchronize with signal start.\n   d) Time Base Generator (Sawtooth Wave Generator): Generates linear sweep voltage ($V_x \\propto t$) to sweep electron beam horizontally at constant speed across screen.\n   e) Trigger Circuit: Synchronizes horizontal sweep start with vertical signal waveform so displayed trace appears stationary.\n\n2. Key Oscilloscope Measurements:\n   • Peak-to-Peak Voltage: $V_{p-p} = (\\text{Vertical Divisions}) \\times (\\text{Volt/div setting})$.\n   • Peak Voltage: $V_p = \\frac{V_{p-p}}{2}$.\n   • RMS Voltage (Sine Wave): $V_{rms} = \\frac{V_p}{\\sqrt{2}} = 0.707 \\times V_p$.\n   • Time Period: $T = (\\text{Horizontal Divisions for 1 cycle}) \\times (\\text{Time/div setting})$.\n   • Signal Frequency: $f = \\frac{1}{T}$.\n\n3. Modern Digital Storage Oscilloscope (DSO):\n   DSOs digitize analog input signals using ultra-fast Flash ADCs, store digitized samples in high-speed RAM memory, and display continuous waveforms on digital LCD panels with auto-measurement functions.',
    hi: 'कैथोड रे ऑसिलोस्कोप (CRO) वास्तुकला और माप विधियां:\n\n1. CRO के मुख्य कार्यात्मक ब्लॉक:\n   a) कैथोड रे ट्यूब (CRT):\n      • इलेक्ट्रॉन गन: थर्मिओनिक उत्सर्जन द्वारा इलेक्ट्रॉन उत्सर्जित करती है।\n      • विक्षेपण प्रणाली (Deflection System): ऊर्ध्वाधर प्लेटें (Y-अक्ष) इनपुट वोल्टेज के अनुसार और क्षैतिज प्लेटें (X-अक्ष) टाइम-बेस वोल्टेज के अनुसार बीम को मोड़ती हैं।\n      • फ्लोरोसेंट स्क्रीन: फॉस्फोर लेपित स्क्रीन जो इलेक्ट्रॉनों के टकराने पर चमकती है।\n   b) टाइम बेस जनरेटर (Sawtooth Generator): स्थिर गति से बीम को क्षैतिज रूप से घुमाने के लिए आरी के दांत के आकार का (Sawtooth) वोल्टेज बनाता है।\n   c) ट्रिगर सर्किट: क्षैतिज स्वीप को इनपुट सिग्नल के साथ समन्वयित (Synchronize) करता है ताकि वेवफॉर्म स्थिर दिखे।\n\n2. CRO माप सूत्र:\n   • पीक-टू-पीक वोल्टेज: $V_{p-p} = (\\text{ऊर्ध्वाधर खाने}) \\times (\\text{Volt/div})$।\n   • समय अवधि: $T = (\\text{एक चक्र के क्षैतिज खाने}) \\times (\\text{Time/div})$।\n   • आवृत्ति: $f = \\frac{1}{T}$।',
    bn: 'ক্যাথোড রে অসিলোস্কোপের (CRO) গঠন ও পরিমাপ প্রণালী:\n\n১. প্রধান ব্লকসমূহ:\n   ক) ক্যাথোড রে টিউব (CRT): ইলেকট্রন গান (থার্মায়নিক নির্গমন), ডিফ্লেকশন প্লেট (Y-অক্ষ ও X-অক্ষ) এবং ফসফর স্ক্রিন।\n   খ) টাইম বেস জেনারেটর: এটি স-টুথ (Sawtooth) ভোল্টেজ তৈরি করে যার মাধ্যমে স্ক্রিনে বাঁদিক থেকে ডানদিকে ইলেকট্রন বিম ধ্রুব বেগে যায়।\n   গ) ট্রিগার সার্কিট: ইনপুট সিগন্যালের সাথে টাইম বেসকে সিঙ্ক্রোনাইজ করে স্থির চিত্র তৈরি করে।\n\n২. পরিমাপের সমীকরণসমূহ:\n   • পিক-টু-পিক ভোল্টেজ: $V_{p-p} = (\\text{ভার্টিকাল বিভাগ}) \\times (\\text{Volt/div})$।\n   • পর্যায়কাল: $T = (\\text{১টি সাইকেলের হরিজন্টাল বিভাগ}) \\times (\\text{Time/div})$।\n   • ফ্রিকোয়েন্সি: $f = \\frac{1}{T}$।'
  },
  formulas: [
    {
      symbol: 'V_{p-p}',
      expression: 'V_{p-p} = \\text{Vertical Divisions} \\times \\text{Volt/div}',
      description: {
        en: 'Peak-to-Peak Voltage = Number of vertical scale divisions × Volt/div setting',
        hi: 'पीक-टू-पीक वोल्टेज = ऊर्ध्वाधर खानों की संख्या × Volt/div सेटिंग',
        bn: 'পিক-টু-পিক ভোল্টেজ = ভার্টিকাল ঘরের সংখ্যা × Volt/div সেটিং'
      }
    },
    {
      symbol: 'T',
      expression: 'T = \\text{Horizontal Divisions for 1 Cycle} \\times \\text{Time/div}',
      description: {
        en: 'Time Period = Horizontal scale divisions for 1 complete cycle × Time/div setting',
        hi: 'समय अवधि = 1 पूर्ण चक्र के लिए क्षैतिज खानों की संख्या × Time/div सेटिंग',
        bn: 'পর্যায়কাল = ১টি পুরো সাইকেলের হরিজন্টাল ঘরের সংখ্যা × Time/div সেটিং'
      }
    },
    {
      symbol: 'f',
      expression: 'f = \\frac{1}{T}',
      description: {
        en: 'Frequency = 1 / Time Period (Hz)',
        hi: 'आवृत्ति = 1 / समय अवधि (हर्ट्ज़)',
        bn: 'ফ্রিকোয়েন্সি = ১ / পর্যায়কাল (Hz)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-cro-block',
      title: {
        en: 'Block Diagram of a Cathode Ray Oscilloscope (CRO)',
        hi: 'कैथोड रे ऑसिलोस्कोप (CRO) का ब्लॉक आरेख',
        bn: 'ক্যাথোড রে অসিলোস্কোপের ব্লক চিত্র'
      },
      caption: {
        en: 'CRT showing Electron Gun, Deflection Plates, Screen alongside Vertical & Horizontal Amplifiers and Time-Base Generator.',
        hi: 'CRT में इलेक्ट्रॉन गन, विक्षेपण प्लेटें, स्क्रीन के साथ वर्टिकल व हॉरिजॉन्टल एम्पलीफायर और टाइम-बेस जनरेटर।',
        bn: 'CRT ইলেকট্রন গান, ডিফ্লেকশন প্লেট, স্ক্রিনের সাথে ভার্টিকাল ও হরিজন্টাল অ্যাম্প্লিফায়ার।'
      },
      svgType: 'cro-oscilloscope'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-cro-1',
      problem: {
        en: 'A sinusoidal AC voltage waveform displayed on a CRO screen occupies 6 vertical divisions peak-to-peak. One complete waveform cycle covers 4 horizontal divisions. The CRO knob settings are Volt/div = 2 V/div and Time/div = 0.5 ms/div. Calculate:\n1) Peak-to-Peak Voltage ($V_{p-p}$)\n2) RMS Voltage ($V_{rms}$)\n3) Time Period ($T$)\n4) Signal Frequency ($f$)',
        hi: 'CRO स्क्रीन पर प्रदर्शित एक साइनसोइडल एसी वोल्टेज तरंग पीक-टू-पीक 6 ऊर्ध्वाधर खाने घेरती है। एक पूर्ण तरंग चक्र 4 क्षैतिज खाने घेरता है। CRO नॉब सेटिंग्स हैं: Volt/div = 2 V/div और Time/div = 0.5 ms/div। गणना करें:\n1) पीक-टू-पीक वोल्टेज ($V_{p-p}$)\n2) RMS वोल्टेज ($V_{rms}$)\n3) समय अवधि ($T$)\n4) सिग्नल आवृत्ति ($f$)',
        bn: 'একটি সিআরো স্ক্রিনে সাইন ওয়েভ ফর্মের পিক-টু-পিক বিস্তার ৬ টি ভার্টিকাল ঘর এবং ১ টি পূর্ণ সাইকেল ৪ টি হরিজন্টাল ঘর অধিকার করে। নোব সেটিং: Volt/div = 2 V/div এবং Time/div = 0.5 ms/div। বের করো:\n১) পিক-टू-পিক ভোল্টেজ ($V_{p-p}$)\n২) আরএমএস ভোল্টেজ ($V_{rms}$)\n৩) পর্যায়কাল ($T$)\n৪) ফ্রিকোয়েন্সি ($f$)'
      },
      givenValues: {
        'Vertical Divisions': '6 div',
        'Horizontal Divisions': '4 div',
        'Volt/div': '2 V/div',
        'Time/div': '0.5 ms/div'
      },
      solution: {
        en: '1) $V_{p-p} = 6 \\text{ div} \\times 2 \\text{ V/div} = 12 \\text{ V}$.\n2) Peak Voltage $V_p = \\frac{V_{p-p}}{2} = \\frac{12}{2} = 6 \\text{ V}$.\n   RMS Voltage $V_{rms} = 0.707 \\times 6 \\text{ V} = 4.242 \\text{ V}$.\n3) $T = 4 \\text{ div} \\times 0.5 \\text{ ms/div} = 2.0 \\text{ ms} = 2.0 \\times 10^{-3} \\text{ s}$.\n4) $f = \\frac{1}{T} = \\frac{1}{2.0 \\times 10^{-3} \\text{ s}} = 500 \\text{ Hz}$.',
        hi: '1) $V_{p-p} = 6 \\times 2 = 12 \\text{ V}$।\n2) $V_p = 12 / 2 = 6 \\text{ V}$। $V_{rms} = 0.707 \\times 6 = 4.242 \\text{ V}$।\n3) $T = 4 \\times 0.5 \\text{ ms} = 2.0 \\text{ ms}$।\n4) $f = \\frac{1}{2.0 \\times 10^{-3}} = 500 \\text{ Hz}$।',
        bn: '১) $V_{p-p} = ৬ \\times ২ = ১২ \\text{ V}$।\n২) $V_p = ১২ / ২ = ৬ \\text{ V}$। $V_{rms} = ০.৭০৭ \\times ৬ = ৪.২৪২ \\text{ V}$।\n৩) $T = ৪ \\times ০.৫ = ২.০ \\text{ ms} = ২.০ \\times ১০^{-৩} \\text{ s}$।\n৪) $f = \\frac{১}{২.০ \\times ১০^{-৩}} = ৫০০ \\text{ Hz}$।'
      },
      finalAnswer: {
        en: 'Vp-p = 12 V, Vrms = 4.24 V, T = 2.0 ms, f = 500 Hz',
        hi: 'Vp-p = 12 V, Vrms = 4.24 V, T = 2.0 ms, f = 500 Hz',
        bn: 'Vp-p = ১২ V, Vrms = ৪.২৪ V, T = ২.০ ms, f = ৫০০ Hz'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Visualizing audio and radio frequency waveform distortion in electronics design.',
      'Measuring phase differences between current and voltage in AC circuits.',
      'Troubleshooting digital pulse clocks and microprocessor bus signals in computer systems.'
    ],
    hi: [
      'इलेक्ट्रॉनिक्स डिजाइन में ऑडियो और रेडियो आवृत्ति तरंग विकृति (Distortion) को देखना।',
      'एसी सर्किट में धारा और वोल्टेज के बीच फेज़ अंतर को मापना।',
      'कंप्यूटर सिस्टम में डिजिटल पल्स क्लॉक और माइक्रोप्रोसेसर सिग्नल की ट्रबलशूटिंग।'
    ],
    bn: [
      'ইলেকট্রনিক্স ডিজাইনে অডিও ও রেডিও ফ্রিকোয়েন্সি ওয়েভফর্ম টেস্ট করা।',
      'এসি সার্কিটে ভোল্টেজ ও কারেন্টের মধ্যে ফেজ পার্থক্য মাপা।',
      'ডিজিটাল পালস ক্লক ও মাইক্রোপ্রসেসর বাস সিগন্যাল ট্রাবলশুটিং করা।'
    ]
  },
  importantPoints: {
    en: [
      'CRO displays voltage (Y-axis) versus time (X-axis).',
      'Vertical deflecting plates move electron beam up/down according to input voltage.',
      'Horizontal deflecting plates move beam left to right driven by Sawtooth Time-Base Generator.',
      'Delay line delays vertical signal so horizontal sweep syncs with signal trace.',
      'Frequency $f = 1/T$, where $T = \\text{Horizontal divs} \\times \\text{Time/div}$.',
      'Digital Storage Oscilloscopes (DSOs) store waveforms digitally in memory using fast ADCs.'
    ],
    hi: [
      'CRO वोल्टेज (Y-अक्ष) बनाम समय (X-अक्ष) प्रदर्शित करता है।',
      'वर्टिकल डिफ्लेक्टिंग प्लेट्स इनपुट वोल्टेज के अनुसार इलेक्ट्रॉन बीम को ऊपर/नीचे ले जाती हैं।',
      'हॉरिज़ॉन्टल डिफ्लेक्टिंग प्लेट्स टाइम-बेस जनरेटर द्वारा बीम को बाएं से दाएं ले जाती हैं।',
      'डिले लाइन वर्टिकल सिग्नल को थोड़ा विलंबित करती है ताकि स्वीप सिंक हो सके।',
      'डिजिटल स्टोरेज ऑसिलोस्कोप (DSO) ADC का उपयोग करके तरंगों को डिजिटल रूप से स्टोर करते हैं।'
    ],
    bn: [
      'CRO সময়ের (X-অক্ষ) সাপেক্ষে ভোল্টেজ (Y-অক্ষ) প্রদর্শন করে।',
      'ভার্টিকাল ডিফ্লেকশন প্লেট ইলেকট্রন বিমকে ওপরে-নিচে সরায়।',
      'হরিজন্টাল ডিফ্লেকশন প্লেট স-টুথ ভোল্টেজের সাহায্যে বিমকে বাঁদিক থেকে ডানদিকে টানে।',
      'ডিলে লাইন ভার্টিকাল সিগন্যালকে সামান্য দেরি করায় যাতে সিঙ্ক্রোনাইজেশন মসৃণ হয়।',
      'ডিজিটাল অসিলোস্কোপ (DSO) দ্রুত এডিবি (ADC) দিয়ে সিগন্যাল ডিজিটাল মেমোরিতে জমা রাখে।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Peak Voltage ($V_p$) with Peak-to-Peak Voltage ($V_{p-p}$): Peak-to-Peak is the entire distance from bottom crest to top crest ($2 \\times V_p$).',
      'Forgetting to multiply grid divisions by the corresponding knob setting (Volt/div or Time/div).',
      'Using uncalibrated probe attenuation (e.g. 10X probe connected while CRO is set to 1X mode), giving a 10-fold reading error.'
    ],
    hi: [
      'पीक वोल्टेज ($V_p$) को पीक-टू-पीक वोल्टेज ($V_{p-p}$) के साथ भ्रमित करना: पीक-टू-पीक सबसे निचले गर्त से सबसे ऊंचे शिखर तक की पूरी दूरी है ($2 \\times V_p$)।',
      'नॉब सेटिंग (Volt/div या Time/div) से ग्रिड खानों को गुणा करना भूल जाना।',
      '10X प्रोब का उपयोग करते समय CRO को 1X मोड पर रखना, जिससे 10 गुना माप त्रुटि होती है।'
    ],
    bn: [
      'পিক ভোল্টেজ ($V_p$) ও পিক-টু-পিক ভোল্টেজকে ($V_{p-p}$) গুলিয়ে ফেলা: পিক-টু-পিক হলো পুরো তরঙ্গের শীর্ষ থেকে সর্বনিম্ন বিন্দুর দূরত্ব।',
      'স্কেলের ঘর সংখ্যাকে নোব সেটিং দিয়ে গুণ করতে ভুলে যাওয়া।',
      '১০X প্রোব লাগিয়ে সিআরো ১X মোডে রাখলে ১০ গুণ ভুলের সৃষ্টি হওয়া।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-cro-1',
      question: {
        en: 'The horizontal deflection plates of a Cathode Ray Oscilloscope are supplied with which type of waveform signal?',
        hi: 'कैथोड रे ऑसिलोस्कोप की क्षैतिज विक्षेपण प्लेटों को किस प्रकार का वेवफॉर्म सिग्नल दिया जाता है?',
        bn: 'ক্যাথোড রে অসিলোস্কোপের হরিজন্টাল ডিফ্লেকশন প্লেটে কোন ধরণের সিগন্যাল সরবরাহ করা হয়?'
      },
      options: [
        { id: 'a', text: { en: 'Sinusoidal wave', hi: 'साइनसोइडल तरंग', bn: 'সাইন ওয়েভ' } },
        { id: 'b', text: { en: 'Square wave', hi: 'वर्ग तरंग', bn: 'স্কয়ার ওয়েভ' } },
        { id: 'c', text: { en: 'Sawtooth wave', hi: 'आरी के दांत जैसी (Sawtooth) तरंग', bn: 'স-টুথ (Sawtooth) ওয়েভ' } },
        { id: 'd', text: { en: 'Triangular wave', hi: 'त्रिभुजाकार तरंग', bn: 'ট্রায়াঙ্গুলার ওয়েভ' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'The Time Base Generator produces a linear Sawtooth wave that sweeps the electron beam horizontally across the screen at a constant uniform speed.',
        hi: 'टाइम बेस जनरेटर एक रेखीय Sawtooth तरंग पैदा करता है जो इलेक्ट्रॉन बीम को स्क्रीन पर एक समान गति से क्षैतिज रूप से घुमाती है।',
        bn: 'টাইম বেস জেনারেটর স-টুথ ওয়েভ তৈরি করে যা ইলেকট্রন বিমকে ধ্রুব বেগে বাঁ থেকে ডানে টেনে নিয়ে যায়।'
      }
    },
    {
      id: 'mcq-ch3-cro-2',
      question: {
        en: 'What is the function of the Delay Line circuit in a CRO?',
        hi: 'CRO में डिले लाइन (Delay Line) सर्किट का क्या कार्य है?',
        bn: 'সিআরো (CRO) তে ডিলে লাইন সার্কিটের কাজ কী?'
      },
      options: [
        { id: 'a', text: { en: 'To amplify vertical signal', hi: 'ऊर्ध्वाधर सिग्नल को बढ़ाना', bn: 'ভার্টিকাল সিগন্যাল বিবর্ধিত করা' } },
        { id: 'b', text: { en: 'To delay vertical signal so time base generator can synchronize sweep start', hi: 'ऊर्ध्वाधर सिग्नल को विलंबित करना ताकि टाइम बेस जनरेटर स्वीप शुरू होने को सिंक कर सके', bn: 'ভার্টিকাল সিগন্যাল সামান্য দেরি করানো যাতে স-টুথ সুইপ সিঙ্ক্রোনাইজ হতে পারে' } },
        { id: 'c', text: { en: 'To heat the CRT cathode', hi: 'CRT कैथोड को गर्म करना', bn: 'ক্যাথোড গরম করা' } },
        { id: 'd', text: { en: 'To attenuate high voltages', hi: 'उच्च वोल्टेज को कम करना', bn: 'ভোল্টেজ কমানো' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'It delays the signal going to the vertical Y-plates by about 200 ns to give the trigger and sweep generator enough time to start.',
        hi: 'यह Y-प्लेटों पर जाने वाले सिग्नल में लगभग 200 ns का विलंब उत्पन्न करता है ताकि ट्रिगर और स्वीप जनरेटर शुरू हो सके।',
        bn: 'এটি সিগন্যালকে প্রায় ২০০ ns দেরি করায় যাতে সুইপ জেনারেটর সিগন্যালটি শুরুর সাথেই চালিত হতে পারে।'
      }
    },
    {
      id: 'mcq-ch3-cro-3',
      question: {
        en: 'If a signal covers 5 horizontal divisions for one cycle on a CRO set at 2 ms/div, what is its frequency?',
        hi: 'यदि 2 ms/div पर सेट CRO पर एक चक्र के लिए एक सिग्नल 5 क्षैतिज खाने घेरता है, तो इसकी आवृत्ति क्या है?',
        bn: 'যদি ২ ms/div সেটিংয়ে ১টি পূর্ণ সাইকেল ৫টি ঘর দখল করে, তবে ফ্রিকোয়েন্সি কত?'
      },
      options: [
        { id: 'a', text: { en: '50 Hz', hi: '50 Hz', bn: '৫০ Hz' } },
        { id: 'b', text: { en: '100 Hz', hi: '100 Hz', bn: '১০০ Hz' } },
        { id: 'c', text: { en: '200 Hz', hi: '200 Hz', bn: '২০০ Hz' } },
        { id: 'd', text: { en: '500 Hz', hi: '500 Hz', bn: ' ৫০০ Hz' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: '$T = 5 \\times 2 \\text{ ms} = 10 \\text{ ms} = 0.01 \\text{ s}$. Frequency $f = 1 / 0.01 = 100 \\text{ Hz}$. Wait, $1 / 0.01 = 100 \\text{ Hz}$.',
        hi: '$T = 5 \\times 2 = 10 \\text{ ms} = 0.01 \\text{ s}$। आवृत्ति $f = 1 / 0.01 = 100 \\text{ Hz}$।',
        bn: '$T = ৫ \\times ২ = ১০ \\text{ ms} = ০.০১ \\text{ s}$। ফ্রিকোয়েন্সি $f = ১ / ০.০১ = ১০০ \\text{ Hz}$।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-cro-1',
      question: {
        en: 'Draw a labelled functional block diagram of a Cathode Ray Oscilloscope (CRO) and explain the significance of the Time Base Generator and Trigger Circuit.',
        hi: 'कैथोड रे ऑसिलोस्कोप (CRO) का लेबल युक्त ब्लॉक आरेख बनाएं और टाइम बेस जनरेटर और ट्रिगर सर्किट के महत्व की व्याख्या करें।',
        bn: 'একটি ক্যাথোড রে অসিলোস্কোপের চিহ্নিত ব্লক চিত্র অঙ্কন করো এবং টাইম বেস জেনারেটর ও ট্রিগার সার্কিটের গুরুত্ব ব্যাখ্যা করো।'
      },
      hint: {
        en: 'Explain how the Sawtooth wave sweeps the beam horizontally while vertical signal drives vertical plates.',
        hi: 'व्याख्या करें कि कैसे Sawtooth तरंग बीम को क्षैतिज रूप से घुमाती है जबकि वर्टिकल सिग्नल वर्टिकल प्लेटों को चलाता है।',
        bn: 'স-টুথ ভোল্টেজ কীভাবে ইলেকট্রন বিমকে ডানে সরায় তা ব্যাখ্যা করো।'
      },
      answerKey: {
        en: '1) CRT Components: Electron gun emits/accelerates beam, Vertical plates (Y-signal input), Horizontal plates (X-timebase sweep), Phosphor screen.\n2) Time Base Generator: Produces a linear Sawtooth sweep voltage ($V_x \\propto t$). It drives the electron beam at a uniform speed horizontally from left to right across screen, then rapidly flies back to left.\n3) Trigger Circuit: Extracts synchronization pulses from the input waveform to start horizontal sweep at the exact same point in every cycle, making the displayed wave stationary and readable.',
        hi: '1) CRT घटक: इलेक्ट्रॉन गन बीम उत्सर्जित करती है, वर्टिकल प्लेट्स (Y-सिग्नल), हॉरिज़ॉन्टल प्लेट्स (X-टाइमबेस), फॉस्फोर स्क्रीन।\n2) टाइम बेस जनरेटर: रेखीय Sawtooth वोल्टेज उत्पन्न करता है जो बीम को समान गति से बाएं से दाएं घुमाता है।\n3) ट्रिगर सर्किट: प्रत्येक चक्र में एक ही बिंदु पर स्वीप शुरू करने के लिए इनपुट सिग्नल से सिंक पल्स निकालता है जिससे वेवफॉर्म स्थिर दिखता है।',
        bn: '১) CRT অংশসমূহ: ইলেকট্রন গান, ভার্টিকাল ডিফ্লেকশন প্লেট, হরিজন্টাল প্লেট ও ফসফর স্ক্রিন।\n২) টাইম বেস জেনারেটর: স-টুথ ভোল্টেজ তৈরি করে স্ক্রিনে বিমকে সমবেগে বাঁ থেকে ডানে নিয়ে যায়।\n৩) ট্রিগার সার্কিট: প্রতি সাইকেলের নির্দিষ্ট একই স্থান থেকে সুইপ শুরু করে ওয়েভফর্মকে স্ক্রিনে স্থির রাখতে সাহায্য করে।'
      }
    },
    {
      id: 'pq-ch3-cro-2',
      question: {
        en: 'How are voltage, time period, and frequency measured using a CRO? Write down the relevant mathematical equations.',
        hi: 'CRO का उपयोग करके वोल्टेज, समय अवधि और आवृत्ति कैसे मापी जाती है? प्रासंगिक गणितीय समीकरण लिखें।',
        bn: 'সিআরো (CRO) ব্যবহার করে কীভাবে ভোল্টেজ, পর্যায়কাল ও ফ্রিকোয়েন্সি পরিমাপ করা হয়? প্রয়োজনীয় সমীকরণসমূহ লেখো।'
      },
      hint: {
        en: '$V_{p-p} = \\text{Vertical divisions} \\times \\text{Volt/div}$, $T = \\text{Horizontal divisions} \\times \\text{Time/div}$, $f = 1/T$.',
        hi: '$V_{p-p} = \\text{ऊर्ध्वाधर खाने} \\times \\text{Volt/div}$, $T = \\text{क्षैतिज खाने} \\times \\text{Time/div}$, $f = 1/T$।',
        bn: '$V_{p-p} = \\text{ভার্টিকাল ঘর} \\times \\text{Volt/div}$, $T = \\text{হরিজন্টাল ঘর} \\times \\text{Time/div}$, $f = ১/T$।'
      },
      answerKey: {
        en: '1) Voltage Measurement: Count peak-to-peak vertical grid divisions ($N_y$). Peak-to-Peak Voltage $V_{p-p} = N_y \\times (\\text{Volt/div setting})$. Peak voltage $V_p = V_{p-p}/2$. RMS Voltage $V_{rms} = V_p / \\sqrt{2}$.\n2) Time Period Measurement: Count horizontal grid divisions for 1 complete waveform cycle ($N_x$). Time Period $T = N_x \\times (\\text{Time/div setting})$.\n3) Frequency Calculation: Signal frequency $f = \\frac{1}{T}$ Hz.',
        hi: '1) वोल्टेज माप: ऊर्ध्वाधर ग्रिड खाने ($N_y$) गिनें। $V_{p-p} = N_y \\times (\\text{Volt/div})$। $V_{rms} = 0.707 \\times (V_{p-p}/2)$।\n2) समय अवधि माप: 1 चक्र के क्षैतिज खाने ($N_x$) गिनें। $T = N_x \\times (\\text{Time/div})$।\n3) आवृत्ति: $f = 1/T$ Hz।',
        bn: '১) ভোল্টেজ পরিমাপ: ভার্টিকাল ঘরের সংখ্যা ($N_y$) গুনে $V_{p-p} = N_y \\times (\\text{Volt/div})$। $V_{rms} = ০.৭০৭ \\times (V_{p-p}/২)$।\n২) পর্যায়কাল পরিমাপ: ১টি পুরো তরঙ্গের জন্য হরিজন্টাল ঘরের সংখ্যা ($N_x$) গুনে $T = N_x \\times (\\text{Time/div})$।\n৩) ফ্রিকোয়েন্সি: $f = ১/T$ Hz।'
      }
    }
  ]
};

export const LESSON_TRANSDUCERS: Lesson = {
  id: 'lsn-ch3-transducers',
  topicId: 'ch3-transducers',
  order: 13,
  title: {
    en: 'Transducers',
    hi: 'ट्रांसड्यूसर (Transducers)',
    bn: 'ট্রান্সডিউসার (Transducers)'
  },
  easyExplanation: {
    en: 'A transducer is a device that converts physical quantities (like temperature, pressure, force, displacement, or light intensity) into easily measurable electrical signals (voltage, current, or resistance change). Sensors sense the physical change, while transducers convert it into electrical output!',
    hi: 'एक ट्रांसड्यूसर एक ऐसा उपकरण है जो भौतिक मात्राओं (जैसे तापमान, दबाव, बल, विस्थापन, या प्रकाश की तीव्रता) को आसानी से मापने योग्य विद्युत संकेतों (वोल्टेज, धारा, या प्रतिरोध परिवर्तन) में बदलता है। सेंसर भौतिक परिवर्तन को भांपते हैं, जबकि ट्रांसड्यूसर इसे विद्युत आउटपुट में बदलते हैं!',
    bn: 'ট্রান্সডিউসার হলো এমন এক ধরণের যন্ত্র যা অ-বৈদ্যুতিক ভৌত রাশিকে (যেমন তাপমাত্রা, চাপ, বল, সরণ, বা আলোর তীব্রতা) সহজে পরিমাপযোগ্য বৈদ্যুतिक সিগন্যালে (ভোল্টেজ, কারেন্ট বা রেজিস্ট্যান্স পরিবর্তন) রূপান্তর করে!'
  },
  detailedExplanation: {
    en: 'Transducers form the essential bridge between the physical physical world and electronic measurement/control instrumentation systems.\n\n1. Sensor vs Transducer:\n   • Sensor: Senses physical input and produces a non-electrical or electrical signal (e.g. mercury expansion in thermometer).\n   • Transducer: Specifically converts non-electrical physical energy into a proportional electrical signal.\n\n2. Classification of Transducers:\n   a) Active vs Passive:\n      • Active Transducers (Self-generating): Generate their own electrical voltage/current output without requiring external power. Examples: Thermocouple (Seebeck effect), Piezoelectric crystal, Photovoltaic solar cell.\n      • Passive Transducers: Require an external DC or AC excitation power source to function. Examples: LVDT, RTD, Strain Gauge, Thermistor, Potentiometer.\n   b) Primary vs Secondary:\n      • Primary Transducer: Directly senses physical quantity (e.g. Bourdon tube sensing pressure, converting it into displacement).\n      • Secondary Transducer: Converts the primary output into electrical output (e.g. LVDT connected to Bourdon tube).\n   c) Analog vs Digital:\n      • Analog Transducer: Continuous electrical output signal (e.g. LVDT, Thermocouple).\n      • Digital Transducer: Discrete digital pulses or digital codes (e.g. Shaft Encoder).\n\n3. Key Transducer Characteristics:\n   • Sensitivity ($S$): Ratio of electrical output change to physical input change $S = \\frac{\\Delta \\text{Output}}{\\Delta \\text{Input}}$.\n   • Linearity: Constancy of sensitivity across the entire operating range.\n   • Resolution: Smallest detectable change in input physical quantity.\n\n4. Major Industrial Transducers:\n   a) LVDT (Linear Variable Differential Transformer): Measures linear displacement using a movable soft iron core inside 1 primary and 2 secondary AC coils connected in series opposition ($V_{out} = V_{s1} - V_{s2}$).\n   b) RTD (Resistance Temperature Detector): Metal wire (usually Platinum Pt100) whose resistance increases linearly with temperature: $R_T = R_0(1 + \\alpha \\Delta T)$.\n   c) Thermocouple: Two dissimilar metal wires joined at two junctions creating a thermal EMF proportional to temperature difference ($e = a\\Delta T + b(\\Delta T)^2$).\n   d) Strain Gauge: Measures mechanical strain using fractional change in resistance: Gauge Factor $GF = \\frac{\\Delta R / R}{\\Delta L / L}$.',
    hi: 'ट्रांसड्यूसर का वर्गीकरण एवं सिद्धांत:\n\n1. एक्टिव बनाम पैसिव ट्रांसड्यूसर:\n   • एक्टिव (स्व-उत्पादक): बाहरी शक्ति की आवश्यकता नहीं होती। उदा: थर्मोकपल, पीजोइलेक्ट्रिक क्रिस्टल, फोटोवोल्टिक सेल।\n   • पैसिव: काम करने के लिए बाहरी बिजली की आवश्यकता होती है। उदा: LVDT, RTD, स्ट्रेन गेज, थर्मिस्टर।\n\n2. मुख्य ट्रांसड्यूसर:\n   a) LVDT (रैखिक चर अंतर ट्रांसफॉर्मर): 1 प्राथमिक और 2 द्वितीयक कुंडलियों के साथ चुंबकीय कोर के विस्थापन को वोल्टेज में बदलता है ($V_{out} = V_{s1} - V_{s2}$)।\n   b) RTD (Pt100): तापमान के साथ प्लेटिनम तार का प्रतिरोध बढ़ता है ($R_T = R_0(1 + \\alpha \\Delta T)$)।\n   c) स्ट्रेन गेज (Strain Gauge): यांत्रिक खिंचाव को प्रतिरोध परिवर्तन में बदलता है। गेज फैक्टर $GF = \\frac{\\Delta R / R}{\\Delta L / L}$।',
    bn: 'ট্রান্সডিউসারের শ্রেণিবিভাগ ও মূলনীতি:\n\n১. অ্যাক্টিভ বনাম প্যাসিভ ট্রান্সডিউসার:\n   • অ্যাক্টিভ: কোনো বাহ্যিক বিদ্যুৎ সরবরাহের প্রয়োজন ছাড়া নিজে থেকেই ভোল্টেজ বা কারেন্ট তৈরি করে। উদাহরণ: থার্মোকাপল, পিজোইলেকট্রিক ক্রিস্টাল।\n   • প্যাসিভ: কাজ করার জন্য বাইরে থেকে বিদ্যুৎ দিতে হয়। উদাহরণ: LVDT, RTD, স্ট্রেন গেজ।\n\n২. গুরুত্বপূর্ণ শিল্প উপাদানসমূহ:\n   ক) LVDT: কোর স্থানান্তরের মাধ্যমে সরণকে সমানু পাতিক ভোল্টেজে রূপান্তর করে ($V_{out} = V_{s1} - V_{s2}$)।\n   খ) RTD (Pt100): তাপমাত্রা বাড়লে ধাতব তারের রেজিস্ট্যান্স বাড়ে ($R_T = R_0(1 + \\alpha \\Delta T)$)।\n   গ) স্ট্রেন গেজ: বিকৃতি বা স্ট্রেনকে রেজিস্ট্যান্সের পরিবর্তনে প্রকাশ করে। गेজ ফ্যাক্টর $GF = \\frac{\\Delta R / R}{\\Delta L / L}$।'
  },
  formulas: [
    {
      symbol: 'R_T',
      expression: 'R_T = R_0 (1 + \\alpha \\Delta T)',
      description: {
        en: 'RTD Resistance at T°C = Resistance at 0°C × (1 + temperature coefficient α × temperature rise ΔT)',
        hi: 'T°C पर RTD प्रतिरोध = 0°C पर प्रतिरोध × (1 + तापमान गुणांक α × तापमान वृद्धि ΔT)',
        bn: 'T°C তাপমাত্রায় RTD রেজিস্ট্যান্স = 0°C এর রেজিস্ট্যান্স × (১ + তাপমাত্রা গুণক α × তাপমাত্রা বৃদ্ধি ΔT)'
      }
    },
    {
      symbol: 'GF',
      expression: 'GF = \\frac{\\Delta R / R_0}{\\Delta L / L_0} = \\frac{\\Delta R / R_0}{\\epsilon}',
      description: {
        en: 'Strain Gauge Factor = Fractional change in resistance / Mechanical strain (ε)',
        hi: 'स्ट्रेन गेज फैक्टर = प्रतिरोध में आंशिक परिवर्तन / यांत्रिक स्ट्रेन (ε)',
        bn: 'স্ট্রেন গেজ ফ্যাক্টর = রেজিস্ট্যান্সের আনুপাতিক পরিবর্তন / যান্ত্রিক স্ট্রেন (ε)'
      }
    },
    {
      symbol: 'S',
      expression: 'S = \\frac{\\Delta V_{out}}{\\Delta x}',
      description: {
        en: 'Transducer Sensitivity = Output Voltage Change / Input Displacement Change',
        hi: 'ट्रांसड्यूसर संवेदनशीलता = आउटपुट वोल्टेज परिवर्तन / इनपुट विस्थापन परिवर्तन',
        bn: 'ট্রান্সডিউসার সেন্সিটিভিটি = আউটপুট ভোল্টেজ পরিবর্তন / ইনপুট সরণ পরিবর্তন'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-transducer-chain',
      title: {
        en: 'Block Diagram of Measurement System with Transducer Chain',
        hi: 'ट्रांसड्यूसर श्रृंखला के साथ मापन प्रणाली का ब्लॉक आरेख',
        bn: 'ট্রান্সডিউসার চেইনসহ পরিমাপ ব্যবস্থার ব্লক ডায়াগ্রাম'
      },
      caption: {
        en: 'Physical Quantity -> Primary Sensing Element -> Secondary Transducer -> Signal Conditioning -> Display.',
        hi: 'भौतिक मात्रा -> प्राथमिक संवेदन तत्व -> द्वितीयक ट्रांसड्यूसर -> सिग्नल कंडीशनिंग -> डिस्प्ले।',
        bn: 'ভৌত রাশি -> প্রাইমারি সেন্সর -> সেকেন্ডারি ট্রান্সডিউসার -> সিগন্যাল প্রসেসিং -> ডিসপ্লে।'
      },
      svgType: 'transducers-concept'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-trans-1',
      problem: {
        en: 'A Platinum RTD (Pt100) has a resistance of $100\\,\\Omega$ at $0^\\circ\\text{C}$. Its temperature coefficient of resistance is $\\alpha = 0.00385\\,^\\circ\\text{C}^{-1}$. Calculate:\n1) Resistance of the RTD at $150^\\circ\\text{C}$.\n2) Change in resistance per degree Celsius rise in temperature.',
        hi: 'एक प्लेटिनम RTD (Pt100) का $0^\\circ\\text{C}$ पर प्रतिरोध $100\\,\\Omega$ है। इसका प्रतिरोध तापमान गुणांक $\\alpha = 0.00385\\,^\\circ\\text{C}^{-1}$ है। गणना करें:\n1) $150^\\circ\\text{C}$ पर RTD का प्रतिरोध।\n2) प्रति डिग्री सेल्सियस तापमान वृद्धि पर प्रतिरोध में परिवर्तन।',
        bn: 'একটি প্লাটিনাম RTD (Pt100) এর $0^\\circ\\text{C}$ এ রেজিস্ট্যান্স $100\\,\\Omega$। এর তাপমাত্রা গুণক $\\alpha = 0.00385\\,^\\circ\\text{C}^{-1}$। বের করো:\n১) $150^\\circ\\text{C}$ এ RTD এর রেজিস্ট্যান্স।\n২) প্রতি ডিগ্রি সেলসিয়াস তাপমাত্রা বৃদ্ধিতে রেজিস্ট্যান্স পরিবর্তনের পরিমাণ।'
      },
      givenValues: {
        'R0': '100 Ω',
        'T': '150 °C',
        'α': '0.00385 /°C'
      },
      solution: {
        en: '1) $R_{150} = R_0 (1 + \\alpha \\Delta T) = 100 \\times [1 + 0.00385 \\times (150 - 0)] = 100 \\times [1 + 0.5775] = 100 \\times 1.5775 = 157.75\\,\\Omega$.\n2) Change in resistance per °C = $R_0 \\times \\alpha = 100 \\times 0.00385 = 0.385\\,\\Omega/^\\circ\\text{C}$.',
        hi: '1) $R_{150} = 100 \\times (1 + 0.00385 \\times 150) = 100 \\times 1.5775 = 157.75\\,\\Omega$।\n2) प्रति °C परिवर्तन = $100 \\times 0.00385 = 0.385\\,\\Omega/^\\circ\\text{C}$।',
        bn: '১) $R_{১৫০} = ১০০ \\times (১ + ০.০০৩৮৫ \\times ১৫০) = ১০০ \\times ১.৫৭৭৫ = ১৫৭.৭৫\\,\\Omega$।\n২) প্রতি °C এ রেজিস্ট্যান্স বৃদ্ধি = ১০০ \\times ০.০০৩৮৫ = ০.৩৮৫\\,\\Omega/^\\circ\\text{C}$।'
      },
      finalAnswer: {
        en: 'R(150°C) = 157.75 Ω, Sensitivity = 0.385 Ω/°C',
        hi: 'R(150°C) = 157.75 Ω, संवेदनशीलता = 0.385 Ω/°C',
        bn: 'R(150°C) = ১৫৭.৭৫ Ω, সেন্সিটিভিটি = ০.৩৮৫ Ω/°C'
      }
    }
  ],
  practicalApplications: {
    en: [
      'LVDT for precision thickness measurement and valve position feedback in industrial automation.',
      'RTDs and Thermocouples for temperature control in boilers, furnaces, and HVAC systems.',
      'Strain gauges in digital weighbridges, crane load cells, and structural health monitoring.'
    ],
    hi: [
      'औद्योगिक स्वचालन में सटीकता से मोटाई मापने और वाल्व स्थिति फीडबैक के लिए LVDT।',
      'बॉहिलर, भट्ठी (Furnaces) और HVAC सिस्टम में तापमान नियंत्रण के लिए RTD और थर्मोकपल।',
      'डिजिटल वेब्रिज, क्रेन लोड सेल और संरचनात्मक स्वास्थ्य निगरानी में स्ट्रेन गेज।'
    ],
    bn: [
      'শিল্প কারখানায় সূক্ষ্ম পুরুত্ব মাপা ও ভালভ পজিশন কন্ট্রোলে LVDT।',
      'বয়লার, ফার্নেস ও শীতাতপ নিয়ন্ত্রণ ব্যবস্থায় তাপমাত্রা নিয়ন্ত্রণে RTD ও থার্মোকাপল।',
      'ডিজিটাল ওয়েbridge, ক্রেন লোড সেল ও সিভিল ব্রিজের ভার মাপায় স্ট্রেন গেজ।'
    ]
  },
  importantPoints: {
    en: [
      'Transducer converts non-electrical physical energy into proportional electrical signal.',
      'Active transducers (Thermocouple, Piezoelectric) generate self-voltage output without external DC supply.',
      'Passive transducers (LVDT, RTD, Strain gauge) require external excitation power supply.',
      'LVDT measures linear displacement with zero mechanical friction and high resolution.',
      'RTD Platinum Pt100 has positive temperature coefficient ($100\\,\\Omega$ at $0^\\circ\\text{C}$).',
      'Strain Gauge Factor $GF = (\\Delta R / R) / \\epsilon$ (typically $GF \\approx 2.0$ for metallic gauges).'
    ],
    hi: [
      'ट्रांसड्यूसर गैर-विद्युत भौतिक ऊर्जा को आनुपातिक विद्युत सिग्नल में बदलता है।',
      'एक्टिव ट्रांसड्यूसर (थर्मोकपल, पीजोइलेक्ट्रिक) बिना बाहरी बिजली के स्वयं वोल्टेज उत्पन्न करते हैं।',
      'पैसिव ट्रांसड्यूसर (LVDT, RTD, स्ट्रेन गेज) को बाहरी उत्तेजना बिजली आपूर्ति की आवश्यकता होती है।',
      'LVDT बिना किसी यांत्रिक घर्षण के उच्च रेजोल्यूशन के साथ विस्थापन मापता है।',
      'गेज फैक्टर $GF = (\\Delta R / R) / \\epsilon$ (धात्विक गेज के लिए $GF \\approx 2.0$)।'
    ],
    bn: [
      'ট্রান্সডিউসার অ-বৈদ্যুতিক ভৌত শক্তিকে সমানু পাতিক বৈদ্যুতিক সিগন্যালে রূপান্তর করে।',
      'অ্যাক্টিভ ট্রান্সডিউসার (থার্মোকাপল, পিজোইলেকট্রিক) বাইরের ভোল্টেজ ছাড়াই কাজ করে।',
      'প্যাসিভ ট্রান্সডিউসার (LVDT, RTD, স্ট্রেন গেজ) এর জন্য বাইরের পাওয়ার সাপ্লাই প্রয়োজন।',
      'LVDT কোনো প্রকার ঘর্ষণ ছাড়াই অত্যন্ত নির্ভুল সরণ মাপে।',
      'মেটালিক স্ট্রেন গেজের ক্ষেত্রে গেজ ফ্যাক্টর $GF \\approx ২.০$ হয়ে থাকে।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing Active and Passive Transducers: Remembering that Thermocouple generates its own voltage (Active), whereas RTD is a simple resistor requiring current flow (Passive).',
      'Mixing up Thermistor and RTD: Thermistor usually has a negative temperature coefficient (NTC, resistance decreases with temperature), while RTD has a positive temperature coefficient (PTC).',
      'Incorrectly placing Strain Gauges without thermal compensation, introducing temperature drift errors.'
    ],
    hi: [
      'एक्टिव और पैसिव ट्रांसड्यूसर में भ्रमित होना: याद रखें कि थर्मोकपल अपना वोल्टेज स्वयं उत्पन्न करता है (एक्टिव), जबकि RTD एक प्रतिरोधक है जिसे धारा की आवश्यकता होती है (पैसिव)।',
      'थर्मिस्टर और RTD में भ्रम: थर्मिस्टर में आमतौर पर ऋणात्मक तापमान गुणांक (NTC) होता है, जबकि RTD में धनात्मक तापमान गुणांक (PTC) होता है।',
      'तापमान मुआवजे के बिना स्ट्रेन गेज लगाना, जिससे तापमान में बदलाव के कारण त्रुटियां होती हैं।'
    ],
    bn: [
      'অ্যাক্টিভ ও প্যাসিভ ট্রান্সডিউসার ভুল বোঝাস: থার্মোকাপল নিজের ভোল্টেজ নিজে তৈরি করে (অ্যাক্টিভ), কিন্তু RTD চালাতে বিদ্যুৎ সাপ্লাই লাগে (প্যাসিভ)।',
      'থার্মিস্টর ও RTD এর পার্থক্য গুলিয়ে ফেলা: থার্মিস্টরের সাধারণত নেগেটিভ টেম্পারেচার কোএফিশিয়েন্ট (NTC) থাকে, আর RTD এর পজিটিভ (PTC)।',
      'তাপমাত্রা পরিবর্তনের ক্ষতিপূরণ (Temperature Compensation) ছাড়া স্ট্রেন গেজ বসিয়ে ভুল মান পাওয়া।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-trans-1',
      question: {
        en: 'Which of the following is an example of an Active Transducer?',
        hi: 'निम्नलिखित में से कौन सा एक एक्टिव ट्रांसड्यूसर का उदाहरण है?',
        bn: 'নিচের কোনটি একটি অ্যাক্টিভ ট্রান্সডিউসারের উদাহরণ?'
      },
      options: [
        { id: 'a', text: { en: 'LVDT', hi: 'LVDT', bn: 'LVDT' } },
        { id: 'b', text: { en: 'Thermocouple', hi: 'थर्मोकपल (Thermocouple)', bn: 'থার্মোকাপল (Thermocouple)' } },
        { id: 'c', text: { en: 'Platinum RTD', hi: 'प्लेटिनम RTD', bn: 'প্লাটিনাম RTD' } },
        { id: 'd', text: { en: 'Strain Gauge', hi: 'स्ट्रेन गेज', bn: 'স্ট্রেন গেজ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Thermocouples generate their own thermal EMF voltage via the Seebeck effect without requiring an external electrical power source.',
        hi: 'थर्मोकपल बिना किसी बाहरी विद्युत शक्ति स्रोत के सीबेक प्रभाव के माध्यम से अपना स्वयं का थर्मल EMF वोल्टेज उत्पन्न करते हैं।',
        bn: 'থার্মোকাপল সিবেক এফেক্টের মাধ্যমে কোনো প্রকার বাইরের পাওয়ার সাপ্লাই ছাড়াই নিজের ভোল্টেজ নিজেই তৈরি করে।'
      }
    },
    {
      id: 'mcq-ch3-trans-2',
      question: {
        en: 'An LVDT (Linear Variable Differential Transformer) is used to measure which physical quantity?',
        hi: 'LVDT (रैखिक चर अंतर ट्रांसफॉर्मर) का उपयोग किस भौतिक मात्रा को मापने के लिए किया जाता है?',
        bn: 'LVDT প্রধানত কোন ভৌত রাশি পরিমাপ করতে ব্যবহৃত হয়?'
      },
      options: [
        { id: 'a', text: { en: 'Temperature', hi: 'तापमान', bn: 'তাপমাত্রা' } },
        { id: 'b', text: { en: 'Linear Displacement', hi: 'रैखिक विस्थापन (Displacement)', bn: 'রৈখিক সরণ (Linear Displacement)' } },
        { id: 'c', text: { en: 'Frequency', hi: 'आवृत्ति', bn: 'ফ্রিকোয়েন্সি' } },
        { id: 'd', text: { en: 'Light Intensity', hi: 'प्रकाश की तीव्रता', bn: 'আলোর তীব্রতা' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'LVDT converts small linear mechanical core displacements into proportional AC output voltage.',
        hi: 'LVDT छोटे यांत्रिक कोर विस्थापन को आनुपातिक एसी आउटपुट वोल्टेज में बदलता है।',
        bn: 'LVDT সামান্য রৈখিক সরণকে সমানু পাতিক এসি ভোল্টেজে রূপান্তর করে।'
      }
    },
    {
      id: 'mcq-ch3-trans-3',
      question: {
        en: 'What is the nominal resistance of a standard Pt100 RTD at 0°C?',
        hi: '0°C पर एक मानक Pt100 RTD का नाममात्र प्रतिरोध क्या होता है?',
        bn: '০°C তাপমাত্রায় একটি সাধারণ Pt100 RTD-এর রেজিস্ট্যান্স কত?'
      },
      options: [
        { id: 'a', text: { en: '10 Ω', hi: '10 Ω', bn: '১০ Ω' } },
        { id: 'b', text: { en: '50 Ω', hi: '50 Ω', bn: '৫০ Ω' } },
        { id: 'c', text: { en: '100 Ω', hi: '100 Ω', bn: '১০০ Ω' } },
        { id: 'd', text: { en: '1000 Ω', hi: '1000 Ω', bn: '১০০০ Ω' } }
      ],
      correctOptionId: 'c',
      explanation: {
        en: 'The name Pt100 signifies Platinum wire with exactly 100 Ω resistance at 0°C.',
        hi: 'Pt100 नाम का अर्थ है प्लेटिनम तार जिसका 0°C पर ठीक 100 Ω प्रतिरोध होता है।',
        bn: 'Pt100 নামের ১০০০ নয়, ১০০ সংখ্যাটি নির্দেশ করে ০°C এ এর রেজিস্ট্যান্স ঠিক ১০০ ওহম।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-trans-1',
      question: {
        en: 'Distinguish clearly between Active and Passive transducers with suitable examples for each.',
        hi: 'उपयुक्त उदाहरणों के साथ एक्टिव और पैसिव ट्रांसड्यूसर के बीच स्पष्ट अंतर स्पष्ट करें।',
        bn: 'উপযুক্ত উদাহরণসহ অ্যাক্টিভ ও প্যাসিভ ট্রান্সডিউসারের মধ্যে পার্থক্য স্পষ্ট করো।'
      },
      hint: {
        en: 'Active = self-generating output (Thermocouple, Piezoelectric). Passive = needs external excitation supply (LVDT, RTD, Strain Gauge).',
        hi: 'एक्टिव = स्व-उत्पादक आउटपुट (थर्मोकपल)। पैसिव = बाहरी आपूर्ति की आवश्यकता है (LVDT, RTD)।',
        bn: 'অ্যাক্টিভ = নিজস্ব পাওয়ার তৈরি করে। প্যাসিভ = বাইরে থেকে বিদ্যুৎ দিতে হয়।'
      },
      answerKey: {
        en: '1) Active Transducers: Generate their own output voltage/current signal directly from physical energy input without external power. Examples: Thermocouple (thermal -> voltage), Piezoelectric crystal (pressure -> voltage), Photovoltaic cell (light -> voltage).\n2) Passive Transducers: Do not generate electrical power directly; they alter an electrical parameter (resistance, inductance, capacitance) when physical quantity changes, requiring an external power supply to produce voltage/current. Examples: LVDT (inductance change), RTD (resistance change), Strain Gauge (resistance change).',
        hi: '1) एक्टिव ट्रांसड्यूसर: बिना किसी बाहरी बिजली के सीधे भौतिक ऊर्जा से अपना आउटपुट वोल्टेज उत्पन्न करते हैं। उदाहरण: थर्मोकपल, पीजोइलेक्ट्रिक क्रिस्टल।\n2) पैसिव ट्रांसड्यूसर: सीधे बिजली पैदा नहीं करते, बल्कि भौतिक मात्रा बदलने पर प्रतिरोध/प्रेरकत्व बदलते हैं जिसके लिए बाहरी बिजली स्रोत की आवश्यकता होती है। उदाहरण: LVDT, RTD, स्ट्रेन गेज।',
        bn: '১) অ্যাক্টিভ ট্রান্সডিউসার: বাইরে থেকে কোনো পাওয়ার সাপ্লাই ছাড়াই ভৌত শক্তি থেকে নিজস্ব ভোল্টেজ বা কারেন্ট তৈরি করে। উদাহরণ: থার্মোকাপল, পিজোইলেকট্রিক স্পটিক।\n২) প্যাসিভ ট্রান্সডিউসার: ভৌত পরিবর্তনের সাপেক্ষে নিজের রেজিস্ট্যান্স, ইনডাক্ট্যান্স বা ক্যাপাসিট্যান্স পরিবর্তন করে, তাই চালনার জন্য বাইরের বিদ্যুৎ সরবরাহের প্রয়োজন হয়। উদাহরণ: LVDT, RTD, স্ট্রেন গেজ।'
      }
    },
    {
      id: 'pq-ch3-trans-2',
      question: {
        en: 'Explain the working construction and operation of an LVDT with neat diagram.',
        hi: 'स्वच्छ आरेख के साथ LVDT के कार्य और संरचना की व्याख्या करें।',
        bn: 'সুন্দর চিত্রসহ LVDT-এর গঠন ও কার্যপ্রণালী ব্যাখ্যা করো।'
      },
      hint: {
        en: 'Describe 1 primary winding, 2 identical secondary windings in series opposition, and a movable soft iron core.',
        hi: '1 प्राथमिक वाइंडिंग, 2 समान द्वितीयक वाइंडिंग (श्रृंखला विरोध में) और एक चल नरम लोहे के कोर का वर्णन करें।',
        bn: '১টি প্রাইমারি ও ২ টি বিপরীতমুখী সেকেন্ডারি কয়েল এবং ভেতরের চলমান কোরের কথা উল্লেখ করো।'
      },
      answerKey: {
        en: '1) Construction: Consists of a cylindrical former holding 1 central Primary winding ($P_1$) energized by AC voltage, and 2 identical Secondary windings ($S_1, S_2$) placed symmetrically on either side connected in series opposition. A movable soft iron core is placed inside the former attached to the object being measured.\n2) Working Operation:\n   • Core at Null (Center): Flux linkages $S_1$ and $S_2$ are equal $\\implies V_{s1} = V_{s2} \\implies V_{out} = V_{s1} - V_{s2} = 0\\text{ V}$.\n   • Core Displaced Left: $S_1$ flux increases $\\implies V_{s1} > V_{s2} \\implies V_{out}$ in phase with primary.\n   • Core Displaced Right: $S_2$ flux increases $\\implies V_{s2} > V_{s1} \\implies V_{out}$ 180° out of phase.\n3) Magnitude of $V_{out}$ is directly proportional to displacement magnitude $|x|$.',
        hi: '1) संरचना: बेलनाकार पूर्व पर 1 प्राथमिक वाइंडिंग और 2 समान द्वितीयक वाइंडिंग होती हैं जो श्रृंखला विरोध में जुड़ी होती हैं। एक चल नरम लोहे की कोर अंदर रखी जाती है।\n2) कार्यप्रणाली: जब कोर केंद्र (Null) में होती है, तो $V_{s1} = V_{s2} \\implies V_{out} = 0$। कोर के बाईं या दाईं ओर विस्थापित होने पर, आउटपुट वोल्टेज $V_{out} = |V_{s1} - V_{s2}|$ विस्थापन के सीधे आनुपातिक होता है।',
        bn: '১) গঠন: এতে ১টি প্রাইমারি কয়েল ও এর দুই পাশে ২টি সমান সেকেন্ডারি কয়েল শ্রেণি-বিপরীত সংযোগে থাকে। মাঝে একটি চলমান নরম লোহার কোর থাকে।\n২) কার্যপ্রণালী: কোরটি ঠিক মাঝখানে থাকলে $V_{s1} = V_{s2} \\implies V_{out} = 0$। কোর যেকোনো একদিকে সরলে সংশ্লিষ্ট কয়েলের ভোল্টেজ বাড়ে এবং নেট ভোল্টেজ $V_{out} = |V_{s1} - V_{s2}|$ সরণের সমানুপাতিক হয়।'
      }
    }
  ]
};

export const LESSON_BRIDGES_RESISTANCE: Lesson = {
  id: 'lsn-ch3-bridges-resistance',
  topicId: 'ch3-bridges-resistance',
  order: 14,
  title: {
    en: 'Bridges & Resistance Measurement',
    hi: 'ब्रिज एवं प्रतिरोध मापन (Bridges & Resistance Measurement)',
    bn: 'ব্রিজ ও রেজিস্ট্যান্স পরিমাপ (Bridges & Resistance Measurement)'
  },
  easyExplanation: {
    en: 'Bridge circuits compare an unknown resistance against known standard resistances to obtain extremely accurate measurements. The famous Wheatstone Bridge balances four resistive arms until zero current flows through a detector galvanometer!',
    hi: 'ब्रिज सर्किट अत्यधिक सटीक माप प्राप्त करने के लिए अज्ञात प्रतिरोध की तुलना ज्ञात मानक प्रतिरोधों से करते हैं। प्रसिद्ध व्हीटस्टोन ब्रिज चार प्रतिरोधक भुजाओं को तब तक संतुलित करता है जब तक कि गैल्वेनोमीटर से शून्य धारा न बहे!',
    bn: 'ব্রিজ সার্কিট হলো জানা মানের রেজিস্ট্যান্সের সাথে তুলনা করে অজানা রেজিস্ট্যান্স নিখুঁতভাবে মাপার অন্যতম সেরা উপায়। বিখ্যাত হুইটস্টোন ব্রিজ ৪ টি বাহুর সাম্যাবস্থা তৈরি করে গ্যালভান মিটারে শূন্য কারেন্ট এনে নিরপেক্ষ পাঠ নিশ্চিত করে!'
  },
  detailedExplanation: {
    en: 'Resistance measurement methods are categorized according to the resistance magnitude:\n\n1. Classification of Resistance Values:\n   • Low Resistance ($R < 1\\,\\Omega$): Armature windings, contact resistance, transformer leads. Measured using Kelvin Double Bridge.\n   • Medium Resistance ($1\\,\\Omega \\le R \\le 100\\text{ k}\\Omega$): Electronic components, heating elements. Measured using Wheatstone Bridge, Voltmeter-Ammeter method.\n   • High Resistance ($R > 100\\text{ k}\\Omega$): Cable insulation, winding insulation. Measured using Megohmmeter (Megger), Loss of Charge method.\n\n2. Wheatstone Bridge Principle:\n   • Consists of 4 resistance arms ($R_1, R_2, R_3, R_x$), a DC voltage supply source $V$, and a sensitive zero-center Galvanometer detector $G$.\n   • Balance / Null Condition: Resistors are adjusted until zero current passes through galvanometer ($I_g = 0$).\n   • Under null balance, voltage at node B equals voltage at node D:\n     $$I_1 R_1 = I_2 R_2 \\quad \\text{and} \\quad I_1 R_3 = I_2 R_x$$\n   • Dividing the two equations gives the fundamental balance relation:\n     $$\\frac{R_1}{R_2} = \\frac{R_3}{R_x} \\implies R_x = R_3 \\times \\left(\\frac{R_2}{R_1}\\right)$$\n   • $R_1, R_2$ are known as ratio arms, $R_3$ is standard adjustable arm, $R_x$ is unknown resistance.\n\n3. Kelvin Double Bridge for Low Resistance ($< 1\\,\\Omega$):\n   • Ordinary Wheatstone bridges fail for low resistance due to lead wire and contact resistances ($r_{lead} \\approx 0.01\\,\\Omega$).\n   • Kelvin Double Bridge uses a second set of ratio arms ($p, q$) to cancel out the connecting lead resistance $r$, ensuring exact measurement of low resistances down to $0.0001\\,\\Omega$.\n\n4. Megohmmeter (Megger) for High Resistance ($> 0.1\\text{ M}\\Omega$):\n   • Megger is a portable instrument containing a hand-cranked DC generator (or battery inverter generating 500 V / 1000 V DC) and a ratio meter movement (Coil A for voltage, Coil B for current).\n   • Insulation Resistance $R_{ins} = \\frac{V}{I}$. Higher resistance gives higher deflection toward infinity.',
    hi: 'प्रतिरोध मापन एवं व्हीटस्टोन ब्रिज सिद्धांत:\n\n1. मान के आधार पर वर्गीकरण:\n   • निम्न प्रतिरोध ($< 1\\,\\Omega$): केल्विन डबल ब्रिज (सम्पर्क प्रतिरोध त्रुटि दूर करने हेतु)।\n   • मध्यम प्रतिरोध ($1\\,\\Omega - 100\\text{ k}\\Omega$): व्हीटस्टोन ब्रिज ($\x5Cfrac{R_1}{R_2} = \\frac{R_3}{R_x}$)।\n   • उच्च प्रतिरोध ($> 100\\text{ k}\\Omega$): मेगर (Megger / मेगाह्ममीटर) इंसुलेशन मापने हेतु।\n\n2. व्हीटस्टोन ब्रिज संतुलन स्थिति:\n   जब गैल्वेनोमीटर में शून्य धारा ($I_g = 0$) होती है:\n   $$\\frac{R_1}{R_2} = \\frac{R_3}{R_x} \\implies R_x = R_3 \\times \\frac{R_2}{R_1}$$\n\n3. केल्विन डबल ब्रिज: दोहरे अनुपात वाली भुजाओं ($p, q$) का उपयोग करके लेड तार प्रतिरोध को समाप्त करता है।',
    bn: 'রেজিস্ট্যান্স পরিমাপ ও হুইটস্টোন ব্রিজের মূলনীতি:\n\n১. রেজিস্ট্যান্সের শ্রেণিবিভাগ:\n   • নিম্ন রেজিস্ট্যান্স ($< ১\\,\\Omega$): কেলভিন ডাবল ব্রিজ (তার ও সংযোগের রেজিস্ট্যান্স বাতিল করতে)।\n   • মাঝারি রেজিস্ট্যান্স ($১\\,\\Omega - ১০০\\text{ k}\\Omega$): হুইটস্টোন ব্রিজ ($\x5Cfrac{R_1}{R_2} = \\frac{R_3}{R_x}$)।\n   • উচ্চ রেজিস্ট্যান্স ($> ১০০\\text{ k}\\Omega$): মেগার (Megger) দিয়ে কেবলের ইনসুলেশন মাপতে।\n\n২. হুইটস্টোন ব্রিজের সাম্যাবস্থা ($I_g = 0$):\n   $$\\frac{R_1}{R_2} = \\frac{R_3}{R_x} \\implies R_x = R_3 \\times \\frac{R_2}{R_1}$$\n\n৩. কেলভিন ডাবল ব্রিজ: দুটি অনুপাতিক বাহু ব্যবহার করে সংযোগকারী তারের বাধা সম্পূর্ণ নিষ্ক্রিয় করে।'
  },
  formulas: [
    {
      symbol: 'R_x',
      expression: 'R_x = R_3 \\times \\frac{R_2}{R_1}',
      description: {
        en: 'Wheatstone Bridge Balance Condition: Unknown Resistance Rx = Standard Arm R3 × (Ratio Arm R2 / R1)',
        hi: 'व्हीटस्टोन ब्रिज संतुलन: अज्ञात प्रतिरोध Rx = मानक भुजा R3 × (अनुपात भुजा R2 / R1)',
        bn: 'হুইটস্টোন ব্রিজের সাম্যাবস্থা: অজানা রেজিস্ট্যান্স Rx = স্ট্যান্ডার্ড আরম R3 × (অনুপাত আরম R2 / R1)'
      }
    },
    {
      symbol: 'R_x(\\text{Kelvin})',
      expression: 'R_x = P \\cdot \\frac{S}{Q} + \\frac{p r}{p + q + r} \\left( \\frac{P}{Q} - \\frac{p}{q} \\right)',
      description: {
        en: 'Kelvin Double Bridge Equation (reduces to Rx = P·S/Q when ratio p/q = P/Q)',
        hi: 'केल्विन डबल ब्रिज समीकरण (जब p/q = P/Q हो तो Rx = P·S/Q बनता है)',
        bn: 'কেলভিন ডাবল ব্রিজের সমীকরণ (p/q = P/Q হলে Rx = P·S/Q হয়)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-wheatstone-bridge',
      title: {
        en: 'Schematic Diagram of a Balanced Wheatstone Bridge Circuit',
        hi: 'संतुलित व्हीटस्टोन ब्रिज परिपथ का योजनाबद्ध आरेख',
        bn: 'সাম্যাবস্থায় হুইটস্টোন ব্রিজের সার্কিট ডায়াগ্রাম'
      },
      caption: {
        en: '4-arm bridge with ratio arms R1 & R2, standard arm R3, unknown Rx, DC source, and Galvanometer.',
        hi: 'अनुपात भुजाओं R1 व R2, मानक भुजा R3, अज्ञात Rx, DC स्रोत और गैल्वेनोमीटर के साथ 4-भुजा ब्रिज।',
        bn: 'অনুপাত আরম R1 ও R2, স্ট্যান্ডার্ড R3, অজানা Rx এবং গ্যালভান মিটারসহ ৪-বাহু ব্রিজ।'
      },
      svgType: 'wheatstone-bridge'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-ch3-brg-1',
      problem: {
        en: 'In a balanced Wheatstone bridge, the ratio arm resistors are $R_1 = 100\\,\\Omega$ and $R_2 = 1000\\,\\Omega$. The adjustable standard arm resistor is $R_3 = 245.8\\,\\Omega$ when the galvanometer indicates zero deflection. Calculate:\n1) The value of the unknown resistance $R_x$.\n2) The percent error in $R_x$ if $R_3$ was misread as $246.5\\,\\Omega$.',
        hi: 'एक संतुलित व्हीटस्टोन ब्रिज में, अनुपात भुजा प्रतिरोधक $R_1 = 100\\,\\Omega$ और $R_2 = 1000\\,\\Omega$ हैं। जब गैल्वेनोमीटर शून्य विक्षेप दर्शाता है तब मानक भुजा प्रतिरोधक $R_3 = 245.8\\,\\Omega$ है। गणना करें:\n1) अज्ञात प्रतिरोध $R_x$ का मान।\n2) यदि $R_3$ को गलती से $246.5\\,\\Omega$ पढ़ा गया तो $R_x$ में प्रतिशत त्रुटि।',
        bn: 'একটি হুইটস্টোন ব্রিজে অনুপাত বাহু $R_1 = 100\\,\\Omega$ এবং $R_2 = 1000\\,\\Omega$। গ্যালভান মিটারে শূন্য পাঠকালে স্ট্যান্ডার্ড বাহুর মান $R_3 = 245.8\\,\\Omega$। বের করো:\n১) অজানা রেজিস্ট্যান্স $R_x$ এর মান।\n২) যদি $R_3$ এর মান ভুল করে $246.5\\,\\Omega$ পড়া হয়, তবে $R_x$ এর শতকরা ভুল।'
      },
      givenValues: {
        'R1': '100 Ω',
        'R2': '1000 Ω',
        'R3 (True)': '245.8 Ω',
        'R3 (Measured)': '246.5 Ω'
      },
      solution: {
        en: '1) True Unknown Resistance $R_x = R_3 \\times \\frac{R_2}{R_1} = 245.8 \\times \\frac{1000}{100} = 245.8 \\times 10 = 2458\\,\\Omega = 2.458\\text{ k}\\Omega$.\n2) Apparent $R_{x,app} = 246.5 \\times 10 = 2465\\,\\Omega$.\n   Error $\\Delta R = 2465 - 2458 = 7\\,\\Omega$.\n   Percent Error = $\\frac{7}{2458} \\times 100\\% = 0.285\\%$.',
        hi: '1) वास्तविक $R_x = 245.8 \\times \\frac{1000}{100} = 2458\\,\\Omega = 2.458\\text{ k}\\Omega$।\n2) आभासी $R_{x,app} = 246.5 \\times 10 = 2465\\,\\Omega$।\n   प्रतिशत त्रुटि = $\\frac{2465 - 2458}{2458} \\times 100\\% = 0.285\\%$।',
        bn: '১) প্রকৃত $R_x = ২৪৫.৮ \\times \\frac{১০০০}{ ১০০} = ২৪৫৮\\,\\Omega = ২.৪৫৮\\text{ k}\\Omega$।\n২) ভুল পরিমাপকৃত $R_{x,app} = ২৪৬৫\\,\\Omega$।\n   শতকরা ভুল = $\\frac{২৪৬৫ - ২৪৫৮}{২৪৫৮} \\times ১০০\\% = ০.২৮৫\\%$।'
      },
      finalAnswer: {
        en: 'Rx = 2458 Ω (2.458 kΩ), Error = 0.285%',
        hi: 'Rx = 2458 Ω (2.458 kΩ), त्रुटि = 0.285%',
        bn: 'Rx = ২৪৫৮ Ω (২.৪৫৮ kΩ), ভুল = ০.২৮৫%'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Wheatstone bridges in strain gauge load-cell sensors for precision electronic weighing scales.',
      'Kelvin double bridges in motor manufacturing plants to measure thick copper armature coil resistance.',
      'Megohmmeter (Megger) testing in electrical utility power lines and high-voltage transformer winding insulation.'
    ],
    hi: [
      'सटीक इलेक्ट्रॉनिक वजन तराजू के लिए स्ट्रेन गेज लोड-सेल सेंसर में व्हीटस्टोन ब्रिज।',
      'मोटर निर्माण संयंत्रों में मोटे तांबे के आर्मेचर कॉइल प्रतिरोध को मापने के लिए केल्विन डबल ब्रिज।',
      'विद्युत उपयोगिता पावर लाइनों और उच्च वोल्टेज ट्रांसफार्मर इंसुलेशन में मेगर परीक्षण।'
    ],
    bn: [
      'ডিজিটাল ওজন স্কেলে লোড সেল সেন্সরের অভ্যন্তরে হুইটস্টোন ব্রিজ সার্কিট।',
      'মোটর উৎপাদন কারখানায় মোটা কপার ওয়াইন্ডিংয়ের রেজিস্ট্যান্স মাপতে কেলভিন ডাবল ব্রিজ।',
      'পাওয়ার ক্যাবল ও উচ্চ ভোল্টেজ ট্রান্সফরমারের ইনসুলেশন টেস্টে মেগার (Megger) ব্যবহার।'
    ]
  },
  importantPoints: {
    en: [
      'Wheatstone bridge is used for medium resistance measurement ($1\\,\\Omega$ to $100\\text{ k}\\Omega$).',
      'Balance formula: $R_1 / R_2 = R_3 / R_x \\implies R_x = R_3 \\cdot (R_2 / R_1)$.',
      'At null balance ($I_g = 0$), measurement is independent of source DC voltage variations.',
      'Kelvin Double Bridge eliminates connecting lead resistance $r$ for low resistance ($< 1\\,\\Omega$).',
      'Megger generates 500 V/1000 V DC to measure high insulation resistance ($> 100\\text{ k}\\Omega$).',
      'Standard Wheatstone bridge is unsuitable for low resistance because lead wire resistance ($0.01\\,\\Omega$) causes massive percentage error.'
    ],
    hi: [
      'व्हीटस्टोन ब्रिज का उपयोग मध्यम प्रतिरोध माप ($1\\,\\Omega$ से $100\\text{ k}\\Omega$) के लिए किया जाता है।',
      'संतुलन सूत्र: $R_x = R_3 \\cdot (R_2 / R_1)$।',
      'शून्य संतुलन पर ($I_g = 0$), माप स्रोत डीसी वोल्टेज में बदलाव से स्वतंत्र है।',
      'केल्विन डबल ब्रिज निम्न प्रतिरोध ($< 1\\,\\Omega$) के लिए कनेक्टिंग लेड प्रतिरोध को समाप्त करता है।',
      'मेगर उच्च इंसुलेशन प्रतिरोध ($> 100\\text{ k}\\Omega$) को मापने के लिए 500 V/1000 V DC उत्पन्न करता है।'
    ],
    bn: [
      'হুইটস্টোন ব্রিজ মাঝারি মানের রেজিস্ট্যান্স মাপতে ব্যবহৃত হয় ($১\\,\\Omega$ থেকে ১০০ k$\\Omega$)।',
      'সাম্যাবস্থার সমীকরণ: $R_x = R_3 \\cdot (R_2 / R_1)$।',
      'সাম্যাবস্থায় গ্যালভান মিটারে বিদ্যুৎ না থাকায় পরিমাপ পাওয়ার সাপ্লাই ভোল্টেজের ওপর নির্ভর করে না।',
      'কেলভিন ডাবল ব্রিজ কম রেজিস্ট্যান্সের ($< ১\\,\\Omega$) ক্ষেত্রে তারের বাধা সম্পূর্ণ নিষ্ক্রিয় করে।',
      'মেগার ৫০০/১০০০ V দিয়ে উচ্চ ইনসুলেশন রেজিস্ট্যান্স ($> ১০০\\text{ k}\\Omega$) মাপে।'
    ]
  },
  commonMistakes: {
    en: [
      'Using a Wheatstone bridge to measure low resistance ($<1\\,\\Omega$): Connecting leads and contact resistances add to $R_x$, introducing huge percentage errors!',
      'Using an ordinary ohmmeter to measure insulation resistance: Ohmmeter uses 1.5 V or 9 V battery which cannot break down insulation gaps; Megger uses 500 V - 1000 V DC.',
      'Leaving live power ON while using Megger or Bridge, damaging sensitive galvanometer detectors.'
    ],
    hi: [
      'निम्न प्रतिरोध ($<1\\,\\Omega$) मापने के लिए व्हीटस्टोन ब्रिज का उपयोग करना: कनेक्टिंग लेड और संपर्क प्रतिरोध $R_x$ में जुड़ जाते हैं, जिससे भारी प्रतिशत त्रुटियां होती हैं!',
      'इंसुलेशन प्रतिरोध मापने के लिए एक साधारण ओममीटर का उपयोग करना: ओममीटर 1.5V या 9V बैटरी का उपयोग करता है जो इंसुलेशन गैप का परीक्षण नहीं कर सकती; मेगर 500V - 1000V DC का उपयोग करता है।',
      'मेगर या ब्रिज का उपयोग करते समय लाइव बिजली चालू छोड़ना, जिससे संवेदनशील गैल्वेनोमीटर क्षतिग्रस्त हो जाता है।'
    ],
    bn: [
      'কম রেজিস্ট্যান্স মাপতে হুইটস্টোন ব্রিজ ব্যবহার করা: তারের রেজিস্ট্যান্স রেজিস্ট্যান্সের মানের সাথে যোগ হয়ে বিশাল ভুলের সৃষ্টি করে।',
      'ইনসুলেশন টেস্টে সাধারণ ওহমমিটার ব্যবহার করা: ওহমমিটারের ৯V ব্যাটারি ইনসুলেশনের স্ট্রেস টেস্ট করতে পারে না; মেগার ৫০০-১০০০V তৈরি করে।',
      'সার্কিটে কারেন্ট চালু রাখা অবস্থায় মেগার বা ব্রিজ ব্যবহার করে দামি গ্যালভান মিটার পুড়িয়ে ফেলা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-ch3-brg-1',
      question: {
        en: 'Which bridge is specifically designed to eliminate the effect of connecting lead resistance when measuring low resistance?',
        hi: 'निम्न प्रतिरोध को मापते समय कनेक्टिंग लेड प्रतिरोध के प्रभाव को समाप्त करने के लिए किस ब्रिज को विशेष रूप से डिजाइन किया गया है?',
        bn: 'কম রেজিস্ট্যান্স মাপার সময় তারের বাধা সম্পূর্ণ দূর করতে কোন ব্রিজ বিশেষভাবে তৈরি করা হয়েছে?'
      },
      options: [
        { id: 'a', text: { en: 'Wheatstone Bridge', hi: 'व्हीटस्टोन ब्रिज', bn: 'হুইটস্টোন ব্রিজ' } },
        { id: 'b', text: { en: 'Kelvin Double Bridge', hi: 'केल्विन डबल ब्रिज', bn: 'কেলভিন ডাবল ব্রিজ' } },
        { id: 'c', text: { en: 'Maxwell Bridge', hi: 'मैक्सवेल ब्रिज', bn: 'ম্যাক্সওয়েল ব্রিজ' } },
        { id: 'd', text: { en: 'Schering Bridge', hi: 'शेरिंग ब्रिज', bn: 'শেরিং ব্রিজ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Kelvin Double Bridge incorporates a second set of ratio arms to cancel connecting lead and contact resistance.',
        hi: 'केल्विन डबल ब्रिज में कनेक्टिंग लेड और संपर्क प्रतिरोध को रद्द करने के लिए अनुपात भुजाओं का दूसरा सेट शामिल होता है।',
        bn: 'কেলভিন ডাবল ব্রিজে দ্বৈত অনুপাতিক বাহু দিয়ে তার ও পয়েন্ট কন্টাক্ট রেজিস্ট্যান্সের প্রভাব দূর করা হয়।'
      }
    },
    {
      id: 'mcq-ch3-brg-2',
      question: {
        en: 'What is the balance condition equation for a Wheatstone bridge with arms R1, R2, R3, and Rx?',
        hi: 'भुजाओं R1, R2, R3 और Rx वाले व्हीटस्टोन ब्रिज के लिए संतुलन स्थिति समीकरण क्या है?',
        bn: 'R1, R2, R3 ও Rx বাহুবিশিষ্ট একটি হুইটস্টোন ব্রিজের সাম্যাবস্থার সমীকরণ কোনটি?'
      },
      options: [
        { id: 'a', text: { en: 'R1 · R2 = R3 · Rx', hi: 'R1 · R2 = R3 · Rx', bn: 'R1 · R2 = R3 · Rx' } },
        { id: 'b', text: { en: 'R1 / R2 = R3 / Rx', hi: 'R1 / R2 = R3 / Rx', bn: 'R1 / R2 = R3 / Rx' } },
        { id: 'c', text: { en: 'R1 + R2 = R3 + Rx', hi: 'R1 + R2 = R3 + Rx', bn: 'R1 + R2 = R3 + Rx' } },
        { id: 'd', text: { en: 'R1 · Rx = R2 + R3', hi: 'R1 · Rx = R2 + R3', bn: 'R1 · Rx = R2 + R3' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'At balance, ratio of adjacent arms is equal: R1 / R2 = R3 / Rx, giving unknown Rx = R3 × (R2 / R1).',
        hi: 'संतुलन पर, निकटवर्ती भुजाओं का अनुपात समान होता है: R1 / R2 = R3 / Rx।',
        bn: 'সাম্যাবস্থায় পাশাপাশি বাহুদ্বয়ের অনুপাত সমান থাকে: R1 / R2 = R3 / Rx।'
      }
    },
    {
      id: 'mcq-ch3-brg-3',
      question: {
        en: 'A Megohmmeter (Megger) is primarily used to measure:',
        hi: 'एक मेगाह्ममीटर (मेगर) मुख्य रूप से क्या मापने के लिए प्रयोग किया जाता है?',
        bn: 'একটি মেগার (Megger) প্রধানত কী পরিমাপ করতে ব্যবহৃত হয়?'
      },
      options: [
        { id: 'a', text: { en: 'Very low armature resistance (<0.01 Ω)', hi: 'बहुत कम आर्मेचर प्रतिरोध (<0.01 Ω)', bn: 'অতি কম আরমেচার রেজিস্ট্যান্স (<০.০১ Ω)' } },
        { id: 'b', text: { en: 'High cable insulation resistance (>1 MΩ)', hi: 'उच्च केबल इंसुलेशन प्रतिरोध (>1 MΩ)', bn: 'উচ্চ কেবল ইনসুলেশন রেজিস্ট্যান্স (>১ MΩ)' } },
        { id: 'c', text: { en: 'AC frequency of power grid', hi: 'पावर ग्रिड की एसी आवृत्ति', bn: 'পাওয়ার গ্রিডের এসি ফ্রিকোয়েন্সি' } },
        { id: 'd', text: { en: 'Coil self-inductance', hi: 'कॉइल का स्व-प्रेरकत्व', bn: 'কয়েলের সেলফ-ইনডাক্ট্যান্স' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Megger supplies high DC voltage (500V - 1000V) to measure high insulation resistance of power cables and transformers.',
        hi: 'मेगर पावर केबलों और ट्रांसफार्मर के उच्च इंसुलेशन प्रतिरोध को मापने के लिए उच्च डीसी वोल्टेज (500V - 1000V) की आपूर्ति करता है।',
        bn: 'পাওয়ার ক্যাবল ও ট্রান্সফরমারের উচ্চ ইনসুলেশন রেজিস্ট্যান্স মাপতে মেগার ৫০০V-১০০০V প্রয়োগ করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-ch3-brg-1',
      question: {
        en: 'Derive the balance condition equation for a standard Wheatstone bridge circuit.',
        hi: 'मानक व्हीटस्टोन ब्रिज परिपथ के लिए संतुलन स्थिति समीकरण व्युत्पन्न करें।',
        bn: 'একটি সাধারণ হুইটস্টোন ব্রিজ সার্কিটের সাম্যাবস্থার সমীকরণটি প্রতিপাদন করো।'
      },
      hint: {
        en: 'Set galvanometer current $I_g = 0$, equate potentials $V_B = V_D$, and divide branch voltage drop equations.',
        hi: 'गैल्वेनोमीटर धारा $I_g = 0$ सेट करें, विभव $V_B = V_D$ बराबर करें, और शाखा वोल्टेज ड्रॉप समीकरणों को विभाजित करें।',
        bn: 'গ্যালভান মিটারের কারেন্ট $I_g = 0$ ধরে $V_B = V_D$ ধরে শাখার ভোল্টেজ সমীকরণ ভাগ করো।'
      },
      answerKey: {
        en: '1) Circuit setup: 4 arms AB ($R_1$), BC ($R_2$), AD ($R_3$), DC ($R_x$). Source $V$ across AC, Galvanometer $G$ between B and D.\n2) At null balance, zero current flows through galvanometer ($I_g = 0$).\n   Therefore, $I_1 = I_3$ (current in branch ABC) and $I_2 = I_x$ (current in branch ADC).\n3) Equal potential at B and D means:\n   $V_{AB} = V_{AD} \\implies I_1 R_1 = I_2 R_3$  --- (Eq. 1)\n   $V_{BC} = V_{DC} \\implies I_1 R_2 = I_2 R_x$  --- (Eq. 2)\n4) Dividing Eq. 1 by Eq. 2:\n   $$\\frac{I_1 R_1}{I_1 R_2} = \\frac{I_2 R_3}{I_2 R_x} \\implies \\frac{R_1}{R_2} = \\frac{R_3}{R_x} \\implies R_x = R_3 \\times \\frac{R_2}{R_1}$$',
        hi: '1) परिपथ संरचना: 4 भुजाएँ $R_1, R_2, R_3, R_x$।\n2) शून्य संतुलन पर, $I_g = 0 \\implies I_1 = I_3$ और $I_2 = I_x$।\n3) $V_B = V_D \\implies I_1 R_1 = I_2 R_3$ (समी 1) और $I_1 R_2 = I_2 R_x$ (समी 2)।\n4) समी 1 को समी 2 से भाग देने पर: $\\frac{R_1}{R_2} = \\frac{R_3}{R_x} \\implies R_x = R_3 \\times \\frac{R_2}{R_1}$।',
        bn: '১) ৪টি বাহু $R_1, R_2, R_3, R_x$ এবং B ও D এর মাঝে গ্যালভান মিটার।\n২) সাম্যাবস্থায় $I_g = 0 \\implies I_1 = I_3$ এবং $I_2 = I_x$।\n৩) বিভব সমান বলে $I_1 R_1 = I_2 R_3$ (সমীকরণ ১) এবং $I_1 R_2 = I_2 R_x$ (সমীকরণ ২)।\n৪) ভাগ করে পাই: $\\frac{R_1}{R_2} = \\frac{R_3}{R_x} \\implies R_x = R_3 \\times \\frac{R_2}{R_1}$।'
      }
    },
    {
      id: 'pq-ch3-brg-2',
      question: {
        en: 'Why is a Wheatstone bridge unsuitable for measuring low resistance (<1 Ω)? How does the Kelvin Double Bridge overcome this limitation?',
        hi: 'कम प्रतिरोध (<1 Ω) मापने के लिए व्हीटस्टोन ब्रिज अनुपयुक्त क्यों है? केल्विन डबल ब्रिज इस सीमा को कैसे दूर करता है?',
        bn: 'কম রেজিস্ট্যান্স (<১ Ω) পরিমাপে হুইটস্টোন ব্রিজ কেন অনুপযোগী? কেলভিন ডাবল ব্রিজ কীভাবে এই সমস্যা সমাধান করে?'
      },
      hint: {
        en: 'Explain lead wire resistance $r_{lead} \\approx 0.01\\,\\Omega$ added in series with unknown $R_x$. Kelvin bridge uses double ratio arms ($p, q$).',
        hi: 'अज्ञात $R_x$ के साथ श्रृंखला में जुड़ी लेड तार प्रतिरोध $r_{lead} \\approx 0.01\\,\\Omega$ की व्याख्या करें।',
        bn: 'সংযোগকারী তারের রেজিস্ট্যান্সের কথা উল্লেখ করো।'
      },
      answerKey: {
        en: '1) Wheatstone Limitation: When measuring low resistance (e.g. $R_x = 0.01\\,\\Omega$), the connecting leads and terminal contact resistances ($r_{lead} \\approx 0.005 - 0.02\\,\\Omega$) are in series with $R_x$. This lead resistance can be larger than $R_x$ itself, causing up to 100% or higher measurement error.\n2) Kelvin Double Bridge Solution: It introduces a inner second set of ratio arms ($p, q$) connected across the lead resistance $r$. When the ratio $p/q = P/Q$, the lead resistance term is completely eliminated from the measurement formula: $R_x = P \\cdot S / Q$, allowing precise measurement down to $0.0001\\,\\Omega$.',
        hi: '1) व्हीटस्टोन की सीमा: कम प्रतिरोध (जैसे $0.01\\,\\Omega$) को मापते समय, कनेक्टिंग लेड का प्रतिरोध ($0.01\\,\\Omega$) $R_x$ के साथ जुड़ जाता है, जिससे विशाल प्रतिशत त्रुटि होती है।\n2) केल्विन डबल ब्रिज समाधान: यह लेड प्रतिरोध $r$ के पार जुड़े अनुपात भुजाओं ($p, q$) के एक दूसरे सेट का परिचय देता है। जब $p/q = P/Q$, तो लेड प्रतिरोध पूरी तरह से समाप्त हो जाता है: $R_x = P \\cdot S / Q$।',
        bn: '১) হুইটস্টোন ব্রিজের সীমাবদ্ধতা: যখন কম রেজিস্ট্যান্স ($0.01\\,\\Omega$) মাপা হয়, তখন সংযোগকারী তারের বাধা ($0.01\\,\\Omega$) আসল রেজিস্ট্যান্সের সাথে যোগ হয়ে ১০০% পর্যন্ত ভুল তৈরি করে।\n২) কেলভিন ব্রিজের সমাধান: এতে অতিরিক্ত দুই অনুপাতিক বাহু ($p, q$) থাকে। যখন $p/q = P/Q$ হয়, তখন সমীকরণ থেকে তারের রেজিস্ট্যান্স সম্পূর্ণরূপে মুছে যায়: $R_x = P \\cdot S / Q$।'
      }
    }
  ]
};

export const CHAPTER_3_LESSONS_PART3: Record<string, Lesson> = {
  'ch3-cro-oscilloscope': LESSON_CRO_OSCILLOSCOPE,
  'ch3-transducers': LESSON_TRANSDUCERS,
  'ch3-bridges-resistance': LESSON_BRIDGES_RESISTANCE
};
