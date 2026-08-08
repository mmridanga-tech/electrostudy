import { Lesson } from '../types';

export const LESSON_WORK: Lesson = {
  id: 'lsn-work',
  topicId: 'tp-electrical-work',
  order: 9,
  title: {
    en: 'Electrical Work',
    hi: 'विद्युत कार्य (Electrical Work)',
    bn: 'বৈদ্যুতিক কাজ (Electrical Work)'
  },
  easyExplanation: {
    en: 'Electrical Work is the work done when electric charge is moved through an electric potential difference in a circuit.',
    hi: 'विद्युत कार्य वह कार्य है जो तब किया जाता है जब विद्युत आवेश को परिपथ में विद्युत विभवांतर के माध्यम से स्थानांतरित किया जाता है।',
    bn: 'বৈদ্যুতিক কাজ হলো একটি সার্কিটে বিভব পার্থক্যের মধ্য দিয়ে তড়িৎ আধান স্থানান্তরিত করতে সম্পন্ন কাজ।'
  },
  detailedExplanation: {
    en: 'Electrical Work is denoted by W and measured in Joules (J). When a potential difference V moves charge Q, work done is W = V × Q. Substituting Q = I × t gives W = V × I × t = P × t. Electrical work converts electrical energy into mechanical work (motors), thermal energy (heaters), light energy (bulbs), or chemical energy (battery charging). While "work" refers to energy transfer process, "energy" represents the capacity to do work.',
    hi: 'विद्युत कार्य को W द्वारा दर्शाया जाता है और जूल (J) में मापा जाता है। जब विभवांतर V आवेश Q को स्थानांतरित करता है, तो किया गया कार्य W = V × Q होता है। Q = I × t रखने पर W = V × I × t = P × t प्राप्त होता है। विद्युत कार्य विद्युत ऊर्जा को यांत्रिक, तापीय, प्रकाश या रासायनिक ऊर्जा में बदलता है।',
    bn: 'বৈদ্যুতিক কাজকে W দ্বারা প্রকাশ করা হয় এবং এর একক জুল (J)। যখন বিভব পার্থক্য V আধান Q-কে স্থানান্তর করে, তখন সম্পন্ন কাজ W = V × Q। Q = I × t বসালে W = V × I × t = P × t পাওয়া যায়। বৈদ্যুতিক কাজ বৈদ্যাতিক শক্তিকে যান্ত্রিক (মোটর), তাপ (হিটার), আলো (বাল্ব) বা রাসায়নিক শক্তিতে রূপান্তরিত করে।'
  },
  formulas: [
    {
      symbol: 'W',
      expression: 'W = V × Q',
      description: {
        en: 'W = Electrical Work (Joules, J), V = Voltage (Volts, V), Q = Charge (Coulombs, C)',
        hi: 'W = विद्युत कार्य (जूल), V = वोल्टेज (वोल्ट), Q = आवेश (कूलॉम)',
        bn: 'W = বৈদ্যুতিক কাজ (জুল), V = ভোল্টেজ (ভোল্ট), Q = আধান (কুলম্ব)'
      }
    },
    {
      symbol: 'W',
      expression: 'W = V × I × t',
      description: {
        en: 'W = Electrical Work (Joules, J), V = Voltage (Volts), I = Current (Amperes), t = Time (Seconds)',
        hi: 'W = विद्युत कार्य (जूल), V = वोल्टेज (वोल्ट), I = धारा (एम्पीयर), t = समय (सेकंड)',
        bn: 'W = বৈদ্যুতিক কাজ (জুল), V = ভোল্টেজ (ভোল্ট), I = কারেন্ট (অ্যাম্পিয়ার), t = সময় (সেকেন্ড)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-work-energy-relation',
      title: {
        en: 'Electrical Work to Energy Conversion',
        hi: 'विद्युत कार्य से ऊर्जा रूपांतरण',
        bn: 'বৈদ্যুতিক কাজ থেকে শক্তি রূপান্তর'
      },
      caption: {
        en: 'Electrical work W = V I t transfers energy to motor, lamp, or heating element.',
        hi: 'विद्युत कार्य W = V I t मोटर, लैंप या हीटिंग तत्व में ऊर्जा स्थानांतरित करता है।',
        bn: 'বৈদ্যুতিক কাজ W = V I t মোটর, ল্যাম্প বা হিটিং এলিমেন্টে শক্তি স্থানান্তর করে।'
      },
      svgType: 'work-energy-relation'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-work-1',
      problem: {
        en: 'A 12 V automobile battery delivers 5 A current to a lamp for 30 minutes. Calculate the total electrical work done by the battery.',
        hi: 'एक 12 V ऑटोमोबाइल बैटरी 30 मिनट के लिए एक लैंप को 5 A धारा देती है। बैटरी द्वारा किए गए कुल विद्युत कार्य की गणना करें।',
        bn: 'একটি ১২ V গাড়ির ব্যাটারি ৩০ মিনিটের জন্য একটি ল্যাম্পে ৫ A কারেন্ট যোগায়। ব্যাটারি দ্বারা সম্পন্ন মোট কাজ কত?'
      },
      givenValues: {
        'Voltage (V)': '12 V',
        'Current (I)': '5 A',
        'Time (t)': '30 minutes = 30 × 60 = 1800 s'
      },
      solution: {
        en: 'Using W = V × I × t\nW = 12 V × 5 A × 1800 s = 108,000 Joules = 108 kJ.',
        hi: 'सूत्र W = V × I × t का उपयोग करके:\nW = 12 V × 5 A × 1800 s = 108,000 जूल = 108 kJ।',
        bn: 'W = V × I × t সূত্র প্রয়োগ করে:\nW = ১২ V × ৫ A × ১৮০০ s = ১০৮,০০০ জুল = ১০৮ kJ।'
      },
      finalAnswer: {
        en: 'Electrical Work (W) = 108 kJ (108,000 J)',
        hi: 'विद्युत कार्य (W) = 108 kJ',
        bn: 'বৈদ্যুতিক কাজ (W) = ১০৮ kJ'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Electric motors doing mechanical shaft work to lift elevators and pump water.',
      'Electrolytic cells doing chemical work in copper refining and electroplating.',
      'Electric arc furnaces performing thermal work to melt steel scrap in metallurgy.'
    ],
    hi: [
      'लिफ्ट उठाने और पानी पंप करने के लिए यांत्रिक शाफ्ट कार्य करने वाली इलेक्ट्रिक मोटरें।',
      'तांबा शोधन और इलेक्ट्रोप्लेटिंग में रासायनिक कार्य करने वाले इलेक्ट्रोलाइटिक सेल।',
      'धातुकर्म में स्क्रैप स्टील पिघलाने के लिए तापीय कार्य करने वाली इलेक्ट्रिक आर्क भट्ठियां।'
    ],
    bn: [
      'লিফট চালানো ও পানি পাম্পে মেকানিক্যাল শ্যাফট ওয়ার্ক করা ইলেকট্রিক মোটর।',
      'কপার বিশোধন ও ইলেকট্রোপ্লেটিংয়ে কেমিক্যাল ওয়ার্ক করা ইলেকট্রোলাইটিক সেল।',
      'ধাতুবিদ্যায় স্টিল গলানোর কাজে ইলেকট্রিক আর্ন ফার্নেসের থার্মাল ওয়ার্ক।'
    ]
  },
  importantPoints: {
    en: [
      'Electrical work SI unit is Joule (J). 1 Joule = 1 Volt × 1 Coulomb = 1 Watt-second.',
      'Formula: W = V Q = V I t = I² R t = (V² / R) t.',
      'Work is done when charge moves across a potential gradient.',
      'Electrical work done equals electrical energy consumed or transferred.',
      'Work is a scalar quantity.'
    ],
    hi: [
      'विद्युत कार्य का SI मात्रक जूल (J) है। 1 जूल = 1 वोल्ट × 1 कूलॉम = 1 वाट-सेकंड।',
      'सूत्र: W = V Q = V I t = I² R t = (V² / R) t।',
      'कार्य तब होता है जब आवेश विभव प्रवणता के पार गति करता है।',
      'किया गया विद्युत कार्य खपत या स्थानांतरित विद्युत ऊर्जा के बराबर होता है।',
      'कार्य एक अदिश राशि है।'
    ],
    bn: [
      'বৈদ্যুতিক কাজের SI একক জুল (J)। ১ জুল = ১ ভোল্ট × ১ কুলম্ব = ১ ওয়াট-সেকেন্ড।',
      'সূত্র: W = V Q = V I t = I² R t = (V² / R) t।',
      'বিভব পার্থক্যের মধ্য দিয়ে আধান প্রবাহিত হলেই কেবল কাজ সম্পন্ন হয়।',
      'সম্পন্ন কাজ ব্যবহৃত বা রূপান্তরিত বৈদ্যুতিক শক্তির সমান।',
      'কাজ একটি স্কেলার রাশি।'
    ]
  },
  commonMistakes: {
    en: [
      'Using time t in minutes or hours in SI formula W = V I t without converting to seconds.',
      'Confusing electrical work W (Joules) with power P (Watts = Joules/second).',
      'Believing work can be done in a circuit without a complete closed conductive path.'
    ],
    hi: [
      'SI सूत्र W = V I t में समय t को सेकंड में बदले बिना मिनट या घंटे में उपयोग करना।',
      'विद्युत कार्य W (जूल) को शक्ति P (वाट = जूल/सेकंड) के साथ मिलाना।',
      'यह मानना कि बिना बंद परिपथ के भी कार्य किया जा सकता है।'
    ],
    bn: [
      'W = V I t সূত্রে সময় t-কে সেকেন্ডে প্রকাশ না করে মিনিট বা ঘণ্টায় ব্যবহার করা।',
      'বৈদ্যুতিক কাজ W (জুল) এবং ক্ষমতা P (ওয়াট)-এর মধ্যে বিভ্রান্তি।',
      'বন্ধ সার্কিট সংযোগ ছাড়া কাজ সম্পন্ন হতে পারে ভাবা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-work-1',
      question: {
        en: 'Which formula correctly represents electrical work done W?',
        hi: 'कौन सा सूत्र किए गए विद्युत कार्य W का सही प्रतिनिधित्व करता है?',
        bn: 'কোন সূত্রটি সম্পন্ন বৈদ্যুতিক কাজ W সঠিকভাবে নির্দেশ করে?'
      },
      options: [
        { id: 'a', text: { en: 'W = V × Q', hi: 'W = V × Q', bn: 'W = V × Q' } },
        { id: 'b', text: { en: 'W = V / Q', hi: 'W = V / Q', bn: 'W = V / Q' } },
        { id: 'c', text: { en: 'W = I / t', hi: 'W = I / t', bn: 'W = I / t' } },
        { id: 'd', text: { en: 'W = R × Q', hi: 'W = R × Q', bn: 'W = R × Q' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Electrical work W = Potential difference (V) × Charge (Q).',
        hi: 'विद्युत कार्य W = विभवांतर (V) × आवेश (Q)।',
        bn: 'বৈদ্যুতিক কাজ W = বিভব পার্থক্য (V) × আধান (Q)।'
      }
    },
    {
      id: 'mcq-work-2',
      question: {
        en: 'How much electrical work is done when 5 C charge passes across 10 V potential difference?',
        hi: 'जब 5 C आवेश 10 V विभवांतर के पार गुजरता है तो कितना विद्युत कार्य होता है?',
        bn: '১০ V বিভব পার্থক্যের আড়াআড়িতে ৫ C আধান সরাতে কত কাজ সম্পন্ন হয়?'
      },
      options: [
        { id: 'a', text: { en: '2 Joules', hi: '2 जूल', bn: '২ জুল' } },
        { id: 'b', text: { en: '50 Joules', hi: '50 जूल', bn: '৫০ জুল' } },
        { id: 'c', text: { en: '0.5 Joules', hi: '0.5 जूल', bn: '০.৫ জুল' } },
        { id: 'd', text: { en: '15 Joules', hi: '15 जूल', bn: '১৫ জুল' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'W = V × Q = 10 V × 5 C = 50 Joules.',
        hi: 'W = V × Q = 10 V × 5 C = 50 जूल।',
        bn: 'W = V × Q = ১০ V × ৫ C = ৫০ জুল।'
      }
    },
    {
      id: 'mcq-work-3',
      question: {
        en: 'What is the relationship between Electrical Work W and Electrical Power P?',
        hi: 'विद्युत कार्य W और विद्युत शक्ति P के बीच क्या संबंध है?',
        bn: 'বৈদ্যুতিক কাজ W এবং ক্ষমতার P-এর মধ্যে সম্পর্ক কী?'
      },
      options: [
        { id: 'a', text: { en: 'W = P × t', hi: 'W = P × t', bn: 'W = P × t' } },
        { id: 'b', text: { en: 'W = P / t', hi: 'W = P / t', bn: 'W = P / t' } },
        { id: 'c', text: { en: 'P = W × t', hi: 'P = W × t', bn: 'P = W × t' } },
        { id: 'd', text: { en: 'W = P² × t', hi: 'W = P² × t', bn: 'W = P² × t' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Work W = Power (P) × Time (t).',
        hi: 'कार्य W = शक्ति (P) × समय (t)।',
        bn: 'কাজ W = ক্ষমতা (P) × সময় (t)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-work-1',
      question: {
        en: 'An electric soldering iron has a resistance of 50 Ω and draws 2 A current from mains supply. Calculate the electrical work done in 5 minutes in kilojoules.',
        hi: 'एक इलेक्ट्रिक सोल्डरिंग आयरन का प्रतिरोध 50 Ω है और यह 2 A धारा लेता है। 5 मिनट में किए गए विद्युत कार्य की किलोजूल में गणना करें।',
        bn: 'একটি শোল্ডারিং আয়রনের রোধ ৫০ Ω এবং কারেন্ট ২ A। ৫ মিনিটে সম্পন্ন কাজের পরিমাণ কিলোজুলে বের করো।'
      },
      hint: {
        en: 'Convert 5 min to seconds (5 × 60 = 300 s) and use W = I² × R × t.',
        hi: '5 मिनट को सेकंड में बदलें (300 s) और W = I² × R × t का प्रयोग करें।',
        bn: '৫ মিনিটকে সেকেন্ডে নাও (৩০০ s) এবং W = I² × R × t প্রয়োগ করো।'
      },
      answerKey: {
        en: 't = 5 × 60 = 300 s. W = I² × R × t = (2)² × 50 × 300 = 4 × 50 × 300 = 60,000 Joules = 60 kJ.',
        hi: 't = 300 s। W = 2² × 50 × 300 = 60,000 जूल = 60 kJ।',
        bn: 't = ৩০০ সেকেন্ড। W = ২² × ৫০ × ৩০০ = ৬০,০০০ জুল = ৬০ kJ।'
      }
    },
    {
      id: 'pq-work-2',
      question: {
        en: 'Calculate the charge transferred when 2400 Joules of electrical work is performed across a 12 V DC source.',
        hi: 'जब 12 V डीसी स्रोत पर 2400 जूल विद्युत कार्य किया जाता है तो स्थानांतरित आवेश की गणना करें।',
        bn: '১২ V ডিসি সোর্সে ২৪০০ জুল কাজ করা হলে স্থানান্তরিত আধানের পরিমাণ কত?'
      },
      hint: {
        en: 'Use Q = W / V.',
        hi: 'Q = W / V का प्रयोग करें।',
        bn: 'Q = W / V ব্যবহার করো।'
      },
      answerKey: {
        en: 'Q = W / V = 2400 J / 12 V = 200 Coulombs.',
        hi: 'Q = W / V = 2400 J / 12 V = 200 कूलॉम।',
        bn: 'Q = W / V = ২৪০০ J / ১২ V = ২০০ কুলম্ব।'
      }
    }
  ]
};

export const LESSON_UNITS_SI: Lesson = {
  id: 'lsn-units-si',
  topicId: 'tp-units-si',
  order: 10,
  title: {
    en: 'Units & SI Units',
    hi: 'मात्रक एवं एसआई इकाइयाँ (Units & SI Units)',
    bn: 'একক এবং এসআই একক (Units & SI Units)'
  },
  easyExplanation: {
    en: 'SI Units (System International) are standard universal units used by electrical engineers worldwide to measure charge, current, voltage, resistance, power, and energy.',
    hi: 'SI इकाइयाँ (सिस्टम इंटरनेशनल) दुनिया भर के इलेक्ट्रिकल इंजीनियरों द्वारा आवेश, धारा, वोल्टेज, प्रतिरोध, शक्ति और ऊर्जा को मापने के लिए उपयोग की जाने वाली मानक इकाइयाँ हैं।',
    bn: 'SI একক (সিস্টেম ইন্টারন্যাশনাল) হলো সারাবিশ্বের ইলেকট্রিক্যাল ইঞ্জিনিয়ারদের ব্যবহৃত সর্বজনীন একক যার মাধ্যমে আধান, কারেন্ট, ভোল্টেজ, রোধ, ক্ষমতা ও শক্তি পরিমাপ করা হয়।'
  },
  detailedExplanation: {
    en: 'Base SI units include Ampere (A) for current, Second (s) for time, Meter (m) for length, and Kilogram (kg) for mass. Derived electrical units include: Coulomb (C = A·s), Volt (V = J/C = W/A), Ohm (Ω = V/A), Siemens (S = 1/Ω), Watt (W = J/s), Joule (J = W·s), Farad (F = C/V), Henry (H = Wb/A), Hertz (Hz = 1/s). Standard engineering prefixes: pico (p = 10⁻¹²), nano (n = 10⁻⁹), micro (µ = 10⁻⁶), milli (m = 10⁻³), kilo (k = 10³), mega (M = 10⁶), giga (G = 10⁹). Unit conversion requires multiplying or dividing by power-of-10 conversion factors.',
    hi: 'मूल SI इकाइयों में धारा के लिए एम्पीयर (A) शामिल है। व्युत्पन्न विद्युत इकाइयाँ: कूलॉम (C), वोल्ट (V), ओम (Ω), सीमेंस (S), वाट (W), जूल (J), फैराड (F), हेनरी (H), हर्ट्ज़ (Hz)। मानक उपसर्ग: पिको (10⁻¹²), नैनो (10⁻⁹), माइक्रो (10⁻⁶), मिली (10⁻³), किलो (10³), मेगा (10⁶), गीगा (10⁹)।',
    bn: 'মৌলিক SI এককে কারেন্টের জন্য অ্যাম্পিয়ার (A)। লব্ধ এককসমূহ: কুলম্ব (C), ভোল্ট (V), ওহম (Ω), সিমান্স (S), ওয়াট (W), জুল (J), ফ্যারাড (F), হেনরি (H), হার্টজ (Hz)। ইঞ্জিনিয়ারিং প্রেফিক্স: পিকো (১০⁻¹²), ন্যানো (১০⁻⁹), মাইক্রো (১০⁻⁶), মিলি (১০⁻³), কিলো (১০³), মেগা (১০⁶), গিগাবাইট/গিগাওয়াট (১০⁹)।'
  },
  formulas: [
    {
      symbol: 'SI Summary',
      expression: '1 V = 1 W/A = 1 J/C; 1 Ω = 1 V/A; 1 F = 1 C/V',
      description: {
        en: 'Derived relationships between fundamental electrical SI units',
        hi: 'मूल विद्युत SI इकाइयों के बीच व्युत्पन्न संबंध',
        bn: 'মৌলিক বৈদ্যুতিক SI এককসমূহের পারস্পরিক সম্পর্ক'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-si-prefixes',
      title: {
        en: 'Engineering Metric Prefixes Scale',
        hi: 'इंजीनियरिंग मीट्रिक उपसर्ग पैमाना',
        bn: 'ইঞ্জিনিয়ারিং মেট্রিক প্রেফিক্স স্কেল'
      },
      caption: {
        en: 'Engineering prefixes convert units by factors of 10³ (Giga, Mega, Kilo, milli, micro, nano, pico).',
        hi: 'इंजीनियरिंग उपसर्ग 10³ के कारकों द्वारा इकाइयों को बदलते हैं (गीगा, मेगा, किलो, मिली, माइक्रो, नैनो)।',
        bn: 'ইঞ্জিনিয়ারিং প্রেফিক্স ১০³ গুণিতক হিসেবে একক রূপান্তর করে (জিগা, মেগা, কিলো, মিলি, মাইক্রো, ন্যানো)।'
      },
      svgType: 'si-prefixes'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-si-1',
      problem: {
        en: 'Convert: 1) 450 mA to Amperes; 2) 2.5 MΩ to Ohms; 3) 0.02 µF to Farads.',
        hi: 'रूपांतरित करें: 1) 450 mA को एम्पीयर में; 2) 2.5 MΩ को ओम में; 3) 0.02 µF को फैराड में।',
        bn: 'রূপান্তর করো: ১) ৪৫০ mA কে অ্যাম্পিয়ারে; ২) ২.৫ MΩ কে ওহমে; ৩) ০.০২ µF কে ফ্যারাডে।'
      },
      givenValues: {
        '1 mA': '10⁻³ A',
        '1 MΩ': '10⁶ Ω',
        '1 µF': '10⁻⁶ F'
      },
      solution: {
        en: '1) 450 mA = 450 × 10⁻³ A = 0.45 A.\n2) 2.5 MΩ = 2.5 × 10⁶ Ω = 2,500,000 Ω.\n3) 0.02 µF = 0.02 × 10⁻⁶ F = 2 × 10⁻⁸ F (20 nF).',
        hi: '1) 450 mA = 0.45 A।\n2) 2.5 MΩ = 2,500,000 Ω।\n3) 0.02 µF = 2 × 10⁻⁸ F।',
        bn: '১) ৪৫০ mA = ০.৪৫ A।\n২) ২.৫ MΩ = ২৫,০০,০০০ Ω।\n৩) ০.০২ µF = ২ × ১০⁻⁸ F।'
      },
      finalAnswer: {
        en: '1) 0.45 A, 2) 2,500,000 Ω, 3) 2 × 10⁻⁸ F',
        hi: '1) 0.45 A, 2) 2,500,000 Ω, 3) 2 × 10⁻⁸ F',
        bn: '১) ০.৪৫ A, ২) ২৫,০০,০০০ Ω, ৩) ২ × ১০⁻⁸ F'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Reading multimeter range selectors (mV, mA, kΩ, MΩ).',
      'Interpreting datasheet values for electronic components (e.g., 100 nF capacitors, 4.7 kΩ resistors).',
      'Power grid specifications expressed in MW, GW, kV, and MVA.'
    ],
    hi: [
      'मल्टीमीटर रेंज चयनकर्ताओं को पढ़ना (mV, mA, kΩ, MΩ)।',
      'इलेक्ट्रॉनिक घटकों के डेटाशीट मानों की व्याख्या करना (जैसे 100 nF कैपेसिटर, 4.7 kΩ प्रतिरोधक)।',
      'MW, GW, kV और MVA में व्यक्त पावर ग्रिड विनिर्देश।'
    ],
    bn: [
      'মাল্টিমিটারের রেঞ্জ ডায়াল সিলেক্টর সঠিকভাবে সেট করা (mV, mA, kΩ, MΩ)।',
      'ইলেকট্রনিক কম্পোনেন্টের ডাটাশিট বোঝা (যেমন ১০০ nF ক্যাপাসিটর, ৪.৭ kΩ রেজিস্টর)।',
      'পাওয়ার গ্রিডের ক্ষমতা MW, GW, kV এবং MVA এককে প্রকাশ করা।'
    ]
  },
  importantPoints: {
    en: [
      'Ampere (A) is the base SI unit for electrical current.',
      'Derived Units: Voltage = Volt (V), Charge = Coulomb (C), Resistance = Ohm (Ω), Power = Watt (W).',
      'Capacitance unit is Farad (F); Inductance unit is Henry (H); Frequency unit is Hertz (Hz).',
      'Engineering prefixes change by powers of 10³ (kilo = 10³, mega = 10⁶, milli = 10⁻³, micro = 10⁻⁶).',
      'Always perform calculations in base SI units before applying final prefixes.'
    ],
    hi: [
      'एम्पीयर (A) विद्युत धारा के लिए मूल SI इकाई है।',
      'व्युत्पन्न इकाइयाँ: वोल्टेज = वोल्ट (V), आवेश = कूलॉम (C), प्रतिरोध = ओम (Ω), शक्ति = वाट (W)।',
      'धारिता इकाई फैराड (F); प्रेरकत्व इकाई हेनरी (H); आवृत्ति इकाई हर्ट्ज़ (Hz)।',
      'इंजीनियरिंग उपसर्ग 10³ के घात द्वारा बदलते हैं (किलो = 10³, मेगा = 10⁶, मिली = 10⁻³)।',
      'अंतिम उपसर्ग लागू करने से पहले हमेशा मूल SI इकाइयों में गणना करें।'
    ],
    bn: [
      'অ্যাম্পিয়ার (A) হলো কারেন্টের মৌলিক SI একক।',
      'লব্ধ একক: ভোল্টেজ = ভোল্ট (V), আধান = কুলম্ব (C), রোধ = ওহম (Ω), ক্ষমতা = ওয়াট (W)।',
      'ধারকত্ব = ফ্যারাড (F); আবেশত্ব = হেনরি (H); কম্পাঙ্ক = হার্টজ (Hz)।',
      'ইঞ্জিনিয়ারিং প্রেফিক্স ১০³ গুণিতকে পরিবর্তিত হয়।',
      'সর্বদা মূল SI এককে হিসাব সম্পন্ন করে শেষে প্রয়োজনমতো প্রেফিক্স প্রয়োগ করো।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing milli (m = 10⁻³) with Mega (M = 10⁶).',
      'Forgetting that 1 Hz = 1 cycle per second (s⁻¹).',
      'Mixing up kW (Power) and kWh (Energy) in electrical engineering calculations.'
    ],
    hi: [
      'मिली (m = 10⁻³) को मेगा (M = 10⁶) के साथ मिलाना।',
      'यह भूल जाना कि 1 Hz = 1 चक्र प्रति सेकंड होता है।',
      'इलेक्ट्रिकल इंजीनियरिंग गणना में kW और kWh को मिलाना।'
    ],
    bn: [
      'মিলি (m = ১০⁻³) এবং মেগা (M = ১০⁶) গুলিয়ে ফেলা।',
      '১ Hz = ১ সাইকেল প্রতি সেকেন্ড (s⁻¹) তা ভুলে যাওয়া।',
      'হিসাবের সময় kW এবং kWh এককের মধ্যে বিভ্রান্ত হওয়া।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-units-1',
      question: {
        en: 'Which of the following is a base SI unit in electrical engineering?',
        hi: 'निम्नलिखित में से कौन सा इलेक्ट्रिकल इंजीनियरिंग में एक मूल SI मात्रक है?',
        bn: 'নিচের কোনটি ইলেকট্রিক্যাল ইঞ্জিনিয়ারিংয়ের মৌলিক SI একক?'
      },
      options: [
        { id: 'a', text: { en: 'Volt', hi: 'वोल्ट', bn: 'ভোল্ট' } },
        { id: 'b', text: { en: 'Ampere', hi: 'एम्पीयर', bn: 'অ্যাম্পিয়ার' } },
        { id: 'c', text: { en: 'Ohm', hi: 'ओम', bn: 'ওহম' } },
        { id: 'd', text: { en: 'Coulomb', hi: 'कूलॉम', bn: 'কুলম্ব' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'The Ampere (A) is one of the 7 fundamental base SI units.',
        hi: 'एम्पीयर (A) 7 मूल SI इकाइयों में से एक है।',
        bn: 'অ্যাম্পিয়ার (A) হলো মূল ৭টি মৌলিক SI এককের একটি।'
      }
    },
    {
      id: 'mcq-units-2',
      question: {
        en: 'The prefix "micro" (µ) represents a multiplication factor of:',
        hi: 'उपसर्ग "माइक्रो" (µ) किस गुणांक का प्रतिनिधित्व करता है?',
        bn: '"মাইক্রো" (µ) প্রেফিক্সটি কত গুণিতক নির্দেশ করে?'
      },
      options: [
        { id: 'a', text: { en: '10⁻³', hi: '10⁻³', bn: '১০⁻³' } },
        { id: 'b', text: { en: '10⁻⁶', hi: '10⁻⁶', bn: '১০⁻⁶' } },
        { id: 'c', text: { en: '10⁻⁹', hi: '10⁻⁹', bn: '১০⁻⁹' } },
        { id: 'd', text: { en: '10⁻¹²', hi: '10⁻¹²', bn: '১০⁻¹²' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Micro (µ) = 10⁻⁶ (one-millionth).',
        hi: 'माइक्रो (µ) = 10⁻⁶।',
        bn: 'মাইক্রো (µ) = ১০⁻⁶।'
      }
    },
    {
      id: 'mcq-units-3',
      question: {
        en: 'The SI unit of electrical inductance is the:',
        hi: 'विद्युत प्रेरकत्व (Inductance) का SI मात्रक क्या है?',
        bn: 'বৈদ্যুতিক আবেশত্বের (Inductance) SI একক কোনটি?'
      },
      options: [
        { id: 'a', text: { en: 'Farad', hi: 'फैराड', bn: 'ফ্যারাড' } },
        { id: 'b', text: { en: 'Henry', hi: 'हेनरी', bn: 'হেনরি' } },
        { id: 'c', text: { en: 'Siemens', hi: 'सीमेंस', bn: 'সিমান্স' } },
        { id: 'd', text: { en: 'Weber', hi: 'वेबर', bn: 'ওয়েবার' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Henry (H) is the SI unit of inductance.',
        hi: 'हेनरी (H) प्रेरकत्व का SI मात्रक है।',
        bn: 'হেনরি (H) হলো আবেশত্বের SI একক।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-units-1',
      question: {
        en: 'Express 0.000045 Amperes in 1) milliamperes (mA) and 2) microamperes (µA).',
        hi: '0.000045 एम्पीयर को 1) मिलीएम्पीयर (mA) और 2) माइक्रोएम्पीयर (µA) में व्यक्त करें।',
        bn: '০.০০০০৪৫ অ্যাম্পিয়ারকে ১) মিলিঅ্যাম্পিয়ার (mA) এবং ২) মাইক্রোঅ্যাম্পিয়ারে (µA) প্রকাশ করো।'
      },
      hint: {
        en: 'Multiply by 10³ for mA and 10⁶ for µA.',
        hi: 'mA के लिए 10³ से और µA के लिए 10⁶ से गुणा करें।',
        bn: 'mA-এর জন্য ১০³ এবং µA-এর জন্য ১০⁶ দিয়ে গুণ করো।'
      },
      answerKey: {
        en: '1) In mA: 0.000045 × 1000 = 0.045 mA.\n2) In µA: 0.000045 × 1,000,000 = 45 µA.',
        hi: '1) 0.045 mA। 2) 45 µA।',
        bn: '১) ০.০৪৫ mA। ২) ৪৫ µA।'
      }
    },
    {
      id: 'pq-units-2',
      question: {
        en: 'Construct a comparison of SI units for Voltage, Current, Resistance, Conductance, Power, and Energy showing symbols and derived formulas.',
        hi: 'वोल्टेज, धारा, प्रतिरोध, चालकता, शक्ति और ऊर्जा के लिए प्रतीकों और व्युत्पन्न सूत्रों को दर्शाते हुए SI इकाइयों की तुलनात्मक तालिका बनाएं।',
        bn: 'ভোল্টেজ, কারেন্ট, রোধ, পরিবাহিতা, ক্ষমতা এবং শক্তির সংকেত ও লব্ধ সূত্রসহ SI এককের তুলনা দেখাও।'
      },
      hint: {
        en: 'List V, I, R, G, P, E with units Volt, Ampere, Ohm, Siemens, Watt, Joule.',
        hi: 'V, I, R, G, P, E को वोल्ट, एम्पीयर, ओम, सीमेंस, वाट, जूल इकाइयों के साथ सूचीबद्ध करें।',
        bn: 'V, I, R, G, P, E কে ভোল্ট, অ্যাম্পিয়ার, ওহম, সিমান্স, ওয়াট, জুল এককে প্রকাশ করো।'
      },
      answerKey: {
        en: '1) Voltage (V): Volt (V = J/C);\n2) Current (I): Ampere (A = C/s);\n3) Resistance (R): Ohm (Ω = V/A);\n4) Conductance (G): Siemens (S = 1/Ω);\n5) Power (P): Watt (W = J/s);\n6) Energy (E): Joule (J = W·s).',
        hi: '1) वोल्टेज: वोल्ट (V = J/C);\n2) धारा: एम्पीयर (A = C/s);\n3) प्रतिरोध: ओम (Ω = V/A);\n4) चालकता: सीमेंस (S = 1/Ω);\n5) शक्ति: वाट (W = J/s);\n6) ऊर्जा: जूल (J = W·s)।',
        bn: '১) ভোল্টেজ: ভোল্ট (V = J/C);\n২) কারেন্ট: অ্যাম্পিয়ার (A = C/s);\n৩) রোধ: ওহম (Ω = V/A);\n৪) পরিবাহিতা: সিমান্স (S = ১/Ω);\n৫) ক্ষমতা: ওয়াট (W = J/s);\n৬) শক্তি: জুল (J = W·s)।'
      }
    }
  ]
};

export const LESSON_SYMBOLS: Lesson = {
  id: 'lsn-symbols',
  topicId: 'tp-electrical-symbols',
  order: 11,
  title: {
    en: 'Electrical Symbols',
    hi: 'विद्युत संकेत एवं प्रतीक (Electrical Symbols)',
    bn: 'বৈদ্যুতিক প্রতীকসমূহ (Electrical Symbols)'
  },
  easyExplanation: {
    en: 'Electrical Symbols are standard graphical representation icons used in circuit schematics to represent electrical and electronic components clearly and uniformly.',
    hi: 'विद्युत प्रतीक परिपथ आरेखों में विद्युत और इलेक्ट्रॉनिक घटकों को स्पष्ट और समान रूप से प्रस्तुत करने के लिए उपयोग किए जाने वाले मानक चित्रमय प्रतीक हैं।',
    bn: 'বৈদ্যুতিক প্রতীক হলো সার্কিট ডায়াগ্রামে বৈদ্যুতিক ও ইলেকট্রনিক যন্ত্রপাতিকে মানসম্মতভাবে উপস্থাপনের জন্য ব্যবহৃত স্ট্যান্ডার্ড গ্রাফিক্যাল চিহ্ন।'
  },
  detailedExplanation: {
    en: 'Standard electrical schematics follow IEC (International Electrotechnical Commission) or ANSI/IEEE standards. Essential symbols include: 1) Cell & Battery (DC potential source); 2) AC Generator/Supply; 3) Fixed Resistor & Variable Resistor/Rheostat; 4) Capacitor (polarised and non-polarised); 5) Inductor/Coil; 6) Single Pole Single Throw (SPST) Switch; 7) Lamp/Bulb; 8) Fuse (overcurrent protection); 9) Earth/Ground; 10) Ammeter & Voltmeter; 11) Motor & Generator; 12) Transformer; 13) PN Junction Diode & LED (Light Emitting Diode). Using standard symbols ensures circuit diagrams can be accurately read by engineers globally.',
    hi: 'मानक विद्युत आरेख IEC या ANSI/IEEE मानकों का पालन करते हैं। मुख्य प्रतीक: 1) सेल और बैटरी; 2) एसी स्रोत; 3) फिक्स्ड और वेरिएबल रेसिस्टर; 4) कैपेसिटर; 5) इंडक्टर; 6) स्विच; 7) लैंप; 8) फ्यूज; 9) अर्थ/ग्राउंड; 10) अमीटर और वोल्टमीटर; 11) मोटर और जनरेटर; 12) ट्रांसफॉर्मर; 13) डायोड और एलईडी।',
    bn: 'স্ট্যান্ডার্ড সার্কিট ডায়াগ্রাম IEC বা ANSI/IEEE মানচিত্র অনুসরণ করে। প্রধান প্রতীকসমূহ: ১) সেল ও ব্যাটারি; ২) এসি সোর্স; ৩) রেজিস্টর ও ভেরিয়েবল রেজিস্টর; ৪) ক্যাপাসিটর; ৫) ইনডাক্টর; ৬) সুইচ; ৭) ল্যাম্প; ৮) ফিউজ; ৯) আর্থ/গ্রাউন্ড; ১০) অ্যামিটার ও ভোল্টমিটার; ১১) মোটর ও জেনারেটর; ১২) ট্রান্সফরমার; ১৩) ডায়োড ও এলইডি।'
  },
  formulas: [
    {
      symbol: 'Schematic Standard',
      expression: 'IEC 60617 / IEEE 315 Electrical Graphic Symbols',
      description: {
        en: 'International standard electrical diagram symbol specifications',
        hi: 'अंतर्राष्ट्रीय मानक विद्युत आरेख प्रतीक विनिर्देश',
        bn: 'আন্তর্জাতিক স্ট্যান্ডার্ড বৈদ্যুতিক প্রতীক নির্দেশিকা'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-electrical-symbols-grid',
      title: {
        en: 'Standard Electrical Circuit Symbols Chart',
        hi: 'मानक विद्युत परिपथ प्रतीक चार्ट',
        bn: 'স্ট্যান্ডার্ড বৈদ্যুতিক প্রতীক চার্ট'
      },
      caption: {
        en: 'Standard symbols for Cell, Battery, Resistor, Capacitor, Inductor, Switch, Ammeter, Voltmeter, and Ground.',
        hi: 'सेल, बैटरी, प्रतिरोधक, संधारित्र, प्रेरक, स्विच, अमीटर, वोल्टमीटर और ग्राउंड के लिए मानक प्रतीक।',
        bn: 'সেল, ব্যাটারি, রেজিস্টর, ক্যাপাসিটর, ইনডাক্টর, সুইচ, অ্যামিটার, ভোল্টমিটার এবং গ্রাউন্ডের প্রতীক।'
      },
      svgType: 'electrical-symbols-grid'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-symbols-1',
      problem: {
        en: 'Identify the circuit components represented by: 1) A circle with "A" inside; 2) Parallel long and short vertical lines; 3) Zig-zag line; 4) Triangle pointing to a bar with arrows emitting outward.',
        hi: 'पहचानें: 1) अंदर "A" वाला वृत्त; 2) समानांतर लंबी और छोटी लंबवत रेखाएं; 3) ज़िग-ज़ैग रेखा; 4) बाहर की ओर तीर वाला त्रिभुज और बार।',
        bn: 'চিহ্নিত করো: ১) ভেতরে "A" যুক্ত বৃত্ত; ২) দীর্ঘ ও ছোট সমান্তরাল উল্লম্ব রেখা; ৩) জিগ-জ্যাগ রেখা; ৪) বাইরের দিকে তীরচিহ্নসহ ত্রিভুজ ও বার।'
      },
      givenValues: {
        'Symbol 1': 'Circle with A',
        'Symbol 2': 'Long + short line pair',
        'Symbol 3': 'Zig-zag line',
        'Symbol 4': 'Triangle with arrows'
      },
      solution: {
        en: '1) Ammeter (measures current);\n2) DC Electric Cell/Battery (long line is positive, short thick line is negative);\n3) Fixed Resistor;\n4) LED (Light Emitting Diode).',
        hi: '1) अमीटर;\n2) डीसी सेल/बैटरी;\n3) फिक्स्ड प्रतिरोधक;\n4) एलईडी (लाइट एमिटिंग डायोड)।',
        bn: '১) অ্যামিটার;\n২) ডিসি সেল/ব্যাটারি;\n৩) ফিক্সড রেজিস্টর;\n৪) এলইডি (লাইট এমিটিং ডায়োড)।'
      },
      finalAnswer: {
        en: '1) Ammeter, 2) DC Battery, 3) Fixed Resistor, 4) LED',
        hi: '1) अमीटर, 2) डीसी बैटरी, 3) फिक्स्ड प्रतिरोधक, 4) एलईडी',
        bn: '১) অ্যামিটার, ২) ডিসি ব্যাটারি, ৩) ফিক্সড রেজিস্টর, ৪) এলইডি'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Drafting and reading architectural building electrical wiring layouts.',
      'Troubleshooting industrial motor control panels using single-line schematic diagrams (SLD).',
      'Designing Printed Circuit Boards (PCB) in CAD software like KiCAD, Eagle, or Altium.'
    ],
    hi: [
      'भवन विद्युत वायरिंग लेआउट का मसौदा तैयार करना और पढ़ना।',
      'सिंगल-लाइन आरेख (SLD) का उपयोग करके औद्योगिक मोटर नियंत्रण पैनलों की खराबी निवारण।',
      'KiCAD या Altium में प्रिंटेड सर्किट बोर्ड (PCB) डिजाइन करना।'
    ],
    bn: [
      'ভবনের ইলেকট্রিক্যাল ক্যাবলিং ওয়্যারিং ডায়াগ্রাম ড্রাফটিং ও রিডিং।',
      'একক-লাইন ডায়াগ্রাম (SLD) দিয়ে শিল্পকারখানার মোটর কন্ট্রোল প্যানেল ট্রাবলশুটিং।',
      'ক্যাড সফটওয়্যারে প্রিন্টেড সার্কিট বোর্ড (PCB) ডিজাইন।'
    ]
  },
  importantPoints: {
    en: [
      'DC Source / Battery: Long line represents Positive (+), short thicker line represents Negative (-).',
      'Ammeter is drawn as a circle with "A" inside; Voltmeter is a circle with "V".',
      'Switch shows an open or closed contact break in the wire.',
      'Ground / Earth symbol represents zero volt potential reference and safety discharge path.',
      'Fuse symbol represents an intentional weak link for overcurrent protection.'
    ],
    hi: [
      'डीसी स्रोत/बैटरी: लंबी रेखा धनात्मक (+), छोटी मोटी रेखा ऋणात्मक (-) दर्शाती है।',
      'अमीटर अंदर "A" के साथ एक वृत्त है; वोल्टमीटर "V" के साथ एक वृत्त है।',
      'स्विच तार में खुला या बंद संपर्क दिखाता है।',
      'ग्राउंड/अर्थ प्रतीक शून्य वोल्ट विभव संदर्भ और सुरक्षा डिस्चार्ज पथ दर्शाता है।',
      'फ्यूज प्रतीक अति-धारा सुरक्षा के लिए एक कमजोर लिंक का प्रतिनिधित्व करता है।'
    ],
    bn: [
      'ডিসি সোর্স/ব্যাটারি: লম্বা দাগ পজিটিভ (+), খাটো মোটা দাগ নেগেটিভ (-)।',
      'অ্যামিটার বৃত্তের ভেতর "A"; ভোল্টমিটার বৃত্তের ভেতর "V"।',
      'সুইচ সংযোগ খোলা বা বন্ধ থাকা নির্দেশ করে।',
      'গ্রাউন্ড/আর্থ প্রতীক শূন্য ভোল্ট বিভব ও নিরাপত্তা ডিসচার্জ পাথ নির্দেশ করে।',
      'ফিউজ ওভারকারেন্ট সুরক্ষার চিহ্ন হিসেবে কাজ করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Reversing positive and negative battery polarity terminal markings in circuit schematics.',
      'Swapping ammeter and voltmeter symbols in schematic diagrams.',
      'Confusing variable resistor (rheostat) with potentiometer or tapped resistor.'
    ],
    hi: [
      'परिपथ आरेखों में बैटरी पोलरिटी के धनात्मक और ऋणात्मक टर्मिनल निशानों को उल्टा करना।',
      'आरेखों में अमीटर और वोल्टमीटर प्रतीकों की अदला-बदली करना।',
      'वेरिएबल प्रतिरोधक (रियोस्टैट) को पटेनियोमीटर के साथ मिलाना।'
    ],
    bn: [
      'সার্কিটে ব্যাটারির পজিটিভ ও নেগেটিভ পোলারিটি উল্টো আঁকা।',
      'ডায়াগ্রামে অ্যামিটার ও ভোল্টমিটারের সংকেত গুলিয়ে ফেলা।',
      'ভেরিয়েবল রেজিস্টর (রিওস্ট্যাট) এবং পটেনশিওমিটার সংকেতের মধ্যে বিভ্রান্তি।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-symbols-1',
      question: {
        en: 'In a battery schematic symbol, the longer thin vertical line represents:',
        hi: 'बैटरी योजनाबद्ध प्रतीक में, लंबी पतली लंबवत रेखा क्या दर्शाती है?',
        bn: 'ব্যাটারির সার্কিট প্রতীকে লম্বা পাতলা রেখাটি প্রকাশ করে:'
      },
      options: [
        { id: 'a', text: { en: 'Negative terminal (-)', hi: 'ऋणात्मक टर्मिनल (-)', bn: 'ঋণাত্মক টার্মিনাল (-)' } },
        { id: 'b', text: { en: 'Positive terminal (+)', hi: 'धनात्मक टर्मिनल (+)', bn: 'ধনাত্মক টার্মিনাল (+)' } },
        { id: 'c', text: { en: 'Neutral terminal', hi: 'न्यूट्रल टर्मिनल', bn: 'নিউট্রাল টার্মিনাল' } },
        { id: 'd', text: { en: 'Earth ground terminal', hi: 'अर्थ ग्राउंड टर्मिनल', bn: 'আর্থ গ্রাউন্ড টার্মিনাল' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'The long vertical line represents the positive (+) terminal of a DC cell.',
        hi: 'लंबी लंबवत रेखा डीसी सेल के धनात्मक (+) टर्मिनल को दर्शाती है।',
        bn: 'লম্বা লাইনটি ডিসি সেলের ধনাত্মক (+) টার্মিনাল প্রকাশ করে।'
      }
    },
    {
      id: 'mcq-symbols-2',
      question: {
        en: 'Which component is represented by a rectangle with a straight conductor line passing through its center?',
        hi: 'केंद्र से होकर गुजरने वाली सीधी चालक रेखा वाले आयत द्वारा किस घटक का प्रतिनिधित्व किया जाता है?',
        bn: 'ভেতর দিয়ে সোজা তার অতিক্রমকারী একটি রেক্ট্যাঙ্গেল বা আয়তক্ষেত্র চিহ্ন দিয়ে কী প্রকাশ করা হয়?'
      },
      options: [
        { id: 'a', text: { en: 'Resistor', hi: 'प्रतिरोधक', bn: 'রেজিস্টর' } },
        { id: 'b', text: { en: 'Fuse', hi: 'फ्यूज', bn: 'ফিউজ' } },
        { id: 'c', text: { en: 'Capacitor', hi: 'संधारित्र', bn: 'ক্যাপাসিটর' } },
        { id: 'd', text: { en: 'Transformer', hi: 'ट्रांसफॉर्मर', bn: 'ট্রান্সফরমার' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'A rectangle with a wire passing through the middle is the IEC standard symbol for a fuse.',
        hi: 'बीच से होकर जाने वाले तार वाला आयत फ्यूज का IEC मानक प्रतीक है।',
        bn: 'মাঝখান দিয়ে তার অতিক্রান্ত আয়তক্ষেত্র হলো ফিউজের IEC স্ট্যান্ডার্ড প্রতীক।'
      }
    },
    {
      id: 'mcq-symbols-3',
      question: {
        en: 'An arrow drawn diagonally across a resistor or capacitor symbol indicates that the component is:',
        hi: 'प्रतिरोधक या संधारित्र प्रतीक पर तिरछा तीर यह दर्शाता है कि घटक है:',
        bn: 'রেজিস্টর বা ক্যাপাসিটর চিহ্নের ওপর তির্যক তীর নির্দেশ করে যে উপাদানটি:'
      },
      options: [
        { id: 'a', text: { en: 'Fixed value', hi: 'फिक्स्ड मान वाला', bn: 'ফিক্সড মানের' } },
        { id: 'b', text: { en: 'Variable / Adjustable', hi: 'वेरिएबल / समायोज्य', bn: 'ভেরিয়েবল / পরিবর্তনযোগ্য' } },
        { id: 'c', text: { en: 'Burnt out', hi: 'जला हुआ', bn: 'নষ্ট' } },
        { id: 'd', text: { en: 'Non-conductive', hi: 'अचालक', bn: 'অপরিবাহী' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'A diagonal arrow over a passive component denotes variability or adjustability.',
        hi: 'घटक पर एक तिरछा तीर परिवर्तनशीलता को दर्शाता है।',
        bn: 'তির্যক তীরচিহ্ন উপাদানের পরিবর্তনশীলতা বা অ্যাডজাস্টাবিলিটি নির্দেশ করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-symbols-1',
      question: {
        en: 'Draw/describe the standard circuit diagram arrangement for measuring the current through and voltage across a resistor connected to a battery.',
        hi: 'बैटरी से जुड़े एक प्रतिरोधक के माध्यम से धारा और वोल्टेज मापने के लिए मानक परिपथ आरेख व्यवस्था का वर्णन करें।',
        bn: 'ব্যাটারির সাথে যুক্ত রোধের কারেন্ট ও ভোল্টেজ মাপার জন্য স্ট্যান্ডার্ড সার্কিট লেআউট বর্ণনা করো।'
      },
      hint: {
        en: 'Battery connected to resistor; Ammeter in series; Voltmeter in parallel across resistor.',
        hi: 'बैटरी प्रतिरोधक से जुड़ी है; अमीटर श्रेणीक्रम में; वोल्टमीटर प्रतिरोधक के पार समानांतर में।',
        bn: 'ব্যাটারি রোধের সাথে যুক্ত; অ্যামিটার সিরিজে; ভোল্টমিটার রোধের আড়াআড়িতে প্যারালালে।'
      },
      answerKey: {
        en: '1) DC Battery (+ and - terminals) connected to Switch and Ammeter in series with the Resistor.\n2) Voltmeter connected in parallel directly across the two terminals of the Resistor.',
        hi: '1) डीसी बैटरी स्विच और अमीटर के साथ श्रेणीक्रम में प्रतिरोधक से जुड़ी है। 2) वोल्टमीटर सीधे प्रतिरोधक के दोनों सिरों पर समानांतर में जुड़ा है।',
        bn: '১) ডিসি ব্যাটারি, সুইচ এবং অ্যামিটার রোধের সাথে সিরিজে যুক্ত। ২) ভোল্টমিটারটি রোধের দুই প্রান্তে প্যারালালে যুক্ত।'
      }
    },
    {
      id: 'pq-symbols-2',
      question: {
        en: 'Contrast the schematic symbols and operational meanings of an Earth Ground versus a Chassis Ground.',
        hi: 'अर्थ ग्राउंड और चेसिस ग्राउंड के आरेखीय प्रतीकों और परिचालन अर्थों की तुलना करें।',
        bn: 'আর্থ গ্রাউন্ড এবং চ্যাসিস গ্রাউন্ডের ডায়াগ্রামের সংকেত ও কাজের পার্থক্য লেখো।'
      },
      hint: {
        en: 'Earth ground uses 3-4 decreasing horizontal lines; Chassis ground uses a rake/triangle pitch fork.',
        hi: 'अर्थ ग्राउंड 3-4 घटती क्षैतिज रेखाओं का उपयोग करता है; चेसिस ग्राउंड त्रिकोण/रेक का उपयोग करता है।',
        bn: 'আর্থ গ্রাউন্ডে পরপর ৩-৪টি ছোট অনুভূমিক দাগ থাকে; চ্যাসিস গ্রাউন্ড ধাতব কাঠামোর সাথে যুক্ত থাকা বোঝায়।'
      },
      answerKey: {
        en: '1) Earth Ground: Symbol has decreasing horizontal lines attached to a vertical wire. It represents physical zero-volt earth connection for electrical fault safety.\n2) Chassis Ground: Symbol shows diagonal lines connecting to a metal frame. It represents common zero reference connected to the metallic enclosure/body of an appliance.',
        hi: '1) अर्थ ग्राउंड: 3 घटती क्षैतिज रेखाएं। यह सुरक्षा के लिए वास्तविक पृथ्वी कनेक्शन दर्शाती है। 2) चेसिस ग्राउंड: उपकरण के धातु के ढांचे से जुड़ा कॉमन रेफरेंस।',
        bn: '১) আর্থ গ্রাউন্ড: ক্রমহ্রাসমান অনুভূমিক দাগ। এটি নিরাপত্তার জন্য সরাসরি মাটির সাথে সংযোগ নির্দেশ করে। ২) চ্যাসিস গ্রাউন্ড: অ্যাপ্লায়েন্সের ধাতব কাঠামোর বা চ্যাসিসের জিরো রেফারেন্স প্রকাশ করে।'
      }
    }
  ]
};
