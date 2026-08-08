import { Lesson } from '../types';

export const LESSON_POWER: Lesson = {
  id: 'lsn-power',
  topicId: 'tp-power',
  order: 7,
  title: {
    en: 'Electrical Power',
    hi: 'विद्युत शक्ति (Electrical Power)',
    bn: 'বৈদ্যুতিক ক্ষমতা (Electrical Power)'
  },
  easyExplanation: {
    en: 'Electrical Power is the rate at which electrical energy is consumed, converted, or transferred by an electrical device per unit time.',
    hi: 'विद्युत शक्ति वह दर है जिस पर किसी विद्युत उपकरण द्वारा प्रति इकाई समय में विद्युत ऊर्जा की खपत, रूपांतरण या स्थानांतरण किया जाता है।',
    bn: 'বৈদ্যুতিক ক্ষমতা হলো প্রতি একক সময়ে কোনো বৈদ্যুতিক যন্ত্র দ্বারা বৈদ্যুতিক শক্তি ব্যবহারের বা রূপান্তরের হার।'
  },
  detailedExplanation: {
    en: 'Electrical Power is denoted by P and measured in Watts (W). 1 Watt is equal to 1 Joule of energy consumed per second (1 W = 1 J / s). In DC circuits, basic electrical power is P = V × I. By substituting Ohm Law (V = IR or I = V/R), we get three essential power formulas: 1) P = V × I; 2) P = I² × R (Joule heating loss formula, useful when current and resistance are known); 3) P = V² / R (useful when voltage and resistance are known). In AC circuits, real power involves power factor (P = V_rms × I_rms × cos φ). Multiples include kilowatt (1 kW = 1000 W) and megawatt (1 MW = 10⁶ W).',
    hi: 'विद्युत शक्ति को P द्वारा दर्शाया जाता है और वाट (W) में मापा जाता है। 1 वाट = 1 जूल प्रति सेकंड (1 W = 1 J / s)। डीसी परिपथ में शक्ति P = V × I होती है। ओम का नियम लागू करने पर तीन मुख्य सूत्र मिलते हैं: 1) P = V × I; 2) P = I² × R; 3) P = V² / R। एसी परिपथ में वास्तविक शक्ति में पावर फैक्टर शामिल होता है (P = VI cos φ)।',
    bn: 'বৈদ্যুতিক ক্ষমতাকে P দ্বারা প্রকাশ করা হয় এবং ওয়াট (W) এককে মাপা হয়। ১ ওয়াট = ১ জুল প্রতি সেকেন্ড (১ W = ১ J / s)। ডিসি সার্কিটে ক্ষমতা P = V × I। ওহমের সূত্র বসিয়ে তিনটি রূপ পাওয়া যায়: ১) P = V × I; ২) P = I² × R; ৩) P = V² / R। এসি সার্কিটে রিয়েল পাওয়ারের ক্ষেত্রে পাওয়ার ফ্যাক্টর যুক্ত হয় (P = VI cos φ)।'
  },
  formulas: [
    {
      symbol: 'P',
      expression: 'P = V × I',
      description: {
        en: 'P = Power (Watts, W), V = Voltage (Volts, V), I = Current (Amperes, A)',
        hi: 'P = शक्ति (वाट), V = वोल्टेज (वोल्ट), I = धारा (एम्पीयर)',
        bn: 'P = ক্ষমতা (ওয়াট), V = ভোল্টেজ (ভোল্ট), I = কারেন্ট (অ্যাম্পিয়ার)'
      }
    },
    {
      symbol: 'P',
      expression: 'P = I² × R',
      description: {
        en: 'P = Power (Watts, W), I = Current (Amperes, A), R = Resistance (Ohms, Ω)',
        hi: 'P = शक्ति (वाट), I = धारा (एम्पीयर), R = प्रतिरोध (ओम)',
        bn: 'P = ক্ষমতা (ওয়াট), I = কারেন্ট (অ্যাম্পিয়ার), R = রোধ (ওহম)'
      }
    },
    {
      symbol: 'P',
      expression: 'P = V² / R',
      description: {
        en: 'P = Power (Watts, W), V = Voltage (Volts, V), R = Resistance (Ohms, Ω)',
        hi: 'P = शक्ति (वाट), V = वोल्टेज (वोल्ट), R = प्रतिरोध (ओम)',
        bn: 'P = ক্ষমতা (ওয়াট), V = ভোল্টেজ (ভোল্ট), R = রোধ (ওহম)'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-power-formulas',
      title: {
        en: 'Electrical Power Formulas Relation',
        hi: 'विद्युत शक्ति सूत्रों का संबंध',
        bn: 'বৈদ্যুতিক ক্ষমতার সূত্রসমূহের সম্পর্ক'
      },
      caption: {
        en: 'Power can be computed using Voltage and Current (VI), Current and Resistance (I²R), or Voltage and Resistance (V²/R).',
        hi: 'शक्ति की गणना VI, I²R, या V²/R का उपयोग करके की जा सकती है।',
        bn: 'ক্ষমতা VI, I²R অথবা V²/R ব্যবহার করে নির্ণয় করা যায়।'
      },
      svgType: 'power-formulas'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-power-1',
      problem: {
        en: 'An electric water heater operates at 230 V DC supply and draws a current of 10 A. Calculate its power rating in kW and its internal element resistance.',
        hi: 'एक इलेक्ट्रिक वाटर हीटर 230 V डीसी आपूर्ति पर काम करता है और 10 A धारा लेता है। किलोवाट (kW) में इसकी शक्ति और आंतरिक प्रतिरोध की गणना करें।',
        bn: 'একটি ওয়াটার হিটার ২৩০ V ডিসি মেইনস থেকে ১০ A কারেন্ট নেয়। kW এককে এর ক্ষমতা এবং এর অভ্যন্তরীণ এলিমেন্টের রোধ কত?'
      },
      givenValues: {
        'Voltage (V)': '230 V',
        'Current (I)': '10 A'
      },
      solution: {
        en: '1) Power P = V × I = 230 V × 10 A = 2300 Watts = 2.3 kW.\n2) Resistance R = V / I = 230 V / 10 A = 23 Ω (or R = V² / P = 230² / 2300 = 23 Ω).',
        hi: '1) शक्ति P = V × I = 230 V × 10 A = 2300 वाट = 2.3 kW।\n2) प्रतिरोध R = V / I = 230 V / 10 A = 23 Ω।',
        bn: '১) ক্ষমতা P = V × I = ২৩০ V × ১০ A = ২৩০০ ওয়াট = ২.৩ kW।\n২) রোধ R = V / I = ২৩০ V / ১০ A = ২৩ Ω।'
      },
      finalAnswer: {
        en: 'Power P = 2.3 kW, Resistance R = 23 Ω',
        hi: 'शक्ति P = 2.3 kW, प्रतिरोध R = 23 Ω',
        bn: 'ক্ষমতা P = ২.৩ kW, রোধ R = ২৩ Ω'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Choosing appliance power ratings (e.g., 1000 W geyser, 100 W TV, 10 W LED bulb) to calculate electrical load.',
      'Sizing circuit wiring gauge based on heat loss P = I²R to prevent cable insulation melting.',
      'Rating electrical transformers, alternators, and motors in kVA or kW.'
    ],
    hi: [
      'विद्युत लोड की गणना के लिए उपकरणों की वाट क्षमता (उदा. 1000 W गीजर, 100 W टीवी) चुनना।',
      'केबल इन्सुलेशन पिघलने से रोकने के लिए P = I²R गर्मी के नुकसान के आधार पर तार का आकार तय करना।',
      'ट्रांसफॉर्मर, अल्टरनेटर और मोटरों को kVA या kW में रेट करना।'
    ],
    bn: [
      'বৈদ্যুতিক লোড গণনায় যন্ত্রপাতির পাওয়ার রেটিং (যেমন ১০০০ W গিজার, ১০ W এলইডি লাইট) নির্ধারণ।',
      'তারের ইনসুলেশন গলে যাওয়া রোধে P = I²R তাপ অপচয়ের ওপর ভিত্তি করে তারের সাইজ নির্ধারণ।',
      'ট্রান্সফরমার, জেনারেটর এবং মোটরের kVA বা kW রেটিং নির্ধারণ।'
    ]
  },
  importantPoints: {
    en: [
      'SI unit of electrical power is Watt (W) = Joule per second (J/s).',
      '1 Horsepower (HP) in metric = 735.5 Watts; 1 HP in Imperial/British = 746 Watts.',
      'P = I²R represents pure thermal power dissipation in conductors (Joule heating loss).',
      'Power rating printed on appliances assumes nominal supply voltage.',
      'Wattmeter is used to measure electrical power in AC and DC circuits.'
    ],
    hi: [
      'विद्युत शक्ति का SI मात्रक वाट (W) = जूल प्रति सेकंड है।',
      '1 हॉर्सपावर (HP) मीट्रिक = 735.5 वाट; 1 HP ब्रिटिश = 746 वाट।',
      'P = I²R चालकों में शुद्ध तापीय शक्ति हानि (जूल हीटिंग हानि) को दर्शाता है।',
      'उपकरणों पर मुद्रित पावर रेटिंग नाममात्र आपूर्ति वोल्टेज मानकर होती है।',
      'एसी और डीसी परिपथों में विद्युत शक्ति मापने के लिए वाटमीटर का उपयोग किया जाता है।'
    ],
    bn: [
      'বৈদ্যুতিক ক্ষমতার SI একক ওয়াট (W) = জুল প্রতি সেকেন্ড (J/s)।',
      '১ হর্স পাওয়ার (HP) মেট্রিক = ৭৩৫.৫ ওয়াট; ১ HP ইম্পেরিয়াল = ৭৪৬ ওয়াট।',
      'P = I²R পরিবাহীতে তাপীয় শক্তি অপচয়কে (জুল হিটিং লস) নির্দেশ করে।',
      'যন্ত্রপাতিতে লেখা পাওয়ার রেটিং নির্দিষ্ট মেইনস ভোল্টেজের জন্য প্রযোজ্য।',
      'ওয়াটমিটার দিয়ে সার্কিটের ক্ষমতা পরিমাপ করা হয়।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing power (Watts) with energy (Watt-hours or Joules). Power is rate; energy is total amount.',
      'Using P = V²/R formula when current I is constant instead of voltage V.',
      'Forgetting that mechanical output power of a motor equals electrical input power multiplied by motor efficiency.'
    ],
    hi: [
      'शक्ति (वाट) को ऊर्जा (वाट-घंटे या जूल) के साथ भ्रमित करना। शक्ति दर है; ऊर्जा कुल मात्रा है।',
      'जब धारा I स्थिर हो तो वोल्टेज V के बजाय P = V²/R का उपयोग करना।',
      'यह भूल जाना कि मोटर की आउटपुट शक्ति = इनपुट शक्ति × दक्षता होती है।'
    ],
    bn: [
      'ক্ষমতা (ওয়াট) এবং শক্তি (ওয়াট-ঘণ্টা বা জুল) গুলিয়ে ফেলা। ক্ষমতা হলো হার, আর শক্তি হলো মোট পরিমাণ।',
      'কারেন্ট स्थिर থাকার পরও P = V²/R প্রয়োগ করা (তখন P = I²R প্রযোজ্য)।',
      'মোটরের যান্ত্রিক আউটপুট পাওয়ার যে বৈদাতিক ইনপুট পাওয়ার ও দক্ষতার গুণফল তা ভুলে যাওয়া।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-power-1',
      question: {
        en: 'One Imperial Horsepower (HP) is equal to approximately how many Watts?',
        hi: 'एक ब्रिटिश/इंपीरियल हॉर्सपावर (HP) लगभग कितने वाट के बराबर होती है?',
        bn: 'এক ইম্পেরিয়াল হর্স পাওয়ার (HP) কত ওয়াটের সমতুল্য?'
      },
      options: [
        { id: 'a', text: { en: '735.5 W', hi: '735.5 W', bn: '৭৩৫.৫ W' } },
        { id: 'b', text: { en: '746 W', hi: '746 W', bn: '৭৪৬ W' } },
        { id: 'c', text: { en: '1000 W', hi: '1000 W', bn: '১০০০ W' } },
        { id: 'd', text: { en: '500 W', hi: '500 W', bn: '৫০০ W' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: '1 Imperial HP = 746 Watts (Metric HP ≈ 735.5 Watts).',
        hi: '1 ब्रिटिश HP = 746 वाट (मीट्रिक HP ≈ 735.5 वाट)।',
        bn: '১ ইম্পেরিয়াল HP = ৭৪৬ ওয়াট (মেট্রিক HP ≈ ৭৩৫.৫ ওয়াট)।'
      }
    },
    {
      id: 'mcq-power-2',
      question: {
        en: 'If the current flowing through a resistor is doubled, the power dissipated in it will:',
        hi: 'यदि किसी प्रतिरोधक से बहने वाली धारा को दोगुना कर दिया जाए, तो उसमें क्षय होने वाली शक्ति होगी:',
        bn: 'কোনো রোধের মধ্য দিয়ে প্রবাহিত কারেন্ট দ্বিগুণ করা হলে অপচয়কৃত ক্ষমতা হবে:'
      },
      options: [
        { id: 'a', text: { en: 'Double', hi: 'दोगुनी', bn: 'দ্বিগুণ' } },
        { id: 'b', text: { en: 'Quadruple (4 times)', hi: 'चौगुनी (4 गुना)', bn: '৪ গুণ' } },
        { id: 'c', text: { en: 'Halve', hi: 'आधी', bn: 'অর্ধেক' } },
        { id: 'd', text: { en: 'Remain same', hi: 'समान रहेगी', bn: 'একই থাকবে' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Since P = I²R, if current I becomes 2I, power becomes (2I)²R = 4 I²R.',
        hi: 'चूंकि P = I²R, यदि धारा I 2I हो जाती है, तो शक्ति (2I)²R = 4 I²R हो जाती है।',
        bn: 'যেহেতু P = I²R, তাই কারেন্ট ২I হলে ক্ষমতা হয় (২I)²R = ৪ I²R।'
      }
    },
    {
      id: 'mcq-power-3',
      question: {
        en: 'A 100 W bulb and a 40 W bulb are operated at the same rated voltage. Which bulb has a higher resistance?',
        hi: '100 W और 40 W के दो बल्ब समान रेटेड वोल्टेज पर चलाए जाते हैं। किस बल्ब का प्रतिरोध अधिक है?',
        bn: 'একটি ১০০ W এবং একটি ৪০ W বাল্ব একই রেটেড ভোল্টেজে যুক্ত। কোন বাল্বের রোধ বেশি?'
      },
      options: [
        { id: 'a', text: { en: 'The 100 W bulb', hi: '100 W बल्ब', bn: '১০০ W বাল্ব' } },
        { id: 'b', text: { en: 'The 40 W bulb', hi: '40 W बल्ब', bn: '৪০ W বাল্ব' } },
        { id: 'c', text: { en: 'Both have equal resistance', hi: 'दोनों का प्रतिरोध बराबर है', bn: 'উভয়ের রোধ সমান' } },
        { id: 'd', text: { en: 'Resistance depends on ambient temperature only', hi: 'केवल तापमान पर निर्भर करता है', bn: 'কেবলমাত্র পরিবেশের তাপমাত্রার ওপর নির্ভর করে' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'Using R = V² / P, lower wattage P means higher filament resistance R.',
        hi: 'सूत्र R = V² / P से, कम वाट क्षमता P का अर्थ है अधिक फिलामेंट प्रतिरोध R।',
        bn: 'R = V² / P সূত্রানুযায়ী কম ক্ষমতার (P) বাল্বের রোধ (R) বেশি হয়।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-power-1',
      question: {
        en: 'Calculate the current and resistance of a 2 kW electric heater rated for a 200 V DC mains supply.',
        hi: '200 V डीसी मुख्य आपूर्ति के लिए रेटेड 2 kW इलेक्ट्रिक हीटर की धारा और प्रतिरोध की गणना करें।',
        bn: '২০০ V ডিসি সরবরাহে ২ kW একটি ইলেকট্রিক হিটারের কারেন্ট এবং রোধ নির্ণয় করো।'
      },
      hint: {
        en: 'P = 2 kW = 2000 W, V = 200 V. Use I = P / V and R = V / I.',
        hi: 'P = 2000 W, V = 200 V। I = P / V और R = V / I का प्रयोग करें।',
        bn: 'P = ২০০০ W, V = ২০০ V। I = P / V এবং R = V / I প্রয়োগ করো।'
      },
      answerKey: {
        en: '1) Current I = P / V = 2000 W / 200 V = 10 Amperes.\n2) Resistance R = V / I = 200 V / 10 A = 20 Ohms.',
        hi: '1) धारा I = P / V = 2000 W / 200 V = 10 एम्पीयर।\n2) प्रतिरोध R = V / I = 200 V / 10 A = 20 ओम।',
        bn: '১) কারেন্ট I = P / V = ২০০০ W / ২০০ V = ১০ অ্যাম্পিয়ার।\n২) রোধ R = V / I = ২০০ V / ১০ A = ২০ ওহম।'
      }
    },
    {
      id: 'pq-power-2',
      question: {
        en: 'Two resistors of 10 Ω and 20 Ω are connected in series across a 60 V DC source. Calculate the power dissipated in each resistor.',
        hi: '10 Ω और 20 Ω के दो प्रतिरोधक 60 V डीसी स्रोत से श्रेणीक्रम में जुड़े हैं। प्रत्येक में क्षय शक्ति की गणना करें।',
        bn: '১০ Ω এবং ২০ Ω দুটি রোধ ৬০ V ডিসি সোর্সের সাথে সিরিজে সংযুক্ত। প্রতিটি রোধে অপচয়কৃত ক্ষমতা নির্ণয় করো।'
      },
      hint: {
        en: 'Calculate total R = 10 + 20 = 30 Ω, total current I = 60 / 30 = 2 A. Then P₁ = I² R₁ and P₂ = I² R₂.',
        hi: 'कुल R = 30 Ω, धारा I = 60 / 30 = 2 A। P₁ = I² R₁ और P₂ = I² R₂ ज्ञात करें।',
        bn: 'মোট R = ৩০ Ω, কারেন্ট I = ৬০ / ৩০ = ২ A। P₁ = I² R₁ এবং P₂ = I² R₂ প্রয়োগ করো।'
      },
      answerKey: {
        en: 'R_total = 10 + 20 = 30 Ω. Circuit Current I = 60 V / 30 Ω = 2 A.\nPower in 10 Ω resistor: P₁ = I² × R₁ = (2)² × 10 = 40 Watts.\nPower in 20 Ω resistor: P₂ = I² × R₂ = (2)² × 20 = 80 Watts.\n(Total Power = 40 + 80 = 120 W).',
        hi: 'धारा I = 2 A। 10 Ω में शक्ति P₁ = 2² × 10 = 40 W। 20 Ω में शक्ति P₂ = 2² × 20 = 80 W।',
        bn: 'কারেন্ট I = ২ A। ১০ Ω রোধে ক্ষমতা P₁ = ২² × ১০ = ৪০ ওয়াট। ২০ Ω রোধে ক্ষমতা P₂ = ২² × ২০ = ৮০ ওয়াট।'
      }
    }
  ]
};

export const LESSON_ENERGY: Lesson = {
  id: 'lsn-energy',
  topicId: 'tp-energy',
  order: 8,
  title: {
    en: 'Electrical Energy',
    hi: 'विद्युत ऊर्जा (Electrical Energy)',
    bn: 'বৈদ্যুতিক শক্তি (Electrical Energy)'
  },
  easyExplanation: {
    en: 'Electrical Energy is the total work done or total power consumed by an electrical appliance over a period of time. It is what we pay for in our monthly electricity bills.',
    hi: 'विद्युत ऊर्जा किसी विद्युत उपकरण द्वारा समय की अवधि में किया गया कुल कार्य या खपत की गई कुल शक्ति है। यही वह ऊर्जा है जिसके लिए हम बिजली बिल का भुगतान करते हैं।',
    bn: 'বৈদ্যুতিক শক্তি হলো কোনো বৈদ্যাতিক যন্ত্র দ্বারা নির্দিষ্ট সময়ে ব্যয়িত মোট কাজ বা শক্তি। আমাদের বাসাবাড়ির বিদ্যুৎ বিল এই শক্তির ওপর ভিত্তি করেই তৈরি হয়।'
  },
  detailedExplanation: {
    en: 'Electrical Energy is denoted by E or W. The fundamental formula is Energy = Power × Time (E = P × t). In the SI system, energy is measured in Joules (J), where 1 Joule = 1 Watt × 1 second (1 J = 1 W·s). For commercial electricity billing, the practical unit used is the Kilowatt-hour (kWh), also called 1 Board of Trade Unit (B.O.T.U.). 1 kWh is defined as the energy consumed by a 1000 Watt appliance operating continuously for 1 hour. Conversion: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ Joules = 3.6 Megajoules (MJ).',
    hi: 'विद्युत ऊर्जा को E द्वारा दर्शाया जाता है (E = P × t)। SI मात्रक जूल (J) है (1 J = 1 W·s)। व्यावसायिक और घरेलू बिजली बिलिंग के लिए किलोवाट-घंटा (kWh) या यूनिट का उपयोग किया जाता है। 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ जूल = 3.6 मेगाजूल (MJ)।',
    bn: 'বৈদ্যুতিক শক্তিকে E দ্বারা প্রকাশ করা হয় (E = P × t)। SI একক জুল (J) (১ J = ১ W·s)। বাণিজ্যিক ও গৃহস্থালি বিদ্যুৎ বিলের জন্য কিলওয়াট-ঘণ্টা (kWh) বা বোর্ড অব ট্রেড ইউনিট (B.O.T.U.) ব্যবহৃত হয়। ১ kWh = ১০০০ W × ৩৬০০ s = ৩.৬ × ১০⁶ জুল = ৩.৬ মেগাজুল (MJ)।'
  },
  formulas: [
    {
      symbol: 'E',
      expression: 'E = P × t',
      description: {
        en: 'E = Electrical Energy (Joules or Watt-seconds), P = Power (Watts), t = Time (Seconds)',
        hi: 'E = विद्युत ऊर्जा (जूल), P = शक्ति (वाट), t = समय (सेकंड)',
        bn: 'E = বৈদ্যুতিক শক্তি (জুল), P = ক্ষমতা (ওয়াট), t = সময় (সেকেন্ড)'
      }
    },
    {
      symbol: 'kWh',
      expression: 'Energy (kWh) = [Power (W) × Time (hours)] / 1000',
      description: {
        en: 'Commercial Units (kWh) calculation for electricity billing',
        hi: 'बिजली बिलिंग के लिए व्यावसायिक यूनिट (kWh) की गणना',
        bn: 'বিদ্যুৎ বিলের জন্য বাণিজ্যিক ইউনিট (kWh) গণনার सूत्र'
      }
    }
  ],
  diagrams: [
    {
      id: 'diag-energy-meter',
      title: {
        en: 'Energy Consumption & kWh Meter Concept',
        hi: 'ऊर्जा खपत एवं kWh मीटर अवधारणा',
        bn: 'শক্তি ব্যবহার ও kWh মিটারের ধারণা'
      },
      caption: {
        en: 'Energy meters measure total energy in kWh (Units = Power in kW × Time in hours).',
        hi: 'ऊर्जा मीटर kWh में कुल ऊर्जा मापते हैं (यूनिट = kW में शक्ति × घंटों में समय)।',
        bn: 'এনার্জি মিটার kWh এককে মোট শক্তি পরিমাপ করে (ইউনিট = kW এককে ক্ষমতা × ঘণ্টা এককে সময়)।'
      },
      svgType: 'energy-meter'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-energy-1',
      problem: {
        en: 'A household uses four 100 W bulbs for 5 hours daily, a 1000 W electric iron for 1 hour daily, and a 200 W TV for 6 hours daily. Calculate the total electrical energy consumed in the month of April (30 days) in kWh units, and the bill cost at ₹6.00 per unit.',
        hi: 'एक परिवार रोजाना 5 घंटे 100 W के 4 बल्ब, 1 घंटे 1000 W की प्रेस और 6 घंटे 200 W का टीवी चलाता है। अप्रैल (30 दिन) में कुल ऊर्जा खपत (kWh) और ₹6.00 प्रति यूनिट की दर से बिल ज्ञात कीजिए।',
        bn: 'একটি বাসাবাড়িতে প্রতিদিন ৪টি ১০০ W বাল্ব ৫ ঘণ্টা, ১টি ১০00 W ইস্ত্রি ১ ঘণ্টা এবং ১টি ২০০ W টিভি ৬ ঘণ্টা চলে। এপ্রিল মাসে (৩০ দিন) মোট ব্যবহৃত শক্তি (kWh) এবং প্রতি ইউনিট ₹৬.০০ হিসেবে বিদ্যুৎ বিল নির্ণয় করো।'
      },
      givenValues: {
        'Bulbs Power': '4 × 100 W = 400 W for 5 hours/day',
        'Iron Power': '1000 W for 1 hour/day',
        'TV Power': '200 W for 6 hours/day',
        'Days in April': '30 days',
        'Rate per unit': '₹6.00 / kWh'
      },
      solution: {
        en: '1) Daily energy consumption:\n- Bulbs: 400 W × 5 h = 2000 Wh\n- Iron: 1000 W × 1 h = 1000 Wh\n- TV: 200 W × 6 h = 1200 Wh\nDaily Total = 2000 + 1000 + 1200 = 4200 Wh = 4.2 kWh (Units/day).\n2) Monthly Energy (30 days) = 4.2 kWh × 30 = 126 kWh (Units).\n3) Total Electricity Bill = 126 Units × ₹6.00 = ₹756.00.',
        hi: '1) दैनिक ऊर्जा खपत = 4200 Wh = 4.2 kWh (यूनिट/दिन)।\n2) मासिक खपत (30 दिन) = 4.2 × 30 = 126 kWh (यूनिट)।\n3) कुल बिल = 126 × ₹6.00 = ₹756.00।',
        bn: '১) দৈনিক শক্তি খরচ = ৪২০০ Wh = ৪.২ kWh (ইউনিট/দিন)।\n২) মাসিক মোট খরচ (৩০ দিন) = ৪.২ × ৩০ = ১২৬ kWh (ইউনিট)।\n৩) মোট বিদ্যুৎ বিল = ১২৬ × ₹৬.০০ = ₹৭৫৬.০০।'
      },
      finalAnswer: {
        en: 'Total Energy = 126 kWh (Units), Bill = ₹756.00',
        hi: 'कुल ऊर्जा = 126 kWh (यूनिट), कुल बिल = ₹756.00',
        bn: 'মোট শক্তি = ১২৬ kWh (ইউনিট), মোট বিল = ₹৭৫৬.০০'
      }
    }
  ],
  practicalApplications: {
    en: [
      'Energy auditing in factories and commercial buildings to reduce electricity bills.',
      'Calibrating single-phase and three-phase digital smart energy meters.',
      'Sizing solar battery bank capacities in Ampere-hours (Ah) and Watt-hours (Wh).'
    ],
    hi: [
      'बिजली बिल कम करने के लिए कारखानों और व्यावसायिक भवनों में ऊर्जा ऑडिटिंग।',
      'सिंगल-फेस और थ्री-फेस डिजिटल स्मार्ट एनर्जी मीटर का अंशांकन।',
      'सौर बैटरी बैंक क्षमताओं को एम्पीयर-घंटे (Ah) और वाट-घंटे (Wh) में आकार देना।'
    ],
    bn: [
      'বিদ্যুৎ খরচ কমাতে শিল্পকারখানা ও বাণিজ্যিক ভবনে শক্তি অডিট।',
      'এক-ফেজ ও তিন-ফেজ ডিজিটাল স্মার্ট এনার্জি মিটারের ক্যালিব্রেশন।',
      'সৌর ব্যাটারি ব্যাংকের ক্যাপাসিটি Ah ও Wh এককে নির্ধারণ।'
    ]
  },
  importantPoints: {
    en: [
      'SI unit of energy is Joule (J). 1 Joule = 1 Watt-second.',
      '1 kWh (Kilowatt-hour) = 1 Board of Trade Unit = 3.6 × 10⁶ Joules = 3.6 MJ.',
      'Energy is a scalar quantity.',
      'Law of Conservation of Energy: Electrical energy cannot be created or destroyed; it transforms into heat, light, mechanical, or chemical energy.',
      'Energy meters (integrating instruments) measure total accumulated electrical energy consumed over time.'
    ],
    hi: [
      'ऊर्जा का SI मात्रक जूल (J) है। 1 जूल = 1 वाट-सेकंड।',
      '1 kWh (किलोवाट-घंटा) = 1 बोर्ड ऑफ ट्रेड यूनिट = 3.6 × 10⁶ जूल।',
      'ऊर्जा एक अदिश राशि है।',
      'ऊर्जा संरक्षण का नियम: विद्युत ऊर्जा न तो बनाई जा सकती है और न ही नष्ट की जा सकती है; यह रूपांतरित होती है।',
      'ऊर्जा मीटर (इंटीग्रेटिंग उपकरण) समय के साथ खपत हुई कुल विद्युत ऊर्जा को मापते हैं।'
    ],
    bn: [
      'শক্তির SI একক জুল (J)। ১ জুল = ১ ওয়াট-সেকেন্ড।',
      '১ kWh (কিলওয়াট-ঘণ্টা) = ১ বোর্ড অব ট্রেড ইউনিট = ৩.৬ × ১০⁶ জুল।',
      'শক্তি একটি স্কেলার রাশি।',
      'শক্তির নিত্যতা সূত্র: বৈদ্যাতিক শক্তি সৃষ্টি বা ধ্বংস করা যায় না, কেবল রূপান্তর ঘটানো যায়।',
      'এনার্জি মিটার (ইন্টিগ্রেটিং ইনস্ট্রুমেন্ট) সময়ানুসারে মোট ব্যবহৃত বৈদ্যুতিক শক্তি পরিমাপ করে।'
    ]
  },
  commonMistakes: {
    en: [
      'Confusing kW (Power) with kWh (Energy). kW is appliance capacity; kWh is accumulated energy consumed.',
      'Forgetting to divide power in Watts by 1000 when computing energy in kWh.',
      'Believing 1 kWh equals 1000 Joules instead of 3.6 × 10⁶ Joules.'
    ],
    hi: [
      'kW (शक्ति) को kWh (ऊर्जा) से मिलाना। kW क्षमता है; kWh खपत की गई कुल ऊर्जा है।',
      'kWh में ऊर्जा की गणना करते समय वाट में शक्ति को 1000 से विभाजित करना भूल जाना।',
      'यह सोचना कि 1 kWh 3.6 × 10⁶ जूल के बजाय 1000 जूल के बराबर है।'
    ],
    bn: [
      'kW (ক্ষমতা) এবং kWh (শক্তি) গুলিয়ে ফেলা। kW হলো রেটিং; kWh হলো মোট ব্যবহৃত শক্তি।',
      'kWh এককে শক্তি বের করার সময় ক্ষমতাকে ১০০০ দিয়ে ভাগ করতে ভুলে যাওয়া।',
      '১ kWh কে ৩.৬ × ১০⁶ জুলের বদলে ১০০০ জুল মনে করা।'
    ]
  },
  mcqs: [
    {
      id: 'mcq-energy-1',
      question: {
        en: '1 Kilowatt-hour (kWh) of electrical energy is equal to how many Joules?',
        hi: '1 किलोवाट-घंटा (kWh) विद्युत ऊर्जा कितने जूल के बराबर होती है?',
        bn: '১ কিলওয়াট-ঘণ্টা (kWh) বৈদ্যুতিক শক্তি কত জুলের সমতুল্য?'
      },
      options: [
        { id: 'a', text: { en: '3600 J', hi: '3600 J', bn: '৩৬০০ J' } },
        { id: 'b', text: { en: '3.6 × 10⁶ J', hi: '3.6 × 10⁶ J', bn: '৩.৬ × ১০⁶ J' } },
        { id: 'c', text: { en: '1000 J', hi: '1000 J', bn: '১০০০ J' } },
        { id: 'd', text: { en: '746 J', hi: '746 J', bn: '৭৪৬ J' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: '1 kWh = 1000 W × 3600 s = 3,600,000 Joules = 3.6 × 10⁶ Joules.',
        hi: '1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ जूल।',
        bn: '১ kWh = ১০০০ W × ৩৬০০ s = ৩.৬ × ১০⁶ জুল।'
      }
    },
    {
      id: 'mcq-energy-2',
      question: {
        en: 'Which type of measuring instrument is an electricity bill energy meter?',
        hi: 'बिजली बिल ऊर्जा मीटर किस प्रकार का मापने वाला उपकरण है?',
        bn: 'বিদ্যুৎ বিলের এনার্জি মিটার কোন ধরণের পরিমাপক যন্ত্র?'
      },
      options: [
        { id: 'a', text: { en: 'Indicating instrument', hi: 'संकेतक (Indicating) उपकरण', bn: 'ইনডিকেটিং যন্ত্র' } },
        { id: 'b', text: { en: 'Integrating instrument', hi: 'इंटीग्रेटिंग (Integrating) उपकरण', bn: 'ইন্টিগ্রেটিং যন্ত্র' } },
        { id: 'c', text: { en: 'Recording instrument', hi: 'रिकॉर्डिंग उपकरण', bn: 'রেকর্ডিং যন্ত্র' } },
        { id: 'd', text: { en: 'Absolute instrument', hi: 'निरपेक्ष उपकरण', bn: 'অ্যাবসোলিউট যন্ত্র' } }
      ],
      correctOptionId: 'b',
      explanation: {
        en: 'An energy meter sums or integrates total energy consumed over time, so it is an integrating instrument.',
        hi: 'ऊर्जा मीटर समय के साथ खपत की गई कुल ऊर्जा को जोड़ता है, इसलिए यह एक इंटीग्रेटिंग उपकरण है।',
        bn: 'এনার্জি মিটার সময়ের সাথে ব্যবহৃত মোট শক্তি যোগ বা সমন্বিত করে, তাই এটি ইন্টিগ্রেটিং যন্ত্র।'
      }
    },
    {
      id: 'mcq-energy-3',
      question: {
        en: 'If a 500 W electric heater runs for 4 hours, how many B.O.T. units of electricity are consumed?',
        hi: 'यदि 500 W का इलेक्ट्रिक हीटर 4 घंटे तक चलता है, तो कितने B.O.T. यूनिट बिजली की खपत होगी?',
        bn: 'একটি ৫০০ W হিটার ৪ ঘণ্টা চললে কত B.O.T. ইউনিট বিদ্যুৎ খরচ হবে?'
      },
      options: [
        { id: 'a', text: { en: '2 Units', hi: '2 यूनिट', bn: '২ ইউনিট' } },
        { id: 'b', text: { en: '2000 Units', hi: '2000 यूनिट', bn: '২০০০ ইউনিট' } },
        { id: 'c', text: { en: '0.5 Units', hi: '0.5 यूनिट', bn: '০.৫ ইউনিট' } },
        { id: 'd', text: { en: '1.25 Units', hi: '1.25 यूनिट', bn: '১.২৫ ইউনিট' } }
      ],
      correctOptionId: 'a',
      explanation: {
        en: 'Units = (500 W × 4 h) / 1000 = 2000 / 1000 = 2 kWh (Units).',
        hi: 'यूनिट = (500 W × 4 h) / 1000 = 2 kWh (यूनिट)।',
        bn: 'ইউনিট = (৫০০ W × ৪ h) / ১০০০ = ২ kWh (ইউনিট)।'
      }
    }
  ],
  practiceQuestions: [
    {
      id: 'pq-energy-1',
      question: {
        en: 'A 1.5 kW air conditioner operates for 8 hours daily. Calculate its energy consumption in kWh per day and the total cost for 30 days if electricity rate is ₹7.50 per unit.',
        hi: 'एक 1.5 kW एयर कंडीशनर रोजाना 8 घंटे चलता है। प्रतिदिन kWh में इसकी ऊर्जा खपत और यदि बिजली की दर ₹7.50 प्रति यूनिट है तो 30 दिनों की कुल लागत ज्ञात कीजिए।',
        bn: 'একটি ১.৫ kW এয়ার কন্ডিশনার প্রতিদিন ৮ ঘণ্টা চলে। প্রতিদিন ব্যবহৃত শক্তি (kWh) এবং ইউনিট প্রতি ₹৭.৫০ হলে ৩০ দিনের মোট বিল কত?'
      },
      hint: {
        en: 'Daily energy = 1.5 kW × 8 h = 12 kWh. Monthly = 12 × 30 = 360 kWh.',
        hi: 'दैनिक ऊर्जा = 1.5 kW × 8 h = 12 kWh। मासिक = 12 × 30 = 360 kWh।',
        bn: 'দৈনিক শক্তি = ১.৫ kW × ৮ h = ১২ kWh। মাসিক = ১২ × ৩০ = ৩৬০ kWh।'
      },
      answerKey: {
        en: '1) Daily Energy = 1.5 kW × 8 hours = 12 kWh (Units/day).\n2) Monthly Energy (30 days) = 12 × 30 = 360 Units.\n3) Total Cost = 360 Units × ₹7.50 = ₹2700.00.',
        hi: '1) दैनिक ऊर्जा = 12 kWh। 2) मासिक ऊर्जा = 360 यूनिट। 3) कुल लागत = 360 × ₹7.50 = ₹2700.00।',
        bn: '১) দৈনিক শক্তি = ১২ kWh। ২) মাসিক শক্তি = ৩৬০ ইউনিট। ৩) মোট বিল = ৩৬০ × ₹৭.৫০ = ₹২৭০০.০০।'
      }
    },
    {
      id: 'pq-energy-2',
      question: {
        en: 'Convert 5 kWh of electrical energy into Joules and calories (1 cal ≈ 4.184 Joules).',
        hi: '5 kWh विद्युत ऊर्जा को जूल और कैलोरी (1 cal ≈ 4.184 जूल) में बदलें।',
        bn: '৫ kWh বৈদ্যুতিক শক্তিকে জুল এবং ক্যালরিতে রূপান্তর করো (১ cal ≈ ৪.১৮৪ জুল)।'
      },
      hint: {
        en: 'Use 1 kWh = 3.6 × 10⁶ J, then divide Joules by 4.184 to get calories.',
        hi: '1 kWh = 3.6 × 10⁶ J का प्रयोग करें, फिर जूल को 4.184 से विभाजित करें।',
        bn: '১ kWh = ৩.৬ × ১০⁶ J ব্যবহার করো, তারপর জুলকে ৪.১৮৪ দিয়ে ভাগ করো।'
      },
      answerKey: {
        en: '1) Energy in Joules = 5 × (3.6 × 10⁶ J) = 18 × 10⁶ Joules (18 Megajoules).\n2) Energy in calories = (18 × 10⁶ J) / 4.184 ≈ 4,302,103 calories ≈ 4302.1 kcal.',
        hi: '1) जूल में ऊर्जा = 18 × 10⁶ J (18 MJ)।\n2) कैलोरी में ऊर्जा = 18 × 10⁶ / 4.184 ≈ 4302.1 kcal।',
        bn: '১) জুলে শক্তি = ১৮ × ১০⁶ J (১৮ মেগাজুল)।\n২) ক্যালরিতে শক্তি = ১৮ × ১০⁶ / ৪.১৮৪ ≈ ৪৩০২.১ kcal।'
      }
    }
  ]
};
