import { Lesson } from '../types';
import { LESSON_VOLTAGE, LESSON_EMF } from './chapter1LessonsPart2';
import { LESSON_RESISTANCE, LESSON_CONDUCTANCE } from './chapter1LessonsPart3';
import { LESSON_POWER, LESSON_ENERGY } from './chapter1LessonsPart4';
import { LESSON_WORK, LESSON_UNITS_SI, LESSON_SYMBOLS } from './chapter1LessonsPart5';

const LESSON_CHARGE: Lesson = {
  id: 'lsn-charge',
  topicId: 'tp-charge',
  order: 1,
  title: {
    en: 'Electric Charge',
    hi: 'विद्युत आवेश (Electric Charge)',
    bn: 'তড়িৎ আধান (Electric Charge)'
  },
  easyExplanation: {
    en: 'Electric charge is a fundamental physical property of matter that causes it to experience a force when placed in an electromagnetic field. Matter is made of atoms containing positively charged protons, negatively charged electrons, and neutral neutrons.',
    hi: 'विद्युत आवेश पदार्थ का वह मूलभूत गुण है जिसके कारण यह विद्युत चुम्बकीय क्षेत्र में रखे जाने पर एक बल का अनुभव करता है। परमाणु में धनात्मक प्रोटॉन, ऋणात्मक इलेक्ट्रॉन और उदासीन न्यूट्रॉन होते हैं।',
    bn: 'তড়িৎ আধান হলো পদার্থের একটি মৌলিক ভৌত ধর্ম যার কারণে এটি কোনো ইলেক্ট্রোম্যাগনেটিক ক্ষেত্রে থাকলে বল অনুভব করে। পরমাণুর মধ্যে ধনাত্মক প্রোটন, ঋণাত্মক ইলেকট্রন এবং নিরপেক্ষ নিউট্রন থাকে।'
  },
  detailedExplanation: {
    en: 'Electric charge is symbolized by Q or q and measured in Coulombs (C). The fundamental unit of charge is the charge of a single electron, e = 1.602 × 10⁻¹⁹ C. Key principles include: 1) Quantization of Charge (Q = n × e), meaning charge occurs in integral multiples of e; 2) Conservation of Charge, stating total charge in an isolated system remains constant; 3) Coulomb Law of Attraction/Repulsion, where like charges repel and opposite charges attract.',
    hi: 'विद्युत आवेश को Q या q से दर्शाया जाता है तथा इसका मात्रक कूलॉम (C) है। एक इलेक्ट्रॉन का आवेश e = 1.602 × 10⁻¹⁹ C होता है। इसके मुख्य सिद्धांत हैं: 1) आवेश का क्वांटीकरण (Q = n × e), अर्थात आवेश e का पूर्ण गुणज होता है; 2) आवेश संरक्षण का नियम; 3) सजातीय आवेशों में प्रतिकर्षण तथा विजातीय आवेशों में आकर्षण होता है।',
    bn: 'তড়িৎ আধানকে Q বা q দ্বারা প্রকাশ করা হয় এবং এর একক কুলম্ব (C)। একটি ইলেকট্রনের আধান e = ১.৬০২ × ১০⁻¹⁹ C। এর মূল নীতিগুলো হলো: ১) আধানের কোয়ান্টায়ন (Q = n × e), অর্থাৎ আধান মৌলিক আধান e-এর পূর্ণসংখ্যার গুণিতক; ২) আধান সংরক্ষণ নীতি; ৩) সমধর্মী আধান পরস্পরকে বিকর্ষণ এবং বিপরীতধর্মী আধান আকর্ষণ করে।'
  },
  formulas: [
    {
      symbol: 'Q',
      expression: 'Q = n × e',
      description: {
        en: 'Q = Total Charge (Coulombs, C), n = Number of electrons/particles (integer), e = Elementary charge (1.602 × 10⁻¹⁹ C)',
        hi: 'Q = कुल आवेश (कूलॉम), n = इलेक्ट्रॉनों की संख्या, e = मूल आवेश (1.602 × 10⁻¹⁹ C)',
        bn: 'Q = মোট আধান (কুলম্ব), n = ইলেকট্রন সংখ্যা, e = মৌলিক আধান (১.৬০২ × ১০⁻¹⁹ C)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-charge-interaction',
      title: {
        en: 'Charge Interaction & Quantization',
        hi: 'आवेश की परस्पर क्रिया एवं क्वांटीकरण',
        bn: 'আধানের মিথস্ক্রিয়া ও কোয়ান্টায়ন'
      },
      caption: {
        en: 'Like charges (+ and + or - and -) repel each other, while unlike charges (+ and -) attract each other.',
        hi: 'समान आवेश (+ और +) एक-दूसरे को प्रतिकर्षित करते हैं, जबकि विपरीत आवेश (+ और -) आकर्षित करते हैं।',
        bn: 'সমধর্মী আধান (+ এবং +) পরস্পরকে বিকর্ষণ করে এবং বিপরীতধর্মী আধান (+ এবং -) আকর্ষণ করে।'
      },
      svgType: 'charge-interaction'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-charge-1',
      problem: {
        en: 'Calculate the total electric charge possessed by 5 × 10¹⁸ excess electrons.',
        hi: '5 × 10¹⁸ अतिरिक्त इलेक्ट्रॉनों पर कुल विद्युत आवेश की गणना करें।',
        bn: '৫ × ১০¹⁸ টি অতিরিক্ত ইলেকট্রনের মোট তড়িৎ আধান গণনা করো।'
      },
      givenValues: {
        'Number of electrons (n)': '5 × 10¹⁸',
        'Electron charge (e)': '1.602 × 10⁻¹⁹ C'
      },
      solution: {
        en: 'Using the charge quantization formula: Q = n × e\nQ = (5 × 10¹⁸) × (1.602 × 10⁻¹⁹ C)\nQ = 0.801 Coulombs (negative charge due to electrons).',
        hi: 'आवेश क्वांटीकरण सूत्र का उपयोग करके: Q = n × e\nQ = (5 × 10¹⁸) × (1.602 × 10⁻¹⁹ C)\nQ = 0.801 कूलॉम (इलेक्ट्रॉनों के कारण ऋणात्मक आवेश)।',
        bn: 'আধান কোয়ান্টায়ন সূত্র ব্যবহার করে: Q = n × e\nQ = (৫ × ১০¹⁸) × (১.৬০২ × ১০⁻¹⁹ C)\nQ = ০.৮০১ কুলম্ব (ইলেকট্রনের জন্য ঋণাত্মক আধান)।'
      },
      finalAnswer: {
        en: 'Total charge Q = 0.801 C',
        hi: 'कुल आवेश Q = 0.801 C',
        bn: 'মোট আধান Q = ০.৮০১ C'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Electrostatic precipitators used in thermal power plant chimneys to trap fly ash particles.',
      'Photocopying machines and laser printers using electrostatic charge transfer.',
      'Electrostatic spray painting for uniform automotive body coatings.'
    ],
    hi: [
      'थर्मल पावर प्लांट की चिमनियों में फ्लाई एश के कणों को रोकने के लिए इलेक्ट्रोस्टैटिक प्रेसिपिटेटर।',
      'फोटोकॉपी मशीनों और लेजर प्रिंटरों में इलेक्ट्रोस्टैटिक चार्ज ट्रांसफर।',
      'वाहनों पर एकसमान कोटिंग के लिए इलेक्ट्रोस्टैटिक स्प्रे पेंटिंग।'
    ],
    bn: [
      'তাপবিদ্যুৎ কেন্দ্রের চিমনিতে ছাই আটকে রাখার জন্য ইলেক্ট্রোস্ট্যাটিক প্রিসিপিটেশন।',
      'ফোটোকপি মেশিন এবং লেজার প্রিন্টারে ইলেক্ট্রোস্ট্যাটিক চার্জ ট্রান্সফার।',
      'গাড়ির বডিতে সুষম প্রলেপ দেওয়ার জন্য ইলেক্ট্রোস্ট্যাটিক স্প্রে পেইন্টিং।'
    ]
  },
  importantPoints: {
    en: [
      'Charge is a scalar quantity with SI unit Coulomb (C).',
      '1 Coulomb is equivalent to the charge of approximately 6.242 × 10¹⁸ electrons.',
      'Electrons carry a negative charge (-e), protons carry a positive charge (+e).',
      'Charge is quantized (Q = ne) and conserved in closed systems.',
      'Static electricity deals with charges at rest, while current electricity deals with moving charges.',
      'Coulomb Law states force F = k × (q₁q₂ / r²).'
    ],
    hi: [
      'आवेश एक अदिश राशि है जिसका एसआई मात्रक कूलॉम (C) है।',
      '1 कूलॉम लगभग 6.242 × 10¹⁸ इलेक्ट्रॉनों के आवेश के बराबर होता है।',
      'इलेक्ट्रॉन ऋणात्मक आवेश (-e) तथा प्रोटॉन धनात्मक आवेश (+e) वहन करते हैं।',
      'आवेश संरक्षित रहता है और इसका क्वांटीकरण (Q = ne) होता है।',
      'स्थिर वैद्युतिकी विरामावस्था में आवेशों का अध्ययन करती है, जबकि धारा वैद्युतिकी गतिमान आवेशों का।',
      'कूलॉम का नियम: F = k × (q₁q₂ / r²)।'
    ],
    bn: [
      'আধান হলো একটি স্কেলার রাশি যার এসআই একক কুলম্ব (C)।',
      '১ কুলম্ব আধান প্রায় ৬.২৪২ × ১০¹⁸ টি ইলেকট্রনের আধানের সমতুল্য।',
      'ইলেকট্রন ঋণাত্মক আধান (-e) এবং প্রোটন ধনাত্মক আধান (+e) বহন করে।',
      'আধান সংরক্ষিত থাকে এবং কোয়ান্টায়িত হয় (Q = ne)।',
      'স্থির তড়িৎ স্থির আধান নিয়ে কাজ করে এবং চলতড়িৎ গতিশীল আধান নিয়ে কাজ করে।',
      'কুলম্বের সূত্র: F = k × (q₁q₂ / r²)।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing charge (Coulombs) with current (Amperes). Current is the rate of flow of charge.',
      'Forgetting that electrons move in the opposite direction to conventional current flow.',
      'Assuming protons move in solid metal conductors; only free electrons move.'
    ],
    hi: [
      'आवेश (कूलॉम) और धारा (एम्पीयर) में भ्रमित होना। धारा आवेश प्रवाह की दर है।',
      'यह भूल जाना कि इलेक्ट्रॉन पारंपरिक धारा प्रवाह की विपरीत दिशा में गति करते हैं।',
      'यह मानना कि ठोस धातु चालकों में प्रोटॉन गति करते हैं; केवल मुक्त इलेक्ट्रॉन गति करते हैं।'
    ],
    bn: [
      'আধান (কুলম্ব) এবং কারেন্ট (অ্যাম্পিয়ার) গুলিয়ে ফেলা। কারেন্ট হলো আধান প্রবাহের হার।',
      'ইলেকট্রন যে প্রচলিত কারেন্টের বিপরীত দিকে প্রবাহিত হয় তা ভুলে যাওয়া।',
      'কঠিন ধাতব পরিবাহীতে প্রোটন স্থানান্তরিত হয় মনে করা; কেবল মুক্ত ইলেকট্রন প্রবাহিত হয়।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-charge-1',
      question: {
        en: 'What is the SI unit of electric charge?',
        hi: 'विद्युत आवेश का SI मात्रक क्या है?',
        bn: 'তড়িৎ আধানের SI একক কোনটি?'
      },
      options: [
        { id: 'a', text: { en: 'Ampere', hi: 'एम्पीयर', bn: 'অ্যাম্পিয়ার' } },
        { id: 'b', text: { en: 'Coulomb', hi: 'कूलॉम', bn: 'কুলম্ব' } },
        { id: 'c', text: { en: 'Volt', hi: 'वोल्ट', bn: 'ভোল্ট' } },
        { id: 'd', text: { en: 'Watt', hi: 'वाट', bn: 'ওয়াট' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'The SI unit of electric charge is the Coulomb (C), named after Charles-Augustin de Coulomb.',
        hi: 'विद्युत आवेश का SI मात्रक कूलॉम (C) है, जिसका नाम चार्ल्स-ऑगस्टिन डी कूलॉम के नाम पर रखा गया है।',
        bn: 'তড়িৎ আধানের SI একক হলো কুলম্ব (C)।'
      }
    },
    {
      id: 'mcq-charge-2',
      question: {
        en: 'How many electrons constitute one Coulomb of negative charge?',
        hi: 'एक कूलॉम ऋणात्मक आवेश में कितने इलेक्ट्रॉन होते हैं?',
        bn: 'এক কুলম্ব ঋণাত্মক আধানে কতটি ইলেকট্রন থাকে?'
      },
      options: [
        { id: 'a', text: { en: '1.602 × 10⁻¹⁹', hi: '1.602 × 10⁻¹⁹', bn: '১.৬০২ × ১০⁻¹⁹' } },
        { id: 'b', text: { en: '6.242 × 10¹⁸', hi: '6.242 × 10¹⁸', bn: '৬.২৪২ × ১০¹⁸' } },
        { id: 'c', text: { en: '3.1 × 10¹⁵', hi: '3.1 × 10¹⁵', bn: '৩.১ × ১০¹⁵' } },
        { id: 'd', text: { en: '9.1 × 10⁻³¹', hi: '9.1 × 10⁻³¹', bn: '৯.১ × ১০⁻৩১' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'N = 1 / e = 1 / (1.602 × 10⁻¹⁹) ≈ 6.242 × 10¹⁸ electrons.',
        hi: 'N = 1 / e = 1 / (1.602 × 10⁻¹⁹) ≈ 6.242 × 10¹⁸ इलेक्ट्रॉन।',
        bn: 'N = ১ / e = ১ / (১.৬০২ × ১০⁻¹⁹) ≈ ৬.২৪২ × ১০¹⁸ টি ইলেকট্রন।'
      }
    },
    {
      id: 'mcq-charge-3',
      question: {
        en: 'Which property states that electric charge exists only in discrete integral multiples of elementary charge e?',
        hi: 'कौन सा गुण यह बताता है कि विद्युत आवेश केवल मूल आवेश e के पूर्णांक गुणज के रूप में मौजूद होता है?',
        bn: 'কোন ধর্ম প্রকাশ করে যে তড়িৎ আধান কেবল মৌলিক আধান e-এর পূর্ণসংখ্যার গুণিতক হিসাবে থাকে?'
      },
      options: [
        { id: 'a', text: { en: 'Conservation of charge', hi: 'आवेश का संरक्षण', bn: 'আধানের সংরক্ষণ' } },
        { id: 'b', text: { en: 'Quantization of charge', hi: 'आवेश का क्वांटीकरण', bn: 'আধানের কোয়ান্টায়ন' } },
        { id: 'c', text: { en: 'Induction of charge', hi: 'आवेश का प्रेरण', bn: 'আধানের আবেশ' } },
        { id: 'd', text: { en: 'Polarization of charge', hi: 'आवेश का ध्रुवीकरण', bn: 'আধানের সমবর্তন' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Quantization of charge states Q = n × e, where n is an integer.',
        hi: 'आवेश का क्वांटीकरण कहता है Q = n × e, जहां n एक पूर्णांक है।',
        bn: 'আধানের কোয়ান্টায়ন নীতি অনুসারে Q = n × e, যেখানে n একটি পূর্ণসংখ্যা।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-charge-1',
      question: {
        en: 'A conductor carries a net positive charge of 3.2 µC. How many electrons were removed from the conductor?',
        hi: 'एक चालक पर 3.2 µC का धनात्मक आवेश है। चालक से कितने इलेक्ट्रॉन हटाए गए थे?',
        bn: 'একটি পরিবাহীতে ৩.২ µC ধনাত্মক আধান আছে। পরিবাহী থেকে কতটি ইলেকট্রন অপসারিত হয়েছে?'
      },
      hint: {
        en: 'Convert µC to Coulombs (1 µC = 10⁻⁶ C) and use n = Q / e.',
        hi: 'µC को कूलॉम में बदलें (1 µC = 10⁻⁶ C) और n = Q / e का प्रयोग करें।',
        bn: 'µC কে কুলম্বে রূপান্তর করো (১ µC = ১০⁻⁶ C) এবং n = Q / e ব্যবহার করো।'
      },
      answerKey: {
        en: 'Q = 3.2 × 10⁻⁶ C. n = (3.2 × 10⁻⁶) / (1.602 × 10⁻¹⁹) = 2.0 × 10¹³ electrons.',
        hi: 'Q = 3.2 × 10⁻⁶ C। n = (3.2 × 10⁻⁶) / (1.602 × 10⁻¹⁹) = 2.0 × 10¹³ इलेक्ट्रॉन।',
        bn: 'Q = ৩.২ × ১০⁻⁶ C। n = (৩.২ × ১০⁻⁶) / (১.৬০২ × ১০⁻¹⁹) = ২.০ × ১০¹³ টি ইলেকট্রন।'
      }
    },
    {
      id: 'pq-charge-2',
      question: {
        en: 'State the law of conservation of electric charge and give one natural example.',
        hi: 'विद्युत आवेश संरक्षण का नियम लिखिए तथा इसका एक प्राकृतिक उदाहरण दीजिए।',
        bn: 'তড়িৎ আধানের সংরক্ষণ সূত্র বিবৃত করো এবং একটি প্রাকৃতিক উদাহরণ দাও।'
      },
      hint: {
        en: 'Total charge in an isolated system is constant. Think of pair production or glass rod rubbed with silk.',
        hi: 'एक अलग निकाय में कुल आवेश स्थिर रहता है। रेशम से रगड़ी गई कांच की छड़ के बारे में सोचें।',
        bn: 'বিচ্ছিন্ন ব্যবস্থার মোট আধান ধ্রুব থাকে। রেশম দিয়ে কাঁচের দণ্ড ঘষার কথা চিন্তা করো।'
      },
      answerKey: {
        en: 'The law states that total charge in an isolated system can neither be created nor destroyed, only transferred. Example: Rubbing a glass rod with silk transfers electrons, making the rod positively charged and silk equally negatively charged.',
        hi: 'नियम के अनुसार किसी विलगित निकाय में कुल आवेश न तो नष्ट किया जा सकता है और न ही बनाया जा सकता है। उदाहरण: रेशम से कांच की छड़ को रगड़ने पर इलेक्ट्रॉन स्थानांतरित होते हैं, जिससे छड़ धनावेशित और रेशम उतना ही ऋणावेशित हो जाता है।',
        bn: 'সূত্র অনুযায়ী বিচ্ছিন্ন ব্যবস্থায় মোট আধান সৃষ্টি বা ধ্বংস করা যায় না, কেবল স্থানান্তরিত হয়। উদাহরণ: কাঁচের দণ্ড রেশম দিয়ে ঘষলে ইলেকট্রন স্থানান্তরিত হয়ে কাঁচ ধনাত্মক এবং রেশম সমপরিমাণ ঋণাত্মক আধানে আহিত হয়।'
      }
    }
  ]
};

const LESSON_CURRENT: Lesson = {
  id: 'lsn-current',
  topicId: 'tp-current',
  order: 2,
  title: {
    en: 'Electric Current',
    hi: 'विद्युत धारा (Electric Current)',
    bn: 'তড়িৎ প্রবাহ (Electric Current)'
  },
  easyExplanation: {
    en: 'Electric current is the continuous rate of flow of electric charge (free electrons) through a conductor per unit time. Just as water flows through a pipe, electric current flows through metallic wires.',
    hi: 'विद्युत धारा प्रति इकाई समय में किसी चालक के माध्यम से विद्युत आवेश (मुक्त इलेक्ट्रॉनों) के प्रवाह की दर है। जैसे पाइप से पानी बहता है, वैसे ही तारों से विद्युत धारा बहती है।',
    bn: 'তড়িৎ প্রবাহ হলো প্রতি একক সময়ে কোনো পরিবাহীর মধ্য দিয়ে তড়িৎ আধানের (মুক্ত ইলেকট্রনের) প্রবাহের হার। যেমন পাইপের ভেতর দিয়ে পানি প্রবাহিত হয়, তেমনি তারের মধ্য দিয়ে কারেন্ট প্রবাহিত হয়।'
  },
  detailedExplanation: {
    en: 'Electric current is denoted by I and measured in Amperes (A). One Ampere is defined as one Coulomb of charge passing through a conductor cross-section in one second (1 A = 1 C / s). Conventional current direction is considered from positive potential to negative potential, whereas free electrons actually drift from negative to positive potential. Current can be Direct Current (DC), where charge flows in a constant direction, or Alternating Current (AC), where magnitude and direction vary periodically.',
    hi: 'विद्युत धारा को I से दर्शाया जाता है और एम्पीयर (A) में मापा जाता है। 1 एम्पीयर का अर्थ है 1 सेकंड में चालक के अनुप्रस्थ काट से 1 कूलॉम आवेश गुजरना (1 A = 1 C / s)। पारंपरिक धारा की दिशा धनात्मक से ऋणात्मक विभव की ओर मानी जाती है, जबकि इलेक्ट्रॉन वास्तव में ऋणात्मक से धनात्मक की ओर गति करते हैं। धारा डीसी (एकदिशीय) या एसी (प्रत्यावर्ती) हो सकती है।',
    bn: 'তড়িৎ প্রবাহকে I দ্বারা প্রকাশ করা হয় এবং অ্যাম্পিয়ার (A) এককে মাপা হয়। ১ অ্যাম্পিয়ার মানে হলো ১ সেকেন্ডে ১ কুলম্ব আধান কোনো পরিবাহীর প্রস্থচ্ছেদ অতিক্রম করা (১ A = ১ C / s)। প্রচলিত কারেন্টের দিক ধনাত্মক থেকে ঋণাত্মক বিভবের দিকে ধরা হলেও ইলেকট্রন প্রকৃতপক্ষে ঋণাত্মক থেকে ধনাত্মকের দিকে যায়। কারেন্ট ডিসি (একমুখী) বা এসি (পর্যায়বৃত্ত) হতে পারে।'
  },
  formulas: [
    {
      symbol: 'I',
      expression: 'I = Q / t',
      description: {
        en: 'I = Electric Current (Amperes, A), Q = Total Charge (Coulombs, C), t = Time duration (Seconds, s)',
        hi: 'I = विद्युत धारा (एम्पीयर), Q = कुल आवेश (कूलॉम), t = समय (सेकंड)',
        bn: 'I = তড়িৎ প্রবাহ (অ্যাম্পিয়ার), Q = মোট আধান (কুলম্ব), t = সময় (সেকেন্ড)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-current-flow',
      title: {
        en: 'Conventional Current vs Electron Drift',
        hi: 'पारंपरिक धारा बनाम इलेक्ट्रॉन ड्रिफ्ट',
        bn: 'প্রচলিত কারেন্ট বনাম ইলেকট্রন ড্রাফট'
      },
      caption: {
        en: 'Conventional current flows from + to -, while electrons move from - to + when voltage is applied.',
        hi: 'वोल्टेज लागू होने पर पारंपरिक धारा + से - की ओर बहती है, जबकि इलेक्ट्रॉन - से + की ओर बढ़ते हैं।',
        bn: 'ভোল্টেজ প্রয়োগ করা হলে প্রচলিত কারেন্ট + থেকে - এর দিকে এবং ইলেকট্রন - থেকে + এর দিকে প্রবাহিত হয়।'
      },
      svgType: 'current-flow'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-current-1',
      problem: {
        en: 'A total charge of 360 Coulombs passes through a copper wire in 2 minutes. Calculate the electric current in Amperes.',
        hi: 'तांबे के तार से 2 मिनट में कुल 360 कूलॉम आवेश गुजरता है। एम्पीयर में विद्युत धारा की गणना करें।',
        bn: 'একটি তামার তারের মধ্য দিয়ে ২ মিনিটে মোট ৩৬০ কুলম্ব আধান প্রবাহিত হয়। অ্যাম্পিয়ারে তড়িৎ প্রবাহ নির্ণয় করো।'
      },
      givenValues: {
        'Total Charge (Q)': '360 C',
        'Time (t)': '2 minutes = 2 × 60 = 120 seconds'
      },
      solution: {
        en: 'Using I = Q / t\nI = 360 Coulombs / 120 seconds\nI = 3 Amperes.',
        hi: 'सूत्र I = Q / t का उपयोग करके:\nI = 360 कूलॉम / 120 सेकंड\nI = 3 एम्पीयर।',
        bn: 'I = Q / t সূত্র প্রয়োগ করে:\nI = ৩৬০ কুলম্ব / ১২০ সেকেন্ড\nI = ৩ অ্যাম্পিয়ার।'
      },
      finalAnswer: {
        en: 'Electric Current (I) = 3 A',
        hi: 'विद्युत धारा (I) = 3 A',
        bn: 'তড়িৎ প্রবাহ (I) = ৩ A'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Charging mobile phones and electric vehicles using controlled DC currents.',
      'Powering household fans, lighting, and industrial motors using AC current.',
      'Electroplating metals like gold and silver onto jewelry using steady DC current.'
    ],
    hi: [
      'नियंत्रित डीसी धारा का उपयोग करके मोबाइल फोन और इलेक्ट्रिक वाहनों को चार्ज करना।',
      'एसी धारा का उपयोग करके घरेलू पंखे, लाइटिंग और औद्योगिक मोटरों को चलाना।',
      'स्थिर डीसी धारा का उपयोग करके आभूषणों पर सोने-चांदी की इलेक्ट्रोप्लेटिंग।'
    ],
    bn: [
      'নিয়ন্ত্রিত ডিসি কারেন্ট ব্যবহার করে মোবাইল এবং ইভি চার্জিং।',
      'এসি কারেন্ট দিয়ে গৃহস্থালির ফ্যান, লাইট এবং ইন্ডাস্ট্রিয়াল মোটর চালানো।',
      'ডিসি কারেন্ট ব্যবহার করে অলঙ্কারে সোনা ও রূপার ইলেকট্রোপ্লেটিং।'
    ]
  },
  importantPoints: {
    en: [
      'Current is a scalar quantity, even though it has direction (does not follow vector addition).',
      'SI unit of current is Ampere (A). 1 A = 1 C/s = 6.242 × 10¹⁸ electrons per second.',
      'Current is measured using an Ammeter connected in SERIES with low internal resistance.',
      'Direct Current (DC) stays unidirectionally constant; Alternating Current (AC) changes direction periodically.',
      'Current density (J = I / A) is a vector quantity measured in A/m².'
    ],
    hi: [
      'दिशा होने के बावजूद धारा एक अदिश राशि है (क्योंकि यह सदिश योग का पालन नहीं करती)।',
      'धारा का SI मात्रक एम्पीयर (A) है। 1 A = 1 C/s।',
      'धारा को अमीटर द्वारा श्रेणीक्रम (SERIES) में जोड़कर मापा जाता है।',
      'दिश धारा (DC) एक ही दिशा में रहती है; प्रत्यावर्ती धारा (AC) समय के साथ दिशा बदलती है।',
      'धारा घनत्व (J = I / A) एक सदिश राशि है जिसका मात्रक A/m² है।'
    ],
    bn: [
      'দিক থাকা সত্ত্বেও কারেন্ট একটি স্কেলার রাশি (ভেক্টর যোগের নিয়ম মানে না)।',
      'কারেন্টের SI একক অ্যাম্পিয়ার (A)। ১ A = ১ C/s।',
      'কারেন্ট পরিমাপের জন্য নিম্ন অভ্যন্তরীণ রোধের অ্যামিটার সিরিজে (SERIES) যুক্ত করা হয়।',
      'ডিসি কারেন্ট একমুখী থাকে; এসি কারেন্ট পর্যায়বৃত্তভাবে দিক পরিবর্তন করে।',
      'কারেন্ট ঘনত্ব (J = I / A) একটি ভেক্টর রাশি (একক A/m²)।'
    ]
  },
  commonMistakes: {
    en: [
      'Connecting an ammeter in parallel across a voltage source, which causes a high short-circuit current and damages the instrument.',
      'Believing current gets "consumed" or used up in a circuit. Current remains conserved; energy is consumed.',
      'Confusing DC current (from batteries) with AC current (from wall outlets).'
    ],
    hi: [
      'अमीटर को वोल्टेज स्रोत के समानांतर (Parallel) में जोड़ना, जिससे शॉर्ट-सर्किट होता है और उपकरण जल सकता है।',
      'यह सोचना कि परिपथ में धारा "खर्च" या खत्म हो जाती है। धारा संरक्षित रहती है; केवल ऊर्जा खपत होती है।',
      'बैटरी से मिलने वाली डीसी धारा को दीवार के सॉकेट से मिलने वाली एसी धारा से मिलाना।'
    ],
    bn: [
      'ভোল্টেজ সোর্সের সাথে প্যারালালে অ্যামিটার যুক্ত করা, যা শর্ট সার্কিট ঘটায় এবং মিটার নষ্ট করে।',
      'সার্কিটে কারেন্ট "ক্ষয়" হয়ে যায় ভাবা। কারেন্ট সংরক্ষিত থাকে, শক্তি ব্যয় হয়।',
      'ব্যাটারির ডিসি কারেন্টকে মেইন্স সকেটের এসি কারেন্টের সাথে গুলিয়ে ফেলা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-current-1',
      question: {
        en: 'An instrument used to measure electric current in a circuit is called an:',
        hi: 'परिपथ में विद्युत धारा मापने के लिए उपयोग किए जाने वाले उपकरण को क्या कहते हैं?',
        bn: 'সার্কিটে তড়িৎ প্রবাহ পরিমাপক যন্ত্রকে বলা হয়:'
      },
      options: [
        { id: 'a', text: { en: 'Voltmeter', hi: 'वोल्टमीटर', bn: 'ভোল্টमीटर' } },
        { id: 'b', text: { en: 'Ammeter', hi: 'अमीटर', bn: 'অ্যামিটার' } },
        { id: 'c', text: { en: 'Wattmeter', hi: 'वाटमीटर', bn: 'ওয়াটमीटर' } },
        { id: 'd', text: { en: 'Ohmmeter', hi: 'ओममीटर', bn: 'ওহমমিটার' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'An ammeter measures electric current and must always be connected in series.',
        hi: 'अमीटर विद्युत धारा मापता है और इसे हमेशा श्रेणीक्रम में जोड़ा जाना चाहिए।',
        bn: 'অ্যামিটার তড়িৎ প্রবাহ পরিমাপ করে এবং এটি সর্বদা সিরিজে যুক্ত করতে হয়।'
      }
    },
    {
      id: 'mcq-current-2',
      question: {
        en: 'How should an ammeter be connected in a circuit to measure branch current?',
        hi: 'शाखा धारा मापने के लिए परिपथ में अमीटर को कैसे जोड़ा जाना चाहिए?',
        bn: 'ব্রাঞ্চ কারেন্ট মাপার জন্য অ্যামিটার কিভাবে সংযোগ করা উচিত?'
      },
      options: [
        { id: 'a', text: { en: 'In parallel with the load', hi: 'लोड के समानांतर', bn: 'লোডের সাথে প্যারালালে' } },
        { id: 'b', text: { en: 'In series with the load', hi: 'लोड के श्रेणीक्रम में', bn: 'লোডের সাথে সিরিজে' } },
        { id: 'c', text: { en: 'Across the supply terminals', hi: 'सप्लाई टर्मिनलों के पार', bn: 'সরবরাহ টার্মিনালের আড়াআড়িতে' } },
        { id: 'd', text: { en: 'To the ground wire only', hi: 'केवल ग्राउंड वायर से', bn: 'শুধুমাত্র গ্রাউন্ড তারে' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'An ammeter has very low internal resistance and must be connected in series so all current flows through it.',
        hi: 'अमीटर का आंतरिक प्रतिरोध बहुत कम होता है और इसे श्रेणीक्रम में जोड़ा जाता है ताकि संपूर्ण धारा इसके माध्यम से बहे।',
        bn: 'অ্যামিটারের অভ্যন্তরীণ রোধ অতি কম থাকে, তাই এটি সিরিজে যুক্ত করতে হয় যাতে সমস্ত কারেন্ট এর ভেতর দিয়ে প্রবাহিত হয়।'
      }
    },
    {
      id: 'mcq-current-3',
      question: {
        en: 'If 20 Coulombs of charge pass a point in 5 seconds, what is the current strength?',
        hi: 'यदि 20 कूलॉम आवेश 5 सेकंड में किसी बिंदु से गुजरता है, तो धारा का मान क्या है?',
        bn: 'যদি ২০ কুলম্ব আধান ৫ সেকেন্ডে কোনো বিন্দু অতিক্রম করে, তবে কারেন্ট কত?'
      },
      options: [
        { id: 'a', text: { en: '100 A', hi: '100 A', bn: '১০০ A' } },
        { id: 'b', text: { en: '4 A', hi: '4 A', bn: '৪ A' } },
        { id: 'c', text: { en: '0.25 A', hi: '0.25 A', bn: '০.২৫ A' } },
        { id: 'd', text: { en: '15 A', hi: '15 A', bn: '১৫ A' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'I = Q / t = 20 C / 5 s = 4 Amperes.',
        hi: 'I = Q / t = 20 C / 5 s = 4 एम्पीयर।',
        bn: 'I = Q / t = ২০ C / ৫ s = ৪ অ্যাম্পিয়ার।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-current-1',
      question: {
        en: 'An electric iron draws 5 A of current from a 230 V supply. How much electric charge passes through the heating element in 10 minutes?',
        hi: 'एक इलेक्ट्रिक प्रेस 230 V आपूर्ति से 5 A धारा लेती है। 10 मिनट में हीटिंग एलिमेंट से कितना विद्युत आवेश गुजरता है?',
        bn: 'একটি ইলেকট্রিক স্ত্রী ২৩০ V সরবরাহ থেকে ৫ A কারেন্ট গ্রহণ করে। ১০ মিনিটে হিটিং এলিমেন্টের মধ্য দিয়ে কত আধান অতিক্রম করবে?'
      },
      hint: {
        en: 'Convert 10 minutes to seconds (10 × 60 = 600 s) and use Q = I × t.',
        hi: '10 मिनट को सेकंड में बदलें (10 × 60 = 600 s) और Q = I × t का प्रयोग करें।',
        bn: '১০ মিনিটকে সেকেন্ডে প্রকাশ করো (১০ × ৬০ = ৬০০ s) এবং Q = I × t প্রয়োগ করো।'
      },
      answerKey: {
        en: 't = 10 × 60 = 600 s. Q = I × t = 5 A × 600 s = 3000 Coulombs.',
        hi: 't = 10 × 60 = 600 s। Q = I × t = 5 A × 600 s = 3000 कूलॉम।',
        bn: 't = ১০ × ৬০ = ৬০০ সেকেন্ড। Q = I × t = ৫ A × ৬০০ s = ৩০০০ কুলম্ব।'
      }
    },
    {
      id: 'pq-current-2',
      question: {
        en: 'Differentiate clearly between Conventional Current and Electron Current direction.',
        hi: 'पारंपरिक धारा और इलेक्ट्रॉन धारा की दिशा में स्पष्ट अंतर बताइए।',
        bn: 'প্রচলিত কারেন্ট এবং ইলেকট্রন কারেন্টের দিকের মধ্যে স্পষ্ট পার্থক্য লেখো।'
      },
      hint: {
        en: 'Conventional current flows from high potential (+) to low potential (-), whereas electrons move towards (+).',
        hi: 'पारंपरिक धारा उच्च विभव (+) से निम्न विभव (-) की ओर बहती है, जबकि इलेक्ट्रॉन (+) की ओर बढ़ते हैं।',
        bn: 'প্রচলিত কারেন্ট উচ্চ বিভব (+) থেকে নিম্ন বিভবের (-) দিকে যায়, আর ইলেকট্রন (+) এর দিকে ধাবিত হয়।'
      },
      answerKey: {
        en: 'Conventional current is defined as the flow of hypothetical positive charge from the positive (+) terminal to the negative (-) terminal of a voltage source. Electron current is the actual physical motion of negative electrons drifting from the negative (-) terminal toward the positive (+) terminal.',
        hi: 'पारंपरिक धारा वोल्टेज स्रोत के धनात्मक (+) टर्मिनल से ऋणात्मक (-) टर्मिनल की ओर काल्पनिक धनावेश का प्रवाह है। इलेक्ट्रॉन धारा ऋणात्मक (-) से धनात्मक (+) टर्मिनल की ओर ऋणात्मक इलेक्ट्रॉनों की वास्तविक गति है।',
        bn: 'প্রচলিত কারেন্ট হলো পজিটিভ (+) টার্মিনাল থেকে নেগেটিভ (-) টার্মিনালের দিকে কাল্পনিক ধনাত্মক আধানের প্রবাহ। আর ইলেকট্রন কারেন্ট হলো বাস্তবে নেগেটিভ (-) থেকে পজিটিভ (+) টার্মিনালের দিকে ঋণাত্মক ইলেকট্রনের সরণ।'
      }
    }
  ]
};

export const CHAPTER_1_LESSONS: Record<string, Lesson> = {
  'tp-charge': LESSON_CHARGE,
  'tp-current': LESSON_CURRENT,
  'tp-voltage': LESSON_VOLTAGE,
  'tp-emf': LESSON_EMF,
  'tp-resistance': LESSON_RESISTANCE,
  'tp-conductance': LESSON_CONDUCTANCE,
  'tp-power': LESSON_POWER,
  'tp-energy': LESSON_ENERGY,
  'tp-electrical-work': LESSON_WORK,
  'tp-units-si': LESSON_UNITS_SI,
  'tp-electrical-symbols': LESSON_SYMBOLS
};
