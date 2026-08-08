import { Lesson } from '../types';

export const LESSON_VOLTAGE: Lesson = {
  id: 'lsn-voltage',
  topicId: 'tp-voltage',
  order: 3,
  title: {
    en: 'Voltage / Potential Difference',
    hi: 'वोल्टेज / विभवांतर (Voltage / Potential Difference)',
    bn: 'ভোল্টেজ / বিভব পার্থক্য (Voltage / Potential Difference)'
  },
  easyExplanation: {
    en: 'Voltage, or Electric Potential Difference, is the electrical pressure or force that pushes electric charges (electrons) through a conductor in a closed circuit.',
    hi: 'वोल्टेज या विद्युत विभवांतर वह विद्युत दबाव या बल है जो बंद परिपथ में चालक के माध्यम से विद्युत आवेशों (इलेक्ट्रॉनों) को धकेलता है।',
    bn: 'ভোল্টেজ বা বৈদ্যুতিক বিভব পার্থক্য হলো সেই বৈদ্যুতিক চাপ বা বল যা একটি বন্ধ সার্কিটে পরিবাহীর মধ্য দিয়ে আধানকে (ইলেকট্রন) প্রবাহিত করে।'
  },
  detailedExplanation: {
    en: 'Voltage (V) between two points is defined as the work done (W in Joules) in moving a unit positive electric charge (Q in Coulombs) from one point to another (V = W / Q). Its SI unit is Volt (V), where 1 Volt = 1 Joule per Coulomb (1 V = 1 J / C). Voltage requires a reference point, usually taken as ground (0 V). Voltage is measured across two circuit nodes using a Voltmeter connected in PARALLEL with high internal resistance.',
    hi: 'दो बिंदुओं के बीच वोल्टेज (V) को एक इकाई धनात्मक आवेश (Q) को एक बिंदु से दूसरे बिंदु तक ले जाने में किए गए कार्य (W) के रूप में परिभाषित किया जाता है (V = W / Q)। इसका SI मात्रक वोल्ट (V) है (1 V = 1 J / C)। वोल्टेज को मापने के लिए उच्च आंतरिक प्रतिरोध वाले वोल्टमीटर को समानांतर (PARALLEL) क्रम में जोड़ा जाता है।',
    bn: 'দুই বিন্দুর মধ্যবর্তী ভোল্টেজ (V) হলো একক ধনাত্মক আধানকে (Q) এক বিন্দু থেকে অন্য বিন্দুতে নিতে সম্পন্ন কাজ (W) (V = W / Q)। এর SI একক ভোল্ট (V) (১ V = ১ J / C)। ভোল্টেজ মাপার জন্য উচ্চ অভ্যন্তরীণ রোধের ভোল্টমিটারকে প্যারালালে (PARALLEL) সংযোগ করা হয়।'
  },
  formulas: [
    {
      symbol: 'V',
      expression: 'V = W / Q',
      description: {
        en: 'V = Voltage / Potential Difference (Volts, V), W = Electrical Work Done (Joules, J), Q = Charge (Coulombs, C)',
        hi: 'V = वोल्टेज / विभवांतर (वोल्ट), W = किया गया कार्य (जूल), Q = आवेश (कूलॉम)',
        bn: 'V = ভোল্টেজ / বিভব পার্থক্য (ভোল্ট), W = সম্পন্ন কাজ (জুল), Q = আধান (কুলম্ব)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-voltage-potential',
      title: {
        en: 'Electric Potential Difference Schema',
        hi: 'विद्युत विभवांतर आरेख',
        bn: 'বৈদ্যুতিক বিভব পার্থক্য চিত্র'
      },
      caption: {
        en: 'Higher potential (V+) pushes current towards lower potential (V-) through circuit load.',
        hi: 'उच्च विभव (V+) परिपथ लोड के माध्यम से निम्न विभव (V-) की ओर धारा को धकेलता है।',
        bn: 'উচ্চ বিভব (V+) সার্কিট লোডের মধ্য দিয়ে নিম্ন বিভবের (V-) দিকে কারেন্টকে প্রবাহিত করে।'
      },
      svgType: 'voltage-potential'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-voltage-1',
      problem: {
        en: 'If 120 Joules of work is done in moving 15 Coulombs of charge between two points in a circuit, calculate the voltage across the two points.',
        hi: 'यदि परिपथ में दो बिंदुओं के बीच 15 कूलॉम आवेश को स्थानांतरित करने में 120 जूल कार्य किया जाता है, तो दोनों बिंदुओं के बीच वोल्टेज की गणना करें।',
        bn: 'যদি সার্কিটের দুটি বিন্দুর মধ্যে ১৫ কুলম্ব আধান স্থানান্তর করতে ১২০ জুল কাজ করতে হয়, তবে দুটি বিন্দুর মধ্যবর্তী ভোল্টেজ কত?'
      },
      givenValues: {
        'Work Done (W)': '120 J',
        'Charge (Q)': '15 C'
      },
      solution: {
        en: 'Using formula V = W / Q\nV = 120 Joules / 15 Coulombs\nV = 8 Volts.',
        hi: 'सूत्र V = W / Q का उपयोग करके:\nV = 120 जूल / 15 कूलॉम\nV = 8 वोल्ट।',
        bn: 'V = W / Q সূত্র ব্যবহার করে:\nV = ১২০ জুল / ১৫ কুলম্ব\nV = ৮ ভোল্ট।'
      },
      finalAnswer: {
        en: 'Potential Difference (V) = 8 V',
        hi: 'विभवांतर (V) = 8 V',
        bn: 'বিভব পার্থক্য (V) = ৮ V'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Standard residential mains voltage supply in India/Asia is 230 V AC (50 Hz).',
      'Automobile DC batteries operate at 12 V DC (light vehicles) or 24 V DC (heavy trucks).',
      'High-voltage transmission lines operating at 132 kV, 220 kV, or 400 kV to minimize I²R losses.'
    ],
    hi: [
      'भारत में मानक घरेलू मुख्य वोल्टेज आपूर्ति 230 V AC (50 Hz) है।',
      'ऑटोमोबाइल डीसी बैटरियां 12 V DC (हल्के वाहन) या 24 V DC (भारी ट्रक) पर काम करती हैं।',
      'I²R हानियों को कम करने के लिए 132 kV, 220 kV, या 400 kV पर चलने वाली उच्च-वोल्टेज संचरण लाइनें।'
    ],
    bn: [
      'ভারতে বাসাবাড়ির মানক মেইনস ভোল্টেজ হলো ২৩০ V AC (৫০ Hz)।',
      'অটোমোবাইল ডিসি ব্যাটারি ১২ V DC বা ২৪ V DC-তে কাজ করে।',
      'পাওয়ার লস কমাতে ১৩২ kV, ২২০ kV বা ৪০০ kV হাই-ভোল্টেজ ট্রান্সমিশন লাইন।'
    ]
  },
  importantPoints: {
    en: [
      'Voltage is always measured BETWEEN two points (potential difference), never at a single point without ground reference.',
      'SI unit of voltage is Volt (V). 1 V = 1 Joule per Coulomb.',
      'A Voltmeter has high internal resistance and must be connected in PARALLEL across the load/source.',
      'Voltage is the cause, and electric current is the effect.',
      'Zero potential reference is taken as the Earth ground potential.'
    ],
    hi: [
      'वोल्टेज हमेशा दो बिंदुओं के बी़च मापा जाता है (विभवांतर), कभी भी बिना ग्राउंड के एक बिंदु पर नहीं।',
      'वोल्टेज का SI मात्रक वोल्ट (V) है। 1 V = 1 जूल प्रति कूलॉम।',
      'वोल्टमीटर का आंतरिक प्रतिरोध उच्च होता है और इसे समानांतर (PARALLEL) क्रम में जोड़ा जाता है।',
      'वोल्टेज कारण है, और विद्युत धारा उसका परिणाम है।',
      'शून्य विभव संदर्भ पृथ्वी के ग्राउंड विभव को माना जाता है।'
    ],
    bn: [
      'ভোল্টেজ সর্বদা দুটি বিন্দুর মধ্যে মাপা হয় (বিভব পার্থক্য), গ্রাউন্ড রেফারেন্স ছাড়া একক বিন্দুতে নয়।',
      'ভোল্টেজের SI একক ভোল্ট (V)। ১ V = ১ জুল প্রতি কুলম্ব।',
      'ভোল্টমিটারের অভ্যন্তরীণ রোধ উচ্চ থাকে এবং এটি প্যারালালে (PARALLEL) যুক্ত করা হয়।',
      'ভোল্টেজ হলো কারণ, আর কারেন্ট হলো তার ফলাফল।',
      'শূন্য বিভব রেফারেন্স হিসেবে পৃথিবীর গ্রাউন্ড বিভবকে ধরা হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Connecting a voltmeter in series with a load, which blocks current flow due to high resistance.',
      'Thinking voltage "flows" through a wire. Voltage exists across points; current flows through conductors.',
      'Confusing battery nominal voltage with charged/discharged cell voltage.'
    ],
    hi: [
      'लोड के साथ श्रेणीक्रम में वोल्टमीटर जोड़ना, जो उच्च प्रतिरोध के कारण धारा प्रवाह को रोकता है।',
      'यह सोचना कि वोल्टेज तार से होकर "बहता" है। वोल्टेज बिंदुओं के बीच होता है; धारा बहती है।',
      'बैटरी के नाममात्र वोल्टेज को चार्ज/डिस्चार्ज सेल वोल्टेज के साथ भ्रमित करना।'
    ],
    bn: [
      'লোডের সাথে সিরিজে ভোল্টমিটার সংযোগ করা, যা উচ্চ রোধের কারণে কারেন্ট আটকে দেয়।',
      'ভোল্টেজ তারের ভেতর দিয়ে "প্রবাহিত" হয় ভাবা। ভোল্টেজ বিন্দুর আড়াআড়িতে থাকে; কারেন্ট প্রবাহিত হয়।',
      'ব্যাটারির নমিনাল ভোল্টেজ এবং ফুল চার্জড/ডিসচার্জড ভোল্টেজ গুলিয়ে ফেলা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-voltage-1',
      question: {
        en: 'The amount of work done in moving a unit positive charge from one point to another is defined as:',
        hi: 'एक इकाई धनात्मक आवेश को एक बिंदु से दूसरे बिंदु तक ले जाने में किया गया कार्य क्या कहलाता है?',
        bn: 'একক ধনাত্মক আধানকে এক বিন্দু থেকে অন্য বিন্দুতে স্থানান্তর করতে সম্পন্ন কাজ হলো:'
      },
      options: [
        { id: 'a', text: { en: 'Electric Power', hi: 'विद्युत शक्ति', bn: 'বৈদ্যুতিক ক্ষমতা' } },
        { id: 'b', text: { en: 'Potential Difference', hi: 'विभवांतर', bn: 'বিভব পার্থক্য' } },
        { id: 'c', text: { en: 'Electric Current', hi: 'विद्युत धारा', bn: 'তড়িৎ প্রবাহ' } },
        { id: 'd', text: { en: 'Resistance', hi: 'प्रतिरोध', bn: ' রোধ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Voltage or potential difference is V = W / Q.',
        hi: 'वोल्टेज या विभवांतर V = W / Q होता है।',
        bn: 'ভোল্টেজ বা বিভব পার্থক্য V = W / Q।'
      }
    },
    {
      id: 'mcq-voltage-2',
      question: {
        en: '1 Volt is equivalent to:',
        hi: '1 वोल्ट किसके बराबर होता है?',
        bn: '১ ভোল্ট কিসের সমতুল্য?'
      },
      options: [
        { id: 'a', text: { en: '1 Joule per Coulomb', hi: '1 जूल प्रति कूलॉम', bn: '১ জুল প্রতি কুলম্ব' } },
        { id: 'b', text: { en: '1 Coulomb per second', hi: '1 कूलॉम प्रति सेकंड', bn: '১ কুলম্ব প্রতি সেকেন্ড' } },
        { id: 'c', text: { en: '1 Watt per second', hi: '1 वाट प्रति सेकंड', bn: '১ ওয়াট প্রতি সেকেন্ড' } },
        { id: 'd', text: { en: '1 Newton per meter', hi: '1 न्यूटन प्रति मीटर', bn: '১ নিউটন প্রতি মিটার' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: '1 Volt = 1 Joule / 1 Coulomb.',
        hi: '1 वोल्ट = 1 जूल / 1 कूलॉम।',
        bn: '১ ভোল্ট = ১ জুল / ১ কুলম্ব।'
      }
    },
    {
      id: 'mcq-voltage-3',
      question: {
        en: 'How should a Voltmeter be connected across a circuit load to measure voltage?',
        hi: 'वोल्टेज मापने के लिए परिपथ लोड के पार वोल्टमीटर को कैसे जोड़ा जाना चाहिए?',
        bn: 'ভোল্টেজ মাপার জন্য সার্কিট লোডের আড়াআড়িতে ভোল্টমিটার কীভাবে সংযোগ করতে হবে?'
      },
      options: [
        { id: 'a', text: { en: 'In series', hi: 'श्रेणीक्रम में', bn: 'সিরিজে' } },
        { id: 'b', text: { en: 'In parallel', hi: 'समानांतर क्रम में', bn: 'প্যারালালে' } },
        { id: 'c', text: { en: 'In series-parallel', hi: 'श्रेणी-समानांतर में', bn: 'সিরিজ-প্যারালালে' } },
        { id: 'd', text: { en: 'Connected to neutral only', hi: 'केवल न्यूट्रल से', bn: 'কেবল নিউট্রালে' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Voltmeters have high resistance and must be connected in parallel across the component.',
        hi: 'वोल्टमीटर का प्रतिरोध उच्च होता है और इसे घटक के पार समानांतर में जोड़ा जाना चाहिए।',
        bn: 'ভোল্টমিটারের উচ্চ রোধ থাকে এবং এটি উপাদানের আড়াআড়িতে প্যারালালে যুক্ত করতে হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-voltage-1',
      question: {
        en: 'A battery performs 450 Joules of work to move a charge of 30 C around a DC circuit. Find the terminal voltage of the battery.',
        hi: 'एक बैटरी डीसी परिपथ में 30 C आवेश को स्थानांतरित करने के लिए 450 जूल कार्य करती है। बैटरी की टर्मिनल वोल्टेज ज्ञात कीजिए।',
        bn: 'একটি ব্যাটারি ডিসি সার্কিটে ৩০ C আধান সরাতে ৪৫০ জুল কাজ করে। ব্যাটারির টার্মিনাল ভোল্টেজ বের করো।'
      },
      hint: {
        en: 'Use V = W / Q.',
        hi: 'V = W / Q का प्रयोग करें।',
        bn: 'V = W / Q ব্যবহার করো।'
      },
      answerKey: {
        en: 'W = 450 J, Q = 30 C. V = W / Q = 450 / 30 = 15 Volts.',
        hi: 'W = 450 J, Q = 30 C। V = W / Q = 450 / 30 = 15 वोल्ट।',
        bn: 'W = ৪৫০ J, Q = ৩০ C। V = W / Q = ৪৫০ / ৩০ = ১৫ ভোল্ট।'
      }
    },
    {
      id: 'pq-voltage-2',
      question: {
        en: 'Why does a voltmeter require a very high internal resistance?',
        hi: 'वोल्टमीटर में बहुत अधिक आंतरिक प्रतिरोध की आवश्यकता क्यों होती है?',
        bn: 'ভোল্টমিটারের অভ্যন্তরীণ রোধ অত্যন্ত উচ্চ হওয়া প্রয়োজন কেন?'
      },
      hint: {
        en: 'Consider the parallel connection and minimizing current drawn from the main circuit.',
        hi: 'समानांतर कनेक्शन और मुख्य परिपथ से ली जाने वाली धारा को न्यूनतम करने पर विचार करें।',
        bn: 'প্যারালাল সংযোগ এবং মূল সার্কিট থেকে কারেন্ট গ্রহণ সর্বনিম্ন রাখার কথা চিন্তা করো।'
      },
      answerKey: {
        en: 'A voltmeter is connected in parallel with the load. High internal resistance ensures that negligible current passes through the meter, preventing loading effect and preserving accurate original circuit voltage readings.',
        hi: 'वोल्टमीटर लोड के समानांतर में जुड़ा होता है। उच्च आंतरिक प्रतिरोध यह सुनिश्चित करता है कि मीटर के माध्यम से नगण्य धारा बहे, जिससे लोडिंग प्रभाव नहीं होता और सटीक वोल्टेज रीडिंग मिलती है।',
        bn: 'ভোল্টমিটার লোডের সাথে প্যারালালে যুক্ত থাকে। উচ্চ অভ্যন্তরীণ রোধ নিশ্চিত করে যে মিটারের ভেতর দিয়ে অতি নগণ্য কারেন্ট প্রবাহিত হয়, যার ফলে মূল সার্কিটের ভোল্টেজের পরিবর্তন হয় না এবং সঠিক রিডিং পাওয়া যায়।'
      }
    }
  ]
};

export const LESSON_EMF: Lesson = {
  id: 'lsn-emf',
  topicId: 'tp-emf',
  order: 4,
  title: {
    en: 'Electromotive Force (EMF)',
    hi: 'विद्युत वाहक बल (EMF - Electromotive Force)',
    bn: 'ইলেক্ট্রোমোটিভ ফোর্স (EMF)'
  },
  easyExplanation: {
    en: 'Electromotive Force (EMF) is the maximum potential difference generated by an active source (battery, generator, solar cell) when no current is drawn from it (open-circuit condition).',
    hi: 'विद्युत वाहक बल (EMF) किसी सक्रिय स्रोत (बैटरी, जनरेटर) द्वारा उत्पन्न अधिकतम विभवांतर है जब उससे कोई धारा नहीं ली जा रही हो (खुला परिपथ)।',
    bn: 'ইলেক্ট্রোমোটিভ ফোর্স (EMF) হলো কোনো শক্তির উৎস (ব্যাটারি, জেনারেটর) দ্বারা উৎপন্ন সর্বোচ্চ বিভব পার্থক্য, যখন তার থেকে কোনো কারেন্ট নেওয়া হয় না (ওপেন সার্কিট)।'
  },
  detailedExplanation: {
    en: 'Despite its historic name containing "force", EMF is NOT a mechanical force in Newtons; it is energy supplied per unit charge (E = W / Q in Volts). EMF converts non-electrical energy (chemical in batteries, mechanical in generators, solar in PV cells) into electrical potential energy. Terminal Voltage (V) across a battery under load is slightly less than its open-circuit EMF (E) due to internal resistance (r) voltage drop: V = E - (I × r).',
    hi: 'इसके नाम में "बल" होने के बावजूद, ईएमएफ (EMF) कोई यांत्रिक बल नहीं है; यह प्रति इकाई आवेश की आपूर्ति की गई ऊर्जा है (E = W / Q - वोल्ट)। ईएमएफ गैर-विद्युत ऊर्जा (रासायनिक, यांत्रिक) को विद्युत संभावित ऊर्जा में परिवर्तित करता है। आंतरिक प्रतिरोध (r) के कारण लोड स्थिति में टर्मिनल वोल्टेज (V) खुला-परिपथ ईएमएफ (E) से कम होता है: V = E - (I × r)।',
    bn: 'নামে "ফোর্স" থাকলেও, EMF কোনো যান্ত্রিক বল নয়; এটি প্রতি একক আধানে সরবরাহকৃত শক্তি (E = W / Q - ভোল্ট)। EMF অ-বৈদ্যুতিক শক্তিকে (রাসায়নিক, যান্ত্রিক) বৈদ্যুতিক বিভব শক্তিতে রূপান্তরিত করে। অভ্যন্তরীণ রোধের (r) কারণে লোড অবস্থায় টার্মিনাল ভোল্টেজ (V), ওএইচ-সার্কিট EMF (E) অপেক্ষা কম হয়: V = E - (I × r)।'
  },
  formulas: [
    {
      symbol: 'E',
      expression: 'E = V + (I × r)',
      description: {
        en: 'E = Source EMF (Volts), V = Terminal Voltage across load (Volts), I = Load current (Amperes), r = Internal resistance (Ohms)',
        hi: 'E = स्रोत ईएमएफ (वोल्ट), V = टर्मिनल वोल्टेज (वोल्ट), I = लोड धारा (एम्पीयर), r = आंतरिक प्रतिरोध (ओम)',
        bn: 'E = সোর্স ইএমএফ (ভোল্ট), V = টার্মিনাল ভোল্টেজ (ভোল্ট), I = লোড কারেন্ট (অ্যাম্পিয়ার), r = অভ্যন্তরীণ রোধ (ওহম)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-emf-internal-r',
      title: {
        en: 'EMF and Internal Resistance Model',
        hi: 'ईएमएफ और आंतरिक प्रतिरोध मॉडल',
        bn: 'ইএমএফ ও অভ্যন্তরীণ রোধের মডেল'
      },
      caption: {
        en: 'A practical voltage source consists of ideal EMF (E) in series with internal resistance (r).',
        hi: 'एक व्यावहारिक वोल्टेज स्रोत में आंतरिक प्रतिरोध (r) के साथ श्रेणीबद्ध आदर्श ईएमएफ (E) होता है।',
        bn: 'একটি প্র্যাকটিক্যাল ভোল্টেজ সোর্সে আদর্শ ইএমএফ (E)-এর সাথে সিরিজে অভ্যন্তরীণ রোধ (r) থাকে।'
      },
      svgType: 'emf-internal-r'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-emf-1',
      problem: {
        en: 'A lead-acid storage battery has an open-circuit EMF of 12.6 V and an internal resistance of 0.05 Ω. When connected to a starter motor, it supplies 100 A. Calculate the terminal voltage under load.',
        hi: 'एक लेड-एसिड बैटरी का खुला-परिपथ ईएमएफ 12.6 V और आंतरिक प्रतिरोध 0.05 Ω है। स्टार्टर मोटर से जुड़ने पर यह 100 A धारा देती है। लोड के तहत टर्मिनल वोल्टेज की गणना करें।',
        bn: 'একটি লেড-অ্যাসিড ব্যাটারির ওপেন সার্কিট EMF ১২.৬ V এবং অভ্যন্তরীণ রোধ ০.০৫ Ω। স্টার্টার মোটরে এটি ১০০ A কারেন্ট যোগায়। লোড অবস্থায় টার্মিনাল ভোল্টেজ কত?'
      },
      givenValues: {
        'EMF (E)': '12.6 V',
        'Internal Resistance (r)': '0.05 Ω',
        'Load Current (I)': '100 A'
      },
      solution: {
        en: 'Internal voltage drop V_r = I × r = 100 A × 0.05 Ω = 5 V.\nTerminal Voltage V = E - V_r = 12.6 V - 5 V = 7.6 Volts.',
        hi: 'आंतरिक वोल्टेज ड्रॉप V_r = I × r = 100 A × 0.05 Ω = 5 V।\nटर्मिनल वोल्टेज V = E - V_r = 12.6 V - 5 V = 7.6 वोल्ट।',
        bn: 'অভ্যন্তরীণ ভোল্টেজ ড্রপ V_r = I × r = ১০০ A × ০.০৫ Ω = ৫ V।\nটার্মিনাল ভোল্টেজ V = E - V_r = ১২.৬ V - ৫ V = ৭.৬ ভোল্ট।'
      },
      finalAnswer: {
        en: 'Terminal Voltage (V) = 7.6 V',
        hi: 'टर्मिनल वोल्टेज (V) = 7.6 V',
        bn: 'টার্মিনাল ভোল্টেজ (V) = ৭.৬ V'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Chemical cells and batteries convert chemical bond energy into electrical EMF.',
      'DC generators and AC alternators induce electromotive force via Faraday electromagnetic induction law.',
      'Solar photovoltaic (PV) panels convert light photons into DC electromotive force.'
    ],
    hi: [
      'रासायनिक सेल और बैटरियां रासायनिक ऊर्जा को विद्युत ईएमएफ में बदलती हैं।',
      'डीसी जनरेटर और एसी अल्टरनेटर फैराडे के विद्युत चुम्बकीय प्रेरण नियम द्वारा ईएमएफ प्रेरित करते हैं।',
      'सौर फोटोवोल्टिक (पीवी) पैनल प्रकाश फोटॉनों को डीसी ईएमएफ में बदलते हैं।'
    ],
    bn: [
      'রাসায়নিক সেল ও ব্যাটারি রাসায়নিক শক্তিকে বৈদ্যুতিক EMF-এ রূপান্তর করে।',
      'ডিসি জেনারেটর এবং অল্টারনেটর ফ্যারাডের তড়িৎ-চুম্বকীয় আবেশ সূত্রে EMF সৃষ্টি করে।',
      'সৌর পিভি প্যানেল আলোর ফোটন শক্তিকে ডিসি ইএমএফ-এ রূপান্তরিত করে।'
    ]
  },
  importantPoints: {
    en: [
      'EMF is the cause of voltage across a circuit; terminal voltage is the effect observed under load.',
      'SI unit of EMF is Volt (V) = Joule / Coulomb.',
      'For an open circuit (I = 0), Terminal Voltage (V) equals source EMF (E).',
      'When charging a battery, external supply voltage must exceed EMF: V_charging = E + (I × r).',
      'EMF is independent of circuit load resistance, whereas terminal voltage depends on load current.'
    ],
    hi: [
      'ईएमएफ परिपथ में वोल्टेज का कारण है; टर्मिनल वोल्टेज लोड के तहत देखा गया परिणाम है।',
      'ईएमएफ का SI मात्रक वोल्ट (V) = जूल / कूलॉम है।',
      'खुले परिपथ (I = 0) के लिए, टर्मिनल वोल्टेज (V) स्रोत ईएमएफ (E) के बराबर होता है।',
      'बैलरी चार्ज करते समय बाहरी आपूर्ति वोल्टेज ईएमएफ से अधिक होना चाहिए: V = E + Ir।',
      'ईएमएफ लोड प्रतिरोध पर निर्भर नहीं करता, जबकि टर्मिनल वोल्टेज धारा पर निर्भर करता है।'
    ],
    bn: [
      'EMF হলো সার্কিটে ভোল্টেজের কারণ; টার্মিনাল ভোল্টেজ হলো লোড অবস্থায় প্রাপ্ত ফলাফল।',
      'EMF-এর SI একক ভোল্ট (V) = জুল / কুলম্ব।',
      'ওপেন সার্কিটে (I = 0), টার্মিনাল ভোল্টেজ (V) সোর্স EMF (E)-এর সমান হয়।',
      'ব্যাটারি চার্জ করার সময় বাহ্যিক সরবরাহ ভোল্টেজ EMF-এর চেয়ে বেশি হতে হবে: V = E + Ir।',
      'EMF লোড রেজিস্ট্যান্সের ওপর নির্ভর করে না, কিন্তু টার্মিনাল ভোল্টেজ লোড কারেন্টের ওপর নির্ভর করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Thinking EMF is a physical force measured in Newtons.',
      'Assuming battery terminal voltage remains constant under heavy current discharge.',
      'Confusing source internal resistance drop with external circuit load resistor drop.'
    ],
    hi: [
      'यह सोचना कि ईएमएफ न्यूटन में मापा जाने वाला एक भौतिक बल है।',
      'यह मानना कि भारी धारा डिस्चार्ज के तहत बैटरी टर्मिनल वोल्टेज स्थिर रहता है।',
      'स्रोत के आंतरिक प्रतिरोध ड्रॉप को बाहरी लोड प्रतिरोध ड्रॉप के साथ मिलाना।'
    ],
    bn: [
      'EMF-কে নিউটনে পরিমাপকৃত একটি ভৌত বল মনে করা।',
      'উচ্চ কারেন্ট ডিসচার্জের সময় ব্যাটারির টার্মিনাল ভোল্টেজ ধ্রুবক থাকে ভাবা।',
      'সোর্সের অভ্যন্তরীণ রোধ ড্রপকে বাহ্যিক লোডের রোধ ড্রপের সাথে গুলিয়ে ফেলা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-emf-1',
      question: {
        en: 'The potential difference across the terminals of a cell when no current is drawn is called its:',
        hi: 'जब किसी सेल से कोई धारा नहीं ली जाती है, तो उसके टर्मिनलों के बीच के विभवांतर को क्या कहते हैं?',
        bn: 'যখন কোনো সেল থেকে কোনো কারেন্ট নেওয়া হয় না, তখন তার টার্মিনাল বিভব পার্থক্যকে বলা হয়:'
      },
      options: [
        { id: 'a', text: { en: 'Terminal Voltage', hi: 'टर्मिनल वोल्टेज', bn: 'টার্মিনাল ভোল্টেজ' } },
        { id: 'b', text: { en: 'Electromotive Force (EMF)', hi: 'विद्युत वाहक बल (EMF)', bn: 'ইলেক্ট্রোমোটিভ ফোর্স (EMF)' } },
        { id: 'c', text: { en: 'Voltage Drop', hi: 'वोल्टेज ड्रॉप', bn: 'ভোল্টেজ ড্রপ' } },
        { id: 'd', text: { en: 'Breakdown Voltage', hi: 'ब्रेकडाउन वोल्टेज', bn: 'ব্রেকডাউন ভোল্টেজ' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Under open-circuit conditions (I = 0), terminal voltage equals cell EMF.',
        hi: 'खुले परिपथ की स्थिति (I = 0) में, टर्मिनल वोल्टेज सेल ईएमएफ के बराबर होता है।',
        bn: 'ওপেন সার্কিট অবস্থায় (I = 0), টার্মিনাল ভোল্টেজ সেল EMF-এর সমান হয়।'
      }
    },
    {
      id: 'mcq-emf-2',
      question: {
        en: 'When a battery is delivering current to an external load, its terminal voltage V is:',
        hi: 'जब बैटरी बाहरी लोड को धारा दे रही होती है, तो इसका टर्मिनल वोल्टेज V होता है:',
        bn: 'যখন ব্যাটারি বাহ্যিক লোডে কারেন্ট জোগান দেয়, তখন এর টার্মিনাল ভোল্টেজ V হয়:'
      },
      options: [
        { id: 'a', text: { en: 'Equal to EMF (V = E)', hi: 'ईएमएफ के बराबर (V = E)', bn: 'EMF-এর সমান (V = E)' } },
        { id: 'b', text: { en: 'Less than EMF (V < E)', hi: 'ईएमएफ से कम (V < E)', bn: 'EMF-এর চেয়ে কম (V < E)' } },
        { id: 'c', text: { en: 'Greater than EMF (V > E)', hi: 'ईएमएफ से अधिक (V > E)', bn: 'EMF-এর চেয়ে বেশি (V > E)' } },
        { id: 'd', text: { en: 'Zero always', hi: 'हमेशा शून्य', bn: 'সর্বদা শূন্য' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Due to internal resistance drop (Ir), V = E - Ir, so V < E during discharge.',
        hi: 'आंतरिक प्रतिरोध ड्रॉप (Ir) के कारण V = E - Ir, इसलिए डिस्चार्ज के दौरान V < E होता है।',
        bn: 'অভ্যন্তরীণ রোধের ড্রপের (Ir) কারণে, V = E - Ir, তাই ডিসচার্জের সময় V < E হয়।'
      }
    },
    {
      id: 'mcq-emf-3',
      question: {
        en: 'Which device directly converts mechanical energy into alternating electromotive force?',
        hi: 'कौन सा उपकरण यांत्रिक ऊर्जा को सीधे प्रत्यावर्ती विद्युत वाहक बल में परिवर्तित करता है?',
        bn: 'কোন যন্ত্রটি সরাসরি যান্ত্রিক শক্তিকে এসি ইএমএফ-এ রূপান্তরিত করে?'
      },
      options: [
        { id: 'a', text: { en: 'DC Battery', hi: 'डीसी बैटरी', bn: 'ডিসি ব্যাটারি' } },
        { id: 'b', text: { en: 'AC Generator / Alternator', hi: 'एसी जनरेटर / अल्टरनेटर', bn: 'এসি জেনারেটর / অল্টারনেটর' } },
        { id: 'c', text: { en: 'Solar PV Cell', hi: 'सोलर पीवी सेल', bn: 'সোলার পিভি সেল' } },
        { id: 'd', text: { en: 'Transformer', hi: 'ट्रांसफॉर्मर', bn: 'ট্রান্সফরমার' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'An AC generator rotates conductors in magnetic fields to produce induced AC EMF.',
        hi: 'एसी जनरेटर चुंबकीय क्षेत्र में चालकों को घुमाकर प्रेरित एसी ईएमएफ उत्पन्न करता है।',
        bn: 'এসি জেনারেটর চুম্বকীয় ক্ষেত্রে পরিবাহী ঘুরিয়ে আবিষ্ট এসি ইএমএফ তৈরি করে।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-emf-1',
      question: {
        en: 'A battery of EMF 24 V and internal resistance 0.2 Ω is connected to a 4.6 Ω external load. Calculate the circuit current and load terminal voltage.',
        hi: '24 V ईएमएफ और 0.2 Ω आंतरिक प्रतिरोध वाली बैटरी 4.6 Ω बाहरी लोड से जुड़ी है। परिपथ धारा और लोड टर्मिनल वोल्टेज की गणना करें।',
        bn: '২৪ V EMF এবং ০.২ Ω অভ্যন্তরীণ রোধের ব্যাটারি ৪.৬ Ω লোডের সাথে যুক্ত। কারেন্ট এবং টার্মিনাল ভোল্টেজ বের করো।'
      },
      hint: {
        en: 'Total resistance R_total = R_load + r. Calculate I = E / R_total, then V = I × R_load.',
        hi: 'कुल प्रतिरोध R_total = R_load + r। I = E / R_total, फिर V = I × R_load ज्ञात करें।',
        bn: 'মোট রোধ R_total = R_load + r। I = E / R_total দিয়ে কারেন্ট এবং V = I × R_load দিয়ে ভোল্টেজ বের করো।'
      },
      answerKey: {
        en: 'R_total = 4.6 + 0.2 = 4.8 Ω. Current I = 24 / 4.8 = 5 A. Terminal Voltage V = 5 A × 4.6 Ω = 23 V (or V = 24 - 5×0.2 = 23 V).',
        hi: 'R_total = 4.6 + 0.2 = 4.8 Ω। धारा I = 24 / 4.8 = 5 A। टर्मिनल वोल्टेज V = 5 A × 4.6 Ω = 23 V।',
        bn: 'R_total = ৪.৬ + ০.২ = ৪.৮ Ω। কারেন্ট I = ২৪ / ৪.৮ = ৫ A। টার্মিনাল ভোল্টেজ V = ৫ A × ৪.৬ Ω = ২৩ V।'
      }
    },
    {
      id: 'pq-emf-2',
      question: {
        en: 'Explain why the terminal voltage of a secondary battery increases above its rated EMF during charging.',
        hi: 'समझाएं कि चार्जिंग के दौरान सेकेंडरी बैटरी का टर्मिनल वोल्टेज उसके रेटेड ईएमएफ से अधिक क्यों हो जाता है।',
        bn: 'চার্জিংয়ের সময় সেকেন্ডারি ব্যাটারির টার্মিনাল ভোল্টেজ কেন এর রেটেড EMF-এর চেয়ে বৃদ্ধি পায় তা ব্যাখ্যা করো।'
      },
      hint: {
        en: 'Consider direction of charging current through internal resistance: V_terminal = E + Ir.',
        hi: 'आंतरिक प्रतिरोध के माध्यम से चार्जिंग धारा की दिशा पर विचार करें: V_terminal = E + Ir।',
        bn: 'অভ্যন্তরীণ রোধের ভেতর চার্জিং কারেন্টের অভিমুখ চিন্তা করো: V_terminal = E + Ir।'
      },
      answerKey: {
        en: 'During charging, external current enters the positive terminal. The charging power supply must overcome both the internal chemical EMF (E) and the internal resistance drop (Ir), resulting in V_terminal = E + (I × r) > E.',
        hi: 'चार्जिंग के दौरान बाहरी धारा धनात्मक टर्मिनल में प्रवेश करती है। चार्जर को रासायनिक ईएमएफ (E) और आंतरिक प्रतिरोध ड्रॉप (Ir) दोनों को पार करना होता है, जिससे V = E + Ir > E होता है।',
        bn: 'চার্জিংকালে বাহ্যিক কারেন্ট পজিটিভ টার্মিনালে প্রবেশ করে। চার্জারকে ব্যাটারির অভ্যন্তরীণ কেমিক্যাল EMF (E) এবং অভ্যন্তরীণ রোধের ড্রপ (Ir) উভয়ই অতিক্রম করতে হয়, ফলে V = E + Ir > E হয়।'
      }
    }
  ]
};
