import { Lesson } from '../types';

export const LESSON_RESISTANCE: Lesson = {
  id: 'lsn-resistance',
  topicId: 'tp-resistance',
  order: 5,
  title: {
    en: 'Resistance',
    hi: 'प्रतिरोध (Resistance)',
    bn: 'রোধ (Resistance)'
  },
  easyExplanation: {
    en: 'Electrical Resistance is the property of a material by which it opposes or restricts the flow of electric current through it. It converts electrical energy into heat energy.',
    hi: 'विद्युत प्रतिरोध किसी पदार्थ का वह गुण है जिसके द्वारा वह अपने माध्यम से विद्युत धारा के प्रवाह का विरोध करता है। यह विद्युत ऊर्जा को ऊष्मा ऊर्जा में परिवर्तित करता है।',
    bn: 'বৈদ্যুতিক রোধ (Resistance) হলো পদার্থের এমন এক ধর্ম যার মাধ্যমে এটি তার মধ্য দিয়ে কারেন্ট প্রবাহে বাধা দেয়। এটি বৈদ্যুতিক শক্তিকে তাপ শক্তিতে রূপান্তর করে।'
  },
  detailedExplanation: {
    en: 'Resistance is denoted by R and measured in Ohms (Ω). According to Ohm Law, R = V / I. At a macroscopic level, laws of resistance state that R = ρ × (L / A), where ρ is material resistivity (Ω·m), L is conductor length (meters), and A is cross-sectional area (m²). Factors affecting resistance include: 1) Length (R ∝ L); 2) Cross-sectional area (R ∝ 1/A); 3) Material nature (resistivity ρ); 4) Temperature (for metallic conductors, R increases with temperature increase). Resistors can be fixed (carbon composition, wirewound) or variable (rheostats, potentiometers).',
    hi: 'प्रतिरोध को R से दर्शाया जाता है और ओम (Ω) में मापा जाता है। ओम के नियम के अनुसार R = V / I। प्रतिरोध के नियमों के अनुसार: R = ρ × (L / A), जहां ρ सामग्री प्रतिरोधकता (Ω·m) है, L लंबाई (मीटर) है, और A अनुप्रस्थ काट क्षेत्रफल (m²) है। प्रभावित करने वाले कारक: 1) लंबाई; 2) क्षेत्रफल; 3) पदार्थ की प्रकृति; 4) तापमान (धातु चालकों का प्रतिरोध तापमान बढ़ने पर बढ़ता है)।',
    bn: 'রোধকে R দ্বারা চিহ্নিত করা হয় এবং ওহম (Ω) এককে মাপা হয়। ওহমের সূত্রানুযায়ী R = V / I। রোধের সূত্রাবলী: R = ρ × (L / A), যেখানে ρ হলো আপেক্ষিক রোধ বা রোধকত্ব (Ω·m), L হলো দৈর্ঘ্য (মিটার), এবং A হলো প্রস্থচ্ছেদের ক্ষেত্রফল (m²)। প্রভাবক বিষয়সমূহ: ১) দৈর্ঘ্য; ২) ক্ষেত্রফল; ৩) উপাদান; ৪) তাপমাত্রা।'
  },
  formulas: [
    {
      symbol: 'R',
      expression: 'R = V / I',
      description: {
        en: 'R = Resistance (Ohms, Ω), V = Applied Voltage (Volts, V), I = Current (Amperes, A)',
        hi: 'R = प्रतिरोध (ओम), V = वोल्टेज (वोल्ट), I = धारा (एम्पीयर)',
        bn: 'R = রোধ (ওহম), V = প্রয়োগকৃত ভোল্টেজ (ভোল্ট), I = কারেন্ট (অ্যাম্পিয়ার)'
      }
    },
    {
      symbol: 'R',
      expression: 'R = ρ × L / A',
      description: {
        en: 'ρ = Resistivity (Ω·m), L = Conductor length (m), A = Conductor cross-sectional area (m²)',
        hi: 'ρ = प्रतिरोधकता (Ω·m), L = लंबाई (m), A = अनुप्रस्थ काट क्षेत्रफल (m²)',
        bn: 'ρ = আপেক্ষিক রোধ (Ω·m), L = দৈর্ঘ্য (m), A = প্রস্থচ্ছেদের ক্ষেত্রফল (m²)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-resistor-factors',
      title: {
        en: 'Factors Affecting Conductor Resistance',
        hi: 'चालक के प्रतिरोध को प्रभावित करने वाले कारक',
        bn: 'পরিবাহীর রোধকে প্রভাবিতকারী উপাদানসমূহ'
      },
      caption: {
        en: 'Longer conductors increase resistance; thicker conductors decrease resistance.',
        hi: 'लंबे चालक प्रतिरोध बढ़ाते हैं; मोटे चालक प्रतिरोध घटाते हैं।',
        bn: 'দীর্ঘতর পরিবাহী রোধ বৃদ্ধি করে; মোটা পরিবাহী রোধ হ্রাস করে।'
      },
      svgType: 'resistor-factors'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-resistance-1',
      problem: {
        en: 'A copper wire of length 100 meters and cross-sectional area 2 mm² (2 × 10⁻⁶ m²) has a material resistivity ρ = 1.72 × 10⁻⁸ Ω·m. Calculate its total electrical resistance at 20°C.',
        hi: '100 मीटर लंबे और 2 mm² अनुप्रस्थ काट वाले तांबे के तार की प्रतिरोधकता 1.72 × 10⁻⁸ Ω·m है। 20°C पर इसके कुल प्रतिरोध की गणना करें।',
        bn: '১০০ মিটার দীর্ঘ এবং ২ mm² প্রস্থচ্ছেদের তামার তারের আপেক্ষिक রোধ ১.৭২ × ১০⁻⁸ Ω·m। ২০°C-এ এর মোট রোধ কত?'
      },
      givenValues: {
        'Resistivity (ρ)': '1.72 × 10⁻⁸ Ω·m',
        'Length (L)': '100 m',
        'Area (A)': '2 × 10⁻⁶ m²'
      },
      solution: {
        en: 'Using formula R = ρ × L / A\nR = (1.72 × 10⁻⁸) × 100 / (2 × 10⁻⁶)\nR = 1.72 × 10⁻⁶ / (2 × 10⁻⁶) = 0.86 Ohms.',
        hi: 'सूत्र R = ρ × L / A का उपयोग करके:\nR = (1.72 × 10⁻⁸) × 100 / (2 × 10⁻⁶)\nR = 0.86 ओम।',
        bn: 'R = ρ × L / A সূত্র ব্যবহার করে:\nR = (১.৭২ × ১০⁻⁸) × ১০০ / (২ × ১০⁻⁶)\nR = ০.৮৬ ওহম।'
      },
      finalAnswer: {
        en: 'Resistance (R) = 0.86 Ω',
        hi: 'प्रतिरोध (R) = 0.86 Ω',
        bn: 'রোধ (R) = ০.৮৬ Ω'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Heating elements in water heaters, irons, and toaster coils made of high-resistivity Nichrome wire.',
      'Current-limiting resistors used to protect delicate LEDs and electronic integrated circuits.',
      'Rheostats and potentiometers used for motor speed controls and audio volume adjustments.'
    ],
    hi: [
      'उच्च-प्रतिरोधकता वाले नाइक्रोम तार से बने वाटर हीटर, प्रेस और टोस्टर कॉइल में हीटिंग एलिमेंट।',
      'एलईडी और इलेक्ट्रॉनिक आईसी की सुरक्षा के लिए उपयोग किए जाने वाले करंट-लिमिटिंग रेसिस्टर।',
      'मोटर गति नियंत्रण और ऑडियो वॉल्यूम समायोजन के लिए उपयोग किए जाने वाले रियियोस्टैट।'
    ],
    bn: [
      'উচ্চ আপেক্ষিক রোধের নাইক্রোম তার নির্মিত ওয়াটার হিটার, ইস্ত্রি এবং টোস্টারের হিটিং উপাদান।',
      'সংবেদনশীল এলইডি এবং সার্কিট রক্ষায় কারেন্ট-লিমিটিং রেজিস্টর।',
      'ফ্যান ও মোটরের স্পিড কন্ট্রোল এবং অডিও ভলিউম রেগুলেটরে রিওস্ট্যাট ও পটেনশিওমিটার।'
    ]
  },
  importantPoints: {
    en: [
      'SI unit of resistance is Ohm (Ω). 1 Ω = 1 Volt / 1 Ampere.',
      'Resistance is directly proportional to length (R ∝ L) and inversely proportional to cross-sectional area (R ∝ 1/A).',
      'Resistivity (ρ) depends ONLY on the material type and temperature, not on conductor dimensions.',
      'Metals have positive temperature coefficient of resistance (resistance increases as temperature rises).',
      'Insulators and semiconductors have negative temperature coefficient of resistance.'
    ],
    hi: [
      'प्रतिरोध का SI मात्रक ओम (Ω) है। 1 Ω = 1 वोल्ट / 1 एम्पीयर।',
      'प्रतिरोध लंबाई के समानुपाती (R ∝ L) और क्षेत्रफल के व्युत्क्रमानुपाती (R ∝ 1/A) होता है।',
      'प्रतिरोधकता (ρ) केवल सामग्री के प्रकार और तापमान पर निर्भर करती है, आकार पर नहीं।',
      'धातुओं का प्रतिरोध ताप गुणांक धनात्मक होता है (तापमान बढ़ने पर प्रतिरोध बढ़ता है)।',
      'कुचालकों और अर्धचालकों का प्रतिरोध ताप गुणांक ऋणात्मक होता है।'
    ],
    bn: [
      'রোধের SI একক ওহম (Ω)। ১ Ω = ১ ভোল্ট / ১ অ্যাম্পিয়ার।',
      'রোধ দৈর্ঘ্যের সমানুপাতিক (R ∝ L) এবং প্রস্থচ্ছেদের ক্ষেত্রফলের ব্যস্তানুপাতিক (R ∝ 1/A)।',
      'আপেক্ষিক রোধ (ρ) কেবল উপাদানের ধরন ও তাপমাত্রার ওপর নির্ভর করে, মাত্রার ওপর নয়।',
      'ধাতুর ক্ষেত্রে রোধের তাপমাত্রা গুণাঙ্ক ধনাত্মক (তাপমাত্রা বাড়লে রোধ বাড়ে)।',
      'অর্ধপরিবাহী ও অপরিবাহীর ক্ষেত্রে রোধের তাপমাত্রা গুণাঙ্ক ঋণাত্মক।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing resistance R (measured in Ω) with resistivity ρ (measured in Ω·m).',
      'Assuming stretching a wire doubles its resistance; stretching doubles length and halves area, making resistance 4 times original.',
      'Ignoring temperature rise effect during heavy current flow in field conductors.'
    ],
    hi: [
      'प्रतिरोध R (ओम) को प्रतिरोधकता ρ (ओम-मीटर) के साथ भ्रमित करना।',
      'यह मानना कि तार खींचने से प्रतिरोध दोगुना होता है; तार खींचने से लंबाई दोगुनी और क्षेत्रफल आधा होता है, जिससे प्रतिरोध 4 गुना हो जाता है।',
      'चालकों में अत्यधिक धारा प्रवाह के दौरान तापमान वृद्धि के प्रभाव को नजरअंदाज करना।'
    ],
    bn: [
      'রোধ R (Ω) এবং আপেক্ষিক রোধ ρ (Ω·m) গুলিয়ে ফেলা।',
      'তার টেনে দৈর্ঘ্য দ্বিগুণ করলে রোধ দ্বিগুণ হয় ভাবা; তার টানলে দৈর্ঘ্য দ্বিগুণ ও ক্ষেত্রফল অর্ধেক হয়ে রোধ ৪ গুণ হয়।',
      'উচ্চ কারেন্ট প্রবাহের সময় পরিবাহীর তাপমাত্রা বৃদ্ধির প্রভাব এড়িয়ে যাওয়া।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-resistance-1',
      question: {
        en: 'If the length of a conductor is doubled while keeping its area and material constant, its resistance will:',
        hi: 'यदि चालक का क्षेत्रफल और सामग्री स्थिर रखते हुए उसकी लंबाई दोगुनी कर दी जाए, तो इसका प्रतिरोध:',
        bn: 'ক্ষেত্রফল ও উপাদান অপরিবর্তিত রেখে কোনো পরিবাহীর দৈর্ঘ্য দ্বিগুণ করা হলে এর রোধ:'
      },
      options: [
        { id: 'a', text: { en: 'Remain unchanged', hi: 'अपरिवर्तित रहेगा', bn: 'অপরিবর্তিত থাকবে' } },
        { id: 'b', text: { en: 'Become doubled', hi: 'दोगुना हो जाएगा', bn: 'দ্বিগুণ হবে' } },
        { id: 'c', text: { en: 'Become half', hi: 'आधा हो जाएगा', bn: 'অর্ধেক হবে' } },
        { id: 'd', text: { en: 'Become 4 times', hi: '4 गुना हो जाएगा', bn: '৪ গুণ হবে' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Since R ∝ L, doubling length L directly doubles resistance R.',
        hi: 'चूंकि R ∝ L, इसलिए लंबाई L दोगुनी करने पर प्रतिरोध R सीधे दोगुना हो जाता है।',
        bn: 'যেহেতু R ∝ L, তাই দৈর্ঘ্য L দ্বিগুণ করলে রোধ R সরাসরি দ্বিগুণ হয়।'
      }
    },
    {
      id: 'mcq-resistance-2',
      question: {
        en: 'The SI unit of specific resistance or electrical resistivity ρ is:',
        hi: 'विशिष्ट प्रतिरोध या विद्युत प्रतिरोधकता ρ का SI मात्रक क्या है?',
        bn: 'আপেক্ষিক রোধ বা রোদকত্ব ρ-এর SI একক কোনটি?'
      },
      options: [
        { id: 'a', text: { en: 'Ohm (Ω)', hi: 'ओम (Ω)', bn: 'ওহম (Ω)' } },
        { id: 'b', text: { en: 'Ohm-meter (Ω·m)', hi: 'ओम-मीटर (Ω·m)', bn: 'ওহম-মিটার (Ω·m)' } },
        { id: 'c', text: { en: 'Siemens (S)', hi: 'सीमेंस (S)', bn: 'সিমান্স (S)' } },
        { id: 'd', text: { en: 'Ohm / meter', hi: 'ओम / मीटर', bn: 'ওহম / মিটার' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'ρ = R × A / L = (Ω × m²) / m = Ω·m.',
        hi: 'ρ = R × A / L = (Ω × m²) / m = Ω·m।',
        bn: 'ρ = R × A / L = (Ω × m²) / m = Ω·m।'
      }
    },
    {
      id: 'mcq-resistance-3',
      question: {
        en: 'What happens to the resistance of a pure metallic conductor (like copper) when its temperature increases?',
        hi: 'शुद्ध धातु चालक (जैसे तांबा) का तापमान बढ़ने पर उसके प्रतिरोध का क्या होता है?',
        bn: 'উষ্ণতা বৃদ্ধি পেলে তামার মতো খাঁটি ধাতব পরিবাহীর রোধের কী পরিবর্তন ঘটে?'
      },
      options: [
        { id: 'a', text: { en: 'It increases', hi: 'यह बढ़ता है', bn: 'বৃদ্ধি পায়' } },
        { id: 'b', text: { en: 'It decreases', hi: 'यह घटता है', bn: 'হ্রাস পায়' } },
        { id: 'c', text: { en: 'It remains constant', hi: 'यह स्थिर रहता है', bn: 'অপরিবর্তিত থাকে' } },
        { id: 'd', text: { en: 'It drops to zero', hi: 'यह शून्य हो जाता है', bn: 'শূন্যে নেমে আসে' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Metals have a positive temperature coefficient of resistance (α > 0).',
        hi: 'धातुओं का प्रतिरोध ताप गुणांक धनात्मक होता है (α > 0)।',
        bn: 'ধাতুর তাপমাত্রা গুনাঙ্ক ধনাত্মক, তাই তাপমাত্রা বাড়লে রোধ বাড়ে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-resistance-1',
      question: {
        en: 'A wire of resistance 10 Ω is uniformly drawn and stretched to twice its original length. Calculate the new resistance of the stretched wire.',
        hi: '10 Ω प्रतिरोध वाले तार को समान रूप से खींचकर उसकी मूल लंबाई का दोगुना कर दिया जाता है। खिंचे हुए तार के नए प्रतिरोध की गणना करें।',
        bn: '১০ Ω রোধের একটি তারকে টেনে দৈর্ঘ্য সুষমভাবে দ্বিগুণ করা হলো। প্রসারিত তারটির নতুন রোধ কত হবে?'
      },
      hint: {
        en: 'When stretched without changing volume, L_new = 2 L_old, so Area A_new = A_old / 2. New resistance R_new = ρ (2L) / (A/2) = 4 R_old.',
        hi: 'आयतन बदले बिना खींचने पर L_new = 2 L, इसलिए A_new = A / 2। R_new = 4 R_old।',
        bn: 'আয়তন ধ্রুব রেখে টানলে দৈর্ঘ্য ২ গুণ হলে ক্ষেত্রফল অর্ধেক হয়। ফলে R_new = ৪ R_old।'
      },
      answerKey: {
        en: 'Stretching doubles length (L\' = 2L) and halves cross-sectional area (A\' = A/2). R\' = ρ L\' / A\' = ρ (2L) / (A/2) = 4 × (ρ L / A) = 4 × 10 Ω = 40 Ω.',
        hi: 'खींचने से लंबाई दोगुनी (L\' = 2L) और क्षेत्रफल आधा (A\' = A/2) होता है। R\' = 4 × 10 Ω = 40 Ω।',
        bn: 'দৈর্ঘ্য দ্বিগুণ (L\' = ২L) এবং ক্ষেত্রফল অর্ধেক (A\' = A/২) হয়। R\' = ৪ × ১০ Ω = ৪০ Ω।'
      }
    },
    {
      id: 'pq-resistance-2',
      question: {
        en: 'Compare the resistivity characteristics of Copper, Nichrome, and Silicon.',
        hi: 'तांबा, नाइक्रोम और सिलिकॉन की प्रतिरोधकता विशेषताओं की तुलना करें।',
        bn: 'তামা, নাইক্রোম এবং সিলিকনের আপেক্ষিক রোধের বৈশিষ্ট্যের তুলনা করো।'
      },
      hint: {
        en: 'Categorize them as conductor, alloy heating element, and semiconductor.',
        hi: 'इन्हें चालक, मिश्र धातु हीटिंग एलिमेंट और अर्धचालक के रूप में वर्गीकृत करें।',
        bn: 'এদের পরিবাহী, সংকর ধাতুর হিটিং এলিমেন্ট এবং অর্ধপরিবাহী হিসেবে চিহ্নিত করো।'
      },
      answerKey: {
        en: '1) Copper (Conductor): Very low resistivity (~1.7 × 10⁻⁸ Ω·m), used for power wiring; 2) Nichrome (Alloy): High resistivity (~1.1 × 10⁻⁶ Ω·m) with high melting point, used for heating elements; 3) Silicon (Semiconductor): Intermediate resistivity that decreases rapidly with temperature (negative temperature coefficient).',
        hi: '1) तांबा (चालक): बहुत कम प्रतिरोधकता (~1.7 × 10⁻⁸ Ω·m), वायरिंग के लिए उपयोग; 2) नाइक्रोम (मिश्र धातु): उच्च प्रतिरोधकता (~1.1 × 10⁻⁶ Ω·m), हीटिंग घटकों के लिए; 3) सिलिकॉन (अर्धचालक): मध्यम प्रतिरोधकता जो तापमान बढ़ने पर घटती है।',
        bn: '১) তামা (পরিবাহী): অতি নিম্ন আপেক্ষিক রোধ (~১.৭ × ১০⁻⁸ Ω·m), তার তৈরিতে ব্যবহৃত; ২) নাইক্রোম (সংকর ধাতু): উচ্চ আপেক্ষিক রোধ (~১.১ × ১০⁻⁶ Ω·m), হিটিং এলিমেন্টে ব্যবহৃত; ৩) সিলিকন (অর্ধপরিবাহী): তাপমাত্রা বাড়লে এর রোধ কমে।'
      }
    }
  ]
};

export const LESSON_CONDUCTANCE: Lesson = {
  id: 'lsn-conductance',
  topicId: 'tp-conductance',
  order: 6,
  title: {
    en: 'Conductance',
    hi: 'चालकता / कंडक्टेंस (Conductance)',
    bn: 'পরিবাহিতা / কন্ডাক্ট্যান্স (Conductance)'
  },
  easyExplanation: {
    en: 'Conductance is the ease with which an electric current flows through a conductor or material. It is the exact reciprocal (opposite) of electrical resistance.',
    hi: 'चालकता (कंडक्टेंस) वह सुगमता है जिसके साथ किसी चालक से विद्युत धारा प्रवाहित होती है। यह विद्युत प्रतिरोध का ठीक व्युत्क्रम (विपरीत) है।',
    bn: 'পরিবাহিতা (কন্ডাক্ট্যান্স) হলো পরিবাহীর সেই বৈশিষ্ট্য যা নির্দেশ করে কত সহজে এর মধ্য দিয়ে কারেন্ট প্রবাহিত হতে পারে। এটি রোধের ঠিক বিপরীত (ব্যস্তানুপাতিক)।'
  },
  detailedExplanation: {
    en: 'Conductance is denoted by G and measured in Siemens (S), formerly known as mho (℧). Mathematically, G = 1 / R = I / V. Conductance formula in terms of material properties is G = σ × (A / L), where σ is conductivity (Siemens per meter, S/m), A is cross-sectional area, and L is length. Materials with low resistance have high conductance (e.g., silver, copper), whereas insulators have virtually zero conductance.',
    hi: 'चालकता को G द्वारा दर्शाया जाता है और सीमेंस (S) या म्हो (℧) में मापा जाता है। गणितीय रूप से G = 1 / R = I / V। चालकता सूत्र: G = σ × (A / L), जहां σ विद्युत चालकता (S/m) है। कम प्रतिरोध वाली सामग्रियों में उच्च चालकता होती है (जैसे चांदी, तांबा)।',
    bn: 'পরিবাহিতাকে G দ্বারা প্রকাশ করা হয় এবং এর একক সিমান্স (S) বা ম্হো (℧)। গাণিতিকভাবে G = ১ / R = I / V। পরিবাহিতাবাদের সূত্র: G = σ × (A / L), যেখানে σ হলো আপেক্ষিক পরিবাহিতা (S/m)। কম রোধযুক্ত পরিবাহীর পরিবাহিতা অনেক বেশি (যেমন রূপা, তামা)।'
  },
  formulas: [
    {
      symbol: 'G',
      expression: 'G = 1 / R',
      description: {
        en: 'G = Conductance (Siemens, S), R = Resistance (Ohms, Ω)',
        hi: 'G = चालकता (सीमेंस), R = प्रतिरोध (ओम)',
        bn: 'G = পরিবাহিতা (সিমান্স), R = রোধ (ওহম)'
      }
    },
    {
      symbol: 'G',
      expression: 'G = I / V',
      description: {
        en: 'G = Conductance (Siemens, S), I = Current (Amperes, A), V = Voltage (Volts, V)',
        hi: 'G = चालकता (सीमेंस), I = धारा (एम्पीयर), V = वोल्टेज (वोल्ट)',
        bn: 'G = পরিবাহিতা (সিমান্স), I = কারেন্ট (অ্যাম্পিয়ার), V = ভোল্টেজ (ভোল্ট)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-conductance-concept',
      title: {
        en: 'Resistance vs Conductance Reciprocal Relationship',
        hi: 'प्रतिरोध बनाम चालकता व्युत्क्रम संबंध',
        bn: 'রোধ ও পরিবাহিতার ব্যস্তানুপাতিক সম্পর্ক'
      },
      caption: {
        en: 'High Resistance = Low Conductance (Restricted Flow); Low Resistance = High Conductance (Easy Flow).',
        hi: 'उच्च प्रतिरोध = निम्न चालकता (प्रतिबंधित प्रवाह); निम्न प्रतिरोध = उच्च चालकता (सुगम प्रवाह)।',
        bn: 'উচ্চ রোধ = নিম্ন পরিবাহিতা (বাধাপ্রাপ্ত প্রবাহ); নিম্ন রোধ = উচ্চ পরিবাহিতা (সহজ প্রবাহ)।'
      },
      svgType: 'conductance-concept'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-conductance-1',
      problem: {
        en: 'An electrical heating element has a resistance of 25 Ω when connected across a 230 V supply. Calculate its electrical conductance in Siemens.',
        hi: '230 V आपूर्ति से जुड़े एक इलेक्ट्रिक हीटिंग एलिमेंट का प्रतिरोध 25 Ω है। सीमेंस में इसकी विद्युत चालकता की गणना करें।',
        bn: '২৩০ V মেইনসে সংযুক্ত একটি ইলেকট্রিক হিটিং এলিমেন্টের রোধ ২৫ Ω। সিমান্সে এর পরিবাহিতা কত?'
      },
      givenValues: {
        'Resistance (R)': '25 Ω'
      },
      solution: {
        en: 'Using G = 1 / R\nG = 1 / 25 Ω = 0.04 Siemens (or 40 mS).',
        hi: 'सूत्र G = 1 / R का उपयोग करके:\nG = 1 / 25 Ω = 0.04 सीमेंस (या 40 mS)।',
        bn: 'G = ১ / R সূত্র ব্যবহার করে:\nG = ১ / ২৫ Ω = ০.০৪ সিমান্স (বা ৪০ mS)।'
      },
      finalAnswer: {
        en: 'Conductance (G) = 0.04 S (40 mS)',
        hi: 'चालकता (G) = 0.04 S (40 mS)',
        bn: 'পরিবাহিতা (G) = ০.০৪ S (৪০ mS)'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Nodal analysis of complex parallel circuits in electrical network theory using parallel conductance additions (G_total = G₁ + G₂ + ...).',
      'Quality testing of battery electrolytes and water purity using conductivity meters.',
      'Evaluating electrical contact efficiency in heavy-duty circuit breakers and switchgear busbars.'
    ],
    hi: [
      'समानांतर चालकता जोड़ (G_total = G₁ + G₂ + ...) का उपयोग करके नेटवर्क सिद्धांत में समानांतर परिपथों का नोडल विश्लेषण।',
      'कंडक्टिविटी मीटर का उपयोग करके बैटरी इलेक्ट्रोलाइट्स और पानी की शुद्धता का गुणवत्ता परीक्षण।',
      'सर्किट ब्रेकर और स्विचगियर बसबार में विद्युत संपर्क दक्षता का मूल्यांकन।'
    ],
    bn: [
      'প্যারালাল সার্কিট বিশ্লেষণে নোডাল পদ্ধতিতে পরিবাহিতা যোগ (G_total = G₁ + G₂ + ...)।',
      'কন্ডাক্টিভিটি মিটার দিয়ে পানি ও ব্যাটারি ইলেকট্রোলাইটের বিশুদ্ধতা পরীক্ষা।',
      'সার্কিট ব্রেকার ও বাসবারের ইলেকট্রিক্যাল কন্টাক্ট পারফরম্যান্স মূল্যায়ন।'
    ]
  },
  importantPoints: {
    en: [
      'Conductance is the inverse of resistance: G = 1 / R.',
      'SI unit of conductance is Siemens (S). Symbol S = 1 / Ω = Ω⁻¹.',
      'Electrical conductivity (σ) is the inverse of resistivity (ρ): σ = 1 / ρ (unit: Siemens/meter, S/m).',
      'In parallel circuits, total conductance is simply the sum of branch conductances: G_eq = G₁ + G₂ + G₃.',
      'Silver has the highest electrical conductivity of all metals (~6.3 × 10⁷ S/m), followed closely by Copper.'
    ],
    hi: [
      'चालकता प्रतिरोध का व्युत्क्रम है: G = 1 / R।',
      'चालकता का SI मात्रक सीमेंस (S) है। प्रतीक S = 1 / Ω।',
      'विद्युत चालकता (σ) प्रतिरोधकता (ρ) का व्युत्क्रम है: σ = 1 / ρ (मात्रक: S/m)।',
      'समानांतर परिपथों में, कुल चालकता शाखा चालकताओं का योग होती है: G_eq = G₁ + G₂ + G₃।',
      'चांदी की विद्युत चालकता सभी धातुओं में सबसे अधिक होती है (~6.3 × 10⁷ S/m)।'
    ],
    bn: [
      'পরিবাহিতা হলো রোধের বিপরীত: G = ১ / R।',
      'পরিবাহিতার SI একক সিমান্স (S)। সংকেত S = ১ / Ω।',
      'আপেক্ষিক পরিবাহিতা (σ) হলো আপেক্ষিক রোধের (ρ) বিপরীত: σ = ১ / ρ (একক: S/m)।',
      'প্যারালাল সার্কিটে মোট পরিবাহিতা শাখা পরিবাহিতাসমূহের যোগফল: G_eq = G₁ + G₂ + G₃।',
      'ধাতুর মধ্যে রূপার আপেক্ষিক পরিবাহিতা সবচেয়ে বেশি (~৬.৩ × ১০⁷ S/m), এর পরেই তামা।'
    ]
  },
  commonMistakes: {
    en: [
      'Expressing conductance in Ohms instead of Siemens (S).',
      'Adding resistances directly in parallel circuits instead of adding conductances (or using reciprocal sum formula).',
      'Confusing conductance G (Siemens) with specific conductivity σ (Siemens/meter).'
    ],
    hi: [
      'सीमेंस (S) के बजाय ओम में चालकता व्यक्त करना।',
      'समानांतर परिपथों में चालकता जोड़ने के बजाय सीधे प्रतिरोधों को जोड़ना।',
      'चालकता G (सीमेंस) को विशिष्ट चालकता σ (सीमेंस/मीटर) के साथ भ्रमित करना।'
    ],
    bn: [
      'সিমান্সের (S) বদলে ওহমে পরিবাহিতা প্রকাশ করা।',
      'প্যারালাল সার্কিটে পরিবাহিতা যোগ না করে সরাসরি রোধ যোগ করা।',
      'পরিবাহিতা G (সিমান্স) এবং আপেক্ষিক পরিবাহিতা σ (সিমান্স/মিটার) গুলিয়ে ফেলা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-conductance-1',
      question: {
        en: 'The SI unit of electrical conductance is:',
        hi: 'विद्युत चालकता (कंडक्टेंस) का SI मात्रक क्या है?',
        bn: 'বৈদ্যুতিক পরিবাহিতার (Conductance) SI একক কোনটি?'
      },
      options: [
        { id: 'a', text: { en: 'Ohm', hi: 'ओम', bn: 'ওহম' } },
        { id: 'b', text: { en: 'Siemens', hi: 'सीमेंस', bn: 'সিমান্স' } },
        { id: 'c', text: { en: 'Henry', hi: 'हेनरी', bn: 'হেনরি' } },
        { id: 'd', text: { en: 'Tesla', hi: 'टेसला', bn: 'টেসলা' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Siemens (S) is the SI unit of conductance.',
        hi: 'सीमेंस (S) चालकता का SI मात्रक है।',
        bn: 'সিমান্স (S) হলো পরিবাহিতার SI একক।'
      }
    },
    {
      id: 'mcq-conductance-2',
      question: {
        en: 'If a circuit component has a resistance of 4 Ω, its conductance is:',
        hi: 'यदि किसी परिपथ घटक का प्रतिरोध 4 Ω है, तो इसकी चालकता होगी:',
        bn: 'যদি কোনো সার্কিট উপাদানের রোধ ৪ Ω হয়, তবে এর পরিবাহিতা কত?'
      },
      options: [
        { id: 'a', text: { en: '4 Siemens', hi: '4 सीमेंस', bn: '৪ সিমান্স' } },
        { id: 'b', text: { en: '0.25 Siemens', hi: '0.25 सीमेंस', bn: '০.২৫ সিমান্স' } },
        { id: 'c', text: { en: '16 Siemens', hi: '16 सीमेंस', bn: '১৬ সিমান্স' } },
        { id: 'd', text: { en: '1 Siemens', hi: '1 सीमेंस', bn: '১ সিমান্স' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'G = 1 / R = 1 / 4 = 0.25 Siemens.',
        hi: 'G = 1 / R = 1 / 4 = 0.25 सीमेंस।',
        bn: 'G = ১ / R = ১ / ৪ = ০.২৫ সিমান্স।'
      }
    },
    {
      id: 'mcq-conductance-3',
      question: {
        en: 'In a parallel circuit containing two resistors with conductances G₁ and G₂, the equivalent total conductance G_total is:',
        hi: 'चालकता G₁ और G₂ वाले दो प्रतिरोधकों वाले समानांतर परिपथ में, समतुल्य कुल चालकता G_total होगी:',
        bn: 'G₁ এবং G₂ পরিবাহিতাবিশিষ্ট দুটি রোধের প্যারালাল সার্কিটে মোট পরিবাহিতা G_total হলো:'
      },
      options: [
        { id: 'a', text: { en: 'G₁ + G₂', hi: 'G₁ + G₂', bn: 'G₁ + G₂' } },
        { id: 'b', text: { en: '(G₁ × G₂) / (G₁ + G₂)', hi: '(G₁ × G₂) / (G₁ + G₂)', bn: '(G₁ × G₂) / (G₁ + G₂)' } },
        { id: 'c', text: { en: 'G₁ - G₂', hi: 'G₁ - G₂', bn: 'G₁ - G₂' } },
        { id: 'd', text: { en: '1 / (G₁ + G₂)', hi: '1 / (G₁ + G₂)', bn: '১ / (G₁ + G₂)' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Conductances add directly in parallel connections: G_total = G₁ + G₂.',
        hi: 'समानांतर कनेक्शन में चालकता सीधे जुड़ती है: G_total = G₁ + G₂।',
        bn: 'প্যারালাল সংযোগে পরিবাহিতা সরাসরি যোগ হয়: G_total = G₁ + G₂।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-conductance-1',
      question: {
        en: 'Three parallel resistors have resistances of 10 Ω, 20 Ω, and 50 Ω. Find the conductance of each branch and calculate total circuit conductance.',
        hi: 'तीन समानांतर प्रतिरोधकों के प्रतिरोध 10 Ω, 20 Ω और 50 Ω हैं। प्रत्येक शाखा की चालकता ज्ञात कीजिए और कुल परिपथ चालकता की गणना कीजिए।',
        bn: 'তিনটি প্যারালাল রোধের মান ১০ Ω, ২০ Ω এবং ৫০ Ω। প্রতিটি শাখার পরিবাহিতা এবং মোট পরিবাহিতা নির্ণয় করো।'
      },
      hint: {
        en: 'Calculate G = 1 / R for each branch and add them up: G_total = G₁ + G₂ + G₃.',
        hi: 'प्रत्येक शाखा के लिए G = 1 / R ज्ञात करें और उन्हें जोड़ें: G_total = G₁ + G₂ + G₃।',
        bn: 'প্রতিটি শাখার G = ১ / R বের করে যোগ করো: G_total = G₁ + G₂ + G₃।'
      },
      answerKey: {
        en: 'G₁ = 1/10 = 0.1 S, G₂ = 1/20 = 0.05 S, G₃ = 1/50 = 0.02 S.\nTotal Conductance G_total = 0.1 + 0.05 + 0.02 = 0.17 Siemens (170 mS).',
        hi: 'G₁ = 0.1 S, G₂ = 0.05 S, G₃ = 0.02 S।\nकुल चालकता G_total = 0.1 + 0.05 + 0.02 = 0.17 सीमेंस (170 mS)।',
        bn: 'G₁ = ০.১ S, G₂ = ০.০৫ S, G₃ = ০.০২ S।\nমোট পরিবাহিতা G_total = ০.১ + ০.০৫ + ০.০২ = ০.১৭ সিমান্স (১৭০ mS)।'
      }
    },
    {
      id: 'pq-conductance-2',
      question: {
        en: 'A DC motor draws 10 A current when operating at 220 V. Calculate the operational conductance of the motor armature.',
        hi: 'एक डीसी मोटर 220 V पर काम करते समय 10 A धारा लेती है। मोटर आर्मेचर की परिचालन चालकता की गणना करें।',
        bn: 'একটি ডিসি মোটর ২২০ V-এ চলার সময় ১০ A কারেন্ট গ্রহণ করে। আর্মেচারের পরিবাহিতা বের করো।'
      },
      hint: {
        en: 'Use G = I / V.',
        hi: 'G = I / V का प्रयोग करें।',
        bn: 'G = I / V ব্যবহার করো।'
      },
      answerKey: {
        en: 'G = I / V = 10 A / 220 V = 1 / 22 = 0.04545 Siemens (or 45.45 mS).',
        hi: 'G = I / V = 10 A / 220 V = 0.04545 सीमेंस (45.45 mS)।',
        bn: 'G = I / V = ১০ A / ২২০ V = ০.০৪৫৪৫ সিমান্স (৪৫.৪৫ mS)।'
      }
    }
  ]
};
